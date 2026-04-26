/* ─── Know U. Learning — 漏斗埋点（Sentry breadcrumb） ───────────────────────
 *
 * 复用已装的 @sentry/nextjs，不引入新 analytics 工具。
 * 关键路径调用 trackFunnel('step_name', { ... })，breadcrumb 会附在
 * 后续真实错误事件上，方便回看用户做到哪一步。
 *
 * Sentry 仅在 production + DSN 已配时实际上报；本函数 try/catch 包死，
 * 没 DSN 或 Sentry 未初始化时静默 no-op，绝不影响应用。
 * ───────────────────────────────────────────────────────────────────────── */

import * as Sentry from '@sentry/nextjs';

/**
 * 记录一个漏斗步骤。
 * @param {string} step  - 事件名，如 'home_view' / 'login_click' / 'signup_success'
 * @param {object} [data] - 可选附加字段（不要放 PII）
 */
export function trackFunnel(step, data) {
  try {
    Sentry.addBreadcrumb({
      category: 'funnel',
      message: step,
      level: 'info',
      data: data || {},
    });
  } catch (e) {
    /* no-op */
  }
}
