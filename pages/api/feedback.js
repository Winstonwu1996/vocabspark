// ─── 用户对 AI 输出内容的反馈（E1: 教育质量信号）─────────────────────────────
//
// 用户在 teach/guess/spectrum 页可一键标记"内容不对/不合适/无关"。
// MVP 阶段：只写到 console.log（你可以从 Vercel logs 翻看），
// 后续推广前如有需要再接 Supabase 表（schema 见下方注释）。
//
// 不依赖登录（游客也可反馈）；带可选 user_id 时用于关联用户。
// 加入 IP rate limit（10/小时）防滥用 — 反馈不应被刷。
//
// SUPABASE 表（推广前如要持久化，用户去 SQL editor 跑）：
//
//   CREATE TABLE content_feedback (
//     id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
//     user_id uuid NULL REFERENCES auth.users(id) ON DELETE SET NULL,
//     word text NOT NULL,
//     content_type text NOT NULL,  -- "teach" | "guess" | "spectrum" | "review" | "cloze"
//     content_snapshot text,
//     reason_category text,        -- "wrong" | "inappropriate" | "off_topic" | "language" | "other"
//     reason_detail text,
//     ip_hash text,
//     created_at timestamptz DEFAULT now()
//   );
//   CREATE INDEX idx_feedback_word ON content_feedback(word);
//   CREATE INDEX idx_feedback_created_at ON content_feedback(created_at DESC);
//
// 表存在时本端点会自动写；不存在则只 console.log。
// ──────────────────────────────────────────────────────────────────────────────

import { createClient } from "@supabase/supabase-js";
import { checkRateLimit } from "../../lib/ratelimit";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

const VALID_CONTENT_TYPES = new Set(["teach", "guess", "spectrum", "review", "cloze"]);
const VALID_REASONS = new Set(["wrong", "inappropriate", "off_topic", "language", "other"]);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.headers["x-real-ip"] ||
    "unknown";

  // rate limit：每 IP 每小时最多 10 次反馈，防止刷
  const rl = await checkRateLimit(`feedback:${ip}`, 10, 60 * 60 * 1000);
  if (!rl.allowed) {
    return res.status(429).json({ error: "反馈过于频繁，请稍后再试" });
  }

  const { userId, word, contentType, contentSnapshot, reasonCategory, reasonDetail } = req.body || {};

  // 基本校验（仅必填字段，避免脏数据进库）
  if (!word || typeof word !== "string" || word.length > 100) {
    return res.status(400).json({ error: "word 字段无效" });
  }
  if (!contentType || !VALID_CONTENT_TYPES.has(contentType)) {
    return res.status(400).json({ error: "contentType 字段无效" });
  }

  // 截断超长字段
  const safeSnapshot = (contentSnapshot || "").slice(0, 4000);
  const safeReason = reasonCategory && VALID_REASONS.has(reasonCategory) ? reasonCategory : "other";
  const safeDetail = (reasonDetail || "").slice(0, 500);

  // IP 哈希（不存原始 IP，只存匿名标识方便聚合）
  const ipHash = await sha256Hex(ip + "::knowu_feedback");

  // 控制台日志（recoverable 即便 DB 失败）
  console.log("[feedback]", {
    userId: userId || null,
    word,
    contentType,
    reasonCategory: safeReason,
    snapshotLen: safeSnapshot.length,
    detailLen: safeDetail.length,
    ipHash: ipHash.slice(0, 12),
    ts: new Date().toISOString(),
  });

  // 尝试写入 Supabase（表不存在则 graceful 失败）
  try {
    const { error } = await supabase.from("content_feedback").insert({
      user_id: userId || null,
      word,
      content_type: contentType,
      content_snapshot: safeSnapshot,
      reason_category: safeReason,
      reason_detail: safeDetail,
      ip_hash: ipHash,
    });
    if (error) {
      // 表不存在或权限错误 — 不影响用户体验，console 留痕即可
      console.warn("[feedback] supabase insert failed:", error.message);
    }
  } catch (e) {
    console.warn("[feedback] supabase exception:", e.message);
  }

  return res.status(200).json({ ok: true });
}

async function sha256Hex(input) {
  // Node Runtime 自带 crypto.subtle（Node 15+）
  const enc = new TextEncoder().encode(input);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
