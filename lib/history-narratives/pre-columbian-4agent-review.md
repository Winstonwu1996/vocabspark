# Pre-Columbian Americas 4-Agent Review (Aggregated)

**Date**: 2026-05-09
**File**: `lib/history-storyboards/pre-columbian.js` (2133 行 / 3 lens × 12 nodes = 36 nodes)
**Reviewers**:
- 小薇 (12 岁 7 年级 ABC) — 8.5/10
- Dr. Park (AP World 20 年 + AP World 阅卷) — 8.0/10
- Maria (ESL specialist, 双语教育) — 7.5/10
- 赵老师 (中国初中历史 18 年) — 7.0/10

---

## 整体印象（4 reviewer 共识）

这是迄今为止 VocabSpark storyboard 里写得最有层次的一套。三个 lens 设计精良：perpetrator-actor / lonely-mediator / receiving-end 三角覆盖了帝国建造者、中间人、被统治者的完整视角。cross-lens 时刻锁定（1521.8.13 / 1521.11 / 1524-1527 天花）执行质量高。anti-Whig / anti-fab framing 在多数节点做得克制而有效。

但仍有若干 P0 需要 ship 前处理。

---

## P0 — 史实错误 / 需修（Dr. Park）

### P0-1｜pachacuti-inca · 头部 metadata 年份矛盾
**位置**: 文件第 7 行 header comment vs 正文 N11 / N12

**问题**: Header comment 写 `c.1418-1472`（从出生算），正文 N3 写「1438 改名 Pachacuti 自立 Sapa Inca」，N11 写「在位 34 年」（1438→1472 = 34年，正确）。但 header `c.1418-1472` 如被读者误解为"在位"，会产生 54 年在位之误。descriptionCn 同样写「约 1418-1472」不加区分「出生年—死年」。

**修法**: header + descriptionCn 改为：
- `c.1418 生，1438 即位，1472 卒，在位 34 年`
- description EN: `Sapa Inca who transformed Cusco into Tawantinsuyu; born c.1418, reigned 1438-1472`

---

### P0-2｜pachacuti-inca · N12 · Atahualpa 与 Pachacuti 关系
**位置**: N12 CN 正文 第 2 段 `我的曾孙 Atahualpa`

**问题**: 按 Rostworowski 1999 / Hemming 1970，Pachacuti → Topa Inca → Huayna Capac → Atahualpa。Atahualpa 是 Pachacuti 的**曾孙**（great-grandson），这没问题。但 EN 正文同段也写 `My great-grandson Atahualpa`，一致。**实际无误**——这条升为 P1 确认项，不是 P0。

---

### P0-3｜pachacuti-inca · N11 · 天花时间线措辞模糊
**位置**: N11 CN `1524-1527 年，天花先于 Pizarro 本人到达安第斯` / EN `Between 1524 and 1527, smallpox reached the Andes before Pizarro himself`

**问题**: Cook 1998 《Born to Die》和 Hemming 1970 的时间线：天花最早可能 1524 到达安第斯边缘，**Huayna Capac 死于约 1527**（有些来源说 1527，有些 1525-1527 区间，Hemming 1970 用 1527）。当前写法「1524-1527」范围OK，但紧接着说「欧洲人从 1492 年起就在 Caribbean 传播，病毒比军队走得更快」——1492 年 Caribbean 天花说法不准确：Columbus 1492 登陆时并未带天花，天花最早在 1518 年才到达 Caribbean 大陆沿岸（Cook 1998）。1492 起说法需要改写。

**修法**: CN `欧洲人从 1518 年起就已在 Caribbean 和大陆沿岸传播天花，病毒比大规模军队走得更快。` EN 同步修。

---

### P0-4｜malintzin-mediator · N1 · Tenochtitlán 人口数字内部矛盾
**位置**: N1 CN `首都 Tenochtitlán 的人口在 20 万到 25 万之间` / EN `Tenochtitlán had between two and three hundred thousand residents`

**问题**: CN 写「20万-25万」，EN 写「200,000-300,000」——范围不一致，CN 上限 25 万，EN 上限 30 万。实际学界估算：Hassig 1988 / Thomas 1993 多用 200,000-250,000，有些来源到 300,000。需统一。

**修法**: 统一为 `200,000 to 250,000`（CN「约 20 万到 25 万」/ EN `between two and two-and-a-half hundred thousand`）并加 hedge「学界估算」。

