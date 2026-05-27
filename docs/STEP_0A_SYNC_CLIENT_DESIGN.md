# Step 0A — `lib/sync-client.js` API 设计 doc

**日期**:2026-05-26
**对应规划**:`docs/HISTORY_MEMBERSHIP_PLAN.md` v1.2 §9 Step 0A
**目标**:从 `pages/vocab.js` 提取通用 sync 编排逻辑到 `lib/sync-client.js`,vocab 改用此 lib,history 后续也能复用(0B 步)。**绝不破坏 vocab 跑了一年的 sync 时序**。

---

## 1. 抽离边界(关键决策)

### 进 lib(通用编排)
- 14 个 refs 里的 **10 个**:`syncTimerRef` / `syncInFlightRef` / `syncPendingRef` / `syncRetryCountRef` / `syncStatusTimerRef` / `lastSyncAtRef` / `cloudReadyRef` / `intentRef` / `intentSeqRef` / `bcRef`
- 常量:`MAX_SYNC_RETRIES` / `SYNC_DEBOUNCE_MS` / `SYNC_LEADING_GAP_MS`
- 函数:`_markIntent` / `syncToCloud`(debounce wrapper) / `_doSync`(核心状态机) / `_applySyncSuccess` / `_pushSnapshot`(含 409 重推) / `_broadcastSync` / `_initBroadcastChannel`
- 时序 invariant:**全部 9 个历史 bug 修复必须按原语义保留**

### 留 vocab(domain-specific)
- `_applyCloudData`(3724-3820)**整段留 vocab**:wordStatusMap 等级递进、pet totalFed 防退、session 多设备防回退、reviewLevel normalization —— 这些都是 vocab 数据形态,history 不会有
- `loadSave()` / `doSave()`:localStorage 直接读写,留 vocab(history 已经有自己的 `lib/history-storage.js:saveAll`)
- `mergeStates` / `validateMerged`:已在 `lib/syncMerge.js`,lib 直接 import
- `detectSyncGate`:留 vocab 内(域知识),作为 callback 注入
- `loadFromCloud`:lib 提供通用版本(只读 `/api/load`),vocab 端调
- 4 个 vocab-only refs 留 vocab:`accessTokenRef`(beforeunload 用) / `recoveringRef` / `authInFlightRef` / `authTimersRef`(auth 流程留 vocab)
- auth 流程(`handleAuthUser` / `onAuthStateChange` setTimeout 0 死锁修复)**整段留 vocab**:涉及 supabase v2 lock,domain 风险高,history 后续单独写 history-specific auth hook(共享底层 sync client)

### 边界原则
- **lib 只懂 push/pull/conflict/retry/multi-tab,不懂业务字段语义**
- **vocab 用 callback 注入业务策略**(merge / gate / data apply)
- **lib 不调 React hooks**(纯 factory,内部 refs 用 `{current}` 对象模拟),caller 在 React 里持久化实例

---

## 2. API 签名

