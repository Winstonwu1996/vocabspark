// ─────────────────────────────────────────────────────────────────
// 战间期与极权主义兴起 1919-1939: The Interwar Years & the Rise of
//   Totalitarianism · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 极权三国段全程用德/意/俄/日真实
//   术语 (Versailles/Reichstag/Article 48/Enabling Act/Führer/kulak/gulag/
//   Kwantung Army),绝不用中国特定词。§8「真中国」桥仅注入 mediator N9 +
//   receiving-end N9 两个 synthesis-邻近节点,那里才用中文历史术语 (五四/
//   军阀/北伐/抗战/卢沟桥)。
// 3 lens / 11 nodes each / Rule 0 高敏感 / expectsRealAnswer 仅 N10+N11。
// 跨 lens micro-detail: 集会广场的探照灯与鼓点 (Scheinwerfer/Trommel) -
//   强人在台上看成「我造出的团结」/民主派在边缘看成「理性被淹没的声音」/
//   普通人在人群里看成「我第一次不孤独」。三视角各触一次,不互相点破。
// anti-fab: Niemöller「First they came」显式标战后/多版本/非档案;「强人共同
//   配方」显式标比较框架非单一史实;桥接人物 (民主派议员/沉默的普通人) 标虚构。
// ─────────────────────────────────────────────────────────────────

