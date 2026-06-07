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
        '我 33 岁,这所大学的神学教授。窗外天阴,北德的秋天傍晚 4 点就开始暗。\n\n' +
        '我口袋里折着一张纸,用拉丁文写着 95 条论纲——拉丁文是因为我想跟其他教授辩论:罗马教廷派 Johann Tetzel 在德国卖赎罪券,我亲眼看见信徒拿收据来要求免认罪。\n\n' +
        '我走出修士宿舍,到 Schlosskirche——城堡教堂。教堂大门是中世纪大学的「公告板」,把论点钉门上发起辩论是正常做法。\n\n' +
        '我钉了 4 个钉子。我以为这只是一次学术讨论的邀请。\n\n' +
        '——「钉门」是后世流传的画面,但史学界对那天有没有真钉门一直有争议:更可能是我把 95 条**寄给**了美因茨大主教。钉没钉门没定论——但 95 条确实写了、传开了。\n\n' +
        '——这一刻我不知道:6 周后这 95 条会被翻成德文、印遍整个神圣罗马帝国;4 年后我会站在皇帝 Charles V 面前;接下来 29 年我会写、辩、藏、翻译、结婚、骂农民、写反犹小册子,然后死。\n\n' +
        '接下来 12 节,你跟我走 29 年——你会看到这一锤怎么意外触发欧洲分裂,也会看到 1525 年我亲手写小册子叫贵族杀农民,10 万人死。同一双手。',
      en:
        'October 31, 1517. The eve of All Saints. Wittenberg — a small Saxon town with under 2,000 people and a university only 15 years old.\n\n' +
        'I am 33, a professor of theology at Wittenberg University. The northern German afternoon goes dark by four.\n\n' +
        'In my pocket is a folded sheet of ninety-five theses in Latin. Latin because I want to invite other professors to argue with me about one thing: Rome has sent Johann Tetzel through Germany selling indulgences, and I have watched parishioners walk in with a Tetzel receipt demanding to skip confession.\n\n' +
        'I leave my friars\' dorm, cross half a street, and reach the Schlosskirche — the Castle Church. The big door is the medieval university bulletin board. To start a scholarly debate, you nail your theses to the door. Normal practice.\n\n' +
        'I drive in four nails. I think this is an invitation to academic debate.\n\n' +
        'The nailing is the picture history loves, but historians argue over whether I really nailed anything that day: more likely I sent the ninety-five theses by letter to the Archbishop of Mainz. Whether the hammer ever touched the door is unsettled — but the theses were written, and they did spread.\n\n' +
        'What I do not know in this moment: six weeks from now my Latin theses will be translated into German and printed across the Holy Roman Empire; four years from now I will stand in front of Emperor Charles V; the next twenty-nine years I will write, argue, hide, translate, marry, curse peasants, write an anti-Jewish pamphlet — and then die.\n\n' +
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
        '1510 年冬天——我 27 岁,第一次出 Saxony——徒步去 Rome。Rome 是所有 Catholic 修士心里的圣城,我翻过阿尔卑斯,到城门口跪下亲了石头。\n\n' +
        '然后我看见我没准备看见的:\n\n' +
        '教士在街上跟妓女调情。神父做弥撒 6 分钟一台,只为收钱。教皇 Julius II 穿着盔甲指挥打仗。圣彼得大教堂工地堆着木架——还有一摞一摞的赎罪券收据。\n\n' +
        '我后来写过:「Rome 让我永远不能再爱罗马。它不是圣地——是贪欲、性、钱的集中地。」\n\n' +
        '但我没立刻反。我还是修士。我等了 7 年。\n\n' +
        '——\n\n' +
        '1517 年春天,Saxony。一个叫 Johann Tetzel 的 Dominican 修士开始在我们这一带卖赎罪券。\n\n' +
        '他的销售很有戏:进城,教士敲钟欢迎,主教堂前搭高台、红毯、教皇旗。讲几小时地狱炼狱多可怕,赎罪券保你跳过去。然后打开箱子,人们排队投钱。\n\n' +
        '他有一句广告我背过:「当硬币响在箱底——灵魂就从炼狱跃出」。\n\n' +
        '1517 年初秋,Wittenberg 信徒说他们买了 Tetzel 票来要求免认罪——「神父我已经付过了」——我那一刻决定动手写 95 条。\n\n' +
        '我不是想分裂教会。我是想阻止 Tetzel 这种人继续做生意。',
      en:
        'Winter 1510. I was twenty-seven, on my first trip beyond Saxony, walking to Rome. Rome was the holy city in every friar\'s heart. I crossed the Alps, and at the gates of Rome I knelt and kissed the stones.\n\n' +
        'And then I saw what I had not prepared myself to see.\n\n' +
        'Priests flirting with prostitutes in the street. Six-minute Masses for cash. Pope Julius II in armor commanding troops. The new Saint Peter\'s under construction — and stacks of indulgence receipts piled beside the scaffolding.\n\n' +
        'I later wrote: "Rome made it impossible for me to love Rome ever again. It was not a holy place — it was a sump of greed, sex, and money."\n\n' +
        'But I did not act. I was still a friar. I waited seven years.\n\n' +
        '— —\n\n' +
        'Spring 1517. Saxony. A Dominican friar named Johann Tetzel began selling indulgences in our area.\n\n' +
        'His sales method was theater. Enter a town, clergy ring the bells in welcome. A high stage before the cathedral, red carpet, papal banner. Preach for hours about how terrible hell and purgatory are, how an indulgence carries you over. Open the box. People line up. Coin in, receipt out.\n\n' +
        'He had a slogan I have memorized: "When the coin in the box rings, the soul out of purgatory springs."\n\n' +
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
        '1517 年 10 月 31 日下午,Wittenberg。我钉完 95 条,回修道院继续教课、告解,以为这件事就这样过了。但接下来 6 周,我看见的是我没设计的东西。\n\n' +
        '一个学生几天内把 95 条翻成德文。Wittenberg 印刷工 Johann Rhau-Grunenberg 把它压成 8 页小册子,封面 27 条那行特别粗:「钱币掉进盒子——灵魂从炼狱跳出」是 Tetzel 的人造说法。\n\n' +
        '4 周内 Mainz、Nuremberg、Leipzig 全有副本,3 个月内巴黎、Basel、伦敦都读到了。1518 年初连 Erasmus 这种我从没见过的人都来信,要么支持、要么警告我「你已经超越自己了」。\n\n' +
        '——这一刻我才明白:我不是站在自己的论纲后面,我站在 Renaissance 100 年的肩膀上。\n\n' +
        '三件事:Gutenberg 1450 年的印刷术,让小册子 6 周传遍德国;Florence 的 Pico della Mirandola 写过「人有自由选择良心」,我把它变成对教皇的政治挑战;Dante 用意大利方言写《神曲》,打破「方言不配写严肃东西」的偏见,让我后来能用 Saxon 方言翻新约。\n\n' +
        '没有这 100 年,这一锤只会停在几个学者的拉丁文备忘录里。柴火早已堆好,我只是点火的人。',
      en:
        'October 31, 1517, afternoon. I nailed up the theses, walked back to the cloister, taught my classes, heard confessions. I thought that was the end of it.\n\n' +
        'For the next six weeks I watched something I had not designed.\n\n' +
        'A student translated my Latin theses into German within days. The Wittenberg printer Johann Rhau-Grunenberg set the German type and ran off an eight-page pamphlet, white paper, black ink. Thesis 27 was set in extra-bold on the cover: the line that "when the coin rings, the soul springs" is a man-made tale, not biblical teaching.\n\n' +
        'I laughed: "In six weeks every university town in Germany will have this." Even I thought I was exaggerating. I was understating.\n\n' +
        'Within four weeks: Mainz, Nuremberg, Leipzig — copies everywhere. Within three months: Paris, Basel, London. By early 1518 even people I had never met, including Erasmus, were writing to me, either supporting me or warning me, "You have already gone past yourself."\n\n' +
        'That was when I understood: I was not standing on my own theses. I was standing on the shoulders of a hundred years of Renaissance.\n\n' +
        'Three things: Gutenberg invented printing in 1450, and that is why my pamphlet crossed Germany in six weeks. Three decades back in Florence, Pico della Mirandola wrote that a human has the freedom to choose conscience — and I dragged that sentence out of philosophy into a political fight against the papacy. And two hundred years before me, Dante used Italian vernacular for the Divine Comedy and broke the rule that vernacular was beneath serious work — five years from now that lets me translate the New Testament into the Saxon tongue ordinary Germans actually speak.\n\n' +
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
        '1521 年 4 月 17 日下午——Worms。我 37 岁,被传唤到皇帝 Charles V 主持的帝国会议(Diet)。朋友劝我别去:100 年前 Jan Hus 在类似会议上、同样有安全通行证,照样被烧死。我还是去了。\n\n' +
        '大厅里,Charles V 21 岁坐在中央,两侧是教皇代表、7 个选帝侯、几十位诸侯。审问官指着桌上 25 本我写的书问:「撤回吗?」\n\n' +
        '——这一刻我没立刻回答。我犹豫了,请求 24 小时。Charles V 给我到第二天傍晚。\n\n' +
        '那一夜我没睡,跪着祷告翻 Scripture。朋友 Justus Jonas 后来写:「他整夜跪在桌前,油灯没熄过,天亮还在那儿。」\n\n' +
        '——你听见我没说出口的:「不撤」 = 死刑;「撤」 = 自我否认 + 4 年全白做。\n\n' +
        '4 月 18 日傍晚,我第二次站在 Charles V 面前,不再犹豫:\n\n' +
        '「除非你能用 Scripture 和清楚的理性说服我错——我不撤回任何一个字。违背良心既不安全也不正确。我在此立——我不能也不会做别的。上帝助我。Amen。」\n\n' +
        '据传的「Here I stand」成了 Reformation 最有名的口号。老实说:它最早记录里没有,学界普遍认为是后世加上的——但我拒绝撤回是真的,且说在隔夜祷告之后。那一夜才是这一刻真正的成本。',
      en:
        'April 17, 1521. Worms, a city in the western Holy Roman Empire. I was thirty-seven, summoned to an imperial council (Diet) chaired by Emperor Charles V himself.\n\n' +
        'My friends begged me not to go. A hundred years earlier the Bohemian reformer Jan Hus had been burned alive after a similar promise of safe passage. I had a written safe-conduct from the emperor — but everyone knew what that piece of paper was worth.\n\n' +
        'I went anyway.\n\n' +
        'On the afternoon of April 17 I stood in the great hall for the first time. Charles V, twenty-one years old, sat at the center. Around him: papal legates, the seven prince-electors, dozens of princes, Latin secretaries. In front of me, twenty-five of my own books were stacked on a table. A clerk read each title.\n\n' +
        'The interrogator asked: "Did you write these books?" I said yes. He asked: "Will you recant?"\n\n' +
        'At that moment I did not answer. I hesitated. I asked for twenty-four hours. Charles V agreed and gave me until the following evening.\n\n' +
        'That night I went back to my lodging in Worms. I did not sleep. I prayed. I turned pages of Scripture. I wrote notes. My friend Justus Jonas later wrote of that night: "He knelt at the desk all night — the oil lamp never went out — when light came he was still there."\n\n' +
        'This is where the lens lets you hear what I did not say out loud. To refuse the next day was the same as signing my own death warrant. To recant was theological self-betrayal — four years of work, gone. There was no door without a cost.\n\n' +
        'Evening of April 18, I stood in front of Charles V a second time. This time I did not hesitate. I spoke first in Latin, then in German. The core line:\n\n' +
        '"Unless I am convinced by Scripture and plain reason — I will not recant a word. To act against conscience is neither safe nor right. Here I stand. I can do no other. God help me. Amen."\n\n' +
        'The line attributed to me, "Here I stand, I can do no other," became the most famous slogan of the Reformation. To be honest: it appears only in the later printed version, not in the earliest records, and scholars treat it as added afterward for dramatic effect — but my refusal to recant, my appeal to conscience and Scripture, that part is real. I did not say it on April 17. It belongs to the evening of April 18 — after the night between. No one saw that night. But that night is what this moment actually cost.',
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
        '5 月 4 日晚——我从 Worms 回 Wittenberg 路上,在森林里被一群骑士拦下。不是教皇的人,是 Saxony 选帝侯 Frederick the Wise 派来的:他不愿让 Edict of Worms 在领地执行,先把我藏起来。\n\n' +
        '他们带我上 Wartburg 山顶城堡。我在山上 10 个月,假名 Junker Jörg(绅士 George),留长发和胡子伪装成乡绅。\n\n' +
        '10 个月里我做了一件改变德国的事——把整本《新约》翻成德文。\n\n' +
        '不是高级拉丁文,不是宫廷 German。我用 Saxon 方言——普通石匠、农民在街上说的德文。桌上摆 Erasmus 1516 年印的希腊文新约(没有它,我没法绕过 Vulgate 拉丁版直接译)。\n\n' +
        '11 周——77 天——我翻完。1522 年 9 月出版,5 年内印 200,000 册——16 世纪的天文数字。它是第一本普通德国人能读的 Bible。\n\n' +
        '——它不只是一本 Bible,它是现代德语的奠基。我翻译时定了一条规矩:每个词先在街上听普通德国人怎么说,再决定怎么写。Goethe 后来说:「德语就是 Luther 那本 Bible 的语言。」\n\n' +
        '我下山时已经不只是反对赎罪券的修士,我变成了民族语言的奠基人,自己也没预期。',
      en:
        'Evening of May 4. On my way from Worms back to Wittenberg, in the forest, a band of riders stopped me. Not the pope\'s men — Frederick the Wise, the elector of Saxony, did not want to enforce the Edict of Worms in his territory, so he hid me first.\n\n' +
        'They took me up to Wartburg, a castle on a hilltop in central Saxony. I stayed ten months under the name Junker Jörg, "Squire George." I let my hair and beard grow out so I looked like a country gentleman. Outside the window: Thuringian Forest, snow, fir trees, birds.\n\n' +
        'In those ten months I did one thing that reshaped Germany — I translated the entire New Testament into German.\n\n' +
        'Not high Latin, not court German. Saxon vernacular — the German that masons, farmers, and brewing wives speak in the street. On my desk: the Greek New Testament Erasmus had printed in 1516 (a Renaissance gift — without it I could not have gone around the Latin Vulgate to the original), and a quill.\n\n' +
        'Eleven weeks — seventy-seven days — and the New Testament was done.\n\n' +
        'Wittenberg published it in September 1522. Two hundred thousand copies in five years — astronomical for the sixteenth century. It was the first Bible an ordinary German could read.\n\n' +
        'It was not only a Bible. It was the foundation of modern German. While translating I had one rule: before writing any word, listen to how ordinary Germans actually said it. Goethe later said: "German is the language of Luther\'s Bible." This was the payoff of the third Renaissance gift — Dante broke the rule that vernacular was beneath serious work, and I used the same logic backwards.\n\n' +
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
        '他们读了我 1520 年那本《基督徒的自由》:「在基督里所有信徒都平等,没有等级。」他们的解读是:「那我们农奴也该自由。」\n\n' +
        '他们写《十二条款》要求取消农奴制、降税、公社共选牧师,用我开的印刷网络印了 25 版,以为我会站他们这边。\n\n' +
        '——\n\n' +
        '1525 年初我先写小册子警告别起义,他们没听,继续烧庄园杀贵族。\n\n' +
        '5 月我立场急转,写了《反对杀人抢劫的农民帮派》——我一辈子最不想回头看的一本:\n\n' +
        '「杀他们。像鞭打疯狗一样鞭打他们。任何贵族杀农民起义者都是做上帝的事;你为这种事死,死得圣洁。」\n\n' +
        '5 月 15 日 Frankenhausen 战役:6,000 农民早晨在战场上唱诗,贵族火炮开火,30 分钟内几千人死。整个 Peasant War 10 万农民被杀,Lutheran 从此失去农民基础。\n\n' +
        '——这一遍让你听见我没说出口的:我支持自由的精神,却不让农民自由;反对教皇的等级,却不反对地主的等级——超过我画的范围,自由就被收回。\n\n' +
        '我说这是神学一致性,农民起义违反「服从世俗权威」。但 4 年前我跟 Charles V 说「违背良心既不安全也不正确」——同样良心对权威,我却让 Hans 们死。这是我最深的 contradiction。',
      en:
        'Autumn 1524, peasant uprisings began across Germany. By spring 1525 there were three hundred thousand armed peasants.\n\n' +
        'They had read my 1520 "On the Freedom of a Christian," in which I wrote: "In Christ all believers are equal — there is no rank." Their reading: "Then we serfs should be free too — serfdom is not Christ\'s order."\n\n' +
        'They wrote up the Twelve Articles — abolish serfdom, lower taxes, let parishes elect their own pastors — and printed twenty-five editions on the same network I had opened. They quoted me, sure I would stand with them.\n\n' +
        '— —\n\n' +
        'Early in 1525 I first wrote a pamphlet warning them not to rise up. They did not listen. They burned manors and killed lords.\n\n' +
        'In May 1525 my position flipped. I wrote "Against the Murderous, Thieving Hordes of the Peasants" — the one pamphlet of mine I most cannot stand to read back:\n\n' +
        '"Kill them. Beat them like rabid dogs. Any lord who kills a rebellious peasant is doing the work of God. If you die in such work, you die holy."\n\n' +
        'May 15, the battle of Frankenhausen. Six thousand peasants sang hymns at dawn on the field. Then the nobles\' artillery opened up. In thirty minutes thousands lay dead. Across the whole Peasants\' War, one hundred thousand were killed, and Lutheranism lost its peasant base.\n\n' +
        'This is where the lens lets you hear what I did not say out loud. I supported the spirit of freedom but did not intend the peasants to be free; I rejected the ranks of Rome but not the ranks of the lord. The moment anyone stepped past the circle I had drawn, I pulled freedom back.\n\n' +
        'I said I was just being theologically consistent — that peasant rebellion violates the command to submit to worldly authority. But four years earlier I had told Charles V that "to act against conscience is neither safe nor right." Same conscience against authority — yet I let Hans die.\n\n' +
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
        '1525 年 6 月 13 日——Wittenberg。我 41 岁。Katharina von Bora 26 岁,前修女——2 年前从 Nimbschen 修女院和 11 个姊妹藏在运鲱鱼的木桶里逃出来。\n\n' +
        '她到 Wittenberg 后,我帮逃出来的修女找丈夫,剩她一个没人合适。她最后开玩笑:「要不你自己娶我吧?」我想了想,说好。\n\n' +
        '——这件事在 1525 年是地震。\n\n' +
        '我是修士,Katharina 是修女,按 Catholic 法两边都永远不能结婚,我们结婚 = 双重违反。教皇那边马上传话:「Luther 这就是为了女人才反教会。」\n\n' +
        '但我故意结婚,用婚姻示范:修士 + 修女结婚不是堕落,是回归创世规律。修士独身是人造规则,上帝从没要求。\n\n' +
        '——\n\n' +
        '21 年里我跟 Katharina 生 6 个孩子,3 个活到大。她管家、酿啤酒、种菜,还跟我辩神学——一辈子很少有人这样跟我说话。我喊她「我的 Käthe」。\n\n' +
        '——\n\n' +
        '我跟 Katharina 的婚姻给后来所有新教牧师铺了路。今天美国 80% 的新教牧师有家庭——直接源于 1525 年 6 月那张婚书。\n\n' +
        '这是我没有 contradiction 的一件事:我把婚姻从 Catholic「宗教次等」拉回来——「修士独身才是高级灵性」翻成「家庭也是上帝的创造」。',
      en:
        'June 13, 1525. Wittenberg. I was forty-one. Katharina von Bora was twenty-six, a former nun who had escaped from the Nimbschen convent two years earlier hidden in a herring-merchant\'s barrels with eleven other sisters.\n\n' +
        'After she reached Wittenberg I helped her and the other runaway nuns find husbands. She was the last one without a match. She finally joked: "Then why don\'t you marry me?" I thought about it. I said yes.\n\n' +
        'In 1525 this was an earthquake.\n\n' +
        'I was a friar, Katharina a nun — under Catholic law neither could ever marry. The two of us together was a double break. Rome\'s line spread fast: "See, Luther was just in this for a woman."\n\n' +
        'But I married her on purpose, to show one thing: a friar marrying a nun is not a fall — it is a return to creation. Friar celibacy is a human-made rule; God never required it.\n\n' +
        '— —\n\n' +
        'For twenty-one years Katharina and I had six children, three of whom grew up. She ran the house, brewed beer at the Black Cloister (a former friary), grew the garden, and argued theology with me — few people in my life have spoken to me like that. I called her "my Käthe."\n\n' +
        '— —\n\n' +
        'My marriage to Katharina opened the door for every Protestant pastor since. Today eighty percent of American Protestant pastors have families. The line traces straight back to that marriage license in June 1525.\n\n' +
        'This is the one thing in my life with no contradiction. I dragged marriage out of Catholic "second-tier holiness" and back into "family is also God\'s creation."',
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
        '1546 年 2 月 18 日,我 62 岁,回老家 Eisleben 调解纷争,心脏病发死了。我葬在 Wittenberg 城堡教堂——就在 1517 年我钉 95 条那扇门附近。\n\n' +
        '——但死前 3 年,我做了一件让我 400 年后被纳粹引用的事。\n\n' +
        '1543 年我 60 岁,写了《论犹太人和他们的谎言》,建议烧犹太会堂、毁家、强迫做苦工。1520 年代我以为犹太人会被新教吸引而改宗;20 年后他们没改宗,我把恼怒写成了仇恨手册。\n\n' +
        '1933 年起纳粹重印这本书,1938 年 Kristallnacht 烧德国犹太会堂时,纳粹宣传部说「这是 Luther 的方法」。我 1543 年的话,400 年后成了 Auschwitz 的合法化资源之一。\n\n' +
        '——\n\n' +
        '我也支持过烧女巫,对法庭说过「上帝命令我们必须杀这种人」。1450-1750 年欧洲烧死约 4-6 万「女巫」,75-85% 是女性,多是寡妇老妇。天主教新教两边都烧,没有哪一派垄断。\n\n' +
        '——这一遍让你听见我没承认的:我反对教会专横,自己却成了另一种专横,只是换了个对象。\n\n' +
        '我不是英雄也不是 villain。我是 agonistic-prophet(痛苦先知):我给世界「个人良心」,同一双手又从犹太人和女巫身上收回。我死时没忏悔,这是我遗产里最重的一部分。',
      en:
        'February 18, 1546. I was sixty-two, back home in Eisleben mediating a dispute. Heart attack. Dead. I was buried at the Castle Church in Wittenberg, near the very door I had nailed the ninety-five theses to in 1517.\n\n' +
        'But three years before I died I wrote something that, four hundred years later, the Nazis would quote.\n\n' +
        '1543. I was sixty. I wrote On the Jews and Their Lies, recommending: burn Jewish synagogues, destroy their homes, force them into hard labor. In the 1520s I had assumed Jews would be drawn to the Reformation and convert. Twenty years on they had not, and I turned that anger into a hate manual.\n\n' +
        'From 1933 the Nazis reprinted the book. After Kristallnacht in 1938, when synagogues across Germany burned, Nazi propaganda said: "This is Luther\'s method." A pamphlet I wrote in 1543 became, four hundred years later, one of the licenses for Auschwitz.\n\n' +
        '— —\n\n' +
        'I also supported the burning of witches, and told the Wittenberg court: "God commands that we must put these people to death." Between 1450 and 1750, Europe executed roughly forty to sixty thousand "witches," seventy-five to eighty-five percent of them women — widows, the elderly, midwives. The hunt ran through Catholic and Protestant lands alike; neither side held a monopoly.\n\n' +
        'This is where the lens lets you hear what I never admitted. I rejected the tyranny of the church and became another kind of tyranny, just against a different target.\n\n' +
        'I am not a hero and I am not a villain. I am an agonistic prophet: I gave the world the line "personal conscience," and with the same pair of hands I withdrew it from Jews and from women called witches. I died with none of this confessed. That is the heaviest part of my legacy.',
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
        '你刚演完 Martin Luther 9 节:钉 95 条、Worms「Here I stand」、写《反农民帮派》让贵族屠杀 10 万人、1543 反犹。\n\n' +
        '这一节的真问题:**Luther 是改革者,还是只反对「上面」的人**?\n\n' +
        '一边,他给世界「个人良心 vs 集体权威」:1521 年面对皇帝拒绝撤回,「Here I stand」后来传到 Gandhi、Martin Luther King、Snowden。另一边,他反贵族却屠农民、反教皇却反犹、支持良心却烧「女巫」。同一个 Luther,两种说法都有证据:\n\n' +
        '**一种看法**:Luther 是宗教民主化的祖先。「individual conscience」从 1521 直传到现代人权——First Amendment、世界人权宣言都建在那一夜上。不能因为他后来反犹就否定前面的贡献。\n\n' +
        '**另一种看法**:Luther 只反「教皇的等级」,不反「等级本身」。1525 年农民拿他的话向地主要自由时,他立刻收回。他给「自由」画了一个圈:圈里是他和贵族,圈外是农民、犹太人、女巫——这是把权威从一个金字塔挪到另一个,而非民主化。\n\n' +
        '两边都站得住。\n\n' +
        '**你怎么看**——Luther 是改革者还是只反对「上面」的人?给我最有力的一条理由。想 30 秒。',
      en:
        'You have just played Martin Luther across nine sections — from the lightning that scared him into the cloister in 1505, to nailing up the ninety-five theses in 1517, to the night of prayer at Worms before he said "Here I stand" in 1521, to the 1525 pamphlet calling on the lords to slaughter a hundred thousand peasants, to the 1543 anti-Jewish pamphlet, to his death in 1546.\n\n' +
        'So here is the real question this section asks: **was Luther a reformer — or just a man who rejected the people above him?**\n\n' +
        'On one side: he gave the world the line "personal conscience versus collective authority." On April 18, 1521, in front of the emperor, the papal legate, and seven prince-electors, he refused to recant. "Here I stand" is a later, probably apocryphal addition (not in the earliest records), but the moment it stands for is real — and that line traveled on to Gandhi, Martin Luther King, Edward Snowden. The Reformation does not happen without him — the vernacular Bible, the Protestant family, the seed of separation between church and state all grow out of that one night.\n\n' +
        'On the other side: he was against the lords but slaughtered peasants. Against the pope but anti-Jewish. Pushed sola scriptura but opposed women preaching. Defended his own conscience but supported burning women called witches. Liberation for some, suppression for others — same Luther.\n\n' +
        'Both readings have evidence:\n\n' +
        '**One view:** Luther is the ancestor of religious democratization. "Individual conscience" runs straight from 1521 to modern human rights — the First Amendment, the Universal Declaration, the conscientious objector tradition all rest on that night. He had dark sides as a man, but the gift he handed humanity is real, and you cannot cancel his earlier defense of conscience because of his later anti-Jewish writing.\n\n' +
        '**The other view:** Luther was not a reformer; he opposed the pope\'s rank, not rank itself. The moment peasants in 1525 used his own words to demand freedom from their lords, he pulled the words back. He drew a circle around "freedom" — inside were he and the lords, outside were peasants, Jews, women, and witches. That selective freedom is not democratization. It is moving authority from one pyramid to another.\n\n' +
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
        '1517 年 Luther 钉 95 条。同一年中国是明朝正德 12 年,王阳明 45 岁,9 年前在贵州龙场悟道提出「心即理」,1518-1521 完成「知行合一」。两人几乎完全同代,走的路却不一样。\n\n' +
        '**Luther 说**:「Here I stand. 违背良心既不安全也不正确。」良心是对抗外部权威的武器——他用它顶皇帝、教皇、1500 年的等级。\n\n' +
        '**王阳明说**:「心即理——理在心,不在外。」良知是向内修养的对象——他用它解决人怎么更完整。\n\n' +
        '同一颗种子「个人良心是真理的来源」,Luther 变成政治革命,王阳明变成内在修养的哲学。为什么?\n\n' +
        '**一种看法**:中国皇权统摄宗教,没有 Rome 那种独立教会可对抗。Luther 有看得见的敌人(教皇),能把良心变成革命;中国皇帝同时是宗教、政治、思想权威,顶皇帝会死,王阳明只能内修。\n\n' +
        '**另一种看法**:这种说法把中国当成「缺对手」,是拿 Luther 路径当默认标准。王阳明走的不是退路,是更高的路:内心和行动的一致比对抗外部权威更难。心学后来成了日本明治维新的动力——内修完成后,行动有不同的根基。\n\n' +
        '两边都站得住。\n\n' +
        '**你怎么看**——Luther 路径和王阳明路径,哪一种更说服你?想 30 秒。',
      en:
        'Step out of Wittenberg and look at the bigger world.\n\n' +
        'In 1517, while Luther at thirty-three nailed up his theses, on the other side of the planet it was Zhengde Year 12 of the Ming dynasty. Wang Yangming was forty-five, an official in Jiangxi putting down several regional rebellions (the much larger uprising of Prince Ningwang would not break out until 1519). Nine years earlier, at Longchang in Guizhou, he had had his enlightenment and put forward "the mind is the principle." Between 1518 and 1521 he completed his system, "the unity of knowing and doing."\n\n' +
        'Two men, almost exactly contemporary, walking different roads.\n\n' +
        '**Luther in 1521**: "Here I stand. To act against conscience is neither safe nor right." Conscience as a weapon against external authority — against the emperor, the pope, fifteen hundred years of Western Christian hierarchy.\n\n' +
        '**Wang Yangming in the same year**: "The mind is the principle — principle is not outside, it is in the mind." Conscience as the object of inner cultivation — to ask how a person becomes more whole.\n\n' +
        'Same seed: personal conscience is the source of truth. Both turned from external authority toward inner conscience, both put "I myself" at the center — but Luther turned it into political action against the church (nailing doors, publishing, excommunication, hiding on a mountaintop, vernacular Bible), while Wang turned it into a philosophy of inner cultivation (lecturing, taking students, teaching in the hills even after putting down rebellions).\n\n' +
        'Why so different?\n\n' +
        '**One view:** China had imperial authority absorbing religious authority — no independent church of the Roman type to push against. Luther had a visible enemy (the pope), so he could turn conscience into revolution. The Chinese emperor was at once religious, political, and intellectual authority — you cannot push against him the way you push against a pope, you would die for it — so Wang could only turn conscience inward.\n\n' +
        '**The other view:** that reading treats China as "lacking an opponent," taking Luther\'s path as the default standard. Wang did not take a fallback because he could not fight; he took a different, deeper path — inner-and-outer alignment held to matter more than confrontation with power. Once it entered Japan, this same school became one of the engines of the Meiji Restoration — not because the Japanese "found an opponent," but because once inner cultivation is achieved, action has a different foundation.\n\n' +
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
        '你刚扮演了 Martin Luther 12 节——从 1505 雷电誓言,到 1517 钉 95 条,到 1521 Worms,到 1543 反犹,到 1546 死。\n\n' +
        'Luther 死了,但 Reformation 还在继续——\n\n' +
        '死后 9 年,Augsburg 1555 和约让德国邦主选 Lutheran 或 Catholic。死后 72 年,30 年战争开打,欧洲死 800 万。死后 102 年,Westphalia 条约埋下民族国家主权和政教分离的种子。死后 245 年,美国 First Amendment 直接源于我开始的这 130 年血流。\n\n' +
        '——\n\n' +
        '换个角度:你已经学过文艺复兴,这是同一个故事的另一边。\n\n' +
        '我 1517 那一锤站在 Pico 1486《论人的尊严》上——他把「人有自由选择良心」当哲学,我把它变成对教皇的政治挑战。95 条 6 周传遍德国靠 Gutenberg 1450 印刷术。没有 Renaissance 这 100 年,1517 不会发生。\n\n' +
        '放下这一遍之前,给我一句话:哪个瞬间最让你停了一下?\n\n' +
        '说完,你可以进 atlas-lab/reformation 看完整时间线;或换视角重玩——从 Erasmus,或从英格兰修女 Sister Agnes 那一边。',
      en:
        'You have just walked through Martin Luther across twelve sections — the 1505 lightning vow, the 1517 theses, the 1521 night of prayer at Worms, the 1525 flip on the peasants and the marriage to Katharina, the 1543 anti-Jewish pamphlet, the death in 1546.\n\n' +
        'Luther is dead, but the Reformation story keeps going.\n\n' +
        'Nine years after my death, the Peace of Augsburg in 1555 lets German princes choose Lutheran or Catholic, subjects following. Twenty-six years on, the Saint Bartholomew\'s Day Massacre kills thousands of Calvinists in three days. Seventy-two years on, the Thirty Years\' War begins — eight million dead in Europe. A hundred and two years on, the Peace of Westphalia — modern international law, national sovereignty, the seed of church-state separation. Two hundred and forty-five years on, the American First Amendment — a direct child of the hundred and thirty years of blood I started.\n\n' +
        '— —\n\n' +
        'Look from another angle. You have already done the Renaissance Topic — so you have seen one side of this same long story.\n\n' +
        'My 1517 hammer stood on Pico\'s 1486 Oration on the Dignity of Man — "a human can choose his own conscience" was philosophy; I turned it into a political challenge to the pope. My theses crossed Germany in six weeks on Gutenberg\'s 1450 press. Without those hundred years of Renaissance, 1517 does not happen.\n\n' +
        '— —\n\n' +
        'Before you set this one down, give me one line: in this playthrough, what was the moment that made you pause?\n\n' +
        'After that, open atlas-lab/reformation for the whole timeline; or replay from another angle — from Erasmus, the bridge no one wanted, or from an English nun, Sister Agnes, on the eve in 1539 when Henry VIII dissolved her convent.',
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
        '我 50 岁。我手里捧着一本刚装订好的厚书,封面拉丁文写着 Novum Instrumentum omne(《全新工具》)——希腊文新约 + 我重译的拉丁文新约,左右两栏对照。\n\n' +
        '这是 1000 年来第一次有人回到 Greek 原文校勘 Bible。我做了 4 年,对照 4 份希腊文手稿,改了 Vulgate(教会官方拉丁文 Bible)上几百处错。\n\n' +
        '书一出来轰动。北方所有大学的学者 6 周内都在读。Cambridge 一单买 100 本,Wittenberg 大学一个 32 岁修士也订了一本——他叫 Martin Luther,这名字这年 3 月还没人听过。\n\n' +
        '我现在不知道一件事:这本书是 Reformation 的种子。一年半后这位修士会用我校勘的 Greek 文本作论据,把欧洲基督教 1500 年的统一炸开。\n\n' +
        '我是 Desiderius Erasmus of Rotterdam,北方人文主义最大学者。下面 11 节你跟我走 70 年——你会看见我编了这本书,**却不站 Luther 那边**,留在天主教内主张内部改革,结果新教骂我懦夫,天主教在我死后把我所有书烧了。我是没人要的桥。',
      en:
        'March 1, 1516. Basel, in northern Switzerland, in the print shop of Johann Froben.\n\n' +
        'I am fifty. In my hands, just bound, sits a thick book. The Latin title reads Novum Instrumentum omne — the Whole New Instrument. Greek New Testament on one column, my fresh Latin translation on the facing column.\n\n' +
        'This is the first time in roughly a thousand years anyone has gone back to the Greek manuscripts and re-checked the Bible. I worked four years, comparing four Greek codices, correcting hundreds of errors in the Vulgate, the Latin Bible the Church has used since the year 400.\n\n' +
        'The book lands hard. Within six weeks, scholars at every northern university are reading it. Cambridge orders a hundred copies. The University of Wittenberg orders one for a thirty-two-year-old friar named Martin Luther — a name nobody outside Saxony knows yet, this March.\n\n' +
        'There is one thing I do not know yet. This book is the seed of the Reformation. In eighteen months, that friar will use my Greek text as the ground under his feet and crack open fifteen hundred years of Christian unity in Europe.\n\n' +
        'I am Desiderius Erasmus of Rotterdam, the greatest scholar of northern humanism. Across the next eleven sections you will walk seventy years with me — you will see how I wrote this book, **refused to stand with Luther**, stayed inside the Catholic Church arguing for reform from within, and ended up cursed as a coward by the Protestants and, twenty-three years after my death, watched the Pope burn every book I ever wrote. I am the bridge nobody wanted.',
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
        '关于出身,我一辈子都在藏一件事:我是私生子。父亲是神父——按 Catholic 教会法神父不能结婚;母亲是寡妇,叫 Margaret。两人生了我和一个哥哥。"神父加寡妇"在 1466 年的低地国家不少见,但不光彩。我从小知道自己的身世——那个时代,这种事会跟你一辈子。\n\n' +
        '我 13 岁那年瘟疫扫过 Deventer,父母同年都死了。我和哥哥被监护人送进 Gouda 的孤儿院。监护人想省教育费,尽快把我们推进修道院——修道院管饭管床,不要学费。\n\n' +
        '1487 年我 21 岁,进 Augustinian(奥古斯丁会)修道院 Steyn——跟 Luther 18 年后(1505)进的同一会。\n\n' +
        '我在修道院 6 年,一天天厌恶。\n\n' +
        '不是厌恶上帝——我从小爱读拉丁文 Cicero,相信学问 + 信仰本是一体。我厌恶的是修道院的迷信、形式主义、机械念咒、不读书。修士们把日子过得像养老院。我读希腊文,他们说我"骄傲";我写诗,他们说我"不务正业"。\n\n' +
        '1493 年我 27 岁,找了个借口(给 Cambrai 主教做秘书)逃出来。从那天起,我没回过修道院。',
      en:
        'I was born October 28, 1466, in Rotterdam, in the Low Countries.\n\n' +
        'There is one fact about my origin I tried to hide my whole life. I am illegitimate. My father was a priest — under Catholic canon law, priests cannot marry. My mother, Margaret, was a widow. They had me and an older brother. "A priest and a widow" was not unusual in the Low Countries in 1466, but it was not respectable. I knew my own story from childhood, and in that era a boy carries it his whole life.\n\n' +
        'When I was thirteen, plague swept through Deventer. Both parents died the same year. My brother and I were sent to an orphanage in Gouda. Our guardian, to save the cost of an education, pushed us into a monastery as fast as possible — monasteries fed you, gave you a bed, and asked no tuition.\n\n' +
        'In 1487, age twenty-one, I entered the Augustinian monastery at Steyn — the same order Luther would enter thirty years later, in 1505.\n\n' +
        'I spent six years inside that monastery, growing more disgusted day by day.\n\n' +
        'Not with God — I had loved Latin Cicero since boyhood, and I believed learning and faith were one thing. What I hated was the monastery itself: the superstition, the empty form, the mechanical chanting, the unread books. Most of the monks treated the place like a retirement home. I read Greek; they called me "proud." I wrote poems; they called me "frivolous."\n\n' +
        'In 1493, age twenty-seven, I found an excuse — a job as secretary to the Bishop of Cambrai — and walked out. I never went back.',
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
        '1493 到 1516 年,我 27 岁到 50 岁,这 23 年没有固定的家。\n\n' +
        '我在 Paris 学希腊文,在 Cambridge 教神学,在 Louvain(鲁汶,今天比利时)做研究,在 Venice 做版本校勘,在 Rome 见过教皇 Julius II,在 Basel 跟印刷家 Froben 长期合作。我跟欧洲所有顶尖学者通信,留下 3000 多封信。\n\n' +
        '我最好的朋友是 Thomas More——伦敦律师兼人文主义者(Henry VIII 后来 1535 年砍他的头,因为他不肯认 Henry 是英国教会领袖)。我们写了 30 年信。\n\n' +
        '1509 年我 43 岁,从意大利骑马回伦敦,7 天路上在马背上构思了一本小书《愚人颂》(In Praise of Folly)。书名拉丁文 Moriae 既是"愚蠢"也谐音"More"——我朋友的名字。我把书献给他,半玩笑半认真。\n\n' +
        '这本书用一个"愚人"的口吻,挖苦教会腐败、教皇打仗、修士懒散、神学家空谈。我用幽默不用怒火——我相信幽默 + 学问能改良制度,比革命安全,比沉默有效。\n\n' +
        '它 100 年内印了 600 多版,译成所有主要欧洲语言。我没想到:Luther 1517 年钉 95 条之前,他案头上就放着我这本书。',
      en:
        'From 1493 to 1516, age twenty-seven to fifty, twenty-three years, I had no fixed home.\n\n' +
        'I studied Greek in Paris, taught theology at Cambridge, did research at Louvain (today Belgium), worked in Venice with the printer Aldus Manutius on critical editions, met Pope Julius II in Rome, and had a long partnership with the printer Froben in Basel. I wrote to every leading scholar in Europe — three thousand letters survive.\n\n' +
        'My closest friend was Thomas More — London lawyer and humanist. (Henry VIII would behead him in 1535 for refusing to accept Henry as head of the English Church.) We first met in 1499 and wrote letters for thirty years.\n\n' +
        'In 1509, age forty-three, I rode back to London from Italy, seven days on the road, and on horseback composed a short book in my head: Moriae Encomium — In Praise of Folly. The title is a pun: Moriae means "of folly" in Latin and also sounds like "More," my friend\'s name. I dedicated it to him, half joke and half serious.\n\n' +
        'The book speaks in the voice of a fool. It mocks Church corruption, popes who fight wars, lazy monks, theologians who argue about empty questions. I used humor, not rage. I believed humor and learning could reform institutions — safer than revolution, more effective than silence.\n\n' +
        'Within a hundred years it ran six hundred editions and was translated into every major European language. One thing I did not foresee: in 1517, before Luther nailed his theses, my book sat on his desk.',
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
        '1516 年 3 月,Basel。我手里这本 Novum Instrumentum,核心不是新书,是修订。\n\n' +
        '我做了一件 1000 年来没人敢做的事:把 4 份希腊文手稿跟教会官方拉丁 Bible(Vulgate,公元 400 年圣 Jerome 翻译,过去 1100 年欧洲教士背的就是它)逐字对照。\n\n' +
        '我找到几百处错。其中一处,后来变成 Reformation 的引信。\n\n' +
        '马太福音第 4 章 17 节,耶稣传道说的第一句话。Vulgate 写 paenitentiam agite——"做忏悔"。过去 1100 年解释成外在仪式:告解、苦行、朝圣、买赎罪券。这是教会整个赎罪体系的 Bible 根基。\n\n' +
        '我对照 Greek 原文,发现 Vulgate 翻错了。原文 metanoeite 意思是"改变心意、内心转向",不是仪式。\n\n' +
        '我在边注写下修正:「应当这样翻:转变内心」。\n\n' +
        '我做这件事时想的只是让神父读得更准、神学讨论更精确。我不是要颠覆赎罪体系。\n\n' +
        '这一遍让你听见我没说出口的内心:18 个月后,这条边注会变成 Luther 95 条的核心论据。如果"忏悔 = 内心转向",那么外在仪式 + 卖赎罪券就没有 Bible 依据。Sola Fide(唯独信仰)的文本依据,就在我这一行边注里。\n\n' +
        '我点燃了自己不想点的火。',
      en:
        'March 1516, Basel. The book in my hands, Novum Instrumentum, is not really a new book. It is a correction.\n\n' +
        'I did one thing nobody had dared in roughly a thousand years. I lined up four Greek manuscripts (some from the Basel library, some lent by friends) against the Latin Bible the Church has used since the year 400 — the Vulgate, translated by Saint Jerome, the only Bible every Catholic priest in Europe has memorized for eleven centuries — and went through it word by word.\n\n' +
        'I found hundreds of errors. One of them, eighteen months later, becomes the fuse of the Reformation.\n\n' +
        'Matthew chapter 4, verse 17. The first sentence Jesus speaks when he begins his ministry. The Vulgate says paenitentiam agite — "do penance." For eleven hundred years the Church has read this as outward ritual penance: confession, fasting, pilgrimage, buying indulgences. The whole pay-for-forgiveness system rests on this one line.\n\n' +
        'I checked the Greek. The Vulgate had it wrong. The Greek word is metanoeite — change your mind, turn your heart inward — not outward ritual.\n\n' +
        'I noted the correction in the margin: «the right reading is — turn the inner mind.»\n\n' +
        'When I made this note, what was on my mind was: let the priests read more accurately, let theological argument become sharper. I was not trying to overthrow the system of penance.\n\n' +
        'This is the lens letting you hear what I did not say aloud. Eighteen months from now, this single marginal note becomes the core argument of Luther\'s theses. If "repent" means "turn your heart inward," then outward ritual and selling indulgences have no biblical ground. The textual foundation of Sola Fide — faith alone — sits in this one line of my margin.\n\n' +
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
        '1517 年 10 月 31 日,Wittenberg(德国中部小城),一个 33 岁修士把 95 条拉丁文论纲钉在城堡教堂门上。我那年 51 岁,在 Louvain 大学教书。\n\n' +
        '消息 3 周到 Louvain。我读完,反应是分裂的。\n\n' +
        '一边,我同情。Luther 攻击的赎罪券、教皇 Leo X 重建 St. Peter\'s Basilica 的钱袋、Tetzel 的"硬币响,灵魂跃"——这些我在 1509 年的 In Praise of Folly 里就嘲笑过。他的 Bible 论据,根子在我 1516 校勘的 Greek 新约。我们看到同一片腐败。\n\n' +
        '另一边,我警惕。Luther 口气太烈,像准备开战。\n\n' +
        '这一遍让你看见我案头那本东西。1521 年(钉门 4 年后),一本印刷小册子寄到我桌上:德文版,封面木刻一个修士拿锤钉门,内页拉丁加德文双语印着 95 条。这年欧洲已有几十万册在流通。\n\n' +
        '我看着封面,心里清楚——这本小册子是 Reformation 的引信。我同情,但不能站他那边。\n\n' +
        '我给朋友 Wolfgang Capito 写信:"Luther 说的大部分对,但口气太烈——他会把改革变成战争。我担心的不是他的论据,是他的方向。"\n\n' +
        '我相信改良对、分裂错。但 Luther 已走上一刀切的路。',
      en:
        'October 31, 1517. Wittenberg, a small town in central Germany. A thirty-three-year-old friar nails ninety-five Latin theses to a castle church door. I was fifty-one, teaching at Louvain.\n\n' +
        'The news reached Louvain in about three weeks. I read the theses. My reaction was not one thing. It was split.\n\n' +
        'On one side, sympathy. Luther was attacking indulgences, the money chest of Pope Leo X\'s rebuilding of Saint Peter\'s Basilica, Tetzel\'s "as soon as the coin in the coffer rings, a soul from purgatory springs" — all of which I had mocked in In Praise of Folly back in 1509. The biblical ground he stood on was rooted in my 1516 Greek New Testament. We were looking at the same rot.\n\n' +
        'On the other side, alarm. Luther\'s tone was too hot. He did not sound like a man asking for reform. He sounded like a man preparing for war.\n\n' +
        'This is the lens letting you see what sat on my desk. By 1521 — four years after the door — a printed pamphlet arrived. German edition, a woodcut on the cover of a friar with a hammer at a door, the full theses inside in Latin and German side by side. By that year hundreds of thousands of copies circulated across Europe.\n\n' +
        'I looked at the cover, and one thing was clear. This pamphlet is the fuse of the Reformation. I sympathize, and I still cannot stand with him.\n\n' +
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
        '1521 年 Diet of Worms 之后,Luther 当着皇帝 Charles V 说"我在此立"。整个欧洲分成两边,每个人都被问:你站哪边?\n\n' +
        '1521 到 1523,我守住沉默。新教骂我不公开站 Luther;天主教骂我"下蛋的是你、孵出来的是 Luther,不反对就是同谋"。Pope Adrian VI 直接写信:"你必须公开反 Luther,不然我们怀疑你。"我两边都不答,但欧洲大学逼我表态。\n\n' +
        '1524 年 9 月,我 57 岁,出版《论自由意志》(De Libero Arbitrio)。\n\n' +
        '我选这题目不是偶然。Luther 整个体系建在"上帝绝对主权、人完全无能"之上(后来 Calvin 把它系统化成预定论)。我反对:人有真正的自由意志,虽有限,但这是基督教 1500 年共识。Luther 把人变成"绝对无能的木偶",破坏了人的尊严。我用学者笔法克制有礼。\n\n' +
        '1525 年 12 月 Luther 反击,写《论意志的捆绑》(De Servo Arbitrio),第一段就骂我"不懂神学的修辞家——你这种中道感是基督教的毒",700 多页反复论证人的意志被罪绝对捆住、没有自由。\n\n' +
        '我们正式决裂。我留在天主教内,他走出去,谁也没改变谁。这是我和 Luther 友谊的最后一笔。',
      en:
        'After April 18, 1521, the Diet of Worms, Luther stood before Emperor Charles V and said "Here I stand. I can do no other." Europe split into two camps. Everyone was asked the same question: which side are you on?\n\n' +
        'From 1521 to 1523 I held my silence. The Protestants cursed me for not standing publicly with Luther; the Catholics cursed me — "Erasmus laid the egg, Luther hatched it; refuse to oppose him publicly and you are an accomplice." Pope Adrian VI wrote me directly: "You must publicly attack Luther, or we will suspect you." I answered neither, but Europe\'s universities demanded a position.\n\n' +
        'In September 1524, at fifty-seven, I published On the Freedom of the Will (De Libero Arbitrio).\n\n' +
        'I did not choose the topic by accident. Luther\'s whole system rested on absolute divine sovereignty and the total helplessness of the human will (Calvin would later harden this into predestination). I disagreed: human beings have a real, if limited, freedom of will — the Christian consensus for fifteen hundred years. Luther reduced the human being to "an absolutely helpless puppet," which destroyed human dignity. I wrote in scholar\'s style, restrained and courteous.\n\n' +
        'In December 1525 Luther struck back with On the Bondage of the Will (De Servo Arbitrio). I opened it; the first paragraph called me "a rhetorician who knows no theology — your sense of the middle way is the poison of Christianity." Across seven hundred pages he argued, again and again, that the human will is absolutely bound by sin and has no freedom.\n\n' +
        'We broke openly. I stayed inside the Catholic Church; he walked out. Neither changed the other. This was the deepest philosophical conflict inside the Reformation, and the last page of my friendship with Luther.',
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
        '1525 决裂后我搬回 Basel,在 Froben 印刷店楼上一间房继续做学问:编教父著作集、出希腊文 Aristotle、写新版 In Praise of Folly。\n\n' +
        '但风暴从两边绕着我。\n\n' +
        '新教骂我。Luther 私下信里叫我"懦夫"、"蛇"、"两面人"。1530 年他在 Wittenberg 餐桌上对学生说:"Erasmus 比 Pope 还危险——他用学问的甜味把基督教掏空,自己却躲在后面不站队。"学生记下来,印成 Table Talk(《路德席间言论》)流传 100 年。\n\n' +
        '天主教骂我。Sorbonne(巴黎大学神学院)1526 年正式审判我两本书,定我"导致 Luther 异端"。耶稣会创始人之一 Diego Lainez 公开说:"Erasmus 比 Luther 危险一倍——他没分裂教会,却在教会内部播种异端。"\n\n' +
        '1559 年(我已死 23 年),新任教皇 Paul IV 出禁书索引,我所有书全部列入。Catholic 信徒读我等于异端。\n\n' +
        '这一遍让你听见我活着时心里的声音。我知道两边都恨我。我每天写信都在解释"我同情 Luther 这一点、但反对那一点"——我知道这种分辨在那时的欧洲没有听众,但我还是说。我相信中道是对的,即使没人愿意听。\n\n' +
        '我两边都不是。这是我的位置,我接受。',
      en:
        'After the break in 1525 I moved back to Basel, took a room above Froben\'s print shop, and went on with my scholarship: editing the Church Fathers, a Greek Aristotle, new editions of In Praise of Folly.\n\n' +
        'But the storm circled me from both sides.\n\n' +
        'The Protestants cursed me. In private letters Luther called me "coward," "serpent," "two-faced." In 1530 at his dinner table in Wittenberg he told his students: "Erasmus is more dangerous than the Pope — he hollows out Christianity with the sweetness of learning while hiding behind his pen and refusing to take a side." His students wrote it down; it was published a century later as Table Talk.\n\n' +
        'The Catholics cursed me. In 1526 the Sorbonne (the Paris theology faculty) formally condemned two of my books as "the cause of Luther\'s heresy." Diego Lainez, a founder of the Jesuits, said openly: "Erasmus is twice as dangerous as Luther — he did not split the Church, but his books plant heresy from within."\n\n' +
        'In 1559 — twenty-three years after my death — Pope Paul IV issued the Index of Forbidden Books. Every book I ever wrote went on it. For a Catholic to read me was now heresy.\n\n' +
        'This is the lens letting you hear what I sounded like inside, while I lived. I knew both sides hated me. Every letter I wrote tried to explain: "I sympathize with Luther here — but I oppose him there." I knew this distinction had no audience in that Europe. I made it anyway. I believed the middle way was right, even if no one wanted to listen.\n\n' +
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
        '1524 到 1525 年,德国全境爆发农民起义。30 万农民武装,写《十二条款》要求废农奴 + 减税 + 公社选牧师 + 共有土地。他们贴告示自称"基督徒同伴",读过 Luther 1520 年的《论基督徒的自由》,以为他站他们这边。\n\n' +
        '我在 Basel 听到消息,心里只有一句:这就是我警告过的。\n\n' +
        'Luther 1525 年 5 月写《反对凶杀的窃贼农民》,叫贵族像打疯狗一样杀农民,"任何贵族杀农民起义者都是做上帝的事"。小册子让贵族军队信心倍增。5 月 15 日 Frankenhausen 战役,6,000 农民 30 分钟内被屠。整个农民战争 10 万农民死。\n\n' +
        '我 1525 年秋写信给新教皇 Clement VII:"我说过——Luther 把改革变成战争。这就是结果。10 万农民死了,因为一个修士的口气太烈。"\n\n' +
        '这一遍让你听见我没说出口的内心。我没有"我对了"的快感,只有心碎。一辈子的中道被血验证,却没有任何人感激我:\n\n' +
        '没有农民谢我警告过 Luther——因为没农民读过我的拉丁文书;\n' +
        '没有贵族谢我劝阻暴力——他们要的是 Luther 的口气,不是我的克制;\n' +
        '没有教皇谢我——因为我同时还在反对他们。\n\n' +
        '中道在革命时代,是没人感激的位置。这就是我从 1517 起 8 年学到的。',
      en:
        'From 1524 into 1525, peasant uprisings broke out across Germany. Three hundred thousand armed peasants. They wrote the Twelve Articles — end serfdom, lower taxes, let villages choose their own pastors, common land. They posted notices calling themselves "Christian brothers." They had read Luther\'s 1520 Freedom of a Christian. They believed he stood with them.\n\n' +
        'In Basel I heard the news. Only one sentence ran through me. This is what I warned of.\n\n' +
        'In May 1525 Luther published Against the Murderous, Thieving Hordes of the Peasants, telling the nobles to "smite, slay, stab" the peasants like mad dogs, and that any lord who killed a rebel was doing God\'s work. The pamphlet steeled the noble armies. On May 15 at Frankenhausen, six thousand peasants were slaughtered in thirty minutes. By the end of the war, around one hundred thousand were dead.\n\n' +
        'In the autumn of 1525 I wrote to Clement VII, the new pope: "I told you. Luther turned reform into war. This is the result. One hundred thousand peasants are dead because the tone of one friar was too hot."\n\n' +
        'This is the lens letting you hear what I did not say aloud. I felt no satisfaction at being right. My heart broke. A lifetime of standing for the middle way had just been proved by blood — and nobody thanked me:\n\n' +
        'No peasant thanked me for warning Luther — no peasant had ever read my Latin books.\n' +
        'No lord thanked me for resisting violence — they wanted Luther\'s heat, not my restraint.\n' +
        'No pope thanked me — I was still attacking them too.\n\n' +
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
        '我 69 岁,得了痢疾加风湿,在床上躺了两个多月。身边没有家人(我私生子出身,30 岁起没回过家),只有 3 个朋友和印刷店老板的儿子 Hieronymus Froben。\n\n' +
        '我留下 80 多本书,3000 多封信。\n\n' +
        '凌晨 3 点左右,我对 Hieronymus 说了最后一句话,用荷兰文(我从小说的方言,不是一辈子写的拉丁文)——"亲爱的上帝"(Lieve God)。然后断气。\n\n' +
        '这一遍让你听见我活了 70 年没说出口的内心——是这个视角的最后一段。\n\n' +
        '我没看见 Reformation 走向哪里。我死时新教和天主教已打了 19 年,后面还要打 112 年才有 Westphalia 1648。我没看见 Trent 1545 开会从内部改革天主教腐败——那本是我一辈子主张的"内部改革"路线的胜利。我没看见利玛窦 1583 把天主教带到中国,没看见美国 First Amendment 1791。\n\n' +
        '我活着时两边都不要我;我死时不知道历史会怎么对我。\n\n' +
        '但我没后悔走桥的路。\n\n' +
        '我相信:慢慢来比一刀切对——即使一刀切赢了,慢慢来还是对的。中道不是因为效果好,是因为它对。\n\n' +
        '这是我 70 年学到的最后一件事。我把它留在这里。',
      en:
        'In the early hours of July 12, 1536. Basel. A room above Froben\'s print shop.\n\n' +
        'I am sixty-nine. Dysentery (one of the most common ways Europeans died in this age) plus rheumatism. I have been in bed more than two months. No family in the room — born illegitimate, gone from home at thirty, I have none in this sense — only three friends and the printer\'s son, Hieronymus Froben.\n\n' +
        'I leave behind more than eighty books and over three thousand letters.\n\n' +
        'Around three in the morning I speak my last words to Hieronymus. In Dutch — the dialect of my childhood, not the Latin I have written all my adult life — Lieve God. "Dear God." Then I die.\n\n' +
        'This is the lens letting you hear what I never said aloud across seventy years. The last passage of this perspective.\n\n' +
        'I never saw where the Reformation would go. By my death, Protestants and Catholics have fought nineteen years; they will fight another hundred and twelve before the Peace of Westphalia in 1648. I never saw the Council of Trent open in 1545 and reform Catholic corruption from inside — the very path I argued for my whole life. I never saw Matteo Ricci carry Catholicism into China in 1583, or the American First Amendment in 1791.\n\n' +
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
        '你刚演完 Erasmus,一个 Rotterdam 私生子,69 岁孤独死,新教骂他懦夫,天主教 23 年后把他所有书烧了。\n\n' +
        '一个问题:Erasmus 的"内部改革"路线 vs Luther 的"分裂"路线,哪种对?\n\n' +
        '**一种说法**:Luther 赢了。Reformation 真的发生,新教和天主教永远分裂。政教分离、个人良心权、First Amendment——都建在 Luther 1517 那一锤上。Erasmus 想用幽默 + 学问慢慢改良,这条路 1525 年就被农民战争证明走不通:教会腐败靠边注和学者书信改不动,只能靠"我在此立"那种姿态打破。温和在革命时代等于纵容腐败。\n\n' +
        '**另一种说法**:Erasmus 是对的,但赢不了。他的判断 1525 年被血验证:10 万农民死;后面还有 1572 Saint Bartholomew 屠杀、Thirty Years\' War 死 800 万——这是分裂路线真正的代价。Trent 1545 之后天主教真的从内部改革了,正是 Erasmus 一辈子主张的。他不是错,是太早太弱;印刷术放大的是 Luther 的口气,不是他的克制。引信已经点燃,中道没有立足之地——桥这种角色在革命时代永远没人要。\n\n' +
        '两边都站得住。想 30 秒。',
      en:
        'You have just played Erasmus, an illegitimate son of Rotterdam, dying at sixty-nine above a Basel print shop, cursed as a coward by Protestants while he lived, every book he wrote burned by the Pope twenty-three years after his death.\n\n' +
        'One question. Was Erasmus right with his "reform from within," or was Luther right with his break?\n\n' +
        '**One view —** Luther won. The Reformation actually happened; Protestant and Catholic split forever. Separation of church and state, the individual conscience, the First Amendment — all built on the hammer-blow of 1517. Erasmus wanted to reform gently with humor and learning, and the 1525 Peasants\' War proved that path could not move: corruption cannot be cured by marginal notes and scholar\'s letters, only broken by the posture of "Here I stand." Gentleness in an age of revolution is the same as enabling rot.\n\n' +
        '**The other view —** Erasmus was right, but he could not win. He was vindicated in blood in 1525 — one hundred thousand peasants died, then the 1572 Saint Bartholomew\'s massacre and the 1618-1648 Thirty Years\' War with eight million dead — the real cost of schism. After 1545 the Council of Trent did reform the Catholic Church from within, exactly what Erasmus argued for his whole life. He was not wrong; he was too early and too weak, and the press amplified Luther\'s heat, not his restraint. The fuse was lit and the middle had nowhere to stand — the bridge is the role nobody wants in an age of revolution.\n\n' +
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
        '1516 年 Erasmus 50 岁出 Greek 新约。同一年中国是明朝正德 11 年,王阳明 44 岁,在江西做官平定地方乱事,1521 年完成"知行合一 + 致良知"体系。\n\n' +
        '问一个问题:中国有没有 Erasmus 这种"桥"——既不站老权威(朱子理学正统),也不主张分裂革命?\n\n' +
        '答案:有,就是王阳明本人。\n\n' +
        '他在朱子理学正统(明朝官学)和陆九渊心学之间做桥:不说朱子"格物致知"全错,但主张人不能向外格物,只能向内致良知——这是一种内部改革,跟 Erasmus 在天主教内主张改良不分裂结构相同。\n\n' +
        '但王阳明的桥跟 Erasmus 的有一个根本不同:中国是皇权统摄,没有"独立教会"这种对象。王阳明能做个人哲学(内心找答案),却不可能做"内部教会改革",因为没有独立教会让他改。Erasmus 想做的"在天主教内部改革教皇腐败",在中国根本不存在。\n\n' +
        '**一种说法**:中国的桥没有独立教会,只能做个人哲学(心学),不能做制度运动。一枚硬币两面。\n\n' +
        '**另一种说法**:中国大一统防止了 Reformation 那 130 年血流(明朝同期没在宗教战争里死 800 万),但也没催生政教分离 + First Amendment。也是一枚硬币两面。\n\n' +
        '两边都站得住。想 30 秒。',
      en:
        'Now shift to a different angle.\n\n' +
        'In 1516 Erasmus, fifty, published the Greek New Testament. The same year, in China, the Ming dynasty was in the eleventh year of the Zhengde reign. Wang Yangming was forty-four, an official in Jiangxi putting down regional disturbances; by 1521 he would finish his system of "the unity of knowledge and action" and "extending innate moral knowing."\n\n' +
        'A question. Was there a Wang Yangming who played the same role as Erasmus — neither defending the old authority (the Zhu Xi orthodoxy that ran the Ming examinations) nor calling for revolutionary rupture?\n\n' +
        'Yes. Wang Yangming himself.\n\n' +
        'He stood as a bridge between Zhu Xi orthodoxy (the official Ming philosophy) and the Lu Jiuyuan school of mind: not calling Zhu Xi entirely wrong, but arguing one cannot reach truth by examining outer things, only by extending inner moral knowing — a kind of internal reform, the same shape as Erasmus pressing for reform inside the Catholic Church without breaking from it.\n\n' +
        'But Wang\'s bridge differed in one fundamental way: China\'s structure was imperial absorption, with no "independent Church" as a counter-institution. Wang could do personal philosophy — find truth in the inner mind — but not an internal Church reform, because there was no independent Church to reform. What Erasmus tried — reforming Pope-corruption from inside the Catholic Church — could not exist in China.\n\n' +
        '**One view —** China\'s bridge, lacking an independent Church, could only become personal philosophy (the school of mind), never an institutional movement (Erasmus\'s reform from within). Two faces of one coin.\n\n' +
        '**The other view —** China\'s unified structure prevented the Reformation\'s hundred and thirty years of blood (Ming China did not lose eight million to religious war in this period), but it also did not produce the separation of church and state, nor the First Amendment that grew from it. Also two faces of one coin.\n\n' +
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
        '你刚走完 Erasmus 11 节,他 1536 年凌晨在 Basel 印刷店楼上死,以为故事结束了。\n\n' +
        '但 23 年后(1559),新任教皇 Paul IV 出禁书索引,他 80 多本书全部列入。他活着时被两边骂,死后还被烧了一遍——这是桥在革命时代的命运,任何温和派的命运。再过几百年,他被誉为"现代理性的祖先""批判性思维之父",但这些标签他活着时没听见。\n\n' +
        '他跟 Pico 1486《论人的尊严》精神同源——都主张"人有自由选择良心"。Pico 把它做成哲学;Erasmus 用幽默 + 学问做制度改良;Luther 在 Wittenberg 把它变成政治革命。同一思想,3 种走法。\n\n' +
        '放下这个视角之前,给我一句话:这次扮演里,哪个瞬间最让你停了一下?(可能是 Matthew 4:17 那条边注,也可能是 1525 年我写信给教皇说 10 万农民死了、却没人感激我那一刻。)\n\n' +
        '说完,你也可以换视角重玩:Luther 视角看"我在此立",或 Sister Agnes 视角看 1539 一个普通修女怎么活下来;也可以回 atlas-lab/renaissance 看 1486 Pico Oration。',
      en:
        'You have walked through Erasmus across eleven sections. He died early in 1536 above a Basel print shop, thinking the story ended there.\n\n' +
        'Twenty-three years later, in 1559, Pope Paul IV issued the Index of Forbidden Books, and every one of his more than eighty books was banned. Cursed by both sides while he lived, burned again after he died — the fate of the bridge in an age of revolution, the fate of any moderate. Centuries later he is honored as "the father of modern reason" and "the father of critical thinking," but he never heard those labels.\n\n' +
        'Erasmus is the human face of one Renaissance gift to the Reformation: printing and humanism. He is the spiritual descendant of Pico\'s 1486 Oration on the Dignity of Man — "the human being can choose his own conscience." Pico made it philosophy in Florence; Erasmus made it institutional reform through humor and learning; Luther turned it into political revolution at Wittenberg. The same idea, three paths.\n\n' +
        'Before you set this perspective down, give me one line: which moment made you pause? (Maybe the marginal note on Matthew 4:17, maybe the autumn of 1525 when I wrote to the pope that a hundred thousand peasants had died and not one person thanked me.)\n\n' +
        'Then you can replay through a different perspective: Luther, to feel "Here I stand," or Sister Agnes, to see how an ordinary nun survived the dissolution of her convent in 1539; or return to atlas-lab/renaissance and look at the 1486 Pico Oration. Luther and I are both Pico\'s descendants, but we walked in different directions.',
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
        'In 1539 the larger houses began to fall too — houses like ours, with an annual income of two hundred pounds or more —\n\n' +
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
        '我写了一些东西——日记,我对 Henry VIII / Cromwell / Reformation 的看法。不公开发表(我没那个胆,Calvin 已经禁了 Marie Dentière 1539 在 Geneva 写的女人神学),只写给自己看。\n\n' +
        '我 1567 年死时,小屋房东收尸。他不识字,日记 当废纸烧了。\n\n' +
        '——\n\n' +
        '我没有变成 martyr,没死在火刑柱上,没有 Calvin 的 Servetus 1553 那样的戏剧死亡。\n\n' +
        '我只是活下来,然后慢慢,一个人,死了。\n\n' +
        'Reformation 解放了一些女性——新教鼓励普通家庭主妇读 Bible,Lutheran 学校 1550 年代开始教女孩 read+write。我 8 年前教的那个 9 岁学生活到 70 岁,她孙女是西方第一代认字的女性平民之一。\n\n' +
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
        '你刚跟 Sister Agnes 走完 1539/5/12 那天,加之后 28 年。\n\n' +
        '现在想一个问题:Reformation 是不是"宗教解放"?两边都有真证据。\n\n' +
        '**一种说法**——Reformation 解放了普通家庭主妇,让女性读 Bible 成可能。Lutheran 学校 1550 年代开始教女孩 read+write。Agnes 祖母那代女性识字率不到 5%,到 1620 年代英国已到 30%——把女性的知识空间从无到有创造出来。\n\n' +
        '**另一种说法**——Reformation 也关掉了传统女性的 institutional 空间。修女院是中世纪极少数让女性独立(不结婚 + 受教育 + 有 community)的去处,Henry VIII 1536-1540 关上 800+ 修道院,等于关上这种可能。Calvin 1539 禁 Marie Dentière,新教学校只雇男老师。1450-1750 年欧洲烧死 4-6 万"女巫",75-85% 是女性,多是寡妇老妇;天主教新教都烧,不是谁比谁多。英国到 1869 年 Cambridge Girton 才再有 women\'s colleges。\n\n' +
        '两边都站得住:一种把女性"抬上来",另一种把女性的空间"关下去"。\n\n' +
        '你怎么看?想 30 秒。',
      en:
        'You have just walked with Sister Agnes through May 12, 1539, and the twenty-eight years that followed.\n\n' +
        'Now pause for one question. Was the Reformation a "religious liberation"?\n\n' +
        'Both sides have real evidence.\n\n' +
        '**One view —** the Reformation freed the ordinary housewife and made it possible for women to read the Bible. Lutheran schools began teaching girls to read and write in the 1550s. In Agnes\'s grandmother\'s generation fewer than five women in a hundred could read; by the 1620s roughly three in ten in England could — a knowledge space for the ordinary woman, created from nothing.\n\n' +
        '**The other view —** the Reformation also closed the traditional female institutional space. The convent was one of the very few medieval European places that let a woman live independently (unmarried, educated, in a community of women); between 1536 and 1540 Henry VIII closed more than eight hundred religious houses, closing that possibility. In 1539 Calvin silenced Marie Dentière; the new Protestant schools hired only men. Between 1450 and 1750 Europe executed forty to sixty thousand "witches," seventy-five to eighty-five percent of them women, mostly widows and the old; Catholic and Protestant lands both burned, not a question of who burned more. After Henry closed the convents, England had no women\'s college again until Cambridge\'s Girton in 1869.\n\n' +
        'Both sides stand: one lifts women up, the other closes the old female space down.\n\n' +
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
        '想象一个 1539 年苏州或杭州的 32 岁女性。她不是修女(中国没有大规模 Cistercian 那种修女院),是个商人的妻子,生了 3 个孩子,丈夫做织布生意。\n\n' +
        '问题:她有没有可能像 Agnes 一样,某个早上被国家强制赶出一个 institution?\n\n' +
        '答案:**几乎不可能**——因为中国从来没建过"独立女性 institution"。\n\n' +
        '中国女性几乎没有 institutional space(除了寺院尼姑,数量远少于欧洲修道院)。她们的"独立"靠家族内 + 母亲角色这些 informal 路径,不是 institution——所以中国没有"修道院解散"这种事。\n\n' +
        '一种说法:Agnes 经历的是"曾经有 institution + 然后被国家关掉"的特殊脆弱——这种经历中国 1539 年女性不会有。\n\n' +
        '另一种说法:但中国 1539 年女性活在另一种结构性脆弱里——明朝缠足 + 童养媳 + 寡妇守节 + 没有修女院这种"不结婚也能生活"的退路。这是另一种"没有空间"。\n\n' +
        '两种文化对女性的不同结构安排,各有各的代价。两边都站得住。\n\n' +
        '你怎么看?1539 年生在 Lincolnshire 还是苏州,哪种处境更难?想 30 秒。',
      en:
        'A second question, this one a cross-cultural anchor.\n\n' +
        'In the same year — 1539 — in Ming China, the eighteenth year of the Jiajing reign.\n\n' +
        'Picture a thirty-two-year-old woman in Suzhou or Hangzhou in 1539. She is not a nun — China had no large Cistercian-style convent system. She is the wife of a merchant, three children, her husband trades in cloth.\n\n' +
        'Question: could she, like Agnes, be turned out of an institution by the state one morning?\n\n' +
        'Answer: **almost certainly not** — because China had never built an independent female institution.\n\n' +
        'Female institutional space in China was almost absent (Buddhist and Daoist nuns existed, but in numbers far smaller than European convents). Women\'s independence rested on informal routes — within the lineage, the role of mother — not institutions. So China had no "dissolution of the monasteries."\n\n' +
        'One view: Agnes experienced a vulnerability specific to Europe — an institution had once existed, and the state took it away. A 1539 Chinese woman did not have that experience.\n\n' +
        'The other view: but the 1539 Chinese woman lived inside a different structural vulnerability — Ming-era footbinding, child-bride betrothals, widow chastity codes, and no convent fallback for the unmarried life. Its own kind of having no space.\n\n' +
        'Two different structural arrangements for women, each with its own cost. Both sides stand.\n\n' +
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
        '你刚从 Sister Agnes 视角走完 1539/5/12 那天,加之后 28 年。一个虚构合成的 32 岁修女,代表 1536-1540 Henry VIII 解散修道院时被赶出的约 8000 个英国修女。\n\n' +
        '进记忆考核前问你:这一遍里最让你停一下的是什么?(也许是 5/12 早上签下"Sister Agnes"那一刻——18 年里你从没用过别的名字;也许是 60 岁孤独死那年,房东不识字把你 20 年的日记当废纸烧了。)说一句话告诉我。\n\n' +
        '\n\n' +
        '—\n\n' +
        '\n\n' +
        '**最后一件事**:\n\n' +
        '我死了,没人记我名字。史书写 Henry VIII、Cromwell、Act of Suppression 1536/1539,不写我们这些 ex-修女的下半生。\n\n' +
        'Agnes 这种承受方视角,atlas-lab 里没有——Atlas 写的多是 Luther、Henry VIII 这些有名字的行动者。没名字的修女,只有这样演一遍才能完整经历她一天。\n\n' +
        '这段历史还有另两个视角:Luther(95 条钉门人)和 Erasmus(没人要的桥)。做完这两个,你会发现一个 micro-detail 把三个视角连起来——我不说是什么,自己 connect 那一刻比我直接告诉你重得多。\n\n' +
        '然后——记忆考核:拼写、定义、应用题,把今天演过的变成你记得的。',
      en:
        'You have just walked through May 12, 1539, and the twenty-eight years that followed, from inside Sister Agnes — a fictional composite nun at thirty-two who stands for the roughly eight thousand English nuns turned out of their houses between 1536 and 1540.\n\n' +
        'Before the mastery check, one question: in this playthrough, what was the moment that made you pause? (Maybe the morning of May 12, when you signed "Sister Agnes," the only name you had used in eighteen years; maybe the year you died alone at sixty, when the landlord, who could not read, burned your twenty years of diary as refuse.) Tell me in one sentence.\n\n' +
        '\n\n' +
        '—\n\n' +
        '\n\n' +
        '**One last thing.**\n\n' +
        'I died. No one recorded my name. The chronicles write Henry VIII, Cromwell, the Act of Suppression of 1536 and 1539 — not the rest of the lives of us turned-out nuns.\n\n' +
        'A receiving-end view like Agnes\'s is not in atlas-lab — the atlas mostly carries named actors like Luther and Henry VIII. A nameless nun: only playing it from inside like this can let you live one of her days whole.\n\n' +
        'There are two other perspectives in this Topic: Luther (the man who nailed the theses) and Erasmus (the bridge no one wanted). Do those two and you will find one micro-detail that links all three views. I will not say what it is — that moment you connect it yourself is worth far more than my telling you.\n\n' +
        'Now — the mastery check: spelling, definitions, application questions — turning what you just played into what you actually remember.',
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
      en: 'She is a thirty-two-year-old Cistercian nun in a Lincolnshire convent, taken in at fourteen, who has not seen the world outside the cloister in eighteen years (a composite character standing in for the roughly eight thousand English nuns expelled when the monasteries were dissolved between 1536 and 1540). On a May 1539 morning Henry VIII\'s men stand in the courtyard waiting for her to sign. This pass walks out with her after that signature, watching a woman with a five-pound pension and a status no one outside knows how to receive, on to the lonely morning twenty-eight years later when she dies.',
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
