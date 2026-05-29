# Codex 审计 prompt — Step 4b-1 单课进课 tier gate

你是独立代码审核员。实施后审计,给 **Go / No-Go**。范围:Step 4b-1 —— paywall 第一个「真进课拦截」gate,在用户点「开始学习」进 conversation 前做 tier 检查,超 tier → 弹 UpgradeModal。`ENABLE_HISTORY_PAYWALL` flag 默认 off。

**最高关注点**(同 4a + 新增):
1. **flag off 零新增 runtime** —— 不调 useUserTier / 无新 `/api/stripe/check-subscription`(播放器页 supabase 是 baseline,不在范围)
2. **hooks 规则** —— useUserTier 是否真在组件顶层无条件调用(Explore 草图曾把它画进 handler,我纠正了)
3. **三入口全覆盖** —— onStart / onResume / onClearAndStart 是否都过 gate
4. **loading 窗口** —— 已知乐观放行小窗口是否可接受

## 审核范围

```bash
git show 8970543   # Step 4b-1
git show 8ed1b09   # 设计 doc (决策 A1/B/C/D/E 背景)
```

文件清单(实地读):
- `lib/history-tiers.js` 的 `computeGateAccess`(新纯逻辑)
- `scripts/test-history-tiers.mjs`(146 assertions,+16 computeGateAccess)
- `components/history-engine/CourseGate.js`(新 · useUserTier reporter + UpgradeModal,懒加载目标)
- `components/history-engine/CourseGateMount.js`(新 · 静态可 import 本地 loader)
- `pages/history/[topicId].js`(flag 守门接入 + gatedEnter)

辅助参考(已过审 + 部分 production):
- `docs/STEP_4B_GATE_DESIGN.md` — 决策 A1/B/C/D/E
- `docs/HISTORY_MEMBERSHIP_PLAN.md` v1.2 §7 §8
- `lib/membership.js` useUserTier / `lib/history-tiers.js` canAccessLensWithReceipts
- Step 4a 的 CourseBrowserPaywallLoader(同款本地 loader 模式,已 production)

## 我已验证(附证据,请独立复核)

- `npm run build` 全绿;`node scripts/test-history-tiers.mjs` 146/146
- **bundle 隔离**:播放器页 chunk `pages/history/[topicId]-*.js` **不含** `check-subscription`/`tier_load_error`;CourseGate(membership)落异步块 `549-*.js`
- flag off 默认(env-based)
- 0 行改播放器内部 phase/conversation/mastery 逻辑

## 请重点审核

### P0-1 flag off 零新增 runtime
- 播放器页顶层 import:加了 `ENABLE_HISTORY_PAYWALL`(纯常量)+ `CourseGateMount`(无 membership/supabase,只 react + 动态 import())。确认这俩 import 无 paywall 副作用。
- flag off → `{ENABLE_HISTORY_PAYWALL && <CourseGateMount/>}` 不渲染 → CourseGateMount 的 `import('./CourseGate')` 永不触发 → useUserTier 永不调。确认这条链。
- `passesEntryGate` flag off → 立即 `return true` → `gatedEnter(fn)` 等价直接 `fn()`。确认 onStart/onResume/onClearAndStart 在 flag off 下行为逐字不变。
- 新增的 `gateAccess`/`showUpgradeGate` 两个 useState + gatedEnter 包装,flag off 下是否真的零行为影响(只是多了 inert state)?

→ 输出:flag off 是否 100% 零新增 runtime + 行为不变

### P0-2 hooks 规则
- `useUserTier()` 在 `CourseGate.js` 顶层无条件调用 — 确认没在 handler/条件/循环里。
- CourseGate 是**条件渲染**(CourseGateMount 的 `Gate && <Gate/>` + 播放器页 `flag && <CourseGateMount/>`),不是条件调用 hook — 确认 flag 是 env 常量(session 内不变)→ 组件挂载稳定 → 不违反 hooks 规则。
- 播放器页新增的 useState(gateAccess/showUpgradeGate)在组件顶层无条件 — 确认。

### P1-1 三入口全覆盖 + gate 决策正确
- onStart / onResume / onClearAndStart 是否都包了 gatedEnter?有没有别的进 conversation 路径漏网(如 mastery 回退、直接 setPhase("conversation"))?grep `setPhase("conversation")` 看所有调用点。
- `computeGateAccess` 决策表是否正确:loading→loading / error→付费课 error-blocked·免费课 allow / active·free·guest→canAccessLensWithReceipts(含 grandfather)。
- `passesEntryGate` 只挡 `deny`/`error-blocked`,放行 `allow`/`view-only-grandfathered`/`loading`/`null` — 这个放行集合对吗?

### P1-2 grandfather (决策 C: 已学直接放行)
- 已学过的 lens → `view-only-grandfathered` → passesEntryGate 放行 → 进 conversation(可重学)。确认这符合决策 C(本子步简单放行,view-only 渲染留 4b-3)。
- learningReceipts 从 `loadAll().historyData.learningReceipts` 读,useMemo keyed on topicId+lensId — 确认读法对 + 不会每 render 重读。

### P1-3 loading 窗口(已知小窗口)
- loading/null 时 passesEntryGate 放行(乐观)。窗口:用户在 tier 解析(<1s)前点「开始」。
- 设计 doc 论证:用户读 intro 通常 >1s,且 4b-3 active→降级 兜底。
- 你同意这个小窗口在 4b-1 可接受吗?还是该在 loading 时禁用「开始」按钮 / 显示"检查中"?(注:禁用按钮要改 IntroScreen 内部,diff 更大)

### P1-4 UpgradeModal 集成
- CourseGate 的 UpgradeModal:reason='locked-course',requiredTier=getTopicAccessTier(topicId),counts=getAccessibleTopicCounts(available),onUpgrade→router.push('/plan')。确认数据对。
- showModal 由播放器页 showUpgradeGate 控制,onClose 清它。确认这个受控 modal 状态流没有泄漏 / 卡死。

### P2 其它
- CourseGateMount 懒块加载失败(catch)→ 不渲染 gate → gateAccess 维持 null → passesEntryGate 放行(乐观)。网络差时 paywall 失效放行 — 可接受吗(同 error fail-open 取舍,但这里是 chunk 加载失败)?
- embedded 模式(Atlas iframe 里的播放器):4b-1 gate 在 embedded 下也生效吗?会不会跟 4b-2 的 Atlas 父页 gate 重复 / 冲突?(4b-2 还没做,但 4b-1 的 gate 在 iframe 子页应该也跑)

## 输出格式

```md
## VERDICT
[ ] Go — 4b-1 可继续 (待 canary 验进课拦截)
[ ] Go with minor adjustments
[ ] No-Go

## P0 结论
P0-1 flag off 零新增 runtime: Y/N
P0-2 hooks 规则: Y/N

## P1 / P2

## loading 窗口: 4b-1 可接受 Y/N + 理由

## 你认为遗漏的角度
```

## 关键提示
- 最重要:**P0-1 flag off 零新增 runtime** + **P0-2 hooks 规则**。任一不过 → No-Go。
- 这是 paywall 第一次碰播放器 runtime,flag off 必须让现有学习流程逐字不变。
- loading 窗口、chunk 加载失败放行 都是「fail-open 取舍」—— 4b-1 阶段(真 gate 雏形)可接受,4b-3 会硬化。请判断是否同意分层。
- modal live 交互我会 canary 补验(本地 sandbox React 不 hydrate)。你只判断代码逻辑。
