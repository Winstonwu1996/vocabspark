# History 课程全量审核报告 — 2026-06-03

> 55 门线上课，历史老师+教育专家多 Agent 审 (58 agent / 6.3M token) + Codex 收口。
> 5 维：覆盖完整性 / 考点覆盖 / 正确性 / 可读性 / 其他。
> ⚠️ 报告「模式1 flip 四门」已过时——haitian/meiji/russian/contemporary-us 已上线。

---

I'll synthesize all the audit results into a master report. Let me analyze the data and produce the consolidated report directly.

# 历史课程审核 Master 报告

数据源:55 门已上线课 + 双轨完整性评估。本报告供 Codex 提炼「收益最大的 10 条」,各节按影响力排序。

---

## 1. 覆盖完整性 — 双轨缺失主题(合并去重,按优先级)

### 1.1 立即可消除(已建资产,只缺 flip,成本最低收益最高)
四门课已在 `lib/history-topics.js` TOPIC_REGISTRY 但 `available:false`,题目清单却误列为「线上」(代码与清单不符):
- **haitian-revolution-1791** [high] — 补 AP World U5 革命链;pilot 已建 narrative(branch claude/history-courses, 5be7f91);2024 AP 真题考过
- **meiji-restoration-1868** [high] — 补 AP World U6;非西方成功工业化标杆,与中国洋务运动失败强对照(华裔必考)
- **russian-revolution-1917** [med] — 补 AP World U7;现仅被 WWII 课捎带,应独立
- **contemporary-us-1980** [low] — APUSH P9,占比小但当前是断层

### 1.2 世界史轨(AP World + 加州 HSS)缺口 — 新建优先级
- **[high] AP World Unit 2 贸易网络课**(丝路 + 印度洋 + 跨撒哈拉整合)— 当前最大 AP 结构缺口;Unit 2 占 8-10%,comparison/causation 高频;现丝路只被 han-china 捎带,印度洋贸易圈完全空白
- **[high] Mesopotamia/Sumer** — 四大古文明缺一腿;CA 6.2 核心,「文明四要素」最经典案例;现仅有 hammurabi(法典切片)
- **[high] Indus Valley 哈拉帕** — CA 6.5 要求古印度从印度河讲起;现只有 mauryan(前261),独缺印度河起点
- **[high] Early Humans & Neolithic Revolution** — 整条古代轨缺开篇;CA G6 第1章,华裔家长会立刻发现对不上
- **[high] Ancient Israel & 一神教起源** — CA 6.3 独立单元;是 islamic-rise/crusades/reformation 宗教 through-line 源头;现仅 babylonian-exile 擦边
- **[high] 亚洲帝国主义(鸦片战争/英属印度)** — AP World U6 必考,华裔切身(中国近代史开端);现 scramble-for-africa 只覆盖非洲
- **[med] Gupta 印度黄金时代** — CA 6.5 要求;现印度古典史断在 Mauryan
- **[med] Persian Empire (Achaemenid)** — AP 古典帝国行政对照关键;可与秦汉郡县制对照
- **[med] Latin American Independence (Bolívar/San Martín)** — AP World U5 革命四件套缺一角
- **[med] Interwar 极权主义兴起** — WWI→WWII 间因果断档

### 1.3 美国史轨(APUSH + 加州)缺口
- **[high] 越战 + 1960s-70s 动荡** — P8 体量最大考点,当前整轨最大时段空白
- **[high] Cold War Home Front(McCarthyism/郊区化)** — P8 国内维度完全缺失;可呼应排华史
- **[high] Spanish-American War 1898/美国海外帝国** — P7 开场必考;门户开放可桥接瓜分中国
- **[high] Road to Revolution(French & Indian War + 帝国危机)** — 现 thirteen-colonies→american-revolution 之间「革命无因」
- **[med] Colonial America 深化(大觉醒/三角贸易/Bacon)** — 整个 P2 仅 thirteen-colonies 一门撑
- **[med] Early Republic 1800-1828(1812战争/市场革命/密苏里妥协)** — Jefferson→Jackson 间整段缺失

