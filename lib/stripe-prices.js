/* Stripe Price IDs for Know U. Learning */

export var STRIPE_PRICES = {
  basic: {
    monthly: "price_1TGO3aJMODC6VdFf5jZohuxo",       // $20
    yearly: "price_1TGO3bJMODC6VdFf3q9lGN7X",         // $192
    monthlyBYO: "price_1TGO3bJMODC6VdFfcAqtsL4q",     // $10
    yearlyBYO: "price_1TGO3cJMODC6VdFfHyYx1Ndb",      // $96
  },
  pro: {
    monthly: "price_1TGO3dJMODC6VdFfJhL6oELn",        // $50
    yearly: "price_1TGO3eJMODC6VdFfYrO1N9fE",         // $480
    monthlyBYO: "price_1TGO3fJMODC6VdFf4JkjBQfb",     // $25
    yearlyBYO: "price_1TGO3gJMODC6VdFflBBVRQzD",      // $240
  },
};

export var getPriceId = function(tier, billing, byoKey) {
  var t = STRIPE_PRICES[tier];
  if (!t) return null;
  if (byoKey) return billing === "yearly" ? t.yearlyBYO : t.monthlyBYO;
  return billing === "yearly" ? t.yearly : t.monthly;
};
