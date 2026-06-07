// ─────────────────────────────────────────────────────────────────
// 美西战争与美国海外帝国 1898 — Spanish-American War & American Empire · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 讲美/西/古/菲段落全程真实历史术语
//   (Maine / yellow journalism / Rough Riders / Anti-Imperialist League / Aguinaldo /
//    Open Door / Benevolent Assimilation / consent of the governed),
//   只有 §8「同时代的中国」段落 (注入 receiving-end + mediator 的 synthesis) 才用中国术语
//   (义和团 / 瓜分 / 租借地 / 八国联军 / 辛丑条约)。
// 3 lens / 11 nodes each / Rule 0 高敏感中性 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 马尼拉湾那声炮响 (1898.5.1 Dewey 全歼西班牙舰队) —
//   Roosevelt 听成他亲手发的那道电报终于响了/Twain 一开始当成解放的捷报后来才懂/
//   菲律宾少年先欢呼后发现自己只是被转手。三视角各触一次,不互相点破。
// anti-fab: Maine 原因沿用「至今无定论 / 1976 调查倾向内因」(账本红旗#1);
//   菲律宾平民死亡保留「至少 20 万」(账本红旗#2); DEFAULT 少年=合成桥接、无名字、身份写实。
// ─────────────────────────────────────────────────────────────────

