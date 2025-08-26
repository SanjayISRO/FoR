export const CUSTOMER_INTENT_DATA = [
  {
    "id": 9,
    "title": "Payment Or Billing Issues",
    "mappedClusterIntent": "Complaints & Escalations",
    "description": "Payment and billing problems are serious issues that can escalate quickly and require specialized handling to resolve financial concerns.",
    "confidence": "85% Confidence",
    "rank": 1,
    "priority": "Critical",
    "businessOutcomes": [
      {
        rank: 1,
        title: "Reduced Customer Effort",
        priority: "High",
        confidence: "95%"
      },
      {
        rank: 2,
        title: "Enhanced Brand Trust",
        priority: "High",
        confidence: "90%"
      },
      {
        rank: 3,
        title: "Improved CLV / Conversion Rate",
        priority: "Medium",
        confidence: "88%"
      },
      {
        rank: 4,
        title: "Upsell & Cross-Sell Conversions",
        priority: "Medium",
        confidence: "85%"
      }
    ]
  },
  {
    "id": 2,
    "title": "Missing Or Incomplete Order",
    "mappedClusterIntent": "Complaints & Escalations",
    "description": "Missing or incomplete orders represent service failures that require immediate attention and potential escalation to resolve customer dissatisfaction.",
    "confidence": "90% Confidence",
    "rank": 2,
    "priority": "Critical"
  },
  {
    "id": 4,
    "title": "Shipping Address Correction",
    "mappedClusterIntent": "Order Tracking & Delivery",
    "description": "Address corrections are delivery-related issues that fall under shipping and delivery management.",
    "confidence": "85% Confidence",
    "rank": 3,
    "priority": "Critical"
  },
  {
    "id": 7,
    "title": "Cancel Order",
    "mappedClusterIntent": "Order Tracking & Delivery",
    "description": "Order cancellation is part of order management and delivery processes, requiring intervention in the fulfillment pipeline.",
    "confidence": "82% Confidence",
    "rank": 4,
    "priority": "Critical"
  },
  {
    "id": 8,
    "title": "Order Modification Request",
    "mappedClusterIntent": "Order Tracking & Delivery",
    "description": "Modifying orders involves tracking and managing delivery processes to implement changes before fulfillment.",
    "confidence": "80% Confidence",
    "rank": 5,
    "priority": "Critical"
  },
  {
    "id": 10,
    "title": "Lost Or Undelivered Package",
    "mappedClusterIntent": "Complaints & Escalations",
    "description": "Lost packages represent significant service failures requiring investigation, compensation, and escalation to shipping partners.",
    "confidence": "92% Confidence",
    "rank": 6,
    "priority": "Critical"
  },
  {
    "id": 3,
    "title": "Request Return Or Refund",
    "mappedClusterIntent": "Returns & Exchanges",
    "description": "Exact match to the Returns & Exchanges cluster which handles return requests as a primary example intent.",
    "confidence": "100% Confidence",
    "rank": 7,
    "priority": "Important"
  },
  {
    "id": 1,
    "title": "Order Status Inquiry",
    "mappedClusterIntent": "Order Tracking & Delivery",
    "description": "Direct match to tracking orders, which is a core example in the Order Tracking & Delivery cluster.",
    "confidence": "98% Confidence",
    "rank": 8,
    "priority": "Important"
  },
  {
    "id": 5,
    "title": "Product Warranty Claim",
    "mappedClusterIntent": "Warranty & Repairs",
    "description": "Direct match to the Warranty & Repairs cluster which specifically handles warranty-related inquiries.",
    "confidence": "100% Confidence",
    "rank": 9,
    "priority": "Important"
  },
  {
    "id": 6,
    "title": "Promo Code Or Discount Issues",
    "mappedClusterIntent": "Loyalty Program & Offers",
    "description": "Promotional codes and discounts are part of offers and promotional programs managed under loyalty and offers.",
    "confidence": "88% Confidence",
    "rank": 10,
    "priority": "Important"
  },
  {
    "id": 11,
    "title": "Product Quality Or Defect Issues",
    "mappedClusterIntent": "Complaints & Escalations",
    "description": "Quality and defect issues represent product failures that require escalation for resolution and potential warranty/return processing.",
    "confidence": "95% Confidence",
    "rank": 11,
    "priority": "Critical"
  },
  {
    "id": 12,
    "title": "Website Or Technical Issues",
    "mappedClusterIntent": "Complaints & Escalations",
    "description": "Technical problems preventing customers from using services require escalation to technical teams and immediate attention.",
    "confidence": "88% Confidence",
    "rank": 12,
    "priority": "Important"
  },
  {
    "id": 13,
    "title": "Shipping Or Delivery Inquiries",
    "mappedClusterIntent": "Order Tracking & Delivery",
    "description": "Perfect match for the Order Tracking & Delivery cluster which handles shipping and delivery questions as core functionality.",
    "confidence": "100% Confidence",
    "rank": 13,
    "priority": "Critical"
  },
  {
    "id": 14,
    "title": "Account Or Membership Issues",
    "mappedClusterIntent": "Loyalty Program & Offers",
    "description": "Account and membership issues relate to customer loyalty programs and membership management systems.",
    "confidence": "85% Confidence",
    "rank": 14,
    "priority": "Important"
  },
  {
    "id": 15,
    "title": "Product Information Request",
    "mappedClusterIntent": "Product Education",
    "description": "Requests for product information directly match the Product Education cluster which provides product details and specifications.",
    "confidence": "98% Confidence",
    "rank": 15,
    "priority": "Informational"
  },
  {
    "id": 16,
    "title": "First-Time Customer Discount",
    "mappedClusterIntent": "Loyalty Program & Offers",
    "description": "First-time customer discounts are promotional offers that fall under loyalty programs and special offers management.",
    "confidence": "90% Confidence",
    "rank": 16,
    "priority": "Important"
  }
];

