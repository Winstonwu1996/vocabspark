# Scientific Revolution 1543-1687 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    scientific-revolution
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/scientific-revolution.js（3 lens: newton / mersenne / maria-kirch）+ lib/history-narratives/scientific-revolution.md（Part 1-3）
claim 总数:  28
🚩 红旗数:   7（需创始人审）
补建说明:    本 topic 已上线（过 4-agent review），但从未做过 Fact Ledger，此为补建。
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
| 1 | 「Copernicus《De revolutionibus》1543 出版 + Osiander 匿名『假说』前言 + 现存约 270 本 / 初版印数约 400-500」（narrative §2）| date / number | encyclopedia | Gingerich《The Book Nobody Read》2004；存世本约 270、初版 400-500，均经核实 | ✅verified |
| 2 | 「日心说非 Copernicus 首创：古希腊 Aristarchus 公元前 3c 已提；Copernicus 借 13c Maragha 的 al-Tusi couple（路径学界仍议）」（narrative §2）| causal / absolute | encyclopedia | Aristarchus 日心说 + al-Tusi couple 出现在《De revolutionibus》、传播路径未定论，措辞已自带 hedge | ✅verified |
| 3 | 「1572.11 Tycho 仙后座 nova，亮过金星，约 16-18 个月可见；现代知为 SN 1572（Type Ia，约 8000-10000 光年）；supernova 一词 1934 Baade+Zwicky 造」（narrative §3）| date / number | encyclopedia | SN 1572 确证；可见期约 16 个月；supernova 1934 造词，均核实 | ✅verified |
| 4 | 「Kepler 前两定律 1609《Astronomia Nova》（椭圆 + 等面积）；第三定律 1619《Harmonice Mundi》（T²∝a³）」（narrative §3 / storyboard newton-n7）| date | textbook | Wikipedia/Britannica：1609 法 1&2、1619 法 3，完全一致 | ✅verified |
| 5 | 「望远镜非 Galileo 发明：1608.9 荷兰 Lippershey 申请专利（被拒）；Galileo 1609 听描述自制 3x→8x→20x→30x」（narrative §4）| absolute / number | encyclopedia | Lippershey 1608 专利 + Galileo 逐步改进倍率，确证 | ✅verified |
| 6 | 「1610《Sidereus Nuncius》威尼斯印 550 本几周售罄；木星 4 卫星命名 Medicea Sidera 献 Cosimo II；Galileo 跳槽 Medici 终身俸 1000 scudi（工匠约 50 的 20 倍）」（narrative §4·§6）| number / motive | encyclopedia | Biagioli《Galileo Courtier》1993；印数 550、1000 scudi 薪资、court career move 论点，确证 | ✅verified |
| 7 | 「1616.2 Bellarmine 口头警告：不得 hold/teach 日心说为物理真理，as 数学假说可讨论——非禁令、非火刑威胁」（narrative §6）| quote / causal | textbook | Finocchiaro《Retrying Galileo》2005；1616 非 ban、Bellarmine nuanced 边界，史学共识 | ✅verified |
| 8 | 「1633.6.22 Galileo 被判 vehemently suspected of heresy + 公开 abjuration + 终身软禁；territio verbalis（口头酷刑威胁）见 1633.6.16 内部文件但无物理酷刑、无证据实际执行」（narrative §6）| quote / date | primary | Finocchiaro《The Galileo Affair》1989/2014；abjuration + territio 框定准确，careful framing 到位 | ✅verified |
| 9 | 「『Eppur si muove（它仍在动）』——无同时代史料，1757 Baretti《The Italian Library》首见，大概率后世传说」（narrative §6）| quote | encyclopedia | Wikipedia/Sci.Am.：Viviani 1655 传记 + 庭审记录均无此句，1757 Baretti 首见；narrative 处理**完美**（storyboard 全程未用此句）| ✅verified |
| 10 | 「Newton 1643.1.4（公历）/1642.12.25（旧历）生 Woolsthorpe；父 ploughman 出生前 3 月死；Galileo 同年（旧历）死；Voltaire 火炬传递是 Whig 构造」（newton-n1 / narrative §12.1）| date / causal | encyclopedia | Westfall 1980；历法 careful framing + 反 Whig 处理到位 | ✅verified |
| 11 | 「19 岁笔记本自写罪过『Threatening my father and mother Smith to burne them and the house over them』；Manuel 1968 精神分析因果链现代史家不全接受」（newton-n2 / narrative §12.1）| quote / motive | primary | Newton 自写笔记（无争议一手）+ Manuel 框架已自标 1960s hedge | ✅verified |
| 12 | 「1665-66 anni mirabiles 22-23 岁 4 突破；苹果故事三红旗（Stukeley 1752 来源 / 笔记本无『苹果』词 / 月球加速度差约 10-20% reconstruction-dependent）」（newton-n3 / narrative §12.2）| number / quote | encyclopedia | Westfall 1980 ch.4 + Hall 1962；三红旗 + 10-20% hedge 处理到位，反 Whig 范本 | ✅verified |
| 13 | 「1672.1.11 入 Royal Society；2.6『A New Theory about Light and Colours』；2.15 Hooke『Considerations』反驳；Newton 3 月内 4 封怒信，1673.3『I desire that you will procure that I may be put out』」（newton-n4 / narrative §12.3）| date / quote | primary | Newton-Oldenburg 通信原文，确证 | ✅verified |
| 14 | 「『If I have seen further it is by standing on the shoulders of Giants』1676.2.5 致 Hooke——19c humility reading vs 21c sarcasm reading（Hooke 矮小驼背 + 关系恶化中段）」（narrative §12.3）| quote / motive | encyclopedia | Westfall 中立 / Smith 2002 + Iliffe 2017 偏 sarcasm；narrative 明标「史料模糊、sarcasm 是推测非 explicit」，处理到位 | ✅verified |
| 15 | 「Newton 现存 alchemy 笔记约 1,000,000 字；总手稿约 3,000,000 字内神学约 1,300,000 字（长过《Principia》约 500,000）；1936.7.13-14 Sotheby's 拍，Keynes 拍约半数」（newton-n5 / narrative §12.4）| number / date | encyclopedia | Newton Project / Wikipedia：alchemy 约 100 万字、神学约占一半、1936.7.13-14 Sotheby's，确证；总字数依不同口径（现存约 1000 万字）| ✅verified |
| 16 | 「elixir ← al-iksīr ← Jabir ibn Hayyan（750-815）；笔记 270 处『elixir』」（newton-n5）| number / quote | inference | 词源链可证；「270 处」是具体计数，主流来源未给确切数 → 高风险悬空数字 | 🚩needs-source |
| 17 | 「Keynes 1947『He was not the first of the age of reason. He was the last of the magicians』」（newton-n5）| quote | primary | Keynes《Newton, the Man》1947 遗作演讲，逐字确证 | ✅verified |
| 18 | 「1684.8 Halley-Newton 对话（De Moivre 1727 转述）；Halley 自费印《Principia》因 RS 把经费花在《De Historia Piscium》(鱼书) 卖不掉破产、给 Hooke 发鱼书抵薪；Halley 印资约 £150-180 印约 250-400 本」（newton-n6 / narrative §12.5）| number / causal | encyclopedia | Royal Society 官方 + Cook 1998；鱼书破产 + Halley 自费，确证；£150-180 已自标 Cook hedge 范围 | ✅verified |
| 19 | 「1687.7.5《Principia》出版，拉丁 3 卷约 510 页约 250-400 本；全用几何不用微积分（藏一手，18c 数学家花约 50 年译回微积分）」（newton-n7 / narrative §12.5）| date / number | encyclopedia | 1687.7.5 + 几何证明，确证；印数 250-400 与定价均核实 | ✅verified |
| 20 | 「algebra ← al-Khwarizmi 825《Kitab al-Jabr》→ Newton 1665 fluxions；800 年知识链」（newton-n7 / newton-n12）| causal / date | textbook | 词源 + al-Jabr 825 确证；「800 年链」是叙事框架（825→1665 约 840 年），成立 | ✅verified |
| 21 | 「1696.4 Mint Warden 53 岁 + 1699.12 Master；1697-1700 起诉 28+ 伪币犯全判死刑；Chaloner 1699.3.22 Tyburn 绞死；亲建案约 63 名（Levenson）；薪资 Warden £400 / Master £1500+ / Lucasian £100」（newton-n9 / narrative §12）| number / date | encyclopedia | Levenson 2009 + Craig 1946 + Westfall ch.12；28+ 伪币犯、Chaloner 1699.3.22 Tyburn，确证 | ✅verified |
| 22 | 「Chaloner 案 storyboard cn 说『审问 14 名证人』；narrative en 说为 Chaloner 案凑 14 witnesses」（newton-n9）| number | encyclopedia | 多源记 Newton 为 Chaloner 庭审最终集结约 8 名出庭证人（另进行逾 100 次盘问）。「14」与「8」口径不一，存轻微出入 | ⚠️downgrade-wording |
| 23 | 「1703.3.3 Hooke 死 + 1703.11 Newton 任 RS President（24 年最长）+ 1705.4.16 Queen Anne 封爵；1710 Hooke 唯一 portrait『丢失』（Jardine 2003 无 smoking gun，圈内共识至少默许）；至今无 confirmed Hooke portrait」（newton-n10 / narrative）| date / motive | encyclopedia | Jardine 2003；portrait 消失 + 无确认肖像，hedge 到位 | ✅verified |
| 24 | 「1712-1717 Newton-Leibniz priority 战：1712.3 RS 11 人委员会全 Newton 自选 + Leibniz 未获通知；Newton 亲写约 70%《Commercium Epistolicum》以集体决议名义发布；1715 匿名 review 实为 Newton 亲笔（Smith 2004 / Westfall ch.14 现存手稿）」（newton-n10 / narrative）| number / motive | encyclopedia | Westfall + Smith 2004；暗箱操作有现存手稿，确证；「70%」为学界估计 | ✅verified |
| 25 | 「Mersenne 1588.9.8 Maine Oizé 农民生 + 1611.7 入 Minim Order + 1619 Place Royale cell + 1648.9.1 死（肺脓疡）同年 Westphalia（9.17+10.24）+ Pascal Puy-de-Dôme（9.19）」（mersenne-n1·n2·n3·n9 / narrative §8）| date | encyclopedia | 生卒 + Minim + 1648 三事件同步，确证 | ✅verified |
| 26 | 「Mersenne 通信：de Waard 17 卷约 3000 封信 + 核心圈 60-100 人（Peter Dear 1988 约 60-70 / 他人约 100）；『世界第一个 inbox』」（mersenne-n4 / narrative）| number | encyclopedia | de Waard 编 17 卷；**但**死后 cell 中实存约 600 封信 / 约 79 个直接通信对象（部分来源）；「约 3000 封」为 de Waard 全集汇总（含转录/引证），与「现存约 600」口径不同；60-100 核心圈 hedge 成立 | ⚠️downgrade-wording |
| 27 | 「Mersenne 1636《Harmonie Universelle》声速实验：回声法约 230 toises/秒≈448 m/s，误差约 30%；17c 欧洲首测」（mersenne-n8）| number | encyclopedia | **冲突**：Mersenne 测过两次——炮口闪光法约 448 m/s（误差约 30%）+ 1636《Harmonie》回声法约 316 m/s（误差约 8%）。storyboard 把『448/30%』错配给『1636 回声法』；实为两个不同实验/数值 | ✋flagged |
| 28 | 「Maria Kirch 1702.4.21 凌晨独立发现彗星 C/1702 H1；Gottfried 1702.4.25 致 Leibniz 信『my wife Maria... discovered a comet』；Berlin Academy 1702.5 公告单挂 Gottfried 名」（maria-n5 / lens desc）| date / quote | encyclopedia | C/1702 H1 + Gottfried 信确证；**但**罗马 Bianchini+Maraldi 早约 2 小时观测到（未识别为彗星）→ Maria 是「首个识别为彗星 + 首个女性独立发现」，非绝对「首个发现者」（详见 #29 红旗框）| ⚠️downgrade-wording |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#27]** `mersenne-n8`：「我在 Paris 用回声法……1636 测出声速大约 230 toises/秒……约 448 米/秒……我误差大约 30%。」
   - 问题：**事实冲突（重点 A 数字夸张 + 张冠李戴）**。权威（Wikipedia / Renaissance Mathematicus / Finn 1964）记 Mersenne 测过**两次**：早期用**炮口闪光法**得约 448 m/s（误差约 30%），后在 **1636《Harmonie Universelle》用回声法**得约 **316 m/s（误差仅约 8%）**。storyboard 把「448 m/s + 30% 误差」这组数错配给「1636 回声法」——实际 1636 回声法的数字是更准的 316。两个实验/两个数被合并成一个，且把更差的数挂到了更准的那次实验上。配套的 engagementHook「30% 误差的声速实验对 17c 是建立 framework 不是 calibration」论点会被这处错配削弱（因为他 1636 那次其实已经相当准）。
   - 建议：二选一改写——(a) 若要保留「首测 + framework 不 calibration」叙事，用**炮口闪光法 + 约 448 m/s + 约 30%** 并标这是他**早期/第一次**尝试；或 (b) 用 **1636《Harmonie》回声法 + 约 316 m/s + 约 8%** 并把论点改成「17c 就做到这个精度很惊人」。**不要**把 448 挂到 1636 回声法上。

