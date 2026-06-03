// view: Contemporary United States · 1980-present · USA
// APUSH Period 9 · 当代美国 (Reagan / 冷战终结 / 全球化 / 9-11 / 2008 / 极化)
// keyFigures 留空 — 自动从 lib/history-storyboards/contemporary-us-1980.js 的 3 个 lens 派生 (第9条)
export const VIEW = {
  id: 'contemporary-us',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/contemporary-us-1980?from=atlas&atlasId=contemporary-us',
  grade: 11,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'AP-USH-9',    label: { cn: 'APUSH Period 9 (1980-至今)', en: 'APUSH Period 9 (1980-present)' } },
    { code: 'CA-HSS-11.8', label: { cn: 'CA HSS-11.8/11.9 战后到当代美国', en: 'CA HSS-11.8/11.9 Postwar to contemporary America' } },
  ],
  title:    { cn: '当代美国', en: 'Contemporary US' },
  subtitle: { cn: '1980-至今 · 一场 40 年的重构 / 跟改革开放是同一场全球化', en: '1980-present · A 40-year restructuring / the same globalization as China\'s reform-opening' },
  year: 1980,

  camera: {
    projection: 'mercator',
    center: [-96, 39],
    scale: 600,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      yearSnapshot: 'world_1945',
    },
    C:  { civs: 'modern-1880' },
  },

  causalSummary: {
    cn: 'L0 锈带 (Rust Belt) 制造业带 vs 阳光带/沿海科技金融走廊 + L1 制造业小城以一座工厂为心脏 + L2 一份工厂工作曾能一人养一家 (工会争来的工资/保险/退休金) + L3 1980 保守转向 (减税/放松管制/市场主导 — 支持者批评者各执一词) + 全球化 (NAFTA 1994 / 中国入世 2001) + 科技互联网革命 (PC/互联网/2007 智能手机) + L4 1989 柏林墙倒 → 1991 苏联解体 (冷战终结) → 制造业岗位一个个外迁/工厂关停 → 2001.9.11 → 阿富汗 2001 / 伊拉克 2003 (出兵理由至今争议) → 2008 金融危机 (雷曼倒/大衰退) → 不平等与政治极化上升 + 阿片危机 → 与中国改革开放同为一场全球化的两半',
    en: 'L0 the Rust Belt manufacturing band vs the Sun Belt / coastal tech-and-finance corridors + L1 a manufacturing town with a single factory as its heart + L2 one factory job once supported a whole family (union-won wages, insurance, pensions) + L3 the 1980 conservative turn (tax cuts, deregulation, market-led policy, argued over by supporters and critics) + globalization (NAFTA 1994 / China joins the WTO 2001) + the tech and internet revolution (PC, internet, the 2007 smartphone) + L4 1989 the Berlin Wall falls → 1991 the USSR dissolves (the Cold War ends) → manufacturing jobs move offshore one by one, plants close → Sept 11 2001 → Afghanistan 2001 / Iraq 2003 (the reasons for war still disputed) → the 2008 financial crisis (Lehman collapses, the Great Recession) → rising inequality and political polarization + the opioid crisis → two halves, with China\'s reform-opening, of one globalization',
  },

  keyFigures: [],
};
