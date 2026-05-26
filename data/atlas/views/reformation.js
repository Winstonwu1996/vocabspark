// view: Protestant Reformation · 1517 · Holy Roman Empire
// Grade 7 · HSS-7.9 (Reformation)
// 5-7: Story-First v2 lens shipped (3 lens: martin-luther / erasmus / sister-agnes)
// 启用 deepLearn 入口 + atlas keyFigures 自动从 lens 派生 (per lib/atlas-views.js 第 9 条铁律)
export const VIEW = {
  id: 'reformation',
  grade: 7,
  topicTier: 'core',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/reformation-1517?from=atlas&atlasId=reformation',
  standardsAlignment: [
    { code: 'CA-HSS-7.9',   label: { cn: 'CA HSS-7.9 宗教改革（路德 / 加尔文 / 英国国教）', en: 'CA HSS-7.9 Reformation (Luther/Calvin/Anglican)' } },
    { code: 'AP-EURO-2.2',  label: { cn: 'AP European Unit 2.2 路德与新教改革', en: 'AP European Unit 2.2 Luther and the Reformation' } },
  ],
  title:    { cn: '宗教改革', en: 'Protestant Reformation' },
  subtitle: { cn: '1517 · 维滕堡 · 路德 95 条', en: '1517 · Wittenberg · Luther\'s 95 Theses' },
  year: 1517,

  camera: {
    projection: 'mercator',
    center: [10, 50],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'reformation-1517',
      modernPolities:  'europe-modern',
      yearSnapshot:    'world_1530',
      highlightId:     'hre-1517',
    },
    C:  { civs: 'early-modern-1530' },
    F:  { ids: ['rhine', 'danube', 'alps', 'roman-roads', 'english-channel'] },
    L4: {
      pins: ['wittenberg-1517', 'rome-1517', 'worms', 'geneva-calvin'],
    },
  },

  causalSummary: {
    cn: 'L0 莱茵河流域 / 阿尔卑斯屏障 / 北海贸易出口 + L1 暖期农业繁荣 + L2 印刷术爆发 / 资产阶级 + L3 神圣罗马帝国多核心政治结构（北德诸侯零散）+ 教会层级压抑 / 拉丁文垄断 + L4 利奥十世卖赎罪券 → 路德反击',
    en: 'L0 Rhine basin / Alps barrier / North Sea trade access + L1 warm agriculture + L2 printing/bourgeois + L3 polycentric HRE political structure (fragmented N. Germany) + hierarchical Church/Latin monopoly + L4 Leo X\'s indulgences → Luther reacts',
  },

  // 关键人物 — 5-5 起 deepLearnEnabled Topic 的 keyFigures 自动从 history lens 派生
  // (lib/atlas-views.js getEffectiveKeyFigures 在 SSR 时拉取 + getStaticProps 注入)
  // 此处不再 hardcode keyFigures —— 避免 atlas vs lens 不一致事故
  // 当前派生源: lib/history-storyboards/reformation-1517.js 的 lenses object
  // (martin-luther / erasmus / sister-agnes 三个 lens)


  examPoints: {
    cn: [
      '路德 95 条论纲 1517（Martin Luther 95 Theses）',
      'Diet of Worms 1521 沃尔姆斯会议 — 路德拒绝撤回',
      'Calvin（加尔文）预定论 / Predestination',
      'Jesuits 耶稣会 / Loyola 反宗教改革',
      'Council of Trent 1545-1563 特伦特会议',
      'Act of Supremacy 1534 — 亨利八世立英国国教',
      'Peace of Augsburg 1555 — cuius regio, eius religio',
      'Edict of Nantes 1598 南特敕令（法国宗教宽容）',
    ],
    en: [
      'Luther\'s 95 Theses, 1517',
      'Diet of Worms 1521 — Luther refuses to recant',
      'Calvin\'s doctrine of Predestination',
      'Jesuits / Ignatius of Loyola — Counter-Reformation',
      'Council of Trent 1545-1563',
      'Act of Supremacy 1534 — Henry VIII founds Anglican Church',
      'Peace of Augsburg 1555 — cuius regio, eius religio',
      'Edict of Nantes 1598 — French religious toleration',
    ],
  },
};
