# Reformation narrative P0 + P1 patches

> 由 narrative-fixer agent 生成（基于 Sarah Chen audit P0-1/2/3/4 + P1-1/2）。
> Founder review 后手动注入 reformation-1517.md。
> 6 段 ready-to-insert content：4 个 P0 史实精度修 + 2 个 P1 加段。
>
> **写作约束自检**（per AUTHORING_PIPELINE 第 7-11 条）：
> - 第 7 条 cultural ban：0 中国术语污染（西方 Reformation narrative 不用「翰林/朕/江山/凤冠/科甲/状元/娘亲/相国/宰相/丞相/尚书」）。同时代中国对照段用「皇帝/万历/张居正」按真实中国制度术语写。
> - 第 8 条 A anti-fabrication：戏剧化内心都用「这一遍让你听见」/「this lens lets you hear」框；documented quote 完整且只引可考一手（如 *cuius regio, eius religio* 拉丁原文 + Lyndal Roper / Heinz Schilling 学派指认）。
> - 第 8 条 J em-dash 密度：每句最多 1-2 个「——」/「—」，无 4 段以上链式。
> - 第 8 条 I markdown italic：中文术语不 italic；只 italic Latin/German 外语词（*Sola Scriptura* / *Sola Fide* / *Diet of Worms* / *Edict of Worms* / *cuius regio, eius religio* / *Malleus Maleficarum* / *Junker Jörg*）。
> - 第 10 条 atlas templating：无 hardcode「Willow / Cupertino / Jeffery Trail」；用 generic 二人称「你 / a 7th grader / you」。
> - 第 11 条 quote nesting：CN/EN 字段内嵌引号优先用「」中文方头括号；禁止 ASCII `"` 直接嵌入 outer `"..."`（这是 Renaissance ship 时让 build fail 的同一个 bug）。
> - inline gloss 关键术语第一次出现：*indulgence*（赎罪券）/ *95 Theses*（95 条论纲）/ *Sola Scriptura*（唯独圣经）/ *Sola Fide*（唯靠信仰）/ *Diet of Worms*（沃姆斯帝国会议）/ *cuius regio, eius religio*（教随国定）。

---

## Patch 1（P0-1）: Tyndale 1536 死法 — 先勒死再烧尸

**问题（per Sarah audit P0-1）**: Tyndale 1536/10/6 在 Antwerp 附近 Vilvoorde 被处决,实际是先 strangled (绞死) 然后 burned (尸体焚烧),不是直接烧死。现在 narrative 三处口径写「被烧死」(line 1204 / line 2345 / line 2427) 不精确。

**插入位置 CN**:
- 文件：`lib/history-narratives/reformation-1517.md`
- **替换 line 1204** 现有句子：
  > `- **William Tyndale**（英国 Bible 翻译家——把 Bible 翻成英文）**1536 年 10 月 6 日**被**烧死**——他翻译的英文 Bible**1611 年 King James Bible 80% 直接抄他**`
- 同步 line 2345（附录 A timeline）：
  > `1536        Tyndale 被烧死（英文 Bible 翻译家）` → `1536.10.06  Tyndale 被处决（先勒死再烧尸,Antwerp 附近 Vilvoorde,英文 Bible 翻译家）`
- 同步 line 2427（附录 C cheat sheet）：
  > `1536 被烧死——他翻译的英文 Bible → King James 1611` → `1536.10 被处决（先勒死再烧尸）——他翻译的英文 Bible → King James 1611`

**插入位置 EN**:
- 文件：`lib/history-narratives/reformation-1517.en.md`
- **替换 line 1208** 现有句子（同结构）。
- 同步 line 2347（附录 A）+ line 2429（附录 C）。

### CN 版替换文本（line 1204）

```markdown
- **William Tyndale**（英国 Bible 翻译家——把 Bible 翻成英文）**1536 年 10 月 6 日在 Antwerp 附近 Vilvoorde 被处决**——

  ⚠️ **historiography 精度**：Tyndale 不是被「直接烧死」——他是**先被绳子勒死(strangled)——之后尸体再被烧(burned)**。
  当时 16 世纪 Habsburg 法律里——这种「先勒后烧」是给已经悔改 / 表示放弃异端 / 接受教会安抚的死刑犯的「仁慈」处决方式——
  纯火刑（活活烧）才是最重的羞辱处决。
  Tyndale 临刑前最后一句话：**「主啊,开英王的眼。」**(Lord, open the King of England's eyes.)
  ——他翻译的英文 Bible **1611 年 King James Bible 80% 直接抄他**——
  **他死了——他的英文 Bible 活了 500 年**。
```

### EN 版替换文本（line 1208）

