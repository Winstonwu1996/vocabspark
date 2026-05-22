# VocabSpark Sync Stabilization v1

## 目标

在不引入 Replicache / PowerSync / 拆表 / IndexedDB 全迁移的前提下，先把现有 localStorage + Supabase JSONB 同步链路稳定到可支撑第一期不超过 100 个用户上市。

本轮目标不是建设通用 offline-first 平台，而是解决当前真实事故：

- 重度用户本地数据从 2026-05-17 起未成功上云，云端 version 卡在 1127。
- 同步失败或被守卫拒绝时用户无感，客户端还可能显示 synced。
- `mergeStates`、`_applyCloudData`、`applyFieldGuards` 三处合并语义不一致，修复会被其他路径还原。
- `reviewWordData` 只按 `reviewLevel` 判优先级，合法的 `nextReviewDate` / forgot 降级会被旧数据覆盖。
- `wordInput` 重复词条已经造成统计、复习队列和词表显示虚高；源头仍缺稳定 canonicalization。

## 不做清单

- 不引入 Replicache-lite / PowerSync / RxDB / Electric / Zero。
- 不把 `progress_data` 立即拆成 `user_words` / `review_events` 等关系表。
- 不把 localStorage 全面迁移到 IndexedDB。
- 不做完整 mutation log / per-client mutation ack。
- 不碰 prompt 文案、ratelimit、Stripe、Sentry 基础设施以外的业务模块。

## 关键落地约束

### 1. 闸门不能变成无脑强推

`_doSync` 里的两个反数据丢失闸门是为了防止 default / 游客态覆盖云端真实进度。闸门触发时不能直接给用户一个“强推本地”的主路径。

正确流程：

1. 闸门触发。
2. 先 `loadFromCloud`。
3. 用统一 policy 合并 local + cloud。
4. 保存 merged 到 localStorage + React state。
5. 再尝试 push merged。
6. 如果 merged 后仍触发闸门，才进入用户可见错误态；强推只作为最后手段，且要有本地备份提示。

### 2. `rejectedFields` 消费必须等合并逻辑修好

客户端消费 `/api/sync` 返回的 `serverData` 后，必然要把权威数据合回本地。如果 `_applyCloudData` 仍然只按旧规则合并，就会二次污染。

因此第一批必须打包完成：

- 抽统一 policy 层。
- 修 `reviewWordData` 合并语义。
- 再消费 `rejectedFields/serverData`。

不能先单独做 `rejectedFields` 消费。

### 3. `reviewWordData` recency 需要兼容旧数据

当前 `reviewWordData[word]` 没有稳定 `updatedAt` 字段。v1 需要新增字段并提供兼容 fallback。

推荐优先级：

1. `entry.updatedAt`
2. `max(reviewHistory[].date)`
3. `nextReviewDate`
4. 顶层 `progress_data.updatedAt`
5. 缺省为 0

`upsertReviewWordData` 写入时必须补 `updatedAt: now`。

纯函数单测必须覆盖：

- 同 level、较新的 `nextReviewDate` 不被旧云端覆盖。
- 用户 forgot 导致 level 从高降到 0，较新事件必须赢。
- reviewHistory union 后按时间排序，重复事件不重复计入。
- 旧数据没有 `updatedAt` 时 fallback 到 `reviewHistory.date`。

### 4. canonicalize 必须 stable，并迁移 session idx

`wordInput` 去重必须保留首次出现顺序，不能排序。

对 active session，去重会改变数组长度和 index，必须迁移：

1. 记录旧 `currentWord = session.wordList[session.idx]`。
2. stable dedupe `wordInput` 和 `session.wordList`。
3. 在新列表中找到 `currentWord`。
4. 找到则设置 `session.idx = newIndex`。
5. 找不到则用第一个未学词，或保守地清空 session。
6. `learned` stable dedupe。

`getAutoWordStatus` 仍依赖 `index <= idx`，所以 v1 不做无感全局重排，只做 stable dedupe + session migration。中期再废掉 index 判状态。

去重的 key 与存储值必须分离：用 `toLowerCase()+trim()` 仅作为**去重比较 key**，但实际保留 / 显示的词必须是**首次出现的原始大小写形式**。绝不能把 `wordInput` 整体存成小写——否则专有名词（`London`、`iPhone`、`NASA`）会被改写，用户会发现词表被动过。第三批 canonicalize 的「normalize lower-case」只针对比较，不针对存储。

### 5. intent 必须绑定 payload，而不是全局 ref

`_intentRef` 是全局单值，会被不相关的 debounce sync 带走。v1 需要把 intent 与本次待推 payload 绑定。

推荐实现：

- 引入 pending sync metadata，例如 `_pendingSyncMetaRef.current = { intent, reason, createdAt }`。
- `doSave` 或保存动作可以传 meta。
- `_doSync` 读取 localStorage 快照时，同时读取并冻结本次 payload 的 meta。
- 只有该 payload 成功被服务端接受后，才清掉对应 meta。
- 409 merge/retry 时继续携带同一 intent，除非 merge 后已经不再涉及该字段。

