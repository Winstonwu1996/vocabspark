// view: Asian Imperialism · 1839 · 中国(广州/虎门) + 印度(孟加拉) 两个舞台
// HS World History / AP World Unit 6 (1750-1900 · Consequences of Industrialization)
//   Topic 6.2-6.4 (State Expansion / Indigenous Responses)
// keyFigures 留空 — 自动从 lib/history-storyboards/asian-imperialism-1839.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
// camera.center 取两个舞台之间 (南中国海一带), scale 放宽以同框中国南岸与印度次大陆
export const VIEW = {
  id: 'asian-imperialism',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/asian-imperialism-1839?from=atlas&atlasId=asian-imperialism',
  grade: 10,
  topicTier: 'core',                 // AP World Unit 6.2-6.4 高频 DBQ (自由贸易帝国主义 + 被殖民者回应)
  standardsAlignment: [
    { code: 'AP-WHAP-6.2', label: { cn: 'AP World Unit 6.2 国家扩张 (帝国主义)', en: 'AP World Unit 6.2 State Expansion (imperialism)' } },
    { code: 'AP-WHAP-6.3', label: { cn: 'AP World Unit 6.3 被殖民者的回应 (抵抗/改良/合作)', en: 'AP World Unit 6.3 Indigenous Responses (resistance/adaptation/collaboration)' } },
    { code: 'AP-WHAP-6.4', label: { cn: 'AP World Unit 6.4 工业化的全球后果', en: 'AP World Unit 6.4 Global consequences of industrialization' } },
  ],
  title:    { cn: '亚洲的帝国主义', en: 'Imperialism in Asia' },
  subtitle: { cn: '1839 · 一桩卖毒品的生意，怎么把中国和印度同时碾进同一台机器', en: '1839 · How a drug-selling business crushed China and India into one machine' },
  year: 1839,

  camera: {
    projection: 'mercator',
    center: [100, 22],
    scale: 900,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      yearSnapshot: 'world_1815',
    },
    C:  { civs: 'modern-1880' },
  },

  causalSummary: {
    cn: 'L0 两个舞台: 中国南方海岸 — 广州 (Canton) 是清朝唯一对西方开放的口岸 (广州体制), 中西贸易只能经此一门、只能跟官方特许的「十三行」做, 珠江口外有虎门炮台; 印度次大陆 — 孟加拉 (Bengal) 是东印度公司最早据点和印度鸦片主产区, 恒河平原是 1857 起义核心, 德里坐着名存实亡的莫卧儿皇帝 + L1 茶-银-鸦片三角贸易: 英国买中国茶白银流入中国 → EIC 在孟加拉逼农民种鸦片走私进中国换回白银 → 白银再买茶, 亏反转成赚 + L2 机器两头的无名燃料 (广州烟馆里家破人亡的中国人 / 孟加拉被逼种罂粟饿死的农民) + 一层本地合作者 (中国买办 / 印度 sepoy 与王公) + L3 鸦片在中国是禁的 (走私=从头违法) + 1839 英国工业革命后的蒸汽炮舰与市场胃口 + L4 1839 林则徐虎门销烟 → 1839-42 第一次鸦片战争 → 1842《南京条约》(赔款/开五口/割香港) 第一个不平等条约 + 治外法权/协定关税/最惠国三件套剥主权 → 1856-60 第二次鸦片战争 + 1860 焚圆明园 → 印度 1857 大起义被镇压 → 1858 撤东印度公司、英王室直辖 (British Raj)',
    en: 'L0 two stages: China\'s south coast — Canton (today\'s Guangzhou) was the only Qing port open to the West (the Canton System), all China-West trade forced through this one gate and only with the licensed "Thirteen Hongs," with the Humen forts outside the Pearl River mouth; the Indian subcontinent — Bengal was the East India Company\'s earliest base and India\'s main opium-growing region, the Gangetic plain the core of the 1857 uprising, with the hollow Mughal emperor seated at Delhi + L1 the tea-silver-opium triangular trade: Britain buys Chinese tea, silver floods into China → the EIC forces Bengal farmers to grow opium smuggled into China for silver → the silver buys tea again, loss flipped to profit + L2 the nameless fuel at both ends of the machine (Chinese ruined in Canton opium dens / Bengal farmers forced to grow poppy and starved) + a layer of local collaborators (Chinese compradors / Indian sepoys and princes) + L3 opium was banned in China (smuggling = illegal from the start) + 1839 post-Industrial-Revolution Britain\'s steam gunboats and hunger for markets + L4 1839 Lin Zexu\'s Destruction of Opium at Humen → 1839-42 First Opium War → 1842 Treaty of Nanking (indemnity / five ports / Hong Kong ceded), the first unequal treaty + the three-piece set of extraterritoriality / agreed tariff / most-favored-nation stripping sovereignty → 1856-60 Second Opium War + 1860 burning of the Yuanmingyuan → India\'s 1857 uprising crushed → 1858 the East India Company abolished, direct British Crown rule (the British Raj)',
  },

  keyFigures: [],
};
