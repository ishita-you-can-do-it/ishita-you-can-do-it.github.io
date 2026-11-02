import { marked } from 'marked';
import { createIcons, ArrowLeft, ArrowRight, BookOpen, Brain, Check, CheckCheck, ChevronLeft, ChevronRight, Clock3, Flag, GraduationCap, History, LockKeyhole, Maximize, RotateCcw, X } from 'lucide';
import { DURATION, parseQuestions, parsePaperOne, remainingTime, scoreAttempt } from './exam-core.js';
import questionSource from './UGC_NET_Psychology_March_2023_Questions_Explained.md';
import paperOneSource from './UGC_NET_Paper_1_March_2023_Questions_Explained.md';

const icons = { ArrowLeft, ArrowRight, BookOpen, Brain, Check, CheckCheck, ChevronLeft, ChevronRight, Clock3, Flag, GraduationCap, History, LockKeyhole, Maximize, RotateCcw, X };
const app = document.querySelector('#app');
const dialog = document.querySelector('#submit-dialog');
const STORE = 'ugc-net-march-2023-v1';
let questions = [];
const papers = {
  paper1: { label: 'Paper I', name: 'General Aptitude (Teaching & Research)', shortName: 'General Aptitude', count: 50, questions: [] },
  paper2: { label: 'Paper II', name: 'Psychology (Subject Code: 04)', shortName: 'Psychology', count: 100, questions: [] }
};
const paperFor = attempt => papers[attempt?.paper || 'paper2'];
let state = { attempt: null, history: [] };
let storageAvailable = true;
let reviewFilter = 'all';
let historyView = false;

const icon = name => `<i data-lucide="${name}" aria-hidden="true"></i>`;
const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const markdown = value => marked.parse(escape(value), { breaks: true });
const active = () => state.attempt && !state.attempt.finishedAt;
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
    const valid = attempt => attempt && (!attempt.paper || Object.hasOwn(papers, attempt.paper)) && Number.isFinite(attempt.startedAt) && Number.isFinite(attempt.deadline) && attempt.deadline - attempt.startedAt === DURATION && attempt.answers && typeof attempt.answers === 'object' && !Array.isArray(attempt.answers) && Array.isArray(attempt.marked);
    state.history = saved.history.filter(attempt => valid(attempt) && Number.isFinite(attempt.finishedAt)).slice(0, 20);
    if (valid(saved.attempt)) {
      state.attempt = saved.attempt;
      state.attempt.index = Math.max(0, Math.min(paperFor(state.attempt).count - 1, Number(state.attempt.index) || 0));
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
  return `<header class="site-header"><div class="header-inner">
    <a class="brand" href="#library" aria-label="Ishita you u can do it home"><img class="brand-symbol" src="./logo.JPG" alt="Ishita" width="38" height="38"><span>Ishita you u can do it</span></a>
    ${exam ? `<span class="header-paper">March 2023 <span>/</span> ${paperFor(state.attempt).label}</span><div class="timer" role="timer" aria-label="Time remaining">${icon('clock-3')}<span id="timer-value">${formatTime(remainingTime(state.attempt))}</span></div>` : `<span class="header-label">GENERAL APTITUDE <span class="dot"></span> PSYCHOLOGY</span>`}
  </div></header>`;
}

function footer() {
  return '<footer class="site-footer"><span>UGC NET Practice</span><span>March 2023 · AN Shift</span></footer>';
}

