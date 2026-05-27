/* P0-4: Synthetic 健康探针 — 推广前 silent degradation 防御。
 *
 * 跑啥：每天一次（Hobby plan cron 限制）调 callLLM 一个最小 prompt，量化"AI 链路当前是否健康"。
 *   - 通：日志记录 ok + 哪个 provider + 延迟。
 *   - 慢：> 8 秒 → Sentry warning（用户感知阈值，超过用户已经开始觉得卡）。
 *   - 挂：抛错 → Sentry error（必报警）。
 *   - ⚠️ 升 Pro plan 后把 schedule 改成每 30 分钟（"星号 / 30 星号 星号 星号 星号"）：
 *     daily 探针潜伏窗口太长，
 *     真上量后该频率应该提高。也可在 Sentry / 第三方 uptime 服务（UptimeRobot 免费层）
 *     里另配一个 5 分钟 ping 这个 endpoint，无 plan 限制。
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

  // 鉴权：生产环境必须配 CRON_SECRET（Codex 复审：探针绕过 rate limit 直调 LLM,
  //   prod 公开放行 = 公开烧 token 端点）。
  // 非 prod（开发/preview/local）：可选——便于本地冒烟。
  const expected = process.env.CRON_SECRET;
  const isProd = process.env.VERCEL_ENV === "production";
  if (isProd && !expected) {
    console.error("[health-probe] FATAL: CRON_SECRET not configured in production — probe disabled");
    return res.status(503).json({ error: "probe disabled: CRON_SECRET not configured" });
  }
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
