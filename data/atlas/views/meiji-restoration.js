// view: Meiji Restoration · 1868 · Japan
// HS World History / AP World Unit 6 · 亚洲现代化 (跟洋务运动对照)
// keyFigures 留空 — 自动从 lib/history-storyboards/meiji-restoration-1868.js 的 3 个 lens 派生 (第9条)
export const VIEW = {
  id: 'meiji-restoration',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/meiji-restoration-1868?from=atlas&atlasId=meiji-restoration',
  grade: 10,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-10.4',  label: { cn: 'CA HSS-10.4 帝国主义时代的亚洲（高中世界史）', en: 'CA HSS-10.4 Asia in the age of imperialism (HS world history)' } },
    { code: 'AP-WHAP-6.2',  label: { cn: 'AP World Unit 6.2 国家扩张与现代化', en: 'AP World Unit 6.2 State expansion and modernization' } },
  ],
  title:    { cn: '明治维新', en: 'Meiji Restoration' },
  subtitle: { cn: '1868 · 一个国家自上而下重造自己 / 跟洋务运动对照', en: '1868 · A nation remaking itself from the top down / compared with China\'s Self-Strengthening' },
  year: 1868,

  camera: {
    projection: 'mercator',
    center: [138, 37],
    scale: 1400,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      yearSnapshot: 'world_1880',
    },
    C:  { civs: 'modern-1880' },
  },

  causalSummary: {
    cn: 'L0 日本列岛 + 资源贫乏多山 + L1 1853 美国黑船 (蒸汽铁甲) 闯江户湾 → 1854 不平等条约 / 锁国 200 年破功 + L2 下级武士不满 + 农民重税 + 「攘夷」失败 (1863-64 萨长各挨西方炮轰) + L3 尊王攘夷 → 师夷长技 觉悟翻转 + 萨长同盟 1866 + L4 1868 王政復古 (戊辰战争推翻幕府, 权力归明治天皇) → 五条御誓文 → 废藩置县 1871 + 征兵 1873 + 地税改正 1873 + 废刀令 1876 (亲手废掉武士阶级) → 岩仓使节团 → 1877 西南战争 (西乡隆盛之死) → 富国强兵 / 殖产興業',
    en: 'L0 Japanese archipelago + resource-poor, mountainous + L1 1853 US Black Ships (steam ironclads) enter Edo Bay → 1854 unequal treaties / 200 years of seclusion broken + L2 discontented lower samurai + heavily-taxed peasants + the failure of "expel the barbarians" (Satsuma and Choshu shelled by Western navies 1863-64) + L3 sonno joi → the reversal to "learn the barbarians\' skills" + the Satsuma-Choshu Alliance 1866 + L4 1868 Imperial Restoration (Boshin War topples the shogunate; power to Emperor Meiji) → the Charter Oath → abolition of the domains 1871 + conscription 1873 + land-tax reform 1873 + sword ban 1876 (abolishing the samurai class itself) → the Iwakura Mission → 1877 Satsuma Rebellion (death of Saigo Takamori) → rich country, strong army / promote industry',
  },

  keyFigures: [],
};
