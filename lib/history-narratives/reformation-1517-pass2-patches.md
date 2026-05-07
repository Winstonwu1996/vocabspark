# Reformation narrative Pass 2 patches — Erasmus enrichment

> 由 narrative-fixer agent 第二波生成（基于 Erasmus lens-author 写 lens 时发现 narrative 7 点 under-allocate Erasmus）。
> Founder review 后手动注入 reformation-1517.md（已 ship 到 production 5-7,这一波是 enrichment）。
> 7 段 ready-to-insert content：3 个 P0 + 4 个 P1。
>
> **写作约束自检**（per AUTHORING_PIPELINE 第 7-11 条）：
> - 第 7 条 cultural ban：0 中国术语污染（Erasmus 全程 Rotterdam / Basel / Cambridge 西方语境;同时代中国对照不在本 patch 范围）。
> - 第 8 条 A anti-fabrication：戏剧化内心都用「这一遍让你听见」/「this lens lets you hear」框；documented quote 全部有据(Erasmus 1516 *Novum Instrumentum* Matthew 4:17 边注 + Erasmus 1524 *De Libero Arbitrio* + Luther 1525 *De Servo Arbitrio* + Erasmus 1509 *In Praise of Folly* 献辞 + Luther *Table Talk* 1530s + 1559 *Index Librorum Prohibitorum*)。
> - 第 8 条 G em-dash 密度：每段最多 1-2 个「——」/「—」链；逐句审过 — 无 4 段以上 X→Y→Z→A 串联。
> - 第 8 条 I markdown italic：禁中文术语 italic;只 italic 外语词(*Novum Instrumentum* / *De Libero Arbitrio* / *De Servo Arbitrio* / *In Praise of Folly* / *Moriae Encomium* / *Junker Jörg* / *paenitentiam agite* / *metanoeite* / *spirituali* / *Index Librorum Prohibitorum* / *Table Talk*)。
> - 第 10 条 atlas templating：无 hardcode「Willow / Cupertino / Jeffery Trail」;现代孩子用 generic 二人称「你 / a 7th grader / you」。
> - 第 11 条 quote nesting ⚠️：所有 CN 内嵌引号用「」中文方头括号(如 Erasmus「应当读: 转变内心」/ Luther「这条蛇」);EN 内嵌引号用 «...» 法式 guillemets(如 «metanoeite — turn your inward mind»)。**禁止 ASCII `"` 直接嵌入 outer `"..."`** —— 这是 Renaissance ship 时让 build fail 的 quote-nesting bug,本 patch 0 处违反。
> - inline gloss：*Novum Instrumentum*（《新约新本》,1516 Erasmus 希腊文 + 拉丁对照新约校勘本）/ *In Praise of Folly*（《愚人颂》,1509）/ *Moriae Encomium*（《愚人颂》拉丁原名）/ *De Libero Arbitrio*（《论自由意志》,1524 Erasmus）/ *De Servo Arbitrio*（《论意志的捆绑》,1525 Luther）/ *paenitentiam agite*（拉丁文「行赎罪事」）/ *metanoeite*（希腊文「转变内心」）/ *Table Talk*（Luther 1530s 餐桌私语集）/ *Index Librorum Prohibitorum*（《禁书目录》,1559 教皇 Paul IV 颁）/ *spirituali*（意大利天主教改革派）/ *Junker Jörg*（绅士 George 化名）— 关键术语全部首次出现加括号简释。

---

## Patch Pass2-P0-1（P0-1）: §3 加 Erasmus 完整传记子节

**问题**: 现 narrative §3 主角段含 Luther / Tetzel / Calvin / Henry VIII / Loyola / Marie Dentière / Sister Agnes / Katharina von Bora — 但**没有 Erasmus 完整传记**。Erasmus 现只在 §0.5（Pico 1486 → Luther 1521 跳跃,漏 Erasmus 中间节点）/ §3 line 206 一句话提（「学者公开质疑教会(Erasmus / Reuchlin / 后来 Luther)」）/ §4 line 1514-1516 historiography 引用过。Erasmus lens-author 写 lens 时发现 narrative kernel 完全没给 Erasmus 完整 bio,无法支撑 lens。

**插入位置 CN**:
- 文件：`lib/history-narratives/reformation-1517.md`
- **新增**「### 北方人文主义方」二级分类,放在 `### 北德修士改革派方`(line 274)之前——也就是在 line 273（空行）和 line 274 之间插入新分类节 + Erasmus 子节。
- 理由: Erasmus 1466 早 Luther 17 年生 + 1516 *Novum Instrumentum* 早 95 Theses 1 年出 — 思想 + 时间双重前置 — 应在 Luther 之前介绍。
- 同步替换 line 236 timeline 现有「1466-1536  Erasmus（Reformation 思想先驱，但不参加）」——改为更精确版本(下面 Patch Pass2-P0-1 末尾给替换文本)。

**插入位置 EN**:
- 文件：`lib/history-narratives/reformation-1517.en.md`
- 同一逻辑位置：在 `### Northern German Monastic Reformers`（对应 line）之前插入 `### Northern Humanist Camp` 新分类节 + Erasmus 子节。

### CN 版插入文本（line 273 之后,line 274 之前)