function library() {
  const attempt = state.attempt;
  return `${header()}<main class="page library-page">
    <div class="page-title"><div><p class="eyebrow">YOUR EXAM LIBRARY</p><h1>UGC NET Practice</h1><p class="subtitle">General Aptitude &amp; Psychology · Previous-year papers</p></div><div class="library-count"><strong>01</strong><span>of 30 papers available</span></div></div>
    ${active() ? `<div class="resume-banner"><span>${icon('clock-3')} March 2023 exam in progress</span><button class="button primary" data-action="resume">Resume exam ${icon('arrow-right')}</button></div>` : ''}
    <div class="tabs" role="tablist" aria-label="Library views"><button role="tab" aria-selected="${!historyView}" class="tab ${!historyView ? 'selected' : ''}" data-action="library-tab">${icon('book-open')} Papers <span>30</span></button><button role="tab" aria-selected="${historyView}" class="tab ${historyView ? 'selected' : ''}" data-action="history-tab">${icon('history')} My attempts <span>${state.history.length}</span></button></div>
    ${historyView ? historyList() : `<div class="section-label"><h2>Exam sessions</h2><span>1 available · 29 coming soon</span></div><section class="session-grid" aria-label="Exam sessions">
      <button class="session-card available" data-action="open-paper"><div class="card-top"><span class="session-number">01</span><span class="badge">AVAILABLE</span></div><h2>March 2023</h2><p>General Aptitude &amp; Psychology</p><div class="session-bottom"><span>150 questions · 2 papers</span>${icon('arrow-right')}</div><img class="session-photo" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=640&q=80" alt="Open books on a study desk" loading="eager"></button>
      ${Array.from({ length: 29 }, (_, index) => `<button class="session-card upcoming" disabled aria-label="Session ${index + 2}, coming soon"><div class="card-top"><span class="session-number">${String(index + 2).padStart(2, '0')}</span>${icon('lock-keyhole')}</div><h2>Coming soon</h2><p>Next exam session</p><div class="session-bottom"><span>Not yet available</span></div></button>`).join('')}
    </section>`}
    ${attempt?.finishedAt && !historyView ? `<a class="text-link last-result" href="#results">${icon('history')} Last score · ${paperFor(attempt).label}: ${scoreAttempt(paperFor(attempt).questions, attempt.answers).score}/${paperFor(attempt).count * 2} ${icon('arrow-right')}</a>` : ''}
    ${!storageAvailable ? '<p class="notice" role="alert">Browser storage is unavailable. Keep this tab open; your progress cannot be saved across reloads.</p>' : ''}
  </main>${footer()}`;
}

function historyList() {
  if (!state.history.length) return '<section class="empty-state"><h2>No completed attempts yet</h2><p>March 2023 · General Aptitude &amp; Psychology</p><button class="button primary" data-action="open-paper">Open paper '+icon('arrow-right')+'</button></section>';
  return `<section class="attempt-list" aria-label="Completed attempts">${state.history.map((attempt, index) => {
    const paper = paperFor(attempt);
    const result = scoreAttempt(paper.questions, attempt.answers);
    return `<div class="attempt-row"><span class="attempt-icon">${icon('check-check')}</span><div><h2>March 2023 · ${paper.label}: ${paper.shortName}</h2><p>${date(attempt.finishedAt)}</p></div><strong>${result.score}<small> / ${result.total}</small></strong><button class="button secondary" data-action="review-history" data-index="${index}" ${active() ? 'disabled' : ''}>Review ${icon('arrow-right')}</button></div>`;
  }).join('')}</section>`;
}

function paperPage() {
  return `${header()}<main class="page"><a class="back-link" href="#library">${icon('arrow-left')} All sessions</a><div class="page-title"><div><p class="eyebrow">MARCH 2023 · AN SHIFT</p><h1>Choose your paper</h1><p class="subtitle">UGC NET · Psychology</p></div><span class="outline-badge">March 2023</span></div>
    <div class="exam-facts"><span>${icon('clock-3')} <strong>3 hours</strong> total duration</span><span>${icon('check-check')} <strong>+2 marks</strong> per correct answer</span><span>${icon('check')} <strong>No negative marking</strong></span></div>
    <section class="papers-grid" aria-label="Exam papers">${Object.entries(papers).map(([id, paper]) => `<article class="paper-card ready-paper"><div class="paper-top"><span class="paper-icon">${icon(id === 'paper1' ? 'book-open' : 'brain')}</span><span class="badge">AVAILABLE</span></div><p class="eyebrow">${paper.label.toUpperCase()}</p><h2>${paper.label}: ${escape(paper.name)}</h2><div class="paper-details"><span><strong>${paper.count}</strong> questions</span><span><strong>${paper.count * 2}</strong> marks</span></div><button class="button primary full" data-action="start" data-paper="${id}" ${active() && paperFor(state.attempt) !== paper ? 'disabled' : ''}>${active() && paperFor(state.attempt) === paper ? 'Resume exam' : 'Start exam'} ${icon('arrow-right')}</button></article>`).join('')}</section>
    <div class="start-strip"><span>${icon('clock-3')} <strong>${active() ? formatTime(remainingTime(state.attempt)) : '03:00:00'}</strong></span><span>${active() ? `${paperFor(state.attempt).label} in progress` : 'Timer starts when you start a paper'}</span></div>
    <p class="exam-note">Each paper is a separate practice attempt with a three-hour limit. Complete the current attempt before starting another.</p>
    ${!storageAvailable ? '<p class="notice" role="alert">Browser storage is unavailable. Progress will not survive a reload.</p>' : ''}
  </main>${footer()}`;
}

