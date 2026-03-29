/* Stripe Price IDs for Know U. Learning (Live Mode) */

export var STRIPE_PRICES = {
  basic: {
    monthly: "price_1TGPWlPfpKaWPg8IuipOYjOH",       // $20
    yearly: "price_1TGPWmPfpKaWPg8Ivt2bqIJq",         // $192
    monthlyBYO: "price_1TGPWmPfpKaWPg8IOiwttXs3",     // $10
    yearlyBYO: "price_1TGPWmPfpKaWPg8IKywe2zww",      // $96
  },
  pro: {
    monthly: "price_1TGPWmPfpKaWPg8IQPHcv2yY",        // $50
    yearly: "price_1TGPWmPfpKaWPg8IbhWAq6B1",         // $480
    monthlyBYO: "price_1TGPWmPfpKaWPg8Izc867VdH",     // $25
    yearlyBYO: "price_1TGPWnPfpKaWPg8IntINYiKR",      // $240
  },
};

export var getPriceId = function(tier, billing, byoKey) {
  var t = STRIPE_PRICES[tier];
  if (!t) return null;
  if (byoKey) return billing === "yearly" ? t.yearlyBYO : t.monthlyBYO;
  return billing === "yearly" ? t.yearly : t.monthly;
};