```typescript
// lib/sync-client.js

/**
 * 创建一个同步客户端实例(factory pattern,非 React hook)。
 * 调用方在 React mount effect 里 createSyncClient 一次,存到 ref。
 */
export function createSyncClient(options) {
  /**
   * options = {
   *   // === 必须 (caller 提供) ===
   *   getAuthHeaders: async (includeContentType?: boolean) => Headers,
   *     // 返回 { Authorization?, Content-Type? },caller 自己 await supabase getSession
   *
   *   getUser: () => { id: string } | null,
   *     // 同步返回当前 user 或 null,caller 包装 userRef.current
   *
   *   loadLocalSnapshot: () => Promise<object | null>,
   *     // 从 localStorage 读全量本地快照,caller 包装 loadSave()
   *
   *   saveLocalSnapshot: (data: object) => Promise<void>,
   *     // 写 localStorage,caller 包装 doSave()
   *
   *   onCloudData: (cloudData: object) => void,
   *     // 应用云端数据到 caller state,caller 包装 _applyCloudData()
   *
   *   onSyncStatus: (status: 'idle'|'syncing'|'synced'|'error') => void,
   *     // sync 状态变化时通知 caller,caller 包装 setSyncStatus()
   *
   *   detectSyncGate: (data: object) => { blocked: boolean, reason?: string },
   *     // domain 闸门(如 wordInput 缩水保护),caller 提供
   *
   *   trackEvent: (event: string, props?: object) => void,
   *     // 事件追踪(GA / Sentry),caller 提供
   *
   *   // === 可选 (有默认值) ===
   *   channelName: string = 'knowu_sync',
   *     // BroadcastChannel 名;vocab 用默认,history 后续若分通道可改
   *
   *   maxRetries: number = 3,
   *   debounceMs: number = 500,
   *   leadingGapMs: number = 2000,
   *
   *   syncApiPath: string = '/api/sync',
   *   loadApiPath: string = '/api/load',
   *     // path 也参数化,但 vocab / history 共用同 endpoint 即可
   * }
   */

  return {
    // ─── 推送 (主用 API) ───
    syncToCloud(): void
      // leading edge debounce 推送;caller 在 doSave 后调

    markIntent(type: string): { type, id }
      // 标记用户意图(如 'user_edit_wordInput');返回 intent 对象,
      // intent 跟随当前 in-flight push,成功后只清「自己的」(payload-binding)

    // ─── 云端 ready 闸门 ───
    setCloudReady(val: boolean): void
      // login 完成 → setCloudReady(true) 解锁 push
      // logout → setCloudReady(false) 锁回去

    isCloudReady(): boolean

    // ─── 拉取 ───
    async loadFromCloud(userId: string): Promise<{
      ok: boolean, data?: object, version?: number, error?: string
    }>
      // GET /api/load,纯 IO

    // ─── 多 tab ───
    initBroadcastChannel(onRemoteVersion: (version: number) => void): void
      // 创建 BC + 监听,收到新 version 时调 onRemoteVersion (caller 决定是否 pull)

    destroyBroadcastChannel(): void
      // unmount 时清

    // ─── beforeunload 同步路径 ───
    async flushSyncBeforeUnload(fullData: object, cachedToken?: string): Promise<void>
      // 用 keepalive fetch / sendBeacon 兜底;caller 必须传同步可取的 fullData(从 localStorage 直读)
      // 和 cachedToken(从 accessTokenRef 取,因为不能 await getSession)

    // ─── 状态读 ───
    getSyncStatus(): { status, lastSyncAt, retryCount, version }
      // 仅读,供 caller debug / UI 显示

    // ─── 强制重置(谨慎用) ───
    forceResetRetry(): void
      // 用户主动点 sync 按钮时,复位 retryCount(避免活锁)
  };
}
```

---

## 3. vocab.js 改动概览(预期 diff 大小)

### 删除
- 10 个 sync 相关 ref 定义(行 3411-3441)→ 0 行(改用 `syncClient.markIntent` / `setCloudReady` 等)
- `_markIntent` / `syncToCloud` / `_doSync` / `_applySyncSuccess` / `_pushSnapshot` / `_broadcastSync` / 常量(行 3437-3699)→ 整段删
- BroadcastChannel mount/unmount(行 4215-4229)→ 改 `syncClient.initBroadcastChannel(handleRemoteVersion); syncClient.destroyBroadcastChannel()`
- `loadFromCloud`(行 3705-3721)→ 整段删,改用 `syncClient.loadFromCloud(userId)`
- 约 **删 280-320 行**

### 新增
- 一次性 `createSyncClient({ ...callbacks })` 创建(在 mount effect 里,约 25 行)
- `syncClientRef.current` 替换原 ref 访问点(约 30-40 处,每处 +0 行,只改方法名)
- 约 **加 30-50 行**

### 净变化
- vocab.js 净减少 **~230-280 行**;函数变少但调用点变多
- 调用点替换:`_markIntent('xxx')` → `syncClientRef.current.markIntent('xxx')`;`syncToCloud()` → `syncClientRef.current.syncToCloud()`;`_cloudReadyRef.current = true` → `syncClientRef.current.setCloudReady(true)`;等

---

## 4. 关键 invariant 保留清单(逐条对应 Explore map §8)

| # | invariant | lib 中如何保留 | 验证方法 |
|---|---|---|---|
| 1 | `_cloudReadyRef` 闸门(等 _applyCloudData 完成才能 push) | lib 内 `cloudReadyRef`,`_doSync` 入口检查;caller 在 `_applyCloudData` 尾调 `syncClient.setCloudReady(true)` | 单测:`syncToCloud` 在 `!cloudReady` 时只设 pending,不发请求 |
| 2 | intent payload-binding({type,id} + `_clearIntentIfMine` 身份检查) | lib 内 `intentRef` 用对象 + `intentSeqRef` 单调 id;`_pushSnapshot` 内捕获 intent 引用,清前比 `===` | 单测:发起 push A(intent A) → 期间 caller markIntent B → push A 成功只清 A,B 保留 |
| 3 | 用户主动 syncToCloud 时复位 retry(防活锁) | lib `syncToCloud` 入口,若 retry > max 自动置 0(就是 vocab 原行为) | 单测:模拟 retry=10,调 syncToCloud → retry=0,发起 push |
| 4 | 409 重推后 rejectedFields → apply serverData + 设 error,不假 synced | lib `_applySyncSuccess` 返回 bool;`_pushSnapshot` 据返回值决定是否清 intent / setSyncStatus | 单测:mock fetch 返回 rejectedFields → onSyncStatus 收到 'error',intent 不清 |
| 5 | 连续 409 union-merge 后必须重推,不假 synced | lib `_pushSnapshot` 第二次 409 时抛错进 `_doSync` retry,绝不 setSyncSynced | 单测:mock fetch 两次 409 + 第三次成功 → 最终 synced,中间不 synced |
| 6 | `_cloudReadyRef` logout 显式设 false | caller 在 logout handler 调 `setCloudReady(false)` | 手测:logout → 立即 login → 必须重新拉云才能 push |
| 7 | wordStatusMap 等级递进 / pet totalFed 防退 / session 防回退 | **不进 lib**,留在 vocab `_applyCloudData` 内 | 不变 |
| 8 | 多设备 / 多 tab 学习中拉云不打断 | `_applyCloudData` 内 activeSessionRef 检查,留 vocab | 不变 |
| 9 | Supabase v2 auth lock setTimeout(0) 死锁修复 | `handleAuthUser` 整段留 vocab,lib 不碰 auth | 不变 |

