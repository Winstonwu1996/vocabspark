#!/usr/bin/env node
/**
 * scripts/test-narrative-prompt.mjs
 *
 * 比较旧路径（ai_seed-driven）和新路径（narrative-driven）的 prompt 体感差异。
 *
 * 用法：
 *   node scripts/test-narrative-prompt.mjs <topicId> <turnIndex> "<mockUserAnswer>"
 *   node scripts/test-narrative-prompt.mjs magna-carta-1215 1
 *   node scripts/test-narrative-prompt.mjs magna-carta-1215 2 "我家有家规但我有时不同意"
 *
 * 输出（默认）：
 *   - 旧 prompt 全文（system + turn）
 *   - 新 prompt 全文（system + turn）
 *   - 字数对比 + 结构差异点
 *
 * 加 --call-deepseek 选项：
 *   - 真去打 DeepSeek API 拿两个版本的回复
 *   - 但需要 DEEPSEEK_API_KEY 环境变量
 */

import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ── 动态 import 项目 modules ──
const promptsMod  = await import('file://' + path.join(ROOT, 'lib/history-prompts.js'));
const topicsMod   = await import('file://' + path.join(ROOT, 'lib/history-topics.js'));
const loaderMod   = await import('file://' + path.join(ROOT, 'lib/history-narratives/loader.js'));

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/test-narrative-prompt.mjs <topicId> <turnIndex> ["<mockUserAnswer>"] [--call-deepseek]');
  process.exit(1);
}

const topicId       = args[0];
const turnIndex     = parseInt(args[1]);
const mockAnswer    = args.find((a, i) => i >= 2 && !a.startsWith('--')) || '';
const callDeepSeek  = args.includes('--call-deepseek');

const topic = topicsMod.getTopic(topicId);
if (!topic) {
  console.error(`Topic '${topicId}' not found in lib/history-topics.js`);
  process.exit(1);
}

const turns = topic.conversationTurns || [];
const oldTurn = turns[turnIndex - 1];
if (!oldTurn) {
  console.error(`Turn ${turnIndex} not found (Topic has ${turns.length} turns)`);
  process.exit(1);
}

let narrative;
try {
  narrative = loaderMod.loadNarrative(topicId);
} catch (e) {
  console.error(`No narrative file for ${topicId}: ${e.message}`);
  console.error(`Create lib/history-narratives/${topicId}.md first`);
  process.exit(1);
}

// ── 构造旧 prompt（用现有数据） ──
const mockOpts = {
  topic,
  userName: 'Willow',
  userAge: 13,
  userSchool: 'Jeffery Trail Middle School',
  englishLevel: 'balanced',
  profile: '中国 6 年级转学到加州 1 年。中国史 home base。数学好。',
  history: [],
  worldview: null,
};

const oldSystem = promptsMod.buildHistorySystemPrompt(mockOpts);
const oldTurnPrompt = promptsMod.buildTurnPrompt(oldTurn, {
  lastUserAnswer: mockAnswer,
  englishLevel: 'balanced',
});

// ── 构造新 prompt ──
// 新 turn 数据：从旧数据衍生 — 真实使用时会重写 conversationTurns 为新 schema
const synthesizedNewTurn = {
  n: oldTurn.n,
  move: oldTurn.move,
  objective: deriveObjective(oldTurn),
  narrativePoint: deriveNarrativePoint(oldTurn, narrative.body),
  askAbout: oldTurn.inputPrompt || '让她直觉判断',
  constraints: {
    maxChars: 120,
    mustEndWithQuestion: oldTurn.expectsInput !== false,
    forbidden: ['弹 source', '同时多个问题', '强行类比', '列指令', '说"答案是"'],
    allowedActions: ['描述一个场景', '提一个问题', '引用故事中一个具体细节'],
  },
  mustIntroduce: oldTurn.mustIntroduce || [],
};

const newSystem = promptsMod.buildNarrativeSystemPrompt({
  ...mockOpts,
  narrativeBody: narrative.body,
  narrativeMetadata: narrative.metadata,
});
const newTurnPrompt = promptsMod.buildNarrativeTurnPrompt(synthesizedNewTurn, {
  lastUserAnswer: mockAnswer,
  totalTurns: turns.length || 13,
});

