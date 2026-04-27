// view: Globalization · 2000 · World
// Grade 8 · supplementary (extended-ap) · AP World Unit 9 / CA HSS-11
export const VIEW = {
  id: 'globalization',
  grade: 8,
  topicTier: 'supplementary',
  tierType: 'extended-ap',
  standardsAlignment: [
    { code: 'CA-HSS-11.11', label: { cn: 'CA HSS-11.11 美国当代社会与全球角色', en: 'CA HSS-11.11 Contemporary American society + global role' } },
    { code: 'AP-WHAP-9.9',  label: { cn: 'AP World Unit 9.9 全球化时代的延续与变革', en: 'AP World Unit 9.9 Continuity and Change in the Global Age' } },
  ],
  title:    { cn: '全球化时代', en: 'Globalization' },
  subtitle: { cn: '2000 · 千年之交 · 互联网 + WTO + 中国入世 + 气候议题', en: '2000 · Y2K turn · Internet + WTO + China rises + climate agenda' },
  year: 2000,

  camera: {
    projection: 'mercator',
    center: [10, 25],
    scale: 130,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'eurasia-modern',
      modernPolities:  'eurasia-modern',
      highlightId:     'china-m',
    },
    F:  { ids: ['malacca-strait', 'suez-isthmus', 'silk-road'] },
    L4: {
      pins: ['wto-1995', 'internet-www-1991', 'nine-eleven-2001', 'china-wto-2001', 'eu-euro-1999', 'seattle-protests-1999', 'paris-climate-2015'],
    },
  },

  causalSummary: {
    cn: 'L0 卫星 + 海底光缆压缩地球 + 集装箱 1956 改海运经济 + L1 全球变暖压力浮现 + L2 中国 14 亿人口加入全球市场 / 跨国公司主导 / 1990 后全球贸易 6× 增长 + L3 WTO 1995 / IMF / 世界银行 + 互联网 + 英语作 lingua franca + L4 1989 柏林墙倒 → 1995 WTO → 2001 中国入 WTO → 2008 金融危机 → 2015 巴黎协定 → 2020 疫情冲击全球化',
    en: 'L0 satellites + undersea fiber compress the globe + containerization 1956 transforms shipping + L1 climate change pressure emerges + L2 China\'s 1.4B joins global market / multinationals dominate / global trade grows 6× post-1990 + L3 WTO 1995 / IMF / World Bank + Internet + English as lingua franca + L4 1989 Berlin Wall → 1995 WTO → 2001 China joins WTO → 2008 financial crisis → 2015 Paris Accord → 2020 pandemic shocks globalization',
  },

  keyFigures: [
    {
      emoji: '🌐',
      name: { cn: 'WTO 总干事', en: 'WTO Director-General' },
      role: { cn: '世界贸易组织最高官员', en: 'Top WTO official' },
      bio: {
        cn: '你是 Mike Moore (新西兰) 或 Pascal Lamy (法国) 类型。1995 年 WTO 取代 GATT，你管 164 国家贸易争端。你坚信"自由贸易让每个人富"— 经济学课本说的。你 1999 年在西雅图开会 — 5 万抗议者打砸 + 警察催泪弹 — "Battle of Seattle"。你以为反全球化只是少数 — 但 2016 Brexit + 川普当选你才发现你想错了。',
        en: 'A Mike Moore (New Zealand) or Pascal Lamy (France) figure. In 1995 the WTO replaced GATT; you adjudicate 164 nations\' trade. You believe "free trade enriches everyone" — textbook economics. In 1999 your Seattle summit faced 50,000 protesters + tear gas — the "Battle of Seattle." You thought anti-globalization was a fringe — until 2016 Brexit + Trump revealed how wrong you were.',
      },
      hook: {
        cn: '如果你是 WTO 头 — 你的"全球化让大家富"是真的吗？富了，但不平等也极大化（1% 拥有 50% 财富）。"平均富裕"和"个人感受"是两回事。',
        en: 'If you were WTO chief — was "globalization enriches all" true? Yes, on average — but inequality maxed out (1% own 50% of wealth). "Average wealth" and "individual feeling" are different things.',
      },
    },
    {
      emoji: '✊',
      name: { cn: '反全球化活动家', en: 'Anti-globalization Activist' },
      role: { cn: '1999 西雅图抗议者 / Vandana Shiva 类型', en: '1999 Seattle protester / Vandana Shiva type' },
      bio: {
        cn: '你是印度生态学家 + 女权主义者 + 反 GMO 运动者。你认为 WTO 让跨国公司（孟山都 + 雀巢）压榨第三世界农民。1999 你在西雅图坐街抗议 — 警察打你催泪弹。你 2024 年还在战斗 — 但全球化的"赢家"已经不是 WTO 而是中美科技公司。"反对什么"也在变。',
        en: 'You\'re an Indian ecologist + feminist + anti-GMO activist. You see the WTO as enabling multinationals (Monsanto + Nestlé) to crush Third World farmers. In 1999 in Seattle you sat in the streets — police tear-gassed you. In 2024 you\'re still fighting — but globalization\'s "winners" are no longer WTO, they\'re US-China tech giants. What you oppose has shifted.',
      },
      hook: {
        cn: '如果你是反全球化活动家 — 你 25 年来"反"的对象一直在变。这是你失败还是问题在变形？',
        en: 'If you were the activist — what you "oppose" has shifted over 25 years. Are you failing, or is the problem morphing?',
      },
    },
    {
      emoji: '🏭',
      name: { cn: '深圳工厂工人', en: 'Shenzhen Factory Worker' },
      role: { cn: '富士康 iPhone 装配线女工', en: 'Foxconn iPhone assembly-line worker' },
      bio: {
        cn: '你 19 岁从湖南农村来深圳 — 富士康工厂 30 万人。你装 iPhone — 每天 12 小时，月薪 2000 元（300 美元）。2010 年富士康跳楼连环 14 起 — 把你的生活戳破给世界看。但你不想回乡下 — 城市虽苦也好过农村。"全球化"对你是出口 — 你儿子会上高中、可能上大学 — 这是 2 代人的革命。',
        en: 'At 19 you came from rural Hunan to Shenzhen — Foxconn employs 300,000. You assemble iPhones — 12 hours daily, ¥2,000 ($300)/month. In 2010 a wave of 14 Foxconn suicides exposed your life to the world. But you won\'t go back to the countryside — the city is hard but better than the farm. "Globalization" is your way out — your son will reach high school, maybe college — a 2-generation revolution.',
      },
      hook: {
        cn: '如果你是工厂工人 — 美国 NYT 写你"被剥削"。你自己说"我在改变命运"。两种叙事都对吗？或者其中一个是别人代你说的？',
        en: 'If you were the factory worker — the NYT calls you "exploited." You say "I\'m changing my fate." Are both true, or is one being told for you?',
      },
    },
    {
      emoji: '👨‍👩‍👧',
      name: { cn: '加州移民家庭', en: 'California Immigrant Family' },
      role: { cn: '从中国 / 印度 / 墨西哥来的 H-1B / 难民', en: 'H-1B / refugee from China / India / Mexico' },
      bio: {
        cn: '你 2010 年从印度 / 中国 / 墨西哥来加州 — 父母都受过教育 + 找到 STEM 工作。你 13 岁的女儿在加州学校 — 跟白人 / 黑人 / 拉美裔同学一起学。她是"globalization\'s 中产" — 父母牺牲故土文化换她的"美国机会"。她可能会感谢父母 — 也可能会问"为什么我不像别人有 4 代加州血统"。',
        en: 'In 2010 you came to California from India / China / Mexico — educated parents + STEM jobs. Your 13-year-old daughter goes to a California school — with white, Black, Latino classmates. She\'s "globalization\'s middle class" — parents sacrificed homeland culture for her "American chance." She may thank you — or ask "why don\'t I have 4 generations of California roots like others?"',
      },
      hook: {
        cn: '如果你是移民家长 — 你给孩子机会，但孩子失去你的语言 + 文化。这是"成功"还是"代价"？Willow 的同学一半是这种家庭 — 她怎么读他们？',
        en: 'If you were the immigrant parent — you gave your child opportunity but they lost your language and culture. Success, or cost? Half Willow\'s classmates are from such families — how does she read them?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Willow（你自己 — 同龄人）', en: 'Willow (you yourself — peer)' },
      role: { cn: '13 岁，加州 7 年级女生', en: '13-year-old, California 7th grader' },
      bio: {
        cn: '你 — 是的就是 Willow，本人。你住加州 Cupertino，爸爸是软件工程师。你的同学有华裔、印度裔、墨西哥裔、白人、黑人。你用 ChatGPT 做作业，看 TikTok 学习国际新闻。你的"日常生活"包含全球化所有产物：iPhone（深圳装）+ Tesla（中国电池）+ Uniqlo（日本设计）+ Shein（中国电商）。',
        en: 'You — yes, Willow herself. You live in Cupertino, California; your father is a software engineer. Your classmates are Chinese, Indian, Mexican, white, Black. You use ChatGPT for homework, watch TikTok for global news. Your daily life contains every product of globalization: iPhone (assembled Shenzhen) + Tesla (Chinese batteries) + Uniqlo (Japanese design) + Shein (Chinese e-comm).',
      },
      hook: {
        cn: '你（Willow）现在 13 岁。你 30 岁时全球化可能已经"逆转"— 美中脱钩 + 关税 + AI 让生产回美国。你这一代是"全球化最高峰的孩子"— 你怎么记忆它？',
        en: 'You (Willow) are 13 today. By 30, globalization may have "reversed" — US-China decoupling + tariffs + AI bringing production home. Your generation is "the children of peak globalization." How will you remember it?',
      },
    },
  ],

  examPoints: {
    cn: [
      '集装箱化 Containerization 1956 — 海运成本降 90%+',
      'WTO 1995 — 取代 GATT · 自由贸易体制',
      'NAFTA 1994 / EU 欧元 1999 — 区域经济一体化',
      '中国入 WTO 2001 — 出口爆炸 · "世界工厂"',
      '外包 + 全球供应链 — 苹果 / 富士康模式',
      '互联网 + 社交媒体革命 — Web 1991 / Facebook 2004',
      '气候变化 — Kyoto 1997 / Paris 2015',
      '反全球化运动 — Seattle 1999 / BRICS / 2016 民粹',
    ],
    en: [
      'Containerization 1956 — cuts shipping cost 90%+',
      'WTO 1995 — replaces GATT · free trade regime',
      'NAFTA 1994 / EU euro 1999 — regional integration',
      'China joins WTO 2001 — export boom · "world\'s factory"',
      'Outsourcing + global supply chains — Apple / Foxconn model',
      'Internet + social media revolution — Web 1991 / Facebook 2004',
      'Climate change — Kyoto 1997 / Paris 2015',
      'Anti-globalization — Seattle 1999 / BRICS / 2016 populism',
    ],
  },
};
