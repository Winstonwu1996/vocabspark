# 蒙古帝国 1206-1368 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    mongol-empire
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/mongol-empire.js（3 lens: genghis-khan / yelu-chucai / sorghaghtani）+ lib/history-narratives/mongol-empire.md
claim 总数:  30
🚩 红旗数:   7（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

> **文化对应硬自检（本 topic 专项）**：蒙古 / 契丹 / 克烈各有自己语境。Yelü Chucai 是 **契丹-中原双语 broker**，文中**已钉死「不是 Han 代言人」**——核查重点是「用相关中文典故（楚材晋用 / 陆贾马上治天下）是否张冠李戴」。结论：所用典故均为耶律楚材本人真实生平 + 真实汉籍引用，无文化误植。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「1206 年春斡难河（Onon）源头 Kurultai 称 Chinggis Khan，41 岁（一说 44）」（`gk-n5` / kernel §1·§2）| date | encyclopedia | Wikipedia/学界：1206 Onon 源头 kurultai 确证；称汗确证；生年学界争议（1155/1162/1167，1162 最被接受）「41 岁」依 1162 算成立，文中已标「一说 44」对冲 | ✅verified |
| 2 | 「Chinggis 词源学界争议——海洋 tengis / 强壮 chin / 突厥借词」（`gk-n5` / kernel §1）| absolute / quote | encyclopedia | 三说并存，Wikipedia 列同样三派，文中如实标「争议」 | ✅verified |
| 3 | 「1171 父也速该被 Tatar 毒死，9 岁；寡母带子吃野菜根」（`gk-n2` / kernel §2）| date / number | encyclopedia | 约 1171 也速该被塔塔尔人毒杀、家族被弃、靠野菜根/marmot 求生，《蒙古秘史》记载，学界共识 | ✅verified |
| 4 | 「1206 同日 4 件事：Yasa / tumen / sülde 九纛 / 禁血亲复仇」（`gk-n5` / kernel §1）| number | encyclopedia | Yasa、十进制 tumen 军制、九旒白纛、停止内部仇杀均确证；「同一天/同一周」是叙事压缩（kernel 自标「同一周内」更稳） | ✅verified |
| 5 | 「Yasa 宗教 toleration——所有神职人员免税；13c 初欧洲/伊斯兰世界/宋朝都没有」（`gk-n5` / `gk-n10` / kernel §0.5·§1）| absolute | encyclopedia | 蒙古「所有宗教神职免税」确证（佛/道/景教/伊斯兰至元末）。**但**「13c 世界独有」是强绝对——同期也有局部宽容案例（如西西里 Frederick II）。学界普遍认同蒙古制度化宗教宽容罕见，但「独有/前所未有」措辞偏强 | ⚠️downgrade-wording |
| 6 | 「1215.5 攻陷金中都（今北京），死 30-60 万（《元史》1370 记 60 万 / 现代学者 30 万）」（`gk-n6` / `yc-n3` / kernel §2）| number / date | encyclopedia | 中都 1215.6 陷落、屠掠焚城确证。**但**主流英文权威只记「thousands massacred」，未给 30-60 万；「60 万」是后世（含丘处机/Daoist 见骸骨传闻 + 元史）流传数字，30-60 万区间**难以独立坐实**。文中已 careful framing 标「元史明初官修可能夸大」，但区间下限仍缺权威背书 | ⚠️downgrade-wording |
| 7 | 「1218 Otrar 杀 450 人商队 + Shah 烧使节胡须=宣战」（`gk-n7` / `gk-n10` / kernel §4）| date / number / causal | encyclopedia | 450 商队、Inalchuq 指间谍、全杀一逃确证。**但**「烧胡须」是次团遭遇的一种传统；主流记载是 Shah **斩杀正使送回头颅**。两说并存，文中取「烧胡须」是 minor variant，非硬错 | ✅verified |
| 8 | 「1219-1221 西征屠 Bukhara 3 万守军（Juvayni 1252 / Jackson 2017 区间 1-3 万）」（`gk-n7` / `yc-n5`）| number | encyclopedia | Bukhara 1220.2 处决 3 万余战斗人员确证；文中给出现代区间 + 学者署名，处理良好 | ✅verified |
| 9 | 「Bukhara 城破入清真寺把可兰经撕扔马厩」（`gk-n7`）| rhetoric / motive | encyclopedia | Genghis 入 Friday mosque 训话「我是神之惩罚」确证；「撕可兰经扔马厩/把经匣作马槽」是 Juvayni 传统记载之一，常见转述，成立但属史料层戏剧细节 | ✅verified |
| 10 | 「1221 Urgench 每兵分 24 俘处决→50-120 万死；Merv 70-130 万（蒙古秘史 + Juvayni 1252）」（`gk-n7` / `yc-n5` / kernel §0.5·§3）| number | dramatization | **重点红旗**。Juvayni 数字（Urgench 1.2M / Merv 1.3M / Nishapur 1.74M）现代学界判定「demographically impossible」，下修至万-十几万级。文中把 50-120 万 / 70-130 万作为「估算区间」呈现（虽署来源 + careful framing），但这些是**被学界否定的一手宣传数字**，不应排成中性「估算」 | ⚠️downgrade-wording |
| 11 | 「careful framing：13c 人口统计有限，但取最低估算西征总死亡几百万」（`gk-n7` / `gk-n10`）| number / rhetoric | inference | 「几百万」总数即使现代下修后仍是常见量级表述（学界多数承认 city-level 灭绝真实），作为总量级 + 已对冲，可接受 | ✅verified |
| 12 | 「1223.5.31 Kalka 河战；12 名俄罗斯王公被俘，装进木箱压死，上摆酒席」（`gk-n8` / kernel §2）| number / date | encyclopedia | Kalka 战役 + 王公被压平台喂宴确证。**但**「12 名…压死」与史料冲突：被**俘后压死的是基辅大公 Mstislav Romanovich + 少数王公（主流记 3 人压死/木板平台）**，另约 6 人逃亡途中被杀；「12 个全压死」+「木箱」均不准（应为木板平台压 ~3 人）| ✋flagged |
| 13 | 「1240.12 Subotai/Batu 屠 Kiev，基辅罗斯 200 年统治终结」（`gk-n8` / `yc-n9` / kernel §2）| date / absolute | encyclopedia | 1240.12 Kiev 陷落确证；「基辅罗斯 200 年」措辞成立（Kievan Rus 自 10c 中后期—1240 罗斯诸公分裂体系） | ✅verified |
| 14 | 「1227.8.25 死西夏军中 65 岁；4 死因 4 来源（蒙古秘史坠马 / 马可波罗箭伤 / Rashid al-Din 1306 热病 / 元史毒热）」（`gk-n9` / kernel §2）| date / quote | encyclopedia | 1227.8.25 死、临终遗命灭夏+秘葬均确证；4 种死因 4 来源对照属诚实的来源分层，处理优秀 | ✅verified |
| 15 | 「葬地 21c 仍未发现，蒙古国法律明文禁挖」（`gk-n9`）| absolute | encyclopedia | 葬地未发现确证；「蒙古国法律明文禁止挖掘成吉思汗陵」**为常见说法但缺明确法条核实**——更稳的是「视为国家禁忌 + 无官方发掘」。措辞略硬 | ⚠️downgrade-wording |
| 16 | 「Yam 驿站 25-50 km 一站，北京到布达佩斯 6 周——Pax Mongolica 100 年基础设施（归于 Chinggis 系统构建）」（`gk-n10` / kernel §0.5·§6）| causal / number | encyclopedia | Yam 25-30 mi（≈40-48 km）一站确证。**但**正式 Yam 系统**由 Ögedei 1234 设立/扩建**，非 Chinggis 1206 首创；文中 N10 把 Yam 列入「Chinggis 极致系统构建」略前置归因（Chinggis 奠基理念 vs Ögedei 制度化）| ⚠️downgrade-wording |
| 17 | 「1218 Chinggis 召见 Yelü 28 岁，问『辽金世仇我替你报仇你高兴吗』，答『父祖仕金岂复仇君父』」（`yc-n4` / kernel §3·§5）| quote / date | encyclopedia | 召见 + 任 bichigchi（书记/星象）确证。引语：Genghis「辽金累世仇敌我已为你报仇」+ 楚材「臣父祖皆尝北面事金，既为之臣，岂复仇君父乎」**与权威记载几乎逐字吻合**（真史料级引用）| ✅verified |
| 18 | 「N3/description 版：『现在金被你灭——我该恨谁？』」（`yc-n3` / lens description）| quote | inference | 这是同一对话的**意译/演绎版**（「我恨谁」非史料原句，原句是「岂复仇君父」）。N4 已给经典原句，但 N3 + description 的「我该恨谁」是叙事重述，建议显式标为概括，避免与 N4 真引语并列时被当作另一句史料 | ⚠️downgrade-wording |
| 19 | 「1230 谏 Ögedei『马上得天下不可以马上治之』(化用陆贾)，40 岁；1231 任中书令」（`yc-n7` / kernel §3）| quote / date | encyclopedia | Ögedei 1229 即位、楚材反对「农田改牧场」、获任掌北中国行政、推行税制确证。「马上治天下」典出《史记·郦生陆贾列传》（陆贾对汉高祖）属真实汉籍——文中明标「化用」，无张冠李戴 | ✅verified |
| 20 | 「1230 三笔账：华北农税年银 50 万两 + 绢 8 万匹 + 粟 40 万石（按金 1208 税册推算）」（`yc-n7`）| number | dramatization | 楚材反牧场化 + 建税制为真；但**这组具体数字（50 万两/8 万匹/40 万石 + 「亏 90%」对比）为叙事补充的精确化**，非史料直引。作为「他给 Ögedei 算账」的演绎合理，但精确数字应避免被当成史册原数 | ⚠️downgrade-wording |
| 21 | 「华北农田改牧场派若通过→华北+西北千万 Han+Tangut 灭族→21c 没有『中国』连续文明」（`yc-n6` / `yc-n12`）| causal / rhetoric | inference | 「农田改牧场」辩论真实（学界确载极端派主张牧场化）；「若通过则无连续中华文明」是合理但**强反事实推演**，属修辞放大，文中作为思辨 hook 呈现尚可（已是 engagement 语气） | ✅verified |
| 22 | 「1244 楚材死 54 岁；死因 2 说（元史抑郁 / Juvayni 1252 毒杀，Rachewiltz 1962 判后人附会）」（`yc-n10`）| date / quote | encyclopedia | 1244 死、被 Töregene/Abd al-Rahman 边缘化、死因两说 + Rachewiltz 考证——来源分层诚实，处理优秀 | ✅verified |
| 23 | 「Karakorum 4 教并立都市（佛北/道南/Sunni 东/Nestorian 西），由 Yelü 主持总规划」（`yc-n8` / kernel §3）| representativeness / motive | inference | Karakorum 多宗教共存 + 后来 William of Rubruck 记载 4 教场所确证。**但**「Yelü 亲自主持 Karakorum 总规划 + 四向方位布局」**归因过具体**——Karakorum 1235 由 Ögedei 建，楚材参与朝政属实，但「他设计 4 教方位都市」为叙事建构，史料未坐实其总规划师身份 | ✋flagged |
| 24 | 「约 1190 生 Kereit 部，Toghrul 侄女，Nestorian 基督徒读 Syriac 圣经」（`sorg-n1` / kernel §3）| date / motive | encyclopedia | Kereit 王族、Nestorian（东方教会）信仰、Toghrul 亲属关系确证。生年学界多记 c.1190-1198（文中 c.1190 在区间内）| ✅verified |
| 25 | 「1203 Chinggis 灭 Kereit，13 岁被赐 Tolui」（`sorg-n2` / kernel §3）| date / number | encyclopedia | 1203 灭克烈、Sorghaghtani 嫁 Tolui 确证；「13 岁」依 c.1190 生年推算成立（若 c.1198 则更小）——文中已加 12-13c 婚龄 careful framing | ✅verified |
| 26 | 「我亲教 4 子识字（蒙古高层稀有，Chinggis 自己文盲，1204 才创蒙古文）」（`sorg-n3` / description）| representativeness / motive | encyclopedia | 4 子各学一区语言、重视识字、Chinggis 文盲、1204 借回鹘文创蒙古文均确证。**但**权威记 Sorghaghtani **本人 illiterate**，做法是「**安排/督导**子嗣学多语」；文中第一人称「我亲自教 4 子识字」**与『她自己不识字』略冲突**（lens description 用「taught them all to read」同样偏强）| ✋flagged |
| 27 | 「1232 Tolui 突死（萨满符水替兄 Ögedei 顶病灾说，史料模糊；De Nicola 2017/Favereau 2021 存疑）」（`sorg-n5` / description）| number / motive | encyclopedia | 「替死喝符水」是《蒙古秘史》官方记载，另有酗酒/中毒说——文中三层 careful framing 与权威完全一致，处理优秀 | ✅verified |
| 28 | 「42 岁拒改嫁 Ögedei 子 Güyük（反 levirate）；19 年布局 1251 Möngke 即位；1252 清洗 Oghul Qaimish」（`sorg-n5`·`sorg-n8`）| date / causal | encyclopedia | 拒嫁 Güyük、运作 Möngke 1251 上位、1252 清洗 Ögedei 系均确证；4 子全成 Khan 确证 | ✅verified |
| 29 | 「1258.2.13 Baghdad 陷，Caliph al-Musta'sim 卷毛毯马踏死；屠城死 20-30 万（旧估 80 万偏高）」（`sorg-n10` / kernel §2·§4）| date / number | encyclopedia | 巴格达 1258.2 陷落、哈里发卷毯马踏（蒙古不流血弑君）确证；死亡数权威区间从 9 万到 100 万极广，「20-30 万 + 标旧估 80 万偏高」是合理的中位诚实表述 | ✅verified |
| 30 | 「1241.12.11 Ögedei 死→蒙古撤欧；『一个老人的死决定欧洲不被征服』」（`yc-n9` / kernel §2·§7）| causal | textbook | 1241.12 Ögedei 死 + 1242 撤军确证。**但**「窝阔台死 = 撤军唯一原因」是传统派说法；kernel §7.3 自己已列「4 派学说（草原回家/决策机制/气候/继承）」。storyboard N9 的单因措辞比 narrative 更绝对，narrative 已平衡，故仅记为可接受（N9 末句『我的看法不重要』略软化）| ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#10]** `gk-n7`·`yc-n5`：「Urgench 每兵分 24 俘处决→死 50-120 万；Merv 死 70-130 万。」
   - 问题：**核心数字红旗（重点 number/rhetoric）**。这正是 SOP「屠城数字严重夸张」原型。Juvayni 1252 的 Urgench 1.2M / Merv 1.3M / Nishapur 1.74M 被现代学界明确判为「**人口学上不可能**」，下修至万到十几万级。文中虽署 Juvayni + careful framing，但把 50-120 万 / 70-130 万呈现为「估算区间（estimates range from…）」，会让学生当成今天学界认可的估算——实际它们是**被否定的一手宣传数字**。
   - 建议：把「估算 50-120 万」改为**史料层 vs 学界层分写**——如「Juvayni 1252 记 X（但现代学界判定此类数字人口学上不可能，实际死亡多估在数万到十几万级）」。narrative §0.5 已经做到这一点（明标「demographically impossible」），**storyboard 应与 narrative 对齐**。这是本 topic 最该处理的一条。

