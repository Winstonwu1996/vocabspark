// ─── 同伴笔记本架构 v1 · The Byzantine Empire 拜占庭帝国 ──────────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
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
//   - storyboard 提供情感锚点（查士丁尼重建 / 狄奥多拉尼卡暴乱 / 修女安娜圣像争议三条线）
//   - notebook 提供考点闭环（1054 大分裂 / 1453 陷落补完课纲）
//   - storyAnchor.mentionedIn 把"故事里的彩蛋"和"考点卡"双向绑定
//
// 课纲对齐：
//   - AP World History KC-1.1 (post-classical)
//   - California HSS 7.1
//   - 弥补 byzantine-rise 课纲覆盖率从 ~88% → ~97%
//
// schemaVersion: 1 · notebookVersion: byzantine-rise-v1

export var notebook = {
  topicId: 'byzantine-rise',
  topicNameCn: '拜占庭帝国',
  topicNameEn: 'The Byzantine Empire',
  schemaVersion: 1,
  companion: {
    nameCn: '小薇',
    nameEn: 'Xiaowei',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小薇预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天要读拜占庭帝国（约 330-1453 年）。老师说它是"罗马帝国的续集，
但大家总是忘记它存在"——西罗马 476 年灭亡，但东边这一半又撑了将近 1000 年！

老师在黑板上写了这些名字：

查士丁尼一世（Justinian I）、狄奥多拉皇后（Empress Theodora）

关键词：Corpus Juris Civilis（查士丁尼法典）、Hagia Sophia（圣索菲亚大教堂）、
Iconoclasm（圣像破坏运动）、caesaropapism（皇帝教皇主义）、
Great Schism（大分裂，1054年）、Constantinople（君士坦丁堡）

老师还说："拜占庭帝国是个桥——它把古希腊罗马的知识
传给了文艺复兴时代的欧洲。1453 年它陷落那天，中世纪就算结束了。"

我先把这张单子记下来，等下读三个故事——查士丁尼、狄奥多拉、修女安娜——
读完再回来对照，看我能不能解释每个词。`,
    en: `Today we're reading about the Byzantine Empire (c. 330-1453). My teacher said
it's "the sequel to the Roman Empire that everyone forgets" — the Western Roman
Empire fell in 476, but the eastern half survived for almost 1,000 more years!

Teacher wrote these names on the board:

Justinian I, Empress Theodora

Key terms: Corpus Juris Civilis, Hagia Sophia,
Iconoclasm, caesaropapism,
Great Schism (1054), Constantinople

Teacher also said: "The Byzantine Empire was a bridge — it passed ancient Greek
and Roman knowledge to Renaissance Europe. The day it fell in 1453,
the Middle Ages were considered over."

Let me write down this list. After I read three stories — Justinian, Theodora,
and Sister Anna — I'll come back and check whether I can explain every term.`,
    keyTerms: [
      { cn: '查士丁尼法典', en: 'Corpus Juris Civilis' },
      { cn: '圣索菲亚大教堂', en: 'Hagia Sophia' },
      { cn: '圣像破坏运动', en: 'Iconoclasm' },
      { cn: '皇帝教皇主义', en: 'caesaropapism' },
      { cn: '大分裂（1054年）', en: 'Great Schism (1054)' },
      { cn: '君士坦丁堡', en: 'Constantinople' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚+IPA+audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '查士丁尼一世',
        nameEn: 'Justinian I',
        ipa: '/dʒʌˈstɪniən/',
        roleCn: '拜占庭皇帝（527-565年），重新征服西地中海，颁布查士丁尼法典',
        roleEn: 'Byzantine emperor (527-565), reconquered the western Mediterranean, issued the Corpus Juris Civilis',
        mustKnow: true,
        audioKey: 'justinian-i',
      },
      {
        nameCn: '狄奥多拉皇后',
        nameEn: 'Empress Theodora',
        ipa: '/ˌθiːəˈdɔːrə/',
        roleCn: '查士丁尼之妻，尼卡暴乱中挽救王朝，拜占庭最具实权的女性统治者',
        roleEn: "Justinian's wife, saved the dynasty during the Nika Revolt, most powerful female ruler in Byzantine history",
        mustKnow: true,
        audioKey: 'empress-theodora',
      },
      {
        nameCn: '君士坦丁堡',
        nameEn: 'Constantinople',
        ipa: '/ˌkɒnstæntɪˈnoʊpəl/',
        roleCn: '拜占庭帝国首都，今伊斯坦布尔，1453年被奥斯曼帝国攻陷',
        roleEn: 'Byzantine capital, modern-day Istanbul, fell to the Ottoman Empire in 1453',
        mustKnow: true,
        audioKey: 'constantinople',
      },
      {
        nameCn: '穆罕默德二世',
        nameEn: 'Mehmed II',
        ipa: '/ˈmɛhmɛd/',
        roleCn: '奥斯曼苏丹，1453年攻陷君士坦丁堡，标志拜占庭帝国灭亡',
        roleEn: 'Ottoman sultan who conquered Constantinople in 1453, ending the Byzantine Empire',
        mustKnow: false,
        audioKey: 'mehmed-ii',
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'justinian-reconquest',
      termCn: '查士丁尼 / 帝国重建',
      termEn: 'Justinian I / Imperial Reconquest',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'justinian-perpetrator-actor',
        nodeIds: ['justinian-N1', 'justinian-N4', 'justinian-N8'],
        xiaoweiNote: {
          cn: `这个在第一条故事线全都讲到了。查士丁尼（Justinian I，527-565年在位）
继承了一个已经丢掉西罗马的帝国，但他的目标是"复原"——把北非（旧罗马的
迦太基行省）和意大利都打了回来。

他的将军贝利撒留（Belisarius）是真正打仗的人，
查士丁尼自己留在君士坦丁堡（Constantinople）搞政策。

考点关键句：查士丁尼是拜占庭帝国最雄心勃勃的皇帝——他短暂地"复原"了
西地中海领土，但这些新领土在他死后几十年内大多又丢失了。

careful framing：重新征服需要巨额军费，压垮了帝国财政，也是尼卡暴乱
（532年）的背景原因之一——穷苦百姓交不起税。`,
          en: `The first story line covers all of this. Justinian I (r. 527-565) inherited
an empire that had already lost the western half, but his goal was "restoration" —
he fought back North Africa (the old Roman province of Carthage) and Italy.

His general Belisarius was the one actually fighting; Justinian stayed in
Constantinople managing policy.

Key exam sentence: Justinian was the most ambitious Byzantine emperor — he briefly
"restored" western Mediterranean territory, but most of these new lands were
lost again within decades of his death.

Careful framing: the reconquest required enormous military spending, which crushed
imperial finances and was part of the background cause of the Nika Revolt (532) —
ordinary people couldn't pay their taxes.`,
        },
      },
    },

    {
      id: 'corpus-juris-civilis',
      termCn: '查士丁尼法典（Corpus Juris Civilis）',
      termEn: 'Corpus Juris Civilis / Justinian Code',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.1'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'justinian-perpetrator-actor',
        nodeIds: ['justinian-N5', 'justinian-N9'],
        xiaoweiNote: {
          cn: `这是查士丁尼最重要的遗产——比军事征服更持久。

Corpus Juris Civilis（/ˈkɔːrpəs ˈdʒʊərɪs ˈsɪvɪlɪs/，拉丁语"公民法大全"），
完成于 534 年。它把几百年积累的罗马法律、皇帝诏令、法学家评注
全部整理成一套有条理的法典。

考点关键句：查士丁尼法典是西方法律传统的基础——今天欧洲大陆的
民法体系（法国、德国、意大利……）都可以追溯到它。

故事里讲到一个画面：法学家特里波尼安（Tribonian）带着一队抄写员，
在宫殿图书馆里翻出几百年的旧羊皮卷，一条一条整理成今天看到的法典。
这不是一个人写的——是一个朝廷工程。

AP 陷阱：有人问"罗马法是查士丁尼发明的吗"——不是。
他是整理者（compiler），不是创造者（creator）。
真正的罗马法从共和时代就开始积累了。`,
          en: `This is Justinian's most important legacy — more lasting than military conquest.

Corpus Juris Civilis (/ˈkɔːrpəs ˈdʒʊərɪs ˈsɪvɪlɪs/, Latin for "body of civil law"),
completed in 534. It organized hundreds of years of Roman laws, imperial decrees,
and legal commentaries into one coherent code.

Key exam sentence: The Justinian Code is the foundation of the Western legal tradition —
today's continental European civil law systems (France, Germany, Italy...) all trace
back to it.

The story shows a scene: the jurist Tribonian leads a team of scribes through the
palace library, pulling centuries of old parchment scrolls and organizing them
into the code we know today. This wasn't written by one person — it was an
imperial project.

AP trap: people ask "Did Justinian invent Roman law?" — no. He was a compiler,
not a creator. True Roman law had been accumulating since the Republic.`,
        },
      },
    },

    {
      id: 'hagia-sophia',
      termCn: '圣索菲亚大教堂（Hagia Sophia）',
      termEn: 'Hagia Sophia / Church of Holy Wisdom',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'justinian-perpetrator-actor',
        nodeIds: ['justinian-N6', 'justinian-N7'],
        xiaoweiNote: {
          cn: `这个我在故事里读到了——查士丁尼建圣索菲亚大教堂（Hagia Sophia，
/ˈhæɡiə soʊˈfiːə/，希腊语"神圣智慧"）的时候，据说走进完工的大厅时说：
"所罗门，我超越你了！"（指《圣经》里的所罗门圣殿。）

建于 532-537 年，正好是尼卡暴乱烧毁旧教堂之后。
这座建筑是政治宣示——告诉全世界"拜占庭没有垮，反而更强了"。

考点关键句：圣索菲亚大教堂是拜占庭建筑的顶峰，也是东正教（Eastern Orthodox）
文明的象征。1453 年奥斯曼帝国占领君士坦丁堡后，它被改成清真寺；
2020 年土耳其政府再次将其改为清真寺（此前是博物馆）。

它的穹顶设计（dome on a square base 方形底座上的穹顶）影响了后来
整个伊斯兰世界的清真寺建筑。`,
          en: `I read this in the story — when Justinian entered the completed hall of
Hagia Sophia (/ˈhæɡiə soʊˈfiːə/, Greek for "Holy Wisdom"), he reportedly said:
"Solomon, I have surpassed you!" (referring to Solomon's Temple in the Bible.)

Built 532-537, right after the Nika Revolt burned down the old church.
The building was a political statement — telling the world "Byzantium hasn't
collapsed; it's stronger than ever."

Key exam sentence: Hagia Sophia is the pinnacle of Byzantine architecture and
a symbol of Eastern Orthodox civilization. After the Ottoman Empire captured
Constantinople in 1453, it was converted into a mosque; in 2020 Turkey's
government converted it back into a mosque (it had been a museum).

Its dome-on-a-square-base design influenced Islamic mosque architecture
throughout the world.`,
        },
      },
    },

    {
      id: 'theodora-nika-revolt',
      termCn: '狄奥多拉 / 尼卡暴乱',
      termEn: 'Empress Theodora / Nika Revolt',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'theodora-lonely-mediator',
        nodeIds: ['theodora-N3', 'theodora-N7', 'theodora-N10'],
        xiaoweiNote: {
          cn: `整条故事线就是她。狄奥多拉（Empress Theodora，/ˌθiːəˈdɔːrə/）
出身低微——她父亲是竞技场的驯熊师，她年轻时是杂技演员兼女演员，
当时这类职业在拜占庭社会属于最低等。她和查士丁尼相爱后，
查士丁尼甚至修改了法律才能娶她（原来禁止元老级官员娶女演员）。

尼卡暴乱（532年）：两个赛车派系——绿队和蓝队——联手反抗查士丁尼，
烧掉半个君士坦丁堡，喊着"尼卡！"（希腊语"胜利！"）冲向皇宫。
查士丁尼打算跑路，是狄奥多拉站出来说了那句话：

"帝位是最好的墓穴。"

意思是：死在皇位上，也比逃跑好看。查士丁尼留了下来，
贝利撒留将军镇压了暴乱，杀死约 30,000 名暴乱者。

考点关键句：狄奥多拉是拜占庭历史上权力最真实的女性统治者——
她不是"在背后影响"，而是公开参与国家决策，包括立法和外交。`,
          en: `The entire story line is about her. Empress Theodora (/ˌθiːəˈdɔːrə/)
came from humble origins — her father was a bear-keeper at the circus arena,
and she worked as an acrobat and actress, occupations that ranked at the very
bottom of Byzantine society. When she and Justinian fell in love,
Justinian had to change the law to marry her (previously senators could not
marry actresses).

Nika Revolt (532): two chariot-racing factions — Greens and Blues — united
against Justinian, burned half of Constantinople, and stormed the palace chanting
"Nika!" (Greek for "victory!"). Justinian was about to flee when Theodora stood up
and said:

"The throne is the finest burial shroud."

Meaning: dying as emperor is better than living as a fugitive. Justinian stayed.
General Belisarius crushed the revolt, killing approximately 30,000 rioters.

Key exam sentence: Theodora was the most genuinely powerful female ruler in
Byzantine history — not "influencing from behind the scenes" but openly participating
in state decisions, including legislation and diplomacy.`,
        },
      },
    },

    {
      id: 'iconoclasm',
      termCn: '圣像破坏运动（Iconoclasm）',
      termEn: 'Iconoclasm / Byzantine Iconoclast Controversy',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'sister-anna-receiving-end',
        nodeIds: ['anna-N2', 'anna-N5', 'anna-N8', 'anna-N11'],
        xiaoweiNote: {
          cn: `修女安娜的整条故事线讲的就是这场运动。

圣像破坏运动（Iconoclasm，726-843年）：拜占庭皇帝利奥三世（Leo III）
726年下令销毁教堂里所有圣像（icons）——圣母图、圣徒画像、耶稣像……
理由是：崇拜这些图像等同于"偶像崇拜"（idolatry），《圣经》明确禁止。

但是修道院的修女、普通信徒把这些圣像当成祈祷的桥梁，
不是"崇拜图像本身"，而是"通过图像感受神的临在"。

这场运动持续了一百多年，两次"破坏"两次"恢复"：
- 726-787年：第一次破坏（利奥三世启动）
- 787年：第二次尼西亚公会议（Second Council of Nicaea）宣布圣像合法
- 815-843年：第二次破坏
- 843年：最终恢复圣像（东正教至今称 843 年为"正统主日"，Triumph of Orthodoxy）

考点关键句：圣像争议是拜占庭帝国皇权和教会权力之间最激烈冲突的体现之一，
也是 1054 年东西教会大分裂的远因之一。`,
          en: `Sister Anna's entire story line is about this controversy.

Iconoclasm (726-843): Byzantine Emperor Leo III ordered the destruction of all icons
(religious images) in churches in 726 — images of the Virgin Mary, saints, Jesus...
The argument: venerating these images was equivalent to "idolatry," explicitly
forbidden in the Bible.

But monastery nuns, ordinary believers treated these icons as bridges for prayer —
not "worshipping the image itself" but "experiencing God's presence through the image."

This controversy lasted over a century, with two "destructions" and two "restorations":
- 726-787: First destruction (initiated by Leo III)
- 787: Second Council of Nicaea declared icons legitimate
- 815-843: Second destruction
- 843: Final restoration of icons (Eastern Orthodox still calls 843 the "Triumph of Orthodoxy")

Key exam sentence: The Iconoclast Controversy was one of the most intense clashes
between imperial power and church authority in Byzantine history, and was one of
the distant causes of the 1054 Great Schism between Eastern and Western churches.`,
        },
      },
    },

    {
      id: 'caesaropapism-byzantine-continuation',
      termCn: '皇帝教皇主义 / 罗马帝国的延续',
      termEn: 'Caesaropapism / Byzantine as Rome\'s Continuation',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'justinian-perpetrator-actor',
        nodeIds: ['justinian-N2', 'justinian-N10', 'justinian-N12'],
        xiaoweiNote: {
          cn: `这两个考点在故事里是绑在一起讲的。

皇帝教皇主义（caesaropapism）：拜占庭皇帝既是政治最高领袖（Caesar）
也实际控制教会（Pope的功能）。和西欧不同——西欧是罗马教皇和国王长期
争权（格里高利七世和亨利四世那场戏，"卡诺莎之辱"），拜占庭皇帝
把两套权力合一。这也是圣像破坏运动能发生的原因——皇帝说毁，教会只能执行。

拜占庭作为罗马延续：今天我们说"西罗马帝国 476 年灭亡"——但这是后来
历史学家加的标签，当时东罗马（拜占庭）的人从来不叫自己"拜占庭"，
他们自称"罗马人"（Romaioi），皇帝自称"罗马皇帝"（Basileus ton Rhomaion）。

考点关键句：拜占庭帝国保存并传递了古希腊哲学、罗马法律和基督教神学，
是欧洲文明连续性的关键桥梁。它的存在使东欧（俄罗斯、保加利亚、塞尔维亚）
皈依了东正教，形成了有别于西欧的另一个文明圈。`,
          en: `These two concepts are taught together in the story.

Caesaropapism: Byzantine emperors were simultaneously the supreme political leader
(Caesar) and effectively controlled the church (the Pope's function). Unlike Western
Europe — where the Roman Pope and kings fought endlessly for power (the drama of
Gregory VII vs Henry IV, "Walk to Canossa") — the Byzantine emperor merged both
powers into one. This is also why Iconoclasm could happen: when the emperor
said destroy, the church had to comply.

Byzantium as Rome's continuation: We say today "the Western Roman Empire fell in 476" —
but that label was added by later historians. At the time, people in the Eastern Roman
Empire (Byzantium) never called themselves "Byzantine." They called themselves
"Romans" (Romaioi), and their emperor called himself "Emperor of the Romans"
(Basileus ton Rhomaion).

Key exam sentence: The Byzantine Empire preserved and transmitted ancient Greek
philosophy, Roman law, and Christian theology — a critical bridge for European
civilizational continuity. Its existence led Eastern Europe (Russia, Bulgaria,
Serbia) to adopt Eastern Orthodox Christianity, forming a distinct civilization
different from Western Europe.`,
        },
      },
    },

    {
      id: 'great-schism-1054',
      termCn: '东西教会大分裂（1054年）',
      termEn: 'Great Schism of 1054 / Eastern Orthodox vs Roman Catholic',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'sister-anna-receiving-end', nodeId: 'anna-N6', context: '安娜修女在圣像争议中意识到罗马和君士坦丁堡对教会权威的理解根本不同' },
          { lens: 'justinian-perpetrator-actor', nodeId: 'justinian-N11', context: '查士丁尼时代皇帝和罗马教皇的初步摩擦' },
        ],
      },
      standaloneText: {
        cn: `1054 年 7 月 16 日，罗马教皇的使节走进圣索菲亚大教堂（Hagia Sophia），
把一份绝罚诏书（bull of excommunication）扔在祭坛上，宣布开除
君士坦丁堡牧首（Patriarch of Constantinople）米哈伊尔·凯鲁拉里乌斯的教籍。
牧首随后反手绝罚了罗马使节。

就这样——基督教一分为二，延续到今天：
东边是东正教（Eastern Orthodox），西边是罗马天主教（Roman Catholic）。

这次大分裂（Great Schism）的表面导火索：一根"无酵饼 vs 有酵饼"的面包之争，
背后是几百年积累的三大实质分歧：

1. 教皇权威：罗马教皇（Pope）主张自己是全体基督徒的最高权威——
   君士坦丁堡牧首拒绝接受，认为五大主教区应当平等。
2. "和子"争议（Filioque）：《尼西亚信经》里圣灵从圣父"和圣子"共同发出，
   还是只从圣父发出？拉丁西方加了"Filioque"（"和子"），东方认为这是擅改。
3. 圣像争议：Iconoclasm 让东西方在图像崇拜问题上积怨已久。

1054 年之后：
- 东正教扩展到俄罗斯、东欧、希腊，形成"拜占庭文明圈"
- 天主教控制西欧，发动十字军，建立教皇国
- 两个传统今天仍然分裂（正式和解从未完成，尽管 1965 年双方互相撤销了绝罚）`,
        en: `On July 16, 1054, a papal legate from Rome walked into Hagia Sophia,
slammed a bull of excommunication on the altar, and declared the Patriarch of
Constantinople — Michael Cerularius — expelled from the church. The Patriarch
immediately excommunicated the Roman legate in return.

And just like that, Christianity split in two — a divide that continues today:
East became Eastern Orthodox, West became Roman Catholic.

The surface trigger of this Great Schism: a dispute over whether to use unleavened
or leavened bread for the Eucharist. The real substance was three major disagreements
built up over centuries:

1. Papal authority: The Pope in Rome claimed supreme authority over all Christians —
   the Patriarch of Constantinople refused, arguing the five great patriarchies
   should be equals.
2. The Filioque controversy: In the Nicene Creed, does the Holy Spirit proceed from
   the Father "and the Son" (Filioque), or from the Father alone?
   The Latin West had added "Filioque"; the East considered this an unauthorized change.
3. The icon controversy: Iconoclasm had built up years of resentment between East and West.

After 1054:
- Eastern Orthodoxy spread to Russia, Eastern Europe, and Greece, forming the
  "Byzantine civilization sphere"
- Roman Catholicism controlled Western Europe, launched the Crusades, established
  the Papal States
- The two traditions remain divided today (formal reconciliation has never occurred,
  though in 1965 both sides withdrew their mutual excommunications)`,
      },
      xiaoweiNote: {
        cn: `老师说 AP 和州考都考过大分裂——主要考"分歧点是什么"（三点）和
"拜占庭帝国怎样把东正教传到俄罗斯"（文明辐射）。

我的记忆口诀：大分裂 = 权威 + 信经 + 圣像，三个词各代表三大分歧。
1054 年——比美国建国早 700 多年。`,
        en: `Teacher said both AP and state tests have tested the Great Schism —
mainly asking "what were the points of disagreement" (three points) and
"how did Byzantium spread Eastern Orthodoxy to Russia" (civilizational spread).

My mnemonic: Great Schism = authority + creed + icons — one word per disagreement.
1054 — over 700 years before the US was founded.`,
      },
    },

    {
      id: 'fall-of-constantinople-1453',
      termCn: '1453年君士坦丁堡陷落',
      termEn: 'Fall of Constantinople 1453 / End of Byzantium',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.1'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'justinian-perpetrator-actor', nodeId: 'justinian-N12', context: '查士丁尼梦境 — 他视自己重建的帝国如同永恒，但旁白暗示终有陷落之日' },
        ],
      },
      standaloneText: {
        cn: `1453 年 5 月 29 日，星期二。

凌晨两点，奥斯曼苏丹穆罕默德二世（Mehmed II，时年 21 岁）的军队
从城墙缺口冲入君士坦丁堡（Constantinople）。
拜占庭末代皇帝君士坦丁十一世（Constantine XI）脱下皇袍，
和普通士兵一起战死，尸体再未被找到。

这一天：
- 拜占庭帝国正式结束——一个从 330 年延续了 1123 年的国家
- 君士坦丁堡改名伊斯坦布尔（Istanbul），成为奥斯曼帝国首都
- 圣索菲亚大教堂被改为清真寺

为什么历史学家说 1453 年标志"中世纪结束"？
因为这件事引发了一连串改变：

1. 希腊学者西逃：大批拜占庭学者带着古希腊手稿逃往意大利
   （尤其是威尼斯和佛罗伦萨），这些文本直接点燃了文艺复兴（Renaissance）。
2. 贸易路线断裂：奥斯曼帝国控制了东西方陆路贸易要道，
   逼得葡萄牙、西班牙去找海路——直接导致大航海时代（Age of Exploration）。
3. 火药武器：穆罕默德二世用了巨型火炮（Great Bombard）轰开城墙，
   这是历史上最早的大规模火炮攻城战之一，宣告了中世纪城堡防御时代的终结。

careful framing：拜占庭帝国灭亡了，但它的文化并没有消失。
俄罗斯沙皇自称是拜占庭帝国的继承人（莫斯科 = "第三罗马"），
东正教会延续至今，《查士丁尼法典》依然是欧洲法律的基础。
所以 1453 年与其说是"终点"，不如说是一次"变形"。`,
        en: `May 29, 1453. A Tuesday.

At two in the morning, the army of Ottoman Sultan Mehmed II (age 21) poured
through a breach in the walls of Constantinople. The last Byzantine emperor,
Constantine XI, shed his imperial robes and died fighting alongside ordinary
soldiers; his body was never found.

That day:
- The Byzantine Empire officially ended — a state that had lasted 1,123 years since 330
- Constantinople was renamed Istanbul and became the Ottoman capital
- Hagia Sophia was converted into a mosque

Why do historians say 1453 marks "the end of the Middle Ages"?
Because it set off a chain reaction:

1. Greek scholars fled west: large numbers of Byzantine scholars carried ancient
   Greek manuscripts to Italy (especially Venice and Florence), and these texts
   directly ignited the Renaissance.
2. Trade routes severed: the Ottoman Empire now controlled overland trade routes
   between East and West, forcing Portugal and Spain to find sea routes —
   directly causing the Age of Exploration.
3. Gunpowder artillery: Mehmed II used enormous cannons (the Great Bombard) to
   breach the walls, one of the earliest large-scale artillery sieges in history,
   announcing the end of the medieval castle-defense era.

Careful framing: the Byzantine Empire ended, but its culture didn't disappear.
Russian tsars claimed to be Byzantium's heirs (Moscow = "Third Rome"),
the Orthodox Church continues today, and the Justinian Code remains the
foundation of European law. So 1453 is less an "ending" than a "transformation."`,
      },
      xiaoweiNote: {
        cn: `三个"因果链"考点我要背住：1453 → 文艺复兴（希腊学者西逃）、
1453 → 大航海（陆路断了找海路）、1453 → 火炮时代（大炮轰城墙）。

老师说 AP 写 essay 如果能把 1453 和后面三件事连起来，
那就是"大历史观"——extra points。`,
        en: `Three "chain of causes" exam points I need to memorize:
1453 → Renaissance (Greek scholars fled west), 1453 → Age of Exploration
(land routes cut, sea routes needed), 1453 → gunpowder era (cannon breaches walls).

Teacher said if an AP essay can connect 1453 to these three outcomes,
that shows "big-picture historical thinking" — extra points.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `查士丁尼花了几十年把罗马法整理成《查士丁尼法典》——
今天欧洲的法律体系还在用它的框架。
但是这套法典也是他专制统治的工具：
皇帝的命令就是最高法律，法官要服从皇权。

法律和权力的关系是什么？
法律是"限制权力"的，还是"服务于权力"的？
能不能两者都是？`,
      en: `Justinian spent decades compiling Roman law into the Corpus Juris Civilis —
European legal systems still use its framework today.
But this same code was also a tool of his autocratic rule:
imperial decrees were the supreme law, and judges were expected to obey imperial power.

What is the relationship between law and power?
Is law meant to "restrain power," or does it "serve power"?
Can it be both at the same time?`,
      hintCn: `提示：可以从两个角度想——(1) 法典统一了标准，让普通人知道自己有什么权利，
这是"法律限制任意权力"；(2) 但查士丁尼修改了法律才能娶狄奥多拉，
他出征的征兵税是合法的但压榨百姓——这是"权力创造对自己有利的法律"。

进阶思考：今天能不能找到类似的例子？一个国家"依法"做了让人觉得不公正的事，
或者"修改法律"让本来违法的事变合法？`,
      hintEn: `Hint: think from two angles — (1) the code unified standards and let ordinary
people know their rights, which is "law restraining arbitrary power"; (2) but Justinian
changed the law to marry Theodora, and his military tax (legal but crushing for peasants)
shows "power creating laws that benefit itself."

Going deeper: can you find similar examples today? A country doing something
that feels unjust "according to the law," or "changing the law" to legalize
something that was previously forbidden?`,
      conceptsActivated: ['corpus-juris-civilis', 'caesaropapism-byzantine-continuation'],
    },
    {
      id: 'q2',
      cn: `狄奥多拉出身杂技演员，拜占庭法律本来禁止她嫁给贵族——
但查士丁尼为她修改了法律，她最终成为皇后，
在尼卡暴乱中说出了"帝位是最好的墓穴"，挽救了整个王朝。

她的权力"合法"吗？当时的人怎么看？
如果一个人靠着修改规则才能到达权力位置，
她的决策还算数吗？`,
      en: `Theodora was born an acrobat, and Byzantine law originally forbade her
from marrying a noble — but Justinian changed the law for her, and she became
empress. In the Nika Revolt, her words "the throne is the finest burial shroud"
saved the entire dynasty.

Was her power "legitimate"? How did people at the time see it?
If someone reaches a position of power only because the rules were changed for them,
do their decisions still count?`,
      hintCn: `提示：两种视角——(1) 她的反对者（很多元老和贵族）永远觉得她"不配"，
她的出身是她一辈子的污点，有些记录她的历史学家（如普罗科匹厄斯）写了
大量不实的丑闻来黑她；(2) 她真正挽救了帝国——用结果来衡量，她的决定
比任何"合法"的贵族皇后都更正确。

进阶思考：今天我们怎么判断一个人的权力是否"合法"？是靠出身、靠规则、
靠结果，还是靠其他人对她的认可？`,
      hintEn: `Hint: two perspectives — (1) her opponents (many senators and nobles)
always felt she was "unworthy"; her background was a permanent stain, and historians
who recorded her (like Procopius) filled their accounts with unfounded scandals
to discredit her; (2) she genuinely saved the empire — judged by outcomes, her
decision was wiser than any "legitimately born" noble empress could have made.

Going deeper: how do we decide today whether someone's power is "legitimate"?
By birth? By rules? By results? By others' recognition?`,
      conceptsActivated: ['theodora-nika-revolt', 'caesaropapism-byzantine-continuation'],
    },
    {
      id: 'q3',
      cn: `1453 年，奥斯曼帝国的大炮轰开了君士坦丁堡的城墙。
拜占庭帝国就此结束——但它已经存在了将近 1000 年。

你觉得拜占庭帝国是"衰落"了，还是"变形"了？

有人说：它的法典成了欧洲法律；它的学者逃去意大利点燃了文艺复兴；
它的宗教（东正教）变成了俄罗斯和东欧的灵魂。
如果一个帝国的遗产活得比帝国本身更久，它算死了吗？`,
      en: `In 1453, Ottoman cannons breached the walls of Constantinople.
The Byzantine Empire ended — but it had existed for almost 1,000 years.

Do you think the Byzantine Empire "declined," or did it "transform"?

Some argue: its legal code became European law; its scholars fled to Italy
and ignited the Renaissance; its religion (Eastern Orthodoxy) became the soul
of Russia and Eastern Europe.
If an empire's legacy outlives the empire itself, can it really be called dead?`,
      hintCn: `提示：历史学家对这个问题有真正的争论——
"衰落论"认为内部腐败、货币贬值、军队雇佣化、领土不断缩小是真实的衰落；
"变形论"认为它在 1453 年之前已经把最重要的东西都传递出去了（法律、宗教、文化），
"死亡"只是政治形式的终结。

你认为什么叫"一个文明真正死亡"？是政治实体消失，还是文化和人消失？
今天还有没有拜占庭的"遗传基因"活在某个地方？`,
      hintEn: `Hint: historians genuinely debate this question —
the "decline" view points to internal corruption, currency debasement, mercenary
armies, and shrinking territory as real decay; the "transformation" view argues
Byzantium had already passed on its most important elements before 1453 (law,
religion, culture), and the "death" was only the end of a political form.

What does it mean for a civilization to truly die? Is it the disappearance of the
political entity, or the disappearance of the culture and people?
Are there still "genetic traces" of Byzantium alive somewhere today?`,
      conceptsActivated: ['fall-of-constantinople-1453', 'caesaropapism-byzantine-continuation', 'great-schism-1054'],
    },
  ],
};

export default notebook;
