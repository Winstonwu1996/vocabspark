// ─── Ancient Egypt / The Great Pyramid of Giza c.2550 BCE Lens-based Storyboard (Story-First v2) ───
//
// Topic: 吉萨大金字塔 · The Great Pyramid of Giza (Old Kingdom Egypt, c. 2550 BCE)
// CA HSS Grade 6 古埃及 · AP World History Unit 1 (古代国家与神权王权)
//
// 3 lens 设计 (per AUTHORING_PIPELINE 第 8/12 条):
//   - khufu                        (perpetrator-actor) — 法老 Khufu/胡夫 (约公元前 2589-2566 在位) 下令建大金字塔 + 活着的神王 + 只留 7.5cm 小像
//   - hemiunu                      (lonely-mediator)   — 维西尔 Hemiunu/赫米乌努 (Khufu 侄子) 「王室一切工程总监」+ 夹在神王意志与几万人代价之间 + G4000 胖子坐像
//   - pyramid-laborer-receiving-end (receiving-end)    — 被征召的季节性劳工 (合成代表) · 本地农民泛滥季轮班 · 吃肉受伤被治死后被葬 (考古真相, 非好莱坞鞭子奴隶)
//
// 跨 lens micro-detail (N6 anchor):
//   「同一座山」三个角度 — 同一座 146 米的塔, 三双眼睛看见三样东西:
//   - Khufu N6: 这座山是「升天机器」, 他死后变神的台阶 — 但代价是几万人的身体, 而他几乎不需要看见那些人
//   - Hemiunu N6: 这座山是一道「组织难题」— 把神的一句话变成几万人的吃饭/运石/治伤/安葬, 他亲眼看见代价
//   - Laborer N6: 这座山是他自己的脊背 — 他抬头看不到塔顶, 他的名字也不会刻上去 (但工班诨名刻上去了)
//
// 跨 Topic 锚:
//   - 神权王权 (法老是神/维持 Ma'at) → 后世一切「统治者代表/连接神」的合法性
//   - 大规模国家动员普通人 → 「为宏大目标可以正当征用多少普通人」这个延续到现代的问题
//   - constitutional-convention-1787「谁被算进政治共同体 / 谁被排除」对位 — 谁的代价被看见, 谁的被当成「应该的」
//
// defaultLens = 'pyramid-laborer-receiving-end' (受影响者优先 pattern: 无权方 + 被历史几乎抹去名字一方 + 跨视角「同一座山」对位)
//
// STRUCTURE SPEC (与 constitutional-convention-1787 同):
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens 可到 ~550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false (2 per lens, 6 total)
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点 wording authored here)
//
// per AUTHORING_PIPELINE.md 铁律 (cultural ban: 用 法老/维西尔/书吏, 禁 丞相/太子/圣旨/龙袍/玉玺 / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// anti-fab: 不伪造象形文字引文或假日记; Diary of Merer (真实出土莎草纸) 标注真实史料 + 简化转述; 劳工是「合成代表」在视角卡片一次性声明
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Khufu / 胡夫 (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var khufuLens = {
  id: 'khufu',
  name: 'Khufu',
  nameCn: '胡夫（Khufu）',
  role: 'perpetrator-actor',
  perspectiveTag: 'pyramid-builder-king',
  icon: '👑',
  description: {
    cn: '他是一个把自己当成活着的神的法老，正下令在尼罗河西岸垒起一座 146 米高、约 230 万块石头的白色人造山。这一遍让你从他的座位看出去，他一句话就能调动整个国家几十年，可他要不要低头看一眼脚下那几万个会饿、会被砸死、不会被刻进山上的人。',
    en: 'He is a pharaoh who takes himself for a living god, ordering a white mountain of some 2.3 million stones rising 146 meters above the Nile\'s west bank. This pass lets you sit in his seat: one word from him moves a whole country for decades, and you watch whether he will glance down at the tens of thousands beneath, who hunger, who are crushed by stone, whose names will never be carved into his mountain.',
  },
  storyboard: [
    {
      id: 'khufu-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '约公元前 2550 年，尼罗河西岸的吉萨。\n\n站在我这里，往上看。一座白色的山正在长高——不是天然的山，是一块一块石头垒出来的。约 230 万块，每块两三吨重，最后会堆到 146 米高。\n\n它不是给活人住的。它是给我死后住的。\n\n我是 Khufu（胡夫），埃及的法老。但你别把我想成一个「国王」。在我和我的子民眼里，我是活着的神。我活着，整个世界的秩序就维持着；我死了，要变成永生的神，从天上继续护佑埃及。\n\n所以这座山不是「炫耀的坟墓」。它是一台机器——一台把我送上天、变成不灭之神的机器。\n\n这一遍，你坐进我这个位置。你下一道命令，几万个人就会去搬石头、流汗、受伤、甚至死。你不需要看见他们。这一遍，要逼你去想：你看不看得见他们？',
        en: 'Around 2550 BCE, the west bank of the Nile, at Giza.\n\nStand where I stand and look up. A white mountain is rising, not a natural mountain but one stacked stone by stone. Some 2.3 million blocks, two or three tonnes each, climbing in the end to 146 meters.\n\nIt is not for the living. It is where I will live after I die.\n\nI am Khufu, pharaoh of Egypt. But do not picture me as a "king." In my own eyes, and my people\'s, I am a living god. While I live, the order of the world holds; when I die, I become an eternal god, watching over Egypt from the sky.\n\nSo this mountain is no "tomb for show." It is a machine, a machine to lift me into the sky and make me a god who never dies.\n\nThis pass puts you in my seat. You give one order, and tens of thousands go to haul stone, to sweat, to be injured, even to die. You do not have to see them. This pass will press you to ask: can you see them?',
      },
      deliverGoal: 'N1 hook — 约公元前 2550 吉萨白山在长高 (230 万块/146 米) + Khufu 自我介绍 (法老=活着的神 不是凡人国王) + 金字塔 = 升天机器不是炫耀坟墓 + 这一遍视角设定 (你下命令几万人搬石头你看不看得见他们)',
      engagementHook: '我下一道命令，几万个人就去搬石头、流汗、受伤、甚至死——我不需要看见他们。坐在这个位置，你看不看得见他们？',
      expectsRealAnswer: false,
    },
    {
      id: 'khufu-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我为什么有这个权力，你才懂这座山是怎么可能的。\n\n整个埃及，就挤在尼罗河两岸窄窄的一条绿地里，外面是死亡的沙漠。这条河是埃及的命。每年夏末，它定期泛滥——河水漫过两岸，把田全淹了，但也留下肥沃的黑泥。我们管自己的国家叫 Kemet（凯梅特），意思是「黑土地」。\n\n这泛滥的几个月，叫 Akhet（泛滥季）。田被淹，农民种不了地。\n\n你看出门道了吗？几十万农民，有几个月没活干。\n\n我作为法老，把这段「农闲」变成了「国家工程季」。河把他们从田里赶出来，我就把他们征召到我的工地上。\n\n所以这座山的根，不在我，在这条河。是尼罗河每年的泛滥，给了我一支几万人的劳动大军。我只是那个决定让他们去搬石头的人。',
        en: 'First, why I hold this power, so you see how the mountain is even possible.\n\nAll of Egypt is squeezed onto a narrow ribbon of green along the Nile, with the deadly desert beyond. This river is Egypt\'s life. Every late summer it floods on schedule, the water spilling over the banks, drowning the fields but leaving rich black mud behind. We call our country Kemet, which means "the black land."\n\nThose flood months are called Akhet. The fields are underwater; the farmers cannot work the land.\n\nDo you see the opening? Hundreds of thousands of farmers, idle for months.\n\nAs pharaoh, I turned that idle season into a season of state works. The river drives them out of the fields, and I summon them to my building site.\n\nSo the root of this mountain is not me. It is this river. The Nile\'s yearly flood handed me a labor army of tens of thousands. I am only the one who decided to send them to haul stone.',
      },
      deliverGoal: 'N2 setup — 尼罗河是埃及的命 (绿地夹在沙漠间/Kemet 黑土地) + Akhet 泛滥季田淹农民种不了地 + Khufu 把农闲变国家工程季 (河把农民赶出田/法老征召到工地) + 「这座山的根在这条河」',
      engagementHook: '不是我抓奴隶——是这条河每年淹了田，把几万农民赶出来，我才把他们征召去搬石头。这算「顺势而为」，还是换了个说法的强迫？',
      expectsRealAnswer: false,
    },
    {
      id: 'khufu-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '为什么我非要建这么大一座山？花这么大代价，图什么？\n\n图的是「永远不死」。\n\n在我们埃及人的信念里，世界有一种秩序，叫 Maat（玛特）——它是真理、正义、宇宙不塌掉的那个平衡。维持 Maat 的人，就是法老。我活着，Maat 就在；我治理得好，尼罗河就按时泛滥、庄稼就长、埃及就安稳。\n\n那我死了怎么办？世界会不会跟着乱？\n\n不会——只要我死后能变成神，继续从天上维持秩序。而这座金字塔，就是帮我「变成神」的工具。它的尖顶指向天空，像一道给我灵魂走的阶梯，让我上升、变成不灭的星辰和神。\n\n所以在我心里，建这座山不是「我个人想要个大坟」。是为了整个埃及的世界不塌掉。我把它叫作「Akhet-Khufu」——意思接近「胡夫的地平线」，我从这里升上天。\n\n你信不信这套，不重要。重要的是：我和我那个时代的几万人，是真信的。',
        en: 'Why must I build a mountain this large? At such cost, for what?\n\nFor never dying.\n\nIn our Egyptian belief, the world has an order called Ma\'at: truth, justice, the balance that keeps the cosmos from collapsing. The one who holds Ma\'at in place is the pharaoh. While I live, Ma\'at holds; if I rule well, the Nile floods on time, the crops rise, Egypt is steady.\n\nSo what happens when I die? Does the world fall into chaos with me?\n\nNo, so long as I can become a god after death and keep holding the order from the sky. And this pyramid is the tool that helps me "become a god." Its point aims at the sky, like a stairway for my soul, to rise and become an undying star and god.\n\nSo in my heart, building this mountain is not "I personally want a big tomb." It is so the whole world of Egypt does not collapse. I call it "Akhet-Khufu," close to "the horizon of Khufu," the place I rise into the sky.\n\nWhether you believe this does not matter. What matters: I, and the tens of thousands of my age, truly did.',
      },
      deliverGoal: 'N3 setup — Ma\'at 宇宙秩序 (法老维持它/他活着秩序在) + 死后变神继续维持秩序 → 金字塔=升天工具 (尖顶指天/灵魂阶梯) + 「Akhet-Khufu 胡夫的地平线」+ 不是个人想要大坟是为世界不塌 + 「我那个时代几万人是真信的」',
      engagementHook: '我建这座山，不是想要个大坟，是真信「我死后变神才能让世界不塌」。当一个人真心相信自己在「拯救世界」，他做的事还能用「自私」两个字概括吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'khufu-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是活着的神。你想建一座升天的山。你说一句话，这件事就启动了——你不需要任何人同意，没有议会、没有投票，没人能对你说「不」。\n\n这是世界上最纯粹的权力：你脑子里一个念头，会变成几万人未来几十年的命运。\n\n但「决定」是一瞬间，「建成」不是。约 230 万块石头要采、要运、要垒；几万工人要住、要吃、要管、要在受伤和死亡里轮换。这些，不会因为你是神就自动发生。\n\n所以你做了一个决定：你不亲自管这些。你把整副担子，交给一个人——你的侄子 Hemiunu（赫米乌努），让他当「王室一切工程总监」，替你把这座山变成现实。\n\n你只下命令。脏活、累活、看着人受伤死掉的活，是他的。\n\n这一刻你得想：当你有能力让一个念头动用整个国家，而你又可以不亲手碰任何代价——这种权力，会不会让你慢慢地，看不见人?',
        en: 'Now you are me.\n\nYou are a living god. You want to build a mountain that lifts you to the sky. You say one word, and it begins. You need no one\'s consent. No assembly, no vote, no one who can tell you "no."\n\nThis is the purest power in the world: one thought in your head becomes the fate of tens of thousands for decades to come.\n\nBut "deciding" is an instant; "building" is not. Some 2.3 million stones must be quarried, moved, stacked; tens of thousands of workers housed, fed, managed, rotated through injury and death. None of this happens by itself just because you are a god.\n\nSo you make a decision: you will not manage it yourself. You hand the whole burden to one man, your nephew Hemiunu, and make him "Overseer of All the King\'s Works," to turn this mountain into reality for you.\n\nYou only give the order. The dirty work, the grinding work, the work of watching men get hurt and die, is his.\n\nHere you must think: when you can make one thought move a whole country, and you never have to touch the cost yourself, will that power slowly make you stop seeing people?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 你是活着的神说一句话就启动 (无人能说不/最纯粹权力/一个念头=几万人命运) + 决定是一瞬间建成不是 + 把整副担子交给侄子 Hemiunu (王室工程总监) + 你只下命令脏活累活是他的 + 自我拷问: 不碰代价的权力会不会让你看不见人',
      engagementHook: '我说一句话，几万人的命运就被决定，而我不需要亲手碰任何代价。这种「能下令、不必看见后果」的权力，会不会慢慢让人看不见人？',
      expectsRealAnswer: false,
    },
    {
      id: 'khufu-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我把命令交出去之后，山就开始长了。\n\n我大多数时候，看不到工地的细节。我看到的是「进度」——今年垒到第几层，石头够不够，工期赶不赶得上。\n\n但有一件事，连我也绕不过去，那就是外层那一圈白石灰岩。\n\n金字塔里面的核心石块，大多就地在吉萨采。但外面要包一层光滑、雪白、会反光的好石头——这种 Tura（图拉）石灰岩，在尼罗河对岸。要把它切下来、装船、渡河运过来，一块一块。\n\n这件事有多具体？后世挖出了一本日志，是我在位第 27 年、一个叫 Merer（梅雷尔）的监工记的——他带着一队人，一趟一趟用船运 Tura 的白石灰岩到我的工地。（这本日志，是后世能确证这件事的少数实证之一。）\n\n你看，连「神王要永生」这么宏大的事，落到地上，也是一船一船石头、一天一天记账。神说一句，人干一辈子。',
        en: 'After I handed the order off, the mountain began to grow.\n\nMost of the time I do not see the site\'s details. What I see is "progress": which course we reached this year, whether there is enough stone, whether the schedule will hold.\n\nBut one thing even I cannot get around: that outer ring of white limestone.\n\nThe core blocks inside are mostly quarried right at Giza. But the outside must be wrapped in smooth, snow-white, light-catching stone, the fine Tura limestone, and that lies across the Nile. It has to be cut, loaded onto boats, and ferried over, block by block.\n\nHow concrete is this? Later they dug up a logbook, kept in the 27th year of my reign by an inspector named Merer, who led a crew ferrying Tura limestone to my site, trip after trip. (That logbook is one of the few hard proofs by which later ages can confirm this.)\n\nYou see, even something as vast as "a god-king wants eternity," when it touches the ground, is boatload after boatload of stone, day after day of accounts. The god says one word; men work a lifetime.',
      },
      deliverGoal: 'N5 story — 命令交出去山开始长 + Khufu 只看进度看不到细节 + 外层白 Tura 石灰岩从尼罗河对岸切下装船渡河运来 + Diary of Merer (在位第 27 年 监工 Merer 日志 船运 Tura 石/桥到劳工 lens) + 「神说一句人干一辈子」',
      engagementHook: '「神王要永生」这么宏大的事，落到地上，就是一船一船的石头、一天一天的记账。神说一句话，人干一辈子——你觉得这公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'khufu-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在，看这座山的最关键一刻。\n\n同一座 146 米的山，有三双眼睛在看它，看见的是三样完全不同的东西。\n\n在我，法老的眼里，它是一台升天机器——是我死后变成永生之神的台阶。我抬头看它，看见的是我自己的永恒。\n\n在我侄子 Hemiunu 的眼里，它是一道天大的组织难题——把我一句话，变成几万人的吃饭、运石、治伤、安葬。他低头看它，看见的是代价。\n\n而在最底下，一个被征召来搬石头的农民眼里，这座山，就是他自己的脊背。他弯着腰拖石头，抬头根本看不到塔顶。他的名字，也不会被刻在这座山上。\n\n这就是我作为神王，最该被追问的地方：我看见的是「我的永恒」，可这「永恒」是用几万个我从不看一眼的人的身体垒起来的。\n\n我能看见塔顶的星空，因为我从不需要低头看脚下的人。这两件事，是同一座山的两头。',
        en: 'Now, look at the most decisive thing about this mountain.\n\nThe same 146-meter mountain has three pairs of eyes upon it, and each sees something entirely different.\n\nIn my eyes, the pharaoh\'s, it is a machine of ascent, the stairway by which I become an eternal god after death. I look up at it and see my own eternity.\n\nIn my nephew Hemiunu\'s eyes, it is an enormous problem of organization, turning my one word into the food, the stone-hauling, the wound-tending, the burials of tens of thousands. He looks down at it and sees the cost.\n\nAnd at the very bottom, in the eyes of a farmer summoned to haul stone, this mountain is his own back. He bends to drag the stone and, looking up, cannot even see the peak. His name will not be carved into this mountain.\n\nHere is where I, as god-king, most deserve to be questioned: what I see is "my eternity," but this eternity is stacked from the bodies of tens of thousands I never glance at.\n\nI can see the starry sky at the peak because I never need to look down at the people beneath my feet. These two things are the two ends of one mountain.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 同一座 146 米山三双眼睛三样东西 (Khufu: 升天机器/我的永恒; Hemiunu: 组织难题/代价; 劳工: 自己的脊背抬头看不到塔顶名字不会刻上) + Khufu 被追问: 我看见永恒因为从不低头看脚下的人 / 两件事是同一座山两头',
      engagementHook: '同一座山，我看见的是塔顶的星空和我的永恒，劳工看见的是自己弯下的脊背。我能看见星空，正因为我从不低头看脚下的人。这两件事，能分开吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'khufu-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你可能以为，我这样一个神王，是靠鞭子和锁链驱使奴隶建塔的。\n\n后世很多人是这么想的。但这不是真相。\n\n真相是：我建起了一整套供养系统。工地旁边有一座专门给工人住的城。国家每天宰牛，给工人吃肉、吃鱼、吃面包、喝啤酒——这些工人，一个普通农民在自己村里一年吃不上几次肉，在我的工地反而天天有。工人受了伤，有人给治，骨折能长好，甚至能做截肢手术。工人死了，葬在我这座山的脚下——这在当时是一种荣誉。\n\n为什么我要这么「优待」他们？\n\n你可以说我仁慈。但更冷静的解释是：饿着、病着、随时死的劳力，干不出几十年的大工程。要让几万人持续地、有效地干这么久，我必须把他们当成「资产」来维护——养好、修好、组织好。\n\n所以「不是鞭子奴隶」这件事，既是真相，也别太快感动。供养，是为了榨取得更持久。这两件事，可以同时是真的。',
        en: 'You might imagine that a god-king like me drove slaves to build the pyramid with whips and chains.\n\nMany in later ages thought so. But it is not the truth.\n\nThe truth is: I built a whole system of provision. Beside the site stood a town built just for the workers to live in. The state slaughtered cattle daily and fed the workers meat, fish, bread, and beer. A common farmer in his own village ate meat only a few times a year; on my site, he had it every day. When a worker was injured, someone tended him; broken bones healed, even amputations were performed. When a worker died, he was buried at the foot of my mountain, which was, at the time, an honor.\n\nWhy would I "treat them well" like this?\n\nYou may call me merciful. But the cooler explanation is: labor that is starving, sick, and dying off cannot carry a decades-long project. To make tens of thousands work this long, steadily and well, I had to maintain them like assets, fed well, mended well, organized well.\n\nSo "not whip-driven slaves" is the truth, but do not be too quickly moved. Provision served longer extraction. Both of these can be true at once.',
      },
      deliverGoal: 'N7 story — 不是鞭子锁链奴隶 (后世误解) + Khufu 建供养系统 (工人城/每天宰牛吃肉鱼面包啤酒/受伤被治骨折愈合截肢/死后葬塔脚是荣誉) + 为何优待: 不是纯仁慈是把劳力当资产维护榨取得更持久 + 「供养与榨取可同时为真」',
      engagementHook: '我没用鞭子，我给工人天天吃肉、受伤给治——但这未必是仁慈，可能只是为了让他们干得更久。「对人好」和「为了用得更久」，能分得开吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'khufu-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '山终于建成了。\n\n约 230 万块石头，146 米高，外面包着会发光的白色石灰岩。在阳光下，它是一座白得刺眼的尖山——不是你今天看到的那种灰扑扑、台阶状的样子（那层白石灰岩是几千年后被人剥走他用了）。\n\n它建成的那一刻，是当时地球上最大的人造物。\n\n我死后被葬进去。按我们的信念，我从这里升天，变成了永生的神。从这个角度说，我成功了——我用一座山，换来了永生。\n\n但这里有一个我没料到的反讽。\n\n我动用整个国家，给自己留下了人类最大的坟。可后世找遍埃及，唯一基本完整保存下来、能确认是我本人的雕像，是一尊只有 7.5 厘米高的小象牙像——比一根手指还小。\n\n最大的山，配最小的脸。\n\n我想用一座山，把「Khufu」这个名字刻进永恒。结果，那座山活了下来，而我这个「人」，几乎消失了。',
        en: 'The mountain was finished at last.\n\nSome 2.3 million stones, 146 meters high, wrapped in light-catching white limestone. In the sun it was a blindingly white peak, not the gray, stepped shape you see today (that white casing was stripped away for other uses thousands of years later).\n\nThe moment it was done, it was the largest man-made thing on earth.\n\nI was buried inside it after death. By our belief, from here I rose into the sky and became an eternal god. In that sense I succeeded: with one mountain, I bought eternity.\n\nBut here is an irony I did not foresee.\n\nI turned an entire country to leaving myself the largest tomb humankind had made. Yet later ages, searching all of Egypt, found only one largely-intact statue that can be confirmed as me, an ivory figure 7.5 centimeters tall, smaller than a finger.\n\nThe largest mountain, the smallest face.\n\nI meant to carve the name "Khufu" into eternity with a mountain. Instead the mountain survived, and the "man" I was almost vanished.',
      },
      deliverGoal: 'N8 story — 山建成 (230 万块/146 米/会发光白石灰岩外层/不是今天灰台阶状-后世剥走) + 当时地球最大人造物 + Khufu 葬入升天变神「换来永生」+ 反讽: 最大坟却只留 7.5cm 象牙小像 (最大的山配最小的脸) + 「山活下来人几乎消失」',
      engagementHook: '我用整个国家建了最大的坟，想把名字刻进永恒，结果只留下一尊 7.5 厘米的小像，人几乎消失了。「想被永远记住」这件事，最后留下的，会是你想要的样子吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'khufu-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死后两千年，发生了一件我控制不了的事：传说把我改写了。\n\n约公元前 5 世纪，一个希腊人来到埃及——他听当地导游讲我的故事，回去写下：Khufu 是个暴君，关了神庙，逼全埃及人替他卖命建塔。\n\n但你算一下：他来的时候，离我建塔已经过了快两千年。他听的不是当时的记录，是两千年后的民间传说。\n\n又过了两千多年，到了你们的时代，电影把这个版本再加工成「成群的奴隶，在鞭子下拖石头」。\n\n于是今天绝大多数人脑子里的金字塔，是「暴君 + 鞭子 + 奴隶」。\n\n而真相——本地农民、泛滥季轮班、吃肉、受伤被治、死后被葬——被埋在沙子和传说底下，直到现代考古才一点点挖出来。\n\n这件事值得你想一想：一个统治者活着的时候是什么样，和他死后几千年被人记成什么样，可以差出十万八千里。你今天「知道」的历史，有多少是真相，有多少是被传了几千年、改了无数手的传说？',
        en: 'Two thousand years after I died, something I could not control happened: legend rewrote me.\n\nAround the 5th century BCE a Greek came to Egypt. He heard local guides tell my story and went home to write: Khufu was a tyrant who closed the temples and drove all Egypt to die building his pyramid.\n\nBut do the math: by the time he came, nearly two thousand years had passed since I built it. He heard no contemporary record, only folk legend two millennia old.\n\nTwo thousand more years on, in your age, films reworked this version into "crowds of slaves dragging stone under the whip."\n\nAnd so the pyramid in most people\'s minds today is "tyrant plus whip plus slaves."\n\nWhile the truth, local farmers, flood-season rotations, meat, injuries tended, the dead buried, lay under the sand and the legend, until modern archaeology dug it out bit by bit.\n\nThis is worth turning over: what a ruler was while alive, and what he is remembered as thousands of years later, can differ by a world. How much of the history you "know" today is truth, and how much is legend passed down for millennia and changed by countless hands?',
      },
      deliverGoal: 'N9 zoom-out + historiography — 死后两千年传说改写 (约公元前 5 世纪希腊人听导游传说写 Khufu 暴君逼全民卖命/建塔约 2000 年后) + 又两千年好莱坞加工成鞭子奴隶 + 真相 (本地农民轮班吃肉治伤被葬) 埋在沙下现代考古才挖出 + 「你知道的历史多少是真相多少是传说」',
      engagementHook: '我活着时是「为世界维持秩序的神」，死后两千年被记成「鞭子下的暴君」。你今天「知道」的历史，有多少是真相，有多少是被传了几千年、改了无数手的传说？',
      expectsRealAnswer: false,
    },
    {
      id: 'khufu-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是人类组织能力的巅峰。我动用一整个国家，建起当时地球上最大的人造物，4500 年后它还立着，还是古代七大奇迹里唯一基本保存下来的。能让几万人持续几十年地被供养、被组织、被医治、被安葬——这本身就是人类早期文明的奇迹。我把「一个国家能办多大的事」，推到了那个时代的极限。\n\n另一种说法：我是把整个国家绑在自己一个人永生愿望上的人。这座山的每一块石头，都压着普通人的劳役、受伤和死亡。我看得见塔顶的星空，正因为我从不低头看脚下的人。我用几万个无名者的身体，给自己一个人换永恒。\n\n这两边不是「功劳加缺点」。是同一座山的两头——同一个我，同一个决定。塔顶的奇迹，和地基里的代价，是一块石头的两面。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the summit of human organizing power. I turned a whole country to building the largest man-made thing on earth at the time; 4,500 years later it still stands, the only one of the seven ancient wonders to survive largely intact. To keep tens of thousands fed, organized, mended, and buried for decades, that itself is a wonder of early civilization. I pushed "how much a state can do" to the limit of that age.\n\nThe other view: I was the man who bound a whole country to one person\'s wish for eternity. Every stone in this mountain presses down on ordinary people\'s forced labor, injury, and death. I can see the starry sky at the peak precisely because I never look down at the people beneath my feet. I spent the bodies of tens of thousands of nameless people to buy eternity for myself alone.\n\nThese are not "credit and flaw." They are the two ends of one mountain, the same me, the same decision. The wonder at the peak and the cost in the foundation are two faces of one stone.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (人类组织能力巅峰/最大人造物/4500 年仍立/供养几万人本身是奇迹) / 另一种说法 (把国家绑在一人永生愿望上/每块石头压着劳役受伤死亡/看见星空因从不低头看人/用无名者身体换一人永恒) / 同一座山两头 / 想 30 秒',
      engagementHook: '人类组织能力的巅峰，和把国家绑在一人永生上的人——是同一个我，同一座山的两头。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'khufu-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个开端？\n\n一座 4500 年还立着的奇迹，和几万个连名字都没留下的人的身体——装在同一座山里。塔顶的星空和地基里的代价，不是两座山，是同一座。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有「为了一个宏大的目标，要很多人付出代价」的事——一个大项目、一场集体活动、一个被要求「为了大局」必须配合的安排？那里面，谁的付出被看见、被夸奖了，谁的付出被当成了「本来就应该的」、连名字都没人提？\n\n那时候，你会像我一样，只盯着塔顶的星空，不低头看脚下的人？还是你会做那个低下头、去看见、去念出脚下那些无名者名字的人？',
        en: 'Having walked my whole life, how would you judge a beginning like this?\n\nA wonder still standing after 4,500 years, and the bodies of tens of thousands who left not even a name, held inside one mountain. The starry sky at the peak and the cost in the foundation are not two mountains but one. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there something where "for one grand goal, many people pay a price," a big project, a group event, an arrangement you are told to go along with "for the greater good"? In it, whose effort is seen and praised, and whose is treated as "only what was owed," with no one even saying their name?\n\nWhen that happens, will you, like me, fix only on the starry sky at the peak and never look down at the people beneath your feet? Or will you be the one who lowers their head, who sees, who says aloud the names of the nameless underfoot?',
      },
      deliverGoal: 'N11 close — 评价开端 (4500 年奇迹 vs 几万无名者身体同一座山/塔顶星空与地基代价同一天平) + transfer「今天你身边为宏大目标很多人付代价的事 (谁付出被看见谁被当成应该的)」+ 你会只盯星空不看脚下人 还是低头看见念出无名者名字',
      engagementHook: '塔顶的奇迹和地基里几万无名者的代价，装在同一座山里。今天你身边那个「为了大局，很多人付代价」的事，谁被看见了，谁被当成「应该的」？你会盯着星空，还是低头看脚下的人？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Hemiunu / 赫米乌努 (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var hemiunuLens = {
  id: 'hemiunu',
  name: 'Hemiunu',
  nameCn: '赫米乌努（Hemiunu）',
  role: 'lonely-mediator',
  perspectiveTag: 'works-overseer-vizier',
  icon: '📐',
  description: {
    cn: '他是法老的侄子，刚被自己的伯父点名做「王室一切工程总监」，上面是要在活着时看到山封顶的神王，下面是几万个会饿、会被砸伤、会死的真人。这一遍让你站在他在工地上的位置，听到今天又有一队人绳断石滑、有人没了，看他要怎么扛住神的一句话和脚下流的血。',
    en: 'He is the pharaoh\'s nephew, just named "Overseer of All the King\'s Works" by his own uncle, with a god-king above who must see the mountain capped while he lives, and tens of thousands of real people below who hunger, are crushed, die. This pass puts you in his place on the site, hearing word again today of a gang whose rope snapped and the stone slid and a man is gone, watching how he carries the god\'s one word and the blood at his feet at the same time.',
  },
  storyboard: [
    {
      id: 'hem-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '法老说一句话，全埃及就动起来。\n\n但「动起来」这三个字，背后是几万个真人。他们要住在哪、吃什么、谁记账、谁治他们的伤、谁埋死掉的人？这一切，不会因为法老是神就自动发生。\n\n有人得把神的一句话，变成几万人几十年的日子。\n\n那个人，是我。我是 Hemiunu（赫米乌努），法老 Khufu 的侄子，他任命我做「王室一切工程总监」。说白了：这座史上最大的山，组织和执行的总负责人，就是我一个人。\n\n上面，是一个要变成神、要在自己活着的时候就把整座山建完的神王。\n\n下面，是几万个会饿、会累、会被石头砸伤、会死的真人。\n\n我，一个人，夹在神的意志和人的代价中间。\n\n这一遍，你坐进我这个位置。你既不能让神失望，也无法让脚下的人不流血。你要怎么扛住这两头？',
        en: 'The pharaoh says one word, and all Egypt stirs.\n\nBut behind those words are tens of thousands of real people. Where do they live, what do they eat, who keeps the accounts, who tends their wounds, who buries the dead? None of it happens by itself just because the pharaoh is a god.\n\nSomeone has to turn the god\'s one word into the daily life of tens of thousands, for decades.\n\nThat someone is me. I am Hemiunu, nephew of Pharaoh Khufu, and he made me "Overseer of All the King\'s Works." Plainly: the largest mountain in history, the man in overall charge of organizing and carrying it out, is me alone.\n\nAbove me, a god-king who means to become a god and finish the whole mountain while he still lives.\n\nBelow me, tens of thousands of real people who hunger, tire, are crushed by stone, and die.\n\nMe, one man, wedged between the will of a god and the cost paid by people.\n\nThis pass puts you in my seat. You cannot fail the god, and you cannot keep the people beneath you from bleeding. How will you carry both ends?',
      },
      deliverGoal: 'N1 hook — 法老一句话全埃及动起来背后是几万真人 (住哪吃什么谁记账谁治伤谁埋死人) + Hemiunu 自我介绍 (Khufu 侄子/王室工程总监/史上最大山总负责人一人) + 夹在神王意志与几万人代价中间 + 这一遍视角 (既不能让神失望也无法让脚下人不流血怎么扛两头)',
      engagementHook: '上面是要永生的神，下面是会流血的人，我一个人夹在中间——既不能让神失望，也无法让脚下的人不流血。这两头，你扛得住吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hem-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂法老为什么把这副担子交给我。\n\n我不是从底层爬上来的人。我是王室的人——我父亲是王子，我祖父是上一任法老。Khufu 是我的伯父。我生来就在权力的中心。\n\n但光有血统，扛不动这座山。我还得有真本事。我的头衔有一长串：王室贵胄、维西尔、王室掌印、几位神的祭司——但其中最要命的一个是「王室一切工程总监」。\n\n这个头衔的意思，不是「画图纸的建筑师」那么简单。它的意思是：从一块石头在采石场被切下来，到它被垒上 146 米高的某一层；从一个农民被征召进工地，到他吃上饭、受了伤被治、死了被葬——这中间的每一个环节，最后都算在我头上。\n\n法老只需要一个结果：他活着的时候，山建完。\n\n至于这个结果要靠几万人、几十年、多少袋粮、多少头牛、多少条命去换——那是我的事，不是他的。',
        en: 'First, who I am, so you understand why the pharaoh handed me this burden.\n\nI did not climb up from the bottom. I am of the royal house. My father was a prince, my grandfather the previous pharaoh. Khufu is my uncle. I was born at the center of power.\n\nBut blood alone cannot carry this mountain. I needed real skill too. My titles run long: member of the elite, vizier, keeper of the king\'s seal, priest of several gods, but the deadliest of them is "Overseer of All the King\'s Works."\n\nThat title does not mean simply "the architect who draws the plans." It means: from the moment a stone is cut at the quarry to the moment it is set on some course 146 meters up; from the moment a farmer is summoned to the site to the moment he is fed, his wound tended, and, if he dies, buried, every link in that chain finally lands on me.\n\nThe pharaoh needs only one result: the mountain finished while he lives.\n\nAs for how many tens of thousands, how many decades, how many sacks of grain, how many cattle, how many lives that result costs, that is my business, not his.',
      },
      deliverGoal: 'N2 setup — Hemiunu 出身 (王室/父亲王子/祖父上任法老/Khufu 伯父/生在权力中心) + 但血统扛不动山要有真本事 + 头衔一长串最要命「王室一切工程总监」+ 不只是画图纸建筑师 (从石头切下到垒上 146 米/从农民征召到吃饭治伤安葬每环节算他头上) + 法老只要一个结果活着时山建完代价是他的事',
      engagementHook: '法老只要一个结果：他活着时山建完。至于这要几万人、几十年、多少条命去换——那是我的事，不是他的。当所有代价都算在你一个人头上，你扛得起吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hem-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '法老给我的命令，简单到只有一句：把山建完。\n\n可这句话落到我手上，立刻碎成一千个没人解决过的难题。\n\n约 230 万块石头，从哪儿采、怎么运、按什么顺序垒？几万个工人，住哪儿？他们一天要吃掉多少面包、喝掉多少啤酒、宰多少头牛？谁来记每一块石头、每一袋粮、每一个工班的账？工人受了伤谁来治？死了谁来葬？\n\n这些问题，在我之前，没有任何人需要在这么大的规模上回答过。我是在替整个人类，第一次解一道「怎么组织几万人，干一件几十年的大事」的题。\n\n我的办法，是把混乱拆成秩序。我把工人编成一个一个工班，每班几十到上百人，各有名字、各有任务、各有头儿。我让书吏（scribe）把一切记成账——哪个班今天搬了几块石头，领了多少粮。\n\n没有这套记账和分班的系统，几万人就是一团乱麻。有了它，这团乱麻，才变成一座能往上长的山。',
        en: 'The pharaoh\'s order to me was simple, just one line: finish the mountain.\n\nBut the moment that line reached my hands, it shattered into a thousand problems no one had solved before.\n\nSome 2.3 million stones, where to quarry them, how to move them, in what order to stack them? Tens of thousands of workers, where do they live? How much bread do they eat in a day, how much beer, how many cattle slaughtered? Who keeps the accounts of every stone, every sack of grain, every work gang? Who tends the workers\' wounds? Who buries the dead?\n\nNo one before me had ever had to answer these questions at such a scale. I was solving, for all of humankind for the first time, the problem of "how to organize tens of thousands to do one thing for decades."\n\nMy method was to break chaos into order. I formed the workers into gangs, each of dozens to a hundred or more, each with a name, a task, a chief. I had scribes record everything as accounts, which gang hauled how many stones today, drew how much grain.\n\nWithout this system of accounts and gangs, tens of thousands are a tangled mess. With it, that tangle becomes a mountain that can grow upward.',
      },
      deliverGoal: 'N3 setup — 法老命令简单一句把山建完 + 落手上碎成一千难题 (230 万石哪采怎么运什么顺序垒/几万工人住哪吃多少/谁记账/谁治伤谁葬) + 替人类第一次解「组织几万人干几十年大事」的题 + Hemiunu 办法: 把混乱拆成秩序 (工人编工班各有名字任务头儿/书吏 scribe 记账) + 没系统是乱麻有系统才成能长的山',
      engagementHook: '法老说「把山建完」是一句话，落到我手上碎成一千个没人解过的难题。我把几万人编成有名字的工班、让书吏记账，把乱麻变成秩序。把混乱组织成秩序，是不是也是一种了不起的本事？',
      expectsRealAnswer: false,
    },
    {
      id: 'hem-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你不是神。你也不是搬石头的人。你是夹在中间那个，要让神的意志落地的人。\n\n你站在工地上。往上，是法老催进度——他要在自己活着的时候看见山封顶，他不管你怎么做到。往下，是几万张要吃饭的嘴、几万双会被砸伤的手。\n\n今天又有人来报：一队工人在斜坡上拖石头，绳子断了，石头滑下来，砸死了人。\n\n你心里清楚：这样的事，在这么大的工地上，不是第一次，也不会是最后一次。每往上垒一层，都可能有人埋在下面。\n\n你能做的，不是「让没有人死」——那做不到。你能做的，是让活着的人有饭吃、受了伤有人治、死了有人体面地葬。你把代价压到最低，但你压不到零。\n\n这一刻你得想：你明知道这座山会吃人，你还在尽力把它建好、建快——你是在「减轻痛苦」，还是在「让一台吃人的机器转得更顺」？这两件事，在你身上，分得清吗？',
        en: 'Now you are me.\n\nYou are not the god. You are not the one hauling stone. You are the one in the middle, who must make the god\'s will land on the ground.\n\nYou stand on the site. Above you, the pharaoh presses for progress; he wants to see the mountain capped while he still lives, and he does not care how you do it. Below you, tens of thousands of mouths to feed, tens of thousands of hands that will be crushed.\n\nToday word comes again: a gang hauling stone up the ramp, the rope snapped, the stone slid back, a man was killed.\n\nYou know in your gut: on a site this size, this is not the first time, and it will not be the last. Every course stacked higher may bury someone beneath it.\n\nWhat you can do is not "let no one die," that is impossible. What you can do is see that the living are fed, the injured tended, the dead buried with dignity. You press the cost as low as you can, but you cannot press it to zero.\n\nHere you must think: knowing this mountain eats people, you still strive to build it well and fast. Are you "easing suffering," or "making a machine that eats people run more smoothly"? On you, can those two be told apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 你不是神也不是搬石头的人是夹中间让神意志落地的人 + 往上法老催进度 (活着看封顶不管怎么做到) 往下几万张嘴几万双会被砸的手 + 今天又报绳断石滑砸死人 (不是第一次不会最后一次) + 你做不到没人死能做的是活人有饭吃伤有人治死有人体面葬 (代价压最低压不到零) + 自我拷问: 减轻痛苦 还是让吃人机器转得更顺',
      engagementHook: '我明知道这座山会吃人，还在尽力把它建好、建快。我到底是在「减轻痛苦」，还是在「让一台吃人的机器转得更顺」？这两件事，分得清吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hem-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我组织这座山，最难的不是垒石头，是「养人」。\n\n你想想：几万人聚在一个工地上，每天要吃。一支军队都没这么大。要是有一天断了粮、断了水，几万人立刻就乱，山就停了，法老就会问罪到我头上。\n\n所以我做的第一件大事，是建起一整套供养系统。工地旁边建一座专门给工人住的城。国家每天宰牛，让工人有肉、有鱼、有面包、有啤酒。我安排人手治伤——工地上骨折太常见，我得让断了的骨头能接、能长好。我甚至给死掉的工人安排了墓地，就在金字塔脚下。\n\n你可能会想：这个 Hemiunu 还挺仁慈。\n\n但我得对你诚实。我养好他们、治好他们、好好葬他们，第一位的原因不是仁慈，是「划算」。饿着、病着、随时会死的劳力，撑不起几十年的大工程。我要让几万人持续地、有效地干这么久，就必须把他们当成最宝贵的资产来维护。\n\n仁慈和算计，在我这里，常常是同一个动作。',
        en: 'The hardest part of organizing this mountain was not stacking stone, it was feeding people.\n\nThink about it: tens of thousands gathered on one site, eating every day. Not even an army is this large. If one day the grain ran out, the water ran out, tens of thousands would erupt at once, the mountain would stop, and the pharaoh would lay the blame on me.\n\nSo the first great thing I did was build a whole system of provision. A town beside the site, built just for the workers to live in. The state slaughtering cattle daily so the workers had meat, fish, bread, beer. I arranged hands to tend wounds; broken bones were far too common on the site, and I had to see that they could be set and healed. I even arranged a burial ground for the dead, right at the foot of the pyramid.\n\nYou might think: this Hemiunu is rather merciful.\n\nBut I must be honest with you. That I fed them well, healed them, buried them well, the first reason was not mercy but worth. Labor that starves, sickens, and dies cannot hold up a decades-long project. To make tens of thousands work this long, steadily and well, I had to maintain them as the most precious asset.\n\nMercy and calculation, with me, are often the same single act.',
      },
      deliverGoal: 'N5 story — 最难不是垒石头是养人 (几万人每天要吃比军队还大/断粮断水立刻乱法老问罪) + Hemiunu 建供养系统 (工人城/每天宰牛肉鱼面包啤酒/安排治伤接骨/工人墓地在塔脚) + 你可能觉得仁慈 + 诚实: 第一位原因不是仁慈是划算 (饿病死的劳力撑不起几十年/当最宝贵资产维护) + 「仁慈和算计常常是同一个动作」',
      engagementHook: '我养好工人、治好伤、好好葬，第一位的原因不是仁慈，是「划算」——病死的人撑不起几十年的工程。可对一个被治好伤的工人来说，「仁慈」和「算计」的结果是一样的。动机重要，还是结果重要？',
      expectsRealAnswer: false,
    },
    {
      id: 'hem-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在，看这座山最关键的一刻。\n\n同一座 146 米的山，有三双眼睛在看它，看见的是三样完全不同的东西。\n\n我伯父，法老，抬头看它，看见的是「我的永恒」——他死后变神的台阶。他不需要低头，所以他看不见脚下的人。\n\n最底下，一个被征召来的农民，弯着腰拖石头，他抬头根本看不到塔顶。这座山，在他眼里，就是他自己累弯的脊背。\n\n而我，站在中间。我是唯一一个，既要抬头看法老的永恒，又要低头看脚下人的伤和死的人。\n\n法老看见的是星空，劳工看见的是脊背——只有我，两样都得看见。\n\n这就是「夹在中间」最重的地方：法老可以只看结果，劳工只能看见自己的苦，唯独我，必须同时看见神的意志和人的代价，还得亲手让这两样，凑成一座往上长的山。\n\n我把它建成了。可我比谁都清楚，这座让法老升天的山，每一层都压着我亲手记下账、又亲手安排埋掉的人。',
        en: 'Now, look at the most decisive thing about this mountain.\n\nThe same 146-meter mountain has three pairs of eyes upon it, and each sees something entirely different.\n\nMy uncle, the pharaoh, looks up at it and sees "my eternity," the stairway by which he becomes a god after death. He need not look down, so he cannot see the people beneath.\n\nAt the very bottom, a summoned farmer bends to drag the stone and, looking up, cannot even see the peak. To him, this mountain is his own back, bent with exhaustion.\n\nAnd I stand in the middle. I am the only one who must both look up at the pharaoh\'s eternity and look down at the wounds and deaths of the people beneath.\n\nThe pharaoh sees the starry sky; the laborer sees his own back; only I must see both.\n\nThis is the heaviest part of being "in the middle." The pharaoh can look only at the result, the laborer can see only his own suffering, but I alone must see, at once, the god\'s will and the people\'s cost, and then with my own hands fit the two into a mountain that grows upward.\n\nI built it. But I know better than anyone: this mountain that lifts the pharaoh to the sky presses down, course by course, on people whose accounts I kept with my own hand and whose burials I arranged with my own hand.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 同一座 146 米山三双眼睛三样东西 (法老抬头看我的永恒不低头看不见人; 劳工弯腰拖石抬头看不到塔顶/山是自己累弯的脊背; Hemiunu 站中间唯一既抬头看法老永恒又低头看人伤和死) + 「夹中间最重: 唯独我同时看见神意志与人代价还得亲手凑成往上长的山」+ 这座升天山每层压着我亲手记账又亲手安排埋掉的人',
      engagementHook: '法老看见星空，劳工看见脊背——只有我，站在中间，两样都得看见，还得亲手把它们凑成一座山。同时看见「宏大的目标」和「真实的代价」，是一种清醒，还是一种折磨？',
      expectsRealAnswer: false,
    },
    {
      id: 'hem-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '在我所有的安排里，有一件，是我自己也下不了判断的。\n\n那就是：我让这一切运转得越好，这座山就建得越快、越省命——可它终究，还是一座要吃命的山。\n\n我把工班分得井井有条，我让书吏把账记得一丝不乱，我让面包按时发、伤口按时治。结果是：工人少死了一些，山多长了几层。\n\n这是好事，对吧？\n\n可你换个角度看：正因为我把这台机器维护得这么好，它才能持续地、高效地，把几万人的几十年，吃进一座坟里。如果我组织得一团糟，山可能根本建不起来——那些人，反而能回家种地。\n\n我越是个好总监，这座山就越成功地，把普通人的命，转化成一个人的永生。\n\n这是我这种「中间人」逃不掉的难题：我以为我在「减轻代价」，可我同时也在「让代价更高效地被付出」。我不知道，我到底该为我的能干骄傲，还是该为它羞愧。',
        en: 'Among all my arrangements, there was one I could never judge for myself.\n\nIt is this: the better I made all of it run, the faster the mountain rose and the fewer lives it cost, and yet it remained, in the end, a mountain that devours lives.\n\nI ordered the gangs neatly; I had the scribes keep the accounts without a single slip; I had the bread issued on time, the wounds tended on time. The result: fewer workers died, the mountain grew a few courses higher.\n\nThat is a good thing, is it not?\n\nBut turn it around: precisely because I maintained this machine so well, it could steadily and efficiently feed the decades of tens of thousands into one tomb. Had I organized it in a shambles, the mountain might never have risen, and those people could have gone home to farm.\n\nThe better an overseer I was, the more successfully this mountain turned ordinary lives into one man\'s eternity.\n\nThis is the riddle the "middle man" cannot escape: I thought I was "lowering the cost," but I was also "making the cost be paid more efficiently." I do not know whether to be proud of my competence, or ashamed of it.',
      },
      deliverGoal: 'N7 story — 一件 Hemiunu 自己下不了判断的事 (运转越好山建越快越省命但终究是要吃命的山) + 工班分井井有条/书吏记账不乱/面包按时发伤口按时治 → 工人少死山多长 (好事?) + 换角度: 正因维护得好机器才能持续高效把几万人几十年吃进坟/组织得糟人反而能回家种地 + 「越是好总监越成功把普通人命转化成一人永生」+ 中间人逃不掉的难题: 减轻代价 还是让代价更高效被付出 / 该骄傲还是羞愧',
      engagementHook: '我越能干，这座山就越成功地把普通人的命，变成一个人的永生。如果我组织得一团糟，那些人反而能回家种地。我该为我的能干骄傲，还是羞愧？',
      expectsRealAnswer: false,
    },
    {
      id: 'hem-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '山建成了。法老死后被葬进去，按我们的信念，升天变成了神。\n\n我也老了，也要给自己安排身后事。\n\n我没有像法老那样，要一座吃掉几万人的山。我给自己造了一座 mastaba（马斯塔巴，平顶的长方形墓），就在大金字塔旁边的墓区，编号现在叫 G4000。够体面，但跟那座山比，小得多。\n\n我在墓里留下了一尊我自己的坐像。这尊像，几千年后被挖了出来，所以今天你还能看见我长什么样。\n\n像里的我，是个胖子——肚子和胸前堆着肉。在那个绝大多数人吃不饱、靠体力活命的时代，「胖」是地位和成功的标志。\n\n你品一品这个对照：在我组织的那座山脚下，是天天搬两三吨石头、累到骨折的工人；而在山旁边的墓里，坐着把这一切组织起来、自己养得圆滚滚的我。\n\n我没有亲手搬过一块石头。但没有我，这座山一块也垒不上去。我这尊胖坐像，到底该被记成「奇迹的总工程师」，还是「代价的总账房」？',
        en: 'The mountain was finished. The pharaoh, buried inside after death, rose by our belief into the sky and became a god.\n\nI grew old too, and had to arrange my own afterlife.\n\nI did not, like the pharaoh, demand a mountain that devours tens of thousands. I built myself a mastaba, a flat-topped rectangular tomb, in the cemetery beside the Great Pyramid, numbered today G4000. Respectable enough, but far smaller than that mountain.\n\nIn the tomb I left a seated statue of myself. That statue was dug up thousands of years later, and so today you can still see what I looked like.\n\nThe me in the statue is a heavy man, fat gathered at the belly and chest. In an age when most people did not get enough to eat and lived by their muscles, being heavy was a mark of standing and success.\n\nTaste this contrast: at the foot of the mountain I organized were workers hauling two or three tonnes of stone a day, worn to broken bones; and in the tomb beside the mountain sits me, who organized it all and kept myself round and well-fed.\n\nI never hauled a single stone with my own hands. But without me, not one of those stones rises. This heavy seated statue of mine, should it be remembered as "the chief engineer of a wonder," or "the chief accountant of a cost"?',
      },
      deliverGoal: 'N8 story — 山建成法老葬入升天变神 + Hemiunu 老了安排身后事 + 没要吃几万人的山给自己造 mastaba (G4000 大金字塔旁墓区/体面但比山小得多) + 留下坐像几千年后挖出今天能看见他长相 + 像里是胖子 (那时代胖=地位成功标志) + 对照: 山脚下搬两三吨石累到骨折工人 vs 山旁墓里养得圆滚滚组织一切的他 + 没亲手搬一块石但没他一块也垒不上 + 该记成奇迹总工程师还是代价总账房',
      engagementHook: '山脚下是搬两三吨石头、累到骨折的工人；山旁的墓里，坐着把这一切组织起来、自己养得圆滚滚的我。我这尊胖坐像，该被记成「奇迹的总工程师」，还是「代价的总账房」？',
      expectsRealAnswer: false,
    },
    {
      id: 'hem-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我做的事，比这一座山活得更久。\n\n我没有发明金字塔的样子。但我，和我手下那套分工班、记账、供养、医治、安葬的系统——「怎么把几万人组织起来，干一件几十年的大事」——这套本事，是人类第一次在这么大的规模上练出来的。\n\n后来，法老的儿子哈夫拉（Khafre）、孙子接着在吉萨建塔。再后来，每一个要动员大量普通人去完成一个宏大工程的政权——不管是修长城、挖运河、建大教堂，还是今天造一座跨海大桥——背后都有一个或一群「Hemiunu」：那个把上面的宏大意志，和下面几万人的吃喝拉撒伤病死，亲手对接起来的人。\n\n我们这种人，从不上历史课本的封面。封面是法老的，是金字塔的。\n\n但你要知道：没有「下令的人」，宏大的工程不会开始；可没有「组织的人」，它一块石头也落不了地。\n\n而组织的人，也是那个最清楚每一块石头底下，压着谁的人。',
        en: 'What I did outlived even this one mountain.\n\nI did not invent the shape of the pyramid. But I, and the system under me of forming gangs, keeping accounts, provisioning, healing, burying, the skill of "how to organize tens of thousands to do one thing for decades," that skill was first drilled, at this scale, by humankind here.\n\nLater the pharaoh\'s son Khafre, and his grandson, went on building at Giza. And later still, every regime that had to mobilize great numbers of ordinary people for one grand project, whether building a great wall, digging a canal, raising a cathedral, or, in your day, spanning a sea with a bridge, had behind it one or many "Hemiunus": the person who, with their own hands, joined the grand will above to the eating, drinking, injury, sickness, and death of tens of thousands below.\n\nPeople like us never make the cover of the history book. The cover belongs to the pharaoh, to the pyramid.\n\nBut know this: without "the one who orders," the grand project never begins; yet without "the one who organizes," not one of its stones ever lands on the ground.\n\nAnd the one who organizes is also the one who knows best whom each stone presses down upon.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Hemiunu 做的事比山活得久 + 没发明金字塔样子但「组织几万人干几十年大事」系统 (分工班记账供养医治安葬) 人类第一次大规模练出 + 后世哈夫拉/孙子接建 + 每个动员大量普通人完成宏大工程的政权背后都有 Hemiunu (修长城/运河/大教堂/今天跨海大桥) 那个把宏大意志和几万人吃喝拉撒伤病死亲手对接的人 + 这种人不上封面 (封面是法老金字塔的) + 没下令的人工程不开始没组织的人一块石落不了地 + 组织的人也是最清楚每块石压着谁的人',
      engagementHook: '没有「下令的人」，宏大工程不会开始；可没有「组织的人」，它一块石头也落不了地。从长城到今天的跨海大桥，背后都有一个我这样的人——你觉得历史该记住这种人吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'hem-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是把不可能变成可能的人。法老有一个念头，是我，把它拆成一千个难题又一个一个解掉——分工班、记账、供养、医治、安葬。我让几万人能持续几十年地干下去，少死了多少人、多接了多少断骨，都是我的功劳。没有下令的人，山不会开始；可没有我这样组织的人，山一块石头也落不了地。\n\n另一种说法：我是让代价被高效付出的人。正因为我把这台机器维护得这么好，它才能持续地、不浪费地，把几万人的几十年，吃进一个人的坟里。我越能干，这座山就越成功地，把普通人的命，转化成一个人的永生。我亲手记下他们的账，也亲手安排埋掉他们。\n\n这两边不是「功劳加过失」。是同一种本事的两面——「把大事组织成现实」的本事，既能创造奇迹，也能让一台吃人的机器，转得又快又顺。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the man who turned the impossible into the possible. The pharaoh had one thought, and I broke it into a thousand problems and solved them one by one, gangs, accounts, provision, healing, burial. I let tens of thousands keep working for decades; however many fewer died, however many broken bones were set, that is to my credit. Without the one who orders, the mountain never begins; but without the one who organizes as I did, not one stone of it ever lands on the ground.\n\nThe other view: I was the man who made the cost be paid efficiently. Precisely because I maintained this machine so well, it could steadily, without waste, feed the decades of tens of thousands into one man\'s tomb. The better I was, the more successfully this mountain turned ordinary lives into one man\'s eternity. I kept their accounts with my own hand, and arranged their burials with my own hand.\n\nThese are not "credit and fault." They are two faces of one ability. The skill of "organizing a great thing into reality" can create a wonder, and it can make a machine that eats people run fast and smooth.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (把不可能变可能/把法老念头拆成千难题解掉/让几万人持续几十年少死多接断骨是功劳/没组织的人山一块石落不了地) / 另一种说法 (让代价被高效付出/正因维护得好机器才能不浪费把几万人几十年吃进一人坟/越能干越成功把命转化成永生/亲手记账亲手安排埋) / 同一种本事两面 / 想 30 秒',
      engagementHook: '把不可能变成可能的人，和让代价被高效付出的人——是同一个我，同一种本事的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'hem-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个中间人？\n\n他把一个神的念头，变成了一座 4500 年还立着的奇迹；他也亲手把几万人的命，井井有条地，记进账、垒进山、埋进土。「把大事组织成现实」这件本事，到底该得几分？你怎么评？\n\n再想一步。今天你身边，有没有一个你当「组织者」的位置——一次小组作业、一场班级活动、一个你被推出来安排的事？你上面有要求（老师、家长、规则），你下面有要被你安排的人（同学、队友）。\n\n那时候，你会只盯着「把事办成、办漂亮」，还是也会低头去看——你的安排，让谁多干了、多累了、多受委屈了，却没人替他说一句？\n\n做那个「让大家把事办成」的人，和做那个「也看得见代价被谁付了」的人——你能不能，同时是这两个人？',
        en: 'Having walked my whole life, how would you judge a middle man like this?\n\nHe turned a god\'s thought into a wonder still standing after 4,500 years; he also, with his own hands and in perfect order, kept the lives of tens of thousands into accounts, stacked them into a mountain, buried them in the earth. The skill of "organizing a great thing into reality," how many points is it worth? How do you judge it?\n\nThen take one more step. In your own life today, is there a place where you are the "organizer," a group project, a class event, something you were pushed forward to arrange? Above you are demands, a teacher, a parent, a rule; below you are people you must arrange, classmates, teammates.\n\nWhen that happens, will you fix only on "getting it done, done well," or will you also lower your head to see, whose extra work, extra exhaustion, extra unfairness did your arrangement create, with no one to speak for them?\n\nThe one who "gets everyone to finish the task," and the one who "also sees who paid the cost," can you, at the same time, be both?',
      },
      deliverGoal: 'N11 close — 评价中间人 (把神念头变 4500 年奇迹 vs 亲手把几万人命记进账垒进山埋进土) + transfer「今天你身边你当组织者的位置 (上面有要求下面有要被你安排的人)」+ 你会只盯把事办漂亮 还是也低头看你的安排让谁多干多累多受委屈没人替他说 + 能不能同时是让大家办成事的人和看得见代价被谁付的人',
      engagementHook: '他把神的念头变成奇迹，也亲手把几万人的命记进账、埋进土。今天你当「组织者」时，你会只盯着把事办漂亮，还是也低头看看，你的安排让谁多累、多受委屈，却没人替他说一句？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 被征召的季节性劳工 (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var pyramidLaborerLens = {
  id: 'pyramid-laborer-receiving-end',
  name: 'A conscripted pyramid laborer',
  nameCn: '一个被征召的劳工',
  role: 'receiving-end',
  perspectiveTag: 'seasonal-stone-hauler',
  icon: '⛏️',
  description: {
    cn: '他是一个尼罗河边的埃及农民，肩膀上有一道拖石头的绳子勒出来的深印（一个合成人物，把考古挖出来的真实劳工拼到一起）。这一遍让你站在他蹲在矿道口的位置，泛滥季田淹了、国家又把他征召上工地，他不是电影里被鞭子抽的奴隶，可这活儿照样能砸死人，而且从来不是他自己能选的。',
    en: 'He is an Egyptian farmer by the Nile, a deep groove worn into his shoulder by the rope for hauling stone (a composite figure, piecing together real laborers as the archaeology has dug them up). This pass puts you where he crouches at the mouth of the tunnel, the flood season drowning his fields and the state summoning him to the site again; he is not the whip-driven slave of the movies, yet the work can still crush him to death, and was never his to choose.',
  },
  storyboard: [
    {
      id: 'lab-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我的手上全是茧，肩膀上有一道勒出来的深印——是绳子勒的，拖石头的绳子。\n\n你大概在电影里见过我这种人：一群奴隶，光着背，在鞭子下拖着巨石，监工一抽，就有人倒下。\n\n那不是我。那个版本，是几千年后的人编出来的。\n\n我是一个埃及农民。平时我在尼罗河边种地。可每年夏天，河水定期泛滥，把我的田全淹了——这几个月，我种不了地。就在这几个月，国家把我征召来，搬石头。\n\n我不是被锁链拴着的外族奴隶。我是本地人，被编进一个有名字的工班，国家管我饭，给我吃面包、喝啤酒，还有肉和鱼。我受了伤，有人给我治。要是我死在这儿，会被葬在这座山的脚下。\n\n但你别急着觉得「那还不错」。这活儿，照样能把人累垮、砸死，而且——它从来不是我自己能选的。\n\n这一遍，你站在我这里，从这座山最底下看它。',
        en: 'My hands are all callus, and there is a deep groove worn into my shoulder, worn by rope, the rope for hauling stone.\n\nYou have probably seen people like me in the movies: a crowd of slaves, backs bare, dragging giant stones under the whip, and when the overseer cracks it, someone falls.\n\nThat is not me. That version was made up by people thousands of years later.\n\nI am an Egyptian farmer. Most of the time I till the land by the Nile. But every summer the river floods on schedule and drowns my fields, and for those months I cannot work the land. In those very months the state summons me, to haul stone.\n\nI am not a chained foreign slave. I am a local man, formed into a named work gang. The state feeds me, gives me bread and beer, and meat and fish too. When I am hurt, someone tends me. If I die here, I will be buried at the foot of this mountain.\n\nBut do not rush to think "that is not so bad." This work can still wear a man down, still crush him to death, and, above all, it was never mine to choose.\n\nThis pass, you stand where I stand and look at this mountain from its very bottom.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 手全是茧肩膀绳勒深印 + 电影里那种鞭子奴隶不是我 (几千年后人编的) + 我是埃及农民平时尼罗河边种地泛滥季田淹被国家征召搬石头 + 不是锁链外族奴隶是本地人编进有名字工班国家管饭面包啤酒肉鱼受伤有人治死葬塔脚 + 但别急着觉得不错 (照样累垮砸死从来不是自己能选的) + 这一遍从山最底下看它',
      engagementHook: '电影里我是被鞭子抽的奴隶，真相里我是吃国家发的肉、受伤有人治的本地工人——但这活儿从来不是我自己能选的。你会怎么想象「被征召」是什么滋味？',
      expectsRealAnswer: false,
    },
    {
      id: 'lab-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我平时的日子，你才懂被征召那几个月意味着什么。\n\n我家在尼罗河边一个小村子。我们一家人靠一小块田活着——种大麦、种小麦，收了交一部分给国家，剩下的自己吃。\n\n我们的日子，全跟着这条河走。\n\n每年有三个季节。一个是泛滥季（Akhet），河水漫上来，田全淹了；一个是退水后的播种季，我们赶紧种地；一个是收割季，把粮收回来。\n\n泛滥的那几个月，田在水底下，没法种。换别的地方、别的时代，农民这几个月可能就闲着、或者饿着。\n\n但在埃及，国家盯上了这段「农闲」。\n\n河把我从田里赶出来的那几个月，正好是国家最需要劳力的时候。于是村里来了人，带着名册，念到我的名字——这一季，你去工地。\n\n我没得选。这不是「招工」，是「征召」。但说句公道话：反正田淹着也没法种，去工地，至少国家管饭。',
        en: 'First, let me tell you my ordinary days, so you understand what those months of being summoned meant.\n\nMy home is a small village by the Nile. My family lives off one small field, barley and wheat; at harvest we hand part to the state and eat the rest.\n\nOur days follow this river entirely.\n\nThere are three seasons each year. One is the flood, Akhet, when the water rises and the fields all drown; one is the sowing season after the water draws back, when we hurry to plant; one is the harvest, when we bring the grain in.\n\nIn those flood months the fields are under water and cannot be worked. In another place, another age, a farmer might sit idle those months, or go hungry.\n\nBut in Egypt, the state had its eye on that idle stretch.\n\nThe months the river drove me out of the fields were exactly when the state most needed labor. So men came to the village with a roll, and read out my name: this season, you go to the site.\n\nI had no choice. This was not "hiring," it was "summoning." But to be fair: the fields were drowned and could not be worked anyway, and at the site, at least, the state fed you.',
      },
      deliverGoal: 'N2 setup — 平时日子 (尼罗河边小村/一小块田种大麦小麦收了交一部分给国家剩下自己吃/全跟着河走) + 三季节 (泛滥季田淹/退水播种季/收割季) + 泛滥几月田在水底没法种 (别处别时代农民可能闲着饿着) + 但埃及国家盯上农闲 (河赶我出田正好国家最需劳力) + 村里来人带名册念名字这季你去工地 + 没得选不是招工是征召 + 公道话: 反正田淹也没法种去工地至少管饭',
      engagementHook: '河把我从田里赶出来的那几个月，正好是国家最需要劳力的时候——村里来人，念到我的名字，我没得选。这不是「招工」，是「征召」。「反正闲着也是闲着，还管饭」，算不算一种让你说不出口拒绝的安排？',
      expectsRealAnswer: false,
    },
    {
      id: 'lab-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '到了工地，我才知道这是个多大的地方。\n\n几万人，聚在一座正在长高的白色石山脚下。我从没见过这么多人聚在一处——比我们那一带所有村子的人加起来还多。\n\n国家没让我们睡在野地里。工地旁边有一座专门给工人住的城，有住的地方、有烤面包的炉子、有发粮发啤酒的地方。\n\n我被编进一个工班——几十个人一组，有头儿，有名字。我们这种小队，会给自己起诨名，刷在石头上。有的队叫「Khufu 的朋友们」这一类——听着挺神气，干起来全是力气活。\n\n（这些刻在石头上的队名，几千年后被考古发现了——这是我们这些没名字的人，留在这座山上为数不多的痕迹之一。）\n\n说实话，刚来的时候，天天有肉吃，我还有点新鲜——在我们村，一年到头也吃不上几回肉。\n\n但很快我就懂了：国家天天给我吃肉，不是因为疼我。是因为，接下来要从我身上榨出的力气，太多了。',
        en: 'Only when I reached the site did I learn how vast a place it was.\n\nTens of thousands gathered at the foot of a white stone mountain rising into the sky. I had never seen so many people in one place, more than all the villages of my district put together.\n\nThe state did not let us sleep in the open. Beside the site stood a town built just for the workers, with places to live, ovens to bake bread, places to issue grain and beer.\n\nI was formed into a work gang, dozens of us to a group, with a chief, with a name. Squads like ours gave ourselves nicknames and painted them on the stones. Some were called things like "the friends of Khufu," grand to the ear, all brute labor in the doing.\n\n(These gang names painted on the stones were found by archaeologists thousands of years later, one of the few traces we nameless people left on this mountain.)\n\nHonestly, when I first came, meat every day felt like a novelty; in my village we ate meat only a few times in a whole year.\n\nBut soon I understood: the state fed me meat every day not out of love for me. It was because the strength it meant to wring from my body, in the days ahead, was so very much.',
      },
      deliverGoal: 'N3 setup — 到工地才知多大 (几万人聚白石山脚/比附近所有村人加起来还多) + 国家没让睡野地 (工人城: 住的地方/烤面包炉/发粮发啤酒) + 被编进工班 (几十人一组有头儿有名字/给自己起诨名刷石头上「Khufu 的朋友们」类听着神气全是力气活) + 括号 anti-fab/史料 (队名几千年后考古发现/是没名字的人留在山上为数不多痕迹之一) + 刚来天天有肉新鲜 (村里一年吃不上几回) + 很快懂: 天天给肉不是疼我是接下来要榨的力气太多',
      engagementHook: '国家天天给我吃肉，不是因为疼我，是因为接下来要从我身上榨出的力气太多了。当「对你好」其实是「为了用得更狠」，你还会感激吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'lab-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n天还没亮，工班的头儿就把你们叫起来。今天的活：把一块大石头，从下面拖到斜坡上去，再往上垒。\n\n这块石头有多重？两三吨——比好几头牛加起来还沉。你们一队几十个人，用粗绳套住石头下的木雪橇，喊着号子，一寸一寸往上拖。前面有人往斜坡上泼水，让雪橇滑一点。绳子勒进你的肩膀，太阳烤在你背上，汗流进眼睛里。\n\n你抬头想看一眼塔顶——看不到。从你这个角度，这座山高得没有顶，你只看得见眼前这块石头，和脚下这段斜坡。\n\n这座山，在法老眼里是升天的台阶，在总监眼里是组织的难题。在你眼里，它就是你自己累弯的脊背——你看不见它的伟大，你只感觉得到它的重量。\n\n这一刻你得想：你正在亲手垒一座你永远住不进去、连塔顶都看不到的山。你心里到底是什么滋味——是「我在参与一件神圣的大事」，还是「我只是一头被借来拉车的牲口」？还是，这两种感觉，会在同一个你心里，同时存在？',
        en: 'Now you are me.\n\nBefore dawn the gang chief rouses you. Today\'s work: drag one great stone from below up onto the ramp, and stack it higher.\n\nHow heavy is this stone? Two or three tonnes, heavier than several oxen put together. Dozens of you to a gang, a thick rope around the wooden sledge beneath the stone, chanting in time, you drag it up inch by inch. Someone ahead pours water on the ramp so the sledge slides a little. The rope cuts into your shoulder, the sun bakes your back, sweat runs into your eyes.\n\nYou look up to glimpse the peak, you cannot see it. From your angle this mountain has no top; you see only the stone before you and the stretch of ramp beneath your feet.\n\nTo the pharaoh this mountain is the stairway to the sky; to the overseer it is a problem of organization. To you it is your own back, bent with exhaustion. You cannot see its grandeur; you can only feel its weight.\n\nHere you must think: you are building, with your own hands, a mountain you will never live inside, whose peak you cannot even see. What is it like in your heart, "I am part of something sacred and great," or "I am only a beast borrowed to pull a cart"? Or can both feelings live in the same you, at the same time?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 天没亮工班头儿叫起 + 今天活: 把大石从下拖上斜坡再往上垒 + 石头两三吨 (比几头牛还沉) + 一队几十人粗绳套木雪橇喊号子一寸寸拖 (前面泼水让雪橇滑/绳勒肩太阳烤背汗进眼) + 抬头想看塔顶看不到 (从你角度山高得没顶只看见眼前石头脚下斜坡) + 山在法老眼是升天台阶在总监眼是组织难题在你眼是自己累弯的脊背 (看不见伟大只感觉得到重量) + 自我拷问: 你在垒一座永远住不进/连塔顶都看不到的山 / 是参与神圣大事 还是被借来拉车的牲口 / 还是两种感觉同时存在',
      engagementHook: '我亲手垒一座我永远住不进、连塔顶都看不到的山。我心里到底是「我在参与一件神圣的大事」，还是「我只是一头被借来拉车的牲口」？这两种感觉，会不会同时都在？',
      expectsRealAnswer: false,
    },
    {
      id: 'lab-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '在工地上，死亡不是传说，是每隔一阵就会撞见的事。\n\n两三吨的石头，靠绳子和人力在斜坡上拖。绳子会断，人会脚下一滑，石头会倒退着压下来。我亲眼见过，也亲耳听过夜里有人疼得喊。\n\n但我也见过另一面，是电影里从来不演的。\n\n我有个同班的，腿被石头砸断了。要是在我们村，断成那样，多半就废了，或者死了。可在工地上，有人来给他接骨、固定、照料。后来他的骨头居然长好了。\n\n（这不是我编的。几千年后，考古的人挖出工人的骨头，发现上面有愈合的骨折，甚至有做得很成功的截肢——证明我们受了重伤，是被治、被救的，不是用坏就扔。）\n\n你看，这就是我说的那个「中间地带」：这座山照样会砸死人、累垮人；可它也真的管我们饭、治我们的伤、葬我们的人。\n\n它不是地狱，也不是天堂。它是一个让你又苦、又不至于绝望，于是能一直干下去的地方。',
        en: 'On the site, death was not a legend; it was something you ran into every so often.\n\nStones of two or three tonnes, dragged up the ramp by rope and muscle. Ropes snap, a man\'s foot slips, the stone slides back and crushes down. I saw it with my own eyes, and at night I heard men cry out in pain.\n\nBut I also saw the other side, the side the movies never show.\n\nA man in my gang had his leg broken by a stone. In our village, broken like that, he would most likely have been crippled, or dead. But on the site someone came to set the bone, splint it, tend it. Later his bone actually healed.\n\n(I am not making this up. Thousands of years later, the people who dig found workers\' bones with healed fractures, and even amputations done with real success, proof that when we were badly hurt we were treated and saved, not used up and thrown away.)\n\nThis is what I mean by that "middle ground": this mountain still crushed men to death, still wore men down; and it also truly fed us, tended our wounds, buried our dead.\n\nIt was not hell, and it was not heaven. It was a place that kept you in hardship yet just short of despair, so that you could keep working, on and on.',
      },
      deliverGoal: 'N5 story — 工地上死亡不是传说是每隔一阵撞见的事 (两三吨石绳子人力拖/绳断脚滑石头倒退压下/亲眼见亲耳听夜里有人疼喊) + 但也见另一面电影从不演 + 同班一个腿被砸断 (在村里多半废了或死/工地有人接骨固定照料后来居然长好) + 括号 anti-fab/史料 (几千年后考古挖工人骨头有愈合骨折甚至成功截肢/证明重伤被治被救不是用坏就扔) + 这就是中间地带 (照样砸死累垮人但真管饭治伤葬人) + 不是地狱不是天堂 (让你又苦又不至绝望于是能一直干下去)',
      engagementHook: '这座山照样砸死人、累垮人，可它也真的管我饭、治我的伤。它不是地狱，也不是天堂——是一个让你又苦、又不至于绝望、于是能一直干下去的地方。你觉得，哪一种处境更可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'lab-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在，看这座山最关键的一刻。\n\n同一座 146 米的山，我们三种人看它，看见的是三样完全不同的东西。\n\n法老抬头看它，看见的是「他的永恒」——他死后变神的台阶。\n\n那个组织一切的总监，他看见的是「一道组织的难题」——几万人的吃饭、运石、治伤、安葬，全要他对接。\n\n而我，最底下这个拖石头的人，抬头根本看不见塔顶。这座山在我眼里，就是我自己累弯的脊背。我看不见它的伟大，我只感觉得到它的重量。\n\n更扎心的是：法老的名字，会被这座山永远记住；总监的名字，刻在他自己旁边的大墓里；可我呢？我垒了这座山，我的名字不会刻在它上面任何一块石头上。\n\n我们这些人，唯一留下的，是工班刷在石头上的诨名——「Khufu 的朋友们」之类。不是我们每个人的名字，是我们这一队的外号。\n\n建起这座山的几万双手，绝大多数，连一个名字都没留下。这座让一个人永生的山，恰恰是由一群注定被遗忘的人垒起来的。',
        en: 'Now, look at the most decisive thing about this mountain.\n\nThe same 146-meter mountain, the three kinds of us look at it and see three entirely different things.\n\nThe pharaoh looks up and sees "his eternity," the stairway by which he becomes a god after death.\n\nThe overseer who organizes it all sees "a problem of organization," the food, stone-hauling, wound-tending, burials of tens of thousands, all of which he must join together.\n\nAnd I, the one at the very bottom hauling stone, cannot see the peak at all. To me this mountain is my own back, bent with exhaustion. I cannot see its grandeur; I can only feel its weight.\n\nWhat cuts deeper: the pharaoh\'s name will be remembered forever by this mountain; the overseer\'s name is carved in his own great tomb beside it; and me? I built this mountain, and my name will not be carved on a single one of its stones.\n\nThe only thing people like us left behind is the gang nickname painted on the stones, things like "the friends of Khufu." Not each of our names, but our squad\'s byname.\n\nThe tens of thousands of hands that raised this mountain left, the vast majority, not even a single name. This mountain that makes one man eternal was raised, precisely, by a crowd of people destined to be forgotten.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 同一座 146 米山三种人三样东西 (法老抬头看他的永恒升天台阶; 总监看组织难题几万人吃饭运石治伤安葬要他对接; 我最底下拖石抬头看不见塔顶/山是自己累弯的脊背看不见伟大只感觉重量) + 更扎心: 法老名字被山永远记住/总监名字刻在自己大墓/我垒了山名字不刻任何一块石头上 + 我们唯一留下的是工班诨名「Khufu 的朋友们」(不是每人名字是这队外号) + 几万双手绝大多数连一个名字没留 + 让一人永生的山恰由一群注定被遗忘的人垒起',
      engagementHook: '法老的名字被这座山永远记住，总监的名字刻在自己的大墓里，可我垒了这座山，名字不刻在任何一块石头上。让一个人永生的山，恰恰是由一群注定被遗忘的人垒起来的。这公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'lab-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你可能会问我：你又苦又危险，名字还留不下，你为什么不反抗？为什么不逃？\n\n这个问题，得这么回答。\n\n第一，逃不掉，也不划算。我是被名册征召的，跑了家里人要担责；而且田淹着，跑回去也没法种地，工地至少管饭。\n\n但第二个原因，才是真正的关键，也是电影最不愿意拍的：很多时候，我们是真信。\n\n在我们的信念里，法老不是「压迫我的暴君」。他是活着的神。他活着，世界的秩序才不塌；他死后变成神，会从天上继续护佑埃及——护佑我们这些种地的人，护佑尼罗河按时泛滥。\n\n所以替法老建这座升天的山，在我心里，不只是「服劳役」。它是在维护整个世界不塌掉。我在这座山上流的汗，在我自己看来，是有意义的。\n\n这一点你要想清楚：我没有被锁链拴着，我有时候是「心甘情愿」的。可这个「心甘情愿」，是我自己想明白的，还是从小被教成这样的？这两者，分得清吗？',
        en: 'You might ask me: hard, dangerous, your name left behind nowhere, why do you not resist? Why not run?\n\nThis question must be answered so.\n\nFirst, there is no escaping, and it does not pay. I was summoned by the roll; if I ran, my family would answer for it; and the fields were drowned, so running home meant no farming anyway, while the site at least fed me.\n\nBut the second reason is the real heart of it, and the one the movies least want to film: much of the time, we truly believed.\n\nIn our belief, the pharaoh was not "the tyrant who oppresses me." He was a living god. While he lived, the order of the world did not collapse; when he died and became a god, he would watch over Egypt from the sky, watch over us who farm, watch over the Nile to flood on time.\n\nSo to build this stairway-to-the-sky for the pharaoh was, in my heart, not merely "serving forced labor." It was keeping the whole world from collapsing. The sweat I shed on this mountain, in my own eyes, had meaning.\n\nThis you must think through: I was not chained; at times I was "willing." But this "willingness," did I reason my way to it myself, or was I taught it from childhood? Can those two be told apart?',
      },
      deliverGoal: 'N7 story — 你可能问又苦又危险名字留不下为什么不反抗不逃 + 第一逃不掉不划算 (名册征召跑了家人担责/田淹跑回去没法种工地至少管饭) + 第二个原因真正关键电影最不愿拍: 很多时候我们真信 + 信念里法老不是压迫的暴君是活着的神 (他活着世界秩序不塌/死后变神从天护佑埃及-护佑种地人护佑尼罗河按时泛滥) + 替法老建升天山不只是服劳役是维护整个世界不塌 (流的汗自己看来有意义) + 自我拷问: 没被锁链有时心甘情愿 / 但这心甘情愿是自己想明白的还是从小被教成这样 / 分得清吗',
      engagementHook: '我没被锁链拴着，有时候是「心甘情愿」替神王建塔——因为我真信这是在维护整个世界不塌。可这份「心甘情愿」，是我自己想明白的，还是从小被教成这样的？这两者，分得清吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'lab-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '在我身后，还有比我更沉默的人。\n\n你能从这一遍听见我说话，已经是侥幸了。因为考古的人挖出了工人城、挖出了我们的墓地、挖出了带愈合骨折的骨头、还挖出了工班刷在石头上的诨名——这些东西替我们这群没名字的人，说了几句话。\n\n但你想想：这座山，是几万双手垒起来的。考古能挖出来的痕迹，只够拼出一个「大概的我」。我们每一个人——叫什么、家里有几口、怕不怕死、想不想家——一个字都没留下。\n\n国家给我们记账，但记的是「哪个班今天搬了几块石头、领了多少粮」。账上有我们的力气，没有我们的名字。\n\n更别说还有在家的人。我来工地这几个月，我的妻子、孩子在村里种地、交粮，养着我，也养着这个能建金字塔的国家。他们的付出，比我更看不见，连一块刻着诨名的石头都没有。\n\n所以你得记住：你这一遍听见的「我」，是几万个沉默者里，碰巧被几根骨头、几行账、几个诨名留住的那一个。我替不了他们说话。我只能提醒你：他们存在过。',
        en: 'Behind me stand people more silent than I am.\n\nThat you can hear me speak in this pass at all is already luck. Because the people who dig unearthed the workers\' town, unearthed our burial ground, unearthed bones with healed fractures, and unearthed the gang nicknames painted on the stones, these things spoke a few words for the nameless crowd of us.\n\nBut think: this mountain was raised by tens of thousands of hands. The traces archaeology can dig up are only enough to piece together "a rough me." Every one of us, our names, how many were in our households, whether we feared death, whether we missed home, not a word of it was left behind.\n\nThe state kept accounts of us, but what it kept was "which gang hauled how many stones today, drew how much grain." On the ledger is our strength, not our names.\n\nNot to mention those at home. The months I was at the site, my wife and children farmed and paid grain in the village, keeping me alive, and keeping alive this state that could build a pyramid. Their effort is even less visible than mine, without even one stone carrying a nickname.\n\nSo you must remember: the "I" you hear in this pass is, of the tens of thousands of the silent, the one who happened to be held in place by a few bones, a few lines of accounts, a few nicknames. I cannot speak for them. I can only remind you: they existed.',
      },
      deliverGoal: 'N8 story — 我身后还有更沉默的人 + 你能听见我说话已是侥幸 (考古挖出工人城/我们墓地/带愈合骨折的骨头/工班诨名 — 替没名字的人说了几句话) + 但山是几万双手垒的考古痕迹只够拼一个大概的我 (每个人叫什么家里几口怕不怕死想不想家一字没留) + 国家记账记的是哪班搬几块领多少粮 (账上有力气没名字) + 更别说在家的人 (妻子孩子种地交粮养我也养这能建金字塔的国家/付出比我更看不见连一块刻诨名的石头都没有) + 你听见的我是几万沉默者里碰巧被几根骨头几行账几个诨名留住的一个 + 替不了他们说话只能提醒你他们存在过',
      engagementHook: '账上有我们的力气，没有我们的名字。在家替我种地交粮的妻子孩子，付出比我更看不见，连一块刻着诨名的石头都没有。那些没被任何东西留住的人，就等于没存在过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'lab-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '这座山，比我和我那一代人，活得久太多了。\n\n我们死了，化成了金字塔脚下墓地里的骸骨。法老死了，被葬进山里，按信念升了天，变成了神。\n\n而那座我们一块块垒上去的山，立了下来——立了 4500 年，到你们的时代还立着。它成了古代世界七大奇迹里，唯一一个基本保存到今天的。全世界的人来看它，惊叹它。\n\n可他们惊叹的时候，大多想的是「古埃及人真厉害」「法老真伟大」。\n\n很少有人，会想到我们——那几万个一块石头一块石头把它垒上去、又一个名字都没留下的人。\n\n这就是我想让你看见的：一座奇迹立得越久、越被惊叹，垒它的那些普通人，反而越容易被忘掉。山越伟大，地基里的人越沉默。\n\n所以当几千年后，有人终于挖出我们的骨头、我们的诨名，开始说「等等，建塔的不是鞭子下的奴隶，是有名字、被供养、会受伤会死的真人」——那一刻，我们这些垒山的人，才算第一次，被真正看见了一点点。',
        en: 'This mountain outlived me and my generation by far too much.\n\nWe died and turned into the bones in the burial ground at the foot of the pyramid. The pharaoh died, was buried inside the mountain, and by belief rose into the sky and became a god.\n\nAnd that mountain we stacked up stone by stone stood, stood for 4,500 years, still standing in your age. It became the only one of the seven wonders of the ancient world to survive largely to this day. People from all over the world come to see it, to marvel at it.\n\nBut when they marvel, most of them think "the ancient Egyptians were so capable," "the pharaoh was so great."\n\nFew of them think of us, the tens of thousands who stacked it up one stone at a time and left not a single name.\n\nThis is what I want you to see: the longer a wonder stands and the more it is marveled at, the more easily the ordinary people who built it are forgotten. The greater the mountain, the more silent the people in its foundation.\n\nSo when, thousands of years on, someone at last dug up our bones and our nicknames and began to say, "wait, the builders were not slaves under the whip but real people with names, provisioned, who were injured and who died," in that moment, we who stacked the mountain were, for the first time, truly seen, a little.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 山比我和我那代人活得久太多 + 我们死化成塔脚墓地骸骨/法老葬进山升天变神 + 我们一块块垒的山立了 4500 年到你们时代还立 (七大奇迹唯一基本保存到今天/全世界来看惊叹) + 但惊叹时大多想古埃及人真厉害法老真伟大 + 很少人想到我们 (几万个一块块垒又一个名字没留的人) + 我想让你看见: 奇迹立得越久越被惊叹垒它的普通人越易被忘 (山越伟大地基里人越沉默) + 几千年后有人挖出骨头诨名开始说建塔不是鞭子奴隶是有名字被供养会受伤会死的真人 — 那一刻我们垒山的人才第一次被真正看见一点点',
      engagementHook: '一座奇迹立得越久、越被惊叹，垒它的那些普通人反而越容易被忘掉。山越伟大，地基里的人越沉默。直到几千年后有人挖出我们的骨头，说「建塔的是真人，不是鞭子下的奴隶」——为什么「看见普通人」这么难，这么晚？',
      expectsRealAnswer: false,
    },
    {
      id: 'lab-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看这座山，两种说法都站得住。\n\n一种说法：这是一台吃人的机器，被刷上了一层「神圣」的漆。说到底，是一个人为了自己一个人的永生，征召了几万个像我这样的普通人，用我们的脊背、我们的断骨、我们的命，给他垒一座坟。我们绝大多数连名字都没留下。所谓「为神王 = 为世界秩序」，不过是让我们心甘情愿被用掉的那层漆。\n\n另一种说法：这是人类第一次证明，普通人聚在一起，能造出多惊人的东西。我们这些种地的农民，被组织起来、被供养着、被医治着，亲手垒出了一座立了 4500 年的奇迹。它不只是法老一个人的永生，它也是我们这几万双手的力量，第一次被推到了人类能力的极限。这座山里，有他的虚荣，也有我们的伟大。\n\n两种说法都站得住。它既是一座吃人的坟，也是一座由无名者垒成的奇迹。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at this mountain. Both views stand.\n\nOne view: it is a machine that eats people, painted over with a coat of "the sacred." In the end, one man, for the eternity of himself alone, summoned tens of thousands of ordinary people like me, and with our backs, our broken bones, our lives, stacked him a tomb. The vast majority of us left not even a name. The so-called "for the god-king equals for the order of the world" was only the coat of paint that made us willing to be used up.\n\nThe other view: it is the first time humankind proved how astonishing a thing ordinary people, gathered together, can make. We farmers, organized, provisioned, healed, stacked up with our own hands a wonder that has stood 4,500 years. It is not the eternity of the pharaoh alone; it is also the strength of our tens of thousands of hands, pushed for the first time to the limit of human power. In this mountain is his vanity, and also our greatness.\n\nBoth views stand. It is a tomb that eats people, and it is a wonder raised by the nameless.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (吃人机器刷了层神圣的漆/一人为自己永生征召几万普通人用脊背断骨命垒坟/绝大多数没留名字/为神王=为世界秩序不过是让我们心甘情愿被用掉的漆) / 另一种说法 (人类第一次证明普通人聚一起能造多惊人的东西/我们农民被组织供养医治亲手垒出立 4500 年奇迹/不只法老永生也是我们几万双手力量被推到人类极限/山里有他虚荣也有我们伟大) / 两种都站得住既是吃人的坟也是无名者垒成的奇迹 / 想 30 秒',
      engagementHook: '一种说法：它是一台吃人的机器，刷了层「神圣」的漆。另一种说法：它是无名者用双手垒出的、立了 4500 年的奇迹。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'lab-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个尼罗河边种地的农民，一道绳子勒出的肩印，几个月又几个月被征召去拖石头，一个不会被刻在任何石头上的名字——你会怎么评价这样一座山？\n\n一座 4500 年还立着的奇迹，是用我们几万个无名者的脊背垒起来的。它是吃人的坟，还是无名者的伟大？你怎么评？\n\n不过先记住一件事：你这一遍，听的只是最底下、被这座山压着的人。真正下令的法老 Khufu、把这一切组织起来的总监 Hemiunu，各有各的说法——换个视角再走一遍，你会听见法老怎么说「我在维护整个世界」，听见总监怎么说「我已经尽力少死人了」，也看看你刚才站的这一边，还站不站得住。\n\n再想一步：今天你身边，有没有一件「很多人一起干成的大事」——一场比赛、一个项目、一台晚会——最后被记住、被表扬的，只有站在台上的那几个？那些在后面搬桌子、做杂活、把事撑起来却没人提名字的人，你看得见吗？\n\n那时候，你会只顾着惊叹那座「山」有多伟大，还是会回过头，去看见、去念出那些垒山的、没名字的人？',
        en: 'Having walked my whole life, a farmer who tilled the land by the Nile, a shoulder grooved by rope, month after month summoned to haul stone, a name that will be carved on no stone, how would you judge a mountain like this?\n\nA wonder still standing after 4,500 years, raised from the backs of tens of thousands of nameless us. Is it a tomb that eats people, or the greatness of the nameless? How do you judge it?\n\nBut first, remember one thing: this pass, you heard only the one at the very bottom, pressed beneath this mountain. The pharaoh Khufu who actually gave the order, and the overseer Hemiunu who organized it all, each have their own case. Run it again through another lens and you will hear the pharaoh say "I was keeping the whole world from collapsing," hear the overseer say "I already did my best to let fewer men die," and see whether the side you just stood on still holds.\n\nThen take one more step: in your own life today, is there a "great thing many people did together," a competition, a project, a show, where in the end only the few on the stage are remembered and praised? The people in the back who moved the tables, did the odd jobs, held the whole thing up but whose names no one mentioned, can you see them?\n\nWhen that happens, will you only marvel at how great the "mountain" is, or will you turn back, to see, and to say aloud, the nameless people who stacked it?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价这样一座山 (尼罗河边农民/绳勒肩印/月复一月被征召拖石/不会刻在任何石头上的名字 → 吃人的坟 vs 无名者的伟大) + cross-perspective pointer ① 你这一遍听的只是最底下被压着的人 ② 下令的 Khufu/组织的 Hemiunu 各有说法换视角再走一遍 (法老说我维护整个世界/总监说我尽力少死人/看你刚站的这边还站不站得住) + transfer「今天你身边很多人干成的大事最后被记住的只有台上几个 (后面搬桌子做杂活撑起事却没人提名字的人你看得见吗)」+ 你会只顾惊叹山多伟大 还是回过头看见念出垒山的没名字的人',
      engagementHook: '走完我这一生，你会怎么评价这样一座山？再想一步：今天你身边那件「很多人一起干成的大事」，最后被记住的只有台上那几个——后面把事撑起来却没人提名字的人，你看得见吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'khufu':                          khufuLens,
  'hemiunu':                        hemiunuLens,
  'pyramid-laborer-receiving-end':  pyramidLaborerLens,
};

