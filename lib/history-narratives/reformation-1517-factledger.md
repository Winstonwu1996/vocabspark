# 宗教改革 1517 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    reformation-1517
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/reformation-1517.js（3 lens: martin-luther / erasmus / sister-agnes）+ lib/history-narratives/reformation-1517.md
claim 总数:  27
🚩 红旗数:   8（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

> 凡 `dramatization` 等级而文中**未透明标注**为合成 → 自动进红旗。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「1517 年 10 月 31 日 Luther **钉** 95 条在 Wittenberg 城堡教堂门 + 我钉了 4 个钉子」（`luther-n1` / `luther-n4` / `erasmus-n5` / `agnes-n5` / kernel §1）| date / **absolute** | encyclopedia | 日期 1517.10.31 确证。**但「钉门」本身是有争议的传说**：Iserloh 1961（承 Hans Volz）指出 Luther 自己从未提钉门，最早记载来自 Melanchthon（1518 才到 Wittenberg，非目击者，且 Luther 死后才写）；今日多数路德研究者认为他**没有**当天钉门，而是寄给 Mainz 大主教 Albrecht + Brandenburg 主教。**kernel §文献1·第5层已自承「钉不钉是文学传说」**，但 3 个 lens 全部把「钉门 / 钉 4 个钉子 / 锤子钉门」当确凿场景演 | ✋flagged |
| 2 | 「我（Luther）在此立——我不能也不会做别的。Here I stand. I can do no other」（`luther-n5` / `luther-n10` / kernel §3·§0.5）| **quote** | inference | Diet of Worms 1521.4.18 演讲核心（良心被 Scripture 捆绑、拒撤回）有多份记录、属实；**但「Here I stand. I can do no other」这一句最有名的话只出现在后来的印刷版本，最早记录里没有，学界普遍视为后世为戏剧效果添加的 apocryphal 句**。lens 已正确处理「日期是 4/18 不是 4/17 + 隔夜祷告」，但**未对这句话本身的真实性争议做任何标注**，直接当 Luther 原话演 | ⚠️downgrade-wording |
| 3 | 「Tetzel 名言:当硬币响在箱底——灵魂从炼狱跃出（拉丁/德文原文我背过）」（`luther-n3` / kernel §3 Tetzel·§制度L3）| **quote** | inference | 这句 jingle **无一手出处**，不见于 Tetzel 现存讲道稿；属 Luther/后世归给 Tetzel 的转述（其义被 Luther 收进 95 条第 27 条）。storyboard 让 Luther 说「他有一句话广告——拉丁文原文我背过」= 把传说句排成 Tetzel 亲口确证广告语。**kernel §文献1 已诚实标注 27 条是批 Tetzel「人造说法」**，但 lens 把它升级成 Tetzel 确切自述 | ⚠️downgrade-wording |
| 4 | 「Protestant 地区（德国部分、苏格兰、瑞士部分）烧女巫**比天主教国家更多**——历史学家反复确认的反直觉事实」（`luther-n9` / `agnes-n10` / kernel §10 误解8）| **causal / absolute** | encyclopedia | 与主流学界**相反**：迫害最烈的是天主教 prince-bishop 领地（西南德国）；「Protestant Germany 比 Catholic Germany 烧得更少、更不广」。苏格兰（新教）确实高，但「新教总体烧得比天主教多 + 历史学家反复确认」**不成立**，更接近被颠倒。学界共识：强度与「天主教-新教竞争」相关，而非单一阵营 | ✋flagged |
| 5 | 「1450-1750 欧洲烧死约 4-6 万女巫，75-85% 是女性」（`luther-n9` / `agnes-n10` / kernel §10）| number | encyclopedia | 处决数 40,000-60,000（共识约 45,000）确证；女性占比主流为 **75-80%**，文中上限「85%」略高（且 Finland/Iceland/Estonia 为男性占多的反例）。整体可接受，上限轻微偏高 | ✅verified |
| 6 | 「11 周（77 天）翻完整本德文新约；5 年内印 200,000 册」（`luther-n6` / kernel §3·§4）| number | encyclopedia | 11 周（1521.12-1522.2）确证；**200,000 册是约 12 年（到 1534）的累计数，不是「5 年」**——3 年内约 100,000+。「5 年=200,000」偏激进。kernel §3 line 687 同样有此误 | ⚠️downgrade-wording |
| 7 | 「整个 Peasant War 10 万农民被杀 / 30 万农民武装」（`luther-n1` / `luther-n7` / `erasmus-n8` / kernel §1·§3·§4）| number | encyclopedia | 30 万农民、被屠约 10 万，主流确证（"slaughtered up to 100,000 of the 300,000"）| ✅verified |
| 8 | 「1525.5.15 Frankenhausen 战役，6,000 农民，30 分钟内几千农民死」（`luther-n7` / `erasmus-n8` / kernel §3 Hans·§4）| number / date | encyclopedia | 战役 1525.5.14-15 确证；农民军规模约 6,000-8,000、损失约 3,000-10,000（常记「7,000+」）。数字成立。**唯一缺口**：Frankenhausen 的精神领袖是 **Thomas Müntzer**（非 Luther 派），lens 把它整体归为「读了 Luther 而起义的农民」略掩盖 Müntzer 这一支与 Luther 对立的事实，但属可接受简化 | ✅verified |
| 9 | 「每往前凿一段… / 同一双手 8 年后写小册子叫贵族屠杀 10 万农民」类强修辞（`luther-n1` deliverGoal / `luther-n7`）| rhetoric | encyclopedia | 修辞建在已证事实（10 万死 + Luther 1525.5《反农民帮派》）上，无夸张比率，成立 | ✅verified |
| 10 | 「《On the Jews and Their Lies》1543；纳粹 1933 起重印引用；Kristallnacht 1938.11.9-10；Streicher 1945 Nuremberg 庭上『我没做 Luther 没说过的事』」（`luther-n9` / kernel §3·§误解）| date / **quote** | encyclopedia | 1543 反犹册、纳粹重印引用、Kristallnacht 日期均确证。Streicher 在 Nuremberg 确实援引 Luther（称 Luther 也该坐被告席）；「我没做 Luther 没说过的事」是其辩护的**标准转述/paraphrase**，非逐字庭审引文。可接受（义忠实），措辞上属概括 | ✅verified |
| 11 | 「Matthew 4:17 Vulgate *paenitentiam agite*『做忏悔』→ Erasmus 1516 校勘 *metanoeite*『转变内心』→ Luther 95 条第 1 条文本依据」（`erasmus-n4` / kernel §0.5·§文献1）| causal / quote | encyclopedia | Erasmus 1516《Novum Instrumentum》对 metanoeite 的注、与 Luther 第 1 条「悔改是终生态度」的承接，学界标准叙述，确证 | ✅verified |
| 12 | 「Erasmus 1516 第一本印刷的希腊文新约 / 1000 年来第一次回 Greek 校勘」（`erasmus-n1` / `erasmus-n4` / kernel §3）| absolute | encyclopedia | 《Novum Instrumentum》1516 确为第一本**出版印刷**的希腊文新约（Complutensian 编更早但出版更晚），措辞成立 | ✅verified |
| 13 | 「Erasmus 私生子——神父父亲 + 寡妇母亲；1536.7.12 Basel 死，痢疾，69 岁」（`erasmus-n2` / `erasmus-n9` / kernel §3）| date / number | encyclopedia | 私生子（神父之子）确证；1536.7.12 Basel 痢疾死、69 岁确证。**注**：生年史料分歧（1466/1467/1469），文中用 1466；母亲「寡妇」vs「医生之女」来源不一。低风险。**kernel §3 已自标「70 vs 69」精度问题** | ✅verified |
| 14 | 「Erasmus 1466 年 10 月 **28** 日生」（`erasmus-n2`）vs kernel §3「10 月 **27** 日生」| date | encyclopedia | 跨文件内部不一致：lens 写 10/28，narrative 写 10/27（Britannica 取 10/27）。生日本身史料即不确定，但两文件应统一。极低优先级 | ⚠️downgrade-wording |
| 15 | 「Pope Paul IV 1559《禁书目录》把 Erasmus 全部 80+ 本书列第一类全禁」（`erasmus-n7` / `erasmus-n12` / kernel §3）| date / number | encyclopedia | 1559 Index、Erasmus 列 first-class（opera omnia）确证；「80 多本」属合理量级 | ✅verified |
| 16 | 「Erasmus 1524《论自由意志》vs Luther 1525《论意志的捆绑》正式决裂；Luther 私下骂『蛇/懦夫/两面人』（Table Talk）」（`erasmus-n6` / `erasmus-n7` / kernel §3）| date / quote | encyclopedia | 1524/1525 辩论时间线、决裂、Table Talk 贬称均确证 | ✅verified |
| 17 | 「『Erasmus laid the egg, Luther hatched it』+ Erasmus 自辩『我下的蛋是文学批判和经文校勘』」（kernel §3 + 隐于 lens 主题）| quote | encyclopedia | 谚语真实流传；Erasmus 反驳版亦有记载，确证 | ✅verified |
| 18 | 「王阳明 1472 生，1517 年 45 岁；1508 龙场悟道；宁王朱宸濠之乱 1519 才爆」（`luther-n11` / `erasmus-n11`）| date / number | encyclopedia | 王阳明 1472 生（1517 满 45）、1508 龙场悟道、宁王之乱 1519.7-8 均确证。**lens 比 kernel 更准**：kernel §8 line 2394「1517 王阳明 45 岁——刚平定宁王之乱(1519)」自相矛盾（1517 不可能已平定 1519 的乱），storyboard 明确写「宁王之乱要 2 年后 1519 才爆」修正了此错 | ✅verified |
| 19 | 「知行合一 / 致良知 / 心即理 1518-1521 完成体系」（`luther-n11` / `erasmus-n11`）| date | encyclopedia | 心即理（龙场后）、致良知（晚期，约 1521+ 江西时期提出）、知行合一时间线大体成立，属合理概括 | ✅verified |
| 20 | 「Joseph Needham 派：中国皇权统摄宗教、无独立教会可对抗 → 王阳明只能内修」（`luther-n11` / `erasmus-n11` / kernel §8）| causal | inference | 文中**已两面并置**（Needham 派 vs 后-Needham 修正派），明确标为史学诠释而非事实，处理稳妥 | ✅verified |
| 21 | 「Henry VIII 1534 Act of Supremacy 自立英国国教 / 1536-1540 解散 800+ 修道院」（`agnes-n3` / `agnes-n10` / kernel §3·§4）| date / number | encyclopedia | 1534 Act of Supremacy、解散运动（800+ religious houses）确证 | ✅verified |
| 22 | 「1536-1540 约 8000 个英国修女被赶出（Cromwell 官方统计）」（`agnes-n1` / `agnes-n7` / `agnes-n12`）| number | inference | 解散涉及的男女修道者总数有统计，但「修女 8000 人」这一精确数 + 明确归为「Cromwell 当时的官方统计」难以一对一坐实（常见估计：男修道者远多于修女，全部 religious 约 1 万+）。作为合成角色代表性基数，量级可接受但「Cromwell 官方统计 8000 修女」的精确归属偏强 | ⚠️downgrade-wording |
| 23 | 「Sister Agnes（虚构合成 32 岁 Cistercian 修女，14 岁入院，1539.5.12 签解散，做 7 年家庭教师，1567 年 60 岁孤独死）」（`agnes` 全 lens）| **dramatization** | dramatization | 虚构合成人物。**lens 已透明标注**：N1 括号「把这个虚构合成人物给你听见…我代表 1536-1540 被赶出的约 8000 个英国修女」、lens description、N12 重申 composite。符合 dark-topic 合成红线。**但与 kernel §3 自带的 Sister Agnes 不一致**：kernel 版 = 28 岁、18 岁入院、35 岁嫁老头当继室、生 5 子、1568 年 57 岁死；lens 版 = 32 岁、14 岁入院、终身未婚、1567 年 60 岁死。两版皆 dramatization，lens 标注到位，但同名角色生平骨架冲突应知会 | ✅verified（已透明标注）|
| 24 | 「解散金每修女 5 镑年金 = 一个农工一年收入；1539 普通英国女性识字率不到 5%；1620s 升到约 30%」（`agnes-n2` / `agnes-n5` / `agnes-n10`）| number | inference | 年金数额、女性识字率数字属合理量级的史学估计（早期近代英国女性识字率极低、随时间升高方向正确），但具体「5%→30%」点值为概括估计，非硬统计。低风险 | ✅verified |
| 25 | 「Calvin 1539 禁 Marie Dentière 写女人神学 + 引 Paul『Let women be silent in the church』」（`agnes-n6` / `agnes-n9` / `agnes-n10` / kernel §3 Marie Dentière）| quote / date | encyclopedia | Marie Dentière 1539 公开信被禁、Calvin 反对女性讲道、引 Paul 均确证（kernel §3 有详述）| ✅verified |
| 26 | 「Servetus 1553 在 Geneva 被 Calvin 烧死（新教烧异端）」（`agnes-n9` / kernel §3 Calvin·§4）| date | encyclopedia | 1553.10.27 Servetus 火刑确证。**kernel §3 已加重要 nuance**（Calvin 曾请求改斩首、议会拒绝）；lens 只一句带过「Calvin 的 Servetus 1553」，未含该 nuance，但 lens 未做 Calvin 洗白也未加重，属可接受简化 | ✅verified |
| 27 | 「130 年宗教战争欧洲死 8,000,000 人；Westphalia 1648；St. Bartholomew 1572 死 5,000-30,000；First Amendment 1791 直接源于此」（`luther-n12` / kernel §1·§4）| number / causal | encyclopedia | 30 年战争约 4.5-8M（8M 为上沿主流）、Westphalia 1648、St. Bartholomew 5,000-25,000(部分到 30,000) 均在引用区间内；First Amendment 溯源属标准史学诠释 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#1]** `luther-n1`·`luther-n4`·`erasmus-n5`·`agnes-n5`：「1517.10.31 我（Luther）钉 95 条在城堡教堂门上——我钉了 4 个钉子」
   - 问题：**最高风险的引信（重点·钉门真实性）**。日期对，但「钉门」是有争议的传说（Iserloh 1961；Luther 自己从未提钉门；最早记载者 Melanchthon 非目击者且 Luther 死后才写；今日多数学者认为没钉门，而是寄信给主教）。**最讽刺的是 kernel §文献1·第5层自己已明写「钉不钉是文学传说」**——但 3 个 lens 把钉门当成全 topic 最核心、最具画面感的确凿场景（甚至细到「4 个钉子」「锤子」），与 kernel 自己的诚实标注**自相矛盾**。
   - 建议：保留画面力度，但**至少在一处（建议 Luther N4 narrator zoom 或 N1 anti-fab 括号）显式标注**「钉门是流传最广的版本，史学界对他当天是否真钉门有争议——但 95 条确实写了、确实传开了」。否则全 topic 把一个 disputed legend 当地基事实灌给学生，是 SOP「传说排成确证」最典型的失败原型。
   - 注：跨文化对应硬禁自检——「公告板」「学术辩论邀请」均为欧洲语境本词，无中国概念词混入，✅通过。

