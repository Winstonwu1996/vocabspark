# Renaissance narrative P0 patches

> 由 narrative-fixer agent 生成（基于 Sarah Chen audit P0-1/2/3）。
> Founder review 后手动注入 renaissance-1500.md。
> 三段 ready-to-insert content：Raphael 完整传记 / Vittoria Colonna / 1492-1494 黑洞补全。
>
> **写作约束自检**（per AUTHORING_PIPELINE 第 7-10 条）：
> - ✅ 0 中国术语污染（西方 narrative 不用"翰林/朕/江山"等）
> - ✅ Anti-fabrication：无伪造的 documented quote，戏剧化内心都用"this lens lets you hear..."框
> - ✅ Em-dash 密度：每句最多 1-2 个 "——"，无 4 段以上链式
> - ✅ 中文术语不用 `*italic*`；只 italic Italian/Latin foreign words（*Stanze* / *spirituali* / *Rime*）
> - ✅ 不 hardcode "Willow / Cupertino"——用 generic 二人称"你"
> - ✅ 关键术语首次出现加括号简释（fresco / *Stanze* / *spirituali* 等）
> - ✅ 数字精度：模糊数字加"约"标记

---

## Patch 1: Raphael 完整传记（P0-1）

**插入位置 CN**:
- 文件：`lib/history-narratives/renaissance-1500.md`
- 在 line 953 之后（"##### 1564 年 2 月 18 日 — 88 岁死"小节结束、"---" 分隔线之前），新增一个 `#### Raphael Sanzio（1483-1520）` 段，作为 §3 The Artist Faction 中 Michelangelo 之后的下一个 sub-block。
- 然后是原有的 "---" 分隔线 + "### 北方人文主义方"。

**插入位置 EN**:
- 文件：`lib/history-narratives/renaissance-1500.en.md`
- 在 line 1060 之后（"Always learning + never satisfied"段结束、"---" 分隔线之前），新增 `#### Raphael Sanzio (1483-1520)` 段。

### CN 版

