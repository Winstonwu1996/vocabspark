# Codex 复核：History 上线前全量标准化（feat/history-mastery-wiring → main）

## 请求
这是合 main 前的最后一道复核。分支 `feat/history-mastery-wiring` 把整个 history 模块（15 老 + 22 新 = 37 topic）拉到统一上线标准。**请审 + go/no-go for merge to main**（合并后影响**生产**：15 个已上线 topic 的史实修正 + 22 个 hidden-preview topic 接通 mastery）。

**分支**：`feat/history-mastery-wiring`（off main，是 main 的干净 superset）
**关键 commit**（旧→新）：
- `1e8c565` mastery gate 接通（22 base-content topic 可完整通关）
- `4f1df4d` 20 个 preview topic 精写 intro hook
- `336eb17` 15 个老 topic 补 Fact Ledger
- `50fde00` live-15 红旗 rollup
- `9a0d81d` / `6555b51` / `7d8249d` / `cc8bb71` 14 处老 topic 硬错修复（4 波）
- `1f415f2` rollup 标记已修

---

## 一、改了什么

### A. Mastery gate 接通（代码，最需要审）
22 个 base-content topic（storyboard+notebook，hidden preview）之前进 mastery 会跳过（无题库）。现在从同伴笔记本派生题库，能完整通关。
- `lib/history-storyboards/notebooks/index.js`：新增 `buildMasteryFromNotebook(topicId)` — 从 notebook 派生：拼写←keyTerms+mustKnow keyFigures；定义←mainConcepts 考点卡（defEn/defCn 取 xiaoweiNote/standaloneText，截 300 字）；应用←thinkingQuestions DBQ。
- `lib/history-topics.js`：`buildPreviewTopic` 通用化 — **任何有 notebook 的非 HISTORY_TOPICS topic** 都构造最小 topic（title 取 notebook.topicName，year 解析 id 含 BCE「前N」），挂派生 mastery + xpRewards。`getTopic = HISTORY_TOPICS[id] || buildPreviewTopic(id)`。
- `components/history-engine/ConversationStream.js`：previewMode 且**有** masteryChecks → 走正常 mastery；无题库才 fallback「预览完成」。

**审点**：①派生的 masteryChecks 数据结构与 `MasteryGateOverlay` 读取契约是否完全对齐（spelling: check.items{prompt,hint,answer}+sampleSize / definition: items{conceptId,prompt}+topic.mustMemorize.concepts 查表{id,en,cn,defEn,defCn} / application: items{prompt,expectedAnswers}）？②`getTopic` 通用化后，会不会让不该 reachable 的 topic 被直链打开？（已验证：22 个仍不进 `getAvailableTopics`，公开列表仍 8 个）③history-topics → notebooks/index 这条新 import 有无循环依赖风险？

### B. notebook schema 规范化
3 个我之前批量生成时 schema drift 的 notebook（conceptCn/En→termCn/En；questionCn/En→cn/en）已规范化。**37 个 notebook 现统一 canonical schema**。审点：reader UI 读 notebook 是否只认 termCn/cn（即规范化方向对）？

### C. 20 个 preview hook（`PREVIEW_TOPIC_META`）
纯文案/元数据，低风险。审点：年份/课纲标准准确性、文化对应硬禁。

### D. 37 个 Fact Ledger + 14 处老 topic 硬错修复（**生产内容修正**）
15 个老 topic 之前只过 4-agent review、从未做 Fact Ledger。本次补做（结构化 + web 核实），**每个都查出 prose-read 漏掉的真史实错误**，共 14 处必修硬错已修。汇总见 `lib/history-narratives/_FACTLEDGER_ROLLUP_LIVE15.md`。最敏感的几处请重点抽查：
- **islamic-rise**：蜘蛛/鸽子传说曾标成《古兰经》9:40 经文 → 改为「后世 Sirah 传说，不见于经文」（宗教准确性）。
- **age-of-exploration**：Anacaona（真实人物）「被烧死/1503.11.9」→「被俘押 Santo Domingo 后绞死/1503 夏」（student-facing fictionalDisclaimer 也改了）。
- **引语诚信类**：crusades 伪造《Alexiad》引文→真原文 + 伪造亲笔信场景→标演绎；byzantine「Solomon I surpassed thee」去伪归 Procopius；tang-song 赵明诚「分香卖履」还原原文语义；reformation「Here I stand」标后世添加。
- **数字/单位**：renaissance 火堆 60米→60英尺；mali 开罗金价 25%→12%；mongol 屠城数字对齐学界。
（22 个新 topic 的 9 硬错此前已修、已在 main。）

