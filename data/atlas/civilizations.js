// data/atlas/civilizations.js
//
// L3.5 文明圈层 — 跨政体的宗教 + 文字 + 法系覆盖区。
// 重写：用 historical-basemaps 真实政体名合并染色，与 L3 完全对齐。
//
// 数据格式：
//   - sourceNames: 历史快照 GeoJSON 里的政体 NAME 列表（合并染色）
//   - iso: 现代国家代码（小国近似）
//   - customPolygons: 手绘补丁（特殊情况）
// 三种可叠加，渲染器都画。

export const CIVILIZATIONS = {

  // ════════════════════════════════════════════════════════════
  // 1215 中世纪世界（用 world_1200 快照）
  // ════════════════════════════════════════════════════════════
  'medieval-1215': [
    {
      id: 'catholic-christendom',
      label: { cn: '天主教世界', en: 'Catholic Christendom' },
      // 1200 年所有罗马天主教辖下政体
      sourceNames: [
        'Holy Roman Empire', 'Angevin Empire', 'Kingdom of France',
        'Papal States', 'Venice', 'Castilla', 'Portugal', 'Navarre',
        'Hungary', 'Poland', 'Croatia', 'Norway', 'Sweden', 'Denmark', 'Cyprus',
      ],
      color: '#7d4e96',
      opacity: 0.40,
      labelAt: [10, 49],
    },

    {
      id: 'orthodox-1215',
      label: { cn: '东正教世界', en: 'Orthodox Christianity' },
      sourceNames: [
        'Byzantine Empire', 'Bulgar Khanate', 'Other Rus Principalities',
        'Principality of Novgorod', 'Volga Bulgars',
      ],
      color: '#3a7ca5',
      opacity: 0.40,
      labelAt: [33, 55],
    },

    {
      id: 'islamic-1215',
      label: { cn: '伊斯兰世界', en: 'Islamic World' },
      // 1200 年伊斯兰政体（Almohad / Ayyubid 残部 / Seljuk / Khwarezm 合并）
      sourceNames: [
        'Almohad Caliphate',
        'Sultanate of Delhi',  // 1206 立国
        // Ayyubid / Seljuk Rum / Khwarezmian / Hafsid / Marinid 不在 world_1200 entity 列表
        // 由 islamic-1215 的 customPolygons 补足（已有 Al-Andalus / Seljuk Rum / Khwarezm 多边形）
      ],
      color: '#3da57a',
      opacity: 0.40,
      labelAt: [42, 30],
    },
  ],

  // ════════════════════════════════════════════════════════════
  // 1000 东亚世界（用 world_1000 快照）
  // ════════════════════════════════════════════════════════════
  'east-asia-1000': [
    {
      id: 'sinosphere-1000',
      label: { cn: '中华文化圈', en: 'Sinosphere' },
      // 汉字 + 儒家 + 律令制覆盖区
      sourceNames: [
        'Song Empire', 'Liao', 'Xixia',  // 中国本土三政权（辽虽契丹但用汉字 + 儒）
        'Imperial Japan (Fujiwara)',
        'Annam',  // 大越（独立但深受唐化影响）
      ],
      iso: ['KOR', 'PRK'],  // 高丽（GeoJSON 1000 年没单独标）
      color: '#c46b30',
      opacity: 0.32,
      labelAt: [115, 36],
    },

    {
      id: 'tibetan-buddhist-1000',
      label: { cn: '藏传佛教 / 草原宗教', en: 'Tibetan Buddhism / Steppe Religions' },
      sourceNames: ['Tibet'],
      color: '#8a6f9c',
      opacity: 0.32,
      labelAt: [88, 33],
    },

    {
      id: 'indic-1000',
      label: { cn: '印度文明圈', en: 'Indic Civilization' },
      sourceNames: ['Chola state', 'Palas', 'minor Hindu and Buddhist states'],
      iso: ['LKA','NPL','BTN'],
      color: '#d4af37',
      opacity: 0.32,
      labelAt: [80, 22],
    },

    {
      id: 'islamic-asia-1000',
      label: { cn: '伊斯兰世界', en: 'Islamic World' },
      sourceNames: ['Ghaznavid Emirate', 'Buyid Emirate', 'Islamic city-states'],
      iso: ['SAU','SYR','LBN','JOR'],
      color: '#3da57a',
      opacity: 0.32,
      labelAt: [60, 36],
    },

    {
      id: 'theravada-buddhist-1000',
      label: { cn: '南传佛教 + 印度化东南亚', en: 'Theravada + Indianized SE Asia' },
      sourceNames: ['Kingdom of Pagan', 'Khmer Empire', 'Srivijaya Empire', 'Champa'],
      color: '#a07cb8',
      opacity: 0.30,
      labelAt: [102, 12],
    },
  ],

  // ════════════════════════════════════════════════════════════
  // 480 BC 古典世界（用 world_bc500）
  // ════════════════════════════════════════════════════════════
  'classical-bc500': [
    {
      id: 'hellenic',
      label: { cn: '希腊文明（多神教）', en: 'Hellenic civilization' },
      sourceNames: ['Greek city-states', 'Rome', 'Sabini', 'Etrurians', 'Samnites', 'Boii', 'Illyrians'],
      color: '#5fa8a0',
      opacity: 0.36,
      labelAt: [22, 39],
    },
    {
      id: 'persian-zoroastrian',
      label: { cn: '波斯文明（琐罗亚斯德教）', en: 'Persian / Zoroastrian' },
      sourceNames: ['Achaemenid Empire'],
      color: '#a07cb8',
      opacity: 0.36,
      labelAt: [55, 32],
    },
    {
      id: 'phoenician-bc500',
      label: { cn: '迦太基-腓尼基文明', en: 'Carthaginian / Phoenician' },
      sourceNames: ['Carthaginian Empire', 'Saba'],
      color: '#c69954',
      opacity: 0.36,
      labelAt: [10, 34],
    },
    {
      id: 'indic-bc500',
      label: { cn: '印度吠陀文明', en: 'Vedic / Indic' },
      sourceNames: ['Magadha', 'Hindu kingdoms', 'Gandhāra', 'Avanti', 'Kuru', 'Kasi', 'Pancala', 'Kosala', 'Vatsa', 'Malla', 'Surasena', 'Simhala'],
      color: '#d4af37',
      opacity: 0.32,
      labelAt: [80, 22],
    },
    {
      id: 'sinitic-bc500',
      label: { cn: '华夏文明（春秋战国）', en: 'Chinese (Zhou)' },
      sourceNames: ['Zhou states'],
      color: '#c46b30',
      opacity: 0.32,
      labelAt: [110, 35],
    },
  ],

  // ════════════════════════════════════════════════════════════
  // 100 AD 古典世界（汉 + 罗马并立 — 用 world_100）
  // ════════════════════════════════════════════════════════════
  'classical-100': [
    {
      id: 'roman-classical',
      label: { cn: '罗马文明', en: 'Roman civilization' },
      sourceNames: ['Roman Empire', 'Dacia', 'Bosporian Kingdom', 'Armenia'],
      color: '#9b3030',
      opacity: 0.36,
      labelAt: [12, 43],
    },
    {
      id: 'sinitic-100',
      label: { cn: '中华文化圈', en: 'Sinosphere' },
      sourceNames: ['Han', 'Silla', 'Paekche', 'Koguryo', 'Gaya', 'Yayoi', 'Hainan'],
      color: '#c46b30',
      opacity: 0.32,
      labelAt: [110, 35],
    },
    {
      id: 'persian-100',
      label: { cn: '帕提亚-波斯文明', en: 'Parthian / Iranian' },
      sourceNames: ['Parthian Empire', 'Suren Kingdom', 'Saka Kingdom', 'Alans', 'Scythians'],
      color: '#a07cb8',
      opacity: 0.36,
      labelAt: [50, 33],
    },
    {
      id: 'indic-100',
      label: { cn: '印度文明', en: 'Indic civilization' },
      sourceNames: ['Hindu kingdoms', 'Satavahanihara', 'Kalinga', 'Simhala'],
      color: '#d4af37',
      opacity: 0.32,
      labelAt: [78, 18],
    },
    {
      id: 'kushan-buddhist',
      label: { cn: '贵霜佛教文明', en: 'Kushan Buddhist' },
      sourceNames: ['Kushan Empire'],
      color: '#8a6f9c',
      opacity: 0.32,
      labelAt: [70, 32],
    },
    {
      id: 'arabian-100',
      label: { cn: '阿拉伯古文明', en: 'Pre-Islamic Arabia' },
      sourceNames: ['Hadramaut', 'Himyarite Kingdom', 'Nabatean Kingdom'],
      color: '#c69954',
      opacity: 0.32,
      labelAt: [45, 20],
    },
  ],

  // ════════════════════════════════════════════════════════════
  // 1500 文艺复兴时代（用 world_1500）
  // ════════════════════════════════════════════════════════════
  'early-modern-1500': [
    {
      id: 'latin-christendom-1500',
      label: { cn: '拉丁基督教世界', en: 'Latin Christendom' },
      sourceNames: ['Holy Roman Empire', 'France', 'England', 'Scottland', 'Portugal', 'Castille',
                    'Navarre', 'Papal States', 'Venice', 'Imperial Hungary', 'Poland-Lithuania',
                    'Teutonic Knights', 'Denmark-Norway', 'Britany', 'Cyprus', 'Georgia'],
      color: '#7d4e96',
      opacity: 0.36,
      labelAt: [10, 49],
    },
    {
      id: 'islamic-1500',
      label: { cn: '伊斯兰世界（鼎盛）', en: 'Islamic World (peak)' },
      sourceNames: ['Mamluke Sultanate', 'Ottoman Empire', 'Sultanate of Delhi', 'Bahmani Kingdom',
                    'Wattasid Caliphate', 'Hafsid Caliphate', 'Zayyanid Caliphate',
                    'Songhai', 'Mali', 'Bornu-Kanem', 'Hausa States',
                    'Aceh', 'Malacca', 'Malaysian Islamic states',
                    'Islamic city-states', 'Islamic states', 'Yemen', 'Hadramaut', 'Muscat',
                    'Emirate of the White Sheep Turks', 'Adal'],
      color: '#3da57a',
      opacity: 0.36,
      labelAt: [40, 30],
    },
    {
      id: 'sinitic-1500',
      label: { cn: '中华文化圈（明）', en: 'Sinosphere (Ming)' },
      sourceNames: ['Ming Chinese Empire', 'Đại Việt', 'Korea', 'Japan'],
      color: '#c46b30',
      opacity: 0.32,
      labelAt: [115, 36],
    },
    {
      id: 'indic-1500',
      label: { cn: '印度文明', en: 'Indic civilization' },
      sourceNames: ['Bengal', 'Vijayanagara', 'Orissa', 'Rajastan', 'Sinhalese kingdoms'],
      color: '#d4af37',
      opacity: 0.32,
      labelAt: [80, 22],
    },
    {
      id: 'amerindian-1500',
      label: { cn: '美洲文明（前殖民）', en: 'Pre-Columbian Americas' },
      sourceNames: ['Aztec Empire', 'Mixtec Empire', 'Maya city-states', 'Inca Empire'],
      color: '#79a373',
      opacity: 0.32,
      labelAt: [-90, 15],
    },
    {
      id: 'tibetan-1500',
      label: { cn: '藏传佛教', en: 'Tibetan Buddhism' },
      sourceNames: ['Tibet'],
      color: '#8a6f9c',
      opacity: 0.30,
      labelAt: [88, 32],
    },
    {
      id: 'theravada-1500',
      label: { cn: '南传佛教 / 东南亚', en: 'Theravada / SE Asia' },
      sourceNames: ['Cambodia', 'Pegu', 'Burmese kingdoms', 'Champa', 'Laos', 'Arakan'],
      color: '#a07cb8',
      opacity: 0.30,
      labelAt: [102, 14],
    },
  ],

  // ════════════════════════════════════════════════════════════
  // 1530 宗教改革时代（用 world_1530）
  // ════════════════════════════════════════════════════════════
  'early-modern-1530': [
    {
      id: 'catholic-1530',
      label: { cn: '天主教世界（前夕分裂）', en: 'Catholic World (about to split)' },
      sourceNames: ['Holy Roman Empire', 'France', 'Spain', 'Portugal', 'Sicily', 'Naples', 'Sardinia',
                    'Papal States', 'Venice', 'Florence', 'Genoa', 'Savoy', 'Milan',
                    'Britany', 'Habsburg Netherlands', 'Swiss Confederation', 'Republic of the Seven Zenden',
                    'Poland-Llituania', 'England and Ireland', 'Prussia'],
      color: '#7d4e96',
      opacity: 0.36,
      labelAt: [10, 50],
    },
    {
      id: 'orthodox-1530',
      label: { cn: '东正教（莫斯科为新中心）', en: 'Orthodoxy (Muscovy as new center)' },
      sourceNames: ['Tsardom of Muscovy'],
      color: '#3a7ca5',
      opacity: 0.36,
      labelAt: [40, 60],
    },
    {
      id: 'islamic-1530',
      label: { cn: '伊斯兰世界（三大火药帝国）', en: 'Islamic World (three gunpowder empires)' },
      sourceNames: ['Ottoman Empire', 'Safavid Empire', 'Mughal Empire',
                    'Crimean Khanate', 'Astrakhan Khanate', 'Khanate of Sibir', 'Khiva Khanate',
                    'Kazan Khanate', 'Bukara Khanate', 'Quazaq Khanate', 'Nogai Horde',
                    'Watassid Morocco', 'central Asian khanates',
                    'Hausa States', 'Songhai', 'Bornu-Kanem', 'Adal',
                    'Malaysian Islamic states', 'Islamic city-states', 'Islamic and Hindu states'],
      // Mamluke 1517 已被奥斯曼吞并，1530 没条目
      color: '#3da57a',
      opacity: 0.36,
      labelAt: [50, 32],
    },
    {
      id: 'sinitic-1530',
      label: { cn: '中华文化圈', en: 'Sinosphere' },
      sourceNames: ['Ming Chinese Empire', 'Đại Việt', 'Korea', 'Japan (Warring States)'],
      color: '#c46b30',
      opacity: 0.32,
      labelAt: [115, 36],
    },
    {
      id: 'indic-1530',
      label: { cn: '印度文明', en: 'Indic civilization' },
      sourceNames: ['Vijayanagara', 'Orissa', 'Bengal', 'Rajputana',
                    'Bidar', 'Bijapur', 'Ahmadnagar', 'Golkonda', 'Saylan'],
      color: '#d4af37',
      opacity: 0.32,
      labelAt: [80, 22],
    },
    {
      id: 'amerindian-1530',
      label: { cn: '美洲（殖民冲击中）', en: 'Americas (under colonial impact)' },
      sourceNames: ['Inca Empire', 'Mayas', 'Vice Royalty of New Spain'],
      color: '#79a373',
      opacity: 0.30,
      labelAt: [-85, 10],
    },
    {
      id: 'tibetan-1530',
      label: { cn: '藏传佛教', en: 'Tibetan Buddhism' },
      sourceNames: ['Tibet'],
      color: '#8a6f9c',
      opacity: 0.30,
      labelAt: [88, 32],
    },
  ],

  // ════════════════════════════════════════════════════════════
  // 1776-1787 美国独立 + 制宪（用 world_1783）
  // ════════════════════════════════════════════════════════════
  'modern-1783': [
    {
      id: 'western-christendom-1783',
      label: { cn: '西方基督教世界', en: 'Western Christendom' },
      sourceNames: ['United Kingdom', 'France', 'Spain', 'Portugal', 'Netherlands', 'Austrian Netherlands',
                    'Prussia', 'Bavaria', 'Saxony', 'Hanover', 'Hamburg', 'Hohenzollern',
                    'Brunswick', 'Anhalt', 'Württemberg', 'Baden', 'Sweden', 'Denmark-Norway', 'Poland',
                    'Austrian Empire', 'Kingdom of Sardinia', 'Republic of the Seven Zenden',
                    'Swiss Confederation', 'Geneva', 'Kingdom of Ireland', 'Luxembourg', 'Lombardy',
                    'Vice-Royalty of New Granada', 'Vice-Royalty of New Spain', 'Vice-Royalty of Brazil',
                    'Vice-Royalty of Peru', 'Viceroyalty of the Río de la Plata', 'Paraguay',
                    'United States of America', 'Quebec', "Rupert's Land"],
      color: '#7d4e96',
      opacity: 0.34,
      labelAt: [10, 48],
    },
    {
      id: 'orthodox-1783',
      label: { cn: '东正教（俄罗斯帝国）', en: 'Orthodox Russia' },
      sourceNames: ['Russian Empire'],
      color: '#3a7ca5',
      opacity: 0.36,
      labelAt: [60, 60],
    },
    {
      id: 'islamic-1783',
      label: { cn: '伊斯兰世界', en: 'Islamic World' },
      sourceNames: ['Ottoman Empire', 'Persia', 'central Asian khanates',
                    'Algiers', 'Tunis', 'Tripolitania', 'Cyrenaica', 'Morocco',
                    'Oman', 'Nejd', 'Yemen', 'Mysore', 'Asante', 'Songhai', 'Bornu-Kanem',
                    'Bagirmi', 'Wadai', 'Darfur', 'Funj', 'Hausa States'],
      color: '#3da57a',
      opacity: 0.34,
      labelAt: [40, 28],
    },
    {
      id: 'sinitic-1783',
      label: { cn: '中华文化圈（清）', en: 'Sinosphere (Qing)' },
      sourceNames: ['Qing Empire', 'Korea', 'Japan', 'Đại Việt', 'Cochin China'],
      color: '#c46b30',
      opacity: 0.32,
      labelAt: [110, 36],
    },
    {
      id: 'indic-1783',
      label: { cn: '印度文明（莫卧儿衰落）', en: 'Indic (Mughal decline)' },
      sourceNames: ['India', 'Bengal', 'Maratha Confederacy', 'Mahratta states', 'Travancore',
                    'Carnatic', 'Madras', 'Goa', 'Sind', 'Oudh', 'Multan', 'Lahore', 'Assam'],
      color: '#d4af37',
      opacity: 0.32,
      labelAt: [80, 22],
    },
    {
      id: 'theravada-1783',
      label: { cn: '南传佛教', en: 'Theravada' },
      sourceNames: ['Burma', 'Cambodia', 'Rattanakosin Kingdom', 'Arakan'],
      color: '#a07cb8',
      opacity: 0.30,
      labelAt: [102, 14],
    },
  ],

  // ════════════════════════════════════════════════════════════
  // 1865-1880 工业化时代（用 world_1880）
  // ════════════════════════════════════════════════════════════
  'modern-1880': [
    {
      id: 'western-1880',
      label: { cn: '西方文明（工业化 + 殖民）', en: 'Western (industrial + colonial)' },
      sourceNames: ['United Kingdom of Great Britain and Ireland', 'France', 'Spain', 'Portugal',
                    'Italy', 'Germany', 'Austria Hungary', 'Belgium', 'Netherlands', 'Switzerland',
                    'Sweden–Norway', 'Denmark', 'Iceland', 'Luxembourg', 'Malta',
                    'United States of America', 'Canada', 'Mexico', 'Argentina', 'Kingdom of Brazil',
                    'Chile', 'Peru', 'Colombia', 'Ecuador', 'Venezuela', 'Bolivia', 'Paraguay', 'Uruguay',
                    'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Belize',
                    'Haiti', 'Dominican Republic', 'Cape Colony', 'Natal'],
      // Cuba 1880 仍属西班牙殖民（隶属 Spain），不单列
      color: '#7d4e96',
      opacity: 0.34,
      labelAt: [10, 48],
    },
    {
      id: 'orthodox-1880',
      label: { cn: '东正教世界', en: 'Orthodox World' },
      sourceNames: ['Russian Empire', 'Greece', 'Romania', 'Bulgaria', 'Serbia', 'Montenegro', 'Bosnia-Herzegovina'],
      color: '#3a7ca5',
      opacity: 0.36,
      labelAt: [55, 60],
    },
    {
      id: 'islamic-1880',
      label: { cn: '伊斯兰世界（衰落 / 殖民冲击）', en: 'Islamic World (under colonial pressure)' },
      sourceNames: ['Ottoman Empire', 'Egypt', 'Persia', 'Afghanistan', 'central Asian khanates',
                    'Bokhara Khanate', 'Sokoto Caliphate', 'Tukular Caliphate', 'Wassoulou Empire',
                    'Wadai Empire', 'Sultanate of Damagaram', 'Sultinate of Zanzibar',
                    'Trucial Oman', 'Qatar', 'Oman', 'Arabia', 'Algeria (FR)', 'Morocco',
                    'Harer (Egypt)', 'Kanem-Bornu'],
      color: '#3da57a',
      opacity: 0.34,
      labelAt: [40, 28],
    },
    {
      id: 'sinitic-1880',
      label: { cn: '东亚文化圈（明治 + 半殖民）', en: 'East Asia (Meiji + semi-colonial)' },
      sourceNames: ['Manchu Empire', 'Imperial Japan', 'Korea', 'Annam', 'Taiwan', 'French Indochina'],
      color: '#c46b30',
      opacity: 0.32,
      labelAt: [115, 36],
    },
    {
      id: 'indic-1880',
      label: { cn: '印度（英属）', en: 'Indic (British Raj)' },
      sourceNames: ['British Raj', 'Nepal', 'Bhutan', 'Ceylon'],
      color: '#d4af37',
      opacity: 0.32,
      labelAt: [80, 22],
    },
    {
      id: 'theravada-1880',
      label: { cn: '南传佛教', en: 'Theravada' },
      sourceNames: ['Rattanakosin Kingdom', 'Annam'],
      color: '#a07cb8',
      opacity: 0.30,
      labelAt: [102, 14],
    },
  ],

  // ════════════════════════════════════════════════════════════
  // 1347 欧亚世界（黑死病时代，用 world_1300 快照）
  // ════════════════════════════════════════════════════════════
  'eurasia-1347': [
    {
      id: 'latin-christendom-1347',
      label: { cn: '拉丁基督教', en: 'Latin Christendom' },
      sourceNames: [
        'Holy Roman Empire', 'France', 'English territory', 'Scotland',
        'Castile', 'Portugal', 'Navarre',
        'Papal States', 'Sicily', 'Venice', 'Sardinia', 'Corsica',
        'Hungary', 'Poland',
        'Norway', 'Sweden', 'Denmark',
        'Teutonic Knights',
      ],
      // Aragon / Bohemia / Iceland 在 world_1300 没条目（合并入邻国或缺失）
      color: '#7d4e96',
      opacity: 0.36,
      labelAt: [10, 50],
    },

    {
      id: 'orthodox-1347',
      label: { cn: '东正教', en: 'Orthodoxy' },
      sourceNames: [
        'Byzantine Empire', 'Trebizond', 'Bulgar Khanate',
        'Novgorod', 'Ryazan', 'Raška', 'Georgia',
      ],
      color: '#3a7ca5',
      opacity: 0.36,
      labelAt: [37, 56],
    },

    {
      id: 'islamic-1347',
      label: { cn: '伊斯兰世界', en: 'Islamic World' },
      // 1300 年蒙古汗国大多伊斯兰化（Berke 1313 / Ghazan 1295 / Chagatai 后期）
      // + 北非 Mamluk 后裔 + Marinid + 兴起的奥斯曼
      sourceNames: [
        'Mamluke Sultanate', 'Hafsid Caliphate', 'Seljuk Caliphate',
        'Ilkhanate', 'Khanate of the Golden Horde', 'Chagatai Khanate',
        'Sultanate of Delhi', 'Granada',
        'Yemen', 'Hadramaut', 'Muscat',
      ],
      color: '#3da57a',
      opacity: 0.36,
      labelAt: [44, 32],
    },

    {
      id: 'sinosphere-yuan',
      label: { cn: '东亚文化圈（蒙古元下）', en: 'East Asian Sinosphere (under Yuan)' },
      // Yuan = Great Khanate；统治者藏传，汉地仍儒
      sourceNames: ['Great Khanate', 'Shogun Japan (Kamakura)', 'Đại Việt'],
      iso: ['KOR', 'PRK'],
      color: '#c46b30',
      opacity: 0.32,
      labelAt: [110, 36],
    },

    {
      id: 'tibetan-buddhist-yuan',
      label: { cn: '藏传佛教 / 蒙古宗教', en: 'Tibetan Buddhism / Mongol Religion' },
      sourceNames: ['Tibet'],
      color: '#8a6f9c',
      opacity: 0.30,
      labelAt: [90, 33],
    },
  ],
};
