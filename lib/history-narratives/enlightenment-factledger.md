# 启蒙运动 1689-1804 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    enlightenment
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/enlightenment.js（3 lens: voltaire-perpetrator / gouges-mediator / toussaint-receiving）+ lib/history-narratives/enlightenment.md（Part 1-3）
claim 总数:  30
🚩 红旗数:   6（需创始人审）
补建说明:    本 topic 已上线（过 4-agent review），此前从未做 Fact Ledger，本次补建。
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

> **本 topic 的引语分层是核心战场**：伏尔泰名言多有讹传（如「我虽不同意你说的话，但誓死捍卫你说话的权利」根本不是他写的）；Crocker 式传说句；Toussaint「自由之树」遗言；Gouges「最后遗言」——重点查 quote 真实性。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「Voltaire 1694.11.21 生于巴黎，原名 François-Marie Arouet，父为公证员，母 1701 年（他 7 岁）去世」（`voltaire-N1` / narr §3）| date | encyclopedia | Davidson 2010；维基一致：1694.11.21 生，母 Marie Marguerite Daumard 1701 卒 | ✅verified |
| 2 | 「1717.5 因讽刺摄政王 Philippe d'Orléans 被 lettre de cachet 关进巴士底狱 11 个月，狱中写《Œdipe》，1718 出狱连演 45 场」（`voltaire-N3` / narr §3）| date / number | encyclopedia | Davidson 2010；Œdipe 1718 首演大获成功。45 场为传记数字，权威叙述一致 | ✅verified |
| 3 | 「1726 Rohan 事件后要求决斗被拒（贵族与平民间无决斗权），二次入狱后流放英国」（`voltaire-N4` / narr §3）| causal / motive | encyclopedia | Davidson 2010；决斗权作为贵族特权属史实背景，归因合理 | ✅verified |
| 4 | 「Voltaire 1726.5 到英国，Newton 葬礼神话」——narr §4 明标他 5 月到、Newton 1727.3 死，**不可能亲历葬礼**，是自我神话 | quote / date | encyclopedia | Voltaire Foundation 证实：Voltaire 1726.5 抵英、Newton 1727.3.28 葬于 Westminster，无法亲历。**narr 主动 hedge 处理优秀**；storyboard `voltaire-N5` 未提葬礼，干净 | ✅verified |
| 5 | 「Locke 1689《政府论两篇》：生命/自由/财产三项自然权利；《人类理解论》白板说」（narr §2）| causal | encyclopedia | 标准 textbook 表述，life/liberty/property + tabula rasa 准确 | ✅verified |
| 6 | 「1734《哲学书简》在法被判『对宗教和政治有危险倾向』下令销毁，但书已先流通」（`voltaire-N6` / narr §4）| date / causal | encyclopedia | Robertson 2005；查禁+逃往 Cirey 确证 | ✅verified |
| 7 | 「Émilie du Châtelet 翻译+注释 Newton《Principia》法译本至今仍是标准法文版；Voltaire 1738《牛顿哲学原理》靠她教 Newton 力学」（`voltaire-N7` / narr §5）| representativeness / motive | encyclopedia | Schiebinger 1989；du Châtelet 译本 1759 死后出版、确为标准法译本。归因审慎 | ✅verified |
| 8 | 「Voltaire 持 Compagnie des Indes 股份（1720s-1750s）；死时遗产约 200 万 livres tournois」（`voltaire-N8` / narr §7）| number / motive | encyclopedia | Cronk 2009 p.20。**但**近年 Giovannetti-Singh 2022（History Workshop Journal）更进一步：1722 继承 3 股、1760 年每年从该公司收约 20,000 livres、1752 直接投资 San Jorge 贩奴船。措辞「不是奴隶船的直接经营者」可能偏轻 → 见红旗 #1 | ✋flagged |
| 9 | 「《Candide》1759 第 19 章苏里南黑奴：糖厂轧手指砍手、逃跑砍腿，『这就是欧洲人吃糖的代价』，然后 Candide 继续走」（`voltaire-N9` / narr §8）| quote | encyclopedia | Dubois 2004；《Candide》原文第 19 章确有此段，概括准确 | ✅verified |
| 10 | 「持股高峰 1720s-1750s 而苏里南段写于 1759，已『基本清盘』；持股期间无公开批奴文字」（`voltaire-N9` / narr §7）| causal / motive | inference | Cronk 2009 自标「证据不足以确认」时间差含义。**但** Giovannetti-Singh 2022 指其终身持股、1746/1749 还为该公司贷款背书 → 「已清盘」时间线可能站不住 → 见红旗 #1 | ⚠️downgrade-wording |
| 11 | 「Calas 案：1762 Jean Calas（新教布商）无物证被图卢兹天主教法庭判车裂；1765 平反（死后 3 年）」（`voltaire-N10` / narr §6）| date / number | primary | 维基/Britannica/Musée protestant 一致：1762.3.10 车裂、1765.3.9 平反、家庭获赔 36,000 livres。确证 | ✅verified |
| 12 | 「Voltaire 口号『Écrasez l'infâme!』指宗教迷信+不宽容+专制法庭三件叠加，非指上帝」（`voltaire-N11` / narr §2·§6）| quote | primary | 真史料口号，含义解读符合学界（infâme 指教会/不宽容，非上帝）| ✅verified |
| 13 | 「《哲学辞典》1764『Juifs』条目是世俗/族裔反犹主义早期模板」（`voltaire-N11` / narr §7）| causal / quote | encyclopedia | Hertzberg 1968 主论断。**注**：2023 Berghahn / 2025 Hist. of European Ideas 对 Hertzberg 命题强度有学术争议；storyboard 未把它排成铁案（用「早期模板」），措辞稳妥 | ✅verified |
| 14 | 「1791 大革命期间 Voltaire 遗体移入万神殿成『启蒙英雄』」（`voltaire-N12` / narr §8·Part2 汇合）| date | encyclopedia | 1791.7 移入 Panthéon，确证 | ✅verified |
| 15 | 「Olympe de Gouges 1748.5.7 生于 Montauban，屠夫女儿；『贵族父亲 Pompignan』传说无文件证据」（`gouges-N1` / narr §9）| date | encyclopedia | Blanc 2003；维基/Britannica 一致生卒。传说已 hedge，处理正确 | ✅verified |
| 16 | 「1789.8.26《人和公民权利宣言》通过；homme 双义（人/男人）；起草者心中权利人=有产法国男性」（`gouges-N6` / `toussaint-N5` / narr §9·§12）| date / causal | primary | 文件通过日期为铁证；homme 双义+排斥分析来自 Scott 1996，属合理史学诠释 | ✅verified |
| 17 | 「Gouges 1791《女性宣言》第 10 条：『如果女性有权被送上断头台，就应同样有权站上讲台』」（`gouges-N7` / narr §9）| quote | primary | **word-for-word 核实**：1791 原文 Article X「la femme a le droit de monter sur l'échafaud; elle doit avoir également celui de monter à la Tribune」。铁证 | ✅verified |
| 18 | 「献词给 Marie-Antoinette = 孤立者对孤立者的符号联结，非保皇」（`gouges-N7` / narr §9）| motive | encyclopedia | Scott 1996 分析；属史学诠释（非唯一读法），文中已挂在 Scott 名下 | ✅verified |
| 19 | 「Gouges 1793.11.3 上断头台，45 岁；罪名『保皇党+联邦主义者』，非『因要求女权被杀』」（`gouges-N9`·`N10` / narr §9）| date / causal | encyclopedia | Britannica/维基一致：1793.11.3 处死、45 岁、罪名 sedition/复辟。死因厘清准确 | ✅verified |
| 20 | 「Gouges『最后遗言』即第 10 条——文中明标来源是当时 pamphlet/共和派报纸，**无法从原始档案确证**」（`gouges-N10`）| quote | inference | Blanc 2003 p.198 hedge。文中已透明降级，处理优秀 | ✅verified |
| 21 | 「《女性宣言》沉默近 200 年，20 世纪 feminist 运动才重发现」（`gouges-N12` / narr §9）| absolute | encyclopedia | Scott 1996；「几乎完全被忽略→20 世纪重发现」属学界共识 | ✅verified |
| 22 | 「Toussaint 1743 生于 Bréda 种植园；父名 Gaou Guinou(James) / Hyppolite Thésée(海地史料) 无定论；Allada 贵族说难证实」（`toussaint-N1` / narr §11）| number / motive | inference | Dubois 2004 p.10 hedge 到位；父名+贵族说均已透明标注不确定 | ✅verified |
| 23 | 「1743 Saint-Domingue 产法国约 40% 糖、约 50% 咖啡；约 500,000 被奴役者」（`toussaint-N1`·`N5` / narr §10）| number | encyclopedia | 维基/Britannica：1789 约 500,000 奴隶、产法国 40% 糖。**咖啡数字**：主流为「世界 60% 咖啡」，storyboard 写「法国 50% 咖啡」是不同口径（法国消费 vs 世界产量），非硬错但口径需留意 → 见红旗 #5 | ⚠️downgrade-wording |
| 24 | 「Raynal《两印度史》『新 Spartacus』段出自 Diderot（1780 第三版增补），非 Raynal 本人；1781 被法查禁」（`toussaint-N3` / narr §12.5）| quote | encyclopedia | Voltaire Foundation / Lameca：「Spartacus noir」确为 Diderot 所写、1780 第三版、1781 查禁。鉴别精准，且文中明标「预言」是后见之明 | ✅verified |
| 25 | 「Toussaint 读过 Raynal——高概率叙事，非铁证」（`toussaint-N3` / narr §11.2·§12.5）| causal | inference | Dubois 2004「可能读过但不能确证」。文中反复 hedge，处理优秀 | ✅verified |
| 26 | 「Dubois 2004 p.91：起义前 Toussaint 短暂持有少数自己的奴隶」（`toussaint-N4` / narr §11.3）| number / motive | encyclopedia | Dubois 2004 记录确有此节；不回避、不洗白，处理诚实 | ✅verified |
| 27 | 「1791.8.22 Bois Caïman 起义夜；最早书面记录 Moreau de Saint-Méry 1797（事后约 6 年，殖民地白人立场）；Toussaint 第一夜在 Bréda 助 Bayon 撤离，约 1791.10 才加入」（`toussaint-N7` / narr §13）| date / motive | inference | Dubois 2004 pp.72-74 对 Moreau 文本作来源批判；Bois Caïman 事件成立但细节 hedge。来源批判到位 | ✅verified |
| 28 | 「1793.8.29 Sonthonax 北省先行废奴；1794.2.4 国民公会全国废奴（人类史首次国家级）；Toussaint 1794.5 转投法国」（`toussaint-N8` / narr §14）| date / absolute | primary | Law of 4 February 1794（16 Pluviôse An II）+ Sonthonax 1793.8.29 北省废奴，均确证；「首次国家级废奴」属学界标准表述 | ✅verified |
| 29 | 「1793-1798 英军在 Saint-Domingue 损失：storyboard `toussaint-N9` 写『超过 25,000』；narr §14.4 写『超过 40,000』并注 20,000-60,000 区间」| number | encyclopedia | **跨文件数字不一致**。Geggus 学界估算：约 20,000+ 派驻、其中约 60% 死亡（多为黄热病）；含死/伤/退役高达 50,000-100,000。25,000 偏低、40,000 较稳 → 见红旗 #2 | ✋flagged |
| 30 | 「Toussaint 1801.7.9 宪法（废奴永久+终身总督+劳动管制）；1802.6.7 入 Brunet 营帐被捕；1803.4.7 死于 Fort de Joux（肺炎+胸膜炎）」（`toussaint-N10`·`N11`·`N12` / narr §15-）| date | encyclopedia | 维基/Britannica 一致：1801 宪法终身总督、Brunet 诱捕、1803.4.7 死于 Fort de Joux 肺炎。确证 | ✅verified |
| 31 | 「Toussaint『最后遗言』（自由之树主干被砍、从根重生）——文中明标 19 世纪传记/pamphlet 来源、非当时书写记录，无法确证」（`toussaint-N12` / narr）| quote | inference | Dubois 2004 p.280 脚注 hedge。**附加发现**：学界标准版本是「tree of **Black** liberty / liberty of the blacks」，storyboard 简化为「自由之树/tree of liberty」漏了「Black」→ 见红旗 #3。authenticity hedge 本身处理优秀 | ⚠️downgrade-wording |
| 32 | 「Encyclopédie 28 卷正文 + 11 卷图版，1772 完成」（narr §6）| number | encyclopedia | **与权威冲突**：标准为「**28 卷总数 = 17 卷正文 + 11 卷图版**」（正文 1751-1765、图版 1762-1772）。narr 的「28 卷正文+11 卷图版」算成 39 卷，是硬数字错 → 见红旗 #4 | ✋flagged |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#8 / #10]** `voltaire-N8`·`voltaire-N9`·narr §7：「（Voltaire）不是奴隶船的直接经营者，是殖民地经济的受益者」+「持股高峰 1720s-1750s，《Candide》1759 写时已基本清盘」。
   - 问题：**引语/归因偏轻（重点：受益程度被低估）**。文中依 Cronk 2009 + Dubois 2004 的审慎口径，强调「知情但非直接经营」。但**更新的学界研究 Giovannetti-Singh《Racial Capitalism in Voltaire's Enlightenment》(History Workshop Journal, 2022)** 给出更硬的事实：Voltaire 1722 继承 Compagnie des Indes 股份、**终身持有**、1760 年每年从中收约 20,000 livres；更关键的是他 **1752 年直接投资 San Jorge 贩奴船**（出资 10,000 livres，该船从几内亚掳走 284 名非洲人运往布宜诺斯艾利斯）。这意味着：(a)「不是直接经营贩奴」措辞过宽——他确曾直接出资单次贩奴航程；(b)「1759 已基本清盘」的时间线论证可能站不住（他终身持股、1746/1749 还为该公司贷款背书）。
   - 建议：**不需要推翻**现有 careful framing（它引用的 Cronk/Dubois 是真权威），但建议补一句承认更新研究，或把「不是奴隶船的直接经营者」软化为「不是奴隶船的日常经营者（但确曾直接出资过贩奴航程）」，并对「《Candide》写时已清盘」的因果暗示降级为「持股与批奴文字的时间关系，史学界有不同解读」。**这是本 topic 唯一与新近一手研究有实质张力的点，优先处理。**