function questionStatus(question) {
  if (state.attempt.marked.includes(question.id)) return 'marked';
  return state.attempt.answers[question.id] ? 'answered' : 'unanswered';
}

function examPage() {
  const attempt = state.attempt;
  const question = questions[attempt.index];
  const result = scoreAttempt(questions, attempt.answers);
  return `${header(true)}<main class="exam-layout"><section class="question-area" aria-label="Current question">
    <div class="exam-heading"><div><p class="eyebrow">${paperFor(attempt).label.toUpperCase()} · ${paperFor(attempt).shortName.toUpperCase()}</p><h1>Question ${question.id}<span> / ${questions.length}</span></h1></div><div class="question-tools"><span class="marks-label">+2 marks</span><button class="icon-button" title="Toggle fullscreen" aria-label="Toggle fullscreen" data-action="fullscreen">${icon('maximize')}</button></div></div>
    <div class="progress-track"><div style="width:${result.answered / questions.length * 100}%"></div></div>
    ${question.passage ? `<section class="passage"><h2>${escape(question.passageLabel || `Passage · Questions ${question.id <= 95 ? '91–95' : '96–100'}`)}</h2><p>${escape(question.passage)}</p>${question.passageTable ? `<div class="data-table">${markdown(question.passageTable)}</div>` : ''}</section>` : ''}
    <div class="question-prompt">${markdown(question.prompt)}</div>
    <fieldset class="options"><legend class="sr-only">Choose one answer for question ${question.id}</legend>${question.options.map(option => `<label class="option ${attempt.answers[question.id] === option.key ? 'chosen' : ''}"><input type="radio" name="answer" value="${option.key}" ${attempt.answers[question.id] === option.key ? 'checked' : ''}><span class="option-key">${option.key}</span><span class="option-text">${escape(option.text)}</span><span class="option-check">${icon('check')}</span></label>`).join('')}</fieldset>
    <div class="question-actions"><button class="button secondary ${attempt.marked.includes(question.id) ? 'flagged' : ''}" data-action="mark" aria-pressed="${attempt.marked.includes(question.id)}">${icon('flag')} ${attempt.marked.includes(question.id) ? 'Marked for review' : 'Mark for review'}</button><button class="text-button" data-action="clear" ${!attempt.answers[question.id] ? 'disabled' : ''}>${icon('rotate-ccw')} Clear answer</button></div>
    <div class="question-navigation"><button class="button secondary" data-action="previous" ${attempt.index === 0 ? 'disabled' : ''}>${icon('chevron-left')} Previous</button><span>${question.id} of ${questions.length}</span><button class="button primary" data-action="${attempt.index === questions.length - 1 ? 'submit' : 'next'}">${attempt.index === questions.length - 1 ? 'Finish exam' : 'Next question'} ${icon('chevron-right')}</button></div>
    ${!storageAvailable ? '<p class="notice" role="alert">Progress cannot be saved. Do not refresh or close this tab.</p>' : ''}
  </section><aside class="question-sidebar"><div class="sidebar-title"><h2>Question navigator</h2><span>${questions.length}</span></div><div class="answer-count"><strong>${result.answered}</strong><span>answered <span>/ ${questions.length}</span></span></div><div class="legend"><span><i class="legend-dot answered"></i>Answered</span><span><i class="legend-dot marked"></i>For review</span><span><i class="legend-dot unanswered"></i>Unanswered</span></div><div class="question-grid">${questions.map(item => `<button class="question-number ${questionStatus(item)} ${item.id === question.id ? 'current' : ''}" data-action="jump" data-index="${item.id - 1}" aria-label="Question ${item.id}, ${questionStatus(item)}${attempt.marked.includes(item.id) && attempt.answers[item.id] ? ', answered' : ''}" ${item.id === question.id ? 'aria-current="step"' : ''}>${item.id}</button>`).join('')}</div><div class="sidebar-bottom"><div><span>Unanswered</span><strong>${result.unanswered}</strong></div><div><span>Marked for review</span><strong>${attempt.marked.length}</strong></div><button class="button finish full" data-action="submit">${icon('check-check')} Finish exam</button></div></aside></main>`;
}

