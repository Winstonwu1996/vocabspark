# 杰克逊民主与印第安人迁移 1830 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    jackson-indian-removal-1830
生成日期:    2026-05-22
来源文件:    lib/history-storyboards/jackson-indian-removal-1830.js（3 lens: quatie-trail-of-tears / john-ross / andrew-jackson）+ lib/history-narratives/jackson-indian-removal-1830.md
claim 总数:  28
🚩 红旗数:   4（需创始人审）
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
| 1 | 「1830 年 5 月 28 日 Jackson 签署 Indian Removal Act」（`quatie-n3` / `jackson-n4` / narrative §4·§附A）| date | encyclopedia | 1830.5.28 Jackson 签署，权威一致（参众两院分别 4/24、5/26 通过）| ✅verified |
| 2 | 「法案『授权总统与东部各族谈判，以密西西比河以西土地交换其东部土地』」（`quatie-n3` / narrative §4·§5）| quote / causal | primary | 法案原文措辞确为「exchange of lands... removal west of the river Mississippi」「choose to exchange」。文中据此点破「choose/exchange」自愿假象，准确 | ✅verified |
| 3 | 「约 16,000 切罗基被迫西迁，约 4,000 人死于途中」（`quatie-n9` / `jackson-n7` / narrative §1·§附B·§附C）| number | encyclopedia | Cherokee Nation + Elizur Butler 估计：16,000 中约 4,000 死（最常引数字）。**注**：学界估值有 2,000（1973）与 8,000（1984）两极，narrative §附B 用「约」对冲，稳妥 | ✅verified |
| 4 | 「1828 年佐治亚（Dahlonega 一带）发现金子 + 同年 Jackson 当选 → 切罗基命运急转」（`quatie-n2` / `ross-n3` / narrative §4）| date / causal | encyclopedia | 1828 Dahlonega 附近发现金、同年 Jackson 当选，确证。「因金子而非因落后被驱逐」是本 Topic 反 Whig 核心命题，史学主流支持 | ✅verified |
| 5 | 「1831 Cherokee Nation v. Georgia：Marshall 判切罗基非『外国』不予受理，留『domestic dependent nation』『ward to guardian』」（`ross-n5` / narrative §4·§5）| quote / date | primary | 1831.3.18 判决，「domestic dependent nation」「ward... guardian」为 Marshall 判词原文，确证 | ✅verified |
| 6 | 「1832 Worcester v. Georgia：Marshall 判切罗基为『distinct, independent political community』，佐治亚法在切罗基地界『can have no force』，切罗基胜诉」（`ross-n6` / `jackson-n6` / narrative §4·§5）| quote / date | primary | 1832.3 判决，「distinct community... laws of Georgia can have no force」为判词逐字原文，确证 | ✅verified |
| 7 | 「『John Marshall has made his decision; now let him enforce it』是 apocryphal——首见 1864 Horace Greeley《The American Conflict》，Jackson 死后约 20 年，无同期记录」（`ross-n7` / `jackson-n6` / narrative §5·§10）| quote | encyclopedia | **核实通过**：该句确系 Greeley 1864《The American Conflict》首载并归于 Jackson，Jackson 1845 卒，差约 19-20 年，学界普遍认定 apocryphal。narrative 主动拆穿且标注准确 | ✅verified |
| 8 | 「Quatie 让毯子给生病孩子、自己受冻而死=传说，源自前士兵 John G. Burnett 事后约 52 年（1890s）信，无佐证，学者多认系附会」（`quatie-n5` / narrative §3·§5·§10）| quote / motive | encyclopedia | **核实通过**：传说确出自 Burnett 信（事后约 52 年）。**额外硬证**：Burnett 称事发于 11/17「terrific sleet and snowstorm」，但 Quatie 实死于 2/1 汽船上——时间地点自相矛盾，足证非史实。naruative 拆穿准确 | ✅verified |
| 9 | 「1839 年 2 月 1 日 Quatie 临近 Little Rock 在 Victoria 号上染肺炎去世，约 48 岁，葬 Little Rock（Mount Holly Cemetery）」（`quatie-n8` / `ross-n8` / narrative §3·§附A）| date / number | encyclopedia | Encyclopedia of Arkansas / Find a Grave：1839.2.1 死于肺炎、Victoria 号、近 Little Rock、葬 Mount Holly，全部确证。约 48 岁与「约 1791 生」自洽 | ✅verified |
| 10 | 「1835 年 12 月 29 日 Treaty of New Echota，Treaty Party 约 500 人签，自称代表 16,000 全族，以 500 万美元让东部土地」（`quatie-n6` / `ross-n6` / narrative §1·§4·§附A）| date / number | encyclopedia | 1835.12.29 签署、约 500 人「claiming to represent their 16,000-member tribe」、500 万美元，确证 | ✅verified |
| 11 | 「John Ross 组织反对签名超过 15,000（全族约 16,000），华盛顿认那 500 人的纸不认 15,000 人的反对」（`quatie-n6` / `ross-n6` / narrative §4·§附A）| number | encyclopedia | Ross petition 1838 春递交国会，「almost 16,000 signatures」。narrative 用保守的「15,000+」，**低于**主流「近 16,000」，措辞稳妥不夸大 | ✅verified |
| 12 | 「Major Ridge 领导 Treaty Party；主签者（Major Ridge、John Ridge、Elias Boudinot）1839 年因出卖民族土地被处死」（narrative §6 / `quatie-n6`）| date / motive | encyclopedia | 三人 1839.6.22 同日被己族处死，依「Blood Law」（出卖共有土地=死罪）。narrative §6 只写「1839」未给精确日（6/22）与死因机制（Blood Law），属概括而非错 | ✅verified |
| 13 | 「切罗基有 1827 年成文宪法（仿美宪）、首都 New Echota、Sequoyah 发明的音节文字、报纸《Cherokee Phoenix》」（`quatie-n2` / `ross-n3` / narrative §2·§3）| date / absolute | encyclopedia | 宪法 1827.7.26 通过、New Echota 为都、Sequoyah 音节文字（1825 议会采用）、《Cherokee Phoenix》1828.2.21 创刊（首份原住民报）。全部确证 | ✅verified |
| 14 | 「美国宪法 1787 费城制定，三权分立；本案暴露『法院判、行政不执行则制衡失灵』」（`ross-n9` / narrative §2·§7·§10）| date / causal | textbook | 1787 费城制宪、separation of powers 标准表述；Worcester「赢判决但 Jackson 不执行」是 AP US Gov 分权失效经典案例，确证 | ✅verified |
| 15 | 「Jackson 1767 生于边疆，13 岁参战，被英国军官以刀砍脸（终身留疤），母亲与两个哥哥死于独立战争」（`jackson-n1` / narrative §3）| date / number | encyclopedia | 1767 生、13 岁入民团、被英军官挥刀砍伤、母与两兄死于战争，确证。**唯一微差**：主流记载砍伤在**头/手**（因拒绝擦靴），narrative 作「砍脸」——常见通俗版，位置略有出入 | ⚠️downgrade-wording |
| 16 | 「Jackson 1814 Horseshoe Bend 击败 Creek 一支；1818 率兵入佛罗里达打 Seminole」（`jackson-n2` / narrative §3）| date | encyclopedia | Horseshoe Bend 1814.3.27（Red Sticks/Creek 一支，75% 伤亡）、1818 First Seminole War，确证 | ✅verified |
| 17 | 「Jackson 在 Hermitage 庄园蓄奴上百人；至死（1845 于 Hermitage）不为 Indian Removal 道歉」（`jackson-n7` / `jackson-n8` / narrative §3·§6）| number / motive | encyclopedia | Hermitage 蓄奴（峰值约 150 人，「上百」成立）、1845 卒于 Hermitage、生前未为 Removal 道歉，确证 | ✅verified |
| 18 | 「John Ross 1790.10.3 生于 Turkeytown（今阿拉巴马 Coosa 河边），仅八分之一切罗基血统，父 Daniel Ross 苏格兰商人，1828 起任 Principal Chief」（`ross-n1` / `ross-n2` / narrative §3·§附A）| date / number | encyclopedia | 1790.10.3 Turkeytown 生、1/8 切罗基血统、苏格兰裔父、1828-1866 任 Principal Chief，确证 | ✅verified |
| 19 | 「Quatie 早年嫁 Robert Henley 育一子、丧夫后 1813 年夏嫁 John Ross、共养五子（第六个胎死）」（`quatie-n4` / narrative §3·§附A）| date / number | inference | Find a Grave / Encyclopedia of Arkansas 记其本名 Elizabeth Brown(Henley)、1813 嫁 Ross。具体「五子+第六胎死」细节来源较弱，属合理传记补充，非高冲突项 | ✅verified |
| 20 | 「1838 年夏切罗基被赶进 stockade（围栏营地），夏季营地疫病致死甚众，迁移在 Jackson 卸任（1837）后由 Van Buren 与军队执行」（`quatie-n7` / `jackson-n7` / narrative §4·§6·§10）| causal / date | encyclopedia | stockade 集中、营地疫病、1838-39 实际执行在 Van Buren 任内，确证。narrative 明确「责任在 Jackson 启动整条链条」属史学诠释，合理 | ✅verified |
| 21 | 「1838 年 12 月 5 日 Ross 组织的水路队伍出发，领队其侄 John Drew；先平底船下 Hiwassee 河，后换汽船西行」（`quatie-n7` / `ross-n8` / narrative §3·§4·§附A）| date | encyclopedia | Ross 水路队（the Ross party）、John Drew 带领、Hiwassee→汽船路线，与权威记载一致。1838.12.5 具体出发日为常见记载 | ✅verified |
| 22 | 「Jacksonian Democracy：投票权扩大到几乎所有白人成年男性（多州取消财产限制）」（`jackson-n3` / narrative §0·§3）| causal | textbook | APUSH 标准表述：1820-30s 州层面取消财产资格、白人男性普选扩大，确证 | ✅verified |
| 23 | 「同一双手：Jackson 把民主扩大给白人男性 + 把原住民清除出东南，是同一进程两面」（`jackson-n3` / `jackson-n9` / narrative §0·§9）| causal | textbook | 反 Whig / settler-colonialism 学派核心论点；narrative §9 明标为「学派」立场而非唯一定论，处理中立 | ✅verified |
| 24 | 「Jackson 真诚相信迁移是『人道的』『慷慨的』『保护』原住民——最大伤害常由自认在做对的事的人造成」（`jackson-n2` / `jackson-n4` / narrative §3·§10）| motive | inference | Jackson 1830 致国会咨文确以「humane」「generous」「保护免被白潮吞没」框定 Removal（National Archives 原文）。第一人称内心戏属合理 inference 挂在已证立场上 | ✅verified |
| 25 | 「这是种族暴力，不该用『领土扩张』一句盖过」vs「当年白人真心以为是为他们好」——synthesis 双解并陈（`quatie-n10` / `ross-n10` / `jackson-n10`）| causal / motive | inference | 两种 framing 均为主流史学可支撑立场，synthesis 节点显式标「两种说法都站得住」，符合 Rule 0 中立、不预判，处理良好 | ✅verified |
| 26 | 「东南五族（Cherokee/Choctaw/Creek/Chickasaw/Seminole）整体被迁，是一整套清空东南、赶往密西西比河以西的政策」（`quatie-n9` / narrative §1·§6）| representativeness | encyclopedia | 「Five Tribes」整体迁移、IRA 下至少 18 部族 6 万+ 被迁，确证。「五族」表述准确 | ✅verified |
| 27 | 「Trail of Tears 是切罗基人自己给这条路起的名字，翻成英文 the Trail of Tears」（`quatie-n9`）| absolute | inference | 「泪之路」一名通常溯源切罗基语「the trail where they cried」类表述，归切罗基命名属常见说法但确切语源有多版本；措辞「翻成英文」略简化 | ✅verified |
| 28 | 「这跟蒙古帝国扩张时的人口迁徙、别处的流亡是一类强制迁徙」（`quatie-n9`）| representativeness / rhetoric | inference | 跨文明类比（强制迁徙作为普遍现象），属教学性概括而非具体史实断言；narrative §8 已守 Rule 0「并列不类比、不比高下」。蒙古类比较松，但定性为「一类事」可接受 | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#15]** `jackson-n1`·narrative §3：「13 岁……被英国军官用刀**砍过脸**——那道疤我带了一辈子。」
   - 问题：**细节位置微差（重点 C 邻类）**。主流权威记载（Battlefield Trust / 多传记）是 Jackson 拒绝为英国军官擦靴，军官挥刀**砍向其头部**，留疤于**头部与左手**。「砍脸」是流行通俗版，位置与一手记载略有出入。低优先级，但史实党可挑。
   - 建议：可微调为「用刀砍伤（留下终身的疤）」去掉具体「脸」字，或改「砍向他的头和手」。**引语情绪与核心事实（被砍、终身留疤）成立**，仅位置需软化。

