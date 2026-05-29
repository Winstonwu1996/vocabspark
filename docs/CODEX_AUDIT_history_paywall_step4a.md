# Codex 审计 prompt — Step 4a (CourseBrowser 锁标 + UpgradeModal 接入)

你是独立代码审核员。实施后审计,给 **Go / No-Go**。范围:Step 4a —— history paywall 第一个 UI 接入,把锁标 + UpgradeModal 接进 `/history` 首页 CourseBrowser,`ENABLE_HISTORY_PAYWALL` flag 默认 off。

**这轮最高关注点**:flag off 时生产行为是否**真零变化**(创始人硬要求),以及 flag on 时有没有误放行 / 误锁。这是 paywall 第一次碰 UI runtime,必须确认 flag-off 安全 + flag-on 逻辑正确。

## 审核范围(精确文件 + commit)

```bash
git show 7f7d219  # Step 4a: flag + CourseBrowser 拆 paywall + UpgradeModal a11y
git show 42be02c  # Step 6: UpgradeModal 纯组件
# 注: 7f7d219 之后还有一个 prop-spread patch (CourseBrowserPaywall 改 {...props} 透传), 一起审
```

文件清单(实地读):
- `lib/history-paywall-flag.js`(新 · feature flag)
- `components/history-engine/CourseBrowser.js`(拆 CourseBrowserBase / CourseBrowserPaywall)
- `components/history-engine/UpgradeModal.js`(纯展示组件)

辅助参考(只读 · 这些已过 Codex 审 + 上线):
- `lib/membership.js` — useUserTier hook (5 状态)
- `lib/history-tiers.js` — canAccessTopic / getTopicAccessTier / getAccessibleTopicCounts
- `docs/HISTORY_MEMBERSHIP_PLAN.md` v1.2 §3 (8 门白名单) + §7 (三维对照表) + §8 (锁课 UI)

## 我已经验证过的(不必重复)

- `npm run build` 全绿;`node scripts/test-history-tiers.mjs` 130/130
- **浏览器 flag OFF**:`/history` 无锁标 + header + 点击提示 + 15 卡 = SSR 逐字不变
- **浏览器 flag ON + free tier**:G7 tab 12 门 basic 锁 / 3 门未锁(唐宋盛世+大宪章+马里帝国 = free 白名单),符合 v1.2 §3
- **未能验证**:modal 点击弹出 — 本地 sandbox dev server 对所有页面 (含 home) React 不 hydrate (环境问题,非代码)。这个缺口我计划 preview canary 补测。

## 请重点审核(按风险排序)

### P0 — flag off 零行为变化(创始人硬要求)

**P0-1 flag off 时是否真的不调 useUserTier / 不发网络请求**
读 `CourseBrowser` 主函数:
```js
export function CourseBrowser(props) {
  if (!ENABLE_HISTORY_PAYWALL) return <CourseBrowserBase {...props} />;
  return <CourseBrowserPaywall {...props} />;
}
```
确认:
- flag off → 只渲染 CourseBrowserBase,**完全不挂载 CourseBrowserPaywall**,因此 useUserTier 的 mount effect(supabase.auth.getSession + /api/stripe/check-subscription)根本不跑。对吗?
- `import { useUserTier } from '../../lib/membership'` 在文件顶部 —— 这个 import 本身有没有副作用?(membership.js 顶层有没有立即执行的代码 / Date / supabase 调用?)实地读 lib/membership.js 顶部 + lib/membership-logic.js 顶部确认纯定义无副作用。
- CourseBrowserBase 收到 paywall props(userTier/onLockedClick)时,flag off 路径下这俩是 undefined → lockPropsFor 返回 {} → CourseCard 行为逐字不变。确认这条链无任何分支泄漏。

→ 输出:flag off 是否 100% 零行为变化 + 零新网络调用

**P0-2 flag 是 env 常量, 分支稳定性**
`ENABLE_HISTORY_PAYWALL` 来自 `process.env.NEXT_PUBLIC_ENABLE_HISTORY_PAYWALL === 'true'`,模块加载时求值一次。CourseBrowser 据此选 CourseBrowserBase / CourseBrowserPaywall。
- 确认这个值在 session 内绝不变 → React 渲染的组件类型稳定 → 不违反 hooks 规则(同一 CourseBrowser 实例不会一会儿渲染 Base 一会儿 Paywall)。
- NEXT_PUBLIC_ 前缀在 Pages Router 下:build 时 inline 还是 runtime 读?确认 flag 翻转需要 rebuild 还是改 env 重启即可。这影响 canary 怎么开 flag。

### P1 — flag on 逻辑正确性