---

### P0-5｜malintzin-mediator · N6 · 船数量措辞
**位置**: N6 CN `凿沉了 9 艘，留了 2 艘备用` / EN `scuttled nine of the eleven ships, keeping two in reserve`

**问题**: 9+2=11 没问题。但 Hugh Thomas 1993《Conquest of Mexico》实际记录是：Cortés 凿沉了大部分船，细节各来源有 8 至 11 艘之争，Thomas 倾向于「大多数」而非精确 9 艘。N6 的 deliverGoal 自注「Hugh Thomas 1993 确认，不是全烧」，但正文写「9艘」过于精确，Hugh Thomas 并未如此精确断言。

**修法**: CN 改为「他凿沉了大部分船只（Hugh Thomas 1993 记录多数船只被凿沉，细节各来源有出入），留了少数备用」。或保留「约 9 艘」加 hedge「约」字。EN 同步。

---

### P0-6｜malintzin-mediator · N8 · Cholula 屠杀死亡人数来源
**位置**: N8 CN `5,000 到 6,000 人死` / EN `Five to six thousand people died`

**问题**: Hugh Thomas 1993 的范围实为 3,000-6,000，中位数约 5,000（Thomas 原文用 approx. 5,000-6,000 在不同版本有出入，某些版本 3,000-6,000）。Restall 2003 也提醒这类数字高度不确定。当前「5,000-6,000」已是 Thomas 高区间，可接受，但应加 hedge。

**修法**: 加 `（Hugh Thomas 1993 估计，各来源数字差距较大）` 括注。

---

### P0-7｜malintzin-mediator · N9 · La Noche Triste 西班牙死亡人数
**位置**: N9 CN `约 600 西班牙人死、约 1,300 人中的近一半` / EN `approximately six hundred Spaniards had died — close to half of the thirteen hundred Cortés commanded`

**问题**: Hugh Thomas 1993 对 La Noche Triste（1520.6.30）的记录：Spanish dead 约 450-600（Thomas 不同页面数字不完全一致），not exactly「close to half of 1,300」。Cortés 出发兵力也非精确 1,300，Thomas 用 approximately 1,000-1,300。「约 1,300 人中近一半死亡」暗示约 650 人，略高于多数估算。此外 Tlaxcala 盟军 4,000-8,000 死（Thomas 1993）这一数字在 N9 出现，来源可靠。

**修法**: CN 改为「约 450 到 600 名西班牙人死亡（Hugh Thomas 1993 估计，Cortés 队伍当时总兵力约 1,200 到 1,300）」。EN 同步。

---

### P0-8｜ix-mutal-weaver · N1 · Mayapan 崩溃年份
**位置**: N1 CN `Mayapan 30 年前崩塌` / EN `Mayapan... collapsed thirty years earlier` (设定 c.1480)

**问题**: Mayapan 崩溃学界共识约 1441-1461 年（Roys 1957 / Sharer 2006 主流用 c.1441 或 c.1461）。如果 Ix Mutal 生于 c.1480，「30 年前崩塌」意指约 1450——在合理范围内（1441-1461 之间）。技术上 OK，但文中只写「30 年」没有给出绝对年份，让读者可能计算出一个不精确的年份。

**修法**: 加一句 `（约 1441 至 1461 年间，学界记录有出入）` 供教师版本；学生版本保持「大约三十年前」不变。这是 P1 优先，不是 P0 blocker。升为 P1。

---

### P0-9｜ix-mutal-weaver · N12 · Itzá Maya 1697 年陷落细节
**位置**: N12 CN `Itzá 1697 年陷落` / EN `Itzá fell in 1697`

**问题**: Itzá 城（Nojpetén，今 Flores 岛）陷落日期确为 1697 年 3 月 13 日（Rice 2004《Maya Political Science》确认）。征服者是 Martín de Ursúa y Arizmendi，正文已正确记录。**无误**——确认通过，不是 P0。

---

### P0-10｜ix-mutal-weaver · N9 · 丈夫死亡年份与年龄计算
**位置**: N9 CN `我丈夫 1533 年死于麻疹……我那年 53 岁`

**问题**: 若 Ix Mutal 生于 c.1480，1533 年应为 53 岁——计算正确。**无误**。

