// view: Late Antiquity · 500 AD · Roman fall + Byzantine rise
// Grade 7 · HSS-7.1 (Roman Empire fall + Byzantine emergence)
export const VIEW = {
  id: 'byzantine-rise',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.1',  label: { cn: 'CA HSS-7.1 罗马帝国衰亡 + 拜占庭兴起', en: 'CA HSS-7.1 Fall of Rome + Rise of Byzantine' } },
  ],
  title:    { cn: '罗马衰亡 + 拜占庭兴起', en: 'Rome Falls + Byzantium Rises' },
  subtitle: { cn: '500 AD · 西灭东存 · 中世纪开始', en: '500 AD · West falls / East endures · Middle Ages begin' },
  year: 500,

  camera: {
    projection: 'mercator',
    center: [25, 42],
    scale: 380,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'late-antiquity-500',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_500',
      highlightId:     'eastern-rome',
    },
    C:  { civs: 'classical-100' },
    F:  { ids: ['bosporus', 'gibraltar', 'rhine', 'danube', 'alps', 'roman-roads'] },
    L4: {
      pins: ['constantinople-500', 'rome-500', 'ravenna', 'ctesiphon-500'],
    },
  },

  causalSummary: {
    cn: 'L0 君士坦丁堡踞博斯普鲁斯咽喉 + 三面海 + L1 罗马气候期结束 / 西部农业崩 + L2 3000 万人 / solidus 金币 / 50 万都市 + L3 罗马法 + 希腊化 + 东正教 + thema 制 + L4 410 西罗马劫 → 476 西罗马灭 → 527 查士丁尼立',
    en: 'L0 Constantinople on Bosporus + sea on 3 sides + L1 end of Roman Climatic Optimum / W. agriculture collapse + L2 30M pop/solidus/500k city + L3 Roman Law + Hellenistic Greek + Orthodox + thema bureaucracy + L4 410 Sack → 476 W. fall → 527 Justinian',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: '查士丁尼', en: 'Justinian' },
      role: { cn: '东罗马皇帝 527-565', en: 'Eastern Roman emperor 527-565' },
      bio: {
        cn: '你是马其顿农民出身的皇帝。你下令编纂《查士丁尼法典》— 把 1000 年罗马法整理成体系，影响后世所有欧洲法律。你修了圣索菲亚大教堂 — 1000 年里世界最大教堂。你想"光复"地中海西部 — 短暂收复但耗尽国库。',
        en: 'You\'re an emperor of Macedonian peasant origin. You commissioned the Justinian Code — codifying 1,000 years of Roman law, influencing every later European legal system. You built Hagia Sophia — for 1,000 years the world\'s largest church. You attempted to reconquer the Mediterranean West — briefly succeeded but bankrupted the empire.',
      },
      hook: {
        cn: '如果你是查士丁尼 — 你想做"罗马的复兴者"，可你的扩张反而加速了帝国衰落。复古派 vs 务实派 — 你应该听老婆 Theodora 的"留下来打仗"还是听 Belisarius 的"撤吧"？',
        en: 'If you were Justinian — you wanted to be Rome\'s restorer, but expansion sped your empire\'s decline. Should you have listened to your wife Theodora ("stay and fight") or general Belisarius ("retreat")?',
      },
    },
    {
      emoji: '⛪',
      name: { cn: '君士坦丁堡牧首', en: 'Patriarch of Constantinople' },
      role: { cn: '东方教会领袖', en: 'Head of the Eastern Church' },
      bio: {
        cn: '你是东方基督教最高领袖。你跟罗马教皇互相不服气 — 礼拜用希腊语 vs 拉丁语、教士能不能结婚、要不要圣像。500 多年后这些分歧让 1054 年东西教会大分裂。你给皇帝加冕 — 但皇帝管你管得很死。',
        en: 'You\'re the head of Eastern Christianity. You and the Roman Pope are at odds — Greek vs Latin liturgy, married clergy, icons. These disputes will fracture into the Great Schism of 1054, 500+ years later. You crown the emperor — but he controls you tightly (caesaropapism).',
      },
      hook: {
        cn: '如果你是牧首 — 罗马教皇说"我才是彼得继承人"，皇帝说"教会归我管"。你被两面夹击 — 你的"上帝代表"身份能撑住几年？',
        en: 'If you were Patriarch — the Pope claims "I succeed Peter"; the emperor says "the church reports to me." Squeezed from both sides — how many years can your "God\'s representative" claim last?',
      },
    },
    {
      emoji: '⚔️',
      name: { cn: '哥特部落首领', en: 'Gothic Tribal Chief' },
      role: { cn: '日耳曼"蛮族"领主', en: 'Germanic "barbarian" warlord' },
      bio: {
        cn: '你是西哥特或东哥特首领。500 AD 时你们已经在罗马帝国境内住了 100 多年 — 不是"野蛮人入侵"，是慢慢渗透 + 罗马军队招你们当兵 + 你最后接管了。你的部落人均说拉丁语、信基督教 — 比"罗马人"更"罗马"。',
        en: 'You\'re a Visigoth or Ostrogoth chief. By 500 AD your people have lived in the Empire for 100+ years — not "barbarian invasion" but gradual infiltration + Roman army recruitment + eventual takeover. Your tribesmen speak Latin, are Christian — more "Roman" than the Romans.',
      },
      hook: {
        cn: '如果你是哥特首领 — 历史书把你叫"蛮族"，可你说拉丁语、读西塞罗、自认罗马人。"罗马灭亡"对你来说是真的灭亡还是一次接班？',
        en: 'If you were Gothic chief — textbooks call you "barbarian," but you speak Latin, read Cicero, consider yourself Roman. Did "Rome fall," or did the management just change hands?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '安纳托利亚农户', en: 'Anatolian Farmer' },
      role: { cn: '小亚细亚 thema 制农兵', en: 'Soldier-farmer in the thema system' },
      bio: {
        cn: '你住在拜占庭核心地带（今土耳其）。Justinian 之后 thema 制让你既种田又打仗 — 给你一块地，你的回报是儿子要从军。瘟疫（541 鼠疫）让你村 1/3 人口死了。你不再交粮食给罗马城 — 你只给君士坦丁堡。',
        en: 'You live in Byzantium\'s heartland (today\'s Turkey). After Justinian, the thema system makes you a soldier-farmer — given land in exchange for your son\'s military service. The plague (541) killed 1/3 of your village. You no longer ship grain to Rome — only to Constantinople.',
      },
      hook: {
        cn: '如果你是农户 — "罗马"在你眼里早就不是西边那个城市，而是君士坦丁堡。"罗马灭亡"是历史课本说的事，对你来说没什么变化。课本视角 vs 农户视角谁是真的？',
        en: 'If you were the farmer — "Rome" for you is no longer the western city; it\'s Constantinople. "Rome fell" is what textbooks say; for you nothing changed. Whose perspective is true — the textbook\'s, or yours?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Sophia（虚构同龄人）', en: 'Sophia (fictional peer)' },
      role: { cn: '13 岁，圣索菲亚教堂工匠的女儿', en: '13-year-old, Hagia Sophia mason\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是希腊工匠，参与建圣索菲亚 — 537 落成时你 13 岁。Justinian 走进教堂说"所罗门，我超越了你"。你站在工匠席上看天顶，56 米高，像天空塌下来 — 你这辈子最震撼的一幕。',
        en: 'Same age as Willow. Your father is a Greek mason on the Hagia Sophia project — 13 when it\'s completed in 537. Justinian walks in and says "Solomon, I have surpassed you." You watch from the workers\' gallery — the 56m dome looks like the sky has descended. The most moving moment of your life.',
      },
      hook: {
        cn: '1500 年后 Willow 看着希腊神庙 / 君士坦丁堡的圣索菲亚 / 哥特大教堂的图片 — 都是"用石头表达灵魂"。你站在那一刻，能想到 1500 年后还会有人为这个建筑流泪吗？',
        en: '1500 years later Willow sees photos of Greek temples / Hagia Sophia / Gothic cathedrals — all "stone expressing soul." Standing there, did you imagine someone would still weep at this building 1500 years later?',
      },
    },
  ],

  examPoints: {
    cn: [
      '410 Sack of Rome 西哥特人劫罗马 / 476 西罗马帝国灭亡',
      'Constantinople 君士坦丁堡（330 年迁都，原 Byzantium）',
      'Justinian 查士丁尼 527-565 — 短暂收复地中海',
      'Justinian Code《查士丁尼法典》— 罗马法体系化',
      'Hagia Sophia 圣索菲亚大教堂 537',
      'Eastern Orthodoxy 东正教 / Great Schism 1054 东西教会分裂',
      'Greek fire 希腊火 — 拜占庭海军武器',
      'Theme system thema 军区制 — 兵农合一',
    ],
    en: [
      '410 Sack of Rome (Visigoths) / 476 fall of Western Empire',
      'Constantinople (founded 330, formerly Byzantium)',
      'Justinian 527-565 — brief Mediterranean reconquest',
      'Justinian\'s Code — codification of Roman law',
      'Hagia Sophia, 537',
      'Eastern Orthodoxy / Great Schism 1054',
      'Greek fire — Byzantine naval weapon',
      'Theme system (thema) — military-agrarian provinces',
    ],
  },
};