**P1-1 loading 窗口误放行风险**
CourseBrowserPaywall:
```js
var userTier = tierInfo.isActive ? tierInfo.tier
  : (tierInfo.state === 'free' ? 'free'
  : (tierInfo.state === 'guest' ? 'guest' : null));
```
tier `loading` / `error` → userTier = null → lockPropsFor 返回 {} → **不锁任何课**(乐观放行)。
- 这是 browse 页(不是进课硬 gate),loading 期不锁 → 用户能看到全部课卡可点。点了超 tier 的课会怎样?**Step 4a 没接进课拦截**(那是 Step 4b),所以 loading 期点超 tier 课 → 走原 onSwitch → 进了播放器。这是不是 paywall 漏洞?
- 我的判断:Step 4a 只是首页锁标装饰,真 gate 在 Step 4b 单课 mount。loading 期(通常 <1s)的乐观放行可接受,因为真拦截在进课时。请确认这个分层合理,还是 Step 4a 就该在 loading 期显示 skeleton/锁?
- error 态(tier 查询 3 次失败)→ userTier=null → 不锁。这会让 Pro 课对查询失败用户显示可点。同样靠 Step 4b 兜底。请评估 error 态在首页不锁是否可接受。

**P1-2 锁标只影响首页 CourseBrowser**
确认 paywall 改动只作用于 `/history` 首页:
- `CourseBrowser` 被谁 import?(应该只有 `pages/history/index.js`)
- `ThroughLineMap` 别名(同文件导出,单课页底部"换一课"曾用)—— 它直接渲染 ThroughLineView,**不传 userTier/onLockedClick** → 不锁。确认这条路径没被 paywall 影响。
- grep `CourseBrowser` / `ThroughLineMap` 的所有 import 点,确认锁标不会泄漏到单课页 / Atlas / 其它地方。

**P1-3 UpgradeModal 数据正确性**
- `getAccessibleTopicCounts(availableIds)` 传进 modal 显示课程数。availableIds 来自 `TOPIC_REGISTRY.filter(r => r.available)`。确认这个累计算法在 modal 里显示成 1/8/41/51(而不是互斥分桶)。
- `requiredTier={getTopicAccessTier(lockedTopicId)}` —— 点哪门锁课就显示那门的 required tier。确认 basic 课显示"升级 Basic",HS 课显示"升级 Pro"。
- modal `onUpgrade` → `router.push('/plan')`。确认 /plan 路由存在且能落地。

### P1 — 交互验证缺口

**P1-4 modal live 点击未验证 — 是否必须 preview canary**
我本地没能验证「点锁课 → 弹 modal」因为 sandbox dev React 不 hydrate。
- 你读代码判断:`onClick → handleClick(locked 分支) → onLockedClick(t.id) → setLockedTopicId → {lockedTopicId && <UpgradeModal/>}` 这条链有没有 bug?
- 是否同意「必须 preview canary 在能 hydrate 的环境补测才能上 prod」?还是你读代码就有足够信心?

### P2 — 细节

**P2-1 CourseCard locked 分支的点击语义**
locked 时 `handleClick = function(){ if (onLockedClick) onLockedClick(t.id); }`。如果 flag on 但 onLockedClick 没传(理论不会,但防御)→ 点击 noop。确认这个兜底合理(不会误走 onSwitch 进课)。

**P2-2 手机宽度三维对照表**
UpgradeModal 表格 6 行 × 5 列,maxWidth 440。窄屏(<400)会不会挤?(创始人提过,非阻断,接入后看)

## 输出格式

```md
## VERDICT
[ ] Go — Step 4a 可继续 (Codex 通过, 待 preview canary 补 modal 验证)
[ ] Go with minor adjustments
[ ] No-Go

## P0 结论 (flag off 零变化)
P0-1: ...
P0-2: ...

## P1 / P2
...

## modal live 验证: 必须 preview canary? (Y/N + 理由)

## 你认为遗漏的角度
```

## 关键提示

- 最重要:**P0-1 flag off 零行为变化**。这是创始人硬要求 + 生产用户保护的核心。如果你发现 flag off 有任何行为漂移 / 新网络调用 → 必须 No-Go。
- Step 4a 故意不做进课拦截(留 Step 4b)。loading/error 期首页不锁是有意的分层,不是 bug —— 但请确认这个分层在 Step 4b 接上前不会造成「付费课被免费学」的真实漏洞窗口。
- modal live 未验证是已知缺口,我会 preview canary 补。你只需判断代码逻辑对不对 + 是否同意 canary 是必要的补测手段。

---

# Round 2 复审 — P0-1 修复后 (4fd4998)

Round 1 你给 No-Go (P0-1): `CourseBrowser.js` 顶层静态 import `useUserTier` → membership → supabase, 把 paywall 代码打进 flag-off 的 `/history` bundle。已修。本轮请确认 P0-1 实质关闭。

## 范围边界澄清 (重要 — 防止被不一致信息干扰)

