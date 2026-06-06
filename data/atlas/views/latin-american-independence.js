// view: Latin American Independence · 1810-1826 · Spanish America (墨西哥→阿根廷)
// HS World History / AP World Unit 5 · 大西洋革命链收尾 + 规模最大 (美 1776 → 法 1789 → 海地 1791 → 拉美 1810-1826)
// keyFigures 留空 — 自动从 lib/history-storyboards/latin-american-independence-1810.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'latin-american-independence',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/latin-american-independence-1810?from=atlas&atlasId=latin-american-independence',
  grade: 10,
  topicTier: 'core',                 // AP World Unit 5.2-5.3 高频 DBQ (催化-领导-受益三段拆解)
  standardsAlignment: [
    { code: 'CA-HSS-10.2',  label: { cn: 'CA HSS-10.2 启蒙革命（高中世界史）', en: 'CA HSS-10.2 Enlightenment Revolutions (HS world history)' } },
    { code: 'AP-WHAP-5.2',  label: { cn: 'AP World Unit 5.2 民族主义与革命', en: 'AP World Unit 5.2 Nationalism and Revolutions' } },
    { code: 'AP-WHAP-5.3',  label: { cn: 'AP World Unit 5.3 革命的成因与后果', en: 'AP World Unit 5.3 Causes and effects of revolutions' } },
  ],
  title:    { cn: '拉丁美洲独立', en: 'Latin American Independence' },
  subtitle: { cn: '1810-1826 · criollo 精英主导、横跨半个地球的西班牙帝国崩解', en: '1810-1826 · The criollo-led collapse of a Spanish empire spanning half the globe' },
  year: 1810,

  camera: {
    projection: 'mercator',
    center: [-65, -15],
    scale: 500,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  causalSummary: {
    cn: 'L0 西属美洲跨墨西哥/中美洲/南美西部北部 (除巴西), 被安第斯山脉 (Andes) + 草原 (pampas/llanos) + 热带雨林切成互相隔绝区域 (碎裂的物理根源之一); 行政分成新西班牙/新格拉纳达/秘鲁/拉普拉塔几个总督辖区 (Viceroyalty) + L1 三百年白银帝国 (波托西/墨西哥银矿) 建立在印第安贡赋劳役 + 矿山苦工 + 非洲奴役上 + L2 casta 种族等级 (顶 peninsular → criollo → mestizo/mulato → 底层印第安人和被奴役非洲人); 核心紧张在 criollo (美洲生白人精英) 被 peninsular (西班牙生) 挡在权力门外 + L3 合法性系于对西班牙国王效忠这一根线 + L4 1808 拿破仑入侵西班牙抓走国王扶兄 Joseph Bonaparte → 合法性真空 → 1810 各地成立 junta「替国王看家」→ 1810.9.16 墨西哥 Hidalgo 的 Grito de Dolores 底层起义 → 1817 San Martín 翻越安第斯解放智利 → 1819.8.7 Boyacá → 1821.6.24 Carabobo → 1822 Guayaquil 会面 San Martín 退出 → 1824.12.9 Ayacucho (Sucre 指挥) 终结西班牙南美大陆统治 → 1830 Gran Colombia 解体 + caudillo 强人政治 + Bolívar 贫病而死「美洲无法被治理」',
    en: 'L0 Spanish America spanning Mexico, Central America, and the western and northern parts of South America (except Brazil), cut by the Andes plus grasslands (pampas/llanos) and rainforest into isolated regions (one physical root of fragmentation); administratively split into the Viceroyalties of New Spain, New Granada, Peru, and Rio de la Plata + L1 a 300-year silver empire (Potosi, Mexican mines) built on Indian tribute and labor service, mine labor, and African slavery + L2 the casta racial hierarchy (top peninsulares → criollos → mestizos/mulatos → Indians and enslaved Africans at the bottom), with the core tension being criollos (American-born white elites) shut out of power by peninsulares (Spain-born) + L3 legitimacy hanging on one thread, loyalty to the Spanish king + L4 1808 Napoleon invades Spain, seizes the king, and installs his brother Joseph Bonaparte → legitimacy vacuum → 1810 juntas form everywhere "guarding the region for the king" → Sept 16 1810 Hidalgo\'s Grito de Dolores bottom-up uprising in Mexico → 1817 San Martin crosses the Andes to free Chile → Aug 7 1819 Boyaca → June 24 1821 Carabobo → 1822 Guayaquil meeting, San Martin steps aside → Dec 9 1824 Ayacucho (commanded by Sucre) ends Spanish rule on the South American mainland → 1830 Gran Colombia dissolves + caudillo strongman politics + Bolivar dies poor and sick, "America is ungovernable"',
  },

  keyFigures: [],
};
