// ─────────────────────────────────────────────────────────────────
// 三网相连 1200-1450 — Afro-Eurasian Trade Networks · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 讲非中国网络时用各自真实术语
//   (caravanserai/dhow/lateen sail/Swahili/Sahel/Zamorin/Mansa/hajj/shahada/
//    Sankore/Kilwa/Calicut/Samarkand/Timbuktu),不用中国特定词。
//   §8 中国桥为「真中国」段落,按例外可正常使用中国术语 (市舶司/泉州/瓷器/指南针)。
// 3 lens / 11 nodes each / Rule 0 中性 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 一枚金币 — Mansa Musa 沿途散出的金 (顶端给出)/
//   Ibn Battuta 在港口看它换手 (中段见证)/ 无名脚夫水手用命驮动它买的货却从不拥有它
//   (底层承受)。三视角各触一次,不互相点破。
// anti-fab: receiving-end 为合成桥接人物 (无名,合并撒哈拉脚夫+印度洋水手),
//   身份写实,「无名」本身是教学论点;dhow 缝制工艺真实,水手感官 motif 透明标注。
// ─────────────────────────────────────────────────────────────────

export var mansaMusaLens = {
  id: 'mansa-musa-actor',
  name: 'Mansa Musa',
  nameCn: '曼萨·穆萨',
  role: 'network-top-actor',
  perspectiveTag: 'mali-emperor',
  icon: '👑',
  description: {
    cn: '约 1280 年生,西非马里帝国的 Mansa(曼萨,意为「王中之王」)。他坐在全旧大陆最大的黄金产区之上,是虔诚的穆斯林。1324 年他带着惊人的黄金穿过撒哈拉去麦加朝觐(hajj),沿途散金,据说把开罗的金价压低了好几年,从此把西非画进了世界地图。这一遍让你站在贸易网最顶端的赢家位置,看黄金、信仰、声望如何让一个内陆帝国成为世界级玩家，也别忘了,这份财富同样压在黄金矿工和被贩卖人口的身上。',
    en: 'Born around 1280, the Mansa ("king of kings") of the Mali Empire in West Africa. He sat atop the largest gold-producing region of the whole Old World, and he was a devout Muslim. In 1324 he crossed the Sahara to Mecca on the hajj with stunning quantities of gold, handing it out along the way, and is said to have depressed Cairo\'s gold price for years, drawing West Africa onto the world map. This pass puts you at the winner\'s position at the very top of the trade web, watching how gold, faith, and fame made an inland empire a world player, while remembering that this wealth also pressed down on gold miners and trafficked people.',
  },
  storyboard: [
    {
      id: 'trade-networks-musa-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1324 年,撒哈拉沙漠的边上。我骑在骆驼上,身后是一支望不到尾的商队。\n\n骆驼一峰接一峰,驮的是黄金。我的随从、士兵、还有为这趟路准备的一切,排成一条在沙子上爬行的长龙。所到之处,人们停下手里的活,只为看我们一眼。\n\n我是 Mansa Musa(曼萨·穆萨)。Mansa 在我的语言里是「王中之王」。我统治的国家叫马里,在西非,坐在全「旧大陆」(就是当时人们知道的非洲、欧洲、亚洲连成的那块大陆)最大的一片黄金产地之上。\n\n我要去的地方,是麦加。这趟旅程叫 hajj(朝觐),是每个有能力的穆斯林一生该完成一次的事。\n\n这一遍,你坐进我这个位置——贸易网最顶端、最有钱的那个人。你会看见黄金怎么把一个内陆帝国,变成连欧洲人都要画进地图的名字。',
        en: 'In 1324, at the edge of the Sahara desert. I ride on a camel, and behind me stretches a caravan whose end you cannot see.\n\nCamel after camel, loaded with gold. My attendants, my soldiers, and everything prepared for this journey form one long line crawling across the sand. Wherever we pass, people stop their work just to look at us once.\n\nI am Mansa Musa. Mansa, in my language, means "king of kings." The country I rule is called Mali, in West Africa, sitting atop the largest patch of gold-producing land in the whole "Old World" (the lands people back then knew — Africa, Europe, and Asia joined into one mass).\n\nThe place I am going to is Mecca. This journey is called the hajj, the pilgrimage every able Muslim should complete once in a lifetime.\n\nThis pass puts you in my seat — the richest man at the very top of the trade web. You will see how gold turned an inland empire into a name even Europeans drew onto their maps.',
      },
      deliverGoal: 'N1 hook — 1324 撒哈拉边 Mansa Musa 骑骆驼 + 望不到尾驮金商队 (随从士兵/所到之处人停下看) + 自我介绍 (Mansa=王中之王/马里/西非/坐最大黄金产地) + 去麦加 hajj 朝觐 (穆斯林一生该完成一次) + 这一遍视角 (贸易网最顶端最有钱的人/黄金把内陆帝国变成欧洲都画进地图的名字)',
      engagementHook: '我所到之处,人们停下手里的活只为看我一眼。你愿意从贸易网最顶端、最有钱的那个人的位置,看这张大网吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-musa-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我的财富是从哪儿来的。\n\n马里坐在黄金上,可沙漠里有一样东西比黄金还金贵——盐。在撒哈拉这样的热沙漠里,人会出汗、会脱水,没有盐活不下去。可我们这片土地不产盐。\n\n于是有了一桩生意,跑了几百年:北边的商队用骆驼,把成板的盐穿过撒哈拉运下来;我们用黄金换。盐稀缺到人们常说,在沙漠最深处,它几乎和黄金一样金贵。\n\n这就是 Trans-Saharan trade(跨撒哈拉贸易):黄金往北走,盐往南走,骆驼在世界最大的沙漠里,一站接一站,靠绿洲的井水续命。\n\n我的财富,就建在这条黄金-盐路的一头。但我得诚实:挖金的矿工、扛盐板的脚夫、被锁着穿过沙漠贩卖的人——他们才是真正用身体撑起这条路的人。这一点,你先记住。',
        en: 'First, see clearly where my wealth comes from.\n\nMali sits on gold, but in the desert there is a thing more precious than gold — salt. In a hot desert like the Sahara, people sweat and dry out; without salt you cannot live. Yet our land does not produce salt.\n\nSo there is a trade that has run for centuries: caravans from the north carry slabs of salt down across the Sahara by camel, and we exchange gold for it. Salt is so scarce that people often say, in the deepest desert, it was almost worth its weight in gold.\n\nThis is the Trans-Saharan trade: gold going north, salt going south, camels in the world\'s largest desert relaying leg by leg, kept alive by the well water of the oases.\n\nMy wealth is built on one end of this gold-and-salt road. But I have to be honest: the miners who dig the gold, the porters who haul the salt slabs, the people marched chained across the desert to be sold — they are the ones who truly hold up this road with their bodies. Keep that in mind.',
      },
      deliverGoal: 'N2 setup — 财富来源 + 盐比金贵 (热沙漠出汗脱水没盐活不了/马里不产盐) + 黄金-盐生意几百年 (北边骆驼运盐板/我们用金换/盐稀缺到人们常说在沙漠最深处它几乎和金一样金贵 — 修辞非字面率) + Trans-Saharan trade 跨撒哈拉贸易 (金往北盐往南/骆驼一站接一站靠绿洲井水) + Rule 0 诚实: 矿工/扛盐板脚夫/被锁穿沙漠贩卖的人才是用身体撑起路的人',
      engagementHook: '在沙漠最深处,盐稀缺到人们常说它几乎和黄金一样金贵。一样东西值多少,到底是由它本身决定的,还是由你在哪里、有多需要它决定的?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-musa-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可你要懂我,光看黄金不够。还有一样东西,跟黄金一样重——我的信仰。\n\n我是穆斯林。从西非到东南亚,这一时期沿着商路,一个又一个统治者和商人皈依了伊斯兰。这不只是信仰的事。\n\n你想想商人的难处:他从几千里外来,语言不通,谁都不认识,凭什么相信对面这个陌生人不会骗他?\n\n伊斯兰给了答案。念同一句 shahada(清真言)、守同一套商业契约、用同一种语言(阿拉伯语)记账——两个素不相识的穆斯林,哪怕隔着半个世界,也能坐下来做成一笔生意。它像一套商人之间通用的「操作系统」——说白了,就是一套让陌生人也能一起做事的共同规矩。\n\n所以我去麦加朝觐,不只是为了尽一个穆斯林的本分。我也是在向整个伊斯兰世界宣告:我马里,是你们当中一员,而且是富得流油的一员。\n\n信仰、黄金、声望——这三样,我打算在这一趟路上,一起亮出来。',
        en: 'But to understand me, gold alone is not enough. There is another thing, as heavy as gold — my faith.\n\nI am a Muslim. From West Africa to Southeast Asia, in this era, ruler after ruler and merchant after merchant converted to Islam along the trade routes. This was not only a matter of faith.\n\nThink of a merchant\'s problem: he comes from thousands of miles away, speaks a different language, knows no one. Why should he trust that the stranger across from him will not cheat him?\n\nIslam gave an answer. Reciting the same shahada (the declaration of faith), keeping the same trade contracts, keeping accounts in the same language (Arabic) — two Muslims who have never met, even half a world apart, can sit down and close a deal. It works like a shared "operating system" among merchants — put simply, a common set of rules that lets even strangers do things together.\n\nSo my pilgrimage to Mecca is not only to do a Muslim\'s duty. It is also to announce to the whole Islamic world: I, Mali, am one of you — and a fabulously rich one at that.\n\nFaith, gold, fame — these three, I mean to show off together on this one journey.',
      },
      deliverGoal: 'N3 setup — 信仰跟黄金一样重 + 伊斯兰沿商路扩散 (西非到东南亚统治者商人皈依/不只信仰) + 商人难处 (几千里外语言不通凭什么信陌生人) + 伊斯兰给答案=商业操作系统 (同一句 shahada 清真言/同一套契约/同一种语言阿拉伯语记账/两个素不相识穆斯林隔半个世界也能做生意) + 朝觐也是向伊斯兰世界宣告马里是富裕的一员 + 信仰/黄金/声望一起亮出来',
      engagementHook: '两个素不相识、隔着半个世界的人,凭什么敢做成一笔生意?在没有银行、没有合同法的年代,「信任」这东西,是怎么造出来的?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-musa-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1324 年,你的商队走进了开罗——当时伊斯兰世界最大的城市之一。所有人都盯着你看:这个从撒哈拉以南来的黑人皇帝,到底有多少金子?\n\n你大方得惊人。你给清真寺捐金,给官员送金,给路边伸手的人散金。你不是在炫耀几袋金子,你是在用黄金,告诉这座城:马里富到什么程度。\n\n你太大方了。开罗市面上突然涌进这么多黄金,金子一下子变得不那么稀罕——据记载,开罗的金价被你压低了好几年才缓过来。\n\n你停下来想一想:你只是路过、散了点金,竟然真的、实实在在地,改变了一整座城市的物价。\n\n这就是你手里黄金的分量。它不是装饰,它是一种能搅动远方市场的力量。一个内陆来的皇帝,用脚下挖出来的金属,让旧大陆最繁华的城市记住了西非的名字。',
        en: 'Now you are me.\n\nIn 1324, your caravan walks into Cairo — one of the largest cities in the Islamic world at the time. Everyone is staring at you: this Black emperor from south of the Sahara, just how much gold does he have?\n\nYou are astonishingly generous. You give gold to the mosques, gold to the officials, gold to the people who reach out their hands by the road. You are not showing off a few sacks of gold; you are using gold to tell this city just how rich Mali is.\n\nYou are too generous. So much gold suddenly pours into Cairo\'s market that gold becomes, all at once, less rare — by the records, you depressed Cairo\'s gold price for years before it recovered.\n\nStop and think for a moment: you only passed through and handed out some gold, yet you really, concretely, changed the prices of an entire city.\n\nThat is the weight of the gold in your hand. It is not decoration; it is a force that can stir distant markets. An emperor from the interior, with the metal dug from beneath his feet, made the most flourishing city of the Old World remember the name of West Africa.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1324 商队走进开罗 (伊斯兰世界最大城之一/所有人盯着撒哈拉以南来的黑人皇帝有多少金) + 大方散金 (捐清真寺/送官员/散路人/用黄金告诉城马里多富) + 太大方压低开罗金价好几年 (黄金涌入变不稀罕/缓过来才恢复) + 自我惊觉「只是路过散点金竟真改变整座城物价」+ 黄金的分量=搅动远方市场的力量 + 内陆皇帝让旧大陆最繁华城记住西非名字',
      engagementHook: '我只是路过、散了点金,竟然真的把一整座大城市的物价压低了好几年。当一个人的钱多到能搅动别人的市场,这是慷慨,还是另一种力量?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-musa-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我散出去的金币里,有一枚,我想让你盯住它。\n\n这枚金币,从我手里给了开罗一个商人。它不会停在这儿。它会被拿去买印度的胡椒、中国的瓷器、波斯的地毯;然后换手、再换手,沿着商路一座城一座城地走下去。\n\n这正是这张网最奇怪的地方:没有任何一个人,从头走到尾。\n\n货物像接力棒。我的金币到开罗换手,胡椒在卡利卡特(Calicut)换手,丝绸在撒马尔罕(Samarkand)换手。每一座这样「换手的城市」,都有人靠当中间人发财——他们不种地、不打仗,只负责让东西从一只手,递到下一只手。\n\n所以「丝绸之路」根本不是一条路。它是无数条接力的短途,缝在一起。「一个商人从中国走到罗马」,是后人为了好讲故事编出来的。\n\n记住这枚金币。等你换一个视角再走这张网,你会在另一个人那里,再看见它一次。',
        en: 'Among the gold coins I handed out, there is one I want you to keep your eye on.\n\nThis coin passed from my hand to a merchant in Cairo. It will not stop here. It will be used to buy India\'s pepper, China\'s porcelain, Persia\'s carpets; then it changes hands, and changes hands again, traveling city by city along the trade routes.\n\nThis is the strangest thing about this web: no single person travels from end to end.\n\nGoods are like a baton. My coin changes hands in Cairo, pepper changes hands in Calicut, silk changes hands in Samarkand. Every such "city where goods change hands" has people who grow rich as middlemen — they do not farm, do not fight; they only pass things from one hand to the next.\n\nSo the "Silk Road" is not one road at all. It is countless short relay legs stitched together. "A merchant walking from China to Rome" is something later people made up to tell a tidy story.\n\nRemember this coin. When you walk this web again from another perspective, you will see it once more, in someone else\'s hands.',
      },
      deliverGoal: 'N5 ANCHOR cross-lens (金币 motif 顶端给出) — 散出的一枚金币从 Musa 手给开罗商人 + 不停 (买印度胡椒/中国瓷器/波斯地毯/换手再换手沿商路走) + 这张网最奇怪: 没人从头走到尾 + 货物像接力棒 (金币开罗换手/胡椒卡利卡特换手/丝绸撒马尔罕换手) + 换手的城市有人靠当中间人发财 (不种地不打仗只递东西) + 丝绸之路不是一条路是无数短途接力 (一个商人从中国走到罗马是后人编的) + 暗示金币会从另一视角再见一次 (不点破)',
      engagementHook: '我手里这枚金币,买胡椒、买瓷器、一座城一座城换手走下去——可没有任何一个人从头走到尾。一件东西能走遍半个世界,人却走不全程,这张网到底是怎么运转的?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-musa-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '朝觐结束,我回到马里。这一趟,我带回来的不只是声望,还有人——我从外面请回了建筑师、学者、读书人。\n\n我把钱砸在一座城上,它叫 Timbuktu(廷巴克图)。\n\n它本来是跨撒哈拉路上一个换手的节点。我在廷巴克图和加奥(Gao),都修建了清真寺;其中最有名的一座叫 Sankore(桑科雷)——它既是清真寺,也是一所学校。我让廷巴克图不只是个堆黄金的地方,更变成一座学问之城——藏书丰富,从远方来的学者在这里讲学、抄书、辩论。\n\n你看,我做的事,和那枚金币做的事,是一回事:我把财富,换成了别的东西。金子换成清真寺,换成书,换成「廷巴克图」这个名字本身的分量。\n\n几百年后,人们提起这座城,想到的不只是黄金,还有学问。一个内陆沙漠边的城,因为一条贸易路、一个皇帝的钱,长成了当时世界上最有学问的城市之一。',
        en: 'The pilgrimage over, I return to Mali. From this journey I bring back not only fame but people — I invited architects, scholars, and learned men from abroad.\n\nI pour money into one city: Timbuktu.\n\nIt was originally a hand-off node on the trans-Saharan road. In Timbuktu and in Gao, I built mosques; the most famous of them, called Sankore, was at once a mosque and a school. I made Timbuktu not just a place where gold piles up, but a city of learning — rich in books, where scholars from far away lectured, copied manuscripts, and debated.\n\nYou see, what I did and what that gold coin did are the same thing: I turned wealth into something else. Gold into mosques, into books, into the very weight of the name "Timbuktu."\n\nCenturies later, when people speak of this city, they think not only of gold but of learning. A city at the edge of an inland desert, because of one trade road and one emperor\'s money, grew into one of the most learned cities in the world of its time.',
      },
      deliverGoal: 'N6 story — 朝觐归来带回声望也带回人 (请建筑师/学者/读书人) + 钱砸在 Timbuktu 廷巴克图 (本是跨撒哈拉换手节点) + 在廷巴克图和加奥 Gao 都修清真寺/最有名一座叫 Sankore 桑科雷既是清真寺也是学校 (合一, 对齐 factledger #10) + 让廷巴克图不只堆黄金更成学问之城 (藏书丰/远方学者讲学抄书辩论) + 呼应金币 motif「把财富换成别的东西」(金换清真寺换书换名字的分量) + 内陆沙漠边的城因一条贸易路一个皇帝的钱长成当时最有学问的城之一',
      engagementHook: '我把黄金换成了清真寺、书,和「廷巴克图」这个名字本身的分量。钱能买到货物,可它怎么就能买到「学问」和几百年后人们的记忆?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-musa-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死后差不多四十年,1375 年,海那边的欧洲人画了一张著名的世界地图。\n\n这张地图叫 Catalan Atlas(加泰罗尼亚地图)。在西非的位置上,他们画了一个端坐的国王,手里高高举着一块金子。\n\n那个国王,就是我。\n\n你想想这有多不寻常。在那个年代,欧洲人对撒哈拉以南的非洲几乎一无所知。可他们偏偏知道:那里有一个国王,富到要被画进地图、手里还得举着金块。\n\n我那一趟散金的朝觐,真的成了。它让世界第一次记住:撒哈拉以南,有一个富得流油的帝国。\n\n但你也得看清这枚硬币的另一面:这是欧洲人画的、欧洲人眼里的我,不是我们自己留下的记录。关于这张大网,最响亮的声音,往往来自局外人。而那些真正撑起它的人——挖金的、扛盐的——几乎没给自己留下一句话。',
        en: 'Almost forty years after I died, in 1375, Europeans across the sea drew a famous map of the world.\n\nThis map is called the Catalan Atlas. In the position of West Africa, they drew an enthroned king, holding a nugget of gold high in his hand.\n\nThat king is me.\n\nThink how unusual this is. In that age, Europeans knew almost nothing about Africa south of the Sahara. Yet they knew this much: there was a king there, rich enough to be drawn onto the map, and holding up a chunk of gold besides.\n\nThat gold-scattering pilgrimage of mine truly worked. It made the world remember, for the first time, that south of the Sahara there was a fabulously rich empire.\n\nBut you must also see the other side of this coin: this is the me that Europeans drew, the me in European eyes — not a record we left ourselves. About this great web, the loudest voices often come from outsiders. And the people who truly held it up — those who dug the gold, who hauled the salt — left almost not one word of their own.',
      },
      deliverGoal: 'N7 story — 死后约四十年 1375 欧洲画著名世界地图 Catalan Atlas 加泰罗尼亚地图 + 西非位置画端坐国王手举金块=我 + 多不寻常 (欧洲人对撒哈拉以南几乎一无所知却知道那有个富到画进地图举金块的国王) + 散金朝觐真的成了 (世界第一次记住撒哈拉以南有富帝国) + Rule 0 硬币另一面: 这是欧洲人眼里的我非我们自己的记录/最响亮声音常来自局外人/真正撑起网的挖金扛盐的人几乎没留下一句话',
      engagementHook: '欧洲人对撒哈拉以南几乎一无所知,却偏偏知道那里有个富到该被画进地图的国王。可关于这张大网最响亮的声音,为什么常常来自局外人,而不是撑起它的人?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-musa-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的黄金,只是这张大网上流动的东西之一。让我退一步,给你看看这张网里,还有什么在跑。\n\n你以为贸易就是换换货物?不止。沿着同样的路线,一起流动的还有——\n\n技术:指南针让海船在阴天也能认方向,三角帆 lateen sail 让船能逆风「之」字前进,骆驼鞍让骆驼驮得动重货穿过撒哈拉。没有这些,网根本张不开。\n\n知识:造纸、印度-阿拉伯数字,沿网传遍各地。\n\n作物:糖、棉花、柑橘,从一片土地搬到另一片。\n\n信仰:伊斯兰沿着三张网,从西非一路扩散到东南亚。\n\n还有人——既有像伊本·白图泰那样自由穿行的旅人,也有被锁着、被当作货物买卖的被奴役者。\n\n所以这张网搬运的,从来不只是黄金和丝绸。它搬运的是整个文明的零件。「流动的不只是货」——这句话,你要一直记着。',
        en: 'My gold is only one of the things flowing on this great web. Let me step back and show you what else runs through it.\n\nYou think trade is just swapping goods? It is more. Along the very same routes, these flow together:\n\nTechnology: the compass let ships find their direction even on overcast days; the lateen sail let ships zigzag against the wind; the camel saddle let camels carry heavy loads across the Sahara. Without these, the web could not open at all.\n\nKnowledge: papermaking, the Indian-Arabic numerals, spread across the lands along the web.\n\nCrops: sugar, cotton, citrus, moved from one land to another.\n\nFaith: Islam spread along all three networks, from West Africa all the way to Southeast Asia.\n\nAnd people — both travelers moving freely, like Ibn Battuta, and enslaved people marched in chains and bought and sold as goods.\n\nSo this web never carried only gold and silk. It carried the parts of whole civilizations. "It\'s not just goods that move" — keep that sentence with you always.',
      },
      deliverGoal: 'N8 story (zoom 到「流动的不只是货」) — 黄金只是网上流动之一 + 贸易不止换货 + 沿同样路线一起流动: 技术 (指南针阴天认方向/三角帆 lateen sail 逆风之字/骆驼鞍驮重货穿撒哈拉/没这些网张不开) + 知识 (造纸/印度-阿拉伯数字) + 作物 (糖/棉花/柑橘) + 信仰 (伊斯兰沿三网西非到东南亚) + 人 (自由旅人如 Ibn Battuta + 被锁当货物的被奴役者) + 「流动的不只是货」核心 AP 论点',
      engagementHook: '同一条路上,跟黄金并排流动的还有指南针、数字、棉花、信仰,甚至活人。如果一条贸易路搬运的是「整个文明的零件」,那它到底是一条商路,还是别的什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-musa-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我再退一步,带你看地球的另一端——和我同一个时代的中国。\n\n你可能以为,这张大网的中心在我这儿,或在某一个伟大的帝国手里。不是。这是一张多中心的网,而中国,是它最大的发动机之一。\n\n看几条实在的证据:\n\n早在 1087 年,中国的北宋就在一个叫泉州的港口设了「市舶司」——一个专门管理海外贸易、抽税的官署,相当于古代的海关。泉州在那时是当时世界上最大、最繁忙的港口之一。\n\n中国的瓷器,是这张网上的硬通货。沿着印度洋的海路,中国瓷器一路卖到东非——今天考古学家真的在东非海岸,挖出了当年的中国瓷片。\n\n还有指南针。让全世界海船改了认路方式的这项技术,最早就是从中国的海船上传出去的。\n\n但请你也记住一句话:中国是这张网极重要的一个引擎,不是唯一的圆心。卡利卡特、基尔瓦、撒马尔罕、廷巴克图——还有我的马里,各有各的中心地位。这是一张谁也不独占中心的网。',
        en: 'Let me step back once more and take you to the other end of the earth — to China, in the same era as me.\n\nYou might think the center of this great web was here with me, or in the hands of some one great empire. It was not. This was a multi-centered web, and China was one of its biggest engines.\n\nLook at a few solid pieces of evidence:\n\nAs early as 1087, China\'s Northern Song set up the shibosi at a port called Quanzhou — an office that managed and taxed overseas trade, like an ancient customs house. Quanzhou was then one of the largest and busiest ports in the world.\n\nChinese porcelain was the hard currency of this web. Along the sea routes of the Indian Ocean, Chinese porcelain was sold all the way to East Africa — and today archaeologists really do dig up shards of that Chinese porcelain on the East African coast.\n\nAnd the compass. The technology that changed how ships across the whole world found their way first spread out from Chinese ships.\n\nBut remember this too: China was a hugely important engine of this web, not its single hub. Calicut, Kilwa, Samarkand, Timbuktu — and my own Mali — each held its own central place. This was a web no one center owned alone.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 中国桥, actor lens 也注一次) — 多中心网中国是最大发动机之一 (不是中心在我这或某一帝国手里) + 实在证据: 1087 宋朝泉州设市舶司 (管理海外贸易抽税官署=古代海关/泉州当时世界最大最繁忙港口之一) + 瓷器硬通货 (沿印度洋卖到东非/考古真在东非海岸挖出中国瓷片) + 指南针 (让全世界海船改认路方式最早从中国海船传出) + Rule 0 收口: 中国是极重要引擎非唯一圆心 (卡利卡特/基尔瓦/撒马尔罕/廷巴克图+马里各有中心/谁也不独占中心)',
      engagementHook: '地球另一端的中国,用市舶司、瓷器、指南针,做着这张网最大的引擎之一——可它也不是唯一的中心。一张「谁也不独占中心」的网,和一个有明确老大的世界,哪个更接近今天?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-musa-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,该怎么评我这趟散金的朝觐?两种说法都站得住,你来称。\n\n一种说法:我是个把财富用对了地方的伟大君主。我用黄金把西非画进了世界地图,让旧大陆第一次正眼看见我们;我把钱变成了清真寺、变成了廷巴克图的书和学问。一个内陆帝国能在世界舞台上留下名字,靠的正是我这种眼光和气魄。\n\n另一种说法:我那望不到尾的黄金,是从哪儿来的?是矿工在矿洞里挖出来的,是脚夫扛着盐板穿过沙漠换回来的,是被锁着贩卖的人用命垫出来的。我在开罗潇洒散金的时候,这些人没有一个的名字被记下来。我的「伟大」,和他们的「无名」,是同一堆黄金的两面。\n\n这两边不是「他了不起但有点瑕疵」。是同一个我的两张脸——一个把文明往前推了一大步的君主,和一座建在无名者身上的财富金字塔的塔尖。\n\n这是一道连大人都吵不出标准答案的真问题。你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Having walked my whole life, how should this gold-scattering pilgrimage of mine be judged? Both views stand. You do the weighing.\n\nOne view: I was a great ruler who put wealth to the right use. With gold I drew West Africa onto the world map, made the Old World look us straight in the eye for the first time; I turned money into mosques, into the books and learning of Timbuktu. That an inland empire could leave its name on the world stage was thanks to exactly this kind of vision and boldness.\n\nThe other view: where did that endless gold of mine come from? It was dug by miners in the mine shafts, exchanged by porters hauling salt slabs across the desert, paid for with the lives of people marched in chains to be sold. While I scattered gold so grandly in Cairo, not one of those people had a name written down. My "greatness" and their "namelessness" are two faces of the same heap of gold.\n\nThese are not "he was magnificent but a little flawed." They are two faces of the same me — a ruler who pushed civilization a great step forward, and the tip of a pyramid of wealth built on the nameless.\n\nThis is a real question even grown-ups cannot argue to a single right answer. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 散金朝觐怎么评 + 一种说法 (把财富用对地方的伟大君主/黄金画西非进世界地图/钱变清真寺廷巴克图书学问/内陆帝国留名靠这眼光气魄) + 另一种说法 (黄金从哪来=矿工挖/脚夫扛盐换/被锁贩卖的人用命垫/散金时这些人没一个名字被记/我的伟大与他们的无名是同一堆金两面) + 同一个我两张脸 (推文明一大步的君主 vs 建在无名者身上财富金字塔的塔尖) + 元话术去 AP jargon (连大人都吵不出标准答案的真问题 — 去掉 4th-wall「AP 老师」, 三 lens 各自措辞不同) + 想 30 秒两边都站得住',
      engagementHook: '我的「伟大」和那些挖金扛盐者的「无名」,是同一堆黄金的两面。一个把文明往前推了一大步、却把代价压在无名者身上的君主,该怎么评?你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'trade-networks-musa-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的,是这张网最顶端、最有钱那个人的声音。\n\n请记住:这只是一边。我讲的黄金、清真寺、被画进地图的荣耀,听起来金光闪闪——这正是顶端视角最容易让人忘掉的地方:它太亮了,亮到你看不见底下。\n\n这一遍里,有些人从头到尾没怎么开口。有一个走遍了三张网、却不卖货也不打仗的旅人——伊本·白图泰,他会告诉你这张网从「中间」看是什么样。还有那个牵着我的骆驼、扛着盐板穿过沙漠、却连名字都没留下的人——他会告诉你,这张网从「最底下」看是什么样。等你换上他们的视角,他们会挑战你刚才听我说的每一句。\n\n最后,留一个东西给你。还记得我在开罗散出去、让你盯住的那枚金币吗?它换了手,又换了手,沿着商路走远了。\n\n换一个视角再走一遍这张网,你会从另一个人那里,再看见它一次。到那时,这枚金币对你的意思,可能就不一样了。',
        en: 'What you just heard was the voice of the richest man at the very top of this web.\n\nRemember: it is only one side. My talk of gold, of mosques, of the glory of being drawn onto the map, sounds golden and gleaming — and that is exactly what the view from the top makes easiest to forget: it is too bright, so bright you cannot see what lies beneath.\n\nIn this pass, some people barely spoke at all. There is a traveler who roamed all three networks yet neither sold goods nor fought wars — Ibn Battuta, who will tell you what this web looks like from the "middle." And there is the man who led my camels, who hauled salt slabs across the desert, yet left not even a name — he will tell you what this web looks like from the "very bottom." When you switch to their perspectives, they will challenge every sentence you just heard from me.\n\nAnd one last thing to leave with you. Do you remember the gold coin I scattered in Cairo, the one I told you to keep your eye on? It changed hands, and changed hands again, and traveled far down the trade routes.\n\nWalk this web once more from another perspective, and you will see it again, in someone else\'s hands. By then, what that coin means to you may be different.',
      },
      deliverGoal: 'N11 close/meta — 你听的是最顶端最有钱者一边 (太亮亮到看不见底下) + 还没听到: 走遍三网不卖货不打仗的旅人 Ibn Battuta 伊本·白图泰 (从「中间」看这张网) + 牵骆驼扛盐板穿沙漠没留下名字的人 (从「最底下」看) 会挑战你听的每句 + 暗示金币 motif 会从另一视角再见一次 (不直接解释 echo/到那时意思可能不一样)',
      engagementHook: '顶端的视角太亮了,亮到你看不见底下。你听完我这一边,最想去问那个走遍三网的旅人、那个牵我骆驼却没名字的人什么问题?',
      expectsRealAnswer: true,
    },
  ],
};