function resultsPage() {
  const attempt = state.attempt;
  const result = scoreAttempt(questions, attempt.answers);
  const filtered = questions.filter(question => reviewFilter === 'all' || (reviewFilter === 'correct' ? question.accepted.includes(attempt.answers[question.id]) : reviewFilter === 'incorrect' ? attempt.answers[question.id] && !question.accepted.includes(attempt.answers[question.id]) : !attempt.answers[question.id]));
  return `${header()}<main class="page results-page"><a class="back-link" href="#library">${icon('arrow-left')} All sessions</a><div class="page-title"><div><p class="eyebrow">MARCH 2023 · ${paperFor(attempt).label.toUpperCase()}</p><h1>Your exam results</h1><p class="subtitle">${attempt.reason === 'timeout' ? 'Time expired · Automatically submitted' : 'Exam submitted'} · ${date(attempt.finishedAt)}</p></div><button class="button secondary" data-action="open-paper">${icon('rotate-ccw')} New attempt</button></div>
    <section class="score-band" aria-label="Exam score"><div class="main-score"><span>FINAL SCORE</span><strong>${result.score}<small> / ${result.total}</small></strong><span>${Math.round(result.score / result.total * 100)}% · No negative marking</span></div><div class="score-metric correct"><span>Correct</span><strong>${result.correct}</strong></div><div class="score-metric incorrect"><span>Incorrect</span><strong>${result.incorrect}</strong></div><div class="score-metric"><span>Unanswered</span><strong>${result.unanswered}</strong></div><div class="score-metric"><span>Time taken</span><strong class="time-taken">${formatTime(Math.min(DURATION, Math.max(0, attempt.finishedAt - attempt.startedAt)))}</strong></div></section>
    <div class="review-heading"><h2>Answers &amp; explanations</h2><span>${filtered.length} questions</span></div><div class="filter-tabs" role="tablist" aria-label="Review filter">${[['all','All',questions.length],['correct','Correct',result.correct],['incorrect','Incorrect',result.incorrect],['unanswered','Unanswered',result.unanswered]].map(([value,label,count]) => `<button role="tab" aria-selected="${reviewFilter === value}" class="filter-tab ${reviewFilter === value ? 'selected' : ''}" data-action="filter" data-filter="${value}">${label} <span>${count}</span></button>`).join('')}</div>
    <section class="review-list" aria-label="Question solutions">${filtered.length ? filtered.map(question => {
      const chosen = attempt.answers[question.id];
      const correct = question.accepted.includes(chosen);
      return `<details class="review-question" ${question.id === filtered[0].id ? 'open' : ''}><summary><span class="review-id">${String(question.id).padStart(2,'0')}</span><span class="review-preview">${escape(question.prompt.replace(/\n/g,' '))}</span><span class="result-status ${correct ? 'correct' : chosen ? 'incorrect' : ''}">${correct ? 'Correct' : chosen ? 'Incorrect' : 'Unanswered'}</span></summary><div class="review-body">${question.passage ? `<div class="passage"><p>${escape(question.passage)}</p>${question.passageTable ? `<div class="data-table">${markdown(question.passageTable)}</div>` : ''}</div>` : ''}<div class="question-prompt">${markdown(question.prompt)}</div><div class="review-options">${question.options.map(option => `<div class="review-option ${question.accepted.includes(option.key) ? 'correct-option' : chosen === option.key ? 'wrong-option' : ''}"><span class="option-key">${option.key}</span><span class="option-text">${escape(option.text)}</span><span class="review-option-label">${question.accepted.includes(option.key) ? 'Correct answer' : ''}${chosen === option.key ? ' · Your answer' : ''}</span></div>`).join('')}</div><div class="solution"><h3>${icon('book-open')} Solution &amp; study notes</h3><p class="accepted-answer">Accepted answer${question.accepted.length > 1 ? 's' : ''}: <strong>${question.accepted.join(', ')}</strong> · Your answer: <strong>${chosen || 'Not answered'}</strong></p>${markdown(question.explanation)}</div></div></details>`;
    }).join('') : '<p class="empty-filter">No questions in this category.</p>'}</section>
  </main>${footer()}`;
}

function render() {
  questions = paperFor(state.attempt).questions;
  if (!questions.length) return;
  if (active() && !remainingTime(state.attempt)) { finish('timeout'); return; }
  const route = location.hash;
  app.innerHTML = route === '#exam' && active() ? examPage() : route === '#results' && state.attempt?.finishedAt ? resultsPage() : route === '#march-2023' ? paperPage() : library();
  createIcons({ icons });
}

function finish(reason) {
  if (!active()) return;
  state.attempt.finishedAt = reason === 'timeout' ? state.attempt.deadline : Date.now();
  state.attempt.reason = reason;
  state.history = [structuredClone(state.attempt), ...state.history].slice(0, 20);
  persist();
  dialog.close();
  reviewFilter = 'all';
  document.querySelector('#announcement').textContent = reason === 'timeout' ? 'Time is up. Your exam has been submitted.' : 'Exam submitted. Your results are ready.';
  navigate('#results');
}

