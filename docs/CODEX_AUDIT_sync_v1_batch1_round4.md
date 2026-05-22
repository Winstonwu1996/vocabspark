# Codex 复看 Round 4：第一批补强 — 集成测试 + 真实数据发现的 recency 缺陷

## 背景
第一批已 Codex 三审 Go 并合并 `main`（commit `8a592c6`，已部署）。随后按要求补测试（sync API 集成测试 + 真实数据验证）。**真实数据测试抓到一个缺陷**（你 Round 2 P2 警告过的真实暴露），已修。本批在 `sync-v1-clean`（第一批之上），请确认 + go/no-go（是否合并部署该补强）。

## 改动

### 1. sync API 决策层抽纯函数 + 集成测试（行为等价重构）
- 新增 `planSyncOutcome(opts)`（[lib/progressMergePolicy.js](../lib/progressMergePolicy.js)）：把 `/api/sync` handler 的"读取结果 → 决定响应"逻辑抽成纯函数，返回 `{action:'read_error'|'conflict'|'write', ...}`。
- [pages/api/sync.js](../pages/api/sync.js) handler 改为调用 `planSyncOutcome`，只保留 DB 读/写 IO。**行为与原逐行实现等价**（fail-closed 读 / 409 / 守卫 / 写入响应均不变）。
- 新增 [scripts/test-sync-api.mjs](../scripts/test-sync-api.mjs)：14 个 HTTP 层 case（stale clientVersion 409、guard rejection、read failure 500、PGRST116 首次用户、wordInput intent 放行等），补单测未覆盖的集成层。

### 2. 真实数据合并验证
- 新增 [scripts/verify-sync-realdata.mjs](../scripts/verify-sync-realdata.mjs)：用 `backups/` 里 chompcloud 真实 573 词云端数据，构造 local diverge（复习/forgot/新增/云端独有），跑 `mergeProgress` 验证不变量（不丢词、forgot 降级、recency、history union）。

### 3. ★ 真实数据抓到的缺陷修复：recency 不再用 nextReviewDate
- **现象**：真实数据里有 6+ 个词 `reviewLevel` 3-4 但 `reviewHistory` 为空（数据异常），其 `nextReviewDate` 在未来。
- **缺陷**：`entryRecency` 原 fallback 链为 `max(srsUpdatedAt, history) > nextReviewDate > fallbackTime`。这些词无 srsUpdatedAt、无 history → 落到 **未来的 nextReviewDate**，它 > 本地刚 forgot 的 today → 旧云端高 level 赢 → **forgot 降级被覆盖**。这正是你 Round 2 P2 警告的"未来 nextReviewDate 当 recency 会误判"。
- **修复**：`entryRecency = max(srsUpdatedAt, 最新 history.date)`，无活动信号时退到 `fallbackTime`（顶层 updatedAt），**完全移除 nextReviewDate**（它是未来计划，非活动时间）。
- mergeProgress 调用时 ctx 传顶层 updatedAt 作 fallback，保证无信号词按"哪边整体更新"决定。

## 请确认
1. `planSyncOutcome` 重构是否与原 handler 行为等价（无回归）。
2. 移除 `nextReviewDate` recency 是否正确、有无新副作用（尤其首次同步：无 srsUpdatedAt 的存量词靠 history，少数无 history 词靠顶层 updatedAt fallback —— 是否合理）。
3. 真实数据验证脚本的不变量是否充分。
4. go/no-go：该补强是否可合并 `main` 部署。

## 测试
- `node scripts/test-progress-merge-policy.mjs`：68/68
- `node scripts/test-sync-api.mjs`：14/14
- `node scripts/verify-sync-realdata.mjs`：9/9（forgot 降级核心修复在真实 573 词验证通过）
- `npm run build`：通过
- 分支：`sync-v1-clean`（领先 `main` 一个 commit）

## 范围不变
仍只第一批合并逻辑。chompcloud version 1127 解冻需第二批闸门，本批合并后勿触发其救援同步。