export var ibnBattutaLens = {
  id: 'ibn-battuta-mediator',
  name: 'Ibn Battuta',
  nameCn: '伊本·白图泰',
  role: 'witness-mediator',
  perspectiveTag: 'traveler-across-three-networks',
  icon: '🧭',
  description: {
    cn: '1304 年生于摩洛哥丹吉尔。1325 年,21 岁的他本只想去麦加朝觐一次,结果一走就是近 30 年、约十万公里,几乎踏遍三张网的每一个角落:北非、撒哈拉、西非的马里、东非斯瓦希里海岸、阿拉伯、波斯、印度、东南亚,一直到中国的泉州。他不卖货、不打仗,他做的是穿行、观察、记录。靠着受过训练的伊斯兰法学家身份,他无论走到哪个穆斯林商埠都被当成自己人。这一遍让你站在所有人中间,透过一个见证者的眼睛,看三张网其实是一张网。他的游记《Rihla》是后人了解这张网最珍贵的目击记录之一。',
    en: 'Born in 1304 in Tangier, Morocco. In 1325, the 21-year-old only meant to make the hajj to Mecca once, but he ended up traveling for nearly 30 years and about 100,000 kilometers, touching almost every corner of the three networks: North Africa, the Sahara, the Mali of West Africa, the East African Swahili coast, Arabia, Persia, India, Southeast Asia, all the way to Quanzhou in China. He did not sell goods or fight wars; what he did was travel, watch, and record. As a trained Islamic jurist, he was treated as one of their own in every Muslim trading town. This pass puts you in the middle of everyone, seeing through a witness\'s eyes that the three networks were really one network. His travel-book, the Rihla, is one of the most precious eyewitness records of this web.',
  },
  storyboard: [
    {
      id: 'trade-networks-ibn-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1325 年,摩洛哥的丹吉尔。我 21 岁,牵着一头骆驼,一个人上路了。\n\n我本来只打算做一件事:去麦加朝觐一次,然后回家。\n\n可这一走,就是近 30 年。等我回头,我已经走了大约十万公里——北非、撒哈拉、西非、东非的海岸、阿拉伯、波斯、印度、东南亚,最远到了中国的泉州。三张大网的每一个角落,我几乎都踏过。\n\n我是 Ibn Battuta(伊本·白图泰)。我不是商人,我不卖货;我不是将军,我不打仗。我这一生做的,就三件事:穿行、观察、记录。\n\n这一遍,你坐进我这个位置——一个站在所有人中间的见证者。你不属于任何一张网,可你哪张网都走过。透过我的眼睛,你会发现一件别人没机会发现的事:看起来分开的三张网,其实是一张。',
        en: 'In 1325, in Tangier, Morocco. I am 21, leading one camel, setting out alone.\n\nI meant to do only one thing: make the hajj to Mecca once, and then go home.\n\nBut this one journey lasted nearly 30 years. By the time I looked back, I had traveled about 100,000 kilometers — North Africa, the Sahara, West Africa, the East African coast, Arabia, Persia, India, Southeast Asia, as far as Quanzhou in China. Almost every corner of the three great networks, I had trodden.\n\nI am Ibn Battuta. I am not a merchant; I do not sell goods. I am not a general; I do not fight wars. What I did with my whole life was three things: travel, watch, and record.\n\nThis pass puts you in my seat — a witness standing in the middle of everyone. You belong to no one network, yet you have walked them all. Through my eyes you will find a thing others had no chance to find: the three networks that look separate are really one.',
      },
      deliverGoal: 'N1 hook — 1325 摩洛哥丹吉尔 21 岁牵骆驼独自上路 + 本只打算朝觐一次回家 + 结果走近 30 年约十万公里 (北非/撒哈拉/西非/东非海岸/阿拉伯/波斯/印度/东南亚/最远中国泉州/三网每个角落几乎都踏过) + Ibn Battuta 伊本·白图泰自我介绍 (不是商人不卖货/不是将军不打仗/一生三件事穿行观察记录) + 这一遍视角 (站所有人中间的见证者/不属任何网却都走过/透过眼睛发现三张网其实是一张)',
      engagementHook: '我本来只想去朝觐一次就回家,结果走了近 30 年、十万公里。一个不卖货、不打仗,只负责「看」的人,能比谁都更看清这张大网吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-ibn-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '你大概好奇:一个穷书生,凭什么能走遍半个地球?路上吃什么、住哪儿、谁保护我?\n\n答案,藏在我的身份里。我是个受过训练的伊斯兰法学家——我懂伊斯兰的法律(我后来还在印度的德里苏丹国当过法官)。\n\n这个身份,在这一时期是一张通行全网的「无形护照」。\n\n因为伊斯兰沿着商路扩散,从西非到东南亚,处处都有穆斯林的商埠和社群。我走到哪一座,当地的穆斯林都把我当自己人:管我饭、给我住处、送我礼物,甚至给我安排职位。\n\n你品一品这件事的分量:一套共享的信仰、一套共同的法律和语言,能让一个素不相识的陌生人,横穿半个地球,处处都有「自己人」。\n\n这不是我个人有多大本事。这是这张网共用的那套「操作系统」——也就是那套让陌生人也能一起做事的共同规矩:同一句 shahada(清真言),把分散在各地的陌生人,黏成了一张互相信任的网。我能走这么远,本身就是这套规矩在运转的活证据。',
        en: 'You may wonder: how could a poor scholar travel half the earth? What did he eat on the road, where did he sleep, who protected him?\n\nThe answer lies in my identity. I was a trained Islamic jurist — I knew Islamic law (I later even served as a judge in the Delhi Sultanate in India).\n\nIn this era, that identity was an invisible passport good across the whole web.\n\nBecause Islam spread along the trade routes, from West Africa to Southeast Asia, there were Muslim trading towns and communities everywhere. Every one I came to, the local Muslims treated me as one of their own: they fed me, gave me lodging, gave me gifts, even arranged posts for me.\n\nWeigh the meaning of this: a shared faith, a shared law and language, could let a complete stranger cross half the earth and find "his own people" everywhere.\n\nThis was not about how great I was personally. This was the shared "operating system" of the web — that same common set of rules that lets even strangers do things together: the same shahada (declaration of faith) glued strangers scattered across the lands into one web of mutual trust. That I could travel so far is itself living proof of these rules at work.',
      },
      deliverGoal: 'N2 setup — 穷书生凭什么走遍半地球 (路上吃住谁保护) + 答案藏在身份: 受训练的伊斯兰法学家懂伊斯兰法律 (后来印度德里苏丹国当过法官) + 这身份=通行全网的无形护照 + 因伊斯兰沿商路扩散处处有穆斯林商埠社群 + 走到哪当地穆斯林当自己人 (管饭/住处/礼物/职位) + 分量: 共享信仰+共同法律语言让陌生人横穿半地球处处有自己人 + 不是个人本事是网共用的「操作系统」(统一比喻+白话锚点: 让陌生人也能一起做事的共同规矩/同一句 shahada 把陌生人黏成互信的网/我能走这么远是这套规矩运转活证据)',
      engagementHook: '一套共享的信仰,就像一张「无形护照」,让我一个陌生人横穿半个地球、处处有「自己人」。今天的世界,有没有什么东西也在扮演这种「无形护照」的角色?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-ibn-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '在我动身往东之前,先带你看清,我即将走进的,是怎样三张网。\n\n第一张,陆上的丝绸之路。从中国西北,穿过中亚一座座绿洲城市,骆驼商队一站一站接力,把货送到地中海。隔一段路就有一座 caravanserai(商旅客栈)——带院墙的旅店,让商队和骆驼过夜、补水、做交易。13 世纪蒙古人建立的大一统(Pax Mongolica,蒙古和平),让这条路安全得空前。\n\n第二张,印度洋季风贸易圈。这是这一时期体量最大的海上网络。它靠 monsoon(季风)——半年往东吹、半年往西吹,像一张「风的时刻表」,把东非、阿拉伯、印度、东南亚、中国串成一张海网。\n\n第三张,跨撒哈拉黄金-盐路。骆驼穿过世界最大的沙漠,把西非的黄金和北边的盐对换。\n\n三张网,各有各的脾气、各有各的技术。它们驮的货也不一样:丝路上的骆驼,驮的是高价、轻便的奢侈品——丝绸、瓷器;印度洋的大海船,才扛得动笨重的大宗货。中介也不同——丝路靠中亚商人接力,印度洋靠港口里多国的侨商。可我一路走下来,慢慢看出一件事:它们其实在彼此咬合,接成了一整块。',
        en: 'Before I set out east, let me show you clearly the three networks I am about to walk into.\n\nThe first, the overland Silk Roads. From northwest China, through one oasis city after another in Central Asia, camel caravans relayed leg by leg, carrying goods to the Mediterranean. Every so often there was a caravanserai (a walled roadside inn) where caravans and camels rested, watered, and traded. The Mongol-built unity of the 1200s (the Pax Mongolica, the Mongol Peace) made this route safer than ever.\n\nThe second, the Indian Ocean monsoon trade. This was the largest sea network of the era. It ran on the monsoon — blowing east for half the year and west for the other half, like a "wind timetable," linking East Africa, Arabia, India, Southeast Asia, and China into one sea web.\n\nThe third, the Trans-Saharan gold-salt road. Camels crossed the world\'s largest desert, exchanging West Africa\'s gold for salt from the north.\n\nThree networks, each with its own temper, its own technology. What they carried differed too: the camels of the Silk Roads carried high-value, light luxuries — silk, porcelain; only the great ships of the Indian Ocean could bear the heavy, bulk goods. The middlemen differed as well — the Silk Roads relayed through Central Asian merchants, the Indian Ocean through the many nations of diaspora traders in the ports. Yet as I traveled, I slowly saw one thing: they were really interlocking, joined into one whole.',
      },
      deliverGoal: 'N3 setup (三网总览 — mediator lens 的结构地图) — 动身前看清三张网 + 第一张陆上丝绸之路 (中国西北穿中亚绿洲城市骆驼商队接力到地中海/caravanserai 商旅客栈带院墙旅店过夜补水交易/13 世纪 Pax Mongolica 蒙古和平让路空前安全) + 第二张印度洋季风贸易圈 (本期体量最大海上网络/monsoon 季风半年东半年西像风的时刻表/串东非阿拉伯印度东南亚中国) + 第三张跨撒哈拉黄金-盐路 (骆驼穿最大沙漠/西非黄金换北边盐) + 三网对比轴 (丝路驮高价轻便奢侈品丝绸瓷器/印度洋大海船扛笨重大宗货/中介不同: 丝路靠中亚商人印度洋靠港口多国侨商 — 给学生可迁移到 DBQ comparison 的骨架) + 三网各有脾气技术但彼此咬合接成一整块',
      engagementHook: '陆上的骆驼、海上的季风、沙漠里的黄金-盐——三张脾气完全不同的网。它们到底是各走各的三张网,还是其实早就接成了一整块?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-ibn-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你来到了东非的斯瓦希里海岸(Swahili coast),走进一座叫 Kilwa(基尔瓦)的城。\n\n你站在港口,看见的景象让你愣住:这座非洲海岸上的城,虔诚、富庶、规划得井井有条,建筑考究。你忍不住在心里写下一句——这是你见过「最美、规划最好的城市之一」。\n\n你坐在这座城里想:你从摩洛哥一路走来,见过开罗、见过麦加,可这座最让你惊艳的城,竟在非洲东海岸。\n\n这一刻你心里那个根深蒂固的念头,被狠狠晃了一下:这一时期世界上最先进、最富庶的城市,很多根本不在你以为的地方。它们在东非、在印度、在中亚。\n\n你愿不愿意承认:你来之前心里那张「谁更先进」的地图,可能从一开始就画错了?\n\n(你确实在游记里留下过「最美城市之一」这句评价;「站在港口愣住」的画面,是这一遍替你具象出来的。)',
        en: 'Now you are me.\n\nYou have come to the East African Swahili coast, and walked into a city called Kilwa.\n\nYou stand at the harbor, and what you see stops you short: this city on the African coast is devout, wealthy, laid out in good order, its buildings fine. You cannot help writing in your heart — this is one of the "most beautiful and well-built cities" you have ever seen.\n\nSitting in this city, you think: you have walked all the way from Morocco, you have seen Cairo, you have seen Mecca, and yet the city that most amazed you turns out to be on the east coast of Africa.\n\nIn this moment a deep-rooted notion in you is given a hard shake: many of the most advanced, richest cities of this era are simply not in the places you assumed. They are in East Africa, in India, in Central Asia.\n\nAre you willing to admit it: the map in your head of "who is more advanced," drawn before you came — might it have been wrong from the very start?\n\n(You really did leave the line "one of the most beautiful cities" in your travel-book; the image of "standing at the harbor, stopped short" is what this pass draws for you.)',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 来到东非斯瓦希里海岸 Swahili coast 走进 Kilwa 基尔瓦 + 站港口愣住 (非洲海岸城虔诚富庶规划井井有条建筑考究) + 心里写下「最美规划最好的城市之一」+ 从摩洛哥走来见过开罗麦加最惊艳的城竟在非洲东海岸 + 根深蒂固念头被晃 (最先进最富庶的城很多不在你以为的地方/在东非印度中亚) + 自问愿不愿承认来之前那张「谁更先进」的地图一开始就画错了 + anti-fab 括号缩短后移到节尾 (确实留下「最美城市之一」评价/站港口愣住画面是这遍具象的 — 不打断沉浸峰值)',
      engagementHook: '走了大半个世界,最让我惊艳的城,竟在非洲东海岸。如果「世界上最先进的地方」根本不在你以为的那里,你愿意承认自己心里那张地图,可能从一开始就画错了吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-ibn-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '离开 Kilwa,我继续往东。我要带你看一件事——这张海网,是被一样看不见的东西推着走的:风。\n\n印度洋上,风一年只往两个方向各吹半年。大约 4 到 9 月,西南季风把船往东北吹,去印度、去中国;10 月到第二年 3 月,东北季风再把船往西南吹,回阿拉伯、回东非。\n\n这就是 monsoon(季风)的「时刻表」。你想走,就得掐着风走。错过了这一季的风,你就得在异乡的港口,住上整整半年,等下一班。\n\n你能想象吗?成百上千的商人,被同一阵风,按在同一座港口里,一住几个月。\n\n奇妙的事就这么发生了:等风的几个月里,陌生人变成了邻居。阿拉伯人、波斯人、印度人、华人,在异乡的港口扎下根、通婚、建清真寺,形成一个个 diaspora community(侨民社群)。\n\n你看:一阵自然的风,竟然造出了一座座多语言、多信仰的港口城市。环境,在悄悄地塑造人。',
        en: 'Leaving Kilwa, I go on east. I want to show you one thing — this sea web is pushed along by something invisible: the wind.\n\nOn the Indian Ocean, the wind blows in each of only two directions for half the year. About April to September, the southwest monsoon blows ships northeast, toward India and China; October to the next March, the northeast monsoon blows them back southwest, toward Arabia and East Africa.\n\nThis is the monsoon\'s "timetable." If you want to sail, you must sail by the wind. Miss this season\'s wind, and you must live a full half year in a foreign port, waiting for the next.\n\nCan you imagine it? Hundreds and thousands of merchants, pinned by the same wind into the same port, staying for months.\n\nAnd so a wondrous thing happens: in the months of waiting for the wind, strangers become neighbors. Arabs, Persians, Indians, and Chinese put down roots in foreign ports, married, built mosques, and formed diaspora communities (settlements of merchants in foreign ports).\n\nYou see: a natural wind actually created multilingual, multi-faith port cities. The environment, quietly, was shaping people.',
      },
      deliverGoal: 'N5 story (环境塑造历史 — AP causation) — 离开 Kilwa 往东 + 海网被看不见的风推着走 + 印度洋风一年只往两方向各吹半年 (约 4-9 月西南季风往东北去印度中国/10 月-次年 3 月东北季风往西南回阿拉伯东非) + monsoon 季风时刻表 (掐着风走/错过这季住异乡港口半年等下一班) + 成百上千商人被同一阵风按在同一港口住几个月 + 奇妙: 等风几个月陌生人变邻居 (阿拉伯/波斯/印度/华人扎根通婚建清真寺=diaspora community 侨民社群) + 一阵自然的风造出多语言多信仰港口城市/环境悄悄塑造人',
      engagementHook: '一阵风,把成百上千的商人按在同一座港口里住上半年——等风的日子,硬是把陌生人等成了邻居。一个纯自然的现象(风),怎么会造出一座座多语言、多信仰的城市?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-ibn-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '在印度西海岸一座叫 Calicut(卡利卡特)的大港,我停了下来。这里是印度洋上最忙的换手城市之一,胡椒、香料从这里发往全世界。\n\n就在这座港口的市集上,我看见了那枚金币。\n\n它在一个商人手里。我认得这种金币的成色——它来自西非。这一刻我心里掠过一个念头:几年前,马里的曼萨·穆萨带着大批黄金去朝觐,沿途散金,搅动了开罗的物价。说不定,我眼前这枚金币,就是从那一路黄金里流出来的。\n\n我看着它在卡利卡特的市集上,从一只手,递到另一只手,去换一袋胡椒。\n\n那一刻我忽然懂了:撒哈拉边上散出的金,和印度海岸上买卖的胡椒,看似隔着千山万水,其实在同一张网上。三张网,在这枚金币身上,接成了一张。\n\n(我无法证明它就是同一枚——这是顺着金币让你想象的一条线;但西非的黄金,这一时期确实通过这张网流向了远方,是真的。)',
        en: 'At a great port on India\'s west coast called Calicut, I stopped. This was one of the busiest hand-off cities on the Indian Ocean; pepper and spices were sent from here to all the world.\n\nRight there in the port\'s market, I saw that gold coin.\n\nIt was in a merchant\'s hand. I knew the make of such a coin — it came from West Africa. In that moment a thought crossed my mind: a few years before, Mansa Musa of Mali had taken great quantities of gold on his pilgrimage, scattering it along the way and stirring Cairo\'s prices. Perhaps this very coin before my eyes had flowed out from that road of gold.\n\nI watched it, in the market of Calicut, pass from one hand to another, to trade for a sack of pepper.\n\nIn that moment I suddenly understood: the gold scattered at the edge of the Sahara, and the pepper bought and sold on the coast of India, which seemed separated by ten thousand mountains and rivers, were really on the same web. The three networks, in this one coin, joined into one.\n\n(I cannot prove it was the same one — this is a line this pass lets you imagine along the coin; but West African gold did, in this era, flow far away through this web, and that is true.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (金币 motif 中段见证) — 印度西海岸 Calicut 卡利卡特大港停下 (印度洋最忙换手城之一/胡椒香料发往全世界) + 港口市集看见那枚金币在一个商人手里 + 认得成色来自西非 + 念头: 几年前 Mansa Musa 散金搅动开罗物价说不定这枚就从那路黄金流出 + 看它在卡利卡特市集换手换一袋胡椒 + 忽然懂: 撒哈拉散的金与印度海岸的胡椒看似隔千山万水其实同一张网/三张网在这枚金币身上接成一张 + anti-fab 括号移到节尾 (无法证明是同一枚/顺金币想象的线/但西非黄金确通过这张网流向远方是真的 — 不打断沉浸峰值)',
      engagementHook: '撒哈拉边上散出的金,和印度海岸上买卖的胡椒,看似隔着千山万水——可它们其实在同一张网上。当你亲眼看见一枚西非金币在印度港口换胡椒,你才真正明白「三张网其实是一张」是什么意思。',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-ibn-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '从印度再往东,我登上了 dhow——印度洋上的那种海船。\n\n你摸一摸这船的船板,会发现一件怪事:它们不是用铁钉钉起来的,是用椰壳搓成的绳子,一块一块「缝」起来的。船头挂的是 lateen sail(三角帆),这种帆让船能逆着风,「之」字形地往前走,不必死等顺风。\n\n再低头看船底舱,你会看见这趟航行真正的引擎,不是我,也不是船长,而是船上那些水手——他们的手掌被椰壳绳磨出厚茧,半年只能跟着一个方向的季风走。\n\n这就是我这一路走下来,最不愿意、却不得不说的一件事。\n\n我的游记,会写下基尔瓦多美、卡利卡特多忙、曼萨·穆萨多富。可这些水手、这些牵骆驼的脚夫——是他们的手和脚,把整张网撑了起来。他们当中,还有不少根本不是雇工,而是被锁着、当作货物买卖的被奴役者。\n\n而他们,几乎没有一个,在我或任何人的笔下,留下过自己的名字。',
        en: 'From India I sailed farther east, boarding a dhow — that kind of ship of the Indian Ocean.\n\nFeel the planks of this ship and you find a strange thing: they are not nailed with iron, but "sewn" together, plank by plank, with rope twisted from coconut husk. At the bow hangs a lateen sail (a triangular sail), which lets the ship go forward against the wind, zigzagging, instead of waiting helplessly for a tailwind.\n\nLook down into the hold, and you see the real engine of this voyage: not me, not the captain, but the sailors on board — their palms worn thick with calluses from the coconut rope, able to sail only with one direction of the monsoon for half a year.\n\nThis is the thing, of all I saw on this road, I least want to say, yet must.\n\nMy travel-book will write down how beautiful Kilwa was, how busy Calicut was, how rich Mansa Musa was. But these sailors, these camel-leading porters — it was their hands and feet that held up the whole web. And not a few of them were not hired workers at all, but enslaved people chained and bought and sold as goods.\n\nAnd of them, almost not one, in my pen or anyone\'s, ever left his own name.',
      },
      deliverGoal: 'N7 story (mediator 点出底层 — 为 receiving-end 视角铺路) — 印度往东登上 dhow 印度洋海船 + 船板怪事 (不用铁钉/椰壳搓绳一块块「缝」起来) + 船头 lateen sail 三角帆 (逆风之字前进不必死等顺风) + 看船底舱真正引擎不是我不是船长是水手 (手掌椰壳绳磨厚茧/半年只能跟一个方向季风走) + 最不愿却不得不说 + 游记会写基尔瓦多美卡利卡特多忙 Musa 多富 + 但水手脚夫的手和脚撑起整张网 + 不少不是雇工是被锁当货物买卖的被奴役者 + 几乎没一个在任何人笔下留下名字',
      engagementHook: '我的游记写满了城市多美、皇帝多富,可真正把整张网撑起来的,是船底舱那些手上磨满老茧、却连名字都没留下的水手。当一个见证者只记得「了不起的人」,他到底漏掉了谁?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-ibn-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我一路向东的终点,是中国。我到了一座港口城市,叫泉州。\n\n你跟着我走进泉州港,会被眼前的景象震住:这里挤满了来自各地的海船,是当时世界上最大、最繁忙的港口之一。码头上堆着等着上船的瓷器和丝绸,街上走着说各种语言的外国商人。\n\n我得诚实地告诉你我心里的感受:我走了大半个地球,以为见过最繁华的城市了。可站在泉州港,我得承认,这里的繁忙一点不输给我见过的任何地方。\n\n你也许以为,中国是孤立在世界最东边的一块。我亲眼看见的,恰恰相反:中国是这张大网上,跳动得最有力的一个引擎。中国的瓷器,顺着我刚刚走过的那条印度洋海路,一路卖到了东非。\n\n但你别误会我的意思。我没有说中国是「网络的中心」。我亲眼一座座走过来——没有哪一座城,觉得自己是在给别人打下手。每一座都自认是世界的一个中心,谁也不把谁当成唯一的那个圆心。',
        en: 'The end of my long road east was China. I came to a port city called Quanzhou.\n\nFollow me into the port of Quanzhou and you will be struck by what you see: it was crowded with ships from every land, one of the largest and busiest ports in the world at the time. On the docks were piled porcelain and silk waiting to be loaded; in the streets walked foreign merchants speaking every kind of language.\n\nI have to tell you honestly what I felt: I had walked half the earth and thought I had seen the most flourishing cities there were. Yet standing at the port of Quanzhou, I had to admit, its bustle was second to nowhere I had seen.\n\nYou might think China was an isolated block at the far east of the world. What I saw with my own eyes was exactly the opposite: China was one of the most powerfully beating engines of this great web. Chinese porcelain, along the very Indian Ocean sea route I had just traveled, was sold all the way to East Africa.\n\nBut do not mistake my meaning. I did not say China was "the center of the network." I walked through them one city at a time with my own eyes — and not one of them felt it was working beneath another. Each took itself for a center of the world, and no one treated any other as the single hub.',
      },
      deliverGoal: 'N8 story + 同时代中国 (§8 中国桥, mediator 亲眼见证 — 真中国段落可用中国术语) — 向东终点中国到泉州港 + 走进震住 (挤满各地海船/世界最大最繁忙港口之一/码头堆等上船瓷器丝绸/街上说各种语言外国商人) + 诚实感受 (走大半地球以为见过最繁华/站泉州港承认繁忙不输任何地方) + 反直觉: 不是孤立在最东边/恰相反中国是网上跳动最有力引擎之一/瓷器顺印度洋海路卖到东非 + Rule 0 收口 (见证者口吻去模板化, 不复用地名清单): 没说中国是中心/我亲眼一座座走过没有哪座觉得在给别人打下手/每座都自认是世界的一个中心谁也不把谁当唯一圆心',
      engagementHook: '我走了大半个地球,到了最东边的泉州,以为这是「世界的尽头」——结果它是这张网上跳动得最有力的引擎之一。可它也不是唯一的中心。一张「有很多个中心」的网,和我们习惯想的「有个老大」的世界,差在哪?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-ibn-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我走遍三张网,看见的是它最辉煌的样子。可这张网最黑的一面,在我快走完的时候,沿着我走过的同一条路,来了。\n\n1347 到 1351 年,一场大瘟疫席卷了欧亚非。后人叫它 Black Death(黑死病)。\n\n它很可能起于中亚草原的啮齿动物身上。然后呢?它搭上了蒙古的驿路和商队,再换乘印度洋上的海船,沿着我刚刚走过的那张贸易网,一路扑向欧亚非——几年之内,可能夺走了欧洲三分之一的人口。\n\n你停下来想一想这件事的可怕:让这张网运转的一切——安全的丝路、季风上的海船、连通各地的港口——同样的通道,这一次,运的不是丝绸和黄金,是死亡。\n\n让世界变富的那张网,转眼就成了让世界死亡的那张网。\n\n这是我用一生走出来、却最不愿意承认的一课:连通,从来不只带来好东西。同一张让黄金、信仰、知识流动起来的网,也让看不见的瘟疫,流动得一样快。\n\n可有件事我得说清:瘟疫过后,网没有停,只是换了主角继续跑。也正是这张利润惊人的旧网,让后来的欧洲人眼红得想绕开我们这些中间商,自己去接一条通往东方的入口——这就是我死后那场「大航海」的直接前因。',
        en: 'I walked all three networks and saw them at their most magnificent. But the darkest face of this web came, as I was nearly finished, along the same road I had walked.\n\nFrom 1347 to 1351, a great plague swept across Eurasia and Africa. Later people called it the Black Death.\n\nIt very likely began on rodents of the Central Asian steppe. And then? It rode the Mongol relay roads and caravans, transferred to ships on the Indian Ocean, and along the very trade web I had just traveled, rushed across Eurasia and Africa — within a few years, perhaps taking a third of Europe\'s people.\n\nStop and think how terrible this is: everything that made this web run — the safe Silk Road, the ships on the monsoon, the ports linking all lands — the same channels, this time, carried not silk and gold, but death.\n\nThe web that made the world rich became, in a moment, the web that made the world die.\n\nThis is the lesson I walked out across a lifetime and least want to admit: connection never brings only good things. The same web that set gold, faith, and knowledge flowing also let an unseen plague flow just as fast.\n\nBut one thing I must make clear: after the plague, the web did not stop — it only changed its lead players and ran on. And it was exactly this old web, with its astonishing profits, that later made Europeans burn to bypass middlemen like us and reach for an entry to the East of their own — this is the direct cause of the "Age of Exploration" that came after I died.',
      },
      deliverGoal: 'N9 story (连通的代价 — 黑死病) — 走遍三网看见最辉煌/最黑一面在快走完时沿同一条路来 + 1347-1351 大瘟疫席卷欧亚非 Black Death 黑死病 + 很可能起于中亚草原啮齿动物 + 搭蒙古驿路商队再换印度洋海船沿刚走过的贸易网扑向欧亚非/几年夺走欧洲可能三分之一人口 + 可怕: 让网运转的一切 (安全丝路/季风海船/连通港口) 同样通道这次运的不是丝绸黄金是死亡 + 让世界变富的网转眼成让世界死亡的网 + 一生最不愿承认的课: 连通从不只带好东西/同一张让黄金信仰知识流动的网也让瘟疫流动得一样快 + CCOT + 大航海前因钩子 (瘟疫过后网没停只换主角继续跑/正是这张利润惊人的旧网让欧洲人想绕开中间商自己接一条通往东方的入口=死后大航海的直接前因 — AP CED causes of maritime exploration / continuity-change)',
      engagementHook: '让世界变富的那张网,转眼就成了让世界死亡的那张网——同样的路,这次运的不是丝绸和黄金,是瘟疫。如果「连起来」既能带来繁荣,又能带来灾难,「连通」到底是不是一件好事?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-ibn-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,我想留给你一个我自己都没答案的真问题:连起来,到底是好事,还是坏事?两种说法都站得住,你来称。\n\n一种说法:连通是这一时期最了不起的成就。三张网把旧大陆缝成了一整块,黄金、瓷器、指南针、数字、作物、信仰,从没像这样在人类之间流动过。撒马尔罕、卡利卡特、基尔瓦、廷巴克图、泉州——一座座最富、最有学问的城市,正是连通的果实。我能走遍半个地球处处有「自己人」,本身就是这份连通的礼物。\n\n另一种说法:连通的代价,黑得让人不敢直视。同一张网,把黑死病送遍了欧亚非,几年内夺走的人命比任何战争都多;同一张网,把被奴役的人锁着运过沙漠、装上海船,当成货物买卖。连通的红利,流向了曼萨·穆萨那样的顶端;连通的代价,压在了无名水手和被奴役者的身上。\n\n这两边不是「连通好但有点副作用」。是同一张网的两张脸——既是人类第一次握手,也是瘟疫和锁链第一次跑得这么远。\n\n这个问题,争了几百年也没人能一锤定音。你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Having walked my whole life, I want to leave you a real question I have no answer to myself: being connected — is it a good thing, or a bad thing? Both views stand. You do the weighing.\n\nOne view: connection was the most magnificent achievement of this era. The three networks stitched the Old World into one whole; gold, porcelain, the compass, numerals, crops, and faith flowed among humankind as never before. Samarkand, Calicut, Kilwa, Timbuktu, Quanzhou — these richest, most learned cities were the very fruit of connection. That I could walk half the earth and find "my own people" everywhere was itself a gift of this connection.\n\nThe other view: the cost of connection is too dark to look at straight. The same web sent the Black Death across all of Eurasia and Africa, taking more lives in a few years than any war; the same web carried enslaved people in chains across the desert and onto ships, bought and sold as goods. The reward of connection flowed to the top, to men like Mansa Musa; the cost of connection pressed down on nameless sailors and the enslaved.\n\nThese are not "connection was good but with a few side effects." They are two faces of one web — both humankind\'s first handshake, and the first time plague and chains ran this far.\n\nThis question has been argued for centuries, and no one has settled it for good. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 连起来到底好还是坏 + 一种说法 (连通是最了不起成就/三网缝旧大陆成一整块/黄金瓷器指南针数字作物信仰空前流动/撒马尔罕卡利卡特基尔瓦廷巴克图泉州是连通果实/我处处有自己人是连通礼物) + 另一种说法 (代价黑得不敢直视/同一张网送黑死病遍欧亚非夺命比任何战争多/锁着运被奴役者当货物/红利流向 Musa 那样顶端代价压无名水手被奴役者) + 同一张网两张脸 (人类第一次握手 vs 瘟疫锁链第一次跑这么远) + 元话术去 AP jargon (这问题争了几百年也没人能一锤定音 — 去掉「AP 老师」, 三 lens 措辞不同) + 想 30 秒两边都站得住',
      engagementHook: '同一张网,既是人类第一次握手,也是瘟疫和锁链第一次跑这么远。连通的红利流向顶端,代价压在底层——「连起来」到底是好事还是坏事?你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'trade-networks-ibn-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的,是一个站在所有人中间的见证者的声音。\n\n请记住:见证者也有他的限制。我走遍了三张网,可我始终是个有钱、有身份、被处处当成「自己人」的法学家。我笔下的世界,是从一双受优待的眼睛里看出去的——我看见了城市的美、港口的繁华,却很难真正钻进那个扛盐板、爬桅杆的人的身体里。\n\n这一遍里,有两个人,我替他们说了几句,可他们自己一直没真正开口。\n\n一个是曼萨·穆萨——这张网最顶端的赢家。在他眼里,这张网是黄金、声望、被画进地图的荣耀。另一个,是那个牵着骆驼、爬着桅杆、连名字都没留下的人——在他眼里,这张网是裂开的嘴唇、磨破的手掌,和一辈子也换不来的自由。等你换上他们的视角,他们会挑战我这双「优待的眼睛」看到的每一样东西。\n\n最后,还记得我在卡利卡特市集上看见的那枚西非金币吗?我看着它换了一袋胡椒。\n\n换一个视角再走一遍这张网,你会从最底下那个人那里,再看见它一次——换上他的眼睛,这枚金币,又是另一个完全不同的故事。',
        en: 'What you just heard was the voice of a witness standing in the middle of everyone.\n\nRemember: a witness has his limits too. I walked all three networks, yet I was always a jurist — wealthy, of standing, treated everywhere as "one of their own." The world under my pen was seen through a pair of favored eyes — I saw the beauty of cities, the bustle of ports, yet I could hardly truly climb inside the body of the man hauling salt slabs and climbing the mast.\n\nIn this pass, there are two people for whom I said a few words, but who never truly spoke for themselves.\n\nOne is Mansa Musa — the winner at the very top of this web. In his eyes, this web is gold, fame, the glory of being drawn onto the map. The other is the man who led the camels, climbed the masts, and left not even a name — in his eyes, this web is cracked lips, worn-through palms, and a freedom he could never trade for in a whole lifetime. When you switch to their perspectives, they will challenge every single thing my "favored eyes" saw.\n\nAnd finally, do you remember that West African gold coin I saw in the market of Calicut? I watched it trade for a sack of pepper.\n\nWalk this web once more from another perspective, and you will see it again, from the man at the very bottom — and through his eyes, this coin is yet another, wholly different story.',
      },
      deliverGoal: 'N11 close/meta — 你听的是站所有人中间见证者一边 + 见证者也有限制 (始终是有钱有身份处处被当自己人的法学家/笔下世界从一双受优待的眼睛看出去/看见城市美港口繁华却难钻进扛盐爬桅杆的人身体) + 还没听到: Mansa Musa 这张网最顶端赢家 (眼里是黄金声望画进地图荣耀) + 牵骆驼爬桅杆没留下名字的人 (眼里是裂开的嘴唇磨破的手掌一辈子换不来的自由) 会挑战优待的眼睛看到的每样东西 + 暗示金币 motif 会从最底下那人那里再见一次 (换上他的眼睛这枚金币又是另一个完全不同的故事/纯跨视角指针不复述「从没拥有」— 情感重锤独留给 carrier-n6/不直接解释 echo)',
      engagementHook: '我看遍三张网,可我始终是用一双「受优待的眼睛」在看。你听完我这个见证者的一边,最想去问那个顶端的皇帝、那个最底下没名字的人什么问题?',
      expectsRealAnswer: true,
    },
  ],
};

