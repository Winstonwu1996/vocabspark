#!/usr/bin/env node
// scripts/atlas-lint.mjs
//
// Atlas content lint — 扫 data/atlas/views/*.js 看有没有 hardcode 用户专属字段.
// 5-5 founder 铁律: atlas content 必须 generic 化, 用 {{userChildName|fallback}} 占位符,
// 不许 hardcode "Willow" / "Jeffery Trail" / "Irvine USD" 等具体用户字段.
//
// 跑法:
//   node scripts/atlas-lint.mjs              # exit 0 = clean, exit 1 = 有违规
//   node scripts/atlas-lint.mjs --quiet      # 只 exit code, 不 print
//
// CI 集成: NEW_TOPIC_CHECKLIST.md Phase 3 强制跑这个 script

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var ROOT = path.resolve(__dirname, '..');
var ATLAS_DIR = path.join(ROOT, 'data/atlas/views');

// ─── 铁律: 这些 hardcode 字段绝对禁止出现在 atlas content ──
// 要新增违禁词时加这里, 然后跑 lint 找出所有违规 → 批量替换
var FORBIDDEN_PATTERNS = [
  { pattern: /\bWillow\b/g,           replacement: '{{userChildName|你这一代}}',  category: 'name' },
  { pattern: /\bCupertino\b/g,         replacement: '{{userCity|加州}}',           category: 'city' },
  { pattern: /Jeffery Trail/g,         replacement: '{{userSchool|你的学校}}',     category: 'school' },
  { pattern: /Irvine USD/g,            replacement: '{{userSchool|你的学区}}',     category: 'school' },
  { pattern: /chompcloud/g,            replacement: '',                             category: 'email' },
];

function lintFile(filePath) {
  var content = fs.readFileSync(filePath, 'utf8');
  var violations = [];
  for (var i = 0; i < FORBIDDEN_PATTERNS.length; i++) {
    var rule = FORBIDDEN_PATTERNS[i];
    var matches = content.match(rule.pattern);
    if (matches && matches.length > 0) {
      violations.push({
        category: rule.category,
        match: matches[0],
        count: matches.length,
        suggested: rule.replacement,
      });
    }
  }
  return violations;
}

function main() {
  var quiet = process.argv.includes('--quiet');
  var files = fs.readdirSync(ATLAS_DIR)
    .filter(function (f) { return f.endsWith('.js'); })
    .map(function (f) { return path.join(ATLAS_DIR, f); });

  var totalViolations = 0;
  var dirtyFiles = [];

  for (var i = 0; i < files.length; i++) {
    var f = files[i];
    var violations = lintFile(f);
    if (violations.length > 0) {
      var fileBase = path.basename(f);
      dirtyFiles.push({ file: fileBase, violations: violations });
      for (var j = 0; j < violations.length; j++) {
        totalViolations += violations[j].count;
      }
    }
  }

  if (totalViolations === 0) {
    if (!quiet) console.log('✓ atlas-lint clean — 0 hardcoded user fields');
    process.exit(0);
  }

  if (!quiet) {
    console.error('✗ atlas-lint failed — ' + totalViolations + ' violations across ' + dirtyFiles.length + ' files\n');
    for (var k = 0; k < dirtyFiles.length; k++) {
      var entry = dirtyFiles[k];
      console.error('  ' + entry.file + ':');
      for (var m = 0; m < entry.violations.length; m++) {
        var v = entry.violations[m];
        console.error('    [' + v.category + '] "' + v.match + '" × ' + v.count + ' → 改成 ' + v.suggested);
      }
    }
    console.error('\n规则: docs/NEW_TOPIC_CHECKLIST.md "atlas content 铁律" 章节');
    console.error('占位符引擎: lib/atlas-templating.js');
  }
  process.exit(1);
}

main();
