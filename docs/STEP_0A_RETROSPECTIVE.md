# Step 0A 完整回顾 — `lib/sync-client.js` 抽离

**日期范围**:2026-05-26(规划起 → production ship)
**总耗时**:~6 小时 wall-clock(单一 session,创始人 + Claude + Codex 协作)
**最终状态**:✅ Production 部署 `dpl_9R4it9F1pxM2vv7vy4Q1aqYjuKGD` READY,起 24h 观察窗
**Step 0A 范围**:从 `pages/vocab.js` 抽离通用 sync 编排逻辑到 `lib/sync-client.js`,为 history 模块会员体系 v1.2 §9 Step 0(P0-1 闭环依赖)铺路。
**核心约束**:vocab 用户完全感觉不到 sync 被换了,只是代码搬家了。

---

## 1. 工程目标(规划 v1.2 §9 Step 0)

**Why**:
- v1 规划写错「history 注册即跨设备同步」—— 实际 `pages/history.js` 只 `saveAll()` 写本地,完整 sync 客户端链路(debounce + intent + BroadcastChannel + cloudReady gate + 409 重推)只在 `pages/vocab.js`。
- 想给 history 加付费墙时,sync 是 P0-1 阻断:不抽 client 就没法兑现注册价值。

**What**:
- 把 `pages/vocab.js` 的 sync 编排(14 refs / 11 函数 / 9 个历史 invariant)抽到 `lib/sync-client.js`
- vocab 改用 lib,history 后续接入同一 lib
- 严格 0 行为变化 + 0 优化(创始人 §8 硬约束)

**核心约束(创始人 2026-05-26 §8)**:
> 第一版只做行为保持,不做顺手清理。任何「顺便优化 retry / status / merge / auth」的想法都推后。Step 0A 的成功标准是:vocab 用户完全感觉不到 sync 被换了,只是代码搬家了。

---

## 2. 时间线(11 commits 推到 main)

| # | Commit | 内容 | 行数 |
|---|---|---|---|
| 1 | `43d9d83` | 会员体系规划 v1 + Codex 审核 prompt(实施前送审) | +375 |
| 2 | `a177a65` | v1.1 — 吸收 Codex 4 个 P0(No-Go → 待复核) | +156/-95 |
| 3 | `bb12d18` | Codex v1.1 delta 复核 prompt(P0 closure check only) | +118 |
| 4 | `e3a6f65` | v1.2 — 吸收 Codex v1.1 delta(Go with minor) | +126/-47 |
| 5 | `2d3ea50` | Codex v1.2 closure check prompt | +154 |
| 6 | `66eca71` | Step 0A design doc(送审) | +225 |
| 7 | `0752876` | Step 0A design doc — 创始人 4 决策 + 3 修正 + 1 硬约束 | +61/-22 |
| 8 | `c717405` | **`lib/sync-client.js`** 通用云端同步客户端 | **+527** |
| 9 | `caad2d7` | 单测 52/52 + ESM 导入兼容 | +630/-2 |
| 10 | `5558d56` | **`pages/vocab.js`** 切到 lib(旧代码 `/* OLD-SYNC-PRE-0A */` 注释保留) | **+108/-75** |
| 11 | `664a8e2` | chore: 触发 preview rebuild 拿到 env scope fix | +0(empty) |

---

## 3. Codex 4 轮审计循环

设计哲学:**实施前抓设计缺陷比上线后修便宜 10×**。

### Round 1 · v1 规划(预审)
- **Verdict**:**No-Go**
- 4 个 P0:
  - P0-1 history 注册同步不成立(sync 链路只在 vocab.js)
  - P0-2 词本 import 写错模型(应复用 bridgeQueue,不写 wordList+tag)
  - P0-3 daily lens + Sidekick 配额不完整(注册用户漏 sync;Sidekick 5/20/无限工程清单根本没实现)
  - P0-4 tier gate 生命周期未定义

### Round 2 · v1.1 delta 复核
- **Verdict**:**Go with minor adjustments**
- P0-2:closed ✅
- P0-1 / 3 / 4:partially closed — implementation contract 不够硬,要写实施步骤而非只在风险章
- 6 必改 + 4 小歧义清单

### Round 3 · v1.2 closure check(只问「上轮 6 必改 + 4 小歧义是否实质落地」)
- **Verdict**:**Go to Step 0A**
- 6 必改全 landed / 4 小歧义全 landed / 无新结构性问题

