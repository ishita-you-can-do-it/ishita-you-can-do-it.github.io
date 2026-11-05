import { marked } from 'marked';
import { createIcons, ArrowLeft, ArrowRight, BookOpen, Brain, Check, CheckCheck, ChevronLeft, ChevronRight, Clock3, Flag, GraduationCap, History, Maximize, RotateCcw, X } from 'lucide';
import { DURATION, remainingTime, scoreAttempt } from './exam-core.js';
import { findPaper, PAPER_GROUPS, PAPERS } from './paper-catalog.js';

const icons = { ArrowLeft, ArrowRight, BookOpen, Brain, Check, CheckCheck, ChevronLeft, ChevronRight, Clock3, Flag, GraduationCap, History, Maximize, RotateCcw, X };
const app = document.querySelector('#app');
const dialog = document.querySelector('#submit-dialog');
const STORE = 'ugc-net-markdown-practice-v2';
let state = { attempt: null, history: [] };
let questions = [];
let storageAvailable = true;
let reviewFilter = 'all';
let historyView = false;
let selectedMode = 'exam';

const active = () => state.attempt && !state.attempt.finishedAt;
const isStudy = attempt => attempt?.mode === 'study';
const modeLabel = attempt => isStudy(attempt) ? 'Study mode' : 'Exam mode';
const paperFor = attempt => findPaper(attempt?.setId);
const groupFor = groupId => PAPER_GROUPS.find(group => group.id === groupId);
const groupForPaper = paper => groupFor(paper?.category);
const questionsForAttempt = attempt => {
  const paper = paperFor(attempt);
  if (!paper) return [];
  const ids = attempt.questionIds || (isStudy(attempt) ? paper.questions : paper.questions.filter(question => question.scoreable)).map(question => question.id);
  return ids.map(id => paper.questions.find(question => question.id === id)).filter(Boolean);
};
const icon = name => `<i data-lucide="${name}" aria-hidden="true"></i>`;
const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const markdown = value => marked.parse(escape(value), { breaks: true });
const formatTime = milliseconds => {
  const seconds = Math.ceil(milliseconds / 1000);
  return [Math.floor(seconds / 3600), Math.floor(seconds % 3600 / 60), seconds % 60].map(value => String(value).padStart(2, '0')).join(':');
};
const date = timestamp => new Date(timestamp).toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });

function persist() {
  try { localStorage.setItem(STORE, JSON.stringify(state)); }
  catch { storageAvailable = false; }
}

function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE) || 'null');
    if (!saved || !Array.isArray(saved.history)) return;
    const valid = attempt => attempt && paperFor(attempt) && Number.isFinite(attempt.startedAt) && Number.isFinite(attempt.deadline) && attempt.deadline - attempt.startedAt === DURATION && attempt.answers && typeof attempt.answers === 'object' && !Array.isArray(attempt.answers) && Array.isArray(attempt.marked);
    state.history = saved.history.filter(attempt => valid(attempt) && Number.isFinite(attempt.finishedAt)).slice(0, 20);
    if (valid(saved.attempt)) {
      state.attempt = saved.attempt;
      state.attempt.mode = isStudy(state.attempt) ? 'study' : 'exam';
      state.attempt.revealed = Array.isArray(state.attempt.revealed) ? state.attempt.revealed : [];
      if (!Array.isArray(state.attempt.questionIds)) {
        state.attempt.questionIds = (isStudy(state.attempt) ? paperFor(state.attempt).questions : paperFor(state.attempt).questions.filter(question => question.scoreable)).map(question => question.id);
      }
      state.attempt.index = Math.max(0, Math.min(state.attempt.questionIds.length - 1, Number(state.attempt.index) || 0));
    }
  } catch { storageAvailable = false; }
}

function navigate(route) {
  if (location.hash === route) routeChanged();
  else location.hash = route;
}

function routeChanged() {
  render();
  window.scrollTo(0, 0);
}

