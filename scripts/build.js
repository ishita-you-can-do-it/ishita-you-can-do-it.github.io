import { build } from 'esbuild';
import { mkdir, copyFile, rm } from 'node:fs/promises';
import { SOURCE, PAPER_ONE_SOURCE } from '../exam-core.js';

await rm(new URL('../dist/', import.meta.url), { recursive: true, force: true });
await mkdir(new URL('../dist/assets/', import.meta.url), { recursive: true });
await build({ entryPoints: ['app.js'], bundle: true, format: 'iife', loader: { '.md': 'text' }, target: ['es2022'], outfile: 'assets/exam.js', minify: true });
await copyFile('assets/exam.js', 'dist/assets/exam.js');
for (const file of ['index.html', 'styles.css', 'logo.JPG', SOURCE, PAPER_ONE_SOURCE]) await copyFile(file, `dist/${file}`);
console.log('Static site built in dist/. Root index.html is also ready to open.');