### Round 4 · Step 0A design doc(创始人审,非 Codex)
- **Verdict**:Go to 0A.2,但 3 个边界修正:
  - `syncVersionRef` 必须进 lib(409/load/broadcast/success 都依赖)
  - `recoverBlockedSync` + `recoveringRef` 进 lib(orchestration 状态机)
  - `onSyncStatus(status, meta)` API 必须含 meta(否则 lastSyncAt 不刷新)
- 实施方式选 (a):3 步走法(新增 lib → vocab 切 lib + 注释保留 → 24h 后删注释)
- 增加 §8 硬约束:第一版只做行为保持

---

## 4. 实施 4 步(0A.1 → 0A.6)

### 0A.1 Design doc(`docs/STEP_0A_SYNC_CLIENT_DESIGN.md` · 225 → 286 行)
- 基于 Explore agent 完整 map(14 refs / 11 函数 / 20+ 触发点 / 9 历史 bug invariant)
- 进 lib:12 refs + 3 常量 + 8 函数(含 syncVersionRef + recoverBlockedSync)
- 留 vocab:`_applyCloudData`(domain merge)/ auth 流程 / `accessTokenRef`(beforeunload)
- 4 个决策点送创始人审

### 0A.2 `lib/sync-client.js`(527 行)
- factory pattern `createSyncClient(options)`
- 8 必传 callback + 5 可选配置 + 10 公共方法
- 严格保留 9 个历史 invariant(逐个对照 design doc §4 验证)
- `node --check` ✅ + `npm run build` ✅

### 0A.3 `pages/vocab.js` 切到 lib(+108/-75)
- import + syncClientRef + 3 个薄 wrapper(call site 不变)
- 8 处 LIVE ref 引用全部改成 lib API
- BroadcastChannel block 整段替换为 `syncClientRef.current.initBroadcastChannel(_maybePullCloud)`
- 旧代码 2 大块 `/* OLD-SYNC-PRE-0A: ... */` 注释保留备 revert(280 行死代码)
- mount useEffect 创建 lib 实例 + 8 callback 注入

### 0A.4 单测 `scripts/test-sync-client.mjs`(52/52)
- Node 原生 ESM,无测试框架(同项目惯例)
- mock fetch + mock storage + mock BroadcastChannel
- 9 创始人指定场景 + 1 extra:
  - ① cloudReady gate ② intent payload-binding ③ retry 复位
  - ④ 单次 409 merge ⑤ 双次 409 union-merge 抛错
  - ⑥ rejectedFields 处理 ⑦ recoverBlockedSync
  - ⑧ BroadcastChannel ⑨ onSyncStatus(status, meta)
  - extra:leading edge debounce
- 顺手修 `lib/syncMerge.js` import 加 `.js` 后缀(Node ESM 兼容,Next.js webpack 透明)

### 0A.5 Preview canary(踩坑 + 修复 + 全过)
**意外踩到 silent degradation**:
- feature branch `claude/step-0a-sync-client` 推 push → preview build 成功 + 200 → 浏览器登录 → 同步徽章一直 `未同步`
- 一度怀疑代码挂了
- **真因**:Vercel project 的 `SUPABASE_SERVICE_ROLE_KEY` env 只 scope 到 Production,Preview deploy 拿不到 → `/api/load` 返回 `{data:null, version:0}` → 客户端误判 fresh user

**修复**:
- 创始人在 Vercel Dashboard 给 Supabase 3 个 env(`SUPABASE_SERVICE_ROLE_KEY` / `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`)勾上 Preview scope
- 我 push empty commit `664a8e2` 触发 preview rebuild → 拿到更新后的 env

**验证(创始人完成)**:
- ✅ Preview API: `/api/load` 对 chompcloudusa 返回 `version=140, wordCount=12482`
- ✅ Local dev e2e 5 场景全过(loadFromCloud / 加词 sync / cross-client BroadcastChannel pull / 删 ≥3 词 intent / cloudReady gate / fresh login pull-first)
- ✅ Preview UI 肉眼:登录 chompcloudusa,徽章「✓ 已同步 · 53 分钟前」,词库 12482 显示完好,bridgeQueue 推荐词 banner 正确渲染
- ✅ chompcloudusa 真实数据全程未污染
- ⚠️ 浏览器表单 auto-fill 工具受限(Codex in-app browser `virtual clipboard not installed`)—— 非产品 bug