function header(exam = false) {
  const paper = paperFor(state.attempt);
  const group = groupForPaper(paper);
  return `<header class="site-header"><div class="header-inner">
    <a class="brand" href="#library" aria-label="Ishita you u can do it home"><img class="brand-symbol" src="./logo.JPG" alt="Ishita" width="38" height="38"><span>Ishita you u can do it</span></a>
    ${exam ? `<span class="header-paper">${escape(paper?.title || '')} <span>/</span> ${escape(group?.label || '')}</span><div class="timer" role="timer" aria-label="Time remaining">${icon('clock-3')}<span id="timer-value">${formatTime(remainingTime(state.attempt))}</span></div>` : `<span class="header-label">UGC NET <span class="dot"></span> PSYCHOLOGY</span>`}
  </div></header>`;
}

function footer() {
  return '<footer class="site-footer"><span>UGC NET Practice</span><span>Psychology · Previous question papers</span></footer>';
}

function library() {
  const groupCards = PAPER_GROUPS.filter(group => group.id !== 'legacy').map(group => `<button class="paper-choice" data-action="choose-paper" data-group="${group.id}"><span class="paper-icon">${icon(group.id === 'paper1' ? 'book-open' : 'brain')}</span><span class="paper-choice-copy"><strong>${group.label}</strong><small>${group.description} · ${group.sets.length} sets</small></span>${icon('arrow-right')}</button>`).join('');
  const legacy = groupFor('legacy');
  const resume = active() ? `<div class="resume-banner"><span>${icon('clock-3')} ${escape(paperFor(state.attempt).title)} · ${modeLabel(state.attempt)} in progress</span><button class="button primary" data-action="resume">Resume ${icon('arrow-right')}</button></div>` : '';
  const tabs = `<div class="tabs" role="tablist" aria-label="Practice views"><button role="tab" aria-selected="${!historyView}" class="tab ${!historyView ? 'selected' : ''}" data-action="library-tab">${icon('book-open')} Papers <span>${PAPER_GROUPS.filter(group => group.id !== 'legacy').reduce((count, group) => count + group.sets.length, 0)}</span></button><button role="tab" aria-selected="${historyView}" class="tab ${historyView ? 'selected' : ''}" data-action="history-tab">${icon('history')} My attempts <span>${state.history.length}</span></button></div>`;
  return `${header()}<main class="page library-page">
    <div class="page-title"><div><p class="eyebrow">YOUR EXAM LIBRARY</p><h1>UGC NET Practice</h1><p class="subtitle">Psychology · Choose a paper set and attempt mode</p></div><div class="library-count"><strong>${String(PAPERS.length).padStart(2, '0')}</strong><span>question sets</span></div></div>
    ${resume}${tabs}
    ${historyView ? historyList() : `<div class="section-label"><h2>Choose paper</h2><span>Grouped by question count</span></div><section class="paper-choice-list" aria-label="Paper types">${groupCards}</section>${legacy?.sets.length ? `<section class="legacy-section"><div class="section-label"><h2>Legacy set</h2><span>Outside the current 50/100 rule</span></div>${legacy.sets.map(paper => `<button class="legacy-paper-link" data-action="choose-paper" data-group="legacy">${escape(paper.title)} · ${paper.sourceCount} questions ${icon('arrow-right')}</button>`).join('')}</section>` : ''}`}
    ${!storageAvailable ? '<p class="notice" role="alert">Browser storage is unavailable. Progress may not survive a reload.</p>' : ''}
  </main>${footer()}`;
}

function historyList() {
  if (!state.history.length) return `<section class="empty-state"><h2>No completed attempts yet</h2><p>Your completed paper attempts will appear here.</p><button class="button primary" data-action="library-tab">Browse papers ${icon('arrow-right')}</button></section>`;
  return `<section class="attempt-list" aria-label="Completed attempts">${state.history.map((attempt, index) => {
    const paper = paperFor(attempt);
    if (!paper) return '';
    const result = scoreAttempt(questionsForAttempt(attempt), attempt.answers);
    return `<div class="attempt-row"><span class="attempt-icon">${icon('check-check')}</span><div><h2>${escape(paper.title)} · ${groupForPaper(paper)?.label}</h2><p>${modeLabel(attempt)} · ${date(attempt.finishedAt)}</p></div><strong>${result.score}<small> / ${result.total}</small></strong><button class="button secondary" data-action="review-history" data-index="${index}" ${active() ? 'disabled' : ''}>Review ${icon('arrow-right')}</button></div>`;
  }).join('')}</section>`;
}