---

### P0-11｜malintzin-mediator · N12 · Erasmus 年份/措辞问题
**位置**: N12 CN `同一代，欧洲有一个人也叫 lonely mediator——Erasmus（1466-1536）。1517 年，我 17 岁还在奴隶网络里辗转，他在荷兰出版了希腊语《新约》`

**问题1**: Erasmus 生年应为 c.1466-1469（学界有争议，1466 是常用值，OK）。

**问题2**: 如果 Malintzin 生于 c.1500（Townsend 2006 中值），则 1517 年她约 17 岁——计算正确。但 N1 deliverGoal 写「Townsend 2006 估计 1500-1502 出生概率最高，c.1500 是中值」，按此 1517 年为 15-17 岁，写「17 岁」取上限，可接受。

**问题3**: Erasmus 1516 年出版希腊语《新约》（*Novum Instrumentum*），不是 1517 年。「1517 年」是 Luther《九十五条》年份，容易混淆。

**修法（P0）**: CN 改为「1516 年，他出版了希腊语《新约》」，同时保留「1517 年她 16-17 岁还在奴隶网络里……同年 Luther 张贴《九十五条论纲》，欧洲在语言上撕裂」加强 cross-Topic 对照。EN 同步修。

---

### P0-12｜malintzin-mediator · N3 · 年龄与奴隶年数不一致
**位置**: N3 CN `9 年里，我至少换了 3 个主人` / N3 EN 结尾 `1519 年，我 19 岁，被送给西班牙人的时候`

**问题**: N2 写父死「大概 8 岁」c.1508-1510，进入奴隶网络；N3 写「9 年里」；N5 写「1519 年，我 19 岁」，「已经是奴隶 11 年了」。N3 写「9 年」，N5 写「11 年」——数字矛盾。若 1508 年开始（8 岁），到 1519 年是 11 年；若 1510 年开始也是 9 年。但 N3 和 N5 的措辞用了两个不同数字指同一段时间。

**修法（P0）**: N3 正文改为「9 到 11 年里……」或保持「9 年」并在 N5 把「已经是奴隶 11 年了」改为「9 年」，取 1510 年作为基准年。选择一个数字统一全 lens。建议统一用「约 9 年」（Townsend 2006 也无法精确确定离家年份）。

---

## P0 — CN 文字规范（赵老师）

### P0-13｜pachacuti-inca · N3 · 「Time-Turner」译名问题
**位置**: N3 CN `新名字：**Pachacuti**。Quechua 语，「pacha」= 时间 / 大地，「kuti」= 翻转。合在一起：时间转折者，大地震荡者。`

**问题**: EN 正文写 `Time-Turner`（时间转折者），这个词与 Harry Potter 的 Time-Turner 道具（时间转换器）重合，会让 12 岁读者联想到 HP。中文「时间转折者」无此问题。但 EN 版用 `Time-Turner` 需要改。

**修法（P0 for EN，P1 for CN）**: EN 改为 `"Overturner of Time / Earth-Shaker"`，与 Quechua 原义更精确，避免 HP 联想。

---

### P0-14｜ix-mutal-weaver · N4 · 预言文本写作年代括注位置
**位置**: N4 CN `这里需要仔细说一件事：这些预言文本，是 1540 到 1600 年之间用拉丁字母写下来的——也就是在西班牙人已经来了之后才被记录。`

**问题**: 按赵老师标准，「1540 到 1600 年」应在概念首次出现时加括注说明与学生熟悉的历史节点的关系。这里文字已经做到了（解释了「西班牙人已经来了之后才被记录」），但没有附 Restall 2003 年份。**实际清晰，不是 P0**。降为 P1。

---

### P0-15｜全 lens · 数字格式问题
**位置**: 多处

**问题（赵老师）**: 中文规范：公历年份、世纪数、数量若超过两位应用阿拉伯数字；但叙事正文里 CN 全局混用「34 年」（正确）和「五个世纪」（正确）。查全文，此 storyboard CN 数字格式整体规范，无明显「17c」类缩写错误。**不是 P0**。

---

## P0 — 读者体验（小薇）

### P0-16｜ix-mutal-weaver · N1 · fictionalDisclaimer 段落密度
**位置**: N1 开头 fictionalDisclaimer 块

