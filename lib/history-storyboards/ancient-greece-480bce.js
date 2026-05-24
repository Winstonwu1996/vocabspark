// ─── Ancient Greece 480 BCE Lens-based Storyboard (Story-First v2) ───
//
// Topic: 希波战争 480 BCE · The Persian Wars — Thermopylae & Salamis
// CA HSS Grade 6 (Ancient Greece) · AP World History (Classical era / state-building)
//
// 3 lens 设计 (per AUTHORING_PIPELINE 第 8/12 条):
//   - themistocles               (perpetrator-actor / power) — Themistocles c.524-459 BCE 雅典将领 / 用 Laurion 银矿造海军 / Salamis 海战操盘手 / 后被陶片放逐死于波斯
//   - metic-resident             (lonely-mediator)           — 一个虚构的 metic (μέτοικος 居留外邦人): 自由、纳税、为城邦出钱、上船划桨, 却永远不能投票、不能拥有土地
//   - laurion-slave-receiving-end (receiving-end)            — 一个虚构的 Laurion 银矿被奴役矿工: 他挖出的银被铸成战船, 付了「自由希腊」的账, 自己却永远是财产 [DEFAULT]
//
// 跨 lens micro-detail (N6 anchor):
//   「这点银子 / this silver」一句话两个方向 — 同一批 Laurion 银, 被两个人捧在手里看, 意义完全相反:
//   - Themistocles (雅典公民大会) 把银铸成 200 条三列桨战船 → Salamis 赢了 → 「这点银子救了希腊」
//   - Laurion 被奴役矿工 (地下 100 米的坑道) 用命挖出这点银 → 「这点银子是我的命换的, 救的不是我的希腊」
//   metic lens N6: 同一场 Salamis, metic 上船划桨流血, 战后却还是不能投票 — 「我流的血算数, 我这个人不算数」
//
// 跨 Topic 锚:
//   - 公民大会 / 公民排除 → constitutional-convention-1787 (「We the People」只算有产白人男性, 同一个「谁被算进政治共同体」问题)
//   - 「生而自由 vs 被算成财产」→ constitutional-convention-1787 Mum Bett (一句话 vs 一个人)
//
// defaultLens = 'laurion-slave-receiving-end' (受影响者优先 pattern: 被「民主」排除并付出代价一方 + 跨 lens「这点银子」对位)
//
// STRUCTURE SPEC (与 constitutional-convention-1787 对齐):
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach ~550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false (2 per lens, 6 total)
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 文化禁用自检: Greece is NON-China — 用 城邦(polis)/公民大会(Assembly)/执政官/僭主(tyrant)/三列桨战船(trireme), 绝不用 朝廷/丞相/太子/圣旨/玉玺/江山 等
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Themistocles (perpetrator-actor / power)
// ═══════════════════════════════════════════════════════════════════════

