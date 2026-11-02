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

export function remainingTime(attempt, now = Date.now()) {
  return Math.max(0, attempt.deadline - now);
}

export function scoreAttempt(questions, answers) {
  const correct = questions.filter(question => question.accepted.includes(answers[question.id])).length;
  const answered = questions.filter(question => question.options.some(option => option.key === answers[question.id])).length;
  return { correct, answered, incorrect: answered - correct, unanswered: questions.length - answered, score: correct * 2, total: questions.length * 2 };
}