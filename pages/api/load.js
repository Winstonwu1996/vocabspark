import { createClient } from '@supabase/supabase-js';
import { requireUser } from '../../lib/auth-server';

var supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  var claimedUserId = req.query.userId;
  if (!claimedUserId) return res.status(400).json({ error: 'missing userId' });

  // 验证：token 必须有效，且 token 用户 = query 里的 userId
  var { userId, errorResponse } = await requireUser(req, res, claimedUserId);
  if (errorResponse) return errorResponse;

  try {
    var { data, error } = await supabase
      .from('user_progress').select('progress_data, updated_at, version')
      .eq('user_id', userId).single();
    if (error || !data) return res.status(200).json({ data: null, version: 0 });
    res.status(200).json({
      data: { ...data.progress_data, updatedAt: data.updated_at },
      version: data.version || 0,
    });
  } catch(e) {
    res.status(200).json({ data: null, version: 0 });
  }
}
