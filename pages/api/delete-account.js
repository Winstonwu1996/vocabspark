// ─── 账号删除端点（GDPR / PIPL "被遗忘权"）──────────────────────────────────
//
// ⚠️ 严肃端点：会永久删除用户的全部数据 + auth 账号，不可恢复。
//
// 流程：
//   1. 必须登录（requireUser 验证 token）
//   2. body 必须带 confirmEmail，且与当前登录用户 email 完全匹配（防误操作）
//   3. rate limit：每 IP 每天最多 3 次删除尝试（防误操作 / 滥用）
//   4. 顺序删除：
//        a. content_feedback 关联 row（表可能不存在，graceful 跳过）
//        b. user_progress row
//        c. supabase.auth.admin.deleteUser(userId) 删 auth 账号
//   5. 任何步骤失败 → 返回明确 error message 让用户联系 Winston 手动处理
//      （rollback 困难：第三步失败前两步已删，但客户能 re-run 一次此端点；
//        前两步任一失败时不再调第三步，避免 auth 删了 progress 还在的孤儿态）
//
// 操作前 console.log 一份审计日志（user id / email / timestamp / IP），
// Vercel logs 可查，便于意外情况回溯。
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

  var ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.headers['x-real-ip'] ||
    'unknown';

  // 1. rate limit：每 IP 每天最多 3 次删除尝试
  var rl = await checkRateLimit('delete-account:' + ip, 3, 24 * 60 * 60 * 1000);
  if (!rl.allowed) {
    return res.status(429).json({
      error: '删除请求过于频繁，请 24 小时后再试。如急需协助请联系 chompcloud@gmail.com',
    });
  }

  // 2. 身份验证
  var { userId, errorResponse } = await requireUser(req, res, null);
  if (errorResponse) return errorResponse;

  // 3. 二次确认：用户必须在 body 里输入自己的完整邮箱
  var confirmEmail = (req.body && req.body.confirmEmail) || '';
  if (!confirmEmail || typeof confirmEmail !== 'string') {
    return res.status(400).json({ error: '缺少 confirmEmail 字段' });
  }

  // 4. 查当前用户邮箱（用 token 验证后的 userId 去 auth 拿权威 email）
  var currentEmail = null;
  try {
    var { data: userResult, error: userErr } = await supabaseAdmin.auth.admin.getUserById(userId);
    if (userErr || !userResult?.user) {
      return res.status(500).json({ error: '无法读取账号信息，请稍后重试或联系 chompcloud@gmail.com' });
    }
    currentEmail = userResult.user.email;
  } catch (e) {
    console.error('[delete-account] getUserById failed:', e);
    return res.status(500).json({ error: '账号验证失败：' + (e.message || e) });
  }

  // 5. 邮箱必须严格匹配（trim + 小写比较）
  if (
    !currentEmail ||
    String(confirmEmail).trim().toLowerCase() !== String(currentEmail).trim().toLowerCase()
  ) {
    return res.status(400).json({ error: '邮箱不匹配，删除已取消' });
  }

  // 6. 审计日志（Vercel logs 可查）
  var auditTs = new Date().toISOString();
  console.log('[delete-account] 开始删除账号', {
    userId: userId,
    email: currentEmail,
    ip: ip,
    timestamp: auditTs,
  });

  // 7. 顺序删除（任一失败 → 立即返回，不再继续，避免孤儿态）
  try {
    // a. content_feedback（表可能不存在，graceful 跳过）
    try {
      var { error: fbErr } = await supabaseAdmin
        .from('content_feedback')
        .delete()
        .eq('user_id', userId);
      if (fbErr) {
        // 表不存在 → 跳过；其他错误也只 warn，不阻塞主流程
        console.warn('[delete-account] content_feedback 删除跳过：', fbErr.message);
      }
    } catch (e) {
      console.warn('[delete-account] content_feedback 异常（跳过）：', e.message);
    }

    // b. user_progress —— 学习数据，必须删成功
    var { error: progErr } = await supabaseAdmin
      .from('user_progress')
      .delete()
      .eq('user_id', userId);
    if (progErr) {
      console.error('[delete-account] user_progress 删除失败:', progErr);
      return res.status(500).json({
        error:
          '删除学习数据失败。你的账号尚未删除，请联系 chompcloud@gmail.com 协助手动删除。错误：' +
          progErr.message,
      });
    }

    // c. auth 账号 —— 最后删，删完后客户端 token 立即失效
    var { error: authErr } = await supabaseAdmin.auth.admin.deleteUser(userId);
    if (authErr) {
      console.error('[delete-account] auth.admin.deleteUser 失败:', authErr);
      return res.status(500).json({
        error:
          '学习数据已清除，但账号注销失败。请联系 chompcloud@gmail.com 协助完成最后一步。错误：' +
          authErr.message,
      });
    }

    console.log('[delete-account] 账号删除完成', {
      userId: userId,
      email: currentEmail,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      ok: true,
      message: '账号已永久删除。感谢你曾使用 Know U. Learning。',
    });
  } catch (e) {
    console.error('[delete-account] 未捕获异常:', e);
    return res.status(500).json({
      error: '删除过程出现意外错误，请联系 chompcloud@gmail.com 协助处理。错误：' + (e.message || e),
    });
  }
}
