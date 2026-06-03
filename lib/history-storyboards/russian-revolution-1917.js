// ─────────────────────────────────────────────────────────────────
// 俄国革命 1917 — Russian Revolution · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (第7条): 俄国术语保留 (沙皇 Tsar/苏维埃 Soviet/布尔什维克/Duma), 绝不 Sinicize。
// 历法: New Style (公历) 为主, Old Style (儒略历) 括号标注, 严防混淆。
// 3 lens / 11 节点 / Rule 0: 解放的希望 ↔ 威权的种子 同体, 不替学生下结论。
// 跨 lens micro-detail: 面包 (排队的女工/承诺面包的组织者/给不出面包的 Kerensky)。
// §9 桥: 十月革命 → 五四 1919 → 中共 1921 (描述影响 ≠ 认可结果)。
// ─────────────────────────────────────────────────────────────────

export var bolshevikOrganizerLens = {
  id: 'bolshevik-organizer-actor',
  name: 'The Bolshevik Organizer',
  nameCn: '布尔什维克组织者',
  role: 'perpetrator-actor',
  perspectiveTag: 'red-guard-organizer',
  icon: '🚩',
  description: {
    cn: '彼得格勒一家大工厂里二十出头的年轻男工，识字，几年前偷偷读过布尔什维克的小册子。没有真名，因为他代表的是几千个在工厂里串联工友的人。二月革命后他被选进「工厂委员会」，白天上工，晚上开会、印传单、把步枪发到工友手里。他真心相信自己在解放工人。这一遍让你从一个发动者内部，感受一场革命怎么从一句口号变成一个国家，也让你看见同一双手拧上的第一颗螺丝。',
    en: 'A young male worker in his early twenties at a big Petrograd factory, able to read, who secretly read the Bolshevik pamphlets a few years back. He has no real name, because he stands for the thousands who organized their fellow workers on the factory floor. After the February Revolution he is elected to a factory committee; he works by day and meets, prints leaflets, and puts rifles into workers\' hands by night. He truly believes he is freeing the workers. This pass lets you feel, from inside an actor, how a revolution goes from one slogan to a whole state, and lets you see the first screw the same pair of hands turns tight.',
  },
  storyboard: [
    {
      id: 'rus-bolshevik-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1917 年 11 月 7 日（旧历 10 月 25 日，俄国当时用的旧历比欧洲其他地方晚 13 天）半夜，彼得格勒（Petrograd，就是圣彼得堡）。我站在涅瓦河的一座桥头，手里一支步枪，身上没穿军装——我是个工人，不是兵。\n\n今晚我们要去拿下冬宫（Winter Palace），临时政府就在里面办公。等天一亮，俄国就不再属于沙皇，也不再属于那些穿西装的自由派——它要归苏维埃（Soviet，工人和士兵选出来的代表会议）。\n\n我是个布尔什维克（Bolshevik，列宁领导的激进派）组织者。我不告诉你我的名字，因为我不是一个人，我是几千个在工厂里串联工友的年轻人。\n\n这一遍，你坐进我这个位置。你会从里面感受到，一场革命是怎么从一句口号，变成一个真实的国家——也会看见，同一双手，是怎么拧上那个新国家的第一颗螺丝的。',
        en: 'Midnight, November 7, 1917 (in the old Russian calendar, October 25 — back then Russia used a calendar that ran 13 days behind the rest of Europe), Petrograd (formerly St. Petersburg). I stand at the head of a bridge over the Neva, a rifle in my hands, no uniform on my back. I am a worker, not a soldier.\n\nTonight we go to take the Winter Palace, where the Provisional Government (the liberal-led government after the February Revolution) sits. By dawn, Russia will no longer belong to the Tsar (the Russian monarch), nor to the liberals in their suits. It will belong to the Soviets (the councils of elected worker and soldier deputies).\n\nI am a Bolshevik (the radical party led by Lenin) organizer. I will not tell you my name, because I am not one man. I am thousands of young workers who organized their fellow workers on the factory floor.\n\nThis pass puts you in my seat. You will feel, from the inside, how a revolution goes from one slogan to a real country, and you will also see how the same pair of hands turns the first screw tight on that new state.',
      },
      deliverGoal: 'N1 hook — 1917.11.7(OS 10.25) 半夜彼得格勒涅瓦河桥头 + 工人不是兵 + 今晚拿下冬宫(临时政府所在)权力归苏维埃 + 自我介绍(布尔什维克组织者/不给名字代表几千个串联工友的人) + 这一遍视角(从里面看口号变国家+同一双手拧上第一颗螺丝)',
      engagementHook: '我是把革命真正做出来的那只手——既掀翻旧世界，也拧上新国家的第一颗螺丝。你愿意从一个发动者内部，看这两件事是怎么同时发生的吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-bolshevik-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我每天过的是什么日子，你才懂我为什么想掀翻这一切。\n\n我在彼得格勒一家大工厂干活，每天十几个钟头。工资低，住得挤——一间屋子塞好几家人。这座城是欧洲最后几个专制君主制之一的首都，头顶上坐着沙皇 Nicholas II（尼古拉二世），他几乎大权独揽。\n\n那时一战（第一次世界大战）已经打了快三年。前线吞掉了上千万人，城里的男人大多上了战场。粮食运不进城，我每天看着女工们天不亮去排面包队，在零下的寒风里站几个钟头，常常排到跟前面包卖光了，空着篮子回家。\n\n我跟车间里大多数人不一样：我识字。几年前我偷偷读过布尔什维克的小册子。那上面说的一句话我一直没忘——这一切不是命，是可以被推翻的。\n\n我心里那颗火星，就是这么埋下的。',
        en: 'First, see clearly the days I lived, and you will understand why I wanted to tear it all down.\n\nI worked in a big Petrograd factory, more than ten hours a day. The pay was low, the rooms were crowded, several families packed into one. This city was the capital of one of Europe\'s last absolute monarchies, with the Tsar, Nicholas II, sitting above us, holding almost all the power himself.\n\nBy then the First World War had been grinding on for almost three years. The front had eaten millions, and most of the city\'s men were gone to it. Food could not reach the city. Every day I watched the women workers go to the bread line before dawn, standing for hours in below-zero wind, and often the bread ran out before their turn, so they went home with empty baskets.\n\nI was unlike most on the factory floor: I could read. A few years back I secretly read the Bolshevik pamphlets. One line in them I never forgot, that all of this was not fate, but something that could be overthrown.\n\nThat is how the spark was planted in me.',
      },
      deliverGoal: 'N2 setup — 工人日常(大工厂十几小时/工资低/挤/沙皇 Nicholas II 专制) + 一战快三年(前线吞上千万/男人上战场/面包运不进城/女工排队空篮回家) + 他识字偷读布尔什维克小册子「这一切不是命可以被推翻」+ 火星埋下',
      engagementHook: '我识字，读过那句话——「这一切不是命，是可以被推翻的」。一句写在小册子上的话，能不能真的改变一个人后来做的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-bolshevik-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '你得先懂一个词，才懂这一年到底在争什么：苏维埃（Soviet）。\n\n这个词原意就是「会议」「代表会」。它不是政府，不是议会，是工人和士兵自己选出来管事的代表会。我们厂二月革命后就成立了一个「工厂委员会」——工人自己投票选人，管车间、管发枪、管谁说了算。彼得格勒全城这样的代表凑在一起，就是「彼得格勒苏维埃」。\n\n为什么它重要？因为二月革命之后，俄国出现了一件怪事，叫「双重权力」（dual power）：\n\n一边是临时政府——一群穿西装的自由派、贵族，名义上是政府，签文件、发命令。\n\n另一边是苏维埃——工厂和军队真正听谁的，听它的。它手里没有官印，却握着所有的枪和所有的工人。\n\n两个权力中心并立，谁也吃不下谁。而我，站在苏维埃这一边。我每天在工厂门口拉人、在厂委员会里开会，干的就是把这一边变强的事。',
        en: 'You must first understand one word to understand what this whole year was fighting over: the Soviet.\n\nThe word simply meant a "council." It was not a government, not a parliament. It was a council of deputies that workers and soldiers elected themselves. After the February Revolution, my factory formed a factory committee, workers voting in their own people to run the shop floor, hand out the guns, and decide who was in charge. The deputies of all such bodies across Petrograd, gathered together, were the Petrograd Soviet.\n\nWhy did it matter? Because after the February Revolution, a strange thing appeared in Russia, called dual power.\n\nOn one side was the Provisional Government, a group of liberals and nobles in suits, the government in name, signing papers and giving orders.\n\nOn the other side was the Soviet. The factories and the army actually obeyed the Soviet, not the government. It held no official seal, yet it held every gun and every worker.\n\nTwo centers of power stood side by side, and neither could swallow the other. And I stood on the Soviet\'s side. Every day at the factory gate pulling people in, in the committee meetings, the work I did was to make that side stronger.',
      },
      deliverGoal: 'N3 setup — 解释苏维埃 Soviet(原意会议/代表会/工厂委员会工人自选/彼得格勒苏维埃) + 二月革命后双重权力 dual power(临时政府穿西装自由派签文件 vs 苏维埃没官印却握所有枪和工人) + 他站苏维埃一边干的就是把这边变强',
      engagementHook: '一边有官印没有枪，一边没有官印却握着所有的枪和工人。一个握着印章、一个握着实力——你觉得真正的权力，在谁手里？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-bolshevik-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '革命的第一把火，不是我们点的。\n\n1917 年 3 月 8 日（旧历 2 月 23 日），国际妇女节。那天早上，纺织厂的女工们没有低头干活——她们走出车间，走上街，喊「要面包」。她们来敲我们金属厂的门，喊男工出来。\n\n说实话，她们不是任何党派派出来的。她们里没几个读过革命理论。她们只是受够了：排了几年队，孩子还是饿着睡。\n\n可就是这一声「面包」，几天之内点着了整座城。第二天 20 万人罢工，再一天近 40 万人，全城停摆。沙皇下令军队开枪，可首都的士兵不肯朝同胞开枪，反而倒戈，把军火库打开。\n\n3 月 15 日（旧历 3 月 2 日），尼古拉二世在一节火车车厢里签字退位。统治了 300 年的罗曼诺夫王朝，就这么结束了。\n\n你看清这一步了吗：点火的不是我们这些读过书、会喊口号的人，是一群只想要一块面包的女工。我们这些「职业革命者」，是后来才赶上来的。',
        en: 'The first fire of the revolution was not lit by us.\n\nMarch 8, 1917 (Old Style February 23), International Women\'s Day. That morning, the women in the textile factory did not bow their heads and work. They walked out, into the streets, shouting "Bread!" They came and banged on the doors of our metal factory and called the men out.\n\nHonestly, no party sent them. Few of them had read any revolutionary theory. They had simply had enough: years in the line, and the children still went to sleep hungry.\n\nBut that one cry of "Bread!" lit the whole city within days. The next day 200,000 were on strike; the day after, nearly 400,000, the whole city at a standstill. The Tsar ordered the troops to fire, but the capital\'s soldiers would not shoot their own people. They went over instead, and opened the armories.\n\nOn March 15 (Old Style March 2), Nicholas II signed away his throne in a train car. The Romanov dynasty, which had ruled for 300 years, ended just like that.\n\nDo you see this step clearly? The fire was lit not by us, the ones who had read books and could shout slogans, but by women who only wanted a loaf of bread. We "professional revolutionaries" only caught up afterward.',
      },
      deliverGoal: 'N4 story — 二月革命起点 1917.3.8(OS 2.23)妇女节纺织女工走出喊「要面包」(非党派/没读理论/受够了) + 几天点着全城(20 万→40 万罢工/士兵不肯开枪倒戈开军火库) + 1917.3.15(OS 3.2)尼古拉二世火车上退位罗曼诺夫 300 年结束 + 他承认: 点火的是女工不是职业革命者(我们后来才赶上)',
      engagementHook: '点燃这一切的，是一群只想要一块面包的女工，不是我们这些会喊口号的人。一场改变世界的大事，竟然从「孩子没饭吃」开始——你信吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-bolshevik-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n沙皇没了，可日子没变好。临时政府接了手，却做了一件让所有人寒心的事：它坚持继续打这场一战。前线士兵想停战，城里人想要面包，农民想要土地——临时政府一样都给不了。\n\n1917 年 4 月 16 日（旧历 4 月 3 日），列宁（Lenin）流亡多年后回到彼得格勒。他一下车就抛出《四月提纲》，把所有人心里的话浓缩成三个词：和平、土地、面包（Peace, Land, Bread）。再加一句：一切权力归苏维埃。\n\n那一刻，你第一次觉得有人把你心里的话喊出来了。\n\n你跑回工厂，跟工友说：临时政府那边，给不了你排了三年还排不到的那块面包。能给的只有我们这一边。\n\n这就是你手里最锋利的东西——不是枪，是那块面包。你承诺的，正是那个女工天不亮去排、却常常空篮回家的东西。\n\n但你心里得清楚：一个还没上台的人，承诺得起一切。等你真上了台，你给得起吗？',
        en: 'Now you are me.\n\nThe Tsar was gone, but the days did not get better. The Provisional Government took over, and did the one thing that chilled everyone: it insisted on staying in the First World War. Front-line soldiers wanted the war to stop; city people wanted bread; peasants wanted land. The Provisional Government could give none of it.\n\nApril 16, 1917 (Old Style April 3), Lenin returned to Petrograd after years in exile. The moment he stepped off the train he issued the April Theses, boiling down what was in everyone\'s heart to three words: Peace, Land, Bread. And one more line: All Power to the Soviets.\n\nIn that moment, for the first time, you felt someone had shouted your own thoughts out loud.\n\nYou ran back to the factory and told your fellow workers: the Provisional Government cannot give you the loaf you have lined up three years for and still not reached. Only our side can.\n\nThis is the sharpest thing in your hands, not the rifle, but that loaf of bread. What you promise is exactly the thing the woman lines up for before dawn and so often carries home as an empty basket.\n\nBut you must be clear in your heart: a man not yet in power can promise anything. When you truly take power, can you deliver it?',
      },
      deliverGoal: 'N5 ANCHOR cross-lens「你就是 TA」peak — 沙皇没了但临时政府坚持打一战(给不了停战/面包/土地) + 1917.4.16(OS 4.3)列宁回国《四月提纲》「和平土地面包」+「一切权力归苏维埃」+ 他第一次觉得有人说出心里话 + 跨视角 anchor「面包」从他角度: 他承诺女工排队排不到的那块面包临时政府给不了 + 自我拷问: 没上台时承诺得起一切上台后给得起吗',
      engagementHook: '我手里最锋利的不是枪，是那块面包——我承诺给那个女工排了三年还排不到的东西。可一个还没上台的人承诺得起一切，等真上了台，他给得起吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-bolshevik-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '从 4 月到秋天，这条路一点都不直。\n\n7 月，彼得格勒的工人和士兵自己冲上街武装示威，临时政府镇压，把账全算在我们布尔什维克头上。列宁逃亡，党看起来要完了。那阵子我连传单都不太敢印——上街会被抓。\n\n可转机来得很意外。9 月，一个叫 Kornilov（科尔尼洛夫）的将军带兵想进京夺权。临时政府的首脑 Kerensky（克伦斯基）一个人挡不住，慌了，反过来求我们布尔什维克帮忙挡。\n\n我们出手了。我们把工友重新武装起来——这就是红卫队（Red Guard），工厂工人自己的武装。我们挡住了 Kornilov。\n\n你品一下这件事有多妙：七月还灰头土脸、被当成捣乱分子的我们，一夜之间又成了「保卫革命的人」。声望暴涨。\n\n枪，重新回到了工人手里。而这一次，没人再能轻易把它收走了。',
        en: 'From April to autumn, the road was anything but straight.\n\nIn July, Petrograd\'s workers and soldiers took up arms and marched on their own. The Provisional Government cracked down and pinned the whole thing on us Bolsheviks. Lenin fled, and the party looked finished. In those weeks I hardly dared print a leaflet, going into the street meant arrest.\n\nBut the turn came from an unexpected place. In September, a general named Kornilov marched on the capital to seize power. Kerensky, the head of the Provisional Government, could not stop him alone, panicked, and turned around to beg us Bolsheviks to help hold him off.\n\nWe stepped in. We armed the workers again, and this was the Red Guard, the factory workers\' own militia. We stopped Kornilov.\n\nTaste how strange this was: we, who in July had been humbled and treated as troublemakers, overnight became "the defenders of the revolution." Our standing shot up.\n\nThe guns were back in the workers\' hands. And this time, no one could easily take them away again.',
      },
      deliverGoal: 'N6 story — 4 月到秋天不直: 七月事件工人士兵上街临时政府镇压把账算布尔什维克头上列宁逃亡党看起来要完 + 9 月 Kornilov 将军兵变 Kerensky 一人挡不住反求布尔什维克帮挡 + 布尔什维克武装工人=红卫队 Red Guard 挡住 Kornilov + 七月灰头土脸一夜成保卫革命的人声望暴涨 + 枪回工人手里没人能轻易收走',
      engagementHook: '七月我们还是被抓的捣乱分子，九月一挡住那个将军，一夜之间就成了「保卫革命的人」。同一群人，处境怎么会翻得这么快？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-bolshevik-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1917 年 11 月 7 日（旧历 10 月 25 日）那一夜，是我们动手的夜。\n\n你大概在课本里见过那张画：成千上万红卫队浴血强攻冬宫，英雄一样冲进去。\n\n我得诚实告诉你：那张画基本是假的。\n\n真实那一夜，几乎没打仗。临时政府守卫很薄，大半早就散了。我们这些红卫队，从侧门走进去——走，不是冲。我们占了桥、占了电报局、占了车站，最后走进冬宫，抓了里面还没跑掉的临时政府成员。整夜伤亡极少。\n\n那个「英雄强攻」的画面，主要来自一部 1928 年的电影《十月》。拍电影时找了上千人重演——重演里受的伤，比真事件那一夜还多。\n\n（我没写下那夜我心里在想什么，史料也没逐字记。但坐在我这个位置，你大概能猜到：又轻松，又害怕。轻松，是因为一座统治了几百年的宫殿，竟这么安静地空了。害怕，也正是因为这个——夺权太容易了，容易得让人心里发慌。）',
        en: 'That night, November 7, 1917 (Old Style October 25), was the night we struck.\n\nYou have probably seen the picture in a textbook: thousands of Red Guards in a bloody, heroic storming of the Winter Palace, charging in like heroes.\n\nI have to be honest with you: that picture is mostly false.\n\nThe real night had almost no fighting. The Provisional Government\'s guard was thin, and most of it had already drifted off. We Red Guards walked in through a side gate, walked, not charged. We took the bridges, the telegraph office, the stations, and at last walked into the Winter Palace and arrested the Provisional Government men who had not yet fled. Casualties through the whole night were tiny.\n\nThat "heroic assault" image comes mainly from a 1928 film, October. They gathered a thousand people to re-enact it, and more were hurt in the re-enactment than on the night of the real event.\n\n(I did not write down what was in my mind that night, and the record does not catch it word for word. But sitting in my seat, you can probably guess: both relief and fear. Relief, that a palace that had ruled for centuries went so quietly empty. Fear, for that very reason, that seizing power was so easy it made the heart uneasy.)',
      },
      deliverGoal: 'N7 story (climax + myth-bust) — 1917.11.7(OS 10.25)动手夜 + 课本那张「成千上万红卫队浴血强攻冬宫」基本是假 + 真实几乎没打仗(守卫薄大半散了/红卫队侧门走进去不是冲/占桥电报局车站/抓没跑掉的临时政府成员/伤亡极少) + 英雄画面来自 1928 电影《十月》(上千人重演受伤比真事件多) + anti-fab 括号(没写下心里/史料不逐字记/坐这位置可猜): 又轻松又害怕(夺权太容易心里发慌)',
      engagementHook: '课本里那张「浴血强攻冬宫」的画，几乎是假的——真那一夜我们是走进去的，几乎没打仗。一个被神话成「英雄强攻」的名场面，为什么后来非要被画得那么壮烈？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-bolshevik-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我做的这件事，影响远远超出了俄国，甚至飘过了大半个地球，落到了中国。\n\n1917 年的中国，正处在军阀混战的年代。清朝 1912 年已经覆灭（辛亥革命），中华民国建立了，可很快就分裂——旧秩序塌了，新秩序还没立起来。\n\n就在这样一个迷茫的中国，我们这场十月革命，像一道光，照了进去。\n\n1919 年，五四运动爆发。一批中国知识分子开始真正转向马克思主义——把他们推过去的，正是我们 1917 年这场革命：一个被压迫者「翻身」的现实样板，第一次摆在他们眼前。两年后，1921 年，中国共产党成立了。后来中国流传一句话：「十月革命一声炮响，给中国送来了马克思主义。」讲的就是这条线。\n\n（说清楚一件事：这条影响链是真的、能查证的——它确实深深改变了 20 世纪中国的走向。但「描述这个影响」不等于「替这场革命最后变成的样子背书」。一件事影响有多大，和它最后是好是坏，是两个问题。）\n\n这一刻，我心里只有滚烫的骄傲。我那时还不知道，几个月后等着这场革命的，是什么。',
        en: 'What I did reached far beyond Russia. It even drifted across half the world, and landed in China.\n\nIn 1917, China was in its warlord era. The Qing dynasty had already fallen in 1912 (the Xinhai Revolution), and the Republic of China was founded, but it soon broke apart. The old order had collapsed, and a new one had not yet formed.\n\nInto this confused, broken China, our October Revolution struck like a beam of light.\n\nIn 1919, the May Fourth Movement broke out. A layer of Chinese intellectuals began turning seriously toward Marxism, and what pushed them there was exactly our revolution of 1917: a real, working model of the oppressed "rising up," set before their eyes for the first time. Two years later, in 1921, the Chinese Communist Party was founded. A line later spread in China: "the salvos of the October Revolution brought us Marxism." That is the chain it describes.\n\n(One thing to be clear about: this chain of influence is real and can be verified, it genuinely and deeply changed the path of 20th-century China. But "describing this influence" is not "endorsing what the revolution finally became." How large a thing\'s influence is, and whether it ended well or badly, are two separate questions.)\n\nIn this moment, I felt only a burning pride. I did not yet know what was waiting for this revolution a few months on.',
      },
      deliverGoal: 'N8 zoom-out + China bridge (§8) — 影响飘过大半地球落到中国 + 1917 中国军阀混战(清朝 1912 辛亥覆灭/民国建立旋即分裂/旧塌新未立) + 十月革命像光打进 + 1919 五四运动知识分子转向马克思主义(被十月革命推过去/被压迫者翻身现实样板) + 1921 中共成立 +「十月革命一声炮响送来马克思主义」+ Rule 0 括号(影响链真且可查证但描述影响≠认可最后变成的样子/影响多大和好坏是两个问题) + 他此刻滚烫骄傲不知几个月后等着什么',
      engagementHook: '我在俄国做的事，几年后竟成了另一个国家历史的一个源头。一件发生在一个地方的事，怎么会变成另一个国家「自己历史」的起点？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-bolshevik-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '夺权那一夜过去，骄傲很快撞上了现实。\n\n第一件事，就把我们自己绊住了。十月夺权后，还是按原计划选了制宪会议（Constituent Assembly）——全俄国第一次、也是唯一一次自由选出的全国议会。结果你猜怎么着？我们布尔什维克只拿了约四分之一的票，社会革命党拿了多数。\n\n1918 年 1 月，制宪会议开了一天（大约 13 个小时），就被我们控制的力量强行解散了。\n\n你停一下，想想这件事的分量。我们的逻辑是：苏维埃（工兵代表）比一人一票的议会更能代表「真正的人民」，所以解散它是对的。可是……同样一句「为了人民」，几个月前我们用它推翻沙皇、打开自由；现在我们用它，关掉了一个选出来的议会。\n\n再后来，为了兑现「和平」，我们跟德国签了屈辱的和约退出一战；可退出外战，换来的是一场打了四年、死了几百万人的内战——红军对白军。\n\n喊着「和平」的革命，第二年就掉进了更血的仗。我承诺的那块面包，很多人还是没吃上。',
        en: 'After the night of the seizure, the pride soon ran into reality.\n\nThe first thing tripped us on our own feet. Even after the October seizure, the planned election for the Constituent Assembly went ahead, Russia\'s first and only freely elected national assembly. And guess what? We Bolsheviks won only about a quarter of the vote; the Socialist Revolutionaries won a majority.\n\nIn January 1918, the Constituent Assembly met for one day, about 13 hours, and was forced shut by the forces we controlled.\n\nStop a moment and weigh this. Our logic was: the Soviets (the worker-and-soldier councils) represented "the real people" better than a one-person-one-vote parliament, so dissolving it was right. But the same phrase, "for the people," that we used a few months earlier to overthrow the Tsar and open freedom, we now used to close down an elected assembly.\n\nLater, to deliver "Peace," we signed a humiliating treaty with Germany and left the First World War. But leaving the foreign war bought a civil war that ran four years and killed millions, the Red Army against the White.\n\nA revolution that shouted "Peace" fell within a year into a bloodier war. The loaf of bread I had promised, many still did not get.',
      },
      deliverGoal: 'N9 story (consequence/Rule 0 turn) — 骄傲撞现实 + 制宪会议 Constituent Assembly 唯一自由选出全国议会布尔什维克只约 1/4 票社会革命党多数 + 1918.1 开一天约 13 小时被强行解散 + 他自省: 逻辑(苏维埃比议会更代表真正人民)但同一句「为了人民」几月前打开自由现在关掉选出来的议会 + 为兑现和平签屈辱和约退一战换来四年死几百万内战(红军 vs 白军) + 喊和平的革命掉进更血的仗承诺的面包很多人没吃上',
      engagementHook: '同一句「为了人民」，几个月前我用它打开自由、推翻沙皇，现在我用它关掉一个选出来的议会。一句话怎么能同时干这两件相反的事？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-bolshevik-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，该怎么评我？两种说法都站得住，你来称。\n\n一种说法：我是真正解放工人的那只手。我亲手把一个统治了 300 年的王朝、一套让女工排不到面包的旧秩序掀翻了。我不是坐在桌后空谈的理论家，是在工厂门口拉人、把枪发到工友手里、真的把革命做出来的人。几百万像我这样的普通工人，第一次自己当了历史的发动方。这难道不是解放？\n\n另一种说法：我也是给一个会吞掉异见的新国家，拧上第一颗螺丝的人。我帮着关掉了那个自由选出来的制宪会议——用「为了人民」的名义。我那份「我们才代表真正的人民、所以可以替人民做决定」的笃定，正是后来一党专政的种子。我承诺的和平，换来了内战；我承诺的面包，很多人到死没吃上。\n\n这两边不是「功劳加污点」。是同一份笃定的两只手——那个让我敢去解放别人的确信，和那个让我敢去替别人关掉议会的确信，是同一个。\n\n这是一所学校里 AP 老师会反复让学生掂量的难题。你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, how should I be judged? Both views stand. You do the weighing.\n\nOne view: I was the hand that truly freed the workers. With my own hands I tore down a dynasty that had ruled for 300 years, and an old order that left women unable to reach a loaf of bread. I was no theorist talking from behind a desk. I was the one at the factory gate pulling people in, putting rifles in workers\' hands, the one who actually made the revolution. Millions of ordinary workers like me became, for the first time, the ones who started history. Is that not liberation?\n\nThe other view: I was also the one who turned the first screw on a new state that would swallow dissent. I helped shut down the freely elected Constituent Assembly, in the name of "the people." My certainty that "we alone represent the real people, so we may decide for them" was exactly the seed of the one-party rule that came after. The peace I promised bought a civil war; the bread I promised, many never got to eat.\n\nThese are not "credit and stain." They are two hands of the same certainty. The conviction that let me dare to free others, and the conviction that let me dare to shut a parliament for others, are one and the same.\n\nThis is the hard problem an AP teacher at a school will have students weigh again and again. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法(真正解放工人的手/掀翻 300 年王朝和旧秩序/不是空谈理论家是真做出来的人/几百万普通工人第一次当发动方=解放) / 另一种说法(给吞异见新国家拧上第一颗螺丝/帮关制宪会议用「为了人民」名义/「我们才代表真正人民可替人民决定」的笃定=一党专政种子/承诺和平换内战面包没吃上) / 同一份笃定两只手(敢解放别人和敢替别人关议会是同一个确信) / neutral school name(AP 老师) / 想 30 秒 / 两边都站得住',
      engagementHook: '真正解放工人的手，和给极权国家拧上第一颗螺丝的手——是同一双手，同一份笃定。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'rus-bolshevik-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是把革命真正做出来的那只手的声音。\n\n请记住：这只是一边。我讲的「我在解放工人」「我们才代表真正的人民」，听起来甚至热血、有道理——这正是发动者视角最该当心的地方，它能把自己讲得理直气壮，连关掉议会都讲得通。\n\n但这一遍里，有两个人会狠狠地挑战你刚才听我说的每一句。一个是那个点着第一把火的纺织女工——她要的，从头到尾只是一块面包。我喊的那些大词，到底有没有真的换来她孩子碗里的饭？还有 Kerensky（克伦斯基），那个夹在中间、想要一个「有自由、没沙皇、也没有一党专政」的俄国、最后两头不讨好、输掉一切的人——他会怎么讲我口中这场「胜利」？等你换上他们的视角，去听。\n\n最后，留一个东西给你。还记得我说过，我手里最锋利的不是枪，是那块面包吗？\n\n换一个视角再走一遍，你会从那个排队的女人那里，再看见那块面包一次。到那时，你再回头掂量我这一晚做的事，可能就不一样了。',
        en: 'What you just heard was the voice of the hand that actually made the revolution.\n\nRemember: it is only one side. My talk of "I am freeing the workers," of "we alone represent the real people," can even sound stirring and reasonable, and that is exactly the thing to watch most in an actor\'s view. It can make itself sound fully justified, justified even in shutting down a parliament.\n\nBut in this pass, two people will challenge, hard, every sentence you just heard from me. One is the textile woman who lit the very first fire, what she wanted, from beginning to end, was just a loaf of bread. Did the big words I shouted ever truly put food in her child\'s bowl? And Kerensky, the man caught in the middle, who wanted a Russia with freedom, no Tsar, and no one-party rule, and who, hated by both sides, lost everything, how would he tell this "victory" I have described? When you switch to their views, go and listen.\n\nAnd one last thing to leave with you. Do you remember I said the sharpest thing in my hands was not the rifle, but that loaf of bread?\n\nWalk this through once more from another view, and you will see that loaf again, through the woman in the line. By then, when you turn back to weigh what I did that one night, it may look different.',
      },
      deliverGoal: 'N11 close/meta — 你听的是把革命做出来那只手一边(能把自己讲得理直气壮连关议会都讲得通=最该当心) + 还没听到: 纺织女工(从头只要一块面包/大词有没有换来她孩子碗里的饭) + Kerensky(夹中间要有自由没沙皇没一党专政的俄国两头不讨好输掉一切/会怎么讲这场胜利)会挑战你听的每句 + 暗示「面包」会从排队女人那再看见一次(不直接解释 echo) + 回头掂量会不一样',
      engagementHook: '发动者最该当心的地方，是他能把自己讲得理直气壮——连关掉议会都讲得通。你听完我这一边，最想去问那个排队的女工、那个输掉一切的克伦斯基什么问题？',
      expectsRealAnswer: true,
    },
  ],
};