export var strongmanLens = {
  id: 'strongman-actor',
  name: 'The Strongman',
  nameCn: '许诺让国家重新伟大的人',
  role: 'perpetrator-actor',
  perspectiveTag: 'the-man-who-promised-order',
  icon: '📢',
  description: {
    cn: '1920 到 30 年代,在好几个国家反复出现的同一种人物,没有名字,因为他不是某一个独裁者。他是危机里冒出来的那种人:失业、通胀、街头混乱、对明天的恐惧,正是他的舞台。他不靠讲复杂政策赢人心,他靠情绪,他指认一个敌人,告诉受苦的人「这不是你的错,是他们害的」。他真正的本事不在思想,在抓住时机和制度的裂缝。这一遍让你从一个施害者内部,看他怎么常常踩着合法的台阶、借着民众的欢呼,一步步把自由收进自己手里。',
    en: 'The same kind of figure who appeared again and again in several countries in the 1920s and 30s, with no name, because he is not one specific dictator. He is the man a crisis pushes to the top: joblessness, inflation, street chaos, fear of tomorrow are exactly his stage. He wins hearts not with complex policy but with emotion. He names an enemy and tells the suffering, this is not your fault, they did this to you. His real gift is not in ideas but in reading the moment and the cracks in the system. This pass lets you stand inside a perpetrator and watch how he, often climbing legal steps and carried by the crowd cheers, gathers freedom into his own hands step by step.',
  },
  storyboard: [
    {
      id: 'iwt-strongman-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我站在广场的高台上。脚下是几万张脸,几万双眼睛,全望着我一个人。\n\n旗帜在风里抖,鼓点一下一下敲在每个人心口上。探照灯把夜空切成几道白柱。底下的人开始喊我的名字,声音连成一片,像海浪一样推过来。\n\n这一刻我比谁都清楚:他们要的不是我的政策。他们要的,是一个能让他们重新觉得有力量、有方向、有人替他们出气的人。\n\n我不告诉你我的名字。因为我不是某一个人。1920、30 年代,在好几个国家,有好几个我,长得不一样,打法却几乎一样。\n\n这一遍,你坐进我这个位置。你会看见自由不是被我一把抢走的。你会看见它怎么被人,常常是高高兴兴地,一点点交到我手上。',
        en: 'I stand on the high platform of the square. Below me are tens of thousands of faces, tens of thousands of eyes, all looking at me alone.\n\nThe flags shake in the wind. The drumbeat strikes each chest, one beat at a time. Searchlights cut the night sky into white columns. The people below begin to shout my name, the sound merging into one, pushing toward me like a wave.\n\nIn this moment I know better than anyone: it is not my policy they want. What they want is a man who can make them feel they have strength again, a direction, someone to punish their enemies for them.\n\nI will not tell you my name, because I am not one man. In the 1920s and 30s, in several countries, there were several of me, looking different, but with almost the same playbook.\n\nThis pass puts you in my seat. You will see that freedom was not snatched away by me in one grab. You will see how it was handed to me, often gladly, a little at a time.',
      },
      deliverGoal: 'N1 hook: 广场高台几万张脸 + 旗帜/鼓点/探照灯/喊名字 (cross-lens 集会意象首触) + 他们要的不是政策是「重新觉得有力量、有人出气」+ 不给名字 (不是某一个人/几个国家几个我/打法几乎一样) + 这一遍视角 (自由不是被抢走的,是被高高兴兴交到我手上)',
      engagementHook: '台下几万人喊我的名字,可他们要的不是我的政策。你愿意从一个施害者内部,看人们怎么把自由亲手交出去吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-strongman-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先看清我站上这个台子之前,这个国家是什么样。\n\n第一次世界大战刚打完,九百多万士兵死了,四个老帝国垮了。所有人都说那是「结束一切战争的战争」。可战后没有安宁。\n\n在德国,1919 年的《凡尔赛条约》(Treaty of Versailles) 逼战败国背上发动战争的全部罪责、丢掉领土、付天文数字的赔款。普通人觉得受了奇耻大辱。1923 年又来一场恶性通胀,一条面包要用一手推车的钞票买,中产一辈子的积蓄一夜变成废纸。\n\n然后是 1929 年,大萧条 (the Great Depression)。到 1932 年,德国失业的人达到约六百万。\n\n你记住这个画面:几百万人没工作、没积蓄、没希望,又冷又饿又怕。\n\n这就是我的肥料。饥饿和绝望,是我这种人最好的肥料。',
        en: 'First, see clearly what this country was like before I stepped onto this platform.\n\nWorld War I had just ended. More than nine million soldiers were dead, and four old empires had collapsed. Everyone called it the war to end all wars. Yet after the war there was no peace.\n\nIn Germany, the 1919 Treaty of Versailles forced the defeated to carry full blame for starting the war, to lose territory, and to pay an astronomical bill. Ordinary people felt deeply humiliated. Then in 1923 came a hyperinflation, when a loaf of bread cost a wheelbarrow of cash, and a lifetime of middle-class savings turned to waste paper overnight.\n\nThen came 1929 and the Great Depression. By 1932, German unemployment reached about six million.\n\nKeep this picture in mind: millions of people with no work, no savings, no hope, cold and hungry and afraid.\n\nThat is my fertilizer. Hunger and despair are the best fertilizer for a man like me.',
      },
      deliverGoal: 'N2 setup: 战后背景 (一战 900 万死/四帝国垮/「结束一切战争的战争」却无安宁) + 凡尔赛条约屈辱 (罪责/领土/赔款) + 1923 恶性通胀 (面包要一手推车钞票/中产积蓄变废纸) + 1929 大萧条到 1932 德国失业约 600 万 + 「饥饿绝望是我最好的肥料」',
      engagementHook: '几百万人又冷又饿又怕:这正是我这种人的肥料。当一个社会陷入绝望,它最容易长出什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-strongman-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '现在我告诉你我的打法。它简单得可怕,而且哪个国家都好用。\n\n第一步,我不跟你讲复杂的经济数字。我给你一个敌人。\n\n你失业、你挨饿、你觉得国家被人糟蹋了。好,我告诉你这一切是谁害的:是外国人,是叛徒,是那群「他们」。具体是谁,各国不一样,但那根手指头,总要指向某一群人。\n\n这一招最厉害的地方在哪?它把你心里的痛,从「我是不是失败了」翻成「我是被害的」。前一句让你羞愧、低头;后一句让你愤怒、抬头,而愤怒,是能被我调动的力量。\n\n第二步,我许诺秩序和荣光。我说:跟着我,我让这个国家重新伟大。\n\n你听好了:我从不许诺自由。我许诺的是力量。在一个怕得发抖的社会里,「力量」比「自由」好卖得多。',
        en: 'Now I will tell you my playbook. It is frighteningly simple, and it works in any country.\n\nStep one: I do not give you complicated economic numbers. I give you an enemy.\n\nYou are jobless, you are hungry, you feel the nation has been ruined. Good. I tell you who did this to you: foreigners, traitors, that crowd of them. Exactly who differs from country to country, but the finger must always point at some group of people.\n\nWhere is this trick most powerful? It flips the pain inside you from are you a failure into you were wronged. The first makes you ashamed and bows your head. The second makes you angry and lifts your head, and anger is a force I can move.\n\nStep two: I promise order and glory. I say, follow me, and I will make this nation great again.\n\nListen carefully: I never promise freedom. I promise strength. In a society shaking with fear, strength sells far better than freedom.',
      },
      deliverGoal: 'N3 setup: 强人打法第一步: 给一个敌人 (外国人/叛徒/「他们」,各国不同但总指向某群人) + 这招厉害处: 把痛从「我失败了」翻成「我被害了」(羞愧低头→愤怒抬头/愤怒是可调动的力量) + 第二步: 许诺秩序与荣光「让国家重新伟大」+ 「我从不许诺自由,我许诺力量;怕的社会里力量比自由好卖」',
      engagementHook: '我从不许诺自由,我许诺力量。在一个怕得发抖的社会里,「力量」为什么比「自由」更好卖?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-strongman-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。你要夺权了。\n\n你可能以为夺权要靠政变、靠枪。错了。我最得意的本事,是几乎不用开枪。\n\n看意大利的样板。1922 年 10 月,墨索里尼 (Mussolini) 搞了一场「March on Rome」(向罗马进军)。听上去像千军万马攻城,其实大半是虚张声势。可国王为了避免流血,主动请他出任首相。他没打垮国家,是国家不肯自卫,把权力递了过来。\n\n再看德国。1933 年 1 月 30 日,希特勒 (Hitler) 不是政变上台的,他是被总统兴登堡 (Hindenburg) 合法任命为总理的。在这之前,他的党靠的是选票:1932 年的选举里,纳粹成了议会第一大党,但从没拿到过半数的票。\n\n你品一下这件事的可怕:我不需要砸碎规则。我只需要利用规则,踩着它给我留的台阶,一级一级走上去。',
        en: 'Now you are me. You are about to seize power.\n\nYou may think seizing power needs a coup, needs guns. Wrong. My proudest skill is that I barely fire a shot.\n\nLook at the Italian model. In October 1922 Mussolini staged a March on Rome. It sounds like a great army storming the city, but most of it was a bluff. Yet the king, to avoid bloodshed, invited him to be prime minister. He did not defeat the state. The state refused to defend itself and handed the power over.\n\nNow look at Germany. On January 30, 1933, Hitler did not come to power by a coup. President Hindenburg legally appointed him chancellor. Before that, his party ran on votes: in the 1932 elections the Nazi Party became the largest party in parliament, yet it never won a majority of the vote.\n\nWeigh how frightening this is: I do not need to smash the rules. I only need to use the rules, to climb the staircase they left for me, one step at a time.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak: 夺权不靠政变靠合法台阶 + 意大利样板 1922.10 March on Rome 大半虚张声势/国王为避流血主动请墨索里尼当首相 (国家不肯自卫) + 德国 1933.1.30 希特勒被兴登堡合法任命总理非政变 + 1932 纳粹靠选票成议会第一大党 + 自我拷问「我不砸规则,我利用规则踩台阶上去」',
      engagementHook: '我最得意的本事,是几乎不用开枪,我利用规则,踩着它给我留的台阶上去。一套「合法」走上来的权力,是不是反而更难防?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-strongman-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '当上总理,还不够。议会里那些人还能投票否决我。我要的是不受任何人节制的权力。\n\n这就要用到我最爱的两个字:紧急。\n\n德国魏玛宪法里有个第 48 条 (Article 48)。写它的人是好意:遇到国家紧急状态,总统可以绕过议会、直接发布法令、暂停一些公民自由,好尽快恢复秩序。\n\n你看出这条款的破绽了吗?权力交给谁,它写得很清楚——总统一个人。危险的是:触发的门槛写得太宽(「公共安全和秩序受威胁」几乎什么都能往里套),总统一人就能绕过议会、暂停公民自由,而议会那点制衡又很容易被架空。\n\n这就是留给我的钥匙。我不需要废掉宪法,我只需要制造或抓住一场「紧急」,然后名正言顺地说:非常时期,得用非常手段。\n\n人在害怕的时候,最容易点头。你跟一个吓坏了的人说「为了保护你,我需要一点特别的权力」,他往往会说:拿去吧,只要你能让我安全。\n\n记住这一步。下一夜,一场大火,就会把这把钥匙,送到我手里。',
        en: 'Becoming chancellor is not enough. Those people in parliament can still vote me down. What I want is power checked by no one.\n\nThis is where my two favorite words come in: state of emergency.\n\nGermany Weimar constitution had an Article 48. Its authors meant well: in a national emergency the president could bypass parliament, issue decrees directly, and suspend some civil liberties, so as to restore order quickly.\n\nDo you see the crack in this clause? Who holds the power is spelled out clearly: the president alone. The danger is how broadly the trigger is written, so that one man can bypass parliament and suspend civil liberties, while the only check, the Reichstag, is easily sidelined.\n\nThat is the key left for me. I do not need to abolish the constitution. I only need to create or seize an emergency, and then say, with full legitimacy: extraordinary times call for extraordinary measures.\n\nWhen people are afraid, they nod most easily. Tell a frightened man, to protect you I need a little special power, and he will often say: take it, as long as you keep me safe.\n\nRemember this step. The next night, a great fire will deliver this key into my hand.',
      },
      deliverGoal: 'N5 story: 当总理不够要不受节制的权力 + 「紧急」二字 + 魏玛宪法第 48 条 (本意好: 紧急时总统绕过议会发令/暂停部分公民自由恢复秩序) + 破绽: 紧急大权清楚交给总统一人, 但触发门槛太宽+一人就能绕议会暂停公民自由+议会制衡易被架空 = 留给我的钥匙 + 不废宪法只制造/抓住一场紧急「非常时期非常手段」+ 害怕的人最容易点头「为保护你给我特别权力→拿去吧只要让我安全」+ 预告下一夜大火送来钥匙',
      engagementHook: '人在害怕的时候最容易点头:「为了保护你,我需要一点特别的权力」。当有人以「紧急」为名向你要特别权力时,你凭什么分辨他是真为你好?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-strongman-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '机会来了,或者说,来得正是时候。\n\n1933 年 2 月 27 日的夜里,柏林的国会大厦 (Reichstag),也就是德国议会所在的那座大楼,起火了。\n\n我几乎是立刻就把它定了性:这是共产党人干的,是一场针对国家的阴谋,是紧急状态。\n\n第二天,总统兴登堡依据第 48 条,签发了《国会纵火法令》(Reichstag Fire Decree)。一纸法令,言论自由、集会自由、新闻自由:一夜之间,全部中止。我的政治对手开始被成批逮捕。\n\n我要你看清这一步有多漂亮:从头到尾,我都「依法办事」。我用的是宪法给总统的权力,签字的是合法的总统。一场火,被我变成了一把砍向自由的合法的刀。\n\n那一夜,广场上我的人还在游行、还在欢呼。探照灯照着夜空,鼓点敲着。在他们眼里,这是国家终于硬起来了。\n\n而我心里清楚:那不是国家硬起来,那是自由,刚刚被关掉了第一盏灯。',
        en: 'The chance came, or rather, came at just the right time.\n\nOn the night of February 27, 1933, the Reichstag in Berlin, the building that housed the German parliament, caught fire.\n\nI labeled it almost at once: this was the work of communists, a plot against the nation, a state of emergency.\n\nThe next day, President Hindenburg, under Article 48, signed the Reichstag Fire Decree. With one decree, freedom of speech, of assembly, of the press, all suspended overnight. My political opponents began to be arrested in batches.\n\nI want you to see how elegant this step was: from start to finish, I acted within the law. I used the power the constitution gave the president, and a legitimate president signed it. A fire, in my hands, became a legal blade swung at freedom.\n\nThat night, my people in the square were still marching, still cheering. Searchlights lit the night sky, the drumbeat sounded. In their eyes, the nation had finally grown firm.\n\nAnd I knew: that was not the nation growing firm. That was freedom, with its first lamp just switched off.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens: 1933.2.27 夜 Reichstag 国会大厦失火 + 强人立刻定性共产党阴谋=紧急状态 + 2.28 兴登堡依第 48 条签《国会纵火法令》一夜中止言论/集会/新闻自由+成批逮捕对手 + 「从头到尾依法办事/一场火变成合法的刀」+ 集会意象 (探照灯/鼓点,强人角度=「我造出的团结/国家硬起来」) + 「自由刚被关掉第一盏灯」。只碰集会意象从强人角度,不揭另两视角',
      engagementHook: '一场火,被我变成了一把砍向自由的合法的刀,而广场上的人还在为「国家终于硬起来了」欢呼。当镇压披着「合法」的外衣,人们还认得出它吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-strongman-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '还差最后一步,也是最惊人的一步。\n\n我已经能发紧急法令了,可立法权名义上还在议会手里。我要让议会自己,亲手,把这个权力交给我。\n\n1933 年 3 月 23 日。在逮捕和恐吓的气氛里,议会表决一项叫《授权法案》(Enabling Act) 的法律。它的内容是:今后政府可以不经议会、甚至违反宪法地立法。\n\n说白了,议会投票同意了一件事:我们把立法的权力交出去,我们自己,不再需要存在。\n\n它通过了。\n\n你停下来想想这一幕:一个民主的议会,用一次完全合法的投票,亲手结束了自己。没有坦克,没有枪声。是一群穿着西装的人,在挂着宪法的大厅里,举手通过的。\n\n几个月内,别的政党被取缔,德国成了一党独裁。\n\n这就是我最想让你看见的画面:民主的死,不一定轰轰烈烈。它可以死得很安静、很「合法」、很体面。',
        en: 'One last step remains, and it is the most astonishing.\n\nI can already issue emergency decrees, but lawmaking power still rests, in name, with parliament. I want parliament itself, with its own hands, to give me that power.\n\nMarch 23, 1933. In an atmosphere of arrests and intimidation, parliament votes on a law called the Enabling Act. Its content: from now on the government may make laws without parliament, even against the constitution.\n\nIn plain words, parliament voted to agree to one thing: we hand over the power to make laws, and we ourselves no longer need to exist.\n\nIt passed.\n\nStop and picture this scene: a democratic parliament, by a completely legal vote, ended itself with its own hands. No tanks, no gunfire. A crowd of men in suits, in a hall with the constitution on the wall, raised their hands and passed it.\n\nWithin months, other parties were banned, and Germany became a one-party dictatorship.\n\nThis is the image I most want you to see: the death of democracy need not be loud. It can die very quietly, very legally, very respectably.',
      },
      deliverGoal: 'N7 story: 最后一步: 让议会亲手交出立法权 + 1933.3.23 在逮捕恐吓气氛中议会表决《授权法案》(政府可不经议会甚至违宪立法) + 「议会投票同意自己不再需要存在」+ 通过了 + 民主议会用完全合法的投票亲手结束自己 (没坦克没枪声/穿西装的人在挂宪法的大厅举手) + 几个月内别党被取缔成一党独裁 + 「民主的死可以很安静很合法很体面」',
      engagementHook: '一群穿西装的人,在挂着宪法的大厅里举手,合法地投票结束了自己的民主。民主的死,为什么可以这么安静、这么体面?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-strongman-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '别以为只有我一个人这么干。退一步看,你会发现一整张配方表。\n\n请注意:把墨索里尼、希特勒、斯大林 (Stalin)、日本军部放进同一个框子里讲,是一种「比较框架」,不是说他们一模一样。他们差别很大:左和右、意识形态、上台的路都不同。但这个框架能让你看清一件事:危机来时,不同的国家常常走出相似的步子。\n\n苏联的斯大林,用「五年计划」(Five-Year Plan,一个强行快速建起重工业的国家计划) 把农业国硬推成工业强国,代价是强制集体化和大饥荒 (如乌克兰的 Holodomor,数百万人活活饿死)、大清洗 (Great Purge,斯大林对「可疑敌人」的大规模处决) 里数百万人的死。\n\n日本,大萧条砸垮农村,一批青年军官认定文官政府软弱,1931 年关东军 (Kwantung Army,日本驻在中国的军队) 自导自演九一八事变 (Mukden Incident,日本自己制造借口、强占中国东北),炸自家铁路嫁祸,借口侵占满洲。\n\n把这些放一起看,同一套配方浮出来:第一,一场危机;第二,一份怨恨与恐惧;第三,一个指认敌人、许诺秩序的强人;第四,借「紧急」夺权;第五,单一政党加宣传加镇压。\n\n四个国家走的路不同,但尽头都是同一种东西:把权力关进一个人手里,把异见关进牢里。',
        en: 'Do not think I am the only one who does this. Step back, and you will find a whole recipe card.\n\nNote this: putting Mussolini, Hitler, Stalin, and the Japanese military into one box is a comparison frame, not a claim that they are identical. They differ greatly: left and right, ideology, the path to power all differ. But this frame lets you see one thing clearly: when crisis comes, different countries often take similar steps.\n\nStalin in the USSR used the Five-Year Plan (a forced plan to build heavy industry fast) to push a farming country into being an industrial power. The cost: forced collectivization and a mass famine (the Ukraine Holodomor, millions starved), and millions of deaths in the Great Purge (Stalin mass killing of suspected enemies).\n\nIn Japan, the Depression crushed the countryside, and a group of young officers decided the civilian government was weak. In 1931 the Kwantung Army (Japan army stationed in China) staged the Mukden Incident (Japan staged attack to seize northeast China), blew up its own railway to lay the blame, and used it as a pretext to seize Manchuria.\n\nLay these side by side and the same recipe surfaces. One: a crisis. Two: resentment and fear. Three: a strongman who names an enemy and promises order. Four: seizing power through emergency. Five: a single party, plus propaganda, plus repression.\n\nFour countries walked different roads, but the end of every road was the same thing: power locked into one man hands, dissent locked into a cell.',
      },
      deliverGoal: 'N8 story: 不止我一个 + anti-fab: 把墨/希/斯/日军部放一个框子是「比较框架」非说一模一样 (差别大: 左右/意识形态/上台路不同) 但能看清危机时不同国家走相似步子 + 苏联斯大林五年计划 (农业国推成工业强国/代价: 强制集体化+大饥荒 Holodomor+大清洗数百万死) + 日本大萧条砸垮农村/青年军官认定文官软弱/1931 关东军九一八事变炸自家铁路嫁祸侵满 + 共同配方: 危机→怨恨恐惧→指认敌人许诺秩序的强人→借紧急夺权→单一政党+宣传+镇压 + 四国各走一遍',
      engagementHook: '墨索里尼、斯大林、日本军部和我差别很大,却走出了相似的步子:危机→敌人→强人→借紧急夺权→单一政党。当几个国家同时走上同一条路,问题还只是「几个坏人」吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-strongman-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我许诺了秩序和荣光。现在我告诉你,我真正交付的是什么。\n\n那条配方的尽头,不是伟大,是废墟。\n\n我撕毁凡尔赛、重整军备、一口口吞掉邻国。日本 1937 年由卢沟桥事变全面侵华。1939 年 9 月,德国入侵波兰,第二次世界大战爆发了。\n\n那场被叫做「结束一切战争的战争」之后的二十年喘息,成了下一场更大灾难的助跑。\n\n这场战争,是人类历史上死人最多的一场,数千万人死去,还带来了种族灭绝。我口口声声许诺的「秩序」,兑现的是史无前例的浩劫。\n\n你现在该明白我这个角色最阴的地方了:我从不说「跟着我,我带你们走向毁灭」。我说的永远是秩序、是荣光、是重新伟大。\n\n所有把国家带进深渊的人,在出发那天,用的都是最动听的词。',
        en: 'I promised order and glory. Now I tell you what I actually delivered.\n\nAt the end of that recipe lies not greatness, but ruins.\n\nI tore up Versailles, rearmed, and swallowed neighbor after neighbor. Japan launched its full invasion of China with the Marco Polo Bridge Incident in 1937. In September 1939, Germany invaded Poland, and the Second World War broke out.\n\nThose twenty years of breathing space after the so-called war to end all wars became the run-up to an even greater catastrophe.\n\nThis war was the deadliest in human history, with tens of millions dead, and it brought genocide as well. The order I kept promising was delivered as catastrophe on an unprecedented scale.\n\nNow you should understand the darkest thing about my role: I never say, follow me and I will lead you to ruin. What I always say is order, glory, greatness again.\n\nEvery man who has led a nation into the abyss used, on the day he set out, the most beautiful words.',
      },
      deliverGoal: 'N9 story (代价): 真正交付的是废墟非伟大 + 撕毁凡尔赛/重整军备/吞邻国 + 日本 1937 卢沟桥事变全面侵华 + 1939.9 德国入侵波兰二战爆发 + 「结束一切战争的战争」后 20 年喘息成下一场更大灾难助跑 + 二战史上死人最多 (数千万死+种族灭绝) + 许诺「秩序」兑现的是史无前例浩劫 + 最阴: 我从不说带你们走向毁灭,永远说秩序荣光伟大 + 「带国家进深渊的人出发那天都用最动听的词」',
      engagementHook: '我从不说「跟着我走向毁灭」,我永远说秩序、荣光、重新伟大。带一个国家走进深渊的人,出发那天用的为什么总是最动听的词?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-strongman-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一程,该怎么看我的「成功」?有一个真问题,等你来答。\n\n我夺权,靠的几乎全是合法的台阶:选票、合法任命、宪法第 48 条、议会自己投票通过的授权法案。每一步,单看都「合规」。\n\n一种说法:既然每一步都合法,那真正的问题就不在我身上,在那套有漏洞的制度:是宪法留了第 48 条这个口子,是议会自己举的手。换个人站上那个台子,只要漏洞还在,结果也差不多。我不过是抓住了机会的那个人。\n\n另一种说法:制度有漏洞是真的,但漏洞不会自己走下楼梯。是我,主动去制造紧急、去指认敌人、去把恐惧变成选票。把一切推给「制度」,等于替每一个踩着台阶往上爬的人开脱。能动性,是真实存在的。\n\n这两边不是「制度有罪」对「个人有罪」。它们是同一场灾难的两条腿,有漏洞的制度,和踩着漏洞往上爬的人,缺一条都摔不下来。\n\n这个问题,人们到今天还在两边争。你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Having walked my course, how should you see my success? There is a real question waiting for you.\n\nI seized power almost entirely by legal steps: votes, a legal appointment, the constitution Article 48, the Enabling Act passed by parliament own vote. Each step, taken alone, was within the rules.\n\nOne view: since every step was legal, the real problem lies not in me but in that flawed system. The constitution left the Article 48 gap; parliament raised its own hands. Put another man on that platform, and as long as the flaw remains, the result is much the same. I was only the man who seized the chance.\n\nThe other view: the system flaws are real, but a flaw does not walk down the stairs by itself. It was I who chose to manufacture the emergency, to name the enemy, to turn fear into votes. To push everything onto the system excuses every man who climbed the staircase. Agency truly exists.\n\nThese are not the system is guilty against the man is guilty. They are two legs of one disaster: a flawed system, and a man who climbs the flaw, and without either leg it would not have fallen.\n\nPeople still argue both sides of this today. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis: 真问题: 强人「成功」该归咎制度漏洞还是个人能动性 + 夺权全靠合法台阶 (选票/合法任命/第 48 条/授权法案) 每步单看合规 + 一种说法 (每步合法→问题在有漏洞的制度/换个人结果也差不多/我只是抓机会的人) + 另一种说法 (漏洞不会自己走下楼梯/是我主动制造紧急指认敌人把恐惧变选票/推给制度=替每个爬台阶的人开脱/能动性真实存在) + 同一灾难两条腿 (漏洞制度+踩漏洞的人缺一不摔) + neutral AP 老师 + 想 30 秒 + 两边都站得住',
      engagementHook: '我每一步夺权都「合法」:那该怪有漏洞的制度,还是怪踩着漏洞往上爬的我?有漏洞的制度,和利用漏洞的人,你觉得哪一条腿更该负责?你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'iwt-strongman-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的,是施害者这一边的声音。\n\n请记住:这只是一边,而且是最会自我辩解的一边。我讲的「我只是抓住机会」「我从不开枪」「每一步都合法」,听上去甚至有点道理:这正是我这种视角最危险的地方,它能把自己讲得通,能让你不知不觉觉得「换我也许也会这样」。\n\n但这一遍里,有两群人几乎没开口。一群,是那些拼命想用议会和法律挡住我、最后失败了的民主派:他们投了反对票,人数远远不够。还有一群,是台下那几万张脸里的某一个:那个又冷又饿、在我的集会里第一次觉得自己不孤独的普通人。等你换上他们的视角,他们会狠狠地挑战你刚才听我说的每一句。\n\n最后留一个东西给你。还记得那一夜广场上的探照灯和鼓点吗?在我眼里,那是我亲手造出的「团结」。\n\n换个视角再走一遍,你会从另一个人的耳朵里、眼睛里,再撞见它一次。到那时,它对你也许就不再是「团结」了。',
        en: 'What you just heard was the voice of one side: the perpetrator.\n\nRemember: it is only one side, and the side best at defending itself. My talk of I only seized the chance, of I never fire a shot, of every step was legal, can even sound a little reasonable, and that is exactly the most dangerous thing about my view. It can make itself make sense, and make you quietly think, maybe I would have done the same.\n\nBut in this pass, two groups barely spoke. One is the democrats who fought, with parliament and law, to block me, and failed. They voted no, and there were far too few of them. The other is one of those tens of thousands of faces below: an ordinary person, cold and hungry, who at my rally felt for the first time that he was not alone. When you switch to their perspectives, they will challenge, hard, every sentence you just heard from me.\n\nAnd one last thing to leave with you. Do you remember the searchlights and the drumbeat in the square that night? In my eyes, that was the unity I made with my own hands.\n\nWalk this through once more from another perspective, and you will meet it again, through someone else ears and eyes. By then it may no longer be unity to you.',
      },
      deliverGoal: 'N11 close/meta: 你听的是施害者一边 (最会自我辩解/能把自己讲得通让你觉得「换我也会这样」最危险) + 还没听到两群人: 失败的民主派 (用议会法律挡我/投反对票人数远不够) + 台下某一个又冷又饿在集会第一次觉得不孤独的普通人 (=另两 lens 预告) 会挑战你听的每句 + 暗示集会探照灯/鼓点会从另一视角再撞见一次「也许不再是团结」(不直接解释 echo)',
      engagementHook: '施害者最危险的地方,是他能把自己讲得通,让你觉得「换我也许也会这样」。你听完我这一边,最想去问那个失败的民主派、那个在集会里第一次不孤独的普通人什么问题?',
      expectsRealAnswer: true,
    },
  ],
};