function paperPage(groupId) {
  const group = groupFor(groupId) || PAPER_GROUPS[0];
  const mode = active() ? (isStudy(state.attempt) ? 'study' : 'exam') : selectedMode;
  const cards = group.sets.map((paper, index) => `<article class="paper-card ready-paper"><div class="paper-top"><span class="paper-icon">${icon(group.id === 'paper1' ? 'book-open' : 'brain')}</span><span class="badge">${paper.sourceCount} QUESTIONS</span></div><p class="eyebrow">${String(index + 1).padStart(2, '0')} · ${group.label.toUpperCase()}</p><h2>${escape(paper.title)}</h2><p class="source-paper-subtitle">${escape(paper.sourceTitle || 'Psychology')}</p><div class="paper-details"><span><strong>${paper.scoreableCount}</strong> scored questions</span><span>${paper.sourceCount - paper.scoreableCount} held out</span></div>${paper.sourceNote ? `<p class="source-paper-note">${escape(paper.sourceNote)}</p>` : ''}<button class="button primary full" data-action="start" data-paper="${paper.id}" ${active() && paperFor(state.attempt)?.id !== paper.id ? 'disabled' : ''}>${active() && paperFor(state.attempt)?.id === paper.id ? 'Resume set' : 'Start set'} ${icon('arrow-right')}</button></article>`).join('');
  return `${header()}<main class="page"><a class="back-link" href="#library">${icon('arrow-left')} All papers</a><div class="page-title"><div><p class="eyebrow">${group.label.toUpperCase()}</p><h1>Choose a question set</h1><p class="subtitle">${group.description} · ${group.sets.length} available sets</p></div></div>
    <div class="exam-facts"><span>${icon('clock-3')} <strong>3 hours</strong> duration</span><span>${icon('check-check')} <strong>+2 marks</strong> per correct answer</span><span>${icon('check')} <strong>No negative marking</strong></span></div>
    <fieldset class="mode-selector" ${active() ? 'disabled' : ''}><legend>Attempt mode</legend><div class="mode-options">${[['exam', 'Exam mode', 'graduation-cap'], ['study', 'Study mode', 'book-open']].map(([value, label, symbol]) => `<label class="mode-option"><input type="radio" name="mode" value="${value}" ${mode === value ? 'checked' : ''}><span>${icon(symbol)} ${label}</span></label>`).join('')}</div></fieldset>
    <section class="papers-grid" aria-label="Question sets">${cards}</section>
    <div class="start-strip"><span>${icon('clock-3')} <strong>${active() ? formatTime(remainingTime(state.attempt)) : '03:00:00'}</strong></span><span>${active() ? `${escape(paperFor(state.attempt).title)} in progress` : 'Timer starts when you start a set'}</span></div>
    <p class="exam-note">Source items with missing, withdrawn, multiple-answer or unresolved keys are shown in Study mode but held out of exam scoring.</p>
    ${!storageAvailable ? '<p class="notice" role="alert">Browser storage is unavailable. Progress may not survive a reload.</p>' : ''}
  </main>${footer()}`;
}

function questionStatus(question) {
  if (!question.scoreable) return 'unscored';
  if (state.attempt.marked.includes(question.id)) return 'marked';
  return state.attempt.answers[question.id] ? 'answered' : 'unanswered';
}