2. **[#29]** `toussaint-N9`（storyboard）vs narr §14.4：英军死亡数 **storyboard「超过 25,000」** ≠ **narr「超过 40,000」（注 20,000-60,000）**。
   - 问题：**跨文件同一事实数字打架**。学生若两处都读会看到矛盾。Geggus（学界黄热病军事失败权威）的口径：约 20,000+ 英军派驻、其中约 60% 死于当地（多为黄热病），含死/伤/退役的更广义损失可达 50,000-100,000。narr 的「40,000+，20,000-60,000 区间」更贴主流；storyboard 的「25,000」偏低。
   - 建议：**统一两处口径**。建议 storyboard `toussaint-N9` 上修到与 narr 一致（如「超过 40,000」或「数万」），或两处都改为「数万（学界估算 20,000-60,000）」。中优先级（数字方向不错，但跨文件矛盾是硬伤）。

3. **[#31]** `toussaint-N12`：Toussaint 遗言「打倒我，只是砍掉了自由之树的主干…」。
   - 问题：**引语漏词**。文中已极好地 hedge 了这句话的真实性（19 世纪后世来源、非当时记录）——这一步处理正确，保留。但即便作为「传说版本」，学界标准措辞是「the tree of **Black** liberty / the tree of liberty **of the blacks**」（强调是「黑人的自由」），storyboard 简化成了「自由之树」，丢了「黑人」这个关键限定。
   - 建议：低优先级。若要更准，可在传说引文里补回「黑人的自由之树」。authenticity hedge 不需动。

4. **[#32]** narr §6：「《百科全书》28 卷正文加 11 卷图版」。
   - 问题：**硬数字错（卷数）**。权威一致：Encyclopédie 共 **28 卷 = 17 卷正文（1751-1765）+ 11 卷图版（1762-1772）**。narr 写成「28 卷正文 + 11 卷图版」= 39 卷，把总数 28 误当成正文卷数。英文对照段（narr §6 引文「28 text volumes plus 11 plate volumes」）同错。storyboard 未提卷数，不受影响。
   - 建议：narr §6 中英文都改为「17 卷正文 + 11 卷图版（共 28 卷）」。**这是本账本里唯一与权威正面冲突的纯事实错，建议修。**

5. **[#23]** `toussaint-N1`·`toussaint-N5`：「Saint-Domingue 产法国约 50% 咖啡」。
   - 问题：**数字口径偏差（轻类）**。主流权威表述是「Saint-Domingue 产**世界**约 60% 咖啡 + 法国进口约 40% 糖」。storyboard 把咖啡写成「法国 50%」是混了口径（法国消费 vs 世界产量）。糖的 40% 没问题。
   - 建议：低优先级。可改为「约占法国咖啡消费很大比例 / 约占世界咖啡产量 60%」以贴主流。不算硬错（Saint-Domingue 确是法国咖啡主要来源），但口径不统一。

6. **[全局观察 · 非单句红旗]** **伏尔泰名言讹传风险——已规避，记录备查**。
   - 本 topic 最容易踩的引语雷是「我虽不同意你说的话，但誓死捍卫你说话的权利」——这句**根本不是 Voltaire 写的**（出自 1906 年 E. B. Hall《The Friends of Voltaire》对其立场的概括）。**好消息：storyboard 和 narrative 全程没有引用这句**，规避了最大的引语陷阱。本条仅作记录：未来若有人想给本 topic「加金句」，务必拦截此句。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| （无合成主角）| — | 本 topic 三个 lens 主角 **Voltaire / Olympe de Gouges / Toussaint Louverture 均为真实历史人物**，无虚构合成人物。三个 lens 均第一人称视角叙事，内心戏（如 Voltaire 拿样书时的想法、Toussaint 送 Bayon 上船时的心理）属合理 inference，且文中多处主动标注「历史没有记录我那一刻的想法」「两种解读都有道理，历史学家说不知道」——把演绎与事实显式分层。| ✅ **无未标注合成人物** |

> 出场配角（Émilie du Châtelet / Charles Crocker 无关、Diderot / d'Alembert / Rousseau / Montesquieu / Locke / Spinoza / Leibniz / Bayle / Raynal / Marie-Antoinette / Marat / Robespierre / Vincent Ogé / Dutty Boukman / Bayon de Libertat / Sonthonax / Leclerc / Brunet / Dessalines）均为真实历史人物。**dramatization 风险点**集中在第一人称内心戏，文中已透明处理（见上）。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `voltaire-perpetrator`（claim #1-14）/ `gouges-mediator`（#15-21）/ `toussaint-receiving`（#22-31）；narrative Part 1-3 全段对照。
- **重点核查结论（按任务 8 类）**：
  - **date 日期**：Voltaire 1694/1717/1734/1762/1765/1778、Gouges 1748/1791/1793.11.3、Toussaint 1743/1791.8.22/1793.8.29/**1794.2.4**/1801.7.9/1803.4.7 —— **全部经权威核实通过**，无日期错。
  - **number 数字**：唯二问题是 **#29 英军死亡数跨文件不一致（25,000 vs 40,000）** 和 **#32《百科全书》卷数硬错（28 误当正文卷数）**；#23 咖啡口径偏差为轻类。500,000 奴隶 / 40% 糖 / Voltaire 200 万 livres / Œdipe 45 场 / Encyclopédie 71,818 条目级别均确证。
  - **quote 引语（重点战场）**：✅ Gouges 第 10 条（word-for-word primary 铁证）、Voltaire「Écrasez l'infâme」、Calas 案、《Candide》苏里南段、Raynal/Diderot「新 Spartacus」鉴别 —— 全部正确分层。⚠️ 两处「遗言」（Gouges / Toussaint）都已主动 hedge 为后世建构，处理优秀；Toussaint 遗言漏「黑人」限定为轻类（#31）。**最大引语陷阱（误传的「誓死捍卫你说话的权利」）全程未出现，规避成功。**
  - **causal 因果**：印刷机 vs 审查速度、比较框架松动合法性、Locke→philosophes 武器链 —— 均为 textbook/encyclopedia 级标准诠释。唯一张力是 #10「持股清盘→才写批奴」的因果暗示（见红旗 #1）。
  - **motive 动机**：Voltaire 改名贵族化、Toussaint 送 Bayon 上船（两种解读并存）、Gouges 献词逻辑 —— 均显式标注为 inference/史学诠释，未排成确指。
  - **representativeness 代表性**：Toussaint 作为「500,000 之一」的处理诚实（含「短暂持奴」不回避 #26）；du Châtelet 归因审慎（#7）。无把个人当群体的过度概括。
  - **absolute 绝对表述**：「首次国家级废奴」（#28）、「唯一成功的奴隶革命」、「《女性宣言》沉默 200 年」（#21）—— 均为学界标准表述，成立。
  - **rhetoric 强修辞**：「最漂亮的谎言/最重要的未兑现承诺」「书是已点燃的导火索」等情绪句均挂在已证事实底座上，无脱锚的强数字。
- **文化对应硬禁自检（欧洲史不用中国概念词）**：✅ **通过**。全文无「天命/王朝/科举/士大夫/社稷/儒家忠君」等中国概念词被误植到欧洲启蒙语境。grep 命中的「皇帝/王朝」均在 narrative §（拜占庭 Theodora 跨 topic 引用，本就是拜占庭语境）；「德儒堡垒」之「儒」是 Fort de Joux 的音译，非儒家义。
- **用到的外部核实来源**：Britannica（Gouges / Toussaint / Montesquieu / Jean Calas / Haitian Revolution）、Wikipedia（Olympe de Gouges / Toussaint Louverture / Saint-Domingue / Haitian Revolution / Encyclopédie / Histoire des deux Indes / Law of 4 February 1794 / Jean Calas / Voltaire）、Voltaire Foundation（Newton 葬礼时间线 / Raynal-Diderot 数字版考订 / Calas）、History Workshop Journal（Giovannetti-Singh 2022《Racial Capitalism in Voltaire's Enlightenment》— 持股+San Jorge 贩奴船）、Cambridge core / Geggus（英军黄热病死亡数）、Médiathèque Caraïbe Lameca（Spartacus noir = Diderot）、CHNM Liberty Equality Fraternity（1791 女性宣言原文 + 1794 废奴令原文）、Wikisource（女性宣言英译 Article X）、Berghahn/Hist. of European Ideas（Hertzberg 命题学术争议）、Musée protestant（Calas）。
- **总评**：本 topic 史实骨架**非常稳健**——所有日期、法律链（1689 权利法案 / 1794.2.4 废奴 / 1802 拿破仑复奴）、人物生卒、引语分层（尤其两处遗言的 hedge 与 Raynal/Diderot 鉴别）、composite 处理（无未标注合成人物）、文化对应自检均经核实通过，且**主动规避了伏尔泰最著名的误传金句**。6 条红旗中真正需处理的是 **#4（《百科全书》卷数硬错，唯一正面事实错，建议修）** 与 **#1（Voltaire 持股程度被新研究上修，建议补一句承认）** 与 **#2（英军死亡数跨文件不一致，建议统一）**；其余 3 条为低优先级措辞/口径微调。无 `needs-source`（无悬空高风险事实）。**可维持上线状态；建议下次内容迭代时优先修 #4 卷数错与 #2 跨文件数字。**
