// view: Han China · 100 AD · East Asia
// Grade 6 · HSS-6.6 (Ancient China)
// 配对 Roman 117 AD — Pax Romana ↔ Pax Sinica 双极对照
export const VIEW = {
  id: 'han-china',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-6.6',   label: { cn: 'CA HSS-6.6 古代中国 — 汉朝政治 / 文化 / 丝路', en: 'CA HSS-6.6 Ancient China — Han politics / culture / Silk Road' } },
    { code: 'CA-HSS-6.7',   label: { cn: 'CA HSS-6.7 罗马帝国（对照学习）', en: 'CA HSS-6.7 Roman Empire (comparative)' } },
  ],
  title:    { cn: '汉帝国', en: 'Han Empire' },
  subtitle: { cn: '100 AD · 与罗马并立 · Pax Sinica', en: '100 AD · Twin pole with Rome · Pax Sinica' },
  year: 100,

  camera: {
    projection: 'mercator',
    center: [95, 33],
    scale: 380,
    yOffset: 10,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'east-asia-100ad',
      modernPolities:  'east-asia-modern',
      yearSnapshot:    'world_100',
      highlightId:     'han-100',
    },
    C:  { civs: 'classical-100' },
    F:  { ids: ['silk-road', 'great-wall', 'yangtze', 'yellow-river', 'tibetan-plateau', 'mongolian-steppe', 'himalaya'] },
    L4: {
      pins: ['luoyang-han', 'changan-han', 'dunhuang-han', 'rome-100'],
    },
  },

  causalSummary: {
    cn: 'L0 黄河 + 长江双核 + L1 季风农业 + L2 6000 万人口（≈ 罗马）+ 铁犁丝绸 + L3 太学 + 察举 + 儒家国教 + L4 汉武帝拓土 → 张骞通西域 → 蔡伦造纸',
    en: 'L0 Yellow + Yangtze twin cores + L1 monsoon agriculture + L2 60M pop (≈ Rome) + iron plow/silk + L3 Imperial Academy + recommendation + Confucian state + L4 Wu Di expansion → Zhang Qian Silk Road → paper invention',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '汉武帝', en: 'Emperor Wu of Han' },
      role: { cn: '汉朝第七代皇帝 BC 141-87', en: '7th Han emperor BC 141-87' },
      bio: {
        cn: '你 16 岁继位，在位 54 年。你北驱匈奴、南灭南越、西通西域 — 把汉帝国版图扩到极致。你"罢黜百家，独尊儒术"— 让儒学成为 2000 年的国家意识形态。但你晚年好大喜功、四处征伐让国库虚空，民怨四起。',
        en: 'Crowned at 16, ruled 54 years. You drove back the Xiongnu, conquered Nanyue, opened the Silk Road — Han\'s greatest extent. You "deposed the hundred schools and exalted only Confucianism" — making it China\'s state ideology for 2,000 years. But late-reign over-expansion drained the treasury and bred unrest.',
      },
      hook: {
        cn: '如果你是汉武帝 — 你赢了帝国最大版图，但晚年下"轮台诏"罪己。皇帝认错是软弱还是政治智慧？你儿孙看着你的痕迹治国 — 学你哪一面？',
        en: 'If you were Wu Di — at the empire\'s peak, you issued the "Luntai Edict" admitting your faults. Was that weakness or wisdom? Your descendants would rule by your example — which side do they imitate?',
      },
    },
    {
      emoji: '📜',
      name: { cn: '董仲舒', en: 'Dong Zhongshu' },
      role: { cn: '儒家学者 / "罢黜百家"提议人', en: 'Confucian scholar / proposed "exalt only Confucianism"' },
      bio: {
        cn: '你是河北人，研究《公羊春秋》。你向汉武帝提《天人三策》— "皇帝是天的儿子，要按天意（=儒家伦理）治国"。这给了王权宇宙论合法性，但也给了士大夫批评皇帝的"天谴"工具 — 双刃剑。',
        en: 'A scholar from Hebei, expert in the Gongyang Spring and Autumn. You presented the Three Memorials to Wu Di — "the emperor is son of Heaven, ruling by Heaven\'s will (= Confucian ethics)." This gave kingship cosmic legitimacy AND gave scholars a "Heaven\'s rebuke" tool to critique emperors — two-edged sword.',
      },
      hook: {
        cn: '如果你是董仲舒 — 你给了皇帝天命，也给了百姓造反的理由（"天怒就该换天子"）。你究竟是巩固王权还是埋下推翻王权的种子？',
        en: 'If you were Dong — you gave kings the Mandate of Heaven AND gave peasants permission to rebel ("if Heaven is angry, replace the emperor"). Did you fortify monarchy, or plant the seed of its overthrow?',
      },
    },
    {
      emoji: '🐎',
      name: { cn: '张骞', en: 'Zhang Qian' },
      role: { cn: '出使西域 13 年的外交官', en: 'Diplomat who spent 13 years on the Silk Road' },
      bio: {
        cn: '你 BC 138 受汉武帝派去联合月氏夹击匈奴。出去就被匈奴抓了 10 年（还娶了匈奴妻生子）。逃出来去到大宛 / 大夏，BC 126 才回长安 — 100 个随从只剩 1 人。你带回西域地理、葡萄、苜蓿 — 开通丝绸之路。',
        en: 'In BC 138 Wu Di sent you to ally with the Yuezhi against the Xiongnu. You were captured by Xiongnu for 10 years (married, had a son). Escaping, you reached Ferghana and Bactria; returned BC 126 — of 100 men, only 1 came back. You brought home geography, grapes, alfalfa — opening the Silk Road.',
      },
      hook: {
        cn: '如果你是张骞 — 13 年后你回家，国家变了，老婆改嫁，孩子不认你。你带回的"葡萄和苜蓿"值这一辈子吗？',
        en: 'If you were Zhang — after 13 years you returned home; the country had changed, your wife remarried, your child didn\'t know you. Were grapes and alfalfa worth your life?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '关中农户', en: 'Guanzhong Peasant' },
      role: { cn: '长安附近五口之家', en: 'Family of 5 near Chang\'an' },
      bio: {
        cn: '你住长安外 50 公里。汉初轻徭薄赋（"文景之治"）让你过得不错。但汉武帝打匈奴 50 年后，你儿子被征兵 5 次，3 次没回来。你交"算赋"人头税、"口赋"儿童税、田税。家里 1/3 收成上交。',
        en: 'You live 50km outside Chang\'an. The early Han\'s light taxes (Wen-Jing era) brought prosperity. But after 50 years of Wu Di\'s wars, your son was conscripted 5 times — only returned 3. You pay head tax, child tax, land tax — 1/3 of harvest gone.',
      },
      hook: {
        cn: '如果你是农户 — 史书说"汉武帝雄才大略"，但你儿子死边疆。"伟大"对皇帝和对百姓是不是两个意思？',
        en: 'If you were the peasant — historians call Wu Di "great." But your son died on the frontier. Does "greatness" mean different things for emperors vs commoners?',
      },
    },
    {
      emoji: '👦',
      name: { cn: '司马（虚构同龄人）', en: 'Sima (fictional peer)' },
      role: { cn: '13 岁，太学生学者之子', en: '13-year-old, son of an Imperial Academy scholar' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是太学博士。你 8 岁开始背《论语》《孟子》，13 岁背完五经。你将来会通过察举制做官 — 不靠门第靠学问。当然，前提是你出生在长安附近的小康家庭，不是边疆农户。',
        en: 'Same age as Willow. Your father teaches at the Imperial Academy. You started memorizing the Analects and Mencius at 8; finished the Five Classics by 13. You\'ll enter government via "recommendation" — by learning, not lineage. Provided, of course, you were born middle-class near Chang\'an, not in a frontier village.',
      },
      hook: {
        cn: 'Willow 在 2026 年也在背书考 SAT — 也是用学问换前途。她跟你隔了 2000 年和 9000 公里。中国 SAT（科举）走到今天的 SAT（美国 SAT），你怎么看这趟旅程？',
        en: 'In 2026 Willow also memorizes for the SAT — also trading study for opportunity. 2000 years and 9000 km separate you. The Chinese SAT (imperial exam) → today\'s American SAT — how does that journey look to you?',
      },
    },
  ],

  examPoints: {
    cn: [
      '汉高祖刘邦 BC 202 立汉 / Han Gaozu founds Han',
      '汉武帝 Emperor Wu BC 141-87 — 推恩令 / 罢黜百家独尊儒术',
      'Confucianism 儒家成国教 / Mandate of Heaven 天命论',
      '张骞 Zhang Qian 通西域 → Silk Road 丝绸之路',
      '蔡伦 Cai Lun 105 AD 造纸术（papermaking）',
      'Civil service 察举制 — 通过推荐选官（科举之雏形）',
      'Sima Qian 司马迁《史记》— 中国首部纪传体通史',
      'Pax Sinica 与 Pax Romana 并立 — 欧亚双极',
    ],
    en: [
      'Liu Bang founds Han, BC 202',
      'Emperor Wu BC 141-87 — empire expansion / Confucianism state ideology',
      'Confucianism as state orthodoxy / Mandate of Heaven',
      'Zhang Qian opens Silk Road',
      'Cai Lun, 105 AD — invents paper',
      'Civil service recommendation system (precursor to imperial exam)',
      'Sima Qian\'s Shiji — China\'s first comprehensive history',
      'Pax Sinica parallel to Pax Romana — Eurasian twin poles',
    ],
  },
};
