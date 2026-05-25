// ─── 同伴笔记本架构 v1 · Constitutional Convention 1787 ─────────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（只回忆+提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Madison 设计者 / Roger Sherman 调停者 / Mum Bett 受影响方三条线）
//   - notebook 提供考点闭环（Federalist 10/51、三权分立+制衡、Great Compromise、3/5 妥协、
//     Bill of Rights、联邦制 vs 邦联条例缺陷、Madison 角色 — 补完 AP Gov/APUSH 课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - APUSH Period 3 (1754-1800)：KC-3.2.II（宪法/联邦制/分权辩论）
//   - AP US Government & Politics — Foundational Documents：U.S. Constitution / Federalist 10 / Federalist 51
//   - California HSS Grade 8.2（建国与宪法）
//
// 事实地基：对账 constitutional-convention-1787-factledger.md
//   - 人口占比统一用"约六分之一 / 约 18%"（账本 #21：1790 census 17.8%，非五分之一）
//   - Federalist 54 措辞已收紧（账本 #22：Madison 借虚拟"南方代言人"之口）
//   - "最古老的成文国家宪法"保留"国家"限定（账本 #23）
//
// schemaVersion: 1 · notebookVersion: constitutional-convention-1787-v1

export var notebook = {
  topicId: 'constitutional-convention-1787',
  topicNameCn: '费城制宪 1787',
  topicNameEn: 'The Constitutional Convention 1787',
  schemaVersion: 1,
  companion: {
    nameCn: '小薇',
    nameEn: 'Xiaowei',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小薇预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天老师说我们要学 1787 年的费城制宪（Constitutional Convention）。
她说这是 APUSH 和 AP Gov 两门课的"地基"——AP Gov 还会逐字考几份文件。

她给了一张纸，上面写着这些名字：

James Madison（麦迪逊）、Roger Sherman（谢尔曼）、
Mum Bett / Elizabeth Freeman（弗里曼）、George Washington（华盛顿）

还有一串词：Great Compromise（大妥协）、Three-Fifths Compromise（3/5 妥协）、
separation of powers（三权分立）、checks and balances（制衡）、
federalism（联邦制）、Bill of Rights（权利法案）、Federalist 10 / 51。

我先记下来，等下读三个故事——Madison（写宪法的人）、Sherman（中间斡旋的人）、
Mum Bett（被这部宪法挡在门外的人）——读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页："这部宪法不是天才一拍脑袋写出来的，
是一屋子互不信任的人，一笔一笔妥协出来的。读它，要同时看见它的天才和它的污点。"`,
    en: `Today my teacher said we're learning the 1787 Constitutional Convention in Philadelphia.
She said it's the "foundation" of two courses — APUSH and AP Gov — and AP Gov even
tests several of these documents word for word.

She gave us a sheet with these names:

James Madison, Roger Sherman,
Mum Bett / Elizabeth Freeman, George Washington

Plus a string of terms: Great Compromise, Three-Fifths Compromise,
separation of powers, checks and balances, federalism, Bill of Rights,
Federalist 10 / 51.

Let me write these down. After I read the three stories — Madison (who wrote the
Constitution), Sherman (who brokered it), and Mum Bett (whom the Constitution shut out) —
I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "This Constitution
wasn't written by one genius in a flash. It was negotiated, clause by clause, out of
a room full of people who didn't trust each other. To read it, you have to see its
genius and its stain at the same time."`,
    keyTerms: [
      { cn: '制宪会议', en: 'Constitutional Convention' },
      { cn: '大妥协 / 康涅狄格妥协', en: 'Great Compromise / Connecticut Compromise' },
      { cn: '3/5 妥协', en: 'Three-Fifths Compromise' },
      { cn: '三权分立', en: 'separation of powers' },
      { cn: '制衡', en: 'checks and balances' },
      { cn: '联邦制', en: 'federalism' },
      { cn: '两院制', en: 'bicameral legislature' },
      { cn: '联邦派 / 反联邦派', en: 'Federalist / Anti-Federalist' },
      { cn: '权利法案', en: 'Bill of Rights' },
      { cn: '派系', en: 'faction' },
      { cn: '正当程序', en: 'due process' },
      { cn: '批准', en: 'ratification' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '詹姆斯·麦迪逊',
        nameEn: 'James Madison',
        ipa: '/ˈdʒeɪmz ˈmædɪsən/',
        roleCn: '"宪法之父"，弗吉尼亚方案与 Federalist 10/51 作者，蓄奴庄园主兼 3/5 妥协技术设计者',
        roleEn: '"Father of the Constitution," author of the Virginia Plan and Federalist 10/51; enslaver and technical designer of the Three-Fifths Compromise',
        mustKnow: true,
        audioKey: 'james-madison',
      },
      {
        nameCn: '罗杰·谢尔曼',
        nameEn: 'Roger Sherman',
        ipa: '/ˈrɒdʒər ˈʃɜːrmən/',
        roleCn: '康涅狄格鞋匠出身的调停者，大妥协的提出者，唯一签全四份建国文件的人',
        roleEn: 'Connecticut shoemaker-turned-mediator, author of the Great Compromise, only person to sign all four founding documents',
        mustKnow: true,
        audioKey: 'roger-sherman',
      },
      {
        nameCn: 'Mum Bett / 伊丽莎白·弗里曼',
        nameEn: 'Mum Bett / Elizabeth Freeman',
        ipa: '/mʌm bɛt/ /ɪˈlɪzəbəθ ˈfriːmən/',
        roleCn: '被奴役女性，1781 年用 1780 马萨诸塞宪法"生而自由平等"打赢自由诉讼',
        roleEn: 'Enslaved woman who won her freedom in 1781 using the 1780 Massachusetts constitution\'s "born free and equal" clause',
        mustKnow: true,
        audioKey: 'mum-bett-elizabeth-freeman',
      },
      {
        nameCn: '乔治·华盛顿',
        nameEn: 'George Washington',
        ipa: '/dʒɔːrdʒ ˈwɒʃɪŋtən/',
        roleCn: '制宪会议主席，几乎不发言，但他的在场就是会议的信用背书',
        roleEn: 'President of the Convention, who barely spoke, but whose presence lent the meeting its credibility',
        mustKnow: true,
        audioKey: 'george-washington',
      },
      {
        nameCn: '亚历山大·汉密尔顿',
        nameEn: 'Alexander Hamilton',
        ipa: '/ˌæɡˈzændər ˈhæmɪltən/',
        roleCn: '与 Madison、Jay 合写《联邦党人文集》，鼓吹批准宪法、主张强中央',
        roleEn: 'Co-author of The Federalist Papers with Madison and Jay; argued for ratification and a strong central government',
        mustKnow: true,
        audioKey: 'alexander-hamilton',
      },
      {
        nameCn: '乔治·梅森',
        nameEn: 'George Mason',
        ipa: '/dʒɔːrdʒ ˈmeɪsən/',
        roleCn: '弗吉尼亚代表，因宪法缺少保护个人权利的清单而拒签——他的反对间接催生了权利法案',
        roleEn: 'Virginia delegate who refused to sign because the Constitution lacked a list protecting individual rights; his objection helped force the Bill of Rights',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '埃德蒙·伦道夫',
        nameEn: 'Edmund Randolph',
        ipa: '/ˈɛdmənd ˈrændɒlf/',
        roleCn: '弗吉尼亚代表，1787 年 5 月 29 日代 Madison 念出弗吉尼亚方案',
        roleEn: 'Virginia delegate who read the Virginia Plan aloud for Madison on May 29, 1787',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '西奥多·塞奇威克',
        nameEn: 'Theodore Sedgwick',
        ipa: '/ˈθiːədɔːr ˈsɛdʒwɪk/',
        roleCn: 'Mum Bett 的律师，在 Brom and Bett v. Ashley 案中论证奴隶制在马萨诸塞非法',
        roleEn: 'Mum Bett\'s lawyer, who argued in Brom and Bett v. Ashley that slavery was unlawful in Massachusetts',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'articles-of-confederation-weakness',
      termCn: '邦联条例的缺陷',
      termEn: 'Weaknesses of the Articles of Confederation',
      standardRef: ['AP US Gov — Constitution / federalism', 'APUSH KC-3.2.II', 'CA HSS 8.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'madison',
        nodeIds: ['mad-n2'],
        xiaoweiNote: {
          cn: `这个我读过！在 Madison 那一遍第 2 节，他讲为什么大家这么慌：
独立后 13 个州各管各的，《邦联条例》（Articles of Confederation, 1781）
下的中央政府弱得像没有。

我把"四个不能"背成一个口诀：
**不能征税、不能管贸易、没有军队、改规矩要 13 州全票**（一票否决就卡死）。

压垮骆驼的最后一根稻草是 1786-87 年的 **Shays' Rebellion（谢司起义）**——
负债农民拿枪抗税，中央政府连镇压都做不到。这就是制宪会议的直接导火索。

考点关键句：邦联条例 = 弱中央 = 通向 1787 强中央宪法的"反面教材"。
AP 爱考"从邦联条例到宪法，什么变了"（征税权、商业管理权、行政首脑都是新加的）。`,
          en: `I read this! In Madison's Lens Node 2, he explains why everyone was so afraid:
after independence the 13 states each went their own way, and the central government
under the Articles of Confederation (1781) was weak to the point of nonexistence.

I memorize the "four can'ts" as a mnemonic:
**can't tax, can't regulate trade, no army, and changing a rule needs all 13 states**
(one veto freezes everything).

The last straw was **Shays' Rebellion** (1786-87) — indebted farmers took up guns
against taxes, and the central government couldn't even put it down. That's the
direct trigger for the Convention.

Key exam sentence: Articles of Confederation = weak center = the "what not to do"
that led to the strong 1787 Constitution. AP loves asking "what changed from the
Articles to the Constitution" (the power to tax, regulate commerce, and an executive
head were all new).`,
        },
      },
    },

    {
      id: 'great-compromise',
      termCn: '大妥协 / 康涅狄格妥协',
      termEn: 'Great Compromise (Connecticut Compromise)',
      standardRef: ['AP US Gov — Constitution', 'APUSH KC-3.2.II', 'CA HSS 8.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'roger-sherman',
        nodeIds: ['rs-n4', 'rs-n5', 'rs-n6'],
        xiaoweiNote: {
          cn: `Sherman 那一遍整条线就是这个。大州（弗吉尼亚、宾州）要按人口分席位，
小州（新泽西、特拉华）要每州票数相等，吵到要散伙。
Sherman 和 Oliver Ellsworth 提出折中：国会分两院。

我把它压成一句必背：
**House（众议院）按人口分席位 → 大州赢；Senate（参议院）每州 2 票 → 小州赢。**
这就叫 **bicameral（两院制）**。

考点关键句：1787 年 7 月 16 日，大妥协以 **5 比 4**（只差一票）通过——
这是全 topic 最高频考点之一。老师说州统考几乎年年考"两院怎么分席位"。

记忆锚：House = 人头（population），Senate = 州（state），各州一律 2 个。
今天美国国会还是这套——直接是 1787 年那个折中的"后代"。`,
          en: `Sherman's whole Lens is about this. The large states (Virginia, Pennsylvania)
wanted seats by population; the small states (New Jersey, Delaware) wanted equal votes
per state, and it nearly broke up the room. Sherman and Oliver Ellsworth proposed a
middle path: split Congress into two houses.

I compress it into one must-memorize line:
**House by population → large states win; Senate 2 votes per state → small states win.**
This is **bicameral**.

Key exam sentence: on July 16, 1787, the Great Compromise passed **5 to 4** (by one vote) —
one of the highest-frequency points in this whole topic. Teacher said the state exam asks
"how the two houses apportion seats" almost every year.

Memory anchor: House = heads (population), Senate = states (2 each). Today's Congress
still works this way — a direct descendant of that 1787 compromise.`,
        },
      },
    },

    {
      id: 'three-fifths-compromise',
      termCn: '3/5 妥协',
      termEn: 'Three-Fifths Compromise',
      standardRef: ['AP US Gov — Constitution', 'APUSH KC-3.2.II', 'CA HSS 8.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'mum-bett-receiving-end',
        nodeIds: ['mb-n7', 'mad-n6', 'rs-n7'],
        xiaoweiNote: {
          cn: `三个视角都讲到它，但 Mum Bett 那一遍第 7 节最戳人。
下院按人口分席位，那"人口"算不算被奴役者？蓄奴州想算（多分席位），北方州不肯。
妥协结果：每个被奴役的人，算 **3/5 个人**计入人口和税收。

这里有一个老师反复纠正的**误解陷阱**：
❌ "3/5 妥协是把奴隶当 3/5 个人对待"
✅ 它是一笔**席位 + 税收的算术交易**——目的是给蓄奴州在国会和总统选举人团里多分权重。

考点关键句：3/5 妥协给了南方几十年**超额政治权重**，
是通向内战的**结构性导火索之一**（注意"之一"，别写成单一原因）。

我自己的对照锚（最难忘）：1781 年 Mum Bett 在法庭上把"人"这个字整个要了回来；
6 年后费城那部宪法，把跟她一样的人打了"六折"算成 3/5。同一个"人"字，两个方向。`,
          en: `All three lenses touch it, but Mum Bett's Lens Node 7 hits hardest.
The lower house apportions seats by population — does that "population" include enslaved
people? Slave states wanted them counted (more seats); Northern states refused. The
compromise: each enslaved person counts as **three-fifths of a person** for population
and taxation.

Here's a **misconception trap** my teacher kept correcting:
❌ "The Three-Fifths Compromise treated a slave as 3/5 of a person."
✅ It was an **arithmetic deal over seats and taxes** — designed to give slave states
more weight in Congress and the Electoral College.

Key exam sentence: the Three-Fifths Compromise gave the South decades of **excess
political weight** and was **one of the structural fuses** leading to the Civil War
(note "one of" — don't write it as the single cause).

My favorite contrast anchor: in 1781 Mum Bett claimed the whole of the word "person"
back in court; six years later the Philadelphia Constitution marked people like her
down to three-fifths. Same word "person," two opposite directions.`,
        },
      },
    },

    {
      id: 'separation-of-powers-checks-balances',
      termCn: '三权分立与制衡',
      termEn: 'Separation of Powers & Checks and Balances',
      standardRef: ['AP US Gov — Federalist 51', 'APUSH KC-3.2.II', 'CA HSS 8.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'madison', nodeId: 'mad-n3', context: 'Madison 备课读 Montesquieu，把"权力互相牵制"搬进 Virginia Plan' },
          { lens: 'madison', nodeId: 'mad-n8', context: 'Federalist 51「必须让野心去对抗野心」' },
        ],
      },
      standaloneText: {
        cn: `**三权分立（separation of powers）** + **制衡（checks and balances）**
是这部宪法的"骨架"，也是 AP Gov 逐字考的硬点。

**三权分立** = 政府权力分成三个独立分支：
- **立法（legislative）**：Congress（国会）—— 宪法 Article I
- **行政（executive）**：President（总统）—— Article II
- **司法（judicial）**：Supreme Court（最高法院）—— Article III

这套设计的思想源头是法国启蒙思想家 **Montesquieu（孟德斯鸠）**——
Madison 在会议前几个月读政体史时反复琢磨他那句"把权力分给不同的人，让他们互相牵制"。
（你跑过 enlightenment 那个 Topic 会认得孟德斯鸠这个名字。）

光"分开"还不够，还要 **制衡（checks and balances）**：
每个分支都有限制其他分支的工具，防止任何一支独大。例子——
- 总统可以否决（veto）国会的法案；国会可以 2/3 多数推翻否决（override）。
- 总统提名法官，参议院批准（confirm）。
- 最高法院可以裁定法律或行政行为违宪（judicial review）。

为什么这么设计？Madison 在 **Federalist No. 51** 里写下那句名言：
**"Ambition must be made to counteract ambition."（必须让野心去对抗野心。）**
他不相信当权者都是好人——与其指望好人，不如让各方的野心互相牵制。

🔗 故事连接：Madison 那一遍第 3 节讲他读 Montesquieu 把这套思想搬进 Virginia Plan；
第 8 节就是 Federalist 51 那句"野心对抗野心"的出处。`,
        en: `**Separation of powers** + **checks and balances** are the "skeleton" of this
Constitution, and a hard point AP Gov tests word for word.

**Separation of powers** = government power divided into three independent branches:
- **Legislative**: Congress — Constitution Article I
- **Executive**: the President — Article II
- **Judicial**: the Supreme Court — Article III

The intellectual source is the French Enlightenment thinker **Montesquieu** — Madison
turned over his line "split power among different hands so they check each other" while
reading the history of governments in the months before the Convention. (You'll recognize
Montesquieu's name if you ran the enlightenment topic.)

Dividing isn't enough; you also need **checks and balances**: each branch has tools to
restrain the others, so no one branch dominates. Examples —
- The President can veto a bill from Congress; Congress can override the veto with a 2/3 majority.
- The President nominates judges; the Senate confirms them.
- The Supreme Court can strike down a law or executive act as unconstitutional (judicial review).

Why design it this way? Madison wrote the famous line in **Federalist No. 51**:
**"Ambition must be made to counteract ambition."** He didn't trust the powerful to be
good people — rather than count on good people, let each side's ambition check the others.

🔗 Story link: Madison's Lens Node 3 shows him reading Montesquieu and carrying these
ideas into the Virginia Plan; Node 8 is the source of the Federalist 51 "ambition vs
ambition" line.`,
      },
      xiaoweiNote: {
        cn: `老师说这是 AP Gov **最高频**考点之一——Federalist 51 是 required document，逐字考。
我的记忆口诀：**L-E-J**（Legislative-Executive-Judicial）= 三权分立的"骨架"；
**checks and balances** = 三权之间的"筋"。骨架 + 筋 = 完整的设计。

还有一句必背的对应："美国宪法 = Montesquieu（三权分立）+ Federalist 51（用野心制衡野心）"。`,
        en: `Teacher said this is one of AP Gov's **highest-frequency** points — Federalist 51
is a required document, tested word for word. My mnemonic: **L-E-J** (Legislative-
Executive-Judicial) = the "skeleton" of separation of powers; **checks and balances** =
the "ligaments" between them. Skeleton + ligaments = the full design.

Another must-memorize mapping: "US Constitution = Montesquieu (separation of powers) +
Federalist 51 (ambition checks ambition)."`,
      },
    },

    {
      id: 'federalist-10',
      termCn: 'Federalist No. 10（派系与大共和国）',
      termEn: 'Federalist No. 10 (Factions & the Large Republic)',
      standardRef: ['AP US Gov — Federalist 10 (Foundational Document)', 'APUSH KC-3.2.II'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'madison', nodeId: 'mad-n8', context: 'Madison 与 Hamilton、Jay 合写 The Federalist Papers 鼓吹批准宪法' },
        ],
      },
      standaloneText: {
        cn: `**Federalist No. 10**（Madison 著，1787）是 AP Gov 的**必考 Foundational Document**，
故事里没单独展开，但它是整部宪法辩护的核心一篇，必须单独掌握。

它要解决的问题是 **faction（派系）**：
Madison 给 faction 下的定义 = 一群被某种共同利益或激情驱动、且这种利益**损害他人权利或公共利益**的人。

他的论证链（AP 逐字考这条逻辑）：
1. **派系不可消灭**——除非消灭自由（faction 的根源），但那比病更糟；自由是 faction 的"空气"。
2. 既然不能消灭，就要**控制它的影响**。
3. 怎么控制？**建一个大共和国（large republic）**——
   - 国家越大，利益越多元，没有任何一个派系能轻易凑成多数去压迫别人。
   - 用**代议制（representation）**而非直接民主——选出的代表能"过滤"民众一时的激情。

这是 Madison 反驳"共和国只能小"这一传统观点的关键创新：
**正因为美国大、派系多，它反而更安全。**

🔗 故事连接：Madison 那一遍第 8 节讲他和 Hamilton、Jay 合写 The Federalist Papers
（联邦党人文集）来说服各州批准宪法——Federalist 10 和 51 都是其中最有名的两篇。

⚠️ 别搞混：**Federalist 10 = 派系 + 大共和国**；**Federalist 51 = 三权分立 + 制衡**。
两篇都是 Madison 写的，AP 经常同时考、要求你区分。`,
        en: `**Federalist No. 10** (by Madison, 1787) is a **required Foundational Document**
for AP Gov. The story doesn't unpack it on its own, but it's the core essay defending the
whole Constitution, so master it separately.

The problem it solves is **faction**:
Madison defines a faction = a group driven by a common interest or passion whose interest
**harms the rights of others or the public good**.

His argument chain (AP tests this logic word for word):
1. **Factions can't be eliminated** — not without destroying liberty (their cause), and
   that's worse than the disease; liberty is the "air" factions need.
2. Since you can't remove them, you must **control their effects**.
3. How? Build a **large republic** —
   - The bigger the nation, the more diverse the interests, so no single faction can
     easily form a majority to oppress others.
   - Use **representation** (not direct democracy) — elected representatives can "filter"
     the people's momentary passions.

This is Madison's key innovation against the old view that "a republic must be small":
**because America is large and full of factions, it is actually safer.**

🔗 Story link: Madison's Lens Node 8 shows him co-writing The Federalist Papers with
Hamilton and Jay to persuade the states to ratify — Federalist 10 and 51 are its two
most famous essays.

⚠️ Don't mix them up: **Federalist 10 = factions + large republic**; **Federalist 51 =
separation of powers + checks and balances**. Both are Madison's, and AP often tests them
together and asks you to distinguish them.`,
      },
      xiaoweiNote: {
        cn: `这篇我一开始最头疼，因为故事里没演。老师说 AP Gov 几乎每年都考 Federalist 10，
最常考的就是"Madison 怎么处理 faction"——答案不是"消灭"，是"用大共和国稀释 + 代议制过滤"。
我的口诀：**10 = ten = tame the factions（驯服派系）**，靠"大"和"代表"。`,
        en: `This one stumped me at first because the story doesn't act it out. Teacher said
AP Gov tests Federalist 10 almost every year, most often "how Madison handles faction" —
the answer isn't "eliminate," it's "dilute with a large republic + filter through
representation." My mnemonic: **10 = ten = tame the factions**, via "large" and
"representatives."`,
      },
    },

    {
      id: 'federalist-vs-antifederalist-ratification',
      termCn: '批准之争与权利法案',
      termEn: 'Ratification Debate & the Bill of Rights',
      standardRef: ['AP US Gov — Constitution / Bill of Rights', 'APUSH KC-3.2.II', 'CA HSS 8.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'madison',
        nodeIds: ['mad-n8', 'mad-n9'],
        xiaoweiNote: {
          cn: `Madison 那一遍第 8、9 节讲到了。签完字（1787.9.17，55 人里只有 39 人签）不算完，
文件要送回 13 个州各自表决批不批准——这叫 **ratification（批准）**。

我把两派的对立背成一张对照表：
- **联邦派（Federalist）**：支持新宪法，要强中央。Madison、Hamilton、Jay 写 Federalist Papers 鼓吹。
- **反联邦派（Anti-Federalist）**：反对，怕强中央像当年英国国王一样吞掉个人自由。

考点关键句：反联邦派的施压**逼出了 Bill of Rights（权利法案）**——
不是国父原本就想好的善意，是为换批准票答应加的。
**1791 年**前 10 条修正案生效，保护言论、信仰、不被任意搜查、陪审团审判、due process（正当程序）。

老师强调一个常见误解：❌"权利法案是国父一开始就设计好的" → ✅它是反联邦派逼出来的。
（故事里 Madison 自己也承认："保护权利的那 10 条，不是我们的善意，是反对者逼出来的。"）`,
          en: `Madison's Lens Nodes 8 and 9 cover this. Signing (Sept 17, 1787 — only 39 of
55 signed) wasn't the end; the document went back to the 13 states to vote on approval —
this is **ratification**.

I memorize the two camps as a compare table:
- **Federalists**: supported the new Constitution, wanted a strong center. Madison,
  Hamilton, and Jay wrote the Federalist Papers to promote it.
- **Anti-Federalists**: opposed it, fearing a strong center would, like the British king
  before it, swallow individual liberty.

Key exam sentence: Anti-Federalist pressure **forced out the Bill of Rights** — not
goodwill the founders planned, but a promise to add amendments in exchange for ratification
votes. **In 1791** the first ten amendments took effect, protecting speech, faith, freedom
from arbitrary search, trial by jury, and due process.

Teacher flagged a common misconception: ❌ "the Bill of Rights was designed by the founders
from the start" → ✅ it was forced out by the Anti-Federalists. (In the story Madison even
admits it: "Those ten clauses weren't our goodwill — our opponents forced them out of us.")`,
        },
      },
    },

    {
      id: 'slavery-clauses-and-omission',
      termCn: '宪法里的奴隶制条款与"回避的词"',
      termEn: 'Slavery Clauses & the Word the Constitution Avoided',
      standardRef: ['AP US Gov — Constitution', 'APUSH KC-3.2.II', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'madison',
        nodeIds: ['mad-n7'],
        xiaoweiNote: {
          cn: `Madison 那一遍第 7 节专门讲奴隶制的妥协，不止 3/5 这一笔，一共**三处条款**：
1. **3/5 妥协**（席位 + 税收的算术，已单独一张卡）。
2. **奴隶贸易条款（1808 条款）**：宪法规定 1808 年之前，国会不准禁止跨大西洋奴隶贸易——
   等于给蓄奴州又上了 20 年保险。
3. **逃奴条款（Fugitive Slave Clause）**：逃到自由州的被奴役者必须被送回原主。

考点关键句（DBQ 高频）：整部宪法正文里，"**slave / slavery**"这两个词
**一次都没出现**——用"other persons""such persons"绕开。
故事里 Madison 那句点睛我记下来了："回避一个词，本身就是一种供认。"

为什么 DBQ 爱用这条？因为它逼你分析"理念（人人有不可剥夺的权利）vs 实践（三处条款保护奴隶制）"
之间的张力——这正是 AP 评分要的 complexity（复杂性）。`,
          en: `Madison's Lens Node 7 is specifically about the slavery compromises — not just
three-fifths, but **three clauses** total:
1. **Three-Fifths Compromise** (the seats + taxes arithmetic — its own card).
2. **Slave-trade clause (the 1808 clause)**: the Constitution barred Congress from banning
   the transatlantic slave trade before 1808 — another 20 years of insurance for the slave states.
3. **Fugitive Slave Clause**: an enslaved person who fled to a free state had to be returned
   to the owner.

Key exam sentence (high-frequency DBQ): nowhere in the body of the Constitution do the
words "**slave / slavery**" appear — **not once**; it works around them with "other persons"
and "such persons." I wrote down Madison's clinching line from the story: "Avoiding a word
is itself a kind of confession."

Why do DBQs love this? Because it forces you to analyze the tension between idea (people have
unalienable rights) and practice (three clauses protecting slavery) — exactly the complexity
AP scoring rewards.`,
        },
      },
    },

    {
      id: 'madison-father-of-constitution',
      termCn: 'Madison 的双面角色',
      termEn: 'Madison\'s Two-Faced Role',
      standardRef: ['AP US Gov — Foundational Documents', 'APUSH KC-3.2.II', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'madison',
        nodeIds: ['mad-n1', 'mad-n10'],
        xiaoweiNote: {
          cn: `Madison 那一遍整条线就是他，第 10 节的 synthesis 把他的"双面"说得最清楚。
为什么单列一张卡？因为 AP 考他不只考"做了什么"，更考"怎么评价同一个人身上的天才与污点"。

**为什么叫"宪法之父"（Father of the Constitution）**：
- 会前几个月读遍政体史，到费城口袋里就装着 **Virginia Plan（弗吉尼亚方案）**——
  三权分立 + 强中央 + 按人口分两院席位的蓝本。
- 坐前排逐字记笔记——今天我们知道屋里发生了什么，主要靠他这本笔记。
- 写 **Federalist 10 和 51**，为整部宪法做理论辩护。

**同一个 Madison 的另一面**：
- 一辈子住弗吉尼亚 Montpelier 种植园，靠 100 多个被奴役者维生。
- 是把 3/5 写进宪法的技术操盘手之一（Virginia Plan 里已有 3/5 雏形）。
- 在 **Federalist 54** 里为 3/5 妥协作了辩护——不过他是借一位假想的"南方代言人"之口论证
  （奴隶"兼具财产与人身"），史学界对他是否真心仍有争论。

考点关键句：建国天才与制度性暴力的技术操盘手，**是同一个人**——
这不是"优点 + 缺点"，是同一套设计的两面。这正是 AP DBQ 要的"既不洗白也不全盘否定"的中立分析。`,
          en: `Madison's whole Lens is about him, and the Node 10 synthesis lays out his "two
faces" most clearly. Why a separate card? Because AP tests him not just on "what he did" but
on "how to judge the genius and the stain in the same person."

**Why he's called the "Father of the Constitution":**
- Spent months before the Convention reading the history of governments, arriving in
  Philadelphia with the **Virginia Plan** in his pocket — the blueprint of separation of
  powers + strong center + two houses apportioned by population.
- Sat in the front row taking word-for-word notes — most of what we know about that room
  comes from his notebook.
- Wrote **Federalist 10 and 51**, the theoretical defense of the whole Constitution.

**The other side of the same Madison:**
- Lived his whole life at Montpelier in Virginia, a plantation worked by more than a
  hundred enslaved people.
- Was one of the technical hands who wrote three-fifths into the Constitution (already
  sketched in the Virginia Plan).
- Defended the Three-Fifths Compromise in **Federalist 54** — though he argued through an
  imagined "Southern spokesman" (that the enslaved were "both property and persons"), and
  historians still debate how sincere he was.

Key exam sentence: the genius of the founding and the technical hand of institutional
violence are **the same man** — not "strengths plus weaknesses," but two faces of one
design. That's exactly the neutral, "neither whitewash nor wholesale condemnation" analysis
AP DBQ wants.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1787 年那部宪法开篇喊"We the People（我们人民）"，又写"所有人……"，
可它同一口气，用三处条款保护奴隶制，还把约六分之一的人（被奴役者）算成 3/5。

你觉得这部宪法应该被看成"一个谎"，还是"一张还没兑现的支票"？
用至少两条具体证据支持你的判断。`,
      en: `The 1787 Constitution opens crying "We the People" and writes "all..." —
yet in the same breath it protected slavery with three clauses and counted about a sixth
of the people (the enslaved) as three-fifths.

Should this Constitution be seen as "a lie," or as "a check not yet cashed"? Support your
judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "谎"这边的证据：3/5 妥协、1808 奴隶贸易条款、逃奴条款、正文不敢写"slave"。
- "支票"这边的证据：1780 马萨诸塞宪法的"生而自由"被 Mum Bett 拿去打赢官司；
  内战后宪法加了废奴和"equal protection（法律面前人人平等）"修正案。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**,
not which side you pick.
- Evidence for "a lie": the Three-Fifths Compromise, the 1808 slave-trade clause, the
  Fugitive Slave Clause, the refusal to write "slave" in the text.
- Evidence for "a check": the 1780 Massachusetts "born free" clause that Mum Bett used to
  win her suit; the post-Civil War amendments that abolished slavery and added "equal
  protection of the laws."
High-scoring move: acknowledge both sides stand, then explain why you lean one way —
that's complexity.`,
      conceptsActivated: ['three-fifths-compromise', 'slavery-clauses-and-omission'],
    },
    {
      id: 'q2',
      cn: `1787 年 7 月 16 日，大妥协以 5 比 4 通过——只差一票。它让会议没散，
保住了国家；可同一套妥协逻辑，也帮着把不在谈判桌上的被奴役者写成了 3/5。

如果你是 AP 老师，要出一道题考"妥协是建国的智慧，还是对弱者的牺牲"，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `On July 16, 1787, the Great Compromise passed 5 to 4 — by one vote. It kept
the Convention from collapsing and saved the country; yet the same logic of compromise also
helped write the enslaved, who weren't at the table, down as three-fifths.

If you were an AP teacher writing a question on "is compromise the wisdom of the founding,
or the sacrifice of the powerless," how would you phrase it? Write your question and explain
what it's meant to make students see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
可以从 Sherman 的角度切入——他自己在故事里说："我以为我在平衡各方，可被算成 3/5 的那群人，
从来没被请进屋。"这句话点出妥协的盲区：**谈判桌上少了最该到场的一方**。
你的题目可以让学生比较"大妥协（大州 vs 小州，两边都在场）"和"3/5 妥协（被奴役者不在场）"——
为什么前者常被夸"建国智慧"，后者却是污点？差别在哪？`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not pick one.
You can come at it through Sherman — in the story he says: "I thought I was balancing all
sides, but the people counted as three-fifths were never invited into the room." That line
names the blind spot of compromise: **the table was missing the side that most needed to be
there**. Your question could have students compare "the Great Compromise (large vs small
states, both present)" with "the Three-Fifths Compromise (the enslaved absent)" — why is the
former praised as "founding wisdom" while the latter is a stain? Where's the difference?`,
      conceptsActivated: ['great-compromise', 'three-fifths-compromise', 'madison-father-of-constitution'],
    },
    {
      id: 'q3',
      cn: `Madison 在 Federalist 51 写"必须让野心去对抗野心"，设计了三权分立和制衡，
说他不指望当权者是好人，只指望他们互相牵制。

你同意"与其指望好人当权，不如设计制度让坏人也作不了恶"这个思路吗？
这是聪明的现实主义，还是对人性的悲观？用宪法里的一个具体制衡机制来支持你的看法。`,
      en: `In Federalist 51 Madison wrote "ambition must be made to counteract
ambition," designing separation of powers and checks and balances. He said he didn't count
on the powerful being good people, only on them checking each other.

Do you agree with the idea "rather than count on good people in power, design institutions
so even bad people can't do harm"? Is this clever realism, or pessimism about human nature?
Support your view with one specific check-and-balance mechanism from the Constitution.`,
      hintCn: `提示：先把 Federalist 51 和 Federalist 10 分清楚——
51 = 三权分立 + 制衡（这题问的）；10 = 派系 + 大共和国（别写串了）。
具体制衡机制可以举：总统否决 vs 国会 2/3 推翻、参议院批准总统提名的法官、最高法院 judicial review。
进阶思考：今天的学校、家庭、社团里，有没有"靠规则防止滥权"而不是"靠某个人品德好"的设计？
你觉得哪种更靠得住？AP 看的是你能不能用一个真实机制把抽象的论点"钉"在证据上。`,
      hintEn: `Hint: first keep Federalist 51 and Federalist 10 straight —
51 = separation of powers + checks and balances (this question); 10 = factions + large
republic (don't mix them). For a specific mechanism, try: the presidential veto vs. the
2/3 congressional override, the Senate confirming the President's judicial nominees, or the
Supreme Court's judicial review. Going deeper: in your school, family, or clubs today, is
there a design that "uses rules to prevent abuse of power" rather than "relying on one
person's good character"? Which do you trust more? AP wants you to "pin" the abstract claim
to evidence with one real mechanism.`,
      conceptsActivated: ['separation-of-powers-checks-balances', 'federalist-10'],
    },
  ],
};

export default notebook;
