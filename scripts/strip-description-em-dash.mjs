#!/usr/bin/env node
// ─── 一次性脚本: 仅在 lens description 块内, 把 em-dash (—) 替换为半角逗号 + 空格 ─
// 第8G.3 lint 禁止 description.cn / description.en 出现 em-dash。
// lens intro 重写 commit 04731de 引入 29 处违规。
//
// 策略:行扫描 + 状态机:
//   - 遇到 `description: {` → 进入 description 块
//   - 块内每一行 (cn/en/其它) 把 — 替换为 ,
//   - 遇到独立的 `},` (匹配 description 块结尾的缩进) → 退出
//
// 限制: 严格在 `description: {` 与对应 `}` 之间替换 em-dash; 不动其它 fields。
// 用法: node scripts/strip-description-em-dash.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.resolve(__dirname, '..', 'lib/history-storyboards');

var totalReplaced = 0;
var filesTouched = 0;
for (const fname of fs.readdirSync(DIR)) {
  if (!fname.endsWith('.js') || fname === 'index.js') continue;
  const fp = path.join(DIR, fname);
  if (!fs.statSync(fp).isFile()) continue;
  const orig = fs.readFileSync(fp, 'utf8');
  const lines = orig.split('\n');
  var inDescription = false;
  var descIndent = 0;
  var fileReplaced = 0;
  const out = lines.map(function(line) {
    if (!inDescription) {
      // 匹配 `  description: {` 或 `    description: {` 进入块
      const m = line.match(/^(\s+)description:\s*\{/);
      if (m) {
        inDescription = true;
        descIndent = m[1].length;
      }
      return line;
    }
    // 块内: 检测同级闭合 `},`
    const closeRe = new RegExp('^' + ' '.repeat(descIndent) + '\\},');
    if (closeRe.test(line)) {
      inDescription = false;
      return line;
    }
    // 块内行: 替换 em-dash
    const count = (line.match(/—/g) || []).length;
    if (count > 0) {
      fileReplaced += count;
      return line.replace(/—/g, ',');
    }
    return line;
  });
  if (fileReplaced > 0) {
    fs.writeFileSync(fp, out.join('\n'));
    filesTouched++;
    totalReplaced += fileReplaced;
    console.log('  ' + fname + ': ' + fileReplaced + ' em-dash → ,');
  }
}
console.log('\nTotal: ' + totalReplaced + ' em-dash replaced across ' + filesTouched + ' files.');