export var kerenskyLens = {
  id: 'kerensky-mediator',
  name: 'Alexander Kerensky',
  nameCn: '克伦斯基',
  role: 'lonely-mediator',
  perspectiveTag: 'provisional-govt-in-the-middle',
  icon: '🎩',
  description: {
    cn: '真实历史人物，1881 年生，律师出身，口才好，是个温和的社会主义者。二月革命推翻沙皇后，他成了那个少见的人物，同时在两个对立的权力机构里有位子，看起来像能把两边粘住的桥。1917 年夏天他当上临时政府首脑，左边是要他停战的工人和士兵，右边是嫌他太软的将军，他站在正中间，谁也不完全是他的人。这一遍让你坐进那个不可能的中间位置，看一个想给俄国一条「有自由、没沙皇、也没有一党专政」的中间道路的人，怎么一步步把所有人都得罪光、最后输掉一切。',
    en: 'A real historical person, born 1881, a lawyer by training, a powerful speaker, and a moderate socialist. After the February Revolution toppled the Tsar (the Russian monarch), he became a rare figure who held a seat in two rival power centers at once, and looked like the glue that could hold both sides together. In the summer of 1917 he became head of the Provisional Government (the liberal-led government that ran Russia after the Tsar fell). On his left were workers and soldiers demanding peace; on his right were generals who thought him too soft. He stood dead in the middle, fully trusted by no one. This pass puts you in that impossible middle seat, watching a man who wanted a road down the middle for Russia, freedom, no Tsar, and no one-party rule, talk and bargain his way into angering everyone and losing it all.',
  },
  storyboard: [
    {
      id: 'rus-kerensky-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '所有人都在往两边跑的时候，有一个人站在正中间，两边都拉着他，两边都恨他。\n\n那个人是我，Alexander Kerensky（克伦斯基）。1917 年那个夏天，我管着整个俄国，头衔是临时政府（Provisional Government，沙皇倒台后那个临时管事的政府）的首脑。\n\n我的左边，是几百万要我停战、要面包的工人和士兵。我的右边，是嫌我太软、想把老规矩搬回来的将军。\n\n我想给俄国一条没人走过的路：有自由、没沙皇，也没有一党说了算。一条正中间的路。\n\n这一遍，你坐进我这个位置。你不属于任何一边，可你又好像欠每一边。你要在所有人都被逼到极端的时候，替一条中间道路，撑住每一天。\n\n剧透一句：我没撑住。这一遍，你来看，它为什么撑不住。',
        en: 'When everyone was running to the two extremes, one man stood dead in the middle, pulled by both sides and hated by both.\n\nThat man was me, Alexander Kerensky. In the summer of 1917 I ran all of Russia. My title was head of the Provisional Government, the temporary government that took charge after the Tsar fell.\n\nOn my left were millions of workers and soldiers demanding I stop the war and give them bread. On my right were generals who thought me too soft and wanted the old rules back.\n\nI wanted to give Russia a road no one had walked: freedom, no Tsar, and no single party in charge. A road down the middle.\n\nThis pass puts you in my seat. You belong to no side, yet you seem to owe every side. While everyone is pushed to the extremes, you must hold a middle road up, one day at a time.\n\nOne spoiler: I did not hold it. This pass, you come and see why it could not hold.',
      },
      deliverGoal: 'N1 hook — 站在正中间两边都恨 + Kerensky 自我介绍 (1917 夏临时政府首脑) + 左边工人士兵要停战要面包/右边将军嫌他软 + 想要的中间道路 (有自由/没沙皇/没一党专政) + 这一遍视角设定 (不属任何一边却欠每一边) + 剧透没撑住',
      engagementHook: '所有人往两边跑，我站在正中间，两边都恨我。在一个大家都在选边的时刻，「站中间」是清醒，还是自找死路？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-kerensky-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是怎么走到那个位置的，你才懂我后来为什么两头不讨好。\n\n我 1881 年生，学的是法律，当律师那些年，我专替穷人、替被沙皇政府关起来的政治犯打官司。我会演讲，一开口能让一屋子人安静下来。我也是个温和的社会主义者，相信俄国能变好，但不该靠流血和独裁去变。\n\n这条路，让我比屋里大多数人都尴尬：在右边那些自由派眼里，我太左了，太替工人说话；在左边那些激进派眼里，我又太温和，太守规矩。\n\n你记住这一点。一个律师、一个会讲话的温和派，在风平浪静的年月，是个理想的桥梁人物。可 1917 年的俄国，不是风平浪静的年月。\n\n它是一座饿着肚子、丈夫死在前线、随时要炸的城。在那样的城里，「温和」这两个字，慢慢会变成一句骂人的话。',
        en: 'First, how I got to that seat, so you understand why I later pleased no side.\n\nI was born in 1881 and trained in law. In my years as a lawyer I defended the poor, and the political prisoners the Tsar\'s government locked up. I could speak; when I opened my mouth I could quiet a whole room. I was a moderate socialist too: I believed Russia could get better, but not through blood and dictatorship.\n\nThat road left me more awkward than most in the room. To the liberals on the right, I was too far left, too much the workers\' voice. To the radicals on the left, I was too moderate, too fond of the rules.\n\nRemember this. A lawyer, a moderate who can speak, is the ideal bridge in calm years. But Russia in 1917 was not calm.\n\nIt was a city going hungry, its husbands dying at the front, ready to blow at any moment. In a city like that, the word "moderate" slowly turns into an insult.',
      },
      deliverGoal: 'N2 setup — Kerensky 出身 (1881 生/律师替穷人和政治犯打官司/会演讲/温和社会主义者) + 尴尬位置 (右边嫌太左/左边嫌太温和) + 「温和派在太平年月是理想桥梁但 1917 不是太平年月」+ 饿着肚子随时炸的城里「温和」变成骂人的话',
      engagementHook: '在平静年月，「会讲话的温和派」是理想的桥梁。可在一座随时要炸的城里，「温和」慢慢变成一句骂人的话。环境，能不能把一个人的优点变成缺点？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-kerensky-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1917 年 3 月，俄国变天了，但不是我们这些政治家变的。\n\n3 月 8 日（旧历 2 月 23 日，俄国当时用的旧历比欧洲其他地方晚 13 天）国际妇女节，彼得格勒（首都）的纺织女工走出工厂，喊「要面包」。几天里，全城几十万人罢工，连首都驻军都不肯朝同胞开枪，反而倒向了起义者。\n\n3 月 15 日（旧历 3 月 2 日），统治了俄国 300 年的沙皇 Nicholas II（尼古拉二世）在一节火车车厢里签字退位。罗曼诺夫王朝，就这么没了。\n\n沙皇一倒，俄国冒出两个互相盯着的权力中心，这就是这门课最关键的词：双重权力（dual power）。\n\n一个是临时政府，自由派、有产者为主，名义上的政府，可它手里没枪、没工厂、没军队的真心。另一个是彼得格勒苏维埃（Soviet，意思是工人和士兵选出来的代表会议），它没正式当政府，可工厂和军队真正听的是它。\n\n而我，是当时全俄国唯一一个，两个机构里都有位子的人。',
        en: 'In March 1917 Russia turned over, but not because of us politicians.\n\nOn March 8 (in the old Russian calendar, February 23 — back then Russia used a calendar that ran 13 days behind the rest of Europe), International Women\'s Day, the textile women of Petrograd (the capital) walked out of their factories shouting "Bread!" Within days, hundreds of thousands across the city were on strike, and even the capital\'s garrison refused to fire on its own people and turned to the rebels instead.\n\nOn March 15 (Old Style March 2), Nicholas II, the Tsar whose family had ruled Russia for 300 years, signed away his throne in a train carriage. The Romanov dynasty was simply gone.\n\nThe moment the Tsar fell, two centers of power rose up watching each other. This is the key term of the whole course: dual power.\n\nOne was the Provisional Government, mostly liberals and men of property, the government in name, but with no guns, no factories, no real loyalty from the army. The other was the Petrograd Soviet (Soviet means a council of elected worker and soldier deputies). It was not officially the government, yet the factories and the army actually listened to it.\n\nAnd I was the one man in all of Russia who held a seat in both.',
      },
      deliverGoal: 'N3 setup — 二月革命 (3.8 旧 2.23 妇女节纺织女工喊面包 + 驻军倒戈 + 3.15 旧 3.2 沙皇 Nicholas II 退位/罗曼诺夫 300 年结束) + dual power 双重权力 (临时政府名义政府没真实力 vs 彼得格勒苏维埃没当政府但工厂军队真听它) + gloss Petrograd/Soviet/dual power + Kerensky 唯一两机构都有位子',
      engagementHook: '沙皇一倒，俄国冒出两个互相盯着的权力中心，谁也吃不下谁。而我是唯一一个两边都有位子的人。一个人脚踏两条对立的船，是优势，还是迟早要掉进缝里？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-kerensky-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你脚踏两条船：临时政府一只脚，彼得格勒苏维埃一只脚。一开始，这是你最大的本钱。两边吵起来，只有你能两边都坐下来说上话。大家叫你「桥」。\n\n可桥是用来踩的。\n\n临时政府想稳住秩序、想守住跟英法的盟约、想继续打仗。苏维埃想要的，正相反：停战、分地、给工人面包。这两套要求，没有一个中间值能同时满足。\n\n而你，得同时对两边点头。你对临时政府说「我们维持秩序」，转身又对苏维埃说「我和你们站在一起」。\n\n一开始你真以为自己能粘住两边。可你慢慢发现一件可怕的事：你不是在「连接」两边，你是在被两边各自往自己那头拽。\n\n这一刻你得想：当两边要的东西根本无法同时满足，一个站中间的人，到底是在调停，还是只是在拖延那场迟早要来的撕裂？',
        en: 'Now you are me.\n\nYou stand with one foot in each boat: one in the Provisional Government, one in the Petrograd Soviet. At first this is your greatest asset. When the two quarrel, only you can sit down and speak with both. People call you the bridge.\n\nBut a bridge is something people walk on.\n\nThe Provisional Government wants order kept, wants to hold the alliance with Britain and France, wants to keep fighting the war. The Soviet wants the opposite: stop the war, split the land, give the workers bread. Between these two sets of demands there is no middle value that satisfies both at once.\n\nAnd you must nod to both. You tell the Provisional Government "we will keep order," then turn and tell the Soviet "I stand with you."\n\nAt first you truly believe you can hold the two together. Then you slowly notice something frightening: you are not "connecting" the two sides. You are being pulled apart by each of them toward its own end.\n\nHere you must think: when the two sides want things that cannot both be true at once, is the man in the middle mediating, or just delaying a tearing-apart that is bound to come?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 脚踏两条船 (临时政府 + 苏维埃) 一开始是本钱被叫「桥」+ 两边要求互斥无中间值 (临时政府要秩序/守盟约/继续打仗 vs 苏维埃要停战/分地/面包) + 对两边都点头 + 发现不是连接是被两边往两头拽 + 站中间是调停还是拖延迟早的撕裂',
      engagementHook: '我以为自己是连接两边的桥，慢慢发现，我只是被两边各自往自己那头拽。当两边要的根本无法同时满足，站中间是在调停，还是在拖延一场迟早的撕裂？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-kerensky-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '7 月，我当上了临时政府的首脑。权力到手了，可我马上做了一生最致命的一个选择。\n\n我决定：继续打一战。\n\n你得理解我当时的算盘。俄国跟英国、法国是盟友，是它们借钱给我们、撑着我们。我怕一旦单方面退出，新生的自由俄国会被当成背叛者，会被孤立、被掐死。我还想用一场胜仗，给这个摇摇晃晃的政府挣回一点威信。\n\n我还是陆军部长时，1917 年 6 月下令发动了一场大攻势。结果是一场惨败。\n\n可前线的士兵，要的根本不是胜仗。他们在战壕里烂了快三年，眼睁睁看着身边的人成片地死，他们只想要一个词：停战，回家。\n\n后方的工人和妇女，要的也只是一个词：面包。\n\n那块面包，我给不了。只要还在打仗，火车就得运炮弹而不是运粮食，城里就还得排那条买不到面包的长队。\n\n我手里攥着「自由」「秩序」「盟约」一大堆大词，可老百姓只想要那一块具体的、热乎的面包。而那块面包，恰恰是我那个继续打仗的决定，亲手从他们手里夺走的。',
        en: 'In July I became head of the Provisional Government. The power was in my hands, and at once I made the most fatal choice of my life.\n\nI decided to keep fighting World War One.\n\nYou must understand my reasoning then. Russia was allied with Britain and France; they lent us money and held us up. I feared that if we pulled out one-sidedly, the newborn free Russia would be branded a traitor, isolated, choked off. I also hoped one victory might win back a little standing for this shaky government.\n\nWhile I was still War Minister, in June 1917 I ordered a great offensive. It was a crushing defeat.\n\nBut the soldiers at the front did not want a victory at all. They had rotted in the trenches for nearly three years, watching the men beside them die in rows. They wanted one word: peace, and home.\n\nThe workers and women in the rear wanted one word too: bread.\n\nThat bread, I could not give. As long as the war went on, the trains had to carry shells, not grain, and the city still had to stand in that long line where no bread could be bought.\n\nIn my hands I clutched big words, "freedom," "order," "the alliance." But ordinary people wanted only that one concrete, warm loaf of bread. And that loaf was exactly what my decision to keep fighting had taken from their hands.',
      },
      deliverGoal: 'N5 story (致命选择 + 跨 lens 面包锚预热) — 7 月当首脑 + 致命选择继续打一战 + 算盘 (盟约/怕被孤立/想用胜仗挣威信) + 1917.6 攻势惨败 + 士兵只要停战回家/工人妇女只要面包 + 「打仗就运炮弹不运粮食」+ 他攥着大词 (自由/秩序/盟约) 但人民只要一块具体的面包 + 那块面包正是他继续打仗夺走的',
      engagementHook: '我手里攥着「自由」「秩序」「盟约」一大堆大词，可老百姓只想要一块热乎的面包。当抽象的「大道理」撞上具体的「肚子饿」，你觉得人民会站哪边？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-kerensky-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我想让你站在我这个位置，听一听那个词，从我耳朵里听是什么。\n\n面包。\n\n排队的女工喊它，是因为她家孩子昨晚饿着睡了。后来那个布尔什维克组织者也用它，把它做成一句口号去许诺人心。可同一个词，落在我耳朵里，是另一种东西，是一笔我永远算不平的账。\n\n（这一段是这个视角让你听见。史料不会逐字记下我深夜在想什么，但坐在我这个位置，你大概能猜到。）\n\n我不是不想给。我比谁都清楚，谁给出那块面包，谁就接住了整个俄国的人心。可那块面包卡在一个死结上：要面包，就得停战；要停战，就得背弃盟友、就得让出半个国家去求和。我赌不起那一步，我怕那一步会让自由俄国当场散架。\n\n于是同一个词，「面包」，在街上是一句愤怒的呐喊，在那个组织者嘴里是一句必胜的许诺，到了我这里，是一道我每天都解不开、又每天都被它逼问的难题。\n\n排队的人、许诺的人、给不了的人,听见的是同一个词,活的却是三个世界。我是那个给不了的人。',
        en: 'I want you to stand where I stand and hear that one word as it sounds in my ears.\n\nBread.\n\nThe women in line shout it because their children went to sleep hungry. Later that Bolshevik organizer used it too, made it into a slogan to promise people\'s hearts. But the same word, falling on my ears, is another thing: a ledger I can never balance.\n\n(This part is the pass letting you hear it. The record does not write down, word for word, what was turning in my mind late at night. But sitting in my seat, you can guess.)\n\nIt was not that I did not want to give it. I knew better than anyone: whoever hands out that bread catches the heart of all Russia. But that loaf was stuck on a deadly knot. To get bread, you must stop the war; to stop the war, you must betray the allies and give up half the country to beg for peace. I could not gamble that step; I feared it would tear the free Russia apart on the spot.\n\nSo the same word, "bread," is a cry of anger in the street, a promise of certain victory in that organizer\'s mouth, and to me, a problem I cannot solve and am questioned by every single day.\n\nThe one who queues, the one who promises, the one who cannot give. They hear the same word and live in three different worlds. I am the one who cannot give it.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (§9-style, 从 Kerensky 角度) — 面包从他耳朵里听 = 一笔算不平的账 + anti-fab 框架 (这个视角让你听见/史料不逐字记心里) + 死结 (要面包就得停战/要停战就得背盟约让半国去求和/他赌不起怕自由俄国散架) + 同一词三种意思 (街上愤怒呐喊/组织者必胜许诺/他这里解不开的难题) + 「排队的人/许诺的人/给不了的人同一词三个世界他是给不了的那个」',
      engagementHook: '同一个词「面包」,排队的人在喊它,许诺的人在用它,而我,是那个给不了的人。同一个词,为什么落在不同的人耳朵里,会活成三个完全不同的世界?',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-kerensky-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '7 月，一场风暴提前来敲门。\n\n7 月 16 到 20 日（旧历 7 月 3 到 7 日），彼得格勒的工人和士兵自己拿起枪上了街，乱成一团，史称「七月事件」（July Days）。这一次不是布尔什维克煽动的,他们其实被这股提前的浪头打了个措手不及。\n\n但我抓住了这个机会。我让临时政府出手镇压，把这场失控的责任，一股脑扣在布尔什维克头上,说是他们想夺权。Lenin（列宁，布尔什维克的头）连夜逃亡。整个布尔什维克党，看起来要完了。\n\n那是我离「赢」最近的一刻。左边那个最危险的对手，被我一把按了下去。\n\n可你要替我想一层更深的：我赢了这一局，靠的不是给了人民面包，是靠武力镇压、靠甩锅。我把一个本来该靠「兑现承诺」赢得的位子，改成了靠「压制对手」守住。\n\n靠镇压守住的位子，地基是空的。一旦下一阵风来，没有面包托着我，我就什么都没有。',
        en: 'In July a storm came knocking early.\n\nFrom July 16 to 20 (Old Style July 3 to 7), the workers and soldiers of Petrograd took up arms and poured into the streets on their own, in chaos. History calls it the July Days. This time it was not stirred up by the Bolsheviks; in fact this early wave caught them off guard.\n\nBut I seized the chance. I had the Provisional Government crack down, and pinned the blame for the whole loss of control on the Bolsheviks, saying they had tried to grab power. Lenin (the head of the Bolsheviks) fled by night. The entire Bolshevik party looked finished.\n\nThat was the closest I ever came to "winning." My most dangerous rival on the left, I pressed down with one hand.\n\nBut think one layer deeper for me: I won this round not by giving the people bread, but by force and by shifting blame. A seat I should have won by keeping my promises, I instead held by crushing my rival.\n\nA seat held by crushing has a hollow foundation. The moment the next wind comes, with no bread holding me up, I have nothing.',
      },
      deliverGoal: 'N7 story — July Days 七月事件 (7.16-20 旧 7.3-7 工人士兵自发上街/布尔什维克被打措手不及非他们煽动) + Kerensky 抓机会镇压甩锅给布尔什维克 (Lenin 逃亡党看似要完) + 离赢最近的一刻 + 深一层: 赢靠镇压甩锅不靠给面包 + 「靠镇压守住的位子地基是空的/下阵风一来没面包托着就什么都没有」',
      engagementHook: '我离「赢」最近的那一刻,靠的不是给人民面包,是镇压对手、甩锅。靠压制对手守住的位子,和靠兑现承诺赢来的位子,哪一个站得更稳?',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-kerensky-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '压住了左边，右边的刀就来了。\n\n9 月（旧历 8 月底），我手下最高的将军 Kornilov（科尔尼洛夫）带兵朝首都开来。一开始,是我请他来的，我想借他的兵，把还在闹的左翼彻底压下去。\n\n可半路上我突然反应过来：他不是来帮我的，他是冲着我的权力来的。他想要的是军事强人统治，要把革命掐死，把我也一起踢开。\n\n这一刻，我被逼到绝路。右边的将军要吃我，我手里又没有一支真正听我的军队。我只剩一条活路，一条我清楚知道是饮鸩止渴的活路:\n\n我去求那群刚被我打趴、被我关进监狱的布尔什维克,请他们出来,帮我挡住 Kornilov。我亲手把武器发给了他们,把他们从牢里放出来,让他们重新武装起来。\n\n他们挡住了 Kornilov。可你看见我干了什么吗？两个月前，我还在镇压他们、说他们是叛徒。两个月后，为了挡右边的刀，我亲手把枪塞回了他们手里。\n\n挡住 Kornilov 的那一刻，街上的人重新把布尔什维克叫做「保卫革命的人」。他们的声望，一夜暴涨。而那批枪,是我给的。',
        en: 'With the left pressed down, the knife came from the right.\n\nIn September (late August, Old Style), my highest general, Kornilov, marched troops toward the capital. At first I had called him in myself, meaning to borrow his soldiers to crush, once and for all, a left that was still stirring.\n\nBut on the way I suddenly saw it: he was not coming to help me. He was coming for my power. He wanted rule by a military strongman, to strangle the revolution and kick me out along with it.\n\nIn that moment I was driven to a dead end. The general on the right would devour me, and I had no army that truly obeyed me. I had one path left, a path I clearly knew was drinking poison to ease thirst:\n\nI went and begged the very Bolsheviks I had just beaten down and jailed, asking them to come out and help me stop Kornilov. With my own hands I handed them weapons, let them out of prison, and let them arm again.\n\nThey stopped Kornilov. But do you see what I did? Two months earlier I was crushing them, calling them traitors. Two months later, to block the knife on my right, I shoved the guns back into their hands myself.\n\nThe moment they stopped Kornilov, the people in the street called the Bolsheviks "the defenders of the revolution" again. Their standing shot up overnight. And those guns were mine to give.',
      },
      deliverGoal: 'N8 story (Kornilov 兵变/自掘坟墓) — 9 月旧 8 月底 Kornilov 带兵朝首都来 + 起初 Kerensky 请他来想压左翼 + 半路察觉他冲权力来要军事强人统治踢开自己 + 绝路 (右边将军要吃他他没听他的军队) + 饮鸩止渴: 求刚被他打趴入狱的布尔什维克出来挡 + 亲手发枪放他们出狱重新武装 + 挡住 Kornilov 但「两个月前镇压他们两个月后亲手把枪塞回他们手里」+ 布尔什维克声望暴涨那批枪是他给的',
      engagementHook: '为了挡住右边那把刀,我亲手把枪发给了两个月前我还在镇压、关进监狱的对手。被逼到绝路时,你会不会也做一个「现在能救命、以后会要命」的选择?',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-kerensky-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '11 月 7 日（旧历 10 月 25 日）那个夜里，账,该还了。\n\n我亲手武装起来的那群人，回过头，对准了我。在 Lenin 和 Trotsky（托洛茨基）指挥下，布尔什维克的红卫队（Red Guard，工厂工人的武装）夜里悄悄占了桥、占了电报局、占了车站，最后走进了冬宫,临时政府所在的地方。\n\n后来电影里把那一夜拍成千军万马浴血强攻。真相要冷清得多：守卫稀稀拉拉，进攻方几乎没怎么打就走了进去。我的政府，不是被轰塌的，是悄无声息地塌掉的。\n\n那一夜我不在冬宫。我提前出城,想去前线调一支忠于我的军队回来救援。可我跑遍了，调不动一支可靠的队伍,没有人愿意为我这个政府再流一滴血。\n\n我没能回来。从那一刻起,我成了一个流亡的人。此后大半生,我在国外漂着,讲我的故事,辩我的选择。1970 年,我死在纽约,离那个我曾经管过的俄国,隔着整整一个地球。\n\n那个想把一个自由的俄国撑住的人,最后,一个人,什么都没撑住。',
        en: 'On the night of November 7 (Old Style October 25), the bill came due.\n\nThe very people I had armed with my own hands turned, and aimed at me. Under Lenin and Trotsky, the Bolshevik Red Guards (the armed factory workers) quietly took the bridges, the telegraph office, and the stations by night, and finally walked into the Winter Palace, the seat of the Provisional Government.\n\nLater films painted that night as a vast bloody storming. The truth was far quieter: the guards were thin, and the attackers walked in with almost no fight. My government was not blasted down. It simply collapsed without a sound.\n\nThat night I was not in the Winter Palace. I had left the city early, hoping to fetch a unit loyal to me from the front to come to the rescue. But I searched everywhere and could move no reliable force. No one was willing to bleed one more drop for my government.\n\nI could not return. From that moment I was a man in exile. For most of the rest of my life I drifted abroad, telling my story, arguing my choices. In 1970 I died in New York, a whole world away from the Russia I had once governed.\n\nThe man who wanted to hold a free Russia together, in the end, stood alone, and held nothing at all.',
      },
      deliverGoal: 'N9 story (climax/十月反噬) — 11.7 旧 10.25 他武装的人回头对准他 + Lenin+Trotsky 指挥红卫队 (gloss Red Guard) 夜里占桥/电报局/车站/走进冬宫 + 神话 vs 真实 (电影浴血强攻 vs 守卫稀疏几乎没打走进去/政府悄无声息塌掉) + Kerensky 不在冬宫出城调兵但调不动没人为他流血 + 流亡大半生/1970 死纽约离俄国隔整个地球 + 「想撑住自由俄国的人最后一个人什么都没撑住」',
      engagementHook: '我亲手武装的那群人,回过头对准了我。一个想撑住自由俄国的人,最后一个人什么都没撑住,死在隔着整个地球的异国。这样的结局,是他自找的,还是时代根本不给中间道路活路?',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-kerensky-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '真问题来了:我那条「有自由、没沙皇、也没有一党专政」的中间道路,同时又硬把那场仗打下去,到底是注定失败的天真,还是被历史碾碎的、俄国最后一次走向民主的真机会?两种说法都站得住。\n\n一种说法:那是注定失败的天真。城里饿着肚子、丈夫死在前线,人民只要停战和面包,我却抱着「盟约」「秩序」这些大词把仗打下去,亲手夺走了那块面包。我赢一局靠镇压,活一关靠武装对手,从没真正兑现过承诺。一个谁都不肯满足、只想把所有人摁在中间的人,在极端的年代本就没立足之地。\n\n另一种说法:那是被历史碾碎的真机会。临时政府是俄国几百年里唯一一次有可能长成自由议会制国家的窗口。我面对的是死局:退出一战可能当场被孤立掐死,继续打又掏空民心,左右两边都不肯给中间留半寸。换任何人坐我这位子,在外有大战、内有饥荒的 1917 年,都未必做得更好。那扇窗不是我没本事关上,是被那个时刻挤碎的。\n\n这两边不是「无能」对「冤枉」。是同一个选择的两张脸:站正中间、想兼顾所有人,在清醒年代是最负责的担当,在极端年代是最致命的幻觉。\n\n有学者(如 Orlando Figes)把这场失败读成一连串可避免的误判;也有更冷的结构派提醒:那样的崩溃和死结里,温和中间派几乎没有出路。两边都没说死。\n\n你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Here is the real question. I wanted a middle road for Russia: freedom, a parliament, no Tsar, and no one-party rule. But I also insisted on fighting the war to the end. Was that a doomed dream? Or Russia\'s last real chance at democracy, crushed by history? Both views stand.\n\nOne view: it was a doomed naivety. In a city going hungry, its husbands dying at the front, the people wanted only peace and bread, and I, of all things, clutched big words like "the alliance" and "order," fought the war on, and took the bread from their hands myself. I won one round only by crushing my rival. I survived the next crisis only by arming my own enemy. I never truly kept a single promise. A mediator who would satisfy no one\'s concrete demand and only wanted to pin everyone in the middle has, in an age pushed to extremes, no ground to stand on at all.\n\nThe other view: it was a real chance crushed by history. The Provisional Government was the one window in centuries of Russia that might have grown into a free parliamentary state. I was trapped. If I pulled out of the war, Russia might be cut off and crushed at once. If I kept fighting, the people lost all hope in me. Neither the left nor the right would give the middle an inch. Put anyone else in my seat, in the 1917 of three-way pulling, a great war outside and famine within, and they might not have done any better. That window of democracy was not one I lacked the skill to close; it was crushed by that particular moment all at once.\n\nThese are not "incompetence" against "wronged." They are two faces of one thing. The same choice to stand dead in the middle and try to hold everyone could be the most responsible burden in a clear-headed age, and the most fatal illusion in an age of extremes.\n\nSome scholars (such as Orlando Figes) read the Provisional Government\'s fall as a chain of avoidable misjudgments; colder structural readers remind us that in that material collapse and three-way knot, a moderate middle had almost no realistic way out. Neither side closes the question.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 中间道路+硬打一战是注定失败的天真还是历史碾碎的最后一次民主真机会 / 一种说法 (注定失败的天真/人民只要停战面包他抱大词夺走面包/赢靠镇压活靠武装对手/从没兑现承诺/极端年代中间派没立足地) / 另一种说法 (被历史碾碎的真机会/临时政府唯一民主窗口/死局退出被掐继续打掏空民心/换谁都未必更好/窗是被那刻挤碎的) / 同一个站中间选择两张脸 (清醒年代担当 vs 极端年代致命幻觉) / ≤2 named scholar (Orlando Figes + 结构派通称) 中立无预判 / 想 30 秒两边都站得住',
      engagementHook: '想撑住一个自由俄国、却硬要把仗打下去——这是注定失败的天真,还是被时代碾碎的最后一次真机会?两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'rus-kerensky-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,你会怎么评价一个站在正中间、想兼顾所有人的人?\n\n我不完全属于任何一边。对将军们,我太软、太纵容造反;对工人和士兵,我是那个还在逼他们打仗、给不了面包的人;对布尔什维克,我先是镇压他们的人,后是被他们用我亲手发的枪推翻的人。我想给俄国一条有自由、又不靠独裁的中间路,最后,一个人流亡,死在隔着整个地球的异国。把这样一生放上天平,你怎么称——是失败,还是另一种没被时代说服的坚持?\n\n现在,你只听到了我这一边。可这一年,有两个人会来挑战你的判断。\n\n那个 3 月清晨走出工厂、点燃这一切的纺织女工,她要的从头到尾只是一块面包。那个二十出头、把革命真正做出来、最后用枪把我推翻的布尔什维克组织者,他许诺给了人民那块面包。\n\n你换到她们的位置再听一遍,同一段 1917,会不会长出完全不同的样子?\n\n临走前,我只留给你一个画面,你自己去想:那一年,从头到尾,真正决定一切的,也许不是我手里那些大词,而是那一块,排在队伍最前面、却始终没买到的——面包。',
        en: 'Having walked my whole life, how would you judge a man who stood dead in the middle and tried to hold everyone at once?\n\nI belonged fully to no side. To the generals, I was too soft, too soft on revolt; to the workers and soldiers, I was the one still forcing them to fight and unable to give them bread; to the Bolsheviks, I was first the man who crushed them, then the man they overthrew with the very guns I handed them. I wanted to give Russia a road with freedom but without dictatorship, and in the end I went into exile alone and died a world away. Put a life like this on the scale. How do you weigh it: a failure, or another kind of holding-on that the age never managed to persuade?\n\nNow, you have heard only my side. But in this one year, two people will come to challenge your judgment.\n\nThe textile woman who walked out of her factory that March morning and lit all of this, all she ever wanted, from first to last, was one loaf of bread. The Bolshevik organizer in his early twenties, the one who actually made the revolution and finally overthrew me with a gun, he promised the people that bread.\n\nSwitch to their places and listen again. Might the same 1917 grow into something entirely different?\n\nBefore I go, I leave you only one image, for you to turn over yourself: maybe what truly decided everything that year, from first to last, was not the big words in my hands, but that one loaf, first in the line and never bought, the bread.',
      },
      deliverGoal: 'N11 close/meta — 评价站正中间想兼顾所有人的人 (对将军太软/对工人士兵逼他们打仗给不了面包/对布尔什维克先镇压后被自己发的枪推翻) 天平: 失败还是另一种没被时代说服的坚持 + 跨视角指针 (只听到我这一边 / 纺织女工要一块面包 + 布尔什维克组织者许诺了面包 / 换位置再听 1917 会不会完全不同) + recurring image 面包 (排在队伍最前却始终没买到的) — 不直白告诉是哪个 lens 的对位细节',
      engagementHook: '我对谁都不完全是自己人,想给俄国一条有自由又不靠独裁的中间路,最后什么都没撑住。你会怎么评价这样一个人?现在你只听到了我这一边——那个要一块面包的女工、那个许诺了面包的组织者,会怎么讲这同一年?',
      expectsRealAnswer: true,
    },
  ],
};

