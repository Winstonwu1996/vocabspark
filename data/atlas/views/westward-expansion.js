// view: Westward Expansion · 1803 Louisiana Purchase
// Grade 5 supplementary (HSS-5.8 spans into HSS-8.2 — this is the bridge)
export const VIEW = {
  id: 'westward-expansion',
  grade: 5,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-5.8', label: { cn: 'CA HSS-5.8 共和国早期殖民、移民与定居模式', en: 'CA HSS-5.8 Settlement patterns of the early Republic' } },
    { code: 'CA-HSS-8.5', label: { cn: 'CA HSS-8.5 共和国早期外交政策（含路易斯安那购地）', en: 'CA HSS-8.5 US foreign policy in the early Republic (incl. Louisiana Purchase)' } },
    { code: 'AP-USH-4.4', label: { cn: 'AP US Period 4.4 美国登上世界舞台（含路易斯安那购地）', en: 'AP US Period 4.4 America on the World Stage (incl. Louisiana Purchase)' } },
  ],
  title:    { cn: '路易斯安那购地', en: 'Louisiana Purchase' },
  subtitle: { cn: '1803 · 美国国土翻倍', en: '1803 · USA doubles in size' },
  year: 1803,

  camera: {
    projection: 'mercator',
    center: [-100, 38],
    scale: 480,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'westward-1803',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1800',
      highlightId:     'louisiana-purchase',
    },
    F:  { ids: [] },
    L4: {
      pins: ['louisiana-purchase-1803', 'st-louis-1804', 'fort-mandan', 'astoria-pacific', 'trail-of-tears-1830'],
    },
  },

  causalSummary: {
    cn: 'L0 密西西比河 + 落基山天然分界线 + 阿巴拉契亚山以西广袤平原 + L1 温和气候宜农 + L2 1800 年美国 530 万人 / 西部仅 50 万 + L3 杰斐逊弱中央 / 拿破仑欧战急需现金 + L4 1803 年 1500 万美元购 214 万平方公里 → 路易斯-克拉克探险 → 印第安人被驱逐',
    en: 'L0 Mississippi + Rockies natural divides + vast plains west of Appalachians + L1 mild climate good for farming + L2 5.3M Americans 1800 / only 500k west + L3 Jeffersonian weak federal / Napoleon needs cash for European wars + L4 1803 $15M for 2.14M km² → Lewis & Clark → Native displacement',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Thomas Jefferson 杰斐逊（总统）', en: 'President Thomas Jefferson' },
      role: { cn: '第三任美国总统 1801-1809', en: 'Third US president 1801-1809' },
      bio: {
        cn: '你 1803 年只想买新奥尔良（控制密西西比河出海口）— 没想到拿破仑因海地革命财政枯竭，全 214 万平方公里全卖给你 — 1500 万美元。你违反自己的"严格解释宪法"原则（宪法没说总统可以买地）— 但你说"机会不能错过"。美国一夜翻倍。',
        en: 'In 1803 you only wanted New Orleans (controlling the Mississippi mouth) — but Napoleon, broke from the Haitian Revolution, sold you all 2.14M km² for $15M. You violated your own "strict construction" principle (Constitution doesn\'t mention buying land) — but you said "we can\'t miss the chance." America doubled overnight.',
      },
      hook: {
        cn: '如果你是 Jefferson — 你违反自己的宪法原则做了"美国史上最大的房产交易"。原则可以为机会让路吗？这是政治家的现实主义还是虚伪？',
        en: 'If you were Jefferson — you violated your own constitutional principle for "the biggest real-estate deal in US history." Can principles yield to opportunity? Realism, or hypocrisy?',
      },
    },
    {
      emoji: '🗺️',
      name: { cn: 'Lewis & Clark 探险队', en: 'Lewis & Clark Expedition' },
      role: { cn: 'Jefferson 派往太平洋的探险队', en: 'Jefferson\'s Pacific-bound expedition' },
      bio: {
        cn: '你们 33 人 1804 年从圣路易斯出发，1806 回来 — 走 8000 英里到达太平洋海岸（经今日 ND, MT, ID, OR, WA）。你们记录 178 种新植物、122 种新动物。但你们也告诉美国"这里有的是地" — 给后续 100 年驱逐印第安人 + 跨大陆铁路 + Manifest Destiny 提供地图。',
        en: '33 men set out from St. Louis in 1804 and returned in 1806 — 8,000 miles to the Pacific coast (today\'s ND, MT, ID, OR, WA). You logged 178 new plant species, 122 new animals. But you also told America "there\'s endless land" — providing the map for a century of Indian removal, transcontinental railroads, Manifest Destiny.',
      },
      hook: {
        cn: '如果你是 Lewis 或 Clark — 你的"科学考察"成了"殖民地图"。每个发现既是知识进步也是占有工具。"中性"科学存在吗？',
        en: 'If you were Lewis or Clark — your "science expedition" became a "colonization map." Every discovery is both knowledge AND ownership. Is "neutral" science possible?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Sacagawea 萨卡加维亚', en: 'Sacagawea' },
      role: { cn: 'Shoshone 部落女向导（16 岁）', en: 'Shoshone guide (age 16)' },
      bio: {
        cn: '你 16 岁，怀里抱 2 个月大的儿子 Jean Baptiste — 你是 Lewis & Clark 唯一女向导。你 11 岁被另一部落抓去当奴，后被法国皮毛商娶。你帮探险队找路、谈判 + 翻译 + 找食物。看到 Lewis 出现在大平原带个 16 岁怀抱婴儿的女人 — 印第安人就知道这不是侵略战团。你救了他们。',
        en: 'You\'re 16, carrying your 2-month-old son Jean Baptiste — the only woman with Lewis & Clark. Captured by another tribe at 11, you were "married" to a French fur trader. You guided, negotiated, translated, found food. The sight of Lewis on the plains with a 16-year-old mother and infant told native tribes "this isn\'t a war party." You saved their lives.',
      },
      hook: {
        cn: '如果你是 Sacagawea — 你 16 岁救了一个未来要殖民你民族土地的探险队。这是个人选择还是没选择？你后代怎么记忆你？',
        en: 'If you were Sacagawea — at 16 you saved an expedition that would later colonize your people\'s land. Choice, or no choice? How do your descendants remember you?',
      },
    },
    {
      emoji: '😢',
      name: { cn: 'Cherokee 切罗基酋长', en: 'Cherokee Chief' },
      role: { cn: '南方部落领袖 / 文明化派', en: 'Southern tribal leader / "civilizing" faction' },
      bio: {
        cn: '你是切罗基"文明化"派 — 你的族人 1820 年代已经有自己的字母（Sequoyah 创）+ 报纸 + 宪法 + 私有农场。你以为这就能让美国接受你为"邻居"。但 Andrew Jackson 1830《Indian Removal Act》逼你走 Trail of Tears 1838 — 4000 切罗基死在路上。"文明化"没救你。',
        en: 'You\'re a "civilized" Cherokee — by the 1820s your nation had its own alphabet (invented by Sequoyah), newspaper, constitution, private farms. You thought this would earn you "neighbor" status. But Andrew Jackson\'s 1830 Indian Removal Act forced the 1838 Trail of Tears — 4,000 Cherokee died on the march. "Civilizing" didn\'t save you.',
      },
      hook: {
        cn: '如果你是切罗基酋长 — 你做了所有"美国人想要的事"还是被驱逐。"被同化的代价 vs 被同化的回报"— 这道题今天的少数族裔还在做。',
        en: 'If you were Cherokee chief — you did everything "Americans wanted" and were still expelled. "Cost vs reward of assimilation" — minorities today still face this calculation.',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'James（虚构同龄人）', en: 'James (fictional peer)' },
      role: { cn: '13 岁，肯塔基开拓者之子', en: '13-year-old, Kentucky pioneer\'s son' },
      bio: {
        cn: '你跟 Willow 同龄。爸爸 1810 年从弗吉尼亚翻越阿巴拉契亚山到肯塔基 — 路易斯安那购地刚 7 年，西部"机会无穷"。你 13 岁就能用步枪打松鼠，帮爸爸开荒种玉米。你的邻居一年增 2 倍 — 你看着印第安人 Shawnee 部落往西退。你不觉得错 — 这是"美国人的命运"。',
        en: 'Same age as Willow. Your father moved from Virginia over the Appalachians to Kentucky in 1810 — Louisiana Purchase was 7 years old, "endless opportunity." At 13 you can shoot a squirrel and clear corn fields. Your neighbors double yearly — you watch the Shawnee retreat westward. You don\'t feel guilty — it\'s "Americans\' destiny."',
      },
      hook: {
        cn: '220 年后 Willow 在加州 — 西扩的尽头。她爷爷的爷爷可能就是你这种少年。你"开拓边疆"的浪漫，到她那代变成"内卷"和"住房危机"。同一个梦的两端 — 怎么读？',
        en: '220 years later, Willow lives in California — the end of westward expansion. Her great-great-grandfather might have been a boy like you. Your "frontier romance" becomes her generation\'s "burnout and housing crisis." Two ends of the same dream — how to read it?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Louisiana Purchase 1803 — Jefferson 杰斐逊 / 国土翻倍',
      'Lewis & Clark Expedition 1804-1806 路易斯-克拉克探险',
      'Sacagawea 萨卡加维亚 — Shoshone 向导',
      'Manifest Destiny 天定命运论 — 1845 年 John O\'Sullivan 提出',
      'Indian Removal Act 1830 / Trail of Tears 1838 血泪之路（Cherokee 切罗基）',
      'Monroe Doctrine 1823 门罗主义 — 美洲是美国后院',
      'Mexican-American War 1846-1848 → 加州 / 西南纳入',
      'Gold Rush 1849 加州淘金热 → 西部人口暴增',
    ],
    en: [
      'Louisiana Purchase 1803 — Jefferson / doubled US territory',
      'Lewis & Clark Expedition 1804-1806',
      'Sacagawea — Shoshone guide',
      'Manifest Destiny — coined 1845 by John O\'Sullivan',
      'Indian Removal Act 1830 / Trail of Tears 1838 (Cherokee)',
      'Monroe Doctrine 1823 — Americas as US sphere',
      'Mexican-American War 1846-1848 → California / Southwest acquired',
      'California Gold Rush 1849 → Western population boom',
    ],
  },
};
