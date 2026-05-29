# Step 4b — 单课进课 tier gate 设计 doc

**日期**:2026-05-29
**对应规划**:`docs/HISTORY_MEMBERSHIP_PLAN.md` v1.2 §7 (tier gate 生命周期) + §8 (锁课 UI) + §9 Step 4
**目标**:paywall 从「首页锁标装饰」(Step 4a) 升级为「真进课拦截」—— 超出 tier 的课在进入时被挡,弹升级。这是 paywall「能收钱」的承重墙。
**风险**:**最高** —— 碰 production 播放器 runtime (`pages/history/[topicId].js`) + Atlas iframe。必须 flag 守门 + canary 严验。

---

## 1. 基线事实(决定隔离策略)

| 事实 | 含义 |
|---|---|
| `pages/history/[topicId].js:27` 已静态 import supabase + `:478` 已调 `supabase.auth.getUser()` | 播放器页 supabase auth client **本来就初始化**(加载 user 给 profile/sync)。flag-off 隔离重点 **不是**「别 import supabase」 |
| `components/AtlasLabPage.js` 经 BrandNavBar → UserCenter → supabase | Atlas 页同理,supabase baseline |
| Step 4a P0-1 教训 | flag-off「零新增 runtime」的真实含义 = **不调 useUserTier 的新网络请求 `/api/stripe/check-subscription`**,不是「页面无 supabase」|

**所以 Step 4b flag-off 隔离要求**:flag off 时,**不调用 `useUserTier`**(不产生新的 `/api/stripe/check-subscription` 请求)。播放器其它行为逐字不变。

---

## 2. Explore 草图里的 hooks 规则违例(必须纠正)

Explore map 的代码草图把 `useUserTier()` 画在了:
- `submitUserResponse` event handler 里
- AtlasLabPage 的 `onClick` 里
- 条件分支里

**这违反 React hooks 规则** —— hook 必须在组件**顶层无条件**调用。Step 4b 正确架构:
- `useUserTier()` 只在专门的 **gate 组件顶层**调用一次
- gate 组件**条件渲染**(`{ENABLE_HISTORY_PAYWALL && <Gate/>}`),不是条件调用 hook
- tier 结果通过 props / state 下传给 handler 用

---

## 3. 4 个 gate + 建议分子步(降低单 PR 风险)

| 子步 | gate | 入口覆盖 | 风险 | 建议 |
|---|---|---|---|---|
| **4b-1** | 单课 mount gate | 直链 `/history/<id>` + 首页进课 + iframe 子页二次 gate | 中 | **先做**(核心承重墙) |
| **4b-2** | Atlas 父页 setEmbedUrl 前 gate | Atlas chip 点击进课 | 中 | 次做(AtlasLabPage 隔离单独处理) |
| **4b-3** | active→降级 暂停推进 | conversation 中途 tier 掉 | 高(实时 tier 监听 + view-only) | 最后做(频率最低,最复杂) |

**理由**:三个 gate 混在一个 PR 里,canary 验证 + Codex 审都难定位。分子步每个独立 flag-canary-审。4b-1 做完 paywall 就有「最小可收钱闭环」(直链/首页进课被拦),Atlas + 降级是增强。

---

## 4. 4b-1 单课 mount gate 架构(本 doc 重点)

### 4.1 gate 组件(新文件,隔离 useUserTier)

`components/history-engine/CourseGate.js`(新):
```
import { useUserTier } from '../../lib/membership';
import { canAccessLensWithReceipts, getTopicAccessTier } from '../../lib/history-tiers';
import { UpgradeModal } from './UpgradeModal';

// 在组件顶层调 useUserTier (hooks 规则); 算出 access 后通过 render-prop / callback 告诉父页
export function CourseGate({ topicId, lensId, learningReceipts, embedded, onResolved, children }) {
  var tierInfo = useUserTier();
  var router = useRouter();
  // loading → 渲染 skeleton (绝不放行也绝不误锁)
  // active/free/guest → 算 canAccessLensWithReceipts:
  //   'allow' / 'view-only-grandfathered' → 渲染 children (播放器)
  //   'deny' → 渲染 UpgradeModal (embedded: postMessage 回父; 直链: redirect /history)
  // error → fail-closed: Pro 课不放行 + 重试; free 内容放行
}
```

### 4.2 播放器页怎么接(flag 守门)

`pages/history/[topicId].js`:
```
{ENABLE_HISTORY_PAYWALL
  ? <CourseGateLazy topicId={topicId} lensId={effectiveLensId} ...>
      {播放器主体}
    </CourseGateLazy>
  : 播放器主体}
```
- flag off → 直接渲染播放器主体,**CourseGate 永不挂载 → useUserTier 永不调用 → 无新网络**
- flag on → CourseGateLazy(`next/dynamic` 或本地 loader,同 4a 模式)懒加载 gate,gate 决定渲染播放器 / skeleton / 升级 modal