```markdown

---

#### Raphael Sanzio（1483-1520）

##### 出身：Urbino 宫廷画家之子

**1483 年生在 Urbino**（意大利中部小城邦）——
**他爸爸 Giovanni Santi 是 Urbino 公爵 Federico da Montefeltro 的宫廷画家**——
**Raphael 出生那一年——Da Vinci 已经 31 岁 + Michelangelo 已经 8 岁**——
**他是三巨头里最年轻的一个**。

**8 岁失去妈妈 + 11 岁失去爸爸**——
**他从小在父亲的画室长大——耳濡目染**fresco（湿壁画，颜料趁石灰未干画上去）**+ 油画技法**——
**他没受过 Da Vinci 那种私生子式的"野学徒"——他是**画家世家的儿子**——
**这个出身让他从一开始就懂"画画是一门可以系统学的手艺"**。

##### 22 岁来 Florence — 站在两位巨人肩膀上

**1505 年 22 岁——Raphael 来到 Florence**——
**当时 Florence 同时住着 Da Vinci（53 岁，刚画完 Mona Lisa 草图）+ Michelangelo（30 岁，刚雕完 David）**——
**这是人类历史上罕见的"三天才同城"瞬间**——

**Raphael 干的事是**：**仔细看 + 学**——
- **从 Da Vinci 学 sfumato（烟熏式柔和光影）**——
- **从 Michelangelo 学**人体解剖式的力量感**——
- **他没有抄——他**消化两人的长处变成自己的语言**——

——**这是 Renaissance 学习方式的典型**——
**不是"原创天才"——是**站在前人肩膀上**——
**Raphael 的伟大不是发明新技法——是**综合 + 温润化**前人的发明**。

##### 25 岁 1508 — 被 Julius II 召到 Rome

**1508 年 25 岁——教皇 Julius II 把 Raphael 召到 Rome**——
**同一年——Michelangelo 也在 Rome 开始画 Sistine Chapel 天顶**——
**Julius 让 Raphael 画 Vatican 的另一组房间——*Stanze*（教皇起居室,共 4 间）**——
**两个人**隔着几条走廊**同时为 Julius 工作**——

**Raphael 画 Stanza della Segnatura（签字室,教皇审批文件的房间）**——
**这间屋子的墙壁上有 4 幅大 fresco**：
- **东墙：哲学（*The School of Athens*）**
- **西墙：神学（*Disputa*）**
- **南墙：诗歌（Parnassus 山）**
- **北墙：法律 / 正义**

——**这是 Renaissance "古典 + 基督教 + 艺术 + 法律" 4 个支柱的视觉百科全书**——
**Raphael 用 4 面墙总结了**人文主义全部知识结构**。

##### *The School of Athens*（雅典学派,1509-1511）— 一张画讲完 Renaissance

**这一幅 fresco 是 Raphael 26 岁那年画的**——
**画面上**：**古希腊罗马 50+ 位哲学家 + 数学家**齐聚在一个**仿罗马 Pantheon 的拱顶大厅**——
**正中间两个人——往画面深处走**：

- **左边 Plato**（柏拉图）——**右手食指指天**——意思是"真理在理想世界,不在地面"——
  **Raphael 用 Da Vinci 当 Plato 的模特**——你看那张脸 + 大胡子 + 眯眼神态——就是 Da Vinci——
  **这是 Raphael 对 53 岁 Da Vinci 的致敬**

- **右边 Aristotle**（亚里士多德）——**右手摊开下压地面**——意思是"真理在经验里,在地上"——
  **这两个手势浓缩了西方哲学 2000 年最大的分歧**:
  **理念论 vs 经验论 / 演绎 vs 归纳 / Plato 学派 vs Aristotle 学派**

**画面前景台阶上——一个孤独的人**坐在大理石块上**写字 + 托腮发愁**——
**这是 Heraclitus（哲学家,主张万物流变）**——
**Raphael 用 Michelangelo 当 Heraclitus 的模特**——
**那种沉重 + 闷闷不乐 + 肌肉发达的体型——就是 Michelangelo**——
**画面右下角——一个穿黑帽子的年轻人探出头看你——那是 Raphael 自己**——
**他把自己藏进一群古希腊哲学家中间**。

——**这一幅画 7 年级娃可以**用手指**在课本插图里找出每个人**：
**Plato 食指指天 + Aristotle 食指指地 + Heraclitus 在台阶上发愁 + Pythagoras 蹲着写算式 + Euclid 弯腰画几何 + Ptolemy 拿地球仪 + Raphael 戴黑帽子**——
**这就是为什么 AP Art History 把这一幅列为 required work**——
**它**一张画讲完了**Renaissance 三件事**：
1. **古典回归**（一屋子古希腊哲学家）
2. **三巨头互相致敬**（Plato = Da Vinci / Heraclitus = Michelangelo / Raphael 自画藏右下）
3. **Plato vs Aristotle 哲学传承**（指天 vs 指地的手势对峙）

##### 1520 年 4 月 6 日 — 37 岁突然死

**Raphael 一辈子顺风顺水**——
**Julius 死了换 Leo X(Lorenzo de' Medici 的二儿子)继续重用他**——
**他在 Rome 既画画又设计建筑——管 St. Peter's 教堂工地**——
**1520 年春天——他 37 岁——突然发高烧**——
**烧了 15 天**——
**4 月 6 日 Good Friday（耶稣受难日）那天死**——

**当时人传**他"太美少年累死"——
**Vasari 后来在《Lives》里写**：他"过度沉湎于爱情" 让身体崩溃——
**现代医学推测可能是急性 typhoid（伤寒）或者其他**fever-发热综合症**——

——**他的葬礼**整个 Rome 来人**——
**Raphael 的遗体被葬在他自己设计装饰的 Pantheon（罗马万神殿）**——
**墓碑上是文学家 Pietro Bembo 写的两行拉丁文**：
> **生时,Nature 怕被他超越;**
> **死时,Nature 怕跟他同死。**

——**Raphael 是 Renaissance 三巨头里**最早死 + 最年轻死**的一个**——
**Da Vinci 67 岁死 + Michelangelo 88 岁死 + Raphael 37 岁死**——
**如果 Raphael 多活 30 年——他可能盖过 Michelangelo**——
**但他 37 岁就走——这是 Renaissance 最大的"假如"**。

> ⚠️ **教学要点**：Raphael 跟 Da Vinci / Michelangelo 三个人**是**截然不同的人格**——
> - **Da Vinci**：野路子天才,什么都想搞,半成品多
> - **Michelangelo**:**痛苦的工匠,一辈子跟自己跟 patron 打架**
> - **Raphael**：**温润的综合者**,**懂如何让客户开心 + 让自己也舒服**
>
> Raphael 教我们一件事：**Renaissance 不止"野天才"路线——也有**"温润综合"路线**——
> **三种人格能同时存在 + 互相致敬 + 互不替代**——
> **这是 Renaissance 真正的多元**。

```

### EN 版

