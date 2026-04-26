// view: Mali Empire · 1324 · Mansa Musa's Hajj
// Grade 7 · HSS-7.4
export const VIEW = {
  id: 'mali-empire',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.4', label: { cn: 'CA HSS-7.4 西非帝国（加纳 / 马里 / 桑海）', en: 'CA HSS-7.4 West African empires (Ghana / Mali / Songhai)' } },
    { code: 'AP-WHAP-2.4', label: { cn: 'AP World Unit 2.4 跨撒哈拉商路', en: 'AP World Unit 2.4 Trans-Saharan trade routes' } },
  ],
  title:    { cn: '马里帝国', en: 'Mali Empire' },
  subtitle: { cn: '1324 · 曼萨穆萨朝觐', en: '1324 · Mansa Musa\'s Hajj' },
  year: 1324,

  camera: {
    projection: 'mercator',
    center: [0, 18],
    scale: 380,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'mali-1324',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1300',
      highlightId:     'mali-empire',
    },
    F:  { ids: ['niger-river', 'sahara-trade'] },
    L4: {
      pins: ['cairo-1324', 'timbuktu-1324', 'niani-1324', 'djenne', 'mecca-1324'],
    },
  },

  causalSummary: {
    cn: 'L0 撒哈拉沙漠 + 萨赫勒草原 + 尼日尔河弯 + L1 中世纪暖期沙漠通行尚可 + L2 马里帝国控制 ~500 万人 / 跨撒哈拉商队连接 + L3 伊斯兰教 + 王权神授 + 廷巴克图学问中心 / 黄金 + 盐 + 奴隶贸易 + L4 1235 桑迪亚塔立国 → 1324 曼萨穆萨朝觐撒钱 → 压低开罗金价数年（al-Umari 称 12 年，存在争议）→ 欧洲首次得知西非黄金 → 1375 加泰罗尼亚地图标"曼萨穆萨"',
    en: 'L0 Sahara desert + Sahel savanna + Niger River bend + L1 Medieval Warm makes desert crossing viable + L2 Mali Empire ruled ~5M / trans-Saharan caravans connect + L3 Islam + divine kingship + Timbuktu scholarship / gold + salt + slave trade + L4 1235 Sundiata founds → 1324 Mansa Musa\'s gold-spending Hajj → depressed Cairo\'s gold market for years (al-Umari claims 12, contested) → Europe first hears of West African gold → 1375 Catalan Atlas marks "Mansa Musa"',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Mansa Musa 曼萨穆萨', en: 'Mansa Musa' },
      role: { cn: '马里帝国王 1312-1337', en: 'King of Mali 1312-1337' },
      bio: {
        cn: '你统治 5 百万人 + 占世界一半的黄金产量。1324 年你做朝觐 hajj，带 6 万随从 + 12000 奴隶 + 80 头骆驼背黄金 — 沿途撒钱让开罗金价跌了好几年。你回马里前请走西班牙建筑师建廷巴克图清真寺。欧洲 1375 加泰罗尼亚地图把你画在西非 — 史上最富之人。',
        en: 'You rule 5 million people + half the world\'s gold supply. In 1324 your hajj — 60,000 retainers + 12,000 slaves + 80 camels of gold — gave so much away that Cairo\'s gold market collapsed for years. Returning to Mali, you hired a Spanish architect to build Timbuktu\'s mosque. The 1375 Catalan Atlas drew you in West Africa — likely history\'s richest person.',
      },
      hook: {
        cn: '如果你是 Mansa Musa — 你撒钱"显富"让开罗经济崩盘 — 是慷慨还是傲慢？欧洲从此知道西非有黄金 — 200 年后葡萄牙就来抢了。你的炫富是不是埋下殖民的种子？',
        en: 'If you were Mansa Musa — your gold-giving crashed Cairo\'s economy — generosity or arrogance? Europe learned of West African gold — 200 years later the Portuguese came hunting. Did your display plant the seed of colonialism?',
      },
    },
    {
      emoji: '📚',
      name: { cn: '廷巴克图学者', en: 'Timbuktu Scholar' },
      role: { cn: 'Sankore 学院 ulama / 法学家', en: 'Sankore Madrasah scholar / jurist' },
      bio: {
        cn: '你在 Sankore 学院学伊斯兰法、天文、医学。廷巴克图鼎盛时 25000 学生 — 占城市 1/4 人口。你的图书馆藏 70 万册手稿（19 世纪后被殖民者掠走 + 沙漠保护，2012 ISIS 烧了部分）。马里 = 黑人非洲第一次成为"知识中心"。',
        en: 'You study Islamic law, astronomy, and medicine at Sankore Madrasah. At its peak, Timbuktu had 25,000 students — a quarter of the city. Your library held 700,000 manuscripts (some looted by colonizers, others preserved by sand; ISIS burned some in 2012). Mali = Black Africa as a global knowledge center for the first time.',
      },
      hook: {
        cn: '如果你是学者 — 欧洲人 100 年后才有大学；你这里已经几代人在做学问。但今天美国课本仍把"中世纪学问"画在欧洲 — 谁的历史被记得？',
        en: 'If you were the scholar — Europe wouldn\'t have universities for another century, but Timbuktu already had generations of scholarship. Yet today\'s textbooks still paint "medieval learning" as European. Whose history gets remembered?',
      },
    },
    {
      emoji: '🐪',
      name: { cn: '撒哈拉商队头目', en: 'Saharan Caravan Master' },
      role: { cn: '盐 / 黄金跨沙漠商队领班', en: 'Salt-and-gold caravan leader' },
      bio: {
        cn: '你统领 1000 头骆驼，每头驮 100 公斤盐（北非 Taghaza 矿区）— 横穿撒哈拉 70 天到廷巴克图换黄金。在沙漠里 1 公斤盐 = 1 公斤金。你认得每颗星，知道每个绿洲的水井。一次商队失踪意味着 100 个家庭破产。',
        en: 'You lead 1,000 camels, each carrying 100kg of salt (from Taghaza in N Africa) — crossing the Sahara in 70 days to Timbuktu, returning with gold. In the desert, 1kg salt = 1kg gold. You know every star and every oasis well. One lost caravan means 100 ruined families.',
      },
      hook: {
        cn: '如果你是商队头 — 你的盐让南方人活下来，南方人的金让北非繁荣。你是商人也是地理老师 + 文化使者 — 这种身份在今天还存在吗？',
        en: 'If you were the caravan master — your salt keeps the south alive; their gold enriches the north. You\'re merchant + geographer + cultural bridge. Does this role still exist today?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '尼日尔河农户', en: 'Niger River Farmer' },
      role: { cn: 'Djenne 灌溉稻农 / 5 口家', en: 'Djenne rice farmer / family of 5' },
      bio: {
        cn: '你住尼日尔河弯 — 每年河水泛滥滋养你的水稻。马里政府收 1/10 税，给你保护和铁器换。你既不是穆斯林也不是基督徒 — 你信祖先和水神。Mansa Musa 是远在 Niani 的传说，你这辈子不会见到。但你儿子可能去廷巴克图当学徒。',
        en: 'You live by the Niger\'s bend — annual floods feed your rice. The Mali state takes 1/10 in tax, gives protection and iron tools in return. You\'re neither Muslim nor Christian — you worship ancestors and water spirits. Mansa Musa is a distant rumor in Niani; you\'ll never meet him. But your son might apprentice in Timbuktu.',
      },
      hook: {
        cn: '如果你是农户 — 帝国对你是抽象的。但你儿子读书改变种姓。Mansa Musa 给你"打开向上的路"还是"加重你的税"？',
        en: 'If you were the farmer — the empire is abstract to you. But your son can study and rise. Did Mansa Musa "open paths up" for you, or just "tax you more"?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Aminata（虚构同龄人）', en: 'Aminata (fictional peer)' },
      role: { cn: '13 岁，廷巴克图学者女儿', en: '13-year-old, Timbuktu scholar\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是 Sankore 学院教授，妈妈是商人独立做生意（西非女性比中东女性更自由）。你认阿拉伯字 + 索宁克语 + 听过几句西班牙语。你听爸爸讲 Mansa Musa 朝觐的故事 — 你想以后能去开罗、麦加、甚至更远。',
        en: 'Same age as Willow. Your father teaches at Sankore; your mother runs her own trade business (West African women have more autonomy than Middle Eastern). You read Arabic + Soninke + have heard some Spanish. Your father tells you of Mansa Musa\'s hajj — you dream of seeing Cairo, Mecca, even farther.',
      },
      hook: {
        cn: '700 年后 Willow 在加州学非洲史 — 但课本只用 1-2 页讲马里。你的世界曾经辉煌过，为什么现代历史课让它消失？谁决定哪段历史值得被讲？',
        en: '700 years later, Willow studies African history in California — but textbooks give Mali 1-2 pages. Your world was glorious; why has modern history erased it? Who decides which past gets told?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Sundiata Keita 桑迪亚塔 1235 立国 / Sundiata Epic 史诗',
      'Mansa Musa 曼萨穆萨 1312-1337 — 史上最富之人',
      '1324 朝觐 Hajj — 沿途撒金致开罗金价数年下跌（al-Umari 称 12 年，存在争议）',
      'Trans-Saharan trade 跨撒哈拉商路：黄金（南）↔ 盐（北）',
      'Timbuktu 廷巴克图 — Sankore Madrasah 桑科尔学院 / 知识中心',
      'Islam 伊斯兰教成国教 / 王权 + 宗教精英共治',
      'Catalan Atlas 1375 加泰罗尼亚地图 — 欧洲首次绘 Mansa Musa',
      'Songhai 桑海帝国接班 1464-1591 / Askia Muhammad',
    ],
    en: [
      'Sundiata Keita founds Mali, 1235 / Epic of Sundiata',
      'Mansa Musa 1312-1337 — likely richest person in history',
      '1324 Hajj — gold giveaway depressed Cairo\'s gold market for years (al-Umari claims 12, contested)',
      'Trans-Saharan trade: gold (south) ↔ salt (north)',
      'Timbuktu — Sankore Madrasah / center of Islamic learning',
      'Islam as state religion / king + religious elite',
      'Catalan Atlas 1375 — first European map showing Mansa Musa',
      'Songhai Empire succeeds Mali, 1464-1591 / Askia Muhammad',
    ],
  },
};
