// view: The Early Republic · 1800-1828 · USA (Jefferson 上任 → Jackson 当选, 整整一代人)
// Grade 8 · HSS-8.4 / 8.5 · APUSH Period 4 (1800-1848)
//   Louisiana Purchase · Lewis and Clark · War of 1812 · market revolution ·
//   Missouri Compromise · Monroe Doctrine
// keyFigures 留空 — 自动从 lib/history-storyboards/early-republic-1800.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'early-republic',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/early-republic-1800?from=atlas&atlasId=early-republic',
  grade: 8,
  topicTier: 'core',                 // APUSH Period 4 高频 DBQ (向西扩张两面账 / 联邦权力之争)
  standardsAlignment: [
    { code: 'CA-HSS-8.4',  label: { cn: 'CA HSS-8.4 早期共和国的发展', en: 'CA HSS-8.4 Development of the early republic' } },
    { code: 'CA-HSS-8.5',  label: { cn: 'CA HSS-8.5 西进运动的开端', en: 'CA HSS-8.5 The beginnings of westward movement' } },
    { code: 'AP-USH-4.2',  label: { cn: 'AP US Period 4.2 路易斯安那购地与西扩', en: 'AP US Period 4.2 Louisiana Purchase and westward expansion' } },
    { code: 'AP-USH-4.3',  label: { cn: 'AP US Period 4.3 市场革命', en: 'AP US Period 4.3 The market revolution' } },
  ],
  title:    { cn: '早期共和国', en: 'The Early Republic' },
  subtitle: { cn: '1800-1828 · 面积一夜翻倍 · 同一只手把原住民推走、奴隶制随棉花西扩', en: '1800-1828 · Size doubled in a night · the same hand pushed Natives off and spread slavery west with cotton' },
  year: 1803,

  camera: {
    projection: 'mercator',
    center: [-100, 38],
    scale: 480,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  // causalSummary 取自 narrative §2 (L0 地理 / L1 气候 / L2 社会 / L3 制度 / L4 事件)
  causalSummary: {
    cn: 'L0 1800 东部十三州西界至密西西比河 → 1803 Louisiana Purchase 推到落基山脚, 面积翻倍, 密苏里/密西西比河网密布 (Lewis and Clark 探险) + L1 东北温带河流落差大水力足 (New England 河边纺织厂) · 中西部大平原森林宜种粮 · 南方湿热宜棉花 (轧棉机把奴隶制焊死) + L2 1800 约 530 万人 → 1828 近 1200 万, 人口往西找地 / 往工厂找工钱 (Lowell mill girls 首次成批拿工资), 被奴役者随棉花一批批向西卖 + L3 1787 宪法把国家攒成联邦, 这一代试出「联邦能管多宽」(购地 / 国家银行 / 自由州 vs 蓄奴州) + L4 1803 购地 → 1804-06 Lewis and Clark → 1811 Tippecanoe → 1812-15 War of 1812 → 1819 Panic of 1819 → 1820 Missouri Compromise (36°30′) → 1823 Monroe Doctrine → 1825 Erie Canal 通航 → 1824 肮脏交易大选 → 1828 Jackson 当选, 第一次政党体系改组',
    en: 'L0 in 1800 the thirteen states reach west only to the Mississippi → 1803 Louisiana Purchase pushes the line to the Rockies, doubling the size, a dense river network (Missouri/Mississippi) drives the Lewis and Clark expedition + L1 the temperate Northeast with high river drops and ample waterpower (New England riverside textile mills) · the Midwest plains and forests good for grain · the hot humid South suited to cotton (the cotton gin welds slavery to it) + L2 about 5.3M people in 1800 → near 12M by 1828, people moving west for land / to factories for wages (Lowell mill girls, women first paid at scale), the enslaved sold west batch after batch with cotton + L3 the 1787 Constitution bundled the country into a federal union, and this generation tested by trial "how far the federal government can reach" (the purchase / a national bank / free vs slave states) + L4 1803 purchase → 1804-06 Lewis and Clark → 1811 Tippecanoe → 1812-15 War of 1812 → 1819 Panic of 1819 → 1820 Missouri Compromise (36°30′) → 1823 Monroe Doctrine → 1825 Erie Canal opens → 1824 corrupt-bargain election → 1828 Jackson elected, the first party system realigned',
  },

  keyFigures: [],
};
