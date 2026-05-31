# Step 0B — history 跨设备同步:方案记录 (第一版方案已否决)

> 状态:**第一版「history 页第二个 sync client」方案已被 workflow 多维审否决 + revert**(2026-05-30)。
> 配额 (Step 3+5) 暂为 **per-device 强制**(规划 §10 风险 B 已接受类似妥协)。
> 跨设备 history 同步留作**独立的「正经重构」任务**(见下「推荐方案」)。
> 被否决的实现 + 两轮 workflow 全程保留在分支 `backup/step0b-sync-rejected` (@ cb4dbd2) 备查。

## 背景

配额/进度只写 localStorage;history 页从不实例化 sync client(只 `pages/vocab.js` 有)。
→ 跨设备绕配额 + history 进度不跨设备(Codex Step 3+5 P2-i/d)。

## 被否决的方案 — history 页挂第二个 blob 级 sync client

镜像 vocab:history 页 `createSyncClient`(loadLocalSnapshot=loadAll / saveLocalSnapshot=saveAll)+
初始 pull + 写后 push + BroadcastChannel。**workflow 两轮(共 ~30 agents)证明此方案在生产损坏 vocab 数据:**

- **致命(P1):双向都污染共享 `vocabspark_v1` blob。**
  - 拉云端写本地 → 盖掉本地未同步 vocab(绕 vocab 的 rank-merge)。
  - 修成「只写 historyData」→ 本地 vocab 永久陈旧 → history 的 push 推**整个**陈旧 blob → 409 客户端
    merge(wordInput 取较长 + wordStatusMap union 永不删 key)**复活已删的词** → 撤销另一设备的合法删除。
  - 「修 A 生 B、修 B 又生 A」—— 根因是**两个独立 client 共享一个 blob**,无单一 version/merge 真相源。
- **数据丢失(P1/P2):** `mergeHistoryData` newer-wins 覆盖 → 丢 learningReceipts(grandfather 凭据)/
  reviewPool/sidekickLogs。
- **其它(P2):** 无 `onAuthStateChange`(会话内登录/登出 userRef/cloudReady 永久陈旧 → 不 push + 绕配额);
  quotaEnforceReady 挂在 userRef 时间线(与 tier 解析独立,fresh 设备 pull 前空本地放行);两 client 抢
  同一 BroadcastChannel + user_progress 行,version 互相 409 放大。

**结论:** 「第二个 blob sync client」架构不可行。已 revert。

## 推荐方案(将来正经做)

**单一共享 sync client**:把 vocab + history 统一到一个 sync client 实例(React context / 模块单例),
单一 version + 单一 merge + 单一 BroadcastChannel,根治双 client 共享 blob。
- 优点:唯一真相源,不会两头污染;history 进度 + 配额随之正确跨设备。
- 代价:要动跑了一年的 vocab sync(最高风险区)→ 必须独立设计 + 多轮 workflow 审 + 充分 canary。
- 备选:服务端加「historyData-only」同步路径(只 merge historyData 子树,不经客户端碰 vocab blob),
  history 走窄通道。避免动 vocab,但要服务端改动 + 新端点。

## 当前状态(已 ship 的部分)

- Step 3+5 每日配额:**per-device 强制**,Codex 7 轮 clean,daily-quota 67/67 + history-tiers 150/150。
  flag off 默认。`saveAll` union-merge 配额字段防同设备其它 writer clobber(e5331d2)。
- 跨设备配额一致性:**待上面「单一共享 sync client」落地**。在此之前,清缓存/换设备可重置当日配额
  (规划风险 B 判定:成本高于付费,不阻塞 MVP)。
