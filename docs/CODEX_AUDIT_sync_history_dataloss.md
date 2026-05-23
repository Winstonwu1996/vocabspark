# Codex 审核：sync 数据丢失 P0 — mergeProgress 丢 historyData/bridgeQueue

## 背景 + go/no-go 请求

设计 History「Learning Receipt」机制时顺带挖到一个**先存在的数据丢失 P0**（非本次引入），
现在就在威胁现有用户的历史进度。已在独立分支做最小修复，请审 + go/no-go。

**分支** `fix/sync-history-data-loss`（off `main` 59e7bcb），关键 commit：
- `b3edbfe` fix(sync): mergeProgress 不再丢 historyData/bridgeQueue/studyGoal

**范围**：仅 `lib/progressMergePolicy.js` 纯函数 + 一个测试脚本。不碰 sync handler / 存储 IO / 组件。

---

## 一、根因（已逐行核实）

History 模块进度**不单独同步**——它寄生在 vocab 同步的同一个 `vocabspark_v1` blob 里
（`lib/history-storage.js`：`SKEY="vocabspark_v1"`，`historyData` / `bridgeQueue` 都存这）。
字段：
- `historyData = { completedTopics{}, inProgress{}, transcripts{}, userWorldview, profile, curriculum, stats{totalXp,topicsCompleted}, lastTopicId, walkthroughSeen }`
- `bridgeQueue = { history{ [topicId]: … } }`（history→vocab 推荐生词独立队列，刻意不污染主词单）

但 `mergeProgress`（`progressMergePolicy.js`）是 **`var merged = {}` 起步 + 按字段白名单逐个重建**。
白名单：stats / pet / wordStatusMap / reviewWordData / session / profile / wordInput / settings /
targetDate / completedWords / schemaVersion / tipDismissed / updatedAt。
**`historyData` / `bridgeQueue` / `studyGoal` 都不在白名单 → 合并输出直接没有这几个键。**

兜底校验 `validateProgressMerge` 也只查 wordStatusMap / reviewWordData / stats.xp，**查不到 historyData 丢失**。

**触发路径**（client，`pages/vocab.js`）：
- `:3523` 409 版本冲突重推：`merged = mergeStates(dataToPush, conflict.serverData)`
- `:3524` `if (!validateMerged(merged, conflict.serverData)) merged = conflict.serverData;`
  —— validate 通过（vocab 字段完好）→ **不回退** → 丢了 historyData 的 merged 被重推。
- `:4039` 登录合并 `mergeStates(localData, cloudData)`、`:3603` / `:4215` 同样。

（`mergeStates` = `validateMerged` 的来源 `lib/syncMerge.js`：`mergeStates = mergeProgress`、
`validateMerged = validateProgressMerge`。）

**后果**：任意一次 409 冲突（双设备 / 版本竞态）或换设备登录合并 → 用户**全部历史进度
（completedTopics / inProgress / transcripts / worldview）+ bridge 生词队列被从 payload 抹掉再推回云端**，
随后 `_applyCloudData` 写回本地，本地也丢。

> 正常 push 路径不受影响：服务端 `applyProgressGuards` 是 `safe = Object.assign({}, incoming)`，
> historyData 作为未知字段 passthrough 保留。**丢失只发生在 client 的 mergeProgress 合并路径。**

---

## 二、修复

### 新增两个合并 helper（topicId 字典 union，绝不丢 topic）
```js
mergeHistoryData(local, server, localNewer)
  // passthrough base (newer 赢标量) → 覆盖:
  // completedTopics / inProgress / transcripts = unionByTopic (键并集, 冲突 newer 赢)
  // stats.totalXp / topicsCompleted = max
mergeBridgeQueue(local, server, localNewer)
  // history = unionByTopic
```
`unionByTopic(a,b,localNewer)` = `localNewer ? {...b,...a} : {...a,...b}`。

### mergeProgress 显式合并（`return merged` 前）
```js
if (local.historyData || server.historyData)
  merged.historyData = mergeHistoryData(local.historyData, server.historyData, localNewer);
if (local.bridgeQueue || server.bridgeQueue)
  merged.bridgeQueue = mergeBridgeQueue(local.bridgeQueue, server.bridgeQueue, localNewer);
if (local.studyGoal || server.studyGoal)
  merged.studyGoal = localNewer ? (local.studyGoal||server.studyGoal) : (server.studyGoal||local.studyGoal);
```
两边都无该字段 → 不引入键（不无中生有）。

