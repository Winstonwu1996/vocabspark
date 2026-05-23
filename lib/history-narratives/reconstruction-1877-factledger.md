# 重建与背叛 1865-1877 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    reconstruction-1877
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/reconstruction-1877.js（3 lens: andrew-johnson / hiram-revels / freedman-sharecropper-receiving-end）+ lib/history-narratives/reconstruction-1877.md
claim 总数:  27
🚩 红旗数:   5（需创始人审）
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
| 1 | 「1865 年 4 月 15 日早上林肯死了（前夜剧院中弹），Johnson 当天上午在旅馆房间宣誓接任总统」（`aj-n1` / kernel §4·§附A）| date | encyclopedia | Lincoln 1865.4.14 晚 Ford 剧院中枪、4.15 晨身亡；Johnson 同日上午在 Kirkwood House 旅馆宣誓接任。确证 | ✅verified |
| 2 | 「内战 1861-1865，南方 11 个蓄奴州想脱离联邦保住奴隶制，死了大约 60 万人——美国史上死人最多的一场仗」（`aj-n2` / kernel §1·§附A）| number / absolute | encyclopedia | 传统最广引数字约 620,000（618,222），内战确为美国史最致命战争。**但**现代学界（Hacker 2011）估约 650,000-850,000、中值约 750,000。「约 60 万」是保守/传统口径，偏低于当前主流 | ⚠️downgrade-wording |
| 3 | 「1865 年第十三条修正案废除奴隶制，南方四百万被奴役的人一夜法律自由」（`aj-n2` / `hr-n3` / `fs-n1` / kernel §附A·§附B）| date / number | encyclopedia | 13th Amendment 1865.12.6 批准；约四百万 enslaved 获自由，权威一致。确证 | ✅verified |
| 4 | 「1865 年下半年被赦免的旧势力回州掌权，通过 Black Codes：黑人不能随便换工作、无『正当职业』抓去做苦役、不能持枪、不能在某些地方租地」（`aj-n4` / kernel §4·§5C）| number / causal | textbook | Mississippi Black Codes（1865，首州，为他州蓝本）确含：年初须有书面雇佣合同/中途离开罚没工资、游荡罪强制劳役、未经许可不得持枪、限制租地置业。确证 | ✅verified |
| 5 | 「Johnson 有权踩刹车（否决/派军队/宣布州政府不合法）却睁眼闭眼=共犯」（`aj-n4` / kernel §10.4·§11）| causal / motive | inference | Johnson 总统权限属实；「共犯」框架是合理的史学诠释（structural reading），文中以第一人称自问形式呈现、非定论。中性 | ✅verified |
| 6 | 「1866 年 Civil Rights Act：Johnson 否决→国会三分之二票推翻（override）——美国史上头一回国会推翻总统对重要法律的否决」（`aj-n5` / kernel §4·§10.4）| date / absolute | encyclopedia | 1866.4.6 参议院 33-15、4.9 众议院 122-41 override；权威明载这是**首次**国会推翻总统对一部重要立法的否决。确证 | ✅verified |
| 7 | 「Radical Republicans 真心想让黑人拿到平等权利」（`aj-n5` / kernel §3·§7）| motive | textbook | Radical Republicans 推动黑人公民权/平等权利属 APUSH 标准表述。中性合理 | ✅verified |
| 8 | 「1868 年第十四条修正案写下『法律的平等保护』（equal protection of the laws）」（`aj-n6` / `hr-n3` / `fs-n6` / kernel §5A·§附A）| date / quote | primary | 14th Amendment 1868.7.9 批准；原文确含 "...nor shall any State... deny to any person... the equal protection of the laws"。确证 | ✅verified |
| 9 | 「1870 年第十五条修正案：不得因肤色、种族剥夺投票权」（`aj-n6` / `hr-n3` / `fs-n6` / kernel §5B·§附A）| date / quote | primary | 15th Amendment 1870.2.3 批准；原文 "...shall not be denied... on account of race, color, or previous condition of servitude"。确证 | ✅verified |
| 10 | 「Magna Carta 1215 第 39 条写『任何自由人』不得被任意拘押，可那时『自由人』实际只指贵族，农奴不算数；普世措辞掏空现实」（`aj-n6` / `hr-n6` / `fs-n6` / kernel §5D）| quote / causal | encyclopedia | Clause 39 "No free man shall be seized..." 确为原文；权威：自由仅授「free men」，约 85%+ 的不自由 villeins 不在保护内；本是男爵对抗国王的文件；其「普世措辞」后世被重新诠释。跨 Topic 对位准确 | ✅verified |
| 11 | 「1868 年 Johnson 因撤换陆军部长 Stanton 触犯《任期法》被众议院弹劾——美国史上第一次总统被弹劾；参议院审判定罪票差一票没够三分之二，Johnson 脱罪」（`aj-n7` / kernel §4·§10.4·§附A）| date / number / absolute | encyclopedia | 1868.2.24 众议院弹劾（首位被弹劾总统）；导火索为撤 Stanton 违 Tenure of Office Act；5.16 参议院 35-19 定罪、差一票未达三分之二，脱罪。确证 | ✅verified |
| 12 | 「救 Johnson 的不全是无罪，而是部分参议员怕开『政见不合就赶总统』的先例（总统沦为国会傀儡）」（`aj-n7` / kernel §4·§10.4）| causal / motive | textbook | 七名「Republican Recusants」倒戈，护「不可仅因政见赶走民选总统」之先例是主流史学解释之一。中性合理 | ✅verified |
| 13 | 「1869 Johnson 下台；南方黑人首次大批投票、选出黑人议员/黑人地方官；1870 密西西比选出黑人参议员 Hiram Revels」（`aj-n8` / `hr-n1`·`hr-n3` / kernel §4·§附A）| date / number | encyclopedia | Johnson 1869.3.4 卸任；1867 Reconstruction Acts 后黑人男性首次大批投票/参政；Revels 1870.2 就任首位非裔参议员。确证 | ✅verified |
| 14 | 「南方暴力组织恐吓黑人（半夜骑马/烧房/私刑），最有名的叫 Ku Klux Klan；国会一度派军立法镇压（Enforcement Acts）」（`aj-n9` / `hr-n10` / kernel §4·§6）| causal / representativeness | encyclopedia | KKK 1865 创于田纳西 Pulaski、1866 得名；以夜骑/烧屋/私刑恐吓黑人选民及白人盟友；联邦以 Enforcement Acts 回应。「最有名」措辞稳妥。确证 | ✅verified |
| 15 | 「1876 大选僵局 → Compromise of 1877：一党拿总统位，代价是撤走南方最后的联邦军队，重建结束」（`aj-n10` / `hr-n10` / `fs-n10` / kernel §4·§附A）| date / causal | encyclopedia | Hayes-Tilden 争议经 1877 选举委员会裁决；妥协含撤出三个「未重建」州（FL/LA/SC）的联邦军队；史界普遍以此为重建终结。确证（「最后的联邦军队」指剩余三州驻军，措辞成立）| ✅verified |
| 16 | 「军队一撤旧势力卷土重来，建立羞辱/隔离黑人的制度 Jim Crow；以识字测验、人头税等『不提肤色』门槛剥夺黑人投票权，合法绕过 15th Amendment」（`aj-n10` / `hr-n10` / `fs-n9` / kernel §4·§6·§10.6）| causal / date | encyclopedia | 主流 disenfranchisement（识字测验/人头税/祖父条款）集中于 1890-1910，密西西比 1890 首开；「不提肤色」规避 15th 属定论（Williams v. Mississippi 1898 背书）。文中将 Jim Crow 系于「1877 后逐步制度化/接下来几十年」，时序准确 | ✅verified |
| 17 | 「Johnson 没亲手写 Jim Crow，但放回南方旧势力 + 赌赢北方撒手 = 给后来一切松开闸门的人」（`aj-n10` / `aj-n11` / kernel §7·§9）| causal | inference | 因果链（早期赦免/纵容 Black Codes 作为更早结构性原因）是 structural reading 标准论证；文中以第一人称自陈、双边 synthesis（N11）平衡呈现，非单边定罪。中性 | ✅verified |
| 18 | 「Hiram Revels 1827 生北卡、生来自由的黑人（父亲也自由）、当过牧师/办学/内战招募黑人士兵；1870.2 由密西西比选入参议院成首位非裔参议员」（`hr-n1`·`hr-n2` / kernel §3·§附A）| date / representativeness | encyclopedia | Revels 1827 生北卡、自称祖上「皆自由」、牧师/教育者/招募黑人兵；1870.2.25 宣誓就任首位非裔参议员。确证 | ✅verified |
| 19 | 「Revels 坐的恰好是当年带头脱离联邦、保卫奴隶制的人（Jefferson Davis）空出来的密西西比席位」（`hr-n1` / kernel §3·§4）| representativeness / motive | encyclopedia | Revels 被选**填补 Jefferson Davis 的未竟任期**（广为流传的反讽点）；**但**密西西比州议会实际把他安排在 Albert Brown 空出的席位上，技术细节有争议。「Davis 的位子」是常见但被部分史料修正的说法 | ⚠️downgrade-wording |
| 20 | 「Revels 走温和路线甚至公开为部分前邦联分子说话/主张恢复部分权利」（`hr-n4`·`hr-n5` / kernel §3）| motive | encyclopedia | Revels 温和路线、主张和解、曾支持部分前邦联人士复权有据。确证 | ✅verified |
| 21 | 「Revels 1871 离开参议院回密西西比当一所黑人大学（Alcorn）校长」（`hr-n7` / kernel §3·§附A）| date | encyclopedia | Revels 1871.3 离任、任 Alcorn（首所黑人 land-grant 学院）首任校长。确证 | ✅verified |
| 22 | 「1875 年 Revels 公开批评主政共和党腐败，此举被白人旧势力当作反扑武器（documented controversy，非虚构）」（`hr-n8` / kernel §3·§附A·meta.notes）| quote / motive | encyclopedia | Revels 1875.11.6 致 Grant 公开信，痛斥 Ames/carpetbaggers 操纵黑人选票/腐败；信被广泛转载、被密西西比民主党用作「共和党腐败」与其胜选正当性的佐证。确证为有据争议事件 | ✅verified |
| 23 | 「Frederick Douglass 从奴隶逃出、自学读写、成那时代最有力量的黑人声音，比 Revels 激烈；1877 军队一撤一切被打回原形」（`hr-n9` / kernel §附C）| representativeness | encyclopedia | Douglass 逃奴出身、自学、废奴/民权领袖、激烈派；1877 后重建成果倒退属定论。跨 Topic 锚（A4 反复受挫母题）成立 | ✅verified |
| 24 | 「1865 春棉花地有人骑马宣读解放消息；佃农『无名字、账本上是一个壮年男工』；composite 声明：像他这样几百万人多数没留名字，这一遍集中到一个人身上」（`fs-n1` / lens description / kernel §3）| representativeness / dramatization | dramatization | **合成人物**。底层集体劳工史（解放宣读、无名、文盲、债务束缚）documented；具体个人（约 1840 生、单一人称生平）为叙事合成。**文中已透明标注**（见 composite 清单）| ✅verified |
| 25 | 「『四十英亩地和一头骡子』：北方一位将军真下命令把没收土地分给黑人家庭（每家约 40 英亩，有的配骡子），成千上万黑人短暂耕自己的地；后 Johnson 大笔一挥还给南方白人原主」（`fs-n3` / kernel §4）| number / causal | encyclopedia | Sherman 1865.1.16 Special Field Order No.15：沿 SC-GA-FL 海岸约 40 万英亩、每户≤40 英亩、后令借骡；1865 秋 Johnson 推翻、将多数地还原主。确证（文中「一位将军」「南方一些没收土地」措辞稳妥，未夸大为全国） | ✅verified |
| 26 | 「1867 黑人男性首次大批投票（穿最干净衣服、走很远路、路边白人眼神如刀、投票时手发抖）；三年前还是财产现在是公民」（`fs-n4` / kernel §4）| date / dramatization | encyclopedia | 1867 Reconstruction Acts 后南方黑人男性首次大批投票为史实；个体感官细节（手抖、走远路）为合成佃农的叙事补充，挂在已证集体事实上。透明 composite 框架内成立 | ✅verified |
| 27 | 「sharecropping：地主出地佃农出力按比例分；种子口粮全向地主赊、账本地主记佃农不识字看不懂、秋后一算反欠债、欠债不能走被钉在地上（锁链从铁变成纸上的债）」（`fs-n5`·`fs-n6`·`fs-n7` / kernel §附B·§9·§10.6）| causal / number | encyclopedia | crop-lien/debt-peonage 机制确证：店铺赊账高利（可达月息 15%）、文盲佃农受制于地主账本、欠债法律绑定不得离开、年复一年滚债。确证 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#2]** `aj-n2`·kernel §1·§附A：「内战……死了大约 **60 万**人——这是美国历史上死人最多的一场仗。」
   - 问题：**数字偏保守（重点 A 轻类）**。「约 60 万」对应传统经典口径（约 620,000），但 2011 年 Hacker 用人口普查重估，现代主流区间为 **650,000-850,000、中值约 750,000**。「美国史最致命战争」表述完全成立；只是死亡总数用了偏低的老数字。
   - 建议：低优先级。可保留（「约 60 万」是教材里仍常见的传统数字，不算硬错），或更稳妥地写「至少 60 万、按现代估计可能高达 75 万」。若维持「约 60 万」，建议在 kernel 注一句「传统估计，现代研究上修至约 75 万」以防 AP 老师挑刺。

