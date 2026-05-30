# Step 4b-2 设计 — Atlas 父页进课 gate + iframe 子页被拒回传 (P2-h)

> 送审稿(代码前)。规划 v1.2 §9 Step 4b 拆 3 子步的第 2 步。
> 前置:4b-1(单课进课 gate)已 Codex 12 轮收敛 clean + canary 双绿,rebase 到 main(e992fc9)。

## 0. 背景:现状已有什么

- **子页 gate(4b-1 已做)**:`/history/[topicId]` 进对话前按 tier 拦,超 tier 弹 UpgradeModal。
  这条在 iframe 里**也生效**(子页就是被 Atlas iframe 嵌的那个页)。
- **Atlas 父页**(`components/AtlasLabPage.js`)零 paywall 依赖。两处触发进课(都 `setEmbedUrl(url)` + `setLearningMode('embedded')`):
  1. KeyFigures 角色扮演(line ~617,URL 带 `&embedded=1&role=1[&lens=1]`,**有 lens**)
  2. "Deep Learn" 主 CTA(line ~783,`&embedded=1`,**topic 级**)
- **已有父↔子 postMessage 通道**:子页发 `{source:'history-engine', type:'complete'|'close'}`,父页 listener(line 148-170)收到后关 iframe / 弹通关 toast。

## 1. 4b-2 要补的两个缺口

### 缺口 A — Atlas 点课没有父页 gate
点 Atlas 节点会直接把课塞进 iframe。超 tier 课目前靠子页 gate 兜底(进对话才拦)。
规划点名要"父页 setEmbedUrl gate":点课时先判 tier。

### 缺口 B — iframe 内子页被拒,升级流跑在 iframe 里(Codex round10 P2-h)
子页 `CourseGate` 点"升级 Pro"是 `router.push('/plan')`。在 iframe 里 = /plan 挤在小框里,
父页 Atlas 不知情。应改为:子页 postMessage 回父页,父页关 iframe + 在 Atlas 层弹升级。

## 2. 硬约束(非选项,直接定)

1. **隔离**:flag-off 时 AtlasLabPage chunk 必须**零 membership**(同 4b-1 硬要求)。
   → 不在 AtlasLabPage 直接 `useUserTier`。用懒加载 `AtlasGateMount`(静态可 import,内部懒载
   `AtlasGate`,后者才 `useUserTier` + 拥有父页 UpgradeModal),镜像 `CourseGateMount`/`CourseGate`。
2. **复用纯逻辑**:`computeGateAccess` / `getTopicAccessTier` / `getAccessibleTopicCounts` 全复用,不重写。
3. **P2-h 走既有通道**:新增消息类型 `{source:'history-engine', type:'gate-denied', topicId, requiredTier}`,
   父页 listener 加分支:关 iframe(`setLearningMode('browse')` + `setEmbedUrl(null)`)+ 弹父页 UpgradeModal。
4. **flag-off 字节级不变**:`ENABLE_HISTORY_PAYWALL` off 时,父页/子页所有 4b-2 新逻辑短路,行为与现在完全一致。

## 3. 待定 — 核心决策(请创始人拍板)

**Atlas 点课,超 tier 怎么拦?** 三个方案:

- **方案 A(父页预拦,规划字面)**:点课先判 tier,超 tier 直接弹父页 UpgradeModal,iframe **根本不加载**该课。
  - ＋ 即时反馈、不白加载重 iframe。
  - － 少了课程 IntroScreen 的营销曝光(4b-1 A1 决策特意保留 IntroScreen 做营销)。

- **方案 B(子页拦+回传,与 4b-1 A1 一致)**:iframe 照常加载课的 IntroScreen(营销可见),子页 gate 进对话时拦;
  子页被拦 → postMessage 回父页 → 父页关 iframe + 弹升级。父页**不**加 useUserTier(只加 listener 分支)。
  - ＋ 与 4b-1「IntroScreen 留着做营销」一致;代码最少;复用已验证的子页 gate;父页隔离天然零成本。
  - － 超 tier 课会短暂加载 iframe(到 IntroScreen 为止,不进对话)。

- **方案 C(混合)**:父页用**缓存 tier**(`getCachedTier`,无网络)做快判 —— 已知超 tier 立即父页拦(snappy);
  缓存放行/缺失/不确定 → 放进 iframe 走 IntroScreen 营销 + 子页二次兜底 + 回传。
  - ＋ 已知锁定即时拦 + 营销曝光 + 子页权威兜底,体验最完整。
  - － 代码最多(父页要懒载 AtlasGate + 缓存快判 + 回传都做)。

**推荐:B**。理由:① 与 4b-1 A1 营销决策一致;② 子页 gate 已 Codex-clean + canary 验证,是权威拦截点,
父页再加一套 useUserTier 是重复且要再过一遍隔离/审计;③ P2-h 回传无论如何都要做,B 把它作为唯一新增,最聚焦、最低风险。
若你更看重「点锁定节点即时拦、绝不加载超 tier iframe」,选 A 或 C。

## 4. 决策后的实现清单(以 B 为例)

1. 子页 `CourseGate`:`embedded` 时,deny/error-blocked 的"升级"动作改为 `window.parent.postMessage({type:'gate-denied',...})`
   而非 `router.push('/plan')`;非 embedded 保持 `/plan`。
2. 父页 `AtlasLabPage` message listener 加 `gate-denied` 分支:关 iframe + 弹父页 UpgradeModal(懒载,flag-off 不引入)。
3. flag-off 短路;build + 隔离校验(Atlas chunk 零 membership)+ Codex 审 + canary(iframe 内被拒→父页弹窗)。

## 5. 审计/验证计划

- Codex gate-only 复审(隔离 worktree,base=merge-base)。
- Canary:flag-on,Atlas 点超 tier 节点 → 验拦截/回传/父页弹窗;点试用课 → 正常进。
- flag-off:Atlas chunk 零 membership 字节级隔离保持。