### 6. 所有日期比较必须规范化时间戳，不能字符串比较

`reviewWordData[word].nextReviewDate` 历史数据存在两种格式混用（已在生产数据实测确认）：

- 纯日期 `"2026-05-28"`（早期 / 导入数据）
- 完整 ISO `"2026-05-28T07:00:00.000Z"`（`addDaysISO` 当前输出，见 `pages/vocab.js:4352`）

字符串比较会误判：`"2026-05-21" < "2026-05-21T07:00:00.000Z"`（短串是另一个的前缀，排在前面），导致同一天的纯日期被当成「更早」。这正是现有「云端恢复」用 `cd > ld` 字符串比较（`pages/vocab.js:7172`）可能修正不稳、due 反复弹回的隐藏原因。

约束：

- `mergeReviewEntry` 的 recency 比较、Codex 伪代码里的 `newer()`、reviewHistory date 取 max、以及任何 nextReviewDate 比较，全部先 `new Date(x).getTime()` 规范化再比；`NaN` 视为最旧（0）。
- 顺带把现有 `isDueDate`（已用 `new Date(iso).getTime()`，安全）作为正确范例；云端恢复路径的字符串比较应一并改掉。
- 中期可考虑统一 `nextReviewDate` 存储格式（仅日期或仅完整 ISO 二选一），但 v1 先在比较层兼容，不做存量改写。
- 单测必须覆盖：纯日期 vs 完整 ISO 同日、跨日、`NaN`/缺失 三类 case。

## 部署前数据救援

chompcloud 修复后第一次成功同步是高风险时刻：本地 diverge 会撞上云端 frozen version 1127，大概率进入 409 merge。

上线修复前必须先留底：

- 从 chompcloud 浏览器导出 `localStorage.vocabspark_v1` 原文。
- 记录云端 `user_progress.version`、`updated_at`、`progress_data` 快照。
- 保留 `user_progress_history` 最近 10 条 id/version。

修复部署后第一次同步的成功标准：

- 云端 version 从 1127 继续增长。
- `reviewWordData` 数量不回退。
- `wordInput` distinct count 不减少到异常值。
- 今日 due count 与本地预期一致或可解释。

## 第一批：数据救援核心

### 范围

预计文件：

- `lib/progressMergePolicy.js` 新建
- `lib/syncMerge.js`
- `pages/vocab.js`
- `pages/api/sync.js`
- `scripts/test-progress-merge-policy.mjs` 新建

### 内容

1. 新建统一 policy 层：
   - `canonicalizeProgress(data, options)`
   - `mergeProgress(local, cloud, options)`
   - `mergeReviewEntry(localEntry, cloudEntry, context)`
   - `applyProgressGuards(incoming, cloud, intent)`
   - `validateProgressMerge(merged, cloud)`

2. `lib/syncMerge.js` 变成薄 wrapper，调用统一 policy，保持旧 import 兼容。

3. `_applyCloudData` 使用 policy 合并后的结果，不再在 React state 层复制另一套字段规则。

4. `reviewWordData` 合并改为 recency/history 优先：
   - 不再 `reviewLevel max`。
   - 允许合法降级。
   - `upsertReviewWordData` 写入 `updatedAt`。

5. `/api/sync` 的 `applyFieldGuards` 改为调用统一 policy。

6. 客户端 `r.ok` 分支消费：
   - `result.rejectedFields`
   - `result.serverData`
   - 合并并保存权威数据
   - 不显示 synced，而显示 blocked/repaired/error 的明确状态。

### 风险

- `_applyCloudData` 简化时容易漏掉 settings/pet/session 的 React setter。
- review recency fallback 可能误判旧数据，需要单测覆盖旧结构。
- API 使用 ESM import 时，policy 文件必须兼容 Next.js API route 和前端 bundle。

### 验证标准

- 纯函数测试通过。
- 同 level 更新 `nextReviewDate` 后，云端旧数据不覆盖本地。
- forgot 降级后，旧高 level 不覆盖新低 level。
- 服务端返回 `rejectedFields` 时，客户端不会显示 synced。
- 被拒字段的 `serverData` 会进入 localStorage 和 React state。

## 第二批：打破活锁

### 范围

预计文件：

- `pages/vocab.js`
- `lib/progressMergePolicy.js`
- `scripts/test-sync-gates.mjs` 可选新建

### 内容

1. `_doSync` 闸门触发时，不再静默 return。

2. 新增 `recoverBlockedSync(reason, localData)`：
   - 拉云端。
   - local + cloud merge。
   - 保存 merged。
   - `_applyCloudData(merged)`。
   - 再 push merged。
   - 如果仍失败，进入用户可见 blocked 状态。

