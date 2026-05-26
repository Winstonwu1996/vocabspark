// ─── World War II & the Holocaust 1939-1945 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 二战与大屠杀 · World War II & the Holocaust 1939-1945
// HSS HS 10-11 · AP World Modern Unit 7 · APUSH Period 7-8 · AP European History
//
// 3 lens 设计 (per TOPIC_ROADMAP_G6_G12.md B6 + AUTHORING_PIPELINE 第 7/8/12 条):
//   - albert-speer                    (perpetrator-actor) — Albert Speer 1905-1981 希特勒建筑师+军备部长 / 纽伦堡认罪却淡化知情 /「好纳粹」神话
//   - chiune-sugihara                 (lonely-mediator)   — Chiune Sugihara 1900-1986 日本驻立陶宛副领事 (新馆唯一负责人, 俗称领事) / 1940 违令签数千签证救犹太人 / 战后被解职
//   - manzanar-nisei-girl-receiving-end (receiving-end)   — Manzanar 日裔美国少女 (composite, 基于真实拘留营记录) / 1942 EO 9066 / 二代日裔美国公民
//
// 跨 lens micro-detail (N6 anchor):
//   「服从一道命令 / one order」一句话两个方向 — 同一段战争里两个公职人员面对「上面的命令」:
//   - Speer 服从命令把数百万人变成军备生产的资源 (平庸之恶 / banality of evil)
//   - Sugihara 违抗命令救人 (个人在体制内的抗命) — N6 直接对位
//   - Manzanar lens N6: 一道总统命令 (EO 9066) 把 12 万自己的公民关进沙漠 — 命令的另一端是被关的人
//
// 跨 Topic 锚:
//   - Speer「好纳粹」神话 + 平庸之恶 → 现有 black-death-1347 Konrad (Arendt banality of evil 框架复用)
//   - Sugihara 违令救人 → A4 slavery-abolition Tubman (违法救人的道德勇气) + B3 George W. Williams (个人对抗体制暴行)
//   - Manzanar 日裔拘留 → A7 chinese-exclusion-1882 (美国制度性反亚裔延续) + Korematsu v. US 判例桥 AP Gov
//
// defaultLens = 'manzanar-nisei-girl-receiving-end' (受影响者优先 + 美国「善的战争」反 Whig + 对亚裔美国学生身份意义)
//
// STRUCTURE SPEC (long-arc → 12 nodes per lens):
//   - N1 hook / N2-N3 setup / N4 personal peak / N5 story / N6 cross-lens micro-detail anchor /
//     N7-N9 story / N10 (倒数第三) zoom-out + topic connection /
//     N11 (倒数第二) synthesis「一种说法/另一种说法/想 30 秒」expectsRealAnswer:true /
//     N12 (末节) closing meta write expectsRealAnswer:true
//   - 220-360 CN chars/node; only N6 + N11 anchor may reach 480 (NOT 550); every other ≤380
//   - expectsRealAnswer: ONLY N11 + N12 per lens = true (2 per lens); all others false
//   - N6 retrieval gate is RUNTIME-injected; no rest-break wording authored in this file
//
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// Holocaust 机制按文档克制处理 — 不渲染惨状; Manzanar girl composite 显式标注 (基于真实拘留营记录)
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Albert Speer (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var albertSpeerLens = {
  id: 'albert-speer',
  name: 'Albert Speer',
  nameCn: '阿尔伯特·施佩尔',
  role: 'perpetrator-actor',
  perspectiveTag: 'good-nazi-architect',
  icon: '📐',
  description: {
    cn: '他是 1945 年秋天纽伦堡被告席上唯一站起来认账的纳粹高官,,旁边那一排人要么喊冤，要么把责任全推给已经自杀的希特勒，只有他说：「我承认，作为这个政府的领导人之一，我有责任。」从此他被叫作「好纳粹」。他不是街头暴徒，是个跟你老师、你邻居一样体面的人,,受过良好教育的建筑师，1933 年被希特勒一眼看中，后来当上军备部长，管整个德国的战争生产。这一遍让你跟他一起坐进那个法庭：你要看的不是一个咬牙切齿的恶魔，而是一个有才华、有教养、会算账的人，怎么一步步把自己的本事，交给了一架杀人的机器,,以及他「认账」这件事本身，又是不是另一种更高明的脱罪。',
    en: 'He is the one senior Nazi who stood up and took the count in the dock at Nuremberg in the autumn of 1945, while the men beside him cried innocence or shoved all the blame onto Hitler, who had already killed himself, while he said: "I admit that, as one of the leaders of this government, I bear responsibility." From then on people called him "the good Nazi." He was no street thug, but a man as respectable as your teacher or your neighbor, a well-educated architect chosen at a glance by Hitler in 1933 and later raised to Minister of Armaments running all of Germany\'s war production. This pass puts you with him in that courtroom: what you will watch is not a snarling devil but a talented, cultured, calculating man, and how he came, step by step, to hand his skill over to a machine for killing, and whether his "taking the count" was itself another, more sophisticated way of slipping the rope.',
  },
  storyboard: [
    {
      id: 'speer-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1945 年秋天，纽伦堡。我坐在被告席上，旁边是纳粹德国的一群高官，多数人要么喊冤，要么把责任全推给已经自杀的希特勒。\n\n我没有。我站起来说了一句话，全世界的记者都记下了：我承认，作为这个政府的领导人之一，我有责任。\n\n那一刻，我成了那间法庭里唯一一个「认罪」的纳粹。后来人们给我起了个名字，叫「好纳粹」。\n\n我是 Albert Speer（阿尔伯特·施佩尔）。我不是街头打人的暴徒，我是建筑师，后来管整个德国的军备生产。我有才华，有教养，会算账。\n\n这一遍，你坐进我这个位置。你要看的不是一个咬牙切齿的恶魔，是一个跟你老师、你邻居一样体面的人，怎么一步一步，把自己的才华交给了一架杀人的机器。',
        en: 'Autumn 1945, Nuremberg. I sat in the dock beside a row of senior Nazi officials, most of whom either cried innocence or shoved all the blame onto Hitler, who had already killed himself.\n\nI did not. I stood and said one line that reporters around the world wrote down: I admit that, as one of the leaders of this government, I bear responsibility.\n\nIn that moment I became the one Nazi in that courtroom who "confessed." People later gave me a name: the good Nazi.\n\nI am Albert Speer. I was not a street thug who beat people. I was an architect, and later I ran all of Germany\'s armaments production. I had talent, education, a head for figures.\n\nThis pass puts you in my seat. What you will watch is not a snarling devil, but a man as respectable as your teacher or your neighbor, and how he came, step by step, to hand his talent over to a machine for killing.',
      },
      deliverGoal: 'N1 hook — 1945 纽伦堡被告席 + Speer 站起来认责成「好纳粹」+ 自我介绍 (建筑师/军备部长/有才华教养会算账不是暴徒) + 这一遍视角设定 (受良好教育者如何为暴行服务)',
      engagementHook: '我不是咬牙切齿的恶魔，是个跟你老师、你邻居一样体面的人。一个有教养的好人，怎么会去为暴行服务？',
      expectsRealAnswer: false,
    },
    {
      id: 'speer-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我怎么走到希特勒身边的。\n\n我 1905 年生在德国曼海姆一个体面中产家庭，父亲是建筑师，我也学了建筑。我不是天生的政治狂热分子，我年轻时对政治没什么兴趣，只想做一个有名的建筑师。\n\n1931 年我入了纳粹党。说实话，当时不是因为我多恨谁，是因为德国一战战败后，经济崩溃，几百万人失业，街上又乱又穷。希特勒上来喊：我能让德国重新强大。一个 26 岁、找不到大活干的建筑师，听了会心动。\n\n1933 年纳粹掌权。机会来了。希特勒爱建筑——他梦想把柏林改造成世界之都。他需要一个能把他脑子里那些宏伟蓝图画出来的人。\n\n那个人，就是我。\n\n你看，我走进那扇门的时候，门口没写「这里通向屠杀」。门口写的是「这里通向你一生最大的机会」。',
        en: 'First, how I came to be at Hitler\'s side.\n\nI was born in 1905 in Mannheim, Germany, to a respectable middle-class family. My father was an architect, and I studied architecture too. I was not a born political fanatic. As a young man I had little interest in politics. I only wanted to be a famous architect.\n\nI joined the Nazi Party in 1931. Honestly, it was not because I hated anyone. It was because after Germany lost the First World War the economy had collapsed, millions were out of work, and the streets were poor and chaotic. Hitler rose shouting: I can make Germany strong again. A twenty-six-year-old architect with no large commissions found that stirring.\n\nIn 1933 the Nazis took power. My chance came. Hitler loved architecture. He dreamed of remaking Berlin into a capital of the world. He needed someone who could draw the grand visions in his head.\n\nThat someone was me.\n\nYou see, when I walked through that door, there was no sign over it reading "this way to mass murder." The sign read "this way to the greatest chance of your life."',
      },
      deliverGoal: 'N2 setup — Speer 出身 (1905 曼海姆中产/学建筑/不是天生狂热分子) + 1931 入党动机 (一战战败经济崩溃几百万失业/希特勒喊让德国强大) + 1933 纳粹掌权希特勒爱建筑需要他 + 「门口没写通向屠杀写通向机会」',
      engagementHook: '我走进那扇门时，门口写的不是「通向屠杀」，是「通向你一生最大的机会」。如果一条危险的路一开始看起来全是好处，你认得出它吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'speer-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先把那场战争的大局给你交代清楚，你才看得懂我后来在干什么。\n\n1939 年 9 月，希特勒入侵波兰，第二次世界大战在欧洲爆发。一边是德国、意大利、日本，叫轴心国（Axis）；另一边是英国、苏联，后来加上美国，叫同盟国（Allies）。\n\n这场仗打了六年，1939 到 1945，是人类历史上死人最多的战争——总共大约六七千万人死。\n\n而就在这场战争的掩护下，纳粹做了一件单独的、更黑的事：他们要系统性地杀光欧洲所有的犹太人。这件事后来有个名字，叫 Holocaust（大屠杀）。到 1945 年战争结束，大约六百万犹太人被杀害。\n\n这是一台规模惊人的机器。它需要铁路、工厂、官僚、表格、预算——它需要无数受过教育、按章办事的人，每个人只做自己那一小块。\n\n我，就是这台机器里管「生产」的那个人。',
        en: 'First let me lay out the shape of that war, so you can understand what I was doing later.\n\nIn September 1939 Hitler invaded Poland, and the Second World War broke out in Europe. On one side were Germany, Italy, and Japan, called the Axis. On the other were Britain and the Soviet Union, later joined by the United States, called the Allies.\n\nThe war ran six years, 1939 to 1945, the deadliest war in human history, with roughly sixty to seventy million dead in all.\n\nAnd under the cover of that war, the Nazis did a separate, darker thing: they set out to kill all the Jews of Europe, systematically. This later had a name, the Holocaust. By the war\'s end in 1945, about six million Jews had been murdered.\n\nIt was a machine of staggering scale. It needed railways, factories, bureaucrats, forms, budgets. It needed countless educated, by-the-book people, each doing only his own small piece.\n\nI was the man in that machine in charge of "production."',
      },
      deliverGoal: 'N3 setup — 战争大局 (1939.9 入侵波兰二战爆发/轴心国 Axis vs 同盟国 Allies/1939-45 六年六七千万死) + Holocaust 大屠杀系统性杀犹太人六百万 (克制不渲染惨状) + 「机器需要无数受教育按章办事的人各做一小块」+ Speer 是管生产的人',
      engagementHook: '那台杀人机器需要的不是疯子，是无数受过教育、按章办事的人，每个人只做自己那一小块。一件大恶，需要多少「只做自己那一块」的普通人才能完成？',
      expectsRealAnswer: false,
    },
    {
      id: 'speer-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1942 年，希特勒任命你当军备部长。这是个天大的职位——整个德国的战争生产，飞机、坦克、子弹，全归你管。\n\n你接手的时候，德国军备生产乱七八糟。你是个有才华的组织者，你上任后，产量直线上升。你成了希特勒最信任的人之一，报纸把你捧成「军备奇迹」的创造者。你才三十多岁，站到了权力的顶峰。\n\n可这份成绩背后有一笔账：你管的那些工厂，越来越多地用的是被强迫来的劳工——从被占领国家抓来的人，还有集中营里的囚犯。他们吃不饱、睡不好、累死病死。\n\n你不是亲手打人的人。你坐在办公室里，看的是产量报表、是数字、是「劳动力供应」这种词。\n\n这一刻你得想：当一个人变成你报表上的「劳动力」，变成一个数字——你还看得见他是个人吗？还是说，正是「只看数字」，让你能心安理得地往下做？',
        en: 'Now you are me.\n\nIn 1942 Hitler named you Minister of Armaments. It was an enormous post. All of Germany\'s war production, the planes, the tanks, the bullets, fell under you.\n\nWhen you took it over, German armaments production was a mess. You were a gifted organizer, and after you took charge, output climbed in a straight line. You became one of the men Hitler trusted most, and the papers hailed you as the maker of the "armaments miracle." You were only in your thirties, standing at the peak of power.\n\nBut behind those results was a ledger: the factories under you increasingly ran on forced labor, people seized from occupied countries, and prisoners from the concentration camps. They were underfed, sleepless, worked to death and disease.\n\nYou were not the man who beat people with his own hands. You sat in an office reading output charts, figures, words like "labor supply."\n\nHere you must ask yourself: when a person becomes "labor" on your chart, becomes a number, can you still see that he is a human being? Or is it precisely "looking only at the numbers" that lets you go on with a clear conscience?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1942 当军备部长 (整个德国战争生产) + 产量直线上升成「军备奇迹」三十多岁权力顶峰 + 背后强迫劳工 (被占领国抓来+集中营囚犯/累死病死) + 「人变成报表上的劳动力数字你还看得见他是人吗」+ 自我拷问只看数字让你心安',
      engagementHook: '当一个人变成你报表上的「劳动力」、变成一个数字，你还看得见他是个人吗？还是说，正是「只看数字」让你能往下做？',
      expectsRealAnswer: false,
    },
    {
      id: 'speer-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我后来一辈子都在解释一件事：那些事，我到底知道多少？\n\n我的说法是这样的：我是个技术官僚，我管生产，我不管「犹太人问题」那一摊。集中营里在发生什么，杀人的细节，我说我不清楚。我把自己画成一个「埋头干活、不问外面」的工程师。\n\n这套说法，1945 年在纽伦堡救了我的命。法庭信了一部分——别的高官被判死刑、绞死，我被判 20 年监禁。\n\n你想想这有多巧：同一个我，一边是「我承认有责任」的认罪者，一边是「但具体的事我不知道」的不知情者。我两头都占了。\n\n认责，让我显得有良心，跟那些喊冤的不一样；不知情，让我躲过了最重的罪名。\n\n这就是我后来被叫「好纳粹」的全部秘密：不是我比别人善良，是我比别人会说话。',
        en: 'For the rest of my life I kept explaining one thing: how much did I really know?\n\nMy version went like this: I was a technocrat, I ran production, the "Jewish question" was not my department. What happened inside the camps, the details of the killing, I said I did not know. I painted myself as an engineer who kept his head down and did not ask about the world outside.\n\nThat version saved my life at Nuremberg in 1945. The court believed part of it. Other senior officials were sentenced to death and hanged. I got twenty years in prison.\n\nThink how convenient that was: the same me, on one side the man who "admits responsibility," on the other the man who "did not know the specifics." I held both ends.\n\nAdmitting responsibility made me look like a man with a conscience, unlike those who cried innocence. Not knowing let me dodge the heaviest charge.\n\nThat is the whole secret of why I was later called the good Nazi: not that I was kinder than the others, but that I was better with words.',
      },
      deliverGoal: 'N5 story — Speer 一辈子的说法 (技术官僚管生产不管犹太人问题/集中营细节不清楚/埋头干活工程师) + 这套说法 1945 纽伦堡救命 (别人绞死他判 20 年) + 两头都占 (认责显良心 + 不知情躲重罪) + 「好纳粹的秘密不是更善良是更会说话」',
      engagementHook: '我一边说「我有责任」，一边说「但具体的事我不知道」——两头都占了。一个人能不能既承认错、又把自己摘干净？这是真诚，还是更高级的脱身？',
      expectsRealAnswer: false,
    },
    {
      id: 'speer-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我把我的事讲完了，现在让你看见同一段历史里另一个公职人员，他面对的是同一句话：上面的命令。\n\n我面对命令的方式，是服从。希特勒要军备，我就把几百万人变成生产线上的「劳动力」，一个数字一个数字地填进我的报表。我告诉自己：我只是在执行职责，做好我的本分。\n\n可就在同一场战争里，1940 年，一个日本外交官，驻立陶宛的领事 Chiune Sugihara（杉原千亩），面对的是另一道命令：他的政府明确指示他，不准给那些逃命的犹太难民发签证。\n\n他违抗了。他连着几个星期，手写了几千份签证，把人放走。他知道这会毁掉自己的前途。\n\n同一句话——「上面的命令」。我用它来交差，把人变成数字；他用它来掂量，然后选择不服从，把数字变回人。\n\n一个坐在柏林的办公室里，一个坐在立陶宛的领事馆里。同一场战争，同一种处境，两个相反的选择。\n\n（他怎么下这个决心的，你换到他那一遍可以亲自听。）',
        en: 'I have told you my part. Now let me show you, in the same stretch of history, another public servant facing the same words: orders from above.\n\nThe way I faced orders was to obey. Hitler wanted armaments, so I turned millions of people into "labor" on the production line, filling my charts number by number. I told myself: I am only carrying out my duties, doing my job well.\n\nBut in that same war, in 1940, a Japanese diplomat, the consul in Lithuania, Chiune Sugihara, faced a different order: his government instructed him plainly not to issue visas to the Jewish refugees fleeing for their lives.\n\nHe disobeyed. For weeks on end he wrote out thousands of visas by hand and let people go. He knew it would ruin his career.\n\nThe same words, "orders from above." I used them to clear my desk, turning people into numbers; he weighed them, and chose not to obey, turning numbers back into people.\n\nOne of us sat in an office in Berlin, one in a consulate in Lithuania. The same war, the same situation, two opposite choices.\n\n(How he came to that decision, you can hear for yourself when you switch to his pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 「上面的命令」一句话两方向 + Speer 服从命令把人变数字 (我只是执行职责) vs Sugihara 1940 驻立陶宛领事违抗命令 (政府指示不准发签证/他手写几千份救人/知道毁前途) + 同一场战争同一处境两个相反选择 + 桥到 Sugihara lens',
      engagementHook: '同一句「上面的命令」——我用它把人变成数字，他用它做了相反的决定，把数字变回人。面对一道你觉得不对的命令，你会服从，还是会像他一样？',
      expectsRealAnswer: false,
    },
    {
      id: 'speer-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我们继续看我这台机器，因为这才是这一遍真正要你理解的东西。\n\n大屠杀不是一群疯子在街上乱杀人。它是一套冷静的、按部就班的流程。\n\n1942 年 1 月，纳粹的高级官员开了一个会，叫 Wannsee Conference（万湖会议）。这帮人不是狂热的暴徒，他们里有博士、有律师、有受过最好教育的官僚。他们坐在湖边一栋漂亮别墅里，喝着咖啡，讨论怎么把已经在进行的杀戮，变成一套高效的工业流程。\n\n他们讨论的是铁路时刻表、是「运输能力」、是各地犹太人的「数量」。他们用的是办公室语言、技术语言，把活生生的人，包装成一个个待处理的「问题」和「单位」。\n\n这就是 Holocaust 最可怕的地方：它需要的不是仇恨，是组织。是表格、是预算、是一群像我一样、像他们一样、相信自己「只是在做本职工作」的体面人。',
        en: 'Let us keep looking at my machine, because this is the thing this pass really wants you to understand.\n\nThe Holocaust was not a mob of madmen killing in the streets. It was a calm, step-by-step procedure.\n\nIn January 1942 senior Nazi officials held a meeting, the Wannsee Conference. These men were not raging brutes. Among them were holders of doctorates, lawyers, the best-educated bureaucrats. They sat in a handsome villa by a lake, drinking coffee, discussing how to turn the killing already under way into an efficient industrial process.\n\nWhat they discussed were railway timetables, "transport capacity," the "numbers" of Jews in each region. They used office language, technical language, packaging living human beings into "problems" and "units" to be processed.\n\nThis is the most terrifying thing about the Holocaust: what it needed was not hatred but organization. Forms, budgets, and a crowd of respectable people, like me, like them, who believed they were "only doing their jobs."',
      },
      deliverGoal: 'N7 story — 大屠杀是冷静按部就班流程不是疯子乱杀 (克制处理机制) + 1942.1 Wannsee Conference 万湖会议 (官员有博士律师受最好教育/湖边别墅喝咖啡讨论变工业流程) + 用办公室技术语言把人包装成问题和单位 + 「最可怕的不是仇恨是组织/一群相信只是做本职工作的体面人」',
      engagementHook: '大屠杀需要的不是仇恨，是组织——表格、预算、一群相信自己「只是在做本职工作」的体面人。「我只是在做我的工作」这句话，是不是有时候很危险？',
      expectsRealAnswer: false,
    },
    {
      id: 'speer-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我说我「不知道」。可这件事，你得自己掂量。\n\n1971 年，我出狱多年以后，有人翻出一件事：1943 年 10 月，纳粹高官 Himmler 在波兹南（Posen）对一屋子高级官员做了一场演讲，公开讲了正在「灭绝」犹太人。这场演讲，叫 Posen Speeches（波兹南演讲）。\n\n证据显示，那天我很可能就在场，或者至少在那栋楼里。\n\n我活着的时候一直否认我听到了最关键的那几句。但战后历史学家一点一点挖出来：我管的工厂直接用集中营的劳工，我去视察过那些工地，我跟管「劳动力供应」的部门天天打交道。\n\n一个管全国军备生产、天天跟集中营劳工打交道、还可能坐在那场演讲现场的人，说他「不知道在杀人」——\n\n你信吗？\n\n我后来自己在回忆录里也松口了，承认我「应该知道」，承认我选择了「不去看」。\n\n「不知道」和「选择不去看」，是两件很不一样的事。',
        en: 'I said I "did not know." But this you must weigh for yourself.\n\nIn 1971, years after my release, something surfaced: in October 1943, the senior Nazi Himmler gave a speech to a room of high officials at Posen, openly speaking of the "extermination" of the Jews then under way. These are the Posen Speeches.\n\nThe evidence suggests I was very likely present that day, or at least in the building.\n\nWhile I lived I always denied hearing the crucial lines. But after the war historians dug it out piece by piece: the factories under me used concentration-camp labor directly, I had toured those sites, I dealt every day with the office in charge of "labor supply."\n\nA man who ran the nation\'s armaments production, dealt daily with camp labor, and may even have sat in the room for that speech, saying he "did not know people were being killed" —\n\nDo you believe it?\n\nLater, in my own memoirs, I gave ground. I admitted I "should have known," admitted I had chosen "not to look."\n\n"Did not know" and "chose not to look" are two very different things.',
      },
      deliverGoal: 'N8 story — Speer 说不知道但读者自己掂量 + 1943.10 Himmler Posen Speeches 波兹南演讲 (公开讲灭绝犹太人/Speer 很可能在场) + 战后证据 (工厂直接用集中营劳工/视察工地/天天跟劳动力供应部门打交道) + 「他说不知道你信吗」+ 回忆录松口「应该知道/选择不去看」+ 「不知道和选择不去看是两件不一样的事」',
      engagementHook: '一个管全国军备、天天跟集中营劳工打交道的人，说他「不知道在杀人」——你信吗？「不知道」和「选择不去看」，差在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'speer-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '20 年刑满，1966 年我出狱。然后我做了一件很聪明、也很冷酷的事：我把我自己写成了一个故事。\n\n我出了回忆录，上了电视，接受采访。我塑造的形象是：一个被天才魅力的独裁者迷住的、有良心、肯认错的「好纳粹」。这本书卖得很好，我成了一个名人，赚了很多钱，安稳活到 1981 年才死。\n\n这就是「好纳粹」神话的成品。它太好用了：它给所有德国人一个台阶——你看，连 Speer 这样的人都只是「被迷住了、不知情」，那普通德国人不就更无辜了吗？\n\n可历史学家后来戳破了它。他们证明：我远比我承认的知道得多，我在战时还参与了驱逐柏林犹太人、腾出他们的房子的事。\n\n我那句著名的「我承认有责任」，听起来很高尚。但它是一句精心设计的话——它认了一个抽象的、笼统的「责任」，恰恰为了不去认那些具体的、要命的罪。\n\n我用一句漂亮的认罪，买下了我下半辈子的体面。',
        en: 'My twenty years done, I was released in 1966. Then I did something very clever, and very cold: I wrote myself into a story.\n\nI published memoirs, went on television, gave interviews. The figure I shaped was this: a man with a conscience, willing to admit fault, who had been dazzled by a dictator of genius charm, the "good Nazi." The book sold well. I became a celebrity, made a great deal of money, and lived in comfort until I died in 1981.\n\nThis was the finished product of the good-Nazi myth. It was so useful: it gave every German a way out. Look, if even a man like Speer was merely "dazzled and uninformed," then ordinary Germans were surely more innocent still.\n\nBut historians later punctured it. They showed I knew far more than I admitted, and that during the war I took part in expelling Berlin\'s Jews and freeing up their apartments.\n\nMy famous line, "I admit responsibility," sounds noble. But it was a carefully designed sentence. It owned an abstract, blanket "responsibility" precisely so as not to own the specific, deadly crimes.\n\nWith one elegant confession, I bought the respectability of the rest of my life.',
      },
      deliverGoal: 'N9 story — 1966 出狱后把自己写成故事 (回忆录/电视/采访塑造「被迷住有良心肯认错的好纳粹」/书畅销成名人活到 1981) + 「好纳粹神话给所有德国人台阶 (连 Speer 都只是被迷住普通人更无辜)」+ 历史学家戳破 (知道得远比承认多/参与驱逐柏林犹太人腾房子) + 「认抽象责任恰恰为不认具体罪/用漂亮认罪买下半辈子体面」',
      engagementHook: '我用一句「我承认有责任」，恰恰是为了不去认那些具体的罪——用一句漂亮的认罪，买下了我下半辈子的体面。一句听起来高尚的话，能不能其实是一种逃避？',
      expectsRealAnswer: false,
    },
    {
      id: 'speer-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我们离开我的视角，往后看，看「好纳粹」这件事到今天还在教我们什么。\n\n我死于 1981 年。我没看到的是：我这个案例，后来成了全世界研究「普通人怎么参与暴行」时反复用的标本。\n\n有个词，专门用来形容我这种人，叫 banality of evil——「平庸之恶」，意思是：最大的恶，常常不是由咬牙切齿的怪物做的，而是由一群普普通通、按章办事、相信自己「只是在尽职」的体面人，一起做成的。\n\n如果你跑过 black-death（黑死病）那段历史，你会认得这个 pattern。那里有一个 14 世纪的屠夫，普通人、好父亲，投了一票，参与了对邻居的屠杀，余生 25 年良心不安。他和我，隔了 600 年，是同一种「平庸之恶」的标本。\n\n他相信「井被下毒了」，我相信「我只是在管生产」。我们都不是天生的恶魔。我们都是普通人，在一个把恶变成「日常工作」的系统里，做了恶。\n\n这才是我的故事最该让你害怕的地方：因为，如果我是怪物，那跟你无关；可如果我是个普通人，那你就得问自己——换了我在那个位置，我会不一样吗？',
        en: 'Now we step out of my perspective and look forward, at what this "good Nazi" business still teaches us today.\n\nI died in 1981. What I did not see is that my case later became a specimen used again and again in studying how ordinary people take part in atrocity.\n\nThere is a term made for men like me: the banality of evil. It means this: the greatest evil is often done not by snarling monsters but by a crowd of perfectly ordinary, by-the-book, respectable people who believe they are "only doing their duty," together.\n\nIf you have run the black-death topic, you will recognize this pattern. There is a fourteenth-century butcher there, an ordinary man, a good father, who cast a vote, took part in the killing of his neighbors, and lived the next twenty-five years with an uneasy conscience. He and I, six hundred years apart, are specimens of the same "banality of evil."\n\nHe believed "the wells were poisoned." I believed "I was only running production." Neither of us was a born devil. We were both ordinary men who did evil inside a system that turned evil into "daily work."\n\nThis is what should frighten you most about my story: because if I were a monster, that has nothing to do with you. But if I was an ordinary man, then you must ask yourself, put in my place, would I have been any different?',
      },
      deliverGoal: 'N10 zoom-out + topic connection — Speer 死 1981 案例成研究「普通人怎么参与暴行」标本 + banality of evil 平庸之恶定义 (最大的恶常由按章办事相信尽职的体面人做成) + 跨 Topic black-death Konrad 对位 (14 世纪屠夫好父亲投票参与屠杀余生 25 年良心不安/同一种平庸之恶标本) + 「如果我是怪物跟你无关如果我是普通人你得问换了你会不一样吗」',
      engagementHook: '如果我是怪物，那跟你无关；可如果我是个普通人，那你就得问自己——换了你在那个位置，你会不一样吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'speer-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法——平庸之恶读法。我不是一个特别坏的人，我是一个被才华、机会和一台庞大系统裹挟的普通人。在那个位置上，几乎所有人都会跟我做一样的事：服从、埋头、把人看成数字。（社会心理学家 Stanley Milgram 1960 年代做过服从实验，证明普通人在权威指令下会做出极坏的选择。）真正的罪魁是那台机器，是希特勒，是整个系统。把一个时代的罪压在我一个技术官僚头上，是找替罪羊。\n\n另一种说法——道德主体读法。理由从来洗不白选择。我不是 14 岁孩子，我是受过最好教育、能算清每一笔账的成年人。我看得见集中营的劳工，我可能听过那场演讲，我有完整的反证。我「选择不去看」，又用一句漂亮的认罪把自己摘干净，活得体面又有钱。把责任推给「系统」，正是我精心设计的话术。我那 25 年的安稳，本身就是证据：真被裹挟的人，不会过得这么舒服。\n\n这两边不是「情有可原加咎由自取」。是同一个我的两面——一个受过良好教育的人，怎么既能为暴行服务，又能让世界相信他是「好纳粹」。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view, the banality-of-evil reading. I was not an unusually bad man. I was an ordinary man swept along by talent, opportunity, and a vast system. In that position, almost anyone would have done as I did: obey, keep his head down, see people as numbers. (In the 1960s the psychologist Stanley Milgram ran obedience experiments showing how ordinary people make terrible choices under an authority\'s orders.) The true culprit was the machine, was Hitler, was the whole system. To press the crime of an era onto one technocrat is to find a scapegoat.\n\nThe other view, the moral-agent reading. Reasons never wash out choices. I was not a fourteen-year-old. I was an adult with the best education, able to total every ledger. I could see the camp labor, I may have heard that speech, I had complete counter-evidence. I "chose not to look," and then with one elegant confession washed myself clean and lived in comfort and wealth. Shoving the blame onto "the system" was exactly my carefully designed rhetoric. My twenty-five comfortable years are themselves the evidence: a man truly swept along does not live so well.\n\nThese are not "understandable plus deserved." They are two faces of the same me, how a well-educated man can both serve atrocity and convince the world he was the "good Nazi."\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis (倒数第二, banality framework 复用) — 一种说法 (平庸之恶/被才华机会系统裹挟的普通人/几乎所有人都会一样/Milgram 服从实验/罪在机器希特勒系统/压在技术官僚头上是找替罪羊) / 另一种说法 (道德主体/理由洗不白选择/受最好教育成年人有完整反证/选择不去看+用认罪摘干净/25 年安稳是证据) / 同一个我两面 / 想 30 秒',
      engagementHook: '平庸之恶里的普通人，和洗不白选择的道德主体——是同一个我。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'speer-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一个有才华、有教养、对人客气的建筑师，把自己的本事交给了一台杀人的机器；事后又用一句漂亮的「我有责任」，给自己造了一个「好纳粹」的神话，安稳活到老。他到底是被时代裹挟的普通人，还是一个把账算得很清的共谋者？你把这两件事放在一个天平上，你怎么称？\n\n再想一步。这个故事最不舒服的地方，不是离你很远，而是离你很近。今天你身边——一个班级群、一个团队、一件大家都在做但你隐隐觉得不对的事——会不会也有那种「我只是按要求做」「不是我一个人的责任」「我又没亲手做」的时刻？\n\n那时候，你会像我一样，把头埋进「我只是在做我的本分」里，还是会抬起头，看清楚你那一小块，到底在帮一件什么样的事？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nA talented, cultured architect, courteous to people, who handed his skill to a machine for killing; and afterward, with one elegant "I bear responsibility," built himself a "good Nazi" myth and lived in comfort to old age. Was he an ordinary man swept along by his times, or a clear-eyed accomplice who kept careful books? Put those two on one scale. How do you weigh them?\n\nThen take one more step. The most uncomfortable thing about this story is not that it is far from you, but that it is near. In your own life today, a class group chat, a team, something everyone is doing that you faintly feel is wrong, will there be moments of "I\'m only doing what I was told," "it\'s not just my responsibility," "I didn\'t do it with my own hands"?\n\nWhen that comes, will you do as I did, bury your head in "I\'m only doing my job," or will you lift your head and see clearly what kind of thing your one small piece is helping to make?',
      },
      deliverGoal: 'N12 close (末节 evaluation + transfer) — 评价 (有才华教养的建筑师把本事交给杀人机器 + 用认罪造好纳粹神话安稳活老 → 被时代裹挟的普通人 vs 算得很清的共谋者同一天平) + transfer「今天你身边大家都在做但你觉得不对的事/我只是按要求做/不是我一个人责任/我没亲手做的时刻」+ 你会埋头进本分还是抬头看你那一小块在帮什么',
      engagementHook: '这个故事最不舒服的地方，是它离你很近。今天你身边那件「大家都在做、你又隐隐觉得不对」的事，你会埋头说「我只是按要求做」，还是抬头看清你那一小块在帮什么？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Chiune Sugihara (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var chiuneSugiharaLens = {
  id: 'chiune-sugihara',
  name: 'Chiune Sugihara',
  nameCn: '杉原千亩',
  role: 'lonely-mediator',
  perspectiveTag: 'visa-defier',
  icon: '🖋️',
  description: {
    cn: '他是 1940 年夏天那个清早拉开立陶宛考纳斯领事馆窗帘的人,,外面铁门挤满了几百、后来上千的犹太难民，刚从邻国波兰逃出来，纳粹在后面追，他们走投无路，要的只是一张能让他们离开这片大陆活下去的签证。他是日本派驻这里的副领事，不是什么大人物，只是个按规矩办事、听上级话的职业外交官,,他三次发电报回东京请示，三次被明确拒绝：不准发。这一遍让你跟他一起坐在那张桌子前：窗外是上千条命，手里是一支笔，桌上是一道明确的「不准」，他要决定，是听话保前途，还是动手写。',
    en: 'He is the man who drew back the curtain of the Japanese consulate in Kaunas, Lithuania, on a summer morning in 1940, with hundreds and later thousands of Jewish refugees packed against the iron gate outside, just fled from neighboring Poland with the Nazis behind them, with nowhere left to go, asking only for a visa that could let them leave this continent and stay alive. He is Japan\'s vice-consul there, no great man, only a career diplomat who follows the rules and obeys his superiors, and three times he has cabled Tokyo for instructions, and three times has been plainly told no, do not issue them. This pass puts you with him at the desk: outside the window are a thousand lives, in his hand is a pen, on his desk is a plain "do not," and he must decide, obey and keep his career, or pick up the pen and write.',
  },
  storyboard: [
    {
      id: 'sugihara-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '1940 年夏天，一个清早，立陶宛考纳斯。我拉开领事馆的窗帘，外面铁门挤满了人。\n\n几百个，后来是上千个。男人、女人、抱着孩子的母亲、拄拐的老人。他们多数是犹太人，刚从邻国波兰逃出来——纳粹在后面追，他们走投无路。他们要的东西很简单：一张签证，一张能让他们离开这片大陆、活下去的纸。\n\n而这张纸，能不能给，决定权在我手上。\n\n我是 Chiune Sugihara（杉原千亩），日本派驻这里的副领事——这个新开的领事馆只有我一个负责人，所以大家也常叫我「领事」。我不是什么大人物，就是个普通的外交官，按规矩办事，听上级的话。\n\n那天早上我看着那些脸，心里清楚一件事：我的政府已经告诉过我，不准发。\n\n这一遍，你坐进我这个位置。窗外是上千条命，手里是一支笔，桌上是一道明确的「不准」。你怎么办？',
        en: 'A summer morning in 1940, in Kaunas, Lithuania. I drew back the consulate curtain, and the iron gate outside was packed with people.\n\nHundreds, and later thousands. Men, women, mothers carrying children, old people on canes. Most were Jews who had just fled neighboring Poland, the Nazis behind them, nowhere left to go. What they wanted was simple: a visa, a single sheet of paper that could let them leave this continent and stay alive.\n\nAnd whether that paper could be given rested in my hands.\n\nI am Chiune Sugihara, Japan\'s vice-consul posted here, and since I was the only officer running this newly opened consulate, people often just called me the consul. I was no great man, only an ordinary diplomat who followed the rules and obeyed his superiors.\n\nThat morning, looking at those faces, I knew one thing clearly: my government had already told me not to issue them.\n\nThis pass puts you in my seat. Outside the window are a thousand lives; in your hand is a pen; on your desk is a plain "do not." What do you do?',
      },
      deliverGoal: 'N1 hook — 1940 夏考纳斯 (Kaunas) 领事馆铁门挤满犹太难民 (从波兰逃纳粹在后面追) + 要一张签证一张活命的纸 + Sugihara 自我介绍 (普通外交官按规矩听上级) + 政府已告诉他不准发 + 这一遍视角 (窗外上千条命/手里一支笔/桌上一道不准)',
      engagementHook: '窗外是上千条命，手里是一支笔，桌上是一道明确的「不准」。如果救人要你违抗命令、断送前途，你下得了那个决心吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'sugihara-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是谁，你才懂我为什么会停在那扇窗前。\n\n我 1900 年生在日本一个普通家庭。父亲希望我当医生，我没听，自己选了外语和外交这条路。我学了俄语，学得很好——好到日本外务省派我去满洲、去苏联边境，做了很多年外交工作。\n\n我不是什么理想主义者，也不是天生的英雄。我是个职业外交官：守规矩、有分寸、懂得听话才能往上走。\n\n1939 年，我被派到立陶宛考纳斯，开一个新的领事馆。说白了，我真正的任务，有一部分是帮日本盯着这一带的军事和政治动向——一个普通的、听命于国家的公务员。\n\n我那时候完全没想到，这个偏僻小城的小小领事馆，会把我推到一个一辈子最难的选择面前。\n\n大人物改变历史，往往是在他们准备好的时候。我不是。命运把我放在那扇窗前的时候，我什么都没准备。',
        en: 'First, who I am, so you understand why I stopped at that window.\n\nI was born in 1900 to an ordinary Japanese family. My father wanted me to be a doctor; I did not listen and chose languages and diplomacy instead. I studied Russian, and studied it well, well enough that Japan\'s Foreign Ministry sent me to Manchuria and the Soviet border for many years of diplomatic work.\n\nI was no idealist, no born hero. I was a career diplomat: I kept the rules, knew my limits, understood that obedience is how you rise.\n\nIn 1939 I was sent to Kaunas, Lithuania, to open a new consulate. Plainly put, part of my real task was to help Japan watch the military and political currents in that region, an ordinary civil servant under his country\'s orders.\n\nI had no idea then that the little consulate in that out-of-the-way town would push me to the hardest choice of my life.\n\nGreat men change history, often when they are ready for it. I was not. When fate set me at that window, I had prepared for nothing.',
      },
      deliverGoal: 'N2 setup — Sugihara 出身 (1900 普通家庭/父亲想他当医生他选外语外交/学俄语好被派满洲苏联边境多年) + 不是理想主义者天生英雄是职业外交官 (守规矩懂听话往上走) + 1939 派考纳斯开领事馆 (部分任务帮日本盯军事政治动向) + 「大人物在准备好时改变历史我什么都没准备」',
      engagementHook: '我不是天生的英雄，命运把我放在那扇窗前时，我什么都没准备。一个普通人，会在毫无准备的时候，被推到一个改变命运的选择前吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'sugihara-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我得先让你明白，那些挤在我门外的人，到底走投无路到什么地步。\n\n1939 年 9 月，纳粹德国入侵波兰，二战在欧洲爆发。波兰的犹太人成了第一批被追猎的对象。很多人往东逃，逃进了还算安全的立陶宛。\n\n可立陶宛也快保不住了——苏联在一边虎视眈眈，纳粹在另一边逼近。这些难民等于被困在一个正在合拢的口袋里。唯一的活路，是离开整个欧洲。\n\n离开欧洲要过很多关。其中关键一关是：你得有一张签证，证明有某个国家肯收你。可那个年代，全世界几乎没有国家肯敞开门收犹太难民——很多国家把门关得死死的。\n\n这时候，一条极窄的生路出现了：先拿一张过境日本的签证，经日本去远东，再设法转去别处。\n\n而签发这张过境签证的权力，落在了我，考纳斯领事，杉原千亩，一个人的手里。',
        en: 'I must first make you understand how truly cornered the people outside my gate were.\n\nIn September 1939, Nazi Germany invaded Poland and the war broke out in Europe. Poland\'s Jews became the first hunted. Many fled east, into still-safer Lithuania.\n\nBut Lithuania too was about to fall, the Soviet Union eyeing it from one side, the Nazis closing in from the other. These refugees were trapped in a bag drawing shut. The only way out was to leave Europe entirely.\n\nLeaving Europe meant clearing many gates. One crucial gate was this: you needed a visa proving some country was willing to take you. But in that era almost no country in the world would open its doors to Jewish refugees. Many shut them tight.\n\nThen one very narrow path to life appeared: first get a transit visa through Japan, travel through Japan to the Far East, and from there find a way somewhere else.\n\nAnd the power to issue that transit visa fell to me, the consul at Kaunas, Chiune Sugihara, one man.',
      },
      deliverGoal: 'N3 setup — 难民走投无路到什么地步 (1939.9 纳粹入侵波兰/犹太人第一批被追猎逃进立陶宛) + 立陶宛也快保不住 (苏联纳粹两边逼/困在合拢的口袋) + 唯一活路离开欧洲要签证但几乎没国家肯收 + 极窄生路 (过境日本签证转远东) + 签发权落在 Sugihara 一个人手里',
      engagementHook: '全世界几乎没有国家肯收他们，唯一一条窄路的钥匙，落在我一个人手里。当救成千上万人的权力只在你一个人手上，那是恩赐还是重担？',
      expectsRealAnswer: false,
    },
    {
      id: 'sugihara-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n门外的人越来越多。你按规矩做了该做的事：你给东京的外务省发电报，请示能不能给这些难民发过境签证。\n\n回电来了：不行。\n\n你不死心，又发了一封，把情况说得更急。又被拒。第三次请示，第三次明确的「不准」。\n\n规矩已经清清楚楚摆在你面前。你是个职业外交官，你太清楚违抗上级意味着什么——你会被记过、被调查、甚至断送整个前途，连累家人。\n\n你妻子 Yukiko 跟你一起看着窗外。你们都知道，你照章办事，没有任何人能怪你——你已经请示三次了，是上面说不准的。你完全可以双手一摊：我也没办法。\n\n可窗外那些抱着孩子的脸，还在看着你。\n\n这一刻你得做决定：你照规矩、保自己、活得安稳；还是你听窗外，违命令、救他们、把自己的前途押上去？\n\n没有人会替你做这个决定。',
        en: 'Now you are me.\n\nThe crowd outside grows. You did the proper thing by the rules: you cabled the Foreign Ministry in Tokyo to ask whether you might issue transit visas to these refugees.\n\nThe reply came: no.\n\nYou would not give up. You sent another, putting the urgency more sharply. Refused again. A third request, a third plain "do not."\n\nThe rule is laid out clearly before you. You are a career diplomat; you know all too well what disobeying superiors means. You will be reprimanded, investigated, perhaps lose your whole career, drag your family down with you.\n\nYour wife Yukiko stands at the window with you. You both know that if you go by the book, no one can blame you. You asked three times; it was the people above who said no. You could spread your hands: there is nothing I can do.\n\nBut the faces outside, mothers holding children, are still looking at you.\n\nHere you must decide: keep the rules, protect yourself, live in peace; or listen to the window, disobey the order, save them, stake your whole future. No one will make this decision for you.',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 门外人越来越多 + 三次发电报东京请示三次被明确拒绝「不准」+ 职业外交官清楚违命后果 (记过调查断送前途连累家人) + 妻子 Yukiko 一起看窗外 + 照章办事没人能怪 (完全可以双手一摊) + 但抱孩子的脸还在看着 + 决定: 保自己安稳 vs 违命救人押上前途',
      engagementHook: '你照规矩办，没人能怪你——上面说了不准。你完全可以双手一摊说「我也没办法」。可窗外那些抱孩子的脸还在看着你。你会怎么选？',
      expectsRealAnswer: false,
    },
    {
      id: 'sugihara-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我决定发。\n\n做这个决定，我跟妻子 Yukiko 谈了很久。我后来回忆，我心里就是过不去一道坎：如果我不管，这些人多半会死。我宁愿违抗政府，也不愿一辈子背着「我本可以救他们」这句话活着。\n\n1940 年 7 月底开始，我动手了。\n\n我几乎不睡觉。从早写到晚，一笔一笔，手写签证。一份签证要抄写、要盖章、要签名。我写到手指发麻、抽筋，揉一揉，接着写。Yukiko 帮我打下手。\n\n领事馆门口排着长队，一天又一天。我没空一个一个核实他们的材料够不够标准——我心里想的很简单：少问一句，多写一份，可能就多一条命。\n\n你想想那个画面：一个本该谨小慎微的外交官，明知违令，却像一台停不下来的机器，一连写了快一个月，只为了多送出去几张能换一条命的纸。\n\n这就是违命的样子——它不轰轰烈烈，它就是日复一日，咬着牙，一笔一笔。',
        en: 'I decided to issue them.\n\nTo reach that decision, I talked with my wife Yukiko a long while. As I later recalled, there was one thing I simply could not get past: if I did nothing, most of these people would die. I would rather defy my government than live my whole life carrying the words "I could have saved them."\n\nFrom late July 1940, I set to work.\n\nI barely slept. From morning to night, stroke by stroke, I wrote visas by hand. Each one had to be copied out, stamped, signed. I wrote until my fingers went numb and cramped, rubbed them, and went on. Yukiko helped me.\n\nA long line stood at the consulate gate, day after day. I had no time to verify, one by one, whether each person\'s papers met the standard. My thought was simple: ask one fewer question, write one more, and maybe that is one more life.\n\nPicture it: a diplomat who should have been cautious to a fault, knowing he was breaking orders, working like a machine that could not stop, writing for nearly a month, only to send out a few more sheets of paper that could each buy a life.\n\nThis is what disobedience looks like. It is not grand or thunderous. It is day after day, teeth gritted, stroke by stroke.',
      },
      deliverGoal: 'N5 story — 决定发 + 跟妻子 Yukiko 谈很久过不去一道坎 (不管这些人多半会死/宁违政府不愿背「本可以救他们」活) + 1940.7 末动手几乎不睡手写签证 (抄写盖章签名/手抽筋/Yukiko 帮忙) + 长队没空核实 (少问一句多写一份多一条命) + 「违命的样子不轰轰烈烈是日复一日咬牙一笔一笔」',
      engagementHook: '我宁愿违抗政府，也不愿一辈子背着「我本可以救他们」这句话活着。违命救人不是轰轰烈烈，是日复一日咬牙一笔一笔写。你能坚持做一件正确却没人替你撑腰的事多久？',
      expectsRealAnswer: false,
    },
    {
      id: 'sugihara-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我写签证的时候，柏林那边，另一个公职人员正在做一件相反的事。让你看清楚我们俩，你才懂这一遍的核心。\n\n我面对「上面的命令」，选择违抗。东京三次说不准，我三次照样写。我把上面的命令掂量了一下，放到一边，因为我觉得人命更重。\n\n而在德国，那位军备部长 Albert Speer（施佩尔），面对同样的「上面的命令」，选择服从。希特勒要军备，他就把成千上万的人变成生产线上的「劳动力」，一个数字一个数字地填进报表。他后来说：我只是在尽我的职责。\n\n同一句话——「上面的命令」。我用它来掂量、然后违抗，把数字变回人；他用它来交差、然后服从，把人变成数字。\n\n我们俩都是普通公务员，都不是天生的英雄或恶魔，都被国家要求「听话」。区别只在那一道选择题上：当命令和良心冲突，你听哪一个？\n\n（他那一边怎么想的，你换到他那一遍可以亲自看。）',
        en: 'While I was writing visas, in Berlin another public servant was doing the opposite. Let me make the two of us clear, so you grasp the heart of this pass.\n\nFacing "orders from above," I chose to disobey. Tokyo said no three times; three times I wrote anyway. I weighed the order from above, set it aside, because I judged a life weighed more.\n\nAnd in Germany, the Minister of Armaments, Albert Speer, facing the same "orders from above," chose to obey. Hitler wanted armaments, so he turned thousands upon thousands of people into "labor" on the production line, filling his charts number by number. He later said: I was only doing my duty.\n\nThe same words, "orders from above." I used them to weigh and then disobey, turning numbers back into people; he used them to clear his desk and then obey, turning people into numbers.\n\nWe were both ordinary civil servants, neither born hero nor born devil, both told by the state to "obey." The only difference lay in one question: when the order and the conscience clash, which do you heed?\n\n(How he saw it from his side, you can see for yourself when you switch to his pass.)',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 「上面的命令」一句话两方向 + Sugihara 面对命令选违抗 (东京三次不准三次照写/掂量后放一边觉得人命更重把数字变回人) vs Speer 面对同样命令选服从 (希特勒要军备把人变劳动力数字/我只是尽职把人变数字) + 都是普通公务员被要求听话区别在命令和良心冲突听哪个 + 桥到 Speer lens',
      engagementHook: '同一句「上面的命令」——我用它来违抗、把数字变回人，他用它来服从、把人变成数字。当命令和良心冲突，你会听哪一个？',
      expectsRealAnswer: false,
    },
    {
      id: 'sugihara-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1940 年 9 月初，命令来了：领事馆必须关闭，我得离开考纳斯。\n\n可门外还有人。火车都要开了，还有人追着我求签证。\n\n那几天，我把能写的全写了。临走那天，我住进了旅馆，还在写。上了火车，火车已经启动，我把签证从车窗里往外递，递给月台上追着跑的人。手里实在写不出新的了，我就把空白的领事馆信纸、盖了章的纸，一把把塞出去，让他们自己想办法填。\n\n火车开远了，我从窗口看见月台上的人朝我鞠躬。\n\n我到底救了多少人，没人能数清。一般认为，我签出的签证大约两千多份——而一份签证常常救的不是一个人，是一家人。算下来，可能有六千人因为这些纸活了下来。\n\n这些人后来叫自己「Sugihara survivors」（杉原幸存者）。他们的后代，今天遍布世界，加起来几万人。\n\n这几万人之所以存在，是因为有那么一个不肯听话的公务员，写到了手抽筋。',
        en: 'In early September 1940 the order came: the consulate must close, and I had to leave Kaunas.\n\nBut there were still people at the gate. The train was about to depart, and still they chased after me begging for visas.\n\nIn those days I wrote everything I could. The day I left, I moved into a hotel and went on writing. I boarded the train, and as it began to move I handed visas out the window to the people running on the platform. When I could write no more, I shoved out blank consulate letterhead, stamped sheets, by the handful, for them to fill in themselves.\n\nAs the train pulled away, from the window I saw the people on the platform bowing to me.\n\nHow many I saved in the end, no one can count exactly. It is generally held that I issued some two thousand visas, and a single visa often saved not one person but a whole family. By that reckoning, perhaps six thousand people lived because of those sheets of paper.\n\nThese people later called themselves the Sugihara survivors. Their descendants today are scattered across the world, tens of thousands in all.\n\nThose tens of thousands exist because one civil servant would not obey, and wrote until his hand cramped.',
      },
      deliverGoal: 'N7 story — 1940.9 初命令领事馆关闭 Sugihara 离开 + 门外还有人火车要开还追着求 + 临走住旅馆还在写/上火车从车窗递签证/塞空白盖章信纸让自己填 + 月台上人鞠躬 + 救多少没人数清 (约两千多份签证/一份常救一家人/约六千人活下来) + Sugihara survivors 后代遍布世界几万人 + 「几万人存在因为一个不肯听话的公务员写到手抽筋」',
      engagementHook: '火车都开了，我还在从车窗往外递签证。今天世界上几万人之所以存在，是因为有那么一个不肯听话的公务员写到手抽筋。一个普通人的一个选择，能延续多少条生命？',
      expectsRealAnswer: false,
    },
    {
      id: 'sugihara-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '救人的故事好听。可你得听听后来的代价。\n\n二战结束后，我回到日本。等着我的，不是英雄的欢迎。1947 年，外务省让我离职——官方说法是机构裁撤，但我和很多人都明白，这跟我当年违命的那件事脱不了干系。\n\n一个干了大半辈子的资深外交官，就这样丢了饭碗。\n\n之后很多年，我做小生意、当翻译，靠着会俄语在异国他乡讨生活，过得相当艰难、相当默默无闻。我在日本国内几乎没人知道我做过什么。\n\n你品一品这件事的味道：我救了几千人，我自己的国家却因为我「不听话」而抛弃了我。\n\n这就是「违命救人」的另一半真相，那一半不上电影、不上颁奖台：英雄主义的当下很短，代价却可能拖很长很长。做对的事，常常不是因为它会有好报——很多时候，它没有好报。\n\n如果做正确的事注定要付出代价、还没人感谢，你还会做吗？',
        en: 'The rescue story is a pleasant one. But you must hear what came after.\n\nAfter the war I returned to Japan. What awaited me was not a hero\'s welcome. In 1947 the Foreign Ministry let me go. The official reason was a restructuring, but I and many others understood it was not unconnected to what I had done in defying orders.\n\nA senior diplomat of most of a lifetime lost his livelihood just so.\n\nFor many years after, I ran small businesses, worked as a translator, scraped a living in foreign countries on my Russian, a hard and obscure life. Almost no one in Japan knew what I had done.\n\nTaste the flavor of this: I saved thousands, and my own country cast me off because I "would not obey."\n\nThis is the other half of the truth about "disobey and save lives," the half that does not make the films or the award stage: the heroism of the moment is short, but the price can stretch on and on. Doing the right thing is often not because it will be repaid. Very often, it is not repaid.\n\nIf doing the right thing is bound to cost you, and no one will thank you, will you still do it?',
      },
      deliverGoal: 'N8 story — 救人故事好听但听代价 + 战后回日本不是英雄欢迎/1947 外务省让离职 (官方说裁撤但跟违命脱不了干系) + 资深外交官丢饭碗 + 多年做小生意当翻译靠俄语讨生活艰难默默无闻日本几乎没人知道 + 「救几千人自己国家却因不听话抛弃我」+ 违命救人另一半真相 (英雄主义当下短代价拖很长/做对的事常没好报) + 「注定付代价没人谢你还做吗」',
      engagementHook: '我救了几千人，我自己的国家却因为我「不听话」抛弃了我。如果做正确的事注定要付出代价、还没人感谢，你还会做吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'sugihara-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '故事没有停在我的落魄里。\n\n我默默无闻地过了几十年。直到 1960 年代末，一个我当年救过的人，在以色列的政府机构里偶然找到了线索，开始满世界打听：那个考纳斯的日本领事，还活着吗？\n\n他们找到了我。\n\n1985 年，离我那场签证只差一年就半个世纪了，以色列授予我一个极高的荣誉，把我列入「国际义人」（Righteous Among the Nations）——这是给那些在大屠杀中冒着自身危险救犹太人的非犹太人的称号。\n\n我那时已经病得很重，没法亲自去，是我儿子代我领的。第二年，1986 年，我去世，活了 86 岁。\n\n我活着的时候，日本国内几乎没人知道我。是被我救的人和他们的后代，把我从遗忘里捞了出来。\n\n这件事我想让你记住：历史有时候会迟到几十年，但被真正帮过的人，往往不会忘。一个人做的对的事，可能要等很久很久，才被这个世界认出来。',
        en: 'The story did not stop in my ruin.\n\nI lived in obscurity for decades. Then, in the late 1960s, one of the people I had saved stumbled on a trail inside an Israeli government office and began asking around the world: that Japanese consul in Kaunas, is he still alive?\n\nThey found me.\n\nIn 1985, just one year short of half a century after those visas, Israel granted me a very high honor, naming me among the Righteous Among the Nations, the title given to non-Jews who risked their own safety to save Jews during the Holocaust.\n\nBy then I was gravely ill and could not go in person; my son received it for me. The next year, 1986, I died, at the age of eighty-six.\n\nWhile I lived, almost no one in Japan knew of me. It was the people I had saved, and their descendants, who pulled me back out of forgetting.\n\nThis I want you to remember: history is sometimes decades late, but the people truly helped tend not to forget. A right thing a person does may have to wait a very, very long time before the world recognizes it.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 故事没停在落魄 + 默默无闻几十年到 1960 末一个被救的人在以色列政府机构找线索满世界打听 + 找到他 + 1985 以色列授「国际义人」Righteous Among the Nations (给大屠杀中冒险救犹太人的非犹太人称号) + 病重儿子代领/1986 去世 86 岁 + 日本国内几乎没人知道是被救的人和后代把他从遗忘捞出 + 「历史会迟到几十年但被帮过的人不会忘/对的事要等很久才被认出」',
      engagementHook: '我活着的时候，日本国内几乎没人知道我。是被我救的人，过了几十年，把我从遗忘里捞了出来。一个人做的对的事，要等多久才被世界认出来？这等待值得吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'sugihara-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我们离开我的视角，往后看，看「违命救人」这件事，放在更大的历史里是什么。\n\n我不是历史上唯一一个违法救人的人。在你跑过或将来会跑的别的历史里，你会遇到同一种人：\n\n美国有个叫 Harriet Tubman（哈丽特·塔布曼）的女人，自己是逃出来的奴隶，却一次又一次偷偷返回南方蓄奴州，违反当时的法律，把一批批被奴役的人带向自由。法律说她有罪，良心说她对。\n\n还有一个非裔美国记者 George Washington Williams，跑到非洲刚果，把欧洲殖民者掩盖的暴行，写成公开信捅给全世界看。一个人，对抗一整套体制的暴力。\n\n我们这些人，隔着大洋、隔着年代，做的其实是同一件事：当「法律」「命令」「上级」站在错的一边，我们选择站到人的一边，并且为此付出代价。\n\n历史从来不只由发号施令的大人物写成。它也由这些在关键时刻说「不」的、不起眼的人写成。',
        en: 'Now we step out of my perspective and look forward, at what "disobey and save lives" is within the larger sweep of history.\n\nI was not the only one in history to break the law to save people. In other topics you have run or will run, you will meet the same kind of person.\n\nIn America there was a woman named Harriet Tubman, herself an escaped slave, who again and again slipped back into the slave states of the South, breaking the law of the time, to lead group after group of the enslaved toward freedom. The law called her a criminal; conscience called her right.\n\nThere was also an African American journalist, George Washington Williams, who traveled to the Congo in Africa and wrote an open letter exposing to the whole world the atrocities the European colonizers were hiding. One man against the violence of an entire system.\n\nWe, across oceans and across the years, did in fact the same thing: when "law," "orders," "superiors" stood on the wrong side, we chose to stand on the side of human beings, and paid the price for it.\n\nHistory is never written only by the great who give the orders. It is also written by these unremarkable people who, at the decisive moment, say no.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 离开视角看违命救人更大历史 + 不是唯一违法救人的人 + 跨 Topic Harriet Tubman (逃奴一次次返南方蓄奴州违法带被奴役者向自由/法律说有罪良心说对) + George Washington Williams (非裔记者去刚果写公开信捅暴行/一人对抗体制暴力) + 隔大洋年代做同一件事 (法律命令上级在错的一边选择站人的一边付代价) + 「历史不只由发号施令的大人物写也由关键时刻说不的不起眼的人写」',
      engagementHook: '我们这些人，隔着大洋、隔着年代，做的是同一件事：当法律和命令站在错的一边，选择站到人的一边。历史，是不是也由这些在关键时刻说「不」的不起眼的人写成的？',
      expectsRealAnswer: false,
    },
    {
      id: 'sugihara-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法——道德英雄读法。我做了一件几乎没人敢做的事：在三道明确的禁令面前，把人命放在自己的前途之上，写到手抽筋，救了大约六千人。我赔上了自己的事业，战后默默无闻几十年，从没要过回报。这才是真正的勇气——不是不害怕，是明知要付代价，还是选择对的那一边。我证明了：哪怕只是一个普通公务员，一个人也能逆着整台机器，救下一座小城那么多的人。\n\n另一种说法——克制的读法。别把我神化。我也是凡人：我违命，但我没有公开反对整个战争、整个体制，我救的是眼前能救的人，救完该走还是走了。我的善行很真，但它是一次具体的、有限的善，不是改变历史走向的力量——大屠杀照样吞掉了六百万人。把我捧成「一个人拯救世界」的神话，反而会让人误以为，靠几个好心人就够了，而看不见真正需要的是整个制度不作恶。\n\n这两边不是「伟大加渺小」。是同一件善行的两种看法——一个普通人的勇敢有多重要，又有多有限。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view, the moral-hero reading. I did what almost no one dared: facing three plain prohibitions, I set human lives above my own career, wrote until my hand cramped, and saved some six thousand people. I gave up my profession, lived in obscurity for decades after the war, and never asked for repayment. This is true courage, not the absence of fear but choosing the right side while knowing it will cost you. I proved that even an ordinary civil servant, one man, can go against the whole machine and save as many people as fill a small town.\n\nThe other view, the restrained reading. Do not make a god of me. I too was only mortal: I disobeyed, but I did not publicly oppose the whole war, the whole system; I saved the people in front of me I could save, and when it was time to go, I went. My good deed was real, but it was a specific, limited good, not a force that changed history\'s course. The Holocaust still swallowed six million. To inflate me into a "one man saves the world" myth may even mislead people into thinking a few kind hearts are enough, blinding them to what is truly needed: a whole system that does not do evil.\n\nThese are not "great plus small." They are two readings of the same good deed, how important, and how limited, one ordinary person\'s courage is.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis (倒数第二) — 一种说法 (道德英雄/三道禁令前把人命放前途之上写到手抽筋救六千人/赔事业默默无闻没要回报/真勇气是明知付代价还选对的边/普通公务员一人逆整台机器) / 另一种说法 (克制/别神化/凡人/没公开反对整个战争体制救眼前能救的该走还走/善真但具体有限不改历史走向大屠杀照样吞六百万/捧成一人拯救世界神话误以为几个好心人就够看不见真正需要整个制度不作恶) / 同一善行两种看法勇敢多重要又多有限 / 想 30 秒',
      engagementHook: '一个普通人的勇敢——它有多重要，又有多有限？两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'sugihara-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一个守了大半辈子规矩的普通外交官，在某个夏天，面对三道明确的禁令，选择了违抗，写到手抽筋，救下大约六千人，然后被自己的国家抛弃，默默无闻几十年。他既是逆着整台机器的英雄，又是一个改变不了大屠杀结局的凡人。把这两件事放在一个天平上，你怎么称？\n\n再想一步。我的处境，其实是一道你迟早会遇到的题，只是规模小很多：当规则、群体、或者你怕得罪的人，要你做一件你心里知道不对的事，你会怎么办？\n\n比如，大家都在排挤一个同学，你跟着排挤最省事；比如，一条群规明显欺负某个人，你沉默最安全。\n\n那时候，你会像我门外那些「照章办事、谁也不怪」的多数人一样把头转开，还是会停在那扇窗前，哪怕只为一个人，拿起你的笔？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nAn ordinary diplomat who kept the rules for most of a lifetime, who in one summer, facing three plain prohibitions, chose to disobey, wrote until his hand cramped, saved some six thousand people, and was then cast off by his own country into decades of obscurity. He was both a hero who went against the whole machine and a mortal who could not change the Holocaust\'s outcome. Put those two on one scale. How do you weigh them?\n\nThen take one more step. My situation is really a question you will meet sooner or later, only far smaller in scale: when a rule, a group, or someone you fear offending asks you to do something you know in your heart is wrong, what will you do?\n\nSay everyone is shutting out a classmate, and joining in is the easiest path; say a group rule plainly bullies one person, and silence is the safest. \n\nWhen that comes, will you turn your head away like the majority who "go by the book and blame no one," or will you stop at that window and, even for one person, pick up your pen?',
      },
      deliverGoal: 'N12 close (末节 evaluation + transfer) — 评价 (守大半辈子规矩的普通外交官某夏面对三道禁令违抗写到手抽筋救六千人被国家抛弃默默无闻 → 逆整台机器的英雄 vs 改变不了大屠杀结局的凡人同一天平) + transfer「我的处境是你迟早会遇到的题规模小很多 (规则群体或怕得罪的人要你做心里知道不对的事/大家排挤同学跟着最省事/群规欺负人沉默最安全)」+ 你会像照章办事谁也不怪的多数人转头还是停在窗前哪怕为一个人拿起笔',
      engagementHook: '我的处境是你迟早会遇到的题，只是小很多：当规则或群体要你做一件你知道不对的事，你会像那些「照章办事、谁也不怪」的多数人转开头，还是会停下来，哪怕只为一个人，拿起你的笔？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Manzanar Nisei Girl (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var manzanarNiseiGirlLens = {
  id: 'manzanar-nisei-girl-receiving-end',
  name: 'A Nisei Girl at Manzanar',
  nameCn: 'Manzanar 拘留营里的日裔少女',
  role: 'receiving-end',
  perspectiveTag: 'eo-9066-internee',
  icon: '🏜️',
  description: {
    cn: '她是 1941 年 12 月 7 日那个星期天傍晚，看着妈妈在加州家里院子里一样一样烧掉跟日本有关的东西的孩子（虚构的女孩，每件事都贴着真实的拘留营记录写成，她代表的是一万多个真实存在过的日裔美国孩子）。她大概 1928 年生在加州，会背效忠誓词、爱吃热狗，按美国法律生下来就是美国公民。可珍珠港之后，街上看她的眼神一夜之间变了，不是因为她做了什么，是因为她长着一张「敌人的脸」。这一遍让你跟她一起站在家门口：1942 年总统签了一道说起来很「中性」的命令，下一步她和家人就要被赶进加州沙漠里的铁丝网，她没犯任何罪。她要替你算一笔账：自己的国家，凭什么按一张脸把她锁起来。',
    en: 'She is the child who, on the Sunday evening of 7 December 1941, watched her mother in their California yard burn everything in the house connected to Japan, one thing at a time (a made-up girl, every detail written close to the real records of the camps; what she stands for is more than ten thousand real Japanese American children who once existed). She was born around 1928 in California, could recite the Pledge of Allegiance and loved hot dogs, and by American law was a citizen from birth. Yet after Pearl Harbor the way people on the street looked at her changed overnight, not because of anything she had done, but because she wore "the enemy\'s face." This pass puts you with her at the front door: in 1942 the president would sign an order that sounded very "neutral," and the next step her family would be driven into a barbed-wire camp in the California desert, with no crime charged. She must work out with you, by what right does her own country lock her up by a face?',
  },
  storyboard: [
    {
      id: 'mn-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我是在加州一个柠檬农场边上长大的。我会背效忠誓词，会唱国歌，星期六去看电影，最爱吃热狗。我跟你一样，是个普普通通的美国孩子。\n\n我大概 1928 年生在加州。我爸妈是从日本来的移民，但我是在这儿出生的——按美国法律，我生下来就是美国公民。\n\n（我是一个虚构的女孩，但我经历的每一件事，都贴着真实的拘留营记录写成的。我代表的，是一万多个真实存在过的日裔美国孩子。）\n\n1941 年底，一切都变了。日本偷袭了珍珠港，美国和日本开战了。一夜之间，街上的人看我的眼神不一样了。\n\n不是因为我做了什么。是因为我长着一张「敌人的脸」。\n\n这一遍，你站在我这里。你要看的，不是从写历史的将军那边看的二战，是从一个被自己的国家关起来的美国孩子这边，看的二战。',
        en: 'I grew up beside a lemon farm in California. I could recite the Pledge of Allegiance, sing the national anthem, go to the movies on Saturday, and my favorite food was hot dogs. Just like you, I was an ordinary American kid.\n\nI was born around 1928 in California. My parents were immigrants from Japan, but I was born here, and by American law I was a citizen from birth.\n\n(I am a made-up girl, but everything I go through is written close to the real records of the camps. What I stand for is more than ten thousand real Japanese American children who once existed.)\n\nIn late 1941, everything changed. Japan attacked Pearl Harbor, and America went to war with Japan. Overnight, the way people on the street looked at me was different.\n\nNot because of anything I had done. Because I wore "the enemy\'s face."\n\nThis pass, you stand where I stand. What you will see is not the Second World War from the side of the generals who write the history, but from the side of an American child locked up by her own country.',
      },
      deliverGoal: 'N1 hook — 加州柠檬农场长大会背效忠誓词唱国歌爱吃热狗普通美国孩子 + c.1928 生加州父母日本移民但她出生即美国公民 + anti-fab 括号短句 (虚构女孩但每件事贴真实拘留营记录/代表一万多真实日裔美国孩子) + 1941 底珍珠港开战一夜街上眼神变 + 不是因为做了什么是长着敌人的脸 + 这一遍从被自己国家关起来的美国孩子看二战',
      engagementHook: '不是因为我做了什么，是因为我长着一张「敌人的脸」。如果有一天大家看你的眼神变了，只因为你长得像「敌人」，那是什么感觉？',
      expectsRealAnswer: false,
    },
    {
      id: 'mn-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我珍珠港之前的日子，你才懂后来失去的是什么。\n\n我家在加州种地。我爸天没亮就去地里，我妈在厨房忙，我和弟弟上学、写作业、跟邻居的白人小孩一起玩。我们家信佛，过年也吃年糕，但我自己更觉得自己是个美国人——我在这儿出生，我说英语比日语好，我对日本几乎没有记忆。\n\n那时候不是没有歧视。加州有法律不让我爸妈这样的「外国人」买地、入籍。可那是大人的事，我一个孩子，过得还算无忧无虑。\n\n1941 年 12 月 7 日，星期天。收音机里突然播：日本飞机轰炸了夏威夷的珍珠港，美军死伤惨重。\n\n我爸听完，半天没说话。他比我们都先明白：从这一刻起，我们这些长着日本人面孔的家庭，麻烦大了。\n\n那天傍晚，我看见我妈在院子里，把家里所有跟日本有关的东西——照片、信、日文书——一样一样烧掉。\n\n她想让我们看起来「更不像日本人一点」。可一张脸，是烧不掉的。',
        en: 'First let me tell you my life before Pearl Harbor, so you understand what was later lost.\n\nMy family farmed in California. My father went to the fields before dawn, my mother was busy in the kitchen, and my younger brother and I went to school, did our homework, and played with the white kids next door. Our family was Buddhist and ate rice cakes at New Year, but I thought of myself more as an American. I was born here, my English was better than my Japanese, and I had almost no memory of Japan.\n\nIt was not that there was no prejudice. California had laws barring "aliens" like my parents from owning land or becoming citizens. But that was grown-up business; as a child, I lived more or less free of care.\n\nDecember 7, 1941, a Sunday. The radio suddenly broke in: Japanese planes had bombed Pearl Harbor in Hawaii, and American forces had suffered heavy losses.\n\nMy father, when he heard, said nothing for a long while. He understood before any of us: from this moment, families wearing a Japanese face were in deep trouble.\n\nThat evening I saw my mother in the yard, burning everything in the house connected to Japan, photographs, letters, Japanese books, one thing at a time.\n\nShe wanted us to look "a little less Japanese." But a face cannot be burned away.',
      },
      deliverGoal: 'N2 setup — 珍珠港前日子 (加州种地/爸天没亮去地里/妈厨房/上学跟白人小孩玩/信佛吃年糕但她更觉自己美国人英语比日语好对日本几乎没记忆) + 不是没歧视 (加州法律不让父母买地入籍但是大人的事) + 1941.12.7 周日收音机珍珠港被炸 + 爸先明白长日本面孔的家庭麻烦大了 + 妈院子里烧掉所有跟日本有关的东西想看起来更不像日本人 + 「一张脸烧不掉」',
      engagementHook: '我妈把家里所有跟日本有关的东西一样一样烧掉，想让我们看起来「更不像日本人」。可一张脸，是烧不掉的。你能想象，为了证明自己「无害」，去烧掉自己的来处吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mn-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '接下来发生的事，得给你讲清楚它的法律样子：这不是暴民乱来，是政府盖了章的。\n\n1942 年 2 月 19 日，珍珠港之后才两个多月，美国总统罗斯福签了一道命令，叫 Executive Order 9066（第 9066 号行政命令）。\n\n这道命令本身没点名说「日本人」，它说的是：军方可以划定一些「军事区」，把任何人从这些区域里迁走。听起来很中性，对吧？可它实际执行起来，针对的几乎全是住在西海岸的日裔。\n\n根据这道命令，大约 12 万人被强制迁离家园，关进拘留营。这 12 万人里，差不多三分之二，跟我一样，是在美国出生的美国公民。\n\n你听清楚：三分之二是美国公民。我们没有被指控任何罪，没有审判，没有证据。我们唯一的「嫌疑」，就是我们的血统。\n\n一个国家，用一道盖了章的命令，把它自己的公民按血统关起来。这不是战场上发生的事，是在加州、在我家门口发生的事。',
        en: 'What happened next, I must lay out in its legal shape, because this is what this pass most wants you to see: it was not a mob running wild, it was stamped by the government.\n\nOn February 19, 1942, barely two months after Pearl Harbor, the American president, Roosevelt, signed an order called Executive Order 9066.\n\nThe order itself did not name "the Japanese." It said the military could mark out certain "military areas" and move anyone out of them.\n\nSounds neutral, doesn\'t it? But in practice it was aimed almost entirely at people of Japanese descent living on the West Coast.\n\nUnder this order, about 120,000 people were forced from their homes and shut into camps. Of those 120,000, nearly two-thirds, like me, were American citizens born in America.\n\nHear that number clearly: two-thirds were American citizens. We were charged with no crime, given no trial, shown no evidence. Our only "suspicion" was our ancestry.\n\nA nation, with one stamped order, locked up its own citizens by their bloodline. This did not happen on a battlefield. It happened in California, at my own front door.',
      },
      deliverGoal: 'N3 setup — 法律样子 (不是暴民乱来是政府盖章的) + 1942.2.19 珍珠港后两个多月罗斯福签 Executive Order 9066 + 命令本身没点名日本人 (说军方可划军事区迁走任何人/听起来中性) + 实际针对几乎全是西海岸日裔 + 约 12 万人强制迁离关进拘留营 + 三分之二是美国出生的美国公民 (没指控没审判没证据/唯一嫌疑是血统) + 「一个国家用盖章命令按血统关自己公民/不是战场是加州我家门口」',
      engagementHook: '一道命令没点名「日本人」，听起来很中性，可它把 12 万人关了起来——其中三分之二是美国公民，唯一的「嫌疑」就是血统。一条「中性」的规则，怎么会精准地砸向某一群人？',
      expectsRealAnswer: false,
    },
    {
      id: 'mn-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n命令下来了。墙上、电线杆上贴出告示：所有日裔，限期离开。你家只被允许带「一个人拎得动」的东西。\n\n你才十三四岁。你得在几天之内，从你出生长大的家里，挑出你这辈子能带走的全部家当——塞进一只手提箱。\n\n你的狗带不走。你的自行车带不走。你弹的钢琴、你养的金鱼、你房间墙上的画，全带不走。你爸地里那些柠檬树，他种了二十年，带不走。邻居趁火打劫，用几块钱「买」走你家值钱的东西，你家只能贱卖，或者直接扔掉。\n\n挂在你脖子上的，是一张写着编号的牌子。从这一刻起，在政府的表格上，你不再是有名有姓的那个女孩，你是一个号码。\n\n这一刻你心里翻江倒海。你想问一个问题，一个十三岁的孩子最朴素的问题：\n\n我做错了什么？\n\n你是美国公民，你天天背效忠誓词，你跟所有同学一样升国旗。可现在，这个你一直认作「我的国家」的国家，正在把你当成敌人，赶出家门。\n\n你会怎么理解这件事？',
        en: 'Now you are me.\n\nThe order has come down. Notices go up on walls and telephone poles: all persons of Japanese descent, leave by the deadline. Your family is allowed only what "a person can carry."\n\nYou are barely thirteen or fourteen. In a few days you must choose, from the home where you were born and raised, everything you can take with you for the rest of your life, and cram it into one suitcase.\n\nThe dog cannot come. The bicycle cannot come. The piano you play, the goldfish you keep, the picture on your wall, none can come. Your father\'s lemon trees in the field, twenty years in the growing, cannot come. Neighbors come like vultures and "buy" your family\'s valuables for a few dollars; you sell them for nothing, or simply throw them away.\n\nAround your neck hangs a tag with a number on it. From this moment, on the government\'s forms, you are no longer the girl with a name. You are a number.\n\nYour heart heaves. You want to ask one question, the plainest question a thirteen-year-old can ask:\n\nWhat did I do wrong?\n\nYou are an American citizen. You recite the Pledge of Allegiance every day. You raise the flag like all your classmates. And now the country you always called "mine" is treating you as the enemy and driving you from your home.\n\nHow will you make sense of this?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 命令下来告示限期离开只许带「一个人拎得动」的 + 十三四岁几天内从出生长大的家挑全部家当塞一只手提箱 + 狗自行车钢琴金鱼画带不走/爸二十年柠檬树带不走/邻居趁火打劫贱卖或扔 + 脖子挂编号牌从此在政府表格上是号码不是有名有姓的女孩 + 最朴素问题「我做错了什么」+ 美国公民天天背誓词升国旗可国家把她当敌人赶出门 + 你会怎么理解',
      engagementHook: '你是美国公民，你天天背效忠誓词，可你脖子上挂着一张写着号码的牌子，被自己的国家赶出家门。你想问的，是一个十三岁孩子最朴素的问题：我做错了什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'mn-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '他们用卡车和火车，把我们运到加州东部的沙漠里。那个地方叫 Manzanar（曼赞纳）。\n\n下车那一刻，风把沙子刮进我的眼睛、嘴里、头发里。放眼望去，是光秃秃的荒漠，远处是雪山，近处一排排灰扑扑的简易棚屋。这就是我们以后要住的地方。\n\n一家人挤在一间棚屋里。墙是薄木板，缝里灌风灌沙；地是泥地；屋顶盖着柏油纸。冬天冷得要命，夏天热得像烤炉。厕所是公共的、没有隔板的——我妈那么爱体面的一个人，第一次进去，回来眼睛是红的。\n\n营地四周拉着铁丝网。角上有岗楼，哨兵端着枪，枪口朝里——朝着我们。\n\n我那时候还小，但我看懂了那几支朝里的枪是什么意思：这不是来「保护」我们的。我们不是被保护的人，我们是被关起来的人。\n\n他们管这叫「relocation center」（安置中心）。可一个四周拉铁丝网、哨兵拿枪对着你、你不能自由走出去的地方，它真正的名字，你心里很清楚。',
        en: 'They moved us by truck and train into the desert of eastern California. The place was called Manzanar.\n\nThe moment I stepped down, the wind drove sand into my eyes, my mouth, my hair. As far as I could see was bare wasteland, snow mountains in the distance, rows of dusty barracks near at hand. This was where we would live from now on.\n\nA whole family crammed into one barrack. The walls were thin boards, wind and sand pouring through the gaps; the floor was dirt; the roof was tar paper. Winter was bitterly cold, summer like an oven. The toilets were communal, with no partitions; my mother, who cared so for dignity, came back from her first time with red eyes.\n\nBarbed wire ran around the camp. At the corners stood watchtowers, sentries holding rifles, the muzzles pointing inward, pointing at us.\n\nI was young, but I understood what those inward-pointing guns meant: this was not here to "protect" us. We were not the protected. We were the locked-up.\n\nThey called it a "relocation center." But a place ringed with barbed wire, with sentries aiming guns at you, that you cannot freely walk out of, its real name, you know in your heart.',
      },
      deliverGoal: 'N5 story — 卡车火车运到加州东部沙漠 Manzanar 曼赞纳 + 下车风刮沙进眼嘴头发/光秃荒漠远处雪山近处灰扑扑简易棚屋 + 一家挤一间棚屋 (薄木板灌风沙/泥地/柏油纸顶/冬冷夏烤炉/公共没隔板厕所妈回来眼红) + 四周铁丝网角上岗楼哨兵枪口朝里朝着我们 + 看懂朝里的枪意思 (不是保护是被关) + 「他们叫 relocation center 安置中心但真正的名字你心里清楚」',
      engagementHook: '营地角上的哨兵端着枪，枪口朝里——朝着我们。他们管这叫「安置中心」，可一个铁丝网围着、枪对着你、你出不去的地方，它真正的名字，你心里很清楚。一个词，能掩盖住它指的那件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mn-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我在沙漠里这间棚屋里，常常想一件事，它能帮你看懂我经历的到底是什么。\n\n把我关进这里的，不是一群暴徒，不是一个疯子。是一道命令。一道由国家最高领导人签字、盖了章、写得冠冕堂皇的命令——Executive Order 9066。\n\n在这场战争里，「命令」这两个字，决定了无数人的命运。\n\n在大洋另一边的德国，有个叫 Albert Speer（施佩尔）的部长，面对希特勒的命令，选择服从，把成千上万的人变成生产线上的数字。\n\n还有个日本外交官 Chiune Sugihara（杉原千亩），面对自己政府的命令，选择违抗，手写签证救了几千人。\n\n而我，是命令的另一端：我没有发命令，也没有执行命令的权力。我是那道命令落下来、砸中的人。Speer 的命令砸中的是欧洲的犹太人，9066 号命令砸中的，是我和另外 12 万自己的美国同胞。\n\n同一场战争，「命令」这个词，一头连着签字的手，另一头连着被关进沙漠的孩子。我，就站在被砸中的那一头。',
        en: 'In that barrack in the desert I often thought about one thing, and it can help you see what I really lived through.\n\nWhat shut me in here was not a mob, not a madman. It was an order. An order signed by the nation\'s highest leader, stamped, worded in high and proper terms, Executive Order 9066.\n\nIn this war, the word "order" decided the fate of countless people.\n\nAcross the ocean in Germany, a minister named Albert Speer, facing Hitler\'s orders, chose to obey, turning thousands upon thousands of people into numbers on a production line.\n\nAnd a Japanese diplomat, Chiune Sugihara, facing his own government\'s orders, chose to disobey, writing visas by hand and saving thousands.\n\nAnd I am the other end of an order: I issued none, I had no power to carry one out. I am the person an order fell upon and struck. The order Speer obeyed struck the Jews of Europe; Order 9066 struck me and 120,000 of my own fellow Americans.\n\nThe same war, the same word, "order," one end joined to the hand that signs, the other to a child shut into the desert. I stand at the end that was struck.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 沙漠棚屋常想一件事 + 把她关进来的不是暴徒疯子是一道命令 (国家最高领导人签字盖章冠冕堂皇 EO 9066) + 「命令」决定无数人命运 + Speer 面对希特勒命令选服从把人变数字 + Sugihara 面对政府命令选违抗救几千人 + 她是命令的另一端 (没发没执行权力是被砸中的人/Speer 命令砸欧洲犹太人 9066 砸她和 12 万美国同胞) + 「命令一头连签字的手一头连被关进沙漠的孩子我站在被砸中的一头」',
      engagementHook: '同一场战争里，「命令」这个词，一头连着签字的那只手，另一头连着被关进沙漠的孩子。我，就站在被砸中的那一头。一道命令落下来时，发命令的人和被命令砸中的人，看到的是同一件事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mn-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '日子还得过下去。这正是最让人心里发酸的地方。\n\n我们这些被关起来的人，没有放弃做美国人。营里办了学校，我照样上课，照样在教室里背效忠誓词——「……自由和正义，属于所有人。」我每天念这句话，一边念，一边人就在铁丝网里面。\n\n大人们在荒漠里种菜、办报纸、组乐队，硬是把一片不毛之地，过成了一个有秩序、有体面的小社区。不是因为他们不委屈，是想给我们这些孩子，留住一点正常生活的样子。\n\n最让人难受的是：营里很多年轻男人，被允许去参军，为美国打仗。一个全由日裔美国人组成的部队，在欧洲战场上拼死作战，成了美军里得勋章最多的部队之一。\n\n你想想这个荒唐：他们的爸妈、妹妹，还被美国关在铁丝网里面；他们却在欧洲，为这个关着家人的国家流血。他们用命去证明一件本来根本不需要证明的事：我们是忠诚的美国人。\n\n要拿命去「证明」自己有资格被当成人——这件事本身，就是最大的不公。',
        en: 'Life had to go on. And this is the part that aches most.\n\nWe who were locked up did not give up being Americans. The camp ran a school, and I went to class as before, and recited the Pledge of Allegiance in the classroom as before: "...with liberty and justice for all." I said that line every day, and as I said it, I was inside the barbed wire.\n\nThe grown-ups grew vegetables in the wasteland, started a newspaper, formed a band, held sports days, and by sheer will made a barren place into an orderly, dignified little community. Not because they were not wronged, but because they wanted to keep, for us children, some shape of a normal life.\n\nThe hardest thing of all: many young men in the camp were allowed to join the army and fight for America. An all-Japanese-American unit fought to the death on the European front and became one of the most decorated units in the entire U.S. military.\n\nThink of the absurdity: their parents and little sisters were still locked behind barbed wire by America, while they bled in Europe for the very country that held their families.\n\nThey used their lives to prove a thing that should never have needed proving: we are loyal Americans.\n\nTo have to prove with your life that you deserve to be treated as a person, that itself is the greatest injustice.',
      },
      deliverGoal: 'N7 story — 日子得过下去 + 没放弃做美国人 (营里办学校照样上课背效忠誓词「自由正义属于所有人」一边念一边在铁丝网里面) + 大人荒漠种菜办报纸组乐队办运动会把不毛之地过成有秩序体面社区 (不是不委屈是给孩子留正常生活样子) + 最难受 (营里年轻男人被允许参军/全日裔部队欧洲拼死成美军得勋章最多之一/爸妈妹妹还关在铁丝网他们却为关家人的国家流血) + 「用命证明本不需证明的事 (我们是忠诚美国人)」+ 「拿命证明自己有资格被当人本身就是最大不公」',
      engagementHook: '他们的家人还被美国关在铁丝网里，他们却在欧洲为这个国家流血——用命去证明一件本来根本不需要证明的事：我们是忠诚的美国人。要拿命去「证明」自己有资格被当成人，这件事本身公平吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mn-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '你可能会想：法院呢？难道没人去告吗？\n\n有。一个叫 Fred Korematsu（弗雷德·是松）的年轻日裔美国人，拒绝去拘留营。他说：我是美国公民，凭什么因为血统就把我关起来？他被捕了，然后把这件事一路告到了美国最高法院。\n\n1944 年，最高法院做出了判决，这个案子叫 Korematsu v. United States（是松诉合众国）。\n\n你以为最高法院会站在他这边，说政府错了？没有。最高法院判他输。九个大法官里多数认为：在战争这种紧急状态下，政府这样做是合宪、合法的。\n\n你听清楚这意味着什么：不是某个坏官员偷偷干的坏事，是美国最高的法律机构，公开盖章说——按血统关押自己的公民，合法。\n\n我那时不懂法律，但多年以后我懂了：那一刻，连法律本身，都没有站在我这边。\n\n（这个判决错得这么离谱，几十年后才被正式承认是个错误——但那是很久以后的事了。）',
        en: 'You may be thinking: what about the courts? Doesn\'t America have a Supreme Court? Did no one sue?\n\nSomeone did. A young Japanese American named Fred Korematsu refused to go to a camp. He said: I am an American citizen; by what right am I locked up for my ancestry? He was arrested, and then he took the case all the way to the U.S. Supreme Court.\n\nIn 1944 the Supreme Court handed down its ruling, in the case called Korematsu v. United States.\n\nYou think the Supreme Court would stand with him and say the government was wrong?\n\nIt did not. The Court ruled against him. A majority of the nine justices held that in the emergency of war, the government\'s action was constitutional and lawful.\n\nHear what that means: this was not the secret wrong of one bad official. It was the nation\'s highest legal body, openly putting its stamp on it, saying that locking up your own citizens by their ancestry was lawful.\n\nI did not understand law back then, but years later I did: in that moment, even the law itself did not stand on my side.\n\n(This ruling was so badly wrong that decades later it was formally acknowledged as a mistake, but that was a long time afterward.)',
      },
      deliverGoal: 'N8 story — 法院呢最高法院没人去告吗 + Fred Korematsu 是松年轻日裔拒绝去拘留营 (我是公民凭什么因血统关我/被捕一路告到最高法院) + 1944 Korematsu v. United States 是松诉合众国 + 以为最高法院站他这边说政府错? + 没有判他输 (九大法官多数认为战争紧急状态政府合宪合法) + 「不是坏官员偷干是美国最高法律机构公开盖章按血统关公民合法」+ 「那一刻连法律本身都没站在我这边」+ anti-fab/克制括号 (判决错得离谱几十年后才正式承认是错误但那是很久以后)',
      engagementHook: '不是某个坏官员偷偷干的坏事，是美国最高法院公开盖章说——按血统关押自己的公民，合法。那一刻，连法律本身，都没有站在我这边。当连最高法院都判你输，你还能相信什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'mn-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '战争 1945 年结束了。营门慢慢开了，我们被放出来——可「放出来」之后呢？\n\n我们回到加州，家没了，地被人占了或贱卖了，爸种了二十年的柠檬园回不去了。我们从零开始，还要承受邻居异样的眼光。很多人一辈子都不再提那几年——那是一道太深的伤口。\n\n但故事没有就此沉默。几十年后，当年那些被关过的孩子长大了，他们和子女站出来，要求美国政府正式认错。\n\n1988 年，美国国会通过法案，正式向被拘留的日裔美国人道歉，承认这是一桩基于「种族偏见、战时歇斯底里、政治领导失败」的错误，并给每位幸存者赔偿。一位总统签字，代表国家说了那句迟到快半个世纪的「对不起」。再后来，2018 年，美国最高法院在另一个案子里公开声明：当年 Korematsu 那个判决，是错的。\n\n我没能等到所有这些。但我想让你记住：一个把「人人平等」写进宪法的国家，也会犯下这样的错——而承认这个错，花了它快五十年。',
        en: 'The war ended in 1945. The camp gates slowly opened, and we were let out, but what came after "let out"?\n\nWe went back to California. The home was gone, the land taken or sold off for nothing, my father\'s lemon grove of twenty years beyond return. We started again from zero, and bore the strange looks of neighbors. Many never spoke of those years again for the rest of their lives. It was too deep a wound; even saying it aloud hurt.\n\nBut the story did not fall silent.\n\nDecades later, the children who had been imprisoned grew up, and they and their own children stood up and demanded that the American government formally admit it was wrong.\n\nIn 1988 the U.S. Congress passed a law formally apologizing to the interned Japanese Americans, acknowledging it as a wrong rooted in "race prejudice, war hysteria, and a failure of political leadership," and paying each survivor compensation. An American president signed it, and on behalf of the nation said the "I\'m sorry" that was nearly half a century late.\n\nLater still, in 2018, the U.S. Supreme Court, in another case, openly stated that the Korematsu ruling of those years had been wrong.\n\nI did not live to see all of this. But I want you to remember: a nation that wrote "all are equal" into its own constitution can still commit a wrong like this, and admitting the wrong took it nearly fifty years.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 战争 1945 结束营门开放出来但之后 (回加州家没了地被占贱卖爸二十年柠檬园回不去/从零开始受异样眼光/很多人一辈子不提是太深的伤口) + 故事没沉默 + 几十年后被关过的孩子长大和子女站出来要求政府认错 + 1988 国会通过法案正式道歉 (承认是「种族偏见战时歇斯底里政治领导失败」错误/赔偿每位幸存者/总统签字说迟到半世纪的对不起) + 2018 最高法院另一案公开声明 Korematsu 判决错了 + 「我没等到所有这些」+ 「一个写人人平等进宪法的国家也会犯这样的错/承认花了快五十年」',
      engagementHook: '一个把「人人平等」写进宪法的国家，也会犯下这样的错——而它承认这个错，花了快五十年。一个国家说出迟到半个世纪的「对不起」，还算不算数？',
      expectsRealAnswer: false,
    },
    {
      id: 'mn-n10',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在我们离开我的视角，往后退一步，看清楚我的故事在更大的历史里站在哪。\n\n二战，在美国课堂上常被讲成一场「善的战争」——美国打败了纳粹和军国主义，从集中营里解放了犹太人，是正义的一方。这个说法，很大程度上是对的。\n\n但我的存在，是它没说完的另一半：就在美国在欧洲反对纳粹按血统迫害犹太人的同时，它在自己国内，正按血统把 12 万自己的公民关进沙漠。一个能为正义而战的国家，也能对自己人犯下种族不公——这两件事不矛盾，它们同时是真的。\n\n而且这不是孤立的一次。如果你跑过 chinese-exclusion（排华法案）那段历史，会发现：早在 1882 年，美国就立法专门把华工挡在公民权之外。从排华到关押日裔，这是美国对亚裔一条没断过的线。\n\n看清这一半，不是为了否定美国，是为了看见一个真实、复杂的美国：它既写下了最美的关于平等的句子，也一次次没能对所有人兑现它。',
        en: 'Now we step out of my perspective and back up a pace, to see clearly where my story stands in the larger history.\n\nIn American classrooms, the Second World War is often told as a "good war": America defeated the Nazis and the militarists, freed the Jews from the death camps, was the side of justice. That account is, in large part, true.\n\nBut my existence is the other half it leaves unsaid: at the very time America was opposing, in Europe, the Nazi persecution of Jews by their bloodline, it was, at home, locking up 120,000 of its own citizens by their bloodline in the desert.\n\nThe same nation, doing both at once. A nation that can fight for justice can also commit racial injustice against its own people. These two do not contradict each other; both are true at the same time.\n\nAnd this was not an isolated once. If you have run the chinese-exclusion topic, you will find that as early as 1882 America passed a law made specifically to bar Chinese laborers from citizenship. From exclusion to the imprisonment of Japanese Americans, this is an unbroken line in America\'s treatment of people of Asian descent.\n\nTo see this half is not to deny America. It is to see a real, complicated America: one that wrote the most beautiful sentences about equality, and again and again failed to make them good for everyone.',
      },
      deliverGoal: 'N10 zoom-out + topic connection — 离开视角看更大历史 + 二战在美国课堂常讲成「善的战争」(打败纳粹军国主义解放犹太人正义一方/很大程度对的) + 我的存在是没说完的另一半 (美国在欧洲反对纳粹按血统迫害犹太人同时在国内按血统关 12 万自己公民进沙漠) + 同一国家同时做两件事不矛盾同时是真的 + 不是孤立一次 + 跨 Topic chinese-exclusion (1882 美国立法专门把华工挡在公民权外/从排华到关日裔美国对亚裔没断过的线) + 「看清这一半不是否定美国是看见真实复杂的美国 (写下最美平等句子也一次次没对所有人兑现)」',
      engagementHook: '美国在欧洲反对纳粹按血统迫害犹太人的同时，在国内按血统把 12 万自己的公民关进沙漠。一个国家，能同时是正义的一方，又对自己人犯下种族不公吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'mn-n11',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看美国这个国家，两种说法都站得住。\n\n一种说法——它背叛了它自己。它的宪法白纸黑字写着「人人平等」，它在海外为这句话流血牺牲，把人从集中营里解放出来。可它转过身，对自己土生土长、天天背效忠誓词的公民，只因为一张脸、一支血脉，就关进了沙漠，连最高法院都判这合法。一个把平等当立国之本的国家，最该对所有人兑现它，却恰恰对我这样的人撕毁了它。对我们，它就是个说话不算数的国家。\n\n另一种说法——它最后纠了错。它确实犯了大错，但它没有永远把这错藏起来。被关过的人和他们的子女站了出来，国家最终公开认错、正式道歉、给了赔偿，几十年后连最高法院都承认当年判错了。一个肯回头承认自己干了不公的事的国家，跟一个死不认错的国家，是不一样的。错误很真，但纠错也很真。\n\n这两边不是「坏国家加好国家」。是同一个国家的两面——它能写下最美的关于平等的话，也能背叛它，然后又能花几十年，笨拙地、迟到地，试着把它补回来。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at this nation, America. Both views stand.\n\nOne view: it betrayed itself. Its constitution says in black and white that "all are equal," and abroad it bled and died for that line, freeing people from the death camps. Yet it turned around and, to its own native-born citizens who recited the Pledge of Allegiance every day, only because of a face, a bloodline, shut them into the desert, and even the Supreme Court ruled it lawful. A nation that made equality its very foundation should, of all things, make it good for everyone, and yet to people like me it tore that promise up. To us, it was a nation whose word did not hold.\n\nThe other view: in the end it corrected itself. It did commit a great wrong, but it did not hide that wrong forever. Those who had been imprisoned and their children stood up, the nation finally admitted the wrong openly, apologized formally, paid compensation, and decades later even the Supreme Court acknowledged the old ruling was wrong. A nation willing to turn back and admit it did an injustice is not the same as a nation that will never admit a thing. The wrong was real, but the correcting was real too.\n\nThese are not "a bad nation plus a good nation." They are two faces of the same nation, one that can write the most beautiful words about equality, betray them, and then spend decades, clumsily, belatedly, trying to make them good again.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N11 synthesis (倒数第二) — 一种说法 (背叛了自己/宪法写人人平等海外为它流血解放集中营/转身对土生土长背誓词公民因一张脸血脉关沙漠最高法院判合法/把平等当立国之本最该兑现却对我撕毁/对我们是说话不算数的国家) / 另一种说法 (最后纠了错/确实犯大错但没永远藏/被关的人和子女站出来/国家公开认错正式道歉赔偿几十年后最高法院承认判错/肯回头认错跟死不认错不一样/错误真纠错也真) / 同一国家两面 (写最美平等的话也能背叛又能花几十年笨拙迟到补回) / 想 30 秒',
      engagementHook: '一个国家，能写下最美的关于平等的话，背叛它，然后又花几十年迟到地补回——它到底是背叛了自己，还是最后纠了错？两边都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'mn-n12',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个加州柠檬农场边长大、爱吃热狗、天天背效忠誓词的美国孩子，被自己的国家挂上号码牌、关进沙漠里的铁丝网，又在几十年后等来一句迟到的道歉——你会怎么评价这样一个开端？\n\n一个国家，一边在海外为「人人平等」而战，一边在国内按血统把自己的公民关起来。你会说它背叛了自己，还是说它最终肯回头纠错？你把这两件事放在一个天平上，你怎么称？\n\n不过先记住：你这一遍，只站在被命令砸中的这一端，只听到了我这个被关进去的人。换阿尔伯特·施佩尔那一遍，你会进到一个服从命令、把活人变成数字的人心里；换杉原千亩那一遍，你会看见一个违抗命令、把数字变回活人的人。他们那两遍，会挑战、也补全你今天的判断。\n\n再想一步。我的故事，核心其实是一个很简单、也很危险的念头：因为「那群人」长得不一样、来处不一样，所以「他们」可疑，「他们」不算我们。这个念头，每次社会一害怕、一出事，就会冒出来。\n\n今天你身边，会不会也有这样的时刻——因为某个人来自哪里、信什么、长什么样，大家就默认「他不一样」「他不可信」「他不算自己人」？\n\n那时候，你会跟着大多数人，把那个人推到铁丝网的另一边，还是会想起我，问一句：他到底做错了什么？',
        en: 'Having walked my whole life, an American child raised beside a California lemon farm, who loved hot dogs and recited the Pledge of Allegiance every day, hung with a number tag by her own country and shut behind barbed wire in the desert, and decades later met a belated apology, how would you judge a beginning like this?\n\nA nation that fought abroad for "all are equal" while at home locking up its own citizens by their bloodline. Would you say it betrayed itself, or that it was finally willing to turn back and correct the wrong? Put those two on one scale. How do you weigh them?\n\nBut first, remember: in this pass you stood only at the end the orders struck, you heard only me, the one shut inside. Run Albert Speer\'s pass and you enter a man who obeyed orders and turned living people into numbers; run Chiune Sugihara\'s pass and you see a man who defied orders and turned numbers back into living people. Those two passes will challenge, and complete, the judgment you formed today.\n\nThen take one more step. The heart of my story is really one very simple, very dangerous thought: because "those people" look different, come from somewhere different, "they" are suspect, "they" are not us. This thought rises up every time a society grows afraid, every time something goes wrong.\n\nIn your own life today, will there be such a moment, where because of where someone comes from, what they believe, what they look like, everyone simply assumes "he is different," "he can\'t be trusted," "he is not one of us"?\n\nWhen that comes, will you go with the majority and push that person to the other side of the barbed wire, or will you remember me, and ask: what did he actually do wrong?',
      },
      deliverGoal: 'N12 close (末节 evaluation + transfer) — 评价开端 (加州柠檬农场长大爱热狗背誓词的美国孩子被国家挂号码牌关进沙漠铁丝网几十年后等来迟到道歉 → 背叛了自己 vs 最终肯回头纠错同一天平) + transfer「我的故事核心是简单危险的念头 (因那群人长得来处不一样所以他们可疑不算我们/社会一害怕一出事就冒出来)」+ 今天你身边因某人来自哪信什么长什么样大家默认他不一样不可信不算自己人的时刻 + 你会跟大多数把那人推到铁丝网另一边还是想起我问「他到底做错了什么」',
      engagementHook: '我的故事核心是一个简单又危险的念头：因为「那群人」不一样，所以「他们」可疑、不算我们。今天你身边那个被默认「不一样、不可信」的人，你会跟着大家把他推到铁丝网的另一边，还是会问一句：他到底做错了什么？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'albert-speer':                       albertSpeerLens,
  'chiune-sugihara':                    chiuneSugiharaLens,
  'manzanar-nisei-girl-receiving-end':  manzanarNiseiGirlLens,
};

