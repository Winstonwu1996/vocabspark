// ─────────────────────────────────────────────────────────────────
// 拉丁美洲独立 1810-1826 — Latin American Independence · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程西语/拉美真实术语
//   (criollo/peninsular/casta/mestizo/mulato/caudillo/junta/Gran Colombia/
//   Cortes/Grito de Dolores/El Libertador/Andes), 绝不用中国特定词 (玉玺/龙袍/
//   宰相/江山 等)。§8 同代中国段为唯一例外 (N10/N11 synthesis 桥接)。
// 3 lens / 11 nodes each / Rule 0 高敏感 (criollo 主导 + 底层秩序延续, 始终双面
//   同体, 禁单极化美化或贬低) / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: Andes 安第斯山脉 — Bolívar 翻它建大国/San Martín 翻它解放
//   南方/casta 底层劳力世代仰望它却走不出它。三视角各触一次,不互相点破。
// ─────────────────────────────────────────────────────────────────

export var bolivarLens = {
  id: 'bolivar-actor',
  name: 'Simon Bolivar',
  nameCn: '玻利瓦尔',
  role: 'actor-driver',
  perspectiveTag: 'creole-liberator',
  icon: '🗡️',
  description: {
    cn: '1783 年生于委内瑞拉 Caracas 一个极富的 criollo 大家族，纯欧洲血统、却在美洲出生。他年轻时去欧洲游学，读伏尔泰、卢梭，被尊称为 El Libertador（解放者）。他要的不是把社会底层翻过来，而是把在美洲出生的白人精英，从 peninsular 的天花板下解放出来，自己当家。这一遍，你坐进一个 driver 的位置，亲手推翻一个统治三百年的旧帝国，又眼睁睁看着自己解放的大陆，碎成一堆互相打仗的小国。',
    en: 'Born in 1783 in Caracas, Venezuela, into an extremely rich criollo family, of pure European blood yet born in the Americas. As a young man he studied in Europe, read Voltaire and Rousseau, and is honored as El Libertador (the Liberator). He did not want to flip the bottom of society over. He wanted to free the American-born white elite from the peninsular ceiling and run things himself. This pass puts you in a driver\'s seat, where you topple, with your own hands, an old empire that ruled for 300 years, then watch the continent you freed shatter into a cluster of warring small nations.',
  },
  storyboard: [
    {
      id: 'lat-bolivar-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1830 年的一个冬天，南美洲北岸，靠近 Santa Marta 的一座庄园。我躺在床上，47 岁，咳着血，身上的钱几乎花光了。\n\n窗外，是我用一生打下来的这片大陆。我曾经把半个南美洲，从一个统治了三百年的帝国手里夺过来。人们叫我 El Libertador——解放者。\n\n可此刻，我亲手解放的这片土地，正在我眼前碎成一堆互相打仗的小国。我梦想中那个统一的大国，散了。\n\n临死前，我写下一句话：「为革命献身的人，等于在大海里耕田。」你拼命犁开一道沟，海水立刻合上，什么都不剩。\n\n这一遍，你坐进我这个位置。你会看见一个人怎么推翻一个旧帝国——也会看见，推翻它，原来还不是最难的那一步。',
        en: 'A winter in 1830, the northern coast of South America, an estate near Santa Marta. I lie in bed, 47 years old, coughing blood, my fortune almost spent.\n\nOutside the window lies the continent I won with my life. I once tore half of South America out of the hands of an empire that had ruled for 300 years. People call me El Libertador, the Liberator.\n\nYet at this moment, the land I freed with my own hands is shattering before my eyes into a cluster of warring small nations. The single great nation I dreamed of has come apart.\n\nNear death, I wrote one line: "He who serves a revolution plows the sea." You cut a furrow with all your strength, the water closes right back over it, and nothing is left.\n\nThis pass puts you in my seat. You will see how a man topples an old empire, and you will also see that toppling it was not, after all, the hardest step.',
      },
      deliverGoal: 'N1 hook — 1830 冬 Santa Marta 庄园临终 (47 岁/咳血/钱花光) + El Libertador 解放半个南美 + 解放的大陆碎成互相打仗小国/统一大国散了 + 「在大海里耕田」名言 (流传措辞,不当档案原话) + 这一遍视角 (推翻旧帝国不是最难那步)',
      engagementHook: '我推翻了一个统治三百年的帝国，临死却说自己「在大海里耕田」——白忙一场。推翻一个旧世界，和建起一个新世界，你觉得哪件更难？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-bolivar-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先弄懂我是谁，你才懂我这场革命，到底是为谁打的。\n\n我是 criollo——克里奥尔人。意思是：纯欧洲血统，却在美洲出生的白人。我家在 Caracas 极有钱，有地、有矿、有几代人攒下的家业。\n\n按理说，我站在这片殖民地的顶层附近。可偏偏头顶上，还压着一层人，叫 peninsular——半岛人，在西班牙本土出生、被国王派来当总督和大主教的那批人。\n\n规矩很简单也很气人：最高的官、最肥的位子，只留给在西班牙出生的人。我再有钱、再有学问、家业再大，只因为「生在美洲」这一条，就永远够不到权力的顶端。\n\n你品一品这股气。它不是穷人对富人的气，是富人对更高一层的气。这股闷了几代人的怨，就是我们这场革命，最早的那台引擎。',
        en: 'First, understand who I am, so you understand who my revolution was really fought for.\n\nI am a criollo, a creole. That means: a white person of pure European blood, but born in the Americas. My family in Caracas was extremely rich, with land, mines, and an estate built up over generations.\n\nBy rights I stood near the top of this colony. Yet right above my head pressed one more layer, called peninsulares, "people from the peninsula," born in Spain itself and sent by the king to serve as viceroys and archbishops.\n\nThe rule was simple, and galling: the highest offices, the fattest seats, were kept only for those born in Spain. However rich I was, however learned, however great my estate, by the one fact of "born in the Americas" I could never reach the top of power.\n\nFeel that resentment. It is not the poor man\'s resentment of the rich. It is the rich man\'s resentment of the layer just above him. That grievance, held in for generations, was the earliest engine of our revolution.',
      },
      deliverGoal: 'N2 setup — criollo 自我定义 (纯欧洲血统美洲出生白人/Caracas 极富有地有矿) + 头顶压 peninsular (西班牙本土生/国王派来当总督大主教) + 规矩: 最高官位只给西班牙出生的人/criollo 因「生在美洲」永远够不到顶 + 这股气是富人对更高一层的气/几代人的怨 = 革命最早的引擎',
      engagementHook: '我有钱、有地、有学问，却因为「生在美洲」永远当不上最高的官。我的革命，最早不是为穷人打的，是为我们这些被卡在第二层的有钱人打的。这算不算一场革命？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-bolivar-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可光有怨气，掀不翻一个三百年的帝国。还得有一根撑着这个帝国的柱子，先断掉。\n\n这根柱子，叫「对西班牙国王的效忠」。三百年来，总督是国王的代理，教会是国王的盟友，整套秩序都围着「国王」这一个中心转。我们再不满，也从没想过没有国王的日子。\n\n然后，1808 年，一件谁都没料到的事发生了：地球另一端，拿破仑的军队开进西班牙，抓走了国王，把自己哥哥 Joseph Bonaparte 扶上了西班牙的王位。\n\n你想想这一下有多荒诞：我们效忠了三百年的那个国王，被一个法国人换掉了。那根撑着整个殖民地的柱子，咔嚓一声，断了。\n\n国王没了，那现在——谁说了算？从墨西哥到布宜诺斯艾利斯，几百万人同时面对这同一个问题。这个问题，就是一切的开始。',
        en: 'But resentment alone cannot topple a 300-year empire. A pillar holding that empire up had to snap first.\n\nThat pillar was "loyalty to the Spanish king." For 300 years the viceroy was the king\'s agent, the Church the king\'s ally, the whole order turning around the king as its one center. However discontented we were, we had never imagined a day without a king.\n\nThen, in 1808, a thing no one expected happened: on the other side of the earth, Napoleon\'s army marched into Spain, seized the king, and put his own brother, Joseph Bonaparte, on the Spanish throne.\n\nThink how absurd this was: the king we had obeyed for 300 years was swapped out by a Frenchman. The pillar holding up the whole colony snapped, with one crack.\n\nThe king was gone, so now, who is in charge? From Mexico to Buenos Aires, millions of people faced this same question at once. That question was the beginning of everything.',
      },
      deliverGoal: 'N3 setup — 怨气掀不翻帝国还需柱子先断 + 柱子=对西班牙国王效忠 (三百年总督=国王代理/教会=盟友/没想过没国王) + 1808 拿破仑入侵西班牙抓走国王/扶兄 Joseph Bonaparte 上位 + 荒诞: 效忠三百年的国王被法国人换掉/柱子咔嚓断了 + 「国王没了谁说了算」从墨西哥到布宜诺斯艾利斯同问 = 一切开始',
      engagementHook: '我们恨 peninsular 恨了几代，却从没敢想没有国王的日子。直到 1808 年一个欧洲人替我们把国王抽走了。压垮一个旧秩序的，有时候不是恨它的人，而是一记意外。这公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-bolivar-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n国王被抓走了，权力真空摆在面前。各地的 criollo 精英纷纷成立一种叫 junta（胡塔）的自治委员会，打出的旗号很「忠君」：「我们替被法国人抓走的国王，先看守地方。」\n\n你也加入了。但你心里清楚，这层「忠君」的外衣下面，藏着一个一旦想出来就收不回去的念头。\n\n你尝到了一样东西——自己当家做主的滋味。原来不用等西班牙派人来，我们自己就能管这片地。\n\n这一刻，你得诚实面对自己：你嘴上说「为国王看家」，心里想的，是不是「凭什么这片地不能归我们自己」？\n\n那件「忠君」的外衣，迟早要被你亲手脱下来。一场以「保住国王」开场的运动，正在你心里，悄悄拐向「再也不要国王」。这个弯，是你设计的，还是你走着走着，自己走出来的？',
        en: 'Now you are me.\n\nThe king is seized, and a power vacuum lies before us. Across the land, criollo elites form self-governing committees called juntas, raising a very "loyal" banner: "We will guard the region for the king captured by the French."\n\nYou join too. But you know in your heart that under this coat of "loyalty" hides a thought that, once you think it, can never be taken back.\n\nYou have tasted something: the taste of running things yourself. It turns out we do not have to wait for Spain to send someone. We can govern this land ourselves.\n\nIn this moment you must face yourself honestly: you say "guarding it for the king," but in your heart, is the real thought not "by what right does this land not belong to us"?\n\nThat coat of "loyalty" will, sooner or later, be taken off by your own hand. A movement that opened with "keep the king" is quietly turning, inside you, toward "no king ever again." Did you design this turn, or did you walk into it, step by step?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1810 权力真空 criollo 成立 junta 胡塔自治委员会 + 忠君旗号「替被抓的国王看守地方」+ 忠君外衣下藏一旦想出就收不回的念头 + 尝到自己当家滋味 (不用等西班牙派人) + 自我拷问「为国王看家 vs 凭什么这片地不能归我们」+ 一场以保住国王开场的运动悄悄拐向再也不要国王/弯是设计还是走出来的',
      engagementHook: '我们嘴上说「替国王看家」，心里却尝到了自己当家的滋味——这件忠君的外衣，迟早要自己脱下来。你有没有过这种时候：说着一个保守的理由，心里其实已经走得很远了？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-bolivar-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别以为说独立就独立了。早期这几年，我输得很惨。\n\n西班牙缓过劲来，狠狠反扑。我搭起来的早期共和国，一个接一个垮掉。我一度连立足之地都没有，只能流亡。\n\n1815 年，我流亡到加勒比海的牙买加。在那儿，我写下了一封后来很有名的信——《牙买加来信》。\n\n在信里我冷静地判断了两件事。第一件，是希望：西属美洲一定会独立，这条路挡不住。第二件，是寒意：可我们很可能，赢不来团结。三百年的殖民统治，把我们变成了「既不是真正的欧洲人，也不是印第安人」的一群人，缺乏自己治理自己的经验。\n\n现在回头看，这封信几乎句句应验了。可你也得看见它的盲点：我担心的「团结」，是我们 criollo 精英之间的团结。至于田里那几百万底层人要的「解放」——老实说，根本不在我这封信里。',
        en: 'Do not think that saying independence made it so. In the early years, I lost badly.\n\nSpain recovered and struck back hard. The early republics I built up collapsed one after another. For a time I had not even a foothold and could only go into exile.\n\nIn 1815 I went into exile in Jamaica, in the Caribbean. There I wrote a letter that later became famous, the Letter from Jamaica.\n\nIn it I judged two things calmly. The first was hope: Spanish America would surely become independent; this road could not be blocked. The second was a chill: yet we would very likely not win unity. Three hundred years of colonial rule had made us a people who were "neither truly Europeans nor Indians," lacking the experience of governing ourselves.\n\nLooking back now, that letter came true almost line by line. But you must also see its blind spot: the "unity" I worried about was unity among us, the criollo elite. As for the "liberation" wanted by the millions at the bottom in the fields, honestly, it was not in my letter at all.',
      },
      deliverGoal: 'N5 story — 说独立不等于独立/早期输惨 (西班牙反扑/早期共和国一个个垮/流亡) + 1815 流亡牙买加写《牙买加来信》(概括精神不伪造逐字) + 两判断: 希望 (必独立挡不住) + 寒意 (很可能赢不来团结/三百年殖民让我们「既非欧洲人也非印第安人」缺自治经验) + 几乎句句应验 + 盲点: 我担心的团结是 criollo 精英团结/底层要的解放根本不在信里',
      engagementHook: '流亡时我就看清了：我们一定能赢得独立，但很可能赢不来团结。可我担心的「团结」，只是我们这些精英之间的团结——底层要的解放，根本不在我心里。一个领袖的远见，会不会同时也是他最大的盲点？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-bolivar-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '低谷过后，我赌上了一切，做了一件疯狂的事。\n\n1819 年，我没有走西班牙人重兵把守的正路。我率着一支联军——委内瑞拉人、新格拉纳达人，还有一支远道而来的英国军团——选择翻越 Andes（安第斯山脉）。\n\n你得知道 Andes 是什么。它是横在南美洲身上、终年积雪的巨大山脊，高得让人喘不上气。把一支军队从这种地方拖过去，几乎是发疯。我们冻死、累死了不少人。\n\n可正因为没人相信我们会从那儿冒出来，西班牙人没设防。8 月 7 日，我们在山那头的 Boyacá，打了一场漂亮的奇袭，大胜。通往波哥大的门，开了。\n\n这一战，被看作南美北部独立真正的开端。同年底，我开始着手建立我梦想中的大国——Gran Colombia（大哥伦比亚），把今天的哥伦比亚、委内瑞拉、厄瓜多尔、巴拿马，揉成一个。\n\n那是我一生离梦想最近的时刻。我站在 Andes 这一头，以为我能把这片被高山割裂的大陆，重新缝成一个整体。',
        en: 'After the low point, I staked everything and did a mad thing.\n\nIn 1819 I did not take the main road the Spanish heavily guarded. I led a combined army (Venezuelans, New Granadans, and a British legion that had come from far away) and chose to cross the Andes.\n\nYou must know what the Andes is. It is the vast, snow-capped spine lying across the body of South America, so high it takes the breath away. To drag an army across such a place is almost madness. Not a few of us froze or dropped dead from exhaustion.\n\nYet exactly because no one believed we would emerge from there, the Spanish set no defense. On August 7, at Boyacá on the far side of the mountains, we struck a beautiful surprise and won big. The door to Bogotá opened.\n\nThis battle is seen as the real start of independence in northern South America. Late that year I set about building the great nation I dreamed of, Gran Colombia, kneading today\'s Colombia, Venezuela, Ecuador, and Panama into one.\n\nThat was the moment of my life closest to the dream. I stood on this side of the Andes, believing I could sew this continent, cut apart by high mountains, back into one whole.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1819 赌一切翻越 Andes 安第斯山脉 (Bolívar 角度: 终年积雪巨大山脊/把军队拖过去近乎发疯/冻死累死人) + 没人信会从那冒出来西班牙没设防 + 8.7 Boyacá 奇袭大胜/开波哥大门 + 看作南美北部独立开端 + 年底建 Gran Colombia (哥伦比亚/委内瑞拉/厄瓜多尔/巴拿马揉成一个) + 离梦想最近时刻「把被高山割裂的大陆缝成整体」。只碰 Andes 从他角度,不揭另两视角',
      engagementHook: '我把一支军队拖过终年积雪的 Andes，赌的就是没人相信我会从那儿冒出来。那一刻我站在山这头，以为能把整片被大山割裂的大陆，重新缝成一个国家。你猜，这座我翻过来建国的大山，后来成了我的朋友，还是敌人？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-bolivar-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '北边节节胜利，可我不是一个人在打。这片大陆太大了，南边还有另一路。\n\n南方战场，有一位和我一样厉害的解放者，叫 José de San Martín（圣马丁）。他从阿根廷出发，也翻越了 Andes，解放了智利，再北上解放秘鲁。我从北往南打，他从南往北打，我们俩注定要在中间撞上。\n\n1822 年，我们在厄瓜多尔的港口 Guayaquil（瓜亚基尔）秘密会面。两个解放了半个大陆的人，关起门来谈。\n\n谈了什么，至今没有完整的档案，众说纷纭——我只告诉你确定的结果：会后，San Martín 选择退出。他把他的军队、把整个南方战场，交给了我，自己默默远走欧洲，再没回来。\n\n他没跟我争「谁是最大的解放者」，没有发动一场解放者打解放者的内战。南美解放的指挥权，从此统一到我手里。\n\n说实话，那一刻我松了口气。可多年以后我才懂，他那一退，退出的也许不只是战场——而是一种我后来再也没能学会的清醒。',
        en: 'In the north I won victory after victory, but I was not fighting alone. This continent was too vast; in the south there was another front.\n\nOn the southern front there was a liberator as formidable as I, named José de San Martín. He set out from Argentina, also crossed the Andes, freed Chile, then went north to free Peru. I fought from north to south, he from south to north, and the two of us were bound to collide in the middle.\n\nIn 1822 we met secretly at the Ecuadorian port of Guayaquil. Two men who had each freed half a continent, talking behind closed doors.\n\nWhat was said there has no complete record to this day, and is much debated. I will tell you only the certain result: afterward, San Martín chose to step aside. He handed me his army and the entire southern front, and quietly went far away to Europe, never to return.\n\nHe did not fight me over "who is the greatest liberator." He did not start a civil war of liberator against liberator. From then on, command of South American liberation was unified in my hands.\n\nHonestly, in that moment I breathed easier. But only years later did I understand: what he stepped out of may not have been only the battlefield, but a kind of clarity I never managed to learn.',
      },
      deliverGoal: 'N7 story — 不是一个人打/大陆太大南边另一路 + San Martín 从阿根廷翻 Andes 解放智利北上秘鲁 (Bolívar 北往南/他南往北必相撞) + 1822 Guayaquil 秘密会面 (内容无完整档案众说纷纭,只给确定结果) + 会后 San Martín 退出交军队+南方战场远走欧洲再没回来 + 没争最大解放者没发动内战/指挥权统一到 Bolívar + Bolívar 松气但多年后懂他退出的是一种自己没学会的清醒',
      engagementHook: '另一位解放者打到我面前，本可以跟我争个高下，他却选择交出兵权、远走他乡。当时我松了口气，多年后才懂：他那一退，退出的是一种我没能学会的清醒。换作是你，会退让，还是会争？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-bolivar-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '南北合流之后，最后一战来了。\n\n这之前，1821 年我先在 Carabobo（卡拉沃沃）大胜西班牙王军，基本锁定了委内瑞拉的独立——Boyacá 打开北方的门，Carabobo 把门焊死。三年后，1824 年 12 月 9 日，在秘鲁安第斯高原的 Ayacucho（阿亚库乔），我最信任的部将 Sucre（苏克雷）指挥联军，击垮了西班牙在南美的主力。\n\n这一战，标志着西班牙在南美大陆三百年的统治，结束了。（古巴、波多黎各那些岛屿，还在西班牙手里留了更久。）\n\n你站在我这个位置，该是何等的志得意满。从墨西哥到智利，一个横跨半个地球的庞大帝国，在我们这代人手里，被掀翻了。大西洋革命的链条：美国 1776、法国 1789、海地 1791（革命爆发），到我们这场 1810-1826，是我们亲手敲下了最后、也是最大的一环。\n\n仗，是真的打赢了。\n\n但你先别急着庆祝。因为我很快就发现：把西班牙人赶走，和让这些新生的国家好好活下去，根本是两回事。真正的难题，现在才刚刚开始。',
        en: 'After north and south joined, the last battle came.\n\nBefore it, in 1821, I won a great victory over the Spanish royal army at Carabobo, mostly locking in Venezuela\'s independence. Boyaca opened the door in the north; Carabobo welded it shut. Three years later, on December 9, 1824, at Ayacucho on the Andean plateau of Peru, my most trusted general Sucre commanded a combined army and crushed the main Spanish force in South America.\n\nThis battle marked the end of Spain\'s 300-year rule on the South American mainland. (Islands like Cuba and Puerto Rico stayed in Spanish hands far longer.)\n\nIn my seat, you should feel deeply satisfied. From Mexico to Chile, a vast empire spanning half the globe was toppled in our generation\'s hands. The chain of Atlantic revolutions (America 1776, France 1789, Haiti 1791 when its revolution broke out, down to our 1810-1826) was, by us, struck through to its last and largest link.\n\nThe war was truly won.\n\nBut do not rush to celebrate. Because I soon found: driving the Spanish out, and keeping these newborn nations alive, are two entirely different things. The real problem was only just beginning.',
      },
      deliverGoal: 'N8 story — 南北合流最后一战 + 1821 Carabobo 大胜锁定委内瑞拉独立 (Boyacá 开北方门/Carabobo 焊死/补战役链) + 1824.12.9 Ayacucho 秘鲁安第斯高原/部将 Sucre 指挥联军击垮西班牙主力 + 标志西班牙在南美大陆三百年统治终结 (古巴波多黎各岛屿留更久) + 志得意满 (墨西哥到智利庞大帝国一代人掀翻) + 大西洋革命链 (美 1776/法 1789/海地 1791 革命爆发→我们 1810-26 最后最大一环) + 仗真打赢了 + 但赶走西班牙 ≠ 让新国家活下去/真难题刚开始',
      engagementHook: '从墨西哥到智利，一个横跨半个地球的帝国，在我们这代人手里掀翻了。大西洋革命链上最后、也最大的一环，是我们敲下的。可我很快发现：赶走敌人，和让一群新国家好好活下去，根本是两回事。你猜，哪一件更难？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-bolivar-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在，最痛的部分来了。\n\n独立赢了，团结却赢不来。我梦想的 Gran Colombia，从一开始就裂着缝。\n\n第一道缝，是这片土地本身。还记得我翻过来的那座 Andes 吗？它太高、路太难，把这片大陆切成一块块互不相通的区域。委内瑞拉的人不听波哥大的，基多的人有自己的算盘。我能用军队翻过这座山，却没法用任何东西，把山两边的人心缝在一起。\n\n第二道缝，是人。仗一打完，各地冒出一批 caudillo（考迪罗）——靠军队和个人威望上位的强人。他们用枪杆子，而不是制度，来填补西班牙国王留下的那个权力真空。今天这个强人,明天那个强人。\n\n1828 年，连我自己都走投无路，干脆自任独裁者——我成了我曾经最痛恨的那种人。当年就有人来刺杀我，没成。\n\n你坐在我这个位置，看着自己亲手解放的大陆，正一寸寸碎掉。你比谁都清楚：我能打赢西班牙，却打不赢这片土地的地理，也打不赢人心里的散。',
        en: 'Now comes the most painful part.\n\nIndependence was won, but unity could not be. My dream of Gran Colombia was cracked from the start.\n\nThe first crack was the land itself. Remember the Andes I crossed? Too high, the roads too hard, it cut this continent into isolated regions that did not connect. The people of Venezuela would not listen to Bogotá; the people of Quito had their own designs. I could cross that mountain with an army, but I could not, with anything, sew the hearts of the people on its two sides together.\n\nThe second crack was people. The moment the war ended, a crop of caudillos appeared (strongmen who rose by army and personal prestige). They filled the vacuum the Spanish king had left with the gun, not with institutions. This strongman today, that strongman tomorrow.\n\nIn 1828 even I was cornered, and simply named myself dictator. I became the very kind of man I had once hated most. That year someone came to assassinate me; it failed.\n\nIn my seat, you watch the continent you freed with your own hands break apart, inch by inch. You know better than anyone: I could beat Spain, but I could not beat this land\'s geography, nor the scattering inside people\'s hearts.',
      },
      deliverGoal: 'N9 story — 最痛: 独立赢了团结赢不来/Gran Colombia 从头裂缝 + 第一道缝=土地 (Andes 太高路太难切成互不相通区域/委内瑞拉不听波哥大/基多自己算盘/能翻山却缝不了人心) + 第二道缝=人 (caudillo 考迪罗强人靠军队个人威望/用枪杆不用制度填真空) + 1828 Bolívar 自任独裁者成了最痛恨的那种人/遭刺杀未遂 + 看大陆一寸寸碎/打赢西班牙打不赢地理和人心的散',
      engagementHook: '我能用军队翻过 Andes，却没法把山两边的人心缝在一起。我打赢了西班牙，却打不赢这片土地的地理，也打不赢人心里的散。一个能赢下战争的人，为什么会输给「和平」？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-bolivar-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么评我？两种说法都站得住，你来称。\n\n一种说法：我是真正的解放者。我把半个大陆，从一个统治三百年的帝国手里夺了出来。后来碎成小国、考迪罗当道，不是我的错——是地理太狠、是这片土地三百年没学过自治。一个人能推翻帝国，已经是极限了，你不能怪他没能凭一己之力，把一片注定离散的大陆捏成一个国家。\n\n另一种说法：我的革命，从一开始就只解放了一半。它把权力从 peninsular 手里，交到了我们 criollo 手里——换了塔尖，留了塔身。casta 那套按肤色排人的等级，底层印第安人和被奴役者的处境，大体没动。我嘴上喊「自由」，可我从没真打算，让金字塔底下那大多数人，也算进这个新国家里。我赢的是「我们这层人」的独立，不是所有人的解放。\n\n这两边，不是「他了不起但有遗憾」。是同一个我的两面——一个真把帝国掀翻的解放者，和一个只为自己这一层夺权的精英。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题：一场革命，「解放」了一个国家，却没解放这个国家里大多数的人，它还算不算成功？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I was a true liberator. I wrested half a continent from an empire that had ruled for 300 years. That it later shattered into small nations with caudillos in charge was not my fault. The geography was too brutal; this land had not learned self-rule in 300 years. For one man to topple an empire is already the limit. You cannot blame him for failing, by himself, to squeeze a continent destined to scatter into a single nation.\n\nThe other view: my revolution, from the start, freed only half. It passed power from the peninsulares\' hands into ours, the criollos\'. It changed the tip of the pyramid and kept the body. The casta hierarchy that ranked people by skin color, the situation of the Indians and the enslaved at the bottom, barely moved. I cried "freedom" with my mouth, but I never truly meant to count the majority at the base of the pyramid into this new nation. What I won was the independence of "our layer," not the liberation of all.\n\nThese are not "great but with regrets." They are two faces of the same me: a liberator who truly toppled an empire, and an elite who seized power only for his own layer.\n\nThis is a hard problem an AP teacher at a school will have students weigh again and again: a revolution that "freed" a country but did not free most of the people in it, is it still a success? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 解放了国家却没解放大多数人算不算成功 + 一种说法 (真正解放者/夺回半个大陆/碎裂怪地理和三百年没学自治/推翻帝国已是极限) + 另一种说法 (只解放一半/权力从 peninsular 交到 criollo 换塔尖留塔身/casta 底层大体没动/喊自由没打算算进底层/赢的是我们这层独立非所有人解放) + 同一个我两面 (真解放者 vs 只为自己夺权的精英) + neutral school name (AP 老师) + 想 30 秒/两边都站得住。Rule 0 双面同体禁单极',
      engagementHook: '我是真正的解放者，还是一个只为自己这层人夺权的精英？我把权力从西班牙人手里夺过来，却只交到了我们 criollo 手里——换了塔尖，留了塔身。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'lat-bolivar-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是 driver 这一边的声音——一个亲手推翻帝国的人，怎么看他自己这一生。\n\n请记住：这只是一边。我讲「我夺回了半个大陆」「碎裂不是我的错」，听起来甚至有点悲壮——这正是 driver 视角最会做的事，它把自己讲成一出英雄悲剧。\n\n可这一遍里，有些人始终没怎么开口。那个在 Guayaquil 把兵权交给我、转身远走的 San Martín——他会怎么讲那场会面，怎么看我后来自任独裁者？还有那个被我招进军队、在 Boyacá 和 Ayacucho 替我流血，仗打完了却发现自己还在庄园里交贡赋的 casta 底层士兵——我口中这场「伟大的解放」，在他眼里，到底解放了什么？\n\n换上他们的视角，他们会狠狠地，挑战你刚才听我说的每一句。\n\n最后，留一个东西给你。还记得我翻过去建国、最后又输给它的那座 Andes 吗？我从山的这一头，把它看成一条通往统一大国的路。\n\n换一个视角再走一遍，你会从另一个人的眼里，再看见这座山一次。到那时，你也许会发现，同一座山，对不同的人，根本不是同一座山。',
        en: 'What you just heard was the voice of one side, the driver\'s, how a man who toppled an empire with his own hands sees his own life.\n\nRemember: it is only one side. My talk of "I wrested back half a continent," of "the fragmentation was not my fault," can even sound tragic and grand, and that is exactly what a driver\'s view does best. It tells itself as a hero\'s tragedy.\n\nBut in this pass, some people barely spoke. The San Martín who handed me his command at Guayaquil and turned away to a distant land: how would he tell that meeting, how would he see me later naming myself dictator? And the casta-bottom soldier I recruited into my army, who bled for me at Boyacá and Ayacucho, then found, when the war was over, that he was still paying tribute on the same estate. This "great liberation" of mine, in his eyes, what did it actually free?\n\nSwitch to their perspectives, and they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. Remember the Andes I crossed to build a nation, and at the end lost to? From my side of the mountain, I saw it as a road to a single great nation.\n\nWalk this through once more from another perspective, and you will see this mountain again, through someone else\'s eyes. By then you may find that the same mountain, to different people, is not the same mountain at all.',
      },
      deliverGoal: 'N11 close/meta — 你听的是 driver 一边 (把自己讲成英雄悲剧最危险) + 还没听到: San Martín (会怎么讲 Guayaquil 会面/怎么看我自任独裁者) + casta 底层士兵 (替我在 Boyacá Ayacucho 流血仗完还在交贡赋/这场伟大解放在他眼里解放了什么) 会挑战你听的每句 + 暗示 Andes 会从另一视角再看见一次 (不直接解释 echo)/同一座山对不同人不是同一座山',
      engagementHook: 'driver 视角最会做的事，就是把自己讲成一出英雄悲剧。你听完我这一边，最想去问那个交出兵权的 San Martín、那个替我流血却没翻身的底层士兵什么？同一座 Andes，在他们眼里会是同一座山吗？',
      expectsRealAnswer: true,
    },
  ],
};

