// ─── 数据导出端点（GDPR / PIPL 合规）─────────────────────────────────────────
//
// 用户主动请求导出自己在 Know U. Learning 的全部数据，浏览器直接下载 JSON。
//
// 包含：
//   - 账号基本信息（email, created_at, last_sign_in_at；不含 password_hash）
//   - user_progress.progress_data（学习进度全 JSON）+ version + updated_at
//   - content_feedback 关联记录（如果该用户有提交过）
//
// 不包含：
//   - 任何密钥、token、敏感凭证
//   - 其他用户的数据（用 token 验证身份后只查自己）
//
// 安全：
//   - 必须登录（requireUser 验证 token）
//   - rate limit：每用户每小时最多 3 次（防滥用 / 撞 service 配额）
//   - 用 service role key 绕过 RLS（保证能读到自己的所有 row）
// ──────────────────────────────────────────────────────────────────────────────

import { createClient } from '@supabase/supabase-js';
import { requireUser } from '../../lib/auth-server';
import { checkRateLimit } from '../../lib/ratelimit';

var supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // 1. 身份验证：以 token 为权威，确保只能导出自己的数据
  var { userId, errorResponse } = await requireUser(req, res, null);
  if (errorResponse) return errorResponse;

  // 2. rate limit：每用户每小时最多 3 次导出
  var rl = await checkRateLimit('export:' + userId, 3, 60 * 60 * 1000);
  if (!rl.allowed) {
    return res.status(429).json({ error: '导出过于频繁，请 1 小时后再试（每小时最多 3 次）' });
  }

  try {
    // 3. 拉 auth.users 信息（脱敏）
    var authInfo = null;
    try {
      var { data: userResult, error: userErr } = await supabaseAdmin.auth.admin.getUserById(userId);
      if (!userErr && userResult?.user) {
        var u = userResult.user;
        authInfo = {
          id: u.id,
          email: u.email,
          created_at: u.created_at,
          last_sign_in_at: u.last_sign_in_at,
          email_confirmed_at: u.email_confirmed_at,
          user_metadata: u.user_metadata || {},
          // 故意不导出：encrypted_password / raw_app_meta_data / phone / mfa secrets
        };
      }
    } catch (e) {
      console.warn('[export] auth.admin.getUserById failed:', e.message);
    }

    // 4. 拉 user_progress（学习进度）
    var progress = null;
    try {
      var { data: prog } = await supabaseAdmin
        .from('user_progress')
        .select('progress_data, version, updated_at')
        .eq('user_id', userId)
        .single();
      if (prog) {
        progress = {
          progress_data: prog.progress_data,
          version: prog.version,
          updated_at: prog.updated_at,
        };
      }
    } catch (e) {
      console.warn('[export] user_progress fetch failed:', e.message);
    }

    // 5. 拉 content_feedback（如果表存在 / 该用户有过反馈）
    var feedback = [];
    try {
      var { data: fb, error: fbErr } = await supabaseAdmin
        .from('content_feedback')
        .select('id, word, content_type, content_snapshot, reason_category, reason_detail, created_at')
        .eq('user_id', userId);
      if (!fbErr && Array.isArray(fb)) feedback = fb;
    } catch (e) {
      // 表不存在或权限问题 — 静默跳过
    }

    // 6. 组装最终 payload
    var exportPayload = {
      _meta: {
        exported_at: new Date().toISOString(),
        export_format_version: 1,
        product: 'Know U. Learning',
        notice: '此文件包含你在 Know U. Learning 的全部个人数据。已剔除密码哈希、API token 等敏感凭证。如需删除账号请用产品内"删除我的账号"功能或邮件联系 chompcloud@gmail.com。',
      },
      account: authInfo,
      learning_progress: progress,
      content_feedback: feedback,
    };

    var dateStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    var filename = 'knowu-data-' + userId + '-' + dateStr + '.json';

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Content-Disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send(JSON.stringify(exportPayload, null, 2));
  } catch (e) {
    console.error('[export] failed:', e);
    return res.status(500).json({ error: '导出失败：' + (e.message || e) });
  }
}
