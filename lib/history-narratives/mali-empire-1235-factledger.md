# 马里帝国 1235-1610 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    mali-empire-1235
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/mali-empire-1235.js（3 lens: mansa-musa / ibn-battuta / aisha-1413；Aisha lens 用 N1-N12 数字 id，N11=reflection 写 / N12=meta 读）+ lib/history-narratives/mali-empire-1235.md
claim 总数:  27
🚩 红旗数:   7（需创始人审）
```

---

## 抽取规则（reviewer 必读）

抽 **20-30 条最高风险 claim**，优先级（高→低）：date / number / quote / causal / motive / representativeness / absolute / rhetoric。
来源等级：`primary` / `textbook` / `encyclopedia` / `inference` / `dramatization`。
状态：`✅verified` / `🚩needs-source` / `⚠️downgrade-wording` / `✋flagged`（后三类进红旗）。

> 本 topic 已自带大量 anti-fab caveat（4000 亿美金 myth 修正 / 三时点学者数 / Ibn Battuta range / Abu Bakr II contested fact），整体史学纪律高。本账本重点抽**仍有错或仍偏强**的 claim。

---

## 高风险 claim 表

| # | claim（节点位置）| 类型 | 来源等级 | 来源 / 依据 | 状态 |
|---|---|---|---|---|---|
| 1 | 「1235 Kirina 战役 Sundiata 击败 Soumaoro/Sosso，建 Mali 帝国」（`mm-n1` / 叙事 §0·§4 时间线）| date | encyclopedia | Battle of Kirina c.1235，Wikipedia/Britannica 一致，Mali Empire c.1235-1610。✅ | ✅verified |
| 2 | 「Mansa Musa 约 1280 生 / 1312（32 岁）即位 / 1337（57 岁）死」（`mm-n2`·`mm-n4`·`mm-n10` / §3）| date / number | encyclopedia | Wikipedia: 生 c.1280、即位 c.1312（most accepted）、死 c.1337（most likely）。年龄锚一致。✅ | ✅verified |
| 3 | 「1324 朝圣队伍：60,000 人 + 12,000 enslaved 各捧 4 磅（1.8kg）金 + 80 头骆驼各驮 300 磅金」（`mm-n4` / 叙事 §1·§3 line 436）| number | encyclopedia | al-Umari 经 Wikipedia：12,000+ enslaved 各 ~1.8kg(4lb) 金条 + 80 骆驼各 23-136kg(50-300lb) 金粉。文中数字与一手记述一致；现代史家视为「修辞而非统计」。文中已多处加 caveat。✅ | ✅verified |
| 4 | 「Cairo 黄金价格下降约 **25%**」（`mm-n6` / 叙事 §0 line 64·§1 line 114·§3 line 469）| **number** | primary（al-Umari）| **❌ 数字错。** al-Umari 原文：mithqal 由「不低于 25 dirham」跌到「22 dirham 或更低」= 约 **12% 跌幅**（worldhistorycommons / Wikipedia 一致）。文中「25%」疑似把「25 dirham 基准」误当成「跌 25%」。且文中把「25%」直接挂在 al-Umari 名下作为来源等级，错误更突出 | ✋flagged |
| 5 | 「al-Umari 写影响持续约 12 年」（`mm-n6` / 叙事 §1·§3）| quote / number | primary | al-Umari「about twelve years until this day」——文中引述准确。✅（注：文中已正确标为 al-Umari 个人定性观察，并补 Goldberg/Borsch 5-10 年 + Black Death 干扰，处理良好）| ✅verified |
| 6 | 「这是人类史**第一次**有记录的『单笔金子破坏一国经济』事件」（`mm-n6` / 叙事 §0·§1·§3）| absolute | inference | 文中已自做反 Whig 修正（明确「不是第一次通胀」，列罗马/汉/元对照）。但「**第一次**单笔财富破坏一国经济」仍是无来源的绝对表述；且经济史 Schultz 认为金价波动「well within normal Mamluk fluctuations」——即影响程度本身学界存疑。措辞偏强 | ⚠️downgrade-wording |
| 7 | 「Cairo 礼仪危机：Mansa Musa 拒跪苏丹，说『只跪上帝』，后用 Islamic 礼妥协」（`mm-n7` / 叙事 §3）| quote / motive | encyclopedia | Wikipedia：Musa 初拒 prostrate，最终 bow 时称只为 God 而拜。文中已加 al-Maqrizi vs Conrad 2005 双 reading caveat，处理稳。引语为概括非逐字，但已属合理转述。✅ | ✅verified |
| 8 | 「al-Sahili（Granada 生）设计 Djinguereber 大清真寺 (1327)」（`mm-n8` / 叙事 §3 line 509-511）| causal / motive | encyclopedia | **措辞偏强。** Hunwick（文中 mm-n8 已引 Hunwick 1999）实际论证 al-Sahili 角色是「decorative and organizational, **not** structural architect」。`mm-n8` 用「led the design」、叙事 §3 line 510「他为 Mali **设计了** Djinguereber Mosque」均把他排成主设计师，与 Hunwick 结论冲突 | ⚠️downgrade-wording |
| 9 | 「Abu Bakr II 1311 带 2,000 船跨大西洋失踪」（`mm-n2` / 叙事 §3 line 396-403）| number / causal | primary（Musa 自述）| 文中已**透明标 contested fact**（唯一来源是 Musa 本人；Levtzion/Brooks 认为可能掩盖政变；Van Sertima 假说无考古证据，大多学界不接受）。Wikipedia 印证此辩论。处理 = 模范。✅ | ✅verified |
| 10 | 「Sankoré 三时点学者数：14 世纪 5,000-10,000 / 16 世纪 Askia 25,000 / 21 世纪 70 万手稿」（`mm-n9` / 叙事 §0·§3 line 686-692）| number | encyclopedia / inference | 文中核心动作是**自我修正**（三时点不可混挂 14 世纪），这正是 anti-fab 加分项。14 世纪 5,000-10,000 学者数属 estimate range（具体数 inconclusive，文中已注明）。处理良好。✅ | ✅verified |
| 11 | 「Mali 1325 约 1,800,000 km²，比同期英+法+神罗之和大」（`mm-n3` / 叙事 §2·§3）| number / absolute | encyclopedia | 面积量级与学界 estimate 一致；「比三国之和大」属面积对照，文中已用 estimate range 措辞。✅ | ✅verified |
| 12 | 「Mali 人口：`mm-n3` 给 500-1500 万（5-15M）；叙事 §0 line 61·§3 line 416 给 **4000-5000 万**」| number | inference | **内部冲突 + 偏高。** storyboard 用 5-15M（Levtzion/Niane range，较稳），但 narrative §0/§3 多处用「4000-5000 万」「比同期欧洲总人口 1/3」「比英格兰 6 倍」——14 世纪西非人口学界估计普遍远低于 4000 万，且与同文件 storyboard 5-15M 自相矛盾 | ✋flagged |
| 13 | 「Mansa Musa 母亲是奴隶出身（al-Umari 1340 记）」（叙事 §2 line 205）| representativeness / quote | inference | 文中已加 Levtzion 1973（误传）vs Conrad 2005（可能）双 reading，并标「学界有争议」。处理稳。✅ | ✅verified |
| 14 | 「Kurukan Fuga 1235 颁布，**1998 UNESCO** 认证为人类口头遗产；核心 7 条」（叙事 §3 line 335·352）| date | encyclopedia | **❌ 日期错。** UNESCO「Manden Charter, proclaimed in Kurukan Fuga」实际 **2009** 列入 Representative List of Intangible Cultural Heritage（ich.unesco.org），不是 1998。宪章本身常系于 c.1236。「七章/七条」与 UNESCO「preamble of seven chapters」一致 ✅，仅 UNESCO 年份错 | ✋flagged |
| 15 | 「Kurukan Fuga 1235 比 Magna Carta 1215 更普世（保护所有人 vs 只保护贵族）」（叙事 §3 line 345-350）| causal / absolute | inference | 对照属常见史学诠释（Big Think 等亦持此论），但「人类最早人权宪章之一」是强表述、且口传宪章哪些条款属 1235 原始口传学界有争议（文中 §3 line 335 已自注此点）。措辞可接受但偏强，低优先级 | ⚠️downgrade-wording |
| 16 | 「Ibn Battuta 1304 生 Tangier / 1369 死 / 30 年游历 75,000-117,000 km，是 Marco Polo 3-5 倍」（`ib-n1`·`ib-n9` / 叙事 §3 line 577-579）| number | encyclopedia | 117,000 km 为 high-end estimate（baytalfann 等），文中用 range（75k-117k）+ 明确「不是精确 5 倍」，是模范 anti-fab。✅ | ✅verified |
| 17 | 「Ibn Battuta 1352-1353 在 Mali 停 **8 个月**，做 Mansa Sulayman 客人」（`ib-n5`·`ib-n7` / 叙事 §3 line 585-589）| date / number | encyclopedia | 1352-1353 访 Mali、Mansa Sulayman 在位、Rihla 经 Ibn Juzayy 记录——均确证。「8 个月」停留时长属常见转述（与一手时间线相容）。✅ | ✅verified |
| 18 | 「跨 Sahara 90 天 / 8,000 km；Sijilmasa→Walata 这一段」（`ib-n4` / storyboard 头注）| number | encyclopedia | Rihla：Sijilmasa→Iwalatan（Walata）约 2 个月（~两月余）。文中 storyboard 头注已自警「学界 90 天 / 8000 km（不是精确 25 天——那是 first leg）」，并把 90 天用于全程而非单段。处理稳。✅ | ✅verified |
| 19 | 「Ibn Battuta 1346-1349 到中国（泉州/杭州/大都）是 contested fact」（`ib-n2` / 叙事 §3 line 572）| date / causal | inference | 文中已透明标 Dunn 1986 / Gibb 1929 怀疑没真到中国。处理 = 模范反 Whig。✅ | ✅verified |
| 20 | 「Rihla 120,000 字阿拉伯文，19 世纪欧洲才认真翻译」（`ib-n8`·`ib-n12` / 叙事 §3 line 663-664）| number | encyclopedia | 字数量级 + 19 世纪欧洲学界翻译史，与通行表述一致。✅ | ✅verified |
| 21 | 「Ibn Battuta 访 44 个 / 144 个现代国家」（`ib-n8` 给 144 / 叙事 §3 line 580 给 44）| number | encyclopedia | **内部冲突。** `ib-n8`「144 个现代国家」与叙事 §3 line 580 + `ib-n1` 周边「44 个现代国家」矛盾。通行说法是约 **44** 个现代国家；「144」疑为笔误（多一位数）| ✋flagged |
| 22 | 「Mansa Sulayman 是 Mansa Musa 侄子，比 Musa 吝啬」（`ib-n5` / 叙事）| motive / representativeness | encyclopedia | Wikipedia/Rihla：Ibn Battuta 确将 Sulayman 评为 miser、不及 Musa 慷慨；亲属关系（弟/侄）史料表述不一，文中用「侄子」属一种 reading。低风险。✅（亲属关系可再核，但不影响教学）| ✅verified |
| 23 | 「Catalan Atlas 1375，Cresques Abraham（Majorca 犹太人）绘，Mansa Musa 举金块戴金冠」（`mm-n12` / 叙事）| date / quote | encyclopedia | 确证：Catalan Atlas c.1375、Cresques Abraham、Majorca、Musa 持金块图像 + 「richest and noblest」caption。✅ | ✅verified |
| 24 | 「『比 Bezos 富 4000 亿美金』是 2012 Time / popular myth，学界称不可比」（`mm-n12` / 叙事 §3 line 540-548）| number | encyclopedia | Wikipedia：Time「no way to put accurate number」、Collet「impossible to calculate」、换算「methodologically unsound」。文中修正 = 模范。✅ | ✅verified |
| 25 | 「1591 Tondibi 之战，4,000 摩洛哥兵（火枪+火炮）vs 40,000 Songhai（长矛+弓），1591.**4.13**，Timbuktu 被占」（叙事 §3 line 715-718）| date / number | encyclopedia | **❌ 月份错。** Battle of Tondibi 实际 **1591 年 3 月 13 日**（13 March 1591），不是 4 月 13 日。兵力：摩洛哥侧较小（含 8 cannon），Songhai 学界 range 18,000-80,000——「4,000 vs 40,000」量级可接受但 Songhai 数偏单一。主问题是月份 | ✋flagged |
| 26 | 「1591 后摩洛哥押 50+/70 多个 marabout 到 Marrakech，部分死于沙漠」（叙事 §3 line 721 给 50+ / Aisha N12 给 70 多）| number | inference | 学界确载 1591 后 Timbuktu 学者（含 Ahmad Baba）被押 Marrakech。具体人数（50+ vs 70 多）文件内不一致且无单一权威数；属可接受 estimate 但内部应统一。低优先级 | ⚠️downgrade-wording |
| 27 | 「al-Sa'di 1655《Tarikh es-Sudan》→ Haidara 家族世代藏 → 2012 抢救 30 万件 → 357 年知识保存」（Aisha N12 / 叙事 §3）| date / number | encyclopedia | al-Sa'di Tarikh es-Sudan ~1655 ✅；2012 Haidara 团队抢救通行数为 **~350,000** 件（National Geographic）——文中「30 万」属保守，成立。1655→2012=357 年 ✅。composite 已透明标注（见下表）。✅ | ✅verified |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#4]** `mm-n6` / 叙事 §0·§1·§3：「Cairo 黄金价格下降约 **25%**。」
   - 问题：**事实错误（最高优先级）**。al-Umari 原始数据是 mithqal 由「≥25 dirham」跌到「22 dirham 或更低」= **约 12% 跌幅**，不是 25%。「25%」几乎肯定是把 al-Umari 的「25 dirham 基准值」误读成「下降 25%」。更严重的是：文中把这个 25% 直接当作 al-Umari 同代记录的事实呈现（来源等级 primary），等于给一手史料安了一个它没说的数字。这个错在 storyboard `mm-n6` + narrative §0 line 64 + §1 line 114 + §3 line 469 **至少 4 处重复**。
   - 建议：全部改为「下降约 12%」或更稳的「下降到约 22 dirham（约 12%）」。可保留「跌势持续约 12 年」（这个是对的）。**必须改——这是会被史实党一查即破的硬数字错，且 narrative §0 是给学生看的『课本不会告诉你』段，错得最显眼。**

2. **[#14]** 叙事 §3 line 352：「**1998 年**联合国教科文组织正式承认 Kurukan Fuga 为『人类口头 + 非物质遗产』。」
   - 问题：**日期错误**。UNESCO「Manden Charter, proclaimed in Kurukan Fuga」实际是 **2009 年**列入 Representative List of the Intangible Cultural Heritage of Humanity（ich.unesco.org ID 00290）。1998 年无此认证。
   - 建议：改为「2009 年」。其余（七章/核心 7 条、与 Magna Carta 对照）与 UNESCO 描述一致，可保留。

3. **[#25]** 叙事 §3 line 716：「Tondibi 战役 **1591.4.13**。」
   - 问题：**月份错误**。Battle of Tondibi 实际为 **1591 年 3 月 13 日**（13 March 1591）。日/年对，月错（应 3 月非 4 月）。
   - 建议：改为「1591.3.13」。（注：storyboard `mm-n10` + narrative 时间线只写「1591」是对的，不用动；只需修 §3 这一处带具体日期的。）

4. **[#12]** 叙事 §0 line 61 · §3 line 416：Mali 人口「**4000-5000 万**」「比同期欧洲总人口 1/3」「比英格兰 6 倍」。
   - 问题：**数字偏高 + 文件内部冲突**。同 topic 的 storyboard `mm-n3` 用的是 **500-1500 万（5-15M，Levtzion/Niane range）**，更贴学界。narrative 的「4000-5000 万」量级过大（14 世纪西非帝国人口学界估计普遍远低于此），且与 storyboard 自相矛盾，学生跨 lens 会读到两个差 3-8 倍的数字。
   - 建议：把 narrative 的「4000-5000 万」统一下调到 storyboard 的「约 500-1500 万（学界 estimate range）」，并相应改掉「比欧洲总人口 1/3 / 比英格兰 6 倍」这类挂在虚高人口上的对照（或改成面积对照，面积对照本身是稳的）。

5. **[#8]** `mm-n8` / 叙事 §3 line 510-511：「al-Sahili **设计了** Djinguereber Mosque（led the design）。」
   - 问题：**归因偏强（引语/角色风险）**。文中 `mm-n8` 自己已引 Hunwick 1999，而 Hunwick 的实际结论是 al-Sahili 在 Djinguereber 的角色是「**装饰性/组织性，而非结构性建筑师**」。把他排成主设计师与所引学者结论冲突。
   - 建议：降级为「al-Sahili 参与 Djinguereber 的营建（装饰与组织）」或「相传 al-Sahili 主持/参与设计——但 Hunwick 1999 认为其角色偏装饰组织而非结构设计」。既保留人物又不抢功。

6. **[#21]** `ib-n8`：「30 年游历…144 个现代国家。」
   - 问题：**内部冲突（疑笔误）**。同 topic 叙事 §3 line 580 + `ib-n1` 周边均作「**44** 个现代国家」，通行说法也是约 44。`ib-n8` 的「144」多一位数，疑为笔误。
   - 建议：`ib-n8` 改为「44 个现代国家」与全文统一。低优先级但易改。

7. **[#6]** `mm-n6` / 叙事 §0·§1·§3：「这是人类史**第一次**有记录的『单笔金子破坏一国经济』事件。」
   - 问题：**绝对表述 + 程度存疑**。文中已做了一半反 Whig（明确「不是第一次通胀」并列罗马/汉/元）。但「第一次单笔财富破坏一国经济」仍是无来源的「第一次」绝对句；且经济史 Schultz 认为该金价波动「well within normal Mamluk fluctuations」——即「破坏一国经济」的程度本身学界有保留。
   - 建议：弱化为「这是**有记录中**单笔财富外溢冲击他国经济**最著名的早期案例之一**」，去掉「第一次/破坏一国经济」的绝对底座。低-中优先级（与 #4 同段，改 #4 时一并处理）。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| Aisha（14-20 岁 Mande 女孩 1413-1419 Timbuktu）| `aisha-1413`（全 12 节 N1-N12）| 虚构姓名/家庭（妈妈 Fatima qadi 家族、爸爸 Yaqub 商人、弟 Idris、外婆 Hawa、厨娘 Awa）、1416 妈妈被 Songhai raiders 带走、Bure 筛金、家中开教室——**均为叙事合成**；底层世界（Sundiata/Mansa Musa/Sankoré/Bure 黄金区/qadi 制度/Mande 织布/Songhai 1430s 分裂前夜 raid/al-Sa'di 1655）**全为 documented** | ✅ **已透明标注**：lens.nameCn「(虚构合成 1413-1419)」、lens.description 首句「你是 Aisha,一个虚构合成的…」、独立 `fictionalDisclaimer` 字段（详列真 vs 合成 + 类比 AoE Anacaona Jr / Reformation Sister Agnes）、N12 meta「虚构合成人物——但她代表的是真人」。**符合 §1.3 dark-topic 红线（composite 必须标明）** |
| Timbuktu 商人 Yusuf 1352 | 仅 narrative §3「普通人视角(cosplay 用)」| 虚构姓名/35 岁/具体商队遭遇（沙暴、Tuareg 抢劫、杀奴隶副手）| ⚠️ narrative §3 标题「(cosplay 用)」隐含演绎，但**该段无显式『虚构』disclaimer**。此人物未进 storyboard（不是上线 lens），仅 narrative 背景库。建议补一句 composite 标注，低优先级（非交互内容）|
| Timbuktu 女学生 Aisha 1413（narrative §3 版，与 storyboard Aisha 同名不同设定：15 岁/卒 1463/教 200 女孩）| 仅 narrative §3「普通人视角」| narrative §3 的 Aisha 是**另一个**草稿设定（爸爸 Sheikh Abu Bakr、1463 死），与 storyboard 的 Aisha（妈妈 Fatima、1419 开教室）**人设不一致** | ⚠️ 同名两套设定（narrative 草稿 vs storyboard 上线版）。上线 storyboard 版已 disclaimer 充分；narrative §3 草稿版无 disclaimer。建议统一或在 narrative 标注「以下为早期人物草稿，上线版见 storyboard」。低优先级（学生只见 storyboard 版）|

> 其余出场人物（Sundiata / Mansa Musa / Ibn Battuta / Mansa Sulayman / al-Sahili / al-'Umari / Ibn Khaldun / al-Sa'di / Sheikh Abd al-Rahman 等）均为**真实历史人物**（Sheikh Tahir / Sheikh Abd al-Rahman 这类 Sankoré marabout 是 Aisha lens 内的合成配角，挂在 Aisha 合成框架下，已被 fictionalDisclaimer 覆盖）。

---

## 文化对应硬禁自检（西非/伊斯兰史绝不用中国概念词）

> 第 1 条 cultural ban 专项扫描：检查是否误用玉玺/丞相/翰林/科举/郡县/朝廷 等中国概念词描述 Mali/伊斯兰制度。

- ✅ **未发现硬违规**。Mali 官职/制度一律用本土或伊斯兰词：Mansa（皇帝，明标 Manding 语非阿拉伯语）/ qadi（法官）/ marabout（苏菲苦行/学者）/ ulama（伊斯兰学者）/ Sharia / Kurukan Fuga / jeli（口传歌手）/ 总督（generic「governor」非「巡抚/总督」中国官名意涵）。
- ⚠️ **一处需留意（不算违规，属对照用法）**：`mm-n3` / 叙事 §3 line 422「12 省体系…**类似中国朝廷-郡县**体系」「跟同代中国朝廷-郡县体系结构相似」。这是**显式 cross-cultural 对照**（topic 头注第 1 条明确「允许中国 cross-cultural 对照」），不是用中国词命名 Mali 制度，**合规**。但建议确认「郡县」是作为类比出现（是）而非作为 Mali 制度名（否）——当前写法 OK。
- ✅ 黄金/盐贸易、Sudano-Sahelian 建筑、Sahara 驼队等均用西非/伊斯兰语境词，无中国污染。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `mansa-musa`（claim #1-13,23-25 多数）/ `ibn-battuta`（#16-22）/ `aisha-1413`（#27 + composite 表，N1-N12 数字 id，**N11=reflection 写 / N12=meta 读**结构已确认，N12 narrator 视角做 4-Topic information preservation closing）。
- **重点核查结论**：
  - **数字夸张（重点 A）**：主红旗 **#4 Cairo 25%（实为 ~12%）** 是本 topic 最硬的事实错（4 处重复 + 误挂 al-Umari）；#12 人口 4000-5000 万偏高且与 storyboard 5-15M 冲突；#6「第一次破坏一国经济」绝对句偏强。**反之**，4000 亿美金 myth(#24) / 三时点学者数(#10) / Ibn Battuta range(#16) / Abu Bakr II contested(#9) / 中国行 contested(#19) 全部已模范级 anti-fab，是本 topic 的强项。
  - **引语分层（Ibn Battuta《游记》逐字核）**：`ib-n7` 列的「Mali 比任何国家都安全」「孩子不背 Quran 就打」「女性不戴面纱」均为 Rihla 真实观察（Wikipedia/Rihla 印证），文中标为「我自己写的(Rihla)」属合理转述非伪逐字；Mansa Musa「只跪上帝」(#7) 为概括引语已加双 reading caveat。引语层处理**良好**，无伪造逐字。
  - **文化对应硬禁**：✅ 0 中国术语污染，唯一中国「郡县」出现处是合规的显式对照。
  - **合成角色（aisha-1413）透明标注**：✅ storyboard 上线版三重标注（nameCn + description + 独立 fictionalDisclaimer + N12），**达 dark-topic 红线标准**。仅 narrative §3 草稿版的两个 cosplay 人物（Yusuf / narrative 版 Aisha）缺 disclaimer，但不上线、低优先级。
- **日期错**：#14 UNESCO（1998→2009）、#25 Tondibi（4 月→3 月）两处确凿日期错。
- **内部一致性**：#12 人口（5-15M vs 4000-5000万）、#21 国家数（44 vs 144）两处文件内自相矛盾。
- **用到的外部核实来源**：Wikipedia（Mansa Musa / Sundiata Keita / Battle of Kirina / Mali Empire / Battle of Tondibi / Catalan Atlas / Sulayman of Mali / Timbuktu Manuscripts）、Britannica（Sundiata）、worldhistorycommons.org（al-Umari Cairo 账户，mithqal 25→22 dirham 原文）、UNESCO ich.unesco.org（Manden Charter / Kurukan Fuga 2009 ID 00290）、National Geographic（Haidara 2012 ~350,000 manuscripts 抢救）、baytalfann / Linda Hall（Ibn Battuta 117,000 km）。
- **总评**：本 topic 史学**整体纪律很高**——大量自带 contested-fact / estimate-range / myth-busting caveat（Abu Bakr II / 4000 亿 myth / 三时点学者数 / Ibn Battuta 3-5 倍 range / al-Sahili 已引 Hunwick），合成角色透明标注达红线，文化禁忌 0 污染。但有 **1 个硬数字错（Cairo 25%，应 ~12%，且误挂 al-Umari、4 处重复、出现在给学生的『课本不会告诉你』段）**+ **2 个日期错（UNESCO 2009 / Tondibi 3 月）**+ **2 处文件内数字冲突（人口 / 国家数）**+ **1 处与所引学者冲突的归因（al-Sahili 主设计师 vs Hunwick）**。**建议先处理 #4（Cairo 25%→12%）与 #14（UNESCO 1998→2009）再上线/再过 Gate 2**——这两条是最易被一查即破的硬错；其余 5 条为日期/一致性/措辞修订，可同批处理。
