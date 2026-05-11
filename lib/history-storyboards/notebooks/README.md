# 同伴笔记本架构 (Companion Notebook Architecture) v1

## 这是什么

VocabSpark 历史课 Story-First Pedagogy v2 的"出口闭环"层。

Story-First v2 已经 ship 了 15 个 Topic，每个 Topic 是 3 lens × 12 nodes 的故事——
通过角色视角让学生**感受**历史，而不是背诵年表。

但课纲对标审计（`lib/history-narratives/curriculum-alignment-audit.md`）发现一个结构性问题：
**故事擅长情感锚定，不擅长考点闭环**。启蒙运动 Topic 课纲覆盖率只有 52%（C−），
最严重缺口是 Locke（自然权利）、Montesquieu（三权分立）、Rousseau（社会契约）三位 AP 必考哲人
完全没有独立节点——因为他们都是"思想家"，没有适合做 lens 主角的戏剧性人生。

**同伴笔记本**就是给故事 + 课纲之间架一座桥。

## 角色：小薇 (Xiaowei)

12 岁，7 年级，ABC（亚裔美国华裔），与 storyboard reader 同龄。

她不是老师，是"学习同伴"——和读者一起上同一门课、读同样的故事、写同一份笔记。
她的语气：

- 不居高临下（不是"我来教你"，而是"我也在学，我把笔记给你看"）
- 有具体细节（"老师强调这个考试一定考"、"我的记忆口诀是 L-E-J"）
- 不掩饰矛盾（"卢梭写得很美，但他对自己孩子做的事很难看"）
- 中英对照（reflect ABC 身份，符合 VocabSpark 双语用户画像）

## 三段结构

### 1. `preview` — 入口预习笔记

学生**点开 Topic 之前**先看到的内容。

作用：
- 给出**学习目标 schema**（要学的人名、术语清单）
- 给出**思维框架**（老师的"don't just memorize names and dates"那句话）
- **不剧透**——只列清单，不解释，让学生带着问题去读故事

### 2. `mainConcepts` — 出口复习笔记

学生**读完 3 个 lens 故事之后**回来看到的内容。

作用：
- 对照 preview 的清单，逐个确认能不能解释
- 每个考点卡有两种形态：
  - **故事覆盖型** (`storyAnchor.covered = true`)：直接 reference storyboard 的 lens + nodeId，
    小薇的笔记是"我在 Lens X 第 Y 节读到过"。**不重复故事内容**——故事已经讲过了。
  - **故事未覆盖型** (`storyAnchor.covered = false`)：用 `standaloneText` 提供 mini-lesson，
    300-500 字，加上一段 `xiaoweiNote` 标注考点关键句和记忆口诀。

所有考点卡都标注：
- `standardRef`: 对齐的 AP / CA HSS 标准编号
- `examFrequency`: `highest` / `high` / `mid` / `low`——告诉学生哪些必考

### 3. `thinkingQuestions` — 出口批判性思考

3 道 DBQ 入门题。每题：
- 问题本身（cn + en）
- 提示 `hintCn` / `hintEn`（不给答案，给思考方向）
- `conceptsActivated`: 这道题"激活"哪几张考点卡——形成知识点之间的网状连接

不是为了测试，是为了**让学生体验"用一个概念去问一个问题"的感觉**——这是 AP DBQ 的底层能力。

## 与 storyboard 的协作关系

```
┌──────────────────────────────────────────────────────────┐
│  Topic: Enlightenment                                      │
│                                                            │
│  ┌──────────────┐    ┌──────────────────────────────┐    │
│  │   preview    │ →  │  storyboard (3 lens × 12 N)  │    │
│  │  (小薇预习)   │    │  Voltaire / Gouges / Toussaint│    │
│  └──────────────┘    └──────────────┬───────────────┘    │
│                                      │                     │
│                                      ↓                     │
│  ┌──────────────────────────────────────────────────┐    │
│  │  mainConcepts (8 cards)                            │    │
│  │  · 故事覆盖：Voltaire/Gouges/Toussaint/Contradictions│   │
│  │  · 独立 mini-lesson：Locke/Montesquieu/Rousseau/   │    │
│  │                       French Revolution            │    │
│  └──────────────────────────────────────────────────┘    │
│                                      │                     │
│                                      ↓                     │
│  ┌──────────────────────────────────────────────────┐    │
│  │  thinkingQuestions (3 DBQ-style)                   │    │
│  └──────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘
```

