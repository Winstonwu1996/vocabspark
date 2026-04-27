// ─── /api/causal-explain ───────────────────────────────────────────
// 单条因果链条目的 AI 解读（5 层因果摘要里的某一行）
//
// 输入：{ topicId, layer, entry, grade, lang }
// 输出：{ explanation: string, cached: boolean }
//
// 设计：
//   - 全局共享缓存（按 topicId + layer + grade + entry hash），不绑用户
//   - 80%+ 命中率（条目+年级是有限组合）→ 月成本 < $5
//   - DeepSeek-V3，input ~400 / output ~200 tokens, ~$0.0003/次 cache miss
//   - 缓存 miss 时也 graceful：Upstash 挂了不阻塞，照样调 DeepSeek

import { checkPerIpLimit } from "../../lib/ratelimit";
import { buildCacheKey, cacheGet, cacheSet } from "../../lib/causal-cache";

export const config = {
  maxDuration: 30,
};

const LAYER_NAMES = {
  L0: { cn: "地理", en: "Geography" },
  L1: { cn: "气候", en: "Climate" },
  L2: { cn: "民生", en: "Society" },
  L3: { cn: "制度", en: "Institutions" },
  L4: { cn: "事件", en: "Events" },
  geography: { cn: "地理", en: "Geography" },
  climate: { cn: "气候", en: "Climate" },
  society: { cn: "民生", en: "Society" },
  institution: { cn: "制度", en: "Institutions" },
  event: { cn: "事件", en: "Events" },
};

function buildPrompt({ topicId, topicTitle, layer, entry, grade, lang }) {
  const layerName = (LAYER_NAMES[layer] && LAYER_NAMES[layer][lang]) || layer;
  const isCn = lang === "cn";
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
  ].join("\n");
}

async function callDeepSeek({ system, message, maxTokens = 400 }) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) throw new Error("DEEPSEEK_API_KEY not set");

  const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: system },
        { role: "user", content: message },
      ],
      max_tokens: maxTokens,
      temperature: 0.6,  // 教学解读不需要太发散
    }),
    signal: AbortSignal.timeout(25000),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`deepseek ${res.status}: ${errText.slice(0, 200)}`);
  }

  const json = await res.json();
  const text = json?.choices?.[0]?.message?.content;
  if (!text) throw new Error("deepseek empty response");
  return text.trim();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "method not allowed" });
  }

  // ── Rate limit（per IP，复用现有 50 次/天 配额） ──
  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim()
    || req.socket?.remoteAddress
    || "unknown";
  try {
    const rl = await checkPerIpLimit(ip);
    if (!rl.allowed) {
      return res.status(429).json({ error: "rate_limit", remaining: 0 });
    }
  } catch (_) { /* fail open */ }

  // ── 验入参 ──
  const { topicId, topicTitle, layer, entry, grade, lang } = req.body || {};
  if (!topicId || !layer || !entry) {
    return res.status(400).json({ error: "missing topicId / layer / entry" });
  }

  const normalizedLang = (lang === "en") ? "en" : "cn";
  const normalizedGrade = (grade && Number(grade) >= 5 && Number(grade) <= 12) ? Number(grade) : 7;

  // ── 1. 查全局缓存 ──
  const cacheKey = buildCacheKey({ topicId, layer, grade: normalizedGrade, entry });
  const cached = await cacheGet(cacheKey);
  if (cached) {
    return res.status(200).json({ explanation: cached, cached: true });
  }

  // ── 2. miss → 调 DeepSeek ──
  const system = "你是 13 岁中国 ESL 学生 Willow 的历史课伙伴。她会读你的解读，所以语气要像朋友，不能像教科书。";
  const userPrompt = buildPrompt({ topicId, topicTitle, layer, entry, grade: normalizedGrade, lang: normalizedLang });

  let explanation;
  try {
    explanation = await callDeepSeek({ system, message: userPrompt, maxTokens: 300 });
  } catch (err) {
    console.warn("[causal-explain] deepseek call failed:", err.message);
    return res.status(502).json({ error: "ai_provider_error", detail: err.message });
  }

  // ── 3. 写回缓存 + 返回 ──
  cacheSet(cacheKey, explanation).catch(() => {});  // fire-and-forget
  return res.status(200).json({ explanation, cached: false });
}
