// view: Transcontinental Railroad & Chinese Exclusion · 1869-1882 · United States
// Grade 8 · CA HSS-8.12 · APUSH Period 6 (CED 6.5 西部 / 6.7 移民与 nativism)
export const VIEW = {
  id: 'chinese-exclusion',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/chinese-exclusion-1882?from=atlas&atlasId=chinese-exclusion',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.12',         label: { cn: 'CA HSS-8.12 工业化与西部开发（含华工史）', en: 'CA HSS-8.12 Industrialization & Western development (incl. Chinese labor)' } },
    { code: 'APUSH-CED-6.5',       label: { cn: 'APUSH CED 6.5 西部 / 横贯大陆铁路', en: 'APUSH CED 6.5 The West / Transcontinental Railroad' } },
    { code: 'APUSH-CED-6.7',       label: { cn: 'APUSH CED 6.7 移民浪潮 + nativism 排外', en: 'APUSH CED 6.7 Immigration + nativism' } },
  ],
  title:    { cn: '铁路华工与排华法案', en: 'Transcontinental Railroad & Chinese Exclusion' },
  subtitle: { cn: '1869-1882 · 美国 · Central Pacific · Sierra Nevada · 1869 金道钉 · 1882 排华法案', en: '1869-1882 · USA · Central Pacific · Sierra Nevada · 1869 Golden Spike · 1882 Exclusion Act' },
  year: 1882,

  camera: {
    projection: 'mercator',
    // 中心稍偏西到内华达山 + 加州 + 中央太平洋铁路一线
    center: [-100, 38],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'industrial-1880',
      modernPolities:  'north-america-modern',
      yearSnapshot:    'world_1880',
      highlightId:     'usa-1880',
    },
    C:  { civs: 'modern-1880' },
    // features：现有 set 没有 sierra-nevada；用 mississippi + rocky-mountains 标记铁路东西两端的地理屏障，appalachians 给出东岸参照
    F:  { ids: ['rocky-mountains', 'mississippi', 'appalachians'] },
    L4: {
      pins: [],
    },
  },

  causalSummary: {
    cn: 'L0 两端 — 一端是中国广东台山（山多田少·世代出海谋生的侨乡），另一端是加州（华工称「金山」）到犹他州之间的 Sierra Nevada 花岗岩石墙·横贯大陆铁路西半段必须穿过它 + L1 内华达山冬天雪堆 10-12 米·华工在雪下挖通道、雪崩可卷走整营·吊柳条篮在悬崖凿洞放硝化甘油（极不稳定）·死亡数百到上千（账本上无单独栏）·华工工钱低白人三分之一 + L2 1860s-70s 加州：资本要便宜耐劳的华工 / 白人工人恨华工抢饭碗（1870s 萧条加剧）/ 报纸 Yellow Peril 漫画 / 1871 洛杉矶屠杀 17 名华人 + L3 1862《太平洋铁路法案》Union Pacific 西修·Central Pacific（Stanford 等四巨头）东修·按里程给土地补贴·归化法律把华人挡在公民权外 + L4 1865 中央太平洋大量招华工 → 1866-67 凿穿 Sierra Nevada Summit Tunnel → 1869.5.10 Promontory Summit 金道钉（合影无华工）→ 1877 Denis Kearney「The Chinese must go!」→ 1882 Chinese Exclusion Act（首部按族裔禁令·并永久禁止已在美华人归化）→ 1888 Scott Act（约两万持合法返美证件者被禁返）→ 1892 Geary Act 延长 + 强制随身证件 → 1883 Wong Chin Foo 创《华洋新报》造「Chinese American」一词 → 1943 Magnuson Act 废除（整整 61 年）',
    en: 'L0 Two ends — Guangdong Taishan in China (mountainous, land-poor, generations-old émigré tradition) and the Sierra Nevada granite wall between California (called "Gold Mountain" by Chinese workers) and Utah that the western half of the Transcontinental Railroad had to cut through + L1 Sierra Nevada winters with 10-12 m snowpack · Chinese workers tunneled under snow · avalanches could sweep entire camps away · suspended in willow baskets on cliffs to place unstable nitroglycerin · several hundred to over a thousand dead (no separate column in the company ledger) · Chinese wages roughly 2/3 of white wages + L2 1860s-70s California: capital wanted cheap durable Chinese labor / white workers blamed Chinese for stolen jobs (sharpened by the 1870s depression) / newspaper Yellow Peril cartoons / 1871 Los Angeles massacre of 17 Chinese + L3 1862 Pacific Railway Act · Union Pacific built west, Central Pacific (Stanford et al. "Big Four") built east · land grants by mileage · naturalization laws barred Chinese from citizenship + L4 1865 Central Pacific begins mass hiring of Chinese workers → 1866-67 cuts Summit Tunnel through Sierra Nevada → May 10, 1869 Promontory Summit Golden Spike (no Chinese in the famous photo) → 1877 Denis Kearney "The Chinese must go!" → 1882 Chinese Exclusion Act (first race-based immigration ban; permanently bars already-resident Chinese from naturalization) → 1888 Scott Act (~20,000 holding valid re-entry papers locked out abroad) → 1892 Geary Act extends + mandates ID papers → 1883 Wong Chin Foo founds The Chinese American, coins the term "Chinese American" → 1943 Magnuson Act repeals (61 years total)',
  },

  keyFigures: [],

  examPoints: {
    cn: [
      '1862 Pacific Railway Act 太平洋铁路法案（林肯签）',
      'Central Pacific（Stanford 等四巨头）vs Union Pacific 东西对修',
      '1865 中央太平洋大量招华工·最忙时约 90% 是华工',
      '1866-67 Sierra Nevada Summit Tunnel 凿通·雪崩 + 硝化甘油',
      '1869.5.10 Promontory Summit Golden Spike 金道钉（合影无华工）',
      '1871 洛杉矶华人种族屠杀（至少 17 人遇害）',
      'Denis Kearney「The Chinese must go!」+ Yellow Peril 漫画',
      '1882 Chinese Exclusion Act — 首部按族裔的移民禁令 + 永禁归化',
      '1888 Scott Act / 1892 Geary Act 加码',
      '1883 Wong Chin Foo 创《华洋新报》造「Chinese American」一词',
      'naturalization 归化制度把华人挡在公民权外（无投票权）',
      '1943 Magnuson Act 废除排华法案（共 61 年）',
    ],
    en: [
      '1862 Pacific Railway Act (signed by Lincoln)',
      'Central Pacific (Stanford and the "Big Four") vs Union Pacific built east-west',
      '1865 Central Pacific mass-hires Chinese workers; at peak roughly 90% Chinese',
      '1866-67 Sierra Nevada Summit Tunnel cut through · avalanches + nitroglycerin',
      'May 10 1869 Promontory Summit Golden Spike (no Chinese in the photo)',
      '1871 Los Angeles anti-Chinese massacre (at least 17 killed)',
      'Denis Kearney "The Chinese must go!" + Yellow Peril cartoons',
      '1882 Chinese Exclusion Act — first race-based immigration ban + permanent naturalization bar',
      '1888 Scott Act / 1892 Geary Act extend and tighten exclusion',
      '1883 Wong Chin Foo founds The Chinese American, coins "Chinese American"',
      'Naturalization law barred Chinese from citizenship (no vote)',
      '1943 Magnuson Act repeals Chinese Exclusion (61 years total)',
    ],
  },
};