export var themistoclesLens = {
  id: 'themistocles',
  name: 'Themistocles',
  nameCn: '地米斯托克利',
  role: 'perpetrator-actor',
  perspectiveTag: 'navy-architect',
  icon: '⚓',
  description: {
    cn: '雅典将领，约公元前 524 年生，出身不算最显赫，靠脑子和野心爬到城邦最高位。公元前 483 年雅典在 Laurion 银矿挖到一条富矿脉，别人想把银子分给每个公民，他却把全城说服去造了一支海军。公元前 480 年波斯大军压境，他在 Salamis 海峡设了个局，把波斯舰队骗进死地全歼。这一仗救了希腊，也救了刚建立没几十年的雅典民主。同一个他，手段狠、爱操纵人，赢了之后没几年就被自己救的城邦用陶片放逐，最后死在波斯。这一遍让你从设计者内部，看一个人的天才和狠辣怎么同时救一座城。',
    en: 'An Athenian general, born around 524 BCE, not of the highest birth, who climbed to the top of the city on brains and ambition. In 483 BCE Athens struck a rich vein of silver at the Laurion mines; others wanted the silver shared out among every citizen, but he talked the whole city into building a navy instead. In 480 BCE, with the Persian army bearing down, he laid a trap in the strait at Salamis and lured the Persian fleet into a death-ground where it was destroyed. That battle saved Greece, and saved the Athenian democracy that was only a few decades old. The same man was ruthless and a manipulator, and only a few years after the victory the very city he saved exiled him by potsherd vote, and he died at last in Persia. This pass lets you watch, from inside the designer, how one man\'s genius and cruelty saved a city at the same moment.',
  },
  storyboard: [
    {
      id: 'them-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '公元前 480 年秋天，一道窄窄的海峡，叫 Salamis（萨拉米斯）。\n\n海峡对面的山头上，坐着波斯大王 Xerxes（薛西斯），他带来的舰队遮满了海面——几百条船，比我们多得多。他要看着我们被碾碎。\n\n几天前，波斯人刚一把火烧了雅典。我们全城的人逃到岛上，回头看着自己的家在火里塌掉。\n\n现在所有人都问我同一句话：我们打不过，为什么不逃？\n\n我是 Themistocles（地米斯托克利），雅典的将领。我没逃。因为我赌的就是这条窄海峡——大船多没用，挤进这条缝里，多反而是死。\n\n这一遍，你坐进我这个位置。你要赌上一座城、一支舰队、几万人的命，去打一场所有人都觉得必输的仗。',
        en: '480 BCE, autumn, a narrow strait called Salamis.\n\nOn the hill across the water sat the Persian king Xerxes, the fleet he had brought covering the sea, hundreds of ships, far more than ours. He had come to watch us crushed.\n\nA few days earlier the Persians had burned Athens to the ground. Our whole city had fled to the island, and we looked back to watch our homes collapse in the fire.\n\nNow everyone asked me the same thing: we cannot win, so why not flee?\n\nI am Themistocles, a general of Athens. I did not flee. Because the narrow strait was exactly what I was betting on. A big fleet is no use here; cram it into this crack and numbers become a death sentence.\n\nThis pass puts you in my seat. You must wager a city, a fleet, and the lives of tens of thousands on a battle everyone is sure you will lose.',
      },
      deliverGoal: 'N1 hook — 公元前 480 秋 Salamis 窄海峡 + Xerxes 山头看 + 波斯刚烧雅典全城逃岛 + 所有人问为什么不逃 + Themistocles 自我介绍 (赌窄海峡大船多反而死) + 这一遍视角设定 (赌一座城打必输的仗)',
      engagementHook: '所有人都说打不过、该逃——我偏不逃，要赌一场所有人觉得必输的仗。你信「绝境里偏要赌一把」，还是觉得该保命撤退？',
      expectsRealAnswer: false,
    },
    {
      id: 'them-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说波斯有多吓人，你才懂我们当时多绝望。\n\n波斯是当时世界上最大的帝国，从今天的土耳其一直管到印度边上。大王 Xerxes 要报一笔旧账：十年前（公元前 490 年），他父亲派兵打雅典，在 Marathon（马拉松）被我们打败了。这回他要亲自来，把希腊整个吞掉。\n\n他带的兵多到什么程度？古代史家 Herodotus（希罗多德）写得夸张，说几百万——这数字后人不信，但有一点是真的：波斯军队大到，走过的河被士兵和牲口喝干。\n\n而我们「希腊」根本不是一个国家。希腊是几百个各自为政的城邦（polis），平时还互相打仗。雅典、斯巴达、科林斯……谁也不服谁。\n\n一边是统一的超级帝国，一边是一盘散沙的小城邦。\n\n这仗怎么看都不该赢。可要是输了，我们这些人——连同雅典刚搞起来没几十年的那套「公民自己治理自己」的新规矩——全完。',
        en: 'First, how terrifying Persia was, so you understand how hopeless we were.\n\nPersia was the largest empire in the world then, ruling from today\'s Turkey all the way to the edge of India. King Xerxes had an old score to settle: ten years earlier, in 490 BCE, his father had sent troops against Athens and lost to us at Marathon. This time he would come in person and swallow Greece whole.\n\nHow large was his army? The historian Herodotus writes wildly of millions, a figure later ages do not believe; but one thing is true: the Persian host was so vast that rivers it crossed were drunk dry by the soldiers and animals.\n\nAnd our "Greece" was not a country at all. Greece was hundreds of self-governing city-states, the polis, that fought one another in normal times. Athens, Sparta, Corinth, none would bow to another.\n\nOn one side, a unified superpower; on the other, a scatter of small city-states like loose sand.\n\nBy every measure this war should not be won. But if it were lost, we, along with the new rule Athens had set up only decades before, that "citizens govern themselves," would all be finished.',
      },
      deliverGoal: 'N2 setup — 波斯最大帝国 (土耳其到印度) + Xerxes 报 490 BCE Marathon 之仇 + Herodotus 夸张数字 (millions 后人不信/但河被喝干为真) + 希腊不是国家是几百个互相打的城邦 (Athens/Sparta/Corinth) + 一盘散沙 vs 统一帝国 + 输了雅典新民主全完',
      engagementHook: '一边是统一的超级帝国，一边是几百个互相打仗的小城邦——这仗怎么看都不该赢。换作是你，会联合那些平时跟你打仗的邻居一起拼，还是各保各的？',
      expectsRealAnswer: false,
    },
    {
      id: 'them-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我怎么赢在开战之前的？靠一笔银子和一张嘴。\n\n公元前 483 年，雅典在城南的 Laurion（劳里昂）银矿挖到一条特别富的矿脉，城邦突然多出一大笔钱。\n\n大多数公民的想法很朴素：这是我们城邦的钱，按人头分给每个公民，一人一份，落袋为安。\n\n我不同意。我站到公民大会（Assembly）上——雅典的成年男性公民聚在一起投票决定大事的地方——我说：别分。拿这笔银子去造一支海军。\n\n我没敢直接说「为了防波斯」，那太远，没人怕。我说的是隔壁那个一直跟我们较劲的城邦 Aegina（埃伊纳）——造船，我们才压得过他们。\n\n这是我的算计：用一个眼前的小威胁，骗大家去防一个他们还没看见的大威胁。\n\n公民大会被我说服了。这笔银子，变成了大约 200 条三列桨战船（trireme）。\n\n几年后波斯压境，我们手里，正好有一支别人没有的海军。',
        en: 'How did I win before the war even began? With a fund of silver and a tongue.\n\nIn 483 BCE Athens struck an unusually rich vein at the Laurion silver mines south of the city, and the city-state suddenly had a great sum of money.\n\nMost citizens\' instinct was simple: this is our city\'s money, share it out per head, one portion each, money in the pocket.\n\nI disagreed. I stood up in the Assembly, the place where Athens\' adult male citizens gathered to vote on great matters, and I said: do not share it. Take this silver and build a navy.\n\nI did not dare say "to defend against Persia." That was too far off; no one was afraid of it. What I named was our neighbor and old rival, the city-state Aegina. Build ships, I said, and only then can we hold them down.\n\nThat was my calculation: use a small threat right in front of them to trick everyone into preparing for a great threat they could not yet see.\n\nThe Assembly was persuaded. That silver became about 200 triremes.\n\nA few years later, when Persia bore down, we had in our hands a navy no one else did.',
      },
      deliverGoal: 'N3 setup — 483 BCE Laurion 银矿富脉 + 多数公民想按人头分银 + Themistocles 在 Assembly (成年男性公民投票处) 主张造海军 + 没敢说防波斯/借口邻邦 Aegina + 算计: 用眼前小威胁骗大家防看不见的大威胁 + 银→约 200 trireme + 几年后正好有海军',
      engagementHook: '我没说真话——我用一个小借口，骗全城去防一个他们还看不见的大危机。这是高明的远见，还是不老实的操纵？你怎么分？',
      expectsRealAnswer: false,
    },
    {
      id: 'them-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n波斯大军压到希腊北边。希腊几十个城邦好不容易凑成一个联盟，可联盟里说话最响的是斯巴达——陆地上最强的城邦。斯巴达人只信一件事：在陆地上摆开阵势，硬碰硬。\n\n公元前 480 年 8 月，斯巴达国王 Leonidas（列奥尼达）带着大约 300 名斯巴达战士，加上一些盟友，去守一条叫 Thermopylae（温泉关）的山间窄路。他们想用这条窄路卡住波斯大军。\n\n他们守了几天，最后全部战死在那条路上。\n\n陆地这条线，断了。波斯军队涌进希腊中部，直奔雅典。\n\n这一刻你得做最痛的决定：你是雅典将领，你知道雅典守不住。你要不要劝全城放弃这座城、烧掉自己的家、把所有人撤到海上？\n\n放弃一座城去保人，还是死守一座城连人带城一起赔进去？这道题，落在你头上。你怎么选？',
        en: 'Now you are me.\n\nThe Persian army pressed down on northern Greece. Dozens of Greek city-states had, with great difficulty, formed an alliance, but the loudest voice in it was Sparta, the strongest city on land. The Spartans believed in one thing only: line up on the ground and fight head to head.\n\nIn August 480 BCE the Spartan king Leonidas, with about 300 Spartan warriors and some allies, went to hold a narrow mountain pass called Thermopylae. They meant to choke the Persian host in that narrow road.\n\nThey held for several days, and in the end every one of them died on that road.\n\nThe land line was broken. The Persian army poured into central Greece, straight for Athens.\n\nNow you face the most painful decision. You are an Athenian general. You know Athens cannot be held. Will you urge the whole city to give up the city, burn their own homes, and pull everyone out to the sea?\n\nGive up a city to save its people, or hold the city and lose people and city together? That question lands on you. Which do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 希腊联盟 Sparta 主导 (陆地最强/只信硬碰硬) + 480 BCE 8 月 Leonidas 约 300 斯巴达 + 盟友守 Thermopylae 山间窄路 + 守几天全部战死 (Sparta=陆地/land stand) + 陆线断波斯奔雅典 + 你的决定: 放弃城保人 vs 死守连人带城赔进去',
      engagementHook: '守 Thermopylae 的人全死了，陆地这条线断了——你知道雅典守不住。你要劝全城烧掉自己的家、撤到海上吗？放弃城保人，还是死守城一起赔进去？',
      expectsRealAnswer: false,
    },
    {
      id: 'them-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了放弃城，保人。\n\n这个决定有多狠你得明白：我让全雅典的人——老人、女人、孩子——上船、上岛，眼睁睁看着波斯人放火烧了我们的城，烧了山上的神庙。一座几百年的城，几天就成了灰。\n\n可只要人还在，船还在，城就还能重建。这是我的赌注。\n\n现在轮到海上这条线了。希腊舰队都缩在 Salamis（萨拉米斯）海峡里。问题是，联盟里又吵起来了。\n\n斯巴达和其他城邦的将领想退到更南边去守自己的地盘——他们说，在这窄海峡里跟波斯拼，是送死。他们大多不是雅典人，雅典已经烧了，他们当然想撤回自己家门口。\n\n我急了。船一散，希腊就完了——波斯舰队会一个一个把各城邦的船吃掉。\n\n这时候光讲道理没用。我得用点别的手段，逼这群人留在海峡里打。\n\n（我用了什么手段，下一段告诉你。）',
        en: 'I chose to give up the city and save the people.\n\nYou must understand how brutal that decision was. I made all of Athens, old people, women, children, board the ships and the island, and watch with their own eyes as the Persians set fire to our city and burned the temples on the hill. A city centuries old became ash in a few days.\n\nBut as long as the people lived and the ships floated, the city could be rebuilt. That was my wager.\n\nNow it came down to the line at sea. The Greek fleet was all bottled in the strait at Salamis. The trouble was, the alliance fell to quarreling again.\n\nThe Spartan and other city-states\' commanders wanted to pull back farther south to defend their own ground. They said fighting Persia in this narrow strait was suicide. Most of them were not Athenians; Athens was already burned, so of course they wanted to retreat to their own doorsteps.\n\nI was desperate. If the fleet scattered, Greece was finished. The Persian navy would pick off each city\'s ships one by one.\n\nReasoning alone would not work now. I had to use other means to force this crowd to stay and fight in the strait.\n\n(What means I used, the next part will tell you.)',
      },
      deliverGoal: 'N5 story — 选放弃城保人 (全城老人女人孩子上船看波斯烧城烧神庙/几百年城几天成灰) + 人船在城能重建是赌注 + 海上线 Salamis 联盟又吵 (Sparta 等想退南守自己地盘/非雅典人) + 散了波斯一个个吃掉 + 讲道理没用得用别的手段逼留下 + 悬念到下段',
      engagementHook: '我让全城人眼睁睁看着自己的家被烧成灰——只为保住人和船。要保住更大的东西，你下得了这种狠手吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'them-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我做了一件到今天还有人骂我不光彩的事。\n\n我偷偷派了一个我信得过的仆人，划小船去波斯那边，给 Xerxes 带个「密报」：希腊人吓破了胆，今晚就要趁夜逃跑，你赶紧把海峡两头堵死，一网打尽。\n\n这是假情报。我故意把波斯人引进这条窄海峡。\n\nXerxes 信了。当晚他派舰队封住海峡两头。天一亮，波斯几百条大船全挤在这条窄缝里——船多，转不开身，互相撞。我们的船小、灵活，专挑乱成一团的地方下手。\n\n波斯舰队在 Salamis 被打垮了。Xerxes 在山头上，眼睁睁看着自己的舰队完蛋。\n\n这一仗，靠的就是那批 Laurion 银矿的银子——三年前我连骗带哄让公民大会留下来造船的那笔银。这点银子，造了船，赢了 Salamis，救了希腊。\n\n但你记着：那点银子，不是天上掉的。它是从城南地底下，一筐一筐挖出来的。挖银子的人，从没坐进公民大会，也没上岛逃命——他们就是那点银子本身。（他们是谁，你换到那一遍会看见。）',
        en: 'I did a thing that to this day some still curse me for as dishonorable.\n\nI secretly sent a servant I trusted, rowing a small boat over to the Persian side, to bring Xerxes a "secret report": the Greeks are terrified and mean to flee under cover of night, so block both ends of the strait at once and net them all.\n\nIt was false intelligence. I deliberately drew the Persians into this narrow strait.\n\nXerxes believed it. That night he sent his fleet to seal both mouths of the strait. At first light, hundreds of great Persian ships were jammed into the narrow crack, too many to turn, ramming one another. Our ships were small and nimble, striking wherever the tangle was worst.\n\nThe Persian fleet was broken at Salamis. From his hill Xerxes watched his own navy destroyed.\n\nThis battle turned on that Laurion silver, the fund I had wheedled and tricked the Assembly into keeping three years before to build ships. That bit of silver built the ships, won Salamis, saved Greece.\n\nBut remember: that silver did not fall from the sky. It was dug, basket by basket, out of the ground south of the city. The people who dug it never sat in the Assembly, never fled to the island; they were that silver itself. (Who they were, you will see when you switch to that pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Themistocles 假情报 (派仆人给 Xerxes 假密报希腊要夜逃/堵海峡) + 故意引进窄海峡 + Xerxes 信了封海峡/波斯大船挤撞/希腊小船灵活 + Salamis 打垮波斯/Xerxes 山头看 + 「这点银子」造船赢 Salamis 救希腊 + 跨 lens 对位 Laurion 被奴役矿工 (银是一筐筐挖出/挖的人没进 Assembly 没逃命/他们就是银本身)',
      engagementHook: '我用假情报把波斯舰队骗进死海峡——赢了。可救希腊的那点银子，是地底下一筐筐挖出来的，挖银子的人从没进过公民大会。同一点银子，救了谁，又是谁的命换的？',
      expectsRealAnswer: false,
    },
    {
      id: 'them-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: 'Salamis 之后，故事还没完。\n\nXerxes 怕被困在希腊回不了家，自己先带着大部分军队撤回了波斯，只留下一支陆军在希腊过冬。第二年，公元前 479 年，希腊联军在 Plataea（普拉提亚）的陆地上，把这支留下来的波斯陆军彻底打垮。\n\n你要分清楚这两条线：\n\n海上这条——Salamis（公元前 480），是雅典的海军赢的，是我的局。\n陆地这条——Plataea（公元前 479），是斯巴达带头的陆军赢的，结束了整场战争。\n\n后来很多人提起这段历史，只记得「斯巴达 300 勇士」，把斯巴达说成救希腊的英雄。可 300 勇士守的 Thermopylae，其实是输的——人全死了，路也没守住。真正打垮波斯舰队、把战争扭过来的那一仗，是海上的 Salamis。\n\n陆地英雄的故事好讲，海上谋略的功劳难记。这两条线，被后人记成了完全不同的分量。',
        en: 'After Salamis the story was not over.\n\nXerxes, afraid of being trapped in Greece and unable to get home, withdrew most of his army back to Persia himself, leaving one land force to winter in Greece. The next year, 479 BCE, the Greek allied army on the ground at Plataea utterly broke this remaining Persian land force.\n\nYou must keep these two lines straight:\n\nThe line at sea, Salamis (480 BCE), was won by the Athenian navy. That was my doing.\nThe line on land, Plataea (479 BCE), was won by the Sparta-led land army and ended the whole war.\n\nLater, when people recall this history, many remember only the "300 Spartans" and cast Sparta as the heroes who saved Greece. But the Thermopylae the 300 held was in fact a loss; the men all died and the road was not held. The battle that truly broke the Persian fleet and turned the war was the one at sea, Salamis.\n\nA story of heroes on land is easy to tell; the credit for cunning at sea is hard to remember. These two lines were recorded by later ages as entirely different weights.',
      },
      deliverGoal: 'N7 story (清坑 — 不浪漫化 300/分清两条线) — Salamis 后 Xerxes 怕困回波斯/留陆军 + 479 BCE Plataea 斯巴达带头陆军彻底打垮结束战争 + 两条线分清 (Salamis 480 海/雅典海军/我的局 vs Plataea 479 陆/斯巴达带头/结束战争) + 后人只记 300 勇士但 Thermopylae 是输的 + 真正扭转是 Salamis + 陆地英雄好讲海上谋略难记',
      engagementHook: '守 Thermopylae 的 300 人其实是输的——人死了、路也没守住；真正扭转战局的是海上的 Salamis。为什么后人偏偏只记住了那个失败的英雄故事？',
      expectsRealAnswer: false,
    },
    {
      id: 'them-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在说说我救的到底是什么。\n\n我救的不只是雅典这座城，还有雅典刚搞起来没几十年的一套新规矩。\n\n大约公元前 508 年，比 Salamis 早一代人，一个叫 Cleisthenes（克利斯提尼）的雅典人推动了一场改革：把权力从少数贵族手里拿出来，交给全体公民。从那以后，雅典的大事——打不打仗、谁当将领、要不要造船——都由公民大会投票决定。\n\n这就是后人说的「民主」（democracy）最早的样子。它当时还很年轻、很脆。\n\n而划桨的人，恰恰是民主的底气。三列桨战船靠几百个人一起拼命划。这些划桨手很多是穷公民——他们出不起钱买盔甲当陆军，但他们能用一身力气划船。Salamis 是他们划出来的。\n\n你品出这里的逻辑没有？穷公民用桨救了城，城就更得听他们的话。海军越重要，普通公民在公民大会里的分量就越重。\n\n我造的这支海军，不只赢了一场仗。它还在悄悄地，把民主推得更深。',
        en: 'Now let me tell you what it was I actually saved.\n\nI saved not only the city of Athens, but a set of new rules Athens had set up only a few decades before.\n\nAround 508 BCE, a generation before Salamis, an Athenian named Cleisthenes pushed through a reform: take power out of the hands of a few aristocrats and give it to the whole body of citizens. From then on, Athens\' great matters, whether to go to war, who would be general, whether to build ships, were decided by a vote of the Assembly.\n\nThis is the earliest shape of what later ages call democracy. It was still young then, and fragile.\n\nAnd the rowers were the very backbone of that democracy. A trireme is driven by a few hundred men straining together at the oars. Many of these rowers were poor citizens; they could not afford armor to serve as infantry, but they could put their whole strength into the oars. Salamis was rowed by them.\n\nDo you catch the logic here? The poor citizens saved the city with their oars, so the city had to listen to them more. The more the navy mattered, the heavier the weight of the ordinary citizen in the Assembly.\n\nThis navy I built did not only win a battle. It was quietly pushing democracy deeper.',
      },
      deliverGoal: 'N8 story — 救的不只城是新规矩 + c.508 BCE Cleisthenes 改革 (权力从贵族到全体公民/早 Salamis 一代人) + 大事由 Assembly 投票 + democracy 最早样子 (年轻脆) + 划桨手是民主底气 (穷公民买不起盔甲但能划船/Salamis 他们划的) + 逻辑: 穷公民救城→城更听他们→海军越重要普通公民分量越重 + 海军悄悄把民主推深',
      engagementHook: '划桨救城的是买不起盔甲的穷公民——救了城，城就更得听他们的。「谁出力多，谁说话就该更算数」——你觉得这条逻辑公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'them-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '可你猜，我这个救了城、推了民主的人，最后什么下场？\n\n被我救的那座城，把我赶走了。\n\n雅典人有个办法对付他们觉得权力太大的人：陶片放逐（ostracism）。每年公民大会可以投一次票，大家把想赶走的人的名字，刻在陶片上。谁的名字被刻得最多，谁就被放逐出城十年——不审判、不定罪，纯粹因为「你太强了，我们不放心」。\n\n大约公元前 471 年，雅典人把我陶片放逐了。我救他们的时候是英雄，没几年，同一群人在陶片上刻下我的名字。\n\n后来事情更荒唐。我被希腊各城邦追杀，走投无路，最后逃去了——波斯。就是我在 Salamis 打垮的那个帝国。波斯新王不但没杀我，还给了我封地养老。\n\n我，打垮波斯舰队的人，最后死在波斯的土地上，靠波斯王的赏赐过日子。\n\n这就是我的结局：救了民主的城，被民主的城赶走；打垮的敌人，成了我最后的收留者。',
        en: 'But guess what became of me, the man who saved the city and pushed democracy deeper.\n\nThe city I saved drove me out.\n\nThe Athenians had a way of dealing with men they thought had grown too powerful: ostracism. Once a year the Assembly could hold a vote; people scratched the name of the man they wanted gone onto a potsherd. Whoever\'s name was scratched most was exiled from the city for ten years, no trial, no conviction, purely because "you are too strong and we do not trust it."\n\nAround 471 BCE the Athenians ostracized me. When I saved them I was a hero; a few years on, the same people scratched my name onto the sherds.\n\nThen it grew more absurd. Hunted from city to city across Greece, with nowhere left to go, I fled at last to Persia, the very empire I had broken at Salamis. The new Persian king not only spared me but gave me lands to live out my age.\n\nI, the man who broke the Persian fleet, died at last on Persian soil, living off a Persian king\'s gift.\n\nThis was my end: I saved a democratic city and was driven out by it; the enemy I broke became my final refuge.',
      },
      deliverGoal: 'N9 zoom-out — Themistocles 救城却被赶走 + ostracism 陶片放逐机制 (公民大会每年投票/名字刻陶片/最多者放逐十年/不审判/因太强不放心) + c.471 BCE 被放逐 (救时是英雄几年后同群人刻名) + 被各城追杀逃去波斯 (打垮的帝国) + 波斯新王给封地 + 死在波斯靠赏赐 + 结局: 救民主的城被赶走/打垮的敌人成收留者',
      engagementHook: '我救了雅典，雅典却把我陶片放逐了——纯粹因为「你太强，我们不放心」。一个制度防自己的功臣，是聪明的自保，还是忘恩负义？',
      expectsRealAnswer: false,
    },
    {
      id: 'them-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是希腊的救星。是我看到了别人没看到的危险，连骗带哄让公民大会留下银子造海军；是我设的局，在 Salamis 把波斯舰队引进死地全歼。没有我那支海军，雅典早被波斯吞了，那套刚长出来的民主也跟着没了。我还顺手把民主推得更深——划桨的穷公民，从此在城里说得上话。\n\n另一种说法：我是个靠操纵和谎言成事的人。我骗公民大会、骗 Xerxes、连自己人都骗着才肯打。我口口声声救「自由的希腊」，可造船的那点银子，是地底下被奴役的人用命挖的；划桨的穷公民算进了民主，可女人、外邦人、被奴役者，一个都没算进去。我救的「民主」，从一开始就只算一小部分人。\n\n这两边不是「优点加缺点」。是同一种本事的两面——同一双手，又狠又准，既救了城，也踩着没人替他们说话的人。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the savior of Greece. I saw the danger others did not; I wheedled the Assembly into keeping the silver and building a navy; it was my trap that drew the Persian fleet into a death-ground at Salamis and destroyed it. Without that navy of mine, Athens would have been swallowed by Persia, and the young democracy would have gone with it. And I pushed that democracy deeper besides; the poor citizens who rowed had a say in the city ever after.\n\nThe other view: I was a man who got things done by manipulation and lies. I deceived the Assembly, deceived Xerxes, deceived even my own allies into fighting. I spoke endlessly of saving "free Greece," yet the silver that built the ships was dug with their lives by the enslaved underground; the poor rowers were counted into the democracy, but women, foreigners, and the enslaved were not counted at all. The "democracy" I saved counted only a small part of people from the very start.\n\nThese are not "strengths and weaknesses." They are two faces of one ability, the same hands, ruthless and precise, that saved a city and trod on the people no one was speaking for.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (希腊救星/看到危险骗 Assembly 造海军/Salamis 设局全歼/没海军雅典+民主全没/还把民主推深) / 另一种说法 (靠操纵谎言成事/骗 Assembly+Xerxes+自己人/救自由希腊但银是被奴役者用命挖/划桨穷公民算进但女人外邦人奴隶没算进/救的民主只算一小部分) / 同一种本事两面 / 想 30 秒',
      engagementHook: '希腊救星，和靠操纵谎言成事的人——是同一个我，同一双手。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'them-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一场胜利？\n\n一场救了「自由希腊」的大胜，背后是连环的谎言、被烧掉的城、被奴役者挖出来的银，和一套只算一小部分人的「民主」。这些不是胜利的瑕疵，它们就是胜利本身的一部分。把光荣和代价放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有那种「赢了的一方」「说话最响的一方」，靠的其实是一些没被算进去、没人提起的人——一个项目挂了某个人的名，真正干活的另有其人？一个集体的荣誉，是某些被忽略的人撑起来的？\n\n那时候，你会只盯着台上领奖的人，还是会去问一句：这场胜利，到底是谁的命、谁的力气换来的？那个没被算进去的人，在哪里？',
        en: 'Having walked my whole life, how would you judge a victory like this?\n\nA great victory that saved "free Greece," and behind it a chain of lies, a burned city, silver dug by the enslaved, and a "democracy" that counted only a small part of people. These were not flaws in the victory; they were part of the victory itself. Put the glory and the price on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there a "winning side," a "loudest voice," that in fact rests on people who were never counted in and never named, a project that carries one person\'s name while others did the real work, a group\'s honor held up by some who were overlooked?\n\nWhen that happens, will you watch only the one taking the prize on the stage, or will you ask: whose lives, whose strength, was this victory bought with? Where is the person who was never counted in?',
      },
      deliverGoal: 'N11 close — 评价胜利 (救自由希腊背后是谎言+烧城+被奴役者挖的银+只算一小部分人的民主/不是瑕疵是胜利本身一部分/光荣与代价同一天平) + transfer「今天你身边赢了的/说话最响的一方靠的是没被算进去没人提起的人 (项目挂某人名真正干活另有其人)」+ 你会只盯台上领奖的还是问这胜利谁的命谁的力气换的/没被算进去的人在哪',
      engagementHook: '一场救了「自由希腊」的大胜，背后是谎言、烧掉的城、被奴役者挖的银。你会怎么评价这样一场胜利？今天你身边那个「赢了的一方靠的却是没人提起的人」的地方，你会去问一句吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Metic resident (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var meticResidentLens = {
  id: 'metic-resident',
  name: 'A metic of Athens',
  nameCn: '一个雅典的居留外邦人',
  role: 'lonely-mediator',
  perspectiveTag: 'resident-foreigner',
  icon: '⚖️',
  description: {
    cn: '一个虚构的 metic（μέτοικος，意思是「住在身边的人」），一个住在雅典的自由外邦人，原籍隔壁城邦。他在雅典开店、做生意、按月给城邦交一笔专门的居留税，城邦打仗时他也上船划桨、流血。他懂雅典，爱雅典，雅典也离不开他这样的人。可不管他住多少年、出多少钱、流多少血，他永远不能在公民大会投票，不能拥有一寸土地，因为他不是「公民」。这一遍，你站在一个一只脚在里、一只脚在外的人这边，看雅典的「民主」到底为谁而设。',
    en: 'A fictional metic (metoikos, meaning "one who dwells alongside"), a free foreigner living in Athens, originally from a neighboring city-state. He keeps a shop in Athens, does business, pays the city a special monthly residence tax, and when the city goes to war he too rows in the fleet and bleeds. He understands Athens, loves Athens, and Athens cannot do without people like him. Yet no matter how many years he lives there, how much he pays, how much he bleeds, he can never vote in the Assembly and can never own a foot of land, because he is not a "citizen." This pass puts you beside a man with one foot in and one foot out, watching for whom Athens\' "democracy" was really made.',
  },
  storyboard: [
    {
      id: 'mt-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '雅典人有个词专门指我这种人：metic（μέτοικος）。意思是「住在身边的人」。\n\n我是个自由人，不是奴隶。我从隔壁一个城邦搬到雅典，在这儿开店、做买卖、娶妻生子，住了大半辈子。我说雅典话，过雅典的节，城邦打仗我上船划桨，跟雅典人一起流血。\n\n可在公民大会投票那天，雅典公民走进会场，我得站在门外。城邦分土地那天，没有我的份。我永远不能拥有一寸雅典的地。\n\n为什么？只因为我不是在这儿「生出来的」。我是「住在身边的人」，不是「自己人」。\n\n这一遍，你站在我这里看雅典。你会看到一座了不起的城——也会看到这座城画的那条线：谁在里面，谁永远在门外。',
        en: 'The Athenians have a word for people like me: metic (metoikos). It means "one who dwells alongside."\n\nI am a free man, not a slave. I moved to Athens from a neighboring city-state, and here I keep a shop, do business, took a wife and raised children, and have lived most of my life. I speak the Athenian tongue, keep the Athenian festivals, and when the city goes to war I row in the fleet and bleed alongside Athenians.\n\nYet on the day the Assembly votes, when the Athenian citizens walk into the meeting place, I must stand outside the door. On the day the city hands out land, there is no share for me. I can never own a single foot of Athenian ground.\n\nWhy? Only because I was not "born" here. I am "one who dwells alongside," not "one of our own."\n\nThis pass, you stand where I stand and look at Athens. You will see a remarkable city, and you will also see the line that city draws: who is inside, and who is forever outside the door.',
      },
      deliverGoal: 'N1 hook — metic (μέτοικος 住在身边的人) 自我介绍 (自由人不是奴隶/从隔壁城邦搬来/开店做买卖娶妻生子大半辈子/说雅典话过雅典节/打仗上船划桨流血) + 投票日站门外/分土地没份/永不能拥有一寸地 + 因为不是这儿生的 + 这一遍看城画的线 (谁在里面谁永远门外)',
      engagementHook: '我说雅典话、为雅典流血、住了大半辈子——可投票那天我得站在门外，只因为我不是在这儿「生出来的」。住多久、出多少力，能不能换来「算一个自己人」？',
      expectsRealAnswer: false,
    },
    {
      id: 'mt-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说雅典有多需要我们这种人，你才懂这条线有多奇怪。\n\n雅典是个做买卖的城邦。它地少、粮不够吃，靠海运从外面买粮、卖橄榄油和陶器。这套生意，很大一部分是我们 metic 在做的——我们是商人、工匠、放贷的、开作坊的。雅典城里最热闹的市场、码头、手工作坊，到处是我们的人。\n\n城邦也认我们的钱。我们每个月要交一笔专门给外邦人的居留税（metoikion）。打起仗来，有钱的 metic 还得出钱赞助城邦——比如出钱装备一条战船。\n\n说白了：雅典的繁荣，有我们一份大功劳。城邦的账本上，少不了我们。\n\n可城邦的权力名单上，没有我们。\n\n我交的税养着这座城，我赞助的船替这座城打仗，但决定这座城怎么走的那场投票，我没资格参加。\n\n这就是我每天活在里头的那个怪事：城邦要我的钱、要我的力，就是不要算我一票。',
        en: 'First, how much Athens needed people like us, so you see how strange this line is.\n\nAthens was a trading city. It had little land and could not feed itself, and lived by shipping in grain from outside and selling olive oil and pottery. A large part of that trade was run by us metics. We were the merchants, the craftsmen, the moneylenders, the workshop owners. In the busiest market, the docks, the workshops of Athens, our people were everywhere.\n\nThe city took our money too. Each month we paid a residence tax laid only on foreigners, the metoikion. When war came, the wealthier metics also had to fund the city, for instance paying to equip a warship.\n\nIn plain words: a large share of Athens\' prosperity was our doing. On the city\'s ledger, we could not be left out.\n\nBut on the city\'s roll of power, we were nowhere.\n\nThe tax I paid kept this city fed; the ship I funded fought this city\'s wars; but the vote that decided where this city went, I had no right to join.\n\nThis is the strange thing I lived inside every day: the city wanted my money and my strength, and simply would not count me a single vote.',
      },
      deliverGoal: 'N2 setup — 雅典需要 metic (地少粮不够/靠海运买粮卖橄榄油陶器/metic 是商人工匠放贷开作坊/市场码头作坊到处是) + 认钱 (每月交 metoikion 居留税/有钱 metic 赞助装备战船) + 雅典繁荣有 metic 大功劳/账本少不了 + 但权力名单没有 + 怪事: 要钱要力就是不算一票',
      engagementHook: '城邦要我的钱、要我的力气替它打仗，就是不肯算我一票。一个又用你又不算你的地方——你会怎么跟它相处？',
      expectsRealAnswer: false,
    },
    {
      id: 'mt-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '那雅典的「公民」到底是怎么算的？这条线画在哪儿，你得弄清楚。\n\n大约公元前 508 年，比波斯战争早一代人，一个叫 Cleisthenes（克利斯提尼）的雅典人改了规矩：把权力从少数贵族手里，交给「全体公民」。雅典人特别骄傲这套新规矩——公民自己治理自己，大事在公民大会投票决定。\n\n听起来很美。可关键全在「公民」两个字怎么定义。\n\n在雅典，「公民」只算：成年的、男性的、父母都是雅典人的——那些人。算下来，能投票的公民，大概只占全城所有人的十分之一到五分之一。\n\n其余那一大半多的人呢？女人，不算。被奴役的人，不算。还有我们 metic——自由的、纳税的、流血的外邦人——也不算。\n\n所以「全体公民自己治理自己」这句话，每个字都是真的。骗你的不是这句话，是「公民」这个词有多窄。雅典人把绝大多数住在这座城里的人，画在了「公民」这条线的外面。',
        en: 'So how exactly was an Athenian "citizen" counted? You must be clear on where this line was drawn.\n\nAround 508 BCE, a generation before the Persian war, an Athenian named Cleisthenes changed the rules: he took power out of the hands of a few aristocrats and gave it to "the whole body of citizens." The Athenians were especially proud of this new rule, citizens governing themselves, great matters decided by a vote of the Assembly.\n\nIt sounds beautiful. But everything turns on how the word "citizen" is defined.\n\nIn Athens, a "citizen" counted only as this: adult, male, with both parents Athenian. Tally it up and the citizens who could vote were perhaps only a tenth to a fifth of everyone in the city.\n\nWhat of the great majority, then? Women, not counted. The enslaved, not counted. And us metics, free, tax-paying, bleeding foreigners, also not counted.\n\nSo "the whole body of citizens governing themselves" is true in every word. What deceives you is not that sentence; it is how narrow the word "citizen" was. The Athenians drew the vast majority of the people living in this city outside the line of "citizen."',
      },
      deliverGoal: 'N3 setup — 公民怎么算/线画哪 + c.508 BCE Cleisthenes 改革 (权力从贵族到全体公民/早波斯战争一代人) + 雅典骄傲公民自治/大事 Assembly 投票 + 关键在「公民」定义: 成年+男性+父母都雅典人 + 能投票约占全城 1/10 到 1/5 + 其余 (女人/被奴役者/metic 自由纳税流血外邦人) 都不算 + 「全体公民自治」每字真/骗人的是「公民」多窄',
      engagementHook: '「全体公民自己治理自己」每个字都是真的——可「公民」只算成年雅典男性，全城十个人里只有一两个算。这句话没骗人，但你觉得它诚实吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mt-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n公元前 480 年，波斯大军压来了。波斯人烧了雅典。全城上船逃到 Salamis（萨拉米斯）岛上。\n\n你也在船上。你是 metic，不是公民——可这场仗，城邦一样要你上。\n\n三列桨战船靠几百个人一起拼命划。划桨手不够，城邦把能拉的人都拉上了：穷公民、外邦人、甚至临时放出来的被奴役者。你坐进船舱最下面那一排，手里一支长桨，跟身边的人一起，往同一个节奏里使劲。\n\n海峡里，波斯的大船挤成一团，我们的小船灵活地钻进去撞。你不知道下一刻会不会有一支波斯的矛戳进你的船。你只知道，你划的每一桨，都在救这座烧掉的城。\n\n这一刻你心里有个问题，越划越清楚：我为这座城流血、卖命，跟身边的公民一模一样。可仗打完了，他们能走进公民大会投票，我还是得站在门外。\n\n那我现在拼命划的，到底是「我的城」，还是「别人的城」？',
        en: 'Now you are me.\n\nIn 480 BCE the Persian army bore down. The Persians burned Athens. The whole city took to the ships and fled to the island of Salamis.\n\nYou too are on a ship. You are a metic, not a citizen, yet for this war the city needed you all the same.\n\nA trireme is driven by a few hundred men straining together. There were not enough rowers, so the city pulled in everyone it could: poor citizens, foreigners, even the enslaved let out for the occasion. You sit in the lowest bank of the hull, a long oar in your hands, driving with the men beside you into one rhythm.\n\nIn the strait the great Persian ships are jammed in a mass, and our small ships dart in nimbly to ram. You do not know whether the next moment a Persian spear will pierce your ship. You know only that every stroke you pull is saving this burned city.\n\nIn this moment a question grows clearer the more you row: I bleed for this city, I risk my life for it, exactly as the citizen beside me does. Yet when the war is over, he may walk into the Assembly and vote, and I must still stand outside the door.\n\nSo this thing I am straining to save, is it "my city," or "someone else\'s city"?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 480 BCE 波斯烧雅典全城逃 Salamis 岛 + 你 metic 也上船 + trireme 几百人划/划桨手不够拉穷公民外邦人临时放出的被奴役者 + 你坐最下排长桨同节奏 + 海峡波斯挤撞小船钻/不知矛会不会戳进/每桨救烧掉的城 + 越划越清楚的问题: 我流血卖命跟公民一样仗完他能投票我站门外 + 我救的是我的城还是别人的城',
      engagementHook: '我跟身边的公民一起划桨、一起流血救这座城——仗打完他能进去投票，我还是得站门外。那我拼命救的，到底是「我的城」还是「别人的城」？',
      expectsRealAnswer: false,
    },
    {
      id: 'mt-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '仗打赢了。Salamis 大捷，希腊保住了，雅典开始重建。\n\n我活着回来了。我以为，流过这一回血，多少会换来点什么。\n\n什么都没变。\n\n重建的城里，公民照样进公民大会投票，我照样站门外。分回来的土地，照样没有我的份。我还是每个月去交那笔外邦人的居留税。\n\n你要是问当时的雅典人：metic 为城邦流了血，凭什么不给他公民身份？他们会觉得这问题莫名其妙。在他们心里，「公民」是血脉里带来的，是父母给的，不是你后天挣得来的。你再有功劳，你的血再红，你父母不是雅典人，你就不是雅典人。\n\n这是我活了大半辈子才真正想明白的一件事：在雅典，有些门，不是你做得够不够好就能进的。它从你出生那天就锁上了，钥匙在你父母手里——而你父母没有这把钥匙。\n\n我能往里递钱、往里送命，就是进不去。',
        en: 'The war was won. The great victory at Salamis, Greece was saved, Athens began to rebuild.\n\nI came back alive. I thought that, having bled this once, it might buy me something.\n\nNothing changed.\n\nIn the rebuilt city the citizens went into the Assembly to vote as before, and I stood outside the door as before. Of the land handed back, there was still no share for me. I still went each month to pay that residence tax laid on foreigners.\n\nIf you had asked an Athenian of the time: a metic bled for the city, why not give him citizenship? he would have found the question baffling. In his mind, "citizen" was something carried in the blood, given by your parents, not something you could earn afterward. However great your service, however red your blood, if your parents were not Athenian, you were not Athenian.\n\nThis is the thing it took me most of my life to truly understand: in Athens, some doors do not open just because you are good enough. They were locked the day you were born; the key was in your parents\' hands, and your parents did not have this key.\n\nI could pass money in, pass my life in, and still not get in.',
      },
      deliverGoal: 'N5 story — 仗赢 Salamis 大捷希腊保住雅典重建 + metic 活着回来以为流血换点什么 + 什么都没变 (公民照进投票他站门外/分土地没份/照交居留税) + 雅典人觉得问题莫名其妙: 公民是血脉父母给的不是后天挣的/再有功你父母不是雅典人你就不是 + 想明白: 有些门不是做够好就能进/出生那天就锁了钥匙在父母手里父母没钥匙 + 递钱送命就是进不去',
      engagementHook: '我以为流了血总能换来点什么——什么都没变。雅典人觉得「公民」是血脉里带来的，不是后天挣的。有些门，从你出生那天就锁上了——你认这个理吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mt-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我跟你说一件我亲眼看见的事。\n\n战后，雅典的将领 Themistocles（地米斯托克利）成了全希腊的英雄——是他造的海军、设的局，赢了 Salamis。人人都在传颂他的功劳。\n\n那支海军靠什么赢的？靠几百条船、几万个划桨手。我就是其中一个。我流的血，我那一桨一桨的力气，是这场大胜实实在在的一部分。\n\n可你猜，胜利的账，是怎么算的？\n\n功劳算在 Themistocles 头上，荣耀算在「雅典公民」头上。划桨手里的公民，多少分到一点光；划桨手里的我们——外邦人、被奴役者——名字一个都没留下。\n\n这就是我那一刻最清楚的滋味：同一场仗，我流的血算数，我这个人不算数。\n\n我的血掺进了那场胜利，可那场胜利的名单上，没有我。我出的力，被算进了「希腊的光荣」；我这个人，被留在了「希腊」的外面。\n\n（同一座银矿挖出来的银，也有人是用命换的，他连这扇门外都站不到。你换到那一遍会看见。）',
        en: 'Let me tell you something I saw with my own eyes.\n\nAfter the war the Athenian general Themistocles became a hero of all Greece; it was he who built the navy and laid the trap that won Salamis. Everyone sang of his deeds.\n\nWhat did that navy win on? On hundreds of ships and tens of thousands of rowers. I was one of them. My blood, my strength stroke by stroke, was a real part of that great victory.\n\nBut guess how the account of victory was reckoned?\n\nThe credit went to Themistocles; the glory went to "the Athenian citizens." The citizens among the rowers got some share of the light; we among the rowers, the foreigners, the enslaved, left not a single name.\n\nThis is the taste I knew most clearly in that moment: in the same battle, my blood counted, and I myself did not count.\n\nMy blood was mixed into that victory, yet on the roll of that victory there was no me. The strength I gave was counted into "the glory of Greece"; I myself was left outside of "Greece."\n\n(Out of the same mines, there was silver others paid for with their lives, and they could not stand even outside this door. You will see when you switch to that pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 战后 Themistocles 成英雄 (造海军设局赢 Salamis/人人传颂) + 海军靠几百船几万划桨手/metic 是其中一个流血出力是大胜一部分 + 胜利账怎么算: 功劳算 Themistocles/荣耀算雅典公民/公民划桨手分点光/外邦人被奴役者名字一个没留 + 「我流的血算数我这个人不算数」 + 血掺进胜利但名单没我/力算进希腊光荣人被留希腊外面 + 跨 lens 对位 Laurion 被奴役者 (银用命换连门外都站不到)',
      engagementHook: '同一场仗，我流的血算数，我这个人不算数——功劳算在将领头上，荣耀算在「公民」头上，我的名字一个都没留。当一个集体收下你的力气，却不把你算进它的名单，这叫什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'mt-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你可能会问：既然这座城这么待你，你为什么不走？\n\n这就是我这种人最难的地方——我卡在中间。\n\n往里走，走不进去：我永远成不了公民。\n\n往外走，也回不去了：我离开老家几十年，那边早没了我的位置。我的生意、我的家、我的朋友、我半辈子的力气，全在雅典。我的孩子在这儿出生、长大，只会说雅典话。\n\n说真的，我爱这座城。我爱它的市场、它的节日、它吵吵闹闹的公民大会——哪怕我只能站在门外听。这座城了不起，我打心底知道。\n\n可它不爱我，至少不把我当「自己人」。\n\n一只脚在里，一只脚在外。我既不是纯粹的外人，也永远成不了纯粹的自己人。我替这座城担了公民的义务——交税、打仗，却拿不到公民的权利——投票、拥有土地。\n\n我是这座城离不开、又始终不肯认的那种人。',
        en: 'You might ask: if the city treats you so, why do you not leave?\n\nThis is the hardest place for a man like me. I am stuck in the middle.\n\nGo inward, and I cannot get in: I can never become a citizen.\n\nGo outward, and I can no longer return: I left my homeland decades ago, and there is no place left for me there. My business, my home, my friends, half a life of my strength, are all in Athens. My children were born and grew up here, and speak only the Athenian tongue.\n\nHonestly, I love this city. I love its market, its festivals, its loud and quarrelsome Assembly, even though I can only stand outside the door and listen. This city is remarkable; I know it in my bones.\n\nBut it does not love me, or at least does not hold me as "one of its own."\n\nOne foot in, one foot out. I am neither purely an outsider nor ever purely one of their own. I bear the citizen\'s duties for this city, paying taxes, going to war, yet cannot take the citizen\'s rights, voting and owning land.\n\nI am the kind of man this city cannot do without and yet will never acknowledge.',
      },
      deliverGoal: 'N7 story — 既然这样待你为什么不走 + 卡在中间 (往里走不进永远成不了公民/往外回不去老家几十年没位置/生意家朋友半辈子力气全在雅典/孩子这儿出生长大只会雅典话) + 爱这座城 (市场节日吵闹的 Assembly 哪怕站门外/城了不起打心底知道) + 它不爱我不当自己人 + 一只脚里一只脚外/担公民义务 (交税打仗) 拿不到公民权利 (投票拥有土地) + 离不开又不肯认',
      engagementHook: '往里走不进去，往外回不去——我爱这座城，城却不把我当自己人。一只脚在里、一只脚在外的人，最难的是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'mt-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想给你拆穿一个很多人都信的说法：雅典是「民主的摇篮」，是「自由的发明者」。\n\n这话不假。雅典确实第一个让普通公民自己投票决定大事，这在当时的世界，了不起。\n\n可「民主的摇篮」这几个字，藏了一个没说出口的小字：「公民」的民主。\n\n你站在我这个位置看就清楚了。这座骄傲地喊「自由」「人人平等参与」的城，脚底下踩着三种人：被奴役者（连人都不算）、女人（生在城里也没有投票权）、还有我们 metic（自由、纳税、流血，可永远是外人）。\n\n把这三种人加起来，是全城绝大多数。\n\n所以「雅典民主」不是骗局——它是真的民主，但它的「人民」圈得极小。它发明的不只是「让公民参与」，还有一条特别清楚的线：谁算「人民」，谁不算。\n\n后人记住了它发明的「参与」，常常忘了它同时也精心守住了那条「排除」的线。光荣和排除，是同一套制度的两面。',
        en: 'I want to take apart a saying many people believe: that Athens was "the cradle of democracy," "the inventor of freedom."\n\nThis is not false. Athens was indeed the first to let ordinary citizens vote on great matters themselves, and in the world of that time, that was remarkable.\n\nBut "the cradle of democracy" hides a small unspoken word: it was the democracy of "citizens."\n\nFrom where I stand it is clear. This city that proudly cried "freedom" and "all share equally" stood on three kinds of people underfoot: the enslaved (not counted as people at all), women (born in the city yet with no vote), and us metics (free, tax-paying, bleeding, yet forever outsiders).\n\nAdd those three together and they are the vast majority of the city.\n\nSo "Athenian democracy" is not a fraud; it was real democracy, but it drew its "people" extremely small. What it invented was not only "letting citizens take part," but also a very clear line: who counts as "the people," and who does not.\n\nLater ages remembered the "participation" it invented and often forgot that it just as carefully kept that line of "exclusion." The glory and the exclusion are two faces of one and the same system.',
      },
      deliverGoal: 'N8 story (清坑 — 民主摇篮的隐藏小字) — 拆穿「雅典民主摇篮/自由发明者」+ 不假 (确实第一个让普通公民投票决定大事/当时了不起) + 但藏个没说的小字「公民」的民主 + 从 metic 位置看清: 城喊自由人人平等脚底踩三种人 (被奴役者连人不算/女人生城里也无票/metic 自由纳税流血永远外人) + 三种加起来是绝大多数 + 不是骗局是真民主但人民圈极小 + 发明的不只参与还有谁算人民的线 + 后人记参与忘了排除 + 光荣与排除同一制度两面',
      engagementHook: '雅典是「民主的摇篮」——这话不假，但它的「人民」只算城里一两成人，剩下的绝大多数被一条线划在外面。后人记住了它发明的「参与」，为什么忘了它同时守住的「排除」？',
      expectsRealAnswer: false,
    },
    {
      id: 'mt-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这种「一只脚在里、一只脚在外」的人，故事并没有停在古代雅典。\n\n往后两千多年，一座座城、一个个国家，都在反复画那条同一种线：谁算「自己人」，谁只是「住在身边的人」。\n\n你跑过费城制宪那个 Topic 的话，会想起来：公元 1787 年，大西洋对岸一群人写了一部宪法，开头喊「We the People」（我们人民）。可那个「人民」，当时只算有产的白人男性。被奴役者、女人、原住民——跟我们 metic 一样，住在这片土地上，出力、纳税、流血，却被画在「人民」那条线的外面。\n\n两千多年，两座不同的城，同一道难题：一个政治共同体，到底凭什么决定「谁算数、谁不算」？\n\n我没看到这个问题被解决。说实话，到今天它也没被彻底解决。\n\n但我想让你看见的是：那条「谁在里、谁在外」的线，从雅典到费城，从古代到今天，一直都在被人画来画去。它从来不是天经地义的——它是人画的。是人画的，就有可能被人重新画。',
        en: 'The story of a man like me, "one foot in, one foot out," does not stop in ancient Athens.\n\nFor more than two thousand years after, city after city, nation after nation, drew over and over the same kind of line: who counts as "one of our own," and who is only "one who dwells alongside."\n\nIf you have run the topic on the Philadelphia convention, you will recall: in 1787 CE, across the ocean, a group of men wrote a constitution that opened crying "We the People." Yet that "people" counted only propertied white men at the time. The enslaved, women, the native peoples, like us metics, lived on that land, gave their strength, paid taxes, and bled, and yet were drawn outside the line of "the people."\n\nMore than two thousand years, two different cities, the same hard question: on what grounds does a political community decide "who counts and who does not"?\n\nI did not see this question solved. Honestly, to this day it is not fully solved.\n\nBut what I want you to see is this: that line of "who is in and who is out," from Athens to Philadelphia, from the ancient world to today, has been drawn and redrawn by human hands all along. It was never something fixed by heaven; it was drawn by people. And what people draw, people can draw again.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — metic 的故事没停在古代雅典 + 两千多年城/国反复画同一种线 (谁算自己人谁只是住在身边的人) + 跨 Topic 锚 1787 费城 We the People 只算有产白人男性 (被奴役者/女人/原住民跟 metic 一样住出力纳税流血被画在线外) + 同一难题: 政治共同体凭什么决定谁算谁不算 + 没看到解决至今没彻底解决 + 但那条线从雅典到费城一直被画来画去 + 不是天经地义是人画的/人画的能被重新画',
      engagementHook: '从雅典到费城，两千多年，同一道难题：一个共同体凭什么决定「谁算数、谁不算」？那条「谁在里、谁在外」的线，从来不是天经地义的——是人画的。既然是人画的，是不是就能被重新画？',
      expectsRealAnswer: false,
    },
    {
      id: 'mt-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看雅典这座城，两种说法都站得住。\n\n一种说法：它是了不起的城。它第一个让普通人自己投票决定大事，发明了「公民自己治理自己」这件人类以前没真正做过的事。它包容我这样的外邦人来做生意、安家、过完一辈子——比起当时很多别的地方，它已经算开放、算文明。它的繁荣有我一份，它的光荣里也掺着我的血，这一点，我并不后悔。\n\n另一种说法：它是一座精心画了排除线的城。它一边喊「自由」「平等参与」，一边把绝大多数住在城里的人——被奴役者、女人、还有我——挡在「公民」之外。它要我的钱、我的命，就是不给我一票。它发明的不只是「参与」，还有一条特别冷静的线：谁算人，谁不算。\n\n这两边不是「优点加缺点」。是同一座城的两面——同一套制度，既给了一部分人前所未有的自由，也把另一大部分人前所未有地清清楚楚地排除在外。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the city of Athens. Both views stand.\n\nOne view: it was a remarkable city. It was the first to let ordinary people vote on great matters themselves, inventing "citizens governing themselves," a thing humankind had never truly done before. It took in a foreigner like me to trade, make a home, live out a life; compared with many other places of the time, it was already open, already civilized. Its prosperity had a share of me in it, and its glory was mixed with my blood, and of that I have no regret.\n\nThe other view: it was a city that carefully drew a line of exclusion. It cried "freedom" and "equal participation" while shutting the vast majority who lived in it, the enslaved, women, and me, outside of "citizen." It wanted my money and my life and would not give me a single vote. What it invented was not only "participation," but also a very cool, clear-eyed line: who counts as a person, and who does not.\n\nThese are not "strengths and weaknesses." They are two faces of one city, one system that gave a part of its people freedom such as none had known, and excluded another large part with a clarity such as none had known.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (了不起的城/第一个让普通人投票/发明公民自治/包容外邦人来做生意安家/比当时很多地方开放文明/繁荣光荣有我一份血我不后悔) / 另一种说法 (精心画排除线的城/喊自由平等却把绝大多数挡在公民外/要钱要命不给一票/发明的不只参与还有谁算人的冷静线) / 同一座城两面 (给一部分人前所未有自由/把另一大部分前所未有清楚地排除) / 想 30 秒',
      engagementHook: '了不起的城，和精心画了排除线的城——是同一座雅典的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'mt-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个交税、打仗、爱着这座城，却永远站在公民大会门外的人——你会怎么评价这样一座城？\n\n它给了一部分人人类以前没有过的自由，也把另一大部分人，清清楚楚地挡在门外。这两件事不是分开的，它们是同一套规矩的同一条线。把「自由」和「排除」放在同一个天平上，你怎么称？\n\n不过先记住：你这一遍，听的只是一个被挡在门外的外邦人。那个造海军、赢了仗、把这套制度撑起来的将领 Themistocles，会跟你讲完全不同的一套；那个用命挖银、连门外都站不到的人，会让你看到比我更深的排除。换个视角再走一遍，你会听见他们怎么说，也会看看你刚才的判断站不站得住。\n\n再想一步：今天你所在的某个圈子——一个班、一个队、一个群——有没有那种「一只脚在里、一只脚在外」的人？他们出力、参与、付出，可某些「真正算数」的决定，他们没份。\n\n那时候，你会只顾着自己在不在「圈里」，还是会回头看一眼：谁，正站在那扇门的外面？',
        en: 'Having walked my whole life, a man who paid taxes, went to war, loved this city, and yet forever stood outside the door of the Assembly, how would you judge a city like this?\n\nIt gave a part of its people a freedom humankind had not known, and it shut another large part clearly outside the door. These two are not separate; they are one line of one and the same set of rules. Put "freedom" and "exclusion" on the same scale. How do you weigh them?\n\nBut first, remember: this pass, you heard only a foreigner shut outside the door. The general Themistocles, who built the navy, won the war, and held this whole system up, would tell you an entirely different account; and the man who dug the silver with his life and could not stand even outside the door will show you an exclusion deeper than mine. Run it again through another lens and you will hear how they speak, and see whether the judgment you just made still holds.\n\nThen take one more step: in some circle you belong to today, a class, a team, a group, is there someone "one foot in, one foot out"? They put in effort, take part, give, and yet have no share in certain decisions that "really count."\n\nWhen that happens, will you only mind whether you yourself are "inside the circle," or will you look back and see: who is standing outside that door?',
      },
      deliverGoal: 'N11 close — 评价城 (交税打仗爱城却永远站门外 → 给一部分人前所未有自由 vs 清楚挡另一大部分在门外/同一套规矩同一条线/自由与排除同一天平) + cross-lens 指针① 你只听了被挡门外的外邦人 ② Themistocles 会讲不同的/Laurion 被奴役者比我更深的排除/换视角再走看判断站不站得住 + transfer「今天你的圈子有没有一只脚在里一只脚在外的人 (出力参与但真正算数的决定没份)」+ 你会只顾自己在不在圈里还是回头看谁站门外',
      engagementHook: '我交税、打仗、爱这座城，却永远站在门外。你会怎么评价这样一座城？再想一步：今天你的圈子里，有没有那种「出了力却没份做决定」的人？你会回头看一眼谁站在门外吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Laurion silver-mine enslaved worker (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var laurionSlaveLens = {
  id: 'laurion-slave-receiving-end',
  name: 'A Laurion silver-mine slave',
  nameCn: '一个 Laurion 银矿的被奴役矿工',
  role: 'receiving-end',
  perspectiveTag: 'mine-slave',
  icon: '🏺',
  description: {
    cn: '一个虚构的人物，但他代表的是上万真实存在过的人。他是雅典城南 Laurion（劳里昂）银矿里被奴役的矿工，多半是战俘或被买来的外族人，在雅典的账本上是财产，不是人。他每天弯腰钻进一条只能爬行的矿道，在地下又黑又闷的坑里，凿出雅典最值钱的银。公元前 480 年，正是这些银，被铸成了打赢 Salamis 的战船，付了「自由希腊」那场大胜的账。可这场胜利里，没有他的份，他甚至不知道自己挖的银去了哪儿。这一遍，你站在那个用命付了账、却从没被算进「希腊」的人这边，看 480 年的雅典。',
    en: 'A fictional figure, but he stands for the tens of thousands who truly existed. He is an enslaved miner in the Laurion silver mines south of Athens, most likely a prisoner of war or a bought foreigner, who on the Athenian ledger was property, not a person. Each day he bent to crawl into a tunnel a man could only inch through, and in the black, airless pit underground he chipped out the most precious thing Athens had: silver. In 480 BCE it was exactly this silver that was cast into the ships that won Salamis, that paid the bill for the great victory of "free Greece." Yet in that victory he had no share, and did not even know where the silver he dug had gone. This pass puts you beside the man who paid the bill with his life and was never counted into "Greece," looking at the Athens of 480.',
  },
  storyboard: [
    {
      id: 'ls-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '你听说过 Salamis（萨拉米斯）那场大胜吗？听说过雅典人怎么救了自由的希腊？\n\n我没听说过。我那几年，在地底下。\n\n我是雅典城南 Laurion（劳里昂）银矿里的一个矿工。我没有名字留下来——账本上记的不是我的名字，是我的价钱。我是财产，跟一头牲口记在同一栏里。\n\n我每天弯着腰，钻进一条只够一个人爬的矿道，在黑得伸手不见五指的地底，凿石头，找银子。坑里又闷又热，空气稀薄到油灯都快烧不着。\n\n我挖出来的银，是雅典最值钱的东西。可我挖了一辈子，自己手里一块银都没有过。\n\n这一遍，你站在我这里看雅典。你会听到一个跟将领、跟公民完全不一样的故事——一个在地底下，给那场「自由的胜利」付账，却从来没被算进「希腊」的人的故事。',
        en: 'Have you heard of that great victory at Salamis? Heard how the Athenians saved free Greece?\n\nI had not. In those years, I was underground.\n\nI am a miner in the Laurion silver mines south of Athens. No name of mine was left behind; what the ledger recorded was not my name but my price. I was property, written in the same column as a head of livestock.\n\nEach day I bent double and crawled into a tunnel just wide enough for one man, and in a dark where you cannot see your own hand, in the depths of the earth, I chipped at the stone and searched for silver. The pit was airless and hot, the air so thin the oil lamp could barely stay lit.\n\nThe silver I dug was the most precious thing Athens had. Yet I dug my whole life and never once held a piece of silver in my own hand.\n\nThis pass, you stand where I stand and look at Athens. You will hear a story utterly unlike the general\'s or the citizen\'s, the story of a man underground who paid the bill for that "victory of freedom" and was never counted into "Greece."',
      },
      deliverGoal: 'N1 hook (gold-standard) — 没听说 Salamis 那几年在地底下 + Laurion 银矿矿工 + 没名字留下账本记的不是名字是价钱 + 财产跟牲口同栏 + 每天弯腰钻只够一人爬的矿道/黑得伸手不见/凿石找银/闷热油灯快烧不着 + 挖的银是雅典最值钱东西自己一块没有过 + 这一遍跟将领公民完全不一样的故事 (地底下给自由胜利付账却没被算进希腊)',
      engagementHook: '人人都在讲雅典怎么救了自由的希腊——可那几年我在地底下挖银，我的名字没人记，账本上记的是我的价钱。被人当成一笔钱来记账，是什么感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我每天的日子，你才懂后来那件事有多刺人。\n\nLaurion 的矿道，最窄的地方只有一两尺高，我得趴下来，像虫子一样往里钻。坑深的能到地下一百多米。下面没有风，没有光，热得喘不上气。我们点小油灯，可灯一多就把本来就少的空气烧没了。\n\n我们用铁凿一点一点凿含银的矿石，装进筐，传出去。塌方、缺氧、累死，在这儿是常事。一个矿工能在这儿活几年，就算命硬了。\n\n你问我是怎么落到这儿的？多半是这样：在某场仗里被抓了俘虏，或者从小被人当货物买卖，辗转卖到雅典的奴隶市场，再被买去矿上。我原本是哪个地方的人、叫什么、有没有家——没人在乎，包括记账的人。\n\n在雅典人眼里，我不是「希腊人」，也不是「外邦人」，我连「人」都不是。我是一台会挖银的工具。工具用坏了，换一个就是。',
        en: 'First, my daily life, so you understand how the later thing cut.\n\nThe tunnels of Laurion were at their narrowest only a foot or two high; I had to lie down and worm my way in like an insect. The deep pits went more than a hundred meters underground. Down there was no wind, no light, heat that left you gasping. We lit small oil lamps, but too many lamps burned away the little air there was.\n\nWith iron chisels we chipped out the silver-bearing ore bit by bit, loaded it into baskets, passed it up. Cave-ins, suffocation, working a man to death, these were ordinary here. For a miner to live a few years here was to be hard of life.\n\nYou ask how I came to be here? Most likely this way: taken prisoner in some war, or sold as goods from childhood, passed from hand to hand to the slave market of Athens, then bought for the mines. Where I was originally from, what I was called, whether I had a family, no one cared, the bookkeeper least of all.\n\nIn Athenian eyes I was not a "Greek," nor a "foreigner"; I was not even a "person." I was a tool that could dig silver. When the tool wore out, you replaced it.',
      },
      deliverGoal: 'N2 setup — Laurion 矿道最窄一两尺高趴着像虫钻/坑深地下百余米/无风无光热得喘不上/油灯多了烧光空气 + 铁凿凿矿石装筐传出/塌方缺氧累死常事/活几年算命硬 + 怎么落到这儿 (战俘或从小被当货物卖辗转到雅典奴隶市场再买去矿) + 原本哪人叫什么有没有家没人在乎 + 不是希腊人不是外邦人连人都不是/是会挖银的工具/坏了换一个',
      engagementHook: '塌方、缺氧、累死，在矿里是常事，活几年就算命硬。在雅典人眼里我连「人」都不是，是一台会挖银的工具——坏了换一个。把一个人当工具，是从哪一步开始的？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '让我跟你说说那银子是怎么从我手里，变成别人的「希腊光荣」的。\n\n公元前 483 年，矿上突然忙疯了。我们凿到一条特别富的银矿脉，监工拿着鞭子催得比平时还狠。上面要银，要得急，要得多。\n\n我们不知道为什么。我们只知道，凿，装筐，往上传，日夜不停。有人累倒在矿道里，再没起来。\n\n那批我们用命挖出来的银，到了地面，被熔了，铸了——铸成了雅典的战船。整整大约 200 条三列桨战船。\n\n（这两件事是怎么连起来的，是后来才有人讲清楚的，对我，它们只是「挖不完的活」和「死在坑里的工友」。能确证的是：那几年 Laurion 出的银，正是雅典造海军的钱。）\n\n你看，那场「自由希腊」的大胜，最底下垫着的，是我们这些人的命。我们没上船，没杀敌，没听过欢呼。我们只是在地底下，把那场胜利的「本钱」，一筐一筐挖了出来。',
        en: 'Let me tell you how that silver went from my hands to become someone else\'s "glory of Greece."\n\nIn 483 BCE the mine suddenly went mad with work. We had cut into an unusually rich vein of silver, and the overseers drove us with the whip harder than ever. Up top they wanted silver, wanted it fast, wanted it in quantity.\n\nWe did not know why. We knew only this: chip, load the basket, pass it up, day and night without rest. Men dropped in the tunnels and never rose again.\n\nThat silver we dug with our lives reached the surface, was melted, was cast, cast into Athens\' warships. Some 200 triremes in all.\n\n(How these two things were joined was made clear only later; to me they were just "work that never ended" and "the mates who died in the pit." What can be confirmed is this: the silver Laurion gave in those years was the very money Athens built its navy with.)\n\nYou see, that great victory of "free Greece" rested at its foundation on the lives of people like us. We did not board the ships, did not kill the enemy, did not hear the cheering. We only, underground, dug out the "capital" of that victory, basket by basket.',
      },
      deliverGoal: 'N3 setup — 483 BCE 矿上忙疯凿到富脉/监工鞭子催更狠/上面要银急要多 + 不知为什么只知凿装筐传日夜不停/有人累倒矿道再没起来 + 用命挖的银到地面熔铸成战船约 200 trireme + anti-fab 括号短句 (两件事怎么连后来才有人讲清/对我只是挖不完的活和死的工友/确证的是那几年 Laurion 银正是造海军的钱) + 自由希腊大胜最底下垫的是我们的命 + 没上船没杀敌没听欢呼/只在地底把胜利的本钱一筐筐挖出',
      engagementHook: '那批我们用命挖出来的银，到了地面被熔了、铸成了雅典的战船——那场「自由希腊」的大胜，最底下垫着的是我们的命。一场被歌颂的胜利，最底下垫着的人，为什么从来没人提起？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n公元前 480 年的某一天，矿上忽然乱了。监工慌慌张张，有的甚至跑了。坑外面传来消息：波斯人打过来了，雅典烧了，城里的人都逃到海上去了。\n\n这一刻，你蹲在矿道口，手里还攥着那把铁凿，一个念头第一次闪过你脑子：\n\n波斯人要是赢了，对我，会有什么不一样吗？\n\n你想啊。现在，你是雅典人的财产，在雅典人的矿里挖银，挖到死。要是波斯赢了，你大概就是波斯人的财产，在另一个主人的矿里挖银，挖到死。\n\n雅典人喊的「自由」，是他们的自由。雅典人怕的「被波斯奴役」，对你是个笑话——你早就被奴役了，被的正是那些喊「自由」的人。\n\n这场仗，全希腊都在为「自由」拼命。可这里有个问题，只有站在你这个位置才问得出来：\n\n这场关于「自由」的大仗，到底有没有一秒钟，是为了我的自由？',
        en: 'Now you are me.\n\nOne day in 480 BCE the mine suddenly fell into chaos. The overseers were frightened, some even ran off. Word came from outside the pit: the Persians have invaded, Athens is burned, the people of the city have all fled to the sea.\n\nIn this moment you crouch at the mouth of the tunnel, the iron chisel still gripped in your hand, and a thought crosses your mind for the first time:\n\nIf the Persians win, will anything be different for me?\n\nThink it through. Now you are the Athenians\' property, digging silver in the Athenians\' mine until you die. If Persia wins, you would most likely be the Persians\' property, digging silver in another master\'s mine until you die.\n\nThe "freedom" the Athenians cry is their freedom. The "enslavement by Persia" the Athenians fear is a joke to you, you were enslaved long ago, by the very people who cry "freedom."\n\nIn this war, all of Greece strains for "freedom." But here is a question only a person standing where you stand can ask:\n\nIn this great war about "freedom," was there ever, for one second, anything that was for my freedom?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 480 BCE 某天矿上乱监工慌甚至跑/消息: 波斯打来雅典烧了人逃海上 + 你蹲矿道口攥铁凿第一次闪念: 波斯赢对我有不一样吗 + 想: 现在是雅典人财产挖到死/波斯赢就是波斯人财产挖到死 + 雅典喊的自由是他们的自由/怕的被波斯奴役对你是笑话 (早被奴役被的正是喊自由的人) + 全希腊为自由拼命 + 只有你这位置才问得出: 这场关于自由的仗有没有一秒是为我的自由',
      engagementHook: '雅典赢，我是雅典人的财产挖到死；波斯赢，我是波斯人的财产挖到死。这场全希腊为「自由」拼命的大仗，有没有一秒钟，是为了我的自由？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '答案，你心里其实早就知道了：没有。一秒都没有。\n\n雅典人后来确实赢了。Salamis 大捷，波斯舰队被打垮。城里的人陆陆续续回来，重建家园，到处在庆祝「希腊得救了」「自由保住了」。\n\n而我呢？仗打完，监工回来了，鞭子回来了。我接着下矿，接着凿，接着挖那挖不完的银。\n\n对城里的公民，Salamis 是一场改变命运的大胜。对我，Salamis 之后的第一天，和之前的每一天，一模一样。\n\n胜利没有给我少挖一筐银，没有给我多一口空气，没有让那条矿道变高一寸。\n\n你现在该明白那句话有多刺人了：「我们救了自由的希腊。」\n\n这句话里的「我们」，没有我。这句话里的「自由」，不包括我。可这句话能喊出来，靠的是我用命挖的那点银。\n\n我付了账，却被排除在我付钱买来的那个东西之外。',
        en: 'The answer, in your heart, you already knew: none. Not one second.\n\nThe Athenians did win in the end. The great victory at Salamis, the Persian fleet broken. The people of the city came drifting back, rebuilt their homes, and everywhere celebrated that "Greece is saved," that "freedom is held."\n\nAnd me? When the war ended the overseers came back, the whip came back. I went down the mine again, chipped again, dug again at the silver that never ran out.\n\nFor the citizens of the city, Salamis was a victory that changed their fate. For me, the first day after Salamis was exactly the same as every day before it.\n\nThe victory did not let me dig one basket less, did not give me one more mouthful of air, did not raise that tunnel by a single inch.\n\nNow you understand how that sentence cuts: "We saved free Greece."\n\nThe "we" in that sentence has no me. The "freedom" in that sentence does not include me. Yet that sentence could be cried at all only because of that silver I dug with my life.\n\nI paid the bill, and was shut out of the very thing I paid to buy.',
      },
      deliverGoal: 'N5 story — 答案早知道: 没有一秒 + 雅典确实赢 Salamis 大捷波斯舰队垮/人回来重建到处庆祝希腊得救自由保住 + 我呢: 监工鞭子回来接着下矿凿挖挖不完的银 + 对公民 Salamis 改变命运/对我之后第一天和之前每天一模一样 + 胜利没让我少挖一筐没多一口气没让矿道高一寸 + 「我们救了自由的希腊」多刺人 (我们没我/自由不包括我/可这话能喊靠我用命挖的银) + 我付了账却被排除在我付钱买的东西之外',
      engagementHook: '「我们救了自由的希腊」——这句话里的「我们」没有我，「自由」不包括我，可这话能喊出来，靠的是我用命挖的银。我付了账，却被挡在我付钱买的东西外面。这公平在哪？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你看清一样东西——同一点银子，在两双手里，是两个完全相反的意思。\n\n在那位将领 Themistocles（地米斯托克利）手里，这点银是「救希腊的本钱」。他把它说进公民大会，铸成战船，赢了 Salamis。后人写史书，把这点银叫做雅典的远见、雅典的福气。这点银，是光荣。\n\n在我手里，这同一点银，是我弯着腰、在地下一百米、用一辈子凿出来的命。是死在矿道里、连名字都没留下的工友。是我每天醒来知道自己今天还得下坑的那份绝望。这点银，是我们的坟。\n\n同一点银子。一个人捧着它说「这救了我们」；另一个人——我——看着它，知道「这是用我的命换的，救的从来不是我」。\n\n他们歌颂这点银的时候，从不会想起地下那张挖银的脸。在那个故事里，银是从矿里「产」出来的，好像它自己会从石头里长出来——挖银的人，被整个抹掉了。\n\n（连我这样、好歹还能给你讲两句的人都没几个。绝大多数挖银的人，连一句话都没留下。）',
        en: 'I want you to see one thing clearly: the same silver, in two pairs of hands, means two utterly opposite things.\n\nIn the hands of that general Themistocles, this silver is "the capital that saved Greece." He talked it through the Assembly, cast it into warships, won Salamis. Later ages writing their histories called this silver Athens\' foresight, Athens\' good fortune. This silver is glory.\n\nIn my hands, this same silver is the life I chipped out bent double, a hundred meters underground, across a whole lifetime. It is the mates who died in the tunnels and left not even a name. It is the despair of waking each day knowing I must go down the pit again. This silver is our grave.\n\nThe same silver. One man holds it up and says "this saved us"; another, me, looks at it and knows "this was bought with my life, and what it saved was never me."\n\nWhen they sing the praises of this silver, they never think of the face underground that dug it. In that story the silver is "produced" from the mine, as if it grew from the stone on its own, the people who dug it wiped out entirely.\n\n(There are not even many like me, who can at least say a few words to you. The vast majority who dug the silver left not a single line.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 同一点银子在两双手里两个相反意思 + 在 Themistocles 手里是救希腊的本钱 (说进 Assembly 铸战船赢 Salamis/后人叫雅典远见福气/是光荣) + 在我手里同一点银是弯腰地下百米一辈子凿出的命/死在矿道没名的工友/每天下坑的绝望/是我们的坟 + 一人捧着说这救了我们/我看着知道用我命换救的从来不是我 + 歌颂时从不想起地下挖银的脸/故事里银是产出来的好像自己长出来挖银人被抹掉 + anti-fab 括号 (像我能讲两句的没几个绝大多数连一句没留下)',
      engagementHook: '同一点银子，在将领手里是「救希腊的光荣」，在我手里是「用命换的坟」。他们歌颂这点银的时候，从不会想起地下那张挖银的脸。一样东西的两个相反意思，谁说了算？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你可能会想：那雅典毕竟是「民主」啊，是讲自由平等的地方，怎么会容得下这么黑的矿？\n\n我要告诉你的，恰恰是反过来的：雅典那套「民主」，正是踩在我们这种人身上才转得起来的。\n\n你想，一个雅典公民，凭什么有那么多空闲，能天天去公民大会开会、投票、辩论国家大事？因为有人替他干活——他的田有奴隶种，他的作坊有奴隶做工，他的银，是我们这种人在矿里挖。\n\n公民的「自由」，建在别人的「不自由」上。他越自由，越说明底下有人在替他扛。\n\n所以雅典越是「民主」，越需要我们这样的人。我们不是这套制度的意外，不是它的污点——我们是它的地基。抽掉我们，那些公民根本闲不出工夫去搞什么「民主」。\n\n这是站在地底下才看得见的真相：他们头顶上那座闪闪发光的「自由之城」，是踩在我们这些没名字的人的背上，才立得起来的。',
        en: 'You might think: but Athens was a "democracy," a place of freedom and equality, so how could it hold a pit as dark as this?\n\nWhat I must tell you is exactly the reverse: that Athenian "democracy" turned only because it stood on people like us.\n\nThink: how did an Athenian citizen come by so much free time, to go each day to the Assembly to meet, vote, debate the affairs of state? Because someone else did his work. His fields were tilled by slaves, his workshop run by slaves, his silver dug by people like us in the mines.\n\nThe citizen\'s "freedom" was built on another\'s "unfreedom." The freer he was, the more it showed that someone below was bearing the load for him.\n\nSo the more "democratic" Athens was, the more it needed people like us. We were not an accident of this system, not its stain; we were its foundation. Pull us out, and those citizens would have no leisure at all to make any "democracy."\n\nThis is the truth you can see only from underground: that gleaming "city of freedom" over their heads stood up only because it stood on the backs of nameless people like us.',
      },
      deliverGoal: 'N7 story (清坑 — 民主踩在奴隶身上) — 雅典毕竟民主讲自由平等怎容黑矿 + 反过来: 民主正是踩我们身上才转得起来 + 公民凭什么有空天天去 Assembly 开会投票辩论 (有人替他干活/田奴隶种作坊奴隶做工/银我们挖) + 公民自由建在别人不自由上/越自由越说明底下有人扛 + 越民主越需要我们/不是意外不是污点是地基/抽掉公民闲不出工夫搞民主 + 地底才看见的真相: 闪光的自由之城踩在没名字的人背上才立起',
      engagementHook: '公民凭什么有空天天去开会、投票、辩论国家大事？因为有人替他干活——他的银是我们在矿里挖的。「自由」越多，是不是就说明底下有人在替他扛得越多？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我还要拆穿一个特别动人的故事，免得你被它骗了——「斯巴达 300 勇士」。\n\n你大概听过：300 个斯巴达战士守 Thermopylae（温泉关），为「自由的希腊」战死，是英雄里的英雄。\n\n这个故事是真的。但它漏了一半。\n\n斯巴达靠什么养着这 300 个全职战士？靠一群叫 helot（希洛人）的被奴役者。斯巴达征服了邻邦，把整族人变成国家的奴隶，让他们种地、干活，养活斯巴达战士。helot 的数量，比斯巴达人多好几倍。斯巴达人甚至每年「合法地」杀一些 helot，防他们造反。\n\n所以你看：守 Thermopylae 为「自由」而死的斯巴达英雄，自己脚底下踩着比他们多几倍的奴隶。\n\n这不是斯巴达一家的事。整个「自由的希腊」——雅典也好、斯巴达也好——它们的「自由」，底下垫的全是我们这种人。\n\n下次有人跟你讲「为自由而战的古希腊英雄」，你可以替我问一句：那他们脚底下，踩着多少个连「人」都不算的人？',
        en: 'I must also take apart a story that moves people deeply, so it does not deceive you: the "300 Spartans."\n\nYou have likely heard it: 300 Spartan warriors held Thermopylae and died for "free Greece," heroes among heroes.\n\nThe story is true. But it leaves out half.\n\nOn what did Sparta keep these 300 full-time warriors? On a mass of enslaved people called helots. Sparta had conquered its neighbors and turned whole peoples into slaves of the state, set them to till the land and labor, to feed the Spartan warriors. The helots outnumbered the Spartans several times over. The Spartans even "lawfully" killed some helots each year, to keep them from rising up.\n\nSo you see: the Spartan heroes who died at Thermopylae for "freedom" stood on slaves several times their own number.\n\nThis is not Sparta\'s matter alone. The whole of "free Greece," Athens and Sparta alike, their "freedom" rested on people like us underneath.\n\nNext time someone tells you of "the heroes of ancient Greece who fought for freedom," you may ask, for me, one thing: then how many people not even counted as "people" did they stand on?',
      },
      deliverGoal: 'N8 story (清坑 — 300 勇士的另一半/斯巴达 helot) — 拆穿「斯巴达 300 勇士」动人故事 + 真的但漏一半 + 斯巴达靠什么养 300 全职战士 (helot 希洛人被奴役者/征服邻邦整族变国家奴隶种地干活养战士/helot 比斯巴达人多几倍/每年合法杀一些防造反) + 守 Thermopylae 为自由死的英雄脚底踩比他们多几倍奴隶 + 不是斯巴达一家/整个自由希腊 (雅典斯巴达) 自由底下垫的全是我们这种人 + 下次有人讲为自由而战的希腊英雄替我问: 脚底踩多少连人都不算的人',
      engagementHook: '为「自由」战死的斯巴达 300 勇士，自己脚底下踩着比他们多好几倍的奴隶。下次有人跟你讲「为自由而战的古希腊英雄」，你敢替我问一句：他们脚底下踩着多少个连「人」都不算的人吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我大概会死在这条矿道里，没有名字，没有坟，没有人记得。这是我们这种人最常见的结局。\n\n可这件事并没有跟着雅典一起结束：「自由」踩在不自由的人身上，往后两千多年，一遍遍重演。\n\n你跑过费城制宪那个 Topic 的话，会想起来：公元 1787 年，大西洋对岸一群人写了一部宪法，开头喊「人人生而平等」，喊「自由」。可那部宪法同时把跟我一样、被当成财产的人，算成 3/5 个人。种棉花的奴隶，养活了那个喊「自由」的国家——跟我用银养活喊「自由」的雅典，一模一样。\n\n喊「自由」的人，骑在没有自由的人身上。这不是雅典一座城的毛病，是「自由」这件事两千多年都没洗干净的一笔旧账。\n\n我没等到这笔账被还。我死在了矿里。\n\n但我想让你记住的是：每一次，当有人骄傲地喊「我们自由了」「我们赢了」，你都可以替我，往那句话的底下看一眼，那里有没有一个没被算进去、正替这份「自由」扛着的人？',
        en: 'I will most likely die in this tunnel, with no name, no grave, no one to remember. This is the commonest end for people like us.\n\nBut this thing, "freedom" standing on the unfree, did not end together with Athens.\n\nFor more than two thousand years after, this contradiction played out again and again. If you have run the topic on the Philadelphia convention, you will recall: in 1787 CE, across the ocean, a group of men wrote a constitution that opened crying "all are created equal," crying "freedom." Yet that same constitution counted people like me, held as property, as three-fifths of a person. The slaves who grew the cotton fed the nation that cried "freedom," exactly as I, with silver, fed the Athens that cried "freedom."\n\nThe people who cry "freedom," riding on the people who have none, this is not the fault of one city, Athens. It is an old debt that the thing called "freedom" has not washed clean in two thousand years.\n\nI did not live to see that debt paid. I died in the mine.\n\nBut what I want you to remember is this: every time someone proudly cries "we are free," "we won," you may, for me, look once beneath that sentence, and ask: is there, down there, someone never counted in, bearing this "freedom" on his back?',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 我大概死矿道里没名没坟没人记 (我们这种人最常见结局) + 但「自由踩在不自由人身上」没跟雅典结束 + 跨 Topic 锚 1787 费城宪法喊人人生而平等喊自由却把被当财产的人算 3/5 + 种棉花奴隶养活喊自由的国家跟我用银养活喊自由的雅典一模一样 + 喊自由的人骑在没自由的人身上不是雅典一城毛病是两千年没洗干净的旧账 + 我没等到账被还死在矿里 + 想让你记住: 每次有人喊我们自由了我们赢了替我往底下看一眼有没有没被算进去正扛着这份自由的人',
      engagementHook: '种棉花的奴隶养活了那个喊「自由」的国家——跟我用银养活喊「自由」的雅典一模一样。每次有人骄傲地喊「我们自由了」「我们赢了」，你能不能替我往那句话底下看一眼：那里有没有一个正替这份自由扛着的人？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看公元前 480 年那场「自由希腊」的大胜，两种说法都站得住。\n\n一种说法：那确实是一场伟大的胜利。一群分散的小城邦，挡住了当时世界最大的帝国，保住了一种人类以前没真正试过的东西——普通公民自己治理自己。这种东西后来长成了影响整个世界的「民主」。说它伟大，不算错。哪怕，它的本钱里有我的命。\n\n另一种说法：那是一场我付了账、却被踢出门外的胜利。它救的「自由希腊」从一开始就没算上我，也没算上女人、外邦人、所有被奴役的人。它最响亮的口号是「自由」，可它的地基，是成千上万个像我一样、连名字都没留下的不自由的人。它的光荣有多大，它脚底下没人提起的坟，就有多深。\n\n这两边不是「伟大减去一点遗憾」。是同一场胜利的两面——同一点银子，既铸成了自由的战船，也是我们没人记得的墓碑。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at that great victory of "free Greece" in 480 BCE. Both views stand.\n\nOne view: it truly was a great victory. A scatter of small city-states held off the largest empire in the world of that time and preserved something humankind had never truly tried before, ordinary citizens governing themselves. That something grew later into the "democracy" that shaped the whole world. To call it great is not wrong. Even though its capital held my life in it.\n\nThe other view: it was a victory I paid for and was kicked out the door of. The "free Greece" it saved never counted me in from the start, nor women, nor foreigners, nor all the enslaved. Its loudest slogan was "freedom," yet its foundation was tens of thousands of unfree people like me who left not even a name. However great its glory, just so deep are the graves underfoot that no one mentions.\n\nThese are not "greatness minus a little regret." They are two faces of one victory, the same silver, cast at once into the ships of freedom and into the gravestones no one remembers for us.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (确实伟大的胜利/分散小城邦挡住最大帝国/保住普通公民自己治理自己/长成影响世界的民主/说伟大不算错哪怕本钱有我的命) / 另一种说法 (我付了账却被踢出门外的胜利/救的自由希腊没算我也没算女人外邦人被奴役者/口号自由地基是成千上万没名字的不自由的人/光荣多大脚底没人提的坟多深) / 同一场胜利两面 (同一点银既铸自由战船也是没人记得的墓碑) / 想 30 秒',
      engagementHook: '一种说法：那是一场伟大的胜利。另一种说法：那是一场我付了账却被踢出门外的胜利。同一点银子，既铸成了自由的战船，也是我们没人记得的墓碑。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'ls-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个没有名字、只有价钱的人，一条爬进去的矿道，一辈子挖不完的银，一场我付了账却没我份的胜利——你会怎么评价这样一场「自由的胜利」？\n\n一边是挡住大帝国、保住「公民自治」的伟大，一边是用我们这种没名字的人的命垫起来的地基。这两件事不是分开的，是同一点银子的两面。把「光荣」和「代价」放在同一个天平上，你怎么称？\n\n不过先记住：你这一遍，听的只是地底下一个被踩着的人。那个造海军、赢了仗的将领 Themistocles，会跟你讲一套完全不同的「我救了希腊」；那个流着血上船、却仍被挡在公民大会门外的外邦人 metic，会让你看到另一种被排除。换个视角再走一遍，你会听见他们怎么说，也会看看你刚才的判断站不站得住。\n\n再想一步：今天你身边，有没有那种被人歌颂的「成功」「胜利」「荣誉」，底下其实垫着一些没人提起、没被算进去的人——一份光鲜的成绩，背后是某些被忽略的付出？\n\n那时候，你会只跟着大家一起欢呼，还是会替那个没在场的人，往底下看一眼：这份光荣，到底是谁的命、谁的力气垫起来的？',
        en: 'Having walked my whole life, a man with no name, only a price, a tunnel I crawled into, silver I could never finish digging in a lifetime, a victory I paid for and had no share in, how would you judge a "victory of freedom" like this?\n\nOn one side, the greatness of holding off a great empire and preserving "citizens governing themselves"; on the other, a foundation propped up with the lives of nameless people like us. These two are not separate; they are two faces of the same silver. Put "glory" and "price" on the same scale. How do you weigh them?\n\nBut first, remember: this pass, you heard only a trodden-on man underground. The general Themistocles, who built the navy and won the war, will tell you an entirely different account of "I saved Greece"; and the metic, the foreigner who bled aboard the ships yet was still shut outside the Assembly door, will show you another kind of exclusion. Run it again through another lens and you will hear how they speak, and see whether the judgment you just made still holds.\n\nThen take one more step: in your own life today, is there a "success," a "victory," an "honor" that people praise, propped up underneath by people no one mentions and no one counted in, a gleaming result with someone\'s overlooked effort behind it?\n\nWhen that happens, will you only cheer along with the crowd, or will you, for the one who is not present, look once beneath: whose life, whose strength, was this glory propped up with?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价自由的胜利 (没名只有价钱/爬进去的矿道/挖不完的银/付了账没我份 → 挡住大帝国保住公民自治的伟大 vs 用没名字的人的命垫起的地基/同一点银子的两面/光荣与代价同一天平) + cross-lens 指针① 你只听了地底被踩的人 ② Themistocles 讲不同的我救了希腊/metic 另一种被排除/换视角再走看判断站不站得住 + transfer「今天你身边被歌颂的成功胜利荣誉底下垫着没人提起没被算进去的人 (光鲜成绩背后某些被忽略付出)」+ 你会只跟着欢呼还是替没在场的人往底下看一眼这光荣谁的命谁的力气垫起的',
      engagementHook: '走完我这一生，你会怎么评价这样一场「自由的胜利」？再想一步：今天你身边那个被大家歌颂的「成功」，底下有没有垫着一些没人提起的人？你会只跟着欢呼，还是替那个没在场的人往底下看一眼？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'themistocles':                themistoclesLens,
  'metic-resident':              meticResidentLens,
  'laurion-slave-receiving-end': laurionSlaveLens,
};

