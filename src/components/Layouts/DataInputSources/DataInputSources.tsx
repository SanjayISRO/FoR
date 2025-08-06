// internal dependencies
import CardSection from "../../Card/Card";
import FormData from "../../FormData/FormData";
import { useAppContext } from "../../../context/AppContext";
import styles from "./DataInputSources.module.css";

// images
import hosatoricalData from "../../../assets/images/conversational_data.png";
import inputMiner from "../../../assets/images/input_miner.png";
import topicMiner from "../../../assets/images/topic_miner.png";
import conversationData from "../../../assets/images/conversation_data.png";
import SliderComponent from "../../SliderComponent/SliderComponent";
import { useEffect } from "react";

export type dispatchAction = 'UPDATE_DATA_INPUT_SOURCES' | 'UPDATE_ROUTING_CATEGORY';

const DataInputSources: React.FC = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch({
      type: "SET_ROUTING_CATEGORY",
      payload: [
        {
          name: "routingCategory",
          heading: "Historical coversation data set - 1",
          subText: "Description here",
          imgSrc: hosatoricalData,
          checked: true,
          inputType: "radio" as const,
        },
        {
          name: "routingCategory1",
          heading: "Historical coversation data set - 2",
          subText: "Description here",
          imgSrc: hosatoricalData,
          checked: false,
          inputType: "radio" as const,
        },
      ],
    });

    dispatch({
      type: "SET_DATA_INPUT_SOURCES",
      payload: [
        {
          name: "inputMiner",
          heading: "Input Miner",
          subText: "Available in Architect (Bot Context)",
          imgSrc: inputMiner,
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
      ],
    });
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    action: dispatchAction
  ): void {
    dispatch({
      type: action,
      payload: e,
    });
  }

  return (
    <>
      <FormData />
      <CardSection
        title="Select Predective Routing Category"
        cardData={state.routingCategoryList}
        action="UPDATE_ROUTING_CATEGORY"
        onChange={handleChange}
      />
      <CardSection
        title="Data Input Sources"
        cardData={state.dataInputSourcesList}
        action="UPDATE_DATA_INPUT_SOURCES"
        onChange={handleChange}
      />
      <p className={styles.title}>Include data from the last</p>

      <SliderComponent
        minValue={100}
        maxValue={1000}
        page="dataInputSources"
        stateValue={state.noOfDays}
        successorText="days"
      />
    </>
  );
};

export default DataInputSources;