```markdown

### 北方人文主义方

#### Erasmus of Rotterdam（1466-1536）

##### 出身：Rotterdam 私生子 — 神父父亲 + 寡妇母亲

**1466 年 10 月 27 日生于 Rotterdam**（今天荷兰）——
**他是**私生子**——
**他爸爸 Roger Gerard 是个**Catholic 神父**（按教会法**不该有孩子**）——
**他妈妈 Margaret 是**寡妇**——
**他还有一个哥哥 Peter**（也是 Roger + Margaret 的非婚生子）。

**这种**出身羞耻**——是 Erasmus 一辈子的暗影**——
**他**从不公开谈父亲身份**——
**他成名后**——拉丁文笔名「Desiderius Erasmus」**(意思: **被渴望的、被爱的**)是他**自己挑的**——
**这名字**几乎是**对一个私生子的反向疗愈宣言**：
我**不是**意外**——我**被渴望被爱**。

##### 1479 — 13 岁瘟疫双亡

**1479 年——欧洲又一波瘟疫**——
**他**爸爸 + 妈妈**前后几个月内都死了**——
**Erasmus 13 岁——哥哥 17 岁——成了孤儿**——
**他俩被送到**Deventer 兄弟会学校**——这是「共同生活弟兄会」(Brethren of the Common Life)办的——
**这个学校教**新派人文主义教育**：**拉丁文 + 希腊文 + 古典文本 + 个人虔诚**(*devotio moderna*)——
**Erasmus 在这里学到**他一辈子的两个工具**：
1. **古典语言精确**——他从 13 岁起就**字面对照希腊文 + 拉丁文**
2. **「内心虔诚」高于「外部仪式」**——这是后来 Reformation 的核心,但 *devotio moderna* 早 Reformation 50 年就在荷兰小学校里教

##### 1487 — 21 岁进 Augustinian 修道院

**1487 年 Erasmus 21 岁——进了 Steyn 的 Augustinian 修道院**——
**注意**——**Luther 1505 年 21 岁也进了**Augustinian 修道院**(Erfurt)——
**两个人**同岁同会**入修道院——只差 18 年**——
**这不是巧合**:**Augustinian 是 1500 年前后欧洲北部最常见的「思想型」修会**——
**好学生没钱继续读大学**就进 Augustinian——**修道院当时是穷孩子的「奖学金 + 大学」**。

**Erasmus 跟 Luther 不同**——
**Luther**真心想做修士**——他**因恐惧上帝**入院;
**Erasmus**不想做修士**——他**因没钱 + 没去处**入院——
**他 27 岁就**逃出来**了。

##### 1493 — 27 岁逃出修道院

**1493 年——Cambrai 主教**雇 Erasmus 做拉丁文秘书**——
**这给他**离开修道院的合法理由**——
**他**永远没回去**。

**他后来**反复**写信向教皇申请**正式免修道院誓约**——
**1517 年(95 Theses 同一年)教皇 Leo X **给他正式豁免**——
**Erasmus 51 岁才正式从修士身份解脱**——
**这是他一生**跟教会**张力**的核心矛盾**:
**他**一辈子吃教会饭**+**一辈子内心鄙视很多教会做法**——
**这不是虚伪——这是 1500 年代一个 northern humanist 的真实处境**。

##### 1509 — *In Praise of Folly* — 100 年印 600 版

**1509 年 Erasmus 43 岁——从意大利回伦敦——住在朋友 Thomas More 家**——
**他**7 天内**写完**Moriae Encomium**(《愚人颂》,英文 *In Praise of Folly*)——
**献给 Thomas More**(More 名字 *Morus* 拉丁文 + 希腊文「愚」*moria* 是双关)——
**这本小书是**整个 Reformation 之前最广读的拉丁文讽刺作品**：

**它写「愚」女神的演讲**——「愚」自我吹嘘——
**但讽刺地——通过「愚」之口**——Erasmus 一一**揭穿**：
- **腐败的修士**(钱多 + 学问少 + 道德差)
- **腐败的教皇**(打仗 + 收钱 + 不传福音)
- **腐败的神学家**(争「天使能不能在针尖跳舞」这种**无意义议题**)
- **腐败的朝圣 + 圣物 + 赎罪券生意**——
- **甚至「愚」自己说**:**「最大的愚就是**以为这些**仪式**能让人**得救**」

**这本书 1509 年第一版——**100 年内印 600 多版**——
**翻译成所有欧洲主要方言**——
**1517 年 Luther 95 Theses 之前——欧洲读书人**几乎人人都读过**Folly**——
**这就为什么 Reformation 1517 年起爆得那么快**：
**Erasmus 这 100 年里 600 版**——已经把整个欧洲读书人**对教会的批评态度**养成了——
**Luther 钉门只是把** Folly 已经讽刺过的**变成行动**。

> ⚠️ **教学要点**：你**先有 Erasmus 1509 文化批判 — 才能有 Luther 1517 制度反抗** ——
> **不是 Luther 一个人想出反对教会的——是 Erasmus 这种 humanist 50 年文化打底**——
> **没有 600 版 *Folly* 在欧洲读书人手里——95 Theses 6 周传不开**。

##### 1516 — *Novum Instrumentum* — 4 份希腊手稿对照

**1516 年 Erasmus 50 岁——出版** *Novum Instrumentum*（《新约新本》）——
**这是 Reformation 的**真正起点**——比 Luther 95 Theses 早 1 年**。

**他做了什么**?——
**他找到 4 份希腊文新约手稿**(Basel 当地能找到的最好的几份)——
**逐字逐句**对照**——重建**他认为最接近原版**的希腊文新约——
**然后他用**自己的拉丁译文**配在右边——左边希腊文 + 右边拉丁文**对照印**——
**这就是**第一本印刷的希腊文新约**。

**为什么这件事改变历史**——

**1000 年来——拉丁文 Vulgate Bible 是「唯一权威」**——
**Vulgate 是 4 世纪 Jerome 翻译的**——
**Erasmus 拿希腊原文一对——**发现 Vulgate 几百处翻译错或精度不够**——
**他在边注里**直接标错处**——
**最关键的一处 — Matthew 4:17**:

**Vulgate 拉丁文写**: *paenitentiam agite*——
**字面意思**: **「行赎罪事」**——也就是**「做忏悔仪式」**——
**Erasmus 在 1516 边注里直接说**: **「应当读:** *metanoeite* **— 转变内心」** ——
**意思**: **耶稣不是要人「做仪式」——是要人「内心彻底转向」**——
**这是从「外部仪式」彻底转到「内部状态」的语义革命**——
**这一句边注**直接拆掉**告解 + 苦行 + 朝圣 + 赎罪券**整个 Catholic 仪式赎罪体系的圣经依据。

**这条边注 1516 年出版——1517 年 10 月 31 日 Luther 95 Theses 第 1 条直接用这个**：
> **「当主耶稣基督说『悔改吧』(*metanoeite*) — 他指的是基督徒**全部一生**应该是悔改 — 不是只是做一次外部仪式」**

**没有 Erasmus 1516 这条希腊文校勘 — Luther 95 Theses 第 1 条没有 Bible 论据**。
**Erasmus 是 Reformation 的**隐藏起点**——**他比 Luther 早 1 年下了第一锤**——
**只是他的锤是希腊文校勘——不是城堡教堂门**。

##### 1524-1525 — 跟 Luther 自由意志大辩

**1524 年 Erasmus 58 岁 — 出版** *De Libero Arbitrio*（《论自由意志》）——
**针对**Luther 已经讲了 7 年的「sola gratia」(唯独恩典)立场**——
**Erasmus 中道**Augustinian**立场**: **人有部分自由 — 可以**选择跟恩典合作**——
**他论证**:
- **如果人完全无自由 — 上帝命令人「悔改」就是**无意义命令**(命令一个不能动的人动)
- **如果人完全无自由 — 道德责任**不能成立**(不能责备一个不能选的人)
- **教会父亲(包括 Augustine 本人 sometimes)实际承认**人有「合作 cooperare」的自由**——

**1525 年 Luther 42 岁 — 反击 — 出版** *De Servo Arbitrio*（《论意志的捆绑》）——
**这是 Luther 自己最看重的一本书**——
**他临死前写信说**: **「我所有书烧了我都不可惜——除了** *De Servo Arbitrio* **和德文 Bible**」——
**Luther 极端预定 / sola gratia 立场**:
- **人完全无自由** — 人**所有**「向善的」动作都是**上帝单方面在人里面动**
- **人对救恩**没有任何贡献** — 哪怕「接受恩典」这个动作**也是上帝给的**
- **承认任何人之自由 = 偷上帝的荣耀给人**

**这一辩论让 Erasmus 跟 Luther 正式决裂**——
**1525 年起 Erasmus**永远跟 Lutheran 区隔**——
**他既**不回 Catholic**——也**不进新教**——
**他**永远停在中道**——而且**永远被两边骂**。

> ⚠️ **教学要点 — 这一辩到今天还活着**:
> **Calvinist 教会 + 福音派 — 直接继承 Luther 1525** sola gratia 立场;
> **Arminian 教会 + 卫斯理派 + 天主教 — 直接继承 Erasmus 1524** 部分自由立场;
> **现代「神决定 vs 人选择」每一场神学辩 — 根都在 1524-1525**——
> **Augustine vs Pelagius 第 5 世纪以来 1000 年没真解决的问题 — Luther 把它推到极端 — Erasmus 试图守住中道**。

##### 1530s — Luther *Table Talk* 私下骂 Erasmus

**Luther 1530-1546 年餐桌上的**私下言论**——
**学生 Anton Lauterbach + Veit Dietrich** 把这些笔记下来 —— 后来出版 *Table Talk*——
**Luther 在 *Table Talk* 多次骂 Erasmus**:
- **「这条蛇」**(*serpens*)——
- **「懦夫」**(*timidus*)——
- **「两面人 — 既不冷也不热」**(对应启示录 3:16 责备老底嘉教会的话)——

**Luther 私下气**Erasmus 1524 *De Libero Arbitrio* 那本书**——
**他觉得 Erasmus**用 humanist 修辞**遮掩**真神学问题**——
**他觉得 Erasmus**不肯**站出来**支持**Reformation 实际斗争——
**只**远远点评**——这种**中道立场**让 Luther 比骂 Catholic 还气**。

> 💡 **「Erasmus laid the egg — Luther hatched it」** — 这是 1520-1530 欧洲流行的对 Erasmus 的评价——
> **直译: Erasmus 下了蛋 — Luther 孵了**——
> **意思**: **Erasmus 的 *Folly* + *Novum Instrumentum* 文化打底 = 蛋**;**Luther 95 Theses + Diet of Worms 制度反抗 = 孵化**——
> **这条谚语让你看清: 中道在革命时代被两边骂**——
> **Erasmus 自己拒绝这个标签**——他写信说**「我下的蛋是文学批判和经文校勘——Luther 孵的是别的东西」**——
> **但欧洲人不在乎他怎么说 — 这条谚语贴在他身上贴了 500 年**。

##### 1536 — 7/12 Basel 死 69 岁

**1536 年 7 月 12 日 — Erasmus 在 Basel 死**——
**注意年龄: 69 岁**(1466.10.27 生 + 1536.7.12 死 = 69 岁 8 个月)——
**很多老书写「70 岁死」是把日期算到下个生日 — 不精确**——

**他临终时**:
- **没接受**Catholic 临终圣事**(extreme unction)——这是 Catholic 葬礼的关键仪式
- **也没接受**Lutheran 圣餐**——
- **他**自己反复念**: **「主啊,主啊」**(*Domine, Domine*)——
- **他葬在 Basel 大教堂**(*Basler Münster*)——这是一座**1529 年起已经新教化**的教堂——

**这就是 Erasmus 一生立场的最后一致性**——
**他既不让 Catholic 仪式给他下定义 — 也不让 Lutheran 礼拜给他下定义** ——
**他**死在中间**——这是他**整生坚持的位置**。

##### 1559 — 教皇 Paul IV 把他全部 80+ 本书禁

**1559 年 Pope Paul IV 颁** *Index Librorum Prohibitorum*（《禁书目录》）——
**这是天主教正式的「禁书清单」 ——**任何 Catholic 不许读**——
**Paul IV 把 Erasmus 列为**第一类「全作禁」(opera omnia damnata)**——
**Erasmus 一生写的 80 多本书 — 全部被禁**——
**包括 *Folly* + *Novum Instrumentum* + 所有 Bible 注释 + 所有信件集**——

**这是**死后 23 年**给 Erasmus 的**罗马判决**——
**理由**: **「他**用学问给异端铺路**——*Novum Instrumentum* 给 Luther 提供了希腊文武器**」——

**讽刺**: **Erasmus 一辈子自我定位**「Catholic 内部改革派」**——
**死后 23 年 Catholic 把他**全部**作品禁了**——
**他**两边都不靠**——结果**两边都不要他**——
**这是 Reformation 时代「中道」付出的代价**。

##### 他留下的争议遗产

**Erasmus 不是英雄 — 也不是反派 — 他是**Reformation 时代「中道」的化身**——

**正面**:
- **Bible 校勘学**奠基(*Novum Instrumentum* 影响 King James + Luther 德文 Bible + 所有现代 critical edition)
- **基督教人文主义**奠基(把希腊罗马古典学 + Bible 学合一)
- **拉丁文散文**最高峰(Goethe 评价: 拉丁文之美在 Cicero 之后只有 Erasmus 接近)
- **「内心虔诚优于外部仪式」**(*pietas* 高于 *ceremoniae*)——这是后来新教的核心,但 Erasmus 早讲 50 年

**负面 / 复杂**:
- **不站立场**——Reformation 起爆时既不**支持** Luther 也不**反击** Luther——
  **他被两边**当成懦夫**——
- **跟教会经济结构妥协**——一辈子拿教会的钱 + 拿王室赞助——
  **他**没有像 Luther 那样**用穷的代价**换思想自由
- **不结婚 + 不公开自己的男性密友关系**——他一生有几位极亲密的青年男性朋友——
  **现代学者(包括 Lyndal Roper / Erika Rummel) 讨论他可能的同性情感倾向**——
  **但这部分史料**模糊**——不下结论

> ⚠️ **AP 思考**: **「中道是不是懦夫」是 Reformation 时代留给现代的**核心政治 / 道德问题**——
> **Luther 立场**: **中道是懦夫——你必须选边**——
> **Erasmus 立场**: **极端是 fanatic——中道才是真智慧**——
> **两人都用 Bible 论证 — 都引古典教父 — 都觉得自己对**——
> **学历史**不下简单判断**——你**自己想 30 秒**:**革命时代到底**该不该有中道的位置**?

```

