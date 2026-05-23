# Codex 审核：History teach — P1 尾部修复全量 rollout + object-hook 渲染修复

## 背景
你 P1 Go + 批准 rollout（带 filter 规则，非机械）。本 phase 把方案① 推到全部符合的 lens，
并修了一个 rollout 暴露出来的潜在崩溃。请审核 + go/no-go。

**分支** `feat/history-teach-redesign`，关键 commit：
- `548cf11` object-form engagementHook 安全渲染（潜在崩溃，自 P1 起）
- `ad57640` 方案① 全量 roll（41 lens）

---

## 一、inventory（与你的一致）
用 runtime loader（`loadStoryboard`）跑全部 45 lens，按"末两节 expectsRealAnswer"判定：
- **41 lens 符合**「双尾部强制写作」→ 改造
- **4 lens 跳过**：mali 3 个（mansa-musa/ibn-battuta/aisha-1413，本就 N11写/N12读）+ tang-song huizong（已在参考实现里做）

## 二、改造（每 lens）
- 第二末节（N11）：`expectsRealAnswer: true→false`；`engagementHook` 改预热提示
  （"…先在心里想想你怎么看，下一节我会正式问你"）。
- 末节（N12）：保持 `expectsRealAnswer: true`；`engagementHook` **忠实合并**该 lens 自己的
  "评价"（旧 N11）+ "对待"（旧 N12）语义。
- 7 个并行 agent 逐个 content pass（非机械）。样例：al-mamun 的迁移指向"国家/机构"而非个人
  （契合其制度框架）；anacaona-jr 保留 in-character 临终语气；reformation/age-of-exploration
  含 string + object 两种 hook 形态分别处理。
- enlightenment/medieval-japan 部分节点是 themeCn-only（无 engagementHook）：N11 仅翻 flag，
  N12 新增 engagementHook 承载合并 prompt。

覆盖 14 文件（magna-carta / crusades / black-death / renaissance / reformation /
age-of-exploration / tang-song(su-shi+li-qingzhao) / islamic-rise / byzantine / mongol /
scientific-revolution / pre-columbian / medieval-japan / enlightenment）。

### 验证
- **inventory 重跑**：45 lens 全部经 runtime loader 加载无错（= 15 文件语法/加载校验通过）；
  残留"双尾部写作[true,true]" = **0**。
- **diff scope**：`git diff` 仅 `engagementHook` / `expectsRealAnswer` 行改动；
  `bodyCn/bodyEn/themeCn/themeEn/content` 字段声明改动 = **0** → 正文与
  「两边都是真的 / 我没答案」收尾全部保留。

### 请确认 1
1. 41/4 的 filter 判定与你的 inventory 是否一致？
2. 末节合并 prompt 是否确实保留了各 lens 原 N11 的评价语义（抽查若干）？
3. 有无 lens 的"末两节"并非真正的反思双写（例如某 lens 末节是 menu/meta 而非反思）导致误判？
   （我按"storyboard 数组最后两个节点"取，short lens 如 magna-carta tom-villein 末两节是 N7/N8。）

---

## 三、object-form engagementHook 安全渲染（commit `548cf11`）
**潜在崩溃（自 P1 起，本次 rollout 扩大暴露）**：部分 lens 的 `engagementHook` 是 `{cn,en}` 对象
（li-qingzhao / lorenzo-medici / columbus / anacaona-jr 等，均 live）。`TakeawayCard` 与输入栏
prompt 原本直接把它塞进 JSX → React "Objects are not valid as a React child" 崩溃。P1 只在
huizong（字符串 hook）验证过；rollout 把 N11 降级为读节点后，这些 object-hook lens 的 N11 会
走 TakeawayCard，暴露面扩大。

**修复**：[components/history-engine/ConversationStream.js](../components/history-engine/ConversationStream.js)
加 `pickHookText(val,isEn)`（string 原样 / `{cn,en}` 按语言取串），`TakeawayCard._hook` 与
输入栏 `inputPrompt` 两处都过它。

**验证（node 直跑 runtime loader）**：li-qingzhao/lorenzo/columbus 的 N11/N12 object hook
原样渲染会 CRASH，过 `pickHookText` 后均返回正确字符串；su-shi 字符串 hook 不受影响。

### 请确认 2
1. `pickHookText` 两处接入点（TakeawayCard、输入栏 prompt）是否覆盖了所有把 engagementHook
   塞进 JSX 的地方？还有没有别处直接渲染 hook/inputPrompt？
2. 这个 latent 崩溃既然自 P1 就在，是否同意按"本 rollout 修复"一并合入（而非单独回溯 P1）？

---

## 环境备注（非代码问题）
本 phase 两次遇到 dev server `.next` 损坏（`Cannot find module ./chunks/vendor-chunks/next.js`
+ webpack pack 缓存 rename race），分别由"并发 build 抢 .next"与"7 agent 同时触发 14 文件 HMR
风暴"导致。`rm -rf .next` 重启即恢复。与本次代码改动无关；提醒 CI/本地勿在 dev server 运行时
并发 build，且大批量改文件后建议清一次 .next。

## 回归
- 仅改 14 个 storyboard 的 hook/flag + 1 个组件加 helper；不碰存储层、不碰 sync 文件。
- huizong（参考实现）此前已 live 端到端验证（N10 桥+divider / N11 读节点 / N12 合并 / 通关 mastery）。
