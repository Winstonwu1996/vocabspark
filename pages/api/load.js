import { createClient } from '@supabase/supabase-js';

var supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  var userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: 'missing userId' });

  try {
    var { data, error } = await supabase
      .from('user_progress').select('progress_data, updated_at')
      .eq('user_id', userId).single();
    if (error || !data) return res.status(200).json({ data: null });
    res.status(200).json({ data: { ...data.progress_data, updatedAt: data.updated_at } });
  } catch(e) {
    res.status(200).json({ data: null });
  }
}
