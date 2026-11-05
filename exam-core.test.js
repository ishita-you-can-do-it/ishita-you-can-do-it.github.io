import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { parseQuestionBank, scoreAttempt, remainingTime, DURATION } from './exam-core.js';

const markdownFiles = readdirSync(new URL('./md_files/', import.meta.url)).filter(file => file.endsWith('.md'));
const expectedCounts = new Map([
  ['July 2016 - 2.md', 50],
  ['January 2017.md', 50],
  ['Nov%202017.md', 50],
  ['June 2017.md', 75],
  ['July 2018.md', 100],
  ['December 2018.md', 100],
  ['June 2019.md', 100],
  ['December 2019.md', 100],
  ['June 2020.md', 100],
  ['December 2021.md', 100],
  ['SEPTEMBER_%202022.md', 100],
  ['march_2023.md', 100]
]);

function readPaper(file) {
  return parseQuestionBank(readFileSync(new URL(`./md_files/${encodeURIComponent(file)}`, import.meta.url), 'utf8'));
}

test('all Markdown sets parse with their expected question counts and sequential IDs', () => {
  assert.equal(markdownFiles.length, expectedCounts.size);
  for (const [file, count] of expectedCounts) {
    const paper = readPaper(file);
    assert.equal(paper.length, count, file);
    assert.deepEqual(paper.map(question => question.id), Array.from({ length: count }, (_, index) => index + 1), file);
    assert.ok(paper.every(question => typeof question.prompt === 'string'), file);
  }
});

test('answer keys and study explanations are parsed from the different Markdown formats', () => {
  const march = readPaper('march_2023.md');
  const september = readPaper('SEPTEMBER_%202022.md');
  const december2021 = readPaper('December 2021.md');
  assert.equal(march[0].accepted[0], 'C');
  assert.equal(march[0].options.length, 4);
  assert.equal(september[0].accepted[0], 'A');
  assert.equal(september[0].options.length, 4);
  assert.deepEqual(december2021[4].accepted, ['A', 'B', 'C']);
  assert.equal(december2021[4].scoreable, false);
  assert.match(march[0].explanation, /Sri Aurobindo/);
});

test('only scoreable questions contribute to marks and totals', () => {
  const questions = [
    { id: 1, accepted: ['A'], options: [{ key: 'A' }], scoreable: true },
    { id: 2, accepted: ['B', 'D'], options: [{ key: 'B' }, { key: 'D' }], scoreable: false },
    { id: 3, accepted: ['C'], options: [{ key: 'C' }], scoreable: true },
    { id: 4, accepted: [], options: [], scoreable: false }
  ];
  assert.deepEqual(scoreAttempt(questions, { 1: 'A', 2: 'B', 3: 'C', 4: 'D' }), {
    correct: 2, answered: 2, incorrect: 0, unanswered: 0, unscored: 2, score: 4, total: 4
  });
});

test('absolute three-hour deadline does not pause while away from the page', () => {
  const attempt = { deadline: 1000 + DURATION };
  assert.equal(remainingTime(attempt, 1000), DURATION);
  assert.equal(remainingTime(attempt, 1000 + DURATION - 1000), 1000);
  assert.equal(remainingTime(attempt, 1000 + DURATION + 5000), 0);
});