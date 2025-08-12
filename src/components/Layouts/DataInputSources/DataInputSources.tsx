// internal dependencies
import CardSection from "../../Card/Card";
import FormData from "../../FormData/FormData";
import { useAppContext } from "../../../context/AppContext";
import styles from "./DataInputSources.module.css";

// Local dependencies
import SliderComponent from "../../SliderComponent/SliderComponent";
import { useEffect } from "react";
import { INPUT_SOURCE_DATA, ROUTING_CATEGORY } from "../../../Contracts/DataInputSources";

export type dispatchAction = 'UPDATE_DATA_INPUT_SOURCES' | 'UPDATE_ROUTING_CATEGORY';

const DataInputSources: React.FC = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch({
      type: "SET_ROUTING_CATEGORY",
      payload: ROUTING_CATEGORY,
    });

    dispatch({
      type: "SET_DATA_INPUT_SOURCES",
      payload: INPUT_SOURCE_DATA,
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
