// ─── Antebellum Reform Movements 1830-1850 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 改革年代 · The Antebellum Reform Movements 1830-1850
// CA HSS-8.6 · APUSH Period 4 (1800-1848) · Second Great Awakening → abolition / women's rights / temperance / education & asylum reform
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md + AUTHORING_PIPELINE 第 8/12 条):
//   - stanton                       (perpetrator-actor / driver) — Elizabeth Cady Stanton 1815-1902 / 1848 Seneca Falls 组织者 / Declaration of Sentiments 起草人 / 推动激进变革的发动机
//   - douglass                      (lonely-mediator)            — Frederick Douglass 1818-1895 / 逃奴→报人 (North Star) / 在 Seneca Falls 替女性投票权站台 / 在废奴与女权两场运动之间架桥
//   - enslaved-woman-receiving-end  (receiving-end)              — 一个被奴役的黑人女性 / 改革「关于」的那个人, 却被同代女权运动也排除在外 (双重失声) / DEFAULT
//
// 跨 lens micro-detail (N6 anchor):
//   「all men and women are created equal」一句话 — 一个改革年代, 同一套「平等」语言, 谁把它写进宣言, 谁替它站台, 谁连这张桌子都没被请上:
//   - Stanton (Seneca Falls 讲台) 把 Declaration of Independence 改写成 Declaration of Sentiments — 「人人」里加进了「女人」, 但她想的是白人有产女性
//   - Douglass (Seneca Falls 现场) 唯一替女性投票权公开站台的黑人男性 — 既懂被排除的滋味, 又看见女权运动也在排除别人
//   - 被奴役女性 (棉田/厨房) 改革「关于」她, 却两张桌子 (废奴 + 女权) 都没她的位子 — 同一句「平等」, 离她最远
//
// 跨 Topic 锚 (文字桥, 不要求已 ship):
//   - Stanton Declaration of Sentiments 改写 Declaration of Independence → constitutional-convention-1787 (「We the People」谁被算进去) + slavery-abolition-1850 (废奴运动)
//   - 第二次大觉醒「人可完善」宗教热 → 同代中国 Taiping (洪秀全 1851 也是宗教驱动的剧变冲动) — §8 结构对照
//   - 被奴役女性双重排除 → slavery-abolition-1850 (Tubman/Douglass) — 但本 Topic = 改革年代各运动 + 其内部排除, NOT 地下铁路/奴隶制本身
//
// ⚠️ 与 slavery-abolition-1850 不重叠声明:
//   - slavery-abolition-1850 = 奴隶制本身 + 地下铁路 + Calhoun/Douglass(与 Garrison 决裂)/Tubman
//   - reform-movements-1840 = 改革年代 (第二次大觉醒 → 废奴 + 女权 + 禁酒 + 教育/收容所改革) + 运动内部的排除
//   - Douglass 在两个 Topic 都出现: 那边 = 废奴内部理念派 vs 政治派之争; 这里 = 废奴与女权两场运动之间架桥 (Seneca Falls 站台) — 不同切面
//
// defaultLens = 'enslaved-woman-receiving-end' (受影响者优先 pattern: 被两张改革桌子都排除的女性 + 「改革为谁」的诘问)
//
// STRUCTURE SPEC (shorter format):
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach 550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false (6 total)
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// anti-fab 第8A: Sojourner Truth「Ain't I a Woman?」措辞来自 Frances Gage 1863 重构, 非 1851 逐字记录 — 引用处标「后人重构」
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Elizabeth Cady Stanton (perpetrator-actor / driver)
// ═══════════════════════════════════════════════════════════════════════

