#!/usr/bin/env node
/**
 * scripts/test-narrative-batch.mjs
 *
 * 批量跑 6 个代表性 turn 的 旧 vs 新 prompt 对比。
 * 输出简洁版（只显示 DeepSeek 输出 + 关键 verdict）。
 *
 * 用法：
 *   DEEPSEEK_API_KEY=... node scripts/test-narrative-batch.mjs
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const promptsMod = await import('file://' + path.join(ROOT, 'lib/history-prompts.js'));
const topicsMod  = await import('file://' + path.join(ROOT, 'lib/history-topics.js'));
const loaderMod  = await import('file://' + path.join(ROOT, 'lib/history-narratives/loader.js'));

const apiKey = process.env.DEEPSEEK_API_KEY;
if (!apiKey) { console.error('Need DEEPSEEK_API_KEY'); process.exit(1); }

// 6 个测试 case
const CASES = [
  { topicId: 'magna-carta-1215', turn: 6, move: 'geo', answer: '对', risk: 'UI-promise（地图）' },
  { topicId: 'magna-carta-1215', turn: 7, move: 'source', answer: '他们好像在签合同', risk: 'source 文段糊脸' },
  { topicId: 'magna-carta-1215', turn: 13, move: 'seal', answer: '对啊', risk: '收束套话' },
  { topicId: 'crusades-1099', turn: 5, move: 'source', answer: '为什么是耶路撒冷？', risk: '长英文 source 砸脸' },
  { topicId: 'crusades-1099', turn: 8, move: 'roleplay', answer: '我想代入 Layla', risk: 'cosplay + 单动作' },
  { topicId: 'crusades-1099', turn: 10, move: 'connect-china', answer: '唐宋皇帝管宗教吗？', risk: '中性 / Whig 风险' },
];

const baseOpts = {
  userName: 'Willow',
  userAge: 13,
  userSchool: 'Jeffery Trail Middle School',
  englishLevel: 'balanced',
  profile: '中国 6 年级转学到加州 1 年。中国史 home base。数学好。',
  history: [],
  worldview: null,
};

async function callDS(system, user) {
  const resp = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
      max_tokens: 400,
      temperature: 0.7,
    }),
  });
  if (!resp.ok) throw new Error('HTTP ' + resp.status);
  const data = await resp.json();
  return data.choices?.[0]?.message?.content || '(no content)';
}

function deriveObjective(t) {
  const m = t.move;
  if (m === 'hook' || m === 'opening-intuition') return '从直觉切入：让她对核心矛盾有第一感觉';
  if (m === 'bridge-legal' || m === 'bridge-religion' || m === 'bridge-property') return '在某一维度上引出概念冲突，让她对照中国知识基础';
  if (m === 'bridge-eval') return '回应她的直觉答案，自然引到下一层';
  if (m === 'frame') return '把故事的核心张力（多方动机）摊开，让她看到复杂';
  if (m === 'geo') return '把她带入舞台的地理 — 让她意识到地理塑造冲突';
  if (m === 'source' || m === 'source-deep-read') return '一起读 primary source 一段（短），让她感受原文味道';
  if (m === 'source-counter' || m === 'source-deep-eval') return '从另一方读对应 source — 三方视角并列';
  if (m === 'pivot') return '关键转折点 — 让她思考"如果换条路会怎样"';
  if (m === 'provoke') return '抛一个让她不舒服的反问，逼她自我修正';
  if (m === 'roleplay') return '让她代入一个第一人称角色，从内部感受';
  if (m === 'roleplay-eval') return '回应她在角色里的判断，引出现代回响';
  if (m === 'connect') return '把今天学的连到她已知的知识 / 当代生活';
  if (m === 'connect-china') return '画一座桥到同时代中国 — 不是"谁更好"是"为什么不同"';
  if (m === 'connect-modern') return '把这个事件连到 2025 年的现实 — 一句话点醒';
  if (m === 'throughline') return '指出本 Topic 在 7 年级历史课纲整条主线里的位置';
  if (m === 'seal') return '收束今天的对话 — 留一个开放问题不下结论';
  return '基于 turn move 的目标';
}

function deriveNarrativePoint(t) {
  const m = t.move;
  if (m === 'hook') return '第 1 节"一句话锚点"';
  if (m.startsWith('bridge')) return '第 2 节"舞台" + 第 3 节"主角"';
  if (m === 'frame') return '第 4 节"故事"开头';
  if (m === 'geo') return '第 2 节"地理"';
  if (m === 'source' || m === 'source-deep-read') return '第 5 节"文件深读"';
  if (m === 'source-counter') return '第 5 节"文件深读"另一方版本';
  if (m === 'pivot') return '第 4 节关键转折 / 第 6 节"影响"';
  if (m === 'provoke') return '第 9 节 historiography / 第 10 节误解清坑';
  if (m === 'roleplay') return '第 3 节人物 cheat sheet';
  if (m === 'roleplay-eval') return '第 3 节 + 第 6 节"长期影响"';
  if (m === 'connect-china') return '第 8 节"同时代的中国"';
  if (m === 'connect-modern') return '第 6 节"长期影响"末端';
  if (m === 'throughline') return '附录 D 可视化';
  if (m === 'seal') return '第 11 节"思考问题"';
  return '请按 turn move 在 narrative 里取材';
}

const results = [];

for (const c of CASES) {
  console.log('\n═══════════════════════════════════════════════════');
  console.log(`Test: ${c.topicId} · T${c.turn} · move=${c.move}`);
  console.log(`User answer: "${c.answer}"`);
  console.log(`Risk to check: ${c.risk}`);
  console.log('───────────────────────────────────────────────────');

  const topic = topicsMod.getTopic(c.topicId);
  const oldTurn = topic.conversationTurns[c.turn - 1];
  const narrative = loaderMod.loadNarrative(c.topicId);

  const opts = { ...baseOpts, topic };
  const oldSys = promptsMod.buildHistorySystemPrompt(opts);
  const oldUser = promptsMod.buildTurnPrompt(oldTurn, { lastUserAnswer: c.answer, englishLevel: 'balanced' });

  const newTurn = {
    n: oldTurn.n,
    move: oldTurn.move,
    objective: deriveObjective(oldTurn),
    narrativePoint: deriveNarrativePoint(oldTurn),
    askAbout: oldTurn.inputPrompt || '让她思考',
    constraints: {
      maxChars: 120,
      mustEndWithQuestion: oldTurn.move !== 'seal',
      forbidden: ['弹 source', '同时多个问题', '强行类比', '说"答案是"', '套话"很好"/"加油"'],
      allowedActions: ['描述场景', '提一个问题', '引用 narrative 中具体细节'],
    },
    mustIntroduce: oldTurn.mustIntroduce || [],
  };
  const newSys = promptsMod.buildNarrativeSystemPrompt({ ...opts, narrativeBody: narrative.body, narrativeMetadata: narrative.metadata });
  const newUser = promptsMod.buildNarrativeTurnPrompt(newTurn, { lastUserAnswer: c.answer, totalTurns: 13 });

  let oldOut, newOut;
  try {
    [oldOut, newOut] = await Promise.all([callDS(oldSys, oldUser), callDS(newSys, newUser)]);
  } catch (e) {
    console.error('  ERROR:', e.message);
    continue;
  }

  console.log('▼ 旧路径');
  console.log(oldOut);
  console.log('───');
  console.log('▼ 新路径');
  console.log(newOut);
  results.push({ ...c, oldOut, newOut, oldLen: oldOut.length, newLen: newOut.length });
}

console.log('\n\n═══════════════════════════════════════════════════');
console.log('Summary');
console.log('═══════════════════════════════════════════════════');
for (const r of results) {
  console.log(`${r.topicId} T${r.turn} (${r.move}): old ${r.oldLen} 字 / new ${r.newLen} 字`);
}