function examPage() {
  const attempt = state.attempt;
  const question = questions[attempt.index];
  const result = scoreAttempt(questions, attempt.answers);
  const eligibleCount = questions.filter(item => item.scoreable).length;
  const revealed = isStudy(attempt) && attempt.revealed.includes(question.id);
  const optionControls = question.scoreable
    ? `${!question.optionsParsed ? '<p class="notice question-source-note">Choices appear in the question text; select the matching label.</p>' : ''}<fieldset class="options"><legend class="sr-only">Choose one answer for question ${question.id}</legend>${question.options.map(option => `<label class="option ${attempt.answers[question.id] === option.key ? 'chosen' : ''}"><input type="radio" name="answer" value="${option.key}" ${attempt.answers[question.id] === option.key ? 'checked' : ''}><span class="option-key">${escape(option.key)}</span><span class="option-text">${escape(option.text)}</span><span class="option-check">${icon('check')}</span></label>`).join('')}</fieldset>`
    : `<p class="notice unscored-note" role="note">Not included in scoring. ${escape(question.exclusionReason || 'The source does not provide a verified single answer.')}</p>`;
  const studyPanel = !isStudy(attempt) ? '' : `<div class="study-reveal"><button class="button secondary" data-action="reveal" aria-expanded="${revealed}" aria-controls="study-solution">${icon('book-open')} ${revealed ? 'Hide answer & explanation' : question.scoreable ? 'Reveal answer & explanation' : 'View source note & explanation'}</button>${revealed ? `<section id="study-solution" class="solution" aria-label="Answer and explanation"><h3>${icon('book-open')} ${question.scoreable ? 'Answer & explanation' : 'Source note & explanation'}</h3>${question.scoreable ? `<p class="accepted-answer">Accepted answer${question.accepted.length > 1 ? 's' : ''}: <strong>${question.accepted.join(', ')}</strong></p>${question.optionsParsed ? question.options.filter(option => question.accepted.includes(option.key)).map(option => `<p><strong>${escape(option.key)}.</strong> ${escape(option.text)}</p>`).join('') : ''}` : `<p class="accepted-answer">${escape(question.answerNote || question.exclusionReason || 'No verified single answer is available.')}</p>`}${markdown(question.explanation)}</section>` : ''}</div>`;
  return `${header(true)}<main class="exam-layout"><section class="question-area" aria-label="Current question">
    <div class="exam-heading"><div><p class="eyebrow">${groupForPaper(paperFor(attempt))?.label.toUpperCase()} · ${modeLabel(attempt)}</p><h1>Question ${question.id}<span> · ${attempt.index + 1} of ${questions.length}</span></h1></div><div class="question-tools"><span class="marks-label">${question.scoreable ? '+2 marks' : 'Not scored'}</span><button class="icon-button" title="Toggle fullscreen" aria-label="Toggle fullscreen" data-action="fullscreen">${icon('maximize')}</button></div></div>
    <div class="progress-track"><div style="width:${eligibleCount ? result.answered / eligibleCount * 100 : 0}%"></div></div>
    ${question.passage ? `<section class="passage"><h2>${escape(question.passageLabel || 'Shared passage')}</h2><p>${escape(question.passage)}</p>${question.passageTable ? `<div class="data-table">${markdown(question.passageTable)}</div>` : ''}</section>` : ''}
    <div class="question-prompt">${markdown(question.prompt)}</div>${optionControls}
    <div class="question-actions"><button class="button secondary ${attempt.marked.includes(question.id) ? 'flagged' : ''}" data-action="mark" aria-pressed="${attempt.marked.includes(question.id)}">${icon('flag')} ${attempt.marked.includes(question.id) ? 'Marked for review' : 'Mark for review'}</button><button class="text-button" data-action="clear" ${!question.scoreable || !attempt.answers[question.id] ? 'disabled' : ''}>${icon('rotate-ccw')} Clear answer</button></div>
    ${studyPanel}
    <div class="question-navigation"><button class="button secondary" data-action="previous" ${attempt.index === 0 ? 'disabled' : ''}>${icon('chevron-left')} Previous</button><span>${attempt.index + 1} of ${questions.length}</span><button class="button primary" data-action="${attempt.index === questions.length - 1 ? 'submit' : 'next'}">${attempt.index === questions.length - 1 ? 'Finish exam' : 'Next question'} ${icon('chevron-right')}</button></div>
    ${!storageAvailable ? '<p class="notice" role="alert">Progress cannot be saved. Do not refresh or close this tab.</p>' : ''}
  </section><aside class="question-sidebar"><div class="sidebar-title"><h2>Question navigator</h2><span>${questions.length}</span></div><div class="answer-count"><strong>${result.answered}</strong><span>answered <span>/ ${eligibleCount} scored</span></span></div><div class="legend"><span><i class="legend-dot answered"></i>Answered</span><span><i class="legend-dot marked"></i>For review</span><span><i class="legend-dot unanswered"></i>Unanswered</span><span><i class="legend-dot unscored"></i>Not scored</span></div><div class="question-grid">${questions.map((item, index) => `<button class="question-number ${questionStatus(item)} ${index === attempt.index ? 'current' : ''}" data-action="jump" data-index="${index}" aria-label="Question ${item.id}, ${questionStatus(item)}${attempt.marked.includes(item.id) && attempt.answers[item.id] ? ', answered' : ''}" ${index === attempt.index ? 'aria-current="step"' : ''}>${item.id}</button>`).join('')}</div><div class="sidebar-bottom"><div><span>Unanswered</span><strong>${result.unanswered}</strong></div><div><span>Marked for review</span><strong>${attempt.marked.length}</strong></div><div><span>Not scored</span><strong>${result.unscored}</strong></div><button class="button finish full" data-action="submit">${icon('check-check')} Finish ${isStudy(attempt) ? 'study' : 'exam'}</button></div></aside></main>`;
}

