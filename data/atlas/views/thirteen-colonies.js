// view: Thirteen Colonies · 1750 · East Coast North America
// Grade 5 · HSS-5.3
export const VIEW = {
  id: 'thirteen-colonies',
  grade: 5,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-5.3', label: { cn: 'CA HSS-5.3 殖民地时期生活', en: 'CA HSS-5.3 Cooperation & conflict in the colonies' } },
    { code: 'CA-HSS-5.4', label: { cn: 'CA HSS-5.4 殖民地经济与日常', en: 'CA HSS-5.4 Colonial economic life' } },
    { code: 'AP-USH-2.2', label: { cn: 'AP US Period 2.2 殖民社会形态', en: 'AP US Period 2.2 Colonial societies' } },
  ],
  title:    { cn: '十三殖民地', en: 'Thirteen Colonies' },
  subtitle: { cn: '1750 · 法印战争前夕', en: '1750 · eve of French & Indian War' },
  year: 1750,

  camera: {
    projection: 'mercator',
    center: [-77, 38],
    scale: 1100,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'thirteen-colonies-1750',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1715',
      highlightId:     'british-colonies',
    },
    F:  { ids: [] },
    L4: {
      pins: ['jamestown-1607', 'plymouth-1620', 'philadelphia-1750', 'boston-1750', 'charleston-1750'],
    },
  },

  causalSummary: {
    cn: 'L0 阿巴拉契亚山以东 5000 公里大西洋隔母国 + L1 小冰期渐缓 + L2 1750 年 ~120 万殖民人口 / 三区分化（新英格兰商贸 / 中部农业 / 南方种植园奴隶制）+ L3 各殖民地议会 + 普通法 + 公理会自治 + L4 1607 詹姆斯敦 → 1620 五月花 → 1689 光荣革命影响 → 1750 Albany 联合呼声',
    en: 'L0 Atlantic 5000-km moat east of Appalachians + L1 Little Ice Age easing + L2 ~1.2M colonial pop by 1750 / 3 regions (New England trade / Middle farming / Southern plantation slavery) + L3 colonial assemblies + common law + Congregational self-rule + L4 1607 Jamestown → 1620 Mayflower → 1689 Glorious Revolution echoes → 1750 Albany Plan stirrings',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '英国殖民总督', en: 'British Royal Governor' },
      role: { cn: '英王派往殖民地的代理人', en: 'King\'s appointee in the colonies' },
      bio: {
        cn: '你是英国贵族子弟，被派到弗吉尼亚 / 马萨诸塞 / 卡罗来纳当总督。你拿英国国王的薪水，但你的预算靠殖民地议会批 — 议会经常拒批 — 你跟他们斗了一辈子。1750 年代你已经发现 — 这些殖民者不太把你当回事。',
        en: 'A British noble appointed to govern Virginia / Massachusetts / Carolinas. You\'re paid by the Crown, but your budget depends on the colonial assembly — which often refuses. You spent your whole career fighting them. By the 1750s you\'ve realized these colonists barely treat you with respect.',
      },
      hook: {
        cn: '如果你是总督 — 你被夹在伦敦和殖民地议会之间。"代表国王但生活在殖民地"— 你忠诚谁？这是英美关系的关键预兆。',
        en: 'If you were governor — squeezed between London and colonial assemblies. "Representing the king but living among colonists" — whom do you serve? This is the seed of US-British rupture.',
      },
    },
    {
      emoji: '⛪',
      name: { cn: '清教徒牧师', en: 'Puritan Minister' },
      role: { cn: '马萨诸塞会众教派牧师', en: 'Massachusetts Congregational pastor' },
      bio: {
        cn: '你是 Cotton Mather 那种人 — 哈佛毕业，主持城里教会。你认为殖民地是"山上之城"（city on a hill）— 给世界看真正的基督教社会。你的会众选你 — 这是早期"民选"。但你也支持 Salem 1692 巫审 — 19 个"女巫"被绞死。',
        en: 'You\'re a Cotton Mather type — Harvard-educated, leading a town\'s church. You see the colonies as "a city on a hill" — modeling true Christianity for the world. Your congregation elected you — early democratic seed. But you also supported the 1692 Salem witch trials — 19 "witches" hanged.',
      },
      hook: {
        cn: '如果你是清教徒牧师 — 你的"民选教会"是美国民主源头之一。但你也参与处死无辜女性。"民主社区"和"集体狂热"是不是同一根源？',
        en: 'If you were Puritan minister — your "elected congregation" is one of US democracy\'s sources. But you also helped execute innocent women. Are "democratic community" and "mob hysteria" two sides of one root?',
      },
    },
    {
      emoji: '⛓️',
      name: { cn: '弗吉尼亚奴役非洲人', en: 'Enslaved African in Virginia' },
      role: { cn: '种植园奴役劳工', en: 'Plantation slave laborer' },
      bio: {
        cn: '你是从塞内加尔被劫上"中段航行"（Middle Passage）船来的 — 1750 年弗吉尼亚 1/3 人口是黑奴（~30 万）。你种烟草，每天 14 小时。你的孩子一出生就是奴隶 — 法律说"母亲的身份决定孩子的身份"（partus sequitur ventrem）。你不会读，但你晚上偷偷学《圣经》。',
        en: 'Captured in Senegal, you were brought via the Middle Passage. By 1750 Virginia is 1/3 enslaved Black (~300,000). You farm tobacco, 14 hours daily. Your child is born enslaved — the law says "child follows mother\'s status" (partus sequitur ventrem). You can\'t read, but you secretly memorize the Bible at night.',
      },
      hook: {
        cn: '如果你是黑奴 — 同一片土地上别人在写"自由"。你跟他们隔着同样的距离 — 几公里 + 一道法律。这种"法律隔离"创造的"两个美国"今天还在吗？',
        en: 'If you were enslaved — on the same soil, others wrote "freedom." You\'re separated by miles + one law. The "two Americas" this legal divide created — does it still exist today?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '宾州德裔小农', en: 'Pennsylvania German Farmer' },
      role: { cn: '中部殖民地小麦农户', en: 'Middle colony wheat farmer' },
      bio: {
        cn: '你 1730 从巴拉丁奈特（今德国西部）逃宗教迫害来宾州 — Penn 的"宗教自由"政策吸引你。你和家人 100 英亩自有地，种小麦养猪，做香肠（Pennsylvania Dutch 文化）。你不读英文 — 教堂用德语礼拜。你的村庄半自治 — "美国式中产小农"原型。',
        en: 'In 1730 you fled the Palatinate (today\'s western Germany) escaping religious persecution — drawn by Penn\'s religious freedom. You own 100 acres, grow wheat, raise pigs, make sausage (Pennsylvania Dutch culture). You don\'t read English — your church uses German. Your village runs semi-autonomously — the prototype of American middle-class small-farming.',
      },
      hook: {
        cn: '如果你是德裔小农 — 你来美国不是为了"民主"，是为了"逃迫害 + 拥有土地"。今天大多数移民也是这个动机。"美国梦"500 年来变了吗？',
        en: 'If you were the German farmer — you came not for "democracy" but to escape persecution + own land. Most immigrants today have the same motive. Has the "American Dream" changed in 300 years?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Sarah（虚构同龄人）', en: 'Sarah (fictional peer)' },
      role: { cn: '13 岁，波士顿商人女儿', en: '13-year-old, Boston merchant\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是波士顿三角贸易商人 — 进口加勒比朗姆酒、出口新英格兰木材。家里 50 人做事，3 个仆人是女佣（不是奴隶）。你识字（清教传统女孩也学读《圣经》）。1750 年你 13 岁，10 年后波士顿茶党你 23 岁 — 你可能跟 Sons of Liberty 站在一起。',
        en: 'Same age as Willow. Your father is a Boston triangle-trade merchant — importing Caribbean rum, exporting New England timber. Household of 50, with 3 indentured maids (not slaves). You can read (Puritan tradition lets girls read the Bible). At 13 in 1750, you\'ll be 23 by the Boston Tea Party — you might stand with the Sons of Liberty.',
      },
      hook: {
        cn: '275 年后 Willow 在加州学"美国独立战争前夜"— 课本写的是男人开枪。但你的妈妈、你、你妹妹组织抵制英货 ("Daughters of Liberty")。革命的"无名一半"为什么被忘？',
        en: '275 years later in California, Willow studies "the eve of revolution" — textbooks center men with guns. But your mother, you, your sister organized boycotts of British goods ("Daughters of Liberty"). Why is revolution\'s "nameless half" forgotten?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Jamestown 1607 — 英国首个永久殖民地（弗吉尼亚）',
      'Mayflower Compact 1620 五月花号公约 — 自治传统起点',
      'Pilgrims / Puritans 清教徒 — 新英格兰殖民地',
      '三区分化：New England 商贸 / Middle 农业 / Southern 种植园',
      'Triangular Trade 三角贸易（欧洲 ↔ 非洲 ↔ 美洲）',
      'House of Burgesses 1619 — 美洲首个民选议会',
      'Great Awakening 大觉醒运动 ~1730s（Jonathan Edwards）',
      'Albany Plan of Union 1754 — Franklin 富兰克林联合提议',
    ],
    en: [
      'Jamestown 1607 — first permanent English colony (Virginia)',
      'Mayflower Compact 1620 — beginning of self-government tradition',
      'Pilgrims / Puritans — settle New England',
      'Three regions: New England trade / Middle farming / Southern plantation',
      'Triangular Trade (Europe ↔ Africa ↔ Americas)',
      'House of Burgesses 1619 — first elected assembly in Americas',
      'Great Awakening, ~1730s (Jonathan Edwards)',
      'Albany Plan of Union 1754 — Franklin\'s union proposal',
    ],
  },
};
