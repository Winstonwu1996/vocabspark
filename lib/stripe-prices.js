/* Stripe Price IDs for Know U. Learning (KnowU.Learning account) */

export var STRIPE_PRICES = {
  basic: {
    monthly: "price_1TGOIAB797swRjmaABl4ZmoW",       // $20
    yearly: "price_1TGOIBB797swRjmasoZseBqp",         // $192
    monthlyBYO: "price_1TGOIBB797swRjmamQcOBysE",     // $10
    yearlyBYO: "price_1TGOIBB797swRjmaOXxT2Aii",      // $96
  },
  pro: {
    monthly: "price_1TGOIBB797swRjmab1jVpPoA",        // $50
    yearly: "price_1TGOIBB797swRjmaxceCB2lz",         // $480
    monthlyBYO: "price_1TGOIBB797swRjmaFekw4hIv",     // $25
    yearlyBYO: "price_1TGOICB797swRjma2v2A4UTE",      // $240
  },
};

export var getPriceId = function(tier, billing, byoKey) {
  var t = STRIPE_PRICES[tier];
  if (!t) return null;
  if (byoKey) return billing === "yearly" ? t.yearlyBYO : t.monthlyBYO;
  return billing === "yearly" ? t.yearly : t.monthly;
};
