// lib/email.js
//
// Resend 邮件发送 wrapper — Know U. Learning 跨模块家长报告系统
//
// 架构（见 docs/PARENT_BENCHMARK_ARCHITECTURE.md）：
//   Vercel Cron (周一 8:00 PT)
//      ↓
//   /api/cron/weekly-parent-benchmark — 跨模块数据聚合
//      ↓
//   sendParentEmail() — 这个 wrapper
//      ↓
//   Resend API → 家长邮箱
//      ↓
//   Supabase parent_email_log（审计 + 失败重试）
//
// 环境变量：
//   RESEND_API_KEY — 必需
//   RESEND_FROM    — 默认 'Know U. Learning <noreply@knowulearning.com>'

import { Resend } from 'resend';

var _resend = null;
function getResend() {
  if (_resend) return _resend;
  var key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn('[email] RESEND_API_KEY not set — emails will be logged only, not actually sent');
    return null;
  }
  _resend = new Resend(key);
  return _resend;
}

var DEFAULT_FROM = process.env.RESEND_FROM || 'Know U. Learning <onboarding@resend.dev>';

/**
 * 发送家长邮件（summary / wakeup / manual-test 三种类型）
 *
 * @param {Object} opts
 * @param {string} opts.to              — 家长邮箱
 * @param {string} opts.subject         — 邮件标题
 * @param {string} opts.html            — HTML 内容
 * @param {string} [opts.text]          — 纯文本 fallback
 * @param {string} [opts.from]          — 默认 RESEND_FROM
 * @param {string} [opts.userId]        — 关联的用户 ID（用于 log）
 * @param {string} [opts.emailType]     — 'weekly-summary' | 'wakeup' | 'manual-test'
 * @param {Object} [opts.metadata]      — 任意元数据（写入 log）
 *
 * @returns {Promise<{success, resendId?, error?}>}
 */
export async function sendParentEmail(opts) {
  if (!opts || !opts.to || !opts.subject || !opts.html) {
    return { success: false, error: 'missing required fields (to/subject/html)' };
  }

  var resend = getResend();
  if (!resend) {
    // 没有 API key — dry-run 模式（开发调试用）
    console.log('[email DRY-RUN] would send:', {
      to: opts.to,
      subject: opts.subject,
      htmlPreview: opts.html.slice(0, 200) + '...',
    });
    return { success: true, dryRun: true };
  }

  try {
    var resp = await resend.emails.send({
      from: opts.from || DEFAULT_FROM,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
      tags: [
        { name: 'email_type', value: opts.emailType || 'unknown' },
        ...(opts.userId ? [{ name: 'user_id', value: opts.userId.replace(/-/g, '_') }] : []),
      ],
    });

    if (resp.error) {
      return { success: false, error: resp.error.message || JSON.stringify(resp.error) };
    }

    // TODO Phase B2.1：写入 parent_email_log 表
    // await supabase.from('parent_email_log').insert({
    //   user_id: opts.userId,
    //   parent_email: opts.to,
    //   email_type: opts.emailType,
    //   subject: opts.subject,
    //   status: 'sent',
    //   resend_id: resp.data?.id,
    //   metadata: opts.metadata,
    // });

    return { success: true, resendId: resp.data?.id };
  } catch (e) {
    console.error('[email] send failed:', e.message);
    return { success: false, error: e.message };
  }
}

/**
 * 简单 HTML 模板包装（统一品牌头 + 取消订阅 footer）
 */
export function wrapEmailHtml(opts) {
  opts = opts || {};
  var bodyHtml = opts.bodyHtml || '';
  var unsubscribeUrl = opts.unsubscribeUrl || 'https://knowulearning.com/parent-email/unsubscribe';

  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${opts.title || 'Know U. Learning'}</title>
</head>
<body style="font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif; line-height: 1.7; color: #2a1f17; margin: 0; padding: 0; background: #faf6ee;">
  <div style="max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #fff8e8;">

    <!-- Brand header -->
    <div style="border-bottom: 1px solid #d4c4a8; padding-bottom: 16px; margin-bottom: 24px;">
      <h1 style="margin: 0; font-size: 22px; color: #c25d2c;">Know U. Learning</h1>
      <div style="font-size: 13px; color: #7a6c58; margin-top: 4px;">中美课纲 AI 私教 · 给中国移民家长的工具</div>
    </div>

    ${bodyHtml}

    <!-- Footer -->
    <div style="border-top: 1px solid #e5e2dd; padding-top: 16px; margin-top: 32px; font-size: 11px; color: #999; line-height: 1.5;">
      你收到这封邮件因为你的孩子在使用 Know U. Learning 学习。
      <br>
      <a href="${unsubscribeUrl}" style="color: #c25d2c;">调整频率 / 取消订阅</a>
      &nbsp;·&nbsp;
      <a href="mailto:hello@knowulearning.com" style="color: #c25d2c;">回信反馈</a>
    </div>

  </div>
</body>
</html>
  `.trim();
}
