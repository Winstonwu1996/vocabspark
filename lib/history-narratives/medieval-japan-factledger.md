# 中世日本 794-1603 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    medieval-japan
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/medieval-japan.js（3 lens: tokimune-defender / sesshu-mediator / masako-widow-nun）+ lib/history-narratives/medieval-japan.md（Part 1-3）
claim 总数:  28
🚩 红旗数:   7（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

**文化对应硬自检（本 topic 专项）**：日本史有自己的制度术语（shogun 将军 / shikken 执权 / bakufu 幕府 / gokenin 御家人 / daimyō 大名 / tennō 天皇 / shōen 庄园），**全文核查未用中国概念词（丞相/皇帝/科举/宰相）类比日本制度** → 通过。叙事在 tokimune-N1 主动解释「执权 ≠ 将军」、narrative §5 用「套娃」结构区分天皇/将军/执权/得宗五层，未把天皇当中国式专制皇帝、未把执权当中国式丞相。日本汉字词（如「执权」「御家人」「庄园」）均按日本制度义使用，未串到中国概念。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「1271 年第三批使者来了，这一次使者被杀；1271 斩使 → 1274 来袭，同一条逻辑两端」（`tokimune-N4` / narrative §7）| **date / causal** | ✋conflict | **与权威正面冲突**。著名的斩使（杜世忠 Du Shizhong 等 5 人，斩于龙之口 Tatsunokuchi）发生在 **1275 年 9 月**，是 1274 文永之役**之后**的报复性事件；第二次斩使 1279 年于博多。1271-1273 年间的使团（赵良弼 Zhao Liangbi）无答复而返，**未被处决**。文中把斩使提前到 1271 并当作 1274 入侵的**前因**，时序与因果双双倒置 | ✋flagged |
| 2 | 「时宗 1251 生，1268 年 17 岁接任第 8 代执权，1284.4.20 死，享年 33」（`tokimune-N1`·`N3`·`N12` / narrative §6·§10）| date / number | encyclopedia | 1251.6.5 生，1268 任第 8 代执权，1284.4.20 卒，33 岁，权威一致。文中已注明采用周岁 | ✅verified |
| 3 | 「1268.1 高丽船载元朝信使到太宰府，汉文国书，结尾『若仍不遣使往来则不得不使用兵力』」（`tokimune-N3` / narrative §7）| quote / date | primary | 《蒙古国牒状》汉文原件存日本；1268 年抵达、威胁措辞，确证。文中已注为外交劝降非立刻宣战 | ✅verified |
| 4 | 「斩外国使者极罕见；蒙古 yam 驿站建立于使者神圣不可侵犯；1219 花剌子模杀使 → 成吉思汗西征灭国」（`tokimune-N4` / narrative §7·§11）| causal | encyclopedia | 花剌子模 Otrar 杀使引发蒙古西征、yam 系统使者保护原则，均确证（cross-ref Mongol Topic 成立）| ✅verified |
| 5 | 「1274 文永之役约 25,000-30,000 人、近 900 艘船（《元史》15,000-25,000；《高丽史》约 33,000；Turnbull 取中值）」（`tokimune-N5` / narrative §8）| number | encyclopedia | Turnbull 2008 估值与史源分歧表述均准确；文中已 careful framing | ✅verified |
| 6 | 「日本武士单挑名号传统 vs 蒙古集团战术（弓手轮替、长矛掩护），武士冲阵遭箭雨」（`tokimune-N5` / narrative §8）| causal / representativeness | textbook | 战术对比为标准叙述；近年学界（Conlan）对「单挑 vs 集团」的二元对立有所修正，但作为 G7 概括成立 | ✅verified |
| 7 | 「铁炮 tetsuhau：铁壳火药炸弹；《蒙古袭来绘词》是竹崎季长为请赏委托绘制的功劳申请书，非客观史料；铁炮考古有实物但决定性作用可能被夸大」（`tokimune-N5` / narrative §8）| number / motive | primary | 高岛沉船 2011 出土陶/铁壳火药弹，实物确证；绘词为竹崎季长请赏文书、Conlan 2001 对其史料局限的分析，均确证。**gold-standard 处理** | ✅verified |
| 8 | 「『神风』当时未被普遍使用；作为系统性叙事是入侵后数十年至一两世纪由神社神职与统治者建构（Conlan 2001）；20 世纪『神风特攻队』借用此词」（`tokimune-N6`·`N9`·`N12` / narrative §8·§9·§10）| causal / motive | textbook | Conlan《In Little Need of Divine Intervention》核心论点；war-merit 文书强调个人战功不提神风，确证。**本 topic 最强 anti-Whig 处理** | ✅verified |
| 9 | 「石墙 元寇防壁（Genkō Bōeki），1275-1280 建，全长约 20 公里、高约 2-3 米，御家人征调，1281 挡住东路军登陆」（`tokimune-N6`·`N7`·`N8` / narrative §8）| number | encyclopedia | 石墙 1276.3 起六个月建成、约 20 km、海侧约 3 m、1281 起作用，确证。**但**罗马字「**Genkō Bōeki**」用词存疑：标准名为 **Genkō Bōrui（元寇防塁）**；「bōeki」=贸易（误），且 Bōrui 系大正期考古学者命名，当时称「石筑地 ishitsuiji」 | ⚠️downgrade-wording |
| 10 | 「每往前凿一段… / 每米一死」——注：本 topic **无此类强修辞死亡比率**句 | rhetoric | — | （核对：medieval-japan 未出现 chinese-exclusion 式「每米一死」型伪精确比率句，无对应红旗）| ✅verified |
| 11 | 「1281 弘安之役：东路军约 40,000+900 船 / 江南军约 100,000+3,500 船；合计约 140,000、约 4,400 船（《元史》1370 年代成书，Turnbull 疑夸大，实际可能 100,000-120,000）」（`tokimune-N8` / narrative §9）| number | encyclopedia | 140,000/4,400 为《元史》通用数字，文中 careful framing 到 100,000-120,000。**但** Conlan 更激进：认为数字可能夸大一个数量级（即约 14,000）。文中下限仍偏高，可补一句「亦有学者认为远低于此」 | ⚠️downgrade-wording |
| 12 | 「1281.8.15-16 台风（现代估计 Cat 4+）；江南军部分为仓促改造的内河平底船（Delgado 2001 水下考古）；造船有腐败（元朝内部审查记录）」（`tokimune-N9` / narrative §9）| number / causal | encyclopedia | 高岛水下考古证实江南军船只问题；台风规模、造船质量问题为学界共识。Delgado 归属确切引用宜以 careful framing 标注（已有）| ✅verified |
| 13 | 「台风溺亡约 6 万-10 万（Farris 1996，溺亡估算非总死亡）；部分上岸幸存者被歼，数字无共识（Turnbull 2008）；远征军几乎全军覆没」（`tokimune-N9` / narrative §9）| number | encyclopedia | Farris 估值、学界无共识表述均准确；文中已注「总损失与入侵规模有算术张力」 | ✅verified |
| 14 | 「1281 打赢未占任何土地 → 御家人无封赏可分 → 信任系统性松动（Mass 1989）；1333 倒幕军正源于封赏不足的御家人」（`tokimune-N10`·`N12` / narrative §10·§12）| causal | textbook | Mass 1989 御家人封赏危机论，AP/学界标准解释，确证 | ✅verified |
| 15 | 「1282 圆觉寺建成，邀中国禅僧无学祖元（Mugaku Sogen，1226-1286）任开山住持，为弘安战死者超度」（`tokimune-N8`·`N11` / narrative §10）| date / motive | encyclopedia | 圆觉寺 1282 建、无学祖元 1280 抵日、1226-1286，确证。**两点微调**：(a) 无学祖元 1280 来日，时南宋已亡（1279），文中「从宋朝来」宜作「从（已被元征服的）中国来」；(b) 权威强调圆觉寺超度**敌我双方**死者，文中仅写日方 | ✅verified |
| 16 | 「时宗-无学祖元禅对话『洞然无依』需 careful framing：作为完整问答见于时宗死后很久编纂的传记/寺院记录，不能当确证史实引用」（`tokimune-N11` / narrative §10）| quote | inference | 文中**主动标注**为后世增饰、不可作确证引语。引语分层处理到位 | ✅verified |
| 17 | 「1333 镰仓幕府被后醍醐天皇+足利尊氏联军摧毁，时宗死后 49 年」（`tokimune-N12` / narrative §10·§12）| date | encyclopedia | 1333 倒幕、1284→1333=49 年，确证 | ✅verified |
| 18 | 「政子 1156 生于伊豆国，保元之乱同年；1225 死，69 岁」（`masako-N1`·`N12` / narrative §3）| date | encyclopedia | 死 1225、保元之乱 1156，确证。**但**生年：维基/JREF 通用 **1157**（部分日本史料 1156）。文中 1156 与 1225 配出「69 岁」依赖 1156；若取 1157 则虚实岁需重算。属史料分歧，宜标「1156/1157 史料不一」 | ⚠️downgrade-wording |
| 19 | 「政子父北条时政是伊豆御家人；1180 以仁王令旨反平氏，时政押注赖朝举兵；同年政子嫁赖朝（《吾妻鏡》载私奔，幕府官修有塑造动机）」（`masako-N2`·`N3` / narrative §3）| motive / quote | encyclopedia | Mass 1989 北条上升史框架；《吾妻鏡》私奔叙事的 careful framing 到位 | ✅verified |
| 20 | 「政子 1199 赖朝死后 43 岁削发为尼，法号二位尼；『尼将军 Ama Shōgun』最早见《吾妻鏡》1221 前后，是史书总结非自称非官职（Varley 1994）」（`masako-N5` / narrative §4·§16）| quote | encyclopedia | 削发、二位尼、出家为政治工具，确证。**轻微张力**：维基称「尼将军」为**同时代 contemporary sobriquet**；文中更保守地称「史书总结」。文中措辞偏保守=安全，但与「contemporary」表述不完全一致 | ✅verified |
| 21 | 「1203 废赖家立 11 岁实朝；赖家翌年被杀于修禅寺。McCullough 1985：政子是主动参与者非受害者」（`masako-N6` / narrative §4·§16）| date / causal | textbook | 1203 废立、赖家 1204 死、McCullough 重估，确证 | ✅verified |
| 22 | 「1219.1 实朝在鹤岡八幡宫被侄公晓刺杀，源氏嫡流断绝；此后将军为京都引入的皇族/藤原子弟（名义将军）」（`masako-N8` / narrative §4·§5）| date / causal | encyclopedia | 1219 实朝遇刺、源氏嫡流绝、其后摄家/亲王将军，确证 | ✅verified |
| 23 | **「1221 承久之乱：政子在御家人集会上『站起来发言』，《吾妻鏡》载演讲大意…」**（`masako-N9` / narrative §4）| **quote / representativeness** | ✋conflict | 演讲内容的 careful framing（《吾妻鏡》写定化、Bialock 2007/Varley 1994）到位。**但**关键史实细节冲突：据《吾妻鏡》，政子的话是**由安达景盛（Adachi Kagemori）代为宣读**给御家人，并非她本人当众站起来口述。文中第一人称「我站起来发言之前」「我站起来的那一刻」把代读叙事改成了亲口演讲 | ✋flagged |
| 24 | 「1221 幕府军 30 天击溃上皇军；后鸟羽流放隠岐（1239 死于流放地）；日本史首次武家彻底击败天皇军事挑战，至 1868 共 647 年天皇未再武力倒幕」（`masako-N10` / narrative §4）| number / absolute | encyclopedia | 30 天平乱、后鸟羽流隠岐、1221→1868=647 年，确证。文中已注「演讲只是因素之一非唯一原因」 | ✅verified |
| 25 | 「政子演讲与拜占庭狄奥多拉 532 Nika 暴动『紫袍是好寿衣』并列；Theodora 548 死 / Masako 1225 死，相隔 677 年」（`masako-N9`·`N12` / narrative §11·§16）| date | encyclopedia | Theodora 548、Nika 532、1225-548=677，跨 Topic 算术准确 | ✅verified |
| 26 | 「雪舟 1420 生备中国；幼年画鼠传说+『备中赤浜』出生地均为 17 世纪后传说，非史实（Watanabe 1975）；约 1506 死、地点不确」（`sesshu-N1`·`N12` / narrative §14·§15）| date / absolute | encyclopedia | 1420 生、约 1506 死、死期地点不明，确证。**注**：Britannica 直接把「Akahama, Bitchū」当出生地、把 1506.8.26 当卒日；文中（据 Watanabe 1975）更审慎地标为传说/推算——**文中立场=现代学术审慎派，可接受且更稳** | ✅verified |
| 27 | 「雪舟 1467 搭勘合贸易船从博多出发赴明，**1467 宁波入港**，北上至北京」（`sesshu-N4`·`N5`·`N6` / narrative §14）| **date** | ✋conflict | 出发年 1467 与应仁之乱同步，成立。**但**入港年：Britannica 等权威记雪舟**1468 年**抵宁波（1467 出发、1468 登陆）。文中把出发与宁波入港**同记为 1467**，宁波入港年偏早一年 | ✋flagged |
| 28 | 「雪舟师承：如拙（朝鲜出身，明画技法传入）→ 周文 → 雪舟；北京行程史料极有限，接触『court painters and their circle』（明无宋式翰林图画院，宣德后画家以待诏供职）；Rice 2010 评其为 researcher 非 student；《四季山水图卷》1486、约 1560cm；《慧可断臂图》1496;《天橋立図》约 1501-06」（`sesshu-N2`·`N6`·`N9`·`N10`·`N11` / narrative §14）| date / number | encyclopedia | 师承链、明画院 careful framing、Rice researcher 判断、三件代表作年代与尺寸，确证；文中真伪/重装/北京史料有限均已 careful framing。**gold-standard 处理** | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `flagged` / `needs-source` / `downgrade-wording` 三类进这里。每条给：问题 + 建议处理。

