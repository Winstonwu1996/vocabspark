// view: Age of Exploration · 1492 · Atlantic
// Grade 7 · HSS-7.11 (Age of Exploration)
// 5-7+: Story-First v2 lens shipped (3 lens: columbus / las-casas / anacaona-jr)
// 启用 deepLearn 入口 + atlas keyFigures 自动从 lens 派生 (per lib/atlas-views.js 第 9 条铁律)
export const VIEW = {
  id: 'age-of-exploration',
  grade: 7,
  topicTier: 'core',
  deepLearnEnabled: true,
  deepLearnUrl: '/history?topicId=age-of-exploration-1492&from=atlas&atlasId=age-of-exploration',
  standardsAlignment: [
    { code: 'CA-HSS-7.11',  label: { cn: 'CA HSS-7.11 探索时代（哥伦布/达伽马/麦哲伦）', en: 'CA HSS-7.11 Age of Exploration' } },
    { code: 'CA-HSS-5.2',   label: { cn: 'CA HSS-5.2 美洲早期探索 + 欧洲遭遇', en: 'CA HSS-5.2 Early Americas + European contact' } },
    { code: 'AP-WHAP-4.3',  label: { cn: 'AP World Unit 4.3 哥伦布交换（动植物/疾病跨大西洋传播）', en: 'AP World Unit 4.3 Columbian Exchange' } },
    { code: 'AP-EURO-1.4',  label: { cn: 'AP European Unit 1.4 探索时代起源', en: 'AP European Unit 1.4 Age of Exploration origins' } },
  ],
  title:    { cn: '大航海时代起点', en: 'Age of Exploration begins' },
  subtitle: { cn: '1492 · 哥伦布航行 · Reconquista 完成同年', en: '1492 · Columbus sails · Reconquista completed same year' },
  year: 1492,

  camera: {
    projection: 'mercator',
    center: [-30, 30],
    scale: 280,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'age-of-exploration-1492',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1492',
      highlightId:     'castile-1492',
    },
    C:  { civs: 'early-modern-1500' },
    F:  { ids: ['gibraltar', 'english-channel'] },
    L4: {
      pins: ['palos-1492', 'san-salvador', 'granada-1492', 'lisbon-1492', 'tordesillas'],
    },
  },

  causalSummary: {
    cn: 'L0 伊比利亚伸入大西洋 + 信风带 + L1 季风规律 + L2 葡萄牙先例 / 银行 / 印刷 + L3 Reconquista 完成 + 国家资助传统 + L4 Granada 陷落 → 哥伦布 8.3 起航',
    en: 'L0 Iberia juts into Atlantic + trade winds + L1 stable monsoons + L2 Portuguese precedent/banking/printing + L3 Reconquista done + state-funded tradition + L4 Granada falls → Columbus sails Aug 3',
  },

  // 关键人物 — 5-7+ 起 deepLearnEnabled Topic 的 keyFigures 自动从 history lens 派生
  // (lib/atlas-views.js getEffectiveKeyFigures 在 SSR 时拉取 + getStaticProps 注入)
  // 此处不再 hardcode keyFigures —— 避免 atlas vs lens 不一致事故
  // 当前派生源: lib/history-storyboards/age-of-exploration-1492.js 的 lenses object
  // (columbus / las-casas / anacaona-jr 三个 lens)


  examPoints: {
    cn: [
      'Columbus 1492 哥伦布抵达美洲（资助方：Ferdinand & Isabella）',
      'Vasco da Gama 1498 绕非洲到印度（葡萄牙）',
      'Magellan-Elcano 1519-1522 环球航行 (Magellan 1521 死菲律宾，Elcano 接管完成)',
      'Treaty of Tordesillas 1494 托德西利亚斯条约（葡西分界）',
      'Columbian Exchange 哥伦布大交换（动植物 / 疾病 / 人口）',
      'Conquistadors：Cortés 1521 灭阿兹特克 / Pizarro 1533 灭印加',
      'Caravel 卡拉维尔帆船 + Astrolabe 星盘 + Compass 罗盘',
      'Encomienda 委托监护制 / Middle Passage 中段航行（奴隶贸易）',
    ],
    en: [
      'Columbus 1492 reaches Americas (sponsored by Ferdinand & Isabella)',
      'Vasco da Gama 1498 sails to India around Africa (Portugal)',
      'Magellan-Elcano 1519-1522 circumnavigation (Magellan died Philippines 1521, Elcano completed)',
      'Treaty of Tordesillas 1494 (Spain–Portugal demarcation)',
      'Columbian Exchange (plants/animals/diseases/people)',
      'Conquistadors: Cortés (Aztec, 1521) / Pizarro (Inca, 1533)',
      'Caravel + astrolabe + compass — navigation tech',
      'Encomienda system / Middle Passage of slave trade',
    ],
  },
};
