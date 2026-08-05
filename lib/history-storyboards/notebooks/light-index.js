// ─── 同伴笔记本「轻量索引」（自动生成，勿手改）────────────────────────
// 生成脚本：scripts/gen-notebook-light-index.mjs
//
// 为什么存在：完整 notebook 共 3.5MB，但课程列表页(CourseBrowser)只需要每门课的**标题**。
// 此前 history-topics.js 静态引入全部 notebook 拿标题 → 4.19MB 被拖进
// /history、/history/[topicId]、/atlas-lab 三个页面的客户端包。
// 现在标题走这份 ~6KB 的索引，完整 notebook 改为按需加载。
//
// ⚠️ 改了任何 notebook 的 topicNameEn/topicNameCn 后必须重新生成：
//     node scripts/gen-notebook-light-index.mjs
//   scripts/test-notebook-light-index.mjs 会在 npm test 时校验两者一致，漂移会直接红。
export var NOTEBOOK_NAMES = {
  'enlightenment': { en: "The Enlightenment", cn: "启蒙运动" },
  'islamic-rise': { en: "The Rise of Islam", cn: "伊斯兰文明兴起" },
  'age-of-exploration-1492': { en: "The Age of Exploration", cn: "大航海时代" },
  'scientific-revolution': { en: "The Scientific Revolution", cn: "科学革命" },
  'tang-song-china': { en: "Tang-Song China", cn: "唐宋盛世" },
  'crusades-1099': { en: "The Crusades", cn: "十字军东征" },
  'reformation-1517': { en: "The Protestant Reformation", cn: "宗教改革" },
  'medieval-japan': { en: "Medieval Japan", cn: "中世日本" },
  'renaissance-1500': { en: "The Renaissance", cn: "文艺复兴" },
  'magna-carta-1215': { en: "Magna Carta", cn: "大宪章" },
  'black-death-1347': { en: "The Black Death", cn: "黑死病" },
  'pre-columbian': { en: "Pre-Columbian Americas", cn: "前哥伦布美洲文明" },
  'mali-empire-1235': { en: "The Mali Empire", cn: "马里帝国" },
  'mongol-empire': { en: "The Mongol Empire", cn: "蒙古帝国" },
  'byzantine-rise': { en: "The Byzantine Empire", cn: "拜占庭帝国" },
  'constitutional-convention-1787': { en: "The Constitutional Convention 1787", cn: "费城制宪 1787" },
  'haitian-revolution-1791': { en: "The Haitian Revolution 1791", cn: "海地革命 1791" },
  'meiji-restoration-1868': { en: "The Meiji Restoration 1868", cn: "明治维新 1868" },
  'russian-revolution-1917': { en: "The Russian Revolution 1917", cn: "俄国革命 1917" },
  'contemporary-us-1980': { en: "Contemporary US 1980–Present", cn: "当代美国 1980 至今" },
  'hamilton-jefferson-1790s': { en: "Hamilton vs Jefferson — The First Party System 1790s", cn: "建国财政与第一次党争 1790s" },
  'jackson-indian-removal-1830': { en: "Jacksonian Democracy & Indian Removal", cn: "杰克逊民主与印第安人迁移" },
  'slavery-abolition-1850': { en: "Slavery, Abolition & the Underground Railroad", cn: "奴隶制与废奴" },
  'civil-war-1861': { en: "The Civil War 1861-1865", cn: "南北战争" },
  'reconstruction-1877': { en: "Reconstruction & Its Betrayal 1865-1877", cn: "重建与背叛 1865-1877" },
  'chinese-exclusion-1882': { en: "The Transcontinental Railroad & Chinese Exclusion 1869-1882", cn: "铁路华工与排华法案" },
  'gilded-age-1890': { en: "The Gilded Age — Robber Barons & Labor", cn: "镀金时代与劳工" },
  'womens-suffrage-1920': { en: "Women's Suffrage 1848-1920", cn: "妇女选举权 1848-1920" },
  'industrial-revolution-1800': { en: "The Industrial Revolution", cn: "工业革命" },
  'french-revolution-1789': { en: "The French Revolution & Napoleon", cn: "法国大革命与拿破仑" },
  'scramble-for-africa-1884': { en: "The Scramble for Africa & New Imperialism", cn: "瓜分非洲与新帝国主义" },
  'world-war-one-1914': { en: "World War I (The Great War)", cn: "第一次世界大战" },
  'progressive-era-1910': { en: "The Progressive Era", cn: "进步时代" },
  'world-war-two-1942': { en: "World War II & the Holocaust 1939-1945", cn: "二战与大屠杀" },
  'cold-war-1962': { en: "The Cold War 1947-1991", cn: "冷战" },
  'decolonization-1960': { en: "Decolonization & the Non-Aligned World", cn: "去殖民化与不结盟" },
  'civil-rights-1965': { en: "The Civil Rights Movement 1954-1968", cn: "民权运动 1954-1968" },
  'great-depression-1933': { en: "The Great Depression & the New Deal", cn: "大萧条与新政" },
  'hammurabi-code-1754bce': { en: "Mesopotamia & Hammurabi's Code", cn: "美索不达米亚与汉谟拉比法典" },
  'babylonian-exile-586bce': { en: "Ancient Israel & the Babylonian Exile", cn: "古以色列与巴比伦之囚" },
  'roman-republic-fall-44bce': { en: "The Roman Republic & Its Fall", cn: "罗马共和国与崩溃" },
  'ancient-egypt-2550bce': { en: "The Great Pyramid of Giza c.2550 BCE", cn: "吉萨大金字塔 · 公元前 2550 年" },
  'ancient-greece-480bce': { en: "The Persian Wars 480 BCE", cn: "希波战争 480 BCE" },
  'mauryan-india-261bce': { en: "Ashoka & the Kalinga War 261 BCE", cn: "阿育王与羯陵伽之战 公元前 261 年" },
  'qin-china-221bce': { en: "Qin Shi Huang and the Unification of China 221 BCE", cn: "秦统一中国 公元前 221 年" },
  'roman-empire-peak-117': { en: "The Roman Empire at Its Peak (117 CE)", cn: "罗马帝国的巅峰" },
  'gunpowder-empires-1600': { en: "The Gunpowder Empires 1600", cn: "火药帝国 1600" },
  'manifest-destiny-1845': { en: "Manifest Destiny 1845", cn: "昭昭天命 1845" },
  'reform-movements-1840': { en: "The Antebellum Reform Movements 1830-1850", cn: "改革年代 1830-1850" },
  'han-china-130bce': { en: "Han China under Emperor Wu", cn: "汉武盛世 c.130 BCE" },
  'american-revolution-1776': { en: "The American Revolution 1776", cn: "美国独立革命 1776" },
  'thirteen-colonies-1700': { en: "The Thirteen Colonies c.1700", cn: "北美十三殖民地 约 1700" },
  'westward-expansion-1869': { en: "Westward Expansion 1869", cn: "西进运动 1869" },
  'globalization-1995': { en: "Globalization since ~1945", cn: "全球化 1995" },
  'native-americans-pre1500': { en: "Native Nations of North America before 1500", cn: "接触前的北美原住民" },
  'trade-networks-1200': { en: "Afro-Eurasian Trade Networks 1200-1450", cn: "三网相连 1200-1450" },
  'asian-imperialism-1839': { en: "Imperialism in Asia 1839", cn: "亚洲的帝国主义 1839" },
  'mesopotamia-3500bce': { en: "Mesopotamia & Sumer · The First Cities", cn: "美索不达米亚·苏美尔 3500 BCE" },
  'indus-valley-2600bce': { en: "The Indus Valley (Harappan) Civilization, c. 2600 BCE", cn: "印度河流域（哈拉帕）文明 约前2600" },
  'early-humans-10000bce': { en: "Early Humans & the Neolithic Revolution", cn: "早期人类与新石器革命（约前 10000 年）" },
  'ancient-israel-1000bce': { en: "Ancient Israel & the Origins of Monotheism", cn: "古以色列与一神教的起源" },
  'gupta-india-320': { en: "Gupta India · The Golden Age", cn: "笈多王朝 · 印度黄金时代" },
  'persian-empire-550bce': { en: "The Persian (Achaemenid) Empire 550-330 BCE", cn: "波斯帝国（阿契美尼德）550-330 BCE" },
  'latin-american-independence-1810': { en: "Latin American Independence 1810-1826", cn: "拉丁美洲独立 1810-1826" },
  'interwar-totalitarianism-1919': { en: "The Interwar Years & the Rise of Totalitarianism 1919-1939", cn: "战间期与极权主义兴起 1919-1939" },
  'vietnam-war-1965': { en: "The Vietnam War 1965", cn: "越南战争 1965" },
  'cold-war-home-front-1950': { en: "The Cold War Home Front 1950", cn: "冷战国内战线 1950" },
  'spanish-american-war-1898': { en: "The Spanish-American War & American Empire 1898", cn: "美西战争与美国海外帝国 1898" },
  'road-to-revolution-1763': { en: "The Road to Revolution 1763", cn: "通往独立之路 1763" },
  'colonial-america-1650': { en: "Colonial America Takes Shape, c. 1650-1750", cn: "殖民地美洲的成形 约 1650-1750" },
  'early-republic-1800': { en: "The Early Republic 1800-1828", cn: "早期共和国 1800-1828" },
};

export var hasNotebookName = function(topicId) {
  return Boolean(topicId && NOTEBOOK_NAMES[topicId]);
};
