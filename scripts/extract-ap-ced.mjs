#!/usr/bin/env node
/**
 * AP CED PDF text → structured JSON
 *
 * 第一轮用正则切 Unit/Topic/LO，输出 data/ap-ced/<course>.json
 * 准确度估 75-85%。剩余 15-25% 可手工检查或用 LLM 二次清洗。
 *
 * 法律边界（agent 研究结论）：
 * - Unit/Topic 编号 + 简短标题 = 事实性目录，可作 tag 使用
 * - LO/EK 原文不展示给 C 端
 * - 输出 trademark 注明
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TXT_DIR = path.join(ROOT, 'data/ap-ced/text');
const OUT_DIR = path.join(ROOT, 'data/ap-ced');

const COURSES = [
  { id: 'ap-world',    file: 'ap-world-history-modern-course-and-exam-description.txt',     tagPrefix: 'AP-WHAP' },
  { id: 'ap-us',       file: 'ap-us-history-course-and-exam-description.txt',                tagPrefix: 'AP-USH' },
  { id: 'ap-european', file: 'ap-european-history-course-and-exam-description.txt',          tagPrefix: 'AP-EURO' },
];

function extractTopics(text, tagPrefix) {
  // CED Topic 行格式："X.Y  Title"  e.g.  "3.5  The Industrial Revolution Begins"
  const topicRe = /^[\s│]*(\d+)\.(\d+)[\s│]+([A-Z][A-Za-z][^\n]{4,80})$/gm;
  const matches = [];
  let m;
  while ((m = topicRe.exec(text)) !== null) {
    const unit = parseInt(m[1]);
    const topicNum = parseInt(m[2]);
    const title = m[3].trim().replace(/\s+\d+$/, '').trim();   // 去掉行尾页码
    if (title.length < 5) continue;
    if (/^[A-Z\s]+$/.test(title)) continue;  // 全大写不像 Topic（可能是 LO 标题）
    if (/UNIT|Topic Page|Section|Practice|Resource/i.test(title)) continue;
    const code = `${tagPrefix}-${unit}.${topicNum}`;
    // 去重（CED 经常在 Table of Contents 重复出现）
    if (matches.find(x => x.code === code)) continue;
    matches.push({
      code,
      unit,
      topicNum,
      title,
    });
  }
  return matches.sort((a, b) => a.unit !== b.unit ? a.unit - b.unit : a.topicNum - b.topicNum);
}

const summary = { generatedAt: new Date().toISOString(), courses: {} };

for (const c of COURSES) {
  const txtPath = path.join(TXT_DIR, c.file);
  if (!fs.existsSync(txtPath)) {
    console.log(`Missing: ${c.file}`);
    continue;
  }
  const text = fs.readFileSync(txtPath, 'utf8');
  const topics = extractTopics(text, c.tagPrefix);
  // 统计单元数
  const units = [...new Set(topics.map(t => t.unit))].sort((a, b) => a - b);
  console.log(`▶ ${c.id}: ${topics.length} topics across ${units.length} units`);

  fs.writeFileSync(path.join(OUT_DIR, c.id + '.json'), JSON.stringify({
    course: c.id,
    tagPrefix: c.tagPrefix,
    extractedAt: new Date().toISOString(),
    units: units.map(u => ({
      unit: u,
      topics: topics.filter(t => t.unit === u).map(t => ({ code: t.code, num: t.topicNum, title: t.title })),
    })),
    note: '© College Board · AP® is a trademark · Unit/Topic numbers + short titles are factual references only',
  }, null, 2));

  summary.courses[c.id] = { units: units.length, topics: topics.length };
}

fs.writeFileSync(path.join(OUT_DIR, '_summary.json'), JSON.stringify(summary, null, 2));
console.log('\nDone. JSON files in:', OUT_DIR);
