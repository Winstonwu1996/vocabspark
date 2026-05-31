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

---

## 6. 实施进度 (2026-05-31, 创始人「现在就做, 趁核心用户只 chompcloud, 保证可备份」)

分支 `claude/sync-redesign-phase1`。Codex 多轮 + Workflow 多维审 (9 确认/6 驳回) 全程把关。

**已做 (安全增量, 待 canary→合 main)**:
- R5: mergeHistoryData field-level union (learningReceipts/reviewPool/sidekickLogs/inProgress savedAt/userWorldview)。
- 兜底备份 `lib/local-backup.js`: premigration 永久点 + 滚动(KEEP=2, ≤500K char) + 全局 SIGNED_OUT 清备份。
- 单例 `lib/sync-client-singleton.js` + vocab 切 getSyncClient (byte-identical, 顺带修 remount 残留 client 隐患)。
  回调按操作钉死 (`__getActiveCallbacks` + `_pinCallbacks`) 防切页混用。
- Phase 2 history **push-only**: 完成课/对话推进触发 syncToCloud (cloudReady 闸门保证安全)。

**未做 / 已知限制 (留 history-pull 专项, 单独审 + canary)**:
- **history-first 会话进度被 vocab 登录覆盖的窄边界** (P1, 但**上线前既存**, 非本次引入): history 从不
  主动 pull/setCloudReady; push-only 已大幅缓解 (访问过 vocab 即 cloudReady→推上云), premigration 备份可恢复。
  彻底修需 history 自驱动 pull —— 而 pull 必须含 ①owner 校验 (防共享浏览器跨账号污染, 见下) ②foreign 态清 React
  ③state 全量重应用 ④freshness。本次试过改 vocab 登录合并来救, 引入跨账号污染等多个 P1 (登录路径极精细),
  已**还原**, 不动付费核心。
- **跨账号污染** (P1, 单用户不可达): 非 vocab 页登出不清主 blob → 共享浏览器他人遗留 blob。需 owner 校验 +
  登出清主 blob (后者要防 token 过期 spurious SIGNED_OUT 误清 → 需区分主动登出)。
- **两设备并发编辑同一课 409 turn 回退** (P1, 单用户不可达, 需并发多设备 push)。
- **history 标量偏好 (englishLevel/autoRecommend/profile/curriculum) 跨设备 newer-blob 覆盖** (P2, 可恢复偏好)。

→ 下一专项: history 自驱动 pull + 上述 owner/state-reapply/freshness 一并解决, 用户增长前完成。