---

## 5. 风险 + 缓解

### R1 — Refs 从 React 转到 lib 内部,timing 是否一致
- **风险**:lib 内 refs 用 `{current}` 对象,不是 `useRef`;若 caller 在 mount 中 createSyncClient,在 useEffect 中初始化,可能有竞态
- **缓解**:lib factory 返回的实例完全脱离 React 生命周期,refs 在 closure 内持久;只要 caller 保证「在 mount effect 里 create 一次,存 ref」,timing 等价 React useRef

### R2 — 多 callback 传入,vocab 代码改动密度大
- **风险**:`createSyncClient({ getAuthHeaders, onCloudData, ... })` 8+ 个 callback,若 callback 内闭包了 vocab state,可能拿陈旧值
- **缓解**:所有 callback 都包装成 `useRef` 形式(`onCloudDataRef.current = fn; onCloudData: (d) => onCloudDataRef.current(d)`),lib 调 callback 时拿最新闭包

### R3 — BroadcastChannel 通道名
- **风险**:vocab 现用 `'knowu_sync'`,若 history 后续也用同通道可能错乱
- **缓解**:`channelName` option 默认 `'knowu_sync'`,history 后续若需分通道改默认;但**短期 vocab + history 共通道是 OK 的**(都是同一用户的多 tab,version 全局单调)

### R4 — 5 场景手测 false positive
- **风险**:回归测试漏检某个边角 case(如 onAuthStateChange TOKEN_REFRESHED + sync in-flight 时序)
- **缓解**:
  - 0B-gate 观察期 ≥3 天 production Sentry 监控
  - 单测覆盖核心 9 invariant
  - 抽离时 git diff 逐函数对比 vocab 原代码,确认无语义漂移

### R5 — 实际 vocab.js 行数过大,Edit 操作多导致误删
- **风险**:vocab.js ~7400 行,delete 280 行 + insert 30-50 行,中间任何一处 typo 都炸
- **缓解**:
  - 用 git diff 严格检查
  - 抽离时先**注释**原 sync 代码(不删),验证新 lib 工作后再删
  - 每个改动小步 commit,出错可立即 revert 到某一步

---

## 6. 实施顺序(对应 TaskCreate #2-4)

1. **写 `lib/sync-client.js`**(干净 greenfield,跟 vocab.js 平行,不互相依赖)
2. **写 unit test**:覆盖 9 个 invariant + 5 场景核心逻辑
3. **改 vocab.js**:逐函数替换,先注释保留旧代码,build 绿后再删
4. **本地 5 场景手测**:登录 / 多 tab / 删词 / 离线 / 跨设备
5. **commit(注释旧代码版本) + ship 第一波,观察 24h** → 若 production 也绿 → 删旧代码 commit 第二波 → 起 0B-gate 3 天观察

---

## 7. 决策点(创始人审)

**问题 1**:抽离边界是否同意?
- 进 lib:通用编排(debounce / retry / intent / BC / cloudReady gate)
- 留 vocab:`_applyCloudData`(domain merge) / auth 流程 / loadSave / doSave

**问题 2**:API 签名是否同意?
- factory pattern `createSyncClient(options)`
- 8 个必传 callback + 5 个可选配置

**问题 3**:风险 R5 抽离实施方式 — 选哪种?
- (a) **「注释旧代码 → ship 一版 → 跑 24h → 再删旧代码 ship 二版」** ← 推荐,可两段 revert
- (b) 一次性删旧代码 + 加新调用,一个 commit ship → 出错直接 revert 整 commit
- (c) 用 feature flag(`USE_NEW_SYNC_CLIENT`),环境变量切换,有问题瞬间关掉

**问题 4**:5 场景手测之外要不要加 production canary?
- 抽离后先 deploy 到 preview branch 跑几小时,确认 build + 基本 sync 工作,再 merge main → production

回答后我进 Task #2 写 `lib/sync-client.js`。
