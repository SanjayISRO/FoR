export const AGENT_PERSONA_DATA = [
  {
    "personaName": "Order Status & Tracking",
    "roleSummary": "Specialists in order fulfillment inquiries, shipping updates, and delivery coordination with high efficiency focus",
    "agentCount": 4,
    "personaProfile": {
      "intent_triggers": [
        "order_status",
        "tracking",
        "shipping",
        "delivery"
      ],
      "stage_triggers": [
        "checkout",
        "post-sale"
      ],
      "segment_triggers": [
        "b2c",
        "b2b"
      ],
      "behavioural_traits_notes": "Moderate empathy gains with strong sentiment improvement, focused on preventing repeat contacts",
      "performance_traits_notes": "Below average handle time with high hold usage but excellent efficiency normalization"
    },
    "kpi_alignment": {
      "leading_kpis": [
        {
          "kpi_name": "Number of Transfers per Contact",
          "direction": "decrease",
          "mechanism": "Moderate transfer rates due to specialized tracking knowledge"
        },
        {
          "kpi_name": "Time to Resolution",
          "direction": "decrease",
          "mechanism": "Below average AHT through efficient order lookup processes"
        },
        {
          "kpi_name": "Contacts per Order Ratio",
          "direction": "decrease",
          "mechanism": "High delta_nextcontact_avoid_pct prevents repeat tracking inquiries"
        }
      ],
      "lagging_kpis": [
        {
          "kpi_name": "First Contact Resolution Percentage (FCR)",
          "direction": "increase",
          "mechanism": "Specialized tracking expertise enables single-contact resolution"
        },
        {
          "kpi_name": "Customer Effort Score (CES)",
          "direction": "decrease",
          "mechanism": "Efficient order status updates reduce customer effort"
        },
        {
          "kpi_name": "Average Handling Time (AHT) Overall",
          "direction": "decrease",
          "mechanism": "Streamlined tracking processes and system familiarity"
        }
      ]
    }
  },
  {
    "personaName": "Product Information & Support",
    "roleSummary": "Product experts providing detailed information, specifications, and usage guidance across customer journey stages",
    "agentCount": 9,
    "personaProfile": {
      "intent_triggers": [
        "product_info",
        "specifications",
        "usage",
        "compatibility"
      ],
      "stage_triggers": [
        "awareness",
        "evaluation",
        "selection",
        "post-sale"
      ],
      "segment_triggers": [
        "b2c",
        "b2b"
      ],
      "behavioural_traits_notes": "Strong empathy building with slight sentiment challenges, focused on comprehensive information delivery",
      "performance_traits_notes": "Efficient handling with low transfers, moderate hold usage for information lookup"
    },
    "kpi_alignment": {
      "leading_kpis": [
        {
          "kpi_name": "Number of Transfers per Contact",
          "direction": "decrease",
          "mechanism": "Low transfer rate due to comprehensive product knowledge"
        },
        {
          "kpi_name": "Agent Product Knowledge Score",
          "direction": "increase",
          "mechanism": "High product_info sub-intent focus builds expertise"
        },
        {
          "kpi_name": "Assisted Conversion Attempts (Number of Opportunities Created)",
          "direction": "increase",
          "mechanism": "Awareness and evaluation stage presence creates sales opportunities"
        }
      ],
      "lagging_kpis": [
        {
          "kpi_name": "Customer Satisfaction (CSAT) / Net Promoter Score (NPS) on Resolved Tickets",
          "direction": "increase",
          "mechanism": "High empathy delta and comprehensive product guidance"
        },
        {
          "kpi_name": "Conversion Rate Percentage (Assisted)",
          "direction": "increase",
          "mechanism": "Strong awareness and evaluation stage engagement"
        },
        {
          "kpi_name": "Average Order Value (AOV) from Assisted Channels",
          "direction": "increase",
          "mechanism": "Product expertise enables upselling and cross-selling"
        }
      ]
    }
  },
  {
    "personaName": "Promotions & Pricing",
    "roleSummary": "Pricing specialists managing discount inquiries, promotional offers, and revenue optimization opportunities",
    "agentCount": 9,
    "personaProfile": {
      "intent_triggers": [
        "pricing",
        "discounts",
        "promotions",
        "offers",
        "coupons"
      ],
      "stage_triggers": [
        "post-sale",
        "checkout"
      ],
      "segment_triggers": [
        "b2c",
        "b2b"
      ],
      "behavioural_traits_notes": "Strong empathy and sentiment improvement, focused on customer satisfaction through pricing solutions",
      "performance_traits_notes": "Efficient handling with low transfers, moderate hold time for pricing verification"
    },
    "kpi_alignment": {
      "leading_kpis": [
        {
          "kpi_name": "Attach Rate / Upsell Rate",
          "direction": "increase",
          "mechanism": "High discount sub-intent focus creates upselling opportunities"
        },
        {
          "kpi_name": "Recovery Offers Accepted",
          "direction": "increase",
          "mechanism": "Strong sentiment improvement through pricing solutions"
        },
        {
          "kpi_name": "Percentage of Exchanges Offered vs. Refunds",
          "direction": "increase",
          "mechanism": "Post-sale stage focus enables exchange promotion over refunds"
        }
      ],
      "lagging_kpis": [
        {
          "kpi_name": "Customer Satisfaction (CSAT) / Net Promoter Score (NPS) on Resolved Tickets",
          "direction": "increase",
          "mechanism": "High sentiment delta through successful pricing resolutions"
        },
        {
          "kpi_name": "Sales Recovery Percentage",
          "direction": "increase",
          "mechanism": "Promotional offers convert potential losses to retained sales"
        },
        {
          "kpi_name": "Revenue per Contact / Revenue per Agent Hour",
          "direction": "increase",
          "mechanism": "Pricing optimization and promotional upselling"
        }
      ]
    }
  },
  {
    "personaName": "Returns & Refunds",
    "roleSummary": "Return processing specialists focused on customer retention, exchange promotion, and refund optimization",
    "agentCount": 8,
    "personaProfile": {
      "intent_triggers": [
        "returns",
        "refunds",
        "exchanges",
        "warranty"
      ],
      "stage_triggers": [
        "return_recovery",
        "post-sale"
      ],
      "segment_triggers": [
        "b2c",
        "b2b"
      ],
      "behavioural_traits_notes": "Exceptional sentiment improvement through effective return handling and customer retention focus",
      "performance_traits_notes": "Efficient processing with moderate transfers for policy verification, strong sentiment outcomes"
    },
    "kpi_alignment": {
      "leading_kpis": [
        {
          "kpi_name": "Percentage of Exchanges Offered vs. Refunds",
          "direction": "increase",
          "mechanism": "High return_recovery stage focus promotes exchanges over refunds"
        },
        {
          "kpi_name": "Recovery Offers Accepted",
          "direction": "increase",
          "mechanism": "Strong sentiment improvement indicates successful retention efforts"
        },
        {
          "kpi_name": "Contact Resolution Time for Return Queries",
          "direction": "decrease",
          "mechanism": "Efficient AHT and specialized return processing expertise"
        }
      ],
      "lagging_kpis": [
        {
          "kpi_name": "Sales Recovery Percentage",
          "direction": "increase",
          "mechanism": "High revenue potential and exchange promotion over refunds"
        },
        {
          "kpi_name": "Customer Trust / CSAT on Returns",
          "direction": "increase",
          "mechanism": "Exceptional sentiment improvement through empathetic return handling"
        },
        {
          "kpi_name": "Customer Retention Rate",
          "direction": "increase",
          "mechanism": "Focus on exchanges and recovery offers maintains customer relationships"
        }
      ]
    }
  },
  {
    "personaName": "Technical & Website Issues",
    "roleSummary": "Technical support specialists handling website functionality, payment processing, and account access issues",
    "agentCount": 11,
    "personaProfile": {
      "intent_triggers": [
        "technical",
        "website",
        "payment",
        "account",
        "login",
        "system"
      ],
      "stage_triggers": [
        "checkout",
        "post-sale",
        "selection"
      ],
      "segment_triggers": [
        "b2c",
        "b2b"
      ],
      "behavioural_traits_notes": "Strong sentiment improvement through technical problem resolution, moderate empathy building",
      "performance_traits_notes": "Efficient technical resolution with low transfers, minimal hold time due to expertise"
    },
    "kpi_alignment": {
      "leading_kpis": [
        {
          "kpi_name": "Number of Transfers per Contact",
          "direction": "decrease",
          "mechanism": "Low transfer rate due to specialized technical expertise"
        },
        {
          "kpi_name": "Time to Resolution",
          "direction": "decrease",
          "mechanism": "Below average AHT through technical proficiency"
        },
        {
          "kpi_name": "Escalation Rate",
          "direction": "decrease",
          "mechanism": "Technical expertise prevents escalation of complex issues"
        }
      ],
      "lagging_kpis": [
        {
          "kpi_name": "First Contact Resolution Percentage (FCR)",
          "direction": "increase",
          "mechanism": "Technical expertise enables single-contact resolution of complex issues"
        },
        {
          "kpi_name": "Customer Satisfaction (CSAT) / Net Promoter Score (NPS) on Resolved Tickets",
          "direction": "increase",
          "mechanism": "High sentiment improvement through effective technical problem solving"
        },
        {
          "kpi_name": "Customer Effort Score (CES)",
          "direction": "decrease",
          "mechanism": "Technical expertise reduces customer effort in problem resolution"
        }
      ]
    }
  }
];