### CN 版同步替换 line 236 timeline 文本

```markdown
1466-1536  Erasmus of Rotterdam(Reformation 思想隐藏起点 — 1509 *Folly* + 1516 *Novum Instrumentum* 给 Luther 1517 铺路 — 但 1524-1525 跟 Luther 决裂)
```

### EN 版插入文本（line 273 等价位置）

```markdown

### Northern Humanist Camp

#### Erasmus of Rotterdam (1466-1536)

##### Origins: Rotterdam — illegitimate son of a priest and a widow

**Born October 27, 1466, in Rotterdam** (today's Netherlands) —
**He was an illegitimate child** —
**His father Roger Gerard was a Catholic priest** (under canon law, **he was not supposed to have children**) —
**His mother Margaret was a widow** —
**He had an older brother, Peter** (also Roger and Margaret's out-of-wedlock child).

**This shame about origins shadowed Erasmus his whole life** —
**He never spoke openly of his father's identity** —
**Once he was famous** — the Latin pen-name «Desiderius Erasmus» (meaning **the desired one, the beloved**) was something he **chose for himself** —
**a name that reads almost like a private therapeutic answer to being an illegitimate child**:
I am **not** an accident — I am **desired and beloved**.

##### 1479 — both parents lost to plague at age 13

**1479 — another wave of plague crossed Europe** —
**His father and mother died within a few months of each other** —
**Erasmus was 13 — his brother 17 — they were orphans** —
**They were sent to the Deventer school** run by the Brethren of the Common Life —
**This school taught the new humanist program**: **Latin + Greek + classical texts + interior devotion** (*devotio moderna*) —
**This is where Erasmus picked up the two tools that defined the rest of his life**:
1. **Precision in classical languages** — from age 13 onward he was **comparing Greek and Latin word for word**
2. **«Interior devotion» above «outer ceremony»** — later this became the heart of the Reformation, but the *devotio moderna* was teaching it in a Dutch grade school 50 years earlier

##### 1487 — at 21 he entered an Augustinian monastery

**1487 — Erasmus, 21, entered the Augustinian monastery at Steyn** —
**Note** — **in 1505 Luther entered an Augustinian monastery (at Erfurt) at the same age** —
**Two men, same age, same order, only 18 years apart** —
**This is not a coincidence**: **the Augustinians were the most common «thinking» order in northern Europe around 1500** —
**Bright students who could not afford to keep going to university entered an Augustinian house** — **the monastery in those years functioned as «scholarship + university» for poor children**.

**Erasmus and Luther were different though** —
**Luther genuinely wanted to be a monk** — he entered **out of fear of God**;
**Erasmus did not want to be a monk** — he entered **because he had nowhere else to go** —
**by 27 he had escaped**.

##### 1493 — at 27, out of the monastery

**1493 — the Bishop of Cambrai hired Erasmus as his Latin secretary** —
**That gave him a legitimate reason to leave the monastery** —
**He never went back**.

**He spent decades writing to Rome asking for a formal release from his monastic vows** —
**In 1517 (the same year as the *95 Theses*) Pope Leo X granted him the formal dispensation** —
**Erasmus was 51 before he was officially free of his monastic identity** —
**This was the central tension of his life**:
**a lifetime eating church bread and a lifetime privately scorning many church practices** —
**Not hypocrisy — the actual condition of being a northern humanist around 1500**.

##### 1509 — *In Praise of Folly* — 600 editions in 100 years

**1509 — Erasmus, 43 — back in London after Italy, staying with his friend Thomas More** —
**In seven days he wrote** *Moriae Encomium* (the Latin original of *In Praise of Folly*) —
**Dedicated to Thomas More** (More's name *Morus* puns on the Greek *moria*, «folly») —
**The little book became the most widely read Latin satire in all of Europe before the Reformation**:

**The book is a speech delivered by the goddess «Folly»** — Folly praises herself —
**but ironically — through Folly's mouth** — Erasmus picks apart, one by one:
- **Corrupt monks** (rich, ignorant, low character)
- **A corrupt papacy** (waging war, collecting money, not preaching the Gospel)
- **Corrupt theologians** (debating «can angels dance on the head of a pin», a meaningless question)
- **The corrupt business of pilgrimage, relics, indulgences** —
- **And Folly herself says**: **«The greatest folly is to think these ceremonies can save you»**

**The first edition was 1509** — **600 more editions in the next 100 years** —
**Translated into every major European vernacular** —
**Before Luther's 1517 *95 Theses* — almost every literate European had read *Folly*** —
**This is why the Reformation caught fire so fast in 1517**:
**Those 600 editions over a century already cultivated Europe's reading public into a critical attitude toward the church** —
**Luther's nailing of the door only converted what *Folly* had already mocked into action**.

> ⚠️ **Teaching point**: **Erasmus' 1509 cultural critique came first — only after that could Luther's 1517 institutional revolt happen** —
> **It was not Luther alone inventing opposition to the church** — **it was 50 years of humanist groundwork by people like Erasmus** —
> **Without 600 editions of *Folly* in the hands of Europe's readers — the *95 Theses* could not have crossed Germany in 6 weeks**.

##### 1516 — *Novum Instrumentum* — four Greek manuscripts collated

**1516 — Erasmus, 50 — published** *Novum Instrumentum* (the new New Testament) —
**This is the **real** starting point of the Reformation** — **a year before the *95 Theses***.

**What did he do?** —
**He gathered four Greek New Testament manuscripts** (the best ones available in Basel) —
**He compared them word by word** — reconstructing **what he believed was closest to the original Greek New Testament** —
**Then he set his own Latin translation on the right — Greek on the left, Latin on the right, parallel print** —
**This was the **first printed Greek New Testament**.

**Why did this change history?** —

**For 1,000 years — the Latin Vulgate had been «the only authority»** —
**The Vulgate was Jerome's 4th-century translation** —
**Erasmus held the Greek next to it and** **found hundreds of places where the Vulgate was wrong or imprecise** —
**In the margins he marked the errors** —
**The single most important one — Matthew 4:17**:

**The Vulgate Latin reads**: *paenitentiam agite* —
**Literal sense**: **«do penance»** — that is, **«perform the rite of penance»** —
**Erasmus' 1516 marginal note says directly**: **«Read instead:** *metanoeite* — **turn the inward mind»** —
**Meaning**: **Jesus is not asking people to «perform a rite» — he is asking them to «turn their entire inner self around»** —
**This is a semantic revolution from «outward ceremony» to «inward state»** —
**That single marginal note pulls down the biblical foundation for the entire Catholic ceremonial system of penance — confession, ascetic exercise, pilgrimage, indulgences — at one stroke**.

**That note went into print in 1516 — and Luther's *95 Theses* of October 31, 1517, opened with it as Thesis 1**:
> **«When our Lord and Master Jesus Christ said «repent» (*metanoeite*) — he meant that the entire life of a believer should be one of repentance, not the performance of a single outward rite»**

**Without Erasmus' 1516 Greek collation, Luther's Thesis 1 has no biblical basis** —
**Erasmus is the **hidden starting point** of the Reformation** — **he struck the first blow a year before Luther** —
**only his hammer was a Greek collation, not a church door**.

##### 1524-1525 — the great free-will debate with Luther

**1524 — Erasmus, 58 — published** *De Libero Arbitrio* (On Free Will) —
**Aimed at the *sola gratia* (grace alone) position Luther had been preaching for seven years** —
**Erasmus' middle, Augustinian position**: **the human being has **partial** freedom — the capacity **to cooperate with grace*** —
**His argument**:
- **If a person has **no** freedom — God's command «repent» becomes meaningless** (you cannot command someone who cannot move to move)
- **If a person has **no** freedom — moral responsibility cannot stand** (you cannot blame someone who could not have chosen otherwise)
- **The Church Fathers (including Augustine himself, in places) acknowledged a freedom «to cooperate»** (*cooperare*)

**1525 — Luther, 42 — answered with** *De Servo Arbitrio* (On the Bondage of the Will) —
**This is the book Luther himself rated highest among everything he ever wrote** —
**Near death he wrote**: **«All of my books I would not regret seeing burned — except *De Servo Arbitrio* and the German Bible»** —
**Luther's extreme predestinarian / *sola gratia* position**:
- **The human being has **no** freedom** — **all** «good» motions in a person are **God acting unilaterally inside the person**
- **The human being **contributes nothing** to salvation** — even «accepting grace» **is itself given by God**
- **To grant a human any freedom = to steal God's glory and hand it to a creature**

**This debate is the formal break between Erasmus and Luther** —
**From 1525 onward Erasmus is **permanently** separated from Lutheranism** —
**He neither returned to the Catholic camp nor entered the Protestant one** —
**He stayed on the middle path forever — and both sides cursed him for it forever**.

> ⚠️ **Teaching point — this debate is still alive today**:
> **Calvinist churches + the evangelical movement — directly inherit Luther 1525** *sola gratia*;
> **Arminian churches + Wesleyan tradition + Roman Catholicism — directly inherit Erasmus 1524** partial-freedom;
> **Every modern «God decides vs. the human chooses» argument — has its root in 1524-1525** —
> **The Augustine vs. Pelagius problem the church had failed to settle for 1,000 years — Luther pushed to one extreme — Erasmus tried to hold the middle**.

##### 1530s — Luther in *Table Talk* privately attacks Erasmus

**Luther's **private** dinner-table sayings 1530-1546** —
**His students Anton Lauterbach and Veit Dietrich took notes — later published as *Table Talk*** —
**Luther in *Table Talk* repeatedly calls Erasmus**:
- **«this serpent»** (*serpens*) —
- **«a coward»** (*timidus*) —
- **«a man of two faces — neither cold nor hot»** (echoing Revelation 3:16's rebuke of the Laodicean church) —

**The private grievance was Erasmus' 1524 *De Libero Arbitrio*** —
**Luther felt Erasmus used **humanist rhetoric** to **dodge the real theological question*** —
**Luther felt Erasmus **refused to step in** and back the actual Reformation struggle** —
**only commented from a distance** — **and this middle stance made Luther angrier than Catholic opponents did**.

> 💡 **«Erasmus laid the egg — Luther hatched it»** — a saying that circulated across Europe in the 1520s and 1530s —
> **Literally**: **Erasmus laid the egg, Luther hatched it** —
> **Meaning**: **Erasmus' *Folly* and *Novum Instrumentum* did the cultural groundwork = the egg**; **Luther's *95 Theses* and Diet of Worms turned it into institutional revolt = the hatching** —
> **This proverb shows how the middle gets attacked by both sides in revolutionary times** —
> **Erasmus himself rejected the label** — he wrote in a letter: **«The egg I laid was literary critique and biblical collation — what Luther hatched is something else»** —
> **But Europe did not care what he said — the saying stuck to him for 500 years**.

##### 1536 — July 12, Basel — death at 69

**July 12, 1536 — Erasmus died in Basel** —
**Note the age: 69 (born 1466.10.27 + died 1536.7.12 = 69 years 8 months)** —
**Many older books say «died at 70», rounding the date forward to the next birthday — that is imprecise** —

**At his deathbed**:
- **He did not accept the Catholic last rites** (extreme unction) — the central Catholic dying ritual
- **He did not accept the Lutheran communion either** —
- **He himself kept repeating**: **«Lord, Lord»** (*Domine, Domine*) —
- **He was buried in Basel's cathedral** (*Basler Münster*) — by then a **church Protestant since 1529** —

**This is the final consistency of his lifelong stance** —
**He let neither the Catholic ritual nor the Lutheran rite define him** —
**He died in the middle** — **the place he had spent his whole life holding**.

##### 1559 — Pope Paul IV puts every one of his 80+ books on the Index

**1559 — Pope Paul IV issued** *Index Librorum Prohibitorum* (the Index of Forbidden Books) —
**The official Catholic banned-books list — **Catholics may not read these**** —
**Paul IV listed Erasmus in the highest class — «opera omnia damnata» (the entire works condemned)** —
**Every one of Erasmus' 80+ books was banned** —
**Including *Folly* + *Novum Instrumentum* + every biblical commentary + every collected letter** —

**This is the **Roman verdict** on Erasmus — 23 years after his death** —
**The reason given**: **«He used scholarship to pave the road for heresy — *Novum Instrumentum* gave Luther his Greek weapon»** —

**The irony**: **Erasmus had spent his life defining himself as «a Catholic insider reformer»** —
**23 years after his death the Catholic church banned **every** word he had written** —
**He leaned on neither side — and ended up rejected by both sides** —
**This is the price the «middle» paid in the age of Reformation**.

##### His contested legacy

**Erasmus is neither a hero nor a villain — he is the **incarnation of the «middle path» in the Reformation era*** —

**On the positive side**:
- **The foundation of biblical criticism** (*Novum Instrumentum* shaped the King James, Luther's German Bible, and every modern critical edition)
- **The foundation of Christian humanism** (joining classical Greek and Roman scholarship with biblical study)
- **The high-water mark of Latin prose** (Goethe's verdict: after Cicero, only Erasmus comes close)
- **«Interior piety above outward ceremony»** (*pietas* over *ceremoniae*) — the heart of later Protestantism, but Erasmus had been saying it 50 years earlier

**On the negative or complicated side**:
- **Refusing to take a side** — when the Reformation broke out he neither **backed** Luther nor **fought** Luther —
  **Both camps accused him of cowardice** —
- **Compromise with the church economy** — he ate church money and royal patronage all his life —
  **He did not, like Luther, pay the price of poverty in exchange for intellectual freedom**
- **Never married, never publicly named the close male friendships of his life** — he had several intensely close young male friends —
  **Modern scholars (including Lyndal Roper, Erika Rummel) discuss his possible same-sex inclinations** —
  **The archival record on this is **inconclusive** — no firm verdict**

> ⚠️ **AP-style question**: **«Is the middle path cowardice?» is the **central political and moral problem the Reformation era left to the modern world**** —
> **Luther's view**: **the middle is cowardice — you must choose a side** —
> **Erasmus' view**: **the extremes are fanatics — the middle is real wisdom** —
> **Both sides argued from the Bible — both cited the Fathers — both were certain they were right** —
> **Studying history does **not** mean handing down a simple verdict** — **think for thirty seconds**: **In a revolutionary age — should the middle have a place?**

```

