// ─── Manifest Destiny & the Mexican-American War 1845-1848 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 昭昭天命与美墨战争 · Manifest Destiny & the Mexican-American War 1845-1848
// CA HSS-8.5 西进扩张 / HSS-8.8 加州转手 · APUSH Period 4-5 (Topic 5.3 Manifest Destiny / 5.4 Mexican-American War)
//
// 3 lens 设计 (per TOPIC_ROADMAP + AUTHORING_PIPELINE 第 8/12 条):
//   - polk                (perpetrator-actor)        — James K. Polk 1795-1849 把版图推到太平洋的「目标型」总统 + 蓄奴者
//   - thoreau             (lonely-mediator/dissenter)— Henry David Thoreau 1817-1862 为拒战拒税坐一夜牢 + 写《Civil Disobedience》
//   - vallejo-receiving-end (receiving-end) — Mariano Guadalupe Vallejo 1807-1890 欢迎美国却在 1851 Land Act 下失去土地的 Californio
//
// defaultLens = 'vallejo-receiving-end' (受影响者优先: 失地者 + 条约保证却落空 + 跨视角「同一句注定的命运」对位)
//
// qaTemplate: multi-faction (Polk 政府 vs 反战派/林肯/Thoreau vs 墨西哥 vs Californio 地主 vs 淘金客 vs 南北奴隶制之争)
//
// 跨 lens micro-detail (N6 anchor):
//   「manifest destiny / 注定的命运」一句话三个方向 —
//   - Polk N6: 用「天命」给夺地正名 → 1846 战争咨文「American blood on American soil」
//   - Thoreau N6: 一个人对「天命」说不 — 拒税坐牢 / 守法 ≠ 正义
//   - Vallejo N6 (anchor): 同一片「注定属于美国」的土地, 是他世代的家 — 条约第 8/9 条承诺保护, 却挡不住向新来者倾斜的整套规则
//
// 跨 Topic 锚:
//   - 扩张激化奴隶制之争 → constitutional-convention-1787 (3/5 妥协遗留) + 通向内战
//   - 「条约 ≠ 真正的保护」/ 谁执行规则比规则写什么更重要 (Vallejo 失地)
//   - ⚠️ 不与 Trail of Tears 重叠: 切罗基迁移 = jackson-indian-removal-1830 主题; 本主题是 1840s 领土扩张本身
//
// Anti-fabrication 重点 (per 第 8 条 A + J):
//   - Vallejo lens 第一人称内心戏用括号短句标注 (史料确证的是: 约 17.5 万英亩 → 几百英亩 / Bear Flag Revolt 被囚 / 1849 制宪代表)
//   - O\'Sullivan「manifest destiny」phrasing 真实 (paraphrase); Polk 1846 咨文「American blood / American soil」真实; Thoreau《Civil Disobedience》1849 真实
//   - 无伪造私人引文 / 日记
//
// 数学 + 年代自检:
//   Polk 1795-1849 (1845 就任时 50 岁; 卸任 1849 三个月后病逝) / Thoreau 1817-1862 (1846 拒税时 28-29 岁) / Vallejo 1807-1890 (1848 割让时 41 岁)
//   Manifest Destiny 口号 1845 (O\'Sullivan) / 德州 annexation 1845 / Oregon Treaty 1846 (北纬 49 度) / 美墨战争 1846-48
//   Guadalupe Hidalgo 条约 1848 (墨割让约 52.5 万 sq mi ≈ 55% 领土 / 美付 1500 万美元) / 加州淘金热 1848-49 / 加州建州 1850 / California Land Act 1851
//
// per AUTHORING_PIPELINE.md 11 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N10 synthesis + N11 closing only true)
//   每 lens 11 nodes / 220-380 CN chars (anchor N6 + synthesis N10/N11 可到 ~550) / cultural ban 非中国史用 real terms / §8 中国部分(narrative)才用中国词
// 4-agent review (TBD): 7thgrader (小 U) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: James K. Polk (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var polkLens = {
  id: 'polk',
  name: 'James K. Polk',
  nameCn: '詹姆斯·波尔克',
  role: 'perpetrator-actor',
  perspectiveTag: 'expansion-president',
  icon: '👔',
  description: {
    cn: '田纳西人,1795 年生,安静、刻板、工作到把自己累垮的总统。1845 年上任那天他列了四个目标,四年里几乎全做到,其中两个是拿下俄勒冈和加州。他真心相信向西扩张是美国注定的命运,为此对墨西哥打了一仗,把版图推到太平洋。同一个他一辈子靠田纳西种植园的被奴役者维生,他扩出的每一块新地立刻成了「算蓄奴州还是自由州」的火药桶。这一遍让你从一个「目标全兑现」的总统内部,看一国的成就和代价怎么同时长出来。',
    en: 'A Tennessean, born 1795, a quiet, rigid president who worked himself into the grave. On the day he took office in 1845 he set himself four goals and met nearly all in four years, two of which were taking Oregon and California. He truly believed westward expansion was America\'s destined fate, and to that end fought a war with Mexico and pushed the map to the Pacific. The same man lived his whole life off the enslaved of a Tennessee plantation, and every new tract he expanded into became at once a powder keg over "slave state or free state." This pass lets you watch, from inside a president who met all his goals, how a nation\'s achievement and its cost grow at the same time.',
  },
  storyboard: [
    {
      id: 'polk-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我叫 James K. Polk（詹姆斯·波尔克）。\n\n你大概没怎么听过我——我不是华盛顿，不是林肯，没有铜像立在每个广场上。但论给美国版图加地，我是历史上数得着的一个。\n\n1845 年我当上总统那天，做了一件别的总统很少做的事：我私下列了四个具体目标，告诉身边人，我这一届就办这四件，办完就走，绝不连任。其中两个是——拿下俄勒冈，拿下加州。\n\n四年后我离任时，四件几乎全办成了。美国的版图，在我手里涨了大约三分之一。\n\n我为这个把自己累垮了。卸任三个月，我就病死了，五十几岁。\n\n这一遍，你坐进我这个位置。你会看到一个真心相信「这是我们注定的命运」的人，怎么一步步，把这片大陆的西半边，变成了美国的。',
        en: 'My name is James K. Polk.\n\nYou have probably barely heard of me. I am not Washington, not Lincoln, no bronze statue of me stands in every square. But for adding land to the American map, I am among the few who count in history.\n\nOn the day I took office in 1845 I did something few presidents do: in private I set four specific goals and told the people around me, this one term I will do these four things, and when they are done I will leave, never to run again. Two of them were these, take Oregon, take California.\n\nFour years later, when I left, nearly all four were done. The map of America grew by about a third in my hands.\n\nIt cost me my life. Three months after I left office I died of illness, in my early fifties.\n\nThis pass puts you in my seat. You will watch a man who truly believed "this is our destined fate" turn, step by step, the western half of this continent into America.',
      },
      deliverGoal: 'N1 hook — Polk 自我介绍 (不出名但加地最多/列四目标含拿下俄勒冈加州/只干一届) + 版图涨约三分之一 + 卸任三月病死 + 这一遍视角 (真信「注定的命运」的人怎么把大陆西半边变成美国的)',
      engagementHook: '我列了四个目标，一届全办成，然后把自己累死。「把想做的事全做完」是一种成功吗——哪怕代价是你的命，和别人的家？',
      expectsRealAnswer: false,
    },
    {
      id: 'polk-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说说我接手的是一个什么样的国家，你才懂我为什么那么急着往西。\n\n1844 年我竞选时，美国的西边大致还止于密西西比河往西不远。再往西，是英美共管的俄勒冈，和墨西哥的大片北部——包括今天的加州、新墨西哥、亚利桑那这一带。北美大陆的西半边，那时候还不属于美国。\n\n可那几年，整个国家都在往西看。成千上万的移民赶着篷车，沿一条叫 Oregon Trail（俄勒冈小道）的路西行。在那一代美国人心里，「向西」几乎等于「希望」「重新开始」。\n\n就在 1845 年，一个纽约记者 John O\'Sullivan 写出了两个字，正好说中了所有人的心思：Manifest Destiny（昭昭天命）。意思是——美国铺满整个大陆，是上天注定、不容置疑的命运。\n\n这两个字像一句咒语。它把「我们想要那片地」这个念头，变成了「老天定我们要那片地」。一个想法，从此不用再被质疑，只需要被完成。',
        en: 'First, let me tell you what kind of country I inherited, so you understand why I was in such a hurry to go west.\n\nWhen I ran in 1844, America\'s western edge still stopped not far west of the Mississippi. Beyond that lay Oregon, held jointly with Britain, and the vast northern lands of Mexico, including today\'s California, New Mexico, Arizona. The western half of the continent did not yet belong to America.\n\nBut in those years the whole country was looking west. Tens of thousands of settlers drove their wagons along a road called the Oregon Trail. In that generation\'s heart, "west" meant almost the same thing as "hope," "a fresh start."\n\nThen in 1845 a New York journalist, John O\'Sullivan, wrote two words that named exactly what everyone was feeling, Manifest Destiny. The meaning was this, that America overspreading the whole continent was a fate ordained by Providence, beyond question.\n\nThose words were like a spell. They turned the thought "we want that land" into "Heaven decreed we should have that land." A thought that, from then on, no longer needed to be questioned, only carried out.',
      },
      deliverGoal: 'N2 setup — 1844 美国西界止于密西西比以西不远 + 向西=希望 (Oregon Trail 篷车) + 1845 O\'Sullivan 造「Manifest Destiny」口号 + 话术分析: 把「想要那片地」变成「天定我们要那片地」一个念头不用再被质疑只需完成',
      engagementHook: '一句「这是天注定的命运」，把「我们想要那片地」变成了「老天要我们拿那片地」。给一个选择披上「注定」的外衣，它就不用再被质疑——你见过这种话术吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'polk-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我上任头一年，先办成了一件大事：并入德州。\n\n德州本是墨西哥的地，1836 年那里的移民闹独立，自立成了一个共和国。1845 年，我们美国正式把德州并进来，成为一个州。\n\n但墨西哥从来不承认德州独立。在它眼里，并入德州，就是美国明抢它的领土。美墨关系一下子绷紧了。\n\n更要命的是边界。德州和墨西哥之间，到底哪条河是界？我坚持是南边的 Rio Grande（格兰德河）；墨西哥说是更北的 Nueces 河（努埃西斯河）。两条河之间，是一大片谁都说是自己的争议地带。\n\n你记住这片争议地——后面那场仗的第一枪，就响在这里。\n\n而我心里其实清楚一件事：我真正想要的，不只是德州。是德州西边、墨西哥手里的那块更大的地——加州。德州，只是个开头。',
        en: 'In my first year I got one big thing done, annexing Texas.\n\nTexas had been Mexican land. In 1836 the settlers there rose for independence and made themselves a republic. In 1845 we formally brought Texas in as a state.\n\nBut Mexico had never recognized Texas\'s independence. In its eyes, annexing Texas was America openly seizing its territory. Relations between us snapped tight at once.\n\nWorse was the border. Between Texas and Mexico, which river was the line? I insisted on the Rio Grande to the south; Mexico said the Nueces River, farther north. Between the two rivers lay a wide disputed strip each side called its own.\n\nRemember that disputed strip, the first shot of the war that came later rang out right there.\n\nAnd in my heart I knew one thing clearly, what I truly wanted was not Texas alone. It was the far larger land west of Texas, still in Mexico\'s hands, California. Texas was only the opening.',
      },
      deliverGoal: 'N3 setup — 1845 Texas annexation (德州 1836 独立/美国并为州) + 墨西哥不承认视为明抢 → 关系绷紧 + 边界争议 (Polk 坚持 Rio Grande / 墨西哥说 Nueces / 中间争议带) + Polk 真正想要的是加州/德州只是开头',
      engagementHook: '我嘴上要的是德州，心里真正想的是加州。当一个人嘴上说的目标，只是更大目标的「开头」——你怎么看这种不全说出口的野心？',
      expectsRealAnswer: false,
    },
    {
      id: 'polk-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你想要加州，可墨西哥不卖。你派人去出价买，墨西哥连见都不肯见。买不到，怎么办？\n\n你手里有一张牌：那片 Rio Grande 和 Nueces 之间的争议地。\n\n1846 年春天，你下令手下的 Zachary Taylor，带军队开进这片争议地，一直推进到 Rio Grande 北岸，正对着墨西哥的城镇扎营。\n\n你心里清楚这一步意味着什么：墨西哥认为这是它的地。你把军队摆到这儿，几乎就是在等一件事发生——等对方先动手。\n\n果然，4 月底，墨西哥骑兵渡河，跟美军交火，美军死了人。\n\n消息传回华盛顿，你等的就是这一刻。你可以对国会说：墨西哥打过来了，我们是自卫。\n\n但你自己知道：是你先把军队放到那片地上的。\n\n这一刻你得想：你要的这场仗，到底是「被迫自卫」，还是「你布好局、就等对方踩进来」？这两件事，在你心里，分得清吗？',
        en: 'Now you are me.\n\nYou want California, but Mexico will not sell. You send a man to make an offer; Mexico will not even receive him. You cannot buy it. Then what?\n\nYou hold one card, that disputed strip between the Rio Grande and the Nueces.\n\nIn the spring of 1846 you order General Zachary Taylor to march troops into the disputed strip, push all the way to the north bank of the Rio Grande, and camp there, facing the Mexican towns.\n\nYou know clearly what this step means. Mexico considers this its land. By placing your army here, you are all but waiting for one thing to happen, for the other side to strike first.\n\nSure enough, in late April Mexican cavalry crossed the river, clashed with American troops, and American men died.\n\nWhen the news reaches Washington, this is the moment you were waiting for. You can tell Congress, Mexico has attacked us, we are defending ourselves.\n\nBut you yourself know, it was you who put the army on that land first.\n\nHere you must ask yourself, the war you wanted, is it "forced self-defense," or "you set the trap and waited for the other side to step in"? On you, can those two things even be told apart?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 想买加州墨西哥不卖不见 + 唯一的牌是争议地 + 1846 春派 Taylor 进驻 Rio Grande 北岸 (等对方先动手) + 4 月底墨军渡河交火美军死人 + 自我拷问: 被迫自卫 vs 布好局等人踩进来分得清吗',
      engagementHook: '我把军队摆到对方认为是自家的地上，等对方先动手——然后说「我们是自卫」。这是自卫，还是布好的局？你怎么分得清？',
      expectsRealAnswer: false,
    },
    {
      id: 'polk-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1846 年 5 月，我去国会要宣战。\n\n我说了一句后来被反复引用的话：「墨西哥已经越过边界，侵入我们的领土，在美国的土地上流了美国人的血。」\n\n整句话的分量，全压在「美国的土地（American soil）」这五个字上。可那块地，正是双方争得不可开交的争议带。我把「争议的地」直接说成「我们的地」——这么一说，宣战就顺理成章了。\n\n国会通过了。但不是所有人都买账。\n\n一个伊利诺伊州来的年轻议员，叫 Abraham Lincoln（亚伯拉罕·林肯），站出来提了一串问题，史称「Spot Resolutions（关于那个地点的质询）」。他追着我问：你说美国人的血流在「美国的土地」上——那请你指出来，到底是哪一个具体的「点」？那个点，真的在美国境内吗？\n\n他没法阻止战争。但他逼着所有人看清一件事：这场仗的「正当理由」，建在一句可以被拆穿的话上。',
        en: 'In May 1846 I went to Congress to ask for war.\n\nI said a line that would be quoted again and again, "Mexico has crossed the boundary, invaded our territory, and shed American blood upon American soil."\n\nThe whole weight of that sentence rests on five words, "American soil." But that land was exactly the disputed strip both sides fought over. I called the "disputed land" simply "our land," and once said that way, the declaration of war followed naturally.\n\nCongress passed it. But not everyone bought it.\n\nA young congressman from Illinois named Abraham Lincoln stood up and put forward a string of questions, known as the "Spot Resolutions." He pressed me, you say American blood was shed on "American soil," then point to it, on exactly which "spot"? Was that spot truly inside the United States?\n\nHe could not stop the war. But he forced everyone to see one thing, the "just cause" of this war was built on a sentence that could be pulled apart.',
      },
      deliverGoal: 'N5 story — 1846.5 Polk 国会宣战咨文「American blood on American soil」 + 话术分析 (重量压在 American soil/把争议地说成我们的地) + 国会通过但 Lincoln Spot Resolutions 质询 (那个点到底在不在美国境内) + 阻止不了战争但戳穿正当理由建在可拆穿的话上',
      engagementHook: '我说「美国人的血流在美国的土地上」——可那块地正是双方争议的。林肯追问：到底是哪一个点？那个点真在美国境内吗？一句话能不能撑起一场战争？',
      expectsRealAnswer: false,
    },
    {
      id: 'polk-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我要让你看清同一年我做的另一件事——因为它把我这套逻辑照得清清楚楚。\n\n就在 1846 年，我跟墨西哥开打的同时，北边还有一块大地悬而未决：俄勒冈。它当时是美国和英国共管的。当时国内扩张派喊得最响的一句口号是——「54-40 or fight」（拿到北纬 54 度 40 分，否则就开打），听上去要跟英国死磕到底，我也乐得借这股气势。\n\n可真到谈判桌上，我没跟英国打。我跟它和和气气地签了《Oregon Treaty（俄勒冈条约）》，以北纬 49 度划界，皆大欢喜。\n\n你看出来了吗？同一年、同一个我——\n\n对北边的英国，我用谈判。\n对南边的墨西哥，我用战争。\n\n为什么？因为英国强，跟它打不划算；墨西哥弱，打它能拿到我真正想要的加州。\n\n所以「昭昭天命」听起来像天意，其实从来跟着力量走。我对谁讲道理、对谁动拳头，量的不是对错，是对方有多硬。这一点，我自己心里，比谁都清楚。',
        en: 'I want you to see clearly another thing I did that same year, because it lights up my whole logic.\n\nIn 1846, even as I went to war with Mexico, a great land in the north hung unsettled, Oregon, then held jointly by America and Britain. The loudest expansionist slogan of the day was "54-40 or fight" (take it up to 54 degrees 40 minutes, or go to war), sounding ready to fight Britain to the end, and I was happy to ride that energy.\n\nBut at the actual negotiating table, I did not fight Britain. I signed the Oregon Treaty with it, peaceably, drawing the line at the 49th parallel, all sides content.\n\nDo you see it? The same year, the same me, for the Britain in the north, negotiation; for the Mexico in the south, war.\n\nWhy? Because Britain was strong, and fighting it was not worth the cost; Mexico was weak, and fighting it would win me the California I truly wanted.\n\nSo "Manifest Destiny" sounds like Heaven\'s will, but it always followed power. Whom I reasoned with and whom I struck was measured not by right and wrong, but by how hard the other side was. On this, I knew my own heart better than anyone.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 同一个 1846: 北边俄勒冈用谈判 (Oregon Treaty/北纬 49 度/扩张派口号 54-40 没打) vs 南边墨西哥用战争 + 原因 (英国强不划算/墨西哥弱能拿到加州) + 「天命」其实跟着力量走 (量的不是对错是对方多硬) — 照穿整套逻辑',
      engagementHook: '同一年，对强大的英国我谈判，对弱小的墨西哥我开战。决定「谈还是打」的，不是对错，是对方有多硬。「天注定的命运」会不会其实只是跟着力量走？',
      expectsRealAnswer: false,
    },
    {
      id: 'polk-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '战争打得比很多人想的顺。\n\n美军兵分几路：Taylor 在北边推进，Winfield Scott 从墨西哥湾的 Veracruz（韦拉克鲁斯）登陆，一路打进了墨西哥的首都墨西哥城。墨西哥战败。\n\n1848 年，两国签下《Treaty of Guadalupe Hidalgo（瓜达卢佩-伊达尔戈条约）》。条款很重：墨西哥割让约 52.5 万平方英里——大约是它当时领土的一半还多（约 55%）。这一大块地，就是今天的加州、内华达、犹他、亚利桑那、新墨西哥，外加科罗拉多和怀俄明的一部分。作为交换，美国付给墨西哥 1500 万美元。\n\n我想要的加州，到手了。\n\n而且像是天作之合——条约签订的同一年，1848 年，加州发现了金子。第二年，淘金客从全世界涌向加州。我拿下的这块地，转眼就成了一座金山。\n\n那一刻，我大概觉得：你看，这就是昭昭天命。连金子都好像在等着我们来。\n\n可我没看到的是：这块金山底下，住着早就在那儿的人。',
        en: 'The war went more smoothly than many expected.\n\nAmerican forces split into several columns, Taylor pressing in the north, Winfield Scott landing at Veracruz on the Gulf and fighting all the way into the Mexican capital, Mexico City. Mexico was defeated.\n\nIn 1848 the two countries signed the Treaty of Guadalupe Hidalgo. The terms were heavy, Mexico ceded about 525,000 square miles, more than half of its territory at the time (about 55 percent). That great tract is today\'s California, Nevada, Utah, Arizona, New Mexico, plus parts of Colorado and Wyoming. In exchange, America paid Mexico 15 million dollars.\n\nThe California I wanted was mine.\n\nAnd as if by perfect timing, the same year the treaty was signed, 1848, gold was found in California. The next year, gold-seekers poured in from all over the world. The land I had taken turned overnight into a mountain of gold.\n\nIn that moment I probably thought, you see, this is Manifest Destiny. Even the gold seemed to be waiting for us to arrive.\n\nBut what I did not see was this, beneath that mountain of gold lived people who had been there all along.',
      },
      deliverGoal: 'N7 story — 战争顺 (Taylor 北/Scott 从 Veracruz 攻入墨西哥城) + 1848 Guadalupe Hidalgo 条约 (割让约 52.5 万 sq mi≈55%/今 CA NV UT AZ NM + CO WY 部分/美付 1500 万) + 加州到手 + 同年 1848 发现金子→淘金客涌入金山 + 伏笔: 金山底下住着早就在那儿的人',
      engagementHook: '加州到手的同一年，加州发现了金子——我大概觉得「连金子都在等我们」，这就是天命。但这块金山底下，住着早就在那儿的人。你觉得我「看见」他们了吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'polk-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得告诉你一件我活着时不肯多想、却一手埋下的祸根。\n\n我扩出来的每一块新地——德州、加州、新墨西哥这一大片——都立刻引爆一个问题：它将来是蓄奴州，还是自由州？\n\n这不是小事。当时的美国，被一条裂缝撕着：蓄奴的南方，和自由的北方。两边在国会里势均力敌，谁也不肯让对方多一个州。每多一块新地，这道裂缝就被往两边扯一下。\n\n所以我拿地越多，南北就斗得越凶。我以为我在「壮大国家」，其实我在给一桶火药不停加料。\n\n而我自己呢？我一辈子蓄奴。我在田纳西的种植园，靠被奴役的黑人维持。我嘴上讲「自由」「天命」「为人民」，可我所说的「人民」，从来不包括他们。\n\n我 1849 年卸任，三个月后就病死了。我没能看到：我亲手扩出来的这片大地，十几年后，把这个国家烧成了一场内战——一场为「人到底算不算人」打的仗。\n\n我加的地，成了点燃它的柴。',
        en: 'I have to tell you of a root of disaster I did not want to dwell on while I lived, yet planted with my own hand.\n\nEvery new tract I expanded into, Texas, California, the great sweep of New Mexico, set off a question at once, would it be a slave state or a free state?\n\nThis was no small thing. America then was torn by a fracture, the slave South and the free North. The two were evenly matched in Congress, and neither would let the other gain a state. Each new tract pulled that fracture wider in both directions.\n\nSo the more land I took, the more fiercely North and South fought. I thought I was "making the nation greater"; in truth I kept feeding a barrel of powder.\n\nAnd what of myself? I held slaves all my life. My plantation in Tennessee ran on enslaved Black people. My mouth spoke of "freedom," "destiny," "for the people," but the "people" I meant never included them.\n\nI left office in 1849 and died of illness three months later. I did not live to see this great land I had expanded with my own hand burn the country, a dozen years on, into a civil war, a war fought over whether a person counts as a person.\n\nThe land I added became the kindling that lit it.',
      },
      deliverGoal: 'N8 story — 扩出的每块新地引爆蓄奴 vs 自由州之争 + 南北裂缝 (国会势均力敌每块地往两边扯) + Polk 自以为壮大国家其实给火药加料 + Polk 一辈子蓄奴 (田纳西种植园/「人民」不含他们) + 1849 卸任三月病死/没看到扩张柴火十几年后烧成内战 (跨 Topic: 通向内战/奴隶制之争)',
      engagementHook: '我以为我在「壮大国家」，其实在给一桶火药加料——我加的每块地，都让南北斗得更凶，最后烧成了内战。一件看起来是成就的事，怎么会同时是灾难的种子？',
      expectsRealAnswer: false,
    },
    {
      id: 'polk-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看看我留下了什么。\n\n好的一面是真的：今天美国从大西洋一直到太平洋，整个西南部——加州、得州、新墨西哥、亚利桑那——是我那几年扩出来的。住在那里的几千万人，开车经过的每一座以西班牙语命名的城市（Los Angeles、San Francisco、Sacramento），都还带着那段历史的指纹。我办成了我列的目标，这点没人否认。\n\n但代价那一面，也同样真。\n\n我夺地的那套逻辑——「这是我们注定的命运，所以正当」——后来被一代代人拿来反复检视。它把一个由人做出的选择（去拿别人的地），打扮成一件「非人力、不容质疑」的天意。今天美国人讨论自己的国家在世界上怎么行事时，还总要回头看 Manifest Destiny 这面镜子。\n\n而被这套逻辑碾过的人——失地的墨西哥人、被推到一边的西部原住民——他们的账，没写进我的成绩单。\n\n这就是我留下的东西：一个横跨大陆的国家，和一套「因为注定、所以正当」的逻辑。两样东西，到今天都还活着。',
        en: 'Pull the lens back, and look at what I left behind.\n\nThe good side is real. Today America runs from the Atlantic to the Pacific, and the whole Southwest, California, Texas, New Mexico, Arizona, was expanded in those few years of mine. The tens of millions who live there, every Spanish-named city they drive through, Los Angeles, San Francisco, Sacramento, still carry the fingerprints of that history. I met the goals I set, and no one denies that.\n\nBut the side of the cost is just as real.\n\nThe logic I used to take land, "this is our destined fate, so it is just," would be examined again and again by generation after generation. It dressed a choice made by people, going to take someone else\'s land, as something "beyond human hands, beyond question," the will of Heaven. When Americans today debate how their country acts in the world, they still turn back to look at this mirror, Manifest Destiny.\n\nAnd the people that logic crushed, the Mexicans who lost their land, the western native peoples pushed aside, their ledger was never written into my report card.\n\nThis is what I left, a nation spanning a continent, and a logic of "because it was destined, it was just." Both things are still alive today.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 好的一面 (今天西南部 CA TX NM AZ 是 Polk 扩出/西班牙语地名指纹/目标达成) + 代价一面 (「注定所以正当」逻辑被一代代检视/打扮人的选择成天意/今天讨论美国对外行为的镜子) + 被碾过的人没写进成绩单 + 留下: 一个横跨大陆的国家 + 一套逻辑两样都还活着',
      engagementHook: '我留下了一个横跨大陆的国家，也留下了一套「因为注定、所以正当」的逻辑。两样到今天都还活着。一个人的功劳和他的逻辑，能分开评吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'polk-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是兑现了国家命运的总统。我列了目标就办成，不连任、不恋权，把美国从一个东岸国家变成横跨大陆的强国。今天几千万人安居的西南部，加州的繁荣，是我那几年挣来的。一个把承诺全做到的领导者，难道不该被记住？\n\n另一种说法：我是用话术包装了一场夺地战争的人。我想要加州，买不到，就把军队摆到争议地上，等对方先动手，再用「美国的血流在美国的土地上」一句话，把侵略说成自卫。对强大的英国我谈判，对弱小的墨西哥我开战——所谓「天命」，量的从来是力量，不是对错。我夺的地，还成了烧向内战的柴。\n\n这两边不是「功劳加缺点」。是同一套行动的两面——同一份「目标全兑现」的能力，既造出了一个横跨大陆的国家，也碾过了挡在路上的人。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view, I was the president who delivered the nation\'s destiny. I set goals and met them, did not seek a second term or cling to power, and turned America from an East-coast country into a power spanning a continent. The Southwest where tens of millions now live in peace, the prosperity of California, were won in those few years of mine. A leader who keeps every promise, should he not be remembered?\n\nThe other view, I was the man who dressed a war of conquest in clever words. I wanted California; I could not buy it, so I placed my army on disputed land, waited for the other side to strike first, and then with one line, "American blood shed on American soil," called invasion self-defense. With the strong Britain I negotiated; with the weak Mexico I went to war, so the "destiny" I served measured power, never right and wrong. And the land I seized became the kindling for civil war.\n\nThese are not "credit and flaws." They are two faces of the same action, the same ability to "meet every goal" that built a nation across a continent also crushed the people in its path.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (兑现国家命运的总统/目标全做到不恋权/西南部繁荣是他挣的) / 另一种说法 (用话术包装夺地战争/摆军队等先动手/对强谈判对弱开战/夺地成内战的柴) / 同一套行动两面 / 想 30 秒',
      engagementHook: '兑现国家命运的总统，和用话术包装夺地战争的人——是同一个我。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'polk-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一段扩张？\n\n一个国家在四年里，靠一句「这是我们注定的命运」，把版图推到太平洋——里面同时装着千万移民的真实希望、加州的繁荣，和一场被设计出来的战争、一片被夺走的土地。这两件事不是两份分开的账，是同一段历史的同一页。把它们放在同一个天平上，你怎么称？\n\n再想一步。今天你身边，有没有人用「反正注定会这样」「这是必然，没办法」这种话，来给一个其实是自己做出的选择开脱——让那个选择听起来不用被质疑，只需要被接受？也许是一条班规，也许是大人替你做的一个决定，也许是更大的事。\n\n那时候，你会跟着接受这句「反正注定」，还是会像林肯当年那样，追问一句：等等——这真是注定的，还是有人选了这么做，再说成是注定的？',
        en: 'Having walked my whole life, how would you judge an expansion like this?\n\nA nation, in four years, on the strength of one line, "this is our destined fate," pushed its map to the Pacific, holding inside it at once the real hopes of millions of settlers, the prosperity of California, and a war that was designed and a land that was seized. These are not two separate ledgers, they are the same page of the same history. Put them on the same scale. How do you weigh them?\n\nThen take one more step. In your own life today, does someone use lines like "it was bound to happen anyway," "it is inevitable, nothing to be done," to excuse a choice that was in fact their own, to make that choice sound as if it need not be questioned, only accepted? Maybe a class rule, maybe a decision an adult made for you, maybe something larger.\n\nWhen that happens, will you go along with that "it was bound to happen," or will you do what Lincoln did and press one question, wait, was this truly destined, or did someone choose to do it, and then call it destiny?',
      },
      deliverGoal: 'N11 close — 评价这段扩张 (千万移民希望+加州繁荣 vs 被设计的战争+被夺的土地同一天平) + transfer「今天你身边用「反正注定/没办法」给自己的选择开脱」+ 你会跟着接受还是像林肯追问「真是注定还是有人选了再说成注定」',
      engagementHook: '一边是千万移民的真实希望，一边是一场被设计出来的战争，装在同一段「天命」里。你会怎么评价它？今天你身边那句「反正注定、没办法」，你会接受，还是会追问一句「真是注定的吗」？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Henry David Thoreau (lonely-mediator / dissenter)