**关键**:用 4a 验证过的本地 loader 模式(不用 `dynamic ssr:false` 防首屏空白)。

### 4.3 拦截时机

Explore 确认最早可拦截点:**topicId 解析后、narrative fetch (`:331-342`) 之前**,或至少在 **IntroScreen → conversation (`startConversation :903`) 之前**。

设计选择(送审决策点 A):
- **(A1) 进 conversation 前拦截**:IntroScreen 仍可看(课程简介 + lens 列表),点「开始」时 gate。优点:锁课用户能看到课程介绍(营销),符合 4a「browse 乐观」基调。narrative fetch 浪费一次(可接受)。
- **(A2) mount 即拦截**:topicId 解析后立刻 gate,IntroScreen 都不渲染,直接升级 modal。优点:省 narrative fetch + 更硬。缺点:锁课用户连课程介绍都看不到(营销损失)。

→ **倾向 A1**(跟 4a 浏览乐观一致 + 营销友好),narrative fetch 浪费是小成本。

### 4.4 grandfather(老用户已学 lens)

用 `canAccessLensWithReceipts(topicId, lensId, userTier, learningReceipts)`(Step 2 已建 + 130 单测):
- 已学过的 lens → `'view-only-grandfathered'` → 放行进 conversation(view-only,但本子步先简单放行,view-only 渲染留 4b-3)
- 未学的 lens 超 tier → `'deny'` → 升级 modal

learningReceipts 从 `loadAll().historyData.learningReceipts` 读(`lib/history-storage.js`)。

### 4.5 loading / SSR 安全

- `useUserTier` loading 期 → gate 渲染 skeleton(复用 `:1068` 现有「加载中…」shell),**绝不渲染播放器、绝不放行**
- gate 逻辑全在 useEffect / render 后(不在 render 中同步读 window),避免 Step 0A retro 提的水合陷阱
- embedded 模式:gate deny 时 `postMessage({type:'gate-denied'})` 回父 Atlas(复用 `:1025-1035` postMessage 机制),不做 redirect(iframe 内 redirect 体验差)

---

## 5. 送创始人审的决策点

**决策 A**:拦截时机 — A1(进 conversation 前,IntroScreen 可看)还是 A2(mount 即拦截)?
→ 我倾向 A1。

**决策 B**:子步拆分 — 同意 4b-1 / 4b-2 / 4b-3 分三个独立 PR(各自 flag-canary-审)?还是一次性做完 4b?
→ 我强烈倾向分拆(单 PR 可审 + canary 可定位)。

**决策 C**:4b-1 的 grandfather view-only — 本子步「已学 lens 直接放行(可重学)」够不够?还是必须本子步就做 view-only 渲染(transcript 只读 + 禁输入)?
→ 我倾向本子步简单放行,view-only 渲染并入 4b-3(跟 active→降级 的 view-only 同一套 UI 做)。

**决策 D**:flag-off 隔离 — 用 4a 验证过的本地 loader 模式(`CourseGateLazy` 懒加载 CourseGate)?
→ 我倾向是(已验证 + 一致)。

**决策 E**:Atlas gate (4b-2) 单独排期 — AtlasLabPage 顶层加 useUserTier 需要同样的隔离改造(它现在不调 useUserTier)。同意 4b-2 独立做,不混进 4b-1?
→ 我倾向是。

---

## 6. 4b-1 实施清单(决策定了之后)

1. `components/history-engine/CourseGate.js` — gate 组件 + useUserTier(顶层)+ canAccessLensWithReceipts + skeleton + UpgradeModal/redirect/postMessage 分支
2. `CourseGateLazy` 本地 loader(flag off 不触发 import)
3. `pages/history/[topicId].js` — flag 守门包住播放器主体(diff 尽量小:包一层,不动播放器内部逻辑)
4. 单测:gate 决策纯逻辑(allow/deny/grandfather/loading/error)抽 helper 测;hook/render 留 canary
5. build + flag-off bundle guard(播放器页 chunk 不含 check-subscription)
6. flag-off 浏览器验(播放器行为逐字不变)
7. flag-on canary 验(锁课 redirect/modal + 已学放行 + loading skeleton + 直链绕过被二次 gate 挡)
8. Codex 审 → 修 → merge

---

## 7. 不做什么(范围边界)

- ❌ 不动播放器内部 phase 状态机 / conversation / mastery / completion 逻辑
- ❌ 不动 Atlas iframe(留 4b-2)
- ❌ 不做 active→降级实时拦截(留 4b-3)
- ❌ 不改 Step 4a 的首页锁标(已 production)
- ✅ 只在播放器页**外层包一层 gate**,flag off 时这层不存在

---

**下一步**:创始人审决策 A-E → 我按定案写 4b-1(`CourseGate.js` + flag 守门)→ Codex + canary → merge。**不在审之前写播放器代码。**
