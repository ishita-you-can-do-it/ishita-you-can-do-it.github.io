import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseQuestions, parsePaperOne, PAPER_ONE_SOURCE, scoreAttempt, remainingTime, DURATION, SOURCE } from './exam-core.js';

const questions = () => parseQuestions(readFileSync(new URL(SOURCE, import.meta.url), 'utf8'));

test('Paper I parses 50 questions with printed answers, explanations, data and passage', () => {
  const paper = parsePaperOne(readFileSync(new URL(PAPER_ONE_SOURCE, import.meta.url), 'utf8'));
  assert.equal(paper.length, 50);
  assert.equal(paper[0].accepted[0], 'B');
  assert.equal(paper[49].accepted[0], 'D');
  assert.match(paper[0].passageTable, /2016 \| 220 \| 165/);
  assert.match(paper[4].passageTable, /2021 \| 410/);
  assert.doesNotMatch(paper[6].prompt, /Time Allotted/);
  assert.doesNotMatch(paper[44].options[3].text, /Gokhale/);
  assert.match(paper[45].passage, /two-thirds/);
  assert.match(paper[49].passage, /8-anna/);
  assert.match(paper[26].explanation, /Source\/key note/);
  assert.equal(scoreAttempt(paper, Object.fromEntries(paper.map(question => [question.id, question.accepted[0]]))).score, 100);
});

test('all 100 source questions retain four options, accepted answers, and notes', () => {
  const paper = questions();
  assert.equal(paper.length, 100);
  assert.deepEqual(paper[17].accepted, ['A', 'C']);
  assert.deepEqual(paper[52].accepted, ['D', 'A']);
  assert.match(paper[17].explanation, /Source\/key note/);
  assert.equal(paper[0].options[2].text, 'Sri Aurobindo');
});

test('two marks per accepted answer, including alternative keys, without negative marking', () => {
  const paper = questions();
  assert.deepEqual(scoreAttempt(paper, { 1: 'C', 2: 'A', 18: 'A', 53: 'A' }), {
    correct: 3, answered: 4, incorrect: 1, unanswered: 96, score: 6, total: 200
  });
  assert.equal(scoreAttempt(paper, Object.fromEntries(paper.map(question => [question.id, question.accepted[0]]))).score, 200);
  assert.equal(scoreAttempt(paper, {}).score, 0);
});

test('absolute three-hour deadline survives time spent outside the page', () => {
  const attempt = { deadline: 1000 + DURATION };
  assert.equal(remainingTime(attempt, 1000), 10800000);
  assert.equal(remainingTime(attempt, 1000 + DURATION - 1000), 1000);
  assert.equal(remainingTime(attempt, 1000 + DURATION + 5000), 0);
});

test('shared passages appear with dependent questions, not preceding answer options', () => {
  const paper = questions();
  assert.doesNotMatch(paper[89].options[3].text, /Read the given/);
  assert.doesNotMatch(paper[94].options[3].text, /Read the following/);
  for (const question of paper.slice(90, 95)) assert.match(question.passage, /two clay balls/);
  for (const question of paper.slice(95)) assert.match(question.passage, /social support/);
});