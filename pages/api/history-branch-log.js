// ─── History 自由追问日志（Gate3 §8 part-2 · observability）──────────────────────
//
// 记录 Sidekick（追问浮窗）里用户的自由追问 + DeepSeek 的回答，
// 用来发现 DeepSeek 最常跑偏 / 最常被问到课件外的点（§8: "branch 追问日志"）。
// 这不保护内容（那是 §8 part-1 回答分级做的），这是给创始人复盘用的观测数据。
//
// MVP：始终 console.log（Vercel logs 可翻）；表存在时写 Supabase，不存在则 graceful 跳过。
// 不阻塞对话：history.js 里 fire-and-forget 调用，失败静默。
// 不依赖登录（游客也记）；带可选 user_id。IP 哈希后存（不存原始 IP）。
//
// SUPABASE 表（要持久化时在 SQL editor 跑）：
//
//   CREATE TABLE history_branch_log (
//     id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
//     user_id uuid NULL REFERENCES auth.users(id) ON DELETE SET NULL,
//     topic_id text NOT NULL,
//     lens_id text,
//     turn_index int,
//     question text NOT NULL,
//     answer text,
//     caution_flagged boolean DEFAULT false,  -- 回答里是否带了"超出材料/不确定/有争议"的谨慎声明（§8 启发式）
//     ip_hash text,
//     created_at timestamptz DEFAULT now()
//   );
//   CREATE INDEX idx_branchlog_topic ON history_branch_log(topic_id);
//   CREATE INDEX idx_branchlog_caution ON history_branch_log(caution_flagged);
//   CREATE INDEX idx_branchlog_created_at ON history_branch_log(created_at DESC);
//
// 表存在时本端点会自动写；不存在则只 console.log。
// ──────────────────────────────────────────────────────────────────────────────

import { createClient } from "@supabase/supabase-js";
import { checkRateLimit } from "../../lib/ratelimit";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

// §8 启发式：回答里出现这些"谨慎声明"标记 → 标记为 caution_flagged，方便创始人筛"被问到课件外"的追问
var CAUTION_MARKERS = ["超出", "不太确定", "不确定", "不同说法", "有争议", "谨慎", "beyond", "not sure", "uncertain", "debate"];

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.headers["x-real-ip"] ||
    "unknown";

  // rate limit：每 IP 每小时最多 80 次（追问比反馈频繁，但仍防刷）
  const rl = await checkRateLimit(`branchlog:${ip}`, 80, 60 * 60 * 1000);
  if (!rl.allowed) {
    return res.status(429).json({ error: "too frequent" });
  }

  const { userId, topicId, lensId, turnIndex, question, answer } = req.body || {};

  // 基本校验
  if (!topicId || typeof topicId !== "string" || topicId.length > 100) {
    return res.status(400).json({ error: "topicId 无效" });
  }
  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "question 无效" });
  }

  const safeQuestion = question.slice(0, 1000);
  const safeAnswer = (answer || "").slice(0, 2000);
  const safeLens = (lensId || "").slice(0, 80) || null;
  const safeTurn = Number.isFinite(turnIndex) ? Math.trunc(turnIndex) : null;
  const cautionFlagged = CAUTION_MARKERS.some(function (m) { return safeAnswer.indexOf(m) !== -1; });

  const ipHash = await sha256Hex(ip + "::knowu_branchlog");

  // 控制台日志（即便没建表也能从 Vercel logs 复盘）
  console.log("[branchlog]", {
    userId: userId || null,
    topicId,
    lensId: safeLens,
    turnIndex: safeTurn,
    qLen: safeQuestion.length,
    aLen: safeAnswer.length,
    cautionFlagged,
    ipHash: ipHash.slice(0, 12),
    ts: new Date().toISOString(),
  });

  // 尝试写 Supabase（表不存在则 graceful 跳过，不影响对话）
  try {
    const { error } = await supabase.from("history_branch_log").insert({
      user_id: userId || null,
      topic_id: topicId,
      lens_id: safeLens,
      turn_index: safeTurn,
      question: safeQuestion,
      answer: safeAnswer,
      caution_flagged: cautionFlagged,
      ip_hash: ipHash,
    });
    if (error) {
      console.warn("[branchlog] supabase insert failed:", error.message);
    }
  } catch (e) {
    console.warn("[branchlog] supabase exception:", e.message);
  }

  return res.status(200).json({ ok: true });
}

async function sha256Hex(input) {
  const enc = new TextEncoder().encode(input);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