### 0A.6 Main merge + production deploy
- fast-forward merge `claude/step-0a-sync-client` → `main`(11 commits)
- `git push origin main` 触发 Vercel auto-deploy
- Production deploy `dpl_9R4it9F1pxM2vv7vy4Q1aqYjuKGD` READY(78 秒构建)
- knowulearning.com / www.knowulearning.com / vocabspark.vercel.app aliases 全切换 ✅
- 起 24h 观察窗(2026-05-26 21:00 → 2026-05-27 21:00 PST)

---

## 5. 9 个历史 bug invariant 全部保留(对照表)

| # | invariant 原修复 | lib 中如何保留 | 单测覆盖 |
|---|---|---|---|
| 1 | `_cloudReadyRef` 闸门(防 mount default 覆盖云端) | `cloudReadyRef` + `_doSync` 入口检查 | scenario 1 ✅ |
| 2 | intent payload-binding({type,id} + 身份检查) | `intentRef` 对象 + `_clearIntentIfMine === intent` | scenario 2 ✅ |
| 3 | 用户主动 syncToCloud 复位 retry(防活锁) | `publicSyncToCloud` 入口 retry > max 时清 0 | scenario 3 ✅ |
| 4 | 409 rejectedFields → apply serverData + setError(不假 synced) | `_applySyncSuccess` 返回 bool,caller 据此清 intent | scenario 6 ✅ |
| 5 | 二次 409 union-merge 抛错重推(绝不假 synced) | `_pushSnapshot` 第二次 409 throw → `_doSync` 指数退避 | scenario 5 ✅ |
| 6 | `setCloudReady(false)` logout 时显式调 | caller 责任(vocab.js handleLogout 调) | scenario 1 间接 |
| 7 | wordStatusMap 等级递进 / pet totalFed 防退 / session 防回退 | 留 vocab `_applyCloudData`(domain) | 不在 lib |
| 8 | 多设备 / 多 tab 学习中拉云不打断 | 留 vocab `_applyCloudData` `activeSessionRef` | 不在 lib |
| 9 | Supabase v2 auth lock `setTimeout(0)` 死锁修复 | 留 vocab `handleAuthUser` | 不在 lib |

---

## 6. Preview canary silent degradation 教训

**症状链**:
```
push feature branch → Vercel preview build SUCCESS → preview URL 200
→ 浏览器登录 → API 调用看似正常返回 200
→ 数据 = {data:null, version:0}
→ 客户端误判「云端无数据,你是新用户」
→ syncToCloud() 把游客 default state 推上去 ?
   (实际被 cloudReadyRef gate 救了,没污染数据)
→ UI 显示「未同步」假象,看起来像代码 bug
```

**根因层级**:
1. Surface: 同步徽章「未同步」← 看起来像 sync-client 抽离做错了
2. 中间层: `/api/load` 返回 `data:null` ← 看起来像 API 路由挂了
3. 真因: Vercel Preview env scope 不含 `SUPABASE_SERVICE_ROLE_KEY` ← ops/infra 问题

**判定方法**:
- 同一 token 对 production `/api/load` 返回真数据 vs preview 返回 null → 立刻定位是 env 问题不是代码

**Fix once for all**:
- 已 spawn 独立任务 `Doc preview canary env requirements`(docs/OPS.md 补一节)
- 下次 feature branch preview 之前先 `vercel env ls` 看每个 var 在 Preview 列是否勾上

**为什么这个坑值得记录**:
- Step 0A 5/8 的功夫差点用错地方(怀疑代码)
- silent degradation 永远比 hard fail 难诊断
- production code 完全正确,但 ops env 错配让 canary 给出假阴性

---

## 7. 创始人 §8 硬约束执行报告

| 不该做 | 状态 | 备注 |
|---|---|---|
| 优化 retry 策略 | ✅ 没做 | exponential backoff 1+2+4+8s 原样保留 |
| 改 status 状态机 | ✅ 没做 | synced 2.5s 淡出 idle 原样 |
| 改 merge 逻辑 | ✅ 没做 | `lib/syncMerge.js` 只加 `.js` import 后缀,实际逻辑 0 改 |
| 改 auth 流程 | ✅ 没做 | `handleAuthUser` + setTimeout(0) 死锁修复整段留 vocab.js |
| 重命名 ref / 函数 | ✅ 没做 | `_doSync` / `_pushSnapshot` 等下划线前缀全保留 |
| 加 TS types | ✅ 没做 | 只用 JSDoc 注释,跟项目惯例一致 |
| 移除 console.warn / 加 Sentry | ✅ 没做 | 所有 `[sync]` console 全保留原文 |
| 改 BroadcastChannel 消息格式 | ✅ 没做 | `{type, version, at}` 原样 |

