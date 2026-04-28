# History Topic Authoring Pipeline — 12 步流程（2026-04-27 锁定）

每个新 Topic（38 个 G7-K12）必须走完这 **12 步**才能 ship。任何一步不通过 → 回到对应步骤，**不能跳过**。

---

## 设计哲学

**三个不可妥协的原则**（所有 Topic 共享）：

1. **教材为锚** — narrative 建在教材之上，不替代教材（Houghton Mifflin K-12 / Stamford 等系列）。第 0 节明示教材出处（页码、章节）
2. **Rule 0 中性** — "我作为一个中国人认为西方有其制度优势，但东方也有其制度优势。没有谁比谁好，只是适合各自的背景。" Whig 史观 / 反向 essentialism 都拒
3. **每轮 Anti-Guessing** — 给定 AI 当轮 deliver 的信息，13 岁能用系统推理答 provoke 问题，不是瞎猜

---

## 12 步流程

### 第 1 步：选 Topic（中美课纲交叉痛点）

**判断标准**（按优先级）：
- 中国课纲不教 + 美国课纲核心 + 长尾意义清晰
- 中国家长辅导不了（家长盲区 = 真痛点）
- 7-12 年级孩子在加州 / 德州 / 纽约课堂会遇到

**反例**：
- ❌ 美国独立战争（中国课纲也讲，家长辅导得了）
- ✅ Magna Carta（中国课纲不讲，家长不熟，AP 反复考）
- ✅ Crusades（中国课纲不讲，家长不熟，现代地缘政治持续投射）

### 第 2 步：决定 qaTemplate（问答模板）

**3 种已有模板**：

| 模板 | 复杂度 | 轮数 | 例 |
|---|---|---|---|
| `simple-binary` | 单文件单时刻 / 二元冲突 | **9-13** | Magna Carta / Bill of Rights / Declaration of Independence |
| `multi-faction` | 3+ 势力 / 长跨度 | **13-15** | Crusades / 30 Years' War / WWI |
| `long-arc` | 200+ 年长时段 / 多次转折 | **13-17** | 工业革命 / Civil Rights Movement |

**轮次原则（用户 2026-04-27 钉死）**：
> 轮次跟着内容走，密度跟着思考走。
> **轮多不一定好——可能给信息不够让用户瞎猜**。
> **轮少不一定好——可能塞太多让用户消化不了**。
> 找平衡：**每轮 Deliver 段 30-60 字够她想，Provoke 锚定在那个 Deliver 上**。

### 第 3 步：KB 拉相关实体

```bash
# 编辑 data/history-knowledge-base/_manifest.json 加入新实体
# 然后跑：
npm run kb:fetch
```

每个 person / event / place 必须有 Wikidata QID 校验过（防 AI 幻觉伪 QID — 见 [marketing dev-log Wikidata disaster entry](../../marketing/dev-log/entries/2026-04-15-wikidata-hallucination-disaster.md)）。

### 第 4 步：Opus 写 narrative

**用 Anthropic Claude Opus**（最强模型）写。**不要用 DeepSeek 写 narrative**——之前实验证明 DeepSeek 在长结构化历史教学内容上比 Opus 弱一档。

参考 [magna-carta-1215.md](magna-carta-1215.md) / [crusades-1099.md](crusades-1099.md) 模板。

**12 节 + 4 附录结构（严格遵循）**：

```
0. 教材锚点 — 明示 publisher/series/chapter/lesson/page
1. 一句话锚点 — 抓 13 岁注意力，多势力 Topic 必须三方视角并列开场
2. 舞台 — L0 地理 / L1 气候 / L2 社会 / L3 制度 / L4 事件
3. 主角们 — 3-7 个，多元（含至少 1 个无权方 / 对立面 / 虚构桥接）
4. 故事（plot beats）— 时间线 + 转折 + 反讽细节
5. 文件深读（primary source）— 原文 + Lexile 7 年级简化版 + 多视角并读
6. 影响（短/中/长期）— 长尾连到现代
7. AP DBQ 思维训练 — stakeholder grid + Annales 5 层 + continuity/change
8. 同时代的中国 — 结构对照（Rule 0 一票否决维度）
9. 历史学家在争什么（historiography）— 多派并列 + 方法论
10. 常见误解（清坑专区）— 5-8 个被广泛流传的错
11. 思考问题 — 5-7 题开放式，**不下结论**

附录 A: 关键时间线
附录 B: 核心词汇
附录 C: 人物 cheat sheet
附录 D: 可视化提示（给 atlas / quiz / reading 模块取材用）
```

**写作 voice 约束**：
- 教科书 rigor + 7 年级可读性
- 趣味细节（"Lackland"/沼泽丢皇冠/Anna Komnene 软禁里写完巨著）必须有
- 中文为主导，英文术语带中文释义
- 价值观引导思考、不下结论

### 第 5 步：跑 narrative 结构验证

```bash
npm run validate:narratives
```

检查项：
- frontmatter 合法（topicId/title/textbookAnchor 完整）
- body > 1000 字符
- frontmatter.topicId 跟文件名匹配

任何 fail = 不能进下一步。

### 第 6 步：Sarah Chen reviewer audit

跑 Sarah Chen agent（`docs/HISTORY_REVIEWER_PERSONA.md`）做 8 维度评审：

1. Historical Accuracy ⭐ 一票否决（错史实必删）
2. Narrative Coherence
3. Inquiry Density
4. **China-Bridging Quality** ⭐ Rule 0 一票否决（任何 Whig / 反向 essentialism = 拒）
5. Cosplay Figures
6. Mastery Checks
7. Source Materials
8. Engagement Design

