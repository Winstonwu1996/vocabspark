// view: Native Americans (1491) · pre-Columbian North + Central America
// Grade 5 · HSS-5.1
export const VIEW = {
  id: 'native-americans',
  grade: 5,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-5.1', label: { cn: 'CA HSS-5.1 哥伦布之前的北美原住民', en: 'CA HSS-5.1 American Indians before European contact' } },
    { code: 'AP-USH-1.1', label: { cn: 'AP US Period 1.1 接触前的美洲社会', en: 'AP US Period 1.1 Pre-contact American societies' } },
  ],
  title:    { cn: '北美原住民', en: 'Native Americans' },
  subtitle: { cn: '1491 · 哥伦布登陆前夜', en: '1491 · eve of Columbus' },
  year: 1491,

  camera: {
    projection: 'mercator',
    center: [-95, 30],
    scale: 280,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'native-americans-1491',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1492',
      highlightId:     'haudenosaunee',
    },
    F:  { ids: [] },
    L4: {
      pins: ['cahokia', 'tenochtitlan-1491', 'cuzco-1491', 'mesa-verde', 'iroquois-confederacy'],
    },
  },

  causalSummary: {
    cn: 'L0 大陆腹地多样地形（山地 / 平原 / 雨林）+ L1 中世纪暖期 → 后期小冰期 + L2 接触前估算 5000-6000 万人（高端 1 亿仍有争议）+ L3 玉米三姊妹农业 / 易洛魁联盟 / 阿兹特克贡赋制 + L4 1491 哥伦布抵达前夜，三大区域文明各自独立',
    en: 'L0 vast continent with diverse terrain (mountains/plains/jungle) + L1 Medieval Warm fading to Little Ice Age + L2 estimates 50-60M pre-contact (high end 100M debated) + L3 Three Sisters agriculture / Iroquois Confederacy / Aztec tribute system + L4 1491 eve of Columbus, three civilizational regions independent',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Hiawatha 海华沙', en: 'Hiawatha' },
      role: { cn: '易洛魁联盟创建者之一（传说）', en: 'Co-founder of the Iroquois Confederacy (legendary)' },
      bio: {
        cn: '你跟 Deganawida（"和平缔造者"）一起，在 1450 年代说服 5 个部落（Mohawk, Oneida, Onondaga, Cayuga, Seneca）联合 — 不再互相打仗。你建立 Great Law of Peace — 50 个 sachem 议会代表 + 女性长老有否决权。100 年后这套体制启发美国宪法（部分）。',
        en: 'With Deganawida ("the Peacemaker"), you persuaded 5 nations (Mohawk, Oneida, Onondaga, Cayuga, Seneca) to confederate around 1450 — ending intertribal wars. You established the Great Law of Peace — 50 sachem council seats + clan mothers with veto power. 300 years later, this system partly inspired the US Constitution.',
      },
      hook: {
        cn: '如果你是 Hiawatha — 你建立了民主联盟，用议会代表 + 妇女长老制 — 比欧洲早 300 年。但美国课本里你只占 1 段。"民主"是不是被某个文化垄断叙事？',
        en: 'If you were Hiawatha — you built a democratic confederacy with elected councils and female elders, 300 years before Europe. Yet US textbooks give you a paragraph. Has "democracy" been monopolized as one culture\'s narrative?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: 'Cahokia 大土丘城居民', en: 'Cahokia Mound City Resident' },
      role: { cn: '密西西比河文化都市民', en: 'Mississippian-era urban dweller' },
      bio: {
        cn: '你住 Cahokia — 1100 年这里 ~2 万人，比同时代伦敦还大。你住木屋，每天上"Monks Mound"（30 米高土丘）参加仪式。你的城市靠玉米 + 太阳崇拜 + 跨大陆贸易（你身上的贝壳来自佛罗里达，铜器来自五大湖）。1300 年城市突然衰落 — 干旱 + 内战？至今没解。',
        en: 'You live in Cahokia — around 1100, ~20,000 people, bigger than contemporary London. You live in a wood house and climb Monks Mound (30m) for ceremonies. Your city runs on maize + sun worship + continental trade (your shells came from Florida, copper from the Great Lakes). Around 1300 the city collapsed — drought + civil war? Still unsolved.',
      },
      hook: {
        cn: '如果你是 Cahokia 人 — 你的城市消失 200 年后哥伦布来。欧洲人看到的"野蛮印第安"实际上是文明大崩溃后的幸存者。课本怎么把这件事写清楚？',
        en: 'If you were of Cahokia — your city collapsed 200 years before Columbus. Europeans saw the "savage Indians" who were actually post-collapse survivors. How do textbooks tell this clearly?',
      },
    },
    {
      emoji: '🏹',
      name: { cn: 'Plains 大平原猎人', en: 'Plains Hunter' },
      role: { cn: '肖松尼 / 苏族 / 黑脚族部落男人', en: 'Shoshone / Sioux / Blackfoot man' },
      bio: {
        cn: '1491 你还没有马（马要等 1600 年西班牙带来）。你步行猎野牛 — 用断崖驱赶法（"buffalo jump"）让野牛跳崖摔死。你的部落每年迁徙 4 次跟着野牛群。你跟 Cahokia 那种"农耕文明"完全不同 — 你信"地不是给人占的"。',
        en: 'In 1491 you have no horses (those come with the Spanish around 1600). You hunt bison on foot — using the "buffalo jump" technique to drive herds off cliffs. Your tribe migrates 4 times yearly following bison. You\'re unlike Cahokia\'s "agricultural civilization" — you believe "land is not for owning."',
      },
      hook: {
        cn: '如果你是平原猎人 — "土地私有"对你是奇怪的概念。100 年后欧洲人来卖给你毯子换"你的土地"— 你以为你"卖了用权"，他们以为你"卖了所有权"。这场误会持续到今天。',
        en: 'If you were the hunter — "private land" is alien. A century later Europeans trade blankets for "your land" — you think you sold use-rights, they think you sold ownership. The misunderstanding lasts to today.',
      },
    },
    {
      emoji: '🌽',
      name: { cn: 'Pueblo 普韦布洛农民', en: 'Pueblo Farmer' },
      role: { cn: '美国西南部岩居农户', en: 'Southwestern cliff-dweller farmer' },
      bio: {
        cn: '你住 Mesa Verde — 在悬崖凹处建多层石屋（1200 年代鼎盛）。你种玉米、豆、南瓜（"三姊妹"）。1276-1299 西南大旱让你的祖先抛弃 Mesa Verde — 迁徙到今天的 Hopi、Zuni 地区。你的后代到今天还在亚利桑那、新墨西哥住。',
        en: 'You live at Mesa Verde — multi-story cliff dwellings (peak ~1200s). You farm corn + beans + squash (Three Sisters). The 1276-1299 mega-drought drove your ancestors to abandon Mesa Verde — migrating to today\'s Hopi and Zuni lands. Your descendants still live in Arizona and New Mexico.',
      },
      hook: {
        cn: '如果你是 Pueblo — 你的文明因气候变化大迁徙。500 年后气候变化又来了 — 你的子孙跟今天加州的 Willow 一起面对。你这代如何活下来？她那代能从你这里学到什么？',
        en: 'If you were Pueblo — climate change drove your great migration. 500 years later, climate change returns — your descendants share the crisis with Willow in California. How did you survive? What can she learn from you?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Wenona（虚构同龄人）', en: 'Wenona (fictional peer)' },
      role: { cn: '13 岁，Iroquois 部落女孩', en: '13-year-old, Iroquois girl' },
      bio: {
        cn: '你跟 Willow 同龄。你属 Mohawk 部落，妈妈是 clan mother（氏族母亲 — 选举议会代表的人）。你住长屋，全家族 30 人合住。你 13 岁开始学治理 — 你将来可能做 clan mother。妈妈说"我们的传统比白人 mendelian 早 300 年"— 你不知道 mendelian 是啥但听着自豪。',
        en: 'Same age as Willow. Mohawk tribe; your mother is a clan mother (the women who elect the council). You live in a longhouse with 30 relatives. At 13 you begin learning governance — you might become a clan mother. Your mother says "our tradition predates the white man\'s by 300 years." You don\'t know what "mendelian" means but you feel proud.',
      },
      hook: {
        cn: '500 年后 Willow 在加州学校学美国宪法 — 但课本只用 1 段提你的政治制度。她如果去 Mohawk 保留地见到现代的你的后代 — 她会发现你们 500 年前的智慧今天还活着。',
        en: '500 years later, Willow studies the US Constitution — textbooks give your political system one paragraph. If she visited a Mohawk reservation, she\'d find your wisdom from 500 years ago still alive.',
      },
    },
  ],

  examPoints: {
    cn: [
      'Three Sisters 三姊妹农业：玉米 + 豆 + 南瓜（互生共生）',
      'Iroquois Confederacy 易洛魁联盟 — 5 部落联合（影响美宪法构思）',
      'Cahokia 卡霍基亚 — 密西西比文化大土丘城（~1100 AD 鼎盛）',
      'Pueblo 普韦布洛 / Anasazi 阿那萨齐 — 美国西南部岩居',
      'Aztec 阿兹特克 — Tenochtitlan 特诺奇蒂特兰（湖中浮城）',
      'Inca 印加 — Cuzco 库斯科 / 安第斯山 / Quipu 结绳',
      'Maya 玛雅 — 雨林城邦 / 象形文字 / 0 的概念 / 太阳历',
      'Pre-contact 5000 万-1 亿人 → 接触后 90% 因病死（天花最致命）',
    ],
    en: [
      'Three Sisters agriculture: corn + beans + squash (symbiotic)',
      'Iroquois Confederacy — 5-tribe alliance (influenced US Constitution)',
      'Cahokia — Mississippian mound city (peak ~1100 AD)',
      'Pueblo / Anasazi — cliff dwellings of US Southwest',
      'Aztec — Tenochtitlan (city built on lake)',
      'Inca — Cuzco / Andes / quipu knot-records',
      'Maya — rainforest city-states / glyphs / concept of zero / solar calendar',
      'Pre-contact 50-100M pop → 90% killed by disease (smallpox worst)',
    ],
  },
};
