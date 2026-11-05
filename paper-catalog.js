import july2016 from './md_files/July 2016 - 2.md';
import january2017 from './md_files/January 2017.md';
import november2017 from './md_files/Nov%202017.md';
import june2017 from './md_files/June 2017.md';
import july2018 from './md_files/July 2018.md';
import december2018 from './md_files/December 2018.md';
import june2019 from './md_files/June 2019.md';
import december2019 from './md_files/December 2019.md';
import june2020 from './md_files/June 2020.md';
import december2021 from './md_files/December 2021.md';
import september2022 from './md_files/SEPTEMBER_%202022.md';
import march2023 from './md_files/march_2023.md';
import { parseQuestionBank } from './exam-core.js';

const catalog = [
  { id: 'march-2023', title: 'March 2023 · AN Shift', sourceTitle: 'Psychology', file: 'march_2023.md', source: march2023, excluded: [15, 18, 51, 53, 58, 97] },
  { id: 'september-2022-shift-i', title: 'September 2022 · Shift I', sourceTitle: 'Psychology', file: 'SEPTEMBER_%202022.md', source: september2022, excluded: [] },
  { id: 'december-2021', title: 'December 2021', sourceTitle: 'Psychology', file: 'December 2021.md', source: december2021, excluded: [5, 25, 96, 100] },
  { id: 'june-2020', title: 'June 2020', sourceTitle: 'Psychology', file: 'June 2020.md', source: june2020, excluded: [24, 35, 48, 52, 74, 89, 93, 97] },
  { id: 'december-2019', title: 'December 2019', sourceTitle: 'Psychology', file: 'December 2019.md', source: december2019, excluded: [4, 77] },
  { id: 'june-2019', title: 'June 2019', sourceTitle: 'Psychology', file: 'June 2019.md', source: june2019, excluded: [17, 22, 32, 50] },
  { id: 'december-2018', title: 'December 2018', sourceTitle: 'Psychology', file: 'December 2018.md', source: december2018, excluded: [3, 4, 5, 8, 9, 71, 100] },
  { id: 'july-2018', title: 'July 2018', sourceTitle: 'Psychology', file: 'July 2018.md', source: july2018, excluded: [3, 5, 7, 8, 10, 12, 21, 22, 26, 31, 32, 38, 45, 53, 62, 63, 65, 73, 76, 85, 99] },
  { id: 'november-2017', title: 'November 2017', sourceTitle: 'Psychology · source PDF title says Paper II', file: 'Nov%202017.md', source: november2017, excluded: [5, 13, 16, 20, 32, 48, 50] },
  { id: 'june-2017', title: 'June 2017 · Legacy 75-question set', sourceTitle: 'Psychology · legacy Paper III', file: 'June 2017.md', source: june2017, excluded: [1, 5, 31, 44, 75], legacy: true },
  { id: 'january-2017', title: 'January 2017', sourceTitle: 'Psychology', file: 'January 2017.md', source: january2017, excluded: [3, 5, 50] },
  { id: 'july-2016-2', title: 'July 2016 · Set 2', sourceTitle: 'Psychology', file: 'July 2016 - 2.md', source: july2016, excluded: [3, 23, 26, 29, 30, 31, 33, 38, 50] }
].map(paper => {
  const allQuestions = parseQuestionBank(paper.source);
  const excludedIds = new Set(paper.excluded);
  const questions = allQuestions.map(question => excludedIds.has(question.id)
    ? { ...question, scoreable: false, exclusionReason: 'Source key or question text needs verification.' }
    : question);
  const category = questions.length === 50 ? 'paper1' : questions.length === 100 ? 'paper2' : 'legacy';
  return {
    ...paper,
    category,
    sourceCount: allQuestions.length,
    scoreableCount: questions.filter(question => question.scoreable).length,
    questions
  };
});

export const PAPERS = catalog;
export const PAPER_GROUPS = [
  { id: 'paper1', label: 'Paper I', description: '50-question sets', sets: catalog.filter(paper => paper.category === 'paper1') },
  { id: 'paper2', label: 'Paper II', description: '100-question sets', sets: catalog.filter(paper => paper.category === 'paper2') },
  { id: 'legacy', label: 'Legacy Paper III', description: 'Older 75-question format', sets: catalog.filter(paper => paper.category === 'legacy') }
];

export const findPaper = id => PAPERS.find(paper => paper.id === id);