export var carrierLens = {
  id: 'carrier-on-the-route',
  name: 'The Nameless Carrier',
  nameCn: '路上没有名字的人',
  role: 'receiving-end',
  perspectiveTag: 'porter-and-sailor-who-held-up-the-web',
  icon: '🐫',
  description: {
    cn: '1200 到 1450 年间,在撒哈拉的商队里牵骆驼、扛盐板,或在印度洋的 dhow 上爬桅杆的人。他没有名字，因为历史几乎没给这些人留下名字,而这恰恰是问题本身。他是这一遍刻意虚构的桥接人物,身份完全写实:把「撒哈拉脚夫」和「印度洋水手」两个真实存在过的身影,合并成一个,让你能站进最底层、最没有名字的位置。曼萨·穆萨的黄金、卡利卡特的胡椒、撒马尔罕的丝绸，每一寸位移,都是他这样的人用脚、用手、用命挪过去的。',
    en: 'Between 1200 and 1450, a man leading camels and hauling salt slabs in a Saharan caravan, or climbing the mast on a dhow on the Indian Ocean. He has no name - because history left these people almost none, and that is exactly the point. He is a deliberately invented bridging character, with a fully real role: merging two figures that truly existed, the "Saharan porter" and the "Indian Ocean sailor," into one, so you can stand in the lowest, most nameless position. Mansa Musa\'s gold, Calicut\'s pepper, Samarkand\'s silk - every inch they moved was moved by people like him, with their feet, their hands, their lives.',
  },
  storyboard: [
    {
      id: 'trade-networks-carrier-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '天还没亮,我已经牵着骆驼,走在撒哈拉的沙子上了。\n\n我的嘴唇是裂的,被沙漠的风吹的。我知道前面哪片沙丘后面有一口井,也知道哪一段路,前几年埋过人。\n\n我没有名字给你。不是我不肯说,是没人替我记下来。曼萨·穆萨有名字,伊本·白图泰有名字,可我们这些在路上牵骆驼、扛盐、爬桅杆的人,几乎没有一个把名字留下来。\n\n这件事本身,你先记住——它不是顺带提一句,它就是问题本身。\n\n(我得对你坦白:我是这一遍刻意「拼」出来的一个人。历史上真有撒哈拉的脚夫,也真有印度洋的水手,但没有哪一份史料,完整记下过他们当中某一个人的一生。我把这两个真实的身影,合成了一个,好让你能站进来。)\n\n这一遍,你站在最底下、最没名字的这一格,看一件事:这张让全世界变富的大网,到底是谁,用身体把它撑起来的。',
        en: 'It is not yet light, and I am already on the sands of the Sahara, leading my camel.\n\nMy lips are cracked, split by the desert wind. I know which dune ahead has a well behind it, and I know which stretch of road buried men a few years back.\n\nI have no name to give you. Not because I will not say it, but because no one wrote it down for me. Mansa Musa has a name, Ibn Battuta has a name, but of us who led camels, hauled salt, and climbed masts on the road, almost not one left a name behind.\n\nKeep this thing itself in mind — it is not a passing remark, it is the problem itself.\n\n(I have to be frank with you: I am a man this pass deliberately "pieced together." There really were Saharan porters in history, and really were Indian Ocean sailors, but no record ever kept the whole life of any one of them. I merged these two real figures into one, so that you can step in.)\n\nThis pass, you stand in the lowest, most nameless square, and watch one thing: this great web that made the whole world rich — just who was it that held it up with their body?',
      },
      deliverGoal: 'N1 hook — 天不亮牵骆驼走撒哈拉沙子 + 嘴唇裂被风吹/知道哪片沙丘后有井哪段路埋过人 + 没名字 (没人替我记下来/Musa 有名 Battuta 有名/牵骆驼扛盐爬桅杆的几乎没一个留下名字) + 这件事本身记住 (不是顺带提一句是问题本身) + anti-fab 透明标注 (刻意拼出来的人/真有撒哈拉脚夫真有印度洋水手但没史料完整记下某一个人一生/把两个真实身影合成一个让你站进来) + 这一遍从最底没名字看「这张让全世界变富的网到底是谁用身体撑起来的」',
      engagementHook: '曼萨·穆萨有名字,伊本·白图泰有名字,可牵骆驼、扛盐、爬桅杆的我们,几乎没有一个把名字留下来。一个人连名字都没被记下,你能想象这意味着什么吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-carrier-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我每天的活,你才懂这张网到底压在谁身上。\n\n我扛的,是盐。整块整块的盐板,从撒哈拉北边的盐矿,要一路运到南边去换黄金。盐板又重又硌,绳子勒进肩膀,一天下来,肩上是一道一道的血印。\n\n你可能听人说过:在沙漠最深处,盐能贵到跟黄金一样按重量换。听起来,盐金贵得像宝贝。\n\n可你猜,扛盐的我,能分到多少?\n\n几乎什么都分不到。我换来的,是勉强活下去的一口饭、一口水。那盐换金的暴利,是商队主人的,是城里中间人的,是曼萨·穆萨那样的人的。\n\n这就是这张网最不公平的地方:越往上,赚得越多,手却越干净;越往下,出的力越重,拿的越少。我用整个身体扛动的财富,没有一克,真正属于我。\n\n你站在我这个位置,第一件要看清的事,就是这个。',
        en: 'First let me tell you my daily work, so you understand just who this web presses down on.\n\nWhat I haul is salt. Whole slabs of salt, from the salt mines of the northern Sahara, must be carried all the way south to trade for gold. The salt slabs are heavy and jagged; the rope cuts into my shoulders, and by the end of a day there are line after line of blood marks on them.\n\nYou may have heard someone say: in the deepest desert, salt could be traded by weight, almost like gold. It sounds as if salt were precious as treasure.\n\nBut guess how much of it I, who haul the salt, get to keep?\n\nAlmost nothing. What I get is barely enough food and water to stay alive. That huge profit of trading salt for gold belongs to the caravan\'s owner, to the middlemen in the city, to men like Mansa Musa.\n\nThis is the most unfair thing about this web: the higher up, the more you earn and the cleaner your hands; the lower down, the heavier you labor and the less you take. The wealth I haul with my whole body — not one gram of it truly belongs to me.\n\nStanding where I stand, the first thing you must see clearly is this.',
      },
      deliverGoal: 'N2 setup (底层的不公平) — 每天的活 + 扛盐 (整块盐板从撒哈拉北盐矿运南边换黄金/又重又硌/绳子勒肩一道道血印) + 人们常说沙漠最深处盐能贵到按重量换金听起来盐金贵 (修辞非字面率) + 但扛盐的我能分多少=几乎什么都分不到 (勉强活下去一口饭一口水/盐换金的暴利是商队主人城里中间人 Musa 那样人的) + 这张网最不公平: 越往上赚越多手越干净/越往下力越重拿越少/我用身体扛动的财富没一克真正属于我 + 站这位置第一件要看清的事',
      engagementHook: '盐换金的暴利,全归了上面的人;扛盐的我,只换来勉强活命的一口饭。我用整个身体扛动的财富,没有一克真正属于我——这张网,凭什么这么分?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-carrier-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我有两副身体。这一段,我换上另一副给你看。\n\n离开撒哈拉,到了印度洋的海岸,我成了一艘 dhow 上的水手。\n\n这种船很特别:船板不是用铁钉钉的,是用椰壳搓成的绳子,一块一块「缝」起来的。所以我的手掌,常年泡在海水里、磨在椰壳绳上,结着一层厚得像皮革的茧。\n\n海上没有路标。我靠看星星、靠闻风的方向认路。而且我不能想走就走:印度洋的季风,半年往东、半年往西,我只能跟着风走。错过一季的风,就得在异乡的港口,干等半年。\n\n撒哈拉上扛盐的我,印度洋上爬桅杆的我——是同一种人。一个在沙里,一个在海上,都用身体,替别人把货,从世界的一头,挪到另一头。\n\n(船是椰壳绳缝的、水手靠星象风向认路——这些是真的;我这双手的具体感受,是替你想象贴近的。)',
        en: 'I have two bodies. In this part, I put on the other one to show you.\n\nLeaving the Sahara, on the coast of the Indian Ocean, I become a sailor on a dhow.\n\nThis kind of ship is unusual: its planks are not nailed with iron, but "sewn" together, plank by plank, with rope twisted from coconut husk. So my palms, soaked in seawater year-round and worn on the coconut rope, are crusted with calluses thick as leather.\n\nThere are no road signs on the sea. I find my way by watching the stars and smelling the direction of the wind. And I cannot go whenever I please: the Indian Ocean monsoon blows east for half the year and west for the other half, and I can only go with the wind. Miss one season\'s wind, and I must wait, idle, half a year in a foreign port.\n\nThe me who hauls salt on the Sahara, and the me who climbs the mast on the Indian Ocean — we are the same kind of person. One in the sand, one on the sea, both using the body to move someone else\'s goods from one end of the world to the other.\n\n(The dhow really was sewn with coconut rope, and sailors really did find their way by the stars and the wind — these are true; the exact feel of these particular hands is what this pass imagines close for you.)',
      },
      deliverGoal: 'N3 setup (合成的另一副身体 + anti-fab 透明) — 我有两副身体换上另一副 + 离开撒哈拉到印度洋海岸成 dhow 上水手 + 船特别 (船板不用铁钉/椰壳搓绳一块块缝起来) + 手掌常年泡海水磨椰壳绳结厚茧像皮革 + 海上没路标靠看星闻风认路 + 不能想走就走 (季风半年东半年西只能跟风走/错过一季干等半年) + 撒哈拉扛盐的我与印度洋爬桅杆的我是同一种人 (一沙一海都用身体替别人挪货) + anti-fab 括号缩短后移到节尾 (船椰壳绳缝+靠星象风向认路是真的/这双手具体感受是替你想象贴近的 — 不打断沉浸峰值)',
      engagementHook: '撒哈拉上扛盐的我,印度洋上爬桅杆的我——是同一种人:都在用身体,替别人把货从世界的一头挪到另一头。无论在沙里还是在海上,「出力的人」过的,是不是都是同一种日子?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-carrier-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你跟着商队,走在撒哈拉里。走在你前面、骑在最好的骆驼上的,是这趟商队的主人。你扛着他的盐,牵着他的骆驼。\n\n有一天,队伍路过一座城——开罗。城里在传一件大事:一个西非来的皇帝,曼萨·穆萨,带着多到数不清的黄金路过这儿,沿街散金,连这座大城的金价都被他压低了。\n\n你站在人群最外圈,踮着脚,远远看了一眼那位皇帝。他手里随手散出去的一枚金币,弹跳着落在地上。\n\n你心里那个念头,这一刻顶到了喉咙口:他随手散出去的那一枚金币——是从哪儿来的?\n\n是从我这样的人扛过来的盐里来的。是从矿洞里挖金的人手上来的。是从被锁着穿过这片沙漠、当货物卖掉的人身上来的。\n\n你看着那枚金币,忽然懂了一件没人告诉过你的事:这张网最顶端那个人随手一散的财富,正是我们这些最底下的人,用一整个身体,一克一克垫上去的。',
        en: 'Now you are me.\n\nYou walk in the Sahara with the caravan. Ahead of you, riding the best camel, is the caravan\'s owner. You haul his salt and lead his camels.\n\nOne day the caravan passes a city — Cairo. The city is buzzing with a great event: an emperor from West Africa, Mansa Musa, passed through with gold beyond counting, scattering it down the streets, depressing even this great city\'s gold price.\n\nYou stand at the outermost ring of the crowd, on your toes, and catch a distant glimpse of that emperor. A gold coin he scatters carelessly from his hand bounces and lands on the ground.\n\nThe thought in you rises to your throat in this moment: that one gold coin he scattered so carelessly — where did it come from?\n\nIt came from the salt that people like me hauled. It came from the hands of those who dug gold in the mine shafts. It came from the bodies of those marched chained across this very desert and sold as goods.\n\nYou look at that coin and suddenly understand a thing no one ever told you: the wealth the man at the very top of this web scatters with a flick of the hand is exactly what we, the people at the very bottom, paid up with our whole bodies, one gram at a time.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak (金币 motif 从底层第一次正面相遇) — 跟商队走撒哈拉 + 前面骑最好骆驼的是商队主人/你扛他的盐牵他的骆驼 + 路过开罗传大事 (西非皇帝 Mansa Musa 带数不清黄金路过散金压低金价) + 你在人群最外圈踮脚远远看一眼皇帝 + 他随手散出一枚金币弹跳落地 + 念头顶喉咙口「他随手散的那枚金币从哪儿来」+ 答案: 从我这样人扛的盐里来/从矿洞挖金人手上来/从被锁穿沙漠当货物卖的人身上来 + 忽然懂没人告诉过的事: 顶端那人随手一散的财富正是我们最底下的人用整个身体一克一克垫上去的',
      engagementHook: '我踮着脚,远远看那位皇帝随手散出一枚金币——可那枚金币,是从我扛的盐、别人挖的金、被卖掉的人身上来的。顶端的人随手一散的财富,凭什么是底下的人用整个身体垫上去的?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-carrier-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得告诉你一件,比「扛盐分不到钱」更重的事。\n\n在这两张网上,有的人,本身就是货。\n\n跨撒哈拉的商队里,跟着我一起走的,不全是脚夫。有一些人,是被锁着、被绳子串在一起,走过这片沙漠的——他们是被买卖的人,被当成货物,从一头,运到另一头去卖掉。\n\n印度洋上也一样。和瓷器、胡椒、香料一起,装上海船的,还有被奴役的人。\n\n你停下来想一想这有多重:这张网搬运的「货物」清单里,有黄金,有盐,有丝绸,有胡椒——也有人。活生生的人,被写进了和盐板、瓷器一样的那一栏。\n\n我牵骆驼、扛盐,至少我还是个「干活的人」。可他们,在这张网的账本上,根本不算「人」,只算一笔会走路的财产。\n\n所以你别只记住这张网有多繁华、多了不起。它最底下这一层,有人在出血汗,还有人,自己就是被卖的那件「货」。\n\n我说这些,不是为了让你难过——这是这两张网上真实发生过的事。历史课的本分,就是直面它,而不替它遮掩。',
        en: 'I must tell you a thing heavier than "hauling salt and getting no money."\n\nOn these two networks, some people were themselves the goods.\n\nIn the trans-Saharan caravan, not all who walked with me were porters. Some were marched across this desert chained, roped together — they were people being bought and sold, treated as goods, carried from one end to be sold at the other.\n\nIt was the same on the Indian Ocean. Loaded onto the ships, alongside the porcelain, the pepper, the spices, were enslaved people too.\n\nStop and think how heavy this is: on this web\'s list of "goods" to be carried, there was gold, salt, silk, pepper — and also people. Living people, written into the same column as salt slabs and porcelain.\n\nI led camels and hauled salt; at least I was still "a person who works." But they, on this web\'s ledger, did not count as "people" at all, only as a piece of property that could walk.\n\nSo do not remember only how flourishing, how magnificent this web was. On its lowest layer, some bled and sweated, and some were themselves the "goods" being sold.\n\nI tell you this not to make you sad — these are things that really happened on these two networks. The duty of a history class is to face it squarely, not to cover it up.',
      },
      deliverGoal: 'N5 story (人本身就是货 — 奴隶贸易) — 比扛盐分不到钱更重的事 + 这两张网上有的人本身就是货 + 跨撒哈拉商队跟我走的不全是脚夫 (有人被锁绳子串一起走过沙漠/被买卖当货物从一头运另一头卖) + 印度洋一样 (和瓷器胡椒香料一起装船的还有被奴役的人) + 多重: 这张网搬运的「货物」清单有黄金盐丝绸胡椒也有人 (活生生的人写进和盐板瓷器一样那栏) + 我牵骆驼扛盐至少还是干活的人/他们在账本上根本不算人只算一笔会走路的财产 + 别只记网多繁华/最底下有人出血汗还有人自己就是被卖的货',
      engagementHook: '这张网搬运的「货物」清单里,有黄金、有丝绸、有胡椒——也有活生生的人。当一个人被写进和盐板、瓷器一样的那一栏,「繁荣」这两个字,听起来还一样吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-carrier-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '回到开罗街头,那枚弹跳着落地的金币。我想让你再盯它一眼。\n\n曼萨·穆萨随手散出它的时候,在他眼里,这是慷慨,是荣耀,是一个皇帝该有的气派。\n\n伊本·白图泰后来在印度的卡利卡特港,看见一枚西非金币换了一袋胡椒。在他眼里,这是奇妙的连通——三张网,在一枚金币身上,接成了一张。\n\n可这枚金币落在我眼里,是另一回事。\n\n我太知道它是怎么来的了:它是用我这样的人扛盐勒出的血印、挖金人弯了的腰、被卖掉的人失去的自由,一点一点换来的。\n\n(同一枚金币,我无法证明就是穆萨散的、白图泰看见的那一枚——但顶端散出的金,确实会一路流到我们脚下、又从我们手里流走。这条线是真的。)\n\n同一枚金币:皇帝看见慷慨,旅人看见连通,我看见的是代价。\n\n而最扎心的一句,我得说出来——这枚金币会换手,会换手很多很多次,可它换来换去,这辈子,从来没有一次,真正落进过我的口袋。',
        en: 'Back to the Cairo street, that gold coin bouncing as it lands. I want you to keep your eye on it once more.\n\nWhen Mansa Musa scatters it from his hand, in his eyes it is generosity, it is glory, it is the grandeur an emperor should have.\n\nIbn Battuta, later, at the port of Calicut in India, sees a West African gold coin trade for a sack of pepper. In his eyes, it is wondrous connection — the three networks, in one coin, joined into one.\n\nBut this coin, landing in my eyes, is another thing.\n\nI know all too well where it came from: it was traded for, bit by bit, with the blood marks the rope cut into people like me hauling salt, with the bent back of the man who digs the gold, with the freedom of the person who was sold.\n\n(The same coin — I cannot prove it is the very one Musa scattered or Battuta saw — but gold scattered at the top did flow all the way down to our feet, and flow away again from our hands. That line is real.)\n\nThe same coin: the emperor sees generosity, the traveler sees connection, and I see the cost.\n\nAnd the most piercing line, I must say it — this coin will change hands, change hands very many times, yet for all its changing, in my whole life, not once did it ever truly fall into my pocket.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (金币 motif 底层收束 — 三视角合拢/echo 揭示) — 回到开罗街头那枚弹跳落地的金币再盯一眼 + Musa 散出时眼里=慷慨荣耀皇帝气派 + Ibn Battuta 后来卡利卡特港看见西非金币换胡椒眼里=奇妙连通三网在一枚金币接成一张 + 落我眼里是另一回事 + 我太知道它怎么来 (我这样人扛盐血印/挖金人弯腰/被卖人失去的自由一点点换来) + anti-fab 括号 (无法证明是同一枚/但顶端散的金确实流到我们脚下又从手里流走这条线是真的) + 同一枚金币: 皇帝看见慷慨旅人看见连通我看见代价 + 最扎心: 它换手很多次可这辈子从没一次真正落进我口袋',
      engagementHook: '同一枚金币:皇帝看见慷慨,旅人看见连通,我看见的是代价。它换手无数次,可这辈子从来没有一次,真正落进过我的口袋。同一件东西,为什么落在不同人眼里,意思能差这么远?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-carrier-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别误会,我不是要你把我们看成一群只会被压着的可怜人。\n\n我们也有自己的东西,是这张网的账本永远记不下的。\n\n我知道哪片沙丘后面有水,知道骆驼几天不喝还能撑、什么时候必须停;我看一眼天上的星、闻一下风的咸味,就知道这条 dhow 该往哪个方向走。这些本事,商队主人没有,坐在城里的中间人没有,曼萨·穆萨更没有——离了我们,他们的金子、丝绸、胡椒,一寸都动不了。\n\n你品一品这件事:这张网最离不开的人,恰恰是这张网最不在乎、最不记得的人。\n\n夜里,商队歇下来,我们围着火堆,说自己的话,唱自己家乡的调子。在那些时刻,我不是账本上一笔「会走路的劳力」。我记得我从哪儿来,记得我也是一个人。\n\n这一点,这张网算不进它的账本,谁也夺不走。',
        en: 'Do not mistake me — I am not asking you to see us as a crowd of pitiful people who can only be pressed down.\n\nWe have things of our own, too, that this web\'s ledger can never record.\n\nI know which dune has water behind it, know how many days a camel can last without drinking and when it must stop; one look at the stars, one whiff of the salt in the wind, and I know which way this dhow should go. These skills the caravan owner does not have, the middleman sitting in the city does not have, and Mansa Musa has even less — without us, their gold, silk, and pepper cannot move one inch.\n\nWeigh this: the people this web can least do without are exactly the people this web cares about least and remembers least.\n\nAt night, when the caravan rests, we sit around the fire, speak our own tongue, and sing the tunes of our own homelands. In those moments, I am not a "walking labor" entry in a ledger. I remember where I came from, remember that I too am a person.\n\nThis, the web cannot enter into its ledger, and no one can take away.',
      },
      deliverGoal: 'N7 story (能动性/尊严 — 不只是受害者) — 别误会不是要你把我们看成只会被压的可怜人 + 我们也有账本记不下的东西 + 知道哪片沙丘后有水/骆驼几天不喝能撑何时必须停/看星闻风咸味知道 dhow 往哪走 + 这些本事商队主人没有城里中间人没有 Musa 更没有/离了我们金子丝绸胡椒一寸动不了 + 品: 这张网最离不开的人恰是最不在乎最不记得的人 + 夜里围火堆说自己的话唱家乡调子/那些时刻我不是账本上会走路的劳力/记得我从哪来记得我也是一个人 + 这点网算不进账本谁也夺不走',
      engagementHook: '这张网最离不开的人,恰恰是它最不在乎、最不记得的人——离了我们这些认得路的人,皇帝的金子一寸都动不了。一个被看作「最底层」的人,会不会其实握着整张网最关键的东西?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-carrier-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '有一年,商队和港口忽然都不对劲了。\n\n人开始成片地病倒、死去。先是几个,然后是很多。1347 年前后,一场大瘟疫,后人叫它黑死病,顺着我们走的这张网,一路扑了过来。\n\n它很可能起于中亚草原。然后,它搭上了商队的骆驼、爬上了港口的海船——搭的,正是我们这些人,日复一日替别人开通的那条路。\n\n你停下来想一想这有多荒唐:我们用身体,把这张网撑起来、让它畅通无阻。可正是这张畅通的网,把死亡,送到了我们自己面前。\n\n更荒唐的是:瘟疫来的时候,城里的人能关门、能逃。我们呢?我们得继续上路,继续扛盐、继续爬桅杆——因为不走,就没饭吃。我们躲不掉这条路,因为这条路,就是我们活命的唯一办法。\n\n这张网给上面的人送去财富,这一次,给我们送来的,是死亡;而我们,连躲的资格都没有。',
        en: 'One year, the caravan and the ports all suddenly went wrong.\n\nPeople began to fall sick and die in droves. First a few, then many. Around 1347, a great plague, later called the Black Death, came rushing along this very web we walked.\n\nIt very likely began on the Central Asian steppe. Then it rode the caravan\'s camels and climbed the ships in the ports — rode the very road we, people like us, day after day kept open for others.\n\nStop and think how absurd this is: we held this web up with our bodies and kept it flowing freely. Yet it was exactly this free-flowing web that delivered death right to our faces.\n\nMore absurd still: when the plague came, people in the cities could shut their doors and flee. And us? We had to keep going, keep hauling salt, keep climbing masts — because if we stopped, we did not eat. We could not escape this road, because this road was the only way we had to stay alive.\n\nThis web carried wealth to the people above. This time, what it carried to us was death — and we did not even have the right to hide.',
      },
      deliverGoal: 'N8 story (黑死病从底层视角 — 连通的代价压在底层) — 有一年商队港口都不对劲 + 人成片病倒死去 (先几个然后很多) + 1347 前后大瘟疫后人叫黑死病顺着我们走的网扑过来 + 很可能起于中亚草原 + 搭商队骆驼爬港口海船=搭我们日复一日替别人开通的那条路 + 荒唐: 我们用身体撑起网让它畅通/正是这张畅通的网把死亡送到我们面前 + 更荒唐: 瘟疫来城里人能关门能逃/我们得继续上路扛盐爬桅杆 (不走没饭吃) + 躲不掉这条路因为这是活命唯一办法 + 网给上面送财富这次给我们送死亡/我们连躲的资格都没有',
      engagementHook: '我们用身体让这张网畅通无阻,可正是这张畅通的网,把瘟疫送到了我们面前——城里人能关门逃命,我们却不走就没饭吃。同一场灾难,为什么躲得掉的人和躲不掉的人,从一开始就不一样?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-carrier-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步,带你看地球另一头——那里也有像我这样,撑起一张网、却没名字的人。\n\n和我同一个时代,在中国,有一个叫泉州的大港,挤满了来自各地的海船,是当时世界上最忙的港口之一。中国朝廷专门设了一个叫「市舶司」的官署,管理海外贸易、抽税。中国的瓷器,顺着印度洋,一路卖到了我熟悉的那片东非海岸。\n\n你可能会想:那中国真了不起。是的,中国是这张网最大的发动机之一。\n\n但你换我这双眼睛看:泉州港码头上,那些把沉甸甸的瓷器一箱箱扛上船的搬运工,那些在中国海船上拉帆、掌舵的水手——他们,和撒哈拉里扛盐的我、印度洋上爬桅杆的我,是不是同一种人?\n\n历史记住了市舶司、记住了瓷器、记住了皇帝。可那些在泉州码头扛瓷器的人,有没有人记下过他们的名字?\n\n你看:无论这张网的哪一头,最响的故事都是上面的人的;最沉的担子,都压在我们这种没名字的人肩上。这一点,从撒哈拉到泉州,一模一样。\n\n你的课本会让你背市舶司、背郑和——可你有没有想过,那码头上扛瓷器的人,也可能是某个像你我一样、有家、有名字,却没被写下来的人?',
        en: 'Let me step back and take you to the other end of the earth — there too were people like me, who held up a web yet left no name.\n\nIn the same era as me, in China, there was a great port called Quanzhou, crowded with ships from every land, one of the busiest ports in the world at the time. The Chinese court set up an office called the shibosi to manage and tax overseas trade. Chinese porcelain, along the Indian Ocean, was sold all the way to that East African coast I knew so well.\n\nYou might think: then China was truly magnificent. Yes — China was one of the biggest engines of this web.\n\nBut look through these eyes of mine: on the docks of Quanzhou, the loaders who carried the heavy porcelain crate by crate onto the ships, the sailors who pulled the sails and held the helm on the Chinese ships — were they, and the me hauling salt in the Sahara, the me climbing the mast on the Indian Ocean, not the same kind of person?\n\nHistory remembered the shibosi, remembered the porcelain, remembered the emperor. But of those who hauled porcelain on the docks of Quanzhou — did anyone write down their names?\n\nYou see: whichever end of this web, the loudest stories are the stories of the people above; the heaviest burden presses on the shoulders of nameless people like us. This, from the Sahara to Quanzhou, is exactly the same.\n\nYour textbook will have you memorize the shibosi, memorize Zheng He — but have you ever wondered: that person hauling porcelain on the docks might have been someone like you and me, with a home, with a name, who was simply never written down?',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§8 中国桥, receiving-end lens 注入 — narrative §8 要求 receiving-end 或 mediator synthesis 注中国对照, 此处叙事节注一次) — 退一步看地球另一头也有撑起网却没名字的人 + 同时代中国泉州大港 (挤满各地海船世界最忙港口之一/朝廷设市舶司管理海外贸易抽税/瓷器顺印度洋卖到我熟悉的东非海岸) + 你可能想中国真了不起=是中国是最大发动机之一 + 但换我这双眼睛: 泉州码头扛瓷器上船的搬运工/中国海船拉帆掌舵的水手 + 他们和撒哈拉扛盐的我印度洋爬桅杆的我是不是同一种人 + 历史记住市舶司瓷器皇帝/扛瓷器的人有没有人记下名字 + 无论网哪一头最响的故事是上面人的最沉担子压没名字的我们肩上/从撒哈拉到泉州一模一样 + 华裔学生桥接 (你课本会背市舶司背郑和/可码头扛瓷器的人也可能是某个像你我一样有家有名字却没被写下来的人 — 把无名者拉回学生自己文化记忆)',
      engagementHook: '泉州码头上扛瓷器上船的搬运工,和撒哈拉里扛盐的我,是不是同一种人?历史记住了市舶司、瓷器和皇帝——可有没有人,记下过码头上那些扛货人的名字?',
      expectsRealAnswer: false,
    },
    {
      id: 'trade-networks-carrier-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,回头看这张「了不起的世界之网」,有一个真问题,等你来答。\n\n几乎所有人都说:1200 到 1450 的这张大网,是人类历史上一件辉煌的大事——它把世界缝在了一起,让黄金、瓷器、技术、信仰空前地流动。\n\n可这张网,从我这个最底下、最没名字的位置往上看,是另一个故事。两种说法,都站得住,你来称。\n\n一种说法:它就是辉煌的。再大的代价,也挡不住一个事实——人类第一次这样大规模地连在一起,交换货物、技术、思想,文明因此往前迈了一大步。这是真的进步,不该被全盘否定。\n\n另一种说法:所谓「辉煌」,是站在曼萨·穆萨、伊本·白图泰那个高度上看出来的。换到我这个高度——扛盐勒出的血印、被当成货物卖掉的人、躲不掉的瘟疫——同一张网,是另一个故事。一段历史,只算上面人的辉煌、不算下面人的代价,这账,算全了吗?\n\n这两边,不是「辉煌但有代价」一句话能抹平的。这是同一张网,从上往下看,和从下往上看,根本就是两个故事。\n\n这是一道没有标准答案、得你自己掂量的真问题。你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Having walked my whole life, looking back at this "magnificent web of the world," there is a real question waiting for you.\n\nAlmost everyone says: this great web of 1200 to 1450 was a glorious thing in human history — it stitched the world together, set gold, porcelain, technology, and faith flowing as never before.\n\nBut this web, seen from my lowest, most nameless position looking up, is another story. Both views stand. You do the weighing.\n\nOne view: it was glorious, simply. No cost, however great, can block one fact — humankind for the first time connected on this scale, exchanging goods, technology, and ideas, and civilization took a great step forward because of it. This was real progress, and it should not be denied wholesale.\n\nThe other view: this so-called "glory" is what you see from the height of Mansa Musa, of Ibn Battuta. Change to my height — the blood the rope cut while hauling salt, the people sold as goods, the plague we could not escape — and the same web is another story. A stretch of history that counts only the glory of those above and not the cost of those below — is that account settled in full?\n\nThese two are not smoothed over by saying "glorious but with a cost." This is one web that, seen from above and seen from below, is simply two different stories.\n\nThis is a real question with no standard answer — one you have to weigh for yourself. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 回头看这张了不起的世界之网 + 几乎所有人说 1200-1450 大网是辉煌大事 (缝世界/黄金瓷器技术信仰空前流动) + 但从我最底没名字位置往上看是另一个故事 + 一种说法 (它就是辉煌的/再大代价挡不住一个事实人类第一次这样大规模连在一起交换货物技术思想文明迈一大步/真进步不该全盘否定) + 另一种说法 (所谓辉煌是站 Musa/Battuta 高度看的/换我这高度血印被卖人躲不掉的瘟疫同一张网是另一故事/只算上面辉煌不算下面代价这账算全了吗) + 不是「辉煌但有代价」一句抹平/同一张网上往下看与下往上看根本两个故事 + 元话术去 AP jargon (没有标准答案得你自己掂量的真问题 — 去掉「AP 老师」, 三 lens 措辞不同) + 想 30 秒两边都站得住',
      engagementHook: '同一张网,从上往下看是辉煌,从下往上看是代价——根本就是两个故事。一段历史,如果只算上面人的辉煌、不算下面人的代价,这账算全了吗?你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'trade-networks-carrier-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个牵骆驼、扛盐板、爬桅杆,连名字都没留下的人,你会怎么记住这样一个开端?\n\n我用一整个身体,把这张让全世界变富的网撑了起来。可这张网变富的红利,几乎没有一克流到我手里;它最黑的代价——被当货物卖、躲不掉的瘟疫——倒大半压在了我身上。这两件事,是同一张网。你怎么称?\n\n不过你得先知道:你这一遍,听的只是路上这个没名字的人。\n\n那位散金的皇帝曼萨·穆萨,会把这张网讲成另一个样子——在他眼里,这是黄金、信仰、被画进世界地图的荣耀。那个走遍三网的旅人伊本·白图泰,会把它讲成又一个样子——在他眼里,这是奇妙的连通,是三张网其实是一张的惊叹。等你换上他们的视角,你刚才从我这儿听来的判断,还站得住吗?\n\n最后留一个问题给你,关于今天。今天,你用的手机、穿的衣服、吃的东西,也走在一张巨大的、看不见的网上。这张网的另一头,会不会也有一个像我这样、撑起了它、却没人记得名字的人?\n\n下次你拿起一样从很远的地方来的东西,愿不愿意,花一秒钟,想一想那个没有名字的人?',
        en: 'Having walked my whole life — a man who led camels, hauled salt slabs, climbed masts, and left not even a name — how will you remember a beginning like this?\n\nWith my whole body I held up this web that made the whole world rich. Yet of the reward of that wealth, almost not one gram flowed into my hands; while its darkest cost — being sold as goods, the plague we could not escape — pressed mostly down on me. These two things are the same web. How do you weigh it?\n\nBut first you should know: this pass, you heard only the nameless man on the road.\n\nThat gold-scattering emperor, Mansa Musa, would tell this web as something else — in his eyes it is gold, faith, the glory of being drawn onto the world map. That traveler across all three networks, Ibn Battuta, would tell it as something else again — in his eyes it is wondrous connection, the wonder that the three networks are really one. When you switch to their perspectives, will the judgment you just heard from me still stand?\n\nAnd one last question to leave with you, about today. Today, the phone you use, the clothes you wear, the things you eat, all travel on a giant, unseen web too. At the other end of this web, might there be a person like me — who holds it up, yet whose name no one remembers?\n\nNext time you pick up a thing that came from far away, would you spend one second, and think of the person with no name?',
      },
      deliverGoal: 'N11 close/meta — 评价开端 (牵骆驼扛盐爬桅杆没留下名字的人怎么记住这开端) + 用整个身体撑起让全世界变富的网/变富红利几乎没一克流到我手里/最黑代价被当货物卖躲不掉瘟疫大半压我身上/同一张网怎么称 + MANDATORY 跨视角指针: ① 你只听到路上没名字的人 ② Mansa Musa 会讲成另一样 (黄金信仰画进世界地图荣耀) + Ibn Battuta 又一样 (奇妙连通三网其实是一张的惊叹) ③ 换视角刚从我这听来的判断还站得住吗 + transfer (今天手机衣服食物也走在巨大看不见的网上/另一头会不会也有撑起它却没人记得名字的人/下次拿起远方来的东西愿不愿花一秒想那个没名字的人)',
      engagementHook: '你这一遍,只听到了路上这个没名字的人。换上皇帝、换上旅人的眼睛,这张网又是另外两个故事。下次你拿起一样从很远地方来的东西,愿不愿意花一秒,想一想网另一头那个没有名字的人?',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'mansa-musa-actor':    mansaMusaLens,
  'ibn-battuta-mediator': ibnBattutaLens,
  'carrier-on-the-route': carrierLens,
};

