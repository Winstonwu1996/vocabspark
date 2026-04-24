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
    if (error || !data?.user?.id) {
      return { userId: null, error: { status: 401, message: 'invalid or expired token' } };
    }
    return { userId: data.user.id, error: null };
  } catch (e) {
    return { userId: null, error: { status: 401, message: 'auth verification failed: ' + (e.message || e) } };
  }
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
