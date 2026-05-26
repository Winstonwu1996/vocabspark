// view: Great Depression & New Deal · 1929-1939 · United States
// Grade 8 · APUSH CED 7.10 / 7.11 / CA HSS 11.6 / AP US Gov (federalism + sep. of powers) / AP Macro (fiscal policy)
export const VIEW = {
  id: 'great-depression',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/great-depression-1933?from=atlas&atlasId=great-depression',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-11.6',  label: { cn: 'CA HSS 11.6 大萧条与新政', en: 'CA HSS 11.6 Great Depression and the New Deal' } },
    { code: 'APUSH-CED-7.10', label: { cn: 'APUSH 7.10 大萧条成因', en: 'APUSH 7.10 Causes of the Great Depression' } },
    { code: 'APUSH-CED-7.11', label: { cn: 'APUSH 7.11 新政', en: 'APUSH 7.11 The New Deal' } },
    { code: 'AP-US-Gov',    label: { cn: 'AP US Gov 联邦权扩张 / 1937 court-packing 三权分立', en: 'AP US Gov expansion of federal power / 1937 court-packing and separation of powers' } },
    { code: 'AP-Macro',     label: { cn: 'AP Macroeconomics 财政政策 (凯恩斯 vs 哈耶克)', en: 'AP Macroeconomics fiscal policy (Keynes vs Hayek)' } },
  ],
  title:    { cn: '大萧条与新政', en: 'The Great Depression & New Deal' },
  subtitle: { cn: '1929-1939 · 美国 · 政府主动救人民的高峰 + 系统漏掉最没声音的人', en: '1929-1939 · USA · peak of "government acts to save the people" + systematically left out the most voiceless' },
  year: 1933,

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
    F:  { ids: ['mississippi', 'ohio-river', 'missouri-river', 'appalachians', 'rocky-mountains'] },
    L4: {
      pins: ['washington-dc', 'pittsburgh-1880', 'philadelphia-1750'],
    },
  },

  causalSummary: {
    cn: 'L0 权力中心华盛顿 (白宫 + 国会 + 最高法院) + 危机覆盖全国 — 城市工业带 (底特律 / 芝加哥 / 匹兹堡) 失业潮 + 南方棉花带 (密西西比 / 阿拉巴马 / 佐治亚) 佃农崩溃 + 大平原 (俄克拉荷马 / 得州 / 堪萨斯) Dust Bowl 尘暴 + L1 1929-1933 经济产出腰斩 / 失业率从 ~3% 飙到 ~25% (约 1300 万) / ~9000 家银行倒闭 / 股市跌近 90% + 1930s 中期大平原连年干旱 + 过度耕作 → 黑色风暴 + L2 失业者排 breadlines + 住 Hooverville 棚户区 / 南方数百万黑人佃农在 sharecropping 债务循环底层 / Dust Bowl 把约 30-40 万白人农民 (Okies) 沿 66 号公路西迁加州 vs Great Migration 约 600 万黑人北迁底特律芝加哥 (两条路: 西迁是生态 / 北迁是种族 + AAA 挤压) + L3 1933 前主流 laissez-faire → 新政确立联邦主动责任「三 R」relief 救济 / recovery 复兴 / reform 改革 — CCC + WPA + TVA + AAA + FDIC + SEC + Social Security 1935 (排除农业工 + 家政工, 结果上挡掉多数黑人; 动机种族算计 vs 行政可行性学界有争议) + Wagner Act 1935 + FLSA 1938 + L4 1929.10.29 Black Tuesday 股市崩 → 1932 FDR 当选 → 1933.3 就任 + 百日新政 + 炉边谈话稳挤兑 → 1933 AAA (补贴付地主, 地主拿支票把佃农赶离土地, 约 200 万佃农失业) → 1935 第二轮新政 (Social Security + Wagner Act) → 1937 court-packing 案被本党反对而失败 → 1939 二战在欧洲爆发 (战时军需才真正终结失业) → 1942 EO 9066 拘留约 12 万日裔 (救国之手的另一面)',
    en: 'L0 power center in Washington (White House + Congress + Supreme Court) + the crisis covered the country — urban industrial belt (Detroit / Chicago / Pittsburgh) jobless wave + Southern cotton belt (Mississippi / Alabama / Georgia) sharecropper collapse + Great Plains (Oklahoma / Texas / Kansas) Dust Bowl + L1 1929-1933 economic output halved / unemployment shot from ~3% to ~25% (~13 million) / ~9,000 banks failed / stock market fell ~90% + mid-1930s years of Plains drought + over-plowing → black dust storms + L2 the jobless lined up in breadlines and lived in Hoovervilles / millions of Black sharecroppers in the South trapped in the sharecropping debt cycle / the Dust Bowl pushed 300-400k mostly-white "Okies" west to California along Route 66 vs the Great Migration\'s ~6 million Black migrants north to Detroit and Chicago (two paths: westward = ecological, northward = race + AAA displacement) + L3 laissez-faire dominant before 1933 → the New Deal established active federal responsibility under the "three R\'s" — relief / recovery / reform — CCC + WPA + TVA + AAA + FDIC + SEC + Social Security 1935 (excluded farm and domestic workers, in effect leaving out most Black workers; scholars dispute whether the motive was racial calculation or administrative feasibility) + Wagner Act 1935 + FLSA 1938 + L4 October 29, 1929 Black Tuesday crash → 1932 FDR elected → March 1933 inauguration + Hundred Days + fireside chats steady the bank runs → 1933 AAA (subsidies paid to landlords, who used the checks to push sharecroppers off the land — about 2 million sharecroppers lost work) → 1935 second New Deal (Social Security + Wagner Act) → 1937 court-packing plan defeated by his own party → 1939 war breaks out in Europe (wartime demand finally ended unemployment) → 1942 EO 9066 interned about 120,000 Japanese Americans (the other face of the rescuing hand)',
  },

  keyFigures: [],

  examPoints: {
    cn: [
      '1929.10.29 Black Tuesday 股市崩 — 数字三件套: ~1300 万失业 / ~25% / ~9000 家银行倒',
      '成因 ≠ 那一天: 投机 (buying on margin) + 银行体系脆弱 + 生产过剩 / 消费不足 + 农业先垮',
      'Hoover (laissez-faire / 有限干预) vs FDR (联邦主动责任 / 大规模干预) — 别把 Hoover 写成什么都没干',
      '三 R: relief 救济 (CCC / WPA) + recovery 复兴 (AAA / TVA) + reform 改革 (FDIC / SEC / Social Security 1935)',
      'AAA 1933 反讽: 减产抬价救「大盘」, 但支票寄地主 → 把约 200 万黑人佃农挤离土地',
      'Social Security 1935 两个洞: 农业工 + 家政工 (多数黑人) — 结果清楚 (~65% 黑人被排, 南方部分地区 ~80%); 动机种族 vs 行政学界有争议, essay 不要一口咬定纯种族交易',
      'Dust Bowl / Okies 西迁 (~30-40 万白人 / 66 号公路 / Steinbeck《愤怒的葡萄》1939) ≠ Great Migration (~600 万黑人北迁) — 方向 / 人群 / 起因都不同',
      '1937 Court-packing 案: FDR 想往最高法院加塞最多 6 名法官 → 本党都反对而失败 → "switch in time that saved nine" (AP Gov 三权分立经典案)',
      'Keynes (政府赤字开支拉需求,《通论》1936) vs Hayek (政府干预扭曲市场延长萧条) — AP Macro 财政政策 fiscal policy 入门',
      '1942 EO 9066 拘留约 12 万日裔 (约 2/3 是美国公民) — 救国之手的另一面',
    ],
    en: [
      'October 29, 1929 Black Tuesday — number trio: ~13M jobless / ~25% / ~9,000 banks failed',
      'Causes ≠ the day: speculation (buying on margin) + fragile banking + overproduction / underconsumption + agriculture already collapsing',
      'Hoover (laissez-faire / limited intervention) vs FDR (active federal responsibility / large-scale intervention) — don\'t write Hoover as having done nothing',
      'Three R\'s: relief (CCC / WPA) + recovery (AAA / TVA) + reform (FDIC / SEC / Social Security 1935)',
      'AAA 1933 irony: cutting output lifted prices and saved the "big board" — but checks went to landlords, pushing ~2 million Black sharecroppers off the land',
      'Social Security 1935\'s two holes: farm workers + domestic workers (mostly Black) — the result is clear (~65% of Black workers excluded, up to ~80% in parts of the South); whether motive was race or administrative feasibility is debated, so don\'t flatly call it a pure racial deal',
      'Dust Bowl / Okies westward (~300-400k mostly white / Route 66 / Steinbeck\'s The Grapes of Wrath 1939) ≠ the Great Migration (~6M Black northward) — different direction, people, and cause',
      '1937 Court-packing: FDR proposed adding up to 6 justices → his own party blocked it → "the switch in time that saved nine" (classic AP Gov separation-of-powers case)',
      'Keynes (government deficit spending lifts demand, General Theory 1936) vs Hayek (government meddling distorts the market and prolongs the slump) — AP Macro fiscal policy primer',
      '1942 EO 9066 interned about 120,000 Japanese Americans (about two-thirds US citizens) — the other face of the rescuing hand',
    ],
  },
};
