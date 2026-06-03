# 当代美国 1980 至今 · Contemporary United States Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on narrative，**只写本账本文件**，绝不改内容。
>
> ⚠️ **本 topic 是全套课里最需要创始人 Rule-0 亲审的一门。** 它写的是活着的、还在吵的政治。
> 史实层面（日期/数字/事件）非常稳；真正需要人审的不是「事实对不对」，而是「中立有没有守住」——
> 每一处政治评价是否都把支持/批评两边并排摆好、没有任何一边被偏向。下面把**最高党派风险的三处**单列。

```
topicId:    contemporary-us-1980
生成日期:    2026-06-02
来源文件:    lib/history-narratives/contemporary-us-1980.md（CN narrative kernel）
            + lib/history-narratives/contemporary-us-1980.en.md（EN parallel）
            （storyboard 尚未生成；本账本只覆盖 narrative kernel）
claim 总数:  26
🚩 红旗数:   6 — 其中 3 条为 ⚠️Rule-0-neutrality（党派中立需创始人亲判，最高优先级），
            3 条为 ⚠️downgrade-wording（措辞收紧）。无 needs-source、无演绎角色未标注。
defaultLens: rustbelt-family-receiving-end（承受端工薪家庭，composite）
```

**一句话总评**：史实地基**非常稳**——所有日期、税率、票数、死亡人数、协定生效日均对得上权威来源（已逐条 WebSearch 核实）。三个主角均显式标注为 **composite（复合人物）**，不对应任何真实个人或政治人物，符合 anti-fab 透明红线。红旗集中在**党派中立的判断题**（不是事实硬伤）：所有对里根/战争/2008/极化的评价，narrative 已用「支持者说…／批评者说…」并排框架处理，但**这类并排是否真的对称、有没有隐性偏向，必须由创始人 Rule-0 亲判**——这是 LLM 自评无法兜底的维度（见 AUTHORING_PIPELINE「不能前置」清单：counter-frame essentialism risk 需专家判断）。

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：neutrality / date / number / quote / causal / motive / representativeness / absolute。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `⚠️neutrality-review` / `✋flagged`。
> 凡涉及对在世政治人物/政党/现行政策的评价 → 自动进 neutrality 审查（本 topic 专属规则）。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | "1981 年 8 月里根签 Economic Recovery Tax Act，最高税率 70%→50%；1986 年税改后→28%，分两步跨两届"（§4.1 / §10.2 / 附录A）| date+number | encyclopedia | 维基 ERTA：1981-08-13 签署，top rate 70→50；Tax Reform Act 1986 → 28%（分阶段）。"分两步跨两届"准确 | ✅verified |
| 2 | "里根第一次就职 1981-01-20；'government is the problem'"（§5A，附录A）| quote+date | primary | 里根 1981-01-20 First Inaugural 原文 "government is not the solution… government is the problem" | ✅verified |
| 3 | "里根 1987-06-12 'Mr. Gorbachev, tear down this wall'"（§5B，附录A）| quote+date | primary | 1987-06-12 Brandenburg Gate 演说原文 | ✅verified |
| 4 | "柏林墙 1989-11-09 夜里被人群涌开，分隔 28 年"（§4.3，附录A）| date+number | encyclopedia | 维基 Fall of the Berlin Wall：1989-11-09；墙 1961 建，存在约 28 年 | ✅verified |
| 5 | "戈尔巴乔夫 1991-12-25 辞职，苏联 12-26 正式解散，冷战约 40 年"（§4.4，附录A）| date | encyclopedia | 维基 Dissolution of the USSR：Gorbachev 辞职 1991-12-25，正式解散 1991-12-26 | ✅verified |
| 6 | "NAFTA 1994-01-01 生效"（§4.5，附录A）| date | encyclopedia | 维基 NAFTA：1994-01-01 生效 | ✅verified |
| 7 | "第一代 iPhone 2007 年 6 月上市"（§4.6，附录A）| date | encyclopedia | Apple/维基：iPhone 1st gen 2007-06-29 在美上市 | ✅verified |
| 8 | "中国 2001-12-11 加入 WTO"（§4.7 / §8，附录A）| date | encyclopedia | WTO/USTR：China accession 2001-12-11 | ✅verified |
| 9 | "9/11 2001-09-11，约 2,977 人遇难"（§4.8，附录A）| date+number | encyclopedia | 维基 Casualties of 9/11：官方死亡 2,977（不含 19 名劫机者）。WTC 2,753 + Pentagon 184 + Shanksville 40 | ✅verified |
| 10 | "2001-10-07 出兵阿富汗"（§4.8，附录A）| date | encyclopedia | 维基 US invasion of Afghanistan：2001-10-07 开战 | ✅verified |
| 11 | "2003 年 3 月出兵伊拉克；WMD 理由后引争议"（§4.9，附录A）| date+causal | encyclopedia | 维基 Iraq War：2003-03-19/20 入侵；WMD 理由后证不实，广泛争议 | ✅verified |
| 12 | "2008-09-15 Lehman Brothers 破产"（§4.10，附录A）| date | encyclopedia | 维基 Bankruptcy of Lehman Brothers：2008-09-15 申请 Chapter 11，美史最大破产案 | ✅verified |
| 13 | "大衰退 2007.12-2009.06；约失 870 万岗位；失业率 2009-10 达 10%"（§4.10，附录A）| date+number | textbook | NBER 衰退区间 2007-12 至 2009-06；~8.7M 岗位流失；失业率 2009-10 峰值 10.0% | ✅verified |
| 14 | "奥巴马 2008-11-04 当选首位非裔总统，2009-01-20 就职"（§4.11，附录A）| date | encyclopedia | 维基/History：2008-11-04 当选 44 任总统，首位非裔；2009-01-20 就职 | ✅verified |
| 15 | "阿片危机：OxyContin Purdue 1995-96 推出；2010 转海洛因；2013 后芬太尼；1999-2020 约 56.5 万人死于阿片过量"（§4.12，附录A）| date+number | textbook | CDC/维基：OxyContin 1995-96（Purdue）;三波（Rx 1990s / 海洛因 ~2010 / 芬太尼 2013+）;1999-2020 约 565,000 阿片相关过量死亡 | ✅verified |
| 16 | "美国 2000s 制造业岗位流失约 570 万（33%）"（§2 L2 隐含 / §6 / §9）| number | textbook | ITIF/EIG：2000-2010 约 5.7M（33%）制造业岗位流失。narrative 未给死数字，用「一座座关」叙述化，保守 | ✅verified |
| 17 | "中国 1978 年 12 月十一届三中全会启动改革开放，邓小平总设计师"（§8，附录A）| date | encyclopedia | 维基：第三次全会 1978-12-18 至 12-22；邓小平 "总设计师" | ✅verified |
| 18 | "WARN Act 1988，关厂前须提前通知"（§5C，附录A）| date | encyclopedia | 维基 WARN Act：1988 通过，大企业关厂/大裁员须提前 60 天通知 | ✅verified |
| 19 | "美国关掉的工厂和中国开起来的工厂，往往是同一条供应链两头"（§1 / §4.2 / §8）| causal | textbook | 主流全球化经济史叙述；措辞用"往往"留余地，未做绝对单因归结 | ✅verified |
| 20 | "保守主义转向：支持者说释放经济活力/终结滞胀，批评者说加剧不平等/削弱工人保护"（§2 L3 / §4.1）| neutrality | textbook | 双方框架均为主流学术/公共论述真实存在；并排呈现 | ⚠️neutrality-review（见红旗 #1）|
| 21 | "2003 伊拉克战争：支持者说反恐延伸，批评者说理由不实/代价过重"（§4.9 / §5D）| neutrality | encyclopedia | 双方立场均真实存在；退伍军人 lens 居中。需审两边是否对称 | ⚠️neutrality-review（见红旗 #2）|
| 22 | "2008 危机归因：一边算华尔街贪婪+监管缺位，一边算过度借贷+政策激励"（§4.10 / §10.5）| neutrality+causal | textbook | 两种归因均见于主流文献（FCIC majority vs dissent）；并排呈现 | ⚠️neutrality-review（见红旗 #3）|
| 23 | "里根 'government is the problem' 被支持/批评两边当相反证据引用"（§5A）| neutrality | inference | 合理的 historiographic 观察；属解读性陈述非硬事实 | ✅verified（已显式并排，无偏向）|
| 24 | "奥巴马当选是'一个国家在种族问题上跨出的历史一步'"（§4.11）| rhetoric | encyclopedia | 措辞用"对很多人"限定（"对很多人，这是…"），未做全称断言 | ✅verified（见红旗 #4 仅措辞建议）|
| 25 | "冷战'赢了'二十年后赢家陷入空前内部分裂"（§4 反讽 / §11.4）| rhetoric | inference | "空前"为修辞性强调，可收紧 | ⚠️downgrade-wording（见红旗 #5）|
| 26 | "政治极化加深，两党与两种美国越来越难对话"（§4.12 / §6 / §9）| representativeness | textbook | 极化上升有大量实证支撑（Pew/政治学界）；"两种美国"为概括修辞 | ✅verified（见红旗 #6 仅措辞建议）|