export var sanmartinLens = {
  id: 'sanmartin-mediator',
  name: 'Jose de San Martin',
  nameCn: '圣马丁',
  role: 'lonely-mediator',
  perspectiveTag: 'liberator-who-stepped-aside',
  icon: '♟️',
  description: {
    cn: '1778 年生于今阿根廷东北的 Yapeyú，年轻时在西班牙军队里服役多年、受过正规军事训练，后来把这套本事调转枪口对准西班牙自己。他是南方战场的解放者，1817 年率军翻越终年积雪的 Andes 突袭智利，再北上解放秘鲁。这一遍，你坐进一个调停者的位置：当再打下去就是解放者打解放者的关口，你选择的不是权力，而是退让和远走。这究竟是软弱，还是另一种罕见的清醒？',
    en: 'Born in 1778 in Yapeyu in today\'s northeastern Argentina, he served for many years in the Spanish army as a young man and got formal military training, then turned that skill against Spain itself. He was the liberator of the southern front: in 1817 he led an army across the snow-capped Andes to surprise Chile, then went north to free Peru. This pass puts you in a mediator\'s seat: at the moment when fighting on would mean liberator fighting liberator, what you choose is not power, but to yield and to go far away. Was that weakness, or a rare kind of clarity?',
  },
  storyboard: [
    {
      id: 'lat-sanmartin-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1850 年，法国一座叫 Boulogne-sur-Mer 的海边小城。我老了，72 岁，住在离故乡半个地球远的地方。\n\n我叫 José de San Martín（圣马丁）。我解放了南美洲南边的半个大陆——阿根廷、智利、秘鲁，都有我的脚印。人们本该叫我「最伟大的解放者」之一。\n\n可我没有死在我解放的土地上，也没有当上任何一个国家的统治者。1822 年，在和另一位解放者 Bolívar 会面之后，我做了一个让所有人意外的决定：我交出了兵权，转身离开，再也没有回去。\n\n很多人到今天都想不通：你打到家门口了，为什么不进去？\n\n这一遍，你坐进我这个位置。你会站在所有人中间——既不完全是哪一边的人，又好像欠每一边。你要在所有人都红了眼、都想再赢一场的关口，做一个最难的决定：什么时候，该停手。',
        en: 'In 1850, a seaside town in France called Boulogne-sur-Mer. I am old, 72 years old, living half a world away from my homeland.\n\nMy name is Jose de San Martin. I freed the southern half of the South American continent: Argentina, Chile, and Peru all carry my footprints. People should call me one of the "greatest liberators."\n\nYet I did not die on the land I freed, nor did I become the ruler of any nation. In 1822, after meeting the other liberator, Bolivar, I made a decision that surprised everyone: I handed over my command, turned, and left, never to return.\n\nMany cannot understand it to this day: you had fought to the very gate, so why did you not go in?\n\nThis pass puts you in my seat. You will stand in the middle of everyone, fully on no side, yet seeming to owe every side. At the moment when everyone\'s eyes have gone red and all want to win one more time, you must make the hardest decision: when to stop.',
      },
      deliverGoal: 'N1 hook — 1850 法国 Boulogne-sur-Mer 海边小城/72 岁/离故乡半个地球 + 解放南美南边半个大陆 (阿根廷智利秘鲁) + 没死在解放的土地没当任何国家统治者 + 1822 与 Bolívar 会面后交兵权转身离开再没回去 + 「打到家门口为什么不进去」+ 这一遍视角 (站所有人中间/在都想再赢的关口做最难决定: 什么时候该停手)',
      engagementHook: '我打到了家门口，却选择交出兵权、转身离开，再也没回去。所有人都想不通：到嘴的权力，为什么不要？什么时候该停手，会不会比什么时候该出手，更难？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-sanmartin-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先弄懂我是谁，你才懂我为什么和别的解放者不一样。\n\n我 1778 年生在今天阿根廷东北的 Yapeyú。但我前半生几乎都在西班牙度过：从少年到成年，我在西班牙军队里服役多年，是个受过正规训练的职业军官。\n\n你没看错：我曾经为西班牙打仗。我太了解这台帝国的军事机器了，因为我自己就是它的一颗螺丝。\n\n后来我做了一个选择：把这套本事调转枪口，对准西班牙自己。\n\n这一段经历，给了我一样很多革命者没有的东西——冷静。我不是靠一腔热血上战场的人。我懂纪律、懂补给、懂一场仗在打响之前，胜负就已经定了大半。\n\n所以你会发现，我后来的每一个决定，看起来都比别人「冷」一点。包括最后那个让所有人意外的决定——也是从这份冷静里长出来的。',
        en: 'First, understand who I am, so you understand why I differed from the other liberators.\n\nI was born in 1778 in Yapeyu in today\'s northeastern Argentina. But I spent almost all of the first half of my life in Spain. From boyhood into early manhood I served for many years in the Spanish army, a professional officer with formal training.\n\nYou read it right: I once fought for Spain. I knew this empire\'s war machine intimately, because I was once a screw inside it.\n\nLater I made a choice: to turn that skill against Spain itself.\n\nThis past gave me something many revolutionaries did not have: calm. I was not a man who went to war on a rush of blood. I understood discipline, supply, and that the outcome of a battle is mostly decided before the first shot is fired.\n\nSo you will find that every decision I later made looked a little "colder" than others\'. Including that last decision that surprised everyone, it too grew out of this calm.',
      },
      deliverGoal: 'N2 setup — 1778 生 Yapeyú 阿根廷东北 + 人生大半在西班牙度过/西班牙军队服役多年正规职业军官 + 曾为西班牙打仗/太懂帝国军事机器自己是颗螺丝 + 后来调转枪口对准西班牙 + 这经历给的东西=冷静 (不靠热血/懂纪律补给/仗打响前胜负已定大半) + 后来每个决定都「冷」一点/最后那个意外决定也从冷静长出来',
      engagementHook: '我曾经为西班牙打仗，是这台帝国军事机器里的一颗螺丝。后来我把这套本事，调转枪口对准了它自己。一个最懂敌人的人来反抗敌人，是优势，还是会让他失去某种热血？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-sanmartin-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂我后来为什么选择退让，得先看清这盘棋有多大、有多碎。\n\n西属美洲，横跨今天的墨西哥、中美洲、整个南美洲西部和北部。它不是一块平整的地，而是被一道东西硬生生切开的——Andes（安第斯山脉），一条终年积雪、高得让人窒息的巨大山脊。\n\n这座山，再加上广袤的草原和热带雨林，把这片大陆割成了一块块互相隔绝的区域。山这边的人，和山那边的人，可能一辈子都到不了对方那里。\n\n你记住这个地理事实，因为它后来决定了一切：这片大陆太大、太碎，根本不像北美十三州那样，能轻易拼成一个整体。\n\n而独立的火，要从这片碎裂的大陆上，南北两头同时烧起来：北边，有 Bolívar；南边，就是我。两个解放者，从大陆的两端各自往中间打——我们迟早，要在中间相遇。',
        en: 'To understand why I later chose to yield, you must first see how vast, and how broken, this board was.\n\nSpanish America spanned today\'s Mexico, Central America, and the whole western and northern parts of South America. It was not one flat land, but one cut clean apart by a barrier: the Andes, a snow-capped spine so high it suffocates the breath.\n\nThis mountain, plus vast grasslands and rainforest, carved the continent into isolated regions. The people on this side of the mountain and those on the far side might never reach each other in a lifetime.\n\nRemember this geographic fact, because it later decided everything: this continent was too vast, too broken, to be easily pieced into one whole the way North America\'s thirteen colonies were.\n\nAnd the fire of independence had to be lit from both ends of this broken continent at once: in the north, Bolivar; in the south, me. Two liberators, each fighting from one end of the continent toward the middle, and sooner or later, we would meet in the middle.',
      },
      deliverGoal: 'N3 setup — 看清棋多大多碎 + 西属美洲跨墨西哥/中美洲/南美西部北部 + 被 Andes 安第斯山脉硬切 (终年积雪窒息的巨大山脊) + 加草原雨林割成互相隔绝区域 (山两边人一辈子到不了) + 地理事实决定一切: 太大太碎不像北美十三州能拼成整体 + 独立火南北两头同时烧 (北 Bolívar 南我)/两解放者从两端往中间打迟早相遇',
      engagementHook: '这片大陆被 Andes 和雨林切成一块块，山这边的人和山那边的人，可能一辈子都到不了对方那里。这样一片又大又碎的土地，凭什么能拼成一个国家？这个问题，后来逼出了我最难的那个决定。',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-sanmartin-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。1817 年，南方战场，你面前是那道终年积雪的 Andes。\n\n你要解放山那头的智利。但西班牙人守在正面，硬攻就是送死。你做了一个疯狂的决定：率约四千人的军队，翻过去。\n\n你别把这想成一次远足。Andes 高得让人喘不上气，山口终年冰封，空气稀薄。你得提前几个月，一点点算：每个人带多少粮、骡子驮多少、走哪条道、哪一段会冻掉人。这不是靠勇气，是靠你那套冷静的算术。\n\n1 月你从 Mendoza 出发。不到三周，你的军队从西班牙人想都没想到的方向，冒了出来——突袭，成功。智利解放了。\n\n这是军事史上的壮举。可你坐在我这个位置，心里清楚一件别人顾不上想的事：我能用算术翻过这座山，可这座山割开的人心，是任何算术都翻不过去的。\n\n这个念头，先埋在你心里。它后来会长成你一生最重的那个决定。',
        en: 'Now you are me. In 1817, on the southern front, before you stands that snow-capped Andes.\n\nYou must free Chile on the far side of the mountain. But the Spanish guard the front; a head-on attack is suicide. You make a mad decision: lead an army of about 4,000, and cross over.\n\nDo not picture this as a hike. The Andes is so high it takes the breath, the passes frozen year-round, the air thin. Months ahead you must calculate, bit by bit: how much grain each man carries, how much the mules bear, which path to take, which stretch will cost you men to the cold. This runs not on courage, but on your cold arithmetic.\n\nIn January you set out from Mendoza. In under three weeks, your army emerged from a direction the Spanish never imagined. It was a surprise, and it worked. Chile was freed.\n\nThis was a feat in the history of warfare. Yet in my seat, you know a thing others have no time to think: I can cross this mountain with arithmetic, but the hearts this mountain cut apart, no arithmetic can cross.\n\nKeep that thought buried in you. It will later grow into the heaviest decision of your life.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1817 南方战场面前是 Andes + 要解放山那头智利但正面硬攻送死 + 疯狂决定率约四千人翻过去 + 不是远足 (高得喘不上气/山口终年冰封/空气稀薄/提前几月算粮草骡子路线哪段冻掉人/靠冷静算术非勇气) + 1 月从 Mendoza 出发不到三周从想不到方向冒出突袭成功智利解放 + 军事壮举 + 念头: 算术能翻山翻不过山割开的人心/埋心里后来长成一生最重决定',
      engagementHook: '我靠冷静的算术，把一支军队翻过了终年积雪的 Andes。可就在那座山上，我想到一件事：我能算着翻过这座山，可这座山割开的人心，是任何算术都翻不过去的。这个念头，后来逼出了我一生最重的决定。',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-sanmartin-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '翻过 Andes、解放智利之后，我没停。我从海路北上，打进了西属美洲的老巢——秘鲁。\n\n1821 年，我进了利马，宣布秘鲁独立，自己一度做了「护国公」。\n\n可你坐在我这个位置，会感到一种别人感觉不到的别扭：秘鲁，是西班牙在南美统治最深、最顽固的地方。这里 criollo 精英保守，怕变天，对独立其实半心半意。我打下了城，却没真正打下人心。\n\n更要命的是，我手里的兵越打越少、钱越打越紧，而西班牙在秘鲁山区还有大军没解决。\n\n我比谁都清楚：靠我自己南方这一路的力量，吃不下整个秘鲁。\n\n而就在同一时间，北边那位 Bolívar，正带着他的大军，一路向南压过来。\n\n两路解放者，眼看就要在同一片战场上相遇了。问题是——这片大陆，容得下两个最大的解放者吗？',
        en: 'After crossing the Andes and freeing Chile, I did not stop. I went north by sea and struck into the very heart of Spanish America: Peru.\n\nIn 1821 I entered Lima, declared Peru\'s independence, and for a time made myself "Protector."\n\nYet in my seat, you feel a discomfort others do not: Peru was where Spain\'s rule in South America ran deepest and most stubborn. Here the criollo elite were conservative, afraid of upheaval, in truth only half-hearted about independence. I had taken the city, but not truly taken the hearts.\n\nWorse, my troops grew fewer with every battle, my money tighter, while Spain still had a large army unbeaten in the mountains of Peru.\n\nI knew better than anyone: with the strength of my southern front alone, I could not swallow all of Peru.\n\nAnd at that very time, that Bolivar in the north was pressing south with his great army, all the way down.\n\nTwo fronts of liberators were about to meet on the same battlefield. The question was: could this continent hold two greatest liberators at once?',
      },
      deliverGoal: 'N5 story — 翻 Andes 解放智利后北上海路打进秘鲁 (西属美洲老巢) + 1821 进利马宣布秘鲁独立一度做护国公 + 别扭: 秘鲁是西班牙统治最深最顽固处/criollo 精英保守怕变天对独立半心半意/打下城没打下人心 + 兵越打越少钱越打越紧/西班牙山区还有大军 + 清楚靠南方一路吃不下整个秘鲁 + 同时北边 Bolívar 带大军向南压 + 两路解放者将相遇/大陆容得下两个最大解放者吗',
      engagementHook: '我打下了利马，却没打下人心；我的兵越来越少，西班牙的大军还在山里。而北边的 Bolívar，正带着大军一路向南压过来。一片大陆，容得下两个最大的解放者吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-sanmartin-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我们回到那座山，Andes。我想让你听见，这座山在我这边，是什么。\n\n北边那位 Bolívar，也翻过 Andes。他从山的那一头冒出来，把它看成一条通往统一大国的路，一座等他去缝合大陆的桥。\n\n可我翻这座山的时候，看见的是另一样东西。\n\n（史料没有逐字记下我翻山时在想什么；接下来这一段，是从我当时的处境，替我把一个职业军官心里那笔账，重推一遍。）\n\n我看见的，是它有多难翻。我亲眼看着我的人冻死在山口，骡子摔下悬崖。我用尽一切算术，才勉强把军队带过去。\n\n所以同一座 Andes，他看成「连接」，我看成「警告」。它在告诉我一件冷酷的事：一个人能把军队翻过这座山，但没有任何人，能让这座山两边的人，真心拧成一股。\n\n这座山在我心里种下的，不是雄心，是一种清醒：有些东西，不是再多打一场仗、再翻一座山，就能得到的。',
        en: 'Let us return to that mountain, the Andes. I want you to hear what this mountain was, on my side.\n\nThat Bolivar in the north also crossed the Andes. He emerged from his side of it and saw it as a road to a single great nation, a bridge for him to go and stitch the continent together.\n\nBut when I crossed this mountain, I saw something else.\n\n(The record does not write down, word for word, what was in my mind crossing the mountain. The next part runs again, from the situation I was in, the account a professional officer might have weighed.)\n\nWhat I saw was how hard it was to cross. I watched my men freeze to death at the passes, the mules fall from the cliffs. With all my arithmetic, I barely brought the army over.\n\nSo the same Andes: he saw "connection," I saw "warning." It told me a cold thing. A man can bring an army over this mountain, but no one can make the people on its two sides truly twist into one strand.\n\nWhat this mountain planted in me was not ambition, but a kind of clarity: some things cannot be won by fighting one more battle, or crossing one more mountain.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Andes 从 San Martín 角度 = 警告 (Bolívar 看成连接/通往统一大国的桥；San Martín 看成警告) + anti-fab 框架 (lens 让你站进心里/史料不逐字记翻山想什么) + 亲眼看人冻死山口骡子摔下悬崖用尽算术勉强带过 + 同一座山他看连接我看警告/能翻军队过山没人能让山两边人真心拧成一股 + 种下的不是雄心是清醒: 有些东西不是再打一场再翻一座山就能得到。不揭另两视角',
      engagementHook: '同一座 Andes，Bolívar 翻过它，看见的是「连接」，一条通往统一大国的路；我翻过它，看见的是「警告」。同一座山，为什么落在两个解放者眼里，意思完全相反？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-sanmartin-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1822 年，那个所有人都在等的时刻到了。我和 Bolívar，在厄瓜多尔的港口 Guayaquil，秘密会面。\n\n现在你就是我，坐在那扇关起来的门后面。\n\n我得先告诉你一件诚实的事：这场会谈到底谈了什么、我为什么做出后来的决定，至今没有完整的档案，历史学家们众说纷纭。\n\n（所以接下来这一段，不是史料确证的「我心里怎么想」，而是从我当时所处的处境里，把那个职业军官可能算的账，替我推一遍。）\n\n我面前摆着的，是一道冷酷的算术题：要彻底解放秘鲁，需要更多的兵、更统一的指挥。Bolívar 手里有这些，我没有。如果我们俩都不肯让，下一步，很可能就是两个解放者，为了争指挥权、争「谁是老大」，自己人打自己人。\n\n你算到这一步，背后一凉：我们好不容易把西班牙赶走，难道要亲手发动一场解放者打解放者的内战，把刚到手的独立，又毁在自己人手里？',
        en: 'In 1822, the moment everyone had waited for came. Bolivar and I met secretly at the Ecuadorian port of Guayaquil.\n\nNow you are me, sitting behind that closed door.\n\nFirst I must tell you something honest: what this meeting actually discussed, and why I made the decision I later made, has no complete record to this day, and historians are much divided.\n\n(So the next part is not the archive-certified "what was in my mind," but the account a professional officer might have weighed, run again from the situation I was in.)\n\nBefore me lay a cold arithmetic problem: to free Peru completely needed more troops, more unified command. Bolivar had these; I did not. If neither of us would yield, the next step would likely be two liberators, fighting over command, over "who is the boss," our own people against our own.\n\nReaching that point, a chill runs down your back. We had only just driven Spain out: were we to start, with our own hands, a civil war of liberator against liberator, and ruin the independence just won in our own people\'s hands?',
      },
      deliverGoal: 'N7 story — 1822 Guayaquil 秘密会面 + 你就是我坐关起的门后 + anti-fab 诚实: 谈了什么/为何做决定至今无完整档案史学家众说纷纭 + 括号标 (不是史料确证「我心里怎么想」是 lens 替你从处境推职业军官可能算的账) + 冷酷算术题: 彻底解放秘鲁需更多兵更统一指挥 Bolívar 有我没 + 都不让下步可能两解放者争指挥权自己人打自己人 + 背后一凉: 好不容易赶走西班牙难道发动解放者打解放者内战把独立毁在自己人手里',
      engagementHook: '坐在那扇关起的门后面，我面前是一道冷酷的算术题：如果我们俩都不肯让，下一步很可能就是两个解放者，为了争「谁是老大」，自己人打自己人。好不容易赶走西班牙，难道要把独立毁在自己人手里？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-sanmartin-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '于是，我做了那个让所有人意外、到今天还有人想不通的决定。\n\n我退出。\n\n我把我的军队、把整个南方战场，交给了 Bolívar。我没有争「谁是最大的解放者」，没有发动那场我本可以发动的内战。我把胜利的果子，让了出去。\n\n然后，我做得更彻底：我没有留在南美等一个官位、等一份荣耀，而是默默收拾行装，远走欧洲。我离开了我亲手解放的土地，再也没有回来。\n\n你坐在我这个位置，心里一定翻江倒海。这一步，外人怎么看都行——有人说我软弱，打到一半认怂了；有人说我大度，为了大局牺牲自己。\n\n但只有坐在我这儿，你才摸得到那个最冷的真相：我不是输给了 Bolívar，我是赢过了一个更难缠的对手——我自己想再赢一场的那股劲。\n\n按住一支本可以再打的军队，按住自己「我也配当老大」的念头，这件事，比翻越 Andes 难多了。',
        en: 'And so I made the decision that surprised everyone, that some cannot understand even today.\n\nI stepped aside.\n\nI handed my army, and the whole southern front, to Bolivar. I did not fight over "who is the greatest liberator," did not start the civil war I could have started. The fruit of victory, I gave away.\n\nThen I went further: I did not stay in South America waiting for an office, for glory. I quietly packed and went far away, to Europe. I left the land I had freed with my own hands, and never returned.\n\nIn my seat, your heart must be churning. This step, outsiders may read however they like. Some say I was weak, that I lost my nerve halfway; some say I was magnanimous, sacrificing myself for the whole.\n\nBut only in my seat can you touch the coldest truth: I did not lose to Bolivar. I beat a harder opponent: my own urge to win one more time.\n\nTo hold back an army that could still have fought, to hold back the thought "I too deserve to be the boss," this was far harder than crossing the Andes.',
      },
      deliverGoal: 'N8 story — 做了意外决定: 我退出 + 把军队整个南方战场交给 Bolívar/没争最大解放者没发动本可发动的内战/把胜利果子让出去 + 更彻底: 不留南美等官位荣耀默默远走欧洲/离开亲手解放土地再没回来 + 外人怎么看都行 (有人说软弱认怂/有人说大度牺牲) + 最冷真相: 不是输给 Bolívar 是赢过更难缠对手「自己想再赢一场的那股劲」+ 按住能打的军队和「我也配当老大」念头比翻 Andes 难多了',
      engagementHook: '我交出兵权、远走他乡。有人说我软弱，有人说我大度。可只有坐在我这儿你才摸得到那个真相：我不是输给了 Bolívar，我是赢过了一个更难缠的对手——我自己想再赢一场的那股劲。按住自己，比翻越 Andes 难多了。你按得住吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-sanmartin-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我退出之后，故事并没有按一个圆满的结局走。\n\n我把南方战场交给 Bolívar，南美解放的指挥权统一了。1824 年，Ayacucho 一战，西班牙在南美大陆的统治终结。仗，赢了。\n\n可团结，没赢来。\n\n我在欧洲，隔着大半个地球，听着南美传来的消息，一条比一条让人心凉：Bolívar 梦想的那个统一大国 Gran Colombia，1830 年散了，裂成委内瑞拉、厄瓜多尔、新格拉纳达。各地冒出一个个 caudillo（考迪罗）强人，用枪杆子抢权，今天你上、明天他上。\n\n连 Bolívar 本人，也在 1830 年，贫病交加、众叛亲离中死去，临终说「美洲无法被我们治理」。\n\n你坐在我这个位置，心里是说不出的复杂：我当年在 Andes 上模糊看见的那个最坏的预感——这片大陆太碎，拼不成一个整体——一条条，全都应验了。\n\n我退让，没能换来我希望的那个团结的美洲。我躲开了一场解放者的内战，却没躲开这片大陆注定的离散。',
        en: 'After I stepped aside, the story did not run to a happy ending.\n\nI handed the southern front to Bolivar, and command of South American liberation was unified. In 1824, the Battle of Ayacucho ended Spain\'s rule on the South American mainland. The war was won.\n\nBut unity was not.\n\nIn Europe, half a world away, I heard the news from South America, each piece colder than the last: the single great nation Bolivar dreamed of, Gran Colombia, came apart in 1830, splitting into Venezuela, Ecuador, and New Granada. Caudillo strongmen rose everywhere, grabbing power with the gun, this one today, that one tomorrow.\n\nEven Bolivar himself died in 1830, sick and poor and abandoned, saying near death "America cannot be governed by us."\n\nIn my seat, my heart is beyond words: the worst foreboding I had glimpsed dimly on the Andes (that this continent is too broken to be pieced into one whole) came true, piece by piece.\n\nMy yielding did not buy the united America I had hoped for. I avoided one civil war of liberators, but I could not avoid this continent\'s destined scattering.',
      },
      deliverGoal: 'N9 story — 退出后故事没圆满结局 + 交南方给 Bolívar 指挥权统一/1824 Ayacucho 西班牙南美大陆统治终结仗赢了 + 团结没赢来 + 在欧洲隔半地球听消息一条比一条心凉: Gran Colombia 1830 散裂成委内瑞拉厄瓜多尔新格拉纳达/caudillo 强人用枪杆抢权 + Bolívar 1830 贫病众叛亲离死「美洲无法被我们治理」+ San Martín 复杂: Andes 上模糊看见的最坏预感 (大陆太碎拼不成整体) 全应验 + 我退让没换来团结的美洲/躲开解放者内战却躲不开大陆注定的离散',
      engagementHook: '我退让，是为了不让独立毁在自己人手里。可我躲开了一场解放者的内战，却没能躲开这片大陆注定的离散——它最后还是碎了。如果退让没能换来你想要的结果，这退让，还值得吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-sanmartin-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，最难评的一件事，是我在 Guayaquil 之后那一退。两种说法都站得住，你来称。\n\n一种说法：那是软弱。我打到了家门口，手里有军队、有威望，本可以争一争这片大陆该怎么走。可我退了、走了。结果 Bolívar 也没拼成统一大国，大陆照样碎了。我那一退，什么都没改变，只是早早把自己从历史里删掉了。一个真正的领袖，难道不该战斗到最后吗？\n\n另一种说法：那是一种罕见的清醒。我看清了别人不愿看的事：这片大陆的离散，是地理和三百年殖民结构定死的，不是再多一个强人、再多一场内战能扭转的。我退让，至少避免了最坏的一件事：解放者互相残杀。我宁可被骂软弱，也不愿用自己人的血，给一个本就拼不起来的梦想陪葬。\n\n这两边，不是「他高尚但天真」。它们是同一份冷静算术的两张脸：它既让我避开了内战，也让我早早退出了我本可以影响的历史。\n\n这是一所学校里 AP 老师反复让学生掂量的难题：在该不该停手的关口，我这一退，是软弱，还是清醒？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, the hardest thing to judge is that stepping-aside after Guayaquil. Both views stand. You do the weighing.\n\nOne view: it was weakness. I had fought to the very gate, with an army and prestige in hand, and could have contended over how this continent should go. Yet I withdrew, left, and gave the stage to another. And the result? Bolivar too failed to build that single great nation; the continent shattered all the same. My stepping-aside changed nothing, it only deleted me from history early. Should a true leader not fight to the end?\n\nThe other view: it was a rare clarity. I saw what others would not. This continent\'s scattering was fixed by geography and 300 years of colonial structure, not something one more strongman or one more civil war could reverse. My yielding at least avoided the worst thing: liberators slaughtering each other. I would rather be cursed as weak than spend my own people\'s blood as a burial offering to a dream that could never be pieced together.\n\nThese are not "noble but naive." They are two faces of one judgment: the same cold arithmetic that let me avoid civil war also made me exit early from a history I could have shaped.\n\nThis is a hard problem an AP teacher at a school will have students weigh again and again: at the moment of whether to stop, was San Martin\'s yielding weakness, or clarity? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: Guayaquil 后那一退是软弱还是清醒 + 一种说法 (软弱/本可争却退走/结果大陆照样碎那一退什么都没改变只是早早删掉自己/领袖该战斗到最后) + 另一种说法 (罕见清醒/看清离散是地理+三百年殖民结构定死非强人或内战能扭/退让避免解放者互相残杀/宁被骂软弱不用自己人血陪葬拼不起的梦) + 同一判断两张脸 (冷静算术既避内战也早早退出能影响的历史) Rule 0 不褒贬 + neutral school name (AP 老师) + 想 30 秒两边都站得住。§8 中国桥不在本节 (单点在 casta-n9)',
      engagementHook: '我那一退，是软弱，还是清醒？我打到了家门口，手里有军队、有威望，本可以争一争这片大陆该怎么走，可我退了、走了。一个真正的领袖，该战斗到最后，还是该懂得在某一刻停手？两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'lat-sanmartin-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价一个站在所有人中间、最后选择退出的人？\n\n我对谁都不完全是自己人。对争权的人，我是个奇怪的、放弃了到手权力的傻子；对仰望英雄的人，我是个没把故事讲完就退场的人；对我自己，我是一个用一辈子的冷静，按住了自己最后那点野心的人。我退让、远走、客死他乡，没等到我希望的那个团结的美洲。把这样一生放上天平，你怎么称——是失败，还是另一种没有被野心打败？\n\n现在，你只听到了我这一边。那个从北边一路打到我面前、接过我兵权、后来自任独裁者、临终说「在大海里耕田」的 Bolívar——他会怎么讲我们那场会面，怎么看我这一退？还有那个被招进军队、替两路解放者在山地里流血、独立后却发现自己还在 casta 最底层的士兵——在他眼里，我们这些解放者争的「谁当老大」，跟他到底有半点关系吗？\n\n你还没听到他们的声音。换个视角再走一遍，你刚才下的判断，站不站得住？\n\n最后，再想一步：在你自己的人生里，有没有过一个「该不该停手」的关口？你身边那些抢着要赢、要争第一的人，和那些懂得在某一刻退一步的人——多年以后再看，谁更让你佩服？',
        en: 'Having walked my whole life, how would you judge a man who stood in the middle of everyone and, at the end, chose to step out?\n\nI was fully on no one\'s side. To those who fought for power, I was a strange fool who gave up power already in hand; to those who looked up to heroes, I was a man who left before the story was finished; to myself, I was a man who, with a lifetime of calm, held back his own last shred of ambition. I yielded, went far away, died on foreign soil, and never reached the united America I had hoped for. Put a life like this on the scale. How do you weigh it: a failure, or another kind of not-being-defeated by ambition?\n\nNow, you have heard only my side. The Bolivar who fought all the way from the north to stand before me, took my command, later named himself dictator, and near death said he had "plowed the sea": how would he tell that meeting of ours, how would he see this stepping-aside of mine? And the soldier recruited into the army, who bled for both fronts of liberators in the mountains, then found after independence that he was still at the very bottom of the casta. In his eyes, did our liberators\' quarrel over "who is the boss" have anything at all to do with him?\n\nYou have not yet heard their voices. Run it again through another lens, and see whether the judgment you just made still holds.\n\nFinally, one more step: in your own life, has there been a moment of "whether to stop"? The people around you who scramble to win, to be first, and those who know how to step back at a certain moment: looking back years later, which do you admire more?',
      },
      deliverGoal: 'N11 close/meta — 评价站在所有人中间最后选退出的人 (对谁都不完全自己人/对争权者是放弃权力的傻子/对仰望英雄者是没讲完故事就退场/对自己是用一辈子冷静按住最后野心) 天平: 失败还是另一种没被野心打败 + 你只听到我这一边 + 还没听到: Bolívar (接我兵权后自任独裁者临终在大海里耕田/会怎么讲会面和我这一退) + casta 底层士兵 (替两路解放者流血独立后仍 casta 最底/解放者争谁当老大跟他有半点关系吗) 会挑战 + 换视角再走判断站不站得住 + transfer「你人生里该不该停手的关口/抢着赢的人 vs 懂退一步的人多年后谁更让你佩服」',
      engagementHook: '我对谁都不完全是自己人，最后选择退出，客死他乡。你会怎么评价这样一个站在中间的人？现在你只听到了我这一边——那个接过我兵权的 Bolívar、那个替我们流血却没翻身的底层士兵，会怎么讲这同一段历史？',
      expectsRealAnswer: true,
    },
  ],
};