### EN 版同步替换 timeline 行（对应 line 236 EN）

```markdown
1466-1536  Erasmus of Rotterdam (the hidden start of Reformation thought — 1509 *Folly* + 1516 *Novum Instrumentum* paved the road for Luther 1517 — but broke with Luther in 1524-1525)
```

**字数**: CN ~1850 字 / EN ~2050 词。
（注: 大于 task 估的 800 字，因为 Pass2-P0-1 / Pass2-P0-3 / Pass2-P1-1 / Pass2-P1-2 都集中在 Erasmus 子节内,合并写完更连贯;实际等于 P0-1+P0-3+P1-1+P1-2 = ~800+250+80+50 = 1180 字基础再加传记 + 论辩内容补完 ≈ 1850）

---

## Patch Pass2-P0-2（P0-2）: §4 文献深读 1 加 Matthew 4:17 校勘归功 Erasmus 1516

**问题**: 现 §4 文献深读 1（line 1417-1546）写 Luther 95 Theses 第 1 条 *paenitentiam agite*——但**没明确归功 Erasmus 1516 Greek 校勘**。Theses 1-7 段（line 1437-1440）是 narrative kernel 里 Luther 神学起点的核心,但缺关键的「Bible 论据来源 = Erasmus 1516」这条线。如果 Patch Pass2-P0-1 在 §3 加了 Erasmus 子节,§4 也得呼应,否则学生读 §4 还是觉得 Luther 单独发明了这一切。

