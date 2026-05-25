# 全球化 1945→ · Globalization Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    globalization-1995
生成日期:    2026-05-25
来源文件:    lib/history-storyboards/globalization-1995.js（3 lens：ceo-or-trade-architect / rust-belt-worker / global-south-garment-worker-receiving-end，各 11 节点）
            + lib/history-narratives/globalization-1995.md（narrative kernel）
            + lib/history-storyboards/notebooks/globalization-1995.js（同伴笔记本）
claim 总数:  27
🚩 红旗数:   3（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧，无 needs-source、无 flagged 事实硬伤
```

**一句话总评**：史实地基**很稳**——所有日期、年份、人名、数字、事件均对得上权威来源；narrative kernel + storyboard + notebook 三处的真实数字均已统一标"约数"（~36% / ~9% / ~8 亿 / ~1,134），Rule 0 双刃处理到位，三个 lens 主角均为 composite 合成人物**且已在 kernel §3 / notebook keyFigures / lens description 三处透明标注**，无未标注的合成角色。红旗集中在**一处反复出现的制度史压缩**（"Bretton Woods 1944 谈成 GATT"——GATT 实为 1947 年日内瓦单独签署，比布雷顿森林晚 3 年，且 IMF/World Bank 由布雷顿森林直接建立而 GATT 不是），以及 2 处轻度收紧（极端贫困降幅终点 9% vs World Bank 实测约 9.6%~10%；集装箱"1956"指 Ideal X 首航而非概念诞生年）。

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`。
> 凡 `dramatization` 等级而文中**未透明标注**为合成 → 自动进红旗。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | "1956 年 …… Malcom McLean（麦克莱恩）…… 把货物装进统一规格的大铁箱子（集装箱）"（`ceo-n2`，kernel §2 L1 / 附录 A / notebook container 卡）| date+name | encyclopedia | 维基 Malcom McLean / SS Ideal X：1956-04-26 改装的 Ideal X 从 Port Newark 首航 Houston，载 58 个 35 英尺箱；McLean 卡车运输商出身，公认现代集装箱之父 | ✅verified（见红旗 #3 措辞——"1956"指首航年，概念更早）|
| 2 | "集装箱 …… 把跨洋运一件货的成本砍掉了一大截 / 暴跌"（`ceo-n2` / `rb-n3`，kernel §5C / notebook）| causal+number | textbook | 维基/transportgeography：人工装船 $5.86/吨 → 集装箱 $0.16/吨（约 36 倍降幅）；Levinson《The Box》经济史共识。文中只用"砍掉一大截/暴跌"未给具体数字，稳妥 | ✅verified |
| 3 | "1944 年 …… Bretton Woods（布雷顿森林）…… 建了 IMF 和 World Bank，还谈出 …… GATT"（`ceo-n3`，kernel §2 L3 / §4 故事 2 / 附录 A / notebook bretton-woods 卡）| date+causal | textbook | 维基/state.gov：布雷顿森林会议 1944-07（44 国）确立 IMF + IBRD(World Bank)。**但 GATT 是 1947-10 在日内瓦单独签署，非布雷顿森林产物**，二者相隔 3 年 | ⚠️downgrade-wording（见红旗 #1）|
| 4 | "1995 年 …… GATT 升级成一个正式机构：WTO（世界贸易组织）"（`ceo-n3` / `rb-n3`，kernel §2 L3 / §4 / 附录 A / notebook）| date | encyclopedia | 维基/WTO.org：WTO 1995-01-01 正式成立，承接并取代 GATT，被称二战后国际贸易最大改革 | ✅verified |
| 5 | "1994 年美国、加拿大、墨西哥签了 NAFTA（北美自由贸易协定）"（`rb-n3`，kernel §2 L3 / §4 / 附录 A / notebook nafta 卡）| date | encyclopedia | 维基/Wilson Center：NAFTA 1994-01-01 生效（美加 FTA 扩入墨西哥）| ✅verified |
| 6 | "1991 年，苏联解体了。冷战结束，原来被两大阵营隔开的市场，第一次连成一片"（`ceo-n3`，kernel §2 L4 / §4 故事 3 / 附录 A）| date+causal | encyclopedia | 维基/Britannica：苏联 1991-12-26 正式解体，标志冷战终结；主流共识全球化由此加速 | ✅verified |
| 7 | "2001 年，中国加入了 WTO（世界贸易组织）"（`ceo-n8` / `gw-n8`，kernel §2 L4 / §4 故事 5 / §8 / 附录 A / notebook china-wto 卡）| date | encyclopedia | 维基/WTO.org/USTR：中国 2001-12-11 成为 WTO 第 143 个成员 | ✅verified |
| 8 | "二十年内成『世界工厂』…… 一大半写着 Made in China"（`ceo-n8` / `gw-n8`，kernel §8 / notebook）| representativeness | textbook | World Bank/主流经济史共识：入世后中国成全球制造业第一大国，"世界工厂"为标准表述；"一大半"为口语化夸张但量级成立 | ✅verified |
| 9 | "从 1980 年代到 2010 年代，中国大约有 8 亿人脱离了极端贫困 …… 人类历史上规模最大、速度最快的一次脱贫"（`ceo-n8` / `gw-n8`，kernel §1 / §6 / §8 / 附录 A / notebook）| number | textbook | World Bank 2022 报告《Lifting 800 Million People Out of Poverty》：自 1978 改革开放近 8 亿人脱贫，贡献全球减贫近 3/4。文中已标"大约/约 8 亿"，谨慎 | ✅verified |
| 10 | "从 1990 到 2010 年代 …… 极端贫困 …… 从大约 36% 降到了大约 9%"（`ceo-n5` / `rb-n8` / `gw-n5`，kernel §1 / §6 / §9 / 附录 A / notebook，多处反复）| number | textbook | World Bank：1990 年 37.1%（19 亿人 <$1.90/天）→ 2015 年约 9.6%（7.02 亿）。文中"约 36%"对应 1990，"约 9%"略低于 World Bank 实测 9.6%~10%；已标"约"，但终点 9% 偏紧 | ⚠️downgrade-wording（见红旗 #2）|
| 11 | "2013 年 4 月 24 日 …… 孟加拉国首都达卡郊外 …… Rana Plaza（拉纳广场）的八层楼塌了"（`ceo-n7` / `gw-n7`，kernel §1 / §4 故事 8 / 附录 A / notebook rana-plaza 卡）| date+place | encyclopedia | 维基 Rana Plaza collapse：2013-04-24 约 8:57 倒塌，Savar Upazila（大达卡都会区工业郊镇），八层楼。"达卡郊外"准确 | ✅verified |
| 12 | "压死了大约 1,134 个人，大多是年轻女工"（`ceo-n7` / `gw-n7`，kernel §1 / §4 / §6 / §7 / 附录 A / notebook）| number | encyclopedia | 维基：确认死亡 1,134（搜救至 5/13 结束），约 2,500 伤；制衣业工人多为年轻女性。文中已标"大约 1,134" | ✅verified |
| 13 | "前一天，墙上已经裂出了大口子，警告过有危险，但工人被叫回去继续上工"（`ceo-n7` / `gw-n7`，kernel §4 故事 8 / notebook）| causal | encyclopedia | 维基：4-23 大裂缝上电视，工程师判定不安全，底层商店/银行关闭，业主 Sohel Rana 称"安全"令工人次日返工，一厂威胁扣一月工资 | ✅verified |
| 14 | "这是制衣业历史上最惨的一次事故 / 最惨的一次"（`ceo-n7` / `gw-n7`，notebook "制衣业历史上最惨"）| absolute | encyclopedia | 维基：Rana Plaza 是"史上最致命的制衣厂灾难"，也是现代史最致命结构坍塌之一。绝对表述但有权威支撑，成立 | ✅verified |
| 15 | "Rana Plaza 不是意外，是体系的逻辑结果"（notebook rana-plaza 卡 / kernel §9 historiography）| causal | inference | 文中明确标为"逐底竞争派/批判政治经济学"立场（kernel §9），属史学一派观点而非中性事实，且已在 historiography 节并置对立派，处理合规 | ✅verified（已透明归派）|
| 16 | "Rana Plaza 倒塌后 …… 有约束力的工厂安全协议（Accord on Fire and Building Safety in Bangladesh, 2013）"（kernel §5B / notebook 补充）| causal | encyclopedia | 维基/cleanclothes：2013 后 200+ 品牌/工会签署有约束力的 Accord，第三方安全检查。kernel 给出准确协议名 | ✅verified |
| 17 | "WTO 成立宣言 …… raising standards of living, ensuring full employment …"（kernel §5A Marrakesh Agreement 序言）| quote | primary | 1994 Marrakesh Agreement 序言原文确含 "raising standards of living, ensuring full employment …"。逐字对得上一手文本 | ✅verified |
| 18 | "棉花在一个国家种、纱线在另一个国家纺、布在第三个国家织、衣服在第四个国家缝 …… 一件衣服出生在十个国家"（`ceo-n4` / notebook supply-chain 卡）| representativeness | textbook | 全球纺织供应链标准描述（多国分工）；"十个国家"为修辞化概括，符合供应链跨国分工的真实结构 | ✅verified |
| 19 | "与其给我一小时 20 美元，不如把活搬到一小时 1 美元的地方去"（`rb-n3` / notebook nafta 卡）| number | inference | 1990s 美国制造业工时工资 vs 全球南方低工资国差距量级成立（美约 $10-20/时 vs 部分发展中国家 $1/时上下）；属示意性对比数字，非具名档案，合理 | ✅verified |
| 20 | "在富国，被掏空的工业城市，叫『锈带』（Rust Belt）"（`ceo-n9` / `rb-n2` / `rb-n9`，kernel §2 L2 / 附录 B / notebook）| textbook | encyclopedia | 维基 Rust Belt：美国中西部/东北部去工业化后凋零的工业带（俄亥俄/密歇根/宾州西部等），标准术语 | ✅verified |
| 21 | "全球化让财富涨了，但 …… 没有平均分 …… 国与国之间、人与人之间的不平等，在很多地方反而拉大了"（`ceo-n9` / kernel §7 / §9 / notebook）| causal | textbook | 主流经济学共识（含国内不平等扩大）；文中用"在很多地方""反而"留有余地，未做全球单调归结（注：全球国家间不平等部分因中印崛起而缩小，文中限定"很多地方"+"人与人之间"避开了这一反例）| ✅verified |
| 22 | "被全球化抛弃的人用选票发声 …… 这股怒气至今还在搅动着富国的政治"（`rb-n9` / kernel §6 长期 / §7）| causal | textbook | 主流政治经济学共识：去工业化地区与富国保护主义/民粹政治的关联。措辞概括但有据，未点名具体选举 | ✅verified |
| 23 | "你被便宜地用着 …… 你做出来的东西，卖你一个月工资的好几倍"（`gw-n4` / `gw-n10`）| number | inference | 制衣工月薪 vs 成衣零售价的量级落差为行业常识（劳动成本常仅占零售价个位数百分比）；"好几倍"示意性、保守，未伪造具体差价 | ✅verified |
| 24 | "中国是全球化最大的赢家，也是它最大的车间"+"代价：无数中国农民工 …… 长工时、低工资、进城辛苦"（kernel §8 / `ceo-n8` / `gw-n8`，Rule 0 双向）| representativeness | textbook | World Bank/劳工史共识：中国既是最大减贫案例，农民工（含大量年轻女性）确经历长工时低工资。Rule 0 双向并置，未单边 | ✅verified |
| 25 | "跨国公司高管 / 锈带工人 / 制衣女工"三主角（3 lens description / kernel §3 / notebook keyFigures）| dramatization | dramatization | **三者均为 composite 合成人物**，代表各自一类真实群体，不冒充任何具名个人。**已在 kernel §3（逐个标"composite 合成人物"）+ notebook keyFigures（mustKnow:false + roleCn 标"合成人物"）+ lens description 三处透明标注** | ✅verified（已透明标注；见 composite 清单）|
| 26 | "1990 年代 …… 公司把工厂从俄亥俄搬到地球另一边 …… 报价单 8 美元 vs 3 美元"（`ceo-n1`）| dramatization | dramatization | 1990s 美国服装制造业外迁是真实典型操作；具体"俄亥俄/8 vs 3 美元/1994"为合成人物的示意性场景，**kernel §3 已声明此 lens 用 composite 且"做的每一步都是这一行真实、典型的操作"**，非伪造具名档案 | ✅verified（合成场景已透明归属 composite）|
| 27 | "英语成为很多领域的国际通用语 / 文化同质化（cultural homogenization）"（notebook cultural-globalization 卡，故事未覆盖的 mini-lesson）| textbook | textbook | AP World U9 标准考点；英语 lingua franca + cultural homogenization 均为通行学术术语，notebook 已标 storyAnchor.covered=false 为独立补课 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧），**无事实硬伤、无缺来源、无演绎未标注**。按影响排序。

