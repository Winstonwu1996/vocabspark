#!/usr/bin/env node
/**
 * scripts/willow-simulator.mjs
 *
 * 模拟 13 岁 Willow 跟 Topic 的 AI 走完 13 轮对话，输出完整 transcript +
 * 自动 grade（5 个维度），让 Sarah Chen 不用每次手测每个 Topic 的体感。
 *
 * 4 种 persona：
 *   - motivated:    认真型 — 回答详细，跟着 AI 思考
 *   - distracted:   开小差 — 答得短 / 跑题 / "嗯" "对" 型
 *   - rebellious:   叛逆型 — 推回 AI 的 framing / 质疑
 *   - thoughtful:   思考深 — 答前停顿，给 nuanced 回答
 *
 * 6 个 grade 维度（每轮自动判 0-1）：
 *   A. single-action     — AI 这一轮是不是只做一件事
 *   B. empathy-first     — 用户答完后 AI 是否先共情再过渡
 *   C. no-hallucination  — AI 提到的具体细节是否都在 narrative 里
 *   D. no-ui-promise     — AI 是否说"去看地图"/"点开"等 UI 引导
 *   E. neutrality        — AI 是否偏向某一文明（Whig 或反向）
 *   F. anti-guessing     — 学生用 AI 这一轮 deliver 的信息能系统推理答 provoke 问题吗？还是只能瞎猜？
 *
 * 用法：
 *   DEEPSEEK_API_KEY=... node scripts/willow-simulator.mjs <topicId> [persona]
 *
 * 缺省 persona 跑全部 4 种。
 *
 * 输出：marketing/dev-log 同级的 transcripts/{topicId}-{persona}-{date}.md
 *
 * 退出码：任何 turn 在任何维度 0/5 = exit 1（ship gate 拦下）
 */

import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const apiKey = process.env.DEEPSEEK_API_KEY;
if (!apiKey) {
  console.error('Set DEEPSEEK_API_KEY');
  process.exit(2);
}

const args = process.argv.slice(2);
const topicId = args[0];
const personaArg = args[1] || 'all';
if (!topicId) {
  console.error('Usage: node scripts/willow-simulator.mjs <topicId> [persona|all]');
  process.exit(2);
}

const promptsMod = await import('file://' + path.join(ROOT, 'lib/history-prompts.js'));
const topicsMod  = await import('file://' + path.join(ROOT, 'lib/history-topics.js'));
const loaderMod  = await import('file://' + path.join(ROOT, 'lib/history-narratives/loader.js'));

const PERSONAS = {
  motivated:  '认真型 13 岁中国移民 7 年级女生 Willow。回答 30-60 字，有自己想法，喜欢追问。回答用中文为主，偶尔英文。',
  distracted: '开小差 13 岁。回答 5-15 字，"嗯"/"对"/"不知道"/"好"型；偶尔跑题（提一下游戏/朋友）。',
  rebellious: '13 岁但有自己脾气。会反推 AI："为什么必须这样想"/"我不觉得 X"/"那不公平"。20-40 字。',
  thoughtful: '思考型 13 岁，先停顿再答。回答带"我在想..."/"如果...的话..."。30-50 字。',
};

const SYSTEM_PERSONA = function(persona) {
  return [
    '你扮演 ' + PERSONAS[persona],
    '',
    '你的世界：',
    '- 中国 6 年级转加州 1 年',
    '- 中国史是你 home base（唐宋 / 天命 / 科举都熟）',
    '- 数学好 / 英文 ESL Lexile 800-1000 / 不喜欢被讲课',
    '- 你妈做晚饭你做作业的真实场景',
    '',
    '现在你正在跟一个 AI 历史老师聊天。**你的回答必须像真实 13 岁孩子**——',
    '不要展示老师水平的分析。不要列 PEEL。不要总结。',
    '只是对 AI 上一句话做个真实反应。',
    '',
    '禁止：写超过 60 字 / 写 essay / 显示成熟分析能力 / 用专业术语主动开头',
  ].join('\n');
};

async function callDS(system, msg, maxTokens) {
  const r = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'system', content: system }, { role: 'user', content: msg }],
      max_tokens: maxTokens || 400,
      temperature: 0.7,
    }),
  });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const d = await r.json();
  return d.choices?.[0]?.message?.content || '(no content)';
}