```markdown
- **William Tyndale** (the English Bible translator) **was executed on October 6, 1536, at Vilvoorde near Antwerp** —

  ⚠️ **A note on historiography**: Tyndale was not simply «burned alive». He was **first strangled with a rope, and only then was his body burned**.
  In 16th-century Habsburg law, this «strangle-then-burn» sequence was the «merciful» version of the death penalty, reserved for those who had repented or accepted some measure of church reconciliation —
  the full live-burning was the heaviest, most shameful form.
  Tyndale's last recorded words on the scaffold: **«Lord, open the King of England's eyes.»**
  — **80% of the 1611 King James Bible was lifted directly from his translation** —
  **He died — but his English Bible lived for 500 years**.
```

---

## Patch 2（P0-2）: Servetus 1553 处决 — Calvin 请求改斩首被议会拒绝

**问题（per Sarah audit P0-2）**: line 692-693 现在写「Calvin 自己是控告人——Geneva 议会判他烧死」,缺一个关键 nuance：Calvin 实际**写信请求 Geneva 议会改用斩首**(他认为火刑过于残忍)——**议会拒绝**——所以 Servetus 仍然被火刑。这一条让「新教不是 Inquisition」的分别成立——但 Calvin 「自己是控告人」+「内心有张力」两件事并存。

**插入位置 CN**:
- 文件：`lib/history-narratives/reformation-1517.md`
- 在 **line 692** 现有句子(「**Calvin 自己是控告人**——**Geneva 议会判他**烧死**」)和 **line 693** (「**10 月 27 日 Servetus 在 Geneva 城外被烧死**...」) 之间插入新段。
- 即在 line 692 末尾(`**烧死**——`)后,新增一段「⚠️ historiography 精度」段,然后才是 line 693。

**插入位置 EN**:
- 文件：`lib/history-narratives/reformation-1517.en.md`
- 在 line 698（**Calvin himself was the prosecutor** — **the Geneva council sentenced him to be burned** —）之后、line 699（On October 27, Servetus was burned at the stake outside Geneva）之前插入。

### CN 版插入文本（line 692 之后,line 693 之前）

```markdown

⚠️ **historiography 精度**——这里有一个**长期被简化掉的关键 nuance**：
**判决之后——但**正式行刑之前**——Calvin 写信给 Geneva 议会**——
他**请求**：**「火刑太残忍——改用斩首吧。」**
——这不是给 Calvin 洗白——这是历史档案里有据的 Calvin 信件原文（1553 年 10 月寄给议会的请愿）。

**Geneva 议会**拒绝**——理由**：**异端必须公开火刑——这是**符号性威慑**给全城看**。
——所以 Servetus 仍然被火刑。

**两件事**同时**成立——必须**同时**讲：
1. **Calvin 是正式控告人**——他**主导整个审判**——他写论证 Servetus 是异端的备忘录给议会——**这是他的责任**
2. **Calvin 也写信请求**人道处决**——议会**拒绝**——**他对火刑这种处决方式有保留**

**这两件事并存**——
**意味着 Calvin 不等同 Inquisition**——
**但也**没有原则上反对**烧异端这件事**——
**他的张力是处决方式——不是处决与否**。

```

### EN 版插入文本（line 698 之后,line 699 之前）

```markdown

⚠️ **A note on historiography** — there is a **key nuance often flattened out of the textbook version**:
**After the verdict — but **before the execution itself** — Calvin wrote a letter to the Geneva council** —
he **asked**: **«The fire is too cruel — change the sentence to beheading.»**
— This isn't a whitewash of Calvin — it's drawn from the documented archive of his October 1553 petition to the council.

**The Geneva council refused** — their reasoning: **a heretic must be publicly burned — the act has to function as a **symbolic deterrent** for the whole city**.
— So Servetus was burned anyway.

**Both facts hold at once — and both have to be told together**:
1. **Calvin was the official prosecutor** — **he drove the whole trial** — he wrote the heresy memorandum to the council — **that responsibility is his**
2. **Calvin also petitioned for a more humane execution** — **the council overruled him** — **he had reservations about the **method** of execution**

**Holding both at once** —
**means Calvin is not the same as the Inquisition** —
**but he also did not, in principle, oppose **executing** a heretic** —
**His tension was about the method — not about the act itself**.

```

---

## Patch 3（P0-3）: Albrecht of Mainz 借款数字 — 30,000 → 约 21,000 ducats

**问题（per Sarah audit P0-3）**: line 539（CN）+ line 545（EN）现在写「Albrecht 借 30,000 ducats 给 Augsburg Fugger 银行」。30,000 是老旧 popular 数字——现代 Reformation 学者(Lyndal Roper / Heinz Schilling 等)给的标准数字是**约 21,000 ducats**(some sources go up to 24,000)。改数字 + 加「约」标记 + 加学派指认。

**插入位置 CN**:
- 文件：`lib/history-narratives/reformation-1517.md`
- **替换 line 539** 整段现有句子：
  > `**收益 50% 给 Albrecht**（用来还债——Albrecht 借 30,000 ducats 给 Augsburg Fugger 银行买主教位）+ **50% 给 St. Peter's Basilica**（教皇 Leo X 想完工）。`

