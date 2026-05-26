// view: Reconstruction & Its Betrayal · 1865-1877 · United States
// Grade 8 · CA HSS-8.11 · APUSH KC-5.3 (Period 5) / KC-6.x (Jim Crow) · AP US Gov 14th Amendment
export const VIEW = {
  id: 'reconstruction',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/reconstruction-1877?from=atlas&atlasId=reconstruction',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.11',    label: { cn: 'CA HSS-8.11 重建时期·修正案·南方重建', en: 'CA HSS-8.11 Reconstruction · amendments · Southern Reconstruction' } },
    { code: 'APUSH-KC-5.3',   label: { cn: 'APUSH Period 5 · KC-5.3 重建：纸面权利与现实剥夺', en: 'APUSH Period 5 · KC-5.3 Reconstruction: paper rights vs lived denial' } },
    { code: 'APUSH-KC-6.x',   label: { cn: 'APUSH Period 6 起 · Jim Crow 制度化', en: 'APUSH Period 6 onward · Jim Crow institutionalization' } },
    { code: 'AP-US-GOV-14',   label: { cn: 'AP US Gov 第 14 修正案 Equal Protection Clause', en: 'AP US Gov 14th Amendment Equal Protection Clause' } },
  ],
  title:    { cn: '重建与背叛', en: 'Reconstruction & Its Betrayal' },
  subtitle: { cn: '1865-1877 · 美国 · 13/14/15 修正案 · Black Codes · sharecropping · 1877 妥协 · Jim Crow 序幕', en: '1865-1877 · USA · 13/14/15 Amendments · Black Codes · sharecropping · Compromise of 1877 · prelude to Jim Crow' },
  year: 1877,

  camera: {
    projection: 'mercator',
    center: [-88, 35],
    scale: 760,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      // 复用内战年份政体快照：1865-1877 的「战败 11 州 + 联邦 + 边境州」分界正是重建的舞台底图
      polities:        'north-america-1865',
      modernPolities:  'north-america-modern',
      highlightId:     'confederacy',
    },
    C:  { civs: 'modern-1880' },
    F:  { ids: ['mississippi', 'ohio-river', 'appalachians', 'mason-dixon'] },
    L4: {
      pins: [],
    },
  },

  causalSummary: {
    cn: 'L0 战败的南方 11 州·棉花种植园经济骨架·权力博弈中心在华盛顿（白宫 vs 国会）+ L1 内战摧毁南方经济·约 60 万人战死（美国史上最惨）·现金/土地/劳力体系全部崩溃 + L2 约 400 万 freedmen 大多不识字无地无资本·南方白人地主失去劳力·北方对长期军管南方逐渐失去耐心 + L3 13th（1865 废奴）/ 14th（1868 公民身份 + equal protection）/ 15th（1870 投票权不得因肤色剥夺）三修正案 + Freedmen\'s Bureau + 1867 Reconstruction Acts 把南方置于军事重建之下 + L4 1865.4 林肯遇刺·Johnson 接任 → 1865-66 Black Codes·「四十英亩地和一头骡子」被收回 → 1866 Civil Rights Act（国会三分之二票推翻 Johnson 否决） → 1867 黑人男性首次大批投票 → 1868 Johnson 弹劾差一票脱罪·14th 通过 → 1870 15th 通过·Hiram Revels 首位非裔参议员 → KKK 暴力 + Enforcement Acts → 1876-77 Hayes-Tilden Compromise of 1877 撤军·重建结束 → 识字测验/人头税/Jim Crow 接管·真正兑现等到 1954 Brown / 1964-65 民权法（近 90 年）',
    en: 'L0 11 defeated Southern states · cotton-plantation economy as skeleton · power struggle centered in Washington (White House vs Congress) + L1 the Civil War devastated the Southern economy · ~600,000 dead (deadliest war in US history) · cash/land/labor systems collapsed + L2 ~4 million freedmen mostly illiterate, landless, capital-less · Southern white landowners lost their labor force · Northern patience for prolonged military occupation eroded + L3 13th (1865 abolition) / 14th (1868 citizenship + equal protection) / 15th (1870 vote not denied on race) amendments + Freedmen\'s Bureau + 1867 Reconstruction Acts placed the South under military reconstruction + L4 Apr 1865 Lincoln assassinated · Johnson succeeds → 1865-66 Black Codes; "40 acres and a mule" rescinded → 1866 Civil Rights Act (Congress overrides Johnson\'s veto with 2/3) → 1867 Black men vote en masse for the first time → 1868 Johnson impeached, acquitted by one vote; 14th ratified → 1870 15th ratified; Hiram Revels becomes first Black US Senator → KKK violence + Enforcement Acts → 1876-77 Hayes-Tilden Compromise of 1877 withdraws federal troops, ending Reconstruction → literacy tests / poll taxes / Jim Crow take over; real fulfillment waits until 1954 Brown / 1964-65 Civil Rights & Voting Rights Acts (~90 years)',
  },

  keyFigures: [],

  examPoints: {
    cn: [
      '13th Amendment 1865 废奴',
      '14th Amendment 1868 公民身份 + equal protection of the laws',
      '15th Amendment 1870 投票权不得因种族/肤色/曾被奴役剥夺',
      'Black Codes 1865-66（南方各州奴隶制换名复活）',
      'Freedmen\'s Bureau 自由民局 / 「四十英亩地和一头骡子」被收回',
      '1866 Civil Rights Act — 国会首次三分之二票推翻总统否决',
      '1867 Reconstruction Acts·南方军事重建',
      '1868 Andrew Johnson 弹劾·参议院差一票未达三分之二定罪',
      '1870 Hiram Revels 首位非裔联邦参议员（密西西比）',
      'KKK 暴力 + Enforcement Acts',
      '1876-77 Compromise of 1877（Hayes-Tilden）撤军·重建结束',
      'sharecropping 分成租佃 / literacy test / poll tax / Jim Crow',
      'Plessy v. Ferguson 1896 separate but equal → Brown v. Board 1954 推翻',
    ],
    en: [
      '13th Amendment 1865 — abolition',
      '14th Amendment 1868 — citizenship + equal protection of the laws',
      '15th Amendment 1870 — vote not denied on race/color/previous servitude',
      'Black Codes 1865-66 (Southern states re-impose slavery under new names)',
      'Freedmen\'s Bureau / "40 acres and a mule" rescinded',
      '1866 Civil Rights Act — Congress\'s first 2/3 override of a presidential veto',
      '1867 Reconstruction Acts · military reconstruction of the South',
      '1868 Andrew Johnson impeached · acquitted by one vote',
      '1870 Hiram Revels — first Black US Senator (Mississippi)',
      'KKK violence + Enforcement Acts',
      '1876-77 Compromise of 1877 (Hayes-Tilden) withdraws federal troops · Reconstruction ends',
      'sharecropping / literacy test / poll tax / Jim Crow',
      'Plessy v. Ferguson 1896 separate but equal → Brown v. Board 1954 overturned',
    ],
  },
};