1. **[#1] 🔴最高优先 — 斩使年代与因果倒置** `tokimune-N4` + narrative §7：「1271 年第三批使者来了，这一次使者被杀」「1271 年斩使，1274 年来袭——同一条逻辑的两端」「1271 年之后，中间地带不存在了」。
   - 问题：**date + causal 双错（与权威正面冲突）**。著名斩使（杜世忠 Du Shizhong 等 5 人，斩于镰仓龙之口 Tatsunokuchi）是 **1275 年 9 月**，发生在 **1274 文永之役失败之后**，是报复/决心宣示；第二次斩使 1279 年于博多。1271-1273 年的使团（赵良弼）只是无答复而返，**没有被处决**。文中把斩使提前到 1271 并当成 1274 入侵的**前因**，时序倒置（因在果后被写成因在果前）。这会让学生记住一个错误的因果链。
   - 建议：把「1271 斩使 → 1274 来袭」整段改写为符合史实的两段式——(a) 1268-1273 多次使团被拒/遣返（无杀），1274 文永之役爆发；(b) **1275 年**（文永之役后）忽必烈再遣使，时宗下令斩于龙之口，**1279 年**再斩一批，这才是「不可撤回的姿态」，并直接导向 1281 弘安之役。即：斩使是「第一次入侵后、第二次入侵前」的动作，不是第一次入侵的前因。lens 的「不可撤回的决定」主题完全可保留，只需把年份和因果对象从 1274 换到 1281。

2. **[#23] 🔴高优先 — 政子演讲：亲口 vs 代读** `masako-N9` + narrative §4：「我站起来发言之前，会场里有人还没有决定」「我站起来的那一刻，我不知道结果会怎样」。
   - 问题：**史实细节冲突（representativeness/quote 邻类）**。据《吾妻鏡》，1221 年政子的话是**由安达景盛（Adachi Kagemori，秋田城介）代为向御家人宣读**，并非她本人当众站起来口头演讲。文中第一人称叙事把「召集御家人、令景盛代读训词」改写成「我站起来当众发言」。演讲**内容**的 careful framing（Bialock 2007 写定化、McCullough 1985 影响有旁证）做得很好，但「亲口 vs 代读」这个动作细节被改了。
   - 建议：因 lens 是政子第一人称视角，可保留戏剧张力，但用一句话校正动作——如「我让安达景盛把我的话带到御家人面前」/「这段话，由景盛代我向集会宣读」。既守住第一人称，又不与《吾妻鏡》最著名的细节冲突。

3. **[#27] 中优先 — 雪舟宁波入港年** `sesshu-N5` + narrative §14：「1467 年，宁波（Ningbo）入港。47 岁，第一次踏上中国土地。」
   - 问题：**date（偏早一年）**。权威（Britannica 等）记雪舟 **1467 年出发、1468 年抵宁波**。文中把出发与宁波入港都系于 1467。出发年 1467（与应仁之乱同步）没问题，但宁波登陆应为 1468。
   - 建议：宁波节点改「1468 年宁波入港」，或写「1467 年出发、次年（1468）在宁波登陆」。N4 出发年 1467 不动。

4. **[#9] 中优先 — 石墙罗马字用词** `tokimune-N6`·`N7`·`N8` + narrative §8：「元寇防壁（Genkō Bōeki）」。
   - 问题：**术语（romaji 错 + 轻微时代错置）**。标准名是 **Genkō Bōrui（元寇防塁）**；文中罗马字「Bōeki」实为「贸易（貿易）」的读音，张冠李戴。另：「Genkō Bōrui」是大正期（1912-1926）考古学者的命名，当时此墙称「石筑地（ishitsuiji）」——让时宗在 13 世纪用这个 20 世纪的名字，属轻微时代错置。
   - 建议：罗马字改为 **Genkō Bōrui**（汉字「元寇防塁」更标准，文中「防壁」亦常见可接受）。若要更严谨，可加半句「（这道墙后世才被叫作元寇防塁，当时称『石筑地』）」。

5. **[#11] 中优先 — 弘安兵力下限仍偏高** `tokimune-N8` + narrative §9：「合计约 140,000 人…Turnbull 认为实际可能接近 100,000-120,000」。
   - 问题：**number（careful framing 不够低）**。文中已把《元史》140,000 下修到 100,000-120,000，但 Conlan（本 topic 主力 careful-framing 来源）认为这些数字**可能夸大一个数量级**（即真实兵员或仅约 14,000）。当前下限仍只到《元史》数字的 7-8 成，没覆盖到学界最激进的低估。
   - 建议：在现有 careful framing 后补一句「也有学者（Conlan）认为真实兵力可能远低于此」，把不确定区间打开，避免学生把「十几万」当确证。低-中优先级（已有 framing，仅是范围不够宽）。

6. **[#18] 低优先 — 政子生年史料分歧** `masako-N1`：「1156 年，我出生在伊豆国」。
   - 问题：**date（史料不一）**。维基/JREF 通用 **1157**，部分日本史料用 1156。文中取 1156，并由此与 1225 卒年配出「69 岁」。属史料分歧非硬错，但与最常见英文权威不一致。
   - 建议：可保留 1156，但加半句「（生年史料 1156/1157 不一）」；或统一改用更常见的 1157（注意届时需复核全文凡用到政子年龄处的算术）。极低优先级。

7. **[#15] 低优先 — 无学祖元「从宋朝来」+ 圆觉寺超度对象** `tokimune-N11` + narrative §10：「我邀请中国禅僧无学祖元从宋朝来日本」「寺庙为弘安之役战死者而建」。
   - 问题：(a) **date 微瑕**：无学祖元 1280 年来日，时南宋已亡（1279），严格说他从「已被元征服的中国」来，「从宋朝来」略不准（他是宋代受训禅僧，宽松可读）；(b) **representativeness**：权威强调圆觉寺超度**敌我双方**死者，文中仅写日方战死者，略窄。
   - 建议：(a)「从宋朝来」可改「从中国来」/「从江南来」；(b) 可补「为这场战争中**两边**的死者超度」，更贴史实、也强化 anti-Whig（连敌方死者也超度）。低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| 九州一个御家人当家（耕地被划入石墙施工区）| `tokimune-defender`（`tokimune-N7`）| **无真名、无具体生平**；「1276 初春看着耕地被划入施工区、没有选择、田地这季不种、人手去凿石」为**代表性叙事补充**（代表被征调建墙的御家人群体）；底层史实（1275-1280 征调御家人建墙、负担转嫁庄园/农民、Mass 1989 御家人裂缝）为 documented | ✅ **已透明标注**：文中明写「我不知道他的名字，从镰仓下令，我从来不知道具体的名字」，主动声明这是无名的代表性人物，未冒充确指个人。符合 §1.3 规范 |

> **其余全部出场人物均为真实历史人物，非合成**：北条时宗、北条政子、北条时政、北条义时、源赖朝、源赖家、源实朝、北条贞时、忽必烈、无学祖元、竹崎季长、后鸟羽上皇、后醍醐天皇、足利尊氏、足利义满、足利义政、雪舟等杨、如拙、周文、戴进、大内氏、安达景盛（narrative §16 提及，storyboard 未点名→见红旗 #2 建议补入）、长谷川等伯。三个 lens 主角（时宗/雪舟/政子）均为**第一人称视角**叙事：内心戏属挂在已证事实上的合理 inference，未虚构其生平骨架。雪舟 lens 多处第一人称「我记得有一次…」式场景（如相国寺库房三画对比 N3、宁波石刻 N5、北京明朝画家『这是中国画法但不是中国的』N6、山口花岗岩写生 N8）为**叙事性场景重构**，但均挂在 documented 的认识论转变上，且 N6 明朝画家对话文中已注「据后世记载，原话已无法核实」——**演绎与史料分层清晰**。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 ——
  - `tokimune-defender`（claim #1-9,11-17；含蒙古入侵核心节点 N3 国书 / N4 斩使 / N5 文永 / N8-9 弘安+神风 gold-standard）
  - `masako-widow-nun`（#18-25；含 N9 1221 演讲——本 topic 最高风险 quote 节点）
  - `sesshu-mediator`（#26-28；含 N1 出生地传说 / N5 宁波 / N6 北京 careful framing）

- **文化对应硬自检结论（本任务专项）**：**通过**。全文未用中国概念词（丞相/宰相/皇帝/科举/朝代）套日本制度；日本术语（shogun/shikken/bakufu/gokenin/daimyō/tennō/shōen/tokusō）使用准确，且 tokimune-N1 主动区分「执权≠将军」、narrative §5 用五层套娃区分天皇/将军/执权/得宗。日本汉字词均按日本制度义用，未与中国概念混淆。跨 Topic 衔接（蒙古 yam / Theodora / Medici / 李清照 / 帕查库特克）均为并列对照，非概念类比误用。

- **引语分层结论**：处理整体优秀。`tokimune-N3` 蒙古国书（primary，已注非宣战）、`tokimune-N11` 时宗禅对话（已注后世增饰不可作确证）、`masako-N9` 演讲内容（已注《吾妻鏡》写定化）、`sesshu-N6` 明朝画家对话（已注原话无法核实）——四处引语全部分层标注。唯一遗漏是 #23 的**动作层**（亲口 vs 代读），非内容层。

- **用到的外部核实来源**：Wikipedia（Hōjō Tokimune / Hōjō Masako / Mongol invasions of Japan / Genkō Bōrui / Mugaku Sogen / Engakuji / Sesshū Tōyō / Forbidden City）、Britannica（Sesshu / Forbidden City）、Cornell UP & Princeton History（Conlan《In Little Need of Divine Intervention》）、World History Encyclopedia & Bowdoin & Nippon.com（Mongol invasions）、Archaeology Magazine & USNI Naval History（Takashima 沉船 + tetsuhau 实物 + kamikaze myth）、JREF（Tokimune/Masako 传记）、Fukuoka City 官方（Genkō Bōrui）、McCullough, W.“The Azuma Kagami Account of the Shōkyū War”(Monumenta Nipponica)。

- **总评**：本 topic 史实骨架**总体稳健**，careful-framing 与 anti-Whig 处理在多处达 gold-standard（神风叙事建构 #8、铁炮绘词史料局限 #7、雪舟出生地/真伪/北京史料 #26·#28、政子演讲内容 #23 的文本层、时宗禅对话 #16）。日期/法律/兵力/伤亡区间/跨 Topic 算术绝大多数经权威核实通过。**但有两条 ✋ 与权威正面冲突的硬错必须处理**：**#1 斩使年代与因果倒置（1271→应为 1275，且应在第一次入侵之后非之前）**——这是 SOP「date+causal 双错」原型，影响因果教学，**最高优先**；**#23 政子演讲『亲口 vs 代读』**——著名《吾妻鏡》细节被改，次高优先。另有 #27（宁波 1467→1468）、#9（罗马字 Bōeki→Bōrui）两条中优先 date/术语错，#11/#18/#15 三条低优先 framing/史料分歧。**建议：先修 #1 与 #23 两条硬冲突再视为已补 Fact Ledger 合格；#27、#9 顺手一并修；#11/#18/#15 可记录待批。**
