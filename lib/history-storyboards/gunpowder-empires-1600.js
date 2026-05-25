// ─── Gunpowder Empires 1600 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 火药帝国 · The Gunpowder Empires (Ottoman + Safavid + Mughal)
// AP World History Modern Unit 3 (Land-Based Empires) · CA HSS-7.2
// AP-WHAP-3.1 (帝国扩张/火药) · 3.2 (帝国行政) · 3.3 (信仰体系)
//
// 3 lens 设计 (per AUTHORING_PIPELINE 第 8/12 条 + Gate3 §6):
//   - akbar                            (perpetrator-actor) — Akbar 1542-1605 莫卧儿皇帝 / sulh-i-kul / 1564 废 jizya / Akbar→Aurangzeb 宽容弧线
//   - janissary                        (lonely-mediator)   — 一个 devshirme 出身的 Janissary / 夹在出身与效忠之间 / 被夺走又被抬起
//   - non-muslim-subject-receiving-end (receiving-end)     — 莫卧儿治下印度教农民 / 宽容是赏的、代价是自付的 / DEFAULT
//
// 跨 lens spine (一根温度计):
//   jizya = 一个穆斯林帝国对「非穆斯林算不算完整一员」的态度温度计。
//   - Akbar lens: 1564 废 jizya 是他从上往下的「宽容实验」(权力赌注)
//   - Janissary lens: devshirme 是同一帝国逻辑落在「人」身上 (夺走 + 抬起的双面)
//   - 农民 lens (default): 同一笔 jizya 从下往上看 — 宽容是赏的, Aurangzeb 1679 又加回来
//
// 跨 Topic 锚:
//   - 火药 / 火炮 → 中国发明 (§8 明朝神机营对照)
//   - 「靠强制造出的传统后来变真」(萨非什叶) → 制度合法性讨论
//
// defaultLens = 'non-muslim-subject-receiving-end'
//   (受影响者优先 pattern: 人数最多却最没声音的一方 + N10/N11 跨视角指针指回 Akbar/Janissary)
//
// STRUCTURE SPEC:
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach ~550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true (2/lens, 6 total); all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点 wording authored here)
//
// per AUTHORING_PIPELINE.md 12 铁律:
//   第7 cultural-ban: 非中国帝国 — 用 Sultan/Shah/Padishah/Janissary/devshirme/jizya/sulh-i-kul, 绝不用「皇帝/丞相/太子」类中国词
//   第8A anti-fab 括号短句 / 第8C synthesis voice (一种说法/另一种说法/想30秒/两边都站得住)
//   第8G em-dash ≤1/sent no chains / 第8I.1 no *italic* / 第8K no "lens" in CN 用「视角/这一遍」/ 第8L name grading
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Akbar (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var akbarLens = {
  id: 'akbar',
  name: 'Akbar',
  nameCn: 'Akbar 阿克巴',
  role: 'perpetrator-actor',
  perspectiveTag: 'tolerance-experimenter',
  icon: '👑',
  description: {
    cn: '莫卧儿的第三代君主，1542 年生，13 岁继位，统治印度约一亿人——其中八成是印度教徒，他自己是穆斯林。他一辈子不识字，却让人天天念书给他听，靠听、靠辩、靠看人来治理一个庞杂的帝国。1564 年，他做了一件在伊斯兰世界惊天的事：废掉向非穆斯林征的人头税 jizya，请各教学者同坐辩论。这一遍让你坐进一个穆斯林君主的位置，看他怎么拿「宽容」当治国的赌注——以及这个赌注，后来怎么被他自己的子孙推翻。',
    en: 'The third Mughal ruler, born 1542, crowned at thirteen, ruling roughly a hundred million people in India, eighty percent of them Hindu while he himself was Muslim. He could not read his whole life, yet had books read aloud to him daily, governing a sprawling empire by listening, by debate, by watching people. In 1564 he did something stunning in the Islamic world: he abolished the jizya, the head tax on non-Muslims, and seated scholars of every faith to argue together. This pass puts you in a Muslim ruler\'s seat, watching him stake his rule on "tolerance," and watching that wager later overturned by his own descendants.',
  },
  storyboard: [
    {
      id: 'akb-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我治下有一亿人。每十个里，有八个不信我的教。\n\n我是 Akbar（阿克巴），莫卧儿的君主。我是穆斯林。可我脚下这片印度，绝大多数人是印度教徒——还有耆那教徒、锡克教徒、从海边来的基督徒。\n\n你想想这道题有多难：一个外来的、信少数派宗教的君主，怎么去统治一片绝大多数人跟你信得不一样的土地？\n\n按老规矩，答案很简单：让他们多交一笔税，提醒他们是「另一类人」，谁不服就压下去。我的祖先大多这么干。\n\n但我打算赌一把别的。我要试试：如果我不把他们当「另一类人」，而是当帝国的一份子——这个帝国会更稳，还是会散架？\n\n这一遍，你坐进我这个位置。你手里握着一亿人的命，和一个没人试过的赌注。',
        en: 'I rule a hundred million people. Of every ten, eight do not follow my faith.\n\nI am Akbar, ruler of the Mughals. I am Muslim. Yet this India beneath my feet is overwhelmingly Hindu, with Jains, Sikhs, and Christians come from the coast besides.\n\nConsider how hard the problem is: a foreign ruler of a minority faith, governing a land where almost everyone believes differently from you. How?\n\nThe old answer is simple: make them pay an extra tax, remind them they are "another kind of people," and crush whoever resists. Most of my ancestors did exactly that.\n\nBut I mean to wager on something else. I want to test it: if I treat them not as "another kind of people" but as members of the empire, will the empire grow steadier, or fall apart?\n\nThis pass puts you in my seat. In your hands are the lives of a hundred million, and a wager no one has tried.',
      },
      deliverGoal: 'N1 hook — 一亿人八成非穆斯林 + Akbar 穆斯林君主治印度教多数 + 老规矩 (多交税/压) vs 他要赌别的 (当帝国一份子会更稳还是散) + 这一遍视角设定',
      engagementHook: '我是少数派君主，治一片绝大多数跟我信得不一样的土地。你会用「让他们多交税、当外人压住」的老办法，还是赌一把把他们当自己人？',
      expectsRealAnswer: false,
    },
    {
      id: 'akb-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我怎么坐上这个位置的，你才懂我为什么敢赌。\n\n我 1542 年生，祖父是 Babur（巴布尔）——从中亚带着火炮打进印度、1526 年立了莫卧儿的人。火药和火炮，是我们家族的起家本钱：靠它,我们以少打多，把印度北部打了下来。\n\n可这片帝国没坐稳。我父亲 Humayun 一度被赶出印度，流亡多年才打回来——然后在书房石阶上一脚踏空摔死了。\n\n我 13 岁，就这么猝然接了一个还没焐热的帝国。\n\n这个开局教了我一件事：武力能打下一片土地，焐不热一片土地。我手里有当时世界最强的军队之一，可一亿张嘴里有八千万张，跟我信得不一样。光靠刀，按不住这么多人一辈子。\n\n所以我从年轻时就在想：除了刀，我还能用什么，把这一亿人黏在一起？',
        en: 'First, how I came to this seat, so you understand why I dared to wager.\n\nI was born in 1542. My grandfather was Babur, the man who marched into India from Central Asia with cannon and founded the Mughals in 1526. Gunpowder and cannon were our family\'s founding capital: with them we beat larger forces and took northern India.\n\nBut the throne was not secure. My father, Humayun, was once driven out of India and spent years in exile before fighting his way back, and then he slipped on a library staircase and fell to his death.\n\nAt thirteen, just like that, I inherited an empire not yet warm.\n\nThat beginning taught me one thing: force can win a realm, but force cannot keep a realm warm. I held one of the strongest armies in the world, yet of a hundred million mouths, eighty million believed differently from me. The sword alone cannot hold that many people for a lifetime.\n\nSo from my youth I kept asking: besides the sword, what else can I use to bind these hundred million together?',
      },
      deliverGoal: 'N2 setup — Babur 1526 火炮立莫卧儿 (火药起家) + 父亲 Humayun 流亡后书房石阶摔死 + Akbar 13 岁猝然接位 + 「武力打下一片土地焐不热一片土地」+ 除了刀还能用什么黏住一亿人',
      engagementHook: '武力能打下一片土地，焐不热一片土地。我手里有最强的军队，可八千万人信得跟我不一样。除了刀，你还能用什么把这么多人黏在一起？',
      expectsRealAnswer: false,
    },
    {
      id: 'akb-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '说出来你可能不信：我一辈子不识字。\n\n我大概有阅读障碍，看不进字。但我不认输——我让人每天念书给我听，宫里养着一座庞大的图书馆，历史、诗歌、各教经典，都念给我听。\n\n我不靠读，我靠听、靠问、靠亲眼看人。\n\n我还建了一个地方，叫 Ibadat Khana（信仰之厅）。每到夜里，我把各教的学者请进来：正统派穆斯林学者、印度教的婆罗门、耆那教的修行者、波斯来的琐罗亚斯德教徒，还有从果阿坐船来的基督教耶稣会传教士。\n\n我让他们当着我的面辩论：到底哪一个教，说的是对的？\n\n听得越多，我心里那个念头越清楚：没有哪一家能把另外几家都驳倒。每一家都有它的道理，也都有它说不圆的地方。\n\n如果连最有学问的人，都辩不出一个唯一的正确——那我凭什么因为一个农民信得不一样，就多收他一笔税、把他当外人？',
        en: 'You may not believe this: I could not read my whole life.\n\nI likely had a reading disorder; the letters would not stay still for me. But I would not be beaten. I had books read aloud to me every day, and kept a vast library, history, poetry, the scriptures of every faith, all read out to me.\n\nI did not rule by reading. I ruled by listening, by asking, by watching people with my own eyes.\n\nI also built a place called the Ibadat Khana, the House of Worship. By night I brought in scholars of every faith: orthodox Muslim scholars, Hindu brahmins, Jain ascetics, Zoroastrians from Persia, and Jesuit missionaries who had sailed in from Goa.\n\nI had them argue in front of me: which faith, in the end, speaks the truth?\n\nThe more I listened, the clearer the thought grew: none of them could refute all the others. Each had its reasons, and each had a place where its reasoning would not close.\n\nIf even the most learned men cannot argue out a single right answer, then by what right do I tax a farmer extra, and treat him as an outsider, only because he believes differently?',
      },
      deliverGoal: 'N3 setup — Akbar 不识字 (阅读障碍/让人念书/庞大图书馆) 靠听靠看治理 + Ibadat Khana 信仰之厅各教学者夜辩 + 「没有哪家能把别家驳倒」→ 凭什么因信不一样就多收税当外人',
      engagementHook: '我让各教最有学问的人当面辩，谁也没能把别人驳倒。如果连他们都辩不出唯一的正确，凭什么因为一个人信得不一样，就把他当外人？',
      expectsRealAnswer: false,
    },
    {
      id: 'akb-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1564 年。你下了一道前人不敢下的令：废掉 jizya。\n\njizya 是穆斯林帝国向非穆斯林征的人头税——你不信我的教，就多交这一笔，换一个「你可以继续信你的教」的受保护身份。这笔税收了几百年，是穆斯林政权天经地义的规矩。\n\n你一笔勾掉它。这等于当众宣布：在我的帝国里，印度教徒不再是「需要被额外标记的外人」。\n\n你的钱袋会瘪一块——这是一大笔财政收入。你身边的正统派穆斯林学者会炸锅——他们会说你背叛了信仰，动摇了穆斯林该有的优先地位。\n\n可你心里清楚你在买什么：你用少收的这笔税，去买八千万印度教徒的人心；用得罪一小撮学者，去换一个更黏得住的帝国。\n\n问题来了：你这一步，到底是真心觉得「人不该因信仰被分等级」，还是一个少数派君主最划算的算计？\n\n这两件事，在你自己身上，分得清吗？',
        en: 'Now you are me.\n\n1564. You issue an order no predecessor dared issue: you abolish the jizya.\n\nThe jizya is the head tax a Muslim empire levies on non-Muslims. Believe differently from me, and you pay this extra sum in exchange for a protected status that lets you keep your faith. The tax had been collected for centuries; to a Muslim regime it was simply the rule.\n\nYou strike it out with one stroke. It amounts to a public declaration: in my empire, Hindus are no longer "outsiders who must be specially marked."\n\nYour treasury will shrink, this is a large revenue. The orthodox Muslim scholars around you will erupt, calling you a traitor to the faith, saying you have undercut the precedence Muslims are owed.\n\nBut you know what you are buying: with the tax you forgo, you buy the loyalty of eighty million Hindus; by offending a small circle of scholars, you trade for an empire that holds together better.\n\nNow the question: this step of yours, is it a true conviction that "no one should be ranked by faith," or the shrewdest calculation of a minority ruler? On you, can those two be told apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1564 废 jizya (前人不敢) + jizya 是什么 (非穆斯林人头税换受保护身份) + 等于宣布印度教徒不再是外人 + 财政瘪/正统学者炸锅 + 自我拷问: 真信「人不该按信仰分级」还是少数派最划算的算计/分得清吗',
      engagementHook: '我废 jizya，可能是真心觉得人不该按信仰分等级，也可能只是少数派君主最划算的算计。这两件事，在我自己身上分得清吗？你呢，你做的好事里分得清几分真心几分划算？',
      expectsRealAnswer: false,
    },
    {
      id: 'akb-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '废税只是个开头。我把「宽容」做成了一整套治国的办法。\n\n我给它起了个名字：sulh-i-kul——意思是「与所有人和平」「普遍的宽容」。\n\n这不是一句口号。我把它变成实打实的人事：我娶印度教 Rajput（拉杰普特）公主，跟印度教大贵族结亲；我用印度教徒当我的高官、财政大臣、甚至带兵的将领。在我的朝廷里，你信什么教，不决定你能爬多高——你的本事决定。\n\n你换个角度想：一个穆斯林君主，把帝国的兵权、财权，分一部分给信别的教的人。这在当时,胆子大得吓人。\n\n我赌的就是这个：当一个印度教将领知道，这个帝国也是他的帝国、他能在里头出人头地——他就会拼命替我守这个帝国，而不是盼着我倒台。\n\n宽容在我这儿，不是软弱，是一种更聪明的力量。我不是放弃了权力——我是用「让更多人觉得这帝国有他一份」的方式，把权力扎得更深。',
        en: 'Abolishing the tax was only the start. I made "tolerance" into a whole method of rule.\n\nI gave it a name: sulh-i-kul, meaning "peace with all," "universal tolerance."\n\nIt was not a slogan. I turned it into real appointments. I married a Hindu Rajput princess and tied myself to the great Hindu noble houses; I made Hindus my high officials, my finance ministers, even commanders of armies. In my court, what faith you held did not decide how high you could climb. Your ability did.\n\nThink of it from another angle: a Muslim ruler handing a share of the empire\'s military and financial power to men of another faith. In that age, the boldness of it was frightening.\n\nThis was my wager: when a Hindu commander knows that this empire is his empire too, that he can rise within it, he will fight to defend it for me rather than wait for me to fall.\n\nTolerance, for me, was not weakness. It was a smarter kind of strength. I did not give up power. I drove it deeper, by making more people feel they had a stake in this empire.',
      },
      deliverGoal: 'N5 story — sulh-i-kul「与所有人和平/普遍宽容」做成人事 (娶 Rajput 公主/印度教徒当高官财政将领/本事决定不是信仰) + 把兵权财权分给别教人胆子大 + 赌注: 让他们觉得帝国有他一份就会拼命守 + 「宽容不是软弱是更聪明的力量」',
      engagementHook: '我把兵权、财权分给信别的教的人，赌他们觉得「这帝国也有我一份」就会替我拼命。你觉得「让对手分享你的权力」是聪明，还是危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'akb-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我跟你说说我的赌注，落到一个普通人头上是什么样。\n\n我的帝国里，有千千万万个印度教农民。他们种地、交田赋、一辈子没进过我的朝廷，也不会念我图书馆里的任何一本书。\n\n在我废 jizya 之前,他们每年除了田赋，还得交一笔人头税——只因为他们不是穆斯林。这笔税年年提醒他：在这个帝国里，你低人一等。\n\n1564 年我废了它。对一个农民来说，朝廷里那些 sulh-i-kul 的大道理，他听不见也不关心。他只知道一件具体的事：今年开始，那笔「因为你不是穆斯林」的税，没了。\n\n我治国的整个宏图，对他而言，就缩成了这一笔少交的税。\n\n但你要替他记住一件我当时没太在意的事：这笔税是我「赏」给他的。我高兴废，下一个坐这位置的人,不高兴,随时能加回来。\n\n他的好日子，挂在我一个人的念头上。这一点，你换到他那一遍,会看得清清楚楚。',
        en: 'Let me tell you what my wager looks like when it lands on one ordinary person.\n\nIn my empire there are millions of Hindu farmers. They till the soil, pay the land tax, never set foot in my court, and will never read a single book in my library.\n\nBefore I abolished the jizya, each year, on top of the land tax, they paid a head tax, only because they were not Muslim. That tax reminded a man, year after year: in this empire, you are lesser.\n\nIn 1564 I struck it out. To a farmer, the grand talk of sulh-i-kul in my court is something he never hears and does not care about. He knows one concrete thing: starting this year, the tax that was there "because you are not Muslim" is gone.\n\nMy whole vision of rule shrinks, for him, to this one tax he no longer pays.\n\nBut remember for him a thing I did not weigh heavily then: this tax was something I "granted." I was pleased to abolish it; the next man to sit in this seat, displeased, can add it back at any time.\n\nHis good years hang on the thought of one man. When you switch to his pass, you will see this with perfect clarity.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Akbar 宽容落到一个印度教农民头上 = 缩成「少交一笔 jizya」(农民听不见 sulh-i-kul 大道理只知少交税) + 关键: 这税是「赏」的下个君主随时能加回 + 桥到 receiving-end (农民) lens 看得清清楚楚',
      engagementHook: '我治国的整个宏图，对一个农民来说就缩成「少交一笔税」。而这笔税是我「赏」的——换个君主随时能加回。一个人的好日子挂在另一个人的念头上，这算不算真正的好日子？',
      expectsRealAnswer: false,
    },
    {
      id: 'akb-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别把我想得太完美。我的宽容，是真的，也是有边界的。\n\n第一，我从没放弃过武力。哪个地方敢反，我照样发兵镇压、攻城掠地。我先是个征服者，然后才是个宽容的君主——宽容是建在我用刀打下的疆土上的，不是替代它的。\n\n第二，我晚年走得更远，搞出一个叫 Din-i Ilahi（神圣宗教）的东西——一套糅合各教元素的小圈子信条，让最亲近的几个臣子信奉。\n\n这里我得对你诚实：这个 Din-i Ilahi，后人传得很玄,说我「创了个新宗教」。其实它极小、几乎没人信，核心信徒据记载不过十几个人，我一死它就散了。\n\n它不是我治国的支柱。我真正靠的，是 sulh-i-kul 和废 jizya 那一套实打实的政策。Din-i Ilahi 更像我一个人晚年宗教探索的尾声，一个没成功的小实验。\n\n我跟你说这个,是想让你别把我神化。我是个赌「宽容能换稳定」的君主，不是什么打破一切的圣人。',
        en: 'Do not imagine me too perfect. My tolerance was real, and it had its limits.\n\nFirst, I never gave up force. Wherever a region dared revolt, I sent troops, besieged cities, took land as ever. I was a conqueror first and a tolerant ruler second. Tolerance was built on the hard realm I had conquered, not a replacement for it.\n\nSecond, in my later years I went further and made a thing called Din-i Ilahi, the Divine Faith, a small-circle creed blending elements of several religions, professed by a few of my closest courtiers.\n\nHere I must be honest with you: later ages tell tall tales of this Din-i Ilahi, saying I "founded a new religion." In truth it was tiny, almost no one followed it, the core believers were by record no more than a dozen men, and it dissolved the moment I died.\n\nIt was not a pillar of my rule. What I truly relied on was the solid policy of sulh-i-kul and the abolition of jizya. Din-i Ilahi was more the tail end of one man\'s late religious searching, a small experiment that did not succeed.\n\nI tell you this so you will not make a god of me. I was a ruler who wagered that tolerance buys stability, not some saint who broke every rule.',
      },
      deliverGoal: 'N7 story — Akbar 宽容有边界 (从没放弃武力/先征服者后宽容君主/宽容建在打下的疆土上) + Din-i Ilahi 晚年小圈子信条 + anti-fab: 别神化 (极小/几乎没人信/核心十几人/死后即散/不是支柱) + 真支柱是 sulh-i-kul + 废 jizya',
      engagementHook: '后人传我「创了个新宗教」，其实那东西极小、几乎没人信、我一死就散了。我只是个赌「宽容能换稳定」的君主，不是圣人。为什么人们总爱把历史人物神化或妖魔化？',
      expectsRealAnswer: false,
    },
    {
      id: 'akb-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1605 年死了。死的时候，我的赌注看起来赢了。\n\n莫卧儿是当时世界上最富、最稳的帝国之一。我用宽容黏住的那一亿人，没有散；印度教将领替我守边疆，印度教大臣替我管财政。我儿子、孙子接着我的路子走，帝国又稳了几十年——我孙子 Shah Jahan 还有闲钱、有安稳，去给亡妻盖了那座举世闻名的泰姬陵（Taj Mahal）。\n\n看起来，「宽容能换稳定」这个赌，我押对了。\n\n可历史最狠的反转，落在我看不到的地方。\n\n我的曾孙 Aurangzeb（奥朗则布），1679 年做了一件跟我完全相反的事：他把 jizya 又加了回来，推行更严的伊斯兰法，跟印度教诸侯打了几十年的仗。\n\n他不是傻。他有他的逻辑——朝廷缺钱、他要证明自己是个虔诚正统的君主、边疆压力大。他押的是「强硬能立威」，恰好跟我押的反过来。\n\n而他之后，帝国就开始一块一块地碎了。',
        en: 'I died in 1605. At my death, my wager looked won.\n\nThe Mughals were among the richest, steadiest empires in the world. The hundred million I had bound with tolerance did not scatter; Hindu commanders guarded my frontiers, Hindu ministers ran my treasury. My son and grandson kept to my path, and the empire held steady for decades more. My grandson Shah Jahan even had the wealth and the peace to build, for his dead wife, that world-famous tomb, the Taj Mahal.\n\nIt seemed I had bet right that tolerance buys stability.\n\nBut history\'s cruelest reversal fell in a place I could not see.\n\nMy great-grandson Aurangzeb, in 1679, did the very opposite of what I had done: he brought the jizya back, enforced a stricter Islamic law, and waged decades of war against Hindu princes.\n\nHe was not a fool. He had his logic, a treasury short of money, a wish to prove himself a pious and orthodox ruler, heavy pressure on the frontiers. He bet that hardness builds authority, the very reverse of my bet.\n\nAnd after him, the empire began to crack apart, piece by piece.',
      },
      deliverGoal: 'N8 story — Akbar 1605 死时赌注看似赢 (最富最稳/一亿人没散/印度教将领守边财政/Shah Jahan 建泰姬陵) + 反转: 曾孙 Aurangzeb 1679 复 jizya/严施伊斯兰法/战印度教诸侯 + Aurangzeb 不傻有逻辑 (缺钱/证明虔诚/边疆) 押强硬反过来 + 他之后帝国碎',
      engagementHook: '我押「宽容换稳定」，曾孙 Aurangzeb 押「强硬立威」，正好反过来。他不傻，有他的逻辑。可他之后帝国就碎了。是宽容更聪明，还是我只是运气好、赶上了好时候？',
      expectsRealAnswer: false,
    },
    {
      id: 'akb-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我一个人，拉到整段历史，你会看见更大的图。\n\n跟我同时代，西边还有两个一样靠火药打天下的穆斯林帝国：奥斯曼（Ottoman）和萨非（Safavid）。我们仨被后世的历史学家打包叫「火药帝国」——都靠火炮和常备军，建起庞大的陆上帝国。\n\n可我们处理「不一样的人」的办法，各走各的路：\n\n奥斯曼把非穆斯林按宗教分成一个个社群分开管，叫 millet（米利特）制；还从基督徒家庭征募男孩,训练成精锐——这个你换到 Janissary 那一遍会亲眼看见。\n\n萨非更狠：1501 年起,把整个波斯从逊尼派强制改成什叶派——一个用强制造出来的宗教身份，五百年后,成了今天伊朗最真实的认同。\n\n同样是穆斯林帝国，对治下不一样的人，有人废税示宽（我），有人分而治之（奥斯曼），有人强制统一（萨非）。\n\n「都是穆斯林帝国，所以都一个样」——这是最大的误解。我们之间的差别，比我们和外人的差别还大。',
        en: 'Pull the lens from me alone out to the whole stretch of history, and you see a larger picture.\n\nIn my own time, to the west, were two more Muslim empires that had won their realms by gunpowder: the Ottomans and the Safavids. Later historians bundled the three of us together as the "Gunpowder Empires," all built on cannon and standing armies into vast land empires.\n\nBut our ways of handling "the people who are different" went down separate roads:\n\nThe Ottomans sorted non-Muslims into separate religious communities and governed each on its own, the millet system; they also levied boys from Christian families and trained them into elites, which you will see for yourself when you switch to the Janissary pass.\n\nThe Safavids went harder: from 1501 they forcibly converted all of Persia from Sunni to Shi\'a, a religious identity made by force that, five centuries on, became Iran\'s most real identity today.\n\nYou see, all Muslim empires, yet toward the different people under them, one abolishes a tax to show tolerance (me), one divides and rules (the Ottomans), one converts by force (the Safavids).\n\n"They are all Muslim empires, so they are all the same," this is the greatest misunderstanding. The differences among us are larger than the differences between us and outsiders.',
      },
      deliverGoal: 'N9 zoom-out + 3-empire coverage — 同代奥斯曼/萨非 + Hodgson「火药帝国」框架 (火炮+常备军建陆上帝国) + 三种处理「不一样的人」: Akbar 废税示宽 / 奥斯曼 millet 分治 + devshirme (桥 Janissary lens) / 萨非 1501 强制改宗 (五百年后成伊朗真认同) + 「都是穆斯林帝国所以都一样」是最大误解',
      engagementHook: '都是靠火药起家的穆斯林帝国，对待治下不一样的人,有人废税示宽,有人分而治之,有人强制改宗——三条完全不同的路。「都是穆斯林帝国所以都一个样」,为什么是最大的误解？',
      expectsRealAnswer: false,
    },
    {
      id: 'akb-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是个超越时代的明君。在一个「异教徒就该多交税、低人一等」被当成天经地义的年代，我废 jizya、行 sulh-i-kul、让各教同坐辩论、把权力分给信别教的人。我用宽容，把一亿人黏成了当时世界最稳的帝国之一。这不是软弱，是一种更高级的治国智慧。\n\n另一种说法：我的「宽容」首先是一笔精明的买卖。我是个统治印度教多数的穆斯林少数派——不宽容，我根本坐不稳。废税买人心、用印度教将领守边疆，每一步都对我自己最划算。而且这「宽容」是我一个人「赏」的,不是写死的权利——证据就是,我曾孙一句话就全收回去了。我给的,从来不真正属于拿到的人。\n\n这两边不是「优点加缺点」。是同一套作为的两面——同一个 Akbar,既可能是真信,也可能是真划算,而且这两者，未必分得开。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was an enlightened ruler ahead of my age. In a time when "the infidel should pay more and stand lower" was taken as the natural order, I abolished the jizya, practiced sulh-i-kul, seated every faith to debate, and gave power to men of other faiths. With tolerance I bound a hundred million into one of the steadiest empires in the world. That was not weakness; it was a higher wisdom of rule.\n\nThe other view: my "tolerance" was first of all a shrewd bargain. I was a Muslim minority ruling a Hindu majority. Without tolerance I could not have held the seat at all. Abolishing the tax to buy loyalty, using Hindu commanders to guard the frontier, every step was the most profitable one for me. And this "tolerance" was something I "granted," not a right written in stone, the proof being that my great-grandson took it all back with a word. What I gave never truly belonged to those who received it.\n\nThese are not "strengths and weaknesses." They are two faces of the same conduct, the same Akbar, who may have truly believed and may have truly calculated, and the two may not come apart.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (超越时代明君/废 jizya 行 sulh-i-kul/宽容黏一亿人/更高级智慧) / 另一种说法 (宽容首先是精明买卖/少数派不宽容坐不稳/每步最划算/「赏」的不是写死的权利→曾孙一句话收回/给的不真正属于拿到的人) / 同一套作为两面真信与真划算未必分得开 / 想 30 秒',
      engagementHook: '超越时代的明君，和精明的买卖人——是同一个我。真信和真划算，未必分得开。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'akb-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个君主、这样一场赌注？\n\n一个少数派君主，用宽容黏住了一亿人，建起一个当时最稳的帝国；可这宽容是他一人「赏」的，曾孙一句话就收回，帝国随之崩解。「靠开明君主的善意换来的好秩序」和「写死了谁也收不回的权利」，到底差在哪里？你怎么称这场赌注的分量？\n\n再想一步。今天你身边,有没有「好处是别人赏的、随时可能被收回」的情况——某个老师特别照顾你、某条规则对你有利但其实没写进规定、某个掌权的人心情好就放你一马？\n\n那时候,你会因为「现在对我好」就安心,还是会想：要是哪天这个人换了、心情变了,这份好,我还剩下什么？你会怎么去争一个不靠别人赏脸、写死了谁也拿不走的位置？',
        en: 'Having walked my whole life, how would you judge such a ruler, such a wager?\n\nA minority ruler bound a hundred million with tolerance and built the steadiest empire of his time; yet that tolerance was something he alone "granted," his great-grandson took it back with a word, and the empire cracked apart after. The difference between "good order won by an enlightened ruler\'s goodwill" and "a right written in stone that no one can take back," where does it lie? How do you weigh the worth of this wager?\n\nThen take one more step. In your own life today, is there somewhere a benefit is "granted" by another and can be taken back at any time, a teacher who favors you, a rule that helps you but was never written down, someone in power who lets you off when their mood is good?\n\nWhen that happens, will you rest easy because "it is good for me now," or will you ask: if one day this person is replaced, or their mood changes, what of this good remains to me? How would you fight for a place that does not depend on another\'s favor, one written down so firmly that no one can take it away?',
      },
      deliverGoal: 'N11 close — 评价君主/赌注 (宽容黏一亿人/但「赏」的曾孙一句话收回帝国崩 → 君主善意的好秩序 vs 写死谁也收不回的权利差在哪/称赌注分量) + transfer「今天你身边好处是别人赏的随时可收回 (老师照顾/没写死的规则/掌权者心情)」+ 你会安心还是争一个不靠赏脸写死的位置',
      engagementHook: '靠开明君主的善意换来的好秩序，和写死了谁也拿不走的权利，差在哪？今天你身边那个「别人赏的、随时能收回」的好处，你会安心享受，还是会想办法把它变成谁也拿不走的？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: A Janissary (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var janissaryLens = {
  id: 'janissary',
  name: 'A Janissary',
  nameCn: '一个 Janissary 耶尼切里',
  role: 'lonely-mediator',
  perspectiveTag: 'devshirme-slave-soldier',
  icon: '⚔️',
  description: {
    cn: '奥斯曼苏丹最精锐的步兵之一。他生在巴尔干一个基督徒农家,小时候被征募官按 devshirme(童子征募制)从家里带走,皈依伊斯兰,训练成苏丹的奴隶兵。他不许结婚、没有家庭、法律上是苏丹的财产,可他也是帝国最有战斗力、最有前途的人——不少帝国首席行政官就是他这样出身的。他记得母亲的语言、村里教堂的钟声,也真心效忠那个夺走他、又抬起他的帝国。这一遍让你坐进一个夹缝里的人:他既是受害者,又是统治机器的一部分,两样同时是真的。',
    en: 'One of the Ottoman Sultan\'s most elite infantry. He was born to a Christian farming family in the Balkans and taken from home as a boy under the devshirme, the levy of children, converted to Islam, and trained into the Sultan\'s slave soldier. He may not marry, has no family, and is in law the Sultan\'s property, yet he is also among the most formidable and most promising men in the empire, for not a few of its chief administrators came up the same way. He remembers his mother\'s tongue and the church bells of his village, and he is also truly loyal to the empire that took him and raised him. This pass puts you inside a man in a vise: he is at once a victim and a part of the ruling machine, and both are true at the same time.',
  },
  storyboard: [
    {
      id: 'jan-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我穿着帝国最精锐的军装,腰里别着苏丹赏的刀。可我记得我母亲的脸,记得我们村里教堂的钟声。\n\n那是另一个我,另一种语言,另一个神。\n\n我是一个 Janissary(耶尼切里)——奥斯曼苏丹的精锐步兵。我生在巴尔干一个基督徒农家。小时候,帝国的征募官来到村里,把我从父母身边带走,带去伊斯坦布尔,让我改信伊斯兰,把我练成今天这个样子。\n\n(我叫什么、几岁被带走的、村子在哪,这些具体的名字和细节,是这一遍替你补的,好让你听见一个真实的人;制度本身,也就是从基督徒家庭征走男孩、皈依、练成奴隶兵,是实打实的历史。)\n\n所以你问我:你是受害者,还是统治者?\n\n我两样都是。这就是我活的那个夹缝。这一遍,你坐进来,试试在这个夹缝里,怎么过完一生。',
        en: 'I wear the empire\'s most elite uniform, with the Sultan\'s gifted blade at my waist. Yet I remember my mother\'s face, and the bells of the church in our village.\n\nThat was another me, another tongue, another god.\n\nI am a Janissary, the Ottoman Sultan\'s elite infantry. I was born to a Christian farming family in the Balkans. As a boy, the empire\'s levy officers came to the village and took me from my parents, brought me to Istanbul, turned me to Islam, and drilled me into what I am today.\n\n(My name, the age I was taken, where the village stood, these particular names and details are filled in by this pass so you can hear a real man; the system itself, levying boys from Christian families, conversion, training into slave soldiers, is solid history.)\n\nSo you ask me: are you a victim, or a ruler?\n\nI am both. That is the vise I live in. This pass, you climb in, and try how a life is lived inside that vise.',
      },
      deliverGoal: 'N1 hook — Janissary 穿精锐军装/记得母亲教堂钟声 + devshirme 从巴尔干基督徒家庭带走/皈依/练成 + anti-fab 括号短句 (名字年龄村子是补的/制度是史实) + 受害者还是统治者「我两样都是」夹缝',
      engagementHook: '我穿着帝国最精锐的军装,却记得我母亲的脸、村里教堂的钟声。你问我是受害者还是统治者——我两样都是。一个人怎么可能同时是这两样？',
      expectsRealAnswer: false,
    },
    {
      id: 'jan-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说他们是怎么把我带走的,你才懂这件事的分量。\n\n奥斯曼有一套制度,叫 devshirme(童子征募制)。每隔几年,帝国的征募官就下到巴尔干、有时安纳托利亚的基督徒村子里,挨家挨户看男孩。\n\n他们不是随便抓。他们挑最健壮、最聪明、长得最周正的。被挑中,是村里所有人都怕、又都说不出口地有点动心的事——因为大家都知道,这些孩子会去一个普通农家想都不敢想的地方。\n\n那一年,他们挑中了我。\n\n我父母没法拒绝。这是帝国的法令,不交孩子,后果他们扛不起。我记得母亲没哭出声——她知道哭也没用——只是一直一直看着我,像要把我的样子记一辈子。\n\n然后我就跟着征募官走了。一步一步,离开村子,离开教堂,离开我父母,离开那个信基督的小男孩。\n\n那一天之后,我再没回去过。',
        en: 'First, how they took me, so you feel the weight of it.\n\nThe Ottomans had a system called the devshirme, the levy of children. Every few years the empire\'s levy officers came down into the Christian villages of the Balkans, sometimes Anatolia, and went house to house looking at the boys.\n\nThey did not seize at random. They chose the strongest, the cleverest, the most well-favored. To be chosen was a thing the whole village feared, and also, in a way no one could say aloud, half longed for, because everyone knew these boys would go to places a common farming family could not even dream of.\n\nThat year, they chose me.\n\nMy parents could not refuse. It was the empire\'s law, and the cost of withholding a child was more than they could bear. I remember my mother did not cry aloud, she knew tears would do nothing, she only looked at me, on and on, as if to keep the shape of me for the rest of her life.\n\nThen I went with the levy officers. Step by step, away from the village, away from the church, away from my parents, away from the small Christian boy I had been.\n\nAfter that day, I never went back.',
      },
      deliverGoal: 'N2 setup — devshirme 怎么征 (每几年下巴尔干/安纳托利亚基督徒村挨家看男孩/挑最健壮聪明周正) + 村里又怕又有点动心 (孩子会去普通农家不敢想的地方) + 父母没法拒绝 (帝国法令) + 母亲没哭只一直看他 + 走后再没回去',
      engagementHook: '征募官不是随便抓——他们挑最健壮、最聪明的孩子。村里人又怕又隐隐有点动心,因为大家都知道这些孩子会去普通农家不敢想的地方。「被夺走」和「被选中」,在这里怎么是同一件事？',
      expectsRealAnswer: false,
    },
    {
      id: 'jan-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '到了伊斯坦布尔,他们开始一点一点,把我变成另一个人。\n\n先是信仰。我受洗过的那个基督教的神,被换成了伊斯兰的真主。我学念新的祷词,行新的礼拜。一开始我嘴上念着,心里还想着村里教堂的样子。日子久了,新的盖住了旧的。\n\n然后是语言、规矩、忠诚。他们教我土耳其语、教我帝国的法度,最重要的,教我:你现在只属于一个人——苏丹。\n\n我们这些被征来的,法律上是苏丹的奴隶。我们不许结婚,不许有自己的家庭和子嗣,不许置产传给后代。\n\n你听出这套设计的狠和巧了吗?他们要的,就是一群没有退路的人。我没有家族能投靠,没有儿子要操心,没有别的地方可去——我全部的人生、前途、身家,都只系在苏丹一个人身上。\n\n一个无牵无挂的人,才会变成最忠诚、最不要命的兵。他们就是这么算计的。',
        en: 'In Istanbul, they began, bit by bit, to turn me into another man.\n\nFirst, faith. The Christian God I had been baptized into was exchanged for the God of Islam. I learned new prayers, performed new worship. At first I said the words with my mouth while my heart still pictured the village church. In time, the new covered over the old.\n\nThen language, rules, loyalty. They taught me Turkish, taught me the law of the empire, and above all taught me: you now belong to one man, the Sultan.\n\nThose of us levied in are, in law, the Sultan\'s slaves. We may not marry, may not have families or heirs of our own, may not hold property to pass on.\n\nDo you hear the cruelty and the cunning of this design? What they wanted was a body of men with no way back. I had no clan to lean on, no sons to fret over, nowhere else to go. My whole life, my future, my fortune, hung on the Sultan alone.\n\nA man with no ties becomes the most loyal, the most reckless soldier. That was exactly their calculation.',
      },
      deliverGoal: 'N3 setup — 伊斯坦布尔把他变另一个人 (信仰: 基督神换真主/语言土耳其语/忠诚只属苏丹) + 法律上苏丹奴隶 (不许结婚/无家庭子嗣/不许置产传后) + 设计的狠和巧: 要一群没退路的人 (无家族无子无处去/全系苏丹一人) + 无牵无挂才最忠最不要命',
      engagementHook: '他们不许我结婚、不许我有后代、不许我有别的地方可去——这样我全部的人生就只系在苏丹一人身上。一个无牵无挂的人才最忠诚。你觉得这套设计是残忍,还是精明?',
      expectsRealAnswer: false,
    },
    {
      id: 'jan-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n训练这么多年,你已经是帝国最精锐的兵。1453 年那种大仗,就是你这样的人,用火炮和血肉,轰开了君士坦丁堡一千年没破的城墙——那一战,奥斯曼一脚踏进了世界强权的门槛,而踩在最前头的,是你的脚。\n\n现在你站在战场上,或是站在苏丹的大殿里,你得在心里把一笔账算清楚。\n\n往回看:这个帝国从你手里夺走了你的父母、你的村庄、你受洗的那个神。这是抢。这笔账,你一辈子忘不掉。\n\n往前看:也正是这个帝国,把你这个巴尔干农民的儿子,练成了帝国最有用、最有权的人之一。你身边好几个跟你一样出身的人,后来爬到了帝国最高的位置,管着整个帝国的政务。在那个出身定一切的年代,这条路,普通人做梦都梦不到。\n\n同一个帝国,一只手夺走了你的过去,另一只手给了你一个谁也想不到的未来。\n\n你怎么算这笔账?你该恨它,还是该谢它?',
        en: 'Now you are me.\n\nAfter years of training, you are the empire\'s most elite soldier. A great battle like 1453 was men like you who, with cannon and flesh, breached the thousand-year walls of Constantinople, the battle in which the Ottomans stepped over the threshold of world power, and the foot at the very front was yours.\n\nNow you stand on the battlefield, or in the Sultan\'s great hall, and you must settle an account in your heart.\n\nLook back: this empire took from your hands your parents, your village, the God you were baptized into. This was robbery. That account you will never forget your whole life.\n\nLook forward: it was this same empire that drilled you, a Balkan farmer\'s son, into one of its most useful and most powerful men. Several men of your own origin rose to the empire\'s highest seats, running the affairs of the whole realm. In an age when birth decided everything, this road a common person could not dream of.\n\nThe same empire, one hand stripping away your past, the other handing you a future no one would have imagined.\n\nHow do you settle this account? Should you hate it, or thank it?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 训练成最精锐兵 + 1453 火炮破君士坦丁堡 (奥斯曼踏入世界强权/最前是你脚) + 心里算账: 往回看帝国夺走父母村庄神 (抢/忘不掉) vs 往前看帝国把农民子练成最有权的人 (同出身有人爬到最高位/出身定一切的年代普通人梦不到) + 同一帝国夺过去给未来 + 该恨还是该谢',
      engagementHook: '同一个帝国,一只手夺走了我的父母、村庄、信仰,另一只手把我这个农民的儿子抬成了帝国最有权的人之一。这笔账你怎么算——该恨它,还是该谢它?',
      expectsRealAnswer: false,
    },
    {
      id: 'jan-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我跟你说说,为什么这条路,真的能通到顶。\n\n你别以为我们这些奴隶兵,只是打仗的炮灰。在奥斯曼,管整个帝国政务的首席行政官——相当于帝国的二把手——好几个,就是我们 devshirme 出身的人。\n\n你想想这有多反常。在欧洲那边,你生成贵族就是贵族,生成农民就是农民,血统定一辈子。可在奥斯曼,一个被从基督徒农家抢来的、法律上的奴隶,能爬到帝国权力的最顶端。\n\n这就是我夹在中间的那个怪地方:论出身,我是最底层、被夺走一切的人;论位置,我可能比那些生在贵族家的人,走得还高。\n\n奥斯曼为什么要这么设计?因为一个奴隶出身的高官,没有家族势力可以拿来跟苏丹对抗。他的权力全是苏丹给的,所以他最不敢背叛。\n\n你看出这套制度的双面了吗?它给了我一条别处没有的上升路;它给我这条路,恰恰是因为它先把我变成了一个没有退路的人。',
        en: 'Let me tell you why this road truly reaches the top.\n\nDo not think us slave soldiers were merely cannon fodder. In the Ottoman state, the chief administrator who ran the affairs of the whole empire, in effect the empire\'s second man, was, more than once, one of us, of devshirme origin.\n\nThink how strange that is. Over in Europe, born noble you are noble, born a farmer you are a farmer, blood decides your whole life. Yet in the Ottoman state a man stolen from a Christian farm, a slave in law, could climb to the very summit of power.\n\nThis is the strange place I am wedged in: by birth I am of the lowest, stripped of everything; by position I might climb higher than men born into noble houses.\n\nWhy did the Ottomans design it so? Because a high official of slave origin has no clan power to set against the Sultan. His power is all the Sultan\'s gift, and so he is the least able to dare betrayal.\n\nDo you see the two faces of this system? It gave me a road upward found nowhere else; and it gave me that road precisely because it had first made me a man with no way back.',
      },
      deliverGoal: 'N5 story — devshirme 不是炮灰 (首席行政官/帝国二把手好几个是 devshirme 出身) + 反常 (欧洲血统定一生 vs 奥斯曼奴隶能爬到权力顶端) + 夹缝怪地方 (论出身最底层论位置比贵族高) + 为何这么设计 (奴隶高官无家族势力对抗苏丹/权力全苏丹给最不敢背叛) + 双面: 给上升路恰因先把他变成没退路的人',
      engagementHook: '一个被抢来的、法律上的奴隶,能爬到帝国权力的最顶端——只因为他没有家族势力,所以苏丹最放心用他。它给我上升的路,恰恰因为它先把我变成了没退路的人。这是恩典,还是更深的控制?',
      expectsRealAnswer: false,
    },
    {
      id: 'jan-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可你别忘了,在我成为「最有权的人」之前,有一对父母,在巴尔干的村子里,丢了一个儿子。\n\n这是这件事最难的地方,也是你换到另一遍才会真正看清的:我的「光宗耀祖」,是从我父母的「丧子」里长出来的。\n\n对当上高官的我来说,devshirme 是一条登天的梯子。可对那天站在门口、眼睁睁看我被带走的母亲来说,devshirme 就是有人合法地、永远地,把她的孩子从她手里抢走,还改了他的神。\n\n她这辈子大概再没见过我。就算见到,我也不再是当年那个会跑回她怀里、跟她说同一种话、信同一个神的小男孩了。\n\n你看,同一件 devshirme,在我这儿是机会,在我母亲那儿是灾难。是荣耀,还是丧子——全看你站在谁的位置上看。\n\n而我最难受的,是我心里清楚:这两样,都是真的。我确实飞黄腾达了,我母亲也确实永远失去了我。这两件事不抵消,它们一起,是同一件 devshirme 的两半。',
        en: 'But do not forget that before I became "the most powerful of men," a pair of parents, in a Balkan village, lost a son.\n\nThis is the hardest part, and the part you will only truly see when you switch to another pass: my "honor to the family" grew out of my parents\' loss of a child.\n\nTo me, risen to high office, the devshirme was a ladder to the heavens. But to the mother who stood in the doorway that day and watched me carried off, the devshirme was someone lawfully, permanently, tearing her child from her hands, and changing his God besides.\n\nShe likely never saw me again her whole life. And had she, I was no longer the small boy who would run back into her arms, speak her tongue, share her God.\n\nYou see, the same devshirme is opportunity to me and disaster to my mother. Honor, or a lost son, it all depends on whose place you stand in to look.\n\nAnd the hardest thing for me is that I know in my heart: both are true. I did rise high, and my mother did lose me forever. The two do not cancel. Together they are the two halves of the one devshirme.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 成「最有权的人」前有对父母丢了儿子 + 「光宗耀祖」从父母「丧子」长出来 + devshirme 对他是登天梯子对母亲是合法永远抢走孩子改神 + 同一 devshirme 机会 vs 灾难看站谁的位置 + 桥到 receiving-end (被夺孩子那家人) + 「两样都是真的不抵消是同一件事的两半」',
      engagementHook: '我的「光宗耀祖」,是从我父母的「丧子」里长出来的。同一件 devshirme,对我是登天的梯子,对我母亲是永远失去孩子。这两样都是真的,不抵消——你能接受一件事同时是荣耀和灾难吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'jan-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别把我们想成永远忠诚的铁军。时间一长,我们这支队伍,也变了味。\n\n苏丹给我们的待遇太好了:固定的军饷、最好的装备、帝国的脸面。可越往后,我们越把这些当成理所当然该拿的,而不是该用命去换的。\n\n到了 17 世纪,我们这支队伍开始腐化。我们仗着自己手里有兵权,跟苏丹讨价还价:涨饷、要特权,不满意,就闹。最狠的时候,我们能废黜苏丹、扶植我们想要的人上台。\n\n你品出这里头的讽刺了吗?苏丹当初设计 devshirme,是想要一群「没退路、绝对忠诚、随时能为他去死」的兵。可几百年过去,这群兵成了苏丹自己都管不住、甚至要看脸色的一股势力。\n\n一把当初为绝对忠诚而造的刀,后来反过来,架在了造刀人的脖子上。\n\n这就是权力最常见的剧本:你为了控制别人而造出来的工具,养肥了,有一天会反过来要控制你。',
        en: 'Do not picture us as an ever-loyal iron host. Given time, our corps too went sour.\n\nThe Sultan treated us too well: fixed pay, the best equipment, the face of the empire. But as the years passed, we came to take these as our due rather than as what must be paid for with our lives.\n\nBy the 17th century our corps began to rot. Trusting in the troops in our hands, we bargained with the Sultan: raise our pay, grant us privilege, and if displeased, we made trouble. At the worst, we could depose a Sultan and set up the man we wanted in his place.\n\nDo you taste the irony? The Sultan designed the devshirme to get men with "no way back, absolute loyalty, ready to die for him at any moment." Yet centuries on, these men became a force the Sultan himself could not control, and even had to court.\n\nA blade forged for absolute loyalty came in the end to rest against the throat of the one who forged it.\n\nThis is power\'s most familiar script: the tool you make to control others, once fattened, will one day turn to control you.',
      },
      deliverGoal: 'N7 story — Janissary 变味 (待遇太好当理所当然) + 17 世纪腐化 (仗着兵权讨价还价/涨饷要特权/能废黜苏丹扶植人) + 讽刺: 苏丹设计为绝对忠诚的兵成了自己管不住要看脸色的势力 + 「为绝对忠诚造的刀架在造刀人脖子上」+ 权力剧本: 控制别人的工具养肥反过来控制你',
      engagementHook: '苏丹造 devshirme,是想要一群绝对忠诚、随时为他去死的兵。可几百年后,这群兵成了苏丹自己都管不住、要看脸色的一股势力。为控制别人造出的工具,为什么常常反过来控制造它的人?',
      expectsRealAnswer: false,
    },
    {
      id: 'jan-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们这支队伍的结局,很惨,也算是自找的。\n\n到后来,我们成了帝国改革的最大障碍。帝国想学西方,练新式军队、换新武器,可这动了我们的饭碗、我们的特权。每次苏丹想改,我们就闹、就反、就威胁。\n\n一支当初为帝国开疆拓土而生的精锐,最后变成了拖住帝国不让它前进的死结。\n\n1826 年,一个下了决心的苏丹,趁我们又一次闹事,调来忠于他的新军和火炮,把我们这支队伍——几百年的耶尼切里——成建制地剿灭了。历史上管这叫「吉祥事件」(意思是「除掉了一个大祸害」)。\n\n从 1453 年我们轰开君士坦丁堡,到 1826 年我们自己被火炮轰平——同样是火药,一头是我们的高光,一头是我们的终结。\n\n我们生于火药,也死于火药。这中间几百年,我们既替帝国挣下了荣耀,也最终成了帝国甩不掉的包袱。',
        en: 'The end of our corps was grim, and in a way we brought it on ourselves.\n\nIn time we became the empire\'s greatest obstacle to reform. The empire wanted to learn from the West, to drill new-style armies and adopt new weapons, but that cut into our living and our privileges. Each time the Sultan moved to reform, we made trouble, resisted, threatened.\n\nAn elite born to win the empire its lands became at last the knot that held the empire back from going forward.\n\nIn 1826, a Sultan of settled resolve, while we made trouble once again, brought up new troops loyal to him and cannon, and wiped out our corps, the Janissaries of centuries, by whole formations. History calls this the "Auspicious Incident," meaning "a great scourge removed."\n\nFrom 1453, when we breached Constantinople, to 1826, when we ourselves were leveled by cannon, the same gunpowder, one end our height, the other our end.\n\nWe were born of gunpowder and died of gunpowder. In the centuries between, we won the empire its glory and became at last the burden it could not shake.',
      },
      deliverGoal: 'N8 story — Janissary 成改革最大障碍 (帝国想学西方练新军换武器/动了饭碗特权/每次闹反威胁) + 从开疆精锐变拖住帝国的死结 + 1826 苏丹趁闹事调新军火炮成建制剿灭 (「吉祥事件」) + 1453 轰开君堡 vs 1826 被火炮轰平 (同样火药一头高光一头终结) + 生于火药死于火药',
      engagementHook: '1453 年我们用火炮轰开君士坦丁堡,1826 年我们自己被火炮轰平。同样是火药,一头是我们的高光,一头是我们的终结。一支为帝国开疆的精锐,怎么最后成了帝国必须除掉的祸害?',
      expectsRealAnswer: false,
    },
    {
      id: 'jan-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头从我一个人,拉到整段历史,你会看见我不是个特例。\n\n跟奥斯曼同时代,东边还有两个一样靠火药打天下的穆斯林帝国:莫卧儿和萨非。我们仨,被后世的历史学家打包叫「火药帝国」。\n\n三个帝国都得回答同一道难题:怎么统治那么多跟统治者信得不一样的人?\n\n莫卧儿的 Akbar 选了废税示宽——你跑过那一遍就知道。萨非干脆把整个波斯强制改成什叶派。而我们奥斯曼,一手用 millet 制把各教社群分开管,一手用 devshirme——也就是把我这样的基督徒孩子,变成帝国的人。\n\n你发现一件事没有:在奥斯曼,「最被压的」和「最有权的」,有时是同一批人。我们 devshirme,出身是被征服的基督徒,身份是奴隶,可我们里头出帝国的将军、出帝国的二把手。\n\n所以「都是穆斯林帝国,所以都一个样」「伊斯兰帝国都不宽容」——这些话,在我身上根本套不上。我这个人本身,就是这种简单标签的反例。',
        en: 'Pull the lens from me alone out to the whole stretch of history, and you see I am no exception.\n\nIn the Ottomans\' own time, to the east, were two more Muslim empires that had won their realms by gunpowder: the Mughals and the Safavids. The three of us were bundled by later historians as the "Gunpowder Empires."\n\nAll three had to answer the same hard question: how do you rule so many people who believe differently from the rulers?\n\nThe Mughals\' Akbar chose to abolish a tax and show tolerance, as you know if you have run that pass. The Safavids simply converted all of Persia to Shi\'a by force. And we Ottomans, with one hand sorted the faith communities apart under the millet system, and with the other used the devshirme, that is, turned Christian boys like me into men of the empire.\n\nHave you noticed something: in the Ottoman state, "the most oppressed" and "the most powerful" were sometimes the same people. We of the devshirme were of conquered Christian birth, slaves in status, yet from among us came the empire\'s generals, the empire\'s second man.\n\nSo "all Muslim empires are the same," "Islamic empires were all intolerant," these sayings simply will not fit on me. I myself am the counter-example to such easy labels.',
      },
      deliverGoal: 'N9 zoom-out + 3-empire coverage — 同代莫卧儿/萨非 + Hodgson「火药帝国」框架 + 三种解法 (Akbar 废税示宽 (桥 akbar lens) / 萨非强制改宗 / 奥斯曼 millet 分治 + devshirme) + 奥斯曼「最被压的」和「最有权的」有时同一批人 (devshirme 出身被征服奴隶却出将军二把手) + 「都是穆斯林帝国所以都一样/都不宽容」套不上他本人就是反例',
      engagementHook: '在奥斯曼,「最被压的」和「最有权的」有时是同一批人——我们 devshirme,出身是被征服的奴隶,却出帝国的将军和二把手。「伊斯兰帝国都不宽容」这种话,为什么在我身上根本套不上?',
      expectsRealAnswer: false,
    },
    {
      id: 'jan-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我,两种说法都站得住。\n\n一种说法:我是 devshirme 的受害者。这个帝国合法地、永远地,从我父母手里把我抢走,夺走我的语言、我的神、我所有的亲人。它不许我有家、有后、有任何属于自己的东西,把我造成一具只忠于苏丹的工具。我这一生的「成功」,是建在一桩对我和我家人的暴行上的。\n\n另一种说法:我是这套制度真正的赢家。一个被征服的基督徒农民的儿子,要不是 devshirme,我一辈子在地里刨食,默默无闻地死。是这个帝国,把我练成最精锐的兵、抬到普通人想都不敢想的高位。在那个出身定一切的年代,我反而是少数靠这条路翻了身的人。\n\n这两边不是「先苦后甜」那么简单。它们一直同时是真的——我每往上爬一步,脚下都踩着我失去的那一切。受害和成功,是同一桩 devshirme 拧在一起的两股。\n\n你怎么看?想 30 秒,写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a victim of the devshirme. This empire lawfully, permanently, tore me from my parents\' hands, stripped away my language, my God, all my kin. It forbade me a home, an heir, anything of my own, and forged me into a tool loyal only to the Sultan. The "success" of my life was built upon an act of violence against me and my family.\n\nThe other view: I was the true winner of this system. A conquered Christian farmer\'s son, had it not been for the devshirme, I would have scratched at the soil my whole life and died unknown. It was this empire that drilled me into its most elite soldier and raised me to a height a common man could not dream of. In an age when birth decided everything, I was instead one of the few who turned his fate by this road.\n\nThese are not as simple as "bitter first, sweet after." They were true at the same time, all along, each step I climbed, beneath my feet lay all I had lost. Victim and winner are two strands twisted together in the one devshirme.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (devshirme 受害者/合法永远抢走/夺语言神亲人/造成只忠苏丹的工具/成功建在暴行上) / 另一种说法 (制度真正赢家/不然一辈子刨食默默死/练成最精锐抬到高位/出身定一切的年代少数翻身的人) / 不是先苦后甜一直同时真 (每爬一步踩着失去的一切) 受害与成功同一桩 devshirme 两股 / 想 30 秒',
      engagementHook: 'devshirme 的受害者,和这套制度真正的赢家——是同一个我。我每往上爬一步,脚下都踩着我失去的那一切。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'jan-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个被抢走的基督徒男孩,一个改了信仰的奴隶兵,一个爬到高位的人,一个夹在「恨它」和「谢它」之间过完一辈子的人——你会怎么评价这样一种命运?\n\n一个帝国,先夺走一个人的一切,再给他一条别处都没有的出路。它给的那条路是真的,它夺走的那一切也是真的。你会说它是恩,还是说它是罪?这两样能放在一个天平上称吗?你怎么称?\n\n再想一步。今天你身边,有没有这样一件事:它一边伤害你、限制你,一边又确实给了你别处得不到的好处——一所管得很严、压得你喘不过气、可又真能把你送进好学校的学校;一个对你很苛刻、却真把本事教给了你的人?\n\n那时候,你会怎么面对这种「又害你又成就你」的东西?你会简单地恨它或谢它,还是能像我一样,学着同时看见它的两半,不急着把它说成纯粹的好或纯粹的坏?',
        en: 'Having walked my whole life, a stolen Christian boy, a slave soldier of changed faith, a man risen high, a man who lived out his days wedged between "hate it" and "thank it," how would you judge such a fate?\n\nAn empire first took everything from a man, then gave him a way out found nowhere else. The road it gave was real, and all it took was real too. Would you call it grace, or call it crime? Can the two be set on one scale and weighed? How do you weigh them?\n\nThen take one more step. In your own life today, is there such a thing: something that harms you and confines you, and at the same time truly gives you a good found nowhere else, a school so strict it presses the breath out of you yet truly sends you on to a good place; a person harsh with you who truly taught you their craft?\n\nWhen that happens, how will you face a thing that both harms you and makes you? Will you simply hate it or thank it, or can you, as I learned to, see both its halves at once, and not rush to call it purely good or purely bad?',
      },
      deliverGoal: 'N11 close — 评价命运 (被抢的男孩/改信仰奴隶兵/爬到高位/夹在恨与谢之间过一生 → 帝国先夺一切再给别处没有的出路/给的路真夺的也真/恩 vs 罪能放一天平称吗) + transfer「今天你身边又害你又成就你的东西 (严到喘不过气却送你进好学校的学校/苛刻却真教你本事的人)」+ 简单恨或谢还是同时看见两半不急着说纯好或纯坏',
      engagementHook: '一个帝国先夺走我的一切,再给我一条别处都没有的出路——你会说它是恩,还是罪?今天你身边那个「又害你又成就你」的东西,你会简单地恨它或谢它,还是能同时看见它的两半?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: A non-Muslim subject (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var nonMuslimSubjectLens = {
  id: 'non-muslim-subject-receiving-end',
  name: 'A non-Muslim subject',
  nameCn: '一个非穆斯林平民',
  role: 'receiving-end',
  perspectiveTag: 'taxed-majority-no-voice',
  icon: '🌾',
  description: {
    cn: '一个莫卧儿治下的印度教农民——这三个穆斯林帝国统治的、人数最多却最没声音的普通人里的一个。他不打仗、不进宫廷、不立法。他种地、交税,看着远处帝国的政策在自己头上变来变去。在 Akbar 之前,他作为非穆斯林要额外交一笔人头税 jizya;1564 年 Akbar 废了它,他头一回觉得自己像帝国的一份子。可他清楚:这是君主「赏」的,换个君主随时能收回——后来 Aurangzeb 果然又加了回来。这一遍,你从那些帝国的「黄金时代」本来没打算细看的人这边,看整段火药帝国的历史。',
    en: 'A Hindu farmer under Mughal rule, one of the most numerous and most voiceless of the ordinary people these three Muslim empires ruled. He does not fight, does not enter the court, does not make laws. He tills the soil, pays the taxes, and watches the empire\'s policies shift over his head from far away. Before Akbar, as a non-Muslim he paid an extra head tax, the jizya; in 1564 Akbar abolished it, and for the first time he felt like a member of the empire. Yet he knows: this was the emperor\'s to "grant," and another emperor could take it back at any time, and Aurangzeb indeed brought it back later. This pass lets you see the whole history of the gunpowder empires from the side of the people their "golden ages" never meant to look at closely.',
  },
  storyboard: [
    {
      id: 'nms-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '历史书上,这叫「火药帝国的黄金时代」。\n\n可我从没站在金子那边过。我站在交税那边。\n\n我是一个农民,种地的。我生在莫卧儿治下的印度,信印度教——跟我村里几乎所有人一样。统治我们的,是一个信伊斯兰的君主,远在阿格拉的宫里,我这辈子见都见不到。\n\n那座宫里发生的事——谁打赢了仗,谁建了多漂亮的陵墓,君主跟哪个教的学者辩了什么——离我有十万八千里。\n\n我每天关心的,只有最实在的几件事:今年的收成,要交多少税,留给一家老小的还剩多少。\n\n这一遍,你站到我这里来。不是从宫里那个写历史的人那边看,是从我们这些只被写进「人口」和「税册」、连名字都没留下的人这边看。\n\n你会看见,同一段「黄金时代」,从下往上看,长什么样。',
        en: 'In the history books, this is called "the golden age of the gunpowder empires."\n\nBut I never stood on the side of the gold. I stood on the side that paid the tax.\n\nI am a farmer, a tiller of the soil. I was born in India under Mughal rule, and I follow the Hindu faith, like almost everyone in my village. The one who rules us is a ruler of the Islamic faith, far off in the palace at Agra, whom I will never lay eyes on my whole life.\n\nWhat happens in that palace, who won which battle, who built how fine a tomb, what the emperor debated with the scholars of which faith, is a world away from me.\n\nWhat I care about each day is only the most solid few things: this year\'s harvest, how much tax is owed, how much is left for the old and young of my house.\n\nThis pass, you come stand where I stand. Not from the side of the one in the palace who writes the history, but from the side of us who were written only into the "population" and the tax rolls, who left not even a name.\n\nYou will see what the same "golden age" looks like, seen from below looking up.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 「火药帝国黄金时代」但他从没站金子那边站交税那边 + 莫卧儿治下印度教农民 + 君主信伊斯兰远在阿格拉见不到 + 宫里的事离他十万八千里 + 只关心收成/交多少税/剩多少 + 这一遍从只被写进「人口」「税册」没留名的人这边看黄金时代从下往上长什么样',
      engagementHook: '历史书叫这「黄金时代」,可我从没站在金子那边,我站在交税那边。「黄金时代」这四个字,对一个只被写进税册的农民来说,意味着什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'nms-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我每天的日子,你才懂后来那件事对我意味着什么。\n\n我家世世代代种这片地。一年到头,看天吃饭:雨水好,收成就好;遇上旱涝,一家人就得勒紧裤腰带。\n\n收成下来,先得交田赋。莫卧儿有一套很精细的收税办法,叫 zabt——官府量过地、估过产,定下每块地该交多少。这笔田赋,信什么教的人都得交,这个我没话说,种地纳粮,天经地义。\n\n可我头上,还压着另一笔税。\n\n那笔税叫 jizya——人头税。它不看你种多少地、收多少粮,它只看一件事:你是不是穆斯林。我不是,所以我得交。我村里的人都得交。\n\n这笔税,跟我的收成没关系,跟我的勤快没关系。它只跟一件事有关:在这个帝国里,我信的教,跟坐在宫里那位不一样。\n\n年年交这笔税,就像年年有人提醒你一次:在这片你祖祖辈辈生活的土地上,你,是低一等的那种人。',
        en: 'First, let me tell you my daily life, so you understand what that later thing meant to me.\n\nMy family has tilled this land for generations. Year round we live by the sky: good rain, good harvest; drought or flood, and the whole family must tighten its belt.\n\nWhen the harvest is in, first comes the land tax. The Mughals have a fine-grained way of taxing, called zabt, the officials measure the land, estimate the yield, and set what each plot owes. This land tax, people of every faith must pay, and I have no quarrel with it; to till the soil and render grain is only right.\n\nBut over my head pressed another tax.\n\nThat tax was the jizya, a head tax. It does not look at how much land you till or how much grain you reap. It looks at one thing only: are you a Muslim. I am not, so I must pay. Everyone in my village must pay.\n\nThis tax has nothing to do with my harvest, nothing to do with my diligence. It bears on one thing only: in this empire, the faith I follow is not the faith of the one who sits in the palace.\n\nTo pay this tax year after year was like being reminded once a year: on this land where your forefathers lived for generations, you are the lesser kind of person.',
      },
      deliverGoal: 'N2 setup — 世代种地看天吃饭 + 田赋 zabt (官府量地估产定税/各教都交他没话说天经地义) + 头上另一笔 jizya 人头税 (不看收成不看勤快只看你是不是穆斯林/他不是村里都交) + 跟收成勤快无关只跟「信的教跟宫里那位不一样」有关 + 年年交像年年被提醒「在祖辈土地上你是低一等的人」',
      engagementHook: '种地交田赋,我没话说,天经地义。可我头上还压着一笔税,它不看我种多少地,只看我是不是穆斯林——我不是,所以年年交。这笔税年年提醒我:在我祖辈的土地上,我低人一等。这种滋味,你能想象吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'nms-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '你可能会问:你不服气,为什么不反抗?\n\n我跟你说实话:像我这样的人,反抗不起。\n\n我没有兵。宫里那位手里,有当时世界上最强的军队之一——火炮、骑兵、还有从远方调来的精锐。我们一个村子的农民,拿着锄头,什么也挡不住。\n\n我也没有「说话的地方」。宫里辩论用什么教、定什么税,从来没人来问我一句。我连那座宫长什么样都不知道,更别说让我的声音传进去。\n\n我甚至没有「被记住的资格」。打仗的将军、立法的大臣、建陵墓的工匠,好歹会被写进史书。我们这些农民,只会被写成一个数字:税册上的一户,人口里的一个人头。等我死了,连这个数字都换成下一个。\n\n所以你别问我为什么不反抗。你该问的是:一个没有兵、没有说话的地方、连名字都留不下的人,面对一个庞大帝国压下来的规矩,他还能做什么?\n\n这,就是「受影响的那一方」每天要面对的处境。',
        en: 'You might ask: if you were not reconciled to it, why did you not resist?\n\nI will tell you the truth: people like me cannot afford to resist.\n\nI have no troops. The one in the palace holds one of the strongest armies in the world, cannon, cavalry, elites summoned from afar. We farmers of one village, with our hoes, can stop nothing.\n\nI also have no "place to speak." What faith they debate in the palace, what tax they set, no one ever came to ask me a word. I do not even know what that palace looks like, let alone get my voice carried inside it.\n\nI do not even have "the standing to be remembered." The general who fights, the minister who makes law, the craftsman who builds the tomb, are at least written into the histories. We farmers are written only as a number: one household on the tax roll, one head in the population. When I die, even that number is swapped for the next.\n\nSo do not ask me why I did not resist. What you should ask is: a man with no troops, no place to speak, who cannot leave even a name, facing the rules a vast empire presses down on him, what else can he do?\n\nThis is the daily situation of "the side on the receiving end."',
      },
      deliverGoal: 'N3 setup — 为什么不反抗: 反抗不起 (没兵: 宫里有最强军队火炮骑兵精锐/一村农民拿锄头挡不住) + 没说话的地方 (定税从没人问他/声音传不进宫) + 没被记住的资格 (将军大臣工匠写进史书/农民只是税册一户人口一个头/死了数字换下一个) + 该问的是没兵没声音没名字的人面对帝国规矩还能做什么 = receiving-end 处境',
      engagementHook: '你问我为什么不反抗?我没有兵,没有说话的地方,连名字都留不下。一个农民拿着锄头,挡不住帝国的火炮。一个什么都没有的人,面对压下来的规矩,还能做什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'nms-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1564 年的某一天,村里传来一个消息。说是宫里那位新君主——Akbar(阿克巴)——下了一道令:废掉 jizya。\n\n一开始你不敢信。这笔税收了几百年,是天经地义的规矩。哪有君主会主动把到手的钱往外推?\n\n可消息是真的。从这一年起,你不用再交那笔「因为你不是穆斯林」的人头税了。\n\n你站在地里,缓了好一会儿才回过神。你这辈子,头一回有了一种陌生的感觉:好像在这个帝国里,你也算个人了。不是低一等的、要额外花钱买「容许你存在」的那种人,就是一个普普通通的、跟别人一样的帝国子民。\n\n你不懂宫里那些 sulh-i-kul 的大道理,你也不关心。你只知道这一件实实在在的事:那笔羞辱你的税,没了。\n\n可就在你松一口气的同时,一个念头也冒了出来,你压都压不住——\n\n这笔税,是他「赏」给我免的。那他要是哪天不高兴了,是不是也能一句话,又加回来?',
        en: 'Now you are me.\n\nOne day in 1564, word came to the village. They said the new ruler in the palace, Akbar, had issued an order: abolish the jizya.\n\nAt first you dared not believe it. This tax had been collected for centuries; it was simply the rule. What ruler would push money already in hand back out the door?\n\nBut the word was true. From this year on, you no longer paid that head tax that was there "because you are not a Muslim."\n\nYou stood in the field, and it took a long while to come back to yourself. For the first time in your life, you felt a strange thing: as if in this empire, you too counted as a person. Not the lesser kind who must pay extra to buy "permission to exist," but simply an ordinary subject of the empire, the same as anyone else.\n\nYou do not understand the grand talk of sulh-i-kul in the palace, and you do not care. You know one solid thing: the tax that shamed you is gone.\n\nBut even as you let out your breath, a thought rose that you could not press back down,\n\nThis tax, he "granted" me its lifting. So if one day he is displeased, can he not, with a word, add it back again?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1564 村里传消息 Akbar 废 jizya + 不敢信 (收了几百年/哪有君主主动推钱) + 真的不用交了 + 站地里缓神头一回觉得「在帝国里也算个人了」(不是低一等买容许存在的人是普通子民) + 不懂 sulh-i-kul 大道理只知羞辱的税没了 + 压不住的念头: 这是他「赏」的不高兴了能不能一句话又加回来',
      engagementHook: '1564 年那笔羞辱我的税没了,我头一回觉得自己在这帝国里也算个人了。可就在松一口气的同时,一个念头压都压不住:这是他「赏」的——他要是哪天不高兴,是不是一句话又能加回来?你会怎么想?',
      expectsRealAnswer: false,
    },
    {
      id: 'nms-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '废税之后那些年,日子是真的好过了些。\n\n少了那笔人头税,一家人手里能多留下一点粮、一点钱。逢年过节,孩子能添件新衣。这点实实在在的好处,我记在心里。\n\n我也听人说,这位 Akbar 君主,跟以前的不一样。说他娶了印度教的公主,说他用印度教徒当大官、当将军,说他把各教的学者请到一块儿辩论,谁也不偏着。\n\n这些事,离我很远,我半信半疑。但我承认,我对这位君主,生出了一点从前没有过的东西——一点感激,甚至一点信任。好像坐在那座宫里的,头一回是个把我们也当回事的人。\n\n可你越是过得好,那个念头就越是在心里扎得深:这一切好,都不是我挣来的,是他给的。\n\n我没签过任何契约,没拿到任何一张写死的凭据。我手里什么都没有,只有他的一念之仁。\n\n一个人的好日子,要是全靠另一个人的好心,那这日子,到底踏不踏实?',
        en: 'In the years after the tax was abolished, life truly grew a little easier.\n\nWith that head tax gone, the family could keep back a little more grain, a little more money. At festivals, the children could have a new garment. This solid good I kept in my heart.\n\nI also heard it said that this ruler Akbar was unlike those before. They said he married a Hindu princess, said he used Hindus as high officials and as generals, said he brought scholars of every faith together to debate and favored none.\n\nThese things were far from me, and I half believed them. But I confess that toward this ruler I felt something I had not felt before, a little gratitude, even a little trust. As if, for the first time, the one sitting in that palace was someone who took us too as worth something.\n\nYet the better I lived, the deeper that thought drove into my heart: all this good was not earned by me, it was given by him.\n\nI had signed no contract, held no paper written firm. In my hands was nothing but his single act of mercy.\n\nIf a man\'s good years rest entirely on another man\'s goodwill, then how solid, in the end, are those years?',
      },
      deliverGoal: 'N5 story — 废税后日子好过些 (少人头税多留粮钱/孩子添新衣) + 听说 Akbar 不一样 (娶印度教公主/用印度教徒当大官将军/请各教学者辩论不偏) + 生出从前没有的感激甚至信任 (头一回宫里坐着把我们当回事的人) + 但越过得好念头越深: 这些好不是挣来的是给的 + 没签契约没写死凭据手里只有他一念之仁 + 好日子全靠别人好心踏不踏实',
      engagementHook: '废税以后日子是真的好过了些,我对这位君主甚至生出一点感激和信任。可越过得好,那个念头扎得越深:这一切都不是我挣来的,是他给的——我手里没有任何写死的凭据,只有他的一念之仁。靠别人好心的好日子,踏实吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'nms-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我跟你说一件,得过好几代人才看明白的事。\n\nAkbar 君主在的时候,日子是好的。他死了以后,他儿子、孙子大体也照着他的路子走,我们这些非穆斯林,平平安安过了好些年。\n\n可到了 Akbar 的曾孙——一个叫 Aurangzeb(奥朗则布)的君主手里,风向变了。\n\n1679 年,他下了一道令:把 jizya,又加了回来。\n\n你能想象那一刻,我的后人——跟我一样的农民——心里是什么滋味吗?那笔被免了一百多年、几乎快被忘掉的羞辱人的税,一夜之间,又压回了他们的头上。\n\n他们没做错任何事。他们还是老老实实种地、交田赋。变的不是他们,是宫里换了一个人,这个人的念头,跟他曾祖父反过来了。\n\n这一刻,我当年在地里冒出的那个念头,被狠狠地证实了:这笔税的免与不免,从来不在我们手里。它在君主一个人的心情里。\n\n同一片地,同一种人,宽容来了又走——全看那一年,坐在宝座上的,是谁。',
        en: 'Let me tell you a thing it took several generations to see clearly.\n\nWhile the ruler Akbar lived, the years were good. After he died, his son and grandson kept broadly to his road, and we non-Muslims passed many a peaceful year.\n\nBut in the hands of Akbar\'s great-grandson, a ruler named Aurangzeb, the wind changed.\n\nIn 1679 he issued an order: the jizya, brought back again.\n\nCan you imagine, in that moment, what was in the hearts of my descendants, farmers like me? That shaming tax, lifted for over a hundred years and all but forgotten, was pressed back onto their heads overnight.\n\nThey had done nothing wrong. They still tilled the soil honestly, still paid the land tax. What changed was not them; it was that the palace had a new man in it, and this man\'s mind ran the reverse of his great-grandfather\'s.\n\nIn this moment, the thought that had risen in me in the field all those years before was bitterly confirmed: whether this tax is lifted or not was never in our hands. It lay in one ruler\'s mood.\n\nThe same land, the same people, tolerance come and gone, all depending on who, that year, sat on the throne.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Akbar 在时日子好/子孙照路子走平安多年 + 曾孙 Aurangzeb 1679 把 jizya 又加回来 + 后人心里滋味 (免百年快忘的羞辱税一夜压回头) + 他们没做错还老实种地交田赋 (变的不是他们是宫里换了人念头反过来) + 当年地里的念头被狠狠证实: 免不免从不在我们手里在君主心情里 + 同片地同种人宽容来了又走全看谁坐宝座 (温度计 spine)',
      engagementHook: '同一片地,同一种人,那笔被免了一百多年的税,在 Aurangzeb 手里一夜之间又加了回来。我后人没做错任何事——变的不是他们,是宫里换了个人。这证实了我当年的念头:免不免,从不在我们手里,在君主一个人的心情里。',
      expectsRealAnswer: false,
    },
    {
      id: 'nms-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的处境,不只是莫卧儿一家的事。把眼光放宽,你会发现,在那个时代,像我这样「被统治、却说不上话」的人,到处都是。\n\n往西看,奥斯曼帝国治下,也有大片不信伊斯兰的人——东正教徒、犹太人、亚美尼亚人。他们也得交 jizya,也被按宗教分门别类地管着。\n\n那边还有一件更扎心的事。奥斯曼有个制度叫 devshirme:每隔几年,从基督徒村子里,把人家的男孩,合法地带走,改了信仰,练成帝国的兵。\n\n你换到那个 Janissary 的视角,会听见那个男孩后来怎么飞黄腾达。可你要是站在他爹娘这边——站在我这边,「受影响的那一方」这边——你看见的,是一对父母,眼睁睁看着自己的孩子被帝国夺走,再也要不回来。\n\n那男孩的荣耀,和他爹娘的丧子,是同一件事的两面。\n\n你发现没有:不管是莫卧儿的一笔税,还是奥斯曼的一个孩子——决定权从来都在宫里那位手上。我们这些人,只能承受落到头上的那一份。',
        en: 'My situation was not the Mughals\' alone. Widen your view, and you find that in that age, people like me, ruled yet with no say, were everywhere.\n\nLook west, and under the Ottoman empire too were great numbers who did not follow Islam, Orthodox Christians, Jews, Armenians. They too paid the jizya, and were governed sorted by religion into kind.\n\nAnd there was a thing over there that cuts deeper still. The Ottomans had a system called the devshirme: every few years, from Christian villages, they lawfully took people\'s boys, changed their faith, and drilled them into the empire\'s soldiers.\n\nSwitch to that Janissary\'s view, and you will hear how that boy later rose high. But if you stand on the side of his father and mother, on my side, the side of "those on the receiving end," what you see is a pair of parents watching their child taken by the empire, never to be claimed back.\n\nThat boy\'s glory and his parents\' lost son are two faces of the one thing.\n\nHave you noticed: whether it is a tax of the Mughals or a child of the Ottomans, the power to decide was always in the hands of the one in the palace. We can only bear the share that falls on our own heads.',
      },
      deliverGoal: 'N7 story + 3-empire coverage — 处境不只莫卧儿 + 奥斯曼治下大片非穆斯林 (东正教/犹太/亚美尼亚也交 jizya 按宗教分类管) + devshirme 从基督徒村合法带走男孩改信仰练成兵 + 桥到 Janissary lens (那边听男孩飞黄腾达/这边站爹娘看孩子被夺再要不回) + 男孩荣耀与父母丧子同一事两面 + 莫卧儿一笔税/奥斯曼一个孩子决定权都在宫里那位手上我们只能承受落头上的一份',
      engagementHook: '不管是莫卧儿的一笔税,还是奥斯曼夺走的一个孩子——决定权从来都在宫里那位手上,我们只能承受落到头上的那一份。那个男孩的荣耀,和他爹娘的丧子,你怎么看待它们是同一件事的两面?',
      expectsRealAnswer: false,
    },
    {
      id: 'nms-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你可能会想:这农民也太惨了吧,一辈子任人摆布,什么都做不了?\n\n我想跟你说点别的。我们这些「没声音」的人,不是什么都没有。\n\n我们有我们的活法。jizya 加回来,我们就勒紧裤腰带交;遇上实在活不下去的苛政,我们也会用我们的办法——有的村子整村逃到管得松的地方去,有的地方农民联起手来抗租抗税。我们不上史书,但我们不是石头。\n\n我们还有我们的根。宫里换谁当政,我们的语言、我们的神、我们过的节、我们种地的法子,一代传一代,没断过。帝国的政策来了又走,可我们这一方水土养出来的活法,比哪一个王朝都活得长。\n\n莫卧儿后来散了,可印度教徒还在,我们的庙还在,我们的节还在过。\n\n所以你别只把我看成一个「受害者」。我是承受的那一方,这不假。但承受,本身就是一种力量——你压不垮我,我熬得过你。我熬过了一个又一个换了又换的君主。',
        en: 'You might think: this farmer is wretched indeed, pushed about his whole life, able to do nothing.\n\nLet me tell you something else. We "voiceless" people are not without anything.\n\nWe have our ways of living. When the jizya came back, we tightened our belts and paid it; when tyranny made life truly unlivable, we used our own means, whole villages fled to places where rule was looser, in some places farmers joined hands to resist rents and taxes. We do not enter the histories, but we are not stones.\n\nWe have our roots too. Whoever holds power in the palace, our language, our gods, the festivals we keep, the ways we till the soil, pass down generation to generation, unbroken. The empire\'s policies come and go, but the way of life this land and water raise outlives any dynasty.\n\nThe Mughals scattered in the end, yet the Hindus remain, our temples remain, our festivals are still kept.\n\nSo do not see me only as a "victim." I am the side that bears, that is true. But to bear is itself a kind of strength, you cannot crush me, I outlast you. I have outlasted ruler after ruler, swapped out one by one.',
      },
      deliverGoal: 'N8 story — 别只看成任人摆布 + 没声音的人不是什么都没有 + 有活法 (jizya 回来勒紧裤腰带交/苛政时整村逃到管得松处/农民联手抗租抗税/不上史书但不是石头) + 有根 (换谁当政语言神节种地法子一代传一代不断/政策来去活法比王朝活得长) + 莫卧儿散了印度教徒/庙/节还在 + 别只看成受害者承受本身是力量 (压不垮熬得过/熬过一个又一个君主)',
      engagementHook: '你别只把我看成一个「受害者」。承受,本身就是一种力量——帝国的政策来了又走,可我们的语言、我们的神、我们的节,一代传一代。莫卧儿散了,我们还在。「熬得过你」算不算一种力量?',
      expectsRealAnswer: false,
    },
    {
      id: 'nms-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉到几百年后,你会看见我这一方的故事,最后通到了哪里。\n\n莫卧儿在 Aurangzeb 之后,一块一块地碎了。再后来,从海上来的英国人,用商行、用枪炮,一步步接管了整个印度。我们这些农民,换了一个又一个主子,可「被统治、说不上话、承受落到头上那一份」的处境,几百年没怎么变。\n\n这中间有件事值得你记住:那个曾经靠强制建立的什叶身份——萨非在波斯强制改宗造出来的——五百年过去,成了今天伊朗人最真实的认同。被「赏」的、被「逼」的东西,过了足够长的时间,有时会长成真的根。\n\n而我最想让你带走的,是这个:历史书爱写宫里那位——他多英明、多残暴、建了多伟大的陵墓。可一个帝国到底好不好,真正的答案,藏在我们这些人身上:那一年,落到一个普通农民头上的,是少一笔税的喘息,还是多一笔税的羞辱?\n\n评判一个时代,别只问宫里那位过得怎么样。要问问站在交税那一边的人,过得怎么样。',
        en: 'Pull the lens out several centuries, and you see where my side\'s story finally leads.\n\nAfter Aurangzeb, the Mughals cracked apart piece by piece. Later still, the British, come from the sea, with trading companies and with guns, took over all of India step by step. We farmers changed master after master, yet the situation, ruled, without a say, bearing the share that falls on our heads, hardly changed in centuries.\n\nThere is a thing here worth remembering: that Shi\'a identity once built by force, made by the Safavids converting Persia by compulsion, became, five centuries on, the most real identity of Iranians today. The "granted," the "compelled," given long enough, can sometimes grow into real roots.\n\nAnd what I most want you to carry away is this: the histories love to write of the one in the palace, how wise, how cruel, what a grand tomb he built. But whether an empire was good or not, the true answer is hidden in people like us: that year, what fell on an ordinary farmer\'s head, the breath of one less tax, or the shame of one more?\n\nTo judge an age, do not only ask how the one in the palace fared. Ask how those on the side that pays the tax fared.',
      },
      deliverGoal: 'N9 zoom-out + topic connection + 3-empire coverage — 莫卧儿 Aurangzeb 后碎 + 英国从海上用商行枪炮接管印度 + 农民换主子但「被统治说不上话承受」几百年没变 + 萨非强制改宗造的什叶身份五百年成伊朗最真认同 (被赏被逼的东西够久长成真根) + 最想带走的: 评判帝国好不好答案藏在我们身上 (落农民头上是少一笔税喘息还是多一笔税羞辱) + 别只问宫里那位要问交税那边的人',
      engagementHook: '历史书爱写宫里那位多英明、多残暴。可一个帝国到底好不好,真正的答案藏在我们这些人身上:那一年落到一个普通农民头上的,是少一笔税的喘息,还是多一笔税的羞辱?评判一个时代,该问谁?',
      expectsRealAnswer: false,
    },
    {
      id: 'nms-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,再看这几个火药帝国,两种说法都站得住。\n\n一种说法:它们说到底,是压在我们头上的。它们靠火炮打下疆土,把我们这些人数最多的人,变成只交税、说不上话、连名字都留不下的「人口」。我们的好日子坏日子,从来不在自己手里,全看宫里那位的一念。我活在它的「黄金时代」里,可那金子,一两也没落到我手上。\n\n另一种说法:在那个谁都逃不掉「被统治」的年代里,它们之间,确实有好坏之分,而这点分别,对我们是实实在在的。Akbar 废 jizya 的那些年,我活得有尊严些;Aurangzeb 加回来的那些年,我活得屈辱些。同样是「被统治」,碰上一个把我也当人看的君主,和碰上一个不把我当回事的君主,我这条命过得是不一样的。这点不一样,不能因为「反正我都没权」就一笔抹掉。\n\n这两边不是矛盾。它们一起才是完整的我:我既被整个帝国压着,又真切地在乎压我的那个人,到底是 Akbar 还是 Aurangzeb。\n\n你怎么看?想 30 秒,写下来。',
        en: 'Having walked my whole life, look again at these gunpowder empires. Both views stand.\n\nOne view: in the end, they pressed down on us. They won their realms by cannon and turned us, the most numerous, into a "population" that only pays tax, has no say, cannot leave even a name. Our good years and bad were never in our own hands, all at the whim of the one in the palace. I lived inside its "golden age," yet of that gold, not an ounce fell into my hand.\n\nThe other view: in an age when no one could escape being ruled, there truly was better and worse among them, and that difference was solid and real to us. In the years Akbar abolished the jizya, I lived with more dignity; in the years Aurangzeb brought it back, I lived with more humiliation. Even under the same "being ruled," to meet a ruler who took me too as a person, and to meet one who took me as nothing, made my one life run differently. That difference cannot be wiped out just because "I had no power either way."\n\nThese two are not a contradiction. Together they are the whole of me: I was at once pressed down by the entire empire, and truly cared whether the one pressing me was Akbar or Aurangzeb.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (说到底压在我们头上/火炮打疆土把最多人变成只交税说不上话留不下名的人口/好坏不在自己手里全看一念/活在黄金时代金子一两没落手上) / 另一种说法 (谁都逃不掉被统治的年代它们间确实有好坏之分且对我们实实在在/Akbar 废税有尊严 vs Aurangzeb 加回屈辱/同样被统治碰上把我当人看 vs 不当回事的君主命过得不一样/不能因没权就抹掉) / 两边不矛盾一起才是完整的我 (既被压又在乎压我的是 Akbar 还是 Aurangzeb) / 想 30 秒',
      engagementHook: '一种说法:这些帝国说到底是压在我们头上的,金子一两没落到我手上。另一种说法:同样是被统治,碰上 Akbar 还是碰上 Aurangzeb,我这条命过得真不一样。两边都站得住,你的 30 秒到了,你怎么看?',
      expectsRealAnswer: true,
    },
    {
      id: 'nms-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个种地的,一笔来了又走的税,一个我从没见过、却攥着我全部好坏的君主,一群跟我一样没留下名字的人——你会怎么评价这样一种活法?\n\n几个靠火药打天下的大帝国,把我们这些人数最多的人,过成了只被写进税册的「人口」。我们的尊严,得靠宫里那位「赏」;不赏了,我们一点办法都没有。你会说这是命,还是说,就算在这命里,「碰上哪个君主」也实实在在地要紧?你怎么评?\n\n不过先记住一件事:你这一遍,听的只是被这些帝国压在底下的人。真正坐在宫里、用「宽容」黏住一亿人的 Akbar,被帝国从家里夺走、又被它抬起来的那个 Janissary——他们各有各的说法,各有各的难处。换个视角再走一遍,你会听见他们怎么为自己辩护,也会回头看看,你刚才替我下的那个判断,站不站得住。\n\n再想一步:今天你身边,有没有一种好处,是「别人赏的、随时可能收回的」——一个掌权的人心情好就对你松一点,某条对你有利的规矩其实从没写死?那时候,你会满足于「现在有人赏我」,还是会去想办法,把它变成一个谁也收不回、不必看任何人脸色的东西?',
        en: 'Having walked my whole life, a tiller of soil, a tax that came and went, a ruler I never saw yet who held all my good and ill, a crowd of people like me who left no name, how would you judge such a way of living?\n\nA few great empires that won their realms by gunpowder lived us, the most numerous, into a "population" written only into the tax rolls. Our dignity had to be "granted" by the one in the palace; ungranted, we had no recourse at all. Would you call this fate, or would you say that even within this fate, "which ruler you meet" mattered, solidly and truly? How do you judge it?\n\nBut first, remember one thing: this pass, you heard only the people these empires pressed beneath them. The Akbar who actually sat in the palace and bound a hundred million with "tolerance," the Janissary the empire took from his home and then raised up, each has his own case, his own hardship. Run it again through another lens and you will hear how they defend themselves, and look back to see whether the judgment you just made for me still holds.\n\nThen take one more step: in your own life today, is there a benefit that is "granted by another and can be taken back at any time," someone in power who eases up on you when their mood is good, a rule in your favor that was never written firm? When that happens, will you be content that "someone favors me now," or will you find a way to turn it into something no one can take back, something that need not court anyone\'s face?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价活法 (种地的/来了又走的税/没见过却攥着我好坏的君主/没留名的人 → 火药帝国把最多人过成税册「人口」/尊严靠赏不赏没办法 → 命 vs 就算命里碰上哪个君主也要紧) + 跨视角指针: 你只听被压在底下的人/Akbar (宽容黏一亿人) + Janissary (被夺又被抬) 各有说法各有难处/换视角再走一遍听他们辩护回头看你的判断站不站得住 + transfer「今天你身边别人赏的随时可收回的好处 (掌权者心情/没写死的规矩)」+ 满足于有人赏还是把它变成谁也收不回不必看脸色的东西',
      engagementHook: '走完我这一生,你会怎么评价这样一种活法?先记住:你这一遍只听了被压在底下的人——Akbar 和那个 Janissary 各有各的说法,换个视角再走一遍。再想一步:今天你身边那个「别人赏的、随时能收回的」好处,你会满足于有人赏你,还是把它变成谁也收不回的?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'akbar':                            akbarLens,
  'janissary':                        janissaryLens,
  'non-muslim-subject-receiving-end': nonMuslimSubjectLens,
};

