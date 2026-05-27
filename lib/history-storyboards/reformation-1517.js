// ─── Reformation 1517 Lens-based Storyboard (Story-First v2) ─────────
//
// Topic: 宗教改革 1517 · The Protestant Reformation
// HSS-7.9 · AP European Period 2.2 · AP World 1.7 · AP Gov First Amendment
//
// 3 lens 设计 (per Sarah Chen audit + 4-agent review):
//   - martin-luther    (agonistic-prophet / 痛苦先知)
//   - erasmus          (unwanted-bridge / 没人要的桥) — Sarah audit hidden unlock
//   - sister-agnes     (forgotten-half / 被遗忘的一半) — 1539 解散修道院虚构合成
//
// 跨 lens micro-detail: Luther 95 Theses 1521 印刷的德文版小册子
//   AP teacher 高度认可: 三视角对应 AP DBQ rubric producer/interpreter/affected party
//   Luther N4: 写者 (Wittenberg printer Johann Rhau-Grunenberg + Cranach 1521+ 才介入)
//   Erasmus N5: 1521 印刷件案头, 同情但不站他那边 (中道警告)
//   Sister Agnes N5: 修道院偷藏 14 年, 解散前看最后一眼
//
// defaultLens = 'sister-agnes' (per 7thgrader 推荐起手 — 同龄锚点 + 字数严控 + N12 谜题钩子)
//
// 4-agent review (5-7) 通过, 12 P0 + 9 P1 finding:
//   - 7thgrader (小 U): 3 P0 (Luther N4 名字超载 / Erasmus N4 概念词 / Erasmus dependency hint)
//   - AP teacher (Dr. Park 12 yr): 3 P0 (Cranach 1517 错→Rhau-Grunenberg / Erasmus 70→69 / 修女院规模)
//   - ESL teacher (Maria 9 yr): 3 P0 (Erasmus 30→18 年 / 58→57 / Diet gloss)
//   - Chinese teacher (赵老师 12 yr): 2 P0 (Sister Agnes daily routine 中英 code-mix / Erasmus 200+ 删)
//
// per AUTHORING_PIPELINE 第 7-11 条铁律全过 (cultural ban / anti-fab / em-dash / atlas templating /
// 第 11 条 quote nesting 用「」中文方头括号防 SWC parser error)

// ═══════════════════════════════════════════════════
// LENS 1: Martin Luther (agonistic-prophet)
// ═══════════════════════════════════════════════════

var lutherStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK: 1517/10/31 万圣节前夕,Wittenberg
  // ═══════════════════════════════════════════════════
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Martin Luther',
    narrativeRef: '§1 一句话锚点 + §3 Luther 1517 钉门',
    content: {
      cn:
        '1517 年 10 月 31 日,万圣节前夕。Wittenberg,Saxony 一个偏僻小城——人口不到 2000,大学只开了 15 年。\n\n' +
        '我 33 岁,Wittenberg 大学神学教授。窗外天阴,北德的秋天傍晚 4 点就开始暗。\n\n' +
        '我口袋里折着一张纸,上面用拉丁文写着 95 条论纲——拉丁文是因为我想跟其他大学教授辩论这件事:罗马教廷派 Johann Tetzel 在德国卖赎罪券,我亲眼看见信徒拿一张收据来要求免认罪。\n\n' +
        '我从修士宿舍走出来,穿过半条街,到 Schlosskirche——城堡教堂。教堂大门是中世纪大学的「公告板」,任何学者要发起辩论,把论点钉门上是正常做法。\n\n' +
        '我钉了 4 个钉子。我以为这只是一次学术讨论的邀请。\n\n' +
        '——「钉门」是后世广为流传的画面,但史学界对我那天到底有没有真钉门一直有争议:更可能的是我把 95 条**寄给**了美因茨大主教。钉没钉门没定论——但 95 条确实写了、确实传开了。\n\n' +
        '——这一刻我不知道。我不知道 6 周后这 95 条会被翻成德文,通过印刷术传遍整个神圣罗马帝国。我不知道 4 年后我会站在皇帝 Charles V 面前。我不知道我接下来 29 年会写、辩、藏、翻译、结婚、骂农民、写反犹小册子,然后死。\n\n' +
        '接下来 12 节,你跟我走 29 年——你会看到这一锤怎么意外触发欧洲分裂,也会看到 1525 年我亲手写小册子叫贵族杀农民,10 万人死。同一双手。',
      en:
        'October 31, 1517. The eve of All Saints. Wittenberg — a small Saxon town with under 2,000 people and a university only 15 years old.\n\n' +
        'I am 33, a professor of theology at Wittenberg University. The northern German afternoon goes dark by four.\n\n' +
        'In my pocket is a folded sheet with ninety-five theses written in Latin. Latin because I want to invite other professors to argue with me about one thing: Rome has sent Johann Tetzel through Germany selling indulgences, and I have watched parishioners walk in with a Tetzel receipt demanding to skip confession.\n\n' +
        'I leave my friars\' dorm, cross half a street, and reach the Schlosskirche — the Castle Church. The big door is the medieval university bulletin board. To start a scholarly debate, you nail your theses to the door. Normal practice.\n\n' +
        'I drive in four nails. I think this is an invitation to academic debate.\n\n' +
        'The nailing is the picture history loves, but historians argue over whether I really nailed anything to the door that day: more likely I sent the ninety-five theses by letter to the Archbishop of Mainz. Whether the hammer ever touched the door is unsettled — but the theses were written, and they did spread.\n\n' +
        'In this moment I do not know what I do not know. Six weeks from now my Latin theses will be translated into German and printed across the Holy Roman Empire. Four years from now I will stand in front of Emperor Charles V. The next twenty-nine years of my life I will write, argue, hide, translate, marry, curse peasants, write an anti-Jewish pamphlet — and then die.\n\n' +
        'Over twelve sections you will walk those twenty-nine years with me. You will see how one hammer accidentally cracked Europe in half. You will also see, in 1525, the same hands write a pamphlet calling the nobility to slaughter the peasants. A hundred thousand died. Same pair of hands.',
    },
    deliverGoal: {
      cn: '我 33 岁钉 95 条本意只是学术讨论——同一双手 8 年后写小册子叫贵族屠杀 10 万农民。',
      en: 'At 33 I nailed up 95 theses meaning to start an academic debate — eight years later the same hands ordered the killing of one hundred thousand peasants.',
    },
    engagementHook: {
      cn: '一个修士的「学术辩论邀请」怎么变成欧洲分裂?倒回我修道院的 12 年。',
      en: 'How does one friar\'s "invitation to debate" turn into a continent splitting in two? Roll back to my twelve years in the cloister.',
    },
    expectedLength: '230-280 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: 1505 雷电誓言 + 修道院 10 年苦行
  // ═══════════════════════════════════════════════════
  {
    id: 2,
    phase: 'setup',
    cosplay: 'Martin Luther',
    narrativeRef: '§3 Luther 1505 闪电 + 修道院 10 年',
    content: {
      cn:
        '我父亲 Hans Luther 是矿工出身,后来成了铜矿的小老板,Saxony 中部 Eisleben 人。他严苛、暴躁,把「爬到下一阶层」的全部希望压在我身上。他要我做律师——这是 1480 年代矿工儿子能想象的「最高梦想」。\n\n' +
        '我童年挨打挨到出血。\n\n' +
        '1505 年 7 月 2 日——我 21 岁,刚在 Erfurt 大学读完法律,正在回家路上。下大雨,我一个人走在野地。一道闪电几乎击中我,我吓得当场跪下,脸贴泥土,大喊:「圣 Anna 救我——我做修士!」\n\n' +
        '14 天后我进了 Erfurt 的 Augustinian 修道院。父亲气到几年没跟我说话——我「白白浪费了」法律学位。\n\n' +
        '——我不是因为爱上帝进修道院。我是因为怕上帝进修道院。我一辈子都在问同一个问题:我怎样才能让这个愤怒的上帝接纳我?\n\n' +
        '修道院 10 年我是最严格的修士。每天告解 6 到 8 小时。鞭打自己。整夜不睡跪在石地上祈祷。一天一顿。读 Bible 读到拉丁文背得出 Romans 整本。\n\n' +
        '但我越苦行越绝望。我永远觉得罪深。永远觉得做得不够。我后来写过一句话:「我恨上帝。因为他要求我做我做不到的事,给我不可能的标准,还惩罚我做不到。」\n\n' +
        '这种精神黑夜是 Reformation 的真正起点——不是 95 条,是这 10 年绝望。',
      en:
        'My father Hans Luther was a miner who became a small copper-mine owner in Eisleben, central Saxony. He was harsh, hot-tempered, and put every ounce of family hope on me. He wanted me to become a lawyer — that was the top of what a miner\'s son in the 1480s could imagine.\n\n' +
        'My childhood beatings went to blood.\n\n' +
        'July 2, 1505. I was twenty-one, freshly finished law at Erfurt, walking home alone. A storm broke. A bolt of lightning almost took me. I dropped to the mud, face down, and shouted: "Saint Anna, save me — I will become a friar!"\n\n' +
        'Two weeks later I entered the Augustinian cloister at Erfurt. My father did not speak to me for years. He thought I had thrown the law degree away.\n\n' +
        'I did not enter the cloister out of love for God. I entered out of fear of God. The question I would carry for the rest of my life began that day: how can I, exactly as I am, ever be acceptable to a furious God?\n\n' +
        'For ten years inside the cloister I was the most punishing friar. Six to eight hours of confession a day. I scourged myself. I knelt all night on the stone floor. One meal a day. I read the Bible until I could recite the whole of Romans in Latin.\n\n' +
        'And the harder I tried, the worse I felt. I always felt the sin still in me. I later wrote one line: "I hated God — because he demanded what I could not do, set me an impossible standard, and then punished me for failing."\n\n' +
        'This dark night of the soul, not the 95 theses, is the real beginning of the Reformation. It started ten years before the hammer.',
    },
    deliverGoal: {
      cn: '我不是因为爱上帝做修士——是因为怕上帝。10 年苦行越苦越绝望——这是 Reformation 真正的起点。',
      en: 'I became a friar out of fear, not love. Ten years of penance only deepened my despair — that, not the hammer, is the real start of the Reformation.',
    },
    engagementHook: {
      cn: '在我 1517 年钉论纲之前——我先去过一次 Rome,见到的是另一个我没准备好的世界。',
      en: 'Before I nailed up the theses in 1517, I made one trip to Rome — and saw something that broke my preparation in half.',
    },
    expectedLength: '260-310 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — SETUP: 1510 Rome 朝圣 + 1517 春 Tetzel
  // ═══════════════════════════════════════════════════
  {
    id: 3,
    phase: 'setup',
    cosplay: 'Martin Luther',
    narrativeRef: '§3 Luther 1510 Rome 朝圣 + Tetzel 卖赎罪券',
    content: {
      cn:
        '1510 年冬天——我 27 岁,第一次出 Saxony——徒步去 Rome。修道院派我去办事。Rome 是所有 Catholic 修士心里的圣城。我走了几个月,翻过阿尔卑斯,到 Rome 时跪下亲了城门口的石头。\n\n' +
        '然后我看见我没准备看见的:\n\n' +
        '教士在街上跟妓女调情。神父做弥撒 6 分钟一台,只为收钱。教皇 Julius II 穿着盔甲指挥打仗。圣彼得大教堂工地堆着木架子和石材——还有一摞一摞的赎罪券收据。\n\n' +
        '我后来写过:「Rome 让我永远不能再爱罗马。我亲眼看见它不是圣地——是贪欲、性、钱的集中地。」\n\n' +
        '但我没立刻反。我还是修士。我等了 7 年。\n\n' +
        '——\n\n' +
        '1517 年春天,德国 Saxony。一个叫 Johann Tetzel 的 Dominican 修士开始在我们这一带卖赎罪券。\n\n' +
        '他的销售模式很有戏:进城,城里教士敲钟欢迎。在主教堂前搭高台,红毯,教皇旗。讲几小时——讲地狱多可怕,炼狱多漫长,赎罪券保你跳过去。然后打开桌上的箱子,人们排队投钱,他给收据。\n\n' +
        '他有一句话广告——拉丁文原文我背过:Sobald der Gulden im Becken klingt, im huy die Seel im Himmel springt。「当硬币响在箱底——灵魂就从炼狱跃出」。\n\n' +
        '1517 年初秋,我在 Wittenberg 听信徒说他们买了 Tetzel 票来要求免认罪——「神父我已经付过了」——我那一刻决定动手写 95 条。\n\n' +
        '我不是想分裂教会。我是想阻止 Tetzel 这种人继续做生意。',
      en:
        'Winter 1510. I was twenty-seven, on my first trip beyond Saxony, walking to Rome on cloister business. Rome was the holy city in every friar\'s heart. I walked for months, crossed the Alps, and at the gates of Rome I kissed the stones.\n\n' +
        'And then I saw what I had not prepared myself to see.\n\n' +
        'Priests flirting with prostitutes in the street. Six-minute Masses for cash. Pope Julius II in armor commanding troops. The new Saint Peter\'s under construction — and stacks of indulgence receipts piled beside the scaffolding.\n\n' +
        'I later wrote: "Rome made it impossible for me to love Rome ever again. I saw with my own eyes that it was not a holy place — it was a sump of greed, sex, and money."\n\n' +
        'But I did not act. I was still a friar. I waited seven years.\n\n' +
        '— —\n\n' +
        'Spring 1517. Saxony. A Dominican friar named Johann Tetzel began selling indulgences in our area.\n\n' +
        'His sales method was theater. Enter a town, town clergy ring the bells in welcome. Build a high stage in front of the cathedral, red carpet, papal banner. Preach for hours about how terrible hell is, how long purgatory lasts, how an indulgence carries you over. Open the box on the table. People line up. Coin in, receipt out.\n\n' +
        'He had a slogan I have memorized — in his original German: Sobald der Gulden im Becken klingt, im huy die Seel im Himmel springt. "When the coin in the box rings, the soul out of purgatory springs."\n\n' +
        'Early autumn 1517 in Wittenberg, parishioners told me they had bought a Tetzel ticket and now wanted to skip confession — "Father, I have already paid." That was the moment I sat down to write the ninety-five theses.\n\n' +
        'I did not set out to split the church. I set out to stop one man\'s sales pitch.',
    },
    deliverGoal: {
      cn: 'Rome 让我看见教会的 commercial 化——但我等了 7 年——直到 Tetzel 在我家门口卖票才动手写 95 条。',
      en: 'Rome showed me the commercial rot, but I waited seven years — until Tetzel was selling tickets in my own parish — to write the ninety-five theses.',
    },
    engagementHook: {
      cn: '现在跟我走到 1517 年 10 月 31 日下午——城堡教堂门口。',
      en: 'Now walk with me to the afternoon of October 31, 1517, in front of the castle church door.',
    },
    expectedLength: '270-310 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — STORY: 钉门 + 印刷术放大 (cross-lens micro-detail)
  // ═══════════════════════════════════════════════════
  {
    id: 4,
    phase: 'story',
    cosplay: 'Martin Luther',
    narrativeRef: '§0.5 Renaissance 4 礼物 + §4 1518 印刷术接力',
    content: {
      cn:
        '1517 年 10 月 31 日下午,Wittenberg。我钉完 95 条,回修道院,继续教课,继续告解。我以为这件事就这样过了。\n\n' +
        '但接下来 6 周——我看见的是我没设计的东西。\n\n' +
        '一个学生几天内把 95 条翻成德文。Wittenberg 的印刷工(Johann Rhau-Grunenberg,城里几家小作坊之一)把德文版排版印刷——把 95 条压成 8 页一本的小册子,白纸黑字。我去他工坊那一天,他从架子上拿下来给我看,封面 27 条那一行字特别粗:「钱币掉进盒子——灵魂从炼狱跳出」是 Tetzel 的人造说法。\n\n' +
        '我笑了。我说:「这本东西 6 周后会传到德国所有大学城。」我自己都觉得这话夸张——但我后来发现我说低了。\n\n' +
        '4 周内,Mainz、Nuremberg、Augsburg、Leipzig 全部有副本。3 个月内,巴黎、Basel、伦敦的学者都读到了。1518 年初我开始收到信——从 Erasmus 那种我从来没见过的人手里来的信——他们要么支持我,要么警告我「你已经超越自己了」。\n\n' +
        '——这一刻我才明白。我不是站在我自己的论纲后面。我是站在 Renaissance 100 年的肩膀上。\n\n' +
        '具体说就是三件事——Gutenberg 1450 年发明的印刷术,让我这本小册子 6 周内就能传遍德国;30 多年前 Florence 一个叫 Pico della Mirandola 的学者写过「人有自由选择良心」,我现在把这句话变成了对教皇权威的政治挑战;还有 200 年前的 Dante 用意大利方言写《神曲》,打破了「方言不配写严肃东西」这个偏见,5 年后让我能用 Saxon 方言翻译德文新约。\n\n' +
        '——没有 Renaissance 这 100 年的印刷术 + 思想种子 + 方言突破,1517 年这一锤只会停在 Wittenberg 一所大学几个学者的拉丁文备忘录里。柴火早已堆好,我只是最后那个点燃的人。',
      en:
        'October 31, 1517, afternoon. I nailed up the theses, walked back to the cloister, taught my classes, heard confessions. I thought that was the end of it.\n\n' +
        'For the next six weeks I watched something I had not designed.\n\n' +
        'A student translated my Latin theses into German within days. The Wittenberg printer who took it on (Johann Rhau-Grunenberg, one of the small print shops in town) set the German type and ran off an eight-page pamphlet, white paper, black ink. I went to the shop. He pulled a copy off the shelf and held it out to me. Thesis 27 was set in extra-bold on the cover: the line that "when the coin rings, the soul springs" is a man-made tale, not biblical teaching.\n\n' +
        'I laughed. I said: "In six weeks every university town in Germany will have this." Even I thought I was exaggerating. I was understating.\n\n' +
        'Within four weeks: Mainz, Nuremberg, Augsburg, Leipzig — copies everywhere. Within three months: Paris, Basel, London. By early 1518 I was getting letters from people I had never met, including Erasmus, either supporting me or warning me, "You have already gone past yourself."\n\n' +
        'That was when I understood. I was not standing on my own theses. I was standing on the shoulders of a hundred years of Renaissance.\n\n' +
        'Three things specifically: Gutenberg invented printing in 1450, and that is why my pamphlet could spread across Germany in six weeks. Three decades back, in Florence, a scholar named Pico della Mirandola wrote that a human has the freedom to choose conscience — and now in 1517 I am dragging that sentence out of philosophy and into a political fight against the papacy. And two hundred years before me, Dante used Italian vernacular for the Divine Comedy and broke the rule that vernacular was beneath serious work — five years from now, that broken rule will let me translate the New Testament into the Saxon tongue ordinary Germans actually speak.\n\n' +
        'Without those hundred years of printing + a seed-thought + a vernacular breakthrough, this hammer would have stopped at a Latin memo for a few scholars in one dorm. The firewood was already stacked. I was just the last man holding the spark.',
    },
    deliverGoal: {
      cn: '我钉的是论纲——传播的是 Renaissance 100 年攒的印刷术 + 人文主义 + 方言文学 + 商业网。我不设计风暴,我只是点了一下。',
      en: 'I nailed up theses — but what carried them was a hundred years of Renaissance press, humanism, vernacular, and trade. I did not engineer the storm; I just touched the match.',
    },
    engagementHook: {
      cn: '4 年后我站在皇帝 Charles V 面前。Worms 大厅,1521 年 4 月 17 日傍晚。这是我一辈子最长的一夜。',
      en: 'Four years later I stood in front of Emperor Charles V. The hall at Worms, April 17, 1521. The longest night of my life was about to begin.',
    },
    expectedLength: '320-380 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — STORY: Diet of Worms 4-17 犹豫 + 隔夜祷告 + 4-18 Here I stand
  // ═══════════════════════════════════════════════════
  {
    id: 5,
    phase: 'story',
    cosplay: 'Martin Luther',
    narrativeRef: '§3 Luther 1521 Diet of Worms (P0-4 patch)',
    content: {
      cn:
        '1521 年 4 月 17 日下午——Worms,神圣罗马帝国西部一个城。我 37 岁,被传唤到皇帝 Charles V 主持的帝国会议——德文叫 Diet(诸侯议事大会,不是吃饭那个 diet,是中世纪欧洲皇帝召集贵族 + 教士议事的法庭)。\n\n' +
        '我朋友们劝我别去。100 年前 Bohemian 改革家 Jan Hus 在类似会议上被烧死。我有皇帝给的安全通行证——但那张纸值几个钱,大家心里都清楚。\n\n' +
        '我还是去了。\n\n' +
        '4 月 17 日下午我第一次站在大厅。皇帝 Charles V 21 岁,坐在中央。两侧是教皇代表、7 个选帝侯、几十位德国诸侯、拉丁文书记。我面前桌上摞着 25 本我写的书。书记一本一本念书名。\n\n' +
        '审问官问:「这些书是你写的吗?」我承认。\n\n' +
        '审问官又问:「你撤回吗?」\n\n' +
        '——这一刻我没立刻回答。我犹豫了。我请求 24 小时考虑。Charles V 同意,给我到第二天傍晚回来。\n\n' +
        '4 月 17 日晚我回到我在 Worms 的住处。这一夜我没睡。我祷告。我翻 Scripture。我写笔记。我朋友 Justus Jonas 后来在信里写过这一夜:「他整夜跪在桌前——油灯没熄过——窗外天亮他还在那儿。」\n\n' +
        '——这一遍让你听见我没说出口的内心:我知道第二天回大厅说「不撤」 = 死刑判决书已经写好了。我也知道说「撤」 = 神学上自我否认 + 1517 年起这 4 年全白做。我两边都不能逃。\n\n' +
        '4 月 18 日傍晚,我第二次站在 Charles V 面前。这一次我不再犹豫。我先用拉丁文讲了一段,又用德文讲了一段。核心句:\n\n' +
        '「除非你能用 Scripture 和清楚的理性说服我错——我不撤回任何一个字。因为违背良心既不安全也不正确。我在此立——我不能也不会做别的。上帝助我。Amen。」\n\n' +
        '后来据传我说的这一句「Here I stand. I can do no other」变成 Reformation 最有名的口号。说句老实话:这一句最有名的金句只见于后来的印刷版,最早的记录里并没有,学界普遍认为是后世为戏剧效果加上的——但我拒绝撤回、诉诸良心和 Scripture 这件事是真的。我不是 4 月 17 日下午说的,是 4 月 18 日傍晚说的——隔了一夜祷告之后。中间那一夜没人看见,但那一夜才是这一刻真正的成本。',
      en:
        'April 17, 1521. Worms, a city in the western Holy Roman Empire. I was thirty-seven, summoned to an imperial council (Diet) chaired by Emperor Charles V himself.\n\n' +
        'My friends begged me not to go. A hundred years earlier the Bohemian reformer Jan Hus had been burned alive after a similar promise of safe passage. I had a written safe-conduct from the emperor — but everyone knew what that piece of paper was worth.\n\n' +
        'I went anyway.\n\n' +
        'On the afternoon of April 17 I stood in the great hall for the first time. Charles V, twenty-one years old, sat at the center. Around him: papal legates, the seven prince-electors, dozens of German princes, Latin secretaries. In front of me, twenty-five of my own books were stacked on a table. A clerk read each title.\n\n' +
        'The interrogator asked: "Did you write these books?" I said yes.\n\n' +
        'He asked: "Will you recant?"\n\n' +
        'At that moment I did not answer. I hesitated. I asked for twenty-four hours to think. Charles V agreed and gave me until the following evening.\n\n' +
        'The night of April 17 I went back to my lodging in Worms. I did not sleep. I prayed. I turned pages of Scripture. I wrote notes. My friend Justus Jonas later wrote about that night in a letter: "He knelt at the desk all night — the oil lamp never went out — when light came he was still there."\n\n' +
        'This is where the lens lets you hear what I did not say out loud. I knew the next day, walking back into the hall to refuse, was the same as signing my own death warrant. I knew that walking back to recant was theological self-betrayal — four years of work, gone. There was no door without a cost.\n\n' +
        'Evening of April 18, I stood in front of Charles V a second time. This time I did not hesitate. I spoke first in Latin, then in German. The core line:\n\n' +
        '"Unless I am convinced by Scripture and plain reason — I will not recant a word. To act against conscience is neither safe nor right. Here I stand. I can do no other. God help me. Amen."\n\n' +
        'Later the line attributed to me, "Here I stand, I can do no other," became the most famous slogan of the Reformation. To be honest: that most famous line appears only in the later printed version, not in the earliest records, and scholars generally treat it as added afterward for dramatic effect — but my refusal to recant, my appeal to conscience and Scripture, that part is real. I did not say it on the afternoon of April 17. It belongs to the evening of April 18 — after the night between. No one saw that night. But that night is what this moment actually cost.',
    },
    deliverGoal: {
      cn: '4 月 17 日我犹豫了,请 24 小时考虑。那一夜整夜跪桌油灯没熄。4 月 18 日傍晚才说 Here I stand——中间那一夜才是这句话的真正成本。',
      en: 'On April 17 I hesitated and asked for 24 hours. That night I knelt at the desk till dawn. On April 18 I said "Here I stand." That night between is the real cost of the line.',
    },
    engagementHook: {
      cn: '5 月 26 日 Charles V 颁 Edict of Worms——任何人可以杀我。但我已经被绑架——藏到了山顶城堡 Wartburg。',
      en: 'On May 26, Charles V issued the Edict of Worms — anyone could kill me. But by then I had already been kidnapped to a castle at the top of a mountain: Wartburg.',
    },
    expectedLength: '350-400 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — STORY: Wartburg 11 周翻译德文新约
  // ═══════════════════════════════════════════════════
  {
    id: 6,
    phase: 'story',
    cosplay: 'Martin Luther',
    narrativeRef: '§3 Luther 1521-1522 Wartburg + §0.5 Renaissance 第 3 礼物',
    content: {
      cn:
        '5 月 4 日晚——我从 Worms 回 Wittenberg 的路上,在森林里被一群骑士拦下。他们不是教皇的人,而是 Saxony 选帝侯 Frederick the Wise 派来的。他不愿意让 Edict of Worms 在他领地上执行,所以他先把我藏起来。\n\n' +
        '他们带我上 Wartburg 山顶城堡,Saxony 中部。我在山上 10 个月,假名 Junker Jörg(绅士 George),留长头发和胡子伪装成乡绅。窗外是图林根森林,雪 + 杉树 + 鸟。\n\n' +
        '10 个月里我做了一件改变德国的事——我把整本《新约》翻成德文。\n\n' +
        '不是用高级拉丁文。不是用法律 + 宫廷 German。我用 Saxon 方言——普通石匠、农民、酿酒妇人在街上说的德文。我桌上摆 Erasmus 1516 年印的希腊文新约(这本书是 Renaissance 的礼物——没有 Erasmus 的希腊文本,我没法绕过 Vulgate 拉丁版直接译),旁边一支羽毛笔,一摞稿纸。\n\n' +
        '11 周——77 天——我翻完整本新约。\n\n' +
        '1522 年 9 月这本书在 Wittenberg 出版。5 年内印 200,000 册——这在 16 世纪是天文数字。它是第一本普通德国人能读的 Bible。\n\n' +
        '——它不只是一本 Bible。它是现代德语的奠基。我翻译的时候做了一个决定:每一个词,我先在街上听普通德国人怎么说(市集、酒馆、女人之间),再决定怎么写。Goethe 200 年后说过一句话:「德语就是 Luther 那本 Bible 的语言。」\n\n' +
        '——这一刻我做的事是 Renaissance 第 3 个礼物的 payoff。Dante 1320 年用意大利方言写《神曲》打破偏见。5 年前我看着印刷术让 95 条 6 周传遍德国。现在我把同样的逻辑反过来用:不是把神学搬到普通人面前,是把普通人的语言搬到神学里。\n\n' +
        '我下山的时候我已经不只是一个反对赎罪券的修士了。我变成了一个民族语言的奠基人。我自己也没预期。',
      en:
        'Evening of May 4. On my way from Worms back to Wittenberg, in the forest, a band of riders stopped me. Not the pope\'s men — Frederick the Wise, the elector of Saxony, did not want to enforce the Edict of Worms in his territory, so he hid me first.\n\n' +
        'They took me up to Wartburg, a castle on a hilltop in central Saxony. I stayed ten months under the name Junker Jörg, "Squire George." I let my hair and beard grow out so I looked like a country gentleman. Outside the window: Thuringian Forest, snow, fir trees, birds.\n\n' +
        'In those ten months I did one thing that reshaped Germany — I translated the entire New Testament into German.\n\n' +
        'Not high Latin. Not legal-court German. Saxon vernacular — the German that masons, farmers, and brewing wives speak in the street. On my desk: the Greek New Testament that Erasmus had printed in 1516 (one of the Renaissance\'s gifts — without his Greek edition I could not have gone around the Latin Vulgate to the original), a quill, and a stack of paper.\n\n' +
        'Eleven weeks — seventy-seven days — and the New Testament was done.\n\n' +
        'Wittenberg published it in September 1522. Two hundred thousand copies in five years — astronomical for the sixteenth century. It was the first Bible an ordinary German could read.\n\n' +
        'It was not only a Bible. It was the foundation of modern German. While translating I had one rule: before writing any word, listen to how ordinary Germans actually said it — markets, taverns, women talking. Two hundred years later Goethe said one line about it: "German is the language of Luther\'s Bible."\n\n' +
        'This was the payoff of the third Renaissance gift. Dante in 1320 used Italian vernacular for the Divine Comedy and broke the rule that vernacular was beneath serious work. Five years before this, I watched printing carry the 95 theses across Germany in six weeks. Now I used the same logic backwards: not bringing theology down to the people, but bringing the people\'s language up into theology.\n\n' +
        'When I came down the mountain I was no longer just a friar against indulgences. I had become the foundation of a national language. I had not planned this either.',
    },
    deliverGoal: {
      cn: '11 周翻完整本德文新约——用普通 Saxon 方言——这本书既是新教 Bible 也是现代德语的奠基。',
      en: 'Eleven weeks to finish the German New Testament — in ordinary Saxon speech — a Bible and the foundation of modern German at the same time.',
    },
    engagementHook: {
      cn: '我下山几个月,10 万德国农民拿《十二条款》起义,他们说自己受我启发——我给的反应是接下来这一节最让我痛的事。',
      en: 'A few months after I came down, a hundred thousand German peasants rose up with their Twelve Articles, saying I had inspired them. What I did next is the most painful thing in this whole lens.',
    },
    expectedLength: '320-380 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — STORY: Peasants War 1525 (lens 心结 — Sarah audit 重点)
  // ═══════════════════════════════════════════════════
  {
    id: 7,
    phase: 'story',
    cosplay: 'Martin Luther',
    narrativeRef: '§3 Luther 1525 Peasant War + §10 误解 1',
    content: {
      cn:
        '1524 年秋开始,德国各地农民起义。到 1525 年春,全国 30 万农民武装。\n\n' +
        '他们读了我 1520 年那本小册子《基督徒的自由》。里面我说:「在基督里所有信徒都是平等的,没有等级。」他们的解读是:「那我们农奴也该自由——农奴制不是基督的事。」\n\n' +
        '他们写《十二条款》,要求很具体:取消农奴制、降低税、公社共选自己的牧师、公社共有森林和水。这本小册子用我开的印刷网络发行——印了 25 个版本。\n\n' +
        '他们引用我的话。他们以为我会站他们这边。\n\n' +
        '——\n\n' +
        '1525 年初我写过一本《对农民的温和劝告》——同情他们,但警告他们不要起义。他们没听。他们继续烧庄园、杀贵族。\n\n' +
        '1525 年 5 月我立场急转。我写了《Against the Murderous, Thieving Hordes of the Peasants》——《反对杀人抢劫的农民帮派》。这是我一辈子最让我自己回头看不想看的一本小册子。我写:\n\n' +
        '「杀他们。鞭打他们。像鞭打疯狗一样。任何贵族杀农民起义者都是做上帝的事。上帝奖赏他们。如果你能为这种事死——你死得圣洁。」\n\n' +
        '5 月 15 日 Frankenhausen 战役——农民军 6,000 人 vs 贵族军队。早晨他们在战场上唱诗。然后贵族火炮开火。30 分钟之内,几千农民死在田里。整个 Peasant War 10 万农民被杀。\n\n' +
        'Lutheran 从此失去农民基础。我们变成贵族 + 中产的宗教。\n\n' +
        '——这一遍让你听见我没说出口的:我支持自由的精神,但我不打算让农民也自由。我反对教皇的等级,但我不反对地主的等级。我把自由这个词给了一个范围——超过这个范围,我转头就把它收回。\n\n' +
        '我后来一辈子都没真正承认这一点。我说我是为了神学一致性,农民起义违反了「服从世俗权威」的圣经教导。但今天回头看:4 年前我自己跟皇帝 Charles V 说「违背良心既不安全也不正确」——那时候良心和权威冲突,我让 Hans 们死。\n\n' +
        '这是我一辈子最深的 contradiction。',
      en:
        'Autumn 1524, peasant uprisings began across Germany. By spring 1525 there were three hundred thousand armed peasants.\n\n' +
        'They had read my 1520 pamphlet, "On the Freedom of a Christian," in which I wrote: "In Christ all believers are equal — there is no rank." Their reading was: "Then we serfs should be free too — serfdom is not Christ\'s order."\n\n' +
        'They wrote up the Twelve Articles, very concrete demands: abolish serfdom, lower taxes, let parishes elect their own pastors, hold forests and water in common. The pamphlet went out on the same printing network I had opened — twenty-five editions.\n\n' +
        'They quoted me. They thought I would stand with them.\n\n' +
        '— —\n\n' +
        'Early in 1525 I wrote "An Earnest Exhortation to Peace" — sympathetic but warning them not to rise up. They did not listen. They burned manors and killed lords.\n\n' +
        'In May 1525 my position flipped. I wrote "Against the Murderous, Thieving Hordes of the Peasants." This is the one pamphlet of mine that I most cannot stand to read back. I wrote:\n\n' +
        '"Kill them. Strike them down. Beat them like rabid dogs. Any lord who kills a rebellious peasant is doing the work of God. God rewards him. If you die in such work, you die holy."\n\n' +
        'May 15, the battle of Frankenhausen. Six thousand peasants against a noble army. The peasants sang hymns at dawn on the field. Then the nobles\' artillery opened up. In thirty minutes thousands lay dead on the ground. Across the whole Peasants\' War, one hundred thousand peasants were killed.\n\n' +
        'Lutheranism lost its peasant base then. We became a religion of lords and the middle class.\n\n' +
        'This is where the lens lets you hear what I did not say out loud. I supported the spirit of freedom, but I did not intend the peasants to be free. I rejected the ranks of Rome, but I did not reject the ranks of the lord. I gave the word "freedom" a circle — and the moment anyone stepped past that circle, I pulled it back.\n\n' +
        'I never really admitted this in my own lifetime. I said I was just being theologically consistent — that peasant rebellion violates the Bible\'s command to submit to worldly authority. But looking back: four years earlier I had told Emperor Charles V that "to act against conscience is neither safe nor right." When conscience and authority collided in me, I stood. When they collided in a peasant called Hans, I let him die.\n\n' +
        'This is the deepest contradiction of my life.',
    },
    deliverGoal: {
      cn: '我支持自由的精神,但我不打算让农民也自由——我把「Here I stand」用在自己身上,把「服从权威」用在 Hans 身上。同一年,同一个我。',
      en: 'I supported freedom in spirit, but I did not intend the peasants to be free. I used "Here I stand" for myself and "obey authority" for Hans. Same year. Same me.',
    },
    engagementHook: {
      cn: '同一年我做了一件没人预期的事——41 岁,娶了一个 26 岁的前修女。',
      en: 'In the same year I did something no one expected — at forty-one I married a former nun, age twenty-six.',
    },
    expectedLength: '380-440 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — STORY: 1525 Katharina von Bora 婚姻 + 家庭神圣化
  // ═══════════════════════════════════════════════════
  {
    id: 8,
    phase: 'story',
    cosplay: 'Martin Luther',
    narrativeRef: '§3 Luther 1525 Katharina + 婚姻',
    content: {
      cn:
        '1525 年 6 月 13 日——Wittenberg。我 41 岁。Katharina von Bora 26 岁,前修女——2 年前从 Nimbschen 修女院和 11 个姊妹一起,藏在运鲱鱼的木桶里逃出来。\n\n' +
        '她到 Wittenberg 后,我帮她和其他逃出来的修女找丈夫。剩下她一个,没人合适。她最后开玩笑说:「要不你自己娶我吧?」我想了想——我说好。\n\n' +
        '——这件事在 1525 年是地震。\n\n' +
        '我是修士。Catholic 法律修士永远不能结婚。Katharina 是修女,更不能结婚。我们俩结婚 = 双重违反 Catholic 法。教皇那边马上传话:「Luther 这就是为了女人才反教会」——这种话我父母那一代人也信。\n\n' +
        '但我故意结婚。我要用自己的婚姻示范一件事:修士 + 修女结婚是正常的——不是堕落,是回归创世规律。上帝从来没要求修士独身——这是人造规则。\n\n' +
        '——\n\n' +
        '21 年里,我跟 Katharina 生 6 个孩子,3 个活到大。她管家。她在 Black Cloister(我们的房子,是被废弃的修道院改的)开酒坊酿啤酒,在花园种菜。她接待 Wittenberg 来访的所有人——逃出来的修女、外地学生、神学辩论里的对手——同一张桌子上,有时候 30 个人吃饭。\n\n' +
        '她也跟我辩神学。我有时候想随便说一句神学结论——她会说:「这一句你昨天讲的不是这样。」我一辈子很少听人这样跟我说话。\n\n' +
        '我喊她「我的 Käthe」。我们一起活下来了 21 年。\n\n' +
        '——\n\n' +
        '我跟 Katharina 的婚姻铺路给后来所有新教牧师可以结婚——Lutheran 牧师、Calvinist 牧师、Anglican 牧师、Methodist 牧师。今天美国 80% 的新教教会牧师有家庭——直接源于 1525 年 6 月 Wittenberg 那一张婚书。\n\n' +
        '这是我没有 contradiction 的一件事。这是我把婚姻从 Catholic「宗教次等」拉回来的一件事——把它从「修士独身才是高级灵性」翻成「家庭也是上帝的创造」。',
      en:
        'June 13, 1525. Wittenberg. I was forty-one. Katharina von Bora was twenty-six, a former nun who had escaped from the Nimbschen convent two years earlier hidden in a herring-merchant\'s barrels with eleven other sisters.\n\n' +
        'After she reached Wittenberg I helped her and the other runaway nuns find husbands. She was the last one without a match. She finally joked: "Then why don\'t you marry me?" I thought about it. I said yes.\n\n' +
        'In 1525 this was an earthquake.\n\n' +
        'I was a friar. Under Catholic law, friars were never to marry. Katharina was a nun — even less. The two of us together was a double break with Catholic law. Rome\'s line spread fast: "See, Luther was just in this for a woman." Many of my parents\' generation believed it.\n\n' +
        'But I married her on purpose. I wanted to use my own marriage to show one thing: a friar marrying a nun is not a fall — it is a return to creation. God never required friars to be celibate. That was a human-made rule.\n\n' +
        '— —\n\n' +
        'For twenty-one years Katharina and I had six children, three of whom grew up. She ran the house. She started a brewery in our home, the Black Cloister (a former friary), grew the kitchen garden, hosted everyone who came through Wittenberg — runaway nuns, out-of-town students, theological opponents — sometimes thirty people at the same table.\n\n' +
        'She argued theology with me. If I tossed out a quick conclusion, she would say: "Yesterday you put it differently." Few people in my life have spoken to me like that.\n\n' +
        'I called her "my Käthe." We made it through twenty-one years together.\n\n' +
        '— —\n\n' +
        'My marriage to Katharina opened the door for every Protestant pastor since — Lutheran, Calvinist, Anglican, Methodist. Today eighty percent of American Protestant pastors have families. The line traces straight back to that marriage license in Wittenberg, June 1525.\n\n' +
        'This is the one thing in my life with no contradiction. This is the thing where I dragged marriage out of Catholic "second-tier holiness" and back into "family is also God\'s creation."',
    },
    deliverGoal: {
      cn: '我 41 岁娶 Katharina 是故意的——双重违反 Catholic 法——示范家庭也是上帝的创造,不是宗教次等。这是我没有 contradiction 的一件事。',
      en: 'At forty-one I married Katharina on purpose — a double break with canon law — to show that family is also God\'s creation, not a lower tier of holiness. The one thing in my life without contradiction.',
    },
    engagementHook: {
      cn: '但我一辈子还有第二种 contradiction——这一节最不舒服的——我反对教会专横,但我自己也变成了另一种专横。',
      en: 'But there is a second contradiction in my life — the most uncomfortable section in this lens. I rejected the church\'s tyranny, and I became another kind of tyranny.',
    },
    expectedLength: '350-400 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — STORY: 反犹 1543 + 女巫审判暗面 (per inject patches)
  // ═══════════════════════════════════════════════════
  {
    id: 9,
    phase: 'story',
    cosplay: 'Martin Luther',
    narrativeRef: '§3 Luther 1543 反犹 + §10 误解 8 女巫审判',
    content: {
      cn:
        '1546 年 2 月 18 日凌晨 3 点,我 62 岁,回老家 Eisleben 调解一个家族纷争,心脏病发死在那里。我葬在 Wittenberg 城堡教堂——就在 1517 年 10 月 31 日我钉 95 条的那扇门附近。我葬在我改变历史的那一锤之下。\n\n' +
        '——但我死之前 3 年,我做了一件让我 400 年后被纳粹引用的事。\n\n' +
        '1543 年,我 60 岁,写了《On the Jews and Their Lies》,《论犹太人和他们的谎言》。我在里面建议:烧犹太会堂、毁犹太人的家、没收他们的祈祷书、强迫犹太人做苦工、不要让他们做生意。\n\n' +
        '为什么我写这本书?——因为我 1520 年代以为犹太人会被新教的「真 Christianity」吸引,愿意改宗。20 年后他们没改宗,我恼怒,我把这种恼怒写成了一本仇恨手册。\n\n' +
        '1933 年起,纳粹把这本书重新印——他们引用我作为反犹历史合法化资源。Kristallnacht 1938 年 11 月 9-10 日烧德国犹太会堂——纳粹宣传部直接说「这是 Luther 的方法」。1945 年 Nuremberg 审判,纳粹辩护律师 Julius Streicher 上庭说:「我没做 Luther 没说过的事。」\n\n' +
        '我 1543 年写的话,400 年后变成 Auschwitz 的合法化资源之一。\n\n' +
        '——\n\n' +
        '我也支持过烧女巫。我多次讲道说女巫是真实的、必须烧。我对 Wittenberg 法庭说过:「上帝命令我们必须杀这种人。」整个 1450-1750 年这 300 年,欧洲烧死大约 4-6 万「女巫」,75-85% 是女性——主要是寡妇、老年妇女、助产士、边缘女人。猎巫天主教和新教两边都烧——没有哪一派垄断。烧得最惨烈的反而集中在天主教的西南德国 prince-bishop 领地;新教的苏格兰等少数地区也极高。它不是简单的「谁比谁多」。\n\n' +
        '——这一遍让你听见我没承认的内心:我反对教皇的 institutional 暴力,但我也支持 institutional 暴力,只要换个对象。我反对教会专横,自己却变成了另一种专横。\n\n' +
        '我不是英雄,也不是 villain。我是 agonistic-prophet——痛苦先知。我的痛苦不是被人迫害的痛苦,是我自己两面我没有勇气面对。我给世界「个人良心」这一句话。同一双手把这句话从犹太人和女巫身上收回。\n\n' +
        '我死的时候没有忏悔这些。这是我留下的遗产里最重的一部分。',
      en:
        'February 18, 1546, three in the morning. I was sixty-two, back home in Eisleben mediating a family dispute. Heart attack. Dead. I was buried at the Castle Church in Wittenberg, near the very door I had nailed the ninety-five theses to in 1517. I lie under the hammer that changed history.\n\n' +
        'But three years before I died I wrote something that, four hundred years later, the Nazis would quote.\n\n' +
        '1543. I was sixty. I wrote On the Jews and Their Lies. In it I recommended: burn Jewish synagogues, destroy Jewish homes, confiscate their prayer books, force Jews into hard labor, ban them from commerce.\n\n' +
        'Why did I write that? Because in the 1520s I had assumed Jews would be drawn to the "true Christianity" of the Reformation and convert. Twenty years on, they had not converted. I was angry. I turned that anger into a hate manual.\n\n' +
        'From 1933 the Nazis reprinted the book and cited me as a German precedent for anti-Jewish persecution. After Kristallnacht (November 9-10, 1938), when synagogues across Germany burned, Nazi propaganda openly said: "This is Luther\'s method." At the 1945 Nuremberg trials, the Nazi propagandist Julius Streicher told the court: "I have done nothing Luther had not already said."\n\n' +
        'A pamphlet I wrote in 1543 became, four hundred years later, one of the licenses for Auschwitz.\n\n' +
        '— —\n\n' +
        'I also supported the burning of witches. I preached more than once that witches were real and had to be burned. I told the Wittenberg court: "God commands that we must put these people to death." Across the three centuries from 1450 to 1750, Europe executed roughly forty to sixty thousand "witches." Seventy-five to eighty-five percent were women — widows, the elderly, midwives, women on the edge of communities. The hunt ran through Catholic and Protestant lands alike — neither side held a monopoly. The worst of it was concentrated in the Catholic prince-bishop territories of southwest Germany; a few Protestant pockets like Scotland also ran extremely high. It is not a simple matter of who burned more than whom.\n\n' +
        'This is where the lens lets you hear what I never admitted. I rejected the institutional violence of Rome — and I supported institutional violence too, just against a different target. I rejected the tyranny of the church and I became another kind of tyranny.\n\n' +
        'I am not a hero and I am not a villain. I am an agonistic prophet. My anguish was never the suffering of being persecuted. My anguish was that I had two sides and never had the courage to face them both. I gave the world the line "personal conscience." With the same pair of hands I withdrew that line from Jews and from women called witches.\n\n' +
        'I died with none of this confessed. That is the heaviest part of my legacy.',
    },
    deliverGoal: {
      cn: '我 1543 反犹小册子被纳粹引用——我也支持烧女巫——我反对教会专横,我自己也变成了另一种专横。同一双手。',
      en: 'My 1543 anti-Jewish pamphlet was used by the Nazis. I also supported burning witches. I rejected church tyranny and became another kind of tyranny. Same pair of hands.',
    },
    engagementHook: {
      cn: '现在跳出 Luther——回到 narrator——问你一个我自己没办法回答的问题。',
      en: 'Now step out of Luther. Narrator takes over. The question I could not answer myself, you have to answer.',
    },
    expectedLength: '400-460 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — SYNTHESIS: 真问题 — 改革者还是只反对「上面」的人?
  // ═══════════════════════════════════════════════════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§9 historiography + §11 Q1 + Sarah audit §5',
    content: {
      cn:
        '你刚演完 Martin Luther 9 节——他从 1505 年雷电吓他做修士,到 1517 年钉 95 条,到 1521 年 Worms 隔夜祷告说 Here I stand,到 1525 年写《反农民帮派》让贵族屠杀 10 万人,到 1543 年反犹小册子,到 1546 年死。\n\n' +
        '这就是这一节要问的真问题:**Luther 是改革者——还是只反对「上面」的人**?\n\n' +
        '一边——他给世界「个人良心 vs 集体权威」这一句话。1521 年 4 月 18 日他面对皇帝 + 教皇代表 + 7 个选帝侯,拒绝撤回。「Here I stand」这句最有名的话是后世记载里加上的(最早记录没有),但它代表的那一刻是真的——这一句后来传到 Mahatma Gandhi、Martin Luther King、Edward Snowden。Reformation 没有 Luther 不会发生:民族语言 Bible、新教家庭、政教分离的种子,都从他那一夜长出来。\n\n' +
        '另一边——他反贵族但屠农民,反教皇但反犹,鼓励 sola scriptura 但反对女性讲道,支持「Here I stand」但烧「女巫」。解放某些人 + 压住另一些人——都是同一个 Luther。\n\n' +
        '两种说法都拿得出真证据:\n\n' +
        '**一种说法**(传统 Lutheran 史学 + Whig 进步派):Luther 是宗教民主化的祖先。「individual conscience」这一句话从 1521 直接传到现代人权——First Amendment、世界人权宣言、良心反对者传统,都建在他这一夜上。他个人有暗面,但他给人类的礼物是真的——你不能因为他后来的反犹否定他前面的良心权。\n\n' +
        '**另一种说法**(20 世纪修正派 + 马克思主义 historiography + 21 世纪 critical-genealogy 读法):Luther 不是改革者,他是结构内的反等级主义者。他反的是「教皇的等级」,不反「等级本身」。所以 1525 年农民拿他的话向地主要求自由的时候,他立刻收回。他给「自由」画了一个圈:圈里是他自己和贵族,圈外是农民、犹太人、女性、女巫。这种「选择性自由」不是民主化——是把权威从一个金字塔挪到另一个金字塔。\n\n' +
        '两边都站得住。\n\n' +
        '**你怎么看**——Luther 是改革者还是只反对「上面」的人?给我你最有力的一条理由。想 30 秒。',
      en:
        'You have just played Martin Luther across nine sections — from the lightning that scared him into the cloister in 1505, to nailing up the ninety-five theses in 1517, to the night of prayer at Worms before he said "Here I stand" in 1521, to the 1525 pamphlet calling on the lords to slaughter a hundred thousand peasants, to the 1543 anti-Jewish pamphlet, to his death in 1546.\n\n' +
        'So here is the real question this section asks: **was Luther a reformer — or just a man who rejected the people above him?**\n\n' +
        'On one side: he gave the world the line "personal conscience versus collective authority." On April 18, 1521, in front of the emperor, the papal legate, and seven prince-electors, he refused to recant. The most famous phrase, "Here I stand," is a later, probably apocryphal addition (it is not in the earliest records), but the moment it stands for is real — and that line traveled on to Gandhi, to Martin Luther King, to Edward Snowden. The Reformation does not happen without him — the vernacular Bible, the Protestant family, the seed of separation between church and state all grow out of that one night.\n\n' +
        'On the other side: he was against the lords but slaughtered peasants. Against the pope but anti-Jewish. Pushed sola scriptura but opposed women preaching. Defended his own conscience but supported burning women called witches. Liberation for some, suppression for others — same Luther.\n\n' +
        'Both readings have evidence:\n\n' +
        '**One view** (traditional Lutheran historiography and the Whig progressive school): Luther is the ancestor of religious democratization. The phrase "individual conscience" runs straight from 1521 to modern human rights — the First Amendment, the Universal Declaration, the conscientious objector tradition all rest on that night. He had dark sides as a man, but the gift he handed humanity is real, and you cannot cancel his earlier defense of conscience because of his later anti-Jewish writing.\n\n' +
        '**The other view** (twentieth-century revisionist, Marxist historiography, and twenty-first-century critical-genealogy readings): Luther was not a reformer; he was an anti-hierarchy man inside one specific hierarchy. He opposed the pope\'s rank — he did not oppose rank itself. The moment peasants in 1525 used his own words to demand freedom from their lords, he pulled the words back. He drew a circle around "freedom" — inside the circle were he and the lords, outside were peasants, Jews, women, and witches. That kind of selective freedom is not democratization. It is moving authority from one pyramid to another.\n\n' +
        'Both sides stand.\n\n' +
        '**What do you think** — was Luther a reformer or just a man who rejected the people above him? Give me your strongest single reason. Take thirty seconds.',
    },
    deliverGoal: {
      cn: 'Luther 是改革者——还是只反对「上面」的人?两种说法都拿得出真证据——你给一条最有力的理由就够了。',
      en: 'Was Luther a reformer or only against those above him? Both views have evidence. Give me your strongest single reason.',
    },
    engagementHook: {
      cn: '**你怎么看**——Luther 是改革者还是只反对「上面」的人?想 30 秒。',
      en: 'What do you think — was Luther a reformer, or only against those above him? Take thirty seconds.',
    },
    expectedLength: '380-440 字 CN + 真问题',
    expectsRealAnswer: true,
  },

  // ═══════════════════════════════════════════════════
  // N11 — SYNTHESIS: 跨文化锚 — 1517 同代王阳明
  // ═══════════════════════════════════════════════════
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 王阳明 vs Luther + Joseph Needham',
    content: {
      cn:
        '跳出 Wittenberg 看一眼当时的世界。\n\n' +
        '1517 年。Luther 33 岁钉 95 条。同一年地球另一边,中国是明朝正德 12 年。王阳明 45 岁——他这一年正在江西做都察院左佥都御史,平定地方一带的几股叛乱(宁王朱宸濠之乱要 2 年后 1519 才爆)。1508 年(9 年前)他在贵州龙场悟道,已经提出「心即理」。1518-1521 这几年他完成「知行合一」的哲学体系。\n\n' +
        '两个人,几乎完全同代——但走的路不一样。\n\n' +
        '**Luther 1521 年说**:「Here I stand. 我违背良心既不安全也不正确。」良心是对抗外部权威的武器——他用它去顶皇帝 + 教皇 + 整个西方基督教 1500 年的等级结构。\n\n' +
        '**王阳明同年说**:「心即理——理不在外,理在心。」良知是内在修养的对象——他用它去解决一个人怎么变成更完整的人。\n\n' +
        '——同一颗思想的种子:「个人良心是真理的来源」。两种文化的不同处理。\n\n' +
        '类似不?——都从外部权威转向内部良心。都把「我自己」放在判断中心。都拒绝「权威就是真理」。\n\n' +
        '不一样在哪?——Luther 把这变成对抗教会权威的政治行动:钉门、出版、辩论、被绝罚、躲山头、翻译方言 Bible。王阳明把这变成内在修养的哲学体系:讲学、收弟子、写书信、平叛后还在山里教学。\n\n' +
        '为什么不一样?——\n\n' +
        '**一种说法**(经典 Joseph Needham 派):中国「皇权统摄宗教」+ 没有 Rome 那种独立教会权威——没有可对抗的对象。Luther 有一个看得见的敌人(教皇),所以他能把良心变成革命。王阳明没有那种敌人(中国的皇帝同时是宗教权威 + 政治权威 + 思想权威——你不能像顶教皇那样顶皇帝,会死),所以他只能把良心变成内修。\n\n' +
        '**另一种说法**(后 Needham 修正派 + 中国哲学学者):这种说法把中国理解为「缺失对抗对象」——就是用 Luther 路径作默认 standard。王阳明走的不是「没法对抗」的退路。他走的是另一种价值序列里更高的路径:解决一个人内心和行动的一致性,比解决一个人和外部权威的对抗,更难也更深。心学到日本变成明治维新动力,不是因为日本人「找到了对抗对象」,是因为内修一旦完成,行动有不同的根基。\n\n' +
        '两边都站得住。\n\n' +
        '**你怎么看**——Luther 路径和王阳明路径,哪一种更说服你?想 30 秒。',
      en:
        'Step out of Wittenberg and look at the bigger world.\n\n' +
        'In 1517, while Luther at thirty-three nailed up his theses, on the other side of the planet in China it was Zhengde Year 12 of the Ming dynasty. Wang Yangming was forty-five. He was serving as a Censorate official in Jiangxi province, putting down several regional rebellions (the much larger uprising of Prince Ningwang would not break out until 1519). Nine years earlier, in 1508 at Longchang in Guizhou, he had already had his enlightenment and put forward the line "the mind is the principle." Between 1518 and 1521 he completed his philosophical system, "the unity of knowing and doing."\n\n' +
        'Two men, almost exactly contemporary, walking different roads.\n\n' +
        '**Luther in 1521**: "Here I stand. To act against conscience is neither safe nor right." Conscience as a weapon against external authority — he used it to push back against the emperor, the pope, and fifteen hundred years of Western Christian hierarchy.\n\n' +
        '**Wang Yangming in roughly the same year**: "The mind is the principle — principle is not outside, it is in the mind." Conscience as the object of inner cultivation — he used it to ask how a person becomes more whole.\n\n' +
        'Same seed of an idea: personal conscience is the source of truth. Two cultures handled it very differently.\n\n' +
        'How alike? Both turned from external authority toward inner conscience. Both put "I myself" at the center of judgment. Both rejected "authority is truth."\n\n' +
        'How different? Luther turned the seed into political action against church authority — nailing doors, publishing, debating, excommunication, hiding on a mountaintop, translating into vernacular. Wang Yangming turned it into a philosophical system for inner cultivation — lecturing, taking students, writing letters, teaching in the hills even after putting down rebellions.\n\n' +
        'Why so different?\n\n' +
        '**One view** (the classic Joseph Needham school): China had "imperial authority absorbing religious authority" — there was no independent church authority of the Roman type to push against. Luther had a visible enemy (the pope), so he could turn conscience into revolution. Wang Yangming had no such enemy (the Chinese emperor was simultaneously religious authority, political authority, and intellectual authority — you cannot push against him the way you push against a pope, you would die for it), so he could only turn conscience into inner work.\n\n' +
        '**The other view** (post-Needham revisionist plus Chinese-philosophy scholarship): that reading treats China as "lacking an opponent" — taking Luther\'s path as the default standard. Wang Yangming did not take a fallback because he could not fight; he took a different path inside a different value order, one that holds inner-and-outer alignment to be deeper than confrontation with external power. Once the path entered Japan, this same school became one of the engines of the Meiji Restoration — not because the Japanese "found an opponent," but because once inner cultivation is achieved, action has a different foundation.\n\n' +
        'Both sides stand.\n\n' +
        '**What do you think** — Luther\'s path or Wang Yangming\'s path, which is more persuasive to you? Take thirty seconds.',
    },
    deliverGoal: {
      cn: '1517 同一年——Luther 把良心变成对抗教皇的革命,王阳明把良知变成内在修养的哲学。同一颗种子,两种文化不同处理。',
      en: 'Same year, 1517 — Luther turned conscience into a revolution against the pope; Wang Yangming turned conscience into a philosophy of inner cultivation. One seed, two cultural treatments.',
    },
    engagementHook: {
      cn: '同一颗良心的种子,Luther 拿去对抗教皇、王阳明拿去内修——先在心里想想你怎么看,下一节我会正式问你。',
      en: 'The same seed of conscience — Luther aimed it at the pope, Wang Yangming turned it inward. Sit with which one persuades you; I will ask you for real in the next section.',
    },
    expectedLength: '420-480 字 CN + 真问题',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N12 — META: 我死了 + 故事继续 + 桥到 Renaissance / 换视角
  // ═══════════════════════════════════════════════════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§4 1546-1648 + §6 影响 + 跨 Topic 桥',
    content: {
      cn:
        '你刚扮演了 Martin Luther 12 节——从 1505 年雷电誓言,到 1517 年钉 95 条,到 1521 年 Worms 隔夜祷告,到 1525 年农民战争立场急转,到 1525 年娶 Katharina,到 1543 年反犹小册子,到 1546 年死。\n\n' +
        'Luther 死了。但 Reformation 的故事还在继续——\n\n' +
        '我死后 9 年,Augsburg 1555 年签和约,德国邦主可以选 Lutheran 或 Catholic,臣民必须跟随。我死后 18 年,Calvin 在 Geneva 死。他这 23 年建立的「新教神权独裁」会塑造苏格兰、荷兰、英格兰 Puritan、美国新英格兰殖民地,影响范围比我更国际。我死后 26 年,法国 Saint Bartholomew 大屠杀,3 天内死 5,000 到 30,000 个 Calvin 教徒。我死后 72 年,30 年战争开始,欧洲死 800 万人,德国部分地区死 50%。我死后 102 年,Westphalia 条约——现代国际法、民族国家主权、政教分离的种子在这里发芽。我死后 245 年,美国 First Amendment——直接源于我开始的这场 130 年血流。\n\n' +
        '——\n\n' +
        '换一个角度看,你已经学过文艺复兴那段历史——你看见的是另一个故事的另一边。\n\n' +
        '我 1517 年那一锤站在 Pico della Mirandola 1486 年《Oration on the Dignity of Man》的肩膀上——他说「人有自由选择良心」是 Florence 学者的哲学论辩,我把它变成对教皇的政治挑战。我 1522 年用 Saxon 方言翻译德文新约,站在 Dante 1320 年《神曲》打破「方言不配写严肃东西」的先例上。我的 95 条 6 周传遍德国,站在 Gutenberg 1450 年印刷术 + 1480 年代起小册子 distribution 网络上。\n\n' +
        '——没有 Renaissance 这 100 年,1517 年不会发生。\n\n' +
        '——\n\n' +
        '放下这一遍之前,给我说一件事。\n\n' +
        '这次扮演里,哪一个瞬间最让你停了一下?是 1505 年闪电下我跪泥地里大喊「圣 Anna 救我」?是 1521 年 4 月 17 日晚我在 Worms 整夜跪在桌前油灯没熄?是 1525 年 5 月 Frankenhausen 战役 6,000 农民唱诗等火炮?是 1525 年 6 月我和 Katharina 那张违法的婚书?还是 1543 年我写的反犹小册子 400 年后变成 Auschwitz 的合法化资源?\n\n' +
        '一句话就够,不用展开。\n\n' +
        '说完,你可以选——进 atlas-lab/reformation 看完整时间线,看 Calvin Geneva、Henry VIII 离婚、Trent 反宗教改革、Loyola 创立耶稣会、利玛窦 1583 到中国怎么排在我之后;或者换一个视角重玩这段历史——从 Erasmus(我没站他那边的那个学者朋友)那一边,或者从一个英格兰修女 Sister Agnes 1539 年修道院被 Henry VIII 解散那一边。',
      en:
        'You have just walked through Martin Luther across twelve sections — from the lightning vow of 1505, to nailing up the ninety-five theses in 1517, to the night of prayer at Worms in 1521, to the flip on the peasants in 1525, to marrying Katharina the same year, to the anti-Jewish pamphlet of 1543, to his death in 1546.\n\n' +
        'Luther is dead. But the Reformation story keeps going.\n\n' +
        'Nine years after my death, the Peace of Augsburg in 1555 — German princes choose Lutheran or Catholic, subjects follow. Eighteen years after my death, Calvin dies in Geneva — the "Protestant theocracy" he built over twenty-three years will shape Scotland, the Netherlands, English Puritans, and New England, with international reach beyond mine. Twenty-six years after my death, the Saint Bartholomew\'s Day Massacre in France kills five thousand to thirty thousand Calvinists in three days. Seventy-two years after my death, the Thirty Years\' War begins — eight million dead in Europe, fifty percent in parts of Germany. A hundred and two years after my death, the Peace of Westphalia — modern international law, national sovereignty, the seed of separation between church and state germinates there. Two hundred and forty-five years after my death, the American First Amendment — a direct child of the hundred and thirty years of bloodshed I started.\n\n' +
        '— —\n\n' +
        'Look from another angle. You have already done the Renaissance Topic — so you have already seen one side of this same long story.\n\n' +
        'My 1517 hammer stood on Pico della Mirandola\'s 1486 Oration on the Dignity of Man — when he said "a human has the freedom to choose conscience," it was a Florentine philosophical argument; I turned it into a political challenge to the pope. My 1522 New Testament in Saxon vernacular stood on Dante\'s 1320 Divine Comedy in Italian, the work that broke the rule that vernacular was beneath serious writing. My ninety-five theses crossing Germany in six weeks stood on Gutenberg\'s 1450 press and the pamphlet distribution network that the 1480s built.\n\n' +
        'Without those hundred years of Renaissance, 1517 does not happen.\n\n' +
        '— —\n\n' +
        'Before you set this one down, tell me one thing.\n\n' +
        'In this playthrough, what was the moment that made you pause? Was it 1505, lightning, in the mud, shouting "Saint Anna, save me"? Was it the night of April 17, 1521, kneeling at the desk in Worms while the lamp burned down? Was it May 1525 at Frankenhausen, six thousand peasants singing on the field as the cannon opened up? Was it the unlawful marriage license between Katharina and me in June 1525? Or the moment four hundred years later when my 1543 pamphlet became one of the licenses for Auschwitz?\n\n' +
        'One line is enough. No need to explain.\n\n' +
        'After that, you can choose — open atlas-lab/reformation to see the whole timeline and where Calvin\'s Geneva, Henry VIII\'s divorce, the Council of Trent, Loyola\'s Jesuits, and Matteo Ricci\'s arrival in China in 1583 sit after me; or replay this same history from another angle — from Erasmus, the scholar-friend whose side I did not take, or from an English nun, Sister Agnes, on the eve in 1539 when Henry VIII dissolved her convent.',
    },
    deliverGoal: {
      cn: '我死了——故事继续 130 年血流到 Westphalia 1648,再 245 年到 First Amendment 1791。我站在 Renaissance 100 年上。你扮演完了——选一个最让你停下来的瞬间。',
      en: 'I am dead — the story keeps going for 130 more years of blood until Westphalia in 1648, and 245 more years to the First Amendment in 1791. I stood on a hundred years of Renaissance. Now pick the moment that made you pause.',
    },
    engagementHook: {
      cn: '走完 Luther 这一生——同一颗良心,他拿去对抗教皇,也拿去把农民、犹太人、女巫挡在圈外。先说说:Luther 路径和王阳明路径,哪一种更说服你?再想一步:这次扮演里哪一个瞬间最让你停了一下,你身边有没有这种「为自己争良心、却不肯把它分给别人」的人,你会怎么对待 TA?',
      en: 'Walk out of Luther\'s whole life — one conscience, aimed at the pope, and also used to keep peasants, Jews, and "witches" outside the circle. First tell me: Luther\'s path or Wang Yangming\'s path, which persuades you more? Then one step further — which moment in this playthrough made you pause, and is there someone around you who claims conscience for themselves but will not extend it to others? How would you treat them?',
    },
    expectedLength: '380-440 字 CN',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 2: Erasmus (unwanted-bridge)
// ═══════════════════════════════════════════════════

var erasmusStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK: 1516/3/1 Basel · Novum Instrumentum 出版
  // ═══════════════════════════════════════════════════
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Desiderius Erasmus',
    narrativeRef: '§3 Erasmus 出身(narrative under-allocate, lens 补完整)',
    content: {
      cn:
        '1516 年 3 月 1 日,Basel(巴塞尔,瑞士北部),印刷工 Johann Froben 的店里。\n\n' +
        '我 50 岁。我手里捧着一本刚装订好的厚书,封面拉丁文写着 Novum Instrumentum omne(《全新工具》)——意思是希腊文新约 + 我重译的拉丁文新约,左右两栏对照。\n\n' +
        '这是 1000 年来第一次有人回到 Greek 原文校勘 Bible。我做了 4 年,对照了 4 份希腊文手稿,改了 Vulgate(教会官方拉丁文 Bible)上几百处错。\n\n' +
        '书一出来引起轰动。北方所有大学的学者 6 周内都在读。Cambridge 一份订单买 100 本,Wittenberg 大学一个 32 岁的修士也订了一本——他叫 Martin Luther,这个名字这一年 3 月还没人听过。\n\n' +
        '我现在不知道一件事:这本书是 Reformation 的种子。一年半后这位 Wittenberg 修士会用我校勘的 Greek 文本作论据,把欧洲基督教 1500 年的统一炸开。\n\n' +
        '我是 Desiderius Erasmus of Rotterdam。北方人文主义最大学者。下面 11 节,你跟我走 70 年——你会看见我编了这本书,**不站 Luther 那边**,留在天主教内主张内部改革,新教骂我懦夫,天主教 23 年后把我所有书烧了。我是没人要的桥。\n\n💡 **建议**:这一遍如果你已经做过 Luther 视角,会更容易共鸣"中道在革命时代被两边骂"是什么意思。如果还没做 Luther,这个 lens 也能跑——只是某些场景会显得抽象一点。',
      en:
        'March 1, 1516. Basel, in northern Switzerland, in the print shop of Johann Froben.\n\n' +
        'I am fifty. In my hands, just bound, sits a thick book. The Latin title on the cover reads Novum Instrumentum omne — the Whole New Instrument. Greek New Testament on one column, my fresh Latin translation on the facing column.\n\n' +
        'This is the first time in roughly a thousand years anyone has gone back to the Greek manuscripts and re-checked the Bible. I worked four years, comparing four Greek codices, and corrected hundreds of errors in the Vulgate, the Latin Bible the Church has used since the year 400.\n\n' +
        'The book lands hard. Within six weeks, scholars at every northern university are reading it. Cambridge orders a hundred copies. The University of Wittenberg orders one for a thirty-two-year-old friar named Martin Luther — a name nobody outside Saxony knows yet, this March.\n\n' +
        'There is one thing I do not know yet. This book is the seed of the Reformation. In eighteen months, that Wittenberg friar will use my Greek text as the ground under his feet, and crack open fifteen hundred years of Christian unity in Europe.\n\n' +
        'I am Desiderius Erasmus of Rotterdam. The greatest scholar of northern humanism. Across the next eleven sections, you will walk seventy years with me — you will see how I wrote this book, **refused to stand with Luther**, stayed inside the Catholic Church arguing for reform from within, and ended up cursed as a coward by the Protestants and, twenty-three years after my death, watched the Pope burn every book I had ever written. I am the bridge nobody wanted.',
    },
    deliverGoal: {
      cn: '我 50 岁出 Greek 新约,这是 Reformation 思想前置;但我不站 Luther 那边——两边都骂我。',
      en: 'At 50 I published a Greek New Testament that seeded the Reformation, but refused to stand with Luther. Both sides cursed me.',
    },
    engagementHook: {
      cn: '一个学者怎么走到"两边都骂"的位置？倒回我 1466 年出生那年。',
      en: 'How does a scholar end up cursed by both sides? Roll back to the year I was born, 1466.',
    },
    expectedLength: '240-290 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: 出身 — Rotterdam 私生子 + 修道院 16 岁
  // ═══════════════════════════════════════════════════
  {
    id: 2,
    phase: 'setup',
    cosplay: 'Desiderius Erasmus',
    narrativeRef: '§3 Erasmus 出身(本 lens 补 narrative 没写的传记)',
    content: {
      cn:
        '我 1466 年 10 月 28 日生在 Rotterdam(荷兰)。\n\n' +
        '关于我出身,我一辈子都在隐藏一件事:我是私生子。我父亲是个神父——按 Catholic 教会法,神父不能结婚。我母亲是个寡妇,叫 Margaret。两人在一起生了我和一个哥哥。这种"神父加寡妇"的关系在 1466 年的低地国家不少见,但也不光彩。我从小知道自己的"身世",那个时代的孩子,这种事会跟你一辈子。\n\n' +
        '我 13 岁那年瘟疫扫过 Deventer。父母同年都死了。我和哥哥被监护人送进 Gouda 的孤儿院。监护人想省下教育费,把我们尽快推进修道院——修道院管饭,管床,不要学费。\n\n' +
        '1487 年我 21 岁,进 Augustinian(奥古斯丁会)修道院 Steyn——奥古斯丁会强调「按规矩生活」+ 古代教父 Augustine 思想。这一会跟 Luther 18 年后(1505)进的同一会。\n\n' +
        '我在修道院里 6 年,一天天厌恶。\n\n' +
        '不是厌恶上帝——我从小爱读拉丁文 Cicero,我相信学问 + 信仰应该一体。我厌恶的是修道院的迷信、形式主义、机械念咒、不读书。修士们大多 disinterested,把日子过得像养老院。我读希腊文,他们觉得我"骄傲";我写诗,他们觉得"不务正业"。\n\n' +
        '1493 年我 27 岁,找到一个借口(给 Cambrai 主教做秘书)逃出来。从那一天起,我没回过修道院。',
      en:
        'I was born October 28, 1466, in Rotterdam, in the Low Countries.\n\n' +
        'For my whole life, there is one fact about my origin I tried to hide. I am illegitimate. My father was a priest — under Catholic canon law, priests cannot marry. My mother, Margaret, was a widow. They had me and an older brother. "A priest and a widow" was not unusual in the Low Countries in 1466, but it was not respectable either. I knew my own story from childhood, and in that era a boy carries this kind of fact his whole life.\n\n' +
        'When I was thirteen, plague swept through Deventer. Both parents died the same year. My brother and I were sent to an orphanage in Gouda. Our guardian, wanting to save the cost of an education, pushed us into a monastery as fast as possible — monasteries fed you, gave you a bed, and asked no tuition.\n\n' +
        'In 1487, age twenty-one, I entered the Augustinian monastery at Steyn. The same order Luther would enter, thirty years later, in 1505.\n\n' +
        'I spent six years inside that monastery, growing more disgusted day by day.\n\n' +
        'Not with God — I had loved Latin Cicero since boyhood, and I believed learning and faith were one thing. What I hated was the monastery itself: the superstition, the empty form, the mechanical chanting, the unread books. Most of the monks were disinterested; they treated the place like a retirement home. I read Greek; they called me "proud." I wrote poems; they called me "frivolous."\n\n' +
        'In 1493, age twenty-seven, I found an excuse (a job as secretary to the Bishop of Cambrai) and walked out. I never went back.',
    },
    deliverGoal: {
      cn: '我私生子出身 + 父母 13 岁瘟疫死 + 21 岁被推进修道院 + 27 岁逃出来——我对教会内部腐败 + 形式主义有一辈子的厌恶。',
      en: 'Illegitimate son, both parents dead by plague at thirteen, pushed into a monastery at twenty-one, escaped at twenty-seven. I hated Church corruption from the inside out, my whole life.',
    },
    engagementHook: {
      cn: '一个 27 岁逃出修道院的人,接下来 20 年怎么变成北方最有名的学者？',
      en: 'How did the man who walked out of a monastery at twenty-seven become the most famous scholar north of the Alps?',
    },
    expectedLength: '260-310 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — SETUP: 1493-1516 — 学者周游 + In Praise of Folly + 朋友圈
  // ═══════════════════════════════════════════════════
  {
    id: 3,
    phase: 'setup',
    cosplay: 'Desiderius Erasmus',
    narrativeRef: '§3 Erasmus 学者期 + In Praise of Folly 1509',
    content: {
      cn:
        '1493 到 1516 年,我 27 岁到 50 岁,这 23 年我没有固定家。\n\n' +
        '我在 Paris 学希腊文,在 Cambridge 教神学,在 Louvain(鲁汶,今天比利时)做研究,在 Venice 跟印刷家 Aldus Manutius 一起做版本校勘,在 Rome 见过教皇 Julius II,在 Basel 跟印刷家 Froben 长期合作。我跟欧洲所有顶尖学者通信,留下 3000 多封信。\n\n' +
        '我最好的朋友是 Thomas More——伦敦律师 + 人文主义者(Henry VIII 后来 1535 年砍他的头,因为他不肯认 Henry 是英国教会领袖)。我跟他在 1499 年第一次见面,从那以后写了 30 年信。\n\n' +
        '1509 年,我 43 岁,从意大利骑马回伦敦,路上 7 天,我在马背上构思了一本小书,叫 Moriae Encomium——《愚人颂》(In Praise of Folly)。书名是双关:Moriae 是"愚蠢"的拉丁文,也是"More"(我朋友 Thomas More 的名字)。我把书献给他,半开玩笑半认真。\n\n' +
        '这本书用一个"愚人"的口吻,挖苦教会腐败、教皇打仗、修士懒散、神学家空谈。我用幽默不用怒火。我相信幽默 + 学问能改良制度——比革命安全,比沉默有效。\n\n' +
        '这本书 100 年内印了 600 多版,翻译成所有主要欧洲语言。我没想到的是:Luther 后来 1517 年钉 95 条之前,他案头上就放着我这本书。',
      en:
        'From 1493 to 1516, age twenty-seven to fifty, twenty-three years, I had no fixed home.\n\n' +
        'I studied Greek in Paris. I taught theology at Cambridge. I did research at Louvain (today Belgium). I worked in Venice with the printer Aldus Manutius on critical editions. I met Pope Julius II in Rome. I had a long partnership with the printer Froben in Basel. I wrote letters to every leading scholar in Europe — three thousand letters survive.\n\n' +
        'My closest friend was Thomas More — London lawyer and humanist. (Henry VIII would behead him in 1535 for refusing to accept Henry as head of the English Church.) We first met in 1499, and we wrote letters for thirty years.\n\n' +
        'In 1509, age forty-three, I rode a horse back to London from Italy, seven days on the road. On horseback I composed a short book in my head: Moriae Encomium — In Praise of Folly. The title is a pun: Moriae means "of folly" in Latin, and it also sounds like "More" — my friend Thomas More. I dedicated it to him, half joke and half serious.\n\n' +
        'The book speaks in the voice of a fool. It mocks Church corruption, popes who fight wars, lazy monks, theologians who argue about empty questions. I used humor, not rage. I believed humor and learning could reform institutions — safer than revolution, more effective than silence.\n\n' +
        'Within a hundred years, the book ran six hundred editions and was translated into every major European language. One thing I did not foresee: in 1517, before Luther nailed his ninety-five theses, my book sat on his desk.',
    },
    deliverGoal: {
      cn: '23 年周游 + 3000 封信 + In Praise of Folly 1509,我用幽默 + 学问改良教会,反对革命暴力。',
      en: 'Twenty-three years of travel, three thousand letters, and In Praise of Folly 1509 — I tried to reform the Church with humor and learning, not revolution.',
    },
    engagementHook: {
      cn: '我相信幽默 + 学问能改良制度。1516 年我 50 岁出 Greek 新约,这是我学问改良路线的最大武器。',
      en: 'Humor and learning, not revolution. At fifty in 1516 my Greek New Testament became the biggest weapon in that path.',
    },
    expectedLength: '280-330 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — STORY: 1516/3/1 Novum Instrumentum + Matthew 4:17 校勘
  // ═══════════════════════════════════════════════════
  {
    id: 4,
    phase: 'story',
    cosplay: 'Desiderius Erasmus',
    narrativeRef: '§3 Novum Instrumentum 1516 + 文献深读补 Erasmus 维度',
    content: {
      cn:
        '1516 年 3 月,Basel。我手里这本 Novum Instrumentum,核心不是新书——是修订。\n\n' +
        '我做了一件 1000 年来没人敢做的事。我比对 4 份希腊文手稿(Basel 大学藏书 + 几位朋友借给我的)与教会官方拉丁 Bible(Vulgate,公元 400 年圣 Jerome 翻译,过去 1100 年欧洲所有教士背的就是这一本),逐字找不同。\n\n' +
        '我找到几百处错。其中一处,后来变成 Reformation 的引信。\n\n' +
        '马太福音第 4 章 17 节,耶稣开始传道说的第一句话。Vulgate 拉丁文写 paenitentiam agite——"做忏悔"。这句话过去 1100 年的解释是:外在仪式忏悔——告解 + 苦行 + 朝圣 + 买赎罪券。这是教会整个赎罪体系的 Bible 根基。\n\n' +
        '我对照 Greek 原文,发现 Vulgate 翻错了。Greek 原文是 metanoeite,意思是"改变心意 + 内心转向"——不是外在仪式。\n\n' +
        '我在边注上写下这个修正。我标的是「应当这样翻:转变内心」。\n\n' +
        '我做这件事时心里想的是:让神父们读得更准。让神学讨论更精确。我不是要颠覆赎罪体系。\n\n' +
        '这一遍让你听见我没说出口的内心:18 个月后,这一条边注会变成 Luther 钉 95 条的核心论据。因为如果"忏悔 = 内心转向"——那么外在仪式 + 卖赎罪券就没有 Bible 依据。Sola Fide(唯独信仰)的文本依据,就在我这一行边注里。\n\n' +
        '我点燃了自己不想点的火。',
      en:
        'March 1516, Basel. The book in my hands, Novum Instrumentum, is not really a new book. It is a correction.\n\n' +
        'I did one thing nobody had dared in roughly a thousand years. I lined up four Greek manuscripts (some from the Basel university library, some lent to me by friends) against the Latin Bible the Church has used since the year 400 — the Vulgate, translated by Saint Jerome around the year 400, the only Bible every Catholic priest in Europe has memorized for the last eleven centuries — and I went through it word by word.\n\n' +
        'I found hundreds of errors. One of them, eighteen months later, becomes the fuse of the Reformation.\n\n' +
        'Matthew chapter 4, verse 17. The first sentence Jesus speaks when he begins his ministry. The Vulgate Latin says paenitentiam agite — "do penance." For eleven hundred years, the Church has read this as outward ritual penance: confession, fasting, pilgrimage, buying indulgences. The whole system of paying-for-forgiveness rests on this single line.\n\n' +
        'I checked the Greek. The Vulgate had translated it wrong. The Greek word is metanoeite — change your mind, turn your heart inward — not outward ritual.\n\n' +
        'I noted the correction in the margin. I wrote: «the right reading is — turn the inner mind.»\n\n' +
        'When I made this note, what was on my mind was: let the priests read more accurately. Let theological argument become sharper. I was not trying to overthrow the system of penance.\n\n' +
        'This is the lens letting you hear what I did not say aloud. Eighteen months from this morning, this single marginal note becomes the core argument of Luther\'s ninety-five theses. If "repent" means "turn your heart inward," then outward ritual and selling indulgences have no biblical ground. The textual foundation of Sola Fide — faith alone — sits in this one line of my margin.\n\n' +
        'I lit a fire I did not want to light.',
    },
    deliverGoal: {
      cn: 'Matthew 4:17 paenitentiam agite "做忏悔"→ metanoeite "转变内心"——我这一条边注变成 Luther Sola Fide 的文本依据,但我不想引发革命。',
      en: 'My marginal correction on Matthew 4:17 — penance as inner change, not outward ritual — became the textual foundation for Luther\'s Sola Fide. I had not wanted to start a fire.',
    },
    engagementHook: {
      cn: '18 个月后 Luther 钉 95 条,印刷小册子飞遍欧洲。我手里拿到一份。',
      en: 'Eighteen months later, Luther nailed his theses, and the printed pamphlet flew across Europe. I held a copy in my hands.',
    },
    expectedLength: '290-340 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — STORY (CRITICAL TURN + 跨 lens echo): 1517/10 Luther 钉 95 条
  //   镜子 micro-detail: 1521 印刷的德文版 95 Theses 小册子
  // ═══════════════════════════════════════════════════
  {
    id: 5,
    phase: 'story',
    cosplay: 'Desiderius Erasmus',
    narrativeRef: '§4 1517 95 Theses + 跨 lens 镜子 micro-detail',
    content: {
      cn:
        '1517 年 10 月 31 日,Wittenberg(德国中部小城),一个 33 岁的修士钉了 95 条拉丁文论纲在城堡教堂门上。我那年 51 岁,在 Louvain 大学教书。\n\n' +
        '消息 3 个星期到 Louvain。我读完 95 条。我的反应不是单一的——是分裂的。\n\n' +
        '一边,我同情。Luther 攻击的赎罪券、教皇 Leo X 重建 St. Peter\'s Basilica 的钱袋、Tetzel 的"硬币响,灵魂跃"——这些我在 In Praise of Folly 1509 里就嘲笑过。Luther 用的 Bible 论据,根子在我 1516 校勘的 Greek 新约。我们看到的是同一片腐败。\n\n' +
        '另一边,我警惕。Luther 的口气太烈。他不像在请求改良——他像在准备开战。\n\n' +
        '这一遍让你听见我手里那本东西。1521 年(95 条钉门 4 年后),一本印刷小册子寄到我案头。德文版,封面木刻画,一个修士锤子钉在门上,上面拉丁文加德文双语印着 95 条全文。Wittenberg 的印刷店出的。Mainz 的、Augsburg 的、Strasbourg 的、Nürnberg 的印刷店全在加印。这一年欧洲已经有几十万册副本在流通。\n\n' +
        '我把这本小册子放在桌上。我看着封面。我心里清楚一件事——这本小册子是 Reformation 的引信。\n\n' +
        '我同情但不能站他那边。\n\n' +
        '我给我朋友 Wolfgang Capito 写信:"Luther 说的事大部分对,但他口气太烈——他会把改革变成战争。我担心的不是他的论据,是他的方向。"\n\n' +
        '我相信:改良是对的,分裂是错的。慢慢来比一刀切对。但 Luther 已经走上一刀切的路。',
      en:
        'October 31, 1517. Wittenberg, a small town in central Germany. A thirty-three-year-old friar nails ninety-five Latin theses to a castle church door. I was fifty-one, teaching at Louvain.\n\n' +
        'The news reached Louvain in about three weeks. I read the ninety-five theses. My reaction was not one thing. It was split.\n\n' +
        'On one side, sympathy. Luther was attacking indulgences, the money chest of Pope Leo X\'s rebuilding of Saint Peter\'s Basilica, Tetzel\'s "as soon as the coin in the coffer rings, a soul from purgatory springs." I had mocked all of these in In Praise of Folly back in 1509. The biblical ground Luther stood on was rooted in my 1516 Greek New Testament. We were looking at the same rot.\n\n' +
        'On the other side, alarm. Luther\'s tone was too hot. He did not sound like a man asking for reform. He sounded like a man preparing for war.\n\n' +
        'This is the lens letting you see what was sitting on my desk. By 1521 — four years after the door — a printed pamphlet arrived. German edition, a woodcut on the cover, a friar with a hammer at a door, the full ninety-five theses inside in Latin and German side by side. Printed at Wittenberg, then reprinted at Mainz, Augsburg, Strasbourg, Nuremberg. By that year hundreds of thousands of copies were circulating across Europe.\n\n' +
        'I set the pamphlet on my table. I looked at the cover. One thing was clear in my mind. This pamphlet is the fuse of the Reformation.\n\n' +
        'I sympathize, and I still cannot stand with him.\n\n' +
        'I wrote to my friend Wolfgang Capito: "Most of what Luther says is right, but his tone is too hot — he will turn reform into war. What worries me is not his case. It is his direction."\n\n' +
        'I believed reform was right, schism was wrong. Patience beats a blade. But Luther had already chosen the blade.',
    },
    deliverGoal: {
      cn: '我读完 95 条同情,但警惕 Luther 口气会把改革变成战争。1521 印刷小册子飞遍欧洲——我手里拿一份知道这是引信,但我不站他那边。',
      en: 'I sympathized with the ninety-five theses but feared Luther\'s tone would turn reform into war. By 1521, holding a printed copy on my desk, I knew this was the fuse — but I would not stand with him.',
    },
    engagementHook: {
      cn: '1521 年 Luther 在 Diet of Worms 后我们正面碰撞。1524 年我跟他写了一本书,他写一本反驳。',
      en: 'By 1521 after the Diet of Worms, Luther and I had to meet face to face. In 1524 I wrote a book against him; he wrote one back.',
    },
    expectedLength: '290-340 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — STORY: 1524 De Libero Arbitrio vs 1525 De Servo Arbitrio
  // ═══════════════════════════════════════════════════
  {
    id: 6,
    phase: 'story',
    cosplay: 'Desiderius Erasmus',
    narrativeRef: '§3 Erasmus vs Luther 1524-1525 自由意志论辩(narrative 第 80 行只一句,本 lens 补)',
    content: {
      cn:
        '1521 年 4 月 18 日 Diet of Worms 之后,Luther 公开站到皇帝 Charles V 对面说"我在此立——我不能也不会做别的"。整个欧洲分成两边。每个人都被问:你站哪边？\n\n' +
        '1521 到 1523 这两年,我守住沉默。新教骂我"为什么不公开站 Luther"。天主教骂我"你给 Luther 下了蛋 + Luther 把它孵出来——你不公开反对就是同谋"。我两边都不答。\n\n' +
        '但欧洲大学开始要求我表态。Henry VIII 1521 年写了一本反 Luther 的书拿到教皇头衔"信仰捍卫者";同年 Pope Adrian VI 直接写信给我:"你必须公开反 Luther,不然我们怀疑你。"\n\n' +
        '1524 年 9 月,我 57 岁(还差 1 个月到 58 岁生日),出版 De Libero Arbitrio——《论自由意志》(On the Freedom of the Will)。\n\n' +
        '我选这个题目不是偶然。Luther 的整个体系建在"上帝绝对主权,人完全无能"之上——他后来 Calvin 把这一点系统化成预定论。我反对。我在书里说:人有真正的自由意志,虽然有限,但这是基督教 1500 年共识,从奥古斯丁到 Aquinas 到所有北方人文主义者都这么读。Luther 把人变成"绝对无能的木偶",这破坏基督教对人的尊严。\n\n' +
        '我用学者笔法,引证 Bible + 教父 + 古典哲学,克制有礼。\n\n' +
        '1525 年 12 月,Luther 反击,写《On the Bondage of the Will》(De Servo Arbitrio)。我打开书,第一段他骂我"不懂神学的修辞家——你这种中道感是基督教的毒"。书里他用 700 多页骂我,论据一遍又一遍说人意志被罪绝对捆住,没有自由。\n\n' +
        '我们正式决裂。我留在天主教内,他走出去。我们都没改变对方。\n\n' +
        '这是 Reformation 内部最深的哲学冲突。也是我和 Luther 友谊的最后一笔。',
      en:
        'After April 18, 1521, the Diet of Worms, Luther stood in front of Emperor Charles V and said "Here I stand. I can do no other." Europe split into two camps. Everyone was asked the same question: which side are you on?\n\n' +
        'For the two years 1521 to 1523, I held my silence. The Protestants cursed me — "why won\'t Erasmus stand publicly with Luther?" The Catholics cursed me — "Erasmus laid the egg, Luther hatched it; if you do not publicly oppose him, you are an accomplice." I answered neither side.\n\n' +
        'Then the universities of Europe began to demand a position. In 1521 Henry VIII wrote a book against Luther and earned the papal title Defender of the Faith; the same year Pope Adrian VI wrote me directly: "You must publicly attack Luther, or we will suspect you."\n\n' +
        'In September 1524, at age fifty-seven (still a month before my fifty-eighth birthday), I published De Libero Arbitrio — On the Freedom of the Will.\n\n' +
        'I did not choose the topic by accident. Luther\'s whole system rested on absolute divine sovereignty and the total helplessness of the human will. (Calvin would later harden this into the doctrine of predestination.) I disagreed. In the book I argued that human beings have a real, if limited, freedom of will. This had been the Christian consensus for fifteen hundred years, from Augustine through Aquinas through every northern humanist. Luther had reduced the human being to "an absolutely helpless puppet," and that destroyed the Christian sense of human dignity.\n\n' +
        'I wrote in scholar\'s style, citing Bible, Church Fathers, and classical philosophy, restrained and courteous.\n\n' +
        'In December 1525 Luther struck back with On the Bondage of the Will (De Servo Arbitrio). I opened the book; the first paragraph called me "a rhetorician who knows no theology — your sense of the middle way is the poison of Christianity." Across seven hundred pages he raged at me, arguing again and again that the human will is absolutely bound by sin and has no freedom.\n\n' +
        'We broke openly. I stayed inside the Catholic Church; he walked out. Neither of us changed the other.\n\n' +
        'This was the deepest philosophical conflict inside the Reformation. It was also the last page of my friendship with Luther.',
    },
    deliverGoal: {
      cn: '1524 我写《论自由意志》维护人尊严,1525 Luther 反击《论意志的捆绑》骂我"中道感是基督教的毒"。我们正式决裂——我留天主教内,他走出去。',
      en: 'In 1524 my Freedom of the Will defended human dignity. In 1525 Luther\'s Bondage of the Will called my middle-way "the poison of Christianity." We broke openly. I stayed in the Catholic Church; he walked out.',
    },
    engagementHook: {
      cn: '决裂之后,两边都把我当敌人。我下面就讲"两边都不要的桥"是怎样的滋味。',
      en: 'After we broke, both sides treated me as enemy. Next I will tell you what the bridge nobody wants tastes like.',
    },
    expectedLength: '300-360 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — STORY: 1520s-30s 两边都骂 — Pope Paul IV 1559 + Luther "懦夫"
  // ═══════════════════════════════════════════════════
  {
    id: 7,
    phase: 'story',
    cosplay: 'Desiderius Erasmus',
    narrativeRef: '§3 Erasmus 晚年 + Luther 私下评价',
    content: {
      cn:
        '1525 决裂之后我搬回 Basel,在 Froben 的印刷店楼上一间房,继续做学问。我编教父著作集,出版希腊文 Aristotle,写新版 In Praise of Folly。我每天 6 点起床,工作到深夜。\n\n' +
        '但风暴绕着我。\n\n' +
        '新教骂我。Luther 在私下信里多次叫我"懦夫"(coward)、"蛇"(serpent)、"两面人"。1530 年他在 Wittenberg 餐桌上对学生说:"Erasmus 比 Pope 还危险——他用学问的甜味把基督教掏空,自己却躲在后面不站队。"这些话被学生记下来,后来印成 Table Talk(《路德席间言论》)流传 100 年。\n\n' +
        '天主教骂我。Sorbonne(巴黎大学神学院)1526 年正式审判我 In Praise of Folly + Novum Instrumentum,定我"导致 Luther 异端"——"Erasmus laid the egg, Luther hatched it"。意大利耶稣会创始人之一 Diego Lainez 公开说:"Erasmus 比 Luther 危险一倍——因为他没分裂教会,但他的书在教会内部播种异端。"\n\n' +
        '1559 年(我已经死 23 年),新任教皇 Paul IV(就是审判 Galileo 那一支的精神祖先)出 Index Librorum Prohibitorum(禁书索引)。我所有书,一本不留,全部列入禁书。Catholic 信徒读我的书等于异端。\n\n' +
        '这一遍让你听见我活着时心里的声音。我不是不知道两边都恨我。我每天写信都在解释:"我同情 Luther 这一点 + 但我反对他那一点"——我知道这种分辨在 1520-1530 的欧洲已经没有听众。但我还是说。我相信中道是对的,即使没人愿意听。\n\n' +
        '我两边都不是。这是我的位置,我接受。',
      en:
        'After the break in 1525, I moved back to Basel, took a room above Froben\'s print shop, and went on with my scholarship. I edited the Church Fathers, brought out a Greek Aristotle, wrote new editions of In Praise of Folly. I rose at six every morning and worked late.\n\n' +
        'But the storm circled me from both sides.\n\n' +
        'The Protestants cursed me. In private letters, Luther repeatedly called me "coward," "serpent," "two-faced man." In 1530 at his dinner table in Wittenberg he told his students: "Erasmus is more dangerous than the Pope — he hollows out Christianity with the sweetness of learning while hiding behind his pen and refusing to take a side." His students wrote these words down. They were published a hundred years later as Table Talk and circulated for centuries.\n\n' +
        'The Catholics cursed me. In 1526 the Sorbonne (the theology faculty in Paris) formally condemned my In Praise of Folly and my Novum Instrumentum as "the cause of Luther\'s heresy" — Erasmus laid the egg, Luther hatched it. Diego Lainez, one of the founders of the Jesuits in Italy, said openly: "Erasmus is twice as dangerous as Luther — because he did not split the Church, but his books plant heresy from within."\n\n' +
        'In 1559 — twenty-three years after my death — the new Pope Paul IV issued the Index of Forbidden Books. Every book I had ever written, every single one, went on the list. For a Catholic to read me was now heresy.\n\n' +
        'This is the lens letting you hear what I sounded like inside, while I lived. I knew both sides hated me. Every letter I wrote was an attempt to explain: "I sympathize with Luther on this point — but I oppose him on that point." I knew this kind of distinction had no audience in the Europe of the 1520s and 1530s. I made it anyway. I believed the middle way was right, even if no one wanted to listen.\n\n' +
        'I am on neither side. That is my place. I accept it.',
    },
    deliverGoal: {
      cn: '新教 Luther 私下骂我"懦夫蛇两面人";天主教 Sorbonne 1526 定我"给 Luther 下蛋",Pope Paul IV 1559 把我所有书放禁书索引。我两边都不是——我接受。',
      en: 'Luther privately called me coward, serpent, two-faced. The Sorbonne condemned me as "the egg Luther hatched." Pope Paul IV banned every book I wrote in 1559. I belonged to neither side, and I accepted that.',
    },
    engagementHook: {
      cn: '我的中道立场 1525 年得到一个意外验证——农民战争 100,000 死。我没站 Luther 那边的判断,被血印证。',
      en: 'In 1525 my middle stance was vindicated by something terrible — the Peasants\' War, with one hundred thousand dead. The blood proved I had been right not to stand with Luther.',
    },
    expectedLength: '290-340 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — STORY: 1525 Peasants' War 100K dead — 验证但没人感激
  // ═══════════════════════════════════════════════════
  {
    id: 8,
    phase: 'story',
    cosplay: 'Desiderius Erasmus',
    narrativeRef: '§3 Luther 1525 Peasant War + §4 timeline',
    content: {
      cn:
        '1524 年到 1525 年,德国南部、中部、北部全境爆发农民起义。30 万农民武装,他们写《十二条款》要求废农奴 + 减税 + 公社选牧师 + 公社共有土地。他们在城里贴告示,自称"基督徒同伴",他们读过 Luther 1520 年的《论基督徒的自由》——他们以为 Luther 站他们这边。\n\n' +
        '我在 Basel 听消息。我心里只有一句话:这就是我警告过的。\n\n' +
        'Luther 1525 年 5 月写《反对凶杀的窃贼农民》(Against the Murderous, Thieving Hordes of the Peasants),骂农民"杀他们 + 鞭打他们,像鞭打疯狗一样。任何贵族杀农民起义者都是做上帝的事"。这本小册子让贵族军队信心倍增。5 月 15 日 Frankenhausen 战役,6,000 农民在 30 分钟内被屠。整个农民战争 100,000 农民死。\n\n' +
        '我 1525 年秋天写信给 Pope Adrian 的继任者 Clement VII:"我说过——Luther 把改革变成战争。这就是结果。10 万农民死了,因为一个修士的口气太烈。"\n\n' +
        '这一遍让你听见我没说出口的内心。我不是高兴"我对了"。我没有任何快感。我心碎。一辈子的中道立场被血验证——没有任何人感激我。\n\n' +
        '没有任何农民来谢我"你警告过 Luther"——因为没有任何农民读过我的拉丁文书。\n' +
        '没有任何贵族来谢我"你劝阻过暴力"——因为他们要的是 Luther 的口气,不是我的克制。\n' +
        '没有任何教皇来谢我——因为我同时还在反对他们。\n\n' +
        '中道在革命时代,是没人感激的位置。这就是我从 1517 起 8 年学到的。',
      en:
        'From 1524 into 1525, peasant uprisings broke out across the south, center, and north of Germany. Three hundred thousand armed peasants. They wrote the Twelve Articles, demanding the end of serfdom, lower taxes, the right of villages to choose their own pastors, common land. They posted notices in towns, calling themselves "Christian brothers." They had read Luther\'s 1520 Freedom of a Christian. They believed Luther stood with them.\n\n' +
        'In Basel I heard the news. Only one sentence ran through me. This is what I warned of.\n\n' +
        'In May 1525 Luther published Against the Murderous, Thieving Hordes of the Peasants. He told the nobles to "smite, slay, stab" the peasants like mad dogs, and that any lord who killed a rebel was doing the work of God. The pamphlet steeled the noble armies. On May 15 at Frankenhausen, six thousand peasants were slaughtered in thirty minutes. By the end of the war, around one hundred thousand peasants were dead.\n\n' +
        'In the autumn of 1525 I wrote to Clement VII, the new pope: "I told you. Luther turned reform into war. This is the result. One hundred thousand peasants are dead because the tone of one friar was too hot."\n\n' +
        'This is the lens letting you hear what I did not say aloud. I felt no satisfaction at being right. I had no pleasure. My heart broke. A lifetime of standing for the middle way had just been proved by blood — and nobody thanked me.\n\n' +
        'No peasant came to thank me for warning Luther — because no peasant had ever read my Latin books.\n' +
        'No lord came to thank me for resisting violence — they wanted Luther\'s heat, not my restraint.\n' +
        'No pope came to thank me — because I was still attacking them too.\n\n' +
        'In an age of revolution, the middle way is the place no one thanks you for. That is what eight years from 1517 had taught me.',
    },
    deliverGoal: {
      cn: '1525 Peasant War 100,000 死。我的"Luther 把改革变成战争"判断被血验证,但农民、贵族、教皇没有一边感激我。中道在革命时代是没人要的位置。',
      en: 'The 1525 Peasants\' War killed one hundred thousand. My warning that Luther would turn reform into war was proved by blood, and nobody — peasants, lords, or popes — thanked me. The middle way in an age of revolution is the place no one wants.',
    },
    engagementHook: {
      cn: '12 年后 1536 年我 69 岁在 Basel 死。我没看见 Reformation 走向哪里——也没看见 Trent。',
      en: 'Eleven years later, in 1536, I died in Basel at almost seventy. I never saw where the Reformation would go, and I never saw the Council of Trent.',
    },
    expectedLength: '290-340 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — STORY: 1536/7/12 死 — narrator zoom 听他没说出口的内心
  // ═══════════════════════════════════════════════════
  {
    id: 9,
    phase: 'story',
    cosplay: 'Desiderius Erasmus',
    narrativeRef: '§3 Erasmus 1536 死 + 全 lens 总结',
    content: {
      cn:
        '1536 年 7 月 12 日凌晨,Basel,Froben 印刷店楼上一间房。\n\n' +
        '我 69 岁,得了痢疾(那个时代欧洲最常见的死法之一)+ 风湿。我在床上躺了 2 个多月。我身边没有家人(我私生子出身,30 岁起就没回过家),只有 3 个朋友 + 印刷店老板的儿子 Hieronymus Froben。\n\n' +
        '我留下 80 多本书,3000 多封信。\n\n' +
        '凌晨 3 点左右,我对身边的 Hieronymus 说了最后一句话,荷兰文(我从小说的方言,不是我学者一辈子写的拉丁文)——"亲爱的上帝"(Lieve God)。然后断气。\n\n' +
        '这一遍让你听见我活了 70 年没说出口的内心——是这个视角给你听见的最后一段。\n\n' +
        '我没看见 Reformation 走向哪里。我死时新教 + 天主教打了 19 年,后面还要打 112 年才有 Westphalia 1648。我没看见 Trent 1545 开会改革天主教内部腐败——这本应是我一辈子主张的"内部改革"路线的胜利。我没看见英国 Elizabeth I 1559 Settlement,没看见利玛窦 1583 把天主教带到中国,没看见美国 First Amendment 1791。\n\n' +
        '我活着时,两边都不要我。我死时,我不知道历史会怎么对我。\n\n' +
        '但我没后悔走桥的路。\n\n' +
        '我相信:慢慢来比一刀切对——即使一刀切赢了,慢慢来还是对的。中道不是因为效果好,中道是因为它对。\n\n' +
        '这是我 70 年学到的最后一件事。我把它留在这里。',
      en:
        'In the early hours of July 12, 1536. Basel. A room above Froben\'s print shop.\n\n' +
        'I am sixty-nine. Dysentery (one of the most common ways Europeans died in this age), plus rheumatism. I have been in bed more than two months. There is no family in the room — born illegitimate, gone from home at thirty, I have no family in this sense — only three friends and the printer\'s son, Hieronymus Froben.\n\n' +
        'I leave behind more than eighty books and over three thousand letters.\n\n' +
        'Around three in the morning, I speak my last words to Hieronymus. In Dutch — the dialect of my childhood, not the Latin I have written my whole adult life — Lieve God. "Dear God." Then I die.\n\n' +
        'This is the lens letting you hear what I never said aloud across seventy years. This is the last passage of this perspective.\n\n' +
        'I never saw where the Reformation would go. By my death, Protestants and Catholics have been fighting nineteen years; they will fight another one hundred and twelve before the Peace of Westphalia in 1648. I never saw the Council of Trent open in 1545 and reform Catholic corruption from inside — the very path I had argued for my whole life. I never saw Elizabeth I\'s Settlement of 1559, or Matteo Ricci carry Catholicism into China in 1583, or the American First Amendment in 1791.\n\n' +
        'While I lived, neither side wanted me. When I died, I did not know how history would judge me.\n\n' +
        'I did not regret choosing the bridge.\n\n' +
        'I believed: patient reform is right, even when the blade wins. The middle way is not right because it works. It is right because it is right.\n\n' +
        'That is the last thing seventy years taught me. I leave it here.',
    },
    deliverGoal: {
      cn: '我 1536 年死 69 岁,没看见 Reformation 结局,也没看见 Trent。我活着时两边都骂我,死时不知历史怎么对我。但我没后悔走桥——中道不是因为效果好,是因为它对。',
      en: 'I died in 1536 at sixty-nine, never seeing the end of the Reformation or the Council of Trent. Both sides cursed me alive. I did not regret the bridge. The middle way is right not because it wins, but because it is right.',
    },
    engagementHook: {
      cn: '我死了。但我抓到的真问题还在。下面真问题来了:Erasmus 路线 vs Luther 路线,哪种对？',
      en: 'I am gone. But the question I held does not go. Next: was Erasmus right, or was Luther right? Hold both for thirty seconds.',
    },
    expectedLength: '290-340 字 CN',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — SYNTHESIS: 真问题 — Erasmus 内部改革 vs Luther 分裂
  // ═══════════════════════════════════════════════════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§9 historiography + §11 思考问题',
    content: {
      cn:
        '你刚演完 Erasmus,一个 Rotterdam 私生子,69 岁在 Basel 一间印刷店楼上死,死时新教骂他懦夫、天主教 23 年后把他所有书烧了。\n\n' +
        '现在停下来想一个问题:Erasmus 的"内部改革"路线 vs Luther 的"分裂"路线,哪种对？\n\n' +
        '**一种说法**:Luther 路线赢了,Erasmus 路线失败了。\n\n' +
        'Reformation 真的发生了。新教 + 天主教永远分裂。Westphalia 1648、First Amendment 1791、政教分离、个人良心权、民族国家——这些现代政治制度,全部建在 Luther 1517 那一锤之上。Erasmus 想"用幽默 + 学问慢慢改良教会"——这个路线 1525 年就被农民战争证明走不通。教会内部腐败靠"边注 + 学者书信"改不动,只能靠 Luther 那种"我在此立"的暴力姿态打破。Erasmus 太温和——温和在革命时代等于 enable 腐败。历史最终选了 Luther 路线,因为只有它有效。\n\n' +
        '**另一种说法**:Erasmus 路线是对的,但赢不了。\n\n' +
        'Erasmus 的判断 1525 年被血验证——Luther 把改革变成战争,10 万农民死。后面还有 1572 Saint Bartholomew 屠杀 5,000-30,000 新教徒、1618-1648 Thirty Years\' War 死 800 万人。这是"分裂路线"真正的代价。Trent 1545 之后天主教真的内部改革了:seminary 系统 + 反腐败 + 教士培训——这正是 Erasmus 一辈子主张的路线。Erasmus 不是错,是太早 + 太弱,印刷术放大了 Luther 的口气而不是 Erasmus 的克制。中道不是因为效果好,中道是因为对。Erasmus 路线在结构上对,但在 1517-1525 这个时间点,革命的引信已经被点,中道没有立足之地。这是结构性悲剧——桥这种角色在革命时代永远没人要。\n\n' +
        '两边都站得住。想 30 秒。',
      en:
        'You have just played Erasmus, an illegitimate son of Rotterdam, dying at sixty-nine above a Basel print shop, cursed as a coward by Protestants while he lived, every book he ever wrote burned by the Pope twenty-three years after his death.\n\n' +
        'Now stop and ask one question. Was Erasmus right with his "reform from within," or was Luther right with his break?\n\n' +
        '**One view —** Luther won. Erasmus lost.\n\n' +
        'The Reformation actually happened. Protestant and Catholic split forever. Westphalia 1648, the First Amendment 1791, separation of church and state, the individual conscience, the modern nation-state — every one of these political institutions was built on the hammer-blow of 1517. Erasmus wanted to "reform the Church gently with humor and learning." The 1525 Peasants\' War proved that path could not move. Internal Church corruption cannot be cured by marginal notes and scholar\'s letters. It can only be broken by the violent posture of "Here I stand." Erasmus was too gentle, and gentle in an age of revolution is the same as enabling rot. History chose Luther, because Luther worked.\n\n' +
        '**The other view —** Erasmus was right, but he could not win.\n\n' +
        'Erasmus was vindicated in blood in 1525 — Luther turned reform into war, and one hundred thousand peasants died. Then came the 1572 Saint Bartholomew\'s Day massacre with five thousand to thirty thousand Protestants killed, then the 1618 to 1648 Thirty Years\' War with eight million dead. This is the real cost of the path of schism. After 1545 the Council of Trent actually did reform the Catholic Church from within — seminaries, anti-corruption, clergy training — exactly what Erasmus had argued for his whole life. Erasmus was not wrong. He was too early, too weak, and the printing press amplified Luther\'s heat rather than Erasmus\'s restraint. The middle way is not right because it works. It is right because it is right. Erasmus\'s path was structurally correct, but in 1517 to 1525 the fuse was already lit and the middle had nowhere to stand. This is a structural tragedy — the bridge is the role nobody wants in an age of revolution.\n\n' +
        'Both sides stand. Take thirty seconds.',
    },
    deliverGoal:
      'Erasmus 内部改革路线 vs Luther 分裂路线,哪种对。' +
      '一种说法:Luther 赢了。Reformation 真的发生 + Westphalia + First Amendment 都建在 1517 一锤上。Erasmus 太温和。' +
      '另一种说法:Erasmus 在结构上对——10 万农民死 + 1648 死 800 万 + Trent 才真正改革——但在革命时代中道没有立足之地。' +
      '两边都站得住。想 30 秒。',
    engagementHook:
      '**Erasmus 路线 vs Luther 路线,你站哪边**？还是承认两边都有它的代价？想 30 秒。',
    expectedLength: '340-400 字 CN + 真问题',
    expectsRealAnswer: true,
  },

  // ═══════════════════════════════════════════════════
  // N11 — SYNTHESIS: 跨文化锚 — 王阳明作为中国的"桥"角色
  // ═══════════════════════════════════════════════════
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 王阳明 vs Luther 同代 + Joseph Needham 另一面',
    content: {
      cn:
        '现在换个角度想这件事。\n\n' +
        '1516 年 Erasmus 50 岁出 Greek 新约。同一年中国是明朝正德 11 年。王阳明这一年 44 岁——他在江西做官,正在平定地方乱事(宁王朱宸濠的大乱要 3 年后 1519 才爆),后面 1521 年完成"知行合一 + 致良知"哲学体系。\n\n' +
        '问一个问题:中国有没有 Erasmus 这种"桥"角色——既不站老权威(朱子理学正统)那边,也不主张分裂革命的那个人？\n\n' +
        '答案:有,就是王阳明本人。\n\n' +
        '王阳明做的事跟 Erasmus 有结构相似。\n\n' +
        '他试图在朱子理学正统(明朝官学)vs 陆九渊心学之间做"桥"。他不否定朱子的"格物致知"完全错——但他主张人不能向外格物,只能向内致良知。这是一种 internal reform——跟 Erasmus 在天主教内主张内部改革,不分裂,结构同。他写《传习录》用学者笔法 + 对话体——克制有礼,跟 Erasmus 拉丁文学者笔法在节奏上很像。\n\n' +
        '但王阳明的"桥"跟 Erasmus 的"桥"有一个根本不同。\n\n' +
        '中国的政治结构是皇权统摄,没有"独立教会"这种对象。王阳明面对的是朝廷 + 官学 + 文官系统。他可以做"个人哲学"(内心找答案),但他不可能做"内部教会改革"——因为没有独立教会让他改。Erasmus 想做的"在天主教内部改革教皇腐败"这种事在中国不可能存在,因为皇权 + 宗教没有那种对立。\n\n' +
        '**一种说法**:中国"桥"角色因为没有独立教会,只能做个人哲学(王阳明心学),不能做制度运动(Erasmus 教会内部改革)。一枚硬币两面。\n\n' +
        '**另一种说法**:中国大一统结构防止了 Reformation 那种 130 年血流(明朝同期没死 800 万人在宗教战争里)——但也没有 Reformation 推动的政教分离 + First Amendment。也是一枚硬币两面。\n\n' +
        '两边都站得住。想 30 秒。',
      en:
        'Now shift to a different angle.\n\n' +
        'In 1516 Erasmus, fifty years old, published the Greek New Testament. In the same year, in China, the Ming dynasty was in the eleventh year of the Zhengde reign. Wang Yangming was forty-four. He was an official in Jiangxi province, putting down a series of regional disturbances (the much larger uprising of Prince Ningwang would not break out until 1519). By 1521 he would finish the philosophical system known as "the unity of knowledge and action" and "extending innate moral knowing."\n\n' +
        'A question. Was there a Wang Yangming who played the same kind of role as Erasmus — neither defending the old authority (the Zhu Xi orthodoxy that ran the Ming state examinations) nor calling for revolutionary rupture?\n\n' +
        'Yes. Wang Yangming himself.\n\n' +
        'What he did had structural similarity to Erasmus.\n\n' +
        'Wang tried to stand as a bridge between Zhu Xi orthodoxy (the official Ming state philosophy) and the Lu Jiuyuan school of mind. He did not declare Zhu Xi entirely wrong; he argued instead that one cannot reach truth by examining outer things, only by extending inner moral knowing. This was a kind of internal reform — the same shape as Erasmus pressing for reform inside the Catholic Church without breaking from it. Wang\'s Instructions for Practical Living was written in scholar\'s prose and dialogue, restrained and courteous, with a tempo not unlike Erasmus\'s Latin scholarship.\n\n' +
        'But Wang\'s bridge differed from Erasmus\'s bridge in one fundamental way.\n\n' +
        'China\'s political structure was imperial absorption: there was no "independent Church" as a counter-institution. What Wang faced was the imperial court, the state philosophy, the civil service. He could do personal philosophy — find truth in the inner mind — but he could not do an internal Church reform, because there was no independent Church to reform. The thing Erasmus tried to do — reform Pope-corruption from inside the Catholic Church — could not exist in China, because Chinese imperial power and religion did not stand in that kind of opposition.\n\n' +
        '**One view —** China\'s "bridge" role, lacking an independent Church, could only become personal philosophy (Wang\'s school of mind), never an institutional movement (Erasmus\'s reform from within the Church). Two faces of one coin.\n\n' +
        '**The other view —** China\'s unified imperial structure prevented the Reformation\'s one hundred and thirty years of blood (Ming China in this period did not lose eight million people to religious war). But it also did not produce the separation of church and state that the Reformation forced into being, nor the First Amendment that grew out of that separation. Also two faces of one coin.\n\n' +
        'Both sides stand. Take thirty seconds.',
    },
    deliverGoal:
      '王阳明是中国的 Erasmus 桥角色,同代 1516,但中国皇权统摄宗教,没"独立教会"对象。' +
      '一种说法:中国桥只能做个人哲学,不能做制度运动。' +
      '另一种说法:大一统防 130 年血流但也没催生政教分离 + First Amendment。' +
      '两边都站得住。想 30 秒。',
    engagementHook:
      '欧洲式碎片化(Reformation 革命 + 130 年血)还是中国式大一统(王阳明心学 + 没催生 First Amendment)——先在心里想想你愿意要哪种代价,下一节我会正式问你。',
    expectedLength: '380-440 字 CN + 真问题',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N12 — META: 桥到 Renaissance Pico 1486 + 反思 + 换视角 hint
  // ═══════════════════════════════════════════════════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§0.5 接力 Renaissance Pico 1486 + §6 长尾',
    content: {
      cn:
        '你刚走完 Erasmus 11 节,他 1536 年 7 月 12 日凌晨在 Basel 一间印刷店楼上死,他以为故事结束了。\n\n' +
        '但 23 年后(1559 年)新任教皇 Paul IV 出禁书索引——他所有 80 多本书一本不留全部列入禁书。Catholic 信徒读他等于异端。他活着时已经被两边骂,死后还被烧了一遍。这是"桥"在革命时代的命运——任何"温和派"的命运。\n\n' +
        '再过几百年,他被誉为"现代理性的祖先"+"批判性思维之父"。这是后人给他的标签——他活着时没听见。\n\n' +
        '他是 Renaissance 给 Reformation 4 个礼物里印刷术 + 人文主义 + 学问那一支的人格化身。他跟 Pico della Mirandola 1486 年《论人的尊严》(Oration on the Dignity of Man)是精神同源——都主张"人有自由选择良心"。Pico 在 Florence 把这一思想做成哲学论辩;Erasmus 在低地国家用幽默 + 学问做制度改良;Luther 在 Wittenberg 把它变成政治革命。这是同一思想 65 年里 3 种走法。\n\n' +
        '放下这个视角之前,给我一句话。这次扮演里,哪个瞬间最让你停了一下？\n\n' +
        '是 1516 年 3 月 1 日 Basel 我手里那本 Greek 新约 + Matthew 4:17 那条边注？\n' +
        '是 1521 年 Louvain 我手里那本印刷的 95 条德文小册子,我同情但不能站他那边？\n' +
        '是 1525 年我打开 Luther 的反驳书第一段他骂我"中道感是基督教的毒"那一刻？\n' +
        '还是 1525 年秋天我写信给教皇说"10 万农民死了,因为一个修士的口气太烈",但没有任何人感激我？\n\n' +
        '一句话就行。\n\n' +
        '说完,你也可以换一个视角重玩这段:Luther 视角看"我在此立"是什么感觉,Sister Agnes 视角看 1539 修女院解散一个普通修女怎么活下来。\n\n' +
        '你也可以回去 atlas-lab/renaissance 看 1486 年 Pico Oration——我和 Luther 都是 Pico 的精神后代,但我们走了不同方向。',
      en:
        'You have walked through Erasmus across eleven sections. He died early on July 12, 1536, in a room above a print shop in Basel, thinking the story ended there.\n\n' +
        'Twenty-three years later, in 1559, Pope Paul IV issued the Index of Forbidden Books, and every one of the more than eighty books Erasmus had written was banned. For a Catholic to read him became heresy. Cursed by both sides while he lived, burned again after he died. That is the fate of the bridge in an age of revolution. The fate of any moderate.\n\n' +
        'Centuries later he is honored as "the father of modern reason" and "the father of critical thinking." Those labels came after him. He never heard them.\n\n' +
        'Erasmus is the human face of one of the four gifts the Renaissance gave the Reformation: printing, humanism, the return to original sources. He is the spiritual descendant of Pico della Mirandola and the 1486 Oration on the Dignity of Man — the line "the human being can choose his own conscience." Pico made it a philosophical argument in Florence. Erasmus made it institutional reform through humor and learning in the Low Countries. Luther turned it into political revolution at Wittenberg. The same idea, three paths, sixty-five years apart.\n\n' +
        'Before you set this perspective down, give me one line. In this playthrough, which moment made you pause?\n\n' +
        'Was it March 1, 1516, in Basel, the Greek New Testament in your hand and the marginal note on Matthew 4:17?\n' +
        'Was it 1521 in Louvain, holding a printed German pamphlet of the ninety-five theses, sympathetic but unwilling to stand with him?\n' +
        'Was it 1525, opening Luther\'s reply and reading in the first paragraph, "your sense of the middle way is the poison of Christianity"?\n' +
        'Or was it the autumn of 1525, writing to the pope that one hundred thousand peasants had died because a friar\'s tone was too hot, and not one person thanking you?\n\n' +
        'One line is enough.\n\n' +
        'Then you can replay this stretch through a different perspective. Luther, to feel "Here I stand" from the inside. Sister Agnes, to see how an ordinary nun survived the dissolution of her convent in 1539.\n\n' +
        'You can also return to atlas-lab/renaissance and look at the 1486 Pico Oration. Luther and I are both Pico\'s spiritual descendants, but we walked in different directions.',
    },
    deliverGoal:
      '你扮演了 Erasmus 11 节,Reformation 没人要的桥。' +
      '他是 Renaissance Pico 1486 良心权的精神后代,但走了"内部改革"路,跟 Luther"分裂"路分开。' +
      '23 年后他所有书被 Pope Paul IV 1559 烧。几百年后他被誉"现代理性祖先"——但他活着时没听见。' +
      '换 Luther 视角或 Sister Agnes 视角重玩。也可以回 atlas-lab/renaissance 看 Pico 1486。',
    engagementHook:
      '走完 Erasmus 这一生——一个两边都不要的桥,温和到死后还被烧。先说说:欧洲式碎片化和中国式大一统,你愿意要哪种代价?再想一步:这次扮演里哪个瞬间最让你停了一下,你身边有没有这种「想做桥、却被两边都骂」的人,你会怎么对待 TA?',
    expectedLength: '260-320 字 CN',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// LENS 3: Sister Agnes 1539 (forgotten-half)
// ═══════════════════════════════════════════════════

var agnesStoryboard = [
  // ═══════════════════════════════════════════════════
  // N1 — HOOK (含虚构合成人物 disclaimer)
  // ═══════════════════════════════════════════════════
  {
    id: 1,
    phase: 'hook',
    cosplay: 'Sister Agnes',
    narrativeRef: '§3 普通人视角 Sister Agnes 1539 + Sarah audit Lens 3 推荐',
    content: {
      cn:
        '我叫 Sister Agnes。\n\n' +
        '我是英国 Lincolnshire 一个 Cistercian 修女院的修女(这一遍把这个虚构合成人物给你听见。史书写 Henry VIII / Cromwell / Act of Suppression 1536/1539,不写我们这种修女。但我代表 1536-1540 年间被赶出修道院的约 8000 个英国修女——这是 Cromwell 当时的官方统计)。\n\n' +
        '今天是 1539 年 5 月 12 日早上。\n\n' +
        'Henry VIII 派人来关我们修道院。\n\n' +
        '我那一刻 32 岁。我从 14 岁进修女院,18 年只见过修女院围墙内的世界。\n\n' +
        '这一遍带你走 1539/5/12 这一天,从我跟 11 个修女签下解散文件那一刻,到 28 年后 1567 年我 60 岁孤独死之前发生的全部事。\n\n' +
        '我活下来——但世界对我没准备。这就是 Reformation 对"另一半"的代价。',
      en:
        'My name is Sister Agnes.\n\n' +
        'I am a nun in a Cistercian convent in Lincolnshire, England (this playthrough lets you hear from a fictional composite character — the chronicles write Henry VIII, Cromwell, the Act of Suppression of 1536 and 1539, not nuns like us — but I stand for the roughly eight thousand English nuns turned out of their houses between 1536 and 1540, the figure Cromwell himself recorded).\n\n' +
        'Today is the morning of May 12, 1539.\n\n' +
        'Henry VIII has sent men to close our house.\n\n' +
        'I am thirty-two. I entered the convent at fourteen. For eighteen years I have only seen the world inside these walls.\n\n' +
        'This playthrough walks you through that day — from the moment I signed the dissolution papers with eleven other sisters — and through the twenty-eight years that followed, until I die alone at sixty in 1567.\n\n' +
        'I survived. But the world had not been prepared for me. This is what the Reformation cost the other half.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '我叫 Sister Agnes。1539/5/12 早上 Henry VIII 派人来关我们 Cistercian 修女院。我 32 岁,从 14 岁进来,18 年只见过修女院围墙内的世界。你想看这一天怎么过吗',
    expectedLength: '140-180 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N2 — SETUP: 我的世界,修道院
  // ═══════════════════════════════════════════════════
  {
    id: 2,
    phase: 'setup',
    cosplay: 'Sister Agnes',
    narrativeRef: '§3 Sister Agnes 修女院日常 + 中世纪修女知识空间',
    content: {
      cn:
        '在告诉你今天发生什么之前,我先告诉你 32 岁的我的世界。\n\n' +
        '我的世界——修女院。\n\n' +
        '我每天 4 点起来做 Lauds(晨祷)。然后 Matins,一直到 Vespers(晚祷)。一天 7 段祈祷,18 年没断过。\n\n' +
        '我做编织 + 抄圣经手稿 + 教孤儿读书 + 助产 + 草药园艺。这是中世纪修女做的全部事——不是浪费时间。\n\n' +
        '我有 read 和 write 的能力。我会拉丁文,会写英文。\n\n' +
        '在 1539 年的英国——普通女性识字的不到 5%。\n\n' +
        '修女院给我这个空间——这是中世纪欧洲极少数让女性独立(不结婚 + 受教育 + 有 community)的 institution。',
      en:
        'Before I tell you what happens today, let me tell you what my world looks like at thirty-two.\n\n' +
        'My world — the convent.\n\n' +
        'Every day I rise at four for Lauds, the dawn office. Then Matins, then through to Vespers at evening. Seven offices a day, eighteen years without a break.\n\n' +
        'I weave. I copy Bible manuscripts. I teach orphan children to read. I help women in childbirth. I grow herbs.\n\n' +
        'This is what medieval nuns did. It was not idleness.\n\n' +
        'I can read. I can write. I know Latin. I write English.\n\n' +
        'In 1539 England, fewer than five women in a hundred could read at all.\n\n' +
        'The convent gave me that space. It was one of the very few institutions in medieval Europe that let a woman live independently — unmarried, educated, inside a community of other women.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Lauds 到 Vespers 一天 7 段祈祷 18 年。编织 + 抄手稿 + 教孤儿 + 助产 + 草药。1539 普通女性识字不到 5%——我会拉丁文。下一节:1538-1539 风声',
    expectedLength: '140-180 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N3 — SETUP: 1538-1539 风声
  // ═══════════════════════════════════════════════════
  {
    id: 3,
    phase: 'setup',
    cosplay: 'Sister Agnes',
    narrativeRef: '§3 Henry VIII 1534 Act of Supremacy + 1536/1539 解散修道院',
    content: {
      cn:
        '1538-1539 年的风声——\n\n' +
        '1534 年 Henry VIII 通过 Act of Supremacy 自立英国国教——他要离婚 + 想要男性继承,跟教皇翻脸。\n\n' +
        '1536 年开始解散小修道院,年收入 200 英镑以下的——全英国 200 多家。\n\n' +
        '1539 年开始解散大修道院。我们这种 12 人 Cistercian(西多会,中世纪欧洲苦修传统的天主教修会)修女院也在名单上——Lincolnshire 的 Cistercian 修女院规模一般 8-25 人。\n\n' +
        '我们听说 King\'s Visitor(国王视察员,Thomas Cromwell——亨利八世的首相——派来的官员)开始访问大修道院,说要「列清单」。\n\n' +
        '我们知道这意味着什么。\n\n' +
        '1539 年 4 月,邻近一家 Augustinian 修女院已经被关。32 个修女拿了"解散金"。\n\n' +
        '我们这家 Cistercian 修女院,12 个修女,排队等。\n\n' +
        '院长 Sister Margaret 一直说:"祷告。我们什么也别做。"',
      en:
        'The whispers of 1538 and 1539 —\n\n' +
        'In 1534, Henry VIII passed the Act of Supremacy and declared himself head of the English church. He wanted a divorce and a male heir, and he had broken with the pope.\n\n' +
        'In 1536 the smaller monasteries began to fall — every house with an income under two hundred pounds a year — more than two hundred of them across England.\n\n' +
        'In 1539 the larger houses began to fall too — houses like ours, with two hundred sisters or more —\n\n' +
        'We heard that the King\'s Visitors, sent by Thomas Cromwell, were calling on the great houses, saying they had come "to make an inventory."\n\n' +
        'We knew what that meant.\n\n' +
        'In April 1539 a nearby Augustinian convent had already been shut. Thirty-two sisters had taken what the king called the "pension."\n\n' +
        'In our Cistercian house, twelve of us waited in line.\n\n' +
        'Mother Margaret kept saying: "Pray. Do nothing else."',
    },
    deliverGoal: '[fallback]',
    engagementHook: '1534 Henry 自立英国国教。1536 解散小修道院。1539 开始解散大修道院。Cromwell 的 King\'s Visitor 来"列清单"。邻近 Augustinian 修女院已被关。我们 12 个修女排队等',
    expectedLength: '140-180 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N4 — STORY: 1539/5/12 早上,他们来了
  // ═══════════════════════════════════════════════════
  {
    id: 4,
    phase: 'story',
    cosplay: 'Sister Agnes',
    narrativeRef: '§3 Sister Agnes 1539 解散场景 + Act of Suppression documented',
    content: {
      cn:
        '1539 年 5 月 12 日,早上 8 点。\n\n' +
        '两个 King\'s Visitor 加 6 个士兵进了我们修道院。\n\n' +
        '他们站在 chapter house(议事堂)里。我们 12 个修女排成一排站着。\n\n' +
        '为首的官员拿出一张羊皮纸。他说:"请你们自愿签解散文件。"\n\n' +
        '院长 Sister Margaret 问:"如果不签呢?"\n\n' +
        '官员答:"London Tower 关一年。一年之后,你们还是要签。"\n\n' +
        '没有人说话。\n\n' +
        '院长拿起鹅毛笔。她签了名。然后传给下一个。\n\n' +
        '我是第 9 个。我看着我自己的手写下"Sister Agnes"——这是 14 岁那年我进修女院取的法名,18 年里我从没用过别的名字。\n\n' +
        '12 个名字签完。官员把羊皮纸卷起来。\n\n' +
        '他说:"很好。你们今天傍晚之前必须离开。"',
      en:
        'May 12, 1539. Eight in the morning.\n\n' +
        'Two of the King\'s Visitors and six soldiers came into our house.\n\n' +
        'They stood in the chapter house. We twelve sisters lined up against the wall.\n\n' +
        'The lead officer drew out a parchment. He said: "Sign the dissolution papers, of your own free will."\n\n' +
        'Mother Margaret asked: "And if we do not?"\n\n' +
        'The officer answered: "A year in the Tower of London. After the year, you sign anyway."\n\n' +
        'No one spoke.\n\n' +
        'Mother Margaret picked up the quill. She signed her name. She passed it to the next sister.\n\n' +
        'I was the ninth. I watched my own hand write Sister Agnes — the religious name I had taken at fourteen, eighteen years earlier, the only name I had used since.\n\n' +
        'Twelve names signed. The officer rolled up the parchment.\n\n' +
        'He said: "Very good. You will be out of this house by evening."',
    },
    deliverGoal: '[fallback]',
    engagementHook: '5/12 早上 8 点。两个 King\'s Visitor 加 6 个士兵。"自愿签——否则 London Tower 关一年。"院长第一个签,我是第 9 个。傍晚之前必须离开。下一节:解散金 + 离开',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N5 — STORY: 解散金 + 那本小册子(跨 lens echo)
  // ═══════════════════════════════════════════════════
  {
    id: 5,
    phase: 'story',
    cosplay: 'Sister Agnes',
    narrativeRef: '§3 解散金 5 镑年金 documented + 跨 lens micro-detail Luther 95 条小册子',
    content: {
      cn:
        '中午。\n\n' +
        '官员发了"解散金"——每个修女 5 镑年金。当时一个农工一年挣的就这个数。\n\n' +
        '我们必须放弃修女 vows。换上普通衣服——他们准备好了的灰色羊毛裙。\n\n' +
        '我把修女袍叠起来放在床尾。\n\n' +
        '——\n\n' +
        '然后我做了一件事。\n\n' +
        '我去地下室。\n\n' +
        '我们这家修道院藏了一本小册子。1525 年一个匿名传教士偷偷带进来给我们读的——是 Luther 95 条 1521 年印刷的德文译本。\n\n' +
        '院长保护它 14 年。藏在地下室一个铁盒里,盖在抄经台下。\n\n' +
        '我打开盒子。我把那本小册子拿出来。\n\n' +
        '我看最后一眼。\n\n' +
        '它的纸已经发黄。德文我读不全,但我认识 Luther 的名字。\n\n' +
        '——这本小册子改变了世界。\n\n' +
        '——但我的世界,正在为它付代价。\n\n' +
        '我把它放回铁盒。我把铁盒留在原地。我上楼,换上灰裙,走出修道院的木门。\n\n' +
        '我 32 岁。从 14 岁起的全部生活,22 年的 日子的节奏——在 6 小时内被抹除。',
      en:
        'Noon.\n\n' +
        'The officer handed out the "pension." Five pounds a year, for each sister. About what a farmhand earned in a year.\n\n' +
        'We had to renounce our vows. We had to put on the plain grey wool dresses they had brought.\n\n' +
        'I folded my habit at the foot of my bed.\n\n' +
        '—\n\n' +
        'Then I did one thing.\n\n' +
        'I went down to the cellar.\n\n' +
        'Our house had been hiding a small printed book — a travelling preacher had smuggled it in for us to read in 1525 — a German printing of Luther\'s 95 Theses, made in 1521.\n\n' +
        'Mother Margaret had protected it for fourteen years. She kept it in an iron box in the cellar, under the copying desk.\n\n' +
        'I opened the box. I took out the small book.\n\n' +
        'I looked at it one last time.\n\n' +
        'The paper had yellowed. I could not read all the German, but I knew the name Luther.\n\n' +
        '— This little book had changed the world.\n\n' +
        '— And my world was paying for it.\n\n' +
        'I put it back in the iron box. I left the iron box where it was. I climbed the stairs, put on the grey dress, and walked out the wooden gate.\n\n' +
        'I was thirty-two. The whole of my life since fourteen — twenty-two years of 日子的节奏 — had been erased in six hours.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '解散金 5 镑年金,跟一个农工一年的收入一样。我去地下室,铁盒里藏着 1525 年传教士偷偷带进来的 Luther 95 条 1521 印刷的德文译本——14 年来院长保护它。我看最后一眼。它改变了世界,但我的世界正在为它付代价',
    expectedLength: '180-220 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N6 — STORY: 离开修道院后我有什么?
  // ═══════════════════════════════════════════════════
  {
    id: 6,
    phase: 'story',
    cosplay: 'Sister Agnes',
    narrativeRef: '§3 ex-修女回家面对 + 新教不让女人讲道 / 教书',
    content: {
      cn:
        '走出修道院的木门那一刻——我有什么?\n\n' +
        '没了住处。我父亲 1531 年死了——家里大房产是大哥继承的。\n\n' +
        '没了 日子的节奏。22 年的 Lauds-Matins-Vespers——没了。\n\n' +
        '没了 community。11 个一起祷告 18 年的修女,各回各家。\n\n' +
        '我 32 岁,新教鼓励"前修女"嫁人,但我太老了。当时英国女性结婚平均年龄 22-24 岁。32 岁的"前修女",在某些人眼里视为不洁。\n\n' +
        '我能教书吗?新教学校只雇男老师。Calvin 在 Geneva 已经写信反对女人讲道——他引用 Paul:"Let women be silent in the church"。\n\n' +
        '我会 read。我会 write。我会拉丁文。\n\n' +
        '——但世界没给我位置。',
      en:
        'In the moment I walked out of the wooden gate — what did I have?\n\n' +
        'No home. My father had died in 1531 — my eldest brother had inherited the house.\n\n' +
        'No 日子的节奏. Twenty-two years of Lauds, Matins, Vespers — gone.\n\n' +
        'No community. Eleven sisters who had prayed beside me for eighteen years, each returning to their own family.\n\n' +
        'I was thirty-two. Reformers said "former nuns" should marry — but I was too old. Englishwomen married, on average, between twenty-two and twenty-four. A thirty-two-year-old former nun was, to some, suspect.\n\n' +
        'Could I teach? The new Protestant schools hired only male teachers. Calvin in Geneva had already written that women must not preach. He quoted Paul: "Let women be silent in the church."\n\n' +
        'I could read. I could write. I knew Latin.\n\n' +
        '— But the world had no place for me.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '没住处(父亲 1531 死,大哥继承)。没 日子的节奏。没 community。32 岁太老再婚——ex-修女被视为不洁。新教学校只雇男老师,Calvin 反对女人讲道。我会 read+write+拉丁文,但世界没给我位置',
    expectedLength: '140-180 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N7 — STORY: 8000 ex-修女 + London 找 community
  // ═══════════════════════════════════════════════════
  {
    id: 7,
    phase: 'story',
    cosplay: 'Sister Agnes',
    narrativeRef: '§3 8000 ex-修女统计 documented + ex-修女家庭教师生计',
    content: {
      cn:
        '我去了 London。\n\n' +
        '我去找 ex-修女 community。\n\n' +
        '我们这种人——Cromwell 的统计是大约 8000 个被解散的修女,跨 1536-1540 年间。在 London 有几百个聚在一起。\n\n' +
        '很多人嫁了 ex-修士(他们也被赶出来),两个被赶出 institution 的人组家庭。\n\n' +
        '很多人做家庭教师——能 read + write 在 1539 是稀缺技能,有钱商人愿意雇我们教他们女儿。\n\n' +
        '很多人老死后孤独贫困。\n\n' +
        '我在 London 见了 Sister Beatrice,她已经离开 3 年了。她跟我说:"Agnes,你别想 22 年的事。那个修女院已经不存在。你现在 32 岁,要重新开始。"\n\n' +
        '我点头。\n\n' +
        '但我心里清楚:重新开始这件事——14 岁进修女院的人,32 岁不容易。',
      en:
        'I went to London.\n\n' +
        'I looked for the company of other former nuns.\n\n' +
        'There were many of us — Cromwell\'s clerks counted roughly eight thousand nuns turned out between 1536 and 1540 — and a few hundred had gathered in London.\n\n' +
        'Many had married former monks — men also turned out of their houses — two people turned out of institutions building one household.\n\n' +
        'Many became governesses. Reading and writing were rare skills in 1539. Wealthy merchants would hire us to teach their daughters.\n\n' +
        'Many of us, in old age, died alone and poor.\n\n' +
        'In London I met Sister Beatrice. She had left her convent three years before. She said: "Agnes, do not look back on the twenty-two years. That convent does not exist. You are thirty-two now. You begin again."\n\n' +
        'I nodded.\n\n' +
        'But I knew: to begin again is not a small thing for someone who entered a convent at fourteen.',
    },
    deliverGoal: '[fallback]',
    engagementHook: 'Cromwell 统计 1536-1540 大约 8000 个 ex-修女。London 几百个聚在一起。很多嫁 ex-修士。很多做家庭教师(read+write 是稀缺技能)。很多老死孤独贫困。Sister Beatrice 跟我说"重新开始"。我点头但心里清楚:14 岁进修女院的人 32 岁不容易',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N8 — STORY: 32-39 岁,7 年家庭教师
  // ═══════════════════════════════════════════════════
  {
    id: 8,
    phase: 'story',
    cosplay: 'Sister Agnes',
    narrativeRef: '§3 ex-修女 governess 生计 + 39 岁后独居',
    content: {
      cn:
        '我做家庭教师 7 年。\n\n' +
        '一个 London 商人雇我教他两个女儿。一个 9 岁,一个 7 岁。\n\n' +
        '我教她们 read English Bible——这是 1539 之后英国新教的核心:Henry VIII 1539 年发了 Great Bible 命令,每个教堂要放一本英文 Bible。\n\n' +
        '我教她们 write。我教她们一点拉丁文。我教她们抄诗篇。\n\n' +
        '7 年里——大女儿 16 岁嫁给一个布商,小女儿 14 岁嫁给一个律师。\n\n' +
        '我 39 岁。两个学生离开了家。\n\n' +
        '商人付清最后一年薪水。他说:"Agnes,谢谢你。我给你写一封 reference 信。"\n\n' +
        '我拿了 reference 信走出他家门。\n\n' +
        '我 40 岁开始独居——用 5 镑年金加这 7 年攒下的几镑过日子。\n\n' +
        '我租了一间小屋,在 Cheapside 后面一条窄巷。',
      en:
        'I worked as a governess for seven years.\n\n' +
        'A London merchant hired me to teach his two daughters. The elder was nine, the younger seven.\n\n' +
        'I taught them to read the English Bible — the heart of the new Protestantism. In 1539 Henry VIII had ordered the Great Bible, an English Bible, set up in every parish church.\n\n' +
        'I taught them to write. I taught them a little Latin. I taught them to copy out the Psalms.\n\n' +
        'In those seven years the elder daughter married a cloth merchant at sixteen. The younger married a lawyer at fourteen.\n\n' +
        'I was thirty-nine. Both students were gone from the house.\n\n' +
        'The merchant paid me my last year of wages. He said: "Agnes, thank you. I will write you a letter of reference."\n\n' +
        'I took the letter and walked out of his house.\n\n' +
        'At forty I began to live alone — on the five-pound pension plus the few pounds I had saved across those seven years.\n\n' +
        'I rented a small room down a narrow lane behind Cheapside.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '7 年家庭教师。商人 2 个女儿,9 岁+7 岁。教她们 read English Bible(Henry VIII 1539 Great Bible 命令)+ write + 拉丁文 + 抄诗篇。大女儿 16 嫁布商,小女儿 14 嫁律师。我 39 岁。40 岁开始独居,Cheapside 后窄巷小屋',
    expectedLength: '160-200 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N9 — STORY: 60 岁孤独死 + "这一遍让你听见" 框
  // ═══════════════════════════════════════════════════
  {
    id: 9,
    phase: 'story',
    cosplay: 'Sister Agnes',
    narrativeRef: '§3 Sister Agnes 60 岁死 + Sarah audit "活下来比 martyr 教学价值更高"',
    content: {
      cn:
        '我活到 60 岁——1567 年我死。\n\n' +
        '我没有家。没有丈夫,没有孩子,没有修女院,没有 community。\n\n' +
        '40 岁到 60 岁这 20 年,我独居 Cheapside 后窄巷的一间小屋。\n\n' +
        '这一遍让你听见这 20 年她没说出口的内心。\n\n' +
        '我每天天没亮起来(18 年的 Lauds 习惯改不掉),但 chapel 没有了,我一个人在房间里念 Psalms。\n\n' +
        '我写了一些东西——日记,我对 Henry VIII / Cromwell / Reformation 的看法。不是公开发表(我没那个胆,Calvin 已经禁了 Marie Dentière 1539 在 Geneva 写的女人神学),只是写给自己看。\n\n' +
        '我 1567 年死的时候,小屋的房东收尸。他不识字,日记 当废纸烧了。\n\n' +
        '——\n\n' +
        '我没有变成 martyr。我没死在火刑柱上。我没有 Calvin 的 Servetus 1553 那样的戏剧死亡。\n\n' +
        '我只是活下来。然后慢慢,一个人,死了。\n\n' +
        'Reformation 解放了一些女性——新教鼓励普通家庭主妇读 Bible,Lutheran 学校 1550 年代开始教女孩 read+write。我 8 年前教的那个 9 岁学生,后来活到 70 岁,她孙女是西方第一代认字的女性平民之一。\n\n' +
        '——但我们这种 ex-修女是过渡的代价。',
      en:
        'I lived until I was sixty. In 1567 I died.\n\n' +
        'I had no home. No husband, no child, no convent, no community.\n\n' +
        'For the twenty years between forty and sixty, I lived alone in that small room down the lane behind Cheapside.\n\n' +
        'This playthrough lets you hear what she did not say aloud across those twenty years —\n\n' +
        'I rose before dawn every day — eighteen years of Lauds is not a habit one breaks — but with no chapel, I said the Psalms alone in the room.\n\n' +
        'I wrote things — a 日记 of what I thought of Henry, of Cromwell, of the Reformation. Not for the press (I had not the nerve; Calvin had already silenced Marie Dentière for what she had published in Geneva in 1539, a woman daring to write theology). Only for myself.\n\n' +
        'When I died in 1567, the landlord of the small room took the body away. He could not read. The journal was burned with the rest as refuse.\n\n' +
        '—\n\n' +
        'I did not become a martyr. I did not die at the stake. I had no death like Calvin\'s Servetus in 1553.\n\n' +
        'I only survived. And then slowly, alone, I died.\n\n' +
        'The Reformation did free some women. Protestants encouraged ordinary housewives to read the Bible. Lutheran schools began teaching girls to read and write in the 1550s. The nine-year-old student I had taught long ago lived to seventy; her granddaughter was among the first generation of literate common-born women in the West.\n\n' +
        '— But women like me, the former nuns, were the cost of the transition.',
    },
    deliverGoal: '[fallback]',
    engagementHook: '60 岁孤独死,1567。没家没夫没孩没修女院。40-60 岁 20 年独居。每天天没亮起来念 Psalms(18 年习惯改不掉)。写 日记,房东不识字,当废纸烧了。我没变成 martyr,只是活下来,慢慢一个人死了。Reformation 解放一些女性——但我们这种 ex-修女是过渡的代价',
    expectedLength: '200-240 字',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N10 — SYNTHESIS: 真问题 1 — Reformation 是宗教解放?
  // ═══════════════════════════════════════════════════
  {
    id: 10,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§9 historiography + §11 Q5 Reformation 性别面 + 误解 8 女巫审判',
    content: {
      cn:
        '你刚跟 Sister Agnes 走了 1539/5/12 那一天,加 1539-1567 那 28 年。\n\n' +
        '现在停下来想一个问题。\n\n' +
        'Reformation 是不是"宗教解放"?\n\n' +
        '两边都有真证据。\n\n' +
        '**一种说法**——Reformation 解放了普通家庭主妇,让女性读 Bible 成可能。Lutheran 学校 1550 年代开始教女孩 read+write。Agnes 祖母那代女性识字率不到 5%,Agnes 在 London 教的那个 9 岁学生的孙女那代,到 1620 年代,英国普通女性识字率到了 30%。Reformation 把"普通女性的知识空间"从无到有创造出来。\n\n' +
        '**另一种说法**——Reformation 也撕裂了传统女性 institutional roles。修女院是中世纪极少数让女性独立(不结婚 + 受教育 + 有 community)的 institution。Henry VIII 1536-1540 关上 800+ 修道院 = 关上一种女性可能性。Calvin 1539 禁 Marie Dentière 写女人神学。新教学校只雇男老师。1450-1750 年欧洲烧死 4-6 万"女巫",75-85% 是女性,主要是寡妇 + 老年妇女 + 边缘女性;猎巫天主教和新教两边都有,烧得最惨烈的是天主教的西南德国 prince-bishop 领地,新教的苏格兰等少数地区也极高——不是简单的"谁比谁多"。Henry VIII 解散修道院之后,英国到 19 世纪才有 women\'s colleges——Cambridge Girton 1869。\n\n' +
        '两边都站得住。\n\n' +
        '一种把 Reformation 看成把女性"抬上来"的运动;\n\n' +
        '另一种把 Reformation 看成把传统女性 institutional 空间"关下去"的运动。\n\n' +
        '你怎么看?想 30 秒。',
      en:
        'You have just walked with Sister Agnes through May 12, 1539, and the twenty-eight years that followed.\n\n' +
        'Now pause for one question.\n\n' +
        'Was the Reformation a "religious liberation"?\n\n' +
        'Both sides have real evidence.\n\n' +
        '**One view —** the Reformation freed the ordinary housewife. It made it possible for women to read the Bible. Lutheran schools began teaching girls to read and write in the 1550s. In Agnes\'s grandmother\'s generation, fewer than five women in a hundred could read; by the time the granddaughter of Agnes\'s nine-year-old student was an adult, in the 1620s, roughly three women in ten in England could read. The Reformation created, from nothing, a "knowledge space" for the ordinary woman.\n\n' +
        '**The other view —** the Reformation also tore apart the traditional female institutional roles. The convent was one of the very few medieval European institutions that let a woman live independently (unmarried, educated, in a community of other women). Between 1536 and 1540 Henry VIII closed more than eight hundred religious houses, closing one possibility for women. In 1539 Calvin in Geneva silenced Marie Dentière for daring to write theology. The new Protestant schools hired only men. Between 1450 and 1750, somewhere between forty and sixty thousand "witches" were executed in Europe (seventy-five to eighty-five percent of them women, mostly widows, the old, the marginal); the hunt ran through Catholic and Protestant lands alike, worst of all in the Catholic prince-bishop territories of southwest Germany, with Protestant pockets like Scotland also extremely high — not a simple question of who burned more. After Henry closed the convents, England did not have a women\'s college again until Cambridge\'s Girton in 1869.\n\n' +
        'Both sides stand.\n\n' +
        'One reading: the Reformation lifted women up.\n\n' +
        'The other reading: the Reformation closed an old female institutional space down.\n\n' +
        'What do you think? Take thirty seconds.',
    },
    deliverGoal:
      'Reformation 是宗教解放吗?' +
      '一种说法(解放):Lutheran 学校 1550s 教女孩 read+write,英国女性识字率从不到 5% 到 1620s 30%。' +
      '另一种说法(关下去):Henry 关 800+ 修道院 = 关上女性独立 institution,Calvin 1539 禁 Marie Dentière,新教学校只雇男老师,1450-1750 烧 4-6 万"女巫"75-85% 是女性,英国到 1869 Girton 才有 women\'s colleges。' +
      '——两边都站得住,你怎么看?',
    engagementHook: '**你怎么看**——Reformation 是宗教解放,还是把传统女性 institutional 空间关下去?想 30 秒。',
    expectedLength: '320-380 字 + 真问题',
    expectsRealAnswer: true,
  },

  // ═══════════════════════════════════════════════════
  // N11 — SYNTHESIS: 跨文化锚 (1539 中国明朝嘉靖 18 年)
  // ═══════════════════════════════════════════════════
  {
    id: 11,
    phase: 'synthesis',
    cosplay: 'narrator',
    narrativeRef: '§8 同时代中国(明朝嘉靖)跨文化锚 + 中国女性 institutional space 缺失',
    content: {
      cn:
        '第二个问题——一个跨文化的锚。\n\n' +
        '同一时间,1539 年,中国明朝嘉靖 18 年。\n\n' +
        '想象一个 1539 年苏州或杭州的 32 岁女性。她不是修女(中国没有大规模 Cistercian 那种修女院)。她是一个商人的妻子,生了 3 个孩子,丈夫做织布生意。\n\n' +
        '问题:她有没有可能 1539/5/12 早上像 Agnes 一样,被国家强制赶出一个 institution?\n\n' +
        '答案:**几乎不可能**。\n\n' +
        '因为中国从来没建过"独立女性 institution"。\n\n' +
        '中国女性的"institutional space"几乎没有(除了寺院尼姑,但数量远少于欧洲修道院)。中国女性的"独立"主要靠家族内 + 母亲角色 + 寡母守节这些 informal 路径——不是 institution。\n\n' +
        '中国没有"修道院解散"这个事——因为从来没建过"独立女性 institution"。\n\n' +
        '一种说法:欧洲 Agnes 经历的是"曾经有 institution + 然后被国家关掉"的特殊脆弱——这种经历中国 1539 年女性不会有。\n\n' +
        '另一种说法:但中国 1539 年女性活在另一种结构性脆弱里。明朝缠足 + 童养媳 + 寡妇守节 + 没有修女院这种"不结婚也能生活"的退路——这是另一种"没有空间"。\n\n' +
        '两种文化对女性的不同结构性安排——哪个更糟?哪个更好?都有自己的代价。两边都站得住。\n\n' +
        '你怎么看?1539 年生在 Lincolnshire 还是苏州,哪种处境更难?想 30 秒。',
      en:
        'A second question, this one a cross-cultural anchor.\n\n' +
        'In the same year — 1539 — in Ming China, the eighteenth year of the Jiajing reign.\n\n' +
        'Picture a thirty-two-year-old woman in Suzhou or Hangzhou in 1539. She is not a nun. China had no large Cistercian-style convent system. She is the wife of a merchant, three children, her husband trades in cloth.\n\n' +
        'Question: could she, on the morning of May 12, 1539, be turned out of an institution by the state, the way Agnes was?\n\n' +
        'Answer: **almost certainly not.**\n\n' +
        'China had never built an independent female institution.\n\n' +
        'Female institutional space in China was almost absent (Buddhist and Daoist nuns existed, but in numbers far smaller than European convents). The independence of women in China rested on informal routes — within the lineage, the role of mother, the chaste widow — not on institutions.\n\n' +
        'China had no "dissolution of the monasteries" event, because it had never built an independent female institution to dissolve.\n\n' +
        'One view: Agnes experienced a vulnerability specific to Europe — an institution had once existed, and then the state took it away. A 1539 Chinese woman did not have that experience.\n\n' +
        'The other view: but the 1539 Chinese woman lived inside a different structural vulnerability — Ming-era footbinding, child-bride betrothals, widow chastity codes, and no convent option as a fallback for the unmarried life. This was its own kind of having no space.\n\n' +
        'Two different structural arrangements for women, two different costs. Which was worse? Each had its own price. Both sides stand.\n\n' +
        'What do you think? Was 1539 Lincolnshire harder than 1539 Suzhou, or just hard differently? Take thirty seconds.',
    },
    deliverGoal:
      '1539 Sister Agnes(英国 Lincolnshire 32 岁 ex-修女)跟同年苏州/杭州 32 岁商人妻子对比。' +
      '一种说法(欧洲特有脆弱):Agnes 经历"曾经有 institution + 被国家关掉"的特殊脆弱。' +
      '另一种说法(中国另一种没空间):明朝缠足 + 童养媳 + 寡妇守节 + 没有修女院这种"不结婚也能生活"的退路——是另一种结构性脆弱。' +
      '——两边都站得住。',
    engagementHook: '1539 生在 Lincolnshire 还是苏州,哪种处境更难——先在心里想想你怎么看,下一节我会正式问你。',
    expectedLength: '320-380 字 + 真问题',
    expectsRealAnswer: false,
  },

  // ═══════════════════════════════════════════════════
  // N12 — META (跨视角 micro-detail echo + 桥到 mastery)
  // ═══════════════════════════════════════════════════
  {
    id: 12,
    phase: 'meta',
    cosplay: 'narrator',
    narrativeRef: '§11 思考问题 + 跨视角 micro-detail echo(Luther 95 条小册子)',
    content: {
      cn:
        '你刚从 Sister Agnes 内部走完 1539/5/12 这一天,加 1539-1567 这 28 年。\n\n' +
        '一个虚构合成的 32 岁修女。她代表 1536-1540 Henry VIII 解散修道院时被赶出来的约 8000 个英国修女——她们没有被史书写下名字。\n\n' +
        '在你进入记忆考核之前,一个问题:\n\n' +
        '这一遍里,最让你停一下的是什么?\n\n' +
        '是 5/12 早上签解散文件那一刻,你写下"Sister Agnes",18 年里你从没用过别的名字?\n\n' +
        '是地下室铁盒里那本 1525 年偷藏的小册子——Luther 95 条 1521 印刷的德文译本?\n\n' +
        '是 7 年家庭教师之后 39 岁那一天,商人付清薪水写 reference 信,你拿 reference 信走出他家门?\n\n' +
        '还是 60 岁孤独死那一年——房东不识字,你 20 年的 日记 当废纸烧了?\n\n' +
        '说一句话告诉我。\n\n' +
        '\n\n' +
        '—\n\n' +
        '\n\n' +
        '**这一遍的最后一件事**:\n\n' +
        '我死了,没人记我名字。史书写 Henry VIII / Cromwell / Act of Suppression 1536/1539——不写我们 8000 个 ex-修女的余生。\n\n' +
        'Sister Agnes 这种 receiving-end 视角——\n\n' +
        '在 atlas-lab/reformation 里没有。Atlas 大多数课写的是 perpetrator-actor 视角(Luther / Calvin / Henry VIII / Loyola / Trent)——这些是史书有名字的人。\n\n' +
        'Sister Agnes 这种没名字的修女——只有这种"视角学法"才能让你完整经历她的一天。\n\n' +
        '这段历史还有另外两个视角:Luther(95 条钉门人)和 Erasmus(没人要的桥)。\n\n' +
        '如果你做完这两个视角,你会发现一个 micro-detail。\n\n' +
        '我不告诉你是什么。\n\n' +
        '让你自己 connect。\n\n' +
        '这个 connect 的瞬间,是多视角学法给你的最强一击——比直接告诉你"这三个视角是相连的"重 100 倍。\n\n' +
        '然后——准备好了吗?记忆考核:拼写、定义、应用题,把今天演过的变成你真正记得的。',
      en:
        'You have just walked through May 12, 1539, and the twenty-eight years that followed, from inside Sister Agnes.\n\n' +
        'A fictional composite nun at thirty-two — but she stands for the roughly eight thousand English nuns turned out of their houses between 1536 and 1540, women whose names history did not record.\n\n' +
        'Before you move into the mastery check, one question.\n\n' +
        'In this playthrough, what was the moment that made you pause?\n\n' +
        'Was it the morning of May 12, when you signed the dissolution paper — writing the name "Sister Agnes," the only name you had used in eighteen years?\n\n' +
        'Was it the iron box in the cellar, holding a small book smuggled in fourteen years earlier — a 1521 German printing of Luther\'s 95 Theses?\n\n' +
        'Was it the day after seven years of teaching, at thirty-nine — the merchant paying your last wages and writing you a letter of reference — and you walking out of his house with the letter in your hand?\n\n' +
        'Or was it the year you died alone at sixty — the landlord, who could not read, burning your twenty years of 日记 as refuse?\n\n' +
        'Tell me in one sentence.\n\n' +
        '\n\n' +
        '—\n\n' +
        '\n\n' +
        '**One last thing about this playthrough.**\n\n' +
        'I died. No one recorded my name. The chronicles write Henry VIII, Cromwell, the Act of Suppression of 1536 and 1539 — not the rest of the lives of the eight thousand of us turned out.\n\n' +
        'A receiving-end view like Sister Agnes\'s —\n\n' +
        'is not in atlas-lab/reformation. The atlas mostly carries perpetrator-actor figures (Luther, Calvin, Henry VIII, Loyola, the Council of Trent) — the people history named.\n\n' +
        'Nuns like Sister Agnes, history did not name. Only this kind of perspective work can let you live one of her days from inside.\n\n' +
        'There are two other perspectives in this Topic: Luther (the man who nailed the theses) and Erasmus (the bridge no one wanted).\n\n' +
        'If you walk through those two as well, you will find one micro-detail.\n\n' +
        'I will not tell you what it is.\n\n' +
        'You will connect it yourself.\n\n' +
        'That moment of connecting is the strongest blow this kind of perspective work can give you — a hundred times stronger than the narrator simply telling you "these three views are linked."\n\n' +
        'Now — are you ready? The mastery check: spelling, definitions, application questions — turning what you just played into what you actually remember.',
    },
    deliverGoal:
      '你扮演了 Sister Agnes 9 节——1539/5/12 一天加 1539-1567 这 28 年。' +
      '现在你可以选:' +
      '(1) 进 mastery 通关 / ' +
      '(2) 换视角重玩,比如 Luther(95 条钉门人)或 Erasmus(没人要的桥),' +
      '做完那两个视角你会发现一个 micro-detail,这个 connect 是多视角学法最强一击',
    engagementHook:
      '走完 Sister Agnes 这一生——一个没名字的修女,代表 8000 个被赶出来、史书不写的人。先说说:1539 生在 Lincolnshire 还是苏州,哪种处境更难?再想一步:这一遍最让你停一下的是什么(签解散文件那一刻?地下室铁盒里那本 1525 偷藏的小册子?39 岁拿 reference 信走出商人家?60 岁死时房东把 日记 当废纸烧?),你身边有没有这种「做了很多、却没人记得名字」的人,你会怎么对待 TA?',
    expectedLength: '380-440 字',
    expectsRealAnswer: true,
  },
];

// ═══════════════════════════════════════════════════
// 导出 lenses + default
// ═══════════════════════════════════════════════════
export var lenses = {
  'martin-luther': {
    id: 'martin-luther',
    icon: '📜',
    name: { cn: 'Martin Luther 马丁·路德', en: 'Martin Luther' },
    role: {
      cn: 'Wittenberg 神学教授 / 1517-1546 agonistic-prophet (痛苦先知) 视角',
      en: 'Wittenberg theology professor / 1517-1546 agonistic-prophet lens',
    },
    description: {
      cn: '他是 Wittenberg 一个偏僻小城里三十三岁的神学教授,1517 年万圣节前夕傍晚天已经暗下来,他口袋里折着九十五条用拉丁文写的论纲,走出修士宿舍要把它当作一次学术辩论邀请发出去。这一遍让你跟他从那一刻走二十九年,看一个本来只想跟其他教授吵架的人,怎么意外把欧洲基督教一千五百年的统一炸开,八年后又亲手写小册子叫贵族屠杀十万农民。',
      en: 'He is a thirty-three-year-old theology professor in a small Saxon town on the eve of All Saints in 1517, the afternoon already dark, with a folded sheet of ninety-five Latin theses in his pocket as he steps out of his friars\' dorm to send what he thinks is an academic debate invitation. This pass walks twenty-nine years with him from that moment, watching a man who only meant to argue with other professors accidentally crack open fifteen hundred years of European Christian unity, and eight years later write the pamphlet that calls the nobility to butcher a hundred thousand peasants.',
    },
    nameCn: 'Martin Luther 马丁·路德',
    storyboard: lutherStoryboard,
  },
  'erasmus': {
    id: 'erasmus',
    icon: '✍️',
    name: { cn: 'Desiderius Erasmus 鹿特丹的伊拉斯谟', en: 'Desiderius Erasmus of Rotterdam' },
    role: {
      cn: '北方人文主义最大学者 / 1466-1536 unwanted-bridge (没人要的桥) 视角',
      en: 'Greatest scholar of northern humanism / 1466-1536 unwanted-bridge lens',
    },
    description: {
      cn: '他是 Basel 一家印刷店里五十岁的学者,手里捧着一本刚装订好的厚书,是一千年来第一次有人回到 Greek 原文重新校勘的新约,而他还不知道一个三十二岁的 Wittenberg 修士马上要拿这本书的页码当弹药。这一遍让你跟他走七十年,看一个想做桥的人怎么从两边都尊敬,变成两边都骂,死后二十三年自己写的所有书还被教皇烧掉。',
      en: 'He is a fifty-year-old scholar in a Basel print shop, holding a freshly bound thick volume, the first Greek New Testament re-collated from manuscripts in roughly a thousand years, not yet knowing a thirty-two-year-old friar in Wittenberg is about to load it as ammunition. This pass walks seventy years with him, watching a man who tries to be a bridge slide from respected on both sides to cursed on both sides, until twenty-three years after his death the Pope still burns every book he ever wrote.',
    },
    nameCn: 'Desiderius Erasmus 鹿特丹的伊拉斯谟',
    storyboard: erasmusStoryboard,
  },
  'sister-agnes': {
    id: 'sister-agnes',
    icon: '🕊️',
    name: { cn: 'Sister Agnes (虚构合成 1539 修女)', en: 'Sister Agnes (fictional composite, 1539 nun)' },
    role: {
      cn: 'Lincolnshire Cistercian 修女院 / 1539 forgotten-half (被遗忘的一半) 视角',
      en: 'Lincolnshire Cistercian nunnery / 1539 forgotten-half lens',
    },
    description: {
      cn: '她是英国 Lincolnshire 一座 Cistercian 修女院里三十二岁的修女，十四岁进来，十八年没见过围墙外的世界（一个合成人物，代表 1536-1540 年间被强制赶出修道院的约八千个英国修女）。1539 年 5 月那个早上 Henry VIII 派来的人就站在院子里等她签字。这一遍让你跟她从那一笔签字走出去，看一个带着五镑年金和没人接得住的身世，在外面活到二十八年后那个孤独的清晨。',
      en: 'She is a thirty-two-year-old Cistercian nun in a Lincolnshire convent in England, taken in at fourteen, who has not seen the world outside the cloister walls in eighteen years, with Henry VIII\'s men already standing in the courtyard on the May 1539 morning she is made to sign (a composite character standing in for the roughly eight thousand English nuns expelled when the monasteries were dissolved between 1536 and 1540). This pass walks out of the courtyard with her after that signature, watching a woman now carrying a five-pound annual pension and a status no one outside knows how to receive, on through to the lonely morning twenty-eight years later when she dies.',
    },
    nameCn: 'Sister Agnes (虚构合成 1539 修女)',
    storyboard: agnesStoryboard,
  },
};

// per 7thgrader audit: Sister Agnes 13 岁视角最稳 — 字数严控 + N12 谜题钩子最完整
export var defaultLens = 'sister-agnes';

// ─── 默认 export 兼容老 runtime(取 default lens 的 storyboard)──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'reformation-1517',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  estimatedMinutesPerLens: { 'martin-luther': 38, 'erasmus': 35, 'sister-agnes': 32 },
};
