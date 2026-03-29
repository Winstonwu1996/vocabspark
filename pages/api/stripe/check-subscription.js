import { createClient } from '@supabase/supabase-js';

var supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
);

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  var userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: 'Missing userId' });

  try {
    var { data, error } = await supabase
      .from('user_subscriptions')
      .select('tier, billing_cycle, byo_key, status, expires_at')
      .eq('user_id', userId)
      .eq('status', 'active')
      .gte('expires_at', new Date().toISOString())
      .order('expires_at', { ascending: false })
      .limit(1)
      .single();

    if (error || !data) {
      return res.status(200).json({ tier: 'free', isActive: false });
    }

    res.status(200).json({
      tier: data.tier,
      billingCycle: data.billing_cycle,
      byoKey: data.byo_key,
      expiresAt: data.expires_at,
      isActive: true,
    });
  } catch (e) {
    res.status(200).json({ tier: 'free', isActive: false });
  }
}
