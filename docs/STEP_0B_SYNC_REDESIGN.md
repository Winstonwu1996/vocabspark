# 跨设备 history sync 重构设计 — 单一共享 sync client (送审, 代码前)

> 状态:**设计稿,待创始人拍板再码**。承接 Step 0B 第一版「history 第二 sync client」被 workflow
> 否决(见 docs/STEP_0B_HISTORY_SYNC_DESIGN.md)。⚠️⚠️ 最高风险:动跑了一年的 vocab 付费同步。

## 0. 问题回顾

`vocabspark_v1` 是 vocab + history 共享的单一 localStorage blob + 单一 `user_progress` 行。
vocab 页有 sync client,history 页没有。给 history 挂**第二个** client → 两个独立 version/merge/BC
争一个 blob → 双向污染(workflow 已证:复活已删词 / 盖本地 vocab / 丢 grandfather 凭据)。
**根因:一个 blob 不能有两个独立同步真相源。**

## 1. 推荐方案 — 单一共享 sync client (模块单例)

把 `createSyncClient` 的**实例**从「每页各建」改为「全 app 一个」,vocab + history 共用:

- **`lib/sync-client-singleton.js`(新)**:`getSyncClient(callbacks)` —— 首次调用按传入 callbacks 建实例
  并缓存模块级单例;后续调用返回同一实例(callbacks 用 ref 更新,见下)。version/BC/intent/cloudReady
  全程单一,根治双真相源。
- **callbacks 用 ref 间接**:不同页提供的 `onCloudData`/`getUser` 等不同 → 单例持有 `callbacksRef`,
  各页 mount 时 `setCallbacks(...)` 更新当前活跃页的回调(同一时刻只有一页 mounted)。push/pull 时读
  `callbacksRef.current`。
- **vocab.js 改动(最小)**:`createSyncClient(...)` → `getSyncClient(...)`(签名兼容)。vocab 行为不变。
- **history 页**:同样 `getSyncClient(...)`,提供 history 的 `onCloudData`(只 merge historyData,
  vocab 字段交给单例已有的 vocab merge 逻辑——因为是同一实例同一 _applyCloudData 编排)。

> 关键差异 vs 被否决方案:不再有「第二个实例推陈旧整 blob」——同一实例始终持最新 version + 统一 merge。

## 2. 备选方案 (若不想动 vocab)

**服务端 historyData-only 端点**:新增 `/api/history-sync`(只读写 `progress_data.historyData` 子树,
不碰 vocab 字段),history 页走窄通道 push/pull historyData。
- ＋ 完全不动 vocab sync(零回归风险)。
- － 服务端改动 + 新端点 + 与主 blob 的并发写需协调(historyData 子树更新仍要 merge 进整行)。

## 3. 风险表

| # | 风险 | 缓解 |
|---|---|---|
| R1 | 回归 vocab 付费同步 (最关键) | 方案1: 单例签名兼容 createSyncClient, vocab 调用点只改工厂名; 全程跑 vocab sync 回归 (登录/多tab/删词/离线/跨设备首推) |
| R2 | 单例 callbacks 串页 (vocab 回调被 history 覆盖或反之) | 同一时刻只一页 mounted; setCallbacks 在 mount 设、unmount 不清 (留最后活跃页); 加页面标识防错配 |
| R3 | 多 tab (vocab tab + history tab) 仍是两个 JS context → 两个单例实例 | 单例是「每 tab 一个」, 跨 tab 仍靠 BroadcastChannel + 服务端 union merge (与今天 vocab 多 tab 同款, 已验证) |
| R4 | 初始 pull 时序 / cloudReady gate | 沿用 vocab 现成 setCloudReady 范式; history 配额强制 gate 在 cloudReady 后 |
| R5 | history 进度 merge 丢 receipts/reviewPool/sidekickLogs (workflow P1) | mergeHistoryData 的 newer-wins 改 field-level merge (completedTopics union / receipts union / inProgress 取较新轮次), 单测覆盖 |

## 4. 验证计划 (高风险 → 全套)

- 单测:sync-client-singleton + mergeHistoryData field-level merge 新断言。
- **Workflow 多维审**(强制):回归 vocab sync / 跨设备配额 / 多 tab / 数据丢失 四维。
- Canary:Vercel 预览,两 profile 跨「设备」验配额 + 进度同步,且 vocab sync 全回归冒烟。
- 分阶段 ship:先 vocab 切到 getSyncClient(行为不变)观察 ≥2 天无回归,再接 history(同 Step 0A→0B-gate 节奏)。

## 5. 工作量 / 建议

中-大(动 sync 层 + vocab 调用点 + mergeHistoryData 重构 + 分阶段 + 多轮审)。**建议:不与 Step 7-10
并行赶**,作为独立高风险任务单独排期、单独 workflow 审、Vercel canary 充分验证后再 ship。

**待创始人决策**:① 方案 1(单一共享单例,推荐)还是方案 2(服务端窄端点)?② 现在就启动编码,还是
先做完 Step 7-10 再回头专注做 sync?
