# 镀金时代与劳工 1870-1900 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    gilded-age-1890
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/gilded-age-1890.js（3 lens: andrew-carnegie / samuel-gompers / homestead-striker-receiving-end）+ lib/history-narratives/gilded-age-1890.md
claim 总数:  30
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
| 1 | 「1892 年 7 月 6 日 Homestead 罢工流血冲突」（`carn-n7` / `hs-n1` / `hs-n4` / `hs-n5` / kernel §4 Beat3·§附A）| date | encyclopedia | 主流权威一致：1892.7.6 Pinkerton 与工人在 Monongahela 河边交火。确证 | ✅verified |
| 2 | 「工人死 7 / Pinkerton 死 3，两边一大片伤」（`carn-n7` / `hs-n5` / kernel §3·§4 Beat3·§附A·meta.notes）| number | encyclopedia | **最常引用**为工人 7 / Pinkerton 3 死（PBS / 多教材）。**但来源有出入**：另有「9 名工人死」「Pinkerton 死 3 或 7」等版本。7/3 是主流且保守的标准数字 | ⚠️downgrade-wording |
| 3 | 「约 300 名 Pinkerton 私兵坐船沿 Monongahela 河到厂门口」（`carn-n7` / `hs-n1` / `hs-n4` / kernel §4 Beat3·§附D）| number | encyclopedia | 约 300 Pinkerton 探员，由拖船 Little Bill 拖两条驳船沿 Monongahela 河上行抵 Homestead。确证 | ✅verified |
| 4 | 「冲突打了大半天，约 13 个小时」（`hs-n4` 隐含 / `hs-n5` / kernel §4 Beat3）| number | encyclopedia | 多源记「约 13 小时」战斗（另有「约 12 小时 off-and-on」）。处于可证范围。确证 | ✅verified |
| 5 | 「Carnegie 1835 生苏格兰 Dunfermline 织工家 / 1848 13 岁全家坐船去美国匹兹堡」（`carn-n2` / kernel §3·§附A）| date / number | encyclopedia | 1835 生 Dunfermline；1848 移民。**年龄微议**：多记 12 或 13 岁（1835→1848，看月份）。「13 岁」常见、可接受 | ✅verified |
| 6 | 「第一份活棉纺厂童工，每周挣 1 美元 2 角」（`carn-n1` / `carn-n2` / kernel §3·§附A）| number | encyclopedia | 第一份活 bobbin boy（棉纺厂换线轴童工），$1.20/周、12 小时/天 6 天/周。确证（「童工」措辞略宽于「bobbin boy」，无碍）| ✅verified |
| 7 | 「Carnegie 一辈子捐建 2500 多座图书馆」（`carn-n1` / `carn-n10` / `carn-n11` / kernel §3）| number | encyclopedia | 共 2,509 座（美国 1,681 / 英爱 660 / 加 125…），1881 起于 Dunfermline。「2500 多」准确 | ✅verified |
| 8 | 「1889 写《财富的福音》(The Gospel of Wealth)」（`carn-n3` / `carn-n7` / kernel §3·§4·§5.1·§附A）| date / quote | primary | 1889 发于 North American Review。富人财富「held in trust」、帮「肯自助的人」是真要旨。storyboard 用 paraphrase 非逐字，处理稳妥 | ✅verified |
| 9 | 「1901 卖掉钢铁帝国，余生捐出约九成财富」（`carn-n8` / `carn-n10` / `carn-n11` / kernel §3·§附A）| date / number | encyclopedia | 1901 售予 J.P. Morgan（$480M）；余生捐约 $350M ≈ 近 90% 身家。确证 | ✅verified |
| 10 | 「Carnegie 给 Frick 的指示：合同到期后必须变没有工人组织的厂」（`carn-n5` / `carn-n7` / kernel §4 Beat1·§5.2）| quote / motive | primary | Carnegie 通信确表「these works...will be necessarily non-union after the expiration」+「We are with you to the end / approve of anything you do」。storyboard 用 paraphrase（「怎么做你看着办」），方向与史料一致 | ✅verified |
| 11 | 「那年 Carnegie 人在苏格兰，把全权交给厂长 Henry Frick」（`carn-n5` / `carn-n7` / kernel §3·§4 Beat1·§附C）| date / causal | encyclopedia | 1892 春 Carnegie 赴苏格兰，Homestead 交 Frick。确证。Frick = Henry Clay Frick | ✅verified |
| 12 | 「Frick 合同到期前锁工人在门外，拉高墙架铁丝网（活像要打仗）」（`carn-n7` / `hs-n4` / kernel §4 Beat2）| causal / date | encyclopedia | Frick 6/28-30 lockout + 建 3 mi 长、约 8-12 ft 高围栏含铁丝网与射击孔（工人称「Fort Frick」）。**微议**：总 lockout 实为合同到期（6/30-7/1）当口，「到期前」措辞略偏，但锁部分车间确在 6/28 起。基本成立 | ✅verified |
| 13 | 「Pinkerton 是专门替资本家对付工人的私人保安公司（私兵）」（`carn-n7` / `hs-n1` / `hs-n4` / kernel §3·§4·§附B）| representativeness | encyclopedia | Pinkerton National Detective Agency 常受雇于资方破罢工/护厂。确证 | ✅verified |
| 14 | 「工人打退私兵后，宾州州长派来正规军（好几千全副武装士兵）压垮罢工」（`carn-n8` 隐含 / `hs-n7` / kernel §4 Beat4·§附A）| number / causal | encyclopedia | 州长 Pattison 派约 8,500 名**州 National Guard（州民兵）**，7/12 接管，martial law。**注意定性**：是**州民兵**非「联邦正规军」；storyboard 用「正规军/政府的正规军/the state's army」——「政府/国家的军队」成立，但「正规军」易被误读为联邦常备军 | ⚠️downgrade-wording |
| 15 | 「1890 国会通过法律拆分大到左右市场的巨头（政府第一次伸手管财富集中）」（`carn-n9` / kernel §2·§4 L4·§6·§附A）| date / absolute | encyclopedia | Sherman Antitrust Act 1890.7.2 签署，首部联邦反垄断法，授权拆 trust。「第一次」成立 | ✅verified |
| 16 | 「适者生存搬到人类社会／强者爬顶弱者沉底是自然规律（Social Darwinism）」（`carn-n6` / `gomp-n6` / `hs-n6` / kernel §9）| causal / rhetoric | textbook | APUSH/学界标准：Social Darwinism 把生物「适者生存」误用到社会、为不平等辩护。确证 | ✅verified |
| 17 | 「鼓吹者：英国人 Spencer + 美国学者 Sumner；Carnegie 跟 Spencer 私交不错」（`carn-n6` / kernel §9·§附C）| representativeness / motive | encyclopedia | Spencer 创「survival of the fittest」、Social Darwinism 主要发展者；Sumner 美国主要鼓吹者。**Carnegie-Spencer 关系**：storyboard 说「私交不错」实为**保守低估**——Carnegie 是 Spencer 的狂热信徒，称其「My Dear Master」。措辞偏弱但无错 | ✅verified |
| 18 | 「Carnegie 用 Social Darwinism 替财富集中辩护，又用慈善回报社会」（`carn-n6` / `carn-n8` / `carn-n9` / `carn-n10` / kernel §3·§9）| motive / causal | inference | 大方向成立。**史学微议**：纯正 Social Darwinism（Spencer）**反对慈善**；Carnegie 的《财富的福音》恰恰**偏离**纯 Spencer，加上「富人有济世责任」。把两者说成同一逻辑的两面是合理诠释，但属 synthesis 诠释非铁板事实。kernel §9 已用「时代意识形态」+ sourcingNote 谨慎处理 | ✅verified |
| 19 | 「Carnegie 自认慈善与镇压不矛盾／真心相信在做时代最大的善事」（`carn-n8` / `carn-n10` / kernel §3·§10.1）| motive | inference | 合理 inference（与 Gospel of Wealth 自述、捐九成行为一致），属第一人称视角合理内心戏，挂在已证事实上 | ✅verified |
| 20 | 「Gompers 1850 生伦敦东区 Spitalfields 穷犹太家／10 岁卷雪茄学徒／1863 13 岁全家移民美国纽约下东区」（`gomp-n1` / `gomp-n2` / kernel §3·§附A）| date | encyclopedia | 1850.1.27 生 Spitalfields 犹太家；约 10 岁当 cigar maker 学徒；1863 移民下东区。确证 | ✅verified |
| 21 | 「1886 Gompers 联合各组织成立全国性 AFL 当头，一当快 40 年」（`gomp-n1` / `gomp-n3` / kernel §3·§4 L4·§附A）| date / number | encyclopedia | 1886 AFL 成立任主席；1886-1894 + 1895-1924（仅 1895 中断一年），至 1924 死。「快 40 年」成立（约 38 年） | ✅verified |
| 22 | 「Gompers 走『务实工会』(pure and simple unionism)：不谈推翻只争工钱工时车间，口号『要更多/More』」（`gomp-n3` / `gomp-n5` / kernel §3·§5.3·§附B）| quote | encyclopedia | pure and simple unionism 是 Gompers 标准路线标签；「More」式诉求是其纲领通行概括。处理稳妥 | ✅verified |
| 23 | 「AFL 主要由有技术的熟练工组成，把没技术移民/女工/黑人工人挡在门外」（`gomp-n1` / `gomp-n4` / `gomp-n5` / `gomp-n7` / kernel §3·§5.3·§7·§10.3）| representativeness | textbook | AFL 以 craft union 为主、结构上把非熟练工排除在外。移民/女工边缘化、craft 排外有据。确证 | ✅verified |
| 24 | 「Gompers 公开支持限制移民，尤其对来自亚洲的劳工立场很硬——而他自己就是移民」（`gomp-n7` / `gomp-n10` / kernel §3·§4 反讽·§10.3）| motive / representativeness | encyclopedia | Gompers 力推/支持排华，AFL 1901 出《Meat vs. Rice...Which shall survive?》小册；1918 仍称华工威胁「white standard」。确证（反讽属实） | ✅verified |
| 25 | 「黑人工人：种族隔阂让 AFL 里很多行业组织把黑人挡在外面」（`gomp-n7` / `gomp-n9` / kernel §3·§5.3·§7·§10.3）| representativeness / motive | encyclopedia | 史实更细：AFL 章程层面早期**不明文按种族排斥**，Gompers 1880s-90s 还曾**敦促**组织黑人工人；但 craft 结构+各加盟工会实际把黑人排除，1900 后才正式化「分立 local」政策。storyboard 把它写成「Gompers 亲手关黑人在门外」略**前移并个人化**了 Gompers 早期立场（他后期才转向公开敌视）| ✋flagged |
| 26 | 「Homestead 钢厂工人 1500 度高炉边一天 12 小时／事故绞掉胳膊腿／滚烫钢水烫死」（`carn-n4` / `hs-n2` / kernel §3·§5）| number / rhetoric | encyclopedia | 12 小时班、常 7 天/周、高温致命事故频发是 Gilded Age 钢厂确证常态（Carnegie 仅给 7/4 一天假）。「1500 度」是合理量级（高炉/钢水温度），属感官细节非伪精确。确证 | ✅verified |
| 27 | 「Carnegie 给的工钱比同行算大方的，可成本压到全行业最低靠拉满工时榨人力」（`carn-n4`）| motive / causal | inference | **半真半框架**。Homestead 熟练工有 sliding-scale（钢价高时工钱确较优），故对**熟练工**「较大方」可成立；但对非熟练工/整体不成立，且 1892 正是要砍 18-22% 工钱。作为 Carnegie 第一人称合理化语气可接受，但「大方」是有选择性的自我框架 | ⚠️downgrade-wording |
| 28 | 「同一句『适者生存』在三 lens 各一个方向（Carnegie 辩护财富／Gompers 划排外门槛／striker 看清适者=握枪那方）」（`carn-n6` / `gomp-n6` / `hs-n6` / meta.notes）| rhetoric / inference | inference | 这是**作者设计的跨 lens 文学对位**，非史料命题。三个方向各自挂在已证事实上（Carnegie 用 SD 辩护✅、AFL 排外✅、私兵武力✅），对位本身是诠释装置，合理且未冒充史实 | ✅verified |
| 29 | 「报纸大多站厂方一边，把工人写成『闹事的暴民』」（`hs-n8` / kernel §4 Beat5）| causal / representativeness | inference | 方向成立但**有简化**：Homestead 后舆论实际**相当分裂**，不少报纸/公众同情工人、谴责 Pinkerton 与 Frick（尤其 Frick 遇刺后舆论一度转复杂）。「大多站厂方」偏一边倒，属可议的概括 | ⚠️downgrade-wording |
| 30 | 「『进步』的每根钢梁每段铁轨都是用工人的命铺出来的／财富往上流苦和死往下沉」（`hs-n8` / `hs-n10` / `hs-n11` / kernel §1·§6·§10.7）| rhetoric | inference | 强修辞 synthesis 句。作为反 Whig 母题的情绪表达，挂在已证劳工苦难事实上，且 N10 明确以「两种说法都站得住」并置（不单方下结论）。属合规的 synthesis voice | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#25]** `gomp-n7`·`gomp-n9`·kernel §7：「黑人工人……种族的隔阂，让 AFL 里很多行业组织把黑人工人挡在外面」+ N10「我亲手把……黑人工人关在外面」。
   - 问题：**人物动机/时间错位（重点 C 邻类）**。史实更细腻：AFL **章程层面早期不明文按种族排斥**，且 Gompers 在 1880s-90s（正是 lens 叙事所在年代）**曾公开敦促**组织黑人工人、拒给明文排黑的工会发证；黑人被排除主要是 **craft 结构 + 各加盟工会实践**的结果，正式的「分立 local」歧视政策到 **1900 后**才成型，Gompers 个人公开敌视（「黑人是雇主手里的鞭子」）也偏**后期**。storyboard 把它压缩成「Gompers 亲手把黑人关门外」，把后期立场前移并个人化。
   - 建议：移民/女工的「亲手挡」可保留（确有 Gompers 个人主动排斥，尤其排华）；**黑人这一条改为结构性措辞**——如「AFL 以 craft 工会为骨架，黑人工人多被各行业工会的实践和种族门槛挡在外面」，把「Gompers 亲手关黑人」降级为「这套体系把黑人关在外面」，与史实更贴。中优先级。

