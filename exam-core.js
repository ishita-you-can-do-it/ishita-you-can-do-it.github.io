import { marked } from 'marked';

export const DURATION = 3 * 60 * 60 * 1000;
export const SOURCE = 'UGC_NET_Psychology_March_2023_Questions_Explained.md';
export const PAPER_ONE_SOURCE = 'UGC_NET_Paper_1_March_2023_Questions_Explained.md';

export function parsePaperOne(markdown) {
  const sections = markdown.split(/^# Part \d+[^\n]*$/m);
  const clean = text => text.replace(/Time Allotted:[\s\S]*?SOLVED PAPER MARCH 2023/g, '').replace(/^### PDF page \d+\s*$/gm, '').replace(/^UGC NET PAPER[^\n]*$|^GENERAL APTITUDE$|^SOLVED PAPER MARCH 2023$/gm, '').replace(/\u0008/g, '').trim();
  const questionText = clean(sections[1] || '').replace(/\n\s*3\s*\n(?=\s*a\.)/, '\n');
  const matches = [...questionText.matchAll(/^Q\.?([0-9]+)\.\s*/gm)];
  const keys = new Map([...String(sections[2]).matchAll(/^\s*(\d+)\s*\n([a-d])\s*$/gm)].map(match => [Number(match[1]), match[2].toUpperCase()]));
  const explanationText = clean(sections[3] || '');
  const explanations = [...explanationText.matchAll(/^\s*(\d+)\.\s*\n\s*Option \(([a-d])\) is correct\./gm)];
  const explanationMap = new Map(explanations.map((match, index) => [Number(match[1]), explanationText.slice(match.index, explanations[index + 1]?.index ?? explanationText.length).replace(/^\s*\d+\.\s*\n/, '').replace(/\n---\s*$/, '').trim()]));
  const audit = marked.lexer(sections[5] || '').filter(token => token.type === 'list').flatMap(token => token.items).map(item => item.text);
  const passageStart = questionText.indexOf('Direction for Questions (46 -50):');
  const passageEnd = matches.find(match => Number(match[1]) === 46)?.index;
  const passage = questionText.slice(passageStart, passageEnd).trim();
  const values = questionText.slice(questionText.indexOf('Years ↓'), matches[0]?.index).match(/\b\d+\b/g) || [];
  if (values.length !== 66) throw new Error('Paper I athlete data must contain six years with ten values each.');
  const table = '| Year | A M | A F | B M | B F | C M | C F | D M | D F | E M | E F |\n|---|---|---|---|---|---|---|---|---|---|---|\n' + Array.from({ length: 6 }, (_, index) => `| ${values.slice(index * 11, (index + 1) * 11).join(' | ')} |`).join('\n');
  const questions = matches.map((match, index) => {
    const id = Number(match[1]);
    let text = questionText.slice(match.index + match[0].length, matches[index + 1]?.index ?? questionText.length);
    if (id === 45) text = text.slice(0, text.indexOf('Direction for Questions (46 -50):'));
    const parts = text.trim().replace(/\n---\s*$/, '').split(/^\s*([a-d])\.\s+/m);
    const notes = audit.filter(note => new RegExp(`^\\*\\*Q${id}(?::| wording:)`).test(note));
    const question = { id, prompt: parts[0].trim(), options: [], accepted: [keys.get(id)], explanation: `${explanationMap.get(id) || ''}\n\n${notes.map(note => `**Source/key note:** ${note}`).join('\n\n')}`.trim() };
    for (let optionIndex = 1; optionIndex < parts.length; optionIndex += 2) question.options.push({ key: parts[optionIndex].toUpperCase(), text: parts[optionIndex + 1].trim() });
    if (id <= 5) { question.passage = 'Year-wise country-wise distribution of male (M) and female (F) athletes.'; question.passageTable = table; question.passageLabel = 'Data · Questions 1–5'; }
    if (id >= 46) { question.passage = passage; question.passageLabel = 'Passage · Questions 46–50'; }
    return question;
  });
  if (questions.length !== 50 || questions.some((question, index) => question.id !== index + 1 || !question.prompt || question.options.length !== 4 || !question.accepted[0] || !explanationMap.has(question.id))) throw new Error('Paper I must contain 50 complete questions, four options, a printed answer key, and explanations.');
  return questions;
}

export function parseQuestions(markdown) {
  const tokens = marked.lexer(markdown);
  const questions = [];
  let current;
  for (const token of tokens) {
    if (token.type === 'heading' && /^Question \d+$/.test(token.text)) {
      current = { id: Number(token.text.replace('Question ', '')), prompt: '', options: [], accepted: [], explanation: '' };
      questions.push(current);
    } else if (current && token.type === 'blockquote') {
      const text = token.raw.replace(/^ {0,3}> ?/gm, '').trim();
      const parts = text.split(/^\(([A-D])\)\s*/m);
      current.prompt += parts[0].replace(/^\d+\.\s*/, '').trim();
      for (let index = 1; index < parts.length; index += 2) {
        current.options.push({ key: parts[index], text: parts[index + 1].trim() });
      }
    } else if (current && token.type === 'paragraph') {
      const answer = token.raw.match(/^\*\*Answer:\s*([A-D, ]+)\*\*/);
      if (answer) current.accepted = answer[1].split(',').map(value => value.trim());
      else current.explanation += token.raw + '\n\n';
    }
  }
  for (const [sourceId, firstId, lastId] of [[90, 91, 95], [95, 96, 100]]) {
    const option = questions.find(question => question.id === sourceId)?.options.at(-1);
    const passageStart = option?.text.search(/Read the (?:given paragraph|following passage)/) ?? -1;
    if (passageStart !== -1) {
      const passage = option.text.slice(passageStart);
      option.text = option.text.slice(0, passageStart).trim();
      for (const question of questions.filter(question => question.id >= firstId && question.id <= lastId)) question.passage = passage;
    }
  }
  if (questions.length !== 100 || questions.some((question, index) => question.id !== index + 1 || !question.prompt || question.options.length !== 4 || !question.accepted.length || !question.explanation)) {
    throw new Error('The question file must contain 100 complete, sequential questions with four options, answers, and explanations.');
  }
  return questions;
}

const questionHeading = /^#{2,3}\s+Question\s+(\d+)\s*$/gm;
const choicePattern = /(^|[\t ]+)(?:\(([1-4A-D])\)|([1-4])[.)]|([A-D])[.)])[\t ]*/gm;

