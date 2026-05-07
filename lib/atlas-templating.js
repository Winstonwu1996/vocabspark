// lib/atlas-templating.js
//
// Atlas content placeholder injection
// 5-5 founder rule: atlas content 必须 generic, 不 hardcode 用户专属字段(姓名/城市/学校).
// 写作时用 {{userChildName|你这一代}} 占位符, 渲染时按 user profile 替换 / fallback.
//
// 铁律来源: docs/NEW_TOPIC_CHECKLIST.md "atlas content 铁律" 章节
// CI 检查: scripts/atlas-lint.mjs 自动 grep 违规 hardcode (Willow / Cupertino / Jeffery Trail)
//
// ───────── 支持的占位符 ─────────
// {{userChildName|fallback}}  — 用户填了 profile 用真名, 没填用 fallback (默认 "你这一代")
// {{userCity|fallback}}        — 默认 "你的城市"
// {{userSchool|fallback}}      — 默认 "你的学校"
// {{userParentWord|fallback}}  — 默认 "爸妈"
// {{userFromCity|fallback}}    — 默认 "你的家乡"
//
// fallback syntax 支持中英文 — 因为 atlas content 是 bilingual {cn, en}
//
// ───────── 使用示例 ─────────
//   import { renderAtlasContent, getAtlasUserContext } from 'lib/atlas-templating';
//   var ctx = getAtlasUserContext();              // client-side, 从 localStorage
//   var text = renderAtlasContent(rawText, ctx);  // 替换占位符

import { loadHistoryProfile } from './history-storage';

// ─── 占位符替换 ─────────────────────────────────────────────
// {{key|fallback}} or {{key}} — fallback 默认 ''
export function renderAtlasContent(text, userContext) {
  if (!text || typeof text !== 'string') return text;
  return text.replace(/\{\{(\w+)(?:\|([^}]*))?\}\}/g, function (match, key, fallback) {
    var value = userContext && userContext[key];
    if (value && typeof value === 'string' && value.trim()) {
      return value;
    }
    return fallback || '';
  });
}

// ─── bilingual {cn, en} 对象同时渲染 ─────────────────────────
// atlas content 多数是 {cn: '...', en: '...'} 结构, 一次性两边都 inject
export function renderAtlasBilingual(obj, userContext) {
  if (!obj || typeof obj !== 'object') return obj;
  if (typeof obj === 'string') return renderAtlasContent(obj, userContext);
  var result = {};
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var val = obj[key];
      if (typeof val === 'string') {
        result[key] = renderAtlasContent(val, userContext);
      } else {
        result[key] = val;
      }
    }
  }
  return result;
}

// ─── 从 localStorage 拿到用户 atlas context ──────────────────
// 注: SSR 时 (typeof window === 'undefined') 返回 null → 用 fallback
//     placeholder profile (用户选了"稍后再说") 也返回 null → 用 fallback (避免 "你叫 你" 这种话)
export function getAtlasUserContext() {
  if (typeof window === 'undefined') return null;
  try {
    var hp = loadHistoryProfile();
    if (!hp) return null;
    if (hp.placeholder) return null;  // 用户跳过了 setup, 用 fallback 不强行个性化

    return {
      userChildName: hp.name && hp.name !== '你' ? hp.name : null,
      userCity:      hp.city && hp.city !== 'Irvine' ? hp.city : null,
      userSchool:    hp.schoolName || null,
      userParentWord: hp.parentWord && hp.parentWord !== '爸妈' ? hp.parentWord : null,
      userFromCity:  hp.fromCity && hp.fromCity !== '中国' ? hp.fromCity : null,
    };
  } catch (e) {
    return null;
  }
}

// ─── 标准 fallback 文本(中英)─────────────────────────────
// 让批量 sed 替换时引用统一 fallback, 不需要每处自己写
export var STANDARD_FALLBACKS = {
  cn: {
    userChildName: '你这一代',
    userCity:      '你的城市',
    userSchool:    '你的学校',
    userParentWord: '爸妈',
    userFromCity:  '你的家乡',
  },
  en: {
    userChildName: 'your generation',
    userCity:      'your city',
    userSchool:    'your school',
    userParentWord: 'your parents',
    userFromCity:  'your hometown',
  },
};
