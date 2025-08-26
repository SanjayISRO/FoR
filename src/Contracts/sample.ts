// Sample data structure combining customer intents and their business outcomes
// Based on the format requested and the data in ReviewAndValidate.ts

export const SAMPLE_INTENT_DATA = [
  {
    id: 1,
    title: "Order Status Inquiry",
    mappedClusterIntent: "Order Tracking & Delivery",
    rank: 1,
    priority: "Important",
    description: "Direct match to tracking orders, which is a core example in the Order Tracking & Delivery cluster.",
    confidence: "98% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Reduced Customer Effort", priority: "High", confidence: "95%" },
      { rank: 2, title: "Enhanced Brand Trust", priority: "High", confidence: "90%" },
      { rank: 3, title: "Improved CLV / Conversion Rate", priority: "Medium", confidence: "88%" },
      { rank: 4, title: "Upsell & Cross-Sell Conversions", priority: "Medium", confidence: "85%" }
    ],
    reason: "Quick order updates reduce customer effort and build trust."
  },
  {
    id: 2,
    title: "Missing or Incomplete Order",
    mappedClusterIntent: "Complaints & Escalations",
    rank: 2,
    priority: "Critical",
    description: "Missing or incomplete orders represent service failures that require immediate attention and potential escalation to resolve customer dissatisfaction.",
    confidence: "90% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Reduced Customer Effort", priority: "High", confidence: "98%" },
      { rank: 2, title: "Recovered Sales / Lower Return Rates", priority: "High", confidence: "95%" },
      { rank: 3, title: "Enhanced Brand Trust", priority: "High", confidence: "92%" },
      { rank: 4, title: "Improved Product Quality Feedback Loop", priority: "Medium", confidence: "87%" }
    ],
    reason: "Swift resolution retains customers and recovers lost sales."
  },
  {
    id: 3,
    title: "Request Return or Refund",
    mappedClusterIntent: "Returns & Exchanges",
    rank: 3,
    priority: "Important",
    description: "Exact match to the Returns & Exchanges cluster which handles return requests as a primary example intent.",
    confidence: "100% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Recovered Sales / Lower Return Rates", priority: "High", confidence: "96%" },
      { rank: 2, title: "Enhanced Brand Trust", priority: "High", confidence: "93%" },
      { rank: 3, title: "Improved Product Quality Feedback Loop", priority: "Medium", confidence: "89%" },
      { rank: 4, title: "Better Product Fit & Usage Guidance", priority: "Medium", confidence: "85%" }
    ],
    reason: "Fair return handling protects revenue and builds loyalty."
  },
  {
    id: 4,
    title: "Shipping Address Correction",
    mappedClusterIntent: "Order Tracking & Delivery",
    rank: 4,
    priority: "Critical",
    description: "Address corrections are delivery-related issues that fall under shipping and delivery management.",
    confidence: "85% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Reduced Customer Effort", priority: "High", confidence: "97%" },
      { rank: 2, title: "Recovered Sales / Lower Return Rates", priority: "High", confidence: "94%" },
      { rank: 3, title: "Enhanced Brand Trust", priority: "Medium", confidence: "90%" },
      { rank: 4, title: "Market Expansion Clues", priority: "Low", confidence: "86%" }
    ],
    reason: "Fast address fixes prevent delivery issues and boost trust."
  },
  {
    id: 5,
    title: "Product Warranty Claim",
    mappedClusterIntent: "Warranty & Repairs",
    rank: 5,
    priority: "Important",
    description: "Direct match to the Warranty & Repairs cluster which specifically handles warranty-related inquiries.",
    confidence: "100% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Enhanced Brand Trust", priority: "High", confidence: "96%" },
      { rank: 2, title: "Improved Product Quality Feedback Loop", priority: "High", confidence: "94%" },
      { rank: 3, title: "Improved CLV / Conversion Rate", priority: "Medium", confidence: "88%" },
      { rank: 4, title: "Recovered Sales / Lower Return Rates", priority: "Medium", confidence: "87%" }
    ],
    reason: "Warranty support builds trust and drives product improvement."
  },
  {
    id: 6,
    title: "Promo Code or Discount Issues",
    mappedClusterIntent: "Loyalty Program & Offers",
    rank: 6,
    priority: "Important",
    description: "Promotional codes and discounts are part of offers and promotional programs managed under loyalty and offers.",
    confidence: "88% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Recovered Sales / Lower Return Rates", priority: "High", confidence: "95%" },
      { rank: 2, title: "Loyalty Program Growth", priority: "High", confidence: "92%" },
      { rank: 3, title: "Enhanced Brand Trust", priority: "Medium", confidence: "89%" },
      { rank: 4, title: "Campaign Effectiveness", priority: "Medium", confidence: "86%" }
    ],
    reason: "Resolving promo issues saves sales and grows loyalty programs."
  },
  {
    id: 7,
    title: "Cancel Order",
    mappedClusterIntent: "Order Tracking & Delivery",
    rank: 7,
    priority: "Critical",
    description: "Order cancellation is part of order management and delivery processes, requiring intervention in the fulfillment pipeline.",
    confidence: "82% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Recovered Sales / Lower Return Rates", priority: "High", confidence: "93%" },
      { rank: 2, title: "Enhanced Brand Trust", priority: "High", confidence: "91%" },
      { rank: 3, title: "Upsell & Cross-Sell Conversions", priority: "Medium", confidence: "87%" },
      { rank: 4, title: "Improved Product Quality Feedback Loop", priority: "Medium", confidence: "85%" }
    ],
    reason: "Problem-solving prevents cancellations and creates upsell chances."
  },
  {
    id: 8,
    title: "Order Modification Request",
    mappedClusterIntent: "Order Tracking & Delivery",
    rank: 8,
    priority: "Critical",
    description: "Modifying orders involves tracking and managing delivery processes to implement changes before fulfillment.",
    confidence: "80% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Reduced Customer Effort", priority: "High", confidence: "96%" },
      { rank: 2, title: "Recovered Sales / Lower Return Rates", priority: "High", confidence: "94%" },
      { rank: 3, title: "Upsell & Cross-Sell Conversions", priority: "Medium", confidence: "88%" },
      { rank: 4, title: "Enhanced Brand Trust", priority: "Medium", confidence: "86%" }
    ],
    reason: "Easy order changes keep customers and encourage upgrades."
  },
  {
    id: 9,
    title: "Payment or Billing Issues",
    mappedClusterIntent: "Complaints & Escalations",
    rank: 9,
    priority: "Critical",
    description: "Payment and billing problems are serious issues that can escalate quickly and require specialized handling to resolve financial concerns.",
    confidence: "85% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Risk & Crisis Management", priority: "High", confidence: "97%" },
      { rank: 2, title: "Enhanced Brand Trust", priority: "High", confidence: "94%" },
      { rank: 3, title: "Recovered Sales / Lower Return Rates", priority: "Medium", confidence: "90%" },
      { rank: 4, title: "Improved CLV / Conversion Rate", priority: "Medium", confidence: "87%" }
    ],
    reason: "Resolving payment issues prevents churn and protects reputation."
  },
  {
    id: 10,
    title: "Lost or Undelivered Package",
    mappedClusterIntent: "Complaints & Escalations",
    rank: 10,
    priority: "Critical",
    description: "Lost packages represent significant service failures requiring investigation, compensation, and escalation to shipping partners.",
    confidence: "92% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Risk & Crisis Management", priority: "High", confidence: "98%" },
      { rank: 2, title: "Recovered Sales / Lower Return Rates", priority: "High", confidence: "95%" },
      { rank: 3, title: "Enhanced Brand Trust", priority: "High", confidence: "92%" },
      { rank: 4, title: "Market Expansion Clues", priority: "Low", confidence: "85%" }
    ],
    reason: "Quick replacements retain customers and reveal delivery challenges."
  },
  {
    id: 11,
    title: "Product Quality or Defect Issues",
    mappedClusterIntent: "Complaints & Escalations",
    rank: 11,
    priority: "Critical",
    description: "Quality and defect issues represent product failures that require escalation for resolution and potential warranty/return processing.",
    confidence: "95% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Improved Product Quality Feedback Loop", priority: "High", confidence: "97%" },
      { rank: 2, title: "Enhanced Brand Trust", priority: "High", confidence: "94%" },
      { rank: 3, title: "Risk & Crisis Management", priority: "Medium", confidence: "91%" },
      { rank: 4, title: "Recovered Sales / Lower Return Rates", priority: "Medium", confidence: "88%" }
    ],
    reason: "Defect resolution drives product improvement and customer retention."
  },
  {
    id: 12,
    title: "Website or Technical Issues",
    mappedClusterIntent: "Complaints & Escalations",
    rank: 12,
    priority: "Important",
    description: "Technical problems preventing customers from using services require escalation to technical teams and immediate attention.",
    confidence: "88% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Reduced Customer Effort", priority: "High", confidence: "95%" },
      { rank: 2, title: "Recovered Sales / Lower Return Rates", priority: "High", confidence: "92%" },
      { rank: 3, title: "Enhanced Brand Trust", priority: "Medium", confidence: "89%" },
      { rank: 4, title: "Improved CLV / Conversion Rate", priority: "Medium", confidence: "86%" }
    ],
    reason: "Fixing technical issues enables purchases and builds brand confidence."
  },
  {
    id: 13,
    title: "Shipping or Delivery Inquiries",
    mappedClusterIntent: "Order Tracking & Delivery",
    rank: 13,
    priority: "Critical",
    description: "Perfect match for the Order Tracking & Delivery cluster which handles shipping and delivery questions as core functionality.",
    confidence: "100% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Enhanced Brand Trust", priority: "High", confidence: "94%" },
      { rank: 2, title: "Reduced Customer Effort", priority: "High", confidence: "91%" },
      { rank: 3, title: "Improved CLV / Conversion Rate", priority: "Medium", confidence: "87%" },
      { rank: 4, title: "Market Expansion Clues", priority: "Low", confidence: "85%" }
    ],
    reason: "Transparent shipping info builds trust and reduces cancellations."
  },
  {
    id: 14,
    title: "Account or Membership Issues",
    mappedClusterIntent: "Loyalty Program & Offers",
    rank: 14,
    priority: "Important",
    description: "Account and membership issues relate to customer loyalty programs and membership management systems.",
    confidence: "85% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Loyalty Program Growth", priority: "High", confidence: "96%" },
      { rank: 2, title: "Enhanced Brand Trust", priority: "High", confidence: "90%" },
      { rank: 3, title: "Improved CLV / Conversion Rate", priority: "Medium", confidence: "85%" }
    ],
    reason: "Account resolution improves loyalty program engagement and retention."
  },
  {
    id: 15,
    title: "Product Information Request",
    mappedClusterIntent: "Product Education",
    rank: 15,
    priority: "Informational",
    description: "Requests for product information directly match the Product Education cluster which provides product details and specifications.",
    confidence: "98% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Better Product Fit & Usage Guidance", priority: "High", confidence: "87%" },
      { rank: 2, title: "Upsell & Cross-Sell Conversions", priority: "High", confidence: "84%" },
      { rank: 3, title: "Enhanced Brand Trust", priority: "Medium", confidence: "82%" }
    ],
    reason: "Product education drives informed purchasing decisions and reduces returns."
  },
  {
    id: 16,
    title: "First-time Customer Discount",
    mappedClusterIntent: "Loyalty Program & Offers",
    rank: 16,
    priority: "Important",
    description: "First-time customer discounts are promotional offers that fall under loyalty programs and special offers management.",
    confidence: "90% Confidence",
    businessOutcomes: [
      { rank: 1, title: "Campaign Effectiveness", priority: "High", confidence: "90%" },
      { rank: 2, title: "Improved CLV / Conversion Rate", priority: "High", confidence: "88%" },
      { rank: 3, title: "Loyalty Program Growth", priority: "Medium", confidence: "85%" }
    ],
    reason: "First-time discounts drive customer acquisition and loyalty program enrollment."
  }
];
      