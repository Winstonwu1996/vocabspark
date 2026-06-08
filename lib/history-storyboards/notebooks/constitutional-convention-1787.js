// ─── 同伴笔记本架构 v1 · Constitutional Convention 1787 ─────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
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
    nameCn: '小 U',
    nameEn: 'Xiao U',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小 U 的预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天老师说我们要学 1787 年的费城制宪（Constitutional Convention，就是那群人关在费城一间锁着窗的屋子里写宪法的那件事）。
她说这是 APUSH 和 AP Gov 两门课的"地基"。AP Gov 还会**逐字**考几份文件，不能只是"大概知道"。

她给了一张纸，上面写着这些名字：

James Madison（麦迪逊）、Roger Sherman（谢尔曼）、
Mum Bett / Elizabeth Freeman（弗里曼）、George Washington（华盛顿）

还有一串词：Great Compromise（大妥协）、Three-Fifths Compromise（3/5 妥协）、
separation of powers（三权分立）、checks and balances（制衡）、
federalism（联邦制）、Bill of Rights（权利法案）、Federalist 10 / 51。

我先把这些记下来。等下读三个故事——Madison（写宪法的人）、Sherman（中间斡旋的人）、
Mum Bett（被这部宪法挡在门外的人）——读完再回来对照这张单子，看我能不能解释每一条。

