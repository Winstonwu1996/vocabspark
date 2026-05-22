# Codex 审计任务：VocabSpark 词汇统计 + 用户进度云同步的系统性数据一致性问题

## 你的角色与目标

你是一位资深的分布式数据一致性 / 离线优先（offline-first）前端架构审计专家。

VocabSpark 是一个单页背单词应用（Next.js 14 Pages Router + Supabase Postgres），同一份用户进度数据存在**三个位置**：React 内存 state、浏览器 localStorage、Supabase 云端。这三方之间的同步与合并逻辑在过去几个月**反复出现数据问题**（进度丢失、计数虚高、本地与云端 diverge、修正被还原）。每次都是"打地鼠"式修一个症状，但根本问题没解决。

**我要的不是再修一个 bug，而是一次彻底的系统性审计**：找出为什么这类问题会反复出现，定位所有真实/潜在的数据一致性缺陷，并给出一个能根治的架构级修复方案。

---

## 技术栈与数据模型

- **前端**：Next.js 14.2 Pages Router，单文件巨型组件 `pages/vocab.js`（~9500 行，`export default function App()`）
- **后端**：Next.js API routes + Supabase Postgres，表 `user_progress(user_id, progress_data jsonb, version int, updated_at)`，外加历史快照表 `user_progress_history`
- **三处数据副本**：
  1. React state（`wordInput`, `reviewWordData`, `wordStatusMap`, `stats`, `pet`, `session` 等数十个 useState）
  2. localStorage（key `SKEY`，由 `doSave` 写、`loadSave` 读，**merge 写入**）
  3. Supabase `progress_data`（带乐观锁 `version`）

- **`progress_data` 关键字段**：
  - `wordInput`: string —— 用户的整个词库，换行/逗号/顿号分隔的英文单词（**无去重**，可达上万词）
  - `wordStatusMap`: `{ [word]: "unlearned"|"learning"|"mastered"|"uncertain"|"error"|"skipped" }`
  - `reviewWordData`: `{ [word]: { word, reviewLevel:0-4, nextReviewDate:ISO, reviewHistory:[{mode,...}], meaning, phonetic } }` —— SRS 间隔重复数据
  - `pet`: `{ totalFed, unlocked:[], species }` （宠物养成）
  - `stats`: `{ xp, total, correct, bestStreak, streak }`
  - `session`: `{ wordList:[], idx, learned:[] }` （当前学习进度指针）
  - `settings`: `{ dailyNewWords, targetDate, studyGoal, deepReviewDailyCap }`

- **SRS 规则**：`REVIEW_INTERVAL_DAYS = [1,3,7,14,30]`；学完一个词设 `nextReviewDate = 今天 + INTERVAL[level]`；`nextReviewDate <= 今天` 即"到期"。

---

## 审计范围与关键代码导航

### A. 云同步链路（pages/vocab.js + 两个 API）
| 函数 / 位置 | 作用 |
|---|---|
| `loadSave` (vocab.js:1325) | 从 localStorage 读全量数据 |
| `doSave` (vocab.js:1346) | **merge** 写 localStorage（`{...existing, ...d}`），多处只传部分字段 |
| `syncToCloud` (vocab.js:3461) | leading-edge debounce 触发同步 |
| `_doSync` (vocab.js:3482) | 真正 POST `/api/sync`；含多个"反数据丢失"闸门 + 409 冲突合并 |
| `loadFromCloud` (vocab.js:3619) | GET `/api/load`，更新 `syncVersionRef` |
| `_applyCloudData` (vocab.js:3631) | 把云端数据合并进 React state（各字段不同合并策略） |
| `_broadcastSync` / BroadcastChannel (vocab.js:3611, 4096) | 多 tab 同步 |
| `_intentRef` (vocab.js:3435) | `'user_edit_wordInput'｜'user_upload'｜'user_clear'`，绕过服务端守卫 |
| `syncVersionRef` (vocab.js:2614) | 客户端持有的乐观锁版本号 |
| `_cloudReadyRef` (vocab.js:3432) | 闸门：`_applyCloudData` 完成前禁止 push |
| `pages/api/sync.js` (全 249 行) | `applyFieldGuards`（只增不减守卫）+ 版本冲突 409 + 历史快照 |
| `pages/api/load.js` (全 30 行) | 读云端 |
| `lib/syncMerge.js` (全 207 行) | `mergeStates` —— 409 冲突时的双向合并 |

### B. 词汇统计链路（pages/vocab.js）
| 函数 / 位置 | 作用 |
|---|---|
| `parseWordsFromInput` (vocab.js:4323) | split wordInput → 词数组（**不去重**） |
| `getDistinctWordEntries` (vocab.js:5627) | 我刚加的去重 helper（按词去重 + 保留首次 index） |
| `getWordStatus` / `getAutoWordStatus` (vocab.js:4338, 4330) | 词状态判定，**依赖数组 index 与 session.idx 比较** |
| `getStudyPlanPrediction` (vocab.js:5638) | 今日任务统计（dueCount 等） |
| `getStatsSnapshot` (vocab.js:5804) | 词库页统计（总数/待学/已学/到期） |
| `getWordRows` (vocab.js:5711) | 词表渲染行 |
| `startQuickReview` / `startDeepReview` (vocab.js ~5849, ~5970) | 复习队列构建 |
| `upsertReviewWordData` (vocab.js:4370) | 写单个词的 SRS 数据 + 触发 save/sync |

---

## 已知问题史（请把这些当作"症状"，去找共同的"病根"）

