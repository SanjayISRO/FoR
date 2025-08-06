// React depencencies
import { useEffect, useState } from "react";

// 3rd party dependencies
import GroupsIcon from "@mui/icons-material/Groups";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

// Local Dependencies
import { useAppContext } from "../../../context/AppContext";
import styles from "./ReviewAndValidate.module.css";
import Note from "../../Note/Note";
import { Divider } from "@mui/material";
import IntentsAndOutcomeHeader from "../../IntentsAndOutcomeHeader/IntentsAndOutcomeHeader";
import IntentsAndOutcomeBody, { type IntentsAndOutcomeBodyProps } from "../../IntentsAndOutcomeBody/IntentsAndOutcomeBody";

interface ICustomerIntentMetrics {
    interactions: string;
    retention: string;
    cost: string;
  }
  
export interface ICustomerIntent {
    id: number;
    rank: number;
    title: string;
    description: string;
    priority: string;
    confidence: string;
    businessImpact: string;
    metrics: ICustomerIntentMetrics;
  }
  
  interface IBusinessOutcomeImpact {
    amount: string;
    type: string;
    urgency: string;
  }
  
export interface IBusinessOutcome {
    id: number;
    rank: number;
    title: string;
    description: string;
    priority: string;
    confidence: string;
    impact: IBusinessOutcomeImpact;
  }

