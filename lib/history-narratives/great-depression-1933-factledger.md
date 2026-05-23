# 大萧条与新政 1929-1939 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    great-depression-1933
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/great-depression-1933.js（3 lens: fdr / frances-perkins / displaced-sharecropper-receiving-end）+ lib/history-narratives/great-depression-1933.md
claim 总数:  28
🚩 红旗数:   7（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「1929 年 10 月股市崩了……大萧条 = 美国历史上最严重的一次经济崩溃」（`fdr-n2` / kernel §1·§4 Beat1·§附A）| date / absolute | encyclopedia | Black Tuesday 1929.10.29；权威普遍称 1929 崩盘+大萧条为美国史最严重经济崩溃。「最严重」措辞学界通用，成立 | ✅verified |
| 2 | 「到 1933 年全国大概有一千三百万人失业 / 四个人里有一个没工作（≈25%）」（`fdr-n1` / `fdr-n2` / kernel §1·§附A）| number | encyclopedia | 1933 失业率峰值约 24.9-25.6%；约 12.8M-13M 失业（部分来源到 15M）。「1300 万 / 四分之一」准确居中 | ✅verified |
| 3 | 「失业率从约 3% 飙到约 25%」（narrative §2 L1，**未进 storyboard 正文**）| number | encyclopedia | 1929 失业率约 3.2%，1933 峰值约 25%。准确 | ✅verified |
| 4 | 「约 9000 家银行倒闭」（narrative §2 L1·§4 Beat1，**未进 storyboard 正文**）| number | encyclopedia | 1930-1933 共逾 9000 家银行倒闭（约占 1929 末总数 30%）。准确（注意是 1930-33 累计，非单年）| ✅verified |
| 5 | 「股市从 1929 高点跌去近 90%」（narrative §2 L1，**未进 storyboard 正文**）| number | encyclopedia | 到 1932.7.8 股市较崩盘前跌去约 90%。准确 | ✅verified |
| 6 | 「（前任）政府别插手市场会自己缓过来，等了三年没缓过来反而更糟」（`fdr-n2` / kernel §3·§4 Beat1）| causal / motive | textbook | 胡佛 laissez-faire 路线、三年下滑加剧，APUSH 标准叙述。措辞略简化（胡佛后期亦有 RFC 等干预），但作为对比框架成立 | ✅verified |
| 7 | 「上台头一百天推国会通过一大堆法案，统称新政；三 R = 救济/复兴/改革」（`fdr-n3` / kernel §4 Beat2·§附A）| date | encyclopedia | the Hundred Days（1933.3-6）+ relief/recovery/reform，确证 | ✅verified |
| 8 | 「AAA 农业调整法 1933 签 + 反直觉解法（减产/杀猪/犁棉花 + 政府发补贴换少生产→价格回升）」（`fdr-n4` / `ds-n4` / kernel §4 Beat3·§5C·§附A）| date / causal | encyclopedia | AAA 1933；减产换补贴抬价机制确证（含 plow-under cotton / slaughter hogs）| ✅verified |
| 9 | 「AAA 补贴支票寄给地主（地+合同是地主的），地主拿钱减产→不需要那么多佃农→把佃农赶离土地」（`fdr-n6` / `ds-n4` / `ds-n6` / kernel §4 Beat3·§5C）| causal / number | encyclopedia | 学界共识：AAA 款付地主，南方地主大批驱逐佃农。一项估计 AAA 致约 200 万佃农失业。强因果有充分史料支撑 | ✅verified |
| 10 | 「法律要求地主把一部分补贴分给佃农，但执行权在地主手中，分配普遍未落实」（`ds-n5` / kernel §5C）| causal | encyclopedia | AAA 合同确有分款给租户条款；执行普遍落空，地主截留，确证 | ✅verified |
| 11 | 「南方有些佃农组了跨黑白的佃农工会争应分款，遭地主威胁、毒打、半夜赶走、开枪」（`ds-n5` / kernel §3·§4 Beat3）| number / motive | encyclopedia | Southern Tenant Farmers' Union（STFU, 1934, 跨种族）确遭地主暴力镇压，确证 | ✅verified |
| 12 | 「1935 社会保障法（养老金+失业救济=安全网），不覆盖农业工人+家政工人」（`fdr-n7` / `fp-n6` / `ds-n7` / kernel §4 Beat4·§5B·§附A）| date / number | primary | 1935 SSA Title II 明确排除 "agricultural labor" 与 "domestic service in a private home"，确证 | ✅verified |
| 13 | 「这两类活当时主要是南方黑人在干 = 把多数黑人漏在网外」（`fdr-n7` / `fp-n6` / `fp-n7` / `ds-n7` / kernel §4 Beat4·§5B）| representativeness / number | encyclopedia | SSA 自家研究：农业+家政工占 1935 黑人劳动力多数；约 65% 黑人被排除在养老/失业保险外（南方部分地区达 80%）。准确 | ✅verified |
| 14 | 「这两个洞是『特意留的』——为换南方议员票，议员条件是别用联邦网动南方种族秩序」（`fdr-n7` / `fp-n6` / `fp-n7` / `ds-n7` / kernel §4 Beat4·§9）| causal / motive | encyclopedia | 排除条款与南方议员施压相关，NAACP 当年即作证其按种族排除黑人。**但** SSA 官方研究明示：学界对「种族动机是否主因」**有争议**（另有「行政可行性/收费困难」解释）。强单因措辞需对冲 | ⚠️downgrade-wording |
| 15 | 「最大不公没人说『种族』两字，只说『不好统计、不好收费、更省事』的技术话」（`fp-n7` / kernel §5B）| quote / causal | inference | 「administratively unfeasible / hard to collect」确是当年公开理由之一。文中作为「技术话掩盖种族结果」的诠释合理，但把它讲成**唯一真实动机**而技术理由纯属幌子，与「学界有争议」存在张力。属同 #14 的诠释强度问题 | ⚠️downgrade-wording |
| 16 | 「1935-36 最高法院连判多项新政违宪（联邦无权管农业/工厂）」（`fdr-n5` / kernel §4 Beat5·§附A）| date | encyclopedia | 1935 Schechter（NIRA）、1936 Butler（AAA）等判违宪，确证 | ✅verified |
| 17 | 「1937 court-packing：往最高法院加塞最多 6 名法官稀释反对者，连本党反对而失败」（`fdr-n5` / kernel §4 Beat5·§附A）| date / number | encyclopedia | 1937 Judicial Procedures Reform Bill，最多加 6 名（每位 70 岁以上法官 +1），两党反对失败，确证 | ✅verified |
| 18 | 「我（FDR）真心想救国，可权力一顺手第一反应就是搬开挡路的墙——那墙正是宪法立来防我这种人的」（`fdr-n5`）| motive / rhetoric | inference / dramatization | FDR 第一人称内心戏。court-packing 是史实，「内心动机自白」是合理 inference 包装成第一人称。属 perpetrator lens 演绎手法，无虚构事实，可接受 | ✅verified |
| 19 | 「我（FDR）把联邦政府从守夜人变兜底人 + 养老金/失业救济/存款保险根子都在我那几年」（`fdr-n8` / `fdr-n10` / kernel §6）| causal | encyclopedia | New Deal 确立联邦主动责任；FDIC/SSA/失业救济延续至今，确证。「night watchman→兜底人」是学界常用比喻 | ✅verified |
| 20 | 「一个英国经济学家（Keynes）主张：经济垮时政府带头花钱造工作→消费→经济转」（`fdr-n8` sourcingNote / `fdr-n11` / kernel §附A）| quote / causal | textbook | Keynes《通论》1936 需求管理/赤字开支；sourcingNote 已标注。正文以「一个英国经济学家」带过，措辞稳 | ✅verified |
| 21 | 「另一种说法（Hayek）：政府干预扭曲价格/市场，让萧条拖整整十年，到二战才真正结束」（`fdr-n11` synthesis·sourcingNote / kernel §9）| causal | textbook | Hayek/奥地利学派观点真实；synthesis 已用「一种说法/另一种说法」中立呈现，sourcingNote 标注。「拖十年到二战才结束」是该派论点的转述（非账本背书），措辞成立 | ✅verified |
| 22 | 「失业率到 1939 仍约 17%，真正终结失业是 1939 年后的战时军需」（narrative §6·§10，**未进 storyboard 正文**）| number / causal | encyclopedia | 1939 失业率约 17%（部分算法 17-20%）；二战军需终结失业，史学共识。准确 | ✅verified |
| 23 | 「1942 EO 9066：西海岸约 12 万日裔（约三分之二是美国公民）不经审判关进内陆拘留营」（`fdr-n9` / kernel §4 Beat7·§7·§附A）| date / number | encyclopedia | EO 9066 1942.2.19；约 120,000 人，约三分之二为美国公民，确证 | ✅verified |
| 24 | 「1911.3.25 Triangle 制衣厂大火，门被老板从外锁死，146 人葬身（多为年轻女工）」（`fp-n1` / `fp-n2` / kernel §3·§附A）| date / number | encyclopedia | Triangle Shirtwaist fire 1911.3.25，146 死，门外锁，Perkins 目睹，确证。**注意：narrative §1 写「145 人」与 storyboard/§3 的「146」矛盾**（详见红旗）| ✋flagged |
| 25 | 「1933 FDR 请 Perkins 当劳工部长 = 美国史上首位女性内阁部长 + 任职十二年最久」（`fp-n3` / `fp-n9` / kernel §3·§附C）| date / absolute | encyclopedia | 1933.3.4 宣誓，首位女性内阁部长；任职 1933-1945 共 12 年，美国任期最长劳工部长，确证 | ✅verified |
| 26 | 「FDR 1882 生，39 岁（1921）得小儿麻痹下半身瘫痪，靠钢支架硬撑站」（`fdr-n1` / kernel §3·§附C）| date / number | encyclopedia | FDR 1882 生，1921 年 39 岁染 polio 下半身瘫，公开靠 leg braces，确证 | ✅verified |
| 27 | 「祖父 1865 内战后获自由却一无所有→只能 sharecropping，债滚债，三代租地」（`ds-n1` / `ds-n2` / kernel §3·§附C）| representativeness / causal | encyclopedia / dramatization | 史实底座（freedmen 无地无资本→分成租佃债务循环→三代延续）确证；**三代具体年份/人名为 composite 演绎**，文中已透明标注（见角色清单）| ✅verified |
| 28 | 「约 600 万南方黑人北迁工业城市，史称 the Great Migration；其后代成为后来民权运动城市基础」（`ds-n8` / `ds-n9` / kernel §4 Beat6·§6）| number / causal | encyclopedia | Great Migration 1910-1970 约 600 万黑人南→北/西，确证；为 1950s-60s 民权运动提供城市基础，史学共识。准确 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#24]** narrative §1：「1911 年目睹工厂大火 **145** 人葬身。」 vs storyboard `fp-n1`/`fp-n2` + narrative §3 + 附录 A 全用 **146**。
   - 问题：**内部数字不一致（重点 A）**。权威确证 Triangle 火灾死亡 **146**。narrative §3 自己已写明「146 人……下游 storyboard 取整述为『145 人』以口语化，事实数字以 146 为准」——可现实是反过来：**storyboard 全用 146（正确），只有 narrative §1 的并列开场漏成了 145**。即 §3 的那条「校准说明」描述的情况与实际相反，且 §1 留了一个 145 的硬错。
   - 建议：把 narrative §1 的「145」改为「146」，与 storyboard + §3 + 附录 A 统一；同时删除/修订 §3 中那句「下游取整述为 145」的过时校准说明（它已不符实际，反而会误导后续作者把正确的 146 改回 145）。**唯一的硬数字错，建议优先修。**

