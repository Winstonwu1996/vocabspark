// ─── Babylonian Exile c.586 BCE Lens-based Storyboard (Story-First v2) ───
//
// Topic: 古以色列与巴比伦之囚 · Ancient Israel & the Babylonian Exile c.586 BCE
// HSS-6.3 古希伯来文明 · AP World 史前根（一神教 / 希伯来圣经起源）
//
// 3 lens (per TOPIC_ROADMAP_G6_G12.md C2 + AUTHORING_PIPELINE 第 8/12 条):
//   - nebuchadnezzar-ii                (perpetrator-actor) — Nebuchadnezzar II r.605-562 BCE 毁第一圣殿 / 掳精英 / 大建巴比伦城
//   - jeremiah                         (lonely-mediator)   — Jeremiah 耶利米 c.650-570 BCE 警告灭国被当叛徒 / 主张流亡中存续
//   - exiled-judean-youth-receiving-end (receiving-end)    — 被掳到巴比伦河边的犹太少年 (composite, 基于《诗篇》137「我们在巴比伦河边坐下哭泣」)
//
// 跨 lens micro-detail (N6 anchor):
//   「带不带得走的家」— 圣殿宗教 (一座建筑 + 一个地点) vs 书的宗教 (一本书 + 任何地点):
//   - Nebuchadnezzar N6: 我烧得掉圣殿 (一座建筑)，烧不掉一个写在书里的观念
//   - Jeremiah N6: 我写信劝同胞在巴比伦盖房种园 — 把信仰带着走的蓝图
//   - 少年 N6: 圣殿没了，他第一次明白「神不在那座楼里，在我们带得走的书里」
//
// 跨 Topic 锚:
//   - 巴比伦之囚 → black-death-1347 Devorah (犹太离散史源头, 1349 Strasbourg Devorah 是这条 ~2000 年离散线的延续, 强闭环)
//   - Jeremiah 不被同胞接受的先知 → reformation-1517 (挑战正统母题)
//   - 流亡中保存信仰 (经典成文) → C1 hammurabi-code 书吏 (文字保存文明母题)
//
// defaultLens = 'exiled-judean-youth-receiving-end' (受影响者优先 pattern: 少年 + 流亡一代 + 跨 Topic 离散线源头)
//
// STRUCTURE SPEC (simple-binary, 9-node arc):
//   - 9 nodes per lens
//   - 220-360 CN chars/node; 最多 2 个 anchor 节点可到 480 (NOT 550); 其余 ≤380
//   - N1 hook / N2-N3 setup / N4 personal peak「你就是 TA」/ N5 story / N6 anchor=cross-lens micro-detail
//     / N7 zoom-out + topic connection / N8 = synthesis expectsRealAnswer:true / N9 = closing meta expectsRealAnswer:true
//   - expectsRealAnswer: ONLY N8 + N9 = true (exactly 2/lens); all others false
//   - N6 gate RUNTIME-injected — NO 歇脚点/想停就停 wording authored here
//
// per AUTHORING_PIPELINE.md 铁律 (cultural ban: 圣殿/巴比伦/先知/希伯来圣经/犹大王国, NEVER 庙/国师/翰林/玉玺/朕/太子;
//   em-dash 预算 ≤1-2/node; synthesis voice CN「一种说法/另一种说法/想30秒」EN「One view —/The other view —/Take thirty seconds. Both sides stand.」;
//   anti-fab 括号短句 (合成少年, 基于《诗篇》137); no fabricated scripture; 文化精度: 犹太信仰传统称谓一致, Aba 与 black-death Devorah 一致)
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Nebuchadnezzar II (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var nebuchadnezzarLens = {
  id: 'nebuchadnezzar-ii',
  name: 'Nebuchadnezzar II',
  nameCn: '尼布甲尼撒二世',
  role: 'perpetrator-actor',
  perspectiveTag: 'babylon-conqueror',
  icon: '🏛️',
  description: {
    cn: '他是当时世上最有权的人，正坐在巴比伦的王座上，盯着一份密报：那个被他立的傀儡王 Zedekiah 又一次偷偷联络埃及反了。这一遍让你坐进他冷下来的位置，温柔的办法已经没用,他在两条路里挑:再换个傀儡照旧,还是这次烧了对方最神圣的圣殿、把整个王室拔根,看他下不下得了这把会结几代人仇的刀。',
    en: 'He is the most powerful man alive, on the throne of Babylon, staring at a fresh report: Zedekiah, the puppet king he set up, has secretly reached out to Egypt and revolted a second time. This pass puts you in his seat as the heat turns cold; the gentle method has failed, and he is weighing two roads, swap in another puppet and carry on, or this time burn the other people\'s holiest Temple and pull their royal house out by the root, and you watch whether he can bring down a stroke that will breed hatred for generations.',
  },
  storyboard: [
    {
      id: 'neb-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '公元前 586 年。我的军队站在耶路撒冷城外，已经围了快一年半。城里断了粮，人在饿死。\n\n我是 Nebuchadnezzar（尼布甲尼撒），巴比伦的王。这座小城叫犹大王国的首都，三番五次背叛我，靠埃及给它撑腰。这一次，我不只要它投降。\n\n别的国王打赢了，抢一笔财宝、立个听话的王，就走了。我不一样。我要烧掉这座城里他们最神圣的那栋楼——他们叫它圣殿——再把他们的国王、祭司、工匠，全部押到一千多公里外，我的巴比伦。\n\n我要断的，不是他们的兵，是他们的根。\n\n这一遍，你坐进我这个位置：世上最有权的人，正打算用最聪明的办法，让一个民族彻底消失。',
        en: '586 BCE. My army has stood outside Jerusalem for nearly a year and a half. The city is out of food. People are starving inside.\n\nI am Nebuchadnezzar, king of Babylon. This small city is the capital of the Kingdom of Judah, which has betrayed me again and again, leaning on Egypt to prop it up. This time I do not only want its surrender.\n\nOther kings, when they win, seize some treasure, set up an obedient puppet king, and leave. I am different. I will burn the building they hold holiest in this city, the one they call the Temple, and I will march their king, their priests, their craftsmen more than a thousand kilometers to my Babylon.\n\nWhat I mean to cut is not their soldiers. It is their root.\n\nThis pass puts you in my seat: the most powerful man alive, about to use the cleverest method to make a people vanish for good.',
      },
      deliverGoal: 'N1 hook — 586 BCE 围耶路撒冷一年半断粮 + Nebuchadnezzar 自我介绍 (巴比伦王/世上最有权) + 不只要投降要「断根」(烧圣殿/掳国王祭司工匠到巴比伦) + 这一遍视角',
      engagementHook: '我要断的不是他们的兵，是他们的根。你信「彻底毁掉一个对手，要毁的不是它的人，是它的精神」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'neb-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我为什么这么做。\n\n我接手巴比伦的时候，它刚从亚述帝国的废墟里站起来。公元前 605 年，我在卡尔基米什把埃及大军打垮，从那天起，两河流域到地中海东岸，没人能挡我。\n\n但我最得意的不是打仗。是建城。我把巴比伦修成当时世界上最大、最富的城——城墙厚到可以在上面赛马车，幼发拉底河从城中穿过，运河像血管一样铺开，神庙塔高得能戳进云里。各国的使节来一趟巴比伦，回去就再也忘不了。\n\n我治下有几十个被征服的民族。犹大只是其中很小、很不起眼的一个——一个夹在埃及和我之间的山地小国。\n\n它本该乖乖进贡，安安静静做我的附庸。可它偏不。',
        en: 'First, who I am, so you understand why I did this.\n\nWhen I took over Babylon, it had just risen from the ruins of the Assyrian Empire. In 605 BCE I crushed the Egyptian army at Carchemish, and from that day, from the rivers of Mesopotamia to the eastern shore of the sea, no one could stand against me.\n\nBut what I am proudest of is not war. It is building. I made Babylon the largest, richest city in the world, walls thick enough to race chariots upon, the Euphrates running through its heart, canals laid out like veins, temple-towers high enough to pierce the clouds. Envoys from every land came once to Babylon and never forgot it.\n\nUnder my rule were dozens of conquered peoples. Judah was only a small, unremarkable one, a little hill-country kingdom caught between Egypt and me.\n\nIt should have paid its tribute and stayed quietly my vassal. But it would not.',
      },
      deliverGoal: 'N2 setup — Nebuchadnezzar 出身 (接手刚从亚述废墟站起的巴比伦/605 BCE 卡尔基米什打垮埃及称霸) + 最得意是建城 (世上最大最富/城墙运河神庙塔) + 治下几十民族犹大很小 (夹埃及与巴比伦的山地小国) + 它本该乖乖进贡却不',
      engagementHook: '我治下几十个民族，犹大小到不起眼，本该乖乖进贡。一个小国偏要硬抗最强的帝国——你觉得这是骨气，还是不自量力？',
      expectsRealAnswer: false,
    },
    {
      id: 'neb-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我对犹大，本来很有耐心。\n\n公元前 597 年，犹大第一次停止进贡、押注埃及反我。我带兵围了耶路撒冷。年轻的犹大王投降了。\n\n那一次，我没赶尽杀绝。我只掳走了「头部」——国王、王室、贵族、工匠、士兵，几千人，押回巴比伦。我又给犹大立了一个新王，是个我能拿捏的傀儡，叫 Zedekiah。我的意思很清楚：教训你一次，留你一条命，你以后老实点。\n\n这是我们巴比伦的标准做法：掳走一个民族的脑子，留下种地的穷人。脑子搬到帝国中心，这个民族在它自己的土地上，就再也组织不起来反抗。\n\n聪明吧？我以为这样就够了。\n\n我低估了那个小国的犟。',
        en: 'With Judah, I was patient at first.\n\nIn 597 BCE Judah first stopped its tribute and bet on Egypt against me. I marched on Jerusalem. The young king of Judah surrendered.\n\nThat time, I did not destroy them. I carried off only the "head", the king, the royal house, the nobles, the craftsmen, the soldiers, a few thousand, back to Babylon. And I set up a new king for Judah, a puppet I could control, named Zedekiah. My message was plain: I taught you a lesson and spared your life, so behave from now on.\n\nThis is our standard Babylonian method: carry off a people\'s brain and leave the poor farmers behind. With the brain moved to the heart of the empire, that people can never organize a revolt on its own soil again.\n\nClever, no? I thought it would be enough.\n\nI underestimated how stubborn that small kingdom was.',
      },
      deliverGoal: 'N3 setup — 597 BCE 第一次被掳 (犹大停进贡押埃及/年轻王投降/只掳头部国王王室贵族工匠/立傀儡 Zedekiah) + 巴比伦标准做法 (掳走脑子留穷人/民族再组织不起来) + 自以为够了低估小国的犟',
      engagementHook: '我以为掳走一个民族的精英，留下种地的穷人，它就反不起来了。「拿走一群人的头脑，剩下的就好控制」——这套算盘，哪里可能算错？',
      expectsRealAnswer: false,
    },
    {
      id: 'neb-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你给了犹大一次机会，立了傀儡王 Zedekiah。可几年后，密报传来：Zedekiah 又被主战派说动，又一次偷偷联络埃及，又反了。\n\n你坐在巴比伦的王座上，气，但更多的是冷。你心里盘算：第一次掳头部、立傀儡——这套「温柔」的办法，它不怕。那只能升级了。\n\n你面前有两条路。一条：再打一次，再换个傀儡，照旧。可这条你已经试过，没用。另一条：这次不留余地——把它的圣殿烧了，把它的王室连根拔了，让这个民族彻底没有「中心」可以再聚拢。\n\n你很清楚第二条更狠，也更彻底。烧别人最神圣的东西，会结下几代人的仇。\n\n但你是个讲效率的征服者。你要的不是它服一时，是它永远散掉。\n\n你会选哪条？',
        en: 'Now you are me.\n\nYou gave Judah one chance and set up the puppet king Zedekiah. But a few years later, the reports come: Zedekiah has been talked round by the war party, has secretly reached out to Egypt again, has revolted again.\n\nYou sit on the throne of Babylon, angry, but more than that, cold. You reckon it through: the first time you carried off the head and set up a puppet, the gentle method, it did not fear that. So there is only escalation.\n\nTwo roads lie before you. One: strike again, swap in another puppet, the same as before. But you have tried that, and it did not work. The other: this time leave no room, burn its Temple, tear out its royal house by the root, so this people has no "center" left to gather around ever again.\n\nYou know the second road is harsher and more final. Burning the holiest thing of others breeds a hatred that lasts generations.\n\nBut you are a conqueror who prizes efficiency. You do not want it to submit for a moment. You want it scattered forever.\n\nWhich road do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Zedekiah 又被主战派说动再反 + 你冷静盘算 (温柔办法没用只能升级) + 两条路 (再换傀儡照旧 vs 烧圣殿拔王室让民族没中心) + 知道第二条结几代仇但你讲效率要它永远散掉 + 你选哪条',
      engagementHook: '温柔的办法它不怕，那就升级——烧掉它最神圣的东西，让它永远散掉。这一刀你下不下得了手？为了「彻底解决」，你愿意结下几代人的仇吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'neb-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我下了手。\n\n公元前 586 年，城破。我的军队系统地拆掉耶路撒冷：扒城墙、烧王宫，最后——烧掉那座圣殿。火光照了一夜。对犹大人来说，那不是烧掉一栋楼，是烧掉了他们整个世界的中心。\n\n傀儡王 Zedekiah 想趁乱逃，被我的人抓了回来。我要让他记住背叛的代价：我当着他的面，杀了他的儿子们。然后弄瞎他的眼睛——让「儿子被杀」成为他这辈子看见的最后一幕。再用铜链锁了，带回巴比伦。\n\n然后是第二批、更大规模的掳掠：又一批王室、祭司、工匠、识字的人，被押上千里的路，走向我的城。\n\n站在巴比伦的城头看他们一队队走进来，我想：这下，犹大没了。没有国王，没有圣殿，没有国家。\n\n按照所有古代的规矩，一个民族到这一步，就该消失了。',
        en: 'I did it.\n\nIn 586 BCE the city fell. My army took Jerusalem apart, methodically: down with the walls, the palace burned, and at last, the Temple burned. The fire lit the whole night. To the people of Judah this was not the burning of a building. It was the burning of the center of their entire world.\n\nThe puppet king Zedekiah tried to flee in the chaos; my men caught him and brought him back. I made him remember the price of betrayal: before his eyes, I killed his sons. Then I put out his eyes, so that "his sons killed" would be the last thing he saw in his life. Then I chained him in bronze and brought him to Babylon.\n\nThen came the second, larger deportation: another wave of the royal house, priests, craftsmen, the literate, marched a thousand kilometers toward my city.\n\nStanding on the wall of Babylon, watching them file in column by column, I thought: now Judah is gone. No king, no Temple, no nation.\n\nBy every rule of the ancient world, a people brought to this point should simply disappear.',
      },
      deliverGoal: 'N5 story — 586 BCE 城破系统拆耶路撒冷 (扒墙烧王宫烧圣殿/对犹大人是烧掉世界中心) + Zedekiah 逃被抓 (当面杀儿子/弄瞎眼/铜链带走) + 第二批更大被掳 (王室祭司工匠识字人) + 犹大没了 (无王无圣殿无国家) + 按古代规矩该消失',
      engagementHook: '我烧了圣殿、拔了王室——没有国王、没有圣殿、没有国家。按古代所有规矩，一个民族到这一步就该消失了。可它真的会消失吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'neb-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '过了些年，从我安置那些犹大人的运河边，传回一些消息，让我第一次觉得不对劲。\n\n我以为掳走他们、烧了他们的圣殿，他们就会像别的民族一样：哭几年，慢慢学巴比伦话、拜巴比伦的神、改巴比伦的名字，三代以后忘了自己是谁。被我吞掉的几十个民族，都是这么没的。\n\n可这群犹大人没有。他们在运河边盖房、种园、做生意，看着是认命了。但晚上他们聚在一起，做一件我没料到的事：他们把口口相传的律法、历史、先知的话，一笔一笔写下来，编成书，然后一遍遍读给孩子听。\n\n我烧得掉一座圣殿——那是一栋楼，砖和木头。可我烧不掉一本书里的东西。一座楼只能立在一个地方；一本书，他们走到哪儿带到哪儿。\n\n我断了他们的国、他们的殿。我没想到，他们正在给自己造一个新的根——一个我够不着、烧不到、带得走的根。',
        en: 'After some years, from the canal-banks where I had settled those people of Judah, word came back that made me uneasy for the first time.\n\nI had thought that, carried off and with their Temple burned, they would do as other peoples did: weep for a few years, slowly learn the Babylonian tongue, worship Babylonian gods, take Babylonian names, and three generations on forget who they were. Every one of the dozens of peoples I swallowed went that way.\n\nBut these people of Judah did not. By the canals they built houses, planted gardens, did business, looking resigned to it. Yet at night they gathered and did something I had not foreseen: they took the law, the history, the words of their prophets, passed down by mouth, and wrote them down clause by clause into a book, then read it to their children, over and over.\n\nI can burn a Temple, a building, brick and timber. But I cannot burn what is inside a book. A building can stand in only one place; a book they carry wherever they go.\n\nI cut off their nation, their Temple. I had not reckoned that they were building themselves a new root, a root I could not reach, could not burn, that they could carry away.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens micro-detail —「带不带得走的家」: 圣殿宗教 (一座楼/一个地点) vs 书的宗教 (一本书/任何地点) + 别的民族被吞 (学巴比伦话拜神改名三代忘记) 但犹大人没有 (运河边盖房种园 + 晚上把律法历史先知话写成书读给孩子) +「我烧得掉一座楼烧不掉一本书里的东西」+ 他们造一个我够不着的根',
      engagementHook: '我烧得掉一座圣殿，那是砖和木头；可我烧不掉一本书里的东西。一座楼立在一个地方，一本书走到哪带到哪。你觉得「带得走的东西」和「带不走的东西」，哪个更难被毁掉？',
      expectsRealAnswer: false,
    },
    {
      id: 'neb-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看我那套「断根」战略最后的结局。\n\n我公元前 562 年死了。又过了二十几年，公元前 539 年，波斯王居鲁士打垮了我的巴比伦；第二年，公元前 538 年，他下令准许那些犹大人回耶路撒冷、重建圣殿。\n\n一部分人回去了，重新立起第二座圣殿。可奇怪的是：很多人没回去。他们在巴比伦已经扎了根，留了下来。从此这个民族就「散」开了——一部分在故土，一部分在巴比伦，后来又散到地中海各地。他们管这叫「离散」。\n\n而正因为他们早在流亡里学会了「靠一本书，不靠一座殿」，散到天涯海角也散不掉。\n\n这条离散的线，拉得比你想象的长。一千八百多年后，在欧洲莱茵河边一座叫 Strasbourg 的城里，还有一个这个民族的女孩，守着同一本书过日子。\n\n我想用一场火让一个民族消失。结果，那场火帮它学会了永远不消失。',
        en: 'Pull the lens back and look at the end of my "cut the root" strategy.\n\nI died in 562 BCE. Some twenty-odd years later, in 539 BCE, the Persian king Cyrus crushed my Babylon; the next year, in 538 BCE, he ordered that those people of Judah be allowed to return to Jerusalem and rebuild the Temple.\n\nSome went back and raised a Second Temple. But strangely, many did not return. They had already put down roots in Babylon and stayed. From then on this people was "scattered", some in the homeland, some in Babylon, later spread across the lands of the sea. They call it the diaspora.\n\nAnd precisely because they had learned in exile to rely on a book, not on a building, scattered to the ends of the earth, they could not be scattered away.\n\nThis line of dispersion runs longer than you would think. More than eighteen hundred years later, in a city on the Rhine in Europe called Strasbourg, there was still a girl of this people, living her days by the same book.\n\nI meant to make a people vanish with one fire. Instead, that fire taught them never to vanish.',
      },
      deliverGoal: 'N7 zoom-out + topic connection — 562 BCE Nebuchadnezzar 死 + 539 BCE 居鲁士灭巴比伦/次年 538 BCE 下诏准归回重建圣殿 (一部分回立第二圣殿/很多人留巴比伦扎根) + 离散 diaspora 格局定型 + 因早学会靠书不靠殿散不掉 + 跨 Topic 锚: 1800 多年后 Strasbourg 莱茵河边女孩同一本书 (black-death Devorah) +「我想用火让民族消失结果火教它永不消失」',
      engagementHook: '我想用一场火让一个民族消失，结果那场火教会了它永远不消失。一个想毁掉对手的人，反而帮对手变强了——历史上还有别的例子吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'neb-n8',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是史上最成功的征服者之一。我打垮埃及，建起世上最辉煌的城，统治几十个民族 43 年。烧圣殿、掳精英，是冷静而有效的帝国战术——大部分被我这么对待的民族，真的就消失了。我做的，是那个时代一个强者该做、也做得最漂亮的事。\n\n另一种说法：我是把对手锤打得更结实的人。我以为「断根」能让犹大消失，可我把他们的精英聚到一起、逼他们在废墟上想清楚「没有圣殿我们还是不是我们」——他们想出的答案，是把信仰写成一本带得走的书，从此谁也灭不掉他们。我亲手送了对手一份它自己都想不到的礼物。\n\n这两边不是「功绩加失误」。是同一场征服的两面——同一把火，既显出我的强大，又点燃了我永远扑不灭的东西。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was one of the most successful conquerors in history. I crushed Egypt, raised the most glorious city in the world, ruled dozens of peoples for 43 years. Burning the Temple and carrying off the elite was cold, effective imperial tactics. Most peoples I treated this way truly did vanish. What I did was what a strong man of that age should do, and I did it better than anyone.\n\nThe other view: I was the man who hammered his enemy into something harder. I thought cutting the root would make Judah disappear, but I gathered their elite together and forced them, on the ruins, to think out whether they were still themselves without a Temple. The answer they found was to write their faith into a book they could carry, and from then on no one could destroy them. With my own hands I gave my enemy a gift it could never have imagined.\n\nThese are not "achievement and mistake." They are two faces of the same conquest, the same fire, showing my strength and lighting what I could never put out.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N8 synthesis — 一种说法 (史上最成功征服者之一/打垮埃及建辉煌城/烧圣殿掳精英是冷静有效战术/大部分民族真消失了) / 另一种说法 (把对手锤打更结实/逼精英在废墟想清楚自我→把信仰写成带得走的书谁也灭不掉/亲手送对手礼物) / 同一把火两面 / 想 30 秒',
      engagementHook: '史上最成功的征服者，和亲手把对手锤打更结实的人——是同一把火的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'neb-n9',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个征服者？\n\n世上最有权的人，用最聪明的战术，要让一个小民族永远消失。结果那场火，反而逼出了一本谁也烧不掉的书，让那个民族活了两千多年。强大与失算，装在同一场胜利里。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有这样的事——有人想用「压制」让一个声音、一个想法、一个人消失，结果反而让它传得更广、扎得更深？也许是网上一句被人拼命删的话，也许是班里一件越被禁越多人知道的事。\n\n那时候你会明白：有些东西，你越想烧掉它，越烧不掉。你怎么看待「想毁掉，反而成全了」这件事？如果有一天换你手握这种权力，你会记得这场火吗？',
        en: 'Having walked my whole life, how would you judge a conqueror like this?\n\nThe most powerful man alive, using the cleverest tactics, to make a small people vanish forever. Instead, that fire forced out a book no one could burn, and that people lived more than two thousand years. Power and miscalculation, packed into the same victory. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there something like this, where someone tries to make a voice, an idea, a person disappear by crushing it, and instead makes it spread wider and root deeper? Maybe a line online that people frantically delete, maybe something at school that more people know the more it is forbidden.\n\nThen you will understand: some things, the more you try to burn them, the less they burn. How do you think about "trying to destroy something and instead completing it"? And if one day it is your turn to hold this kind of power, will you remember this fire?',
      },
      deliverGoal: 'N9 close — 评价征服者 (最有权用最聪明战术要灭民族/火逼出谁也烧不掉的书活两千年/强大与失算同一场胜利) + transfer「今天你身边有没有压制反而让声音/想法/人传更广扎更深 (网上被删的话/越禁越多人知道的事)」+「越想烧越烧不掉」+ 若你手握这种权力会记得这场火吗',
      engagementHook: '我想用一场火让一个民族消失，火却帮它永远活下来。今天你身边，有没有「越想压住、越压不住」的声音或想法？如果换你手握权力，你会记得这场火吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Jeremiah (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var jeremiahLens = {
  id: 'jeremiah',
  name: 'Jeremiah',
  nameCn: '耶利米',
  role: 'lonely-mediator',
  perspectiveTag: 'warning-prophet',
  icon: '📜',
  description: {
    cn: '他是站在耶路撒冷圣殿门口对着进出的人喊「这座殿保不住」的先知,人群里有人冷笑、有人捡石头、有人骂他叛徒乌鸦嘴。这一遍让你站在他被自己人围起来的位置,所有人都信「神住这儿巴比伦打不进来」,只有他一个人公开说「灭国要来了/该想的不是怎么赢是亡国之后我们怎么还能是我们」,看他下一刻为这句话要付什么代价。',
    en: 'He is the prophet standing at the gate of the Temple in Jerusalem, calling out to the people coming and going that this Temple cannot be saved, while the crowd sneers, picks up stones, curses him as a traitor and a bird of ill omen. This pass puts you in his place as his own people close in: everyone believes "God dwells here, Babylon cannot break in," and he alone says out loud, "Destruction is coming, the thing to think about is not how to win but how, after the nation falls, we can still be us," and you watch what he is about to pay for that line.',
  },
  storyboard: [
    {
      id: 'jer-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我站在耶路撒冷的圣殿门口，对着进进出出的人喊：这座殿，保不住。\n\n人群里有人冷笑，有人捡石头，有人骂我叛徒、乌鸦嘴。圣殿是我们全民族最神圣的地方，所有人都信「神住在这儿，巴比伦再强也打不进来」。只有我一个人说：会的，会破的，准备流亡吧。\n\n我是 Jeremiah（耶利米）。神让我做先知——替祂说话的人。这活儿不是算命，是把所有人都不想听的真话，当众说出来。\n\n我说的每一句，都让我更孤立。可我没法不说。\n\n这一遍，你站进我这个位置：你看见了一场灾难正在逼近，你想救大家，可你越是想救，大家越恨你。',
        en: 'I stand at the gate of the Temple in Jerusalem, calling out to the people coming and going: this Temple cannot be saved.\n\nIn the crowd some sneer, some pick up stones, some curse me as a traitor, a bird of ill omen. The Temple is the holiest place of our whole people, and everyone believes "God dwells here, however strong Babylon is, it cannot break in." I alone say: it will, it will fall, prepare for exile.\n\nI am Jeremiah. God made me a prophet, one who speaks for him. This work is not fortune-telling. It is saying out loud, in front of everyone, the truth no one wants to hear.\n\nEvery line I speak leaves me more alone. But I cannot keep from speaking.\n\nThis pass puts you in my place: you can see a disaster bearing down, you want to save everyone, and the more you try to save them, the more they hate you.',
      },
      deliverGoal: 'N1 hook — Jeremiah 在圣殿门口喊「这座殿保不住」+ 人群冷笑捡石头骂叛徒乌鸦嘴 (全民族信神住圣殿打不进来只他一人说会破) + 自我介绍 (先知=替神说真话不是算命/说没人想听的真话) + 每句让他更孤立但没法不说 + 这一遍视角 (想救大家越救越被恨)',
      engagementHook: '所有人都信这地方打不进来，只有我一个人说会破。你越想救大家，大家越恨你。如果你看清了一场灾难，没人信你，你还说不说？',
      expectsRealAnswer: false,
    },
    {
      id: 'jer-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们的处境，你才懂我为什么这么急。\n\n犹大是个山地小国，北靠不上、东边是越来越强的巴比伦，南边是老对手埃及。我们这种小国，活路只有一条：别招惹大帝国，安分进贡，苟着。\n\n可我们的王室里，一直有一派主战的人，总劝国王：「联合埃及，反了巴比伦！神会保佑我们！」每一次听他们的，巴比伦就来一次更狠的报复。\n\n我看得清清楚楚：埃及靠不住，它每次都在关键时刻缩回去，把我们晾在巴比伦的刀口上。靠它反巴比伦，就是拿全国人的命去赌一个根本不会来的救兵。\n\n所以我喊的不是「投降很光荣」。我喊的是：别再赌了。这场仗,我们必输,输了要亡国。该想的不是怎么赢,是亡国之后,我们怎么还能是我们。',
        en: 'First, our situation, so you understand my urgency.\n\nJudah is a small hill kingdom, nothing to lean on to the north, the ever-stronger Babylon to the east, the old rival Egypt to the south. For a small state like ours there was only one way to live: do not provoke the great empires, pay tribute, keep your head down.\n\nBut in our royal house there was always a war party, forever urging the king: "Ally with Egypt, revolt against Babylon! God will protect us!" Every time the king listened, Babylon came back with a harsher revenge.\n\nI saw it clearly: Egypt could not be relied on. Each time, at the decisive moment, it pulled back and left us on Babylon\'s blade. To revolt against Babylon counting on Egypt was to gamble the lives of the whole nation on a rescue that would never come.\n\nSo what I cried was not "surrender is glorious." What I cried was: stop gambling. This war we must lose, and losing it means the end of the nation. The thing to think about is not how to win, but how, after the nation falls, we can still be us.',
      },
      deliverGoal: 'N2 setup — 犹大处境 (山地小国/东边巴比伦越来越强/南边老对手埃及/小国活路只有别招惹大帝国进贡苟着) + 王室主战派劝联埃及反巴比伦 (每次听巴比伦更狠报复) + Jeremiah 看清埃及靠不住 (关键时刻缩回晾我们) + 他喊的不是投降光荣是「别再赌/必输/该想亡国后怎么还是我们」',
      engagementHook: '主战派喊「联合埃及反巴比伦，神会保佑」，我说「埃及靠不住，别拿全国人的命去赌」。一边是热血,一边是冷静的算账——危急关头你更愿意听哪一边?',
      expectsRealAnswer: false,
    },
    {
      id: 'jer-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我为说这些真话，付的代价很真实。\n\n我不是天生想当这个讨人嫌的角色。我年轻时就被神拣选做先知，我推过、怕过——我说我太年轻、不会讲话。可话到了我心里，像火一样，憋着比说出来更难受。\n\n于是我说了几十年。每说一回，下场就重一回。\n\n他们当众羞辱我。把我关起来。有一次主战派的官员说我动摇军心，把我扔进一口枯井——井底是淤泥，没有水也没有吃的，我陷在泥里，差点闷死、饿死。后来是一个外族的太监求情，找了几个人，用破布和绳子，才把我从井底一点点吊上来。\n\n你想想：我拼了命想救这个民族，这个民族却把我扔进井里等死。\n\n说真话的人，常常不是死在敌人手里，是死在自己人手里。',
        en: 'For speaking these truths, the price I paid was real.\n\nI was not born wanting this hated role. In my youth God chose me as a prophet, and I pushed back, I was afraid, I said I was too young and could not speak well. But once the word was in me it was like fire; holding it in was harder than speaking it.\n\nSo I spoke for decades. Each time I spoke, the consequence grew heavier.\n\nThey shamed me in public. They locked me up. Once the officials of the war party said I was breaking the army\'s morale and threw me into a dry well, the bottom thick with mud, no water and no food. I sank in the mud, close to suffocating, close to starving. In the end a foreign court official pleaded for me, found a few men, and with rags and ropes they hauled me up from the bottom, bit by bit.\n\nThink of it: I gave everything to save this people, and this people threw me into a well to die.\n\nThe one who speaks the truth often dies not at the hands of the enemy, but at the hands of his own.',
      },
      deliverGoal: 'N3 setup — 代价 (年轻被神拣选推过怕过/说太年轻不会讲话/但话像火憋着更难受) + 说几十年下场越重 (当众羞辱/关起来/主战派官员说动摇军心扔进枯井淤泥差点闷死饿死/外族太监求情用破布绳子吊上来) + 拼命想救民族民族却把他扔井里 +「说真话的人常死在自己人手里」',
      engagementHook: '我拼了命想救这个民族,这个民族却把我扔进枯井等死。说真话的人,常常不是死在敌人手里,是死在自己人手里。这种「为他们好却被他们恨」的处境,你怎么撑得下去?',
      expectsRealAnswer: false,
    },
    {
      id: 'jer-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n公元前 586 年，最坏的事真的发生了：巴比伦攻破耶路撒冷，烧了圣殿，把一大批人掳走。你预言的灾难，一字不差地来了。\n\n按理说，这是你「赢」的时刻——你早就说会这样，现在被你说中了。可你一点都高兴不起来。你看着圣殿在烧，看着同胞被押上千里的路，心里只有比谁都深的痛。\n\n现在，真正的难题摆在你面前。被掳走的同胞，在巴比伦哭天抢地，一心只盼着「神快点来救我们回家」。他们在等一个奇迹。\n\n你心里清楚：奇迹短期内不会来。他们若一直盼着「马上回家」，就会拒绝在巴比伦扎根，几十年里活在幻想和怨恨里，等到老死，民族也就跟着散了。\n\n你要不要再做一次没人爱听的事——告诉这些已经一无所有的人：别等了，在敌人的城里，好好活下去？',
        en: 'Now you are me.\n\nIn 586 BCE the worst truly happened: Babylon broke into Jerusalem, burned the Temple, carried a great wave of people away. The disaster you foretold came, word for word.\n\nBy rights this is your moment of being "right", you said long ago it would be so, and now it has come true. But you cannot feel the slightest gladness. You watch the Temple burn, watch your people marched off on a thousand-kilometer road, and feel only a grief deeper than anyone\'s.\n\nNow the real problem stands before you. Your people carried off to Babylon weep and wail, fixed on one hope: that God will come quickly and bring them home. They are waiting for a miracle.\n\nYou know in your heart: the miracle will not come soon. If they keep waiting to "go home at once," they will refuse to root themselves in Babylon, will live for decades in fantasy and bitterness, and by the time they die of old age, the people will have scattered with them.\n\nWill you do the unwelcome thing one more time, and tell these people who have already lost everything: stop waiting, and in the enemy\'s city, live well?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 586 BCE 最坏的事真发生 (巴比伦破城烧圣殿掳人/预言一字不差来了) + 不是赢的喜悦只有最深的痛 (看圣殿烧同胞被押) + 真正难题 (被掳同胞哭着只盼神快救回家等奇迹) + 你清楚奇迹短期不来 (一直盼回家就拒绝扎根活在幻想怨恨里民族散了) + 要不要再做没人爱听的事 (劝一无所有的人在敌人城里好好活)',
      engagementHook: '同胞在巴比伦哭着等神来救他们回家;你却看清,奇迹短期内不会来,再等下去民族会散。你要不要再做一次没人爱听的事——劝这些一无所有的人,在敌人的城里好好活下去?',
      expectsRealAnswer: false,
    },
    {
      id: 'jer-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我做了。我提笔，给被掳到巴比伦的同胞写了一封信。\n\n这封信的大意是（不是逐字的原文，是我说话的意思）：在巴比伦盖房子，住下来；种园子，吃你们种出来的；娶妻生子，让人口增多，不要减少；还有最难接受的一句——要为巴比伦这座城求平安，因为那城平安，你们才平安。\n\n你想想这话有多刺耳。我是在让他们：为那个烧了我们圣殿、掳了我们的城，去祈求平安。\n\n可这不是认输。这是我能想到的、唯一能让这个民族活下去的办法。盼着马上复国，是把命押在一个不会来的奇迹上；扎下根、好好活、把信仰带着，才是真的把民族保住。\n\n我赌的不是「我们很快赢」，我赌的是「我们能熬，能活很久，久到风向自己变」。\n\n后来人把这封信，看作犹太人无论流落到哪里都能保住自己的精神蓝图。',
        en: 'I did it. I took up my pen and wrote a letter to my people carried off to Babylon.\n\nThe sense of the letter was this (not the word-for-word text, but the meaning of what I said): build houses in Babylon and settle down; plant gardens and eat what you grow; marry, have children, let your numbers increase and not dwindle; and the hardest line to accept, seek the peace of the city of Babylon, for in its peace you will have peace.\n\nThink how harsh that sounds. I was telling them: pray for the peace of the very city that burned our Temple and carried us off.\n\nBut this was not surrender. It was the only way I could think of to keep this people alive. To hope for an instant return of the kingdom was to stake your life on a miracle that would not come; to put down roots, live well, and carry the faith with you, that was truly to preserve the people.\n\nWhat I bet on was not "we win soon." What I bet on was "we can endure, can live a long time, long enough for the wind itself to change."\n\nLater generations saw this letter as the blueprint by which the Jews could keep themselves wherever they were scattered.',
      },
      deliverGoal: 'N5 story — Jeremiah 写信给被掳同胞 (paraphrase 非逐字: 盖房住下/种园吃自己种的/娶妻生子人口增多/最难接受—为巴比伦城求平安城平安你才平安) + 多刺耳 (为烧圣殿掳我们的城求平安) + 不是认输是唯一能让民族活下去的办法 (盼马上复国押不会来的奇迹/扎根好好活带信仰才保住民族) +「赌的是能熬能活很久久到风向变」+ 后人看作离散精神蓝图',
      engagementHook: '我让他们为「烧了我们圣殿的那座城」祈求平安——不是认输,是因为盼「马上复国」是押注不会来的奇迹,扎根活下去才真能保住民族。「先活下去,赢以后再说」——这是软弱,还是更难的勇敢?',
      expectsRealAnswer: false,
    },
    {
      id: 'jer-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我那封信里，藏着一个比「活下去」更深的东西，连我自己当时都没完全说透。\n\n几百年来，我们的信仰是「圣殿宗教」：神住在耶路撒冷那一座圣殿里，你必须走到那儿、由祭司献祭，才算敬拜了神。神和那栋楼，是绑在一起的。\n\n可现在圣殿烧了。如果神只在那座楼里，那座楼一烧，神是不是就没了？\n\n我劝他们在巴比伦扎根、聚在一起、把神的话写下来读——其实是在说一件惊天动地的事：神不在那栋楼里。神在你们带得走的地方——在你们的话里、书里、聚在一起的人心里。一座楼立在一个地方，会被烧；一本书、一群人，走到天涯海角都带得走。\n\n我没有用这么大的词去说它。我只是写了一封很实在的信：盖房、种园、好好活。可这封信背后的意思是——我们的家，从此不再是一栋会被烧掉的楼，而是一本谁也烧不掉的书。',
        en: 'In that letter of mine lay something deeper than "stay alive", something I myself did not fully spell out at the time.\n\nFor centuries our faith had been a "Temple faith": God dwelt in that one Temple in Jerusalem, and you had to go there, have the priests offer sacrifice, before you had truly worshipped. God and that building were bound together.\n\nBut now the Temple was burned. If God lived only in that building, then once it burned, was God gone?\n\nWhen I urged them to root themselves in Babylon, to gather, to write down and read the words of God, I was really saying something earth-shaking: God is not in that building. God is in what you can carry, in your words, your book, the hearts of the people gathered together. A building stands in one place and can be burned; a book, a people, can be carried to the ends of the earth.\n\nI did not say it in such grand words. I only wrote a very practical letter: build houses, plant gardens, live well. But the meaning behind that letter was, our home from now on is no longer a building that can be burned, but a book no one can burn.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens micro-detail —「带不带得走的家」: 几百年圣殿宗教 (神住一座圣殿/必须去那儿祭司献祭/神与楼绑一起) vs 圣殿烧了若神只在楼里楼烧神没了 + Jeremiah 劝扎根聚一起写神的话读 = 惊天动地的事「神不在楼里/在你们带得走的地方—话里书里人心里」+ 一座楼会被烧一本书一群人带得走 +「我们的家不再是会被烧的楼是谁也烧不掉的书」',
      engagementHook: '我劝他们的那封实在信背后,藏着一句惊天动地的话:神不在那栋会被烧的楼里,在你们带得走的书里、人心里。「家」可以从一个地方,变成一样带得走的东西吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'jer-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看我那些没人爱听的话，最后变成了什么。\n\n我活着的时候，是个被骂叛徒、被扔进枯井的失败者。我没看见结局——我大约公元前 570 年就死了，多半死在埃及。\n\n可我劝同胞做的事，活了下来。他们在巴比伦扎了根，把信仰写成了书。几十年后，波斯王居鲁士放他们归回，一部分人回耶路撒冷重建了圣殿；可更关键的是，他们已经学会了「靠书、不靠一座殿」——从此散到哪儿都散不掉。\n\n「一个被同胞当叛徒、坚持讲正统不爱听的真话的人」——这个角色，后来在历史里一再出现。一千多年后，欧洲有个修士 Luther，挑战当时最大的宗教正统，也被骂成异端、叛徒。\n\n说真话的人，活着时往往是输家。可有些真话，要过很久很久，才显出它救了多少人。',
        en: 'Pull the lens back and see what my unwelcome words became in the end.\n\nIn my lifetime I was a failure, called a traitor, thrown into a dry well. I did not see the outcome, I died around 570 BCE, most likely in Egypt.\n\nBut what I urged my people to do survived. They put down roots in Babylon and wrote their faith into a book. Decades later the Persian king Cyrus let them return, and some went back to Jerusalem and rebuilt the Temple; yet more important, they had already learned to "rely on a book, not on one building," and from then on, scattered anywhere, they could not be scattered away.\n\nThe figure of "a man called a traitor by his own people, who insists on speaking the unwelcome truth against orthodoxy", that figure appears again and again in history. More than a thousand years later, in Europe, a monk named Luther challenged the greatest religious orthodoxy of his day and was also branded a heretic and a traitor.\n\nThe one who speaks the truth is often a loser while he lives. But some truths take a very, very long time to show how many people they saved.',
      },
      deliverGoal: 'N7 zoom-out + topic connection — Jeremiah 活时是失败者 (骂叛徒扔枯井/约 570 BCE 死多半死埃及/没看见结局) + 他劝的事活下来 (扎根写书/居鲁士放归回一部分重建圣殿/学会靠书不靠殿散不掉) + 跨 Topic 锚:「被同胞当叛徒坚持讲不爱听真话挑战正统」千年后 Luther 挑战宗教正统被骂异端叛徒 (reformation Topic) +「说真话的人活着时往往输家/有些真话很久才显出救了多少人」',
      engagementHook: '我活着时是被扔进井里的失败者,可我劝的事救了一个民族。说真话的人——历史上一个又一个——为什么常常活着时是输家?',
      expectsRealAnswer: false,
    },
    {
      id: 'jer-n8',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是真正救了民族的人。在所有人沉迷「神保佑我们必赢」的时候，我一个人顶着唾沫和石头，说出真相、劝大家认清现实。是我劝他们在流亡里扎根、把信仰写下来带着走——这才让一个亡了国的民族没有消失。看清现实、说出来、还为它指一条活路，这是最难、也最重要的勇敢。\n\n另一种说法：我也是个浇灭希望的人。在同胞最绝望、最需要一点盼头的时候，我反复告诉他们「别抵抗、认了吧、为敌人的城求平安」。万一我错了呢？万一那些主战、那些拼死一搏的人才是对的呢？「劝人认命」和「替人放弃」之间，那条线，我真的每次都站对了吗？\n\n这两边不是「功劳加缺点」。是同一种清醒的两面——看得比谁都清，既能救人，也可能太早替别人熄了火。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was the man who truly saved the people. When everyone was lost in "God will protect us, we must win," I alone, under spit and stones, spoke the truth and urged them to face reality. It was I who urged them to root themselves in exile and carry the written faith away, and that is what kept a nation that had lost its state from vanishing. To see clearly, to say it aloud, and still to point out a way to live, that is the hardest and most important courage.\n\nThe other view: I was also a man who put out hope. When my people were most desperate and most needed a little something to hope for, I told them again and again, "do not resist, accept it, pray for the peace of the enemy\'s city." What if I was wrong? What if the war party, those who would fight to the death, were the ones in the right? Between "urging people to accept their fate" and "giving up on their behalf," that line, did I really stand on the right side of it every time?\n\nThese are not "credit and fault." They are two faces of one clear-sightedness, seeing more clearly than anyone, able to save people, and able to put out the fire for others too soon.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N8 synthesis — 一种说法 (真正救民族的人/众人沉迷必赢时一人顶唾沫石头说真相劝认清现实/劝扎根写信仰带走才让亡国民族没消失/看清说出还指活路最难最重要的勇敢) / 另一种说法 (浇灭希望的人/同胞最绝望需要盼头时反复劝别抵抗为敌人城求平安/万一错了万一主战拼死一搏才对/「劝认命」与「替人放弃」那条线每次都站对了吗) / 同一种清醒两面 / 想 30 秒',
      engagementHook: '真正救了民族的人,和太早替别人熄了火的人——是同一种清醒的两面。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'jer-n9',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个先知？\n\n一个被同胞当叛徒、扔进枯井的人，说着所有人最不爱听的话，劝大家「认了、活下去、为敌人的城求平安」。他活着时是输家，可他指的那条路，让一个亡了国的民族活了两千多年。看清现实的清醒，和浇灭希望的冷酷，可能是同一件事。你怎么评？\n\n再想一步。今天你身边，有没有一个「说真话却没人爱听」的人——也许是那个唯一指出大家都在装看不见的问题的同学，也许就是你自己心里那个不肯随大流的声音。大家越起哄，他越孤立。\n\n那时候你会怎么做：跟着众人把他当扫兴的人,还是停下来想想——他说的会不会是对的、只是来得太早?如果哪天那个不受欢迎的真话,要从你嘴里说出来,你说不说?',
        en: 'Having walked my whole life, how would you judge a prophet like this?\n\nA man called a traitor by his own people, thrown into a dry well, speaking the words everyone least wanted to hear, urging them to "accept it, stay alive, pray for the peace of the enemy\'s city." He was a loser while he lived, yet the road he pointed to kept a nation that had lost its state alive for more than two thousand years. The clear sight that faces reality and the coldness that puts out hope may be the same thing. How do you judge it?\n\nThen take one more step. In your own life today, is there a person who "speaks the truth no one wants to hear", maybe the one classmate who points out the problem everyone else pretends not to see, maybe the voice in your own heart that refuses to go with the crowd. The more people jeer, the more alone he is.\n\nThen what will you do: join the crowd and treat him as the one who spoils the mood, or stop and wonder, could he be right, only too early? And if one day that unwelcome truth has to come out of your mouth, will you say it?',
      },
      deliverGoal: 'N9 close — 评价先知 (被同胞当叛徒扔枯井说最不爱听的话劝认了活下去为敌人城求平安/活时输家但指的路让亡国民族活两千年/清醒与浇灭希望可能同一件事) + transfer「今天你身边有没有说真话没人爱听的人 (唯一指出大家装看不见问题的同学/你心里不随大流的声音/越起哄越孤立)」+ 跟众人当他扫兴还是想想他会不会对只是来太早 + 若哪天不受欢迎的真话要从你嘴里说出来你说不说',
      engagementHook: '我说着没人爱听的真话,活着时是输家,可那条路救了一个民族两千年。今天你身边那个「说真话却被起哄」的人,你会跟着众人嫌他扫兴,还是停下来想想他会不会是对的?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 被掳到巴比伦河边的犹太少年 (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var exiledJudeanYouthLens = {
  id: 'exiled-judean-youth-receiving-end',
  name: 'A Judean Youth in Exile',
  nameCn: '被掳的犹太少年',
  role: 'receiving-end',
  perspectiveTag: 'rivers-of-babylon',
  icon: '🌊',
  description: {
    cn: '他是一个大约 14 岁的犹太少年,坐在巴比伦城外一条又宽又陌生的大河边,脚下不是家乡的山路是软软的泥(一个合成人物,按《诗篇》137「我们在巴比伦河边坐下哭泣」那一代被掳人的真实处境拼出来的具体孩子)。这一遍让你跟他一起站在那群起哄要他唱「锡安的歌」的巴比伦人面前,他从小被教「圣殿在神就在」,可现在圣殿烧了,看他怎么撑住一个 14 岁不该撞上的问题:神是不是跟着烧没了,我们还算不算我们。',
    en: 'He is a Judean boy of about fourteen, sitting by a wide, strange river outside Babylon, soft mud under his feet instead of the mountain path of home (a composite figure, a specific child pieced together from the real situation of the generation in Psalm 137, "by the rivers of Babylon we sat down and wept"). This pass puts you with him before a group of Babylonians jeering for him to sing them one of his "songs of Zion"; he was raised on "where the Temple is, God is," and now the Temple is burned, and you watch how he holds up under a question a fourteen-year-old should not have to face: did God burn away with it, and are we still us?',
  },
  storyboard: [
    {
      id: 'youth-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我坐在一条又宽又陌生的大河边。脚下不是家乡的山路，是软软的泥。抬头，远处一座高得吓人的神庙塔，戳进天里——那是巴比伦人的神住的地方。\n\n（先告诉你一件事：我没有真名留在历史里。我是后人照着《诗篇》137 篇那一代被掳的人的样子，想象出来的一个具体的孩子。可我的处境，每一样都是真的。）\n\n我大约 14 岁，生在耶路撒冷。几个月前，巴比伦的军队烧了我们的圣殿，把我和家人，连同成千上万的人，一路押到这儿——离家一千多公里的巴比伦。\n\n从小大人就告诉我：圣殿在，神就在。可现在，圣殿烧了。\n\n这一遍，你坐进我这个位置。你不是国王，不是先知，不是征服者。你只是一个被卷进大人世界的孩子，要在这条陌生的河边，想明白一个 14 岁不该面对的问题。',
        en: 'I sit by a wide, strange river. Under my feet is not the mountain path of home but soft mud. I look up, and far off a temple-tower so high it frightens me pierces the sky, the place where the Babylonians\' god lives.\n\n(First, one thing: no real name of mine is left in history. I am a specific child imagined by later people from the look of the generation in Psalm 137 who were carried off. But my situation, every part of it, is real.)\n\nI am about fourteen, born in Jerusalem. A few months ago Babylon\'s army burned our Temple and marched me and my family, with tens of thousands of others, all the way here, to Babylon, more than a thousand kilometers from home.\n\nAll my life the grown-ups told me: where the Temple is, God is. And now the Temple is burned.\n\nThis pass puts you in my seat. You are not a king, not a prophet, not a conqueror. You are only a child swept into the world of grown-ups, who must, by this strange river, work out a question a fourteen-year-old should not have to face.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 坐宽陌生大河边脚下软泥 + 抬头巴比伦高神庙塔戳天 + anti-fab 括号短句 (没真名留历史/后人照《诗篇》137 那代想象的具体孩子/处境每样都真) + 约 14 岁生耶路撒冷 + 几个月前巴比伦烧圣殿押来 1000 多公里 + 从小被教「圣殿在神就在」可现在圣殿烧了 + 这一遍视角 (不是国王先知征服者/被卷进大人世界的孩子要想明白 14 岁不该面对的问题)',
      engagementHook: '从小大人告诉我:圣殿在,神就在。可现在圣殿烧了。一个 14 岁的孩子,坐在敌人的河边,被迫去想「神是不是没了」——你能想象那种感觉吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'youth-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我被掳之前的日子，你才懂失去的是什么。\n\n我生在耶路撒冷，一个山上的城。我们家不是大富大贵，但有自己的根。我记得最清楚的，是一年里的几个大节——全城的人，还有从各地赶来的人，一起涌向圣殿。\n\n圣殿是什么？是我们整个民族唯一的崇拜中心。神住在那里。你想敬拜神，就得到那一座圣殿去，由祭司献祭。整个民族的心，都朝着那一个地方。\n\n节日里，我跟着父亲——我叫他 Aba——走上圣殿的台阶。人很多，唱歌的声音很大。Aba 会把手放在我肩上，告诉我：「记住这个地方。无论你走到哪儿，这里是家，这里有神。」\n\n那时候我以为，这座城、这座殿，会永远在那儿。我以为「家」就是一个永远不会动的地方。\n\n我那时候还不知道，「永远」这个词,有多脆。',
        en: 'First let me tell you my life before I was carried off, so you understand what was lost.\n\nI was born in Jerusalem, a city on a hill. My family was not rich or grand, but it had its own roots. What I remember most clearly are the few great festivals of the year, when the whole city, and people who came from far away, streamed together toward the Temple.\n\nWhat was the Temple? It was the one center of worship for our whole people. God lived there. If you wanted to worship God, you had to go to that one Temple and have the priests offer sacrifice. The heart of the whole people turned toward that one place.\n\nAt the festivals I would walk up the Temple steps with my father, whom I call Aba. The crowd was thick, the singing loud. Aba would lay his hand on my shoulder and tell me: "Remember this place. Wherever you go, here is home, here is God."\n\nBack then I thought this city, this Temple, would be there forever. I thought "home" was a place that would never move.\n\nI did not yet know how fragile the word "forever" is.',
      },
      deliverGoal: 'N2 setup — 被掳前日子 (生耶路撒冷山上城/家不富有但有根/记得一年几个大节全城涌向圣殿) + 圣殿是什么 (全民族唯一崇拜中心/神住那里/敬拜须到那一座殿祭司献祭/整个民族的心朝那一个地方) + 节日跟父亲 Aba 走上台阶 (人多歌声大/Aba 手放肩上「记住这地方走到哪这里是家这里有神」) + 以为城和殿永远在/以为家是不动的地方 +「永远」多脆 [文化精度: Aba 与 black-death Devorah 一致]',
      engagementHook: '父亲把手放我肩上说:「记住这地方,无论走到哪,这里是家,这里有神。」那时我以为「家」是一个永远不会动的地方。你心里的「家」,是一个地方,还是别的什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'youth-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我说说被烧、被掳那几个月，是什么样子。\n\n最后那段日子，巴比伦的军队把耶路撒冷围了很久。城里慢慢断了粮。我饿过很多顿，看见过比我小的孩子饿得不哭了，只是睁着眼。\n\n然后是城破的那天。火。我这辈子忘不掉那场火——圣殿在烧，火光把夜照得像白天。大人们跪在地上，有人嚎哭，有人发不出声音。我不太懂大人为什么哭成那样,直到我明白:他们哭的不只是一栋楼,是整个世界的中心,在他们眼前烧掉了。\n\n接着，巴比伦人开始挑人:王室、祭司、工匠、识字的人,排成长队,往东走。我们家也在队里。\n\n我们走了几个月,上千公里。脚磨破了,有人在路上倒下就没再起来。我一直回头看,直到耶路撒冷的山,彻底从地平线上消失。\n\n那一刻我才真正懂:我可能,再也回不去了。',
        en: 'Let me tell you what those months of burning and being carried off were like.\n\nIn the last stretch, Babylon\'s army besieged Jerusalem for a long time. The city slowly ran out of food. I went hungry many times; I saw children younger than me grow too weak to cry, just lying with their eyes open.\n\nThen came the day the city fell. Fire. I will never forget that fire, the Temple burning, the firelight turning night into day. The grown-ups knelt on the ground; some wailed, some could make no sound at all. I did not quite understand why the grown-ups wept like that, until I understood: what they wept for was not just a building, but the center of the whole world, burning before their eyes.\n\nThen the Babylonians began to pick people out: the royal house, priests, craftsmen, the literate, lined up in long columns, walking east. My family was in the column too.\n\nWe walked for months, a thousand kilometers and more. Feet split open; some who fell on the road never rose again. I kept looking back, until the hills of Jerusalem vanished entirely from the horizon.\n\nIn that moment I truly understood: I might never go home again.',
      },
      deliverGoal: 'N3 setup — 被烧被掳几个月 (军队围耶路撒冷久/断粮/饿过很多顿/见比他小的孩子饿得不哭只睁眼) + 城破那天的火 (圣殿烧火光照夜如白天/大人跪嚎哭或发不出声/他懂大人哭的不只一栋楼是整个世界中心烧掉) + 巴比伦人挑人 (王室祭司工匠识字人长队往东/他家在队里) + 走几个月上千公里 (脚磨破有人倒下没起来/一直回头看直到耶路撒冷山从地平线消失) + 那刻懂可能再回不去',
      engagementHook: '我一直回头看,直到耶路撒冷的山彻底从地平线上消失——那一刻我才懂,我可能再也回不去了。如果有一天你被迫离开家,最后看一眼,你会看什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'youth-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n到了巴比伦城外的运河边，他们让我们住下。日子比想的好过——没人锁我们，巴比伦给了地，让大人种田、做生意。可你心里那个洞，没人能填。\n\n有一天，几个巴比伦人路过，看见我们这群外乡人，起哄：「来呀，给我们唱一首你们锡安的歌！」\n\n锡安，就是耶路撒冷。他们要我们唱的，是我们在圣殿里、在最神圣的时刻才唱的歌。现在他们把它当余兴节目,要我们当众表演,逗他们开心。\n\n你站在那儿,手攥得发白。你想起 Aba 在圣殿台阶上把手放你肩上的样子。你想起那座烧掉的殿。\n\n你脑子里轰一下,撞上一个 14 岁不该撞上的问题:神,只住在那座烧了的圣殿里吗?如果是,那神是不是也跟着烧没了?我们在这条外邦的河边,还算不算「我们」?\n\n你不知道答案。可你知道:你绝不会在这儿,把那首歌唱给他们听。\n\n这个问题,你怎么面对?',
        en: 'Now you are me.\n\nBy the canal outside Babylon, they let us settle. Life was easier than we feared, no one chained us; Babylon gave us land and let the grown-ups farm and trade. But the hole inside you, no one could fill.\n\nOne day some Babylonians passed by, saw us foreigners, and jeered: "Come on, sing us one of your songs of Zion!"\n\nZion is Jerusalem. The songs they wanted us to sing were the ones we sang in the Temple, in the holiest moments. Now they treated them as entertainment, demanding we perform in public to amuse them.\n\nYou stand there, your hands clenched white. You think of Aba laying his hand on your shoulder on the Temple steps. You think of that burned Temple.\n\nSomething goes off in your head and strikes a question a fourteen-year-old should not have to strike: does God live only in that burned Temple? If so, did God burn away with it? By this foreign river, are we still "us"?\n\nYou do not know the answer. But you know this: you will never, here, sing them that song.\n\nThis question, how do you face it?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 运河边住下 (比想好过/没锁/给地种田做生意/但心里的洞没人填) + 巴比伦人路过起哄「给我们唱一首你们锡安的歌」(锡安=耶路撒冷/是圣殿里最神圣时刻唱的歌/被当余兴节目当众表演逗他们) + 你手攥发白想起 Aba 圣殿台阶 + 脑子轰一下撞上 14 岁不该撞的问题 (神只住烧了的圣殿吗/神是否跟着烧没/河边还算不算「我们」) + 不知答案但绝不在这唱那首歌',
      engagementHook: '他们起哄要我唱我们最神圣的歌来逗他们开心。我手攥得发白,撞上一个问题:神是不是跟着烧掉的圣殿一起没了?换作你,你会唱吗?你怎么面对这个问题?',
      expectsRealAnswer: false,
    },
    {
      id: 'youth-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那天晚上，我没睡。我去找 Aba。\n\n我问他：圣殿烧了，神是不是也没了？我们离家这么远，还算不算神的子民？\n\nAba 没有马上回答。他带我去了一个地方——运河边一户人家的屋子。里面坐着十几个被掳来的大人，借着油灯，围着一个老人。老人面前摊着几卷东西。\n\n那是字。是我们的律法、我们的历史、先知说过的话——本来都是老人口口相传记在脑子里的，现在,他们正一笔一笔，把它写下来。\n\nAba 轻声对我说：「你看。圣殿能烧，砖头木头都能烧。可这些话，烧不掉。只要我们还记得、还写下来、还念给孩子听——神就还在我们中间。神不在那栋楼里。神在这儿。」他指了指那几卷字，又指了指自己的胸口。\n\n那一晚，我心里那个洞，第一次有东西落了进去。我没全懂，但我感觉到:我们也许没有输。',
        en: 'That night I did not sleep. I went to Aba.\n\nI asked him: the Temple is burned, is God gone too? We are so far from home, are we still God\'s people?\n\nAba did not answer at once. He took me somewhere, a house by the canal. Inside sat a dozen or so grown-ups who had been carried off, gathered by an oil lamp around an old man. Before the old man lay a few scrolls.\n\nIt was writing. Our law, our history, the words the prophets had spoken, all of it once carried by mouth in the old man\'s memory, and now, clause by clause, they were writing it down.\n\nAba said to me softly: "Look. The Temple can burn, brick and timber all can burn. But these words cannot. As long as we still remember them, still write them down, still read them to our children, God is still among us. God is not in that building. God is here." He pointed to the scrolls, then to his own chest.\n\nThat night, into the hole inside me, something fell for the first time. I did not understand it all, but I felt it: maybe we had not lost.',
      },
      deliverGoal: 'N5 story — 那晚没睡去找 Aba 问 (圣殿烧神是否没了/离家这么远还算不算神子民) + Aba 没马上答带他去运河边一户人家 (十几个被掳大人借油灯围老人/老人面前几卷东西) + 那是字 (律法历史先知的话/本来口口相传记脑子/现在一笔一笔写下来) + Aba 轻声「圣殿能烧砖木能烧这些话烧不掉/只要记得写下念给孩子神就还在我们中间/神不在楼里神在这儿」指卷又指胸口 + 那晚心里的洞第一次有东西落进去 (没全懂但感觉也许没输)',
      engagementHook: 'Aba 指着那几卷写下来的字,又指指自己的胸口,说:「神不在那栋楼里。神在这儿。」一座烧掉的圣殿,和一卷写下来的字、一颗记住的心——你觉得哪个更烧不掉?',
      expectsRealAnswer: false,
    },
    {
      id: 'youth-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '从那晚起，我慢慢看懂了一件大事，它比我一个人的悲伤大得多。\n\n几百年来，我们的「家」是一座楼——耶路撒冷的圣殿。家在一个固定的地方，你必须回到那里，才算回了家、见了神。这就是为什么圣殿一烧，所有大人都觉得天塌了：他们觉得，「家」被烧没了。\n\n可那一卷一卷写下来的字，正在悄悄把「家」变成另一种东西。\n\n家不再是一座立在山上、会被火烧掉的楼。家变成了一本书——一本我们走到哪儿就带到哪儿的书。只要还有人围着油灯读它、把它念给下一代,无论我们被掳到多远的河边,家就跟着我们。\n\n你想想这有多了不起：巴比伦王能烧掉一座楼,他烧不掉一本带得走的书。他以为掳走我们、烧了我们的殿,我们就散了。他不知道,我们正在异乡的油灯下,给自己造一个谁也烧不掉、谁也夺不走的家。\n\n一座楼,只能立在一个地方。一本书,能立在每一个有我们的地方。',
        en: 'From that night on, I slowly came to see one great thing, far larger than my own grief.\n\nFor centuries our "home" was a building, the Temple in Jerusalem. Home was in one fixed place, and you had to return there to have come home, to have met God. That is why, when the Temple burned, all the grown-ups felt the sky had fallen: they felt that "home" had been burned away.\n\nBut those scrolls being written, one by one, were quietly turning "home" into something else.\n\nHome was no longer a building standing on a hill that fire could burn. Home became a book, a book we carried wherever we went. As long as someone still gathered by an oil lamp to read it and read it to the next generation, no matter how far a river we were carried to, home came with us.\n\nThink how remarkable this is: the king of Babylon could burn a building, but he could not burn a book you carry. He thought that by carrying us off and burning our Temple, we would scatter. He did not know that by an oil lamp in a foreign land, we were building ourselves a home no one could burn and no one could take away.\n\nA building can stand in only one place. A book can stand in every place where we are.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens micro-detail —「带不带得走的家」: 几百年「家」是一座楼 (耶路撒冷圣殿/家在固定地方必须回那里/所以圣殿一烧大人觉得家被烧没了) vs 写下来的字悄悄把家变成另一种东西 + 家不再是会被火烧的楼变成一本走到哪带到哪的书 (有人围油灯读念给下一代/被掳多远家就跟着) + 巴比伦王烧得掉楼烧不掉带得走的书 (他以为掳走烧殿我们就散/不知我们在油灯下造谁也烧不掉夺不走的家) +「一座楼只能立一个地方一本书能立每一个有我们的地方」',
      engagementHook: '巴比伦王能烧掉一座楼,他烧不掉一本带得走的书。一座楼只能立在一个地方,一本书能立在每一个有我们的地方。如果有一天你失去了「家这个地方」,你能把家变成一样带得走的东西吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'youth-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头往后拉，看我们这代人最后怎么样了。\n\n我们在巴比伦活了下来。不只活下来——我们在油灯下，把信仰写成了书。又过了快五十年，差不多两代人，波斯王居鲁士打败了巴比伦；第二年，他下令准我们回耶路撒冷、重建圣殿。\n\n一些人回去了，重新立起第二座圣殿。可你猜怎么着？很多人没回去。包括我们这样在巴比伦扎了根、生了孩子的人家。因为我们已经明白了:家是那本书,书在哪儿,家就在哪儿。\n\n从那以后,我们这个民族就「散」在了世界各地——大家管这叫「离散」。可正因为我们早在巴比伦学会了「靠书,不靠一座殿」,散到天涯海角,也散不掉。\n\n这条线拉得很长很长。一千八百多年后,在欧洲莱茵河边一座叫 Strasbourg 的城里,有一个跟我一样大的犹太女孩,叫 Devorah,守着同一本书过日子。',
        en: 'Pull the lens forward and see how our generation ended up.\n\nWe survived in Babylon. More than survived, by the oil lamp we wrote our faith into a book. Nearly fifty years later, about two generations, the Persian king Cyrus defeated Babylon; the next year he ordered that we be allowed to return to Jerusalem and rebuild the Temple.\n\nSome went back and raised a Second Temple. But guess what? Many did not return, including families like ours who had put down roots in Babylon and had children. Because we had already understood: home is that book, and where the book is, home is.\n\nFrom then on our people was "scattered" across the lands of the world, what they call the diaspora. Yet precisely because we had learned in Babylon to "rely on a book, not on one building," scattered to the ends of the earth, we could not be scattered away.\n\nThis line runs very, very long. More than eighteen hundred years later, in a city on the Rhine in Europe called Strasbourg, there was a Jewish girl my own age, named Devorah, living her days by the same book.',
      },
      deliverGoal: 'N7 zoom-out + topic connection — 我们这代活下来 (不只活/油灯下把信仰写成书) + 快 50 年约两代人后居鲁士败巴比伦/次年下令准归回重建圣殿 + 一些人回立第二圣殿但很多人没回 (包括扎根生孩子的人家/因明白家是书书在哪家在哪) + 离散 diaspora 格局 + 因早学会靠书不靠殿散不掉 + 跨 Topic 锚: 1800 多年后 Strasbourg 莱茵河边同龄犹太女孩 Devorah 守同一本书 (black-death Topic/她和我同一条河隔两千年两个孩子)',
      engagementHook: '一千八百多年后,莱茵河边有个跟我一样大的女孩 Devorah,守着同一本书过日子。她和我,是同一条「离散」的河上、隔了两千年的两个孩子。一本书,怎么能把隔了两千年的人,连成一条线?',
      expectsRealAnswer: false,
    },
    {
      id: 'youth-n8',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,再回头看公元前 586 年那场火,两种说法都站得住。\n\n一种说法:那是我们民族最惨的灾难。我们失去了国家、圣殿、君主,被押到上千公里外。多少人饿死、累死在路上,多少孩子再没见过家乡的山。《诗篇》137 篇老老实实记下了那种痛——「我们在巴比伦河边坐下哭泣」。这就是亡国,没有什么好美化的,它就是一场血淋淋的灾难。\n\n另一种说法:那也是我们民族最坚韧的开始。如果不是被逼到绝路、被逼着在废墟上问「没有圣殿我们还是不是我们」,我们可能永远不会把信仰写成一本带得走的书,也就永远学不会「散到哪儿都散不掉」。锤打我们的那场火,也锻造了我们。\n\n这两边不是「坏事加好事」。是同一场灾难的两面——最深的伤口,和最硬的韧性,长在同一个地方。\n\n你怎么看?想 30 秒,写下来。',
        en: 'Having walked my whole life, look back at that fire of 586 BCE, both views stand.\n\nOne view: it was the cruelest disaster of our people. We lost our nation, our Temple, our king, and were marched more than a thousand kilometers away. How many starved or dropped dead on the road, how many children never saw the hills of home again. Psalm 137 set down that pain honestly, "by the rivers of Babylon we sat down and wept." This was the fall of a nation, nothing to dress up, simply a bloody disaster.\n\nThe other view: it was also the toughest beginning of our people. Had we not been driven to the dead end, forced on the ruins to ask "without a Temple, are we still us," we might never have written our faith into a book we could carry, and so never learned to be "scattered anywhere yet never scattered away." The fire that hammered us also forged us.\n\nThese are not "a bad thing and a good thing." They are two faces of the same disaster, the deepest wound and the hardest resilience growing in the same place.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N8 synthesis — 一种说法 (民族最惨灾难/失去国家圣殿君主押 1000 公里外/多少人饿死累死路上孩子再没见家乡山/《诗篇》137 老实记下痛「巴比伦河边坐下哭泣」/亡国没什么好美化血淋淋灾难) / 另一种说法 (民族最坚韧的开始/若非被逼绝路在废墟问「没圣殿还是不是我们」可能永不把信仰写成带得走的书永学不会散不掉/锤打的火也锻造了我们) / 同一场灾难两面 最深伤口与最硬韧性同一个地方 / 想 30 秒',
      engagementHook: '民族最惨的灾难,和民族最坚韧的开始——是同一场火的两面,最深的伤口和最硬的韧性长在同一个地方。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'youth-n9',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个失去了城、失去了殿、走了上千公里、在异乡河边重新找到「家」的孩子——你会怎么评价这样一个开端?\n\n一场烧掉一切的灾难,逼一个民族在油灯下,把会被烧掉的「家」,变成一本谁也烧不掉的书。这到底是史上最惨的失去,还是史上最硬的重生?把伤口和韧性放在同一个天平上,你怎么称?\n\n不过先记住:你这一遍,听的只是一个被掳少年的一句话。那个烧了城、把整个民族掳走的国王尼布甲尼撒、那个夹在中间苦苦劝告的先知耶利米,各有各的说法——换个视角再走一遍,你会听见他们怎么讲这同一段历史,也会看看你刚才的判断站不站得住。\n\n再想一步。你这辈子,大概也会失去一些「以为永远不会动」的东西——也许是搬家,离开从小长大的地方;也许是转学,离开熟悉的朋友;也许是某个家人,某段关系,不在了。\n\n那时候,你会只盯着失去的那座「楼」一直哭,还是会像我一样,慢慢找到那本「带得走的书」——那个无论你走到哪儿、都让你还是你的东西?那东西,会是什么?',
        en: 'Having walked my whole life, a child who lost his city, lost his Temple, walked a thousand kilometers, and by a foreign river found "home" again, how would you judge a beginning like this?\n\nA disaster that burned everything forced a people, by an oil lamp, to turn a "home" that could be burned into a book no one could burn. Was this the cruelest loss in history, or the hardest rebirth? Put the wound and the resilience on the same scale. How do you weigh them?\n\nBut first, remember: this pass, you heard only one exiled youth. Nebuchadnezzar, the king who burned the city and carried off a whole people, and Jeremiah, the prophet pleading from the middle, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step. In your own life you will probably lose some things you thought "would never move", maybe a move that takes you from the place you grew up, maybe a change of schools that takes you from familiar friends, maybe a family member, a relationship, that is no longer there.\n\nWhen that happens, will you only stare at the lost "building" and weep, or will you, like me, slowly find that "book you can carry", the thing that, wherever you go, keeps you still you? What would that thing be?',
      },
      deliverGoal: 'N9 close (gold-standard) — 评价开端 (失去城殿走 1000 公里异乡河边重找到家的孩子 / 灾难逼民族油灯下把会被烧的家变成谁也烧不掉的书 / 史上最惨失去 vs 史上最硬重生 / 伤口与韧性同一天平) + transfer「你这辈子也会失去以为永远不动的东西 (搬家离开从小长大地方/转学离开熟悉朋友/家人或关系不在了)」+ 只盯失去的楼哭还是像我找到带得走的书 (无论走到哪让你还是你的东西) + 那东西会是什么',
      engagementHook: '走完我这一生,你会怎么评价这样一个开端?再想一步:你这辈子也会失去一些「以为永远不会动」的东西。那时候,你会只盯着失去的那座「楼」哭,还是会找到那本「带得走的书」——那个让你无论走到哪儿都还是你的东西?',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'nebuchadnezzar-ii':                 nebuchadnezzarLens,
  'jeremiah':                          jeremiahLens,
  'exiled-judean-youth-receiving-end': exiledJudeanYouthLens,
};