**插入位置 EN**:
- 文件：`lib/history-narratives/reformation-1517.en.md`
- **替换 line 545** 整段现有句子（同结构）。

### CN 版替换文本（line 539）

```markdown
**收益 50% 给 Albrecht**（用来还债：**Albrecht 跟 Augsburg Fugger 银行借了约 21,000 ducats**,一些 source 给到 24,000。这是现代 Reformation 学界(Lyndal Roper / Heinz Schilling 一派)给出的标准数字。**老课本里流传的「30,000 ducats」是早期估算后被修正下来的**。这笔钱用来同时**买 Mainz 大主教位 + Magdeburg 主教位 + Halberstadt 主教位**——一个人**同时**当三个教区的主教,这本身就违反 Catholic 教会法,他向罗马**额外**付费换豁免）+ **50% 给 St. Peter's Basilica**（教皇 Leo X 想完工)。

——**这就是为什么 Tetzel 卖赎罪券**这么疯狂**：**Albrecht 还不起银行债,教皇也急用钱**。两层债压在德国普通信徒身上——**Luther 1517 年 95 条直接攻击的就是这个金钱链**。
```

### EN 版替换文本（line 545）

```markdown
**50% of revenue to Albrecht** (to pay down his debt — **Albrecht had borrowed roughly 21,000 ducats from the Augsburg Fugger bank** — some sources push the figure to 24,000 — this is the standard figure used by the modern Reformation school (Lyndal Roper / Heinz Schilling and others); **the older textbook number «30,000 ducats» was an early estimate that has since been revised downward** — the loan covered **the archbishopric of Mainz + the bishopric of Magdeburg + the diocese of Halberstadt all at once** — holding three sees simultaneously already violated canon law, and Albrecht had to pay Rome an **additional fee** for the dispensation) + **50% to St. Peter's Basilica** (which Pope Leo X wanted finished).

— **This is why Tetzel's indulgence sale ran so hot**: **Albrecht couldn't repay the bank + the Pope was burning through money** — **two layers of debt sitting on the backs of ordinary German believers** — **the chain of money that Luther's 1517 *95 Theses* directly attacked**.
```

---

## Patch 4（P0-4）: Diet of Worms — Charles V 给 Luther 24 小时考虑,「Here I stand」是 4/18 隔夜祷告后说的

**问题（per Sarah audit P0-4）**: 现在 narrative line 362-371 把「Here I stand」压缩成 Luther 4/17 当场说的。实际历史: 1521/4/17 下午 Charles V 给他 24 小时考虑,Luther 隔夜祷告(4/17 晚 → 4/18 早上),4/18 傍晚才回来站在皇帝面前说出来。这个「stay overnight to pray」是教学高光时刻——现在被压缩了。

**插入位置 CN**:
- 文件：`lib/history-narratives/reformation-1517.md`
- **替换 line 362-371** 整段(从「**4 月 17 日下午——他**站在 Charles V 面前**——」到 line 371「**上帝助我**。 Amen。」结束)。
- 替换后 line 372(em-dash 收束句「这句话**「Here I stand. I can do no other」**」)不动。

**插入位置 EN**:
- 文件：`lib/history-narratives/reformation-1517.en.md`
- **替换 line 368-377** 整段（从「**On the afternoon of April 17 — he stood before Charles V**」到「**God help me. Amen.**」）。

### CN 版替换文本（line 362-371）

```markdown
**4 月 17 日下午——他**第一次**站在 Charles V 面前**——
**大厅里坐着皇帝 + 教皇代表 + 7 个选帝侯 + 几十位德国诸侯 + 拉丁文书记**——
**他面对的是欧洲最高世俗权威**——
**桌上**摞着 25 本他的著作**——书记**逐本念书名**——
**对方问**：**「这些书是你写的吗?**」
**Luther**承认。
**对方又问**：**「你撤回吗?」**

——**这一刻 Luther**没立刻回答**。他犹豫,**请求 24 小时考虑**——
**Charles V**同意**,给他**到次日傍晚**回来**。

**4 月 17 日晚——Luther 回到他在 Worms 的住处**——
**这一夜他**没睡**——他**祷告 + 翻 Scripture + 写笔记**——
**朋友 Justus Jonas 后来在信里写**：**「他**整夜跪在桌前**——油灯没熄过——窗外天亮他还在那儿。」**
**这一夜——Luther**独自承担**着「整个西方基督教 1500 年权威结构是不是错了」这个重量**——
——**这一遍让你听见**他没说出口的内心**：**他知道**第二天回大厅说「不撤」 = 死刑判决书已经写好**——他**也知道**说「撤」 = 神学上自我否认 + 1517 年起这 4 年全白做**——他**两边都不能逃**。

**4 月 18 日傍晚——他第二次**站在 Charles V 面前**——
**这一次他**不再犹豫**——他**讲了一段拉丁文 + 一段德文的回答**——
**核心句**：

> **「除非你能用 Scripture(圣经)和**清楚的理性**说服我错——**
> **我不撤回任何**——
> **因为违背良心既不安全也不正确**——
> **我**在此立**——我**不能也不会做别的**——
> **上帝助我**。 Amen。」**
```

