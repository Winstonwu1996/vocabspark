// view: Gunpowder Empires · 1600 · Eurasia (Ottoman + Safavid + Mughal)
// Grade 7 · AP-WHAP-3 (Land-based empires)
export const VIEW = {
  id: 'gunpowder-empires',
  grade: 7,
  topicTier: 'supplementary',
  tierType: 'extended-ap',  // AP 进阶 — AP 考试重点主题
  standardsAlignment: [
    { code: 'AP-WHAP-3.1',  label: { cn: 'AP World Unit 3.1 帝国扩张（火药帝国）', en: 'AP World Unit 3.1 Empires expand (gunpowder)' } },
    { code: 'AP-WHAP-3.2',  label: { cn: 'AP World Unit 3.2 帝国行政（奥斯曼 / 萨非 / 莫卧儿）', en: 'AP World Unit 3.2 Empires: administration' } },
    { code: 'AP-WHAP-3.3',  label: { cn: 'AP World Unit 3.3 信仰体系（什叶 / 逊尼 / Akbar 宽容）', en: 'AP World Unit 3.3 Belief systems' } },
    { code: 'CA-HSS-7.2',   label: { cn: 'CA HSS-7.2 伊斯兰文明晚期（cross-listed）', en: 'CA HSS-7.2 Islamic civilizations late phase (cross-listed)' } },
  ],
  title:    { cn: '火药帝国', en: 'Gunpowder Empires' },
  subtitle: { cn: '1600 · 奥斯曼 + 萨非 + 莫卧儿三足鼎立', en: '1600 · Ottoman + Safavid + Mughal triumvirate' },
  year: 1600,

  camera: {
    projection: 'mercator',
    center: [60, 30],
    scale: 280,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'gunpowder-empires-1600',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1700',         // 1600 不在库 · 1700 最近（格局基本如此）
      highlightId:     'ottoman-1600',
    },
    C:  { civs: 'early-modern-1530' },
    F:  { ids: ['silk-road', 'sahara-trade'] },
    L4: {
      pins: ['istanbul-1600', 'isfahan-1600', 'agra-1600', 'taj-mahal-future', 'selim-ottoman-1517', 'chaldiran-1514'],
    },
  },

  causalSummary: {
    cn: 'L0 欧亚草原走廊 + 海上丝路复兴 + 印度洋季风 + L1 小冰期施压农业（1300-1850）+ L2 奥斯曼 ~2500 万 / 莫卧儿 ~70-100M / 萨非 ~800 万 + 棉花 / 丝 / 香料出口 + L3 millet 制（奥斯曼）/ 什叶国教（萨非）/ Akbar 宗教宽容（莫卧儿）+ 常备军 + 火炮 + L4 1453 君堡 → 1517 奥斯曼取马穆鲁克 → 1526 Babur 立莫卧儿 → 1588 Shah Abbas 改革萨非',
    en: 'L0 vast steppe corridor + Silk Road revival + Indian Ocean monsoons + L1 Little Ice Age pressures agriculture (1300-1850) + L2 Ottoman ~25M / Mughal ~70-100M / Safavid ~8M + cotton/silk/spice exports + L3 millet (Ottoman) / Shi\'a state (Safavid) / Akbar tolerance (Mughal) + standing armies + cannon + L4 1453 Constantinople → 1517 Ottoman takes Mamluk Egypt → 1526 Babur founds Mughal → 1588 Shah Abbas reforms Safavid',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Akbar 阿克巴大帝', en: 'Akbar the Great' },
      role: { cn: '莫卧儿皇帝 1556-1605', en: 'Mughal Emperor 1556-1605' },
      bio: {
        cn: '你 13 岁继位，统治 1 亿印度人（80% 印度教徒，20% 穆斯林）。你 1564 废除 jizya 人头税（穆斯林征非穆斯林的税）— 这在伊斯兰世界是惊天之举。你创"sulh-i kul"（普遍宽容）— 让印度教、伊斯兰、基督教、琐罗亚斯德教都进宫廷讨论。你尝试创新宗教 Din-i Ilahi — 没成功。',
        en: 'Crowned at 13, you rule 100 million Indians (80% Hindu, 20% Muslim). In 1564 you abolished the jizya — the head tax Muslim states levied on non-Muslims. Stunning in the Islamic world. You proclaimed "sulh-i kul" (universal tolerance) — bringing Hindus, Muslims, Christians, Zoroastrians into court debates. You attempted a new syncretic religion, Din-i Ilahi — it failed.',
      },
      hook: {
        cn: '如果你是 Akbar — 你统治多种教徒的帝国，靠"宽容"维持稳定。但你的曾孙 Aurangzeb 1700 年又恢复 jizya — 莫卧儿在 50 年内崩溃。"宽容"是政治弱点还是真智慧？',
        en: 'If you were Akbar — ruling a multi-religious empire, you used "tolerance" for stability. But your great-grandson Aurangzeb restored the jizya in 1700 — Mughals collapsed within 50 years. Was "tolerance" weakness or wisdom?',
      },
    },
    {
      emoji: '⚔️',
      name: { cn: 'Janissary 加尼塞里', en: 'Janissary' },
      role: { cn: '奥斯曼苏丹的精锐步兵', en: 'Sultan\'s elite infantry' },
      bio: {
        cn: '你是 devshirme（童子兵制）出身 — 12 岁从巴尔干基督徒家庭被抓到伊斯坦布尔，皈依伊斯兰，训练成苏丹禁卫军。你不能结婚，没家庭，绝对忠诚苏丹。1453 你们用大炮攻破君士坦丁堡。但你 17 世纪开始腐化 — 索高薪、参与政变 — 1826 苏丹屠杀你这一支。',
        en: 'You\'re devshirme — at 12 taken from a Balkan Christian family to Istanbul, converted to Islam, trained as the Sultan\'s elite. Forbidden to marry, no family, absolute loyalty to the Sultan. In 1453 your cannons breached Constantinople\'s walls. But by the 17th c. you grew corrupt — demanding pay, staging coups — in 1826 the Sultan massacred your corps.',
      },
      hook: {
        cn: '如果你是 Janissary — 你被强行皈依伊斯兰、被剥夺家人 — 但你也是奥斯曼最精锐 + 最有权。受害者还是统治者？这种"被迫成功"的悖论怎么解？',
        en: 'If you were Janissary — forcibly converted, family stripped — yet you were the empire\'s elite. Victim or ruler? How do you resolve this "forced success" paradox?',
      },
    },
    {
      emoji: '🛐',
      name: { cn: '什叶派学者 Shah Abbas 朝廷', en: 'Safavid Shi\'a Cleric' },
      role: { cn: '萨非朝廷的什叶派 ulama', en: 'Shi\'a religious scholar at Shah Abbas\'s court' },
      bio: {
        cn: '你住伊斯法罕。Safavid 朝把波斯从逊尼派强制转成什叶派 — 这是史上唯一一个国家级强制改宗。你给 Shah Abbas 当顾问，制定什叶法律、写宗教书。1514 Safavid 在 Chaldiran 败给奥斯曼火炮 — 但你赢了"信仰之战" — 伊朗到今天还是什叶派核心。',
        en: 'You live in Isfahan. Safavid forcibly converted Persia from Sunni to Shi\'a — history\'s only state-mandated mass conversion. As Shah Abbas\'s advisor you draft Shi\'a law, author religious texts. In 1514 Safavid lost at Chaldiran to Ottoman cannons — but you won the "war of faith" — Iran remains the Shi\'a heartland today.',
      },
      hook: {
        cn: '如果你是 Shi\'a 学者 — Safavid 强制改宗 = 暴力。但 500 年后伊朗的"什叶身份"是真实存在的。强制造成的"传统"算不算传统？',
        en: 'If you were Shi\'a cleric — Safavid forced conversion was violence. But 500 years later, Iran\'s Shi\'a identity is real. Does a "tradition" born of force count as tradition?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '安纳托利亚 sipahi 骑士', en: 'Anatolian Sipahi Cavalry' },
      role: { cn: '奥斯曼地方封建骑士', en: 'Ottoman provincial cavalry-landlord' },
      bio: {
        cn: '你是奥斯曼 sipahi — 苏丹给你一块地（timar）养活你 + 你的马 + 装备，回报是你随时上前线。你跟你欧洲对应（封建骑士）很像 — 但你不能继承土地。你儿子要靠自己的功劳挣 timar。这套制度让奥斯曼 200 年高效，但火枪兴起后 Janissary 取代你。',
        en: 'You\'re an Ottoman sipahi — the Sultan grants you a timar (land grant) supporting you + horse + gear; in return you fight on call. You resemble European feudal knights — but you can\'t inherit. Your son must earn his own timar. This system worked 200 years; once muskets rose, Janissaries replaced you.',
      },
      hook: {
        cn: '如果你是 sipahi — 奥斯曼"反封建"（土地不能世袭）让帝国 200 年强大。但你儿子可能比你穷。"流动性"对个人是诅咒还是对国家是祝福？',
        en: 'If you were sipahi — the Ottoman anti-feudal system (no land inheritance) kept the empire strong for 200 years. But your son might be poorer than you. Is "mobility" a curse to the individual yet a blessing to the state?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Babur（虚构同龄人）', en: 'Babur (fictional peer)' },
      role: { cn: '13 岁，伊斯法罕织毯工人之子', en: '13-year-old, Isfahan carpet-weaver\'s son' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是织毯工人 — Safavid 时期波斯地毯出口到欧洲，王室给了你父亲 patron。你帮爸爸打结 — 一块地毯 200 万个结、要织 18 个月。你跟 Hindu 商人、Armenian 翻译、Ottoman 间谍同时打交道 — 伊斯法罕是 1600 年的全球化中心。',
        en: 'Same age as Willow. Your father is a carpet weaver — under the Safavids, Persian rugs were exported to Europe; the royal family is your father\'s patron. You help him knot — one carpet has 2 million knots, takes 18 months. You interact daily with Hindu traders, Armenian translators, Ottoman spies — Isfahan is the globalization hub of 1600.',
      },
      hook: {
        cn: '400 年后 Willow 在加州可能买一块"波斯地毯"装饰 — 你的工艺还活着。但你的世界已被欧洲取代。"产品赢了，制造者输了"— 这套全球化逻辑是怎么形成的？',
        en: '400 years later, Willow might buy a "Persian rug" for decor in California — your craft survives. But your world was overtaken by Europe. "The product wins, the maker loses" — how did this globalization logic form?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Süleyman the Magnificent 苏莱曼大帝（1520-1566）— 奥斯曼黄金期',
      'Janissaries 加尼塞里 + Devshirme 童子兵制',
      'Akbar 阿克巴（1556-1605）— sulh-i kul / 1564 废 jizya / Din-i Ilahi 综合教（小众象征）',
      'Shah Abbas 阿巴斯（1588-1629）— 萨非中兴 + Isfahan',
      'Battle of Chaldiran 1514 — 奥火炮胜萨非（逊尼-什叶分界）',
      'Battle of Lepanto 1571 — 奥海军败于西班牙 / 威尼斯',
      '莫卧儿建筑 — Taj Mahal 1632 / Red Fort（红堡）',
      'Aurangzeb 奥朗则布（1658-1707）— 严施 Sharia → 莫卧儿衰',
    ],
    en: [
      'Süleyman the Magnificent (1520-1566) — Ottoman golden age',
      'Janissaries + Devshirme child-soldier system',
      'Akbar (1556-1605) — sulh-i kul, abolished jizya 1564 / Din-i Ilahi syncretism',
      'Shah Abbas (1588-1629) — Safavid revival + Isfahan',
      'Battle of Chaldiran 1514 — Ottoman cannon beats Safavid (Sunni-Shia line)',
      'Battle of Lepanto 1571 — Ottoman naval defeat by Spain/Venice',
      'Mughal architecture — Taj Mahal 1632 / Red Fort',
      'Aurangzeb (1658-1707) — strict Sharia → Mughal decline',
    ],
  },
};