function parseAnswer(block) {
  const answerBlock = block.match(/###\s*\d+\.\s*Answer\s*\n\s*\*\*([^*]+)\*\*/i);
  const keyBlock = block.match(/\*\*(?:Printed answer key|Answer-key entry):\*\*\s*(?:Option\s*)?\*\*([^*]+)\*\*/i);
  const raw = (answerBlock?.[1] || keyBlock?.[1] || '').trim();
  const keys = raw.match(/^(?:Option\s*)?([A-D1-4])(?:\s*(?:,|and)\s*([A-D1-4]))?(?:\s*(?:,|and)\s*([A-D1-4]))?(?:\s*(?:,|and)\s*([A-D1-4]))?/i);
  const accepted = keys ? keys.slice(1).filter(Boolean).map(value => value.toUpperCase()) : [];
  return { raw, accepted };
}

function extractOptions(source) {
  const sectionMarkers = [...source.matchAll(/(?:Options?|Codes?)\s*:?/gi)];
  const optionText = sectionMarkers.length
    ? source.slice(sectionMarkers.at(-1).index + sectionMarkers.at(-1)[0].length)
    : source;
  const visibleLabels = new Set(
    [...optionText.matchAll(/(?:\(([1-4A-D])\)|(?<![\w])([1-4])[.)]|([A-D])[.)])/g)]
      .map(match => (match[1] || match[2] || match[3]).toUpperCase())
  );
  const markers = [];
  for (const match of optionText.matchAll(choicePattern)) {
    markers.push({ start: match.index + match[1].length, end: match.index + match[0].length, key: (match[2] || match[3] || match[4]).toUpperCase() });
  }
  const hasFourChoiceLabels = new Set(markers.map(marker => marker.key)).size >= 4;

  let bestStart = -1;
  let bestLength = 0;
  for (let index = 0; index < markers.length; index++) {
    const first = markers[index].key;
    const sequence = /^[1-4]$/.test(first) ? ['1', '2', '3', '4'] : ['A', 'B', 'C', 'D'];
    if (markers.slice(index, index + 4).length === 4 && markers.slice(index, index + 4).every((marker, offset) => marker.key === sequence[offset])) {
      bestStart = index;
      bestLength = 4;
    }
  }
  if (bestStart < 0) {
    for (let index = 0; index < markers.length; index++) {
      const numeric = /^[1-4]$/.test(markers[index].key);
      let end = index + 1;
      let previous = markers[index].key;
      while (end < markers.length) {
        const key = markers[end].key;
        if (/^[1-4]$/.test(key) !== numeric || Number(key) <= Number(previous)) break;
        previous = key;
        end++;
      }
      if (end - index >= 2) {
        bestStart = index;
        bestLength = Math.min(4, end - index);
      }
    }
  }
  if (bestStart < 0) return { prompt: source.trim(), options: [], hasFourChoiceLabels, visibleLabels };

  const selected = markers.slice(bestStart, bestStart + bestLength);
  const optionOffset = source.length - optionText.length;
  const prompt = source.slice(0, optionOffset + selected[0].start).replace(/(?:Options?|Codes?)\s*:?\s*$/i, '').trim();
  const options = selected.map((marker, index) => ({
    key: marker.key,
    text: optionText.slice(marker.end, selected[index + 1]?.start ?? optionText.length).trim()
  }));
  return { prompt, options, hasFourChoiceLabels, visibleLabels };
}

