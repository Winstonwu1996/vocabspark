# 俄国革命 1917 · The Russian Revolution Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on narrative，**只写本账本文件**，绝不改内容。

```
topicId:    russian-revolution-1917
生成日期:    2026-06-02
来源文件:    lib/history-narratives/russian-revolution-1917.md（中文 narrative kernel）
            + lib/history-narratives/russian-revolution-1917.en.md（英文 narrative kernel）
            （storyboard 尚未生成；本账本覆盖 narrative kernel 全部高风险 claim）
claim 总数:  30
🚩 红旗数:   4（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧或 composite 透明性提示，无 needs-source、无未标注演绎、无事实硬伤
```

**一句话总评**：史实地基**非常稳**——所有 OS/NS 日期、票数、人名、条约、口号均对得上权威来源；OS/NS 历法换算（+13 天）逐条核验通过（妇女节 3.8=OS 2.23；退位 3.15=OS 3.2；十月 11.7=OS 10.25；四月提纲 4.16=OS 4.3；七月事件 7.16-20=OS 7.3-7；Kornilov 9.10-13=OS 8.28-31；制宪会议解散 1.18-19=OS 1.5-6）。Rule 0 平衡（解放 vs 极权双持）在 §1/§6/§9/§11 处理到位，未让任一边胜出。两个合成人物（女工 + 布尔什维克组织者）均在 §3 + §1 透明标注为 composite。冬宫神话在 §10 已破除（爱森斯坦 1928 电影 vs 真实「侧门走进、几乎无战斗」）。红旗集中在 3 处可轻度收紧的概括表述 + 1 处 composite 透明性建议。

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
| 1 | "1917.3.8（旧 2.23）国际妇女节 …… 纺织女工面包罢工 …… 二月革命起点"（§1/§2/§3/§4/§5B）| date+causal | encyclopedia | 维基 February Revolution / Britannica：1917-02-23 OS = 1917-03-08 NS，Petrograd 纺织女工 IWD 罢工点火；OS+13=NS 核验 ✓ | ✅verified |
| 2 | "次日 20 万 …… 再一日近 40 万 …… 全城总罢工"（§4 beat 2）| number | encyclopedia | ISReview / Jacobin：首日 ~75,000，次日 ~200,000，第三日 ~400,000（含学生/教师/白领）| ✅verified |
| 3 | "1917.3.12（旧 2.27）首都驻军倒戈 …… 打开军火库"（§2/§4 beat 3）| date | encyclopedia | 维基：1917-02-27 OS 彼得格勒卫戍部队倒向起义；OS+13=03-12 NS ✓ | ✅verified |
| 4 | "1917.3.15（旧 3.2）尼古拉二世退位 …… 罗曼诺夫王朝（300 年）终结 …… 在 Pskov 火车上"（§2/§3/§4 beat 4/§5C）| date | encyclopedia/primary | 维基 Abdication of Nicholas II：1917-03-02 OS = 03-15 NS，Pskov 火车上签署；OS+13 ✓；Romanov 1613-1917 约 300 年 ✓ | ✅verified |
| 5 | "退位诏书 …… abdicate the Throne …… lay down the Supreme Power"（§5C）| quote | primary | FirstWorldWar.com 退位诏书英译原文逐字对得上 | ✅verified |
| 6 | "1915（旧 8.23）尼古拉二世亲赴前线 …… 大本营 Mogilev …… 首都丢给皇后 + Rasputin"（§2 L3/§4 beat 1）| date+causal | encyclopedia | 维基 Nicholas II / Stavka：1915-08-23 OS 接掌最高统帅，Stavka 在 Mogilev；皇后 Alexandra + Rasputin 主政首都，威信下跌 | ✅verified |
| 7 | "一战 …… 约 170 万人战死 …… 数百万受伤被俘"（§2 L1/§4 beat 1）| number | textbook | 1914-1918-Online War Losses：约 1.7M 阵亡、~5M 伤、~2.5M 被俘失踪 | ✅verified |
| 8 | "1917.4.16（旧 4.3）Lenin 回到芬兰车站 …… 封闭列车 …… 四月提纲"（§2/§3/§4 beat 6/§5A）| date | encyclopedia | 维基 April Theses：Lenin 1917-04-16 NS（OS 04-03）抵 Finland Station，德国安排封闭列车；OS+13 ✓ | ✅verified |
| 9 | "口号：和平、土地、面包 + 一切权力归苏维埃"（§4 beat 6/§5A）| quote | primary | April Theses 标准概括 "Peace, Land, Bread" + "All Power to the Soviets"；俄文 Мир, земля, хлеб ✓ | ✅verified |
| 10 | "1917.7.16-20（旧 7.3-7）七月事件 …… 布尔什维克受挫 …… Lenin 逃亡"（§3/§4 beat 7）| date | encyclopedia | 维基 July Days：16-20 July NS（OS 3-7 July）；事后镇压、布党被打散、Lenin 逃；OS+13 ✓ | ✅verified |
| 11 | "1917.9.10-13（旧 8.28-31）Kornilov 兵变 …… Kerensky 反过来求布尔什维克挡 …… 布党声望暴涨"（§3/§4 beat 8）| date+causal | encyclopedia | 维基 Kornilov affair：10-13 Sep NS（OS 28-31 Aug）；Kerensky 先召后惧、求 Soviet/布党武装抵抗；事件后布党声望回升；OS+13 ✓ | ✅verified |
| 12 | "1917.11.7（旧 10.25）十月革命 …… 红卫队占桥/电报局/车站 …… 拿下冬宫 …… Lenin + Trotsky 领导"（§1/§2/§4 beat 9）| date | encyclopedia | 维基 October Revolution：1917-10-25 OS = 11-07 NS，赤卫队夺关键节点 + 冬宫，Lenin/Trotsky 领导；OS+13 ✓ | ✅verified |
| 13 | "真实冬宫之夜几乎没打仗 …… 侧门走进 …… 伤亡极少 …… 爱森斯坦 1928《十月》拍的是 1920 重演（重演伤的比真事件多）"（§4 反讽/§10 #2）| causal+rhetoric | encyclopedia | 维基 October (1928 film) / Storming of the Winter Palace：实际近乎无血进入（<10 死），守卫薄弱含妇女营；Eisenstein 1928 基于 1920 重演，重演伤者多于真事件 | ✅verified（神话已破除，处理合规）|
| 14 | "制宪会议选举 …… 布尔什维克约四分之一（~24%）…… 社会革命党多数"（§4 beat 10/§10 #4）| number | encyclopedia | 维基 1917 Constituent Assembly election：SR ~40% 得席多数，布党 <25%（约 24%）| ✅verified |
| 15 | "1918.1.18-19（旧 1.5-6）制宪会议开约 13 小时被解散"（§4 beat 10/附录 A）| date+number | encyclopedia | 维基 Russian Constituent Assembly：会期 18-19 Jan NS（OS 5-6 Jan），约 13 小时（4pm-5am）后被解散；OS+13 ✓ | ✅verified |
| 16 | "1918.3.3 《布列斯特-立托夫斯克和约》…… 割掉约帝国人口三分之一、工业一多半 …… 退出一战"（§2/§4 beat 11/附录 A）| date+number | textbook | 维基/History.com Treaty of Brest-Litovsk：1918-03-03 签署；丧失 ~34% 人口、~54% 工业用地、~89% 煤、~26% 铁路 | ✅verified |
| 17 | "1918.3 苏俄已改用新历，故单一日期"（附录 A 注/历法说明）| date | encyclopedia | 苏俄 1918-02 起采用格里高利历（1918-01-31 OS 次日即 1918-02-14 NS），故 03-03 为单一历法日期 | ✅verified |
| 18 | "1918-1922 内战 红军 vs 白军 …… 外国干涉 …… 几百万死于战斗/镇压/饥荒"（§2/§4 beat 12/§6）| causal+number | textbook | 维基 Russian Civil War：1918-1922，红 vs 白 + 协约国干涉，死亡含战斗/红白恐怖/大饥荒，总计数百万（量级相符）| ✅verified |
| 19 | "1922.12 苏联（USSR）成立"（§6/§10 #6/附录 A）| date | encyclopedia | 维基：USSR 1922-12-30 成立 | ✅verified |
| 20 | "彼得格勒 = 圣彼得堡，一战开打后因名字太『德国味』改俄式名"（§2 L0）| inference | encyclopedia | 维基 Saint Petersburg：1914 改名 Petrograd（去德语化）| ✅verified |
| 21 | "农奴 1861 才被解放，但土地仍集中在地主手里"（§2 L2/§3）| textbook | encyclopedia | 维基 Emancipation reform of 1861：农奴解放但土地分配不利农民，「土地」长期诉求 | ✅verified |
| 22 | "1905 一场革命逼沙皇设杜马（Duma），但随时能解散"（§2 L3/附录 B）| textbook | encyclopedia | 维基 1905 Russian Revolution / State Duma：1905 后设杜马，沙皇保留解散权 | ✅verified |
| 23 | "双重权力：临时政府（自由派）vs 彼得格勒苏维埃（工兵代表）并立"（§1/§2/§4 beat 5/附录 D）| causal | textbook | 维基 Dual power：1917 临时政府 + 彼得格勒苏维埃并立，标准教科书框架 | ✅verified |
| 24 | "Kerensky 同时在临时政府 + 彼得格勒苏维埃有位子 …… 1917.6 发动惨败攻势 …… 流亡 …… 1970 死于纽约"（§3 Kerensky/§1）| date+causal | encyclopedia | 维基 Alexander Kerensky：兼跨两机构；June Offensive 1917 惨败（~6 万伤亡）；十月后流亡，1970-06-11 卒于纽约 | ✅verified |
| 25 | "十月革命直接催化五四（1919.5.4）+ 中共成立（1921.7）"（§8/§11/附录 A）| causal | encyclopedia | 维基 May Fourth Movement / Li Dazhao / CCP：October Rev → 马克思主义在华兴起 → 五四后转向 → 1921-07 建党；标准史学因果链 | ✅verified |
| 26 | "李大钊最早公开介绍/支持十月革命之一 …… 1919 发表《我的马克思主义观》"（§8/附录 C）| date | encyclopedia | 维基 Li Dazhao：1919 年《新青年》发表《我的马克思主义观》，最早系统介绍马克思主义者之一 | ✅verified |
| 27 | "辛亥革命 1912 清朝覆灭 …… 民国分裂 …… 北洋政府名义中央、军阀割据"（§8）| textbook | encyclopedia | 维基 Xinhai Revolution / Warlord Era：1912 清亡、ROC 建、北洋 + 军阀割据，描述准确（中国部分，cultural ban 不适用）| ✅verified |
| 28 | "『十月革命一声炮响，给中国送来了马克思主义』"（§6/§8/§11）| quote | encyclopedia | 该句源自毛泽东《论人民民主专政》（1949），文中作为流传话语引述而非史料档案，处理为概括引语 | ✅verified（已作流传语引述，未伪装一手档案）|
| 29 | "彼得格勒纺织女工"为合成人物，姓名/年龄/家庭为叙事补充，史料确证的是「妇女节那天纺织女工先罢工、喊面包」（§1/§3）| dramatization | dramatization | composite，**文中已透明标注**（§1「合成人物」+ §3 括号「姓名、年龄、家庭是叙事补充；史料确证的，是……」）| ✅verified（已透明标注；见红旗 #4）|
| 30 | "布尔什维克工厂委员会组织者"为合成人物，姓名/年龄为叙事补充，史料确证的是「工厂委员会 + 赤卫队是十月实际执行力量」（§1/§3）| dramatization | dramatization | composite，**文中已透明标注**（§1「合成人物」+ §3 括号声明）| ✅verified（已透明标注）|

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧）或 composite 透明性提示，**无事实硬伤、无缺来源、无未标注演绎**。按影响排序。

