import React, { act, createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";
import type { ICardData } from "../components/Card/Card";
import type {
  IBusinessOutcome,
  ICustomerIntent,
} from "../components/Layouts/ReviewAndValidate/ReviewAndValidate";

const stepperData = {
  dataInputSources: 25,
  filterAndReview: 50,
  reviewAndValidate: 75,
  configureSimulation: 100,
};

// Define your state shape
interface IAppState {
  currentProgress: number;
  currentPage: string;
  noOfDays: number;
  totalConversations: number | string;
  totalCustomerIntents: number | string;
  totalBusinessOutcomes: number | string;
  estimatedRunTime: number | string;
  thresholdValue: number;
  modelName: string;
  modelDescription: string;
  routingCategoryList: ICardData[];
  dataInputSourcesList: ICardData[];
  customerIntentList: ICustomerIntent[];
  businessOutcomeList: IBusinessOutcome[];
}

// Define action types
export type AppAction =
  | { type: "SET_STEPPER_VALUE"; payload: string }
  | { type: "SET_NO_OF_DAYS"; payload: number }
  | { type: "SET_THRESHOLD_VALUE"; payload: number }
  | { type: "SET_MODEL_NAME"; payload: string }
  | { type: "SET_MODEL_DESCRIPTION"; payload: string }
  | { type: "CLEAR_MODEL_NAME" }
  | { type: "SET_ROUTING_CATEGORY"; payload: ICardData[] }
  | { type: "SET_DATA_INPUT_SOURCES"; payload: ICardData[] }
  | {
      type: "UPDATE_ROUTING_CATEGORY";
      payload: React.ChangeEvent<HTMLInputElement>;
    }
  | {
      type: "UPDATE_DATA_INPUT_SOURCES";
      payload: React.ChangeEvent<HTMLInputElement>;
    }
  | {
      type: "SET_INTENTS";
      payload: ICustomerIntent[];
    }
  | {
      type: "SET_BUSINESS_OUTCOMES";
      payload: IBusinessOutcome[];
    }
  | {
      type: "UPDATE_CUSTOMER_INTENTS";
      payload: ICustomerIntent[];
    }
  | {
      type: "UPDATE_BUSINESS_IMPACT";
      payload: IBusinessOutcome[];
    };

// Initial state
const initialState: IAppState = {
  currentProgress: 25,
  currentPage: "dataInputSources",
  noOfDays: 100,
  totalConversations: "15,257",
  totalCustomerIntents: 12,
  totalBusinessOutcomes: 8,
  estimatedRunTime: 45,
  thresholdValue: 25,
  modelName: "",
  modelDescription: "",
  routingCategoryList: [],
  dataInputSourcesList: [],
  customerIntentList: [
    {
      id: 1,
      rank: 1,
      title: "Payment Issue",
      description:
        "Customer experiencing payment failures or billing problems",
      priority: "High Priority",
      confidence: "94% Confidence",
      businessImpact:
        "Reduce friction in transactions, improve customer trust",
      metrics: {
        interactions: "150/month",
        retention: "85%",
        cost: "8,550/month",
      },
    },
    {
      id: 2,
      rank: 2,
      title: "Account Cancellation",
      description: "Customer requesting to cancel or downgrade service",
      priority: "Critical Risk",
      confidence: "88% Confidence",
      businessImpact: "Prevent churn, identify retention opportunities",
      metrics: {
        interactions: "45/month",
        retention: "45%",
        cost: "12,000/month",
      },
    },
    {
      id: 3,
      rank: 3,
      title: "Product Support",
      description: "Technical assistance and troubleshooting requests",
      priority: "Medium Priority",
      confidence: "91% Confidence",
      businessImpact:
        "Reduce friction in transactions, improve customer trust",
      metrics: {
        interactions: "320/month",
        retention: "70%",
        cost: "2,250/month",
      },
    },
    {
      id: 4,
      rank: 4,
      title: "New Feature Inquiry",
      description: "Questions about new product features or upgrades",
      priority: "Low Expansion",
      confidence: "70% Confidence",
      businessImpact:
        "Drive feature adoption, identify expansion opportunities",
      metrics: {
        interactions: "85/month",
        retention: "75%",
        cost: "1,850/month",
      },
    },
    {
      id: 1,
      rank: 1,
      title: "Payment Issue",
      description:
        "Customer experiencing payment failures or billing problems",
      priority: "High Priority",
      confidence: "94% Confidence",
      businessImpact:
        "Reduce friction in transactions, improve customer trust",
      metrics: {
        interactions: "150/month",
        retention: "85%",
        cost: "8,550/month",
      },
    },
    {
      id: 2,
      rank: 2,
      title: "Account Cancellation",
      description: "Customer requesting to cancel or downgrade service",
      priority: "Critical Risk",
      confidence: "88% Confidence",
      businessImpact: "Prevent churn, identify retention opportunities",
      metrics: {
        interactions: "45/month",
        retention: "45%",
        cost: "12,000/month",
      },
    },
    {
      id: 3,
      rank: 3,
      title: "Product Support",
      description: "Technical assistance and troubleshooting requests",
      priority: "Medium Priority",
      confidence: "91% Confidence",
      businessImpact:
        "Reduce friction in transactions, improve customer trust",
      metrics: {
        interactions: "320/month",
        retention: "70%",
        cost: "2,250/month",
      },
    },
    {
      id: 4,
      rank: 4,
      title: "New Feature Inquiry",
      description: "Questions about new product features or upgrades",
      priority: "Low Expansion",
      confidence: "70% Confidence",
      businessImpact:
        "Drive feature adoption, identify expansion opportunities",
      metrics: {
        interactions: "85/month",
        retention: "75%",
        cost: "1,850/month",
      },
    },
    {
      id: 1,
      rank: 1,
      title: "Payment Issue",
      description:
        "Customer experiencing payment failures or billing problems",
      priority: "High Priority",
      confidence: "94% Confidence",
      businessImpact:
        "Reduce friction in transactions, improve customer trust",
      metrics: {
        interactions: "150/month",
        retention: "85%",
        cost: "8,550/month",
      },
    },
    {
      id: 2,
      rank: 2,
      title: "Account Cancellation",
      description: "Customer requesting to cancel or downgrade service",
      priority: "Critical Risk",
      confidence: "88% Confidence",
      businessImpact: "Prevent churn, identify retention opportunities",
      metrics: {
        interactions: "45/month",
        retention: "45%",
        cost: "12,000/month",
      },
    },
    {
      id: 3,
      rank: 3,
      title: "Product Support",
      description: "Technical assistance and troubleshooting requests",
      priority: "Medium Priority",
      confidence: "91% Confidence",
      businessImpact:
        "Reduce friction in transactions, improve customer trust",
      metrics: {
        interactions: "320/month",
        retention: "70%",
        cost: "2,250/month",
      },
    },
    {
      id: 4,
      rank: 4,
      title: "New Feature Inquiry",
      description: "Questions about new product features or upgrades",
      priority: "Low Expansion",
      confidence: "70% Confidence",
      businessImpact:
        "Drive feature adoption, identify expansion opportunities",
      metrics: {
        interactions: "85/month",
        retention: "75%",
        cost: "1,850/month",
      },
    },
  ],
  businessOutcomeList: [
    {
      id: 1,
      rank: 1,
      title: "Prevent Churn",
      description: "Reduce customer attrition and cancellations",
      priority: "Business Critical",
      confidence: "96% Confidence",
      impact: {
        amount: "45,000",
        type: "avg impact",
        urgency: "Critical urgency",
      },
    },
    {
      id: 2,
      rank: 2,
      title: "Improve Customer Trust",
      description: "Build confidence in platform reliability",
      priority: "High Impact",
      confidence: "89% Confidence",
      impact: {
        amount: "12,500",
        type: "avg impact",
        urgency: "High urgency",
      },
    },
    {
      id: 3,
      rank: 3,
      title: "Reduce Friction Payments",
      description: "Streamline payment and billing processes",
      priority: "Medium Impact",
      confidence: "92% Confidence",
      impact: {
        amount: "8,200",
        type: "avg impact",
        urgency: "Medium urgency",
      },
    },
    {
      id: 4,
      rank: 4,
      title: "Drive Feature Adoption",
      description: "Increase usage of new platform capabilities",
      priority: "Growth Opportunity",
      confidence: "74% Confidence",
      impact: {
        amount: "3,400",
        type: "avg impact",
        urgency: "Low urgency",
      },
    },
  ],
};

// Reducer function
const appReducer = (state: IAppState, action: AppAction): IAppState => {
  switch (action.type) {
    case "SET_STEPPER_VALUE":
      return {
        ...state,
        currentPage: action.payload,
        currentProgress:
          stepperData[action.payload as keyof typeof stepperData],
      };
    case "SET_NO_OF_DAYS":
      return { ...state, noOfDays: action.payload };
    case "SET_THRESHOLD_VALUE":
      return { ...state, thresholdValue: action.payload };
    case "SET_MODEL_NAME":
      return { ...state, modelName: action.payload };
    case "SET_MODEL_DESCRIPTION":
      console.log(state);
      return { ...state, modelDescription: action.payload };
    case "CLEAR_MODEL_NAME":
      return { ...state, modelName: "" };
    case "SET_ROUTING_CATEGORY":
      return { ...state, routingCategoryList: action.payload };
    case "SET_DATA_INPUT_SOURCES":
      return { ...state, dataInputSourcesList: action.payload };
    case "UPDATE_ROUTING_CATEGORY":
      debugger;
      const changedData = state.routingCategoryList.map((data: ICardData) => {
        if (data.name === action.payload.target.name) {
          return { ...data, checked: action.payload.target.checked };
        }
        return { ...data, checked: false };
      });
      return { ...state, routingCategoryList: changedData };
    case "UPDATE_DATA_INPUT_SOURCES":
      const updatedDataInputSources = state.dataInputSourcesList.map(
        (data: ICardData) => {
          if (data.name === action.payload.target.name) {
            return { ...data, checked: action.payload.target.checked };
          }
          return { ...data };
        }
      );
      return { ...state, dataInputSourcesList: updatedDataInputSources };
    case "SET_INTENTS":
      return { ...state, customerIntentList: action.payload };
    case "SET_BUSINESS_OUTCOMES":
      return { ...state, businessOutcomeList: action.payload };
    case "UPDATE_CUSTOMER_INTENTS":
      return { ...state, customerIntentList: action.payload };
    case "UPDATE_BUSINESS_IMPACT":
      return { ...state, businessOutcomeList: action.payload };
    default:
      return state;
  }
};

// Context type
interface AppContextType {
  state: IAppState;
  dispatch: React.Dispatch<AppAction>;
}

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
