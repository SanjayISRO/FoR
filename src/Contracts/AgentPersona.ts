export const AGENT_PERSONA_TABLE_DATA = [
  {
    "id": 1,
    "Category": "Performance Based",
    "Name": "Rapid First Responder",
    "Traits": ["RSP ≥ 0.80 (very responsive)", "EFF ≥ 0.70 (fast handle)", "DOC ≥ 0.70 (low ACW)", "OCC ≥ 0.70 (keeps load steady)", "TRN ≥ 0.70, CTL ≥ 0.70 (few holds/transfers)"],
    "Type": "Pre-sales",
    "Behaviour": ["Quick pickup (RSP)", "Short handle (EFF)", "Low ACW (DOC)", "Steady occupancy"],
    "Count": 10
  },
  {
    "id": 2,
    "Category": "Performance Based",
    "Name": "Efficient Resolver",
    "Traits": ["EFF ≥ 0.75 (strong efficiency)", "RES ≥ 0.80 (good FCR)", "CTL ≥ 0.70 (low hold/hold time)", "TRN ≥ 0.70 (low transfers)", "(Boosters: RSP ≥ 0.60, OCC ≥ 0.70)"],
    "Type": "Post-sales",
    "Behaviour": ["Fast handle", "Minimal holds/transfers", "High FCR"],
    "Count": 15
  },
  {
    "id": 3,
    "Category": "Performance Based",
    "Name": "First-Call Closer",
    "Traits": ["RES ≥ 0.90 (excellent FCR)", "TRN ≥ 0.80 (almost no transfers)", "CTL ≥ 0.70 (limited holds)", "EFF ≥ 0.60 (handle time reasonable)", "DOC ≥ 0.60 (manageable ACW)"],
    "Type": "Post-sales",
    "Behaviour": ["Highest FCR + very low transfers", "Handle time flexible"],
    "Count": 20
  },
  {
    "id": 4,
    "Category": "Performance Based",
    "Name": "Collaborative Problem Solver",
    "Traits": ["TRN ≤ 0.60 overall but consult share ≥ 0.60 (consult > blind)", "RES ≥ 0.75 (good FCR)", "EFF ≥ 0.50 (moderate efficiency)", "CTL ≥ 0.50 (ok hold time)", "Optional: ENG ≥ 0.55 (agent talks enough to coordinate)"],
    "Type": "Pre-sales",
    "Behaviour": ["Solves with consult transfers (not blind)", "Acceptable handle"],
    "Count": 10
  },
  {
    "id": 5,
    "Category": "Performance Based",
    "Name": "Self-Sufficient Executor",
    "Traits": ["TRN ≥ 0.90 (rarely transfers)", "CTL ≥ 0.90 (rarely holds)", "RES ≥ 0.80 (high FCR)", "EFF ≥ 0.70 (good handle)", "DOC ≥ 0.65 (manageable ACW)"],
    "Type": "Post-sales",
    "Behaviour": ["Almost no transfers/holds", "High FCR"],
    "Count": 30
  },
  {
    "id": 6,
    "Category": "Performance Based",
    "Name": "Balanced Operator",
    "Traits": ["EFF ∈ [0.50, 0.70] (moderate handle)", "RES ≥ 0.70 (solid FCR)", "TRN ≥ 0.60, CTL ≥ 0.60 (ok on rework/holds)", "OCC ∈ [0.65, 0.80] (healthy load, not extreme)", "ENG ∈ [0.45, 0.75] (balanced engagement)", "DOC ≥ 0.60 (reasonable ACW)"],
    "Type": "Pre-sales",
    "Behaviour": ["All traits in balance", "Avoids extremes"],
    "Count": 25
  },
  {
    "id": 7,
    "Category": "Performance Based",
    "Name": "High-Volume Sprinter",
    "Traits": ["OCC ≥ 0.90 (very high load)", "RSP ≥ 0.80 (quick pickup)", "EFF ≥ 0.75 (fast handle)", "DOC ≥ 0.70 (low ACW)", "RES ≥ 0.70 (acceptable FCR)", "TRN ≥ 0.60, CTL ≥ 0.70"],
    "Type": "Post-sales",
    "Behaviour": ["Heavy load handler", "Very high occupancy but keeps efficiency"],
    "Count": 10
  },
  {
    "id": 8,
    "Category": "Behavior Based",
    "Name": "Empathetic Guide",
    "Traits": ["High empathy (≥80)", "Strong sentiment lift"],
    "Type": "Pre-sales",
    "Behaviour": ["Calms frustration", "Handles sensitive issues (returns, wrong orders)"],
    "Count": 13
  },
  {
     "id": 9,
    "Category": "Behavior Based",
    "Name": "Efficient Resolver", 
    "Traits": ["High QA (≥85)", "High FCR (avoids next contact)"],
    "Type": "Post-sales",
    "Behaviour": ["Process-driven", "Resolves fast", "Excels in order tracking & exchanges"],
    "Count": 30
  },
  {
     "id": 10,
    "Category": "Behavior Based",
    "Name": "Experience Enhancer",
    "Traits": ["Balanced QA + strong empathy (≥70)", "Positive sentiment lift"],
    "Type": "Pre-sales", 
    "Behaviour": ["Creates loyalty moments", "Makes product suggestions", "Offers styling help"],
    "Count": 5
  },
  {
     "id": 11,
    "Category": "Behavior Based",
    "Name": "Compliance Champion",
    "Traits": ["Very high QA/adherence (≥90)", "Steady sentiment"],
    "Type": "Post-sales",
    "Behaviour": ["Strict process follower", "Reliable in regulated/warranty cases"],
    "Count": 25
  },
  {
     "id": 12,
    "Category": "Behavior Based",
    "Name": "Sentiment Saver",
    "Traits": ["Mid QA", "Strong ability to turn negative → neutral/positive"],
    "Type": "Post-sales",
    "Behaviour": ["De-escalation expert", "Handles angry or anxious customers"],
    "Count": 32
  },
  {
    "id": 13,
    "Category": "Intent Based Persona",
    "Name": "Order & Delivery Specialist",
    "Traits": ["Order status inquiry", "Lost or undelivered package", "Shipping or delivery inquiries", "Missing or incomplete order", "Shipping address correction"],
    "Type": "Post-Sales",
    "Behaviour": ["Excels at tracking shipments", "resolving delivery delays","coordinating with carriers", "Demonstrates proactive communication about warehouse issues and shipping status updates."],
    "Count": ["93d461313a6a2fd3821e96db1216702e06d950fcb32cfcc7565221a66195bcc6", "55ca6df7c9625112278fc1c7270a7a9b9a816eb044dba70d4302692745b2e690", "0ad7515f42de75755ed7109cbdae5215cac141d5dcd0b2d9e10ce171a0e9ed6d"]
  },
  {
     "id": 14,
    "Category": "Intent Based Persona",
    "Name": "Returns & Warranty Expert", 
    "Traits": ["Request return or refund", "Product warranty claim", "Product quality or defect issues"],
    "Type": "Post-Sales",
    "Behaviour": ["Skilled at processing returns", "Creating shipping labels","Guiding customers through warranty procedures","Provides clear timelines and manages expectations for repair/replacement processes."],
    "Count": ["510bcec108734240c69276bc42820b7c81690a6177fed4ebff12a8ee31b62c81", "aba7a54f18775fed4ea7c8a0e241be415faee19b78c6767e86cf0e856b74e0c7", "0ad7515f42de75755ed7109cbdae5215cac141d5dcd0b2d9e10ce171a0e9ed6d"]
  },
  {
     "id": 15,
    "Category": "Intent Based Persona",
    "Name": "Product Advisor",
    "Traits": ["Product information request", "Promo code or discount issues", "First-time customer discount"],
    "Type": "Pre-Sales", 
    "Behaviour": ["Helps customers with product details","Sizing questions","Promotional code applications","Demonstrates strong knowledge of product specifications and discount program terms."],
    "Count": ["55ca6df7c9625112278fc1c7270a7a9b9a816eb044dba70d4302692745b2e690", "aba7a54f18775fed4ea7c8a0e241be415faee19b78c6767e86cf0e856b74e0c7", "a64030a5b0a55036ae70f834d5f8e5f1527b367d23083de83d0b54207a6f35c2"]
  },
  {
     "id": 16,
    "Category": "Intent Based Persona",
    "Name": "Corporate/Policy Supporter",
    "Traits": ["Payment or billing issues", "Account or membership issues"],
    "Type": "Post-Sales",
    "Behaviour": ["Handles complex billing disputes","Account access issues","Policy-related inquiries","Demonstrates knowledge of corporate procedures and dealer/distributor relationships."],
    "Count": ["c11824985e20fa058b347c0d5dc9ef8a2b44bceaea1519ba95ea04d2cc949254", "a64030a5b0a55036ae70f834d5f8e5f1527b367d23083de83d0b54207a6f35c2", "cd0c62c02296d0bc77630e68e043044471cf6eb7c88202734db15088c45a9e8a"]
  },
  {
     "id": 17,
    "Category": "Intent Based Persona",
    "Name": "Multi-Brand Navigator",
    "Traits": ["Cancel order", "Order modification request"],
    "Type": "Post-Sales",
    "Behaviour": ["Efficiently manages order changes and cancellations across different product lines","Shows flexibility in handling various customer needs and system limitations."],
    "Count": ["0ad7515f42de75755ed7109cbdae5215cac141d5dcd0b2d9e10ce171a0e9ed6d", "55ca6df7c9625112278fc1c7270a7a9b9a816eb044dba70d4302692745b2e690"]
  },
  {
     "id": 18,
    "Category": "Intent Based Persona",
    "Name": "Technical Troubleshooter",
    "Traits": ["Website or technical issues"],
    "Type": "Pre-Sales",
    "Behaviour": ["Resolves website functionality problems","Assists with account creation issues","Troubleshoots technical barriers to purchase completion."],
    "Count": ["a64030a5b0a55036ae70f834d5f8e5f1527b367d23083de83d0b54207a6f35c2", "cd0c62c02296d0bc77630e68e043044471cf6eb7c88202734db15088c45a9e8a"]
  }
]