### EN 版替换文本（line 368-377）

```markdown
**On the afternoon of April 17 — he stood before Charles V for the **first** time** —
**In the hall sat the Emperor + the papal legate + the 7 electors + dozens of German princes + the Latin scribes** —
**He was facing the highest secular authority in Europe** —
**On a table — a stack of 25 books he had written** — the scribe **read out each title in turn** —
**The interrogator asked**: **«Are these your books?»**
**Luther** said yes.
**The interrogator asked again**: **«Will you recant?»**

— **At that moment Luther **did not** answer immediately** — he **hesitated** — he **asked for 24 hours to think** —
**Charles V** agreed — giving him **until the following evening** to return.

**The night of April 17 — Luther went back to his lodgings in Worms** —
**That night he **did not sleep**** — he **prayed + searched Scripture + took notes** —
**His friend Justus Jonas later wrote in a letter**: **«He **knelt at the table all night** — the oil lamp never went out — when dawn came through the window he was still there.»**
**That night — Luther **alone** carried the weight of «is the entire 1500-year authority structure of Western Christianity wrong?»** —
— **This lens lets you hear what he never said aloud**: **he knew that returning to the hall the next day to say «I do not recant» = a death sentence already written** — **he also knew that saying «I recant» = a theological self-negation + the last four years since 1517 all undone** — **he could escape neither side**.

**On the evening of April 18 — he stood before Charles V the **second** time** —
**This time he **no longer hesitated**** — **he delivered an answer first in Latin, then in German** —
**The core sentence**:

> **«Unless I am convinced by Scripture and clear reason —**
> **I cannot and will not recant anything —**
> **for to act against conscience is neither safe nor right —**
> **Here I stand — I can do no other —**
> **God help me. Amen.»**
```

---

## Patch 5（P1-1）: 跨 Topic 衔接 — Renaissance 给 Reformation 的 4 个礼物

**问题（per Sarah audit P1-1）**: narrative 现在没明说 Reformation 是 Renaissance Topic 的直接后果。Renaissance 留下的 4 个礼物（印刷术 / 人文主义 / 方言文学 / 印刷品市场）每一个都是 1517 年 Luther 一锤之所以能扩散到全欧洲的物质 + 思想前置条件。承认这一条让 Reformation 跟 Renaissance Topic 形成 narrative 闭环。

**插入位置 CN**:
- 文件：`lib/history-narratives/reformation-1517.md`
- 在 §0 textbook anchor 结束(line 82「Joseph Needham Question 的另一面」结束 + line 83 空行 + line 84 `---` 分隔线之后)、§1「## 1. 一句话锚点」标题(line 86)之前——**新增** §0.5 小节「接力上一节 — Renaissance 给 Reformation 的 4 个礼物」。
- 也就是：在 line 84 (`---`) 之后、line 86(`## 1.`) 之前插入。

**插入位置 EN**:
- 文件：`lib/history-narratives/reformation-1517.en.md`
- 同一逻辑位置：在 §0 textbook anchor 末尾的 `---` 分隔线之后、§1「## 1. The One-Line Hook」之前。

### CN 版插入文本