export var rooseveltLens = {
  id: 'roosevelt-actor',
  name: 'Theodore Roosevelt',
  nameCn: '西奥多·罗斯福',
  role: 'perpetrator-actor',
  perspectiveTag: 'driver-of-empire',
  icon: '🦅',
  description: {
    cn: '真实历史人物。1898 年战争爆发时，他是美国海军部副部长（Assistant Secretary of the Navy）。他是「美国必须成为海上强国」这个信念最热血的化身：读马汉的海权论、深信一个国家的伟大取决于强大海军和海外基地。他辞官亲自组建并率领志愿骑兵团 Rough Riders（莽骑兵），在古巴圣胡安岭一战成名，两年内当上副总统、1901 年成为总统。这一遍让你站进一个帝国推手的内心：他真心相信扩张让美国更强、更伟大，也真心带着那个时代的种族优越感。他不是漫画式的坏人。理解他，才理解为什么 1898 年那么多体面的美国人真诚地拥抱了帝国。',
    en: 'A real historical person. When the war broke out in 1898 he was Assistant Secretary of the Navy. He was the hottest-blooded embodiment of the belief that "America must become a sea power": he read Mahan on sea power and was sure that a nation\'s greatness rested on a strong navy and overseas bases. He quit his post to raise and lead the volunteer Rough Riders cavalry, won fame on the San Juan ridge in Cuba, became vice president within two years, and president in 1901. This pass puts you inside the mind of a driver of empire: he truly believed expansion made America stronger and greater, and he truly carried his era\'s sense of racial superiority. He is no cartoon villain. Understanding him is how you understand why so many respectable Americans sincerely embraced empire in 1898.',
  },
  storyboard: [
    {
      id: 'saw-roosevelt-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1898 年，华盛顿。我是西奥多·罗斯福，海军部副部长。\n\n听清这个头衔——「副」部长。我只是个二把手，名义上要听上司的。可这一年，我做了一件远超我职权的事，它后来把美国整个推向了另一条路。\n\n那时的美国，刚关上西部的边疆，工厂造出比国内能买掉的还多的货。我读马汉（Alfred Mahan，当时最有名的海军理论家）的书，他说：一个伟大的国家，必须有强大的海军，必须有海外的基地。我读完一个字都不怀疑。我相信美国的命运在海上、在远方。\n\n这一遍，你坐进我这个位置。你会看见一个真心相信自己在做对的事、浑身是劲的人，怎么亲手把一个「反对帝国」立国的共和国，推成了一个跨越两个大洋的帝国。',
        en: '1898, Washington. I am Theodore Roosevelt, Assistant Secretary of the Navy.\n\nHear that title clearly: Assistant. I am only a number two, supposed on paper to obey my boss. Yet this year I did a thing far beyond my authority, and it pushed all of America onto another road.\n\nAmerica had just closed its western frontier, and its factories made more goods than the country could buy. I read Mahan (Alfred Mahan, the era\'s most famous naval thinker), who said a great nation must have a strong navy and overseas bases. I finished the book without doubting a word. I believed America\'s destiny lay on the sea, and far away.\n\nThis pass puts you in my seat. You will watch a man bursting with energy, truly believing he is doing right, push with his own hands a republic founded against empire into an empire across two oceans.',
      },
      deliverGoal: 'N1 hook — 1898 华盛顿 + Roosevelt 自我介绍海军部副部长 (强调「副/二把手」) + 边疆关闭/工厂过剩背景 + 读马汉海权论深信不疑 (强海军+海外基地/命运在海上) + 这一遍视角 (浑身是劲真信自己对的人怎么把反帝共和国推成跨两洋帝国)',
      engagementHook: '我只是个「副」部长，却做了一件远超职权、改写国运的事。一个真心相信自己在做对事的人，会不会反而更危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-roosevelt-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我们在吵什么。\n\n古巴，离佛罗里达只有 145 公里，是西班牙的殖民地。1895 年起，古巴人又一次起义反抗西班牙。西班牙为镇压，把平民赶进一种叫 reconcentration（再集中）的营地，大量平民病饿而死。\n\n这些惨状，被美国的报纸放得很大。当时纽约有一种便宜的大众报纸，一两美分一份，靠最耸动的大标题和插画抢读者——这就是 yellow journalism（黄色新闻）。Hearst 的报、Pulitzer 的报，天天把古巴的血放在头版。\n\n民意被点着了。整个国家开始喊：救古巴，打西班牙。\n\n而我，比谁都急。但我急的，不只是古巴的苦难——我心里那张地图，比古巴大得多。',
        en: 'First, see clearly what we were arguing about.\n\nCuba, just 90 miles from Florida, was a Spanish colony. From 1895 the Cubans rose again against Spain. To crush them, Spain herded civilians into camps called reconcentration zones, where huge numbers died of disease and hunger.\n\nThese horrors were blown up huge by American newspapers. New York then had cheap mass papers, one or two cents each, fighting for readers with the most shocking headlines and pictures. This was yellow journalism. Hearst\'s paper and Pulitzer\'s paper put Cuba\'s blood on the front page every day.\n\nPublic feeling caught fire. The whole nation began to cry: save Cuba, fight Spain.\n\nAnd I was more eager than anyone. But what I was eager for was not only Cuba\'s suffering. The map in my head was far larger than Cuba.',
      },
      deliverGoal: 'N2 setup — 古巴离佛州 145km 西班牙殖民地 + 1895 古巴起义 + 西班牙 reconcentration 营地平民病饿死 + yellow journalism (Hearst/Pulitzer 一两美分耸动头版放大惨状) + 民意被点着喊救古巴打西班牙 + Roosevelt 比谁都急但心里地图比古巴大得多',
      engagementHook: '报纸天天把古巴的血放上头版，整个国家喊「打西班牙」。当一种声音被放到最大、盖过其他时，你还分得清自己在为什么愤怒吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-roosevelt-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我心里那张更大的地图，叫「中国市场」。\n\n那时美国工厂过剩，所有人都盯着一个去处：中国，四亿人的市场。可中国在地球另一边，要去那里，得有跨太平洋的海军；要有海军，就得有加煤站、有基地。\n\n夏威夷，太平洋正中，是通往亚洲的跳板。菲律宾，西班牙的殖民地，正好靠近中国——它本身不在我们要救的古巴那边，却是太平洋上最关键的一块跳板。\n\n所以你看，这场名义上「为古巴」的战争，在我这种人眼里，从一开始就连着一个更大的算盘：海军、太平洋、中国。\n\n但请你也记住另一件事：我不觉得这是阴谋。我真心相信，美国强大、把「文明」带向远方，是好的、是对的、是美国的命运。这正是我这种人最难被看穿的地方——我的野心，和我的真诚，是同一样东西。',
        en: 'The larger map in my head was called "the China market."\n\nAmerican factories were overflowing, and everyone eyed one outlet: China, a market of four hundred million people. But China was on the other side of the earth. To reach it you needed a navy that could cross the Pacific; to have such a navy you needed coaling stations and bases.\n\nHawaii, in the middle of the Pacific, was the stepping-stone to Asia. The Philippines, a Spanish colony, lay right next to China — it was not on the side of the Cuba we said we were saving, yet it was the most vital stepping-stone in the Pacific.\n\nSo you see, this war fought in the name of "Cuba" was, to men like me, tied from the start to a larger calculation: navy, Pacific, China.\n\nBut remember one more thing: I did not feel this was a plot. I truly believed that a strong America, carrying "civilization" outward, was good, was right, was America\'s destiny. That is the hardest thing about men like me to see through: my ambition and my sincerity were the same thing.',
      },
      deliverGoal: 'N3 setup — 更大的地图=中国市场 (四亿人/工厂过剩盯这去处) + 要去中国需跨太平洋海军→需加煤站基地 + 夏威夷太平洋跳板 + 菲律宾靠近中国是关键跳板 (不在古巴那边却最关键) + 名义「为古巴」的战争连着海军/太平洋/中国的大算盘 + 「不觉得是阴谋我真信扩张是对的/野心和真诚是同一样东西」',
      engagementHook: '我的野心和我的真诚，是同一样东西——我真心相信扩张是对的。当一个人既算计又真诚，你该信他哪一面？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-roosevelt-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1898 年 2 月 15 日晚上九点四十，停在古巴哈瓦那港的美国战舰 USS Maine（缅因号）突然爆炸沉没，两百六十多名美国水兵死亡。\n\n你听到消息，第一反应是什么？\n\n说实话：当时根本没人查得清原因。（后来 1976 年美国海军的调查倾向认为，是船内煤舱自燃引爆了弹药，不是西班牙干的——但这是几十年后的事，至今学界也无定论。）可那天的报纸不等真相，第二天就用最大的字号把矛头指向西班牙。「Remember the Maine!」（记住缅因号！）成了举国的战争口号。\n\n你呢？你心里清楚证据不足。但你已经等这个机会等很久了。\n\n这就是你要替我面对的拷问：当一件你早就想做的事，突然有了一个「正当理由」——哪怕这个理由根本没查实——你会停下来等真相，还是顺势把它用掉？',
        en: 'Now you are me.\n\nAt 9:40 on the night of February 15, 1898, the U.S. battleship USS Maine, sitting in Havana harbor in Cuba, suddenly exploded and sank. More than 260 American sailors died.\n\nWhen you hear the news, what is your first reaction?\n\nHonestly: at the time no one could determine the cause. (Much later, a 1976 U.S. Navy study leaned toward an internal coal-bunker fire igniting the ammunition, not Spain — but that was decades away, and to this day scholars reach no final verdict.) Yet the papers did not wait for the truth. The next day they ran the largest type pointing at Spain. "Remember the Maine!" became the nation\'s war cry.\n\nAnd you? You know in your heart the evidence is thin. But you have waited a long time for this chance.\n\nThis is the question you must face for me: when a thing you long wanted to do suddenly gains a "just cause" — even a cause never proven — do you stop and wait for the truth, or seize the moment and use it?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1898.2.15 晚 9:40 Maine 哈瓦那港爆炸沉 260 多水兵死 + anti-fab 原因 (当时没人查得清/1976 调查倾向煤舱自燃非西班牙/至今无定论) + 报纸不等真相次日矛头指西班牙「Remember the Maine!」+ 你心里清楚证据不足但等机会很久 + 自我拷问: 想做的事突然有了没查实的「正当理由」你停下等真相还是顺势用掉',
      engagementHook: '我心里清楚证据不足，可我已经等这个机会很久了。当你早就想做一件事、突然来了个借口，你会等真相，还是先用了再说？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-roosevelt-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我没有等。我做了那件远超我职权的事。\n\n1898 年 2 月，趁我的上司、海军部长 John Long 离开办公室的一个下午，我抢着发了一道电报——给远在亚洲的 Dewey（杜威）舰队，命令他们做好开战准备，盯紧马尼拉港里的西班牙舰队。\n\n你想想这有多越权：我是个「副」部长，正职不在，我就自作主张，给地球另一端的舰队下了一道可能引爆战争的命令。\n\n这一道电报，后来直接促成了马尼拉湾的胜利。\n\n我不后悔。在我心里，这不叫越权，这叫「有人得有胆子做决定」。可你坐在我的位置上，得诚实地问自己一句：一个二把手，趁上司不在，自作主张点了一场跨洋战争的引线——这是当机立断的英雄气，还是一个人把整个国家的命运，赌在了自己一个人的判断上？',
        en: 'I did not wait. I did the thing far beyond my authority.\n\nIn February 1898, one afternoon while my boss, Navy Secretary John Long, was out of the office, I rushed off a telegram — to Dewey\'s fleet far away in Asia, ordering them to be ready for war and to watch the Spanish fleet in Manila harbor.\n\nThink how far past my power this was: I was an Assistant Secretary. With the chief absent, I took it on myself to send a fleet on the other side of the earth an order that could set off a war.\n\nThat one telegram helped, directly, to make the victory at Manila Bay possible.\n\nI do not regret it. In my heart this was not overstepping; it was "someone has to have the nerve to decide." But sitting in my seat, you must honestly ask yourself: a number two, with his chief away, lighting the fuse of an ocean-crossing war on his own — is this the courage of a man who acts in time, or one man betting a whole nation\'s fate on his own single judgment?',
      },
      deliverGoal: 'N5 story — Roosevelt 越权: 1898.2 趁上司 John Long 外出抢发电报令 Dewey 舰队备战盯马尼拉西班牙舰队 + 强调越权 (副部长正职不在自作主张给另一端舰队下可能引爆战争的命令) + 这道电报直接促成马尼拉湾胜利 + 不后悔「有人得有胆子做决定」+ 自我拷问: 趁上司不在点跨洋战争引线是英雄气还是把国运赌在一个人判断上',
      engagementHook: '我趁上司不在，自作主张给地球另一头的舰队下了一道可能引爆战争的命令。这是当机立断的胆识，还是一个人擅自赌上整个国家？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-roosevelt-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1898 年 5 月 1 日。马尼拉湾。\n\n那天我不在现场——我在华盛顿。但当电报传回来时，我几乎能听见那声炮响。\n\nDewey 的舰队突袭马尼拉湾，几个小时之内，把西班牙的整支太平洋舰队打沉在水里。美方，没有一个人在战斗中死亡。\n\n你能体会我那一刻的心情吗？那不只是一场胜仗。那是我二月里那道电报，隔着大半个地球，终于响了。一场名义上「为古巴」的战争，第一声大炮，打在了菲律宾——打在了我心里那张更大地图的关键一格上。\n\n我得意吗？我得意极了。在我听来，那是命运的回声：美国的力量，第一次真正按响在太平洋上。\n\n但你先把这声炮响记住。同一声炮，落在另外两个人耳朵里，会是完全不同的东西——一个一开始当成解放的喜讯，一个先欢呼、后来才懂自己被卖了。可那一刻的我，只听得见自己的胜利。',
        en: 'May 1, 1898. Manila Bay.\n\nI was not there that day — I was in Washington. But when the telegram came back, I could almost hear the guns.\n\nDewey\'s fleet surprised the Spanish fleet at Manila Bay and, within hours, sank Spain\'s entire Pacific fleet in the water. Not a single American died in the fighting.\n\nCan you feel what I felt in that moment? It was not only a victory. It was my February telegram, across half the earth, finally going off. A war fought in the name of "Cuba" fired its first great gun in the Philippines — on the key square of the larger map in my head.\n\nWas I proud? I was wildly proud. To my ear it was the echo of destiny: American power, for the first time, truly sounding across the Pacific.\n\nBut hold that sound of the guns in your mind. The same guns, falling on two other people\'s ears, would be something completely different — one heard it at first as news of liberation, one cheered first and only later understood he had been sold. In that moment, though, I could hear only my own victory.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1898.5.1 马尼拉湾 (Roosevelt 角度: 不在现场在华盛顿/电报传回几乎听见炮响) Dewey 几小时全歼西班牙太平洋舰队美方无一人战死 + Roosevelt 心情: 二月那道电报终于响了/为古巴的战争第一炮打在菲律宾=他更大地图关键一格 + 得意极了「命运的回声美国力量第一次按响太平洋」+ 预埋 cross-lens (同一声炮另两人耳朵完全不同/一个当解放喜讯/一个先欢呼后懂被卖) 但此刻只听见自己胜利。只碰炮响从他角度不揭另两视角内容',
      engagementHook: '我二月那道电报，隔着大半个地球，终于响了——我得意极了，只听得见自己的胜利。同一声炮，会不会在别人耳朵里是另一回事，而你正听不见？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-roosevelt-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我不满足于坐在华盛顿的办公室里听捷报。\n\n我辞掉了副部长的职务，亲自组建了一支志愿骑兵团——Rough Riders（莽骑兵）。里面什么人都有：西部的牛仔、矿工，还有常春藤名校的运动员，全混在一起。\n\n1898 年 7 月，古巴，圣胡安岭。我带队冲锋。我后来说，那是「我一生中最伟大的一天」。\n\n这一仗让我成了全国英雄。报纸上全是我的名字、我的照片。两年内我当上副总统，1901 年成了总统。\n\n但我得停下来，给你补一笔报纸没登的：那天真正主攻的山头上，黑人骑兵第 9 团、第 10 团也在血战，他们的伤亡一点不比我们少。可镜头几乎全给了我。他们的功劳，被埋了几十年。\n\n这就是「英雄故事」的代价：为了让一个人发光，得有一群人留在阴影里。当年的我，享受着那束光，没怎么去想，光的背后是谁。',
        en: 'I would not sit in a Washington office listening to news of victory.\n\nI quit my post as Assistant Secretary and personally raised a volunteer cavalry unit — the Rough Riders. It held every kind of man: cowboys and miners from the West, and Ivy League athletes, all mixed together.\n\nJuly 1898, Cuba, the San Juan ridge. I led the charge. I later called it "the great day of my life."\n\nThis battle made me a national hero. The papers were full of my name and my photograph. Within two years I was vice president; in 1901, president.\n\nBut I must stop and add what the papers did not print: on the hill where the real assault went in, the Black 9th and 10th Cavalry also fought and bled, taking losses no lighter than ours. Yet the cameras went almost entirely to me. Their part was buried for decades.\n\nThis is the price of a "hero story": to make one man shine, a crowd must stay in the shadow. Back then, enjoying that light, I did not think much about who was behind it.',
      },
      deliverGoal: 'N7 story — Roosevelt 辞副部长亲建 Rough Riders 莽骑兵 (牛仔/矿工/常春藤运动员混在一起) + 1898.7 古巴圣胡安岭带队冲锋「我一生中最伟大的一天」+ 成全国英雄报纸全是他两年内副总统 1901 总统 + 补报纸没登的: 黑人第 9/10 骑兵团同战血战伤亡不少但镜头全给他功劳埋几十年 + 「英雄故事」代价: 一人发光要一群人留阴影/当年享受光没想光背后是谁',
      engagementHook: '为了让我一个人发光，黑人第 9、第 10 骑兵团的血战被埋了几十年。一个英雄故事的背后，常常站着一群被关进阴影里的人——你平时记住的，是谁的名字？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-roosevelt-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '对西班牙的战争，打得又快又漂亮。从四月到八月停火，整场仗只打了大约十周。我们的国务卿 John Hay 给它起了个名字——「a splendid little war」（一场漂亮的小仗）。\n\n1898 年 12 月 10 日，巴黎条约签字。西班牙放弃古巴，把波多黎各、关岛割让给美国，再把菲律宾以两千万美元「卖」给美国。\n\n一夜之间，美国有了海外属地，横跨加勒比和太平洋。\n\n我兴奋。但说句公道话：连我们自己内部，对「要不要留下菲律宾」也吵翻了天。开战时，国会通过了 Teller 修正案，白纸黑字声明美国「无意吞并古巴」——这是为了堵住「你这只是抢地」的批评。可三年后，1901 年的 Platt 修正案又写明：古巴的内政、外交，我们说了算，还要在古巴留一个海军基地。同一个国家，既想要解放者的形象，又舍不得真的放手。\n\n你看，连最想扩张的我们，心里也清楚一件事：「自由」这两个字，是我们开战的旗号。可现在我们手里多了几块别人的土地，这面旗号，开始有点烫手了。',
        en: 'The war against Spain was fought fast and beautifully. From April to the August ceasefire, the whole thing lasted only about ten weeks. Our Secretary of State, John Hay, gave it a name — "a splendid little war."\n\nOn December 10, 1898, the Treaty of Paris was signed. Spain gave up Cuba, ceded Puerto Rico and Guam to the U.S., and "sold" the Philippines to the U.S. for twenty million dollars.\n\nOvernight, America had overseas possessions, across the Caribbean and the Pacific.\n\nI was thrilled. But to be fair: even inside our own camp, "whether to keep the Philippines" set off a furious fight. When the war began, Congress passed the Teller Amendment, stating plainly that the U.S. had "no intention of annexing Cuba" — meant to block the charge that "this is just a land grab." Yet three years later, the 1901 Platt Amendment spelled out the opposite: Cuba\'s domestic and foreign affairs were ours to settle, and we would keep a naval base on the island. The same nation wanted both the image of a liberator and to never quite let go.\n\nYou see, even we, who wanted expansion most, knew one thing in our hearts: "freedom" was the banner we went to war under. Now we held several pieces of other people\'s land, and that banner was beginning to burn the hand.',
      },
      deliverGoal: 'N8 story — 对西班牙战又快又漂亮 (4 月到 8 月停火约十周/John Hay「a splendid little war」) + 1898.12.10 巴黎条约 (西班牙放弃古巴/割波多黎各关岛/2000 万美元卖菲律宾) + 一夜有海外属地跨加勒比太平洋 + 内部吵翻「要不要留菲律宾」+ 开战时 Teller 修正案声明无意吞并古巴 (堵抢地批评) + Platt 修正案 1901 反向写明古巴内政外交美国说了算+设海军基地 (Teller↔Platt 不情愿的帝国 DBQ 证据对/既要解放者形象又舍不得放手) + 「自由是开战旗号现在手里多了别人的土地旗号开始烫手」',
      engagementHook: '「自由」是我们开战时举的旗号。可一夜之间手里多了几块别人的土地，这面旗，开始烫手了。当口号和你真正做的事对不上时，是先改口号，还是先停手？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-roosevelt-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实讲完那块最烫手的土地：菲律宾。\n\n菲律宾人原以为我们是来帮他们赶走西班牙、让他们独立的。他们的领袖 Aguinaldo（阿奎纳多）早就宣布了独立、建立了共和国。可我们不承认。\n\n1899 年 2 月，美军和菲律宾军队开火，菲美战争爆发。这一仗，比对西班牙那场「小仗」血腥太多了：四千两百多名美军、约两万名菲律宾战士战死，而至少二十万菲律宾平民死亡——大多死于战乱带来的饥荒和疫病。\n\n我必须说清楚「至少」这两个字：这个数字的学界估计区间很宽，有的高得多，二十万只是保守的下限。\n\n你听出我语气里的别扭了吗？这一段，我讲得没有圣胡安岭那么神气。因为在美国后来的课本里，1898 常被讲成「一场漂亮的小仗 + 美国崛起」，而这场更长、更血、至少二十万平民死亡的战争，常常只剩一行字。被记住的，是我的光彩；被忘掉的，是他们的命。',
        en: 'I must honestly finish telling of the most blistering piece of land: the Philippines.\n\nThe Filipinos thought at first that we had come to help drive out Spain and let them be independent. Their leader, Aguinaldo, had already declared independence and set up a republic. But we did not recognize it.\n\nIn February 1899, U.S. and Filipino forces opened fire, and the Philippine-American War began. This war was far bloodier than the "little war" with Spain: over 4,200 U.S. troops and about 20,000 Filipino fighters died, and at least 200,000 Filipino civilians died — most of them from the famine and disease the war brought.\n\nI must be clear about those words "at least": the scholarly estimates run across a wide range, some far higher; 200,000 is only the conservative floor.\n\nDo you hear the awkwardness in my voice? I tell this part with none of the swagger of San Juan ridge. Because in America\'s later textbooks, 1898 is often told as "a splendid little war + America rises," while this longer, bloodier war, with at least 200,000 civilian deaths, is often a single line. What gets remembered is my glory; what gets forgotten is their lives.',
      },
      deliverGoal: 'N9 story — 菲律宾最烫手 + 菲律宾人原以为美国帮他们独立 Aguinaldo 宣布独立建共和国但美国不承认 + 1899.2 菲美战争比对西班牙血腥太多 (4200+ 美军/约 2 万菲战士战死/至少 20 万菲平民死多死于战乱饥荒疫病) + anti-fab 显式讲「至少」二字 (区间宽有的高得多 20 万只是保守下限) + Roosevelt 语气别扭没了神气 + 课本把 1898 讲成漂亮小仗+崛起这场战争只剩一行 + 「被记住的是我的光彩被忘掉的是他们的命」',
      engagementHook: '这一段，我讲得没有圣胡安岭那么神气——因为被记住的是我的光彩，被忘掉的是至少二十万菲律宾平民的命。一段历史里，谁的故事被记住、谁的被忘掉，是由什么决定的？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-roosevelt-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么评我？两种说法都站得住，你来称。\n\n一种说法：我是个有远见的爱国者。我看见了别人没看见的——美国必须走向海洋，否则就会被时代甩下。后来的历史证明，美国确实成了世界强国，而 1898 正是那一步的起点。我有胆子、有行动、有担当，把一个犹豫的国家推上了它该走的路。一个领袖的伟大，不就在于敢做别人不敢做的决定吗？\n\n另一种说法：我把自己的野心，包装成了整个国家的「命运」。我趁上司不在擅自下令、借一场没查实的爆炸开战、为了我的英雄光环把别人的血战埋进阴影、为了一张「中国市场」的地图把至少二十万菲律宾平民推进了一场被遗忘的战争。我真诚地相信自己在做对的事——而这恰恰是最危险的：一个真诚的人，能犯下最大的、自己都不觉得是错的错。\n\n这两边不是「他功大于过」或「过大于功」。是同一个我的两面——一个有远见的行动者，和一个把真诚当成免罪符的帝国推手。\n\n顺带说一句：历史学家到今天还在吵 1898 这件事——它究竟是被黄色新闻和一时民意一把卷进去的意外，还是工业过剩、系统性找市场之后的必然？这两种解释，你以后写 AP 大题用得上。\n\n这是 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I was a far-sighted patriot. I saw what others did not — that America had to turn to the sea or be left behind by the age. Later history proved America did become a world power, and 1898 was the start of that step. I had nerve, action, and the will to carry a hesitating nation onto the road it had to take. Is the greatness of a leader not exactly the courage to make decisions others dare not?\n\nThe other view: I dressed my own ambition up as the whole nation\'s "destiny." With my chief away I gave orders on my own, went to war on an unproven explosion, buried others\' bloody fighting in shadow for the sake of my hero\'s halo, and for a map of "the China market" pushed at least 200,000 Filipino civilians into a forgotten war. I sincerely believed I was doing right — and that is exactly the most dangerous thing: a sincere man can commit the largest wrongs, ones he never even feels are wrong.\n\nThese are not "his good outweighed his harm" or the reverse. They are two faces of the same me — a far-sighted man of action, and a driver of empire who used sincerity as a pardon.\n\nOne more thing: historians still argue about 1898 today — was it an accident, a country swept in by yellow journalism and a momentary public mood, or the inevitable result of industrial overflow systematically hunting for markets? You will find both explanations useful when you write AP essays later.\n\nThis is the hard problem an AP teacher has students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (有远见的爱国者/看见美国必须走向海洋/历史证明成世界强国 1898 是起点/领袖伟大在敢做别人不敢的决定) / 另一种说法 (把野心包装成国家命运/擅自下令/借没查实的爆炸开战/为光环埋别人血战/为中国市场地图推 20 万菲平民进被遗忘战争/真诚的人能犯自己都不觉得错的最大的错) / 同一个我两面 / 轻量 historiography 钩子 (历史学家至今吵 1898 是被黄色新闻民意卷进的意外还是工业过剩系统找市场的必然/不点学者名进正文/AP 大题用得上) / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '一个有远见的行动者，和一个把「真诚」当免罪符的帝国推手——是同一个我。一个真心相信自己在做对事的人，能不能也犯下最大的错？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'saw-roosevelt-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是帝国推手这一边的声音。\n\n请记住：这只是一边。我讲的「美国的命运」「我有远见」「我真心为这个国家好」，听起来甚至很有感染力——这正是我这种视角最危险的地方，它能把扩张讲得理直气壮、热血沸腾。\n\n但这一遍里，有两个声音被我盖住了。一个是 Mark Twain（马克·吐温）——全美国最受爱戴的作家，他会问：一个靠「人人生而平等、被治者的同意」立国的国家，去统治不肯同意被统治的别人，凭什么？另一个，是菲律宾村庄里那个我从没记住名字的年轻人——他以为我们是来解放他的，结果发现自己只是从西班牙手里，被两千万美元卖进了我手里。等你换上他们的视角，他们会狠狠挑战你刚才听我说的每一句。\n\n最后，留一个东西给你。还记得 1898 年 5 月 1 日，马尼拉湾那声让我得意到发抖的炮响吗？\n\n换一个视角再走一遍，你会从另一个人的耳朵里，再听见它一次。到那时，它对你就不再只是一声胜利的炮了。',
        en: 'What you just heard was the voice of one side — the driver of empire.\n\nRemember: it is only one side. My talk of "America\'s destiny," of "I had vision," of "I truly wanted what was best for this country," can even sound stirring — and that is exactly the most dangerous thing about my view. It can make expansion sound righteous and thrilling.\n\nBut in this pass, two voices were drowned out by mine. One is Mark Twain, the most-loved writer in America, who would ask: a nation founded on "all men are created equal" and "the consent of the governed" — by what right does it rule others who refuse to consent? The other is that young man in a Filipino village whose name I never bothered to learn — he thought we had come to free him, and found instead that he had been sold, for twenty million dollars, out of Spain\'s hands into mine. When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. Do you remember the guns at Manila Bay on May 1, 1898, the sound that made me tremble with pride?\n\nWalk this through once more from another perspective, and you will hear it again, through someone else\'s ears. By then it will no longer be only a victory gun to you.',
      },
      deliverGoal: 'N11 close/meta — 你听的是帝国推手一边 (能把扩张讲得理直气壮最危险) + 被盖住的两个声音: Mark Twain (最受爱戴作家/会问靠人人生而平等+被治者同意立国凭什么统治不同意的人) + 菲律宾村庄没记住名字的年轻人 (以为来解放他结果被 2000 万美元从西班牙手卖进美国手) 会挑战你听的每句 + 暗示马尼拉湾炮响会从另一视角再听见一次 (不直接解释 echo)',
      engagementHook: '帝国推手最危险的地方，是他能把扩张讲得理直气壮、热血沸腾。你听完我这一边，最想去问那个反对的 Twain、那个被卖掉的菲律宾年轻人什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var twainLens = {
  id: 'twain-mediator',
  name: 'Mark Twain',
  nameCn: '马克·吐温',
  role: 'lonely-mediator',
  perspectiveTag: 'conscience-against-empire',
  icon: '🖋️',
  description: {
    cn: '真实历史人物。本名 Samuel Clemens，笔名 Mark Twain，写《汤姆·索亚》《哈克贝利·费恩》。1898 年他大概是全美国、甚至全世界最受爱戴的美国作家。耐人寻味的是：战争刚开始时，连他都一度支持，以为美国是去帮古巴、菲律宾人争自由的。当真相浮现，美国不是帮菲律宾独立，而是接管、镇压，他转向了，成了 American Anti-Imperialist League（反帝同盟）最尖锐的声音之一。他不是在两个军队之间调停，而是站在美国的良心和美国的野心之间。这一遍让你看见：反帝不是「不爱国」，恰恰是另一种爱国，它问的是「我们到底是谁」。',
    en: 'A real historical person. His real name was Samuel Clemens, pen name Mark Twain, author of Tom Sawyer and Huckleberry Finn. In 1898 he was perhaps the most-loved American writer in the country, even the world. The telling part: when the war began, even he supported it at first, thinking America was going to help Cubans and Filipinos win their freedom. When the truth surfaced, that America was not helping the Philippines to independence but taking it over and crushing it, he turned, and became one of the sharpest voices of the American Anti-Imperialist League. He did not mediate between two armies; he stood between America\'s conscience and America\'s ambition. This pass shows you that anti-imperialism was not "unpatriotic" but another kind of patriotism, one that asks "who, really, are we."',
  },
  storyboard: [
    {
      id: 'saw-twain-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1898 年。我是 Mark Twain（马克·吐温）。\n\n你大概读过我写的汤姆·索亚、哈克贝利·费恩。那一年，我可能是全美国最受爱戴的作家。我说一句话，无数人会听。\n\n我要先告诉你一件不太光彩的事：这场战争刚开始时，连我都支持。\n\n是的，连我。我以为我们是去帮古巴人、菲律宾人争取自由的。这正是 1898 年最难的地方——连一个一辈子靠看穿假话吃饭的人，一开始都被「我们是去解放别人」这句话说服了。\n\n这一遍，你坐进我这个位置。你会跟我一起，从一个被说服的人，变成一个站出来说「不，这不是我们」的人。你会发现：有时候，最难的不是反对敌人，而是反对你自己曾经也相信过、而且你深爱的那个国家。',
        en: '1898. I am Mark Twain.\n\nYou have probably read my Tom Sawyer, my Huckleberry Finn. That year I was perhaps the most-loved writer in America. Say a word, and countless people would listen.\n\nLet me first tell you something not to my credit: when this war began, even I supported it.\n\nYes, even I. I thought we were going to help Cubans and Filipinos win their freedom. That is exactly what made 1898 so hard — even a man who made his living seeing through lies was, at first, convinced by the line "we are going to liberate others."\n\nThis pass puts you in my seat. With me, you will go from a man who was convinced, to a man who stands up and says, "No, this is not us." You will find that sometimes the hardest thing is not to oppose an enemy, but to oppose what you yourself once believed, and the country you deeply love.',
      },
      deliverGoal: 'N1 hook — 1898 Mark Twain 自我介绍 (汤姆索亚/哈克/全美最受爱戴作家说一句话无数人听) + 不光彩的事: 战争刚开始连他都支持 (以为帮古巴菲律宾争自由) + 1898 最难: 连靠看穿假话吃饭的人都被「去解放别人」说服 + 这一遍视角 (从被说服的人变成站出来说「不这不是我们」的人/最难的是反对自己曾相信且深爱的国家)',
      engagementHook: '连我这个一辈子靠看穿假话吃饭的人，一开始都被「我们是去解放别人」说服了。最难看穿的谎，是不是正好是你最愿意相信的那个？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-twain-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂我为什么后来转向，得先看清这个国家是靠什么立起来的。\n\n美国的根本文件是《独立宣言》，1776 年。里面有一句话，是这个国家的灵魂：「政府的正当权力，来自被治者的同意（consent of the governed）。」\n\n你品一品这句话的分量。它的意思是：没有任何人，可以在你不同意的情况下统治你。1776 年，美国人正是举着这句话，反抗英帝国的统治，打出了自己的独立。\n\n这是我们最骄傲的出身：我们是一个「反抗帝国」而生的国家。\n\n所以你看，1898 年的问题，根上是一个特别尖锐的矛盾：一个靠「反抗帝国、被治者必须同意」立国的国家，现在要不要去统治从没同意过被它统治的古巴人、菲律宾人？\n\n同一句话，1776 年是用来反抗帝国的。1898 年，它会不会回过头来，质问美国自己？',
        en: 'To understand why I later turned, you must first see what this country was built on.\n\nAmerica\'s founding document is the Declaration of Independence, 1776. In it is one sentence that is the country\'s soul: "Governments derive their just powers from the consent of the governed."\n\nWeigh that sentence. It means: no one may rule you without your consent. In 1776, Americans held up exactly this sentence to throw off the rule of the British empire and win their independence.\n\nThis is our proudest origin: we are a nation born by rebelling against empire.\n\nSo you see, the question of 1898 is, at root, a sharp contradiction: a nation founded on "rebel against empire, the governed must consent" — now must it rule Cubans and Filipinos who never consented to its rule?\n\nThe same sentence was used in 1776 to throw off an empire. In 1898, would it turn around and question America itself?',
      },
      deliverGoal: 'N2 setup — 国家靠什么立起来 + 《独立宣言》1776 灵魂句「政府正当权力来自被治者的同意 consent of the governed」+ 分量: 没人能在你不同意下统治你/1776 举这句反抗英帝国打出独立 + 最骄傲出身: 反抗帝国而生的国家 + 1898 尖锐矛盾: 反帝立国的国家要不要统治从没同意的古巴菲律宾人 + 「同一句话 1776 反抗帝国 1898 会不会回头质问美国自己」',
      engagementHook: '同一句「被治者必须同意」，1776 年我们用它反抗帝国，赢得独立。1898 年，它会不会回过头来，质问我们自己？一句原则，能不能既属于你、又审判你？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-twain-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂我站在哪儿，得先看清当时美国分成了哪几边。这不是「好人对坏人」，是几群都觉得自己有理的人，吵成一团。\n\n一边是扩张派（expansionists）：海军战略家、报业大亨、想要中国市场的工厂主、想传教的人。他们说这是美国的「命运」——海军需要太平洋的加煤站，工厂需要海外市场，文明需要被「带」出去。\n\n另一边是反帝派（anti-imperialists），也就是我后来站的这边。但我得诚实告诉你一件不舒服的事：我们这一边，内部动机并不干净统一。\n\n有人像我，是出于原则：统治不肯被统治的人，背叛了美国自己的立国誓言。\n\n可也有人反帝，是出于种族偏见——他们不是觉得统治别人不对，而是不想要「非白人」变成美国国民。\n\n你看明白这有多复杂了吗？同一句「反对吞并」，从两张嘴里说出来，一张是高尚的，一张是不堪的。我得在这样一个混杂的阵营里，找到我自己站立的理由。',
        en: 'To understand where I stand, you must first see the sides America split into. This was not "good people against bad people." It was several groups, each sure it was right, quarreling in a heap.\n\nOn one side were the expansionists: naval strategists, newspaper tycoons, factory owners wanting the China market, people wanting to send missions. They said this was America\'s "destiny" — the navy needed Pacific coaling stations, factories needed overseas markets, civilization needed to be "carried" outward.\n\nOn the other side were the anti-imperialists, the side I later stood on. But let me honestly tell you something uncomfortable: our side\'s motives were not clean and unified.\n\nSome, like me, acted from principle: ruling people who refuse to be ruled betrays America\'s own founding vow.\n\nBut others were anti-imperialist out of racism — they did not think ruling others was wrong; they did not want "non-white" people becoming American citizens.\n\nDo you see how tangled this was? The same phrase, "against annexation," from two mouths — one noble, one ugly. I had to find, within such a mixed camp, my own reason to stand.',
      },
      deliverGoal: 'N3 setup — 美国分几边不是好人对坏人是几群都觉得有理的人 + 扩张派 (海军战略家/报业大亨/要中国市场工厂主/传教人/说是命运: 海军要加煤站工厂要市场文明要带出去) + 反帝派 (Twain 后来站这边) 内部动机不干净统一 + 原则派 (统治不肯被统治者背叛立国誓言) vs 种族派 (不是觉得统治不对是不想要非白人当国民) + 「同一句反对吞并两张嘴一高尚一不堪」+ 在混杂阵营找自己站立的理由',
      engagementHook: '同一句「反对吞并」，从两张嘴里说出来，一张是高尚的，一张是不堪的。如果两个人做了同一件「对」的事，动机却一好一坏——这件事还算「对」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-twain-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你一开始是支持开战的。Maine 爆炸、报纸沸腾、举国喊「救古巴」，你也以为这是一桩义举。你是个有良心的人，你愿意相信自己的国家在做好事。\n\n然后，真相一点一点露出来。\n\n你听说：马尼拉湾大捷之后，美国没有让菲律宾独立。菲律宾人的领袖 Aguinaldo 早就宣布了独立、建了共和国，可美国不承认。巴黎条约里，西班牙把菲律宾以两千万美元「卖」给了美国——没有一个菲律宾人被问过愿不愿意。\n\n那一刻，你心里有什么东西塌了。这不是「帮别人争自由」。这是把一个民族，从一个帝国手里，买进了另一个帝国手里。\n\n现在你得做一个选择，一个很难的选择：你深爱这个国家，你也曾为这场战争叫好。当你发现它在做一件违背自己灵魂的事——你是闭嘴、给它留面子，还是站出来，公开说「不」？',
        en: 'Now you are me.\n\nAt first you supported the war. The Maine exploded, the papers boiled, the nation cried "save Cuba," and you too thought it a righteous act. You are a man with a conscience; you want to believe your country is doing good.\n\nThen, piece by piece, the truth came out.\n\nYou hear: after the great victory at Manila Bay, America did not let the Philippines go free. The Filipino leader Aguinaldo had already declared independence and built a republic, but America would not recognize it. In the Treaty of Paris, Spain "sold" the Philippines to the U.S. for twenty million dollars — and not one Filipino was ever asked.\n\nIn that moment, something in you collapsed. This was not "helping others win freedom." This was buying a whole people out of one empire\'s hands and into another\'s.\n\nNow you must make a choice, a hard one: you deeply love this country, and you once cheered this war. When you find it doing a thing that betrays its own soul — do you keep quiet to save its face, or stand up and say, publicly, "No"?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 你一开始支持开战 (Maine 爆炸/报纸沸腾/喊救古巴/你有良心愿信国家做好事) + 真相一点点露出: 马尼拉湾大捷后美国没让菲律宾独立 (Aguinaldo 早宣布独立建共和国美国不承认/巴黎条约 2000 万卖菲律宾没问过一个菲律宾人) + 心里塌了「不是帮争自由是把民族从一帝国买进另一帝国」+ 选择: 深爱国家也曾叫好/发现它违背自己灵魂/闭嘴留面子还是站出来公开说不',
      engagementHook: '你深爱这个国家，也曾为这场战争叫好。当你发现它在做一件违背自己灵魂的事——你是闭嘴给它留面子，还是站出来公开说「不」？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-twain-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选择了站出来。\n\n我成了 American Anti-Imperialist League（美国反帝同盟，1898 年成立）最尖锐的声音之一。和我站在一起的，有钢铁巨头 Andrew Carnegie，有政治家 William Jennings Bryan——一群本来立场各异的人，为了同一件事聚到了一起。\n\n我用我最拿手的武器：笔，和讽刺。\n\n我写文章建议：既然我们已经成了一个统治别人的帝国，那不如给美国国旗换个新版本吧——把白色的条纹涂黑，把那些星星，换成骷髅和交叉的白骨。\n\n你能想象一个全国最受爱戴的作家，说出这种话，要冒多大的险吗？很多人骂我「不爱国」「老糊涂了」。\n\n但我心里清楚：我做这件事，恰恰是因为我太爱这个国家了。我不能忍受看着它，背叛它自己写下的那句「人人生而平等、被治者的同意」，去当一个帝国。沉默才是不爱，说出来才是。',
        en: 'I chose to stand up.\n\nI became one of the sharpest voices of the American Anti-Imperialist League, founded in 1898. Standing with me were the steel tycoon Andrew Carnegie and the politician William Jennings Bryan — a crowd of people, of very different views, gathered for one cause.\n\nI used my best weapon: the pen, and satire.\n\nI wrote, suggesting: since we have become an empire that rules others, let us give the American flag a new version — paint the white stripes black, and replace the stars with skulls and crossed bones.\n\nCan you imagine the risk for the most-loved writer in the country to say such a thing? Many cursed me as "unpatriotic," "gone senile."\n\nBut I knew in my heart: I did this precisely because I loved this country too much. I could not bear to watch it betray the very words it had written — "all men are created equal," "the consent of the governed" — and become an empire. Silence would be the lack of love; speaking out is the love.',
      },
      deliverGoal: 'N5 story — Twain 站出来成反帝同盟 (1898 成立) 最尖锐声音 + 同站者 Carnegie 钢铁巨头 + Bryan 政治家 (立场各异为同一件事聚一起) + 用笔和讽刺 + 建议国旗换新版 (白条涂黑/星星换骷髅交叉白骨) + 全国最受爱戴作家说这话冒多大险 (被骂不爱国老糊涂) + 「恰恰因为太爱国/不能忍它背叛人人生而平等+被治者同意去当帝国/沉默才是不爱说出来才是」',
      engagementHook: '我建议把国旗的星星换成骷髅，被骂「不爱国」——可我做这件事，恰恰因为我太爱这个国家了。沉默地看它做错，和大声说「不」，哪一个才是真的爱国？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-twain-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我带你回到 1898 年 5 月 1 日，马尼拉湾那声炮响——因为那声炮，是我心里转向的起点。\n\n那天，Dewey 几个小时打沉了西班牙整支太平洋舰队，美方在战斗中无一人死亡。\n\n（这一段是 lens 让你走进我的心里。史料不会逐字记下我听到捷报那一刻在想什么，但坐在我这个位置，你大概能体会。）\n\n第一时间，我跟全国一样欢呼。我以为：太好了，我们替菲律宾人赶走了西班牙，他们快自由了。在那一声炮里，我听见的是「解放」。\n\n可几个月后，当我看清美国根本不打算放手菲律宾，那同一声炮，在我记忆里变了味道。它不再是解放的礼炮，而是一个帝国宣告自己到来的第一声枪响。\n\n你看，最让人心碎的，不是一开始就听出恶意——而是你曾经真诚地为某件事欢呼，后来才发现，你欢呼的，正是你最该反对的东西。',
        en: 'Let me take you back to May 1, 1898, the guns at Manila Bay — because those guns were where my turning began.\n\nThat day, in a few hours Dewey sank Spain\'s entire Pacific fleet, with not one American killed in the fighting.\n\n(This part is the pass letting you into my mind. The record does not write down, word for word, what I thought when the victory news reached me, but sitting in my seat, you can feel it.)\n\nAt first I cheered with the whole nation. I thought: wonderful, we have driven Spain out for the Filipinos, they will soon be free. In that one boom I heard "liberation."\n\nBut months later, when I saw that America had no intention of letting the Philippines go, that same sound changed its flavor in my memory. It was no longer a salute of liberation, but the first gunshot of an empire announcing its own arrival.\n\nYou see, the most heartbreaking thing is not hearing the malice from the start — it is having sincerely cheered for something, only to discover later that what you cheered was the very thing you should most have opposed.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 马尼拉湾炮响从 Twain 角度 = 他转向的起点 (1898.5.1 Dewey 几小时全歼西班牙太平洋舰队美方在战斗中无一人死亡, 与 Roosevelt-n6 口径一致) + anti-fab 框架 (lens 让你走进我心里/史料不逐字记我听到捷报想什么) + 第一时间跟全国欢呼听见「解放」(以为替菲律宾赶走西班牙快自由了) + 几月后看清美国不放手菲律宾同一声炮变味 (不再是解放礼炮是帝国宣告到来第一声枪响) + 「最心碎不是一开始听出恶意是真诚欢呼后发现欢呼的正是最该反对的」',
      engagementHook: '同一声炮，我先听成「解放」，后来才听出那是一个帝国到来的第一声枪。你有没有真诚地为一件事欢呼过，后来才发现，你欢呼的正是你最该反对的？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-twain-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1898 到 1899 年，整个美国为「要不要留下菲律宾」吵翻了天。这是我这一生见过最激烈的一场国民大辩论。\n\n扩张派讲命运、讲市场、讲传教、讲海军安全。我们反帝派讲那句老话：你统治不肯被统治的人，就背叛了「被治者同意」的立国原则。\n\n这场仗，最后是在国会里、用投票决的。\n\n1899 年 2 月，美国参议院批准了巴黎条约——留下了菲律宾。而批准的票数，只比通过所需的三分之二门槛，多出了一票。\n\n一票。\n\n你体会一下这个数字的重量：美国是要做一个统治别人的帝国，还是守住自己「反帝」的初心——这么大一件事，最后悬在了一票上。\n\n我们输了，输得这么险。我常常想：如果那一票翻过来，今天的美国，会不会是另一个国家？历史有时候不是被宏大的命运推着走的，它就卡在某一张票、某一个人的一念之间。',
        en: 'From 1898 to 1899, all of America fought furiously over "whether to keep the Philippines." It was the fiercest national debate I saw in my life.\n\nThe expansionists spoke of destiny, of markets, of missions, of naval security. We anti-imperialists spoke the old line: rule people who refuse to be ruled, and you betray the founding principle of "consent of the governed."\n\nThis fight was settled, in the end, in Congress, by a vote.\n\nIn February 1899, the U.S. Senate approved the Treaty of Paris — keeping the Philippines. And the count passed the needed two-thirds threshold by just one vote.\n\nOne vote.\n\nFeel the weight of that number: whether America would become an empire ruling others, or hold to its "anti-empire" first heart — a thing this large hung, in the end, on a single vote.\n\nWe lost, and lost so narrowly. I often think: had that one vote flipped, would America today be a different country? History is not always pushed by some grand destiny. Sometimes it sticks on a single ballot, a single person\'s passing thought.',
      },
      deliverGoal: 'N7 story — 1898-99 全美吵「要不要留菲律宾」最激烈国民大辩论 + 扩张派讲命运市场传教海军安全 vs 反帝派讲被治者同意 + 最后国会投票决 + 1899.2 参议院批准巴黎条约留下菲律宾仅超 2/3 门槛一票 (anti-fab 用「只比门槛多一票」符合账本红旗#4) + 「一票」重量 (做帝国还是守反帝初心悬在一票上) + 输得这么险/如果那票翻过来今天美国会不会另一个国家/历史卡在一票一念之间',
      engagementHook: '美国要不要做一个统治别人的帝国——这么大一件事，最后只悬在一票上。历史有时候不是被宏大的命运推着走，而是卡在某一张票上。这让你怎么想「个人的选择」？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-twain-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得讲讲扩张派最漂亮的那套说辞，因为它最值得我们警惕。\n\n1898 年 12 月，McKinley 总统发了一份公告，给占领菲律宾起了个名字，叫「Benevolent Assimilation」（仁慈的同化）。公告里有一句广为流传的话，意思是：美国的使命，是用温和而公正的治理，去取代（西班牙的）专断统治。\n\n你听听，多动听。我们不是来征服你的，我们是来「带给」你更好的治理的。\n\n这就是帝国的「善意版本」。它最厉害的地方，是它真心相信自己是好意的。\n\n可问题就在那个谁都不提的窟窿里：菲律宾人，从头到尾没被问过愿不愿意。\n\n一份开口就讲「正义与权利」的公告，紧接着，引爆了一场夺走至少二十万菲律宾平民性命的战争。\n\n我作为一个写字的人，最怕的就是这种语言：它用最善良的词，包住最残酷的事。所以我一辈子都在提醒人——当有人用特别漂亮的话，替一件让别人付出代价的事辩护时，你要格外小心地，去看那句话的背面。',
        en: 'I must speak of the expansionists\' finest line of talk, because it is the one most worth our wariness.\n\nIn December 1898, President McKinley issued a proclamation, giving the occupation of the Philippines a name: "Benevolent Assimilation." In it was a widely quoted line, meaning: America\'s mission is to replace Spain\'s arbitrary rule with mild, just government.\n\nListen, how lovely. We are not here to conquer you; we are here to "bring" you better government.\n\nThis is empire\'s "good-intentions version." Its most powerful trait is that it truly believes itself well-meaning.\n\nBut the trouble lies in the hole no one mentions: the Filipinos were never, from start to finish, asked whether they wanted it.\n\nA proclamation that opened with "justice and right" was followed at once by a war that took at least 200,000 Filipino civilian lives.\n\nAs a man who works with words, the language I fear most is exactly this: it wraps the cruelest deed in the kindest words. So all my life I warned people — when someone defends a thing that costs others dearly, in especially lovely words, look with extra care at the back of that sentence.',
      },
      deliverGoal: 'N8 story — 扩张派最漂亮说辞最值得警惕 + 1898.12 McKinley 公告给占领菲律宾起名 Benevolent Assimilation 仁慈同化 (核心句意: 用温和公正治理取代西班牙专断统治) + 多动听「不是征服是带给你更好治理」+ 帝国善意版本最厉害是真心信自己好意 + 谁都不提的窟窿: 菲律宾人从没被问过愿不愿意 + 一份讲正义与权利的公告紧接引爆夺走至少 20 万菲平民的战争 + Twain 作为写字人最怕这种语言 (善良词包残酷事) + 提醒看漂亮话的背面',
      engagementHook: '「仁慈的同化」——多动听的名字，紧接着却是一场夺走至少二十万人命的战争。当有人用最漂亮的话替一件让别人付代价的事辩护，你会不会去看那句话的背面？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-twain-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图——一张能看清美国这只手到底伸了多远的地图。\n\n就在我们为菲律宾吵翻天的同时，地球另一端，那个被扩张派天天挂在嘴边的「中国市场」，正在被列强用刀叉分食。\n\n1898 年是清光绪二十四年。1894 到 1895 年甲午战败给日本之后，清朝国力大伤，列强嗅到血腥，开始了所谓「瓜分中国」的狂潮：德国（借两名传教士被杀为由）强租胶州湾，俄国租旅顺大连，英国租威海卫，法国租广州湾。短短一两年，中国的海岸线被切成了一块块「租借地」和「势力范围」。\n\n美国晚到了一步，在中国抢不到一块地。于是 1899 到 1900 年，国务卿 John Hay 想出了「门户开放」（Open Door）：不要一块地，而要求各国让所有人都能进整个中国做生意。\n\n1900 年义和团事件中，八国联军攻进北京，美国也派了兵——这是美国军队第一次为了在华利益，直接踏上中国的土地。\n\n你看出我看见的东西了吗？1898 到 1900 这两三年，美国海外帝国的两只手，一只按在菲律宾的占领上，一只按在中国的门户上。「中国市场」从来不是地图上一片空白的机会，它的另一端，是活生生的、从没被问过愿不愿意的人。',
        en: 'Let me step back and show you a larger map — one that lets you see just how far this American hand reached.\n\nAt the very moment we were fighting over the Philippines, on the other side of the earth that "China market," forever on the expansionists\' lips, was being carved up by the great powers.\n\n1898 was the 24th year of the Guangxu reign of China\'s Qing dynasty. After its crushing defeat by Japan in 1894-1895, the Qing was badly weakened, the powers smelled blood, and began the frenzy called the "carving-up of China": Germany (on the pretext of two murdered missionaries) forced a lease on Jiaozhou Bay, Russia leased Port Arthur and Dalian, Britain leased Weihaiwei, France leased Guangzhouwan. In a year or two, China\'s coastline was cut into "leased territories" and "spheres of influence."\n\nAmerica arrived one step late and could grab no piece of China. So in 1899-1900, Secretary of State John Hay devised the "Open Door": instead of one piece of land, demand that all nations let everyone trade throughout all of China.\n\nIn the 1900 Boxer crisis, an eight-nation army stormed Beijing, and America sent troops too — the first time American soldiers set foot on Chinese soil directly for the sake of interests in China.\n\nDo you see what I saw? In those two or three years, 1898 to 1900, the two hands of American overseas empire pressed down — one on the occupation of the Philippines, one on the door of China. The "China market" was never a blank field of opportunity on a map; at its other end were living, breathing people, never asked whether they were willing.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 中国桥注入 mediator) — 我们为菲律宾吵翻同时地球另一端「中国市场」被列强分食 + 1898=清光绪二十四年/1894-95 甲午败日清力衰/列强瓜分中国 (德强租胶州湾(借两传教士被杀为由)/俄租旅顺大连/英租威海卫/法租广州湾/海岸线切成租借地势力范围) + 美国晚一步抢不到地 → 1899-1900 John Hay 门户开放 (不要一块地要求各国让所有人进整个中国做生意) + 1900 义和团事件八国联军攻进北京美国也派兵 (美军第一次为在华利益直接踏上中国土地) + Twain 看见: 1898-1900 帝国两只手一按菲律宾占领一按中国门户 + 「中国市场从不是地图空白机会另一端是活生生从没被问过的人」',
      engagementHook: '美国海外帝国的两只手，一只按在菲律宾的占领上，一只按在中国的门户上。当你听到「市场」「机会」这些词，你会不会想起：这扇门，对谁是开的，对谁是被撬开的？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-twain-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，最难评的一件事，是我这种「站出来反对自己国家」的人，到底算什么。两种说法都站得住，你来称。\n\n一种说法：我是这个国家的良心。一个国家最珍贵的，不是它从不犯错，而是当它犯错时，还有人敢站出来，举着它自己写下的原则，问它「你还记得你是谁吗」。我反的不是美国，我反的是美国背叛美国。这种「逆耳的爱国」，恰恰是一个自由国家最该珍惜的东西。\n\n另一种说法：我说得漂亮，可我改变了什么？菲律宾还是被占了，那场战争还是夺走了至少二十万条命，巴黎条约还是通过了。我用我的名气写讽刺、出风头，让自己站上了道德高地，可那个吕宋岛村庄里的年轻人，并没有因为我的笔少流一滴血。一个隔岸观火、只动嘴的良心，会不会其实是一种廉价的自我安慰？\n\n这两边不是「他对」或「他没用」。是同一件事的两面——说出真话本身有价值，和说出真话并不等于改变结果，可以同时为真。\n\n这是 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, the hardest thing to judge is what a man like me — who stands up against his own country — really amounts to. Both views stand. You do the weighing.\n\nOne view: I was this country\'s conscience. A nation\'s most precious thing is not that it never errs, but that when it errs, someone still dares to stand up, hold up the principles it wrote itself, and ask it, "do you still remember who you are?" I opposed not America, but America betraying America. This "patriotism that grates on the ear" is exactly what a free country should most treasure.\n\nThe other view: I spoke beautifully, but what did I change? The Philippines was still occupied, that war still took at least 200,000 lives, the Treaty of Paris still passed. I used my fame to write satire and show off, climbing onto the moral high ground, yet that young man in a village on Luzon bled no less for my pen. A conscience that watches the fire from across the river and only moves its mouth — might it really be a cheap self-comfort?\n\nThese are not "he was right" or "he was useless." They are two faces of one thing — that speaking the truth has value in itself, and that speaking the truth does not equal changing the outcome, can both be true at once.\n\nThis is the hard problem an AP teacher has students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 站出来反对自己国家的人算什么 / 一种说法 (国家的良心/最珍贵不是从不犯错是犯错时有人敢举它自己的原则问你还记得你是谁/反的是美国背叛美国/逆耳的爱国最该珍惜) / 另一种说法 (说得漂亮改变了什么/菲律宾还是被占战争还是夺 20 万命条约还是通过/用名气出风头站道德高地/吕宋少年没因我的笔少流血/隔岸观火只动嘴是廉价自我安慰) / 同一件事两面 (说真话有价值 + 说真话不等于改变结果同时为真) / neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '我用名气写讽刺、站上道德高地——可吕宋岛村庄里那个年轻人，并没有因为我的笔少流一滴血。说真话本身就有价值，还是只有改变了结果才算数？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'saw-twain-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是一个良心反对者这一边的声音。\n\n请记住：这也只是一边。我讲的「我是国家的良心」「我反的是美国背叛美国」，听起来很高尚、很令人佩服——可你要小心，连「站在道德高地上反对」本身，也可能是一种让自己感觉良好的姿态。我这一边，同样需要被别的视角检验。\n\n这一遍里，还有两个人，我替他们说话，却从来不能真正代替他们开口。一个是 Theodore Roosevelt——那个发电报、冲圣胡安岭、把美国推向帝国的人。他会说：我光会动嘴皮子，是他这种敢做事的人，才真正塑造了历史。另一个，是吕宋岛村庄里那个我一直挂在嘴边、却始终没有名字的年轻人。我替他喊了那么多，可他到底想不想要我的「同情」？他自己会怎么讲这场战争？等你换上他们的视角，他们会狠狠挑战我刚才说的每一句。\n\n最后，留一个东西给你。还记得 1898 年 5 月 1 日，马尼拉湾那声我先听成「解放」、后来才听出是帝国到来的炮响吗？\n\n换一个视角再走一遍，你会从另一个人的耳朵里，再听见它一次。',
        en: 'What you just heard was the voice of one side — a conscience in opposition.\n\nRemember: this too is only one side. My talk of "I am the country\'s conscience," of "I opposed America betraying America," sounds noble and admirable — but be careful: even "opposing from the moral high ground" can itself be a pose that makes a man feel good. My side, too, needs testing by other perspectives.\n\nIn this pass, there are two people for whom I spoke, yet whom I could never truly speak in place of. One is Theodore Roosevelt — the man who sent the telegram, charged San Juan ridge, and pushed America into empire. He would say: I only flapped my lips; it was men like him, who dared to act, who truly shaped history. The other is that young man in a village on Luzon, forever on my lips yet still without a name. I cried out so much on his behalf — but did he even want my "sympathy"? How would he tell this war himself? When you switch to their perspectives, they will challenge, hard, every sentence I just spoke.\n\nAnd one last thing to leave with you. Do you remember the guns at Manila Bay on May 1, 1898 — the sound I first heard as "liberation" and only later heard as the arrival of an empire?\n\nWalk this through once more from another perspective, and you will hear it again, through someone else\'s ears.',
      },
      deliverGoal: 'N11 close/meta — 你听的是良心反对者一边 (连「站道德高地反对」本身也可能是让自己感觉良好的姿态/我这边也需被别视角检验) + 两个我替他们说却不能真正代替开口的人: Roosevelt (发电报冲圣胡安岭推美国入帝国/会说我光动嘴皮子他敢做事才塑造历史) + 吕宋少年 (我挂嘴边却始终没名字/我替他喊那么多他到底想不想要我的同情/他自己会怎么讲) 会挑战我每句 + 暗示马尼拉湾炮响会从另一视角再听见 (不直接解释 echo)',
      engagementHook: '连「站在道德高地上反对」本身，都可能是一种让自己感觉良好的姿态。我替那个菲律宾年轻人喊了那么多——可他到底想不想要我的同情？换上他的视角，你最想问他什么？',
      expectsRealAnswer: true,
    },
  ],
};

