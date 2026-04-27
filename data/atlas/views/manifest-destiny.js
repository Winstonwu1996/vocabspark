// view: Manifest Destiny + Mexican-American War · 1848 · USA + Mexico
// Grade 8 · HSS-8.5 / 8.8 (Westward expansion)
export const VIEW = {
  id: 'manifest-destiny',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.8',  label: { cn: 'CA HSS-8.8 西扩 / 昭昭天命', en: 'CA HSS-8.8 Westward expansion / Manifest Destiny' } },
    { code: 'AP-USH-5.2',  label: { cn: 'AP US Period 5.2 昭昭天命', en: 'AP US Period 5.2 Manifest Destiny' } },
    { code: 'AP-USH-5.3',  label: { cn: 'AP US Period 5.3 美墨战争', en: 'AP US Period 5.3 Mexican-American War' } },
  ],
  title:    { cn: '昭昭天命与美墨战争', en: 'Manifest Destiny + Mexican-American War' },
  subtitle: { cn: '1848 · 美国近翻倍 · 大陆抵太平洋', en: '1848 · USA near-doubles · continent reaches Pacific' },
  year: 1848,

  camera: {
    projection: 'mercator',
    center: [-100, 38],
    scale: 480,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'manifest-destiny-1848',
      modernPolities:  'north-america-modern',
      // 不指定 yearSnapshot — 全部 customPolygon
      highlightId:     'usa-1848',
    },
    C:  { civs: 'modern-1880' },
    F:  { ids: ['mississippi', 'rocky-mountains', 'appalachians', 'rio-grande'] },
    L4: {
      pins: ['treaty-guadalupe-hidalgo-1848', 'alamo-1836', 'oregon-trail-1843', 'gold-rush-1848-49', 'gadsden-purchase-1853', 'mexican-american-war-1846'],
    },
  },

  causalSummary: {
    cn: 'L0 大陆抵太平洋 + 大平原 + 西北森林 + Rio Grande 自然界河 + L1 加州 / 俄勒冈温和气候宜定居 + L2 1840 美 1700 万 / 墨 700 万 + 棉花南扩 + L3 「昭昭天命」意识形态 + Polk 扩张主义 + 国会民主党控 + L4 1845 德州并入 → 1846 战争 → 1848 瓜达卢佩条约 → 1849 加州金潮',
    en: 'L0 continent to Pacific + plains + Pacific NW timber + Rio Grande natural river border + L1 mild CA/OR climate good for settlement + L2 1840 US 17M / Mex 7M + cotton expansion + L3 Manifest Destiny ideology + Polk expansionism + Democrat-controlled Congress + L4 1845 Texas annex → 1846 war → 1848 Guadalupe Hidalgo → 1849 Gold Rush',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'James K. Polk 波尔克总统', en: 'President James K. Polk' },
      role: { cn: '第十一任总统 1845-1849 / 扩张主义者', en: '11th president 1845-1849 / expansionist' },
      bio: {
        cn: '你是 Tennessee 来的"小总统"— Jackson 的得意门生。你竞选承诺四件事：吞并德州 + 取俄勒冈 + 降关税 + 立国库。4 年内全部完成 — 美国版图扩 50%。但你的扩张都靠战争或威胁 — 你跟英国威胁开战换俄勒冈，跟墨西哥打仗夺加州。你 4 年后退休（按承诺），3 个月后死。',
        en: 'A "small president" from Tennessee — Jackson\'s protégé. You campaigned on 4 promises: annex Texas + take Oregon + cut tariffs + create a Treasury system. All done in 4 years — US territory grew 50%. But each expansion came by war or threat — you threatened Britain for Oregon, fought Mexico for California. You retired after 4 years (as promised); died 3 months later.',
      },
      hook: {
        cn: '如果你是 Polk — 你扩张领土用的是"我有理"逻辑。但墨西哥说"你侵略"。如果加州 1846 没被美国夺走 — 加州今天可能是西班牙语国家。你创造了 Willow 的世界 — 这算"伟大"还是"种族中心主义胜利"？',
        en: 'If you were Polk — you expanded territory with "we\'re right" logic. Mexico says "you invaded." If California hadn\'t been seized in 1846, today\'s California might be Spanish-speaking. You created Willow\'s world — is that "greatness" or "ethnocentric victory"?',
      },
    },
    {
      emoji: '🇲🇽',
      name: { cn: 'Antonio López de Santa Anna 圣安那', en: 'Antonio López de Santa Anna' },
      role: { cn: '墨西哥总统 / 1836 + 1846 战争对手', en: 'Mexican president / opponent in 1836 + 1846 wars' },
      bio: {
        cn: '你 11 次当墨西哥总统 — 永远是政变上台政变下台。1836 你在 Alamo 屠杀 Texan 守军，但在 San Jacinto 被 Sam Houston 打败 — 德州独立。1846 你回来再战美国 — 但你内部分裂、武器落后，1847 失守墨西哥城。1848 Guadalupe Hidalgo 你割走墨西哥一半领土。墨西哥人至今骂你"卖国贼"。',
        en: '11 times you were Mexico\'s president — always rising via coup, falling via coup. In 1836 you slaughtered the Alamo defenders, then lost at San Jacinto to Sam Houston — Texas became independent. In 1846 you returned to fight the US — but internal divisions and outdated weapons cost you Mexico City in 1847. By the 1848 Guadalupe Hidalgo treaty, you ceded half of Mexico. Mexicans still call you "traitor."',
      },
      hook: {
        cn: '如果你是 Santa Anna — 你失去了北墨西哥。你说不是你的错（武器差、内部叛乱），墨西哥人说是你贪权害国。"个人责任 vs 结构问题"— 历史失败者怎么辩护？',
        en: 'If you were Santa Anna — you lost northern Mexico. You blame inferior weapons and rebellion; Mexicans blame your greed for power. "Individual responsibility vs structural problems" — how do historical losers defend themselves?',
      },
    },
    {
      emoji: '⚒️',
      name: { cn: '49 年金潮淘金客', en: 'Forty-Niner Gold Rusher' },
      role: { cn: '1849 加州淘金潮单身男子', en: 'Single man in the 1849 California Gold Rush' },
      bio: {
        cn: '你是宾州小农次子，1849 年听说加州 Sutter\'s Mill 发现金子 — 卖了家产、坐 6 个月船绕南美到旧金山。30 万人涌入，城市人口 1 年涨 20 倍。你大多数时候找不到金 — 真赚钱的是卖铲子的（Levi\'s 牛仔裤就是 1853 年起家）。1 年后你回家两手空空。',
        en: 'A Pennsylvania farmer\'s second son. In 1849, hearing of gold at Sutter\'s Mill, you sold your inheritance, took a 6-month ship around South America to San Francisco. 300,000 came; the city grew 20× in a year. Mostly you found nothing — the real winners sold shovels (Levi Strauss founded Levi\'s in 1853 selling miners\' jeans). After a year you went home empty-handed.',
      },
      hook: {
        cn: '如果你是淘金客 — 你以为你在追"机会"，实际你在被"机会"利用 — 卖铲子的人发了财，你只是消费者。今天的硅谷 / 加密货币 / AI 创业潮是不是同一回事？',
        en: 'If you were the gold rusher — you thought you chased "opportunity," but opportunity used you — shovel-sellers got rich, you were the customer. Are Silicon Valley / crypto / AI booms today the same?',
      },
    },
    {
      emoji: '🌵',
      name: { cn: 'Californio 西班牙裔', en: 'Californio (Spanish-speaking Californian)' },
      role: { cn: '西班牙 / 墨西哥时代加州本地人', en: 'Spanish-Mexican-era Californian native' },
      bio: {
        cn: '你的家族从 1769 年（西班牙圣方济各会传教士来）就在加州。1848 年加州被美国吞并，条约保证你的"财产权和公民权"— 但 30 年内你的牧场被欧美移民和淘金客抢走 90%。你说西班牙语、信天主教 — 你是"加州原住民"，但被新政府边缘化。',
        en: 'Your family has lived in California since 1769 (when Spanish Franciscans arrived). In 1848 California was annexed by the US; the treaty guaranteed your "property + citizenship rights" — but within 30 years 90% of your ranchos were seized by Anglo settlers and gold-rushers. You speak Spanish, are Catholic — a "California native," yet marginalized by the new government.',
      },
      hook: {
        cn: '如果你是 Californio — 条约说"保护你"，但实际操作里你被赶出土地。法律 vs 实际 — 哪个是"真"？今天加州有大量你的后代 — 他们怎么记忆你？',
        en: 'If you were Californio — the treaty "protects" you, yet in practice you\'re expelled. Law vs reality — which is "true"? Many of your descendants live in today\'s California — how do they remember you?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Tomás（虚构同龄人）', en: 'Tomás (fictional peer)' },
      role: { cn: '13 岁，洛杉矶 Californio 男孩', en: '13-year-old, Los Angeles Californio boy' },
      bio: {
        cn: '你跟 Willow 同龄，住 1848 年的洛杉矶 — 当时只有 1500 人。爸爸是西班牙裔牧场主。条约刚签，美国人开始大量涌入。你识字（西班牙语 + 拉丁文），不会英语。你看着新邻居用枪威胁你爸爸"卖地"。10 年后你 23 岁 — 可能成英语、可能流落街头。',
        en: 'Same age as Willow, in 1848 Los Angeles — population 1,500. Your father is a Spanish-speaking ranch owner. The treaty just signed, Americans flood in. You can read (Spanish + Latin), no English. You watch new neighbors threaten your father at gunpoint to "sell the land." In 10 years (age 23) — you might learn English, or end up homeless.',
      },
      hook: {
        cn: '178 年后 Willow 住在你的洛杉矶 — 但说英语，不知道你存在。你的语言、宗教、土地都被覆盖。她跟你之间隔了 178 年但只在 LA 街道名字里能看到你（Sepulveda, Pico, Olvera）。',
        en: '178 years later, Willow lives in your Los Angeles — speaking English, not knowing you existed. Your language, religion, land — overwritten. She finds you only in LA street names (Sepulveda, Pico, Olvera).',
      },
    },
  ],

  examPoints: {
    cn: [
      'Manifest Destiny 1845（O\'Sullivan 创术语）— 扩张是「天命」',
      'Texas Annexation 1845 德州并入（前独立 9 年）',
      'Mexican-American War 1846-48 美墨战争（Polk 主导；学界有争议 — 桑顿事件后正式宣战）',
      'Treaty of Guadalupe Hidalgo 1848 — 墨割 ~135 万 km²',
      'Oregon Treaty 1846 — 与英妥协于 49°N（俄勒冈）',
      'California Gold Rush 1849 / 49ers 30 万人涌入',
      'Gadsden Purchase 1853 加兹登购地（南 AZ/NM）',
      'Wilmot Proviso 1846 — 反对新地引奴隶制（南方否）',
    ],
    en: [
      'Manifest Destiny 1845 (John O\'Sullivan coins term)',
      'Texas Annexation 1845 (after 9 years as Lone Star Rep.)',
      'Mexican-American War 1846-48 (Polk-driven; debated — Mexican attack on Thornton\'s troops triggered formal declaration)',
      'Treaty of Guadalupe Hidalgo 1848 — Mexican Cession ~525k mi²',
      'Oregon Treaty 1846 — split with Britain at 49°N',
      'California Gold Rush 1849 / "49ers" 300k flood in',
      'Gadsden Purchase 1853 — southern AZ/NM (rail route)',
      'Wilmot Proviso 1846 — bar slavery in new territory (S. blocks)',
    ],
  },
};