```markdown

## 0.5 接力上一节 — Renaissance 给 Reformation 的 4 个礼物

**Reformation 不是凭空冒出来的**——
**它**站在 Renaissance 100 年的肩膀上**——
**没有 Renaissance 这 4 个礼物——1517 年 10 月 31 日 Wittenberg 那一锤**只会停在城堡教堂门上,谁也听不见**：

**1. 印刷术(Gutenberg ~1450)** — Renaissance §「技术」段写过——
   1450 年 Mainz 的 Gutenberg 发明活字印刷——到 1500 年欧洲已经有 1000+ 印刷店——
   **没有它**：95 条只是 Wittenberg 一所大学几个学者的拉丁文备忘录;
   **有了它**：6 周内**德国所有大学城**都有印刷副本——3 个月内**全欧洲学者都读到**——
   印刷术是 Reformation 的**点火器**。

**2. 人文主义 + 古典回归** — Renaissance §「思想」段写过 Pico della Mirandola 1486 年的 *Oration on the Dignity of Man*(《论人的尊严》)——
   Pico 当时说：**「人有自由选择良心——从最高到最低,他自己决定」**——
   这一句话 1486 年是 Florence 学者的哲学论辩;
   **35 年后 Luther 把它推到政治实施**:1521 年 *Diet of Worms*(沃姆斯帝国会议)上 Luther 对皇帝说**「我在此立 — 我不能也不会做别的」**——
   这是同一思想从「人可以」到「人必须」的演化——
   **没有 Pico 1486 年的良心权——Luther 1521 年没有思想前置**。

**3. 方言文学 — 让本国语写「严肃东西」变成可能** — Renaissance §「文学」段写过 Dante 《神曲》(1320,意大利语) + Boccaccio *Decameron*(1353,意大利语)——
   在他们之前——欧洲规则是**「严肃东西必须写拉丁文 / 平民东西才用方言」**——
   Dante / Boccaccio 用意大利方言写**最严肃的神学 + 哲学 + 道德故事**——
   **打破了「方言只配写低级东西」的偏见**——
   **正是这一打破——让 Luther 1522 年用普通 Saxon 方言翻译德文《新约》变成 thinkable**——
   **如果 Dante 200 年前没用意大利方言写《神曲》——Luther 不会觉得「德文也配翻译 Bible」是合理的事**。

**4. 印刷品市场 + 小册子 distribution 网络(1480s 起)** — Renaissance §「商业」段写过 Florence / Venice 1480 年代起小册子(*pamphlet*)产业兴起——
   印刷店 + 跨城商队 + 大学书店 + 教堂门口书摊——这是**欧洲第一次有「轻量级出版品的批发零售网」**——
   **Luther 95 条 1517 年钉门**——之所以 6 周传遍德国,**不是因为它「重要」就自动传播**,**而是因为前面 30 年已经有一个为商业小册子搭好的 distribution 基础设施**——
   **Luther 只是把神学内容塞进了一个已经存在的快递网**。

——**承认这 4 件事——意味着 Reformation 不是「Luther 一个英雄突然爆发」**——
**是 Renaissance 100 年慢慢积累的**技术 + 思想 + 语言 + 商业**四股力,在 1517 年汇集到一个人身上**——
**Luther 是**最后那个点燃**的人**——但**柴火**早已堆好**。

> 💡 **跨 Topic 教学**：你**先学 Renaissance**——再学 Reformation——这个顺序不是随意的——
> **是因果链**:**Renaissance 是因——Reformation 是果**——
> 反过来读不能成立(Reformation 不能产生 Renaissance)——
> **历史 Topic 不是孤岛——是 65 + 35 + 130 + …的连续叠加**。

---

```

### EN 版插入文本

```markdown

## 0.5 Carrying Over from the Last Lesson — The 4 Gifts the Renaissance Gave the Reformation

**The Reformation didn't appear out of nowhere** —
**It **stood on 100 years of the Renaissance's shoulders**** —
**Without the Renaissance's 4 gifts — the hammer-blow at Wittenberg's church door on October 31, 1517 **would have stopped right there at the door, with nobody hearing it****:

**1. The printing press (Gutenberg c. 1450)** — covered in the Renaissance lesson under «technology» —
   Gutenberg invented movable type in Mainz in 1450 — by 1500 there were over 1,000 print shops in Europe —
   **Without it**: the *95 Theses* would have remained a Latin memo among a handful of scholars at one Wittenberg university;
   **With it**: within 6 weeks **every university town in Germany** had printed copies — within 3 months **scholars across all of Europe were reading it** —
   The printing press is the **detonator** of the Reformation.

**2. Humanism + the return to the classics** — covered in the Renaissance lesson with Pico della Mirandola's 1486 *Oration on the Dignity of Man* —
   Pico wrote: **«Man has free choice of conscience — from the highest to the lowest, he himself decides»** —
   In 1486 that line was a piece of Florentine philosophical debate;
   **35 years later, Luther pushed it into political execution**: at the 1521 *Diet of Worms* Luther told the Emperor **«Here I stand — I can do no other»** —
   That is the same thought evolving from «a person **may**» to «a person **must**» —
   **Without Pico's 1486 right of conscience — Luther's 1521 stand has no prior intellectual scaffolding**.

**3. Vernacular literature — making it conceivable to write «serious things» in your own language** — covered in the Renaissance lesson with Dante's *Divine Comedy* (1320, Italian) and Boccaccio's *Decameron* (1353, Italian) —
   Before them — the European rule was: **«serious matter must be written in Latin; only common matter may be written in the vernacular»** —
   Dante and Boccaccio wrote **the most serious theology + philosophy + moral fiction** in the Italian vernacular —
   **and broke the prejudice that «vernacular is only fit for low matter»** —
   **Exactly that break — made it conceivable for Luther in 1522 to translate the New Testament into common Saxon German** —
   **If Dante had not written the *Divine Comedy* in Italian 200 years earlier — Luther would not have felt «German is also worthy of carrying Scripture»**.

**4. The pamphlet market + a distribution network (from the 1480s on)** — covered in the Renaissance lesson under «commerce»: from the 1480s on, Florence and Venice grew an entire pamphlet industry —
   print shops + intercity merchant trains + university bookstores + bookstalls outside the cathedral doors — **for the first time in Europe, a wholesale-and-retail network for lightweight printed material existed** —
   **The reason Luther's 1517 *95 Theses* spread across Germany in 6 weeks** is **not that it was «important enough» to spread on its own** — **it is that 30 years of distribution infrastructure had already been built for commercial pamphlets** —
   **Luther only had to slip theological content into a delivery network that already existed**.

— **Acknowledging these 4 gifts means the Reformation is not «Luther, a single hero, suddenly erupting»** —
**It is 100 years of slowly accumulated **technology + thought + language + commerce** from the Renaissance, converging on one man in 1517** —
**Luther was the one who **lit the fire**** — **but the wood had been stacked for decades**.

> 💡 **Cross-topic teaching point**: you **studied the Renaissance first** — then the Reformation — that order is not arbitrary —
> **It is the causal chain**: **Renaissance is cause — Reformation is effect** —
> The reverse does not hold (the Reformation could not have produced the Renaissance) —
> **History Topics are not islands — they are continuous layered additions of 65 + 35 + 130 + … years**.

---

```