---

## 🚩 红旗句（创始人必审）

> **前 3 条是 Rule-0 中立判断题**（最高优先级，LLM 自评无法兜底，必须创始人亲判）。
> **后 3 条是措辞收紧**（低优先级，可批量改）。

### A. Rule-0 中立审查（最高优先级 — 这门课的命门）

1. **[#20]** `保守主义转向的支持/批评并排`（§2 L3、§4.1）
   - **要审什么**：narrative 已把「支持者说释放活力/终结滞胀」与「批评者说加剧不平等/削弱保护」并排。**需创始人判断：两边的篇幅、措辞强度、可信度是否对称？** 有没有哪一边被写得更"有道理"或更"像稻草人"？
   - **现状自评**：两边各一句、句式平行、都不带贬义形容词，刻意对称。但「对称感」是主观的，**这正是 AUTHORING_PIPELINE 标注为"不能前置、必须专家判断"的 counter-frame essentialism risk**。
   - **建议**：创始人通读 §4.1 + §2 L3，确认无隐性偏向后过 Rule-0 Gate。

2. **[#21]** `2003 伊拉克战争的支持/批评并排`（§4.9、§5D）
   - **要审什么**：这是全 topic **党派风险最高的一处**。narrative 写「支持者当时说反恐延伸，批评者说理由不实/代价过重」，并让退伍军人 lens 居中（既见意义、也见代价）。**需创始人判断：是否真的两边都站得住、没有把任一立场写成默认正确？** 尤其「理由不实」是史实（WMD 未找到）还是评价？——这里 narrative 表述为「出兵理由后来引发巨大争议」（事实陈述）+ 双方说法（评价并排），处理上刻意把"事实"与"评价"分层。
   - **现状自评**：退伍军人 lens 的「两边都站过」设计本身就是 Rule-0 的结构性保险；§11.3 思考题明确不预设答案。
   - **建议**：创始人重点读 §4.9 + §5D + §11.3，确认伊拉克战争评价的两面对称。**这一处若过，全 topic 的 Rule-0 基本稳。**

3. **[#22]** `2008 危机归因的两本账并排`（§4.10、§10.5）
   - **要审什么**：narrative 写「一边算华尔街贪婪+监管缺位，一边算过度借贷+政策激励，两边的账至今没合」。这对应 FCIC（金融危机调查委员会）报告的多数意见 vs 异议——是真实存在的两种主流归因。**需创始人判断：两种归因是否被中立并置，没有暗示哪个是"真因"。**
   - **现状自评**：§10.5 误解条目明确写「不是只华尔街的错，也不是只借款人的错」，刻意双向清坑。
   - **建议**：低于 #21 但仍属 neutrality 维度，建议与 #20/#21 同批由创始人过。

### B. 措辞收紧（低优先级）

4. **[#24]** `奥巴马当选'历史一步'`（§4.11）
   - **问题**：非硬伤。narrative 已用「对很多人，这是…」限定，未做全称断言，处理合规。唯一可考虑：是否再加一句「也有人当时对其政策有不同评价」以保持与其他总统同等的"并排"待遇？
   - **建议**：当前写法（聚焦"首位非裔总统"这一**史实里程碑**而非政策评价）已是中立安全区，**可保持现状**。列此条仅为透明。

5. **[#25]** `冷战赢了二十年后赢家'空前'内部分裂`（§4 反讽、§11.4）
   - **问题**："空前"（unprecedented）是修辞性强调，严格说美国历史上分裂程度的横向比较有争议（内战时期更甚）。
   - **建议**：把"空前的内部分裂"改为"严重的内部分裂"或"深刻的内部分裂"，去掉绝对级。低优先级。

6. **[#26]** `"两种美国"`（§4.12、§6、§9）
   - **问题**："两种美国"是有力的概括修辞，但严格说现实更碎（不止两极）。
   - **建议**：可保留（7-12 年级层面是有效的简化框架），或在首次出现处加一句"现实当然更复杂"。最低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物，逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 上行者（Lens A）| actor | **完全 composite**：虚构的"约 1962 生于锈带小城的上行者"，代表一类人，无具名、无真实原型 | ✅**已透明标注**（§3 Lens A 开头明写"他是一个复合人物，代表一类…"；附录C 标 composite）|
| 退伍军人（Lens B）| mediator | **完全 composite**：虚构的"约 1985 生、9/11 后入伍的退伍军人"，代表一代人，无具名 | ✅**已透明标注**（§3 Lens B 开头明写"复合人物，代表…一代退伍军人"；附录C 标 composite）|
| 工薪家庭（Lens C，DEFAULT）| commoner | **完全 composite**：虚构的"锈带小城工薪家庭"，代表千千万万个家庭，无具名、用虚构复合小城（不绑真实地名）| ✅**已透明标注**（§3 Lens C 开头 + §2 L0/L1 明写"虚构的复合小城，不绑定任何真实地名"；附录C 标 composite）|
| 城边关停的工厂（cross-lens micro-detail）| 全 3 lens | 泛指性意象（"城边那家工厂"），无具体厂名/企业 | ✅可接受（无具名捏造，纯叙事意象）|
| 真实政治人物（里根/戈尔巴乔夫/奥巴马/邓小平）| 背景锚 | **非合成**：均真实人物，仅作背景锚点，**学生不扮演**；引语均逐字核实 | N/A — 真实人物，已声明"当历史对象、并排呈现、不下结论"（附录C 注）|

**结论**：本 topic **无未标注的合成人物**。三个 composite 主角全部在 §3 开头 + 附录C 双重透明标注，且明确声明"不对应任何真实个人或政治人物"，符合 `HISTORY_EVIDENCE_LAYER.md` composite 透明红线。占位符语法（{{userCity|加州}} / {{userCity|California}}）已在 §附录D 用于 user-specific 字段，符合 AUTHORING_PIPELINE 第 10 条。

---

## 备注

- **覆盖范围**：本账本只覆盖 **narrative kernel**（CN + EN）；lens storyboard 尚未生成，storyboard 落盘后需补一轮逐节点账本（重点复查 synthesis 节点的 neutrality 标签是否中立，per 第 8 条 B）。
- **直接引语分层核验**（全部 ✅，逐字对一手文本）：
  - 里根 "government is the problem"（1981 First Inaugural）/ "Mr. Gorbachev, tear down this wall"（1987 Brandenburg Gate）—— 均逐字对得上。
  - WARN notice / 关厂通知为**泛指模板**（"兹通知：本厂将于 X 月 X 日永久关闭"），非伪造特定企业文件，已标"泛指，非特定企业"。无把演绎句排成档案样式的违规。
- **数字精度复核**（本 topic 高风险类）：9/11 = 2,977（不含劫机者，已核）/ 大衰退失业率峰值 10.0%（2009-10）/ 制造业流失 ~5.7M（2000s）/ 阿片死亡 ~565,000（1999-2020）/ 税率 70→50→28（分两步）—— 全部 WebSearch 核实，无偏差。
- **用到的外部核实来源**：Wikipedia（ERTA / Reagan tax cuts / Fall of the Berlin Wall / Dissolution of the USSR / NAFTA / iPhone 1st gen / China WTO accession / September 11 attacks / Casualties of 9/11 / US invasion of Afghanistan / Iraq War / Bankruptcy of Lehman Brothers / Opioid epidemic / WARN Act / Reform and opening up / Third Plenum）、Britannica、CDC、ITIF / EIG（制造业流失）、Apple Newsroom、WTO/USTR、Reagan Library / Reagan Foundation（演说原文）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 —— **Gate 2（Fact Ledger）史实层可过**（所有高风险 claim 均有权威来源，无 needs-source 缺口）。**但 Rule-0 Gate（中立性）必须由创始人亲审红旗 #1/#2/#3 后才能放行**——这是本 topic 的特殊门槛，史实稳 ≠ 中立稳。**强烈建议创始人优先审 #21（伊拉克战争），它过则全局基本稳。**
