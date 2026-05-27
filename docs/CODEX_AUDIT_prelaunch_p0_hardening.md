# Codex 审计：推广前 P0 UX 加固（限流 + Sentry + 429 toast + 健康探针）

## 背景
[docs/PRE_LAUNCH_UX_HARDENING.md](./PRE_LAUNCH_UX_HARDENING.md) 列了 4 件 P0「推广前必做」。本次一次性落地 + 走 Codex。**核心原则：不碰用户历史数据**（创始人 directive）。所有改动只在限流配置、API header、客户端 toast、新增独立 cron 端点。零 DB 写入、零用户 progress 读取。

分支 `prelaunch-p0-hardening`，1 个 feat commit `c69c3fe`（+ 本审计文档）。

---

## P0-3 — 限流阈值复检 + admin 白名单

### 改动
[lib/ratelimit.js](../lib/ratelimit.js)：
- `checkPerUserLimit`：200/min → **300/min**（重度学习实测贴边——一个 5 词 batch ~25 次 /api/chat，多设备同时学/快速翻词时 chompcloud 实测打过 200）。
- `checkPerIpLimit`：100/h → **300/h**（100/h 对家庭/学校共享 NAT 5 口共享过紧，新用户首次体验半小时即烧光；同时 user-level 不动 IP 路径，所以正常登录用户不受影响）。
- 新增 `isAdminUser(userId)`：读 `ADMIN_UIDS` env（逗号分隔的 user.id 列表），返回 bool。

[pages/api/chat.js](../pages/api/chat.js)、[pages/api/chat-stream.js](../pages/api/chat-stream.js)：
- rate limit 检查前加 admin bypass：
  ```js
  if (!isBYO) {
    const userId = req.headers[...]("x-user-id");
    const isAdmin = userId && isAdminUser(userId);
    if (!isAdmin) {
      // ... 原 rate limit 逻辑
    }
  }
  ```
- `isAdminUser` **只 bypass 限流，不绕开任何认证/守卫**；env 未配（默认）→ 全部走正常限流（无副作用）。

### 请验证
- (a) 阈值数字合理性：300/min user + 300/h IP 对推广首波是否充裕？还是该更激进/更保守？
- (b) `isAdminUser` 安全性：只 bypass rate limit、不影响 X-User-Id 软认证下游、不绕开 BYO 检测、env 未配时 100% no-op。
- (c) 改动是否完整覆盖两条限流路径（chat.js + chat-stream.js）。有没有其它 endpoint 走 rate limit 我漏改？

---

## P0-2 — Sentry 告警通道（silent → loud）

### 改动
[pages/api/chat.js](../pages/api/chat.js) + [pages/api/chat-stream.js](../pages/api/chat-stream.js)：429 命中时除原有 `console.warn` 外，新增：
```js
Sentry.captureMessage("rate_limited:/api/chat", {
  level: "warning",
  tags: { route, limitType: userId ? "user" : "ip", hasUid: !!userId },
  extra: meta,
});
```
- Sentry **挂了不影响响应**（外层 try/catch 兜底）。
- tags 设计为 alert rule 友好：可在 Sentry UI 配「5 分钟内 `rate_limited:*` 事件 > 30 → 告警」。
- console.warn 保留，**双通道**，避免 Sentry 单点。

### 请验证
- (a) Sentry SDK 在 Edge runtime（chat-stream.js）和 Node runtime（chat.js）两边都能正常 `captureMessage`？项目 `@sentry/nextjs` 已配，但 Edge runtime 历史上有兼容性细节，请确认。
- (b) tags 选型够不够？是否还该加 `route` 之外的维度（如 `model` / `provider`）？
- (c) 是否会产生过多 Sentry events 把额度打爆？目前每个 429 一条 event，alert 频率可控。如认为风险，建议改成 fingerprint 聚合或降到 breadcrumb-only。

---

## P0-1 — 客户端 429 toast（silent retry → 显式提示）

### 改动
[lib/api.js](../lib/api.js)：
- 新增 `RateLimitError` class（`isRateLimit: true`, `status: 429`），可被调用方按错误类型识别。
- 新增 `dispatchRateLimited(route)` 工具：`window.dispatchEvent(new CustomEvent('knowu:rate-limited', { detail: { route, ts } }))`。SSR / 老浏览器无 CustomEvent → 安全降级 no-op。
- `callAPI` / `callAPIFast`：收到 response.status === 429 → dispatch + throw RateLimitError。
- `callAPIStream`：流式响应 status === 429 → dispatch + throw RateLimitError（之前是 silent fallback 到 callAPI，现在显式抛错让 UI 提示）。

[pages/vocab.js](../pages/vocab.js)：
- 新 state `rateLimitToast`。
- 新 useEffect 监听 `knowu:rate-limited` 事件：5 秒节流（batch 内多个并发 429 不连发 toast），8 秒自动消失。
- 顶部金色 toast 文案：「⏳ 服务繁忙，正在排队…大约 30 秒后自动恢复（或在设置里用自己的 API key 立刻继续）」。
  - 复用已有的 `feedbackToast` 样式（同位置语义、固定定位、`zIndex: 1004` 略高于 feedback 1003 避免重叠）。

