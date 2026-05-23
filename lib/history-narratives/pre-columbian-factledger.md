# 前哥伦布美洲 1000-1532 Fact Ledger（事实账本）

> 机制定义见 `docs/HISTORY_EVIDENCE_LAYER.md` §3。
> **用途**：创始人**不逐字审全文**，只审本账本 + 🚩红旗句。
> **范围**：read-only on storyboard/narrative，**只写本账本文件**，绝不改内容。

```
topicId:    pre-columbian
生成日期:    2026-05-23
来源文件:    lib/history-storyboards/pre-columbian.js（3 lens: pachacuti-inca / malintzin-mediator / ix-mutal-weaver，各 12 节）
            + lib/history-narratives/pre-columbian.md（Part 1 背景铺垫）
claim 总数:  28
🚩 红旗数:   6（需创始人审）
补注:        本 topic 之前过了 4-agent review 但从未做 Fact Ledger，本账本为补建。
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
| 1 | 「Pachacuti 生于约 1418，在位 1438-1472，共 34 年」（pachacuti lens 描述 / `pc-N1` / `pc-N11` / `pc-N12`）| date | encyclopedia | Rowe 1945 帝国年表 r.1438-1471/72；考古倾向更早。文中「34 年」=1438→1472，与 Rowe 体系一致 | ✅verified |
| 2 | 「1438 Yahuarpampa『血原』反败为胜，Viracocha 携嫡子 Inca Urco 出逃，次子 Cusi Yupanqui 留守反击 Chanca」（`pc-N2` / `pc-N3`）| date / causal | encyclopedia | Chanka-Inca 战、Yahuarpampa(血原)、Viracocha 出逃、Cusi Yupanqui 留守 — 殖民期史料一致 | ✅verified |
| 3 | 「石头变战士（pururaucas）是 Sarmiento de Gamboa 1572 后世王朝 PR，框架是真细节是神话」（`pc-N3`）| quote / causal | textbook | 文中已显式标注 pururaucas 为后世神话化、引 Sarmiento 1572 + Julien 2000。框架真/细节神话的分层处理到位 | ✅verified |
| 4 | 「改名 Pachacuti = pacha(时间/大地) + kuti(翻转)『时间转折者』，自立第 9 任 Sapa Inca」（`pc-N3`）| quote / motive | encyclopedia | Quechua 词源 + 第 9 任 Sapa Inca，权威一致 | ✅verified |
| 5 | 「Cusco 设计成 puma 形：Coricancha 是**豹头**，Saqsaywaman 是**豹背/spine**」（`pc-N4`）| absolute / causal | encyclopedia | **方位记反**：主流传统（Sarmiento 记 Pachacuti 自己的 vision）= **Saqsaywaman 是豹头**，Coricancha 在城心代表豹心/腹。文中把头/背对调 | ✋flagged |
| 6 | 「Saqsaywaman 巨石 100-200 吨，无砂浆精准切割」（`pc-N4`）| number | encyclopedia | 主流记 100-300 吨（部分块 125-300 吨）。「100-200」保守稳妥，无砂浆干砌确证 | ✅verified |
| 7 | 「Coricancha 内墙镀金、金制玉米/羊驼，西班牙 1533 年融走」（`pc-N4` / `pc-N12`）| date / number | encyclopedia | Coricancha 金板（700 块用于 Atahualpa 赎金）、1533 西班牙融金，确证 | ✅verified |
| 8 | 「mit'a 令：每个成年男性每年欠帝国 90 天劳役；矿里死亡率高」（`pc-N5`）| number / motive | encyclopedia | mit'a 轮班劳役制确证；殖民期 mita 银矿（Potosí）高死亡率是后续史实，pre-Columbian 矿业死亡率为合理推断 | ✅verified |
| 9 | 「mitmaq 强制迁徙；被迁 ayllu 长老回头看祖坟山的瞬间；Doyle 1988 + Dean 2010 双重切断」（`pc-N6`）| motive / dramatization | inference | mitmaq 制度真实；「某长老回头看祖坟」是匿名演绎个体场景。文中已用「我不知道他们的名字」框定为代表性场景，非具名史实 | ✅verified |
| 10 | 「quipu：十进位位置编码 + 颜色/结型分类；不是文字替代是不同范式；至今未破译/能否记叙事仍争论」（`pc-N8`）| absolute | encyclopedia | Urton/Quilter 研究：base-10 十进位、叙事 khipu 至今无人成功「读」出，定性准确 | ✅verified |
| 11 | 「Qhapaq Ñan 约 40,000 公里；chasqui 接力一天传 250-400 公里；tambo 每 1.5-3 公里一站」（`pc-N9`）| number | encyclopedia | 40,000 km 确证；驿站间距确证；**chasqui 速度主流为 240-300 km/天**，文中上限「400」略高于通用数 | ⚠️downgrade-wording |
| 12 | 「美洲 1492 前无马/牛/驴/大型驯化哺乳；Diamond 1997 大陆生物地理」（`pc-N9`）| causal | textbook | 无大型驯化役畜确证；文中已对 Diamond 宏观叙事加 careful framing（工程决策仍是人做的）| ✅verified |
| 13 | 「panaca 木乃伊制度：死者财产永久锁定 panaca，继承人不能动 → 帝国结构性被迫不停扩张；Rostworowski 1999」（`pc-N10` / `pc-N12`）| causal | encyclopedia | split inheritance / panaca 制度 + 「扩张是结构强迫」是 Rostworowski 主流诠释，定性稳健（属史学诠释非铁律）| ✅verified |
| 14 | 「天花 1524-1527 先于 Pizarro 到达安第斯，杀死 Huayna Capac 和指定继承人 → Atahualpa/Huáscar 内战；天花 1518 起传播（Cook 1998）」（`pc-N11` / `pc-N12` / `ml-N4` / `ix-N6`）| date / causal | encyclopedia | 主流采纳（Cook 1998）；**但** McCaa「Why Blame Smallpox?」指出 1558 前安第斯天花的文献证据「thin and contradictory」，Huayna Capac 死因/年（1524-1530 区间）存学界争议。文中已挂 Cook 1998 并给区间，定性可接受 | ✅verified |
| 15 | 「帝国 1471 人口：Rowe 1946 约 600 万 / D'Altroy 2002 修订 900-1400 万」（`pc-N11`）| number | encyclopedia | 两个估值 + 「因无文字只能 quipu+考古推算」对冲到位 | ✅verified |
| 16 | 「1532.11.16 Cajamarca：Pizarro 168 人（62 骑 + 106 步）伏击；Atahualpa 带 6,000-8,000 随扈非全武装；当日 Atahualpa 被俘、随扈数千死、西班牙零阵亡」（`pc-N12`）| date / number | encyclopedia | 168 人 / 62 骑 / 106 步 / 1532.11.16 / 零西班牙死亡，全部确证 | ✅verified |
| 17 | 「『168 人征服 600 万人』是 myth；真因是天花+内战已使帝国内崩；Restall 2003《Seven Myths》」（`pc-N12`）| causal | textbook | Restall 2003 反 Whig 标准诠释，分层到位 | ✅verified |
| 18 | 「11 任 Sapa Inca 木乃伊 1532 仍在 Cusco，Pizarro 1559 下令毁掉」（`pc-N12`）| date / number | encyclopedia | 王室木乃伊持续参政、后被西班牙销毁，主流确证（具体销毁年份记述略有出入，1559 在常见区间内）| ✅verified |
| 19 | 「Maya 古典期(250-900)有 logosyllabic 文字 + 数学零概念（早于 Brahmagupta 628 数世纪）+ Long Count 精确到天、周期 5125 年」（narrative §1.1）| date / absolute | encyclopedia | Maya 词符+音节文字、Long Count 用零作占位符（约公元前已用）、~5125 年周期，确证。「零」严格说是**占位符零**早于印度，措辞「概念」略宽但学界常用此表述 | ✅verified |
| 20 | 「1428 Triple Alliance：Itzcoatl + Nezahualcoyotl(Texcoco) + Tlacopan 推翻 Tepanec(Azcapotzalco)」（narrative §3.4）| date | encyclopedia | 1427 开战 1428 胜、三城同盟、Itzcoatl r.1427-1440，确证 | ✅verified |
| 21 | 「Tenochtitlán 20-25 万人口，1500 年世界最大城市之一（与巴黎/君堡/北京同级）」（`ml-N1` / `ml-N9` / narrative §3.4·§5.2）| number | encyclopedia | 约 20 万（部分估 200,000-250,000，Hassig 1988，文中已注 scholars vary），世界级大城确证 | ✅verified |
| 22 | 「Aztec 人祭：popular 8 万/年 vs 学界 1-2 万/年（Clendinnen 1991）」（narrative §3.7·§6.2）| number | inference | 「人祭被夸大」方向正确；但「8 万」popular 数多指 1487 Templo Mayor 单次献祭传说，年度学界区间争议大（20,000 至更高），「1-2 万/年」属低端估值且 Clendinnen 本人对一切数字持审慎态度，挂她名略过实 | ⚠️downgrade-wording |
| 23 | 「Malintzin 受洗名 Marina；精通 Nahuatl + Chontal Maya，征服期学西班牙语」（`ml-N3` / `ml-N6`）| quote | encyclopedia | 受洗 Marina（doña Marina）、三/四语能力，确证 | ✅verified |
| 24 | 「Cortés 1519 凿沉大部分船（约 8-11 艘，Hugh Thomas 1993），非『英雄式烧船』，为防逃回 Cuba」（`ml-N6`）| number / motive | encyclopedia | scuttle 非 burn、防逃，文中已 careful framing 并给区间，处理良好 | ✅verified |
| 25 | 「La Malinche 意思是『Malintzin 的宫殿』或『跟 Malintzin 有关的地方』，中性词」（`ml-N12`）| quote | encyclopedia | **词源有误**：主流（Townsend / Wikipedia）= Malintzin + 呼格后缀 -e → Malintzine→Malintze，被西班牙人听成 Malinche；非「宫殿」义。「中性词、当时非贬义」的结论正确，但词源解释错 | ✋flagged |
| 26 | 「『叛徒』含义 1820 年代墨西哥独立后才出现」（`ml-N12`）| date / causal | encyclopedia | 1821 独立后、1826 匿名小说始现「淫荡阴谋叛徒」形象，后经 Octavio Paz 固化，确证 | ✅verified |
| 27 | 「Cuauhtémoc 22 岁，1521.8.13 投降被俘；1525.2.28 Acalan 被 Cortés 处死，临终『我早该死在 Tenochtitlán』」（`ml-N9` / `ml-N11`）| date / number / quote | encyclopedia | 投降日 1521.8.13 / 处死日 1525.2.28 / Acalan 确证；**「22 岁」过实**：生年 c.1495-1502 学界不定，1521 年龄应为约 19-26 岁区间。临终引语来自 Bernal Díaz 1568（文中已注「只在回忆录里留影子」）| ⚠️downgrade-wording |
| 28 | 「Diego de Landa 1562 在 Maní 烧掉**几千份** Maya 手稿；Itzá 1697.3.13 被 Martín de Ursúa 攻破，比 Aztec 多抵抗 176 年」（`ix-N2` / `ix-N8` / `ix-N9` / `ix-N12` / narrative §2.4）| date / number | encyclopedia | **Maní 1562 确证**（auto-da-fé）、**Itzá/Nojpetén 1697.3.13 Martín de Ursúa 确证**、176 年对（1521→1697）。**但「几千份手稿」过实**：实际烧毁 codices(书)约 27 部 + 数千件偶像/器物；「thousands of manuscripts」是常见 popular 夸张 | ⚠️downgrade-wording |

---

## 🚩 红旗句（创始人必审）

> 只有 `needs-source` / `downgrade-wording` / `flagged` 三类进这里。每条给：问题 + 建议处理。

1. **[#5]** `pc-N4`：「城心是**豹头**——那里建 Coricancha……向北伸出的山脊是**豹背**——那里建 Saqsaywaman。」
   - 问题：**方位记反（事实错）**。主流传统（Sarmiento de Gamboa 记 Pachacuti 自己的城市规划 vision，World History Encyclopedia / Wikipedia 一致）是 **Saqsaywaman = 豹头**（建在城北高地的要塞），Coricancha 位于城心、代表豹的心/腹（Huacapata 圣广场）。文中把「头」给了 Coricancha、「背」给了 Saqsaywaman，正好对调。
   - 建议：对调——「城心是豹身/豹心，那里建 Coricancha；向北高地的要塞 Saqsaywaman 是豹头，zigzag 巨石墙是豹的牙齿」。这是唯一一条**与权威正面冲突的硬错**，建议上线前修。

2. **[#25]** `ml-N12`：「西班牙人叫我 La Malinche，意思是『Malintzin 的宫殿』或『跟 Malintzin 有关的那个地方』，中性词。」
   - 问题：**词源解释错（引语/语源风险）**。学界主流（Camilla Townsend，与 storyboard 自己依赖的同一来源）：La Malinche = Malintzin 加 Nahuatl 呼格后缀 -e（Malintzine → Malintze），被西班牙人听成 Malinche；与「宫殿/地方」无关。文中「当时是中性词、不是『叛徒』」的核心结论**正确且重要**，只是把词源讲错了。
   - 建议：把括号里的释义改为「『Malinche』是西班牙人对 Malintzin（Marina+尊称 -tzin）的口音转写，当时是中性称呼，不含『叛徒』义」。结论保留，删掉「宫殿」错释。

3. **[#28]** `ix-N2`·`ix-N8`·`ix-N9`·narrative §2.4：「Diego de Landa 1562 年在 Maní 一口气烧掉了**几千份** Maya 手稿。」
   - 问题：**数字过实（重点 A 数字夸张）**，且在 4 处反复出现，放大风险。1562 Maní auto-da-fé 实际烧毁的 Maya **抄本/书（codices）约 27 部**（今仅存 4 部），外加「数千件偶像与文化器物」。「几千份手稿」把器物数挪到了书稿头上，是流行叙事里的典型放大。事件本身（焚书、文化抹除）完全真实。
   - 建议：改为「烧掉了大量 Maya 抄本（仅 4 部存世至今）和数千件圣物」/「焚毁了几乎所有 Maya 书稿」，去掉「几千份手稿」的伪精确数。情绪与史实底座都保得住。

4. **[#11]** `pc-N9`：「chasqui……一天，消息跑 **250 到 400 公里**。」
   - 问题：**数字偏高（重点 A 轻类）**。主流权威多记 chasqui 接力一天约 **240-300 公里**（个别来源到 300）。「400」超出通用上限。
   - 建议：改「250 到 300 公里」或「约 300 公里」更稳。低优先级（下限 250 没问题，仅上限偏高）。

5. **[#22]** narrative §3.7·§6.2：「人祭 popular 8 万/年 vs 学界 1-2 万/年（Clendinnen 1991）。」
   - 问题：**数字归因略过实（重点 A + 引语 C 轻类）**。「人祭被流行媒体严重夸大」的方向**正确且是好 framing**；但年度学界数字争议远大于「1-2 万」（从两万到更高都有人主张，Clendinnen 本人对所有数字持审慎、不轻易给年度总量），把「1-2 万/年」硬挂在 Clendinnen 名下略显确指。另「8 万」popular 数通常指 1487 Templo Mayor 单次落成献祭传说，非「每年 8 万」。
   - 建议：软化为「popular 来源常引的巨大数字（如一次献祭 8 万）被学界视为严重夸大；实际年度规模学界尚无定论，但远低于流行说法（Clendinnen 1991 强调数字高度不确定）」。低优先级。

6. **[#27]** `ml-N9`：「Cuauhtémoc，Aztec 最后一任 tlatoani，**22 岁**……」
   - 问题：**年龄伪精确（数字轻类）**。Cuauhtémoc 生年学界不定（c.1495-1502），1521 年实际年龄应在约 19-26 岁区间，「22 岁」是落在区间内的一个点值，但被排成确指。
   - 建议：改「二十出头」/「约二十出头的青年」避免伪精确。极低优先级（在区间内不算硬伤）。

---

## composite / 演绎角色清单

> 列出本 topic 所有合成人物（虚构姓名/年龄/场景），逐个确认文中是否已透明标注。

| 角色 | lens | 合成成分 | 文中是否已标注 |
|---|---|---|---|
| **Ix Mutal Ahaw** | `ix-mutal-weaver`（全 12 节）| 名字 + 个人生平（c.1480-1545、织 huipil、丈夫小商人、子女、活到 65 岁）全部虚构；底层集体史（Postclassic 分散政体、三姐妹农作、backstrap loom、天花 80-95% 死亡率、encomienda、记忆断链、名字被殖民档案抹除）为 documented | ✅ **已透明标注（多重）**：lens 含 `fictionalDisclaimer: true` 字段；`ix-N1` 开篇方括号「这个故事是虚构 composite，不是真人传记……她代表的群体真实存在：16 世纪 Yucatán Maya 平民女性约 100 万人」；`ix-N11` 再次明示「这个名字是现代学者……取的（这是虚构 composite 的一部分）」；`ix-N12` 结尾第三次明示。narrative §2.4 用整节论证「为什么 Lens 3 必须是虚构 composite」（平民妇女无个人史料 / 1562 焚书 / 男性祭司视角）。**符合 dark-topic composite 红线，标注规格高于同类 topic** |
| 匿名 ayllu 长老（回头看祖坟）| `pc-N6` | 无名个体的迁徙场景演绎 | ✅ 文中「我不知道他们的名字」「一个老人」框定为代表性场景，非具名史实 |
| 匿名 ayllu 长老（接 quipu 通告）| `pc-N5` | 无名个体接劳役令的场景演绎 | ✅ 文中「那个长老叫什么名字——我不知道」明示匿名代表性 |

> 其余出场人物均为**真实历史人物**：Pachacuti / Cusi Yupanqui / Viracocha / Inca Urco / Topa Inca / Huayna Capac / Atahualpa / Huáscar / Pizarro（Inca 线）；Malintzin / Cortés / Aguilar / Cuauhtémoc / Bernal Díaz / Jaramillo / Martín / Moctezuma II（Aztec 线）；Itzcoatl / Nezahualcoyotl / Diego de Landa / Montejo 父子 / Martín de Ursúa（Maya 线）。Pachacuti / Malintzin 两 lens 为第一人称内心戏（属合理 inference，挂在已证事实上，未虚构生平骨架）。

---

## 文化对应硬自检（中美/南美 文明 vs 中国概念词）

> 任务硬约束：中美/南美文明绝不能套用中国制度术语（玉玺/丞相/科举/etc.）；Inca/Aztec/Maya 必须用各自的制度术语。

**结论：PASS（无违规）。** 三 lens + narrative 全程使用各文明本族术语：
- **Inca/安第斯**：Sapa Inca、ayllu、mit'a、mitmaq、panaca、quipu(khipu)、Qhapaq Ñan、Coricancha、Inti、Inti Raymi、huaca、camayoc、yanakuna、Tawantinsuyu、suyu、chasqui、tambo、Intip Churin。
- **Aztec/Nahua**：tlatoani、calmecac、telpochcalli、pipiltin、macehualtin、pochteca、tlatlacotin、chinampa、calendar round、tonalpohualli、xiuhpohualli、cacique、Tlaloc、Quetzalcoatl、Huitzilopochtli。
- **Maya**：kuchkabal、batab、chilam、katun、huipil、milpa、Chaac、K'awil、Kukulkan、Chilam Balam、Three Sisters。

**中国元素仅以「显式跨 Topic 对照锚点」出现**，且每处都明确标为比较（不混入美洲文明自身描述）：唐朝长安（§1.3 800 年三文明同步）、Genghis Khan 1206（`pc-N3`·`pc-N9` Yam 驿站对照）、Mali Aisha 1413（`pc-N8` 非文字行政对照）、Yelü Chucai（`ml-N12` 双语 broker 对照）、Kangxi 康熙（`ix-N12` 1697 时间锚）、「汉字+假名」（§1.1 仅作 logosyllabic 文字**类型**类比）、明朝士农工商（§3.5 仅作四层社会**结构**类比）。这些是合规的世界史缝合，非术语污染。

---

## 备注

- **抽取覆盖的 lens**：3 个全覆盖 —— `pachacuti-inca`（claim #1-18）/ `malintzin-mediator`（#14,21,23-27）/ `ix-mutal-weaver`（#14,19,28；含 fictionalDisclaimer composite 重点节点）+ narrative Part 1（#19-22,28 背景事实）。
- **重点核查结论**：
  - **重点 A（数字）**：主红旗 #28「Maní 几千份手稿」⚠️降级（实为~27 部书+数千器物，且 4 处复用）；#11 chasqui 400km 偏高、#22 人祭 1-2万 归因过实、#27 Cuauhtémoc「22 岁」伪精确为轻类。
  - **重点 B（代表性/composite）**：Ix Mutal 透明标注**规格极高**（fictionalDisclaimer 字段 + 3 节正文明示 + narrative 整节论证），无红旗；两个匿名 ayllu 长老场景也已框定为代表性，无红旗。
  - **重点 C（引语分层）**：pururaucas 石头变战士（#3，已标 Sarmiento 1572 PR）、Cuauhtémoc 临终语（#27，已标 Bernal Díaz 1568）、Crocker 式传说句——本 topic 引语分层处理良好；唯一引语类硬错是 #25 La Malinche 词源（非引语，是语源释义错）。
  - **重点（事实硬错）**：仅 **#5 Cusco puma 头/背对调** 一条与权威正面冲突，建议上线前修。
- **用到的外部核实来源**：Wikipedia（Pachacuti / Chanka-Inca War / Inca road system / Chasqui / Battle of Cajamarca / Spanish conquest of Inca / Fall of Tenochtitlan / La Malinche / Cuauhtémoc / Sacsayhuamán / Quipu / Diego de Landa / Nojpetén / Spanish conquest of Petén / Aztec Empire / Mesoamerican Long Count / Human sacrifice in Aztec culture）、World History Encyclopedia（Pachacuti / Sacsayhuaman / Fall of Tenochtitlan）、Britannica（Battle of Tenochtitlan / Cuauhtémoc）、McCaa「Why Blame Smallpox?」(umn.edu，天花文献存疑性)、Townsend 转述（La Malinche 词源 + traitor 标签 + Malintzin's Choices）、Archaeology Magazine / Yucatan Times（Maní 1562 codices 数量）。
- **总评**：史实骨架**整体稳健**——Pachacuti 年表、Yahuarpampa、Qhapaq Ñan 40,000km、quipu、panaca、Cajamarca 168 人、Tenochtitlán 75 天/1521.8.13、Triple Alliance 1428、Long Count 零、Malintzin 三语+受洗 Marina+traitor 标签 1820s、Diego de Landa 1562、Itzá 1697 全部经权威核实通过；composite(Ix Mutal) 透明标注规格高于同类 topic；**文化对应硬自检 PASS（零中国术语污染）**。6 条红旗中 **#5（puma 头/背对调）是唯一与权威正面冲突的硬错，建议上线前修**；**#25（La Malinche 词源）与 #28（Maní 几千份手稿）为应处理项**（一为语源错、一为数字夸张且 4 处复用）；其余 3 条为低优先级数字/归因微调。无 `needs-source`（无悬空高风险事实）。**建议先处理 #5 / #25 / #28 再上线。**
