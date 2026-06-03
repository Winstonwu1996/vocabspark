// ─────────────────────────────────────────────────────────────────
// 当代美国 1980–至今 — Contemporary US · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// ⚠️ Rule 0 一票否决 (当代政治): 每个总统/政党/运动都是历史对象, 支持者+批评者并排,
//    绝不站队; 事实层与评价层分开 (事实标「这是事实不是评价」)。
// 第10条: 复合人物 + 占位符, 不 hardcode 真实城名/人名/党派。
// 3 lens / 11 节点 / 跨 lens micro-detail: 关停的工厂 (走出去的人=解脱 / 退伍军人=句号 / 留下的人家=一班一班灭的灯)。
// §9 桥: 改革开放 1978 = 同一场全球化的另一半 (并置, 不比赛)。
// ─────────────────────────────────────────────────────────────────

export var restructuringWinnerLens = {
  id: 'restructuring-winner-actor',
  name: 'The One Who Got Out',
  nameCn: '走出去的人',
  role: 'perpetrator-actor',
  perspectiveTag: 'winner-of-restructuring',
  icon: '📈',
  description: {
    cn: '一个复合人物，代表 1980 年后在大重组里向上走的那类人。1962 年前后生在锈带一座工业小城，父亲在城边那家工厂上班。他高中很会念书，后来读了大学，学的是新经济用得上的东西，毕业后没回小城，进了大城市的银行或科技公司，三十年一级一级往上。这一遍让你从一个上行者的内部，看见全球化与科技经济的逻辑，也看见它脚下的影子。',
    en: 'A composite character standing for the kind of person who moved upward in the great restructuring after 1980. Born around 1962 in a Rust Belt factory town, with a father who worked at the plant on the edge of town. He was good at school, went on to college, studied what the new economy could use, and never moved home; he joined a bank or a tech firm in a big city and climbed, step by step, for thirty years. This pass lets you stand inside one of the risers and see the logic of globalization and the tech economy, and the shadow under its feet.',
  },
  storyboard: [
    {
      id: 'con-winner-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我现在站的这间办公室在 30 层。窗外是一座大城市的天际线，玻璃、塔吊、晚上不灭的灯。\n\n我端着咖啡，常常想起另一扇窗——我小时候，我爸下班回家，身上有股机油和金属的味儿。我们那座小城在锈带，城边有家工厂，我爸在那儿上了一辈子班。那时候那家厂三班倒，灯整夜亮着。\n\n我叫什么不重要，你就当我是「走出去的那个人」。我代表的不是某一个人，是一类人：从一座正在往下走的小城里，一步步走进了往上走的新经济。\n\n这 40 年，在我眼里是机会的 40 年。我是个工人的儿子，我靠念书和搬家，换了一种人生。\n\n这一遍，你坐进我这个位置，看一个人怎么搭上时代的电梯往上走——也看看，电梯升起来的时候，脚下是什么在往下沉。',
        en: 'The office I stand in now is on the 30th floor. Outside the window is a big-city skyline: glass, cranes, lights that never go out at night.\n\nI hold my coffee and often think of another window. When I was small, my father came home from his shift smelling of machine oil and metal. Our town was in the Rust Belt — the band of old factory towns in the north where the steel and car plants slowly rusted and shut down — and on its edge stood a factory where my father worked his whole life. Back then the plant ran three shifts, its lights burning all night.\n\nMy name does not matter. Think of me as "the one who got out." I do not stand for one person; I stand for a type: someone who walked, step by step, out of a town heading down and into a new economy heading up.\n\nTo me, these 40 years were 40 years of opportunity. I am a worker\'s son, and through school and moving away I traded one life for another.\n\nThis pass puts you in my seat, watching a person ride the escalator of an era upward. And watching, as the escalator rises, what is sinking under his feet.',
      },
      deliverGoal: 'N1 hook — 30 层办公室窗 vs 父亲机油味 + 锈带小城城边三班倒工厂 + composite「走出去的人」自我介绍 + 40 年是机会的 40 年 + 这一遍视角设定 (电梯升起脚下有东西在沉)',
      engagementHook: '电梯把我往上送的同一段时间，脚下有东西在往下沉。你愿意先听上去的那个人，还是先听沉下去的那一头？',
      expectsRealAnswer: false,
    },
    {
      id: 'con-winner-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我长大的那座城，你才懂我后来为什么非走不可。\n\n1980 年，我十几岁。那时候这座城是活的。城边那家工厂，给一个高中毕业的人一份体面活儿：时薪不错、有医保、有退休金。我爸一个人上班，就能养我们一家、供房子。主街上店都开着，周五晚上停车位都难找。\n\n那时候大人跟我们说的路很清楚：高中毕业，进厂，跟你爸一样，一辈子稳稳的。\n\n可就在我读高中那几年，地开始动了。工厂先是裁人，再是把一些活儿挪到别处。我爸下班回来话变少了。饭桌上偶尔听见一个词：「订单没了。」\n\n我那时候说不清在怕什么。我只隐隐知道一件事：我爸走的那条路，到我这儿，可能已经走到头了。',
        en: 'First, the town I grew up in, so you understand why later I had to leave.\n\nIn 1980 I was in my teens. The town was alive then. The plant on the edge of town gave a high-school graduate a decent job: good hourly pay, health insurance, a pension. My father worked, and that one paycheck supported our family and the house. Main Street\'s shops were all open; on Friday nights parking was hard to find.\n\nThe path the grown-ups laid out for us was clear: finish high school, go into the plant, follow your father, steady for life.\n\nBut in the very years I was in high school, the ground began to move. The plant first laid people off, then moved some of the work elsewhere. My father came home with less to say. At dinner I would catch one word: "orders are gone."\n\nI could not have named what I was afraid of. I only half-knew one thing: the path my father walked might already have run out by the time it reached me.',
      },
      deliverGoal: 'N2 setup — 1980 小城还活着 (工厂给高中毕业生体面活儿/一人养一家/主街热闹) + 大人指的路是进厂跟爸一样 + 读高中那几年地开始动 (裁人/挪活儿/订单没了) + 隐约知道父亲那条路到他这儿走到头了',
      engagementHook: '大人指给我的路，是进厂、跟我爸一样、一辈子稳。可那条路在我脚下正断掉。一条「稳定」的老路如果正在消失，你会硬走，还是另找一条？',
      expectsRealAnswer: false,
    },
    {
      id: 'con-winner-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我为什么是走出去的那个，而不是留下的那个？\n\n说实话，一半是因为我会念书，一半是因为运气。\n\n我高中成绩好，老师劝我考大学。我家没人上过大学，但我爸把牙一咬：去。后来我读了大学，挑的是那种「将来有用」的方向——金融、计算机、跟全球做生意的商科。我当时未必想得多深，只知道一件事：这些东西，新经济用得上，老工厂用不上。\n\n毕业那年我做了一个决定：不回小城。\n\n不是不想家。是回去也没有岗位等我了——那家工厂已经在收缩，城里能给大学生的好工作几乎没有。我把行李塞进车里，开向一座大城市，那儿有银行、有刚冒头的科技公司、有把生产外包到海外的公司。\n\n我没把这当成「抛下故乡」。我当时觉得，我只是走向有工作的地方。\n\n这一步，把我和留在城里的那些人，分到了两条岔路上。',
        en: 'Why was I the one who got out, and not one of the ones who stayed?\n\nHonestly, half of it was that I was good at school, and half was luck.\n\nMy grades were strong, and a teacher pushed me toward college. No one in my family had gone, but my father set his jaw and said: go. I went, and I chose a direction that would "be useful someday" — finance, computers, business that dealt with the whole world. I may not have thought it through deeply. I knew only one thing: the new economy could use these, and the old plant could not.\n\nThe year I graduated I made a choice: not to move home.\n\nIt was not that I did not miss home. It was that no job waited for me there. The plant was already shrinking, and there was almost no good work in town for a college graduate. I packed the car and drove toward a big city, where there were banks, newborn tech companies, and firms that sent their production overseas.\n\nI did not think of it as "leaving my hometown behind." At the time I thought I was simply walking toward where the jobs were.\n\nThis one step set me and the people who stayed onto two different forks of the road.',
      },
      deliverGoal: 'N3 setup — 为什么是走出去的那个 (一半会念书一半运气) + 父亲咬牙供大学 + 选「将来有用」方向 (金融/计算机/全球商科) 新经济用得上老工厂用不上 + 毕业决定不回小城 (回去没岗位) + 开向大城市 (银行/科技/外包公司) + 这一步把他和留下的人分到两条岔路',
      engagementHook: '我没觉得自己「抛下故乡」，我只觉得在走向有工作的地方。同一个选择，从这头看是「奔前程」，从那头看可能是「走了就不回来了」。你怎么称这一步？',
      expectsRealAnswer: false,
    },
    {
      id: 'con-winner-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你二十多岁，进了大城市那家公司。头几年你拼命补课、加班、往上爬。然后你发现，你赶上了一个往上冲的时代。\n\n1990 年代，互联网热起来了。钱、人、新点子全往这边涌。你手上的技能正好是稀缺的那种，工资一年一个台阶。\n\n这不是你一个人努力的结果，这是整个时代的电梯在往上走，而你正好站在电梯里。1980 年那场转向之后，减税、放松管制、让市场来主导——一种新经济被推到了台前。\n\n这里要停一下，把话说全。这套转向，**支持者**说它点燃了经济、终结了 1970 年代的停滞；**批评者**说它让贫富差距开始拉大、削弱了对普通工人的保护。这两种说法从那时吵到今天，没有定论。\n\n而站在电梯里的你，多半只感觉到一件事：上升。你那时候，会去想电梯外面的事吗？',
        en: 'Now you are me.\n\nYou are in your twenties, inside that big-city company. For the first few years you study hard to catch up, work late, climb. Then you notice you have caught an era rushing upward.\n\nIn the 1990s the internet took off. Money, people, new ideas all poured this way. The skills in your hands happened to be the scarce kind, and your pay rose a step each year.\n\nThis is not the result of your effort alone. It is the era\'s whole escalator moving up, and you happen to be standing on it. After the turn of 1980 — tax cuts, deregulation, letting markets lead — a new economy was pushed to the front.\n\nHere we must pause and say it in full. Supporters say that turn lit the economy and ended the stagnation of the 1970s. Critics say it let the gap between rich and poor begin to widen and weakened protections for ordinary workers. Those two views have argued from then to now, with no verdict.\n\nAnd you, standing on the escalator, mostly feel one thing: rising. Back then, would you have stopped to think about what was outside the escalator?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 二十多岁进大城市公司拼命往上爬 + 赶上 1990s 互联网热 (钱/人/点子涌过来/技能稀缺工资一年一台阶) + 不是一人努力是时代电梯 + 1980 转向 (减税/放松管制/市场主导) + Rule-0 并排 (支持者: 点燃经济终结停滞 / 批评者: 拉大差距削弱工人保护) + 电梯里只感觉上升',
      engagementHook: '我的上升，一半是我拼，一半是时代的电梯。站在电梯里只感觉到「升」的时候，人会去想电梯外面正在发生什么吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'con-winner-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把电梯往上推的，不只是运气，是几台一起转的机器。\n\n第一台：贸易。1994 年 1 月，NAFTA 生效，美、加、墨之间做生意的门槛大降。我们公司开始把一部分生产挪到成本更低的地方。账面上，成本下来了，利润上去了，我的奖金也跟着上去。\n\n第二台：技术。个人电脑、互联网，把生意做得更快、更远。后来 2007 年 iPhone 出来，又是一波。技术把财富和工作进一步推向科技走廊——也就是我待的这一头。\n\n第三台：金融。钱在全球流动得越来越快，会调度钱的人，赚得越来越多。\n\n这三台机器，是这个时代的「机器」，不是哪一个人的善恶选择。我不是坏人，我也不是英雄——我只是一个站在机器顺风口的人，做着大家都在做的事：哪里成本低就把活儿放哪里。\n\n同一件事，「把生产搬到更便宜的地方」：在我这头，叫效率、叫机会；在另一头，是有人的饭碗没了。同一个动作，两套词。',
        en: 'What pushed the escalator up was not luck alone. It was several machines turning at once.\n\nThe first: trade. In January 1994, NAFTA took effect, and the barriers to doing business among the US, Canada, and Mexico dropped sharply. Our company began moving some production to cheaper places. On paper, costs fell, profits rose, and my bonus rose with them.\n\nThe second: technology. Personal computers and the internet made business faster and reach farther. Later, in 2007, the iPhone arrived, another wave. Technology pushed wealth and jobs further toward the tech corridors, the end where I lived.\n\nThe third: finance. Money moved around the world faster and faster, and the people who could move money earned more and more.\n\nThese three machines were the era\'s machine, not one person\'s choice of good or evil. I am not a villain, and I am not a hero. I am a person standing where the machine\'s wind blows in his favor, doing what everyone was doing: put the work wherever the cost is lowest.\n\nThe same act, "moving production to a cheaper place," at my end is called efficiency and opportunity; at the other end, it is someone\'s job gone. The same move, two vocabularies.',
      },
      deliverGoal: 'N5 story — 推电梯的三台机器 (NAFTA 1994 贸易/PC+互联网+iPhone 2007 技术/金融全球流动) + 是时代的机器不是个人善恶选择 + 我不是坏人也不是英雄是站在机器顺风口做大家都做的事 + 同一动作两套词 (这头效率机会/那头饭碗没了)',
      engagementHook: '我不是坏人也不是英雄，我只是站在一台大机器的顺风口。「把活儿放成本最低的地方」——这是聪明的生意，还是一句话里藏着别人丢掉的饭碗？',
      expectsRealAnswer: false,
    },
    {
      id: 'con-winner-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '有一年我开车回老城办事，特意绕到城边，去看那家工厂。\n\n它已经不冒烟了。烟囱锈成了红褐色，窗户碎了一片片，门口长着半人高的草。我爸上了一辈子班的地方，安安静静地停在那儿。\n\n那一刻我心里是什么，我跟你说实话，因为这一段，是这一遍让你听见我没说出口的——我先涌上来的，是松一口气。「还好我出来了。」要是当年我也进了厂，今天站在锈里的，可能就是我。\n\n紧接着，是另一样东西，更轻、但不肯走开：一点说不清的愧疚。我赚的那些钱里，有一部分，正是来自「把活儿搬到更便宜的地方」这件事本身。我向上爬的同一段时间，正是这家厂垮掉的同一段时间。这两件事，不是先后，是同时。\n\n我没法跟自己把这笔账算清。我出来了——这是真的。我出来，踩的也有这座城往下沉的力——这也是真的。\n\n（这同一座工厂，留在城里的那一家人是怎么看它的，你换一个视角能亲眼听见。）',
        en: 'One year I drove back to the old town on an errand, and went out of my way to the edge of town, to look at the factory.\n\nIt no longer smoked. The stacks had rusted red-brown, the windows were broken pane by pane, and waist-high weeds grew at the door. The place where my father worked his whole life stood there, perfectly quiet.\n\nWhat I felt in that moment, I will tell you honestly, because this part is the one this pass lets you hear that I never said aloud. What rose first was relief. "Thank God I got out." If I had gone into the plant back then, the one standing in the rust today might be me.\n\nAnd right behind it came something else, lighter, but unwilling to leave: a guilt I could not quite name. Some of the money I made came from exactly this, moving the work to a cheaper place. The same years I was climbing were the same years this plant was falling. Those two things are not one after the other; they are at the same time.\n\nI cannot square that ledger with myself. I got out, and that is true. And in getting out, I had a foot on the force that sank this town, and that is true too.\n\n(How the family who stayed in town sees this same factory, you can hear for yourself when you switch to another view.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 开车回老城绕去看城边工厂 (不冒烟/烟囱锈红褐/窗碎/草高/父亲上一辈子班的地方静停) + anti-fab 框架「这一遍让你听见我没说出口的」+ 先涌上松一口气「还好我出来了」+ 紧接着说不清的愧疚 (赚的钱有一部分来自搬活儿/向上爬同时正是厂垮掉同时) + 算不清的账 (出来是真的/踩着城下沉的力也是真的) + 桥到 Lens C',
      engagementHook: '看着那家锈掉的工厂，我先松了口气「还好我出来了」，接着是一点说不清的愧疚。同一个人，对同一件事，能不能同时既庆幸又愧疚？',
      expectsRealAnswer: false,
    },
    {
      id: 'con-winner-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '2001 年 9 月 11 日早上，我在办公室。\n\n电视上，纽约的双塔在冒烟、倒下。约 2,977 人在那一天没了。我们整层楼都停下来，没人说话。那种感觉，是这个国家被人从胸口捅了一刀——一种很深的、共同的痛。\n\n那阵子，街上到处挂国旗。我从没见过这个国家那么齐心。哪怕是我这种平时只埋头工作、不太管政治的人，那几天也觉得：我们是一伙的。\n\n可这种齐心没撑多久。后来的几场仗——尤其 2003 年那场伊拉克战争——把大家又重新撕成两边。\n\n这里我得把话说全，因为这是最容易站队的地方。**支持出兵的人**说，这是反恐、是保护美国安全；**反对的人**说，这场仗太久、代价太重、理由有争议。这两种说法，我身边都有人坚信，到今天还在吵。\n\n我那时候在干嘛？说来惭愧——我多半在忙我自己的事，看着这一切从我那扇 30 层的窗外飘过。',
        en: 'On the morning of September 11, 2001, I was in the office.\n\nOn the television, the two towers in New York smoked and fell. About 2,977 people were gone that day. Our whole floor stopped; no one spoke. The feeling was of the country stabbed in the chest, a deep, shared pain.\n\nFor a while, flags hung everywhere on the streets. I had never seen the country so of one mind. Even someone like me, who usually just kept his head down at work and paid little attention to politics, felt in those days: we are on the same side.\n\nBut that unity did not last long. The wars that followed, especially the Iraq War in 2003, tore people into two sides again.\n\nHere I must say it in full, because this is where it is easiest to take a side. Those who supported sending troops said it was counterterrorism, protecting American safety. Those who opposed it said the war ran too long, cost too much, and rested on contested reasons. People I know hold each of those views with conviction, and they argue still.\n\nAnd what was I doing then? To my shame, I was mostly busy with my own affairs, watching all of it drift past outside my window on the 30th floor.',
      },
      deliverGoal: 'N7 story — 2001.9.11 在办公室看双塔倒/约 2,977 人遇难/整层停下没人说话 (国家被捅一刀的共同痛) + 那阵子街上挂国旗从没见过这么齐心 + 齐心没撑久 (2003 伊拉克战争撕成两边) + Rule-0 并排 (支持出兵: 反恐保护安全 / 反对: 太久代价重理由有争议) + 惭愧承认自己多半在忙自己的事隔着 30 层窗看',
      engagementHook: '9/11 那几天，连我这种不管政治的人都觉得「我们是一伙的」。可这种齐心很快又散了。一个国家，是不是只有在被外面打的时候才团结得起来？',
      expectsRealAnswer: false,
    },
    {
      id: 'con-winner-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我一直以为，我这种站在电梯里的人，是不会被砸到的。\n\n2008 年，我发现我错了。\n\n那年 9 月 15 日，一家叫 Lehman Brothers 的大投行破产，引爆了全球金融海啸。大衰退（2007 年底到 2009 年中）里，美国失去了大约 870 万个工作岗位，失业率到 2009 年 10 月一度冲到 10%。\n\n这一回，连我也挨了。我的投资缩水，公司裁员，有几个月我也睡不着，怕轮到我。我向来觉得自己是「赢家」，可那一拳让我第一次尝到，承受端的人天天过的是什么滋味。\n\n这场危机怪谁？这又是一处容易站队的地方，我把两边都摆给你：**一种说法**，把账算在华尔街的贪婪和监管的缺位上；**另一种说法**，算在过度借贷和政策激励上。两边的账本，到今天都没合上。\n\n我那几个月的失眠，和老城里那家人 30 年的失眠，不一样重。但那是我离他们最近的一次。',
        en: 'I had always thought that someone like me, standing on the escalator, would never be hit.\n\nIn 2008 I found out I was wrong.\n\nOn September 15 that year, a big investment bank called Lehman Brothers went bankrupt and set off a global financial wave. In the Great Recession (late 2007 to mid-2009), the United States lost about 8.7 million jobs, and unemployment hit 10% in October 2009.\n\nThis time, even I was hit. My investments shrank, my company cut staff, and for a few months I could not sleep, afraid my turn was coming. I had always thought of myself as a "winner," but that blow gave me my first taste of what the people on the receiving end live with every day.\n\nWho was the crisis\'s fault? This, too, is a place where it is easy to take a side, so I set both before you. One view puts the bill on Wall Street\'s greed and missing regulation. The other view puts it on over-borrowing and policy incentives. Both ledgers remain unreconciled to this day.\n\nMy few months of sleeplessness and that family\'s 30 years of it are not the same weight. But it was the closest I ever came to them.',
      },
      deliverGoal: 'N8 story — 一直以为电梯里的人砸不到/2008 错了 + Lehman 2008.9.15 破产引爆海啸 + 大衰退 2007末-2009中 约失 870 万岗位/失业率 2009.10 达 10% + 连他也挨 (投资缩水/公司裁员/几个月失眠) + 第一次尝承受端滋味 + Rule-0 并排 (一种: 华尔街贪婪+监管缺位 / 另一种: 过度借贷+政策激励) 账本没合 + 他几个月失眠 vs 那家人 30 年不一样重但最近一次',
      engagementHook: '2008 那一拳，连站在电梯里的我也挨到了，第一次睡不着。可我几个月的失眠，和老城那家人 30 年的失眠，能放在同一个秤上吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'con-winner-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '有件事，我是很久以后才想明白的。\n\n我向上走的这条弧线，在地球另一头，有一条几乎对称的弧线，同时在往上走。\n\n1978 年 12 月，中国开始改革开放。此后，中国沿海的工厂一座座开起来。而几乎同一段时间，我们锈带的工厂一座座关下去。2001 年 12 月，中国加入 WTO，两边的经济从此绑得更紧。\n\n我爸那家厂关掉的活儿，有一些，去了一个我从没见过的中国工人手里。那个工人，可能也跟我一样：从一个穷地方走出来，进了新开的工厂，第一次有了稳定的收入，第一次觉得日子能往上走。\n\n他的上行，和我的上行，是同一场全球化的两半。我这头一座厂熄灯，他那头一座厂亮灯，中间连着同一条供应链。\n\n这里要小心：这不是「谁赢谁输」的比赛。不是美国「衰落」、中国「崛起」，也不是反过来。是两边各自回应各自的处境，各有各的代价和收获。同一枚硬币的两面——这才是我后来想明白的那件事。',
        en: 'There is one thing I only understood much later.\n\nThe arc I climbed had, on the other side of the earth, an almost mirror-image arc rising at the same time.\n\nIn December 1978, China began its reform and opening. After that, factories rose along China\'s coast one by one. And in almost the same years, our Rust Belt factories closed one by one. In December 2001, China joined the WTO — the World Trade Organization, the global club that sets the rules for trade between countries — and the two economies tied together even more tightly.\n\nSome of the work that left my father\'s plant went into the hands of a Chinese worker I never met. That worker may have been just like me: he walked out of a poor place, joined a newly opened factory, had a steady income for the first time, and felt for the first time that life could climb.\n\nHis rise and my rise are two halves of the same globalization — the way trade, money, and jobs began to move freely all around the world. At my end a factory goes dark, at his end a factory lights up, and the same supply chain — the long line of factories that make and ship one product — runs between them.\n\nHere we must be careful: this is not a contest of who won. It is not America "declining" and China "rising," nor the reverse. It is two sides each answering its own situation, each with its own costs and gains. Two faces of one coin — that is the thing I came to understand.',
      },
      deliverGoal: 'N9 §9 China-bridge ONE clean idea — 他的上行弧线 ⊥ 地球另一头一条对称弧线同时往上 + 改革开放 1978.12 中国沿海开厂 vs 锈带关厂同段时间 + WTO 2001.12 绑更紧 + 父亲厂关掉的活儿去了一个没见过的中国工人手里 (那工人也从穷地方走出来/第一次稳定收入/觉得日子能往上) + 两个上行是同一场全球化的两半 (一头熄灯一头亮灯同一供应链) + Rule-0 不比赛 (不是衰落 vs 崛起/各自回应处境各有代价收获/同一硬币两面)',
      engagementHook: '我从穷地方走出来往上走，地球另一头一个我没见过的中国工人，同时也从穷地方走出来往上走。我们俩是同一场全球化的两半。如果你要给只看过其中一头的人讲另一头，你会从哪儿讲起？',
      expectsRealAnswer: false,
    },
    {
      id: 'con-winner-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n这里的真问题是：当一个时代的机器抬起一些人、又掏空另一些人，那个只是搭上电梯、走进了那扇开着的门的赢家，该为脚下的影子负责吗，还是他不过是个走了那扇门的普通人？\n\n一种说法：我没什么好怪的。我没发明全球化，没设计那套转向，它们在我成年前就开动了。我做的，是大多数人在我的位置都会做的事：好好念书、走向有工作的地方、抓住开着的那扇门。把一整个时代的账，压在一个只是「走了进去」的普通人头上，公平吗？\n\n另一种说法：「我只是走了进去」恰恰是这台机器能转下去的零件。它不靠几个特别坏的人，它靠成千上万个像我这样「正常」「努力」「抓住机会」的人——每个人都只是顺势走了那扇门，合起来，就是一座城的灯一盏盏熄掉。我从没亲手关过谁的厂，可我的上行，确实有一部分踩在别人下沉的力上。\n\n这两边不是「优点加缺点」。是同一个我的两面——一个抓住机会的普通人，和一台靠无数普通人才能转动的重组机器。\n\n你怎么看？想 30 秒，写下来。两边都站得住。',
        en: 'How to judge my whole life, both views stand.\n\nThe real question here is this. The changes of this era lift some people up. The same changes hollow others out. The winner only rode the escalator. He only walked through a door that stood open. Is he responsible for the shadow under his feet? Or is he just an ordinary person who took an open door?\n\nOne view: there is little to blame me for. I did not invent globalization, I did not design that turn; they were running before I was grown. What I did was what most people in my place would do: study hard, walk toward where the jobs were, take the door that stood open. Is it fair to press a whole era\'s bill onto an ordinary person who merely "walked in"?\n\nThe other view: "I merely walked in" is exactly the part that keeps this machine turning. It does not run on a few specially bad people. It runs on thousands of "normal," "hardworking," "opportunity-seizing" people like me — each only going with the current through an open door, and together, that is a town\'s lights going out one by one. I never closed anyone\'s plant with my own hands, yet part of my rise truly stood on the force that sank others.\n\nThese are not "strengths and weaknesses." They are two faces of the same me — an ordinary person who seized a chance, and a machine of restructuring that can only turn on countless ordinary people.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 机器抬一些人掏空另一些人时,只是搭电梯走进开着的门的赢家该为影子负责还是只是走了那扇门的普通人 / 一种说法 (没发明全球化/做大多数人会做的事/把整个时代账压一个走进去的普通人公平吗) / 另一种说法 (「只是走进去」恰是机器零件/靠成千上万正常努力抓机会的人/没亲手关厂但上行踩在别人下沉的力上) / 同一个我两面 / 想 30 秒 / 两边都站得住',
      engagementHook: '抓住机会的普通人，和让机器转下去的零件——是同一个我。当一个时代抬起一些人、掏空另一些人，那个只是走了那扇开着的门的人，该负责吗？两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'con-winner-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你听完了走出去的那个人。但你只听到了一边。\n\n你现在心里大概有了一个判断——他到底是个抓住机会的普通人，还是一台机器顺风口上的零件。把这个判断先攥在手里，别急着锁死。因为还有两个人，会来挑战它。\n\n那家留在城里的人，是一班一班看着城边那座工厂的灯熄下去的——同一座工厂，在我眼里是「还好我出来了」，在他们眼里是一场漫长的告别。还有那个 9/11 之后入伍的退伍军人，他回乡的时候，正好看见这座工厂被推平——对他，那是一个句号。\n\n同一座锈掉的工厂，三个人，三样东西。我只给了你其中一样。\n\n所以在你合上这一遍之前，留着一个问题在心里：你还没听到谁的声音？等你换一个视角再走一遍，回头看看，今天这个判断，还站得住吗？',
        en: 'You have heard the one who got out. But you have heard only one side.\n\nYou probably hold a judgment now — whether he is an ordinary person who seized a chance, or a part on a machine\'s favorable wind. Hold that judgment in your hand for now; do not rush to lock it. Because two more people will come to challenge it.\n\nThe family that stayed in town watched the lights of that factory on the edge of town go out, shift by shift. The same factory that to me was "thank God I got out" was, to them, a long goodbye. And the veteran who enlisted after 9/11 came home just in time to see this factory torn down — to him, it was a period at the end of a sentence.\n\nThe same rusted factory, three people, three different things. I gave you only one of them.\n\nSo before you close this pass, keep one question in your heart: whose voice have you not heard yet? When you switch to another view and walk through again, look back — does today\'s judgment still stand?',
      },
      deliverGoal: 'N11 close/meta — 你听完走出去的人但只听到一边 + 把判断攥手里别锁死 + 跨视角指针 (承受端家庭看灯一班班熄=漫长告别 / 退伍军人回乡看工厂被推平=句号) + 同一座锈工厂三人三样我只给一样 + Learning Receipt 必问「你还没听到谁的声音」+ 换视角再走回头看判断还站得住吗',
      engagementHook: '同一座锈掉的工厂，在我眼里是「还好我出来了」，在留下那家人眼里是漫长的告别，在退伍军人眼里是个句号。我只给了你其中一样。你还没听到谁的声音？',
      expectsRealAnswer: true,
    },
  ],
};

