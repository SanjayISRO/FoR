import React, { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";
import type { ICardData } from "../components/Card/Card";
import type {
  ICustomerIntent,
} from "../components/Layouts/ReviewAndValidate/ReviewAndValidate";
import { CUSTOMER_INTENT_DATA } from "../Contracts/ReviewAndValidate";

const stepperData = {
  dataInputSources: 25,
  goalsAndKPIs: 35,
  featureTaxonomy: 45,
  agentPersonas: 55,
  filterAndReview: 65,
  reviewAndValidate: 85,
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
      type: "UPDATE_CUSTOMER_INTENTS";
      payload: ICustomerIntent[];
    }
  | { type: "SET_INITIAL_STATE"}

// Initial state
const initialState: IAppState = {
  currentProgress: 23,
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
  customerIntentList: CUSTOMER_INTENT_DATA,
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
    case "UPDATE_CUSTOMER_INTENTS":
      return { ...state, customerIntentList: action.payload };
    case "SET_INITIAL_STATE":
      return { ...initialState }
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