**问题（小薇）**: fictionalDisclaimer 放在 N1 正文最前面，中括号内 6 句话，全部是 meta 说明，12 岁读者读到这里可能直接跳过或觉得无聊。「这个故事是虚构 composite，不是真人传记」这句话放在第一句没问题，但后面 5 句（Cook 1998 / Roys 1957 引用 / 类比 Anna the Iconographer）太早出现，打断进入故事的节奏。

**修法（P0 UX）**: 把 fictionalDisclaimer 拆成两部分：
1. N1 开头只保留前 2 句（「这个故事是虚构 composite，不是真人传记 / 但她代表的群体真实存在」）+ 单行「---」
2. 后 4 句（来源 + Anna 类比）移到 N1 的 `deliverGoal` 或移到文件尾部 teacher notes 字段

这样 12 岁读者看到的 N1 开头是：简短声明 → 立刻进故事，而不是 6 行学术 meta。

---

### P0-17｜malintzin-mediator · N12 · 第一人称指代混乱
**位置**: N12 EN `In that same year of 1517, when Malintzin was seventeen and still being passed through the slave network, Erasmus published his Greek New Testament`

**问题（小薇 + Maria）**: 整个 malintzin lens 用第一人称「我」写，但 N12 这句 EN 突然用第三人称「Malintzin」，这是视角错乱——reader 刚适应了「我」的声音，突然看到「Malintzin」会 break immersion。CN 版 N12 用「我 17 岁还在奴隶网络里辗转」——第一人称，正确。EN 版出了这个 bug。

**修法（P0）**: EN 改为 `In that same year of 1517, when I was seventeen and still being passed through the slave network, Erasmus published his Greek New Testament in Holland.`

---

## P1 selected（建议修，不 block ship）

### P1-1｜pachacuti-inca · N8 · Mali Aisha 1413 存疑
N8 CN `在 Mali 帝国（西非 600-1591），商人的女儿 Aisha 在 Timbuktu 用阿拉伯字母记账。1413 年她的账簿里有文字，有故事，有旅行记录。`

Aisha 是虚构 composite 还是真实人物？正文未做 fictionalDisclaimer，但写法像真实人物。若是构建的 composite，应加 `（虚构 composite）` 括注，避免与 pachacuti lens 的 ix-mutal 混淆处理标准。Mali Topic storyboard 里如果有她的出处，需对应。

### P1-2｜pachacuti-inca · N9 · Jared Diamond 的 careful framing 可以再加一句
N9 `用 Diamond 的框架要谨慎：他是宏观叙事，具体的工程决策仍然是人做的`——这句 warning 到位。P1 建议加：`（批评 Diamond 宏观决定论的学者参见 Blaut 1993 / Pomeranz 2000）` 教师注释用。

### P1-3｜malintzin-mediator · N5 · Anacaona 执行年份
N5 CN `她试图用谈判和解来保全她的族人，最后被执行绞刑`，`1508 年处死整整 11 年` (1519-1508=11，正确)。P1 确认：Anacaona 执行年份 1503 或 1504 (Lane 2011《Colour of Paradise》) vs 1508——来源有争议。Martyr D'Anghiera 原始记录写 1503/1504，某些来源用 1508。正文用 1508——如果改为「约 1503 至 1508 年间」更安全。low priority P1。

### P1-4｜malintzin-mediator · N6 · 受洗场景地点
N6 CN `1519 年 4 月初，Cortés 把我们 20 个女人受洗`——受洗地点史料实为 Potonchan（Tabasco），而非「Tabasco / Veracruz 沿海」之间模糊地带。Setting 已写「Tabasco / Veracruz 沿海，Cortés 营地」，可加精确地名 Potonchan。P1。

### P1-5｜malintzin-mediator · N10 · Martín 流放年份
N10 CN `1568 年因为「阴谋」被西班牙流放` -- Martín Cortés 流放是 1566 年（Townsend 2006 p.168），涉及 conspiración del Marqués，1568 年是流放后 2 年，不是流放年。改「1566 年因参与贵族阴谋被西班牙流放」。P1（小错误，不 block）。