### 统计类（根因疑似：wordInput 无去重 + 无源头唯一性约束）
1. 实测某用户 wordInput 有 **766 个重复词条**（13249 条 / 12483 distinct）。连锁导致：
   - 复习时同一个词连续出现 2-3 次（复习队列基于 wordInput 无去重）
   - "今日到期/词库总数/待学习/已学过"全部计数虚高（统计基于 wordInput 无去重）
   - 词表显示重复行
   - 单词配对游戏左右列数量不一致
2. 我已做的临时修复：复习队列、统计、词表显示都加了按词去重 + 一个手动"去重词库"按钮。**但这是下游补救，没有源头防护**——为什么 wordInput 会累积重复？上传/合并/`mergeStates` 的 append 行为是不是元凶？

### 云同步类（根因疑似：多副本合并策略不自洽 + 守卫误伤）
3. 某用户云端 `version` 冻结在 1127（5/17 后再没更新过），但用户一直在用 app。**为什么本地数据一直没能成功 sync 上云端？** 怀疑 `_doSync` 里的"反数据丢失"闸门（`reviewWordData < wordStatusMap*0.3`、`pet looks default && stats.total>50`）或 `_cloudReadyRef` 闸门长期误伤，导致 push 被静默 block（只 `console.warn` + `setSyncStatus("error")`，用户无感）。
4. 本地 `reviewWordData` 与云端 diverge：本地"今日到期" ≫ 云端。
5. `_applyCloudData` 对 `reviewWordData` 的合并（vocab.js:3671）**只比较 `reviewLevel`**：本地 level 不高于云端时整条取云端 —— 会把本地更新过的 `nextReviewDate` 用云端旧日期覆盖。一个只改了 nextReviewDate（没升 level）的合法修正会被还原。
6. `mergeStates`（syncMerge.js:163）对 `wordInput` 取**较长的字符串**（append-only 假设）。这与"去重让 wordInput 变短"直接冲突：去重后若发生 409，合并会把更长的重复版选回来，去重被还原。
7. 一个"云端恢复"功能改了本地 `reviewWordData` 却**没调 `syncToCloud`**，修正不持久化，下次 `_applyCloudData` 又被云端覆盖。
8. `doSave` 是部分 merge、`syncToCloud` 内部又 `loadSave` 读全量再 push —— React state / localStorage / 云端三者在并发操作下的时序与一致性是否有保证？
9. `_intentRef` "发出后立即清空"（vocab.js:3524）：如果该次 push 失败/重试，intent 已丢，重试时守卫又会拦截合法的缩减操作。
10. 多 tab：BroadcastChannel + `syncVersionRef` 竞态；`version` 单调性在多 tab 并发写时是否可靠。

---

## 请输出（按此结构）

1. **病根定性**：把上面 10 个症状归并到几个根本性的架构缺陷（例如"无单一可信源 / 合并策略各字段不自洽 / 守卫与合法操作边界不清 / 缺乏冲突可观测性"等），并解释每个病根如何派生出对应症状。

2. **数据流一致性模型审计**：画出/描述 React state ↔ localStorage ↔ 云端 的完整读写时序，标出所有竞态窗口、覆盖风险点、静默失败点。特别审：
   - `_doSync` 的闸门与守卫是否会"为防丢失反而导致永久不同步"（活锁）。
   - 各字段合并策略（`mergeStates` + `_applyCloudData` + `applyFieldGuards` 三处独立实现）是否互相矛盾。同一字段在三个地方的合并语义是否一致？
   - 乐观锁 `version` 在"客户端长期 push 失败"场景下会不会永久落后导致每次都走 409 merge。

3. **每个字段的"正确合并语义"建议表**：对 `wordInput / wordStatusMap / reviewWordData / pet / stats / session / settings` 各给出推荐的权威性规则（谁赢、按什么单调量、是否需要 per-key 时间戳/版本），并指出当前实现与之的偏差。

4. **针对 `reviewWordData` 的专项**：当前用 `reviewLevel` 单一维度判优先级。请评估是否应改为 `(reviewLevel, nextReviewDate, reviewHistory.length)` 的复合判据，或引入 per-word `updatedAt`。给出具体合并算法伪代码。

5. **wordInput 唯一性**：评估应在哪一层强制去重（输入时 / save 时 / merge 时 / 显示时），权衡 `session.idx` 依赖数组位置带来的错位风险（去重会改变 index，而 `getAutoWordStatus` 用 `index <= session.idx` 判状态）。给出不破坏学习进度指针的去重落点。

6. **可观测性缺口**：当前同步失败只有 `console.warn`。建议需要哪些信号（用户可见的 sync 状态、被守卫拒绝的字段提示、diverge 检测告警）。

7. **修复路线图**：分「立即热修（低风险）」「中期重构（合并逻辑统一）」「长期架构（如引入 CRDT / per-field 版本 / 服务端为权威源）」三档，每条标注风险与影响面。

8. **回归测试清单**：列出能复现上述各类 diverge 的最小测试场景（多 tab 并发、push 失败后重试、离线编辑后上线、去重后 409、换设备登录合并等）。

## 约束
- 这是审计 + 方案，**不要直接改代码**，先给分析和建议，让我 review 后再决定动手。
- 重点放在"为什么反复出现"的系统性根因，而不是逐个症状的局部补丁。
- 注意硬边界：`buildSys/buildGuessPrompt/buildTeachCachePrompt` 等 prompt 文案、ratelimit、Stripe、Sentry 等基础设施不在本次审计范围。
