// ─────────────────────────────────────────────────────────────────
// 明治维新 1868 — Meiji Restoration · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (第7条): 日本术语保留本义 (天皇/幕府/藩/武士/大名/发髻 chonmage/血税),
//   绝不 Sinicize (天皇≠中国皇帝); 中国专有词 (玉玺/龙袍/宰相) 仅 §9 真中国对照段可用。
// 3 lens / 11 节点 / Rule 0 中性 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 发髻 chonmage — 改革者剪掉自己的/西乡保留旧样/农家女儿认不出剪发的哥哥。
// §9 杀手桥: 洋务运动「中体西用」vs 明治翻到制度根 (中国孩子 home advantage)。
// ─────────────────────────────────────────────────────────────────

export var samuraiReformerLens = {
  id: 'samurai-reformer-actor',
  name: 'The Lower Samurai',
  nameCn: '下级武士',
  role: 'perpetrator-actor',
  perspectiveTag: 'reformer-who-abolishes-his-class',
  icon: '⚙️',
  description: {
    cn: '长州一个穷武士家的孩子，全家一年到头吃糙米配腌萝卜，腰上却一直挂着一把刀。1853 年黑船开进江户湾，他被「尊王攘夷」这句口号点燃，发誓要把蛮夷赶下海。可挨过西方炮火之后，他想明白一件可怕的事：要赶走蛮夷，先得变成蛮夷。这一遍让你坐进一个施害者兼建设者的位置，看他爬进新政府、提起笔，一条一条废掉生出他自己的那个世界。',
    en: 'A boy from a poor Chōshū samurai family that ate plain brown rice and pickled radish all year, with a sword always at his side. When the Black Ships pushed into the bay near the capital in 1853, a slogan set him on fire: sonnō jōi, "revere the Emperor, expel the barbarians." He swore to drive the barbarians into the sea. But after taking Western cannon fire, he understood a frightening thing: to drive out the barbarians, you first have to become one. This pass puts you inside a man who is both perpetrator and builder, and watches him climb into the new government, pick up a pen, and erase, clause by clause, the world that made him.',
  },
  storyboard: [
    {
      id: 'mei-samurai-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我握过刀，也握过笔。让我后悔一辈子的，不是刀，是笔。\n\n我是长州一个穷武士家的孩子。我家穷到一年到头吃糙米配腌萝卜，可我腰上一直挂着一把刀——那把刀告诉所有人：我是武士，我跟种地的、做买卖的不一样。这把刀，是我是谁。\n\n二十多岁那年，我跟一群同样年轻、同样穷、同样满腔热血的下级武士，干了一件惊天动地的事：我们推翻了统治日本两百多年的幕府。\n\n然后，我们干了一件更惊人的事。我进了新政府，拿起笔，亲手签下一道道法令——废掉「藩」，废掉「俸禄」，最后，废掉「武士带刀」的权利。\n\n这一遍，你坐进我这个位置。你会看见我怎么用一支笔，一笔一笔，关掉那扇生出我自己的门。',
        en: 'I have held a sword, and I have held a pen. What I regret all my life is not the sword. It is the pen.\n\nI am a boy from a poor Chōshū samurai family. We were so poor we ate plain brown rice and pickled radish all year. But a sword always hung at my side, and that sword told everyone: I am a samurai, not like the farmer or the merchant. This sword was who I was.\n\nIn my twenties, with a band of low-ranking samurai just as young, just as poor, just as full of fire, I did a world-shaking thing: we overthrew the shogunate that had ruled Japan for over 200 years.\n\nThen we did a more astonishing thing. I joined the new government, picked up a pen, and signed law after law with my own hand. We abolished the "han" (the domains). We abolished the rice stipend. And in the end, we abolished the samurai\'s right to carry a sword.\n\nThis pass puts you in my seat. You will watch me hold one pen. Stroke by stroke, I close the very door I had come through.',
      },
      deliverGoal: 'N1 hook — 握刀也握笔/后悔的是笔 + 下级武士自我介绍 (长州穷武士/糙米腌萝卜/刀=我是谁) + 二十多岁推翻幕府 + 进新政府用笔废藩废俸禄废带刀权 + 这一遍视角 (用一支笔关掉生出自己的门)',
      engagementHook: '我用刀推翻了旧世界，又用笔废掉了让我成为武士的那一切。如果有一天，你要亲手拆掉那个让你成为你的东西，你下得了手吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-samurai-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清那一天，你才懂我后来为什么发了疯一样要变。\n\n1853 年 7 月一个夏天的早上，四艘冒着黑烟的美国军舰，开进了江户湾——我们叫它们「黑船」。它们不靠风，靠蒸汽自己走，船身是铁，炮口又黑又大。我们这边的木帆船停在旁边，像玩具。\n\n带队的是个叫佩里（Perry）的美国海军准将。他递上一封国书，意思很硬：开国，通商，不然就动炮。\n\n两百多年了，幕府一直执行「锁国」，西方船一律不许靠岸。可这一次，幕府没敢开炮——它知道开了也打不过。1854 年，《神奈川条约》签了，国门被撬开。\n\n我那时还是个少年。我没亲眼见黑船，但消息传到长州，我整个人发烫。一种我从没体会过的感觉烧着我：羞耻。我们号称武士，号称会打仗，可有人开着我们挡不住的船，逼到家门口，我们连一炮都不敢还。',
        en: 'First, see that one day clearly, and you will understand why I later wanted, almost madly, to change.\n\nOn a summer morning in July 1853, four American warships, black with coal smoke, pushed into the bay near the capital. We called them the "Black Ships." They did not need wind; steam moved them on their own. Their hulls were iron, their gun muzzles black and huge. Our wooden sailboats sat beside them like toys.\n\nThe man in charge was an American naval commodore named Perry. He handed over a letter, and its meaning was hard: open the country, open trade, or face the cannons.\n\nFor over 200 years the shogunate had kept the country closed; no Western ship was allowed to land. But this time, the shogunate did not dare fire. It knew that even if it fired, it could not win. In 1854 the Convention of Kanagawa was signed, and the doors were pried open.\n\nI was still a boy then. I did not see the Black Ships with my own eyes, but when the news reached Chōshū, my whole body burned. A feeling I had never known burned in me: shame. We called ourselves samurai, called ourselves warriors, yet someone sailed ships we could not stop right up to our door, and we did not dare fire even one shot back.',
      },
      deliverGoal: 'N2 setup — 1853.7 黑船进江户湾 (蒸汽铁船/木帆船像玩具) + 佩里递国书逼开国 + 幕府锁国 200 年但不敢开炮 (打不过) + 1854 神奈川条约国门撬开 + 少年的羞耻 (号称武士却一炮不敢还)',
      engagementHook: '号称武士、号称会打仗，却连一炮都不敢还——那种羞耻烧着我。被逼到家门口却动不了手的羞耻，会把一个人推去做什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-samurai-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '羞耻很快变成一句口号，烧遍我们这些下级武士：尊王攘夷。\n\n「尊王攘夷」（sonnō jōi）四个字，意思是：尊崇天皇，把西方蛮夷赶出去。它背后的逻辑很简单——幕府没本事保护日本，那就把权力还给天皇，我们这些武士提刀上阵，把蛮夷赶下海。\n\n那几年，我半夜跟同伴挤在油灯底下读兵书，磨刀，发誓。我们真信，凭一腔忠义和手里这把刀，能把黑船赶走。\n\n然后，现实给了我一记响亮的耳光。\n\n1863 到 1864 年，我们萨摩和长州，各自跟西方干了一仗。结果不是「赶走蛮夷」，是被人家的舰炮一顿狠揍：城被烧，炮台被夷平，我们引以为傲的刀和长矛，在人家的大炮面前，什么都不是。\n\n挨完这顿打，我趴在废墟里，想明白了一件让我后背发凉的事——这件事，改变了我整个后半生。',
        en: 'The shame soon became a slogan that burned through us low-ranking samurai: sonnō jōi.\n\nThose words, sonnō jōi, mean: revere the Emperor, drive the Western barbarians out. The logic behind them was simple. The shogunate could not protect Japan, so return power to the Emperor, and we samurai would draw our swords and push the barbarians into the sea.\n\nIn those years I crowded under the lamp at night with my friends, reading war books, sharpening swords, swearing oaths. We truly believed that with loyal hearts and the swords in our hands, we could drive the Black Ships away.\n\nThen reality slapped me hard across the face.\n\nIn 1863 and 1864, Satsuma and Chōshū each fought the West. The result was not "driving the barbarians out." It was a brutal beating from their warship guns: towns burned, gun batteries flattened. The swords and spears we were so proud of were nothing in front of their cannons.\n\nAfter that beating, lying in the rubble, I understood something that ran cold down my back, something that changed the whole rest of my life.',
      },
      deliverGoal: 'N3 setup — 尊王攘夷 sonnō jōi (尊天皇赶蛮夷/幕府没本事就还权天皇) + 半夜读兵书磨刀发誓真信靠刀赶黑船 + 1863-64 萨摩长州各挨西方炮轰 (城烧炮台夷平/刀长矛在大炮前什么都不是) + 引出「师夷」觉悟',
      engagementHook: '我们发誓用刀把蛮夷赶下海，结果被人家的大炮一顿狠揍。当你最相信的本事，被现实证明根本不管用，你会死守它，还是推翻自己？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-samurai-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你趴在挨完炮的废墟里，手里还攥着那把没用上的刀。你脑子里冒出一个念头，这个念头跟你从小信的一切都拧着来：\n\n要赶走蛮夷，得先变成蛮夷。\n\n你想赶走西方人，可你手里的刀打不过他们的炮。那怎么办？只有一条路：学他们。学他们的枪炮，学他们的铁路、工厂、法律，把自己也变成一个有舰炮的国家。\n\n你品一下这有多别扭。你喊了好几年「攘夷」（赶走蛮夷），现在你得反过来「师夷」（拜蛮夷为师）。你恨的那个东西，正是你要变成的那个东西。\n\n更要命的是：你越往下想，越发现挡你路的，不是西方人，是你自己脚下这套旧日本。两百多个藩各管各的、武士抱着刀不肯撒手、农民被绑在地里——就这么一盘散沙，怎么变成一个能造舰炮的强国？\n\n这一刻你得想清楚：你愿不愿意，为了救这个国家，去拆掉那个生出你的旧世界？',
        en: 'Now you are me.\n\nYou lie in the rubble after the bombardment, the unused sword still gripped in your hand. A thought rises in your mind, a thought that cuts against everything you believed since childhood:\n\nTo drive out the barbarians, you first have to become one.\n\nYou want to drive the Westerners out, but the sword in your hand cannot beat their cannons. So what can you do? There is only one road: learn from them. Learn their guns, their railroads, their factories, their laws, and turn yourself into a country that has warship cannons too.\n\nWeigh how strange that is. You shouted "expel the barbarians" for years, and now you must turn around and "learn from the barbarians." The thing you hate is the very thing you must become.\n\nAnd worse: the further you follow the thought, the more you see that what blocks your road is not the Westerners. It is the old Japan beneath your own feet. Over 200 domains each going their own way, samurai clutching their swords and refusing to let go, farmers bound to the land. A loose pile of sand like that, how does it become a strong country that can build warship cannons?\n\nHere you must decide: are you willing, to save this country, to tear down the old world that made you?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 废墟里念头「要赶走蛮夷先得变成蛮夷」 + 师夷 (学枪炮铁路工厂法律) + 别扭 (喊攘夷却要师夷/恨的正是要变成的) + 看清挡路的是脚下旧日本 (200 藩散/武士抱刀/农民绑地) + 自我拷问: 愿不愿为救国拆掉生出自己的旧世界',
      engagementHook: '你喊了几年「赶走蛮夷」，现在却要拜蛮夷为师——你最恨的东西，正是你必须变成的东西。为了一个更大的目标，你能逼自己变成你曾经讨厌的样子吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-samurai-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '想清楚了，就得动手。可一个穷长州武士，凭什么动得了整个国家？\n\n靠联盟。\n\n萨摩和长州本是世仇，互相看不顺眼几十年。可我们撞上了同一堵墙、挨了同一种打、想明白了同一件事。1866 年 1 月，一个叫坂本龙马的土佐浪人居中牵线，在京都促成了一件几乎不可能的事：萨长同盟（Satchō Alliance）。两个死对头握了手，从此拧成一股推翻幕府的军事力量。\n\n枪从哪来？萨摩跟英国有军火生意的路子，转手把洋枪供给长州。你看这反讽——我们用蛮夷的枪，去打一场「尊王攘夷」的仗。\n\n1868 年，机会来了。我们打着「把权力还给天皇」的旗号起兵，爆发戊辰战争（Boshin War）。我们这些二三十岁的下级武士，带着洋枪，击溃了统治日本两百多年的幕府军。\n\n1868 年 1 月，新政府宣布「王政復古」——权力正式收归一个十几岁的少年天皇睦仁，也就是后来的明治天皇。\n\n我们赢了。可那一刻我还不知道：真正难的、真正狠的事，才刚开始。',
        en: 'Once I saw it clearly, I had to act. But how could one poor Chōshū samurai move a whole country?\n\nThrough alliance.\n\nSatsuma and Chōshū had been enemies for generations, glaring at each other for decades. But we had hit the same wall, taken the same beating, and understood the same thing. In January 1866, a wandering samurai from Tosa named Sakamoto Ryōma brokered something almost impossible in Kyoto: the Satchō Alliance. Two old enemies shook hands and twisted into one military force to overthrow the shogunate.\n\nWhere did the guns come from? Satsuma had a line of arms trade with Britain and passed Western guns to Chōshū. See the irony: we used the barbarians\' guns to fight a war of "revere the Emperor, expel the barbarians."\n\nIn 1868 the chance came. We rose under the banner of "return power to the Emperor," and the Boshin War broke out — the civil war between our side and the shogunate. We low-ranking samurai in our twenties and thirties, carrying Western guns, crushed the shogunate army that had ruled Japan for over 200 years.\n\nIn January 1868, the new government declared the Restoration of Imperial Rule. Power was formally returned to a teenage Emperor, Mutsuhito, the boy who would be called Emperor Meiji.\n\nWe had won. But in that moment I did not yet know: the truly hard thing, the truly merciless thing, was only beginning.',
      },
      deliverGoal: 'N5 story — 萨长同盟 1866.1 坂本龙马牵线 (世仇萨摩长州握手成军事力量) + 萨摩从英国转手供洋枪 (反讽: 用蛮夷的枪打攘夷的仗) + 1868 戊辰战争下级武士带洋枪击溃幕府军 + 1868.1 王政復古权力收归少年天皇睦仁 (明治天皇) + 「真正狠的事才刚开始」',
      engagementHook: '世仇握手、用蛮夷的枪打攘夷的仗——为了赢，我们把所有不可能的事都做成了。当目标足够大，「跟仇人结盟」「用敌人的武器」这些事，还算背叛吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-samurai-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '赢了之后，我们没有回头。我们做了一件古往今来都少见的事：用十年，亲手把生出我们的那套制度，一件一件拆掉。\n\n1871 年，废藩置县——一纸令下，两百多个藩全废了，大名的领地全收归中央。两百年的旧版图，几个月内抹平。\n\n1873 年，征兵令——打仗不再是武士的专利，农家男丁满二十一岁就得当兵。武士最值钱的那点本事，被普通农民接了过去。\n\n1876 年，最狠的一刀落下：废刀令（Haitōrei）。从今往后，除了军人警察，谁也不许在公开场合带刀。\n\n你还记得吗？刀，是我是谁。是它告诉所有人我是武士。而签字废掉它的人里，就有我。\n\n那天，我做了一件事。我对着镜子，剪掉了自己头顶的发髻（chonmage）——那是武士两百年的标志。短发的我看着镜子里的自己，第一次像个新时代的人。也是第一次，像个背叛了来路的人。\n\n剪刀落下的那一声，我到死都记得。',
        en: 'After we won, we did not turn back. We did a thing the world rarely sees: over about ten years, we tore down, piece by piece, the very system that had made us.\n\nIn 1871, the abolition of the han: with one order, over 200 domains were abolished, and all the lands of the daimyō, the feudal lords, were taken into central hands. A 200-year-old map was wiped flat in a few months.\n\nIn 1873, the conscription law: war was no longer the samurai\'s alone. Every farmer\'s son had to serve in the army at twenty-one. The one valuable skill the samurai had was handed to ordinary farmers.\n\nIn 1876, the hardest cut fell: the Sword Ban (Haitōrei). From now on, except for soldiers and police, no one could carry a sword in public.\n\nDo you remember? The sword was who I was. It told everyone I was a samurai. And among the men who signed it away was me.\n\nThat day, I did one thing. I stood before a mirror and cut off the topknot (chonmage) on my own head, the mark of a samurai for 200 years. Short-haired, I looked at myself in the glass and saw, for the first time, a man of the new age. And for the first time, a man who had betrayed where he came from.\n\nThe sound of those scissors closing, I remember it to the day I die.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 十年亲手拆制度: 1871 废藩置县 (200 藩废/大名领地收中央/旧版图抹平) + 1873 征兵令 (农民男丁当兵/武士本事被接走) + 1876 废刀令 Haitōrei (除军警禁带刀) + 刀=我是谁但签字的有我 + 亲手剪掉自己的发髻 chonmage (新时代人/也是背叛来路的人/剪刀声记到死)。只触发髻从他角度,不揭另两视角',
      engagementHook: '我对着镜子，亲手剪掉了头顶那个标志我是武士的发髻——那一刻我既像个新人，也像个叛徒。如果新生的代价是亲手抹掉旧的自己，你剪，还是不剪？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-samurai-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得停下来，跟你说句老实话：废掉武士的人，是我，可承受这一刀的，不只是武士。\n\n同样是 1873 年那两道法令，落到一个乡下农家头上，是另一种重。\n\n那道征兵令——村里人不叫它「保家卫国」，叫它「血税」，说官府是来抽他们血的。官府的人拿着名册进村，照着念名字，被念到的人家，儿子就被「征」走了，去给一个谁也没见过的天皇当兵。从前打仗是我们武士的事，跟农民无关；现在，国家直接从人家家里把人抽走。\n\n还有那道地税改革。从前农民交年贡，按收成交米，年景不好可以求情；现在改成按地价交固定的现金，不管收成好坏，那笔钱一分不能少。米价一跌，全家就得卖东西、借高利贷去凑。\n\n这些事，是我们这些坐在屋里的人，一笔签下去的。我们算的是「怎么让国家变强」。我们没怎么去算，这一笔笔落到那个半夜打算盘的农妇头上，是多重。',
        en: 'I have to stop and tell you honestly: the man who abolished the samurai was me, but the one who bore the cut was not only the samurai.\n\nThose same two laws of 1873 fell on a country farm family as another kind of weight.\n\nThat conscription law: the villagers did not call it "defending the homeland." They called it the "blood tax," and said the officials had come to draw their blood. Government men came into the village with a list and read out names, and the family whose name was read had its son taken away, drafted to serve an Emperor no one had ever seen. War used to be our samurai business, nothing to do with farmers. Now the state reached straight into a home and pulled a person out.\n\nAnd that land-tax reform. The old way, farmers paid their dues in rice by the harvest, and in a bad year they could ask for mercy. Now it became a fixed cash payment based on the land\'s value, and whether the harvest was good or bad, not a coin of it could be short. When the rice price fell, the whole family had to sell things, or borrow from a moneylender, to scrape it together.\n\nThese things, we who sat in the room signed with a stroke of the pen. We were counting "how to make the country strong." We did not much count how heavy each stroke landed on the farm wife doing sums on her abacus at midnight.',
      },
      deliverGoal: 'N7 story — actor 视角看 receiving-end: 1873 征兵令落到农家 (血税/名册念名字哥哥被征走给没见过的天皇当兵/从前打仗是武士事现在国家直接抽人) + 地税改革 (从前按收成交米可求情/现在按地价交固定现金/米价跌全家卖东西借高利贷) + 「我们算怎么让国家变强,没怎么算落到半夜打算盘的农妇头上多重」',
      engagementHook: '我们坐在屋里算「怎么让国家变强」，一笔签下去，却没怎么去算这一笔落到那个半夜打算盘的农妇身上有多重。做大决定的人，该不该先去看清承受的人？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-samurai-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '被我们拆掉的旧武士，没有都安静地走开。\n\n那些跟我一样、靠世袭俸禄过活的武士，一夜之间没了身份、没了刀、没了饭碗。他们里很多人想不通：我们流血推翻幕府，换来的就是被自己人废掉？\n\n1877 年，走投无路的萨摩旧武士起兵了，拥着的，是维新最大的英雄——西乡隆盛。这就是西南战争（Satsuma Rebellion）。约一万两三千旧武士，提着刀向北进军。\n\n他们被挡在熊本城下。守城的是谁？是政府的征兵新军——昨天还是农民的年轻人，扛着我们买来、造来的洋枪。\n\n这一仗打了五十多天。旧式武士的刀，输给了农民出身的征兵新军。\n\n你品一下这有多残忍：这场仗恰恰证明了我们造的那样东西，征兵制，是对的。可它证明对的代价，是杀死了维新最大的英雄。1877 年 9 月 24 日，西乡兵败，自尽。\n\n我们赢了。可那天，我没有一点赢的感觉。',
        en: 'The old samurai we tore down did not all walk away quietly.\n\nThose samurai who, like me, had lived on a hereditary stipend, lost their status, their swords, and their living overnight. Many of them could not understand it: we bled to overthrow the shogunate, and the reward was to be abolished by our own people?\n\nIn 1877, the cornered old Satsuma samurai rose up, with the greatest hero of the Restoration as their figure: Saigō Takamori. This was the Satsuma Rebellion. About 12,000 to 13,000 old samurai marched north, swords in hand.\n\nThey were stopped at Kumamoto Castle. Who defended it? The government\'s new conscript army, young men who the day before had been farmers, shouldering the Western guns we had bought and built.\n\nThis fight lasted over 50 days. The old samurai sword lost to the conscript army of former farmers.\n\nWeigh how cruel this is: this battle proved exactly that the thing we built, conscription, was right. And the price of proving it right was killing the greatest hero of the Restoration. On September 24, 1877, Saigō, defeated, took his own life.\n\nWe won. But that day, I did not feel any of the winning.',
      },
      deliverGoal: 'N8 story — 被拆旧武士不都安静走 (一夜没身份没刀没饭碗/想不通流血推翻幕府却被自己人废掉) + 1877 西南战争 Satsuma Rebellion 拥西乡隆盛 (约 1.2-1.3 万旧武士北上) + 熊本城守军=农民出身征兵新军扛洋枪 + 打 50 多天旧武士刀输给征兵新军 + 残忍: 证明征兵制对的代价是杀死维新最大英雄 + 1877.9.24 西乡兵败自尽 + 桥到 Saigō lens',
      engagementHook: '这一仗证明了我们造的征兵制是对的，可它证明对的代价，是杀死了维新最大的英雄。当「你做对了」和「你害死了最该活的人」是同一件事，这算赢吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-samurai-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的图。同一个时代，海这边还有一个大国，撞上了跟我们一模一样的墙。\n\n那是清朝。它比我们更早，在两次鸦片战争里被英国的炮打开了国门。它也喊过几乎一样的口号——「富国强兵」，它的洋务运动也想学西方的船坚炮利来自救。连纠结都像：清朝有句话叫「中体西用」，意思是西方的技术（用）可以学，老祖宗那套根本制度（体）不能动。\n\n但就在这一个字上，两条路分开了。\n\n清朝主要把新东西栓在不变的旧体上：建船厂、买军舰、派留学生，可科举、官僚、皇权那套根，基本没动。我们日本走的是另一条——把旧国家整个翻到根上重装。这个差别，1894 年甲午一仗见了分晓。——但一场仗的胜负，不等于判了一个文明的高下。\n\n但请你记住一句话，别急着下结论：这不是「我们聪明、他们愚蠢」。清朝是个幅员辽阔、靠科举士绅撑起来的大帝国，同样一刀切下去，在我们这小岛切得动，在那么大的帝国可能直接把它切裂。两边都在各自的处境里做选择。我赢的那场仗，不证明我这个人比海那边的人高明，只证明两条路在那一场考试里效果不同。',
        en: 'Let me step back and show you a larger picture. In the same era, across the sea, another great country hit the very same wall we did.\n\nThat was Qing China. Earlier than us, it had its doors blown open by British cannons in the two Opium Wars. It too raised almost the same slogan, "rich country, strong army," and its Self-Strengthening Movement also wanted to learn the West\'s ships and cannons to save itself. Even the struggle was alike: the Qing had a phrase, "Chinese learning as the base, Western learning for use," meaning Western technology (use) could be learned, but the root institutions of the ancestors (the base) must not be touched.\n\nBut on that one point, the two roads split.\n\nThe Qing mostly bolted the new things onto an unchanged old base: it built shipyards, bought warships, sent students abroad, yet the roots of the exam system, the bureaucracy, and imperial power were barely touched. We in Japan took the other road, turning the whole old state over down to the root. That difference showed itself in one war in 1894. But who wins one war does not judge which civilization is higher.\n\nBut hold one thing in mind, and do not rush to a verdict: this is not "we were smart and they were foolish." The Qing was a vast empire held up by the exam system and the gentry. The same cut that worked on our small island might, in an empire that size, have split it apart. Both sides chose inside their own situation. The war I won does not prove I was a finer man than the people across the sea. It only proves the two roads worked differently in that one exam.',
      },
      deliverGoal: 'N9 zoom-out + 同时代中国 (§9) ONE clean contrast — 清朝更早被鸦片战争打开国门 + 同口号「富国强兵」洋务运动想学船坚炮利 + 中体西用 (用可学体不能动) vs 日本翻到制度根 + 1894 甲午见分晓 + Rule-0 中性 (不是聪明愚蠢/清朝大帝国结构约束不同/同一刀小岛切得动大帝国可能切裂/赢的仗不证明人高明只证明两路效果不同)',
      engagementHook: '同一个口号「富国强兵」，海这边的大国走了另一条路。我赢了那场仗，但这不证明我比他们高明——只证明两条路在那场考试里效果不同。一场胜负，能不能就此判一个文明的优劣？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-samurai-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么评我？两种说法都站得住，你来称。\n\n一种说法：我是最真的爱国者。我把个人的一切，我的身份、我的刀、我的阶级，全押上去了。为了让日本不被殖民、不被列强瓜分，我连「武士」这个生出我自己的东西都亲手废掉了。还有谁比我牺牲得更彻底？正因为我们这批人肯下这种狠手，日本才成了少数没被殖民、还反过来挤进工业强国的非西方国家里最突出的一个。这不是背叛，这是把自己烧成柴，去给国家生火。\n\n另一种说法：我背叛了生我的人。我废藩、征兵、收刀，一笔笔签下去，亲手砸了千千万万旧武士的饭碗、断了他们的尊严，逼出一场西南战争，连维新最大的英雄都死在里面。我嘴上说「为了国家」，可这个「国家」是我们一小群人定义的，那些被我们碾过去的武士、那个被抽走哥哥的农家女儿，从没被问过一句愿不愿意。\n\n这两边不是「功大于过」或「过大于功」。是同一个我的两面——那个肯把自己也烧掉的决绝，和那个替几百万人替自己做了决定的傲慢，是同一支笔写下来的。\n\n你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I was the truest patriot. I staked everything of my own on it: my status, my sword, my class. So that Japan would not be colonized, not be carved up by the powers, I abolished with my own hand even the "samurai," the thing that made me. Who sacrificed more completely than I did? Men like us were willing to make so merciless a cut. That is why Japan became one of the very few non-Western countries never colonized, and the standout that pushed into the industrial powers. This is not betrayal. It is burning yourself into firewood to light a fire for the country.\n\nThe other view: I betrayed the people who gave me life. Abolishing the han, the draft, taking the swords, I signed each stroke, and with my own hand I smashed the living of countless old samurai, cut off their dignity, and forced out a Satsuma Rebellion in which even the Restoration\'s greatest hero died. I said "for the country," but this "country" was defined by a small group of us. The samurai we crushed, the farm daughter whose brother was taken, were never once asked whether they were willing.\n\nThese are not "the good outweighs the bad" or "the bad outweighs the good." They are two faces of the same me — the resolve to burn even myself, and the arrogance of deciding for millions and for myself, were written by the same pen.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 废掉自己阶级救国是叛徒还是最真的爱国者. 一种说法 (最真爱国者/押上身份刀阶级/把自己烧成柴给国家生火/正因肯下狠手日本才没被殖民) / 另一种说法 (背叛生我的人/一笔笔砸旧武士饭碗逼出西南战争/「国家」是一小群人定义的/被碾的武士和农家女儿没被问过愿不愿意) / 同一支笔写下的两面 (决绝 vs 傲慢) / 想 30 秒 / 两边都站得住',
      engagementHook: '把自己的阶级亲手废掉来救国——这是最真的爱国，还是对几百万人的傲慢？同一支笔写下了决绝，也写下了独断。你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'mei-samurai-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是建机器的那个人的声音。\n\n请记住：这只是一边。我是那个进了屋、提了笔、把整套机器设计出来、按下启动键的人。所以我讲的，全是「为什么要这么做」「这么做有多难、多悲壮」——一个建设者，总能把自己讲得理直气壮。这正是这个视角最该当心的地方。\n\n但这台机器开动起来，碾过的人，从头到尾没在我这一遍里开过口。\n\n那个农家女儿——她没读过《五条御誓文》，不知道「废藩置县」是哪几个字，只知道哥哥被名册抽走、母亲半夜打算盘。她会怎么讲我口中这场「伟大的维新」？还有西乡隆盛——那个帮我把这台机器建起来、最后却调转身、跟被它碾下的旧武士一起死的人。等你换上他们的视角，他们会狠狠挑战你刚才听我说的每一句。\n\n最后，留一样东西给你。还记得那天，我对着镜子，剪掉的那个东西吗？\n\n换个视角再走一遍，你会在另一个人那里，再撞见它一次。到那时，它就不只是我一个人的故事了。',
        en: 'What you just heard was the voice of the man who built the machine.\n\nRemember: it is only one side. I am the one who went into the room, picked up the pen, designed the whole machine, and pressed the start. So everything I told you was "why we had to do it," "how hard and how tragic it was." A builder can always make himself sound justified. That is exactly what this perspective must be most wary of.\n\nBut the people this machine crushed once it started running never spoke a word in my pass.\n\nThat farm daughter: she never read the Charter Oath, the new government\'s founding promises, does not know what "abolish the han" means, only knows her brother was pulled away by a list and her mother did sums at midnight. How would she tell this "great Restoration" I have described? And Saigō Takamori: the man who helped me build this machine, then turned around and died with the old samurai it crushed. When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. Do you remember the thing I cut off that day, in front of the mirror?\n\nWalk this through once more from another perspective, and you will meet it again, in someone else. By then it will no longer be only my story.',
      },
      deliverGoal: 'N11 close/meta — 你听的是建机器的人 (进屋提笔设计机器按启动键/建设者总能讲得理直气壮/最该当心) + 被碾的人没开口: 农家女儿 (没读御誓文只知哥哥被抽走母亲半夜打算盘/会怎么讲这场伟大维新) + 西乡 (帮建机器又调转身跟被碾旧武士同死) 会挑战你听的每句 + 暗示发髻 chonmage 会在另一视角再撞见一次 (不直接解释 echo)',
      engagementHook: '建机器的人，总能把自己讲得理直气壮——这正是最危险的地方。你听完我这一边，最想去问那个被抽走哥哥的农家女儿、那个调转身赴死的西乡什么？',
      expectsRealAnswer: true,
    },
  ],
};

