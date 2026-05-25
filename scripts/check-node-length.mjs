#!/usr/bin/env node
// ─── SOP 审核步骤: 逐节点 CN 字数 lint ───────────────────────────────────────
// 简化长度标准 (范例 = constitutional-convention-1787「corrected shorter format」):
//   每节点 CN 220-380 字理想; ≤2 anchor 节点/lens (N6 跨视角 + N10/N11 synthesis) 可达 550。
//   硬上限 = 550 CN 字/节点。
//
// 用法: node scripts/check-node-length.mjs
//   exit 0 = 所有「应达标」topic 都 ≤550 (新内容不许回退)
//   exit 1 = 有非豁免 topic 的节点 >550
//
// 豁免名单 = 上线前定格的内容, 列为「待返工 backlog」, 不阻断 CI; 但新 topic 必须达标。
// 加入时间: 2026-05-25 (创始人选 B: 固化标准 + 新课守住 + 老课待返工)。
// ───────────────────────────────────────────────────────────────────────────
import { STORYBOARDS, listStoryboards, hasLenses } from '../lib/history-storyboards/index.js';

const HARD = 550;

// 旧长格式老课 — 大返工 (审计: avg 450-1091, max 至 1904 CN/节点)
const GRANDFATHERED_MAJOR = new Set([
  'scientific-revolution', 'black-death-1347', 'byzantine-rise', 'crusades-1099', 'pre-columbian',
  'age-of-exploration-1492', 'reformation-1517', 'mongol-empire', 'renaissance-1500', 'enlightenment',
  'medieval-japan', 'islamic-rise', 'tang-song-china', 'magna-carta-1215', 'mali-empire-1235',
]);
// 边缘超标 — 小修 (空: 已全部修到 ≤550; 保留集合以便将来标注)
const GRANDFATHERED_MINOR = new Set([]);

function cnLen(node) {
  return (node && node.content && node.content.cn ? node.content.cn : '').replace(/\n/g, '').length;
}

let fail = 0;
const majorBacklog = [];
const minorBacklog = [];

for (const id of listStoryboards().filter(hasLenses)) {
  const lenses = STORYBOARDS[id].lenses;
  const over = [];
  for (const k of Object.keys(lenses)) {
    for (const node of lenses[k].storyboard) {
      const c = cnLen(node);
      if (c > HARD) over.push(node.id + '(' + c + ')');
    }
  }
  if (!over.length) continue;
  if (GRANDFATHERED_MAJOR.has(id)) majorBacklog.push('   ' + id + ': ' + over.length + ' 节点 >550');
  else if (GRANDFATHERED_MINOR.has(id)) minorBacklog.push('   ' + id + ': ' + over.join(', '));
  else { console.error('❌ ' + id + ' 有节点 >550 (新内容必须达标): ' + over.join(', ')); fail++; }
}

if (majorBacklog.length) {
  console.log('⚠ 待返工 backlog — 旧长格式老课 (大返工, 不阻断):');
  majorBacklog.forEach((t) => console.log(t));
}
if (minorBacklog.length) {
  console.log('⚠ 待返工 backlog — 边缘超标 (小修, 不阻断):');
  minorBacklog.forEach((t) => console.log(t));
}
if (fail) {
  console.error('\nFAIL: ' + fail + ' 个非豁免 topic 超出 ≤550 CN/节点 标准。新 topic 必须 ≤550。');
  process.exit(1);
}
console.log('\n✓ node-length lint PASS — 所有应达标 topic 均 ≤550 CN/节点 (豁免名单为待返工 backlog)。');

// ─── 第8G.3: lens 卡片 description 字段禁止 em-dash (用户第一眼看到, 全站已清零) ──────────
let descFail = 0;
for (const id of listStoryboards().filter(hasLenses)) {
  const lenses = STORYBOARDS[id].lenses;
  for (const k of Object.keys(lenses)) {
    const d = lenses[k].description || {};
    if ((d.cn || '').includes('—') || (d.en || '').includes('—')) {
      console.error('❌ ' + id + ' / ' + k + ' card description 含 em-dash (第8G.3 禁, 用句号/逗号)');
      descFail++;
    }
  }
}
if (descFail) {
  console.error('\nFAIL: ' + descFail + ' 个 lens 卡片 description 含 em-dash (第8G.3)。');
  process.exit(1);
}
console.log('✓ card-description lint PASS — 全部 lens 卡片 description 无 em-dash (第8G.3)。');