export var stantonLens = {
  id: 'stanton',
  name: 'Elizabeth Cady Stanton',
  nameCn: '伊丽莎白·卡迪·斯坦顿',
  role: 'perpetrator-actor',
  perspectiveTag: 'seneca-falls-organizer',
  icon: '✊',
  description: {
    cn: '纽约人，1815 年生在一个法官家里，从小在父亲的律所里翻法律书，发现这套法律对女人有多不公平。1840 年她去伦敦参加一场废奴大会，却被拦在场外——因为她是女人。八年后，1848 年，她在纽约一个叫 Seneca Falls 的小镇，把美国《独立宣言》改写了一句话，掀起了美国女权运动的第一炮。她是那个把事情推起来的人，敢想敢写敢组织。但同一个她，心里那个「人人平等」的「人人」，主要装的是像她一样的白人有产女性。这一遍让你从一个改革发动机内部，看一场运动怎么既推开一扇门，又关上另一扇。',
    en: 'A New Yorker, born 1815 into a judge’s household, who grew up paging through law books in her father’s office and discovered how unjust those laws were to women. In 1840 she traveled to London for an anti-slavery convention and was shut out of the floor, because she was a woman. Eight years later, in 1848, in a small New York town called Seneca Falls, she rewrote one line of the Declaration of Independence and fired the opening shot of the American women’s rights movement. She is the one who pushes things into motion, daring to think, write, and organize. But the same woman’s idea of “all are equal” held, mostly, white propertied women like herself. This pass lets you watch, from inside a reform engine, how one movement can push open one door while closing another.',
  },
  storyboard: [
    {
      id: 'st-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1840 年，伦敦。一场全世界废奴派聚在一起的大会。我跨过大西洋来开会，满心以为我是来并肩作战的。\n\n结果他们告诉我：女代表不能上场，不能发言，不能投票。我们这些女人，被请到一个用绳子拦起来的旁听区，坐在那儿,安静地听男人们讨论怎么解放别人。\n\n我叫 Elizabeth Cady Stanton（伊丽莎白·卡迪·斯坦顿），纽约来的。那一刻我才彻底想明白一件事：一群人聚在这里，喊着要给被奴役的人自由，却连同一个屋子里的女人都不肯让她开口。\n\n那个用绳子拦起来的旁听区，后来变成了一团火。\n\n这一遍，你坐进我这个位置——看一个被关在场外的女人，怎么在八年后，亲手把一场运动点起来。',
        en: 'London, 1840. A convention gathering the world’s anti-slavery campaigners in one room. I crossed the Atlantic for it, certain I had come to fight side by side.\n\nThen they told me: women delegates could not take the floor, could not speak, could not vote. We women were shown to a roped-off gallery, to sit and quietly listen while men debated how to free other people.\n\nI am Elizabeth Cady Stanton, from New York. In that moment one thing came clear to me at last: a roomful of people crying for the freedom of the enslaved would not let a woman in the same room open her mouth.\n\nThat roped-off gallery later turned into a fire.\n\nThis pass puts you in my seat, watching how a woman shut out of the room set a whole movement alight eight years later.',
      },
      deliverGoal: 'N1 hook — 1840 London World Anti-Slavery Convention 女代表被拦旁听区 + Stanton 自我介绍 (纽约人) + 「喊着给别人自由却不让屋里女人开口」的觉醒 + 旁听区变成火 + 这一遍视角设定',
      engagementHook: '一群人聚在一起喊着要给别人自由，却连同屋的女人都不让开口——你被这种「只对一部分人算数」的「平等」噎住过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是怎么长成这样一个人的。\n\n我 1815 年生在纽约州一个叫 Johnstown 的小镇，父亲是法官。我家有规矩、有钱、有书。我小时候最爱泡在父亲的律所里，翻那些厚厚的法律书。\n\n就是在那些书里，我读到了让我一辈子忘不掉的东西：按那个时代的法律，一个女人一旦结婚，她就几乎「消失」了。她的财产归丈夫，她挣的钱归丈夫，连孩子的监护权也是丈夫的。法律上，已婚女人差不多等于不存在。\n\n我去问父亲这公不公平。他叹气，说：法律就是这么写的，孩子。\n\n那时候我就有个念头：写下来的东西，是可以重写的。父亲改不了，不代表没人能改。\n\n这个念头，我憋了很多年。直到 1840 年伦敦那道绳子，把它点着了。',
        en: 'First, how I grew into the person I became.\n\nI was born in 1815 in a small New York town called Johnstown; my father was a judge. Our house had rules, money, and books. As a girl I loved to haunt my father’s law office, turning the pages of those heavy law books.\n\nIt was in those books that I read what I would never forget: under the law of that age, once a woman married, she nearly “vanished.” Her property became her husband’s, the money she earned became his, even guardianship of the children was his. In law, a married woman was close to nonexistent.\n\nI asked my father whether this was fair. He sighed and said: that is how the law is written, child.\n\nAnd I had a thought even then: what is written down can be rewritten. That my father could not change it did not mean no one could.\n\nI carried that thought for years. Until the rope in London, in 1840, set it alight.',
      },
      deliverGoal: 'N2 setup — Stanton 出身 (1815 Johnstown 法官家/泡父亲律所翻法律书) + 发现 coverture (已婚女人法律上几乎消失/财产工资监护权归丈夫) + 「写下来的东西可以重写」念头 + 1840 伦敦点着它',
      engagementHook: '我在父亲的法律书里发现：女人一结婚，在法律上就几乎「消失」了。「写下来的东西可以重写」——你信吗，还是觉得规矩就是规矩？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂我们那个年代，得先懂一阵席卷全国的风。\n\n1800 年前后,一场宗教大复兴扫过美国,叫 Second Great Awakening（第二次大觉醒）。传教士在野地里搭起帐篷,几千人聚在一起祷告、哭喊、悔改。它带来一个特别有劲的想法:人不是生来就坏、只能等死后审判的。人可以变好,社会可以变好,甚至可以「完善」。\n\n这股劲一旦点着,就到处烧。如果世界可以被改好,那为什么不去改?\n\n于是一个又一个改革运动冒出来:有人去戒酒、关酒馆(禁酒运动);有人去办免费的公立学校,让穷孩子也能上学;有人去改造监狱、给精神病人盖体面的收容所;当然,还有人去废奴。\n\n我站在这股浪潮里,问了一个别人没大声问的问题:这么多改革,改来改去,怎么没人来改改「女人的处境」?',
        en: 'To understand our age, you must first understand a wind that swept the whole country.\n\nAround 1800 a great religious revival rolled across America, the Second Great Awakening. Preachers raised tents in the fields, and thousands gathered to pray, weep, and repent. It carried a powerfully energizing idea: people are not born wicked and doomed to wait for judgment after death. People can be made better, society can be made better, even “perfected.”\n\nOnce that energy caught, it burned everywhere. If the world could be made better, then why not go and make it so?\n\nAnd so one reform movement rose after another. Some campaigned to stop drinking and close the taverns (the temperance movement). Some built free public schools so poor children too could learn. Some reformed the prisons and built decent asylums for the mentally ill. And some, of course, went to abolish slavery.\n\nStanding in that tide, I asked a question no one was asking aloud: with all this reforming, how is it that no one comes to reform the condition of women?',
      },
      deliverGoal: 'N3 setup — Second Great Awakening (~1800/野地帐篷复兴/「人可完善」) → 改革浪潮 (禁酒/公立学校/监狱+收容所/废奴) + Stanton 问「这么多改革怎么没人改女人的处境」',
      engagementHook: '那个年代信「人和社会都可以被改好」，于是到处都是改革——可改来改去，没人来改「女人的处境」。一场全是改革的大潮，怎么会漏掉一半人？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1848 年 7 月，一个闷热的下午，你和几个朋友在一户人家喝茶。话题转到女人的处境，越说越气。有人说:光抱怨没用，不如开个会。\n\n你心一横:好，那就开。你们当场定下:就在附近的 Seneca Falls（塞内卡福尔斯）这个小镇，几天后开一场专门讲女人权利的大会。这是美国历史上头一回。\n\n可定下来你就慌了。开会得有个纲领，得有一份文件，把诉求写清楚。写什么?怎么写,才能让人听进去,而不是当成几个女人发牢骚?\n\n你想起小时候在父亲律所读过的那句话——美国《独立宣言》开头:「人人生而平等。」(All men are created equal.)\n\n一个念头冒出来,大胆得让你自己手抖:我不另写一份。我就借这句全美国人都背得出、都奉为神圣的话,把它改一个字。\n\n你会怎么改这一句?',
        en: 'Now you are me.\n\nA sweltering afternoon in July 1848. You and a few friends are taking tea at someone’s home. Talk turns to the condition of women, and the angrier you get the more you say. Someone says: complaining does nothing, why not hold a convention.\n\nYou steel yourself: all right, then let us hold one. On the spot you settle it. In the nearby town of Seneca Falls, in a few days’ time, you will hold a convention devoted to the rights of women. The first such gathering in American history.\n\nBut once it is settled, you panic. A convention needs a program, a document setting the demands out clearly. Write what? Write it how, so people take it in rather than dismiss it as a few women grumbling?\n\nYou remember the line you read as a girl in your father’s office, the opening of the Declaration of Independence: “All men are created equal.”\n\nA thought rises, so bold your own hands shake: I will not write a new document. I will take this line, which every American can recite and holds sacred, and change one word.\n\nHow would you change this line?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1848.7 闷热下午喝茶决定开会 + Seneca Falls 美国头一回女权大会 + 慌于写纲领 + 想起 Declaration of Independence「人人生而平等」+ 大胆念头「不另写就改这句神圣的话一个字」+ 你会怎么改',
      engagementHook: '我不另写一份宣言——我就拿那句全美国都奉为神圣的「人人生而平等」，改一个字。如果是你，你会改哪个字，让它一下子把女人也装进去？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我改了那个字。\n\n我把《独立宣言》的「人人(all men)生而平等」,改成了:「**所有男人和女人(all men and women)生而平等**。」\n\n就加了两个字:and women(和女人)。\n\n这份文件叫 Declaration of Sentiments(《情感宣言》)。我没只改这一句。我照着《独立宣言》的格式,一条条列出女人被剥夺的权利:不能投票、结婚后财产归丈夫、被关在好职业和好学校门外、在教会里没声音。原版宣言控诉英国国王干了哪些坏事,我的版本就控诉「男人」对女人干了哪些坏事。\n\n借这句神圣的话,有它的厉害:你要反驳我,就等于反驳《独立宣言》,等于反驳美国立国的根。\n\n1848 年 7 月 19 到 20 日,大会在 Seneca Falls 一座小教堂里开了两天。来了大约三百人,还有男人。\n\n但最难的一条,我心里没底——投票权。连我身边好些朋友都觉得:要投票权,太超前了,会把人吓跑。',
        en: 'I changed that word.\n\nI took the Declaration of Independence’s “all men are created equal” and made it: “all men and women are created equal.”\n\nJust two words added: and women.\n\nThe document was the Declaration of Sentiments. I did not change only that line. Following the form of the Declaration of Independence, I listed, clause by clause, the rights stripped from women: no vote, property handed to the husband upon marriage, shut out of good professions and good schools, given no voice in the church. Where the original arraigned the wrongs of the British king, my version arraigned the wrongs of “man” against woman.\n\nBorrowing that sacred line had its power: to argue against me was to argue against the Declaration of Independence, against the founding root of America itself.\n\nOn 19 and 20 July 1848 the convention met for two days in a small chapel in Seneca Falls. About three hundred people came, men among them.\n\nBut the hardest clause I was unsure of, in my heart, was the vote. Even several friends beside me felt that demanding the vote was too far ahead, that it would frighten people off.',
      },
      deliverGoal: 'N5 story — 改字「all men」→「all men and women are created equal」+ Declaration of Sentiments 照 Declaration of Independence 格式列女性被剥夺的权利 (投票/财产/职业学校/教会) + 借神圣话的厉害 + 1848.7.19-20 Seneca Falls 小教堂两天约 300 人含男性 + 投票权最难连朋友都觉超前',
      engagementHook: '我借《独立宣言》那句话——你反对我，就等于反对美国立国的根。借一句神圣的话来推自己的主张，是聪明，还是有点投机？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在说那个让我犹豫的投票权，和那个替我把它撑住的人。\n\n大会上,我坚持把「女人应有投票权」这一条写进决议。会场一片反对声,连同台的好友 Lucretia Mott 都劝我:太冒险了,会把整件事拖垮。这一条眼看要被否掉。\n\n这时,一个黑人站起来发言,为这一条公开背书。他是 Frederick Douglass(弗雷德里克·道格拉斯)——逃奴出身,当时全美最有名的废奴演说家、报人。他说:剥夺女人的投票权,和剥夺被奴役者的自由,是同一种错。这一条,他和我站在一起。\n\n他这一站,分量极重。靠着他的支持,投票权那一条,惊险地通过了。\n\n你停一下,想想这个画面:一个曾经被当作财产的黑人男性,站出来替白人女性争投票权。这个改革年代最动人的一幕,恰恰发生在两场本该是「别人的」运动的交叉口。\n\n(他当时心里在想什么,你换到他那一遍可以亲自听。)',
        en: 'Now the vote, the clause that made me hesitate, and the man who held it up for me.\n\nAt the convention I insisted on writing “women ought to have the vote” into the resolutions. The room filled with objection; even my close ally Lucretia Mott urged me that it was too risky, that it would drag the whole thing down. The clause looked set to be voted out.\n\nThen a Black man rose to speak and publicly backed it. He was Frederick Douglass, born into slavery, by then the most famous anti-slavery orator and newspaperman in America. He said: to deny a woman the vote and to deny an enslaved person freedom are the same wrong. On this clause, he stood with me.\n\nHis standing there carried great weight. On the strength of his support, the suffrage clause narrowly passed.\n\nStop a moment and picture it: a Black man once held as property, rising to claim the vote for white women. The most moving scene of this reform age happened, of all places, at the crossing of two movements that were each supposed to be “someone else’s.”\n\n(What was turning in his mind then, you can hear for yourself when you switch to his pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Seneca Falls 投票权一条遭反对 (Mott 都劝太冒险) → Frederick Douglass 起立公开背书 (剥夺女人投票=剥夺奴隶自由同一种错) → 险胜 + 「逃奴黑人替白人女性争投票权」改革交叉口最动人一幕 + 桥到 Douglass lens',
      engagementHook: '一个曾被当作财产的黑人男性，站出来替白人女性争投票权——发生在两场「别人的」运动的交叉口。为什么有时候，懂被排除滋味的人，反而最愿意替别人撑腰？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可这里有一件事，我得诚实跟你讲，哪怕它让我不那么好看。\n\n我那句「所有男人和女人生而平等」,听上去把全天下女人都装了进去。但我心里那个「女人」,主要是像我这样的人:受过教育、有财产、白人。\n\nSeneca Falls 的诉求清单,几乎没有一条是为一个被奴役的黑人女性写的。她不能投票——可她连「人」都还不算,谈何投票?她婚后财产归丈夫——可她自己就是别人的财产。我列的那些「女人的委屈」,对她而言是另一个世界的奢侈烦恼。\n\n更难堪的是后来:内战后争投票权时,我和一些同伴为了让白人女性先拿到票,说过一些贬低黑人男性、用种族偏见拉票的话。\n\n我推开了一扇门。但我同时,把另一群女人,关在了我那扇门外。\n\n一个改革者最难承认的,就是:你为「平等」奋斗的时候,你的「平等」里,可能也藏着一道你自己的绳子。',
        en: 'But here is something I must tell you honestly, even though it makes me look less fine.\n\nMy line, “all men and women are created equal,” sounds as if it held every woman on earth. But the “woman” in my mind was mostly someone like me: educated, propertied, white.\n\nThe list of demands at Seneca Falls had almost nothing written for an enslaved Black woman. She could not vote, but she did not even count as a “person” yet, so what was the vote to her? Her property passed to her husband upon marriage, but she herself was another man’s property. The “grievances of women” I listed were, to her, the luxury troubles of another world.\n\nMore shameful came later: in the fight over suffrage after the Civil War, I and some of my allies, to get white women the vote first, said things that belittled Black men and traded on racial prejudice to win support.\n\nI pushed open one door. And at the same time I shut another group of women out, on the far side of it.\n\nThe hardest thing for a reformer to admit is this: while you fight for “equality,” your “equality” may hide a rope of your own inside it.',
      },
      deliverGoal: 'N7 story — Stanton 诚实自陈: 「女人」主要指白人有产受教育女性 + Seneca Falls 诉求几乎没一条为被奴役黑人女性写 (她连人都不算/自己就是财产) + 内战后为白人女性先拿票说过贬低黑人男性的话 + 「推开一扇门同时关上另一扇/平等里藏着自己的绳子」',
      engagementHook: '我那句「所有女人平等」，心里装的主要是像我这样的白人有产女性。一个为「平等」奋斗的人，怎么会在自己的「平等」里，又藏了一道绳子？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '说回那场运动本身有多难推。\n\nSeneca Falls 开完,报纸炸了——大半是嘲笑。有报纸说我们是「一群不安分的老处女」,说女人要投票是「违背自然、违背上帝」。连一些来开会签了名的人,顶不住舆论压力,后来又把名字撤了。\n\n我没退。我和后来认识的 Susan B. Anthony(苏珊·安东尼)结成搭档,一个写,一个跑——我在家带七个孩子、写演讲稿和文章,她在外面办协会、跑各地组织。我们一干就是几十年。\n\n这场仗有多长?我 1815 年生,1902 年死。我到死都没等到女人能投票。\n\n美国女性拿到全国投票权,是 1920 年——我入土十八年之后。\n\n你看,改革年代点的那把火,有的烧得快,有的要烧几代人。我那句「and women」,我自己一辈子都没看见它兑现。',
        en: 'Back to how hard the movement itself was to push.\n\nWhen Seneca Falls ended, the newspapers blew up, most of it mockery. One paper called us “a pack of restless old maids,” said women voting was “against nature, against God.” Even some who had come and signed their names, unable to bear the public pressure, later withdrew them.\n\nI did not retreat. I formed a partnership with Susan B. Anthony, whom I came to know: one of us wrote, the other traveled. I raised seven children at home and wrote the speeches and the essays; she built the societies and organized across the country. We kept at it for decades.\n\nHow long was this fight? I was born in 1815 and died in 1902. To my death I never lived to see women able to vote.\n\nAmerican women won the national vote in 1920, eighteen years after I was in the ground.\n\nYou see, the fire the reform age lit, some of it burned fast and some of it burned for generations. My line, “and women,” I never once saw redeemed in my own life.',
      },
      deliverGoal: 'N8 story — Seneca Falls 后报纸嘲笑 (老处女/违背自然违背上帝) + 有人撤签名 + Stanton 没退 + 与 Susan B. Anthony 搭档 (一写一跑/Stanton 带七孩子写稿/Anthony 办协会) 几十年 + Stanton 1815-1902 到死没等到女人投票 + 1920 全国投票权 (她死后 18 年)',
      engagementHook: '我 1815 年生、1902 年死，到死都没等到女人能投票——那一天是 1920 年，我入土 18 年后。为一件你自己一辈子都看不到结果的事去奋斗，值吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死后,这把火怎么烧的,我说给你听。\n\nSeneca Falls 那份《情感宣言》,后来被一代代女权运动者奉为起点。1920 年,美国宪法加上第十九修正案——禁止因性别剥夺投票权。我那句「and women」,过了 72 年,总算落到了纸上。\n\n而那个我没解决、还亲手加深过的裂痕——黑人女性的双重排除——也没有跟着自动消失。她们既被很多女权组织当成「二等」,又在黑人争权的运动里被要求「先放下女人的事」。两头都不把她们当完整的自己人。这个结,要再过很久才被正视。\n\n所以别把我神化。我点起了美国女权运动,这是真的。我也在自己的运动里,复制了我最痛恨的那种排除,这也是真的。\n\n改革年代教给我一件冷酷的事:推动进步的人,和制造新的不公的人,常常是同一个人,同一双手。',
        en: 'How the fire burned after my death, let me tell you.\n\nThat Declaration of Sentiments from Seneca Falls was later held by generation after generation of women’s rights campaigners as the starting point. In 1920 the Nineteenth Amendment was added to the Constitution, forbidding the denial of the vote on account of sex. My line, “and women,” after 72 years, finally came to rest on paper.\n\nAnd the rift I never resolved, and helped deepen with my own hands, the double exclusion of Black women, did not simply vanish along with it. They were treated as “second class” by many women’s organizations, and in the movements for Black rights they were told to “set the woman question aside first.” Neither side counted them as fully its own. That knot would take much longer to be faced.\n\nSo do not make a saint of me. I lit the American women’s movement, that is true. I also reproduced, inside my own movement, the very exclusion I most hated, and that is true too.\n\nThe reform age taught me one cold thing: the person who drives progress and the person who makes new injustice are often the same person, the same pair of hands.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 死后 Declaration of Sentiments 成女权起点 + 1920 第十九修正案 (因性别剥夺投票权违宪/「and women」过 72 年落纸) + 黑人女性双重排除没自动消失 (女权组织当二等/黑人运动要她们先放下女人的事) + 「别神化我/驱动进步与制造新不公常是同一双手」',
      engagementHook: '我点起了美国女权运动，也在自己的运动里复制了我最痛恨的那种排除。「推动进步的人」和「制造新不公的人」，怎么会是同一双手？',
      expectsRealAnswer: false,
    },
    {
      id: 'st-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法:我是那个把火点起来的人。是我,在一个连「女人能开会」都被当成笑话的年代,组织了美国第一场女权大会,把「all men」改成「all men and women」,把女人的诉求第一次白纸黑字列了出来。没有 1848 年那两天,后面几代人争来的东西,可能晚来很久。改革,需要有人先敢做那个出头的、被嘲笑的人。\n\n另一种说法:我是一个把别人关在门外的改革者。我那句「平等」,主要为白人有产女性写;被奴役的黑人女性,在我的诉求清单里几乎不存在;内战后我还为了白人女性先拿票,说过贬低黑人男性的话。我一边砸开一道墙,一边砌起另一道。\n\n这两边不是「功劳加缺点」。是同一个发动机的两面——同一股「我来改」的劲,既能推开门,也能划出新的界线。\n\n你怎么看?想 30 秒,写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I am the one who lit the fire. It was I who, in an age when even “women holding a convention” was treated as a joke, organized the first women’s rights convention in America, changed “all men” to “all men and women,” and set women’s demands down in black and white for the first time. Without those two days in 1848, what later generations won might have come much later. Reform needs someone willing to be the first to stick her neck out and be laughed at.\n\nThe other view: I am a reformer who shut others out. My “equality” was written mostly for white propertied women; the enslaved Black woman scarcely existed on my list of demands; and after the Civil War, to get white women the vote first, I said things that belittled Black men. I broke open one wall and built another.\n\nThese are not “merits and faults.” They are two faces of one engine, the same “I will change this” drive that can push a door open and also draw a new line of exclusion.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (点火的人/组织头一场女权大会/改 all men and women/第一次列女性诉求/没 1848 后人晚很久) / 另一种说法 (把别人关门外的改革者/平等为白人有产女性/黑人女性几乎不存在/为白人女性先拿票贬低黑人男性) / 同一个发动机两面 / 想 30 秒',
      engagementHook: '点火的人，和把别人关在门外的改革者——是同一个我，同一股「我来改」的劲。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'st-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,你会怎么评价这样一个改革者?\n\n她在一个把女人当笑话的年代,点起了一整场运动;她也把另一群更没声音的女人,关在了自己那扇门外。这两件事不是分开的两个人,是同一双手、同一年(1848)做的。放在同一个天平上,你怎么称?\n\n再想一步。你身边那些「为大家好」的改革——班级的新规矩、学校的新政策、某个群里说好的「公平」做法——里面,有没有谁,刚好是那个「没被算进去」「没人替他说话」的人?\n\n那时候,你会只顾着推动你认为对的事,还是会停一下,问一句:我这场「为大家」,到底有没有把每一个「大家」都装进去?',
        en: 'Having walked my whole life, how would you judge a reformer like this?\n\nIn an age that treated women as a joke, she lit a whole movement; she also shut another, even more voiceless group of women out, on the far side of her own door. These are not two separate people but one pair of hands, in one year (1848). Put them on the same scale. How do you weigh them?\n\nThen take one more step. In the “for everyone’s good” reforms around you, a new class rule, a new school policy, a “fair” arrangement agreed in some group chat, is there someone who happens to be the one “not counted in,” the one no one speaks for?\n\nWhen that happens, will you only push the thing you believe is right, or will you stop and ask: this “for everyone” of mine, does it actually hold every one of “everyone” inside it?',
      },
      deliverGoal: 'N11 close — 评价改革者 (点起运动 vs 把更没声音的女人关门外/同一双手同一年 1848 同一天平) + transfer「你身边为大家好的改革里有没有没被算进去/没人替他说话的人」+ 你会只顾推动还是停一下问「为大家有没有把每个大家装进去」',
      engagementHook: '她点起一整场运动，也把更没声音的一群人关在门外——同一双手、同一年。你身边那些「为大家好」的改革，有没有谁刚好是那个没被算进去的人？你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Frederick Douglass (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var douglassLens = {
  id: 'douglass',
  name: 'Frederick Douglass',
  nameCn: '弗雷德里克·道格拉斯',
  role: 'lonely-mediator',
  perspectiveTag: 'movement-bridge',
  icon: '📰',
  description: {
    cn: '约 1818 年生在马里兰一个奴隶种植园,不知道自己确切的生日。他偷偷自学认字,二十岁那年逃到北方,成了全美最有名的废奴演说家。1847 年他在纽约罗切斯特办起自己的报纸 North Star(《北极星报》)。1848 年,在那场只关乎女人的 Seneca Falls 大会上,他是唯一站出来替女性投票权公开背书的黑人男性。他一辈子站在好几道夹缝里:黑人和白人之间,激进派和温和派之间,废奴运动和女权运动之间。这一遍让你从一个「架桥的人」内部,看一个既被排除、又懂得替别人撑腰的人,怎么在几股力量中间走钢丝。',
    en: 'Born around 1818 on a Maryland slave plantation, not even knowing his own true birthday. He taught himself to read in secret, escaped north at about twenty, and became the most famous anti-slavery orator in America. In 1847, in Rochester, New York, he founded his own newspaper, the North Star. In 1848, at the Seneca Falls convention that was supposedly only about women, he was the one Black man who rose to publicly back women’s suffrage. He stood his whole life in several seams at once: between Black and white, between radical and moderate, between the anti-slavery and women’s rights movements. This pass lets you watch, from inside a bridge-builder, how a man both excluded and willing to stand up for others walks a tightrope among several forces.',
  },
  storyboard: [
    {
      id: 'dg-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1848 年 7 月,Seneca Falls。一座小教堂里,坐满了来开女权大会的人——几乎全是白人,大多是女人。\n\n我是这屋里唯一的黑人。我也是个男人。按理说,这场会跟我没关系——这是「女人的事」。\n\n可台上正吵一条:女人该不该有投票权。反对声一片,连组织者的好友都说太冒险。眼看这一条要被否掉。\n\n我站了起来。\n\n我叫 Frederick Douglass(弗雷德里克·道格拉斯)。二十多年前,我还是马里兰一个种植园里的奴隶,连自己哪天生的都不知道。我比这屋里任何人都清楚:被剥夺一个权利,是什么滋味。\n\n所以我开口替这条投票权说话。一个曾经被当作财产的黑人,替一屋子白人女性争权利。\n\n这一遍,你坐进我这个位置——一个站在好几道夹缝中间的人。',
        en: 'July 1848, Seneca Falls. A small chapel, full of people come to a women’s rights convention, nearly all white, most of them women.\n\nI was the only Black person in the room. I was also a man. By rights this gathering had nothing to do with me; this was “a women’s matter.”\n\nBut on the floor they were fighting over one clause: whether women should have the vote. Objection on every side; even the organizer’s close friend said it was too risky. The clause looked set to be voted out.\n\nI rose to my feet.\n\nI am Frederick Douglass. Twenty-odd years before, I was a slave on a Maryland plantation, not even knowing the day I was born. I knew, better than anyone in that room, what it is to be stripped of a right.\n\nSo I spoke for that suffrage clause. A man once held as property, claiming a right for a roomful of white women.\n\nThis pass puts you in my seat, a man standing in several seams at once.',
      },
      deliverGoal: 'N1 hook — 1848.7 Seneca Falls 小教堂 (几乎全白人多为女人) + Douglass 唯一黑人也是男人「按理跟我没关系」+ 投票权一条要被否 + 他起立 + 自我介绍 (马里兰种植园奴隶/不知生日/最懂被剥夺权利滋味) + 替白人女性争权 + 站夹缝视角',
      engagementHook: '我是屋里唯一的黑人，还是个男人，这本「不关我事」——可我最懂被剥夺一个权利是什么滋味。你会为一件「跟你没关系」的不公站出来吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'dg-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我从哪里来,你才懂我为什么坐在那间教堂里。\n\n我大约 1818 年生在马里兰一个种植园。奴隶不让知道自己的生日——这是头一件被夺走的东西:你连「我几岁」都说不清,你就更难把自己当成一个完整的人。\n\n那时候,教奴隶认字是犯法的。一个女主人起初偷偷教了我几个字母,后来被丈夫喝止,说:奴隶一识字,就再也压不住了。\n\n那句话反倒点醒了我。我懂了:认字,就是通向自由的路。我用面包跟街上的白人小孩换识字课,在地上、在木板上偷偷练。\n\n我学会了读,也学会了写。后来我把自己的一生写成一本书,1845 年出版,书名就叫《Narrative》(我的人生自述)。我在书里写下了真名、真地方、真主人——这在当时极其危险,等于把自己的逃跑路线公之于众。\n\n但我要让全世界知道:写这本书的,是一个有名有姓、会思考、会写字的人。不是谁的财产。',
        en: 'First, where I came from, so you understand why I was sitting in that chapel.\n\nI was born around 1818 on a Maryland plantation. Slaves were not allowed to know their birthdays, the first thing taken from you: when you cannot even say “how old am I,” it is that much harder to hold yourself as a whole person.\n\nIn those days it was against the law to teach a slave to read. A mistress at first secretly taught me a few letters, until her husband stopped her, saying: let a slave learn to read and you can never hold him down again.\n\nThat line woke me instead. I understood: reading was the road to freedom. I traded bread to white street boys for reading lessons, and practiced in secret on the ground, on scraps of board.\n\nI learned to read, and to write. Later I wrote my own life into a book, published in 1845, titled simply the Narrative. In it I set down my real name, real places, real masters, which at the time was extremely dangerous, as good as publishing my own escape route.\n\nBut I meant the whole world to know: the one who wrote this book is a man with a name, who thinks, who writes. Not anyone’s property.',
      },
      deliverGoal: 'N2 setup — Douglass 出身 (c.1818 马里兰种植园/奴隶不让知生日是头一件被夺走的) + 教奴隶认字犯法 (女主人偷教被丈夫喝止「识字就压不住」反点醒他) + 面包换识字课偷练 + 1845《Narrative》写真名真地方 (极危险=公开逃跑路线) + 「写书的是有名有姓会思考的人不是财产」',
      engagementHook: '主人说「奴隶一识字就再也压不住了」——这句话反而点醒了我:认字就是通向自由的路。你信「能读会写」本身就是一种力量吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'dg-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '逃到北方以后,我成了废奴讲台上的明星。但很快,我撞上了第一道夹缝。\n\n带我入行的白人废奴派,对我有个安排:你上台,讲你挨打、被卖的惨,展示你的伤疤就好。别讲道理,别谈观点——分析留给我们白人来做。有人甚至提醒我:你讲得太好、太有学问了,听众会怀疑你根本不是当过奴隶的人。\n\n你品一下这有多荒唐:他们一边救我出奴役,一边又要我在台上,继续当一个「只会展示伤口、不会思考」的角色。\n\n我不干。我要的不只是「自由」,是「替自己说话」的权利。\n\n1847 年,我搬到纽约罗切斯特,办起自己的报纸,叫 North Star(《北极星报》)——北极星,是逃奴在夜里辨方向、往北走的那颗星。\n\n有了自己的报纸,我才算真正拿回了那支笔:不再由别人替我说,我自己写,自己登。',
        en: 'After I escaped north I became a star on the anti-slavery platform. But soon I hit my first seam.\n\nThe white abolitionists who brought me in had an arrangement for me: get on stage, tell how you were beaten and sold, show your scars, that is all. Do not reason, do not give opinions, leave the analysis to us white men. Some even warned me: you speak too well, too learnedly, the audience will doubt you were ever a slave at all.\n\nTaste how absurd that is: they freed me from bondage with one hand, and with the other wanted me to keep playing, on stage, a man “who only shows his wounds and does not think.”\n\nI would not. What I wanted was not only “freedom” but the right to speak for myself.\n\nIn 1847 I moved to Rochester, New York, and founded my own newspaper, the North Star, after the star a fleeing slave steers by at night, going north.\n\nOnly with my own paper did I truly take back the pen: no longer spoken for by others, I wrote it myself and printed it myself.',
      },
      deliverGoal: 'N3 setup — 逃北后废奴讲台明星 + 第一道夹缝 (白人废奴派要他只展示伤疤别讲道理/警告讲太好听众会怀疑没当过奴隶) + 荒唐 (救他出奴役又要他当只会展示伤口不会思考的角色) + 要替自己说话的权利 + 1847 罗切斯特办 North Star (逃奴夜里辨方向的星) + 拿回那支笔自己写自己登',
      engagementHook: '他们救我出奴役，却又要我在台上只展示伤疤、别讲道理——分析留给白人。「被解放」和「能替自己说话」，是同一件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'dg-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1848 年夏天,你听说附近 Seneca Falls 要开一场女权大会。你大可以不去——你的仗是废奴,这是别人的运动。去了,还可能惹麻烦:有人会说你「不务正业」,有人会说一个黑人男性掺和白人女性的事,不合适。\n\n但你心里有一根弦被拨动了。你这辈子被人按住、不让开口、不让识字、不让替自己说话——现在屋里那群女人,被按住的方式不一样,可那个「按住」的劲,你太熟了。\n\n你去了。\n\n会开到投票权那一条,炸了锅。反对声一片,这一条眼看保不住。你坐在那儿,心里在算:我要不要站起来?\n\n站起来,你就是在替一场「不属于你」的运动出头,可能两头不讨好。不站,这一条大概率被否,而你明明知道它是对的。\n\n你怎么选?',
        en: 'Now you are me.\n\nIn the summer of 1848 you hear that a women’s rights convention is to be held nearby at Seneca Falls. You could easily stay away; your fight is abolition, and this is someone else’s movement. Going might even bring trouble: some will say you are “neglecting your own work,” some will say it is improper for a Black man to meddle in white women’s affairs.\n\nBut a string in you is plucked. All your life you have been held down, not allowed to speak, not allowed to read, not allowed to speak for yourself. The women in that room are held down in a different way, but that force of “holding down,” you know it far too well.\n\nYou go.\n\nThe convention reaches the suffrage clause and erupts. Objection on every side; the clause looks lost. You sit there, doing the arithmetic in your head: do I rise or not?\n\nRise, and you stick your neck out for a movement “not yours,” and may please neither side. Stay seated, and the clause is most likely voted down, though you know plainly it is right.\n\nWhich do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1848 夏听说 Seneca Falls 女权大会 + 大可不去 (废奴是他的仗/别人的运动/去了惹麻烦不务正业+黑人男性掺和白人女性事不合适) + 「被按住」的劲太熟 + 去了 + 投票权炸锅 + 算要不要站 (站两头不讨好/不站对的事被否) + 你怎么选',
      engagementHook: '站起来，我就是替一场「不属于我」的运动出头，可能两头不讨好；不站，我明知对的事会被否掉。换作你，站不站？',
      expectsRealAnswer: false,
    },
    {
      id: 'dg-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我站了起来。\n\n我没有去讲女人有多可怜。我讲的是一条道理:剥夺一个女人的投票权,和剥夺一个被奴役者的自由,是同一种错——都是不让一个人替自己的命运做主。\n\n这话从我嘴里说出来,分量不一样。我不是在「同情」她们。我是在说:我和你们,被按住的根子是一样的。\n\n会场被我说动了。靠着这股劲,投票权那一条,惊险地通过。\n\n后来我把 North Star 的口号印在报头上:「Right is of no sex, truth is of no color.」(正义不分性别,真理不分肤色。)这就是我的立场——一个人的权利,不该因为他是女人,或他是黑人,就打折扣。\n\n这是我一辈子在做的事:在好几场「各管各的」运动之间,架一座桥。让争自由的人看见,你的自由和我的自由,本来就是同一件事。',
        en: 'I rose.\n\nI did not speak of how pitiable women were. I spoke of one principle: to deny a woman the vote and to deny an enslaved person freedom are the same wrong, both refusing a person mastery over her own fate.\n\nFrom my mouth those words carried a different weight. I was not “pitying” them. I was saying: you and I, the root of our being held down is the same.\n\nThe room was moved. On the strength of it, the suffrage clause narrowly passed.\n\nLater I printed the North Star’s motto across its masthead: “Right is of no sex, truth is of no color.” That was my stand, that a person’s rights should not be discounted because she is a woman or because he is Black.\n\nThis is what I did my whole life: between several movements each minding its own, build a bridge. Make those fighting for freedom see that your freedom and my freedom were one thing all along.',
      },
      deliverGoal: 'N5 story — Douglass 起立讲道理 (剥夺女人投票=剥夺奴隶自由同一种错/都是不让人替自己命运做主) + 「不是同情是被按住的根子一样」+ 投票权险胜 + North Star 报头口号「Right is of no sex, truth is of no color」+ 一辈子在各管各的运动间架桥 (你的自由和我的自由是同一件事)',
      engagementHook: '我不是「同情」她们——我说的是:我和你们，被按住的根子一样。比起「我可怜你」，「我们是同一种处境」是不是更能把人连起来？',
      expectsRealAnswer: false,
    },
    {
      id: 'dg-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可架桥的人,站在桥中间,两头都可能踩空。我得诚实告诉你这桥有多难走。\n\n那个改革年代,「平等」是大家共用的一句口号。但每一场运动,都想先要回属于自己的那一份,而且常常是踩着别人要。\n\n这里有一个人,把这道难,活成了她自己:Sojourner Truth(索杰纳·特鲁思)——也是逃奴出身,同时为废奴和女权奔走。一场女权集会上,她据说讲过一段被后人传诵的话,大意是反问:难道我就不是一个女人吗?(后人最有名的那个版本「Ain’t I a Woman?」,其实是 1863 年另一个人事后重构的措辞,不是 1851 年现场的逐字记录——但她确实在场,确实质问了:你们说的「女人」,到底算不算上我这样的黑人女人?)\n\n她戳中的,正是我这座桥最薄的那块板:废奴运动里,黑人女性的「女人」身份常被忽略;女权运动里,她们的「黑人」身份又常被嫌弃。两场运动都说要她,可两场运动都没真把她当完整的自己人。\n\n我能替她们在台上说话。但我没法替她们,坐到那张本该有她们位子的桌子上。',
        en: 'But the one who builds the bridge, standing in its middle, can step into air on either side. I must tell you honestly how hard this bridge is to walk.\n\nIn that reform age, “equality” was a slogan everyone shared. But every movement wanted to claim its own share first, and often claimed it by stepping on others.\n\nHere is one person who lived that difficulty as her own self: Sojourner Truth, also born into slavery, who labored for both abolition and women’s rights. At one women’s gathering she is said to have given a passage later much repeated, the gist a challenge: am I not a woman? (The most famous version, “Ain’t I a Woman?”, is in fact wording reconstructed afterward by someone else in 1863, not a word-for-word record of the 1851 event, but she was there, and she did demand: this “woman” you speak of, does it count one like me, a Black woman, at all?)\n\nWhat she struck was the very thinnest plank of my bridge: in the anti-slavery movement, the “woman” in a Black woman was often overlooked; in the women’s movement, her “Black” was often resented. Both movements said they wanted her, and neither truly counted her as fully its own.\n\nI could speak for them from the platform. But I could not, in their place, take the seat that should have been theirs at that table.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 架桥两头踩空 + 改革年代「平等」共用口号但各运动踩别人要自己那份 + Sojourner Truth (逃奴/兼为废奴女权/「难道我不是女人」+ anti-fab 括号: Ain’t I a Woman 是 1863 重构非 1851 逐字) + 戳中桥最薄的板 (黑人女性两场运动都被漏) + 桥到 receiving-end (我能替她台上说话/没法替她坐上桌)',
      engagementHook: '我能替她们在台上说话，却没法替她们，坐到那张本该有她们位子的桌子上。「替别人发声」和「让别人自己在场」，差在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'dg-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '说回我自己走的那条夹缝路,有多孤独。\n\n带我入行的白人废奴领袖,主张「道德感化」:别碰政治,别碰宪法,靠唤醒人心来废奴。我一开始信。但后来我变了——我认为光靠喊良心不够,得用政治、用选票、用法律去逼。\n\n为了这个分歧,我和老盟友闹翻了。他们说我背叛、说我忘恩。一个逃奴,本该乖乖跟着恩人走,我却自立门户,走自己的路线。\n\n你看出我的处境了吗:在白人废奴派里,我太「黑」也太「有主见」;在一些黑人同伴看来,我又太爱跟白人女权运动搅在一起;在女权运动里,我终究是个男人,是客人。\n\n架桥的人,常常自己没有一个完整属于他的岸。\n\n但我认了这个角色。因为我太清楚:这些运动要是各扫门前雪,谁也成不了事。能把它们连起来的人,总得有人去当——哪怕那个人,站在哪头都觉得自己是外人。',
        en: 'Back to my own seam, and how lonely the walk was.\n\nThe white abolitionist leader who brought me in held to “moral suasion”: do not touch politics, do not touch the Constitution, abolish slavery by waking people’s hearts. At first I believed it. But I changed: I came to think rousing consciences was not enough, that you had to press with politics, with the ballot, with law.\n\nOver that difference I fell out with my old allies. They called me a traitor, called me ungrateful. A fugitive slave was supposed to follow his benefactors obediently, yet I set up on my own and took my own line.\n\nDo you see my position? Among white abolitionists I was too “Black” and too headstrong; to some Black peers I was too tangled up with the white women’s movement; in the women’s movement I was, after all, a man, a guest.\n\nThe bridge-builder often has no shore wholly his own.\n\nBut I took the role. Because I knew too well: if these movements each swept only their own doorstep, none of them would win. Someone has to be the one who connects them, even if that one feels a stranger on every side.',
      },
      deliverGoal: 'N7 story — Douglass 与白人废奴派分歧 (moral suasion 别碰政治宪法 vs 他主张用政治选票法律逼) + 与老盟友闹翻 (被骂背叛忘恩/逃奴该乖乖跟恩人他却自立门户) + 三头外人处境 (白人废奴派嫌太黑太有主见/黑人同伴嫌太搅白人女权/女权运动里他是男人是客人) + 「架桥的人常没有完整属于他的岸」+ 仍认这角色',
      engagementHook: '在白人废奴派里我太黑太有主见，在黑人同伴看来我太搅女权，在女权运动里我又是个男人——架桥的人，站哪头都像外人。这种「哪里都不完全属于」，你尝过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'dg-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这座桥,后来也经历过一场最痛的裂。\n\n内战打完,要给黑人男性投票权(后来的第十五修正案)。问题来了:同时也给女性投票权,还是先给黑人男性?\n\n两边的运动,在这一刻撕开了。一些女权领袖——包括 Seneca Falls 的老同伴——气愤地说:凭什么让黑人男性先于(白人)女性投票?有人甚至说出了带种族偏见的话。\n\n而我选择支持「黑人男性先拿票」。我的理由很沉重:对刚出奴役、还在被私刑、被烧屋的黑人来说,投票是保命的事,等不起。\n\n这一选,让我和一些女权老友决裂。我亲手帮着架起的那座桥,在这一刻,被两头一起拆了一段。\n\n你看,改革从来不是一条所有人手拉手往前走的直路。资源就这么多、机会就这么一扇窗,这一刻该让谁先过——这种问题,会把最该是盟友的人,逼成对手。',
        en: 'My bridge later suffered its most painful crack.\n\nWhen the Civil War ended, the vote was to be given to Black men (the later Fifteenth Amendment). The question came: give women the vote at the same time, or give Black men first?\n\nAt that moment the two movements tore apart. Some women’s leaders, including old allies from Seneca Falls, said in anger: why should Black men vote ahead of (white) women? Some even spoke words laced with racial prejudice.\n\nAnd I chose to support “Black men first.” My reason was a heavy one: for Black people just out of bondage, still being lynched, still having their houses burned, the vote was a matter of survival, and could not wait.\n\nThat choice broke me with some of my old women’s-rights friends. The very bridge I had helped raise was, at that moment, torn at from both ends at once.\n\nYou see, reform is never a straight road where everyone walks forward hand in hand. The resources are only so much, the window of chance only so wide, and “who goes through first” can force the people who should most be allies into rivals.',
      },
      deliverGoal: 'N8 story — 内战后第十五修正案给黑人男性投票权 + 同时给女性还是黑人男性先 → 两运动撕裂 (女权领袖含 Seneca Falls 老同伴气愤为何黑人男性先于白人女性/有人说带种族偏见的话) + Douglass 支持黑人男性先 (刚出奴役还被私刑烧屋投票是保命等不起) + 与女权老友决裂 + 他架的桥被两头拆 + 「资源就这么多机会一扇窗把盟友逼成对手」',
      engagementHook: '一扇窗只够一个人先过：是黑人男性先投票，还是女性先?这种「谁先」的难题，把本该是盟友的人逼成了对手。换你来选，怎么选都对得起良心吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'dg-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1895 年死。临死那天上午,我还去参加了一场女权大会——绕了一大圈,我又回到了那座桥上。\n\n我留下的东西里,有一句话至今还在被引用:「Power concedes nothing without a demand.」(权力,不被索要,就什么也不会让出。)这是我一辈子的信条:自由不是等来的、求来的,是争来的、逼来的。\n\n那个改革年代点起的火,后来怎么样了?废奴,靠一场内战才真正做成;女性投票权,要等到 1920 年;而黑人在南方真正能安全地投上一票,还要再熬到 1960 年代的民权运动。\n\n我架的那些桥,有的断过、修过,有的至今没完全接上。但「你的自由和我的自由是同一件事」这个念头,留了下来。\n\n别把我捧成圣人。我也在「谁先投票」上,做过让老盟友寒心的选择。架桥的人,救得了一时的同盟,救不了每一次都得有人先、有人后的残酷。',
        en: 'I died in 1895. On the morning of that very day I had attended a women’s rights meeting, after a long circle, back on that bridge again.\n\nAmong what I left behind is a line still quoted today: “Power concedes nothing without a demand.” That was the creed of my life: freedom is not waited for or begged for, it is fought for, pressed out.\n\nWhat became of the fire that reform age lit? Abolition was truly accomplished only through a civil war; women’s suffrage had to wait until 1920; and for Black people in the South to truly vote in safety took the civil-rights movement of the 1960s.\n\nThe bridges I built, some broke and were mended, some are not fully joined even now. But the thought “your freedom and my freedom are one thing” was left behind.\n\nDo not make a saint of me. On “who votes first” too, I made a choice that chilled old allies. The bridge-builder can save an alliance for a time, but cannot save the cruelty that, each time, someone must go first and someone must wait.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Douglass 1895 死 (死那天上午还去女权大会绕回桥上) + 名言「Power concedes nothing without a demand」(自由是争来逼来的) + 改革年代火的后续 (废奴靠内战/女性投票 1920/黑人南方安全投票要等 1960s 民权) + 架的桥有的断有的没接上但「你的自由和我的自由是同一件事」留下 + 「别捧圣人/谁先投票寒了老盟友/救不了每次有人先有人后的残酷」',
      engagementHook: '「权力，不被索要，就什么也不会让出」——自由是争来的、逼来的，不是等来的。你信改变靠「等人良心发现」，还是靠「逼出来」？',
      expectsRealAnswer: false,
    },
    {
      id: 'dg-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我,两种说法都站得住。\n\n一种说法:我是那个架桥的人。在一个各运动各扫门前雪的年代,是我站出来,在废奴和女权之间、黑人和白人之间,一次次把断开的人连起来。Seneca Falls 那条投票权,是我帮着保住的。我用一辈子证明:你的自由和我的自由,本来就是同一件事。没有架桥的人,再正义的运动,也只是一座座孤岛。\n\n另一种说法:我也是个会权衡、会取舍的人。在「黑人男性还是女性先投票」上,我选了我这边先,寒了老盟友的心,亲手在自己架的桥上,撕开一道口子。我能替黑人女性在台上说话,却没能让她们真正坐到桌上。我连得起一些人,也连不起另一些人。\n\n这两边不是「伟大加污点」。是同一种处境的两面——一个站在夹缝里的人,既因此能架桥,也因此每一步都在选「先连谁、先放谁」。\n\n你怎么看?想 30 秒,写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I am the one who built the bridge. In an age where every movement swept only its own doorstep, it was I who stood up, between abolition and women’s rights, between Black and white, joining the severed again and again. The suffrage clause at Seneca Falls, I helped hold it up. With my whole life I proved: your freedom and my freedom were one thing all along. Without the bridge-builder, even the most just movements are only so many lonely islands.\n\nThe other view: I am also a man who weighed and chose. On “Black men or women first,” I chose my own side first, chilled old allies, and tore, with my own hand, a gash in the bridge I had built. I could speak for Black women from the platform, yet could not seat them truly at the table. I joined some people, and failed to join others.\n\nThese are not “greatness and a stain.” They are two faces of one position, a man in the seam who can build bridges for that reason, and for that reason, at every step, is choosing “whom to join first, whom to set aside.”\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (架桥的人/各扫门前雪的年代连起断开的人/保住 Seneca Falls 投票权/证明你的自由和我的自由是同一件事/没架桥的人运动只是孤岛) / 另一种说法 (会权衡取舍/谁先投票选自己这边寒老盟友/桥上撕口子/能替黑人女性台上说话没能让她们坐上桌/连得起一些人连不起另一些) / 同一种处境两面 / 想 30 秒',
      engagementHook: '架桥的人，和会取舍、寒了老盟友的人——是同一个站在夹缝里的我。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'dg-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,你会怎么评价这样一个站在夹缝里的人?\n\n他把好几场「各管各的」运动连了起来,也在最关键的「谁先」上,亲手在桥上撕开过口子。他能替没声音的人在台上说话,却没能让他们自己坐到桌上。这些不是两个人,是同一个在夹缝里走钢丝的人。放在同一个天平上,你怎么称?\n\n再想一步。你身边,有没有几拨人,本该是盟友,却为了「先轮到谁」「资源先给谁」吵翻、互相踩?——班里两个小团体、一个项目里争资源的几个组、家里几件都想先办的事。\n\n那时候,有没有可能,需要有人来当那个「架桥的」?如果是你,你愿意去当吗——哪怕你知道,架桥的人,常常两头都不讨好,哪头都觉得你是外人?',
        en: 'Having walked my whole life, how would you judge a man standing in the seam like this?\n\nHe joined several movements each minding their own, and at the most crucial “who first,” he tore, with his own hand, a gash in the bridge. He could speak for the voiceless from the platform, yet could not seat them at the table themselves. These are not two people but one man walking a tightrope in the seam. Put them on the same scale. How do you weigh them?\n\nThen take one more step. Around you, are there groups who ought to be allies, yet who fall out and trample each other over “whose turn first,” “who gets the resources first”, two cliques in your class, several teams fighting for resources on one project, a few things at home all wanting to be done first?\n\nWhen that happens, might someone be needed to be the bridge-builder? If it were you, would you take it on, even knowing that the bridge-builder often pleases neither side, that each side feels you are a stranger?',
      },
      deliverGoal: 'N11 close — 评价夹缝里的人 (连起各运动 vs 谁先上亲手桥上撕口子/能替没声音的人台上说话没能让他们坐上桌/同一个走钢丝的人同一天平) + transfer「你身边本该是盟友却为谁先轮到/资源先给谁吵翻互相踩的几拨人」+ 需不需要架桥的人/你愿意当吗 (哪怕两头不讨好哪头都是外人)',
      engagementHook: '他连起了各场运动，也在「谁先」上撕开过桥。你身边那些本该是盟友、却为「先轮到谁」吵翻互踩的人，需不需要有人来架桥?你愿意当吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: An Enslaved Black Woman (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var enslavedWomanLens = {
  id: 'enslaved-woman-receiving-end',
  name: 'An enslaved woman',
  nameCn: '一个被奴役的女人',
  role: 'receiving-end',
  perspectiveTag: 'doubly-voiceless',
  icon: '🌾',
  description: {
    cn: '这一遍没有一个留在历史里的名字。她是 1840 年代美国南方千千万万被奴役的黑人女性中的一个——在棉田里、在主人的厨房里劳作,既是被买卖的财产,又被自己的主人随意处置身体。北方那场轰轰烈烈的「改革年代」,有一场运动专门「关于」她(废奴),另一场运动专门「关于」女人(女权)——可两张桌子,都没给她留位子。她不识字,没有报纸,进不了任何一座会场。这一遍,你站在那个「改革都在谈论她、却没人请她上桌」的人这边,重新看这个被称颂的「完善人类」的年代:改革,到底是为谁的改革?',
    en: 'This pass carries no name left in the record. She is one of the countless enslaved Black women of the 1840s American South, laboring in the cotton fields and in the master’s kitchen, both a piece of bought-and-sold property and a body the master could use as he pleased. The great “reform age” in the North had one movement supposedly “about” her (abolition) and another supposedly “about” women (women’s rights), and yet neither table kept a seat for her. She could not read, had no newspaper, could enter no hall. This pass puts you with the person whom every reform discussed and no one invited to the table, looking anew at this age praised for “perfecting humanity”: reform, for whom, exactly?',
  },
  storyboard: [
    {
      id: 'ew-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '你想知道我的名字。\n\n我没有一个留下来的名字。账本上,我是「一个女奴,值多少钱」那一行里的数字。我不识字,写不出我的一生;没人替我写;所以一百多年后,你只能叫我「一个被奴役的女人」。\n\n这件事你要先记住:你现在能听见的历史,几乎全是「被记下来的人」的历史。我这样的人——千千万万——没有名字、没有日记、没有一行属于我们的字。\n\n我活在 1840 年代美国南方。白天在棉田,晚上在主人厨房。我是别人的财产,我的身体,连同我生的孩子,都归主人。\n\n那些年,北方很热闹。听说有一群人在开会、写宣言,要解放奴隶,要给女人权利。\n\n他们说的「奴隶」,有我;他们说的「女人」,也有我。\n\n可没有一个人,来问过我。\n\n这一遍,你站在我这里——一个所有改革都在谈论、却没人请上桌的人。',
        en: 'You want to know my name.\n\nI have no name that survives. In the ledger I am a number in the line “one female slave, worth so much.” I cannot read, cannot write out my life; no one wrote it for me; and so, more than a century later, you can only call me “an enslaved woman.”\n\nRemember this first: the history you can hear is almost entirely the history of “the people written down.” People like me, countless, have no name, no diary, not one line of our own.\n\nI lived in the American South of the 1840s. The cotton field by day, the master’s kitchen by night. I was another’s property, and my body, along with the children I bore, belonged to the master.\n\nIn those years the North was astir. They say a group were holding conventions and writing declarations, to free the slaves, to give women rights.\n\nThe “slaves” they spoke of included me; the “women” they spoke of included me too.\n\nAnd not one of them came to ask me.\n\nThis pass, you stand where I stand, a person every reform discussed and no one invited to the table.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 没有留下的名字 (账本上是「一个女奴值多少钱」的数字/不识字没人替写/只能叫「一个被奴役的女人」) + 「你听见的历史几乎全是被记下的人的历史」+ 1840s 南方棉田厨房/身体和孩子归主人 + 北方热闹 (开会写宣言解放奴隶给女人权利) + 「奴隶」「女人」都有我可没人来问我 + 这一遍站在所有改革都谈论却没人请上桌的人这边',
      engagementHook: '他们说的「奴隶」有我，说的「女人」也有我——可没有一个人来问过我。被所有人谈论、却没人来问，是什么滋味?',
      expectsRealAnswer: false,
    },
    {
      id: 'ew-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我每天的日子,你才懂后面那些「宣言」离我有多远。\n\n天没亮我就下棉田。一行一行摘,手指被棉桃的硬壳划得全是口子。摘不够分量,要挨鞭子。日头最毒的时候,也不许停。\n\n收了工,我回到主人家的厨房:烧饭、洗衣、伺候主人一家吃饭。我把饭端上他们的桌子,自己站在一边。\n\n我有孩子。但孩子不是「我的」。主人随时可以把他们卖掉,卖到几百里外,我可能一辈子再也见不到。这种事,我见过别人家发生,也怕它哪天落到我头上。\n\n我的身体,也不归我。主人对我做什么,我没有说不的权利。法律不站在我这边——在法律眼里,我根本不是个能「同意」或「拒绝」的人。\n\n你把我这日子,跟北方那些「女人不能投票、婚后财产归丈夫」的委屈,摆在一起比比看。',
        en: 'First, my daily life, so you understand how far those “declarations” were from me.\n\nBefore dawn I am down in the cotton field. Row after row I pick, my fingers cut all over by the hard husks of the bolls. Pick too little weight, and the whip comes. Even at the fiercest hour of the sun, no stopping.\n\nWork done, I go back to the master’s kitchen: cooking, washing, waiting on the master’s family at their meal. I carry the food to their table and stand to one side.\n\nI have children. But the children are not “mine.” The master can sell them at any time, hundreds of miles away, and I might never see them again my whole life. I have seen it happen to others, and I fear the day it falls on me.\n\nMy body, too, is not mine. Whatever the master does to me, I have no right to say no. The law does not stand with me; in the eyes of the law I am not even a person who can “consent” or “refuse.”\n\nSet this life of mine beside the grievances of those Northern women, “women cannot vote, property goes to the husband after marriage,” and compare.',
      },
      deliverGoal: 'N2 setup — 每天日子 (天没亮下棉田/手被棉桃划破/摘不够挨鞭/日头最毒不许停 + 厨房烧饭洗衣伺候主人一家/端饭站一边) + 孩子不是「我的」(主人随时卖到几百里外) + 身体不归我 (没有说不的权利/法律眼里不是能同意拒绝的人) + 把这日子跟北方女人「不能投票婚后财产归丈夫」的委屈摆一起比',
      engagementHook: '我的孩子主人随时能卖走，我的身体我没有说不的权利。把这日子，跟北方那些「女人不能投票」的委屈摆一起——同一个「女人」，差了多远?',
      expectsRealAnswer: false,
    },
    {
      id: 'ew-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我也听过那个让北方人那么有劲的东西。\n\n主人家里,有时来访客,有时主人读报。他们谈一个新风气:这世道可以变好,人可以变「完善」。他们叫它一场大觉醒。说上帝盼着人去改造这个世界,去除掉世上的恶。\n\n我在一旁端着盘子,听着。我心里冒出一个问题,但我从不敢问出口:你们说要「除掉世上的恶」——那我天天在田里、在你家受的这些,算不算「恶」?\n\n他们谈废奴,谈得很热,有时还掉眼泪。可掉完眼泪,他们照样使唤我,照样靠卖我们产出的棉花过活。\n\n我慢慢看明白一件事:很多人,可以一边真心觉得「奴隶制是恶」,一边一点不耽误从这个「恶」里得好处。\n\n谈论一件不义,和真的放下从这件不义里拿到的东西——是两码事。这中间隔着的距离,我用我的一生丈量过。',
        en: 'I too have heard the thing that gave the Northerners such energy.\n\nIn the master’s house, sometimes guests came, sometimes the master read the paper aloud. They spoke of a new spirit: that the world could be made better, that people could be “perfected.” They called it a great awakening. They said God wished people to remake the world and root out its evils.\n\nI stood to one side with my tray and listened. A question rose in me that I never dared speak: you say you would “root out the world’s evils”, then do the things I suffer every day, in the field and in your house, count as “evil”?\n\nThey spoke of abolition, spoke of it warmly, sometimes even shed tears. But once the tears were done, they set me to work all the same, and lived all the same off the cotton we produced.\n\nSlowly I came to see one thing: many people can sincerely feel “slavery is an evil” while losing not a beat in profiting from that very evil.\n\nTo discuss an injustice, and to truly let go of what you take from that injustice, are two different things. The distance between them I measured with my whole life.',
      },
      deliverGoal: 'N3 setup — 听过 Second Great Awakening (主人读报/谈世道可变好人可完善/大觉醒/上帝盼人改造世界除恶) + 她不敢问出口的问题 (你们要除世上的恶/那我受的算不算恶) + 谈废奴热泪/掉完照样使唤她靠卖棉花活 + 「很多人可一边觉得奴隶制是恶一边从恶里得好处」+ 「谈论不义和真的放下从不义拿的东西是两码事/这距离我用一生丈量」',
      engagementHook: '他们谈废奴谈得掉眼泪，掉完照样使唤我、照样靠卖棉花过活。「真心觉得这是恶」和「真的放下从这个恶里拿的好处」，为什么常常是两码事?',
      expectsRealAnswer: false,
    },
    {
      id: 'ew-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1848 年某天,主人家的客厅里,有人念到一张刚从北方传来的纸。上面说,纽约一个叫 Seneca Falls 的地方,开了一场大会,写了一份宣言。其中一句,你听得清清楚楚:\n\n「所有男人和女人,生而平等。」\n\n你端着盘子,站住了。所有的女人。\n\n你脑子里轰一下,跟很多年里每一次听见「自由」「平等」时一样:这句「所有女人」,有没有我?\n\n但这一次,你想得更深一层。你想起那份宣言列的「女人的委屈」:不能投票、婚后财产归丈夫、进不了好学校。\n\n你低头看看自己的手——棉桃划的口子,厨房烫的疤。你心里清楚:她们争的那些「权利」,我连够都够不着。我不能投票?我连「人」都还不算。我婚后财产归丈夫?我自己就是别人的财产。\n\n这句「所有女人」,听起来把我装进去了。可你越想越明白:它说的「女人」,根本不是我这样的女人。\n\n这一刻,你心里会冒出一个什么样的问题?',
        en: 'Now you are me.\n\nOne day in 1848, in the master’s parlor, someone reads aloud a sheet just come from the North. It says that at a place in New York called Seneca Falls, a convention was held and a declaration written. One line you hear clearly:\n\n“All men and women are created equal.”\n\nYou stand still, the tray in your hands. All women.\n\nSomething goes off in your head, as it has every time over the years you heard “freedom,” “equality”: that “all women,” is there a place in it for me?\n\nBut this time you think a layer deeper. You recall the “grievances of women” that declaration listed: no vote, property to the husband after marriage, shut out of good schools.\n\nYou look down at your own hands, the cuts from the cotton bolls, the burns from the kitchen. You know it plainly: those “rights” they fight for, I cannot even reach. I cannot vote? I do not even count as a “person” yet. My property goes to my husband after marriage? I myself am another’s property.\n\nThat “all women” sounds as if it held me. But the more you think, the clearer it becomes: the “woman” it means is not a woman like me at all.\n\nIn this moment, what question rises in you?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1848 客厅念到北方传来的纸 Seneca Falls 宣言「所有男人和女人生而平等」+ 端盘站住「所有女人有没有我」+ 想深一层 (宣言列的女人委屈: 投票/婚后财产/好学校) + 低头看手 (棉桃口子厨房疤) + 「那些权利我够不着/不能投票我连人都不算/婚后财产归丈夫我自己就是财产」+ 「所有女人听起来装进我可它说的女人不是我这样的」+ 这一刻你心里冒出什么问题',
      engagementHook: '「所有女人生而平等」——听起来把我装进去了。可我连「人」都还不算,谈什么投票?这句话越听越像，说的不是我这样的女人。这一刻，你心里会冒出一个什么问题?',
      expectsRealAnswer: false,
    },
    {
      id: 'ew-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我心里冒出的问题是:你们的这两张桌子,到底有没有一张,是为我摆的?\n\n一张桌子叫「废奴」。它说要解放奴隶。可坐在那张桌子上谈我命运的,大多是北方的白人,还有少数像 Douglass 那样逃出来、能写能讲的黑人男性。我呢?我在南方棉田里,不识字,出不了这个庄园,连「北方有人在替我开会」这事,都是偶然听来的。他们替我谈,但桌上没有我。\n\n另一张桌子叫「女权」。它说要给女人权利。可它列的委屈,是「不能投票、财产归丈夫」——那是有产白人女性的烦恼。我这样的女人,在那张桌子上,也几乎不存在。Stanton 心里的「女人」,主要不是我。\n\n你看出来了吗:一张桌子谈我的「奴隶」身份,却把我的「女人」漏了;另一张桌子谈我的「女人」身份,却把我的「黑人、被奴役」漏了。\n\n我是同一个完整的人。可这两场最进步的运动,各自只认领了我的一半,然后,都没真把我请上桌。',
        en: 'The question that rose in me was: of these two tables of yours, is even one of them set for me?\n\nOne table is called “abolition.” It says it would free the slaves. But those who sit at that table debating my fate are mostly Northern whites, and a few Black men like Douglass who escaped and can write and speak. And I? I am in a Southern cotton field, cannot read, cannot leave this plantation, and even “there are people in the North holding meetings for me” I learned only by chance. They debate on my behalf, but I am not at the table.\n\nThe other table is called “women’s rights.” It says it would give women rights. But the grievances it lists, “cannot vote, property to the husband,” are the troubles of propertied white women. A woman like me scarcely exists at that table either. The “woman” in Stanton’s mind was mostly not me.\n\nDo you see it? One table speaks of my “slave” self and misses my “woman”; the other speaks of my “woman” self and misses my “Black, enslaved.”\n\nI am one whole person. Yet these two most progressive movements each claimed only half of me, and then, neither truly invited me to the table.',
      },
      deliverGoal: 'N5 story — 她的问题: 两张桌子有没有一张为我摆的 + 废奴桌 (说解放奴隶/坐桌的多是北方白人+少数像 Douglass 逃出能写能讲的黑人男性/她在南方棉田不识字出不了庄园连有人替她开会都是偶然听来/替她谈桌上没她) + 女权桌 (说给女人权利/列的委屈是有产白人女性烦恼/她几乎不存在/Stanton 心里的女人主要不是她) + 「一张漏我女人一张漏我黑人被奴役/我是同一个完整的人两场运动各认领一半都没真请我上桌」',
      engagementHook: '一张桌子认领我的「奴隶」身份，漏了我的「女人」;另一张认领我的「女人」，漏了我的「黑人」。我明明是同一个完整的人——为什么两场最进步的运动，都只认领了我的一半?',
      expectsRealAnswer: false,
    },
    {
      id: 'ew-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '不过我得告诉你:不是每一个像我这样的人,都永远沉默。有人替这「两张桌子都不要的人」,在台上喊过一嗓子。\n\n有一个也从奴役里逃出来的黑人女性,Sojourner Truth(索杰纳·特鲁思),既为废奴奔走,也闯进女权的会场。在一次集会上,据说她当着一屋子白人,反问了一句被后人记住的话,大意是:难道我,就不算一个女人吗?(后人最爱引的那句「Ain’t I a Woman?」,其实是 1851 年那次之后,1863 年另一个人重构出来的措辞,不是现场逐字记录。但她那个质问是真的:你们说的「女人」,凭什么把我这样的黑人女人排在外面?)\n\n她问的,正是我心里那个不敢出声的问题。她替我们,把它喊了出来。\n\n你想想这个画面:一个被两张桌子都漏掉的人,自己走上前,质问那张「女人」的桌子:你说的「所有女人」,到底算不算我?\n\n这一嗓子,没有当场改变什么。可它留了下来——它证明,被漏掉的人,不是没有声音,只是没人给她们话筒。',
        en: 'But I must tell you: not every person like me stays silent forever. Someone cried out, from the platform, for those “the two tables both refused.”\n\nThere was a Black woman who also escaped slavery, Sojourner Truth, who labored for abolition and also walked into the women’s halls. At one gathering, before a roomful of white people, she is said to have answered back with a line later remembered, the gist: am I, then, not a woman? (The line later most quoted, “Ain’t I a Woman?”, is in fact wording reconstructed by someone else in 1863, after that 1851 event, not a word-for-word record. But her challenge was real: this “woman” you speak of, by what right does it shut out a Black woman like me?)\n\nWhat she asked was the very question I dared not voice. For us, she cried it out.\n\nPicture it: a person missed by both tables walks up herself and challenges the “women’s” table: this “all women” you speak of, does it count me or not?\n\nThat cry changed nothing on the spot. But it was left behind, it proved that the people who were missed are not without a voice, only without anyone to hand them the microphone.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 不是每个像她的人都沉默 + Sojourner Truth (也从奴役逃出/为废奴也闯女权会场/「难道我不算一个女人」+ anti-fab 括号: Ain’t I a Woman 是 1863 重构非 1851 逐字/但质问真实) + 她问的正是我不敢出声的问题替我们喊出来 + 被两张桌子漏的人自己走上前质问女人的桌子 + 「没当场改变什么但留下了/被漏的人不是没声音只是没人给话筒」',
      engagementHook: '一个被两张桌子都漏掉的人，自己走上前质问:你说的「所有女人」，到底算不算我?被漏掉的人，是真的没有声音，还是只是没人给她们话筒?',
      expectsRealAnswer: false,
    },
    {
      id: 'ew-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可你别误会,以为「有人替我们喊过一嗓子」,事情就好了。\n\nSojourner Truth 那一嗓子,确实留在了历史里。但你想想:整个 1840 年代,南方有几十万、上百万像我这样的黑人女性。能像她那样逃出来、站上台、被人记一笔的,凤毛麟角。\n\n我们绝大多数人,死在棉田里,死在主人家里,连名字都没留下。后人翻遍那个「光辉的改革年代」的记录,翻到的,是 Stanton 的宣言、Douglass 的报纸、各种会议的纪要——几乎翻不到一行,是我们自己写下、自己说出的。\n\n所以你现在听见的这一切,包括我此刻对你说的话,严格讲,也不是「真的我」留下的录音。是后人,用残存的只言片语,替我拼出来的一个声音。\n\n这本身就是那个年代的真相:连「为我们说话」这件事,主动权也不在我们手上。被谈论、被代表、被同情——可就是不被请到桌前,自己开口。',
        en: 'But do not mistake me, do not think that because “someone cried out for us once,” things were then well.\n\nSojourner Truth’s cry did stay in history. But consider: across the whole of the 1840s, the South held hundreds of thousands, even millions, of Black women like me. Those who, like her, could escape, stand on a platform, and be set down in the record, were a rare few.\n\nThe vast majority of us died in the cotton fields, died in the master’s house, leaving not even a name. Later generations search the records of that “glorious reform age” and find Stanton’s declaration, Douglass’s newspaper, the minutes of all those conventions, and scarcely a single line written by us, spoken by us.\n\nSo all you hear now, including these words I speak to you this moment, is strictly not a recording the “real me” left behind. It is a voice later generations pieced together for me, out of surviving scraps.\n\nThis itself is the truth of that age: even “being spoken for” was not in our own hands. Discussed, represented, pitied, and yet not invited to the table to open our own mouths.',
      },
      deliverGoal: 'N7 story — 别误会有人喊一嗓子就好了 + Sojourner Truth 留在历史但 1840s 南方几十万上百万像她的黑人女性能逃出站台被记一笔凤毛麟角 + 绝大多数死棉田主人家连名字没留 + 后人翻光辉改革年代记录 (Stanton 宣言/Douglass 报纸/会议纪要) 翻不到一行我们自己写自己说的 + anti-fab 元层: 你听见的包括我此刻的话不是真的我的录音是后人用残存只言片语拼出的声音 + 「连为我们说话主动权也不在我们手上/被谈论被代表被同情就是不被请到桌前自己开口」',
      engagementHook: '你现在听见的我说的这些话，严格讲也不是「真的我」留下的——是后人用残存的碎片，替我拼出来的声音。连「替我们说话」，主动权都不在我们手上——这意味着什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'ew-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉回北方那间热闹的会场,你会看见一个我每天都在尝的味道。\n\n那个改革年代,有那么多「为他人好」的运动:有人办免费学校,让穷孩子上学;有人改造监狱、给疯人盖体面的收容所;有人戒酒、关酒馆,要救酗酒的家庭。\n\n这些,大多是真心的好意,也确实帮到了一些人。\n\n但你站在我这个位置看,会注意到一件事:这些「为他人好」,几乎都是「有位子的人」,替「没位子的人」做决定。办学校的人,决定穷孩子该学什么;改造收容所的人,替疯人决定怎么算「体面」;开禁酒会的人,替别人决定该不该喝酒。\n\n「为你好」和「请你一起决定」,是两件不一样的事。\n\n而我——被改革谈论得最多的人之一——从来只在第一种里,从来没进过第二种。整个年代对我做的,是「为她好」,不是「请她上桌」。',
        en: 'Pull the lens back to that bustling Northern hall, and you will see a taste I knew every day.\n\nThat reform age had so many movements “for the good of others”: some built free schools so poor children could learn; some reformed prisons and built decent asylums for the mad; some swore off drink and closed the taverns to save families from drunkenness.\n\nThese were, mostly, sincere goodwill, and did truly help some people.\n\nBut standing where I stand, you notice one thing: these “for the good of others” were almost all “people with a seat” deciding for “people without one.” Those who built the schools decided what poor children should learn; those who reformed the asylums decided for the mad what counts as “decent”; those who held the temperance meetings decided for others whether they should drink.\n\n“For your good” and “invited to decide with you” are two different things.\n\nAnd I, one of the most discussed people of reform, was only ever in the first, never in the second. What that whole age did to me was “for her good,” not “invite her to the table.”',
      },
      deliverGoal: 'N8 story — 拉回北方会场 + 改革年代很多为他人好的运动 (免费学校穷孩子上学/改造监狱给疯人体面收容所/禁酒关酒馆救酗酒家庭) 大多真心好意确实帮到人 + 但从她位置看: 几乎都是有位子的人替没位子的人做决定 (办学决定穷孩子学什么/收容所替疯人决定怎么算体面/禁酒会替别人决定该不该喝) + 「为你好和请你一起决定是两件事」+ 她被谈论最多却只在第一种从没进第二种 (整个年代对她是为她好不是请她上桌)',
      engagementHook: '那些「为他人好」的改革——办学校、改收容所、戒酒——几乎都是有位子的人，替没位子的人做决定。「为你好」和「请你一起决定」，差在哪里?',
      expectsRealAnswer: false,
    },
    {
      id: 'ew-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我多半没活着看见结局。但那两张曾经把我漏掉的桌子,后来怎么样了,该让你知道。\n\n废奴这件事,不是靠开会和写宣言谈成的,是靠一场血流成河的内战——1861 到 1865 年,几十万人死了。打完,宪法加上新修正案:废除奴隶制,黑人是「人」,黑人男性有了投票权。我这样的人,法律上,终于从财产变回了人。\n\n女权那张桌子呢?女性拿到全国投票权,要等到 1920 年。\n\n可你注意一个时间差:1870 年黑人男性能投票,1920 年(白人)女性能投票。那像我这样的黑人女性呢?我两个身份都占齐了,却两次都没真正轮到我——南方靠各种花招,把黑人的票一直压到 1960 年代的民权运动才松动。\n\n你看,「all men and women are created equal」这句话写得很早。可让它真的把我这样的人,完整地、安全地算进去,用了一百多年,还流了很多血。\n\n离那句话最近的人喊出它;离那句话最远的人,等它等得最久。',
        en: 'I most likely did not live to see the end. But what became of those two tables that once missed me, you should know.\n\nAbolition was not talked into being by conventions and declarations; it came by a civil war that ran with blood, 1861 to 1865, hundreds of thousands dead. When it ended, new amendments were added to the Constitution: slavery abolished, Black people are “persons,” Black men got the vote. People like me, in law, turned at last from property back into persons.\n\nAnd the women’s table? Women won the national vote only in 1920.\n\nBut mark the gap in the dates: Black men could vote in 1870, (white) women in 1920. And a Black woman like me, who held both selves at once? Twice it was never truly my turn, the South kept Black votes down by every trick until the civil-rights movement of the 1960s loosened it.\n\nYou see, “all men and women are created equal” was written down early. But to make it truly count a person like me, whole and safe, took more than a hundred years, and a great deal of blood.\n\nThe people nearest that line cried it out; the people farthest from it waited for it longest.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 她多半没看见结局 + 废奴不是开会写宣言谈成是内战 (1861-65 几十万死) + 战后修正案 (废奴/黑人是人/黑人男性投票权/她这样的人法律上从财产变回人) + 女性全国投票权 1920 + 时间差 (黑人男性 1870/白人女性 1920/黑人女性两身份占齐两次没真轮到/南方花招压黑人票到 1960s 民权才松) + 「这句话写得很早让它完整安全算进我这样的人用一百多年还流很多血/离那句话最近的人喊出它最远的人等最久」',
      engagementHook: '黑人男性 1870 年能投票，白人女性 1920 年能投票——我两个身份都占齐了，却两次都没真正轮到我，还要再等到 1960 年代。离那句「平等」最近的人喊出它，最远的人为什么等得最久?',
      expectsRealAnswer: false,
    },
    {
      id: 'ew-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一遍,再看那个被称颂的「改革年代」,两种说法都站得住。\n\n一种说法:那是一个虚伪的年代。一群有位子的人,一边喊着「人人平等」「人可完善」,一边继续从我的劳动、我的身体里得好处。他们写宣言、开大会、掉眼泪,却没有一场运动,真的把我这样的人请到桌前,让我自己开口。被谈论得最多的人,恰恰是最没有声音的人。\n\n另一种说法:那也是一个真的推开了一道缝的年代。哪怕带着私心、带着排除,他们到底把「人人平等」这句话,白纸黑字写下了、喊出来了。这句话一旦在世上立住,后来就有人——包括像我一样的人——拿它去争、去逼,一寸一寸,把它撑大到能装下更多人。\n\n这两种说法,都站得住。它既辜负了我,也为后来的我,留下了一句可以拿来用的话。\n\n你怎么看?想 30 秒,写下来。',
        en: 'Having walked this pass, look again at that praised “reform age.” Both views stand.\n\nOne view: it was an age of hypocrisy. A group of people with seats cried “all are equal,” “people can be perfected,” while going on profiting from my labor and my body. They wrote declarations, held conventions, shed tears, and yet not one movement truly invited a person like me to the table to open my own mouth. The most discussed people were exactly the most voiceless.\n\nThe other view: it was also an age that truly pried open a crack. Even with self-interest, even with exclusion, they did at last set down, in black and white, and cry out, the line “all are equal.” Once that line stood firm in the world, others later, people like me among them, took it up to fight, to press, inch by inch, to stretch it wide enough to hold more people.\n\nBoth views stand. It failed me, and it also left, for the later me, a line I could take up and use.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (虚伪的年代/有位子的人喊人人平等人可完善一边从我的劳动身体得好处/写宣言开会掉泪没一场运动真请我上桌/被谈论最多恰是最没声音的人) / 另一种说法 (真推开一道缝的年代/哪怕带私心排除到底把人人平等白纸黑字写下喊出/这句话立住后有人含像我一样的人拿它去争去逼一寸寸撑大到装下更多人) / 两种都站得住 (既辜负我也为后来的我留下一句可用的话) / 想 30 秒',
      engagementHook: '一种说法:那是个虚伪的年代——被谈论最多的人，恰恰最没有声音。另一种说法:它到底把「人人平等」写下了，后人拿它一寸寸撑大。两种都站得住，你的 30 秒到了，你怎么看?',
      expectsRealAnswer: true,
    },
    {
      id: 'ew-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一遍——一个没有名字的人,一个被两张改革的桌子都漏掉的人,一个被所有人谈论、却没人请上桌的人——你会怎么评价这样一个被称颂的「完善人类」的年代?\n\n它一边喊「人人平等」,一边把离这句话最远的人,关在所有桌子外面。你会说它虚伪,还是说它到底留下了一句后人能用的话?你怎么评?\n\n不过先记住:你这一遍,听的只是被两张桌子都挡在外面的人。真正去点火、去组织的 Stanton,在两场运动间架桥的 Douglass,各有各的说法和难处——换个视角再走一遍,你会听见他们怎么为自己辩护:为什么先顾得上一部分人、为什么有些人没被装进来。听完他们,再回头看你刚才的判断,站不站得住。\n\n再想一步:今天你身边,有没有一件「为大家好」的事——一条新规、一个决定、一次「公平」的安排——是「有位子的人」替「没位子的人」拍板的?那个没被请上桌、被决定的人,有没有可能,就是你?\n\n那时候,你会满足于「有人替你做主」,还是会想办法,自己走到桌前,开口说一句:这事,也得问问我?',
        en: 'Having walked this pass, a person with no name, a person missed by both reform tables, a person everyone discussed and no one invited to the table, how would you judge this age praised for “perfecting humanity”?\n\nIt cried “all are equal” while shutting the person farthest from that line outside every table. Would you call it hypocrisy, or say it at least left behind a line later people could use? How do you judge it?\n\nBut first, remember: this pass, you heard only the person shut out of both tables. Stanton, who lit the fire and organized, and Douglass, who built the bridge between two movements, each have their own case and their own difficulty. Run it again through another lens and you will hear how they defend themselves: why some people were tended to first, why some were not held in. Hear them out, then look back at the judgment you just made, and see whether it holds.\n\nThen take one more step: in your own life today, is there a “for everyone’s good” thing, a new rule, a decision, a “fair” arrangement, settled by “the people with a seat” for “the people without one”? And the person not invited to the table, decided for, might that be you?\n\nWhen that happens, will you settle for “someone deciding for you,” or will you find a way to step up to the table yourself and say: this matter, you have to ask me too?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价被称颂的完善人类年代 (没名字/被两张桌子漏/被谈论却没人请上桌 → 虚伪 vs 到底留下后人能用的话) + default-lens 跨视角指针 ①你只听被挡外面的人一边 ②另一视角 Stanton(点火组织)/Douglass(架桥) 各有说法和难处会挑战你换视角再走一遍听完回头看判断站不站得住 + transfer「今天你身边为大家好的事是有位子的人替没位子的人拍板的/那个被决定的人可能就是你」+ 你会满足于有人替你做主还是自己走到桌前说「这事也得问问我」',
      engagementHook: '走完我这一遍，你会怎么评价这样一个年代?再想一步:今天你身边那件「为大家好」的事，是有位子的人替没位子的人拍板的吗?那个被决定的人，会不会就是你?那时你会怎么做?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'stanton':                      stantonLens,
  'douglass':                     douglassLens,
  'enslaved-woman-receiving-end': enslavedWomanLens,
};