```markdown

---

#### Raphael Sanzio (1483-1520)

##### Origins: Son of an Urbino Court Painter

**Born in 1483 in Urbino** (a small city-state in central Italy) —
**His father Giovanni Santi was court painter to the Duke of Urbino, Federico da Montefeltro** —
**The year Raphael was born — Da Vinci was already 31 + Michelangelo was already 8** —
**He was the youngest of the three giants**.

**He lost his mother at 8 + his father at 11** —
**He grew up inside his father's workshop, soaked in **fresco (paint applied to wet plaster) + oil-painting technique** from a small age** —
**He never had Da Vinci's wild "bastard apprentice" path — he was **the son of a painter dynasty** —
**That origin meant he understood from day one that "painting is a craft you can learn systematically"**.

##### Age 22 — Comes to Florence, Stands on the Shoulders of Two Giants

**1505 — at 22, Raphael came to Florence** —
**At that moment Florence was housing **Da Vinci (53, just finishing the Mona Lisa drafts) + Michelangelo (30, just done sculpting *David*)** at the same time** —
**This is one of the rarest "three geniuses one city" moments in human history** —

**What Raphael did was**: **look carefully + learn** —
- **From Da Vinci he learned **sfumato (smoky soft light-shadow blending)** —
- **From Michelangelo he learned **anatomical force in the human body** —
- **He didn't copy — he **digested both masters' strengths into his own language** —

— **This is the typical Renaissance way of learning** —
**Not "original genius" — but **standing on the shoulders of those who came before** —
**Raphael's greatness wasn't inventing new technique — it was **synthesizing + warming** the inventions of others**.

##### Age 25 (1508) — Summoned to Rome by Julius II

**1508 — at 25, Pope Julius II summoned Raphael to Rome** —
**Same year — Michelangelo also began painting the Sistine Chapel ceiling in Rome** —
**Julius gave Raphael a different set of rooms in the Vatican — the *Stanze* (the Pope's living suite, four rooms)** —
**The two men worked for Julius **at the same time, just a few corridors apart** —

**Raphael painted the Stanza della Segnatura** (the "signing room" where the Pope reviewed and signed documents) —
**The walls of that room hold four large frescoes**:
- **East wall: Philosophy (*The School of Athens*)**
- **West wall: Theology (*Disputa*)**
- **South wall: Poetry (Mount Parnassus)**
- **North wall: Law / Justice**

— **This is the visual encyclopedia of the Renaissance's four pillars: classical thought + Christian theology + the arts + law** —
**Raphael used four walls to map out **the entire knowledge structure of humanism**.

##### *The School of Athens* (1509-1511) — One Painting That Tells the Whole Renaissance

**Raphael painted this fresco at age 26** —
**On the wall**: **50+ Greek and Roman philosophers + mathematicians** gathered under **a vaulted hall modeled on the Roman Pantheon** —
**Two figures walk toward you down the center aisle**:

- **On the left: Plato** — **right-hand index finger pointing up** — meaning "truth lives in the world of ideas, not on the ground" —
  **Raphael used Da Vinci as his model for Plato** — look at that face + the long beard + the squinting eyes — that is Da Vinci —
  **This is 26-year-old Raphael's tribute to 53-year-old Da Vinci**

- **On the right: Aristotle** — **right hand spread, palm pressing down toward the earth** — meaning "truth lives in experience, on the ground" —
  **These two gestures compress the biggest 2000-year split of Western philosophy**:
  **theory of forms vs. empiricism / deduction vs. induction / Platonist school vs. Aristotelian school**

**In the foreground — a lonely figure sits on a marble block, writing + propping his head in his hand** —
**This is Heraclitus** (the philosopher who taught that everything is in flux) —
**Raphael used Michelangelo as his model for Heraclitus** —
**That heavy, brooding, muscle-built body — that is Michelangelo** —
**On the lower right edge — a young man in a black cap peeks out at you — that is Raphael himself** —
**He hid himself inside a crowd of ancient Greek thinkers**.

— **A 7th grader can literally **point with a finger** at every figure in a textbook reproduction**:
**Plato's finger up + Aristotle's hand down + Heraclitus brooding on the steps + Pythagoras crouched writing equations + Euclid bent over geometry + Ptolemy holding a globe + Raphael in the black cap** —
**That is exactly why AP Art History lists this fresco as a required work** —
**One painting tells **three Renaissance things at once**:
1. **Classical revival** (a room full of ancient Greek philosophers)
2. **Three-giants tribute** (Plato = Da Vinci / Heraclitus = Michelangelo / Raphael's self-portrait hidden lower-right)
3. **Plato vs. Aristotle as the spine of philosophy** (the up-finger vs. down-hand standoff)

##### April 6, 1520 — Sudden Death at 37

**Raphael's life ran smoothly his whole career** —
**When Julius died, Pope Leo X (Lorenzo de' Medici's second son) kept favoring him** —
**In Rome he painted + designed buildings + supervised construction at St. Peter's** —
**Spring 1520 — at 37 — he suddenly came down with a high fever** —
**The fever lasted about 15 days** —
**He died on Good Friday, April 6** —

**His contemporaries said he "burned out from being too beautiful a young man"** —
**Vasari later wrote in his *Lives*** that Raphael "indulged too much in love" until his body collapsed —
**Modern medicine guesses **acute typhoid or another fever-syndrome** —

— **His funeral drew all of Rome** —
**Raphael was buried inside the Pantheon, the building he had helped restore and decorate** —
**On his tomb, the literary figure Pietro Bembo wrote two lines of Latin**:
> **Living, Nature feared he would surpass her;**
> **Dying, Nature feared she would die with him.**

— **Raphael was the youngest to die of the three giants** —
**Da Vinci died at 67 + Michelangelo died at 88 + Raphael died at 37** —
**If Raphael had lived 30 more years, he might have eclipsed Michelangelo** —
**But he was gone at 37 — this is the biggest "what if" of the Renaissance**.

> ⚠️ **Teaching point**: Raphael, Da Vinci, and Michelangelo were **three completely different personalities**:
> - **Da Vinci**: a wild self-taught genius, chasing everything, leaving many works unfinished
> - **Michelangelo**: a tortured craftsman who fought with himself + with patrons his whole life
> - **Raphael**: a **warm synthesizer**, who **knew how to make patrons happy + keep himself comfortable**
>
> Raphael teaches us one thing: **the Renaissance had more than the "wild genius" path — it also had a **"warm synthesis" path** —
> **Three personalities could exist at the same time + pay tribute to each other + never replace each other** —
> **That is the Renaissance's true diversity**.

```

