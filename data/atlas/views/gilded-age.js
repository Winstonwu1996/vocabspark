// view: The Gilded Age — Robber Barons & Labor · 1870-1900 · United States
// Grade 8 · CA HSS-8.12 · APUSH Period 6 (CED 6.3 / 6.5 / 6.6 / 6.10)
export const VIEW = {
  id: 'gilded-age',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/gilded-age-1890?from=atlas&atlasId=gilded-age',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.12',     label: { cn: 'CA HSS-8.12 工业化与城市化', en: 'CA HSS-8.12 Industrialization & urbanization' } },
    { code: 'APUSH-CED-6.3',   label: { cn: 'APUSH CED 6.3 工业巨头与 trust 托拉斯', en: 'APUSH CED 6.3 Industrial titans & trusts' } },
    { code: 'APUSH-CED-6.5',   label: { cn: 'APUSH CED 6.5 移民与城市', en: 'APUSH CED 6.5 Immigration & the city' } },
    { code: 'APUSH-CED-6.6',   label: { cn: 'APUSH CED 6.6 劳工运动与罢工', en: 'APUSH CED 6.6 Labor movement & strikes' } },
    { code: 'APUSH-CED-6.10',  label: { cn: 'APUSH CED 6.10 镀金时代的意识形态（Social Darwinism / Gospel of Wealth）', en: 'APUSH CED 6.10 Gilded Age ideologies (Social Darwinism / Gospel of Wealth)' } },
  ],
  title:    { cn: '镀金时代与劳工', en: 'The Gilded Age — Robber Barons & Labor' },
  subtitle: { cn: '1870-1900 · 美国 · Carnegie 钢铁帝国 · 1886 AFL · 1890 Sherman Act · 1892 Homestead 罢工', en: '1870-1900 · USA · Carnegie steel empire · 1886 AFL · 1890 Sherman Act · 1892 Homestead Strike' },
  year: 1892,

  camera: {
    projection: 'mercator',
    // 偏东北聚焦工业带：Pittsburgh / Chicago / Cleveland / 五大湖 / 纽约
    center: [-85, 41],
    scale: 900,
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
    F:  { ids: ['ohio-river', 'mississippi', 'appalachians', 'mason-dixon'] },
    L4: {
      // Pittsburgh 是 Homestead 罢工所在地、卡内基钢铁帝国的中心 — 现有 pin 直接复用
      pins: ['pittsburgh-1880'],
    },
  },

  causalSummary: {
    cn: 'L0 工业带集中在东北部 + 五大湖区：Pittsburgh（钢铁）/ Chicago（肉类加工 + 铁路枢纽）/ Cleveland（石油）/ 纽约（金融与制造）·Monongahela 河、Ohio 河、五大湖把铁矿/煤/成品运进运出 + L1 三大支柱钢/石油/铁路·贝塞麦炼钢法把钢成本压到极低·资本两种集中：横向兼并（垄断行业）+ 纵向兼并（原料→运输→销售自掌全链）→ trust 托拉斯 + L2 极端贫富分化·富豪在第五大道盖宫殿·1880-1900 上千万移民涌入（爱尔兰/意大利/东欧犹太/华工）成最廉价可替换劳动力·城市贫民区一家几口一间屋（Jacob Riis《How the Other Half Lives》1890）+ L3 laissez-faire 自由放任·无最低工资/工时上限/工伤保障/工会保护·工厂可雇 Pinkerton 私兵对付罢工·直到 1890 Sherman Antitrust Act 才开始约束 trust + L4 1886 AFL 成立·Gompers 主席「pure and simple unionism」→ 1889 Carnegie《Gospel of Wealth》→ 1890 Sherman Antitrust Act → 1892.7.6 Homestead 罢工：Frick 锁厂 + 约 300 Pinkerton 沿 Monongahela 河驳船登岸·约 13 小时冲突·工人 7 死 / Pinkerton 3 死·宾州国民警卫队压垮罢工 → 1894 Pullman 罢工再被联邦军镇压·1892 起 Ellis Island 开放·排华续上演',
    en: 'L0 Industrial belt concentrated in the Northeast + Great Lakes: Pittsburgh (steel) / Chicago (meatpacking + rail hub) / Cleveland (oil) / New York (finance & manufacturing) · the Monongahela, the Ohio, and the Great Lakes moved iron ore, coal, and finished goods + L1 Three pillars — steel, oil, rail · the Bessemer process drove steel costs to the floor · capital concentrated two ways: horizontal mergers (industry monopoly) + vertical mergers (raw material → transport → sales fully owned) → trusts + L2 Extreme wealth inequality · tycoons built Fifth Avenue palaces · 1880-1900 millions of immigrants arrived (Irish, Italians, Eastern European Jews, Chinese) as the cheapest, most replaceable labor · urban tenement slums, one family per room (Jacob Riis, "How the Other Half Lives" 1890) + L3 Laissez-faire · no minimum wage, no hour cap, no workplace-injury protection, no labor-union law · factories could hire Pinkerton private guards against strikers · not until 1890 Sherman Antitrust Act did government begin restraining trusts + L4 1886 AFL founded · Gompers as president, "pure and simple unionism" → 1889 Carnegie\'s Gospel of Wealth → 1890 Sherman Antitrust Act → July 6, 1892 Homestead Strike: Frick locks out workers + ~300 Pinkertons land by barge up the Monongahela · ~13-hour fight · 7 workers / 3 Pinkertons dead · Pennsylvania National Guard breaks the strike → 1894 Pullman Strike crushed by federal troops · Ellis Island opens 1892 as Chinese exclusion continues',
  },

  keyFigures: [],

  examPoints: {
    cn: [
      '「Gilded Age」 — 马克·吐温合著的反讽词（表面镀金内里廉价）',
      'Andrew Carnegie 钢铁帝国 + 1889《Gospel of Wealth》',
      'John D. Rockefeller 石油（Standard Oil）/ J.P. Morgan 金融 / Vanderbilt 铁路',
      'trust 托拉斯 + 横向兼并 vs 纵向兼并',
      'Bessemer process 贝塞麦炼钢法',
      'laissez-faire 自由放任 + Social Darwinism「适者生存」（Spencer / Sumner）',
      '1886 AFL（American Federation of Labor）成立 / Samuel Gompers',
      '「pure and simple unionism」务实工会（只为熟练工争工钱工时）',
      '1890 Sherman Antitrust Act 谢尔曼反托拉斯法',
      '1892.7.6 Homestead Strike：Frick / Pinkerton 私兵 / 工人 7 死 / 宾州国民警卫队压垮',
      '1894 Pullman Strike 被联邦军镇压',
      'Jacob Riis《How the Other Half Lives》1890 揭城市贫民区',
      '1892 Ellis Island 开放（同年起排华续）',
      '1886 Haymarket Square（芝加哥）+ Knights of Labor',
    ],
    en: [
      '"Gilded Age" — Mark Twain\'s co-coined irony (gold-plated outside, cheap metal inside)',
      'Andrew Carnegie steel empire + 1889 Gospel of Wealth',
      'John D. Rockefeller oil (Standard Oil) / J.P. Morgan finance / Vanderbilt rail',
      'Trust + horizontal vs vertical integration',
      'Bessemer process',
      'Laissez-faire + Social Darwinism "survival of the fittest" (Spencer / Sumner)',
      '1886 AFL (American Federation of Labor) founded / Samuel Gompers',
      '"Pure and simple unionism" (skilled-trade craft union)',
      '1890 Sherman Antitrust Act',
      'July 6 1892 Homestead Strike: Frick / Pinkertons / 7 workers killed / PA National Guard breaks it',
      '1894 Pullman Strike crushed by federal troops',
      'Jacob Riis, "How the Other Half Lives" 1890 exposes urban slums',
      '1892 Ellis Island opens (alongside continuing Chinese Exclusion)',
      '1886 Haymarket Square (Chicago) + Knights of Labor',
    ],
  },
};
