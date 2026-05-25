#!/usr/bin/env node
/**
 * scripts/willow-simulator-lens.mjs  (lens/storyboard-aware Willow simulator — DeepSeek-GENERATION path)
 *
 * ⚠️ 重要 (2026-05-25 发现): 当前 lens topic 的主线是 **Opus prewritten content 直接渲染**
 * (history.js 575 「prewritten 短路」+ nodeToTurn `_prewrittenContent: node.content`)，
 * DeepSeek 不生成主线任何节点。所以本脚本 (让 DeepSeek 逐节点生成) 测的是一条**当前被短路、用户走不到**的路径——
 * 它的 grade (尤其 A single-action) 是「逼 DeepSeek 重写 prewritten 内容」的假象，不是真实体感。
 * → 预制 lens topic 的「教育有效性」由 4-agent review (读实际 prewritten 内容) 把关，不靠本脚本。
 * → 本脚本仅在未来开启 DeepSeek-generated 主线模式时才适用 (诊断用)。
 * 当前真实 DeepSeek 运行时 = Sidekick 自由追问 (buildFreeChatSystemPrompt, 已 §8 分级 + 日志)。
 *
 * 老 willow-simulator.mjs 走 topic.conversationTurns + buildNarrativeTurnPrompt (旧 13-turn 格式)。
 * 现在的 topic 是 lens-based: 对话走 default lens 的 storyboard 节点 + buildStoryboardTurnPrompt。
 * 本脚本模拟真实运行时路径: buildNarrativeSystemPrompt (system) + buildStoryboardTurnPrompt (每节点),
 * 用 DeepSeek 跑出 AI 真实回应, 再自动 grade 6 维 (single-action/empathy/no-halluc/no-UI/neutrality/anti-guessing)。
 *
 * 用法: DEEPSEEK_API_KEY=... node scripts/willow-simulator-lens.mjs <topicId> [persona|all|core]
 *   persona: motivated | distracted | rebellious | thoughtful
 *   core = motivated+distracted (2 个, 控成本); all = 4 个; 缺省 = core
 * 退出码: 任一 persona <80% = exit 1
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const apiKey = process.env.DEEPSEEK_API_KEY;
if (!apiKey) { console.error('Set DEEPSEEK_API_KEY'); process.exit(2); }

const topicId = process.argv[2];
const personaArg = process.argv[3] || 'core';
if (!topicId) { console.error('Usage: node scripts/willow-simulator-lens.mjs <topicId> [persona|all|core]'); process.exit(2); }

const prompts = await import('file://' + path.join(ROOT, 'lib/history-prompts.js'));
const topics  = await import('file://' + path.join(ROOT, 'lib/history-topics.js'));
const sbMod   = await import('file://' + path.join(ROOT, 'lib/history-storyboards/index.js'));
const loader  = await import('file://' + path.join(ROOT, 'lib/history-narratives/loader.js'));

const PERSONAS = {
  motivated:  '认真型 13 岁中国移民 7 年级女生。回答 30-60 字, 有自己想法, 喜欢追问。中文为主, 偶尔英文。',
  distracted: '开小差 13 岁。回答 5-15 字, "嗯"/"对"/"不知道"型; 偶尔跑题。',
  rebellious: '13 岁有脾气。会反推 AI: "为什么必须这样想"/"我不觉得 X"。20-40 字。',
  thoughtful: '思考型 13 岁, 先停顿再答, 带"我在想..."/"如果...的话"。30-50 字。',
};
const personaSys = (p) => [
  '你扮演 ' + PERSONAS[p], '',
  '你的世界: 中国家庭背景, 中国史是你 home base; 英文 ESL; 不喜欢被讲课。',
  '你正在跟一个 AI 历史老师聊天。回答必须像真实 13 岁孩子 —— 不展示老师水平分析, 不列 PEEL, 不总结。只对 AI 上一句做真实反应。',
  '禁止: >60 字 / essay / 成熟分析 / 主动用专业术语。',
].join('\n');

async function callDS(system, msg, maxTokens) {
  const r = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
    body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'system', content: system }, { role: 'user', content: msg }], max_tokens: maxTokens || 500, temperature: 0.7 }),
  });
  if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + (await r.text()).slice(0, 200));
  const d = await r.json();
  return d.choices?.[0]?.message?.content || '(no content)';
}

async function grade(narrative, ai, lastUser) {
  const jp = [
    '你是 AI 教学产品质量审稿员。给定 canonical narrative + 用户上一轮 + AI 这一轮回应, 判 6 维 0/1:',
    'A single-action (4-slot 接住→桥→交付→提问 算 1 个; 多类比+弹source+打分+切视角=0)',
    'B empathy-first (用户说话后先共情/追问再过渡=1; 直接进下题=0; 开场无用户话=1)',
    'C no-hallucination (AI 提的地名/人名/日期/数字/引文都在 narrative 里=1; 编了=0)',
    'D no-ui-promise (说"去看地图/点开/红点"=0; 纯文字=1)',
    'E neutrality (暗示某文明先进/落后/对/错=0; 中性对照=1)',
    'F anti-guessing (用 AI 这轮 deliver 的信息能系统推理答末尾问题=1; 只能瞎猜=0)',
    '严格 JSON (无 markdown): {"A":0|1,"B":0|1,"C":0|1,"D":0|1,"E":0|1,"F":0|1,"notes":"一句话"}',
    '════', '## Narrative 全文', narrative, '════',
    '## 用户上一轮', lastUser ? '「' + lastUser + '」' : '(开场, B 自动 1)',
    '## AI 这一轮', ai,
  ].join('\n');
  const out = await callDS('你是历史教学产品质量审稿员, 返回严格 JSON。', jp, 500);
  try {
    const j = JSON.parse(out.replace(/```json\n?|```\n?/g, '').trim());
    return { A:+!!j.A, B:+!!j.B, C:+!!j.C, D:+!!j.D, E:+!!j.E, F:+!!j.F, notes: j.notes || '' };
  } catch (e) { return { A:0,B:0,C:0,D:0,E:0,F:0, notes: 'PARSE-FAIL: ' + out.slice(0,80) }; }
}

async function simulate(persona) {
  const topic = topics.getTopic(topicId);
  if (!topic) throw new Error('no topic ' + topicId);
  if (!sbMod.hasLenses(topicId)) throw new Error(topicId + ' has no lenses (use old willow-simulator.mjs)');
  const narrative = loader.loadNarrative(topicId);
  const nodes = sbMod.loadStoryboard(topicId); // default lens storyboard
  const lensMeta = sbMod.getLensMeta(topicId);
  console.log(`\n══ ${topicId} · ${persona} · default lens=${lensMeta.id} · ${nodes.length} nodes ══`);

  const sys = prompts.buildNarrativeSystemPrompt({
    topic, narrativeBody: narrative.body, narrativeMetadata: narrative.metadata,
    userName: 'Willow', userAge: 13, userSchool: 'Jeffery Trail',
    profile: '中国 6 年级转加州 1 年。中国史 home base。数学好 / 英文 ESL。',
    englishLevel: 'high', history: [],
    roleContext: lensMeta ? { figure: lensMeta.nameCn || lensMeta.name, role: lensMeta.role } : null,
  });
  const pSys = personaSys(persona);

  let lastUser = '', scores = [], transcript = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const userPrompt = prompts.buildStoryboardTurnPrompt(node, { lastUserAnswer: lastUser, totalNodes: nodes.length });
    process.stdout.write(`  ${node.id} (${node.phase}) AI...`);
    const ai = await callDS(sys, userPrompt, 600);
    process.stdout.write(' GRADE...');
    const g = await grade(narrative.body, ai, lastUser);
    const pass = g.A+g.B+g.C+g.D+g.E+g.F;
    scores.push({ id: node.id, phase: node.phase, g, pass });
    transcript.push({ id: node.id, phase: node.phase, lastUser, ai, g });
    if (i < nodes.length - 1) {
      const u = await callDS(pSys, 'AI 老师刚说:「' + ai + '」\n\n你回应 (13 岁口吻):', 150);
      lastUser = u.trim();
      transcript[transcript.length - 1].userResponse = lastUser;
    }
    process.stdout.write(` ${pass}/6\n`);
  }

  const total = scores.reduce((s,x)=>s+x.pass,0), max = scores.length*6, ratio = (total/max*100).toFixed(1);
  const date = new Date().toISOString().slice(0,10);
  const dir = path.join(ROOT, 'marketing/dev-log/transcripts');
  fs.mkdirSync(dir, { recursive: true });
  const lines = [`# Willow Lens-Sim — ${topicId} / ${persona}`, `- default lens: ${lensMeta.id}`, `- Date: ${date}`, `- Score: ${total}/${max} (${ratio}%)`, '', '| Node | phase | A | B | C | D | E | F | notes |', '|---|---|:-:|:-:|:-:|:-:|:-:|:-:|---|'];
  scores.forEach(s=>{const g=s.g;lines.push(`| ${s.id} | ${s.phase} | ${g.A?'✅':'❌'} | ${g.B?'✅':'❌'} | ${g.C?'✅':'❌'} | ${g.D?'✅':'❌'} | ${g.E?'✅':'❌'} | ${g.F?'✅':'❌'} | ${(g.notes||'').slice(0,70)} |`);});
  lines.push('', '## Transcript');
  transcript.forEach(t=>{lines.push(`### ${t.id} · ${t.phase}`); if(t.lastUser)lines.push(`**User**:「${t.lastUser}」`); lines.push(`**AI**: ${t.ai}`); if(t.userResponse)lines.push(`**User next**:「${t.userResponse}」`); lines.push('');});
  fs.writeFileSync(path.join(dir, `${topicId}-${persona}-lens-${date}.md`), lines.join('\n'));
  console.log(`  → transcript saved · Score ${total}/${max} (${ratio}%)`);
  return { persona, total, max, ratio: +ratio };
}

const set = personaArg === 'all' ? Object.keys(PERSONAS) : personaArg === 'core' ? ['motivated','distracted'] : [personaArg];
const results = [];
for (const p of set) { if (!PERSONAS[p]) { console.error('unknown persona', p); continue; } try { results.push(await simulate(p)); } catch (e) { console.error('  ERROR', e.message); } }
console.log('\n══ Summary ' + topicId + ' ══');
let ok = true;
for (const r of results) { console.log(`  ${r.persona}: ${r.total}/${r.max} (${r.ratio}%)`); if (r.ratio < 80) ok = false; }
process.exit(ok ? 0 : 1);
