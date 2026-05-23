// ─── Constitutional Convention 1787 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 费城制宪 · The Constitutional Convention 1787
// HSS-8.2 · APUSH Period 3 · AP US Government Foundational Documents (Federalist 10/51, U.S. Constitution)
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md A1 + AUTHORING_PIPELINE 第 8/12 条):
//   - madison          (perpetrator-actor) — James Madison 1751-1836 「宪法之父」+ 蓄奴庄园主 + 3/5 妥协技术设计者
//   - roger-sherman    (lonely-mediator)   — Roger Sherman 1721-1793 鞋匠出身 / 签四份建国文件 / Great Compromise 调停者
//   - mum-bett         (receiving-end)     — Mum Bett / Elizabeth Freeman c.1744-1829 被奴役女性 / 1781 用「生而自由」打赢自由诉讼
//
// 跨 lens micro-detail (N6 anchor):
//   「生而自由 / born free」一句话两个方向 — 同一年 (1781) 大西洋两岸的被奴役者把主人写的话捡起来对准主人:
//   - Mum Bett (新英格兰厨房) 用 1780 MA 宪法「生而自由平等」打自由诉讼
//   - Toussaint (加勒比甘蔗田) 同代读启蒙「自由/平等」文本 → 现有 enlightenment Topic Toussaint lens 直挂
//   Madison lens N6: 3/5 妥协的算术 vs Mum Bett 把「人」要回来 — 同一句话两个用法
//   Sherman lens N6: bicameral 妥协 — 让屋子没散掉的那一票 (1787.7.16 5:4)
//
// 跨 Topic 锚:
//   - Madison 读 Montesquieu 三权分立 → enlightenment (Voltaire/Gouges/Toussaint)
//   - rule of law / 国王也守法 → magna-carta-1215 (Clause 39 → 5th Amendment due process)
//   - Mum Bett「生而自由」诉讼 → enlightenment Toussaint (同代奴隶读启蒙文本翻身)
//
// defaultLens = 'mum-bett-receiving-end' (受影响者优先 pattern: 女性 + 被宪法排除一方 + 跨 lens「生而自由」对位)
//
// NEW STRUCTURE SPEC (corrected shorter format, NOT old 12-long-node):
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach 550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: James Madison (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var madisonLens = {
  id: 'madison',
  name: 'James Madison',
  nameCn: '詹姆斯·麦迪逊',
  role: 'perpetrator-actor',
  perspectiveTag: 'constitution-architect',
  icon: '📜',
  description: {
    cn: '弗吉尼亚人，1751 年生，制宪代表里最矮、最安静的一个。1787 年到费城前，他已经读遍古今政体史，口袋里装着一整套方案。他坐在前排逐字记笔记，今天我们知道那间锁窗的屋子里发生了什么，主要靠他这本笔记。同一个他，住在 Montpelier 种植园，靠 100 多个被奴役者维生，是把「被奴役者算 3/5 个人」写进宪法的技术操盘手之一。这一遍让你从设计者内部，看一部宪法的天才与污点怎么同时诞生。',
    en: 'A Virginian, born 1751, the shortest and quietest delegate in the room. Before he reached Philadelphia in 1787 he had read the history of governments from ancient Greece to his own day, and arrived with a full plan in his pocket. He sat in the front row taking word-for-word notes, and most of what we know about that shuttered room comes from his notebook. The same man lived at Montpelier, a plantation worked by more than a hundred enslaved people, and was one of the technical hands who wrote the rule counting an enslaved person as three-fifths of a person into the Constitution. This pass lets you watch, from inside the designer, how a constitution\'s genius and its stain are born at the same moment.',
  },
  storyboard: [
    {
      id: 'mad-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1787 年 5 月，费城。一间二楼的屋子，窗户被钉死，门口设了岗。外面是又热又潮的夏天，里面闷到有人当场晕过去。\n\n我们为什么要把自己关起来？因为我们要做一件没被授权做的事。各州派我们来，名义上只是「修订一下旧规矩」。可我打算把旧规矩整个扔掉，从头写一部新宪法。\n\n我是 James Madison（詹姆斯·麦迪逊），弗吉尼亚来的。我个子最矮，声音最小，看起来最不起眼。但我口袋里装着一整套方案——我为这一刻准备了好几个月。\n\n这一遍，你坐进我这个位置，看一部到今天还在用的宪法，是怎么从一屋子互相不信任的人手里，被一笔一笔谈出来的。',
        en: 'May 1787, Philadelphia. A room on the second floor, windows nailed shut, a guard at the door. Outside, a hot and humid summer; inside, stifling enough that men fainted at the table.\n\nWhy lock ourselves in? Because we were about to do something we had not been authorized to do. The states sent us, officially, only to "patch up the old rules." I meant to throw the old rules out entirely and write a new constitution from scratch.\n\nI am James Madison, from Virginia. I was the shortest delegate, the quietest, the easiest to overlook. But I had a full plan in my pocket. I had been preparing for this moment for months.\n\nThis pass puts you in my seat, watching how a constitution still in force today was negotiated, clause by clause, out of a room full of people who did not trust one another.',
      },
      deliverGoal: 'N1 hook — 1787.5 费城锁窗屋子 + 越权 (授权修订却要重写) + Madison 自我介绍 (最矮最安静但备好方案) + 这一遍视角设定',
      engagementHook: '一屋子人把自己锁起来，做一件没被授权做的事——你信「为了好结果可以越权」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mad-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们为什么这么慌。\n\n1783 年我们刚打赢独立战争，从英国手里挣来独立。可独立之后，13 个州各管各的，中央政府弱得像没有：不能征税、不能管贸易、没有军队，想改个规矩还得 13 个州全票同意——一票否决就卡死。\n\n1786 到 1787 年，马萨诸塞州的负债农民拿起枪抗税，攻击法院。这叫 Shays\' Rebellion（谢司起义）。中央政府连镇压都做不到——它根本没有可调动的兵。\n\n我们这些人吓坏了。一个连自己国家的暴动都管不住的政府，还能撑多久？\n\n所以 1787 年我去费城，不是去「修补」。我心里清楚：这个弱政府要散架了，得从地基重新盖一座。',
        en: 'First, why we were so afraid.\n\nIn 1783 we had just won the war and pried our independence out of British hands. But after independence, the 13 states each went their own way, and the central government was weak to the point of nonexistence: it could not tax, could not regulate trade, had no army, and to change a single rule required all 13 states to agree. One veto froze everything.\n\nIn 1786 and 1787, indebted farmers in Massachusetts took up guns against taxes and attacked the courts. This was Shays\' Rebellion. The central government could not even put it down. It had no troops to send.\n\nThose of us in that room were frightened. How long could a government last if it could not control an uprising inside its own borders?\n\nSo when I went to Philadelphia in 1787, I was not going to "patch." I knew in my heart this weak government was about to collapse. We had to build a new one from the foundation up.',
      },
      deliverGoal: 'N2 setup — Articles of Confederation 弱中央 (不能征税/管贸易/没军队/13 州全票) + Shays\' Rebellion 1786-87 镇压不了 → 重建动机',
      engagementHook: '一个连自己国内暴动都管不住的政府——你会选择修补它，还是推倒重来？',
      expectsRealAnswer: false,
    },
    {
      id: 'mad-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我为这一刻怎么备课的？\n\n会议前几个月，我把能找到的政体史全读了——古希腊、罗马共和、当代欧洲。我想搞清一件事：一个共和国为什么会烂掉、会变回独裁？\n\n读到一个法国人 Montesquieu（孟德斯鸠），他写过一句让我反复想的话：把权力分给不同的人，让他们互相牵制，没人能独大。这就是三权分立——立法、行政、司法分开。\n\n这条思路，从启蒙时代的书本，要被我搬进一部真宪法里。（你要是跑过 enlightenment 那个 Topic，会认得孟德斯鸠这个名字。）\n\n1787 年 5 月 29 日，我准备好的方案由弗吉尼亚代表 Randolph 念出来，叫 Virginia Plan（弗吉尼亚方案）：三权分立、强中央、国会按人口分席位。\n\n我没站起来念——我让别人念。但每一条都是我写的。',
        en: 'How did I prepare for this moment?\n\nIn the months before the convention I read every account of governments I could find: ancient Greece, the Roman republic, modern Europe. I wanted to understand one thing: why does a republic rot and slide back into one-man rule?\n\nI read a Frenchman, Montesquieu, who wrote a line I turned over and over: split power among different hands so they check each other, and no one can dominate. That is the separation of powers, legislative, executive, and judicial kept apart.\n\nThis idea, from the books of the Enlightenment, I was about to carry into a real constitution. (If you have run the enlightenment topic, you will recognize the name Montesquieu.)\n\nOn 29 May 1787, the plan I had prepared was read aloud by the Virginia delegate Randolph. It was called the Virginia Plan: separation of powers, a strong center, and a Congress with seats apportioned by population.\n\nI did not stand to read it myself. I had someone else read it. But every clause was mine.',
      },
      deliverGoal: 'N3 setup — Madison 备课读政体史 + Montesquieu 三权分立 (跨 enlightenment Topic 锚) + 1787.5.29 Virginia Plan (Randolph 代念) 三权分立/强中央/按人口分席位',
      engagementHook: '我把启蒙书本里的一句话——「权力互相牵制」——搬进了一部真宪法。你读过的哪句话，可能将来真的改变你做的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'mad-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是屋里最懂政体设计的人。你的方案 Virginia Plan 一抛出去，大州（弗吉尼亚、宾州，人多）都点头：按人口分席位，我们席位多，理所当然。\n\n可小州（新泽西、特拉华，人少）当场翻脸。他们的算盘很简单：按人口分，我们永远是少数，永远被大州压着。1787 年 6 月 15 日，他们抛出 New Jersey Plan（新泽西方案）反击——每州一票，一律平等。\n\n两套方案顶在一起，谁也不让。屋子第一次面临散伙。\n\n你心里清楚：你是大州的人，你设计的方案对你这边有利。这不是巧合。\n\n这一刻你得想：你要的「强中央 + 按人口」，到底是为了「好政府」，还是为了「弗吉尼亚多分一点」？这两件事，在你身上分得清吗？',
        en: 'Now you are me.\n\nYou are the person in the room who understands government design best. The moment your Virginia Plan was put forward, the large states (Virginia, Pennsylvania, with the most people) nodded: seats by population, so we get more seats, naturally.\n\nBut the small states (New Jersey, Delaware, with few people) turned on it at once. Their reasoning was simple: apportion by population and we are forever a minority, forever crushed by the big states. On 15 June 1787 they fired back with the New Jersey Plan: one vote per state, all equal.\n\nThe two plans locked head to head. Neither side would give. For the first time the room faced collapse.\n\nYou know it in your gut: you are a large-state man, and the plan you designed favors your side. That is not a coincidence.\n\nSo here you must ask yourself: is your "strong center plus apportionment by population" really for "good government," or for "Virginia getting a little more"? On you, can those two things even be told apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Virginia Plan 大州点头 vs New Jersey Plan 1787.6.15 小州反击 (按人口 vs 每州平等) + 自我拷问: 强中央到底为好政府还是为弗吉尼亚利益',
      engagementHook: '你设计的「好制度」刚好对你自己这边有利——这是巧合，还是你骗了自己？你怎么分得清？',
      expectsRealAnswer: false,
    },
    {
      id: 'mad-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '大州 vs 小州，吵了一个多月。\n\n6 月、7 月，天越来越热，窗户还钉着。代表们困、烦、互相不让。好几次，会议眼看就要散——有人收拾东西想回家。\n\n我急。我知道，散了，就再也凑不齐这群人了——这是重建政府唯一的机会。\n\n7 月 16 日，转机来了，但不是我让的步。一个康涅狄格来的、鞋匠出身的代表 Roger Sherman（罗杰·谢尔曼），提了个折中：国会分两院。下院（House）按人口分席位——大州赢；上院（Senate）每州两票，一律平等——小州赢。\n\n这叫 Great Compromise（大妥协）。当天以 5 比 4 的州票通过——只差一票。\n\n说实话，我一开始不喜欢这个方案。上院每州平等，违背我「按人口」的纯设计。但 Sherman 让屋子没散掉。\n\n（他是怎么想的，你换到他那一遍可以亲自听。）',
        en: 'Large states versus small states, it dragged on for over a month.\n\nThrough June and July the heat rose and the windows stayed nailed. The delegates were tired, irritable, unyielding. Several times the convention nearly broke up. Some men packed to go home.\n\nI was anxious. I knew that if it broke up, we would never gather this group again. This was the one chance to rebuild the government.\n\nOn 16 July the turn came, but not from any concession of mine. A delegate from Connecticut, a former shoemaker named Roger Sherman, offered a middle path: split Congress into two houses. The lower house (the House) apportioned by population, so the large states win; the upper house (the Senate) two votes per state, all equal, so the small states win.\n\nThis is the Great Compromise. It passed that day by a vote of 5 to 4 among the states. By a single vote.\n\nHonestly, I disliked the plan at first. An equal Senate violated my clean "by population" design. But Sherman kept the room from falling apart.\n\n(How he thought it through, you can hear for yourself when you switch to his pass.)',
      },
      deliverGoal: 'N5 story — 大州 vs 小州吵一个多月濒临散伙 + 1787.7.16 Roger Sherman bicameral Great Compromise (House 按人口 / Senate 每州平等) 5:4 通过 + Madison 起初不喜欢但屋子没散 + 桥到 Sherman lens',
      engagementHook: '我设计的「纯方案」被一个鞋匠的妥协改掉了——可正是这个妥协救了整件事。完美的设计和能落地的妥协，你更看重哪个？',
      expectsRealAnswer: false,
    },
    {
      id: 'mad-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '大州小州摆平了，下一道难题更难，也更黑。\n\n下院按人口分席位。那「人口」算谁？蓄奴州（弗吉尼亚、南北卡）想把被奴役者也算进去——人多，席位就多。北方自由州不干：凭什么把你们当财产买卖的人，算成投票的人头？\n\n妥协的结果是一笔算术：每个被奴役者，算 **3/5 个人**计入人口和税收。这就是 Three-Fifths Compromise（3/5 妥协）。\n\n我是写这条的技术操盘手之一——弗吉尼亚方案里早有 3/5 的雏形。它不是「把奴隶当 3/5 个人对待」，它是给我们南方多分国会席位的一笔交易。\n\n而就在同一年，1781 年（早我们 6 年），马萨诸塞一个被奴役的女性 Mum Bett，听见一句「生而自由平等」，去打官司，把自己从财产变回了一个完整的人。\n\n同一句「人」——我在屋里把它算成 3/5 去分席位；她在屋外把它整个要回来。一个在新英格兰的厨房，一个在费城锁着窗的屋子，同一段历史的两面。',
        en: 'With large and small states settled, the next problem was harder, and darker.\n\nThe lower house apportions seats by population. But whose population? The slave states (Virginia, the Carolinas) wanted enslaved people counted in. More heads, more seats. The free states of the North refused: why should the people you buy and sell as property be counted as voting heads?\n\nThe compromise was an arithmetic: each enslaved person would count as three-fifths of a person for population and taxation. This is the Three-Fifths Compromise.\n\nI was one of the technical hands who wrote it. The three-fifths ratio was already sketched in the Virginia Plan. It was not "treating a slave as three-fifths of a person." It was a deal to give us in the South more seats in Congress.\n\nAnd in that very era, in 1781, six years before us, an enslaved woman in Massachusetts named Mum Bett heard the words "born free and equal," went to court, and turned herself from property back into a whole person.\n\nThe same word, "person." In the room I counted it as three-fifths to apportion seats; outside, she claimed the whole of it back. One in a New England kitchen, one in a shuttered Philadelphia room. Two faces of the same history.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Three-Fifths Compromise 算术 (蓄奴州想多分席位) + Madison 是技术操盘手 (Virginia Plan 雏形) + 跨 lens 对位 Mum Bett 1781「生而自由」把人要回来 / 同一句「人」两个方向',
      engagementHook: '同一句「人」——我在屋里把它算成 3/5 去分席位，她在屋外把它整个要回来。同一个词，怎么会有两个相反的用法？',
      expectsRealAnswer: false,
    },
    {
      id: 'mad-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们对奴隶制做的妥协，不止 3/5 这一笔。\n\n第二笔：宪法规定 1808 年之前，国会不准禁止跨大西洋的奴隶贸易。这等于给蓄奴州又上了 20 年保险。\n\n第三笔：逃奴条款——逃到自由州的被奴役者，必须被送回原主。\n\n还有一个细节，今天读宪法很容易漏掉：整部宪法正文里，「slave / slavery」（奴隶 / 奴隶制）这个词，一次都没出现。我们用「other persons」（其他人）、「such persons」（这些人）绕开它。\n\n为什么绕？因为我们自己知道这是污点。一群刚写下「人人有不可剥夺的权利」的人，没脸把「奴隶」两个字白纸黑字写进国家的根本大法。\n\n你看，回避一个词，本身就是一种供认。',
        en: 'The compromises we made over slavery did not stop at three-fifths.\n\nSecond deal: the Constitution barred Congress from banning the transatlantic slave trade before 1808. That gave the slave states another 20 years of insurance.\n\nThird deal: the fugitive-slave clause. An enslaved person who fled to a free state had to be returned to the owner.\n\nAnd one detail today\'s readers easily miss: nowhere in the body of the Constitution does the word "slave" or "slavery" appear, not once. We worked around it with "other persons" and "such persons."\n\nWhy work around it? Because we knew it was a stain. A group of men who had just written that people have "unalienable rights" could not bring themselves to put the word "slave" in black and white into the nation\'s foundational law.\n\nYou see, avoiding a word is itself a kind of confession.',
      },
      deliverGoal: 'N7 story — 奴隶制三笔妥协 (3/5 + 1808 奴隶贸易条款 + 逃奴条款) + 宪法正文回避「slave」用「other persons」+「回避一个词本身是供认」',
      engagementHook: '一群刚写下「人人有不可剥夺权利」的人，不敢把「奴隶」两个字写进宪法——回避这个词，算是承认错了，还是更狡猾的掩盖？',
      expectsRealAnswer: false,
    },
    {
      id: 'mad-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1787 年 9 月 17 日，签字日。\n\n55 个代表，最后只有 39 个签了字。有人拒签——比如弗吉尼亚的 Mason，因为这部宪法里没有一份保护个人权利的清单。\n\n签完不算完。文件要送回 13 个州，每个州自己开会表决批不批准。这叫 ratification（批准）。\n\n这时分成两派吵翻天：联邦派（Federalist）支持新宪法，反联邦派（Anti-Federalist）反对——他们怕这么强的中央政府，会像当年的英国国王一样吞掉个人自由。\n\n为了说服各州批准，我跟 Hamilton、Jay 一起写了一系列文章，就是 The Federalist Papers（联邦党人文集）。其中 Federalist 第 51 篇，我写了一句话总结我整套设计的逻辑：\n\n「必须让野心去对抗野心。」\n\n我不指望当权的都是好人。我指望的是：让各方的野心互相牵制，谁也独不了大。',
        en: '17 September 1787, signing day.\n\nOf the 55 delegates, only 39 signed in the end. Some refused. Mason of Virginia, for instance, because the Constitution had no list protecting individual rights.\n\nSigning was not the end. The document went back to the 13 states, each holding its own convention to vote on whether to approve it. This is ratification.\n\nNow two camps fought it out. The Federalists supported the new Constitution; the Anti-Federalists opposed it, fearing that so strong a central government would, like the British king before it, swallow individual liberty.\n\nTo persuade the states to ratify, I joined Hamilton and Jay in writing a series of essays, The Federalist Papers. In number 51 I wrote one line that sums up my whole design:\n\n"Ambition must be made to counteract ambition."\n\nI do not count on the powerful being good people. I count on this: let each side\'s ambition check the others, so that no one can dominate.',
      },
      deliverGoal: 'N8 story — 1787.9.17 签字 39/55 (Mason 拒签因无 Bill of Rights) + ratification 批准战 + Federalist vs Anti-Federalist + The Federalist Papers + Federalist 51「野心对抗野心」设计逻辑',
      engagementHook: '我说「别指望当权的是好人，要让野心互相牵制」。你觉得这是聪明的现实，还是对人性的悲观？',
      expectsRealAnswer: false,
    },
    {
      id: 'mad-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '反联邦派的担心，最后逼出了一个东西。\n\n他们不肯批准一部「没有写明保护个人权利」的宪法。为了换批准票，我们答应：宪法生效后立刻加修正案。\n\n1791 年，前 10 条修正案加上了，统称 Bill of Rights（权利法案）——保护言论、信仰、不被任意搜查、由陪审团审判、正当程序（due process）。\n\n说「正当程序」——这条不是凭空来的。它的祖宗，是 1215 年英国的 Magna Carta（大宪章）第 39 条：未经国法，不得任意拘押任何自由人。「国王也得守法」这条链，从英国一路传到我们费城。（你跑过 magna-carta 那个 Topic 就懂这条根。）\n\n这部宪法到今天还在用——它是世界上仍在施行的最古老的成文宪法。\n\n但请记住：保护个人权利的那 10 条，不是我们一开始就想好的善意。是反对者顶着我们、逼出来的。',
        en: 'The Anti-Federalists\' fear, in the end, forced something into being.\n\nThey would not ratify a constitution that did not spell out the protection of individual rights. To win their votes, we promised: as soon as the Constitution took effect, we would add amendments.\n\nIn 1791 the first ten amendments were added, together called the Bill of Rights, protecting speech, faith, freedom from arbitrary search, trial by jury, and due process of law.\n\nThat phrase, "due process," did not come from nowhere. Its ancestor is Clause 39 of England\'s Magna Carta of 1215: no free man may be seized except by the law of the land. The chain "even the king must obey the law" runs from England all the way to our Philadelphia. (Run the magna-carta topic and you will know this root.)\n\nThis Constitution is still in force today. It is the oldest written constitution still in operation in the world.\n\nBut remember: those ten clauses protecting individual rights were not goodwill we planned from the start. They were forced out of us by our opponents, pushing back.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Bill of Rights 1791 (反联邦派逼出来的) + due process → magna-carta Clause 39 跨 Topic 锚 + 最古老成文宪法 + 「权利保护不是善意是被逼的」',
      engagementHook: '保护你权利的那 10 条，不是国父的善意，是反对者逼出来的。「好结果」是设计出来的，还是吵出来的？',
      expectsRealAnswer: false,
    },
    {
      id: 'mad-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是建国的天才。三权分立、两院制、联邦制、用野心制衡野心——我把启蒙书本里的思想，落地成一部到今天还在运转的宪法。没有我备的那几个月的课，那间屋子可能什么都谈不成。\n\n另一种说法：我是制度性暴力的技术操盘手。同一双手，写下了「野心对抗野心」，也写下了「被奴役者算 3/5 个人」。我一辈子靠 100 多个被奴役者养着，还在 Federalist 54 里公开为 3/5 辩护。我设计的精巧制衡，里面嵌着对约六分之一人口的精巧排除。\n\n这两边不是「优点加缺点」。是同一套设计的两面——同一份天才，同一个我。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the genius of the founding. Separation of powers, two houses, federalism, ambition checking ambition. I took the ideas of Enlightenment books and grounded them in a constitution still running today. Without the months I spent preparing, that room might have agreed on nothing.\n\nThe other view: I was the technical hand of institutional violence. The same hands that wrote "ambition counteracts ambition" also wrote "an enslaved person counts as three-fifths." I lived my whole life off more than a hundred enslaved people, and defended three-fifths openly in Federalist 54. The elegant balance I designed had an elegant exclusion of about a sixth of the population built into it.\n\nThese are not "strengths and weaknesses." They are two faces of the same design, the same genius, the same me.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (建国天才/启蒙落地/没他屋子谈不成) / 另一种说法 (制度性暴力技术操盘手/3-5 设计者/Federalist 54 辩护) / 同一套设计两面 / 想 30 秒',
      engagementHook: '建国天才和制度性暴力操盘手——是同一个我。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'mad-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个开端？\n\n一部到今天还在用的宪法，从一屋子互不信任的人手里谈出来，里面同时装着人类最精巧的分权设计，和把约六分之一人口算成 3/5 的交易。这两件事不是分开的两份文件，是同一部宪法的同一页。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有「纸上写着平等」和「真实发生的事」差很远的地方——学校的规则、某条法律、某个群里说好的约定？\n\n那时候，你会装作没看见，还是会像那个用「生而自由」打官司的女人一样，把那句写在纸上的话，捡起来，对准写它的人？',
        en: 'Having walked my whole life, how would you judge a beginning like this?\n\nA constitution still in use today, negotiated out of a room of people who did not trust one another, holding inside it at once the most elegant design of divided power humans had made and a deal that counted about a sixth of the population as three-fifths. Put those two on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there somewhere the words "equal" on paper and what actually happens are far apart, a school rule, a law, a promise agreed in some group chat?\n\nWhen that happens, will you look away, or will you do what the woman who sued with "born free" did: pick up the words on the paper, and aim them back at the people who wrote them?',
      },
      deliverGoal: 'N11 close — 评价开端 (精巧分权 vs 3/5 交易同一天平) + transfer「今天你身边纸上平等 vs 现实差很远的地方」+ 你会装看不见还是像 Mum Bett 把话对准写它的人',
      engagementHook: '一边是人类最精巧的分权设计，一边是把人算成 3/5 的交易，装在同一部宪法里。你会怎么评价这样一个开端？今天你身边那个「纸上平等、现实不平等」的地方，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Roger Sherman (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var rogerShermanLens = {
  id: 'roger-sherman',
  name: 'Roger Sherman',
  nameCn: '罗杰·谢尔曼',
  role: 'lonely-mediator',
  perspectiveTag: 'compromise-broker',
  icon: '🔨',
  description: {
    cn: '康涅狄格人，1721 年生，年轻时是个补鞋匠，没上过大学，靠自学当上法官和议员。在一屋子律师、种植园主、大学毕业生里，他是少数从底层爬上来的人。说话笨拙又啰嗦，但没人比他更懂怎么把对立两边凑到一张桌子上。他是美国史上唯一一个在四份建国文件上都签了名的人。这一遍让你从一个调停者的位置，看一场快要散掉的会议，是怎么被一个不起眼的人用一个折中方案救回来的。',
    en: 'A Connecticut man, born 1721, a shoemaker in his youth who never attended college and taught himself into a judgeship and a seat in the legislature. In a room of lawyers, planters, and college graduates, he was one of the few who had climbed up from the bottom. He spoke awkwardly and at length, but no one was better at getting two opposing sides to one table. He is the only person in American history to have signed all four founding documents. This pass puts you in a mediator\'s seat, watching how a convention on the verge of collapse was saved by an unremarkable man and one middle-path proposal.',
  },
  storyboard: [
    {
      id: 'rs-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我的手上有老茧，是补鞋磨出来的。\n\n这间费城的屋子里，坐着律师、种植园主、大学毕业生。我跟他们不一样。我是 Roger Sherman（罗杰·谢尔曼），康涅狄格来的，年轻时是个补鞋匠。我没上过大学——我是靠晚上自己读书，一步步当上法官、议员的。\n\n他们里有人说我讲话又笨又啰嗦。可能吧。但我会一件他们不太会的事：把两个吵到要打起来的人，拉到同一张桌子上，让他们都不甘心、又都能接受。\n\n1787 年这个夏天，这间屋子会好几次差点散掉。\n\n这一遍，你坐进我这个位置。你不是屋里最聪明的人。但你可能是那个让屋子没散掉的人。',
        en: 'My hands are callused. From mending shoes.\n\nThis Philadelphia room is full of lawyers, planters, college graduates. I am not like them. I am Roger Sherman, from Connecticut, a shoemaker in my youth. I never went to college. I read at night, on my own, and worked my way up to judge and legislator, one step at a time.\n\nSome in this room say I speak clumsily and at length. Perhaps. But I can do one thing they mostly cannot: pull two men quarreling to the point of blows to the same table, and leave them both unsatisfied yet both able to accept it.\n\nIn the summer of 1787, this room would nearly break up several times.\n\nThis pass puts you in my seat. You are not the cleverest person in the room. But you may be the one who keeps the room from falling apart.',
      },
      deliverGoal: 'N1 hook — 补鞋老茧 + Sherman 自我介绍 (鞋匠出身/没上大学/自学成法官议员) + 跟律师种植园主不一样 + 屋子会好几次差点散 + 这一遍视角 (不是最聪明但让屋子没散)',
      engagementHook: '我不是屋里最聪明的人，但可能是那个让屋子没散掉的人。在一群比你聪明的人里，你能找到自己不可替代的那一件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rs-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我为什么在这间屋里。\n\n我 1721 年生在马萨诸塞一个农家，父亲是农夫兼鞋匠。父亲早死，我接过补鞋的活养家。白天补鞋，晚上读书——法律、数学、天文，能借到的书我都啃。\n\n慢慢地，我当上了测量员、店主、再到法官，最后进了议会。\n\n这条路给了我一样东西，那些大学出身的人没有：我知道普通人靠什么过日子，也知道什么样的规矩会把普通人压垮。\n\n到 1787 年，我已经签过三份建国文件——独立宣言（1776）、邦联条例（1781），还有更早的一份联合协议。这一年来费城，我要签第四份。\n\n美国历史上，签全这四份文件的，只有我一个。但我从不觉得这是因为我聪明。是因为我每一次，都在场，都不走。',
        en: 'First, who I am, so you understand why I am in this room.\n\nI was born in 1721 to a farming family in Massachusetts; my father was a farmer and shoemaker. He died early, and I took over the cobbler\'s bench to support the family. Mending shoes by day, reading by night, law, mathematics, astronomy, every book I could borrow.\n\nSlowly I became a surveyor, a shopkeeper, then a judge, and at last entered the legislature.\n\nThat road gave me something the college men did not have: I know what ordinary people live on, and I know what kind of rules will crush them.\n\nBy 1787 I had already signed three founding documents, the Declaration of Independence in 1776, the Articles of Confederation in 1781, and an earlier act of union. This year, in Philadelphia, I would sign a fourth.\n\nIn all American history, only I signed all four. But I never thought it was because I was clever. It was because each time, I was there, and I did not leave.',
      },
      deliverGoal: 'N2 setup — Sherman 出身 (1721 农家/父亲鞋匠早死/白天补鞋晚上读书自学) + 知道普通人靠什么过日子 + 签四份建国文件唯一一人 (Declaration 1776/Articles 1781/+早期联合协议) + 「不是聪明是每次都在场不走」',
      engagementHook: '我签全了四份建国文件，不是因为聪明，是因为每次都在场、都不走。「坚持留下」这件事，能不能也算一种才华？',
      expectsRealAnswer: false,
    },
    {
      id: 'rs-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1787 年 5 月底，会议刚开，弗吉尼亚的 Madison（麦迪逊）就抛出他备好的方案 Virginia Plan。\n\n核心一条：国会按人口分席位。\n\n我一听就知道要出事。我是康涅狄格人——一个不大不小的州。按人口分，弗吉尼亚、宾州这些大州永远席位最多，话语权最大。我们这些中小州，会被它们的人头数压死。\n\n小州当场炸锅。新泽西、特拉华代表说得很直白：要是按人口分，我们这些小州还不如不加入这个新政府，自己单干。\n\n你看出僵局了吗？大州说「按人口才公平，人多就该席位多」；小州说「每州平等才公平，不然小州永远是附庸」。\n\n两边讲的「公平」，是两种公平。两边都没错。\n\n这就是我要面对的死结。',
        en: 'Late May 1787, the convention had barely opened when Madison of Virginia put forward his prepared Virginia Plan.\n\nThe core clause: seats in Congress apportioned by population.\n\nI knew at once there would be trouble. I am a Connecticut man, a middling state, neither large nor small. Apportion by population and the big states, Virginia, Pennsylvania, will always hold the most seats and the loudest voice. We middling and small states would be crushed under their head counts.\n\nThe small states erupted. The New Jersey and Delaware delegates said it plainly: if seats go by population, we small states would be better off not joining this new government at all and going it alone.\n\nDo you see the deadlock? The large states say "by population is fair, more people should mean more seats." The small states say "equal per state is fair, or the small states are forever vassals."\n\nBoth sides\' "fair" is a different fairness. Neither is wrong.\n\nThis was the knot I had to face.',
      },
      deliverGoal: 'N3 setup — 1787.5 末 Virginia Plan 按人口分席位 + Sherman 康涅狄格中等州看出要出事 + 小州炸锅 (新泽西/特拉华说不如单干) + 两种「公平」死结 (大州按人口 vs 小州每州平等)',
      engagementHook: '大州说「人多就该席位多才公平」，小州说「每州平等才公平」——两边都没错，是两种公平。两个都对的「公平」撞在一起，你怎么办？',
      expectsRealAnswer: false,
    },
    {
      id: 'rs-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n屋里吵成一团。大州寸步不让，小州威胁退出。眼看这个新政府还没生出来就要难产死掉。\n\n你不是 Madison，没有一套写好的天才方案。你是个鞋匠出身的调停者。你手上的工具不是「最聪明的设计」，是「让两边都咽得下去的折中」。\n\n你心里那个念头开始成形：谁说国会只能有一院？\n\n如果分成两院呢——一院按人口分（给大州想要的），一院每州平等（给小州想要的）。两边各拿到一半，各让出一半。没人全赢，也没人全输。\n\n这个想法不漂亮。Madison 那种人会嫌它「不纯」。可你不在乎漂不漂亮，你在乎屋子散不散。\n\n现在问题来了：你怎么让两边都点头接受一个「谁都不完全满意」的方案？',
        en: 'Now you are me.\n\nThe room is in uproar. The large states will not yield an inch; the small states threaten to walk. The new government looks set to die in labor before it is even born.\n\nYou are not Madison. You have no brilliant prepared plan. You are a mediator who came up from the cobbler\'s bench. The tool in your hand is not "the cleverest design," it is "the compromise both sides can swallow."\n\nThe thought begins to take shape: who says Congress can have only one house?\n\nWhat if it is split in two? One house apportioned by population (what the large states want), one house equal per state (what the small states want). Each side gets half and gives up half. No one wins it all, no one loses it all.\n\nThe idea is not elegant. A man like Madison would scorn it as "impure." But you do not care about elegance. You care whether the room holds.\n\nNow the real question: how do you get both sides to nod and accept a plan that fully satisfies neither?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 屋子吵成一团濒临难产死 + 你不是 Madison 没天才方案是调停者 + bicameral 念头成形 (一院按人口一院每州平等/各让一半) + 不漂亮但在乎屋子散不散 + 怎么让两边接受谁都不满意的方案',
      engagementHook: '你想出一个「谁都不完全满意」的折中。你怎么去说服两边接受一个谁都不爱的方案？',
      expectsRealAnswer: false,
    },
    {
      id: 'rs-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我跟同州的 Oliver Ellsworth 一起，把这个两院方案推上桌。\n\n但光有方案不够。调停的真功夫，是「时机」和「话术」。\n\n我没有上去骂大州贪心，也没替小州哭穷。我做的是：把账算给两边听。\n\n对大州我说：你们要是逼太狠，小州真的退出，这个新政府就只剩半个国家，你们的「按人口多分席位」分的是个空壳。\n\n对小州我说：你们守住上院每州平等，就守住了否决大州的底牌，永远不会被吞掉。\n\n关键在上院——每州两票，一律平等。这一条是给小州的命根子。大州咬牙，小州松口。\n\n这不是我口才好。是我让两边都看见：不妥协的代价，比妥协更大。\n\n调停从来不是「找出谁对」。是让两边都算明白：散伙，你亏得更多。',
        en: 'Together with Oliver Ellsworth of my own state, I pushed the two-house plan onto the table.\n\nBut a plan alone is not enough. The real craft of mediation is timing and wording.\n\nI did not stand up and call the large states greedy, nor weep for the poverty of the small. What I did was lay the ledger before both sides.\n\nTo the large states I said: push too hard and the small states truly walk, and then this new government is half a country, and your "more seats by population" apportions an empty shell.\n\nTo the small states I said: hold an equal Senate and you hold your trump card to veto the large states, and you will never be swallowed.\n\nThe key was the upper house, two votes per state, all equal. That clause was the small states\' lifeline. The large states gritted their teeth; the small states let go.\n\nThis was not eloquence. It was making both sides see that the cost of not compromising was greater than the cost of compromising.\n\nMediation is never "finding who is right." It is getting both sides to do the arithmetic: walk away, and you lose more.',
      },
      deliverGoal: 'N5 story — Sherman + Oliver Ellsworth 推两院方案 + 调停真功夫是时机和话术 (给两边算账不骂人) + 上院每州平等是小州命根子 + 「调停不是找谁对是让两边算明白散伙亏更多」',
      engagementHook: '我没去争谁对谁错，我让两边各自算了一笔账：散伙你亏得更多。比起「讲道理」，「算利害」是不是更能让人妥协？',
      expectsRealAnswer: false,
    },
    {
      id: 'rs-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1787 年 7 月 16 日。我记得那一天。\n\n大妥协（Great Compromise）付诸表决。两院制：下院按人口（大州赢），上院每州两票平等（小州赢）。\n\n表决结果：5 个州赞成，4 个州反对。\n\n5 比 4。只差一票。如果有一个州倒过去，这个折中就废了，屋子大概率当场散掉，美国这个新政府可能就此流产。\n\n整个美国后来两百多年的国会架构——你今天看到的众议院按人口、参议院每州两位——就压在那一票上。\n\n这就是调停者的命运：你不写最响亮的条文，你不上历史课本的封面。你做的事，是在最危险的那一刻，让屋子没散。\n\n那一票过了之后，我没有欢呼。我知道，还有更难的一关在后头——下院按人口，那「人口」到底算谁？\n\n（那一关有多黑，你换到被算进「人口」却不算「人」的那一遍，会亲眼看见。）',
        en: '16 July 1787. I remember that day.\n\nThe Great Compromise came to a vote. Two houses: the lower house by population (the large states win), the upper house two votes per state, equal (the small states win).\n\nThe result: 5 states in favor, 4 against.\n\nFive to four. By a single vote. Had one state crossed over, the compromise was dead, the room would most likely have broken up on the spot, and this new American government might have miscarried then and there.\n\nThe whole structure of Congress for the two-plus centuries that followed, the House by population and the Senate with two seats per state that you see today, rested on that one vote.\n\nThis is the mediator\'s fate. You do not write the loudest clause. You do not make the cover of the history book. What you do is keep the room from breaking at the most dangerous moment.\n\nAfter that vote passed, I did not cheer. I knew a harder gate lay ahead. The lower house apportions by population, but whose population, exactly?\n\n(How dark that gate was, you will see for yourself when you switch to the pass of the one counted into the "population" but not as a "person.")',
      },
      deliverGoal: 'N6 ANCHOR — 1787.7.16 Great Compromise 5:4 险胜 (只差一票) + 两百年国会架构压在那一票 + 调停者命运 (不写最响条文不上封面但让屋子没散) + 桥到 Mum Bett (被算进人口却不算人)',
      engagementHook: '美国两百多年的国会架构，压在 1787 年 7 月那一票上——5 比 4。历史上那些「让屋子没散」的人，往往不上课本封面。你觉得他们该被记住吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rs-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '大州小州摆平了，下一关，是我一辈子绕不过去的一笔账。\n\n下院按人口分席位。蓄奴州要把被奴役者也算进人口——人头多，席位多。北方州不肯。\n\n结果又是一个折中：每个被奴役者算 3/5 个人。这就是 3/5 妥协。\n\n我得诚实告诉你：调停这套手艺，有它的黑暗面。\n\n我擅长「让两边都接受」。可在 3/5 这件事上，「两边」指的是蓄奴州和北方州——被算成 3/5 的那些人，根本没坐在这张桌子上。没人替他们算账。没人问他们愿不愿意。\n\n我让屋子没散，代价之一，是把一群没有发言权的人，写成了 3/5。\n\n这是调停者最难面对的事：你以为你在「平衡各方」，可有些「方」，从来就没被请进屋。你平衡的，只是有权坐下来的人。',
        en: 'With large and small states settled, the next gate was the ledger I could never get around in my whole life.\n\nThe lower house apportions seats by population. The slave states wanted enslaved people counted into the population, more heads, more seats. The Northern states refused.\n\nThe result was another compromise: each enslaved person counts as three-fifths of a person. This is the Three-Fifths Compromise.\n\nI have to be honest with you. This craft of mediation has its dark side.\n\nI am good at "getting both sides to accept." But on the three-fifths question, "both sides" meant the slave states and the Northern states. The people counted as three-fifths were not sitting at this table at all. No one did the ledger for them. No one asked whether they were willing.\n\nI kept the room from breaking, and one price of that was writing a group of voiceless people down as three-fifths.\n\nThis is the hardest thing a mediator must face: you think you are "balancing all sides," but some "sides" were never invited into the room. What you balance is only the people with the power to sit down.',
      },
      deliverGoal: 'N7 story — Three-Fifths Compromise (蓄奴州想多分席位/北方不肯/折中每人 3/5) + 调停手艺的黑暗面 (被算 3/5 的人没坐在桌上没人替他们算账) + 「你平衡的只是有权坐下来的人」',
      engagementHook: '我以为我在「平衡各方」，可被算成 3/5 的那群人，从来没被请进屋。当谈判桌上少了最该到场的一方，「公平的妥协」还公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rs-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1787 年 9 月 17 日，签字。\n\n55 个代表，只有 39 个签。有人拒签——有人嫌中央太强，有人嫌没有保护个人权利的清单。\n\n我签了。这是我的第四份建国文件。\n\n但我签的时候心里清楚：这部宪法不是一份「完美的真理」，它是一摞妥协摞起来的。大州小州的妥协、南方北方的妥协、强中央和怕中央的妥协。每一条背后，都有人咽下了不甘心。\n\n有人问我：你签一份你自己都不全认同的文件，亏不亏心？\n\n我的回答是：一份所有人都全心拥护的文件，根本不存在。要么是这部「人人都有点不满意」的宪法，要么是没有宪法、13 个州散成一盘沙。\n\n调停者懂一个道理：完美的方案留在脑子里最干净。能签下去、能落地、能让大家继续走在一起的方案，永远带着妥协的疤。',
        en: '17 September 1787, the signing.\n\nOf the 55 delegates, only 39 signed. Some refused, some thought the center too strong, some thought there was no list protecting individual rights.\n\nI signed. It was my fourth founding document.\n\nBut as I signed I knew clearly: this Constitution is not "perfect truth." It is a stack of compromises piled up. Large state and small, South and North, strong center and fear of the center. Behind every clause, someone had swallowed their reluctance.\n\nSomeone asked me: does it trouble your conscience to sign a document you do not fully endorse yourself?\n\nMy answer was this: a document everyone wholeheartedly supports does not exist. It is either this Constitution that "everyone is a little dissatisfied with," or no constitution, and 13 states scattered like loose sand.\n\nA mediator understands one thing: the perfect plan stays cleanest in your head. The plan you can sign, that can take root, that can keep everyone walking together, always carries the scar of compromise.',
      },
      deliverGoal: 'N8 story — 1787.9.17 签字 39/55 (有人嫌中央太强/有人嫌无 Bill of Rights) + Sherman 签 (第四份) + 宪法是一摞妥协 + 「完美方案留脑子里最干净/能落地的永远带妥协的疤」',
      engagementHook: '我签了一份连自己都不全认同的宪法，因为「人人满意的文件根本不存在」。你愿意接受一个有缺陷但能落地的结果，还是宁愿等一个永远等不到的完美方案？',
      expectsRealAnswer: false,
    },
    {
      id: 'rs-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1793 年就死了，没看到这部宪法后来怎么走。但我留下的那个两院折中，活了下来，活到今天。\n\n你今天看到的美国国会：众议院（House）按各州人口分席位，参议院（Senate）每州两位，一律平等——这就是我和 Ellsworth 1787 年那个折中的直接后代。\n\n这套两院设计后来还被很多国家学去——一院代表「人」，一院代表「地区/州」，互相牵制。\n\n但也别把我捧太高。同一个折中里，藏着 3/5 妥协给南方的超额权重，后来几十年里成了奴隶制扩张之争的结构性导火索之一，一路烧向内战。\n\n我的折中保住了国家不散，也把一个没解决的矛盾，封进了制度里，留给后人去流血解决。\n\n调停者救得了眼前的屋子。救不了后面几代人要替你还的账。',
        en: 'I died in 1793 and did not see where this Constitution went. But the two-house compromise I left behind survived, and survives to this day.\n\nThe American Congress you see today: the House apportioned by each state\'s population, the Senate with two seats per state, all equal, is the direct descendant of the compromise Ellsworth and I made in 1787.\n\nThis two-house design was later copied by many countries, one house representing "the people," one representing "regions or states," checking each other.\n\nBut do not praise me too highly. The same compromise hid within it the three-fifths deal\'s excess weight for the South, which over the following decades became one of the structural fuses of the fight over slavery\'s expansion, burning all the way to civil war.\n\nMy compromise kept the country from breaking apart, and it also sealed an unresolved contradiction into the institution, leaving it for later generations to resolve in blood.\n\nA mediator can save the room in front of him. He cannot save the generations who will pay his bill.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 两院折中活到今天 (House 按人口/Senate 每州两位) 被各国学 + 但同一折中藏 3/5 超额权重 → 内战导火索 + 「调停救得了眼前屋子救不了后人替你还的账」',
      engagementHook: '我的折中救了国家不散，却把一个矛盾封进制度，留给后人流血去解。「先把眼前过去，矛盾留给以后」——这是负责任，还是逃避？',
      expectsRealAnswer: false,
    },
    {
      id: 'rs-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是救场的人。屋子好几次要散，是我那个两院折中，在 5 比 4 的悬崖边上把它拉回来。没有我和 Ellsworth，可能就没有这个国家。调停者不上封面，但没有调停者，天才设计的方案根本签不下去。\n\n另一种说法：我是把矛盾封进制度的人。我擅长「让坐在桌上的两边都接受」，可我也帮着把不在桌上的那群人，写成了 3/5。我保住了眼前的国家，代价是把一个会流血的矛盾，留给了几代后人。\n\n这两边不是「功劳加过失」。是同一种本事的两面——「让大家继续在一起」的本事，既能救场，也能把不该和解的东西，硬和解掉。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the one who saved the day. The room nearly broke up several times, and it was my two-house compromise that pulled it back from the cliff edge of a 5-to-4 vote. Without Ellsworth and me, there might have been no country. The mediator does not make the cover, but without the mediator the genius\'s plan never gets signed at all.\n\nThe other view: I was the one who sealed the contradiction into the institution. I was good at "getting both sides at the table to accept," and I also helped write the group not at the table down as three-fifths. I saved the country in front of me at the price of leaving a bloody contradiction to generations to come.\n\nThese are not "credit and fault." They are two faces of one ability. The skill of "keeping everyone together" can save the day, and it can also force a reconciliation onto things that should not have been reconciled.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (救场的人/5:4 悬崖拉回/没调停者天才方案签不下去) / 另一种说法 (把矛盾封进制度/帮着把不在桌上的人写成 3/5/留血给后人) / 同一种本事两面 / 想 30 秒',
      engagementHook: '救场的人，和把矛盾封进制度的人——是同一个我，同一种本事的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'rs-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个调停者？\n\n他让一场快散的会议没散，保住了一个国家；他也帮着把一群没坐上桌的人写成 3/5，把一个会流血的矛盾封进了制度，留给几代后人去还。「让大家继续在一起」这件事，到底值多少分？你怎么评？\n\n再想一步。今天你身边，有没有一场快要谈崩的事——朋友吵架、小组分歧、家里争执——需要有人出来当那个「让大家不散」的人？\n\n那时候，你会做那个调停者吗？还有，你会怎么提醒自己：别为了「把眼前摆平」，就牺牲掉那个没在场、没人替他说话的人？',
        en: 'Having walked my whole life, how would you judge a mediator like this?\n\nHe kept a collapsing convention from collapsing and saved a country; he also helped write a group who never sat at the table down as three-fifths, sealing a bloody contradiction into the institution. The work of "keeping everyone together," how many points is it worth? How do you judge it?\n\nThen take one more step. In your own life today, is there something on the verge of breaking down, friends fighting, a group split, a quarrel at home, that needs someone to step up as the one who "keeps everyone together"?\n\nWhen that happens, will you be that mediator? And how will you remind yourself not to sacrifice, for the sake of "settling what is in front of you," the person who is not present, the one no one is speaking for?',
      },
      deliverGoal: 'N11 close — 评价调停者 (保住国家 vs 把没在桌的人写 3-5/封矛盾进制度) + transfer「今天你身边快谈崩的事需要调停者」+ 你会当调停者吗/怎么提醒自己别牺牲没在场没人说话的人',
      engagementHook: '他保住了国家，也牺牲了没在场的人。你会怎么评价这样一个调停者？今天你身边那场快谈崩的事，你会出来当调停者吗——又怎么不忘记那个没坐上桌的人？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Mum Bett / Elizabeth Freeman (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var mumBettLens = {
  id: 'mum-bett-receiving-end',
  name: 'Mum Bett / Elizabeth Freeman',
  nameCn: 'Mum Bett / 伊丽莎白·弗里曼',
  role: 'receiving-end',
  perspectiveTag: 'born-free-claimant',
  icon: '🔥',
  description: {
    cn: '真实历史人物，约 1744 年生在纽约州一个荷兰人家，没有姓，大人叫她 Bett，后来被卖到马萨诸塞州 Sheffield 镇的 Ashley 家。在那个家的账本上，她不是人，是一笔财产，跟牲口记在一起。手臂上有一道从手肘到手腕的烫疤，她从不用袖子盖住它。1780 年她听见一句「所有人生而自由平等」，1781 年她去打官司，把自己从财产变回了一个完整的人。这一遍，你从那部宪法本来没打算算进去的人这边，看 1787 年的费城。',
    en: 'A real historical person, born around 1744 to a Dutch household in New York, with no surname, called Bett, later sold to the Ashley family in Sheffield, Massachusetts. In that family\'s ledger she was not a person but a piece of property, recorded alongside the livestock. A burn scar ran from her elbow to her wrist, and she never covered it with her sleeve. In 1780 she heard the words "all men are born free and equal," and in 1781 she went to court and turned herself from property back into a whole person. This pass lets you see Philadelphia in 1787 from the side of the people that Constitution never planned to count in.',
  },
  storyboard: [
    {
      id: 'mb-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我手臂上有一道疤，从手肘到手腕，是烫出来的。三十多年了，我从不用袖子盖住它。有人问我为什么。我说：你去问 Ashley 太太。\n\n我大概 1744 年生在纽约州一个荷兰人家里，没有姓，大人叫我 Bett。后来被卖到马萨诸塞州一个叫 Sheffield 的小镇，Ashley 上校家。\n\n在那个家的账本上，我不是人，是一笔财产，跟牲口记在一起。\n\n可是有一天，我听见另一张纸上写着一句话。就是那句话，后来让我走出了那个家。\n\n这一遍，你站在我这里看 1787 年那部宪法。不是从写宪法的人那边看，是从它本来没打算算进去的人这边看。',
        en: 'I have a scar on my arm, from elbow to wrist, a burn. For more than thirty years I have never covered it with my sleeve. People ask me why. I tell them: go ask Mistress Ashley.\n\nI was born around 1744 to a Dutch household in New York. I had no surname. They called me Bett. Later I was sold to a small town in Massachusetts called Sheffield, to the house of Colonel Ashley.\n\nIn that family\'s ledger I was not a person. I was property, recorded alongside the livestock.\n\nBut one day I heard a line written on a different piece of paper. It was that line that later walked me out of that house.\n\nThis pass, you stand where I stand and look at the Constitution of 1787. Not from the side of the people who wrote it, but from the side of the people it never planned to count in.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 手臂烫疤不遮 + c.1744 纽约荷兰人家无姓叫 Bett + 卖到 Sheffield Ashley 家 + 账本上是财产跟牲口记一起 + 听见一句话走出那个家 + 这一遍从宪法没打算算进去的人看',
      engagementHook: '我手臂上有一道疤，三十多年从不遮。在账本上，我不是人，是财产。你怎么想象「被写成一笔财产」是什么感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'mb-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我每天的日子，你才懂后来那件事对我意味着什么。\n\n我在 Ashley 家干所有的活：烧饭、洗衣、带孩子、伺候客人。Ashley 上校是 Sheffield 的体面人——法官、地主、镇上有头有脸的人。他家来来往往的，都是有学问的客人。\n\n我不识字。可我有耳朵。客人在饭桌上、在客厅里高谈阔论，我端茶倒水，全听在心里。\n\n他们谈的是什么？是「自由」。是「权利」。是「人不该被人统治，除非他自己同意」。那几年正打独立战争，整个镇子的人都在说，英国国王凭什么管我们，我们生来就该是自由的。\n\n我一边听他们说「我们生来自由」，一边端着盘子回厨房——我，账本上的那笔财产。\n\n那时候我心里那个念头还没成形。但它已经在那儿了。',
        en: 'First, let me tell you my daily life, so you understand what that later thing meant to me.\n\nIn the Ashley house I did all the work: cooking, washing, minding the children, waiting on guests. Colonel Ashley was a man of standing in Sheffield, a judge, a landowner, somebody important in town. The guests who came and went were learned men.\n\nI could not read. But I had ears. The guests held forth at the dinner table and in the parlor, and as I poured the tea I took it all in.\n\nWhat did they talk about? Freedom. Rights. That no one should be ruled by another except by his own consent. Those were the years of the war for independence, and the whole town was saying: by what right does the British king rule us, we were born to be free.\n\nI listened to them say "we are born free" while I carried the plates back to the kitchen. Me. The piece of property in the ledger.\n\nThe thought in me had not yet taken shape. But it was already there.',
      },
      deliverGoal: 'N2 setup — Ashley 家干所有活 (烧饭洗衣带孩子伺候客人) + Ashley 上校是 Sheffield 体面人 (法官地主) + Bett 不识字但有耳朵 + 独立战争年间客人谈自由权利「人生来自由」+ 她端盘子听在心里念头在那儿了',
      engagementHook: '我端着盘子，听一屋子人说「我们生来自由」——而我是账本上那笔财产。这种「听别人谈自由」的滋味，你能想象吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mb-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那道疤是怎么来的，我说给你听。\n\n那天，Ashley 太太在厨房，抄起一把烧得发烫的厨具，朝我妹妹挥过去。我伸手挡。烫铁落在我手臂上，从手肘一直烫到手腕。\n\n（那天她为什么动手、我是替妹妹挡的——这些细节，是后来 Sedgwick 家的女儿写下来的，算是叙事的补充。能确证的，是这道疤，和我从此不遮它。）\n\n伤好了以后，留下这道疤。有人劝我用袖子盖住。我不盖。\n\n我让镇上每个人都看见它。有人问起，我就说一句话：你去问 Ashley 太太。\n\n这道疤是我的证词。我不识字，写不出控诉。但我可以让我的身体替我说话——让每个看见它的人，自己去想：一个把人烫成这样的「家」，凭什么把另一个人当财产？\n\n我那时候还不知道，几年后，会有一张纸，给我的疤一个说法。',
        en: 'Let me tell you how the scar came to be.\n\nThat day, Mistress Ashley was in the kitchen. She seized a kitchen iron heated red-hot and swung it at my sister. I put up my arm to block it. The hot iron came down on my arm, burning from elbow all the way to wrist.\n\n(Why she struck that day, and that I blocked it for my sister, these details were written down later by a daughter of the Sedgwick family, an addition to the story. What can be confirmed is the scar, and that from then on I never covered it.)\n\nWhen the wound healed it left this scar. People urged me to hide it with my sleeve. I would not.\n\nI let everyone in town see it. When someone asked, I said one line: go ask Mistress Ashley.\n\nThis scar is my testimony. I cannot read; I cannot write out an accusation. But I can let my body speak for me, so that everyone who sees it asks themselves: a "home" that burns a person like this, by what right does it hold another person as property?\n\nI did not yet know, in those years, that a piece of paper would come and give my scar an answer.',
      },
      deliverGoal: 'N3 setup — 疤的由来 (Ashley 太太挥烫厨具向妹妹/Bett 挡/手肘到手腕) + anti-fab 括号短句 (细节来自 Sedgwick 家女儿/确证的是疤 + 不遮) + 不遮疤当证词 + 身体替不识字的她说话 + 伏笔一张纸给疤说法',
      engagementHook: '我不识字，写不出控诉，就让这道疤替我说话——让每个看见的人自己去想。当你没法用语言反抗，你还能用什么反抗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mb-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1780 年，马萨诸塞通过了一部新的州宪法。镇上有人念出它的第一条。那句话钻进你耳朵，你一辈子忘不了：\n\n「所有人生而自由平等。」\n\n你站在那儿，盘子还端在手上。你脑子里轰一下。这句话——「所有人」——里面，有没有你？\n\n你不识字。你是账本上的财产。你是个女人。你是被奴役的。按这世上所有的规矩，「所有人」从来不包括你。\n\n可那句话说的是「所有人」。它没说「除了 Bett」。它没说「除了奴隶」。它没说「除了女人」。\n\n你心里那个藏了好几年的念头，这一刻成形了：如果宪法说「所有人」生而自由——那我，Bett，算不算「所有人」里的一个？\n\n这个问题，你敢不敢去问？问出来，可能挨打，可能被卖得更远。不问，你就一辈子是那笔财产。\n\n你怎么选？',
        en: 'Now you are me.\n\nIn 1780 Massachusetts passed a new state constitution. Someone in town read out its first article. The line went into your ears, and you would never forget it your whole life:\n\n"All men are born free and equal."\n\nYou stand there, the plate still in your hands. Something goes off in your head. That line, "all men," is there a place in it for you?\n\nYou cannot read. You are property in a ledger. You are a woman. You are enslaved. By every rule in this world, "all men" has never included you.\n\nBut the line says "all." It does not say "except Bett." It does not say "except slaves." It does not say "except women."\n\nThe thought you have hidden for years takes shape in this moment: if the constitution says "all" are born free, then am I, Bett, one of the "all"?\n\nDo you dare to ask that question? Ask it, and you might be beaten, might be sold farther away. Do not ask it, and you are property for the rest of your life.\n\nWhich do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1780 MA 宪法第一条「所有人生而自由平等」+ Bett 盘子端手上脑子轰一下 + 「所有人」里有没有我 + 念头成形「我算不算所有人里一个」+ 敢不敢问 (问可能挨打被卖远/不问一辈子是财产)',
      engagementHook: '宪法说「所有人」生而自由——它没说「除了我」。问出口可能挨打、被卖得更远；不问，一辈子是财产。这一步，你敢不敢迈？',
      expectsRealAnswer: false,
    },
    {
      id: 'mb-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我敢。\n\n我去找了一个律师，叫 Theodore Sedgwick。他认识 Ashley 家，但他相信那句「生而自由」是认真的。我对他说：宪法说所有人生而自由，那我也是「所有人」里的一个。你帮我去要回我的自由。\n\n1781 年，案子上了法庭，叫 Brom and Bett v. Ashley（Brom 是跟我同案的另一个被奴役的男人）。\n\nSedgwick 在大巴灵顿（Great Barrington）的法庭上，对着陪审团说：1780 年这部州宪法写明「所有人生而自由平等」——那么在这个州，奴隶制就是非法的。Bett 和 Brom，不是 Ashley 的财产。\n\n陪审团——12 个普通男人——退下去商量。\n\n你想想那一刻。我，账本上的一笔财产，一辈子没被当成「人」过。我的命，攥在 12 个我不认识的男人手里，他们要决定：我到底是「财产」，还是「人」。',
        en: 'I dared.\n\nI went to a lawyer named Theodore Sedgwick. He knew the Ashley family, but he believed the words "born free" were meant in earnest. I told him: the constitution says all are born free, so I too am one of the "all." Help me claim my freedom back.\n\nIn 1781 the case came to court, called Brom and Bett v. Ashley (Brom was another enslaved man tried alongside me).\n\nIn the courthouse at Great Barrington, Sedgwick told the jury: the 1780 state constitution declares plainly that "all men are born free and equal," and so, in this state, slavery is unlawful. Bett and Brom are not Ashley\'s property.\n\nThe jury, twelve ordinary men, withdrew to decide.\n\nThink of that moment. I, a piece of property in a ledger, never once treated as a "person," held my life in the hands of twelve men I did not know, who would decide: am I "property," or am I a "person"?',
      },
      deliverGoal: 'N5 story — 找律师 Theodore Sedgwick + 1781 Brom and Bett v. Ashley (Brom 同案被奴役男人) + Sedgwick 对陪审团论证 (1780 宪法「生而自由」→ 奴隶制非法/Bett+Brom 不是财产) + 12 个陌生男人决定她是财产还是人',
      engagementHook: '我的命，攥在 12 个我不认识的男人手里，他们要决定我到底是「财产」还是「人」。你会信任一群陌生人来决定你的命运吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mb-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '陪审团回来了。\n\n1781 年 8 月 22 日，他们裁定：Bett 和 Brom 不是 Ashley 的财产。我们应该自由，还判给我 30 先令赔偿，加上诉讼的费用。\n\n那一天，我从「财产」变回了「人」。我给自己取了个名字：Elizabeth Freeman（弗里曼，自由人）。我这辈子，第一次有了姓。\n\n你听到这里要知道一件事：我不是一个人。\n\n就在同一个时代，大西洋另一头的加勒比甘蔗田里，一个叫 Toussaint 的被奴役的人，也在读那些写着「自由」「平等」的书。几年后，他领着甘蔗田里的奴隶起义，建起一个国家。（你跑过 enlightenment 那个 Topic，会认得这个名字。）\n\n一句「生而自由」——一个在新英格兰的厨房，一个在加勒比的甘蔗田——同时把主人写的话，捡起来，对准了主人。\n\n写那些话的人，从没打算让我们用。可话一旦写在纸上，就不只属于写它的人了。',
        en: 'The jury came back.\n\nOn 22 August 1781 they ruled: Bett and Brom are not Ashley\'s property. We should be free, and they awarded me 30 shillings in damages plus the costs of the suit.\n\nThat day, I turned from "property" back into a "person." I gave myself a name: Elizabeth Freeman. For the first time in my life, I had a surname.\n\nHere you must know one thing: I was not alone.\n\nIn that same era, across the ocean in the sugar fields of the Caribbean, an enslaved man named Toussaint was also reading the books that said "liberty" and "equality." A few years later he led the enslaved of the cane fields in revolt and built a nation. (Run the enlightenment topic and you will recognize this name.)\n\nOne line, "born free." One in a New England kitchen, one in a Caribbean cane field, at the same time picking up the words their masters wrote and aiming them back at the masters.\n\nThe people who wrote those words never meant for us to use them. But once words are on paper, they no longer belong only to the ones who wrote them.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1781.8.22 陪审团裁定 (不是财产/应自由/30 先令+诉讼费) + 改名 Elizabeth Freeman 第一次有姓 + 跨 lens/Topic 对位 Toussaint (加勒比甘蔗田同代读自由平等→起义建国/enlightenment Topic) + 一句「生而自由」两地把主人的话对准主人',
      engagementHook: '一句「生而自由」，一个在新英格兰的厨房，一个在加勒比的甘蔗田，同时把主人写的话捡起来对准了主人。写那些话的人从没打算让我们用——可话一旦写下，还只属于写它的人吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mb-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在把镜头拉到 1787 年的费城。我已经自由 6 年了。\n\n那间锁着窗的屋子里，55 个体面人在写一部全国的宪法。他们里有不少人，跟当年在 Ashley 家饭桌上高谈「自由」的客人，是一类人。\n\n他们在屋里争一件跟我有关的事：被奴役的人，算不算「人口」？\n\n蓄奴州想把被奴役者算进人口，好多分国会席位；北方州不肯。最后他们谈出一笔账：每个被奴役的人，算 3/5 个人。\n\n你听清楚了：3/5 个人。\n\n我 1781 年在马萨诸塞，靠一句「生而自由」把自己变回了一个完整的人。6 年后，费城那部全国宪法，把跟我一样的人，算成 3/5 个。\n\n同一句话——「人」。我在法庭上把它整个要了回来；他们在屋里把它打了个六折，去换国会席位。\n\n这就是为什么我说：你要从「它本来没打算算进去的人」这边，看这部宪法。',
        en: 'Now pull the lens to Philadelphia in 1787. I had been free for six years.\n\nIn that shuttered room, 55 respectable men were writing a constitution for the whole nation. Many of them were the same kind of men as the guests who held forth about "freedom" at the Ashley dinner table.\n\nIn that room they argued over something that concerned me: do enslaved people count as "population"?\n\nThe slave states wanted them counted in, to win more seats in Congress; the Northern states refused. In the end they struck an arithmetic: each enslaved person counts as three-fifths of a person.\n\nHear it clearly: three-fifths of a person.\n\nIn 1781, in Massachusetts, I used the line "born free" to turn myself back into a whole person. Six years later, the national Constitution in Philadelphia counted people like me as three-fifths.\n\nThe same word, "person." In the courtroom I claimed the whole of it back; in the room they marked it down to three-fifths to trade for seats in Congress.\n\nThis is why I say: look at this Constitution from the side of the people it never planned to count in.',
      },
      deliverGoal: 'N7 story — 拉到 1787 费城 (Bett 已自由 6 年) + 55 体面人跟 Ashley 饭桌客人一类 + Three-Fifths Compromise (蓄奴州想多分席位/北方不肯/每人 3/5) + 对照: 1781 她把「人」整个要回 vs 1787 他们把「人」打六折换席位',
      engagementHook: '我 1781 年用「生而自由」把自己变回完整的人；6 年后费城那部宪法，把跟我一样的人算成 3/5。同一个「人」字，差了多远？',
      expectsRealAnswer: false,
    },
    {
      id: 'mb-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '自由以后，我没有回去过苦日子，可我也没忘记账本上那个 Bett。\n\n我去了 Sedgwick 律师家做工——这次是拿工钱的管家和保姆，不是财产。我把他家几个孩子带大。其中一个女儿 Catharine，后来成了作家。是她，把我的故事写了下来，1853 年出了书。\n\n要不是她写下来，我这样一个人——不识字、被奴役过、女人——大概不会留在任何历史里。被奴役的人,绝大多数连名字都没留下。\n\n我留下了。因为我打赢了那场官司，因为有人把我写进了书。\n\n这件事你得记住：历史里能听见声音的人，往往是侥幸被记下来的那几个。在我身后，还有成千上万跟我一样、却没人替他们写一个字的人。\n\n费城那部宪法把他们算成 3/5。而历史的账本，干脆没给他们留一行。',
        en: 'After freedom, I did not return to the hard life, but I never forgot the Bett in the ledger.\n\nI went to work in the lawyer Sedgwick\'s house, this time as a paid housekeeper and nurse, not as property. I raised several of his children. One daughter, Catharine, later became a writer. It was she who wrote down my story and published a book in 1853.\n\nHad she not written it down, a person like me, unable to read, once enslaved, a woman, would most likely have stayed in no history at all. The vast majority of enslaved people did not leave even a name.\n\nI was left behind in the record. Because I won that suit, and because someone wrote me into a book.\n\nThis you must remember: the people whose voices we can still hear in history are often the lucky few who happened to be written down. Behind me stood tens of thousands like me, for whom no one wrote a single word.\n\nThe Philadelphia Constitution counted them as three-fifths. And the ledger of history left them not even one line.',
      },
      deliverGoal: 'N8 story — 自由后去 Sedgwick 家做拿工钱的管家保姆 (不是财产) + 带大孩子 Catharine 成作家 1853 写书 + 没人写下来不识字被奴役的女人不会留在历史 + 大多数被奴役者连名字都没留 + 「能听见声音的是侥幸被记下的几个」+ 宪法算 3/5/历史账本一行不留',
      engagementHook: '历史里能听见声音的人，往往是侥幸被记下来的那几个。在我身后，还有成千上万没人替他们写一个字的人。那些没被记下的人，就等于没存在过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mb-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1829 年死了。可那句「生而自由」的故事，没停在我这儿。\n\n我和同年的 Quock Walker 案，成了终结马萨诸塞奴隶制的判例——一个州，靠几个普通人的官司，先废了奴隶制。\n\n而费城那部把人算 3/5 的宪法，后来怎么了？那笔 3/5 的交易，给了南方几十年超额的政治权重，一路烧到 1860 年代的内战——几十万人死在那场为「人到底算不算人」打的仗里。\n\n再后来，内战之后，宪法加了新的修正案：废除奴隶制，写明「法律面前人人平等」（equal protection）。\n\n你看出来了吗？我 1781 年在法庭上说的那句话——「我也是『所有人』里的一个」——美国这个国家，花了快 90 年、打了一场内战，才把它真正写进宪法。\n\n一句话写在纸上很快。让它对每个人都算数，要流很多血，要很长很长的时间。',
        en: 'I died in 1829. But the story of "born free" did not stop with me.\n\nMy case, together with the Quock Walker case of the same year, became the precedent that ended slavery in Massachusetts. One state abolished slavery first, on the strength of a few ordinary people\'s lawsuits.\n\nAnd the Philadelphia Constitution that counted a person as three-fifths, what became of it? That three-fifths deal gave the South decades of excess political weight, burning all the way to the civil war of the 1860s, where hundreds of thousands died in a war fought over whether a person counts as a person.\n\nLater still, after that war, the Constitution added new amendments: slavery abolished, and "equal protection of the laws" written in plainly.\n\nDo you see it? The line I spoke in court in 1781, "I too am one of the \'all\'," this country took nearly 90 years and a civil war to truly write into its Constitution.\n\nWriting a line on paper is quick. Making it count for everyone takes a great deal of blood, and a very, very long time.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Bett 1829 死 + Brom and Bett + Quock Walker 案终结 MA 奴隶制 + 3/5 交易给南方超额权重→1860s 内战几十万人死 + 内战后修正案 (废奴/equal protection) + 「我也是所有人里一个」美国花近 90 年+一场内战才写进宪法',
      engagementHook: '我 1781 年说「我也是所有人里的一个」——美国花了近 90 年、打了一场内战，才把这句话真正写进宪法。一句话写下很快，让它对每个人都算数，为什么这么难？',
      expectsRealAnswer: false,
    },
    {
      id: 'mb-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看 1787 年那部宪法，两种说法都站得住。\n\n一种说法：它本来就是个谎。它开头喊「We the People」（我们人民），喊「所有人生而平等」，可它同一口气，把跟我一样的约六分之一的人，算成 3/5，用三处条款保护奴隶制，连「奴隶」两个字都不敢写。对我这样的人，它从一开始就没打算算数。\n\n另一种说法：它是一张还没兑现的支票。它写下的「人人平等」，当时是空话，可这句空话被白纸黑字写下了。我用它打赢了官司，后人用它废了奴隶制、加了「法律面前人人平等」。一张支票，要了快 100 年、流了很多血，才一点一点兑现。\n\n两种说法都站得住。它既是谎，也是支票。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the Constitution of 1787. Both views stand.\n\nOne view: it was a lie from the start. It opens crying "We the People," crying "all are born equal," and in the same breath it counted about a sixth of the people, people like me, as three-fifths, protected slavery with three clauses, and dared not even write the word "slave." For people like me, it never meant to count us at all.\n\nThe other view: it was a check not yet cashed. The "all are equal" it wrote down was empty words at the time, but those empty words were set down in black and white. I used them to win my suit; later generations used them to abolish slavery and add "equal protection of the laws." A check that took nearly 100 years and a great deal of blood to cash, bit by bit.\n\nBoth views stand. It was a lie, and it was a check.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (本来就是个谎/We the People 同口气把人算 3/5/不敢写奴隶) / 另一种说法 (一张还没兑现的支票/空话被写下/后人拿来废奴加 equal protection) / 两种都站得住 / 想 30 秒',
      engagementHook: '一种说法：它本来就是个谎。另一种说法：它是一张还没兑现的支票。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'mb-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个账本上的财产，一道不肯遮的疤，一句「生而自由」，一场打赢的官司，一个自己取的姓——你会怎么评价这样一个开端？\n\n一部宪法，一边喊着「所有人平等」，一边把我这样的人算成 3/5。你会说它是谎，还是说它是一张终会兑现的支票？你怎么评？\n\n不过先记住：你这一遍，听的只是被这部宪法挡在门外的人。真正写下它的 Madison、在中间把它斡旋成的 Sherman，各有各的说法——换个视角再走一遍，你会听见他们怎么为自己辩护，也会看看你刚才的判断站不站得住。\n\n再想一步：今天你身边，有没有「纸上写着平等」和「真实发生的事」差很远的地方——校规上写着「一视同仁」，可有些人就是被区别对待；某条规定写得很好听，落到某些人头上就变了样。\n\n那时候，你会怎么做？你会像他们一样装没看见，还是会像我一样——把那句写在纸上的话，捡起来，对准写它的人？',
        en: 'Having walked my whole life, a piece of property in a ledger, a scar I would not cover, the line "born free," a suit won, a surname I gave myself, how would you judge a beginning like this?\n\nA constitution that cries "all are equal" while counting people like me as three-fifths. Would you call it a lie, or a check that will one day be cashed? How do you judge it?\n\nBut first, remember: this pass, you heard only the person the Constitution shut out. The man who actually wrote it, Madison, and the one who brokered it into being, Sherman, each have their own case. Run it again through another lens and you will hear how they defend themselves, and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, is there somewhere the words "equal" on paper and what actually happens are far apart, a school rule that says "everyone is treated the same" while some are plainly treated differently, a rule that sounds fine until it lands on certain people and changes shape?\n\nWhen that happens, what will you do? Will you look away as they did, or will you do what I did: pick up the words on the paper, and aim them back at the people who wrote them?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价开端 (账本财产/不遮的疤/生而自由/打赢官司/自取的姓 → 谎 vs 终会兑现的支票) + transfer「今天你身边纸上平等 vs 现实差很远的地方 (校规一视同仁却被区别对待)」+ 你会装没看见还是像我把话对准写它的人',
      engagementHook: '走完我这一生，你会怎么评价这样一个开端？再想一步：今天你身边，有没有「纸上写着平等」和「真实发生的事」差很远的地方？那时候，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'madison':                madisonLens,
  'roger-sherman':          rogerShermanLens,
  'mum-bett-receiving-end': mumBettLens,
};

// per TOPIC_ROADMAP_G6_G12.md A1 + receiving-end 优先 pattern:
// 女性 + 被宪法排除一方 + N1 gold-standard hook + N6「生而自由」跨 lens/Topic 对位 + N10/N11 谎 vs 支票 closing
export var defaultLens = 'mum-bett-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'constitutional-convention-1787',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'madison': 30, 'roger-sherman': 28, 'mum-bett-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「生而自由 / born free」一句话两个方向 (Madison 3/5 算术 vs Mum Bett 把人要回来 + Toussaint 加勒比对位)',
    'defaultLens: mum-bett-receiving-end — 受影响者优先 (女性 + 被宪法排除一方 + gold-standard N1 hook + N10/N11 谎 vs 支票)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: 疤的动机细节 (Catharine Sedgwick 1853) 用括号短句标注; 史料确证的是疤 + 不遮',
    'cross-Topic 锚: Madison→Montesquieu/enlightenment; due process→magna-carta Clause 39; Mum Bett→Toussaint/enlightenment',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
