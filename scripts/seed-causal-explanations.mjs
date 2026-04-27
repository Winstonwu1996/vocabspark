#!/usr/bin/env node
// scripts/seed-causal-explanations.mjs
//
// 预生成所有 atlas Topic 的 5 层因果链 + 时间链事件 AI 解读
// 写入 Upstash 全局缓存 → 用户从未触发 API 调用，第一次点击就有内容（< 50ms）
//
// 用法：
//   node scripts/seed-causal-explanations.mjs               # 全部 Topic
//   node scripts/seed-causal-explanations.mjs magna-carta   # 单个 Topic
//   node scripts/seed-causal-explanations.mjs --dry-run     # 预览不写入
//
// 成本估算：40 Topic × ~6 entries（5 层 + 平均 5 时间链事件 = ~10 actually，但事件平均 4 个 ≈ 9 entries）
// = ~360 entries × DeepSeek-V3 (~$0.0003) = **一次性 ~$0.11**
// 之后所有用户共享 Upstash 缓存，月成本 ≈ $0
//
// 环境变量：
//   DEEPSEEK_API_KEY              必需
//   UPSTASH_REDIS_REST_URL        必需（不设则只 dry-run，不实际写入）
//   UPSTASH_REDIS_REST_TOKEN      必需

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIEWS_DIR = path.join(__dirname, '..', 'data', 'atlas', 'views');
const TTL_SECONDS = 90 * 24 * 60 * 60; // 90 天

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const DRY_RUN = process.argv.includes('--dry-run');
const SINGLE_TOPIC = process.argv.find(a => !a.startsWith('--') && !a.endsWith('.mjs') && !a.startsWith('/') && a !== 'node');

if (!DEEPSEEK_API_KEY) {
  console.error('❌ DEEPSEEK_API_KEY env var required');
  process.exit(1);
}
if (!UPSTASH_URL || !UPSTASH_TOKEN) {
  console.warn('⚠️  Upstash env vars missing — running in dry-run mode (no writes)');
}

// ─── DJB2 hash（跟 lib/causal-cache.js 保持一致）────
function hashStr(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h) + s.charCodeAt(i);
    h = h & 0xFFFFFFFF;
  }
  return Math.abs(h).toString(36);
}

function buildCacheKey({ topicId, layer, grade, entry }) {
  const eHash = hashStr(entry || '');
  return `causal:v1:${topicId}:${layer}:${grade}:${eHash}`;
}

// ─── 解析 view 文件 — 提取 causalSummary + grade ──────────
async function loadView(filePath) {
  const url = 'file://' + filePath;
  const mod = await import(url);
  return mod.VIEW || mod.default || null;
}

// ─── 拆 "L0 X + L1 Y + ..." 成 layer→entry map ───────────
function parseLayers(text) {
  if (!text || typeof text !== 'string') return null;
  const re = /L([0-4])\s+(.+?)(?=\s*\+\s*L[0-4]\s|$)/g;
  const out = {};
  let m;
  while ((m = re.exec(text)) !== null) {
    out['L' + m[1]] = m[2].trim();
  }
  return Object.keys(out).length > 0 ? out : null;
}

function parseTimeline(entry) {
  if (!entry) return null;
  const arrows = /\s*[→⇒]+\s*|\s*->\s*/;
  const parts = entry.split(arrows).map(s => s.trim()).filter(Boolean);
  return parts.length >= 2 ? parts : null;
}

// ─── DeepSeek 调用（跟 /api/causal-explain 完全一致的 prompt）─────
const LAYER_NAMES = {
  L0: '地理', L1: '气候', L2: '民生', L3: '制度', L4: '事件',
  event: '事件',
};

function buildPrompt({ topicId, topicTitle, layer, entry, grade }) {
  const layerName = LAYER_NAMES[layer] || layer;
  return [
    `# 任务`,
    `给一个 ${grade || 7} 年级中国学生（中文母语，正在美国公立学校学历史）讲 1 条因果链条目，60-120 字。`,
    ``,
    `# Topic 上下文`,
    `Topic: ${topicTitle || topicId}`,
    `层次: ${layerName}（5 层因果框架的一层 — Annales 长时段史学）`,
    `条目: 「${entry}」`,
    ``,
    `# 任务约束`,
    `1. **60-120 中文字符**（含标点）— 长了砍`,
    `2. **解读 1 个核心因果**：这条对 ${topicTitle || topicId} 意味着什么？为什么这是关键？`,
    `3. **跟中国史做锚点**（如果合适）：例如「这跟唐宋的 X 类似 / 不同」`,
    `4. **朋友语气，不老师腔** — 禁止用「答案是」「让我告诉你」「首先」`,
    `5. **结尾用一个反问把球踢给她**（推荐但非强制）`,
    `6. **史实严谨**：不确定就说「大致这个时期」，不要编日期`,
    ``,
    `# 输出格式`,
    `**直接输出解读文本**（不要 JSON，不要 markdown 标题，不要前缀「解读：」）。`,
    `就像朋友跟她聊一段，60-120 字，到此为止。`,
  ].join('\n');
}

async function callDeepSeek({ system, message, maxTokens = 300 }) {
  const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: message },
      ],
      max_tokens: maxTokens,
      temperature: 0.6,
    }),
  });
  if (!res.ok) {
    throw new Error(`deepseek ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  const json = await res.json();
  const text = json?.choices?.[0]?.message?.content;
  if (!text) throw new Error('deepseek empty response');
  return text.trim();
}

// ─── Upstash GET / SET ──────────────────────────────────
async function cacheGet(key) {
  if (DRY_RUN || !UPSTASH_URL) return null;
  try {
    const res = await fetch(`${UPSTASH_URL}/get/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.result || null;
  } catch (_) { return null; }
}