### validateProgressMerge 加反缩水安全网
```js
// completedTopics / bridgeQueue.history 不该比 server 少 → 否则 invalid → vocab.js 回退 serverData
```

### 测试（无 jest，沿用 node 脚本惯例）
`scripts/test-merge-history-passthrough.mjs`，**16 断言全过**：
双设备各完成不同 topic → union 两个都在；单边缺失不报错；两边都无→不引入键；
validate 抓缩水；vocab 字段（xp max / wordStatusMap union）不回归。

---

## 三、请确认

1. **union by topicId** 是否是 409 双向合并的正确语义？（双设备各自完成不同 topic 时，
   两个都该留——union 保证不丢；同 topicId 冲突时 newer 赢。有没有更该用「进度更深」
   而非「时间更新」的字段？比如 `inProgress[topicId].savedTurnIndex` 冲突时，
   是否该取 max(turnIndex) 而不是 newer？现在是 newer 赢——你认为要不要按 turnIndex 取深？）
2. **passthrough base**（`mergeHistoryData` 先 `Object.assign` 并所有键再覆盖）会不会带进
   不该带的瞬态字段？还是说这正是防「未来再加 historyData 子字段又被悄悄丢」所需？
3. **validate 安全网**用 completedTopics 数量不缩水——union 后必然 ≥ server，正常永远通过；
   只在合并逻辑将来被改坏时触发回退。这个「安全网」位置对吗？还是该更严（也查 inProgress/transcripts）？
4. **scope**：我只改了 mergeProgress + validate（client 合并路径）。服务端 `applyProgressGuards`
   目前靠 passthrough 保住 historyData，没有专门的「historyData 缩水」守卫。要不要**一并加**
   服务端守卫（防 client 推上来的 payload 本身就缺 historyData 的其它路径）？还是单独排期？
5. **白名单脆弱性**（systemic）：mergeProgress 用「显式白名单重建」本质上对任何新顶层字段都
   不安全（这次是 historyData，studyGoal 我也顺手补了）。要不要改成「passthrough base + 白名单覆盖」
   的整体结构（更难再漏字段）？还是保持显式、靠 review 兜？倾向哪个？

---

## 四、回归 / 部署
- 仅 `lib/progressMergePolicy.js` 纯函数 + 测试脚本；`node --check` 过；ESM import 过；16 断言过。
- 该文件被 client bundle + `pages/api/sync.js` 共用——**build gate 走 Vercel preview**（本地未跑
  full build，避免与并发 dev/worktree 抢 .next）。
- **不碰** `backups/`（生产用户数据）、不碰 sync handler IO、不碰存储层。
- 建议合并顺序：本 P0 修复独立先合 main（修现网数据丢失）；Learning Receipt 依赖此修复，随后再做。

---

## Round 2 — 回应 Codex No-Go（commit 见下）

感谢 No-Go，三条都已处理。**注意 P1 我做了一处与你建议不同的取舍，请复核。**

### ✅ P1（服务端守卫）— 已加，但**故意只守 completedTopics + transcripts**
在 `applyProgressGuards` 末尾加了 historyData 守卫：缩水 → 保守 union（并集不丢 topic，键冲突 **cloud 赢**）+ `rejected.push('historyData')`。复刻了你验证的边界（cloud `{a,b}` / incoming `{a}` → 现在 safe 保留 `{a,b}`、rejected 含 historyData）。

**但我没有守 `inProgress` 和 `bridgeQueue.history`** —— 这两个你列进了 P1，但代码核实它们**会被正常流程合法删除**：
- `inProgress`：完成一个 topic 就 `clearInProgress(topicId)` 删该条（`pages/history.js:708/1474/1497` → `lib/history-storage.js:236 delete historyData.inProgress[topicId]`）。普通完成会让 inProgress 计数 -1。
- `bridgeQueue.history`：bridge 词被消费进 vocab 就 `delete historyQueue[topicId]`（`pages/vocab.js:2708` + `lib/history-storage.js:489`）。