export var saigoLens = {
  id: 'saigo-mediator',
  name: 'Saigō Takamori',
  nameCn: '西乡隆盛',
  role: 'lonely-mediator',
  perspectiveTag: 'restoration-hero-turned-rebel',
  icon: '🏯',
  description: {
    cn: '萨摩武士，1828 年生，人高马大、声音洪亮，是那种让人想为他卖命的人。1868 年春，他领着倒幕大军兵临江户城下，本可以一把火烧了那座百万人的城，他却选择坐下来谈，让幕府不流血地把城交出来。可他帮着建起来的新国家，转头就废了武士的刀、断了武士的俸禄。这一遍让你站在一个调停者的位置，看一个亲手建国的人，怎么被夹在他造的新世界和他来的旧世界中间。',
    en: 'A Satsuma samurai, born 1828, tall and broad with a booming voice, the kind of man others wanted to follow to the death. In the spring of 1868 he led the anti-shogunate army to the gates of Edo, a city of a million people. He could have burned it. Instead he sat down to talk, and the shogunate handed the city over without a drop of blood. Yet the new state he helped build then took away the samurai\'s sword and ended the samurai\'s stipend. This pass puts you in a mediator\'s seat, watching a man who helped build a nation get caught between the new world he made and the old world he came from.',
  },
  storyboard: [
    {
      id: 'mei-saigo-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我可以烧掉一座住着一百万人的城。我没有烧。\n\n1868 年春天，我领着倒幕的大军，一路打到江户城下。江户，就是今天的东京，当时全日本最大的城。城里幕府的残兵还在，只要我一声令下，几万人攻进去，巷战、放火、屠城——这座城会变成一片焦土。\n\n我没有下那个令。我选了一件更难的事：坐下来，跟对面谈。\n\n我是 Saigō Takamori（西乡隆盛），萨摩来的武士。我不是最会算计的人。打仗、聚人心，我在行；可这一次，我要做的不是打赢，是让对面心甘情愿地把城交出来——不流一滴血。\n\n这一遍，你坐进我这个位置。你手里握着能毁掉一切的力量。可真正难的，是忍住不用它。',
        en: 'I could have burned a city of a million people. I did not.\n\nIn the spring of 1868 I led the anti-shogunate army all the way to the gates of Edo. Edo is today\'s Tokyo, and back then the largest city in all Japan. The shogunate\'s last troops were still inside. One word from me, tens of thousands of men storm in, street fighting, fire, slaughter, and the city becomes a field of ash.\n\nI did not give that word. I chose the harder thing: to sit down and talk with the other side.\n\nI am Saigō Takamori, a samurai from Satsuma. I am not the cleverest schemer. Fighting and pulling people together, those I am good at. But this time, what I had to do was not to win the battle. It was to get the other side to hand over the city willingly, without spilling a drop of blood.\n\nThis pass puts you in my seat. You hold a force that can destroy everything. The truly hard part is holding back from using it.',
      },
      deliverGoal: 'N1 hook — 1868 春兵临江户城 (百万人/今东京) 本可烧城屠城却选谈 + Saigō 自我介绍 (萨摩武士/不最会算计但能打能聚人心) + 这一遍视角 (手握能毁一切的力量难的是忍住不用)',
      engagementHook: '我手里握着能烧掉一座百万人之城的力量，但我选择坐下来谈。当你有压倒性的力量时，「忍住不用」算软弱，还是更难的强大？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-saigo-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我后来为什么那么拧巴。\n\n我 1828 年生在萨摩（今天的鹿儿岛，在日本最南端）一个下级武士家庭。武士听着风光，可下级武士很多其实很穷——我家也是，俸禄低，一年到头吃糙米配腌菜。\n\n我长得人高马大，声音又粗又响，眼睛又大又亮。同时代的人说我有一种气场——不是嘴皮子利索，是让人愿意为我卖命。我不是萨摩最聪明的人，但我大概是萨摩最能把人心拢到一块儿的人。\n\n那时候，四艘冒黑烟的美国军舰（黑船）刚刚撞开日本的国门。幕府签了一堆让日本人觉得屈辱的条约，挡不住西方，护不了日本。\n\n像我这样的下级武士，心里烧起同一句话：尊王攘夷——把权力还给天皇，把西方蛮夷赶下海。我们要打倒这个没用的幕府。\n\n这就是我走上这条路的起点。',
        en: 'First, who I am, so you understand why I later became so torn.\n\nI was born in 1828 in Satsuma (today\'s Kagoshima, at the far southern tip of Japan), into a low-ranking samurai family. "Samurai" sounds grand, but many low-ranking ones were poor. So was my family, a small stipend, plain brown rice and pickled vegetables all year round.\n\nI was tall and broad, my voice rough and loud, my eyes large and bright. People of my time said I had a kind of presence, not a quick tongue, but something that made others willing to follow me to the death. I was not the cleverest man in Satsuma, but I may have been the best at gathering hearts into one.\n\nIn those years, four American warships trailing black smoke, the Black Ships, had just forced Japan\'s door open. The shogunate (bakufu, the military government that actually ruled) signed treaties that felt humiliating, could not hold off the West, could not protect Japan.\n\nIn low-ranking samurai like me, one phrase caught fire: sonnō jōi, "revere the Emperor, expel the barbarians." Return power to the Tennō, drive the Western barbarians back into the sea. We would topple this useless shogunate.\n\nThat is where my road began.',
      },
      deliverGoal: 'N2 setup — Saigō 出身 (1828 萨摩/鹿儿岛南端/下级武士穷家糙米腌菜) + 气场 (人高马大让人想卖命/不最聪明但最能聚人心) + 黑船叩关幕府签屈辱条约挡不住西方 + 尊王攘夷点燃下级武士要倒幕',
      engagementHook: '我不是最聪明的人，可我是最能让人愿意为我卖命的人。在一群人里，「让人信你、跟你走」算不算一种本事？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-saigo-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '一个人推不倒幕府。倒幕，先得有人愿意一起干。\n\n维新的两股最硬的力量，是西南角的两个藩（藩，就是半独立的领地）：我的萨摩，和最西边的长州。可这两家是几十年的世仇，见面就要打。\n\n1866 年初，一个土佐来的浪人坂本龙马居中牵线，把我们拉到京都的一张桌子上。我代表萨摩，木户孝允代表长州。两个死对头，握了手。这就是萨长同盟——后来推翻幕府的核心军事力量。\n\n你看，倒幕这件事，从一开始就不是「谁最能打」，而是「谁能让本来势不两立的两边，坐到一起」。这一手，我后来用了一辈子。\n\n1868 年，戊辰战争打响——倒幕军对幕府残部。我是倒幕军实际的统帅。1868 年初夏，上野一战，我领兵击溃了江户城里幕府的最后力量。\n\n可以说，没有我这一仗，就没有这场维新。\n\n但接下来那一步，才是真正难的一步。',
        en: 'One man cannot topple a shogunate. To topple it, you first need people willing to do it with you.\n\nThe two hardest forces of the Restoration were two domains in the southwest, the han (a han being a semi-independent territory): my Satsuma, and Chōshū in the far west. But these two had been enemies for decades; they came to blows on sight.\n\nIn early 1866, a wandering samurai from Tosa named Sakamoto Ryōma brought us to one table in Kyoto. I spoke for Satsuma; Kido Takayoshi spoke for Chōshū. The two old enemies shook hands. This was the Satchō Alliance, the core military force that would later overthrow the shogunate.\n\nYou see, toppling the shogunate was never about "who fights best." It was about "who can get two sides who cannot stand each other to sit down together." That move I would use my whole life.\n\nIn 1868 the Boshin War broke out, the anti-shogunate army against the shogunate\'s last men. I was the army\'s real commander. In early summer 1868, at the Battle of Ueno, I led the troops that crushed the shogunate\'s final force inside Edo.\n\nWithout that fight of mine, there may have been no Restoration.\n\nBut the step that came next was the truly hard one.',
      },
      deliverGoal: 'N3 setup — 倒幕要有人一起干 + 萨摩长州世仇 + 1866 坂本龙马牵线萨长同盟 (西乡 + 木户死对头握手) + 「倒幕不是谁最能打是谁能让势不两立两边坐一起」+ 1868 戊辰战争 Saigō 统帅 5.15 上野破幕军 + 没这一仗没维新 + 伏笔下一步更难',
      engagementHook: '倒幕的关键，不是谁最能打，是有人能把两个世仇拉到一张桌上握手。「让对立的人合作」，是不是比「自己很强」更难、更值钱？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-saigo-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n上野打赢了，江户城就在眼前。城里还有幕府的残部，城外是你的大军。所有人都等着你下令攻城。攻进去，你立刻就是终结幕府的大英雄。\n\n可你停住了。你脑子里转着一个别人来不及想的问题：江户住着一百万人。一旦巷战、放火，死的不只是幕府的兵——是满城的老百姓。把一座城烧成焦土，换一个「胜利」，值吗？\n\n你不是只会冲锋的人。你算的是：这座城，是将来这个新日本的家底。烧了它，你赢的是一片灰。\n\n于是你做了一件更难的事。你跟幕府那边的代表胜海舟，在城外坐下来，一对一地谈。你给对面一条活路：幕府交出江户城、交出武器，不流血，城里的人不受兵祸。\n\n这就是江户无血开城——一座百万人的城，没打一仗，换了主人。\n\n现在的问题是：在所有人都喊着「攻进去」的时候，你怎么忍住，去选那条没人给你掌声、却能少死很多人的路？',
        en: 'Now you are me.\n\nUeno is won, and Edo Castle is right before you. Inside are the shogunate\'s last men; outside is your army. Everyone waits for you to order the assault. Storm in, and you are at once the great hero who ended the shogunate.\n\nBut you stop. A question turns in you that others have no time to ask: a million people live in Edo. Once street fighting and fire begin, it is not only the shogunate\'s soldiers who die, it is a whole city of ordinary people. Burn a city to ash for one "victory," is it worth it?\n\nYou are not a man who only charges. Your reckoning is this: this city is the household wealth of the new Japan to come. Burn it, and what you win is a heap of ash.\n\nSo you do the harder thing. You sit down outside the city, one to one, with the shogunate\'s envoy Katsu Kaishū. You offer the other side a way out: the shogunate hands over Edo Castle and its weapons, no blood is shed, and the people inside are spared the ruin of war.\n\nThis is the bloodless surrender of Edo, a city of a million handed over without a single battle.\n\nNow the question: when everyone is shouting "storm in," how do you hold back and choose the road that wins you no applause, yet lets far fewer people die?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 上野赢江户在眼前所有人等攻城 (攻进去立刻是大英雄) + 停住想百万人巷战放火死的是老百姓 + 城是新日本家底烧了赢一片灰 + 跟胜海舟坐下谈给活路 (交城交械不流血) + 江户无血开城 + 怎么忍住选没掌声却少死人的路',
      engagementHook: '攻进去你立刻是终结幕府的大英雄；忍住，你换来一座没被烧掉的城、却没人给你掌声。这两条路，你选哪条？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-saigo-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '维新成功了。我进了新政府的核心。该高兴了吧？\n\n可我心里越来越不是滋味。\n\n我们这群人，喊着「攘夷」（赶走蛮夷）起家。可一打才发现：拿旧式的刀和长矛，根本挡不住西方的舰炮。1863、64 年，我的萨摩和长州各自挨了西方一顿炮轰，城被烧、炮台被夷平。\n\n挨完打我们才痛苦地想明白一件事：要赶走蛮夷，先得变成蛮夷——学他们的枪炮、铁路、工厂、法律。\n\n于是新政府开始大刀阔斧地改。1871 年废藩置县——一纸令下，把两百多个藩、两百多年的封建版图，几个月里全抹平，权力全部收归中央。\n\n这一步我也是推手之一。可你品品这里头的滋味：我们打着「尊王攘夷」起兵，最后干的，是把整个旧日本拆了，照着「蛮夷」的样子重装。\n\n我帮着建的这个新国家，越来越强，也越来越不像我出生的那个世界。\n\n而真正让我撕裂的事，还在后头。',
        en: 'The Restoration succeeded. I joined the center of the new government. I should have been glad, no?\n\nBut something in me grew more and more uneasy.\n\nOur group rose up shouting jōi, "expel the barbarians." Yet once we fought, we found: old swords and spears could not hold off Western cannons at all. In 1863 and 1864, my Satsuma and Chōshū were each bombarded by the West, towns burned, gun batteries flattened.\n\nAfter that beating we worked out something painful: to drive out the barbarians, you first have to become one, learn their guns, railroads, factories, and laws.\n\nSo the new government began to change everything, fast and hard. In 1871 came haihan chiken, abolishing the han, with a single order erasing over 200 domains and a 200-year feudal map in a few months, pulling all power back to the center.\n\nI was one of the hands behind this step too. But taste the irony in it: we rose under "revere the Emperor, expel the barbarians," and what we ended up doing was tearing down the whole old Japan and rebuilding it in the barbarians\' image.\n\nThe new state I helped build grew stronger and stronger, and less and less like the world I was born into.\n\nAnd the thing that truly tore me in two was still to come.',
      },
      deliverGoal: 'N5 story — 维新成功进新政府核心却越来越不是滋味 + 攘夷起家但挨炮 (1863/64 萨长被轰城烧炮台夷平) → 「要赶走蛮夷先得变成蛮夷」+ 1871 废藩置县 (一纸令抹平两百藩两百年版图权力收归中央) Saigō 也是推手 + 反讽 (尊王攘夷起兵最后照蛮夷样子重装) + 新国家越强越不像他出生的世界 + 伏笔真正撕裂在后头',
      engagementHook: '我们喊着「赶走西方蛮夷」起兵，最后却把整个旧日本拆了、照着蛮夷的样子重装。「要打败对手，先得变成对手」——这是聪明，还是一种输法？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-saigo-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '真正撕裂我的，是新政府动到了「武士」本身。\n\n你得先懂武士是什么。武士不只是一种职业，是一种身份——可以带刀、有姓、领藩里按年发的俸禄（米）。其中最要紧的两样东西：腰上的刀，和头顶的发髻。\n\n发髻（chonmage），就是武士把头顶剃出一块、再把后面的头发束成一个髻。两百年来，这个发髻和这把刀，就是「我是武士」这句话本身。一个武士看一眼你的头、你的腰，就知道你是不是自己人。\n\n可新政府要的是一个人人平等、统一征兵的现代国家。武士这个特权阶级，是要被抹掉的。\n\n那些跟我出生入死的萨摩武士开始来找我。他们说：西乡桑，我们为维新流过血，现在新政府要收我们的刀、断我们的俸禄、连我们的头发都要我们剪掉。我们成了没用的人。\n\n我看着他们头顶那个发髻——那也是我头顶的发髻。我夹在中间了：一边是我亲手帮着建的新国家，它要往前走；一边是这些把我当主心骨的旧武士，他们正被这个新国家一点点抹掉。\n\n（很多别的维新官员，已经主动剪了发髻、穿上洋装，把自己变成新时代的人。我没有。我留着它。）',
        en: 'What truly tore me apart was when the new government reached the samurai themselves.\n\nFirst you must understand what a samurai is. A samurai is not just a job; it is an identity, the right to carry a sword, to have a surname, to draw a yearly stipend of rice from the han. Two things mattered most: the sword at the waist, and the topknot on the head.\n\nThe topknot (chonmage) is where a samurai shaved the crown of his head and bound the back hair into a knot. For 200 years, this topknot and this sword were the sentence "I am a samurai." A samurai glanced at your head and your waist and knew at once whether you were one of his own.\n\nBut what the new government wanted was a modern nation where all were equal and the army was drawn from everyone. The samurai, that privileged class, were to be erased.\n\nThe Satsuma samurai who had gone into danger with me began to come to me. They said: Saigō-san, we bled for the Restoration, and now the new government takes our swords, ends our stipends, even asks us to cut off our hair. We have become useless men.\n\nI looked at the topknot on their heads, the same topknot on mine. I was caught in the middle: on one side, the new state I had helped build with my own hands, which had to move forward; on the other, these old samurai who treated me as their backbone, being erased by that very state, bit by bit.\n\n(Many other Restoration officials had already cut their topknots and put on Western clothes, making themselves men of the new age. I did not. I kept mine.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (发髻 chonmage echo) — 真正撕裂是新政府动到武士本身 + 武士=身份 (带刀/有姓/俸禄) 最要紧刀 + 发髻 + chonmage 解释 (剃顶束髻/两百年「我是武士」就是这句话本身) + 新政府要人人平等统一征兵抹掉武士 + 萨摩旧武士来找他 (流过血现在收刀断俸剪发成没用的人) + 夹在新国家和旧武士之间 + 「别的官员已剪发穿洋装/我没有我留着它」(cross-lens 锚: 改革者剪掉自己的/农家女儿认不出剪发哥哥)',
      engagementHook: '别的维新官员都剪了发髻、穿上洋装，做了新时代的人。我没剪，我留着它。如果剪掉头发就是「跟上新时代」，留着它就是「不肯放下旧世界」——你会剪吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-saigo-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '新政府的改革，一刀比一刀深。\n\n1873 年，征兵令——打仗不再是武士的专利，普通农家的男丁满二十一岁就要去当兵。武士两百年的军事垄断，没了。\n\n1876 年，两记最重的：3 月 28 日废刀令——除了军人警察，谁也不许在公开场合带刀。8 月，强制把武士世袭的俸禄一次性折成政府债券了断。带刀、领俸、世袭身份——武士的三样命根子，全被法律拿掉了。\n\n最讽刺的是：主导立这些法的，正是当年从下级武士里出来的维新官员——我的同路人。我们这群武士，亲手立法消灭了「武士」这个阶级。\n\n我跟政府的裂痕越来越大。1873 年，我又因为一桩对外政策上的争执（要不要对朝鲜动武），跟政府闹翻，辞了官，回了鹿儿岛老家。\n\n我回乡办了几所学校，收的全是那些没了出路的旧武士子弟。我没打算造反。可我身边，聚起了一大群被新国家抛下、满腔怨气、又无处可去的人。\n\n他们看着我，像看着最后一根稻草。',
        en: 'The new government\'s reforms cut deeper with each blow.\n\nIn 1873 came conscription: war was no longer the samurai\'s alone, every farmer\'s son had to serve at twenty-one. The samurai\'s 200-year monopoly on war was gone.\n\nIn 1876 came the two heaviest. On March 28, the Sword Ban (Haitōrei): except for soldiers and police, no one could carry a sword in public. In August, a forced settlement converted the samurai\'s hereditary stipends into government bonds, all at once. Carrying a sword, drawing a stipend, hereditary status, all three pillars of being a samurai, taken away by law.\n\nThe bitterest irony: the people who led these laws were the very Restoration officials who had come up from the low-ranking samurai, my own comrades. We samurai, with our own hands, legislated the samurai class out of existence.\n\nMy rift with the government grew. In 1873, over a quarrel about foreign policy (whether to make war on Korea), I broke with them, resigned my post, and went home to Kagoshima.\n\nBack home I founded a few schools, taking in the sons of old samurai who had lost their way. I did not plan to rebel. Yet around me gathered a great crowd of people cast off by the new state, full of bitterness, with nowhere to go.\n\nThey looked at me as if I were their last straw.',
      },
      deliverGoal: 'N7 story — 改革一刀比一刀深 + 1873 征兵令 (打仗不再武士专利/农家男丁 21 岁当兵/武士军事垄断没了) + 1876.3.28 废刀令 + 8 月强制俸禄折债券 (带刀领俸世袭三样命根子全被法律拿掉) + 最讽刺主导立法的正是下级武士出身的维新官员 (亲手立法消灭武士阶级) + 1873 因征韩论争执跟政府闹翻辞官回鹿儿岛 + 办学收没出路旧武士子弟没打算造反 + 身边聚起被抛下满腔怨气的人看他像最后一根稻草',
      engagementHook: '亲手立法消灭「武士」这个阶级的，正是当年从武士里出来的维新官员——我的同路人。一群人亲手拆掉让自己成为自己的东西，这是进步，还是背叛？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-saigo-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1877 年，事情失控了。\n\n那些走投无路的萨摩旧武士，再也忍不住，拥着我起兵了。这就是西南战争。\n\n我得诚实告诉你：这场仗，我可能并不是真正的主谋。更像是——我被推上了那个位置，然后再也下不来。\n\n你想想我的处境：这群人为我流过血，把我当主心骨。现在他们被新国家逼到绝路，要拼最后一口气。我能转身对他们说「你们错了，散了吧」吗？我做不到。我放不下这些跟我出生入死的人。\n\n于是我跟着他们，走上了一条我心里清楚多半要输的路。\n\n约一万两三千人的起义军，向北进军，被挡在熊本城下。守城的，是政府的征召兵——昨天还是农民、被「血税」征来的新军。这一围，打了五十多天，给了政府调集大军的时间。\n\n这是整场维新最残忍的一笔：旧式武士的刀，输给了昨天还是农民的征兵新军。\n\n这恰恰证明了维新自己造的征兵制是对的。证明它对的那一仗，杀的正是维新最大的英雄，和他身后最后一批旧武士。',
        en: 'In 1877, things spun out of control.\n\nThe Satsuma samurai with nowhere left to go could hold back no longer, and rose up with me as their figure. This was the Satsuma Rebellion.\n\nI have to be honest with you: this war, I may not have truly planned. It was more like, I was pushed to the front, and then could no longer step back.\n\nThink of my position: these men had bled for me, treated me as their backbone. Now the new state had cornered them, and they meant to spend their last breath. Could I turn and say, "you are wrong, disband"? I could not. I could not let go of the men who had gone into danger with me.\n\nSo I followed them down a road I knew, in my heart, would most likely lose.\n\nThe rebel army of about 12,000 to 13,000 marched north and was stopped at Kumamoto Castle. The castle was held by the government\'s conscript soldiers, new troops who, the day before, had been farmers drafted under the new conscription law that villagers bitterly called the "blood tax." The siege lasted over 50 days, giving the government time to gather a much larger army.\n\nThis was the cruelest stroke of the whole Restoration: the old samurai sword lost to a conscript army that had been farmers the day before.\n\nIt proved exactly that the thing the Restoration built, conscription, worked. And the battle that proved it killed the greatest hero of the Restoration, and the last of the old samurai standing behind him.',
      },
      deliverGoal: 'N8 story — 1877 失控旧武士拥他起兵 = 西南战争 + anti-fab 诚实 (可能并非主谋更像被推上位下不来) + 处境 (这群人为他流血当主心骨被逼绝路他放不下不能说散了吧) + 明知多半要输还跟着走 + 约 1.2-1.3 万人北上被挡熊本城 + 守城征召兵 (昨天农民血税征来新军) 围五十多天给政府调兵时间 + 最残忍 (旧武士刀输给昨天还是农民的征兵新军) + 证明征兵制对/那一仗杀的正是维新最大英雄和最后旧武士',
      engagementHook: '我多半知道这场仗会输，可这群人为我流过血、把我当主心骨，我放不下他们。明知是死路，还要陪一群信你的人走到底——这是义气，还是糊涂？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-saigo-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1877 年 9 月，我们退到了鹿儿岛城山的山头上。\n\n残部没剩多少人了，政府的大军把这座小山围得水泄不通。9 月 24 日，总攻开始。\n\n这一段，是 lens 让你听见——他没有把那一刻心里在想什么写下来，史料确证的，是他的处境、他的死法、他选择和旧武士一起赴死。下面这些，是叙事让你贴近他的两难，不是他留下的原话——\n\n你站在城山的山头上。脚下是你出生的萨摩，是养你长大的这片南方土地。山下，是你亲手帮着建起来的那个新政府的军队，正在往上打。\n\n你打了一辈子仗，从没像这一刻这么清楚：你两头都是自己人。山下那支能打的新军，是你想要的新日本；山上这群要陪你死的旧武士，是你来的那个旧世界。\n\n你帮着建了一个新国家，这个新国家现在要你的命；你舍不下一群旧武士，这群旧武士把你拖进了必死之局。\n\n那一战，西乡身受重伤。他选择了自尽。约五十岁。\n\n维新最大的英雄，死在维新自己手里。',
        en: 'In September 1877 we pulled back to a hill called Shiroyama in Kagoshima.\n\nFew of the survivors were left, and the government\'s large army sealed off the little hill from every side. On September 24, the final assault began.\n\nThis part is the pass letting you hear it. He left no record of what was turning in his mind that moment. What is solid is his situation. What is solid is the way he died. What is solid is his choice to die with the old samurai. What follows is the story drawing you close to his bind, not words he left behind.\n\nYou stand on the hilltop at Shiroyama. Below your feet is the Satsuma where you were born, the southern land that raised you. Down the hill is the army of the new government you helped build with your own hands, fighting its way up.\n\nYou have fought your whole life, and never so clearly as this moment: both sides are your own. The strong new army below is the new Japan you wanted; the old samurai above, who will die with you, are the old world you came from.\n\nYou helped build a new nation, and that nation now wants your life; you could not let go of the old samurai, and the old samurai dragged you into a death you could not escape.\n\nIn that final battle, Saigō was badly wounded. He chose to take his own life. He was about fifty.\n\nThe greatest hero of the Restoration died at the hands of the Restoration itself.',
      },
      deliverGoal: 'N9 story (climax, anti-fab framed) — 1877.9 退城山山头 + 残部无几政府大军围 9.24 总攻 + anti-fab 框架 (这一段 lens 让你听见/没写下来/史料确证处境死法和选择共死/下面是叙事贴近两难不是原话) + 山头两头都是自己人 (山下新军=想要的新日本/山上旧武士=来的旧世界) + 帮建新国家新国家要他命/舍不下旧武士被拖进必死 + 重伤自尽约五十岁 + 维新最大英雄死在维新手里',
      engagementHook: '我站在城山的山头，山下是我帮着建的新国家的军队，山上是我来的那个旧世界——两头都是我的自己人。当你两边都是自己人，又只能站一边，你怎么办？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-saigo-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，最难评的，是 1877 年那场注定要输的起兵。两种说法都站得住。\n\n一种说法：那是背叛。我亲手帮着建起这个新国家——废藩、征兵、收刀，让日本强到没被西方殖民。可一转身，我又带着旧武士，把枪口对准了我自己造的这个国家。一个建国的人，回头去打自己建的国，这是对新日本的背叛，是放不下私情、挡在历史车轮前的人。\n\n另一种说法：那是最后的忠诚。那群旧武士为维新流过血，转头就被新国家收了刀、断了俸、抛在一边，没人替他们说一句话。我没法对把我当主心骨的人说「你们没用了，散了吧」。明知要输还陪他们走到底，不是挡历史，是不肯抛下被这个新时代碾过去的人。\n\n这两边，不是「忠」对「叛」。是同一个我的两半——那个想建一个强日本的我，和那个放不下旧同伴的我，最后在城山的山头上，自己跟自己打了一仗。\n\n你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Of my whole life, the hardest thing to judge is the doomed uprising of 1877. Both views stand.\n\nOne view: it was a betrayal. With my own hands I helped build this new nation, abolishing the han, conscription, a constitution, making Japan strong enough not to be colonized by the West. Then I turned around and led the old samurai to fire on the very state I had built. A man who builds a nation and then turns back to fight it, this is a betrayal of the new Japan, a man who could not let go of private loyalties and stood in the path of history\'s wheel.\n\nThe other view: it was a last act of loyalty. Those old samurai had bled for the Restoration, and were then stripped of their swords, their stipends, cast aside by the new state, with no one to speak a word for them. I could not tell the men who treated me as their backbone, "you are useless now, disband." To follow them to the end knowing we would lose was not standing in history\'s way; it was refusing to abandon the people the new age had crushed.\n\nThese are not "loyalty" against "betrayal." They are two halves of one me, the me who wanted to build a strong Japan, and the me who could not let go of old comrades, fighting each other, at last, on the hilltop at Shiroyama.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 1877 注定输的起兵是背叛新国家还是对被抛下旧武士的最后忠诚 / 一种说法 (背叛/亲手建国回头打自己建的国/放不下私情挡历史车轮) / 另一种说法 (最后的忠诚/旧武士流血被收刀断俸抛弃没人说话/不能对把他当主心骨的人说没用了散了/不抛下被新时代碾过的人) / 同一个我的两半在城山自己跟自己打一仗 / 无学者堆中立无预判 / 想 30 秒两边都站得住',
      engagementHook: '回头去打自己亲手建的国——是背叛，还是对那群被新国家抛下的人的最后忠诚？同一个我的两半，在城山上自己跟自己打了一仗。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'mei-saigo-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，一个帮着建国、又死在自己建的国手里的人，你会怎么评价这样一个被夹在两头的人？\n\n我留着那个发髻没剪。我站在新日本和旧日本中间，哪一边都是我的人，哪一边我都没能保全。这样一个人，是历史的绊脚石，还是历史的良心？你怎么评？\n\n不过先记住：这一遍，你只听到了我这一边。那个把发髻剪掉、穿上洋装、亲手立法废掉武士的改革官员，他会说我太念旧、挡了路；那个乡下的农家女儿，看着哥哥被「血税」征走、看着熟悉的世界一样样消失——她承受的，正是我们这些人在屋里决定的。换个视角再走一遍，你会听见他们怎么挑战我，也看看你刚才的判断站不站得住。\n\n（留意那个发髻。剪不剪它，三个人有三种选择。等你三遍都走过，你自己会看见它意味着什么。）\n\n再想一步：今天你身边，有没有一件「为了往前走，必须放弃一些旧东西」的事？放弃的时候，那些被放下的人、被丢掉的东西，有没有人替他们说一句话？那时候，你会做那个往前推的人，还是那个回头拉一把的人？',
        en: 'Having walked my whole life, a man who helped build a nation and then died at the hands of the nation he built, how would you judge someone caught between two sides?\n\nI kept that topknot; I did not cut it. I stood between the new Japan and the old, both sides were my own, and I could save neither. A man like this, is he a stumbling block in history\'s path, or history\'s conscience? How do you judge it?\n\nBut first, remember: this pass, you heard only my side. The reformer who cut off his topknot, put on Western clothes, and legislated the samurai away with his own hand, he would say I clung to the old and stood in the way. The farm daughter in the countryside, watching her brother taken by the "blood tax," watching the world she knew vanish piece by piece, what she endures is exactly what men like us decided in our rooms. Run it again through another lens and you will hear how they challenge me, and see whether the judgment you just made still holds.\n\n(Watch that topknot. Whether to cut it, three people make three choices. When you have walked all three passes, you will see for yourself what it means.)\n\nThen take one more step: in your own life today, is there something where "to move forward, you must give up some old things"? When you give them up, the people left behind, the things thrown away, does anyone speak a word for them? When that happens, will you be the one who pushes forward, or the one who turns back to pull someone up?',
      },
      deliverGoal: 'N11 close/meta — 评价帮建国又死在自己建的国手里被夹两头的人 (留发髻没剪/站新旧日本中间哪边都是他的人都没保全 → 历史绊脚石 vs 历史良心) + 跨视角指针 (只听到我这一边 / 剪发髻穿洋装立法废武士的改革官员会说太念旧挡路 / 农家女儿哥哥被血税征走熟悉世界消失承受的正是屋里决定的 / 换视角再走看判断站不站得住) + 发髻 cross-lens echo 4th-wall (剪不剪三人三选择走过三遍自己看见意味什么/不揭具体) + transfer (今天为往前走必须放弃旧东西/被放下的人有没有人说话/你做往前推还是回头拉的人)',
      engagementHook: '我站在新旧日本中间，哪一边都是我的人，哪一边我都没保全。你会怎么评价这样一个人——历史的绊脚石，还是历史的良心？今天你身边那件「为了往前走必须放弃旧东西」的事，你会做往前推的人，还是回头拉一把的人？',
      expectsRealAnswer: true,
    },
  ],
};

