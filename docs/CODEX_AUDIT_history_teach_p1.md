# Codex 审核：History teach 重设计 — Phase P1（尾部疲劳悬崖 + navbar hydration）

## 背景

P0 已 Go（rebase + 前台审核必修 + 两个 P1 补丁），已推远端 `origin/feat/history-teach-redesign`。
本 phase 两件事，请审核 + go/no-go：

1. **尾部疲劳悬崖修复（方案①）** — 前台四角色 + 你 P0 共识里最大的设计问题。
2. **navbar 全站 hydration mismatch 修复** — 排查 teach 时顺带发现的既有 bug（来自同步徽章功能）。

**分支** `feat/history-teach-redesign`，本 phase 关键 commit：`67c24fc`（方案①）、`b53727a`（navbar）。

---

## 一、尾部疲劳悬崖（commit `67c24fc`）

### 问题（数据坐实）
- 全 15 topic 通用：每个 lens 结尾 N11 + N12 都是 `expectsRealAnswer:true`，且两题近乎同义
  （N11「…你认识这种人吗? 你怎么评价?」/ N12「你认识谁是我这种人? 你怎么对待他?」）。
- bridge topic（目前仅 tang-song）：N10 sourcing 写作叠加 → **N10→N11→N12 三个递增重写作连击**，
  落在 ~30 分钟最低能量点（前台 persona 实测在 N10 编假答案过关）。

### 方案①（仅在 tang-song `emperor-huizong` lens 做参考实现）
[lib/history-storyboards/tang-song-china.js](../lib/history-storyboards/tang-song-china.js)
- **hz-n11**：`expectsRealAnswer: true → false` → 从强制写作降级为"喘息+预热"读节点。
  - body 原样保留（含非道德化关键句「两边都是真的…我没答案。我自己就是。」，仍被读到）。
  - `engagementHook` 改为预热提示：「…先在心里想想你怎么看，下一节我会正式问你。」
    （N11 现在是读节点，hook 走 TakeawayCard 的"🤔 想一想"软提示，不强制输入。）
- **hz-n12**：保持 `expectsRealAnswer: true`，作为**唯一尾部写作**。
  - body 原样保留（含「你不必有答案。900 年了, 我自己也没有。」非道德化收尾）。
  - `engagementHook` 合并原 N11 的"如何评价" + 本节的"如何对待"：
    「走完我这一生…你会怎么评价这样一个人？再想一步：你身边有没有这种「某方面极致、
    某方面盲目」的人，你会怎么对待 TA？」

[components/history-engine/ConversationStream.js](../components/history-engine/ConversationStream.js)
- `SourceBridgeCard` 顶部加 cosplay→分析 PhaseDivider 提示
  「现在跳出角色，把刚才扮演的那个人当成史料来读」——解决 teacher 指出的"你就是角色"
  到"把角色当史料分析"的鞭打感（N10 是 narrative 相位，原 PhaseDivider 不触发）。

### 效果
尾部 = 写(N10 + divider)→读/想(N11 预热)→写(N12 合并)，两个重写作被隔开。
每 lens 写作数 N6+N10+N12 = 3（原 4 且三连写）。非 bridge topic（未改）将来 roll 后是 N6+N12 = 2。

### live 端到端验证（tang-song Huizong，新 .next）
- N10：显示 🔍 divider + 双一手史料桥 + 输入门 ✓
- N11：是读节点（继续按钮 + "先在心里想想"预热卡，**无输入框**）✓
- N12：合并写作（prompt 含"怎么评价"+"怎么对待 TA"）✓
- 提交 N12 → 正常到 mastery gate（完整通关无回归）✓

### 请确认 1
1. hz-n11 改 `false` 后：它在 runtime 确实变读节点（继续推进），且 body 的非道德化句仍渲染？
2. hz-n12 合并 prompt 是否完整覆盖了原 N11 的"评价"语义，无信息丢失？
3. SourceBridgeCard divider 仅在 bridge 命中时显示（即仅 tang-song Huizong N10），不影响其它节点？
4. **rollout 判断**：N11→读节点 + N12 合并是否应全量推到其余 14 lens（× 7 live topic）？
   它们无 bridge，尾部仅 N11+N12 去重（N6+N12=2 写作）。本 phase 先只做 tang-song 参考。

---

## 二、navbar 全站 hydration mismatch（commit `b53727a`）

### 问题
每个用 `BrandNavBar` 的页面（vocab/writing/history）dev 都报 "Text content did not match"
hydration 错误 + dev overlay。

### 根因
[components/BrandNavBar.js](../components/BrandNavBar.js) 第一个 `<style>{`...`}</style>` JSX
文本节点里的 CSS 注释含 **ASCII 双引号**（"· X 分钟前" / "✓ 已同步"）。`<style>` 是 raw-text
元素：React SSR 把 `"` 转义成 `&quot;` 写进 HTML，客户端渲染是原始 `"` → 文本对不上。
**更普遍：`<style>` 文本节点里任何 `" < > &` 都会触发此类 SSR/client 转义不一致。**

### 修复
注释改为零特殊字符的纯文本（引号用「」，说明里的尖括号也去掉，避免我第一次修复时
误引入 `<style>` 字面量再次触发）。

### 验证
清掉被并发 `npm run build` 污染的 `.next` 后重启 dev、fresh load /history：
SSR HTML 该注释无任何 `&xxx;` 实体；浏览器 `errorOverlayPresent=false`；页面正常渲染。

### 请确认 2
1. 该 `<style>` 注释现在确无 `" < > &`，SSR 与 client 文本逐字一致？
2. 此 bug 来自同步徽章功能（随 rebase 进本分支），改动仅一行注释文本、零逻辑/样式影响——
   是否同意此 navbar 修复随本 phase 一并合入（虽属 sync-adjacent，但纯注释）？

---

## 回归 / 边界
- 存储层（`turnIndex`/`saveInProgress`）未动；本 phase 不碰任何 sync 逻辑文件。
- 仅改 tang-song 一个 storyboard 的两个节点 flag/文案 + 一个共享组件的注释 + SourceBridgeCard 加一段提示。
- `npm run build`：P0 已通过；本 phase 仅数据 flag + 文案 + 注释，无新增依赖/逻辑。
