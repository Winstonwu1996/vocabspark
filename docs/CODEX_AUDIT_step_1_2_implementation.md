# Codex 审计 prompt — Step 1 + Step 2 实施审计

你是独立代码审核员。这是**实施后审计**(vs 之前的规划审计),目标是给出 **Go / No-Go** 决定:Step 1 (`lib/membership.js`) 和 Step 2 (`lib/history-tiers.js`) 的实施代码是否可以作为后续 Step 3-10 的基础。

跟之前规划轮的差别:这次审的是**真代码**,不是设计 doc。请实地读代码 + 跑单测,挑可能在生产用户身上炸的实际 bug。

## 审核范围(精确 commit + 文件清单)

```bash
# Step 1 实施
git show a387e23  # lib/membership.js (初版, 含纯逻辑)
git show 5c419eb  # 把纯逻辑抽到 lib/membership-logic.js + 87 单测

# Step 2 实施
git show 1dde918  # lib/history-tiers.js + 112 单测
```

**文件清单**(请实地读 + 跑单测):
- `lib/membership-logic.js`(141 行 · 纯逻辑)
- `lib/membership.js`(312 行 · React hook,含 useEffect / Supabase auth 订阅 / 30s 轮询)
- `scripts/test-membership-logic.mjs`(87 assertions)
- `lib/history-tiers.js`(195 行 · 纯逻辑)
- `scripts/test-history-tiers.mjs`(112 assertions)

**辅助参考**(只读):
- `docs/HISTORY_MEMBERSHIP_PLAN.md` v1.2 §2 / §3 / §4 / §7 / §10 G — 规划锁定版
- `pages/api/stripe/check-subscription.js` — Step 1 调的 API endpoint
- `pages/vocab.js:4134` 起 `_loadTier` — 现有 inline 实现,两边共存
- `lib/history-grade-map.js` — Step 2 动态读 HS 列表的源
- `lib/history-storage.js:395` 起 `getLearningReceipt` — 未来 hasCompletedLens 的实际数据源

## 我已经验证过的(不必重复)

- `node --check` 全过
- `npm run build` 全绿
- `node scripts/test-membership-logic.mjs` → 87/87 pass
- `node scripts/test-history-tiers.mjs` → 112/112 pass
- 0 行触及 `pages/vocab.js` / `pages/history/*.js`(纯新建 lib)
- v1.2 §4 「未来 HS 课自动 Pro-only」规则:**实际 14 门 HS** 全部归 Pro,含 v1.2 后加的 4 门(haitian-revolution-1791 / meiji-restoration-1868 / russian-revolution-1917 / contemporary-us-1980)

## 请重点审核(按风险排序)

### P0 — 实际能炸生产的 bug

**P0-1 React hook 生命周期未单测,可能漏 bug**
`lib/membership.js` 的 `useUserTier` hook 把纯逻辑抽到 `membership-logic.js` 单测(覆盖 87 assertions),但 hook 本身的 React lifecycle 完全没单测:
- mount useEffect 初始化 supabase.auth.getSession + onAuthStateChange 监听
- 30s 轮询的 setInterval / clearInterval
- retryTimerRef 的 setTimeout / clearTimeout(unmount 时清)
- 切用户时(`userIdRef.current !== userId`)丢弃旧响应的逻辑
- `mountedRef.current` 守卫

实地读 lib/membership.js 行 200-280 区间的 useEffect, 找:
- 内存泄漏(unmount 后 setTimeout 还在跑 setState)
- userId 切换时的 race(旧 user 的 in-flight loadTier 完成时还在写 state)
- `onAuthStateChange` 的 unsubscribe 是否正确处理 Supabase v2 API 返回结构
- 多 tab / focus / token refresh 时的 TOKEN_REFRESHED noop 是否对(vocab.js 是这样,但拷过来对吗?)
- `skipPolling` 在 useEffect 依赖里,改了会怎样

→ 输出每个具体风险点 + lib/membership.js 的行号

**P0-2 vocab.js + 新 hook 共存的 race**
两边都用同一个 `/api/stripe/check-subscription` + 同一个 `localStorage.vocabspark_tier` key:
- vocab.js 行 4134 `_loadTier` 的 retry 机制(3 次 isActive:false 才 commit free)
- lib/membership.js 的 retry 机制(同样 3 次)
- localStorage cache 由 vocab.js 写,由 lib/membership.js 通过 `getCachedTier()` 读 — 两边写法 / 时机 不一致会不会让 cache 出错乱

