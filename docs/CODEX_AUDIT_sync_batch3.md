# Codex 审计：第三批收尾加固（Sync Stabilization v1 余项）

## 背景
Sync Stabilization v1 前两批已部署：合并 policy 统一、recency 合并、intent payload-binding、闸门 recover、auth 死锁修复（version 冻结根因）、同步徽章 UX、自动去重。第三批是你之前列的"余项"收尾，原则：**只做不高风险的，高风险/复杂的跳过**。不改代码出结论。分支 `sync-v1-batch3`，相对 main 仅一个 feat commit。

## 改动（4 项 + 2 项主动跳过）

### (1) mergeProgress 合并层 wordInput 去重 — [lib/progressMergePolicy.js](../lib/progressMergePolicy.js)
- 旧：`merged.wordInput` 取"较长/较新"的一方原样返回（不去重）。
- 新：选出胜出方后再 `dedupeWordsStable`（大小写不敏感 + 保留首次原形），跟客户端 load/upload 同一套 normalize。**只去重、不改"哪边胜出"**；无重复时原样返回（引用不变）。
- 论证点：去重不改 distinct 词数 → `validateProgressMerge`（比 wsm/rwd/xp，不比 wordInput）不受影响；`applyProgressGuards` 已按 distinct 比较 → 纯去重天然放行。**请确认合并层去重不会跟胜出方选择/守卫/validate 互相打架。**

### (2) parseWordsFromInput 下游统一 distinct — [pages/vocab.js](../pages/vocab.js)
- 旧：只 split+trim+filter，不去重。
- 新：末尾 `dedupeWordsStable`。影响所有下游（startLearning/startScreening/getDailyPlan/词数显示等共 ~16 处）。
- 安全性论证：Step 2 已废 `getAutoWordStatus` 的 `index <= idx`（wordInput 位置 vs wordList 指针混用），**现在没有任何消费方依赖 wordInput 的重复位置**；所有消费方按 word 内容过滤（`wordStatusMap[w]`）。且存储层（load/upload/merge）已去重 → 加载态下 parseWordsFromInput 多为 no-op，只在"刚敲入未持久化"的瞬态生效（此时去重正是期望行为，避免同词学两遍）。
- **请重点验证**：(a) 是否真的没有任何消费方依赖重复词/位置；(b) 大小写不敏感去重（"Apple"/"apple" 视为同词）在学习 session/筛选/每日计划里语义是否一致、无回退。

### (3) 二次 409 max-contention 改 union-merge — [pages/vocab.js](../pages/vocab.js) `_pushSnapshot`
- 旧：首轮 409 合并重推后若**再次** 409（双重竞态），裸接受 `conflict2.serverData`（丢掉本轮 merged 里用户的改动），然后 setSyncSynced + clearIntent。
- 新：再次 409 时先 `mergeStates(merged, conflict2.serverData)`（union 保住用户词）+ validate 兜底，再落地收敛；之后仍 setSyncSynced + clearIntent（收敛、不再继续重推以避免活锁）。
- **请验证**：(a) 这里保留 setSyncSynced + clearIntent 是否仍合理（我的判断：已 union 进用户改动并落地，本地不丢；继续重推有活锁风险，故收敛）；(b) merged2 落地但未再推送 → 本地可能短暂领先 server，下次 debounce sync 会正常 reconcile，是否认可；(c) 是否要改成"再推一次 r3、仍冲突才接受"——我倾向不加（≤100 用户双重竞态近乎不可能，复杂度不值）。

### (4) 可观测性 breadcrumb（复用已有 `trackFunnel` / lib/analytics.js，未改该文件）
- `sync_push`（每次推送前：version + intent + wsm/rwd 规模 + wordInput 长度）
- `sync_conflict_409`（client/server version）
- `sync_guard_rejected`（被拒字段 + version）
- `sync_gate_blocked`（闸门 reason）
- 论证：Sentry breadcrumb ring-buffer，仅后续真错误事件触发时附带上报，平时静默 no-op（无 DSN 也 no-op）；不含 PII。**请确认无敏感数据、无性能/噪音问题。**

### 主动跳过（请确认跳过合理，或指出哪个其实该做）
- **全局 mountedRef 守卫 unmount 后 setState**：你 authfix 审计里自评"低风险"，vocab 是主学习页几乎不 unmount，且 auth timer 已在 authhardening 清理。全量给 async setState 加 mountedRef 涉及面广、churn 大、收益低 → 跳过。
- **diverge detection（本地/云端长期分叉检测）**：复杂、中等价值，超出 v1 止血范围 → 跳过。

## 测试
- `node scripts/test-progress-merge-policy.mjs`：80/80（新增 2 个合并层去重 case：胜出方有重复→去重 / 无重复→原样）
- `node scripts/test-sync-api.mjs`：14/14
- `node scripts/verify-sync-realdata.mjs`：12/12（chompcloud 真实 573 词数据）
- `npm run build`：通过
- 注：parseWordsFromInput 去重 + 二次409 + breadcrumb 是 React 运行时，纯函数测不到；靠代码审查 + 部署后目测。

## 请给结论
1. 上述 4 项每项的 go/no-go（重点 (2) 下游 distinct 的语义安全 + (3) 二次409 收敛策略）。
2. 2 项跳过是否同意。
3. 整体合并部署 go/no-go。