2. **[#28 + 见 #29]** `maria-n5` / Lens 3 description：「我用 Gottfried 的 4 ft 折射式望远镜……独立发现一颗彗星」+ lens desc「the first recorded independent comet discovery by a woman」+ Part 1 §5「史上第一个有记录独立发现彗星的女性」。
   - 问题：**绝对表述需精修（重点 B 邻类 + 引语分层）**。权威（Wikipedia / Britannica）：罗马的 Francesco Bianchini + Giacomo Filippo Maraldi 在**前一夜**（早约 2 小时）已独立瞥见同一彗星，但**未识别为彗星**。按 primacy rules 官方功劳归他们。所以最精确的表述是：Maria 是**首个把它正确识别为彗星的人**，以及**首个独立发现彗星的女性**——但不是绝对意义的「第一个发现这颗彗星的人」。lens description 用的「first recorded independent comet discovery by a woman」这个限定其实**已经成立**（关键词「by a woman」+「independent」），属可保留；但 maria-n5 正文反复强调「独立发现」而完全不提罗马更早的观测者，会让史实党挑「漏掉 Bianchini/Maraldi」。
   - 建议：在 maria-n5 的末尾 careful framing 三层里补一句：「罗马的 Bianchini 与 Maraldi 前一夜更早瞥见同一天体但未识别为彗星——所以我是首个把它**识别**为彗星的人，也是首个独立发现彗星的**女性**。」既不削弱那一夜的 emotional impact，又堵住「绝对第一」的漏洞。**lens description 那句限定语可不动**。

3. **[#16]** `newton-n5`：「我 1670s 后院炉子边的笔记 270 处『elixir』。」
   - 问题：**悬空精确数字（needs-source）**。「elixir 出现 270 次」是一个非常具体的计数，主流来源（Newton Project / Newman《Newton the Alchemist》）确认 Newton 大量用 elixir 一词、约 100 万字 alchemy 笔记，但**未见对「270 次」这个确切计数的权威出处**。这类伪精确数字正是 SOP「数字无来源」原型。
   - 建议：降级为非计数措辞——如「elixir 这个词在我的笔记里反复出现」/「我的炼金笔记里 elixir 是高频词」。若坚持给数字，需补一条可查来源；否则去掉「270」。低-中优先级。

4. **[#22]** `newton-n9`：cn「审问 14 名证人」/ en「working up 14 witnesses」for Chaloner。
   - 问题：**数字口径出入（重点 A 轻类）**。多源（executedtoday / 钱币史基金会）记 Newton 为 Chaloner 庭审最终集结约 **8 名出庭证人**（另在 1698-99 进行逾 100 次盘问/盘讯 informers）。「14」既不是出庭证人数（8）也不是盘问总数（100+），来源不明。
   - 建议：改为更稳的「为 Chaloner 一案集结约 8 名出庭证人、进行逾 100 次盘问」，或泛化为「审问了大批证人和线人」。低优先级。

5. **[#26]** `mersenne-n4`：「de Waard 17 卷《Correspondance》约 3000 封信，是我现存的通信总量。」
   - 问题：**数字口径需 careful framing（重点 A 轻类）**。de Waard 编的 17 卷确是约 3000 件的汇总，**但**该汇总包含转录、引证、他人来往件；另有来源记 Mersenne **死时 cell 中实存约 600 封信、来自约 79 个通信对象**。文中已对「核心圈 60-100」做了 hedge（很好），但「约 3000 封 = 现存总量」与「实存约 600」两个口径并存易被挑。
   - 建议：微调为「de Waard 17 卷汇编了约 3000 件相关通信（含他本人收发 + 转录引证）；他死时 cell 里实存的信约 600 封」。把「汇编总量」与「实存量」分开。低优先级。

6. **[Maria Council quote ✋ 核心红旗]** `maria-n7` / `newton-n10` / `mersenne-n10` / Lens 3 desc：1711.1.18 Berlin Academy Council 否决德文 minutes 原文「**Es würde unserer Akademie wenig Ehre bringen, wenn ein Frauenzimmer als Astronom angestellt würde.**」（被多处当 archive 级直引使用）。
   - 问题：**引语真实性存疑（重点 C 最高危）**。这句被 storyboard 三个 lens 反复当作「Berlin-Brandenburg Academy archives 德文原文」直引。但权威核对（Wikipedia / Encyclopedia.com / Schiebinger 引文链）surface 出来的是**不同措辞**：①秘书 Jablonski 警告「若留用她……mouths would gape even wider（旁人会更瞠目）」；②Academy 拒绝理由记为「what we concede to her could serve as an example in the future（开先例）」。**没有**独立来源印证「Es würde unserer Akademie wenig Ehre bringen…Frauenzimmer…」这句一字不差的德文出自 1711.1.18 Council minutes。这句很可能是**对史料大意的德文重构/转写**，而非可逐字引证的 archive 原文。把重构句排成「archive 原文直引」是引语分层失败的典型。
   - 建议：**优先处理**。两条路：(a) 若能在 Schiebinger 1989（pp. 95-97）原文中查到这句逐字德文，补确切页码/出处即可保留；(b) 若查不到逐字出处，**降级措辞**——改为「Council 大意是『让一个 Frauenzimmer 当 astronomer 会有损 Academy 体面』」并明标为转述，或改用有据可查的「they feared it could set a precedent / mouths would gape even wider」。Frauenzimmer 的 inline gloss（17-18c 德语 semantic loading）很好可保留，但**承载它的那句德文必须确认是直引还是转述**。这是本 topic 唯一的 ✋flagged 级引语风险。

7. **[Leibniz 支持信 quote]** `maria-n7`：Leibniz 1710.10.18 致 Council 信原文「**Frau Kirch is one of the most learned astronomers now living. She has performed services to the Academy that no man in our employ could have done better...**」（当 archive 直引）。
   - 问题：**引语需核对（重点 C）**。Leibniz 确实强力支持 Maria（这点 Wikipedia/Britannica 一致确证，无争议），但这段英文「直引」的逐字出处需对 Schiebinger 1989 p.95 核实——它很可能是 Schiebinger 的英译/概述而非 Leibniz 原始拉丁/法文逐字。论点（Leibniz 力挺）是 verified 的，风险仅在「逐字引语」这一层。
   - 建议：低-中优先级。保留论点；若 Schiebinger p.95 确有此英译则补出处即可，否则把引号改为「Leibniz 写信说她是当世最博学的天文学家之一，Academy 雇的任何男人都做不到更好」（转述体）。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| （本 topic 三主角均为真实历史人物，无合成主角）| — | — | — |
| newton / mersenne / maria-kirch | 三 lens | 三人均**真实历史人物**，第一人称叙事中的**内心戏/语气**为合理 inference，全部挂在已证事实骨架上；生卒、职业、关键事件均 documented | ✅ 无虚构骨架，inference 合理 |
| maria-n12 closing 提到的 4 个 fictional composite（Anna the Iconographer / Anacaona Jr / Aisha 1413 / Sister Agnes）| maria-kirch n12 | 这 4 人是**其他 Topic** 的虚构合成角色，本 topic 仅作跨文明对照列举，**已在文中明标 4 真 + 4 虚（fictional composite）** | ✅ 已透明标注（本 topic 不含其叙事，仅列名 + 注明虚构）| 

> 本 topic 第一人称视角（newton / mersenne / maria-kirch）均为真实人物视角叙事，未虚构其生平骨架。出场配角（Galileo / Copernicus / Kepler / Brahe / Halley / Hooke / Leibniz / Descartes / Pascal / Torricelli / Boyle / Hevelius / Elisabetha Hevelius / Gottfried Kirch / Christoph Arnold / Bellarmine / Urban VIII / Voltaire / Keynes / Maria Celeste）全部真实历史人物。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `newton`（claim #4,10-24，含 N3 苹果 / N5 alchemy / N9 Mint / N10 Leibniz 重点节点）/ `mersenne`（#7-8,25-27，含 N4 通信网 / N5 走私 / N8 声速重点节点）/ `maria-kirch`（#28 + 红旗 #2/#6/#7，含 N5 彗星 / N7 拒席 archive quote 重点节点）。Narrative Part 1-3（§1-§12）全段覆盖。
- **重点核查结论**：
  - **重点 A（数字夸张）**：主红旗 #27 声速 448/30% 张冠李戴（✋实为两实验混淆）；轻类 #16 elixir「270 处」悬空、#22 Chaloner「14 证人」口径不符、#26 通信「3000 vs 600」口径并存。
  - **重点 B（代表性/绝对表述）**：#28 Maria「独立发现彗星」需补「罗马 Bianchini/Maraldi 早 2 小时观测但未识别」——她是**首个识别为彗星 + 首个女性独立发现**，lens desc 限定语已成立，仅 maria-n5 正文需补一句。
  - **重点 C（引语分层）**：**最关键** #6 红旗——1711 Berlin Council 德文 minutes「…Frauenzimmer…wenig Ehre…」被三 lens 当 archive 直引，但权威 surface 出的是不同措辞（Jablonski「mouths would gape even wider」/「set a precedent」），疑为史料大意的德文重构 → ✋需确认逐字出处或降级为转述。#7 Leibniz 支持信英文直引同理（论点 verified，逐字层需核 Schiebinger p.95）。**「Eppur si muove」处理堪称范本**（narrative 明标 1757 Baretti 后世传说、storyboard 全程未用），无风险。
- **文化对应硬禁自检**：✅ **通过**。grep 扫描欧洲史正文未发现误用中国概念词（天命/天子/科举/士大夫/江湖/气节/儒/侠 等）。出现的 Su Shi / Li Qingzhao /《金石录》/ 黄州《赤壁赋》均为**显式跨 Topic 对照**（Tang-Song lens），非把中国概念套用到欧洲；四元素「土水气火」是西方古典 elements 标准译法（air，非中国 qi），不算误植。
- **用到的外部核实来源**：Wikipedia（Maria Margaretha Kirch / C/1702 H1 / Prodromus Astronomiae / And yet it moves / Kepler's laws / Astronomia Nova / Harmonice Mundi / Harmonie universelle / Mersenne's laws / Philosophiæ Naturalis Principia Mathematica / Isaac Newton's occult studies / William Chaloner）、Britannica（Maria Kirch / Edmond Halley / Johannes Hevelius）、Encyclopedia.com（Kirch 1670-1720）、Scientific American（eppur si muove detective story）、Royal Society（fishy blunder / History of Fishes）、Newton Project Oxford（Sotheby 1936）、Renaissance Mathematicus（Mersenne 声速两次实验）、Finn 1964（Laplace and the Speed of Sound）、Levenson《Newton and the Counterfeiter》二手核对、Schiebinger《The Mind Has No Sex?》1989（经 storyboard 引、需创始人就 #6/#7 逐字页码二次核）。
- **总评**：史实骨架**整体稳健且 careful framing 密度极高**——苹果故事三红旗、Newton 历法、Galileo 1633 territio/abjuration、eppur si muove 后世传说、Bellarmine 1616 非禁令、巨人肩上 sarcasm hedge、Kepler 定律日期、Halley 鱼书自费、Newton alchemy/Arian 字数、Mint 28 绞架、Hevelius/Elisabetha Prodromus，均经权威核实通过，反 Whig 处理是同批 topic 中的标杆。7 条红旗中**仅 #27（声速张冠李戴 ✋）与 #6（Berlin Council 德文引语真实性 ✋/⚠️）属应优先处理项**——前者是事实错配、后者是 archive 级引语未坐实；其余 5 条（#16 elixir 270 / #22 Chaloner 14 / #26 通信 3000 / #28 Maria 绝对第一 / #7 Leibniz 引语）为低-中优先级的数字口径或引语降级。**可维持上线，但建议补做：①修正 #27 声速；②核实或降级 #6 的 1711 德文 Council 引语（本 topic 唯一硬性引语风险）；③maria-n5 补一句 Bianchini/Maraldi。**