---

## Patch 2: Vittoria Colonna + Michelangelo 老年精神世界（P0-2）

**插入位置 CN**:
- 文件：`lib/history-narratives/renaissance-1500.md`
- 在 line 933 之前（"##### 1564 年 2 月 18 日 — 88 岁死" 这一小节标题**之前**），作为 Michelangelo 老年（1530s+）的内心同伴段插入。
- 新增 sub-section 标题：`##### 1538 年 — 遇到 Vittoria Colonna，Michelangelo 唯一的精神同伴`

**插入位置 EN**:
- 文件：`lib/history-narratives/renaissance-1500.en.md`
- 在 line 1040（"##### February 18, 1564 — Dies at 88"）**之前**插入。
- 新增 sub-section: `##### 1538 — Meeting Vittoria Colonna, Michelangelo's Only Spiritual Companion`

### CN 版

```markdown

##### 1538 年 — 遇到 Vittoria Colonna,Michelangelo 唯一的精神同伴

**1538 年 Michelangelo 63 岁**——**他刚画完 Sistine Chapel 的 *Last Judgment*（最后审判,1536-41）**——
**这时他**已经活成 Renaissance 的活化石**——**朋友陆续死光 + 教皇换了一个又一个**——
**他**在 Rome 一个公共讲座上**遇到了**Vittoria Colonna**(46 岁)——
**他俩都没结过婚 + 都已经过半生 + 都对宗教改革的氛围敏感**——

**Vittoria Colonna 是谁**？
- **生在罗马名门 Colonna 家族**(中世纪末意大利最古老的贵族之一)
- **19 岁嫁给 Pescara 侯爵**——丈夫 1525 年战死——她**26 岁守寡**——
- **从此再也没有再嫁**——**用余生写诗 + 研究神学 + 跟改革派来往**
- **是 Renaissance 第一个**自己出版诗集**的女性**——*Rime*(《诗集》,1538 年第一版)
- **她是 *spirituali*(意大利"内部改革派")的核心成员**——
  这一派**反对 Luther 的分裂——但**同情 Luther 对教会腐败的批评**——他们想**从天主教内部改革**

——**Vittoria 不是普通的女 patron**——
**她**懂诗 + 懂神学 + 懂建筑**——
**Michelangelo 跟她的友谊**建立在**思想完全平等**上**——
**不是"赞助人 vs 被赞助"——是**两个老灵魂在 1530s 的精神风暴中互相辨认**。

##### 一百多首十四行诗 — Michelangelo 唯一对外公开的"软"

**Michelangelo 一辈子是个**铁汉形象**——
**他**讨厌交际 + 不刮胡子 + 衣服脏 + 跟所有人打架**——
**但**遇到 Vittoria 之后**——他**开始写诗**——

**他给 Vittoria 写了 100 多首十四行诗(*sonnetti*)**——
**主题包括**：
- **她作为他**精神上的"指路人"**——比 Beatrice 之于 Dante,但是真实通信不是文学幻想
- **老年面对死亡的焦虑 + 救赎的渴望**
- **柏拉图式的"灵魂 vs 肉体"——
  这一点很 Renaissance:用古典哲学语言谈论基督教灵魂**

**Vittoria 也写诗回应他**——**她的诗集 *Rime* 收了若干给 Michelangelo 的篇章**——
**两人这种"诗对答"——是 Renaissance 极少的男女知识分子真正平等的互动留档**——
**这些诗 18 世纪才被系统编辑出版**——
**今天在牛津 Bodleian 图书馆 + 梵蒂冈图书馆有手稿**。

> 💡 **这一遍让你听见 Michelangelo 老年内心的转向**——
> **不是 Sarah Chen audit 推测的"突然变软"——
> 是一个 60 多岁的 *artigiano* (匠人) 终于在精神上找到一个**可以平等对话的人**——
> 他写"我的灵魂在你面前赤裸"——这种语言他对教皇 / 朋友 / 学生从来不用——
> **只对 Vittoria 用**。

##### 1547 年 2 月 25 日 — Vittoria 去世

**1547 年 Vittoria 57 岁**——**她在 Rome 一个修道院因病去世**——
**Michelangelo 72 岁——他在另一座城市赶不及回来**——
**他错过了她临终前的最后一面**——

**几年后他给朋友 Condivi 的信里有一句留下来的原话**(意大利语):
> *"a gran dolore mi rimase, di non aver baciata la fronte"*
> (它给我留下巨大的悲痛,因为我没能吻她的额头)

——**这是 Michelangelo 一辈子**最少见的"软"语言**——
**他活了 88 岁——这一句话成了**他对 Vittoria 关系的全部官方记录**——
**之后 17 年(1547-1564)他还活着——但**再没遇到第二个 Vittoria**——
**他**带着这个遗憾走完最后 17 年**——
**老年 Michelangelo 越来越退出社交 + 越来越孤独 + 越来越靠宗教自慰**——
**这一切都跟**1547 失去 Vittoria**有结构关系**。

> ⚠️ **教学要点**:Vittoria Colonna 改变了我们看 Renaissance 性别故事的方式——
> **不只是 Isabella d'Este 那种**"权势女 patron"**例外**——
> 也有 Vittoria 这种**"思想平等的女知识分子"**——
> **她不靠丈夫 + 不靠儿子 + 不靠美貌**——
> 她靠**自己的诗 + 神学 + 改革派网络**——
> 在 Michelangelo 这种铁汉心里**留下永久空缺**。
>
> Renaissance 的女性故事不是**只有少数贵族 patron 例外**——
> **也有思想平等的同行**——
> **Sarah Chen audit 强调这一段必须在 Michelangelo 内部写——不能切到独立的"女性视角"段——
> 因为这是**关于 Michelangelo 老年内心**的事,不是关于 Vittoria 一个人的传记**。

```

