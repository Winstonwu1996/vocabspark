// ─── Sourcing Bridges — 双 lens 一手史料对读（5-22 teach 重设计 / Package 3）──
//
// AP 课程审计核心缺口：teach 全程从不把真实一手史料摆到学生面前让其审问，
// 而整个 AP 考试 100% 挂在「读 stimulus」上（55 MCQ + 3 SAQ + DBQ 全是源材料题）。
// 当前设计跳过了 DBQ 6 个得分点里的 4 个，其中最硬的是 HIPP sourcing。
//
// 三 lens 框架本来就是 producer / interpreter / affected-party 的 POV 分布——
// 正好等于一套 DBQ 文档集。本模块把两个 lens 已经写好的原文摘录并排，
// 在 N10 原地呈现（不插节点、turnIndex 语义不变），让学生做一次真实的 HIPP：
//   - 谁说的（who / 身份）
//   - 他的位置为什么让他这样说（purpose / point of view）
//   - 站在他的位置，有什么是他看不到的（limitation）
// → 直接命中 DBQ Point 4「用 HIPP 给文档 sourcing」。
//
// 设计要点：
//   - 按 topicId 注册，增量可填（一个 topic 一条，没有的 topic N10 行为不变）
//   - showAtLens 指定只在某一个 lens 的 N10 出现一次，避免三 lens 重复
//   - nodeIdx 默认 9（N10, 0-based）——in-place，不动节点数
//   - 引文一律从现有 storyboard 正文里搬，零新内容创作，只做策展
//
// 完成状态：
//   ✅ tang-song-china（参考实现：1127 文化浩劫 — Huizong vs Li Qingzhao）
//   ⏳ 其余 7 个 live topic 待策展（magna-carta / crusades / black-death /
//      renaissance / reformation / age-of-exploration / mali-empire）

export var SOURCING_BRIDGES = {
  'tang-song-china': {
    showAtLens: 'emperor-huizong',
    nodeIdx: 9, // N10 — Huizong 刚讲完 1127 内府尽失，正好接 Li Qingzhao 的对照
    // ⚠️ 史料诚信：两段都必须是真实可考的一手史料（kind: 'primary'）。
    //   早期版本把"集中=风险"这句 app 演绎的话冒充史料 A，与真实的《金石录后序》
    //   并排同样式 → 训练学生把虚构当档案分析（AP 反技能）。已换成徽宗真实囚禁诗。
    eventCn: '1127 靖康之变后 — 两个人都失去了一生所珍视的，各自写下面对失去的话',
    eventEn: 'After the 1127 catastrophe — two people who each lost what they treasured most, writing about how they face the loss',
    excerptA: {
      kind: 'primary',
      whoCn: '宋徽宗（被金军北掳的亡国皇帝，囚于五国城）',
      whoEn: 'Emperor Huizong (the fallen emperor, taken north as a captive, imprisoned in the Five Kingdoms City)',
      sourceCn: '宋徽宗《在北题壁》· 五国城囚禁期 约 1130-1135（一手史料）',
      sourceEn: 'Emperor Huizong, "Inscribed on the Wall in the North," written in captivity c. 1130-1135 (primary source)',
      quoteCn: '家山回首三千里，目断山南无雁飞。',
      quoteEn: 'Looking back at home three thousand li away, my eyes break at the southern mountains — no wild geese fly.',
    },
    excerptB: {
      kind: 'primary',
      whoCn: '李清照（南渡寡妇，守《金石录》26 年，逃难中失去四分之三）',
      whoEn: 'Li Qingzhao (a widowed refugee who guarded the Records on Metal and Stone for 26 years, losing three-quarters of it in flight)',
      sourceCn: '李清照《金石录后序》约 1135（一手史料）',
      sourceEn: 'Li Qingzhao, postface to the Records on Metal and Stone, c. 1135 (primary source)',
      quoteCn: '然有有必有无，有聚必有散，乃理之常。',
      quoteEn: 'Where there is having, there must be losing; where there is gathering, there must be scattering — this is the way of things.',
    },
    promptCn: '两个人都在 1127 之后失去了一生所珍视的。徽宗（被掳的皇帝）写的是回望家乡、盼一封永远不来的信；' +
      '李清照（逃难的寡妇）写的是「聚散本就是常理」。挑一个人：他/她的身份和处境，' +
      '为什么让他/她用这种方式面对失去？再想一步——站在他/她的位置，有什么是他/她看不到、或不愿承认的？',
    promptEn: 'Both lost what they treasured most after 1127. Huizong (the captive emperor) writes of gazing back toward home, ' +
      'waiting for a letter that will never come; Li Qingzhao (the widowed refugee) writes that "gathering and scattering ' +
      'are simply the way of things." Pick one person: how do their identity and situation shape the way they face the loss? ' +
      'Then go one step further — standing where they stand, what can\'t they see, or won\'t admit?',
  },
};

// ─── helper ──
// 返回当前 topic+lens 在指定 idx 是否有 sourcing bridge（给 runtime 用）
export var getSourcingBridge = function(topicId, lensId, idx) {
  var b = SOURCING_BRIDGES[topicId];
  if (!b) return null;
  // lensId 没传时（v1 单 storyboard）放行；传了就必须匹配 showAtLens
  if (lensId && b.showAtLens && lensId !== b.showAtLens) return null;
  if (typeof idx === 'number' && typeof b.nodeIdx === 'number' && idx !== b.nodeIdx) return null;
  return b;
};