function resultsPage() {
  const attempt = state.attempt;
  const paper = paperFor(attempt);
  const group = groupForPaper(paper);
  const result = scoreAttempt(questions, attempt.answers);
  const filtered = questions.filter(question => reviewFilter === 'all' || (reviewFilter === 'unscored' ? !question.scoreable : question.scoreable && (reviewFilter === 'correct' ? question.accepted.includes(attempt.answers[question.id]) : reviewFilter === 'incorrect' ? attempt.answers[question.id] && !question.accepted.includes(attempt.answers[question.id]) : !attempt.answers[question.id])));
  const filterTabs = [['all', 'All', questions.length], ['correct', 'Correct', result.correct], ['incorrect', 'Incorrect', result.incorrect], ['unanswered', 'Unanswered', result.unanswered], ['unscored', 'Not scored', result.unscored]];
  return `${header()}<main class="page results-page"><a class="back-link" href="#library">${icon('arrow-left')} All papers</a><div class="page-title"><div><p class="eyebrow">${group?.label.toUpperCase()} · ${escape(paper?.title || '')}</p><h1>${isStudy(attempt) ? 'Study session complete' : 'Your exam results'}</h1><p class="subtitle">${attempt.reason === 'timeout' ? 'Time expired · Automatically submitted' : 'Submitted'} · ${modeLabel(attempt)} · ${date(attempt.finishedAt)}</p></div><button class="button secondary" data-action="choose-paper" data-group="${group?.id || 'paper2'}">${icon('rotate-ccw')} New attempt</button></div>
    <section class="score-band" aria-label="Exam score"><div class="main-score"><span>FINAL SCORE</span><strong>${result.score}<small> / ${result.total}</small></strong><span>${result.total ? Math.round(result.score / result.total * 100) : 0}% · No negative marking</span></div><div class="score-metric correct"><span>Correct</span><strong>${result.correct}</strong></div><div class="score-metric incorrect"><span>Incorrect</span><strong>${result.incorrect}</strong></div><div class="score-metric"><span>Unanswered</span><strong>${result.unanswered}</strong></div><div class="score-metric"><span>Not scored</span><strong>${result.unscored}</strong></div><div class="score-metric"><span>Time taken</span><strong class="time-taken">${formatTime(Math.min(DURATION, Math.max(0, attempt.finishedAt - attempt.startedAt)))}</strong></div></section>
    <div class="review-heading"><h2>Answers &amp; explanations</h2><span>${filtered.length} questions</span></div><div class="filter-tabs" role="tablist" aria-label="Review filter">${filterTabs.map(([value, label, count]) => `<button role="tab" aria-selected="${reviewFilter === value}" class="filter-tab ${reviewFilter === value ? 'selected' : ''}" data-action="filter" data-filter="${value}">${label} <span>${count}</span></button>`).join('')}</div>
    <section class="review-list" aria-label="Question solutions">${filtered.length ? filtered.map(question => {
      const chosen = attempt.answers[question.id];
      const correct = question.scoreable && question.accepted.includes(chosen);
      const status = !question.scoreable ? 'Not scored' : correct ? 'Correct' : chosen ? 'Incorrect' : 'Unanswered';
      return `<details class="review-question" ${question.id === filtered[0].id ? 'open' : ''}><summary><span class="review-id">${String(question.id).padStart(2, '0')}</span><span class="review-preview">${escape(question.prompt.replace(/\n/g, ' '))}</span><span class="result-status ${correct ? 'correct' : question.scoreable && chosen ? 'incorrect' : 'unscored'}">${status}</span></summary><div class="review-body">${question.passage ? `<div class="passage"><p>${escape(question.passage)}</p>${question.passageTable ? `<div class="data-table">${markdown(question.passageTable)}</div>` : ''}</div>` : ''}<div class="question-prompt">${markdown(question.prompt)}</div>${question.options.length ? `<div class="review-options">${question.options.map(option => `<div class="review-option ${question.scoreable && question.accepted.includes(option.key) ? 'correct-option' : question.scoreable && chosen === option.key ? 'wrong-option' : ''}"><span class="option-key">${escape(option.key)}</span><span class="option-text">${escape(option.text)}</span><span class="review-option-label">${question.scoreable && question.accepted.includes(option.key) ? 'Correct answer' : question.scoreable && chosen === option.key ? 'Your answer' : ''}</span></div>`).join('')}</div>` : ''}<div class="solution"><h3>${icon('book-open')} Solution &amp; study notes</h3>${question.scoreable ? `<p class="accepted-answer">Accepted answer${question.accepted.length > 1 ? 's' : ''}: <strong>${question.accepted.join(', ')}</strong> · Your answer: <strong>${chosen || 'Not answered'}</strong></p>` : `<p class="accepted-answer">Not scored: ${escape(question.answerNote || question.exclusionReason || 'The source does not provide a verified single answer.')}</p>`}${markdown(question.explanation)}</div></div></details>`;
    }).join('') : '<p class="empty-filter">No questions in this category.</p>'}</section>
  </main>${footer()}`;
}