2. **[#14]** `fdr-n7`·`fp-n6`·`fp-n7`·`ds-n7`·kernel §4 Beat4·§9：「这两个洞是『特意留的』——为换南方议员票，条件是别用联邦网动南方种族秩序。」
   - 问题：**强单因措辞 vs 学界有争议（重点：因果/代表性）**。SSA 官方政策研究（ssa.gov）明确指出：农业/家政工被排除的**主因是种族还是行政可行性，学界存在争议**——一派强调南方议员的种族算计，另一派强调当时这两类零散就业「难统计、难收费」的行政现实。storyboard 把它讲成**几乎纯粹是种族交易**（"特意留的洞""为换南方票"），偏向其中一派而未对冲。
   - 建议：保留「结果上把多数黑人挡在外」（这是 verified 的事实结果，#13），但对**动机**加一句对冲，如「历史学家对这两个洞主要是种族算计、还是当时『难统计难收费』的行政借口，至今有争论——但无论哪种，结果都一样：多数黑人被挡在外」。这样既保留张力，又不把「有争议的动机」排成定论。中优先级。

3. **[#15]** `fp-n7`·kernel §5B：「最大的不公……没人说出『种族』两个字，只说了一句『不好统计、更省事』——结果正好把一个种族大半挡在门外。」
   - 问题：**与 #14 同源的诠释强度问题**。这句把「技术理由」明确定性为**掩盖种族的幌子**。若 #14 的动机本身有争议，那么「技术话只是借口」也就不该被排成确定结论。
   - 建议：与 #14 一并处理。可微调为「不管那句『不好统计』是真有难处，还是顺手的借口，结果是一样的：一个种族大半被挡在门外」——保留「结果论」的史学立足点（kernel §9 自己已声明「区分意图与结果」），但不替历史学家拍板动机。中优先级。

4. **[#4]** narrative §2 L1·§4 Beat1：「约 9000 家银行倒闭。」
   - 问题：**数字口径需注明（重点 A 轻类）**。「逾 9000 家」是 **1930-1933 累计**数字（约占 1929 末银行总数 30%）；另有「约 4000 家最终倒闭」「1933 单年近半数受冲击」等不同口径在流传，易被读成单一年份或单一事件。
   - 建议：9000 本身**正确**，仅建议在 narrative 处加「（1930-1933 年间累计）」一类时间限定，避免被当成 1929 一年或崩盘当下的数字。**低优先级**（数字不错，只是口径）。注：此 claim 在 narrative，未进 storyboard 正文，学生端不直接可见。

5. **[#6]** `fdr-n2`·kernel §3：「前一位总统的办法是：政府别插手，市场自己会缓过来。」
   - 问题：**对胡佛的轻度简化（重点：因果/代表性）**。胡佛主体上奉行 laissez-faire 不假，但其任内后期亦有 RFC（复兴金融公司）、公共工程等干预尝试，并非纯粹「完全不插手」。storyboard 为 FDR 视角对比，把胡佛压成「啥也不干」的对照面。
   - 建议：可接受（作为 FDR 第一人称的主观对比框架，且学生层面 laissez-faire 对比是 APUSH 标准教法）。若想更稳，可加半句「他不是什么都没做，但他的底线是不让联邦大举下场」。**低优先级，非硬错**。

6. **[#1]** `fdr-n2`·kernel §1·§附A：「大萧条 = 美国历史上最严重的一次经济崩溃。」
   - 问题：**绝对表述（重点：absolute）**。「最严重」是学界与教材通用表述，基本无争议（按持续时间+失业深度+全球波及，确为美国史最严重）。列此仅为 absolute 类例行标注。
   - 建议：**可保留**，措辞成立。极低优先级（仅备案，不必改）。

7. **[代表性总检]** 佃农 lens（`displaced-sharecropper-receiving-end` 全 12 节）作为 receiving-end DEFAULT。
   - 问题：**佃农角色是否被当成「所有大萧条受害者」代言（任务重点）**。结论：**控制良好，但有一处口径需注意**。该 lens 角色被明确限定为「**南方黑人佃农**」（被 AAA 挤出 + 被社保漏掉 + Great Migration 北迁），`ds-n10` 还自我点明「不是说新政全是坏的……它确实救了很多人」，主动避免把佃农经历泛化成「新政对所有人都是背叛」。**未发现**把佃农当成全体大萧条受害者代言的越界。**唯一需留意**：narrative §2 提到的 Dust Bowl「数十万农民西迁」是**另一群人**（多为白人 Okies 西迁加州，约 30-40 万），与本 lens 的「黑人佃农北迁（Great Migration，约 600 万）」是**两条不同的迁移**。storyboard 正文**正确地只讲了黑人佃农北迁、未把两者混为一谈**（好）；仅需确保任何下游 atlas/quiz 取材时不把 Dust Bowl Okies 和黑人佃农合并叙述。**无需改 storyboard，仅备案提醒。**

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 被 AAA 挤出土地的南方黑人佃农 | `displaced-sharecropper-receiving-end`（全 12 节）| 无真名；c.1900-1970 生卒与三代家庭年份为叙事设定；具体家事（祖父 1865 自由、密西西比漏雨木屋、孩子饿死病死、门廊被赶、挤北行火车）为个体演绎；**底层集体史（freedmen 无地→sharecropping 债务循环、AAA 付地主→驱逐佃农、社保漏农业/家政工、Great Migration 北迁）为 documented** | ✅ **已透明标注**：lens description 开头「一个虚构但真实的南方黑人佃农（人物是合成的，他经历的事，是 1930 年代南方千千万万人真实经历过的）」；`ds-n1` 显式「我是谁不重要——我没在任何历史书上留过名……那几年南方千千万万人真实经历过的」；`ds-n2` 括号 anti-fab 短句「我们家三代的具体年份、人名，是这个故事的合成补充。能确证的是……」；kernel §3「显式合成声明」+ meta.notes anti-fab 条均明示。**符合 §1.3 dark-topic 红线（composite 必须标明）** |

> 其余出场人物（Franklin D. Roosevelt / Frances Perkins / Herbert Hoover / Keynes / Hayek / Robert Owen / STFU）均为**真实历史人物或真实组织**，非合成。FDR / Perkins 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实上：FDR court-packing 自白 #18、Perkins「应该要 vs 能拿到」拉扯独白），未虚构其生平骨架。Keynes/Hayek/Owen 仅入 sourcingNote，正文以「一个英国经济学家/有经济学家/一百多年前英国有人办工厂」带过，未排成逐字引文——处理良好。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 ——
  - `fdr`（claim #1-9, 12-14, 16-23, 26）
  - `frances-perkins`（#12-15, 24-25；含 N6 anchor 社保两个洞 + N7 「技术话掩盖种族」）
  - `displaced-sharecropper-receiving-end`（#8-11, 12-13, 27-28；含 N1 gold-standard composite hook + N4「你就是 TA」+ N6「政府的钱三张脸」anchor）
- **重点核查结论**：
  - **重点 A（强修辞数字）**：核心硬数字（1300 万失业/~25%、9000 银行、~90% 股市、600 万 Great Migration、146 Triangle、12 万日裔 2/3 公民、1939 ~17%）**全部 verified**。**唯一硬错是 #24：narrative §1 的「145」与全文「146」矛盾**（且 §3 的校准说明描述反了）→ 主红旗，建议优先修。9000 银行口径（#4）为低优先级备注。
  - **重点：佃农代表性**：**控制良好**（红旗 #7 总检）。佃农明确限定为「南方黑人佃农」，`ds-n10` 主动声明「新政不全是坏的、确实救了很多人」，未把单一角色泛化成全体受害者代言。需留意 Dust Bowl Okies（白人西迁）与黑人佃农北迁是两条不同迁移，storyboard 正文未混淆（好）。
  - **重点：引语分层**：真史料（SSA Title II 排除条款 #12、FDR「怕本身」就职演说 kernel §5A、Triangle「门外锁」#24）与学者观点（Keynes/Hayek/Owen 全入 sourcingNote + 正文匿名化带过 #20·#21）**分层清晰**；synthesis 用「一种说法/另一种说法」严格中立。无把传说/二手当确证引文的情况。
  - **重点：dramatization 透明标注**：佃农 composite 标注到位（lens desc + N1 + N2 括号 + kernel §3 + meta.notes 四重）；FDR/Perkins 第一人称内心戏挂在已证事实上，属合理 inference，无虚构事实。
  - **主要可处理项**：#14/#15「社保两个洞是纯种族交易」**强单因措辞** vs SSA 官方研究明示「学界有争议」（种族 vs 行政可行性）→ 应加动机对冲（中优先级，且 kernel §9 自己已声明「区分意图与结果」，与建议方向一致，落实到 storyboard 即可）。
- **用到的外部核实来源**：Wikipedia（Wall Street crash 1929 / Great Depression / Triangle Shirtwaist fire / AAA / Great Migration / EO 9066 / Internment of Japanese Americans / New Deal / Judicial Procedures Reform Bill 1937 / Frances Perkins）、Britannica（stock market crash 1929 / Triangle fire / Great Migration / FDR / EO 9066）、Federal Reserve History（1929 crash / banking panics 1930-31）、SSA.gov（**The Decision to Exclude Agricultural and Domestic Workers from the 1935 Social Security Act** — 关键：动机有争议 + 65%/80% 黑人被排除）、FDR Presidential Library（Great Depression facts / polio / EO 9066）、National Archives（Great Migration / EO 9066）、History.com（bank failures / Dust Bowl migrants / Great Migration）、Encyclopedia.com（Banking Panics 1930-33：逾 9000 银行）、Disparity to Parity + Wikipedia AAA（约 200 万佃农失业 / STFU）、U.S. Dept of Labor + LOC（Frances Perkins 首位女性内阁部长 / 12 年）。
- **总评**：本 topic 史实骨架**稳健**——所有核心日期（1929.10 崩盘 / 1933 新政+AAA / 1935 社保 / 1937 court-packing / 1942 EO 9066 / 1911.3.25 Triangle）、规模数字（失业/银行/股市/迁移/拘留）、AAA→佃农驱逐因果、社保排除条款均经权威核实通过。无 `needs-source`（无悬空高风险事实），亦无与权威**正面冲突**的硬错——**除 #24 的 145/146 内部不一致**（一处真硬错，建议优先修）。7 条红旗中：#24（145/146）+ #14/#15（社保动机强单因）属应处理项；#4/#6/#1/#7 为低优先级口径/对照/备案。**可进 Gate 2，但建议先修 #24（数字硬错）+ 对冲 #14/#15（动机争议）再上线。**