export const BUSINESS_OUTCOME_DATA = [
  {
    id: 1,
    rank: 1,
    title: "Reduced Customer Effort",
    description: "Minimize the effort customers need to exert when interacting with your service",
    priority: "Medium",
    confidence: "96% Confidence",
    kpiDatas: "CES, Delivery Time Accuracy",
    weightageFactor: 2
  },
  {
    id: 2,
    rank: 2,
    title: "Recovered Sales / Lower Return Rates",
    description: "Recapture lost revenue and reduce product returns through better service",
    priority: "High",
    confidence: "89% Confidence",
    kpiDatas: "Save Rate, Return %",
    weightageFactor: 3
  },
  {
    id: 3,
    rank: 3,
    title: "Market Expansion Clues",
    description: "Identify opportunities and insights for entering new markets",
    priority: "Medium",
    confidence: "92% Confidence",
    kpiDatas: "Stock Availability %, Regional Inquiry Volume",
    weightageFactor: 2
  },
  {
    id: 4,
    rank: 4,
    title: "Upsell & Cross-Sell Conversions",
    description: "Increase revenue by selling additional or complementary products to existing customers",
    priority: "High",
    confidence: "90% Confidence",
    kpiDatas: "Upsell Rate, AOV",
    weightageFactor: 3
  },
  {
    id: 5,
    rank: 5,
    title: "Improved Product Quality Feedback Loop",
    description: "Enhance product quality through systematic customer feedback collection and analysis",
    priority: "High",
    confidence: "74% Confidence",
    kpiDatas: "Defect Report Rate, Repair Resolution Time",
    weightageFactor: 3
  },
  {
    id: 6,
    rank: 6,
    title: "Better Product Fit & Usage Guidance",
    description: "Help customers select and use products that best match their needs",
    priority: "Medium",
    confidence: "87% Confidence",
    kpiDatas: "Fit-related Return Rate",
    weightageFactor: 2
  },
  {
    id: 7,
    rank: 7,
    title: "Enhanced Brand Trust",
    description: "Build stronger customer confidence and credibility in your brand",
    priority: "Medium",
    confidence: "76% Confidence",
    kpiDatas: "CSAT, Product Knowledge Accuracy",
    weightageFactor: 2
  },
  {
    id: 8,
    rank: 8,
    title: "Sustainability Credibility",
    description: "Establish authentic environmental responsibility and sustainable business practices",
    priority: "Medium",
    confidence: "98% Confidence",
    kpiDatas: "% Eco Mentions, Awareness Score",
    weightageFactor: 2
  },
  {
    id: 9,
    rank: 9,
    title: "Loyalty Program Growth",
    description: "Expand customer retention through effective loyalty and rewards programs",
    priority: "High",
    confidence: "55% Confidence",
    kpiDatas: "Enrollment %, Redemption Rate",
    weightageFactor: 3
  },
  {
    id: 10,
    rank: 10,
    title: "Risk & Crisis Management",
    description: "Proactively identify and resolve potential business risks and customer issues",
    priority: "High",
    confidence: "66% Confidence",
    kpiDatas: "Time-to-Resolve, Complaint Volume",
    weightageFactor: 3
  },
  {
    id: 11,
    rank: 11,
    title: "Competitive Intelligence / Win-back Rate",
    description: "Gather market insights and recapture customers lost to competitors",
    priority: "High",
    confidence: "84% Confidence",
    kpiDatas: "Win-back Rate, Competitor Mentions",
    weightageFactor: 3
  },
  {
    id: 12,
    rank: 12,
    title: "Improved CLV / Conversion Rate",
    description: "Maximize customer lifetime value and optimize conversion rates",
    priority: "High",
    confidence: "74% Confidence",
    kpiDatas: "Conversion %, Sales from Assisted Calls",
    weightageFactor: 3
  },
  {
    id: 13,
    rank: 13,
    title: "Campaign Effectiveness",
    description: "Measure and optimize marketing campaign performance and ROI",
    priority: "Medium",
    confidence: "83% Confidence",
    kpiDatas: "Campaign Conversion %, Inquiry Volume",
    weightageFactor: 2
  },
  {
    id: 14,
    rank: 14,
    title: "Market Share Expansion",
    description: "Grow business presence and capture larger portion of target markets",
    priority: "Medium",
    confidence: "94% Confidence",
    kpiDatas: "B2B Order Volume, Lead Conversion Rate",
    weightageFactor: 2
  }
]

export const DROP_DOWN_LIST = ['Customer Churn Rate Reduction', 'Revenue Generation', 'Increase Loyalty']