// per TOPIC_ROADMAP + receiving-end 优先 pattern:
// 被废奴 + 女权两张改革桌子都排除的黑人女性 (双重失声) + N6「all men and women」跨 lens 对位 (Sojourner Truth) + N10/N11 虚伪 vs 后人能用的话 closing + default-lens 跨视角指针
export var defaultLens = 'enslaved-woman-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'reform-movements-1840',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'stanton': 30, 'douglass': 30, 'enslaved-woman-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-24',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「all men and women are created equal」一句「平等」三个距离 (Stanton 把它写进宣言 / Douglass 替它站台 / 被奴役女性连桌都没被请上 + Sojourner Truth「难道我不是女人」对位)',
    'defaultLens: enslaved-woman-receiving-end — 受影响者优先 (被废奴 + 女权两张桌子都排除的黑人女性 / 双重失声 / 改革「关于」她却没人请她上桌)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab 第8A: Sojourner Truth「Ain’t I a Woman?」措辞 = Frances Gage 1863 重构, 非 1851 逐字记录 — Douglass N6 + receiving-end N6 均用括号短句标「后人重构」; receiving-end N7 元层声明「你听见的她的话是后人用碎片拼出的声音」',
    '与 slavery-abolition-1850 不重叠: 那 Topic = 奴隶制本身 + 地下铁路 + Calhoun/Douglass(与 Garrison 决裂)/Tubman; 本 Topic = 改革年代 (第二次大觉醒 → 废奴+女权+禁酒+教育/收容所) + 运动内部排除; Douglass 两处不同切面 (那边废奴内部理念 vs 政治派之争; 这里废奴与女权架桥 / Seneca Falls 站台)',
    'cross-Topic 文字桥: Declaration of Sentiments 改写 Declaration of Independence → constitutional-convention-1787「We the People」; 同代中国 Taiping (洪秀全 1851 宗教驱动剧变) → §8 结构对照',
    'default-lens 跨视角指针 (第8L.1 / 设计哲学第8条): receiving-end N11 含 ①你只听被挡外面的一边 ②Stanton/Douglass 会挑战换视角再走一遍 + transfer 到学生生活 (有位子的人替没位子的人拍板/那个被决定的人可能就是你)',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