// per TOPIC_ROADMAP_G6_G12.md C2 + receiving-end 优先 pattern:
// 少年 + 流亡一代 + N1 gold-standard hook + N6「带不带得走的家」跨 lens micro-detail + N7 Devorah 跨 Topic 离散线 + N8/N9 灾难 vs 重生 closing
export var defaultLens = 'exiled-judean-youth-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'babylonian-exile-586bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'simple-binary',
  nodesPerLens: 9,
  estimatedMinutesPerLens: { 'nebuchadnezzar-ii': 22, 'jeremiah': 22, 'exiled-judean-youth-receiving-end': 24 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, 9-node simple-binary spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 9 nodes each / cross-lens micro-detail N6:「带不带得走的家」圣殿宗教 (一座楼/一个地点) vs 书的宗教 (一本书/任何地点)',
    'defaultLens: exiled-judean-youth-receiving-end — 受影响者优先 (合成少年基于《诗篇》137 + 流亡一代 + gold-standard N1 hook + N8/N9 灾难 vs 重生)',
    'expectsRealAnswer: ONLY N8 (synthesis) + N9 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: 少年是 composite 合成人物, N1 括号短句标注 (没真名留历史/基于《诗篇》137 那代/处境每样都真); 无伪造经文 (《诗篇》137「巴比伦河边坐下哭泣」为真实引文, Jeremiah 书信为 paraphrase 释义明标)',
    'cultural 精度: 圣殿/巴比伦/先知 prophet/希伯来圣经/犹大王国/锡安/离散 diaspora 真实术语, 家庭称谓 Aba 与 black-death Devorah 一致, 绝不用 庙/国师/翰林/玉玺/朕/太子',
    'cross-Topic 锚: 少年/Nebuchadnezzar N7→black-death Devorah (犹太离散线源头, 同一条河隔两千年两个孩子); Jeremiah N7→reformation Luther (挑战正统母题); N5/N6 流亡中写经→C1 hammurabi-code 书吏 (文字保存文明母题)',
    'reverse-Whig: 不写「选民苦难与救赎」宗教凯歌也不写征服者单纯暴行; 展示一神教/希伯来圣经成文恰在亡国流亡创伤中被锻造 (文明韧性复杂起源)',
    'date check: Nebuchadnezzar II r.605-562 BCE (43 年); 第一圣殿毁/被掳 586 BCE; 597 BCE 第一次被掳; Jeremiah c.650-570 BCE; 居鲁士诏令 538 BCE (586-538=48 年约两代); BCE 纪年 (生 c.600 BCE 到 586 BCE 约 14 岁)',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
