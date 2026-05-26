// ─── 中国朝代年份反查 ──────────────────────────────────────────────
// 用途:TopicHero 在「同时代中国」位置给孩子一个熟悉的锚点。
// 例:Magna Carta 1215 → 南宋;Black Death 1347 → 元;Egypt 2550 BCE → 传说时代。
//
// 中国本土 topic (qin-china / han-china / tang-song-china) 不显示锚点
// (它本身就是这个朝代)。判断在 TopicHero 里做。
//
// 显示规则:取年份所在的主朝代;过渡期(如分裂)合并以避免名字过多。
// ─────────────────────────────────────────────────────────────

// 解析 topic.year:number(1215) / 字符串 (「前 2550」/ 「约 1700」/ 「1929-1939」/ 「1947-1991」)
// → 数字(BCE 为负;范围取中点,避免跨朝代 topic 误归到起始朝代)
export function parseTopicYear(yearRaw) {
  if (typeof yearRaw === 'number') return yearRaw;
  if (typeof yearRaw !== 'string') return null;
  var s = yearRaw.trim();
  // 「前 N」或 「公元前 N」→ -N
  var bce = s.match(/前\s*(\d+)/);
  if (bce) return -parseInt(bce[1], 10);
  // 范围「N-M」(N、M 都 ≥ 0): 取中点(冷战 1947-1991 → 1969 共和国, 大萧条 1929-1939 → 1934 民国)
  var range = s.match(/(\d{1,4})\s*[-–~]\s*(\d{1,4})/);
  if (range) return Math.round((parseInt(range[1], 10) + parseInt(range[2], 10)) / 2);
  // 「约 N」/ 「N AD」/ 纯数字 → +N
  var ce = s.match(/(\d{1,4})/);
  if (ce) return parseInt(ce[1], 10);
  return null;
}

// 朝代表:start 含 end 不含(下个朝代的 start 即上个 end)。BCE 用负数。
// 来源:中学历史教科书主流划法,合并细分(西周/东周不区分,东汉/西汉合「汉」等)
//      以减少认知负担;7-9 年级要的是「熟悉的锚点」,不是史学精度。
var DYNASTIES = [
  { start: -10000, end: -2070, cn: '传说时代',       en: 'Legendary era (pre-Xia)' },
  { start: -2070,  end: -1600, cn: '夏',             en: 'Xia dynasty' },
  { start: -1600,  end: -1046, cn: '商',             en: 'Shang dynasty' },
  { start: -1046,  end: -771,  cn: '西周',           en: 'Western Zhou' },
  { start: -770,   end: -476,  cn: '春秋',           en: 'Spring & Autumn period' },
  { start: -475,   end: -221,  cn: '战国',           en: 'Warring States period' },
  { start: -221,   end: -206,  cn: '秦',             en: 'Qin dynasty' },
  { start: -206,   end: 9,     cn: '西汉',           en: 'Western Han' },
  { start: 9,      end: 25,    cn: '新莽',           en: 'Xin (Wang Mang)' },
  { start: 25,     end: 220,   cn: '东汉',           en: 'Eastern Han' },
  { start: 220,    end: 280,   cn: '三国',           en: 'Three Kingdoms' },
  { start: 280,    end: 420,   cn: '晋 / 十六国',    en: 'Jin / Sixteen Kingdoms' },
  { start: 420,    end: 589,   cn: '南北朝',         en: 'Northern & Southern dynasties' },
  { start: 589,    end: 618,   cn: '隋',             en: 'Sui dynasty' },
  { start: 618,    end: 907,   cn: '唐',             en: 'Tang dynasty' },
  { start: 907,    end: 960,   cn: '五代十国',       en: 'Five Dynasties & Ten Kingdoms' },
  { start: 960,    end: 1127,  cn: '北宋',           en: 'Northern Song' },
  { start: 1127,   end: 1279,  cn: '南宋',           en: 'Southern Song' },
  { start: 1271,   end: 1368,  cn: '元',             en: 'Yuan dynasty (Mongol)' },
  { start: 1368,   end: 1644,  cn: '明',             en: 'Ming dynasty' },
  { start: 1644,   end: 1912,  cn: '清',             en: 'Qing dynasty' },
  { start: 1912,   end: 1949,  cn: '中华民国',       en: 'Republic of China' },
  { start: 1949,   end: 9999,  cn: '中华人民共和国', en: 'People\'s Republic of China' },
];

// 朝代覆盖年份。返回 { cn, en } 或 null。重叠年份(北宋/南宋 跟 元 的 1271-1279)取较晚开始的。
export function getChinaDynastyForYear(numYear) {
  if (typeof numYear !== 'number' || isNaN(numYear)) return null;
  // 从后往前找最合适的(取最近一个 start <= year < end)
  var match = null;
  for (var i = DYNASTIES.length - 1; i >= 0; i--) {
    var d = DYNASTIES[i];
    if (numYear >= d.start && numYear < d.end) {
      if (!match || d.start > match.start) match = d;
    }
  }
  return match ? { cn: match.cn, en: match.en } : null;
}

// 判断 topic 是不是「中国本土」topic (锚点跟自己冗余,不显示)
export function isChinaTopic(topicId) {
  if (!topicId) return false;
  return /^(qin-china|han-china|tang-song-china)/.test(topicId);
}
