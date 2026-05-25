// ─── Chinese Exclusion 1869-1882 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 铁路华工与排华法案 · The Transcontinental Railroad & Chinese Exclusion 1869-1882
// HSS-8.12 · APUSH Period 6（移民 + 西部经济 + 排外主义）· 加州 HSS 特色考点
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md A7 + AUTHORING_PIPELINE 第 7/8/12 条):
//   - leland-stanford                      (perpetrator-actor) — Leland Stanford 1824-1893 中央太平洋铁路巨头 + 加州州长，雇华工又支持排华政治
//   - wong-chin-foo                        (lonely-mediator)   — Wong Chin Foo 1847-1898 早期华裔民权活动家 + 记者，创「Chinese American」一词办报抗争
//   - taishan-railroad-worker-receiving-end (receiving-end)    — 一个修内华达山隧道的广东台山籍铁路华工 (composite，基于真实劳工史)，凿悬崖隧道 / 雪崩丧生 / 完工后被排华法案挡在公民权外
//
// 跨 lens micro-detail (N6 anchor):
//   「一句话两个方向」: 同一份 Declaration of Independence「人人生而平等」—
//   - Wong Chin Foo (东岸报馆) 把它印在自己办的报纸上，用美国自己的开国文件来论证华人配做公民
//   - 台山华工 (内华达山隧道) 在悬崖上凿洞，用命换来一条把美国东西两半缝起来的铁路，却被排华法案挡在「人人」之外
//   Stanford lens N6: 金道钉 (golden spike) 那张著名合影里，一个修了这条路的华工都没有 — 把人用完就抹掉
//
// 跨 Topic 锚:
//   - 台山华工的中国根 → 现有 tang-song-china (一个中国学生自己祖辈可能的南方迁徙史)
//     这是全 spine 对中国学生情感锚最强的一条线 — 让它落地，不刻意煽情
//   - Wong Chin Foo 创「Chinese American」身份话语 → 现有 pre-columbian Malintzin (跨文化身份建构) + A4 Douglass (少数族裔自我命名)
//   - Stanford 雇华工又排华 → A2 Hamilton (资本逻辑 vs 政治民粹的张力)
//
// defaultLens = 'taishan-railroad-worker-receiving-end' (受影响者优先 pattern: 被法案挡在门外一方 + 跨 Topic「中国根」对位 + 全 spine 最强中国身份锚)
//
// STRUCTURE SPEC (corrected shorter format):
//   - 11 nodes per lens (multi-faction)
//   - 220-380 CN chars per node; ≤2 anchor nodes per lens may reach 550 (N6 cross-lens + N10/N11 synthesis)
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true; all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
//   cultural-ban 特例: 本 Topic 涉及真实中国人 (台山华工) — 对「他们」用中文词 (台山/广东/华工) 是正确的；
//   对美国机构用真实美国词 (中央太平洋铁路/排华法案/Chinese Exclusion Act/工会)，不文化篡改美国一侧。
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Leland Stanford (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var lelandStanfordLens = {
  id: 'leland-stanford',
  name: 'Leland Stanford',
  nameCn: '利兰·斯坦福',
  role: 'perpetrator-actor',
  perspectiveTag: 'railroad-magnate',
  icon: '🚂',
  description: {
    cn: '加州最有钱有势的人之一，1824 年生，先靠淘金潮的杂货生意发家，再当上加州州长，然后成了中央太平洋铁路的总裁。修那条横贯大陆铁路的西半段，他雇了上万名华工，因为他们肯干最险的活、要的工钱最低。1869 年金道钉敲下那天，他站在万人欢呼的中心。同一个他，当州长时公开说华人是「劣等种族」，后来又默许把华工挡在公民权外的政治浪潮。这一遍让你从一个用华工建起国家动脉、又转身把他们推开的人内部，看「利用」和「排斥」怎么出自同一双手。',
    en: 'One of the richest and most powerful men in California, born 1824. He made his fortune first as a storekeeper in the gold rush, then became governor of California, then president of the Central Pacific Railroad. To build the western half of the transcontinental railroad he hired over ten thousand Chinese workers, because they would take the most dangerous work for the lowest pay. The day the golden spike was driven in 1869, he stood at the center of a cheering crowd. The same man, as governor, publicly called the Chinese an "inferior race," and later went along with the political tide that kept Chinese workers out of citizenship. This pass lets you watch, from inside a man who built a nation\'s artery with Chinese labor and then turned to push them away, how "use" and "exclusion" come from the same pair of hands.',
  },
  storyboard: [
    {
      id: 'ls-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1869 年 5 月 10 日，犹他州一个叫 Promontory Summit 的荒地。\n\n两条铁轨从美国的东、西两头，修了 6 年，终于在这里碰头。最后一颗钉子是纯金做的——金道钉（golden spike）。\n\n我，Leland Stanford（利兰·斯坦福），中央太平洋铁路的总裁，举起银锤。万人围观，电报线接到锤头上——我这一锤敲下去，全美国的城市同时听到那一声。一个被东西海岸撕成两半的国家，从这一刻被一条铁路缝在了一起。\n\n那是我一生最荣耀的一刻。\n\n但有件事你看那张著名的合影时会发现：现场欢呼的全是白人面孔。修西半段那上万个华工——把命挂在悬崖上凿出这条路的人——一个都没进画面。\n\n这一遍，你坐进我的位置，看一条伟大的铁路，和一群被它用过又被抹掉的人，怎么同时是真的。',
        en: 'May 10, 1869, a stretch of empty land in Utah called Promontory Summit.\n\nTwo sets of rails, built for six years from the eastern and western ends of the country, finally met here. The last spike was made of pure gold, the golden spike.\n\nI, Leland Stanford, president of the Central Pacific Railroad, raised the silver hammer. Thousands watched, and a telegraph wire was wired to the hammer head. The moment I struck, cities across America heard the blow at the same instant. A country torn into two halves by its east and west coasts was, from that moment, sewn together by one railroad.\n\nIt was the proudest moment of my life.\n\nBut here is something you notice when you look at that famous photograph: every face cheering is white. The more than ten thousand Chinese workers who built the western half, the people who hung their lives off cliffs to carve out this road, not one of them is in the picture.\n\nThis pass puts you in my seat, watching how a great railroad and a group of people it used and then erased can both be true at once.',
      },
      deliverGoal: 'N1 hook — 1869.5.10 Promontory Summit 金道钉 + Stanford 银锤敲钉电报全国同响/国家被缝起 + 一生最荣耀 + 但著名合影里上万华工一个都没进画面 + 这一遍视角设定 (用过又被抹掉)',
      engagementHook: '修这条路的上万华工，一个都没进那张著名的庆功合影。一群人建起了一件伟大的东西，转头被从画面里抹掉——你怎么想这件事？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们为什么非修这条铁路不可。\n\n1860 年代的美国，东海岸和西海岸像两个国家。从纽约到加州，要么坐几个月的船绕过整个南美洲，要么赶马车穿越沙漠和山脉，路上死人是常事。\n\n1862 年，林肯政府通过法案，要修一条横贯大陆的铁路（Transcontinental Railroad），把东西两半连起来。这是国家级的大工程——谁修成，谁就掌握美国未来几十年的经济命脉。\n\n工程分两段：东边由联合太平洋铁路从内布拉斯加往西修，西边由我的中央太平洋铁路从加州萨克拉门托往东修。两家比赛，看谁修得快、占的地多。\n\n政府给的甜头很大：每修一英里，给土地、给补贴。修得越多越长，赚得越多。\n\n所以我心里只有一个数字：快。可挡在我面前的，是整个内华达山脉（Sierra Nevada）——一道又高又陡的花岗岩石墙。',
        en: 'First, why we had to build this railroad.\n\nIn the 1860s, the east coast and the west coast of America were like two countries. To get from New York to California you either took a months-long ship voyage around all of South America, or drove a wagon across deserts and mountains, where deaths along the way were common.\n\nIn 1862, Lincoln\'s government passed a law to build a transcontinental railroad, connecting the two halves. This was a national project. Whoever built it would hold the economic lifeline of America for decades.\n\nThe work was split in two. From the east, the Union Pacific built westward from Nebraska. From the west, my Central Pacific built eastward from Sacramento, California. The two companies raced, to see who could build faster and claim more land.\n\nThe government\'s reward was huge: for every mile built, land and subsidies. The more you built, the longer your line, the more you earned.\n\nSo one number filled my mind: speed. But standing in my way was the entire Sierra Nevada, a high, steep wall of granite.',
      },
      deliverGoal: 'N2 setup — 1860s 东西海岸像两个国家 (绕南美/穿沙漠死人) + 1862 林肯政府法案修横贯大陆铁路 + 两段竞赛 (Union Pacific 东 / Central Pacific 西/Stanford) + 每英里给土地补贴→只想快 + 挡路的是 Sierra Nevada 花岗岩墙',
      engagementHook: '政府按修的英里数给钱，修得越长赚得越多——这套规则下，老板心里只有一个字：快。当「快」就是钱，谁来管修路的人安不安全？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '内华达山脉差点把我的公司逼垮。\n\n1865 年，我招的白人工人不够，还动不动罢工、嫌活太险。要在那道花岗岩墙上凿出隧道、铺出铁轨，几乎不可能。我急得睡不着——再修不动，对手就赢了，我的钱、我的地全打水漂。\n\n我手下的工程主管 Charles Crocker 出了个主意：雇华人。\n\n当时加州有大批从广东来的华工，1850 年代淘金潮把他们引来。我一开始不信——这些人个子瘦小，能干这种重活？\n\nCrocker 说了一句后来很有名的话：能修长城的民族，还修不了一条铁路？\n\n1865 年我们先试用 50 个华工。结果出乎所有人意料：他们能吃苦、肯干最险的活、很少罢工、要的工钱还比白人低三分之一。我立刻下令大量招募。到工程最忙时，中央太平洋铁路的工人里，十个有九个是华工——上万人。\n\n那一刻我看见的只有一件事：他们能帮我赢。我没看见的是——我正在用一群人的命，给我自己换一座金山。',
        en: 'The Sierra Nevada nearly broke my company.\n\nIn 1865, the white workers I hired were too few, kept going on strike, and complained the work was too dangerous. To carve tunnels through that granite wall and lay track was nearly impossible. I could not sleep for worry. If we could not push forward, the rival won, and my money and my land were all washed away.\n\nMy construction superintendent, Charles Crocker, had an idea: hire Chinese workers.\n\nAt the time California had a large population of Chinese laborers from Guangdong, drawn over by the gold rush of the 1850s. At first I did not believe it. These men were thin and small, could they do such heavy work?\n\nCrocker said a line that later became famous: a people who could build the Great Wall, could they not build a railroad?\n\nIn 1865 we tried 50 Chinese workers first. The result surprised everyone: they could endure hardship, would take the most dangerous work, rarely struck, and asked for wages a third lower than white workers. I ordered mass recruitment at once. At the busiest point of the work, nine of every ten workers on the Central Pacific were Chinese, over ten thousand men.\n\nIn that moment I saw only one thing: they could help me win. What I did not see was that I was using the lives of a group of people to trade myself a mountain of gold.',
      },
      deliverGoal: 'N3 setup — Sierra Nevada 逼垮公司 (白人工人不够/罢工/嫌险) + Charles Crocker 提议雇华人 + 1850s 淘金潮广东华工 + Crocker「能修长城的民族还修不了铁路」+ 1865 试 50 人→肯险活/少罢工/工钱低三分之一→大量招/十个有九个华工上万人 + 只看见能帮赢没看见用命换金山',
      engagementHook: '他们肯干最险的活、工钱还比白人低三分之一——所以老板大量招他们。「便宜又肯卖命」对老板是好事，对这些人意味着什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你是中央太平洋铁路的总裁。你手下上万华工，正在内华达山脉上替你凿出一条路。最难的一段叫 Summit Tunnel（峰顶隧道）——要在坚硬的花岗岩里，硬凿出一条 500 多米长的洞。\n\n那时候没有今天的机器。工人靠手钻、铁锤，一锤一锤砸；遇到凿不动的硬岩，就往石缝里塞炸药（nitroglycerin，硝化甘油，极不稳定，常常提前爆炸）。\n\n你坐在山下温暖的办公室里，看着工程进度表。你知道一件事，但你选择不去细想：赶进度的每一步，背后都压着华工的命——炸药炸飞、巨石砸下、从悬崖坠落。\n\n你面前有两个选择。一是放慢速度、多花钱保护工人安全；二是按现在的速度往前赶，因为对手在追，因为每一英里都是钱。\n\n你心里清楚：死的不是你的人，是「那些华工」。在你的账本上，他们是一行成本，不是一个个名字。\n\n这一刻你得问自己：当一个人变成账本上的一行数字，你还会为他放慢脚步吗？',
        en: 'Now you are me.\n\nYou are president of the Central Pacific Railroad. Over ten thousand Chinese workers are carving a road for you through the Sierra Nevada. The hardest stretch is called the Summit Tunnel, a tunnel more than 500 meters long that has to be cut by force through solid granite.\n\nThere were no machines like today\'s. Workers used hand drills and iron hammers, striking blow by blow. When they hit rock too hard to break, they packed nitroglycerin into the cracks, a substance so unstable it often exploded early.\n\nYou sit in a warm office at the foot of the mountain, looking at the progress chart. You know one thing, but you choose not to dwell on it: every step forward on this schedule is weighed down with the lives of Chinese workers, blown apart by the blast, crushed by falling rock, fallen from a cliff.\n\nYou have two choices. One, slow down and spend more to protect the workers\' safety. Two, keep pushing at the current pace, because the rival is chasing, because every mile is money.\n\nYou know it in your gut: the ones dying are not your people, they are "those Chinese." On your ledger, they are a line of cost, not names.\n\nSo here you must ask yourself: when a person becomes a line of numbers in a ledger, will you still slow down for him?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Summit Tunnel 500 多米花岗岩 + 手钻铁锤 + nitroglycerin 不稳定常提前炸 + 你在温暖办公室看进度表 + 赶进度的每一步都压着华工的命 + 两个选择 (放慢保安全 vs 按速度赶因对手在追每英里是钱) + 死的是「那些华工」账本一行成本 + 当人变成数字你还会放慢吗',
      engagementHook: '在你的账本上，他们不是一个个名字，是一行成本。当一个人变成账本上的一行数字，你还会为他放慢脚步吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没放慢。我们赶进度。\n\n1866 到 1867 年那两个冬天，是华工死得最多的时候。内华达山脉冬天的雪能堆到 12 米高。为了赶工，华工被安排在雪下挖隧道、铺轨——他们在雪里挖出通道，住在雪洞里，靠透气孔呼吸。\n\n然后是雪崩。整片山坡的雪轰一声塌下来，把整营的华工连人带工棚卷走。开春雪化了，才在山下找到尸体——有的手里还攥着工具。\n\n到底死了多少华工，没有人认真数过。有人说几百，有人说上千。公司的账本上，从来没有为他们单独列过一栏。\n\n我那时候在做什么？我在跟联合太平洋铁路比谁修得快。1869 年 4 月，我们的华工（和一起干活的爱尔兰铺轨工）创下一个纪录：一天铺了 10 英里铁轨——这个纪录到今天没人破。\n\n我把这当成华工「能干」的证明，拿去给报纸炫耀。\n\n可我没说的是：创这个纪录的那天，距离那些被雪崩埋掉的同伴，才过去两年。他们的命，垫成了我履历表上的一行光荣数字。',
        en: 'I did not slow down. We pushed the schedule.\n\nThe two winters of 1866 and 1867 were when the Chinese workers died most. The snow in the Sierra Nevada could pile up to 12 meters in winter. To keep on schedule, the Chinese workers were set to dig tunnels and lay track under the snow. They dug passages through the snow, lived in snow caves, breathed through air holes.\n\nThen came the avalanches. The snow of a whole hillside crashed down at once, sweeping away entire camps of workers, men and shacks together. When the snow melted in spring, the bodies were found at the foot of the slope, some still gripping their tools.\n\nHow many Chinese workers died in all, no one ever counted carefully. Some say hundreds, some say over a thousand. On the company\'s ledger, there was never a separate column for them.\n\nWhat was I doing then? I was racing the Union Pacific to build faster. In April 1869, our Chinese workers, alongside the Irish track-layers working with them, set a record: ten miles of track laid in a single day. No one has broken that record to this day.\n\nI took it as proof the Chinese were "capable," and showed it off to the newspapers.\n\nBut what I did not say was this: the day that record was set was only two years after the comrades buried by the avalanches. Their lives were the paving stone under one glorious number on my résumé.',
      },
      deliverGoal: 'N5 story — 1866-67 两冬死最多 (雪堆 12 米/雪下挖隧道铺轨/住雪洞透气孔) + 雪崩卷走整营/开春找尸有的攥着工具 + 死多少没人数 (几百到上千/账本没列) + Stanford 在比快 + 1869.4 一天铺 10 英里纪录至今没破 + 拿去炫耀「华工能干」+ 但纪录那天距雪崩埋掉的同伴才两年/命垫成履历光荣数字',
      engagementHook: '一天铺 10 英里的世界纪录，距离那些被雪崩埋掉的同伴，才过去两年。同一群人的「能干」被拿去炫耀，他们的死却没人数。这两件事，老板看见的是哪一件？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1869 年 5 月 10 日，金道钉那一天。\n\n两条铁路在 Promontory Summit 碰头。摄影师架好相机，要拍一张载入史册的合影。两家公司的总裁、工程师、政要，全挤到两个火车头中间，握手、举酒、欢呼。\n\n你猜画面里有谁？没有一个华工。\n\n是华工凿穿了那道花岗岩墙，是华工在雪下铺出最险的那几十英里，是华工为主力创下一天 10 英里的纪录。可拍那张「历史性合影」时，他们被请到了镜头外。\n\n这就是我要你停下来看清的一笔：用的时候，他们是「能修长城的民族」；庆功的时候，他们连画面都进不去。把一群人用到极致，再把他们从故事里抹掉——这不是疏忽，这是一种选择。\n\n而且，事情没停在抹掉。就在这条铁路修好后没几年，加州街头开始有人喊：「华人抢走了我们的工作！」当年最需要他们的人，包括我，转头开始把他们往门外推。\n\n（华工们后来怎么样、他们从哪里来、又被推去了哪里——你换到台山华工那一遍，会从他们自己嘴里听见。）',
        en: 'May 10, 1869, the day of the golden spike.\n\nThe two railroads met at Promontory Summit. The photographer set up his camera to take a picture for the history books. The presidents, engineers, and dignitaries of both companies all crowded between the two locomotives, shaking hands, raising glasses, cheering.\n\nGuess who is in the picture? Not a single Chinese worker.\n\nIt was Chinese workers who bored through that granite wall, Chinese workers who laid the most dangerous dozens of miles under the snow, Chinese workers who set the ten-mile-a-day record. But when that "historic photograph" was taken, they were sent outside the frame.\n\nThis is the stroke I want you to stop and see clearly: when in use, they were "a people who could build the Great Wall"; when celebrating, they could not even get into the picture. To use a group of people to the limit and then erase them from the story, this is not an oversight. It is a choice.\n\nAnd it did not stop at erasing. Just a few years after this railroad was finished, voices began on California streets: "The Chinese stole our jobs!" The very people who had needed them most, myself included, turned and began to push them out the door.\n\n(What became of the Chinese workers later, where they came from, and where they were pushed to, you will hear from their own mouths when you switch to the Taishan worker\'s pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1869.5.10 金道钉合影摄影师拍载入史册照 + 没一个华工 + 是华工凿穿花岗岩/雪下铺险路/创纪录但被请到镜头外 + 用时是「能修长城的民族」庆功时进不去画面 = 选择不是疏忽 + 修好没几年加州喊「华人抢工作」最需要他们的人(含 Stanford)转头往外推 + 桥到台山华工 lens',
      engagementHook: '用的时候是「能修长城的民族」，庆功的时候连画面都进不去。把人用到极致再从故事里抹掉——这是疏忽，还是一种选择？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实告诉你，我对华人的态度，从一开始就是分裂的。\n\n早在 1862 年，我当加州州长时，在给立法机关的咨文里，公开说过华人是「劣等种族」，说要保护加州不被这种移民「玷污」。\n\n可三年后，1865 年，正是我的公司大量招华工——因为他们能干、便宜、肯卖命。\n\n你看出这里面的拧巴了吗？同一个我：嘴上说华人「劣等」，账本上靠华人赚钱。\n\n这不是我一个人的拧巴，这是整个加州的拧巴。资本家要便宜的华工，白人工人却恨华工抢饭碗——尤其是 1870 年代经济不景气，白人失业，街头喊「华人滚出去」的声音越来越响。\n\n政客们算了一笔账：华人不能投票（他们被法律挡在公民权外），白人工人能投票。要选票，就得站在喊「排华」的那一边。\n\n于是连我这种靠华工发家的人，最后也没有站出来替他们说话。我需要华工的劳力，但我不需要替没有选票的人挡子弹。\n\n用得着的时候用，用不着、还碍事的时候，就随大流把他们推开。这就是「利用」最冷的那一面。',
        en: 'I have to be honest with you. My attitude toward the Chinese was split from the start.\n\nAs early as 1862, while governor of California, in a message to the legislature, I publicly called the Chinese an "inferior race," and said California must be protected from being "tainted" by such immigrants.\n\nYet three years later, in 1865, it was my own company that hired Chinese workers in great numbers, because they were capable, cheap, and willing to risk their lives.\n\nDo you see the contradiction? The same me: calling the Chinese "inferior" with my mouth, making money off the Chinese on my ledger.\n\nThis was not my contradiction alone. It was the contradiction of all California. The capitalists wanted cheap Chinese labor, but the white workers hated the Chinese for taking their jobs, especially in the 1870s when the economy slumped, white men lost work, and the street cries of "Chinese out" grew louder.\n\nThe politicians did the arithmetic: the Chinese could not vote (the law kept them out of citizenship), white workers could vote. To win votes, you stood on the side that cried "exclusion."\n\nAnd so even a man like me, who built his fortune on Chinese labor, in the end did not stand up to speak for them. I needed the labor of the Chinese, but I did not need to take a bullet for people with no votes.\n\nUse them when useful; when no longer useful and in the way, go with the tide and push them aside. This is the coldest face of "use."',
      },
      deliverGoal: 'N7 story — 1862 致立法机关咨文称华人「劣等种族」要保护加州不被玷污 + 三年后 1865 大量招华工 + 同一个我嘴上劣等账本靠华人 + 整个加州拧巴 (资本家要便宜华工/白人工人恨抢饭碗/1870s 不景气喊滚出去) + 政客算账 (华人不能投票/白人能/要选票站排华边) + 连靠华工发家的我也不替没选票的人挡子弹 + 用得着用用不着推开 = 利用最冷的一面',
      engagementHook: '政客算了一笔账：华人不能投票，白人能。要选票，就得站在喊排华的那一边。当一个人没有选票，他在政治账本上还值多少？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1882 年，那股排华的浪潮，变成了一部法律。\n\n这一年，美国国会通过了 Chinese Exclusion Act（排华法案）。它做了一件美国历史上从没做过的事：第一次，按种族，禁止一整个民族的人移民进入美国。\n\n法案规定：禁止华人劳工再进入美国（一开始定 10 年，后来一再延长）；而且——这一条最狠——明确规定，已经在美国的华人，永远不能归化成为美国公民。\n\n你听清这两条的分量：\n第一，门关上了。后来想来的华工，进不来。\n第二，已经在这里的华工——包括那些用命修过我这条铁路的人——被永远钉在「外国人」的身份上。他们可以在这里干活、纳税、变老、死去，但永远不算「美国人」，永远没有投票权，永远不能把家人接来团聚。\n\n这是美国第一部针对特定族裔的移民禁令。一个标榜「人人生而平等」「机会之地」的国家，亲手把一扇门，按肤色和血统，关在了一群人脸上。\n\n而修起这个国家东西大动脉的，正是被关在门外的这群人。',
        en: 'In 1882, that tide of exclusion became a law.\n\nThat year, the United States Congress passed the Chinese Exclusion Act. It did something America had never done before: for the first time, by race, it barred an entire people from immigrating into the United States.\n\nThe act ruled: Chinese laborers were forbidden to enter the United States (set at ten years at first, then extended again and again); and, the harshest clause, it ruled plainly that the Chinese already in America could never be naturalized as U.S. citizens.\n\nHear the weight of these two clauses:\nFirst, the door was shut. Chinese laborers who later wished to come could not get in.\nSecond, the Chinese already here, including those who had built my railroad with their lives, were nailed forever to the status of "foreigner." They could work here, pay taxes, grow old, and die, but would never count as "American," never have the vote, never be allowed to bring their families to reunite.\n\nThis was America\'s first immigration ban aimed at a specific ethnicity. A country that proclaimed "all men are created equal" and "the land of opportunity" shut a door, by skin color and bloodline, in the faces of a group of people.\n\nAnd the people shut outside that door were the very ones who had built this country\'s great east-west artery.',
      },
      deliverGoal: 'N8 story — 1882 Chinese Exclusion Act 排华法案 + 美国史首次按种族禁一整个民族移民 + 两条 (禁华工再入 10 年后延长 / 已在美华人永不能归化公民) + 两条分量 (门关上后来进不来 / 已在的含修铁路的人永钉外国人身份 干活纳税变老死但不算美国人无投票权不能接家人) + 首部针对特定族裔移民禁令 + 标榜人人平等机会之地却按肤色关门 + 被关外的正是修国家大动脉的人',
      engagementHook: '一个标榜「人人生而平等」「机会之地」的国家，第一次按肤色和血统，把一扇门关在一群人脸上——而这群人，正是修起它东西大动脉的人。这部法律告诉你「机会之地」这四个字，对谁算数？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1893 年死了。我留下两样东西，正好是我这个人的两面。\n\n一样是那条铁路。它真的改变了美国：东西海岸连成一体，货物、人口、财富顺着铁轨流动，美国从此成长为一个真正横跨大陆的国家。这条路的西半段，是华工用命凿出来的。\n\n另一样，是我用赚来的钱办的一所大学——为纪念我早逝的儿子。今天它叫斯坦福大学（Stanford University），是世界上最好的大学之一。修这所大学、铸这笔财富的钱，有很大一部分，来自那条用华工的命换来的铁路。\n\n而排华法案呢？它没有跟我一起死。它一延再延，一直管到 1943 年才被废除——整整 61 年。在这 61 年里，无数华人家庭被生生拆散：男人在美国做工，妻儿被挡在中国，一辈子见不上几面。\n\n（被这部法案拆散的家、被永远挡在公民权外的人生，是什么滋味——你换到台山华工那一遍，会亲自走一遍。）\n\n你看，我这一生留下的，是一条伟大的铁路、一所伟大的大学，和一道把人按血统关在门外、关了 61 年的法律。这三样，都是真的。',
        en: 'I died in 1893. I left behind two things, which are exactly the two faces of who I was.\n\nOne is that railroad. It truly changed America: the east and west coasts joined into one, goods, people, and wealth flowing along the rails, and America grew from then into a country that truly spanned the continent. The western half of that road was carved out by Chinese workers with their lives.\n\nThe other is a university I founded with the money I made, in memory of my son who died young. Today it is called Stanford University, one of the finest universities in the world. A large part of the money that built that university and forged that fortune came from the railroad traded for the lives of Chinese workers.\n\nAnd the Chinese Exclusion Act? It did not die with me. It was extended again and again, governing until it was repealed only in 1943, a full 61 years. In those 61 years, countless Chinese families were torn apart: the men working in America, their wives and children barred in China, scarcely meeting a few times in a lifetime.\n\n(What it tasted like, the families this act tore apart, the lives barred forever from citizenship, you will walk through yourself when you switch to the Taishan worker\'s pass.)\n\nYou see, what I left behind in my life is a great railroad, a great university, and a law that shut people out the door by bloodline for 61 years. All three are true.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Stanford 1893 死留两样 (铁路真改变美国东西连一体/西半段华工用命凿 + 用赚的钱办大学纪念早逝儿子 = 斯坦福大学/钱很大部分来自华工命换的铁路) + 排华法案没跟他死/一延再延到 1943 才废 61 年/无数华人家庭拆散(男人在美妻儿挡在中国一辈子见不上几面) + 桥到台山华工 lens + 三样都是真的',
      engagementHook: '我留下一条伟大的铁路、一所伟大的大学，和一道把人按血统关在门外、关了 61 年的法律。这三样都是真的。一个人能同时留下这样三样东西，你怎么把它们放在一起看？',
      expectsRealAnswer: false,
    },
    {
      id: 'ls-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是建国的功臣。我顶着内华达山脉几乎不可能的工程，把一条横贯大陆的铁路修了出来，把一个被两片海岸撕开的国家缝成了一体。没有我赌上公司去赶这条路，美国成为一个大陆强国可能要再晚几十年。我还留下一所伟大的大学。\n\n另一种说法：我是制度性排斥的得益者和帮凶。同一双手，用上万华工的命换来铁路和财富，又在他们用完之后，随着排华的政治浪潮把他们推开——我嘴上说他们「劣等」，账本上靠他们发家，最后没替没有选票的他们说一句话。我的财富里，垫着雪崩下没人数过的尸体；我的沉默里，有一部把人关了 61 年的法律。\n\n这两边不是「功劳加污点」。是同一套逻辑的两面——「把人当成可用的劳力」这件事，既修得成铁路，也排得掉人。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a builder of the nation. Against the near-impossible engineering of the Sierra Nevada, I built a transcontinental railroad and sewed a country torn between two coasts into one. Without my betting the company to push this road through, America might have become a continental power decades later. I also left a great university.\n\nThe other view: I was a beneficiary and accomplice of institutional exclusion. The same hands that traded the lives of over ten thousand Chinese workers for a railroad and a fortune also, once they were used up, pushed them away with the political tide of exclusion. I called them "inferior" with my mouth, built my fortune on them in my ledger, and in the end did not speak a single word for people with no votes. Under my fortune lie the uncounted bodies beneath the avalanches; in my silence is a law that shut people out for 61 years.\n\nThese are not "credit and stain." They are two faces of one logic. The act of "treating people as usable labor" can build a railroad, and it can exclude people too.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (建国功臣/顶 Sierra Nevada 修成铁路缝合国家/没他美国晚几十年/留大学) / 另一种说法 (制度性排斥得益者帮凶/同双手用华工命换财富又用完推开/嘴上劣等账本靠他们/没替没选票的人说话/财富垫着没数过的尸体/沉默里有 61 年的法律) / 同一套逻辑两面「把人当可用劳力」既修铁路也排人 / 想 30 秒',
      engagementHook: '建国功臣，和制度性排斥的帮凶——是同一个我，同一套逻辑的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'ls-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n他用一群人的命，修起了一个国家的动脉，也成就了自己的财富和身后名；这群人用完之后，他跟着浪潮，把他们关在了公民权和这个国家的门外。一边是真实的伟大成就，一边是真实的制度性伤害。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有「被用的时候很需要、用完就被丢开」的人或事——某个干完最累的活就没人记得的人，某个被夸完「真能干」转头就被忽略的同学，某个项目里出力最多却没上台领奖的那个？\n\n那时候，你会是那个享受成果、转身就忘的人，还是会回头记住一句：这件事，是谁的命、谁的力气换来的？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nWith the lives of a group of people he built a nation\'s artery and made his own fortune and lasting name; once that group was used up, he went with the tide and shut them out of citizenship and out of this country. On one side, real and great achievement; on the other, real institutional harm. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, is there a person or a thing that is "much needed when in use, cast aside when used up," someone forgotten the moment the hardest job is done, a classmate praised as "so capable" and then ignored, the one who did the most work on a project but never went up to take the prize?\n\nWhen that happens, will you be the one who enjoys the result and turns away to forget, or the one who looks back and remembers one line: this thing, whose life, whose effort, bought it?',
      },
      deliverGoal: 'N11 close — 评价 (用一群人命修起国家动脉成就财富身后名/用完关在公民权和国家门外 = 真实伟大成就 vs 真实制度伤害同一天平) + transfer「今天你身边被用时需要用完就丢开的人或事 (干完最累活没人记得/被夸真能干转头忽略/出力最多没上台领奖)」+ 你会享受成果转身就忘还是回头记住这是谁的命谁的力气换来的',
      engagementHook: '他用一群人的命修起了国家动脉，用完就把他们关在门外。你会怎么评价这样一个人？今天你身边那个「被用时需要、用完就丢开」的人或事，你会是享受成果转身就忘的人，还是回头记住一句的人？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Wong Chin Foo (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var wongChinFooLens = {
  id: 'wong-chin-foo',
  name: 'Wong Chin Foo',
  nameCn: '王清福',
  role: 'lonely-mediator',
  perspectiveTag: 'chinese-american-coiner',
  icon: '📰',
  description: {
    cn: '一个站在两个世界中间、两边都不完全接纳他的人。1847 年生在山东，年轻时被传教士带到美国受教育，英文说得比许多白人还漂亮。1870 年代他回到美国，看见自己的同胞被当成会走路的牲口，被报纸丑化、被街头辱骂、被法律往外推。他没有军队，没有选票，只有一支笔和一张嘴。他办报、演讲、上法庭、跟排华政客公开辩论，还造了一个词「Chinese American」（华裔美国人），第一次理直气壮地说我们既是华人，也是美国人。这一遍让你从一个孤独的辩护者位置，看一个人怎么用语言，替一群没有声音的人争一个名分。',
    en: 'A man who stood between two worlds, fully accepted by neither. Born in 1847 in Shandong, China, taken to America as a youth by missionaries and educated there, he spoke English more elegantly than many white men. When he returned to America in the 1870s, he saw his own people treated as walking livestock, caricatured in the newspapers, cursed on the streets, pushed out by the law. He had no army, no vote, only a pen and a tongue. He published newspapers, gave lectures, went to court, debated exclusionist politicians in public, and coined a phrase, "Chinese American," to say for the first time, with his head high: we are Chinese, and we are American. This pass puts you in the seat of a lonely advocate, watching how one person used language to win a name for a people with no voice.',
  },
  storyboard: [
    {
      id: 'wcf-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '有人问我：你到底是中国人，还是美国人？\n\n这个问题，1880 年代每天都有人当面问我，语气里带着刺。在他们看来，答案只能是一个——要么是「中国佬」，永远的外国人；要么是假装的、不可能真正归化的「黄祸」。\n\n我，Wong Chin Foo（王清福），给了一个当时没人给过的答案。我造了一个新词，后来把它印在我自己办的报纸上：\n\nChinese American。华裔美国人。\n\n两个词，中间没有「或者」。我既是华人，也是美国人。这不是我要二选一的问题，这是我两个都是。\n\n那个年代，说这句话需要勇气。报纸把我的同胞画成长尾巴的怪物，街上的孩子朝我们扔石头，国会正在写一部法律，要把我们永远挡在「美国人」这个身份外面。\n\n这一遍，你坐进我的位置。你没有军队，没有选票，手里只有一支笔。你要替一群被当成牲口的人，争一个做人的名分。',
        en: 'People asked me: are you Chinese, or American?\n\nIn the 1880s, someone asked me that to my face nearly every day, with a barb in the tone. To them, the answer could only be one thing: either a "Chinaman," a foreigner forever, or a faking, never-truly-naturalizable "yellow peril."\n\nI, Wong Chin Foo, gave an answer no one had given before. I coined a new phrase, and later printed it in the newspaper I ran myself:\n\nChinese American.\n\nTwo words, with no "or" between them. I am Chinese, and I am American. This was not a question of choosing one; this was me being both.\n\nIn that age, saying that line took courage. The newspapers drew my people as tailed monsters, children on the street threw stones at us, and Congress was writing a law to bar us forever from the identity "American."\n\nThis pass puts you in my seat. You have no army, no vote, only a pen in your hand. You must win, for a people treated as livestock, a name as human beings.',
      },
      deliverGoal: 'N1 hook — 「你到底是中国人还是美国人」当面带刺问 + 当时答案只能一个 (中国佬永远外国人/假装归化的黄祸) + Wong Chin Foo 造新词印在自己办的报上 = Chinese American 华裔美国人/中间没「或者」/两个都是 + 那年代说这话需勇气 (报纸画长尾怪物/孩子扔石头/国会写法律挡在美国人外) + 这一遍视角 (没军队没选票只有一支笔替被当牲口的人争做人名分)',
      engagementHook: '「你到底是中国人，还是美国人？」在那个年代，说出「我两个都是」需要勇气。如果有人逼你在两个身份里只选一个，你会怎么回答？',
      expectsRealAnswer: false,
    },
    {
      id: 'wcf-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我怎么会站在这么尴尬的位置上。\n\n我 1847 年生在山东。年轻时家境败落，被一个美国传教士看中，带到美国读书。我在美国受了完整的西式教育，学英文、学演讲、学辩论。等我长大，我说的英文比很多土生土长的白人还漂亮。\n\n这件事给了我一样别的华工没有的武器：我能用美国人自己的语言，跟美国人讲道理。\n\n但它也把我推进一个谁都不完全接纳的夹缝里。\n\n在美国白人眼里，我英文再好，也还是个「中国佬」——一个不该来、不该留的外国人。\n\n在传统华工眼里，我读洋书、信过洋教、说一口洋话，我是个「太美国」的怪人。\n\n两个世界，我哪边都沾着，又哪边都不完全属于。\n\n这种夹缝里的人，最容易做的事是闭嘴、躲起来、谁也不得罪。但我选了相反的路——正因为我能在两个世界之间说话，我觉得，那替沉默的同胞发声这件事，没人比我更该做。',
        en: 'First, how I came to stand in such an awkward place.\n\nI was born in 1847 in Shandong. My family fell on hard times when I was young, and an American missionary took notice of me and brought me to America to study. I received a full Western education in America, learning English, oratory, debate. By the time I grew up, I spoke English more elegantly than many white men born and raised there.\n\nThis gave me a weapon other Chinese workers did not have: I could reason with Americans in their own language.\n\nBut it also pushed me into a crack where neither side fully accepted me.\n\nIn the eyes of white Americans, however good my English, I was still a "Chinaman," a foreigner who should not have come and should not stay.\n\nIn the eyes of traditional Chinese workers, I had read foreign books, once held a foreign faith, spoke a foreign tongue, and I was a strange creature, "too American."\n\nTwo worlds, and I touched both yet fully belonged to neither.\n\nA person in such a crack most easily chooses to shut up, hide, offend no one. But I chose the opposite road. Precisely because I could speak between two worlds, I felt that speaking up for my silent people was something no one was more bound to do than I.',
      },
      deliverGoal: 'N2 setup — Wong 1847 生山东 + 家境败落被美国传教士带到美国读书 + 完整西式教育英文演讲辩论比白人还漂亮 + 武器: 用美国人自己语言讲道理 + 但推进谁都不接纳的夹缝 (白人眼里仍是中国佬不该来不该留 / 传统华工眼里读洋书说洋话太美国怪人) + 哪边都沾哪边都不属于 + 夹缝人最易闭嘴躲起来但他选相反 (正因能两个世界间说话所以替沉默同胞发声没人比他更该做)',
      engagementHook: '我哪个世界都沾着，又哪个世界都不完全属于。这种夹缝里的人最容易选择闭嘴。可我觉得，正因为我能在两边说话，替同胞发声这件事就更该我做。你觉得「能力越特别，责任就越大」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'wcf-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我回到美国时，看见的景象让我睡不着。\n\n那是 1870 年代。横贯大陆铁路刚修完，上万华工被「用完」了，散到各个城市找活路——开洗衣店、做厨工、种菜、做佣人。可经济一不景气，白人就把失业的账算到华工头上。\n\n报纸是带头的。当时最有名的政治漫画家，把华人画成长着长辫子、眯眼、龅牙、像老鼠一样的怪物，标题写着「黄祸」（Yellow Peril）——意思是黄种人是会吞掉白人世界的瘟疫。\n\n街上更直接。华人被吐口水、被剪掉辫子（在当时那是奇耻大辱）、被殴打。1871 年洛杉矶，一群暴民冲进华人区，一夜之间打死、吊死了至少 17 个华人——这是美国史上最大的一次私刑屠杀之一。\n\n而华工们大多不会英文，看不懂报纸怎么骂他们，更不会上法庭、写文章替自己辩护。他们像一群被绑住嘴的人，挨打却喊不出声。\n\n我看着这一切，心里很清楚：能替他们喊出声的人太少了。少到，可能就我一个。',
        en: 'When I returned to America, what I saw kept me from sleeping.\n\nIt was the 1870s. The transcontinental railroad had just been finished, the ten thousand-plus Chinese workers were "used up," scattered into cities looking for a living, opening laundries, cooking, growing vegetables, working as servants. But the moment the economy slumped, white men laid the bill for their joblessness on the Chinese.\n\nThe newspapers led the way. The most famous political cartoonists of the day drew the Chinese as long-queued, slant-eyed, buck-toothed, rat-like monsters, with the caption "Yellow Peril," meaning the yellow race was a plague that would devour the white world.\n\nThe streets were more direct. The Chinese were spat on, had their queues cut off (a profound humiliation in that time), were beaten. In 1871 in Los Angeles, a mob stormed the Chinese quarter and in one night killed and hanged at least 17 Chinese, one of the largest lynching massacres in American history.\n\nAnd most Chinese workers spoke no English, could not read how the papers cursed them, still less go to court or write articles to defend themselves. They were like people with their mouths bound, beaten yet unable to cry out.\n\nWatching all this, I knew clearly: those who could cry out for them were too few. So few that it might be only me.',
      },
      deliverGoal: 'N3 setup — 1870s 铁路修完上万华工被用完散到城市找活 (洗衣/厨工/种菜/佣人) + 经济不景气白人把失业账算华工头上 + 报纸带头 (政治漫画画长辫眯眼龅牙老鼠怪物/标题 Yellow Peril 黄祸) + 街上吐口水剪辫子(奇耻大辱)殴打 + 1871 洛杉矶暴民一夜打死吊死至少 17 华人(最大私刑屠杀之一) + 华工多不会英文看不懂骂不会上庭写文章辩护 = 被绑住嘴挨打喊不出声 + 能替喊声的太少可能就我一个',
      engagementHook: '他们看不懂报纸怎么骂自己，也不会上法庭替自己辩护——像一群被绑住嘴的人，挨打却喊不出声。当一群人没法替自己说话，谁有责任替他们开口？',
      expectsRealAnswer: false,
    },
    {
      id: 'wcf-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你站在一群被当成怪物的同胞前面，你手里没有他们没有的任何强力工具——你没有军队，没有钱，连选票都没有（法律不让华人入籍，自然也没有投票权）。\n\n你只有两样东西：一支笔，一张能用英文跟白人辩论的嘴。\n\n你面前有几条路。\n\n一条是低头：别惹事，别出头，安安静静做个「模范的安静中国人」，也许白人就少打你几下。很多人劝你走这条路。\n\n另一条是用美国人自己的武器，反过来打他们：他们的国家不是天天把「人人生而平等」「自由」「人权」挂在嘴上吗？那好，你就拿他们自己的开国理想，去质问他们——既然人人平等，凭什么单单把华人按种族关在门外？\n\n这条路很危险。你会被骂、被威胁、被攻击。但你心里清楚：低头换不来尊重，只换来更狠的踩踏。\n\n这一刻你得选：你是做那个安静的、活得安全一点的人，还是做那个站出来、用语言迎着拳头上的人？',
        en: 'Now you are me.\n\nYou stand before a people treated as monsters, and in your hands you have no strong tool they lack. You have no army, no money, not even a vote (the law forbids the Chinese to be naturalized, so of course no vote either).\n\nYou have only two things: a pen, and a tongue that can debate white men in English.\n\nBefore you lie several roads.\n\nOne is to bow your head: do not stir up trouble, do not stand out, quietly be a "model quiet Chinese," and perhaps the white men will beat you a little less. Many urge you to take this road.\n\nAnother is to turn their own weapon back on them: does their country not hang "all men are created equal," "liberty," "human rights" on its lips every day? Very well, take their own founding ideals and use them to question them: if all are equal, by what right do you shut the Chinese alone out the door by race?\n\nThis road is dangerous. You will be cursed, threatened, attacked. But you know clearly: bowing your head does not buy respect, it buys a harder trampling.\n\nSo here you must choose: will you be the quiet one who lives a little safer, or the one who steps forward and walks into the fists with language?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 站在被当怪物的同胞前 + 没军队没钱连选票都没 (法律不让华人入籍自然没投票权) + 只有一支笔一张能英文辩论的嘴 + 几条路 (低头当模范安静中国人少挨打/很多人劝走这条 vs 用美国人自己武器反打: 拿人人平等自由人权开国理想质问凭什么单单按种族关华人) + 后者危险被骂威胁攻击 + 但低头换不来尊重只换更狠踩踏 + 选: 安静活安全 还是站出来用语言迎拳头',
      engagementHook: '你手里只有一支笔。要么低头当个安静的人，活得安全一点；要么拿美国人自己的「人人平等」反问他们，迎着拳头上。这一步，你会怎么选？',
      expectsRealAnswer: false,
    },
    {
      id: 'wcf-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了迎着拳头上。\n\n我做的第一件事，是夺回「话语权」：别人怎么称呼我们，我们说了不算，那我们就自己来命名自己。\n\n1883 年，我在纽约创办了一份报纸，叫《华洋新报》（The Chinese American）——这可能是美国历史上第一份华人办的英文报纸。报纸的名字，就是我造的那个词：Chinese American。\n\n这个词在当时是一颗炸弹。因为主流社会的逻辑是：华人不可能是美国人，「Chinese」和「American」是互相排斥的两个东西。而我把这两个词焊在一起，等于公开宣布：我们既是华人，也是美国人，这两件事可以同时成立。\n\n我用这份报纸做三件事：用英文把华人真实的生活和贡献讲给白人听，让他们看见漫画背后是活生生的人；逐条反驳报纸上对华人的污蔑；记录排华暴行，让它们不被遗忘。\n\n一个被当成「外国人」的人，用「敌人」的语言，给自己的同胞争一个新名字。这件事，1883 年，全美国大概只有我在做。',
        en: 'I chose to walk into the fists.\n\nThe first thing I did was take back the power to name. If others get to decide what to call us, then we will name ourselves.\n\nIn 1883, I founded a newspaper in New York called The Chinese American, possibly the first English-language newspaper run by a Chinese person in American history. The paper\'s name was the very phrase I had coined: Chinese American.\n\nThat phrase was a bomb at the time. For the logic of mainstream society was: the Chinese cannot be American, "Chinese" and "American" are two mutually exclusive things. By welding the two words together, I publicly declared: we are Chinese, and we are American, and both can hold true at once.\n\nWith this newspaper I did three things:\nFirst, in English, I told white readers the real life, culture, and contributions of the Chinese, so they would see that behind the cartoon were living people.\nSecond, I rebutted, point by point, the slanders and lies about the Chinese in the papers.\nThird, I recorded the atrocities of exclusion, so they would not be forgotten.\n\nA man treated as a "foreigner," running a newspaper, in the "enemy\'s" language, to win a new name for his own people. In 1883, in all America, it was likely only I doing this.',
      },
      deliverGoal: 'N5 story — Wong 选迎拳头上 + 第一件夺回话语权 (别人称呼我们说了不算就自己命名自己) + 1883 纽约创办 The Chinese American 报 (可能美国史首份华人办英文报/名字就是他造的词) + 这词是炸弹 (主流逻辑华人不可能是美国人两词互斥/他焊一起公开宣布两件事同时成立) + 报纸做三件事 (英文讲华人真实生活文化贡献让白人看见漫画背后活人/逐条反驳污蔑谎言/记录排华暴行不被遗忘) + 用敌人语言给同胞争新名字 1883 全美大概只他在做',
      engagementHook: '别人怎么称呼我们，我们说了不算——那我们就自己命名自己。我办报，用「敌人」的语言，给同胞争一个新名字。「自己给自己起名字」，为什么是一件这么有力量的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'wcf-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我手里这件最有力的武器，其实是美国人自己给我的。\n\n美国的开国文件——独立宣言（Declaration of Independence）——白纸黑字写着一句话：「人人生而平等。」这是美国人最自豪、天天挂在嘴上的一句。\n\n我把这句话，原原本本印在我的报纸上，然后反问：既然「人人」生而平等，那「人人」里面，包不包括华人？如果包括，凭什么单单把华人按种族关在公民权外？如果不包括，那你们「人人平等」这四个字，是不是个谎？\n\n我用他们最神圣的话，去戳他们最难堪的伤口。\n\n这件事，不只我一个人在做。同一个年代，黑人领袖 Frederick Douglass（弗雷德里克·道格拉斯，从奴隶逃出来成为废奴运动巨人）也在用同一份独立宣言质问美国：你说人人平等，那黑人算不算「人人」？（你跑过 Douglass 那一遍，会认得这套打法。）\n\n你看出这里面的妙处了吗：我们这些被排斥的人，不是从外面攻击美国，我们是捡起美国自己写下的、却没对我们兑现的承诺，对准了写它的人。\n\n一句「人人平等」——白人写它的时候，没打算算上华人；可话一旦写在他们最神圣的文件上，就不再只属于他们了。',
        en: 'The most powerful weapon in my hands was, in fact, given to me by the Americans themselves.\n\nAmerica\'s founding document, the Declaration of Independence, writes one line in black and white: "all men are created equal." This is the line Americans are proudest of, the one on their lips every day.\n\nI printed that line, exactly as it was, in my newspaper, and then asked back: if "all men" are created equal, do the "all" include the Chinese? If they do, by what right do you shut the Chinese alone out of citizenship by race? If they do not, then is your "all men are equal" not a lie?\n\nI used their most sacred words to prod their most shameful wound.\n\nIn this I was not alone. In the same era, the Black leader Frederick Douglass, who escaped from slavery to become a giant of the abolition movement, was using that same Declaration to question America: you say all are equal, so do Black people count among the "all"? (Run the Douglass pass and you will recognize this move.)\n\nDo you see the beauty of it? We, the excluded, did not attack America from outside. We picked up the promise America wrote for itself yet never made good on for us, and aimed it back at the ones who wrote it.\n\nOne line, "all men are equal." When white men wrote it, they did not mean to count the Chinese; but once words are set down on their most sacred document, they no longer belong only to them.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 最有力武器是美国人自己给的 + Declaration of Independence「人人生而平等」最自豪天天挂嘴上 + Wong 原样印在报上反问 (人人包不包括华人/包括凭什么按种族关公民权外/不包括那四个字是谎) + 用最神圣的话戳最难堪的伤口 + 不只他一个: Frederick Douglass 同代用同份独立宣言质问 (黑人算不算人人/跨 Douglass lens) + 被排斥的人不从外攻击是捡起美国写下却没兑现的承诺对准写它的人 + 一句人人平等白人写时没打算算华人但写在最神圣文件上就不再只属于他们',
      engagementHook: '一句「人人生而平等」——白人写它的时候，没打算算上华人。可我把它原样印在报上，反问：「人人」里到底有没有我们？被排斥的人捡起对方自己写下的承诺，对准写它的人——你觉得这是最聪明的武器吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'wcf-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '光在报纸上说还不够，我还把仗打到了讲台和法庭上。\n\n那个年代，排华运动最响亮的声音，是一个叫 Denis Kearney 的加州工人领袖。他到处演讲，口号简单又煽动：「中国佬必须滚！」（The Chinese must go!）失业的白人工人听了热血沸腾。\n\n1887 年，我做了一件几乎没人敢做的事：我公开向 Kearney 下战书，要跟他面对面辩论。一个被当成「劣等外国人」的华人，要在公开讲台上，用英文，跟排华运动的头号人物正面对决。\n\n我还到处演讲，向白人听众解释中国文化、中国宗教、华人到底是什么样的人——我要让他们看见，他们恨的那个「黄祸」，是他们想象出来的，不是真的。\n\n我也走法律的路，组织华人争取权利，挑战那些专门针对华人的恶法。\n\n但你要知道，我打的是一场注定吃亏的仗。我能赢一场辩论、写一篇好文章、戳穿一个谎言——可对面是整个国家的舆论、整个加州的选票、整部正在成形的法律。我一支笔，对的是一台机器。',
        en: 'Speaking in the newspaper was not enough; I also took the fight to the lecture hall and the courtroom.\n\nIn that age, the loudest voice of the exclusion movement was a California labor leader named Denis Kearney. He gave speeches everywhere, his slogan simple and inflaming: "The Chinese must go!" Jobless white workers heard it and boiled with feeling.\n\nIn 1887, I did something almost no one dared: I publicly challenged Kearney to a face-to-face debate. A Chinese man treated as an "inferior foreigner" would stand on a public stage, in English, and meet the number-one figure of the exclusion movement head on.\n\nI also lectured widely, explaining Chinese culture, Chinese religion, what the Chinese actually were as people. I wanted them to see that the "yellow peril" they hated was something they had imagined, not real.\n\nI took the legal road too, organizing Chinese to fight for their rights, challenging the cruel laws aimed squarely at the Chinese.\n\nBut you must understand, I was fighting a fight bound to lose. I could win a debate, write a fine article, expose a lie. But across from me was the whole country\'s public opinion, all of California\'s votes, an entire law taking shape. One pen against a machine.',
      },
      deliverGoal: 'N7 story — 报纸不够把仗打到讲台法庭 + 排华最响亮声音 Denis Kearney 加州工人领袖 (到处演讲口号「The Chinese must go 中国佬必须滚」失业白人热血) + 1887 Wong 公开向 Kearney 下战书面对面辩论 (被当劣等外国人的华人公开讲台英文跟头号人物对决) + 到处演讲讲中国文化宗教让白人看见黄祸是想象不是真的 + 走法律组织华人挑战恶法 + 但注定吃亏的仗 (能赢辩论文章戳谎言但对面是整国舆论整州选票整部成形的法律) + 一支笔对一台机器',
      engagementHook: '我能赢一场辩论、写一篇好文章、戳穿一个谎言——可对面是整个国家的舆论、整个加州的选票、一整部正在成形的法律。一支笔对一台机器，明知会输，还要不要打？',
      expectsRealAnswer: false,
    },
    {
      id: 'wcf-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我尽了全力，可那部法律还是来了。\n\n早在 1882 年，国会就通过了 Chinese Exclusion Act（排华法案）：禁止华人劳工入境，禁止已经在美国的华人归化成公民。这是美国第一次按种族，把一整个民族关在门外。\n\n我办报、演讲、辩论、上法庭，都是在这部法案前后那些年里拼命做的，想阻止它，想让它早点废掉。\n\n结果呢？法案不但没废，反而一次比一次狠。1888 年的 Scott Act（斯科特法案）甚至规定：已经回中国探亲、手里拿着合法返美证件的华工，不许再回美国。一夜之间，大约两万个在外的华工，被关在了自己「家」的门外，再也回不来。\n\n说实话，有那么些时刻，我怀疑自己做的这一切到底有没有用。我赢的是几篇文章、几场辩论；输的是一整部国家级的法律、几十年的人心。\n\n这就是孤独的辩护者最难熬的地方：你做的事是对的，但「对」不一定赢。很多时候，你是在一场你这辈子注定看不到胜利的仗里，坚持做那件对的事。',
        en: 'I gave it my all, and still the law came.\n\nAs early as 1882, Congress passed the Chinese Exclusion Act: barring Chinese laborers from entry, barring Chinese already in America from being naturalized as citizens. It was the first time America, by race, shut an entire people out the door.\n\nMy publishing, lecturing, debating, going to court, all of it I did with everything I had in the years around this act. I wanted to stop it, wanted it repealed sooner.\n\nThe result? The act was not repealed but grew harsher with each step. The 1888 Scott Act even ruled that Chinese workers who had gone back to China to visit family, holding lawful re-entry papers, could not return to America. Overnight, some twenty thousand workers abroad were shut out the door of their own "home," never to come back.\n\nI watched my own desperate effort be ground down, bit by bit, by this machine.\n\nHonestly, there were moments I doubted whether all I did was of any use at all. What I won were a few articles, a few debates; what I lost was an entire national law, decades of hearts and minds.\n\nThis is the hardest part of being a lonely advocate: what you do is right, but "right" does not always win. Much of the time, you are in a fight you are fated never to see won in your lifetime, holding on to do the right thing anyway.',
      },
      deliverGoal: 'N8 story — 尽全力法律还是来 + 1882 Chinese Exclusion Act (禁华工入境/禁已在美华人归化/首次按种族关一整个民族) + Wong 办报演讲辩论上庭都在法案前后拼命做想阻止想早废 + 结果不但没废一次比一次狠 + 1888 Scott Act (已回中国探亲拿合法返美证件的华工不许再回/一夜约两万在外华工关在自己家门外回不来) + 看自己努力被机器碾过 + 怀疑有没有用 (赢几篇文章几场辩论输一整部国家级法律几十年人心) + 孤独辩护者最难熬: 做的是对的但对不一定赢/在注定看不到胜利的仗里坚持做对的事',
      engagementHook: '我做的事是对的，但「对」不一定赢。很多时候，你是在一场这辈子注定看不到胜利的仗里，坚持做那件对的事。如果你明知赢不了，还会坚持做对的事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'wcf-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1898 年死了，活了 51 岁。\n\n我死的时候，排华法案还牢牢地立在那里。我没等到它被废的那一天，它一直管到 1943 年，比我多活了 45 年。我这辈子打的那场仗，在我活着的时候，是输的。\n\n而且，很长一段时间里，我几乎被历史忘掉了。我办的报纸停了，我写的文章散了，我造的那个词也沉了很多年。教科书里没有我。我像一颗扔进大海的石子，扑通一声，水面就合上了。\n\n可是，故事没有停在这里。那个我造的词，没有真正死掉。今天，「Chinese American / 华裔美国人」这个说法，是几百万人理直气壮的自我称呼——他们大大方方地说：我既是华人，也是美国人。这正是我 1883 年想说、却被整个时代压住的那句话。\n\n我输掉了我那场仗。但我先一步说出口的那个名字，活了下来，活到今天，活在每一个说「我是华裔美国人」的人嘴里。\n\n（这个名字对今天的华裔孩子意味着什么，那个修铁路的台山华工的后代会怎么用它，你换到那一遍，会更懂。）',
        en: 'I died in 1898, at the age of 51.\n\nWhen I died, the Chinese Exclusion Act still stood firmly in place. I did not live to see the day it was repealed. It governed until 1943, outliving me by 45 years. The fight I fought my whole life was, while I lived, a loss.\n\nAnd for a long time, I was nearly forgotten by history. The newspaper I ran stopped, the articles I wrote scattered, the phrase I coined, "Chinese American," sank for many years. There was no me in the textbooks. I was like a stone thrown into the sea, a plop, and the surface closed over.\n\nBut the story did not stop here.\n\nThat phrase I coined did not truly die. Today, "Chinese American" is the self-name millions claim with their heads high, saying plainly: I am Chinese, and I am American. This is the very line I wanted to say in 1883 yet was pressed down by an entire era.\n\nI lost my fight. But the name I spoke one step ahead survived, survives to this day, lives in the mouth of everyone who says "I am Chinese American."\n\n(What this name means to Chinese American children today, and how the descendants of that railroad-building Taishan worker might use it, you will understand better when you switch to that pass.)',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Wong 1898 死 51 岁 + 死时排华法案还牢牢立着没等到废 (管到 1943 比他多活 45 年/活着时那场仗是输的) + 很长时间几乎被历史忘掉 (报停文章散造的词沉了/教科书没他/像扔进海的石子水面合上) + 但故事没停 + 那个词没真死: 今天 Chinese American 华裔美国人是几百万人理直气壮自我称呼 (大方说既是华人也是美国人 = 他 1883 想说被时代压住的话) + 他输了仗但先说出的名字活到今天活在每个说我是华裔美国人的人嘴里 + 桥到台山华工 lens (名字对今天华裔孩子的意义/后代怎么用)',
      engagementHook: '我输掉了我那场仗。但我先一步说出口的那个名字——「华裔美国人」——活了下来，活在今天每一个说「我是华裔美国人」的人嘴里。一个人输了仗，留下的一个词却赢了一百年。你怎么看这种「输」？',
      expectsRealAnswer: false,
    },
    {
      id: 'wcf-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是失败的孤胆英雄。我没钱、没军队、没选票，凭一支笔，正面硬刚整个排华的时代。我办了可能是美国第一份华人英文报，公开向排华头目下战书，用美国自己的开国理想质问美国。我活着的时候，每一场具体的仗几乎都输了——法案没废，同胞照样被关在门外，我自己死后还被遗忘。从结果看，我失败了。\n\n另一种说法：我是赢在身后的命名者。我造的「Chinese American」，先一步替几百万还没出生的人，争下了一个理直气壮的身份——「我既是华人，也是美国人」。我赢的不是某一场辩论，而是一场关于「华人到底能不能是美国人」的长仗里，最先插上的那面旗。我没看到胜利，但我让胜利在几十年后成为可能。\n\n这两边不是「失败加一点安慰」。是同一件事的两种时间尺度——在我那一生的尺度上，我输了；在一百年的尺度上，我赢了。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a failed lone hero. No money, no army, no vote, with only a pen, I went head to head against an entire age of exclusion. I founded what may be America\'s first Chinese English-language newspaper, publicly challenged the exclusion leader to a debate, questioned America with its own founding ideals. While I lived, nearly every concrete fight was lost. The act was not repealed, my people stayed shut out the door, and I was forgotten after death. By results, I failed.\n\nThe other view: I was a namer who won after death. The "Chinese American" I coined won, one step ahead, a head-held-high identity for millions not yet born: "I am Chinese, and I am American." What I won was not one debate, but the first flag planted in a long fight over whether the Chinese can be American at all. I did not see the victory, but I made the victory possible decades later.\n\nThese are not "failure with a little comfort." They are two time scales of one thing. On the scale of my one life, I lost; on the scale of a century, I won.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (失败的孤胆英雄/没钱军队选票凭一支笔硬刚排华时代/办首份华人英文报下战书用美国理想质问/活着时每场具体仗几乎都输法案没废同胞被关死后被忘/从结果失败) / 另一种说法 (赢在身后的命名者/造 Chinese American 先一步替几百万没出生的人争理直气壮身份/赢的不是某场辩论是长仗最先插的旗/没看到胜利但让胜利几十年后成为可能) / 同一件事两种时间尺度 (一生尺度输/一百年尺度赢) / 想 30 秒',
      engagementHook: '失败的孤胆英雄，和赢在身后的命名者——是同一个我，同一件事的两种时间尺度。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'wcf-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个夹在两个世界中间、哪边都不完全要他的人，凭一支笔，造了一个词，打了一场注定看不到胜利的仗——你会怎么评价这样一个人？\n\n他活着时输掉了几乎每一场具体的战斗；他死后很久，被他先一步说出口的那个名字，却赢了。「在自己看不到结果的仗里，坚持做对的事」，到底值多少分？你怎么评？\n\n再想一步：今天你身边，有没有「明知道一时半会儿改变不了，但你觉得不说不行」的事——班里某个被孤立的同学没人替他说话，某条不公平的规矩大家都忍着，某个被起外号、被贴标签的人？\n\n那时候，你会做那个安静、安全、随大流的人，还是会做那个——哪怕只有你一个、哪怕这辈子看不到结果——也愿意先开口、先把那个对的名字说出来的人？',
        en: 'Having walked my whole life, a man caught between two worlds, fully wanted by neither, who with only a pen coined a word and fought a fight fated never to be seen won, how would you judge a man like this?\n\nWhile he lived he lost nearly every concrete battle; long after his death, the name he spoke one step ahead won instead. "Holding on to do the right thing in a fight whose result you will never see," how many points is it worth? How do you judge it?\n\nThen take one more step: in your own life today, is there something where you know it cannot be changed soon, yet you feel you cannot stay silent, a classmate shut out with no one to speak for him, an unfair rule everyone just endures, someone nicknamed and labeled?\n\nWhen that happens, will you be the quiet, safe one who goes with the crowd, or the one who, even if you stand alone, even if you will not see the result in your lifetime, is still willing to speak first, to say the right name out loud first?',
      },
      deliverGoal: 'N11 close — 评价 (夹在两世界哪边都不完全要他的人凭一支笔造一个词打注定看不到胜利的仗) + 活着输几乎每场具体战死后很久那名字赢了 +「在看不到结果的仗里坚持做对的事值多少分」+ transfer「今天你身边明知一时改变不了但不说不行的事 (被孤立同学没人替说话/不公平规矩大家忍着/被起外号贴标签的人)」+ 你会做安静安全随大流的人 还是哪怕只有你一个看不到结果也愿先开口先说出对的名字的人',
      engagementHook: '哪怕只有你一个，哪怕这辈子看不到结果，你愿不愿意先开口，先把那个对的名字说出来？走完我这一生，你会怎么评价这样一个人？今天你身边那件「不说不行」的事，你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 台山籍铁路华工 (receiving-end) — DEFAULT