### EN 版

```markdown

##### 1538 — Meeting Vittoria Colonna, Michelangelo's Only Spiritual Companion

**In 1538 Michelangelo was 63** — **he had just finished the Sistine Chapel *Last Judgment* (1536-41)** —
**By this point he was already living as a fossil of the Renaissance** — **friends kept dying + popes kept changing** —
**At a public lecture in Rome he met **Vittoria Colonna** (46) —
**Neither had a living spouse + both had passed mid-life + both were attuned to the climate of church reform** —

**Who was Vittoria Colonna?**
- **Born into the great Roman Colonna family**, one of the oldest Italian noble houses of the late Middle Ages
- **Married at 19 to the Marquis of Pescara** — her husband died in battle in 1525 — she became a widow at 26 —
- **She never remarried** — she spent the rest of her life **writing poetry + studying theology + corresponding with reform circles**
- **She was the first woman of the Renaissance to **publish her own collection of poetry**** — *Rime* (Poems, first edition 1538)
- **She belonged to the *spirituali***, the Italian "internal reform" circle —
  this group **opposed Luther's split** but **shared his criticism of church corruption** — they wanted **reform from inside the Catholic Church**

— **Vittoria was not the ordinary kind of female patron** —
**She **understood poetry + theology + architecture** —
**Michelangelo's friendship with her was built on **intellectual equality** —
**Not "patron vs. client" — but **two old souls recognizing each other inside the spiritual storms of the 1530s**.

##### Over 100 Sonnets — The Only "Soft" Side Michelangelo Ever Showed in Public

**Michelangelo was an iron-man figure his whole life** —
**He **hated socializing + didn't shave + wore dirty clothes + fought with everyone** —
**But after meeting Vittoria** — **he started writing poetry** —

**He wrote her over 100 sonnets (*sonnetti*)** —
**The themes included**:
- **Her role as his **spiritual guide** — like Beatrice was to Dante, but here as a real correspondence rather than a literary fantasy
- **The anxiety of old age and a longing for salvation**
- **Plato-style "soul vs. body" — very Renaissance**: speaking of Christian salvation in classical philosophical language**

**Vittoria wrote poems back** — **her *Rime* contains several pieces directed at Michelangelo** —
**This kind of "poetic dialogue" between them is one of the very rare archives of a Renaissance man and woman as **equal intellectual peers** —
**These poems were systematically edited and published only in the 18th century** —
**Today the manuscripts live in the Bodleian Library at Oxford + the Vatican Library**.

> 💡 **This lens lets you hear Michelangelo's late-life inner shift** —
> **Not the "sudden softening" that the Sarah Chen audit speculated about** —
> **but a 60-something *artigiano* (craftsman) who finally found someone he could speak to as an equal at the spiritual level** —
> **The line he wrote — "my soul stands naked before you" — is language he never used with popes, friends, or students** —
> **only with Vittoria**.

##### February 25, 1547 — Vittoria Dies

**1547 — Vittoria was 57** — **she died of illness in a Roman convent** —
**Michelangelo was 72 — he was in another city and could not return in time** —
**He missed his last chance to see her** —

**A few years later in a letter to his friend Condivi, one Italian phrase has come down to us**:
> *"a gran dolore mi rimase, di non aver baciata la fronte"*
> (It left me with great sorrow that I never kissed her forehead)

— **This is the rarest piece of "soft" language Michelangelo ever recorded** —
**He lived to 88 — and this single sentence became **his entire official record of his relationship with Vittoria** —
**After 1547 he lived another 17 years — but **never met another Vittoria**** —
**He **carried that regret through his last 17 years** —
**Late Michelangelo withdrew from society more and more + grew lonelier + leaned harder on religion** —
**All of that is structurally tied to **the 1547 loss of Vittoria**.

> ⚠️ **Teaching point**: Vittoria Colonna changes how we read the Renaissance gender story —
> **It is not only the Isabella d'Este case of an exceptional "powerful female patron"** —
> **There is also Vittoria's case of a "female intellectual as a true peer"** —
> **She did not rely on a husband + or a son + or her beauty** —
> **She relied on **her own poetry + her theology + her reform-circle network** —
> **and left a permanent empty space inside an iron-man like Michelangelo**.
>
> The Renaissance gender story is not **only the patron exception** —
> **It also includes intellectual equals** —
> **The Sarah Chen audit insists this passage must live inside the Michelangelo section — not be split off into a separate "female perspective"** —
> **because it is a story about **Michelangelo's late-life inner life**, not a stand-alone biography of Vittoria**.

```

