/* ─── Know U. Learning — History Glossary ────────────────────────────
 *
 * 给对话里出现的人名/地名/术语提供"点一下解释"功能。
 * 设计：键是规范化大小写的 lookup key，值是一段 50-100 字的解释。
 *
 * Winston review #7：中国孩子对 Aristotle / Jefferson / Innocent III
 * 这种专名都需要解释。美国孩子可能也要查（不是常识）。
 *
 * 后续可加：用户点击后 AI 实时生成更深入的解释（按用户已学知识量定深度）。
 */

export var GLOSSARY = {
  // ── 人物 ──
  "King John": {
    type: "person",
    cn: "约翰国王",
    brief: "1199-1216 在位的英格兰国王。打仗输给法国，丢了诺曼底；为了打仗不停加税；残忍又抠门。1215 被贵族逼着签 Magna Carta。\n他是 Robin Hood 故事里那个反派 — Prince John。",
    when: "1166-1216",
    where: "英格兰"
  },
  "Aristotle": {
    type: "person",
    cn: "亚里士多德",
    brief: "古希腊哲学家（公元前 384-322），柏拉图的学生。他的《政治学》写过『让法律统治，比让某一个人统治更恰当』— 这就是 *rule of law* 概念的最早表述，比 Magna Carta 早 1500 年。",
    when: "前 384-322 BC",
    where: "古希腊雅典"
  },
  "Jefferson": {
    type: "person",
    cn: "杰斐逊",
    brief: "Thomas Jefferson — 美国独立宣言的主笔（1776），第三任美国总统。他写的『all men are created equal』和『unalienable rights』直接来自 Magna Carta + 启蒙思想的传统。",
    when: "1743-1826",
    where: "美国弗吉尼亚"
  },
  "Innocent III": {
    type: "person",
    cn: "教皇英诺森三世",
    brief: "1198-1216 在位的教皇 — 中世纪权力最大的教皇之一。1213 年 King John 把英国献给他当封地。1215 年 8 月写信宣布 Magna Carta 无效，但贵族不在意。",
    when: "1160-1216",
    where: "罗马"
  },
  "Isabella of Angoulême": {
    type: "person",
    cn: "伊莎贝拉王后",
    brief: "King John 的第二任妻子，1200 年结婚（她当时 12 岁，King John 33 岁）。据说 1215 那场危机里她劝 John 让步签字。",
    when: "1188-1246",
    where: "英格兰"
  },
  "Henry IV": {
    type: "person",
    cn: "亨利四世（神圣罗马帝国）",
    brief: "1056-1106 在位的神圣罗马帝国皇帝。1077 年跟教皇 Gregory VII 吵翻，被『逐出教会』。他亲自跑到意大利北部 Canossa 城堡外，**跪在雪地里 3 天**求教皇原谅 — 中世纪政教二元的标志事件。",
    when: "1050-1106",
    where: "神圣罗马帝国"
  },
  "Robert Fitzwalter": {
    type: "person",
    cn: "罗伯特·菲茨沃尔特",
    brief: "1215 反叛贵族领袖之一，自封『上帝与圣教会的军长』。是把 King John 逼到 Runnymede 的核心人物。",
    when: "约 1162-1235",
    where: "英格兰"
  },

  // ── 地名 ──
  "Runnymede": {
    type: "place",
    cn: "兰尼米德（草地）",
    brief: "伦敦西南约 30 km 的一片泰晤士河边草地。1215 年 6 月 15 日 King John 就是在这儿被贵族逼着签的 Magna Carta。今天那里还立着纪念碑。",
    where: "英格兰萨里郡"
  },
  "Canossa": {
    type: "place",
    cn: "卡诺萨",
    brief: "意大利北部一个城堡的名字。1077 年神圣罗马帝国皇帝 Henry IV 跑到这儿外面跪雪地 3 天求教皇原谅。后来『去 Canossa』成了西方语言里『屈膝认错』的代名词。",
    where: "意大利北部"
  },
  "Constantinople": {
    type: "place",
    cn: "君士坦丁堡",
    brief: "拜占庭帝国首都，1453 年被奥斯曼帝国攻占后改名 **伊斯坦布尔（Istanbul）**。今天是土耳其的首都。同一座城市，同一片土地 — 名字变了，主人换了。",
    where: "欧亚交界（今土耳其）"
  },

  // ── 文献/概念 ──
  "Magna Carta": {
    type: "document",
    cn: "大宪章",
    brief: "1215 年签的拉丁文契约 — 字面意思是『大特许状』(*Great Charter*)。原版有 63 条，最有名的是 Clause 39（任何自由人不得未经审判被监禁）和 Clause 40（公道不能被买卖、拒绝、拖延）。今天英美法系几乎所有『国王/政府不能任意整人』的法理都从这儿长出来。",
    when: "1215 年 6 月 15 日"
  },
  "Clause 39": {
    type: "document",
    cn: "第 39 条",
    brief: "Magna Carta 最重要的一条：『No free man shall be seized or imprisoned... except by the lawful judgment of his equals or by the law of the land.』— 任何自由人不得被任意逮捕监禁，除非经过同等地位人的合法审判，或经过这片土地的法律。这是 *due process* 和 *rule of law* 的种子。"
  },
  "Tang Code": {
    type: "document",
    cn: "唐律疏议",
    brief: "唐高宗 651 年颁布的中国法典，30 卷。比 Magna Carta 早 564 年。规模大得多，规定了官员/平民的所有罪责和处理。但有一个根本不同 — **不管皇帝**。皇帝就是法。",
    when: "651 AD",
    where: "中国唐朝"
  },
  "lex terrae": {
    type: "concept",
    cn: "土地的法律",
    brief: "拉丁文，意思是『一片土地世代沿用的法律』。Magna Carta Clause 39 用了这个词 — 强调法律来自传统，不是某个人临时定的。这是中国和欧洲法治路径的关键分岔点。"
  },
  "Pope": {
    type: "concept",
    cn: "教皇",
    brief: "罗马公教的最高领袖，被认为是上帝在世间的代理人。中世纪欧洲教皇有巨大权力 — 能逐国王出教会、能宣布国王的法律无效。中国没有这种独立的宗教权威。"
  },
  "excommunicate": {
    type: "concept",
    cn: "逐出教会",
    brief: "教皇宣布某人被开除出公教会 — 意味着此人不能领圣礼、死后不能进天堂。中世纪是非常严重的惩罚，能让国王跪雪地求情（见 Henry IV）。"
  },
};

// 找到文本里所有可点击的术语，返回 [{term, start, end}]
export var findGlossaryHits = function(text) {
  if (!text) return [];
  var hits = [];
  Object.keys(GLOSSARY).forEach(function(term) {
    var idx = 0;
    while ((idx = text.indexOf(term, idx)) !== -1) {
      // 避免在已识别的范围内重复（更长的词优先）
      var conflict = hits.find(function(h) { return idx < h.end && idx + term.length > h.start; });
      if (!conflict) {
        hits.push({ term: term, start: idx, end: idx + term.length });
      }
      idx += term.length;
    }
  });
  // 按起始位置排序
  hits.sort(function(a, b) { return a.start - b.start; });
  return hits;
};

export var lookupTerm = function(term) {
  return GLOSSARY[term] || null;
};
