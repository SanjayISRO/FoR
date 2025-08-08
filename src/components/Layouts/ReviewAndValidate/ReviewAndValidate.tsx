// 3rd party dependencies
import GroupsIcon from "@mui/icons-material/Groups";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

// Local Dependencies
import { useAppContext } from "../../../context/AppContext";
import styles from "./ReviewAndValidate.module.css";
import Note from "../../Note/Note";
import { Divider } from "@mui/material";
import IntentsAndOutcomeHeader from "../../IntentsAndOutcomeHeader/IntentsAndOutcomeHeader";
import IntentsAndOutcomeBody, {
  type IntentsAndOutcomeBodyProps,
} from "../../IntentsAndOutcomeBody/IntentsAndOutcomeBody";

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

  function handleFormSubmit(data: IntentsAndOutcomeBodyProps) {
    // Check if it's a customer intent (has businessImpact or metrics)
    if (data.businessImpact) {
      // Update customer intents
      const updatedIntents = state.customerIntentList.map((intent) =>
        intent.id === data.id
          ? {
              ...intent,
              title: data.title,
              description: data.description,
              priority: data.priority,
              confidence: data.confidence,
              businessImpact: data.businessImpact || intent.businessImpact,
            }
          : intent
      );

      dispatch({
        type: "UPDATE_CUSTOMER_INTENTS",
        payload: updatedIntents,
      });
    } else {
      // Update business outcomes
      const updatedOutcomes = state.businessOutcomeList.map((outcome) =>
        outcome.id === data.id
          ? {
              ...outcome,
              title: data.title,
              description: data.description,
              priority: data.priority,
              confidence: data.confidence,
            }
          : outcome
      );

      dispatch({
        type: "UPDATE_BUSINESS_IMPACT",
        payload: updatedOutcomes,
      });
    }

    console.log("Data updated successfully:", data);
  }

  // Move item up in the list
  const moveItemUp = (id: number, isCustomerIntent: boolean) => {
    if (isCustomerIntent) {
      const currentIndex = state.customerIntentList.findIndex(
        (item) => item.id === id
      );
      if (currentIndex > 0) {
        const newList = [...state.customerIntentList];
        // Swap with previous item
        [newList[currentIndex], newList[currentIndex - 1]] = [
          newList[currentIndex - 1],
          newList[currentIndex],
        ];

        // Update ranks
        newList.forEach((item, index) => {
          item.rank = index + 1;
        });

        dispatch({
          type: "UPDATE_CUSTOMER_INTENTS",
          payload: newList,
        });
      }
    } else {
      const currentIndex = state.businessOutcomeList.findIndex(
        (item) => item.id === id
      );
      if (currentIndex > 0) {
        const newList = [...state.businessOutcomeList];
        // Swap with previous item
        [newList[currentIndex], newList[currentIndex - 1]] = [
          newList[currentIndex - 1],
          newList[currentIndex],
        ];

        // Update ranks
        newList.forEach((item, index) => {
          item.rank = index + 1;
        });

        dispatch({
          type: "UPDATE_BUSINESS_IMPACT",
          payload: newList,
        });
      }
    }
  };

  // Move item down in the list
  const moveItemDown = (id: number, isCustomerIntent: boolean) => {
    if (isCustomerIntent) {
      const currentIndex = state.customerIntentList.findIndex(
        (item) => item.id === id
      );
      if (currentIndex < state.customerIntentList.length - 1) {
        const newList = [...state.customerIntentList];
        // Swap with next item
        [newList[currentIndex], newList[currentIndex + 1]] = [
          newList[currentIndex + 1],
          newList[currentIndex],
        ];

        // Update ranks
        newList.forEach((item, index) => {
          item.rank = index + 1;
        });

        dispatch({
          type: "UPDATE_CUSTOMER_INTENTS",
          payload: newList,
        });
      }
    } else {
      const currentIndex = state.businessOutcomeList.findIndex(
        (item) => item.id === id
      );
      if (currentIndex < state.businessOutcomeList.length - 1) {
        const newList = [...state.businessOutcomeList];
        // Swap with next item
        [newList[currentIndex], newList[currentIndex + 1]] = [
          newList[currentIndex + 1],
          newList[currentIndex],
        ];

        // Update ranks
        newList.forEach((item, index) => {
          item.rank = index + 1;
        });

        dispatch({
          type: "UPDATE_BUSINESS_IMPACT",
          payload: newList,
        });
      }
    }
  };
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
        widthValue="85%"
      />

      <section className={styles.container}>
        <section className={styles.intents_and_outcomes}>
          <IntentsAndOutcomeHeader
            icon={GroupsIcon}
            heading="Customer Intent Priority Ranking"
          />
          <Divider variant="middle" component="div" sx={{ margin: "10px 0" }} />
          {state.customerIntentList &&
            state.customerIntentList.length &&
            state.customerIntentList.map((intents, index: number) => (
              <IntentsAndOutcomeBody
                {...intents}
                key={`intents_${index}`}
                index={index + 1}
                onSubmitChanges={handleFormSubmit}
                onMoveUp={moveItemUp}
                onMoveDown={moveItemDown}
                disableUpArrow={index === 0}
                disableDownArrow={index + 1 === state.customerIntentList.length}
              />
            ))}
        </section>

        <section className={styles.intents_and_outcomes}>
          <IntentsAndOutcomeHeader
            icon={AutoGraphIcon}
            heading="Business Outcome Priority Ranking"
          />
          <Divider variant="middle" component="div" sx={{ margin: "10px 0" }} />

          {state.businessOutcomeList &&
            state.businessOutcomeList.length &&
            state.businessOutcomeList.map((outcomes, index) => (
              <IntentsAndOutcomeBody
                {...outcomes}
                key={`outcomes_${index}`}
                index={index + 1}
                onSubmitChanges={handleFormSubmit}
                onMoveUp={moveItemUp}
                onMoveDown={moveItemDown}
                disableUpArrow={index === 0}
                disableDownArrow={
                  index + 1 === state.businessOutcomeList.length
                }
              />
            ))}
        </section>
      </section>
    </>
  );
};

export default ReviewAndValidate;