3. intent 与 payload 绑定：
   - 替代裸 `_intentRef`。
   - 409 re-push 继续保留该 payload 的 intent。
   - 成功且未被服务端拒绝后才清。

4. `loadFromCloud` 返回结构化结果：
   - `{ ok: true, data, version, hasData }`
   - `{ ok: false, error }`
   - 读取失败不能当作云端无数据。

### 风险

- recover 流程如果递归调用 `_doSync`，可能引入循环；需要用明确 flag 防止 reentrant。
- `_syncInFlightRef/_syncPendingRef` 状态清理必须严格在 finally。
- 用户可见状态不能误导成“已同步”。

### 验证标准

- 构造 `reviewWordData < wordStatusMap * 0.3`，首次 sync 会 pull-merge-repush，而不是永久卡住。
- 构造 `pet default && stats.total > 50`，不会直接强推 default pet。
- 网络失败时 `_cloudReadyRef` 不会被误置 true。
- intent 在 409 retry 后仍存在。

## 第三批：canonicalize + 可观测性

### 范围

预计文件：

- `lib/progressMergePolicy.js`
- `pages/vocab.js`
- `pages/api/sync.js`
- Sentry 已有配置文件不需要改，优先用现有 SDK 调用点。

### 内容

1. save/sync/merge 三层 canonicalize：
   - 去重 key = `toLowerCase()+trim()`；**存储/显示值保留首次出现的原始大小写**（见关键约束 4，不可整体存小写）。
   - stable dedupe。
   - 保留首次出现顺序。
   - session idx 迁移。

2. 下游统计补齐 distinct：
   - `getDailyPlan`
   - `startLearning`
   - `startScreening`
   - 设置面板词数显示

3. 可观测性：
   - 用户可见最后成功同步时间。
   - 显示 sync blocked reason。
   - 记录云端 version / 本地 pending 状态。
   - Sentry breadcrumb：payload bytes、wsmCount、rwdCount、wordInput raw/distinct count、clientVersion、serverVersion、rejectedFields、block reason。

4. debug dump：
   - 可复制 JSON 摘要，不含隐私长文本。
   - 包含 counts/hash/version/timestamps。

### 风险

- stable dedupe 如果在输入中自动发生，用户可能觉得词表被改动；v1 应优先在保存/同步前 canonicalize，并给明确 toast。
- hash/debug dump 不能包含完整词表或隐私画像。

### 验证标准

- 重复词不会在 409 merge 后复活。
- active session 去重后 currentWord 不跳错。
- 今日任务、词表页、设置面板词数口径一致。
- sync 失败能在 UI 和 Sentry 中看到同一个 reason。

## 回归测试清单

### merge policy

- local newer same-level review entry wins nextReviewDate.
- cloud newer same-level review entry wins nextReviewDate.
- forgot downgrade wins when reviewHistory date is newer.
- history union dedupes duplicate `{date, mode, result}`.
- old data without `updatedAt` falls back to history date.
- date compare normalizes mixed formats: bare `YYYY-MM-DD` vs full ISO same-day ties resolved by `getTime()`, not string compare.
- `NaN` / missing date treated as oldest (0), never wins recency.
- pet totalFed max + unlocked union.
- stats counters max, streak recency.
- settings per-field recency fallback.

### sync API

- stale `clientVersion` returns 409.
- guard rejection returns `rejectedFields` and `serverData`.
- guard uses same policy as client.
- read current cloud failure returns 500, not cloud-null overwrite.

### client sync

- `rejectedFields` path does not show synced.
- blocked gate triggers pull-merge-repush.
- blocked gate still blocked after merge shows user-visible reason.
- intent survives fetch failure.
- intent survives 409 re-push.
- intent does not leak from one unrelated sync payload to another.

### wordInput

- stable dedupe preserves first occurrence order.
- canonicalize does not sort words.
- active session idx migrates by currentWord.
- learned list dedupes stably.
- startLearning does not enqueue duplicate words.
- startScreening does not enqueue duplicate words.
- getDailyPlan counts distinct words.

## 上市前验收门槛

- chompcloud 云端 version 能持续增长。
- 人工模拟断网 5 分钟后恢复，数据能上云。
- 双 tab 同时学习不会让 version 停住。
- 服务端拒绝字段时，用户能看到明确提示。
- Sentry 能看到 sync breadcrumb。
- 本地和云端 counts 差异超过阈值时可诊断。

## 后续架构观察点

当满足任一条件时，再重新评估 PowerSync / Replicache-lite / 拆表：

- 活跃用户超过 100，且多设备同步成为高频路径。
- 同一用户多设备同时学习成为常态。
- `progress_data` 超过 2MB 或 `reviewHistory` 增长导致 API payload 明显变慢。
- 需要服务端按词查询、家长端统计、跨设备实时协作。
- 数据恢复事故每月超过 1 次。
