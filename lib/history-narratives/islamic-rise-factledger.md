# 伊斯兰文明兴起 622-1258 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    islamic-rise
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/islamic-rise.js（3 lens: al-mamun / al-khwarizmi / fatima-al-fihri）+ lib/history-narratives/islamic-rise.md
claim 总数:  27
🚩 红旗数:   7（需创始人审）
补建说明:    本 topic 已上线（过 4-agent review）但从未做 Fact Ledger，本次为补建。
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

> **本 topic 特别提示（宗教史敏感）**：伊斯兰信仰中立尊重原则下，对古兰经/圣训引语必须分层 —— 真经文 vs 后世 Sirah/传说 vs 史家概括，三者不可混排。本次核查发现 1 条最严重红旗即「把后世传说误标为古兰经原文」。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「Muhammad 570 生 / 632 死 / 622 Hijra 迁 Medina / 610 第一次启示」（narrative §1·§2·§3.1）| date | encyclopedia | Britannica/Encyclopedia.com 一致：c.570-632，Hijra 622，610 首启示。权威共识 | ✅verified |
| 2 | 「622.7.16 = AH 1 Muharram 1 为历法元年，Muhammad 实际 9 月初离 Mecca、9.24 抵 Medina」（narrative §1 date footnote）| date | encyclopedia | 该 footnote 主动区分「历法元年锚点」vs「Hijra 实际起程」，处理优秀，符合史实（AH1 起算日 vs 实际迁徙 Rabi' I）| ✅verified |
| 3 | 「Thawr 山洞躲 3 天，《Quran》第 9 章 40 节记载『洞口蜘蛛织网，鸽子筑巢』」（narrative §1）| **quote** | **dramatization** | **古兰经 9:40 无此内容**（仅记「勿忧，真主与我们同在」）。蜘蛛/鸽子是后世 Sirah/popular lore，且被 Ibn Uthaymeen / al-Albani / Ibn Taymiyyah 判为不实传说。**把传说误标成古兰经原文 = 宗教史最严重错** | ✋flagged |
| 4 | 「Kaaba 供 360 个偶像 / 630 年率 1 万人不流血收复 Mecca 砸偶像」（narrative §1·§2·§3.1）| number | encyclopedia | 360 偶像、630 收复 Mecca、约 1 万人为伊斯兰传统标准记述，权威普遍采用 | ✅verified |
| 5 | 「Muhammad 不写成『完美先知』也不写成『政治投机者』—— 7 世纪商人+调解人+宗教改革家」（narrative §1 不浪漫化也不贬低）| rhetoric / motive | textbook | **宗教中立处理优秀**：明确双向去框（伊斯兰内部 vs 19c Orientalist），符合 §宗教史中立尊重红线 | ✅verified |
| 6 | 「624 Badr 战 Muhammad 313 人击败 Mecca 1000 人」（narrative §2·§3.1）| number | encyclopedia | 313 vs ~1000 为传统标准数字，权威一致 | ✅verified |
| 7 | 「al-Mamun 786 生 / 813 即位 27 岁 / 833.8 死 47 岁 / 813.9.25 Baghdad 陷 al-Amin 死」（mamun-n1·n3·n9 / §3.6）| date | encyclopedia | 786-833、813 内战胜出即位、813.9 Baghdad 陷，权威一致 | ✅verified |
| 8 | 「al-Mamun 827 派 al-Khwarizmi + Habash al-Hasib 测地球周长，1 度=56.6 阿拉伯英里 → 40,250 km，现代 40,075 km，误差 0.4%」（mamun-n7 / kw-n7 / §附）| number | encyclopedia | 测量真实、精度极高确证。**但数字有学界变体**：主流文献多记 56⅔ 英里/度（≈111.8 km/度）、得周长≈40,007 km；另有 Tadmur-Raqqa 一组记 66⅔。「56.6 / 40,250 / 0.4%」落在可证区间但属某一口径，非唯一权威值 | ⚠️downgrade-wording |
| 9 | 「830 年代测地球周长，得值与今值误差 5% 以内」（narrative §3.6 line 449/851）| number | encyclopedia | **与 #8 内部冲突**：同一事件 storyboard 说 0.4%，narrative §3.6 说「5% 以内」。两处口径不一致（5% 偏保守且与 §附 A 的 0.4% 打架）| ✋flagged |
| 10 | 「al-Khwarizmi《Kitab al-Jabr》825 年写成，是世界数学史上第一部独立代数著作」（mamun-n6 / kw-n5 / §3.7 / §4）| absolute | encyclopedia | 「first book that handles algebra as a discipline」是主流表述（Wikipedia/Britannica）。「第一部独立代数著作」措辞成立。年份 c.820-825 学界有 820/825 两说，825 可接受 | ✅verified |
| 11 | 「al-jabr → algebra 字源；al-Khwarizmi 名字拉丁化 Algoritmi → algorithm 字源；1145 Robert of Chester 在 Segovia 拉丁译《Liber Algebrae》」（kw-n5·n6 / 多处）| quote / date | encyclopedia | 字源链 + 1145 Robert of Chester (Segovia) 拉丁译，全部确证 | ✅verified |
| 12 | 「al-Khwarizmi 不是孤独天才，是 Bait al-Hikma 制度产物 / 印度数字早经商队入波斯、他是系统化者非首发」（mamun-n6 / kw-n11）| representativeness | encyclopedia | **anti-lone-genius 处理优秀**。注：2026 学界有「al-Khwarizmi 并未发明 algorithm」批评帖，storyboard 已自我对冲（systematizer 非 originator），稳健 | ✅verified |
| 13 | 「按译稿等重黄金付酬是 19c Orientalist 浪漫化，Gutas 1998 否定，实为制度化高薪」（mamun-n5 / kw-n2 / anti-fab）| causal | encyclopedia | 主动反 Orientalist 神话、引 Gutas 1998，source-criticism 训练到位 | ✅verified |
| 14 | 「833 Mihna 异端审讯起，强制签『Quran 受造』，Ahmad ibn Hanbal 拒签被鞭打」（mamun-n8 / kw-n9 / §3.6）| date / quote | encyclopedia | Mihna 833 起、Ibn Hanbal 拒签受刑确证（Britannica/Wikipedia）。「Quran is created」教义争点准确 | ✅verified |
| 15 | 「Mihna 持续 14 年（833-847），847 al-Mutawakkil 废止」（mamun-n8·n9 / kw-n10）| date | encyclopedia | **学界结束年有 847/848/851/861 多说**（al-Mutawakkil 即位 847、正式反转/宣 Mu'tazilite 异端有记 848/851，部分记 861）。storyboard 取 847（kw-n10 又记 848 废 Mihna + 851 宣异端）—— 内部已略有出入，且与权威多值并存 | ⚠️downgrade-wording |
| 16 | 「narrative §3.6：Mu'tazilite 立场 839 年后被废止」（§3.6 line 450/852）| date | ✋ | **与 storyboard 严重冲突**：storyboard 全程记 847-851 废 Mihna/Mu'tazilite，narrative §3.6 却写「839 年后被废止」。839 无主流来源支持（al-Mamun 833 死、al-Mu'tasim/al-Wathiq 续推至 847+），疑为笔误 | ✋flagged |
| 17 | 「al-Mamun 用国家强制推理性主义 → 反弹使 Mu'tazilite 衰、Sunni 转保守、21c 主流 Sunni 神学承 Ibn Hanbal 系」（mamun-n9·n12）| causal | textbook | backfire 因果是学界主流解释（Hodgson/El-Hibri），合理史学诠释 | ✅verified |
| 18 | 「al-Khwarizmi 约 780 Khwarezm 生（学界争议：al-Tabari 称 al-Qutrubbulli 或 Baghdad 生）/ 850 死」（kw-n1 / §3.7）| date | encyclopedia | 出生地 contested 已透明标注（Khwarezm vs Baghdad，al-Tabari 说），处理优秀 | ✅verified |
| 19 | 「Fatima al-Fihri 859 用父亲遗产建 al-Qarawiyyin；UNESCO/Guinness 认定世界最古老连续运营（学位授予）大学」（fatima-n4·n12 / §3.8 / 多处）| absolute | encyclopedia | UNESCO + Guinness 确认「oldest existing & continually operating degree-granting institution」。**absolute「最古」有官方背书，措辞成立**。建校年 857/859 两说，859 主流 | ✅verified |
| 20 | 「比 Bologna(1088) 早 229 年 / Oxford(~1096) 早 237 年 / Harvard(1636) 早 777 年」（fatima-n12 / §3.8）| number | encyclopedia | 859→1088=229、→1096=237、→1636=777，算术确证；Bologna/Oxford/Harvard 建年权威一致 | ✅verified |
| 21 | 「Fatima 约 800 生 / 约 880 死；母名、是否结婚、有无子女史书几乎无记；主史料 Ibn Abi Zar 14c《Rawd al-Qirtas》距建校 460 年」（fatima-n1·n8·n10 / historicalNote）| date | inference | **史料缺口主动透明披露**（出生年「约 800」是建校倒推、Ibn Abi Zar 半史半传说），careful framing 模范级 | ✅verified |
| 22 | 「斋戒整个建造期」（fatima-n5）| quote | dramatization | 文中已自标「据传…来自 Ibn Abi Zar，可信度不高，但流传很广」+ 给「真实日常更可能是…」对照。透明降级到位 | ✅verified |
| 23 | 「Pope Sylvester II（Gerbert of Aurillac, 999-1003）在 al-Qarawiyyin 学阿拉伯数学/数字」（fatima-n7·n12 / §3.8 / historicalNote）| causal / absolute | inference | **存疑**：有据记载 Gerbert 求学在 Catalonia/Barcelona/Vic + 经 Cordoba/Andalusia 手稿，**非** al-Qarawiyyin。al-Qarawiyyin 说仅靠晚出二手（William of Malmesbury 记「从一 Moorish 学者得 abacus」），storyboard 当确定事实陈述 | ✋flagged |
| 24 | 「Maimonides 12c 逃 Almohad 在 Fez 出入 al-Qarawiyyin / Ibn Khaldun 14c 早年在此受教育」（fatima-n7 / §3.8）| causal | encyclopedia | Maimonides 居 Fez+与 al-Qarawiyyin 关联有来源支持（文中「出入/frequented」措辞稳）。Ibn Khaldun 主流记「thought to have studied」——文中「受过基础教育」略实，建议软化 | ⚠️downgrade-wording |
| 25 | 「al-Qarawiyyin 1985 才正式收女学生（建校 1126 年后）/ 2014 摩洛哥 200 dirham 第一张女性纸币」（fatima-n9 / §3.8 / historicalNote）| date / number | encyclopedia | 1985 现代化收女、2014 dirham 纪念，**careful framing 不浪漫化**（明示「机构活 1100 年 ≠ 一直平等」）。模范处理 | ✅verified |
| 26 | 「完工大殿可容纳 22000 人礼拜」（fatima-n5·n10）| number | inference | 22,000 容量是常见流传数（含后世扩建后规模），9c 初建即此容量存疑；属机构现状/累积数而非 859 单点。低风险但宜标「（后世扩建后）」| ✅verified |
| 27 | 「Surah al-Fatiha 每天礼拜诵 5 次，是穆斯林生活最常诵文本」（narrative §5.1 EN）| number / quote | primary | 五番礼拜诵 al-Fatiha 为伊斯兰常识，准确。古兰经引语 §5 采「阿拉伯原文→音译→中译→7 年级英译→背景」分层，**真经文分层处理优秀**（与 #3 传说误标形成对比）| ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。按严重度排序。