### 1.4 结构性失衡(创始人拍板方向)
**美国史严重过密**(55 门中约 18 门),而世界史 AP 主标轨的亚洲帝国主义/拉美/印度洋贸易=0 门;西扩主题冗余(manifest-destiny/westward-expansion/jackson-indian-removal/native-americans 四门同叙事重叠)。**建议:后续新增课全部投向世界史/AP World 缺口,不再加美国史颗粒度;若要服务 APUSH 另开一条轨单独评估。**

---

## 2. 正确性问题 — 跨课汇总(按 severity 排,high 先)

### HIGH severity(学生会在 AP 写错/直接损害公信力)

| # | 课 | 问题(原文 → 更正) |
|---|---|---|
| 1 | **magna-carta-1215** | 「自由人约占 10%」全文不一致(10%/10-20%/20%),且严重低估。学界共识 villein 约 40-50%,自由人接近一半 → 改「fewer than half / 约 40-50% 为 villein」,全局搜索替换(narrative §5 + Cards 4/5 + storyboard 多节点) |
| 2 | **magna-carta-1215** | King John lens node 9 CN:「1789 年第 5 修正案 + 第 14 修正案」— 14 修是 1868 不是 1789 → 拆为「1791 权利法案第5修 / 1868 第14修」 |
| 3 | **reformation-1517** | Sister Agnes N3 EN:「houses with two hundred sisters or more」— 把「年收入 200 镑」误译成「200 位修女」(CN 正确,翻译层硬伤,4-agent review 已标 P0 未修)→ 'annual income of two hundred pounds or more' |
| 4 | **tang-song-china** | 李清照改嫁:storyboard lqz-n9 写 1135 年 51 岁,narrative 写 1132 年 49 岁(学界主流)→ storyboard 改 1132 年 49 岁 |
| 5 | **renaissance-1500** | 郑和「比哥伦布早 87 年到非洲东岸」— 到东非约 1418,算到 1492 约 74 年 → 改「约 70 年」或删「到非洲东岸」限定。同课 Needham Hypothesis 5「活字主要印经书」不准确(明商业印刷发达)→ 改「汉字活字成本高制约传播」。两处都在中国桥,华裔高能见度 |
| 6 | **mali-empire-1235** | notebook mansa-musa-hajj 卡:Cairo 金价跌「25%」「12 年」— 与本课所有其他文件的「约12%」「5-10年」矛盾,且无 al-'Umari 支持 → 改 ~12% / 5-10 年 |
| 7 | **mali-empire-1235** | notebook timbuktu 卡:Sankoré「25,000 学生」未标时代 — 25,000 是 16 世纪桑海峰值,曼萨穆萨 14 世纪约 5,000-10,000(narrative 已纠正,notebook 撤销了)→ 加时代限定。Q3 同错 |
| 8 | **scientific-revolution** | notebook galileo 卡:「被迫放弃日心说才免于火刑」— 伽利略从未被判火刑(混淆 Bruno 1600)→ 删「火刑」,加「火刑神话源于混淆 Giordano Bruno」 |
| 9 | **medieval-japan** | narrative §1:迁都平安京「841 年」— 应为 794 年(全文他处正确,transposition typo) |
| 10 | **medieval-japan** | Part 4:「忽必烈是 Sorghaghtani 的孙子」(CN+EN, lines 1070/1108)— 是儿子(同文件 335/553 行正确,直接矛盾) |
| 11 | **pre-columbian** | narrative §1.2:「Marina Frangos《The Maya Collapse》2010」— 查无此人此书,疑似伪造引用 → 换 Richardson Gill 2000 或 David Webster 2002。伪造引用损害全课公信力 |
| 12 | **pre-columbian** | notebook 卡5:Malintzin「12-14 岁被卖为奴 1519」— 1519 给 Cortés 时约 19 岁(8 岁首次被奴)→ 更正(notebook 是学生备考主工具) |
| 13 | **crusades-1099** | narrative §3:「1187 年 Saladin 56 岁」— 生 1137,应 50 岁(文末「1193 死 56 岁」正确,明显矛盾)。同课 Alexios「48岁」应 40 岁 |
| 14 | **age-of-exploration-1492** | col-n1 deliverGoal.en:「At 38」— 哥伦布 1492 年 40-41 岁(CN 正确写 41)→ 改 41 |

