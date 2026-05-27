#!/usr/bin/env node
// ─── 删 storyboard content 里 cross-Topic 显式假设 ──────────────────────────────
// 用户反馈: lens-based 一次只学一个 topic, "你跑过 X 那段历史" 类括号假设学生按
// 顺序学完所有 topic, 是 hz-n10 同类问题的系统化表现。
//
// 4 phase:
//   A — 整个 paren 以 opener 开头 → 删整 paren
//   B — paren 中段含 opener 的句子 → 删那句, 空 paren 一并清
//   C — body 非 paren 句子含 opener → 删那句
//   D — Phase A/B 后留下的 "邻居字符 + 句号" 错位修复 (例: "果。)" 前的空 paren已删)
//
// opener 变体: 你跑过 / 你要是跑过 / 如果你跑过 / 在你跑过 / Run the X topic
// 不动: Run the X pass / Run the builder's pass (within-topic 跨 lens)
//
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

var __dirname = path.dirname(fileURLToPath(import.meta.url));
var SB_DIR = path.resolve(__dirname, '../lib/history-storyboards');

var CN_OPENER_RE = /(你跑过|你要是跑过|如果你跑过|在你跑过)/;
var EN_OPENER_RE = /\bRun the [^.()）]*topic\b/;

// Phase A: 整 paren 以 opener 开头
var PHASE_A_PATS = [
  /\s*（\s*(?:你跑过|你要是跑过|如果你跑过|在你跑过)[^）]*）/g,
  /\s*\(\s*(?:你跑过|你要是跑过|如果你跑过|在你跑过)[^)]*\)/g,
  /\s*（\s*Run the [^）]*topic[^）]*）/g,
  /\s*\(\s*Run the [^)]*topic[^)]*\)/g,
];

function stripCrossSentencesInText(text) {
  // 按 「。」或 ".+space/closing" 切句, 删含 opener 的句, 重组
  var out = [];
  var buf = '';
  for (var i = 0; i < text.length; i++) {
    var c = text[i];
    buf += c;
    var isEndCn = (c === '。');
    var nxt = text[i + 1] || '';
    var isEndEn = (c === '.' && (nxt === '' || /\s|[）)」』"']/.test(nxt)));
    if (isEndCn || isEndEn) {
      if (CN_OPENER_RE.test(buf) || EN_OPENER_RE.test(buf)) {
        // 删, 同时吃掉前面残留的连接符号 (空格/——/——前导)
      } else {
        out.push(buf);
      }
      buf = '';
    }
  }
  if (buf) {
    if (CN_OPENER_RE.test(buf) || EN_OPENER_RE.test(buf)) {
      // 删 trailing 不完整句 — 但要小心: 这可能误删括号外正常文本.
      // 改: 只在 buf 含完整 opener 短语时删
    } else {
      out.push(buf);
    }
  }
  return out.join('');
}

function stripInsideParens(src, counter) {
  // 中文括号
  src = src.replace(/（([^）]*)）/g, function(m, inner) {
    var newInner = stripCrossSentencesInText(inner);
    if (newInner === inner) return m;
    counter.B++;
    if (newInner.trim() === '') return '';
    return '（' + newInner + '）';
  });
  // 半角括号 — 注意: 不能匹配 JS 代码括号. 限制只匹配字符串字面量内.
  // 简化: 不动半角括号, 因为这跟 JS 语法冲突. 真正的 cross-Topic 都是中文括号.
  // (审计显示英文 "(Run the X topic)" 都在字符串字面量里, 但我们先保守只动中文括号)
  return src;
}

function stripBody(src, counter) {
  // 行级处理. 含 opener 的行才动.
  var lines = src.split('\n');
  for (var li = 0; li < lines.length; li++) {
    var line = lines[li];
    if (!CN_OPENER_RE.test(line) && !EN_OPENER_RE.test(line)) continue;
    var orig = line;
    var newLine = stripCrossSentencesInText(line);
    if (newLine !== orig) {
      lines[li] = newLine;
      counter.C++;
    }
  }
  return lines.join('\n');
}

// 清理 Phase A/B 后的孤立标点 (例: "。——\n" 留下的悬挂破折号)
function cleanupOrphans(src) {
  // 「。——\n」: 段尾破折号 → 「。\n」
  src = src.replace(/。——(\s*)\\n/g, '。$1\\n');
  src = src.replace(/。\s+——/g, '。');
  // 「,——\n」: 中文逗号后破折号
  src = src.replace(/，——(\s*)\\n/g, '。$1\\n');
  // 中文 「 ） ）」 多余括号 (因 Phase B 把 inner 删空了)
  src = src.replace(/）+/g, '）');
  return src;
}

var counter = { A: 0, B: 0, C: 0 };
var changedFiles = new Set();

var files = fs.readdirSync(SB_DIR).filter(function(f) { return f.endsWith('.js'); });

for (var f of files) {
  var p = path.join(SB_DIR, f);
  var src = fs.readFileSync(p, 'utf8');
  var orig = src;

  for (var pat of PHASE_A_PATS) {
    src = src.replace(pat, function() { counter.A++; return ''; });
  }
  src = stripInsideParens(src, counter);
  src = stripBody(src, counter);
  // 不做 cleanupOrphans,留 manual,避免误伤

  if (src !== orig) {
    changedFiles.add(f);
    fs.writeFileSync(p, src, 'utf8');
  }
}

console.log('Phase A (整 paren 删): ' + counter.A);
console.log('Phase B (paren 中删句): ' + counter.B);
console.log('Phase C (body 中删句): ' + counter.C);
console.log('Files touched: ' + changedFiles.size);
console.log('Total ops: ' + (counter.A + counter.B + counter.C));