老师说了一句我抄在笔记本第一页："这部宪法不是天才一拍脑袋写出来的，
是一屋子互不信任的人，一笔一笔妥协出来的。读它，要同时看见它的天才和它的污点。"`,
    en: `Today my teacher said we're learning about the 1787 Constitutional Convention in Philadelphia — that's when a group of men locked themselves in a room with the windows nailed shut and wrote a constitution.
She said it's the "foundation" of two courses — APUSH and AP Gov. AP Gov even tests several of these documents word for word, so you really have to know them, not just sort of know them.

She gave us a sheet with these names:

James Madison, Roger Sherman,
Mum Bett / Elizabeth Freeman, George Washington

Plus a list of terms: Great Compromise, Three-Fifths Compromise,
separation of powers, checks and balances, federalism, Bill of Rights,
Federalist 10 / 51.

Let me write these down. After I read the three stories — Madison (who wrote the Constitution), Sherman (who brokered the deal), and Mum Bett (whom the Constitution shut out) — I'll come back and check whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "This Constitution wasn't written by one genius in a flash. It was negotiated, clause by clause, out of a room full of people who didn't trust each other. To read it, you have to see its genius and its stain at the same time."`,
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
      { cn: '选举人团', en: 'Electoral College' },
      { cn: '商业条款', en: 'Commerce Clause' },
      { cn: '必要且适当条款 / 弹性条款', en: 'Necessary and Proper Clause / Elastic Clause' },
      { cn: 'Brutus No. 1（反联邦党人文献）', en: 'Brutus No. 1 (Anti-Federalist Paper)' },
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
        mustKnow: true,
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

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'articles-of-confederation-weakness',
      termCn: '邦联条例的缺陷',
      termEn: 'Weaknesses of the Articles of Confederation',
      defCn: '《邦联条例》是独立战争后美国第一部"国家大法"（1781 年生效）。但它给中央政府的权力太少——不能收税、不能管贸易、没有军队、改一条规矩要 13 个州全都同意。这些缺陷直接逼出了 1787 年的制宪会议。',
      defEn: 'The Articles of Confederation was the first national rulebook the U.S. used after independence (took effect 1781). But it left the central government almost powerless — it couldn\'t collect taxes, couldn\'t regulate trade, had no army, and changing even one rule required all 13 states to agree. Those weaknesses directly triggered the 1787 Constitutional Convention.',
      standardRef: ['AP US Gov — Constitution / federalism', 'APUSH KC-3.2.II', 'CA HSS 8.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'madison',
        nodeIds: ['mad-n2'],
        xiaoweiNote: {
          cn: `这个我读过！Madison 那条故事线讲为什么大家这么慌：
独立后 13 个州各管各的，**《邦联条例》（Articles of Confederation, 1781）**下的中央政府弱得像没有。

我把"四个不能"背成口诀：
① 不能征税
② 不能管贸易
③ 没有军队
④ 改规矩要 13 州全票（一票否决就卡死）

压垮骆驼的最后一根稻草是 1786-87 年的 **Shays' Rebellion（谢司起义）**——负债农民拿枪抗税，中央政府连镇压都做不到。这就是制宪会议的直接导火索。

考点关键句：邦联条例 = 弱中央 = 通向 1787 强中央宪法的"反面教材"。
AP 爱考"从邦联条例到宪法，什么变了"——征税权、商业管理权、行政首脑都是新加的。`,
          en: `I read this! In Madison's story line, he explains why everyone was so scared:
after independence the 13 states each went their own way, and the central government
under the **Articles of Confederation (1781)** was weak to the point of nonexistence.

I memorize the "four can'ts":
① Can't tax.
② Can't regulate trade.
③ No army.
④ Changing a rule needs all 13 states to agree — one veto freezes everything.

The last straw was **Shays' Rebellion (1786-87)** — indebted farmers took up guns
against taxes, and the central government couldn't even put it down. That's the
direct trigger for the Convention.

Key exam sentence: Articles of Confederation = weak center = the "what not to do"
that led to the strong 1787 Constitution. AP loves asking "what changed from the
Articles to the Constitution" — the power to tax, regulate commerce, and an executive
head were all brand new.`,
        },
      },
    },

    {
      id: 'great-compromise',
      termCn: '大妥协 / 康涅狄格妥协',
      termEn: 'Great Compromise (Connecticut Compromise)',
      defCn: '大妥协（又叫康涅狄格妥协）是 1787 年 7 月 16 日通过的一个折中方案。大州想按人口分国会席位，小州要每州票数相等。Sherman 的解决方法：国会分成两院——众议院按人口分席位，参议院每州固定两票。两边都接受了，会议才没散。',
      defEn: 'The Great Compromise (also called the Connecticut Compromise) was a deal passed on July 16, 1787. Large states wanted seats in Congress based on population; small states wanted equal votes per state. Sherman\'s fix: split Congress into two houses — the House of Representatives by population, the Senate with exactly two votes per state. Both sides accepted it, and the Convention survived.',
      standardRef: ['AP US Gov — Constitution', 'APUSH KC-3.2.II', 'CA HSS 8.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'roger-sherman',
        nodeIds: ['rs-n4', 'rs-n5', 'rs-n6'],
        xiaoweiNote: {
          cn: `Sherman 整条故事线就是在讲这个。大州（弗吉尼亚、宾州）要按人口分席位，
小州（新泽西、特拉华）要每州票数相等，吵到要散伙。
Sherman 和 Oliver Ellsworth 提出折中：国会分两院。

必背一句话：
**众议院（House）按人口分席位 → 大州赢；参议院（Senate）每州 2 票 → 小州赢。**
这叫 **bicameral（两院制）**。

考点关键句：1787 年 7 月 16 日，大妥协以 **5 比 4**（只差一票）通过——这是整门课最高频考点之一。老师说州统考几乎年年考"两院怎么分席位"。

记忆锚：House = 人头（population），Senate = 州（state），各州一律 2 个。
今天美国国会还是这套——是 1787 年那个折中方案的"后代"。`,
          en: `Sherman's whole story line is about this. Large states (Virginia, Pennsylvania)
wanted seats by population; small states (New Jersey, Delaware) wanted equal votes
per state — they nearly walked out.
Sherman and Oliver Ellsworth proposed a middle path: split Congress into two houses.

One must-memorize line:
**House by population → large states win; Senate 2 votes per state → small states win.**
This is **bicameral** (two-chamber) legislature.

Key exam sentence: on July 16, 1787, the Great Compromise passed **5 to 4** — by just one vote.
It's one of the highest-frequency points in this whole topic. Teacher said the state exam asks
"how the two houses apportion seats" almost every year.

Memory anchor: House = heads (population), Senate = states (2 each, always). Today's Congress
still works this way — a direct descendant of that 1787 deal.`,
        },
      },
    },

    {
      id: 'three-fifths-compromise',
      termCn: '3/5 妥协',
      termEn: 'Three-Fifths Compromise',
      defCn: '3/5 妥协是 1787 年宪法里的一笔算术交易：众议院席位按人口分，那被奴役的人算不算人口？蓄奴州想算（多分席位），北方州不肯。结果：每个被奴役的人，算 3/5 个人计入人口和税收基数。这给蓄奴州带来了几十年的超额政治权重。',
      defEn: 'The Three-Fifths Compromise was a numbers deal inside the 1787 Constitution: House seats are based on population — so do enslaved people count? Slave states said yes (more seats for them); Northern states said no. The result: each enslaved person counts as three-fifths of a person for population and taxation. This gave slave states extra political weight in Congress and presidential elections for decades.',
      standardRef: ['AP US Gov — Constitution', 'APUSH KC-3.2.II', 'CA HSS 8.2'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'mum-bett-receiving-end',
        nodeIds: ['mb-n7', 'mad-n6', 'rs-n7'],
        xiaoweiNote: {
          cn: `三条故事线都讲到它，但 Mum Bett 那条线里最后一节最戳人。
众议院按人口分席位，那"人口"算不算被奴役者？蓄奴州想算（多分席位），北方州不肯。
妥协结果：每个被奴役的人，算 **3/5 个人**计入人口和税收。

老师反复纠正的**误解陷阱**：
- 误："3/5 妥协是把奴隶当 3/5 个人对待"
- 正：它是一笔**席位 + 税收的算术交易**——目的是给蓄奴州在国会和总统选举人团里多分权重。

考点关键句：3/5 妥协给了南方几十年**超额政治权重**，是通向内战的**结构性导火索之一**（注意"之一"，别写成单一原因）。

我自己最难忘的对照：1781 年 Mum Bett 在法庭上把"人"这个字整个要了回来；6 年后费城那部宪法，把跟她一样的人打了"六折"算成 3/5。同一个"人"字，两个方向。`,
          en: `All three story lines touch it, but the final part of Mum Bett's story hits hardest.
The lower house apportions seats by population — does that "population" include enslaved
people? Slave states wanted them counted (more seats); Northern states refused.
The deal: each enslaved person counts as **three-fifths of a person** for population and taxes.

A **misconception trap** my teacher kept correcting:
- Wrong: "The Three-Fifths Compromise treated an enslaved person as 3/5 of a human being."
- Right: It was an **arithmetic deal over seats and taxes** — designed to give slave states
  more weight in Congress and the Electoral College.

Key exam sentence: the Three-Fifths Compromise gave the South decades of **extra political weight**
and was **one of the structural causes** that led to the Civil War. Write "one of" — don't call it the single cause.

My favorite contrast: in 1781 Mum Bett claimed the whole of the word "person" back in court;
six years later the Philadelphia Constitution counted people like her as three-fifths. Same word "person," two opposite directions.`,
        },
      },
    },

    {
      id: 'separation-of-powers-checks-balances',
      termCn: '三权分立与制衡',
      termEn: 'Separation of Powers & Checks and Balances',
      defCn: '三权分立（separation of powers）= 政府权力分成三个独立分支：立法（国会写法律）、行政（总统执行）、司法（法院判案）。制衡（checks and balances）= 每个分支都有工具限制另外两个，防止任何一支独大。这是美国宪法最核心的骨架设计。',
      defEn: 'Separation of powers means government authority is split into three independent branches: legislative (Congress makes laws), executive (the President carries them out), and judicial (courts decide cases). Checks and balances means each branch has tools to limit the other two, so no single branch can dominate. Together these are the core skeleton of the U.S. Constitution.',
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

这套设计的思想来源是法国启蒙思想家 **Montesquieu（孟德斯鸠）**。
Madison 在会议前几个月读遍政体历史，反复琢磨孟德斯鸠这句话的意思：
"把权力分给不同的人，让他们互相牵制。"
（如果你学过启蒙运动，会认得孟德斯鸠这个名字。）

只"分开"还不够，还要 **制衡（checks and balances）**：
每个分支都有限制另外两个分支的工具，防止任何一支独大。举三个例子——
① 总统可以否决（veto）国会的法案；国会可以 2/3 多数推翻否决（override）。
② 总统提名法官，参议院批准（confirm）。
③ 最高法院可以裁定法律或行政行为违宪（judicial review，司法审查）。

为什么这么设计？Madison 在 **Federalist No. 51** 里写下那句名言：
**"Ambition must be made to counteract ambition."（必须让野心去对抗野心。）**
他不相信当权者都是好人。与其指望好人，不如让各方的野心互相牵制。

故事连接：Madison 那条故事线里，他读 Montesquieu 把这套思想搬进 Virginia Plan；
后来写 Federalist 51 就是把这句"野心对抗野心"讲给全国听。`,
        en: `**Separation of powers** + **checks and balances** are the "skeleton" of this
Constitution, and a hard point AP Gov tests word for word.

**Separation of powers** = government authority split into three independent branches:
- **Legislative**: Congress — Constitution Article I
- **Executive**: the President — Article II
- **Judicial**: the Supreme Court — Article III

The idea came from the French Enlightenment thinker **Montesquieu**.
In the months before the Convention, Madison read through the history of governments
and kept turning over Montesquieu's point: "Split power among different hands so they check each other."
(If you've studied the Enlightenment, you'll recognize the name.)

Just splitting isn't enough — you also need **checks and balances**:
each branch has tools to restrain the other two, so no one branch dominates.
Three examples:
① The President can veto a bill from Congress; Congress can override the veto with a 2/3 majority.
② The President nominates judges; the Senate confirms them.
③ The Supreme Court can strike down a law or executive action as unconstitutional — this is called **judicial review**.

Why design it this way? Madison wrote the famous line in **Federalist No. 51**:
**"Ambition must be made to counteract ambition."**
He didn't trust powerful people to be good. Instead of hoping for good leaders, let each side's ambition check the others.

In Madison's story line, he reads Montesquieu and carries these ideas into the Virginia Plan.
Later, writing Federalist 51 is how he explains "ambition vs. ambition" to the whole country.`,
      },
      xiaoweiNote: {
        cn: `老师说这是 AP Gov **最高频**考点之一——Federalist 51 是 required document，逐字考。

我的记忆口诀：**L-E-J**（Legislative-Executive-Judicial）= 三权分立的"骨架"；
**checks and balances** = 三权之间的"筋"。骨架 + 筋 = 完整的设计。

必背一句对应："美国宪法 = Montesquieu（三权分立）+ Federalist 51（用野心制衡野心）"。`,
        en: `Teacher said this is one of AP Gov's **highest-frequency** points — Federalist 51
is a required document, tested word for word.

My mnemonic: **L-E-J** (Legislative-Executive-Judicial) = the "skeleton" of separation of powers;
**checks and balances** = the "ligaments" between them. Skeleton + ligaments = the full design.

Must-memorize pairing: "U.S. Constitution = Montesquieu (separation of powers) +
Federalist 51 (ambition checks ambition)."`,
      },
    },

    {
      id: 'federalist-10',
      termCn: 'Federalist No. 10（派系与大共和国）',
      termEn: 'Federalist No. 10 (Factions & the Large Republic)',
      defCn: 'Federalist No. 10 是 Madison 1787 年写的一篇文章，是 AP Gov 的必考文件之一。核心问题：派系（faction，指一群为了自身利益损害别人的人）怎么办？Madison 的答案：派系消灭不了，但可以用大共和国稀释它——国家越大、利益越多样，没有一个派系能轻松凑成多数去压别人。',
      defEn: 'Federalist No. 10 is an essay Madison wrote in 1787 and is one of the required documents for AP Gov. The core question: what do we do about factions — groups of people pursuing their own interests at the expense of others? Madison\'s answer: you can\'t eliminate factions, but you can dilute them with a large republic. The bigger the country and the more diverse its interests, the harder it is for any one faction to form a majority and oppress others.',
      standardRef: ['AP US Gov — Federalist 10 (Foundational Document)', 'APUSH KC-3.2.II'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'madison', nodeId: 'mad-n8', context: 'Madison 与 Hamilton、Jay 合写 The Federalist Papers 鼓吹批准宪法' },
        ],
      },
      standaloneText: {
        cn: `**Federalist No. 10**（Madison 著，1787）是 AP Gov 的**必考 Foundational Document**。
故事里没单独演它，但它是整部宪法辩护的核心一篇，必须单独掌握。

它要解决的问题是 **faction（派系）**。
Madison 给 faction 下的定义：一群被某种共同利益或激情驱动的人，而且他们的利益**损害他人权利或公共利益**。

他的论证链（AP 逐字考这条逻辑）：
① **派系不可消灭** —— 除非消灭自由（faction 的根源），但那比病更糟；自由是 faction 的"空气"。
② 既然不能消灭，就要**控制它的影响**。
③ 怎么控制？**建一个大共和国（large republic）**：
   - 国家越大，利益越多元，没有任何一个派系能轻易凑成多数去压迫别人。
   - 用**代议制（representation）**而非直接民主 —— 选出的代表能"过滤"民众一时的激情。

这是 Madison 反驳"共和国只能小"这一传统观点的关键创新：
**正因为美国大、派系多，它反而更安全。**

故事连接：Madison 那条故事线里讲到他和 Hamilton、Jay 合写 The Federalist Papers
（联邦党人文集）来说服各州批准宪法——Federalist 10 和 51 是其中最有名的两篇。

注意别搞混：**Federalist 10 = 派系 + 大共和国**；**Federalist 51 = 三权分立 + 制衡**。
两篇都是 Madison 写的，AP 经常同时考、要求你区分。`,
        en: `**Federalist No. 10** (by Madison, 1787) is a **required Foundational Document** for AP Gov.
The story doesn't walk through it on its own, but it's the central essay defending the whole Constitution — master it separately.

The problem it tackles is **faction**.
Madison defines a faction as a group driven by a common interest or passion whose interest **harms the rights of others or the public good**.

His argument chain (AP tests this logic):
① **Factions can't be eliminated** — not without destroying liberty (their source). That's worse than the disease; liberty is the "air" factions breathe.
② Since you can't remove them, you must **control their effects**.
③ How? Build a **large republic**:
   - The bigger the nation and the more diverse its interests, the harder it is for any single faction to form a majority and oppress others.
   - Use **representation** instead of direct democracy — elected representatives can "filter" the people's short-term passions.

This is Madison's key innovation against the old idea that "a republic must be small":
**because America is large and full of factions, it is actually safer.**

In Madison's story line, he teams up with Hamilton and Jay to write The Federalist Papers — a series of essays to convince states to ratify. Federalist 10 and 51 are its two most famous pieces.

Don't mix them up: **Federalist 10 = factions + large republic**; **Federalist 51 = separation of powers + checks and balances**.
Both are by Madison. AP often tests them together and asks you to tell them apart.`,
      },
      xiaoweiNote: {
        cn: `这篇我一开始最头疼，因为故事里没演出来。老师说 AP Gov 几乎每年都考 Federalist 10，
最常考的就是"Madison 怎么处理 faction"——答案不是"消灭"，是"用大共和国稀释 + 代议制过滤"。
我的口诀：**10 = ten = tame the factions（驯服派系）**，靠"大"和"代表"。`,
        en: `This one stumped me at first because the story doesn't act it out.
Teacher said AP Gov tests Federalist 10 almost every year. The most common question: "How does Madison handle faction?"
The answer isn't "eliminate" — it's "dilute with a large republic + filter through representation."
My mnemonic: **10 = ten = tame the factions**, using "large" and "representatives."`,
      },
    },

    {
      id: 'federalist-vs-antifederalist-ratification',
      termCn: '批准之争与权利法案',
      termEn: 'Ratification Debate & the Bill of Rights',
      defCn: '批准（ratification）= 各州对宪法草案进行投票决定"要不要通过"。联邦派（Federalist）支持批准，反联邦派（Anti-Federalist）反对。两派激烈辩论后，反联邦派逼着联邦派答应加上权利法案（Bill of Rights），才同意批准。1791 年生效的前 10 条修正案就是权利法案。',
      defEn: 'Ratification means each state voted on whether to approve the draft Constitution. Federalists supported it; Anti-Federalists opposed it. After a fierce national debate, the Anti-Federalists forced the Federalists to promise a Bill of Rights in exchange for enough votes. The first ten amendments, ratified in 1791, became that Bill of Rights.',
      standardRef: ['AP US Gov — Constitution / Bill of Rights', 'APUSH KC-3.2.II', 'CA HSS 8.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'madison',
        nodeIds: ['mad-n8', 'mad-n9'],
        xiaoweiNote: {
          cn: `Madison 那条故事线里讲到了。1787 年 9 月 17 日签完字（55 人里只有 39 人签）不算完，
文件要送回 13 个州各自表决批不批准——这叫 **ratification（批准）**。

我把两派的对立背成一张对照表：
- **联邦派（Federalist）**：支持新宪法，要强中央。Madison、Hamilton、Jay 写 Federalist Papers 鼓吹。
- **反联邦派（Anti-Federalist）**：反对，怕强中央像当年英国国王一样吞掉个人自由。

考点关键句：反联邦派的施压**逼出了 Bill of Rights（权利法案）**——不是国父原本就想好的善意，是为换批准票答应加的。
**1791 年**前 10 条修正案生效，保护言论、信仰、不被任意搜查、陪审团审判、due process（正当程序）。

老师强调一个常见误解：误"权利法案是国父一开始就设计好的" → 正：它是反联邦派逼出来的。
（故事里 Madison 自己也承认："保护权利的那 10 条，不是我们的善意，是反对者逼出来的。"）`,
          en: `Madison's story line covers this. Signing on September 17, 1787 — only 39 of 55 signed — wasn't the end.
The document had to go back to all 13 states for a vote on approval — that's **ratification**.

I memorize the two camps as a compare table:
- **Federalists**: backed the new Constitution, wanted a strong center. Madison, Hamilton, and Jay wrote the Federalist Papers to promote it.
- **Anti-Federalists**: opposed it, fearing a strong center would — like the British king before it — swallow individual freedom.

Key exam sentence: Anti-Federalist pressure **forced out the Bill of Rights** — not goodwill the founders planned,
but a deal they made to get enough ratification votes.
**In 1791** the first ten amendments took effect, protecting speech, religion, freedom from unreasonable searches, trial by jury, and due process.

Teacher flagged a common misconception: "The Bill of Rights was part of the founders' original plan" — it was NOT. The Anti-Federalists forced it out.
(In the story Madison even admits it: "Those ten clauses protecting rights weren't our goodwill — our opponents forced them out of us.")`,
        },
      },
    },

    {
      id: 'slavery-clauses-and-omission',
      termCn: '宪法里的奴隶制条款与"回避的词"',
      termEn: 'Slavery Clauses & the Word the Constitution Avoided',
      defCn: '1787 年宪法正文里有三处条款保护奴隶制，但整部宪法连"slave"或"slavery"这两个词都没写——用"other persons"（其他人）这种说法绕开。这是 DBQ 考试爱考的张力：宪法说"We the People"，却同时用三处条款保护奴隶制。',
      defEn: 'The 1787 Constitution contains three separate clauses protecting slavery, yet the word "slave" or "slavery" never appears in the text — the framers used phrases like "other persons" to avoid writing it. This tension is a favorite DBQ topic: the Constitution declares "We the People" while simultaneously protecting slavery with three specific clauses.',
      standardRef: ['AP US Gov — Constitution', 'APUSH KC-3.2.II', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'madison',
        nodeIds: ['mad-n7'],
        xiaoweiNote: {
          cn: `Madison 那条故事线里专门讲奴隶制的妥协，不止 3/5 这一笔，一共**三处条款**：
① **3/5 妥协**（席位 + 税收的算术，已单独一张卡）。
② **奴隶贸易条款（1808 条款）**：宪法规定 1808 年之前，国会不准禁止跨大西洋奴隶贸易——等于给蓄奴州又上了 20 年保险。
③ **逃奴条款（Fugitive Slave Clause）**：逃到自由州的被奴役者必须被送回原主。

考点关键句（DBQ 高频）：整部宪法正文里，"**slave / slavery**"这两个词**一次都没出现**——用"other persons""such persons"绕开。
故事里有一句点睛："回避一个词，本身就是一种供认。"

为什么 DBQ 爱用这条？因为它逼你分析"理念（人人有不可剥夺的权利）vs 实践（三处条款保护奴隶制）"之间的张力——这正是 AP 评分要的 complexity（复杂性）。`,
          en: `Madison's story line dedicates a full section to the slavery compromises — not just three-fifths, but **three clauses** total:
① **Three-Fifths Compromise** (the seats + taxes deal — it has its own card).
② **Slave-trade clause (the 1808 clause)**: Congress was barred from banning the transatlantic slave trade before 1808 — another 20 years of protection for slave states.
③ **Fugitive Slave Clause**: an enslaved person who fled to a free state had to be returned to the owner.

Key exam sentence (high-frequency DBQ): nowhere in the body of the Constitution do the words "**slave / slavery**" appear — **not once**. They work around it with "other persons" and "such persons."
One line from the story sums it up: "Avoiding a word is itself a kind of confession."

Why do DBQs love this? Because it forces you to analyze the tension between the idea (people have unalienable rights) and the practice (three clauses protecting slavery) — exactly the complexity AP scoring rewards.`,
        },
      },
    },

    {
      id: 'electoral-college',
      termCn: '选举人团',
      termEn: 'Electoral College',
      defCn: '选举人团（Electoral College）是美国宪法设计的总统间接选举机制。美国人不直接投票选总统，而是投票给本州的"选举人"，再由选举人代表本州投票。每个州的选举人数 = 该州众议员数 + 参议员数（固定 2 人）。全国共 538 位选举人，过半 270 票当选。',
      defEn: 'The Electoral College is the Constitution\'s system for electing the President indirectly. Americans don\'t vote directly for President — they vote for their state\'s "electors," who then cast the official vote. Each state\'s electoral votes = its House seats + its Senate seats (always 2). There are 538 electoral votes nationwide; you need 270 to win.',
      standardRef: ['AP US Gov — Constitution (required)', 'APUSH KC-3.2.II', 'CA HSS 8.2'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'mum-bett-receiving-end', nodeId: 'mb-n7', context: '3/5 妥协给南方在国会和选举人团里超额权重' },
        ],
      },
      standaloneText: {
        cn: `**选举人团（Electoral College）** 是宪法设计的**总统间接选举机制**，不是直接民选。这是 AP Gov 的必考点，也是今天美国政治争议的根源之一。

**怎么运作：**
每个州的选举人数 = 该州众议员数 + 参议员数（参议员固定 2 名）。
例：加州目前众议员 52 名 + 参议员 2 名 = 54 位选举人。
全国共 538 位，过半需 270 票当选。

**为什么 1787 年这样设计？**
制宪者对直接民主不信任（Federalist 10 讲过：直接民主容易被激情冲动的多数绑架）。
他们想在"民意"和"最终当选"之间插入一层由"有识之士"组成的选举人，用来过滤一时的激情。

**3/5 妥协与选举人团的隐性联动：**
众议院席位按人口分——而人口里含 3/5 的被奴役者——所以南方因 3/5 妥协多出的众议员席位，也直接变成了多出的选举人票。
1800 年大选，Jefferson 靠南方的"3/5 红利"赢了 Adams。
AP 爱考这条联动：**3/5 妥协不只影响国会，也影响了总统选举。**

考点关键句：选举人团是宪法 Article II Section 1 设计的间接选举机制，不等于全国直选；各州选举人数与该州国会席位（含 3/5 妥协带来的膨胀席位）挂钩。`,
        en: `The **Electoral College** is the Constitution's **indirect system for electing the President** — not a direct popular vote.
It's a required AP Gov point and the source of ongoing American political debate.

**How it works:**
Each state's electoral votes = House seats + Senate seats (always 2).
Example: California currently has 52 House seats + 2 Senate seats = 54 electoral votes.
Total: 538 nationwide; 270 needed to win.

**Why this design in 1787?**
The framers distrusted direct democracy. (Federalist 10 makes this point: direct democracy can be hijacked by the passionate impulses of a momentary majority.)
They wanted a layer of "informed electors" inserted between "popular feeling" and "the actual winner" — to filter short-term emotion.

**The hidden connection between the Three-Fifths Compromise and the Electoral College:**
House seats are based on population — and that population included three-fifths of the enslaved — so the extra House seats the South gained from the Three-Fifths Compromise converted directly into extra electoral votes.
In the 1800 election, Jefferson beat Adams partly because of this "three-fifths bonus."
AP loves testing this chain: **the Three-Fifths Compromise shaped not just Congress, but presidential elections too.**

Key exam sentence: the Electoral College (Constitution Article II, Section 1) is an indirect election system, not a national popular vote.
Each state's electoral vote count is tied to its congressional seat total — which was itself inflated by the Three-Fifths Compromise in the founding era.`,
      },
      xiaoweiNote: {
        cn: `老师说这是 AP Gov 每年必考的当代政治点，也是宪法考点里最容易答错的地方。
误区：「美国人直接投票选总统」→ 错，是间接选举，每州的选举人代人民投票。

我的记忆公式：**选举人数 = 众议员数 + 2（参议员）**，
全国 538 位，赢 270 就够了。

最难记的连锁：3/5 妥协 → 南方多出众议员席位 → 南方多出选举人票 → 影响谁当总统。
这条链 AP 用来考 causation（因果），一定要能说顺。`,
        en: `Teacher said this is a must-test AP Gov topic every year and the most commonly misanswered constitutional point.
The misconception: "Americans directly vote for president" — wrong, it's an indirect election; each state's electors cast the formal vote on the people's behalf.

My memory formula: **electoral votes = House seats + 2 (Senators)**,
538 total nationwide, 270 to win.

The chain I always need to drill: Three-Fifths Compromise → extra House seats for the South → extra electoral votes for the South → affects who becomes president.
AP uses this chain to test causation — be able to walk through it in order.`,
      },
    },

    {
      id: 'commerce-clause',
      termCn: '商业条款',
      termEn: 'Commerce Clause',
      defCn: '商业条款（Commerce Clause）是宪法 Article I, Section 8, Clause 3 的规定：国会有权管理与外国、各州之间以及与印第安部落之间的贸易。这条授权是联邦政府管理全国经济的主要宪法依据，比邦联条例时代强得多。',
      defEn: 'The Commerce Clause (Article I, Section 8, Clause 3) gives Congress the power to regulate trade with foreign nations, among the states, and with Native American tribes. This clause is the main constitutional basis for the federal government\'s authority to regulate the national economy — a power the Articles of Confederation never gave the central government.',
      standardRef: ['AP US Gov — Constitution (required)', 'APUSH KC-3.2.II'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'madison', nodeId: 'mad-n2', context: '邦联条例的核心缺陷之一：中央不能管贸易' },
        ],
      },
      standaloneText: {
        cn: `**商业条款（Commerce Clause）** 是宪法 **Article I, Section 8, Clause 3** 的规定：
国会有权管理与外国、各州之间以及与印第安部落的**州际商业（interstate commerce）**。

**为什么 1787 年非加不可？**
邦联条例下，各州各立关卡、各收关税——弗吉尼亚对纽约货物收税，纽约反收。
13 个州变成了 13 个互相为敌的小经济体。Madison 在会议前的备忘录里把这列为邦联条例最致命的缺陷。
商业条款就是用来修这个漏洞的：让国会统一管全国贸易，不让各州自己乱来。

**为什么它是"弹性条款"的配合项？**
商业条款本身列举了"管商业"的权力，但"商业"的边界有多宽？
历史上法院不断扩展——19 世纪管铁路，20 世纪管农场产量、种族隔离的餐厅。
今天联邦政府大量经济监管权力的合宪依据，就是这条 Commerce Clause。

考点关键句：商业条款 = 国会管州际贸易的宪法授权，是联邦政府经济监管权的**最重要来源**之一。
AP 常和必要且适当条款一起考，问两条怎么合力扩大联邦权力。`,
        en: `The **Commerce Clause** is **Article I, Section 8, Clause 3** of the Constitution:
Congress has the power to regulate commerce with foreign nations, among the states, and with Native American tribes — that is, **interstate commerce**.

**Why was it essential in 1787?**
Under the Articles of Confederation, every state set up its own tariffs and trade barriers. Virginia taxed New York goods; New York taxed back.
The 13 states became 13 hostile little economies. Madison listed this as the most fatal flaw of the Articles in his pre-Convention memo.
The Commerce Clause was written to close that gap: give Congress unified control over national trade, so states can't freelance.

**Why does it pair with the Necessary and Proper Clause?**
The Commerce Clause spells out the power to "regulate commerce" — but how wide is "commerce"?
Courts have stretched it over and over: 19th-century railroads, 20th-century farm quotas, racial segregation in restaurants.
Today, a huge chunk of federal economic regulation rests on this clause.

Key exam sentence: the Commerce Clause = Congress's constitutional authorization to regulate interstate trade,
and is **one of the most important sources** of federal economic regulatory power.
AP often pairs it with the Necessary and Proper Clause, asking how the two together expand federal authority.`,
      },
      xiaoweiNote: {
        cn: `老师说 AP Gov 最爱考的一道题型是：「联邦政府做了 XXX，这违宪吗？宪法授权从哪来？」
商业条款是最常用的答案之一——只要涉及跨州的经济活动，联邦政府通常都可以用它撑腰。

记忆锚：**邦联条例缺了它 → 13 州互相关税大乱 → 1787 年把它写进宪法**。
从"无权管贸易"到"有权管商业"——这一步是联邦政府经济权力的起点。

AP 出题常见搭配：Commerce Clause + Necessary and Proper Clause（弹性条款）一起考，
问两条怎么给国会"兜底授权"。`,
        en: `Teacher said one of AP Gov's favorite question types is: "The federal government did X — is that constitutional? Where does the authority come from?"
The Commerce Clause is one of the most common answers — if it involves economic activity across state lines, the federal government can usually point here.

Memory anchor: **Articles lacked it → 13 states tariffed each other into chaos → 1787 wrote it in.**
From "no power to regulate trade" to "power to regulate commerce" — that step is where federal economic power begins.

Common AP pairing: Commerce Clause + Necessary and Proper Clause tested together,
asking how the two give Congress a "catch-all authorization."`,
      },
    },

    {
      id: 'necessary-and-proper-clause',
      termCn: '必要且适当条款（弹性条款）',
      termEn: 'Necessary and Proper Clause (Elastic Clause)',
      defCn: '必要且适当条款（Necessary and Proper Clause）在宪法 Article I, Section 8, Clause 18：国会有权制定"为执行上述各项权力所必要且适当的一切法律"。又叫弹性条款（Elastic Clause），因为它像橡皮筋，能把国会的权力拉伸到列举权力之外。这是联邦政府"隐含权力"的主要来源。',
      defEn: 'The Necessary and Proper Clause (Article I, Section 8, Clause 18) says Congress can make all laws "necessary and proper" to carry out its listed powers. It\'s also called the Elastic Clause because it stretches Congress\'s reach beyond the specific powers named in the Constitution. This is the main source of the federal government\'s "implied powers" — things Congress can do that aren\'t directly listed.',
      standardRef: ['AP US Gov — Constitution (required)', 'APUSH KC-3.2.II'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'madison', nodeId: 'mad-n3', context: 'Madison 设计强中央：列举权力之外需要一个兜底条款' },
        ],
      },
      standaloneText: {
        cn: `**必要且适当条款（Necessary and Proper Clause）** 在宪法 **Article I, Section 8, Clause 18**：
国会有权制定「为执行上述各项权力……所**必要且适当**的一切法律」。

又叫 **弹性条款（Elastic Clause）**——因为它像橡皮筋，能把国会的权力拉伸到列举权力之外。

**它解决什么问题？**
宪法 Section 8 列举了国会的 18 项具体权力（征税、宣战、铸币、管商业……），
但现实情况总比列举的多——总有没被列到的事需要做。
弹性条款说：只要「对执行某项列举权力是必要且适当的」，国会就可以立法。
这等于给国会开了一个「隐含权力（implied powers）」的大门。

**最经典的历史案例：McCulloch v. Maryland（1819）**
美国国会建立了国家银行（Second Bank of the United States）——宪法哪条列举了"建银行"？没有。
马里兰州说：没有明文授权 = 违宪。
最高法院首席大法官 John Marshall 说：建银行是执行征税权和管商业权"必要且适当"的手段，合宪。
这个判决定下了「弹性条款 = 联邦权力可以扩张」的先例，一直影响到今天。

考点关键句：必要且适当条款 = 国会的「隐含权力」来源；
AP 考题常把它和商业条款、联邦制（federalism）一起考，问它如何扩大联邦 vs 各州权力的边界。
反联邦派（Brutus No. 1）当年最怕的就是这条——他们说这给国会的权力没有边界。`,
        en: `The **Necessary and Proper Clause** appears in **Article I, Section 8, Clause 18**:
Congress can make all laws "necessary and proper for carrying into execution" its listed powers.

It's also called the **Elastic Clause** — because it stretches Congress's reach beyond the specifically named powers, like a rubber band.

**What problem does it solve?**
Section 8 lists 18 specific Congressional powers (tax, declare war, coin money, regulate commerce...).
But real life always brings up situations that aren't on the list.
The Elastic Clause says: as long as something is "necessary and proper" to execute a listed power, Congress can legislate it.
That opened the door to **implied powers** — things Congress can do even when the Constitution doesn't name them directly.

**The landmark case: McCulloch v. Maryland (1819)**
Congress created a national bank (the Second Bank of the United States). Which listed clause says "charter a bank"? None.
Maryland argued: no explicit text = unconstitutional.
Chief Justice John Marshall ruled: chartering a bank is "necessary and proper" to execute the powers to tax and regulate commerce — constitutional.
That ruling locked in the precedent that the Elastic Clause lets federal power expand. It still holds today.

Key exam sentence: the Necessary and Proper Clause = the source of Congress's "implied powers."
AP often tests it alongside the Commerce Clause and federalism, asking how it shifts the line between federal and state power.
The Anti-Federalists (Brutus No. 1) feared this clause most — they said it gave Congress unlimited power.`,
      },
      xiaoweiNote: {
        cn: `老师说这条是 AP Gov 联邦权力题的「万能答案」之一——
只要问「国会凭什么做这件事，宪法哪里写了？」，
先看列举权力（enumerated powers），找不到就用弹性条款 = 隐含权力。

记忆口诀：**弹性条款 = 列举权力的"外延"** —— 列举是"主干"，弹性是"触手"，能伸多远法院说了算。

最高频考点：McCulloch v. Maryland（1819）是弹性条款最常被点名的案例。
背熟「国家银行 → 执行征税权的必要手段 → 合宪」这条逻辑链，能直接拿 AP 分。

别混：弹性条款是国会的权力（Article I），不是总统的。`,
        en: `Teacher said this clause is one of the "universal answers" to AP Gov federal power questions.
When asked "what authorizes Congress to do X," check the enumerated (listed) powers first.
If nothing fits, the Elastic Clause — implied powers — is the answer.

Memory tip: **Elastic Clause = the "reach" beyond listed powers** — the listed powers are the trunk, the Elastic Clause is the tentacles. How far they stretch, the courts decide.

Highest-frequency exam point: McCulloch v. Maryland (1819) is the most cited Elastic Clause case.
Memorize the logic chain: "national bank → necessary and proper means to execute the taxing power → constitutional." That chain is worth direct AP points.

Don't mix up: the Elastic Clause is Congress's power (Article I), not the President's.`,
      },
    },

    {
      id: 'brutus-no-1',
      termCn: 'Brutus No. 1（反联邦党人文献）',
      termEn: 'Brutus No. 1 (Anti-Federalist Paper)',
      defCn: 'Brutus No. 1 是 1787 年 10 月 18 日发表的一篇文章，作者匿名，学界多认为是纽约州代表 Robert Yates。这是 AP Gov 的必考文件，和 Federalist 10、Federalist 51 并列。核心观点：一个大共和国无法保护个人自由，弹性条款和商业条款会让联邦政府的权力无限扩张。',
      defEn: 'Brutus No. 1 is an essay published on October 18, 1787, written anonymously — scholars mostly attribute it to New York delegate Robert Yates. It\'s a required AP Gov document, alongside Federalist 10 and Federalist 51. Core argument: a large republic cannot protect individual liberty, and the Elastic Clause plus the Commerce Clause will let federal power expand without limit.',
      standardRef: ['AP US Gov — Brutus No. 1 (Foundational Document)', 'APUSH KC-3.2.II'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'madison', nodeId: 'mad-n9', context: '批准战中反联邦派对强中央宪法的集中反驳' },
        ],
      },
      standaloneText: {
        cn: `**Brutus No. 1**（1787 年 10 月 18 日）是 AP Gov 的**必考 Foundational Document**——
和 Federalist 10、Federalist 51 并列，逐字考。

作者匿名署名「Brutus」，学界多认为是纽约州代表 Robert Yates。
「Brutus」这个笔名本身有含义：典故来自刺杀恺撒的布鲁图斯，意思是"宁愿杀死这部宪法，也不能让它变成暴君"。

**核心论点：大共和国必然走向专制**

Brutus 正面回击 Madison 的 Federalist 10（"大共和国更安全"）：
① **共和国越大，人民越难控制政府**——代表离选民太远，无法真正代表他们。
② **弹性条款（Necessary and Proper Clause）给国会的权力没有边界**——只要国会认为"必要"，什么事都能干，各州权力将被逐步吞噬。
③ **商业条款（Commerce Clause）让联邦控制全国经济**，各州无力对抗。
④ **常备军（standing army）危险**——历史上大帝国都靠常备军压制人民。
⑤ **联邦法院的终审权威胁州法院**——最终司法权全归联邦，各州形同虚设。

**结论：不批准这部宪法，除非加上明确保护个人和各州权利的清单。**
这个压力直接催生了 Bill of Rights（权利法案，1791）。

考点关键句（AP 逐字考）：Brutus No. 1 认为大共和国**无法保护个人自由**，弹性条款和商业条款赋予联邦**无限权力**，常备军是专制的工具——是反联邦派对 Federalist 10/51 的正面反驳文本。`,
        en: `**Brutus No. 1** (October 18, 1787) is a **required Foundational Document** for AP Gov —
alongside Federalist 10 and Federalist 51, tested word for word.

The author wrote anonymously as "Brutus." Scholars mostly attribute it to Robert Yates, a New York delegate.
The pen name "Brutus" is meaningful: it alludes to Caesar's assassin — the signal is "I would rather kill this Constitution than let it become a tyrant."

**Core argument: a large republic will inevitably turn despotic**

Brutus directly counters Madison's Federalist 10 ("a large republic is safer"):
① **The larger the republic, the less the people can control the government** — representatives are too distant from constituents to truly represent them.
② **The Necessary and Proper Clause gives Congress unlimited power** — whenever Congress decides something is "necessary," it can act on anything, and state power will be swallowed piece by piece.
③ **The Commerce Clause puts the whole national economy under federal control**, leaving states powerless to resist.
④ **A standing army is dangerous** — throughout history, large empires have used standing armies to suppress the people.
⑤ **Federal courts' final authority threatens state courts** — ultimate judicial power flows entirely to the federal government, leaving states hollow.

**Conclusion: do not ratify this Constitution unless a clear list protecting individual and state rights is added.**
That pressure directly produced the Bill of Rights (1791).

Key exam sentence (AP tests this): Brutus No. 1 argues that a large republic **cannot protect individual liberty**,
that the Elastic Clause and Commerce Clause grant the federal government **unlimited power**,
and that a standing army is a tool of tyranny.
It is the Anti-Federalist counter-text to Federalist 10 and 51, tested in direct comparison.`,
      },
      xiaoweiNote: {
        cn: `老师说 AP Gov 考 Brutus No. 1 最爱出的题是：
「Brutus 和 Madison 对大共和国的看法有什么不同？」

必备对比表：
- **Madison (Federalist 10)**：大共和国 → 派系互相稀释 → 更安全
- **Brutus No. 1**：大共和国 → 政府远离人民 → 更危险

还有一个高频考点：Brutus No. 1 的担忧有多少被历史证实了？
答案：他担心的弹性条款被滥用 → 后来确实有（联邦权力扩张），
但 Bill of Rights 和司法审查（judicial review）在一定程度上提供了他想要的保护。

记忆锚：**Brutus = 反联邦派代言人 / Federalist 10 的正面对手**。
考试如果出现「反联邦派观点」「批评宪法」「担心强中央」，
第一反应就是 Brutus No. 1。`,
        en: `Teacher said AP Gov's favorite Brutus No. 1 question is:
"How do Brutus and Madison differ in their views of a large republic?"

Must-have comparison table:
- **Madison (Federalist 10)**: large republic → factions dilute each other → safer
- **Brutus No. 1**: large republic → government too distant from the people → more dangerous

Another high-frequency point: how much of what Brutus feared actually came true?
Answer: his worry about the Elastic Clause being overused → later events confirmed it (federal power did expand),
but the Bill of Rights and judicial review provided some of the protection he wanted.

Memory anchor: **Brutus = the Anti-Federalist voice / Federalist 10's direct opponent.**
On the exam, whenever you see "Anti-Federalist view," "criticizing the Constitution," or "fear of a strong central government," your first thought should be Brutus No. 1.`,
      },
    },

    {
      id: 'madison-father-of-constitution',
      termCn: 'Madison 的双面角色',
      termEn: 'Madison\'s Two-Faced Role',
      defCn: 'James Madison 被称为"宪法之父"（Father of the Constitution）：他到费城前几个月就备好了整套方案（Virginia Plan），逐字记录了会议笔记，并写了 Federalist 10 和 51。但同一个 Madison，一辈子靠 100 多个被奴役者维生，也是把 3/5 写进宪法的设计者之一。"建国天才"和"制度性暴力的参与者"——是同一个人。',
      defEn: 'James Madison is called the "Father of the Constitution": he arrived in Philadelphia with a full plan already prepared (the Virginia Plan), took word-for-word notes throughout the Convention, and wrote Federalist 10 and 51. But the same Madison owned more than a hundred enslaved people his entire life and was one of the designers who wrote three-fifths into the Constitution. "Founding genius" and "participant in institutional violence" — same person.',
      standardRef: ['AP US Gov — Foundational Documents', 'APUSH KC-3.2.II', 'AP DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'madison',
        nodeIds: ['mad-n1', 'mad-n10'],
        xiaoweiNote: {
          cn: `Madison 整条故事线就是他，最后一节的总结把他的"双面"说得最清楚。
为什么单列一张卡？因为 AP 考他不只考"做了什么"，更考"怎么评价同一个人身上的天才与污点"。

**为什么叫"宪法之父"（Father of the Constitution）**：
- 会前几个月读遍政体史，到费城口袋里就装着 **Virginia Plan（弗吉尼亚方案）**——
  三权分立 + 强中央 + 按人口分两院席位的蓝本。
- 坐前排逐字记笔记——今天我们知道屋里发生了什么，主要靠他这本笔记。
- 写 **Federalist 10 和 51**，为整部宪法做理论辩护。

**同一个 Madison 的另一面**：
- 一辈子住弗吉尼亚 Montpelier 种植园，靠 100 多个被奴役者维生。
- 是把 3/5 写进宪法的技术操盘手之一（Virginia Plan 里已有 3/5 雏形）。
- 在 **Federalist 54** 里为 3/5 妥协作了辩护——不过他是借一位假想的"南方代言人"之口论证（被奴役者"兼具财产与人身"），史学界对他是否真心仍有争论。

考点关键句：建国天才与制度性暴力的技术操盘手，**是同一个人**——
这不是"优点 + 缺点"，是同一套设计的两面。这正是 AP DBQ 要的"既不洗白也不全盘否定"的中立分析。`,
          en: `Madison's whole story line is about him, and the final summary section lays out his "two faces" most clearly.
Why a separate card? Because AP tests him not just on "what he did" but on "how to judge the genius and the stain in the same person."

**Why he's called the "Father of the Constitution":**
- Spent months before the Convention reading through the history of governments, arriving in Philadelphia with the **Virginia Plan** in his pocket — the blueprint for separation of powers + strong center + two houses apportioned by population.
- Sat in the front row taking word-for-word notes — most of what we know about that room comes from his notebook.
- Wrote **Federalist 10 and 51**, the theoretical defense of the whole Constitution.

**The other side of the same Madison:**
- Lived his whole life at Montpelier plantation in Virginia, supported by more than a hundred enslaved people.
- Was one of the technical hands who wrote three-fifths into the Constitution (the Virginia Plan already sketched it in).
- Defended the Three-Fifths Compromise in **Federalist 54** — though he argued through an imagined "Southern spokesman" (that enslaved people were "both property and persons"), and historians still debate how sincere he was.

Key exam sentence: the genius of the founding and the hand behind institutional violence are **the same man** —
not "strengths plus weaknesses," but two faces of one design.
That's exactly the "neither whitewash nor wholesale condemnation" analysis AP DBQ rewards.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1787 年那部宪法开篇喊"We the People（我们人民）"，
可它同一口气，用三处条款保护奴隶制，还把约六分之一的人（被奴役者）算成 3/5。

你觉得这部宪法应该被看成"一个谎"，还是"一张还没兑现的支票"？
用至少两条具体证据支持你的判断。`,
      en: `The 1787 Constitution opens with "We the People" —
yet in the same document it protected slavery with three clauses and counted about a sixth
of the people (the enslaved) as three-fifths.

Should this Constitution be seen as "a lie," or as "a check not yet cashed"?
Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "谎"这边的证据：3/5 妥协、1808 奴隶贸易条款、逃奴条款、正文不敢写"slave"。
- "支票"这边的证据：1780 马萨诸塞宪法的"生而自由"被 Mum Bett 拿去打赢官司；
  内战后宪法加了废奴和"equal protection（法律面前人人平等）"修正案。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence**, not which side you pick.
- Evidence for "a lie": the Three-Fifths Compromise, the 1808 slave-trade clause, the Fugitive Slave Clause, the refusal to write "slave" in the text.
- Evidence for "a check": the 1780 Massachusetts "born free" clause that Mum Bett used to win her case; the post-Civil War amendments that abolished slavery and added "equal protection of the laws."
High-scoring move: acknowledge both sides hold up, then explain why you lean one way — that's what AP calls complexity.`,
      conceptsActivated: ['three-fifths-compromise', 'slavery-clauses-and-omission'],
    },
    {
      id: 'q2',
      cn: `1787 年 7 月 16 日，大妥协以 5 比 4 通过——只差一票。它让会议没散，
保住了国家；可同一套妥协逻辑，也帮着把不在谈判桌上的被奴役者写成了 3/5。

如果你是 AP 老师，要出一道题考"妥协是建国的智慧，还是对弱者的牺牲"，
你会怎么提问？请写出你的题目，并说明这道题想让学生看见什么。`,
      en: `On July 16, 1787, the Great Compromise passed 5 to 4 — by one vote.
It kept the Convention from falling apart and saved the country.
Yet the same spirit of compromise also helped write the enslaved — who weren't at the table — down as three-fifths.

If you were an AP teacher writing a question on "is compromise the wisdom of the founding, or the sacrifice of the powerless,"
how would you phrase it? Write your question and explain what you want students to see.`,
      hintCn: `提示：好的 DBQ 题通常会逼学生**同时看见两件事**，而不是二选一。
可以从 Sherman 的角度切入——他在故事里说："我以为我在平衡各方，可被算成 3/5 的那群人，
从来没被请进屋。"这句话点出妥协的盲区：**谈判桌上少了最该到场的一方**。
你的题目可以让学生比较"大妥协（大州 vs 小州，两边都在场）"和"3/5 妥协（被奴役者不在场）"——
为什么前者常被夸"建国智慧"，后者却是污点？差别在哪？`,
      hintEn: `Hint: a good DBQ forces students to **see two things at once**, not just pick one.
Try coming at it through Sherman — in the story he says: "I thought I was balancing all sides, but the people counted as three-fifths were never invited into the room."
That line names the blind spot of compromise: **the table was missing the side that most needed to be there.**
Your question could have students compare the Great Compromise (large vs. small states, both present) with the Three-Fifths Compromise (the enslaved absent) — why is the first one praised as "founding wisdom" while the second is a stain? What's the difference?`,
      conceptsActivated: ['great-compromise', 'three-fifths-compromise', 'madison-father-of-constitution'],
    },
    {
      id: 'q3',
      cn: `Madison 在 Federalist 51 写"必须让野心去对抗野心"，设计了三权分立和制衡，
说他不指望当权者是好人，只指望他们互相牵制。

你同意"与其指望好人当权，不如设计制度让坏人也作不了恶"这个思路吗？
这是聪明的现实主义，还是对人性的悲观？用宪法里的一个具体制衡机制来支持你的看法。`,
      en: `In Federalist 51 Madison wrote "ambition must be made to counteract ambition,"
designing separation of powers and checks and balances. He said he didn't count on the powerful being good people — only on them checking each other.

Do you agree with the idea "rather than count on good people in power, design institutions so even bad people can't do harm"?
Is this clever realism, or pessimism about human nature?
Support your view with one specific check-and-balance mechanism from the Constitution.`,
      hintCn: `提示：先把 Federalist 51 和 Federalist 10 分清楚——
51 = 三权分立 + 制衡（这题问的）；10 = 派系 + 大共和国（别写串了）。
具体制衡机制可以举：总统否决 vs 国会 2/3 推翻、参议院批准总统提名的法官、最高法院 judicial review。
进阶思考：今天的学校、家庭、社团里，有没有"靠规则防止滥权"而不是"靠某个人品德好"的设计？
你觉得哪种更靠得住？AP 看的是你能不能用一个真实机制把抽象的论点"钉"在证据上。`,
      hintEn: `Hint: first keep Federalist 51 and Federalist 10 straight —
51 = separation of powers + checks and balances (this question); 10 = factions + large republic (don't mix them).
For a specific mechanism, try: the presidential veto vs. the 2/3 congressional override, the Senate confirming the President's judicial nominees, or the Supreme Court's judicial review.
Going deeper: in your school, family, or clubs today, is there a design that uses rules to prevent abuse of power rather than relying on one person's good character?
Which do you trust more? AP wants you to "pin" an abstract claim to evidence with one real, specific mechanism.`,
      conceptsActivated: ['separation-of-powers-checks-balances', 'federalist-10'],
    },
  ],
};

export default notebook;