// receiving-end 优先 (无名脚夫/水手撑起整张网 = 挑战「贸易史 = 帝王大商人」先验; 无名本身是 load-bearing pedagogy)
export var defaultLens = 'carrier-on-the-route';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'trade-networks-1200',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'mansa-musa-actor': 28, 'ibn-battuta-mediator': 30, 'carrier-on-the-route': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 一枚金币 (Musa 散出/Battuta 卡利卡特港见换手/carrier 用命垫起却从不拥有 — 三视角各触一次不点破)',
    'defaultLens: carrier-on-the-route — 无名脚夫/水手撑起整张网 (挑战「贸易史=帝王大商人」先验, AP black-agency/底层视角)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'anti-fab: carrier 为合成桥接人物 (无名, 合并撒哈拉脚夫+印度洋水手), N1/N3 透明标注; dhow 椰壳绳缝制+靠星象风向认路为真, 具体水手身体感受标为叙事贴近',
    '§8 中国桥: carrier-n9 (码头扛瓷器搬运工=同一种没名字的人) 注入 narrative §8 中国对照, mediator-n8 + actor-n9 亦各落一次 (市舶司/泉州/瓷器/指南针)',
    'Rule 0: 三网多中心 (撒马尔罕/卡利卡特/基尔瓦/廷巴克图/泉州/马里各有中心), 连通双刃 (红利 vs 黑死病+奴隶贸易) 全程并置, 中国是引擎之一非唯一圆心',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
