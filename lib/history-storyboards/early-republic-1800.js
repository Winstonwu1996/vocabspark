// ─────────────────────────────────────────────────────────────────
// 早期共和国 1800-1828 — The Early Republic · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程美国/原住民史真实术语
//   (Louisiana Purchase/Lewis and Clark/Sacagawea/War of 1812/market revolution/
//   Erie Canal/Missouri Compromise/Monroe Doctrine/Shawnee/Cherokee/Shoshone),
//   绝不用中国特定词去类比美国制度。中国只在 §8 出现 (mediator N9 / receiving N9)。
// 3 lens / 11 nodes each / Rule 0 中性 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 量地的木桩 (surveyor stake) — Jefferson 看成「自由帝国」往前钉的进度,
//   Tecumseh 看成不许跨过的那条线, 母亲看成脚下的家一圈圈缩。三视角各触一次,不互相点破。
// §8 中国桥: receiving-end N9 + mediator N9 注入 (两条运河 / 大分流, 框定为 historiography)。
// ─────────────────────────────────────────────────────────────────

export var jeffersonLens = {
  id: 'jefferson-actor',
  name: 'Thomas Jefferson and the Men of "Westward"',
  nameCn: '杰斐逊与「向西」的掌权者',
  role: 'perpetrator-actor',
  perspectiveTag: 'man-in-power',
  icon: '🪶',
  description: {
    cn: '真实历史人物，1801 年成为美国第三任总统。他是个矛盾体：写下《独立宣言》里「人人生而平等」那句话，却在自己的 Monticello 庄园一生蓄奴超过六百人；他主张「宪法没写的政府就不能做」，却买下了半个大陆。这一遍让你坐进一个掌权者的位置，看他如何为「让这个年轻、负债、夹在英法之间的共和国活下去、长大」做出一个个选择，也看这些选择的代价，落在谁头上。',
    en: 'A real historical person who became the third president of the United States in 1801. He was a contradiction: he wrote "all men are created equal" in the Declaration of Independence, yet enslaved more than six hundred people across his life on his Monticello plantation; he argued that "government cannot do what the Constitution does not say," yet bought half a continent. This pass puts you in a powerful man\'s seat, watching him make choice after choice to keep a young, indebted republic, caught between Britain and France, alive and growing, and watching whom those choices cost.',
  },
  storyboard: [
    {
      id: 'er-jefferson-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1801 年，我成了这个年轻国家的第三任总统。\n\n你大概在课本上见过我的名字：写《独立宣言》的那个人，写下「人人生而平等」那句话的那个人。\n\n但我要先跟你说实话。我同时还是另外几个东西：我梦想一个由独立小农组成的共和国，不要工厂、不要城市贫民、不要大银行；我在自己 Monticello 的庄园里，一生蓄奴超过六百人；我嘴上说「宪法没写的，政府就不能做」。\n\n这些东西，在我身上同时为真，而且互相打架。我不是一个能用「好人」或「坏人」一个词说清的人——我是好几样东西硬挤在同一具身体里。\n\n这一遍，你坐进我这个位置。你要替一个刚出生、欠着一身债、夹在英国和法国两个大帝国中间的共和国，做一个个决定——让它活下去，让它长大。\n\n你会看见这些决定有多漂亮，多大气，多像一个伟大政治家该做的事。你也会看见，它们的账，最后记在了谁的头上。而那些被记账的人，往往连开口的机会都没有。',
        en: 'In 1801 I became the third president of this young nation.\n\nYou have probably seen my name in a textbook: the man who wrote the Declaration of Independence, the man who wrote "all men are created equal."\n\nBut let me be honest first. I am several other things at once. I dream of a republic of independent small farmers, with no factories, no city poor, no big banks. On my Monticello plantation I enslave more than six hundred people across my life. And I say with my mouth that "government cannot do what the Constitution does not say."\n\nThese things are all true of me at once, and they fight each other.\n\nThis pass puts you in my seat. You must make decision after decision for a republic newly born, deep in debt, caught between the two great empires of Britain and France, to keep it alive, to make it grow. You will see how fine those decisions look. You will also see whose account the bill is charged to.',
      },
      deliverGoal: 'N1 hook — 1801 第三任总统 + 自我介绍矛盾体 (写《独立宣言》「人人生而平等」/ 梦想小农共和国 / Monticello 一生蓄奴 600+/ 主张宪法没写的政府不能做) + 这一遍视角 (替年轻负债夹在英法间的共和国做决定让它活下去长大 / 也看账记在谁头上)',
      engagementHook: '我写下「人人生而平等」，却一生蓄奴六百人。这两件事，在同一个我身上同时为真。你愿意从一个掌权者内部，看他怎么跟自己的矛盾共处吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-jefferson-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我接手的是一个什么样的国家。\n\n1800 年，美国还只是大西洋边上贴着的十三个州，西边的边界大致到密西西比河为止。全国约五百三十万人。我们刚打完独立战争，欠着一身债，海上有英国，背后有法国和西班牙，两个老帝国都比我们强得多。\n\n说白了，这是一个随时可能被掐死的婴儿。世界上没有人保证它能活过下一代。\n\n我心里有一张图：西部。那片密西西比河往西的广阔土地，在我眼里是这个共和国的「自由帝国」(empire of liberty)——给一代又一代独立小农留出地，让民主有地方生根、长大。\n\n只要有地，普通人就能自己养活自己，不必看大银行、大工厂、大城市的脸色。在我看来，一个国家想守住自由，就得让它的人民握着自己的土地。这是我对「自由」的全部想象。\n\n但「给小农留地」这句话，有一个我当时没说出口的另一面。它要等到后面，才在你眼前露出来——那时你就会明白，我这张漂亮的图，是画在谁的家上的。',
        en: 'First, see clearly what kind of nation I inherited.\n\nIn 1800, the United States was still just thirteen states pressed against the Atlantic, its western edge roughly at the Mississippi River. About 5.3 million people in all. We had just fought the war for independence, we were buried in debt, with Britain on the seas and France and Spain at our back, two old empires far stronger than we were.\n\nThis was an infant that could be strangled at any moment.\n\nIn my mind there was a picture: the West. That broad land west of the Mississippi was, to my eyes, this republic\'s "empire of liberty" — room for generation after generation of independent small farmers, a place for democracy to take root and grow.\n\nAs long as there was land, ordinary people could feed themselves and need not bow to big banks, big factories, big cities. This was the whole of my imagination of "freedom."\n\nBut "room for small farmers" had another side I did not say out loud back then. It would not show itself, in front of you, until later.',
      },
      deliverGoal: 'N2 setup — 1800 接手什么国家 (大西洋边十三州/西界至密西西比河/约 530 万人/刚独立欠债/海上英国背后法西两强帝国/随时被掐死的婴儿) + Jefferson 心里的图: 西部 = empire of liberty 自由帝国 (给小农留地让民主生根) + 自由观 (有地就不必看大银行大工厂脸色) + 埋「给小农留地另一面没说出口」',
      engagementHook: '在我眼里，西部是这个共和国的「自由帝国」——给小农留地，民主才有地方长。可「给小农留地」这句话，还有一面我没说出口。你猜，那片地上是不是已经住着人？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-jefferson-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '在你替我做第一个大决定之前，先弄懂一个词：federalism（联邦）。\n\n1787 年，一群人在费城写出了美国宪法。它把这个国家攒成一个「联邦」——权力分成两层：一层是联邦（全国）政府，一层是各个州的政府。哪些事归全国管、哪些事归各州自己管，是这套设计的命门。\n\n这一代人头上压着一个没有答案的大问题：联邦政府到底能管多宽？\n\n买一整块土地，算不算超出宪法给它的权力？修运河、办一家国家银行，算不算？「自由的州」和「蓄奴的州」挤在同一个联邦里，又该怎么共处？这些问题，宪法里都没有现成答案，是我们这一代人一点一点试出来的。\n\n我自己的立场一向很硬：strict construction，严格解释宪法——宪法白纸黑字没授权的事，政府就别做。我怕一个管得太宽的中央政府，会变成我们刚刚流血推翻的那种暴政。\n\n这个原则，是我的招牌。请你记牢它。因为很快，它就要被一个我自己造的两难，掰得变形。',
        en: 'Before you make my first big decision, get one word straight: federalism.\n\nIn 1787, a group of men in Philadelphia wrote the U.S. Constitution. It bundled this country into a "federal" system, with power split into two layers: one is the federal (national) government, one is the governments of the separate states.\n\nA question with no answer pressed on this generation: how far can the federal government reach?\n\nDoes buying a whole piece of land go beyond the power the Constitution gives it? Does digging canals, or running a national bank? And how can "free states" and "slave states," packed into one union, live side by side?\n\nMy own position was always hard: strict construction — reading the Constitution narrowly. If the Constitution does not authorize it in black and white, government should not do it. I feared that a central government reaching too far would turn into the very tyranny we had just thrown off.\n\nThis principle is my signature. Hold it tight, because soon a dilemma I built myself will bend it out of shape.',
      },
      deliverGoal: 'N3 setup — federalism 联邦 (1787 费城宪法/权力分联邦政府与州政府两层) + 这一代的大问题 (联邦能管多宽/买地超不超权/修运河办国家银行/自由州蓄奴州怎么共处) + Jefferson 立场 strict construction 严格解释宪法 (没授权别做/怕中央太宽变暴政) + 「这是我的招牌」埋下被自己的两难掰变形',
      engagementHook: '我一向主张严格解释宪法：白纸黑字没写的，政府就别做。这是我的招牌。可你猜接下来，是谁第一个把这块招牌掰弯的？是我自己。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-jefferson-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。1803 年春天，一封信从巴黎飞来，把我钉在椅子上。\n\n本来的事很简单：密西西比河的出海口在 New Orleans（新奥尔良），那是西部农民把粮食运出去的唯一咽喉。咽喉一旦被别人捏住，整个西部就活不成。我派人去巴黎，想花至多一千万美元，把这座城买下来。\n\n可法国人甩出一句话，把我打懵了：整块都卖给你——路易斯安那，828,000 平方英里，1500 万美元。\n\n你愣住了。你只想买一座城的门，对面却要把整栋房子塞给你。这片地，一夜能让国家面积翻倍。\n\n但你立刻撞上自己的招牌：宪法里压根没写总统能买一整块大陆。按你一向的 strict construction，你根本没这个权。\n\n买，还是不买？守住原则，眼看半个大陆从指缝溜走？还是咽下原则，抓住这个百年难逢、错过就再也没有的机会？\n\n这一刻，你比谁都清楚：你接下来怎么选，会把「Jefferson 这个人到底信什么」重新定义一遍。你选哪个？',
        en: 'Now you are me. In the spring of 1803, a letter flew in from Paris and pinned me to my chair.\n\nThe matter began simply. The outlet of the Mississippi River is at New Orleans, the one throat through which western farmers ship their grain out. I sent men to Paris to spend at most ten million dollars and buy that city.\n\nBut the French threw out a sentence: take the whole thing — Louisiana, 828,000 square miles, fifteen million dollars.\n\nYou are stunned. This land could double the nation\'s size in a night.\n\nBut at once you crash into your own signature: the Constitution says nothing about a president buying a whole continent. By your lifelong strict construction, you simply have no such power.\n\nBuy, or not? Hold to your principle and watch half a continent slip through your fingers? Or swallow your principle and seize a chance that comes once in a century?\n\nIn this moment you know better than anyone: how you choose next will redefine, all over again, what "Jefferson, this man" actually believes. Which do you pick?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1803 春巴黎来信 + 本想至多 1000 万买 New Orleans (密西西比出海口/西部农民唯一咽喉) + 法国甩卖整块路易斯安那 828,000 平方英里 1500 万美元面积翻倍 + 撞上自己招牌 (宪法没写总统能买大陆/strict construction 没这权) + 两难: 守原则放走半个大陆 vs 咽原则抓百年机会 + 自我拷问「这选择会重新定义我信什么」',
      engagementHook: '守住原则，眼看半个大陆溜走；还是咽下原则，抓住百年一遇的机会？这一刻你怎么选，会重新定义「我到底信什么」。换你，你买不买？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-jefferson-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我买了。\n\n我后来说，这是「在国家利益面前，把对宪法的顾虑咽了下去」。1803 年签约，参议院当年 10 月批准。一笔交易，国家面积一夜翻倍——花的钱，比我本来授权的上限（约一千万买一座城）多了一半，却换来整整一块大陆。算下来，每英亩才几美分。\n\n你看，我把自己的招牌掰弯了。主张「严格解释宪法」的我，做了宪法压根没授权的最大一件事。\n\n但我得让你看见，这笔「史上最划算的买卖」，是从谁头上压过去的。\n\n那封巴黎来的信里，没有一个字提到这片地上原本住着谁。可那不是一片空地——上面住着几十个原住民民族，那是他们祖祖辈辈的家。\n\n我和法国人，两个隔着大洋、谁都没真正在那片地上生活过的国家，在巴黎一间屋子里，把别人的家当成商品，标了价，签了字。交易的双方里，没有一个是这片土地的原住民。\n\n我得老实承认：在这上面，我看见的是「自由帝国」。至于那几十个民族在同一片地上看见了什么，当时我没有去想。等你换上他们的视角，他们自己会告诉你。',
        en: 'I bought it.\n\nI later said I had "swallowed my constitutional doubts for the good of the country." We signed in 1803; the Senate approved it that October. One deal, and the nation\'s size doubled in a night — it cost half again more than the ceiling I had authorized (about ten million for one city), yet bought a whole continent. By the acre, only a few cents.\n\nYou see, I bent my own signature. I, the champion of "strict construction," did the single biggest thing the Constitution never authorized.\n\nBut I must let you see whom this "best bargain in history" pressed down on.\n\nIn that letter from Paris, not a word mentioned who already lived on this land. But it was not empty land. Dozens of Native nations lived there; it was their home for generation upon generation.\n\nThe French and I, two nations across an ocean, sat in a room in Paris and treated other people\'s home as merchandise, priced it, and signed. Of the two parties to the deal, not one was a Native person of that land.\n\nLet me be honest: on this land, what I saw was an "empire of liberty." As for what those dozens of nations saw on the same ground, at the time I did not stop to think. When you switch to their perspective, they will tell you themselves.',
      },
      deliverGoal: 'N5 story — 买了 (说「在国家利益前咽下宪法顾虑」/1803 签约 10 月参议院批准/面积一夜翻倍/花的钱比授权上限约 1000 万买一座城多一半却换整块大陆/每英亩才几美分) + 招牌掰弯 (主张严格解释却做了宪法没授权的最大一件事) + 这笔最划算买卖压在谁头上 (巴黎来信没一字提原本住着谁/不是空地住着几十个原住民民族祖辈的家) + 两国隔大洋把别人家当商品标价签字/交易双方无一是原住民 + actor lens 收敛代偿认错: 我看见自由帝国/至于他们看见什么「当时我没去想」(克制陈述/把揭示留给 tecumseh/removed lens 去打/换视角他们自己会说)',
      engagementHook: '我和法国人，在巴黎一间屋子里，把别人的家当商品标了价、签了字——交易的双方里，没有一个是这片地的原住民。我看见的是「自由帝国」；至于那几十个民族看见了什么，当时我没去想。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-jefferson-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '买下这片地之后，我做的第一件事，是派人去看看我到底买了什么。\n\n1804 年 5 月，我派 Meriwether Lewis 和 William Clark 带着一支「探索军团」(Corps of Discovery)，从圣路易附近出发，溯密苏里河而上，翻过落基山，一直走到太平洋，1806 年 9 月才回来。\n\n他们替这个年轻国家，画出了西部的第一张地图。\n\n这里我要诚实地纠正你课本上一个常见的误会：他们不是孤胆英雄，自己一路走通的。没有一个叫 Sacagawea（萨卡加维亚，Shoshone/肖肖尼族妇女）的人做向导和翻译，没有沿途好几个原住民民族的帮助，这趟探险根本走不通。\n\n而我心里清楚另一件事：这张地图，不只是「知识」。每往西画一寸，我就替一代代白人小农，钉下一根往西的木桩。\n\n地图铺向哪里，木桩就钉到哪里。而木桩落下的地方，正踩在别人的家上。',
        en: 'After buying this land, the first thing I did was send men to see what I had actually bought.\n\nIn May 1804 I sent Meriwether Lewis and William Clark, leading a "Corps of Discovery," out from near St. Louis, up the Missouri River, over the Rocky Mountains, all the way to the Pacific, returning only in September 1806.\n\nThey drew this young nation its first map of the West.\n\nHere I must honestly correct a common error from your textbook: they were not lone heroes who got through on their own. Without a person named Sacagawea (a Shoshone woman) as guide and interpreter, and without the help of several Native nations along the way, the expedition could not have gotten through.\n\nAnd I knew in my heart another thing: this map was not only "knowledge." Every inch I drew westward, I drove, for generation after generation of white small farmers, one more stake heading west.\n\nWherever the map ran, the stakes were driven. And where the stakes fell, they stood on top of someone\'s home.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 买后派人看买了什么 + 1804.5 Lewis and Clark 探索军团从圣路易出发溯密苏里翻落基山到太平洋 1806.9 返回 + 画出西部第一张地图 + 诚实纠错 (不是孤胆英雄/没 Sacagawea Shoshone 妇女向导翻译+沿途原住民帮助走不通) + 量地木桩 cross-lens (Jefferson 角度: 每往西画一寸钉下往西的木桩/木桩落下踩在别人家上)。只碰木桩从他角度,不揭另两视角',
      engagementHook: '地图往西铺一寸，我就替白人小农往西钉下一根木桩。可那根木桩落下的地方，正踩在别人的家上。一根标着「新土地」的木桩，对钉的人和被钉的人，意思一样吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-jefferson-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得把话题从「土地」挪到「生存」。因为这个婴儿国家，差点就没活下来。\n\n英国在海上拦截我们的船，强征我们的水手去给它打仗（这叫 impressment，强征水手），又被怀疑在背后撑着原住民的抵抗。1812 年 6 月（那时我已卸任，继任的是 Madison），美国对英国宣战——后人叫它 War of 1812（1812 战争），「第二次独立战争」。\n\n这仗打得磕磕绊绊。1814 年 8 月，英军一把火烧了华盛顿，连白宫都烧了。\n\n1814 年 12 月，双方在比利时 Ghent（根特）签了和约，基本「恢复战前原状」，谁也没多得。\n\n可你得记住一个反讽：让全国记住「美国赢了」的那场新奥尔良大胜（1815 年 1 月，Andrew Jackson 指挥），其实打在和约签完之后——消息还没漂过大西洋。一场严格说来「不必要」的胜仗，却喂大了整个国家的自豪感，也喂出了一位未来的总统。',
        en: 'I must move the subject from "land" to "survival," because this infant nation nearly did not live.\n\nBritain seized our ships at sea, forced our sailors to fight for it (this is called impressment), and was suspected of propping up Native resistance from behind. In June 1812 (by then I had left office, succeeded by Madison), the U.S. declared war on Britain — later called the War of 1812, the "second war of independence."\n\nThe war went roughly. In August 1814 British troops burned Washington, even the White House.\n\nIn December 1814 the two sides signed a peace at Ghent (in Belgium), essentially restoring the prewar status quo — neither side gained much.\n\nBut hold on to one irony: the great New Orleans victory that made the whole country remember "America won" (January 1815, commanded by Andrew Jackson) was actually fought after the peace was signed — the news had not yet crossed the Atlantic. A victory that was, strictly speaking, "unnecessary" fed the pride of a whole nation, and fed a future president too.',
      },
      deliverGoal: 'N7 story — 从土地挪到生存 (婴儿国家差点没活) + War of 1812 起因 (英国海上拦船+impressment 强征水手+疑撑原住民抵抗/1812.6 宣战那时 Jefferson 已卸任继任 Madison/「第二次独立战争」) + 1814.8 英军烧华盛顿含白宫 + 1814.12 Ghent 和约恢复战前原状谁也没多得 + 反讽: New Orleans 大胜 (1815.1 Jackson) 打在和约签完之后/不必要的胜仗喂大全国自豪感喂出未来总统',
      engagementHook: '让全国记住「美国赢了」的那场新奥尔良大胜，其实打在和约已经签完之后——消息还没漂过大西洋。一场「不必要」的胜仗，喂大了一个国家的自豪，也喂出了一位总统。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-jefferson-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '国家活下来了，开始长大。可有一根刺，从一开始就扎在我们国家的肉里——奴隶制。\n\n1820 年，Missouri（密苏里）申请加入联邦，要以「蓄奴州」的身份进来。这一下，自由州和蓄奴州之间一直小心维持的平衡，眼看要被打破。国会吵翻了天。\n\n最后是 Henry Clay（亨利·克莱）牵头，拼出一个妥协，叫 Missouri Compromise（密苏里妥协）：Missouri 作蓄奴州、Maine（缅因）作自由州，两个一起入盟，保住平衡；并且划下一条线——路易斯安那购地范围内，北纬 36°30′ 以北，今后禁止蓄奴。\n\n注意：这条线，正是我当年买下的那片地，被一刀劈成了「自由」和「蓄奴」两半。\n\n我当时已经七十多岁。听到这条线，我没有欢呼。我写信说，它「像深夜里的一声火警钟，把我惊醒、吓坏」。\n\n我看出来了：国家一旦开始沿着一条地理线分裂成两半，这道裂缝，就再也合不上了。',
        en: 'The nation survived and began to grow. But one thorn had been stuck in our country\'s flesh from the start: slavery.\n\nIn 1820, Missouri applied to join the union as a "slave state." At that, the carefully kept balance between free states and slave states was about to break. Congress erupted.\n\nIn the end Henry Clay brokered a compromise, the Missouri Compromise: Missouri enters as a slave state and Maine as a free state, the two together, to keep the balance; and a line is drawn — within the Louisiana Purchase, north of latitude 36°30′, slavery is banned from now on.\n\nNote: this line cut the very land I had bought into two halves, "free" and "slave."\n\nI was already in my seventies. Hearing of that line, I did not cheer. I wrote that it was "like a fire bell in the night," that it woke me and filled me with terror.\n\nI had seen it: once a nation begins to split into two halves along a geographic line, that crack can never close again.',
      },
      deliverGoal: 'N8 story — 国家长大但奴隶制是从头扎在肉里的刺 + 1820 Missouri 申请蓄奴州入盟打破自由/蓄奴州平衡国会吵翻 + Henry Clay 牵头 Missouri Compromise (Missouri 蓄奴+Maine 自由一起入盟保平衡 + 路易斯安那购地内 36°30′ 以北禁奴) + 这条线把我买的地劈成自由/蓄奴两半 + Jefferson 七十多岁听到没欢呼/私信「像深夜火警钟把我惊醒吓坏」+ 看出沿地理线分裂裂缝再也合不上',
      engagementHook: '写《独立宣言》的我，听到那条线时没有欢呼——我吓坏了。我看出来：国家一旦沿一条地理线劈成两半，这道裂缝就再也合不上了。四十年后的内战，证明我没听错。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-jefferson-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我再拉远镜头，看这二十八年织起的另一张网。\n\n这张网，后人叫 market revolution（市场革命）。三根线同时拉起：交通（运河、蒸汽船）、工厂（New England 河边纺织厂，首次大规模雇用年轻单身女工 mill girls）、市场（西部种粮、南方种棉、东北做工连成全国市场）。1825 年 Erie Canal（伊利运河，363 英里）通航，一吨货运费从约 100 美元暴跌到约 6 美元。\n\n但连成一张网，也意味着一处崩处处疼。1819 年爆发 Panic of 1819（1819 大恐慌，美国第一次全国性经济危机）：地价崩、银行倒、大批人失业。同一年最高法院判 McCulloch v. Maryland（麦卡洛克诉马里兰）：宪法没写联邦能否办国家银行，法院却判办银行「必要且适当」、合宪。我为路易斯安那纠结过的 strict 还是 loose 解释宪法，就这样偏向 loose。1823 年门罗总统宣布 Monroe Doctrine（门罗主义，设计者是国务卿 John Quincy Adams）：美洲的事美洲管。\n\n别扭的是：我梦想的是没有工厂、没有大城市、也没有太宽中央的小农共和国。可偏偏在我买下的大陆上，运河、工厂、越管越宽的联邦，把国家推向我最不想要的工业前夜。',
        en: 'Let me pull the lens back further and show you another net these twenty-eight years wove, one that, like the land and the wars, was reshaping this country.\n\nThis net is later called the market revolution. Three threads pulled tight at once: transportation (canals, steamboats); factories (textile mills on New England rivers, the first to hire young single women at scale, the "mill girls"); and market expansion (the West grows grain, the South grows cotton, the Northeast makes goods, linked into one national market). In 1825 the Erie Canal (363 miles) opened, and for the same ton of goods freight crashed from about $100 to about $6.\n\nBut linking into one net also means one crash hurts everywhere. In 1819 broke the Panic of 1819, America\'s first nationwide economic crisis: land values collapsed, banks failed, cities filled with the jobless. My rivals used that crisis to keep pressing the old question: how far can the federal government reach? In 1819 the Supreme Court ruled McCulloch v. Maryland: the Constitution says nothing about Congress chartering a national bank, yet the Court held that chartering one was a "necessary and proper" means, and so was lawful. You see, the very "strict versus loose construction" I had wrestled with over Louisiana was now settled, by the Court, in favor of loose. In 1823 President Monroe drew a foreign-policy line, the Monroe Doctrine (its real architect was Secretary of State John Quincy Adams): the affairs of the Americas are for the Americas to manage, and Europe should keep out.\n\nI must admit something uneasy. All my life I dreamed of a small-farmer republic with no factories, no big cities, and no central government reaching too far. Yet on the very continent I bought, canals, factories, and a federal government reaching ever wider pushed this country toward the direction I least wanted: an industrial eve, linked into one net, measuring everything in money.',
      },
      deliverGoal: 'N9 zoom-out market revolution + CED Period 4 考点落点 — market revolution 市场革命 三根线 (交通运河/收费公路/蒸汽船 + 工厂 New England 河边纺织厂首次大规模雇 mill girls + 市场扩张西部种粮南方种棉东北做工连成全国市场) + 1825 Erie Canal 363 英里运费 100→6 美元 + 连成一张网一处崩处处疼: Panic of 1819 (1819 大恐慌美国第一次全国性经济危机地价崩银行倒失业) + McCulloch v. Maryland (1819 宪法没写联邦能否办国家银行/法院判「必要且适当」合宪/把 strict vs loose construction 一锤偏向 loose) + Monroe Doctrine (1823 门罗主义真正设计者国务卿 John Quincy Adams/美洲事美洲管欧洲别插手) + Jefferson 别扭: 梦想无工厂无大城市也不要管得太宽中央的小农共和国/却在自己买的大陆上被推向最不想要的工业前夜',
      engagementHook: '我一辈子梦想的，是没有工厂、没有大城市、也不要管得太宽中央的小农共和国。可偏偏在我买下的这片大陆上，运河、工厂、还有一个越管越宽的联邦，把国家推向了我最不想要的方向。一个人的成功，会不会正好埋葬他最初的梦？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-jefferson-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，最难评的一件事，是路易斯安那购地——那个我咽下原则、买下半个大陆的决定。两种说法都站得住，你来称。\n\n一种说法：那是一次伟大的、负责任的政治家手笔。机会百年难逢，错过就再也没有了。一个领袖，在「死守教条」和「为国家抓住一个改变命运的机会」之间，选择了后者——这不是背叛原则，这是成熟。原则若死板到让国家错失生路，那才是真正的失职。\n\n另一种说法：那一刻，我用「国家利益」四个字，给「打破自己最珍视的原则」找了个体面的台阶。今天能为了大义破一次例，明天就能为了别的大义再破一次。更何况，我买下的，不只是「自由帝国」，还是奴隶制能向西扩张的土地、是几十个原住民民族正在失去的家。\n\n这两边，不是「他有功但有过」。是同一个决定的两张脸——一次成熟的担当，和一次为破例找的漂亮借口。\n\n这是 AP 课堂上老师会反复让你掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Of my whole life, the hardest thing to judge is the Louisiana Purchase — the decision in which I swallowed my principle and bought half a continent. Both views stand. You do the weighing.\n\nOne view: it was the stroke of a great, responsible statesman. The chance came once in a century; miss it and it is gone forever. A leader, between "clinging to dogma" and "seizing a nation-changing chance for the country," chose the latter. That is not betraying a principle; that is maturity. A principle so rigid it makes the nation miss its way out is the real dereliction of duty.\n\nThe other view: in that moment, with the four words "the good of the country," I found a respectable step down from breaking the principle I prized most. If I can break the rule once today for a great cause, tomorrow I can break it again for another. And what I bought was not only an "empire of liberty," but land where slavery could spread west, the home dozens of Native nations were losing.\n\nThese are not "he had merit but also faults." They are two faces of one decision — a mature act of responsibility, and a pretty excuse found for an exception.\n\nThis is the hard problem an AP teacher will have you weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 路易斯安那购地 (咽下原则买半个大陆) 是伟大担当还是为破例找借口 / 一种说法 (百年机会/在死守教条与抓机会间选后者=成熟/原则死板让国家错失生路才是失职) / 另一种说法 (用国家利益给打破最珍视原则找体面台阶/今天破例明天再破/买的不只自由帝国还是奴隶制能西扩的地+原住民正失去的家) / 同一决定两张脸 / neutral AP 老师 / 想 30 秒 / DBQ rigor: 不是二选一站队而是引导综合 (能不能两面都拿住、各用至少一条具体证据说清=$15M 成交价/strict 招牌/原住民失家) / 两边都站得住',
      engagementHook: '咽下原则买下半个大陆——是成熟的担当，还是为破例找的漂亮借口？别急着选边：你能不能两面都拿住，各用一条具体证据（比如那 1500 万的成交价、那块奴隶制能西扩的地）说清？这才是 AP 高分的写法。你的 30 秒到了，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'er-jefferson-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是掌权者这一边的声音。\n\n请记住：这只是一边。我讲的「自由帝国」「为国家咽下原则」「让共和国活下去」，听起来甚至有点崇高——这正是掌权者视角最危险的地方，它总能把自己讲得又大又对，把代价讲得很小、很远、很模糊。\n\n但这一遍里，有几群人几乎没出过声。有一个叫 Tecumseh 的 Shawnee（肖尼）领袖，他看清了「原住民不联合就会被一个个吃掉」，拼尽一生想把几十个民族拧成一股绳——他会怎么讲我口中这个「自由帝国」？还有那个被推走的原住民母亲、那个被卖往西南棉田的少年——他们脚下，正是我嘴里「翻倍」「成长」的地。等你换上他们的视角，他们会狠狠挑战你刚才听我说的每一句。\n\n最后，留一个东西给你。还记得那张往西铺的地图、和我替小农往西钉下的那根木桩吗？\n\n换一个视角再走一遍，你会从另一个人的眼里，再看见那根木桩一次。到那时，它对你就不再是「进度」了。',
        en: 'What you just heard was the voice of one side — the man in power.\n\nRemember: it is only one side. My talk of an "empire of liberty," of "swallowing my principle for the country," of "keeping the republic alive," can even sound noble — and that is exactly the most dangerous thing about a powerful man\'s view. It can always tell itself big and right, and tell the cost as small, far away, and blurred.\n\nBut in this pass, several groups barely made a sound. There was a Shawnee leader named Tecumseh, who saw clearly that "if Native nations do not unite, they will be eaten one by one," and spent his whole life trying to twist dozens of nations into one rope — how would he tell this "empire of liberty" of mine? And the Native mother being pushed off, the boy sold to the cotton fields of the southwest — under their feet was the very land I called "doubled" and "grown." When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. Remember the map running west, and the stake I drove west for the small farmers? Walk this through once more from another perspective, and you will see that stake again, through someone else\'s eyes. By then it will no longer be "progress" to you.',
      },
      deliverGoal: 'N11 close/meta — 你听的是掌权者一边 (能把自己讲得又大又对把代价讲小讲远最危险) + 还没听到: Tecumseh Shawnee 领袖 (看清不联合被一个个吃掉/一生想拧成一股绳/会怎么讲这自由帝国) + 被推走的原住民母亲 + 被卖往西南棉田少年 (脚下正是我嘴里翻倍成长的地) 会挑战你听的每句 + 暗示量地木桩会从另一视角再看见一次 (不直接解释 echo)',
      engagementHook: '掌权者最危险的地方，是他总能把自己讲得又大又对，把代价讲得很小、很远。你听完我这一边，最想去问那个 Tecumseh、那个被推走的母亲、那个被卖走的少年什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var tecumsehLens = {
  id: 'tecumseh-mediator',
  name: 'Tecumseh',
  nameCn: '特库姆塞',
  role: 'lonely-mediator',
  perspectiveTag: 'between-many-nations',
  icon: '🪶',
  description: {
    cn: '真实历史人物，约 1768 年生，Shawnee（肖尼）民族的领袖、战士、演说家。他看清了一件别人没看清的事：白人一个民族一个民族地买地、骗地、抢地，只要原住民各打各的，就一定被一个个吃掉。所以他做了一件极难的事，走遍五大湖到南方的广大地区，去说服几十个互相有世仇的原住民民族联合起来，守住一条共同底线：土地是大家共有的，任何单个民族都无权把它卖给白人。这一遍让你站在所有原住民民族中间，看一个最清醒的战略家，怎么在历史的大势压过来时，拼一个所有人都能活下去的未来。',
    en: 'A real historical person, born around 1768, a leader, warrior, and orator of the Shawnee nation. He saw what others did not: white people bought, tricked, and seized land one nation at a time, and as long as Native nations each fought alone, they would be eaten one by one. So he did something extremely hard, traveling across a vast region from the Great Lakes to the South, to persuade dozens of Native nations with old feuds among them to unite and hold one shared line: the land belongs to all in common, and no single nation has the right to sell it to whites. This pass puts you in the middle of all the Native nations, watching the clearest strategist of his age try, as the great tide pressed in, to build a future where everyone could survive.',
  },
  storyboard: [
    {
      id: 'er-tecumseh-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '所有人都各自守着自己那一小块地的时候，有一个人，在地图上看见了整张大势。\n\n我是 Tecumseh（特库姆塞），Shawnee（肖尼）民族的领袖、战士、演说家。\n\n我看清了一件别人不愿看清的事：白人不是一下子来抢的。他们一个民族一个民族地来，先跟你买、骗你签字、再一点点逼你。每一次，只对付一个民族，让你觉得「这次的事跟我隔壁那个部落无关」。可只要我们继续各打各的，结局只有一个——被一个个吃掉，一个都剩不下。\n\n所以我做了一件几乎不可能的事：我走遍从五大湖到南方的广大土地，去说服几十个互相之间还有世仇的原住民民族，放下旧怨，联合成一股绳。\n\n这一遍，你坐进我这个位置。你不只为一个民族打仗。你要在所有人都只顾自己那块地的时候，替一个所有原住民都能活下去的未来，去拼那件最难的事——让世仇放下，让「我们所有人」这个念头，盖过「我这个部落」。',
        en: 'When everyone else was guarding his own small patch of land, one man saw the whole tide on the map.\n\nI am Tecumseh, a leader, warrior, and orator of the Shawnee nation.\n\nI saw what others would not: the white people did not come to seize it all at once. They came one nation at a time — first they buy from you, trick you into signing, then press you bit by bit. Each time, only one nation to deal with. As long as we keep fighting alone, there is only one ending: eaten one by one.\n\nSo I did something almost impossible. I traveled across the vast land from the Great Lakes to the South, to persuade dozens of Native nations, still holding old feuds among them, to set the grudges down and unite into one rope.\n\nThis pass puts you in my seat. You do not fight for one nation alone. While everyone else minds only his own patch, you must do the hardest thing of all for a future in which all Native peoples can survive — to make old feuds be set aside, to put the common cause before the tribe.',
      },
      deliverGoal: 'N1 hook — Tecumseh Shawnee 领袖/战士/演说家 + 看清别人不愿看清的事 (白人一个民族一个民族来/买地骗签字逼/各打各的被一个个吃掉) + 做了几乎不可能的事 (走遍五大湖到南方说服几十个有世仇的民族放下旧怨联合成一股绳) + 这一遍视角 (不为一个民族打/替所有原住民能活的未来拼最难的事/世仇放下共同体先于部落)',
      engagementHook: '白人不是一下子来抢的——他们一个民族一个民族地来，每次只对付一个。我看清了：不联合，就被一个个吃掉。可让几十个有世仇的民族放下旧怨，谈何容易。你觉得，这件事拼得成吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-tecumseh-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '在你替我去拼那股绳之前，先弄懂白人手里那套最厉害的武器——不是枪，是「条约」。\n\n白人来要地的时候，常常不是直接抢。他们摆出一张纸，找几个酋长签字，然后说：你看，这是「合法买卖」，地归我们了。\n\n这套办法阴在哪里？它专挑最容易被说动、或者被灌醉、或者被吓住的那几个人去签——哪怕这几个人，根本代表不了住在这片地上的所有人。\n\n等于说：他们用「一个民族里几个人的签字」，来卖掉「所有原住民共有的土地」。\n\n这就是我后来反复喊的那条底线：土地，是所有原住民共同拥有的，就像空气和阳光一样，不属于哪一个人、哪一个民族。所以，任何单个民族、任何几个酋长，都无权把它卖给白人。\n\n这一条，听起来简单，做起来却要命的难——因为它要求每一个民族，都把「我自己这块地」让给「我们大家这块地」。',
        en: 'Before you go to twist that rope for me, get straight the strongest weapon in the white people\'s hands — not the gun, but the "treaty."\n\nWhen white people came for land, they often did not simply seize it. They laid out a sheet of paper, found a few chiefs to sign, and then said: see, this is a "legal sale," the land is ours.\n\nWhere is the trick? They picked the few who were easiest to persuade, or to get drunk, or to frighten, to sign — even if those few could not possibly stand for everyone living on that land.\n\nIn effect: they used "the signatures of a few in one nation" to sell off "the land all Native peoples held in common."\n\nThis is the line I cried out again and again: the land is owned by all Native peoples in common, like the air and the sunlight, belonging to no one person, no one nation. So no single nation, no handful of chiefs, has the right to sell it to whites.\n\nThis line sounds simple, but it is deadly hard to do — because it asks every nation to yield "my own patch of land" to "the land of all of us."',
      },
      deliverGoal: 'N2 setup — 白人最厉害武器不是枪是条约 + 套路 (摆张纸找几个酋长签字说「合法买卖」/专挑易说动易灌醉易吓住的人/这几人代表不了所有人) + 用一个民族几人签字卖掉所有原住民共有的土地 + Tecumseh 底线: 土地所有原住民共有像空气阳光不属于哪个人哪个民族/任何单个民族几个酋长无权卖给白人 + 这条要命的难 (要每个民族把「我这块地」让给「我们大家的地」)',
      engagementHook: '他们用「一个民族里几个人的签字」，卖掉「所有原住民共有的土地」。我的底线只有一条：土地是大家共有的，谁都无权单独卖掉它。可这要求每个民族都把「我的地」让给「我们的地」——你做得到吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-tecumseh-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂我为什么非得「联合」，得先看清我面前这盘棋有多绝望。\n\n1803 年，白人在巴黎做了一笔交易，他们叫它 Louisiana Purchase（路易斯安那购地）。一夜之间，他们国家的地图往西翻了一倍。\n\n可你知道那片「新得到的」地上，本来住着谁吗？是我们。几十个原住民民族，世世代代的家。在巴黎那间屋子里，没有一个我们的人在场。我们的家，被两个隔着大洋的国家，当成商品标了价、签了字。\n\n地图翻倍，对白人是天大的好消息；对我们，是脚下的地开始整片整片地塌。\n\n而我们这边呢？是一盘散沙。这个民族跟那个民族有旧仇，那个民族信不过这个民族。白人最懂这一点——他们要的就是我们不团结。\n\n我面对的，就是这样一盘棋：对手刚刚拿走半个大陆，而我自己这边，还在为几代人前的旧怨互相猜忌。我得在散沙里，拼出一块石头。',
        en: 'To understand why I had to "unite," first see how hopeless the board before me was.\n\nIn 1803, the white people made a deal in Paris they called the Louisiana Purchase. Overnight, their nation\'s map doubled to the west.\n\nBut do you know who already lived on that "newly gained" land? We did. Dozens of Native nations, our home for generation upon generation. In that room in Paris, not one of us was present. Our home was treated as merchandise by two nations across an ocean, priced and signed away.\n\nThe map doubling was the greatest news for the whites; for us, it was the ground under our feet beginning to collapse in whole sheets.\n\nAnd our side? A plate of loose sand. This nation has an old feud with that one; that nation does not trust this one. The whites understood this best — what they wanted was exactly that we not unite.\n\nThis was the board I faced: the opponent had just taken half a continent, while on my own side we still eyed one another with suspicion over grudges generations old. In loose sand, I had to forge one stone.',
      },
      deliverGoal: 'N3 setup — 这盘棋多绝望 + 1803 Louisiana Purchase 白人巴黎一笔交易地图往西翻倍 + 那片新得到的地本来住着我们 (几十个原住民民族世代的家/巴黎屋里无我们的人/家被两国当商品标价签字) + 地图翻倍对白人天大好消息对我们脚下整片塌 + 我们这边一盘散沙 (民族间旧仇互不信/白人最懂要的就是我们不团结) + 对手拿走半个大陆我这边还为旧怨猜忌/要在散沙里拼出一块石头',
      engagementHook: '1803 年白人在巴黎签了字，地图一夜翻倍——可那片「新得到的」地上，本来住的是我们。地图翻倍对他们是好消息，对我们是脚下整片地开始塌。而我这边，还是一盘互相猜忌的散沙。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-tecumseh-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。你要去做那件最难的事：把散沙拧成一股绳。\n\n你不能只靠打仗。你得靠一张嘴，一双脚，一年又一年地走。\n\n你骑马、划独木舟，从五大湖一路走到南方，走进一个又一个陌生的村子。村子里的人，有的跟你的 Shawnee 几代人前结过仇，有的根本没听说过你，有的一上来就把你当外人提防。\n\n你站在他们的火堆边，一遍遍说同一句话：白人不会停。今天他们逼的是我，明天就轮到你。我们只有一条活路——把手里的地当成大家共有的，谁也别单独卖，一起守。\n\n你能让那些有世仇的人，把祖辈的恨先压一压，第一次坐到同一堆火边吗？\n\n而且你得做一个最难的让步：你得请每一个民族，交出一部分「我自己说了算」的权力，换一个「我们一起才扛得住」的未来。一个习惯了自己做主的部落，凭什么把命交到别人手里？\n\n你愿意当那个，一辈子在劝人放下旧怨、却可能到死都没拼齐的人吗？',
        en: 'Now you are me. You must do the hardest thing: twist loose sand into one rope.\n\nYou cannot rely on war alone. You must rely on a mouth, a pair of feet, year after year.\n\nYou ride, you paddle a canoe, from the Great Lakes all the way to the South, walking into one strange village after another. Some of the people there have feuded with your Shawnee for generations; some have never heard of you.\n\nYou stand by their fire and say the same words again and again: the white people will not stop. Today they press me; tomorrow it is you. We have only one way to live — treat the land in our hands as held by all in common, let no one sell alone, and guard it together.\n\nCan you get people with old feuds to sit, for the first time, at the same fire?\n\nAnd you must make the hardest concession: you must ask every nation to hand over a part of "I decide for myself," in exchange for a future of "only together can we hold."\n\nAre you willing to be the man who spends his whole life urging people to set down old grudges, and may, even unto death, never finish forging the rope?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 做最难的事把散沙拧成一股绳 + 不能只靠打仗靠一张嘴一双脚一年又一年 + 骑马划独木舟从五大湖走到南方进陌生村子 (有的几代前结仇有的没听说过你) + 火堆边一遍遍说同一句 (白人不会停今天逼我明天逼你/唯一活路: 地大家共有谁也别单独卖一起守) + 最难让步 (请每个民族交出一部分「我说了算」换「一起才扛得住」) + 你愿不愿当一辈子劝人放下旧怨可能到死没拼齐的人',
      engagementHook: '我要请每一个民族，交出一部分「我自己说了算」的权力，换一个「我们一起才扛得住」的未来。这是所有结盟里最难的一步。换你来劝，那些有世仇的人，肯坐到同一堆火边吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-tecumseh-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我不是一个人在拼。我有一个弟弟，叫 Tenskwatawa，人们叫他「the Prophet」（先知）。\n\n我们俩，一文一武。我在外面跑断腿，谈联盟、练战士；他在精神和信仰这一面，号召大家回到祖先的生活方式，拒绝白人的酒、白人的货、白人那一套。\n\n你得明白他这件事为什么要紧。白人侵蚀我们，不只靠枪和条约，还靠酒、靠债、靠让我们慢慢离不开他们的东西。我弟弟做的，是从灵魂上把人拉回来——先记得自己是谁，才守得住自己的地。\n\n我们以这个理想，在印第安纳准州一个地方，建起了联盟的中心村落，人称 Prophetstown（先知镇）。来自不同民族的人，第一次聚到同一个地方，朝着同一个方向。\n\n那是我离「拼成一股绳」最近的一刻。一群本来互相提防的人，第一次有了一个共同的「我们」。\n\n可就是这个最珍贵的中心，很快成了白人最想一脚踩碎的地方。',
        en: 'I did not fight alone. I had a brother, Tenskwatawa, whom people called "the Prophet."\n\nWe two were one in word, one in war. I ran my legs off outside, talking alliance and drilling warriors; he, on the side of spirit and faith, called people to return to the ancestors\' ways and refuse white liquor, white goods, the whole white pattern.\n\nYou must see why his work mattered. The whites ate at us not only with guns and treaties, but with liquor, with debt, with making us slowly unable to do without their things. What my brother did was pull people back by the soul — remember first who you are, and only then can you guard your own land.\n\nWith this ideal we built, at a place in the Indiana Territory, the confederacy\'s central village, called Prophetstown. For the first time, people of different nations gathered in one place, facing one direction.\n\nThat was the closest I ever came to "forging one rope." A crowd who had guarded against one another finally had a shared "we."\n\nBut this most precious center soon became the very place the whites most wanted to crush underfoot.',
      },
      deliverGoal: 'N5 story — 不是一个人拼 + 弟弟 Tenskwatawa「the Prophet」先知 一文一武 (Tecumseh 跑谈联盟练战士/弟弟精神信仰号召回祖先生活方式拒白人酒货) + 为何要紧 (白人侵蚀靠枪条约也靠酒债让人离不开他们东西/弟弟从灵魂拉人回来先记得自己是谁才守得住地) + Prophetstown 先知镇 印第安纳准州联盟中心村落 (不同民族第一次聚同一地朝同一方向) + 离拼成一股绳最近的一刻有了共同的「我们」+ 这最珍贵中心成白人最想踩碎的地方',
      engagementHook: '白人侵蚀我们，不只靠枪和条约，还靠酒、靠债、靠让我们慢慢离不开他们的东西。我弟弟做的，是从灵魂上把人拉回来——先记得自己是谁，才守得住自己的地。你觉得，「记得自己是谁」算不算一种武器？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-tecumseh-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我要讲那根木桩。\n\n白人那边有个人，叫 William Henry Harrison，是印第安纳准州的州长。他和我，其实在为同一件东西较劲——脚下的地。\n\n他做的事，就是不停地往西钉木桩：找几个酋长签一张条约，量一片地，钉下界桩，说「这块归我们了」。一根木桩，对他是「文明往西推进了一步」的进度标记。\n\n可同一根木桩落在我眼里，是完全相反的东西。它不是进度，是一条不许我们跨过去的线。每钉下一根，就有一群人脚下的家，被划到了线的那一边。\n\n（坐在我这个位置，你能想见我看着那些木桩时的心情。史料不会逐字记下我心里那一刻在想什么，但这一段，是 lens 让你替我感受一次。）\n\n所以我跟 Harrison 说过一句很硬的话，大意是：你拿的那张条约，签字的人无权卖地。地不是他们的，是我们大家的。\n\n他往地里钉木桩，我把它一根根拔出来——我们较的，从来不是一块地，是「地到底属于谁」这件事。',
        en: 'Now I must speak of the stake.\n\nOn the white side there was a man named William Henry Harrison, governor of the Indiana Territory. He and I were in fact straining over the same thing — the ground beneath our feet.\n\nWhat he did was drive stakes westward without end: find a few chiefs to sign a treaty, survey a stretch of land, drive the boundary stakes, and say "this is ours now." A stake, to him, was a progress-marker that "civilization has pushed one step west."\n\nBut the same stake, to my eyes, was the very opposite. It was not progress; it was a line we were forbidden to cross. With each one driven in, the home under some group of people was marked over onto the far side of the line.\n\n(Sitting in my seat, you can imagine what I felt looking at those stakes. The record does not write, word for word, what was in my mind that moment, but here the pass lets you feel it for me once.)\n\nSo I said a hard thing to Harrison, in essence: the men who signed your treaty had no right to sell land. It was not theirs; it was ours, all of ours.\n\nHe drove stakes into the ground; I pulled them out one by one. What we strained over was never one patch of land, but the thing of "to whom does the land belong."',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — William Henry Harrison 印第安纳准州州长/和 Tecumseh 为同一件东西较劲脚下的地 + 量地木桩 cross-lens 从 Tecumseh 角度 (Harrison 不停往西钉木桩=找几个酋长签条约量地钉界桩说归我们了/对他是文明往西一步的进度标记; 对 Tecumseh 是不许跨过去的线/每钉一根就有一群人的家被划到线那边) + anti-fab 括号 (史料不逐字记心里/lens 让你替我感受) + Tecumseh 对 Harrison 硬话 (签字的人无权卖地/地是大家的) + 他钉我拔较的是「地到底属于谁」。只碰木桩从他角度不揭另两视角',
      engagementHook: '同一根木桩，Harrison 看见的是「文明往西推进了一步」，我看见的是「一条不许我们跨过去、把别人的家划走的线」。他往地里钉，我一根根拔——我们较的从来不是一块地，是「地到底属于谁」。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-tecumseh-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1811 年，我做了一件后来追悔莫及的事：我离开了 Prophetstown。\n\n我往南走，去更远的民族那里继续联络盟友——那股绳还没拼齐，我必须趁还有时间，多拉一个是一个。\n\n可我前脚一走，Harrison 后脚就动手了。1811 年 11 月 7 日，他率军逼近 Prophetstown，打了一场仗，后人叫它 Battle of Tippecanoe（蒂珀卡努之战）。\n\n我不在。我反复叮嘱过弟弟：在我回来之前，无论如何别开战，我们还没准备好。可这一仗还是打了起来，联盟受了重创，Prophetstown 被烧。\n\n我赶回来时，看到的是一片废墟。\n\n那是我一生最痛的时刻之一：我用十几年，一寸一寸拼起来的那股绳，在我转身去拉更多人的几天里，断了一大截。\n\n你看，「太早看清的人」最大的难处不是看不清，是时间——你看见了所有人的命运，却没有足够的时间，把所有人拉到一起。',
        en: 'In 1811 I did a thing I would bitterly regret: I left Prophetstown.\n\nI went south, to farther nations, to keep recruiting allies — the rope was not yet whole, and while there was still time I had to pull in one more, even just one.\n\nBut no sooner had I left than Harrison moved. On November 7, 1811, he marched on Prophetstown and fought a battle, later called the Battle of Tippecanoe.\n\nI was not there. I had warned my brother again and again: before I return, do not start a fight, whatever happens, we are not ready. Yet the battle broke out anyway. The confederacy was badly hurt, and Prophetstown was burned.\n\nWhen I hurried back, what I saw was a field of ruin.\n\nThat was one of the most painful moments of my life: the rope I had forged over more than ten years, inch by inch, snapped a long stretch in the few days I had turned away to pull in more people.\n\nYou see, the hardest thing for "the one who sees clearly too early" is not the seeing; it is time — you see everyone\'s fate, yet you do not have enough time to pull everyone together.',
      },
      deliverGoal: 'N7 story — 1811 Tecumseh 离开 Prophetstown 往南继续联络盟友 (绳没拼齐趁有时间多拉一个) + 他一走 Harrison 动手 1811.11.7 Battle of Tippecanoe 蒂珀卡努之战 + Tecumseh 不在/反复叮嘱弟弟回来前别开战没准备好/仗还是打了联盟受重创 Prophetstown 被烧 + 赶回看到废墟 + 一生最痛之一 (十几年一寸寸拼的绳在转身几天断一大截) + 「太早看清的人」最大难处不是看不清是时间 (看见所有人命运却没足够时间拉到一起)',
      engagementHook: '我用十几年一寸一寸拼起来的那股绳，在我转身去多拉一个人的几天里，断了一大截。「太早看清的人」最大的难处不是看不清，是时间——你看见了所有人的命运，却没有足够时间把所有人拉到一起。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-tecumseh-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: 'Tippecanoe 之后，联盟元气大伤，我做了一生最后一个大赌注：和英国结盟。\n\n1812 年，美国和英国打了起来，后人叫它 War of 1812（1812 战争）。对我来说，这是绝境里冒出的一个机会：敌人的敌人，也许能帮我。英国在加拿大那边有军队，他们也想挡住美国往西扩张——这一刻，我们的方向碰巧一致。\n\n我心里很清楚，这不是真正的同盟。英国人从没真把我们当平等的伙伴，他们只是想用我们这把刀，去捅一捅美国。可在那个处境下，我没有别的牌可打。一个被两面夹击、快被挤到墙角的人，只能去抓那只暂时和你伸向同一个方向的手，哪怕你知道它随时会松开。\n\n1813 年 10 月 5 日，在今天加拿大安大略的一条河边，打了 Battle of the Thames（泰晤士河之战）。英军一触即溃，转身就把我们丢下了。\n\n我就在那一仗里战死。\n\n我一死，那个我拼了一生、好不容易才聚起来的跨民族联盟，也跟着散了。绳，终究没拼成。',
        en: 'After Tippecanoe I made the last great wager of my life: alliance with Britain.\n\nIn 1812 the United States and Britain went to war, later called the War of 1812. To me this was a chance: the enemy of my enemy might help me. Britain had troops in Canada and also wanted to block America\'s westward expansion — in that moment our direction was the same.\n\nI knew well this was no true alliance. The British did not truly take us as equal partners; they only wanted to use us to drag at America. But in that situation I had no other card. A man caught between two fires can only seize the hand that, for now, reaches the same way as his.\n\nOn October 5, 1813, by a river in today\'s Ontario, Canada, came the Battle of the Thames. The British broke and fled, leaving us behind.\n\nIn that very battle I was killed.\n\nWith my death, the cross-nation confederacy I had spent my whole life forging, gathered together with such pains, fell apart with me. The rope, in the end, was never finished.',
      },
      deliverGoal: 'N8 story (climax) — Tecumseh 一生最后大赌注和英国结盟 + 1812 War of 1812 美英开战 (敌人的敌人也许帮我/英国加拿大有军队也想挡美国西扩方向一致) + 清醒: 这不是真同盟 (英国没真当平等伙伴只想用我们拖住美国/但没别的牌/被两面夹击只能抓暂时同方向的手) + 1813.10.5 Battle of the Thames 泰晤士河之战 今加拿大安大略 (英军溃退丢下我们) + Tecumseh 战死 + 一死联盟跟着散绳终究没拼成',
      engagementHook: '我清楚英国没真把我们当平等伙伴，他们只想用我们去拖住美国。可一个被两面夹击的人，只能去抓那只暂时和你伸向同一个方向的手。我一死，拼了一生的联盟也散了。绳，终究没拼成。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-tecumseh-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我离开战场，给你看一张更大的地图，一张我活着的时候根本看不见的地图。\n\n就在我和白人为脚下这片地拼命的同一个年代，地球另一端，有一个庞大的帝国，清朝，正处在所谓盛世的尾声。它是当时世界上人口最多的国家（已过三亿），还修着一条全世界最长的人工运河：大运河，近一千八百公里。白人此刻在东边挖的那条 Erie Canal（伊利运河，363 英里），跟它一比，短了好几倍。两个文明，都懂得用运河把财富搬来搬去、把分散的地方缝成一个整体。这一点上，那个东方帝国领先了一千多年。\n\n（历史学家说，后来两条路真正分岔，不是谁聪明谁笨，而是各自脚下的处境：煤铁离工厂多远、劳力贵不贵、市场连得多紧。这是把同一时代两端放在一起看时的一种主流解释，不是铁定的定论。）\n\n我说这个，不是为了比谁强谁弱。我是想让你看见一件事：白人靠运河往西扩张的那股力量，背后是一整套正在重塑世界的新经济。我守的，是一片地；他们带来的，是一张正在铺满整个大陆的网。我对手的真正强大，不在某一根木桩，而在那张我当时根本看不全的网。',
        en: 'Let me leave the battlefield and show you a larger map, a map I could not see at all while I was alive.\n\nIn the very same era I was fighting the whites for this ground, on the other side of the earth there was a vast empire, the Qing dynasty, at the tail end of what was called a golden age. It was then the most populous country in the world (already past 300 million), and it kept the longest artificial waterway on earth: the Grand Canal, nearly eighteen hundred kilometers. The Erie Canal (363 miles) the whites were digging in the East at this moment was, beside it, several times shorter. Both civilizations understood how to move wealth by canal and sew scattered places into one whole. On this, that eastern empire led by more than a thousand years.\n\n(Historians say what truly split the two paths later was not who was clever and who dull, but the conditions underfoot for each: how far coal and iron lay from the factory, how dear labor was, how tightly the market was linked. This is one mainstream reading when the two ends of the same era are set side by side, not a fixed verdict.)\n\nI say this not to rank who is strong and who weak. I want you to see one thing: behind the force pushing the whites westward by canal was a whole new economy reshaping the world. What I guarded was a stretch of land; what they brought was a net spreading across the whole continent. My opponent\'s real strength lay not in any one stake, but in that net I could not, at the time, see whole.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8) — 离战场看更大地图 + 同年代清朝盛世尾声世界人口最多 (过三亿) + 大运河近一千八百公里 (对齐 factledger 1,776km) 世界最长人工运河 vs Erie Canal 363 英里短好几倍 + 两文明都懂运河搬财富缝成整体/东方帝国领先一千多年 + anti-fab 括号 (大分流具象因子: 煤铁离工厂多远/劳力贵不贵/市场连得多紧=学界主流解释非铁定定论 historiography 口径/防滑向宿命论) + Tecumseh 用意: 不比强弱/白人往西扩张背后是一整套重塑世界的新经济 (我守一片地他们带一张铺满大陆的网/对手真正强大不在某根木桩在那张我看不全的网)',
      engagementHook: '同一个年代，地球另一端那个东方帝国，有一条比白人正挖的运河长好几倍、早一千多年的大运河。我守的是一片地；可白人带来的，是一张正在铺满整个大陆的网。我对手真正的强大，不在某一根木桩，而在那张我当时根本看不全的网。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-tecumseh-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，最难评的一件事，是「联合」这个梦本身。我失败了：绳没拼成，我战死，联盟散了。可这个失败，到底说明了什么？两种说法都站得住，你来称。\n\n一种说法：我失败，是因为这个想法从一开始就太理想、根本做不到。几十个有世仇的民族，要他们放下几代人的旧怨、交出「我自己说了算」的权力，去信一个跨民族的「我们」，这违背人的天性。我把一生押在一件注定拼不齐的事上，是悲壮，但也是不切实际。\n\n另一种说法：我失败，不是因为想法错了，是因为时间不够、大势太猛。我看清的方向是对的——不联合，就被一个个吃掉，后来几十年的历史一一应验。我只是来得太早、又走得太急。一个「太早看清的人」输了，不等于他看错了。\n\n这两边，不是「他对」或「他错」。是同一场失败的两张脸——一个不切实际的理想，和一个对得太早、却没等到时间的清醒。\n\n这是 AP 课堂上老师会反复让你掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Of my whole life, the hardest thing to judge is the dream of "union" itself. I failed — the rope was never finished, I was killed, the confederacy fell apart. But what does that failure actually show? Both views stand. You do the weighing.\n\nOne view: I failed because the idea was too ideal from the start, simply undoable. To ask dozens of nations with old feuds to set down generations of grudges, hand over "I decide for myself," and trust a cross-nation "we" — this runs against human nature. I staked my life on a thing fated never to come together: heroic, yes, but also unrealistic.\n\nThe other view: I failed not because the idea was wrong, but because there was not enough time and the tide was too strong. The direction I saw was right — do not unite and you are eaten one by one, and the decades of history that followed bore it out, one by one. I only came too early and moved too fast. That a man who "saw clearly too early" lost does not mean he saw wrong.\n\nThese are not "he was right" or "he was wrong." They are two faces of one failure — an unrealistic ideal, and a clarity that was right too early and never got its time.\n\nThis is the hard problem an AP teacher will have you weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题:「联合」梦本身 (失败绳没拼成战死联盟散) 说明什么 / 一种说法 (想法太理想做不到/要有世仇的民族放下旧怨交权信跨民族「我们」违背人性/押一生在注定拼不齐的事上悲壮但不切实际) / 另一种说法 (不是想法错是时间不够大势太猛/方向对不联合被一个个吃掉后来历史应验/只是来太早走太急/太早看清的人输了不等于看错) / 同一场失败两张脸 / neutral AP 老师 / 想 30 秒 / DBQ rigor: 不是二选一站队而是引导综合 (能不能两面都拿住、各用至少一条具体证据说清=Tippecanoe 联盟被烧/Thames 战死/后来东南原住民被迫西迁应验) / 两边都站得住',
      engagementHook: '我失败了——是因为「联合」这个梦太理想、根本做不到？还是因为我看得对，只是来得太早？别急着选边：你能不能两面都拿住，各用一条具体证据（比如 Tippecanoe 联盟被烧、后来原住民真被一个个推走）说清？这才是 AP 高分的写法。你的 30 秒到了，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'er-tecumseh-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价一个站在所有民族中间的人？\n\n我不完全属于任何一个民族。对我的 Shawnee，我常年不在家，在为别人的地奔走；对那些有世仇的民族，我是个要他们交权的外人；对英国，我是一颗用完就丢的棋子。我想替所有原住民抓一个能一起活下去的未来，最后战死，联盟散了，那个未来没等到。把这样一生放上天平，你怎么称——是失败，还是另一种没有被说服的坚持？\n\n现在，你只听到了我这一边。那个写下「人人生而平等」、又买下我们家园的掌权者 Jefferson，会把这段历史讲成「自由帝国的成长」；那个被推走的原住民母亲、那个被卖往西南棉田的少年，会把它讲成「我们正在失去的家」。你还没听到他们的声音。换个视角再走一遍，你刚才下的判断，站不站得住？\n\n最后，留一个东西给你。还记得 Harrison 往地里钉、我一根根拔的那些木桩吗？换一个位置，你会再看见它一次。到那时，它对你又会是另一种东西。',
        en: 'Having walked my whole life, how would you judge a man who stood in the middle of all the nations?\n\nI belonged fully to no one nation. To my Shawnee, I was away from home for years, running for other peoples\' land; to the nations with old feuds, I was an outsider asking them to hand over power; to Britain, a chess piece to use and discard. I tried to seize for all Native peoples a future where they could live together, and in the end I was killed, the confederacy scattered, that future never reached. Put a life like this on the scale. How do you weigh it: a failure, or another kind of conviction that was never argued away?\n\nNow, you have heard only my side. Jefferson, the man in power who wrote "all men are created equal" and bought our homeland, would tell this history as "the growth of an empire of liberty." The Native mother being pushed off, the boy sold to the cotton fields of the southwest, would tell it as "the home we are losing." You have not yet heard their voices. Run it again through another lens, and see whether the judgment you just made still holds.\n\nAnd one last thing to leave with you. Remember the stakes Harrison drove into the ground, and I pulled out one by one? Stand in another place, and you will see them again. By then they will be yet another thing to you.',
      },
      deliverGoal: 'N11 close/meta — 评价站在所有民族中间的人 (对各方都不完全是自己人/想替所有原住民抓一起活的未来/战死联盟散没等到) 天平: 失败还是另一种没被说服的坚持 + 跨视角指针 (只听到我这一边 / Jefferson 写「人人生而平等」又买下家园会讲成自由帝国成长 / 被推走的原住民母亲+被卖往西南棉田少年会讲成正在失去的家 / 还没听到他们声音换视角再走判断站不站得住) + 暗示量地木桩换位置会再看见一次另一种东西 (不直接解释 echo)',
      engagementHook: '我对谁都不完全是自己人，想替所有原住民抓一个一起活的未来，最后没等到。你会怎么评价这样一个站在中间的人？现在你只听到我这一边——那个买下我们家园的 Jefferson、那个被推走的母亲，会怎么讲这同一段历史？',
      expectsRealAnswer: true,
    },
  ],
};