export var castaBottomLens = {
  id: 'casta-bottom-receiving-end',
  name: 'The Casta-Bottom Soldier',
  nameCn: '底层的混血士兵',
  role: 'receiving-end',
  perspectiveTag: 'paid-most-gained-least',
  icon: '⛓️',
  description: {
    cn: '西属美洲 casta 等级表最底层的一个人。他没有名字，因为历史很少为这些人留下名字，而这恰恰是问题本身。他可能是一个被 criollo 军官招进独立军队的 mestizo 或 mulato 青年，也可能是安第斯高原上一个世代交贡赋、做劳役的印第安庄园劳力。这一遍，你站在付出最多、得到最少的位置，替别人的独立流血，再亲眼看着仗打完、主人换了，自己脚下的处境，几乎没有变。',
    en: 'A person at the very bottom of Spanish America\'s casta ranking chart. He has no name, because history rarely left names for these people, and that is exactly the point. He might be a mestizo or mulato young man recruited into the independence army by a criollo officer, or an Indian estate laborer on the Andean plateau whose family paid tribute and did labor service for generations. This pass puts you in the position that paid the most and gained the least, where you bleed for someone else\'s independence, then watch with your own eyes as the war ends, the masters change, and the ground beneath you barely shifts.',
  },
  storyboard: [
    {
      id: 'lat-casta-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '仗打完了。西班牙人走了。新的国家成立了，到处在庆祝独立。\n\n我站在田边，低头看了看自己脚下的地。\n\n这块庄园，还是那块庄园。我要交的贡赋，还是要交。我在这片大陆上的位置——最底下那一格——还是那一格。\n\n我没有名字给你。不是我不肯说，是历史很少替我们这些人,留下名字。在西属美洲，有一张精确到肤色的等级表，叫 casta。我就排在那张表的最底层。\n\n打仗的时候，招我去当兵的 criollo 军官，许诺的是「自由」「平等」「不再受西班牙压迫」。我信了，我扛枪、我冲锋、我流血。\n\n可现在，独立赢了，我抬头一看：掌权的人，从在西班牙出生的白人，换成了在美洲出生的白人。而我，还在原地。\n\n这一遍，你站在我这儿——付出最多、得到最少的这一格。你要直面一个最难、也最诚实的问题：一场真实的解放，为什么对一些人来说，几乎什么都没变？',
        en: 'The war is over. The Spanish are gone. A new nation has been founded, and everywhere they celebrate independence.\n\nI stand at the edge of the field and look down at the ground beneath my feet.\n\nThis estate is still the same estate. The tribute I owe, I still owe. My place on this continent, that lowest square, is still that square.\n\nI have no name to give you. Not because I will not say it, but because history rarely left a name for people like us. In Spanish America there was a chart, precise down to skin color, called the casta. I ranked at the very bottom of that chart.\n\nWhen the war came, the criollo officer who recruited me promised "freedom," "equality," "no more oppression by Spain." I believed it. I carried a rifle, I charged, I bled.\n\nBut now independence is won, and I lift my head to see: the people in power have changed from whites born in Spain to whites born in the Americas. And I am still where I was.\n\nThis pass puts you where I stand, the square that paid the most and gained the least. You must face the hardest, most honest question. A real liberation: why, for some people, did almost nothing change?',
      },
      deliverGoal: 'N1 hook — 仗打完西班牙走了新国家成立到处庆祝独立 + 低头看脚下地 (庄园还是那庄园/贡赋还要交/最底那格还那格) + 没名字 (历史很少替我们留名字这恰是问题本身) + casta 精确到肤色等级表/排最底层 + 打仗时 criollo 军官许诺自由平等不再受压迫/我信了扛枪冲锋流血 + 独立赢了抬头看掌权从西班牙生白人换成美洲生白人/我还在原地 + 这一遍站付出最多得到最少这格/直面最难最诚实问题: 真实解放为何对一些人几乎什么都没变',
      engagementHook: '仗打完了，到处在庆祝独立。可我低头一看：庄园还是那庄园，贡赋还要交，我还在最底层。掌权的，只是从在西班牙出生的白人，换成了在美洲出生的白人。一场真实的解放，为什么对我来说，几乎什么都没变？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-casta-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先弄懂我活在一张什么样的表里，你才懂后来发生的事。\n\n西属美洲有一套种族等级制度，叫 casta（卡斯塔）。它像一张精确到残忍的表，按你身上欧洲、印第安、非洲血统的不同组合，把每个人排好序。\n\n最顶上是 peninsular——在西班牙本土出生的白人。往下一格是 criollo——在美洲出生的纯欧洲血统白人。再往下，是 mestizo（印欧混血）、mulato（黑白混血）这些一层层的混血。\n\n而最底下，是印第安人，和被奴役的非洲人。那就是我。\n\n你出生那一刻的肤色和血统，基本就写好了你这辈子：能做什么工、交多少税、坐不坐得上官位、在法庭上算不算个人。\n\n你记住这张表。因为这场革命最关键、也最容易被讲错的一件事是——它后来推翻了这张表的塔尖（peninsular 压 criollo），却没有推翻这张表本身。塔尖换了人，塔身，原封不动。',
        en: 'First, understand what kind of chart I lived inside, so you understand what happened later.\n\nSpanish America had a system of racial ranks called the casta. It was like a chart, precise to the point of cruelty, sorting every person by the different mix of European, Indian, and African blood in them.\n\nAt the very top were the peninsulares, whites born in Spain itself. One square below were the criollos, American-born whites of pure European blood. Below them came the mestizos (Indian-European mixed), mulatos (Black-white mixed), and other layered mixes.\n\nAnd at the very bottom were the Indians and the enslaved Africans. That was me.\n\nThe skin color and bloodline you were born with mostly wrote, in advance, your whole life: what work you could do, how much tax you paid, whether you could hold office, whether you counted as a person in a court of law.\n\nRemember this chart. Because the most crucial thing about this revolution, and the easiest to get wrong, is this: it later toppled the tip of the chart (peninsulares over criollos), but it did not topple the chart itself. The tip changed hands; the body stood untouched.',
      },
      deliverGoal: 'N2 setup — 弄懂活在什么表里 + casta 种族等级制度 (精确到残忍按欧洲/印第安/非洲血统组合排序) + 顶 peninsular (西班牙生白人) → criollo (美洲生纯欧白人) → mestizo/mulato 混血 → 最底印第安人+被奴役非洲人=我 + 出生肤色血统写好一辈子 (做什么工/交多少税/坐不坐官位/法庭算不算人) + 记住这张表: 革命最关键最易讲错的事——推翻塔尖 (peninsular 压 criollo) 没推翻表本身/塔尖换人塔身原封不动',
      engagementHook: '我出生那一刻的肤色和血统，就基本写好了我这辈子能走多远。这场革命推翻了这张表的塔尖，却没推翻这张表本身——塔尖换了人，塔身原封不动。你觉得，换了塔尖，算不算真的改变？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-casta-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '可你别以为，这张表底下的我们，就只是任人摆布的数字。\n\n我每天的日子，是这样的：天不亮下地，在庄园里种地、收割，或者被赶进山里的矿洞。我交的，不只是劳力，还有一种叫「贡赋」的东西——一笔专门压在印第安人头上的钱和物，世世代代，交了几百年。\n\n这片大陆的财富——那些运回西班牙的白银、那些喂饱欧洲的糖和作物——底下垫着的，是我们这样的人，一代又一代的命。\n\n可账本上，从来只有我们干了多少活、值多少钱，没有我们是谁。\n\n（说一句实话：我到底是个被招去当兵的混血青年，还是一个高原上的印第安劳力，史料大多没替我们这样的人，留下确切的名字和面孔。我说的，是千千万万个我们共同的处境。）\n\n但我们心里清楚：我们种的地、流的汗、垫的命，是这套秩序真正的地基。这一点，那张 casta 表，永远不会替我们记上一笔。',
        en: 'But do not think that we, beneath this chart, were only numbers to be ordered about.\n\nMy daily life ran like this: to the fields before dawn, planting and harvesting on the estate, or driven into the mine shafts in the mountains. What I gave was not only labor, but a thing called "tribute," a sum of money and goods laid specially on the heads of Indians, paid generation after generation, for hundreds of years.\n\nThis continent\'s wealth (the silver shipped back to Spain, the sugar and crops that fed Europe) was bedded, underneath, on the lives of people like us, one generation after another.\n\nYet the ledger held only how much work we did and what we were worth, never who we were.\n\n(One honest note: whether I was a mixed-race youth recruited to soldier, or a highland Indian laborer, the record mostly left people like us no exact name or face. What I speak is the shared situation of thousands upon thousands of us.)\n\nBut we knew in our hearts: the land we worked, the sweat we shed, the lives we laid down, were the real foundation of this whole order. This, that casta chart would never enter for us, not one line.',
      },
      deliverGoal: 'N3 setup — 别以为底下的我们只是任人摆布的数字 + 每天日子 (天不亮下地种收/被赶进矿洞) + 交的不只劳力还有贡赋 (专压印第安人头上的钱物世代交几百年) + 大陆财富 (运回西班牙白银/喂饱欧洲的糖作物) 垫着我们一代代的命 + 账本只有干多少活值多少钱没有我们是谁 + anti-fab 括号 (我到底是被招的混血青年还是高原印第安劳力史料大多没留确切名字面孔/我说的是千万个我们共同处境) + 我们清楚: 种的地流的汗垫的命是这套秩序真正地基/casta 表永不替我们记一笔',
      engagementHook: '这片大陆运回西班牙的白银、喂饱欧洲的糖，底下垫着的，是我们这样的人一代又一代的命。可账本上只有我们值多少钱，没有我们是谁。一套秩序的地基，为什么反而最不被记住？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-casta-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n有一天，独立战争烧到了我们这片地。一个 criollo 军官来了，他要招兵。\n\n他站在我们面前，说了一堆我从没在田里听过的大词：「自由」「平等」「我们要把西班牙人赶出去，让美洲人当家做主」。他说，跟我去打仗，你就不再是别人的财产、不再低人一等。\n\n你站在田里，心里轰一下。「自由」「平等」——这些词，本来是写给上面那些人的。可现在，有人当着我的面，把它们说出来了。\n\n你做了一个选择：你放下锄头，扛起了枪。\n\n你为什么去？也许是真信了那些大词，也许只是想搏一个不一样的活法，也许只是被半强迫地拉了壮丁。\n\n但有一件事，你心里是亮的：这是头一回，有人告诉你，你也可以是个「自由」的人。哪怕这话是从一个 criollo 嘴里说出来的，哪怕你隐隐觉得，他要的「自由」和你要的，可能不是同一个。',
        en: 'Now you are me.\n\nOne day the war of independence reached our land. A criollo officer came; he was recruiting soldiers.\n\nHe stood before us and spoke a string of big words I had never heard in the fields: "freedom," "equality," "we will drive the Spanish out and let Americans rule themselves." Come fight with me, he said, and you will no longer be another man\'s property, no longer beneath others.\n\nYou stand in the field, and something goes off inside you. "Freedom," "equality": these words were meant for the people above. Yet now someone speaks them to my face.\n\nYou make a choice: you set down the hoe and take up the rifle.\n\nWhy did you go? Maybe you truly believed those big words; maybe you only wanted to gamble for a different kind of life; maybe you were half-forced, pressed into the ranks.\n\nBut one thing is clear inside you: this is the first time anyone has told you that you too could be a "free" person. Even if the words came from a criollo\'s mouth, even if you dimly feel that the "freedom" he wants and the one you want may not be the same thing.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 独立战争烧到这片地/criollo 军官来招兵 + 说一堆田里没听过的大词 (自由/平等/赶西班牙人让美洲人当家/跟我打仗不再是别人财产不再低人一等) + 你轰一下 (这些词本写给上面那些人现在有人当我面说出来) + 选择: 放下锄头扛起枪 + 为什么去 (也许真信/也许搏不一样活法/也许半强迫拉壮丁) + 心里亮的一件事: 头一回有人告诉你你也可以是自由的人 + 隐隐觉得他要的自由和你要的可能不是同一个',
      engagementHook: '一个 criollo 军官当着我的面，说出了「自由」「平等」——这些本来只写给上面那些人的词。我放下锄头，扛起了枪。可我隐隐觉得：他要的「自由」，和我要的，好像不是同一个。你信他吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-casta-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '当兵之后，我才知道打仗是什么。\n\n这不是一场短仗。从 1810 年起，断断续续打了十几年。我跟着军队，从平原走到高山，行军、扎营、挨饿、生病。\n\n你得明白，这场仗规模有多大。它不是哪一个英雄的独角戏。北边有 Bolívar，南边有 San Martín，还有 Sucre（Bolívar 的部将）这样的将领，还有无数像我一样、连名字都没留下的底层士兵。我们才是填满这场战争的人。\n\n仗打得很苦。早期，独立军屡战屡败，西班牙人一次次反扑，我身边的人一个个倒下。\n\n你扛着枪，在队伍里，慢慢摸到一个谁也不说破的真相：那些大词是军官们喊的，可真正去死的，是我们。冲在最前面挨炮火的，是我们；打输了被清算的，也是我们。\n\n那个军官许诺的「自由」，离我还很远很远。可眼下，我连退路都没有了——枪已经在手上，仗已经在打。我只能往前。',
        en: 'After I became a soldier, I learned what war was.\n\nThis was no short war. From 1810 on, it dragged, on and off, for more than a dozen years. I followed the army from the plains into the high mountains, marching, making camp, going hungry, falling sick.\n\nYou must understand how vast this war was. It was no single hero\'s solo act. In the north was Bolivar, in the south San Martin, and generals like Sucre (Bolivar\'s general), and countless bottom soldiers like me whose names were never kept. We were the ones who filled this war.\n\nThe fighting was bitter. Early on, the independence armies lost battle after battle, the Spanish struck back again and again, and the men beside me fell one by one.\n\nCarrying my rifle in the ranks, I slowly felt out a truth no one said aloud: the big words were shouted by the officers, but the ones who truly went to die were us. The ones charging first into the cannon fire were us; the ones purged after a loss were also us.\n\nThe "freedom" that officer promised was still far, far from me. Yet now I had no road back. The rifle was already in my hand, the war already on. I could only go forward.',
      },
      deliverGoal: 'N5 story — 当兵后才知打仗是什么 + 不是短仗 (1810 起断断续续十几年/从平原到高山行军扎营挨饿生病) + 规模多大: 不是英雄独角戏 (北 Bolívar 南 San Martín 还有 Sucre 将领 + 无数像我连名字没留的底层士兵/我们才是填满战争的人) + 仗苦 (早期屡战屡败西班牙反扑身边人一个个倒) + 摸到谁也不说破的真相: 大词军官喊真正去死的是我们 (冲最前挨炮火/打输被清算) + 自由离我很远 + 连退路都没了枪在手仗在打只能往前',
      engagementHook: '那些「自由」「平等」的大词，是军官们喊的；可真正冲在最前面、挨炮火、去死的，是我们这些连名字都没留下的人。一场仗，喊口号的人和去送命的人，为什么常常不是同一批人？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-casta-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我这辈子走得最远的一次，是跟着军队，上了 Andes（安第斯山脉）。\n\n这座山，我从小就远远地看着它。它横在我们这片大陆上，终年积雪，高得望不到头。在我们村子里，老人说，山的那一头是另一个世界，我们这样的人，一辈子也走不出这座山。\n\n打仗的时候，我却真的上了山。我亲眼看见，解放者带着大军，从一头翻到另一头——Bolívar 从北边翻它，San Martín 从南边翻它，他们把这座挡了几百年的大山，当成通往新国家的路。\n\n可你坐在我这个位置，看这座山，是另一种心情。\n\n（这座山在我心里是什么，史料不会替我记下来。但坐在我这儿，你也许能体会。）\n\n对那些解放者，Andes 是一条路、一座桥、一个梦想。对我，它一直是一堵墙——一堵把我和「另一个世界」隔开的墙。仗打完了，解放者翻过它去建他们的大国；而我，又回到了山这一头，我世世代代走不出去的这一头。\n\n同一座山，他们翻过去抓住了一个新世界；我翻过去，又走了回来。',
        en: 'The farthest I ever went in my life was up the Andes, following the army.\n\nThis mountain, I had watched from afar since I was a child. It lay across our continent, snow-capped year-round, so high you could not see its end. In our village the old people said the far side of the mountain was another world, and people like us could never, in a lifetime, walk out past this mountain.\n\nIn the war, I did go up the mountain. With my own eyes I saw the liberators take their great armies from one side to the other: Bolivar crossed it from the north, San Martin from the south, treating this mountain that had blocked the way for centuries as a road to a new nation.\n\nBut in my seat, looking at this mountain is another feeling.\n\n(What this mountain was, inside me, the record will not keep for me. But sitting in my seat, you may sense it.)\n\nTo those liberators, the Andes was a road, a bridge, a dream. To me, it was always a wall, a wall that shut me away from "another world." When the war was over, the liberators crossed it to build their great nations; and I came back to this side of the mountain, this side I and my forebears could never walk out of.\n\nThe same mountain: they crossed it and seized a new world; I crossed it, and walked back again.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Andes 从 casta 底层角度 = 一堵墙 (解放者看路/桥/梦想；他看世代走不出的墙) + 从小远远看着 (横在大陆终年积雪高得望不到头/村里老人说山那头是另一世界我们一辈子走不出) + 打仗时真上了山亲眼看解放者带大军翻 (Bolívar 北翻 San Martín 南翻把挡几百年大山当通往新国家的路) + anti-fab 括号 (山在我心里是什么史料不替我记/坐我这你也许能体会) + 同一座山他们翻过去抓住新世界我翻过去又走回来。不揭另两视角',
      engagementHook: '对那些解放者，Andes 是一条通往新国家的路；对我，它一直是一堵墙——把我和「另一个世界」隔开的墙。仗打完，他们翻过去建了大国，我又回到了世世代代走不出去的这一头。同一座山，为什么对你我，根本不是同一座山？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-casta-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '十几年的仗，终于到了头。\n\n1824 年，在安第斯高原一个叫 Ayacucho（阿亚库乔，高原上的最后一战）的地方，打了最后一场大仗。Sucre（苏克雷，解放者 Bolívar 最信任的部将）指挥的联军，击垮了西班牙的主力。西班牙在南美大陆三百年的统治，结束了。\n\n那一天，到处都在欢呼「独立了」。号角、礼炮、旗帜。\n\n你也站在人群里。你应该高兴的——这,不就是当年那个军官许诺给你的吗？西班牙人赶走了，美洲人自己当家了。\n\n可你心里，有一种说不出的空。\n\n你低头看看自己：身上还是当兵前那身破衣裳，手上还是那双干活的手。你想起一路死掉的同伴，他们连这场欢呼都没听到。\n\n你忽然有点不确定：我们流了这么多血，赢来的这个「独立」，到底是赢给了谁？欢呼的人群里，站在最前排、最高兴的，好像都是那些 criollo 老爷。而我，又被挤回了人群的最后面。',
        en: 'The dozen years of war finally came to an end.\n\nIn 1824, at a place called Ayacucho (the last battle, high on the Andean plateau), the last great battle was fought. The combined army commanded by Sucre (the liberator Bolivar\'s most trusted general) crushed the main Spanish force. Spain\'s 300-year rule on the South American mainland was over.\n\nThat day, everywhere they cheered "independence." Horns, salutes, flags.\n\nYou stand in the crowd too. You should be glad. Is this not what that officer once promised you? The Spanish driven out, Americans ruling themselves.\n\nYet inside you there is an emptiness you cannot name.\n\nYou look down at yourself: still the same ragged clothes as before you soldiered, still the same working hands. You think of the comrades who died along the way; they never even heard this cheer.\n\nAnd suddenly you are not sure: we shed so much blood, and this "independence" we won, for whom was it really won? In the cheering crowd, the ones standing in the front row, the gladdest, all seem to be the criollo lords. And I am squeezed back, again, to the very rear of the crowd.',
      },
      deliverGoal: 'N7 story — 十几年仗到头 + 1824 安第斯高原 Ayacucho 最后大仗/Sucre 指挥联军击垮西班牙主力/西班牙南美大陆三百年统治结束 + 到处欢呼独立 (号角礼炮旗帜) + 你站人群里应该高兴 (不就是军官许诺的吗西班牙赶走美洲人当家) + 心里说不出的空 + 低头看自己 (还是破衣裳干活的手/想起死掉的同伴连欢呼都没听到) + 忽然不确定: 流这么多血赢来的独立到底赢给谁 + 欢呼人群最前排最高兴是 criollo 老爷/我又被挤回最后面',
      engagementHook: '到处都在欢呼「独立了」，我也站在人群里。可我低头一看：身上还是那身破衣裳，手上还是那双干活的手。欢呼人群里站最前排、最高兴的，都是 criollo 老爷，而我又被挤回了最后面。这个独立，到底赢给了谁？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-casta-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '退伍之后，我回到了田里。然后，我看清了那个最冷的真相。\n\n我以为「独立」会改变我的命。结果，我低头看脚下：庄园还是那个庄园，地主还是那一拨人（只不过现在叫 criollo 老爷，不叫西班牙总督了），我要交的贡赋，照旧。\n\n那张 casta 表，法律上松动了一点，可日子上，底层还是底层。土地、权力，还是牢牢攥在 criollo 精英手里。有些地方，连奴役制都还延续了几十年。\n\n更乱的是——西班牙人走了，可秩序没来。各地冒出一个个 caudillo（考迪罗）强人，带着兵抢地盘，今天这个上、明天那个下。我刚从一场仗里活下来，又被卷进一场又一场的乱局。对我这样的人，这种没完没了的动荡，比从前更难熬。\n\n你坐在我这个位置，终于明白了那个军官当年没说出口的事：他说的「自由」，是他们 criollo 不再被西班牙人压。我以为那也包括我，可那张表上，我的位置，根本没动。\n\n换了主人，不等于翻了身。这中间，隔着一条没人替我跨过去的线。',
        en: 'After I was discharged, I went back to the fields. And then I saw the coldest truth.\n\nI had thought "independence" would change my fate. Instead, I looked down at the ground: the estate was still the same estate, the landlords still the same lot (only now they were called criollo lords, not the Spanish viceroy), and the tribute I owed went on as before.\n\nThat casta chart had loosened a little in law, but in daily life, the bottom was still the bottom. Land and power were still gripped tight in the criollo elite\'s hands. In some places, even slavery dragged on for decades more.\n\nMore chaotic still: the Spanish were gone, but order did not come. Caudillo strongmen rose everywhere, seizing turf with their troops, this one up today, that one down tomorrow. I had just survived one war, and was swept into chaos after chaos. For a man like me, this endless turbulence was harder to bear than before.\n\nIn my seat, you finally understand the thing that officer never said aloud: the "freedom" he meant was that they, the criollos, would no longer be pressed by the Spanish. I had thought it included me too, but on that chart, my place had not moved at all.\n\nChanging masters is not the same as rising up. Between the two lies a line no one crossed for me.',
      },
      deliverGoal: 'N8 story — 退伍回田里看清最冷真相 + 以为独立改命结果低头看 (庄园还那庄园/地主还那拨人只是改叫 criollo 老爷不叫西班牙总督/贡赋照旧) + casta 表法律松动一点日子上底层还底层/土地权力牢牢攥 criollo 手里/有些地方奴役制延续几十年 + 更乱: 西班牙走了秩序没来/caudillo 强人带兵抢地盘今上明下/刚活下来又卷进乱局/动荡比从前更难熬 + 明白军官没说出口的事: 他说的自由是他们 criollo 不再被西班牙压/我以为包括我可表上我位置根本没动 + 换了主人不等于翻了身/隔着没人替我跨过去的线',
      engagementHook: '我终于明白那个军官当年没说出口的事：他说的「自由」，是他们 criollo 不再被西班牙人压。我以为那也包括我，可那张表上，我的位置根本没动。换了主人，和翻了身，中间隔着一条没人替我跨过去的线。',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-casta-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想退一步，让你看一张更大的地图，一张我活着的时候根本看不到的地图。\n\n就在我们这场仗打得最凶的那些年（大约 1810 到 1826），地球的另一端，有一个古老得多的帝国，叫清。它正从一个所谓的盛世，慢慢往下滑：内部刚平掉一场大乱（白莲教起义），耗空了国库，旧秩序的裂痕才刚开始显露。\n\n那个帝国和我们，活在两个完全不同的世界里。我们这片大陆，被外力一抽就碎成一堆小国；它却没有碎，而是靠那套延续千百年的「大一统」结构，硬把整个帝国兜住、不散。\n\n（同一段年代、地球两端的两件事，被摆在一起给你看。我一个底层士兵，当然不可能知道那个遥远帝国的事。）\n\n可你站在我这个位置，会摸到一个跨越大洋的、冰冷的共同点：在那个帝国里，金字塔最底下的普通百姓，也一样说不上话、被挡在「谁能当家」的门外，只是挡的方式和我们这套 casta 不一样。\n\n两片大陆，两种旧秩序都在松动，可有一个问题，两边都没解决：金字塔最底下的大多数人，像我这样的人，到底怎样才能被真正算进这个新秩序里？',
        en: 'Let me step back and show you a larger map, a map I could not see at all while I was alive.\n\nIn the very years our war raged hardest (about 1810 to 1826), on the other side of the earth there was a far older empire, called the Qing. It was sliding slowly down from what was called a golden age. Inside, it had just put down a great revolt (the White Lotus uprising) that drained its treasury, and the first cracks in the old order were only beginning to show.\n\nThat empire and we lived in two completely different worlds. Our continent, with one pull from outside, shattered into a cluster of small nations; it did not shatter. Through the "great unity" structure it had carried for many centuries, it held the whole empire together and kept it from coming apart.\n\n(Two things from the same span of years, on two sides of the earth, set side by side for you. A bottom soldier like me could of course never know about that distant empire.)\n\nBut in my seat, you touch a cold thing shared across the ocean: in that empire too, the common people at the base of the pyramid had no say and were shut out of "who gets to rule," only shut out in a way different from our casta.\n\nTwo continents, two old orders both loosening, and one problem neither side solved: the majority at the very base of the pyramid, people like me, how could they ever truly be counted into this new order?',
      },
      deliverGoal: 'N9 zoom-out + §8 中国桥 (本课唯一单点注入) — 退一步看更大地图 + 我们仗打最凶那些年 (约 1810-1826) 地球另一端古老得多帝国清/从盛世慢慢下滑 (白莲教大乱刚平耗空国库/旧秩序裂痕才刚显露,锁回 1810-1826 真实状态不预支近代救亡) + 那帝国和我们两个完全不同世界 (我们被外力一抽就碎成小国/它没碎靠延续千百年大一统结构硬兜住不散,不说成与圣马丁退让并列的主动选择) + anti-fab/cultural 括号 (同代地球两端两件事摆一起/我一个底层士兵不可能知道遥远帝国的事) + 站我这摸到跨大洋冰冷共同点: 那帝国金字塔最底普通百姓也说不上话被挡在谁能当家门外只是方式和 casta 不一样 + 两片大陆两种旧秩序都松动/一个两边没解决的问题: 金字塔最底大多数 (像我这样的人) 怎样真正被算进新秩序',
      engagementHook: '同一段年代，地球另一端有个叫清的古老帝国，它没像我们一样被外力一抽就碎成小国，而是靠「大一统」硬把整个帝国兜住、不散。可两片大陆有一个一样的问题谁都没解决：金字塔最底下的大多数人，像我这样的人，到底怎样才能被真正算进这个新秩序里？',
      expectsRealAnswer: false,
    },
    {
      id: 'lat-casta-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，回头看，有一个真问题，等你来答：我们这些付出最多、得到最少的人，到底该怎么看这场「独立」？两种说法都站得住，你来称。\n\n一种说法：这场独立，对我们底层来说，几乎是一场骗局。我们流血流命，把西班牙人赶走，换来的只是一批新主人——在美洲出生的白人，取代了在西班牙出生的白人。casta 表还在，贡赋还在，我们还在最底层。喊给我们听的「自由平等」，从头到尾就没真打算给我们。一场没解放掉大多数人的革命，凭什么叫解放？\n\n另一种说法：这话不能说得这么死。政治独立是真的——西班牙三百年的殖民统治，是真的结束了，「美洲人治理美洲」这个原则，是真的立起来了。这是一块地基。底层的解放虽然慢、虽然大打折扣，可后来废奴、争平权的路，是踩着这块地基才走得下去的。门没全开，但门，毕竟被推开了一道缝。\n\n这两边，不是「彻底的骗局」对「圆满的解放」。是同一场革命的两面——一场真实的政治独立，和一场对最底层大打折扣、甚至落空的社会解放，同时为真。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题：一场革命，赢了一个国家的独立，却没解放这个国家里大多数的人——站在我这个最底层的位置，你怎么称它？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, looking back, there is a real question waiting for you: we who paid the most and gained the least, how should we see this "independence"? Both views stand. You do the weighing.\n\nOne view: this independence, for us at the bottom, was nearly a swindle. We shed our blood and lives, drove the Spanish out, and got only a new set of masters: whites born in the Americas replacing whites born in Spain. The casta chart remained, the tribute remained, we remained at the very bottom. The "freedom and equality" shouted in our ears was never truly meant for us at all. A revolution that did not free most of its people, by what right is it called liberation?\n\nThe other view: it cannot be put quite so flatly. The political independence was real. Spain\'s 300 years of colonial rule did truly end, and the principle that "Americans govern the Americas" did truly stand up. That is a foundation. The bottom\'s liberation, though slow, though deeply discounted, was something the later roads of abolition and the fight for equal rights could only walk by standing on this foundation. The door did not open fully, but the door was, after all, pushed open a crack.\n\nThese are not "an utter swindle" against "a perfect liberation." They are two faces of the same revolution: a real political independence, and a social liberation deeply discounted, even unfulfilled, for those at the very bottom, both true at once.\n\nThis is a hard problem an AP teacher at a school will have students weigh again and again: a revolution that won a country\'s independence but did not free most of the people in it: standing in my place at the very bottom, how do you weigh it? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 付出最多得到最少的人怎么看这场独立 + 一种说法 (几乎是骗局/流血赶走西班牙换来新主人美洲生白人取代西班牙生白人/casta 表还在贡赋还在还在最底层/喊的自由平等没真打算给我们/没解放大多数凭什么叫解放) + 另一种说法 (不能说太死/政治独立是真的西班牙三百年殖民真结束「美洲人治理美洲」真立起来是地基/底层解放虽慢虽打折扣但后来废奴争平权踩这地基才走得下去/门没全开但推开一道缝) + 同一场革命两面 (真实政治独立 + 对最底层大打折扣甚至落空的社会解放同时为真) + neutral school name (AP 老师) + 想 30 秒两边都站得住。Rule 0 双面同体禁单极',
      engagementHook: '站在我这个最底层的位置：这场独立，是一场没解放掉大多数人的骗局，还是一块虽然门没全开、但毕竟推开一道缝的地基？我流了血，却没翻身。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'lat-casta-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个没名字的底层士兵，一句不属于我的「自由平等」，一场我替别人流血打赢、自己却没翻身的独立，你会怎么评价这样一段历史？\n\n它是一次真实的、彻底的政治独立——西班牙三百年的统治，是被我们这些人，用血赶走的。它也是一场把我留在原地的革命——仗打完，掌权的换了人，我脚下的 casta 表，原封不动。这两件事，是同一场革命。你怎么称？\n\n不过先记住：你这一遍，听的只是 casta 最底层、那个没名字的士兵。\n\n那个在 Caracas 出生、把权力从西班牙人手里夺过来、临终却说「在大海里耕田」的 Bolívar，会把这场革命讲成另一个样子——在他眼里，这是一场伟大却未竟的解放。那个交出兵权、远走他乡的 San Martín，又会看见另一回事。我口中这场「只换了主人」的独立，在他们嘴里，会是完全不同的故事。\n\n你还没听到他们的声音。换个视角再走一遍，你刚才下的判断，还站得住吗？\n\n最后，再想一步：今天你身边，有没有一个「写给所有人」的承诺——一句口号、一条规则、一项权利——可一旦落到某些人头上，就悄悄不算数了？那时候，你会像欢呼的人群一样，假装没看见站在最后面的那个人；还是会想起我，问一句：这一回，到底是谁，被留在了原地？',
        en: 'Having walked my whole life (a nameless bottom soldier, a "freedom and equality" that was never mine, an independence I bled to win for others while not rising myself), how would you judge a history like this?\n\nIt was a real, complete political independence. Spain\'s 300 years of rule were driven out by people like us, with our blood. It was also a revolution that left me where I was. When the war ended, the people in power changed, and the casta chart beneath my feet stood untouched. These two things are the same revolution. How do you weigh it?\n\nBut first, remember: this pass, you heard only the nameless soldier at the very bottom of the casta.\n\nThe Bolivar born in Caracas, who wrested power from the Spanish and yet near death said he had "plowed the sea," would tell this revolution as something else: in his eyes, a great but unfinished liberation. The San Martin who handed over his command and went far away would see another thing again. This "only changed masters" independence of mine would, in their mouths, be a completely different story.\n\nYou have not yet heard their voices. Run it again through another lens, and see whether the judgment you just made still holds.\n\nFinally, one more step: in your own life today, is there a promise "written for everyone" (a slogan, a rule, a right) that quietly stops counting once it lands on certain people? When that happens, will you, like the cheering crowd, pretend not to see the one standing at the very back? Or will you think of me, and ask: this time, who exactly was left where they were?',
      },
      deliverGoal: 'N11 close/meta — 评价这段历史 (没名字底层士兵/不属我的自由平等/替别人流血打赢自己没翻身的独立 → 真实彻底政治独立 (西班牙三百年统治被我们用血赶走) vs 把我留在原地的革命 (掌权换人 casta 表原封不动)/同一场革命怎么称) + 你只听到 casta 最底没名字士兵 + 还没听到: Bolívar (Caracas 出生夺权临终在大海里耕田/会讲成伟大却未竟的解放) + San Martín (交兵权远走/看见另一回事) 我口中只换主人的独立在他们嘴里完全不同故事会挑战 + 换视角再走判断站不站得住 + transfer「今天身边写给所有人的承诺 (口号/规则/权利) 落到某些人头上悄悄不算数/你会像欢呼人群假装没看见最后面的人还是想起我问这一回谁被留在原地」',
      engagementHook: '你这一遍，只听到了 casta 最底层那个没名字的士兵。那个临终说「在大海里耕田」的 Bolívar，那个交出兵权远走他乡的 San Martín，会把这场独立讲成完全不同的故事——你还没听到他们的声音。换个视角再走一遍，你刚才的判断还站得住吗？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'bolivar-actor':              bolivarLens,
  'sanmartin-mediator':         sanmartinLens,
  'casta-bottom-receiving-end': castaBottomLens,
};