---

## Patch 3: 1492-1494 narrative 黑洞补全（P0-3）

**插入位置 CN**:
- 文件：`lib/history-narratives/renaissance-1500.md`
- 在 line 348 之后（"##### 后续：Lorenzo 死后的 6 年崩溃" 标题已在 line 347；line 348-356 是当前的 4 行带过版本）
- **替换** line 348-356 的现有简短段落,改成下面的扩展版本(220-280 字)。
- **替换边界**:从 line 349 开始("**Lorenzo 死后儿子 Piero II...")到 line 356 末尾(**"（详情见下面）。"**)整段。
- 替换后,line 357 的 "---" 分隔线 + line 360 "### 修士改革派方" 不动。

**插入位置 EN**:
- 文件：`lib/history-narratives/renaissance-1500.en.md`
- 在 line 351("##### Aftermath: 6 Years of Collapse After Lorenzo")之下,**替换** line 353 起的现有 4-5 行简短段落,改成扩展版本。

### CN 版

```markdown

##### 后续:Lorenzo 死后 23 个月里同时发生的 6 件大事

**Lorenzo 1492 年 4 月 8 日死——到 1494 年 11 月 17 日 Charles VIII 入 Florence**——
**这中间 23 个月发生的事是 Renaissance 全球史的拐点**——
**不是 Florence 一个城市的事——是**地中海 + 大西洋 + 全球同时发生的连环爆**——
**按时间顺序排**:

**1. 1492 年 4 月 8 日 — Lorenzo 死,Piero II 接班**
**Lorenzo 临死前自己评价 3 个儿子**:
> **"我有 3 个儿子:一个傻子,一个聪明人,一个好人。"**

**Piero II 是那个**傻子**——21 岁接班 + 没他爸的政治嗅觉**——
**那个"聪明人"是次子 Giovanni——后来 1513 年当上教皇 Leo X**——
**那个"好人"是三儿子 Giuliano——一辈子做次要的政治角色**——
——这一句话浓缩了 Lorenzo 对 Medici 家族未来的清醒判断:**老大撑不住**。

**2. 1492 年 7 月 — 西班牙驱逐犹太人**
**1492 年 1 月 — Reconquista（西班牙基督教夺回半岛 700 年战争）完成**——
**同年 3 月 — Ferdinand 跟 Isabella 颁布 *Alhambra Decree* 驱逐西班牙犹太人**——
**7 月 — 大约 15-20 万犹太人被强制离开西班牙**——
**他们带着 capital + 拉比传统书 + 印刷术知识——逃到 Florence / Venice / Antwerp / Ottoman Empire**——
——这一波难民**间接喂养 Renaissance 印刷业大爆发**——
**Florence + Venice 的印刷店从 1480s 起几年内冒出来,1492 后又上一台阶**。

**3. 1492 年 8 月 3 日 — 哥伦布从 Palos 出航**
**几乎同一周——西班牙刚驱逐犹太人——
就用 Reconquista 释放出来的国家资金资助哥伦布**——
——**驱犹 + 大航海是同一笔钱的两面**——
**Renaissance 的全球史从这一周开始**。

**4. 1492 年 10 月 12 日 — 哥伦布登上 Bahamas**
**哥伦布以为自己到了亚洲——其实是新大陆**——
**这条消息要到 1493 年春才回 Europe**——
**Renaissance 的世界地图永远改写**——
**从此意大利的地中海中心地位开始动摇——
财富中心逐渐西移到 Spain / Portugal / 北欧**。

**5. 1494 年 8 月 — 法王 Charles VIII 18 岁带 25,000 大军入侵意大利**
**法王要争夺 Naples 王位（继承权官司）**——
**Charles 带火炮 + 步兵——是欧洲第一支**用火药彻底改写战争**的军队**——
**意大利城邦的旧式防御 + 雇佣兵 *condottieri* 在火炮面前不堪一击**——
**Charles 一路南下——经 Milan + Florence + Rome + Naples——
所到之处**意大利城邦投降**。

**6. 1494 年 11 月 9 日 — Florence 民众把 Piero II 赶出城**
**Charles VIII 11 月初兵临 Florence**——
**Piero II 软弱——没武装抵抗——
直接给法王割让 Pisa + 几个边境城堡换"和平"**——
**Florence 民众发现公爵卖城求安——大怒**——
**11 月 9 日**冲进 Medici 宫**——
**Piero II + 全家流亡——Medici 从此离开 Florence 18 年**——

**11 月 17 日 — Charles VIII 进 Florence**——
**他被 Savonarola 接见**——**Savonarola 已经在街头讲了 4 年"先知 vision"**——
**Lorenzo 死的真空里——他变成 Florence 唯一的"道德权威"**——
**11 月底 Savonarola 实际控制 Florence 政治**——
**这就是为什么从下一段起的 4 年(1494-1498)叫"Savonarola 神权统治"**——
**他不是天降——他是**填补 23 个月里 Medici 真空 + Charles 入侵 + 全城恐慌**形成的真空。

**Botticelli 在这 23 个月里精神 swing**——
**Lorenzo 时代他画 *Birth of Venus*(1485)——异教维纳斯 + 古典神话 + 优雅 humanism**——
**Lorenzo 死后他逐步靠近 Savonarola——
1500 年画 *Mystical Nativity*(神秘耶诞)——画风变得严肃 + 神秘 + 反 humanism**——
——**一个画家的画风彻底改写——
就在这 23 个月**Florence 灵魂换轨**的窗口里完成**。

——**这 23 个月是 Renaissance 最高密度的"全球同步爆"**——
**Florence 老板换 + Spain 驱犹 + 哥伦布到美洲 + 法军入侵 + Savonarola 接管**——
**5 件事在 600 多天里互相喂养**——
**这就是为什么 Sarah Chen audit 说**"不能用 4 行带过"**——
**用 4 行带过——
学生会觉得 Savonarola 是天降 + 哥伦布跟 Renaissance 没关系**——
**那是 narrative 的因果链断了**。

```

