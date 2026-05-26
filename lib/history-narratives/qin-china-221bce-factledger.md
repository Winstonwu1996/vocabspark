# 秦统一中国 公元前 221 年 · Qin Unification Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative/notebook，**只写本账本文件**，绝不改内容。

```
topicId:    qin-china-221bce
生成日期:    2026-05-24
来源文件:    lib/history-storyboards/qin-china-221bce.js（3 lens：qin-shi-huang / li-si / conscript-laborer-receiving-end，各 11 节点）
            + lib/history-narratives/qin-china-221bce.md（narrative kernel，12 节 + 4 附录）
            + lib/history-storyboards/notebooks/qin-china-221bce.js（小 U同伴笔记本：preview + 8 考点卡 + 3 DBQ）
claim 总数:  27
🚩 红旗数:   4（需创始人审）— 全部为 ⚠️downgrade-wording / 措辞收紧，**无 needs-source、无 ✋flagged 事实硬伤**
```

**一句话总评**：史实地基**非常稳**——题面要求重点核查的全部高危点都对得上权威来源，且作者已主动做了**最难的两处史学防错**：(a) 长城**夯土 vs 明代砖石**的时代错置在 storyboard / kernel / notebook **三处**都正确破除；(b) **焚书确凿 / 坑儒据《史记》且学界对规模存疑**的史料分层在三处都做了透明的 anti-fab 括号标注，且明确点出《史记》成书于秦亡百余年后的汉代、"胜者书写"史观。孟姜女**正确地未进入史实正文**，仅在"常见误解清坑专区"被标为后世传说。戍卒为虚构桥接人物，在 `cl-n8` 显式向学生透明化"我是后人拼出的声音"。日期/数字/灭国顺序/称号构造/人物生卒/兵马俑 1974 全部 ✅。4 条红旗全是低优先级措辞收紧（无事实错误）：最值得看的是 #1（"打了五百多年的仗 + 七国互砍"把"七国"配置错配给 500+ 年）与 #2（70 万役夫《史记》原文是阿房宫+骊山陵合计，文中归给骊山陵一项）。

