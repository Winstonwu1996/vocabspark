// view: Haitian Revolution · 1791-1804 · Saint-Domingue (今海地)
// HS World History / AP World Unit 5 · 大西洋革命链 (美 1776 → 法 1789 → 海地 1791)
// keyFigures 留空 — 自动从 lib/history-storyboards/haitian-revolution-1791.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'haitian-revolution',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/haitian-revolution-1791?from=atlas&atlasId=haitian-revolution',
  grade: 10,
  topicTier: 'core',                 // AP World Unit 5.2-5.3 高频 DBQ (黑人能动性)
  standardsAlignment: [
    { code: 'CA-HSS-10.2',  label: { cn: 'CA HSS-10.2 启蒙革命（高中世界史）', en: 'CA HSS-10.2 Enlightenment Revolutions (HS world history)' } },
    { code: 'AP-WHAP-5.2',  label: { cn: 'AP World Unit 5.2 民族主义与革命', en: 'AP World Unit 5.2 Nationalism and Revolutions' } },
    { code: 'AP-WHAP-5.3',  label: { cn: 'AP World Unit 5.3 革命的成因与后果', en: 'AP World Unit 5.3 Causes and effects of revolutions' } },
  ],
  title:    { cn: '海地革命', en: 'Haitian Revolution' },
  subtitle: { cn: '1791-1804 · 唯一一场被奴役者自己打赢并建国的革命', en: '1791-1804 · The only revolution won and founded by the enslaved themselves' },
  year: 1791,

  camera: {
    projection: 'mercator',
    center: [-72, 19],
    scale: 1600,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      yearSnapshot: 'world_1783',
    },
    C:  { civs: 'modern-1783' },
  },

  causalSummary: {
    cn: 'L0 Hispaniola 西部三分之一 + 北部平原 (Plaine du Nord) 全世界最赚钱糖殖民地 + L1 热带蔗田 + 黄热病 (本地人有抵抗力, 欧洲新兵没有 — 后来决定战争结局) + L2 约 52 万人 / 约九成被奴役 (死亡率极高靠不断从非洲补人) / grand blanc · petit blanc · gens de couleur libres 四方分裂 + L3 Code Noir 1685 把人定义成动产 + 1789 法国《人权宣言》漂过大西洋点燃所有矛盾 + L4 1791.8.14 Bois Caïman 仪式 → 8.21-22 北部平原起义 → 三帝国混战 → 1794 法国废奴 → 1801 Toussaint 宪法 → 1802 拿破仑远征 + Toussaint 死于狱中 → 黄热病摧毁法军 → 1804.1.1 Dessalines 独立建国复名 Haiti',
    en: 'L0 western third of Hispaniola + Plaine du Nord, the world\'s most profitable sugar colony + L1 tropical cane fields + yellow fever (locals immune, fresh European troops not — later decides the war) + L2 ~520k people / ~90% enslaved (extreme death rate sustained by constant imports from Africa) / four-way split among grand blanc, petit blanc, gens de couleur libres + L3 Code Noir 1685 defines people as property + 1789 French Declaration of Rights crosses the Atlantic and ignites every conflict + L4 Aug 14 1791 Bois Caiman ceremony → Aug 21-22 Northern Plain uprising → three-empire war → 1794 France abolishes slavery → 1801 Toussaint constitution → 1802 Napoleon\'s expedition + Toussaint dies in prison → yellow fever destroys the French army → Jan 1 1804 Dessalines declares independence and renames it Haiti',
  },

  keyFigures: [],
};
