import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const server = spawn(process.execPath, ['scripts/serve.js'], { env: { ...process.env, PORT: '4180' }, stdio: ['ignore', 'pipe', 'inherit'] });
let browser;
const errors = [];

try {
  const url = await new Promise((resolve, reject) => {
    server.stdout.on('data', chunk => {
      const match = chunk.toString().match(/http:\/\/127\.0\.0\.1:\d+/);
      if (match) resolve(match[0]);
    });
    server.once('error', reject);
    server.once('exit', code => reject(new Error(`Preview server exited: ${code}`)));
  });
  browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on('pageerror', error => errors.push(error.message));

  for (const address of [pathToFileURL(`${process.cwd()}/index.html`).href, url]) {
    await page.goto(address);
    await page.locator('.paper-choice').first().waitFor();
    assert.equal(await page.locator('.paper-choice').count(), 2);
    assert.match(await page.locator('.legacy-section').innerText(), /June 2017[\s\S]*75 questions/);
    assert.equal(await page.locator('.source-paper, .pdf-viewer').count(), 0);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  }

  await page.goto(url);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.locator('.paper-choice[data-group="paper1"]').click();
  await page.locator('.ready-paper').first().waitFor();
  assert.equal(await page.locator('.ready-paper').count(), 3);
  await page.locator('label.mode-option').filter({ hasText: 'Study mode' }).click();
  await page.locator('.ready-paper [data-action="start"]').first().click();
  await page.locator('.exam-heading').waitFor();
  assert.match(await page.locator('.exam-heading').innerText(), /Study mode/);
  assert.equal(await page.locator('#timer-value').innerText(), '03:00:00');
  await page.waitForFunction(() => document.querySelector('#timer-value')?.textContent !== '03:00:00');
  assert.equal(await page.locator('[data-action="reveal"]').count(), 1);
  assert.equal(await page.locator('#study-solution').count(), 0);
  await page.locator('[data-action="reveal"]').click();
  assert.equal(await page.locator('#study-solution').count(), 1);
  await page.locator('[data-action="reveal"]').click();
  assert.equal(await page.locator('#study-solution').count(), 0);
  const studyAttempt = await page.evaluate(() => JSON.parse(localStorage.getItem('ugc-net-markdown-practice-v2')).attempt);
  assert.equal(studyAttempt.mode, 'study');
  assert.equal(studyAttempt.questionIds.length, 50);
  assert.equal(studyAttempt.deadline - studyAttempt.startedAt, 3 * 60 * 60 * 1000);
  await page.locator('input[name="answer"]').first().check();
  await page.reload();
  assert.equal(await page.locator('input[name="answer"]:checked').count(), 1);
  await page.locator('[data-action="submit"]').first().click();
  await page.locator('[data-action="confirm-submit"]').click();
  await page.locator('.results-page').waitFor();
  assert.match(await page.locator('.results-page h1').innerText(), /Study session complete/);
  assert.equal(await page.locator('.review-question').count(), 50);

  await page.locator('[data-action="choose-paper"]').click();
  await page.locator('label.mode-option').filter({ hasText: 'Exam mode' }).click();
  await page.locator('.ready-paper [data-action="start"]').first().click();
  await page.locator('.exam-heading').waitFor();
  assert.match(await page.locator('.exam-heading').innerText(), /Exam mode/);
  assert.equal(await page.locator('.question-area [data-action="reveal"]').count(), 0);
  const examQuestionCount = await page.locator('.question-number').count();
  const examAttempt = await page.evaluate(() => JSON.parse(localStorage.getItem('ugc-net-markdown-practice-v2')).attempt);
  assert.equal(examQuestionCount, examAttempt.questionIds.length);
  assert.ok(examQuestionCount <= 50);

  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      elements: [...document.querySelectorAll('body *')].filter(element => element.getBoundingClientRect().right > innerWidth).slice(0, 5).map(element => `${element.tagName}.${element.className}`)
    }));
    assert.ok(overflow.scrollWidth <= width, `${width}px viewport overflow: ${JSON.stringify(overflow)}`);
  }
  assert.deepEqual(errors, []);
  console.log('PASS: Markdown chooser, legacy archive, Study and Exam modes, answer reveal, persistence, submission/review, timer deadline, and desktop/mobile layouts.');
} finally {
  await browser?.close();
  server.kill();
}