如果 vocab.js 和 useUserTier 在同页同时挂载(假设未来真用 history-on-vocab-page),会同时跑 retry,导致 6 次 API 调用而不是 3 次。这是浪费但不致命。请确认是否还有别的 race。

→ 是否需要把两边共用 cache key 文档化 / 加 namespace?

**P0-3 `tierMeetsRequirement` fail-closed 对 unknown tier 的行为**
```js
if (!TIER_ORDER[userTier]) return false;  // unknown user tier
if (!TIER_ORDER[requiredTier]) return false;  // unknown required tier (?)
```
未知 `requiredTier` 返回 false → **没人能进**。如果上游 caller(未来 UI)传错字段(typo),所有用户都被锁出。这是 fail-closed 对的方向但**没有 warning**,生产上会变成 silent degradation(同 Step 0A 上次踩的 preview env 坑)。

请评估:
- 是否需要 `console.warn` 告警未知 tier?
- 是否需要在 dev mode `throw`?

**P0-4 `canAccessLens` `hasCompletedLens` 必须 caller 注入**
设计成 caller 注入是为了避免 lib/history-tiers 反向依赖 lib/history-storage(localStorage)。但实际 caller(未来 UI)可能忘记传 → default `undefined` → 当作未完成 → grandfather 失效 → 老用户被锁出 Pro 课。

请评估:
- 这种 「caller 忘记传 = 老用户被锁」 是不是太脆?
- 是否应该有 fallback:lib/history-tiers 提供一个 `withDefaultGrandfatherReader()` 帮助函数,可选注入 `learningReceipts` 对象,内部自动 boolean 化?
- 或者把 `canAccessLens` 参数顺序改成 `(topicId, lensId, userTier, opts)` 让 caller 选择传 `hasCompletedLens` 或 `learningReceipts`,fail-closed?

**P0-5 HS_OVERRIDE_LIST = [] 含义清晰度**
当前 14 门 HS 全部 Pro-only,包括 v1.2 后加的 4 门:
- haitian-revolution-1791
- meiji-restoration-1868
- russian-revolution-1917
- contemporary-us-1980

这 4 门没在 v1.2 §4 里 explicit 列出。请商业判断:
- 这 4 门内容深度真的够 HS / AP 高阶吗?(创始人 explicit 决策过吗?)
- 还是应该 HS_OVERRIDE_LIST 把这 4 门拉到 basic / free?
- 如果创始人没看过,代码现状(自动 Pro)对吗?

→ 输出建议:维持 / 改 default override / 标 TODO 等创始人决策

### P1 — 设计 / 测试 / 文档质量

**P1-1 lib/membership-logic.js 与 lib/membership.js 双 export**
现在 lib/membership.js 从 logic 文件 import + re-export 全部常量 / helpers。caller 可以两个路径都 import 同一个东西:
```js
import { TIER_STATES } from '../lib/membership';
import { TIER_STATES } from '../lib/membership-logic';
```
两个都 work, 同一个 reference. 但单测 import logic, UI 大概率 import membership. 是否会有迷惑?

请评估:
- 是否需要在 lib/membership.js 加 JSDoc 「caller 必须 import 这个文件,test 才 import logic」
- 或者把 logic 文件改名 `_logic.js` 暗示 internal?
- 或者根本不 split,让 logic 留在 membership.js 里,单测用 mock react/supabase 模块的方式跑?

**P1-2 useUserTier hook 的 isPro / isBasic / isActive helper 字段**
当前返回:
```js
isActive: state === TIER_STATES.ACTIVE,
isPro: state === TIER_STATES.ACTIVE && tier === 'pro',
isBasic: state === TIER_STATES.ACTIVE && tier === 'basic',
```
没有 `isFree` / `isGuest` / `isLoading` / `isError`。caller 想判 「正在 loading」 要写 `state === 'loading'` 字符串。

请评估:
- 是否应该加全套(isLoading / isError / isGuest / isFree)?
- 还是只 helper paid 状态(因为 paywall 主要关心付费态)?

