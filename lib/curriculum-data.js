/* ─── Know U. Learning — Curriculum Inference Library ──────────────────
 *
 * 根据用户的所在地 + 学校类型 + 年级，推断使用的课程框架 + 教材 + 进度
 *
 * 数据源:
 *   - California Department of Education (cde.ca.gov)
 *   - 各 district 的 textbook adoption records
 *   - HSS-2016 framework (现行)
 *
 * 设计原则:
 *   - 中国移民集中的 California 学区精确覆盖
 *   - 其他州/地区给保守 fallback 但仍有用
 *   - 私立学校无法准确推断教材，给"教材多样"+常见候选
 */

// ─── California 重点华人学区（公立 7 年级，2026 现行） ──────────────────
export var CALIFORNIA_DISTRICTS = {
  "irvine": {
    name: "Irvine USD",
    cities: ["irvine", "irvine, ca", "尔湾"],
    framework: "California HSS Framework (2016)",
    textbook: {
      grade6: "McGraw-Hill IMPACT California, Grade 6",
      grade7: "McGraw-Hill IMPACT California, Grade 7 — World History & Geography: Medieval & Early Modern Times (2019)",
      grade8: "McGraw-Hill IMPACT California, Grade 8 — US History & Geography",
    },
    magnaCartaUnit: "7.6.5",
    magnaCartaQuarter: "Q3 (2 月底—3 月中)",
    eslSupport: "SEI (Structured English Immersion) + Designated/Integrated ELD",
    confidence: "high",
    sources: ["IUSD support.iusd.org textbook adoption page"],
  },
  "cupertino": {
    name: "Cupertino USD",
    cities: ["cupertino", "库比蒂诺"],
    framework: "California HSS Framework (2016)",
    textbook: {
      grade7: "Most likely McGraw-Hill IMPACT California or HMH (待确认)",
    },
    magnaCartaUnit: "7.6.5",
    magnaCartaQuarter: "Q3",
    confidence: "medium",
  },
  "fremont": {
    name: "Fremont USD",
    cities: ["fremont", "弗里蒙特"],
    framework: "California HSS Framework (2016)",
    textbook: { grade7: "California 标准教材，具体待确认" },
    magnaCartaUnit: "7.6.5",
    magnaCartaQuarter: "Q3",
    confidence: "medium",
  },
  "palo-alto": {
    name: "Palo Alto USD",
    cities: ["palo alto", "帕罗奥图"],
    framework: "California HSS Framework (2016)",
    textbook: { grade7: "California 标准教材" },
    magnaCartaUnit: "7.6.5",
    magnaCartaQuarter: "Q3",
    confidence: "medium",
  },
  "san-marino": {
    name: "San Marino USD",
    cities: ["san marino", "圣马力诺"],
    framework: "California HSS Framework (2016)",
    textbook: { grade7: "California 标准教材" },
    magnaCartaUnit: "7.6.5",
    confidence: "medium",
  },
  "arcadia": {
    name: "Arcadia USD",
    cities: ["arcadia", "亚凯迪亚"],
    framework: "California HSS Framework (2016)",
    textbook: { grade7: "California 标准教材" },
    magnaCartaUnit: "7.6.5",
    confidence: "medium",
  },
  "diamond-bar": {
    name: "Walnut Valley USD (Diamond Bar)",
    cities: ["diamond bar", "钻石吧", "walnut"],
    framework: "California HSS Framework (2016)",
    textbook: { grade7: "California 标准教材" },
    magnaCartaUnit: "7.6.5",
    confidence: "medium",
  },
  "saratoga": {
    name: "Saratoga USD / Los Gatos-Saratoga",
    cities: ["saratoga", "萨拉托加"],
    framework: "California HSS Framework (2016)",
    textbook: { grade7: "California 标准教材" },
    magnaCartaUnit: "7.6.5",
    confidence: "medium",
  },
};

// ─── 其他州的简化覆盖 ──────────────────────────────────────────────────
export var OTHER_STATES = {
  "new-york": {
    name: "New York State",
    cities: ["new york", "nyc", "manhattan", "queens", "brooklyn", "纽约", "曼哈顿"],
    framework: "NY State Social Studies Framework",
    textbook: { grade7: "varies by district — 常见 McGraw-Hill / Pearson" },
    magnaCartaUnit: "Global History Grade 9 (注：NY 把欧洲中世纪放在 9 年级)",
    confidence: "low",
    note: "纽约州 7 年级是 American History (建国-内战)，欧洲中世纪在 9 年级",
  },
  "washington": {
    name: "Washington State",
    cities: ["bellevue", "seattle", "redmond", "贝尔维尤", "西雅图"],
    framework: "WA State Social Studies Standards",
    textbook: { grade7: "varies — 常见 McGraw-Hill / Pearson" },
    magnaCartaUnit: "World History 6-7 grade",
    confidence: "low",
  },
  "texas": {
    name: "Texas",
    cities: ["houston", "dallas", "austin", "休斯顿", "达拉斯"],
    framework: "Texas Essential Knowledge & Skills (TEKS)",
    textbook: { grade7: "Texas History (注：TX 7 年级专门讲德州历史)" },
    magnaCartaUnit: "World History HS",
    confidence: "low",
    note: "德州 7 年级是德州历史，跟 California 完全不同",
  },
  "massachusetts": {
    name: "Massachusetts",
    cities: ["boston", "cambridge", "lexington", "波士顿", "剑桥"],
    framework: "MA History/Social Science Framework",
    textbook: { grade7: "varies" },
    magnaCartaUnit: "World History 7th-8th",
    confidence: "low",
  },
};