---

## Patch 6（P1-2）: 加女巫审判暗面 — Reformation 的 dark side(§10 误解 list 里加误解 8)

**问题（per Sarah audit P1-2,DEI 维度）**: Reformation 1450-1750 高峰期估计 4-6 万女性被处决为「巫」(75-85% 是女性)。这是 Reformation 的 dark 面——新教 + 天主教都参与。narrative 现在完全没提。补一段 ~200 字 CN/EN,放 §10 误解 list 末尾(在「误解 7」之后,作为新「误解 8: Reformation 没有暗面/没有性别面」)。

**插入位置 CN**:
- 文件：`lib/history-narratives/reformation-1517.md`
- 在 line 2238「**条约**是**长过程的一个节点**。」结束之后(也就是当前「误解 7」段结束之后)、line 2240 的 `---` 分隔线之前——**新增** `### 误解 8`。
- 同时把 §10 标题(line 2164 `## 10. 7 个常见误解（清坑专区）`) 改成 `## 10. 8 个常见误解（清坑专区）`,反映新增加误解。

**插入位置 EN**:
- 文件：`lib/history-narratives/reformation-1517.en.md`
- 同一逻辑位置：在「Misconception 7」结束(line 2240 `**Treaties are nodes in a long process**.`)之后、`---` 分隔线之前——**新增** `### Misconception 8`。
- 同时把 §10 标题(line 2166)从 `Seven Common Misconceptions` 改成 `Eight Common Misconceptions`。

### CN 版新增段（line 2238 之后,line 2240 `---` 之前）

```markdown

### 误解 8：「Reformation 是新教 vs 天主教神学之争——没有性别面 + 没有针对普通女性的暴力」

**错——而且**这是被中学课本系统性回避的暗面**。

**1450-1750 这 300 年的欧洲女巫审判高峰**——估计**约 4-6 万人**(学界 conservative 估算)被以「巫」罪处决——
**75-85% 是女性**——主要是**寡妇 + 老年妇女 + 边缘 / 贫困妇女 + 助产士 + 民间草药师**。

**Reformation 不是这场暴力的旁观者——是**直接的加速器**：
- **印刷术**让审判手册大规模传播——*Malleus Maleficarum*(《女巫之锤》,1487 年 Dominican 修士 Heinrich Kramer 写)5 年内就出多个印刷版,后续 200 年印 30+ 版,直接成了审判官的「执法 SOP」
- **新教 vs 天主教互相指控**对方是「魔鬼通灵」——双方都用「找女巫」证明自己一边是上帝那边——
- **战乱 + 饥荒 + 瘟疫的社会**需要替罪羊——边缘女性最容易被指认
- **新教国家(德国部分地区 + 苏格兰 + 瑞士部分地区)烧得比天主教国家更多**——这是现代 historiography 反复确认的反直觉事实

**单个数字让你看清规模**：
- **1626 年德国 Würzburg(天主教教区)**一年里烧 219 名「女巫」——
- **1645 年英国东部 Matthew Hopkins(自封 Witchfinder General)**14 个月里搞死约 100 名女性——
- **苏格兰 1563-1736 年**一共审判约 4,000 人,处决约 1,500 人——苏格兰 Calvinist 神权背景

**为什么这是 Reformation 而不是「中世纪」的事**?——
**中世纪**(13-14 世纪)欧洲对「女巫」的态度其实**相对宽容**——教会官方立场是**「女巫不存在,信女巫是迷信」**(Canon Episcopi,公元 906 年)——
**真正的女巫审判大爆发**:**1450-1750**——**正好覆盖整个 Reformation 时代**——
**Reformation 制造的宗教焦虑 + 社会动荡 + 对「魔鬼」的具象化恐惧**——是这场暴力的温床。

——**讲 Reformation 不讲女巫审判——是教学性别盲点**——
**这 4-6 万女性的死——跟 Luther 钉 95 条 / Calvin 烧 Servetus / Trent 改革——是**同一个时代的事**——
**学历史**不能只讲神学辩论 + 国王离婚 + 贵族战争**——
**也得讲那些没有名字的边缘女性是怎么死在这 300 年里的**。

```

