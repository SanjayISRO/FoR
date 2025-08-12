export const AGENT_PERSONA_TABLE_DATA = [
  {
    id: 1,
    personaTitle: "Empathetic Advisor",
    categories: `- Average empathy_Score ≥ 75 AND
   - Average sentimentScore ≥ 0.70 AND
   - Average totalScore ≥ 70 AND
   - Average totalScore < 80`,
    agentCount: 1,
  },
  {
    id: 2,
    personaTitle: "Efficient Resolver",
    categories: `- Average totalScore ≥ 80 AND
   - Average totalScore < 85 AND
   - All nNextContactAvoided = 1 AND
   - Average empathy_Score ≥ 70 AND
   - Average sentimentScore ≥ 65`,
    agentCount: 13,
  },
  {
    id: 3,
    personaTitle: "Brand Ambassador",
    categories: `- Average sentimentScore ≥ 0.70 AND
   - Average empathy_Score ≥ 60 AND
   - Average totalScore ≥ 85 AND
   - Average totalScore < 95`,
    agentCount: 7,
  },
  {
    id: 4,
    personaTitle: "Multilingual Specialist",
    categories: `- User_language_preference includes more than one language`,
    agentCount: 0,
  },
  {
    id: 5,
    personaTitle: "Process-Focused Agent",
    categories: `- Average totalScore ≥ 95 AND
   - (Average empathy_Score < 70 OR average sentimentScore < 70)`,
    agentCount: 35,
  },
  {
    id: 6,
    personaTitle: "Transactional Agent",
    categories: `- Average sentimentScore ≥ 50 AND
   - Average sentimentScore < 70 AND
   - Average empathy_Score ≥ 50 AND
   - Average empathy_Score < 70 AND
   - Average totalScore ≥ 50 AND
   - Average totalScore < 70`,
    agentCount: 0,
  },
  {
    id: 7,
    personaTitle: "Potential Trainee",
    categories: `- (Average totalScore < 50 OR average sentimentScore < 0.50 OR average empathy_Score < 50) AND
   - NOT qualifying for any other persona`,
    agentCount: 1,
  },
]