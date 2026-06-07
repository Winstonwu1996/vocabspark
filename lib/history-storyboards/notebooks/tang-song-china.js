// ─── 同伴笔记本架构 v1 · Tang-Song China ─────────────────────────
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
// schemaVersion: 1 · notebookVersion: tang-song-china-v1

export var notebook = {
  topicId: 'tang-song-china',
  topicNameCn: '唐宋盛世',
  topicNameEn: 'Tang-Song China',
  schemaVersion: 1,
  companion: {
    nameCn: '小 U',
    nameEn: 'Xiao U',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小 U 的预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天要学唐宋盛世（618-1279年）。这是我爸妈祖国的历史，
但说实话，我在美国课上学到的都很零碎——什么"四大发明"、"万里长城"，
全都混在一起。这次要认真捋清楚。

老师给了这些名字让我先记下来：

**唐太宗**（Emperor Taizong）、**宋徽宗**（Emperor Huizong）、
**苏轼**（Su Shi / Su Dongpo）、**李清照**（Li Qingzhao）、
**朱熹**（Zhu Xi）

还有几个词：civil service exam（科举）、Four Great Inventions（四大发明）、
Silk Road（丝绸之路）、Neo-Confucianism（理学/新儒学）、
ci poetry（宋词）

我妈说过"四大发明"，但我不知道它们为什么是考点——
等下读三个故事（宋徽宗、苏轼、李清照），再回来对照这张单子。

老师特别说：不要只背年份，要想"这个朝代解决了什么问题，
又给后来留下了什么问题"——我把这句写在笔记本封面。`,
    en: `Today's topic: Tang-Song China (618-1279). This is the history of my parents'
homeland, but honestly what I know is all jumbled — "Four Great Inventions,"
"Great Wall," everything mixed up. This time I'm going to sort it out properly.

My teacher gave us names to write down first:

**Emperor Taizong** (唐太宗), **Emperor Huizong** (宋徽宗),
**Su Shi / Su Dongpo** (苏轼), **Li Qingzhao** (李清照),
**Zhu Xi** (朱熹)

Plus some terms: civil service exam (科举), Four Great Inventions (四大发明),
Silk Road (丝绸之路), Neo-Confucianism (理学), ci poetry (宋词).

My mom's mentioned "Four Great Inventions" before, but I don't know why
they matter for the test — let me read the three stories first
(Huizong, Su Shi, Li Qingzhao), then come back and check this list.

Teacher said: don't just memorize dates — think about "what problems
did this dynasty solve, and what problems did it leave behind?"
I wrote that on the cover of my notebook.`,
    keyTerms: [
      { cn: '科举制度', en: 'civil service examination (jinshi system)' },
      { cn: '四大发明', en: 'Four Great Inventions (paper, printing, gunpowder, compass)' },
      { cn: '宋词', en: 'ci poetry (Song dynasty lyric form)' },
      { cn: '丝绸之路', en: 'Silk Road (land and maritime trade routes)' },
      { cn: '理学 / 新儒学', en: 'Neo-Confucianism (Song dynasty Confucian revival)' },
      { cn: '靖康之耻', en: 'Jingkang Incident — Jin dynasty capture of Kaifeng (1126)' },
      { cn: '王安石变法', en: 'Wang Anshi Reforms (New Policies vs. Old Guard)' },
      { cn: '占城稻', en: 'Champa rice (fast-ripening strain, Song agricultural revolution)' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名+角色锚
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '唐太宗',
        nameEn: 'Emperor Taizong',
        ipa: '/taɪˈzʊŋ/',
        roleCn: '唐朝第二位皇帝，开创"贞观之治"，丝路黄金时代',
        roleEn: 'Second Tang emperor, creator of the "Reign of Zhenguan," Silk Road golden age',
        mustKnow: true,
        audioKey: 'emperor-taizong',
      },
      {
        nameCn: '朱熹',
        nameEn: 'Zhu Xi',
        ipa: '/dʒuː ʃiː/',
        roleCn: '宋朝理学集大成者，"格物致知"，影响科举千年',
        roleEn: 'Song Neo-Confucian synthesizer, "investigation of things," shaped the exam system for centuries',
        mustKnow: true,
        audioKey: 'zhu-xi',
      },
      {
        nameCn: '宋徽宗',
        nameEn: 'Emperor Huizong',
        ipa: '/hwɛɪˈzʊŋ/',
        roleCn: '宋朝皇帝，花鸟画大师，靖康之耻被金国俘虏',
        roleEn: 'Song emperor, master bird-and-flower painter, captured by Jin dynasty in 1126',
        mustKnow: true,
        audioKey: 'emperor-huizong',
      },
      {
        nameCn: '苏轼',
        nameEn: 'Su Shi (Su Dongpo)',
        ipa: '/suː ʃɪ/',
        roleCn: '北宋文学家，宋词豪放派代表，三次流放',
        roleEn: 'Northern Song writer, bold ci poetry pioneer, exiled three times',
        mustKnow: true,
        audioKey: 'su-shi',
      },
      {
        nameCn: '李清照',
        nameEn: 'Li Qingzhao',
        ipa: '/liː tɕʰɪŋˈdʒaʊ/',
        roleCn: '宋朝女词人，婉约派，靖康之难后南渡词风转悲',
        roleEn: 'Song female poet, graceful ci style, tone shifted to grief after the Jingkang Incident',
        mustKnow: true,
        audioKey: 'li-qingzhao',
      },
      {
        nameCn: '长安',
        nameEn: "Chang'an",
        ipa: '/tʃɑːŋˈɑːn/',
        roleCn: '唐朝首都（今西安），最大国际都市，丝路东端起点',
        roleEn: "Tang dynasty capital (modern Xi'an), largest international city, eastern Silk Road terminus",
        mustKnow: true,
        audioKey: 'changan',
      },
      {
        nameCn: '王安石',
        nameEn: 'Wang Anshi',
        ipa: '/wɑːŋ ɑːnˈʃɪ/',
        roleCn: '北宋改革家，推行"新法"，新旧党争主角',
        roleEn: 'Northern Song reformer, launched the New Policies, central figure in the factional conflict',
        mustKnow: true,
        audioKey: 'wang-anshi',
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    // ── 考点 1：科举制度（故事覆盖）──────────────────────────────
    {
      id: 'civil-service-exam',
      termCn: '科举制度 / 进士',
      termEn: 'Civil Service Exam / Jinshi',
      defCn: '科举是中国古代的政府选官考试——不看你的家世，只看你能不能通过考试。通过最高级别考试的人叫"进士"，可以当官。',
      defEn: 'The civil service exam was China\'s system for choosing government officials — not by family background, but by test results. Passing the top exam earned you the "jinshi" degree and a path to office.',
      standardRef: ['AP World KC-1.2', 'CA HSS 7.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        nodeIds: ['huizong-N4', 'su-shi-N1', 'su-shi-N2'],
        xiaoweiNote: {
          cn: `两个故事里都讲到科举，我来把它们放在一起对比。

**宋徽宗那条故事线里**：1104 年，翰林图画院把"考画"引入了科举。
徽宗亲自出的题目是："踏花归去马蹄香"。
所有考生都在马腿旁边画花，只有一个人画了蝴蝶跟着马跑——
因为"香"是嗅觉，不是视觉。徽宗选了那个人。

**苏轼那条故事线里**：1057 年，苏轼 21 岁参加进士考试。
主考官欧阳修觉得那篇文章写得太好了——好到怀疑是自己学生写的。
为了不让人说他偏袒，欧阳修把苏轼排成了第二名。
结果：第一名进了历史垃圾桶，苏轼被人记到了今天。

**考点关键句：**
1. 宋代科举向**平民开放**——不需要贵族出身，只要能通过考试，穷人家的孩子也可以当宰相。
2. 这是世界史上第一个基于能力选人（merit-based）的官僚制度。
3. 但是：女性被完全排除——这是 AP DBQ 经典角度。`,
          en: `Both stories mention the exam system — let me put them side by side.

**In the Huizong story**: In 1104, the Imperial Painting Academy added "painting exams" to the civil service system. Huizong's prompt was: "Returning from riding, the horse's hooves carry the fragrance of flowers." Everyone painted flowers around the hooves — except one person, who painted butterflies following the horse — because "fragrance" is smell, not sight. Huizong chose that person.

**In the Su Shi story**: In 1057, at age 21, Su Shi took the jinshi exam. The chief examiner Ouyang Xiu thought the essay was so good he suspected it was his own student's writing. To avoid looking like he was playing favorites, he ranked Su Shi second. The person who placed first vanished from history. Su Shi is still remembered today.

**Key exam points:**
1. The Song civil service exam was **open to commoners** — no aristocratic birth required. Men from poor families could pass and become prime minister.
2. This was the world's first merit-based bureaucracy.
3. But: women were completely excluded — a classic AP DBQ angle.`,
        },
      },
    },

    // ── 考点 2：四大发明（故事覆盖）──────────────────────────────
    {
      id: 'four-great-inventions',
      termCn: '四大发明 / Needham 问题',
      termEn: 'Four Great Inventions / Needham Question',
      defCn: '中国古代发明了造纸、印刷术、火药、指南针这四样东西，比欧洲早几百年。"Needham 问题"是问：发明了这么多，为什么工业革命没有发生在中国？',
      defEn: 'China invented paper, printing, gunpowder, and the compass — all centuries before Europe. The "Needham Question" asks: if China led in technology, why did the Industrial Revolution happen in England, not China?',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        nodeIds: ['huizong-N12'],
        xiaoweiNote: {
          cn: `宋徽宗那条故事线的最后一节讲的是 Needham 问题——这是我最喜欢的部分。

**四大发明是什么：**
- 造纸：东汉，约 105 年
- 印刷术：毕昇，1040 年代，活字印刷
- 火药：唐朝，9 世纪
- 指南针：北宋，约 1088 年

这四样东西都是中国先发明的，比欧洲早几百年。
但工业革命（1760年代）发生在英国，不在中国。

**Needham 问题**：中国 1000 年前在科技上遥遥领先，为什么没有催生工业革命？

常见的几个解释（AP 喜欢让你分析，没有标准答案）：
- 科举考《论语》，不考数学和实验科学
- 政府对工匠的技术一直"够用就好"，没有专利保护
- 宋朝经济发达但缺少把技术变成机器的动机
- 理学强调"格物"更多是道德修养，不是实验科学

**考点关键句：** 中国是火药、活字印刷、指南针的原始发明地。
这三项经由阿拉伯商人传入欧洲，直接帮助了地理大发现。`,
          en: `The last section of the Huizong story is the Needham Question — my favorite part.

**What the Four Great Inventions are:**
- Paper: Eastern Han, ~105 CE
- Moveable type printing: Bi Sheng, 1040s
- Gunpowder: Tang dynasty, 9th century
- Compass: Northern Song, ~1088 CE

All four were invented in China, centuries before Europe.
But the Industrial Revolution (1760s) happened in England, not China.

**The Needham Question:** China led the world in technology 1,000 years ago — why didn't that generate an industrial revolution?

Common explanations (AP likes to have you analyze these, no standard answer):
- The civil service exam tested the Analects, not math and experimental science
- The government treated craftsmen's techniques as "good enough," with no patent protection
- The Song economy was advanced but lacked the push to turn techniques into machines
- Neo-Confucian "investigation of things" was more about moral cultivation than lab science

**Key exam sentence:** China is the original source of gunpowder, moveable type, and the compass. These three were transmitted via Arab merchants to Europe, directly enabling the Age of Exploration.`,
        },
      },
    },

    // ── 考点 3：宋词文学 / 苏轼 & 李清照（故事覆盖）──────────────
    {
      id: 'song-ci-poetry',
      termCn: '宋词 / 豪放派 vs 婉约派',
      termEn: 'Ci Poetry / Bold vs. Graceful Styles',
      defCn: '宋词是宋朝的一种诗歌形式，要按照固定的曲子来写，有严格的音节规定。豪放派写得大气奔放，婉约派写得细腻柔婉，苏轼和李清照分别是这两派的代表人物。',
      defEn: 'Ci poetry is a Song dynasty lyric form written to fit specific musical tunes, with strict syllable rules. The bold style (haofang) is sweeping and grand; the graceful style (wanyue) is delicate and intimate. Su Shi and Li Qingzhao are the iconic examples of each.',
      standardRef: ['AP World KC-1.2', 'CA HSS 7.3'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['su-shi-N8', 'su-shi-N10', 'li-qingzhao-N6', 'li-qingzhao-N10'],
        xiaoweiNote: {
          cn: `把这两个词人放在一起记——他们代表宋词的两个极端。

**苏轼**：豪放派。1080 年被流放到黄州，在长江边喝酒，想曹操，
感叹"人生如梦"——但他接受了这件事。
流放不但没压垮他，反而让他的词越写越大气。
"大江东去，浪淘尽，千古风流人物"——这句我妈会背。

**李清照**：婉约派。靖康之难（1126年）之前写的词都是小情调——
喝酒、赏菊、思念丈夫。但丈夫死后南渡，那种丧失感全进了词里。
"寻寻觅觅，冷冷清清，凄凄惨惨戚戚"——叠词用得出神入化，
翻成英文根本没法还原那种音效。

**考点关键句：**
1. 宋词是继唐诗之后中国文学的第二个高峰。
2. ci poetry = 按曲子填词，有严格音节和声调规定，不像自由诗（free verse）。
3. AP 一般不考具体的词，但会考"宋朝文化繁荣的表现"——宋词是标准答案之一。`,
          en: `Memorize these two poets together — they represent the two poles of Song ci.

**Su Shi**: the bold (haofang) style. Exiled to Huangzhou in 1080, he wrote "Ode to the Red Cliff" while drinking beside the Yangtze, thinking of Cao Cao, sighing "life is a dream" — but making peace with it. Exile didn't break him; it made his writing grander. "The great river flows east, its waves washing away all the brilliant figures of a thousand ages" — my mom has this memorized.

**Li Qingzhao**: the graceful (wanyue) style. Her early poems are intimate — wine, chrysanthemums, missing her husband. After her husband's death and the southward flight from the Jingkang Incident (1126), that sense of loss saturated everything she wrote. "Searching, searching, seeking, seeking, cold and desolate" — the stacked words create a sound effect that simply can't be translated into English.

**Key exam points:**
1. Song ci poetry is the second peak of Chinese literature after Tang poetry.
2. Ci = lyric poetry written to musical tunes, with strict syllable and tonal rules — not free verse.
3. AP usually doesn't test specific poems, but tests "examples of Song cultural flourishing" — ci poetry is a standard correct answer.`,
        },
      },
    },

    // ── 考点 4：靖康之耻 / 南宋（故事覆盖）──────────────────────
    {
      id: 'jingkang-incident',
      termCn: '靖康之耻 / 北宋灭亡 / 南宋',
      termEn: 'Jingkang Incident / Fall of Northern Song / Southern Song',
      defCn: '1126年，金国军队攻破北宋首都开封，皇帝被抓走——这件事叫"靖康之耻"。之后宋朝皇室逃到南方杭州，建立南宋，在那里又撑了152年。',
      defEn: 'In 1126, the Jurchen Jin dynasty broke through the walls of Kaifeng, the Northern Song capital, and captured the emperor — this is called the Jingkang Incident. The imperial family then fled south to Hangzhou and established the Southern Song, which lasted another 152 years.',
      standardRef: ['AP World KC-1.2', 'CA HSS 7.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        nodeIds: ['huizong-N8', 'huizong-N10', 'li-qingzhao-N8'],
        xiaoweiNote: {
          cn: `靖康之耻是宋徽宗那条故事线和李清照那条故事线共同的转折点。

**1126 年发生了什么：**
金国（Jurchen Jin dynasty）打破了北宋首都开封的城墙。
宋徽宗和他儿子宋钦宗都被俘，押送北方。
徽宗在金国俘虏营里度过了生命最后的 8 年，死于 1135 年，
再也没能回到他的翰林图画院。

**对李清照意味着什么：**
她随难民潮南逃，丈夫死于途中，
多年积累的金石藏品几乎全部散失。

**南宋（1127-1279）是怎么来的：**
北方沦陷后，宋朝皇室南迁杭州，建立了南宋。
中国的经济重心彻底从北方移到了南方——
长江三角洲从此成为中国最富庶的地区，一直到今天。

**考点关键句：** 靖康之耻是中国历史上最大的政治屈辱之一，
直接导致**南宋迁都杭州**，以及中国人口和经济重心的南移。`,
          en: `The Jingkang Incident is the shared turning point of the Huizong story and the Li Qingzhao story.

**What happened in 1126:**
The Jurchen Jin dynasty broke through the walls of Kaifeng, the Northern Song capital. Emperor Huizong and his son Emperor Qinzong were both taken captive and marched north. Huizong spent the last eight years of his life as a prisoner, dying in 1135, never returning to his Imperial Painting Academy.

**What it meant for Li Qingzhao:**
She fled south with the refugee tide. Her husband died along the way. Decades of collected bronzes and stone inscriptions were almost entirely lost.

**How the Southern Song was born:**
After the north fell, the Song imperial family moved south to Hangzhou and established the Southern Song. China's economic center of gravity shifted permanently from north to south — the Yangtze River Delta became China's wealthiest region, a status that continues today.

**Key exam sentence:** The Jingkang Incident is one of the greatest political humiliations in Chinese history, directly causing the **Southern Song relocation to Hangzhou** and the southward shift of China's population and economic center.`,
        },
      },
    },

    // ── 考点 5：王安石变法（故事覆盖）────────────────────────────
    {
      id: 'wang-anshi-reforms',
      termCn: '王安石变法 / 新旧党争',
      termEn: 'Wang Anshi Reforms / New vs. Old Party Conflict',
      defCn: '1069年，大臣王安石在宋神宗支持下推行一系列新政，想帮农民、整顿军队、增加国家收入。支持新政的叫"新党"，反对的叫"旧党"——两边争了几十年，苏轼两边都得罪过。',
      defEn: 'In 1069, the official Wang Anshi launched a series of reforms backed by Emperor Shenzong — aiming to help farmers, strengthen the military, and increase state revenue. Those who backed the reforms were called the New Party; those who opposed them were the Old Party. The two sides fought for decades, and Su Shi managed to offend both.',
      standardRef: ['AP World KC-1.2', 'CA HSS 7.3'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: true,
        nodeIds: ['su-shi-N3', 'su-shi-N5', 'su-shi-N6'],
        xiaoweiNote: {
          cn: `这是苏轼故事线里的核心政治背景。

**王安石变法（1069-1076）推行了哪些新政：**
- 青苗法：政府贷款给农民，打破私人放高利贷的局面
- 保甲法：平民轮流当地方警察
- 免役法：可以用钱代替强制劳役

**苏轼的处境为什么那么尴尬：**
他是"旧党"成员，但他反对新法不是因为懒——
他亲眼看到新法在地方执行时骚扰了农民，所以上书批评。
结果：新党掌权时他被贬，旧党掌权时他也被贬（因为他也批评过旧党太保守）。
苏轼两边都得罪了，所以三次流放。

**考点关键句：**
王安石变法是中国历史上最早的大规模**国家福利干预**实验之一。
它出问题不只是因为政治斗争，还因为执行层面——
地方官员腐败，把"好政策"变成了"新骚扰"。

AP 一般把它当作"改革为什么困难"的案例，DBQ 可能用作背景材料。`,
          en: `This is the central political context for the Su Shi story.

**What Wang Anshi's New Policies (1069-1076) actually did:**
- Green Sprouts Law: government loans to farmers, breaking private moneylenders' hold
- Baojia Law: commoners take turns serving as local police
- Exemption Law: pay money instead of being forced to do labor

**Why Su Shi's situation was so awkward:**
He was in the "Old Party," but he opposed the reforms not out of laziness — he saw with his own eyes that the laws were harassing farmers in local implementation. So he wrote a memorial criticizing them. Result: when the New Party was in power he was demoted; when the Old Party came back he was also demoted (because he'd criticized the Old Party for being too conservative). Su Shi offended everyone — hence three exiles.

**Key exam sentence:**
The Wang Anshi Reforms were one of China's earliest large-scale **state welfare intervention** experiments. They ran into trouble not only because of political conflict, but because of implementation — corrupt local officials turned "good policy" into new harassment.

AP generally treats this as a case study in "why reform is hard." DBQ may use it as background material.`,
        },
      },
    },

    // ── 考点 NEW：宋代商业革命（故事未覆盖，AP KC-2.4 高频缺口）──────
    {
      id: 'song-commercial-revolution',
      termCn: '宋代商业革命 / 交子 / 海上丝路 / 城市化',
      termEn: 'Song Commercial Revolution / Jiaozi / Maritime Silk Road / Urbanization',
      defCn: '宋朝发生了一场经济大变化，历史学家叫它"商业革命"。三个关键变化：人类第一种国家纸币（交子）在中国出现；陆上丝路被切断后海上贸易爆发；城市人口大幅增长，商店全天营业。',
      defEn: 'The Song dynasty saw a major economic transformation historians call the "Commercial Revolution." Three key changes: the world\'s first state-issued paper currency (jiaozi) appeared in China; maritime trade exploded when the overland Silk Road was cut off; urban populations surged and shops stayed open around the clock.',
      standardRef: ['AP World KC-2.4', 'CA HSS 7.3.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'huizong-N3', context: '翰林图画院颜料贸易间接提及泉州港海贸网络' },
        ],
      },
      standaloneText: {
        cn: `宋朝（960-1279）发生了一场现代历史学家称为"商业革命"的大变化。
三根支柱撑起了它：纸币、海上贸易、城市化。

**① 纸币：交子（jiaozi）**

1005 年，成都 16 户富商联合印发交子——这是人类第一种私发纸钞。
1023 年，北宋官府把它收归国有，设立交子务来统一管理。
交子由此变成世界第一种**国家发行**的纸钞。
它比瑞典第一张银行纸币（1661年）早了整整 638 年。
有了纸钞，商人做大生意就不用扛着一堆铜币走路了。

**② 海上丝绸之路**

陆上丝路被辽国、金国挡住，宋朝转向海路。
政府在广州和泉州设立**市舶司**（Shibosi）——专门管理海外贸易、征收关税。
泉州一度跻身全球最大港口之一。
14 世纪摩洛哥旅行家伊本·白图泰（Ibn Battuta）称它是"世界最大港口之一"。

**③ 城市化**

宋朝城市里住着大约 20% 的人口，远超同时期欧洲（约 5-10%）。
1100 年，开封人口约 100 万。南宋迁都后，杭州人口超过 150 万，
超过了当时的巴黎和伦敦。商铺沿街全天开放，夜市普及。

**考点关键句：** 宋代商业革命——纸币降成本、海上丝路扩市场、城市化集聚消费——
把宋朝 GDP 推至约占全球 30%。这是 AP DBQ "变化与延续"的经典案例。`,
        en: `The Song dynasty (960-1279) went through a major transformation that modern historians call the "Commercial Revolution." Three pillars held it up: paper money, maritime trade, and urbanization.

**① Paper Money: Jiaozi (交子)**

In 1005, a group of 16 Chengdu merchants printed the first jiaozi notes privately — the world's first privately issued paper currency. In 1023, the Northern Song court took over the system, setting up a Jiaozi Office to manage it centrally. Jiaozi became the world's first **state-issued** paper currency. It was 638 years ahead of Sweden's first banknote in 1661. With paper money, merchants could do big deals without hauling sacks of copper coins.

**② Maritime Silk Road**

The overland Silk Road was blocked by the Liao and Jin dynasties, so Song China turned to sea routes. The government set up **Maritime Trade Offices** (Shibosi) at Guangzhou and Quanzhou — to manage overseas trade and collect customs duties. Quanzhou briefly ranked among the world's largest ports. The 14th-century Moroccan traveler Ibn Battuta called it "one of the greatest ports in the world."

**③ Urbanization**

About 20% of Song China's population lived in cities — far more than contemporary Europe (roughly 5-10%). In 1100, Kaifeng had about one million residents. After the Southern Song moved its capital south, Hangzhou reached 1.5 million people, surpassing Paris and London at the time. Shops opened along streets around the clock, and night markets were everywhere.

**Key exam sentence:** The Song Commercial Revolution — paper money cutting costs, the maritime Silk Road expanding markets, urbanization concentrating consumers — pushed Song China's GDP to roughly 30% of global output. This is a landmark AP DBQ "change and continuity" case.`,
      },
      xiaoweiNote: {
        cn: `三件套绑在一起记：

- **交子（jiaozi）** = 世界第一种国家纸钞，1023年，成都
- **市舶司（Shibosi）** = 宋朝海外贸易管理局，泉州是最大港
- **城市化** = 宋朝约 20%，同期欧洲 5-10%，杭州超过 150 万

AP 选择题常问"哪项最能说明宋朝经济领先"——三个都是正确答案，
但"交子是世界第一种国家纸钞"这个细节最抓眼球。

对比记忆：交子 1023年 → 比欧洲第一张纸钞（1661年）早 638 年。`,
        en: `Memorize as a trio:

- **Jiaozi (交子)** = world's first state-issued paper currency, Chengdu 1023
- **Shibosi** = Song Maritime Trade Office; Quanzhou was the largest port
- **Urbanization** = Song ~20%, contemporary Europe 5-10%, Hangzhou 1.5 million+

AP multiple choice often asks "which best demonstrates Song economic leadership" — all three are correct answers, but "world's first state paper currency" is the most distinctive detail.

Comparison shortcut: Jiaozi 1023 → 638 years before Europe's first banknote (1661).`,
      },
    },

    // ── 考点 6：丝绸之路贸易网络（故事未充分覆盖）─────────────────
    {
      id: 'silk-road-trade',
      termCn: '丝绸之路贸易网络',
      termEn: 'Silk Road Trade Networks',
      defCn: '丝绸之路是古代连接中国与中亚、西亚、欧洲、东南亚的贸易通道。有两条路：一条从陆地走，一条走海路。贸易不只运货物，还把宗教、技术、思想带到了各个地方。',
      defEn: 'The Silk Road was the ancient network of trade routes connecting China with Central Asia, West Asia, Europe, and Southeast Asia. It had two branches — overland and maritime. It moved not just goods but also religions, technologies, and ideas across the world.',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.3'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'huizong-N3', context: '翰林图画院颜料中的青金石来自阿富汗，沿丝路输入' },
        ],
      },
      standaloneText: {
        cn: `丝绸之路（Silk Road）是连接中国与中亚、西亚、欧洲、东南亚的古代贸易网络。
"丝绸之路"这个名字是 19 世纪德国地理学家李希霍芬（Richthofen）起的——
古代中国人自己不叫这个名字。

**两条路线：**

① **陆上丝路**：从长安（今西安）出发，经过中亚的绿洲城市（撒马尔罕、布哈拉），
穿越波斯，抵达地中海。
主要出口：丝绸、瓷器、茶叶。
主要进口：玻璃、香料、棉布、葡萄、马。

② **海上丝路**（唐宋时期更繁荣）：从广州、泉州出发，
经东南亚、印度洋、波斯湾，抵达阿拉伯半岛和东非。
宋朝设立**市舶司**（Maritime Trade Office）管理海外贸易。
泉州一度是全球最大港口之一。

**唐宋时期各自的特点：**

- 唐朝：长安是当时世界上最国际化的城市。
  城内住着波斯人、阿拉伯人、粟特商人、日本遣唐使、朝鲜留学生——
  估计外来人口超过 10 万。长安就像 7 世纪的纽约。
- 宋朝：陆上丝路被游牧民族阻断，海路爆发。
  指南针正是宋代海船的核心导航工具。

**主要出口商品**：丝绸（silk）、瓷器（porcelain——英文商品名就来自"中国"这个词）、茶叶（tea）。

**考点关键句：** 唐宋丝绸之路不只是"贸易网络"，
也是**思想、宗教、技术的传播通道**——
伊斯兰教通过海路传入东南亚；
佛教通过陆路传入日本和朝鲜；
中国的印刷术和火药通过阿拉伯商人传入欧洲。`,
        en: `The Silk Road is the ancient trade network connecting China with Central Asia, West Asia, Europe, and Southeast Asia. The name "Silk Road" was coined by 19th-century German geographer Richthofen — ancient Chinese people didn't call it that.

**Two routes:**

① **Overland Silk Road**: from Chang'an (modern Xi'an), through Central Asian oasis cities (Samarkand, Bukhara), across Persia, to the Mediterranean. Main exports: silk, porcelain, tea. Main imports: glass, spices, cotton, grapes, horses.

② **Maritime Silk Road** (more prosperous during Tang-Song): from Guangzhou and Quanzhou, through Southeast Asia, across the Indian Ocean and Persian Gulf, to the Arabian Peninsula and East Africa. The Song dynasty set up the **Maritime Trade Office** (Shibosi) to manage overseas trade. Quanzhou was briefly one of the world's largest ports.

**What made each era different:**

- Tang: Chang'an was the world's most cosmopolitan city. It was home to Persians, Arabs, Sogdian merchants, Japanese students, and Korean scholars — estimated over 100,000 foreign residents. Chang'an was the 7th century's New York.
- Song: The overland route was disrupted by nomadic peoples, so maritime trade exploded. The compass was the core navigation tool for Song merchant ships.

**Major exports:** silk, porcelain (the English product name comes from "China"), tea.

**Key exam sentence:** The Tang-Song Silk Road was not just a "trade network" — it was also a **transmission channel for ideas, religion, and technology**. Islam spread to Southeast Asia via the maritime route; Buddhism spread to Japan and Korea via the overland route; China's printing and gunpowder spread to Europe through Arab merchants.`,
      },
      xiaoweiNote: {
        cn: `我以前只知道丝绸之路是"卖丝绸的路"。
原来不只是丝绸，也不只是贸易——宗教和技术才是大头。

老师说 AP 选择题会问"哪一项商品最能代表中国在丝路上的出口"，
标准答案是：silk（丝绸）、porcelain（瓷器）、tea（茶）三选一或全选。

记忆口诀：**SPT**（Silk-Porcelain-Tea）= "Smart People Trade"。`,
        en: `I used to think the Silk Road was just "a road for selling silk." Turns out it wasn't only silk, and it wasn't only about trade — religion and technology were the bigger story.

Teacher said AP multiple choice asks "which commodity best represents China's exports along the Silk Road" — standard answers are silk, porcelain, or tea (one or all three).

Mnemonic: **SPT** (Silk-Porcelain-Tea) = "Smart People Trade."`,
      },
    },

    // ── 考点 7：理学 / 新儒学（故事未充分覆盖）──────────────────
    {
      id: 'neo-confucianism',
      termCn: '理学 / 新儒学',
      termEn: 'Neo-Confucianism',
      defCn: '理学是宋朝儒家学者对儒学的一次大升级。他们吸收了佛教和道教的哲学思想，重建了儒学的思想体系。朱熹把它系统化，他注释的四本古书后来成了科举考试的必考教材，考了700年。',
      defEn: 'Neo-Confucianism was a major upgrade of Confucianism by Song dynasty scholars. They borrowed philosophical ideas from Buddhism and Daoism to rebuild Confucianism\'s intellectual system. Zhu Xi systematized it, and his annotated versions of four ancient books became the required civil service exam curriculum for 700 years.',
      standardRef: ['AP World KC-1.2', 'CA HSS 7.3.6'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { nodeId: 'su-shi-N4', context: '苏轼科举考的是儒家经典，但他读佛经和道德经，理学同时代在发展' },
        ],
      },
      standaloneText: {
        cn: `理学（Neo-Confucianism）是唐宋时期儒学的一次大升级。

**为什么要升级：**
从魏晋南北朝（3-6 世纪）起，佛教从印度传入中国，
吸引了大批知识分子。很多儒家学者觉得：
"儒学太务实、没有形而上学，打不过佛教的宇宙论。"
于是宋代儒家开始吸收佛道两家的思辨资源，重建儒学的哲学体系——这就是理学。

**核心人物：**

- **程颐**（Cheng Yi，1033-1107）：提出"格物致知"。
  意思是：通过研究每一件具体的事物，领悟背后的"理"（li）——宇宙的基本原理。
- **朱熹**（Zhu Xi，1130-1200）：理学集大成者。
  他把程颐的思想系统化，注释了四本古书——
  《论语》《孟子》《大学》《中庸》，合称**四书**（Four Books）。
  这四本书成了科举考试的核心教材，考了整整 700 年
  （从宋元明清，一直到 1905 年科举废除）。

**对社会的影响：**
1. 强调**五伦**（君臣、父子、夫妇、兄弟、朋友）的等级秩序
2. 对女性影响尤其重——"三从四德"在理学框架下被强化，裹小脚（foot binding）在宋代普及
3. 科举考什么，精英就钻研什么——这可能是 Needham 问题的部分答案

**考点关键句：** 朱熹的理学通过科举渗透中国社会 700 年，
同时传入日本（朱子学）和朝鲜（性理学），
成为东亚儒家文明圈的哲学基础。`,
        en: `Neo-Confucianism (理学) was a major upgrade of Confucianism during the Tang-Song era.

**Why it needed an upgrade:**
From the Wei-Jin period (3rd-6th centuries) onward, Buddhism spread from India into China and attracted huge numbers of intellectuals. Many Confucian scholars felt: "Confucianism is too practical — it has no metaphysics and can't compete with Buddhist cosmology." So Song Confucians began absorbing philosophical ideas from Buddhism and Daoism to rebuild Confucianism's intellectual system. That's Neo-Confucianism.

**Key figures:**

- **Cheng Yi** (1033-1107): proposed "investigation of things leads to knowledge" (格物致知). The idea: by carefully studying each individual thing, you grasp the "li" (理) — the underlying principle of the universe.
- **Zhu Xi** (1130-1200): the synthesizer of Neo-Confucianism. He systematized Cheng Yi's thought and annotated four ancient books — the Analects, Mencius, Great Learning, and Doctrine of the Mean — known together as the **Four Books**. These became the core civil service exam curriculum for 700 years (from Song through Yuan, Ming, and Qing, until the exam was abolished in 1905).

**Impact on society:**
1. Emphasized the hierarchical order of the **Five Relationships** (ruler-minister, father-son, husband-wife, elder-younger brother, friend-friend)
2. Especially heavy impact on women — "three obediences and four virtues" were intensified within the Neo-Confucian framework; foot binding became widespread in the Song dynasty
3. What the civil service exam tested is what elite society studied — this may be part of the answer to the Needham Question

**Key exam sentence:** Zhu Xi's Neo-Confucianism permeated Chinese society for 700 years through the exam system, and simultaneously spread to Japan (Zhu Xi Learning) and Korea (Seongnihak), forming the philosophical bedrock of the East Asian Confucian world.`,
      },
      xiaoweiNote: {
        cn: `"格物致知"这个词我背了很多次，从来不知道什么意思。
原来是：研究每件具体的事，从中悟出宇宙规律。
有点像科学实验的感觉——但目的是道德修养，不是发明东西。
也许这就是中国没有工业革命的原因之一？（这是 Needham 问题的一个角度。）

考试记忆点：朱熹 + 四书 + 700 年科举，这三个绑在一起记。`,
        en: `I've memorized "investigation of things" (格物致知) many times and never knew what it meant. Now I get it — study each concrete thing, from it grasp the universal principle. It sounds like scientific experimentation, but the goal is moral cultivation, not inventing things. Maybe that's why China didn't have an industrial revolution? (That's one angle on the Needham Question.)

Exam memory: Zhu Xi + Four Books + 700-year civil service exam — memorize these three together.`,
      },
    },

    // ── 考点 8：唐朝建立 & 农业技术革新（故事未覆盖）──────────────
    {
      id: 'tang-dynasty-agriculture',
      termCn: '唐朝建立 / 农业技术革新',
      termEn: 'Tang Dynasty Founding / Agricultural Revolution',
      defCn: '唐朝（618-907年）是中国最强盛的朝代之一，首都长安是当时世界最大城市。宋朝从越南引进了占城稻——一种可以一年两熟的水稻——让中国人口在240年间从5000万翻倍到1亿。',
      defEn: 'The Tang dynasty (618-907) was one of China\'s most powerful eras, with its capital Chang\'an being the world\'s largest city. The Song dynasty later imported Champa rice from Vietnam — a variety that could be harvested twice a year — causing China\'s population to double from 50 million to 100 million in 240 years.',
      standardRef: ['AP World KC-1.1', 'CA HSS 7.3.3'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [],
      },
      standaloneText: {
        cn: `三个故事都从宋朝开始，但 AP 和 CA HSS 7.3 都要考唐朝。
这张考点卡把唐朝建立和宋代农业革新两个考点放在一起——它们有内在联系。

**唐朝（618-907）：**

唐朝由李渊建立，但真正奠定盛世基础的是他儿子**唐太宗**（Emperor Taizong，在位 626-649）。
唐太宗在位期间，唐朝版图达到约 697 万平方公里，是当时世界上最大的帝国之一。

首都**长安**（今西安）是全球最大城市，人口约 100 万。
城内有波斯人和阿拉伯人开的酒馆，粟特商人在西市做买卖，
日本遣唐使在太学读书——长安就是 7 世纪的纽约。

唐朝怎么灭亡的（907 年）：
1. 藩镇割据——地方军阀失控
2. 黄巢起义（875-884）——长安两次被攻破
3. 宦官专权——朝廷内部瘫痪

三个问题叠加，唐朝解体，进入五代十国混乱期（907-960），
直到宋朝（960）重新统一北方。

**宋代农业技术革新（CA HSS 7.3.3）：**

宋朝从越南引入**占城稻**（Champa rice）——一种早熟、耐旱、可以一年两熟的水稻品种。
这一技术变化的后果惊人：

- 宋初（960年）：中国人口约 5000 万
- 宋末（1200年）：中国人口约 **1 亿** —— 翻倍，用了 240 年

这是人类历史上和平时期增长最快的人口变化之一，
单一技术推手就是占城稻。

人口增长带来了什么：
城市化（杭州超越长安成为全球最大城市）、
商品经济（纸币"交子"在四川出现，1023年）、
文化繁荣（宋词、书画、印刷书籍）。

**考点关键句：** 占城稻是宋代人口翻倍的直接技术原因，
也是宋朝 GDP 一度占全球 30% 的农业基础。`,
        en: `All three stories start with the Song dynasty, but both AP and CA HSS 7.3 test the Tang dynasty. This card puts the Tang founding and the Song agricultural revolution together — they have an internal connection.

**Tang Dynasty (618-907):**

The Tang was founded by Li Yuan, but the golden age was built by his son **Emperor Taizong** (r. 626-649). Under Taizong, Tang territory reached about 6.97 million square kilometers, making it one of the world's largest empires.

The capital **Chang'an** (modern Xi'an) was the world's largest city, with roughly one million residents. Inside: taverns run by Persians and Arabs, Sogdian merchants trading in the West Market, Japanese students studying at the Imperial Academy — Chang'an was the 7th century's New York.

How the Tang collapsed (907 CE):
1. Regional warlords — local military governors spun out of control
2. The Huang Chao Rebellion (875-884) — Chang'an was taken twice
3. Eunuch factions — the court was paralyzed from within

Three forces combining broke the Tang apart. China then entered the Five Dynasties and Ten Kingdoms period (907-960) until the Song (960) reunified the north.

**Song Agricultural Revolution (CA HSS 7.3.3):**

The Song imported **Champa rice** from Vietnam — an early-ripening, drought-tolerant variety that could be harvested twice a year. The results were staggering:

- Early Song (960 CE): China's population ~50 million
- Late Song (1200 CE): China's population ~**100 million** — doubled in 240 years

This is one of the fastest peacetime population growths in human history, driven by a single technological change: Champa rice.

What population growth brought:
Urbanization (Hangzhou surpassed Chang'an as the world's largest city); a commercial economy (paper money — jiaozi — appeared in Sichuan in 1023 CE); and cultural flowering (ci poetry, painting, printed books).

**Key exam sentence:** Champa rice is the direct technological cause of the Song dynasty's population doubling and the agricultural foundation that allowed Song China's GDP to reach roughly 30% of global output.`,
      },
      xiaoweiNote: {
        cn: `唐朝 + 宋朝要分开记清楚，因为它们老是被混在一起：

| | 唐朝 | 宋朝 |
|--|--|--|
| 时间 | 618-907 | 960-1279 |
| 首都 | 长安（西安）| 开封 → 杭州（南宋） |
| 特点 | 军事帝国，丝路黄金时代 | 文化+商业帝国，四大发明 |
| 结局 | 藩镇割据解体 | 被蒙古灭（1279） |

占城稻的考点：人口 5000 万 → 1 亿，一定要记数字，选择题考过。`,
        en: `Keep Tang and Song clearly separated — they always get mixed up:

| | Tang | Song |
|--|--|--|
| Period | 618-907 | 960-1279 |
| Capital | Chang'an (Xi'an) | Kaifeng → Hangzhou (Southern Song) |
| Character | Military empire, Silk Road golden age | Cultural + commercial empire, Four Inventions |
| End | Warlord fragmentation | Conquered by Mongols (1279) |

Champa rice exam point: population 50 million → 100 million — memorize the numbers, multiple choice has tested this.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `宋朝 GDP 占全球约 30%，四大发明全部出自中国。
指南针让海船能在没有陆地参照的情况下航行。
活字印刷让书本价格下降了约 90%。

但工业革命（1760年代）发生在英国，不是中国。

你觉得最有说服力的原因是什么？
请列出至少 2 个理由，说明它们是怎么互相加强的。`,
      en: `Song China's GDP was roughly 30% of global output. All four of the Four Great Inventions came from China. The compass let ships navigate without land reference. Moveable type dropped book prices by about 90%.

Yet the Industrial Revolution (1760s) happened in England, not China.

What do you find most convincing as an explanation? List at least 2 reasons and explain how they reinforce each other.`,
      hintCn: `这是 Needham 问题，历史学家没有一致答案。这里有几个常见思路：

1. **考试制度的问题**：科举考儒家经典，精英把精力放在背书上，不在实验和数字上。发明家和商人在社会地位上低于文官。
2. **煤炭的位置问题**：英国的优质煤矿靠近工业城市。中国的煤矿集中在北方（山西），离制造业中心很远，运输成本很贵。
3. **政治结构的问题**：宋朝是统一帝国，没有欧洲那种"几十个国家互相竞争、逼着创新"的压力。
4. **没有专利保护**：没有专利制度，工匠没有动机公开技术，技术以家传秘方形式保存，传播很慢。

进阶想一想：这 4 个原因，你觉得哪个最根本？
能不能说出一个"如果去掉这一个，工业革命就可能在中国发生"的解释？`,
      hintEn: `This is the Needham Question — historians don't have a consensus answer. Here are some common threads to follow:

1. **The exam system**: Civil service tests covered Confucian classics; elites put their energy into memorizing texts, not experiments and math. Inventors and merchants had lower social status than civil officials.
2. **Where the coal was**: England's high-quality coal mines were close to industrial cities. China's coal was concentrated in the north (Shanxi), far from manufacturing centers — expensive to transport.
3. **Political structure**: The Song was a unified empire. It lacked Europe's pressure of dozens of competing states forcing each other to innovate through price wars and arms races.
4. **No patent protection**: Without a patent system, artisans had no reason to publicize techniques. Technology was kept as family trade secrets and spread slowly.

Going deeper: of these 4 reasons, which do you find most fundamental? Can you build a "if you remove just this one, industrial revolution might have happened in China" argument?`,
      conceptsActivated: ['four-great-inventions', 'civil-service-exam', 'neo-confucianism'],
    },
    {
      id: 'q2',
      cn: `科举制度让穷人家的孩子（只要是男孩）可以通过读书当宰相。
苏轼就是这样来的——他爸爸是四川眉山的小文人，家里不算很穷，但不是贵族。

但是李清照——她写得比很多进士都好——根本不能参加考试，
因为她是女的。

你觉得这样的科举制度算"公平"吗？
用至少 2 个角度分析：一个说它进步，一个说它有缺陷。`,
      en: `The civil service exam allowed children from poor families — as long as they were boys — to become prime minister through study. Su Shi is exactly this story: his father was a minor writer in Meishan, Sichuan; the family wasn't wealthy, but they weren't nobility.

But Li Qingzhao — who wrote better than many jinshi degree-holders — couldn't even sit the exam, because she was a woman.

Do you think this kind of civil service system was "fair"? Analyze from at least 2 angles: one that argues it was progressive, one that argues it was flawed.`,
      hintCn: `这是 AP 最喜欢的"进步 vs 局限"分析框架。

**说它进步的角度：**
- 宋朝科举打破了魏晋以来的门阀贵族制度，过去你的出身决定一切，现在考试说了算。
- 它为普通男性子弟提供了真实的上升通道。
- 跟欧洲同时期（1100年）的贵族世袭制相比，科举确实是巨大进步。

**说它有缺陷的角度：**
- 100% 排除女性。
- 考试内容锁定儒家经典，商人和工匠的知识体系完全没有地位。
- 穷苦家庭负担不起 10-20 年备考的生活成本——所以真正进来的"寒门"也是相对寒门（中小地主），不是真正底层的农民。
- 通过科举的官员未必是好的决策者——靖康之耻发生时，宋徽宗就是一个通过了所有"文化资质"的皇帝。

进阶想一想：今天美国的 SAT/AP 体系和宋代科举有哪些相似的地方？有哪些不同？`,
      hintEn: `This is AP's favorite "progress vs. limitation" analytical framework.

**The progressive angle:**
- Song civil service exams broke the aristocratic system of the Wei-Jin era, where birth determined everything — now the test decided.
- It provided a real mobility path for commoner men.
- Compared to European hereditary aristocracy of the same era (1100 CE), the civil service exam was a genuine advance.

**The limitation angle:**
- 100% excluded women.
- Exam content was locked to Confucian classics — the knowledge of merchants and artisans had no standing.
- Poor families couldn't afford 10-20 years of exam preparation costs — so the "commoners" who made it were really middle-class landowners, not true subsistence farmers.
- Qualified officials weren't necessarily good decision-makers — when the Jingkang Incident happened, Huizong was an emperor who had passed every "cultural qualification."

Going deeper: how is today's SAT/AP system similar to the Song civil service exam? How is it different?`,
      conceptsActivated: ['civil-service-exam', 'song-ci-poetry', 'jingkang-incident'],
    },
    {
      id: 'q3',
      cn: `宋徽宗（Emperor Huizong）是中国历史上最伟大的花鸟画家之一。
他创立翰林图画院，把绘画引入科举，设计了"瘦金体"书法，
亲手画的《芙蓉锦鸡图》今天价值无法估量。

但他也是带领宋朝走向靖康之耻的皇帝——
1126 年金国破城，他和儿子一起被俘，
在北方的俘虏营里度过了生命最后的 8 年。

一个人可以同时是伟大的艺术家和糟糕的政治家吗？
艺术天赋和治国能力之间，有没有内在联系或矛盾？`,
      en: `Emperor Huizong is one of the greatest bird-and-flower painters in Chinese history. He founded the Imperial Painting Academy, introduced painting into the civil service exam, designed the "Slender Gold" calligraphy style, and his painting "Hibiscus and Crested Myna" is today priceless.

But he is also the emperor who presided over the Jingkang Incident — when the Jin dynasty broke through the walls in 1126, he and his son were taken captive and spent the last eight years of his life in a prisoner camp in the north.

Can a person be simultaneously a great artist and a terrible political leader? Is there an inherent connection — or contradiction — between artistic genius and the ability to govern?`,
      hintCn: `这道题没有标准答案，但有几个思路可以展开。

**"艺术天赋 ≠ 治国能力"的论据：**
- 艺术训练让你专注于"细节的完美"。政治需要的是"接受不完美、快速决策、应对混乱"——这两种能力方向相反。
- 徽宗把大量精力放在书画院，而非军事防御和财政改革。
- 他任用的大臣（蔡京）是能讨好他的人，不是能治国的人。

**"艺术与治国可以共存"的反例：**
- 唐太宗也喜欢书法（王羲之的《兰亭序》是他的最爱），但军事和行政都非常出色。
- 爱好本身不是问题，优先级才是。

**更深的一个问题：** 中国皇帝制度下，皇帝的个人能力对一个朝代的存亡影响太大了——这是制度设计的问题，不只是徽宗个人的问题。如果宋朝有更成熟的分权制衡，徽宗的艺术爱好可能不会导致灭国。

进阶想一想：你知道哪些历史人物也有这种"天才 + 灾难"的双重特征？`,
      hintEn: `No standard answer here, but several threads to develop.

**"Artistic genius ≠ governing ability" argument:**
- Artistic training sharpens focus on "perfection in detail." Politics requires accepting imperfection, making fast decisions, and coping with chaos — these point in opposite directions.
- Huizong invested enormous energy in the painting academy rather than military defense and fiscal reform.
- The ministers he appointed (Cai Jing) were those who pleased him, not those who could govern.

**Counter-example — "art and governance can coexist":**
- Emperor Taizong also loved calligraphy (Wang Xizhi's Lantingji Xu was his favorite), yet excelled at both military command and administration.
- The hobby itself isn't the problem; priorities are.

**A deeper question:** Under China's imperial system, the emperor's personal abilities had an outsized impact on a dynasty's survival — this is a structural design problem, not just Huizong's personal failing. If the Song had a more mature system of distributed power, Huizong's artistic passion might not have caused the dynasty's fall.

Going deeper: what historical figures do you know who share this "genius + disaster" dual profile?`,
      conceptsActivated: ['civil-service-exam', 'jingkang-incident', 'four-great-inventions'],
    },
  ],
};

export default notebook;