1. **[#3]** `「1944 年 …… Bretton Woods …… 还谈出一个 …… 协议（后来叫 GATT）」`（`ceo-n3`；且 kernel §2 L3 / §4 故事 2 / 附录 A / notebook bretton-woods 卡反复表述"Bretton Woods 谈成 GATT"）
   - **问题**：把 **GATT 的诞生挂在了 1944 年布雷顿森林会议名下**。史实上：布雷顿森林会议（1944-07）直接建立的是 **IMF 和 World Bank（IBRD）**；**GATT 是 3 年后（1947-10）在日内瓦另行签署的**，并非布雷顿森林的产物（虽思想上一脉相承——战后自由贸易/多边经济秩序）。这是全 topic 出现频率最高的制度史 claim，跨 storyboard + kernel + notebook + 附录 A 时间线反复出现。
   - **建议**：拆成两步——"1944 年布雷顿森林会议建了 IMF 和 World Bank；几年后（1947 年）各国又签成降关税的 GATT"。或保留"谈成"但加时间提示"为后来 1947 年的 GATT 铺了路"。注意附录 A 时间线把"1944 | Bretton Woods：建 IMF、World Bank，谈成 GATT"同列一格，最易误导，优先修这一格。**这是唯一影响"事实链条"的红旗，优先级最高。**

2. **[#10]** `「极端贫困 …… 从大约 36% 降到了大约 9%」`（`ceo-n5` / `rb-n8` / `gw-n5`，kernel §1 / §6 / §9 / 附录 A / notebook，全 topic 反复）
   - **问题**：起点"约 36%"对应 World Bank 1990 年实测 37.1%，准确。但终点"约 9%"略低于 World Bank 口径——2015 年为 **约 9.6%（7.02 亿人，$1.90/天线）**，常被引为"约 10%"。文中已标"约 9%"，量级正确，但"9%"在严格口径下偏紧（9.6%~10% 更稳）。这是高频、且是 DBQ 情感支点的数字。
   - **建议**：改为"约 10%"或"约 9-10%"（与任务说明的"~9-10%"一致），冲击力不减而更经得起核。低-中优先级（已标"约"，属可接受的 7 年级近似，但既然反复出现，建议统一为"约 10%"或"约 9-10%"）。

3. **[#1]** `「变化发生在 1956 年 …… Malcom McLean …… 想出一个 …… 主意」`（`ceo-n2`，kernel §2 L1 / 附录 A / notebook container 卡）
   - **问题**：**不是事实硬伤**——"1956"是公认的集装箱革命元年（SS Ideal X 首航 1956-04-26）。唯一措辞瑕疵："1956 年 …… 想出 …… 主意"会让读者以为 1956 是 McLean **产生想法**的年份；实际上他的构想酝酿更早（1937 年码头等待装卸的经历起念，1950s 初购船改装），**1956 是首次商业航行**而非灵感诞生年。
   - **建议**：可保持现状（量级与教学结论完全正确，AP/州考只考"1956 集装箱"）；若要更严，改为"1956 年，McLean 让第一艘集装箱船起航"或"1956 年，McLean 把这个主意变成了现实"。**列此条仅为透明，最低优先级，非必改。**

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 跨国公司高管 / 贸易架构师 | ceo-or-trade-architect | **完全 composite**：无姓名，代表千千万万真实供应链决策者；1994/俄亥俄/8 vs 3 美元为示意性场景 | ✅**已透明标注**（kernel §3："本 lens 用 composite 合成人物代表这一类决策者……不冒充任何具名个人，但他做的每一步都是这一行真实、典型的操作" + notebook keyFigures roleCn 标"合成人物"+ mustKnow:false）|
| 锈带工人 | rust-belt-worker | **完全 composite**：无姓名，代表 1980s-2000s 数千万被外包冲击的美国产业工人 | ✅**已透明标注**（kernel §3："composite 合成人物，代表 1980s-2000s 数千万被外包冲击的产业工人" + notebook keyFigures）|
| 全球南方制衣女工（DEFAULT）| global-south-garment-worker-receiving-end | **完全 composite**：二十出头无姓名，代表孟加拉/越南/柬埔寨等地数千万年轻女工 | ✅**已透明标注**（kernel §3："composite 合成人物，代表孟加拉、越南、柬埔寨等地数千万制衣/电子厂年轻女工" + notebook keyFigures）|
| Malcom McLean | 跨 lens（technical anchor）| **真实历史人物**，非合成；姓名/事迹（1956 集装箱）皆有据 | N/A — 非合成（notebook keyFigures mustKnow:true 唯一具名真实者，给 IPA + audio）|
| "你就是 TA"第二人称代入（`*-n4` peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| Rana Plaza 的"那些女工""同伴"（`gw-n7`）| garment-worker | 泛指性指代真实遇难者群体（约 1,134 人多为年轻女工），无具名虚构个人 | ✅可接受（无具名捏造；与女工 composite 主角的共情对位，未伪造具体姓名）|

**结论**：本 topic 三个 lens 主角**全部为 composite 合成人物**，但**三处（kernel §3 + notebook keyFigures + lens description）均已透明标注**，且无任何把合成场景排成史料档案样式的违规。唯一真实具名者 Malcom McLean 事迹准确。符合 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线。**无未标注的合成人物。**

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— ceo-or-trade-architect（perpetrator-power，11 节点）/ rust-belt-worker（lonely-mediator，11 节点）/ global-south-garment-worker-receiving-end（receiving-end，DEFAULT，11 节点）。红旗分布：#3（Bretton Woods/GATT）主要在 ceo-n3 + kernel + notebook + 附录 A 时间线；#10（贫困率终点）跨全部 3 lens 的 synthesis 与 kernel/notebook；#1（集装箱措辞）在 ceo-n2 + notebook。
- **直接引语分层核验**（本 topic 最高风险类）：
  - *真实史料*：WTO/Marrakesh Agreement 序言 "raising standards of living, ensuring full employment …"（kernel §5A）—— 逐字对得上 1994 一手文本。
  - *演绎/概括句*：三个 composite 主角的第一人称内心独白（"你买得起，是因为我便宜""我恨它的左手，又攥着它的右手""剥削我的，和救我的，是同一件事"）—— 属第一人称叙事重构，**已透明标注主角为 composite**，无把演绎句排成史料档案/具名引文样式的违规。
- **Rule 0 双刃核验（本 topic 一票否决维度）**：全 topic 严守双向——脱贫红利（~8 亿中国/全球 ~36%→~9%）与代价（Rana Plaza/锈带/不平等）始终并置；kernel §8 中国部分双向（"不能用全球化只剥削穷国的单边" + "不能用全球化让所有人过好日子的单边"）；kernel §9 historiography 明确并置"水涨众船高派 vs 逐底竞争派 vs 综合派"。无向任一边说教。
- **用到的外部核实来源**：Wikipedia（Rana Plaza collapse / Malcom McLean / SS Ideal X / Bretton Woods Conference / Dissolution of the Soviet Union / China and the WTO / Rust Belt / Extreme poverty）、World Bank（《Lifting 800 Million People Out of Poverty》2022 报告 + 1990→2015 贫困率新闻稿）、WTO.org（WTO 1995 成立 / 中国入世 pr243）、history.state.gov（Bretton Woods-GATT 1941-1947 / Collapse of the Soviet Union）、USTR（中国入世背景）、Wilson Center（NAFTA 1994）、Clean Clothes Campaign（Rana Plaza）、Marc Levinson《The Box》（集装箱经济史，对照）、transportgeography.org（Ideal X 1956 成本数据）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有来源或可降级为谨慎措辞，**无 needs-source 缺口、无未标注合成人物、无伪造引文/数据**。建议处理 **#3（Bretton Woods≠GATT，唯一影响事实链条的红旗，优先修附录 A 时间线那一格）** 后过 Gate 2；#10（贫困率终点统一为约 10%/约 9-10%）与 #1（集装箱措辞）为低优先级收紧项，可与 #3 同批改。