### MED severity(选段)

| 课 | 问题 |
|---|---|
| **enlightenment** | narrative §2 韩文标题混入(`이성주의 vs 경험주의`/`회의주의의 무기 창고`)— copy 残留,改中文。notebook locke 卡交叉引用错节点(voltaire-N4 应为 N5) |
| **constitutional-convention-1787** | mad-n6「就在同一年,1781年」歧义,易让学生以为 Mum Bett 与制宪会议同年(1787)→ 改「早在 1781 年——制宪会议前 6 年」 |
| **hamilton-jefferson-1790s** | Washington「在任总统唯一一次亲自带兵」过绝对(至 Carlisle 后交 Henry Lee)→ 软化 |
| **slavery-abolition-1850** | narrative §3 Tubman「美国史上第一个领兵打仗的女人」与 notebook/tub-n9 已纠正版本不一致 → 统一为「内战中第一个策划并指挥武装突袭的女性」 |
| **civil-war-1861** | Lee Arlington 庄园「上百名被奴役者」— 单庄园约 63 人,三庄园合计约 180 → 改「几处庄园共约一两百名」 |
| **black-death-1347** | Ibn al-Wardi 头衔「sheikh-ul-Islam」夸大 → 改「Aleppo qadi」。Boccaccio 佛罗伦萨「10 万死」应标为其文学夸张(学界 4-6 万) |
| **reformation-1517** | Calvin「55 岁死」应 54;Luther「63 岁死」应 62(storyboard N9 已写 62,矛盾) |
| **gunpowder-empires-1600** | narrative §3:「1453 Janissary 的火炮攻破君士坦丁堡」— 火炮是奥斯曼炮兵(Urban/Orban 铸),Janissary 是步兵 → 拆开 |
| **ancient-greece-480bce** | ls-n9 + notebook:「人人生而平等」误归 1787 宪法(实为 1776《独立宣言》)→ 分开两文件 |
| **decolonization-1960** | Bunche 1949 年「45 岁」应 44(Rhodes 谈判在 8 月生日前);meta 算术错 |
| **cold-war-1962** | Arkhipov「副长」应「分队参谋长」(高一级) |
| **manifest-destiny-1845** | 「54-40 or fight」误作 Polk 竞选口号(实为 1845 扩张派呼声)|
| **qin-china-221bce** | notebook emoji「🔗」违反项目无 emoji 规则 |
| **age-of-exploration-1492** | Cortés「烧船」实为凿沉/搁浅(史学共识)→ 改「凿沉或搁浅」 |
| **roman-empire-peak-117** | 意大利奴隶占比 narrative「15-25%」vs notebook「1/4-1/3」跨文件矛盾 |
| **ancient-egypt** | Merer 莎草纸「最古老」应加「现存已知」;石块「每块两三吨」漏花岗岩数十吨 |

> **跨课模式提示**(详见第 6 节):内部年龄/日期不一致、中国桥数字错误、人物关系错误是反复出现的三类。

---

## 3. 考点覆盖缺口 — score ≤ 3 的课