export var democratLens = {
  id: 'democrat-mediator',
  name: 'The Democrat Who Tried to Stop It',
  nameCn: '想守住共和的民主派',
  role: 'lonely-mediator',
  perspectiveTag: 'gatekeeper-who-failed',
  icon: '⚖️',
  description: {
    cn: '1920 到 30 年代魏玛德国一个温和的民主派议员,虚构桥接人物,但处境完全写实。他没有名字,因为他代表的是一整代眼睁睁看着自己的共和国垮掉、却无力阻止的人。他相信议会、相信法律、相信讲道理能解决问题。左边是想搞苏式革命的激进派,右边是想砸烂议会的纳粹和民族主义者,两边都在街头养着武装队伍。夹在中间的他越来越薄。这一遍让你站在制度守门人的位置,体会一个最沉重的问题:当多数人因恐惧和愤怒而想要一个强人时,规则本身挡得住吗?',
    en: 'A moderate democratic member of parliament in Weimar Germany in the 1920s and 30s, a bridging character, but the situation is fully real. He has no name, because he stands for a whole generation that watched its own republic fall and could not stop it. He believes in parliament, in law, in reasoning things through. On the left, radicals who wanted a Soviet-style revolution; on the right, Nazis and nationalists who wanted to smash parliament. Both kept armed gangs in the streets. Squeezed in the middle, he grew thinner and thinner. This pass puts you in the place of the gatekeeper of the system and raises the heaviest question: when most people, out of fear and anger, want a strongman, can the rules themselves hold him back?',
  },
  storyboard: [
    {
      id: 'iwt-democrat-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我坐在议会大厅里。窗外,街上又在打架了。\n\n左边一群人喊着要革命,右边一群人穿着制服、举着旗,两边都带着棍子和枪。而我,坐在中间这一排,手里攥着一份发言稿,讲的是预算、是程序、是妥协。\n\n说出来你可能觉得可笑:在所有人都红了眼的时候,我还在相信讲道理。\n\n我是魏玛德国一个温和的民主派议员。我不告诉你我的名字,因为我不是一个人:我代表的,是一整代眼睁睁看着自己的共和国垮掉、却没能拦住的人。\n\n这一遍,你坐进我这个位置。你会做一件听起来最体面、最后却最让人心碎的事:你会用规则、用程序、用一张张选票,去挡一个比规则更凶猛的东西。\n\n你会拼尽全力。你也会失败。这一遍,讲的是失败者的那一边。',
        en: 'I sit in the parliament hall. Outside the window, there is fighting in the street again.\n\nOn the left a crowd shouts for revolution; on the right a crowd in uniform, raising flags, and both carry clubs and guns. And I sit in the middle row, clutching a speech about the budget, about procedure, about compromise.\n\nYou may find it laughable: when everyone else has gone red in the eye, I still believe in reasoning things through.\n\nI am a moderate democratic deputy in Weimar Germany. I will not tell you my name, because I am not one man. I stand for a whole generation that watched its own republic fall and could not stop it.\n\nThis pass puts you in my seat. You will do the most respectable thing, and in the end the most heartbreaking: you will use rules, procedure, and votes to block something fiercer than any rule.\n\nYou will try with all your strength. And you will fail. This pass tells the side of the one who lost.',
      },
      deliverGoal: 'N1 hook: 议会大厅窗外街上又在打架 (左喊革命/右穿制服举旗/两边带棍枪/我在中间攥发言稿讲预算程序妥协) + 「所有人红了眼我还相信讲道理」+ 不给名字 (代表一整代眼睁睁看共和国垮却没拦住的人) + 这一遍视角 (用规则程序选票挡比规则更凶猛的东西/拼尽全力也会失败/失败者的一边)',
      engagementHook: '所有人都红了眼,只有我还相信讲道理。你愿意站在一个注定失败的守门人这一边,看他怎么输掉自己的共和国吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-democrat-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说清我守的是什么,你才懂我后来为什么输得那么不甘。\n\n第一次世界大战之后,德国战败,旧帝制垮了。1919 年,我们建起一个全新的共和国,首都在魏玛,所以叫魏玛共和国。\n\n那部新宪法,在当时是全世界最先进的之一:人人有选举权,妇女也能投票,言论、集会、结社的自由都写了进去。我们这一代人,真心相信我们正在给德国造一个自由、文明、讲法治的未来。\n\n你得明白,我不是一个天真的理想主义者。我知道这个共和国一出生就病着:背着凡尔赛条约的屈辱,扛着天文数字的赔款,经历过 1923 年那场把中产积蓄烧光的恶性通胀。\n\n可即便这样,我还是相信:再难,也要在规则里解决。一颗子弹解决不了的问题,一次耐心的妥协也许可以。\n\n这份信念,是我最大的力量。后来我才明白,它也是我最大的破绽。',
        en: 'First let me say clearly what I was guarding, so you understand why I later lost so bitterly.\n\nAfter World War I, Germany was defeated and the old empire collapsed. In 1919 we built a brand-new republic, with its capital at Weimar, and so it was called the Weimar Republic.\n\nThat new constitution was one of the most advanced in the world at the time: everyone had the vote, women could vote too, and freedom of speech, assembly, and association were written in. My generation truly believed we were building Germany a free, civilized, law-governed future.\n\nYou must understand, I am not a naive idealist. I knew this republic was sick from birth, carrying the humiliation of Versailles, bearing an astronomical reparations bill, having lived through the 1923 hyperinflation that burned the middle class savings to nothing.\n\nEven so, I still believed: however hard it is, it must be solved within the rules. A problem a bullet cannot solve, a patient compromise perhaps can.\n\nThis belief was my greatest strength. Only later did I understand it was also my greatest weakness.',
      },
      deliverGoal: 'N2 setup: 守的是什么 + 一战战败旧帝制垮 → 1919 建魏玛共和国 (首都魏玛) + 新宪法当时全世界最先进之一 (人人选举权/妇女投票/言论集会结社自由) + 这一代真信在给德国造自由文明法治的未来 + 「我不天真」: 知道共和国一出生就病着 (凡尔赛屈辱/天文赔款/1923 恶性通胀烧光中产积蓄) + 仍信「再难也要在规则里解决/子弹解决不了的耐心妥协也许可以」+ 这份信念是最大力量也是最大破绽',
      engagementHook: '我相信再难也要在规则里解决:这是我最大的力量,后来才明白也是我最大的破绽。一个人最珍贵的信念,会不会同时是他最致命的弱点?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-democrat-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '现在我告诉你,我守的这道门,两边各站着什么人。\n\n左边,是想照搬苏联那一套、要搞暴力革命的激进派。右边,是纳粹和民族主义者,他们公开说:议会是垃圾,民主是软弱,要的是一个强人、一面旗、一个声音。\n\n这两边有一个吓人的共同点:他们都不要规则。左边想用革命砸碎它,右边想用强人取代它。而我守的这套议会民主,恰恰是要靠规则才能活的东西。\n\n更要命的是,这两边都在街头养着自己的武装队伍。游行、斗殴、流血,几乎是家常便饭。我在大厅里讲程序的时候,窗外是真刀真枪。\n\n你现在该感觉到我有多孤独了:我不是在两个坏选项里选一个,我是想守住「还能讲道理」这件事本身。可讲道理,需要对面也愿意讲道理:而我面对的两边,都已经不想讲了。',
        en: 'Now I tell you who stood on each side of the door I guarded.\n\nOn the left, radicals who wanted to copy the Soviet model and stage a violent revolution. On the right, the Nazis and nationalists, who said openly: parliament is garbage, democracy is weakness, what we want is a strongman, one flag, one voice.\n\nThese two sides shared one frightening thing: neither wanted rules. The left wanted to smash them by revolution; the right wanted to replace them with a strongman. And the parliamentary democracy I guarded was the very thing that can only live by rules.\n\nWorse still, both sides kept their own armed gangs in the streets. Marches, brawls, bloodshed were almost daily. While I spoke of procedure in the hall, outside the window were real blades and real guns.\n\nNow you should feel how alone I was. I was not choosing between two bad options. I was trying to guard the very thing of we can still reason with each other. But reasoning needs the other side to be willing to reason too, and both sides I faced no longer wanted to.',
      },
      deliverGoal: 'N3 setup: 守的门两边各站什么人 + 左边: 想照搬苏联搞暴力革命的激进派 + 右边: 纳粹和民族主义者 (公开说议会是垃圾/民主是软弱/要强人一面旗一个声音) + 吓人共同点: 两边都不要规则 (左想砸碎/右想取代) 而议会民主恰要靠规则才能活 + 两边都在街头养武装队伍 (游行斗殴流血家常便饭/我讲程序时窗外真刀真枪) + 多孤独: 不是两个坏选项选一个,是想守住「还能讲道理」本身 + 但讲道理需对面也愿意,两边都不想讲了',
      engagementHook: '左边想砸碎规则,右边想取代规则,而我守的民主恰恰只能靠规则活着。当争论的两边都不愿再讲道理时,「讲道理」这件事还守得住吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-democrat-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。一场更大的风暴,刚刚砸下来。\n\n1929 年,大萧条来了。美国股市崩盘,顺着金本位捆在一起的世界经济,危机一路烧到德国。美国人一抽回贷款,德国经济瞬间塌方。到 1932 年,失业的人达到约六百万。\n\n你坐在议会里,眼看着选民一个一个离你而去。\n\n你跟一个排了三小时队、还是没领到救济的工人讲「我们需要耐心,需要走程序」:你看着他的眼睛,你自己都觉得这话苍白得可耻。\n\n因为强人那边喊的是另一套:「都是凡尔赛害的!都是叛徒害的!跟我走,我立刻让你吃饱、让德国重新伟大!」\n\n你心里清楚他在骗人。可一个又冷又饿的人,要的不是真话,是希望:哪怕是假的希望。\n\n这就是你这一刻最绝望的发现:在饥饿面前,「耐心」「程序」「妥协」这些你最珍视的词,几乎一文不值。',
        en: 'Now you are me. A greater storm has just come down.\n\nIn 1929 the Great Depression arrived. The American stock market crashed, and along the world economy tied together by the gold standard, the crisis burned all the way to Germany. The moment America pulled back its loans, the German economy collapsed in an instant. By 1932, the unemployed numbered about six million.\n\nYou sit in parliament and watch the voters leave you, one by one.\n\nYou tell a worker who queued three hours and still got no relief, we need patience, we need to follow procedure, and looking into his eyes, even you feel the words are shamefully thin.\n\nBecause the strongman side shouts something else: it was all Versailles! all the traitors! follow me, and I will fill your belly at once and make Germany great again!\n\nYou know in your heart he is lying. But a man cold and hungry does not want the truth. He wants hope, even false hope.\n\nThis is your most despairing discovery in this moment: in the face of hunger, the words you treasure most, patience, procedure, compromise, are worth almost nothing.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak: 1929 大萧条 (美股崩盘/沿金本位烧到德国/美国抽回贷款德国经济塌方/1932 失业约 600 万) + 你眼看选民一个个离去 + 跟排三小时没领到救济的工人讲「耐心走程序」自己都觉苍白可耻 + 强人那边喊另一套 (都是凡尔赛/叛徒害的/跟我走立刻吃饱让德国重新伟大) + 你知他骗人但又冷又饿的人要的不是真话是希望哪怕假的 + 最绝望发现: 饥饿面前「耐心程序妥协」几乎一文不值',
      engagementHook: '一个又冷又饿的人,要的不是真话,是希望,哪怕是假的希望。当你只能给真话、对手却能给假希望时,你拿什么和他争?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-democrat-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '接下来发生的事,是民主最残酷的一个悖论,我至今想起来还发冷。\n\n1932 年,大萧条最深的时候,纳粹党成了议会第一大党。\n\n你听清楚这句话:不是政变,不是夺权,是选票。是千千万万个又怕又怒的选民,自己把票投给了一个公开说要消灭民主的党。\n\n这就是那个悖论:民主允许人们投票,选出想要消灭民主的人。\n\n我和我的同僚们,做了我们能做的一切。我们试着组阁,试着拉拢中间派,试着用一切宪法手段,把那个强人挡在总理的位子外面。我们一次次谈判、一次次妥协、一次次往后退,想着「再退一步,也许就能稳住」。\n\n可经济还在崩,街头还在乱,选民还在愤怒。我们越退,对面越进。\n\n回头看,我最痛的不是我们没拼。是我们拼了,用尽了规则,而规则,挡不住一个被多数人的恐惧推着往上走的人。',
        en: 'What happened next is one of democracy cruelest paradoxes, and it still chills me to recall.\n\nIn 1932, at the depth of the Depression, the Nazi Party became the largest party in parliament.\n\nHear this sentence clearly: not a coup, not a seizure, but votes. Millions of frightened, angry voters cast their ballots, themselves, for a party that openly said it would destroy democracy.\n\nThis is the paradox: democracy lets people vote for those who want to destroy democracy.\n\nMy colleagues and I did everything we could. We tried to form governments, to win over the center, to use every constitutional means to keep that strongman out of the chancellor seat. We negotiated again and again, compromised again and again, gave ground again and again, thinking, one more step back and perhaps we can steady it.\n\nBut the economy kept collapsing, the streets kept burning, the voters kept raging. The more we retreated, the more the other side advanced.\n\nLooking back, my deepest pain is not that we did not try. It is that we did try, we used up the rules, and the rules could not hold back a man pushed upward by the fear of the majority.',
      },
      deliverGoal: 'N5 story: 民主最残酷悖论 + 1932 大萧条最深时纳粹成议会第一大党 + 「不是政变不是夺权是选票/千万又怕又怒的选民自己把票投给公开要消灭民主的党」+ 悖论: 民主允许人们投票选出想消灭民主的人 + 我和同僚做了一切 (组阁/拉中间派/用宪法手段挡强人于总理位外/一次次谈判妥协后退想再退一步稳住) + 经济崩街头乱选民怒/越退对面越进 + 最痛: 不是没拼是拼了用尽规则,规则挡不住一个被多数人恐惧推上去的人',
      engagementHook: '民主允许人们投票,选出想要消灭民主的人。当大多数人因恐惧和愤怒、用合法的选票要一个强人时,规则本身还挡得住吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-democrat-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '该说那个夜晚了。1933 年 2 月 27 日。\n\n那天晚上,我本来在家。有人慌慌张张跑来敲门:国会大厦,着火了。\n\n国会大厦,就是我们开会、辩论、表决的那座楼。它在烧。\n\n我赶过去的时候,远远就看见火光,还有别处,广场那边,另一种光:强人的支持者在集会,探照灯把夜空切成几道白柱,鼓点一下一下敲着。同一片夜空,一边是议会在烧,一边是欢呼的人海。\n\n那一刻我心里咯噔一下:坏了。这把火,不会只烧掉一座楼。\n\n果然,第二天,总统就依据宪法第 48 条,签发了《国会纵火法令》。一夜之间,言论、集会、新闻自由,全没了。我的同僚开始被抓。\n\n他们说这是为了应对「紧急状态」。可我看得清清楚楚:那个为保护我们而写进宪法的「紧急按钮」,刚刚被按下,按它的手,正是要拆掉我们的人。',
        en: 'It is time to speak of that night. February 27, 1933.\n\nThat evening I was home. Someone came pounding at the door in a panic: the Reichstag is on fire.\n\nThe Reichstag, the very building where we met, debated, and voted. It was burning.\n\nWhen I rushed over, I saw the firelight from afar, and elsewhere, over by the square, another kind of light: the strongman supporters were rallying, searchlights cutting the night sky into white columns, the drumbeat striking, one beat at a time. Under one night sky, on one side parliament burned, on the other a cheering sea of people.\n\nIn that moment something dropped in my heart: this is bad. This fire will not burn only one building.\n\nSure enough, the next day the president, under Article 48, signed the Reichstag Fire Decree. Overnight, freedom of speech, assembly, the press, all gone. My colleagues began to be arrested.\n\nThey said it was to meet a state of emergency. But I saw it clearly: that emergency button written into the constitution to protect us had just been pressed, and the hand pressing it belonged to the very men who meant to tear us down.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens: 1933.2.27 夜 + 有人敲门: 国会大厦着火 (就是我们开会辩论表决的楼) + 赶去看见火光 + 集会意象 (民主派角度: 广场那边探照灯切夜空/鼓点/欢呼人海 vs 议会在烧,同一片夜空两种光,他看成「理性被淹没/坏了」) + 2.28 总统依第 48 条签《国会纵火法令》一夜没了言论集会新闻自由/同僚被抓 + 说是应对紧急状态/我看清: 为保护我们写进宪法的紧急按钮被按下,按它的手正是要拆掉我们的人。只碰集会意象从民主派角度',
      engagementHook: '同一片夜空下,一边是议会在烧,一边是欢呼的人海。那个为保护我们而写进宪法的「紧急按钮」,被要拆掉我们的人按下了:这一步,还有救吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-democrat-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '然后是我这一生最重、也最无力的一次投票。\n\n1933 年 3 月 23 日。议会要表决一项叫《授权法案》的法律。它的内容,等于让政府今后可以不经议会、甚至违反宪法地立法。\n\n说白了:这是要议会自己投票,把立法权交出去,把自己废掉。\n\n你能想象那个大厅里的气氛吗?门外是武装人员,空气里全是恐吓。已经有同僚被抓了。投反对票,意味着把自己暴露在枪口和牢房面前。\n\n现在你就是我。轮到你举手了。\n\n你举了反对的那只手。你和身边少数几个人,投下了「不」。\n\n可你抬头一看就知道:不够。远远不够。多数,早已经倒向了对面。\n\n那一刻你彻底明白了一件事:民主真正的死法,不是被外面的坦克轰开,而是在这间挂着宪法的大厅里,被一群举手的人,合法地、安静地,投票通过的。\n\n而你,只是那不够多的「不」当中的一个。',
        en: 'Then came the heaviest, most powerless vote of my life.\n\nMarch 23, 1933. Parliament was to vote on a law called the Enabling Act. Its content amounted to letting the government, from then on, make laws without parliament, even against the constitution.\n\nIn plain words: parliament was to vote, itself, to hand over lawmaking power and abolish itself.\n\nCan you imagine the air in that hall? Armed men outside the doors, intimidation everywhere. Colleagues had already been arrested. To vote no meant exposing yourself to the gun and the cell.\n\nNow you are me. It is your turn to raise your hand.\n\nYou raised the hand that voted no. You and a few others around you cast a no.\n\nBut one look up and you knew: not enough. Far from enough. The majority had long since fallen to the other side.\n\nIn that moment you understood one thing completely: the true death of democracy is not blasted open by tanks outside. It is, in this hall with the constitution on the wall, passed by a vote, legally and quietly, by a crowd raising their hands.\n\nAnd you are only one of the not-enough nos.',
      },
      deliverGoal: 'N7 story: 一生最重最无力的投票 + 1933.3.23《授权法案》(政府可不经议会甚至违宪立法) = 议会自己投票交出立法权废掉自己 + 大厅气氛 (门外武装人员/恐吓/已有同僚被抓/投反对=暴露在枪口牢房前) + 你就是我轮到举手 + 你举了反对的手投「不」+ 抬头一看: 不够远远不够多数早倒向对面 + 彻底明白: 民主真正的死法不是坦克轰开,是在挂宪法的大厅被一群举手的人合法安静投票通过 + 你只是不够多的「不」当中一个',
      engagementHook: '你举起了反对的手,可抬头一看就知道:不够,远远不够。当你拼尽全力却注定是少数派时,这一票还值得投吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-democrat-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '授权法案通过之后,发生的事,快得让人喘不过气。\n\n几个月内,其他所有政党被一个个取缔。工会被解散。报纸被管起来。像我这样投过反对票、说过反对话的人,只剩下三条路:流亡、坐牢,或者闭嘴。\n\n我亲眼看着那个我们用了十几年想建起来的自由共和国,被拆得只剩一个空壳:一党、一个领袖、一个声音。\n\n我得诚实地承认我们这些守门人的失败,而且不替自己开脱。\n\n有人后来问:你们当初为什么不联手?左边和我们这些中间派,如果早点放下成见、一起挡住强人,会不会就不一样了?\n\n这个问题,我没有轻松的答案。我们太分裂了,我们彼此提防,甚至有人觉得对面那个强人,总好过左边那场革命。我们一直以为还有下一次选举、还有时间。\n\n等我们终于明白「这一次不一样」的时候,投票的大厅,已经不再属于我们了。',
        en: 'After the Enabling Act passed, what happened came so fast it took the breath away.\n\nWithin months, every other party was banned, one by one. Unions were dissolved. Newspapers were put under control. Men like me, who had voted no and spoken against it, had only three roads left: exile, prison, or silence.\n\nI watched with my own eyes as the free republic we had spent more than a decade trying to build was torn down to an empty shell: one party, one leader, one voice.\n\nI must honestly admit our failure as gatekeepers, and not excuse myself.\n\nSomeone later asked: why did you not join forces? If the left and the centrists like us had set aside our grievances earlier and blocked the strongman together, might it have been different?\n\nTo this I have no easy answer. We were too divided. We mistrusted each other; some even felt that strongman across the aisle was better than the revolution on the left. We kept thinking there would be a next election, that there was still time.\n\nBy the time we finally understood that this time is different, the voting hall no longer belonged to us.',
      },
      deliverGoal: 'N8 story: 授权法案后快得喘不过气 + 几个月内其他政党一个个取缔/工会解散/报纸被管/投过反对的人只剩三路 (流亡/坐牢/闭嘴) + 亲眼看十几年想建的自由共和国被拆成空壳 (一党一领袖一声音) + 诚实承认守门人失败不开脱 + 有人后来问为什么不联手 (左和中间派早放下成见一起挡会不会不一样) + 无轻松答案: 太分裂 (彼此提防/有人觉得强人好过左边革命/一直以为还有下次选举还有时间) + 等明白「这次不一样」投票的大厅已不属于我们',
      engagementHook: '我们一直以为还有下一次选举、还有时间:等明白「这一次不一样」时,投票的大厅已经不属于我们了。面对一个想消灭民主的人,本该联手的人为什么没能联手?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-democrat-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步,给你看一张更大的地图:同一个二十年里,地球另一端的中国。\n\n我守的是民主在危机里崩塌;而 1919 到 1939 这二十年,中国在经历另一种「秩序真空」。\n\n说来你也许意外:点燃这一切的,是同一份《凡尔赛条约》。它把德国在山东的权益,不还给中国,反而判给了日本。消息传到北京,1919 年 5 月 4 日,学生涌上街头:这就是五四运动。同一份条约,在德国点燃的是屈辱与复仇,在中国点燃的却是民族觉醒。\n\n那时的中国,中央政府孱弱,军阀割据混战,也是一种「旧秩序垮了、新秩序没立」的困境。后来国民党发动北伐,1928 年名义上统一了中国。同样是回应混乱,欧洲走向一个强人收权,中国走的却是另一条路。\n\n而我守的欧洲这边那场极权,它伸出的刀,最后真切地落在了中国身上:1931 年的九一八事变,1937 年的卢沟桥事变,日本全面侵华,中国进入艰苦的抗战。\n\n你看,欧洲的极权和远东的军国,不是两件不相干的事。它们是同一场全球风暴的两个引信。',
        en: 'Let me step back and show you a larger map: the China at the other end of the earth, in these same twenty years.\n\nWhat I guarded was democracy collapsing in crisis. And across these twenty years, 1919 to 1939, China was living through a different kind of order vacuum.\n\nThis may surprise you: what lit all of it was the same Treaty of Versailles. It refused to return Germany rights in Shandong to China and handed them to Japan instead. When the news reached Beijing, on May 4, 1919, students flooded the streets, and this was the May Fourth Movement. The same treaty lit humiliation and revenge in Germany, but national awakening in China.\n\nChina then had a weak central government and rival warlords fighting one another, also a dilemma of the old order has fallen, the new not yet built. Later the Nationalists launched the Northern Expedition and nominally reunified China in 1928. Both were answers to chaos, yet Europe turned to one strongman gathering power, while China walked another road.\n\nAnd the totalitarianism I guarded against, here in Europe, stretched out a blade that finally fell, truly, on China: the Mukden Incident of 1931 (Japan staged a pretext to seize northeast China), the Marco Polo Bridge Incident of 1937 (the clash that began Japan full invasion of China), and China entering its bitter war of resistance.\n\nYou see, Europe totalitarianism and the Far East militarism were not two unrelated things. They were two fuses of one global storm.',
      },
      deliverGoal: 'N9 zoom-out + §8 中国桥注入 (mediator): 同一二十年地球另一端中国「秩序真空」+ 点燃的是同一份凡尔赛条约 (德国山东权益不还中国判给日本/1919.5.4 北京学生上街=五四运动/同一条约在德国点燃屈辱复仇在中国点燃民族觉醒) + 中央孱弱军阀割据混战 (旧秩序垮新秩序没立) + 国民党北伐 1928 名义统一 + 欧洲极权伸出的刀落在中国 (1931 九一八/1937 卢沟桥/日本全面侵华/中国进入抗战) + 欧洲极权与远东军国不相干 → 同一场全球风暴两个引信。真中国段用中文术语 (五四/军阀/北伐/抗战/卢沟桥)',
      engagementHook: '同一份《凡尔赛条约》,在德国点燃了复仇,在中国点燃了五四的觉醒。把同一个二十年里地球两端放一起看,你看见的是两件不相干的事,还是同一场风暴的两个引信?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-democrat-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,该怎么评我们这些守门人?有一个真问题,等你来答。\n\n面对一个正在合法地拆毁民主的强人,我们始终只用合法、温和的手段去挡,谈判、妥协、投票、走程序。\n\n一种说法:这正是我们失败的根源。我们太守规矩了。对面早就不讲规则了,我们却还死抱着程序。当有人要掀桌子时,你还在桌边讲礼貌,那不是高尚,那是天真,甚至是失职。该早点联手、早点用更强硬的手段。\n\n另一种说法:可我们一旦也抛弃规则、用非常手段去对付他,我们守的那个东西,法治、民主,不就已经被我们自己先弄死了吗?守门人若先破门,门还有什么意义?我们的失败,也许恰恰是我们没有变成我们反对的样子。\n\n这两边,不是「软弱」对「坚守」。是同一种忠诚的两张脸:对规则的忠诚,既是我们最后的尊严,也可能是我们最大的破绽。\n\n这道题,没有一个能让所有人都心服的答案。你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Having walked my whole life, how should you judge us gatekeepers? There is a real question waiting for you.\n\nFacing a strongman who was legally dismantling democracy, we used only legal, moderate means to block him: negotiation, compromise, votes, procedure.\n\nOne view: this was the very root of our failure. We were too rule-bound. The other side had long abandoned rules, yet we still clung to procedure. When someone is about to flip the table and you are still being polite at the edge of it, that is not nobility, it is naivety, even dereliction. We should have joined forces sooner, used harder means sooner.\n\nThe other view: but the moment we too abandoned the rules and used extraordinary means against him, the very thing we guarded, the rule of law, democracy, would we not have killed it ourselves first? If the gatekeeper breaks the door first, what does the door still mean? Our failure may have been precisely that we did not become the thing we opposed.\n\nThese are not weakness against steadfastness. They are two faces of one loyalty: loyalty to the rules, which was both our last dignity and perhaps our greatest weakness.\n\nThere is no answer here that satisfies everyone. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis: 真问题: 面对合法拆毁民主的强人,守门人始终只用合法温和手段是失败根源还是最后尊严 + 一种说法 (太守规矩/对面早不讲规则我们死抱程序/有人掀桌你还讲礼貌=天真甚至失职/该早联手早用强硬手段) + 另一种说法 (一旦也抛弃规则用非常手段,守的法治民主不就被自己先弄死/守门人先破门门还有什么意义/失败恰是没变成反对的样子) + 同一种忠诚两张脸 (对规则的忠诚=最后尊严也是最大破绽) + neutral AP 老师 + 想 30 秒 + 两边都站得住',
      engagementHook: '对面早就不讲规则了,我们却还死抱着程序:这是天真,还是最后的尊严?为了打败一个想消灭民主的人,你愿意先抛弃民主的规则吗?你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'iwt-democrat-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,一个相信讲道理、用尽规则、最后眼看共和国在自己手里垮掉的人,你会怎么评价这样一种失败?\n\n我尽了一个守门人能尽的本分,投下了那张不够多的「不」。可门,还是被推开了。我是失败了,还是守住了某种比胜负更重要的东西?这个,我留给你称。\n\n不过先记住:你这一遍,听的只是想阻止它、却失败了的那一边。\n\n那个站在高台上的强人,会把我这场「失败」讲成他的「合法胜利」:在他眼里,我不过是个挡路的、迂腐的老古董。而那个又冷又饿、把票投给他的普通人,根本不会觉得自己在拆毁什么,他只觉得自己终于找到了希望。你还没听过他们的声音。\n\n换个视角再走一遍,你刚才对我的判断,站不站得住?\n\n再想最后一步:今天,如果有人用完全合法的方式,一点点掏空你身边的规则:你会像我一样,坚持在规则里挡他;还是会觉得,这种坚持,太天真了?',
        en: 'Having walked my whole life, a man who believed in reasoning, used up the rules, and in the end watched the republic fall in his own hands, how would you judge such a failure?\n\nI did the duty a gatekeeper could do, and cast that not-enough no. Yet the door was pushed open all the same. Did I fail, or did I hold something more important than winning or losing? That I leave for you to weigh.\n\nBut first, remember: this pass, you heard only the side that tried to stop it and failed.\n\nThe strongman on the high platform would tell my failure as his legal victory. In his eyes I was only an obstacle, a stuffy relic. And the ordinary person, cold and hungry, who gave him his vote, would not feel he was tearing anything down at all. He only felt he had finally found hope. You have not yet heard their voices.\n\nRun it again through another lens, and see whether the judgment you just made about me still holds.\n\nThen take one last step: today, if someone, in a completely legal way, hollowed out the rules around you, little by little, would you, like me, insist on blocking him within the rules? Or would you feel that such insistence is too naive?',
      },
      deliverGoal: 'N11 close/meta: 评价这种失败 (相信讲道理/用尽规则/眼看共和国在手里垮 → 尽了守门人本分投了不够多的「不」/门还是被推开/失败了还是守住了比胜负更重要的东西) + 还没听到: 高台强人会把我「失败」讲成他「合法胜利」(我是挡路迂腐老古董) + 又冷又饿投票给他的普通人不觉自己拆毁什么只觉找到希望 (=另两 lens) + 换视角再走判断站不站得住 + transfer「今天有人用完全合法方式一点点掏空规则,你坚持在规则里挡还是觉得太天真」',
      engagementHook: '我是失败了,还是守住了某种比胜负更重要的东西?今天,如果有人用完全合法的方式一点点掏空你身边的规则,你会像我一样在规则里挡他,还是觉得这种坚持太天真?',
      expectsRealAnswer: true,
    },
  ],
};