// ── grade 一轮 AI response（5 维 0/1）──
async function gradeAIResponse(narrative, aiResponse, lastUserAnswer) {
  const judgePrompt = [
    '你是 AI 教学产品的质量审稿员。下面有：',
    '1. 一份 canonical narrative（AI 老师的"教材"）',
    '2. 一段用户上一轮说的话',
    '3. AI 老师这一轮的回应',
    '',
    '从 6 个维度判 0 或 1（0=违反，1=通过）：',
    '',
    'A. single-action — AI 这一轮是不是只做一个**核心教学动作**？（注意：4-slot 节奏"接住用户 → 桥 → 交付信息 → 问问题"算 1 个动作不算 4 个；同时类比 + 弹 source + 1-10 打分 + 切视角 = 多动作 = 0；正常的"empathy → deliver → provoke"节奏 = 1）',
    'B. empathy-first — 如果用户上一轮有说话，AI 是否先共情或追问她说的，再过渡？（直接进下一题 = 0；先接住再过渡 = 1）',
    'C. no-hallucination — AI 提到的具体细节（地名/人名/日期/数字/原话引用）是否都能在 narrative 里找到？（编了 narrative 没有的细节 = 0）',
    'D. no-ui-promise — AI 是否说"去看地图"/"点开"/"看那个红点"等 UI 引导？（说了 = 0；纯文字描述 = 1）',
    'E. neutrality — AI 是否暗示某文明先进/落后/正确/错误？（"中国错过了 X" / "西方因为 X 所以崛起" = 0；中性结构对照 = 1）',
    'F. anti-guessing — 给定 AI 这一轮 deliver 的信息（所有具体场景/数字/人物/制度），13 岁能用系统推理答 AI 末尾的问题吗？还是只能瞎猜（信息不够 / 问题与信息脱节）？（能推理 = 1；只能瞎猜 = 0）',
    '',
    '输出严格 JSON（不要包 markdown 块）：',
    '{"A":0|1,"B":0|1,"C":0|1,"D":0|1,"E":0|1,"F":0|1,"notes":"一句话总结哪个维度有问题"}',
    '',
    '═══════════════════',
    '## Narrative（AI 老师的教材，全文）',
    narrative,  // 不截断 — DeepSeek 64K context 装得下；之前截断 6000 字漏判 C 维度（词汇表在末尾）
    '═══════════════════',
    '## 用户上一轮说',
    lastUserAnswer ? '「' + lastUserAnswer + '」' : '(开场，用户还没说话 — B 维度自动给 1)',
    '## AI 老师这一轮回应',
    aiResponse,
  ].join('\n');

  const out = await callDS('你是历史教学产品的质量审稿员。返回严格 JSON。', judgePrompt, 500);
  // strip markdown if any
  const cleaned = out.replace(/```json\n?|```\n?/g, '').trim();
  try {
    const j = JSON.parse(cleaned);
    return {
      A: j.A === 1 ? 1 : 0,
      B: j.B === 1 ? 1 : 0,
      C: j.C === 1 ? 1 : 0,
      D: j.D === 1 ? 1 : 0,
      E: j.E === 1 ? 1 : 0,
      F: j.F === 1 ? 1 : 0,
      notes: j.notes || '',
    };
  } catch (e) {
    return { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, notes: 'GRADE-PARSE-FAIL: ' + cleaned.slice(0, 100) };
  }
}