**审点**：抽查上述修复是否准确（尤其宗教项 + Anacaona + 引语层）？有无「修一处引入另一处错」？CN/EN 是否一致？

---

## 二、验证（已跑）
- 37 storyboard parse（node --check）+ 加载（index）全过；111 lens。
- 22 个 getTopic + 3 关 mastery 数据完整（0 orphan conceptId）；22 个仍 hidden（公开列表=8）。
- 14 处硬错修复 grep 确认残留=0（如 age-of-exploration「11月9日」=0、crusades「马腹」=0、islamic 9:40 蜘蛛已改）。
- 全程未跑 full `npm run build`（避免与并发抢 .next）；**build gate 走 Vercel preview**。
- 未碰 `backups/`（生产用户数据）。

## 三、请确认（go/no-go for merge）
1. Mastery 派生数据结构对齐 MasteryGateOverlay 契约？getTopic 通用化无泄漏/无循环依赖？
2. 14 处生产内容修复准确、无新错、CN/EN 一致？
3. 这个分支是 main 的干净 superset，合并无副作用？
4. 是否同意合 main（把 15 live topic 史实修正 + 22 mastery 接通推上生产）？

## 四、备注
- 较低优先级 🅱（引语层累/内部数字小矛盾/绝对表述降级）：关键引语诚信项已随硬错修，剩余轻量项留上线后慢修（各 ledger 有记录）。
- 22 个 topic 仍是 hidden preview（直链可达，不在公开列表）；正式上线进 TOPIC_REGISTRY + 分批 beta 是后续（见 docs/HISTORY_GATE3_FRAMEWORK.md）。

---

## Round 2 — 回应 Codex No-Go（commit 见下）

感谢两条 finding，都已处理。

### ✅ P1（blocker）— narrative CN/EN 残留 Anacaona 硬错 → 已修 + 同类排查
你完全正确：wave-1 修复 agent 误判 narrative「无该段落」，只改了 storyboard，留下 narrative（loader.js 会喂进引擎上下文）的旧错。已修 `commit 5b7ac64`：
- `age-of-exploration-1492.md` + `.en.md`：Anacaona「被烧/1503.11.9/80 酋长全死含她」→「夏/酋长被烧/她被拖出押 Santo Domingo 审后绞死」；哥哥「天花」→泛称欧洲疫病（1518 前）。残留 grep = 0。
- **同类排查**（怕同一 pattern 漏在别处）：又抓到 2 处「storyboard 修了但 narrative 没对齐」——
  - `mongol-empire.md`：Kalka「12 王公装木箱压死」→「Mstislav 等约 3 王公木板平台压死 + 余者逃亡被杀」。
  - `scientific-revolution.md`：声速「Mersenne 230 toises≈448 误差 30% 非常接近」→「1636 回声法≈316 误差 8%；炮口法≈448 误差 30%」。
- 复核过的「看似残留实为已修正文本」：tang-song 分香卖履（「殊无…之意」正确语境）、byzantine 1710（=St Paul's 完工年，非旧的圆顶纪录错）、crusades「bridles」（已是修正后 + Revelation 框）。

> 审计文档/rollup 此前「Anacaona 已修」的声明确实超前了（只覆盖 storyboard）——现 narrative 也真正修齐。

### ✅ P2 — 分支非 main 干净 superset → 已 merge
已把当前 `origin/main`（cc8466b，含新词 error 修复 3 commit）merge 进本分支（`commit f9bde26`，**无冲突**，与你 merge-tree 判断一致）。现分支是 main 的真后代/superset。
- 合并后验证：history 关键文件 parse；37 storyboard 加载；age-of-exploration mastery 3 关完整；22 个仍 hidden（公开 8）；37 ledger 在。
- 合进来的新词修复自带测试 `node scripts/test-learn-status.mjs` **22/22 通过**（merge 未破坏主干行为）。

### 请复核 Round 2
1. P1 三处 narrative 修复（age/mongol/scientific-rev）是否准确、CN/EN 一致、与各自 storyboard 对齐？
2. merge 后分支是否已是干净 superset、无副作用？
3. go/no-go for merge to main？