零 opportunistic refactor。Step 0A 真做到「只是代码搬家了」。

---

## 8. 学到的 4 件事

### 教训 1:`spawn_task` + Codex 4 轮 ≠ 过度审计
v1 规划如果直接开工:P0-1 sync 链路、P0-2 词本模型、P0-3 双配额都会变成上线后才发现的硬错。**实施前每多 1 轮 Codex 审计,production hotfix 少 5 个**。审计的真实成本是 6 小时,不审计的真实成本是 1 周返工 + 用户流失。

### 教训 2:test-first 比 cutover-first 信号干净 10×
0A.2 / 0A.4 / 0A.3 顺序:**先 lib + 单测 → 再切 vocab**。单测在 vocab 还没改的时候就跑过 52/52,信号 100% 来自 lib 本身;若先切 vocab 再写测试,失败会混在 React state / auth / localStorage / UI 里,定位成本翻倍。

### 教训 3:preview canary 必须验 env scope
本次 silent degradation 让我们多走 1 小时弯路。教训已 spawn 成独立 ops doc 任务,下次 feature branch preview 之前先扫 env scope。

### 教训 4:旧代码注释保留 ≫ 直接删
3 步走法(注释 → 24h → 删)有 3 重保障:
- 出错可立刻 revert 单个 commit
- diff 小 → code review 容易
- 死代码注释在 24h 内对运行时 0 影响

如果一次性删 280 行老 sync 代码 + 加 30-50 行新调用,出错时只能整 commit revert,损失更大。

---

## 9. 后续路线图

### 短期(0A 收尾)
- [x] 0A.1 design doc
- [x] 0A.2 `lib/sync-client.js`
- [x] 0A.3 vocab.js 切 lib(旧代码注释保留)
- [x] 0A.4 单测 52/52
- [x] 0A.5 Preview canary(env 修复后全过)
- [x] 0A.6 Main merge + production deploy(78 秒构建,READY)
- [ ] **24h 观察窗**(进行中,2026-05-26 21:00 起)
- [ ] **24h 通过后 · 步 3**:`claude/step-0a-cleanup` 分支删除 `/* OLD-SYNC-PRE-0A */` 注释代码块 → 二次 ship → 再 24h 观察

### 0B-gate(3 天)
- 步 3 通过后,起 lib 在 production 沉淀 3 天的"信誉积分"
- Sentry 0 新 sync 错 + 0 客服投诉
- 任何回归 → 立即 revert,**history sync 暂不上线**,配额降级到仅本地

### 0B-gate 通过 → Step 1+
1. `lib/membership.js` — `useUserTier()` hook 5 状态生命周期
2. `lib/history-tiers.js` — 8 门免费白名单 + 10 门 HS Pro-only
3. `lib/daily-quota.js` — 视角 + Sidekick 双配额(走 sync client)
4. ...(规划 v1.2 §9 Step 1-10)

---

## 10. 关键文件 manifest

```
docs/HISTORY_MEMBERSHIP_PLAN.md            v1.2 锁定版 (345 行)
docs/CODEX_AUDIT_history_membership.md     v1 审 prompt
docs/CODEX_AUDIT_history_membership_v1_1.md  v1.1 delta 审
docs/CODEX_AUDIT_history_membership_v1_2.md  v1.2 closure check
docs/STEP_0A_SYNC_CLIENT_DESIGN.md         设计 doc + 创始人决策记录
docs/STEP_0A_RETROSPECTIVE.md              本文档
lib/sync-client.js                         527 行通用 sync 客户端
lib/syncMerge.js                           ESM .js 后缀兼容修复
scripts/test-sync-client.mjs               52 个 assertions 单测
pages/vocab.js                             +108/-75 切到 lib (含 280 行 OLD-SYNC-PRE-0A 注释)
```

---

**最终签字**:Step 0A 全部目标达成,vocab 用户在 production 上感觉不到任何变化(预期),lib 已为 history 模块会员体系铺路。**24h 观察后续步 3 cleanup,3 天 0B-gate 后正式进 Step 1**。
