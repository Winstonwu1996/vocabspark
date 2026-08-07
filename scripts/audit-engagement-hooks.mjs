#!/usr/bin/env node
// ─── 全局扫描所有 storyboard 节点 engagementHook,找可疑的「想一想」prompt ──
// 用户线上反馈: tang-song hz-n10「5 个保全样本 4 个用分散 + 复制」cross-Topic 比较看不懂。
// 这次系统性扫一遍,避免类似问题散落在其他课/节点。
//
// 启发式 (P0 优先级):
//   ① cross-Topic 关键词: 提到 Mali/Timbuktu/Gutenberg/95 Theses/Columbus/Aztec/...
//      (本 topic 之外的具体地名/事件,假设学过别的课)
//   ② 多重 N-对比综合: "5 个样本" "3 个" "5 种" 这种 cross-Topic 集合性表述
//   ③ 英文术语堆叠: 一句话 ≥3 个独立英文专名/术语 (容易压垮 ESL 7 年级)
//   ④ 过长 (>120 CN char): 不是问题就是密度过大
//
// 输出: 标记每条可疑的 hook,人/Agent 看后判断 within-topic 化。
import { listStoryboards, hasLenses, loadAllStoryboards } from '../lib/history-storyboards/index.js';
// storyboard 已改按需加载 —— 审计脚本要遍历全部课程, 显式全量载入
const STORYBOARDS = await loadAllStoryboards();

// 跨 topic 关键词. keyword 用 \b word-boundary regex, 避免 "princip" 误中 "Principia"
var CROSS_TOPIC_KEYWORDS = {
  'mali': [/\bmali\b/i, /\btimbuktu\b/i, /\bmansa musa\b/i, /\bsa['']di\b/i, /\btarikh es-sudan\b/i, /\bhaidara\b/i],
  'renaissance': [/\bgutenberg\b/i, /\bmedici\b/i, /\bsavonarola\b/i, /\blorenzo\b/i],
  'reformation': [/\bluther\b/i, /\b95 theses\b/i, /\b95-theses\b/i, /\bninety-five\b/i, /\bwittenberg\b/i, /\berasmus\b/i],
  'age-of-exploration': [/\bcolumbus\b/i, /\bhispaniola\b/i, /\banacaona\b/i],
  'crusades': [/\burban ii\b/i, /\bjerusalem\b/i, /\bsaladin\b/i],
  'mongol': [/\bgenghis\b/i, /\bsorghaghtani\b/i, /\byelu chucai\b/i, /\bkarakorum\b/i],
  'cold-war': [/\bcuban missile\b/i, /\barkhipov\b/i, /\bkennedy\b/i, /\bkhrushchev\b/i],
  'world-war-one': [/\bprincip\b/i, /\bwilson\b/i, /\btirailleur\b/i, /\bsarajevo\b/i],
  'world-war-two': [/\bholocaust\b/i, /\bsugihara\b/i, /\bspeer\b/i, /\bmanzanar\b/i],
  'magna-carta': [/\brunnymede\b/i, /\bking john\b/i],
  'aztec': [/\bmalintzin\b/i, /\btenochtitlan\b/i, /\bcortes\b/i, /\baztec\b/i],
  'tang-song': [/\bhuizong\b/i, /\bsu shi\b/i, /\bli qingzhao\b/i, /\bjiaozi\b/i, /\bjinshi\b/i, /唐律/, /唐宋/],
  'roman': [/\btrajan\b/i, /\bcaesar\b/i, /\bcicero\b/i, /\baugustus\b/i],
};

// Topic 家族 alias: aztec/malintzin 类内容在 pre-columbian topic 里, 视为本家族
var TOPIC_FAMILY_ALIAS = {
  'pre-columbian': ['aztec'],
};

function inOwnFamily(currentTopic, keywordGroup) {
  if (currentTopic.indexOf(keywordGroup) !== -1) return true;
  var aliases = TOPIC_FAMILY_ALIAS[currentTopic] || [];
  return aliases.indexOf(keywordGroup) !== -1;
}

function matchesCross(text, currentTopic) {
  var hits = [];
  for (var k in CROSS_TOPIC_KEYWORDS) {
    if (inOwnFamily(currentTopic, k)) continue;
    for (var pat of CROSS_TOPIC_KEYWORDS[k]) {
      var m = text.match(pat);
      if (m) hits.push(k + ':' + m[0]);
    }
  }
  return hits;
}

function multiNumberCompare(text) {
  // 找 "5 个" "3 种" "4 样" 等综合集合性表述 + 至少 2 个具体集合数字
  var m = text.match(/[0-9]\s*(个|种|样|样本|样品|位|个对照|条|类|组)/g);
  return m && m.length >= 1;
}

function countEnglishTerms(text) {
  // 找连续大写或带连字符的英文专名(粗略)
  var terms = text.match(/[A-Z][a-zA-Z\-]{2,}(\s+[A-Z][a-zA-Z\-]+)?/g) || [];
  // dedupe
  var uniq = {};
  terms.forEach(function(t) { uniq[t] = 1; });
  return Object.keys(uniq).length;
}

var suspects = [];

for (var topicId of listStoryboards().filter(hasLenses)) {
  var lenses = STORYBOARDS[topicId].lenses;
  for (var lensId of Object.keys(lenses)) {
    var sb = lenses[lensId].storyboard || [];
    for (var node of sb) {
      var hook = node.engagementHook;
      if (!hook || typeof hook !== 'string') continue;

      var crossHits = matchesCross(hook, topicId);
      var multi = multiNumberCompare(hook);
      var termCount = countEnglishTerms(hook);
      var len = hook.replace(/\s/g, '').length;

      var flags = [];
      if (crossHits.length > 0) flags.push('cross-topic[' + crossHits.slice(0, 3).join(',') + ']');
      if (multi && /5 |4 |3 个|3 种|5 种|4 个|4 样/.test(hook)) flags.push('multi-N-set');
      if (termCount >= 3) flags.push('term-overload(' + termCount + ')');
      if (len > 120) flags.push('long(' + len + ')');

      if (flags.length > 0) {
        suspects.push({
          topic: topicId, lens: lensId, node: node.id,
          flags: flags, hook: hook
        });
      }
    }
  }
}

console.log('=== Suspect engagementHook entries (' + suspects.length + ') ===\n');
// 按 cross-topic 严重的排前
suspects.sort(function(a, b) {
  var ax = a.flags.some(function(f) { return f.startsWith('cross-topic'); }) ? 0 : 1;
  var bx = b.flags.some(function(f) { return f.startsWith('cross-topic'); }) ? 0 : 1;
  return ax - bx;
});
suspects.forEach(function(s) {
  console.log('— ' + s.topic + ' / ' + s.lens + ' / ' + s.node + ' [' + s.flags.join(' | ') + ']');
  console.log('  ' + s.hook);
  console.log();
});