| 课 | score | 最关键缺口 |
|---|---|---|
| **tang-song-china** | 3 | 蒙古灭南宋(KC 3.1/3.2)无 lens;贸易革命/纸币/海上丝路无卡;岳飞从未展开 → 故事缺结尾 |
| **mali-empire-1235** | 3 | Kurukan Fuga(1235 Manden Charter)埋在 Sundiata 卡里无独立卡;Ghana 前身缺;与 Magna Carta 对比 DBQ 空白 |
| **age-of-exploration-1492** | 3 | 全球白银贸易/马尼拉大帆船(KC-4.3)无卡;郑和中国桥 36 节点零出现(华裔最强入口) |
| **islamic-rise** | 3 | 逊尼-什叶分裂无独立卡;Dar al-Islam 贸易/苏菲/dhimmi 缺 |
| **medieval-japan** | 3 | 战国三杰/锁国/下克上(CA 7.5 占 ~30%)narrative 有但未进卡 |
| **pre-columbian** | 4→实3 | 北美社会(Cahokia/Anasazi)缺;Columbian Exchange 术语从未作为框架教 |
| **scientific-revolution** | 3 | Tycho Brahe 无卡;科革→启蒙因果链缺;伊斯兰知识传承 DBQ 盲区 |
| **enlightenment** | 4→实3 | Montesquieu/Rousseau storyboard 零出现(两个最高频术语只在 notebook) |
| **constitutional-convention-1787** | 3 | Electoral College/Commerce Clause/Necessary&Proper/Brutus No.1 全缺(AP Gov 必考条款) |
| **hamilton-jefferson-1790s** | 3 | Alien&Sedition Acts + VA/KY Resolutions、Farewell Address、XYZ 在 1795-1800 段硬断层 |
| **slavery-abolition-1850** | 3 | The Liberator/AAS/Second Great Awakening 三个 CED 显性考点零覆盖 |
| **civil-war-1861** | 3 | Kansas-Nebraska/Missouri Compromise 未命名;Frederick Douglass 仅「一个黑人领袖」 |
| **reconstruction-1877** | 3 | Plessy v. Ferguson 仅 narrative 一句;Blanche Bruce 缺;断了 1877→1896→1954 链 |
| **gilded-age-1890** | 3 | Populism/人民党、New South/Jim Crow 两大 Period 6 支柱全缺;Rockefeller 无专卡 |
| **progressive-era-1910** | 3 | 黑人维度全缺(NAACP/Wilson 再隔离/Brownsville);1912 三方选举缺 |
| **womens-suffrage-1920** | 3 | Alice Paul/NWP storyboard 零出现;Minor v. Happersett 缺(逼出修宪策略的关键判例) |
| **decolonization-1960** | 3 | 地理过窄(三 lens 全在 1947-1950 印度);胡志明/Suez/Year of Africa/Congo 缺 |
| **cold-war-1962** | 3 | 柏林(封锁/空运/柏林墙)零覆盖 — 单项最高 ROI;McCarthyism 缺 |
| **roman-empire-peak-117** | 4→实弱 | CCOT(共和→帝国)无框架卡;基督教/宗教多元缺;3 世纪危机缺 |
| **gunpowder-empires-1600** | 3 | Suleiman the Magnificent storyboard 零出现(只在 keyFigures);奥斯曼哈里发声索缺;Shah Abbas 无 lens |
| **globalization-1995** | 3 | 环境后果/疾病健康/移民/SAP 整块缺(Unit 9.5-9.7) |
| **manifest-destiny-1845** | 3 | Wilmot Proviso 缺(APUSH 最高频 causation 链);Manifest Destiny 种族意识形态维度缺 |
| **reform-movements-1840** | 3 | Garrison/The Liberator 只在 notebook;市场革命经济引擎缺 |
| **westward-expansion-1869** | 3 | Sand Creek Massacre(CED 点名)缺;寄宿学校同化政策缺;Sitting Bull 名字 storyboard 零出现 |
| **native-americans-pre1500** | 4→实弱 | 贸易网络缺;西南 Puebloans 唯一无专卡的重要区域;reciprocity 框架词缺 |
| **han-china-130bce** | 3 | 察举制机制/推恩令/丝路具体货物缺;司马迁 sourcing 未训练 |
| **thirteen-colonies-1700** | 3 | Headright system、1662 partus sequitur ventrem 法、salutary neglect 缺 |
| **american-revolution-1776** | 3 | Thomas Paine《Common Sense》全文零提及(最高 ROI 单点);Articles of Confederation 缺 |
| **contemporary-us-1980** | 3 | Clinton 时代/ACA/社会运动(LGBTQ/BLM/#MeToo, CED 9.7)缺;G.W. Bush mustKnow:false 应翻 true |
| **russian-revolution-1917** | 4→实弱 | 1905 革命前因缺(Duma 无法理解);孟/布分裂未命名;德国「封闭列车」战略算计缺 |

> 共 **29 门** score≤3 或实质偏弱。最集中的缺口类型:**(a) 美国史 Reconstruction→现代段的 named legislation/landmark cases**;**(b) AP World 贸易/比较框架**;**(c) 中国桥在 storyboard 层缺失**。

---

## 4. 可读性问题 — 系统性模式 + 最严重课

**所有 55 门 readability score 均为 4 或 5**(无 ≤3),但反复出现两类系统性模式:

### 模式 A:节点超 550 字上限(术语/信息密度堆砌)
最严重:
- **byzantine-rise** — just-n1(701字)/just-n3(608)/just-n6(646)/anna-n6(613),全课最多超标
- **black-death-1347** — synthesis node 11 把 Scheidel/Cohn/创伤心理/中西对照塞一节,远超 550
- **tang-song-china** — hz-n1 hook 700+ 字(上限 350-550)
- **gunpowder-empires/han-china/roman-empire** — notebook 对照卡(han-rome/self-strengthening)单卡 600-814 字

### 模式 B:第一人称沉浸中插入学术 meta(打断节奏)
- **reformation-1517** Luther N10:堆「Whig 进步派/修正派/马克思主义/critical-genealogy」四个研究生级标签 → 改「一种看法/另一种看法」
- **mali-empire-1235** mm-n6:130 字学术 caveat 塞进第一人称
- **crusades-1099** Roger N7:史学估算数字打断屠城沉浸视角
- **mongol-empire** yc-n12:一节引入 5 个跨课人物(Las Casas/Erasmus/Su Shi)

### 模式 C:closing 节点多个并列问题/迁移问句堆叠
- **world-war-one-1914** tir-n11:四个修辞问句叠在情感落点
- **qin-china-221bce** cl-n11:四个 prompt 挤一节
- **constitutional-convention** lp-n12:四个 move 挤一节

---

## 5. 其他专家建议 — 跨课教学法/中立性/趣味性

### 教学法亮点(应作为模板推广)
- **跨 lens N6 同一物件锚点**(magna-carta 同一文件三视角 / ancient-egypt 同一座 146m 金字塔三双眼 / black-death 同一场瘟疫 / crusades 同一句「我后悔了」)— 多门课公认最强结构,直接训练 AP DBQ 多视角技能
- **anti-fabrication 在消费点透明化**(jackson-indian-removal 在遇到 Quatie blanket 传说/Marshall 名言处当场辟谣,而非脚注)— 公认最佳实践,应推广
- **defaultLens 先验挑战**(受影响者优先)执行普遍正确;qin/black-death 等 prior-loaded 课的破例处理得当

### 中立性(Rule 0)
- 普遍执行良好。slavery-abolition、civil-war、reconstruction 的 Lost Cause/self-emancipation 处理超出中学教材水平
- 个别需加强:renaissance §6「现代世界的母版」是 Burckhardt 派叙事,与 §9 修正派矛盾

### 中国桥系统性问题(见第 6 节模式 2)
- 多门课中国桥只在 narrative,storyboard/notebook 零落地:**french-revolution**(§8 只在 raw markdown)、**scramble-for-africa**(§8 承诺但 storyboard/notebook 零)、**jackson-indian-removal**(§8 只在作者层)、**age-of-exploration**(郑和 36 节点零)、**gunpowder-empires**(明朝对照 33 节点全无)

### 趣味性/差异化资产(应保留并放大)
- mali Aisha / qin 戍卒 / ancient-egypt laborer 等合成人物视角是产品最大差异化
- 多门课建议补「第四 lens」填覆盖缺口:magna-carta(William Marshal)、tang-song(岳飞)、age-of-exploration(郑和)、decolonization(非洲视角)

---

## 6. 系统性模式 — 修一次收益最大(按 ROI 排序)

> 这些模式在多门课重复出现,集中修复 ROI 最高。

### 模式 1:四门已建课 flip 上线(最高 ROI,几乎零成本)
haitian/meiji/russian/contemporary-us 已在 registry `available:false`,题目清单已当线上。haitian pilot 已建 narrative。**一次 flip = 补 AP World U5/U6/U7 三个关键缺口 + 消除代码与清单不符。**

### 模式 2:中国桥从 narrative 下沉到 storyboard/notebook(影响 ~6 门)
本是产品对华裔学生的核心差异化,却普遍只活在作者层 markdown,学生读不到。**统一在每课指定 synthesis 节点(如 N9/N10)注入一句中国桥** = 一个改法批量提升 french-revolution / scramble-for-africa / jackson-indian-removal / age-of-exploration / gunpowder-empires / industrial-revolution。

### 模式 3:notebook 撤销了 narrative 的严谨数字(影响多门,直接致 AP 失分)
narrative 已正确 hedge,notebook(学生备考主工具)却给了错误/未限定数字:mali(金价 25%/Sankoré 25,000)、roman-empire(奴隶 1/3)、han-china(奴隶 1/4-1/3 内部矛盾)。**审一遍 notebook 与 narrative 数字一致性**,因为学生只读 notebook 备考。

### 模式 4:内部年龄/日期跨文件不一致(影响 ≥10 门)
magna-carta(John 48/49)、tang-song(李清照/Taizong 27/28)、crusades(Saladin 50/56)、reformation(Calvin/Luther 年龄)、age-of-exploration(哥伦布 38/41)、decolonization(Bunche 44/45)、mongol(成吉思汗 41/44 CN-EN)、mali(Aisha 注释算错)。**建一个跨文件人物年表校验**,一次性扫净。

### 模式 5:高频 named AP 考点埋在 standalone/narrative,未进 notebook 主卡(影响 ~15 门)
学生备考从 notebook 主卡,而最高频考点常被埋:Thomas Paine(american-revolution)、Wilmot Proviso(manifest-destiny/civil-war)、Alice Paul(womens-suffrage)、Suleiman(gunpowder-empires)、Berlin(cold-war)、The Liberator(slavery/reform)、Electoral College(constitutional-convention)、Plessy(reconstruction)。**把每课的最高频遗漏考点提升为 notebook mainConcept 卡**。

### 模式 6:节点超 550 字 + 第一人称插学术 meta(影响 ~12 门)
见第 4 节模式 A/B。**统一规则:超长节点拆分;学术流派标签移出第一人称,改「一种看法/另一种看法」**。一次性扫 byzantine/black-death/tang-song/reformation/gunpowder/han-china/roman-empire。

### 模式 7:翻译层 CN-EN 事实漂移(影响多门,易致硬伤)
reformation(200镑→200修女)、constitutional/ancient-greece(Declaration vs Constitution)、tang-song(Taizong 27/28)。**CN 与 EN 应做事实对齐校验**,翻译时不得引入数字/归属漂移。

---

**给 Codex 的提示**:模式 1-5 是「修一次收益最大」的候选源;模式 1(flip 四门)、模式 3(notebook 数字校验)、模式 5(高频考点进主卡)是兼顾「最高频 AP 考点」「学生备考真实路径」「最低成本」的三个最强候选。Correctness 第 1-14 条(HIGH)是必修硬伤,其中 #1(magna-carta 10%)、#3(reformation 200修女 P0)、#11(pre-columbian 伪造引用)、#8(伽利略火刑)对公信力损害最大。
---

# Codex 收口 — 收益最大的 10 条 (按 ROI 重排)

（Codex 已排除「flip 四门课」——它们已上线。）

1. **立即修 P0 公信力硬伤包** — 正确性。跨 4 门、纯文本定点、半天。
   magna-carta 自由人比例 / reformation「200 修女」误译 / scientific-revolution 伽利略「免于火刑」/ pre-columbian 疑似伪造引用。会让学生写错、家长失信，成本极低 → 第 1。
2. **notebook 数字一致性批修** — 正确性/考试就绪。一次性脚本+人工，先 mali(金价25%/Sankoré 25,000)/roman/han。学生备考主看 notebook，主卡错比 narrative 错更危险。
3. **高频 AP named terms 提升为 notebook mainConcept 主卡** — 考点。跨 ~15 门、每门 1-2 卡、1-2 天。Common Sense / Wilmot Proviso / Alice Paul / Suleiman / Berlin / The Liberator / Electoral College / Commerce Clause / Necessary&Proper / Brutus No.1 / Plessy / Montesquieu·Rousseau。不重写课，只把已知高频考点搬到学生会复习的位置。
4. **中国桥从 narrative 下沉到 storyboard/notebook** — 覆盖/差异化。跨 ~6 门、每门一句 synthesis 或一张卡、~1 天。french-revolution / scramble-for-africa / jackson-indian-removal / age-of-exploration / gunpowder-empires / industrial-revolution。内容已写好但学生读不到，是华裔差异化核心。
5. **建 CN-EN 事实漂移校验 + 修已知** — 正确性。脚本+定点、~1 天。reformation / ancient-greece / constitutional-convention / tang-song / age-of-exploration。翻译层错很隐蔽但伤公信力，脚本化防复发。
6. **人物年龄/日期/关系一致性扫查** — 正确性。跨 10+ 门、脚本+定点。李清照 1132/49、Saladin 50、Alexios 40、Calvin 54、Luther 62、Bunche 44、忽必烈是 Sorghaghtani 儿子、平安京 794。单个不大但反复出现显得不严谨，修法机械。
7. **新建 AP World Unit 2 贸易网络课**（丝路+印度洋+跨撒哈拉）— 覆盖/考点。新课成本高。当前最大 AP World 结构缺口，印度洋贸易圈完全空白。
8. **score≤3 课补「最短 AP 考点 patch」** — 考点。跨 6-10 门、每门小补。cold-war 补 Berlin / civil-war 补 Kansas-Nebraska·Missouri·Douglass / reconstruction 补 Plessy→Brown / gilded-age 补 Populism·Jim Crow / progressive 补 NAACP·Wilson·1912。29 门偏弱不可能一次重做，先补最高频断点。
9. **批量处理超长节点 + 第一人称里的学术 meta** — 可读性。跨 ~12 门、脚本找 550+ 字再人工。byzantine/black-death/tang-song 拆超长；reformation/mali/crusades/mongol 压学术标签。55 门 readability 已 4/5，故排在正确性与考点之后。
10. **新建 AP World U6 亚洲帝国主义课**（鸦片战争+英属印度）— 覆盖/考点。新课。AP World U6 必考、对华裔关联强，现仅覆盖非洲。

## Codex 的元判断（很关键）
- 报告把很多「新建课」列成 high，但**按 ROI 排，绝大多数新课应排在「修 notebook 主卡 / 修 P0 事实 / 修双语漂移」之后**。
- 可读性虽真实，但 55 门都 4/5，**不该抢正确性和 AP 高频考点的优先级**。
- **最高 ROI 的遗漏**：把这些校验**接进 CI / 发布前阻断**——数字漂移、CN-EN 漂移、伪造引用、550 字超限，应从「一次性修复」变成「发布前自动拦截」，防复发。