若按「缩水=拒绝」守它们，则**每次正常完成 / 每次消费 bridge 词都会误判**：服务端 reject → 客户端按 rejectedFields 把 serverData 应用回本地（`pages/vocab.js:3470`）→ 复活刚完成的 in-progress 会话 / 复活已消费的队列条目，且 rejected 日志被刷爆。所以这两个字段不能用 append-only 的 shrink 守卫。

**请确认**：你同意「inProgress / bridgeQueue.history 因可被合法删除，不纳入服务端 shrink 守卫」吗？还是你想要更细的语义（例如 inProgress 仅当「缩水且对应 topic 未进 completedTopics」才拦——需要跨字段判断，blast radius 更大，我倾向不放进这个 P0）？

### ✅ P3（validate 覆盖）— 已补 inProgress + transcripts
`validateProgressMerge` 现查 completedTopics / inProgress / transcripts / bridgeQueue.history 四者不缩水。（注：validate 只在 client merge 路径调用，此时四者均已 union → 必然 ≥ server，故为回归 tripwire；inProgress 在 merge 路径是 union 不存在合法缩水问题，与 P1 服务端路径不同。）

### ✅ P2（stats 一致性 + passthrough）— 已修（你说后续，我顺手做了，因涉及我本轮新代码的回归）
`mergeHistoryData` 的 stats 不再整体重建：改为 passthrough base（保留其它子字段，修了你确认点 #2 的 stats 子字段丢失），再用 union 后的 completedTopics 重算 `topicsCompleted = max(两侧, 实际完成数)`、`totalXp = max(两侧, Σ xpEarned)`。

### 回应你的 5 点确认
1. ✅ union by topicId 为主语义、同 topic newer 赢已采用；`inProgress.savedTurnIndex` 取 max 列为后续优化（未进本轮）。
2. ✅ passthrough base 方向保留；stats 重建破坏 passthrough 的问题已按 #2 修正。
3. ✅ validate 已补 inProgress / transcripts。
4. ✅ 服务端守卫本轮已加（completedTopics + transcripts；inProgress/bridge 见上说明）。
5. ✅ 顶层整体 passthrough base **未**塞进本 P0（同意 blast radius 太大，留作系统性后续）。

### Round 2 验证
- `node scripts/test-merge-history-passthrough.mjs`：**27/27**（新增 P1 服务端守卫 5 例 + P3 inProgress/transcripts 2 例 + P2 stats 3 例 + 正常完成不误伤用例）
- `node scripts/test-progress-merge-policy.mjs`：**80/80**（无回归）
- `node scripts/test-sync-api.mjs`：**14/14**（无回归）
- `node --check lib/progressMergePolicy.js`：过
- 仍**不碰** `backups/` / sync handler IO / 存储层。

---

## Round 3 — safeHist base fix（commit 见下）

你 Round 2 给了取舍 Go（inProgress/bridgeQueue 不进服务端 shrink 守卫），但发现新 P1：guard 触发时 `safeHist` 以 incoming 为 base，会丢 cloud 独有子字段。**已修，正是你给的一行。**

**修复**（`applyProgressGuards` historyData 守卫）：
```js
// before: var safeHist = Object.assign({}, ih);
var safeHist = Object.assign({}, ch, ih);   // cloud base → 叠 incoming → 再 cloud-wins union 覆盖 completedTopics/transcripts
```
效果：incoming 的新值（如 profile/worldview）仍赢；incoming 缺的字段（userWorldview/profile/curriculum/stats/englishLevel/reviewPool/sidekickLogs…）保留 cloud、不清空；append-only 的 completedTopics/transcripts 仍 cloud-wins union 不缩水。

**新增测试**：guard 触发时，cloud 独有 6 子字段（userWorldview/curriculum/stats/englishLevel/reviewPool/sidekickLogs）全部保留 + incoming 较新 profile 仍赢 + completedTopics 仍 union(a+b)。

### Round 3 验证
- `node scripts/test-merge-history-passthrough.mjs`：**36/36**（+9 断言锁定 safeHist base fix）
- `node scripts/test-progress-merge-policy.mjs`：**80/80**（无回归）
- `node scripts/test-sync-api.mjs`：**14/14**（无回归）
- `node --check`：过；仍不碰 `backups/` / sync handler IO / 存储层。
