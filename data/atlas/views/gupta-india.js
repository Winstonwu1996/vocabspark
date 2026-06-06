// view: Gupta India · c. 320-550 CE · 恒河平原 (首都 Pataliputra / 华氏城, 今巴特那)
// CA HSS Grade 6.5 古代印度·黄金时代 · AP World (early) 跨文明传播 + agency & silence
// keyFigures 留空 — 自动从 lib/history-storyboards/gupta-india-320.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'gupta-india',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/gupta-india-320?from=atlas&atlasId=gupta-india',
  grade: 6,
  topicTier: 'core',                 // CA HSS 6.5 必学 + AP World 跨文明传播 (印度数字西传)
  standardsAlignment: [
    { code: 'CA-HSS-6.5',  label: { cn: 'CA HSS-6.5 古代印度·黄金时代（6 年级）', en: 'CA HSS-6.5 Ancient India, the Golden Age (Grade 6)' } },
    { code: 'AP-WHAP',     label: { cn: 'AP World History (early) 跨文明科学传播', en: 'AP World History (early) cross-civilization science transmission' } },
  ],
  title:    { cn: '笈多王朝 · 印度黄金时代', en: 'Gupta India · The Golden Age' },
  subtitle: { cn: '约 320-550 · 算出地球自转与零的时代，可金子落在谁手里？', en: 'c. 320-550 · The age that found Earth\'s rotation and zero — but who got the gold?' },
  year: 320,

  camera: {
    projection: 'mercator',
    center: [85.1, 25.6],            // Pataliputra (华氏城, 今巴特那) 恒河平原
    scale: 1100,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  causalSummary: {
    cn: 'L0 北印度恒河平原 (Ganges plain) + 首都 Pataliputra (华氏城) + L1 季风 (monsoon) 决定稻麦收成 (雨准则丰年雨晚则饥荒)/土地肥沃养得起庞大人口与不事生产的学者祭司 + L2 varna (四大种姓) + jati (世袭职业群体) 层层固化/能读写被史书记住的是上层极少数/印度教 (Hinduism) 复兴尊毗湿奴 Puranas 兴 + L3 相对去中心封建式: 核心区皇帝直辖外围靠 samanta (地方封建领主称臣纳贡出兵自治) 对比孔雀王朝高度集权 + L4 约 320 Chandragupta I 加冕奠基 → 约 335-380 Samudragupta「印度的拿破仑」大扩张 → 约 380-415 Chandragupta II 鼎盛供养 Kalidasa 立德里铁柱 → 499 Aryabhata 23 岁写 Aryabhatiya (十进制位值/π≈3.1416/地球自转) → 约 427 Nalanda 大学奠基 → 约 455 起 Skandagupta 苦战 Huna (嚈哒/白匈奴) 国库掏空 → 约 480 年代 Huna 突破西北 → 约 550 帝国瓦解 (外患 Huna + 内部 samanta 离心)/但数字与零没随帝国死: 经 Al-Khwarizmi 约 825 → Fibonacci 1202 传遍世界 (误称阿拉伯数字老家是印度)',
    en: 'L0 north India\'s Ganges plain + the capital Pataliputra + L1 the monsoon decides the rice and wheat harvest (rain on time means plenty, rain late means famine); fertile land supports a vast population and non-farming scholars and priests + L2 varna (four castes) + jati (hereditary occupational groups) hardening layer by layer; the literate few whom histories remember are a tiny upper stratum; a Hindu revival venerating Vishnu, the Puranas rising + L3 a relatively decentralized feudal order: the emperor rules the core directly, the periphery through samanta (local feudal lords who bow, pay tribute, supply troops, and govern themselves), unlike the highly centralized Mauryan empire + L4 c. 320 Chandragupta I crowned, founding the dynasty → c. 335-380 Samudragupta the "Indian Napoleon" expands → c. 380-415 Chandragupta II at the peak, patron of Kalidasa, builder of the Iron Pillar → 499 Aryabhata at 23 writes the Aryabhatiya (decimal place-value, pi ≈ 3.1416, Earth\'s rotation) → c. 427 Nalanda university founded → from c. 455 Skandagupta fights the Huna (Hephthalites) hard, emptying the treasury → c. 480s the Huna break through the northwest → c. 550 the empire falls (external Huna shock + internal samanta breakaway); but the numbers and zero do not die with the empire: via Al-Khwarizmi (~825) and Fibonacci (1202) they spread across the world (miscalled Arabic numerals, their home is India)',
  },

  keyFigures: [],
};