export var textileWorkerLens = {
  id: 'textile-worker-receiving-end',
  name: 'The Textile Worker',
  nameCn: '纺织女工',
  role: 'receiving-end',
  perspectiveTag: 'bread-strike-spark',
  icon: '🍞',
  description: {
    cn: '1917 年彼得格勒一个纺织厂的年轻女工，丈夫两年前被征上前线，至今没回来。她不识字，没读过一页革命小册子，可她知道面包多少钱、队要排多久、哪个孩子昨晚饿着睡。三月一个清晨，她和工友走出车间，喊出一句「要面包」。这一遍，你站在这座饥饿城市最底下的位置，看一个只想要一块面包的人，怎么一脚踢倒了一个统治了三百年的王朝。',
    en: 'A young woman in a Petrograd textile mill in 1917, whose husband was taken to the front two years ago and has not come back. She cannot read, and has never read a page of any revolutionary pamphlet, yet she knows the price of bread, the length of the line, and which child went to sleep hungry last night. One March morning she and her workmates walk out of the mill shouting one thing: "Bread!" This pass puts you at the very bottom of a starving city, watching how a person who wanted only a loaf of bread kicked over a dynasty that had ruled for three hundred years.',
  },
  storyboard: [
    {
      id: 'rus-textile-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '天还没亮，我已经站在面包队里了。\n\n外面是零下的风，刮在脸上像刀。我裹紧围巾，往手心哈气，盯着前面那扇还没开的店门。我前头排着几十个女人，跟我一样，篮子空着。\n\n我是彼得格勒（Petrograd，俄国的首都，就是圣彼得堡）一家纺织厂的女工。我丈夫两年前被征去打仗，到现在没回来，也不知道还在不在。家里两个孩子，等着我带回一块面包。\n\n常常是这样：排了三四个钟头，轮到我跟前，面包卖光了。我空着篮子回去，看着孩子的脸。\n\n这一遍，你站在我这儿——这座城市最底下、最不起眼的一格。你不识字，没读过任何大道理。你只想要一块面包。\n\n可你不知道：就是你这样的人，三月里走出工厂的那一脚，踢倒了一个统治了三百年的王朝。',
        en: 'It is not yet light, and I am already standing in the bread line.\n\nThe wind outside is below zero, cutting my face like a blade. I pull my scarf tight, breathe into my hands, and watch the shop door that has not opened yet. Dozens of women stand ahead of me, baskets empty, just like mine.\n\nI am a woman worker in a textile mill in Petrograd, the capital of Russia, the city once called St. Petersburg. My husband was taken for the war two years ago and has not come back; I do not even know if he is alive. At home, two children wait for me to bring back a loaf of bread.\n\nIt often goes like this: I stand three or four hours, my turn comes, and the bread is sold out. I carry the empty basket home and look at my children\'s faces.\n\nThis pass, you stand where I stand, in the lowest, least noticed square of this city. You cannot read. You have read no grand ideas. You want only a loaf of bread.\n\nBut here is what you do not know: it was people like you, walking out of the mill one March morning, who kicked over a dynasty that had ruled for three hundred years.',
      },
      deliverGoal: 'N1 hook — 天不亮排面包队 (零下风/空篮子) + 彼得格勒纺织女工自我介绍 (丈夫征上前线两年没回/两个孩子等面包) + 排几钟头面包卖光空手回 + 这一遍从最底没读过大道理只想要面包看 + 你这样的人三月走出工厂踢倒三百年王朝',
      engagementHook: '我排了三四个钟头，轮到我，面包卖光了——我空着篮子回家看孩子的脸。你能想象「连一块面包都排不到」的日子吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-textile-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我每天的日子，你才懂「面包」对我是什么。\n\n我每天在纺织厂干十几个钟头，机器声大得说话都听不见。下了工，不是回家歇着，是去排面包队——这才是我一天里最熬人的部分。\n\n这几年，城里的男人大多上了前线。一战（第一次世界大战）打了快三年，吞掉了上千万人。运东西的火车坏的坏、停的停，粮食运不进城。\n\n所以「面包」对我，不是一个词。它是凌晨的寒风，是站到腿麻的几个钟头，是空篮子，是孩子饿着的肚子。\n\n那些有学问的人，在报纸上吵「自由」「权利」「制度」。我听不懂，也没工夫听。我脑子里只有一件最实在的事：今天，能不能让我的孩子吃上饭。\n\n后来我才慢慢明白：一场掀翻天的大事，常常不是从大道理开始的。是从「我家孩子没饭吃」这么具体的一件事开始的。',
        en: 'First let me tell you my daily life, so you understand what "bread" means to me.\n\nEvery day I work a dozen hours and more in the mill, the machines so loud you cannot hear a voice. When the shift ends, I do not go home to rest. I go stand in the bread line, and that is the most grinding part of my day.\n\nIn these years, most of the city\'s men have gone to the front. The First World War has dragged on for almost three years and swallowed tens of millions. The trains that carry goods break down or stop, and grain cannot reach the city.\n\nSo "bread," to me, is not a word. It is the cold wind before dawn, the hours of standing until my legs go numb, the empty basket, my children\'s hungry stomachs.\n\nThe learned people argue in the newspapers about "freedom," "rights," "systems." I do not understand them, and I have no time to. In my head there is only one solid thing: can my children eat today.\n\nLater I slowly understood something. A great event that turns the sky over does not usually begin with grand ideas. It begins with something as concrete as "my child has nothing to eat."',
      },
      deliverGoal: 'N2 setup — 纺织厂十几钟头 + 下工去排面包队最熬人 + WWI 打快三年 (男人上前线/吞上千万人/火车坏粮运不进城) + 面包对我不是词是寒风/腿麻/空篮子/孩子饿肚 + 有学问的人吵自由权利我没工夫听只想孩子能吃饭 + 掀翻天的事常从「孩子没饭吃」开始',
      engagementHook: '有学问的人在报纸上吵「自由」「权利」，我听不懂也没工夫听——我脑子里只有一件事：今天孩子能不能吃上饭。你觉得「饿肚子」和「大道理」，哪个更能逼人站出来？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-textile-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '你大概要问：这么苦，那管事的人呢？管这个国家的人，在干什么？\n\n管这个国家的人，叫沙皇（Tsar，俄国君主的称号），名字是 Nicholas II（尼古拉二世）。他几乎一个人说了算——俄国是当时欧洲最后几个绝对专制的国家之一。\n\n可这位沙皇，离我远得像在另一个世界。1915 年，他做了一件后来证明很要命的事：他亲自跑到前线去指挥打仗。从那以后，每打一场败仗，账都记在他头上。首都呢，丢给了皇后和她信任的一个「神医」打理——王室在老百姓心里，越来越不像个东西。\n\n我从没见过沙皇。我也不太关心他。对我来说，他就是一个高高在上、跟我的面包队毫无关系的名字。\n\n这就是 1917 年初的彼得格勒：底下是几十万排不到面包的人，顶上是一个跑去打仗、把首都扔给别人的沙皇。中间，什么都没有。',
        en: 'You will probably ask: with all this suffering, where were the people in charge? What was the man who ran this country doing?\n\nThe man who ran this country was called the Tsar, the title of Russia\'s monarch. His name was Nicholas II. He decided almost everything himself; Russia was one of the last absolute monarchies left in Europe.\n\nBut this Tsar was as far from me as another world. In 1915 he did something that later proved deadly: he went to the front himself to command the war. From then on, every defeat was charged to his name. The capital he left to the Empress and a "holy healer" she trusted, and in the eyes of ordinary people the royal house looked less and less like anything at all.\n\nI never saw the Tsar. I did not much care about him either. To me he was a name high above, with nothing to do with my bread line.\n\nThis was Petrograd in early 1917: at the bottom, hundreds of thousands who could not get bread; at the top, a Tsar gone off to war who had thrown the capital to others. In the middle, nothing at all.',
      },
      deliverGoal: 'N3 setup — 管国家的是沙皇 Nicholas II (几乎一人说了算/欧洲最后几个绝对专制之一) + 离我远像另一世界 + 1915 亲赴前线指挥 (每败仗记他头上/首都丢给皇后+神医/王室威信跌) + 我没见过沙皇不关心他是高高在上跟面包队无关的名字 + 1917 初彼得格勒底下几十万排不到面包顶上跑去打仗的沙皇中间什么都没有',
      engagementHook: '沙皇离我远得像在另一个世界——我从没见过他，他也跟我的面包队毫无关系。当管事的人跟你的苦完全不沾边，你还指望他来救你吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-textile-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1917 年 3 月 8 日（这一天有两个日期：旧历是 2 月 23 日。俄国当时用的旧历，比欧洲其他地方晚 13 天，所以同一天有两个写法）。这天是国际妇女节。\n\n你跟平常一样进了纺织厂。可这天，厂里的女工心里都憋着一股气。前一晚又有孩子饿着睡了，面包队又白排了。\n\n不知道是谁先停下了手里的活。一个停，两个停，整个车间的机器一台台静下来。你也停了手。你们对望一眼，谁都没说要干嘛，可你们都明白：今天，不干了。\n\n你们走出车间，走上街。你喊出那句最实在的话——「要面包」。不是「打倒沙皇」，不是什么大口号。就是「要面包」。\n\n你们去敲隔壁金属厂的门，喊里面的男工出来。\n\n这一刻你得想：你只是个排面包队的女工，没有党派派你来，没有人给你写好剧本。就这么走出去，可能被抓、被开除、被打。你这一脚，敢不敢迈？',
        en: 'Now you are me.\n\nMarch 8, 1917 (this day has two dates: in the old Russian calendar it is February 23 — back then Russia used a calendar that ran 13 days behind the rest of Europe, so the same day gets written two ways). It is International Women\'s Day.\n\nYou go into the mill as usual. But today every woman worker is holding down a swallowed anger. Last night another child slept hungry; the bread line was stood in for nothing again.\n\nNo one knows who stopped working first. One stops, then two, then the machines of the whole floor go quiet one by one. You stop too. You look at one another, and no one says what to do, yet you all understand: today, no more work.\n\nYou walk out of the mill, into the street. You shout the most solid words there are: "Bread!" Not "Down with the Tsar," not any grand slogan. Just "Bread."\n\nYou go and bang on the doors of the metal factory next door and call the men out.\n\nHere you must think: you are only a woman in the bread line. No party sent you. No one wrote you a script. To walk out like this, you might be arrested, fired, beaten. This one step, do you dare take it?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1917.3.8 (旧历 2.23, 两个日期后面讲) 国际妇女节 + 进厂憋着气 (昨晚孩子饿睡/面包队白排) + 不知谁先停手机器一台台静下 + 走出车间上街喊「要面包」(不是打倒沙皇不是大口号就是要面包) + 敲金属厂门喊男工出来 + 你只是排面包队女工没党派没剧本可能被抓被打这一脚敢不敢迈',
      engagementHook: '你只是个排面包队的女工，没有人派你来，也没有人给你写好剧本。走出去可能被抓、被打。这一脚，你敢不敢迈？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-textile-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我敢。我们都敢了。\n\n那天，我们走出去了。第二天，二十万人罢工。再一天，差不多四十万人，整座城停摆。一个工厂喊出来，隔壁工厂跟上，街上的人越聚越多。\n\n沙皇在前线听说了，下了一道命令：开枪，给我把人镇压下去。\n\n这是最揪心的一刻。守在首都的，是几万士兵。沙皇要他们朝我们开枪。\n\n可这些士兵是谁？他们也是穷人家的儿子，他们的母亲、妻子，也在排面包队。他们端着枪站在我们面前，犹豫了。\n\n然后，他们做了一件改变一切的事：他们不开枪。他们调转枪口，站到了我们这边。3 月 12 日（旧历 2 月 27 日），首都驻军倒戈，打开了军火库。\n\n你想想这意味着什么：沙皇手里最后的牌，是军队。军队一倒，他就什么都没有了。一个排面包队的女人，和一个不肯开枪的士兵——我们俩，就这么把一个三百年的王朝架空了。',
        en: 'I dared. We all dared.\n\nThat day, we walked out. The next day, two hundred thousand were on strike. The day after, nearly four hundred thousand, and the whole city stopped. One mill shouted, the mill next door joined, and the crowds in the streets grew thicker.\n\nThe Tsar, hearing of it at the front, gave an order: fire on them, put the people down for me.\n\nThis was the most wrenching moment. Guarding the capital were tens of thousands of soldiers. The Tsar wanted them to fire on us.\n\nBut who were these soldiers? They too were the sons of poor families; their mothers and wives also stood in the bread line. They stood before us with guns raised, and they hesitated.\n\nThen they did the thing that changed everything: they did not fire. They turned their guns around and stood on our side. On March 12 (Old Style February 27), the capital garrison switched sides and threw open the arsenals.\n\nThink what this meant: the Tsar\'s last card was the army. Once the army turned, he had nothing left. A woman from the bread line, and a soldier who would not fire — the two of us, just like that, left a three-hundred-year dynasty standing on air.',
      },
      deliverGoal: 'N5 story — 走出去后第二天 20 万罢工再一天近 40 万整城停摆 (一厂喊隔壁跟上) + 沙皇下令开枪镇压 + 最揪心: 守首都几万士兵也是穷人家儿子母亲妻子也排面包队 + 端枪犹豫然后不开枪调转枪口站我们这边 + 1917.3.12 (旧 2.27) 驻军倒戈打开军火库 + 沙皇最后的牌是军队军队一倒他什么都没了 + 排面包队女人 + 不肯开枪士兵架空三百年王朝',
      engagementHook: '沙皇命令士兵朝我们开枪——可这些士兵也是穷人家的儿子，他们的母亲也在排面包队。他们端着枪，犹豫了。如果是你端着那把枪，你会扣扳机吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-textile-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1917 年 3 月 15 日（旧历 3 月 2 日），沙皇退位了。\n\n没有人攻进皇宫，没有惊天动地的厮杀。是前线的将领们一起劝他退的——他在一节火车车厢里，签了字，连儿子的位也一起让掉。统治了三百年的罗曼诺夫王朝，就这么结束了。\n\n你停下来，回头看那条面包队。\n\n我每天站的那条队，凌晨的寒风，空篮子，腿站到麻——我曾经以为，那就是我这辈子的全部，那是命，改不了的。\n\n可就是这条队，把我逼上了街。就是这条队上几十万个跟我一样的女人，一起走出来，掀翻了一个皇帝。\n\n那条让我受了那么多年苦的面包队，原来不只是我的苦。它是这场革命真正的起点。\n\n（你换一个视角再走这门课，会从另一个人嘴里，重新看见这条面包队——他站在跟我不一样的位置，看见的是另一回事。这条队，你先记住。）\n\n这一刻，我，一个一直在「承受」的人，第一次发现：原来我也能「发动」。',
        en: 'On March 15, 1917 (Old Style March 2), the Tsar abdicated.\n\nNo one stormed the palace; there was no earth-shaking battle. The generals at the front together urged him to step down. In a railway carriage he signed his name, and gave up his son\'s place along with his own. The Romanov dynasty that had ruled for three hundred years ended just like that.\n\nYou stop, and look back at that bread line.\n\nThe line I stood in every day, the cold wind before dawn, the empty basket, my legs gone numb. I used to think that was the whole of my life, that it was fate, that it could not be changed.\n\nBut it was that very line that drove me into the street. It was the hundreds of thousands of women on that line, just like me, walking out together, who toppled an emperor.\n\nThe bread line that gave me so many years of suffering, it turned out, was not only my suffering. It was the true starting point of this revolution.\n\n(When you run this lesson through another view, you will see this same bread line again, from another person\'s mouth. He stands in a place not like mine, and what he sees is something else. Hold on to this line for now.)\n\nIn this moment, I, a person who had always been on the receiving end, found for the first time: I could be the one who starts it too.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens (面包队 echo) — 1917.3.15 (旧 3.2) 沙皇退位 (无人攻皇宫/将领劝退/火车车厢签字连儿子位让掉/罗曼诺夫三百年结束) + 回头看面包队 (曾以为是命改不了/却把我逼上街/几十万女人走出掀翻皇帝) + 面包队不只我的苦是革命真正起点 + 跨视角指针轻触 (换视角会从另一人嘴里重看这条队他看见另一回事/先记住) + receiving 端第一次发现我也能发动',
      engagementHook: '那条让我受了那么多年苦的面包队，原来不只是我的苦——它是这场革命真正的起点。一直「承受」的人，怎么会一下变成「发动」的人？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-textile-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '沙皇没了，我以为面包就该有了。\n\n没有。\n\n退位之后，城里冒出两个管事的：一个叫临时政府（Provisional Government，二月革命后由自由派组的政府），西装革履，说要给俄国自由和议会；另一个叫彼得格勒苏维埃（Petrograd Soviet，工人和士兵选出来的代表会议——「苏维埃」就是「代表会」的意思）。两个并立，谁也压不住谁。有学问的人管这叫「两个政权并存」（dual power）。\n\n可不管谁管事，那个夏天我还是天不亮去排面包队。仗还在打，临时政府坚持不肯停战——前线还在吞我们的男人，面包还是不够。\n\n然后，从一个个嘴里，传来一句话，越传越响：「和平、土地、面包」（Peace, Land, Bread）。\n\n你听这三个词。停战，是前线士兵要的。分地主的地，是种着地的农民要的。面包，是我要的。一句话，把三种人最痛的三件事，全接住了。\n\n喊出这句话的，是一群叫布尔什维克（Bolshevik，一个激进的革命党派）的人。我不懂他们的主义。可「面包」这两个字，钻进了我心里。\n\n谁能给我面包，我就听谁的。这话，是不是太简单了？可饿过的人，都懂。',
        en: 'The Tsar was gone, and I thought bread would surely come now.\n\nIt did not.\n\nAfter the abdication, two sets of people in charge rose up in the city. One was called the Provisional Government, the government formed by liberals after the February Revolution, men in fine suits who said they would give Russia freedom and a parliament. The other was the Petrograd Soviet, a council of representatives chosen by workers and soldiers ("Soviet" simply means "council"). The two stood side by side, neither able to hold the other down. The learned people called this dual power — two governments at once.\n\nBut whoever was in charge, that summer I still went before dawn to stand in the bread line. The war went on; the Provisional Government refused to stop fighting. The front still swallowed our men, and the bread still ran short.\n\nThen, from one mouth to the next, a line spread and grew louder: "Peace, Land, Bread."\n\nHear those three words. Peace is what the front-line soldiers wanted. The landlords\' land split up is what the farming peasants wanted. Bread is what I wanted. One line caught the three deepest pains of three kinds of people, all at once.\n\nThe ones shouting it were a group called the Bolsheviks, a radical revolutionary party. I did not understand their doctrine. But the word "bread" went straight into my heart.\n\nWhoever can give me bread, I will follow. Is that too simple? Anyone who has gone hungry understands it.',
      },
      deliverGoal: 'N7 story — 沙皇没了以为有面包了没有 + 退位后两个管事并立 (临时政府 Provisional Government 自由派西装说给自由议会 / 彼得格勒苏维埃 Petrograd Soviet 工兵代表会/苏维埃=代表会) 谁也压不住谁 + 不管谁管事还是天不亮排队 (仗还打/临时政府不停战/前线吞男人面包不够) + 「和平土地面包」三词接住三种人 (停战=士兵/分地=农民/面包=我) + 喊的是布尔什维克 Bolshevik 激进党 + 我不懂主义但面包钻进心里 + 谁给面包听谁的饿过的人懂',
      engagementHook: '「和平、土地、面包」——一句话接住了士兵、农民和我三种人最痛的事。我不懂他们的主义，可「面包」两个字钻进了我心里。谁能给你最想要的东西你就听谁的，这想法是太简单，还是最实在？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-textile-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我把镜头从我家的厨房，往外推得很远很远。\n\n我点起的这把火，烧的不只是俄国。\n\n我那天走出工厂的时候，根本想不到：我们这场革命，几年后会漂洋过海，影响到一个我连名字都没听过的国家——中国。\n\n那时候的中国，刚推翻了自己的皇帝，正乱着。1919 年，中国的学生为了国家受的委屈走上街头，闹出一场叫五四运动的大事。就在那前后，一批中国的读书人，盯上了我们俄国 1917 年这场革命——他们看见的，是一个被压在最底下的人，居然真的「翻了身」、自己「当了主」。这个「真的能翻身」的样板，第一次摆在他们眼前。\n\n两年后，1921 年，他们建起了中国共产党。\n\n后来中国有一句很有名的话：「十月革命一声炮响，给中国送来了马克思主义」——说的就是这条线。\n\n（这是真实发生过的历史影响，是事实。至于这条线最后通向了什么、好不好，那是另一个大问题，这门课不替你下判断。）\n\n我，一个排面包队的女工，怎么也想不到：我走出工厂那一脚，余震会一直传到大海另一头。',
        en: 'Now I pull back from my kitchen and look far, far out.\n\nThe fire I lit burned more than Russia alone.\n\nThe day I walked out of the mill, I could never have imagined: a few years later our revolution would cross the ocean and reach a country whose name I had never even heard, China.\n\nChina in those years had just overthrown its own emperor and was in turmoil. In 1919, Chinese students marched over a wrong their country had suffered, in a great event called the May Fourth Movement. Around that time, a group of Chinese scholars fixed their eyes on our Russian revolution of 1917. What they saw was a person crushed at the very bottom who had actually risen and taken charge. That model of "you really can rise" stood before them for the first time.\n\nTwo years later, in 1921, they founded the Chinese Communist Party.\n\nThere is a famous line in China later: "the salvos of the October Revolution brought us Marxism." That is the chain it speaks of.\n\n(This is a real historical influence; it is a fact. Where that chain finally led, and whether it was good, is another large question, and this lesson does not judge it for you.)\n\nI, a woman from the bread line, could never have guessed: that one step out of the mill sent aftershocks all the way to the far side of the sea.',
      },
      deliverGoal: 'N8 story (§9 China-bridge clean node) — 镜头从厨房推远 + 我点的火烧的不只俄国 + 想不到几年后漂洋过海影响中国 + 中国刚推翻皇帝正乱 + 1919 五四运动学生上街 + 一批读书人盯上俄国 1917 (看见被压最底的人真翻身当家/「真能翻身」样板第一次摆眼前) + 1921 中共成立 + 「十月革命一声炮响送来马克思主义」就是这条线 + Rule-0 括号 (真实影响是事实/通向什么好不好另一问题不下判断) + 我想不到一脚余震传到海另一头',
      engagementHook: '我一个排面包队的女工，怎么也想不到：我走出工厂那一脚，几年后会影响到大海另一头的中国（1919 五四、1921 中共）。一件发生在俄国的事，怎么会成为另一个国家历史的源头之一？',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-textile-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我得诚实地把后半段告诉你。因为光讲「我们翻身了」，是骗你。\n\n那个喊着「和平、土地、面包」的布尔什维克党，1917 年 11 月 7 日（旧历 10 月 25 日）那个夜里，真的夺了权。这就是十月革命。\n\n夺权之后呢？\n\n他们也办了一次全国选举，选一个制宪会议（Constituent Assembly，由全国选出来定国家规矩的议会）。结果布尔什维克只拿了大概四分之一的票，没占多数。\n\n1918 年 1 月，这个选出来的议会开了一天，只开了一天，就被布尔什维克派人强行解散了。俄国唯一一次自由选出来的全国议会，开了一天，没了。\n\n再后来，仗没停，反而掉进了一场打了四年的内战，几百万人死在里头，还有大饥荒。\n\n你说我的面包呢？\n\n我不知道。我真的不知道。我走出工厂的时候，要的只是让孩子吃上饭。沙皇是倒了。可我那块面包，到底有没有来？我们换来的这个新东西，到底是我想要的，还是又一个不把我当回事的主子？\n\n这个问题，我活着的时候，没等到答案。',
        en: 'Now I have to tell you the second half honestly. Because to tell only "we rose up" would be to deceive you.\n\nThat Bolshevik party shouting "Peace, Land, Bread" truly seized power on the night of November 7, 1917 (Old Style October 25). This is the October Revolution.\n\nAnd after seizing power?\n\nThey too held a national election, for a Constituent Assembly, a parliament chosen across the country to set the nation\'s rules. The Bolsheviks won only about a quarter of the votes; they did not hold the majority.\n\nIn January 1918, this elected assembly met for one day, only one day, and was then forcibly dissolved by men the Bolsheviks sent. The one freely elected national parliament Russia ever had met for a single day, and was gone.\n\nLater still, the war did not stop; instead the country fell into a civil war that lasted four years, in which millions died, along with a great famine.\n\nYou ask, where was my bread?\n\nI do not know. I truly do not know. When I walked out of the mill, all I wanted was to feed my children. The Tsar did fall. But did my loaf of bread ever come? This new thing we got in exchange, was it what I wanted, or just another master who did not count me as anything?\n\nThat question, in my lifetime, I never got the answer to.',
      },
      deliverGoal: 'N9 zoom-out (Rule-0 不确定/威权结局) — 诚实讲后半段光讲翻身是骗你 + 布尔什维克 1917.11.7 (旧 10.25) 夺权=十月革命 + 办全国选举制宪会议 Constituent Assembly (布尔什维克只约 1/4 票没多数) + 1918.1 开一天被强行解散 (唯一自由选出的全国议会开一天没了) + 仗没停掉进四年内战几百万人死+大饥荒 + 我的面包呢我不知道 (沙皇倒了我那块面包到底来没来/新东西是我想要的还是又一个不把我当回事的主子) + 我活着没等到答案',
      engagementHook: '沙皇是倒了，可我那块面包到底有没有来？我们换来的这个新东西，是我想要的，还是又一个不把我当回事的主子？我活着的时候，没等到答案。',
      expectsRealAnswer: false,
    },
    {
      id: 'rus-textile-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，回头看我走出工厂那一脚，有一个真问题，等你来答。\n\n我，一个只想要一块面包的女工，点燃了一场掀翻三百年王朝的革命。可我点的这把火，最后烧出来的，到底是什么？\n\n一种说法：我赢了，我们赢了。一群最底层、最没声音的人，排面包队的女人、不肯开枪的士兵，亲手掀翻了一个皇帝。一个一直被命运「承受」的人，第一次发动了历史。这件事本身，就值得记住，不管后来怎样。\n\n另一种说法：我被骗了。我要的是面包和自由，可我点的火，最后长出来的，是一个把唯一一次自由选出的议会开一天就关掉、用国家的力量镇压一切对手的政权。我换掉了一个不管我死活的沙皇，可能只是换来了另一群不把我当回事的人。\n\n这两种说法，不是「一好一坏」。它们是同一段历史的两端——同一把火，同一个我。\n\n你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'Having walked my whole life, look back at that one step out of the mill. There is a real question waiting for you.\n\nI, a woman who wanted only a loaf of bread, lit a revolution that toppled a three-hundred-year dynasty. But the fire I lit, what did it finally burn into being?\n\nOne view: I won, we won. A crowd of the lowest, most voiceless people, women in the bread line and soldiers who would not fire, toppled an emperor with their own hands. A person always on the receiving end of fate started history for the first time. That fact itself is worth remembering, whatever came after.\n\nThe other view: I was deceived. What I wanted was bread and freedom, but the fire I lit grew, in the end, into a state that shut down the one freely elected assembly after a single day and used the power of the nation to crush every rival. I traded away a Tsar who did not care whether I lived or died, perhaps only for another set of people who did not count me as anything.\n\nThese two views are not "one good, one bad." They are the two ends of the same history — the same fire, the same me.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis (colon-form neutral) — 真问题: 只想要面包的女工点燃掀翻三百年王朝的革命/这把火最后烧出什么 + 一种说法 (我赢了/最底层最没声音的人亲手掀翻皇帝/承受的人第一次发动历史/值得记住不管后来怎样) + 另一种说法 (我被骗了/要面包和自由却长出关掉议会镇压对手的政权/换掉不管我死活的沙皇换来另一群不把我当回事的人) + 不是一好一坏是同一段历史两端同一把火同一个我 + 想 30 秒',
      engagementHook: '一种说法：我赢了，最底层的人亲手掀翻了皇帝。另一种说法：我被骗了，火烧出来的是另一个不把我当回事的政权。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'rus-textile-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一条排不到面包的队，一个走出工厂的清晨，一句「要面包」，一个被掀翻的皇帝，一块到死都没等来的面包——你会怎么评价这样一个开端？\n\n一场革命，一边是最没声音的人第一次掀翻了皇帝，一边是后来那个关掉议会、镇压对手的政权。这两件事，是同一把火。你怎么称？\n\n不过先记住一件事：你这一遍，听的只是那个走出工厂、为面包罢工的女人。\n\n那个把「和平、土地、面包」喊给我、最后真把权夺到手的布尔什维克组织者，会把这一年讲成另一个样子——在他眼里，这是一场必须做成的事，我的面包只是其中一环。那个夹在中间、想给俄国一条「有自由、没沙皇、也没有一党专政」的中间道路、最后两头不讨好、什么都没撑住的 Kerensky（克伦斯基），又会讲出第三个完全不同的故事。\n\n你还没听到他们的声音。换个视角再走一遍，你刚才下的判断，站不站得住？\n\n最后再想一步：在这一整年里，喊「面包」的我、夺权的组织者、撑不住的 Kerensky——你听了我这一边，可你还没听见的那两个人，会怎么反驳我？你又最想先听谁说？',
        en: 'Having walked my whole life, look back at where it led. A line where bread never came. A morning I walked out of the mill. The cry "Bread!" A toppled emperor. And a loaf of bread that never arrived before I died. How would you judge a beginning like this?\n\nA revolution, on one side the most voiceless people toppling an emperor for the first time, on the other the state that later shut down the assembly and crushed its rivals. These two things are the same fire. How do you weigh it?\n\nBut first, remember one thing: this pass, you heard only the woman who walked out of the mill and struck for bread.\n\nThe Bolshevik organizer who shouted "Peace, Land, Bread" at me and in the end truly seized power would tell this year as something else — in his eyes it was a thing that had to be made to happen, and my bread was only one part of it. And Kerensky, caught in the middle, who wanted a middle road for Russia with "freedom, no Tsar, and no one-party rule" and in the end pleased no one and held nothing together, would tell a third, completely different story.\n\nYou have not yet heard their voices. Run it again through another view, and see whether the judgment you just made still holds.\n\nThen take one last step: across this whole year, there was me shouting "Bread," the organizer who seized power, and Kerensky who could not hold on. You have heard my side. How would the two you have not yet heard argue back against me? And whose voice would you most want to hear first?',
      },
      deliverGoal: 'N11 close (MANDATORY 跨视角指针) — 评价开端 (排不到的队/走出工厂的清晨/一句要面包/被掀翻的皇帝/到死没等来的面包 → 最没声音的人第一次掀翻皇帝 vs 后来关议会镇压对手的政权/同一把火怎么称) + ① 你只听到走出工厂为面包罢工的女人 ② 布尔什维克组织者会讲成另一样 (必须做成的事我的面包只是一环) + Kerensky 第三个完全不同的故事 (中间道路两头不讨好什么都没撑住) ③ 你还没听到他们的声音换视角再走判断站不站得住 + 你还没听见的那两个人会怎么反驳我/你最想先听谁说',
      engagementHook: '你这一遍，只听到了走出工厂、为面包罢工的我。那个真把权夺到手的组织者、那个什么都没撑住的 Kerensky，会讲出完全不同的故事——你还没听到他们的声音。换个视角再走一遍，你刚才的判断站得住吗？你又最想先听谁说？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (actor / mediator / receiving-end-default) ───
export var lenses = {
  'bolshevik-organizer-actor':   bolshevikOrganizerLens,
  'kerensky-mediator':           kerenskyLens,
  'textile-worker-receiving-end': textileWorkerLens,
};
export var defaultLens = 'textile-worker-receiving-end';
export default lenses[defaultLens].storyboard;
export var meta = {
  topicId: 'russian-revolution-1917',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'bolshevik-organizer-actor': 30, 'kerensky-mediator': 30, 'textile-worker-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-02',
  notes: [
    '3 lens / 11 节点 / cross-lens micro-detail: 面包 bread (三视角各触不点破)',
    'defaultLens: textile-worker-receiving-end (二月妇女节面包罢工 = 革命火种)',
    'expectsRealAnswer: ONLY N10+N11 per lens (2 each, 6 total)',
    'OS/NS 历法严格; Rule 0: 解放↔威权双持; §9 十月革命→五四→建党桥 (影响≠认可)',
    '3-agent review pending',
  ],
};