export var ordinaryCitizenLens = {
  id: 'ordinary-citizen-who-said-yes',
  name: 'The One Who Said Yes',
  nameCn: '投了是票、又或沉默的普通人',
  role: 'receiving-end',
  perspectiveTag: 'ordinary-person-in-the-crowd',
  icon: '🕯️',
  description: {
    cn: '1930 年代初一个普通德国小城里的年轻人,虚构桥接人物,身份写实。他没有确切的名字,因为关键不在于他是谁,而在于他可能就是任何人,可能就是我们。父亲一战上过前线,1929 年后失业,家里靠土豆和面包过日子,1923 年攒下的那点钱早被通胀烧成了废纸。他不是恶人,他甚至不太关心政治,他只是又冷又饿又怕,看不到未来。这一遍,你站在最普通、最「无辜」的位置,亲身体会一件最沉重的事:自由很少是被人一把抢走的,它更常是被普通人在恐惧中,一点点交出去的。',
    en: 'A young man in an ordinary German small town in the early 1930s, a bridging character, with a realistic role. He has no exact name, because the point is not who he was but that he could be anyone, could be us. His father served at the front in WWI; after 1929 his father lost his job; the family lived on potatoes and bread; the little money saved before 1923 had long been burned to nothing by inflation. He is not an evil man. He does not even care much about politics. He is just cold, hungry, afraid, and sees no future. This pass puts you in the most ordinary, most innocent position, to feel, in your own body, the heaviest thing: freedom is rarely snatched away in one grab. Far more often it is handed over, a little at a time, by ordinary people in fear.',
  },
  storyboard: [
    {
      id: 'iwt-citizen-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我家的炉子,已经三天没生火了。\n\n外面在下雪。屋里和屋外一样冷。桌上是两个土豆,那是今天全家的晚饭。我盯着它们,肚子叫得很响。\n\n我是 1930 年代初,德国一个普通小城里的年轻人。我不告诉你我的名字:因为关键不是「我是谁」。关键是:我可能就是任何一个人。我可能,就是你。\n\n你大概以为,这一遍要讲的是一个大人物、一个做大恶的人。不是。这一遍讲的是我:一个不太关心政治、只想吃饱饭、只想日子能过下去的普通人。\n\n可历史上最可怕的那些事,偏偏不是只靠那几个站在台上的人就能办成的。它们需要成千上万个我。\n\n这一遍,你坐进我这个位置。你会发现:把自由交出去的,有时候不是恶人,而是一个又冷又饿、只想有人能救救他的好人。',
        en: 'The stove in my home has not been lit for three days.\n\nOutside it is snowing. Inside it is as cold as out. On the table are two potatoes, the whole family supper for today. I stare at them, my stomach growling loud.\n\nI am a young man in an ordinary German small town in the early 1930s. I will not tell you my name, because the point is not who I am. The point is: I could be anyone. I could be you.\n\nYou probably think this pass will tell of a great figure, a man who did great evil. It will not. This pass tells of me: an ordinary person who does not care much about politics, who just wants a full belly, who just wants the days to be livable.\n\nBut the most terrible things in history cannot be done by the few men on the stage alone. They need thousands upon thousands of me.\n\nThis pass puts you in my seat. You will find: the one who hands freedom over is sometimes not an evil man, but a good man who is cold and hungry and only wants someone to save him.',
      },
      deliverGoal: 'N1 hook: 炉子三天没火/外面下雪屋里一样冷/桌上两个土豆全家晚饭/肚子叫 + 1930 年代初德国普通小城年轻人 + 不给名字 (关键不是我是谁是我可能就是任何人/可能就是你) + 不是大人物/做大恶的人,是不太关心政治只想吃饱日子过下去的普通人 + 历史最可怕的事不只靠台上几个人/需要成千上万个我 + 这一遍视角 (把自由交出去的有时不是恶人是又冷又饿只想有人救他的好人)',
      engagementHook: '把自由交出去的,有时候不是恶人,而是一个又冷又饿、只想有人救救他的好人。你愿意从一个最普通、最「无辜」的人这里,看自由是怎么被交出去的吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-citizen-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说说我家是怎么走到这一步的,你才懂我后来为什么会那样选。\n\n我父亲,年轻时上过第一次世界大战的前线。他回来的时候,人是活着的,可有些东西碎在了那边。他一辈子都觉得:德国不是在战场上被打败的,是被「背后捅了一刀」:被国内的叛徒、被签了凡尔赛条约的政客出卖的。\n\n这个说法对不对,我那时候不去想。我只知道我爸信它,信得咬牙切齿。\n\n1923 年,恶性通胀。我记得我妈拿着一整篮子钞票去买面包,回来时篮子还是满的:钱,只够买半条。我们家攒了大半辈子的积蓄,几个月里变成了一堆废纸。\n\n然后是 1929 年,大萧条。我爸丢了工作。再然后,就是今天:炉子不生火,桌上两个土豆。\n\n你记住这个我:我不是天生就恨谁。我只是被一次又一次地,从希望里摔下来。',
        en: 'First, how my family came to this, so you understand why I later chose as I did.\n\nMy father went to the front of World War I in his youth. He came back alive, but something shattered over there. All his life he believed Germany was not beaten on the battlefield but stabbed in the back, betrayed by traitors at home, by the politicians who signed the Treaty of Versailles.\n\nWhether that was true, I did not think about then. I only knew my father believed it, believed it with gritted teeth.\n\nIn 1923, hyperinflation. I remember my mother taking a whole basket of cash to buy bread, and coming home with the basket still full: the money was only enough for half a loaf. The savings my family had gathered over most of a lifetime turned, in a few months, into a heap of waste paper.\n\nThen came 1929, the Depression. My father lost his job. And then comes today: the stove unlit, two potatoes on the table.\n\nRemember this me: I was not born hating anyone. I was only thrown down from hope, again and again.',
      },
      deliverGoal: 'N2 setup: 我家怎么走到这步 + 父亲一战上过前线/回来人活着有些东西碎在那边/一辈子信德国不是战场被打败是「背后捅了一刀」(国内叛徒/签凡尔赛的政客出卖) + 我那时不想对不对只知爸信得咬牙切齿 + 1923 恶性通胀 (妈一篮子钞票买面包回来篮子还满钱只够半条/大半辈子积蓄几个月变废纸) + 1929 大萧条爸丢工作 + 今天炉子不生火桌上两土豆 + 「我不是天生恨谁,只是一次次从希望里摔下来」',
      engagementHook: '我不是天生就恨谁,我只是被一次又一次地从希望里摔下来。一个普通人被绝望反复碾过之后,心里最容易长出什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-citizen-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '在我们那座小城,日子越来越不像日子了。\n\n街上常常打架。有想搞革命的红色队伍,也有穿着制服、举着旗的另一伙人。今天这边砸了那边的窗,明天那边打伤了这边的人。普通人走在街上,都得绕着走。\n\n报纸上天天是坏消息:又有工厂倒了,又有多少人失业了,政府又换了,新政府还是什么都办不成。\n\n我对政治本来没什么想法。议会里那些人,西装革履,在大厅里吵来吵去、投来投去,可我家的炉子还是不生火,土豆还是只有两个。在我眼里,他们说的「程序」「妥协」「耐心」,都是离我很远、跟我没关系的词。\n\n我心里慢慢冒出一个念头,而且越来越响:这帮人,没一个靠得住的。这个乱糟糟、谁也管不了的国家,是不是需要一个真正强硬的人,来把一切重新管起来?',
        en: 'In our small town, the days less and less resembled days.\n\nThere were fights in the streets all the time. A red squad that wanted revolution, and another crowd in uniform, raising flags. Today this side smashed that side windows; tomorrow that side beat this side bloody. Ordinary people on the street had to walk a wide way around.\n\nThe newspapers were full of bad news every day: another factory closed, so many more jobless, the government changed again, and the new government still could get nothing done.\n\nI had no real thoughts about politics. Those men in parliament, in their suits, quarreling and voting back and forth in the hall, yet my home stove was still unlit and there were still only two potatoes. To my eyes, their words, procedure, compromise, patience, were words far from me, with nothing to do with me.\n\nA thought slowly rose in me, and grew louder and louder: not one of these people is dependable. This messy country that no one can govern, does it not need a truly strong man to take everything in hand again?',
      },
      deliverGoal: 'N3 setup: 小城日子越来越不像日子 + 街上常打架 (想搞革命的红色队伍/穿制服举旗的另一伙/互相砸窗打伤人/普通人得绕着走) + 报纸天天坏消息 (工厂倒/失业/政府又换还是办不成) + 我对政治本没想法 (议会那些人西装革履吵来吵去投来投去我家炉子还不生火/「程序妥协耐心」离我很远跟我没关系) + 慢慢冒出越来越响的念头: 这帮人没一个靠得住的/这乱糟糟的国家是不是需要一个真正强硬的人重新管起来',
      engagementHook: '这帮人没一个靠得住的,这个谁也管不了的国家,是不是需要一个真正强硬的人来重新管起来?当你对所有「讲道理的人」都失望了,你会不会也开始盼一个强人?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-citizen-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。有一天傍晚,邻居拉着你,去听一场集会。\n\n你本来不想去。可你也不想一个人待在那间冷屋子里,对着两个土豆。\n\n你去了。然后,你愣住了。\n\n广场上是成千上万的人。火把,旗帜,音乐。鼓点一下一下,敲在你胸口。台上那个人开始讲话:他不跟你讲什么经济数字,他讲的是你心里那些话:\n\n「你受的苦,不是你的错!是凡尔赛害的!是那些叛徒害的!是他们,偷走了属于你的一切!」\n\n你鼻子一酸。这是第一次,有人告诉你:你不是一个失败者。你只是被亏待了。\n\n他接着喊:「跟着我,我让德国重新伟大!」周围几万人一起吼出回应,声浪推着你。你身边的人,和你一样冷、一样饿、一样愤怒:可此刻,你们连成了一个整体。\n\n那一刻,你这辈子第一次,觉得自己不再是一个孤独的、没用的人。你属于了某个比你自己大得多的东西。\n\n这种感觉,太好了。好到让你来不及问:他说的,是真的吗?',
        en: 'Now you are me. One evening, a neighbor pulls you along to a rally.\n\nYou did not want to go. But you did not want to sit alone in that cold room either, facing two potatoes.\n\nYou went. And then you froze.\n\nThe square held tens of thousands of people. Torches, flags, music. The drumbeat struck, one beat at a time, against your chest. The man on the stage began to speak, and he did not give you economic numbers. He spoke the words already in your heart:\n\nThe suffering you bear is not your fault! It was Versailles! It was the traitors! It was them who stole everything that was yours!\n\nYour nose stung. For the first time, someone told you: you are not a failure. You were only wronged.\n\nHe went on: Follow me, and I will make Germany great again! Tens of thousands around you roared the answer together, the wave of sound pushing you. The people beside you were as cold, as hungry, as angry as you, and yet in this moment you were joined into one whole.\n\nIn that moment, for the first time in your life, you felt you were no longer a lonely, useless man. You belonged to something far larger than yourself.\n\nThe feeling was so good. So good that you had no time to ask: is what he says true?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak: 邻居拉你去听集会 + 你本不想去但也不想一人对着两土豆 + 你去了愣住 (广场成千上万人/火把旗帜音乐/鼓点敲胸口) + 台上人不讲经济数字讲你心里的话 (你受的苦不是你的错/凡尔赛害的/叛徒害的/他们偷走属于你的一切) + 你鼻子一酸 (第一次有人说你不是失败者只是被亏待) + 「跟我走让德国重新伟大」几万人一起吼声浪推你 (身边人一样冷饿怒此刻连成一个整体) + 第一次觉得不再孤独没用/属于比自己大得多的东西 + 这感觉太好/好到来不及问他说的是真的吗',
      engagementHook: '第一次有人告诉我:你不是一个失败者,你只是被亏待了:那种归属感太好了,好到我来不及问他说的是不是真的。当一句话让你不再孤独时,你还分得清它是真是假吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-citizen-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '从那以后,我成了集会上的常客。\n\n我得跟你说实话:那不是因为我想清楚了什么大道理。是因为,在那里,我才觉得自己活着。\n\n一个又冷又饿、看不到未来的人,你跟他讲复杂的政策、讲长远的代价,他听不进去。可你给他旗帜、给他音乐、给他一群和他并肩高喊的同伴、给他一个可以痛快去恨的「敌人」:他立刻就有了力气。\n\n恨,是很解气的。把我所有的苦,都算到「他们」头上,我心里那块压了很多年的石头,忽然就轻了。这不是我的错。是他们的错。多舒服啊。\n\n现在,我想请你诚实地、对着自己回答一个问题:\n\n如果你也在我这个位置:三天没吃饱,看不到任何希望,而台上有个人,正指着一群「敌人」,告诉你这一切都怪他们,只要跟着他就能翻身:你有多大的把握,你一定不会跟着喊?\n\n先别急着回答。把这个问题,放在心里。',
        en: 'From then on, I became a regular at the rallies.\n\nI have to be honest with you: it was not because I had thought through some great truth. It was because there, and only there, I felt alive.\n\nFor a man cold and hungry, who sees no future, talk to him of complex policy, of long-term costs, and he cannot take it in. But give him flags, give him music, give him a crowd shouting shoulder to shoulder with him, give him an enemy he can hate to his heart content, and he has strength at once.\n\nHatred feels good. Pin all my suffering on them, and the stone that pressed on my heart for years suddenly lifted. It is not my fault. It is theirs. How comfortable that is.\n\nNow I ask you to answer one question, honestly, to yourself:\n\nIf you stood where I stood, three days without a full meal, seeing no hope at all, and a man on the stage pointed at a crowd of enemies and told you it was all their fault, that following him would turn it all around, how sure are you that you would never join the shouting?\n\nDo not rush to answer. Hold the question in your heart.',
      },
      deliverGoal: 'N5 story: 我成集会常客 + 实话: 不是想清楚什么大道理是在那才觉得自己活着 + 又冷又饿看不到未来的人/讲复杂政策长远代价听不进/给他旗帜音乐并肩高喊的同伴一个可以痛快恨的敌人他立刻有力气 + 恨很解气 (把所有苦算到「他们」头上/心里压多年的石头忽然轻了/不是我的错是他们的错多舒服) + 请你诚实对自己答: 如果你在我位置三天没吃饱看不到希望台上有人指着敌人说都怪他们跟他就能翻身,你多大把握一定不会跟着喊 + 别急着答放心里',
      engagementHook: '把我所有的苦都算到「他们」头上,心里那块压了多年的石头忽然就轻了:恨,是很解气的。如果你也三天没吃饱、看不到希望,你有多大把握自己一定不会跟着喊?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-citizen-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '该说那一夜了。1933 年 2 月 27 日。\n\n那天晚上,我又在广场上。集会,旗帜,探照灯把夜空切成几道白柱,鼓点一下一下敲着。我站在人群里,跟着大家一起喊。\n\n然后,消息传来:国会大厦,着火了。\n\n台上的人立刻说:这是那些「敌人」干的!是共产党的阴谋!是国家遇到危险了!\n\n你猜我当时是什么反应?我没有怀疑。我甚至有点兴奋。我心想:看吧,我早说了,「他们」是危险的。现在该让那个强硬的人,放开手脚去收拾他们了。\n\n第二天,政府就发了一道紧急法令,说为了保护国家,要暂时收回一些自由:言论、集会、报纸,管起来。\n\n我一点都不心疼。那些「自由」,在我看来,从来就是给那些政客和「敌人」用的,跟我有什么关系?我又冷又饿,我要的不是自由,是有人来收拾乱局、让我能吃饱饭。\n\n现在回头看,我才发现:那一夜,我亲手交出去的,正是我以为「跟我没关系」的那个东西。',
        en: 'It is time to speak of that night. February 27, 1933.\n\nThat evening I was in the square again. The rally, the flags, searchlights cutting the night sky into white columns, the drumbeat striking one beat at a time. I stood in the crowd and shouted along with everyone.\n\nThen the news came: the Reichstag is on fire.\n\nThe man on the stage said at once: this was done by those enemies! a communist plot! the nation is in danger!\n\nGuess my reaction then? I did not doubt it. I was even a little excited. I thought: see, I said so, they are dangerous. Now let that strong man act with a free hand and deal with them.\n\nThe next day the government issued an emergency decree, saying that to protect the nation it would take back some freedoms for a time, speech, assembly, the press, all put under control.\n\nI did not mind at all. Those freedoms, as I saw it, had always been for the politicians and the enemies to use, what did they have to do with me? I was cold and hungry. What I wanted was not freedom but someone to clean up the chaos and let me eat.\n\nLooking back now, I find: that night, what I handed over with my own hands was the very thing I thought had nothing to do with me.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens: 1933.2.27 夜我又在广场 + 集会意象 (普通人角度: 旗帜/探照灯切夜空/鼓点/我站人群跟着喊,他看成「我第一次不孤独/属于整体」) + 消息: 国会大厦着火 + 台上人立刻说敌人干的/共产党阴谋/国家遇险 + 我没怀疑甚至有点兴奋 (我早说了他们危险/该让强硬的人放手收拾) + 第二天紧急法令为保护国家暂收回言论集会报纸 + 我一点不心疼 (自由在我看来从来是给政客和敌人用的跟我没关系/我要的不是自由是有人收拾乱局让我吃饱) + 回头看: 那一夜我亲手交出去的正是我以为「跟我没关系」的东西。只碰集会意象从普通人角度',
      engagementHook: '那些「自由」,在我看来从来是给政客和敌人用的,跟我有什么关系?我要的不是自由,是有人来让我吃饱。当你觉得「自由跟我没关系」时,你是不是正在亲手把它交出去?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-citizen-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '其实,大多数时候,我连「喊」都没喊。我只是,什么都没做。\n\n我没有去举报谁,也没有去打谁。可我也没有站出来说一句「不对」。\n\n邻居家本来开小铺子的那个人,有一天忽然不见了,据说是被抓走了。我心里掠过一丝不安,但很快就把它压下去了。我跟自己说:这种事,跟我没关系。政治家都一个样,谁上台还不是那回事。等局势稳定下来,一切就会好的。再说了,我一个小人物,我能管得了什么?\n\n这些话,你是不是觉得有点耳熟?\n\n有一段后来流传很广的反思,常被归到一个叫 Niemöller 的人名下:我得提醒你,它其实是战后才有的反思,有很多个版本,并不是当年留下的原话。但它说中了我们这种人的心:「起初他们来抓别人,我没出声,因为那不是我;等他们最后来抓我时,已经没有人能为我说话了。」\n\n我那时不懂这个道理。我以为「沉默」是最安全的。我没想到,正是千千万万次像我这样的沉默,替那台机器,铺好了一级又一级的台阶。',
        en: 'In truth, most of the time, I did not even shout. I simply did nothing.\n\nI did not report anyone, nor did I beat anyone. But neither did I stand up and say one word, this is wrong.\n\nThe neighbor who used to keep a little shop suddenly vanished one day; they said he had been taken away. A flicker of unease crossed my heart, but I pressed it down quickly. I told myself: this kind of thing has nothing to do with me. All politicians are the same; whoever takes power, it comes to the same. Once things settle, all will be well. Besides, I am a small man; what could I possibly control?\n\nDoes this sound a little familiar to you?\n\nThere is a reflection that later spread widely, often placed under the name of a man called Niemöller. I must warn you: it is in fact a postwar reflection, in many versions, not the original words left from those years. But it named the heart of people like me: First they came for others, and I did not speak out, because it was not me. And when at last they came for me, there was no one left to speak for me.\n\nI did not understand this then. I thought silence was the safest thing. I did not realize that it was precisely the thousands upon thousands of silences like mine that paved, for that machine, one step after another.',
      },
      deliverGoal: 'N7 story: 大多数时候我连喊都没喊只是什么都没做 (没举报谁没打谁但也没站出来说一句不对) + 邻居开小铺的人忽然不见据说被抓/我心里掠过不安很快压下 (跟我没关系/政治家都一个样/等稳定就好/我一个小人物能管什么) + 这些话耳熟吗 + anti-fab: Niemöller「First they came」常归他名下但提醒「战后才有的反思/很多版本/不是当年原话」+ 引语意译 (起初来抓别人我没出声因为不是我/最后来抓我没人能为我说话) + 我以为沉默最安全/没想到千千万万次像我这样的沉默替那台机器铺好一级又一级台阶',
      engagementHook: '我以为「沉默」是最安全的。我没想到,正是千千万万次像我这样的沉默,替那台机器铺好了一级又一级的台阶。一次「这跟我没关系」的沉默,真的是中立的吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-citizen-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '一开始,日子好像真的「好起来」了。\n\n强硬的人上台之后,街上不打架了。工厂重新开工,修路、造军备,我父亲又有活干了。家里的炉子,重新生起了火。报纸上天天是大工程、大胜利、举国欢腾的画面。\n\n有那么一两年,我甚至觉得:你看,我当初没看错。乱世就该有个铁腕的人来管。我用一点「跟我没关系的自由」,换来了热饭和秩序:这买卖,值。\n\n可你站在今天往回看,看得比我清楚。\n\n那些工厂在造什么?造的是要去打仗的武器。那个「秩序」,是怎么维持的?是靠把所有敢说「不」的人,关起来、赶走、或者吓得闭嘴。我吃上的那口热饭,底下垫着的,是别人正在消失的命。\n\n我用自由换来的那点安稳,是有期限的。账,迟早要还。而最后替这笔账买单的,不只是那些「敌人」,还有我自己,和我的孩子。\n\n只是那几年,我吃得正香,没有抬头。',
        en: 'At first, the days really did seem to get better.\n\nAfter the strong man took power, the fighting in the streets stopped. The factories reopened, building roads, making arms, and my father had work again. The stove at home was lit once more. The newspapers were full, every day, of great projects, great victories, a nation rejoicing.\n\nFor a year or two, I even thought: see, I was not wrong back then. A troubled age needs an iron hand to govern it. I traded a little freedom that had nothing to do with me for a hot meal and order, and that was a deal worth making.\n\nBut you, looking back from today, see more clearly than I did.\n\nWhat were those factories making? Weapons meant for war. And that order, how was it kept? By locking up, driving out, or frightening into silence everyone who dared say no. The hot meal I ate was laid on top of other people lives, lives that were vanishing.\n\nThe little ease I traded my freedom for had an expiry date. The bill would come due sooner or later. And in the end the ones who paid it were not only the enemies, but me too, and my children.\n\nIt was only that in those years, I was eating well, and did not look up.',
      },
      deliverGoal: 'N8 story: 一开始日子好像真好起来 (强硬的人上台街上不打架/工厂重开修路造军备父亲又有活干/炉子重新生火/报纸天天大工程大胜利举国欢腾) + 有一两年我甚至觉得没看错 (乱世该有铁腕管/用一点跟我没关系的自由换热饭和秩序值) + 但你从今天看得比我清楚 + 工厂造的是打仗的武器/秩序靠把敢说不的人关起来赶走吓闭嘴/我那口热饭垫着别人正在消失的命 + 用自由换的安稳有期限账迟早要还/最后买单的不只敌人还有我自己和我的孩子 + 那几年我吃得正香没抬头',
      engagementHook: '我用一点「跟我没关系的自由」,换来了热饭和秩序:那几年我吃得正香,没有抬头。用自由换来的安稳,真的是「赚到了」吗,还是只是账还没到还的时候?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-citizen-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步,给你看一张更大的地图:同一个二十年里,地球另一端的中国。\n\n你可能不知道:让我父亲咬牙切齿的那份《凡尔赛条约》,同一份,也砸在了中国头上。它把德国在山东的权益,不还给中国,反而判给了日本。\n\n同一份屈辱,在我这边,被一个强人引向了仇恨和服从;在中国,同样的愤怒涌成了 1919 年 5 月 4 日的街头抗议,这就是五四运动。不是哪边的人更清醒,是同一股怒火,在不同的社会里,被引向了完全不同的方向。\n\n而那个让我吃上热饭的「秩序」,它造出来的军队和武器,最后伸出的刀,正落在了海那边的中国人身上:1931 年的九一八事变(日本制造借口、强占中国东北),1937 年的卢沟桥事变(那场点燃日本全面侵华的冲突),中国进入了漫长的抗战。\n\n这是这堂课最让我难受的地方:我在广场上为「我们终于团结起来」而热泪盈眶的时候,并不知道我们这股「团结」,正在变成压向另一群普通人的铁蹄。而被它碾过的,也是一群和我一样、只想护住一家老小的普通人,只是这一次,他们在地球的另一端,叫做中国农民。',
        en: 'Let me step back and show you a larger map: the China at the other end of the earth, in these same twenty years.\n\nYou may not know this: the same Treaty of Versailles that made my father grit his teeth also came down on China. It refused to return Germany rights in Shandong to China and handed them to Japan instead.\n\nThe same humiliation, on my side, was steered by a strongman into hatred and obedience. In China, the same anger poured into the street protests of May 4, 1919, the May Fourth Movement. It was not that one side was more clear-eyed than the other. It was the same fire of anger, steered in two completely different directions by two different societies.\n\nAnd that order which gave me my hot meal, the army and weapons it built, the blade it finally stretched out fell on the Chinese across the sea: the Mukden Incident of 1931 (Japan staged a pretext to seize northeast China), the Marco Polo Bridge Incident of 1937 (the clash that lit Japan full invasion of China), and China entered its long war of resistance.\n\nThis is the part of the lesson that pains me most: while I wept in the square for we are finally united, I did not know this unity of ours was becoming an iron heel pressing down on another crowd of ordinary people. And the ones it crushed were also ordinary people like me, who only wanted to keep one family safe. Only this time they were on the other side of the earth, and they were called Chinese farmers.',
      },
      deliverGoal: 'N9 zoom-out + §8 中国桥注入 (receiving-end): 同一二十年地球另一端中国 + 让父亲咬牙切齿的凡尔赛条约同一份也砸在中国头上 (德国山东权益不还中国判给日本) + 中国年轻人做了和我相反的选择 (1919.5.4 北京学生为同一条约上街=五四运动/同一份屈辱在我这被强人变成仇恨和服从在他们那变成民族醒过来站起来的力量) + 让我吃上热饭的秩序造的军队武器伸出的刀落在上街的中国人身上 (1931 九一八/1937 卢沟桥/日本全面侵华/中国漫长抗战) + 最难受: 我为「我们终于团结」热泪盈眶时不知这股团结正变成压向另一群普通人的铁蹄。真中国段用中文术语 (五四/抗战/卢沟桥)',
      engagementHook: '我在广场上为「我们终于团结起来」而热泪盈眶的时候,并不知道我们这股「团结」,正在变成压向另一群普通人的铁蹄。同一份屈辱,为什么在一群人那里变成觉醒,在另一群人这里却变成了仇恨?',
      expectsRealAnswer: false,
    },
    {
      id: 'iwt-citizen-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,该怎么评我?有一个真问题,等你来答。\n\n我没发明那套谎言。我没下令抓人。我没在前线开枪。我只是一个又冷又饿、想活下去的普通人:我去了集会,我喊了几句,更多时候我只是沉默。\n\n一种说法:我基本是无辜的。一个被战败、被通胀、被大萧条反复摧残的人,在那个绝境里抓住唯一递过来的稻草,这太能理解了。真正的罪,在那几个站在台上、利用了我的恐惧的人身上。把账算到我这种小人物头上,既不公平,也太轻巧。\n\n另一种说法:正是「我只是个小人物」这句话,最危险。那台机器,恰恰是靠千千万万个「无辜」的我才能运转的,是我们的选票、我们的欢呼、我们的沉默,一级一级,把它垫了上去。理解我的处境,不等于我没有责任。能动性,再小,也是责任。\n\n这两边,不是「无辜」对「有罪」。是同一个我的两面:一个值得同情的受害者,和一个让灾难成为可能的参与者。\n\n这是这堂课最难、也最该被你认真想一次的问题。你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Having walked my whole life, how should I be judged? There is a real question waiting for you.\n\nI did not invent that web of lies. I gave no order to arrest anyone. I fired no shot at the front. I was only an ordinary person, cold and hungry, who wanted to go on living. I went to the rallies, I shouted a few times, and more often I simply stayed silent.\n\nOne view: I am essentially innocent. A man ravaged again and again by defeat, inflation, and the Depression, who in that dead end grabbed the only straw held out to him, this is all too understandable. The true crime lies with the few men on the stage who used my fear. To pin the bill on a small man like me is neither fair nor anything but too easy.\n\nThe other view: it is precisely the words I am only a small man that are most dangerous. That machine could run only on thousands upon thousands of innocent men like me. It was our votes, our cheers, our silence that, step by step, propped it up. To understand my situation is not to say I bear no responsibility. Agency, however small, is responsibility.\n\nThese are not innocence against guilt. They are two faces of the same me: a victim worth pitying, and a participant who made the catastrophe possible.\n\nThis is the hardest question in this lesson, and the one most worth thinking through once, carefully. What do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis: 真问题: 一个又冷又饿、去集会喊几句更多时候沉默的普通人,基本无辜还是灾难的参与者 + 我没发明谎言没下令抓人没在前线开枪 + 一种说法 (基本无辜/被战败通胀大萧条反复摧残在绝境抓唯一稻草太能理解/真罪在台上利用我恐惧的几个人/算到小人物头上不公平太轻巧) + 另一种说法 (「我只是个小人物」最危险/机器靠千千万万无辜的我才运转/我们的选票欢呼沉默一级级垫上去/理解处境不等于没责任/能动性再小也是责任) + 同一个我两面 (值得同情的受害者+让灾难成为可能的参与者) + neutral AP 老师 + 想 30 秒 + 两边都站得住',
      engagementHook: '我只是一个又冷又饿、想活下去的普通人:可正是「我只是个小人物」这句话,也许最危险。一个值得同情的受害者,和一个让灾难成为可能的参与者,会不会是同一个我?你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'iwt-citizen-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,一个又冷又饿、在集会里第一次觉得不孤独、投了是票、又或只是沉默的普通人,你会怎么评价我?\n\n我不是恶人。可那场吞掉了几千万条命的灾难,它的入口,正是从我这样的人脚下铺开的。这两件事,要怎么放进同一个我里?这个,我留给你称。\n\n不过先记住:你这一遍,听的只是我这个普通人的声音。\n\n那个站在高台上的强人,会把我的恐惧和愤怒,讲成「人民对我的拥护」:在他眼里,我就是他要的那几万张脸里的一张。那个在议会里投下反对票、最后失败的民主派,会满心痛惜地看着我:他想拦住的,正是被我和千千万万个我推上去的那个人。你还没听过他们的声音。\n\n换个视角再走一遍,你刚才对我下的判断,站不站得住?\n\n再想最后一步,这也是这整堂课最想问你的一句:有一天,如果你又冷又怕,而有人指着一群「敌人」,许诺只要跟着他、只要你别声张,就能让一切重新好起来:到那时,你认得出这套声音吗?你,会怎么选?',
        en: 'Having walked my whole life, an ordinary person, cold and hungry, who felt for the first time at the rallies that he was not alone, who voted yes, or merely stayed silent, how would you judge me?\n\nI am not an evil man. Yet the catastrophe that swallowed tens of millions of lives, its entrance was paved right from under the feet of people like me. How do these two things fit into one me? That I leave for you to weigh.\n\nBut first, remember: this pass, you heard only the voice of me, the ordinary person.\n\nThe strongman on the high platform would tell my fear and anger as the people support for me. In his eyes I was one of the tens of thousands of faces he wanted. The democrat who cast a no in parliament and failed would look at me with a heart full of grief: the man he tried to stop was the very one that I, and thousands upon thousands of me, pushed up. You have not yet heard their voices.\n\nRun it again through another lens, and see whether the judgment you just made about me still holds.\n\nThen take one last step, and this is what the whole lesson most wants to ask you: one day, if you are cold and afraid, and someone points at a crowd of enemies and promises that if you just follow him, just keep quiet, everything will be good again, will you recognize this voice by then? And how will you choose?',
      },
      deliverGoal: 'N11 close/meta: 评价我 (又冷又饿/集会第一次不孤独/投了是票又或沉默的普通人 → 我不是恶人但吞掉几千万命的灾难入口正从我这样的人脚下铺开/两件事怎么放进同一个我) + 还没听到: 高台强人会把我的恐惧愤怒讲成「人民拥护」(我是他要的几万张脸里一张) + 投反对票失败的民主派会痛惜看我 (他想拦的正是被我和千千万万个我推上去的人) (=另两 lens) + 换视角再走判断站不站得住 + transfer (整课最想问): 有一天你又冷又怕有人指着敌人许诺跟他别声张就能好起来,你认得出这套声音吗你会怎么选',
      engagementHook: '我不是恶人,可那场吞掉几千万条命的灾难,入口正从我这样的人脚下铺开。有一天,如果你又冷又怕,有人指着一群「敌人」许诺只要跟着他、别声张就能好起来:你认得出这套声音吗?你会怎么选?',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'strongman-actor':               strongmanLens,
  'democrat-mediator':             democratLens,
  'ordinary-citizen-who-said-yes': ordinaryCitizenLens,
};

