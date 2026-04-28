#!/usr/bin/env node
/**
 * scripts/validate-narratives.mjs
 *
 * Topic ship gate — 启动 / build / pre-commit 时跑一遍：
 *   - 任何 TOPIC_REGISTRY 里 available=true && narrativeRequired=true 的 Topic
 *     必须在 lib/history-narratives/{id}.md 有对应文件
 *   - narrative 文件必须能被 loader.js 解析（frontmatter + body 都要有）
 *   - frontmatter 的 topicId 必须跟文件名匹配
 *
 * 缺一项 = 退出码 1，CI / pre-commit 拦下来不能 ship
 */

import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const topicsMod = await import('file://' + path.join(ROOT, 'lib/history-topics.js'));
const loaderMod = await import('file://' + path.join(ROOT, 'lib/history-narratives/loader.js'));

const issues = [];

for (const reg of topicsMod.TOPIC_REGISTRY) {
  if (!reg.available) continue;
  if (!reg.narrativeRequired) continue;

  if (!loaderMod.hasNarrative(reg.id)) {
    issues.push({
      severity: 'error',
      topicId: reg.id,
      msg: `available=true + narrativeRequired=true，但 lib/history-narratives/${reg.id}.md 不存在`,
      fix: `要么写 narrative，要么把 available 改成 false 或 narrativeRequired 改成 false`,
    });
    continue;
  }

  try {
    const { metadata, body } = loaderMod.loadNarrative(reg.id);
    if (!body || body.length < 1000) {
      issues.push({
        severity: 'error',
        topicId: reg.id,
        msg: `narrative body 长度 ${body ? body.length : 0} < 1000 字符 — 太短，写得不充分`,
        fix: '按 lib/history-narratives/README.md 的 12 节结构 + 4 个附录写完',
      });
    }
    if (metadata.topicId && metadata.topicId !== reg.id) {
      issues.push({
        severity: 'error',
        topicId: reg.id,
        msg: `frontmatter.topicId="${metadata.topicId}" 跟文件名 "${reg.id}" 不一致`,
        fix: `frontmatter 的 topicId 改成 "${reg.id}"`,
      });
    }
    if (!metadata.textbookAnchor) {
      issues.push({
        severity: 'warn',
        topicId: reg.id,
        msg: 'frontmatter 缺 textbookAnchor（教材锚点）',
        fix: '加 textbookAnchor.publisher/series/lesson/page',
      });
    }
  } catch (e) {
    issues.push({
      severity: 'error',
      topicId: reg.id,
      msg: `narrative 加载失败: ${e.message}`,
      fix: '检查 frontmatter YAML 格式',
    });
  }
}

const errors = issues.filter(i => i.severity === 'error');
const warns = issues.filter(i => i.severity === 'warn');

console.log('═══════════════════════════════════════════════');
console.log('Topic Narrative Ship Gate Validation');
console.log('═══════════════════════════════════════════════');

if (issues.length === 0) {
  console.log('✅ 全部通过 — 所有 available + narrativeRequired Topic 都有合规 narrative');
  process.exit(0);
}

for (const i of [...errors, ...warns]) {
  const icon = i.severity === 'error' ? '❌' : '⚠️ ';
  console.log(`${icon} ${i.topicId}`);
  console.log(`    ${i.msg}`);
  console.log(`    修复：${i.fix}`);
}

console.log('───────────────────────────────────────────────');
console.log(`${errors.length} errors · ${warns.length} warnings`);

if (errors.length > 0) {
  console.log('❌ Ship gate 拦下：上述 Topic 不能 ship');
  process.exit(1);
}
console.log('✅ 通过（仅有 warnings）');
process.exit(0);