function render() {
  if (active() && !remainingTime(state.attempt)) { finish('timeout'); return; }
  const route = location.hash || '#library';
  if (route === '#exam' && active()) {
    questions = questionsForAttempt(state.attempt);
    app.innerHTML = questions.length ? examPage() : library();
  } else if (route === '#results' && state.attempt?.finishedAt) {
    questions = questionsForAttempt(state.attempt);
    app.innerHTML = resultsPage();
  } else if (route === '#paper1' || route === '#paper2' || route === '#legacy') {
    questions = [];
    app.innerHTML = paperPage(route.slice(1));
  } else {
    questions = [];
    app.innerHTML = library();
  }
  createIcons({ icons });
}

function finish(reason) {
  if (!active()) return;
  state.attempt.finishedAt = reason === 'timeout' ? state.attempt.deadline : Date.now();
  state.attempt.reason = reason;
  state.history = [structuredClone(state.attempt), ...state.history].slice(0, 20);
  persist();
  if (dialog.open) dialog.close();
  reviewFilter = 'all';
  document.querySelector('#announcement').textContent = reason === 'timeout' ? 'Time is up. Your attempt has been submitted.' : 'Attempt submitted. Results are ready.';
  navigate('#results');
}

function showSubmit() {
  const result = scoreAttempt(questions, state.attempt.answers);
  dialog.innerHTML = `<div class="dialog-top"><span class="paper-icon">${icon('check-check')}</span><button class="icon-button" data-action="cancel-submit" aria-label="Cancel submission" title="Cancel submission">${icon('x')}</button></div><h2 id="submit-title">Finish this ${isStudy(state.attempt) ? 'study session' : 'exam'}?</h2><p>Your responses will be saved. ${isStudy(state.attempt) ? 'Study notes remain available in the results.' : 'Your score and explanations will be revealed.'}</p><div class="submission-counts"><span><strong>${result.answered}</strong> answered</span><span><strong>${result.unanswered}</strong> unanswered</span><span><strong>${result.unscored}</strong> not scored</span></div><div class="dialog-actions"><button class="button secondary" data-action="cancel-submit" autofocus>Continue</button><button class="button primary" data-action="confirm-submit">Finish ${icon('check')}</button></div>`;
  createIcons({ icons });
  dialog.showModal();
}