// composite，基于真实劳工史 (凿内华达山隧道 / 雪崩 / 完工后被排华)
// ═══════════════════════════════════════════════════════════════════════

export var taishanWorkerLens = {
  id: 'taishan-railroad-worker-receiving-end',
  name: 'A Taishan Railroad Worker',
  nameCn: '一个台山籍铁路华工',
  role: 'receiving-end',
  perspectiveTag: 'railroad-worker-excluded',
  icon: '⛏️',
  description: {
    cn: '一个综合性的人物，把成千上万真实台山籍铁路华工的经历，合成进一个人身上（具体名字和家事是叙事性补充，史料确证的是这段集体劳工史）。约 1845 年生在广东台山,一个靠海、地少人多、男人世代出海讨生活的地方。十几岁时为了让家里活下去，他签下契约，漂洋过海到美国，进了中央太平洋铁路的工地。他在内华达山的悬崖上吊着凿洞，在雪崩里失去过工友，用命铺出一条把美国东西两半缝起来的铁路。铁路修完那天，他不在庆功的照片里。这一遍，你站在被那个国家用过、又被它的法律永远关在门外的人这边，看 1882 年。',
    en: 'A composite figure who gathers the experiences of tens of thousands of real Taishan railroad workers into one person (the specific name and family details are narrative additions; what the record confirms is this collective labor history). Born around 1845 in Taishan, Guangdong, a place by the sea, short on land and crowded with people, where men had gone overseas for a living for generations. In his teens, to keep his family alive, he signed a contract and crossed the ocean to America, into the work site of the Central Pacific Railroad. He hung off the cliffs of the Sierra Nevada to bore holes, lost workmates in the avalanches, and laid with his life a railroad that sewed the two halves of America together. The day that railroad was finished, he was not in the celebration photograph. This pass puts you on the side of a man used by that country and then shut forever out its door by its own law, looking at the year 1882.',
  },
  storyboard: [
    {
      id: 'tw-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '那张著名的照片里，没有我。\n\n1869 年，铁路修通那天，两个火车头中间挤满了人，举着酒杯欢呼。我就站在不远处，可摄影师没把我拍进去。修这条路最险的那一段，是我和我的工友凿出来的——可庆功的画面里，一个我们这样的人都没有。\n\n（我没有留下真名。成千上万个跟我一样的人，连名字都没留下。这一遍里的我，是把许许多多真实台山华工的经历，合成进一个人——但我经历的每一件事，都是真的发生过的。）\n\n我大概 1845 年生在广东台山，一个靠海、地少人多的地方。十几岁那年，我签下一张契约，上了船，漂过半个地球，来到美国，进了中央太平洋铁路的工地。\n\n我用命，帮这个国家修起了它的东西大动脉。然后，这个国家用一部法律，把我永远关在了「美国人」这个身份的门外。\n\n这一遍，你站在我这里——一个被用过、又被永远关在门外的人——看 1882 年的美国。',
        en: 'In that famous photograph, there is no me.\n\nIn 1869, the day the railroad was joined, people crowded between two locomotives, raising glasses and cheering. I stood not far off, but the photographer did not put me in. The most dangerous stretch of that road, my workmates and I carved it out. Yet in the celebration picture, not one of us is there.\n\n(I left no real name. Tens of thousands like me left not even a name. The me in this pass gathers the experiences of many real Taishan workers into one person, but every single thing I went through truly happened.)\n\nI was born around 1845 in Taishan, Guangdong, a place by the sea, short on land and crowded with people. In my teens, I signed a contract, boarded a ship, crossed half the globe, came to America, and entered the work site of the Central Pacific Railroad.\n\nWith my life, I helped this country build its great east-west artery. Then this country, with a law, shut me forever out the door of the identity "American."\n\nThis pass, you stand where I stand, a man who was used and then shut forever out the door, looking at America in 1882.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 那张著名照片里没有我 + 1869 修通日两火车头中间挤满人欢呼/我站不远处摄影师没拍我/最险一段是我和工友凿的庆功画面一个我们的人都没有 + anti-fab 括号 (没留真名/成千上万人连名字都没留/这一遍是合成但每件事真的发生过) + c.1845 生广东台山靠海地少人多 + 十几岁签契约上船漂过半个地球进中央太平洋铁路工地 + 用命修国家东西大动脉/然后国家用法律把我永远关在美国人门外 + 这一遍视角',
      engagementHook: '修这条路最险的那一段是我和工友凿出来的，可庆功的照片里，一个我们这样的人都没有。被你建起来的东西，转头不让你站进它的照片里——你怎么想象那种感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我为什么会离开家，你才懂后来那些事的分量。\n\n我的家乡台山，在广东南边，紧挨着海。那地方山多田少，人却越来越多。一家几口人，分不到几亩薄田，年成不好就要挨饿。\n\n我们台山人有一句老话：要活命，就得往外走。我们的祖祖辈辈，世世代代都在出海讨生活——下南洋、闯番邦。我从小听大人讲海那边的故事长大。\n\n（你要是中国人，想一想：你自己的祖辈，会不会也曾经为了一口饭，离开过家乡，去过很远的地方？一百多年前，离开台山的，可能就有你某一支的太公太婆。我这样的人，未必离你很远。）\n\n大概 1860 年代，消息传到台山：大洋彼岸有个叫「金山」的地方（华工管美国加州叫「金山」，因为那里淘金），在招工修一条大铁路，给的工钱在我们眼里是天文数字。\n\n我那时候十几岁。家里实在揭不开锅了。我跟爹娘磕了个头，签下一张我看不太懂的契约——上面写着我要替招工的人做工还路费——然后，上了船。',
        en: 'First, why I left home, so you understand the weight of what came after.\n\nMy home, Taishan, is in the south of Guangdong, pressed against the sea. That place has many hills and little field, yet more and more people. A family of several could not divide more than a few thin acres, and in a bad year they went hungry.\n\nWe Taishan people have an old saying: to live, you must go outward. Our forefathers, generation after generation, had gone overseas for a living, down to Southeast Asia, off to foreign lands. I grew up on the elders\' stories of the far side of the sea.\n\n(If you are Chinese, think for a moment: might your own ancestors, too, have once left home for a bowl of rice, gone somewhere very far? More than a hundred years ago, among those who left Taishan, there might have been a great-grandparent of some branch of your family. A person like me may not be far from you.)\n\nAround the 1860s, word reached Taishan: across the great ocean was a place called "Gold Mountain" (Chinese workers called California "Gold Mountain," because of the gold there), hiring men to build a great railroad, paying wages that were an astronomical sum in our eyes.\n\nI was in my teens then. My family truly could not lift the lid off the rice pot. I knocked my head to my father and mother, signed a contract I could barely read, that said I owed work to the recruiter for my passage, and then, I boarded the ship.',
      },
      deliverGoal: 'N2 setup — 台山广东南边紧挨海/山多田少人越来越多/分不到几亩薄田年成不好挨饿 + 老话「要活命就得往外走」祖辈世世代代出海讨生活下南洋闯番邦 + 跨 Topic 中国根锚 (括号: 你若是中国人想想自己祖辈会不会也曾为一口饭离家去很远地方/一百多年前离开台山的可能有你某支太公太婆/我未必离你很远) + 1860s 消息「金山」(华工叫加州金山因淘金) 招工修大铁路工钱天文数字 + 十几岁家揭不开锅/磕头/签看不太懂的契约(替招工人做工还路费)/上船',
      engagementHook: '我们台山人有句老话：要活命，就得往外走。如果你是中国人，想一想——你自己的祖辈，会不会也曾经为了一口饭，离开家乡去过很远的地方？',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '横渡太平洋那段日子，我一辈子忘不了。\n\n我们几百个台山人，被塞在船舱最底下，又黑又闷，挤得几乎躺不下。海上颠簸了一两个月，吃的是发霉的米，喝的是发臭的水。有人病死在船上，尸体被直接扔进海里。\n\n到了金山（加州），我才知道，等着我的不是金子，是内华达山脉——一道又高又陡的石头墙。我被分到中央太平洋铁路的工地，第一份活，就是在这道石墙上凿出一条路来。\n\n我们华工自己抱团过日子。同村、同姓的人住在一起，自己起灶做饭——别人吃肉，我们省钱，吃从中国带来的咸鱼、干菜、还有我们习惯的茶。我们烧热水喝茶，反倒少生病，因为水是烧开过的。\n\n监工是白人，他不记得我们的名字，他喊我们「China man」（中国佬）。在他眼里，我们和工地上的骡子、铁锤一样，是干活的工具。\n\n（你看，这道石墙、这些工地——你换到斯坦福那一遍，是从山下温暖办公室里看进度表的视角。这一遍，你是在石墙上，亲手抡锤的那个人。）',
        en: 'The crossing of the Pacific, I will never forget as long as I live.\n\nWe several hundred Taishan men were packed into the lowest hold of the ship, dark and stifling, crammed so tight we could barely lie down. Tossed at sea for a month or two, we ate moldy rice and drank stinking water. Some sickened and died on the ship, and the bodies were thrown straight into the sea.\n\nWhen I reached Gold Mountain (California), I learned that what waited for me was not gold but the Sierra Nevada, a high, steep wall of stone. I was sent to the work site of the Central Pacific Railroad, and my first job was to carve a road out of this stone wall.\n\nWe Chinese workers banded together to get by. Men from the same village, the same surname, lived together and cooked for ourselves. Others ate meat; we saved money, eating salted fish and dried vegetables brought from China, and the tea we were used to. We boiled water for tea and fell sick less, because the water was boiled.\n\nThe overseer was white. He did not remember our names; he called us "Chinaman." In his eyes we were like the mules and hammers on the site, tools for work.\n\n(You see, this stone wall, these work sites, when you switch to Stanford\'s pass, you watch the progress chart from a warm office at the foot of the mountain. This pass, you are on the stone wall, the one swinging the hammer with his own hands.)',
      },
      deliverGoal: 'N3 setup — 横渡太平洋 (几百台山人塞船舱最底/黑闷挤得躺不下/颠簸一两个月发霉米发臭水/病死直接扔海) + 到金山等的不是金子是 Sierra Nevada 石头墙/分到中央太平洋铁路第一份活在石墙凿路 + 华工抱团 (同村同姓住一起自己起灶/省钱吃咸鱼干菜茶/烧水喝茶少生病) + 白人监工不记名字喊 China man/眼里跟骡子铁锤一样是工具 + 跨 lens 对照括号 (这道石墙工地→Stanford lens 山下温暖办公室看进度表/这一遍是石墙上亲手抡锤的人)',
      engagementHook: '监工不记得我们的名字，他喊我们「China man」——在他眼里，我们跟工地上的骡子、铁锤一样，是干活的工具。当一个人不再被当成人，只被当成工具，他还剩下什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n最难的一段叫峰顶隧道，要在坚硬的花岗岩里硬凿出一条洞。最险的活，是在悬崖上开路——崖太陡，人根本站不住脚。\n\n监工想出一个办法，用上了我们：把人装进一个柳条编的篮子里，从崖顶用绳子吊下去，悬在半空。你在篮子里，一手扶着崖壁，一手往石缝里塞炸药，点着引线，然后拼命喊上面的人把你拉上去。\n\n拉得慢一秒，炸药就在你脸前炸开。\n\n（这是我们华工干过的真事——吊在篮子里凿崖、放炸药。多少人因为绳子拉得慢、引线算错了，连人带篮子被炸飞、摔下深谷，没人数得清。）\n\n现在，你就在那个篮子里。脚下是几百米深的山谷，风把篮子吹得直晃。你手里攥着点着的引线，你得算准时间——早一秒喊，活；晚一秒喊，死。\n\n你心里想的不是英雄气概。你想的是：家里还等着我寄钱回去，我爹娘还在台山，我不能死在这。\n\n你做这份活，不是因为你勇敢。是因为你没有别的选择。这一刻，你怎么熬过去？',
        en: 'Now you are me.\n\nThe hardest stretch was called the Summit Tunnel, a hole that had to be cut by force through hard granite. The most dangerous work was opening a road on the cliffs, so steep a man could find no footing at all.\n\nThe overseer thought of a way that used us: put a man into a basket woven of wicker, lower him by rope from the cliff top, hanging in midair. In the basket, one hand braced on the cliff wall, the other packing nitroglycerin into a crack, you light the fuse, then shout for all you are worth for the men above to haul you up.\n\nHaul a second too slow, and the charge bursts before your face.\n\n(This is a true thing we Chinese workers did, hanging in baskets to bore the cliff and set charges. How many, because the rope was hauled too slow or the fuse was misjudged, were blown out basket and all, fell into the deep gorge, no one can count.)\n\nNow, you are in that basket. Below you is a gorge hundreds of meters deep, and the wind swings the basket. In your hand you grip the lit fuse, and you must judge the timing exactly: shout a second early, you live; a second late, you die.\n\nWhat is in your mind is not heroic spirit. What is in your mind is: my family still waits for the money I send home, my parents are still in Taishan, I cannot die here.\n\nYou do this work not because you are brave. You do it because you have no other choice. In this moment, how do you get through it?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 峰顶隧道花岗岩硬凿洞 + 最险悬崖开路崖太陡站不住脚 + 监工办法用华工 (柳条篮子绳子从崖顶吊下悬半空/一手扶崖一手塞炸药点引线喊上面拉/拉慢一秒炸在脸前) + anti-fab 括号 (吊篮凿崖放炸药是真事/多少人绳子慢引线错连人带篮炸飞摔深谷没人数清) + 你就在篮子里(几百米深谷/风吹直晃/攥着点着的引线算准时间早一秒活晚一秒死) + 想的不是英雄是家里等寄钱爹娘在台山不能死这 + 做活不是勇敢是没别的选择 + 怎么熬过去',
      engagementHook: '你吊在悬崖边的篮子里，手里攥着点着的引线——早一秒喊，活；晚一秒喊，死。你做这份活，不是因为你勇敢，是因为你没有别的选择。这一刻，你靠什么熬过去？',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '比炸药更可怕的，是冬天的雪。\n\n内华达山的冬天，雪能堆到十几米高。为了赶工，监工不让我们停。我们就在雪底下挖出通道、铺铁轨——人住在雪洞里，靠一个个透气孔呼吸，整个冬天见不到太阳。\n\n然后是雪崩。\n\n我永远记得那一夜。整片山坡的雪，轰的一声塌下来，把好几个工棚连人带物，一起卷走。我侥幸不在那几个棚里。等到开春雪化了，我们才在山脚下找到工友的尸体——有的人，手里还攥着工具。\n\n（雪崩埋掉成营的华工，是真实发生过的事。到底死了多少，没人认真数过——有人说几百，有人说上千。公司的账本上，从来没有为我们单独留过一栏。）\n\n我替死去的工友收拾遗物。有人怀里揣着一封没寄出的家书，有人攒着准备寄回台山的工钱。他们漂洋过海，是为了让家里人活下去——可他们自己，永远留在了这座异国的雪山下，连块写名字的墓碑都没有。\n\n那一刻我懂了一件事：在这条铁路的账本上，我们不是人，是一行可以随时勾掉的数字。',
        en: 'More terrible than the explosives was the winter snow.\n\nThe winter of the Sierra Nevada could pile snow more than ten meters high. To keep on schedule, the overseer would not let us stop. So we dug passages under the snow and laid track, living in snow caves, breathing through air holes, never seeing the sun all winter.\n\nThen came the avalanche.\n\nI will always remember that night. The snow of a whole hillside crashed down at once, sweeping away several shacks, men and belongings together. By luck I was not in those shacks. When the snow melted in spring, we found the bodies of our workmates at the foot of the slope, and some still gripped their tools.\n\n(Avalanches burying whole camps of Chinese workers truly happened. How many died in all, no one ever counted carefully, some say hundreds, some say over a thousand. On the company\'s ledger, there was never a separate column for us.)\n\nI gathered the belongings of the dead. One carried in his coat an unsent letter home, another had saved up wages to send back to Taishan. They had crossed the ocean to keep their families alive, yet they themselves stayed forever beneath this foreign snow mountain, without even a gravestone with a name on it.\n\nIn that moment I understood one thing: on this railroad\'s ledger, we were not people, we were a line of numbers that could be crossed off at any time.',
      },
      deliverGoal: 'N5 story — 比炸药可怕的是冬雪 (堆十几米/监工不让停/雪底下挖通道铺轨/住雪洞透气孔整冬见不到太阳) + 雪崩那一夜整片山坡雪塌卷走几个工棚连人带物/侥幸不在那几棚/开春找到工友尸体有的攥着工具 + anti-fab 括号 (雪崩埋成营华工真发生/死多少没人数几百到上千/账本没单独留栏) + 收拾遗物 (没寄出家书/攒着寄回台山的工钱/漂洋过海为让家人活下去自己永留异国雪山下连写名字墓碑都没有) + 懂了: 账本上我们不是人是可随时勾掉的一行数字',
      engagementHook: '他们漂洋过海，是为了让家里人活下去——可他们自己，永远留在了异国的雪山下，连块写名字的墓碑都没有。一个人为家人去死，却连名字都没能留下，这笔账该怎么算？',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1869 年，铁路终于修通了。\n\n金道钉敲下那天，所有人都在欢呼。我和工友站在一边看着——这条路，最险的几十英里是我们用命铺的，可拍那张载入史册的合影时，没人叫我们过去。镜头里全是白人的脸。\n\n我们用完了，就被请到了画面外。\n\n说一件你可能想不到的事。同一个年代，在大洋这头，有一个跟我一样的华人，没在工地，在东岸的城市里办报。他叫王清福。他把美国开国文件里那句「人人生而平等」，原原本本印在自己办的报纸上，然后质问美国人：「人人」里，到底有没有我们华人？\n\n（你换到他那一遍，会听见他怎么用美国自己的话，替我们这些不会英文、喊不出声的人讲理。）\n\n你看——同一句「人人平等」，两个方向：他在报纸上，用这句话替我们要一个名分；我在工地上，用命修起了这个国家，到头来却被这句话漏在了外面。\n\n他识字，能用笔替我们喊；我不识字，只能用一身力气和一条命，证明我们配得上「人人」这两个字。我们俩，一个用嘴，一个用命，做的是同一件事。',
        en: 'In 1869, the railroad was at last joined.\n\nThe day the golden spike was driven, everyone cheered. My workmates and I stood to one side and watched. This road, its most dangerous dozens of miles we laid with our lives, yet when that photograph for the history books was taken, no one called us over. The faces in the frame were all white.\n\nUsed up, we were sent outside the picture.\n\nLet me tell you something you might not expect. In the same era, on this side of the ocean, there was a Chinese man like me, not on the work site but running a newspaper in a city on the east coast. His name was Wong Chin Foo. He printed the line from America\'s founding document, "all men are created equal," exactly as it was, in his own newspaper, and then asked Americans: among the "all," are we Chinese in there or not?\n\n(Switch to his pass and you will hear how he reasoned, in America\'s own words, for those of us who spoke no English and could not cry out.)\n\nYou see, the same line, "all men are equal," two directions: on the newspaper, he used it to claim a name for us; on the work site, I built this country with my life and was, in the end, left outside that line.\n\nHe could read and write, and used his pen to cry out for us; I could not read, and could only use a body\'s strength and a single life to prove we were worthy of the words "all men." The two of us, one with his mouth, one with his life, were doing the same thing.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1869 修通金道钉日所有人欢呼/我和工友站一边看/最险几十英里我们用命铺但载入史册合影没人叫我们/镜头全白人脸/用完被请到画面外 + 跨 lens 对位 Wong Chin Foo (同年代大洋这头东岸办报/把 Declaration「人人生而平等」原样印报上质问人人里有没有华人/桥到 Wong lens 用美国自己的话替不会英文喊不出声的人讲理) + 同一句人人平等两个方向 (他报纸上用这话替我们要名分/我工地上用命修国家却被这话漏在外面) + 他识字用笔喊/我不识字用力气和命证明配得上人人/一个用嘴一个用命做同一件事',
      engagementHook: '同一句「人人平等」，两个方向：他在报纸上用这句话替我们要名分，我在工地上用命修起这个国家，到头来却被这句话漏在了外面。一个用嘴，一个用命，做的是同一件事——你觉得哪一种更难？',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '铁路修完，我以为苦日子到头了。我错了。最难的还在后面。\n\n上万个华工，一夜之间没了活干。我们散到加州各个城市，找别人不愿意干的活路——开洗衣店、做厨子、种菜、做佣人。我们不挑，给口饭吃就行。\n\n可偏偏这时候，加州经济不景气，白人大批失业。他们要找一个出气口，找一个怪罪的对象——就找上了我们。\n\n街上开始有人喊：「华人抢走了我们的工作！」「中国佬必须滚！」报纸把我们画成长着尾巴、眯着眼的怪物。我们走在街上，会被吐口水、被扔石头、被剪掉辫子（那对我们来说是天大的羞辱）。\n\n你说气不气人？几年前，最险最累的活没人干，是我们顶上去的；现在白人没工作了，反倒说是我们抢的。\n\n我们成了那种人——需要你的时候，你是「能修长城的好劳力」；不需要你的时候，你就是「抢饭碗的黄祸」。\n\n我心里又冤又怕。冤的是，这个国家是我们帮着修起来的；怕的是，我看得出，更狠的东西，还在后头。',
        en: 'When the railroad was done, I thought the hard days were over. I was wrong. The hardest was still ahead.\n\nTen thousand-plus Chinese workers, overnight, had no work. We scattered into California\'s cities, looking for the livings others would not take, opening laundries, cooking, growing vegetables, working as servants. We were not picky; a bowl of rice was enough.\n\nBut just then, California\'s economy slumped, and white men lost work in great numbers. They wanted a vent, a target to blame, and they found us.\n\nVoices began on the streets: "The Chinese stole our jobs!" "The Chinese must go!" The papers drew us as tailed, slant-eyed monsters. Walking the street, we were spat on, had stones thrown at us, had our queues cut off (a tremendous humiliation to us).\n\nIs it not maddening? A few years before, when the most dangerous and exhausting work had no takers, it was we who stepped up. Now that white men had no work, it was said instead that we had stolen it.\n\nWe became that kind of people: when you are needed, you are "good labor that can build the Great Wall"; when you are not needed, you are "the yellow peril stealing the rice bowl."\n\nMy heart was full of injustice and fear. The injustice: this country, we had helped build it. The fear: I could see that something harsher was still coming.',
      },
      deliverGoal: 'N7 story — 修完以为苦日子到头错了 + 上万华工一夜没活/散到加州城市找别人不愿干的活 (洗衣厨子种菜佣人/不挑给口饭就行) + 偏偏加州不景气白人大批失业要出气口怪罪对象找上我们 + 街上喊「华人抢工作」「中国佬必须滚」/报纸画长尾眯眼怪物/街上吐口水扔石头剪辫子(天大羞辱) + 气人: 几年前最险最累没人干我们顶上现在白人没工作反说我们抢 + 需要你时是能修长城好劳力不需要时是抢饭碗黄祸 + 又冤又怕 (冤国家我们帮修起来/怕看得出更狠的还在后头)',
      engagementHook: '需要你的时候，你是「能修长城的好劳力」；不需要你的时候，你就是「抢饭碗的黄祸」。同样一群人，怎么会在几年之间，从功臣变成了罪人？',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1882 年，我怕的那个更狠的东西，来了。\n\n这一年，美国通过了一部法律，叫 Chinese Exclusion Act（排华法案）。它专门冲着我们来——它做了一件这个国家以前从没做过的事：第一次，按种族，把我们整个民族关在门外。\n\n这部法律对我意味着什么，我说给你听：\n\n第一，门关死了。我老家台山还有兄弟、还有同乡想来「金山」讨生活——现在，他们再也进不来了。\n\n第二，这一条最戳心：我可以在这里干一辈子活、纳一辈子税、在这里变老、死在这里——但我永远、永远不能成为「美国人」。我没有投票权，我在法律眼里，到死都是个「外国人」。\n\n第三，也是最痛的：我不能把妻子、孩子接来团聚。我一个人在金山做工，老婆孩子被永远挡在台山。我攒钱寄回家，可我隔好多年才能回去看他们一次，有的同乡，一辈子再没见过自己的妻儿。\n\n你想想这有多荒唐：我用命，帮这个国家把东西两半缝在了一起；这个国家回过头，用一部法律，把我和我自己的家，活活拆成了两半。',
        en: 'In 1882, the harsher thing I feared came.\n\nThat year, America passed a law called the Chinese Exclusion Act. It was aimed squarely at us, and it did something this country had never done before: for the first time, by race, it shut our whole people out the door.\n\nWhat this law meant to me, let me tell you:\n\nFirst, the door was shut for good. Back home in Taishan I still had brothers, still had villagers who wanted to come to "Gold Mountain" for a living. Now, they could never get in.\n\nSecond, this clause cut the deepest: I could work here a whole life, pay tax a whole life, grow old here, die here, but I could never, never become "American." I had no vote; in the eyes of the law, I was a "foreigner" until death.\n\nThird, and most painful: I could not bring my wife and children to reunite. I worked alone in Gold Mountain, my wife and children barred forever in Taishan. I saved money and sent it home, but only after many years could I go back to see them once, and some of my villagers never saw their own wives and children again as long as they lived.\n\nThink how absurd it is: with my life, I helped this country sew its two halves together; this country turned around and, with a law, tore me and my own family alive into two halves.',
      },
      deliverGoal: 'N8 story — 1882 怕的更狠的来了 Chinese Exclusion Act 排华法案专门冲我们/首次按种族关整个民族在门外 + 对我意味着 (一: 门关死台山还有兄弟同乡想来金山现在再进不来 / 二最戳心: 可干一辈子纳一辈子税变老死这但永远不能成美国人/没投票权法律眼里到死是外国人 / 三最痛: 不能接妻子孩子团聚/一个人在金山做工老婆孩子永挡在台山/攒钱寄回隔好多年回去一次有同乡一辈子再没见过妻儿) + 荒唐: 我用命帮国家把东西两半缝一起这国家回头用法律把我和自己的家活活拆成两半',
      engagementHook: '我用命，帮这个国家把东西两半缝在了一起；这个国家回过头，用一部法律，把我和我自己的家，活活拆成了两半。同一双手能缝起一个国家，为什么缝不起一个华工的家？',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '排华法案下，我们这样的人，是怎么活下来的？\n\n我们没有别的办法，只能往里缩，缩进唐人街（Chinatown）。一条街、几个街区，挤满了我们这样的人——开洗衣店、餐馆、杂货铺，自己人帮自己人。那不是因为我们不想融入，是外面不让我们进去，我们只能在墙角给自己围出一小块能喘气的地方。\n\n法案规定我们出入境要随身带证件，证明自己「合法」。一个白人，可以自由走在这个国家任何地方；我，修过这个国家铁路的人，得随时准备好被人盘问：你凭什么在这？\n\n（再想一下你自己。今天的旧金山、纽约、洛杉矶，还有一条条热闹的唐人街——那不是凭空来的。那是当年我们被关在门外、被挤到墙角时，一砖一瓦给自己围起来的。一百多年前那个吊在悬崖篮子里的人，跟今天那条唐人街，是连着的。）\n\n我这辈子，没等到这部法案废掉的那一天。它一直管到 1943 年。我们这一代修铁路的华工，绝大多数，到死都顶着「外国人」三个字。\n\n我用一生证明的那句「我也是人」，这个国家用了 61 年，才肯松一点点口。',
        en: 'Under the Chinese Exclusion Act, how did people like us survive?\n\nWe had no other way; we could only draw inward, into Chinatown. One street, a few blocks, packed with people like us, opening laundries, restaurants, grocery shops, our own helping our own. It was not that we did not want to blend in, it was that the outside would not let us in, and we could only wall off, in a corner, a small patch of room to breathe.\n\nThe act ruled that we had to carry papers when entering or leaving, to prove we were "lawful." A white man could walk freely anywhere in this country; I, a man who had built this country\'s railroad, had to be ready at any time to be questioned: by what right are you here?\n\n(Think of yourself again. Today\'s San Francisco, New York, Los Angeles, with their bustling Chinatowns, did not come from nowhere. They are what we walled off for ourselves, brick by brick, when we were shut out the door and squeezed into the corner. The man hanging in a basket off a cliff more than a hundred years ago is connected to that Chinatown today.)\n\nIn my whole life, I did not live to see the day this act was repealed. It governed until 1943. The vast majority of our generation of railroad workers wore the three words "foreigner" until death.\n\nThe line I proved with a whole life, "I too am a person," this country took 61 years to loosen its lips even a little.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 排华法案下怎么活 (只能往里缩进 Chinatown 唐人街/一条街几街区挤满我们/洗衣店餐馆杂货铺自己人帮自己人/不是不想融入是外面不让进只能墙角围一小块喘气地方) + 法案规定出入境带证件证明合法 (白人自由走任何地方/我修过铁路的人随时被盘问凭什么在这) + 跨 Topic/transfer 中国根锚括号 (今天旧金山纽约洛杉矶唐人街不是凭空来的是当年被关门外挤墙角一砖一瓦围起来的/一百多年前吊悬崖篮子的人跟今天唐人街连着) + 没等到废 (管到 1943/这代修铁路华工绝大多数到死顶着外国人三字) + 我用一生证明「我也是人」国家用 61 年才松一点点口',
      engagementHook: '一百多年前那个吊在悬崖篮子里的人，跟今天旧金山、纽约那一条条热闹的唐人街，是连着的。那些唐人街不是凭空来的——是当年我们被关在门外、被挤到墙角时，一砖一瓦给自己围起来的。你以前是怎么看唐人街的？',
      expectsRealAnswer: false,
    },
    {
      id: 'tw-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看 1882 年那部排华法案，两种说法都站得住。\n\n一种说法：它是这个国家的一道永远的污点，也是一记警钟。它白纸黑字地告诉所有人：这个口口声声「人人生而平等」「机会之地」的国家，曾经亲手按肤色和血统，把帮它修起大动脉的一整个民族关在门外。这件事不能洗白，也不该被忘记——它提醒后来的每一代人，「平等」这两个字，曾经怎样被踩在脚下。\n\n另一种说法：它没能真正抹掉我们。它想把我们从这个国家里清除出去，可它没做到。我们缩进唐人街，咬牙活了下来，把根扎进了这片土地。它管了 61 年，1943 年终于被废；又过了些年，我们的后代，可以挺直腰板说「我是华裔美国人」。法律能关门 61 年，可它关不住一群人活下去、扎下根、最后被这个国家不得不承认的那股劲。\n\n这两边不是「悲剧加一点希望」。是同一段历史的两面——它既是真实的、不可洗的伤害，也是一群人没有被它打垮的证明。\n\n还有一件事你得记住：你这一遍，只听了站在最底下的我这一边。换利兰·斯坦福那一遍，你会从账本和利润的逻辑里，看同一段铁路、同一群人；换王清福那一遍，你会看见同样被排斥的华人，怎么用办报、上法庭、公开演讲的方式还手。它们不是来推翻我，是来逼你把这个判断想得更全。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the Chinese Exclusion Act of 1882. Both views stand.\n\nOne view: it is a permanent stain on this country, and a warning bell. It told everyone, in black and white: this country that cries "all men are created equal" and "the land of opportunity" once, by its own hand, shut out by skin and bloodline an entire people who had built its great artery. This cannot be whitewashed, and should not be forgotten. It reminds every generation after of how the words "equal" were once trodden underfoot.\n\nThe other view: it did not truly erase us. It meant to clear us out of this country, but it did not succeed. We drew into Chinatown, gritted our teeth and survived, and sank our roots into this soil. It governed 61 years and was at last repealed in 1943; some years later, our descendants could straighten their backs and say "I am Chinese American." A law could shut the door 61 years, but it could not shut out the will of a people to go on living, to root down, and at last to be acknowledged by this country whether it liked it or not.\n\nThese are not "a tragedy with a little hope." They are two faces of one history. It was a real, unwashable harm, and it was proof that a people was not broken by it.\n\nAnd remember one more thing: in this pass you heard only my side, the man at the very bottom. Run Leland Stanford\'s pass and you will see the same railroad and the same people through the logic of ledgers and profit; run Wong Chin Foo\'s pass and you will see how other excluded Chinese fought back, through newspapers, courtrooms, and public speeches. They do not come to overturn me; they come to push you to think this judgment through more fully.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (gold-standard) — 一种说法 (国家永远的污点也是警钟/白纸黑字告诉所有人口口声声人人平等机会之地的国家曾亲手按肤色血统把帮它修大动脉的整个民族关门外/不能洗白不该忘/提醒后代平等怎样被踩脚下) / 另一种说法 (没能真正抹掉我们/想清除没做到/缩进唐人街咬牙活下来扎根/管 61 年 1943 废/后代挺直腰板说我是华裔美国人/法律关门 61 年关不住活下去扎根被国家不得不承认那股劲) / 同一段历史两面 (真实不可洗的伤害 + 没被打垮的证明) / 想 30 秒',
      engagementHook: '一种说法：它是这个国家一道永远的污点。另一种说法：它没能真正抹掉我们。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'tw-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个台山的穷孩子，一张看不懂的契约，一段船舱底下的航程，一个吊在悬崖上的篮子，一场埋掉工友的雪崩，一条用命修成的铁路，一部把我关在门外的法律，一辈子没等到的团聚——你会怎么评价这样一个开端？\n\n一个国家，用了我们这群人的命去修它的动脉，又用一部法律把我们关在它的门外。你会说它是一道不可洗的污点，还是说它没能真正打垮我们？你怎么评？\n\n再想一步，这一步我想留给你——尤其如果你也是华人：\n\n今天你能坐在这里，用中文、也用英文，读懂这段历史——这件事本身，就是当年那些被关在门外、连名字都没留下的人，没敢想过的。他们用一生想证明的那句「我也是人」「我们也配得上『人人平等』」，今天，落在了你身上。\n\n那么，当你将来在某个地方，看见有人因为长得不一样、来得晚一点，就被推到门外、被当成「不算数的人」——那一刻，你会想起谁？你会怎么做？',
        en: 'Having walked my whole life, a poor child of Taishan, a contract I could not read, a voyage in the bottom of a hold, a basket hung off a cliff, an avalanche that buried my workmates, a railroad built with my life, a law that shut me out the door, a reunion I never lived to have, how would you judge a beginning like this?\n\nA country used the lives of people like us to build its artery, then used a law to shut us out its door. Would you call it an unwashable stain, or say it did not truly break us? How do you judge it?\n\nThen take one more step, and this step I want to leave to you, especially if you too are Chinese:\n\nThat you can sit here today, in Chinese and in English, and read this history, this very thing is what those who were shut out the door back then, who left not even a name, never dared to imagine. The line they wanted to prove with a whole life, "I too am a person," "we too are worthy of \'all men are equal\'," today, has come to rest on you.\n\nSo, when one day, somewhere, you see someone pushed out the door for looking different, for coming a little later, treated as "a person who does not count," in that moment, who will you remember? What will you do?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价开端 (台山穷孩子/看不懂的契约/船舱底航程/吊悬崖篮子/埋工友雪崩/用命修的铁路/把我关门外的法律/一辈子没等到的团聚 → 不可洗污点 vs 没能真正打垮我们) + transfer 留给你尤其如果你也是华人 (今天你能用中文也用英文读懂这段历史本身就是当年被关门外连名字都没留的人没敢想过的/他们用一生想证明的我也是人我们也配得上人人平等今天落在你身上) + 将来看见有人因长得不一样来得晚被推门外当成不算数的人那一刻你会想起谁你会怎么做',
      engagementHook: '今天你能坐在这里，用中文也用英文读懂这段历史——这件事，就是当年那些连名字都没留下的人，没敢想过的。他们用一生想证明的「我也是人」，今天落在了你身上。将来你看见有人因为长得不一样就被推到门外，你会想起谁？你会怎么做？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'leland-stanford':                        lelandStanfordLens,
  'wong-chin-foo':                          wongChinFooLens,
  'taishan-railroad-worker-receiving-end':  taishanWorkerLens,
};

