# 「想一想」框 + storyboard content cross-Topic 假设 — 全局审计 + 修复 (2026-05-26)

## 起因

线上反馈: `tang-song hz-n10` 的「想一想」框写「5 个保全样本 4 个用分散+复制」,假设学生学过 Mali/Renaissance/Reformation/AoE 4 课对照。Lens-based 架构下学生一次只学一个 topic, 这种 cross-Topic 假设是 hard fail。

用户要求: **「这些问题除了修改以外,要放在全局角度优化,不是只解决这一个 Topic」**。

## 审计 + 修复 (本轮)

### Phase 0 — 写 audit script

`scripts/audit-engagement-hooks.mjs`: 启发式扫描所有 51 lens-based topic × 3 lens × storyboard nodes 的 `engagementHook`,标记 cross-Topic 关键词 / 多重 N-对比 / 英文术语堆叠 / 过长。

发现: 97 条 suspect (含误报)。复核 → 真 cross-Topic 4 条 hook。

### Phase 1 — 系统性发现 (grep)

转用 `grep "你跑过"` + `grep "Run the .*topic"` 后,发现 **更系统化的问题**:

| 维度 | 数 |
|---|---|
| 受影响 storyboard 文件 | 24 |
| CN 显式假设 site (「你跑过 X 那段历史」) | 60 |
| EN 显式假设 site ("Run the X topic") | 45 |
| **合计** | **105** |

模式: `(...你跑过 X 那段历史,会认得...)` — 内容作者预设学生按 vocabspark 内部顺序学完所有 topic。

### Phase 2 — 自动 codemod 清扫

`scripts/strip-cross-topic-parens.mjs` 3 阶段:
- **Phase A** 整 paren 以 opener (`你跑过/你要是跑过/如果你跑过/在你跑过/Run the X topic`) 开头 → 删整 paren
- **Phase B** paren 中段含 opener 的句子 → 删那句, 空 paren 一并清
- **Phase C** body 非 paren 句子含 opener → 删那句

结果:
- Phase A 删: 12
- Phase B 删: 6
- Phase C 删: 14
- 加上第一版只删 opener-起头-paren 的 80 处, **共清掉 ~112 sites,涉及 16 文件**
- `grep "你跑过|Run the .*topic"` 残留: **0** ✅

### Phase 3 — 手工修 4 个高可见「想一想」hook

`engagementHook` 是 TakeawayCard「想一想」框唯一数据源, 用户高频可见。within-topic 化 4 条:

| Topic / Lens / Node | Before | After |
|---|---|---|
| pre-columbian / pachacuti-inca / N8 | "阿拉伯字母管理 Mali 的商贸" | "没有字、没有书、没有纸" |
| scramble-for-africa / leopold-ii / N9 | "Mali 帝国、Timbuktu 这样的知识中心" | "自己强大的帝国、当时世界级的知识中心" (去 Topic 名,保留 pedagogy) |
| babylonian-exile / jeremiah / N7 | "一千多年后又有个 Luther" | "说真话的人——历史上一个又一个" |
| magna-carta / king-john / N11+N12 | "唐律和 Magna Carta 都是成文法" | "历史上很多文明都写下过成文法" |

### Phase 4 — 修 audit script 误报

- `princip` 改 `\bprincip\b` word-boundary → 修正"Principia"(Newton 书) 误中
- 新增 `TOPIC_FAMILY_ALIAS`: `pre-columbian` 包含 `aztec` 关键词族,避免 Malintzin/Tenochtitlan 误判

第二遍跑: **cross-topic flag 数 = 0** ✅

## 审计第二遍残留分析 (90 条 suspect, 都是非 cross-Topic)

| Flag 类型 | 数 | 性质 |
|---|---|---|
| `cross-topic[*]` | **0** | ✅ 全清 |
| `long(>120)` | ~25 | lens N12 末节自反思段密度高 (e.g., sister-agnes/12 198 字)。**非 cross-Topic, 是行文密度问题** |
| `multi-N-set` (5/4/3 个) | ~30 | within-topic 叙事数字 (e.g., "5 个孩子", "9 天 5 个坑")。**不是 cross-Topic 对照** |
| `term-overload(≥3)` | ~35 | within-topic 密集英文专名 (Sister Agnes / Cromwell / Henry VIII 在 Reformation 课里)。**不是 cross-Topic** |

→ **本轮范围内的 cross-Topic 问题已清零**。其余 backlog 进入「lens 末节长度返工」+「ESL 术语密度」专项,跟 cross-Topic 是不同问题。

## Backlog 进 P2

- **Lens N12 末节长度收紧**: ~15 条 hook 在 121-198 字之间, 双层反思 + 双重对照。下一轮收到 80-100 字。
- **ESL 英文术语密度**: ~35 条 hook 单句 ≥3 个英文专名 (Reformation / Renaissance / Cold War 等多语境课偏重)。需 ESL 友好分批处理。
- **codemod 修后人工复核**: Phase B/C 删句可能留下连接词错位 (例:「。——」「,——」段尾破折号悬挂)。建议下一轮 ship 前 Codex 复核内容流畅度。
- **deliverGoal 字段 cross-Topic 残留**: deliverGoal 是内部 doc 用, 用户不可见, 不阻塞但下一轮清。

## 工程产物

- `scripts/audit-engagement-hooks.mjs` — engagementHook 启发式扫描器 (可重复跑)
- `scripts/strip-cross-topic-parens.mjs` — cross-Topic 显式假设 codemod (4 phase)
- 16 storyboard 文件批量修复 (+ 4 高可见 hook 手工 within-topic 化)

## 验证

- ✅ `npm run build` 绿
- ✅ `grep -P "(你跑过|你要是跑过|如果你跑过|在你跑过)"` 0 hit
- ✅ `grep "Run the .*topic"` 0 hit
- ✅ audit 第二遍 cross-topic flag 0

## 后续 (待 William 决策)

1. 推送上线? 这一轮变动只删/替换内容文本, 不动 schema/逻辑, 风险低。
2. 或先 Codex 复核 16 个改动文件的内容流畅度 (Phase B/C 删句可能有连接错位)?
