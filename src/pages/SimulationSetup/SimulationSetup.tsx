// React Specific Imports
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 3rd party imports
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Local dependencies
import Stepper from "../../components/Layouts/Stepper/Stepper";
import styles from "./SimulationSetup.module.css";
import DataInputSources from "../../components/Layouts/DataInputSources/DataInputSources";
import FilterAndReview from "../../components/Layouts/FilterAndReview/FilterAndReview";
import ReviewAndValidate from "../../components/Layouts/ReviewAndValidate/ReviewAndValidate";
import ConfigureSimulation from "../../components/Layouts/ConfigureSimulation/ConfigureSimulation";
import AgentPersonas from "../../components/Layouts/AgentPersonas/AgentPersonas";

const SimulationSetup: React.FC = () => {
  const { state, dispatch } = useAppContext();

  const [pageNo, setPageNo] = useState<number>(0);
  const navigate = useNavigate();

  const stepperPageCount = {
    1: "dataInputSources",
    2: "filterAndReview",
    3: 'agentPersonas',
    4: "reviewAndValidate",
    5: "configureSimulation",
  };

  useEffect(() => {
    setPageNo(1);
  }, []);

  const handleOnClick = (navigateTo: string): void => {
    window.scroll(0,0);
    let newPageNo: number;

    switch (navigateTo) {
      case "next":
        newPageNo = pageNo + 1;
        break;
      case "back":
        newPageNo = pageNo - 1;
        break;
      case "cancel":
        newPageNo = 1;
        break;
      case "simulate":
        navigate("/simulation-analytics");
        return;
      default:
        newPageNo = 1;
        break;
    }

    // Update the page number state
    setPageNo(newPageNo);

    // Use the new page number for dispatch
    const data = {
      type: "SET_STEPPER_VALUE" as const,
      payload: stepperPageCount[newPageNo as keyof typeof stepperPageCount],
    };

    dispatch(data);
  };

  return (
    <div className={styles.main_container}>
      <Stepper />
      <div className={styles.simulation_page_container}>
        <section className={styles.heading}>
          <h5>
            <KeyboardArrowDownIcon /> How Predictive Routing Works
          </h5>
        </section>

        <section className={styles.data_input_sources}>
          {state.currentPage === "dataInputSources" && <DataInputSources />}
          {state.currentPage === "filterAndReview" && <FilterAndReview />}
          {state.currentPage === "agentPersonas" && <AgentPersonas />}
          {state.currentPage === "reviewAndValidate" && <ReviewAndValidate />}
          {state.currentPage === "configureSimulation" && (
            <ConfigureSimulation />
          )}
        </section>

        <section className={styles.button_container}>
          {state.currentPage === "dataInputSources" && (
            <button onClick={() => handleOnClick("cancel")}>Cancel</button>
          )}
          {state.currentPage !== "dataInputSources" && (
            <button onClick={() => handleOnClick("back")}>Back</button>
          )}
          {state.currentPage !== "configureSimulation" && (
            <button onClick={() => handleOnClick("next")}>Next</button>
          )}
          {state.currentPage === "configureSimulation" && (
            <button onClick={() => handleOnClick("simulate")}>Simulate</button>
          )}
        </section>
      </div>
    </div>
  );
};

export default SimulationSetup;