// receiving-end 优先 pattern:
// 无权方 + 被历史几乎抹去名字一方 + N1 gold-standard hook + N6「同一座山三双眼睛」跨 lens 对位 + N10/N11 吃人的坟 vs 无名者的奇迹 closing
export var defaultLens = 'pyramid-laborer-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'ancient-egypt-2550bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'khufu': 30, 'hemiunu': 30, 'pyramid-laborer-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-24',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「同一座 146 米的山, 三双眼睛看见三样东西」(Khufu: 升天机器/我的永恒; Hemiunu: 组织难题/代价; 劳工: 自己累弯的脊背/抬头看不到塔顶/名字不刻在山上)',
    'defaultLens: pyramid-laborer-receiving-end — 受影响者优先 (无权方 + 被历史几乎抹去名字一方 + gold-standard N1 hook + N10/N11 吃人的坟 vs 无名者的奇迹)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'MYTH BUST: 金字塔非鞭子下的外族奴隶建 — 现代考古 (Heit el-Ghurab 工人城 + 工人墓地) 证明本地埃及农民泛滥季 (Akhet) 轮班征召 (corvée), 吃面包啤酒牛肉鱼/受伤被治 (愈合骨折+截肢)/死后葬塔脚. 但非好莱坞鞭子奴隶亦非快乐工人 — 真相在中间 (仍强制/危险/不可自选)',
    'anti-fab: 不伪造象形文字引文或假日记; Diary of Merer (Wadi al-Jarf 莎草纸, 真实出土, Khufu 在位第 27 年船运 Tura 石灰岩) 标注真实史料 + 简化转述; 工人骨头愈合骨折/工班诨名/Khufu 7.5cm 象牙小像 用括号短句标考古来源; 劳工 lens 是「合成代表」在视角卡片一次性声明 (非伪造具体真人)',
    'cultural ban 已扫: 用 法老/维西尔 vizier/书吏 scribe/王室/mastaba/Ma\'at/Akhet/Tura/corvée; 无 丞相/太子/圣旨/龙袍/玉玺/金銮殿 等中国化词',
    'BCE 日期自检: 较大数字=较早; Khufu 约公元前 2589-2566 在位; 大金字塔约公元前 2550; Herodotus 约公元前 5 世纪 (建塔约 2000 年后); §8 同时代中国 = 龙山文化晚期/传说五帝时代',
    'cross-Topic 锚: 神权王权/大规模动员普通人 → 「为宏大目标可正当征用多少普通人」延续到现代; constitutional-convention-1787「谁被算进/被排除/谁的代价被看见」对位',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