**P1-3 单测覆盖率**
Step 1 单测 87 个 + Step 2 112 个 = 199 个 assertions. 但:
- React hook 0 覆盖
- supabase auth 流程 0 覆盖(getSession / onAuthStateChange / unsubscribe)
- 30s 轮询 0 覆盖
- 真的 fetch /api/stripe/check-subscription 0 覆盖

这部分准备留给 Step 4-10 接 UI 时 integration smoke. 你认为这个 trade-off 是否合理?

**P1-4 `getTopicAccessTier` 的优先级是否合理**
当前:guest 试用 > free 白名单 > Pro-only > 默认 basic

边界:
- 如果某天有 1 门 HS 课同时被加进 FREE_TOPIC_WHITELIST(运营失误),`getTopicAccessTier` 返回 'free' 而不是 'pro' — 是 fail-open 路径,业务上算 bug
- 反向:如果 GUEST_TRIAL_TOPIC 被改成一门 HS 课(运营失误),会返回 'guest' — 游客能学 HS,业务上算 bug

请评估:
- 是否需要 `console.warn` 告警这种内部不一致?
- 单测是否需要加「FREE_TOPIC_WHITELIST 里没有 HS 课」「GUEST_TRIAL_TOPIC 不是 HS」的 invariant 测试?

**P1-5 `getTopicCountsByTier` 对 v1.2 实际生效**
v1.2 §7 Upgrade modal 文案模板:
```
          游客    Free    Basic($20)   Pro($50)
课程数:    1      8       41          51
```

如果 caller 传入「全 51 个 available topic ID」,理论应该得到:
- guest=1, free=8 (其中 magna-carta-1215 同时是 guest+free 白名单, 但应只算 1 次 in guest)
- pro=14 (HS 自动归)
- basic = 51 - 1 - 8 - 14 = 28

但 v1.2 §7 写的是 "41 (G5-G8)" 和 "51 (+HS)" — 数字不一致(41 = basic 28 + free 8 + guest 1 = 37,差 4)。Codex 帮算下,看 v1.2 文案是不是过时了,还是 getTopicCountsByTier 有 bug。

→ 如果 doc 数字过时,后面 Upgrade modal 实际显示要用 hook 真值;
   如果 hook 算错,要修。

### P2 — 长期可维护性

**P2-1 lib/history-tiers.js 直接 import COURSE_GRADE_MAP**
当前直接 `import { COURSE_GRADE_MAP } from './history-grade-map.js'`。如果未来某天 grade-map 文件改名 / 改 export,这里要跟着改。是否值得加一层 indirection(如 `getGradeMap()` 函数)?

(注:这个 import 已经 work, 不阻塞,留给后续重构)

**P2-2 hashUserId 强度**
djb2 hash 是 32-bit, 51 用户基本不会碰撞。但如果上量到 1M+ 用户,碰撞概率会变。 trackEvent 用碰撞值会让两个用户的事件归并。

→ 是否值得换 sha256 / crypto.subtle?

## 输出格式

```md
## VERDICT
[ ] Go — 实施代码可作 Step 3-10 基础,无阻断 bug
[ ] Go with minor adjustments — 必须改这些点才能进 Step 3
[ ] No-Go — 有结构性问题,需要回 Step 1/2 重新实施

## P0 必修(若有)
1. [P0-X] <短标题>
   - 风险:
   - 推荐改法 + 行号:
   - 测试补丁(如适用):
2. ...

## P1 强烈建议
...

## P2 备注
...

## 你认为代码遗漏的角度
(请挑超出大纲的视角 — 安全 / 性能 / 国际化 / 可访问性 等)
```

## 关键提示

- 这是实施审计,不是规划重审。请**实地读代码 + 跑单测**,挑可能在生产用户身上炸的 bug
- 如果 P0 项 0 个 → 必须 Go(即使 P1/P2 有调整建议,那些可以推后)
- 如果 P0 ≥ 1 → 必须 Go with adjustments 或 No-Go
- 任何「应该用 X 框架而不是 vanilla JS」之类的品味建议归 P2,不阻断
- 请尊重创始人 §8 硬约束(Step 0A 立下的「只做行为保持」原则) — Step 1+2 是新建 lib 不受此约束,但可以学习它的精神
- 我倾向 lib 层尽量稳健 + 单测充分,UI 层再灵活