**China-topic 说明**：本 Topic 是中国史描述中国，皇帝/丞相/郡县制/法家/焚书/戍卒/刑徒/腰斩/玉玺等是**史实正确术语**，按 `AUTHORING_PIPELINE` 第 7 条**例外**条款必须使用——不计入 cultural-ban 违规。

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`。
> 凡 `dramatization` 等级而文中**未透明标注**为合成 → 自动进红旗。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | "公元前 221 年……最后一个国家齐国投降了……第一次把整个华夏合成一个帝国"（`qsh-n1`，kernel §1）| date+causal | encyclopedia | 维基 Qin's wars of unification / Qin Shi Huang：前 221 灭最后的齐，嬴政称始皇帝，首次统一华夏 | ✅verified |
| 2 | "我把传说里最高的「皇」和「帝」两个字合起来，叫自己「皇帝」……我是第一个，所以我是始皇帝"（`qsh-n1`，kernel §2 故事 2，附录 B）| causal+absolute | encyclopedia | 维基 Qin Shi Huang：huángdì = 三皇之 huáng（august）+ 五帝之 dì（divine ruler），自称始皇帝、后世二世三世至万世 | ✅verified（"august / divine ruler"译法精确对应）|
| 3 | "我公元前 259 年生在赵国……人质……13 岁那年，我父亲死了，我回秦国继位"（`qsh-n2`，kernel §3 / 附录 A）| date | encyclopedia | 维基/Britannica：前 259 生于赵（人质），前 247 父死、13 岁继位为秦王 | ✅verified |
| 4 | "从公元前 230 年到 221 年……灭六个国家……韩（前 230）、赵（前 228）、魏（前 225）、楚（前 223）、燕（前 222）、齐（前 221）"（`qsh-n3`，kernel §2 故事 1 / 附录 A，notebook 考点卡 1）| date+number | encyclopedia | 维基 Qin's wars of unification：韩 230 / 赵 228 / 魏 225（水灌大梁）/ 楚 223 / 燕 222（辽东残部）/ 齐 221——顺序与年份逐一对上 | ✅verified |
| 5 | "我手下有个丞相，叫李斯……别分封了……郡县制……官由我任命、我撤换"（`qsh-n3` / `ls-n4`，kernel §3 故事 3 / §5B）| causal | textbook | 维基 Li Si / Qin dynasty：李斯力主废分封行郡县，中央任免、地兵归中央，中央集权奠基 | ✅verified |
| 6 | "书同文（小篆）……车同轨……统一度量衡……圆形方孔钱（半两钱）"（`qsh-n4` / `ls-n5`，kernel §3 故事 4，notebook 考点卡 4）| textbook | encyclopedia | 维基 Li Si：以秦小篆为帝国标准统一文字、系统化度量衡与货币；半两钱为秦标准币 | ✅verified |
| 7 | "我派大将蒙恬带三十万人北上，把匈奴往北赶"（`qsh-n5`，kernel §2 故事 5 / 附录 C）| number | encyclopedia | 维基 Qin's campaign against the Xiongnu / History of the Great Wall：前 215 蒙恬率 30 万北击匈奴 | ✅verified |
| 8 | "我修的长城，主要是夯土……不是后人旅游照片里那种灰砖大墙。那种砖石长城是一千六百多年后明朝修的"（`qsh-n5` / `cl-n4`，kernel §4 故事 5 / §10.1 / 附录 D，notebook 考点卡 6）| absolute+causal | textbook | 维基 History of the Great Wall：秦长城主为夯土（蒙恬连补战国旧墙）；今游客所见砖石墙为明（1368-1644）所建。**MYTH BUST 正确** | ✅verified（"1600 多年"措辞见红旗 #3，软）|
| 9 | "孟姜女"作为后世民间传说、**未进史实正文**，仅在 kernel §10.2 + notebook 考点卡 6 标为"后世传说，非秦史"| representativeness | encyclopedia | 维基 Lady Meng Jiang：四大民间传说之一，后世逐渐定型，原型甚至哭的是齐长城（早秦近两百年）。**文中处理完全正确** | ✅verified |
| 10 | "公元前 213 年，一场宴会上，有读书人当面说我……李斯……不如把那些书烧掉"（`qsh-n6` / `ls-n6`，kernel §4 故事 6 / §5C，notebook 考点卡 5）| date+causal | primary | 维基 Burning of books：前 213 焚书，李斯奏议触发，针对"以古非今"私议 | ✅verified |
| 11 | "除了医药、占卜、种田……和秦国自己的史书，民间收藏的《诗》《书》和六国史书，一律烧掉"（`qsh-n6`，kernel §5C / §10.5，notebook 考点卡 5）| textbook | primary | 维基/Britannica burning of the books + 哥大《李斯奏议》一手译本：留医药卜筮种树之书及秦记，烧民间《诗》《书》百家语六国史 | ✅verified |
| 12 | "据《史记》记载，活埋了四百六十多个。这就是后人说的「坑儒」"（`qsh-n6`，kernel §4 故事 7 / §10.6 / 附录 A，notebook 考点卡 5）| number+quote | primary | 维基 Burning of books and burying of scholars：前 212 坑儒，活埋约 460，首见于《史记》 | ✅verified |
| 13 | "（《史记》是一百多年后司马迁写的，他记的人数和细节，后世有些史家存疑。但焚书这件事，是确凿的。）"（`qsh-n6`，kernel §5 引言 / §9 / §10.6，notebook 考点卡 5 + DBQ q3）| source-nuance | inference | 维基：现代史家质疑坑儒细节（首见司马迁《史记》、晚一世纪、汉有动机抹黑）；Michael Nylan 指焚书传说"经不起细究"；焚书本身史家公认。**史料分层处理精准** | ✅verified（题面 (d) 重点要求，作者已做到位）|
| 14 | "我修阿房宫——一座大到史书说「上面能坐一万人」……不过它到我死都没真正建完"（`qsh-n7`，kernel §3 故事 8 / 附录 C）| absolute | encyclopedia | 维基 Epang Palace：前 212 始建，仅前殿建成即未完工，秦亡（前 206）前未成 | ✅verified |
| 15 | "在骊山给自己修陵墓……最多时役使了号称七十万人"（`qsh-n7`，kernel §3 故事 8，notebook 考点卡 7）| number | primary | 维基 Mausoleum of Qin Shi Huang（引《史记》）：70 万+ 役夫——但《史记》原文为**阿房宫 + 骊山陵合计** 70 万，非骊山陵一项 | ⚠️downgrade-wording（见红旗 #2）|
| 16 | "兵马俑……一直到公元 1974 年才被几个打井的农民挖出来"（`qsh-n7`，kernel §3 故事 8 / 附录 A，notebook 考点卡 7）| date | encyclopedia | 维基 Terracotta Army：1974-03-29 杨志发等农民打井时发现 | ✅verified |
| 17 | "我吃方士炼的丹药——那里头很可能有水银，越吃越伤身"（`qsh-n8`，kernel §3 故事 8 / 反讽④）| inference | encyclopedia | 维基/Britannica Qin Shi Huang：一说服含汞丹药中毒，求长生反伤身（"很可能/一说"措辞已留余地）| ✅verified |
| 18 | "公元前 210 年，我在第五次出巡的路上，死了。死在沙丘……享年约 49 岁"（`qsh-n8` / `ls-n8`，kernel §3 / §4 故事 9 / 附录 A，notebook 考点卡 8）| date | encyclopedia | 维基：前 210-07-12 第五次东巡，崩于沙丘，年 49（与前 259 生一致）| ✅verified |
| 19 | "临死前，我留了遗诏，要让……长子扶苏回来继位……身边几个最信任的人，就把我的遗愿改了"（`qsh-n8` / `ls-n8`，kernel §3 故事 9，notebook 考点卡 8）| causal | encyclopedia | 维基 Qin Shi Huang / Li Si：遗诏命扶苏继位；赵高联李斯篡改、赐死扶苏立胡亥（沙丘之变）| ✅verified |
| 20 | "公元前 208 年，我被……判腰斩（拦腰斩成两段）……刑场就在咸阳的街市上……还株连了全族"（`ls-n9`，kernel §3 / §4 故事 11 / 附录 A，notebook 考点卡 8）| date | encyclopedia | 维基 Li Si / Zhao Gao：前 208 赵高构陷，李斯受五刑、腰斩于咸阳市，夷三族 | ✅verified |
| 21 | "公元前 209 年……一队被征去戍边的农民，因为大雨误了报到的期限……陈胜、吴广，干脆反了"（`qsh-n9` / `cl-n9`，kernel §4 故事 10 / 附录 A，notebook 考点卡 8）| date+causal | encyclopedia | 维基 Chen Sheng and Wu Guang uprising：前 209-08 大泽乡，因雨误期（秦法误期当斩），陈胜吴广起义 | ✅verified |
| 22 | 引语「天下苦秦久矣」（`qsh-n9`，kernel §5D）/「王侯将相，宁有种乎」（`cl-n9`，kernel §5D / notebook）| quote | primary | 《史记·陈涉世家》原文；维基 Chen Sheng uprising 转载——两句均对得上一手文本 | ✅verified |
| 23 | "公元前 206 年，我亲手缔造的大秦帝国，垮了。从我称始皇帝那年算起，连十五年都没到"（`qsh-n9` / `cl-n9`，kernel §4 故事 11 / 附录 A，notebook 考点卡 8）| date+number | encyclopedia | 维基 Qin dynasty：前 206 子婴降，秦亡（前 207 鸿门/破咸阳）。221→206 = 15 年整，"连十五年都没到"算术成立 | ✅verified |
| 24 | "后来的汉朝，骂着我残暴，却几乎原封不动地继承了我这套制度……「汉承秦制」"（`qsh-n9`，kernel §6 / §9，notebook 考点卡 8）| causal | textbook | 主流史学共识"汉承秦制"：郡县/官僚/标准化为汉所承（睡虎地秦简等近世考古佐证制度史意义）| ✅verified |
| 25 | "我们对秦的认知，主干来自司马迁《史记》——成书于秦亡百余年后的汉代……传世的秦形象天然偏黑"（kernel §5 引言 / §9，notebook keyFigures 司马迁 + DBQ q3）| source-nuance | inference | 维基 Sima Qian（约前 145-86）/ Records：汉代成书，"胜者书写败者"史观为现代史学共识。**historiography 偏向点处理到位** | ✅verified（题面 (k) 要求，已做）|
| 26 | "打了五百多年的仗……天下一直是七个国家互相砍杀"（`qsh-n1`；kernel §1 作"分裂了五百多年的华夏"）| number+representativeness | textbook | 战国（约前 475-221）仅约 254 年；"七雄"配置仅描述战国。"五百多年"须含春秋（前 770-476）方成立，但春秋非"七国"格局 | ⚠️downgrade-wording（见红旗 #1）|
| 27 | "戍卒"为**虚构桥接人物**，`cl-n8` 显式透明化"我这个『我』，是后人替千千万万真实存在过、却一个字都没留下的人，拼出来的一个声音"（conscript lens 全程，kernel §3 主角卡 + meta.notes）| dramatization | dramatization | 史料层：戍卒/刑徒大规模征发修长城确凿；具体个人姓名/家庭/心理为叙事补充。**文中三处透明标注（`cl-n8` + kernel §3 + meta.notes），符合 composite 红线** | ✅verified（已透明标注，非红旗）|

---

## 🚩 红旗句（创始人必审）

> 全部为 ⚠️downgrade-wording（措辞收紧），**无事实硬伤、无缺来源、无演绎未标注**。按影响排序。

1. **[#26]** `「打了五百多年的仗，从我往上数好几代，天下一直是七个国家互相砍杀」`（`qsh-n1`）
   - **问题**：把"五百多年"与"七个国家互相砍杀"**绑在一句**。严格说：**战国**（前 475-221）只有约 254 年，"战国七雄"这个**七国并立**的配置也只属于战国这段。要凑足"五百多年"，必须把**春秋**（前 770-476，约 294 年）也算进去——但春秋是上百个小国、不是"七个国家"。所以"五百多年" + "一直是七国互砍"两个限定相互矛盾。注意：kernel §1 的写法"分裂了五百多年的华夏"是**对的**（春秋+战国≈548 年的分裂可成立），问题只在 `qsh-n1` 把"七国"也拉进了"五百多年"。
   - **建议**：拆开两个尺度。例如"打了几百年的仗……到我这一代，天下是七个国家互相砍杀"（去掉"五百多"与"七国"的硬绑定）；或保留"五百多年的分裂/战乱"但把"七个国家"改为"先是上百个小国互相吞并，到后来剩七个大国互砍"。这是全 topic 唯一一处**内部自相矛盾**的数字措辞，优先级最高（但仍属 7 年级层面可接受的简化，非事实硬伤）。

2. **[#15]** `「在骊山给自己修陵墓——一修就是几十年，最多时役使了号称七十万人」`（`qsh-n7`，notebook 考点卡 7 同）
   - **问题**：《史记·秦始皇本纪》原文是"隐宫徒刑者七十余万人，乃分作**阿房宫**或作**骊山**"——70 万是**阿房宫 + 骊山陵两处工程合计**的役夫数，文中（及 notebook）把它**单独归给骊山陵一项**。文中已用"号称"留了余地，故为软项而非硬伤。
   - **建议**：改为"修阿房宫和骊山陵，最多时号称役使七十万人"（把 70 万还原为两大工程合计）；或保留"骊山陵"但加"（连同阿房宫）"。优先级中。

3. **[#8]** `「那种砖石长城是一千六百多年后明朝修的」`（`qsh-n5`，kernel §10.1 / 附录 D，notebook 考点卡 6 作"晚一千六百多年"）
   - **问题**：核心史实（夯土 vs 明砖石、时代错置破除）**完全正确**，无需改。唯一可收紧的是"一千六百多年"这个具体差值：秦长城约前 215，明长城主体修于 15-16 世纪（约 1450-1600 CE），差值约 1650-1800 年；若以明朝立国 1368 起算则约 1580 年。"一千六百多年"落在合理区间偏低端，**可保留**。
   - **建议**：可保持现状；若要更稳妥可改为"一千六百多年甚至更晚"或"一千五六百年后"。**列此条仅为透明，非必改**，最低优先级。

4. **[#17]** `「我吃方士炼的丹药——那里头很可能有水银，越吃越伤身」`（`qsh-n8`，kernel 反讽④"吃含汞丹药反而伤身"）
   - **问题**：始皇帝死于汞中毒是**一种假说**（hypothesis），非定论；尸检无从查证。storyboard 已用"很可能"恰当地标为推测，处理**合规**。但 kernel §3 主角卡与 §4 反讽④的"吃含汞丹药反而伤身"**陈述更肯定**，略去了"假说"的不确定性。
   - **建议**：storyboard `qsh-n8` 无需改（"很可能"已到位）；kernel 反讽④可加一字变"吃**疑**含汞丹药"或"据信含汞"以与 storyboard 同口径。最低优先级。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| **一个戍卒**（无名农民 + 妻 + 未成年子 + 内心独白 + 死在北边）| conscript-laborer（DEFAULT，11 节点）| **整个人物为虚构桥接**：姓名/家庭/心理为叙事补充；史料确证的仅"戍卒刑徒被大规模征发修长城/陵墓/驰道，死者甚众" | ✅**三处透明标注**：`cl-n8`"我这个『我』，是后人替千千万万真实存在过、却一个字都没留下的人，拼出来的一个声音" + kernel §3 主角卡"**这是一个虚构人物**……N8 显式向学生透明化" + meta.notes |
| 小 U Xiao U（12 岁 ABC 同伴）| notebook | **教学脚手架角色**，非历史人物、不进史实正文，仅作"学习同伴"voice | N/A — 教学装置，非史实合成人物（与制宪 topic 的"你就是 TA"同类）|
| "你就是 TA"第二人称代入（各 lens N4 peak）| 全 3 lens | 把读者置入主角内心做选择，属**教学代入手法**，非伪造史实人物 | N/A — 教学手法，非合成角色 |
| 宴会上"当面批郡县的读书人"（`qsh-n6` / `ls-n6`）| qin-shi-huang / li-si | 《史记》载前 213 廷议确有博士（淳于越）非难郡县、主复古；文中作泛指"有读书人"，未具名虚构 | ✅可接受（有《史记》廷议史实支撑，未捏造具名人物）|
| 李斯临刑"牵黄狗出上蔡东门追兔子"（`ls-n9`，kernel §3）| li-si | **此为《史记·李斯列传》有载的真实记述**（"吾欲与若复牵黄犬俱出上蔡东门逐狡兔"），非演绎 | ✅非合成——一手史料原话之转述 |

**结论**：本 topic 唯一的完全虚构人物是**戍卒**（受影响者 lens 主角），且已在 storyboard 节点内 + narrative kernel 主角卡 + meta.notes **三处**透明标注为"后人替无名者拼出的声音"，符合 `HISTORY_EVIDENCE_LAYER.md` composite 透明红线。小 U/第二人称代入为教学装置，李斯黄狗语为《史记》原话，均非违规合成。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— qin-shi-huang（perpetrator-actor，11 节点）/ li-si（lonely-mediator，11 节点）/ conscript-laborer-receiving-end（receiving-end，DEFAULT，11 节点）+ notebook（小 U 8 考点卡 + 3 DBQ）。红旗分布：#26 在 `qsh-n1`；#15 在 `qsh-n7` + notebook 考点卡 7；#8/#17 跨 storyboard 与 kernel。
- **题面重点核查项逐条结论**：
  - (a) 统一 221 BCE + 始皇帝称号 → ✅（claim #1/#2）
  - (b) 长城夯土非明砖石、晚约 1600 年 → ✅ **storyboard/kernel/notebook 三处都正确破除**（claim #8，仅"1600 多年"差值软收紧）
  - (c) 孟姜女标为后世传说非秦史 → ✅ **正确，且未进史实正文**，仅在清坑专区（claim #9）
  - (d) 焚书确凿 vs 坑儒据《史记》、学界存疑、不当无可置疑事实 → ✅ **三处 anti-fab 括号 + DBQ q3 专练 sourcing**（claim #12/#13）
  - (e) 留存的书（医药/农/卜筮）→ ✅（claim #11）
  - (f) 标准化 书同文小篆/车同轨/度量衡/半两钱/郡县制 → ✅（claim #5/#6）
  - (g) 李斯丞相、前 208 被处死 → ✅（claim #20，且腰斩+五刑+夷三族细节准确）
  - (h) 始皇帝前 210 出巡途中死 → ✅（claim #18）
  - (i) 兵马俑 1974 出土 → ✅（claim #16）
  - (j) 秦亡前 206（陈胜吴广前 209）→ ✅（claim #21/#23）
  - (k) 《史记》汉代成书、史观偏向 → ✅（claim #25，§9 historiography 专节 + keyFigures 司马迁卡 + DBQ q3）
  - (l) BCE 算术 → ✅（221-206=15、灭六国年份链、259 生/210 死=49 岁，全自洽）
  - (m) 数字/死亡数 → 坑儒 460+（✅据《史记》且标存疑）/ 蒙恬 30 万（✅）/ 役夫 70 万（⚠️归属见 #15）/ "死者甚众"（✅作者刻意用此模糊原话，未编造具体死亡总数，处理克制得当）
- **直接引语分层核验**（本 topic 高风险类，全部 ✅）：
  - *真实史料*：「天下苦秦久矣」「王侯将相，宁有种乎」（《史记·陈涉世家》）/ 李斯"牵黄犬出上蔡东门逐狡兔"（《史记·李斯列传》）/ 李斯老鼠论"人之贤不肖譬如鼠矣，在所自处耳"（kernel §3，《史记》）—— 均对得上一手文本。
  - *演绎/概括句*：三个主角的第一人称内心独白属叙事重构；戍卒第一人称已在 `cl-n8` 透明标注为"后人拼出的声音"。**无把演绎句排成史料档案样式的违规。**
- **用到的外部核实来源**：Wikipedia（Qin's wars of unification / Qin Shi Huang / Li Si / Zhao Gao / Burning of books and burying of scholars / History of the Great Wall / Qin's campaign against the Xiongnu / Epang Palace / Mausoleum of Qin Shi Huang / Terracotta Army / Chen Sheng and Wu Guang uprising / Warring States period / Names of China / Lady Meng Jiang / Sima Qian）、Britannica（Qin Shi Huang / Great Wall / burning of the books / terra-cotta army）、Columbia AFE（李斯奏议一手译本）。
- **gate 判定**：按 `HISTORY_EVIDENCE_LAYER.md` §6 Gate 2（Fact Ledger）—— 所有高风险 claim 均有来源，**无 needs-source 缺口、无 ✋flagged 事实硬伤**。题面最易出错的两处（长城时代错置 / 坑儒史料分层）作者已主动做到位。4 条红旗全为低优先级措辞收紧，建议优先处理 **#1（五百多年×七国 自相矛盾）** 与 **#2（70 万役夫归属阿房宫+骊山陵合计）**，#3/#4 可保留或同批轻改。即使红旗全不改，也无事实错误，可过 Gate 2。
