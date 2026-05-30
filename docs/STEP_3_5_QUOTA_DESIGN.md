# Step 3+5 设计 — 每日双配额(视角 + Sidekick)接入 + UI

> 送审稿(代码前)。规划 v1.2 §9 Step 3(配额接入)+ Step 5(配额 UI)。核心变现限流机制。
> ⚠️ CLAUDE.md 点名高风险区(multi-tab 防双扣 + sync merge + 扣减时机)。

## 0. 现状

- `lib/daily-quota.js` **纯逻辑全就绪**(canUseLens / recordLensUsage / getRemainingLenses /
  canUseSidekick / recordSidekickEvent / getRemainingSidekick / merge*),幂等(lensKey / eventId union)、
  跨日 rollover、sync merge 已注册进 `progressMergePolicy`。**只差 UI 层接入**(扣减/拦截/显示)。
- 配额(v1.2 §2):视角 guest 1 / free 3 / Basic+ ∞;Sidekick guest 5 / free 20 / Basic+ ∞。
- `UpgradeModal` 已支持 `reason='lens-quota'|'sidekick-quota'`(dismissable,标题就绪)→ 配额用完直接复用。

## 1. 接入点(侦察确认)

| 点 | 位置 | 动作 |
|---|---|---|
| lens 扣减 | `[topicId].js` `fetchAIForTurn` 第一条**非 fallback** AI bubble 写入后 (~717) | `recordLensUsage` + saveAll(幂等 ref 守一次) |
| lens 拦截 | `gatedEnter` 在 tier `allow` 之后加 `canUseLens` 二检 | 不够 → `UpgradeModal reason='lens-quota'` |
| Sidekick 拦截 | `sendSidekick` (~165) 入口 | `canUseSidekick` 不够 → `reason='sidekick-quota'`,return |
| Sidekick 扣减 | `sendSidekick` 成功响应后 | 生成 eventId(`crypto.randomUUID`)→ `recordSidekickEvent` + saveAll |
| 持久化/同步 | `saveAll({historyData:{dailyLensUsage/dailySidekickUsage}})` | **已 wired**(progressMergePolicy merge + sync push) |

## 2. tier 来源(隔离硬约束)

配额数学要原始 `tier`('guest'/'free'/'basic'/'pro')。tier 在懒加载隔离的 `CourseGate`(useUserTier)里。
**方案**:扩展 `onAccessChange(access, topicId, lensId, tier)` 第 4 参带 tier;页面存 `gateResult.tier`,
`daily-quota.js`(纯)在页面算配额。**flag-off → CourseGate 不挂载 → 无 tier → 所有配额逻辑短路**
(扣减/拦截/UI 全 `if (!ENABLE_HISTORY_PAYWALL || !tier) skip`)→ 字节级不变。

## 3. 待定 — 核心决策:multi-tab 防双扣强度

union 幂等天然防「丢扣 / 同一动作重复计」,但**不防同时多 tab 超扣**:guest 配额 1,开 2 tab 各进不同 lens,
都见「0 已用」→ 各扣 → union=2 > 1(超扣 1 个)。

- **方案 A(宽松,MVP)**:只靠 union 幂等,容忍同时多 tab ±N 超扣。规划 §10 风险 B 已判「游客绕配额成本
  高于付费,不阻塞」。代码最简、零新原语。
- **方案 B(严格,规划 §9 字面)**:`navigator.locks`(+ 不支持时 localStorage CAS fallback)串行化
  「读-检-记」跨 tab,杜绝超扣。更稳但代码多、需处理 lock 不可用降级。

**推荐 A**:① 规划风险 B 已定调不阻塞;② 超扣窗口窄(需同一账号同时多 tab 在 sync debounce 内)、
代价低于一次付费;③ MVP 优先。若你更看重「严格不可绕」选 B(我加 navigator.locks + CAS 降级)。

## 4. 待定 — 次要确认(倾向直接定,你否决再改)

- **扣减时机**:lens 在「第一条非 fallback AI bubble」扣(= 课真正开始产出内容,不是点进入/不是 skeleton)。
  fallback/错误 bubble 不扣。同 lens 当天重进不重扣(lensKey 幂等)。
- **配额 vs grandfather**:view-only(已学过)不进对话 → 不扣;重学已用过的 lens → canUseLens 幂等放行。
- **只限 guest/free**:Basic+ 配额 ∞ → canUse* 恒 true,paid 用户零感知。

## 5. Step 5 UI(全部 flag + tier 双 gate,flag-off 不渲染)

- **TopicHero**:intro 屏加 chip「今日 N/M 视角 · 问小 U X/Y」(Basic+ 显示「无限」或不显示)。
- **LensSelector**:每个已用过的 lens 标「✓ 今日已用过」;配额用尽时未用 lens 视觉置灰 + 点击弹 lens-quota。
- **Sidekick 输入框**:上方「剩余提问 X/Y」;用尽 → 输入禁用 + 弹 sidekick-quota。

## 6. 验证计划

- 纯逻辑单测:daily-quota 已有?补扣减/拦截/跨日/merge 边界断言。
- Codex gate-only 复审(隔离 worktree)+ (高风险) 视情况 workflow 多维审。
- Canary:flag-on 模拟 guest/free,验 lens 用尽拦截 + Sidekick 用尽拦截 + chip 显示 + 跨日重置 + 多 tab 行为。
- flag-off:player chunk 零 membership 字节级隔离保持。
