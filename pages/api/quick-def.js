// 快筛专用「短释义」服务：DeepSeek 出词典级中文核心释义 + Upstash 缓存。
// 替代原来的免费 MyMemory 机器翻译（大列表快筛下配额耗尽/翻译记忆错配 → 回垃圾）。
// 每个词全网只算一次（缓存 90 天、跨用户共享），成本几乎为零。
// fail-open：任何一环挂了都返 {zh:""}，快筛没释义也能继续（只看英文词判断）。
import { checkPerIpLimit, checkPerUserLimit } from "../../lib/ratelimit";
import { getCached, setCached } from "../../lib/teachCache";
import { callLLM } from "../../lib/llm-providers";
import * as Sentry from "@sentry/nextjs";

export const config = { maxDuration: 15 };

const CACHE_PREFIX = "qd-v1:";
const CACHE_TTL_SEC = 90 * 24 * 60 * 60; // 90 天

// 只接受合理的英文词/短语，挡掉注入和奇怪输入
function normalizeWord(raw) {
  const w = String(raw || "").trim().toLowerCase();
  if (!w || w.length > 40) return "";
  if (!/^[a-z][a-z '\-.]*$/.test(w)) return "";
  return w;
}

// 收敛 LLM 输出为干净短释义。
// 模型常在括号里回显英文/拼音（如「共识 (consensus)」），要【剥掉】而不是【判废】——
// 否则 consensus/benevolent 这类词会被整条丢掉返空。剥完仍无中文才判废。
function sanitizeGloss(text) {
  if (!text) return "";
  let t = String(text).trim().split(/\r?\n/)[0].trim();
  t = t.replace(/[（(][^）)]*[）)]/g, "");            // 去括号及其内容（多是英文回显/拼音）
  t = t.replace(/[a-zA-Z]{2,}/g, "");                // 去残留英文串
  t = t.replace(/^[\s"'「『·,，、;；:：\-]+/, "").replace(/[\s"'」』.。,，、;；:：\-]+$/, "").trim();
  if (!/[一-鿿]/.test(t)) return "";                 // 剥完仍无中日韩表意字 → 判废
  if (t.length > 14) t = t.slice(0, 14);
  return t;
}

export default async function handler(req, res) {
  const word = normalizeWord(req.query?.word ?? req.body?.word);
  if (!word) { res.status(400).json({ zh: "" }); return; }

  // ─── Rate Limit（登录用户 user 级 / 游客 IP 级；fail-open，不阻塞快筛）───
  try {
    const userId = req.headers["x-user-id"];
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.headers["x-real-ip"] ||
      "unknown";
    const rl = (userId && typeof userId === "string" && userId.length > 0)
      ? await checkPerUserLimit(userId)
      : await checkPerIpLimit(ip);
    if (rl && rl.allowed === false) { res.status(429).json({ zh: "" }); return; }
  } catch (e) { /* fail-open */ }

  const cacheKey = CACHE_PREFIX + word;

  // 命中缓存直接返
  try {
    const cached = await getCached(cacheKey);
    if (cached != null && cached !== "") { res.status(200).json({ zh: cached, cached: true }); return; }
  } catch (e) { /* 缓存挂了走 LLM */ }

  // LLM 出释义
  try {
    const { text } = await callLLM({
      system: "你是精准的英中词典。只输出该英文单词最核心的中文释义，不超过 8 个汉字，可用「/」分隔并列义。不要拼音、不要英文、不要例句、不要任何解释或多余标点。",
      message: word,
      maxTokens: 24,
      timeoutMs: 8000,
      temperature: 0,
    });
    const zh = sanitizeGloss(text);
    if (zh) { setCached(cacheKey, zh, CACHE_TTL_SEC).catch(() => {}); } // 只缓存有效释义
    res.status(200).json({ zh });
  } catch (err) {
    try { Sentry.captureException(err, { tags: { route: "/api/quick-def" } }); } catch (e) {}
    res.status(200).json({ zh: "" });
  }
}