// per receiving-end 优先 pattern (Gate3 §6):
// 人数最多却最没声音的一方 + N1 gold-standard hook (黄金时代从下往上看) +
// N6「同片地同种人宽容来了又走全看谁坐宝座」跨 lens 温度计对位 +
// N10/N11 跨视角指针 (你只听被压在底下的人 → 换 Akbar/Janissary 视角再走一遍)
export var defaultLens = 'non-muslim-subject-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'gunpowder-empires-1600',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'akbar': 30, 'janissary': 30, 'non-muslim-subject-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-24',
  notes: [
    '3 lens / 11 nodes each / 跨 lens spine: jizya = 帝国对「非穆斯林算不算完整一员」的温度计',
    'N6 cross-lens 对位: Akbar (宽容是「赏」的下个君主能加回) / Janissary (光宗耀祖从父母丧子长出) / 农民 default (同片地同种人宽容来了又走全看谁坐宝座 — Aurangzeb 1679 复 jizya)',
    'defaultLens: non-muslim-subject-receiving-end — 受影响者优先 (人数最多却最没声音 + gold-standard N1「黄金时代从下往上看」+ N10/N11 跨视角指针指回 Akbar/Janissary)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: Janissary 是真实必考群体, 个人姓名/年龄/童年是叙事补充用括号短句标 (jan-n1); 制度 (devshirme/皈依/奴隶兵) 是史实; Din-i Ilahi 显式不夸大 (akb-n7 极小/几乎没人信/死后即散)',
    '核心张力 Akbar→Aurangzeb: 1564 废 jizya (sulh-i-kul) → 1679 Aurangzeb 复 jizya → 莫卧儿衰 (akb-n8 / nms-n6 / 两路都给逻辑不下结论)',
    '3-empire coverage: Ottoman (devshirme/millet/1453 君堡/Janissary lens) + Safavid (1501 强制改宗什叶/Chaldiran/akb-n9 + nms-n9) + Mughal (Babur 1526/Akbar/Aurangzeb 主线)',
    'cultural-ban 第7: 全程 Sultan/Shah/Padishah/Janissary/devshirme/jizya/sulh-i-kul/millet/mansabdari, 无中国概念词; §8 明朝 (神机营) narrative 内才用中国词',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