2. **[#19]** `hr-n1`·kernel §3·§4：「我（Revels）坐的……是密西西比一个当年带头脱离联邦、要保卫奴隶制的人空出来的座位。」（暗指 Jefferson Davis）
   - 问题：**事实细节存疑（重点：绝对/反讽表述）**。Revels 确是被选来**填补 Jefferson Davis 的未竟参议员任期**（这层反讽广为流传、属实）。**但**密西西比州议会在具体安排席位时，是把他放到 **Albert Brown** 空出的那个席位上，而非严格意义上 Davis 本人的座位。把它说成「带头脱离联邦保卫奴隶制者（=Davis）留下的位子」在「任期归属」层面成立、在「字面同一个座位」层面被部分史料修正。
   - 建议：保留反讽力度，但**降级为更稳的措辞**——如「我接的，是当年带头脱离联邦、后来当上邦联总统那个人（Jefferson Davis）留下的参议员任期」。把「任期」与「座位」区分开，既留反讽又不被史实党挑「不是同一把椅子」。注意 storyboard 三处（`hr-n1` 两次 + lens description）+ kernel §3 均用此说法。

3. **[#5]/[#17]** `aj-n4`·`aj-n10`·`aj-n11`：Johnson「共犯」「松开闸门的人」「亲手逆转进步」等**因果归责框架**。
   - 问题：**因果中立性（任务重点）**。这是本 Topic 最需要 Rule 0 把关的地方：把「重建失败」的责任高度集中到 Johnson 一人，是 structural reading 的合理论证之一，但**非唯一动因**（北方政治意志撤回、南方暴力、经济束缚同为主因，kernel §9 已列）。
   - 当前处理：**已较好平衡**——`aj-n11` synthesis 给了「守护宪法平衡 vs 亲手逆转进步」双边论证；kernel §0 明示 Rule 0 中性、§9 列三派 historiography、§10.4 清掉「因腐败被弹劾」误解。归责语句多以**第一人称自陈/自问**呈现（「你算不算共犯？」），非作者旁白定罪。
   - 建议：**无需改动，但提请创始人意识到这是全 Topic 因果张力最大处**。维持 N11 双边平衡即可；切勿在任何单节把「Johnson = Jim Crow 的唯一原因」写成旁白定论。低优先级（当前已合规）。

4. **[#24]/[#26]** `freedman-sharecropper` 全 lens：composite 佃农的个体感官细节（手抖的选票、走很远路、棉花地的安静、账本上「一个壮年男工」）。
   - 问题：**dramatization 等级**（虚构个体生平 + 内心戏 + 感官场景）。
   - 当前处理：**已透明标注到位**（见下方 composite 清单）——`fs-n1` 显式声明「像他这样的人有几百万，绝大多数连名字都没留下来；这一遍把他们的一生集中到一个人身上」；lens description / kernel §3 / meta.notes 均明示 composite。集体史实（解放、文盲、四十英亩被收回、首次投票、sharecropping 债务、识字测验剥权）全部 documented。
   - 建议：**无需改动**。符合 §1.3 dark-topic 红线（composite 必须标明）。列此条仅为留痕（dramatization 等级须在账本可见）。低优先级。

5. **[#16]** `fs-n9`·`hr-n10`·kernel §10.6：Jim Crow「识字测验/人头税」剥夺投票权的**时序**。
   - 问题：**时序精度（轻类）**。文中把识字测验/人头税系于「1877 撤军后、接下来几十年逐步制度化」，方向正确（且 kernel §10.6 已专门清掉「Jim Crow 内战后立刻出现」的误解）。但需注意：系统性的识字测验/人头税/祖父条款**主要集中在 1890-1910**（密西西比 1890 首开新宪法），距 1877 撤军还有十余年。叙事节奏上佃农「老来」遭遇识字测验与真实时间线吻合（composite 跨 c.1840-1910），无硬伤。
   - 建议：**无需改动**。提请注意：若未来出 quiz/timeline，识字测验高峰应标 1890s 而非「1877 紧接着」。极低优先级（叙事与清坑专区已自洽）。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 一个获自由的黑人佃农 | `freedman-sharecropper-receiving-end`（全 12 节，gold-standard `fs-n1`/`fs-n4`/`fs-n6`/`fs-n11`/`fs-n12`）| 无真名；约 1840-1910 生卒为叙事设定；具体个人经历（棉花地听解放、手抖的选票、账本上「一个壮年男工」、向地主赊账滚债、孩子被识字测验挡在投票站外）为合成；**底层集体史（解放、文盲无地无钱、四十英亩被 Johnson 收回、1867 首次投票、sharecropping 债务束缚、识字测验/人头税剥权、倒退到接近奴役）全部 documented** | ✅ **已透明标注**：lens name/description 标「合成的人物，代表千千万万真实存在却没留下名字的南方黑人」；`fs-n1` 正文「这一遍，没有我的真名……像我这样的人有几百万，绝大多数连名字都没留下来；这一遍把他们的一生集中到一个人身上，让你看清楚」；kernel §3·§附C·meta.notes(anti-fab) 均明示 composite。**符合 §1.3 dark-topic 红线** |

> 其余出场人物（Andrew Johnson / Hiram Revels / Frederick Douglass / Edwin Stanton / Jefferson Davis）均为**真实历史人物**，非合成。Johnson / Revels 两 lens 为第一人称视角叙事（内心戏/「两笔账」属合理 inference，挂在已证事实上），未虚构其生平骨架。Revels 1875 批评共和党为 documented controversy（非虚构，meta.notes 已自标）。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `andrew-johnson`（claim #1-17）/ `hiram-revels`（#10,18-23）/ `freedman-sharecropper-receiving-end`（#3,8-10,24-27；含 N1/N4/N6/N11/N12 gold-standard 节点）。N6 跨 lens/Topic 锚（Magna Carta Clause 39）三 lens 全挂、claim #10 一并核实。
- **任务重点核查结论**：
  - **13/14/15 修正案年份**：13th=1865.12.6 / 14th=1868.7.9 / 15th=1870.2.3，全 ✅verified（#3/#8/#9）。
  - **Compromise of 1877**：Hayes-Tilden、撤 FL/LA/SC 三州联邦军、终结重建，✅verified（#15）。
  - **Freedmen's Bureau**：narrative §附B/§4 + `fs-n2` 描述（办学/签合同/发口粮）准确，未抽为独立行（无高风险表述），核实通过。
  - **sharecropping 制度**：crop-lien/debt-peonage 机制（赊账高利、文盲受制账本、欠债不得离开、滚债）✅verified（#27）。
  - **Black Codes / Jim Crow 起点**：Black Codes 1865-66（密西西比首州）✅verified（#4）；Jim Crow 系于「1877 后逐步制度化」、识字测验/人头税高峰 1890-1910，时序正确、kernel §10.6 已清「内战后立刻出现」误解（#16）。
  - **KKK**：1865 创/1866 得名、夜骑私刑恐吓黑人选民、Enforcement Acts 镇压，✅verified（#14）。
  - **因果判断（重建为何失败的 framing 中立性，重点）**：Johnson 归责框架是全 Topic 张力最大处；**当前已较好平衡**（N11 双边 synthesis + kernel §0 Rule 0 + §9 三派 historiography + §10 清坑），归责语句多为第一人称自问而非旁白定论。提请创始人意识到此为关键审点（红旗 #3），但无需改动。
  - **绝对表述（第一次/最大/从未，重点）**：「头一回国会推翻总统对重要法律否决」（#6）✅、「第一次总统被弹劾」（#11）✅、「首位非裔参议员」（#18）✅——三条绝对表述全经权威核实通过。
- **引语分层**：14th「equal protection」(#8)、15th「不得因肤色剥夺投票权」(#9)、Magna Carta Clause 39「no free man」(#10) 均为 primary/逐字可核；kernel §5C 已自标 Black Codes 为「paraphrase/simplified，非单一逐字法条」；Revels 1875 批评（#22）为 documented 公开信、非杜撰。无传说性「名言」被当逐字引文（对照 chinese-exclusion 的 Crocker 长城句风险，本 Topic 无此类问题）。
- **用到的外部核实来源**：National Archives（13th/14th/15th milestone docs）、Constitution Annotated / congress.gov（Reconstruction Amendments）、U.S. Senate.gov（Hiram Revels 首位非裔参议员 / Johnson 弹劾审判 35-19）、U.S. House history.house.gov（Civil Rights Bill 1866 override / Revels）、Wikipedia（Compromise of 1877 / Reconstruction era / Reconstruction Acts / Black Codes / KKK / Forty acres and a mule / Sharecropping / Jim Crow laws / Disfranchisement / Hiram Revels / Civil Rights Act 1866 / Fifteenth Amendment）、Britannica（Black Codes）、HISTORY.com（Compromise 1877 / Civil War deaths / Jim Crow vote / KKK）、NPS（why Johnson impeached / forty acres / Revels）、NCpedia（Revels 1875 致 Grant 信）、Magna Carta Project（UEA, Clause 39）、Hacker 2011 / PNAS（Civil War mortality 重估）、American Yawp / BlackPast（Mississippi Black Code 原文）、New Georgia Encyclopedia（Field Order No.15 / KKK）。
- **总评**：本 Topic 史实骨架**非常稳健**——所有修正案年份、Compromise of 1877、弹劾结果（差一票/首位被弹劾总统）、首次 override、Black Codes、forty acres 被 Johnson 收回、sharecropping 债务机制、Revels 生平时间线（含 1875 documented 争议）、KKK、Jim Crow 时序、Magna Carta 跨 Topic 锚均经权威核实通过。**无 `needs-source`（无悬空高风险事实），无与权威正面冲突的硬错。** composite 佃农透明标注到位（无红旗）。5 条红旗中：#2（死亡数偏保守）/#19（Revels 席位「Davis vs Brown」细节）为应处理的轻-中类；#3（Johnson 因果归责中立性）为「已合规但需创始人意识到的关键审点」；#4/#5（composite dramatization 留痕、Jim Crow 时序）为低优先级留痕。**可进 Gate 2；建议先微调 #19（席位措辞）与在 kernel 给 #2 加一句死亡数现代估计注脚，再上线。**
