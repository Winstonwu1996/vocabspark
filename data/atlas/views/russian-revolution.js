// view: Russian Revolution · 1917 · Petrograd / Russia
// HS World History / AP World Unit 7 · APUSH Period 7
// keyFigures 留空 — 自动从 lib/history-storyboards/russian-revolution-1917.js 的 3 个 lens 派生 (第9条)
export const VIEW = {
  id: 'russian-revolution',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/russian-revolution-1917?from=atlas&atlasId=russian-revolution',
  grade: 10,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-10.6',  label: { cn: 'CA HSS-10.6 一战后果与俄国革命', en: 'CA HSS-10.6 Aftermath of WWI and the Russian Revolution' } },
    { code: 'AP-WHAP-7.3',  label: { cn: 'AP World Unit 7.3 全球冲突中的革命', en: 'AP World Unit 7.3 Revolutions amid global conflict' } },
    { code: 'AP-USH-7.3',   label: { cn: 'APUSH Period 7 一战与全球革命语境', en: 'APUSH Period 7 WWI and the global revolutionary context' } },
  ],
  title:    { cn: '俄国革命', en: 'Russian Revolution' },
  subtitle: { cn: '1917 · 面包队列点燃的革命 / 二月与十月', en: '1917 · A revolution sparked in the bread line / February and October' },
  year: 1917,

  camera: {
    projection: 'mercator',
    center: [44, 58],
    scale: 520,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      yearSnapshot: 'world_1914',
    },
    C:  { civs: 'modern-1880' },
  },

  causalSummary: {
    cn: 'L0 俄罗斯帝国横跨欧亚最大版图 + 首都彼得格勒 Petrograd + L1 1916-17 严冬 + 铁路瘫痪粮食运不进城 + L2 一战打了快三年 (前线吞掉几百万人) + 工人一天十几小时 + 妇女在零下排几小时面包队 + L3 沙皇专制 + 1905 革命的旧账 + 布尔什维克的小册子在工厂底层传 + L4 1917.3.8 (OS 2.23) 国际妇女节女工为面包罢工 → 几天点着全城、士兵倒戈 → 3.15 (OS 3.2) 尼古拉二世退位 (罗曼诺夫 300 年终结) → 临时政府 vs 苏维埃「两个政权并存」→ 列宁《四月提纲》「和平·土地·面包」→ 七月事件 + 科尔尼洛夫兵变 → 1917.11.7 (OS 10.25) 十月革命布尔什维克夺权 → 制宪会议被解散 → 布列斯特和约退出一战 → 红白内战',
    en: 'L0 the Russian Empire, the largest land span across Europe and Asia, capital Petrograd + L1 the harsh winter of 1916-17 + railways breaking down so grain cannot reach the city + L2 nearly three years of WWI (millions swallowed at the front) + workers on 12-hour shifts + women queuing hours below freezing for bread + L3 Tsarist autocracy + the unsettled debts of the 1905 revolution + Bolshevik pamphlets spreading on the factory floor + L4 March 8 1917 (OS Feb 23) women textile workers strike for bread on International Women\'s Day → within days the whole city is alight and soldiers defect → March 15 (OS March 2) Nicholas II abdicates (ending 300 years of Romanov rule) → Provisional Government vs the Soviet, "dual power" → Lenin\'s April Theses, "Peace, Land, Bread" → the July Days and the Kornilov affair → Nov 7 1917 (OS Oct 25) the October Revolution, the Bolsheviks seize power → the Constituent Assembly is dissolved → the Treaty of Brest-Litovsk exits WWI → the Red-White civil war',
  },

  keyFigures: [],
};
