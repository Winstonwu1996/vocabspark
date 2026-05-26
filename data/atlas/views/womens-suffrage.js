// view: Women's Suffrage · 1848-1920 · United States
// Grade 8 · APUSH KC-4.1.III → 7.1.II / CA HSS 8.8 / AP US Gov (voting rights)
export const VIEW = {
  id: 'womens-suffrage',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/womens-suffrage-1920?from=atlas&atlasId=womens-suffrage',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.8',       label: { cn: 'CA HSS 8.8 内战前后改革运动', en: 'CA HSS 8.8 Reform movements before and after the Civil War' } },
    { code: 'APUSH-KC-4.1.III', label: { cn: 'APUSH KC-4.1.III 改革年代 (Seneca Falls)', en: 'APUSH KC-4.1.III Antebellum reform (Seneca Falls)' } },
    { code: 'APUSH-KC-5.3.II',  label: { cn: 'APUSH KC-5.3.II 重建 + 15 修正案', en: 'APUSH KC-5.3.II Reconstruction + 15th Amendment' } },
    { code: 'APUSH-KC-7.1.II',  label: { cn: 'APUSH KC-7.1.II 进步时代 + 19 修正案', en: 'APUSH KC-7.1.II Progressive Era + 19th Amendment' } },
    { code: 'AP-US-Gov',        label: { cn: 'AP US Gov 选举权扩大 / 15·19·24 修正案 / de jure vs de facto', en: 'AP US Gov expansion of suffrage / 15th·19th·24th amendments / de jure vs de facto' } },
  ],
  title:    { cn: '妇女选举权', en: 'Women\'s Suffrage' },
  subtitle: { cn: '1848-1920 · 美国 · Seneca Falls 到第 19 修正案 · 72 年长弧 · 1920 ≠ 普选', en: '1848-1920 · USA · Seneca Falls to the 19th Amendment · a 72-year arc · 1920 was not universal suffrage' },
  year: 1920,

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
    F:  { ids: ['mississippi', 'ohio-river', 'mason-dixon', 'appalachians'] },
    L4: {
      pins: ['seneca-falls-1848', 'washington-dc', 'voting-rights-1965'],
    },
  },

  causalSummary: {
    cn: 'L0 北方改革重镇 (纽约州 / 新英格兰 / 芝加哥) vs 种族隔离的南方 — 同一国家两套现实 + L1 19 世纪美国已婚妇女在 coverture (夫权庇护) 下几乎无独立法人地位 / 财产工资归夫 / 离婚孩子归夫 / 不能签合同 + L2 黑人妇女叠加种族压迫 — 内战前为奴 / 内战后南方 Jim Crow 隔离 + 私刑恐怖 (Ida B. Wells 反私刑被死亡威胁 + 报馆被烧) + L3 投票资格由各州决定 / 第 15 修正案 (1870) 禁止以「种族」剥夺投票 — 但不含性别 → 1869 运动分裂 (NWSA Stanton-Anthony vs AWSA Lucy Stone / Frances Harper 支持先过 15) → 1890 合并 NAWSA → Alice Paul 1916 另起 NWP + 1917 白宫纠察 + 1913 华盛顿大游行 (要 Wells 走队尾, 她走回前排) + L4 1848 Seneca Falls《情感宣言》→ 1866 Harper「我们都被绑在一起」→ 1870 第 15 修正案 (黑人男性) → 1920.8 第 19 修正案 (妇女) — 但南方黑人妇女仍被人头税 / 识字测验 / 暴力挡在投票站外 → 1965 投票权法才真正能投 (1920 是纸 / 1965 才是票, 中间隔 45 年)',
    en: 'L0 Northern reform strongholds (New York State / New England / Chicago) vs the segregated South — one country, two realities + L1 19th-century married women under coverture had almost no independent legal standing / property and wages belonged to the husband / children went to the husband in divorce / could not sign contracts + L2 Black women bore race and sex compounded — enslaved before the Civil War / Jim Crow segregation + lynching terror after (Ida B. Wells reported on lynching under death threats and had her press burned) + L3 voting eligibility set by states / 15th Amendment (1870) barred denying the vote on "race" — but not on sex → 1869 movement split (NWSA Stanton-Anthony vs AWSA Lucy Stone / Frances Harper backed passing the 15th first) → 1890 merger as NAWSA → Alice Paul founds the NWP in 1916 + 1917 White House pickets + 1913 Washington parade (Black women told to the back; Wells walked to the front) + L4 1848 Seneca Falls Declaration of Sentiments → 1866 Harper "we are all bound up together" → 1870 15th Amendment (Black men) → August 1920 19th Amendment (women) — yet Black women in the South were still kept from the polls by poll taxes / literacy tests / violence → only the 1965 Voting Rights Act let them truly vote (1920 = paper, 1965 = ballot, 45 years apart)',
  },

  keyFigures: [],

  examPoints: {
    cn: [
      'Seneca Falls Convention 1848.7.19-20 / Declaration of Sentiments —「all men and women are created equal」(Frederick Douglass 险险助通过妇女投票权决议)',
      'Stanton-Anthony 联盟 ~50 年 (Stanton 写 / Anthony 跑) + 1872 Anthony 投票被捕受审',
      'Sojourner Truth 1851「Ain\'t I a Woman?」(俄亥俄)',
      '1869 运动分裂: 第 15 修正案 (1870, 黑人男性) → NWSA vs AWSA / Frances Harper 选支持先过 15',
      '1890 NAWSA 合并 / Carrie Chapman Catt 走 state-by-state 路线',
      'Alice Paul + NWP / 1913.3.3 华盛顿大游行 (Wells 拒绝走队尾) / 1917 起白宫纠察 + 狱中绝食被强制喂食',
      '第 19 修正案 1920.8 通过 — 文字几乎照搬 1870 第 15 修正案, 仅「种族」换「性别」',
      '反 Whig 框架: 1920 ≠ 普选 — 南方黑人妇女被人头税 / 识字测验 / 暴力挡到 1965 投票权法 (de jure vs de facto)',
      'Plessy v. Ferguson 1896 / Ida B. Wells 反私刑 / Alpha Suffrage Club 1913 芝加哥第一个黑人妇女选举权俱乐部',
    ],
    en: [
      'Seneca Falls Convention, July 19-20, 1848 / Declaration of Sentiments — "all men and women are created equal" (Frederick Douglass\'s support helped the women\'s-suffrage resolution barely pass)',
      'Stanton-Anthony partnership ~50 years (Stanton wrote, Anthony ran) + 1872 Anthony arrested and tried for voting',
      'Sojourner Truth, 1851 "Ain\'t I a Woman?" (Ohio)',
      '1869 movement split: 15th Amendment (1870, Black men) → NWSA vs AWSA / Frances Harper chose to back passing the 15th first',
      '1890 NAWSA merger / Carrie Chapman Catt\'s state-by-state strategy',
      'Alice Paul + NWP / March 3, 1913 Washington parade (Wells refused to march at the back) / 1917 White House pickets + hunger strikes and force-feeding in jail',
      '19th Amendment ratified August 1920 — wording almost copies the 1870 15th, swapping "race" for "sex"',
      'Anti-Whig framing: 1920 was not universal — Black women in the South were kept out by poll taxes / literacy tests / violence until the 1965 Voting Rights Act (de jure vs de facto)',
      'Plessy v. Ferguson 1896 / Ida B. Wells\'s anti-lynching reporting / Alpha Suffrage Club 1913 — Chicago\'s first Black women\'s suffrage club',
    ],
  },
};
