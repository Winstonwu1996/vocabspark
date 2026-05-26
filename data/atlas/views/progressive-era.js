// view: Progressive Era · 1890-1920 · United States
// Grade 8 · APUSH Period 7.1 / CA HSS 11.2
export const VIEW = {
  id: 'progressive-era',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/progressive-era-1910?from=atlas&atlasId=progressive-era',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-11.2',     label: { cn: 'CA HSS 11.2 工业化转型与进步主义改革', en: 'CA HSS 11.2 Industrial transformation and Progressive reforms' } },
    { code: 'APUSH-KC-7.1.II', label: { cn: 'APUSH KC-7.1.II 进步主义改革', en: 'APUSH KC-7.1.II Progressive reforms' } },
    { code: 'AP-US-Gov',       label: { cn: 'AP US Gov 公民参与 / 进步时代修正案 / 直接民主', en: 'AP US Gov civic participation / Progressive amendments / direct democracy' } },
  ],
  title:    { cn: '进步时代', en: 'The Progressive Era' },
  subtitle: { cn: '1890-1920 · 美国 · 政府首次主动管资本 + 护工人 + 护环境', en: '1890-1920 · USA · government first actively regulates capital + workers + environment' },
  year: 1910,

  camera: {
    projection: 'mercator',
    center: [-92, 36.5],
    scale: 620,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'north-america-modern',
      modernPolities:  'north-america-modern',
      highlightId:     'usa-modern',
    },
    C:  { civs: 'modern-1880' },
    F:  { ids: ['mississippi', 'ohio-river', 'appalachians', 'rocky-mountains'] },
    L4: {
      pins: ['washington-dc', 'pittsburgh-1880', 'philadelphia-1750'],
    },
  },

  causalSummary: {
    cn: 'L0 东北部工业带 (纽约 / 芝加哥 / 匹兹堡) + 阿巴拉契亚煤铁 + 五大湖航运 + L1 镀金时代后工业巨头富可敌国 / 东南欧移民坐船涌入纽约下东区 + L2 工人一天 12 小时 / 出租屋一家七八口挤一间 / 移民女工进制衣厂踩缝纫机养家 + L3 1890 Sherman 反托拉斯法 (前几任总统几乎没用) + 1906 食药法 + 1893 伊利诺伊限童工女工工时法 + 16 / 17 / 18 / 19 修正案 + 州级 I-R-R 直接民主工具 + L4 1901 McKinley 遇刺 TR 接任 → 1904 Northern Securities 案拆托拉斯 → 1906《丛林》催生食药法 → 1909 「两万人起义」罢工 → 1911.3.25 Triangle 火 146 死 → 1920 第 19 修正案 (同期优生学 + 排华续 + Jim Crow 加固 — 进步对谁进步)',
    en: 'L0 Northeast industrial belt (New York / Chicago / Pittsburgh) + Appalachian coal-and-iron + Great Lakes shipping + L1 post-Gilded Age industrial giants rival the state in wealth / Southern and Eastern European immigrants pour into NYC\'s Lower East Side + L2 12-hour workdays / 7-8 person households crammed into one tenement room / immigrant girls on factory sewing machines support their families + L3 1890 Sherman Antitrust Act (barely used by earlier presidents) + 1906 Pure Food and Drug Act + 1893 Illinois child- and women-labor hours law + 16th / 17th / 18th / 19th Amendments + state-level I-R-R direct democracy tools + L4 1901 McKinley assassinated, TR succeeds → 1904 Northern Securities trust broken → 1906 The Jungle drives the Pure Food and Drug Act → 1909 "Uprising of the 20,000" strike → 1911.3.25 Triangle fire kills 146 → 1920 19th Amendment (alongside eugenics + continued Chinese exclusion + hardened Jim Crow — progress for whom?)',
  },

  keyFigures: [],

  examPoints: {
    cn: [
      'Sherman Antitrust Act 1890 反托拉斯法 + 1904 Northern Securities 案',
      '《The Jungle》Upton Sinclair 1906 → 1906 Pure Food and Drug Act 食药法 + 肉类检验法',
      'TR 保护约 2.3 亿英亩公共土地 (含 150+ 国家森林 / 5 国家公园 / 18 国家纪念地)',
      'Hull House 1889 / Jane Addams / settlement house / 1893 伊利诺伊限童工女工工时法',
      'Triangle Shirtwaist 火 1911.3.25 — 146 死 → 纽约 30+ 条工厂安全法',
      'Muller v. Oregon 1908 / Brandeis Brief',
      '第 16 修正案 (1913 联邦所得税) / 17 (直选参议员) / 18 (禁酒, 唯一被废) / 19 (1920 妇女投票权)',
      '直接民主 I-R-R: initiative (公民立法) / referendum (公投) / recall (罢免)',
      '反 Whig 框架: 改革同期还有优生学 (多州强制绝育法) / 1882 排华法案续展 / Jim Crow 加固 — 进步对谁进步',
    ],
    en: [
      'Sherman Antitrust Act 1890 + 1904 Northern Securities case',
      'Upton Sinclair, The Jungle 1906 → 1906 Pure Food and Drug Act + Meat Inspection Act',
      'TR protected ~230 million acres of public land (incl. 150+ national forests / 5 national parks / 18 national monuments)',
      'Hull House 1889 / Jane Addams / settlement house / 1893 Illinois child- and women-labor hours law',
      'Triangle Shirtwaist fire 1911.3.25 — 146 dead → New York passes 30+ factory safety laws',
      'Muller v. Oregon 1908 / Brandeis Brief',
      '16th Amendment (1913 federal income tax) / 17th (direct election of senators) / 18th (Prohibition — the only one ever repealed) / 19th (1920 women\'s suffrage)',
      'Direct democracy I-R-R: initiative / referendum / recall',
      'Anti-Whig framing: same era also had eugenics (state forced-sterilization laws) / continued Chinese Exclusion / hardened Jim Crow — progress for whom?',
    ],
  },
};
