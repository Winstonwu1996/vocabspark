# History · Gate 3 框架（pedagogy smoke + 上线策略）

**Status**: 方向锁定 — founder 2026-05-23 拍板
**前提**: 22 草稿内容质量 ready / Gate 1（机械）+ Gate 2（Fact Ledger 硬错）实质过 / **Gate 3 尚未过 / 22 全量上线 No-Go / 选 1-2 topic 进 hidden beta = Go**
**关系**: 落地 `docs/HISTORY_EVIDENCE_LAYER.md` §6 四级 gate 的 Gate 3 + Gate 4。

---

## 0. 核心原则：Gate 3 不是又一个工程 checkbox

> 学生填了 Learning Receipt、N6/N12 有输出、页面跑通 ≠ 她学会了。
> 这会重复结构性问题：**工程上有证据 ≠ 教育上有效**。

所以 Gate 3 的通过判定**不看"是否完成"，看"留下的学习证据够不够格"**。Learning Receipt
**必须被判分**——否则学生写「我学到宪法很重要，因为它改变美国。我只听了一个人」也算完成，
但没证明掌握具体历史。

MVP 阶段（n=1 Willow / 少量模拟）用**人工 rubric 判分**（本文 §2）；beta 规模再上半自动评分（§7）。

---

## 1. 范围：2 个样板 topic，只跑 default lens

| topic | 选它的理由 | default lens |
|---|---|---|
| `constitutional-convention-1787` | 低争议、高课纲价值、结构清楚，civics 样板 | mum-bett-receiving-end |
| `chinese-exclusion-1882` | 身份相关 dark topic，验证情绪边界 / receiving-end / 中文支架是否真适合 13 岁 | taishan-railroad-worker-receiving-end |

**只跑 default lens**：真实用户大概率先只跑一遍。Gate 3 要验证的就是——**单 lens 是否已自洽、是否留得下有效学习证据**。
（world-war-two-1942 可作 chinese-exclusion 的替补 dark 样板。）

---

## 2. Learning Receipt 判分 rubric（Gate 3 核心）

每张收据 4 项，逐项判 **pass / weak / fail**：

| 证据项 | ✅ pass | △ weak | ❌ fail |
|---|---|---|---|
| ①事实锚点 | 2-3 个**具体**事实（年份/人名/事件/数字），非泛泛感受 | 1 个具体事实 + 套话 | 全是感受（「很重要」「很惨」），0 具体 |
| ②因果解释 | 清楚一个「因为 A，所以 B」，A/B 都具体 | 有因果意图但 A 或 B 模糊 | 没有因果，只有结论 |
| ③视角限制 | 说得出"我刚听了谁的一边 + 还缺谁的声音" | 知道"只听了一边"但说不出缺谁 | 没意识到有别的视角 |
| ④英文表达 | 一句相关英文，意思达；语法错无所谓 | 英文但与本课弱相关 | 空 / 完全无关 / 纯中文 |

**单张收据通过** = ①②③ 至少各 △ 以上，且 ①≥pass 或 ②≥pass（至少一个核心维度过硬）。④ 不卡（错一点没关系，空则记弱）。

> 例（user 给的反例）「我学到宪法很重要，因为它改变美国。我只听了一个人。」
> → ①fail（无具体事实）②fail（A/B 都空泛）③weak（知道只听一边但没说缺谁）④缺 = **不通过**，需引导重答或判该 lens 未达 Gate 3。

---

## 3. recall 协议（即时 + 48 小时）

| 时点 | 怎么测 | 通过线 |
|---|---|---|
| **即时**（跑完当场，= 收据）| 上面 rubric | 单张收据通过 |
| **48 小时后**（家长口头问 / 简短重问）| 不看课件，问她还记得什么 | **≥ 2 个具体事实 + ≥ 1 个因果关系** |

48h 是 Gate 3 真正的硬指标——这比"通关了"重要，它测的是留存而非当场表演。

---

## 4. dark topic 情绪边界 checklist（chinese-exclusion / ww2 必查）

