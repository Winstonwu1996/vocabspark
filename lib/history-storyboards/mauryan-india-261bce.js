// ─── Mauryan India / Ashoka & the Kalinga War 261 BCE Lens-based Storyboard (Story-First v2) ───
//
// Topic: 阿育王与羯陵伽之战 · Ashoka & the Kalinga War 261 BCE
// CA HSS Grade 6 (Ancient India) · AP World History (古典帝国治理与意识形态)
//
// 3 lens 设计 (per AUTHORING_PIPELINE 第 7/8/12 条):
//   - ashoka                       (perpetrator-actor + reformer arc) — 阿育王 约在位前 268-232 / 羯陵伽征服者 + Rock Edict XIII 忏悔者 + dhamma 治理 (征服者与改革者同一人)
//   - dhamma-official              (lonely-mediator)   — dhamma-mahamatta 达摩官 / 把国王的悔意落地成政策的人 / 夹在皇权与百姓之间
//   - kalinga-survivor-receiving-end (receiving-end)   — 羯陵伽之战幸存者 / 家人在那 10 万死 15 万流放之中 / 听征服者宣布悔过
//
// 跨 lens micro-detail (N6 anchor):
//   「同一句『我后悔了』两个方向」— 阿育王在石头上刻下「我深深懊悔」,达摩官把这句话当政策去推,羯陵伽幸存者听着这句话却看着 Kalinga 没被还回来。
//   - ashoka lens N6: Rock Edict XIII 自刻死亡数字 + 同一块石头上「但我仍有力量,边境别逼我」(悔过的限度)
//   - dhamma-official lens N6: 把国王的悔意翻译成帝国各地百姓能懂的法敕 + 面对羯陵伽人时这句话的分量
//   - kalinga-survivor lens N6: 法敕被念给他听 / 同一句「人」「悔过」/ Kalinga 没归还 15 万人没回家
//
// 跨 Topic 锚:
//   - 古典帝国意识形态比较 (dhamma vs 法度) → 同时代中国战国末/秦统一前夜 (前 260 长平之战)
//   - lion capital 狮子柱头 → 现代印度国徽 (古代征服帝国王徽成现代民主国象征)
//
// defaultLens = 'kalinga-survivor-receiving-end' (受影响者优先 pattern: 被征服并失去家人一方 + 扛最硬问题: 权力者的悔过对已被毁掉的人意味什么)
//
// 11 nodes per lens (multi-faction); 220-380 CN chars/node; ≤2 anchor nodes 可到 ~550 (N6 cross-lens + N10/N11 synthesis)
// expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; 其余全 false
//
// per AUTHORING_PIPELINE.md 铁律 (cultural ban 印度非中国 / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 反 PR-vs-真心: 两种读法同时呈现, 不替学生选边 (Rule 0)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Ashoka / 阿育王 (perpetrator-actor + reformer arc)
// ═══════════════════════════════════════════════════════════════════════