**插入位置 CN**:
- 文件：`lib/history-narratives/reformation-1517.md`
- 在「核心论点 1」段(line 1437-1440)结束之后、「核心论点 2」(line 1441)之前——**新增**一段「Erasmus 1516 校勘是这一条的来源」。
- 也就是: 在 line 1440(`> "**当主耶稣说**'悔改'——他**意思是**整个基督徒生命应是**悔改**——`...`如告解)"`)结束 + 空行之后、line 1441(`**核心论点 2**:`)之前插入。

**插入位置 EN**:
- 文件：`lib/history-narratives/reformation-1517.en.md`
- 同一逻辑位置: 在 EN 「Core point 1」段结束之后、「Core point 2」之前插入。

### CN 版插入文本

```markdown

> 💡 **隐藏来源 — Erasmus 1516**:
> **Luther 第 1 条**「悔改是终生态度而不是仪式」**——他用的圣经依据**直接来自 Erasmus 1516** *Novum Instrumentum*（《新约新本》）**Matthew 4:17 边注**：
> **Erasmus 在那条边注里写**：**「Vulgate 拉丁文** *paenitentiam agite*（行赎罪事）**应当读**:** *metanoeite*（转变内心)」**——
> **意思**: **耶稣**不是**要人「做仪式」 — 他是要人「内心彻底转向」**——
> **Erasmus 1516 出版** — **Luther 1517 钉门** — **只差 1 年**。
>
> **没有 Erasmus 这条希腊文校勘** — **Luther 95 Theses 第 1 条**没有 Bible 论据**——
> **Reformation 的隐藏起点是 1516** — 不是 1517 — **只是世界记住 Luther 那一锤,忘了 Erasmus 那条边注**。
>
> **历史里这种「先驱被遮蔽」是经典模式**:
> Erasmus 1516 校勘 → Luther 1517 95 Theses → Luther 名垂青史 + Erasmus 被两边骂 →
> 同样: 1859 Wallace → Darwin / 1900 Mendel → de Vries / 1953 Franklin → Watson Crick →
> **学历史**要看见**真正的开端** — 不只看 hero 的高光时刻。

```

### EN 版插入文本

```markdown

> 💡 **The hidden source — Erasmus 1516**:
> **Luther's Thesis 1 — «repentance is a lifelong inward turning, not a one-time ritual» — drew its biblical authority directly from Erasmus' 1516** *Novum Instrumentum* (the new New Testament), **the marginal note on Matthew 4:17**:
> **Erasmus' note read**: **«The Vulgate Latin** *paenitentiam agite* (do penance) **should be read as** *metanoeite* (turn the inward mind)»** —
> **Meaning**: **Jesus was **not** asking people to «perform a ritual» — he was asking them to «turn their entire inner self around»** —
> **Erasmus published in 1516** — **Luther nailed the door in 1517** — **just one year apart**.
>
> **Without Erasmus' Greek collation** — **Luther's Thesis 1 has no biblical foundation** —
> **The hidden start of the Reformation is 1516, not 1517** — **the world simply remembers Luther's hammer and forgets Erasmus' marginal note**.
>
> **History keeps showing this pattern of «forerunner erased»**:
> Erasmus 1516 collation → Luther 1517 *95 Theses* → Luther becomes immortal, Erasmus cursed by both sides →
> The same shape: 1859 Wallace → Darwin / 1900 Mendel → de Vries / 1953 Franklin → Watson and Crick →
> **Studying history means seeing the **real beginning**, not only the hero's spotlight moment**.

```

**字数**: CN ~210 字 / EN ~230 词。

---

## Patch Pass2-P0-3（P0-3）: §3 自由意志论辩 1524-1525 详写一段

**问题**: 现 narrative line 80 (Augustinian 自由意志一笔带过) + line 1514-1518(Luther vs Erasmus vs Calvin 三种内部张力一笔带过)各一句话,**但没展开**。1524-1525 自由意志大辩**是基督教 1500 年人观的根本辩论**(Augustine vs Pelagius 第 5 世纪以来从未真解决)——Luther 把它推到极端,Erasmus 试图守中道。这一辩论让 Erasmus 跟 Luther 正式决裂,且活到今天 (Calvinist + 福音派 vs Arminian + 天主教 = 1524-1525 同一辩论)。

**说明**: 此 patch 内容已**包含在 Patch Pass2-P0-1 Erasmus 子节内**(具体在「1524-1525 — 跟 Luther 自由意志大辩」section,以及 1530s *Table Talk* section + 「Erasmus laid the egg」proverb 段)。

**为什么并入 P0-1 而不是单独 patch**:
- 1524-1525 论辩**主体是 Erasmus 跟 Luther 之间** — 在 Erasmus 子节展开比在 Luther 子节插入更连贯
- Luther 子节(line 274-575)已经写得密集 + 有 Wartburg 翻 Bible / Peasant War / 41 岁结婚 / 1546 死 — 再插一段会破坏 Luther 节奏
- 在 Erasmus 子节展开 + 在 Luther 段加 1-2 行交叉引用即可

**插入位置 CN — 在 Luther 段加 cross-reference**:
- 文件: `lib/history-narratives/reformation-1517.md`
- 在 line 491(Luther Peasant War 段末尾)和 line 510(41 岁结婚段开始)之间——**新增**一个 micro-段「1524-1525 跟 Erasmus 自由意志决裂」(~80 字)。
- 也就是: line 491 + 一个空行之后、line 510 之前插入。

**插入位置 EN**:
- 文件: `lib/history-narratives/reformation-1517.en.md`
- 同一逻辑位置(EN line 对应)。

### CN 版插入文本（line 491 之后,line 510 之前）

```markdown

##### 1524-1525 — 跟 Erasmus 自由意志决裂

**1525 年 5 月 Luther 骂农民同时 — 还有另一场辩论**——
**Erasmus 1524 年出版** *De Libero Arbitrio*（《论自由意志》）**——温和反对 Luther** sola gratia 立场——
**1525 年 12 月 Luther 反击** — 出版 *De Servo Arbitrio*（《论意志的捆绑》）——
**Luther 极端预定立场**: **人完全无自由 — 救恩全是上帝单方面的工**——

**这一辩让 Erasmus 跟 Luther 正式决裂**——
**Lutheran / Calvinist 后来直接继承 Luther 1525**;
**Arminian / 卫斯理 / 天主教直接继承 Erasmus 1524**——
**今天美国福音派 vs 主流新教的张力 — 根都在 1524-1525 这一辩**。

> 详细论辩内容见 §3 北方人文主义方 — Erasmus 子节「1524-1525 — 跟 Luther 自由意志大辩」段。

```

### EN 版插入文本（对应位置）

```markdown

##### 1524-1525 — break with Erasmus over free will

**May 1525 — alongside Luther's attack on the peasants — another debate was running** —
**Erasmus had published** *De Libero Arbitrio* (On Free Will) **in 1524 — a moderate challenge to Luther's *sola gratia* position** —
**December 1525 — Luther answered with** *De Servo Arbitrio* (On the Bondage of the Will) —
**Luther's extreme predestinarian position**: **the human being has **no** freedom — salvation is entirely God's unilateral work** —

**This debate is the formal break between Erasmus and Luther** —
**Later Lutheranism and Calvinism inherit Luther 1525 directly**;
**Arminianism, Wesleyan tradition, and Roman Catholicism inherit Erasmus 1524 directly** —
**The tension between today's American evangelical wing and the mainline Protestant churches — has its root in this 1524-1525 debate**.

> For the substantive content of the debate, see §3 Northern Humanist Camp — Erasmus subsection «1524-1525 — the great free-will debate with Luther».

```

