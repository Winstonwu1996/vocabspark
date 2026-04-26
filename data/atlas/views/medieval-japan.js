// view: Medieval Japan (Kamakura) · 1200 · East Asia
// Grade 7 · HSS-7.5 (Medieval Japan)
export const VIEW = {
  id: 'medieval-japan',
  grade: 7,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-7.5', label: { cn: 'CA HSS-7.5 中世纪日本（武士 / 幕府 / 禅宗）', en: 'CA HSS-7.5 Medieval Japan (samurai / shogunate / Zen)' } },
    { code: 'AP-WHAP-1.2', label: { cn: 'AP World Unit 1.2 东亚发展（日本武士时代）', en: 'AP World Unit 1.2 East Asian developments (Japanese samurai era)' } },
  ],
  title:    { cn: '中世纪日本（镰仓）', en: 'Medieval Japan (Kamakura)' },
  subtitle: { cn: '1200 · 武士兴起 · 即将抗蒙古', en: '1200 · Rise of samurai · soon to face Mongols' },
  year: 1200,

  camera: {
    projection: 'mercator',
    center: [135, 36],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'medieval-japan-1200',
      modernPolities:  'east-asia-modern',
      yearSnapshot:    'world_1200',
      highlightId:     'kamakura-japan',
    },
    F:  { ids: ['great-wall', 'silk-road'] },
    L4: {
      pins: ['kyoto-1200', 'kamakura', 'dan-no-ura', 'hakata-bay'],
    },
  },

  causalSummary: {
    cn: 'L0 群岛海洋天然防线 + 山地多 → 区域武士化 + L1 中世纪暖期农业旺 + L2 700 万人 / 庄园经济独立 / 禅宗东传 + L3 律令制衰 + 庄园 + 武士道 + 1185 镰仓幕府 + L4 1185 源平合战 → 1281 神风击退蒙古',
    en: 'L0 archipelago sea moat + mountains → regional samurai-ization + L1 Medieval Warm agriculture + L2 7M pop / shōen autonomy / Zen arrives + L3 Ritsuryō decline + shōen + bushidō + 1185 Shogunate + L4 1185 Genpei → 1281 kamikaze stops Mongols',
  },

  keyFigures: [
    {
      emoji: '⚔️',
      name: { cn: 'Minamoto Yoritomo 源赖朝', en: 'Minamoto Yoritomo' },
      role: { cn: '镰仓幕府开创者 1185-1199', en: 'Founder of Kamakura Shogunate 1185-1199' },
      bio: {
        cn: '你 1180 起兵反抗平氏 — 5 年源平合战，1185 年弟弟源义经在 Dan-no-ura 海战灭平氏。你不去京都跟天皇争 — 而是在镰仓建幕府："天皇是神，我是将军 — 神管祭祀，我管打仗"。这套"虚君实将军"体制延续 700 年到 1868 年明治维新。',
        en: 'In 1180 you rebelled against the Taira — 5 years of Genpei War; in 1185 your brother Yoshitsune crushed them at Dan-no-ura. You didn\'t fight the Emperor in Kyoto — you set up a shogunate at Kamakura: "The Emperor is divine; I am general — he handles ritual, I handle war." This "puppet emperor + real shogun" system lasted 700 years until 1868.',
      },
      hook: {
        cn: '如果你是 Yoritomo — 你创了一个"皇帝在但不掌权"的体制 700 年。你不是篡位者也不是忠臣。你怎么定义自己的角色？',
        en: 'If you were Yoritomo — you built a "emperor exists but rules nothing" system that lasted 700 years. Not a usurper, not a loyalist. How do you define your role?',
      },
    },
    {
      emoji: '👴',
      name: { cn: '京都天皇', en: 'Kyoto Emperor' },
      role: { cn: '名义上的最高统治者 / 神道教主', en: 'Nominal supreme ruler / Shinto pontiff' },
      bio: {
        cn: '你是天皇，但 1185 后实权在镰仓的将军手里。你住在京都御所，专心做诗歌、和歌、佛教仪式。你的合法性不靠刀枪 — 靠"我是太阳神 Amaterasu 的后代"。你不能被推翻，但也不能管事。后醍醐天皇 1333 想夺权 — 失败。',
        en: 'You\'re the Emperor, but after 1185 real power lies with the shogun in Kamakura. You live in Kyoto\'s palace doing poetry, waka, Buddhist rituals. Your legitimacy comes not from swords but "I descend from sun-goddess Amaterasu." You can\'t be deposed, but you can\'t rule either. Emperor Go-Daigo tried to reclaim power in 1333 — failed.',
      },
      hook: {
        cn: '如果你是天皇 — 你被尊为神但什么都管不了。是被囚的尊荣还是真正的自由？欧洲国王战死沙场，你在宫廷写诗 — 哪个活法更好？',
        en: 'If you were Emperor — revered as divine, powerless in fact. Imprisoned glory or true freedom? European kings die in battle; you write poems at court. Which life is better?',
      },
    },
    {
      emoji: '🛐',
      name: { cn: '禅宗武士僧', en: 'Zen Warrior-Monk' },
      role: { cn: '从中国传来禅宗的高僧', en: 'Zen master who brought Chan from Song China' },
      bio: {
        cn: '你 1191 从宋朝学禅宗回来。你教武士打坐 — "心定如止水，剑动如闪电"。武士发现禅宗很合用：不怕死、不分别善恶、瞬间专注。Bushido 武士道 = 禅 + 儒 + 神道。日本花道、茶道、剑道都是从你这里发源。',
        en: 'In 1191 you returned from Song China bringing Chan/Zen. You teach samurai meditation — "mind still as water, sword moving like lightning." Samurai find Zen useful: no fear of death, no good/evil judgment, instant focus. Bushido = Zen + Confucianism + Shinto. Japanese flower arrangement, tea ceremony, kendo all trace to you.',
      },
      hook: {
        cn: '如果你是禅僧 — 你教"无我"的禅给杀人的武士。这是慈悲还是为屠杀提供心理盾牌？',
        en: 'If you were the Zen monk — you teach "no-self" meditation to killers. Is that compassion, or armor for slaughter?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '九州渔民', en: 'Kyushu Fisherman' },
      role: { cn: '博多湾沿海渔户', en: 'Coastal fisherman of Hakata Bay' },
      bio: {
        cn: '你住九州博多湾。1274 + 1281 你两次目睹蒙古舰队在海上 — 4 万 + 14 万士兵。两次都被台风（神风 kamikaze）吹散。你村被烧两次，你有亲戚战死。你既感谢神保佑日本又恨这场战乱。',
        en: 'You live on Hakata Bay, Kyushu. Twice (1274, 1281) you watched Mongol fleets at sea — 40,000 then 140,000 troops. Both times typhoons (kamikaze, "divine wind") scattered them. Your village burned twice; relatives died. You\'re grateful Japan was saved AND angry at the carnage.',
      },
      hook: {
        cn: '如果你是渔民 — "神风"救了日本。但 700 年后日本人在 1944 年又用"神风"自杀飞行员撞美军舰 — 还是同一个神吗？',
        en: 'If you were the fisherman — "divine wind" saved Japan. 700 years later, Japan would use "kamikaze" suicide pilots against US ships in 1944 — same wind, same god?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Tomoe（虚构同龄人）', en: 'Tomoe (fictional peer)' },
      role: { cn: '13 岁，下级武士的女儿', en: '13-year-old, low-ranking samurai\'s daughter' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸是镰仓底层武士，给将军当 御家人 gokenin。你跟妈妈学长刀（女性 onna-bugeisha 也是武士）。1281 蒙古来袭那年你 13 岁，爸爸出征九州。你练剑想：如果他不回来，你能保护妈妈和弟弟吗？',
        en: 'Same age as Willow. Your father is a low-rank samurai, a "gokenin" vassal of the shogun. Your mother teaches you the naginata (women warriors, onna-bugeisha, exist). When Mongols invade in 1281 you\'re 13; father heads to Kyushu. You train, thinking — if he doesn\'t come back, can you protect mother and little brother?',
      },
      hook: {
        cn: '750 年后 Willow 在加州学武术（很多女孩学）。你跟她隔着 750 年和 9000 公里。"女性也能拿剑"这件事，你这一代是日常，她那一代是赋权 — 同一回事吗？',
        en: '750 years later, Willow learns martial arts in California (many girls do). 750 years and 9,000 km separate you. "Women carrying swords" — daily life for you, "empowerment" for her. Same thing?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Shogun 将军 vs Emperor 天皇 — 实权 vs 象征',
      'Kamakura Shogunate 镰仓幕府 1185-1333（Minamoto Yoritomo 源赖朝建）',
      'Samurai 武士 / Bushido 武士道 — 忠 / 勇 / 礼',
      'Daimyo 大名 + Shōen 庄园制 — 封建分权',
      'Zen Buddhism 禅宗 — 武士阶层精神支柱',
      'Mongol invasions 1274 + 1281 — 神风 Kamikaze 击退',
      'Genpei War 源平合战 1180-1185 — 源氏胜 → 武家政治',
      'Heian → Kamakura 转折：宫廷文化 → 武家文化',
    ],
    en: [
      'Shogun vs Emperor — real power vs symbolic',
      'Kamakura Shogunate 1185-1333 (founded by Minamoto Yoritomo)',
      'Samurai / Bushido — loyalty / courage / honor',
      'Daimyo + shōen estate system — feudal decentralization',
      'Zen Buddhism — spiritual base of warrior class',
      'Mongol invasions 1274 + 1281 — kamikaze ("divine wind") repels',
      'Genpei War 1180-1185 — Minamoto wins → warrior rule',
      'Heian → Kamakura shift: court culture → warrior culture',
    ],
  },
};