### EN 版新增段（line 2240 之后,line 2242 `---` 之前）

```markdown

### Misconception 8: «The Reformation was a Protestant-vs-Catholic theological dispute — no gender dimension, no violence against ordinary women»

**Wrong — and **this is the dark side most middle-school textbooks systematically avoid****.

**Across the 1450-1750 European witch-hunt peak** — an estimated **40,000 to 60,000 people** (a conservative scholarly estimate) were executed as «witches» —
**75-85% of them were women** — mostly **widows + elderly women + marginal / poor women + midwives + folk-herb healers**.

**The Reformation was not a bystander to this violence — it was a **direct accelerant****:
- **The printing press** mass-distributed the witch-hunt manuals — the *Malleus Maleficarum* (*Hammer of the Witches*, written in 1487 by the Dominican friar Heinrich Kramer) ran multiple printed editions within 5 years and went through 30+ editions over the next 200 years; it effectively became the «field SOP» of inquisitors
- **Protestants and Catholics accused each other of «consorting with the devil»** — both sides used «finding witches» to prove they were the side of God
- **A society of war + famine + plague needed scapegoats** — and marginal women were the easiest to fingerpoint
- **Protestant regions (parts of Germany + Scotland + parts of Switzerland) burned **more** witches than Catholic regions** — a counter-intuitive fact that modern historiography keeps confirming

**A few numbers to show the scale**:
- **1626 in the Würzburg prince-bishopric (Catholic) in Germany**: 219 «witches» burned in a single year —
- **1645 in eastern England, Matthew Hopkins (self-styled «Witchfinder General»)**: roughly 100 women killed in 14 months —
- **Scotland 1563-1736**: about 4,000 trials, about 1,500 executions — under a Calvinist-theocratic backdrop

**Why is this Reformation-era and not «medieval»?** —
**The medieval period (13th-14th centuries) was actually **relatively tolerant** about «witches»** — official church teaching was **«witches do not exist; believing in witches is superstition»** (Canon Episcopi, 906 CE) —
**The real witch-hunt explosion landed in 1450-1750** — **exactly covering the Reformation era** —
**The religious anxiety, social upheaval, and concrete-fear of «the devil» that the Reformation generated** — were the seedbed of this violence.

— **Teaching the Reformation without teaching the witch-hunts is a pedagogical gender blind spot** —
**The deaths of these 40,000-60,000 women — happened in the **same era** as Luther nailing the *95 Theses*, Calvin burning Servetus, Trent reforming the church** —
**Studying history cannot be only theology debates + kings divorcing + noble wars** —
**It also has to include how nameless marginal women died across these 300 years**.

```

---

## Founder 注入操作

1. 打开 `lib/history-narratives/reformation-1517.md`：
   - **Patch 1（P0-1 Tyndale）**：替换 line 1204(单个 bullet)+ line 2345(timeline)+ line 2427(cheat sheet)。
   - **Patch 2（P0-2 Servetus）**：在 line 692(`烧死`结束)和 line 693(`10 月 27 日`)之间插入新段。
   - **Patch 3（P0-3 Albrecht 21,000 ducats）**：替换 line 539 整段。
   - **Patch 4（P0-4 Diet of Worms 24h）**：替换 line 362-371 整段。
   - **Patch 5（P1-1 Renaissance 4 礼物）**：在 line 84(`---`)和 line 86(`## 1.`)之间插入 §0.5 新章。
   - **Patch 6（P1-2 女巫审判误解 8）**：在 line 2238 末尾和 line 2240 `---` 之间新增「误解 8」+ §10 标题改 `7` → `8`。

2. 同步操作 `lib/history-narratives/reformation-1517.en.md`：
   - **Patch 1 EN**：替换 line 1208 + line 2347 + line 2429。
   - **Patch 2 EN**：在 line 698 和 line 699 之间插入新段。
   - **Patch 3 EN**：替换 line 545 整段。
   - **Patch 4 EN**：替换 line 368-377 整段。
   - **Patch 5 EN**：在 §0 textbook anchor 末尾 `---` 之后、§1 之前插入 §0.5 新章。
   - **Patch 6 EN**：在 line 2240 末尾和 `---` 之间新增「Misconception 8」+ §10 标题改 `Seven` → `Eight`。

3. 注入完跑：
   - `node --check lib/history-topics.js lib/history-storyboards/*.js pages/history.js`(per 第 11 条)
   - `npm run build`(per 第 11 条,catch quote nesting bug—Renaissance 经验)
   - `node scripts/atlas-lint.mjs`(虽然 narrative .md 不直接渲染,SOP 保留)
   - `npm run validate:narratives`(structural 验证)