export var removedLens = {
  id: 'removed-nation-and-the-enslaved',
  name: 'The Removed Mother and the Boy Sold West',
  nameCn: '被推走的母亲与被卖往西的少年',
  role: 'receiving-end',
  perspectiveTag: 'losing-home-and-sold-west',
  icon: '🌽',
  description: {
    cn: '两条无权方的声音，合成一个视角：一个被推走的原住民母亲，和一个被向西卖走的被奴役少年。两个都是虚构的桥接人物，身份完全写实，不给确切姓名，因为历史很少为这些人留下名字，而这恰恰是问题本身。母亲生活在东南一个 Cherokee（切罗基）村子，有玉米地、河谷、木屋，过着定居农耕的生活；少年生在弗吉尼亚一座烟草庄园，从小被当成账本上的财产。这一遍，你站在「向西扩张」「市场繁荣」这些好听词的背面，直面每一块新得到的土地，都是另一群人正在失去的家。',
    en: 'Two powerless voices combined into one perspective: a Native mother being pushed off, and an enslaved boy sold west. Both are bridging characters, fully real in role, with no exact name, because history rarely left names for these people, and that itself is the point. The mother lives in a Cherokee village in the Southeast, with cornfields, river valleys, and wooden houses, living a settled farming life; the boy was born on a Virginia tobacco plantation, treated from birth as property on a ledger. This pass puts you behind the pleasant words "westward expansion" and "market prosperity," facing the truth that every piece of land newly gained was another people\'s home being lost.',
  },
  storyboard: [
    {
      id: 'er-removed-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '课本里有一个词，叫「向西扩张」。听起来全是好消息：成长、机会、自由的土地。\n\n这一遍，你站到这个词的背面。\n\n你会同时是两个人。一个是我——一个原住民母亲，住在东南一个 Cherokee（切罗基）村子里，有玉米地、有河谷、有木屋，过着安安稳稳的定居农耕日子。另一个，是一个被奴役的少年，生在弗吉尼亚一座烟草庄园，从一出生睁开眼，就被写在别人的账本上，当成一笔财产。\n\n我们俩都没有名字给你。不是我们不肯说，是历史很少为我们这样的人留下名字——而这件事本身，就是问题的一部分。一段历史里谁有名字、谁没有，从来不是偶然。\n\n我们俩，一个在「新得到的西部」上，一个在「往西卖去的路上」。课本里那句「向西扩张」，每往前一步，都从我们俩中的一个身上，实实在在地碾过去。\n\n这一遍，你从最没有名字的位置，看一件事：所谓「新得到的土地」，到底是谁正在失去的家。',
        en: 'There is a phrase in your textbook: "westward expansion." It sounds like all good news — growth, opportunity, land of freedom.\n\nThis pass, you step to the back of that phrase.\n\nYou will be two people at once. One is me, a Native mother, living in a Cherokee village in the Southeast, with cornfields, river valleys, and wooden houses. The other is an enslaved boy, born on a Virginia tobacco plantation, written into a ledger from birth, treated as property.\n\nNeither of us has a name to give you. Not because we will not say it, but because history rarely left names for people like us — and that fact itself is part of the problem.\n\nThe two of us, one on the "newly gained West," one on the "road sold westward." That phrase "westward expansion," with every step forward, rolls over one of the two of us.\n\nThis pass, from the most nameless place, you watch one thing: who, exactly, is losing the home that gets called "newly gained land."',
      },
      deliverGoal: 'N1 hook — 课本词「向西扩张」听起来全是好消息 (成长机会自由土地) + 这一遍站到背面 + 同时是两个人 (原住民母亲东南 Cherokee 村玉米地河谷木屋 + 被奴役少年弗吉尼亚烟草庄园从出生写在账本当财产) + 都没名字 (不是不肯说是历史很少为我们留名字/这件事本身是问题一部分) + 一个在新得到的西部一个在往西卖的路上/「向西扩张」每往前一步碾过我们一个 + 这一遍从最没名字位置看「新得到的土地」是谁正在失去的家',
      engagementHook: '课本里「向西扩张」听起来全是好消息：成长、机会、自由的土地。可这一遍你站到它的背面——你会同时是一个正在失去家的母亲，和一个正被卖往西的少年。所谓「新得到的土地」，到底是谁正在失去的家？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-removed-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先让我，那个母亲，告诉你我的村子是什么样。\n\n白人脑子里有一个画面：原住民住帐篷、四处游荡、靠打猎为生。我要先把这个画面纠正过来——至少在我们 Cherokee 这里，根本不是这样。\n\n我们有成片的玉米地，年年耕种；我们住在木屋里，村子建在河谷边；我们定居，我们种地，我们一代一代守着同一片土。我们的生活，和山那边白人农民的生活，并没有他们想象的那么不同。\n\n这一点为什么重要？因为白人要拿走我们的地时，最好用的借口就是：「他们又不种地，地空着也是空着。」\n\n这是一句谎话。我每天弯腰在玉米地里，我的母亲、我母亲的母亲都在这片地里弯过腰。这片地不是「空的」，它是我们的家，是我们用一代代人的劳作，长进去的家。\n\n请你先记住这一点。因为接下来，你会看着这个「家」，一年比一年小。',
        en: 'First, let me, the mother, tell you what my village is like.\n\nThere is a picture in white people\'s minds: Native people live in tents, wander about, live by hunting. Let me correct that picture first — at least here among us Cherokee, it is nothing like that.\n\nWe have broad cornfields, tilled year after year; we live in wooden houses, our village built by a river valley; we are settled, we farm, we guard the same earth generation after generation. Our life is not as different from the white farmer\'s over the hill as they imagine.\n\nWhy does this matter? Because when white people want to take our land, their handiest excuse is: "they do not farm anyway, the land sits empty."\n\nThis is a lie. Every day I bend in the cornfield; my mother, and my mother\'s mother, bent in this earth too. This land is not "empty." It is our home, a home we grew into with the labor of generation upon generation.\n\nHold on to this first, because next you will watch this "home" grow smaller, year by year.',
      },
      deliverGoal: 'N2 setup (母亲) — 我的村子什么样 + 纠正白人画面 (原住民住帐篷四处游荡靠打猎/Cherokee 根本不是这样) + 写实生活 (成片玉米地年年耕种/木屋/村建河谷边/定居种地一代代守同一片土/和白人农民没那么不同) + 为何重要 (白人拿地最好借口「他们不种地空着也空着」是谎话) + 这片地不是空的是用一代代劳作长进去的家 + 埋「接下来看这个家一年比一年小」',
      engagementHook: '白人拿我们地的时候，最好用的借口是：「他们又不种地，地空着也是空着。」这是一句谎话——我、我母亲、我母亲的母亲，都在这片玉米地里弯过腰。一片有人世代耕种的地，凭什么被说成「空的」？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-removed-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '现在换那个少年，让他告诉你他的开端。\n\n我生在弗吉尼亚一座烟草庄园。我睁开眼睛看见的第一个世界，就是：我是别人账本上的一笔财产。\n\n我不识字。没人问过我的名字。在主人的账本里，我有一个价钱，和一头牛、一袋烟叶，记在同一本账上、同一个栏目里。\n\n你要懂一件让我母亲那一辈、和更早的人都看不懂的事：在我小时候，南方很多人以为，奴隶制会慢慢自己消失——烟草越种越把地种穷，养一个奴隶的成本好像快要划不来了，有人甚至猜，再过些年这套制度自己就垮了。\n\n可一样东西改变了一切：南方开始大种棉花，棉花变成了印钞机。\n\n棉花一暴利，像我这样的人，一夜之间又变成了「值钱的财产」。我不再被当成快没用的旧东西，我被当成可以卖、可以运、可以一手换成银子的新商机。\n\n那台让全国人欢呼的「市场繁荣」的机器，一开动，对我做的第一件事，就是给我这样的人，重新标上了一个更高的价。',
        en: 'Now switch to the boy, and let him tell you his beginning.\n\nI was born on a Virginia tobacco plantation. The first world I opened my eyes on was this: I am one entry of property in someone\'s ledger.\n\nI cannot read. No one asked my name. In the owner\'s ledger I have a price, recorded in the same book as an ox and a sack of tobacco leaf.\n\nYou must understand a thing my mother\'s generation, and those before, could not have understood: when I was small, many in the South believed slavery would slowly fade on its own — tobacco was wearing out the soil, and the enslaved seemed about to lose their worth.\n\nBut one thing changed everything: the South began to grow cotton at scale, and cotton became a money-printing machine.\n\nThe moment cotton turned hugely profitable, people like me became "valuable property" again overnight. I was no longer treated as an old thing about to be useless; I was treated as a new opportunity to be sold, shipped, turned into money.\n\nThat machine of "market prosperity" the whole country cheered, the moment it started, the first thing it did was put a higher price on people like me.',
      },
      deliverGoal: 'N3 setup (少年) — 我的开端 弗吉尼亚烟草庄园 + 睁眼第一个世界: 别人账本上一笔财产 (不识字没人问名字/有价钱和牛烟叶记同一本账) + 误会纠正 (我小时候南方很多人以为奴隶制会慢慢自己消失/烟草种穷地奴隶快不值钱) + 一样东西改变一切: 南方大种棉花棉花变印钞机 + 棉花暴利我一夜又变值钱财产 (不再是快没用旧东西是可卖可运可换钱新商机) + 全国欢呼的「市场繁荣」机器一开动第一件事给我标更高的价',
      engagementHook: '我小时候，很多人以为奴隶制会慢慢自己消失。可南方一开始大种棉花，棉花变成印钞机，像我这样的人一夜之间又变成「值钱的财产」。那台让全国欢呼的「市场繁荣」机器，第一件事，就是给我标上一个更高的价。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-removed-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我们。先做那个母亲。\n\n1803 年，海那边传来一个消息：白人在一个叫巴黎的地方做了一笔大买卖，他们叫它 Louisiana Purchase（路易斯安那购地）。他们的地图，一夜往西翻了一倍。\n\n你站在自家玉米地里，听到这个消息，心里一沉。因为你比谁都清楚一件白人不肯承认的事：他们「新得到的」那片地，从来不是空的。\n\n那上面住着几十个像我们一样的民族。可在巴黎那间屋子里，没有一个我们的人在场。我们的家，被两个隔着大洋、谁都没来过这里的国家，当成一件商品，标了价，签了字。\n\n你脑子里轰一下：白人嘴里那个能改命的「空白西部」，正是别人祖祖辈辈的家。\n\n而你心里那个最疼的问题，这一刻顶到了喉咙口：当一个国家说自己在「成长」，可它每长大一寸，我脚下的地就缩一圈——这个「成长」，到底是谁的成长？',
        en: 'Now you are us. First, be the mother.\n\nIn 1803, news came from across the sea: the white people made a great deal in a place called Paris, which they call the Louisiana Purchase. Their map doubled westward in a night.\n\nYou stand in your own cornfield, hear the news, and your heart sinks. Because you know better than anyone a thing the whites will not admit: the land they "newly gained" was never empty.\n\nDozens of nations like ours live on it. Yet in that room in Paris, not one of us was present. Our home was treated as merchandise by two nations across an ocean, neither of which had ever come here, priced and signed away.\n\nSomething goes off in your head: the "blank West" in white people\'s mouths, the one that can change a man\'s fate, is exactly someone\'s home for generation upon generation.\n\nAnd the question that hurts most rises to your throat in this moment: when a nation says it is "growing," yet every inch it grows the ground under my feet shrinks one ring — whose growth, exactly, is this "growth"?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak (母亲) — 1803 海那边消息白人巴黎大买卖 Louisiana Purchase 地图一夜往西翻倍 + 站玉米地心一沉 (比谁都清楚白人不肯承认的事: 新得到的地从来不是空的) + 上面住着几十个像我们的民族/巴黎屋里无我们的人/家被两个没来过的国家当商品标价签字 + 脑子轰一下「能改命的空白西部正是别人祖辈的家」+ 最疼问题顶喉咙口: 国家说自己成长可每长一寸我脚下地缩一圈/这成长到底是谁的成长',
      engagementHook: '当一个国家说自己在「成长」，可它每长大一寸，我脚下的地就缩一圈——这个「成长」，到底是谁的成长？白人嘴里那个能改命的「空白西部」，正是我们祖祖辈辈的家。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-removed-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '还是那个母亲。地图翻倍之后，「成长」是怎么落到我脚下的，我看得清清楚楚。\n\n它不是一夜之间抢光的。它是一点一点、像水漫过来一样，慢慢淹上来的。\n\n先是几户白人定居者，在我们村子东边的山坡上盖了房。然后是一个镇。然后，州政府通过一条法律，说这片地从今往后归州管。再然后，又有人摆出一张条约，找我们这边几个最容易被说动的人签字，说「地已经卖给我们了」。\n\n每签一个新条约，我脚下的地就缩一圈。\n\n我听过一个人的名字——Tecumseh。听说他想把我们几十个民族联起来，一起守住地。我心里燃过一下希望。可我也听见村里有人说：「胳膊拧不过大腿，不如趁早跟白人谈，换一块远点的地，至少保住命。」\n\n我夹在中间，什么也决定不了。我不能让那股大势停下来。我只能眼睁睁看着「家」这个词，一年比一年小——直到有一天，它小得只剩下一条往西的、离开这里的路。',
        en: 'Still the mother. After the map doubled, how "growth" landed under my feet, I saw it clearly.\n\nIt did not seize everything in one night. It came bit by bit.\n\nFirst a few white settler families built houses on the slope east of our village. Then a town. Then the state government passed a law saying this land was, from now on, under the state. Then again, someone laid out a treaty, found a few of our people to sign, and said "the land has already been sold to us."\n\nWith every new treaty, the ground under my feet shrank one ring.\n\nI had heard one man\'s name — Tecumseh. I heard he wanted to unite our dozens of nations to guard the land together. Hope flickered in me. But I also heard people in the village say: "better to talk with the whites early, trade for land farther off, and at least keep our lives."\n\nI was caught in the middle, able to decide nothing. I could not make the tide stop. I could only watch, with my own eyes, the word "home" grow smaller year by year — until one day it shrank to nothing but a road heading west, away from here.',
      },
      deliverGoal: 'N5 story (母亲) — 地图翻倍后成长怎么落到脚下 + 不是一夜抢光是一点一点来 (先几户白人定居者村东山坡盖房→一个镇→州政府立法说归州管→有人摆条约找几个人签字说地卖给我们) + 每签新条约脚下地缩一圈 + 听过 Tecumseh 名字 (想联几十个民族守地/心里燃过希望) 但也听村里有人说不如趁早跟白人谈换远点的地保命 + 夹中间什么也决定不了/不能让大势停 + 眼睁睁看「家」一年比一年小直到只剩一条往西离开的路',
      engagementHook: '它不是一夜抢光的。先是几户白人盖房，然后一个镇，然后州政府立法，然后有人拿张条约找几个人签字——每签一个，我脚下的地就缩一圈。我夹在中间，什么也决定不了，只能看着「家」这个词一年比一年小。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-removed-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我，那个母亲，给你讲一样东西：木桩。\n\n有一天，几个白人来到我们村子边上。他们拉着一根长长的链子量地，每隔一段，就往土里钉下一根木桩。钉完，他们指着那些木桩说：从这条线往西，归你们；从这条线往东，归我们了。\n\n对他们，那根木桩是一个干净利落的进度：文明又往西推进了一步。\n\n可那根木桩落在我眼里，是另一样东西。我家的玉米地，被那条线切成了两半。我母亲的母亲埋在土里的地方，被划到了「归他们」的那一边。\n\n（坐在我这个位置，你大概能想见我看着那根木桩时的心情。史料几乎没替我这样的人留下一个字，但这一段，是 lens 让你替我感受一次。）\n\n一根木桩，对钉的人是「我得到了」，对被钉的人是「我失去了」。同一根木头，同一片地，落在两个人眼里，是两个相反的世界。\n\n这就是「向西扩张」这四个字，从我脚下,真实的样子。',
        en: 'Let me, the mother, tell you about one thing: the stake.\n\nOne day, a few white people came to the edge of our village. They dragged a long chain to measure the land, and every so often drove a stake into the earth. When they finished, they pointed at those stakes and said: from this line west, yours; from this line east, ours now.\n\nTo them, that stake was a clean, neat progress: civilization had pushed one more step west.\n\nBut the same stake, to my eyes, was another thing. My family\'s cornfield was cut into two halves by that line. The place where my mother\'s mother lies buried in the earth was marked over onto the "theirs" side.\n\n(Sitting in my seat, you can imagine what I felt looking at that stake. The record left almost not a word for people like me, but here the pass lets you feel it for me once.)\n\nA stake, to the one who drives it, is "I have gained"; to the one it is driven against, "I have lost." The same wood, the same land, falling on two people\'s eyes, is two opposite worlds.\n\nThis is what those words "westward expansion" really look like, from where I stand.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (母亲) — 量地木桩从母亲角度 (几个白人来村边/拉长链子量地每隔一段往土里钉木桩/钉完指着说从这线往西归你们往东归我们了) + 对他们木桩是干净利落进度文明往西一步; 对母亲是另一样东西 (玉米地被线切两半/母亲的母亲埋的地方被划到「归他们」那边) + anti-fab 括号 (史料几乎没留一个字/lens 让你替我感受) + 一根木桩对钉的人「我得到了」对被钉的人「我失去了」同一片地两个相反世界 + 这就是「向西扩张」从我脚下真实的样子。只碰木桩从她角度不揭另两视角',
      engagementHook: '一根木桩，对钉的人是「我得到了」，对被钉的人是「我失去了」。同一根木头、同一片地，落在两个人眼里，是两个相反的世界。这就是「向西扩张」这四个字，从我脚下，真实的样子。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-removed-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在换那个少年。我要告诉你，那台「市场繁荣」的机器，怎么把我推上了一条向西的路。\n\n棉花暴利之后，南方对棉田、对劳力的胃口越来越大。新的棉田在更西边——阿拉巴马、密西西比那一带。种棉花要人，于是像我这样的人，就被一批批从东边的旧庄园，卖往西边的新棉田。\n\n有一天，我被卖给了一个奴隶贩子。他给我戴上脚镣，把我和一长串同样戴着镣的人拴在一起，开始往西南方走。\n\n这条路，我们被奴役的人自己有个叫法，「被卖下河」(sold down the river)。为什么是「下河」？因为顺着密西西比河往南，就是卖到更深的内陆、更狠的棉田。这五个字里，藏着所有最坏的意思：更狠的劳作，更热的棉田，还有最疼的一样，和家人永远的分离。\n\n我回头望弗吉尼亚的方向，那里有我认得的人。我知道，我这辈子，再也见不到他们了。\n\n你以为「向西」是白人农民改命的方向。对我，「向西」是被卖得更深、离家更远的方向。',
        en: 'Now switch to the boy. I will tell you how that machine of "market prosperity" pushed me onto a road heading west.\n\nAfter cotton turned hugely profitable, the South\'s appetite for cotton fields and for labor grew and grew. The new cotton fields were farther west — around Alabama, Mississippi. Cotton needs people, and so people like me were sold, batch after batch, from the old plantations in the East to the new cotton fields in the West.\n\nOne day I was sold to a slave trader. He put chains on my feet, tied me to a long line of others in the same chains, and began to walk southwest.\n\nThis road, we the enslaved have our own name for it: being "sold down the river." Why "down the river"? Because down the Mississippi, south, meant being sold deeper inland, to harsher cotton fields. In those words hide all the worst meanings: harsher labor, hotter cotton fields, and the most painful of all, permanent separation from family.\n\nI looked back toward Virginia, where there were people I knew. I knew that for the rest of my life, I would never see them again.\n\nYou think "west" is the direction in which white farmers change their fate. To me, "west" is the direction of being sold deeper, farther from home.',
      },
      deliverGoal: 'N7 story (少年) — 市场繁荣机器怎么把我推上向西的路 + 棉花暴利南方对棉田劳力胃口越来越大/新棉田在更西边阿拉巴马密西西比/种棉要人像我这样的人被一批批从东边旧庄园卖往西边新棉田 + 有一天被卖给奴隶贩子 (戴脚镣和一长串同样戴镣的人拴一起往西南走) + 「被卖下河」sold down the river (含 idiom 落地: 顺密西西比河往南=卖到更深内陆更狠棉田; 更狠劳作更热棉田+最疼和家人永远分离) + 回望弗吉尼亚知道这辈子再也见不到 + 你以为向西是白人改命的方向对我是被卖更深离家更远的方向',
      engagementHook: '你以为「向西」是白人农民改命的方向。对我，「向西」是被卖得更深、离家更远的方向。我们被奴役的人自己管这条路叫「被卖下河」：顺着密西西比河往南，卖到更深的内陆、更狠的棉田，最疼的，是和家人永远的分离。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-removed-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '还是那个少年。我要戳破一个，几乎所有人都信过的误会。\n\n课本告诉你：那个年代，运河修起来了，工厂转起来了，运费暴跌，市场连成了一张大网，全国都更富了。这叫「市场革命」，听起来是天大的好事。\n\n很多人顺着就以为：经济这么进步、这么文明，奴隶制这种野蛮的旧东西，总该跟着慢慢消失了吧？\n\n我用我这条戴着脚镣、一步步往西走的路，告诉你：恰恰相反。\n\n那张让全国变富的网，和把我卖往西边的力量，根本就是同一股。运河让棉花更好运、卖得更远、卖得更贵，棉花就更赚钱；棉花更赚钱，就要开更多棉田，就要更多像我这样的人去种。市场革命没有让奴隶制消失，反而给了它一个新的、更大的胃口。\n\n新国家越往西「长大」，越富，我这样的人，就被卖得越远，越没有回头的可能。\n\n还有一件事，也藏在这同一张网里。1819 年，这张网第一次自己绷断：地价崩、银行倒、城里大批人丢了活计，史上叫它 Panic of 1819（1819 大恐慌），美国第一次全国性经济危机。连在一张网上，意味着一处崩处处疼。可你猜，危机一来，最先被当成「省钱的东西」卖掉抵债的是谁？还是像我这样、早被记在账本上的人。繁荣时我被卖得越远，崩塌时也照样第一个被推出去。\n\n所以请你记住：「市场繁荣」和「我被卖下河」，从来不是两件事。它们是同一枚硬币的两面。',
        en: 'Still the boy. I must break a myth almost everyone has believed.\n\nThe textbook tells you: in that era, canals were dug, factories turned, freight crashed, the market linked into one great net, and the whole country grew richer. This is called the "market revolution," and it sounds like the greatest of good things.\n\nMany then assume: with the economy so advanced, so civilized, surely slavery would slowly fade?\n\nWith my own road, walking west in chains, I tell you: the very opposite.\n\nThat net that made the whole country rich, and the force that sold me west, were one and the same force. Canals let cotton ship better and sell farther, so cotton made more money; cotton making more money meant more cotton fields, more people like me. The market revolution did not make slavery fade; it gave slavery a new, bigger appetite.\n\nThe more the young nation "grew" westward, the farther people like me were sold.\n\nAnd one more thing hides in this same net. In 1819 the net snapped for the first time: land values collapsed, banks failed, cities filled with the jobless. History calls it the Panic of 1819, America\'s first nationwide economic crisis. Linking into one net means one crash hurts everywhere. But guess who gets sold off first, to pay the debts, when the crisis hits? Still people like me, already written into a ledger. In good times I was sold ever farther; in the crash, I was still the first pushed out.\n\n"Market prosperity" and "I am sold down the river" were never two things. They are two faces of one coin.',
      },
      deliverGoal: 'N8 story (少年) + CED 考点落点 — 戳破几乎所有人信过的误会 + 课本说: 运河修起工厂转运费暴跌市场连成大网全国更富叫「市场革命」听起来天大好事 + 很多人顺着以为经济这么进步文明奴隶制总该慢慢消失 + 我用戴脚镣往西的路告诉你恰恰相反 + 让全国变富的网和把我卖往西的力量是同一股 (运河让棉花好运卖远更赚钱→更多棉田更多像我的人/市场革命没让奴隶制消失给了它新的更大胃口) + 新国家越往西长大我被卖越远 + Panic of 1819 (1819 大恐慌美国第一次全国性经济危机/地价崩银行倒失业/连一张网一处崩处处疼/危机一来最先被当省钱东西卖掉抵债的还是账本上的人) + 「市场繁荣」和「我被卖下河」是同一枚硬币两面',
      engagementHook: '很多人以为：经济这么进步、这么文明，奴隶制总该慢慢消失了吧？我用我这条戴着脚镣往西走的路告诉你：恰恰相反。「市场繁荣」和「我被卖下河」，从来不是两件事——它们是同一枚硬币的两面。',
      expectsRealAnswer: false,
    },
    {
      id: 'er-removed-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们俩，母亲和少年，一起退一步，看更大的地图。\n\n就在白人为「运河、工厂、市场」欢呼的同一个年代，地球另一端有个庞大的帝国，清朝，正处在所谓盛世的尾声。它是当时世界上人口最多的国家，还有一条全世界最长的人工运河：大运河，近一千八百公里。白人此刻在东边挖的那条 Erie Canal（伊利运河，363 英里），跟它一比短了好几倍。两个文明，都用运河搬运财富、把分散的地方缝成一个整体。在「运河」这件事上，那个东方帝国领先了一千多年。\n\n（历史学家说，后来两条路真正分岔，不是谁聪明谁笨，而是各自脚下的处境：煤铁离工厂多远、劳力贵不贵、市场连得多紧。这是把同代两端放在一起看的一种主流解释，不是铁定的定论。）\n\n我们说这个，不是为了比谁强谁弱。我们想让你看见的是：「市场繁荣」从来不是天上掉下来的奇迹，它是一种选择，一种把人和地组织起来的方式。无论这张网铺到哪、铺得多漂亮，总有人是用来被铺过去的，比如我们俩。\n\n再说一句，留给正在读这段历史的你。你现在看见这张往西铺的工业网，几十年后会一直铺到太平洋。到那时，会有一批中国人漂洋过海，来给这张网修最后一段铁路；再后来，同一个国家又立法把他们关在门外。那是另一段历史，但种子就埋在你这一遍看见的网里。运河越长、网越大，越要有人问一句：这繁荣，脚下踩着谁？',
        en: 'The two of us, the mother and the boy, step back together to look at a larger map.\n\nIn the very same era the whites cheered "canals, factories, markets," on the other side of the earth there was a vast empire, the Qing dynasty, at the tail end of what was called a golden age. It was then the most populous country in the world, and it had the longest artificial waterway on earth: the Grand Canal, nearly eighteen hundred kilometers. The Erie Canal (363 miles) the whites were digging in the East at this moment was, beside it, several times shorter. Both civilizations used canals to move wealth and sew scattered places into one whole. On the matter of "canals," that eastern empire led by more than a thousand years.\n\n(Historians say what truly split the two paths later was not who was clever and who dull, but the conditions underfoot for each: how far coal and iron lay from the factory, how dear labor was, how tightly the market was linked. This is one mainstream reading when the two ends of the same era are set side by side, not a fixed verdict.)\n\nWe say this not to rank who is strong and who weak. What we want you to see is: "market prosperity" was never a miracle fallen from the sky. It was a choice, a way of organizing people and land. Wherever this net spread, however beautifully, there were always people who were the ones spread over, people like the two of us.\n\nAnd one more thing, for you reading this history now. The industrial net you see running west will, a few decades from now, reach the Pacific. By then a wave of Chinese people will cross the ocean to build the last stretch of that net\'s railroad; and later, the same nation will pass a law to shut them out. That is another history, but its seed is buried in this very net you saw this pass. The longer the canal, the larger the net, the more someone must ask: this prosperity, on top of whom does it stand?',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8) — 母亲少年一起退一步看更大地图 + 同年代清朝盛世尾声世界人口最多 + 大运河近一千八百公里 (对齐 factledger 1,776km) 世界最长人工运河 vs Erie Canal 363 英里短好几倍 + 两文明都用运河搬财富缝成整体/东方帝国运河领先一千多年 + anti-fab 括号 (大分流具象因子: 煤铁离工厂多远/劳力贵不贵/市场连得多紧=学界主流解释非铁定定论 historiography 口径/防滑向宿命论) + 用意: 不比强弱/「市场繁荣」不是天上掉下的奇迹是一种选择一种组织人和地的方式/总有人被铺过去 + 华裔关联前向钩子 (这张往西工业网几十年后铺到太平洋/一批中国人漂洋过海修最后一段铁路/同一个国家又立法把他们关门外=排华法案种子/框为「几十年后」不破时间线 Rule 0 只点因果链) + 运河越长网越大越要问这繁荣脚下踩着谁',
      engagementHook: '你现在看见的这张往西铺的工业网，几十年后会一直铺到太平洋。到那时，会有一批中国人漂洋过海，来给它修最后一段铁路；再后来，同一个国家又会立法把他们关在门外。运河越长、网越大，越要有人问一句：这繁荣，脚下踩着谁？',
      expectsRealAnswer: false,
    },
    {
      id: 'er-removed-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我们俩这一生，有一个真问题，等你来答：当一个国家的「成长」，必须踩着另一群人的「失去」——这个「成长」，该怎么讲，才算诚实？\n\n一种说法：成长就是成长，代价是历史的常态。任何一个国家变大、变强，都难免有人付出代价。路易斯安那购地让国家翻倍、运河让千万人更富，这些是实实在在的好。盯着代价不放、把整段历史说成一桩罪，是用今天的眼光去苛求过去，也抹掉了那些真实发生过的进步。\n\n另一种说法：把「我们俩的失去」轻轻说成「成长的代价」，正是最不诚实的讲法。这四个字，把一个母亲失去的家、一个少年和亲人永远的分离，压缩成一行小字的脚注。一段把多数受害者写成脚注的历史，不管它讲得多辉煌，都缺了最要紧的那一半真相。\n\n这两边，不是「要不要承认进步」。是同一段历史的两种讲法——一种以「成长」为主语，一种以「失去的人」为主语。\n\n这是 AP 课堂上老师会反复让你掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked the whole life of the two of us, a real question waits for you: when a nation\'s "growth" must stand on another people\'s "loss," how should that "growth" be told to be honest?\n\nOne view: growth is growth, and cost is the normal state of history. Any nation that grows larger and stronger will, unavoidably, have some who pay a price. The Louisiana Purchase doubled the nation; the canals made millions richer — these are real, solid goods. To fix only on the cost, to tell the whole stretch of history as one crime, is to demand of the past with today\'s eyes, and to erase the progress that truly happened.\n\nThe other view: to softly call "the loss of the two of us" the "cost of growth" is exactly the least honest way to tell it. Those four words press a mother\'s lost home, a boy\'s permanent parting from his kin, into one line of small-print footnote. A history that writes most of its victims as footnotes, however gloriously it is told, lacks the most important half of the truth.\n\nThese are not "whether to admit progress." They are two ways of telling one history — one with "growth" as the subject, one with "the people who lost" as the subject.\n\nThis is the hard problem an AP teacher will have you weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 国家的成长必须踩着另一群人的失去/这成长怎么讲才诚实 / 一种说法 (成长就是成长代价是历史常态/任何国家变强难免有人付代价/购地翻倍运河让千万人富是实在的好/盯着代价说成罪是用今天眼光苛求过去抹掉真实进步) / 另一种说法 (把我们俩的失去轻说成成长代价是最不诚实讲法/压缩成一行小字脚注/把多数受害者写成脚注的历史缺最要紧那半真相) / 同一段历史两种讲法 (以成长为主语 vs 以失去的人为主语) / neutral AP 老师 / 想 30 秒 / DBQ rigor: 不是二选一站队而是引导综合 (能不能两面都拿住、各用至少一条具体证据说清=路易斯安那 1500 万翻倍/36°30′ 线/被卖下河) / 两边都站得住',
      engagementHook: '当一个国家的「成长」，必须踩着另一群人的「失去」——这个「成长」该怎么讲才算诚实？别急着选边：你能不能两面都拿住，各用一条具体证据（比如购地让面积翻倍、比如「被卖下河」、比如那条 36°30′ 线）说清？这才是 AP 高分的写法。你的 30 秒到了，写下来。',
      expectsRealAnswer: true,
    },
    {
      id: 'er-removed-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我们俩这一生：一个守着玉米地、却看家一年比一年小的母亲，一个戴着脚镣、被卖得离家越来越远的少年。你会怎么评价这段被叫做「成长」的历史？\n\n这二十八年，对一些人是领土翻倍、运费暴跌、机会遍地的黄金年代；对我们俩，是家被划走、亲人永别的年代。这是同一段历史。你怎么称？\n\n但请你记住：你这一遍，听的只是我们俩——最没有名字的两个人。\n\n那个写下「人人生而平等」、又买下我们家园的掌权者 Jefferson，会把这段讲成「让共和国活下去、长大」的功业。那个想把我们几十个民族联起来、最后战死的 Tecumseh，会把它讲成「一场没拼成的、本可以不输的抵抗」。\n\n你还没听到他们的声音。换上他们的视角再走一遍，你刚才下的判断，站不站得住？\n\n最后，再想一步：今天你身边，是不是也有人，在用「发展」「进步」这样好听的词，盖住某一群人正在付出的代价？那时候，你会跟着一起欢呼，还是会像今天这样，先问一句——这繁荣，脚下踩着谁？',
        en: 'Having walked the whole life of the two of us: a mother who guarded her cornfield yet watched her home grow smaller year by year, a boy in chains sold ever farther from home. How would you judge this history called "growth"?\n\nThese twenty-eight years, to some, were a golden age of doubled territory, crashed freight, opportunity everywhere; to the two of us, an age of homes marked away and kin parted forever. This is one history. How do you weigh it?\n\nBut remember: this pass, you heard only the two of us — the two most nameless people.\n\nJefferson, the man in power who wrote "all men are created equal" and bought our homeland, would tell this as the achievement of "keeping the republic alive and growing." Tecumseh, who tried to unite our dozens of nations and was killed in the end, would tell it as "a resistance that was never forged whole, that need not have lost."\n\nYou have not yet heard their voices. Run it again through their perspectives, and see whether the judgment you just made still holds.\n\nThen take one last step: in your own life today, is there someone using fine words like "development" and "progress" to cover the cost some group is paying right now? When that happens, will you cheer along, or will you do as you did today, and ask first — this prosperity, on top of whom does it stand?',
      },
      deliverGoal: 'N11 close/meta — 评价被叫「成长」的历史 (母亲守玉米地看家越来越小+少年戴脚镣被卖越来越远 → 对一些人领土翻倍运费暴跌机会遍地黄金年代/对我们俩家被划走亲人永别/同一段历史怎么称) + MANDATORY 跨视角指针 (你只听到我们俩最没名字的两个人 / Jefferson 写「人人生而平等」又买下家园会讲成让共和国活下去长大的功业 / Tecumseh 想联几十个民族最后战死会讲成没拼成本可不输的抵抗 / 还没听到他们声音换视角再走判断站不站得住) + transfer (今天身边用「发展」「进步」好听词盖住某群人正付的代价/你会跟着欢呼还是先问这繁荣脚下踩着谁)',
      engagementHook: '你这一遍，只听到了我们俩——最没有名字的两个人。那个买下我们家园的 Jefferson、那个想联合我们却战死的 Tecumseh，会怎么讲这同一段历史？换个视角再走一遍，你刚才的判断站得住吗？今天你身边，有没有人在用「发展」盖住某一群人正在付出的代价？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'jefferson-actor':                  jeffersonLens,
  'tecumseh-mediator':                tecumsehLens,
  'removed-nation-and-the-enslaved':  removedLens,
};

// defaultLens 取自 narrative frontmatter — receiving-end 优先 (无权方 = AP DBQ 必考「看见沉默的大多数」)
export var defaultLens = 'removed-nation-and-the-enslaved';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'early-republic-1800',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'jefferson-actor': 30, 'tecumseh-mediator': 30, 'removed-nation-and-the-enslaved': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 量地的木桩 surveyor stake (三视角各触一次不点破)',
    'defaultLens: removed-nation-and-the-enslaved — 无权方 (被推走的原住民母亲 + 被卖往西的少年, AP DBQ 必考「看见沉默的大多数」)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'anti-fab: 两个 DEFAULT 桥接人物显式标虚构+身份写实+不给真名 (lens.description + N1); 心理/感受用括号短句标 (史料无答案/lens 让你感受); §8 大分流框定为 historiography (主流解释非定论)',
    '§8 中国桥注入 receiving-end N9 + mediator N9 (两条运河 / 大分流, Rule 0 不比强弱)',
    'cultural ban: 全程美国/原住民史真实术语, 中国术语仅 §8 (大运河/清朝/盛世), 不用中国概念解释美国制度',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
