// view: Roman Empire at its Peak · 117 AD · Eurasia
// Grade 6 · HSS-6.7 (Roman civilization)
// 图拉真去世年 = 帝国版图最大值 = "Pax Romana 罗马治下和平"巅峰
export const VIEW = {
  id: 'roman-peak',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-6.7',   label: { cn: 'CA HSS-6.7 罗马帝国 — 政治 / 法律 / 文化', en: 'CA HSS-6.7 Roman Empire — politics / law / culture' } },
    { code: 'CA-HSS-6.6',   label: { cn: 'CA HSS-6.6 古代中国（汉同时代）', en: 'CA HSS-6.6 Ancient China (Han contemporary)' } },
  ],
  title:    { cn: '罗马帝国巅峰', en: 'Roman Empire at Peak' },
  subtitle: { cn: '117 AD · 罗马 vs 汉 · 欧亚两极', en: '117 AD · Rome vs Han · Eurasian Twin Poles' },
  year: 117,

  camera: {
    projection: 'mercator',
    center: [50, 35],     // 地中海到东亚
    scale: 280,
    yOffset: 20,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'eurasia-117ad',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_100',
      highlightId:     'rome-117',
    },
    C:  { civs: 'classical-100' },
    F:  { ids: ['silk-road', 'roman-roads', 'gibraltar', 'bosporus', 'great-wall',
                'mediterranean-features-placeholder'].filter(id => id !== 'mediterranean-features-placeholder') },
    L4: {
      pins: ['rome-117', 'alexandria-117', 'antioch-117', 'londinium', 'luoyang-117', 'persepolis-117'],
    },
  },

  causalSummary: {
    cn: 'L0 地中海 + 帝国通衢 + L1 罗马气候最适期 + L2 6000 万人口 + L3 罗马法 / 公民权 / 军团 + L4 图拉真终极扩张',
    en: 'L0 Mediterranean + imperial roads + L1 Roman Climatic Optimum + L2 60M pop + L3 law/citizenship/legions + L4 Trajan\'s final conquests',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Trajan 图拉真', en: 'Emperor Trajan' },
      role: { cn: '罗马皇帝 98-117 / "最优秀的皇帝"', en: 'Roman emperor 98-117 / "best of emperors"' },
      bio: {
        cn: '你是西班牙出生的"行省皇帝"— 罗马首次让外省人当皇帝。你征服 Dacia（今罗马尼亚）带回 165 吨黄金，刻图拉真柱纪功。117 年你死时帝国版图最大 — 后任 Hadrian 立刻撤军、修长城防御。罗马"扩张到此为止"。',
        en: 'Born in Spain — Rome\'s first provincial emperor. You conquered Dacia (today Romania), bringing home 165 tons of gold; Trajan\'s Column commemorates the campaign. When you died in 117, the empire reached maximum extent — Hadrian immediately withdrew and built walls. Rome\'s expansion ended with you.',
      },
      hook: {
        cn: '如果你是图拉真 — 你赢了帝国最大版图但子嗣无能。你应该停下来巩固还是继续打？再 100 年罗马在衰落，是你扩张过度的锅吗？',
        en: 'If you were Trajan — you won the largest empire but had no capable heir. Stop and consolidate, or push on? A century later Rome is declining — was over-expansion your fault?',
      },
    },
    {
      emoji: '🛡️',
      name: { cn: '禁卫军长官', en: 'Praetorian Prefect' },
      role: { cn: '罗马城内皇帝禁卫军总司令', en: 'Commander of the imperial guard in Rome' },
      bio: {
        cn: '你统帅 9000 个 Praetorian — 罗马城内唯一的合法军队。皇帝在你手里就是个被保护的人质：你能立他也能杀他。Caligula 41 年、Commodus 192 年都死在你前任手下。Trajan 给你三倍工资换你忠心。',
        en: 'You command 9,000 Praetorians — the only legal armed force inside Rome. Emperors are essentially your protected hostages: you make them, you can kill them. Caligula (41) and Commodus (192) both died at your predecessors\' hands. Trajan triples your pay to buy loyalty.',
      },
      hook: {
        cn: '如果你是禁卫军长 — 你是"立王者"。Trajan 远征 Dacia 时你掌管罗马。你要忠于他还是趁机扶植自己人？这是罗马 200 年的死循环。',
        en: 'If you were the Prefect — you\'re a kingmaker. While Trajan campaigns in Dacia, you control Rome. Stay loyal, or back your own candidate? This is the cycle that doomed Rome for 200 years.',
      },
    },
    {
      emoji: '✝️',
      name: { cn: '基督徒', en: 'Christian' },
      role: { cn: '受罗马法迫害的少数信徒', en: 'Persecuted minority believer' },
      bio: {
        cn: '你是基督徒。Trajan 时代基督教 ~50 年，全帝国 ~10 万信徒。Trajan 给小普林尼的信说"基督徒不要主动找出来抓，但若被告发又拒绝献祭罗马诸神，处死"。你在地下教堂礼拜 — 一旦邻居告密就完蛋。',
        en: 'You\'re a Christian. Trajan-era Christianity is ~50 years old, ~100,000 believers empire-wide. Trajan\'s reply to Pliny the Younger said "don\'t hunt them, but if denounced and they refuse to sacrifice to Roman gods — execute." You worship underground — one neighbor\'s tip-off and you\'re finished.',
      },
      hook: {
        cn: '如果你是基督徒 — 你只要在火上撒一撮香给 Caesar 神像就活命。撒还是不撒？300 年后你的信仰会成罗马国教 — 但你看不到那一天。',
        en: 'If you were Christian — sprinkle a pinch of incense on Caesar\'s altar and you live. Yes or no? In 300 years your faith will be Rome\'s state religion — but you won\'t live to see it.',
      },
    },
    {
      emoji: '⚔️',
      name: { cn: '罗马军团士兵', en: 'Roman Legionary' },
      role: { cn: '20 年服役的职业军人', en: 'Career soldier with a 20-year contract' },
      bio: {
        cn: '你是西班牙公民，18 岁参军。每天 10 小时训练 + 修路 + 修营地 + 行军 30 公里。20 年退伍能拿块土地。你跟 5000 个兄弟在 Dacia 跨多瑙河打仗 — 你头盔上有名字"Marcus"。考古挖到你的墓刻"VII Gemina 第七军团"。',
        en: 'You\'re a Spanish citizen who enlisted at 18. Daily 10-hour drills + road-building + camp-construction + 30km marches. After 20 years you get a land grant. With 5,000 brothers you cross the Danube into Dacia. Your helmet is engraved "Marcus"; archaeologists found your grave inscribed "VII Gemina."',
      },
      hook: {
        cn: '如果你是军团兵 — 罗马给你公民权和土地，但你 20 年活在异乡跟 6 倍敌军砍杀。"罗马公民"这个身份对一个西班牙农民值不值这一辈子？',
        en: 'If you were the legionary — Rome gave you citizenship and land, but you spent 20 years far from home, fighting 6-to-1 odds. Was "Roman citizen" worth a Spanish farmer\'s life?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Livia（虚构同龄人）', en: 'Livia (fictional peer)' },
      role: { cn: '13 岁，元老院议员之女', en: '13-year-old, senator\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄，住罗马山顶别墅。家里 30 个奴隶（厨子、家教、管家）。你学希腊语、修辞、几何 — 但你的命运是 16 岁嫁给爸爸选的元老院儿子。你哥哥可以做任何事，你只能管家。',
        en: 'Same age as Willow. You live in a Palatine villa with 30 slaves (cooks, tutors, stewards). You study Greek, rhetoric, geometry — but at 16 you\'ll marry whomever your father chooses from the Senate. Your brother can do anything; you manage household.',
      },
      hook: {
        cn: 'Willow 在 2026 年加州可以选自己的伴侣、自己的工作、自己的人生。你跟她隔了 1900 年。"罗马法保护权利"对女人意味着什么？',
        en: 'In 2026 California, Willow chooses her partner, her career, her life. 1900 years separate you. "Roman law protects rights" — what did that mean for women?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Roman Republic BC 509 → Roman Empire BC 27（Augustus 屋大维）',
      'Julius Caesar 凯撒 BC 44 遇刺 / Crossing the Rubicon 越过卢比孔河',
      'Pax Romana 罗马治下和平 BC 27-AD 180',
      'Twelve Tables 十二铜表法 — 罗马法之始',
      'Roman citizenship 公民权 + Latin 拉丁语 + 罗马军团 Legions',
      'Trajan 图拉真 98-117 — 帝国版图最大值',
      'Christianity 基督教：313 米兰敕令 / 380 国教化',
      '476 西罗马灭亡 / 罗马法 → 后世欧洲法律基础',
    ],
    en: [
      'Roman Republic BC 509 → Roman Empire BC 27 (Augustus)',
      'Julius Caesar assassinated BC 44 / "crossed the Rubicon"',
      'Pax Romana, BC 27 - AD 180',
      'Twelve Tables — beginning of Roman law',
      'Roman citizenship + Latin language + Legions',
      'Trajan 98-117 — empire at its greatest extent',
      'Christianity: 313 Edict of Milan / 380 state religion',
      '476 fall of West / Roman law → foundation of European law',
    ],
  },
};