// per TOPIC_ROADMAP_G6_G12.md A7 + receiving-end 优先 pattern:
// 被法案挡在门外一方 + N1 gold-standard hook + N6「人人平等」跨 lens (Wong Chin Foo) 对位 + N2/N9 跨 Topic「中国根→tang-song-china」最强中国身份锚 + N10/N11 污点 vs 没被打垮 closing
export var defaultLens = 'taishan-railroad-worker-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'chinese-exclusion-1882',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'leland-stanford': 30, 'wong-chin-foo': 28, 'taishan-railroad-worker-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:「人人生而平等 / all men are created equal」一句话两个方向 (Wong Chin Foo 报纸上替华人要名分 vs 台山华工工地上用命修国家却被这话漏在外面)',
    'defaultLens: taishan-railroad-worker-receiving-end — 受影响者优先 (被排华法案挡在公民权外一方 + gold-standard N1 hook + N2/N9 跨 Topic「中国根→tang-song-china」全 spine 最强中国身份锚 + N10/N11 污点 vs 没被打垮)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'cultural-ban 特例: 涉及真实中国人 (台山华工) — 对他们用中文词 (台山/广东/华工/金山) 正确; 对美国机构用真实美国词 (中央太平洋铁路/排华法案/Chinese Exclusion Act/Chinatown/工会), 不文化篡改美国一侧',
    'anti-fab: 台山华工是 composite (具体名字家事是叙事补充, 史料确证的是集体劳工史 — 吊篮凿崖/雪崩/完工后排华); 用括号短句标注, 不进角色 monologue 大段红字',
    'cross-Topic 锚: 台山华工中国根→tang-song-china (中国学生自己祖辈可能的南方迁徙史, N2+N9+N11); Wong Chin Foo「Chinese American」自我命名→pre-columbian Malintzin + A4 Douglass (N6 Douglass 同代用同份独立宣言); Stanford 雇华工又排华→A2 Hamilton',
    '反 Whig: 1882 排华法案是美国史首个针对特定族裔的移民禁令 — 「机会之地」叙事直接反证; Stanford 展示资本与种族主义共谋 (用华工建国家动脉建完立法挡公民权外)',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师) — 特别留意台山华工 lens 的尊严处理 + 中国身份锚不刻意煽情',
  ],
};
