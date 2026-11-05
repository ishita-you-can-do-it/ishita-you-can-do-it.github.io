import { build } from 'esbuild';
import { mkdir, copyFile, rm } from 'node:fs/promises';

await rm(new URL('../dist/', import.meta.url), { recursive: true, force: true });
await mkdir(new URL('../dist/assets/', import.meta.url), { recursive: true });
await build({ entryPoints: ['app.js'], bundle: true, format: 'iife', loader: { '.md': 'text' }, target: ['es2022'], outfile: 'assets/exam.js', minify: true });
await copyFile('assets/exam.js', 'dist/assets/exam.js');
for (const file of ['index.html', 'styles.css', 'logo.JPG']) await copyFile(file, `dist/${file}`);
console.log('Interactive Markdown exam site built in dist/. Root index.html is also ready to open.');