document.addEventListener('click', async event => {
  const button = event.target.closest('[data-action]');
  if (!button || button.disabled) return;
  if (active() && !remainingTime(state.attempt)) { finish('timeout'); return; }
  const action = button.dataset.action;
  if (action === 'choose-paper') { historyView = false; navigate(`#${button.dataset.group}`); }
  else if (action === 'library-tab' || action === 'history-tab') { historyView = action === 'history-tab'; render(); }
  else if (action === 'resume') navigate('#exam');
  else if (action === 'start') {
    const paper = findPaper(button.dataset.paper);
    if (!paper) return;
    if (active()) {
      if (paperFor(state.attempt)?.id === paper.id) navigate('#exam');
      return;
    }
    const selected = selectedMode === 'study' ? paper.questions : paper.questions.filter(question => question.scoreable);
    if (!selected.length) {
      document.querySelector('#announcement').textContent = 'This source has no questions ready for scoring.';
      return;
    }
    const now = Date.now();
    state.attempt = { setId: paper.id, mode: selectedMode, questionIds: selected.map(question => question.id), revealed: [], startedAt: now, deadline: now + DURATION, answers: {}, marked: [], index: 0, finishedAt: null };
    questions = selected;
    persist();
    navigate('#exam');
  } else if (action === 'review-history' && !active()) {
    const attempt = state.history[Number(button.dataset.index)];
    if (!attempt || !paperFor(attempt)) return;
    state.attempt = structuredClone(attempt);
    persist();
    reviewFilter = 'all';
    navigate('#results');
  } else if (action === 'filter') { reviewFilter = button.dataset.filter; render(); }
  else if (action === 'cancel-submit') dialog.close();
  else if (action === 'confirm-submit') finish('manual');
  else if (active()) {
    const attempt = state.attempt;
    const question = questions[attempt.index];
    if (action === 'submit') { showSubmit(); return; }
    if (action === 'next') attempt.index = Math.min(questions.length - 1, attempt.index + 1);
    else if (action === 'previous') attempt.index = Math.max(0, attempt.index - 1);
    else if (action === 'jump') attempt.index = Number(button.dataset.index);
    else if (action === 'mark') attempt.marked = attempt.marked.includes(question.id) ? attempt.marked.filter(value => value !== question.id) : [...attempt.marked, question.id];
    else if (action === 'clear' && question.scoreable) delete attempt.answers[question.id];
    else if (action === 'reveal' && isStudy(attempt)) attempt.revealed = attempt.revealed.includes(question.id) ? attempt.revealed.filter(value => value !== question.id) : [...attempt.revealed, question.id];
    else if (action === 'fullscreen') {
      try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
      catch { document.querySelector('#announcement').textContent = 'Fullscreen is not available in this browser.'; }
      return;
    }
    persist();
    render();
    if (action === 'reveal') document.querySelector('[data-action="reveal"]')?.focus({ preventScroll: true });
    if (['next', 'previous', 'jump'].includes(action)) {
      document.querySelector('.exam-heading')?.scrollIntoView({ block: 'start' });
      const heading = document.querySelector('.exam-heading h1');
      if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
    }
  }
});

app.addEventListener('change', event => {
  if (event.target.name === 'mode' && !active()) {
    selectedMode = event.target.value === 'study' ? 'study' : 'exam';
    return;
  }
  if (event.target.name !== 'answer' || !active()) return;
  const question = questions[state.attempt.index];
  if (!question?.scoreable) return;
  if (!remainingTime(state.attempt)) { finish('timeout'); return; }
  state.attempt.answers[question.id] = event.target.value;
  persist();
  const chosen = event.target.value;
  render();
  document.querySelector(`input[name="answer"][value="${chosen}"]`)?.focus({ preventScroll: true });
});

function tick() {
  if (!active()) return;
  const remaining = remainingTime(state.attempt);
  if (!remaining) { finish('timeout'); return; }
  const timer = document.querySelector('#timer-value');
  if (timer) {
    timer.textContent = formatTime(remaining);
    timer.closest('.timer')?.classList.toggle('urgent', remaining <= 300000);
  }
}

window.addEventListener('hashchange', routeChanged);
document.addEventListener('visibilitychange', tick);
window.addEventListener('pageshow', tick);
window.addEventListener('beforeunload', event => {
  if (active() && !storageAvailable) { event.preventDefault(); event.returnValue = ''; }
});

async function init() {
  try {
    restore();
    if (active()) location.hash = '#exam';
    render();
    setInterval(tick, 1000);
  } catch (error) {
    app.innerHTML = `${header()}<main class="page empty-state"><h1>Unable to load question papers</h1><p>${escape(error.message)}</p><button class="button secondary" onclick="location.reload()">Try again</button></main>`;
    createIcons({ icons });
  }
}

init();