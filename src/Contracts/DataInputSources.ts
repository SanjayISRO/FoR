import historicalData from "../assets/images/conversational_data.png";
import intentMiner from "../assets/images/intent_miner.png";
import topicMiner from "../assets/images/topic_miner.png";
import conversationData from "../assets/images/conversation_data.png";

export const ROUTING_CATEGORY = [
  {
    name: "routingCategory",
    heading: "Historical coversation data",
    subText: "Description here",
    imgSrc: historicalData,
    checked: true,
    inputType: "radio" as const,
  }
]

export const INPUT_SOURCE_DATA = [
  {
    name: "intenttMiner",
    heading: "Intent Miner",
    subText: "Available in Architect (Bot Context)",
    imgSrc: intentMiner,
    checked: true,
    inputType: "checkbox" as const,
  },
  {
    name: "topicMiner",
    heading: "Topic Miner",
    subText: "Quality Management",
    imgSrc: topicMiner,
    checked: true,
    inputType: "checkbox" as const,
  },
  {
    name: "conversationData",
    heading: "Conversation Data",
    subText: "Participants, Notes, Surveys, Wrapup Codes",
    imgSrc: conversationData,
    checked: true,
    inputType: "checkbox" as const,
  },
]