1. **[#3]** narrative §1：「中途在 Thawr 山洞躲 3 天（《Quran》第 9 章 40 节记载：『洞口蜘蛛织网，鸽子筑巢』）。」EN 同：「the Quran, chapter 9, verse 40, mentions: 'a spider wove its web at the entrance, and a dove built a nest'」
   - 问题：**宗教史最严重错（重点）**。古兰经 9:40 **没有**蜘蛛/鸽子内容（原文仅「勿忧，真主与我们同在，真主降安宁、以你们看不见的天兵相助」）。蜘蛛织网/鸽筑巢是**后世 Sirah / popular lore**，且被多位权威学者（Ibn Uthaymeen、al-Albani、Ibn Taymiyyah）明判为**不实传说（无 sahih 圣训支撑）**。把它标成「古兰经第 9 章 40 节记载」= 既错引经文出处，又把不实传说升格为经典原文——对穆斯林读者是直接的信仰冒犯，史实党也会立刻挑出。
   - 建议：**两步处理**。(1) 删掉「《Quran》第 9 章 40 节记载」的归属——9:40 真实内容是「真主与我们同在」可保留并正确标注；(2) 蜘蛛/鸽子若保留，必须显式降级为「后世传说（later Sirah literature，并非古兰经经文，且现代学者多判为不实）」。**这条强烈建议上线前必改。**

2. **[#16]** narrative §3.6（line 450/852）：「（Mu'tazilite 立场）839 年后被废止。」
   - 问题：**硬日期错 + 内部冲突**。同一 topic 的 storyboard 三 lens 全程记 Mihna/Mu'tazilite 在 **847-851** 间被 al-Mutawakkil 反转（kw-n10 明记 848 废 Mihna、851 宣 Mu'tazilite 异端）。narrative §3.6 的「839」既无主流来源（al-Mamun 833 死后由 al-Mu'tasim、al-Wathiq 续推 Mihna 到 847+），又跟自家 storyboard 直接打架。疑为笔误（839 可能与他处年份混淆）。
   - 建议：改「839」为「847-851 年间被 al-Mutawakkil 废止」，与 storyboard 对齐。

3. **[#9]** narrative §3.6（line 449/851）：「830 年代组织队测量地球周长，得出值与今值误差 5% 以内。」
   - 问题：**同一事件两处口径冲突**。storyboard（mamun-n7 / kw-n7）+ §附 A 均记**误差 0.4%**（40,250 vs 40,075），而 §3.6 记「5% 以内」。「5% 以内」虽不算错（0.4% 确实在 5% 内），但同 topic 内一处说 0.4%、一处说 5%，会让审稿者困惑，也低估了实际惊人精度。
   - 建议：§3.6 统一为「误差约 0.4%」或「与今值高度接近（约 0.4%）」，与 storyboard 对齐。

4. **[#23]** fatima-n7 / fatima-n12 / §3.8 / historicalNote：「Gerbert of Aurillac（Pope Sylvester II，999-1003）在 al-Qarawiyyin 学阿拉伯数学/数字。」
   - 问题：**史料归属存疑（重点 C·引申）**。有据记载 Gerbert 的阿拉伯数学训练在 **Catalonia（Barcelona / Vic 修道院）+ 经 Cordoba/Andalusia 手稿**，**没有同代一手证据**证明他亲到 al-Qarawiyyin/Fez 求学。「al-Qarawiyyin 说」仅靠 12c 晚出二手（William of Malmesbury 记他「从一 Moorish 学者得 abacus 概念」），属流行附会。storyboard 把它当确定事实多次陈述（连 historicalNote 都列为「真实历史关联」）。Maimonides/Ibn Khaldun 关联较实，**唯独 Gerbert 这条是该 lens 最弱的一环**。
   - 建议：把「在 al-Qarawiyyin 学」降级为「在安达卢西亚（Cordoba 一带）接触阿拉伯数学——有传说称他曾在 al-Qarawiyyin 学习，但缺同代证据」，或直接去掉 al-Qarawiyyin 归属、保留「把阿拉伯数字带回欧洲」这一已证事实。

5. **[#8]** mamun-n7 / kw-n7 / §附：「1 度 = 56.6 阿拉伯英里 → 地球周长 40,250 km，误差 0.4%。」
   - 问题：**数字属单一口径（重点 A 轻类）**。测量真实、精度确证，但「56.6 / 40,250」是某一史料口径；主流另有 56⅔ 英里/度（→≈40,007 km）、及 Tadmur-Raqqa 一组 66⅔ 的不同记载（差异源于 cubit 定义不一）。把单一数值排成唯一确值略硬。
   - 建议：可接受，更稳写法加一句对冲，如「（不同史料记 56-57 阿拉伯英里/度，换算约 40,000-40,250 km）」。低优先级。

6. **[#15]** mamun-n8·n9 / kw-n10：「Mihna 14 年（833-847），847/848 废，851 宣 Mu'tazilite 异端。」
   - 问题：**结束年学界多值 + 内部小出入**。权威结束年有 847/848/851/861 多说（al-Mutawakkil 847 即位、正式反转有记 848/851、彻底转向部分记 861）。storyboard 内 mamun 段说「14 年至 847」、kw-n10 说「848 废 + 851 宣异端」，两处略不齐。
   - 建议：统一表述为「847 al-Mutawakkil 即位后反转（848 起废 Mihna、851 宣 Mu'tazilite 为异端）」即可消歧。低优先级（不算硬错）。

7. **[#24]** fatima-n7 / §3.8：「Ibn Khaldun 14 世纪早年在 al-Qarawiyyin 受教育。」
   - 问题：**措辞略实**。主流来源记 Ibn Khaldun「is thought to have studied」at al-Qarawiyyin（跟随其师 Abili 到 Fez），属较可信但非铁证。文中「受过基础教育」陈述偏确定。
   - 建议：软化为「据信曾在 al-Qarawiyyin 求学」。极低优先级（Maimonides 同段较实，无须改）。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| （无纯合成虚构角色）| —— | 本 topic 三 lens 主角 **al-Mamun / al-Khwarizmi / Fatima al-Fihri 均为真实历史人物**，非虚构合成 | n/a |
| Fatima al-Fihri（真实但史料稀薄）| `fatima-al-fihri`（全 12 节）| **非合成**，但个人生平大量为 inference：出生年「约 800」建校倒推、母名/婚否/子女史无记、内心戏与日常为合理 inference 挂在已证「建校」事实上 | ✅ **已透明标注**：historicalNote 明示「真实人物，区别于 AoE Anacaona Jr / Reformation Sister Agnes / Mali Aisha-1413 等虚构合成 receiving-end 角色」；fatima-n8 整节专讲史料缺口；fatima-n5「斋戒」传说自标 Ibn Abi Zar 可信度低。**careful framing 模范级** |

> al-Mamun / al-Khwarizmi 两 lens 为第一人称视角叙事，内心戏属合理 inference（挂在已证事实上），未虚构其生平骨架。其余出场人物（Harun al-Rashid / Hunayn ibn Ishaq / Ahmad ibn Hanbal / al-Mutawakkil / Mariam / Gerbert / Maimonides / Ibn Khaldun 等）均为真实历史人物。

---

## 文化对应硬禁自检

> 检查是否把伊斯兰史人物/事件「等价」成其他文明的对应物（如「伊斯兰的 X = 中国的 Y」式硬套）。

- **结论：无硬禁违规。** 全 topic 的 21c cross-cultural anchor 用的是 **结构类比（structural parallel）** 而非「等价宣称」，且措辞一律带对冲（「有可比性 / comparable / parallels / 平行案例」）：
  - al-Khwarizmi ↔ 玄奘 / 利玛窦：标为「翻译者也是创作者」**同构**，非「= 中国的 al-Khwarizmi」。
  - al-Mamun 知识赞助 ↔ 唐玄奘取经 / 宋校勘 /《永乐大典》：明确写「能看到平行案例，但翻译运动的跨文明吸纳广度独树一帜」——主动声明差异。
  - al-Mamun 「knowledge + 强制信仰 sibling」↔ 21c 中国 / 冷战美国 / Stalin 苏联 / 沙特 KAUST：是**机制类比**（同一国家机器双能力），非价值等同，且四例并列避免单点影射。
  - Fatima al-Qarawiyyin 连续性 ↔ 北宋书院 / 欧洲中世纪大学：写「多次停办/中断」**对比**，反衬而非等价。
- **宗教中立性自检：通过。** Muhammad 双向去框（不写完美先知、不写政治投机者）；Sunni/Shia 分裂处理为「7c 政治分歧→8-9c 神学化→16c Safavid 地缘化」分层（引 Madelung 1997），不站队；古兰经引语 §5 用「原文→音译→中译→英译→背景」分层（**真经文处理优秀**）。唯一缺口是 **#3 把不实传说误标为古兰经原文**（已进红旗 1）。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `al-mamun`（claim #1·#7-8·#10·#13-17）/ `al-khwarizmi`（#10-13·#15·#18）/ `fatima-al-fihri`（#19-26）；narrative kernel §1·§2·§3·§5 另覆盖 #1-6·#9·#16·#27。
- **重点核查结论**：
  - **宗教史敏感（最高优先）**：最严重红旗 **#3**「蜘蛛/鸽子误标为古兰经 9:40」——传说升格为经文，建议上线前必改。其余宗教内容（Muhammad 去框、Sunni/Shia 分层、§5 真经文分层、Mihna 教义争点）处理稳健甚至优秀。
  - **引语分层（重点 C）**：真史料（古兰经 §5 / al-Jabr 字源 #11 / Mihna 教义 #14）与传说/二手（蜘蛛 #3 ✋ / Fatima 斋戒 #22 已降级 / Gerbert al-Qarawiyyin #23 ✋）需分清；除 #3、#23 外均处理到位。
  - **绝对表述（重点）**：核心 absolute「al-Qarawiyyin 最古连续运营大学」#19 有 UNESCO+Guinness 官方背书，成立；「第一部独立代数著作」#10 主流支持，成立。两条 absolute 均**经得起查**。
  - **合成/真实角色**：本 topic **无纯虚构合成角色**（区别于 AoE/Reformation/Mali）；唯一需谨慎的 Fatima «真实但史料稀薄» 已由 fatima-n8 整节 + historicalNote 模范级透明披露。
  - **内部一致性**：发现 2 处 storyboard↔narrative 数据冲突 —— #9（地球误差 0.4% vs 5%）、#16（Mihna 废止 847-851 vs 839），均进红旗（narrative §3.6 侧需对齐 storyboard）。
- **用到的外部核实来源**：Wikipedia（al-Ma'mun / al-Khwarizmi / Al-Jabr / Mihna / Quranic createdness / University of al-Qarawiyyin / Pope Sylvester II / Maimonides / Ibn Khaldun / Five Pillars / Earth's circumference / Geography & cartography in medieval Islamic world）、Britannica（Mihnah）、Guinness World Records（via Fox News 转引）、UNESCO（al-Qarawiyyin 建校年）、corpus.quran.com（Quran 9:40 原文）、Ibn Uthaymeen/al-Albani/Ibn Taymiyyah 学者裁定（蜘蛛传说不实，via Salafi/Path-of-the-Righteous 转引）、MacTutor（Gerbert）、Encyclopedia.com（al-Mamun / Muhammad）、Quran corpus（9:40）。
- **总评**：史实骨架**总体稳健** —— 日期链（Muhammad 570-632、al-Mamun 813-833、al-Khwarizmi c.780-850、Fatima 859 建校）、字源链（algebra/algorithm）、al-Qarawiyyin 最古大学（UNESCO+Guinness 背书）、地球周长测量精度、Mihna 主线均经权威核实。**careful framing（Fatima 史料缺口、anti-Orientalist、anti-lone-genius、宗教双向去框）属本 topic 突出亮点**。但有 1 条**宗教史硬红旗 #3（蜘蛛传说误标古兰经）必须上线前改**，外加 2 条 storyboard↔narrative 内部数据冲突（#9 / #16）应对齐，1 条二手归属存疑（#23 Gerbert at al-Qarawiyyin）建议软化。**已上线 topic：建议立刻热修 #3，并在下次内容窗口处理 #16 / #9 / #23。**
