// ─── 同伴笔记本架构 v1 · Black Death 1347 ─────────────────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（Agnolo di Tura / Konrad / Devorah 三条线）
//   - notebook 提供考点闭环（Yersinia pestis 传播链 + 蒙古贸易路线 + 长期社会经济影响 补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History KC-1.6, KC-2.2
//   - California HSS 7.6.7
//   - 弥补 black-death-1347 课纲覆盖率从 ~78% → ~95%
//
// 注：Agnolo di Tura 是真实历史人物（Siena 编年史家）。
//     Konrad（Strasbourg 屠夫工会代表）和 Devorah（14 岁犹太女孩）是虚构合成人物。
//
// schemaVersion: 1 · notebookVersion: black-death-1347-v1

export var notebook = {
  topicId: 'black-death-1347',
  topicNameCn: '黑死病',
  topicNameEn: 'The Black Death',
  schemaVersion: 1,
  companion: {
    nameCn: '小 U',
    nameEn: 'Xiao U',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小 U 的预习笔记（学习脚手架，不剧透）──────────────────
  preview: {
    cn: `今天老师说我们要学 1347 年的黑死病（Black Death）。她在黑板上写了几个词，我一看就有点蒙——Yersinia pestis？这是什么？听起来像一种外星生物。

老师给的人名和术语清单：
Agnolo di Tura（阿尼奥洛·迪·图拉）、Yersinia pestis（鼠疫杆菌）、Genoa（热那亚）、Sicily（西西里）、bubonic plague（腺鼠疫）、Pax Mongolica（蒙古和平）

我先把这些词记下来。等我读完三段故事——Siena 编年史家的眼睛、Strasbourg 街头的恐慌、还有一个叫 Devorah 的犹太女孩的逃亡路——再回来核对：这些词我能不能自己解释了？

老师说今天有一个最重要的核心问题要记在心里：

"一场传染病，怎么能杀掉欧洲三分之一的人？答案不只是细菌，还有贸易路线、社会结构、和人的恐惧。"

我把这句话抄在本子第一页。然后先看术语清单，再去读故事。`,
    en: `Today my teacher said we're learning about the Black Death (1347). She wrote some words on the board, and I was immediately confused — Yersinia pestis? What even is that? It sounds like an alien creature.

Teacher's list of names and terms:
Agnolo di Tura, Yersinia pestis, Genoa, Sicily, bubonic plague, Pax Mongolica

Let me write these down. After I read the three stories — through the eyes of a Siena chronicler, through the panic on Strasbourg streets, and through a Jewish girl named Devorah fleeing the city — I'll come back and check: can I explain each of these terms?

Teacher said there's one big question to keep in mind today:

"How could a disease kill one-third of Europe's entire population? The answer isn't just bacteria — it's trade routes, social structures, and human fear."

I wrote that on page one of my notebook. Now let me look at the term list, then go read the stories.`,
    keyTerms: [
      { cn: '黑死病', en: 'Black Death' },
      { cn: '腺鼠疫', en: 'bubonic plague' },
      { cn: '鼠疫杆菌', en: 'Yersinia pestis' },
      { cn: '蒙古和平 / 蒙古帝国治下的秩序', en: 'Pax Mongolica' },
      { cn: '劳动力短缺', en: 'labor shortage' },
      { cn: '替罪羊机制', en: 'scapegoating' },
      { cn: '封建农奴制', en: 'feudal serfdom' },
    ],
    keyFigures: [
      {
        nameCn: '阿尼奥洛·迪·图拉',
        nameEn: 'Agnolo di Tura',
        ipa: '/aɲˈɲɔlo di ˈtuːra/',
        roleCn: 'Siena 的编年史家，1348 年亲历者。他留下了一句考试最常引用的话："我亲手埋葬了我的 5 个孩子。"',
        roleEn: 'Sienese chronicler and 1348 eyewitness. He left one of the most-cited primary source lines in any test: "I buried my five children with my own hands."',
        mustKnow: true,
        audioKey: 'agnolo-di-tura',
      },
      {
        nameCn: '康拉德（虚构）',
        nameEn: 'Konrad (fictional)',
        ipa: '/ˈkɒnræd/',
        roleCn: '虚构的 Strasbourg 屠夫工会代表，代表 1349 年反犹太暴力中普通基督徒社区的恐慌心理。',
        roleEn: 'Fictional Strasbourg butcher guild member representing the fear and panic inside the Christian community during the 1349 anti-Jewish violence.',
        mustKnow: false,
        audioKey: 'konrad',
      },
      {
        nameCn: '德沃拉（虚构）',
        nameEn: 'Devorah (fictional)',
        ipa: '/dɪˈvɔːrə/',
        roleCn: '虚构的 14 岁 Strasbourg 犹太女孩，她的逃亡路线（Strasbourg → Krakow）反映了真实历史上犹太人向东欧迁移的浪潮。',
        roleEn: 'Fictional 14-year-old Jewish girl from Strasbourg. Her escape route (Strasbourg → Krakow) mirrors the real historical wave of Jewish migration eastward.',
        mustKnow: false,
        audioKey: 'devorah',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────────
  mainConcepts: [
    {
      id: 'black-death-scale',
      termCn: '黑死病的规模与死亡率',
      termEn: 'Scale and Mortality of the Black Death',
      defCn: '黑死病是 1347-1353 年横扫欧洲的大规模传染病。它在 6 年内杀死了约 1/3 的欧洲人，是人类历史上单次死亡率最高的灾难之一。',
      defEn: 'The Black Death was a massive epidemic that swept Europe from 1347 to 1353. In six years it killed about one-third of Europe\'s population — one of the deadliest single disasters in human history.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'agnolo',
        nodeIds: ['agnolo-N3', 'agnolo-N6', 'agnolo-N10'],
        xiaoweiNote: {
          cn: `在 Agnolo di Tura 那条故事线里，我读到了 1348 年的 Siena——城里 60-80% 的人死掉了。Agnolo di Tura 是真实历史人物，他写的是真实记录。他记录了淋巴结肿块，记录了街上倒下来没人管的尸体，还记录了他"亲手把 5 个孩子埋掉"。这句话是考试里最常引用的一手史料句子之一。

**考点数字必背：**
① 1347-1353 年，欧洲约 **1/3**（三分之一）人口死亡，折合约 2500 万人。
② 部分城市和农村死亡率高达 **60-80%**。
③ Siena（锡耶纳）就是高死亡率的典型案例。

为什么死这么多？看下面的"传播机制"考点卡来解释。`,
          en: `In Agnolo di Tura's story line, I read about Siena in 1348 — 60-80% of the city died. Agnolo was a real person and what he wrote is a real primary source. He recorded the swollen lymph nodes, the bodies lying in the streets with no one to collect them, and how he "buried his five children with his own hands." That line is one of the most frequently quoted primary source sentences in tests.

**Numbers to memorize:**
① 1347-1353: approximately **1/3** of Europe's population died — about 25 million people.
② Death rates in some cities and villages reached **60-80%**.
③ Siena is the classic example of extreme mortality.

Why did so many die? The "transmission" concept card below explains.`,
        },
      },
    },

    {
      id: 'social-breakdown',
      termCn: '黑死病的社会解体',
      termEn: 'Social Breakdown During the Black Death',
      defCn: '社会解体（social breakdown）是指当死亡速度太快，社会里每一个正常运转的系统——医疗、教会、政府——同时开始失灵的状态。黑死病是历史上最典型的社会解体案例之一。',
      defEn: 'Social breakdown means that when death happens too fast, every system that normally keeps society running — medicine, the Church, government — starts failing at the same time. The Black Death is one of history\'s most dramatic examples.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'agnolo',
        nodeIds: ['agnolo-N7', 'agnolo-N9'],
        xiaoweiNote: {
          cn: `Agnolo 那条故事线里描写了 Siena 的秩序崩塌：医生不知道怎么治，神父不敢去给临终病人祈祷，家人抛弃病人，邻居彼此不敢接触。

这就叫"社会解体"（social breakdown）。当死亡速度超过社会应对能力，维持社会运转的每一个制度都开始失灵：
① **医疗**：当时最好的医生用的是"四体液说"——放血、草药，完全没用。
② **教会**：神父大量死亡。有的教堂没人主持弥撒，有的直接关闭。
③ **政府**：市政机构瘫痪。Siena 当时正在建一座大教堂，1348 年工程永久停止了。

**考点关键句**：黑死病摧毁的不只是人口，还有欧洲中世纪的**社会秩序**和**教会权威**。这为后来的文艺复兴和宗教改革埋下了伏笔。`,
          en: `In Agnolo's story line, Siena's social order collapses: doctors don't know how to treat the disease, priests refuse to give last rites, family members abandon the sick, and neighbors are afraid to touch each other.

This is called "social breakdown." When the speed of death exceeds society's ability to cope, every institution that keeps society running starts to fail:
① **Medicine**: the best doctors used "four humors" theory — bloodletting, herbal treatments, totally useless.
② **Church**: priests died in huge numbers. Some churches had no one to lead Mass; some simply closed.
③ **Government**: city institutions collapsed. Siena was building a great cathedral at the time — construction stopped permanently in 1348.

**Key exam sentence**: The Black Death destroyed not just population but also Europe's medieval **social order** and **Church authority**. This planted the seeds for the Renaissance and the Reformation.`,
        },
      },
    },

    {
      id: 'scapegoating-jews',
      termCn: '替罪羊机制——对犹太人的暴力',
      termEn: 'Scapegoating — Violence Against Jewish Communities',
      defCn: '替罪羊机制（scapegoating）是指在无法解释的灾难面前，社会的恐惧被转化成对某个少数群体的指责和暴力。黑死病期间，犹太人被诬陷在水井里下毒，遭到大规模屠杀。',
      defEn: 'Scapegoating is when a society\'s fear about an unexplainable disaster gets redirected into blaming and attacking a minority group. During the Black Death, Jewish communities were falsely accused of poisoning wells and were massacred across Europe.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'konrad',
        nodeIds: ['konrad-N4', 'konrad-N7', 'konrad-N8'],
        xiaoweiNote: {
          cn: `Konrad 那条故事线讲的就是这件事。1349 年 2 月 14 日，Strasbourg（斯特拉斯堡）约 2000 名犹太人被屠杀，这是黑死病期间欧洲反犹暴力最严重的事件之一。

谣言说"犹太人在水井里下毒导致鼠疫"——当然是假的。但恐慌中的人需要一个可以指责的对象。这就叫"替罪羊机制"（scapegoating）。

虚构人物 Konrad 代表的是基督徒社区恐慌心理的那一面：他们看不到细菌，不理解为什么祈祷没用，就只能去找一个"原因"，而犹太人是已经被边缘化的少数群体，成了最容易指向的目标。

Devorah 那条故事线代表的是被这个机制伤害的那一面。

**考点关键句**：黑死病期间，欧洲出现了大规模**反犹太人暴力**（anti-Jewish persecution），这是"替罪羊机制"（scapegoating）的历史典型案例——在无法解释的灾难面前，社会恐惧往往转化为对少数群体的暴力。`,
          en: `Konrad's story line is all about this. February 14, 1349, Strasbourg — approximately 2,000 Jewish people were massacred. This is one of the most severe instances of anti-Jewish violence during the Black Death.

The rumor was that "Jews had poisoned the wells and caused the plague" — completely false. But people in panic need someone to blame. This is called "scapegoating."

The fictional character Konrad represents the panic inside the Christian community: they couldn't see bacteria, didn't understand why prayer wasn't working — so they searched for a "cause," and Jewish communities, already marginalized, became the easiest target.

Devorah's story line represents the side that was harmed by this mechanism.

**Key exam sentence**: During the Black Death, Europe saw large-scale **anti-Jewish persecution**, a textbook historical example of "scapegoating" — when faced with an unexplainable disaster, social fear often converts into violence against minorities.`,
        },
      },
    },

    {
      id: 'jewish-flight-devorah',
      termCn: '犹太社群的逃亡与韧性',
      termEn: 'Jewish Community Flight and Resilience',
      defCn: '黑死病期间，欧洲各地的犹太社群遭到迫害和屠杀，被迫大规模向东迁移。他们依靠内部的宗教凝聚力和社区网络存活，这次东迁是东欧犹太人分布格局的历史根源之一。',
      defEn: 'During the Black Death, Jewish communities across Europe faced persecution and massacre, forcing large-scale migration eastward. They survived through internal religious cohesion and community networks. This eastward migration is one of the historical roots of Eastern European Jewish settlement patterns.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.7'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        lens: 'devorah',
        nodeIds: ['devorah-N2', 'devorah-N6', 'devorah-N10'],
        xiaoweiNote: {
          cn: `Devorah 那条故事线是一个 14 岁 Strasbourg 犹太女孩的视角。她是虚构人物，但她的逃亡路线（Strasbourg → Krakow）反映的是真实历史。

1349 年，Krakow（克拉科夫，今波兰）是欧洲为数不多愿意庇护犹太人的地方——波兰国王 Casimir III（卡西米尔三世）发布了保护犹太人的法令。

这个故事的考点在于它展示了黑死病社会影响的一个侧面：当整个欧洲因为恐慌而对犹太社群实施暴力时，犹太社群依靠内部宗教凝聚力、网络连接和向东欧的迁移存活了下来。这次向东的迁移浪潮，是东欧犹太人（阿什肯纳兹犹太人）今天分布格局的历史根源之一。

**AP 考点**：黑死病是从被压迫群体视角分析同一历史事件的典型例子。AP 考试的 DBQ 题经常要求你用多个不同视角来讨论同一个历史事件，Devorah 这条线就是练习这个的好素材。`,
          en: `Devorah's story line follows a 14-year-old Jewish girl from Strasbourg. She is fictional, but her escape route (Strasbourg → Krakow) reflects real history.

In 1349, Krakow (in present-day Poland) was one of the few places in Europe willing to shelter Jewish refugees — Polish King Casimir III had issued edicts protecting Jewish communities.

The exam relevance here is that it shows one dimension of the Black Death's social impact: while most of Europe turned violence against Jewish communities in a panic, those communities survived through internal religious cohesion, network connections, and migration eastward. This eastward wave of migration is one of the historical roots of how Eastern European Jewish (Ashkenazi) communities ended up where they are today.

**AP exam point**: The Black Death is a great example for practicing how to analyze the same event from multiple perspectives — including from the point of view of those being harmed. AP DBQ questions often ask for exactly this kind of multi-perspective analysis.`,
        },
      },
    },

    {
      id: 'yersinia-pestis-transmission',
      termCn: '传播机制 — Yersinia pestis',
      termEn: 'Transmission — Yersinia pestis',
      defCn: 'Yersinia pestis（耶尔森氏鼠疫杆菌）是引起黑死病的细菌。它的传播路径是：草原上的老鼠 → 老鼠身上的跳蚤 → 人。1347 年通过热那亚商船从黑海传入西西里，开始席卷欧洲。',
      defEn: 'Yersinia pestis is the bacterium that caused the Black Death. It spread through a chain: wild rodents → fleas on the rodents → humans. In 1347 it entered Europe when Genoese trading ships carried it from the Black Sea to Sicily.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { story: 'Agnolo di Tura 那条故事线', context: 'Agnolo 描述腺鼠疫的淋巴结肿块症状，但他不知道原因是什么' },
          { story: 'Devorah 那条故事线', context: 'Devorah 看到老鼠大量死亡先于人类发病' },
        ],
      },
      standaloneText: {
        cn: `故事里的 Agnolo 看到了症状，但他无法解释原因——因为 14 世纪没有人知道细菌的存在。直到 1894 年，瑞士医生 Alexandre Yersin 才从患者的淋巴结里分离出鼠疫杆菌，命名为 Yersinia pestis。

**传播链（AP 必考）：**
中亚草原鼠类（宿主）→ 鼠蚤（跳蚤，flea）→ 船上的黑鼠（black rats）→ 跳蚤转移到人 → 人感染

关键细节：感染后，腋下、腹股沟、颈部的淋巴结（lymph nodes）会肿大变黑坏死。14 世纪的人叫这些肿块"bubo"。这就是"bubonic plague"（腺鼠疫）名字的来源。"腺鼠疫"的意思就是淋巴结肿大的鼠疫。

**为什么港口城市最先爆发？**
1347 年 10 月，12 艘热那亚（Genoa）商船停靠西西里（Sicily）Messina 港。船上大部分水手已经死亡或临死，带着奇怪的黑色肿块。港口是贸易中心——人流密集，船舱里又有鼠有蚤，是最完美的传播起点。

从 Messina 往北，沿着地中海贸易路线：佛罗伦萨 1348 年，法国 1348 年，英国 1348-1349 年，斯堪的纳维亚 1349-1350 年——这条路线就是中世纪欧洲的贸易网络，也是鼠疫的传播路线。

**考点关键句**：黑死病（Black Death）是由鼠疫杆菌 Yersinia pestis 引起的腺鼠疫（bubonic plague）。它通过鼠—跳蚤—人的传播链扩散，1347 年由热那亚（Genoa）商船从黑海带入西西里（Sicily）。`,
        en: `The Agnolo in the story saw the symptoms but couldn't explain the cause — because no one in the 14th century knew bacteria existed. Not until 1894 did Swiss physician Alexandre Yersin isolate the plague bacterium from a patient's lymph nodes, naming it Yersinia pestis.

**The transmission chain (AP must-know):**
Central Asian rodents (reservoir host) → rat fleas → black rats on ships → fleas jump to humans → humans infected

Key detail: infected lymph nodes (in armpits, groin, neck) swell and turn black. 14th-century people called these swellings "bubo" — that's where "bubonic plague" gets its name. "Bubonic" simply means relating to these swollen lumps.

**Why did port cities get hit first?**
In October 1347, twelve Genoese (Genoa) trading ships docked at Messina harbor in Sicily. Most of the sailors were dead or dying, with strange black swellings. Port cities are trade hubs — dense human traffic, and ship holds full of rats and fleas — the perfect launching pad for an epidemic.

From Messina northward, along Mediterranean trade routes: Florence 1348, France 1348, England 1348-1349, Scandinavia 1349-1350 — this path follows medieval Europe's trade network, which doubled as the plague's spread route.

**Key exam sentence**: The Black Death was caused by the bacterium Yersinia pestis, spread via the rat-flea-human transmission chain. It entered Europe in 1347 when Genoese trading ships brought it from the Black Sea to Sicily.`,
      },
      xiaoweiNote: {
        cn: `老师出选择题最爱考"黑死病如何进入欧洲"——答案是：1347 年，热那亚商船，西西里 Messina 港。这三个细节缺一不可。

传播链口诀：**鼠 → 蚤 → 鼠（船上）→ 蚤跳人 → 人**。画一个箭头图，考试前看一遍，不会忘。`,
        en: `Teacher loves asking in multiple choice "how did the Black Death enter Europe" — the answer is: 1347, Genoese trading ships, port of Messina in Sicily. All three details matter.

Transmission chain to remember: **rodent → flea → ship rat → flea jumps to human → human**. Draw an arrow diagram, look at it once before the test, and you won't forget it.`,
      },
    },

    {
      id: 'mongol-trade-routes',
      termCn: '蒙古贸易路线作为传播媒介',
      termEn: 'Mongol Trade Routes as Transmission Vector',
      defCn: 'Pax Mongolica（蒙古和平）是 13-14 世纪蒙古帝国维持的横贯欧亚大陆的贸易网络，也叫丝绸之路。它让商品和文化跨大陆流通，但同一套路线也让鼠疫从中亚一路传到欧洲。',
      defEn: 'Pax Mongolica (Mongol Peace) was the transcontinental trade network the Mongol Empire maintained across Eurasia during the 13th and 14th centuries — also called the Silk Road. It moved goods and ideas across continents, but the same routes carried the plague westward from Central Asia.',
      standardRef: ['AP World KC-2.2', 'CA HSS 7.6.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { story: 'Agnolo di Tura 那条故事线', context: '故事开头提到鼠疫从东方来的谣言' },
          { story: 'Devorah 那条故事线', context: 'Devorah 父亲提及商队带来的怪病消息' },
        ],
      },
      standaloneText: {
        cn: `黑死病不是突然从天上掉下来的——它有一条追踪得到的地理路线。

**时间线：**
- **1338-1339 年**：中亚天山山脉附近（今吉尔吉斯斯坦境内），考古学家在墓碑上发现"瘟疫"字样，这可能是最早的记录疫情。
- **1346 年**：黑海边的热那亚贸易据点 Caffa（今乌克兰境内的卡法，现名费奥多西亚），蒙古军队围城，据说把染疫的尸体投入城内——这是有记载的最早"生物战"之一。
- **1347 年**：热那亚商船从 Caffa 撤退，带着病菌，靠岸西西里。

这条路线解释了 AP KC-2.2 的核心考点：蒙古帝国建立了 **Pax Mongolica**（蒙古和平，13-14 世纪）——横贯欧亚大陆的贸易路线，通常称为"丝绸之路"（Silk Road）。

**Pax Mongolica 的双面性：**
- 好的一面：商品、文化、技术从中国到中东到欧洲流通。指南针、造纸术、火药向西传播，都走这条路。
- 坏的一面：同样的基础设施，鼠疫从中亚向西传播，也走这条路。

**考点关键句**：**Pax Mongolica 是连通欧亚的高速公路——贸易和鼠疫都走它。** 丝绸之路不只是丝绸走的路，也是细菌走的路。这是 AP KC-2.2 的核心论点。

AP DBQ 常见问法：蒙古帝国的"连通性"是历史的进步还是灾难？最高分答案不是简单选边站，而是讨论"对谁、在什么时间框架内"。Pax Mongolica 对 13 世纪的丝绸商人是好事，对 1348 年 Siena 的居民是灾难——同一件事，视角决定结论。`,
        en: `The Black Death didn't fall out of the sky — it has a traceable geographic route.

**Timeline:**
- **1338-1339**: Near the Tian Shan mountains in Central Asia (modern Kyrgyzstan), archaeologists found gravestones with the word "plague" — possibly the earliest recorded outbreak.
- **1346**: Caffa (today Feodosia in Ukraine), a Genoese trading outpost on the Black Sea. Mongol forces besieging the city reportedly catapulted infected corpses over the walls — one of the earliest documented instances of biological warfare.
- **1347**: Genoese ships retreated from Caffa carrying the disease, and docked in Sicily.

This route explains the core AP KC-2.2 exam point: the Mongol Empire had established **Pax Mongolica** (Mongol Peace, 13th-14th centuries) — a transcontinental trade network usually called the Silk Road.

**The two sides of Pax Mongolica:**
- The good: goods, culture, and technology flowed from China to the Middle East to Europe. The compass, papermaking, and gunpowder all traveled west along this route.
- The bad: the same infrastructure allowed the plague to spread westward from Central Asia.

**Key exam sentence**: **Pax Mongolica was the highway connecting Eurasia — both trade and plague traveled it.** The Silk Road wasn't only the road of silk; it was also the road of bacteria. This is the core argument of AP KC-2.2.

Common AP DBQ angle: was the Mongol Empire's "connectivity" a historical advance or a disaster? The highest-scoring answer doesn't just pick a side — it discusses "for whom, and within what time frame." Pax Mongolica was good for a 13th-century silk merchant and catastrophic for a Siena resident in 1348 — same event, perspective determines conclusion.`,
      },
      xiaoweiNote: {
        cn: `这个考点我一开始没想到——蒙古帝国和黑死病有关系？！

老师解释完我才明白：**连通性是双刃剑**。今天的网络、航空、集装箱运输让全球贸易成为可能，但 COVID-19 也是靠同样的网络传播的。Pax Mongolica 是 14 世纪版本的"全球化"——优点和风险都成比例放大了。

AP 简答题如果问"蒙古帝国对欧亚的影响"，要记得写黑死病，不只是贸易。`,
        en: `This connection surprised me at first — the Mongol Empire caused the Black Death?!

After teacher explained I finally got it: **connectivity is a double-edged sword.** Today's internet, aviation, and container shipping make global trade possible, but COVID-19 also spread through those same networks. Pax Mongolica was the 14th-century version of "globalization" — benefits and risks were both amplified proportionally.

If an AP short-answer asks "what were the effects of the Mongol Empire on Eurasia," remember to mention the Black Death, not just trade.`,
      },
    },

    {
      id: 'long-term-social-economic-impact',
      termCn: '黑死病的长期社会经济影响',
      termEn: 'Long-Term Social and Economic Impact of the Black Death',
      defCn: '黑死病在短短几年内杀死了欧洲 1/3 的人口，活下来的农民和工匠因此变得"稀缺"。稀缺带来了工资上涨、封建制度瓦解，同时也动摇了教会的权威。这些变化在此后一两个世纪持续改变了欧洲社会。',
      defEn: 'The Black Death killed one-third of Europe\'s population in a few years, making surviving farmers and craftsmen "scarce." That scarcity drove up wages, weakened feudalism, and shook the Church\'s authority — changes that continued reshaping European society over the following century or two.',
      standardRef: ['AP World KC-1.6', 'CA HSS 7.6.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { story: 'Agnolo di Tura 那条故事线', context: 'Agnolo 感叹 Siena 原本的建设计划永远不会完成了' },
          { story: 'Konrad 那条故事线', context: 'Konrad 提及街市上能干的工匠死了太多，工价涨了' },
        ],
      },
      standaloneText: {
        cn: `黑死病在 1353 年之后平息了第一波，但它改变欧洲的方式才刚刚开始。

**人口影响：**
欧洲 1/3 的人消失了——约 2500 万人，1348-1353 年间。整个欧洲的人口恢复到黑死病之前的水平，花了将近 **150 年**（大约到 1500 年代初）。

**劳动力短缺 → 工资上涨 → 封建制度瓦解：**
这是 AP 最爱考的因果链。死了 1/3 的人，活下来的农民和工匠突然变得"稀缺"，地主和领主必须付更多钱才能留住他们。

1381 年，英国发生了**瓦特·泰勒起义**（Peasants' Revolt of 1381）——农民要求废除农奴制和劳役。这场起义直接和黑死病后劳动力稀缺带来的农民谈判能力提升有关。

整个欧洲，封建农奴制（feudal serfdom）——农民被绑在土地上、必须无偿服役的制度——在黑死病后的一两个世纪内逐渐瓦解。

**对教会权威的冲击：**
教会告诉人们祈祷可以救命，但黑死病不分好坏、不论信不信教地杀人。神父大量死亡。有的教区几乎没有神职人员幸存。人们开始问：**为什么上帝不保护虔诚的信徒？**

这种疑问不是立刻把人变成无神论者，但它动摇了教会"垄断精神权威"的地位，是后来 16 世纪马丁·路德宗教改革（Protestant Reformation）的远期土壤之一。

**考点关键句**：黑死病的长期影响 = **劳动力短缺 → 封建制度瓦解 + 工资上涨 + 教会权威受损**。这三条在 AP 论文题里经常要求"用具体证据支撑"。`,
        en: `The first wave of the Black Death subsided after 1353, but the way it transformed Europe was only just beginning.

**Population impact:**
One-third of Europe's people vanished — about 25 million, between 1348 and 1353. Europe's population didn't recover to pre-Black Death levels for nearly **150 years** (approximately by the early 1500s).

**Labor shortage → rising wages → breakdown of feudalism:**
This is the cause-and-effect chain AP loves to test. One-third dead meant surviving peasants and craftsmen suddenly became "scarce." Landlords and lords had to offer more to keep them.

In 1381, England saw the **Peasants' Revolt** (also called Wat Tyler's Rebellion) — peasants demanding the abolition of serfdom and forced labor. This uprising connects directly to the increased bargaining power that survivors gained after the Black Death's labor shortage.

Across Europe, feudal serfdom — the system binding peasants to land and requiring unpaid labor service — gradually collapsed over the century or two following the Black Death.

**Blow to Church authority:**
The Church told people prayer could save them, but the Black Death killed without regard for piety or faith. Priests died in huge numbers. Some parishes were left with almost no surviving clergy. People began asking: **why didn't God protect the faithful?**

This doubt didn't immediately turn people into atheists, but it shook the Church's monopoly on spiritual authority — and became one of the long-range seeds for Martin Luther's Protestant Reformation in the 16th century.

**Key exam sentence**: The long-term impact of the Black Death = **labor shortage → breakdown of feudalism + rising wages + erosion of Church authority**. All three are frequently required in AP essay prompts with "support with specific evidence."`,
      },
      xiaoweiNote: {
        cn: `这个考点让我意外：一场瘟疫居然加速了封建制度的灭亡？

老师说："当足够多的人死掉，活下来的人谈判能力就改变了。"这是经济学的供需关系，但在 14 世纪，供需的"货物"是人的劳动力。

AP 选择题常考：黑死病之后，欧洲农民的经济地位——答案是**上升**（工资涨了）。容易答错成"下降"，因为觉得灾难之后人们会变得更穷——但实际上是**幸存者因为稀缺而获得了更高的谈判能力**。`,
        en: `This one surprised me: a pandemic actually accelerated the end of feudalism?

Teacher said: "When enough people die, the bargaining power of the survivors shifts." That's supply and demand economics — but in the 14th century, the "commodity" in question was human labor.

Common AP multiple choice trap: after the Black Death, what happened to European peasants' economic status? The answer is it **rose** (wages went up). It's easy to answer "fell" because you think people get poorer after a disaster — but in fact, **survivors gained higher bargaining power because they had become scarce.**`,
      },
    },

    {
      id: 'black-death-spread-timeline',
      termCn: '黑死病传播时间线（1347-1353）',
      termEn: 'Spread Timeline of the Black Death (1347-1353)',
      defCn: '黑死病从 1347 年 10 月在西西里登陆，到 1353 年第一波结束，短短六年扩散到几乎整个欧洲。这条传播路线完全沿着中世纪的贸易路网推进。',
      defEn: 'The Black Death landed in Sicily in October 1347 and spread to nearly all of Europe by 1353 when the first wave ended — just six years. Its spread path followed medieval Europe\'s trade network almost exactly.',
      standardRef: ['AP World KC-1.6', 'KC-2.2', 'CA HSS 7.6.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'all',
        nodeIds: ['agnolo-N1', 'konrad-N1', 'devorah-N1'],
        xiaoweiNote: {
          cn: `三段故事的时间线加在一起正好覆盖了黑死病传播的主要阶段：

- **1347 年 10 月**：黑死病进入西西里（Sicily）Messina 港——热那亚商船
- **1347-1348 年**：意大利主要城市——佛罗伦萨、威尼斯、热那亚、Siena（Agnolo di Tura 的故事就在这里）
- **1348 年**：法国、西班牙、德国南部
- **1348-1349 年**：英国、德国北部（Strasbourg 1349 年——Konrad 和 Devorah 的故事）
- **1349-1350 年**：斯堪的纳维亚、波兰（Devorah 逃向的 Krakow 1349-1350 年间受到波及）
- **1353 年**：第一波基本结束

**考点关键句**：黑死病从 **1347 年**（西西里）到 **1353 年**，短短六年扩散到几乎整个欧洲——这速度只能靠中世纪发达的**贸易路线**来解释。

注意：黑死病不是只来了一次。之后 1362、1374、1400 年代反复爆发，但第一波（1347-1353）是死亡人数最多的一次。`,
          en: `The three stories together cover the main phases of the Black Death's spread:

- **October 1347**: Black Death enters Sicily at Messina port — Genoese ships
- **1347-1348**: Major Italian cities — Florence, Venice, Genoa, Siena (Agnolo di Tura's story is set here)
- **1348**: France, Spain, southern Germany
- **1348-1349**: England, northern Germany (Strasbourg 1349 — Konrad and Devorah's story)
- **1349-1350**: Scandinavia, Poland (Krakow, where Devorah flees, was hit during 1349-1350)
- **1353**: First wave largely over

**Key exam sentence**: The Black Death spread from **1347** (Sicily) to **1353**, reaching almost all of Europe in just six years — a pace that can only be explained by medieval Europe's well-developed **trade routes**.

Note: The Black Death didn't strike only once. It returned in 1362, 1374, and through the 1400s — but the first wave (1347-1353) had the highest death toll.`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）──────────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `封建教会教人：遇到灾难要祈祷，上帝会保护信徒。但 1348 年的黑死病，虔诚的修女和神父死得不比普通人少，有些教区的神职人员甚至全灭了。

你觉得这一事实如何影响了欧洲普通人对教会权威的信任？如果你是 1348 年 Siena 的一个幸存者，你会怎么看你的信仰？`,
      en: `The medieval Church taught people: in times of disaster, pray — God will protect the faithful. But in the Black Death of 1348, devout nuns and priests died at the same rates as everyone else. In some parishes, almost all the clergy were wiped out.

How do you think this reality affected ordinary Europeans' trust in Church authority? If you were a survivor in Siena in 1348, what would you think about your faith?`,
      hintCn: `这道题没有"正确答案"——重要的是用历史证据支持你的观点。

可以从两个方向想：
① **信仰动摇的方向**：如果祈祷无用，教会的核心承诺就失效了。人们开始寻找其他解释——卖赎罪券的行为激增，鞭笞修行者（Flagellant Movement）涌现，人们用更极端的方式"补救"上帝的沉默。
② **信仰强化的方向**：有人反而更虔诚——认为黑死病是上帝对人类罪行的惩罚，需要更彻底的忏悔。

长期看：这道问题的答案，就是为什么 170 年后（1517 年）马丁·路德的宗教改革能找到那么多愿意听的人。黑死病松动了教会权威，宗教改革推倒了一部分权威。`,
      hintEn: `There's no single "correct answer" here — what matters is supporting your position with historical evidence.

Think from two directions:
① **Faith shaken**: if prayer didn't work, the Church's core promise had failed. People sought other explanations — sales of indulgences spiked, the Flagellant Movement emerged, people tried ever more extreme measures to "fix" God's silence.
② **Faith intensified**: some people became more devout, believing the Black Death was God's punishment for human sin, demanding even deeper repentance.

Looking long-term: the answer to this question is why, 170 years later in 1517, Martin Luther's Reformation found so many people willing to listen. The Black Death had cracked Church authority; the Reformation knocked part of it down.`,
      conceptsActivated: ['social-breakdown', 'long-term-social-economic-impact'],
    },
    {
      id: 'q2',
      cn: `蒙古帝国建立了 Pax Mongolica（蒙古和平）——横贯欧亚的贸易网络，让丝绸、香料、技术、思想跨大陆流动。但同一套基础设施，也让鼠疫从中亚一路传到欧洲，杀死了 2500 万人。

你觉得蒙古帝国的"连通性"是历史的进步，还是历史的灾难？还是说这个问题本身就没法用"进步"或"灾难"来回答？`,
      en: `The Mongol Empire created the Pax Mongolica — a transcontinental trade network that allowed silk, spices, technology, and ideas to flow across Eurasia. But the same infrastructure also carried the plague from Central Asia all the way to Europe, killing 25 million people.

Do you think the Mongol Empire's "connectivity" was a historical advance or a historical catastrophe? Or is this a question that can't be answered using "advance" or "catastrophe" at all?`,
      hintCn: `历史上的大规模"连通性"几乎都是双刃剑。

类比着想：
- 哥伦布 1492 年到达美洲，开启了大西洋贸易——同时也带去了旧大陆的疫病（天花等，天花约 1518 年起），约两百年内导致美洲原住民人口减少约 90%。
- 今天的互联网让信息、教育、商业全球化——同时也让错误信息和网络犯罪全球化。
- COVID-19 的快速蔓延，是 21 世纪航空网络"连通性"的直接后果之一。

**写 AP 论文的提示**：这类"好事还是坏事"的问题，最高分答案通常是讨论"对谁、在什么时间框架内"，而不是简单地选边站。蒙古帝国的连通性，对 13 世纪的丝绸商人是好事，对 1348 年 Siena 的居民是灾难——同一件事，视角决定结论。`,
      hintEn: `Large-scale "connectivity" in history is almost always a double-edged sword.

Think through analogies:
- Columbus's 1492 arrival in the Americas opened Atlantic trade — but also brought Old World diseases (including smallpox from about 1518 onward), contributing to a roughly 90% population decline among Indigenous Americans over about two centuries.
- Today's internet globalizes information, education, and commerce — but also globalizes misinformation and cybercrime.
- COVID-19's rapid spread was partly a direct consequence of the "connectivity" of 21st-century airline networks.

**AP essay tip**: for "was this good or bad" questions, the highest-scoring answer usually frames the discussion as "for whom, and within what time frame" rather than simply picking a side. Mongol connectivity was beneficial for a 13th-century silk merchant and catastrophic for a Siena resident in 1348 — same event, perspective determines conclusion.`,
      conceptsActivated: ['mongol-trade-routes', 'black-death-spread-timeline', 'yersinia-pestis-transmission'],
    },
    {
      id: 'q3',
      cn: `1349 年 2 月 14 日，Strasbourg 的基督徒社群杀死了约 2000 名犹太人，理由是"犹太人在井里下毒导致了鼠疫"——这完全是谣言，没有任何证据。

Konrad 的故事展示了恐慌如何被转化成对少数群体的暴力。这种"替罪羊机制"在历史上是否反复出现过？你能举一个或两个其他的历史例子吗？这个机制的共同逻辑是什么？`,
      en: `On February 14, 1349, the Christian community in Strasbourg killed approximately 2,000 Jewish people, claiming that "Jews had poisoned the wells and caused the plague" — a complete rumor with no evidence whatsoever.

Konrad's story shows how panic can be converted into violence against minorities. Has this "scapegoating" mechanism appeared repeatedly in history? Can you name one or two other historical examples? What is the common logic behind this mechanism?`,
      hintCn: `替罪羊机制的逻辑框架是：
**[无法解释的灾难] + [恐慌的社会] + [已经被边缘化的少数群体] = [将灾难原因归咎于少数群体] + [暴力]**

历史例子（可以选一个你最熟悉的）：
- 1918 年大流感期间，美国多地将病毒归咎于德国移民或德裔社区。
- 1923 年关东大地震后，日本东京发生大规模屠杀朝鲜人事件（谣言说"朝鲜人趁乱在水源投毒"）。
- 二战中纳粹德国将经济困境和失败归咎于犹太人——规模更大、系统性更强的同一机制。
- 2020 年 COVID-19 期间，亚裔美国人遭到歧视和暴力——"中国病毒"叙事的结果。

**进阶思考**：知道了这个机制，在下一次不明原因的危机爆发时，我们可以提前做什么来防止它被激活？`,
      hintEn: `The logic framework of scapegoating is:
**[inexplicable disaster] + [panicking society] + [already-marginalized minority] = [blame for the disaster attributed to that minority] + [violence]**

Historical examples (pick one you know best):
- During the 1918 influenza pandemic, communities across the US blamed German immigrants or German-American communities for the disease.
- After the 1923 Great Kanto Earthquake in Japan, mass killings of Korean people occurred in Tokyo (based on rumors that "Koreans had poisoned water supplies in the chaos").
- Nazi Germany blamed Jewish people for economic hardship and military defeat — the same mechanism at larger scale and with greater systematization.
- During COVID-19 in 2020, Asian Americans faced discrimination and violence — a consequence of "Chinese virus" framing.

**Going deeper**: now that you understand this mechanism, if an unexplained crisis breaks out, what can we do in advance to prevent the mechanism from activating?`,
      conceptsActivated: ['scapegoating-jews', 'jewish-flight-devorah', 'social-breakdown'],
    },
  ],
};

export default notebook;