// ── 输出对比 ──
console.log('═══════════════════════════════════════════════════');
console.log(`Topic: ${topicId} · Turn ${turnIndex} · move=${oldTurn.move}`);
console.log(`Mock user answer: ${mockAnswer || '(开场，无回答)'}`);
console.log('═══════════════════════════════════════════════════\n');

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('▼ 旧路径（ai_seed-driven）');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`System prompt 字数：${oldSystem.length}`);
console.log(`Turn prompt 字数：${oldTurnPrompt.length}`);
console.log(`总字数：${oldSystem.length + oldTurnPrompt.length}`);
console.log();
console.log('--- SYSTEM (旧) ---');
console.log(oldSystem);
console.log();
console.log('--- TURN (旧) ---');
console.log(oldTurnPrompt);
console.log();

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('▼ 新路径（narrative-driven）');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`System prompt 字数：${newSystem.length}（含 narrative ${narrative.body.length} 字）`);
console.log(`Turn prompt 字数：${newTurnPrompt.length}`);
console.log(`总字数：${newSystem.length + newTurnPrompt.length}`);
console.log();
console.log('--- SYSTEM (新) ---');
console.log(newSystem);
console.log();
console.log('--- TURN (新) ---');
console.log(newTurnPrompt);
console.log();

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('▼ 关键差异');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`旧 turn prompt: ${oldTurnPrompt.length} 字（含 ai_seed + PEEL 决策树 + 多规则）`);
console.log(`新 turn prompt: ${newTurnPrompt.length} 字（单 objective + 短约束）`);
console.log(`减少: ${oldTurnPrompt.length - newTurnPrompt.length} 字（${Math.round((1 - newTurnPrompt.length/oldTurnPrompt.length)*100)}%）`);
console.log();
console.log(`新 system 加大: 旧 ${oldSystem.length} → 新 ${newSystem.length}（含 narrative 全文）`);
console.log('  → narrative 是稳定上下文，DeepSeek 缓存命中后实际开销低');
console.log();
console.log(`新路径每轮调用：~${Math.round((newSystem.length + newTurnPrompt.length) * 0.75)} tokens 输入`);
console.log(`旧路径每轮调用：~${Math.round((oldSystem.length + oldTurnPrompt.length) * 0.75)} tokens 输入`);

if (callDeepSeek) {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('▼ DeepSeek 实际生成（同一 turn 两版 prompt）');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  await callAndCompare(oldSystem, oldTurnPrompt, newSystem, newTurnPrompt);
}

// ── helpers ──

function deriveObjective(turn) {
  // 从旧 turn 衍生一句话目标 — 真实使用时这是 Opus 写的
  if (turn.move === 'opening-intuition') return '从直觉切入：让她对核心矛盾有第一感觉';
  if (turn.move === 'establish-context') return '把她带入故事的时空舞台';
  if (turn.move === 'introduce-figure') return '引入一个关键人物，让她代入视角';
  if (turn.move === 'source-deep-read') return '一起读 primary source 一段，让她感受原文';
  if (turn.move === 'china-bridge') return '连一座中国史的桥（only if 自然）';
  if (turn.move === 'mastery-prep') return '梳理今天的核心概念，准备 Mastery Gate';
  if (turn.move === 'closing') return '收束今天的对话，留一个开放问题';
  return '基于 ai_seed 推断的 objective: ' + (turn.ai_seed || '').slice(0, 80);
}

function deriveNarrativePoint(turn, narrativeBody) {
  // 简化：从 turn.move 推断 narrative 中的章节
  // 真实使用时 Opus 会精确指认
  if (turn.move === 'opening-intuition') return '第 1 节"一句话锚点" + 第 2 节"舞台"';
  if (turn.move === 'establish-context') return '第 2 节"舞台"（地理 / 气候 / 社会 / 制度）';
  if (turn.move === 'introduce-figure') return '第 3 节"主角们"';
  if (turn.move === 'source-deep-read') return '第 5 节"文件深读"';
  if (turn.move === 'china-bridge') return '第 8 节"同时代的中国"';
  return '请根据 turn 主题在 narrative 里取材';
}

async function callAndCompare(oldSys, oldUser, newSys, newUser) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    console.log('⚠️  DEEPSEEK_API_KEY env var not set; skipping API call');
    return;
  }
  console.log('调用中...');
  try {
    const oldResp = await callDeepSeekDirect(oldSys, oldUser, apiKey);
    const newResp = await callDeepSeekDirect(newSys, newUser, apiKey);
    console.log('\n--- 旧路径 DeepSeek 输出 ---');
    console.log(oldResp);
    console.log('\n--- 新路径 DeepSeek 输出 ---');
    console.log(newResp);
  } catch (e) {
    console.error('API call failed:', e.message);
  }
}

async function callDeepSeekDirect(system, user, apiKey) {
  const resp = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      max_tokens: 400,
      temperature: 0.7,
    }),
  });
  if (!resp.ok) throw new Error('HTTP ' + resp.status + ' ' + (await resp.text()).slice(0, 200));
  const data = await resp.json();
  return data.choices?.[0]?.message?.content || '(no content)';
}
