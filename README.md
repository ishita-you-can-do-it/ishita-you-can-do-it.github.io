# UGC NET Practice

A static, Markdown-backed UGC NET Psychology mock-exam site. No application backend is required.

## Local preview

Requires Node.js 22 or newer.

```sh
npm install
npm test
npm run build
npm run dev
```

Open the URL printed by the preview server (normally http://127.0.0.1:4173). The build bundles the question sources and application into `assets/exam.js` and prepares `dist/`; it does not copy the PDF archive into the site.

For the browser regression check, install Chromium once and run:

```sh
npx playwright install chromium
npm run test:browser
```

The check starts and stops its own preview server. It covers the paper chooser, both modes, answer reveal, timer, saved progress, submission/results, and desktop/mobile layouts.

## Papers and modes

- Sets with 50 questions are Paper I; sets with 100 questions are Paper II.
- June 2017 has 75 questions, so it remains separately available as a legacy set.
- Exam mode includes only verified, scoreable single-answer questions. Study mode includes every source question and its explanation or source note.
- Each attempt has a three-hour countdown. Answers and the deadline are saved in browser storage, so an active attempt can resume after reloading.
- Correct answers earn 2 marks; there is no negative marking. Submission or timeout opens results and question-by-question review.

The Markdown files remain the question sources and are not changed by the build. Questions with missing, withdrawn, multiple-answer, or unresolved keys are held out of exam scoring.

## GitHub Pages

Push this folder to a GitHub repository on the `main` branch. In the repository's Settings > Pages, select **GitHub Actions** as the build and deployment source. The included workflow tests, builds, and deploys `dist/`. For another default branch, update the workflow's branch filter.

Application paths are relative and navigation uses URL hashes, so repository Pages sites and custom domains work without server rewrites. Google Fonts are an optional external visual resource.