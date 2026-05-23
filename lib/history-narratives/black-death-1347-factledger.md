# 黑死病 1347-1352 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    black-death-1347
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/black-death-1347.js（3 lens: agnolo-siena / konrad-strasbourg / devorah-strasbourg）+ lib/history-narratives/black-death-1347.md
claim 总数:  28
🚩 红旗数:   7（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

> 凡 `dramatization` 等级而文中**未透明标注**为合成 → 自动进红旗。
> **本 topic 是 dark-topic（屠杀 + 灭门 + 儿童死亡），合成角色透明标注是红线。**

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「1347 年 10 月 12 艘 Genoese 商船靠 Sicily Messina——plague 进西欧」（kernel §1·§4·附A / agnolo-n1 narrativeRef）| date | encyclopedia | Messina 1347 夏-秋（10 月）Genoese 船带入，权威一致 | ✅verified |
| 2 | 「接下来 5 年欧洲 30-50% 的人死 / 1347-1351」（kernel §0·§1·§4.1352）| number / date | textbook | 第一波 1347-1351；现代估计欧洲死 1/3-1/2（修正派上修至 ~50%），区间表述稳妥 | ✅verified |
| 3 | 「真因 1894 年才被发现：Yersinia pestis，1894 香港，Yersin + Kitasato 各自独立发现」（kernel §2.L3·§6·附A / agnolo-n9 / 附B 词表）| date / causal | encyclopedia | 1894 香港 plague，Yersin（Pasteur）与 Kitasato 同时各自分离出菌；1967 改名 Yersinia 纪念 Yersin，确证 | ✅verified |
| 4 | 「1346 蒙古黄金汗国 Janibeg 围 Caffa——投石机把 plague 死尸扔进城（化生战争史第一例）」（kernel §4·附A）| date / number | encyclopedia | Caffa 围城 1346，Jani Beg（r.1342-57）；Gabriele de' Mussi 记投尸，普遍称化生战争早例，确证（注：de' Mussi 非亲历者，"第一例"是常见但非绝对表述）| ✅verified |
| 5 | 「1331 年中国云南就开始流行——Black Death 已知最早爆发地 / 起源」（kernel §0·§2·§4.1331·§10 误解1）| date / absolute / causal | textbook | 中国记录 1331-34 疫情属实（旧学说）。**但** 2022 古 DNA 把直系祖先锁定中亚 Issyk-Kul 1338-39（kernel §9 Monica Green 已自承）。"云南=起源"是**有争议的旧说**，文中多处用"或中亚"对冲但部分句子仍作确指 | ⚠️downgrade-wording |
| 6 | Agnolo 引文「seppellii con le mie mane cinque mei figliuoli **in una fossa**…cani li discivellavano」（agnolo-n5 / kernel §3·附C）| quote | primary | Cronica senese（Lisini-Iacometti 1935 RIS 本）确有此句；标准英译「carried…my five little sons to **the** pit」单数坑。文中标为 documented 引文并保留单数"一个坑"，**未戏剧化为 5 坑**——引文诚信到位 | ✅verified |
| 7 | Agnolo 第一人称内文「9 天 5 个坑挖在我家西边那块小田，我自己挖我自己填」（agnolo-n5 dramatization 段）| number / rhetoric | dramatization | **与 documented 引文（"in una fossa"=一个坑）张力**。文中**显式自标**："我笔下写'一个坑'。但下面…是那 9 天我自己经历的样子——比我笔下的字多"。anti-fab 框架**写进了第一人称**（违反任务硬规：anti-fabrication framing 不进角色第一人称）| ✋flagged |
| 8 | 「1349 年 2 月 14 日（Saint Valentine's Day）Strasbourg 屠杀 2000 个犹太人」（agnolo-n7 / konrad 全 lens / devorah 全 lens / kernel §3·§4）| date / number | encyclopedia | 日期 **2 月 14 日确证**（Wikipedia/Aish/Haaretz 一致）。死亡数：主流"整个社区约 2000"，但估计区间为"数百至 2000+"。"2000"取上沿，常见但偏高 | ✅verified |
| 9 | 「Strasbourg 2000 犹太人在他们**最大的犹太会堂里**被活活烧死」（agnolo-n7，仅 Agnolo lens）| absolute / number | ✋flagged | **与权威冲突**：行刑地是 **Werd 岛犹太墓地搭的一座木屋**，非"最大的犹太会堂"。Konrad/Devorah 两 lens 均正确写"Werd 岛木堆"。**Agnolo lens 内部口径与另两 lens + 史实不符** | ✋flagged |
| 10 | 「1349 年 2 月 9 日市议会罢免反对屠犹的市长 Schwarber，Konrad 投赞成票」（konrad-n5 / kernel §3 Rachel）| date / quote | encyclopedia | 2 月 9 日工匠逼宫、Peter Schwarber 被剥夺财产并放逐，确证。**注**：Schwarber 头衔史料作 **Ammeister**（行会长），文中作 Bürgermeister/市长——通俗化可接受但非严格 | ✅verified |
| 11 | 「Mainz 1349 年 8 月 24 日屠杀 6000 个犹太人」（kernel §3·§4·附A / konrad-n7）| date / number | encyclopedia | Mainz 1349 大屠杀（8 月）数千，常见数字 6000，确证范围内 | ✅verified |
| 12 | 「1349 一年欧洲 200+ 犹太社区被屠灭，犹太人口减 30-50%」（kernel §3·§4·§6）| number | encyclopedia | Rhineland 等数百社区被灭、西欧犹太人口骤降，主流表述，成立 | ✅verified |
| 13 | 「Pope Clement VI 1348/9/26 敕令 Quamvis Perfidiam 谴责屠犹 + 称犹太人也死于 plague」（kernel §3·§4 / agnolo-n7）| date / quote | encyclopedia | Clement VI 两道护犹敕令（1348）确证；Quamvis 名/日期对。"任何屠犹者被绝罚"是内容概括非逐字引文，文中作意译可接受 | ✅verified |
| 14 | 「Siena 1348 死约 30000 人，约总人口 50-60%」（agnolo-n6 / kernel §3）| number | encyclopedia | Agnolo 自记七月内死 80,000（hyperbolic）；现代估 Siena 战前 ~40-50k，损失 50-60%。"30000 / 50-60%"在现代估计范围内，成立 | ✅verified |
| 15 | 「Florence 1348 当时 12 万人，到 9 月死 5 万，40% 半年内消失」（kernel §3 Boccaccio / §3 数字）| number | encyclopedia | Florence 战前约 9-12 万、死约 40-60%，主流范围内，成立 | ✅verified |
| 16 | 「Boccaccio 序言"千层糕式埋葬 / 10 具一层薄土"」（agnolo-n4 EN / kernel §3·§5 文献1）| quote | primary | Decameron 序言确有层叠埋葬 "lasagne/layers" 比喻；文中作意译并署 Boccaccio，成立。**注**：agnolo-n4 CN 版未含此句、EN 版含——中英不齐（非史实问题）| ✅verified |
| 17 | 「Ibn al-Wardi 写 Risala al-naba（1348），1349/4 自己死于 plague」（kernel §3·§5 文献2 / 附C）| date / motive | encyclopedia | Umar Ibn al-Wardi，Aleppo，著瘟疫论，1349 殁于黑死病，确证 | ✅verified |
| 18 | Ibn al-Wardi 引文「奉至仁至慈…它从中国土地而来…苏丹的妃子和市场乞丐死于同一种病」（kernel §3·§5）| quote | dramatization | kernel 已标"编辑简化为 Lexile-1000"。属**改写/简化引文**非逐字翻译，文中已标注简化，可接受（建议保留"简化"标记）| ✅verified |
| 19 | 「Westminster Abbey 1349 记事：6/6 修士 50→…→8/15 Abbot 死，10 周 50→5」（kernel §5 文献3）| quote / number | dramatization | 英格兰修道院高死亡率属实，但该**逐周精确数字 + Brother Wilfred/Albert 具体名字**为**教学性重构**，非可核证的单一一手抄本逐字。kernel 未明标此段为合成/复合 | ⚠️downgrade-wording |
| 20 | 「Quamvis 后没人听：1349 反犹是欧洲反犹"模板"，串到 1391/1648/1881/1903/1938 Kristallnacht/1942 Wannsee」（kernel §3·§6 / devorah-n9 / konrad-n11）| causal / absolute | encyclopedia | 各事件日期均确证（Kristallnacht 1938/11/9-10；Wannsee 1942/1/20；Kishinev 1903；Seville 1391；Khmelnytsky 1648）。"模板/复活"是史学诠释（强但主流），框为"机制"而非线性因果，处理稳妥 | ✅verified |
| 21 | 「Venice 1377 首立 quarantine = quaranta giorni 40 天，现代公共卫生起点」（agnolo-n9 / kernel §6·§11 Q3·附A）| date / number / absolute | encyclopedia | Ragusa(Dubrovnik) 1377 常被记为**最早** 30/40 天隔离；Venice 稍后。文中归 Venice 1377 略有出入（最早法令多归 Ragusa 1377），词源 quaranta=40 对 | ⚠️downgrade-wording |
| 22 | 「拜占庭 1347-49 死 20-30%；1453 君堡陷落是 1347 的延迟死亡」（kernel §3 Eirene·§9 表 / 附A）| number / causal | inference | 拜占庭死亡率 20-30% 合理；"1453=1347 延迟死亡"是**史学诠释/加速器论**，文中已用"加速器非唯一原因"对冲，成立 | ✅verified |
| 23 | 「元朝中国死至少 1/4 / 25%+；plague 是元亡'加速器'非唯一原因」（kernel §0·§3 表·§8）| number / causal | inference | 元末疫情数据**极不确定**（学界争议大，kernel §9 已承认）。"25%+"是**高度不确定的估算**，但文中已显式标"争议很大/加速器非唯一"，对冲到位 | ✅verified |
| 24 | 「1351 英王 Edward III 颁 Statute of Laborers 限工资，失败」（agnolo-n8 / kernel §4·§6·附A）| date / causal | encyclopedia | Statute of Labourers 1351（前身 1349 Ordinance），限工资、禁流动，长期失效，确证 | ✅verified |
| 25 | 「Casimir III 1334 重申/扩展 Statute of Kalisz 护犹（原 1264 Bolesław the Pious 颁）」（devorah-n9）| date | encyclopedia | Kalisz 1264 颁、Casimir III 1334 确认并扩展全波兰，确证。波兰收容东逃犹太难民→Ashkenazi 路径，成立 | ✅verified |
| 26 | 「Agnolo 5 个孩子 Niccolò/Pietro/Caterina/Lisa/Tommaso + 妻 Niccoluccia + 各年龄/性格/死亡顺序」（agnolo-n2·n5 全 lens）| dramatization | dramatization | 史料**只确认"5 个孩子"+ 妻名 Nicoluccia**。姓名/年龄/性格/逐日死亡 = lens 创作。文中**已透明标注**（n2 括号"名字和年龄是叙事性补充，史料只确认数量"、n9 narrator 再次明示）| ✅verified |
| 27 | 「Konrad（屠夫）+ Yitzhak ben Abraham（银匠）+ 银鞋扣 + Yitzhak 那一眼」（konrad 全 lens）| dramatization / motive | dramatization | Konrad/Yitzhak/银扣/那一眼全为合成。kernel 头注 + lens description 显式标 composite（Yitzhak 对应 kernel §3 Rachel 丈夫"一个未具名 Jewish 银匠"）。Schwarber/2000 人/墓地火烧 = documented 底座。**透明标注到位** | ✅verified |
| 28 | 「Devorah bat Yitzhak 14 岁 + 地窖 Tehillim 30 多遍 + Brigitta 藏匿 + Aba 森林边死 + 1408 讲故事」（devorah 全 lens）| dramatization | dramatization | 全合成角色（虚构 14 岁犹太女孩）。lens 头注 + n1 + n9 narrator 均显式标 fictional。东逃 Krakow / Casimir 护犹 / Tehillim 23 篇为真实底座。**透明标注到位** | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#9]** `agnolo-n7`：「在他们**最大的犹太会堂里**，2000 个犹太人被活活烧死。」（EN: "inside the largest synagogue in town"）
   - 问题：**与权威 + 本 topic 另两 lens 自相矛盾（最高优先级）**。Strasbourg 屠杀实际行刑地是 **Werd 岛犹太墓地上搭的一座木屋/木堆**（Wikipedia 明确：a wooden house built at the Jewish cemetery）。**Konrad lens（n7）和 Devorah lens（n6）都正确写成"Werd 岛 / 木堆"**，唯独 Agnolo lens 写"最大的犹太会堂里"。这是 topic 内部口径冲突 + 史实错误。
   - 建议：把"在他们最大的犹太会堂里"改为"在城外 Werd 岛犹太墓地，架起的木堆上"，与另两 lens 统一。这是**唯一与权威正面冲突的硬错**，建议上线前必改。