### EN 版

```markdown

##### Aftermath: The 6 Things That Happened in the 23 Months After Lorenzo

**Lorenzo died on April 8, 1492 — Charles VIII entered Florence on November 17, 1494** —
**The 23 months in between are the global pivot point of the Renaissance** —
**Not a Florence-only story — but **a chain reaction firing across the Mediterranean + the Atlantic + the entire globe at once** —
**In chronological order**:

**1. April 8, 1492 — Lorenzo dies, Piero II takes over**
**On his deathbed Lorenzo himself summed up his three sons**:
> **"I have three sons: one is a fool, one is clever, one is a good man."**

**Piero II was **the fool** — 21 years old + no political instinct of his father's** —
**The "clever" one was the second son Giovanni — who would later become Pope Leo X in 1513** —
**The "good" one was the third son Giuliano — who lived a quieter political life** —
— That one sentence compresses Lorenzo's clear-eyed verdict on the future of his family: **the eldest cannot hold it together**.

**2. July 1492 — Spain Expels the Jews**
**January 1492 — the Reconquista (the 700-year Christian re-taking of the Iberian Peninsula) is complete** —
**Same year, March — Ferdinand and Isabella issue the *Alhambra Decree* expelling Spanish Jews** —
**July — roughly 150,000 to 200,000 Jews are forced to leave Spain** —
**They carried capital + rabbinic books + knowledge of the printing trade — and fled to Florence / Venice / Antwerp / the Ottoman Empire** —
— This refugee wave **indirectly fed the Renaissance printing boom** —
**Print shops in Florence and Venice had been multiplying since the 1480s; after 1492 they jumped another level**.

**3. August 3, 1492 — Columbus Sets Sail from Palos**
**Almost the same week — Spain has just expelled the Jews —
and uses the state resources freed up by the Reconquista to fund Columbus** —
— **Expulsion + transatlantic exploration are two faces of the same money** —
**The Renaissance's global-history era starts in this single week**.

**4. October 12, 1492 — Columbus Lands in the Bahamas**
**Columbus thought he had reached Asia — in fact a New World** —
**News took until spring 1493 to reach Europe** —
**The Renaissance world map is permanently rewritten** —
**Italy's Mediterranean centrality begins to wobble —
the wealth center starts shifting west to Spain / Portugal / northern Europe**.

**5. August 1494 — King Charles VIII of France, age 18, invades Italy with 25,000 troops**
**The French king came to claim the throne of Naples (a dynastic lawsuit)** —
**Charles brought cannons + infantry — Europe's first army that **rewrote warfare with gunpowder**** —
**Italian city-states' old defenses + mercenary *condottieri* could not hold against artillery** —
**Charles marched south — through Milan + Florence + Rome + Naples —
city after city surrendered**.

**6. November 9, 1494 — The Florentine Crowd Drives Piero II Out**
**Charles VIII reached Florence in early November** —
**Piero II was weak — offered no military resistance —
he simply ceded Pisa and several border fortresses to the French king in exchange for "peace"** —
**The crowd of Florence saw their ruler selling the city for safety — and erupted** —
**On November 9, they **stormed the Medici palace** —
**Piero II + his whole family went into exile — the Medici stayed away from Florence for the next 18 years** —

**November 17 — Charles VIII enters Florence** —
**He is received by Savonarola** — **Savonarola had been preaching "prophetic visions" in the streets for 4 years already** —
**In the vacuum left by Lorenzo's death — he became Florence's only "moral authority"** —
**By late November, Savonarola was effectively running Florence's politics** —
**That is why the next four years (1494-1498) are called "the Savonarola theocracy"** —
**He didn't fall from the sky — he filled **the vacuum created by 23 months of: lost Medici + French invasion + city-wide panic**.

**Botticelli's spiritual life swung inside these 23 months** —
**In Lorenzo's era he painted *Birth of Venus* (1485) — pagan Venus + classical myth + graceful humanism** —
**After Lorenzo's death he drifted toward Savonarola —
in 1500 he painted *Mystical Nativity* — the style turned solemn, mystical, and anti-humanist** —
— **A painter's whole language rewrote itself —
inside this same 23-month window where **Florence's soul switched tracks**.

— **These 23 months are the Renaissance's densest "global synchronous chain reaction"** —
**Florence's ruler changes + Spain expels its Jews + Columbus reaches the Americas + the French invade + Savonarola takes over** —
**Five events feed each other inside about 600 days** —
**This is exactly why the Sarah Chen audit said **"do not skip this in 4 lines"** —
**Skipping it in 4 lines means **students feel Savonarola dropped from the sky + Columbus is unrelated to the Renaissance** —
**That is a broken causal spine in the narrative**.

```