// per TOPIC_ROADMAP_G6_G12.md B6 + receiving-end 优先 pattern:
// 美国「善的战争」反 Whig (Manzanar 日裔拘留/Korematsu 判合宪) + 对亚裔美国学生身份意义
export var defaultLens = 'manzanar-nisei-girl-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'world-war-two-1942',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'long-arc',
  nodesPerLens: 12,
  estimatedMinutesPerLens: { 'albert-speer': 32, 'chiune-sugihara': 30, 'manzanar-nisei-girl-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, long-arc 12-node spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 12 nodes each / cross-lens micro-detail N6:「上面的命令 / one order」一句话两个方向 (Speer 服从把人变数字 vs Sugihara 违抗把数字变回人; Manzanar N6 = 命令的另一端被砸中的人)',
    'defaultLens: manzanar-nisei-girl-receiving-end — 受影响者优先 + 美国「善的战争」反 Whig (EO 9066 + Korematsu v US 判合宪) + 对亚裔美国学生身份意义',
    'expectsRealAnswer: ONLY N11 (synthesis) + N12 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'Speer lens 复用 black-death Konrad 的 banality of evil / 平庸之恶 synthesis 框架 (N10 直接 cross-reference + N11 Milgram 服从实验)',
    'Holocaust 机制按文档克制处理 (Wannsee 工业流程/Posen 演讲) 不渲染惨状; Manzanar girl composite N1 显式括号标注 (虚构但贴真实拘留营记录/代表一万多真实日裔美国孩子)',
    'cross-Topic 锚: Speer→black-death Konrad (平庸之恶); Sugihara→slavery-abolition Tubman + scramble-for-africa George W. Williams (违令救人道德勇气); Manzanar→chinese-exclusion 1882 (美国制度性反亚裔) + Korematsu v US 桥 AP Gov',
    'math/date check: Speer 1905-1981 / Sugihara 1900-1986 / WWII 1939-1945 / EO 9066 1942.2.19 / Wannsee 1942.1 / Posen Speeches 1943.10 / Korematsu v US 1944 / Sugihara visas 1940 夏 / 1988 道歉法案 / 2018 最高法院推翻 Korematsu',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};
