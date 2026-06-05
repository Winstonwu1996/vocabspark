#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────
// check-content-hygiene.mjs — 发布前内容卫生闸 (2026-06-03 加, 来自全量审核 Codex 建议)
// 把审核反复抓到的几类机检问题, 从「一次性修」变成「上线前自动拦」:
//   FAIL: 韩文/谚文等串入内容 (enlightenment §2 残留)  · *单星号 italic* (渲染器只认 **bold**)
//   WARN: 内容里的 emoji (项目无 emoji 规则, 如 qin notebook 🔗)  · 同节点 CN/EN 数字漂移 (年份/大数不一致)
// 退出码: 有 FAIL → 1 (阻断); 仅 WARN → 0 (放行但提示)。
// 用法: node scripts/check-content-hygiene.mjs   (commit/ship 前跑)
// ─────────────────────────────────────────────────────────────────
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const SB_DIR = path.join(ROOT, 'lib/history-storyboards');
const NB_DIR = path.join(SB_DIR, 'notebooks');
const NARR_DIR = path.join(ROOT, 'lib/history-narratives');

const HANGUL = /[가-힣ᄀ-ᇿ㄰-㆏]/;            // 谚文 — 内容里永不合法
const ITALIC = /(^|[^*])\*[^*\s][^*]*\*([^*]|$)/;                       // 单星号 italic (排除 **bold**)
// 只查明确装饰性 emoji (1F300-1FAFF, 如 🔗)。排除 → 箭头 / ⭐ 必背标记 / ✓✗ 等内容里合法的符号。
const EMOJI  = /[\u{1F300}-\u{1FAFF}]/u;
const SHOW_DRIFT = process.argv.includes('--drift');  // 数字漂移噪音大 (中英数字表示差异), 默认关, --drift 开

let FAILS = 0, WARNS = 0;
const fail = (m) => { FAILS++; console.log('  ✗ FAIL ' + m); };
const warn = (m) => { WARNS++; console.log('  ⚠ WARN ' + m); };

// CN/EN 各自抽「≥2 位阿拉伯数字」(年份/百分比/人数), 比较两侧集合差异 → 漂移信号
function bigNums(s) {
  const m = String(s || '').match(/\d[\d,]*\d|\d{2,}/g) || [];
  return new Set(m.map((x) => x.replace(/,/g, '')).filter((x) => x.length >= 2));
}
function numDrift(cn, en) {
  const c = bigNums(cn), e = bigNums(en);
  const onlyCn = [...c].filter((x) => !e.has(x));
  const onlyEn = [...e].filter((x) => !c.has(x));
  return { onlyCn, onlyEn, drift: onlyCn.length || onlyEn.length };
}

function scanText(label, txt, { checkItalic = true, checkEmoji = true } = {}) {
  if (!txt) return;
  if (HANGUL.test(txt)) fail(label + ' — 韩文/谚文串入内容: ' + (txt.match(HANGUL.source ? new RegExp('.{0,12}' + HANGUL.source + '.{0,12}', 'u') : HANGUL) || [''])[0].trim());
  if (checkItalic && ITALIC.test(txt)) fail(label + ' — 单星号 *italic* (渲染器只认 **bold**): ' + (txt.match(ITALIC) || [''])[0].trim().slice(0, 40));
  if (checkEmoji && EMOJI.test(txt)) warn(label + ' — 内容含 emoji (项目无 emoji 规则): ' + (txt.match(EMOJI) || [''])[0]);
}

async function listJs(dir) {
  const f = await fs.readdir(dir);
  return f.filter((x) => x.endsWith('.js') && x !== 'index.js' && !x.includes('.staging.'));
}

console.log('=== 1. Storyboards (lens 节点 content.cn/en) ===');
for (const file of await listJs(SB_DIR)) {
  const id = file.replace(/\.js$/, '');
  let mod;
  try { mod = await import(pathToFileURL(path.join(SB_DIR, file)).href); } catch (e) { fail(id + ' — import 失败: ' + e.message); continue; }
  const lenses = mod.lenses || {};
  for (const [lid, lens] of Object.entries(lenses)) {
    for (const node of (lens.storyboard || [])) {
      const c = node.content || {};
      const where = `${id}/${lid}/${node.id}`;
      scanText(where + '.cn', c.cn);
      scanText(where + '.en', c.en);
      if (SHOW_DRIFT && c.cn && c.en) {
        const d = numDrift(c.cn, c.en);
        if (d.drift) warn(`${where} — CN/EN 数字漂移: CN独有[${d.onlyCn.join(',')}] EN独有[${d.onlyEn.join(',')}]`);
      }
    }
  }
}

console.log('=== 2. Notebooks (mainConcepts / preview / thinkingQuestions) ===');
for (const file of await listJs(NB_DIR)) {
  const id = file.replace(/\.js$/, '');
  let mod;
  try { mod = await import(pathToFileURL(path.join(NB_DIR, file)).href); } catch (e) { fail(id + ' — import 失败: ' + e.message); continue; }
  const nb = mod.notebook || mod.default || {};
  const prev = nb.preview || {};
  scanText(`${id}/preview.cn`, prev.cn);
  scanText(`${id}/preview.en`, prev.en);
  for (const card of (nb.mainConcepts || [])) {
    const sa = card.storyAnchor || {};
    const w = `${id}/card:${card.id}`;
    scanText(w + '.termCn', card.termCn);
    scanText(w + '.standalone.cn', sa.standaloneText && sa.standaloneText.cn);
    scanText(w + '.standalone.en', sa.standaloneText && sa.standaloneText.en);
  }
  for (const q of (nb.thinkingQuestions || [])) {
    scanText(`${id}/tq.cn`, q.cn);
    scanText(`${id}/tq.en`, q.en);
  }
}

console.log('=== 3. Narratives (.md — 只查韩文/谚文, markdown 里 *italic* 合法故跳过) ===');
const narrFiles = (await fs.readdir(NARR_DIR)).filter((x) => x.endsWith('.md') && !x.includes('.staging'));
for (const file of narrFiles) {
  const txt = await fs.readFile(path.join(NARR_DIR, file), 'utf8');
  if (HANGUL.test(txt)) {
    const m = txt.match(new RegExp('.{0,16}[\\uAC00-\\uD7A3].{0,16}', 'u'));
    fail(`${file} — 韩文/谚文串入: ${m ? m[0].trim() : ''}`);
  }
}

console.log('\n──────────────────────────────────────');
console.log(`内容卫生闸: ${FAILS} FAIL · ${WARNS} WARN`);
if (FAILS > 0) { console.log('❌ 有阻断级问题 (韩文 / *italic*)，修掉再 ship。'); process.exit(1); }
console.log('✅ 无阻断 (WARN 可逐项核，数字漂移多为格式差异/中文数字，非全是真错)。');
