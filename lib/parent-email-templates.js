// lib/parent-email-templates.js
//
// 家长邮件模板 — Summary + Wakeup
//
// 输入：跨模块 aggregation 数据（见 lib/parent-email-aggregator.js Phase B4）
// 输出：{ subject, bodyHtml }
//
// 模板风格遵循 marketing/dev-log voice：
//   - 中国移民父亲第一人称感
//   - 具体可问的题（不是抽象总结）
//   - 给爸妈的"剧本"（怎么问、目标答案）
//   - 不喊口号、不鸡汤

import { wrapEmailHtml } from './email.js';

/**
 * Summary email — 有学习记录时
 *
 * @param {Object} data 跨模块聚合
 *   - studentName: "Willow"
 *   - dateRange: "4 月 22-28 日"
 *   - vocab: { newCount, accuracy, hardest, hardestStatus, suggestedTopic }
 *   - history: { topicTitle, mastery, stuckPoint, q1: {question, target}, q2: {...} }
 *   - writing: { summary } | null
 *   - cognitiveHighlight: "她在历史第 8 轮用了 trade-off..."
 *   - concerns: "..."  (可空)
 */
export function buildSummaryEmail(data) {
  var d = data || {};
  var name = d.studentName || '孩子';
  var range = d.dateRange || '本周';

  var subject = name + ' 这周学习简报 · ' + range;

  var sections = [];

  // 开场
  sections.push('<p style="margin-top: 0;">王先生 / 王女士：</p>');
  sections.push('<p>' + name + ' 这周用 Know U. 学了：</p>');

  // Vocab
  if (d.vocab) {
    var v = d.vocab;
    sections.push('<h3 style="color: #c25d2c; margin-top: 24px;">📚 词汇模块</h3>');
    sections.push('<ul style="font-size: 14px;">');
    sections.push('<li>学了 <strong>' + (v.newCount || 0) + ' 个新词</strong>'
      + (v.accuracy != null ? '（accuracy ' + v.accuracy + '%）' : '') + '</li>');
    if (v.hardest) {
      sections.push('<li>这周最难的词："' + v.hardest + '"'
        + (v.hardestStatus ? '（' + v.hardestStatus + '）' : '') + '</li>');
    }
    if (v.suggestedTopic) {
      sections.push('<li>建议：周末抽 5 分钟用她学的词造 1 句话' + v.suggestedTopic + '</li>');
    }
    sections.push('</ul>');
  }

  // History
  if (d.history) {
    var h = d.history;
    sections.push('<h3 style="color: #c25d2c; margin-top: 24px;">📜 历史模块</h3>');
    sections.push('<ul style="font-size: 14px;">');
    if (h.topicTitle) {
      sections.push('<li>完成 Topic：<strong>' + h.topicTitle
        + (h.mastery != null ? '（' + h.mastery + '%）' : '') + '</strong></li>');
    }
    if (h.stuckPoint) sections.push('<li>卡点：' + h.stuckPoint + '</li>');
    sections.push('</ul>');

    // 晚饭桌问题（核心 Chinese-parent-buy-in）
    if (h.q1 || h.q2) {
      sections.push('<p style="font-size: 14px; margin-top: 16px;"><strong>📌 给爸妈的晚饭桌问题</strong>（看她能不能答出来）：</p>');
      sections.push('<ol style="font-size: 14px; line-height: 1.8;">');
      if (h.q1) {
        sections.push('<li>"' + h.q1.question + '"');
        if (h.q1.target) sections.push('<br><span style="color: #777; font-size: 13px;">→ 目标答案：' + h.q1.target + '</span>');
        sections.push('</li>');
      }
      if (h.q2) {
        sections.push('<li>"' + h.q2.question + '"');
        if (h.q2.target) sections.push('<br><span style="color: #777; font-size: 13px;">→ 目标答案：' + h.q2.target + '</span>');
        sections.push('</li>');
      }
      sections.push('</ol>');
    }
  }

  // Writing
  if (d.writing && d.writing.summary) {
    sections.push('<h3 style="color: #c25d2c; margin-top: 24px;">✍️ 写作模块</h3>');
    sections.push('<p style="font-size: 14px;">' + d.writing.summary + '</p>');
  }

  // 认知亮点
  if (d.cognitiveHighlight) {
    sections.push('<h3 style="color: #c25d2c; margin-top: 24px;">🎯 这周认知亮点</h3>');
    sections.push('<p style="font-size: 14px; background: #fff3e0; padding: 12px; border-left: 3px solid #c25d2c; margin: 0;">'
      + d.cognitiveHighlight + '</p>');
  }

  // 关注事项
  if (d.concerns) {
    sections.push('<h3 style="color: #c25d2c; margin-top: 24px;">🚨 需要你关注</h3>');
    sections.push('<p style="font-size: 14px; color: #c25d2c;">' + d.concerns + '</p>');
  }

  // 给爸妈看的隐私承诺（解释这份报告如何生成 + 没看到的内容）
  sections.push('<div style="margin-top: 32px; padding: 14px 16px; background: #f0f4ed; border-left: 3px solid #6a8e57; border-radius: 6px; font-size: 12px; line-height: 1.7; color: #555;">');
  sections.push('<div style="font-weight: 700; color: #4a6e3a; margin-bottom: 6px;">🔒 关于这份报告</div>');
  sections.push('这份报告**仅由学习统计数据生成**——完成度、词汇正确率、Topic 通关分数等。');
  sections.push('<br>我们**没有也不会**把孩子和 AI 的聊天内容、她的兴趣设置、她按"累了/没懂/跳过"等行为发给您。');
  sections.push('<br>这是我们对孩子的**隐私承诺**——也是孩子愿意真实跟 AI 说话的前提。');
  sections.push('</div>');

  var bodyHtml = sections.join('\n');

  return {
    subject: subject,
    bodyHtml: bodyHtml,
    html: wrapEmailHtml({ title: subject, bodyHtml: bodyHtml }),
  };
}