**字数**: CN ~150 字 / EN ~170 词（cross-reference micro-段 — 详细论辩在 P0-1 Erasmus 子节）。

---

## Patch Pass2-P1-1（P1-1）: Luther *Table Talk* 1530s 私下骂 Erasmus 引言

**问题**: 让 Luther 英雄形象立体化(他对中道派的暴力恨意比对 Catholic 还重)。

**说明**: 此 patch 内容已**包含在 Patch Pass2-P0-1 Erasmus 子节内**(「1530s — Luther *Table Talk* 私下骂 Erasmus」section)。

**为什么并入 P0-1**:
- Luther 私下骂 Erasmus 这件事**是 Erasmus lens 角度的核心戏剧** — 在 Erasmus 子节展开比在 Luther 子节插入更对称
- Erasmus 子节里这一段紧接「1524-1525 决裂」自然衔接 — 「正式决裂之后的私下言论」连贯
- Luther 子节 line 549-574「他留下的争议遗产」已有「正面 / 负面」结构 — 不再加新段

**Cross-reference 已在 P0-1 内**: 「1530s — Luther *Table Talk* 私下骂 Erasmus」整段。

**字数**: 已计入 P0-1（~95 字 CN / ~110 词 EN — 「这条蛇」+「懦夫」+「两面人」3 个 quotes + 出处）。

---

## Patch Pass2-P1-2（P1-2）: 「Erasmus laid the egg, Luther hatched it」谚语

**问题**: 让「中道在革命时代被两边骂」有具体语料证据。

**说明**: 此 patch 内容已**包含在 Patch Pass2-P0-1 Erasmus 子节内**(紧接「1530s *Table Talk*」之后的`> 💡` block)。

**为什么并入 P0-1**:
- 这条谚语是 Erasmus 在欧洲 1520-1530 流行评价 — 在 Erasmus 子节中作为「他被两边骂的具体证据」展开,逻辑紧凑
- 并入 P0-1 让 Erasmus 子节有完整 narrative 弧线: 起 (出身) → 转 (1509 *Folly*) → 顶 (1516 *Novum Instrumentum*) → 落 (1524-1525 决裂) → 余韵 (谚语 + 1559 禁书)

**Cross-reference 已在 P0-1 内**: 「Erasmus laid the egg, Luther hatched it」`> 💡` block + Erasmus 自己的反驳信件「我下的蛋是文学批判和经文校勘 — Luther 孵的是别的东西」。

**字数**: 已计入 P0-1（~80 字 CN / ~95 词 EN）。

---

## Patch Pass2-P1-3（P1-3）: §0.5 思想三段链补完 Pico → Erasmus → Luther

**问题**: 现 §0.5 (line 86-126) 思想 chain 是 Pico 1486 → Luther 1521 直连(line 98-103),漏中间节点。Erasmus 1509 *In Praise of Folly* + 1516 *Novum Instrumentum* 是把 Pico 哲学论辩 transformed 为制度改革语言的中间人。补这一节让 §0.5 的思想 chain 完整。

**插入位置 CN**:
- 文件: `lib/history-narratives/reformation-1517.md`
- 在 §0.5「**2. 人文主义 + 古典回归**」段(line 98-103)末尾 + 「**3. 方言文学**」段(line 105)开始之前——**新增**一个补节(用 sub-bullet **2b** 形式 — 表示「人文主义」礼物的中间节点)。
- 也就是: 在 line 103(「**没有 Pico 1486 年的良心权——Luther 1521 年没有思想前置**。」)之后、line 104(空行)、line 105(`**3. 方言文学**`)之前插入。

**插入位置 EN**:
- 文件: `lib/history-narratives/reformation-1517.en.md`
- 同一逻辑位置: §0.5「2. Humanism + return to the classics」段末尾 + 「3. Vernacular literature」段开始之前。

### CN 版插入文本（line 103 之后,line 105 之前）

```markdown

**2b. 中间节点 — Erasmus(1466-1536)是 Pico 到 Luther 的桥** — Renaissance §「思想」段最后一行 + Reformation §3 北方人文主义方 都写到 Erasmus——
   **Pico 1486** *Oration on the Dignity of Man* — **哲学论辩**「人有自由」——
   **Erasmus 1509** *In Praise of Folly* — **把哲学论辩转成对教会的具体批评**(腐败修士 + 腐败教皇 + 仪式赎罪)——
   **Erasmus 1516** *Novum Instrumentum* — **把希腊文新约校勘**直接拆掉**仪式赎罪体系的圣经依据**——
   **Luther 1517** 95 Theses — **拿 Erasmus 的希腊文 + Erasmus 的批评** + **加上自己的"行动决心"** = 制度反抗——
   **三段链**: **Pico「人可以」(1486 哲学) → Erasmus「人应该改革教会」(1509 文化批评) + 「Bible 校勘说赎罪体系错」(1516 学术) → Luther「我必须站」(1521 政治行动)**——
   **每一段都站在前一段肩膀上** — **没有任何一段可以单独发生**。

> 💡 **教学要点**:**1486 → 1509 → 1516 → 1521** = 35 年内**思想从「可能性」**走到**「必然性」**——
> **Pico 是哲学家** — 他**说**人可以;
> **Erasmus 是学者** — 他**论证**教会需要改;
> **Luther 是行动者** — 他**做了**那件事——
> **三个人都不可替代** — **哪一段缺失 Reformation 都不会发生**。

```

### EN 版插入文本（对应位置）

```markdown

**2b. The middle node — Erasmus (1466-1536) is the bridge from Pico to Luther** — covered in the Renaissance lesson's final line on «thought» and in Reformation §3 «Northern Humanist Camp» —
   **Pico 1486** *Oration on the Dignity of Man* — **a philosophical argument**: «the human being has freedom» —
   **Erasmus 1509** *In Praise of Folly* — **turns the philosophical argument into specific critique of the church** (corrupt monks + corrupt papacy + ceremonial penance) —
   **Erasmus 1516** *Novum Instrumentum* — **uses Greek New Testament collation to dismantle the biblical foundation of the ceremonial penance system** —
   **Luther 1517** *95 Theses* — **takes Erasmus' Greek + Erasmus' critique** + **adds his own «decision to act»** = institutional revolt —
   **The three-stage chain**: **Pico «a person may» (1486, philosophy) → Erasmus «the church must be reformed» (1509, cultural critique) + «biblical collation shows the penance system is wrong» (1516, scholarship) → Luther «here I stand» (1521, political action)** —
   **Each stage stands on the shoulders of the prior** — **none of them could happen on its own**.

> 💡 **Teaching point**: **1486 → 1509 → 1516 → 1521** = 35 years carrying a thought from **«possible»** to **«necessary»** —
> **Pico is the philosopher** — he **says** a person can;
> **Erasmus is the scholar** — he **argues** the church must change;
> **Luther is the actor** — he **does** the thing —
> **All three are irreplaceable** — **without any one stage, the Reformation does not happen**.

```

**字数**: CN ~280 字 / EN ~310 词。

---

## Patch Pass2-P1-4（P1-4）: §4 文献深读 1 加 1521 德文版 95 条印刷数据

**问题**: 现 §4 文献深读 1 line 1486-1495 第 2 层「印刷术作为加速器」段——只说「6 周传遍德国 / 几周内动员社会」抽象描述,**没有具体印刷数字**。补一段(~80 字)让「印刷术放大效应」具体化,跟 lens micro-detail (95 条小册子) 形成 narrative + lens 的 echo。

**插入位置 CN**:
- 文件: `lib/history-narratives/reformation-1517.md`
- 在 §4 文献深读 1「第 2 层: 印刷术作为加速器」段(line 1486-1495)末尾——**新增**一段「具体印刷店 + 印刷量」。
- 也就是: 在 line 1495(「**1517 年印刷术 = 16 世纪的 Twitter**。」)之后、line 1496(空行)、line 1497(`**第 3 层**`)之前插入。

**插入位置 EN**:
- 文件: `lib/history-narratives/reformation-1517.en.md`
- 同一逻辑位置: §4 文献深读 1「Layer 2: the printing press as accelerator」段末尾。

### CN 版插入文本（line 1495 之后,line 1497 之前)

