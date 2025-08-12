
// React specific imports
import React from "react";

// 3rd party imports
import { Box } from "@mui/material";
import {
  faCircleHalfStroke,
  faSpinner,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";


// Local dependencies import
import ProgressBar from "../../ProgressBar/ProgressBar";
import StepperStage from "../../StepperStage/StepperStage";
import styles from "./Stepper.module.css";
import { useAppContext } from "../../../context/AppContext";


const Stepper: React.FC = () => {
  const {state} = useAppContext();
  return (
    <Box sx={{ width: "15%" }}>
      <ProgressBar />
      <div className={styles.container}>
        <StepperStage
          title="Data Input Sources"
          count={1}
          optionalMessage="Optional Message"
          top={60}
          icon={state.currentProgress > 20 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Filter & Review"
          count={2}
          optionalMessage="Optional Message"
          top={165}
          icon={state.currentProgress < 40 ? faSpinner : state.currentProgress > 60 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Agent Personas"
          count={3}
          optionalMessage="Optional Message"
          top={275}
          icon={state.currentProgress < 60 ? faSpinner : state.currentProgress > 80 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Review & Validate"
          count={4}
          optionalMessage="Optional Message"
          top={395}
          icon={state.currentProgress < 80 ? faSpinner : state.currentProgress > 85 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Configure Simulation"
          count={5}
          optionalMessage="Optional Message"
          top={510}
          icon={state.currentProgress < 100 ? faSpinner : state.currentProgress > 100 ? faCircleCheck : faCircleHalfStroke}
        />
      </div>
    </Box>
  );
};

export default Stepper;