**双向绑定**：
- 故事覆盖的考点：`storyAnchor.lens + nodeIds` 反向指回 storyboard
- 故事提到但没展开的：`storyAnchor.mentionedIn` 列出"故事里的彩蛋位置"
  （例：Locke 卡片标注 `voltaire-N4` 是 Voltaire 流亡英国读 Locke 那一节）

## 维护原则

1. **故事覆盖 vs 独立 mini-lesson 的判断**
   - 如果某考点是 lens 主角本人或他的核心事件 → 故事覆盖型（用 storyAnchor）
   - 如果某考点是 lens 主角"读到的书 / 受影响的思想 / 同时代的事件" → 独立 mini-lesson
   - 启蒙运动案例：Voltaire/Gouges/Toussaint 是覆盖型；Locke/Montesquieu/Rousseau 是独立型，
     因为他们是 lens 主角"读到的思想家"。

2. **不重复 storyboard 内容**
   - 故事覆盖型的 xiaoweiNote 只做"回忆 + 考点提炼"，不重述情节
   - 独立 mini-lesson 才提供完整知识

3. **小薇的语气保持一致**
   - 永远用第一人称（"我读过"、"我的记忆口诀"、"老师说"）
   - 永远有具体的考试相关细节（"选择题考过"、"DBQ 高频"）
   - 永远不掩饰 careful framing（启蒙哲人的言行不一）

4. **课纲对齐永远标注**
   - `standardRef` 必填，至少一个 AP 或 CA HSS 编号
   - `examFrequency` 必填——这是小薇 vs 通用 AI 助教的关键差异

## 如何扩展到其他 14 个 Topic

按以下顺序（基于审计的覆盖率排序）：

| 优先级 | Topic                    | 当前覆盖率 | 缺口                                          |
| ---- | ------------------------ | --------- | -------------------------------------------- |
| P0   | enlightenment            | 52%       | Locke/Montesquieu/Rousseau ← **已完成**       |
| P1   | scientific-revolution    | ~60%      | Galileo/Kepler/Bacon 等被 Lens 主角"读到"的人  |
| P1   | reformation-1517         | ~65%      | Calvin/Council of Trent 等结构性事件          |
| P2   | age-of-exploration-1492  | ~70%      | Treaty of Tordesillas / Encomienda 经济结构   |
| P2   | renaissance-1500         | ~70%      | Petrarch/Erasmus/Machiavelli 思想家           |
| ...  | ...                      | ...       | ...                                          |

每个 Topic 的步骤：
1. 跑 `curriculum-alignment-audit.md` 找出 Topic 的"未覆盖考点列表"
2. 判断每个考点是覆盖型还是独立型
3. 写 `lib/history-storyboards/notebooks/{topic-id}.js`，按 enlightenment.js 的 schema
4. 在 `notebooks/index.js` 注册新 topic
5. `node --check` 验证语法
6. 集成到 reader UI（点击 Topic → preview，读完 → mainConcepts + thinkingQuestions）

## 文件清单

- `enlightenment.js` — 第一个 demo (8 考点 + 3 DBQ 题)
- `index.js` — registry + helper
- `README.md` — 本文档

## schema 版本

`schemaVersion: 1`。如果未来要加字段（例如 audio 朗读、配图、与单词卡的关联），bump 到 2 时
保持向后兼容：reader 端用 `notebook.schemaVersion >= 2 ? newPath : oldPath` fallback。
