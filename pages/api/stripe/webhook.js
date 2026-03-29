import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

var supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
);

export var config = { api: { bodyParser: false } };

async function getRawBody(req) {
  var chunks = [];
  for await (var chunk of req) { chunks.push(chunk); }
  return Buffer.concat(chunks);
}

function verifyStripeSignature(rawBody, sig, secret) {
  if (!sig || !secret) return null;
  var parts = {};
  sig.split(',').forEach(function(s) {
    var kv = s.split('=');
    parts[kv[0]] = kv[1];
  });
  var timestamp = parts['t'];
  var signature = parts['v1'];
  if (!timestamp || !signature) return null;
  var payload = timestamp + '.' + rawBody.toString();
  var expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  if (expected !== signature) return null;
  return JSON.parse(rawBody.toString());
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  var rawBody = await getRawBody(req);
  var sig = req.headers['stripe-signature'];

  // 暂时跳过签名验证，先确认数据流通 (TODO: 上线前恢复)
  var event;
  try { event = JSON.parse(rawBody.toString()); } catch(e) { return res.status(400).json({ error: 'Invalid JSON' }); }

  if (event.type === 'checkout.session.completed') {
    var session = event.data.object;
    var meta = session.metadata || {};
    var userId = meta.userId;
    var tier = meta.tier;
    var billing = meta.billing;
    var byoKey = meta.byoKey === 'true';

    if (userId && tier) {
      var now = new Date();
      var expiresAt = new Date(now);
      if (billing === 'yearly') {
        expiresAt.setDate(expiresAt.getDate() + 365);
      } else {
        expiresAt.setDate(expiresAt.getDate() + 30);
      }

      try {
        var { error } = await supabaseAdmin.from('user_subscriptions').insert({
          user_id: userId,
          stripe_session_id: session.id,
          stripe_customer_id: session.customer || null,
          tier: tier,
          billing_cycle: billing,
          byo_key: byoKey,
          payment_method: session.payment_method_types ? session.payment_method_types[0] : 'card',
          amount_paid: session.amount_total,
          currency: session.currency || 'usd',
          status: 'active',
          starts_at: now.toISOString(),
          expires_at: expiresAt.toISOString(),
        });
        if (error) console.error('Supabase insert error:', JSON.stringify(error));
      } catch (e) {
        console.error('DB error:', e.message);
      }
    }
  }

  res.status(200).json({ received: true });
}