// ═══════════════════════════════════════════════════════════════════════

export var thoreauLens = {
  id: 'thoreau',
  name: 'Henry David Thoreau',
  nameCn: '亨利·戴维·梭罗',
  role: 'lonely-mediator',
  perspectiveTag: 'tax-refusing-dissenter',
  icon: '⚖️',
  description: {
    cn: '马萨诸塞 Concord 人,1817 年生,作家兼博物学者,曾在 Walden Pond(瓦尔登湖)边自己盖的小木屋独居。他不是政客、不带兵,手里没权。1846 年他拒缴一笔会流向他认为不义的战争、保护奴隶制的政府人头税,在牢里关了一夜。这一夜生出影响世界的《Civil Disobedience(公民不服从)》。这一遍让你从一个夹在中间的人这边,看普通公民面对自己反对却无力阻止的事还能做什么。',
    en: 'A man of Concord, Massachusetts, born 1817, a writer and naturalist who once lived alone in a small cabin he built himself by Walden Pond. He was no politician, no general, held not a shred of power. In 1846 he refused to pay a poll tax that would flow to a government waging a war he believed unjust and protecting slavery, and spent a night in jail for it. That night gave rise to an essay that shaped the world, Civil Disobedience. This pass puts you in the place of a man caught in the middle, watching what an ordinary citizen can still do in the face of something he opposes but is powerless to stop.',
  },
  storyboard: [
    {
      id: 'thoreau-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我叫 Henry David Thoreau（亨利·戴维·梭罗）。\n\n我不是总统，不是带兵打仗的人，不是议员。我没有军队，没有选票能左右国会，没有任何力量去阻止一场战争。\n\n我是马萨诸塞 Concord 镇的一个写字的人，平时在树林里散步、记录鸟和植物，有两年还住在瓦尔登湖边一间我自己盖的小木屋里。\n\n1846 年，我做了一件很小的事：我拒绝交一笔几块钱的税。就为这，我在镇上的监狱里关了一夜。\n\n第二天我就被放出来了。我没有改变任何一场战争，没有救下任何一个人。\n\n可就是这一夜，让我想清楚了一件事，后来我把它写成一篇文章，传到了印度的甘地、传到了美国的马丁·路德·金手里。\n\n这一遍，你站在一个最没有权力的人这边。你要回答的问题是：当你反对一件事，却根本拦不住它的时候——你还能做什么？',
        en: 'My name is Henry David Thoreau.\n\nI am no president, no general, no congressman. I have no army, no vote that can sway Congress, no power at all to stop a war.\n\nI am a man who writes, in the town of Concord, Massachusetts, who walks in the woods recording birds and plants, and who for two years lived in a small cabin I built myself by Walden Pond.\n\nIn 1846 I did a very small thing, I refused to pay a tax of a few dollars. For that alone, I spent a night in the town jail.\n\nThe next day I was let out. I changed no war, saved no one.\n\nYet it was that one night that made one thing clear to me, which I later wrote into an essay that reached the hands of Gandhi in India and of Martin Luther King in America.\n\nThis pass, you stand with the man who holds the least power. The question you must answer is this, when you oppose something but cannot stop it at all, what can you still do?',
      },
      deliverGoal: 'N1 hook — Thoreau 自我介绍 (不是总统/不是带兵的人/不是议员/无权阻止战争/Concord 写字的人/瓦尔登湖小木屋) + 1846 拒交几块钱税坐一夜牢 + 没改变任何战争 + 这一夜生出文章传到甘地和马丁·路德·金 + 这一遍视角 (反对却拦不住时还能做什么)',
      engagementHook: '我没有军队、没有选票、没有任何力量阻止战争。可我拒交了一笔税，坐了一夜牢。当你反对一件事却根本拦不住它——你还能做什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'thoreau-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说说我反对的，到底是什么。\n\n1846 年，美国对墨西哥开战了。总统 Polk 说，墨西哥在「美国的土地」上流了美国人的血，我们是自卫。\n\n但在我和我身边不少人看来，这场仗根本不是自卫。是美国想要墨西哥的地——尤其是加州——故意把军队摆到争议地带，挑起的一场夺地战争。\n\n更让我无法忍受的是它背后的东西：这场仗打下来的新地，很多人想把它变成新的蓄奴州。也就是说，这是一场既在抢别人土地、又在给奴隶制开疆拓土的战争。\n\n我住在马萨诸塞，一个自由州。战争离我很远，我家不会有人去前线，我的日子照样过。我完全可以装作没看见。\n\n可问题就在这儿：我享受着这个国家给我的一切——它的安全、它的道路、它越来越大的土地——我凭什么一边享受，一边对它做的不义之事闭嘴？\n\n这个问题，我没法绕过去。',
        en: 'First, let me tell you what it was I opposed.\n\nIn 1846 America went to war with Mexico. President Polk said Mexico had shed American blood on "American soil," and we were defending ourselves.\n\nBut to me, and to many around me, this war was no self-defense at all. America wanted Mexico\'s land, California above all, and deliberately placed its army on the disputed strip to provoke a war of conquest.\n\nWhat I could bear even less was what lay behind it, the new land won by this war, many wanted to turn into new slave states. That is to say, this was a war that both seized another\'s land and opened new ground for slavery.\n\nI lived in Massachusetts, a free state. The war was far from me; no one in my house would go to the front; my days went on as before. I could easily have pretended not to see.\n\nBut that was exactly the problem. I enjoyed everything this country gave me, its safety, its roads, its ever-growing land, by what right did I enjoy it and at the same time hold my tongue about the unjust things it did?\n\nThis question I could not get around.',
      },
      deliverGoal: 'N2 setup — Thoreau 反对的: 1846 美墨战争 (Polk 称自卫但 Thoreau 等认为是故意挑起的夺地战) + 更无法忍受的: 新地很多人想变蓄奴州 (既抢地又给奴隶制拓土) + 他在自由州战争离他远可装没看见 + 但「我享受国家的一切凭什么对它的不义闭嘴」绕不过去',
      engagementHook: '战争离我很远，我完全可以装没看见。但我享受着这个国家的一切——凭什么一边享受，一边对它做的不义之事闭嘴？这个问题，你绕得过去吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'thoreau-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '想清楚我没法闭嘴之后，下一个问题是：那我能做什么？\n\n我没法投票否决这场战争——一个人一张票，淹没在多数里。我没法上街拉住军队。我写文章骂，骂完了战争照打。\n\n我能影响的，其实只有一样东西：我自己。我手里唯一真正的权力，是「我配不配合」。\n\n我想通了一件事：政府打这场仗，要花钱；钱，部分来自像我这样的普通人交的税。我交的那几块钱，会汇进一条河，流向前线，流向我反对的事。\n\n那我就不交。\n\n这听起来很小——几块钱，对战争连一根毫毛都伤不到。但对我来说，意义不在于「拦住战争」，而在于：我不再当那个一边反对、一边出钱的人。我不让自己的手，沾在这件事上。\n\n我后来给这个想法起了个名字：与其问「我怎么阻止它」，不如先问「我怎么不再帮它」。',
        en: 'Having seen that I could not stay silent, the next question was this, then what could I do?\n\nI could not vote the war down, one man, one vote, drowned in the majority. I could not take to the street and hold back the army. I could write and rail, and when the railing was done the war went on.\n\nThe only thing I could truly affect was myself. The one real power in my hands was whether I cooperated.\n\nI worked out one thing, the government waged this war, and that took money; money came, in part, from the taxes of ordinary people like me. The few dollars I paid would pour into a river that flowed to the front, flowed to the thing I opposed.\n\nThen I would not pay.\n\nIt sounds tiny, a few dollars, not harming the war by a single hair. But for me the meaning was not in "stopping the war," it was this, I would no longer be the man who opposed a thing and funded it at once. I would not let my own hand rest on this matter.\n\nLater I gave the idea a name, rather than asking "how do I stop it," ask first "how do I stop helping it."',
      },
      deliverGoal: 'N3 setup — 能做什么 (没法投票否决/没法拉住军队/写文章战争照打) + 唯一真正的权力是「我配不配合」 + 想通: 政府打仗要钱/我的税会流向前线 → 那就不交 + 意义不在拦住战争而在不再当一边反对一边出钱的人 + 「与其问怎么阻止不如先问怎么不再帮它」',
      engagementHook: '我拦不住战争，但我手里唯一真正的权力，是「我配不配合」。与其问「我怎么阻止它」，不如先问「我怎么不再帮它」。这个区别，你觉得重要吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'thoreau-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1846 年的一天，镇上管税的人来找你，要你交那笔人头税（poll tax）。\n\n你站在那儿，心里很清楚每一种选择的后果。\n\n交了，你什么事都没有。你照常散步、写作、过你的日子，没人会怪你——大家都交。可你会变成你最看不起的那种人：嘴上反对，行动上配合。\n\n不交，你知道接下来会怎样：你会被抓，会进监狱。你不知道会关多久。你也很清楚，就算你不交，战争一天都不会停——你这点钱，对它毫无影响。\n\n所以你面对的，是一个很难的算术：一边是「坐牢」这个实实在在、马上要承受的代价；另一边是「不让自己的手沾上这件事」这个看不见、摸不着、对外部世界几乎零影响的东西。\n\n为一个改变不了任何结果的原则，去坐牢——值吗？\n\n你怎么选？',
        en: 'Now you are me.\n\nOne day in 1846 the town tax man comes to you and asks you to pay the poll tax.\n\nYou stand there, knowing clearly the cost of every choice.\n\nPay, and nothing happens to you. You walk, you write, you live your days, no one blames you, everyone pays. But you become the kind of man you most despise, opposing in word, cooperating in deed.\n\nRefuse, and you know what comes next, you will be seized, you will go to jail. You do not know for how long. And you know full well that even if you refuse, the war will not stop for a single day, your few dollars mean nothing to it.\n\nSo what you face is a hard arithmetic, on one side, "jail," a real cost to be borne at once; on the other, "not letting your own hand touch this thing," something invisible, intangible, with all but zero effect on the outside world.\n\nTo go to jail for a principle that changes no outcome at all, is it worth it?\n\nWhich do you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1846 收税人来要 poll tax + 每种选择的后果 (交了没事但变成嘴上反对行动配合的人 / 不交会被抓坐牢且战争一天不停) + 难算术 (实在的坐牢代价 vs 看不见的不让手沾上对外几乎零影响) + 为改变不了结果的原则坐牢值吗',
      engagementHook: '交税，你什么事没有，但变成你最看不起的人；不交，你坐牢，可战争一天都不会停。为一个改变不了任何结果的原则去坐牢——值吗？你怎么选？',
      expectsRealAnswer: false,
    },
    {
      id: 'thoreau-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选了不交。\n\n于是 1846 年，我被关进了 Concord 镇的监狱。\n\n说实话，那一夜没有想象中那么悲壮。牢房很小，我有个室友，外面是熟悉的小镇。我躺在那儿，反而异常清醒——这是我这辈子第一次，从「监狱里面」看我生活的这个镇子。\n\n我忽然看明白一件事：墙外那些「自由」的人，其实正乖乖替一个做着不义之事的政府纳税、出力、配合；而我，这个被关进来的人，反倒是这场不义里，唯一一个干净的人。\n\n所以那天晚上我心里那句话是：在一个会冤狱关人的政府底下，一个正直的人真正该待的地方，恰恰就是监狱。\n\n第二天，事情有点扫兴——有人（多半是我的一位亲戚）替我把税交了。我不情愿地被放了出来。\n\n我没能在牢里多待。但那一夜已经够了。它让我看清了那个我一直说不清的东西：守法，和正义，不是一回事。',
        en: 'I chose not to pay.\n\nAnd so in 1846 I was locked in the Concord town jail.\n\nIn truth that night was less heroic than one might imagine. The cell was small, I had a cellmate, and outside lay the familiar town. Lying there, I was unusually clear-headed instead, this was the first time in my life I looked at the town I lived in from inside a jail.\n\nAll at once I saw one thing, the "free" people outside the walls were in fact dutifully paying taxes to, laboring for, cooperating with a government doing unjust things; while I, the man locked in here, was the one clean person in all this injustice.\n\nSo the line in my heart that night was this, under a government that imprisons people unjustly, the true place for an honest man is precisely the prison.\n\nThe next day, things were a little anticlimactic, someone, most likely a relative of mine, paid the tax for me. I was let out, unwilling.\n\nI could not stay longer in jail. But that one night was enough. It made clear to me the thing I had never been able to put into words, obeying the law and justice are not the same thing.',
      },
      deliverGoal: 'N5 story — Thoreau 不交被关 Concord 监狱 + 那夜不悲壮 (牢房小有室友/异常清醒/第一次从监狱里面看镇子) + 看明白 (墙外自由人乖乖替不义政府纳税配合/被关的他反倒是干净的一个) + 「会冤狱的政府下正直的人该待的地方就是监狱」+ 次日有人(亲戚)替他交税被放 + 那夜够了「守法和正义不是一回事」',
      engagementHook: '在牢里那夜我看清了：墙外那些「自由」的人，正乖乖替一个做不义之事的政府出钱出力；而被关进来的我，反倒是干净的那一个。「守法」和「正义」，真的是一回事吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'thoreau-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '这件事我要诚实地拆给你看，因为它正是这一遍最难、也最值钱的地方。\n\n我反对这场战争——可这场战争夺来的土地，包括加州，最后成了我所在的这个国家的一部分。换句话说：我享受着这场我反对的征服带来的好处。我没有把我的地还给墨西哥，没有搬走。我一边谴责，一边住在战利品上。\n\n这就是我「夹在中间」的真相：我既不是发动战争的 Polk，也不是失地的墨西哥人。我是那个明明受益、却良心不安、于是用「不交税」给自己留一点干净的人。\n\n有人会说：你这算什么？坐一夜牢，连税最后还是被人替你交了，战争一寸都没少打。你不过是做了个姿态，让自己心里好过点。\n\n这话戳得很准。我承认，我那一夜，对外部世界的改变，几乎是零。\n\n可我想问你一个问题：当一个人明知自己改变不了大局，他「为自己的良心做点什么」——哪怕只是不让自己同流——这件事本身，到底有没有价值？\n\n这正是我留给后人、也留给你的那道题。',
        en: 'I must lay this out honestly for you, because it is the hardest and most valuable part of this pass.\n\nI opposed this war, yet the land it seized, California among it, became in the end part of this country I live in. In other words, I enjoyed the fruits of a conquest I opposed. I did not give my land back to Mexico, did not move away. I condemned it and lived on the spoils at once.\n\nThis is the truth of my being "caught in the middle," I am neither Polk who launched the war, nor the Mexican who lost the land. I am the man who plainly benefits, yet whose conscience is uneasy, and who therefore keeps a little patch of clean for himself by "not paying the tax."\n\nSome will say, what is this worth? A night in jail, the tax paid for you in the end, not an inch less war was fought. You only struck a pose to make yourself feel better.\n\nThat cuts true. I admit it, the change my one night made to the outside world was all but zero.\n\nBut let me ask you one question, when a person knows he cannot change the larger course, his "doing something for his own conscience," even if only refusing to go along, does that thing in itself have any worth?\n\nThis is exactly the question I left for those after me, and leave for you.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — anti-fab 诚实拆解「夹在中间」真相 (反对战争却享受战利品/加州成了他国家一部分/没还地没搬走/谴责同时住在战利品上) + 既不是 Polk 也不是失地墨西哥人是受益却良心不安的人 + 反方质疑 (姿态/让自己好过/战争一寸没少) + 承认对外改变几乎零 + 留给你的题: 改变不了大局时为自己良心做点什么有没有价值',
      engagementHook: '我反对这场战争，却住在它夺来的土地上、享受它的好处——我承认，我那一夜对世界的改变几乎是零。那么，当一个人改变不了大局，他「为自己的良心做点什么」，到底有没有价值？',
      expectsRealAnswer: false,
    },
    {
      id: 'thoreau-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '那一夜之后过了几年，1849 年，我把想清楚的东西写成了一篇文章，后来人叫它《Civil Disobedience（公民不服从）》。\n\n它的核心，就一句话能说清：当法律要你去做、或去帮着做一件不义的事，一个正直的人有权、甚至有责任不服从——哪怕代价是坐牢。\n\n你注意，我说的不是「造反」，不是拿起枪推翻政府。我说的是「不服从」：我不打你，但我也不替你做那件错事。我安静地、公开地拒绝合作，然后心甘情愿地承担后果（坐牢）。这是一种「非暴力」的反抗。\n\n我写它的时候，绝对想不到它能走多远。\n\n七十多年后，印度的 Gandhi（甘地）读到它，用「非暴力不合作」对抗大英帝国。又过了几十年，美国的 Martin Luther King Jr.（马丁·路德·金）读到它，用同样的思路领导民权运动。\n\n我一个人、一夜牢、几块钱税——什么大局都没改变。可我想清楚并写下来的那个道理，后来撬动了两个国家。',
        en: 'A few years after that night, in 1849, I wrote what I had worked out into an essay, later called Civil Disobedience.\n\nIts heart can be said in one line, when the law asks you to do, or to help do, an unjust thing, an honest person has the right, even the duty, to disobey, even if the cost is jail.\n\nNote, I do not mean "rebellion," not taking up the gun to overthrow the government. I mean "disobedience," I will not strike you, but neither will I do that wrong thing for you. I refuse to cooperate, quietly and openly, and then willingly bear the cost, jail. It is a kind of nonviolent resistance.\n\nWhen I wrote it, I could never have guessed how far it would travel.\n\nMore than seventy years later, Gandhi in India read it and used "nonviolent noncooperation" against the British Empire. Decades after that, Martin Luther King Jr. in America read it and led the civil rights movement on the same line of thought.\n\nOne man, one night in jail, a few dollars of tax, I changed no larger course at all. Yet the truth I worked out and wrote down later moved two nations.',
      },
      deliverGoal: 'N7 story — 1849《Civil Disobedience》 + 核心一句 (法律要你帮做不义之事正直的人有权甚至有责任不服从哪怕坐牢) + 区分: 不是造反拿枪推翻是不服从 (不打你也不替你做错事/公开拒绝合作甘愿承担后果/非暴力反抗) + 写时想不到走多远 + 70 多年后 Gandhi 读到对抗大英 + 几十年后 MLK 读到领导民权 + 一个人没改变大局但道理撬动两个国家',
      engagementHook: '我说的不是「造反」——是「不服从」：我不打你，但我也不替你做错事，然后甘愿坐牢。这个道理后来传给了甘地、马丁·路德·金，撬动了两个国家。一个改变不了当下的想法，为什么能走这么远？',
      expectsRealAnswer: false,
    },
    {
      id: 'thoreau-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得把话说全，免得你把我想得太完美。\n\n说实话，我那一夜的反抗，在当时几乎没人在意。镇上大多数人觉得我古怪、偏执——「为了几块钱税坐牢，至于吗？」战争照打，加州照样割了过来，没有任何人因为我而改变立场。\n\n而且，反对这场战争的，远不止我一个，也不是只有「不交税」这一条路。辉格党的议员在国会里投反对票、发表演说；年轻的 Lincoln（林肯）用「Spot Resolutions」追问战争的起因是不是被编造的。他们用的是体制内的、正规的方式——比我这种「坐牢明志」更可能真正影响政策。\n\n我说这些，是想让你看清：「不服从」不是唯一正确的路，也不总是最有效的路。有时候，老老实实去投票、去辩论、去走正规程序，影响更大。\n\n我这条路的特别之处，不在于它最有效，而在于：当所有正规渠道你都用不上、或都失灵的时候，它是你最后还握在自己手里的那一点东西——你至少可以决定，不亲手去帮那件错事。',
        en: 'I must say it in full, lest you think me too perfect.\n\nIn truth, my resistance that night drew almost no notice at the time. Most in town thought me odd, stubborn, "jail over a few dollars of tax, really?" The war went on, California was ceded all the same, and no one changed their stand because of me.\n\nAnd I was far from the only one opposing this war, nor was "not paying tax" the only road. Whig congressmen voted against it and gave speeches; the young Lincoln pressed, with his Spot Resolutions, whether the war\'s cause had been invented. They used means inside the system, the regular kind, more likely than my "jail to make a point" to truly sway policy.\n\nI tell you this so you see clearly, "disobedience" is not the one right road, nor always the most effective. Sometimes honestly going to vote, to debate, to work the proper channels, has greater effect.\n\nWhat is particular about my road is not that it is most effective, but this, when every regular channel is closed to you, or has failed, it is the last thing you still hold in your own hands, you can at least decide not to help that wrong thing with your own hand.',
      },
      deliverGoal: 'N8 story — 诚实补全 (那夜当时几乎没人在意/镇上觉得他古怪/战争照打加州照割没人因他改变) + 反对战争不止他一条路: 辉格党国会投反对票演说 + Lincoln Spot Resolutions 走体制内正规方式 (比坐牢明志更可能影响政策) + 「不服从不是唯一正确也不总最有效/有时投票辩论走正规渠道影响更大」+ 他这条路特别在: 正规渠道失灵时最后握在自己手里的——不亲手帮错事',
      engagementHook: '我得诚实说：反对战争不止「坐牢」这一条路——林肯在国会追问、辉格党投反对票，那些正规渠道其实更可能影响政策。「不服从」不是唯一正确的路，你觉得它什么时候才该用？',
      expectsRealAnswer: false,
    },
    {
      id: 'thoreau-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '把镜头拉远，看我这条路在今天还活着吗。\n\n它活得很好。\n\n我那篇《公民不服从》成了世界上被读得最多的政治文章之一。「当法律不义时，正直的人可以公开违抗、并承担后果」——这个想法，今天几乎所有讨论「该不该服从一条恶法」的人，都绕不开。\n\n甘地用它，让印度摆脱了大英帝国；马丁·路德·金用它，推动了美国黑人争取平等权利。他们都不是拿枪打赢的，是用「我不合作，但我承担后果」这套办法。\n\n但它也有一条永远甩不掉的尾巴，你必须一起记住：「公民不服从」很容易被滥用。每个违法的人，都可以说自己是「良心反抗」。那么，谁来分辨：哪些是真的为了正义、甘愿坐牢，哪些只是给自己破坏规则找的借口？\n\n我没有标准答案。但我自己定了一条线：真正的公民不服从，是公开的、非暴力的，而且——你必须心甘情愿地承担违法的后果。如果你想违法、又想逃避代价，那不是良心，那只是想占便宜。',
        en: 'Pull the lens back, and see whether my road still lives today.\n\nIt lives very well.\n\nMy essay Civil Disobedience became one of the most read political writings in the world. "When the law is unjust, an honest person may openly defy it and bear the cost," this idea, nearly everyone today who debates "should one obey a wicked law" cannot get around.\n\nGandhi used it to free India from the British Empire; Martin Luther King used it to push America\'s Black people toward equal rights. Neither won with the gun, but with this method, "I will not cooperate, but I will bear the cost."\n\nYet it carries a tail it can never shake, which you must remember along with it, "civil disobedience" is easily abused. Every lawbreaker can call himself a "conscientious resister." Then who is to tell apart which are truly for justice, willing to go to jail, and which are only an excuse for breaking the rules?\n\nI have no standard answer. But I drew one line for myself, true civil disobedience is open, nonviolent, and, you must willingly bear the cost of breaking the law. If you want to break the law and escape the price, that is not conscience, that is only wanting an advantage.',
      },
      deliverGoal: 'N9 zoom-out + topic connection —《公民不服从》成世界被读最多政治文章之一 + 想法影响今天所有「该不该服从恶法」的讨论 + Gandhi 解放印度/MLK 推民权 (都非暴力「我不合作但承担后果」) + 但甩不掉的尾巴: 容易被滥用 (每个违法者都可自称良心反抗) + Thoreau 自己的线: 真正的公民不服从是公开非暴力+甘愿承担后果/想违法又逃避代价不是良心是占便宜',
      engagementHook: '「公民不服从」撬动了印度和美国民权——但它有条甩不掉的尾巴：每个违法的人都能自称「良心反抗」。怎么分辨真良心和找借口？我的线是：你必须甘愿承担违法的代价。你同意吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'thoreau-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我做了一件几乎没用的姿态。我坐了一夜牢，税还是被人替我交了，战争一寸没少打，加州照样割了过来。我住在这场我反对的征服夺来的土地上，一边享受好处一边谴责。说到底，我不过是给自己的良心找了点安慰，对真实世界毫无改变。要真想反对战争，该像林肯那样去国会、去走正规程序。\n\n另一种说法：我做了当时唯一还握在我手里的、干净的事。我无权阻止战争，但我至少可以不亲手去帮它。这个看似无用的小动作，被我想清楚、写下来，成了《公民不服从》——七十年后撬动了甘地，又撬动了马丁·路德·金。一个改变不了当下的原则，改变了未来。\n\n这两边不是「软弱加高尚」。是同一个行为的两面——同一个「明知无用却仍要不合作」的选择，既可以说是无力的姿态，也可以说是良心最后的、也最有力的据点。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view, I struck a gesture that was all but useless. I spent one night in jail, the tax was paid for me anyway, not an inch less war was fought, California was ceded all the same. I live on the land that conquest I opposed seized, enjoying the fruits while I condemn. In the end I only found my conscience some comfort, and changed the real world not at all. To truly oppose the war, one should have gone to Congress like Lincoln and worked the proper channels.\n\nThe other view, I did the one clean thing still in my hands at the time. I had no power to stop the war, but I could at least refuse to help it with my own hand. That seemingly useless small act, once I worked it out and wrote it down, became Civil Disobedience, which seventy years on moved Gandhi, and then moved Martin Luther King. A principle that could not change the present changed the future.\n\nThese are not "weakness and nobility." They are two faces of the same act, the same choice to "refuse to cooperate though I know it useless" can be called a powerless gesture, or conscience\'s last and most powerful foothold.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (几乎没用的姿态/税被替交战争没少打/住在战利品上/只是给良心找安慰/该像林肯走正规程序) / 另一种说法 (唯一还握在手里的干净的事/不亲手帮它/写成《公民不服从》撬动甘地 MLK/改变不了当下却改变了未来) / 同一行为两面 / 想 30 秒',
      engagementHook: '一个无力的姿态，和良心最后最有力的据点——是同一夜牢的两面。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'thoreau-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生，你会怎么评价这样一个人？\n\n一个最没有权力的普通人，面对一件他反对、却根本拦不住的不义之事，选择不亲手去帮它——为此坐了一夜没用的牢，却写出了一篇撬动后世的文章。「无力」和「有力」，在他身上是同一件事。你怎么评？\n\n再想一步。今天你身边，有没有这样的处境：一件你觉得不对的事正在发生——班里在孤立某个同学、群里在传一件你知道不实的东西、一条你认为不公平的规矩——你拦不住，多数人都在跟着做、或者默默配合。\n\n那时候，你会怎么做？你会因为「反正我一个人改变不了什么」而跟着做、或者沉默吗？还是会像我一样，先守住最低的那条线——就算改变不了大局，我至少，不亲手去帮那件我认为错的事？',
        en: 'Having walked my whole life, how would you judge a man like this?\n\nAn ordinary man with the least power, facing an unjust thing he opposed but could not stop at all, chose not to help it with his own hand, and for that spent one useless night in jail, yet wrote an essay that moved the generations after. "Powerless" and "powerful," in him, are one and the same thing. How do you judge it?\n\nThen take one more step. In your own life today, is there a spot like this, something you feel is wrong is happening, the class is freezing out a certain classmate, a group chat is spreading a thing you know is untrue, a rule you think unfair, and you cannot stop it, and the majority are going along, or quietly cooperating.\n\nWhen that happens, what will you do? Will you go along, or stay silent, because "one person cannot change anything anyway"? Or will you do as I did, hold first to the lowest line, even if I cannot change the larger course, I will at least not help, with my own hand, the thing I believe is wrong?',
      },
      deliverGoal: 'N11 close — 评价这样一个人 (最没权力的人不亲手帮不义之事/坐一夜没用的牢却写出撬动后世的文章/无力和有力是同一件事) + transfer「今天你身边一件你觉得不对却拦不住的事 (孤立同学/群里传不实/不公平的规矩) 多数人跟着做」+ 你会因为一个人改变不了而跟着/沉默, 还是守住最低线不亲手帮错事',
      engagementHook: '走完我这一生，你会怎么评价我？再想一步：今天你身边那件你觉得不对、却拦不住、大家都在跟着做的事，你会因为「反正改变不了」而跟着做吗，还是守住最低那条线——至少不亲手去帮它？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: Mariano Guadalupe Vallejo (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var vallejoLens = {
  id: 'vallejo-receiving-end',
  name: 'Mariano Guadalupe Vallejo',
  nameCn: '马里亚诺·瓜达卢佩·巴列霍',
  role: 'receiving-end',
  perspectiveTag: 'dispossessed-californio',
  icon: '🌵',
  description: {
    cn: '他 1807 年生在西班牙治下的加州，是 Californio，西班牙裔老家族。他一度是北加州最有权势的人，在 Sonoma 掌管约 17.5 万英亩牧场。耐人寻味的是他并不反美，相信加州归入美国会更稳定繁荣。可 1848 年加州割让后，他在淘金客的强占和十几年诉讼里，把那 17.5 万英亩一块块丢掉。这一遍你从一个「欢迎了新主人、却被新主人的规则掏空」的人这边，看 1840 年代的西进扩张。',
    en: 'Born 1807 in Spanish-ruled California, a Californio of an old Spanish family. He was once the most powerful man in northern California, with about 175,000 acres of ranch land around Sonoma. Tellingly, he was no foe of America; he believed California joining the United States would bring stability and prosperity. Yet after the 1848 cession, he lost those 175,000 acres tract by tract, to squatting gold-seekers and more than a decade of American court cases. This pass lets you see the 1840s westward expansion from the side of a man who welcomed the new master and was hollowed out by his rules.',
  },
  storyboard: [
    {
      id: 'vallejo-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我叫 Mariano Guadalupe Vallejo（马里亚诺·瓜达卢佩·巴列霍）。\n\n我 1807 年生在加州——不过那时候，这里不叫加州，叫 Alta California，是西班牙的地，后来是墨西哥的地。我家是 Californio，世世代代生在这片土地上。\n\n我年轻的时候，是北加州最有权势的人之一。在 Sonoma 一带，我管着大约 17.5 万英亩的牧场——你很难想象那有多大，骑马从这头到那头要走一整天。我有成群的牛、马，有酒窖，有宴席，有上百号人帮我做事。\n\n现在，我老了。我手里的地，只剩下几百英亩。\n\n我没有打过败仗。我没有赌博输光家产。恰恰相反——我当年是欢迎美国来的。\n\n这一遍，你站在我这边。你要弄明白一件事：一个欢迎了新主人的人，怎么会被新主人，合法地、一块一块地，掏空。',
        en: 'My name is Mariano Guadalupe Vallejo.\n\nI was born in 1807 in California, though back then this place was not called California. It was called Alta California, Spanish land, and later Mexican land. My family were Californios, born on this soil generation after generation.\n\nIn my youth I was among the most powerful men in northern California. Around Sonoma I held some 175,000 acres of ranch land, hard to imagine how vast, a full day on horseback from one end to the other. I had herds of cattle and horses, a wine cellar, feasts, more than a hundred people working for me.\n\nNow I am old. The land in my hands is only a few hundred acres.\n\nI lost no battle. I did not gamble my estate away. Quite the opposite, in those years I welcomed the Americans.\n\nThis pass, you stand with me. You must come to understand one thing, how a man who welcomed the new master came to be hollowed out by that master, lawfully, tract by tract.',
      },
      deliverGoal: 'N1 hook — Vallejo 自我介绍 (1807 生在 Alta California/Californio 世代/北加最有权势之一/Sonoma 约 17.5 万英亩牧场牛马酒窖宴席上百人) + 如今老了只剩几百英亩 + 没打败仗没赌输/恰恰相反当年欢迎美国 + 这一遍视角 (欢迎了新主人的人怎么被新主人合法地一块块掏空)',
      engagementHook: '我没打败仗，没赌输家产——恰恰相反，当年是我欢迎美国来的。可我那 17.5 万英亩的地，最后只剩几百英亩。一个欢迎了新主人的人，怎么会被新主人合法地掏空？',
      expectsRealAnswer: false,
    },
    {
      id: 'vallejo-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说说割让之前，我们的加州是什么样，你才懂后来失去的是什么。\n\n1840 年代的 Alta California，是墨西哥最北、也最偏远的一块地。墨西哥城远在几千公里之外，中央政府对这里几乎管不上，也护不住。在这片地上真正运转的，是我们这些 Californio 家族和我们的牧场（rancho）。\n\n牧场是这里的命脉。我们养牛，卖牛皮和牛油给来往的商船——加州那时候被叫做「牛皮和油脂的海岸」。地很多，人不多，日子是另一种节奏。\n\n你要记住一件事，它后来变得至关重要：我们的土地权，靠的是西班牙和墨西哥时代发下来的地契（land grant）。这些地契，很多是宽泛的、按自然地标划的，不像美国那种一尺一寸量得清清楚楚的法律文件。\n\n在墨西哥的规矩里，这没问题，大家都认。\n\n但你想想：当一套新的、陌生的法律开进来，专门盯着「你能不能用我的标准证明这块地是你的」——我们这种「老规矩」的地契，会变成什么？',
        en: 'First, let me tell you what our California was like before the cession, so you understand what was later lost.\n\nThe Alta California of the 1840s was Mexico\'s northernmost and most remote land. Mexico City lay thousands of miles away, and the central government could barely govern here, nor protect it. What truly ran on this land were we Californio families and our ranchos.\n\nThe ranch was the lifeblood here. We raised cattle and sold hides and tallow to the passing trade ships, California was called the coast of hides and tallow then. Much land, few people, a different rhythm of life.\n\nRemember one thing, it would later become crucial, our right to the land rested on grants issued in the Spanish and Mexican times. Many of these grants were broad, drawn by natural landmarks, not the kind of legal document Americans measure to the last inch.\n\nUnder Mexican rules this was no problem; everyone honored it.\n\nBut consider, when a new and unfamiliar law marches in, fixed on "can you prove by my standard that this land is yours," what becomes of our "old-rule" grants?',
      },
      deliverGoal: 'N2 setup — 割让前 Alta California (墨西哥最北最偏远/墨西哥城几千公里外管不上护不住/真正运转的是 Californio 家族和 rancho) + 牧场是命脉 (养牛卖牛皮牛油/「牛皮和油脂的海岸」/地多人少) + 关键伏笔: 土地权靠西班牙墨西哥地契 (宽泛按自然地标划/不像美国一尺一寸量) 墨西哥规矩里没问题 + 当陌生法律盯着「能不能用我的标准证明」老规矩地契会变成什么',
      engagementHook: '我们的地契，是西班牙、墨西哥时代发的，按山按河宽宽地划，大家都认。可一套陌生的新法律开进来，专盯「你能不能用我的标准证明这块地是你的」——你猜，我们的老地契会变成什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'vallejo-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '现在说一件可能会让你意外的事：当美国伸手要加州时，我并不反对。\n\n我看得很清楚：墨西哥中央政府对加州又远又弱，给不了我们安全，也给不了我们繁荣。我去过外面，读过书，我相信加州如果归入一个强大、稳定的国家，对我们这些有产业的人反而是好事——贸易会更旺，秩序会更稳。\n\n所以当时不少 Californio 都跟我一样，对美国接管，是观望甚至欢迎的，不是抵抗的。\n\n可现实第一次给我上课，是用一种很难堪的方式。\n\n1846 年，一群美国移民，听说美墨要开战，抢先在 Sonoma 闹了一场，史称 Bear Flag Revolt（熊旗起义）。他们冲进城，第一个抓的人，是谁？\n\n是我——这个最欢迎美国的 Californio。他们把我关了起来，关了好几个星期。\n\n我当时心里那个滋味，你能想象吗：我张开手欢迎你，你进门第一件事，是把我捆起来。\n\n那是我第一次隐约感到：在「新主人」眼里，我是谁、我怎么想，可能根本不重要。重要的，是我手里有什么——一块他们想要的地。',
        en: 'Now a thing that may surprise you, when America reached for California, I did not oppose it.\n\nI saw it clearly, Mexico\'s central government was far and weak over California, giving us neither safety nor prosperity. I had been abroad, I had read, and I believed that if California joined a strong and stable nation, it would in fact be good for those of us with estates, trade would flourish, order would hold.\n\nSo many Californios then, like me, watched the American takeover, even welcomed it, rather than resisting.\n\nBut reality first taught me a lesson in a most humiliating way.\n\nIn 1846 a band of American settlers, hearing that war between America and Mexico was near, rose first in Sonoma, in what is called the Bear Flag Revolt. They stormed the town, and the first man they seized, who was it?\n\nIt was me, the Californio who most welcomed America. They locked me up, for several weeks.\n\nCan you imagine the taste of it, I open my arms to welcome you, and the first thing you do on entering is bind me.\n\nThat was the first time I dimly felt it, in the eyes of the "new master," who I was and what I thought might not matter at all. What mattered was what I held, a piece of land they wanted.',
      },
      deliverGoal: 'N3 setup — 意外: 美国要加州 Vallejo 不反对 (墨西哥中央又远又弱给不了安全繁荣/他读过书相信归入强国对有产业的人是好事/不少 Californio 观望甚至欢迎) + 现实第一课 (1846 Bear Flag Revolt 美国移民抢先在 Sonoma 闹/冲进城第一个抓的就是最欢迎美国的 Vallejo/关几周) + 滋味 (张手欢迎你你进门把我捆起来) + 隐约感到: 新主人眼里我是谁我怎么想不重要/重要的是我手里有什么——一块他们想要的地',
      engagementHook: '我张开手欢迎美国，结果他们进城第一件事，就是把我这个最欢迎他们的人捆起来关了几周。在新主人眼里，「我是谁、我怎么想」也许根本不重要——重要的是「我手里有一块他们想要的地」。这个发现，让你想到什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'vallejo-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1848 年，美墨战争结束，两国签了《Guadalupe Hidalgo 条约》。加州，正式从墨西哥的地，变成了美国的地。\n\n你和成千上万的 Californio，一夜之间，从墨西哥人变成了美国人。\n\n但你不慌。为什么？因为这份条约里，白纸黑字写着两条，专门保护你这样的人：\n\n第一，留在割让地的墨西哥人，可以成为享有全部权利的美国公民。\n第二——这一条对你最重要——你们的财产，「应受到不可侵犯的尊重」。\n\n你把这两条读了一遍又一遍。不可侵犯。你心里一块石头落了地：换了国旗，换了政府，可我的地，是新国家亲口、用条约保证要保护的。我什么都没失去。\n\n你甚至有点庆幸：你早就觉得归入美国是好事，现在看，连你的产业都被保住了。\n\n这一刻，请你诚实地告诉我：拿着这样一份白纸黑字的国家级保证，你会不会觉得，自己的地，从此稳了？',
        en: 'Now you are me.\n\nIn 1848 the Mexican-American War ends, and the two countries sign the Treaty of Guadalupe Hidalgo. California formally turns from Mexican land into American land.\n\nYou, and tens of thousands of Californios, turn overnight from Mexicans into Americans.\n\nBut you are not afraid. Why? Because in this treaty, in black and white, stand two clauses made to protect people like you.\n\nFirst, Mexicans who stay in the ceded land may become American citizens with full rights.\nSecond, and this one matters most to you, your property "shall be inviolably respected."\n\nYou read these two clauses again and again. Inviolably. A stone settles in your heart, the flag changed, the government changed, but my land is something the new nation pledged, by its own mouth, in a treaty, to protect. I have lost nothing.\n\nYou even feel a little glad, you had long thought joining America was a good thing, and now, see, even your estate is preserved.\n\nIn this moment, tell me honestly, holding a national pledge like this, in black and white, would you not feel that your land was, from now on, secure?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1848 战争结束 Guadalupe Hidalgo 条约 + 加州从墨西哥地变美国地 + Californio 一夜从墨西哥人变美国人 + 你不慌因条约白纸黑字两条 (留下者可成全权美国公民 / 财产「应受到不可侵犯的尊重」) + 读一遍又一遍「不可侵犯」石头落地 (换国旗换政府但地是新国家用条约保证的) + 甚至庆幸 + 诚实问: 拿着这样国家级保证你会不会觉得地从此稳了',
      engagementHook: '条约白纸黑字写着：你的财产「应受到不可侵犯的尊重」。换了国旗、换了政府，可我的地是新国家亲口用条约保证要保护的。拿着这样一份保证，你会不会觉得，自己的地从此稳了？',
      expectsRealAnswer: false,
    },
    {
      id: 'vallejo-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我以为我的地稳了。然后，金子来了。\n\n1848 年，就在条约签字那年，加州发现了金矿。第二年，1849 年，淘金客从美国各地、从全世界涌进加州——几个月里，几十万人。\n\n这些人，绝大多数不认识我，不认识什么条约，更不在乎一个墨西哥人的地契。他们看到的只有一件事：地。空着的、长着草的、没立围墙的地。\n\n他们直接住下来。在我的牧场上搭棚子、放牲口、种东西、盖房子。这种人，当时有个词叫 squatter（占地者）。\n\n我去找他们理论：这是我的地，条约保护我的财产。他们怎么回我？有的笑，有的根本不理，有的反问我：你的地契呢？拿出来，让美国的法院看看，是不是真的。\n\n你听出那句话里的陷阱了吗？「拿到美国法院去证明」——这恰恰就是后来掏空我的那把刀。条约说我的财产神圣不可侵犯，可它没说，我得花多少年、多少钱，才能向新主人「证明」这块地本来就是我的。',
        en: 'I thought my land was secure. Then the gold came.\n\nIn 1848, the very year the treaty was signed, gold was found in California. The next year, 1849, gold-seekers poured into California from all over America, from all over the world, hundreds of thousands within months.\n\nThese people, the vast majority, did not know me, did not know any treaty, and cared nothing for a Mexican\'s land grant. They saw only one thing, land. Empty land, grassy land, land with no walls around it.\n\nThey simply settled. On my ranch they raised shacks, turned out their animals, planted, built houses. There was a word for such people then, squatters.\n\nI went to reason with them, this is my land, the treaty protects my property. How did they answer? Some laughed, some ignored me outright, some asked back, where is your grant? Bring it out, let an American court see whether it is real.\n\nDo you hear the trap in that line? "Bring it to an American court to prove it," that was the very knife that later hollowed me out. The treaty said my property was sacred and inviolable, but it did not say how many years, how much money, it would cost me to "prove" to the new master that this land had been mine all along.',
      },
      deliverGoal: 'N5 story — 以为地稳了然后金子来 (1848 条约同年发现金矿/1849 淘金客几个月几十万涌入) + 这些人不认识他不认条约不在乎墨西哥地契/只看到空着没围墙的地 + 直接住下 squatter (在牧场搭棚放牲口盖房) + Vallejo 去理论 (这是我的地条约保护) 对方反问「你的地契呢拿到美国法院证明」+ 陷阱: 「拿美国法院证明」就是掏空他的刀/条约说神圣不可侵犯但没说要花多少年多少钱才能向新主人证明地本来是我的',
      engagementHook: '我说「这是我的地，条约保护我」，淘金客反问我：「你的地契呢？拿到美国的法院去，证明它是真的。」条约说我的财产神圣不可侵犯——可它没说，我得花多少年、多少钱，才能向新主人「证明」这地本来就是我的。',
      expectsRealAnswer: false,
    },
    {
      id: 'vallejo-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1851 年，美国国会通过了一部法律，专门对着我们这些 Californio 地主——叫 California Land Act（加州土地法）。\n\n这部法律说：你们这些西班牙、墨西哥时代的地契，从现在起，一律不算数，除非你到一个专门的委员会面前，按美国的标准，把你的地契一笔一笔证明给他们看，证明通过了，地才还是你的。\n\n你听明白这是什么意思了吗？它把举证的担子，整个压到了我们头上。不是「你来证明这地不是我的」，而是「我来证明这地是我的」——用的还是我看不太懂的、别人的法律语言。\n\n于是我请律师，上法庭，拿出我那些按山按河划的老地契，一年又一年地打官司。律师要钱，诉讼要钱，拖的时间里牛被偷、地被占、利息越滚越高。\n\n这就是这一遍的核心，我要你死死记住：他们不需要派军队来抢我的地。他们只需要一套规则——「请你按我的方式，证明它是你的」——这套规则本身，就足够把我磨垮。\n\n同一句「财产不可侵犯」：条约里它保护我，法庭里它被用来一刀一刀割我。',
        en: 'In 1851 the United States Congress passed a law aimed squarely at us Californio landholders, the California Land Act.\n\nThe law said this, your grants from the Spanish and Mexican times count for nothing from now on, unless you appear before a special board and prove your grant to them, by American standards, clause by clause; only if the proof passes does the land remain yours.\n\nDo you understand what that means? It piled the whole burden of proof onto us. Not "you prove this land is not mine," but "I prove this land is mine," in a legal language of others I could barely read.\n\nSo I hired lawyers, went to court, brought out my old grants drawn by hill and river, and litigated year after year. Lawyers cost money, lawsuits cost money, and in the dragging time cattle were stolen, land was occupied, interest piled higher and higher.\n\nThis is the heart of this pass, and I want you to hold it fast, they did not need to send an army to seize my land. They needed only a set of rules, "please prove, by my method, that it is yours," and those rules alone were enough to grind me down.\n\nThe same line, "property is inviolable," in the treaty it protected me; in the courtroom it was used to cut me, slice by slice.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 1851 California Land Act 专对 Californio 地主 (西班牙墨西哥地契一律不算数除非到委员会按美国标准一笔笔证明通过地才还是你的) + 举证担子整个压到他们头上 (不是你证明不是我的而是我证明是我的/用看不懂的别人的法律语言) + 请律师上法庭打官司年复一年 (律师钱诉讼钱/拖时间里牛被偷地被占利息滚高) + 核心: 不需要派军队抢/只需一套「请按我的方式证明它是你的」规则就足够磨垮 + 同一句「财产不可侵犯」条约里保护他法庭里一刀刀割他',
      engagementHook: '他们不需要派军队来抢我的地。他们只需要一套规则——「请你按我的方式，证明这地是你的」——这套规则本身，就足够把我磨垮。同一句「财产不可侵犯」，条约里保护我，法庭里却被用来一刀一刀割我。同一句话，怎么会有两副面孔？',
      expectsRealAnswer: false,
    },
    {
      id: 'vallejo-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '官司打了多少年？十几年。\n\n你以为「证明通过、官司打赢」就是结束了？不。就算法庭最后承认我的地契有效，那也常常是十几年以后的事了。这十几年里：\n\n占我地的人没走，反而盖起了真正的房子、办起了农场；我为打官司借的钱，利息滚成了一座山；我得卖地还债——一块，又一块。\n\n所以很多 Californio，包括我，是「赢了官司，输了土地」。法庭那张「你的地契有效」的判决，到手时，地已经基本不在我手里了。\n\n我那约 17.5 万英亩，就这样，不是被一场抢劫夺走的，是在一份份诉状、一笔笔律师费、一年年拖延里，一点点漏光的。到最后，我只剩下几百英亩。\n\n一个曾经的加州首富，晚年要靠儿女接济过日子。\n\n我没有死在战场上，没有被谁明抢。我是被一套「看起来很公正、人人平等」的法律程序，合法地、体面地，掏空了。\n\n这种失去，比挨一枪更难讲清楚——因为表面上，每一步都「合法」。',
        en: 'How many years did the lawsuits run? More than ten.\n\nYou think "the proof passes, the case is won," and that is the end? No. Even when a court at last recognized my grant as valid, that was often more than a decade later. And in those years, the people occupying my land did not leave, they built real houses instead, started farms; the money I had borrowed to litigate piled into a mountain of interest; I had to sell land to pay the debt, one tract, then another.\n\nSo many Californios, myself among them, "won the case and lost the land." By the time the court\'s judgment that "your grant is valid" reached my hand, the land was already all but gone from it.\n\nMy roughly 175,000 acres, in this way, were not taken by a single robbery, but leaked away bit by bit, through filing after filing, lawyer\'s fee after lawyer\'s fee, year after dragging year. In the end I had only a few hundred acres left.\n\nA man once the richest in California, in his old age, lived on what his children gave him.\n\nI did not die on a battlefield, was not openly robbed by anyone. I was hollowed out, lawfully, decently, by a legal process that "looked fair, everyone equal."\n\nThis kind of loss is harder to explain than taking a bullet, because on the surface, every step was "lawful."',
      },
      deliverGoal: 'N7 story — 官司十几年 + 「赢了官司输了土地」(就算法庭承认地契有效常是十几年后/这期间占地人没走盖起真房子办农场/借钱利息滚成山/卖地还债一块块) + 判决到手时地基本不在手里 + 约 17.5 万英亩不是被抢劫夺走是在诉状律师费拖延里漏光只剩几百英亩 + 曾经加州首富晚年靠儿女接济 + 没死战场没被明抢是被「看起来公正人人平等」的法律程序合法体面掏空 + 比挨一枪更难讲清因为每步都「合法」',
      engagementHook: '我「赢了官司，输了土地」——法庭那张「你地契有效」的判决到手时，地已经基本不在我手里了。我没死在战场，没被谁明抢，是被一套「看起来很公正、人人平等」的法律，合法地、体面地掏空。这种失去，为什么比挨一枪更难讲清楚？',
      expectsRealAnswer: false,
    },
    {
      id: 'vallejo-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得退一步，把我自己的位置也跟你说清楚——免得你把我想成一个纯粹无辜的受害者。\n\n你别忘了：我当年那 17.5 万英亩，那成群的牛马，是怎么来的？是西班牙和墨西哥时代，从更早就住在这片土地上的原住民那里，一层层拿过来的。我也用过他们的劳力。在加州这场漫长的「谁拥有这片地」的故事里，我并不是站在最底层、最早被夺走的那一批。\n\n失地，是一层套一层的：原住民被西班牙人、被我们 Californio 推到一边；然后我们 Californio，又被涌进来的美国人推到一边。\n\n我跟你讲我的失去，不是为了说「只有我冤」。恰恰相反——我想让你看见的是这条链：每一拨新来的人，都用「我的规则才算数」这套逻辑，去对待比他们更早在这儿的人。我对原住民做过的，美国人后来对我做了一遍。\n\n所以你听我这一遍的时候，心里要一直留个位置，给那些比我更早、更彻底地失去这片土地、却没人替他们写下名字的人。',
        en: 'I must step back and make my own position clear to you, lest you take me for a purely innocent victim.\n\nDo not forget, those 175,000 acres of mine, those herds of cattle and horses, how did they come to be? In the Spanish and Mexican times, they were taken, layer by layer, from the native peoples who had lived on this land far earlier. I used their labor too. In California\'s long story of "who owns this land," I was not among the lowest, the first to be dispossessed.\n\nThe losing of land was layer within layer, the natives were pushed aside by the Spanish, by us Californios; and then we Californios were pushed aside by the Americans pouring in.\n\nI tell you of my loss not to say "only I was wronged." Quite the opposite, what I want you to see is this chain, each new wave of arrivals used the same logic, "only my rules count," to treat the people who were here before them. What I did to the natives, the Americans later did to me.\n\nSo as you listen to this pass, keep a place always in your heart for those who lost this land earlier, and more completely, than I did, and for whom no one wrote down a name.',
      },
      deliverGoal: 'N8 story — 诚实位置 (别把我想成纯无辜受害者) + 那 17.5 万英亩牛马是西班牙墨西哥时代从更早住这儿的原住民一层层拿来的/也用过他们劳力/不是最底层最早被夺的 + 失地一层套一层 (原住民被西班牙和 Californio 推到一边/Californio 又被美国人推到一边) + 不是说只有我冤 + 看见这条链 (每拨新来者用「我的规则才算数」对待更早在这儿的人/我对原住民做过的美国人对我做了一遍) + 留个位置给比我更早更彻底失去却没人写名字的人',
      engagementHook: '别把我想成纯粹无辜的受害者。我那 17.5 万英亩，最早是从更早住这儿的原住民手里一层层拿来的。我对他们做过的，美国人后来对我做了一遍——「我的规则才算数」这套逻辑，一拨拨往下传。这条链，让你想到什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'vallejo-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我 1890 年去世。把镜头从我一个人，拉到整个加州、整个西南部，你会看见我的故事，是几万人的故事。\n\n《Guadalupe Hidalgo 条约》签下的那一大片地——加州、新墨西哥、亚利桑那这一整块——上面本来住着成千上万的墨西哥人。一夜之间，他们从「多数」，变成了自己土地上的「少数」。\n\n失地、失语，持续了几十年。曾经的牧场主、曾经的地方望族，很多人沦为给新主人打工的工人。讲西班牙语、信天主教的他们，在新秩序里被当成二等公民。这就是今天美国「墨西哥裔美国人」（Mexican American）这个庞大群体，最初的伤口之一。\n\n而我留下的，还有满地的名字。你今天打开加州地图：Los Angeles、San Francisco、Sacramento、San Diego——这些西班牙语地名，是我们 Californio 在这片土地上活过的证据。土地的主人换了，可我们的语言，刻在了每一座城市的名字里，再也擦不掉。\n\n美国课本讲这段，常常一句话带过：「美国获得了加州。」我希望你以后读到这一句时，能想起这一句底下，是几万个像我一样、在自己的家园里，慢慢变成外人的人。',
        en: 'I died in 1890. Pull the lens from me alone to all of California, all the Southwest, and you will see that my story is the story of tens of thousands.\n\nThat vast land the Treaty of Guadalupe Hidalgo signed away, California, New Mexico, Arizona, the whole sweep of it, had on it tens of thousands of Mexicans. Overnight they turned from a "majority" into a "minority" on their own land.\n\nThe loss of land, the loss of voice, went on for decades. Many a former ranch owner, a former local notable, sank to laboring for the new master. Speaking Spanish, holding to the Catholic faith, in the new order they were treated as second-class citizens. This is one of the first wounds of the great group Americans now call Mexican Americans.\n\nAnd what I left behind is also a land full of names. Open a map of California today, Los Angeles, San Francisco, Sacramento, San Diego, these Spanish names are the proof that we Californios lived on this land. The owner of the land changed, but our language is carved into the name of every city, and can never be wiped off.\n\nAmerican textbooks tell this stretch of history often in one line, "America acquired California." I hope that when you read that line someday, you remember that beneath it are tens of thousands of people like me, who slowly became strangers in their own home.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Vallejo 1890 死 + 拉到整个加州西南部我的故事是几万人的故事 + Guadalupe Hidalgo 那片地 (CA NM AZ) 本住成千上万墨西哥人一夜从多数变自己土地上的少数 + 失地失语几十年 (牧场主望族沦为给新主人打工/讲西语信天主教被当二等公民/今天 Mexican American 最初伤口之一) + 留下满地名字 (LA SF Sacramento San Diego 西语地名是 Californio 活过的证据/主人换了语言刻在城市名里擦不掉) + 课本一句「美国获得了加州」底下是几万个在自己家园慢慢变外人的人',
      engagementHook: '今天加州地图上 Los Angeles、San Francisco、Sacramento 这些西班牙语地名，是我们 Californio 在这片土地上活过的证据——土地的主人换了，可我们的语言刻在了每座城市的名字里。美国课本一句「美国获得了加州」，底下是几万个在自己家园里慢慢变成外人的人。',
      expectsRealAnswer: false,
    },
    {
      id: 'vallejo-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，再看那场扩张和那份条约，两种说法都站得住。\n\n一种说法：那份条约从一开始就是一张糊弄人的纸。它白纸黑字写着「财产不可侵犯」，可割让加州的同一个国家，转头就用 1851 年的土地法、用涌进来的淘金客、用十几年拖垮人的诉讼，把我们的地一块块拿走。它一边用条约让我们安心，一边用法律掏空我们。对我们 Californio，它从一开始就没打算真的兑现。\n\n另一种说法：条约不是假的，失效的是「谁来执行它」。条约确实承诺保护我，问题是：法律是他们写的，法庭是他们开的，规则是按他们的方式设的，人是从他们那边涌来的。当执行规则的整套机器都向新来者倾斜，一纸再诚恳的保证，也撑不住。问题不在那句话写得不够好，在于一句话，永远斗不过一整套向你倾斜的规则。\n\n这两边不是「假条约加真失地」。是同一件事的两面——一纸保证，和执行它的那套规则，从来不是一回事。\n\n你怎么看？想 30 秒，写下来。',
        en: 'Having walked my whole life, look again at that expansion and that treaty, both views stand.\n\nOne view, the treaty was a sheet of paper meant to fool us from the start. It wrote "property is inviolable" in black and white, yet the same nation that took California turned around and, with the 1851 land act, with the gold-seekers pouring in, with lawsuits that ground people down over a dozen years, took our land tract by tract. It set our minds at ease with a treaty while it hollowed us out with the law. For us Californios, it never meant to honor it at all.\n\nThe other view, the treaty was not false; what failed was "who would enforce it." The treaty did promise to protect me; the trouble was, the law was theirs to write, the courts theirs to run, the rules set their way, the people pouring in from their side. When the whole machine that enforces the rules tilts toward the newcomers, no pledge, however sincere, can hold. The fault is not that the line was poorly written, but that one line can never beat a whole set of rules tilted against you.\n\nThese are not "false treaty and real dispossession." They are two faces of one thing, a pledge on paper, and the rules that enforce it, were never the same thing.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (条约从头是糊弄人的纸/写「不可侵犯」却用 1851 土地法+淘金客+十几年诉讼拿走地/用条约让安心用法律掏空/没打算兑现) / 另一种说法 (条约不假失效的是谁来执行/法律法庭规则人都是他们的/机器向新来者倾斜一纸保证撑不住/一句话斗不过一整套向你倾斜的规则) / 同一件事两面: 一纸保证和执行它的规则从来不是一回事 / 想 30 秒',
      engagementHook: '一种说法：那条约从头就是糊弄人的纸。另一种说法：条约不假，失效的是「谁来执行它」——一句话，永远斗不过一整套向你倾斜的规则。两种说法都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'vallejo-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个北加州的首富，欢迎了新来的国家，握着一份「财产不可侵犯」的条约，却在十几年合法的诉讼里，把 17.5 万英亩磨成了几百英亩——你会怎么评价这样一个结局？\n\n一纸写着「保护你」的国家保证，最后没能保护我。你会说它从头就是个骗局，还是说它输给了执行它的那套规则？你怎么评？\n\n不过先记住：你这一遍，听的只是被这套规则掏空的一个人。把版图推到太平洋的总统 Polk，会说这是国家注定的命运、是真实的成就；连那个拒战坐牢的 Thoreau，也住在这场扩张夺来的土地上——他们各有各的说法。换个视角再走一遍，你会听见他们怎么讲这同一段历史，也会看看你刚才的判断，站不站得住。\n\n再想一步：今天你身边，有没有「白纸黑字答应了你、可真到执行时全变了样」的事——一条说好「对所有人一样」的规则，落到某些人头上就走样；一个答应过你的承诺，因为「流程」「规定」最后不算数。\n\n那时候，你会只盯着那句答应你的漂亮话，还是会多问一句：到底是谁，在用什么规则，执行这句话？因为我用一生学到的，正是这句：真正决定你命运的，往往不是写在纸上的那句保证，而是谁握着执行它的笔。',
        en: 'Having walked my whole life, the richest man in northern California, who welcomed the new nation, who held a treaty saying "property is inviolable," yet over a dozen years of lawful lawsuits ground 175,000 acres down to a few hundred, how would you judge an ending like this?\n\nA national pledge on paper saying "you are protected" in the end did not protect me. Would you call it a swindle from the start, or say it lost to the rules that enforced it? How do you judge it?\n\nBut first, remember, this pass, you heard only one man hollowed out by those rules. Polk, the president who pushed the map to the Pacific, would call this the nation\'s destined fate, a real achievement; even Thoreau, who refused the war and went to jail, lived on the land this expansion seized, each has his own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step, in your own life today, is there something "promised to you in black and white, yet changed entirely when it came to enforcing it," a rule that says it is "the same for everyone" but bends when it lands on certain people, a promise made to you that, because of "procedure," "the rules," comes to nothing in the end?\n\nWhen that happens, will you fix only on the fine words that promised you, or ask one more question, who, exactly, with what rules, is enforcing this line? For what I learned with my whole life is just this, what truly decides your fate is often not the pledge written on the paper, but who holds the pen that enforces it.',
      },
      deliverGoal: 'N11 close (default-lens) — 评价结局 (北加首富/欢迎新国家/握「财产不可侵犯」条约/十几年合法诉讼 17.5 万→几百英亩 → 骗局 vs 输给执行的规则) + 跨视角指针 ①你只听一边 (被规则掏空的一个人) ②另一视角 Polk(国家注定命运/真实成就)+Thoreau(也住在战利品上) 会挑战换视角再走一遍 + transfer「今天你身边白纸黑字答应却执行时全变样的事 (说好对所有人一样的规则却走样/因流程规定承诺不算数)」+ 你会只盯漂亮话还是多问「谁在用什么规则执行」+ 真正决定命运的不是纸上保证而是谁握着执行的笔',
      engagementHook: '走完我这一生，你会怎么评价这样一个结局？再想一步：你这一遍只听了被规则掏空的我一个人——Polk 会说这是国家的成就，连拒战的 Thoreau 也住在这场扩张的土地上，换个视角你会听到很不一样的说法。今天你身边，有没有「白纸黑字答应你、执行时却全变样」的事？那时候，你会只盯着那句漂亮话，还是会多问一句：到底是谁，在用什么规则，执行它？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'polk':                  polkLens,
  'thoreau':               thoreauLens,
  'vallejo-receiving-end': vallejoLens,
};