export var filipinoLens = {
  id: 'filipino-on-receiving-end',
  name: 'A Young Person in a Filipino Village',
  nameCn: '菲律宾村庄里的年轻人',
  role: 'receiving-end',
  perspectiveTag: 'handed-over-twice',
  icon: '🏝️',
  description: {
    cn: '虚构桥接人物，身份完全写实（这是默认视角）。不给确切姓名，因为这场战争里几十万菲律宾平民的死，历史大多没留下名字，而这恰恰是问题的一部分。能确证的是他的处境：吕宋岛（Luzon）一个村子里的年轻人，从小生活在西班牙三百多年的殖民统治下。1898 年，他听说一个新强国，也就是美国，它的舰队几小时打沉了西班牙舰队，村里一开始是欢呼的。然后真相一点点露出来：他不是被解放了，他只是从一个帝国手里，被两千万美元卖进了另一个帝国手里。这一遍让你站在最被忽略的位置，直面那个问题：「我们到底是被解放，还是被征服？」',
    en: 'A bridging character, with a fully real role (this is the default perspective). He has no exact name, because history left no names for most of the hundreds of thousands of Filipino civilians who died in this war, and that, exactly, is part of the problem. What is certain is his situation: a young man in a village on Luzon, who grew up under more than three hundred years of Spanish colonial rule. In 1898 he heard that a new great power, the United States, had sunk the Spanish fleet in a few hours, and at first his village cheered. Then the truth came out, piece by piece: he had not been freed; he had simply been sold, for twenty million dollars, out of one empire\'s hands into another\'s. This pass puts you in the most overlooked position, facing the question head-on: "Were we freed, or were we conquered?"',
  },
  storyboard: [
    {
      id: 'saw-filipino-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我是吕宋岛（Luzon）一个村子里的年轻人。吕宋，是菲律宾最大的岛。\n\n我没有名字给你。不是我不肯说，是历史没替我们记下来。这场战争里，死了至少二十万像我这样的菲律宾平民，他们大多没有留下名字。而「没有名字」这件事本身，就是我要让你看见的问题之一。\n\n我从小生活在西班牙的殖民统治下——这统治，已经在我们这片岛上压了三百多年。\n\n这一遍，你站在我这儿，最被忽略的这个位置。在美国后来的课本里，1898 年常被讲成「一场漂亮的小仗，加上美国崛起」。但从我这个村子望出去，它是另一个故事——更长、更血、几乎被忘掉。\n\n我要带你走完它，然后问你一个我用一生都没想明白的问题：我们，到底是被解放了，还是被征服了？',
        en: 'I am a young man in a village on Luzon. Luzon is the largest island in the Philippines.\n\nI have no name to give you. Not because I will not say it, but because history did not write it down for us. In this war, at least 200,000 Filipino civilians like me died, and most of them left no name. And that very fact — having no name — is one of the problems I want you to see.\n\nFrom childhood I lived under Spanish colonial rule — a rule that had pressed on these islands for more than three hundred years.\n\nThis pass, you stand where I stand, in this most overlooked place. In America\'s later textbooks, 1898 is often told as "a splendid little war, plus America\'s rise." But looking out from my village, it is another story — longer, bloodier, all but forgotten.\n\nI will walk you through it, and then ask you a question I never, in my whole life, worked out: were we freed, or were we conquered?',
      },
      deliverGoal: 'N1 hook — 吕宋岛 (菲律宾最大岛) 一个村子年轻人 + 没名字 (历史没记/至少 20 万菲平民死大多没名字/「没有名字」本身是要让你看见的问题之一) + 从小西班牙殖民统治三百多年 + 这一遍站最被忽略位置 + 美国课本把 1898 讲成漂亮小仗+崛起但从村子望出去是更长更血几乎被忘掉的故事 + 带你走完问一生没想明白的问题: 被解放还是被征服',
      engagementHook: '账本和课本里都没有我的名字——至少二十万和我一样的人，死时都没留下名字。「没有名字」这件事本身，会不会就是问题的一部分？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-filipino-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我们已经在做的事，你才懂后来那场背叛有多痛。\n\n我们不是在等别人来救的人。早在 1896 年，我们菲律宾人就已经自己拿起武器，为脱离西班牙、争取独立而战了。\n\n这一点请你记牢：在美国人出现之前，我们已经在为自己的自由流血了。我们有自己的领袖，叫 Emilio Aguinaldo（阿奎纳多）。我们想要的，从来不是「被谁解放」，而是自己当家做主。\n\n三百多年的西班牙统治，给我们留下了天主教堂、留下了沉重的赋税、留下了被当成二等人的日子。够了。我们想要的，是一个自己的国家。\n\n所以当 1898 年，那个叫美国的新强国，把它的军舰开进我们的海湾时，我们心里想的是——也许，一个能帮我们赶走西班牙的朋友，来了。\n\n你先记住这份期待。因为正是这份期待，让后来的真相，格外地刺骨。',
        en: 'First let me tell what we were already doing, so you understand how much the later betrayal hurt.\n\nWe were not a people waiting to be saved. As early as 1896, we Filipinos had already taken up arms ourselves, fighting to break from Spain and win independence.\n\nHold this firmly: before the Americans appeared, we were already bleeding for our own freedom. We had our own leader, Emilio Aguinaldo. What we wanted was never "to be liberated by someone," but to rule ourselves.\n\nMore than three hundred years of Spanish rule had left us Catholic churches, heavy taxes, and days of being treated as second-class people. Enough. What we wanted was a country of our own.\n\nSo when, in 1898, that new great power called America sailed its warships into our bay, what was in our hearts was this: perhaps a friend has come who will help us drive out Spain.\n\nHold that hope first. Because it was exactly this hope that made the later truth so piercingly cold.',
      },
      deliverGoal: 'N2 setup — 我们已在做的事 + 不是等别人救的人/1896 起菲律宾人已自己拿武器为脱离西班牙争独立而战 + 记牢: 美国人出现前我们已为自己自由流血 + 领袖 Emilio Aguinaldo + 想要的不是被谁解放是自己当家做主 + 三百多年西班牙统治留下天主教堂/沉重赋税/二等人/够了想要自己的国家 + 1898 美国军舰开进海湾我们想也许帮我们赶走西班牙的朋友来了 + 「记住这份期待正是它让后来真相格外刺骨」',
      engagementHook: '在美国人出现之前，我们已经为自己的自由流血两年了——我们想要的从来不是「被谁解放」，是自己当家做主。一个已经在自救的民族，需要别人来「解放」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-filipino-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可你要明白，我们这座岛，从来不在我们自己手里。它是别人地图上的一颗棋子。\n\n美国为什么会来？不是为了我们。说实话，连那场战争本身，名义上都是「为古巴」——古巴在地球另一边的加勒比海，离我们十万八千里。\n\n那美国人为什么盯上我们菲律宾？因为我们的位置。我们靠近中国。对一个想做生意、想要「中国市场」的强国来说，菲律宾是太平洋上一块绝佳的跳板——一个可以停军舰、囤煤、通往亚洲的落脚点。\n\n你听懂这里面的冰冷了吗？在他们眼里，我们这片有血有肉、有自己历史和梦想的土地，首先是一块「位置好」的地。\n\n（史料没有替我这个村里的年轻人，留下他当时是否懂这层地缘算计的记录。这层大棋，多半是我事后、用很多人的命，才慢慢看懂的。）\n\n一个把你当跳板的人，和一个把你当朋友的人，从一开始，就是两回事。',
        en: 'But understand: this island of ours was never in our own hands. It was a chess piece on other people\'s maps.\n\nWhy did America come? Not for us. To be honest, even the war itself was, in name, "for Cuba" — and Cuba lies in the Caribbean on the other side of the earth, a world away from us.\n\nSo why did the Americans fix on us, the Philippines? Because of our position. We lie near China. To a great power that wanted to do business, that wanted the "China market," the Philippines was a superb stepping-stone in the Pacific — a place to dock warships, store coal, a foothold on the way to Asia.\n\nDo you hear the coldness in this? In their eyes, this land of ours, of flesh and blood, with its own history and dreams, was first of all a piece of ground in a "good location."\n\n(The record left nothing of whether this young man in his village understood that geopolitical calculation at the time. This larger game I mostly came to see only afterward, paid for with many lives.)\n\nA man who treats you as a stepping-stone, and a man who treats you as a friend, are, from the very start, two different things.',
      },
      deliverGoal: 'N3 setup — 这座岛从不在自己手里是别人地图棋子 + 美国为什么来不是为我们/连战争名义都是「为古巴」(古巴在加勒比离我们十万八千里) + 为什么盯上菲律宾=位置/靠近中国/对想要中国市场的强国是太平洋绝佳跳板 (停军舰囤煤通往亚洲落脚点) + 冰冷: 我们有血有肉有历史梦想的土地首先是块位置好的地 + anti-fab 括号 (史料没留我当时是否懂地缘算计/这层大棋多半事后用很多人命才看懂) + 「把你当跳板和把你当朋友从一开始就是两回事」',
      engagementHook: '在他们眼里，我们这片有血有肉、有自己梦想的土地，首先是一块「位置好」的地。被人当成「跳板」，和被人当成「朋友」，你觉得差在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-filipino-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1898 年 5 月 1 日，消息传到村里：美国的舰队开进了马尼拉湾，几个小时，就把西班牙的舰队全打沉了。\n\n你站在村子里，听到这个消息，是什么感觉？\n\n欢呼。整个村子都在欢呼。压了我们三百多年的西班牙，它的军舰，一个上午就沉进了海里。你心想：救星来了。那个强大的美国，是来帮我们的。我们盼了那么久的自由，是不是终于要来了？\n\n那一天，你是真心高兴的。你甚至感激那支把西班牙打沉的舰队。\n\n你先把这份高兴牢牢记住。\n\n因为这一遍最残忍的地方，不是一开始就被人欺负——而是你曾经那样真心地，为一件事欢呼、感激、燃起希望，后来才一点一点发现：你欢呼的那个「救星」，其实是来接管你的下一个主人。',
        en: 'Now you are me.\n\nOn May 1, 1898, the news reached the village: America\'s fleet had sailed into Manila Bay and, in a few hours, sunk the entire Spanish fleet.\n\nYou stand in the village, and hearing this, what do you feel?\n\nCheering. The whole village is cheering. Spain, which had pressed on us for more than three hundred years — its warships sank into the sea in a single morning. You think: a savior has come. That powerful America has come to help us. The freedom we longed for so long — is it finally coming?\n\nThat day, you were truly glad. You even felt grateful to the fleet that sank Spain.\n\nHold that gladness firmly first.\n\nBecause the cruelest thing about this pass is not being bullied from the start — it is that you once so sincerely cheered, felt grateful, kindled hope for a thing, only to discover, piece by piece, that the "savior" you cheered was in fact the next master, come to take you over.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1898.5.1 消息传村: 美国舰队开进马尼拉湾几小时全打沉西班牙舰队 + 你站村里什么感觉 + 欢呼 (整村欢呼/压三百多年的西班牙军舰一上午沉海/救星来了美国来帮我们/盼那么久自由终于要来) + 那天真心高兴甚至感激打沉西班牙的舰队 + 牢牢记住这份高兴 + 最残忍不是一开始被欺负是真心欢呼感激燃起希望后一点点发现欢呼的「救星」其实是来接管的下一个主人',
      engagementHook: '那一天我真心地欢呼、感激，以为救星来了。这份高兴，后来成了最痛的地方——你有没有真心为一件事高兴过，后来才发现它根本不是你以为的样子？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-filipino-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '真相，是一点一点露出来的。\n\n1898 年 12 月 10 日，在很远的巴黎，几个国家坐下来签了一份条约。条约里写着：西班牙放弃古巴，把波多黎各、关岛割给美国，再把菲律宾——把我们整个民族——以两千万美元，「卖」给美国。\n\n你读到这一句，停一下。\n\n两千万美元。我们几百万人，连同我们的土地、我们的村子、我们刚刚开始的独立梦，被当成一笔货物，标了个价钱，从一个帝国手里，付钱转给了另一个帝国。\n\n而这整笔交易里，没有一个菲律宾人，被问过一句「你愿不愿意」。\n\n我们的领袖 Aguinaldo 早就宣布了菲律宾独立、建立了共和国。可美国根本不承认。在他们眼里，我们不是一个刚诞生的国家，我们是他们刚花钱买下的财产。\n\n那个 5 月 1 日还在为美国欢呼的我，此刻终于懂了：我没有被解放。我只是被换了一个主人。',
        en: 'The truth came out, piece by piece.\n\nOn December 10, 1898, in far-off Paris, a few nations sat down and signed a treaty. It said: Spain gives up Cuba, cedes Puerto Rico and Guam to the U.S., and "sells" the Philippines — sells our whole people — to the U.S. for twenty million dollars.\n\nRead that line, and stop.\n\nTwenty million dollars. We, several million people, together with our land, our villages, our just-begun dream of independence, were treated as goods, given a price, and paid over, from one empire\'s hands into another\'s.\n\nAnd in this whole bargain, not one Filipino was asked a single "are you willing."\n\nOur leader Aguinaldo had already declared Philippine independence and set up a republic. But America simply did not recognize it. In their eyes we were not a newborn country; we were the property they had just paid to buy.\n\nThe me who, on that May 1, was still cheering for America — now at last I understood: I had not been freed. I had only been handed a new master.',
      },
      deliverGoal: 'N5 story — 真相一点点露出 + 1898.12.10 远在巴黎几国签条约 (西班牙放弃古巴/割波多黎各关岛/把菲律宾整个民族 2000 万美元卖给美国) + 停一下读这句 + 两千万美元 (几百万人连同土地村子刚开始的独立梦被当货物标价从一帝国付钱转给另一帝国) + 整笔交易没一个菲律宾人被问过愿不愿意 + Aguinaldo 早宣布独立建共和国美国不承认 (在他们眼里不是新国家是刚花钱买的财产) + 5.1 还在欢呼的我终于懂: 没被解放只是被换了主人',
      engagementHook: '两千万美元，我们整个民族被当成一笔货物，标了价钱，从一个帝国转手给另一个——没有一个菲律宾人被问过「你愿不愿意」。一个民族能不能被「买卖」？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-filipino-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在，让我重新讲一遍 1898 年 5 月 1 日，马尼拉湾那声炮响——因为同一声炮，对我，前后是两个完全不同的东西。\n\n那天上午，那声炮在我耳朵里，是「解放」。是压了我们三百多年的西班牙终于倒下的声音。我为它欢呼。\n\n（这一段是 lens 让你站在我的耳朵里。史料不会逐字记下我那天具体在想什么，但坐在我这个位置，你大概能体会。）\n\n可等我看清了那份巴黎条约，那同一声炮，在我记忆里彻底变了。它不再是西班牙的丧钟，而是另一个帝国，踏上我们土地、宣告「现在轮到我管你们了」的第一声枪响。\n\n你看，在华盛顿，有人为这声炮得意，因为那是他亲手发的电报终于响了。可在我这个村子里，这声炮先给了我一个我配不上的希望，再亲手把它收回去。\n\n同一声炮，是谁的胜利，又是谁的圈套——这取决于你站在地图的哪一端。而我，站在最被忽略的那一端。',
        en: 'Now let me tell again of May 1, 1898, the guns at Manila Bay — because the same sound, to me, was two completely different things, before and after.\n\nThat morning, in my ears that boom was "liberation." It was the sound of Spain, which had pressed on us for over three hundred years, falling at last. I cheered for it.\n\n(This part is the pass letting you stand in my ears. The record does not write down, word for word, what I thought that day, but sitting in my seat, you can feel it.)\n\nBut once I saw clearly that Treaty of Paris, the same boom changed utterly in my memory. It was no longer Spain\'s death knell, but the first gunshot of another empire setting foot on our land, announcing "now it is my turn to rule you."\n\nYou see, in Washington a man took pride in this sound, because it was the telegram he had sent with his own hand finally going off. But in my village, this sound first gave me a hope I was not allowed to keep, then took it back with its own hand.\n\nThe same boom — whose victory, and whose trap — depends on which end of the map you stand on. And I stand on the most overlooked end.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 重新讲马尼拉湾炮响从菲律宾少年角度 (同一声炮前后两个完全不同的东西) + 那天上午炮在耳朵里是「解放」(压三百多年的西班牙终于倒下/为它欢呼) + anti-fab 框架 (lens 让你站我耳朵里/史料不逐字记我那天想什么) + 看清巴黎条约后同一声炮彻底变 (不再是西班牙丧钟是另一帝国踏上土地宣告现在轮到我管你们第一声枪响) + 呼应另两 lens (华盛顿有人为这声炮得意因亲手发的电报响了) + 在我村子先给我配不上的希望再亲手收回 + 「同一声炮谁的胜利谁的圈套取决于站地图哪一端我站最被忽略那端」',
      engagementHook: '同一声炮，上午我听成「解放」，看清条约后才听出那是另一个帝国宣告「现在轮到我管你们了」。同一声炮，是胜利还是圈套，取决于你站在地图的哪一端——你平时听到的，是哪一端的声音？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-filipino-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们不接受被买卖。\n\n1899 年 2 月，美军和我们菲律宾的军队开火了。菲美战争，爆发了。\n\n这一仗，我们打不赢正面战——美国太强了。于是我们转入游击战：打了就钻进丛林、藏进村子，跟这片我们最熟悉的土地融在一起。\n\n美国的应对，是焚烧我们的村庄，把平民集中关押起来——和当年西班牙在古巴干的，是同一套手段。甚至，有美军用一种叫「water cure」（往人嘴里灌水逼供）的酷刑。\n\n我得诚实：这场战争里，每一方都流了血，也都让别人流了血。\n\n接下来三年，是地狱。这场仗里，死了四千两百多名美军、约两万名菲律宾战士，而至少二十万菲律宾平民死亡——大多不是死在战场上，是死于战乱带来的饥荒和疫病，包括末期的一场霍乱。\n\n这就是那场「漂亮的小仗」之后，从我们村子望出去的真实图景：不漂亮，不小，也远没有结束。',
        en: 'We would not accept being bought and sold.\n\nIn February 1899, U.S. forces and our Filipino forces opened fire. The Philippine-American War broke out.\n\nIn this war we could not win a straight battle — America was too strong. So we turned to guerrilla war: strike, then slip into the jungle, hide in the villages, blend into this land we knew best.\n\nAmerica\'s answer was to burn our villages and herd civilians into camps — the same methods Spain had used in Cuba. Some U.S. troops even used a torture called the "water cure" — forcing water into a prisoner to make him talk.\n\nLet me be honest: in this war every side shed blood, and every side made others bleed.\n\nThe next three years were a hell. In this war over 4,200 U.S. troops died, about 20,000 Filipino fighters, and at least 200,000 Filipino civilians — most of them not on the battlefield, but from the famine and disease the war brought, including a cholera epidemic near the end.\n\nThis is the real picture, after that "splendid little war," seen from our village: not splendid, not little, and nowhere near over.',
      },
      deliverGoal: 'N7 story — 我们不接受被买卖 + 1899.2 美军和菲律宾军队开火菲美战争爆发 + 打不赢正面战 (美国太强) 转游击战 (打了钻丛林藏村子融进最熟悉的土地) + 美国应对: 焚村/平民集中关押 (和西班牙在古巴同套手段) + water cure 酷刑逼供 (账本红旗#4 中性措辞) + anti-fab 诚实「每一方都流血也让别人流血」+ 接下来三年地狱 (4200+ 美军/约 2 万菲战士死/至少 20 万菲平民死大多死于战乱饥荒疫病含末期霍乱) + 「漂亮小仗后从村子望出去: 不漂亮不小远没结束」',
      engagementHook: '「一场漂亮的小仗」——可从我们村子望出去：不漂亮，不小，也远没有结束，至少二十万平民死在了里面。同一段历史，为什么从不同的位置看，连大小都不一样？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-filipino-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图，一张能看清我们不是一个人在这种处境里的地图。\n\n就在我们被「买卖」、被镇压的同时，地球另一端，那个美国人天天惦记的「中国市场」，正在经历它自己的噩梦。\n\n1898 年，列强正在「瓜分中国」：德国强租了胶州湾，俄国租了旅顺大连，英国租了威海卫，法国租了广州湾。中国的海岸，被切成了一块块别人的「势力范围」。\n\n美国晚到一步，在中国抢不到地，于是提出「门户开放」，要求各国让所有人都能进整个中国做生意。说是「保护中国」，骨子里，是保住美国自己进入中国市场的机会。\n\n1900 年，一群中国人——义和团——用最激烈的方式反扑这场瓜分。八个国家组成联军攻进北京，美国也派了兵。义和团既是对瓜分和外国势力的真实反抗，过程中也有针对外国人和中国基督徒的暴力，两面同体，很难简单说他们是英雄还是暴民。\n\n你看出我们的相似了吗？菲律宾人「被解放成属地」，中国人「被开放成市场」。同一双帝国的手，一只按在我们身上，一只按在他们身上。而几乎同时，这个想要整个中国市场的美国，正用排华法案（1882）把中国人挡在自己的国门外：要中国的市场，却不要中国的人。对很多华裔的孩子来说，那个被瓜分的中国，正是他们祖辈生活的地方，这不是远方的故事。',
        en: 'Let me step back and show you a larger map, one that lets you see we were not alone in this kind of plight.\n\nAt the very moment we were being "bought and sold" and crushed, on the other side of the earth that "China market," forever on American minds, was living its own nightmare.\n\nIn 1898, the great powers were "carving up China": Germany forced a lease on Jiaozhou Bay, Russia leased Port Arthur and Dalian, Britain leased Weihaiwei, France leased Guangzhouwan. China\'s coast was cut into pieces of other people\'s "spheres of influence."\n\nAmerica arrived one step late and could grab no land in China, so it proposed the "Open Door," demanding that all nations let everyone trade throughout all of China. It was called "protecting China," but at its core it was keeping America\'s own chance to enter the China market.\n\nIn 1900, a group of Chinese — the Boxers — struck back at this carving-up in the fiercest way they could. Eight nations formed an alliance and stormed Beijing; America sent troops too. The Boxers were both a real fight-back against the carve-up and foreign power, and a movement that killed foreigners and Chinese Christians, both at once, neither simply heroes nor simply villains.\n\nDo you see the likeness between us? Filipinos were "liberated into a possession," Chinese were "opened into a market." The same imperial hands, one pressing down on us, one on them. And at almost the same time, this America that wanted the whole China market was using the Chinese Exclusion Act (1882) to bar Chinese people from its own gates: it wanted China\'s market, but not China\'s people. For many Chinese-American children, that carved-up China is the very place their ancestors lived; this is not a distant story.',
      },
      deliverGoal: 'N8 zoom-out + 同时代中国 (§8 中国桥注入 receiving-end) — 我们被买卖被镇压同时地球另一端「中国市场」经历自己噩梦 + 1898 列强瓜分中国 (德强租胶州湾/俄租旅顺大连/英租威海卫/法租广州湾/海岸切成势力范围) + 美国晚一步抢不到地提门户开放 (要求各国让所有人进整个中国做生意/说是保护中国骨子里保住美国进中国市场机会) + 1900 义和团最激烈反扑/八国联军攻进北京美国也派兵 + Rule0 义和团两面同体 (对瓜分外国势力真实反抗 + 针对外国人/中国基督徒暴力/不简单说英雄还是暴民) + 看出相似: 菲律宾被解放成属地中国被开放成市场/同一双帝国的手一按我们一按他们 + 排华法案 1882 关联 (要中国市场却不要中国人) + 「对华裔孩子那被瓜分的中国正是祖辈生活的地方不是远方的故事」',
      engagementHook: '菲律宾人「被解放成属地」，中国人「被开放成市场」——同一双帝国的手，一只按在我们身上，一只按在他们身上。同一年地球两端，两个民族，被同一套逻辑摆布——这让你看见的是巧合，还是一种模式？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-filipino-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们的抵抗，最后还是被压下去了。\n\n1901 年，我们的领袖 Aguinaldo 被美军俘虏。1902 年 7 月，美国宣布菲美战争结束。\n\n可「结束」这两个字，是从他们那边说的。从我们这边，结束的是有组织的抵抗，没结束的，是被占领的日子——菲律宾要一直到 1946 年，才真正独立。从美国买下我们，到我们真正自由，中间隔了将近半个世纪。\n\n我得把最难的那一面也讲给你听，不只讲我们的委屈。\n\n这场仗里，我们也杀过人，也有过自己的残酷。一场被逼到绝境的反抗，不会是干净的。我不想把我们这一边，讲成纯白无瑕的受害者——那样，就又一次把我们变成了符号，而不是有血有肉、会犯错的人。\n\n我只想要一件事：被当成人来记住。有名字也好，没名字也好，被记住我们真实的样子——既被冤枉过，也犯过错；既渴望自由，也曾在血里挣扎。',
        en: 'Our resistance was, in the end, put down.\n\nIn 1901 our leader Aguinaldo was captured by U.S. forces. In July 1902, America declared the Philippine-American War over.\n\nBut the word "over" was spoken from their side. From our side, what ended was organized resistance; what did not end was the occupation — the Philippines would not truly become independent until 1946. From America\'s buying us to our real freedom, nearly half a century lay in between.\n\nI must tell you the hardest side too, not only our grievance.\n\nIn this war we also killed, and we too had our cruelties. A resistance driven to the wall is never clean. I do not want to tell our side as a spotless, pure victim — to do that would be, once again, to turn us into a symbol, rather than people of flesh and blood who can err.\n\nI want only one thing: to be remembered as people. With a name or without one, to be remembered as we truly were — both wronged and capable of wrong; both longing for freedom and once struggling in blood.',
      },
      deliverGoal: 'N9 zoom-out — 抵抗最后被压下 + 1901 Aguinaldo 被俘 + 1902.7 美国宣布菲美战争结束 + 但「结束」是从他们那边说的 (我们这边结束的是有组织抵抗没结束的是被占领的日子/菲律宾 1946 才真正独立/从买下到自由隔近半世纪) + 讲最难一面不只讲委屈 + anti-fab/Rule0: 我们也杀过人有过残酷/被逼绝境的反抗不会干净/不把自己讲成纯白受害者 (那样又把我们变符号不是会犯错的人) + 只想要一件事: 被当成人记住 (有名字没名字都被记住真实样子: 被冤枉过也犯过错既渴望自由也曾血里挣扎)',
      engagementHook: '我不想把我们讲成纯白无瑕的受害者——那样，就又一次把我们变成了符号，而不是会犯错的人。我只想被当成「人」来记住。把一个受害的群体讲得太完美，会不会反而抹掉了他们的真实？',
      expectsRealAnswer: false,
    },
    {
      id: 'saw-filipino-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，有一个我用一辈子都没想明白的真问题，留给你。\n\n美国来的时候，嘴里说的是「解放」。McKinley 总统称之为「仁慈的同化」，说是要给我们带来更好的治理。也许，他们当中有些人，是真心这么相信的。\n\n问题就在这里：他们从头到尾，没问过我们一句愿不愿意。\n\n一种说法：那就该叫征服，不叫解放。判断一件事是不是「解放」，标准只有一个——被解放的人，自己同意了吗？再温和、再「仁慈」的统治，只要没经过我的同意，本质上和西班牙没有区别，无非是换了个更好听的名字。\n\n另一种说法：现实没那么非黑即白。比起西班牙三百年的统治，美国后来确实修了学校、铺了路、办了卫生。如果一种统治，客观上让一些人的日子变好了，哪怕它从没问过你——它就一点「解放」的成分都没有吗？\n\n这两边不是「忘恩负义」对「感恩戴德」。它们逼你想清楚一件事：「为你好」，到底能不能替代「问过你」？\n\n这是 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, there is one real question I never, in all my years, worked out, and I leave it to you.\n\nWhen America came, the word in its mouth was "liberation." President McKinley called it "benevolent assimilation" (his name for taking us over: mild, just rule replacing Spain\'s), said it would bring us better government. Perhaps some among them truly believed it.\n\nThe trouble is right there: from start to finish, they never asked us a single "are you willing."\n\nOne view: then it should be called conquest, not liberation. There is only one test of whether a thing is "liberation" — did the people being liberated consent? However mild, however "benevolent" the rule, as long as it never passed through my consent, it is, at root, no different from Spain\'s — only with a sweeter name.\n\nThe other view: reality is not so black and white. Compared with Spain\'s three hundred years, America did later build schools, lay roads, run public health. If a rule objectively made some people\'s lives better, even though it never asked you — does it then hold no element of "liberation" at all?\n\nThese are not "ingratitude" against "gratitude." They force you to think one thing clear: can "for your own good" ever take the place of "asked you"?\n\nThis is the hard problem an AP teacher has students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 美国来时说解放 McKinley 称仁慈同化说带来更好治理也许有些人真信/但从头到尾没问我们愿不愿意 / 一种说法 (那叫征服不叫解放/判断解放标准只有一个被解放的人自己同意了吗/再仁慈没经我同意本质和西班牙没区别只换更好听名字) / 另一种说法 (现实没那么非黑即白/比西班牙三百年美国确实修学校铺路办卫生/客观让一些人日子变好哪怕没问你就一点解放成分都没有吗) / 同一件事两面 (不是忘恩负义对感恩戴德) / 核心张力「为你好能不能替代问过你」/ neutral school name (AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '美国说它是来「解放」我们的——可它从头到尾，没问过我们一句愿不愿意。「为你好」，到底能不能替代「问过你」？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'saw-filipino-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生：一个没有名字的吕宋岛年轻人，一场先被欢呼、后被识破的「解放」，一笔两千万美元的买卖，一场至少二十万人没能活下来的战争。你会怎么评价这样一段历史？\n\n但先记住：你这一遍，只听了我，一个被买卖、被占领的菲律宾人。那个发电报、冲圣胡安岭的 Theodore Roosevelt，会把这一切讲成崛起的荣耀；那个反对吞并的 Mark Twain，会从美国那一边、隔着海替我喊话——这两个声音，你都还没真正听过。换上他们的视角再走一遍，你为我下的判断，还站得住吗？\n\n最后，留一个能跨过一百多年、落到你身边的问题。今天，当你听到「市场」「开放」「机会」「我们是为你好」这些漂亮话，请停下来想一想：这扇门，到底是为谁开的？那个没有名字、没被问过的人，会不会就是这一次没人替他说话的我？',
        en: 'Having walked my whole life: a nameless young man on Luzon, a "liberation" first cheered and later seen through, a twenty-million-dollar sale, a war at least 200,000 people did not survive. How would you judge a history like this?\n\nBut first remember: this pass, you heard only me, a Filipino bought, sold, and occupied. That Theodore Roosevelt, who sent the telegram and charged San Juan ridge, would tell all of this as the glory of a rising nation; that Mark Twain, who opposed annexation, would cry out for me from America\'s side, across the sea — and neither of those two voices have you truly heard yet. Run it again through their perspectives, and see whether the judgment you made for me still holds.\n\nAnd one last question to leave with you, one that can cross more than a hundred years and land beside you. Today, when you hear "market," "opening," "opportunity," "we are doing this for your own good," stop and think: for whom, exactly, is this door open? And that nameless person, never asked, might it be me, the one no one spoke for, this time?',
      },
      deliverGoal: 'N11 close — 评价这段历史 (没名字吕宋年轻人/先被欢呼后被识破的解放/2000 万买卖/至少 20 万人没活下来的战争) + MANDATORY 跨视角指针: ① 你只听到我一个被买卖被占领的菲律宾人 ② Roosevelt 会讲成另一样 (美国命运崛起荣耀/马尼拉湾炮是他电报终于响了) + Twain 讲成第三样 (痛心抗议但终究从美国那边隔海替我喊话) ③ 你都还没真正听过他们/换视角再走判断站不站得住 + transfer「今天听到市场/开放/机会/我们是为你好这些漂亮话停下问这扇门为谁开/问过门里的人吗/那没名字没被问过的人会不会就是这次没人替他说话的我」',
      engagementHook: '你这一遍，只听到了我——一个被买卖、被占领的菲律宾人。Roosevelt 会把这一切讲成「崛起的荣耀」，Twain 会从美国那边隔海替我喊话——你都还没真正听过他们。换个视角再走一遍，你为我下的判断，还站得住吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'roosevelt-actor':            rooseveltLens,
  'twain-mediator':             twainLens,
  'filipino-on-receiving-end':  filipinoLens,
};