export var veteranLens = {
  id: 'veteran-mediator',
  name: 'The Veteran',
  nameCn: '退伍军人',
  role: 'lonely-mediator',
  perspectiveTag: 'served-belongs-to-no-side',
  icon: '🎖️',
  description: {
    cn: '一个复合人物,代表 9/11 之后入伍、在阿富汗或伊拉克服过役的那一代美国退伍军人,没有具名。约 1985 年生在一个普通美国家庭。2001 年 9 月 11 日那天,他还在上高中,看着电视里的双塔,做了改变一生的决定。他替这个国家打了仗,回来发现国家正在为一切争吵,连他打的那场仗值不值,两边都各执一词。这一遍让你站在所有边的中间,看一个见过每一边、却不属于任何一边的人,怎么背一段使命与代价同体的历史回家。',
    en: 'A composite, standing for the generation of American veterans who enlisted after 9/11 and served in Afghanistan or Iraq, with no given name. Born around 1985 to an ordinary American family. On September 11, 2001, he was still in high school, watching the towers on television, and made a decision that changed his life. He fought for this country and came home to find it arguing about everything, including whether the war he fought was worth it, with both sides certain. This pass puts you in the middle of every side, watching a man who saw each side yet belonged to none carry home a history where the mission and its cost are one body.',
  },
  storyboard: [
    {
      id: 'con-veteran-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我在两个地方都待过,可哪个地方都不太算我的家。\n\n一个是战场。另一个,是我回来后的这个国家——它正在为一切争吵,吵得连一句完整的话都说不完。\n\n我是个退伍军人。这一遍我没有名字,因为我不是某一个人。我代表一代人:9/11 之后入的伍,在阿富汗或伊拉克打过仗,然后回来。我们成千上万,经历各不相同,可有一件事很像——我们都见过太多边,最后哪一边都没法完全站进去。\n\n人家问我:那场仗到底值不值?支持的人有支持的理由,反对的人有反对的理由。我两种声音都听过,因为我就在那中间。\n\n这一遍,你坐进我这个位置。你替一个国家上过战场,回来却发现,这个国家自己都还没想清楚:它当初为什么送你去。',
        en: 'I have lived in two places, and neither is quite my home.\n\nOne was the war. The other was this country I came back to, which was arguing about everything, arguing so hard it could not finish a single sentence.\n\nI am a veteran. In this pass I have no name, because I am not one person. I stand for a generation: those who enlisted after 9/11, fought in Afghanistan or Iraq, and came home. We are tens of thousands, our stories all different, yet one thing is alike. We have all seen too many sides, and in the end could not fully stand on any one of them.\n\nPeople ask me: was the war worth it? Those who say yes have their reasons; those who say no have theirs. I have heard both voices, because I stood in between them.\n\nThis pass puts you in my seat. You went to war for a country, and came home to find the country had not yet worked out, for itself, why it sent you in the first place.',
      },
      deliverGoal: 'N1 hook — 战场 + 回来的国家两处都不算家 + composite 退伍军人自我介绍 (无名/代表 9/11 后入伍服役阿富汗或伊拉克一代) + 见过太多边哪边都站不进去 + 那场仗值不值支持反对各有理由他在中间 + 这一遍视角设定 (替国家上战场回来发现国家自己没想清为何送你去)',
      engagementHook: '我替一个国家打过仗,回来却发现它自己都没想清当初为什么送我去。在所有人都急着选边的时候,你能不能不选边,只先把每一边都听完?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-veteran-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说那一天,你才懂我为什么去。\n\n2001 年 9 月 11 日早上,我还在上高中。教室里的电视开着。劫机者撞进纽约的世贸双塔,又撞进五角大楼,约 2,977 人那一天没能回家。这是我这代人最深的一道集体创伤。\n\n那种感觉,你今天可能很难想象:整个国家,一夜之间,变成了一个人。\n\n平时大家吵东吵西的——红的蓝的、城里乡下、谁对谁错。可那几个礼拜,国旗挂满了每一条街,陌生人在加油站点头,大人在饭桌上不再吵架。所有人忽然站到了同一边。\n\n我就是在那种感觉里举的手。不是被谁逼的,也不是为了钱。是因为那几个礼拜,我第一次觉得「我们」是真的——一个真的、值得替它去拼的「我们」。\n\n记住这种「我们」的感觉。这一遍后面你会看见,它后来碎得有多快。',
        en: 'First, that day, so you understand why I went.\n\nOn the morning of September 11, 2001, I was still in high school. The television in the classroom was on. Hijackers struck the World Trade Center towers in New York, then the Pentagon, and about 2,977 people did not come home that day. It is the deepest collective wound of my generation.\n\nThe feeling is hard to imagine now: the whole country, overnight, became one person.\n\nNormally everyone quarreled over everything, red and blue, city and country, who was right and who was wrong. But for those few weeks, flags hung on every street, strangers nodded at gas stations, grown-ups stopped fighting at the dinner table. Everyone suddenly stood on the same side.\n\nThat was the feeling I was in when I raised my hand. No one forced me, and it was not for money. It was because, for those few weeks, I felt for the first time that "we" was real, a real "we," worth going to fight for.\n\nRemember that feeling of "we." Later in this pass you will see how fast it broke.',
      },
      deliverGoal: 'N2 setup — 2001.9.11 高中教室电视 9/11 (双塔+五角大楼/约 2,977 人遇难/这代人最深集体创伤) + 罕见全国团结 (国旗挂满街/陌生人点头/不吵架/所有人站同一边) + 他在这团结感里举手入伍 (不被逼不为钱/第一次觉得「我们」是真的) + 伏笔「我们」碎得有多快',
      engagementHook: '9/11 之后那几个礼拜,整个国家一夜之间像变成了一个人——这种「我们」的感觉,我是在里面举的手。一个让所有人忽然站到一边的时刻,你经历过吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-veteran-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我举手那会儿,心里的画面很简单。\n\n有人伤害了我们,我去保护我们。就这么直。十七八岁的脑子,装不下更复杂的东西,也不需要。\n\n2001 年 10 月 7 日,美国出兵阿富汗——那是「我们被打了,所以我们出手」最直接的一步。我训练、入伍,跟着这股劲往前走。\n\n那时候没人跟我细讲「为什么」背后那些绕来绕去的算计。给我的版本很干净:坏人在那边,我们去把人保护好。我信了,因为我需要信。一个要去把命押上的人,得先有一个他信得过的理由。\n\n后来我才慢慢懂:一个国家送人去打仗,递到士兵手里的那个理由,常常是被磨干净、最好咽的那一个版本。真实的理由,要复杂得多,也吵得多。\n\n可那时候我不知道。我只知道,我们被打了,我得去。',
        en: 'When I raised my hand, the picture in my head was simple.\n\nSomeone hurt us, and I would go protect us. That direct. A seventeen-or-eighteen-year-old mind cannot hold anything more complicated, and does not need to.\n\nOn October 7, 2001, the US sent forces into Afghanistan, the most direct step of "we were struck, so we strike back." I trained, enlisted, and moved forward with that momentum.\n\nNo one back then walked me through the tangled calculations behind the "why." The version I was given was clean: the bad people are over there, we go and keep people safe. I believed it, because I needed to. A man about to stake his life needs first a reason he can trust.\n\nOnly later did I slowly understand: when a country sends people to war, the reason handed to the soldier is often the version most polished, easiest to swallow. The real reasons are far more complicated, and far more argued over.\n\nBut back then I did not know that. I only knew we had been struck, and I had to go.',
      },
      deliverGoal: 'N3 setup — 入伍时心里画面简单 (有人伤害我们我去保护我们/十七八岁脑子装不下更复杂) + 2001.10.7 出兵阿富汗 = 「被打了所以出手」最直接一步 + 给士兵的理由是磨干净最好咽的版本 + 后来才懂真实理由复杂得多吵得多 + 当时只知道被打了得去',
      engagementHook: '递到我手里那个理由很干净:坏人在那边,去把人保护好。后来我才懂,送人去打仗的国家,给士兵的常是磨得最好咽的那个版本。一个简单的理由,和一个复杂的真相,你愿意先知道哪个?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-veteran-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你在前线。不是电影里那种前线——大部分日子又热又闷又无聊,然后某几分钟里,什么都来得太快。\n\n你很快发现:出发前人家跟你讲的那场仗,和你每天真正在过的这场仗,是两回事。\n\n出发前的版本,是一句话能说清的:好人对坏人,去把事办了就回来。\n\n你真过的版本,是说不清的:哪边是「坏人」,常常没那么分明;你保护的人里,有人感激你,也有人只盼你们快走;你打的那个目标,这个月是这个,下个月又换成了别的。\n\n可在这一团说不清里,有一样东西特别清楚,清楚到你后来一辈子都靠它撑着——你身边那几个战友。你为他们活,他们为你活。\n\n这一刻你得想:当「为什么打」变得越来越模糊,「为谁打」却越来越具体——你到底是在为那个宏大的理由打,还是为身边这几个人打?',
        en: 'Now you are me.\n\nYou are at the front. Not the front from the movies. Most days are hot, stifling, and dull, and then in a few minutes everything comes too fast.\n\nYou soon find that the war they described to you before you shipped out and the war you actually live each day are two different things.\n\nThe pre-departure version can be said in one line: good against bad, go do the job and come home.\n\nThe version you actually live cannot be said cleanly. Which side is the "bad" one is often not so clear; among the people you protect, some are grateful, and some only wish you would leave; the objective you fight for is this thing this month and something else the next.\n\nYet inside all this haze, one thing is sharply clear, so clear you will lean on it the rest of your life: the few who serve beside you. You live for them, they live for you.\n\nHere you must ask: when "why we fight" grows blurrier and blurrier, while "who we fight for" grows more and more concrete, are you fighting for that grand reason, or for these few people beside you?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 前线非电影 (大多日子热闷无聊+某几分钟来太快) + 出发前讲的仗 vs 真过的仗两回事 (出发版本好人对坏人/真过版本哪边坏人不分明/有人感激有人盼你走/目标月月换) + 一团说不清里清楚的是身边战友 (你为他们活他们为你活) + 「为什么打」变模糊「为谁打」变具体 + 你为宏大理由打还是为身边几个人打',
      engagementHook: '出发前讲的那场仗,和我每天真过的那场仗,根本是两回事。「为什么打」越来越模糊,「为谁打」却越来越具体——只剩身边那几个战友。如果是你,你会为哪一个打下去?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-veteran-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得诚实告诉你,这场仗在我身上,从来不是只有一种颜色。\n\n它有它有意义的一面。纪律,让一群人能在最乱的时候不散。责任,是身边人的命真的握在你手上、你也真的护住了。还有那种把陌生人变成兄弟的东西——这些不是宣传,是我亲手摸到过的真东西。\n\n它也有它沉重的一面。有人没回来。回来的人,有的少了条腿,有的丢了某个晚上后就再没睡过一个整觉。仗打得太久,目标一变再变,你会在某个时刻问自己:我们到底在干什么,还要干到什么时候。\n\n这两面,不是「好的部分」加「坏的部分」。它们是同一段经历的同一张脸。同一段日子,既给了我这辈子最深的情谊,也给了我这辈子最重的东西。\n\n这就是为什么,后来听人用一句话给整场仗下结论,不管是哪句,我都接不上。因为我身上背的,从来不是一句话能装得下的。',
        en: 'I have to be honest with you: this war was never one color on me.\n\nIt had its side that meant something. Discipline let a group hold together in the worst chaos. Responsibility was the lives of those beside you truly in your hands, and you truly keeping them. And there was that thing that turns strangers into brothers, not propaganda, but a real thing I touched with my own hands.\n\nIt also had its heavy side. Some did not come back. Of those who did, some came back missing a leg, and some, after a certain night, never slept a whole night through again. The war ran too long, the objective shifted and shifted, and at some moment you ask yourself: what exactly are we doing, and for how much longer.\n\nThese two sides are not "the good part" plus "the bad part." They are one face of one experience. The same stretch of days gave me the deepest bonds of my life and also the heaviest thing of my life.\n\nThis is why, when I later heard someone sum up the whole war in one line, whichever line it was, I could not take it up. Because what I carry was never a thing one line could hold.',
      },
      deliverGoal: 'N5 story — 这场仗在他身上从不只一种颜色 + 有意义一面 (纪律/责任/把陌生人变兄弟,亲手摸到的真东西非宣传) + 沉重一面 (有人没回来/少腿/再没睡整觉/仗太久目标一变再变/我们在干什么干到什么时候) + 两面是同一张脸不是好+坏相加 (同一段日子给最深情谊也给最重的东西) + 所以听一句话下结论他接不上',
      engagementHook: '同一段日子,既给了我这辈子最深的情谊,也给了我这辈子最重的东西——它们是同一张脸,不是「好的」加「坏的」。一件事,能不能同时既珍贵又沉重?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-veteran-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们这一代,不止打了一场仗。\n\n2001 年 10 月,阿富汗。2003 年 3 月,又出兵伊拉克。同一代人,有人去了这边,有人去了那边,有人两边都去过。\n\n两场仗,捆在一个名字底下,叫「反恐战争」(War on Terror)。它定义了我们这代人成年的那十几年。\n\n你在前线,不太分得清政客嘴里那些大词。可你慢慢闻得出一种味道:这场仗,好像没有一个所有人都点头的「为什么」。阿富汗,大多数人一开始还认——那边和 9/11 直接连着。可到了伊拉克,你回家探亲,饭桌上、电视里、街角,你听见的不再是一个声音了。\n\n你站在那两种声音中间,身上还带着前线的灰。你比谁都想知道一个干净的答案:我打的这一仗,到底是不是对的?\n\n可那个答案,偏偏是整个国家最吵不出来的那一个。',
        en: 'My generation did not fight only one war.\n\nOctober 2001, Afghanistan. March 2003, forces sent into Iraq as well. The same generation: some went here, some went there, some to both.\n\nTwo wars, bound under one name, the War on Terror. It defined the dozen-plus years in which my generation came of age.\n\nAt the front, you cannot really sort out the big words in politicians\' mouths. But slowly you catch a scent: this war seems to have no "why" that everyone nods at. Afghanistan, most people accepted at first, it was directly linked to 9/11. But by the time of Iraq, when you went home on leave, at the dinner table, on the television, on the street corner, what you heard was no longer one voice.\n\nYou stand between those two voices, the dust of the front still on you. You want, more than anyone, one clean answer: was the war I fought right or not?\n\nAnd that answer happens to be the one the whole country can least argue its way to.',
      },
      deliverGoal: 'N6 story (setup the war-justification node) — 这代人不止一场仗 (2001.10 阿富汗 + 2003.3 伊拉克/有人去这边那边或两边) + 捆在「反恐战争 War on Terror」一个名字下定义这代人成年十几年 + 慢慢闻出没有所有人点头的「为什么」(阿富汗一开始多数人认/伊拉克回家听见不再是一个声音) + 他站两种声音中间最想要干净答案: 我打的仗对不对 + 偏偏是国家最吵不出的答案',
      engagementHook: '阿富汗,大多数人一开始还认;可到了伊拉克,我回家一听,街角、饭桌、电视里,不再是一个声音了。我最想知道我打的仗对不对——可这偏偏是整个国家最吵不出的答案。',
      expectsRealAnswer: false,
    },
    {
      id: 'con-veteran-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '到伊拉克这件事上,我得把话说得格外小心——因为这一仗值不值,到今天两边都还在吵,真的没吵出结果。我不替你选边,我把两边都摆给你听,你自己掂。\n\n先说能确证的事实:2003 年 3 月,美国出兵伊拉克。当时摆出的一个主要出兵理由,是说那里有「大规模杀伤性武器」(WMD)。后来,这种武器没有被找到——这件事本身引发了巨大争议。这一句,是事实,不是评价。\n\n再说两边怎么评价它:\n\n一种说法(支持出兵的人):这是 9/11 之后反恐的延伸,是要主动铲除一个被认定的威胁、保护美国的安全。在他们眼里,等到危险落地再反应,就太晚了。\n\n另一种说法(批评出兵的人):出兵的核心理由后来被证站不住,战争拖了太多年、代价太重——伤亡、花费、还有那个一直没找到的「为什么」。\n\n而我,就站在这两种说法正中间。我亲手打了这一仗;我也亲眼看着那个理由后来碎掉。支持的人说的有意义那一面,我经历过;批评的人说的沉重代价,我也背在身上。\n\n你看出我的难处了吗?两边各执一词,而我两边都站过——所以哪一句话,我都没法囫囵吞下去。',
        en: 'On the matter of Iraq, I have to choose my words with special care, because whether that war was worth it is still argued by both sides today, with no settled result. I will not choose a side for you. I will lay both sides out, and you weigh it yourself.\n\nFirst, what can be confirmed as fact: in March 2003, the US sent forces into Iraq. A main stated reason at the time was that there were "weapons of mass destruction" (WMD) there. Later, such weapons were not found, and that itself drew enormous dispute. This sentence is a fact, not a judgment.\n\nNow how the two sides judge it:\n\nOne view (those who supported sending troops): this was an extension of counterterrorism after 9/11, a move to remove a threat they believed in and to protect America\'s safety. In their eyes, to wait until the danger landed before reacting would be too late.\n\nThe other view (those who criticized sending troops): the core stated reason later failed to hold, the war dragged on for too many years, and the cost was too heavy, the casualties, the money, and that "why" that was never found.\n\nAnd I stand exactly in the middle of these two views. I fought this war with my own hands; I also watched that reason fall apart with my own eyes. The meaningful side the supporters speak of, I lived; the heavy cost the critics speak of, I carry on my body too.\n\nDo you see my difficulty? Both sides are certain, and I have stood on both, so neither line can I swallow whole.',
      },
      deliverGoal: 'N7 STORY — 伊拉克战争正当性节点 (Rule-0 最高党派风险,一票否决). 事实/评价分层: 事实层 (2003.3 出兵/WMD 理由/后未找到引巨大争议=事实非评价); 评价层严格并排 — 一种说法(支持出兵: 9/11 反恐延伸/铲除认定的威胁/保护安全/等危险落地太晚) vs 另一种说法(批评出兵: 核心理由后站不住/战争太久/代价太重伤亡花费+一直没找到的为什么). 退伍军人正站两种说法中间「两边都站过」= 结构性保险 (有意义一面经历过/沉重代价背在身上) + 哪句都没法囫囵吞. lesson 不下结论.',
      engagementHook: '一仗,支持的人说是反恐、是铲除威胁、是保护安全;批评的人说理由后来站不住、代价太重。我两边都站过,所以哪一句我都没法囫囵吞下去。如果是你,你会怎么把这两边都听进去?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-veteran-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '退伍那天,我以为最难的部分已经过去了。我错了。\n\n回家,是另一场我没受过训练的仗。\n\n身体回来了,可有些东西没全跟着回来。有的晚上睡不着,有的声音一响会让我瞬间绷紧——前线的那套本能,在和平的街上没地方放。这种说不出口的东西,后来人们有个词,叫看不见的伤。\n\n更难的是,我回到的不是 2001 年那个国家了。\n\n那个一夜之间变成「一个人」的国家,我走的这些年里,又裂回了无数片,而且裂得比以前更深。2008 年一场金融海啸刚把好多家庭的房子和退休账户冲掉一半;政治极化(political polarization)越来越凶,两党、两种美国,越来越说不到一块去。\n\n我替这个国家上过战场。可回来发现,它正忙着为一切互相生气——也包括为我打的那场仗,值不值。\n\n我站在自家客厅里,忽然懂了一件事:我在前线学会的本事是保护「我们」。可现在,我找不到那个完整的「我们」了。',
        en: 'The day I was discharged, I thought the hardest part was behind me. I was wrong.\n\nComing home was another war I had never been trained for.\n\nThe body came back, but some things did not fully come with it. Some nights I could not sleep; certain sounds would snap me tight in an instant, the front-line instinct with nowhere to go on a peaceful street. This thing hard to put into words later got a name: the wound you cannot see.\n\nHarder still, the country I returned to was no longer the country of 2001.\n\nThat country which had overnight become "one person," in the years I was gone, had split back into countless pieces, and split deeper than before. In 2008 a financial collapse had just wiped out half the houses and retirement accounts of many families; the country split harder into two opposite sides — two parties, almost two different Americas — that could less and less understand each other.\n\nI had gone to war for this country. And I came back to find it busy being angry with itself over everything, including over whether the war I fought was worth it.\n\nStanding in my own living room, I suddenly understood something: the skill I learned at the front was to protect "we." And now, I could not find that whole "we" anymore.',
      },
      deliverGoal: 'N8 story (coming home to polarized post-2008 country) — 退伍以为最难过去了错了/回家是没受训练的仗 + 看不见的伤 (睡不着/声音一响绷紧/前线本能在和平街上没处放) + 回到的不是 2001 那个国家了 (一夜变「一个人」的国家又裂回无数片裂得更深) + 2008 金融海啸冲掉房子退休账户一半 + 政治极化 polarization 两党两种美国说不到一块 + 他替国家上战场回来发现它忙着为一切生气包括他打的仗值不值 + 找不到那个完整的「我们」了',
      engagementHook: '我在前线学会的本事是保护「我们」。可回来发现,2001 年那个一夜变成「一个人」的国家,又裂回了无数片——我再也找不到那个完整的「我们」了。一个国家在没有外敌时,为什么反而更难团结?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-veteran-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我回乡那天,看见了一样东西,我一直记到现在。\n\n我从小长大那座城,是一座靠工厂吃饭的小城。城边那家工厂,正在被推平。我回来的时候,它正好倒下。\n\n那家厂,养过我们这一代很多人的爸妈。一个高中毕业的人,在那儿上班,就能养一家、买房、有医保。我小时候,它的灯三班倒地亮着。\n\n我在另一个大陆替这个国家打仗的那些年,这家厂先是裁员,再是把活儿挪去更便宜的地方——海洋另一头,有一家工厂正好开了起来,接走了我们这家厂送出去的活儿,那是同一条供应链的两头。一边的活儿走了,另一边的活儿来了,不是谁赢谁输,是同一件事的两头。等我回来,这边只剩一片推土机扬起的灰。\n\n对我,那家倒下的厂是个句号。我替这个国家在外面打了仗,回来正好赶上,亲眼看着我出发的地方,关上了最后一盏灯。\n\n(同一家厂,在别的人眼里,未必是个句号。换个视角,你会看见它在另一个人那里,是完全不同的一样东西。)',
        en: 'The day I came back to my hometown, I saw something I still remember.\n\nThe town where I grew up, a small town that lived off a factory, the factory at the edge of town was being torn down. I came back just as it was coming down.\n\nThat factory had fed the parents of many in my generation. A high-school graduate could work there and support a family, buy a house, have health coverage. When I was a child, its lights burned in three shifts around the clock.\n\nIn the years I was on another continent fighting for this country, the factory first laid people off, then moved the work somewhere cheaper. On the far side of an ocean, a factory had opened up and taken in the work this one sent out, two ends of the same supply chain — the long line of factories that make and ship one product. Work left one side and arrived on the other; not a contest of who won, just two ends of one thing. By the time I came back, all that was left here was the dust kicked up by bulldozers.\n\nTo me, that fallen factory was a period, a full stop. I fought for this country abroad, and came home just in time to watch, with my own eyes, the place I set out from switch off its last light.\n\n(The same factory, to others, may not be a period at all. Switch the angle, and you will see it as something entirely different in another person\'s eyes.)',
      },
      deliverGoal: 'N9 ANCHOR cross-lens + §9 China-bridge — 回乡看见城边工厂正被推平 (回来时正好倒下) + 厂养过这代人爸妈 (高中毕业上班养一家买房医保/小时候灯三班倒亮) + 他打仗那些年厂裁员再把活挪去更便宜地方 + §9 干净点到: 海洋另一头一家厂正好开起来接走活 = 同一条供应链两头 + 对他这家厂 = 一个句号 (回来赶上亲眼看出发的地方关最后一盏灯) + 跨 lens 指针 (同一家厂别人眼里未必是句号/换视角看见完全不同的东西) — 不揭示另外两义',
      engagementHook: '我在另一个大陆替这个国家打仗的那些年,我出发的那座城,城边的工厂关了——海洋另一头正好有一家开起来,接走了这边的活。我回来,正好赶上看它倒下。对我,它是个句号。',
      expectsRealAnswer: false,
    },
    {
      id: 'con-veteran-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,最难评的不是我,是这件事本身:一个国家,为它自己永远吵不拢的理由,送了一个人去打仗——那场争吵的重量,最后该由谁来背?而那个真去打了的人,还能不能得到一个干净的答案?两种说法都站得住。\n\n一种说法:那笔账,主要落在送他去的国家身上。是这个国家在没想清楚、没吵明白的时候,先把人送上了战场;理由后来碎了,代价却已经付了。一个士兵的责任,是去;弄清「值不值」、给他一个交代,是送他去的那个国家欠他的。这个交代没给,亏的是国家。\n\n另一种说法:有些重量,本来就没有干净的答案可分。一场牵动整个国家、又离我们太近的战争,它的对错,可能要很多年、甚至几代人之后,才看得清——也可能永远看不清。逼着此刻就给一个「值还是不值」的最终判决,对历史不诚实。诚实的做法,是承认我们现在还看不全,把两边的账并排摆着,继续掂。\n\n这两边,不是「怪国家」对「怪历史太近」。它们是同一道难题的两张脸——当一件事的重量,大到没有一个人、一个时代背得动,我们到底该把它放下,还是继续背着?\n\n你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Of my whole life, the hardest thing to judge is not me. It is the thing itself. A country sent a person to fight for reasons it can never agree on. Who, in the end, should carry the weight of that disagreement? And can the one who actually went and fought ever get a clean answer? Both views stand.\n\nOne view: that bill falls mainly on the country that sent him. It was this country that, before it had thought things through or argued them out, sent a person to war; the reason later fell apart, but the cost had already been paid. A soldier\'s duty is to go; to work out "was it worth it" and give him an account is what the country that sent him owes him. That account was never given, and the failing is the country\'s.\n\nThe other view: some weights simply have no clean answer to be divided up fairly. A war that moved a whole nation, and lies too close to us in time, may take many years, even generations, before its rights and wrongs come clear, and may never come clear. To force a final verdict of "worth it or not" right now is dishonest to history. The honest thing is to admit we cannot yet see the whole, set both sides\' accounts side by side, and keep weighing.\n\nThese are not "blame the country" against "blame the nearness of history." They are two faces of one hard problem: when the weight of a thing is too great for any one person, any one age, to carry, should we set it down, or keep carrying it?\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 国家为永远吵不拢的理由送人打仗那争吵的重量该谁背/真去打的人能否得到干净答案 (present both framings, neutral) / 一种说法 (账落在送他去的国家/没想清就送人理由碎了代价已付/给交代是国家欠他的) / 另一种说法 (有些重量没干净答案/离太近要几代人才看清或永远看不清/逼此刻下最终判决对历史不诚实/把两边账并排继续掂) / 同一道难题两张脸 (重量太大没人背得动该放下还是继续背) / 想 30 秒两边都站得住. NO partisan tip — Iraq War 评价不下结论.',
      engagementHook: '一个国家为它永远吵不拢的理由送人去打仗——那争吵的重量该谁背?那个真去打了的人,能不能得到一个干净的答案?两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'con-veteran-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生,你会怎么评价一个见过每一边、却不属于任何一边的人?\n\n我替一个国家上了战场,回来发现它正为一切争吵,也为我打的那场仗值不值争吵。我见过那场仗有意义的一面,也背着它沉重的一面;我听过支持的人,也听过反对的人;我哪一边都站过,所以哪一边都不完全是我的。我想要一个干净的答案,而我最可能,一辈子都等不到它。把这样一生放上天平,你怎么称——是夹在中间的迷失,还是一种别人没有的、能看见所有边的清醒?\n\n再想一步。你现在只听到了我这一边。那个搭上时代电梯、一路向上、把那座小城甩在身后的人;还有那个留在小城里、一班一班看着工厂灯熄的家庭——同一座城、同一家厂、同一个 40 年,在他们嘴里,会是完全不同的故事。\n\n他们会来挑战你现在的判断。\n\n还有,城边那家被推平的厂——我管它叫一个句号。换个位置再看一眼,你大概会发现,在另一个人那里,它根本不是一个句号。',
        en: 'Having walked my whole life, how would you judge a man who saw every side yet belonged to none?\n\nI went to war for a country and came home to find it arguing about everything, including whether the war I fought was worth it. I saw the meaningful side of that war, and I carry its heavy side; I heard those who supported it, and those who opposed it; I stood on every side, so no side is fully mine. I wanted a clean answer, and most likely I will wait my whole life and never get one. Put a life like this on the scale. How do you weigh it: a lostness caught in the middle, or a clarity others do not have, the clarity of one who can see every side?\n\nThen take one more step. You have heard only my side so far. The man who caught the elevator of the era and rode upward, leaving that small town behind; and the family that stayed in the town, watching the factory\'s lights go out shift by shift, the same town, the same factory, the same 40 years, in their mouths will be completely different stories.\n\nThey will come to challenge the judgment you hold now.\n\nAnd that factory at the edge of town, torn down, I called it a period, a full stop. Look once more from another place, and you will probably find that in another person\'s eyes, it was never a period at all.',
      },
      deliverGoal: 'N11 close/meta — 评价见过每一边却不属于任何一边的人 (替国家上战场回来发现它为一切争吵含他打的仗值不值/见有意义也背沉重/听支持也听反对/哪边都站过哪边都不完全是我的/想要干净答案一辈子等不到) 天平: 夹中间的迷失还是能看见所有边的清醒 + 跨视角指针 (只听到我这一边/搭电梯向上甩开小城的人 + 留小城看工厂灯熄的家庭/同一城同一厂同一 40 年完全不同的故事/他们会来挑战你的判断) + recurring image 暗示 (城边被推平的厂他叫句号/换位置再看在别人那里根本不是句号) — 不揭示另两义具体内容',
      engagementHook: '我见过每一边,却不属于任何一边。你会怎么评价这样一个人?现在你只听到了我这一边——那个搭上电梯向上的人、那个留在小城看工厂灯熄的家庭,会来挑战你的判断。还有那家厂,我叫它句号,换个位置再看,它也许根本不是。',
      expectsRealAnswer: true,
    },
  ],
};

