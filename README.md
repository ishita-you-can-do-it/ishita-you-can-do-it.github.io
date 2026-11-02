# UGC NET Practice

A static UGC NET General Aptitude and Psychology practice site for GitHub Pages. There is no application backend.

## Local preview

Requires Node.js 22 or newer.

```sh
npm install
npm test
npm run build
npm run dev
```

Open the URL printed by the preview server (normally http://127.0.0.1:4173), or open the root `index.html` directly in your browser. The generated `assets/exam.js` bundles the application, dependencies, and question data, so no server is required. Keep this generated asset with the HTML when sharing or hosting the root folder. Rebuild after changing source code or questions.

For the full browser regression check:

```sh
npx playwright install chromium
npm run test:browser
```

The check starts and stops its own preview server. It verifies submission, timeout, reload recovery, and desktop/mobile layouts, with screenshots saved in `/tmp/ugc-net-browser-checks`.

## GitHub Pages

Push this folder to a GitHub repository on the `main` branch. In the repository's Settings > Pages, select **GitHub Actions** as the build and deployment source. The included workflow tests, builds, and deploys `dist/`. For another default branch, update the workflow's branch filter.

All application paths are relative and navigation uses URL hashes, so both repository Pages sites and custom domains work without server rewrites.

## Exam rules

- Library: 30 sessions, with March 2023 available and 29 coming soon.
- Paper I: General Aptitude (Teaching & Research), 50 questions / 100 marks.
- Paper II: Psychology (Subject Code: 04), 100 questions / 200 marks.
- Each paper is a separate practice attempt with a three-hour timer, starting when that paper begins. Only one attempt can be active at a time; the other paper is disabled until submission. The supplied Paper I document lists 75 minutes, but the site retains the requested three-hour practice limit.
- Each correct answer earns two marks. Wrong and unanswered responses earn zero; there is no negative marking.
- A single choice matching any accepted answer in the supplied key earns full marks, including Paper II Q18 and Q53. Paper I uses the printed key even where the source audit disputes it; discrepancy notes appear in the solution review.
- Finishing requires confirmation. Expiry submits automatically. Answers and explanations render only after submission.
- The deadline, answers, review flags, and last 20 completed attempts are stored in this browser's localStorage. Reloading resumes the same deadline; closing the page does not pause it. If closed at expiry, it is submitted upon reopening.

## Question source

The original `UGC_NET_Psychology_March_2023_Questions_Explained.md` remains unchanged. Its content is bundled into `assets/exam.js` and the original file is also copied into the site build. Rebuild after changing it. The parser checks for 100 sequential complete questions and preserves explanation and source/key notes. Two shared passages are separated from preceding options and attached to questions 91-95 and 96-100.

Paper I uses the unchanged `UGC_NET_Paper_1_March_2023_Questions_Explained.md`, also bundled and copied during the build. Its parser joins the 50 questions, printed key, publisher explanations, and applicable accuracy-audit notes. The athlete table is shown for Q1-5, and the Gokhale passage for Q46-50. The source includes OCR inconsistencies, an unrelated opening stem on Q35, disputed answers, and potentially shifted Q43/Q45 explanations; no missing wording or corrections are invented. Existing saved attempts without a paper identifier remain Paper II attempts.

Source quality matters: some formulas contain OCR corruption (notably Q5), and the source notes warn of ambiguous items and incomplete extraction for Q93-95. This site preserves the supplied content and does not certify its accuracy. Compare against the official paper before using it for anything beyond practice.

## Static-site limitations

Answer keys are downloadable even though the exam interface does not reveal them before submission. Browser storage and clocks can be modified; this is not a tamper-proof examination system. Scores are local to the current browser, not synced across devices. If storage is blocked, a warning is shown and progress cannot survive a reload.

Google Fonts and the study-desk photograph from Unsplash are optional external visual resources. Exam content, scoring, icons, and timer code are hosted with the site.