export var ashokaLens = {
  id: 'ashoka',
  name: 'Ashoka',
  nameCn: '阿育王',
  role: 'perpetrator-actor',
  perspectiveTag: 'conqueror-turned-reformer',
  icon: '🦁',
  description: {
    cn: 'Maurya（孔雀）王朝第三代国王，开国君主旃陀罗笈多的孙子，约公元前 268 年即位。即位之初他是个不折不扣的征服者，继承了一个已经很大的帝国，还想要更大。公元前 261 年他吞并了东南海岸那块富庶的 Kalinga（羯陵伽），打赢了，却被自己造成的死亡震住了。他做了一件古代统治者极少做的事：把那场战争的死亡数字，亲手下令刻在石头上。这一遍让你从一个征服者内部，看一个人怎么在赢了之后，开始怀疑自己赢的方式。',
    en: 'The third king of the Maurya dynasty, grandson of its founder Chandragupta, who came to the throne around 268 BCE. At first he was a conqueror through and through: he inherited an already vast empire and wanted it larger. In 261 BCE he annexed Kalinga, the rich land on the southeast coast, won, and was shaken by the death he had caused. He did something almost no ancient ruler did: he ordered the death toll of that war carved into stone himself. This pass lets you watch, from inside a conqueror, how a man begins to doubt the way he won, after he has already won.',
  },
  storyboard: [
    {
      id: 'ash-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '约公元前 261 年，印度东南海岸。一场仗刚打完。我赢了。\n\n我是 Ashoka（阿育王），Maurya（孔雀）帝国的国王。这片次大陆上最强的帝国，是我的。今天，我又给它添上了一块地——Kalinga（羯陵伽），那块一直不肯归附的富庶海岸。\n\n按理说，我该高兴。征服，是我们家族的事业。我祖父打下这个帝国，我父亲守住它，我让它更大。\n\n可我站在这片刚被打下来的土地上，看见的不是胜利。我看见尸体，看见被绳子串成一队往北押走的活人，看见烧空的村子。约 10 万人死了，约 15 万人被掳走。\n\n这一遍，你坐进我这个位置。你是个赢家。可你得想一件赢家很少想的事：我赢的这个方式，到底值不值？',
        en: 'Around 261 BCE, the southeast coast of India. A war has just ended. I have won.\n\nI am Ashoka, king of the Maurya empire. The strongest empire on this subcontinent is mine. Today I have added one more land to it, Kalinga, the rich coast that would never submit.\n\nBy rights I should be glad. Conquest is my family\'s trade. My grandfather built this empire, my father held it, I make it larger.\n\nBut standing on this freshly conquered ground, what I see is not victory. I see corpses, I see the living roped into lines and driven north, I see villages burned hollow. About a hundred thousand are dead, about a hundred and fifty thousand carried away.\n\nThis pass puts you in my seat. You are a winner. But you must think a thing winners rarely think: the way I won this, was it worth it?',
      },
      deliverGoal: 'N1 hook — 约前 261 羯陵伽刚打完阿育王赢了 + 自我介绍 (Maurya 国王/征服是家族事业/祖父打下父亲守住他做大) + 站在战场看见的不是胜利是 10 万死 15 万被掳 + 这一遍视角设定 (赢家想一件赢家少想的事: 赢的方式值不值)',
      engagementHook: '我赢了——可我站在战场上，想的不是胜利，是我赢的方式到底值不值。一个人赢了之后，还会怀疑自己赢的方式吗？你会吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ash-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我从哪儿来，你才懂我为什么打这场仗。\n\n我们家叫 Maurya（孔雀）。约公元前 321 年，我祖父 Chandragupta（旃陀罗笈多）从乱世里打出一个帝国——从今天的阿富汗山地，一直到孟加拉湾。传说他身边有个厉害的谋臣 Kautilya（考底利耶），留下一部讲治国权术的书 Arthashastra（《政事论》）。那本书很冷：讲实力、讲情报、讲怎么让对手害怕你。\n\n这就是我接手的家业：一个靠实力撑起来的庞大帝国。约公元前 268 年我即位。\n\n帝国已经很大了。但东南角有一块地，叫 Kalinga，一直独立，不肯归我。它靠海、有钱、做海上生意。一个不肯归附的富庶邻居，对一个征服者来说，就是一根扎在眼里的刺。\n\n所以打它，在我即位的时候，是再自然不过的事。我从没想过，这会是我一生最后一场大征服。',
        en: 'First, where I come from, so you understand why I fought this war.\n\nMy house is called Maurya. Around 321 BCE my grandfather Chandragupta carved an empire out of a time of chaos, from the mountains of today\'s Afghanistan to the Bay of Bengal. He is said to have had a formidable adviser, Kautilya, who left a book on the craft of rule, the Arthashastra. A cold book: about power, about spies, about making your rivals fear you.\n\nThis was the inheritance I took up: a vast empire held up by strength. I came to the throne around 268 BCE.\n\nThe empire was already large. But in the southeast corner lay a land called Kalinga, long independent, refusing to be mine. It sat on the sea, rich, trading by ship. To a conqueror, a wealthy neighbor that will not submit is a thorn in the eye.\n\nSo to strike it, when I took the throne, was the most natural thing in the world. I never imagined it would be the last great conquest of my life.',
      },
      deliverGoal: 'N2 setup — Maurya 家业 (祖父 Chandragupta 约前 321 立国/阿富汗到孟加拉湾/谋臣 Kautilya + Arthashastra 冷峻权术书) + 约前 268 即位接手靠实力的庞大帝国 + Kalinga 独立富庶靠海是眼中刺 + 打它本是自然事/没想到是最后一场大征服',
      engagementHook: '我接手的是一本讲「让对手害怕你」的治国书撑起的帝国。一个富庶的邻居不肯归顺，对征服者就是眼里的刺。你觉得「他们有、又不肯给我」算不算开战的理由？',
      expectsRealAnswer: false,
    },
    {
      id: 'ash-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得诚实地告诉你，开打之前，我心里没有一丝犹豫。\n\n那时候的我，脑子里装的是祖父那一套：帝国就是要大，邻居就是要么归附、要么打服。Kalinga 富、Kalinga 强、Kalinga 不服——那就打到它服。\n\n这不是我一个人的想法。在那个年代，一个国王的本事，就是用版图来衡量的。打下别人的地，是荣耀，是功业，是写进家族传承里的东西。没有人会站出来说：等等，那块地上住着几十万活人。\n\n我备好军队，备好粮草，向东南进发。我以为这会跟以前每一场仗一样：打，赢，把新的地方收进帝国，回家。\n\n你现在还在我这一边，对吧？一个准备开疆拓土的国王。这一刻你心里是兴奋的、是理直气壮的。\n\n记住这一刻的你。因为打完之后那个你，会跟现在的你，完全不一样。',
        en: 'I must tell you honestly: before the fighting began, there was not a flicker of doubt in me.\n\nThe man I was then carried my grandfather\'s creed in his head: an empire must grow, a neighbor must either submit or be beaten into submission. Kalinga was rich, Kalinga was strong, Kalinga would not submit, so I would beat it until it did.\n\nThis was not my thought alone. In that age, a king\'s worth was measured by his map. To take another\'s land was glory, was achievement, was the thing written into the family line. No one would stand up and say: wait, hundreds of thousands of living people dwell on that land.\n\nI readied my army, readied the grain, and marched southeast. I thought this would be like every war before: fight, win, fold the new place into the empire, go home.\n\nYou are still on my side, are you not? A king setting out to expand his realm. In this moment you feel excitement, you feel fully justified.\n\nRemember this version of you. Because the you that comes back after the fighting will be nothing like the you here now.',
      },
      deliverGoal: 'N3 setup — 开打前没一丝犹豫 (祖父那套: 帝国要大邻居要么归附要么打服) + 那年代国王本事用版图衡量/打地是荣耀/没人替几十万活人说话 + 备军东南进发以为跟以前一样 + 让学生记住「开打前理直气壮的你」/打完后会完全不一样',
      engagementHook: '开打前我没有一丝犹豫——在那个年代，国王的本事就是用版图衡量的。记住这个「理直气壮的你」，因为打完之后的你会完全不一样。你能想象什么事会让一个人彻底变了样吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ash-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。仗，已经打完了。\n\n你赢了。Kalinga 是你的了。按你出发时的想法，这一刻你该庆功、该班师、该把这块地写进你的功业。\n\n可你没有走开。你站在战后的土地上，第一次，真正地看。\n\n你看见的不是地图上多出来的一块颜色。你看见一个母亲守着不会再动的孩子。你看见被绳子串成长队的人，约 15 万，往你的帝国腹地押走，他们回头望了一眼自己的家，那是最后一眼。你看见烧空的村子，闻见还没散的烟。约 10 万人，死在你的胜利里。\n\n这些数字，不是别人报给你的战报。是你亲眼看见的、一个一个的人。\n\n这一刻，有个念头钻进你心里，你从来没有过的念头：我赢了。可我赢的，到底是什么？\n\n你出发时那个理直气壮的国王，在这一刻，碎了。',
        en: 'Now you are me. The fighting is over.\n\nYou have won. Kalinga is yours. By the thoughts you set out with, this is the moment to celebrate, to march home, to write this land into your record of deeds.\n\nBut you do not walk away. You stand on the ground after the battle and, for the first time, truly look.\n\nWhat you see is not one more patch of color on a map. You see a mother keeping watch over a child who will not move again. You see people roped into long lines, about a hundred and fifty thousand, driven toward the heart of your empire, turning to look back at their homes one last time. You see villages burned hollow, you smell the smoke not yet cleared. About a hundred thousand are dead, inside your victory.\n\nThese numbers are not a battle report someone hands you. They are people you see with your own eyes, one by one.\n\nIn this moment a thought enters you, a thought you have never had: I have won. But what is it I have won?\n\nThe justified king who set out, in this moment, breaks.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 仗打完赢了 Kalinga 是你的 + 没走开第一次真正地看 (不是地图多块颜色而是守着孩子的母亲/15 万被串队押走回望最后一眼/烧空村子未散的烟/10 万死在你的胜利里) + 数字是你亲眼看见一个一个的人 + 念头钻进来「我赢了可我赢的是什么」+ 理直气壮的国王碎了',
      engagementHook: '你赢了，可你没有走开——你站在战后的土地上，第一次真正地看：那不是地图上多出来的一块颜色，是一个一个的人。那个出发时理直气壮的你，碎了。是什么让一个赢家，开始恨自己赢的东西？',
      expectsRealAnswer: false,
    },
    {
      id: 'ash-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '碎了之后，我做了一件我自己都没想到的事。\n\n一般的国王，打了胜仗，会立碑歌功颂德：我多英明、我的军队多勇猛、敌人多么不堪一击。这是规矩，是排场。\n\n我没有。我下令把另一种东西刻在石头上——刻在帝国各地的岩壁、石柱上，让所有人、所有后人都能看见。\n\n我刻的是：即位第八年，我征服了 Kalinga。约 15 万人被掳走，约 10 万人被杀，还有数倍于此的人在战后死去。看着这一切，我心生深深的懊悔。\n\n你想想这有多反常。我是胜利者。我本可以只刻「我赢了」。可我把我造成的死亡，一笔一笔，刻进石头，留给一千年、两千年后的人看。\n\n（这块石头，今天叫 Major Rock Edict XIII，第十三大石敕。它是历史上极罕见的——一个胜利者，亲手刻下自己的罪。）\n\n为什么这么做？连我自己，可能都没完全想清楚。',
        en: 'After I broke, I did a thing I did not expect of myself.\n\nAn ordinary king, after a victory, raises a monument singing his own praises: how wise I am, how brave my army, how feeble the enemy. This is custom, this is display.\n\nI did not. I ordered something else carved into stone, into the rock faces and pillars across the empire, where everyone, and everyone who came after, could see it.\n\nWhat I carved was this: in the eighth year of my reign, I conquered Kalinga. About a hundred and fifty thousand were carried away, about a hundred thousand were killed, and many times that number died afterward. Looking on all this, I felt a deep remorse.\n\nThink how strange this is. I am the victor. I could have carved only "I won." Instead I cut the death I caused, figure by figure, into stone, to be read by people one thousand, two thousand years later.\n\n(This stone is called today the Major Rock Edict XIII. It is among the rarest things in history: a victor who carves his own crime with his own hand.)\n\nWhy do it? Even I, perhaps, have not fully worked it out.',
      },
      deliverGoal: 'N5 story — 碎了后做了没想到的事 (一般国王立碑歌功颂德是规矩排场/我没有) + 下令把死亡刻在帝国岩壁石柱让所有后人看 + 转述 Rock Edict XIII (即位第八年征服 Kalinga/15 万掳/10 万杀/数倍战后死/深深懊悔) + 反常: 胜利者亲手刻下自己的罪 + 为什么这么做连我自己都没完全想清楚',
      engagementHook: '别的国王打了胜仗立碑歌功颂德，我却把我造成的 10 万人死亡，亲手刻进石头，留给两千年后的人看。一个胜利者主动刻下自己的罪——你觉得他图什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'ash-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可你别急着把我想成一个放下屠刀的圣人。同一块石头上，还刻着另一句话——这句话，才是真正的我。\n\n懊悔之后，我宣布了一个转向：从今往后，我追求的不再是武力的胜利，而是 **dhamma（达摩）**的胜利。dhamma 不是某一个教，它是一套做人的公共准则——非暴力、宽容、对各教派一视同仁、善待穷人病人、克制自己。我要用「以德服人」，代替「以力服人」。\n\n听起来，我像是变成了一个和平主义者，对吧?\n\n可同一块第十三大石敕上,紧接着,我刻了这样一句:即便是边境那些还没归附的部族,也该知道——王虽然愿意宽恕、愿意讲 dhamma,但王**仍然有力量**。他们最好悔改,免得遭殃。\n\n你听清楚了:我一边说我深深懊悔、我要讲非暴力,一边警告边境——别逼我,我手里还有刀。\n\n这两句话,刻在同一块石头上。这就是真实的我。悔过是真的,刀也是真的。我没有解散军队,没有放弃帝国,也没有把 Kalinga 还回去。',
        en: 'But do not rush to make me a saint who has laid down the blade. On the same stone there is another line, and this line is the truer me.\n\nAfter the remorse I declared a turn: from now on, what I seek is no longer the victory of force but the victory of dhamma. Dhamma is not any one religion; it is a public code for living, non-violence, tolerance, equal respect for every sect, kindness to the poor and the sick, restraint of oneself. I would conquer by virtue rather than by force.\n\nIt sounds as if I had become a pacifist, does it not?\n\nYet on the same Major Rock Edict XIII, right after, I carved this: even the border peoples not yet submitted should know that, though the king is willing to forgive, willing to deal in dhamma, the king still has power. They had better repent, lest harm come to them.\n\nHear it clearly: in one breath I say I deeply regret, I will keep non-violence, and in the next I warn the border, do not push me, I still have the blade.\n\nThese two lines are carved on the same stone. This is the true me. The remorse is real, and the blade is real. I did not disband the army, I did not give up the empire, and I did not give Kalinga back.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 别把我想成放下屠刀的圣人 + 转向「dhamma 之胜」非武力之胜 (dhamma ≠ 某教/跨教派公共准则非暴力宽容福利克制/以德服人代以力服人) + 但同一块 Rock Edict XIII 紧接着警告边境「王仍有力量别逼我」+ 同一块石头两句话 = 真实的我 (悔过真刀也真/没解散军队没放弃帝国没还 Kalinga)',
      engagementHook: '同一块石头上，我一边刻「我深深懊悔、我要讲非暴力」，一边刻「但我仍有力量，边境别逼我」。悔过是真的，刀也是真的——一个人能同时是这两样吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ash-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那 dhamma 到底是怎么落到地上的?不是靠我喊口号,是靠一套实实在在的做法。\n\n我把法敕(edicts)刻遍帝国——岩壁上、石柱上,用各地百姓能懂的语言。这是我向整个帝国「广播」的方式:我要你们知道我在想什么、要你们怎么做。\n\n我做了这些事:在大路两旁种树、掘井、设供人和牲畜歇脚治病的地方;减少王室膳食里的杀生;给死刑犯三天缓期去上诉;派官员巡视各地,照顾弱者、调解纠纷、监督官吏别欺压百姓。\n\n我还特别强调一条:对所有的教派,一律尊重。我自己偏向佛教,也扶持佛教、修建 stupa(佛塔)。但我推行的 dhamma 是做给所有人看的——婆罗门的、佛教的、耆那教的,我都要他们和睦相处。\n\n为什么这么在意「各教和睦」?因为我的帝国大得吓人,里面什么人、什么信仰都有。要把这一大盘人黏在一起,光靠刀不够。dhamma,就是那块黏合剂。',
        en: 'So how did dhamma actually reach the ground? Not by my shouting slogans, but through concrete practice.\n\nI had edicts carved across the empire, on rock faces and pillars, in the languages ordinary people could understand. This was how I broadcast to the whole empire: I want you to know what I am thinking, and what I want you to do.\n\nI did these things: planted trees along the great roads, dug wells, set up places where people and animals could rest and be treated; reduced the killing in the royal kitchen; gave the condemned three days\' stay to appeal; sent officers to travel the provinces, to care for the weak, settle disputes, and watch that officials did not bully the people.\n\nAnd I stressed one thing above all: respect for every sect, without exception. I myself leaned toward Buddhism, and I supported it and built stupas. But the dhamma I promoted was made for all: Brahmin, Buddhist, Jain, I wanted them to live in concord.\n\nWhy did I care so much for concord among the sects? Because my empire was frighteningly large, holding every kind of person and every kind of faith. To bind so vast a crowd together, the blade alone was not enough. Dhamma was the binding.',
      },
      deliverGoal: 'N7 story — dhamma 怎么落地 (不靠喊口号靠实做) + 法敕刻遍帝国用各地语言「广播」+ 实做 (路边种树掘井设人畜医疗点/减王室杀生/死刑三天缓期上诉/派官巡视照顾弱者监督官吏) + 强调各教派一律尊重 (自己偏佛教扶持修 stupa 但 dhamma 做给所有人/婆罗门佛教耆那和睦) + 为何在意各教和睦: 帝国大得吓人光靠刀不够 dhamma 是黏合剂',
      engagementHook: '我修路、挖井、给死刑犯三天上诉、要所有教派和睦——这都是真的好事。可我做这些，也是因为我那个大得吓人的帝国，光靠刀黏不住。做好事和稳帝国，在我身上分得清吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ash-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '为了让 dhamma 真的落地，我做了一件别的国王没做过的事:我设了一种新的官,叫 **dhamma-mahamatta(达摩官)**。\n\n他们的活,就是替我把 dhamma 送到帝国每一个角落。从首都 Pataliputra(华氏城)出发,一路巡行,几千公里:看哪里有冤屈、哪里有人欺负弱者、哪里两个教派要打起来、哪个官吏在贪。他们调解、照顾、监督——把我刻在石头上的那些话,变成一个一个村子里真实发生的事。\n\n你想想这有多难。我在首都说一句「我后悔了,从今讲 dhamma」,这句话要变成几百万人日子里的东西,全靠这些人一寸一寸去铺。\n\n而其中最难的,是去那些我刚刚打过的地方。比如 Kalinga。\n\n我的达摩官要走到一个失去全家的羯陵伽人面前,对他说:国王后悔了,国王现在讲非暴力、讲宽容。你猜对方会怎么看他?会信吗?\n\n(那是什么滋味,你换到达摩官那一遍,会亲自走一趟。)',
        en: 'To make dhamma truly take root, I did a thing no other king had done: I created a new kind of officer, the dhamma-mahamatta.\n\nTheir work was to carry dhamma, on my behalf, to every corner of the empire. Setting out from the capital, Pataliputra, they traveled the provinces, thousands of miles: looking for where there was injustice, where the weak were bullied, where two sects were about to come to blows, where an official was taking bribes. They mediated, they cared, they watched, turning the words I had carved into stone into things that actually happened, village by village.\n\nThink how hard this was. I say one line in the capital, "I am sorry, from now on it is dhamma," and that line must become part of the daily lives of millions, laid down inch by inch by these people.\n\nAnd the hardest part was going to the places I had just made war on. Kalinga, for one.\n\nMy dhamma-officer would walk up to a man of Kalinga who had lost his whole family and say to him: the king is sorry, the king now keeps non-violence and tolerance. Guess how that man would look at him. Would he believe it?\n\n(What that feels like, you can walk yourself when you switch to the dhamma-officer pass.)',
      },
      deliverGoal: 'N8 story — 设新官 dhamma-mahamatta 达摩官 (别的国王没做过) + 活是替我把 dhamma 送到帝国每角落 (从 Pataliputra 巡行几千公里/找冤屈/护弱者/调解教派/查贪官/把石头上的话变村里真事) + 难: 首都一句话变几百万人日子靠人一寸寸铺 + 最难是去刚打过的 Kalinga (达摩官要对失去全家的人说国王后悔了/对方会信吗) + 桥到 dhamma-official lens',
      engagementHook: '我派达摩官去刚被我血洗的 Kalinga，对一个失去全家的人说「国王后悔了，现在讲非暴力」。你是那个失去全家的人，你会信吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ash-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我约公元前 232 年去世。我留下的东西,有的活了下来,有的没有。\n\n先说没活下来的:我的帝国。我用 dhamma、用宽容、用公共福利去治理,以为这样能让它长久、稳固。可我死后大约 50 年,Maurya 帝国就分裂、瓦解了。一套高尚的伦理,救不了一个结构上撑不住的帝国。这一点,我得承认。\n\n再说活下来的:石头。我刻的那些法敕,在岩壁上、石柱上,熬过了两千多年,成了后人了解我、了解那个时代最重要的凭证。\n\n还有一样,是我做梦也想不到的。我立的一根石柱顶上,有一个柱头——四头背对背的狮子,叫 lion capital(狮子柱头)。两千多年后,一个全新的国家诞生了,叫印度共和国。他们选了我这个狮子柱头,当他们的国徽。\n\n你品一品这件事:一个公元前 3 世纪靠武力起家、又靠悔过转身的国王,他的形象,被一个 20 世纪诞生的民主国家,选作了自己的象征。',
        en: 'I died around 232 BCE. Of what I left behind, some survived, and some did not.\n\nFirst, what did not survive: my empire. I governed it with dhamma, with tolerance, with public welfare, thinking that would make it last and hold. Yet about fifty years after my death, the Maurya empire split and fell apart. A noble ethic cannot save an empire that cannot structurally hold. This I must admit.\n\nNext, what survived: the stone. The edicts I carved, on rock faces and pillars, outlasted two thousand years and became the most important evidence by which later people came to know me and my age.\n\nAnd one more thing, which I could never have dreamed. Atop one of the pillars I raised was a capital, four lions back to back, the lion capital. More than two thousand years later a wholly new country was born, the Republic of India. They chose this lion capital of mine as their state emblem.\n\nTaste this: a king of the third century BCE who rose by force and turned by remorse, his image chosen by a democratic country born in the twentieth century as its own symbol.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 约前 232 去世 + 没活下来: 帝国 (用 dhamma 宽容福利治理以为长久/死后约 50 年 Maurya 分裂瓦解/高尚伦理救不了结构撑不住的帝国) + 活下来: 石头法敕熬过两千年成最重要凭证 + 做梦想不到: lion capital 狮子柱头成现代印度国徽 (前 3 世纪武力起家悔过转身的王形象被 20 世纪民主国选作象征)',
      engagementHook: '我用 dhamma 治国，以为能让帝国长久——可我死后约 50 年它就散了。倒是我那块刻着悔过的石头、那个狮子柱头活了下来，两千年后成了现代印度的国徽。一个人最想留下的，和最后真正留下的，为什么常常不是一回事？',
      expectsRealAnswer: false,
    },
    {
      id: 'ash-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我,两种说法都站得住。\n\n一种说法:我是真的变了。我主动把对自己不利的死亡数字刻在石头上——一个只想搞面子工程的国王,绝不会公开承认自己害死了 10 万人。我减杀生、修福利、让各教派和睦、给死刑犯上诉的余地。那种沉重和内疚,不像是装出来的。一个征服者,被自己造成的死亡震醒,真心转了向。\n\n另一种说法:我是个高明的统治者,把暴力换了一身更好看的衣服。刚血洗完一块地,改打「非暴力 + 宽容 + 福利」这套牌,恰好是稳住一个多教派庞大帝国最划算的办法。证据就在同一块石头上:我警告边境我仍有力量,我保留了军队和死刑,我没还 Kalinga。dhamma 不是放弃权力,是权力换了个包装。\n\n这两边,可能不是二选一。一个人完全可以既真的被震撼,又同时发现这套新办法对统治有利。人的心,本来就可以是混着的。\n\n你怎么看?想 30 秒,写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I truly changed. I chose to carve the death toll that counted against me into stone. A king who only wanted a good image would never publicly admit he had killed a hundred thousand. I reduced killing, built welfare, made the sects live in concord, gave the condemned room to appeal. That weight, that guilt, does not look feigned. A conqueror, jolted awake by the death he caused, genuinely turned.\n\nThe other view: I was a clever ruler who dressed violence in finer clothes. Right after blooding a land, to switch to the "non-violence, tolerance, welfare" card was exactly the most cost-effective way to steady a vast, many-sected empire. The proof is on the same stone: I warned the border I still had power, I kept the army and the death penalty, I did not give Kalinga back. Dhamma was not surrendering power; it was power in new packaging.\n\nThese two may not be either-or. A person can be genuinely shaken and, at the same time, find that the new way serves his rule. The human heart can be mixed from the start.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (真的变了/主动刻不利的死亡数字/搞面子工程的王不会承认害死 10 万/减杀生修福利各教和睦死刑上诉/沉重内疚不像装) / 另一种说法 (高明统治者把暴力换好看衣服/血洗后打非暴力牌最划算/同石头警告边境保留军队死刑没还 Kalinga/dhamma 是权力换包装) / 可能不是二选一人心可以混着 / 想 30 秒',
      engagementHook: '真心忏悔的人，和给暴力换件好看衣服的统治者——可能是同一个我。两边都站得住，甚至可能同时是真的。你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'ash-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,你会怎么评价我这样一个人?\n\n一个靠武力起家、又把武力的死亡刻进石头公开忏悔的国王;一个说「我深深懊悔」、却把 Kalinga 牢牢攥在手里没还、还警告别人「我仍有力量」的国王。我的悔过和我的权力,不是分开的两件事,是同一个我身上的同一段历史。把它们放在同一个天平上,你怎么称?\n\n再想一步,落到你自己身上。\n\n你这辈子,一定会遇到这样的人:他伤害过别人,然后有一天他对你说——「我已经变了。」\n\n那时候,你会凭什么判断?你看他嘴上说的「我后悔了」,还是看他手上有没有真的把抢来的东西还回去、有没有真的不再伤害人?\n\n一个人说「我变了」,你欠他一个相信吗?他又欠你一个什么样的证明,你才该信?',
        en: 'Having walked my whole life, how would you judge a man like me?\n\nA king who rose by force and then carved the death that force caused into stone in open confession; a king who said "I deeply regret" yet held Kalinga fast and never gave it back, and warned others "I still have power." My remorse and my power are not two separate things; they are one stretch of history on one and the same man. Put them on the same scale. How do you weigh them?\n\nThen take one more step, into your own life.\n\nIn your life you are sure to meet such a person: one who has hurt others, and then one day says to you, "I have changed."\n\nIn that moment, by what will you judge? By the "I am sorry" on his lips, or by whether his hands have actually given back what he took, whether he has actually stopped doing harm?\n\nWhen someone says "I have changed," do you owe him a belief? And what kind of proof does he owe you, before you should believe it?',
      },
      deliverGoal: 'N11 close — 评价阿育王 (武力起家又刻死亡公开忏悔 vs 说懊悔却攥着 Kalinga 没还还警告仍有力量/悔过与权力同一个我同一段历史同一天平) + transfer「你一定会遇到伤害过别人然后说我已经变了的人」+ 你凭嘴上的我后悔了还是凭手上有没有还回去不再伤害 + 你欠他一个相信吗他欠你什么证明',
      engagementHook: '我说「我深深懊悔」，却把抢来的 Kalinga 攥在手里没还。一个人说「我变了」，你该信他嘴上说的，还是看他手上做的？你欠他一个相信吗——他又欠你一个什么样的证明？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: dhamma-mahamatta / 达摩官 (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var dhammaOfficialLens = {
  id: 'dhamma-official',
  name: 'Dhamma-mahamatta',
  nameCn: '达摩官',
  role: 'lonely-mediator',
  perspectiveTag: 'dhamma-officer-on-the-ground',
  icon: '☸️',
  description: {
    cn: '阿育王新设的一种官,叫 dhamma-mahamatta（达摩官）——专门负责把 dhamma 推行到帝国各地（这一官职是法敕里真实记载的；这一遍的主角是这样一位达摩官，具体姓名家世为叙事补充）。他的任务是把国王在首都说的一句「我后悔了」，变成几千公里外一个村子里真实发生的事。他夹在两头：一头是要帝国稳、税收稳、边境别乱的皇权，一头是活生生的百姓——其中就有刚被这个帝国血洗过的羯陵伽人。这一遍让你从一个执行者的位置，看一个人怎么把一个国王的悔意，一寸一寸铺到地上。',
    en: 'A new kind of officer Ashoka created, the dhamma-mahamatta, charged with carrying dhamma across the empire (the office is genuinely recorded in the edicts; the figure in this pass is one such officer, with name and family added as narrative). His task was to turn a king\'s "I am sorry," spoken in the capital, into things that actually happened in a village thousands of miles away. He was caught between two sides: imperial power, which wanted the empire steady, the taxes steady, the border quiet; and living people, among them the men of Kalinga, just blooded by this same empire. This pass puts you in an enforcer\'s seat, watching a man lay a king\'s remorse down on the ground, inch by inch.',
  },
  storyboard: [
    {
      id: 'do-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '国王在首都说了一句话:「我后悔了。从今往后,我讲 dhamma（达摩）。」\n\n这句话,得有人把它送出去。送到帝国的每一个角落,送到几千公里外、说着我听不懂的话、信着各种各样神的村子里。\n\n那个人,就是我。\n\n我是一名 dhamma-mahamatta（达摩官）。这是国王新设的官,以前没有过。我们的活只有一件:把国王心里那套 dhamma,变成普通人日子里真实的东西。\n\n听起来很高尚,对吧?可你试试就知道有多难。国王在华氏城（Pataliputra）那座大城里,动一动嘴。我得用一双脚、一张嘴,走遍他打下来的、大得没有边的帝国,去让每一个人相信:那个动不动就能要你命的国王,真的变了。\n\n这一遍,你就是我。你不是国王,你没有那把刀。你手里只有一句话,和一双能走路的脚。',
        en: 'The king said one line in the capital: "I am sorry. From now on, I deal in dhamma."\n\nThat line had to be carried out. To every corner of the empire, to villages thousands of miles away, where people spoke tongues I could not follow and worshipped all manner of gods.\n\nThat person was me.\n\nI am a dhamma-mahamatta. It is an office the king created new; there had been none before. Our work was one thing only: to turn the dhamma in the king\'s heart into something real in ordinary people\'s days.\n\nIt sounds noble, does it not? Try it, and you learn how hard it is. The king, in the great city of Pataliputra, moves his lips. I, with a pair of feet and a single mouth, must walk the whole of the edgeless empire he conquered, to make every person believe: the king who could take your life on a whim has truly changed.\n\nThis pass, you are me. You are not the king; you do not have the blade. In your hand there is only a line, and a pair of feet that can walk.',
      },
      deliverGoal: 'N1 hook — 国王说「我后悔了从今讲 dhamma」要有人送出去 (帝国每角落/几千公里外听不懂的话各种神的村子) + 那人是我 dhamma-mahamatta 达摩官 (国王新设以前没有/活只一件: 把国王心里的 dhamma 变普通人日子里真实的东西) + 难: 国王在 Pataliputra 动嘴我用脚和嘴走遍庞大帝国让人信那个能要你命的国王真变了 + 这一遍你是我没有刀只有一句话和脚',
      engagementHook: '国王动一动嘴说「我变了」，我得用一双脚走遍他打下来的庞大帝国，让每个人相信这句话。我手里没有刀，只有一句话。你信不信，光靠一句话能改变一个帝国？',
      expectsRealAnswer: false,
    },
    {
      id: 'do-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我要推的这个 dhamma,到底是什么——因为大多数人都搞错了。\n\n很多人以为,dhamma 就是佛教。不对。\n\n国王自己确实偏向佛教,他扶持佛教、修 stupa（佛塔）。但他交给我去推的 dhamma,不是某一个教。它是一套所有人都能照着做的公共准则:不要随便杀生;对父母长辈要敬;对穷人、病人、奴仆要善待;对别人的信仰要宽容;管住自己的脾气和贪心。\n\n为什么国王要把它做成「不属于任何一个教」?因为我们的帝国实在太大、太杂了。这一个村信婆罗门的神,翻过一座山那个村是耆那教徒,再往前走又是一片佛教徒。要是我去推「大家都信佛吧」,这帝国第二天就得为信仰打起来。\n\n所以我推的,是各教都能点头的那个最大公约数。我不去碰「你该信哪个神」,我只讲「不管你信哪个神,这些做人的事,都该做」。\n\n这是我的活,也是我的难处:我得让所有不一样的人,在一件事上一样。',
        en: 'First, what this dhamma I had to spread actually is, because most people get it wrong.\n\nMany think dhamma simply means Buddhism. It does not.\n\nThe king himself did lean toward Buddhism; he supported it and built stupas. But the dhamma he handed me to spread was not any one religion. It was a public code anyone could follow: do not kill needlessly; honor your parents and elders; treat the poor, the sick, and servants kindly; be tolerant of others\' beliefs; rein in your own temper and greed.\n\nWhy did the king make it belong to no single religion? Because our empire was simply too large, too mixed. This village worships the gods of the Brahmins; over one mountain the next village is Jain; walk on and there is a stretch of Buddhists. Had I gone about pushing "let everyone be Buddhist," the empire would have come to blows over faith the next day.\n\nSo what I spread was the greatest common ground all the sects could nod to. I did not touch "which god you should worship." I said only: whatever god you worship, these things, the things of being a decent person, should be done.\n\nThis was my work, and my difficulty: I had to make all these different people the same in one thing.',
      },
      deliverGoal: 'N2 setup — dhamma 到底是什么大多数人搞错了 (以为 = 佛教不对) + 国王自己偏佛教扶持修 stupa 但交给我推的 dhamma 不是某一个教 (公共准则: 不随便杀生/敬长辈/善待穷病奴仆/宽容别人信仰/管住脾气贪心) + 为何做成不属任何教: 帝国太大太杂 (婆罗门/耆那/佛教一村一信)/推「都信佛」第二天就为信仰打起来 + 我推各教能点头的最大公约数 (不碰信哪个神只讲不管信谁这些做人的事都该做) + 难处: 让所有不一样的人在一件事上一样',
      engagementHook: '大多数人以为 dhamma 就是佛教，其实不是——它是各教都能点头的「做人的最大公约数」，因为帝国太大太杂，推某一个教第二天就得打起来。要让一群信不同神的人在一件事上一样，你觉得可能吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'do-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我的活,具体是怎么干的?我说给你听。\n\n我从首都 Pataliputra（华氏城）出发,一走就是几个月,几千公里。我去哪儿?去那些国王看不见、管不到的地方。\n\n哪里有人受了冤屈没处说理,我去;哪里有官吏仗着权势欺负百姓、多收税,我去查;哪里两个教派为了一口井、一块地快打起来,我去调解;哪里有孤寡老弱没人管,我去看他们有没有饭吃。\n\n我还有一项特别的活:盯着国王自己的官。国王在石头上说要善待百姓——可石头管不住几千公里外一个贪心的小官。我就是国王派出去、替他盯着这些人的那双眼睛。\n\n你发现没有,我这个官很特别:我手里没有军队,我不靠刀。我靠的是国王的名义,加上我自己一张嘴、一双腿、一颗想把事情办公道的心。\n\n这就是把「石头上的话」变成「地上的事」的笨办法——一个村一个村地走,一件事一件事地管。',
        en: 'How did my work actually get done? Let me tell you.\n\nI set out from the capital, Pataliputra, and walked for months at a stretch, thousands of miles. Where did I go? To the places the king could not see, could not reach.\n\nWhere someone had suffered a wrong with no one to hear it, I went. Where an official leaned on his power to bully the people and overtax them, I went to investigate. Where two sects were near blows over a well or a plot of land, I went to mediate. Where the orphaned, the widowed, the old and weak had no one, I went to see whether they had food.\n\nI had one special task too: to watch the king\'s own officials. The king said on stone to treat the people kindly, but stone cannot rein in a greedy minor officer thousands of miles away. I was the pair of eyes the king sent out to watch such men for him.\n\nNotice how strange my office is: I have no army in my hand, I do not rely on the blade. I rely on the king\'s name, plus my own mouth, my own legs, and a heart that wants to settle things fairly.\n\nThis is the plodding way to turn "the words on the stone" into "things on the ground," walking village by village, settling matter by matter.',
      },
      deliverGoal: 'N3 setup — 活具体怎么干 (从 Pataliputra 出发走几个月几千公里去国王看不见管不到的地方) + 哪有冤屈/官吏欺压多收税/两教派为井为地快打起来/孤寡老弱没人管我都去 + 特别活: 盯国王自己的官 (石头管不住几千里外贪心小官/我是国王派出的眼睛) + 这官特别: 没军队不靠刀靠国王名义 + 自己一张嘴一双腿一颗想办公道的心 + 笨办法: 一村村走一件件管把石头上的话变地上的事',
      engagementHook: '我没有军队、不靠刀，靠的是国王的名义加自己一张嘴、一双腿。我连国王自己的贪官都要盯。一个手里没有刀的人，凭什么管得住几千公里外的官？',
      expectsRealAnswer: false,
    },
    {
      id: 'do-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。今天,国王给了你一个最难的差事:去 Kalinga（羯陵伽）。\n\n就是几年前,国王亲手打下来的那块地。约 10 万人死在那场仗里,约 15 万人被绳子串走。国王后来后悔了——可后悔的是国王,死的、被掳的,是这里的人。\n\n你走进一个村子。一个男人站在你面前。他的全家,都在那 10 万、那 15 万里面。他看着你身上国王给的官服,眼睛里没有恨,也没有怕——是一种比恨和怕都冷的东西。\n\n你得开口了。你奉命来告诉他:国王后悔了,国王现在讲 dhamma,讲非暴力,讲宽容,会照顾你们。\n\n可这句话,你怎么说得出口?\n\n你心里清楚:杀他全家的命令,是国王下的。现在让你来跟他说「国王变好了」的,也是国王。你站在中间,一边是给你饭碗、给你权力的皇权,一边是这个被皇权毁掉、此刻正盯着你的人。\n\n你,到底替谁说话?',
        en: 'Now you are me. Today the king has given you the hardest errand: go to Kalinga.\n\nThe very land the king conquered with his own hand a few years ago. About a hundred thousand died in that war, about a hundred and fifty thousand were roped away. The king came to regret it afterward, but it was the king who regretted, while the dead, the carried-off, were the people here.\n\nYou walk into a village. A man stands before you. His whole family was among that hundred thousand, that hundred and fifty thousand. He looks at the king\'s robe on your back, and in his eyes there is no hatred, no fear, something colder than hatred or fear.\n\nNow you must speak. You are under orders to tell him: the king is sorry, the king now deals in dhamma, in non-violence, in tolerance, and will look after you.\n\nBut how can you get this line out of your mouth?\n\nYou know in your heart: the order that killed his whole family was the king\'s. And the one sending you now to tell him "the king has turned good" is also the king. You stand in the middle, on one side the imperial power that gives you your bread and your authority, on the other this man whom that power destroyed, who is staring at you right now.\n\nFor whom, in the end, do you speak?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 国王给你最难差事去 Kalinga (几年前国王亲手打下/10 万死 15 万串走/后悔的是国王死的被掳的是这里的人) + 走进村子一个男人全家在那数字里 + 看你身上官服眼里没恨没怕是比恨和怕更冷的东西 + 你奉命告诉他国王后悔了讲 dhamma 会照顾你们 + 这句话怎么说得出口 + 杀他全家是国王下令/让你说国王变好的也是国王 + 你站中间一边皇权给饭碗权力一边被皇权毁掉盯着你的人 + 你替谁说话',
      engagementHook: '杀他全家的命令是国王下的，现在让我来告诉他「国王变好了」的，也是国王。我站在中间，一边是给我饭碗的皇权，一边是被皇权毁掉、正盯着我的人。这句话，我怎么说得出口？你会怎么说？',
      expectsRealAnswer: false,
    },
    {
      id: 'do-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那一刻,我没有照着国王的话背给他听。\n\n要是我端着官架子说「国王后悔了,你们要感恩」,这个人会当场看穿我——他会知道,我只是皇权派来安抚他的一张嘴。那样的话,一句都没用。\n\n我做的是另一件事。我没有先替国王辩护,我先承认了那件没法辩护的事:对,杀你全家的,是这个国王。这件事,赔不回来,也抹不掉。\n\n然后我才说:我来,不是要你原谅。我来,是因为国王立了新规矩——从今往后,这片土地上,种地的渠要修,病了有地方治,谁家官吏再敢欺负你,你可以来找我。这些,是实打实会落到你日子里的。\n\n你看出我的难处了吗?我不能撒谎说「国王是个好人」,那个人不会信,我自己也不信。我能做的,是把那句空洞的「国王后悔了」,翻译成一件件他摸得着的实事。\n\n调停这门手艺,有时候不是让两边和解。是让那个被伤害的人,至少能从这套新规矩里,捞回一点点实在的东西。',
        en: 'In that moment, I did not recite the king\'s words back to him.\n\nIf I had put on the airs of office and said "the king is sorry, you should be grateful," this man would have seen through me on the spot. He would know I was only a mouth the imperial power sent to soothe him. Said that way, not a word would have worked.\n\nWhat I did was another thing. I did not defend the king first; I first admitted the thing that cannot be defended: yes, it was this king who killed your family. That cannot be paid back, and cannot be wiped away.\n\nOnly then did I say: I have not come to ask your forgiveness. I have come because the king has set new rules, from now on, on this land, the irrigation ditches will be repaired, there will be a place to be treated when you fall ill, and if any official dares bully you again, you may come to me. These are real things that will land in your days.\n\nDo you see my difficulty? I could not lie and say "the king is a good man"; that man would not believe it, and neither would I. What I could do was translate the hollow "the king is sorry" into concrete things he could touch, one by one.\n\nThis craft of mediation is sometimes not about making two sides reconcile. It is about letting the one who was harmed pull at least a little something real out of the new rules.',
      },
      deliverGoal: 'N5 story — 没照国王的话背 (端官架子说国王后悔了你们要感恩会被当场看穿只是皇权安抚的嘴一句没用) + 做另件事: 不先替国王辩护先承认没法辩护的 (对杀你全家的是这个国王赔不回抹不掉) + 然后才说我来不是要你原谅是国王立新规矩 (渠要修病有地方治官吏欺负你可来找我/实打实落到日子) + 难处: 不能撒谎说国王好人那人不信我也不信 + 能做的是把空洞的国王后悔了翻译成摸得着的实事 + 调停有时不是和解是让被伤害的人捞回一点实在的',
      engagementHook: '我没有撒谎说「国王是好人」——那个人不信，我也不信。我做的是先承认杀他全家的就是国王，再把那句空洞的「国王后悔了」，翻译成他摸得着的实事。比起要他原谅，先承认错、再给点实在的——哪个更有用？',
      expectsRealAnswer: false,
    },
    {
      id: 'do-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可有一件事,我翻译不了。无论我多会说,都绕不过去。\n\n那个失去全家的人,听完我说的渠、说的医、说的护着他不被欺负,沉默了很久。然后他问了我一句,我到现在都答不上来。\n\n他说:你们国王在石头上说他「深深懊悔」。那好。我家人呢?那 15 万被绳子串走的人呢?他后悔了,有没有把他们放回来?他后悔了,有没有把我们的 Kalinga 还回去?\n\n我说不出话。因为答案是:没有。\n\n国王在同一块石头上,刻着「我深深懊悔」,也刻着「但我仍然有力量,边境别逼我」。他后悔归后悔,Kalinga 他攥着没还,人他没放回来。\n\n我这个达摩官,能修渠、能治病、能护着这个人不被小官欺负。可我没法替他要回他的家人,没法替这片土地要回它的独立。\n\n国王的悔意,到我手里,能落地的就是这么多。再往前,就是那条我跨不过去的线——他后悔的,和他愿意归还的,根本不是一回事。',
        en: 'But there was one thing I could not translate. However well I spoke, I could not get around it.\n\nThe man who had lost his whole family listened to all I said, the ditches, the healing, the protection from being bullied, and was silent a long while. Then he asked me one thing I cannot answer to this day.\n\nHe said: your king says on stone that he "deeply regrets." Fine. And my family? And the hundred and fifty thousand roped away? He is sorry, has he put them back? He is sorry, has he given our Kalinga back?\n\nI had no words. Because the answer is: no.\n\nOn the same stone the king carved "I deeply regret," he also carved "but I still have power, border, do not push me." Sorry as he is, he holds Kalinga and has not returned it; the people he has not put back.\n\nI, this dhamma-officer, can repair ditches, can heal the sick, can shield this man from a petty official. But I cannot claim his family back for him, cannot claim this land\'s independence back for it.\n\nThe king\'s remorse, in my hands, comes to just this much that can touch the ground. Beyond that lies the line I cannot cross: what he regrets, and what he is willing to return, are not the same thing at all.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 有一件事我翻译不了绕不过去 + 失去全家的人听完渠医护沉默良久问一句我至今答不上 (国王石头说深深懊悔/那我家人呢 15 万被串走的呢/后悔有没有放回来/有没有把 Kalinga 还回去) + 我说不出话答案是没有 + 国王同石头刻深深懊悔也刻但我仍有力量边境别逼我 (后悔归后悔 Kalinga 攥着没还人没放回) + 我能修渠治病护人不被欺/没法替他要回家人没法替土地要回独立 + 悔意到我手能落地的就这么多 + 跨不过去的线: 他后悔的和他愿意归还的根本不是一回事',
      engagementHook: '那个人问我：国王在石头上说他「深深懊悔」——那我家人呢？被掳走的 15 万人呢？他后悔了，有没有把 Kalinga 还回去？我答不上来，因为答案是：没有。一个人能一边「真心后悔」，一边继续占着他抢来的东西吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'do-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '从 Kalinga 出来,我接着往帝国别处走。我得告诉你这份活光鲜底下的另一面。\n\n我是国王派出去「行善」的官——可我身上穿的,还是皇权的衣服。这意味着,我每到一处,既是来护着百姓的,也是来替国王看着这片地的。\n\n我调解教派纠纷,是真心想让大家和睦——可对国王来说,各教别打架,帝国才稳,税才收得上来。我照顾孤寡、修渠掘井,是真心想让人活得好一点——可对国王来说,百姓日子过得去,才不会造反。\n\n我做的每一件善事,同时也在替这个帝国,把人心一点点收拢。\n\n这就是我夜里睡不着时想的事:我到底是在替百姓办事,还是在替国王安抚百姓、让他们更服管?\n\n也许两件事我都在做。也许,在这个位置上,这两件事根本分不开。我做的善是真的善,我替国王稳的江山,也是真的江山。',
        en: 'Out of Kalinga, I went on to other parts of the empire. I must tell you the other side, beneath the shine of this work.\n\nI am an officer the king sends out to "do good," yet what I wear is still the robe of imperial power. That means everywhere I go, I am both there to shield the people and there to watch the land for the king.\n\nWhen I mediate a quarrel between sects, I truly want them to live in concord, yet for the king, sects that do not fight mean an empire that holds and taxes that come in. When I care for the orphaned and widowed, repair ditches, dig wells, I truly want people to live a little better, yet for the king, people who get by do not rebel.\n\nEvery good deed I do is, at the same time, gathering hearts a little tighter for this empire.\n\nThis is what I lie awake at night turning over: am I working for the people, or soothing the people for the king, making them more governable?\n\nPerhaps I am doing both. Perhaps, in this seat, the two cannot be told apart at all. The good I do is real good, and the realm I steady for the king is a real realm too.',
      },
      deliverGoal: 'N7 story — 出 Kalinga 往别处走说这活光鲜底下另一面 + 我是国王派出行善的官但穿皇权衣服 (每到一处既护百姓也替国王看这片地) + 调解教派真心想和睦但对国王各教别打帝国才稳税收得上/照顾孤寡修渠真心想人活好但对国王百姓过得去才不造反 + 每件善事同时替帝国收拢人心 + 夜里睡不着想: 我是替百姓办事还是替国王安抚让他们更服管 + 也许两件都做/在这位置上分不开/我做的善是真善替国王稳的江山也是真江山',
      engagementHook: '我做的每一件善事——调解纠纷、照顾孤寡——是真心的，可它同时也在替帝国一点点收拢人心、让百姓更服管。我到底是替百姓办事，还是替国王安抚百姓？在这个位置上，这两件事，分得开吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'do-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '走得越多,我越看清一件事:我们这套 dhamma,有它真正立得住的地方,也有它假装看不见的地方。\n\n立得住的地方,是实打实的。我亲眼看见:大路边种上了树,挖了井,旅人和牲口有地方歇脚、看病;一个被官吏冤枉的人,因为我去查,把税退了回来;两个为一口井闹了十年的教派,坐下来分了水。这些都是真的好,是 dhamma 落到地上结的果。\n\n假装看不见的地方,也是真的。国王讲非暴力,可他保留着军队、保留着死刑;他讲宽容,可他没还 Kalinga;他派我去照顾百姓,可他从没想过给百姓一点点决定自己命运的权力——帝国还是他一个人的帝国,百姓还是被治理的百姓。\n\n我推的 dhamma,让这个帝国变得温和了一些,可它没有、也从来没打算,改变「谁说了算」。\n\n这是我这份活最深的两难:我让一套压在所有人头上的权力,变得没那么狠了——可我也让这套权力,变得更让人服气、更稳固了。',
        en: 'The more I walked, the clearer one thing became: this dhamma of ours has what genuinely holds up, and what it pretends not to see.\n\nWhat holds up is solid. I saw with my own eyes: trees planted along the great roads, wells dug, travelers and beasts with places to rest and be treated; a man wronged by an official, who, because I investigated, had his tax returned; two sects that had fought ten years over a well, sitting down to share the water. These are real good, the fruit dhamma bore on the ground.\n\nWhat it pretends not to see is also real. The king preaches non-violence, yet keeps the army, keeps the death penalty; he preaches tolerance, yet did not return Kalinga; he sends me to care for the people, yet never once thought to give the people a little power over their own fate. The empire is still his alone, the people still the governed.\n\nThe dhamma I spread made this empire somewhat gentler, but it did not, and never meant to, change "who decides."\n\nThis is the deepest bind of my work: I made a power that presses on everyone\'s head a little less harsh, and I also made that power more agreeable, more secure.',
      },
      deliverGoal: 'N8 story — 走越多越看清 dhamma 有真立得住的地方也有假装看不见的地方 + 立得住实打实 (大路种树挖井旅人牲口歇脚看病/被冤枉的人因我查退了税/为一口井闹十年的两教派坐下分水/真好是 dhamma 落地结的果) + 假装看不见也真 (讲非暴力却保军队死刑/讲宽容却没还 Kalinga/派我照顾百姓却从没想给百姓一点决定自己命运的权力/帝国还是他一个人的) + dhamma 让帝国温和些但没打算改变谁说了算 + 最深两难: 我让压在所有人头上的权力没那么狠也让它更让人服气更稳固',
      engagementHook: 'dhamma 让百姓的日子真的好过了一点——可它从没想过给百姓一点决定自己命运的权力，帝国还是国王一个人的。我让一套压人的权力变得没那么狠，也让它变得更稳固。这，是好事还是坏事？',
      expectsRealAnswer: false,
    },
    {
      id: 'do-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '国王约公元前 232 年去世了。我推了大半辈子的 dhamma,后来怎么样了?\n\n我得诚实:它没能撑住这个帝国。国王死后大约 50 年,Maurya 帝国就分裂、瓦解了。我们这些达摩官跑断腿铺下去的那套伦理,黏住了人心一时,黏不住一个结构上注定要散的庞大帝国。\n\n可奇怪的是,真正活下来的,不是帝国,是那些石头。国王刻的法敕,在岩壁上、石柱上,熬过了两千多年。后世的人就是靠这些石头,才知道两千年前有这么一个国王、这么一套 dhamma、这么一群跑遍帝国的达摩官。\n\n我这一辈子,走了几千公里,管了无数件小事——调解过的纠纷、退过的税、修过的渠、护过的孤寡。这些事,一件都没刻在石头上,没人记得是哪个达摩官办的。\n\n但你想想:法敕是国王的话,而让这些话真的发生在一个个村子里的,是我们这些没名字的人。石头记得国王。可地上的事,是我们办的。',
        en: 'The king died around 232 BCE. The dhamma I spread for most of my life, what became of it?\n\nI must be honest: it could not hold this empire up. About fifty years after the king\'s death, the Maurya empire split and fell apart. The ethic we dhamma-officers wore out our legs laying down held hearts for a time, but could not hold together a vast empire structurally bound to break.\n\nYet, strangely, what truly survived was not the empire but those stones. The edicts the king carved, on rock faces and pillars, outlasted two thousand years. It is by these stones that later people came to know there had once been such a king, such a dhamma, and such a band of officers who walked the whole empire.\n\nIn my own life I walked thousands of miles and handled countless small matters, quarrels mediated, taxes returned, ditches repaired, the orphaned and widowed shielded. Not one of these was carved into stone; no one remembers which dhamma-officer did them.\n\nBut think: the edicts are the king\'s words, and the ones who made those words actually happen, village by village, were us, the nameless. The stone remembers the king. But the things on the ground, we did them.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 国王约前 232 去世推大半辈子 dhamma 后来怎样 + 诚实: 没能撑住帝国 (国王死后约 50 年 Maurya 分裂瓦解/达摩官跑断腿铺的伦理黏人心一时黏不住结构注定散的帝国) + 奇怪: 活下来的不是帝国是石头 (法敕熬过两千年/后世靠石头知道有这王这 dhamma 这群达摩官) + 我一辈子走几千公里管无数小事 (调解退税修渠护孤寡) 没一件刻石头没人记得是哪个达摩官办的 + 但法敕是国王的话让话真发生在村子里的是我们没名字的人 + 石头记得国王地上的事是我们办的',
      engagementHook: '法敕是国王的话，刻在石头上活了两千年；让这些话真的发生在一个个村子里的，是我们这些没名字的达摩官，没人记得。一个人做了一辈子实事却没留下名字——这样的人，值得被记住吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'do-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我,两种说法都站得住。\n\n一种说法:我是把善意变成现实的人。国王的悔意要不是有我们这些达摩官一寸一寸铺到地上,就只是石头上几行漂亮字。是我让一个被冤枉的人退回了税,让两个仇了十年的教派分了一口井的水,让大路边的旅人有水喝、病了有人管。国王动嘴,我们办事。没有我们,dhamma 一文不值。\n\n另一种说法:我是替权力擦亮招牌的人。我做的每一件善事,同时都在替这个不肯还 Kalinga、不肯放权的帝国,收拢人心、稳固统治。我让一套压在所有人头上的权力,变得更让人服气。我安抚了那个失去全家的人,却没法、也没打算替他要回任何被夺走的东西。我让不公变得温和,可不公还是不公。\n\n这两边,是同一份活的两面。把善意落地的手,和替权力擦亮招牌的手,是同一双手。\n\n你怎么看?想 30 秒,写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I am the one who turned good intention into reality. Without us dhamma-officers laying it down inch by inch, the king\'s remorse would have been only a few fine lines on stone. It was I who got a wronged man\'s tax returned, who got two sects feuding ten years to share a well\'s water, who got the roadside traveler water to drink and care when sick. The king moves his lips; we do the work. Without us, dhamma is worth nothing.\n\nThe other view: I am the one who polished power\'s signboard. Every good deed I did was, at the same time, gathering hearts and securing the rule of an empire that would not return Kalinga, would not share power. I made a power pressing on everyone\'s head more agreeable. I soothed the man who lost his whole family, yet could not, and never meant to, claim back for him anything that was taken. I made injustice gentler, but injustice was still injustice.\n\nThese two are two faces of one work. The hand that lands good intention and the hand that polishes power\'s signboard are the same hand.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (把善意变成现实的人/国王悔意没我们一寸寸铺就只是石头上漂亮字/让被冤枉的退税仇十年的教派分水旅人有水病有人管/国王动嘴我们办事没我们 dhamma 一文不值) / 另一种说法 (替权力擦亮招牌的人/每件善事同时替不还 Kalinga 不放权的帝国收拢人心稳固统治/让压人权力更让人服气/安抚失去全家的人却没法没打算替他要回被夺走的/让不公温和但不公还是不公) / 同一份活两面同一双手 / 想 30 秒',
      engagementHook: '把善意落地的手，和替权力擦亮招牌的手——是同一双手。两边都站得住。你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'do-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,你会怎么评价我这样一个夹在中间的人?\n\n我把一个国王的悔意,变成了几千个村子里实打实的好事;我也用这些好事,替一个不肯归还、不肯放权的帝国,稳住了人心。我让一套权力变善了一点,也变稳了一点。这两件事,是同一双手做的。你怎么称?\n\n再想一步,落到你自己身上。\n\n你这辈子,也常常会被夹在中间:一边是给你好处、要你听话的「上面」——可能是老师、是规则、是某个有权决定你处境的人;另一边,是那些被这套规则压着、却没人替他们说话的人。\n\n上面让你去传一句话、办一件事。你照做,能拿到好处;你较真,可能惹麻烦。\n\n那时候,你会怎么做?你会只当一个把上面的话原样传下去的「嘴」,还是会像我那样——先承认那件没法辩护的事,再尽力替没人替的人,捞回一点点实在的东西?',
        en: 'Having walked my whole life, how would you judge a man like me, caught in the middle?\n\nI turned a king\'s remorse into solid good in thousands of villages; and with that good I steadied the hearts of an empire that would not return what it took, would not share its power. I made a power a little kinder, and a little more secure. These two were done by the same hand. How do you weigh it?\n\nThen take one more step, into your own life.\n\nIn your life, too, you will often be caught in the middle: on one side the "above" that gives you advantage and wants your obedience, a teacher, a rule, someone with power over where you stand; on the other, those pressed down by that rule, with no one to speak for them.\n\nThe above tells you to pass on a line, to do a thing. Do it, and you gain; insist on the truth, and you may invite trouble.\n\nWhen that happens, what will you do? Will you be only a "mouth" that passes the above\'s words down unchanged, or will you do as I did: first admit the thing that cannot be defended, then do your best to pull back, for those no one speaks for, a little something real?',
      },
      deliverGoal: 'N11 close — 评价夹在中间的人 (把国王悔意变几千村实打实好事 vs 用这些好事替不还不放权的帝国稳住人心/让权力变善一点也变稳一点同一双手) + transfer「你这辈子也常被夹在中间 (一边给你好处要你听话的上面: 老师规则有权决定你处境的人/另一边被规则压着没人替他们说话的人)」+ 上面让你传话办事照做拿好处较真惹麻烦 + 你会只当原样传话的嘴还是像我先承认没法辩护的事再替没人替的人捞回一点实在的',
      engagementHook: '我把国王的悔意变成了实打实的好事，也用这些好事稳住了一个不肯放权的帝国——同一双手。今天你也常被夹在中间：上面让你传一句话、办一件事，你会只当一个原样传话的「嘴」，还是会替那个没人替的人，争一点实在的？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 羯陵伽幸存者 / Kalinga survivor (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var kalingaSurvivorLens = {
  id: 'kalinga-survivor-receiving-end',
  name: 'A Kalinga survivor',
  nameCn: '羯陵伽幸存者',
  role: 'receiving-end',
  perspectiveTag: 'kalinga-war-survivor',
  icon: '🌾',
  description: {
    cn: '公元前 261 年那场仗的幸存者（虚构的具体个人，承载真实的群体经验——史料确证的是法敕里约 10 万死、15 万流放的数字，以及 Kalinga 被吞并这件事）。他的家人，在那 10 万死者、15 万被掳流放者之中。他亲眼看着村子被烧、亲人被绳子串成一队往北押走，再没回来。战后的饥荒和疾病，又带走了更多人。他活了下来。几年后，帝国各地的石头上开始出现那个征服者的法敕，有人念给他听：国王说他「后悔」了。这一遍，你站在那个被这场战争夺走一切的人这边，听一个有权有势的人宣布他变好了。',
    en: 'A survivor of the war of 261 BCE (an invented individual carrying a real collective experience; what the record confirms is the edict\'s figures of about a hundred thousand dead and a hundred and fifty thousand deported, and the fact that Kalinga was annexed). His family was among that hundred thousand dead, that hundred and fifty thousand roped away. He watched his village burned, his kin driven north in a line and never returning. Famine and disease afterward took still more. He survived. Years later, on stones across the empire, the conqueror\'s edicts began to appear, and someone read them to him: the king says he is sorry. This pass lets you stand where the man this war took everything from stands, and hear a powerful man declare that he has turned good.',
  },
  storyboard: [
    {
      id: 'ks-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '他们在帝国各地的石头上,刻了一段话。前几天,有人念给我听。\n\n念的人说:那是国王刻的。国王说,他打 Kalinga（羯陵伽）那一仗,死了约 10 万人,掳走了约 15 万人,战后死的更多。国王说,他「深深懊悔」。\n\n我听着,没说话。\n\n你知道那 10 万、那 15 万,对我是什么吗?不是数字。是我的父亲、我的母亲、我的兄弟。我的村子,我的整个家。\n\n我是 Kalinga 人。公元前 261 年那场仗,我活了下来——这几乎是我唯一没失去的东西。\n\n现在,那个杀了我全家的人,在石头上说他后悔了。\n\n这一遍,你站在我这里。不是站在刻字的国王那边,也不是站在替他传话的官那边。你站在被那段话写进去、却没人来问过一句的人这边。',
        en: 'On stones across the empire they carved a passage. A few days ago, someone read it to me.\n\nThe reader said: the king carved it. The king says that in his war on Kalinga, about a hundred thousand died, about a hundred and fifty thousand were carried off, and more died afterward. The king says he "deeply regrets."\n\nI listened, and said nothing.\n\nDo you know what that hundred thousand, that hundred and fifty thousand, are to me? Not numbers. My father, my mother, my brother. My village, my whole family.\n\nI am a man of Kalinga. In the war of 261 BCE, I survived, almost the only thing I did not lose.\n\nNow the man who killed my whole family says on stone that he is sorry.\n\nThis pass, you stand where I stand. Not on the side of the king who carved the words, nor the officer who carries them for him. You stand on the side of the one written into that passage, whom no one ever came to ask.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 帝国各地石头刻一段话有人念给我听 (国王刻的/打 Kalinga 死约 10 万掳约 15 万战后死更多/国王说深深懊悔) + 我听着没说话 + 那 10 万 15 万对我不是数字是父亲母亲兄弟村子整个家 + 我是 Kalinga 人前 261 那场仗活了下来几乎唯一没失去的 + 现在杀我全家的人在石头上说他后悔了 + 这一遍你站在被写进那段话却没人来问过一句的人这边',
      engagementHook: '那 10 万、那 15 万，对我不是数字——是我的父亲、母亲、兄弟。现在那个杀了我全家的人，在石头上说他「后悔」了。你想象一下：杀了你全家的人说他后悔了，你会是什么感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'ks-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们 Kalinga 是个什么地方,你才懂我们失去的是什么。\n\n我们在海边。孟加拉湾的风,常年吹着我们的海岸。我们靠海过活——出海打鱼,跟远方来的商船做买卖。我们的港口热闹,我们的人见过世面,我们一直是自己当家做主的一块地。\n\n那个北边的大帝国,Maurya（孔雀）,早就盯上我们了。它大,它强,它的国王一代代往外打。可我们 Kalinga 一直没归它——这是我们的骄傲。我们不富得流油,但我们自由。\n\n我小时候,大人常说:咱们 Kalinga 人,谁也不跪。\n\n那时候我不懂这句话有多重。我以为日子会一直这样:出海、回家、孩子长大、老人变老。海还是那片海,村还是那个村。\n\n我不知道,北边那个国王,已经在磨他的刀了。',
        en: 'First, what kind of place our Kalinga was, so you understand what we lost.\n\nWe were by the sea. The wind off the Bay of Bengal blew our coast year round. We lived off the sea, going out to fish, trading with the merchant ships from far away. Our ports were lively, our people had seen the world, and we had always been a land that ruled itself.\n\nThat great empire to the north, Maurya, had long had its eye on us. It was large, it was strong, its kings struck outward generation after generation. But we Kalinga had never been theirs, and that was our pride. We were not rich beyond counting, but we were free.\n\nWhen I was small, the elders often said: we men of Kalinga kneel to no one.\n\nThen I did not know how heavy that line was. I thought life would always be like this: out to sea, home again, children growing, the old growing older. The sea still that sea, the village still that village.\n\nI did not know that the king to the north was already grinding his blade.',
      },
      deliverGoal: 'N2 setup — Kalinga 是什么地方才懂失去什么 (在海边孟加拉湾风/靠海过活出海打鱼跟商船做买卖/港口热闹人见过世面/一直自己当家做主) + 北边大帝国 Maurya 早盯上 (大强国王代代往外打) 但我们一直没归它是骄傲 (不富但自由) + 小时大人说咱 Kalinga 人谁也不跪 + 那时不懂这句多重以为日子一直这样 (出海回家孩子长大老人变老海还那片海村还那村) + 不知道北边国王已在磨刀',
      engagementHook: '小时候大人常说：咱们 Kalinga 人，谁也不跪。我们不富，但我们自由，一直自己当家做主。当时我不懂这句话有多重——你身边有没有一句话，要等失去了才懂它的分量？',
      expectsRealAnswer: false,
    },
    {
      id: 'ks-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '仗是怎么打来的,我说给你听。\n\n那是约公元前 261 年。北边那个国王 Ashoka（阿育王）即位没几年,就把军队开向了我们。他要这块地,因为我们富、靠海、能做生意——也因为我们不肯跪。\n\n我们打了。Kalinga 人不会不打就投降。可我们一个海边的地方,怎么挡得住一个横扫次大陆的帝国的大军?\n\n我现在还能听见那些声音。喊杀声。房子烧塌的声音。母亲找不到孩子的哭声。\n\n约 10 万人死了。我的家人在里面。\n\n约 15 万人被绳子串成一长队,往北边那个帝国的腹地押走——去做什么、最后到了哪,石头上的法敕没有写。他们走的时候,回头望了最后一眼自己的海。这些人里,也有我认识的人。他们从此再没回来。\n\n仗打完了。我活着,可我什么都没了。Kalinga 输了,从此成了那个帝国的一块地。',
        en: 'How the war came, let me tell you.\n\nIt was around 261 BCE. The king to the north, Ashoka, only a few years on the throne, turned his army on us. He wanted this land because we were rich, by the sea, able to trade, and because we would not kneel.\n\nWe fought. Kalinga men do not surrender without fighting. But how could a place by the sea hold back the great army of an empire that had swept the subcontinent?\n\nI can still hear the sounds. The war cries. The crash of houses burning down. Mothers weeping for children they could not find.\n\nAbout a hundred thousand died. My family among them.\n\nAbout a hundred and fifty thousand were roped into one long line and driven north into the heart of that empire, to be slave labor, to fill out that empire\'s numbers. As they went, they turned to look one last time at their own sea. Among them, too, were people I knew. They never came back.\n\nThe war ended. I lived, but I had nothing left. Kalinga lost, and became, from then on, a patch of that empire.',
      },
      deliverGoal: 'N3 setup — 仗怎么打来 (约前 261 北边国王 Ashoka 即位没几年开军队向我们/要这块地因我们富靠海能做生意也因不肯跪) + 我们打了 Kalinga 人不会不打就投降但海边地方挡不住横扫次大陆的大军 + 还能听见喊杀声房子烧塌声母亲找不到孩子哭声 + 约 10 万死家人在里面 + 约 15 万被串成长队往北押走(去向法敕没写)/回头望最后一眼海/有我认识的人再没回来 + 仗打完我活着但什么都没了 Kalinga 输了成了那帝国一块地',
      engagementHook: '我们打了——Kalinga 人不会不打就投降。可一个海边的地方，怎么挡得住一个横扫次大陆的帝国？仗打完，我活着，可我什么都没了。当一个人失去了一切，「活下来」算是幸运吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ks-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。仗过去几年了。有一天,村口那块大石头上,刻上了字。\n\n你不识字。可有人围在那儿,有人念出声。念的是北边那个国王的话——就是打你们 Kalinga 的那个国王。\n\n你走过去,站住,听。\n\n那段话说:国王打 Kalinga,死了约 10 万人,掳走约 15 万人。国王说,看着这一切,他「深深懊悔」。\n\n你站在那儿,听见「深深懊悔」四个字。你脑子里轰一下。\n\n这个人,杀了你全家,烧了你的村,把你认识的人串成绳子押走。现在,他在石头上,说他「后悔」了。\n\n你心里翻江倒海。一边,你想:他终于知道错了?另一边,一个更冷的声音在问:他后悔,然后呢?他后悔,我父亲就能活过来吗?他后悔,被掳走的人就能回家吗?他后悔,有没有把 Kalinga 还给我们?\n\n这一刻你得想清楚:一个有权有势的人,毁了你的一切,然后说「我后悔了」——这四个字,对你,到底算什么?',
        en: 'Now you are me. The war is some years past. One day, on the great stone at the village mouth, words were carved.\n\nYou cannot read. But people gather there, and someone reads aloud. What is read are the words of the king to the north, the very king who made war on your Kalinga.\n\nYou walk over, stand still, and listen.\n\nThe passage says: the king made war on Kalinga, about a hundred thousand died, about a hundred and fifty thousand were carried off. The king says that, looking on all this, he "deeply regrets."\n\nYou stand there and hear the four words, "deeply regrets." Something goes off in your head.\n\nThis man killed your whole family, burned your village, roped the people you knew into a line and drove them away. Now, on stone, he says he is "sorry."\n\nYour heart churns. On one side you think: has he finally seen his wrong? On the other, a colder voice asks: he is sorry, and then what? He is sorry, will my father live again? He is sorry, can the carried-off come home? He is sorry, has he given Kalinga back to us?\n\nIn this moment you must think it through: a man of power destroyed everything you had, and then says "I am sorry." Those words, to you, what are they worth?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 仗过去几年村口大石头刻上字 + 你不识字有人念出声 (北边打你们 Kalinga 那国王的话) + 你走过去站住听 (国王打 Kalinga 死约 10 万掳约 15 万/说看着这一切深深懊悔) + 听见深深懊悔脑子轰一下 + 这人杀你全家烧村串走你认识的人现在石头上说后悔了 + 翻江倒海 (一边想他终于知道错了/另一边更冷的声音问他后悔然后呢/父亲能活过来吗/被掳的能回家吗/有没有把 Kalinga 还回来) + 这一刻想清楚: 有权的人毁你一切然后说我后悔了这四个字对你算什么',
      engagementHook: '杀你全家的人，在石头上说他「深深懊悔」。你心里一边想「他终于知道错了？」，一边一个更冷的声音问：他后悔，我父亲就能活过来吗？被掳走的人就能回家吗？「我后悔了」这四个字，对你到底算什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'ks-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '又过了些日子,国王派的人来了。\n\n是个叫 dhamma-mahamatta（达摩官）的官——专门来推国王那套新规矩 dhamma（达摩）的。他穿着帝国的官服,走到我面前。\n\n我看着他。说实话,我心里没有恨,也没有怕——我早就过了那个阶段。我心里是一种比恨和怕都冷的东西:你又来干什么?\n\n本来我以为他会摆出官架子,告诉我:国王后悔了,你们要感恩,要听话。要真是那样,我一个字都不会信。\n\n可他没有。他先说了一句让我意外的话。他说:对,杀你全家的,就是这个国王。这件事,赔不回来,也抹不掉。\n\n我愣了一下。这是几年来,第一个没有粉饰、没有要我「往前看」、没有要我感恩的帝国的人。\n\n然后他才说:我来,不是要你原谅。我来,是国王立了新规矩——渠会修,病了有地方治,官吏再敢欺负你,你可以来找我。',
        en: 'More days passed, and the king\'s man came.\n\nAn officer called a dhamma-mahamatta, sent to spread the king\'s new rules, the dhamma. He wore the empire\'s robe, and walked up to me.\n\nI looked at him. To tell the truth, there was no hatred in me, no fear; I was long past that stage. What was in me was something colder than hatred or fear: what have you come for now?\n\nI had thought he would put on the airs of office and tell me: the king is sorry, you should be grateful, you should obey. Had it been so, I would not have believed a single word.\n\nBut he did not. He first said a thing that surprised me. He said: yes, it was this king who killed your whole family. That cannot be paid back, and cannot be wiped away.\n\nI was startled. This was the first man of the empire in years who did not gloss it over, did not tell me to "look forward," did not ask me to be grateful.\n\nOnly then did he say: I have not come to ask your forgiveness. I have come because the king has set new rules, the ditches will be repaired, there will be a place to be treated when you fall ill, and if an official dares bully you again, you may come to me.',
      },
      deliverGoal: 'N5 story — 又过些日子国王派的人来了 (dhamma-mahamatta 达摩官专门推 dhamma/穿帝国官服走到我面前) + 我看着他心里没恨没怕早过了那阶段是比恨和怕更冷的东西 (你又来干什么) + 本以为他摆官架子说国王后悔了你们要感恩要听话/真那样一字不信 + 可他没有先说让我意外的话 (对杀你全家的就是这个国王赔不回抹不掉) + 我愣了几年来第一个没粉饰没要我往前看没要我感恩的帝国的人 + 然后才说我来不是要你原谅是国王立新规矩 (渠会修病有地方治官吏欺负你可来找我)',
      engagementHook: '我以为那个官会摆架子，叫我「感恩、听话」——那样我一个字都不会信。可他先说：对，杀你全家的就是这个国王，这件事赔不回来。这是几年来第一个不要我「往前看」的人。如果是你，先听到一句「对，是我们错了」，会不会不一样？',
      expectsRealAnswer: false,
    },
    {
      id: 'ks-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '他说的那些（修渠、治病、护着我不被欺负），我听着。这些是实在的好处,我承认。\n\n可我心里那个最硬的问题,他给不了答案。我盯着他,问了他一句,他答不上来。\n\n我说:你们国王在石头上说他「深深懊悔」。那好。我家人呢?那 15 万被绳子串走的人呢?他后悔了,有没有把他们放回来?他后悔了,有没有把我们的 Kalinga 还回去?\n\n他沉默了。然后他诚实地说:没有。\n\n我早就知道答案是没有。\n\n你看,这就是我想让你看清的事。同一块石头上,国王刻着「我深深懊悔」,可他没还 Kalinga,没放被掳的人回家。我后来还听说,同一块石头上,他还刻着一句话警告别的地方:他虽然讲 dhamma,但他「仍然有力量」,叫人别逼他。\n\n一个人,可以一边在石头上说他「真心后悔」,一边把抢来的东西攥得死死的,一边还亮着他的刀。\n\n那他的「后悔」,到底是什么?是真的良心,还是说给天下人听、让大家更服他的一套话?',
        en: 'What he spoke of, repairing ditches, healing, shielding me from being bullied, I listened to. These are real benefits, I grant it.\n\nBut the hardest question in me, he could not answer. I fixed my eyes on him and asked one thing, and he had no answer.\n\nI said: your king says on stone that he "deeply regrets." Fine. And my family? And the hundred and fifty thousand roped away? He is sorry, has he put them back? He is sorry, has he given our Kalinga back?\n\nHe was silent. Then he said honestly: no.\n\nI had long known the answer was no.\n\nYou see, this is the thing I want you to see clearly. On the same stone the king carved "I deeply regret," yet he did not return Kalinga, did not send the carried-off home. I heard later that on the same stone he also carved a line warning other lands: though he deals in dhamma, he "still has power," and they had better not push him.\n\nA man can, on one stone, say he "sincerely regrets," while holding what he seized in a death grip, while still flashing his blade.\n\nThen his "regret," what is it really? A true conscience, or a set of words spoken for all the world to hear, to make people bow to him more readily?',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 他说修渠治病护我不被欺我听着是实在好处我承认 + 但最硬的问题他给不了答案我盯着他问他答不上 (国王石头说深深懊悔/那我家人呢 15 万被串走的呢/后悔有没有放回来/有没有把 Kalinga 还回去) + 他沉默然后诚实说没有 + 我早知道答案是没有 + 这是我想让你看清的: 同石头刻深深懊悔却没还 Kalinga 没放人回家/听说同石头还刻警告别处他虽讲 dhamma 但仍有力量叫人别逼他 + 一个人可以一边说真心后悔一边把抢来的攥死一边亮着刀 + 那他的后悔到底是什么: 真良心还是说给天下听让大家更服他的一套话',
      engagementHook: '同一块石头上，国王刻着「我深深懊悔」，却没还 Kalinga、没放被掳的人回家，还刻着「我仍有力量，别逼我」。一个人能一边说真心后悔，一边把抢来的东西攥得死死的、还亮着刀吗？那他的「后悔」，到底是真良心，还是说给天下听的一套话？',
      expectsRealAnswer: false,
    },
    {
      id: 'ks-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可我得对你诚实——事情没有那么简单。\n\n那个达摩官走了以后,日子真的有了一点点不一样。村边的路修了,有了井,有了能给人看病的地方。有一回,一个小官想多收我们的税,我真的去找了达摩官,那税,退了回来。\n\n这些都是真的。国王那套 dhamma,落到我这样的人身上,确实让日子没那么苦了。\n\n这就是最让我难受的地方。要是那个国王从头到尾是个纯粹的恶人,我恨他就好了,简单。可他不是。他毁了我的一切,然后又确实让活下来的人,日子好过了一点。\n\n我该怎么办?我要不要因为他修了一条路、退了一笔税,就忘了他杀我全家?\n\n一个伤害过你的人,后来对你有了一点好——这点好,能抵消他造的恶吗?能换来你的原谅吗?\n\n我不知道。我只知道,那条新修的路,我每天都走;我父亲的脸,我也一天都没忘。这两件事,在我心里,一直没法和解。',
        en: 'But I must be honest with you, it is not so simple.\n\nAfter that dhamma-officer left, life did become a little different. The road by the village was repaired, there was a well, there was a place where the sick could be seen. Once, a petty official tried to overtax us, and I really did go to the dhamma-officer, and that tax was returned.\n\nThese are all true. The king\'s dhamma, landing on a man like me, did make the days less bitter.\n\nThis is the thing that pains me most. Had that king been, start to finish, a pure villain, I could simply hate him, and it would be easy. But he is not. He destroyed everything I had, and then did, in fact, make the days of the living a little easier.\n\nWhat am I to do? Am I to forget that he killed my whole family because he repaired a road and returned a tax?\n\nA person who has harmed you, who later does you some small good, can that small good cancel the harm he did? Can it buy your forgiveness?\n\nI do not know. I know only that the newly repaired road, I walk every day; and my father\'s face, I have not forgotten for a single day. These two things, in my heart, have never been reconciled.',
      },
      deliverGoal: 'N7 story — 诚实事情没那么简单 + 达摩官走后日子真有点不一样 (村边路修了有井有看病的地方/一回小官想多收税我真去找达摩官税退回来) + 都是真的 dhamma 落到我这样的人身上确实让日子没那么苦 + 最让我难受: 要是国王纯恶人我恨他就好简单可他不是 (毁我一切又确实让活下来的人日子好过点) + 我该怎么办要不要因他修路退税就忘了他杀我全家 + 伤害过你的人后来对你有点好这点好能抵消恶吗能换原谅吗 + 我不知道只知道新修的路我每天走父亲的脸一天没忘/这两件事心里一直没法和解',
      engagementHook: '要是那个国王从头到尾是个纯粹的恶人，我恨他就好了，简单。可他毁了我的一切，又确实让活下来的人日子好过了一点。新修的路我每天走，父亲的脸我一天没忘。一个伤害过你的人后来对你有点好——这点好，能抵消他造的恶吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ks-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我还想让你看见一件事,是关于「谁的声音被听见」的。\n\n国王在石头上说的话,刻在几十处岩壁和石柱上,立遍整个帝国,两千多年后的人都还看得见。一个征服者的「我后悔了」,被刻成了永恒。\n\n那我们呢?那 10 万死在战场上的人,有谁刻下过他们的名字?那 15 万被串走的人,有谁记下过他们去了哪里、怎么死的?没有。一个都没有。\n\n连我这样一个活下来、还能开口说话的人,要不是这一遍让你站到我这里来听,我这些话,也不会留在任何地方。\n\n你发现这有多不公平了吗?加害的人,有石头替他说「我懊悔」;被害的人,连一行字都没有。历史的天平,从一开始就是歪的:它替有权的人,记下了他的悔过;却把没权的人,连同他们的死,一起抹掉了。\n\n所以你要记住:你听见的关于这场战争的话,大多是国王那一边的。我这一边的声音,本来是注定听不见的。',
        en: 'There is one more thing I want you to see, about whose voice gets heard.\n\nThe words the king carved on stone were cut at dozens of sites, raised across the whole empire, still visible to people two thousand years on. A conqueror\'s "I am sorry" was carved into the eternal.\n\nAnd us? Those hundred thousand dead on the field, who carved down their names? Those hundred and fifty thousand roped away, who recorded where they went, how they died? No one. Not one.\n\nEven I, one who survived and can still speak, were it not for this pass setting you here to listen, these words of mine would stay nowhere.\n\nDo you see how unjust this is? The one who did the harm has stone to say "I regret" for him; the one harmed has not a single line. The scale of history was tilted from the start: it recorded the remorse of the man with power, and wiped out the man without it, together with his dead.\n\nSo you must remember: what you have heard about this war is mostly from the king\'s side. My side\'s voice was, from the start, destined to go unheard.',
      },
      deliverGoal: 'N8 story — 想让你看见关于谁的声音被听见 + 国王石头上的话刻几千份立遍帝国两千年后还看得见 (征服者的我后悔了刻成永恒) + 我们呢 10 万死战场谁刻名字 15 万被串走谁记去哪怎么死/没有一个都没有 + 连我活下来能开口的人要不是这一遍让你来听我这些话也不留任何地方 + 多不公平: 加害的有石头替说我懊悔被害的连一行字都没有 + 历史天平从一开始歪的 (替有权的记悔过把没权的连同死一起抹掉) + 你要记住你听见的关于这战争的话大多是国王那边的我这边的声音本来注定听不见',
      engagementHook: '国王的「我后悔了」刻了几千份，两千年后还看得见；那 10 万死者、15 万被掳走的人，连一个名字都没留下。历史的天平，替有权的人记下了悔过，把没权的人连同他们的死一起抹掉了。你听见的这场战争，大多是国王那一边的——那另一边呢？',
      expectsRealAnswer: false,
    },
    {
      id: 'ks-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这辈子,没等到 Kalinga 还回来,也没等到被掳走的人回家。我带着这两件没法和解的事,活到老,死去。\n\n那个国王呢?他约公元前 232 年死了。他用 dhamma 治理的那个庞大帝国,在他死后大约 50 年,就分裂、瓦解了。他费尽心思要稳住的江山,没保住。\n\n可奇怪的是,他没保住的是帝国,保住的是他的名声。两千多年过去,后人记得他,是那个「忏悔的国王」、那个把暴行刻下来反省的国王。他甚至成了一个象征——他立的狮子柱头,今天成了印度这个国家的国徽。\n\n你听到这里,会不会替我觉得不平?那个杀了我全家的人,被后人记成了「懂得忏悔的伟大国王」;而我们这些被他杀的、被他掳的人,连名字都没留下。\n\n这就是我想让你带走的最后一个问题:当一个有权的人,既造了大恶,又留下了忏悔和善政——后人到底该怎么记他?记住他的悔过,到底是替他把那 10 万条人命轻轻盖了过去,还是至少没让那场屠杀被彻底忘掉?这两种可能,你更信哪一种?',
        en: 'In my whole life, I never saw Kalinga returned, nor the carried-off come home. I carried these two unreconciled things, lived to old age, and died.\n\nAnd the king? He died around 232 BCE. The vast empire he governed by dhamma split and fell apart about fifty years after his death. The realm he took such pains to steady was not kept.\n\nYet, strangely, what he did not keep was the empire; what he kept was his name. Two thousand years on, people remember him as the "king who repented," the king who carved his own atrocity down and reflected on it. He even became a symbol, the lion capital he raised is today the state emblem of the country called India.\n\nHearing this, do you feel it unjust for me? The man who killed my whole family is remembered by later ages as a "great king who knew how to repent"; while we, the ones he killed, the ones he carried off, did not leave even our names.\n\nThis is the last question I want you to carry away: when a man of power has both done great evil and left behind remorse and good rule, how should later ages remember him? Does remembering his remorse gently paper over, for him, those hundred thousand lives, or does it at least keep that slaughter from being wholly forgotten? Which of the two do you believe more?',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 我这辈子没等到 Kalinga 还回来没等到被掳的人回家/带着两件没法和解的事活到老死去 + 国王呢约前 232 死 (用 dhamma 治理的庞大帝国死后约 50 年分裂瓦解/费心稳的江山没保住) + 奇怪: 没保住帝国保住了名声 (两千年后记得他是忏悔的国王把暴行刻下反省的国王/成象征/狮子柱头今天成印度国徽) + 会不会替我不平 (杀我全家的被记成懂忏悔的伟大国王我们被杀被掳的连名字没留) + 最后一个问题: 一个有权的人既造大恶又留忏悔善政后人该怎么记他 + 记住他的悔过会不会等于替他把那 10 万条人命轻轻盖过去',
      engagementHook: '那个杀了我全家的人，被后人记成「懂得忏悔的伟大国王」，他的狮子柱头还成了今天印度的国徽；而我们这些被杀、被掳的人，连名字都没留下。记住他的悔过，是替他把那 10 万条人命轻轻盖了过去，还是至少没让那场屠杀被彻底忘掉？',
      expectsRealAnswer: false,
    },
    {
      id: 'ks-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,再看那个国王的「我后悔了」,两种说法都站得住。\n\n一种说法:他的悔过,对我这样的人,什么都不是。他后悔归后悔,我父亲没活过来,被掳的人没回家,Kalinga 没还回来。他在同一块石头上还亮着刀、警告别人别逼他。一个把抢来的东西攥得死死的人,他的「忏悔」就是一套漂亮话——说给天下人听、让大家更服他,不是说给我们死去的人听的。\n\n另一种说法:他的悔过,也不全是假的、不是完全没有意义。一个征服者,主动把自己造成的死亡刻在石头上认错——这在那个年代几乎没有人做。他的 dhamma,确实让活下来的人日子好过了一点。也许一个有权的人肯公开认错、肯收敛,已经比那些杀了人还洋洋得意的人,强了一点点。\n\n两种说法都站得住。他的悔过,既可能是漂亮话,也可能有一点真。\n\n你怎么看?想 30 秒,写下来。',
        en: 'Having walked my whole life, look again at that king\'s "I am sorry." Both views stand.\n\nOne view: his remorse, to a man like me, is nothing. Sorry as he is, my father did not live again, the carried-off did not come home, Kalinga was not returned. On the same stone he still flashes the blade, warning others not to push him. A man who holds what he seized in a death grip, his "repentance" is a set of fine words, spoken for all the world to hear, to make people bow to him more readily, not spoken to our dead.\n\nThe other view: his remorse is not wholly false either, not entirely without meaning. A conqueror who chose to carve the death he caused into stone and own his wrong, almost no one in that age did such a thing. His dhamma did make the days of the living a little easier. Perhaps a man of power willing to confess openly and to restrain himself is, by a little, better than those who kill and remain smug.\n\nBoth views stand. His remorse may be fine words, and it may hold a little truth.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (他的悔过对我这样的人什么都不是/后悔归后悔父亲没活被掳没回 Kalinga 没还/同石头还亮刀警告别人/把抢来的攥死的人忏悔就是漂亮话说给天下听让人更服他不是说给死去的人听) / 另一种说法 (也不全是假的不是完全没意义/征服者主动刻死亡认错那年代几乎没人做/dhamma 确实让活下来的人好过点/肯公开认错肯收敛比杀人还洋洋得意的强一点点) / 两种都站得住 / 想 30 秒',
      engagementHook: '一种说法：他的悔过对我这样的人什么都不是，我父亲没活过来，Kalinga 没还回来。另一种说法：一个征服者肯公开认错、肯收敛，已经比那些杀了人还洋洋得意的人强了一点点。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'ks-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生:一个失去全家的 Kalinga 人,一场没还回来的故乡,一句听了一辈子也没和解的「我后悔了」。你会怎么评价这件事?\n\n一个有权有势的人,毁了我的一切,然后说他变了。你会说他的悔过是一套漂亮话,还是说它多少有一点真?你怎么评?\n\n不过先记住:你这一遍,听的只是我——那个被战争夺走一切、站在最底下的人。那个刻字的国王 Ashoka、那个夹在中间替他传话的达摩官,各有各的说法。换个视角再走一遍,你会听见国王怎么为自己的悔过辩护,听见那个达摩官怎么解释他的两难——再回头看看,你刚才替我下的判断,还站不站得住。\n\n再想一步,落到你自己身上:你这辈子,一定会遇到一个伤害过别人(也许就是你)的人,有一天他说——「我已经变了。」\n\n那时候,你会凭什么判断?你会只看他嘴上说的「对不起」,还是会看他有没有真的把抢走的还回来、有没有真的不再伤害人?他说「我变了」,你欠他一个相信吗——他又欠你一个什么样的证明,你才该信?',
        en: 'Having walked my whole life, a man of Kalinga who lost his whole family, a homeland never returned, an "I am sorry" I heard all my life and never reconciled with, how would you judge this?\n\nA man of power destroyed everything I had, and then said he had changed. Would you call his remorse a set of fine words, or say it holds a little truth? How do you judge it?\n\nBut first, remember: this pass, you heard only me, the one the war took everything from, standing at the very bottom. The king who carved the words, Ashoka, and the dhamma-officer caught in the middle carrying them for him, each have their own case. Run it again through another lens and you will hear how the king defends his remorse, hear how that officer explains his bind, and then look back to see whether the judgment you just made for me still stands.\n\nThen take one more step, into your own life: in your life you are sure to meet a person who has hurt someone (perhaps you), and one day says, "I have changed."\n\nIn that moment, by what will you judge? Will you look only at the "sorry" on his lips, or at whether he has actually given back what he took, actually stopped doing harm? When he says "I have changed," do you owe him a belief, and what kind of proof does he owe you, before you should believe it?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价 (失去全家的 Kalinga 人/没还回来的故乡/听一辈子没和解的我后悔了 → 漂亮话 vs 多少有一点真) + 跨视角指针 ①你这一遍只听了我站在最底下的人 ②刻字的国王 Ashoka/夹中间的达摩官各有说法换视角再走会听国王辩护悔过听达摩官解释两难再回头看你替我下的判断还站不站得住 + transfer「你一定会遇到伤害过别人(也许就是你)然后说我已经变了的人」+ 你凭嘴上对不起还是凭有没有真的把抢走的还回来不再伤害 + 你欠他一个相信吗他欠你什么证明',
      engagementHook: '走完我这一生，你会怎么评价那个有权有势、毁了我一切又说他变了的人？再想一步：你这辈子一定会遇到一个伤害过别人、然后说「我已经变了」的人。那时候，你会凭他嘴上的「对不起」，还是凭他有没有真的把抢走的还回来？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'ashoka':                          ashokaLens,
  'dhamma-official':                 dhammaOfficialLens,
  'kalinga-survivor-receiving-end':  kalingaSurvivorLens,
};