const ReviewAndValidate: React.FC = () => {


  const { state, dispatch } = useAppContext();

  useEffect(() => {
      dispatch({
        type: 'SET_INTENTS',
        payload: [
            {
              "id": 1,
              "rank": 1,
              "title": "Payment Issue",
              "description": "Customer experiencing payment failures or billing problems",
              "priority": "High Priority",
              "confidence": "94% Confidence",
              "businessImpact": "Reduce friction in transactions, improve customer trust",
              "metrics": {
                "interactions": "150/month",
                "retention": "85%",
                "cost": "8,550/month"
              }
            },
            {
              "id": 2,
              "rank": 2,
              "title": "Account Cancellation",
              "description": "Customer requesting to cancel or downgrade service",
              "priority": "Critical Risk",
              "confidence": "88% Confidence",
              "businessImpact": "Prevent churn, identify retention opportunities",
              "metrics": {
                "interactions": "45/month",
                "retention": "45%",
                "cost": "12,000/month"
              }
            },
            {
              "id": 3,
              "rank": 3,
              "title": "Product Support",
              "description": "Technical assistance and troubleshooting requests",
              "priority": "Medium Priority",
              "confidence": "91% Confidence",
              "businessImpact": "Reduce friction in transactions, improve customer trust",
              "metrics": {
                "interactions": "320/month",
                "retention": "70%",
                "cost": "2,250/month"
              }
            },
            {
              "id": 4,
              "rank": 4,
              "title": "New Feature Inquiry",
              "description": "Questions about new product features or upgrades",
              "priority": "Low Expansion",
              "confidence": "70% Confidence",
              "businessImpact": "Drive feature adoption, identify expansion opportunities",
              "metrics": {
                "interactions": "85/month",
                "retention": "75%",
                "cost": "1,850/month"
              }
            },
            {
                "id": 1,
                "rank": 1,
                "title": "Payment Issue",
                "description": "Customer experiencing payment failures or billing problems",
                "priority": "High Priority",
                "confidence": "94% Confidence",
                "businessImpact": "Reduce friction in transactions, improve customer trust",
                "metrics": {
                  "interactions": "150/month",
                  "retention": "85%",
                  "cost": "8,550/month"
                }
              },
              {
                "id": 2,
                "rank": 2,
                "title": "Account Cancellation",
                "description": "Customer requesting to cancel or downgrade service",
                "priority": "Critical Risk",
                "confidence": "88% Confidence",
                "businessImpact": "Prevent churn, identify retention opportunities",
                "metrics": {
                  "interactions": "45/month",
                  "retention": "45%",
                  "cost": "12,000/month"
                }
              },
              {
                "id": 3,
                "rank": 3,
                "title": "Product Support",
                "description": "Technical assistance and troubleshooting requests",
                "priority": "Medium Priority",
                "confidence": "91% Confidence",
                "businessImpact": "Reduce friction in transactions, improve customer trust",
                "metrics": {
                  "interactions": "320/month",
                  "retention": "70%",
                  "cost": "2,250/month"
                }
              },
              {
                "id": 4,
                "rank": 4,
                "title": "New Feature Inquiry",
                "description": "Questions about new product features or upgrades",
                "priority": "Low Expansion",
                "confidence": "70% Confidence",
                "businessImpact": "Drive feature adoption, identify expansion opportunities",
                "metrics": {
                  "interactions": "85/month",
                  "retention": "75%",
                  "cost": "1,850/month"
                }
              },
              {
                "id": 1,
                "rank": 1,
                "title": "Payment Issue",
                "description": "Customer experiencing payment failures or billing problems",
                "priority": "High Priority",
                "confidence": "94% Confidence",
                "businessImpact": "Reduce friction in transactions, improve customer trust",
                "metrics": {
                  "interactions": "150/month",
                  "retention": "85%",
                  "cost": "8,550/month"
                }
              },
              {
                "id": 2,
                "rank": 2,
                "title": "Account Cancellation",
                "description": "Customer requesting to cancel or downgrade service",
                "priority": "Critical Risk",
                "confidence": "88% Confidence",
                "businessImpact": "Prevent churn, identify retention opportunities",
                "metrics": {
                  "interactions": "45/month",
                  "retention": "45%",
                  "cost": "12,000/month"
                }
              },
              {
                "id": 3,
                "rank": 3,
                "title": "Product Support",
                "description": "Technical assistance and troubleshooting requests",
                "priority": "Medium Priority",
                "confidence": "91% Confidence",
                "businessImpact": "Reduce friction in transactions, improve customer trust",
                "metrics": {
                  "interactions": "320/month",
                  "retention": "70%",
                  "cost": "2,250/month"
                }
              },
              {
                "id": 4,
                "rank": 4,
                "title": "New Feature Inquiry",
                "description": "Questions about new product features or upgrades",
                "priority": "Low Expansion",
                "confidence": "70% Confidence",
                "businessImpact": "Drive feature adoption, identify expansion opportunities",
                "metrics": {
                  "interactions": "85/month",
                  "retention": "75%",
                  "cost": "1,850/month"
                }
              }
          ]
      });

      dispatch({
        type: 'SET_BUSINESS_OUTCOMES',
        payload:[
            {
              "id": 1,
              "rank": 1,
              "title": "Prevent Churn",
              "description": "Reduce customer attrition and cancellations",
              "priority": "Business Critical",
              "confidence": "96% Confidence",
              "impact": {
                "amount": "45,000",
                "type": "avg impact",
                "urgency": "Critical urgency"
              }
            },
            {
              "id": 2,
              "rank": 2,
              "title": "Improve Customer Trust",
              "description": "Build confidence in platform reliability",
              "priority": "High Impact",
              "confidence": "89% Confidence",
              "impact": {
                "amount": "12,500",
                "type": "avg impact",
                "urgency": "High urgency"
              }
            },
            {
              "id": 3,
              "rank": 3,
              "title": "Reduce Friction Payments",
              "description": "Streamline payment and billing processes",
              "priority": "Medium Impact",
              "confidence": "92% Confidence",
              "impact": {
                "amount": "8,200",
                "type": "avg impact",
                "urgency": "Medium urgency"
              }
            },
            {
              "id": 4,
              "rank": 4,
              "title": "Drive Feature Adoption",
              "description": "Increase usage of new platform capabilities",
              "priority": "Growth Opportunity",
              "confidence": "74% Confidence",
              "impact": {
                "amount": "3,400",
                "type": "avg impact",
                "urgency": "Low urgency"
              }
            }
          ]
      })
  }, []);
  return (
    <>
      <h4 className={styles.heading}>Review & Validate Rankings</h4>
      <p>
        Review the AI-generated rankings for customer intents and business
        outcomes. Make adjustments before running simulation tests.
      </p>
      <Note
        text={`LLM Anallysis complete: Analysed ${state.totalConversations} historical
          conversations and ranked ${state.totalCustomerIntents} customer intents and ${state.totalBusinessOutcomes} business outcomes based on
          frequency, retention impact and revenue correlation. Reviw the rankings below and make the adjustments as needed.`}
        alignment="center"
        widthValue = "85%"
      />

      <section className={styles.container}>
        <section className={styles.intents_and_outcomes}>
          <IntentsAndOutcomeHeader icon={GroupsIcon} heading="Customer Intent Priority Ranking" />
          <Divider variant="middle" component="div" sx={{margin: '10px 0'}}/>
          {state.customerIntentList && state.customerIntentList.length && (
            state.customerIntentList.map((intents, index: number) => (
                <IntentsAndOutcomeBody {...intents} key={`intents_${index}`} index={index + 1}/>
            ))
        )}
        </section>
        
        <section className={styles.intents_and_outcomes}>
        <IntentsAndOutcomeHeader icon={AutoGraphIcon} heading="Business Outcome Priority Ranking" />
          <Divider variant="middle" component="div" sx={{margin: '10px 0'}}/>

          {state.businessOutcomeList && state.businessOutcomeList.length && (
            state.businessOutcomeList.map((outcomes, index) => (
                <IntentsAndOutcomeBody {...outcomes} key={`outcomes_${index}`} index={index + 1}/>
            ))
          )}
        </section>
      </section>
    </>
  );
};

export default ReviewAndValidate;