// ─── 私立学校通用模板 ─────────────────────────────────────────────────
export var PRIVATE_SCHOOL_DEFAULTS = {
  name: "私立学校（教材多样）",
  framework: "因校而异，常见跟随 ISEE/SSAT 备考路径",
  textbook: { grade7: "常见: McGraw-Hill / Pearson / Houghton Mifflin / Holt 之一，部分校使用 IB / 自编" },
  magnaCartaUnit: "通常在 7-9 年级，具体看课程结构",
  confidence: "low",
  note: "私立学校 history 教学差异极大 — 有的强调原始史料 + DBQ（精英寄宿）；有的偏 narrative storytelling；建议家长直接问学校教学大纲",
};

// ─── 国际学校通用模板 ─────────────────────────────────────────────────
export var INTERNATIONAL_SCHOOL_DEFAULTS = {
  name: "国际学校",
  framework: "通常 IB MYP / AP 或 Cambridge IGCSE",
  textbook: { grade7: "IB MYP units / Cambridge syllabus，跟美国本土不完全一致" },
  magnaCartaUnit: "MYP Year 2-3 (Individuals & Societies)",
  confidence: "low",
};

// ─── 主推断函数 ──────────────────────────────────────────────────────
export var inferCurriculum = function(opts) {
  opts = opts || {};
  var city = (opts.city || "").toLowerCase().trim();
  var schoolType = opts.schoolType || "public";
  var grade = opts.grade || 7;

  // 1. 私立 / 国际学校优先（不依赖城市）
  if (schoolType === "private") {
    return Object.assign({}, PRIVATE_SCHOOL_DEFAULTS, { gradeRequested: grade });
  }
  if (schoolType === "international") {
    return Object.assign({}, INTERNATIONAL_SCHOOL_DEFAULTS, { gradeRequested: grade });
  }

  // 2. 公立 — 按 California 学区匹配
  for (var districtKey in CALIFORNIA_DISTRICTS) {
    var d = CALIFORNIA_DISTRICTS[districtKey];
    for (var i = 0; i < d.cities.length; i++) {
      if (city.includes(d.cities[i])) {
        return Object.assign({}, d, {
          districtKey: districtKey,
          gradeRequested: grade,
          gradeTextbook: d.textbook["grade" + grade] || d.textbook.grade7 || "California 标准教材"
        });
      }
    }
  }

  // 3. 其他州
  for (var stateKey in OTHER_STATES) {
    var s = OTHER_STATES[stateKey];
    for (var j = 0; j < s.cities.length; j++) {
      if (city.includes(s.cities[j])) {
        return Object.assign({}, s, {
          stateKey: stateKey,
          gradeRequested: grade,
          gradeTextbook: s.textbook["grade" + grade] || s.textbook.grade7 || "varies"
        });
      }
    }
  }

  // 4. 完全无法识别 — 通用 fallback
  return {
    name: "未识别学区 (使用通用模板)",
    framework: "美国标准 (具体框架未知)",
    textbook: { grade7: "请家长直接问学校教学大纲" },
    magnaCartaUnit: "通常 7-9 年级",
    confidence: "very-low",
    gradeRequested: grade,
    note: "我们没识别到你所在的学区。课程内容会按 California Grade 7 标准的通用版本提供。如果你的学校教材不同，请告诉老师我们用的是哪个版本。",
  };
};

// ─── 给 AI prompt 用的简短 curriculum 描述 ──────────────────────────
export var formatCurriculumForPrompt = function(curriculum) {
  if (!curriculum) return "未指定课程";
  var lines = [];
  lines.push("- 学区/地区: " + (curriculum.name || "未识别"));
  lines.push("- 课程框架: " + (curriculum.framework || "通用"));
  if (curriculum.gradeTextbook) lines.push("- 教材 (Grade " + curriculum.gradeRequested + "): " + curriculum.gradeTextbook);
  if (curriculum.magnaCartaUnit) lines.push("- Magna Carta 在: " + curriculum.magnaCartaUnit);
  if (curriculum.magnaCartaQuarter) lines.push("- 通常学期: " + curriculum.magnaCartaQuarter);
  if (curriculum.confidence) lines.push("- 推断置信度: " + curriculum.confidence);
  return lines.join("\n");
};