function questionSource(block) {
  const questionPart = block.split(/###\s*\d+\.\s*Answer\s*\n|\*\*(?:Printed answer key|Answer-key entry):\*\*/i)[0];
  const questionSection = questionPart.match(/###\s*1\.\s*Question\s*\n([\s\S]*?)(?=\n###\s*2\.\s*Options)/i);
  const optionSection = questionPart.match(/###\s*2\.\s*Options\s*\n([\s\S]*?)(?=\n###\s*3\.\s*Answer)/i);
  if (questionSection && optionSection) return { stem: questionSection[1].trim(), choiceText: optionSection[1].trim() };

  const code = questionPart.match(/```(?:text)?\s*\n([\s\S]*?)\n```/i);
  const source = (code?.[1] || questionPart).replace(/\u000c/g, '').replace(/^\s*www\.aifer\.in.*$/gim, '').replace(/^\s*To get free NTA NET study materials.*$/gim, '').trim();
  return { source };
}

export function parseQuestionBank(markdown, { excludedIds = [] } = {}) {
  const headings = [...markdown.matchAll(questionHeading)];
  const documentSections = [...markdown.matchAll(/^## (?:High-yield|Topic-wise|Source|Editorial)/gm)].map(match => match.index);
  return headings.map((heading, index) => {
    const start = heading.index;
    const nextQuestion = headings[index + 1]?.index ?? markdown.length;
    const nextSection = documentSections.find(sectionStart => sectionStart > start && sectionStart < nextQuestion);
    const end = nextSection ?? nextQuestion;
    const block = markdown.slice(start, end);
    const id = Number(heading[1]);
    const answer = parseAnswer(block);
    const source = questionSource(block);
    const rawSource = source.choiceText ? `${source.stem}\n\n${source.choiceText}` : (source.source || '');
    const parsed = source.choiceText
      ? extractOptions(source.choiceText)
      : extractOptions(source.source || '');
    let options = parsed.options;
    let optionsParsed = options.length === 4;
    let prompt = source.stem || parsed.prompt;
    const keyIsAlphabetic = /^[A-D]$/.test(answer.accepted[0] || '');
    const canUseFallback = answer.accepted.length === 1 && rawSource.trim().length > 20;
    if (!optionsParsed && canUseFallback) {
      const optionKeys = keyIsAlphabetic ? ['A', 'B', 'C', 'D'] : ['1', '2', '3', '4'];
      options = optionKeys.map(key => ({ key, text: `Option ${key} (see the choices in the question text above)` }));
      prompt = rawSource;
    }
    prompt = prompt.replace(/^\s*(?:Q\.?\s*)?\d+[.)]?\s*/, '').trim();
    const explanationMatch = block.match(/(?:####\s*Explanation[^\n]*|###\s*\d+\.\s*Explanation)\s*\n([\s\S]*)/i);
    const explanation = (explanationMatch?.[1] || '').trim();
    const explicitExclusion = excludedIds.includes(id);
    const unkeyed = !answer.accepted.length || /WQ|withdrawn|not provided|no entry|blank in source|no valid option/i.test(answer.raw);
    const multiAnswer = answer.accepted.length > 1;
    const unmatchedKey = answer.accepted.length === 1 && options.length > 0 && !options.some(option => option.key === answer.accepted[0]);
    const scoreable = !explicitExclusion && !unkeyed && !multiAnswer && !unmatchedKey && options.length === 4;
    const exclusionReason = explicitExclusion
      ? 'This source item is held out of scoring pending verification.'
      : multiAnswer
        ? 'The printed key accepts multiple answers; this item is not single-answer scored.'
        : unkeyed
          ? 'No confirmed single answer is available in the source.'
          : unmatchedKey || options.length !== 4
            ? 'The source options or answer key could not be matched reliably.'
            : '';
    return {
      id,
      prompt,
      options,
      optionsParsed,
      accepted: answer.accepted,
      answerNote: answer.raw,
      explanation,
      scoreable,
      exclusionReason,
      passage: ''
    };
  });
}

export function remainingTime(attempt, now = Date.now()) {
  return Math.max(0, attempt.deadline - now);
}

export function scoreAttempt(questions, answers) {
  const scoredQuestions = questions.filter(question => question.scoreable !== false);
  const correct = scoredQuestions.filter(question => question.accepted.includes(answers[question.id])).length;
  const answered = scoredQuestions.filter(question => question.options.some(option => option.key === answers[question.id])).length;
  return { correct, answered, incorrect: answered - correct, unanswered: scoredQuestions.length - answered, unscored: questions.length - scoredQuestions.length, score: correct * 2, total: scoredQuestions.length * 2 };
}