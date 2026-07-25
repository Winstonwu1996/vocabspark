// 服务端身份验证：从 Authorization 头提取 access token，用 Supabase 验证 → 返回 userId
// 用于 /api/sync /api/load /api/reset 等需要保护用户数据的端点
import { createClient } from '@supabase/supabase-js';

// 服务端用 anon key 即可（auth.getUser 验证 JWT，不需要 service role）
var supabaseAuth = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

// 验证请求并返回 verifiedUserId（与客户端传的 userId 不一定一致 — 我们以 token 为权威）
// 返回 { userId, error }
//   - userId: 验证通过的用户 ID（请求体里的 userId 必须等于此值，否则越权）
//   - error: 如果有错，返回 { status, message }
//
// Token 来源（按优先级）：
// 1. Authorization: Bearer <token> 头（标准 fetch 路径）
// 2. body._authToken（sendBeacon 路径 —— beacon 不能带 header，token 放 body）
export async function verifyAuth(req) {
  var authHeader = req.headers.authorization || req.headers.Authorization || '';
  var token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  if (!token && req.body && typeof req.body === 'object' && req.body._authToken) {
    token = String(req.body._authToken);
  }
  if (!token) {
    return { userId: null, error: { status: 401, message: 'missing auth token (Authorization header or body._authToken)' } };
  }
  try {
    var { data, error } = await supabaseAuth.auth.getUser(token);
    if (!error && data?.user?.id) {
      return { userId: data.user.id, error: null };
    }
    // ⚠️ 必须区分「凭证不对」和「验证服务不可达」——两者都塌缩成 401 会造成
    // 「Supabase Auth 抖一下 → 付费用户被判无权限」(付费用户被锁在已付课程外)。
    // GoTrue 的 5xx/429/网络错误通过 error.status 暴露；这类返回 transient，
    // 调用方据此保持上一次已知状态、重试，绝不据以降级。
    if (error && isTransientAuthError(error)) {
      return {
        userId: null,
        transient: true,
        error: { status: 503, transient: true, message: 'auth verification unavailable' },
      };
    }
    return { userId: null, error: { status: 401, message: 'invalid or expired token' } };
  } catch (e) {
    // fetch 层异常(超时/DNS/连接失败) = 验证服务不可达，同样是 transient，不是凭证问题
    return {
      userId: null,
      transient: true,
      error: { status: 503, transient: true, message: 'auth verification unavailable: ' + (e.message || e) },
    };
  }
}

// GoTrue 侧的「服务问题」而非「凭证问题」：5xx / 429 / 无 status 的网络类错误。
// 400/401/403 这类是真的凭证不对，必须继续按 401 处理。
function isTransientAuthError(error) {
  var s = Number(error && (error.status || error.statusCode));
  if (Number.isFinite(s) && s > 0) return s >= 500 || s === 429;
  // 没有 status 的多半是 fetch/网络层失败（supabase-js 会包成 AuthRetryableFetchError）
  var name = String((error && error.name) || '');
  if (/retryable|fetch/i.test(name)) return true;
  var msg = String((error && error.message) || '');
  return /fetch failed|network|ECONNREFUSED|ETIMEDOUT|socket hang up|timeout/i.test(msg);
}

// 便利包装：验证 + 校验 body/query 里的 userId 跟 token 用户匹配
// 用法：var { userId, errorResponse } = await requireUser(req, res, claimedUserId);
//       if (errorResponse) return errorResponse;
export async function requireUser(req, res, claimedUserId) {
  var { userId: verifiedUserId, error } = await verifyAuth(req);
  if (error) return { userId: null, errorResponse: res.status(error.status).json({ error: error.message }) };
  if (claimedUserId && claimedUserId !== verifiedUserId) {
    return { userId: null, errorResponse: res.status(403).json({ error: 'userId mismatch — cannot access another user\'s data' }) };
  }
  return { userId: verifiedUserId, errorResponse: null };
}