### P1-6｜ix-mutal-weaver · N8 · Montejo 放弃年份
N8 CN `Montejo 1535 年彻底放弃`——第一次远征失败后，Montejo 1527 登陆，1535 年撤出 Yucatán，这一阶段确实到 1535 年结束，OK。但更准确说法是 Montejo 对 Yucatán 的第一次征服尝试（1527-1535）全面失败，1540 年代再尝试时（由其子 Montejo el Mozo）才成功。N10 已提到「Montejo el Mozo 1542 年建 Mérida」，与 N8 「Montejo 1535 放弃」不矛盾，可以接受现状。P1 确认项。

### P1-7｜全 lens · Inca 称号一致性
pachacuti lens 交替使用 `Sapa Inca`（正文）和 `Inca`（部分地方）。赵老师建议：中文首次出现时应注「Sapa Inca（印加最高王）」，后续可简称「Sapa Inca」。全文无此括注，N1 中文已有`Sapa Inca"——"唯一的王"` 括注，OK；但赵老师建议括注放在中文环境里更规范：`萨帕·印加（Sapa Inca，唯一的王）`。这是格式修饰 P1。

### P1-8｜ix-mutal-weaver · N12 · Sorghaghtani Beki 拼写变体
N12 CN `Sorghaghtani Beki`——标准拼写变体多（Sorghagtani / Sorghaghtani / Sorgaqtani），本文用法与 EN 对齐，OK。赵老师注：中文译名「索尔哈克塔尼·别吉」首次出现加括弧（Sorghaghtani Beki），已在括弧内，格式正确。P1 确认通过。

### P1-9｜pachacuti-inca · N4 · Saqsaywaman 石块重量来源
N4 CN `石块重达 100 到 200 吨`——来源应注。Hemming 1970 / MacQuarrie 2007 都引用类似数字，但范围宽（最大石块约 128-300 吨之间，各来源差距大）。建议加 hedge `最大石块据估约 100 至 300 吨（Hemming 1970 估计），精确重量无直接测量`。P1。

### P1-10｜malintzin-mediator · N7 · la lengua 词源
N7 EN `La Malinche, meaning "Malintzin's palace" or "the place associated with Malintzin"` — N12 提供的 La Malinche 词源解释。这个词源（「Malintzin 的宫殿」）来自 Frances Karttunen 的 Nahuatl 词典分析，Townsend 2006 也引用了这个说法。但也有语言学家认为 La Malinche 只是西班牙人对 Malintzin 发音的简化，词源并不确定。建议加 hedge `（一说词源存疑，参见 Townsend 2006）`。P1。

### P1-11｜小薇视角：最难跟的节点
小薇反馈（综合模拟）：
- **最难跟**: pachacuti N10（panaca 制度，「死人财产永远锁定」制度逻辑，需要先懂继承权才能跟上）；malintzin N6（三角翻译链 Cortés→Aguilar→Malintzin→Nahuatl，标明方向的箭头格式 12 岁容易看晕）
- **最好看**: ix-mutal N7（「不是会不会，是什么时候」那句话），malintzin N11（「我早该死在 Tenochtitlán」翻译临终之言）
- **建议**: N10 panaca 节点加一句「就好像一个爷爷死了但他的存款账户永远归他自己，儿子想买房必须自己挣钱，不能动爷爷的账户」——现代类比，12 岁可以 follow。

### P1-12｜Maria ESL 视角：CN/EN 语义对等问题
- **N1 malintzin** CN `整个 Aztec 帝国最鼎盛的时候` / EN `the Aztec empire at its fullest`——等价，OK。
- **N3 pachacuti** CN `Genghis Khan 1206 年在 Onon 河源头被尊号「成吉思汗」——然后花十年重建了草原政治地图` / EN `Genghis Khan received his title on the Onon River in 1206 and then spent years rebuilding the steppe's political map`——CN「十年」，EN「years」，不对等。CN 改「花数年」或 EN 改「spent a decade」统一。
- **N8 pachacuti** CN `在 Mali 帝国（西非 600-1591）` / EN `in the Mali Empire (West Africa, 600-1591)`——OK。
- **N6 ix-mutal** CN `800 个人的村落能剩多少` / EN `a village of 800 have left`——对等，OK。
- **总体评估（Maria）**: CN/EN 对等质量属于 VocabSpark 最高水平，主要问题是少数地方 CN 比 EN 多了一句话的感情色彩，或 EN 比 CN 多了一个 careful framing 句。不是 P0。