**Round 1 的前提需要修正**: "以前 /history 没有 supabase import" 不准确。
- `/history` 基线 (origin/main, paywall 之前) 已通过 `pages/history/index.js → BrandNavBar → UserCenter (UserAvatar) → 静态 import '../lib/supabase'` 初始化 Supabase auth client。
- `components/UserCenter.js:5` 是静态 `import { supabase }`, `UserAvatar` 同模块导出, BrandNavBar 取 UserAvatar 即拉整模块。
- 所以 chunk 802 (supabase GoTrue) 在 `/history` graph 里是 **baseline**, 非本次引入。

**因此 Step 4a 的 P0 目标精确表述为**:
> flag off 时, **不新增 paywall / membership 引入的** runtime —— 不新增 Supabase auth 初始化, 不触发 `useUserTier`, 不调 `/api/stripe/check-subscription`。
> **不是**「/history 全局无 Supabase」(那个 baseline 就有, 不在本次范围)。

## 审核范围

```bash
git diff f28f207..4fd4998   # Round 1 → P0-1 修
```
关键文件:
- `components/history-engine/CourseBrowser.js` (顶层 import 改 + dynamic 懒加载)
- `components/history-engine/CourseBrowserPaywall.js` (新 · 隔离 paywall 依赖)

## 我已验证 (附证据, 请独立复核)

1. **CourseBrowser.js 顶层 import 清单** (请 grep 确认):
   - ✅ 无 `membership` / `useUserTier`
   - ✅ 无 `UpgradeModal`
   - ✅ 无 `useRouter`
   - ✅ 无直接 `supabase`
   - 保留: react, next/dynamic, theme, history-topics, history-grade-map,
     history-tiers (纯模块无 supabase), history-paywall-flag, ./theme
2. **flag off 不触发 dynamic import**: `CourseBrowser` flag off → `<CourseBrowserBase/>`,
   `CourseBrowserPaywallLazy` 永不渲染 → `import('./CourseBrowserPaywall')` 不执行。
3. **bundle 层 (build-manifest + chunk grep)**:
   - `/history` 页面 chunk (`pages/history-*.js`) **不含** `check-subscription` / `tier_load_error` / `UpgradeModal` 组件体串
   - membership 代码落在懒块 `812-*.js` (+ vocab/plan 页, 它们本来就用)
   - chunk 802 (supabase) 仍在 /history graph — 经查是 BrandNavBar→UserCenter baseline, 非本次
4. `node scripts/test-history-tiers.mjs` → 130/130
5. `npm run build` 全绿

## 请重点确认

**R2-1 P0-1 是否实质关闭**
- grep `CourseBrowser.js` 顶层 import, 确认无 membership/supabase/UpgradeModal/useRouter
- 确认 flag off 路径 (`<CourseBrowserBase/>`) 不可能触发 `import('./CourseBrowserPaywall')`
- 确认 flag off 时不存在 `useUserTier` 调用 / `/api/stripe/check-subscription` 请求 / membership 侧 supabase 调用
- 同意「BrandNavBar→UserCenter 既有 supabase 是 baseline, 不算本次引入」吗?

**R2-2 dynamic ssr:false 的 UX 影响 (新增关注)**
`CourseBrowserPaywallLazy = dynamic(() => import('./CourseBrowserPaywall'), { ssr: false })`
- flag ON 时, ssr:false 意味着 CourseBrowser 在 SSR + 首屏 client render 时返回 null/占位, 懒块加载后才渲染课表。这会不会让 flag-on 的 `/history` 首屏短暂空白 (课表闪现)?
- 这个空白窗口可接受吗? 还是该给 dynamic 加 loading 占位 (如先渲染 CourseBrowserBase 不锁版, 懒块到位再加锁)?
- preview canary (flag on) 能否覆盖这个 UX? 还是需要额外处理?

**R2-3 回归 Round 1 其它结论**
Round 1 你已确认 (除 P0-1):
- getAccessibleTopicCounts 返回 1/8/41/51 正确
- CourseBrowser 只被 /history import, 没泄漏播放器/Atlas
- {...props} patch 正确
- loading/error 乐观放行 Step 4a 可接受 (前提 Step 4b 做真 mount gate)
- modal 点击逻辑代码通, 但需 canary live 验 (Round 1 你被 Vercel SSO 挡住)
请确认 P0-1 修复**没有破坏**上述任何一条。

## 输出格式

```md
## VERDICT (Round 2)
[ ] Go — P0-1 实质关闭, Step 4a 可继续 (待 canary modal live 验)
[ ] Go with minor adjustments
[ ] No-Go — P0-1 仍未关闭 / 修复引入新问题

## P0-1 关闭确认
- 顶层 import 干净: Y/N
- flag off 不触发 dynamic import: Y/N
- flag off 无新 paywall runtime: Y/N
- baseline supabase 边界认同: Y/N

## R2-2 ssr:false UX 结论

## 其它 (R2-3 回归 / 新发现)
```
