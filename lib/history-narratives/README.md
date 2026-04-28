# History Narratives — Two-Tier Authoring Model

## 核心设计原则

**Opus = 作者（curriculum designer）；DeepSeek = 老师（teacher / dialogue partner）**

这个目录下的 `*.md` 文件是每个 Topic 的**稳定内核（canonical narrative）**——
由 Anthropic Claude Opus（最强模型）一次性写成，作为该 Topic 所有用户体验
的事实和叙事来源。

运行时，DeepSeek-V3 接收这份 narrative 作为系统上下文，**只负责跟 Willow
（用户）对话**——它不被要求自己回忆 Crusades 历史细节，不被要求自己设计
教学路径，不被要求自己处理三方视角中性。它只做一件事：**读着 narrative
跟用户聊**。

## 为什么这样分工

每个模型有自己的强项：

| 任务 | Opus 4.x | DeepSeek-V3 |
|------|---------|-------------|
| 历史准确性、深度分析、多视角中性 | ✅ 强 | ⚠️ 表面 + 偶尔幻觉 |
| 长文档结构化（>5000 字） | ✅ 强 | ⚠️ 中等 |
| 多文明视角对照 + AP 应试 rigor | ✅ 强 | ❌ 弱 |
| 实时对话、跟用户语气共振、单轮快回复 | ⚠️ 慢 + 贵 | ✅ 快 + 便宜 |
| 中英 code-switching | ✅ 自然 | ✅ 自然 |
| 跟踪 Willow profile + 历史回应 | ⚠️ 同 | ✅ 同 |

如果让 DeepSeek 同时做"内容作者"和"对话老师"两个角色 → 它两边都做不
好（Crusades T2 五件事一句话就是这个症状）。把作者抽出来给 Opus，
DeepSeek 专注做老师 → 两边都好。

## 经济模型

- **Opus narrative**：每 Topic ~6000-12000 字，~3000-5000 tokens 输入 + ~6000-10000
  tokens 输出 ≈ 一次性 $0.15-0.50。**38 个 Topic 总计 < $20**。
- **DeepSeek runtime**：每轮 ~3000-5000 tokens 输入（含 narrative）+ ~200-400
  tokens 输出 ≈ < $0.001。**每个用户每个 Topic ~13 轮 ≈ $0.01**。

→ 投入 $20 一次性写 narrative + 千万级 user-conversations 的运行成本几乎为零。

## 文件契约

每个 `{topicId}.md` 必须有：

1. **YAML frontmatter** 包含：
   - `topicId`（与 lib/history-topics.js 中 ID 对齐）
   - `title.cn` / `title.en`
   - `textbookAnchor`（教材锚点 — 不替代教材）
   - `standardsAlignment`（CA HSS / AP 等）
   - `authorNotes`（写作约束的元信息）

2. **12 节正文结构**（所有 Topic 严格遵循）：
   - 0. 教材锚点
   - 1. 一句话锚点
   - 2. 舞台（L0-L3）
   - 3. 主角们
   - 4. 故事（plot beats）
   - 5. 文件深读（primary sources）
   - 6. 影响（短中长期）
   - 7. AP DBQ 思维训练（多视角分析 + Annales 5 层 + continuity/change）
   - 8. 同时代的中国（cross-civilization）
   - 9. 历史学家在争什么（historiography）
   - 10. 常见误解（清坑）
   - 11. 思考问题（不下结论）

3. **4 个附录**：
   - A 时间线
   - B 核心词汇
   - C 人物 cheat sheet
   - D 可视化提示（给 atlas / quiz / reading 模块取材）

## 写作约束（ALL TOPICS）

1. **教材为锚** — 第 0 节明示教材出处（页码、章节），narrative 是"骨头之上的肉"，
   不替代教材
2. **AP/SAT rigor** — 多层因果、historiography、跨文明、continuity/change，每 Topic 都要
3. **价值观引导思考、不下结论** — 多视角并列，"AP 不会让你 0/1 回答"
4. **趣味性** — 7 年级可读，避免大学教科书味；用具体细节（"crown jewels in marsh"
   / "Anna Komnene 软禁中写完巨著"）
5. **中性绝对不能崩** — 任何文明 / 任何宗教 / 任何政治立场都不能被妖魔化或浪漫化

## 写新 Topic 的流程

1. 读教材对应章节（HM 系列 K-12 / AP textbook）
2. KB 拉所需 entities（people / events / places），跑 `npm run kb:fetch`
3. **用 Opus 写 narrative**（参考 magna-carta-1215.md / crusades-1099.md 模板）
4. Sarah Chen reviewer agent 审 narrative（一次性，不是审 13 轮）
5. 写 13 turn objectives（每个 ~100 字，single-action）
6. **Willow 模拟器** 跑一遍验证对话体感
7. 跑 `npm run kb:fact-check {topicId}` 验证事实
8. Atlas view + 集成测试
9. Ship

## 当前状态

| Topic | Narrative | Status |
|---|---|---|
| magna-carta-1215 | ✅ | template prototype |
| crusades-1099 | ✅ | re-write coming |
| tang-song-china | ⏳ | TODO |
| 38 个余下 G7-K12 | ⏳ | TODO |

---

**任何时候改 narrative = 同时改了 Atlas / Quiz / Reading / Conversation 的内容来源。
这是单一真理来源（single source of truth）。**
