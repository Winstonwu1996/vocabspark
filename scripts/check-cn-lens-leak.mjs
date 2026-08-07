#!/usr/bin/env node
// ─── SOP 审核步骤: 第8K — CN 学生文案禁出现英文「lens」 ───────────────────────
// 规则 (第8K): 中文学生可见文案里不许出现英文词 lens/Lens; 用「视角」或「这一遍/那一遍」。
//   - storyboard 主线 content.cn 本就干净。
//   - notebook 的 xiaoweiNote.cn / standaloneText.cn / preview.cn / termCn 等字段曾系统性
//     泄漏 'Lens 1/2/3'，已清零。
// 本 lint 防回归: import 模块，只查「真正渲染给学生的 CN 字段」(storyboard content.cn +
//   notebook 里所有 cn / *Cn 键的字符串值)，忽略 deliverGoal / meta / en / 注释等内部字段。
//   "cross-lens" 这类英文连字符复合词不算泄漏 (不会出现在渲染文案里，仅内部 deliverGoal)。
//
// 用法: node scripts/check-cn-lens-leak.mjs   (exit 1 = 有泄漏)
// 加入时间: 2026-05-25 (SOP 审计 wave 7 发现系统性泄漏后固化)。
// ───────────────────────────────────────────────────────────────────────────
import { listStoryboards, hasLenses, loadAllStoryboards } from '../lib/history-storyboards/index.js';
// storyboard 已改按需加载 —— 审计脚本要遍历全部课程, 显式全量载入
const STORYBOARDS = await loadAllStoryboards();
import { loadAllNotebooks } from '../lib/history-storyboards/notebooks/index.js';
const NOTEBOOKS = await loadAllNotebooks();

// 旧长格式老课 — 与 check-node-length.mjs 同一 backlog 集 (创始人选 B: 老课待返工, 新课守住)。
// 这些 topic 的 storyboard content.cn 仍带架构「Lens N」泄漏, 留待整体返工时一并清理, 不阻断 CI。
const GRANDFATHERED = new Set([
  'scientific-revolution', 'black-death-1347', 'byzantine-rise', 'crusades-1099', 'pre-columbian',
  'age-of-exploration-1492', 'reformation-1517', 'mongol-empire', 'renaissance-1500', 'enlightenment',
  'medieval-japan', 'islamic-rise', 'tang-song-china', 'magna-carta-1215', 'mali-empire-1235',
]);

// 匹配独立英文词 lens/Lens，但排除 "cross-lens" / "cross lens" 复合词
function hasBareLens(s) {
  if (typeof s !== 'string') return false;
  const cleaned = s.replace(/cross[- ]lens/gi, '');
  return /\b[Ll]ens\b/.test(cleaned);
}
const hasCJK = (s) => typeof s === 'string' && /[一-鿿]/.test(s);

let fail = 0;
const backlog = new Set();
const report = (where, val, id) => {
  if (id && GRANDFATHERED.has(id)) { backlog.add(id); return; }
  console.error(`❌ ${where} CN 文案含英文「lens」(第8K): ${String(val).trim().slice(0, 80)}`);
  fail++;
};

// 1) storyboard 主线: 只查 content.cn (prewritten 短路真正渲染的字段)
for (const id of listStoryboards().filter(hasLenses)) {
  const lenses = STORYBOARDS[id].lenses;
  for (const k of Object.keys(lenses)) {
    for (const node of lenses[k].storyboard) {
      const cn = node && node.content && node.content.cn;
      if (hasCJK(cn) && hasBareLens(cn)) report(`storyboard ${id}/${k}/${node.id}`, cn, id);
    }
  }
}

// 2) notebook: 递归遍历，只查 key 为 'cn' 或以 'Cn' 结尾的字符串值 (学生可见)
function walk(obj, where, rootId) {
  if (obj == null) return;
  if (Array.isArray(obj)) { obj.forEach((v, i) => walk(v, `${where}[${i}]`, rootId)); return; }
  if (typeof obj !== 'object') return;
  for (const [key, val] of Object.entries(obj)) {
    const isStudentCn = key === 'cn' || /Cn$/.test(key);
    if (typeof val === 'string') {
      if (isStudentCn && hasCJK(val) && hasBareLens(val)) report(`notebook ${where}.${key}`, val, rootId);
    } else {
      walk(val, `${where}.${key}`, rootId);
    }
  }
}
for (const [id, mod] of Object.entries(NOTEBOOKS)) {
  walk(mod.default || mod.notebook || mod, id, id);
}

if (backlog.size) {
  console.log('⚠ 待返工 backlog — 旧长格式老课 storyboard content.cn 仍带「Lens N」架构泄漏 (不阻断):');
  console.log('   ' + [...backlog].sort().join(', '));
}
if (fail) {
  console.error(`\nFAIL: ${fail} 处 CN 学生文案含英文「lens」(新内容必须达标)。请改为「视角」或「这一遍/那一遍」。`);
  process.exit(1);
}
console.log('✓ cn-lens-leak lint PASS — 所有应达标 topic 的 CN 学生文案均无英文「lens」(第8K; 豁免名单为待返工 backlog)。');
