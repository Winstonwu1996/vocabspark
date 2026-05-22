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
    eventCn: '1127 靖康之变 — 金军攻陷开封，北宋的人与文物一起被掳/失散',
    eventEn: 'The 1127 Jingkang catastrophe — Jin armies sack Kaifeng; people and cultural treasures are seized or scattered',
    excerptA: {
      whoCn: '宋徽宗（亡国皇帝，集中了全国书画又全部失去）',
      whoEn: 'Emperor Huizong (the fallen emperor who concentrated the empire\'s art — and lost all of it)',
      sourceCn: '本课 Huizong 视角 · 回望 1119 内府',
      sourceEn: 'This unit, Huizong lens · looking back on his 1119 imperial collection',
      quoteCn: '把所有东西放在一个篮子里，不是保护，是风险。我跟亚历山大图书馆走的是同一条路。',
      quoteEn: 'Putting everything in one basket is not protection — it is risk. I walked the same road as the Library of Alexandria.',
    },
    excerptB: {
      whoCn: '李清照（南渡寡妇，守《金石录》26 年，逃难中失去四分之三）',
      whoEn: 'Li Qingzhao (a widowed refugee who guarded the Records on Metal and Stone for 26 years, losing three-quarters of it in flight)',
      sourceCn: '李清照《金石录后序》约 1135',
      sourceEn: 'Li Qingzhao, postface to the Records on Metal and Stone, c. 1135',
      quoteCn: '然有有必有无，有聚必有散，乃理之常。',
      quoteEn: 'Where there is having, there must be losing; where there is gathering, there must be scattering — this is the way of things.',
    },
    promptCn: '这两个人经历的是同一场 1127 文化浩劫，但一个说「集中就是风险」，一个说「聚散有常」。' +
      '挑一个人：他/她的身份（亡国皇帝 vs 逃难寡妇）为什么让他/她这样想？' +
      '然后——站在他/她的位置上，有什么是他/她看不到的？',
    promptEn: 'Both lived through the same 1127 catastrophe, yet one says "concentration is risk" and the other says ' +
      '"gathering and scattering are the natural way." Pick one person: how does their position ' +
      '(a fallen emperor vs. a widowed refugee) shape the way they frame the loss? ' +
      'Then — standing where they stand, what can\'t they see?',
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