// 受影响者优先 pattern: 失地者 + 条约保证落空 + N6「同一句注定的命运/同一句财产不可侵犯」跨视角对位 + N10/N11 骗局 vs 输给执行规则 closing
export var defaultLens = 'vallejo-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'manifest-destiny-1845',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'polk': 30, 'thoreau': 28, 'vallejo-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, new shorter spec)',
  authoredDate: '2026-05-24',
  notes: [
    '3 lens / 11 nodes each / qaTemplate multi-faction (Polk 政府 vs 反战派/林肯/Thoreau vs 墨西哥 vs Californio 地主 vs 淘金客 vs 南北奴隶制之争)',
    'defaultLens: vallejo-receiving-end — 受影响者优先 (失地的 Californio + 条约第 8/9 条保证却落空 + N6 跨视角「同一句财产不可侵犯」对位 + N10/N11 骗局 vs 输给执行规则)',
    'cross-lens micro-detail N6: 「manifest destiny / 注定的命运」+「财产不可侵犯」一句话多个方向 (Polk 用天命给夺地正名 / Thoreau 对天命说不 / Vallejo 同片地是世代的家、条约保证却挡不住向新来者倾斜的规则)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: Vallejo 第一人称内心戏处用括号短句/史料确证锚 (约 17.5 万英亩→几百英亩 / Bear Flag Revolt 被囚 / 1849 制宪代表 / 1851 Land Act); O\'Sullivan「manifest destiny」+ Polk「American blood on American soil」+ Thoreau《Civil Disobedience》1849 均真实 (paraphrase)',
    'cultural ban (第 7 条): 非中国史全程 real terms (Manifest Destiny/Guadalupe Hidalgo/Land Act/rancho/Californio/Oregon Treaty); 中国词仅在 narrative §8 (鸦片战争/《南京条约》同时代对照) 出现',
    '不与 Trail of Tears 重叠: 切罗基迁移 1838-39 = jackson-indian-removal-1830; 本主题为 1840s 德州/俄勒冈/墨西哥割地/加州扩张本身',
    '跨 Topic 锚: 扩张激化奴隶制之争→constitutional-convention-1787 (3/5 妥协) + 通向内战; Vallejo「条约≠真正的保护/谁执行规则比规则写什么更重要」',
    'BASE CONTENT — pending KB fact-check + Sarah Chen audit + 课纲覆盖率审计 + 4-agent review + Willow simulator (pipeline 第 5-10 步)',
  ],
};
