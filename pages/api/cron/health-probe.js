/* P0-4: Synthetic 健康探针 — 推广前 silent degradation 防御。
 *
 * 跑啥：每 30 分钟一次调 callLLM 一个最小 prompt，量化"AI 链路当前是否健康"。
 *   - 通：日志记录 ok + 哪个 provider + 延迟。
 *   - 慢：> 8 秒 → Sentry warning（用户感知阈值，超过用户已经开始觉得卡）。
 *   - 挂：抛错 → Sentry error（必报警）。
 *
 * 严格只读 / 不碰用户数据：
 *   - 不读 user_progress / user_progress_history 任何表。
 *   - 不写任何 DB。
 *   - 不模拟用户登录（用 CRON_SECRET 自鉴权）。
 *   - 直接调 lib/llm-providers.callLLM，绕过我们自己的 /api/chat rate limit
 *     （探针不应该占用真实用户的限额）。
 *
 * 触发：Vercel Cron（见 vercel.json）。亦可手工 GET 调用做冒烟测试，但需带
 *   Authorization: Bearer <CRON_SECRET>。CRON_SECRET 未配 → 接受任何调用（local dev）。
 */
import * as Sentry from "@sentry/nextjs";
import { callLLM } from "../../../lib/llm-providers";

export const config = { maxDuration: 30 };

// 用户能容忍的"loading"上限——超过这个就算"慢得有问题"
const LATENCY_WARN_MS = 8000;

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // 鉴权：CRON_SECRET 配了就强校验，没配（本地/preview）放行
  const expected = process.env.CRON_SECRET;
  if (expected) {
    const auth = req.headers["authorization"] || req.headers["Authorization"];
    if (auth !== `Bearer ${expected}`) {
      return res.status(401).json({ error: "unauthorized" });
    }
  }

  const startedAt = Date.now();
  let outcome = "unknown";
  let provider = null;
  let errMsg = null;

  try {
    const result = await callLLM({
      system: "You are a health probe. Respond with exactly the word: ok",
      message: "probe",
      maxTokens: 8,
      timeoutMs: 15000,
    });
    provider = result.provider;
    const text = (result.text || "").trim().toLowerCase();
    outcome = text.indexOf("ok") >= 0 ? "ok" : "unexpected_text";
  } catch (e) {
    outcome = "failed";
    errMsg = (e && e.message) || String(e);
  }

  const latencyMs = Date.now() - startedAt;
  const payload = {
    outcome,
    provider,
    latencyMs,
    ts: new Date().toISOString(),
  };
  if (errMsg) payload.error = errMsg.slice(0, 300);

  // Sentry 告警：失败必报、慢 warn
  if (outcome === "failed") {
    try {
      Sentry.captureMessage("health_probe:failed", {
        level: "error",
        tags: { probe: "llm", provider: provider || "none" },
        extra: payload,
      });
    } catch (e) { /* Sentry 挂了不影响 cron 退出 */ }
  } else if (latencyMs > LATENCY_WARN_MS) {
    try {
      Sentry.captureMessage("health_probe:slow", {
        level: "warning",
        tags: { probe: "llm", provider: provider || "unknown" },
        extra: payload,
      });
    } catch (e) {}
  }

  console.log("[health-probe]", JSON.stringify(payload));
  return res.status(outcome === "failed" ? 500 : 200).json(payload);
}