**输出 verdict**：SHIP / SHIP-WITH-FIXES / REWRITE

任何 SHIP-WITH-FIXES → 第 7 步。
REWRITE → 回第 4 步重写 narrative。

### 第 7 步：应用 Sarah 修订建议

按她列出的"必修"逐条改 narrative。**不要 cherry-pick** —— 必修就是必修。

修完重新跑第 5 步（结构验证）+ 第 6 步（Sarah 二审）。

### 第 8 步：跑 KB fact-check

```bash
npm run kb:fact-check {topicId}
```

检查：
- mustMemorize.vocab 词条年代不矛盾 KB
- 提到的人名是否在 KB 中且 commonMisconceptions 没被违反
- primarySources.attribution 标了 paraphrase / simplified

0 high / 0 medium fail → 进下一步。任何 high → 修。

### 第 9 步：跑 Willow simulator（4 persona）

```bash
DEEPSEEK_API_KEY=... npm run test:willow {topicId} all
```

4 persona × 13 轮 ≈ 52 grade。每 persona ≥ 80% pass。

**6 个 grade 维度**：
- A. single-action（4-slot 节奏算 1 个动作不算 4）
- B. empathy-first（用户答完后先共情再过渡）
- C. no-hallucination（细节都在 narrative 里）
- D. no-ui-promise（不说"去看地图"/"点开"等）
- E. neutrality（无 Whig / 无反向 essentialism）
- F. anti-guessing（用 deliver 信息能系统推理答 provoke 问题）

任何 persona < 80% → 回第 4 / 7 步看是 narrative 问题还是 turn 设计问题。

### 第 10 步：浏览器 5 分钟实测

founder（或孩子直接）真打开 `/history?topicId={id}` 走 5 分钟。

**Anti-Guessing 实测**：
- 走到 T3-T5 时停下来，问自己 / 孩子："如果我现在没看 AI 之前说的，能答这个问题吗？"
- 答得出 = 通过
- 只能瞎猜 = 回第 4 步加厚 narrative deliver 段

**Voice 实测**：
- AI 说话像不像"用心的老师"？
- 有没有套话 / 鸡汤 / 让看 UI 的指令？

任何"我女儿觉得别扭"= 回到对应步骤。

### 第 11 步：任何环节 fail → 回到对应步骤

不能跳过。**Crusades 4-27 就是因为我跳了第 9 步（Willow simulator）+ 第 10 步（实测）才翻车的**——所有自动检查全过，13 岁打开 5 分钟说"它说话好乱"。

### 第 12 步：全过 → ship

```js
// lib/history-topics.js
TOPIC_REGISTRY = [
  { id: '{topicId}', available: true, narrativeRequired: true, ... }
]
```

```bash
git add lib/history-narratives/{topicId}.md lib/history-topics.js
git commit -m "feat(history): {topicId} ships ..."
git push
```

---

## 流水线诊断（哪一步出问题修哪步）

| 症状 | 哪一步出问题 |
|---|---|
| 史实错误（人名/年代/数字） | 第 4 步（Opus 写 narrative）+ 第 6 步（Sarah audit） |
| AI 编造细节（hallucination） | 第 4 步（narrative 不够全）→ Willow simulator C 维度抓 |
| AI 让用户去看 UI | buildNarrativeSystemPrompt 硬禁令 + Willow simulator D 维度 |
| AI 一句话塞 5 件事 | buildNarrativeTurnPrompt 4-slot 纪律 + Willow A 维度 |
| 中国对照偏 Whig | Sarah Rule 0 + Willow E 维度 |
| 用户答得出"瞎猜" | narrative deliver 不够厚 + Willow F 维度（Anti-Guessing） |
| 用户答不上来"信息过载" | turn 设计太密集 → 拆成更多轮 |

---

## 不可妥协的硬门槛（任何一条 fail 必拦）

1. ❌ Sarah 给"REWRITE"verdict
2. ❌ KB fact-check 任何 high severity
3. ❌ Willow simulator 任何 persona < 60% pass
4. ❌ Willow E 维度（neutrality）跨 persona 平均 < 4/4
5. ❌ Willow F 维度（anti-guessing）跨 persona 平均 < 80%
6. ❌ 第 10 步实测 founder / 孩子说"别扭"

通过所有硬门槛 + 4 persona 平均 ≥ 80% → SHIP。

---

## 写作时间预估（38 个 Topic 总计）

每个 Topic：
- 第 4 步 Opus narrative：~3-4 小时（含查资料 + 写 12 节 + 4 附录）
- 第 6 + 7 步 Sarah review + apply：~1-2 小时
- 第 8-10 步验证：~1 小时
- **总：~5-7 小时 / Topic**

38 个 Topic = ~190-260 小时 = **5-7 周全职工作**（可分散到 3-6 个月）。

成本：
- Opus narrative tokens：~$0.50 / Topic × 38 ≈ **$20**
- Willow simulator 验证：~$1 / Topic × 38 ≈ **$40**
- DeepSeek runtime（用户层）：~$0.01 / 用户 / Topic（同行 1/10）

---

## 流程演化历史

| 日期 | 变更 |
|---|---|
| 2026-04-27 | **流程锁定 v1**：本文档发布。从 Crusades 翻车 + 二层架构升级总结而来 |

---

**任何修改这个流程的提议必须经过：① 在一个真实 Topic 上跑通 + ② founder approve**。流程是产品的护城河，不是写一遍就完。