2. **[#4]** `luther-n9`·`agnes-n10`·kernel §10 误解8：「新教国家（德国部分、苏格兰、瑞士部分）烧女巫**比天主教国家更多**——历史学家反复确认的反直觉事实」
   - 问题：**与权威正面冲突（causal + absolute）**。主流学界恰恰相反：迫害最烈的是天主教 prince-bishop 领地（西南德国），「新教德国比天主教德国烧得更少、更不广」。苏格兰（新教）确实是个高发例外，但把它推广成「新教总体烧得更多 + 历史学家反复确认」是把一个区域例外当成普遍规律，且方向接近被颠倒。这是会被史实党直接打脸的硬错。
   - 建议：改为更准的「烧女巫在新教和天主教地区**都**发生，没有单一阵营垄断——迫害最烈的反而是天主教的西南德国 prince-bishop 领地，而新教的苏格兰也极高；强度更多与新旧教**互相竞争**相关，而非哪一派更暴力」。去掉「新教烧得更多 + 历史学家反复确认」这个错误的反直觉断言。

3. **[#2]** `luther-n5`·`luther-n10`：「Here I stand. I can do no other.（我在此立——我不能也不会做别的）」
   - 问题：**引语真实性争议（重点·引语诚信）**。Diet of Worms 演讲核心（良心被 Scripture 捆绑、拒撤回）属实，lens 也很漂亮地处理了「日期 4/18 + 隔夜祷告」这一层。**但这句话本身最有名的「Here I stand. I can do no other」只出现在后来印刷版本，最早记录里没有，学界普遍视为后世为戏剧效果添加的句子**。lens 完全没标注这一争议，直接当 Luther 原话演，还在 N10/N12 把它当成传到 Gandhi/MLK/Snowden 的「那句话」。
   - 建议：保留场景，但在 N5 引语后或 narrator 处加一句轻标注：「这句最有名的『Here I stand』很可能是后人为这一刻加上的——但他拒绝撤回、诉诸良心与 Scripture 这件事是真的。」把「verified 的行为」与「apocryphal 的金句」分层。

4. **[#3]** `luther-n3`·kernel §3 Tetzel：「Tetzel 名言:当硬币响在箱底——灵魂从炼狱跃出（拉丁/德文原文我背过）」
   - 问题：**引语风险（重点·引语诚信）**。这句 jingle 无一手出处、不见于 Tetzel 现存讲道稿，是 Luther/后世归给他的转述（其义被收进 95 条第 27 条）。lens 让 Luther 说「他有一句话广告——原文我背过」= 把传说句排成 Tetzel 亲口确证的广告语。kernel §文献1 已诚实标 27 条是批 Tetzel「人造说法」，lens 反而升级了确定性。
   - 建议：改为「Tetzel 这类销售被概括成一句广为流传的话（Luther 在 95 条第 27 条点名批它）——『硬币响…灵魂跃』」，显式标为「流传/Luther 转述」而非 Tetzel 确切自述。

5. **[#6]** `luther-n6`·kernel §3 line 687：「5 年内印 200,000 册（德文新约）」
   - 问题：**数字偏激进（重点·数字）**。200,000 册是约 12 年累计（到 1534）的数；3 年内约 100,000+。「5 年=200,000」高估。kernel 同处也有此误。
   - 建议：改「头几年就印了上百万…」不对——应改为「头三年就印了十万册以上，到 1534 年累计超过 200,000 册」，把时间窗与册数对齐。

6. **[#22]** `agnes-n1`·`agnes-n7`·`agnes-n12`：「约 8000 个英国修女被赶出（Cromwell 官方统计）」
   - 问题：**数字归属偏强（重点·数字 + 代表性）**。解散涉及的全部 religious（男女）总数有统计，但「修女 8000 人」精确数 + 明确归为「Cromwell 当时的官方统计」难以一对一坐实（常见估计男修道者远多于修女）。作为合成角色的代表性基数量级可接受，但「Cromwell 官方统计 8000 修女」的精确出处归属偏强。
   - 建议：软化为「约 8000 名修女（估计数）」或「数千名修女」，去掉「Cromwell 当时的官方统计」这一过硬的出处归属，或核到具体史料再保留。低-中优先级。

7. **[#14]** `erasmus-n2` vs kernel §3：Erasmus 生日 10/28（lens）vs 10/27（narrative）
   - 问题：**跨文件内部不一致**。生日史料本就不确定（且生年 1466/1467/1469 三说），但两个文件对同一人写了不同日期，应统一。
   - 建议：统一为 narrative 的 10/27（Britannica 取值），或都加「约」。极低优先级。

8. **[#23]** `agnes` 全 lens vs kernel §3：同名 Sister Agnes 生平骨架冲突
   - 问题：**非事实错，但跨文件人物设定冲突**。lens 版 Agnes（32 岁/14 岁入院/终身未婚/1567 年 60 岁死）与 kernel §3 自带的 Agnes（28 岁/18 岁入院/35 岁嫁老头当继室/生 5 子/1568 年 57 岁死）是两套不同生平。两版皆 dramatization 且 lens 已透明标注 composite（合规），但同名却两套人生会让后续 Quiz/Reading 取材时打架。
   - 建议：不算事实红旗，但建议团队把 lens 与 kernel 的 Agnes 设定**对齐成一套**（或在 kernel 注明「lens 版为独立 composite」）。仅记录，不阻断上线。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| Sister Agnes | `sister-agnes`（全 12 节）| 虚构姓名 + 32 岁/14 岁入院/7 年家庭教师/1567 年 60 岁孤独死全为叙事设定；代表 1536-1540 被解散修道院赶出的约 8000 名英国修女 | ✅ **已透明标注**：N1 括号「把这个虚构合成人物给你听见…我代表…约 8000 个英国修女」、lens name 直接写「(虚构合成 1539 修女)」、lens description「虚构合成人物代表…」、N12 重申「一个虚构合成的 32 岁修女…代表…没有被史书写下名字」。**符合 §1.3 dark-topic 合成红线**。唯一缺口见红旗 #23（与 kernel 同名角色设定冲突，非标注问题）|
| 德国农民 Hans（1525）| 仅在 kernel §3「普通人视角」出现，**未进任何 lens storyboard** | 虚构姓名 + 个体战场死亡场景；底层集体史（农民读 95 条起义、被屠、遗孀继续做农奴）为 documented | ✅ kernel 文内明示为「cosplay 用」普通人视角 + 教学要点点明是「100,000 死农民之一」的代表，未当真名史实。lens 未用，不影响本次 storyboard 审 |

> 其余出场人物（Martin Luther / Erasmus / Johann Tetzel / John Calvin / Henry VIII / Ignatius of Loyola / Marie Dentière / Katharina von Bora / Charles V / Frederick the Wise / Justus Jonas / 王阳明）均为**真实历史人物**，非合成。Luther / Erasmus 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实上），未虚构其生平骨架。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `martin-luther`（claim #1-11,18-19,27；含 N1/N4/N5/N7/N9 重点节点）/ `erasmus`（#1-2,11-18,20）/ `sister-agnes`（#1,4,21-26；全 composite 透明标注）。
- **重点核查结论**：
  - **钉门真实性（本 topic 头号问题）**：#1 ✋flagged —— kernel 自己已承认「钉门是文学传说」，但 3 个 lens 把它当地基事实演（最讽刺的内部矛盾）。**建议上线前至少加一处标注**。
  - **引语诚信（重点 C）**：#2「Here I stand」apocryphal 句未标注（⚠️）、#3 Tetzel jingle 升级成确证（⚠️）—— 两条都是「真行为 + 传说金句」混层，需分层。
  - **数字（重点 A）**：#6「5 年 200,000 册」时间窗错配（⚠️）、#22「8000 修女 Cromwell 官方统计」归属偏强（⚠️）；#5 女巫女性占比上限 85% 轻微偏高（已 verified）。
  - **causal 硬错（最危险）**：#4「新教烧女巫比天主教多」与主流学界相反（✋flagged）——这是唯一与权威**正面冲突**的实质错误，优先级最高之一。
  - **lens 优于 kernel 的一处**：#18 王阳明/宁王之乱时间线——storyboard 修正了 kernel §8 的自相矛盾（kernel 写「1517 已平定 1519 的乱」，lens 正确写「2 年后 1519 才爆」）。
  - **文化对应硬禁自检**：✅通过。欧洲史叙述未混入中国概念词（「公告板」「学术辩论」「赎罪体系」等均为欧洲语境本词）；王阳明/Needham 跨文化锚为显式并置对照，且两面史学诠释并存，非用中国概念解释欧洲。
- **用到的外部核实来源**：Wikipedia（Diet of Worms / Battle of Frankenhausen / German Peasants' War / Wang Yangming / Prince of Ning rebellion / Council of Trent / Thirty Years' War / St. Bartholomew's Day massacre / Witch trials in the early modern period / Witch trials in the Holy Roman Empire / Luther Bible / Julius Streicher）、Britannica（Diet of Worms / Erasmus / Wang Yangming / St. Bartholomew）、Stanford Encyclopedia of Philosophy（Wang Yangming）、TIME / luther.de / Beggars All / Heidelblog（95 Theses 钉门争议 + Tetzel jingle 争议）、Tabletalk / Crossway / World History Encyclopedia（「Here I stand」真实性）、1517.org / Concordia Theology / christianhistoryinstitute（Luther 德文新约印量）、Avalon Project / USHMM / Jewish Virtual Library（Streicher Nuremberg）。
- **总评**：本 topic 史实骨架**整体稳健**——日期、法律时长链（Supremacy/Trent/Westphalia/First Amendment）、Peasant War 死亡数、Frankenhausen、德文新约 11 周、Erasmus 校勘链、Calvin/Servetus、王阳明时间线（lens 还修正了 kernel 的错）均经权威核实。但**最致命的不是数字，而是两类「传说当事实」**：① #1 钉门（kernel 自己都说是传说，lens 却当地基）、② #4「新教烧女巫更多」（与学界正面冲突）。8 条红旗中 **#1 / #4 / #2 / #3 属应处理项**（前两条最高优先），#6 / #22 为数字微调，#14 / #23 为跨文件一致性（非事实硬伤）。**建议先处理 #1（加钉门争议标注）与 #4（改女巫阵营断言）再上线，#2 / #3 引语分层次之。**