### P1-13｜赵老师：课本译名对接
中国 8 年级历史课本（人教版）关键译名对照：
- 帕查卡马克 / 帕查库特克：课本用**帕查库特克**，storyboard 用「帕查库特克·印加·尤潘基」（全名），**OK**
- 印加：课本用「印加帝国」，storyboard 混用「Inca 帝国」和「印加帝国」——CN 正文里建议统一用「印加帝国（Tawantinsuyu）」首次出现时括注，后续 Inca 可保留
- 特诺奇蒂特兰：课本用**特诺奇蒂特兰**，storyboard 各处拼写一致，**OK**
- 阿兹特克：课本用**阿兹特克**，storyboard CN 用「阿兹特克」，**OK**
- 马林钦：课本不涉及，storyboard nameCn「马林钦（玛利纳 / 玛利切）」格式合理
- 克斯科（Cusco）：课本不涉及此名，storyboard 直接用 Cusco 英文，CN 正文里裸用，建议首次出现加括注「库斯科（Cusco）」

---

## 钢筋三大优点（4 reviewer 共识）

1. **Anti-Whig 执行最佳** — Pachacuti 既非英雄帝王也非恶霸，explicitly 说出来（N12）；Malintzin 既非叛徒也非女英雄，Townsend 2006「Malintzin's Choices」框架完整落地；Ix Mutal「分散不等于衰落」和 Itzá 1697 才陷落都是反胜利者叙事的精准锤子。这套 anti-Whig 是迄今 VocabSpark 各 topic 最成熟的实现。

2. **Cross-lens 时刻锁定质量高** — 锁定 #1（1521.8.13 Malintzin 翻译投降 / 1521.11 Ix Mutal 才收到消息）执行流畅，两个 lens 各自叙述同一事件时视角完全不同，不重复但互相呼应。锁定 #2（1518-1520 天花）三个 lens 各自有不同角度（Malintzin 可能部分免疫 N4 / Ix Mutal 两个孩子死 N6 / Pachacuti N11 提到天花先到安第斯），三角覆盖扎实。

3. **来源引用密度和 careful framing 水准高** — Townsend 2006 / Rostworowski 1999 / Hemming 1970 / Restall 2003 / Cook 1998 / Roys 1957 / Edmonson 1986 / Julien 2000 / Hugh Thomas 1993 / Urton 2003 在适当节点出现，且每次引用都附有具体的 framing（说明来源是在说什么，不只是裸引）。这是业界少见的中学叙事史料密度。

---

## ship readiness 路径

**P0 数量：7 条确认 P0（P0-1 / P0-3 / P0-4 / P0-5 / P0-7 / P0-11 / P0-12 / P0-13 EN / P0-16 / P0-17）**

（注：P0-2 / P0-6 / P0-9 / P0-10 / P0-14 / P0-15 审核后升为 P1 或通过，不计入 P0 总数）

**最终 P0 总数：10 条（需 ship 前全修）**

| 编号 | Lens | Node | 问题类型 | 修复难度 |
|------|------|------|----------|----------|
| P0-1 | pachacuti | header + descriptionCn | 年份歧义 | 低 |
| P0-3 | pachacuti | N11 | 天花时间线（1492 年说法不准）| 低 |
| P0-4 | malintzin | N1 | CN/EN 人口数字不一致 | 低 |
| P0-5 | malintzin | N6 | 船数量「9艘」过于精确，需加 hedge | 低 |
| P0-7 | malintzin | N9 | La Noche Triste 死亡人数范围 | 低 |
| P0-11 | malintzin | N12 | Erasmus 《新约》年份（1516 非 1517）| 低 |
| P0-12 | malintzin | N3 + N5 | 奴隶年数内部矛盾（9年 vs 11年）| 低 |
| P0-13 EN | pachacuti | N3 | EN「Time-Turner」Harry Potter 联想 | 低 |
| P0-16 | ix-mutal | N1 | fictionalDisclaimer 段过长打断节奏 | 中 |
| P0-17 | malintzin | N12 EN | 第一人称视角错乱（EN 突用第三人称）| 低 |

**P0 全修后预估评分**:
- 小薇：9.0/10
- Dr. Park：8.5/10
- Maria：8.5/10
- 赵老师：7.5/10（待课本译名 P1 部分完成后可到 8.0）

**结论：P0 全修后 ship-ready。P1 可 post-ship hotfix。**