### 请验证
- (a) `callAPIStream` 抛错的语义变化：之前是 disable streaming + fallback to callAPI（callAPI 自己再 429 → throw RateLimitError）；现在直接 throw 跳过 fallback。是否会让其它依赖"流式优雅降级到非流式"的路径出问题？我的判断：429 时降级到非流式也会立刻被同一 limit 拒，没救，直接告诉用户排队更诚实。请复核。
- (b) `RateLimitError` 是新 export class，不影响向后兼容（旧调用方 `catch(e) { ... e.message }` 仍可读到「请求过于频繁…」）。确认。
- (c) Toast 节流 5s + 自动消失 8s 的取值是否合适？短了用户没看清，长了挡 UI。
- (d) 只在 vocab.js 接监听，其它页面（writing/history）也调 /api/chat，无 toast。是否要把 listener 提到 _app.js / 全局组件？我倾向先 vocab.js（最大用户面），其它页面后续扩展，但请判断。

---

## P0-4 — Synthetic 健康探针

### 改动
新增 [pages/api/cron/health-probe.js](../pages/api/cron/health-probe.js)：
- Cron 调 `callLLM`（lib/llm-providers.js）一个 8-token prompt（system: "respond with exactly the word: ok"），量化"AI 链路当前是否健康"。
- 慢（latency > 8000ms）→ `Sentry.captureMessage` level=warning。
- 失败（throw）→ `Sentry.captureMessage` level=error。
- CRON_SECRET 鉴权（env 未配 → 本地放行）。
- 返回 `{outcome, provider, latencyMs, ts}`。

[vercel.json](../vercel.json)：加 cron 条目 `*/30 * * * *`。

### **严格只读 / 零数据风险**
- ❌ 不读 `user_progress` / `user_progress_history` 任何表。
- ❌ 不写任何 DB。
- ❌ 不模拟用户登录、不调 Supabase auth。
- ✅ 直接调 `callLLM`（lib/llm-providers.js），**绕过 /api/chat 的 rate limit**（探针不应占用真实用户的限额）。
- ✅ 探针打 provider 的成本：48 次/天 × ~10 token 输入 + 几 token 输出 = 可忽略。

### 请验证
- (a) **数据隔离严密性**：confirm 整条调用链（health-probe.js → callLLM → provider HTTP）完全不接触 user_progress 任何表，不持任何用户 token。
- (b) `callLLM` 直调绕过 /api/chat rate limit 是有意为之（探针不该占用真实配额），但意味着即使我们的 rate limit 全炸，探针仍能通——这正是我要的（探针测的是 provider 层）。请确认这个分工合理。
- (c) cron 30 分钟节奏：太频用 provider 钱、太稀延迟发现退化。30 min 是 P95 用户能容忍的最大"潜伏退化"窗口；可接受？
- (d) Latency 阈值 8 秒：超过这个值用户已经开始觉得卡。判断合理？

---

## 没碰的东西
- 同步合并逻辑（lib/progressMergePolicy.js / lib/syncMerge.js）：完全不动。
- 用户进度数据（user_progress / user_progress_history）：完全不读不写。
- Auth 流程（vocab.js handleAuthUser / supabase.auth）：不改。
- BYO 路径：不动（继续完全绕过 rate limit + Sentry）。
- 服务端 sync 守卫（applyProgressGuards / planSyncOutcome）：不改。

## 测试
- `npm run build`：通过。
- 全部回归测试绿：
  - `test-progress-merge-policy`：97/97
  - `test-sync-api`：14/14
  - `test-learn-status`：28/28
  - `test-guess-sanitize`：21/21
  - `test-get-auth-userid`：14/14
  - `verify-sync-realdata`：11/11
- 新行为靠代码审查 + 部署后实测：
  - 429 toast：本地难复现 429，部署后让 chompcloud 或测试号高频学一阵看 toast 是否弹。
  - Sentry 告警：部署后看 Sentry 是否收到 `rate_limited:*` events。
  - 健康探针：部署后第 1 次 cron 触发（30 分钟内）应能看到 Sentry 收到 `health_probe:*` 事件（如果失败/慢）或 Vercel logs 看到 `[health-probe]` 行。

## 范围
分支 `prelaunch-p0-hardening`，相对 origin/main 7 个文件 + 本文档：
- `lib/ratelimit.js`（改：阈值 + isAdminUser）
- `pages/api/chat.js`（改：admin bypass + Sentry）
- `pages/api/chat-stream.js`（改：admin bypass + Sentry）
- `lib/api.js`（改：RateLimitError + dispatchRateLimited）
- `pages/vocab.js`（改：rateLimitToast state + listener + render）
- `pages/api/cron/health-probe.js`（新建）
- `vercel.json`（改：加 cron）

## 请给结论
4 个 P0 各自 go/no-go（重点 #P0-3 阈值合理性、#P0-1 streaming 抛错语义变化、#P0-4 数据隔离严密性）+ 整体合并部署 go/no-go。
