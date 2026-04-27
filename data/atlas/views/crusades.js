// view: Crusades · 1099 · Levant + Eastern Med
// Grade 7 · CA HSS-7.6.4 (Crusades — origins / events / outcomes)
export const VIEW = {
  id: 'crusades',
  grade: 7,
  topicTier: 'core',
  // 整合原 /history 模块的深度学版（13 轮苏格拉底 + 三方视角 + Mastery Gate）
  deepLearnEnabled: true,
  deepLearnUrl: '/history?topicId=crusades-1099&from=atlas&atlasId=crusades',
  standardsAlignment: [
    { code: 'CA-HSS-7.6.4', label: { cn: 'CA HSS-7.6.4 十字军东征 — 起源 / 进程 / 后果', en: 'CA HSS-7.6.4 Crusades — origins / events / outcomes' } },
    { code: 'AP-WHAP-1.6',  label: { cn: 'AP World Unit 1.6 中世纪宗教冲突', en: 'AP World Unit 1.6 Religious Conflict in Medieval Era' } },
  ],
  title:    { cn: '十字军东征', en: 'Crusades' },
  subtitle: { cn: '1099 · 第一次十字军占耶路撒冷 · 三方视角（拉丁/拜占庭/伊斯兰）', en: '1099 · First Crusade takes Jerusalem · 3-civilization view' },
  year: 1099,

  camera: {
    projection: 'mercator',
    center: [28, 38],
    scale: 380,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'crusades-1099',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1000',
      highlightId:     'crusader-states',
    },
    C:  { civs: 'medieval-1215' },
    F:  { ids: ['bosporus', 'jordan-river', 'silk-road'] },
    L4: {
      pins: ['jerusalem-1099', 'clermont-1095', 'constantinople-1095', 'antioch-1098', 'acre-1291', 'manzikert-1071'],
    },
  },

  causalSummary: {
    cn: 'L0 黎凡特狭长海岸 + 圣地集中（耶路撒冷/伯利恒）+ 朝圣商路 + L1 中世纪暖期欧洲人口翻倍 → 二三子无地 + L2 ~1500 万欧洲人口 / 意大利商业城邦兴起 / 东方香料市场 + L3 教会权威巅峰（教皇 vs 皇帝）+ 封建骑士道 + 朝圣赎罪传统 + L4 1071 Manzikert → 1095 Clermont 演说 → 1099 占耶路撒冷 → 1187 萨拉丁夺回 → 1291 Acre 陷落',
    en: 'L0 narrow Levantine coast + concentrated holy sites (Jerusalem/Bethlehem) + pilgrim trade routes + L1 Medieval Warm doubles European population → second/third sons land-hungry + L2 ~15M Europeans / Italian merchant cities rising / Eastern spice markets + L3 papal authority at peak (pope vs emperor) + feudal chivalry + pilgrim-as-penance tradition + L4 1071 Manzikert → 1095 Clermont speech → 1099 Jerusalem captured → 1187 Saladin retakes → 1291 Acre falls',
  },

  keyFigures: [
    {
      emoji: '⛪',
      name: { cn: 'Pope Urban II 教皇乌尔班二世', en: 'Pope Urban II' },
      role: { cn: '罗马教皇 1088-1099', en: 'Pope of Rome 1088-1099' },
      bio: {
        cn: '1095 年 11 月你在 Clermont 演说 — "Deus vult"（上帝旨意）— 号召欧洲贵族骑士东征收复圣地。你许诺"出征即赦罪"。你想：让欧洲贵族打中东而不是互相打 + 让东方教会归顺西方教廷 + 教皇权力盖过皇帝。一石三鸟，但你 1099 占领耶路撒冷前 14 天就死了 — 没看到结果。',
        en: 'In November 1095 at Clermont you preached "Deus vult" — calling on Europe\'s nobility to recover the Holy Land. You promised: "go on crusade = sins forgiven." Your aims: redirect Europe\'s warriors east instead of against each other + reunite Eastern with Western Church + papal power above the emperor. Three birds, one stone. But you died 14 days before Jerusalem fell in 1099 — you never saw the outcome.',
      },
      hook: {
        cn: '如果你是 Urban II — 你以"上帝意旨"动员 10 万人远征，4 年间死了 6 万。"目的高尚"能不能为这 6 万尸体担责？',
        en: 'If you were Urban II — you mobilized 100,000 people in God\'s name; 60,000 died in 4 years. Can "noble purpose" justify 60,000 bodies?',
      },
    },
    {
      emoji: '🗡️',
      name: { cn: 'Saladin 萨拉丁', en: 'Saladin' },
      role: { cn: '阿尤布王朝苏丹 / 1187 收复耶路撒冷', en: 'Ayyubid Sultan / retook Jerusalem 1187' },
      bio: {
        cn: '你是库尔德裔穆斯林，统一了埃及叙利亚。1187 你在 Hattin 大败十字军，重夺耶路撒冷 — 但你没像 1099 十字军那样屠城，而是允许基督徒赎回离开。你的"骑士风度"让欧洲编了关于你的浪漫传说 — 但丁《神曲》把你放在地狱"高贵异教徒"区。',
        en: 'You\'re a Kurdish Muslim who unified Egypt and Syria. In 1187 at Hattin you crushed the crusaders and retook Jerusalem — but unlike the crusaders\' 1099 massacre, you allowed Christians to ransom themselves and leave. Your chivalry inspired European romances. Dante put you in Hell\'s "noble pagans" section — the closest thing to praise.',
      },
      hook: {
        cn: '如果你是 Saladin — 你"宽容"对手，但欧洲史书还是叫你"异教徒"。仁慈能换来历史公正吗？还是只能让敌人觉得你软弱？',
        en: 'If you were Saladin — you showed mercy, yet European chronicles still call you "infidel." Does compassion earn historical justice, or just convince enemies you\'re weak?',
      },
    },
    {
      emoji: '⚔️',
      name: { cn: '十字军骑士', en: 'Crusader Knight' },
      role: { cn: '法国诺曼底次子 / 找土地的封建骑士', en: 'Norman second son seeking land' },
      bio: {
        cn: '你是法国诺曼底贵族家的二儿子 — 哥哥继承土地，你什么都没有。Urban II 说"东征者有罪可赦 + 可在圣地分得土地"。你卖了家产买马甲兵器，跟 5 万人横穿欧洲 + 拜占庭。1098 你在 Antioch 围城饿到吃皮鞋。1099 进耶路撒冷你屠了一座城 — 史载"血及马腹"。',
        en: 'You\'re a Norman noble\'s second son — your brother inherits, you get nothing. Urban II promised "crusaders are forgiven sins + can win land in the Holy Land." You sold your inheritance for armor and horse, marched with 50,000 across Europe and Byzantium. At Antioch (1098) you ate boiled leather to survive the siege. In 1099 Jerusalem you massacred the city — chronicles say "blood reached the horses\' bellies."',
      },
      hook: {
        cn: '如果你是骑士 — 你出征前 Urban II 说"杀异教徒是赎罪"。回家后你晚上做梦。"我真的赎了罪吗？" — 你信吗？',
        en: 'If you were the knight — Urban II told you "killing infidels redeems sin." You cut down an 8-year-old Muslim girl in Jerusalem. Back home, do you still believe "I was forgiven," or do nightmares come?',
      },
    },
    {
      emoji: '⛺',
      name: { cn: '耶路撒冷穆斯林居民', en: 'Jerusalem Muslim Resident' },
      role: { cn: '世代居住的工匠 + 商人', en: 'Multi-generation craftsman / trader' },
      bio: {
        cn: '你家 200 年住耶路撒冷 — 穆斯林、犹太人、基督徒（东正教 + 阿拉伯基督徒）和平共处。1099 年 7 月你看着十字军翻过城墙，3 天屠了 4 万人 — 你妈妈、你妻子、你两个孩子。你藏在地道活下来。萨拉丁 1187 收复你回去 — 但你这一辈再没"安全"两个字。',
        en: 'Your family has lived in Jerusalem for 200 years — Muslims, Jews, Christians coexisting. In July 1099 you watch crusaders scale the walls; over 3 days they slaughter 40,000 — your mother, wife, two children. You hide in a tunnel and survive. When Saladin retakes the city in 1187 you return — but "safety" is gone from your vocabulary forever.',
      },
      hook: {
        cn: '如果你是居民 — 一边是"圣地"一边是"家"。"圣地"对外人是宗教意义，对你是日常生活。哪个定义更"真"？',
        en: 'If you were the resident — for outsiders Jerusalem is "Holy Land"; for you it\'s home. Which definition is more "real"?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Yusuf（虚构同龄人）', en: 'Yusuf (fictional peer)' },
      role: { cn: '13 岁，大马士革穆斯林学生', en: '13-year-old, Damascus Muslim student' },
      bio: {
        cn: '你跟 Willow 同龄。1099 你 13 岁。难民从耶路撒冷逃到大马士革，告诉你十字军屠杀的故事。你在清真寺念古兰经，老师说"忍耐是真主的考验"。但你晚上发誓长大要成战士。30 年后你可能在 Saladin 军中。',
        en: 'Same age as Willow. In 1099 you\'re 13. Refugees from Jerusalem reach Damascus telling of the massacre. You recite Quran at the mosque; your teacher says "patience is God\'s test." But at night you swear to become a warrior. 30 years later you might fight under Saladin.',
      },
      hook: {
        cn: '900 年后 Willow 在加州学校跟基督徒、穆斯林同学一起吃饭。十字军的伤口愈合了吗？还是仍在你 → Saladin → 现代中东的链条里发烫？',
        en: '900 years later, Willow eats lunch with Christian and Muslim classmates. Has the crusade wound healed? Or does it still burn through the chain you → Saladin → today\'s Middle East?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Pope Urban II 1095 Clermont 演说 — "Deus vult" 上帝意旨',
      'First Crusade 1096-99 — 平民十字军 vs 贵族十字军',
      'Jerusalem 1099 攻陷 — 大屠杀穆斯林 + 犹太人',
      'Crusader States 十字军国 — Edessa / Antioch / Tripoli / Jerusalem',
      'Saladin 萨拉丁 1187 重夺耶路撒冷 — Hattin 战役',
      'Third Crusade 1189-92 — 狮心王理查 vs 萨拉丁',
      'Fourth Crusade 1204 — 反攻自家人 · 洗劫君士坦丁堡',
      '文化交流 — 阿拉伯数字 / 代数 / 亚里士多德保存 / 香料路开通',
    ],
    en: [
      'Pope Urban II 1095 Clermont speech — "Deus vult" (God wills it)',
      'First Crusade 1096-99 — People\'s Crusade vs Princes\' Crusade',
      'Jerusalem captured 1099 — massacre of Muslims + Jews',
      'Crusader States — Edessa / Antioch / Tripoli / Jerusalem',
      'Saladin recaptures Jerusalem 1187 — Battle of Hattin',
      'Third Crusade 1189-92 — Richard the Lionheart vs Saladin',
      'Fourth Crusade 1204 — Sack of Constantinople (fellow Christians)',
      'Cultural exchange — Arabic numerals / algebra / Aristotle preserved / spice routes',
    ],
  },
};
