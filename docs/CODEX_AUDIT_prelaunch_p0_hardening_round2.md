# Codex 复看 Round 2：推广前 P0 UX 加固 — 落实三处 Conditional GO 修

## 背景
你上一轮 Conditional GO，三处需要修：(1) admin bypass 在 X-User-Id 软认证下不安全、(2) `CRON_SECRET` prod 必须强制、(3) `callAPIStream` 429 被外层 catch 吞 + `callWithClientRetry` 不该重试 429。
全部已修，请确认 + 重新 go/no-go。分支 `prelaunch-p0-hardening`（多一个 fix commit `74067c9`）。

---

## 修 #1：移除 `isAdminUser` / `ADMIN_UIDS` 整套白名单

[lib/ratelimit.js](../lib/ratelimit.js)：删除 `isAdminUser` 函数（保留注释说明为什么删 + 长期方案）。
[pages/api/chat.js](../pages/api/chat.js) + [pages/api/chat-stream.js](../pages/api/chat-stream.js)：
- 删 `isAdminUser` import。
- 删 admin bypass 分支：`if (!isAdmin) { ... }` 整个外层 if 拆掉，rate limit 逻辑回到 BYO → user → IP 三段。

**决策理由**：X-User-Id 是软认证，伪造一个 admin UID 就能绕过限流；保留代码会引诱后续误配。**高频需求由 BYO API key 兜底**——用户/创始人配自己 DeepSeek key，`isBYO` 路径已直接跳过 rate limit（且 provider 计费走用户自己账户）。长期方案：等 `lib/auth-server.js` 加 `verifyBearerToken` 后，再以"先验 token 再查白名单"重启 admin bypass，本次不做。

**请验证**：
- (a) admin bypass 代码完全清零，不残留任何分支（chat.js + chat-stream.js + ratelimit.js）。
- (b) BYO 路径保持原样（`isBYO` 检查在 rate limit 之前），创始人/客服测试可走 BYO。

---

## 修 #2：`CRON_SECRET` 生产环境强制配置

[pages/api/cron/health-probe.js](../pages/api/cron/health-probe.js)：
```js
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
```
- prod 漏配 → 503（不再公开放行）+ error log 让 Sentry 抓到。
- 非 prod (preview / local / 本地 `npm run dev`) 保留可选，便于冒烟测试。

**请验证**：
- (a) `VERCEL_ENV === "production"` 是检测 prod 的正确字段（Vercel doc 确认）。
- (b) 503 + console.error 是合理的失败模式（不会变成攻击信号面，也能被 Sentry 通过 unhandled error 捕获）。

---

## 修 #3：429 在 streaming/retry 路径穿透到 UI

[lib/api.js](../lib/api.js) 两处：

### `callAPIStream` 外层 catch 不再吞 `RateLimitError`
```js
} catch (err) {
  // 429 必须穿透：否则被 disableAndFallback → callAPI 二次撞同 limit,
  // UI 拿不到限流提示
  if (err && err.isRateLimit) {
    recordStat("ratelimited");
    throw err;
  }
  return disableAndFallback((err && err.message) || "unknown");
}
```

### `callWithClientRetry` 不重试 429
```js
return fn().catch(function(err) {
  // 429 不重试——重试只会撞同一个限流窗口，徒增延迟还把 toast 顺序搞乱。直接穿透给 UI。
  if (err && err.isRateLimit) throw err;
  if (maxRetries > 0) { ... }
  throw err;
});
```

**请验证**：
- (a) 流式 429：现在 `RateLimitError` 一路穿过 `callAPIStream` outer catch → `callWithClientRetry` → 上层调用方（loadBatch / cloze prefetch 等）。UI 顶部 toast 监听 `'knowu:rate-limited'` 事件能立刻弹（事件在 throw 之前已 dispatch）。
- (b) `callWithClientRetry` 跳过 429 不影响其他错误的 1500ms 延迟重试（网络抖动、provider 5xx 仍按原逻辑）。

---

## 你上轮已 GO 的项（未改动，供回归确认）
- P0-3 阈值 300/min user + 300/h IP：保留。
- P0-2 Sentry `captureMessage` 双通道：保留（外层 try/catch 兜底；event 量风险留 backlog 做采样/聚合）。
- P0-1 toast 监听 + 节流 5s + 自动消失 8s：保留。
- P0-4 探针 30 分钟 cron + 8s 慢阈值 + 直调 `callLLM` 绕过 /api/chat rate limit：保留（仅加 prod 强制 CRON_SECRET）。

## 测试
- `npm run build`：通过。
- 回归：merge-policy 97/97、sync-api 14/14、learn-status 28/28、guess-sanitize 21/21、auth-userid 14/14、realdata 11/11。

## 范围
分支 `prelaunch-p0-hardening`，相对 origin/main 7 个文件 + 2 个 audit doc：
- Round 1 (`c69c3fe`)：原 P0 4 件。
- Round 1 docs (`000de38`)：Round 1 prompt。
- Round 2 (`74067c9`)：本次三处修。
- 本文档 round2 prompt（即将 commit）。

## 请给结论
三处修是否落实到位 + 整体部署 go/no-go。