// receiving-end 优先 (narrative frontmatter defaultLens; 被忽略的无权方 = AP DBQ 必考角度;
// prior-challenging: 美国课本「漂亮小仗+崛起」主流先验, 默认挑战它的菲律宾视角)
export var defaultLens = 'filipino-on-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'spanish-american-war-1898',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'roosevelt-actor': 30, 'twain-mediator': 30, 'filipino-on-receiving-end': 32 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 马尼拉湾炮响 1898.5.1 (三视角各触一次不点破: Roosevelt 听成电报终于响/Twain 先听成解放后听成帝国到来/菲律宾少年先欢呼后听出被换主人)',
    'defaultLens: filipino-on-receiving-end — 取 narrative frontmatter; 被忽略无权方 (AP DBQ black/colonized agency) + prior-challenging (美国课本「漂亮小仗+崛起」先验)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'Rule 0 高敏感: 扩张支持 (命运/海军/市场/传教) 与批评 (被治者同意/背叛 1776/种族) 两面并陈; Roosevelt 不漫画化; 反帝派内部原则 vs 种族并陈; 门户开放/义和团两面并陈',
    'anti-fab: Maine 原因沿用「当时没人查得清/1976 调查倾向煤舱自燃非西班牙/至今无定论」(账本红旗#1禁确定式); 菲律宾平民「至少 20 万」保留并显式讲下限 (账本红旗#2); 巴黎条约「仅超 2/3 门槛一票」(账本红旗#4); DEFAULT 少年=合成桥接无名字身份写实 + 括号短句标史料无答案; water cure 中性措辞 (账本红旗#4/#28)',
    '§8 中国桥注入 receiving-end N8 + mediator N9 的 zoom-out (瓜分中国/门户开放/义和团两面同体/八国联军含美军/排华法案 1882 关联) — 仅这两节点用中国术语, 美/西/古/菲段落全程真实历史术语',
    '三审定稿 (Dr. Reed APUSH / 赵老师 中国桥 / Maria ESL): P0 全修 — filipino-n8 em-dash 10→4 + 义和团两面同体; twain-n6「美方在战斗中无一人死亡」对齐 roosevelt-n6 口径. 合理 P1 — filipino-n3/n11 em-dash 砍到 ≤6 + n11 反问链/认知负荷降; Roosevelt-n8 加 Teller↔Platt DBQ 证据对; Roosevelt-n10 加轻量 historiography 钩子; twain-n9 加「美国也派兵」+ 德国胶州湾「强租」统一口径; filipino-n8 加排华法案 1882 华裔关联; Mahan/water cure/benevolent assimilation 加首现 inline gloss; receiving-end icon 🔥→🏝️ (中性身份符, 避免 default lens 情绪预设)',
  ],
};