/**
 * Wakeup email — 无学习记录时
 *
 * @param {Object} data
 *   - studentName: "Willow"
 *   - dateRange: "4 月 22-28 日"
 *   - lastActivity: { date, topic, completion }  | null
 *   - lastTopicHook: "你之前那个 X 问题..."  (从 last topic narrative 提取)
 */
export function buildWakeupEmail(data) {
  var d = data || {};
  var name = d.studentName || '孩子';
  var range = d.dateRange || '本周';

  var subject = name + ' 这周还没打开 Know U.';

  var sections = [];

  sections.push('<p style="margin-top: 0;">王先生 / 王女士：</p>');
  sections.push('<p>' + name + ' 这周（' + range + '）没用过 Know U.。我们想了几个可能原因，给您做参考：</p>');

  if (d.lastActivity) {
    var la = d.lastActivity;
    sections.push('<p style="font-size: 14px; background: #fff3e0; padding: 12px; border-left: 3px solid #c25d2c;">');
    sections.push('🌟 上次她用是 ' + (la.date || '前几周')
      + (la.topic ? ' — 学的是 ' + la.topic : '')
      + (la.completion != null ? '，完成度 ' + la.completion + '%' : ''));
    if (la.completion != null && la.completion < 100) {
      sections.push('<br>可能她记着这个 Topic 还没完，等回头收尾');
    }
    sections.push('</p>');
  }

  sections.push('<p style="font-size: 14px;">📅 学校最近忙吗？她有别的 priority？</p>');

  if (d.lastTopicHook) {
    sections.push('<p style="font-size: 14px;">💡 如果她需要一点动力，可以说：</p>');
    sections.push('<p style="font-size: 14px; background: #faf6ee; padding: 12px; font-style: italic;">');
    sections.push('"' + d.lastTopicHook + '"');
    sections.push('</p>');
  }

  sections.push('<p style="font-size: 14px;">🤔 如果她对内容不感兴趣 / 觉得难，回信告诉我们一句话——我们立刻调整。</p>');
  sections.push('<p style="margin-top: 24px;">—— Know U. Learning</p>');

  var bodyHtml = sections.join('\n');

  return {
    subject: subject,
    bodyHtml: bodyHtml,
    html: wrapEmailHtml({ title: subject, bodyHtml: bodyHtml }),
  };
}