async function simulateConversation(topicId, persona) {
  console.log(`\n══════ ${topicId} · ${persona} ══════`);
  const topic = topicsMod.getTopic(topicId);
  const narrative = loaderMod.loadNarrative(topicId);
  const turns = topic.conversationTurns;

  const baseOpts = {
    topic, narrativeBody: narrative.body, narrativeMetadata: narrative.metadata,
    userName: 'Willow', userAge: 13, userSchool: 'Jeffery Trail',
    profile: '中国 6 年级转加州 1 年。中国史 home base。数学好 / 英文 ESL。',
    englishLevel: 'balanced',
    history: [],
  };
  const aiSys = promptsMod.buildNarrativeSystemPrompt(baseOpts);
  const personaSys = SYSTEM_PERSONA(persona);

  const transcript = [];
  let lastUserAnswer = '';
  let allScores = [];
  const totalTurns = Math.min(turns.length, 8); // limit to 8 turns to bound cost

  for (let i = 0; i < totalTurns; i++) {
    const turn = turns[i];
    const derived = promptsMod.deriveTurnObjective(turn);
    const enriched = Object.assign({}, turn, derived, { constraints: promptsMod.deriveTurnConstraints(turn) });
    const userPrompt = promptsMod.buildNarrativeTurnPrompt(enriched, {
      lastUserAnswer, totalTurns: turns.length,
    });

    process.stdout.write(`  T${turn.n} (${turn.move}) AI...`);
    const aiOut = await callDS(aiSys, userPrompt, 400);
    process.stdout.write(' GRADE...');
    const grade = await gradeAIResponse(narrative.body, aiOut, lastUserAnswer);
    const passing = (grade.A + grade.B + grade.C + grade.D + grade.E + grade.F);
    allScores.push({ turn: turn.n, move: turn.move, grade, passing });

    transcript.push({
      turn: turn.n,
      move: turn.move,
      ai: aiOut,
      lastUserAnswer,
      grade,
    });

    process.stdout.write(' USER...');
    if (i < totalTurns - 1) {
      // get persona response for next turn
      const userOut = await callDS(personaSys, 'AI 老师刚才说：「' + aiOut + '」\n\n你回应（保持 persona 风格 + 13 岁口吻）：', 150);
      lastUserAnswer = userOut.trim();
      transcript[transcript.length - 1].userResponse = lastUserAnswer;
    }
    process.stdout.write(` ${passing}/5\n`);
  }

  // ── output transcript ──
  const date = new Date().toISOString().slice(0, 10);
  const dir = path.join(ROOT, 'marketing/dev-log/transcripts');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const outFile = path.join(dir, `${topicId}-${persona}-${date}.md`);

  const totalPass = allScores.reduce((s, x) => s + x.passing, 0);
  const maxPass = allScores.length * 6;
  const ratio = (totalPass / maxPass * 100).toFixed(1);

  const lines = [];
  lines.push(`# Willow Simulator Transcript`);
  lines.push(`- Topic: ${topicId}`);
  lines.push(`- Persona: ${persona}`);
  lines.push(`- Date: ${date}`);
  lines.push(`- Score: ${totalPass}/${maxPass} (${ratio}%)`);
  lines.push('');
  lines.push('## Per-turn grades');
  lines.push('| Turn | Move | A single | B empathy | C no-halluc | D no-UI | E neutral | F anti-guess | Notes |');
  lines.push('|---|---|:-:|:-:|:-:|:-:|:-:|:-:|---|');
  allScores.forEach(s => {
    const g = s.grade;
    lines.push(`| T${s.turn} | ${s.move} | ${g.A?'✅':'❌'} | ${g.B?'✅':'❌'} | ${g.C?'✅':'❌'} | ${g.D?'✅':'❌'} | ${g.E?'✅':'❌'} | ${g.F?'✅':'❌'} | ${(g.notes||'').slice(0,80)} |`);
  });
  lines.push('');
  lines.push('## Full transcript');
  transcript.forEach(t => {
    lines.push(`### T${t.turn} · ${t.move}`);
    if (t.lastUserAnswer) lines.push(`**User**：「${t.lastUserAnswer}」`);
    lines.push(`**AI**：${t.ai}`);
    if (t.userResponse) lines.push(`**User next**：「${t.userResponse}」`);
    lines.push('');
  });

  fs.writeFileSync(outFile, lines.join('\n'));
  console.log(`  → ${outFile}`);
  console.log(`  Score: ${totalPass}/${maxPass} (${ratio}%)`);

  return { topicId, persona, totalPass, maxPass, ratio };
}

async function main() {
  const personas = personaArg === 'all' ? Object.keys(PERSONAS) : [personaArg];
  const results = [];
  for (const p of personas) {
    if (!PERSONAS[p]) {
      console.error('Unknown persona:', p);
      continue;
    }
    try {
      const r = await simulateConversation(topicId, p);
      results.push(r);
    } catch (e) {
      console.error('  ERROR:', e.message);
    }
  }

  console.log('\n══════ Summary ══════');
  let allPassing = true;
  for (const r of results) {
    console.log(`  ${r.persona}: ${r.totalPass}/${r.maxPass} (${r.ratio}%)`);
    if (r.totalPass / r.maxPass < 0.8) allPassing = false;
  }
  process.exit(allPassing ? 0 : 1);
}

main().catch(e => { console.error('Fatal:', e); process.exit(2); });
