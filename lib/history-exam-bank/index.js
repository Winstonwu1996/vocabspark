// ─── history exam-bank: AP 真题映射 + 原创仿真题 ────────────────────────
// realExamRefs  = College Board 官方真实考过的 FRQ (年份/题型/主题概括 + 官方出处), 零原文复制。
// practiceQuestions = 我们按 AP 题型自研的仿真练习, 非真题。
// 数据按 topicId 分文件; 渲染见 components/history-engine/ExamBankSection.js。
// pilot: age-of-exploration / civil-war / industrial-revolution (2026-06)。

import * as ageOfExploration1492 from './age-of-exploration-1492.js';
import * as civilWar1861 from './civil-war-1861.js';
import * as industrialRevolution1800 from './industrial-revolution-1800.js';

var EXAM_BANKS = {
  'age-of-exploration-1492': ageOfExploration1492,
  'civil-war-1861': civilWar1861,
  'industrial-revolution-1800': industrialRevolution1800,
};

export function hasExamBank(topicId) {
  return !!EXAM_BANKS[topicId];
}

export function loadExamBank(topicId) {
  var m = EXAM_BANKS[topicId];
  if (!m) return null;
  return m.default || m;
}