2. **[#7]** `agnolo-n5`：第一人称段「我笔下写'一个坑'。但下面我说给你听的——是那 9 天我自己经历的样子——比我笔下的字多」+「9 天 5 个坑挖在我家西边那块小田」。
   - 问题：**anti-fabrication framing 进了角色第一人称（违反任务硬规 + 同类事故原型）**。任务明确："把 documented 'in una fossa' 戏剧化…anti-fabrication framing 不能进角色第一人称。"此处 Agnolo 第一人称**亲口**做了"我笔下写一个坑 / 但实际是 5 个坑"的元叙事。好的一面：documented 引文本身**正确保留了"in una fossa"（一个坑），没有把引文改成 5 坑**——比同类事故（直接把引文戏剧化为 5 pits）已**安全得多**。问题只在 framing 的"声音位置"。
   - 建议：把"我笔下写一个坑 / 下面比我笔下多"这层元叙事**移出 Agnolo 第一人称**，改由 narrator 旁白或括号注说明"documented 引文是'一个坑'；以下逐日场景为本视角的合理重构"。保留情绪重量，但不让 14 世纪的 Agnolo 自己谈论"我写的字 vs 真实"。

3. **[#19]** `kernel §5 文献3`：Westminster Abbey「6/6 修士 50→6/13 30→…→8/15 Abbot 死」逐周精确数字 + Brother Wilfred/Albert 具名。
   - 问题：**教学性重构未标注（引语风险 C 类）**。英格兰修道院高死亡率是真的，但这段**逐周递减表 + 两个修士姓名 + 引号内"我们再也不能为每一个死者唱 requiem mass"**读起来像确证一手抄本，实为复合/教学重构。kernel 把它和真正的一手文献（Boccaccio / Ibn al-Wardi）并列在"文件深读"，易被当成可核证原始引文。
   - 建议：在该段加一句透明标注，如"以下为综合多份英格兰修道院记录的**代表性重构**（数字/姓名为示例）"，与 Boccaccio/Ibn al-Wardi 的真引文分层。中优先级。

4. **[#5]** kernel §0·§2·§10 误解1：「1331 年中国**云南**就开始流行——Black Death **起源**地」。
   - 问题：**起源归因用了有争议的旧说（数字/因果 A 类轻）**。2022 年古 DNA 研究把直系祖先锁定**中亚 Issyk-Kul（今吉尔吉斯）1338-39**，"云南起源"是 20 世纪旧学说。本 topic 自己的 §9 historiography（Monica Green 全球派）+ §4.1338 Issyk-Kul 墓碑段其实已经知道这点，多处也用"云南或中亚"对冲——但 §0、§2 时间线、附A 仍有把云南作确指起源的句子。
   - 建议：把确指句统一为"已知最早记录之一在中国（1331-34），但直系祖先据古 DNA 在中亚草原（Issyk-Kul 1338-39）"。低-中优先级（topic 自身已具备纠偏材料，只需统一口径）。

5. **[#8]** 多 lens：「Strasbourg **2000** 犹太人被烧死」。
   - 问题：**数字取上沿（number 轻类）**。权威给区间"数百至 2000+"（整个社区约 2000）。"2000"是常见上限值，不算错，但若写成确指会被史实党指为"取最大值"。
   - 建议：可保留（2000 是 Wikipedia 主述值），或在 narrative 首次出现处加"约/估计"。极低优先级。

6. **[#21]** `agnolo-n9`·kernel §6·附A：「**Venice** 1377 首次规定 quaranta giorni（40 天）——现代公共卫生法起点」。
   - 问题：**首发城市归属偏差（absolute 轻类）**。最早的强制隔离令通常归 **Ragusa（杜布罗夫尼克）1377**（trentino 30 天，后延 40 天）；Venice 立 Lazzaretto 隔离站稍后。文中归 Venice 1377 略有出入。
   - 建议：改"Ragusa（今杜布罗夫尼克）1377 年首次规定"或写"14 世纪末意大利-亚得里亚城邦（Ragusa/Venice）"。词源 quaranta=40 不动。低优先级。

7. **[#10]** `konrad-n5`：Schwarber 头衔作「Bürgermeister / 市长」。
   - 问题：**头衔术语精度（轻类）**。Peter Schwarber 史料头衔为 **Ammeister**（Strasbourg 行会长/工匠首领），非现代意义"市长/Bürgermeister"。
   - 建议：通俗化对 7 年级可接受；若要严谨可加括号"Ammeister（相当于工匠出身的市长）"。极低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| Agnolo 的 5 个孩子（Niccolò/Pietro/Caterina/Lisa/Tommaso）| `agnolo-siena`（n2/n5/n9）| 史料只确认"5 个孩子"+ 妻名 Nicoluccia；姓名/年龄/性格/逐日死亡顺序为创作 | ✅ **已透明标注**：n2 括号"名字和年龄是叙事性补充，史料只确认数量"；n9 narrator"这个视角给的 5 个名字是虚构，历史只确认了'5 个'"。底座（亲手埋 5 子、Cronaca 引文）documented |
| Konrad of Strasbourg（屠夫 + 市议会代表）| `konrad-strasbourg`（全 12 节）| 全合成 perpetrator 角色；妻 Margarete、子 Wilhelm、与 Yitzhak 10 年生意、银鞋扣、投票、"那一眼"为创作 | ✅ **已透明标注**：kernel 头注大段"Konrad 是 composite character，所有事来自 kernel §3 Rachel + §4"；lens description 明示。底座（Schwarber 罢免、2 月 14 日、Werd 岛 2000 人火烧）documented |
| Yitzhak ben Abraham（犹太银匠）| `konrad` / `devorah`（共用）| 虚构姓名；对应 kernel §3 Rachel 丈夫"一个未具名 Jewish 银匠" | ✅ **已透明标注**：kernel 头注"Yitzhak 是虚构的（kernel §3 提到 Rachel 丈夫是'一个 Jewish 银匠'未给名字——这个视角给了名字但显式标记为 lens 创作）" |
| Devorah bat Yitzhak（14 岁犹太女孩幸存者）| `devorah-strasbourg`（全 12 节）| 全合成 receiving-end 角色；地窖、Tehillim 30 遍、Brigitta、Aba 森林边死、1408 讲故事为创作 | ✅ **已透明标注**：kernel 头注"Devorah 是虚构 14 岁犹太女孩"；lens n1 + n9 narrator 均明示 fictional。底座（东逃 Krakow、Casimir 护犹、反犹机制）documented |
| Yusuf the Cairo Merchant | （narrative §3，未做成 storyboard lens）| 半虚构教学角色，一家 19 天灭门 | ✅ kernel 明标"虚构但代表当时无数人，基于 Maqrizi 真实模式" |
| Empress Eirene-Eulogia（拜占庭 7 岁公主）| （narrative §3，未做成 lens）| 虚构教学角色 | ✅ kernel 明标"虚构但代表当时无数皇室孩子" |
| Tom 14 岁英格兰农奴 / Rachel 34 岁犹太银匠妻 | （narrative §3，未做成 lens）| 虚构教学角色 | ✅ kernel 附C cheat-sheet 明标"虚构教学角色" |

> 真实历史人物（非合成）：Pope Clement VI、Boccaccio、Ibn al-Wardi、Guy de Chauliac、Janibeg、Yersin、Edward III、Petrarch、Peter Schwarber、朱元璋、Casimir III、Bolesław the Pious。第一人称 lens（Agnolo）挂在已证事实上，内心戏属合理 inference。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `agnolo-siena`（claim #1-2,6-7,9,13-16,21,24,26）/ `konrad-strasbourg`（#8-11,20,27）/ `devorah-strasbourg`（#8,20,25,28）；narrative kernel 跨文明段（中东 Ibn al-Wardi #17-18 / 英格兰 #19 / 拜占庭 #22 / 中国元朝 #23 / 全球传播 #3-5）。
- **重点核查结论**：
  - **引语诚信（重点 A）**：核心隐患 Agnolo「in una fossa」**已正确保留为一个坑、未戏剧化为 5 坑**（比同类事故安全）。真问题是 **#7 anti-fab framing 写进了 Agnolo 第一人称**（"我写的字 vs 真实"应移到 narrator）。文献 3 Westminster（#19）教学重构未标注。
  - **史实硬错（唯一红线）**：**#9 Agnolo lens 把屠杀地写成"最大犹太会堂"**，与权威（Werd 岛墓地木屋）+ 本 topic 另两 lens 自相冲突——**上线前必改**。
  - **文化对应硬禁自检**：✅ **通过**。中世纪欧洲史**未**误用中国概念词（玉玺/龙袍/翰林/朕/卿/状元等 14 词全无）。中国对照（元末/朱元璋/红巾军）是**显式跨文明对照章节**，非把中国概念投射到欧洲场景，合规。
  - **合成角色透明标注（dark-topic 红线）**：✅ **全部到位**。Agnolo 5 子 / Konrad / Yitzhak / Devorah / Yusuf / Eirene / Tom / Rachel 8 个合成体均有显式标注（kernel 头注 + lens description + narrator 旁白多重冗余）。
  - **日期核查**：2 月 14 日 Strasbourg ✅、Feb 9 罢免 ✅、Kristallnacht 1938/11/9-10 ✅、Wannsee 1942 ✅、Yersinia 1894 ✅、Caffa 1346 ✅、第一波 1347-1351 ✅。**⚠️ narrative 内部日期不一致（非本账本红旗但应修）**：kernel §4 时间线（行 169）+ 附A（行 1890）把 Strasbourg 屠杀写成「1349 1.24」，与全文 + 所有 lens 的「2 月 14 日」**互相矛盾**——1.24 是错的，应统一为 2.14。
- **用到的外部核实来源**：Wikipedia（Agnolo di Tura / Strasbourg massacre / Yersinia pestis / Alexandre Yersin / Kristallnacht / Black Death / Black Death migration）、Britannica（Yersinia pestis / Kitasato / Black Death）、Brown Decameron Web（Siena 死亡数 + Agnolo "to the pit" 译文）、Aish / Haaretz / Jewish Women's Archive（Strasbourg 1349 日期 + Schwarber + 木屋行刑）、OpenStax World History（1331 中国 + Caffa）、2022 Issyk-Kul 古 DNA 报道（中亚起源）、USHMM（Kristallnacht）。
- **总评**：史实骨架**整体稳健**——跨文明数据、关键日期、Yersinia 链、Caffa 化生战、反犹模板时间线、经济后果链均经权威核实通过。**唯一史实硬错是 #9（Agnolo lens 屠杀地"犹太会堂" vs 实为 Werd 岛墓地木屋，且与另两 lens 自冲突）——上线前必改**。**#7（anti-fab framing 进 Agnolo 第一人称）** 是任务点名的高敏感项，需把元叙事移出角色口。其余 5 条为措辞/数字/术语微调。另需修一处 narrative 内部日期矛盾（§4 时间线 1.24 vs 全文 2.14）。**建议先处理 #9 + #7 + 日期矛盾，再进 Gate 2。**