// receiving-end 优先 (普通人能动性 = AP DBQ「agency vs structure」必考角度;
//   「人为何拥抱极权」是本课最关键、最 load-bearing 的教学问题)
export var defaultLens = 'ordinary-citizen-who-said-yes';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'interwar-totalitarianism-1919',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'strongman-actor': 30, 'democrat-mediator': 32, 'ordinary-citizen-who-said-yes': 32 },
  authoredBy: 'Anthropic Claude Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 集会广场探照灯+鼓点 (Scheinwerfer/Trommel) 三视角各触一次不点破 (强人=我造的团结/民主派=理性被淹没/普通人=第一次不孤独)',
    'defaultLens: ordinary-citizen-who-said-yes: 普通人能动性 (agency vs structure, AP DBQ 必考) + 「人为何拥抱极权」load-bearing',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'Rule 0 高敏感: 全程标极权真实代价 (大清洗/Holodomor/二战/种族灭绝) 不美化; 呈现机制非「坏人上台」; 理解≠认同边界 (N11 transfer)',
    'anti-fab: Niemöller「First they came」显式标战后/多版本/非档案 (citizen N7); 「强人共同配方」显式标比较框架非单一史实 (strongman N8); 桥接人物 (民主派/普通人) lens.description 标虚构',
    'cultural ban: 极权三国段全程德/意/俄/日真实术语 (Versailles/Reichstag/Article 48/Enabling Act/Führer/kulak/gulag/Kwantung Army); §8 真中国桥仅注入 democrat N9 + citizen N9 两节,那里才用中文术语 (五四/军阀/北伐/抗战/卢沟桥)',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
