// view: Industrial Revolution · 1880
// Grade 8 · HSS-8.6 (Industrial Revolution + immigration)
export const VIEW = {
  id: 'industrial-revolution',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.12',  label: { cn: 'CA HSS-8.12 工业革命下美国经济与社会转型', en: 'CA HSS-8.12 Industrial Rev: US economic & social transformation' } },
    { code: 'AP-WHAP-5.3',  label: { cn: 'AP World Unit 5.3 工业革命', en: 'AP World Unit 5.3 Industrial Revolution' } },
    { code: 'AP-EURO-6.2',  label: { cn: 'AP European Unit 6.2 工业的扩散', en: 'AP European Unit 6.2 The Spread of Industry' } },
  ],
  title:    { cn: '工业革命', en: 'Industrial Revolution' },
  subtitle: { cn: '1880 · 全球化第一次浪潮', en: '1880 · First wave of globalization' },
  year: 1880,

  camera: {
    projection: 'mercator',
    center: [40, 45],     // 横跨欧美亚
    scale: 200,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'industrial-1880',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1880',
      highlightId:     'uk-1880',
    },
    C:  { civs: 'modern-1880' },
    F:  { ids: ['suez-isthmus', 'gibraltar', 'bosporus', 'english-channel'] },
    L4: {
      pins: ['manchester', 'london-1880', 'berlin-1880', 'pittsburgh-1880', 'tokyo-meiji'],
    },
  },

  causalSummary: {
    cn: 'L0 英国煤铁河流海岸 + L2 殖民资本 / 圈地 / 印度棉 + L3 议会 / 专利 / 皇家学会 / 银行 + L4 Watt 蒸汽机 → 大博览会 → 全球工业化竞赛',
    en: 'L0 British coal/iron/rivers/coast + L2 colonial capital/enclosure/Indian cotton + L3 Parliament/patents/Royal Society/banks + L4 Watt steam → Great Exhibition → global industrial race',
  },

  keyFigures: [
    {
      emoji: '🏭',
      name: { cn: '工厂老板 Andrew Carnegie 卡内基', en: 'Industrialist Andrew Carnegie' },
      role: { cn: '苏格兰移民 / 美国钢铁巨头', en: 'Scottish immigrant / US steel magnate' },
      bio: {
        cn: '你 13 岁 1848 年从苏格兰移民来宾州。你从纺织厂打工小弟做起，30 年后成"美国钢铁之王"— 1892 年你的工厂雇 5 万工人。1892 你工厂 Homestead 罢工 — 你派 Pinkerton 私军镇压，10 死。你 1900 写《财富的福音》— 富人有义务捐出来。你后半生捐图书馆 + 大学 — 但工人记得 Homestead 那 10 个死人。',
        en: 'At 13 in 1848 you immigrated from Scotland to Pennsylvania. From textile-mill messenger boy, in 30 years you became "America\'s Steel King" — your mills employed 50,000 by 1892. That year, the Homestead Strike — you sent Pinkerton mercenaries; 10 died. You wrote The Gospel of Wealth (1900) — the rich must give back. Your second half-life funded libraries and universities — but workers remembered the 10 Homestead dead.',
      },
      hook: {
        cn: '如果你是 Carnegie — 你"先剥削后捐赠"。这是"赎罪"还是"白嫖完了发糖"？今天的科技亿万富翁也走这条路 — 同样的争论。',
        en: 'If you were Carnegie — "exploit first, donate later." Atonement, or "milking it then handing out candy"? Today\'s tech billionaires walk the same path — same debate.',
      },
    },
    {
      emoji: '⚒️',
      name: { cn: '工会领袖 Samuel Gompers', en: 'Labor Leader Samuel Gompers' },
      role: { cn: 'AFL 美国劳工联合会创始人', en: 'Founder of the American Federation of Labor' },
      bio: {
        cn: '你 13 岁 1863 从英国移民纽约 — 在卷烟厂打工。你 1886 年组建 AFL — 不要革命、要"更高工资 + 8 小时工作日 + 医疗"。你的策略是"做生意的工会"— 跟厂主谈判而不是推翻资本主义。50 年后你的策略让美国中产阶级做大 — 但也让工人接受了资本主义。',
        en: 'At 13 in 1863 you immigrated from England to New York — worked in a cigar factory. In 1886 you founded the AFL — not revolution, but "higher wages + 8-hour day + healthcare." Your strategy was "business unionism" — negotiating with bosses, not overthrowing capitalism. 50 years later, your strategy built America\'s middle class — but it also made workers accept capitalism.',
      },
      hook: {
        cn: '如果你是 Gompers — 你给工人"工资改善"换"接受资本主义"。这是务实胜利还是出卖革命？欧洲工人选择社会主义你选择改良 — 哪个对工人长期更好？',
        en: 'If you were Gompers — you traded "wage improvements" for "accepting capitalism." Pragmatic victory, or sold-out revolution? European workers chose socialism; you chose reform — which serves workers better long-term?',
      },
    },
    {
      emoji: '🚂',
      name: { cn: '中国铁路工人', en: 'Chinese Railroad Worker' },
      role: { cn: '建跨大陆铁路的劳工', en: 'Transcontinental Railroad laborer' },
      bio: {
        cn: '你 1865 年从广东搭船来加州。Central Pacific 雇 1.2 万中国工人翻越内华达山脉 — 高原 + 暴雪 + 用炸药开隧道，估计 1 千人死。你工资比白人低 1/3，吃自己带的茶 + 米。1869 5 月铁路完工 — 但 1882《排华法案》禁中国人入境 60 年。你建了美国，美国不让你留。',
        en: 'In 1865 you sailed from Guangdong to California. Central Pacific hired 12,000 Chinese workers to cut through the Sierra Nevada — high altitude + blizzards + dynamite tunnels, an estimated 1,000 died. You earned 2/3 the white wage; ate your own tea and rice. May 1869 the railroad was complete — but the 1882 Chinese Exclusion Act banned Chinese immigration for 60 years. You built America; America barred you.',
      },
      hook: {
        cn: '如果你是中国铁路工人 — 你贡献最大却被遗忘。1869 完工照片里没有中国人。今天加州大量华人 — 包括 Willow 的同学 — 都是你的后代或同胞。这道伤口怎么治？',
        en: 'If you were the Chinese railroad worker — your contribution was greatest, your face erased. The 1869 completion photo has no Chinese workers. Today\'s California has many Chinese — including Willow\'s classmates — your descendants or peers. How is this wound healed?',
      },
    },
    {
      emoji: '🏠',
      name: { cn: '曼彻斯特纺织女工', en: 'Manchester Mill Girl' },
      role: { cn: '英国早期工厂女工 / 14 小时工作日', en: 'Early British factory girl / 14-hour shifts' },
      bio: {
        cn: '你 12 岁从约克郡农村到曼彻斯特纺织厂 — 父母签了 7 年契约。你早 5 点起 + 14 小时机器旁站着 + 经常被棉絮呛 + 50% 工友 30 岁前死。1833 工厂法限 9 岁以下不能雇 — 你已经 12 岁不算。你是"工业革命的代价" — 课本写"GDP 涨"，但你的肺烂了。',
        en: 'At 12 you came from Yorkshire farmland to a Manchester cotton mill — your parents signed a 7-year contract. 5am rise + 14 hours standing by machines + lungs choked with cotton fibers + 50% of millmates die before 30. The 1833 Factory Act bans hiring under-9s — you\'re 12, doesn\'t apply. You\'re "the cost of industrial revolution" — textbooks say "GDP rose," but your lungs rotted.',
      },
      hook: {
        cn: '如果你是纺织女工 — 课本写"工业革命让人类富裕"。但你这一代女工大半 30 岁死。"群体平均富裕"和"个人受苦"哪个是真？',
        en: 'If you were the mill girl — textbooks say "Industrial Revolution made humanity rich." Half your generation of mill girls died before 30. "Average wealth" vs "individual suffering" — which is true?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Davy（虚构同龄人）', en: 'Davy (fictional peer)' },
      role: { cn: '13 岁，曼彻斯特童工', en: '13-year-old, Manchester child laborer' },
      bio: {
        cn: '你跟 Willow 同龄。1850 你已经在曼彻斯特纺织厂干了 4 年（9 岁开始）。每天工厂监工抽你 + 你站到脚肿。但你识字 — 因为你妈妈坚持送你周日学校（1830s 才有，全免费）。30 年后你可能进工会 + 投票 + 你儿子可能当律师。"工业革命"对你这代是地狱，对你儿孙是阶梯。',
        en: 'Same age as Willow. By 1850 you\'ve worked 4 years at a Manchester mill (started at 9). Daily, the foreman whips you; your feet swell from standing. But you can read — your mother insisted on Sunday school (started in 1830s, free). In 30 years you might join the union + vote; your son might become a lawyer. "Industrial Revolution" is hell for your generation, ladder for your grandchildren.',
      },
      hook: {
        cn: '175 年后 Willow 在加州 — 12 岁不能合法工作，必须上学。她的"舒适"是你这代用命换的。她欠你什么？什么都不欠 — 但她应该知道你是怎么活的。',
        en: '175 years later, Willow in California — at 12 she can\'t legally work, must attend school. Her comfort was bought with your generation\'s blood. Does she owe you? Nothing — but she should know how you lived.',
      },
    },
  ],

  examPoints: {
    cn: [
      'Watt 蒸汽机 1769（James Watt steam engine）',
      'Spinning Jenny 1764（Hargreaves 珍妮纺纱机）',
      'Factory system 工厂制 / Enclosure Movement 圈地运动',
      'Child labor 童工 + Luddites 卢德派砸机器',
      'Manchester / Birmingham 城市化 + 贫民窟',
      'Great Exhibition 1851 万国博览会（伦敦水晶宫）',
      'Second Industrial Revolution ~1880（钢铁 / 电力 / 化工）',
      'Adam Smith《国富论》1776 / Karl Marx《共产党宣言》1848',
    ],
    en: [
      'Watt steam engine, 1769',
      'Spinning Jenny, 1764 (Hargreaves)',
      'Factory system / Enclosure Movement',
      'Child labor + Luddites (machine breakers)',
      'Manchester / Birmingham urbanization + slums',
      'Great Exhibition 1851 (London Crystal Palace)',
      'Second Industrial Revolution ~1880 (steel/electricity/chemicals)',
      'Adam Smith, Wealth of Nations 1776 / Marx, Communist Manifesto 1848',
    ],
  },
};
