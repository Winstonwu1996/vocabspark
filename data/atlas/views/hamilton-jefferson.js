// view: Hamilton vs Jefferson · 1790s · United States (First Party System)
// Grade 8 · CA HSS-8.3 · APUSH Period 3 (KC-3.2.III) · AP US Gov (federalism / implied powers)
export const VIEW = {
  id: 'hamilton-jefferson',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/hamilton-jefferson-1790s?from=atlas&atlasId=hamilton-jefferson',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.3',       label: { cn: 'CA HSS-8.3 联邦时代·华盛顿与亚当斯任期', en: 'CA HSS-8.3 Federalist Era · Washington & Adams' } },
    { code: 'APUSH-KC-3.2.III', label: { cn: 'APUSH Period 3 · KC-3.2.III 第一次党争与联邦权', en: 'APUSH Period 3 · KC-3.2.III First Party System & federal power' } },
    { code: 'AP-US-GOV',        label: { cn: 'AP US Gov 联邦制 / 默示权力 / 弹性条款', en: 'AP US Gov federalism / implied powers / necessary & proper' } },
  ],
  title:    { cn: '建国财政与第一次党争', en: 'Hamilton vs Jefferson — First Party System' },
  subtitle: { cn: '1790s · 美国 · 承债 / 国家银行 / 消费税 / 1794 威士忌暴动', en: '1790s · USA · assumption / national bank / excise tax / 1794 Whiskey Rebellion' },
  year: 1795,

  camera: {
    projection: 'mercator',
    center: [-85, 38],
    scale: 880,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'constitution-1787',
      modernPolities:  'north-america-modern',
      highlightId:     'usa-1787',
    },
    C:  { civs: 'modern-1880' },
    F:  { ids: ['appalachians', 'ohio-river', 'mississippi', 'mason-dixon'] },
    L4: {
      pins: [],
    },
  },

  causalSummary: {
    cn: 'L0 阿勒格尼山把东部「现金/商业世界」与西部宾州「以物易物边疆」隔成两个时空 + L1 1783 战胜却破产·美债在欧洲市场只值面值几分之一·没有统一货币与中央银行 + L2 约 400 万总人口·约 70 万被奴役（约 18%）·东部商人/债主 vs 西部边疆酒农两条经济线 + L3 1787 宪法刚定·strict vs loose construction 之争·弹性条款与 implied powers 的第一次实战 + L4 1790《公共信用报告》承债 → 1790 妥协（承债换波托马克河首都）→ 1791 国家银行 + 消费税 + Banneker 致信 Jefferson → 1794 Whiskey Rebellion·Washington 亲领约 13,000 民兵 → 1800 Jefferson 当选·首次政党轮替',
    en: 'L0 Allegheny Mountains split eastern "cash/commerce world" from western Pennsylvania "barter frontier" + L1 1783 won the war but bankrupt · US bonds traded in Europe at a fraction of face value · no common currency or central bank + L2 ~4M total · ~700K enslaved (~18%) · eastern merchants/creditors vs western frontier distillers as two economic tracks + L3 1787 Constitution newly written · strict vs loose construction fight · first real test of the necessary-and-proper clause & implied powers + L4 1790 Report on Public Credit / assumption → 1790 Compromise (assumption traded for the Potomac capital) → 1791 national bank + excise tax + Banneker\'s letter to Jefferson → 1794 Whiskey Rebellion · Washington personally led ~13,000 militia → 1800 Jefferson elected · first peaceful party turnover',
  },

  keyFigures: [],

  examPoints: {
    cn: [
      '1790《公共信用报告》与承债案（Hamilton, assumption）',
      '1790 妥协（dinner table bargain）— 承债换首都迁波托马克',
      '1791 First Bank of the United States 国家银行成立',
      'necessary and proper clause + implied powers + strict vs loose construction',
      '1791 excise tax 消费税（新政府第一个对国内产品的税）',
      '1791-08-19 Banneker 致 Jefferson 信 / 1791-08-30 Jefferson 回信',
      '1793 Proclamation of Neutrality 中立宣言 / 1794-95 Jay\'s Treaty 杰伊条约',
      '1794 Whiskey Rebellion + Washington 亲领约 13,000 民兵镇压',
      'Federalists vs Democratic-Republicans 第一次党争 / 1800 Revolution of 1800',
      'McCulloch v. Maryland (1819) 后续确认 implied powers',
    ],
    en: [
      '1790 Report on Public Credit & assumption (Hamilton)',
      '1790 Compromise — dinner-table bargain: assumption for a Potomac capital',
      '1791 First Bank of the United States chartered',
      'Necessary and proper clause + implied powers + strict vs loose construction',
      '1791 excise tax (the new government\'s first tax on a domestic product)',
      'Aug 19 1791 Banneker\'s letter to Jefferson / Aug 30 1791 Jefferson\'s reply',
      '1793 Proclamation of Neutrality / 1794-95 Jay\'s Treaty',
      '1794 Whiskey Rebellion + Washington personally led ~13,000 militia',
      'Federalists vs Democratic-Republicans / 1800 Revolution of 1800',
      'McCulloch v. Maryland (1819) later confirms implied powers',
    ],
  },
};