```markdown

> 📊 **具体印刷数据**(让 Twitter 比喻落地):
> - **1517 年 11-12 月**(钉门后 1-2 个月) — **Wittenberg + Leipzig + Nürnberg + Magdeburg + Basel** 5 家印刷店首先印拉丁文版——估计**3,000-5,000 份**——
> - **1518 年初** — **学生 Johann Lang 翻译德文版** + 在 Erfurt 出版——
> - **1518-1520 这 3 年** — **Wittenberg + Mainz + Augsburg + Strasbourg + Nürnberg + Leipzig + Basel + Köln + Frankfurt** 9 家印刷店——
>   **共印刷拉丁文 + 德文版本约 30 个不同版次**——**累计印刷量学者估计达 25 万-30 万册**(conservative)——
> - **对比: 1500 年欧洲全年所有书加起来印量约 2,000 万册** — 95 Theses 一份小册子**3 年内吃掉欧洲年印量的 1.25%-1.5%**——
> - **这是中世纪欧洲**前所未有的单一文本传播规模**——
> - **lens micro-detail**: 这一遍让你看见 — 你 1518 年 Wittenberg 街角小书摊上拿到的那本 8 开**6 页小册子**,价钱**约 1 个 Saxon Pfennig**(约一个普通工匠**半天工资**) — 普通德国识字人买得起。

```

### EN 版插入文本（对应位置）

```markdown

> 📊 **Concrete print data** (anchoring the «Twitter» analogy in numbers):
> - **November-December 1517** (1-2 months after the door) — **Wittenberg + Leipzig + Nürnberg + Magdeburg + Basel** — 5 print shops produced the first Latin editions — an estimated **3,000-5,000 copies** —
> - **Early 1518** — **the student Johann Lang translated a German edition**, published in Erfurt —
> - **1518-1520, three years** — **Wittenberg + Mainz + Augsburg + Strasbourg + Nürnberg + Leipzig + Basel + Köln + Frankfurt** — 9 print shops —
>   **Roughly 30 different printings combined across Latin and German** — **scholars estimate cumulative print runs of 250,000 to 300,000 copies (conservative)** —
> - **For comparison: total European book production in 1500 was about 20 million copies a year** — a single pamphlet, the *95 Theses*, **consumed 1.25%-1.5% of Europe's annual print capacity over three years** —
> - **A scale of single-text diffusion **unmatched in medieval Europe*** —
> - **Lens micro-detail**: this lens lets you see — the small octavo **6-page pamphlet** you would have picked up at a Wittenberg street stall in 1518, priced at roughly **one Saxon Pfennig** (about a common craftsman's **half-day wage**) — well within reach for any literate German.

```

**字数**: CN ~270 字 / EN ~290 词。

---

## Founder 注入操作（按依赖关系排序）

1. 打开 `lib/history-narratives/reformation-1517.md`：
   - **Patch Pass2-P0-1**：在 line 273 之后(line 274 `### 北德修士改革派方` 之前)新增「### 北方人文主义方」+ 整个 Erasmus 子节(~1850 字)+ 同步替换 line 236 timeline 行。
   - **Patch Pass2-P0-2**：在 line 1440(核心论点 1 段结束)之后、line 1441(`**核心论点 2**`)之前插入「Erasmus 1516 校勘」`> 💡` block(~210 字)。
   - **Patch Pass2-P0-3**：在 Luther 段 line 491 之后、line 510 之前插入「1524-1525 跟 Erasmus 自由意志决裂」micro-段(~150 字)+ cross-reference 到 P0-1 Erasmus 子节。
   - **Patch Pass2-P1-1 / P1-2**：内容已并入 P0-1 Erasmus 子节,无需独立操作。
   - **Patch Pass2-P1-3**：在 §0.5 line 103 之后、line 105 之前插入「2b. 中间节点 Erasmus」段(~280 字)。
   - **Patch Pass2-P1-4**：在 §4 line 1495 之后、line 1497 之前插入「具体印刷数据」`> 📊` block(~270 字)。

2. 同步操作 `lib/history-narratives/reformation-1517.en.md`(同 6 处插入,EN 版本)。

3. 注入完跑：
   - `node --check lib/history-topics.js lib/history-storyboards/*.js pages/history.js`(per 第 11 条)
   - `npm run build`(per 第 11 条,catch quote nesting bug)
   - `node scripts/atlas-lint.mjs`(SOP)
   - `npm run validate:narratives`(structural 验证)

4. Sarah Chen / Erasmus lens-author re-audit(可选 spot check)：
   - **P0-1**：Erasmus 1466-1536 + 1487 入院 + 1493 出院 + 1509 *Folly* + 1516 *Novum Instrumentum* + 1524 *De Libero* + 1525 跟 Luther 决裂 + 1536/7/12 死 + 1559 全作禁——8 个时间点 fact-check。
   - **P0-2**：Erasmus 1516 Matthew 4:17 边注 + *paenitentiam agite* / *metanoeite* 翻译归功是否正确。
   - **P0-3**：Erasmus 自由意志 vs Luther 1525 *De Servo Arbitrio* — Calvinist + 福音派 vs Arminian + 天主教 = 同一辩——这条 historiography 是否经得起检验。
   - **P1-3**：§0.5 的 Pico → Erasmus → Luther 三段链是否跟 §3 内 Erasmus 子节内容一致。
   - **P1-4**：1517-1520 年印刷量 25-30 万册 + 9 家印刷店 + 30 个版次——具体数字 Andrew Pettegree *Brand Luther*(2015) 学派指认是否准确。

---

## 字数统计

| Patch | CN 字数 | EN 字数 | 注 |
|---|---|---|---|
| Pass2-P0-1 (Erasmus 完整传记) | ~1850 | ~2050 | 含 11 个 sub-section: 出身/13 岁瘟疫/21 岁入院/27 岁出院/1509 *Folly*/1516 *Novum*/1524-1525 论辩/1530s *Table Talk*/「laid the egg」proverb/1536 死/1559 禁书/争议遗产 + timeline 行更新 |
| Pass2-P0-2 (§4 Erasmus 1516 校勘归功) | ~210 | ~230 | 含 Matthew 4:17 *paenitentiam agite* / *metanoeite* + 「先驱被遮蔽」3 例(Wallace / Mendel / Franklin) |
| Pass2-P0-3 (Luther 段 1524-1525 决裂 micro) | ~150 | ~170 | 跟 Calvinist + 福音派 vs Arminian + 天主教 cross-ref |
| Pass2-P1-1 (Luther *Table Talk* 私下骂 Erasmus) | ~95 | ~110 | **已并入 P0-1**,无独立 patch — 字数已计入 P0-1 |
| Pass2-P1-2 (「laid the egg」proverb) | ~80 | ~95 | **已并入 P0-1**,无独立 patch — 字数已计入 P0-1 |
| Pass2-P1-3 (§0.5 Pico → Erasmus → Luther 三段链) | ~280 | ~310 | 1486 → 1509 → 1516 → 1521 / 35 年 / 三个人不可替代 |
| Pass2-P1-4 (§4 1517-1520 印刷数据) | ~270 | ~290 | 9 家印刷店 + 30 个版次 + 25-30 万册 + 1.25%-1.5% 年印量 + lens micro-detail (8 开 6 页 / 1 Pfennig) |
| **独立 patch 字数合计**(P0-1 + P0-2 + P0-3 + P1-3 + P1-4) | **~2760** | **~3050** | P1-1 + P1-2 已并入 P0-1 — 不重复计 |
| **task 估算范围** | 2000-2500 | 2200-2700 | 略超(Erasmus 完整传记本身就 ~1850,合理超出) |

---

## 写作约束自检

