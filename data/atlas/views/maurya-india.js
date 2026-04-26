// view: Mauryan India · Ashoka · 250 BC
// Grade 6 · HSS-6.5 (Ancient India)
export const VIEW = {
  id: 'maurya-india',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-6.5',   label: { cn: 'CA HSS-6.5 古印度（孔雀帝国 / 阿育王 / 佛教）', en: 'CA HSS-6.5 Ancient India (Maurya/Ashoka/Buddhism)' } },
  ],
  title:    { cn: '阿育王孔雀帝国', en: 'Mauryan Empire under Ashoka' },
  subtitle: { cn: '250 BC · 印度首次统一 + 佛教扩散', en: '250 BC · First Indian unification + Buddhist expansion' },
  year: -250,

  camera: {
    projection: 'mercator',
    center: [70, 25],
    scale: 320,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'maurya-bc250',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_bc200',
      highlightId:     'maurya',
    },
    F:  { ids: ['silk-road', 'himalaya', 'tibetan-plateau'] },
    L4: {
      pins: ['pataliputra', 'kalinga', 'sarnath', 'taxila'],
    },
  },

  causalSummary: {
    cn: 'L0 恒河 + 印度河双谷 + 喜马拉雅北墙 + L1 季风稳定 + 铁犁 + L2 5000 万人 / 标准化货币 / 帝国驿道 + L3 婆罗门 + Kautilya 中央集权 + Dharma 法治 + L4 Kalinga 屠杀触发阿育王皈依',
    en: 'L0 Ganges+Indus twin valleys + Himalayas + L1 stable monsoon + iron plow + L2 50M pop + standardized currency + imperial roads + L3 Brahmin caste + Kautilya bureaucracy + Dharma + L4 Kalinga slaughter triggered Ashoka conversion',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '阿育王', en: 'Ashoka' },
      role: { cn: '孔雀帝国第三王 BC 268-232', en: 'Third Mauryan emperor BC 268-232' },
      bio: {
        cn: '你 BC 261 远征 Kalinga（东海岸）— 屠杀 10 万人、奴役 15 万。战后你看着尸体满地，第一次问"赢了又怎样"。你皈依佛教，下令在帝国 50 多处石柱刻"诏书"宣传非暴力 + 善治。从世界征服者变成第一个用国家力量推宗教伦理的王。',
        en: 'In BC 261 you conquered Kalinga — 100k slaughtered, 150k enslaved. Walking the battlefield you asked "what is winning, really?" You converted to Buddhism, carved edicts on 50+ stone pillars across the empire promoting non-violence + good governance. From world-conqueror to history\'s first ruler using state power to spread religious ethics.',
      },
      hook: {
        cn: '如果你是阿育王 — 你打到帝国最大版图后突然转向"放下屠刀"。这是真悔悟还是政治算计（统一帝国需要新意识形态）？你子孙说你太软，帝国 50 年内分崩。',
        en: 'If you were Ashoka — at maximum conquest you suddenly chose "lay down the sword." Genuine remorse, or political calculation (a unified empire needs new ideology)? Your descendants called you soft; the empire collapsed within 50 years.',
      },
    },
    {
      emoji: '🛐',
      name: { cn: '婆罗门祭司', en: 'Brahmin Priest' },
      role: { cn: '种姓制顶端 / 吠陀经传承者', en: 'Top caste / keeper of the Vedas' },
      bio: {
        cn: '你属于种姓制最顶层（Brahmin）— 主持仪式、念吠陀经、决定何时何地播种打仗。1500 年来你的家族世袭这个位置。阿育王皈依佛教对你是直接威胁 — 佛教不认种姓，谁都能出家成"阿罗汉"。',
        en: 'You\'re Brahmin — top caste, ritual master, Vedic chanter, advisor on when/where to plant or wage war. Your family has held this position for 1500 years. Ashoka\'s Buddhism threatens you directly — Buddhism rejects caste, anyone can become an arhat.',
      },
      hook: {
        cn: '如果你是婆罗门 — 国王推崇"众生平等"，但你的特权来自"等级有别"。你公开反对他还是表面顺从私下抵制？',
        en: 'If you were Brahmin — the king preaches "equality of all beings," but your privilege rests on hierarchy. Open opposition, or quiet resistance behind a smile?',
      },
    },
    {
      emoji: '🪷',
      name: { cn: '佛教托钵僧', en: 'Buddhist Monk' },
      role: { cn: '阿育王派出的传教士', en: 'Missionary commissioned by Ashoka' },
      bio: {
        cn: '你 BC 250 受阿育王派遣去斯里兰卡传佛法。你不带钱财，每天走 30 公里，靠村民施舍一餐过活。你身上带着佛祖舍利和 patta（钵）。这是世界史上第一次国家级跨国传教 — 比基督教早 250 年。',
        en: 'In BC 250 Ashoka sent you to Sri Lanka. No money, walking 30km daily, begging one meal from villagers. You carry the Buddha\'s relic and patta (bowl). This is history\'s first state-sponsored international mission — 250 years before Christianity.',
      },
      hook: {
        cn: '如果你是僧人 — 你传"慈悲"，但村民们听完照样吵架。你是真信你能改变世界还是只为自己心安？',
        en: 'If you were the monk — you preach compassion, but villagers still fight after listening. Do you truly believe you can change the world, or are you just easing your own conscience?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '恒河平原农户', en: 'Ganges Plain Farmer' },
      role: { cn: '稻米农 + 5 口之家', en: 'Rice farmer with family of 5' },
      bio: {
        cn: '你住华氏城（Pataliputra）外 100 公里。你交税 1/6 给孔雀政府 — 比之前部落酋长收 1/3 强多了。阿育王修了横贯帝国的大道，每 8 公里有水井和遮阴树。你儿子能去新建的医院（人医 + 兽医都有）。',
        en: 'You live 100km outside Pataliputra. You pay 1/6 of harvest to the Mauryans — better than the 1/3 tribal chiefs took. Ashoka built imperial roads with wells + shade trees every 8km. Your son can use his new hospitals (for humans AND animals).',
      },
      hook: {
        cn: '如果你是农户 — 阿育王的"非暴力"让边境少些战乱，但他还是按时收税。你觉得他是好王还是只是会演戏的好王？',
        en: 'If you were the farmer — Ashoka\'s "nonviolence" reduces border wars, but he still collects taxes on time. Is he a good king, or just a good actor playing a good king?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Sangamitra（虚构同龄人）', en: 'Sangamitra (fictional peer)' },
      role: { cn: '13 岁，僧人女儿', en: '13-year-old, monk\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是受阿育王派遣的传教僧。你妈妈是 Vaishya 种姓（商人），但因为爸爸现在是僧人，按佛教规矩你"不在种姓里"— 是自由人。你跟着爸爸要去斯里兰卡。',
        en: 'Same age as Willow. Your father is one of Ashoka\'s missionary monks. Your mother is Vaishya caste (merchants), but because your father is now a monk, by Buddhist rules you\'re "outside caste" — a free person. You\'re traveling with him to Sri Lanka.',
      },
      hook: {
        cn: 'Willow 在 2026 年的加州学校里同学有印度教徒、佛教徒。"宗教是不是平等的工具"这个问题 2300 年前你正经历，今天她也在问。',
        en: 'In 2026 California, Willow\'s classmates include Hindus and Buddhists. "Is religion a tool for equality?" — you lived this question 2300 years ago; she\'s asking it today.',
      },
    },
  ],

  examPoints: {
    cn: [
      'Chandragupta Maurya 旃陀罗笈多 BC 322 立国（孔雀帝国）',
      'Ashoka 阿育王 BC 268-232 — 印度首次大统一',
      'Kalinga War BC 261 — 屠杀 → 触发阿育王皈依佛教',
      'Edicts of Ashoka 阿育王诏书（Pillars 石柱 + Rock Edicts）',
      'Buddhism 佛教 — Siddhartha Gautama 释迦牟尼 / 四圣谛 / 八正道',
      'Hinduism 印度教 — 种姓制 Caste / 转世 Reincarnation / Dharma',
      'Kautilya《政事论》Arthashastra — 治国术 / 中央集权',
      'Pataliputra 华氏城（首都）/ 阿育王传教至斯里兰卡 + 东南亚',
    ],
    en: [
      'Chandragupta Maurya founds empire, BC 322',
      'Ashoka BC 268-232 — first major unification of India',
      'Kalinga War BC 261 — bloodshed triggers Ashoka\'s Buddhism',
      'Edicts of Ashoka (Pillars + Rock Edicts)',
      'Buddhism — Siddhartha Gautama / Four Noble Truths / Eightfold Path',
      'Hinduism — caste system / reincarnation / Dharma',
      'Kautilya\'s Arthashastra — statecraft / centralized rule',
      'Pataliputra (capital) / Buddhist missions to Sri Lanka + SE Asia',
    ],
  },
};
