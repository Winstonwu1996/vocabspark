// pages/api/cron/weekly-parent-benchmark.js
//
// Vercel Cron Job — 周一 8:00 PT（UTC+8 周一 0:00）
// 周报或唤醒邮件给所有有 parent_email 的家长
//
// vercel.json 配置：
// {
//   "crons": [{
//     "path": "/api/cron/weekly-parent-benchmark",
//     "schedule": "0 16 * * 1"   // UTC 周一 16:00 = PT 周一 8:00 (假设 UTC-8)
//   }]
// }
//
// 鉴权：Vercel Cron 自动加 Authorization: Bearer ${CRON_SECRET}
//
// 当前实现（Phase B3）：
//   - Vercel Cron 触发 → 拉所有有 parent_email 的用户
//   - 每个用户跑跨模块 aggregation（Phase B4 实现 — 现在 stub）
//   - 有数据 → summary email；无数据 → wakeup email
//   - 写入 parent_email_log（Phase B4 加 Supabase 表）

import { createClient } from '@supabase/supabase-js';
import { sendParentEmail } from '../../../lib/email.js';
import { buildSummaryEmail, buildWakeupEmail } from '../../../lib/parent-email-templates.js';
import { aggregateWeeklyForParent } from '../../../lib/parent-email-aggregator.js';

var supabase = process.env.SUPABASE_SERVICE_ROLE_KEY ? createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
) : null;

export default async function handler(req, res) {
  // 鉴权：只允许 Vercel Cron 或带 secret 的手动触发
  var authHeader = req.headers.authorization || '';
  var expected = 'Bearer ' + (process.env.CRON_SECRET || '');
  if (process.env.CRON_SECRET && authHeader !== expected) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  if (!supabase) {
    return res.status(500).json({ error: 'SUPABASE_SERVICE_ROLE_KEY not set' });
  }

  // 拉所有 user_metadata 含 parent_email 的用户
  // 注意：Supabase auth.users 表通过 admin API 访问
  var { data: usersResp, error: listErr } = await supabase.auth.admin.listUsers({ perPage: 1000 });
  if (listErr) {
    console.error('[cron] listUsers failed:', listErr);
    return res.status(500).json({ error: 'listUsers failed', detail: listErr.message });
  }

  var allUsers = (usersResp && usersResp.users) || [];
  var eligible = allUsers.filter(function(u) {
    var meta = u.user_metadata || {};
    return meta.parent_email && meta.parent_email_subscribed !== false;
  });

  console.log('[cron] eligible users:', eligible.length, '/ total:', allUsers.length);

  var results = { sent: 0, failed: 0, skipped: 0, details: [] };

  for (var i = 0; i < eligible.length; i++) {
    var u = eligible[i];
    var meta = u.user_metadata || {};
    var parentEmail = meta.parent_email;
    var studentName = meta.name || meta.userName || '孩子';

    try {
      // 拉 user_progress
      var { data: progressRow } = await supabase
        .from('user_progress')
        .select('progress_data, updated_at')
        .eq('user_id', u.id)
        .single();

      var progressData = progressRow?.progress_data || {};
      var weekStart = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

      // Phase B4 跨模块聚合
      var agg = await aggregateWeeklyForParent({
        user: u,
        progressData: progressData,
        weekStart: weekStart,
        weekEnd: new Date(),
        supabase: supabase,
      });

      var emailContent;
      var emailType;

      if (agg.hasActivity) {
        emailType = 'weekly-summary';
        emailContent = buildSummaryEmail({
          studentName: agg.studentName,
          dateRange: agg.dateRange,
          vocab: agg.vocab,
          history: agg.history,
          writing: agg.writing,
          cognitiveHighlight: agg.cognitiveHighlight,
          concerns: agg.concerns,
        });
      } else {
        emailType = 'wakeup';
        emailContent = buildWakeupEmail({
          studentName: agg.studentName,
          dateRange: agg.dateRange,
          lastActivity: agg.lastActivity,
          lastTopicHook: agg.lastTopicHook,
        });
      }

      var sendResult = await sendParentEmail({
        to: parentEmail,
        subject: emailContent.subject,
        html: emailContent.html,
        userId: u.id,
        emailType: emailType,
      });

      if (sendResult.success) {
        results.sent++;
        results.details.push({ userId: u.id, type: emailType, status: 'sent' });
      } else {
        results.failed++;
        results.details.push({ userId: u.id, type: emailType, status: 'failed', error: sendResult.error });
      }
    } catch (e) {
      console.error('[cron] user', u.id, 'failed:', e.message);
      results.failed++;
      results.details.push({ userId: u.id, status: 'exception', error: e.message });
    }
  }

  return res.status(200).json({
    timestamp: new Date().toISOString(),
    eligible: eligible.length,
    total_users: allUsers.length,
    ...results,
  });
}