1. **[#18]** `「几百万死于战斗、镇压和大饥荒」`（§4 beat 12 / §6）
   - **问题**：内战死亡总数史界估计区间很宽（约 7-12M，绝大多数为饥荒与疫病而非直接战斗）。narrative 用「几百万」+「战斗/镇压/饥荒」三类并列，方向正确、未给精确数字，属可接受的 9-12 年级概括，但「几百万」偏保守（实际更可能上千万）。
   - **建议**：保留「几百万」即可（保守不算错），或若想更准可写「数百万到上千万」。低优先级。

2. **[#16]** `「割掉约帝国人口三分之一、工业一多半」`（§4 beat 11 / §2 L4）
   - **问题**：精确数字为 ~34% 人口、~54% 工业用地（另 ~89% 煤、~26% 铁路）。「人口三分之一」「工业一多半」是对 34%/54% 的口语化约数，方向准确。
   - **建议**：可保留（已是合理约数）；若要更严可加「约」字已有，无需改。最低优先级。

3. **[#28]** `「十月革命一声炮响，给中国送来了马克思主义」`（§6 / §8 / §11）
   - **问题**：此句出自毛泽东 1949《论人民民主专政》，是一句**后来的政治概括/口号**，非 1917-1921 当时的一手史料。文中已作「广为流传的话」引述（未伪装成一手档案），处理合规。唯一提示：确保学生 facing 语境里它始终被框为「流传的说法」，而非「当时就有的事实陈述」。
   - **建议**：现状合规。可在 storyboard 落地时显式标「这句话是 1949 年毛泽东的总结」以免学生误以为是 1917 当时的话。属透明性提示，非必改。

4. **[#29]** `彼得格勒纺织女工（合成人物 + 默认视角）`（§1 / §3）
   - **问题**：**不是事实硬伤**——已在 §1（「合成人物」）+ §3（括号「姓名、年龄、家庭是叙事补充；史料确证的，是『妇女节那天纺织女工先罢的工、喊的是面包』」）双重透明标注，处理**完全合规**。因为是 **default lens**，按第 8 条「default lens 必须单独成立」，提示：storyboard 收尾必须含跨视角指针（① 明示「你现在只听到了一边」② 另一视角会挑战/补充 ③ Learning Receipt 问「你还没听到谁的声音」），否则 receiving-end 单跑会把「解放 vs 极权」结论提前锁死（违反 Rule 0）。
   - **建议**：narrative 层无需改；**列此条为 storyboard 阶段的硬提醒**——default 女工 lens 的 meta 节点必须把另外两视角（布尔什维克组织者「做出来的那只手」+ Kerensky「中间人的失败」）作为「你还没听到的声音」明示指针。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 彼得格勒纺织女工 | textile-worker-receiving-end（DEFAULT）| 姓名/年龄/家庭虚构；代表 1917.3 罢工的数万女工；史料确证「妇女节纺织女工先罢工、喊面包」| ✅**已透明标注**（§1「合成人物」+ §3 括号声明）|
| 布尔什维克工厂委员会组织者 | bolshevik-actor | 姓名/年龄虚构；代表彼得格勒工厂委员会 + 赤卫队群体；史料确证「工厂委员会 + 赤卫队是十月实际执行力量」| ✅**已透明标注**（§1「合成人物」+ §3 括号声明）|
| Alexander Kerensky | kerensky-lonely-mediator | **真实历史人物**，生卒/事迹/兼跨两机构/继续战争/流亡/1970 卒于纽约皆有据 | N/A — 非合成 |
| Lenin / Trotsky / Nicholas II / Kornilov / 李大钊 | 配角（出现在 narrative + cheat sheet）| **真实历史人物**，生卒/事迹有据 | N/A — 非合成 |

**结论**：本 topic **无未标注的合成人物**。两个 composite（女工 + 布尔什维克组织者）均在 §1 + §3 双重透明标注，符合 `HISTORY_EVIDENCE_LAYER.md` §1.3 / §2.1 composite 透明红线。

---

## 备注

- **OS/NS 历法逐条核验**（本 topic 最高风险类，全部 ✅，+13 天）：
  - 妇女节 OS 02-23 → NS 03-08 ✓ / 驻军倒戈 OS 02-27 → NS 03-12 ✓ / 退位 OS 03-02 → NS 03-15 ✓
  - 四月提纲 OS 04-03 → NS 04-16 ✓ / 七月事件 OS 07-03~07 → NS 07-16~20 ✓ / Kornilov OS 08-28~31 → NS 09-10~13 ✓
  - 十月革命 OS 10-25 → NS 11-07 ✓ / 制宪会议解散 OS 01-05~06 → NS 01-18~19（1918）✓
  - 布列斯特和约 1918-03-03 为单一日期（苏俄 1918-02 已改新历）✓
- **直接引语分层核验**（全部 ✅）：
  - *真实史料*："abdicate the Throne … lay down the Supreme Power"（退位诏书）/ "Peace, Land, Bread" + "All Power to the Soviets"（四月提纲口号）/ "Bread!"（妇女节街头诉求）—— 均对得上权威英译/概括。
  - *后世政治概括*："十月革命一声炮响……"（毛 1949）—— 已作「流传的话」引述，未伪装一手档案（见红旗 #3）。
  - *演绎/概括句*：女工 + 布尔什维克组织者第一人称叙述属 composite 叙事重构，已透明标注，**无把演绎句排成史料档案样式的违规**。
- **Rule 0 双持核验**：解放面（女工点火、和平土地面包、自下而上）与极权面（制宪会议被解散、一党专政、内战与饥荒）在 §1/§4 反讽/§6/§9/§11 处处并置，未让任一边胜出；§8 中国桥已显式区分「描述影响 ≠ 认可结果」。**Rule 0 平衡达标**。
- **Cultural ban 核验**：非中国节（§1-§7、§9-§11）grep 玉玺/龙袍/金銮殿/翰林/朕/卿/江山/宰相/丞相/尚书/太子/圣旨 = 0；沙皇用 Tsar、议会用 Duma、政府用 Provisional Government，无中国化类比。§8 中国部分正常使用中文术语（辛亥革命/北洋/军阀/五四/中共），合规。
- **`*italic*` 核验**：narrative 正文无单星号 markdown italic（外语专有名词用 bare 形式）。
- **用到的外部核实来源**：Wikipedia（February Revolution / Abdication of Nicholas II / April Theses / July Days / Kornilov affair / October Revolution / Russian Constituent Assembly / 1917 Constituent Assembly election / Treaty of Brest-Litovsk / Russian Civil War / October (1928 film) / Storming of the Winter Palace / Alexander Kerensky / Li Dazhao / May Fourth Movement / Nicholas II / Stavka）、Britannica（February Revolution / Eastern Front 1917）、History.com（abdication / Brest-Litovsk）、1914-1918-Online（War Losses Russian Empire）、ISReview / Jacobin（罢工人数）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有来源或可降级为谨慎措辞，**无 needs-source 缺口**。4 条红旗均为低优先级措辞/透明性提示，不阻断 Gate 2。建议在 storyboard 落地时落实 **#4（default 女工 lens 跨视角指针）** 与 **#3（毛 1949 引语显式框定）**。
```