// receiving-end 优先 (底层受影响者 = AP DBQ「谁领导 vs 谁受益」必考角度;
// prior-loaded「英雄解放史诗」需被默认视角挑战; 无名底层士兵本身是 load-bearing pedagogy)
export var defaultLens = 'casta-bottom-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'latin-american-independence-1810',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'bolivar-actor': 30, 'sanmartin-mediator': 30, 'casta-bottom-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: Andes 安第斯山脉 (Bolívar 看作通往统一大国的路 / San Martín 看作警告 / casta 底层看作世代走不出的墙; 三视角各触一次不点破)',
    'defaultLens: casta-bottom-receiving-end — 底层受影响者优先 (谁领导 vs 谁受益, AP DBQ 必考) + 挑战 prior-loaded 英雄解放史诗 + 无名底层士兵',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'Rule 0 高敏感: criollo 主导 + 底层秩序延续, 全程双面同体, 禁单极化美化 (伟大全民解放) 或贬低 (纯精英内斗/骗局); 三个 N10 均双面并列',
    '§8 中国桥单点注入 casta-n9 (zoom-out 节点,每 lens 至多一次; 拉美外力崩塌→碎裂 vs 清靠延续千百年大一统结构兜住不散; 锁回 1810-1826 真实状态: 白莲教刚平耗空国库/旧秩序裂痕初显,不预支 1840 后近代救亡话语; 两种旧秩序松动应对无高低; 不把清「没碎」说成与圣马丁退让并列的主动选择; cultural ban 唯一例外段。维护者注意: 绝不要再往 sanmartin-n10 或 casta-n10 注入中国段)',
    'anti-fab: Bolívar「在大海里耕田」名言用流传措辞不当档案原话; Guayaquil 会面内容显式标无完整档案众说纷纭; casta 底层为合成桥接人物 (无名/复合身份, narrative §3 已透明标注) 用括号短句标 (史料无确切名字面孔/翻山心境史料不记)',
    'cross-Topic 锚: 接大西洋革命链 (美 1776 → 法 1789 → 海地 1791 → 拉美 1810-1826, bolivar N8); 海地 vs 拉美解放深度对照口径接已上线 haitian-revolution-1791',
    '4-agent review 已吃 (Dr. Park / 赵老师 / ESL Maria): P0 全修 — sanmartin-n10 抽出 §8 中国桥 (560→432 字,全节点 ≤521); EN 正文 em-dash 全清 (43 处→0,含 lens.description); §8 单点收口 casta-n9 + meta 改写防误导。P1 已吃 — San Martín「大半辈子在西」→「前半生几乎都在西」(史实); bolivar-n8 海地 1791 标「革命爆发」+ 补 Carabobo 1821 战役链 (Boyacá→Carabobo→Ayacucho); casta-n9 删「自强救亡/近代救亡」(1810-26 时代错置) 锁回白莲教余波真实状态 + 「新天下」→「新秩序」+ 不把清「没碎」说成主动选择 + 收敛到底层共同处境; anti-fab 去 product term (lens/这一课) sanmartin-n6/n7; default lens 补 Sucre/Ayacucho gloss (casta-n5/n7)。expectsRealAnswer 仍仅 N10+N11 (按 SOP personal-peak 不收答,刻意设计未改)。',
  ],
};