2. **[#12]** `gk-n8`：「Kalka 河战 12 名俄罗斯王公被俘，装进木箱压死，上面摆酒席庆祝。」
   - 问题：**数字 + 细节与史料冲突（flagged）**。权威：被俘后压死的是**基辅大公 Mstislav Romanovich + 少数王公（主流记 3 人）**，压具是**木板/平台**（Mongol 不流血弑贵族），另约 6 名王公在逃亡途中被杀。「12 名全装木箱压死」把「总参战/被杀王公数」与「平台压死数」混在一起且数字偏高，「木箱」亦不准（应为木板平台）。
   - 建议：改为「基辅大公等数名王公被俘——铺木板压在身上、蒙古将领在板上设宴压死（蒙古不流血弑贵族传统）」。去掉「12」与「木箱」，保留震撼细节。

3. **[#23]** `yc-n8`：「Karakorum 4 教并立都市设计由我（Yelü）主持总规划，佛北/道南/Sunni 东/Nestorian 西。」
   - 问题：**归因过度具体（flagged）**。Karakorum 多宗教共存属实（Rubruck 亲见 4 教场所），耶律楚材参与 Ögedei 朝政亦属实；但「**他亲自主持 Karakorum 总规划 + 四方位宗教布局**」史料未坐实——这是把「broker 多元背景」+「Karakorum 多教」两件真事**因果焊成「他设计了这座城」**的叙事建构。四向方位布局细节也偏文学化。
   - 建议：降级为「我参与 Ögedei 朝廷、推动延续 Yasa 宗教宽容；Karakorum 后来成为 4 教并存之都」。避免把「总规划师」身份排成史实。

4. **[#26]** `sorg-n3`·lens description：「我亲自教 4 子识字 / I taught all four to read.」
   - 问题：**与权威轻冲突（flagged）**。权威普遍记 Sorghaghtani **本人 illiterate（不识字）**，但深知识字价值，**安排/督导**四子各学一区语言（蒙/突厥/汉/波斯）。第一人称「我亲自教 4 子识字」与「她自己不识字」并存会被史实党挑。
   - 建议：微调为「我让 4 子全学识字（我自己不识字，但我请来各文明的老师/督着他们学）」——既保留「母亲推动子嗣识字」的核心真实，又不与「她文盲」冲突。这点改动小、收益高。

5. **[#5]** `gk-n5`·`gk-n10`·kernel §0.5：「13c 初欧洲/伊斯兰世界/宋朝都没有宗教 toleration——只有草原有 / 前所未有。」
   - 问题：**强绝对表述（absolute）**。蒙古制度化「所有宗教神职免税」确属罕见且真实，但「13c 世界独有 / unprecedented」过强——同期亦有局部宽容案例（如西西里 Frederick II 宫廷）。
   - 建议：软化为「这种**制度化、跨多教、全员免税**的宗教宽容，在 13c 初的欧洲/伊斯兰世界/宋朝都罕有对等」。保留对比冲击，去掉「独有/前所未有」的硬绝对。低-中优先级。

6. **[#6]** `gk-n6`·`yc-n3`：「1215 金中都死 30-60 万。」
   - 问题：**数字缺权威背书（轻类）**。主流英文权威只记「thousands massacred」，30-60 万区间的**下限亦难独立坐实**（高数来自元史 + Daoist 见骸骨传闻）。文中已 careful framing 标元史可能夸大，方向对。
   - 建议：可保留但更稳的写法是「死亡数史料从『数万』到元史『60 万』差异极大」，把下限也松开，而非锚定「30 万」为现代学者定论。低优先级。

7. **[#16]** `gk-n10`·kernel §6：「Yam 驿站（北京到布达佩斯 6 周）——Chinggis 极致系统构建的一部分。」
   - 问题：**归因前置（轻类）**。正式 Yam 系统由 **Ögedei 1234 设立并扩建**，非 Chinggis 1206 首创。文中 N10 synthesis 把 Yam 与 Yasa/tumen 并列归到「Chinggis 系统构建」。
   - 建议：可加半句对冲——「Yam 驿站（Chinggis 奠基、Ögedei 1234 制度化）」。极低优先级（理念—制度化的归属之分）。

> **#15（葬地禁挖法条）/ #18（『我恨谁』意译并列真引语）/ #20（楚材三笔账精确数字）** 三条为 `⚠️downgrade-wording`，已在表中标注，量级较轻，未单列长条：建议分别软化为「视为国家禁忌」「显式标为概括重述」「显式标为『他大意是这样算账』而非史册原数」。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| Anacaona Jr.（1492 AoE）| `sorghaghtani` N12 仅作**跨文明对照点名**（非本 topic 登场叙事）| 虚构 composite 见证者 | ✅ **已透明标注**：N12 明列「3 真（Sorghaghtani/Theodora/Li Qingzhao）+ 3 虚（Anacaona Jr./Aisha 1413/Sister Agnes）」并逐一标「虚构 composite」 |
| Aisha 1413（Mali）| `sorghaghtani` N12 对照点名 | 虚构 composite 见证者 | ✅ 同上，N12 明标「3 真 3 虚」 |
| Sister Agnes（Mali 1235）| `sorghaghtani` N12 对照点名 | 虚构 composite 见证者 | ✅ 同上，N12 明标「3 真 3 虚」 |
| Baghdad「无名 scholar」| `sorghaghtani` N10 | 文中明用「可能是…也可能不是…可能就死在那 7 天里」**假设语气**，非确指真人 | ✅ **已透明标注**：N10 用「a nameless scholar… perhaps… perhaps not」呈现，是 receiving-end 想象练习，已显式标为不确定 |

> **本 topic 三位主角全部是真实历史人物**——成吉思汗 / 耶律楚材 / Sorghaghtani Beki 均有 Rashid al-Din《史集》、《蒙古秘史》、《元史》、Rachewiltz 1962 / Broadbridge 2018 等多源记载。三 lens 第一人称叙事的**内心戏**属 inference（挂在已证事实上），生平骨架未虚构。**文化对应自检通过**：耶律楚材的契丹身份贯穿全程明示「不是 Han 代言人」，用到的汉籍典故（楚材晋用 / 陆贾马上治天下）均为其本人真实生平 + 真实文献，无张冠李戴。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `genghis-khan`（claim #1-16）/ `yelu-chucai`（#6,17-23,30）/ `sorghaghtani`（#24-29 + N10 Baghdad）。含 N4/N5/N7 等 ⭐ gold-standard 重点节点。
- **重点核查结论**：
  - **重点 A（屠城数字夸张）**：主红旗 **#10** Urgench/Merv 50-120 万/70-130 万——Juvayni 数字被学界判「人口学不可能」，storyboard 呈现为「估算」但 narrative §0.5 已正确标「demographically impossible」→ **storyboard 应与 narrative 对齐**（最该处理）。轻类：#6 中都 30-60 万缺下限背书、#11 总量「几百万」已对冲可接受、#29 Baghdad 20-30 万为诚实中位。
  - **重点 B（引语分层）**：#17 楚材「岂复仇君父」**真史料级逐字吻合**（处理优秀）；#18 N3/description「我恨谁」是同对话**意译并列真引语**需标概括；#14 成吉思汗 4 死因 4 来源、#27 Tolui 符水三层 framing、#22 楚材死因两说 + Rachewiltz——**来源分层是本 topic 强项**。
  - **重点 C（文化对应硬自检）**：**通过**。Yelü Chucai 契丹-中原 broker 身份全程钉死「不是 Han 代言人」；汉籍典故均属其本人真实生平，无张冠李戴；蒙古/克烈/契丹各自语境清晰。
  - **合成角色**：仅 Sorghaghtani N12 对照表 3 个虚构 composite（Anacaona Jr./Aisha 1413/Sister Agnes）+ N10 Baghdad 假设性「无名 scholar」——**全部已透明标注**，符合 §1.3 dark-topic 红线。
  - **归因/代表性**：#12 Kalka「12 王公木箱压死」（数字+细节冲突，flagged）、#23 Karakorum「Yelü 主持总规划」（归因过度，flagged）、#26 Sorghaghtani「亲自教识字」（与『她文盲』冲突，flagged）、#16 Yam 归 Chinggis（前置，轻类）。
- **用到的外部核实来源**：Wikipedia（Genghis Khan / Kurultai / Siege of Bukhara / Siege of Zhongdu / Mongol invasion of Khwarazmian Empire / Siege of Nishapur 1221 / Battle of the Kalka River / Siege of Baghdad 1258 / Otrar Catastrophe / Inalchuq / Tolui / Yelü Chucai / Sorghaghtani Beki / Yam route / Pax Mongolica / Religion in the Mongol Empire / Mstislav Mstislavich）、Britannica（Yelü Chucai / Battle of the Kalka River）、OpenStax World History（Chinggis Khan）、EBSCO Research Starters（Sorghaghtani Beki）、Women in World History Curriculum（Sorghaghtani）、academia.edu（How were Kievan Grand Prince Mstislav… Killed after Kalka）。学界二手对照：Juvayni 1252 数字 vs 现代下修共识（David Morgan / Peter Jackson 2017 区间）、Rashid al-Din《史集》1306、Igor de Rachewiltz 1962、Broadbridge 2018 / De Nicola 2017 / Favereau 2021。
- **总评**：本 topic 史实骨架**稳健且来源意识极强**——日期（1206/1215/1218/1223/1227/1232/1241/1251/1258）、4 大汗国体系、Yasa 宗教免税、Otrar 450 商队、Tolui 符水说三层 framing、Sorghaghtani 拒嫁+4 子全成汗、Baghdad 卷毯马踏、楚材「岂复仇君父」逐字引语均经权威核实通过；多处主动做了「来源分层 + careful framing」（4 死因 4 来源、Juvayni 署名、Rachewiltz 考证、Weatherford popular 反向夸大自警）。无 `needs-source`（无悬空高风险事实）。7 条红旗中：**#10（屠城数字应与 narrative 对齐）+ #12（Kalka 12 王公木箱）+ #23（Karakorum 总规划归因）+ #26（亲自教识字 vs 文盲）** 为应处理的实质项；#5/#6/#16 为低优先级措辞/归因微调。**建议先处理 #10 / #12 / #23 / #26 再视为通关；其余可上线后迭代。**