// per AUTHORING_PIPELINE 第 8 条 default-lens-stands-alone + 受影响者优先 pattern:
// 被「民主」排除并用命付账一方 + N1 gold-standard hook + N6「这点银子」跨 lens 对位 + N10/N11 伟大胜利 vs 我付账没我份 closing
export var defaultLens = 'laurion-slave-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'ancient-greece-480bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'themistocles': 30, 'metic-resident': 28, 'laurion-slave-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-24',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「这点银子 / this silver」一句话两个方向 (Themistocles 救希腊的本钱/光荣 vs Laurion 被奴役者用命挖的坟); metic N6:「我流的血算数我这个人不算数」',
    'defaultLens: laurion-slave-receiving-end — 受影响者优先 (被民主排除并用命付账一方 + gold-standard N1 hook + N10/N11 伟大胜利 vs 我付账没我份)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: 银→海军→Salamis 的因果链 + helot 每年合法杀 等戏剧化细节用括号短句标注 (确证 vs 叙事补充); metic + Laurion 矿工是 representative composite 虚构人物代表真实群体, lens description 已声明',
    '史实地基: Xerxes 480 BCE 入侵 / Thermopylae 8月 Leonidas ~300 斯巴达陆地阻击全死(是输的) / Salamis 9月 雅典海军大胜(Themistocles 假情报引诱) / Plataea 479 结束陆战 / Cleisthenes 508 BCE 立民主早一代人 / Laurion 483 BCE 富脉造 ~200 trireme / Themistocles ~471 ostracized 死于波斯 — Sparta=陆地/Athens=海军 不混淆',
    'cross-Topic 锚: 公民排除 + 「自由踩在不自由人身上」→ constitutional-convention-1787 (We the People/3/5/种棉花奴隶)',
    'cultural-ban 自检: 全程 polis 城邦 / Assembly 公民大会 / trireme 三列桨战船 / tyrant 僭主 / ostracism 陶片放逐 / metic / helot — 无 朝廷/丞相/太子/圣旨/玉玺/江山 等中国词',
    '清坑: 不浪漫化 300 (Thermopylae 是输的) + Sparta(陆)≠Athens(海) + 斯巴达 helot 蓄奴 + 民主只算成年男性公民(全城 1/10-1/5) + 「all Greeks voted」破解',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