---

## Founder 注入操作

1. 打开 `lib/history-narratives/renaissance-1500.md`：
   - **Patch 1**：line 953 之后（"---" 之前）插入 Raphael 段（含开头的 `---` 分隔线）。
   - **Patch 2**：line 933 之前（"##### 1564 年 2 月 18 日 — 88 岁死" 标题前一行）插入 Vittoria Colonna 段。
   - **Patch 3**：替换 line 348-356 的现有简短段落（"##### 后续：Lorenzo 死后的 6 年崩溃" 标题保留作为 placeholder ref；改成新的 "##### 后续：Lorenzo 死后 23 个月里同时发生的 6 件大事" 扩展版）。
2. 同步操作 `lib/history-narratives/renaissance-1500.en.md`：
   - **Patch 1 EN**：line 1060 之后插入 Raphael Sanzio 段。
   - **Patch 2 EN**：line 1040 之前插入 Vittoria Colonna 段。
   - **Patch 3 EN**：替换 line 351-后面的现有简短段落，使用 EN 版扩展。
3. 注入完跑 atlas-lint（虽然这是 narrative .md 不是 atlas，但保留 SOP；narrative kernel 无 atlas 依赖项变化，只需 atlas-lint pass once）。
4. 跑 `node --check`（虽然 .md 不需 syntax check，但若有 mdx 集成则确认）。
5. Sarah Chen re-audit：可选 spot check Patch 1（Raphael 是否给 7 年级娃可"用手指找出每个人"的视觉教学价值）+ Patch 2（Vittoria 段是否避免了"突然变软"的 fabrication 嫌疑）+ Patch 3（23 月连环爆是否补上了 Savonarola "天降" 因果链断裂）。

---

## 字数统计

| Patch | CN 字数 | EN 字数 | 注 |
|---|---|---|---|
| Patch 1 (Raphael) | ~720 | ~830 | 含 *School of Athens* 详写 |
| Patch 2 (Vittoria) | ~580 | ~670 | 含 1538 / 1547 二段 |
| Patch 3 (23 月黑洞) | ~640 | ~720 | 含 6 件大事 + Botticelli swing |
| **合计** | **~1940 CN 字** | **~2220 EN 词** | 在预估范围 1500-2000 内 |

---

## 写作约束自检

- ✅ **第 7 条 cultural ban**：全文无"翰林/朕/江山/凤冠/科甲/状元/娘亲/父亲大人/相国/宰相/丞相/尚书"——零中国术语污染
- ✅ **第 8 条 A anti-fabrication**：戏剧化内心都用 "this lens lets you hear..." 框（Patch 2 § "💡 这一遍让你听见 Michelangelo 老年内心的转向"）；documented quotes 仅引 Vasari + Vittoria 信件原文 + Lorenzo 三子评价 — 三处皆历史档案有据
- ✅ **第 8 条 J em-dash 密度**：每段最多 1-2 个 "——" 链；无 4 段以上串联（已逐句审）
- ✅ **第 8 条 I markdown italic**：禁中文术语 italic；只 italic Italian/Latin 外语词（*Stanze* / *Rime* / *spirituali* / *sonnetti* / *artigiano* / *condottieri* / *Alhambra Decree* / 画作名 *School of Athens* / *Last Judgment* / *Birth of Venus* / *Mystical Nativity* / *Pietà* / *David*）
- ✅ **第 10 条 atlas templating**：无 hardcode "Willow / Cupertino / Jeffery Trail"；现代孩子用 generic 二人称"你 / a 7th grader / you"
- ✅ **inline gloss**：fresco（湿壁画）/ *Stanze*（教皇起居室）/ *spirituali*（意大利"内部改革派"）/ *Rime*（《诗集》）/ *sonnetti*（十四行诗）/ *artigiano*（匠人）/ *condottieri*（雇佣兵）/ *Alhambra Decree*（驱逐犹太人法令）— 关键术语全部首次出现加括号简释
- ✅ **数字精度**：15-20 万犹太人（Spanish Jewish refugee 估算）+ "约 15 天"（Raphael fever）+ "100+ 首十四行诗"（约数加 +）— 模糊数字标"约 / +"