2. **[#14]** `hs-n7`·kernel §4 Beat4：「州长派来**正规军**——好几千名全副武装的士兵」+「政府的**正规军**」。
   - 问题：**定性措辞（重点 A 邻类/术语精度）**。开进 Homestead 的是宾州**州 National Guard（州民兵）**约 8,500 人，不是**联邦常备/正规军**。「政府的军队/国家的军队」成立（kernel §10.5 自己也强调私兵 vs 政府军升级是关键点），但中文「正规军」在学生耳里易等同联邦常备军，模糊了「**州**民兵」这个准确身份。
   - 建议：把「正规军」改为「**州里的军队（州民兵/国民警卫队）**」或「政府派来的正规武装部队（宾州的）」，保留「枪杆子从私兵升级到政府军」的关键对比，但点明是**州**一级。中优先级。

3. **[#29]** `hs-n8`·kernel §4 Beat5：「报纸大多站在厂方那边，把我们写成『闹事的暴民』」。
   - 问题：**代表性概括偏一边倒**。Homestead 后的舆论实际**相当分裂**：很多报纸与公众同情工人、谴责 Pinkerton 私兵与 Frick；这正是 Homestead 在公关上不同于一般罢工之处。「大多站厂方」把复杂舆论压成单边。
   - 建议：改为「**有不少**报纸把我们写成『闹事的暴民』」或「**厂方那边的报纸**把我们写成暴民（也有报纸同情我们）」，既保留受害方视角的真实感受，又不抹掉「舆论一度同情工人」的史实。中优先级。

4. **[#2]** `carn-n7`·`hs-n5`·kernel §3·§附A：「工人死 7 / Pinkerton 死 3」。
   - 问题：**数字有来源出入（重点 A 轻类）**。7/3 是**最常引用**的标准数字（PBS / 多教材），但权威间确有出入（另见「9 名工人死」「Pinkerton 死 3 或 7」「共约 12 人死」等版本）。当前数字本身不算错（属主流），但作为被反复当作精确事实记住的数字，宜知其有区间。
   - 建议：可接受、可保留。若要更稳，可加一句对冲（如「至少 7 名工人、3 名 Pinkerton 死」或「不同记载略有出入」）。低优先级（7/3 已是主流且偏保守）。

5. **[#27]** `carn-n4`：「我给的工钱，比同行算大方的。」
   - 问题：**选择性自我框架（重点 C 轻类）**。对 Homestead **熟练工**（有 sliding-scale，钢价高时工钱较优）可成立，但对非熟练工/整体不成立——而且 1892 冲突的直接导火索正是 Carnegie/Frick 要砍 18-22% 工钱。把「大方」放在 Carnegie 第一人称里是合理的自我合理化语气，但读者可能当成中立事实。
   - 建议：当前嵌在 Carnegie 第一人称「你心里很清楚……」语境里，文学上可接受。若想更稳，可加半句限定（如「对熟练工算大方的」）。低优先级。

6. **[#12]** `carn-n7`·kernel §4 Beat2：「Frick **合同到期前**就把工人锁在厂门外」。
   - 问题：**时间细节微偏**。Frick 6/28-29 起先锁部分车间，**全面 lockout** 实发生在合同到期当口（6/30-7/1）。「合同到期前就锁」对**部分**成立、对**全面**略偏。
   - 建议：可接受。若较真可改「合同一到期就把工人锁在门外」。极低优先级。

7. **[#18]** `carn-n6`·`carn-n8`·kernel §9：「Carnegie 用同一套『适者生存』逻辑既辩护财富积累、又用慈善买体面外衣」。
   - 问题：**史学诠释 vs 事实（重点 C 框架类）**。大方向成立，但需知：**纯正 Spencer 式 Social Darwinism 反对慈善**，Carnegie 的《财富的福音》恰恰**偏离**纯 Spencer（叠加「富人济世责任」）。把二者说成「同一套逻辑两面」是合理的 synthesis 诠释，但属诠释而非铁板史实。
   - 建议：无需改动——kernel §9 已用「时代意识形态」+ sourcingNote 谨慎处理，storyboard synthesis 节点也以「两种说法都站得住」并置。仅记录在案，提醒这是 synthesis 诠释层，非可考事实。极低优先级（信息性，非待办）。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| Homestead 罢工的钢厂工人 | `homestead-striker-receiving-end`（全 11 节，含 gold-standard `hs-n1`/`hs-n4`/`hs-n5`/`hs-n6`）| **无真名**；炼钢十几年、两臂烫疤、上有老下有小、守厂门倒下等具体家事为**叙事补充**；底层集体劳工史（12 小时高炉、事故致死、1892.7.6 守河岸被私兵射杀、罢工失败后上黑名单、组织被赶出）为 **documented** | ✅ **已透明标注**：lens description「依据那场真实流血冲突合成的人物（史料确证的是当天的对峙和死伤，他的姓名和家事是叙事性补充）」+ `hs-n1` anti-fab 括号「我这个人，是照着那一天真实发生的事拼出来的——那天的对峙、那天的死伤，是真的；我的名字、我的家，是替你把那一天看得更近的补充」+ kernel §3【Anti-fabrication 标注】+ §0 header + meta.notes 均明示 composite。**符合 §1.3 dark-topic 红线（composite 必须标明）** |

> 其余出场人物（Andrew Carnegie / Samuel Gompers / Henry Frick / Herbert Spencer / William Graham Sumner）均为**真实历史人物**，非合成。Carnegie / Gompers 两 lens 为第一人称视角叙事（内心戏属合理 inference，挂在已证事实上），未虚构其生平骨架。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `andrew-carnegie`（claim #1-19,26-28；含 N4/N6/N7 重点节点）/ `samuel-gompers`（#16,20-25,28；含 N6/N7 排外门槛节点）/ `homestead-striker-receiving-end`（#1-4,13-14,16,26,28-30；含 N1/N4/N5/N6 gold-standard 重点节点）。
- **重点核查结论**：
  - **重点 A（数字夸张）**：核心数字（7/3 死、约 300 Pinkerton、约 13 小时、2509 图书馆、$1.20/周、近九成捐款、8500 民兵）均经权威核实通过。唯一⚠️是 #2 死亡数有来源出入（7/3 主流但非唯一）+ #14「正规军」定性应改为「州民兵」。无悬空伪精确数字。
  - **重点 B（代表性）**：Homestead striker composite 透明标注**到位**（gold-standard，无红旗）。AFL 排外（移民/女工）核实属实；唯一代表性风险是 #25「Gompers 亲手关黑人」前移并个人化了其早期立场（已红旗中类）+ #29「报纸大多站厂方」一边倒（已红旗中类）。
  - **重点 C（引语/动机 framing）**：两条核心 paraphrase（Gospel of Wealth #8、Carnegie 给 Frick non-union 指示 #10）都**未冒充逐字引文**，方向与一手史料一致，处理良好。Carnegie-Spencer 关系（#17）storyboard 反而**保守低估**（实为狂热信徒）。#18「适者生存=慈善逻辑两面」属 synthesis 诠释（已说明，非待办）。#27「工钱大方」是选择性自我框架（轻类红旗）。
- **用到的外部核实来源**：Wikipedia（Homestead strike / Andrew Carnegie / Samuel Gompers / Sherman Antitrust Act / Social Darwinism / Herbert Spencer / Carnegie library / Gilded Age / Robber baron）、Britannica（Homestead Strike / Social Darwinism / Sherman Antitrust Act / Gilded Age）、PBS American Experience（Homestead Mill / Steel Business / Herbert Spencer）、National Archives（Sherman Anti-Trust Act）、Library of Congress（1892 Homestead Strike）、AFL-CIO（Homestead / Gompers / anti-Asian racism statement）、Battle of Homestead Foundation、Rivers of Steel、Carnegie Corporation（library legacy）、Bill of Rights Institute（Gilded Age labor）、Cambridge Journal of American Studies（Carnegie-Spencer）、Who Built America（Meat vs. Rice）、Temple Univ. Press（Black Worker / AFL discrimination）。
- **总评**：本 topic 史实骨架**稳健**——所有日期、Homestead 四 beat 链、Pinkerton 规模/路线/时长、死伤主流数字、Carnegie 生平与捐赠数字、Gospel of Wealth 与 non-union 指示 paraphrase、AFL/Gompers 时间线与排外（移民/女工/排华）、Sherman Act 首部反垄断定性均经权威核实通过。无 `needs-source`（无悬空高风险事实），无与权威**正面冲突**的硬错。7 条红旗中，**#25（黑人排外的个人化/时间错位）**为最该处理项，**#14（「正规军」应改州民兵）**、**#29（「报纸大多站厂方」应改不一边倒）**为次该处理项；#2/#27/#12/#18 为低优先级措辞/对冲微调。**可进 Gate 2，但建议先处理 #25 / #14 / #29 再上线。**