export var farmDaughterLens = {
  id: 'farm-daughter-receiving-end',
  name: 'The Farmer\'s Daughter',
  nameCn: '农家女儿',
  role: 'receiving-end',
  perspectiveTag: 'modernization-done-to-her',
  icon: '🌾',
  description: {
    cn: '本州中部一个山间村子里的农家女儿，约十四岁，家里世代种水稻，茅草屋顶，灶台烧柴。京城里换了谁当权，她不知道，可那场维新还是一件件落到了自家门口：从前交米的税，变成了一定要拿出现钱的税；哥哥的名字被官府从一本名册上念走，去给一个谁也没见过的天皇当兵。这一遍，你站在一个没参与任何决策、却要承受全部重量的人这边，看一个国家「变强」是什么滋味。',
    en: 'A farmer\'s daughter in a mountain village in central Japan, about fourteen. Her family has grown rice for generations; the roof is thatch, the stove burns wood. She does not know who took power in the capital, yet the Restoration still landed on her own doorstep, piece by piece: the tax once paid in rice became a tax that demanded hard cash, and her brother\'s name was read off a list by government men and taken away to serve an Emperor no one had ever seen. This pass puts you on the side of someone who made no decisions at all, yet had to carry the whole weight, and lets you taste what it is for a country to "grow strong."',
  },
  storyboard: [
    {
      id: 'mei-farm-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '天刚亮，我已经在水田里了。\n\n我们家世代种稻。脚下是温的泥，水到小腿，秧苗一排排插下去，腰一天到晚是弯的。我的手指泡得发白，指甲缝里全是黑泥。这片田，我爷爷的爷爷就在种。\n\n我大概十四岁，住在山里一个小村子。我没有什么大事好讲给你听：我不识字，没去过京城，没见过天皇，也没见过那几艘把一切搅乱的黑船。\n\n可有一年，村外那些大人物干的事，开始一件件落到我家门口。先是税变了样，后来哥哥被人从一本名册上念走。我那个一切都有定数的世界，一样一样，开始散了。\n\n这一遍，你站到我这儿，一个没参与任何决定、却要承受全部重量的人，看一个国家「变强」落到一户人家身上，是什么滋味。',
        en: 'The sky has just turned light, and I am already in the rice paddy.\n\nMy family has grown rice for generations. Under my feet the mud is warm, the water reaches my shins, and the young seedlings go in row by row while my back stays bent all day long. My fingers are soaked pale, the black mud packed under my nails. This paddy, my grandfather\'s grandfather worked it too.\n\nI am about fourteen, and I live in a small village in the mountains. I have no great events to tell you. I cannot read, I have never been to the capital, I have never seen the Emperor, and I have never seen the Black Ships that stirred everything up.\n\nBut one year, the things the great men outside the village did began to land on my own doorstep, one by one. First the tax changed shape. Then my brother was read off a list and taken away. And my world, where everything had its fixed place, began, piece by piece, to come apart.\n\nThis pass, you stand where I stand, someone who made no decision at all yet had to carry the whole weight. You watch what it tastes like when a country "grows strong," and that strength lands on one family.',
      },
      deliverGoal: 'N1 hook — 天亮在水田 (温泥/秧苗/弯腰/手泡白) + 世代种稻爷爷的爷爷就种 + 约 14 岁山村女孩 (不识字/没去过京城/没见过天皇黑船) + 村外大人物的事落到门口 (税变样/哥哥被念走) + 有定数的世界开始散 + 这一遍从没参与决策却承受全部重量看「国家变强」落到一户人家',
      engagementHook: '村外的大人物干的事，开始一件件落到我家门口——可没人问过我们一句。你能想象「大事都在别处决定，重量却落在你头上」是什么感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-farm-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我家平常的日子，你才懂后来那些变化为什么那么吓人。\n\n我们种稻，交税。交税的法子，祖祖辈辈都一样：到了秋天，按地里收成交米。收成好就多交一点，收成坏，年景不好，可以少交，可以去求情，求管事的宽限。\n\n这法子我懂。它跟着老天爷走——天给多少，我们交多少。荒年饿肚子是真的，可至少官府不会逼你拿出你根本没有的东西。\n\n我们村子很小。谁家种哪块田、谁是村里说话算数的人、什么节气插秧、什么时候收割——这些事，几百年都没怎么变过。变的只有天气。\n\n那时候，「日本」对我来说不是一个国家。我的世界，就是这片田、这座山、这条溪，和我家这几口人。江户城里坐着谁，跟我有什么关系？\n\n我那时还不知道：很快，会有人在很远的地方，替我决定我该交什么、我哥哥该去哪儿。',
        en: 'First let me tell you our ordinary days, so you understand why the changes later were so frightening.\n\nWe grow rice, and we pay tax. The way we paid it was the same for generations: in autumn, you paid in rice, based on what the land yielded. A good harvest, you paid a little more. A bad harvest, a hard year, you could pay less, you could plead, you could ask the man in charge for more time.\n\nThis way I understood. It followed Heaven. What Heaven gave, we paid. Going hungry in a lean year was real, but at least the government would not force you to hand over a thing you simply did not have.\n\nOur village was very small. Who farmed which paddy, who in the village had the final word, which season to plant, when to harvest, these things had hardly changed in hundreds of years. Only the weather changed.\n\nBack then, "Japan" was not a country to me. My world was this paddy, this mountain, this stream, and the few people in my house. Whoever sat in the city of Edo, what did that have to do with me?\n\nI did not yet know: soon, someone far away would decide for me what I owed, and where my brother would go.',
      },
      deliverGoal: 'N2 setup — 老法子交税 (秋天按收成交米/好多交坏少交可求情宽限) + 这法子跟着老天走至少不逼你拿没有的东西 + 村子很小几百年没变只有天气变 + 「日本」不是国家她的世界是田山溪和家人 (江户城坐着谁跟我无关) + 伏笔: 很快有人在很远的地方替我决定',
      engagementHook: '从前交税跟着老天爷走——天给多少，我们交多少，至少官府不会逼你拿出你根本没有的东西。你觉得「税该不该跟着收成走」？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-farm-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '后来我才慢慢拼凑出，村外到底出了什么事。\n\n大人们坐在灶火边，压着声音说：海上来了几艘冒黑烟的大船，是西边来的洋人，逼着日本开了门。说统治了好多年的幕府，被一群年轻人推翻了。说权力如今归了天皇——一个住在京城、我从没见过、据说尊贵得像神一样的人。\n\n这些名字、这些大事，对我来说像隔着一层雾。天皇是谁？幕府又是什么？我说不清。\n\n我只听懂一句反复被提起的话：从今往后，「国家」要变强了。要有新的军队、新的工厂、新的规矩。\n\n那时候我还不害怕。变强是好事吧？跟我一个种田的女孩，又能有多大关系？\n\n（村里人当时怎么议论、怕到什么程度，没人替这样一个村子逐字记下来；史料确证的是政策本身——这一段是替你把那座村子的灯火和低语还原出来。）\n\n我没想到，「国家变强」这四个字，会一笔一笔，写在我家的账上。',
        en: 'Only later did I slowly piece together what had happened outside the village.\n\nThe grown-ups sat by the cooking fire and said, in low voices: great ships trailing black smoke had come from the sea, foreigners from the West, and forced Japan to open its doors. They said the bakufu, the military government that had ruled for many years, had been overthrown by a band of young men. They said power now belonged to the Tennō, the Emperor, a man who lived in the capital, whom I had never seen, and who was said to be sacred, almost like a god.\n\nThese names, these great events, were like something behind a fog to me. Who was the Emperor? What was the bakufu? I could not say.\n\nI only caught one sentence, said over and over: from now on, the "country" was going to grow strong. There would be a new army, new factories, new rules.\n\nBack then I was not yet afraid. Growing strong was a good thing, wasn\'t it? And what could it have to do with a girl who farmed?\n\n(How the village actually talked, how frightened they were, no one wrote down word for word for a place like this; what is documented is the policies themselves. This part draws back for you the lamplight and the low voices of that village.)\n\nI never guessed that those words, "the country grows strong," would be written, stroke by stroke, onto my family\'s account.',
      },
      deliverGoal: 'N3 setup — 拼凑村外的事 (灶火边低声: 海上冒黑烟的大船洋人逼开门/幕府被年轻人推翻/权力归天皇住京城像神) + 这些名字像隔层雾 (天皇是谁幕府是什么说不清) + 只听懂「国家要变强」(新军队工厂规矩) + 那时不害怕 (变强是好事跟种田女孩有什么关系) + anti-fab 括号短句 (村里议论没逐字记/确证的是政策/这段替你还原灯火低语) + 伏笔「国家变强」会写在我家账上',
      engagementHook: '我那时还不害怕——「国家变强」是好事吧？跟一个种田的女孩，又能有多大关系？如果你是她，你会想到这四个字会落到自己头上吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-farm-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n收税的日子到了。可这一年，来的人念出一套你从没听过的新规矩。\n\n他说：以后不按收成交米了。以后按你这块地「值多少钱」，交固定的现钱。不管今年雨水好不好、稻子收成怎么样——这笔钱，一文都不能少。\n\n你站在田埂上，听不太懂。「值多少钱」是什么意思？地就是地，怎么会有一个写死的价？可你看见娘的脸一下子白了。\n\n那年晚上，娘坐在灶边，对着算盘，一遍一遍地拨。米价跌了，地里那点稻子，换不来官府要的那笔现钱。差的那一截，要么卖东西，要么去借——借了高利贷，利滚利，下一年更还不上。\n\n你看着娘的眉头越皱越紧，心里第一次明白一件事：从前荒年，老天爷会松手；现在这套新规矩，荒年也不松手。\n\n它要的不是你家有的东西。它要的，是一个写在纸上的、死板的数。',
        en: 'Now you are me.\n\nThe day to pay the tax came. But this year, the man who came read out a new set of rules you had never heard.\n\nHe said: from now on, you do not pay in rice based on the harvest. From now on, you pay a fixed amount of hard cash, based on what your plot of land is "worth." No matter whether the rains came this year, no matter how the rice did, this money, not a single coin can be short.\n\nYou stand on the paddy ridge and cannot quite follow. What does "worth" mean? Land is land, how can it have a price set in stone? But you see your mother\'s face go white all at once.\n\nThat night, your mother sits by the stove with the abacus, sliding the beads over and over. The price of rice has fallen; the little rice in the field cannot be turned into the cash the government wants. The gap, you either sell things, or you borrow, borrow from a moneylender, the interest piling on interest, and next year you can pay even less.\n\nYou watch your mother\'s brow knot tighter and tighter, and for the first time you understand one thing: in the old days, in a lean year, Heaven would loosen its grip. This new rule does not loosen its grip, not even in a lean year.\n\nWhat it wants is not the thing your family has. What it wants is a number written on paper, fixed and unbending.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1873 地税改革落到她家 (不按收成交米/按地「值多少钱」交固定现钱/不管收成一文不少) + 田埂上听不懂「值多少钱」+ 娘脸白了 + 晚上对算盘 (米价跌换不来现钱/差的卖东西或借高利贷利滚利) + 第一次明白: 老天爷会松手新规矩荒年也不松手 + 它要的不是你家有的东西是纸上死板的数',
      engagementHook: '从前荒年老天爷会松手；现在这套新规矩，荒年也不松手——它要的不是你家有的东西，是一个写在纸上的、死板的数。这样的「进步」，落在你家，你怎么受？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-farm-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '新税还没缓过来，第二件事就来了，比税更重。\n\n有一天，官府的人进村，手里拿着一本名册。他站在村口，照着本子，一个一个念名字。\n\n念到我哥哥的名字。\n\n我们这才听说，京城又出了一条新令：满了岁数的男丁，都要去当兵。村里人不叫它当兵，叫它「血税」。意思是，官府从前抽你的米、抽你的钱，现在干脆要抽你的人、抽你的血。\n\n从前打仗是武士的事。武士带刀、有姓、世世代代就是打仗的人，跟我们种田的没关系。可现在，国家伸手进了我家，把我哥哥，一个只会插秧割稻的农家少年，直接抽走，去给一个我们谁也没见过的天皇当兵。\n\n哥哥走的那天，娘没哭出声，只是死死攥着他的袖子。哥哥要去哪儿？谁也说不清。多久回来？谁也说不清。\n\n那一刻我懂了：「国家变强」要的兵，原来就是从我们这样的人家里，一个一个抽走的。',
        en: 'The new tax had not eased before the second thing came, heavier than the tax.\n\nOne day, government men came into the village with a register in their hands. One stood at the village entrance, reading off the book, name by name.\n\nHe read my brother\'s name.\n\nOnly then did we hear: the capital had passed another new order. Every young man of age had to go and be a soldier. The villagers did not call it being a soldier; they called it the "blood tax," meaning the government used to take your rice and your money, and now it would simply take your people, take your blood.\n\nIn the old days, war was the samurai\'s business. The samurai carried swords, had family names, were fighting men generation after generation, nothing to do with us who farmed. But now the state reached into my house and pulled my brother, a farm boy who knew only how to plant and cut rice, straight out, to be a soldier for an Emperor none of us had ever seen.\n\nThe day my brother left, my mother did not cry out loud. She only gripped his sleeve and would not let go. Where was my brother going? No one could say. How long until he came back? No one could say.\n\nIn that moment I understood: the soldiers the "strong country" wanted were pulled, one by one, out of homes like ours.',
      },
      deliverGoal: 'N5 story — 1873 征兵令 (官府拿名册进村站村口一个个念名字) + 念到哥哥的名字 + 满岁男丁要当兵村里叫「血税」(从前抽米抽钱现在抽人抽血) + 从前打仗是武士的事 (带刀有姓世代打仗跟种田无关) 现在国家伸手进家把只会插秧割稻的哥哥抽走给没见过的天皇当兵 + 哥哥走那天娘死死攥袖子 (去哪儿多久回都说不清) + 「国家变强」的兵是从我们这样的人家一个个抽走的',
      engagementHook: '从前打仗是武士的事，跟我们种田的没关系；现在，国家伸手进我家，把哥哥直接抽走。村里人管这叫「血税」。你觉得这个名字，起得过分吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-farm-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '哥哥走后好几年，有一天，他回村探家了。\n\n我听见院门响，跑出去，然后我愣在了门口。\n\n站在那儿的那个人，头发剪短了。哥哥从前头顶上那个发髻没了。我们这儿的男人，世世代代头顶都梳着那个发髻。他身上穿着一套我从没见过的衣裳，硬邦邦的，是西边人那种军装。他张嘴，说了几个我听不懂的新词。\n\n我站在门口，认了好一会儿，才认出：这是我哥哥。\n\n那一刻心里说不出的怪。这是哥哥，又好像不全是哥哥了。那个跟我一起在田里插秧、会被我追着满院子跑的哥哥，去了一趟「国家」，回来就换了一个样子。\n\n（他在外面这几年到底经历了什么、心里怎么想，他没细说，我也说不清；这一段是替你把我站在门口那一愣还原出来。能确证的，是那个时代的兵，回来就是这副剪发、穿洋装的样子。）\n\n剪掉的那个发髻，对别人也许只是一撮头发。可我知道，那是哥哥头顶上、那个旧世界留给他的最后一点记号。它也没了。',
        en: 'Several years after my brother left, one day, he came home to visit.\n\nI heard the courtyard gate, ran out, and then I froze in the doorway.\n\nThe man standing there had his hair cut short. The topknot my brother used to wear on the crown of his head was gone. The men here had worn that topknot for generations. He wore clothes I had never seen, stiff ones, the Western kind of uniform. He opened his mouth and said a few new words I could not understand.\n\nI stood in the doorway and looked for a long while before I knew it: this was my brother.\n\nIn that moment something felt strange beyond words. This was my brother, and yet not quite my brother anymore. The brother who planted rice with me in the paddy, who I used to chase around the courtyard, had gone off once to "the country," and come back wearing a different shape.\n\n(What he went through out there in those years, what was in his mind, he did not say in full, and I cannot say either. This part draws back for you that moment I froze in the doorway; what can be confirmed is that the soldiers of that age came home looking just like this, hair cut, dressed in Western clothes.)\n\nThe topknot they cut off, to others it might be just a tuft of hair. But I knew, it was the last mark the old world had left on the crown of my brother\'s head. And it, too, was gone.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (HER 角度看 chonmage/剪发) — 哥哥几年后回村探家 + 她跑出去愣在门口 (头发剪短了/发髻没了世世代代男人头顶梳的发髻/穿没见过的硬邦邦西式军装/说听不懂的新词) + 认了好一会儿才认出是哥哥 + 心里怪 (是哥哥又不全是/去了趟「国家」回来换了样) + anti-fab 括号短句 (他经历什么没细说/这段还原门口一愣/确证的是那时代兵回来就这样) + 剪掉的发髻对别人是一撮头发对她是旧世界留给哥哥最后的记号也没了',
      engagementHook: '我站在门口认了好一会儿，才认出那是我哥哥——剪掉的发髻，对别人也许只是一撮头发，对我，是那个旧世界留给他的最后一点记号。一个人「变了样」，到底是哪里变了？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-farm-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '后来我才知道，被这样翻过来的，不只我们一家、不只我们一国。\n\n隔着海，那边有一个很大的国家，叫清朝——就是中国。差不多同一个时候，西边的洋人也用大船大炮，把它的门撞开了。\n\n它也急着要变强。它也喊过几乎一样的口号「富国强兵」，跟我们这边的人喊的，是同一句话。它也办了厂、买了船、派人出去学本事。这件事，那边叫「洋务运动」。\n\n（这些大国之间的事，是后来念过书的人讲给我听的，不是我一个村姑能看见的。我能看见的，只有自家门口这点变化。）\n\n可这两个国家，最后走上了不一样的路。同一句「富国强兵」，落到两边老百姓头上，轻重也不一样。\n\n我没本事评判谁对谁错，那不是一个种田女孩说得清的事。我只知道一件我们两边都一样的事：喊「富国强兵」的人，坐在很高的地方；真正被这四个字压着、付出代价的，是隔着一片海、却同样在地里弯着腰的，我和我那边的姐妹。',
        en: 'Only later did I learn that ours was not the only family, nor the only country, turned over like this.\n\nAcross the sea there was a very large country called the Qing, that is, China. At almost the same time, the Westerners battered its doors open too, with great ships and cannons.\n\nIt, too, was anxious to grow strong. It, too, shouted almost the same slogan, "rich country, strong army," the same words as the men shouted on our side. It, too, built factories, bought ships, sent people abroad to learn skills. Over there they called this the Self-Strengthening Movement.\n\n(These matters between great countries were told to me later by people who had studied; they were not something a village girl could see. What I could see was only the small changes at my own door.)\n\nBut these two countries, in the end, walked different roads. The same "rich country, strong army," landing on the common people of each side, weighed differently too.\n\nI have no power to judge who was right and who was wrong; that is not a thing a farming girl can settle. I only know one thing the same on both sides: the men who shouted "rich country, strong army" sat in very high places, and the ones truly pressed under those words, paying the price, were me, and my sisters across a stretch of sea, bent the same way over the soil.',
      },
      deliverGoal: 'N7 China bridge (§9, ONE clean contrast, Rule 0 neutral) — 被翻过来的不只一家不只一国 + 隔海的大国清朝即中国差不多同时被洋人大船大炮撞开门 + 它也急着变强也喊「富国强兵」同一句话也办厂买船派人学 (那边叫洋务运动) + anti-fab 括号短句 (大国之间的事是念过书的人讲给我听/我能看见的只有自家门口) + 两国走上不一样的路同一句话落两边老百姓头上轻重不一样 + 她不评判谁对错 (不是种田女孩说得清的) + 只知一件两边一样的: 喊口号的坐高处真正被压付代价的是隔海同样弯腰种地的我和姐妹',
      engagementHook: '隔着一片海，清朝也喊「富国强兵」，也办厂买船——可两国走上了不一样的路。我说不清谁对谁错；我只知道：喊口号的人坐在高处，被这四个字压着的，是两边同样弯腰种地的人。这一点，你怎么看？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-farm-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我还想跟你说说，那些说不出名字、却最让我难受的变化。\n\n税变了，哥哥走了，这些我还说得清。可有些东西，是慢慢地、悄悄地不作数了。\n\n我从小知道的那些规矩，一样一样，开始松动：谁是武士、谁种地、姓什么、见了谁要低头。村里来了新的学堂，要孩子去念书，念一些我们大人都没听过的东西。连日子怎么算、过年是哪一天，都换了一套新的。\n\n这些事，单拎出来哪一件，好像都不算天塌下来。可它们加在一起，是我从小站着的那块地，在脚底下一点一点变软。\n\n我说不上来这是变好了还是变坏了。我只知道一种感觉：从前我闭着眼都知道明天是什么样子；现在，我睁着眼，也看不清明天了。\n\n那个一切都有定数、祖祖辈辈传下来怎样就怎样的世界——它没有哪一天轰地一声塌掉。它是一样一样、悄无声息地，没了。',
        en: 'I want to tell you, too, about the changes I cannot name, the ones that hurt me most.\n\nThe tax changed, my brother left, these I can still put into words. But some things stopped holding slowly, quietly.\n\nThe rules I had known since I was small, who is a samurai, who farms, what family name you carry, who you bow to when you meet them, one by one, began to loosen. A new school came to the village, wanting the children to go and study, to learn things even we grown-ups had never heard of. Even how the days were counted, even which day was New Year, were swapped for a new set.\n\nNo single one of these, taken alone, was the sky falling. But added together, they were the ground I had stood on since childhood, going soft, bit by bit, under my feet.\n\nI cannot tell you whether this was for the better or the worse. I only know one feeling: in the old days, eyes shut, I knew what tomorrow would look like. Now, eyes open, I cannot see tomorrow clearly anymore.\n\nThat world where everything had its fixed place, passed down generation to generation just as it always was, it never fell with a crash on any one day. It went, one thing at a time, without a sound.',
      },
      deliverGoal: 'N8 story — 说不出名字却最难受的变化 (税哥哥还说得清/有些东西慢慢悄悄不作数) + 从小的规矩松动 (谁武士谁种地姓什么见谁低头) + 新学堂要孩子念大人没听过的东西 + 连日子怎么算过年哪天都换新的 + 单拎一件不算天塌加一起是脚底下的地变软 + 说不上变好变坏只知一种感觉 (从前闭眼知道明天现在睁眼看不清明天) + 有定数的旧世界没轰一声塌一样样悄无声息没了',
      engagementHook: '没有哪一天天轰地塌下来——是从小站的那块地，在脚底下一点一点变软。从前我闭着眼都知道明天什么样，现在睁着眼也看不清了。你失去过这种「明天有定数」的感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-farm-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '很多年过去，我老了，回头看这一切，才慢慢看出个大概。\n\n那些落在我家头上的事，现金税、抽走哥哥的征兵、新学堂、新日子，原来不是天灾，是有人在很远的地方，一条一条定下来的。他们要把一个散开的、各管各的旧日本，捏成一个能抗得住洋人的强国。\n\n后来人们说，那场维新，真把日本变强了：有了大军队、大工厂、铁路，再没被洋人吞掉，反倒回头打赢了仗。书里管这叫一个奇迹。\n\n可这个「奇迹」，是踩着什么垒起来的？是踩着像我家这样、说不上话的千千万万户人家——被新税逼着卖地借债的，被名册抽走儿子的，眼看旧世界塌了却没人来问一句的。\n\n我这一辈子，没人来问过我愿不愿意。\n\n哥哥头顶剪掉的那个发髻，娘半夜算盘上拨不出来的那笔钱，门口那一愣，这些没人会写进「奇迹」里。可它们是真的。它们也是这个强国的一部分，是它最不愿提起的那一部分。',
        en: 'Many years passed, I grew old, and looking back at all of it, I slowly made out the rough shape.\n\nThe things that landed on my family, the cash tax, the draft that took my brother, the new school, the new calendar, turned out not to be a natural disaster. They were set down, clause by clause, by people far away. They wanted to take an old Japan that had been scattered, each part minding its own, and squeeze it into a strong country that could arm-wrestle the foreigners.\n\nLater, people said that Restoration really did make Japan strong: a great army, great factories, railroads, never swallowed by the foreigners, and in turn winning wars. In the books they call it a miracle.\n\nBut this "miracle," what was it stacked up on? It was stacked on the countless families like mine, the ones with no say. The new tax forced us to sell land and go into debt. Our sons were taken off a list. We watched the old world fall, and no one came to ask us a single thing.\n\nIn my whole life, no one ever came to ask whether I was willing.\n\nThe topknot cut from my brother\'s head, the money my mother could not slide out on her abacus at midnight, that long pause in the doorway, no one will write these into the "miracle." But they were real. They, too, are part of this strong country, the part it least wants to bring up.',
      },
      deliverGoal: 'N9 zoom-out + 长尾 — 她老了回头看出大概 (落头上的事现金税征兵新学堂新日子不是天灾是有人很远地方一条条定的/要把散开的旧日本捏成能跟洋人掰手腕的强国) + 后来说维新真把日本变强 (大军队大工厂铁路没被吞反打赢仗书里叫奇迹) + 这奇迹踩着什么垒起来 (像我家说不上话的千千万万户/新税逼卖地借债/名册抽走儿子/旧世界塌没人问一句) + 我这辈子没人问过我愿不愿意 + 剪掉的发髻+娘拨不出的钱+门口一愣没人写进奇迹但是真的也是这强国最不愿提的一部分',
      engagementHook: '后来书里把它叫一个奇迹。可这个奇迹，是踩着像我家这样说不上话的千千万万户人家垒起来的——我这一辈子，没人来问过我愿不愿意。一个「奇迹」，可以不问代价由谁承受吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mei-farm-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看那场把日本变强的维新，有一个真问题，等你来答。\n\n一个国家，确实变强了：它没被洋人吞掉，它有了大军队、大工厂，它后来挺直了腰。可这份强，是建在像我家这样、从没被问过一句的人家背上的——现金税逼我们卖地，名册抽走我哥哥，旧世界在我们脚下塌掉，没人来商量。如果一份强，是这样换来的，它到底值不值？\n\n一种说法：值。一个挡不住洋人的弱国，会被人家像捏软柿子一样捏碎、瓜分、踩在脚下——到那时候，遭殃的还是我们这样的人家，而且更惨。为了让千千万万户人家不被外人欺负，少数人这一代付出代价，是狠，可是没有别的路。\n\n另一种说法：不值，至少不该这样换。强国是真的，可它从头到尾没问过承受代价的人一句话。一份从不问你愿不愿意、就把账记在你头上的「强」，强的是坐在高处的人，不是我。把人当成垒墙的石头，墙再高，又算谁的光荣？\n\n两边都站得住。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at the Restoration that made Japan strong. There is a real question waiting for you.\n\nA country did grow strong: it was not swallowed by the foreigners, it had a great army and great factories, and later it stood up straight. But this strength was built on the backs of families like mine, who were never asked a single thing, the cash tax forcing us to sell land, the register taking my brother, the old world falling under our feet with no one to talk it over. If a strength is bought this way, is it worth it or not?\n\nOne view: it is worth it. A weak country that cannot keep the foreigners out gets crushed like a soft fruit, carved up, trampled, and then the ones who suffer are still families like ours, and worse. For countless families not to be bullied by outsiders, a few people of one generation paying the price is harsh, but there is no other road.\n\nThe other view: it is not worth it, or at least it should not have been bought this way. The strong country is real, but from start to finish it never asked the people who carried the cost a single word. A "strength" that never asks whether you are willing, that just writes the bill onto your head, is strong for the people sitting up high, not for me. Treat people as the stones in a wall, and however high the wall, whose glory is that?\n\nBoth sides stand.\n\nWhat do you think? Take thirty seconds, and write it down.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 国家确实变强 (没被吞有大军队大工厂挺直腰) 可这份强建在像我家从没被问过的人家背上 (现金税逼卖地/名册抽哥哥/旧世界塌没人商量) 这样换来的强值不值 + 一种说法 (值/弱国会被捏碎瓜分到时遭殃的还是我们更惨/为千千万万户不被欺负少数人付代价狠但没别的路) + 另一种说法 (不值至少不该这样换/没问过承受代价的人一句/不问你愿不愿就记账在你头上的强是高处人的强不是我/把人当垒墙石头墙再高算谁光荣) + 两边都站得住 + 想 30 秒',
      engagementHook: '一个国家变强了，可这份强建在像我家这样、从没被问过一句的人家背上。一种说法：值，弱国会被捏碎。另一种说法：不值，没人问过我愿不愿意。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'mei-farm-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生：一片世代弯腰的水田，一笔荒年也不松手的现金税，一本念走我哥哥的名册，门口那个剪了发髻、我认了好一会儿的人。你会怎么评价这样一个开端？\n\n一场维新，一边把国家变成了挡得住洋人的强国，一边把代价一笔一笔记在像我家这样没人问过的人头上。这两件事，是同一场维新的同一页。你怎么称？\n\n不过先记住：你这一遍，听的只是被这场维新碾过去的人。\n\n那个亲手起草法令、连自己的武士身份都一并废掉的改革官；那个帮着建起新国家、最后却带着被新国家抛下的旧武士起兵、战败自尽的西乡隆盛。他们各有各的说法，各有各的两难。换个视角再走一遍，你会听见他们怎么解释「为什么非这样不可」，也看看你刚才下的判断，站不站得住。\n\n再想最后一步：今天你身边，有没有一件「为了大家好」的事，做决定的是一群人，默默承受代价的，却是另一群没人问过的人，某条校规、某个安排、某个大人替你定下的事？\n\n那时候，你会只看见「结果挺好」，还是会想起我，会去问一句：这次，那个没被问过的人，是谁？',
        en: 'I have walked my whole life. A paddy bent over for generations. A cash tax that would not loosen even in a lean year. A register that read my brother away. The person in the doorway with his topknot cut off, whom I had to look at a long while before I knew him. How would you judge a beginning like this?\n\nA Restoration that, on one side, turned the country into a strong state that could keep the foreigners out, and on the other side wrote the cost, stroke by stroke, onto the heads of people like mine who were never asked. These two things are the same page of the same Restoration. How do you weigh it?\n\nBut first, remember: this pass, you heard only the person the Restoration crushed.\n\nThe reform official who drafted the laws with his own hand and abolished even his own samurai standing along with them; and Saigō Takamori, who helped build the new country and in the end rose up with the old samurai it had cast aside, was defeated, and took his own life, each has his own case, his own bind. Run it again through another lens, and you will hear how they explain "why it had to be this way," and see whether the judgment you just made still holds.\n\nThen take one last step: in your own life today, is there something done "for everyone\'s good," where one group makes the decision, and another group, never asked, quietly carries the cost, a school rule, an arrangement, a thing some grown-up decided for you?\n\nWhen that happens, will you only see that "the result turned out fine," or will you remember me, and ask one thing: this time, the one who was never asked, who is it?',
      },
      deliverGoal: 'N11 close (MANDATORY 跨视角指针) — 评价开端 (世代弯腰水田/荒年不松手的现金税/念走哥哥的名册/门口剪发髻认半天的人 → 变强国 vs 代价记在没人问过的人头上同一页怎么称) + ① 你只听到被维新碾过去的人 ② 改革官 (亲手起草法令连自己武士身份一并废) + 西乡隆盛 (帮建新国却带旧武士起兵战败自尽) 各有说法各有两难/换视角再走听他们解释为什么非这样不可/你判断站不站得住 ③ transfer「今天身边为了大家好一群人做决定另一群没人问过默默承受 (校规/安排/大人替你定的事)」+ 你会只看见结果挺好还是想起我去问一句: 这次没被问过的人是谁',
      engagementHook: '你这一遍，只听到了被维新碾过去的人。亲手起草法令的改革官、带旧武士起兵自尽的西乡隆盛，各有各的说法——你还没听到他们的声音。换个视角再走一遍，你刚才的判断站得住吗？还有：今天你身边那件「为了大家好」的事，那个没被问过、默默承受代价的人，是谁？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (actor / mediator / receiving-end-default) ───
export var lenses = {
  'samurai-reformer-actor':     samuraiReformerLens,
  'saigo-mediator':             saigoLens,
  'farm-daughter-receiving-end': farmDaughterLens,
};
export var defaultLens = 'farm-daughter-receiving-end';
export default lenses[defaultLens].storyboard;
export var meta = {
  topicId: 'meiji-restoration-1868',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'samurai-reformer-actor': 30, 'saigo-mediator': 30, 'farm-daughter-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-02',
  notes: [
    '3 lens / 11 节点 / cross-lens micro-detail: 发髻 chonmage (三视角各触不点破)',
    'defaultLens: farm-daughter-receiving-end (modernization done-to-her)',
    'expectsRealAnswer: ONLY N10+N11 per lens (2 each, 6 total)',
    '§9 杀手桥: 洋务运动 vs 明治维新 (中国孩子 home advantage); Rule 0 不判文明优劣',
    '4-agent review pending',
  ],
};