// 受影响者优先 pattern:
// 被征服并失去家人一方 + N1 gold-standard hook + N6「同一句『我后悔了』两个方向」跨 lens 对位 + N10/N11 漂亮话 vs 多少有一点真 closing
export var defaultLens = 'kalinga-survivor-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'mauryan-india-261bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'ashoka': 30, 'dhamma-official': 28, 'kalinga-survivor-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-24',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「同一句『我后悔了』两个方向」(Ashoka 同石头刻深深懊悔 + 但我仍有力量 / 达摩官翻译不了的那条线: 他后悔的和他愿意归还的不是一回事 / Kalinga 幸存者: 后悔却没还 Kalinga 没放人回家)',
    'defaultLens: kalinga-survivor-receiving-end — 受影响者优先 (被征服失去家人一方 + gold-standard N1 hook + N10/N11 漂亮话 vs 多少有一点真)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: 达摩官与 Kalinga 幸存者均为虚构具体个人承载真实群体经验; 用 description 字段一次性声明; 史料确证的是 Rock Edict XIII 数字 (约 10 万死/15 万流放) + dhamma-mahamatta 官职存在 + Kalinga 被吞并; Rock Edict 内容标注为简化/转述非逐字',
    '反 PR-vs-真心: genuine conversion 与 statecraft/imperial PR 两读法在每个 lens N10 同时呈现 + 提出 both/and 可能, 不替学生选边 (Rule 0)',
    'cultural ban (印度非中国): 全程保留 dhamma/mahamatta/stupa/Kalinga/edict 法敕/Pataliputra/Maurya 原词; 不用玉玺/圣旨/丞相/太子/庙 等中国概念词; 国王=neutral king/emperor sense',
    '神话清坑: 阿育王未变和平主义者 (保军队/死刑/警告边境/未还 Kalinga); dhamma ≠ 佛教 (跨教派公共伦理); 帝国未佛教化',
    'cross-Topic 锚: 古典帝国意识形态比较 (dhamma vs 法度) → 同时代中国战国末/秦统一前夜 (前 260 长平之战); lion capital → 现代印度国徽',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