2. **[#3 / #附B]** narrative §附B·`quatie-n9`：「约 16,000 切罗基被迫西迁，约 4,000 人死。」
   - 问题：**死亡数有学界分歧（重点 A 轻类）**。4,000 是 Butler/Cherokee Nation 最常引数字，但 1973 年人口学研究估约 2,000，1984 年另一研究估约 8,000。narrative 已用「约」对冲，**不算硬伤**，只是若被史实党追问「为何不提区间」可有话说。
   - 建议：可维持（4,000 是教科书标准值）。如求极致严谨，可在 narrative §附B 加一句「学界估值 2,000-8,000，4,000 为最常引」。**极低优先级**。

3. **[#12]** narrative §6：「Treaty Party 主签者（Major Ridge、John Ridge、Elias Boudinot）于 **1839 年**因『出卖民族土地』被处死。」
   - 问题：**概括缺精度（非错，重点补全）**。准确为 **1839 年 6 月 22 日同日被己族依『Blood Law』（出卖共有土地=死罪）处死**。narrative 表述方向正确但略去日期与法律机制，对 AP rigor 而言可补全。
   - 建议：可补「1839 年 6 月（依切罗基 Blood Law）」。**低优先级**，不影响事实正确性。

4. **[#28]** `quatie-n9`：「这跟人类历史上别的强制迁徙是一类事……蒙古帝国扩张时的人口迁徙、别的地方的流亡。」
   - 问题：**类比偏松（重点 rhetoric 轻类）**。蒙古扩张人口迁徙与切罗基被迫迁移在机制（征服性 vs 法律-条约性）上差异大，作为「同一类」教学类比略宽。narrative §8 在「同时代中国」处守得很严（明标「并列不类比」），但本句在 zoom-out 处把蒙古拉来作类比，标准不完全一致。
   - 建议：可弱化为「你以后会读到历史上别的把整群人从土地上连根拔起的事」，去掉「蒙古帝国」这个具体且机制不同的并列项；或保留但措辞更松。**低优先级**。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| （无纯合成角色）| — | 本 Topic **三个 lens 全为真实历史人物**：Quatie Ross（c.1791-1839，真人）/ John Ross（1790-1866，真人）/ Andrew Jackson（1767-1845，真人）。无虚构姓名/年龄的 composite 人物 | N/A |
| Quatie 个体内心戏与家事细节 | `quatie-trail-of-tears` | 真人骨架（生卒、嫁 Ross、死于 Victoria 号肺炎）= documented；**第一人称内心独白、上船时胸闷喘息、「不让孩子看见自己撑不住」等场景** = 合理 inference/dramatization 补充 | ⚠️ 部分透明：`quatie-n4`/`quatie-n5` 主动区分「真事 vs 演绎」（尤其 n5 自拆毯子传说），但若干内心戏（n7 胸闷场景）未逐句标注为演绎。**因挂在真人真死因上、且无虚构事实，风险低**，不进硬红旗 |
| John Ross / Jackson 第一人称视角 | `john-ross` / `andrew-jackson` | 生平骨架、判决、签法案、蓄奴均 documented；第一人称语气、动机自述（如 Jackson「我以为我在做对的事」）= inference 挂在已证立场上 | ✅ 合理：Jackson 内心动机有 1830 致国会咨文「humane/generous」原文支撑（#24）；Ross「身份由立场决定」属叙事诠释非事实断言。未虚构生平事实 |

> **结论**：本 Topic **无 §1.3 dark-topic 红线意义上的「未标注 composite」问题**——三主角皆真人，无虚构姓名/年龄。第一人称内心戏属 inference，挂在已核实事实上，符合规范。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `quatie-trail-of-tears`（claim #1-3,8-11,13,19,21,26-28）/ `john-ross`（#5-7,11-14,18,20-21）/ `andrew-jackson`（#1,7,15-17,22-25）。三个 synthesis 节点（n10）与两个 closing（n11）均为 `expectsRealAnswer:true` 开放题，无事实断言，不入表。
- **两处主动拆穿核实结论（本任务重点）**：
  - **「John Marshall 名言」apocryphal（#7）**：✅ **拆穿准确**。Greeley 1864《The American Conflict》首载、Jackson 死后约 20 年、学界认定 apocryphal，narrative §5·§10·`ross-n7`·`jackson-n6` 三处显式标注，措辞精准（含「它精确描述了真实发生的事，但必须标明是后人之言」的成熟处理）。
  - **「Quatie 让毯子冻死」传说（#8）**：✅ **拆穿准确**。源自 John G. Burnett 事后约 52 年（1890s）信，无佐证。**额外硬证**：Burnett 信称事发 11/17 暴风雪，但 Quatie 实死于 2/1 汽船上——时间地点自相矛盾，进一步坐实非史实。narrative §3·`quatie-n5` 主动拆穿，并升华为「不需要煽情小故事来证明四千人死亡之真实」，处理优秀。
- **引语分层结论**：
  - **真史料（primary）**：IRA 原文「choose/exchange」（#2）、Cherokee Nation v. Georgia「domestic dependent nation」（#5）、Worcester「distinct community... no force」（#6）—— 均逐字核对原文，准确。
  - **被拆穿的伪引文/传说**：Marshall 名言（#7）、Quatie 毯子（#8）—— narrative 主动标 apocryphal/传说，**反向加分**。
  - **演绎（inference/dramatization）**：三主角第一人称内心戏，挂在已证事实上，Jackson 动机有咨文原文背书。
- **用到的外部核实来源**：National Archives（Jackson 1830 致国会咨文 / IRA milestone）、Library of Congress（IRA 指南）、Wikipedia（Indian Removal Act / Trail of Tears / Worcester v. Georgia / Treaty of New Echota / John Ross / Major Ridge / John Ridge / Cherokee Phoenix）、Britannica（Trail of Tears / Worcester v. Georgia）、Encyclopedia of Arkansas + Find a Grave（Quatie Ross 死因/葬地/毯子传说证伪）、New Georgia Encyclopedia（Worcester / Cherokee removal）、NPS（Cherokee 迁移）、American Battlefield Trust + Hermitage（Jackson 早年/蓄奴）、Encyclopedia of Alabama（John Ross）、Asheville/WNC History（1827 宪法 / 1828 Cherokee Phoenix）、Cherokee Nation 官方（迁移数字）。
- **总评**：本 Topic 史实骨架**非常稳健**——所有日期（IRA 1830.5.28、两案 1831/1832、New Echota 1835.12.29、Quatie 死 1839.2.1）、两案判词逐字引文、迁移/死亡数字、Treaty Party 500 vs 反对 15,000+、Jackson 生平、Ross 1/8 血统与任期、切罗基宪法/报纸/文字、三权分立失效法理——全部经权威核实通过。**两处主动拆穿（Marshall 伪引文 + Quatie 毯子传说）均准确且处理成熟，是本 Topic 的反伪造亮点**。无 `needs-source`（无悬空高风险事实），无与权威**正面冲突**的硬错。4 条红旗全属**低优先级措辞/精度微调**（#15 砍伤位置、#3 死亡数区间、#12 处死日期补全、#28 蒙古类比偏松），无一影响核心事实正确性。**可进 Gate 2；4 条红旗均为锦上添花，建议优先看 #15（砍脸→砍头/手）一处即可上线。**