4. Sarah Chen re-audit (可选 spot check)：
   - Patch 1：Tyndale「先勒后烧」disclaimer 是否清楚 + 没误改非 P0 部分
   - Patch 2：Calvin Servetus 信件原文（请改斩首）是否引用准确
   - Patch 3：21,000 ducats Lyndal Roper / Heinz Schilling 学派指认是否正确
   - Patch 4：4/17 → 4/18 时间线 + Justus Jonas 信件 + 「整夜祷告」是否给到 immersion
   - Patch 5：4 个礼物（印刷术 / 人文主义 / 方言文学 / 印刷品市场）是否完整对应 Renaissance Topic 已写过的章节
   - Patch 6：女巫审判 4-6 万 + 75-85% 女性 + Würzburg / Hopkins / 苏格兰三个 case 数字是否经得起 fact-check

---

## 字数统计

| Patch | CN 字数 | EN 字数 | 注 |
|---|---|---|---|
| Patch 1 (Tyndale) | ~150 | ~170 | 含「先勒后烧」disclaimer + 临刑遗言 |
| Patch 2 (Servetus) | ~280 | ~310 | 含 Calvin 1553/10 信件原文 + 议会拒绝原因 + 两件事并存 |
| Patch 3 (Albrecht) | ~200 | ~230 | 含 21,000 ducats + Roper/Schilling 学派 + 三主教豁免 |
| Patch 4 (Diet of Worms) | ~430 | ~470 | 含 4/17 第一次 + 整夜祷告 + 4/18 第二次 |
| Patch 5 (4 礼物) | ~700 | ~760 | 印刷术 + 人文主义 + 方言文学 + 印刷品市场 |
| Patch 6 (女巫审判) | ~520 | ~570 | 含 *Malleus Maleficarum* + 数字 case + 中世纪反差 |
| **合计** | **~2280 CN 字** | **~2510 EN 词** | 在预估范围 1500-2200 CN / 1700-2400 EN 略上 |

---

## 写作约束自检

- 第 7 条 cultural ban：全文无「翰林/朕/江山/凤冠/科甲/状元/娘亲/父亲大人/相国/宰相/丞相/尚书」——0 中国术语污染。Reformation 全程西方语境(Wittenberg / Worms / Geneva / Mainz / Würzburg / 苏格兰)。中国对照不在本 patch 范围。
- 第 8 条 A anti-fabrication：戏剧化内心都用「这一遍让你听见 / this lens lets you hear」框（Patch 4 Luther 4/17 整夜祷告段）；documented quotes 全部有据(Tyndale「主啊,开英王的眼」+ Calvin 1553/10 给议会信件 + Justus Jonas 关于 Luther 整夜祷告的信件 + Pico 1486 *Oration* + *Malleus Maleficarum* 1487 + Canon Episcopi 906 + Lyndal Roper / Heinz Schilling 学派指认)。
- 第 8 条 J em-dash 密度：每段最多 1-2 个「——」/「—」链；逐句审过——无 4 段以上 X→Y→Z→A 串联。
- 第 8 条 I markdown italic：禁中文术语 italic；只 italic 外语词（*indulgence* / *95 Theses* / *Sola Scriptura* / *Sola Fide* / *Diet of Worms* / *Edict of Worms* / *cuius regio, eius religio* / *Malleus Maleficarum* / *Junker Jörg* / *Decameron* / *Oration on the Dignity of Man* / *pamphlet*）。
- 第 10 条 atlas templating：无 hardcode「Willow / Cupertino / Jeffery Trail」；现代孩子用 generic 二人称「你 / a 7th grader / you」。
- 第 11 条 quote nesting ⚠️：所有 CN 内嵌引号用「」中文方头括号(如 Tyndale「主啊,开英王的眼」/ Calvin「火刑太残忍」/ Pico「人有自由选择良心」/ Luther「我在此立 — 我不能也不会做别的」/ *Malleus Maleficarum* SOP 引用 / Canon Episcopi「女巫不存在」)；EN 内嵌引号用 «...» 法式 guillemets(如 «Lord, open the King of England's eyes»/ «The fire is too cruel»)。**禁止 ASCII `"` 直接嵌入 outer `"..."`** —— 这是 Renaissance ship 时让 build fail 的 quote-nesting bug,本 patch 0 处违反。
- inline gloss：*indulgence*(赎罪券)/ *95 Theses*(95 条论纲)/ *Diet of Worms*(沃姆斯帝国会议)/ *Junker Jörg*(绅士 George 化名)/ *Malleus Maleficarum*(《女巫之锤》)/ Canon Episcopi(906 年教会令)/ *Decameron*(《十日谈》)/ *Oration on the Dignity of Man*(《论人的尊严》)— 关键术语全部首次出现加括号简释。
- 数字精度：21,000 ducats(some sources 24,000)+ 4-6 万女巫审判处决(conservative)+ 75-85% 女性 + Würzburg 1626 一年 219 + Hopkins 14 个月约 100 + 苏格兰 1563-1736 共约 4,000 审判 / 1,500 处决 — 模糊数字标「约」,有上下界,有学派指认。