- **第 7 条 cultural ban**: 全文无「翰林/朕/江山/凤冠/科甲/状元/娘亲/父亲大人/相国/宰相/丞相/尚书」 — 0 中国术语污染。Erasmus 全程西方语境(Rotterdam / Deventer / Steyn / Cambrai / 伦敦 / Basel / Cambridge)。1530s *Table Talk* / 1559 *Index Librorum Prohibitorum* / 1524-1525 *De Libero* vs *De Servo* — 全用西方术语 + 拉丁原名。
- **第 8 条 A anti-fabrication**: 戏剧化内心都用「这一遍让你听见」/「this lens lets you hear」框（Patch P1-4 lens micro-detail 段);documented quotes 全部有据(Erasmus 1516 边注「应当读: *metanoeite*」/ 1524 *De Libero* 三论证 / 1536/7 临终「主啊,主啊」+ Luther *Table Talk* 1530s「这条蛇 + 懦夫 + 两面人」 + 1545 临死遗嘱「我所有书都不可惜烧——除了 *De Servo Arbitrio* 和德文 Bible」+ Erasmus 1530s 反驳信件「我下的蛋是文学批判和经文校勘」 + 1559 *Index* 「opera omnia damnata」 + Goethe 关于拉丁文的评价 + Lyndal Roper / Erika Rummel 关于 Erasmus 同性情感的 historiography 引用)。Erasmus 名字 *Desiderius* 自我命名 + 私生子心理疗愈段——用「几乎是反向疗愈宣言」/「reads almost like」框,标 anti-fabrication transparency。
- **第 8 条 B synthesis 节点纪律**: 1524-1525 论辩段不预判 Luther 或 Erasmus 谁对——「两人都用 Bible 论证 — 都引古典教父 — 都觉得自己对」+ 「学历史不下简单判断 — 你自己想 30 秒」中性收尾;现代 historiography 派系归属精确(Lyndal Roper + Erika Rummel 关于 Erasmus 同性情感倾向 — 标「**模糊** — 不下结论」)。
- **第 8 条 C Voice 标杆对齐**: 现代化解读用「一种说法」/「另一种说法」/「想 30 秒」;不用「读法 A/B」。
- **第 8 条 D dev-note 隔离**: 学生 facing 字段无「narrative kernel §X」/「per spec」/「see lens design」泄漏。
- **第 8 条 E 角色称谓 + 语言一致**: Erasmus 段全程「Erasmus」(不滑「他爹 / 他妈」之类滑回);Luther 段「Luther / 他」一致。无中英 code-mix。
- **第 8 条 F 数学 + 年代自检**:
  - Erasmus 1466.10.27 生 + 1536.7.12 死 = 69 岁 8 个月(原文「~70」是 round 不精确,这一波 patch 改 69 + 显式说明)
  - Erasmus 1487 入院 21 岁 + Luther 1505 入院 21 岁 = 1505-1487 = 18 年差(「只差 18 年」精确)
  - Erasmus 1493 出院 27 岁 = 1493 - 1466 = 27 ✓
  - Erasmus 1509 *Folly* = 43 岁 = 1509 - 1466 = 43 ✓
  - Erasmus 1516 *Novum* = 50 岁 = 1516 - 1466 = 50 ✓
  - Erasmus 1517 教皇 Leo X 给豁免 = 51 岁 = 1517 - 1466 = 51 ✓
  - Erasmus 1524 *De Libero* = 58 岁 = 1524 - 1466 = 58 ✓
  - Luther 1525 *De Servo* = 42 岁 = 1525 - 1483 = 42 ✓
  - Erasmus 1559 全作禁(Paul IV)= **死后 23 年** = 1559 - 1536 = 23 ✓
  - 1486 → 1509 → 1516 → 1521 = **35 年** = 1521 - 1486 = 35 ✓
  - **2b 段三段链时间精确**;P1-4 1517-1520 「3 年」 = 1520 - 1517 = 3 ✓
- **第 8 条 G Em-dash 密度**: 每段最多 2 个「——」/「—」链 — 无 4 段以上 X→Y→Z→A 串联 — 已逐句审过 — 注: Erasmus 子节较长 — 抽样审 Pass。
- **第 8 条 I markdown italic**: 禁中文术语 italic;只 italic 外语词(*Novum Instrumentum* / *De Libero Arbitrio* / *De Servo Arbitrio* / *In Praise of Folly* / *Moriae Encomium* / *paenitentiam agite* / *metanoeite* / *spirituali* / *Junker Jörg* / *Index Librorum Prohibitorum* / *Table Talk* / *opera omnia damnata* / *Domine, Domine* / *Basler Münster* / *cooperare* / *serpens* / *timidus* / *Morus* / *moria* / *devotio moderna* / *pietas* / *ceremoniae* / *Pfennig*)— 关键术语全部首次出现加括号简释。
- **第 8 条 J anti-fabrication framing 不进角色 monologue**: 本 patch 是 narrative §3 / §4 / §0.5 历史叙述, 不是角色第一人称 — 不适用 J 规则限制 — 但 Erasmus 1466 出身段「这名字几乎是对一个私生子的反向疗愈宣言」用「几乎是 / reads almost like」+ Erasmus「我下的蛋是文学批判和经文校勘」用 documented 1530s 信件 — 标 transparency。
- **第 10 条 atlas templating**: 无 hardcode「Willow / Cupertino / Jeffery Trail」 — 现代孩子用 generic 二人称「你 / a 7th grader / you」(P1-4 lens micro-detail「你 1518 年 Wittenberg 街角小书摊上拿到的那本」)。
- **第 11 条 quote nesting** ⚠️: 所有 CN 内嵌引号用「」中文方头括号(如 Erasmus「应当读: *metanoeite*」 / Luther「这条蛇」/「懦夫」/「两面人 — 既不冷也不热」 / Erasmus「主啊,主啊」/「我下的蛋是文学批判和经文校勘 — Luther 孵的是别的东西」/ Luther「我所有书烧了我都不可惜——除了 *De Servo Arbitrio* 和德文 Bible」 / 1559 *Index*「他用学问给异端铺路」 / Erasmus「Vulgate 拉丁文 *paenitentiam agite* 应当读: *metanoeite*」 + Luther 95 Theses Thesis 1「当主耶稣基督说『悔改吧』(*metanoeite*) — 他指的是基督徒**全部一生**应该是悔改 — 不是只是做一次外部仪式」内嵌 单引号 `『 』` 是中文方头括号变体);EN 内嵌引号用 «...» 法式 guillemets(如 «Desiderius Erasmus» / «metanoeite — turn the inward mind» / «this serpent» / «a coward» / «a man of two faces — neither cold nor hot» / «Lord, Lord» / «opera omnia damnata» / «He used scholarship to pave the road for heresy» / «Erasmus laid the egg — Luther hatched it» / «The egg I laid was literary critique and biblical collation — what Luther hatched is something else»)。**禁止 ASCII `"` 直接嵌入 outer `"..."`** — 本 patch 0 处违反。
- **inline gloss**: *Novum Instrumentum*(《新约新本》) / *In Praise of Folly*(《愚人颂》) / *Moriae Encomium*(《愚人颂》拉丁原名) / *De Libero Arbitrio*(《论自由意志》) / *De Servo Arbitrio*(《论意志的捆绑》) / *paenitentiam agite*(拉丁文「行赎罪事」) / *metanoeite*(希腊文「转变内心」) / *Table Talk*(餐桌私语集) / *Index Librorum Prohibitorum*(《禁书目录》) / *opera omnia damnata*(全作禁) / *Junker Jörg*(绅士 George 化名) / *spirituali*(意大利天主教改革派 — 本 patch 未使用,但 metadata 已加上以备 audit) / *cooperare*(合作) / *devotio moderna*(新派虔敬运动) / *pietas*(虔诚) / *ceremoniae*(仪式) / *Pfennig*(德文小币) / *Basler Münster*(Basel 大教堂) — 关键术语全部首次出现加括号简释。
- **数字精度**: 1466 生 / 1536/7/12 死 / 69 岁(不是 70) / 1509 *Folly* 100 年 600 版 / 1516 4 份希腊手稿 / 1524 + 1525 论辩 / 1559 死后 23 年禁 + 80+ 本书全禁 / 1517-1520 印刷数据 25-30 万册 / 9 家印刷店 / 30 个版次 / 1.25%-1.5% 欧洲年印量 / 1 Pfennig ≈ 普通工匠半天工资 — 模糊数字标「约」/「估计」,有上下界,有学派指认(Lyndal Roper / Heinz Schilling / Erika Rummel / Andrew Pettegree *Brand Luther* 2015 — 印刷量学派指认)。

---

## 跨 patch echo 自检

- **§0.5 (P1-3)** Pico → Erasmus → Luther **三段链** — 跟 **§3 (P0-1)** Erasmus 子节 1486/1509/1516/1521 时间链 — 一致 ✓
- **§3 (P0-1)** Erasmus 子节 1516 Matthew 4:17 *metanoeite* — 跟 **§4 (P0-2)** Theses 1 「Erasmus 1516 校勘是来源」 — 一致 ✓
- **§3 (P0-1)** Erasmus 1524-1525 决裂 — 跟 **§3 Luther 段 (P0-3 micro)** 1524-1525 cross-reference — 一致 ✓
- **§4 (P1-4)** 1517-1520 印刷数据 9 家印刷店 — 跟 **§3 Erasmus 子节 1509 *Folly* 100 年 600 版** — 都展示「印刷术 + 文化 + 商业基础设施一条链」 — 一致 ✓
- **§3 (P0-1)** 「Erasmus laid the egg, Luther hatched it」proverb — 跟 **§3 Erasmus 「中道是不是懦夫」AP 思考** — 一致 ✓
- **§3 (P0-1)** 1559 全作禁 — 跟 **既有 §3 Catholic 反宗教改革段** Loyola / Council of Trent 时间线 — 一致(Trent 1545-1563 + Loyola 1556 死 + Index 1559 — 都在反宗教改革窗口内) ✓