跑完后观察，**任一出现 = dark topic 未过 Gate 3**：
- ❌ 明显**创伤模拟感**（"像我自己在被折磨/被杀"）
- ❌ **被操纵感**（"它在硬逼我难过/感动"）
- ❌ **退缩**（"太惨了所以我不想学/想跳过"）
- ✅ 期望状态：见证者式的"我知道了、我记住了、我想多问"，而非情绪过载或麻木

（呼应 `HISTORY_EVIDENCE_LAYER.md` §1.3 dark 红线：见证者声音 not 创伤模拟。）

---

## 5. 中立性结构检查（不只在词，在 framing）

4ec174a 的 wording pass 清了强措辞，但中立性更难的是结构。Gate 3 加一个**数据侧检查**：

> 看学生跑完**自然写出的 receipt**。如果 **≥80% 学生得出同一种单线道德结论**，说明 framing 仍偏。

要问的结构问题（评 receipt 时对照）：
- 谁获得**内心复杂性**？谁只是**承受苦难**？
- default lens 会不会让孩子**天然站到某一边**？
- N10/N11「两种说法」是真平衡，还是**一边情绪重量更大**？

n=1 阶段先定性观察；beta 规模跑 80% 阈值统计。

---

## 6. default lens 必须单独成立（SOP 正式承认）

> **default lens 必须单独成立；第二、第三 lens 是加深，不是补救。**

每个 default lens 收尾必须明确：① 你现在只听到了一边 ② 另一个 lens 会挑战/补充你的判断；
且 **receipt ③ 必问"你还没听到谁的声音？"**（已 live）。否则 receiving-end default lens 在
只跑一遍时会**把结论提前锁死**。

**当前 2 样板审计**：
- chinese-exclusion taishan：✅ 有 mid-lens 跨视角指针（N6"你换到斯坦福那一遍…"）+ receipt ③。
- constitutional mum-bett：收尾原本只有平衡 synthesis（谎 vs 支票）+ receipt ③，**缺显式"去听 Madison/Sherman"指针 → 本次已补**（mb-n11 加一句跨视角提示）。
- 此要求已写入 `AUTHORING_PIPELINE.md`，后续所有 default lens 收尾必须含此指针。

---

## 7. 上线策略：hidden beta，分批进 `TOPIC_REGISTRY`

不等 22 全 Gate 3、也不 22 一起进。**分批 + 每批看数据**：

| 批次 | topic | 门槛 |
|---|---|---|
| **第 1 批** | `constitutional-convention-1787` + 1 个身份/dark（`chinese-exclusion-1882`）| Gate 3 过 + 本文全部检查 |
| **第 2 批** | 再加 3-5 个低风险（hamilton / reconstruction / french-revolution / industrial-revolution / hammurabi…）| 第 1 批数据健康 |
| **第 3 批** | 高风险：cold-war / scramble(Congo) / world-war-two(Manzanar) / jackson(Trail of Tears) | 前两批稳 + dark 边界验证过 |

每批观测指标：完成率、跳出点、tired mode 使用、查词、N6/N12 答案质量、**Learning Receipt 质量**、**48h recall**。

---

## 8. beta 前必做的工程前置（runtime，独立于 Gate 3 smoke）

Fact Ledger 只保护**预制内容**，不保护**运行时追问**。hidden beta 上线前至少：

1. **DeepSeek branch 回答分级**：课件内 / 课件外但相关 / 不确定或争议——课件外明确声明"超出本节材料，先给谨慎解释"。
   （否则用户问"Stanford 是不是靠华工血汗建的？"DeepSeek 可能过度肯定或过度软化。）
2. **branch 追问日志**：记录用户自由追问，用来发现 DeepSeek 最常跑偏的点。

> 这两件是 batch-1 上线的 gating，比 Gate 3 smoke 稍后；属 runtime 改动，需独立小 PR。

---

## 9. 判定汇总（founder 2026-05-23）
- 内容质量：**ready** ｜ Gate 2：**实质过** ｜ Gate 3：**未过** ｜ 22 全量上线：**No-Go** ｜ 选 1-2 topic 进 hidden beta：**Go**
- 下一步：constitutional-convention-1787 做 Gate 3 样板 → chinese-exclusion-1882 验 dark 边界。