export var rustbeltFamilyLens = {
  id: 'rustbelt-family-receiving-end',
  name: 'The Family That Stayed',
  nameCn: '留下来的人家',
  role: 'receiving-end',
  perspectiveTag: 'paid-for-the-restructuring',
  icon: '🏭',
  description: {
    cn: '一个复合家庭,代表锈带制造业小城里千千万万个工薪家庭,不是某一个真实的人家。讲述人是这家的女儿:1980 年她还是个在工厂汽笛声里长大的孩子,到故事结尾,她自己也成了这座城里的母亲。她父亲在城边那家工厂上班,那是一份高中毕业就能养活一家的活儿。这一遍让你站在四十年大重组的承受端,看着账单一笔一笔落到自家桌上。',
    en: 'A composite family, standing for the countless working households in Rust Belt factory towns, not any one real family. The narrator is the daughter of the house. In 1980 she is a child growing up to the sound of the factory whistle, and by the end of the story she has become a mother in that same town herself. Her father works at the plant on the edge of town, a job a high-school graduate could raise a whole family on. This pass puts you at the receiving end of forty years of restructuring, watching the bill land on your own kitchen table, one piece at a time.',
  },
  storyboard: [
    {
      id: 'con-family-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我是听着工厂的汽笛长大的。\n\n1980 年,我还是个孩子,住在{{userCity|这一带}}一座工业小城。城边有一家大工厂,河边的厂房、铁桥、烟囱,烟囱整天冒烟。早班、中班、晚班,三班倒,灯几乎从不灭。\n\n那家工厂是我们全城的心脏。我爸在里面上班。这份活儿,高中毕业就能干,可它给的是体面的时薪、有医保、有退休金 —— 我爸一个人上班,就养得起我们一家。\n\n那时候主街很热闹。店开着,人来人往。谁家孩子高中毕业,顺理成章进厂,接着买房、成家。这条路,清清楚楚摆在那儿。\n\n这一遍,你站在我们这一头。你会看见这座城往后四十年的样子 —— 那家工厂的灯,是怎么一班一班,熄下去的。',
        en: 'I grew up listening to the factory whistle.\n\nIn 1980 I was a child, living in a factory town around {{userCity|here}}. On the edge of town stood a big plant — the mill by the river, the iron bridge, the smokestacks, and the stacks smoked all day. Day shift, swing shift, night shift, three turns around the clock, and the lights almost never went out.\n\nThat plant was the heart of our whole town. My father worked inside it. The job was one you could get with a high-school diploma, yet it paid a decent wage, with health insurance and a pension. My father worked, just him, and it was enough to keep our whole family.\n\nBack then Main Street was busy. The stores were open, people came and went. When a kid finished high school, he went into the plant, and then bought a house, started a family. That road lay there, plain to see.\n\nThis pass, you stand at our end. You will see what this town becomes over the next forty years — how the lights of that plant went out, shift by shift.',
      },
      deliverGoal: 'N1 hook — 1980 {{userCity|这一带}} 工业小城 + 城边大工厂 (河边厂房/烟囱/三班倒灯不灭) 是全城心脏 + 父亲在里面上班 (高中毕业就能干/体面时薪+医保+退休金/一人养全家) + 主街热闹一条清楚的路 + 这一遍视角 (站在承受端看灯一班班熄)',
        engagementHook: '1980 年,一份高中毕业就能干的活儿,足够养活我们一家。这样一条「清清楚楚摆在那儿」的路,你身边还有吗?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-family-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先讲讲那家工厂,在我们家是什么。\n\n它不只是我爸领工钱的地方。我爷爷也在那儿干过。我家好几个亲戚、街坊邻居,都在那厂里上班。一座城,大半个城,都靠着那一家厂活着。\n\n厂里有工会。工会替工人争来了体面的工钱、医保、退休金 —— 我爸常说,这些不是老板发善心给的,是一代工人一点点争来的。\n\n我记得我爸下班回家,身上有机油味。他累,可他踏实。他知道,只要厂在,只要他还能上班,这个家就稳。\n\n那时候没人觉得这会变。工厂在那儿几十年了,在我爷爷之前就在。它像河,像桥,像这座城本身一样,理所当然。\n\n现在回头看,我们都太把它当成「永远」了。',
        en: 'First, let me tell you what that plant was, to our family.\n\nIt was not only the place my father drew his pay. My grandfather had worked there too. Several of my relatives, our neighbors down the street, all worked in that plant. A town, most of a town, lived off that one plant.\n\nThe plant had a union. The union had won the workers decent pay, health insurance, a pension. My father used to say these were not a boss\'s charity. A generation of workers fought for them, bit by bit.\n\nI remember my father coming home from his shift, the smell of machine oil on him. He was tired, but he was steady. He knew that as long as the plant stood, as long as he could go to work, this family held.\n\nBack then no one thought it would change. The plant had been there for decades, there before my grandfather. Like the river, like the bridge, like the town itself, it was simply a given.\n\nLooking back now, we all took it too much for "forever."',
      },
      deliverGoal: 'N2 setup — 工厂在这家的意义 (爷爷也干过/亲戚街坊都在厂里/大半个城靠它活) + 工会争来体面工钱医保退休金 (不是老板善心是一代工人争的) + 父亲下班机油味累但踏实 (厂在家就稳) + 没人觉得会变像河像桥理所当然 + 「太把它当永远了」',
        engagementHook: '工会争来的医保和退休金,我爸说不是老板发善心,是一代工人一点点争来的。你享受的某些「理所当然」,会不会其实是有人替你争来的?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-family-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '地第一次动,是 1980 年代。\n\n我还在上学。先是听大人压低声音说「厂里要裁人了」。然后真的裁了 —— 邻居家的叔叔,干了二十年,接到通知,没了工作。\n\n那几年,远处有些大事在发生,大人在电视机前争论。我那时小,听不太懂,只记得几个词反复出现:减税、放松管制、市场。有人说这是好事,说它会让经济重新有活力;也有人说,这会让像我们这样的人,越来越没保障。\n\n这些词,落在小城里,就变成了很具体的东西:厂里的活儿少了,先是加班没了,接着是裁员。\n\n我那时不懂那些大词。我只懂一件事:晚饭桌上,爸妈不再像从前那样有说有笑了。妈妈开始算账,算得很仔细。\n\n一个孩子最先察觉到的,从来不是新闻。是家里的空气,变了。',
        en: 'The ground first moved in the 1980s.\n\nI was still in school. First I heard the grown-ups say, in lowered voices, "they\'re cutting jobs at the plant." Then they really did — an uncle next door, twenty years on the job, got the notice, and his work was gone.\n\nIn those years, big things were happening far off, and the grown-ups argued in front of the television. I was young then and did not follow it well; I only remember a few words coming up again and again: tax cuts, deregulation, the market. Some said this was a good thing, that it would put life back into the economy. Others said it would leave people like us with less and less protection.\n\nThese words, landing in a small town, turned into something very concrete: less work at the plant. First the overtime went, then the layoffs.\n\nI did not understand the big words then. I understood one thing: at the dinner table, my parents no longer laughed and talked the way they used to. My mother started counting the money, counting it carefully.\n\nWhat a child notices first is never the news. It is the air in the house, changing.',
      },
      deliverGoal: 'N3 setup — 1980s 地第一次动 (大人压低声说裁人/邻居叔叔干二十年接到通知没了工作) + 远处大事电视前争论 (减税/放松管制/市场 几个词反复出现/支持说重新有活力 vs 批评说越来越没保障 并排不下结论) + 落在小城变具体 (加班没了→裁员) + 孩子最先察觉的是家里空气变了 (晚饭桌不再有说有笑/妈妈仔细算账)',
        engagementHook: '电视上大人争「减税、放松管制」好不好,我那时听不懂。我只懂晚饭桌上爸妈不笑了。大事落到一个家里,最先变的是什么?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-family-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你长大了。1990 年代,你高中毕业。\n\n你本来以为,你会像你爸、像你爷爷那样,进那家厂,接着买房、成家 —— 那条清清楚楚的路。\n\n可路没了。\n\n你毕业那几年,厂裁得更狠了。1994 年,你听大人说起一个新协定,叫 NAFTA(北美自由贸易协定),美国、加拿大、墨西哥之间做生意更容易了。支持的人说,这让东西更便宜、让经济做大;可在你们这座城里,很多人说的是另一句:活儿,挪到边境那头去了。\n\n你站在毕业那个路口。厂进不去了,进得去的也是更短的合同、更低的工钱、没了从前那些保障。\n\n你心里要做一个决定 —— 这个决定,你这座城里的每一个同龄人都在做:\n\n是走,还是留?\n\n走,去大城市,去那个据说「在往上走」的世界,可那意味着离开家、离开这座城、离开爸妈。留,守着这座城和这个家,可你看得见,这座城正在往下沉。\n\n你怎么选?',
        en: 'Now you are me.\n\nYou have grown up. In the 1990s, you finish high school.\n\nYou had thought you would do as your father did, as your grandfather did — go into that plant, then buy a house, start a family. That road, plain to see.\n\nBut the road is gone.\n\nIn the years you graduate, the plant cuts harder. In 1994 you hear the grown-ups talk about a new agreement called NAFTA, the North American Free Trade Agreement, making it easier to do business among the United States, Canada, and Mexico. The people for it say it makes things cheaper and grows the economy. But in your town, what many people say is a different line: the work moved to the other side of the border.\n\nYou stand at the crossroads of graduation. The plant is closed to you now, and what work is left is shorter contracts, lower pay, and none of the old protections.\n\nIn your heart you must make a decision — a decision every person your age in this town is making:\n\nLeave, or stay?\n\nLeave, for the big city, for that world that is supposedly "going up." But that means leaving home, leaving this town, leaving your parents. Stay, hold on to this town and this family. But you can see it: this town is sinking.\n\nWhich do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1990s 高中毕业本以为像父亲爷爷进厂买房成家但路没了 + 1994 NAFTA (支持说东西更便宜经济做大 vs 城里人说活儿挪到边境那头 并排不下结论) + 站在毕业路口厂进不去/剩短合同低工钱没保障 + 每个同龄人都在做的决定: 走还是留 (走=去往上走的大城市但离开家/留=守城和家但城在往下沉)',
        engagementHook: '走,去那个「在往上走」的世界,可要离开家;留,守着家,可这座城在往下沉。每个同龄人都在做这个决定。换你,你走还是留?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-family-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我留下了。\n\n不是因为我多勇敢,也不是我没想过走。是因为我爸妈在这儿,这座城是我的家,我舍不得。\n\n我在镇上找了活儿干。不是工厂那种 —— 工厂的好岗位越来越少 —— 是服务业:超市、餐馆、后来的仓库。这些活儿,时薪比我爸当年低,大多没有医保,更别提退休金。同样是干活,可那种「一个人上班养一家」的日子,回不来了。\n\n我结了婚,生了孩子。我成了这座城里的一个母亲 —— 跟当年我妈一样,在晚饭桌上,仔细地算账。\n\n这些年,我常听到一个词:全球化。说我们的工作,流向了世界上更便宜的地方。\n\n至于为什么会这样,我老实告诉你 —— 我说不清。有人说是工作搬去了海外;有人说是机器换了人,跟外国没关系;有人怪那些协定,怪签字的政客;有人说,就是这世界变了,挡不住。\n\n这些说法我都听过。哪个对?我不知道。我只知道,不管是哪个,账,是落在我们这样的家庭头上的。',
        en: 'I stayed.\n\nNot because I was brave, and not because I never thought of leaving. It was because my parents were here, this town was my home, and I could not bear to go.\n\nI found work in town. Not the factory kind — the good plant jobs were fewer and fewer — but service work: the supermarket, a restaurant, later a warehouse. These jobs paid less by the hour than my father\'s once did, most with no health insurance, let alone a pension. The same work, and yet those days of "one person\'s job keeping a whole family" were not coming back.\n\nI married, I had children. I became a mother in this town — and like my own mother before me, at the dinner table, I counted the money carefully.\n\nOver these years I kept hearing one word: globalization. That our jobs had flowed to cheaper places in the world.\n\nAs for why it happened, I will tell you honestly — I cannot say for sure. Some say the jobs went overseas. Some say the machines took them, and it had nothing to do with foreign countries. Some blame the trade deals, blame the politicians who signed them. Some say the world just changed, and there was no stopping it.\n\nI have heard all of these. Which is right? I do not know. I only know that whichever it is, the bill lands on families like ours.',
      },
      deliverGoal: 'N5 story — 她留下 (不是勇敢/父母在这儿是家舍不得) + 镇上服务业活 (超市/餐馆/仓库,时薪比父亲低/多没医保/没退休金/一人养一家回不来了) + 结婚生子成了这座城的母亲跟当年她妈一样仔细算账 + 听到「全球化」 + Rule-0 核心: 为什么会这样她说不清,列竞争性解释 (有人说搬海外/有人说机器换人跟外国无关/有人怪协定怪政客/有人说世界变了挡不住) 不挑一个 +「不管哪个,账落在我们头上」',
        engagementHook: '工作为什么没了?有人说搬去了海外,有人说机器换了人,有人怪签协定的政客,有人说世界就是变了。我都听过 —— 哪个对,我真不知道。一件事的痛很确定,可它的原因没有定论时,你会怎么去理解它?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-family-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我带你回到城边那家工厂。它怎么没的,我是一班一班,看着它熄灯的。\n\n先是晚班停了。从前晚上路过,厂房灯火通明;有一年,晚班那排灯,黑了。\n\n再过些年,中班也停了。厂区一天里亮灯的时候越来越短。\n\n最后,2000 年代某一年,整座厂关了。门口贴出一张通知 —— 冷冰冰一页纸:本厂将于某月某日永久关闭。\n\n关厂那天,没有什么大场面。就是有一天,那家几十年没断过的烟囱,不冒烟了。河边那片厂房,玻璃开始碎,门口开始长草,铁皮慢慢锈成红褐色。\n\n那家厂,是我爷爷干过的、我爸干了一辈子的、我本以为我也会进去的地方。\n\n我得告诉你一件事:同一家关掉的工厂,在别人眼里,是另一个样子。那个早早离开、搭上往上电梯的人,把它甩在身后,对他那也许是解脱。可对我 —— 一班一班看着它灯熄下去的人 —— 那是一场很长很长的告别。\n\n同一座空厂房,站的位置不同,看见的东西就不一样。',
        en: 'Let me take you back to that plant on the edge of town. How it went — I watched its lights go out, shift by shift.\n\nFirst the night shift stopped. You used to pass by at night and the mill blazed with light; one year, that row of night-shift lights went dark.\n\nA few years on, the swing shift stopped too. The hours the plant was lit grew shorter and shorter in a day.\n\nAt last, some year in the 2000s, the whole plant closed. A notice went up at the gate — one cold sheet of paper: this plant will permanently close on such-and-such a date.\n\nThe day it closed, there was no great scene. There was just a day when the smokestacks that had not stopped for decades stopped smoking. By the river the mill\'s windows began to break, weeds came up at the door, and the sheet metal slowly rusted red-brown.\n\nThat plant was where my grandfather had worked, where my father worked his whole life, where I had thought I too would go.\n\nAnd here is a thing I must tell you: the same closed plant looks like something else to other people. The one who left early and rode the escalator up put it behind him; to him it may have been a release. But to me — the one who watched its lights go out shift by shift — it was a long, long goodbye.\n\nThe same empty mill. Stand in a different place, and you see a different thing.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 城边工厂怎么没的,她一班一班看着熄灯 (晚班停→中班停→2000s 某年整座关/门口贴冷冰冰通知永久关闭) + 关厂那天没大场面 (烟囱不冒烟/玻璃碎/长草/铁皮锈红褐) + 那是爷爷干过/爸爸干一辈子/她本以为也进去的地方 + 跨 lens 对位: 同一家工厂「搭上电梯的人」甩在身后是解脱 vs 她一班班看灯熄是很长的告别 +「站的位置不同看见的不一样」。只从她角度,不替另两视角下结论',
        engagementHook: '同一座空厂房 —— 在那个早早离开的人眼里是解脱,在我眼里是一场很长很长的告别。同一件事,为什么落在不同人身上,意思能完全相反?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-family-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我以为厂关了,就是最低谷了。我错了。后面还有几拳。\n\n2008 年,一场金融危机砸下来。我不太懂华尔街那些事 —— 什么次贷、什么雷曼。我只知道结果:好多人的房子保不住了,退休账户的钱缩了一半,本来勉强撑着的工作,又一批没了。\n\n这一拳,连那些「过得还行」的人家,都被打懵了。\n\n至于这场危机该怪谁,跟从前一样,我又听见两本对不上的账:一边说是华尔街太贪、管得太松;一边说是借钱借太狠、政策也在推着借。两边的账,到今天也没合上。我分不清谁对。我只看见,街坊家一户接一户,挂出了「待售」的牌子。\n\n接着,更安静、更要命的一拳来了:药。\n\n先是医生开的止痛药,大家都信那是治病的;后来才发现它会让人离不开。再后来是海洛因,是更厉害的芬太尼。我们这座城,开始有人因为药,走了 —— 年轻人,我看着长大的孩子。\n\n主街上的店,一家接一家,熄了灯。',
        en: 'I thought once the plant closed, that was the bottom. I was wrong. There were more blows to come.\n\nIn 2008 a financial crisis came down. I do not understand the Wall Street side of it — subprime this, Lehman that. I only knew the result: many people could not keep their houses, the money in retirement accounts shrank by half, and the jobs that had barely held on were cut, another round of them.\n\nThis blow stunned even the families that had been "doing all right."\n\nAs for who to blame for the crisis, the same as before, I heard two ledgers that would not add up: one side says Wall Street was too greedy and the rules too loose; the other says people borrowed too hard, and policy was pushing the borrowing too. The two ledgers have not closed to this day. I cannot tell who is right. I only saw, house after house down the street, "For Sale" signs go up.\n\nThen a quieter, deadlier blow came: drugs.\n\nFirst the painkillers a doctor prescribed, which everyone trusted as medicine; only later did people learn it could take hold of you and not let go. Then heroin, then fentanyl, a drug so strong that a tiny amount can kill. In our town, people began to die from it — young people, kids I had watched grow up.\n\nOn Main Street, the stores went dark, one after another.',
      },
      deliverGoal: 'N7 story — 以为厂关是最低谷错了还有几拳 + 2008 金融危机 (她不懂次贷/雷曼只知结果: 房保不住/退休账户缩一半/工作又一批没了/连过得还行的人家也被打懵) + Rule-0 2008 归因两本对不上的账 (一边华尔街太贪管太松 vs 一边借太狠政策推着借/至今没合/她分不清谁对) 并排不下结论 +「待售」牌子一户接一户 + 更安静更要命一拳: 药 (医生开的止痛药→海洛因→芬太尼/年轻人她看着长大的孩子因药走了) + 主街店一家家熄灯',
        engagementHook: '2008 这场危机该怪谁?一边说华尔街太贪,一边说借钱借太狠 —— 两本账到今天也没合上。当一件造成真实伤害的事,连原因都没人说得清,你会怎么面对它?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-family-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我不想让你以为,我们这一头只有失去。那不是全部的真相。\n\n是的,这座城被掏空了一大半。可我们没躺下。\n\n我有个朋友,厂关了以后,去读社区大学,转行做了护理,现在在医院上班。我有个表弟,在主街盘下一个空铺子,开了家小修车行,慢慢做起来了。有人搬走了,去别的地方重新开始;也有人,像我一样,留下来,守着这座城。\n\n我自己呢,我把我的孩子拉扯大了。我教他们一件事:这座城给过你爷爷、你太爷爷一份体面的活儿,它现在难,但它是我们的根。\n\n承受端,不等于失败者。我们是这四十年大重组,真实落地的那一头。重组在新闻里是数字、是百分比;在我们这儿,是一个个具体的人,在难里头,想办法活下去、把日子重新搭起来。\n\n这一点,我要你记住。失去是真的。可在失去里头,我们也是真的,在撑。',
        en: 'I do not want you to think our end was only loss. That is not the whole truth.\n\nYes, more than half of this town was hollowed out. But we did not lie down.\n\nI have a friend who, after the plant closed, went to community college, retrained, and now works as a nurse at the hospital. I have a cousin who took over an empty storefront on Main Street and opened a small repair shop, and built it up slowly. Some people moved away, to start over somewhere else. And some, like me, stayed, to keep this town.\n\nAs for me, I raised my children. I taught them one thing: this town gave your grandfather, your great-grandfather, a decent job; it is hard now, but it is our root.\n\nThe receiving end does not mean the losers. We are where these forty years of restructuring actually came down to earth. In the news, restructuring is numbers, is percentages. With us, it is one person at a time, in the hard of it, finding a way to go on living, building the days back up.\n\nThis I want you to remember. The loss is real. And inside the loss, we too are real, holding on.',
      },
      deliverGoal: 'N8 story (非只有失去) — 不想让你以为只有失去那不是全部 + 城被掏空一大半但没躺下 + 适应/重建的具体例子 (朋友厂关后读社区大学转行护理在医院上班/表弟主街盘空铺开小修车行/有人搬走重新开始有人像她留下守城) + 教孩子: 这座城给爷爷太爷爷体面活儿现在难但是我们的根 +「承受端不等于失败者是重组真实落地的一头」+ 重组在新闻是数字百分比在这儿是一个个具体的人 +「失去是真的,在失去里我们也真的在撑」',
        engagementHook: '新闻里,重组是数字、是百分比;在我们这儿,是一个个具体的人,在难里头想办法活下去。同样一段历史,从「数字」看和从「人」看,差别在哪儿?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-family-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步,给你看一张更大的地图。\n\n我们这座城的厂关掉的那些年,地球另一头,有一座城,正好开起来一座厂。\n\n中国,1978 年起,开始一件叫「改革开放」的大事。从那以后,他们沿海一座座工厂开起来 —— 就在我们这边一座座工厂关下去的同一段时间里。\n\n后来我才慢慢明白:很多时候,我们关掉的那家厂,和他们开起来的那家厂,是同一条供应链的两头。我这边的「活儿没了」,在他们那头,是「活儿来了」。同一个全球化,我站在它失去的那一半,他们站在它得到的那一半。\n\n这事儿不是「谁赢谁输」那么简单。他们那头,也有他们那头的代价和不容易;我这头,也不只是输家。是同一枚硬币的两面。\n\n还有一件事,你可能没想到:我女儿班上,有几个同学,他们家就是这些年从中国搬来美国的。他们一家自己的迁徙,正好就嵌在这同一段四十年里头。对那些孩子,这不是别人的历史 —— 这就是他们家的故事。',
        en: 'Let me step back and show you a larger map.\n\nIn the very years our town\'s plant was closing, on the other side of the earth, a town was opening a plant of its own.\n\nChina, from 1978, began a great thing called "reform and opening." After that, factories opened along its coast, one after another — in the same span of years our factories here were closing, one after another.\n\nOnly later did I slowly come to understand: very often, the plant we closed and the plant they opened were two ends of the same supply chain. My end\'s "the work is gone" was, at their end, "the work has come." The same globalization. I stand on the half of it that lost; they stand on the half that gained.\n\nThis is not as simple as "who won, who lost." Their end had its own costs and its own hardships; my end was not only the loser. They are two faces of one coin.\n\nAnd here is something you might not expect: in my daughter\'s class there are a few students whose families moved to America from China in these very years. Their own family\'s migration sits right inside this same forty years. To those kids, this is not someone else\'s history — it is the story of their own family.',
      },
      deliverGoal: 'N9 zoom-out + §9 中国桥 (一个干净的 idea) — 退一步更大的地图: 我们城厂关那些年地球另一头一座城正好开起一座厂 + 中国 1978 改革开放沿海工厂一座座开 = 我们这边一座座关的同一段时间 + 同一条供应链两头 (我这边活儿没了=他们那头活儿来了/我站失去的一半他们站得到的一半) + Rule-0: 不是谁赢谁输那么简单 (他们也有代价/我也不只是输家/同一枚硬币两面) + 许多华裔美国家庭迁徙史嵌在这同一段 40 年 (女儿班上几个同学家这些年从中国搬来/对那些孩子是自家故事不是别人的历史)',
        engagementHook: '我们关掉的厂,和他们开起来的厂,常常是同一条供应链的两头。我站在失去的一半,他们站在得到的一半。把同一个全球化的两半放在一起看,你看见的是差距,还是同一枚硬币的两面?',
      expectsRealAnswer: false,
    },
    {
      id: 'con-family-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这四十年,有一个真问题,我想跟你一起摆出来。我没有答案,只有两种都站得住的说法。\n\n这四十年,把整个国家放在一起看,它是更富了 —— 钱多了、技术飞快、有些人的日子越过越好。可与此同时,像我们这样的城、这样的家,付出了代价:厂没了,人散了,有人因为药走了。一个国家整体的「得」,和一个社区切身的「失」,常常是同一件事的两面。\n\n那么,这账该怎么算?\n\n一种说法:进步总是有代价的,而代价,总得有人付。世界在往前走,有些行业、有些地方被甩下,是绕不开的。强求人人都不受损,反而会拖住所有人——可若每一次前进都要等到没有一个人受损才能动,这个国家还走得动吗?\n\n另一种说法:衡量一个国家,要看它怎么对待被甩下的那些人。整体更富了,却让付代价的人独自扛,那这「进步」是踩着一部分人换来的。一个把自己人丢下不管的国家,谈何成功?\n\n一边问「进步值不值这个代价」,一边问「这代价该不该由我们独自承担」。\n\n你怎么看?想 30 秒,写下来。两边都站得住。',
        en: 'Having walked these forty years, there is a real question I want to lay out with you. I have no answer, only two views that both stand.\n\nOver these forty years, take the whole country together and it grew richer — more money, technology racing ahead, some people\'s lives getting better and better. And at the same time, towns like ours, families like ours, paid a price: the plant gone, people scattered, some lost to the drugs. A nation\'s gain as a whole, and a community\'s loss up close, are often two faces of the very same event.\n\nSo how should this be reckoned?\n\nOne view: progress always has a cost, and the cost must always be paid by someone. The world moves forward, and that some industries, some places, get left behind is unavoidable. To demand that no one ever lose would, in the end, hold everyone back — but if every step forward had to wait until not one person was harmed, could the country move at all?\n\nThe other view: you measure a country by how it treats the ones left behind. If the whole grew richer while the ones who paid the price carry it alone, then this "progress" was bought by standing on a part of the people. A country that leaves its own behind — what kind of success is that?\n\nOne asks "is the progress worth this cost," the other asks "should this cost be ours to carry alone."\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 真问题: 40 年整个国家更富了 (钱多/技术飞快/有些人日子越过越好) 但像我们这样的城和家付出代价 (厂没了/人散了/有人因药走了) =国家的「得」与社区的「失」常是同一件事两面 + 这账该怎么算 + 一种说法 (进步总有代价代价总得有人付/有些行业地方被甩下绕不开/强求人人不受损反拖住所有人) / 另一种说法 (衡量国家看怎么对待被甩下的人/整体富了却让付代价的人独自扛是踩着一部分人换来的/把自己人丢下谈何成功) + 两边都站得住 (一边问值不值/一边问该不该独自承担) + 想 30 秒。NO 党派,因有争论,中立 colon-form',
        engagementHook: '一边说:进步总有代价,代价总得有人付。另一边说:衡量一个国家,要看它怎么对待被甩下的人。两边都站得住,你的 30 秒到了,你站哪边?',
      expectsRealAnswer: true,
    },
    {
      id: 'con-family-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生 —— 一个在汽笛声里长大的孩子,一份回不来的活儿,一座一班班熄灯的工厂,一个学会仔细算账的母亲 —— 你会怎么评价这样一段四十年?\n\n一个国家整体更富了,可账单落在像我们这样的城、这样的家头上。你会说这是「值得的进步」,还是「不公的代价」?你怎么评?\n\n不过,先记住一件事:你这一遍,听的只是留下来、付了账的那一家人。同一座关停的工厂,那个早早离开、搭上往上电梯的人,会跟你讲一个完全不同的故事 —— 在他那儿,离开那座城是机会,是解脱。还有那个夹在中间、替这个国家打过仗的退伍军人,他回乡时正好看见那座厂被推平,对他那是一个句号。\n\n换个视角再走一遍,你会听见他们怎么讲,也会回头看看,你刚才的判断,站不站得住。\n\n所以最后,我把那个最该问的问题,留给你:\n\n这段历史,你还没听到谁的声音?',
        en: 'Having walked my whole life — a child who grew up to the whistle, a job that would not come back, a plant whose lights went out shift by shift, a mother who learned to count the money carefully — how would you judge a span of forty years like this?\n\nA country grew richer as a whole, and the bill landed on towns like ours, families like ours. Would you call it "progress worth having," or "an unfair cost"? How do you judge it?\n\nBut first, remember one thing: this pass, you heard only the family that stayed and paid. The same shuttered plant — the one who left early and rode the escalator up will tell you a completely different story; for him, leaving that town was opportunity, was release. And the veteran caught in the middle, who fought for this country, came home just in time to see that plant torn down; to him it was a period at the end of a sentence.\n\nRun it again through another view, and you will hear how they tell it, and look back to see whether the judgment you just made still holds.\n\nSo at the end, I leave you the question that matters most:\n\nIn this history, whose voice have you not heard yet?',
      },
      deliverGoal: 'N11 close/meta (MANDATORY 跨视角指针) — 评价这 40 年 (汽笛里长大的孩子/回不来的活儿/一班班熄灯的工厂/学会算账的母亲 → 值得的进步 vs 不公的代价) + ① 明示你只听到留下付账的一家 + ② 另两视角会挑战/补充: 同一家工厂「搭上电梯的人」讲完全不同的故事 (离开是机会是解脱) + 夹在中间替国家打过仗的退伍军人回乡正看见厂被推平 (是个句号) + 换视角再走一遍听他们怎么讲回头看你判断站不站得住 + ③ Learning Receipt 必问「你还没听到谁的声音?」。NO 党派',
        engagementHook: '你这一遍,只听到了留下来、付了账的一家人。同一座工厂,搭上电梯的人和打过仗的退伍军人,会讲两个完全不同的故事。这段历史,你还没听到谁的声音?',
      expectsRealAnswer: true,
    },
  ],
};


// ─── Lens registry (actor / mediator / receiving-end-default) ───
export var lenses = {
  'restructuring-winner-actor':  restructuringWinnerLens,
  'veteran-mediator':            veteranLens,
  'rustbelt-family-receiving-end': rustbeltFamilyLens,
};
export var defaultLens = 'rustbelt-family-receiving-end';
export default lenses[defaultLens].storyboard;
export var meta = {
  topicId: 'contemporary-us-1980',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'restructuring-winner-actor': 28, 'veteran-mediator': 30, 'rustbelt-family-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-02',
  notes: [
    '3 lens / 11 节点 / cross-lens micro-detail: 关停的工厂 (三视角各触不点破)',
    'defaultLens: rustbelt-family-receiving-end (paid for the restructuring)',
    'expectsRealAnswer: ONLY N10+N11 per lens (2 each, 6 total)',
    'Rule 0 一票否决: 当代政治支持者+批评者并排, 事实/评价分层, 复合人物+占位符',
    '§9 桥: 改革开放=同一全球化另一半 (并置不比赛); 4-agent Rule-0 review pending',
  ],
};