function showSubmit() {
  const result = scoreAttempt(questions, state.attempt.answers);
  dialog.innerHTML = `<div class="dialog-top"><span class="paper-icon">${icon('check-check')}</span><button class="icon-button" data-action="cancel-submit" aria-label="Cancel submission" title="Cancel submission">${icon('x')}</button></div><h2 id="submit-title">Finish this exam?</h2><p>Your answers will be locked and your score and solutions will be revealed.</p><div class="submission-counts"><span><strong>${result.answered}</strong> answered</span><span><strong>${result.unanswered}</strong> unanswered</span><span><strong>${state.attempt.marked.length}</strong> for review</span></div><div class="dialog-actions"><button class="button secondary" data-action="cancel-submit" autofocus>Continue exam</button><button class="button primary" data-action="confirm-submit">Submit exam ${icon('check')}</button></div>`;
  createIcons({ icons });
  dialog.showModal();
}

document.addEventListener('click', async event => {
  const button = event.target.closest('[data-action]');
  if (!button || button.disabled) return;
  if (active() && !remainingTime(state.attempt)) { finish('timeout'); return; }
  const action = button.dataset.action;
  if (action === 'open-paper') { historyView = false; navigate('#march-2023'); }
  else if (action === 'library-tab' || action === 'history-tab') { historyView = action === 'history-tab'; render(); }
  else if (action === 'resume') navigate('#exam');
  else if (action === 'start') {
    if (!active()) {
      const now = Date.now();
      state.attempt = { paper: button.dataset.paper, startedAt: now, deadline: now + DURATION, answers: {}, marked: [], index: 0, finishedAt: null };
      questions = paperFor(state.attempt).questions;
      persist();
    }
    navigate('#exam');
  } else if (action === 'review-history' && !active()) {
    state.attempt = structuredClone(state.history[Number(button.dataset.index)]);
    persist();
    reviewFilter = 'all';
    navigate('#results');
  } else if (action === 'filter') { reviewFilter = button.dataset.filter; render(); }
  else if (action === 'cancel-submit') dialog.close();
  else if (action === 'confirm-submit') finish('manual');
  else if (active()) {
    const attempt = state.attempt;
    const id = questions[attempt.index].id;
    if (action === 'submit') { showSubmit(); return; }
    if (action === 'next') attempt.index = Math.min(questions.length - 1, attempt.index + 1);
    else if (action === 'previous') attempt.index = Math.max(0, attempt.index - 1);
    else if (action === 'jump') attempt.index = Number(button.dataset.index);
    else if (action === 'mark') attempt.marked = attempt.marked.includes(id) ? attempt.marked.filter(value => value !== id) : [...attempt.marked, id];
    else if (action === 'clear') delete attempt.answers[id];
    else if (action === 'fullscreen') {
      try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
      catch { document.querySelector('#announcement').textContent = 'Fullscreen is not available in this browser.'; }
      return;
    }
    persist();
    render();
    if (['next', 'previous', 'jump'].includes(action)) {
      document.querySelector('.exam-heading').scrollIntoView({ block: 'start' });
      const heading = document.querySelector('.exam-heading h1');
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
  }
});

app.addEventListener('change', event => {
  if (event.target.name !== 'answer' || !active()) return;
  if (!remainingTime(state.attempt)) { finish('timeout'); return; }
  state.attempt.answers[questions[state.attempt.index].id] = event.target.value;
  persist();
  const chosen = event.target.value;
  render();
  document.querySelector(`input[value="${chosen}"]`)?.focus({ preventScroll: true });
});

function tick() {
  if (!active()) return;
  const remaining = remainingTime(state.attempt);
  if (!remaining) { finish('timeout'); return; }
  const timer = document.querySelector('#timer-value');
  if (timer) {
    timer.textContent = formatTime(remaining);
    timer.closest('.timer').classList.toggle('urgent', remaining <= 300000);
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
    papers.paper2.questions = parseQuestions(questionSource);
    papers.paper1.questions = parsePaperOne(paperOneSource);
    questions = papers.paper2.questions;
    restore();
    if (active()) navigate('#exam');
    render();
    setInterval(tick, 1000);
  } catch (error) {
    app.innerHTML = `${header()}<main class="page empty-state"><h1>Unable to load this paper</h1><p>${escape(error.message)}</p><button class="button secondary" onclick="location.reload()">Try again</button></main>`;
    createIcons({ icons });
  }
}

init();