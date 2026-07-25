import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
);

/**
 * 取当前会话的 Authorization header（无会话则返回空对象）。
 * 用于需要「以本人身份」访问的 API —— 服务端据此校验 userId 归属，防越权读他人数据。
 * 取不到 token 时不抛错、返回 {}，由服务端决定如何处理（调用方的降级逻辑不受影响）。
 */
export async function getAuthHeader() {
  try {
    var { data } = await supabase.auth.getSession();
    var token = data?.session?.access_token;
    return token ? { Authorization: 'Bearer ' + token } : {};
  } catch (e) {
    return {};
  }
}