async function cacheSet(key, value) {
  if (DRY_RUN || !UPSTASH_URL) return false;
  try {
    const res = await fetch(`${UPSTASH_URL}/set/${encodeURIComponent(key)}/${encodeURIComponent(value)}?EX=${TTL_SECONDS}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    });
    return res.ok;
  } catch (_) { return false; }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ─── 主流程 ─────────────────────────────────────────────
async function processView(view, viewFile) {
  const topicId = view.id || path.basename(viewFile, '.js');
  const topicTitleObj = view.title;
  const topicTitle = (topicTitleObj && (topicTitleObj.cn || topicTitleObj.en)) || topicId;
  const grade = view.grade || 7;

  const summary = view.causalSummary;
  if (!summary || (typeof summary !== 'string' && !summary.cn && !summary.en)) {
    console.log(`⏭  ${topicId}: no causalSummary, skip`);
    return { topicId, count: 0, hits: 0, errors: 0 };
  }

  const summaryText = typeof summary === 'string' ? summary : (summary.cn || summary.en);
  const layers = parseLayers(summaryText);
  if (!layers) {
    console.log(`⏭  ${topicId}: causalSummary unparseable, skip`);
    return { topicId, count: 0, hits: 0, errors: 0 };
  }

  // 收集所有要生成的 entries：5 层 + L4 事件拆开
  const targets = []; // [{ layer, entry }]
  for (const k of ['L0', 'L1', 'L2', 'L3', 'L4']) {
    if (!layers[k]) continue;
    targets.push({ layer: k, entry: layers[k] });

    if (k === 'L4') {
      const events = parseTimeline(layers[k]);
      if (events) {
        for (const ev of events) {
          targets.push({ layer: 'event', entry: ev });
        }
      }
    }
  }

  console.log(`▶ ${topicId} (${topicTitle}) — ${targets.length} entries`);

  let count = 0, hits = 0, errors = 0;
  const system = '你是 13 岁中国 ESL 学生 Willow 的历史课伙伴。她会读你的解读，所以语气要像朋友，不能像教科书。';

  for (const t of targets) {
    const cacheKey = buildCacheKey({ topicId, layer: t.layer, grade, entry: t.entry });

    // 已有缓存就跳过
    const existing = await cacheGet(cacheKey);
    if (existing) {
      hits++;
      continue;
    }

    if (DRY_RUN) {
      console.log(`  [dry] ${t.layer}: ${t.entry.slice(0, 40)}...`);
      count++;
      continue;
    }

    try {
      const userPrompt = buildPrompt({ topicId, topicTitle, layer: t.layer, entry: t.entry, grade });
      const explanation = await callDeepSeek({ system, message: userPrompt });
      await cacheSet(cacheKey, explanation);
      count++;
      console.log(`  ✓ ${t.layer}: ${t.entry.slice(0, 30)}... → ${explanation.slice(0, 50)}...`);
      // pacing — DeepSeek 60 RPM 单 key，留余量
      await sleep(1100);
    } catch (e) {
      errors++;
      console.error(`  ✗ ${t.layer}: ${t.entry.slice(0, 30)}... ${e.message}`);
    }
  }

  return { topicId, count, hits, errors };
}

async function main() {
  console.log('🌱 Seed Causal Explanations');
  console.log(`   Mode: ${DRY_RUN ? 'DRY-RUN (no writes)' : 'LIVE'}`);
  console.log(`   Filter: ${SINGLE_TOPIC || 'all topics'}`);
  console.log('');

  const files = fs.readdirSync(VIEWS_DIR).filter(f => f.endsWith('.js'));
  let viewFiles = files;
  if (SINGLE_TOPIC) {
    viewFiles = files.filter(f => path.basename(f, '.js') === SINGLE_TOPIC);
    if (viewFiles.length === 0) {
      console.error(`❌ Topic "${SINGLE_TOPIC}" not found in ${VIEWS_DIR}`);
      process.exit(1);
    }
  }

  const allStats = [];
  for (const f of viewFiles) {
    try {
      const view = await loadView(path.join(VIEWS_DIR, f));
      if (!view) {
        console.log(`⏭  ${f}: no VIEW export`);
        continue;
      }
      const stats = await processView(view, f);
      allStats.push(stats);
    } catch (e) {
      console.error(`❌ ${f}: ${e.message}`);
    }
  }

  // 汇总
  console.log('');
  console.log('══════════════════════════════════════════════════');
  const totalGen = allStats.reduce((s, x) => s + x.count, 0);
  const totalHits = allStats.reduce((s, x) => s + x.hits, 0);
  const totalErr = allStats.reduce((s, x) => s + x.errors, 0);
  const estCost = (totalGen * 0.0003).toFixed(4);
  console.log(`Topics processed: ${allStats.length}`);
  console.log(`Generated: ${totalGen} (cache miss → DeepSeek call)`);
  console.log(`Already cached: ${totalHits} (hit, skipped)`);
  console.log(`Errors: ${totalErr}`);
  console.log(`Estimated cost: ~$${estCost} USD`);
  console.log('══════════════════════════════════════════════════');
}

main().catch((e) => {
  console.error('❌ Fatal:', e);
  process.exit(1);
});
