
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
          icon={state.currentProgress > 25 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Goals & KPI's"
          count={2}
          optionalMessage="Optional Message"
          top={165}
          icon={state.currentProgress < 35 ? faSpinner : state.currentProgress > 35 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Intent taxonomy"
          count={3}
          optionalMessage="Optional Message"
          top={275}
          icon={state.currentProgress < 45 ? faSpinner : state.currentProgress > 45 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Agent Personas"
          count={4}
          optionalMessage="Optional Message"
          top={395}
          icon={state.currentProgress < 55 ? faSpinner : state.currentProgress > 55 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Filter & Review"
          count={5}
          optionalMessage="Optional Message"
          top={510}
          icon={state.currentProgress < 65 ? faSpinner : state.currentProgress > 65 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Review & Validate"
          count={6}
          optionalMessage="Optional Message"
          top={625}
          icon={state.currentProgress < 85 ? faSpinner : state.currentProgress > 85 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Configure Simulation"
          count={7}
          optionalMessage="Optional Message"
          top={740}
          icon={state.currentProgress < 100 ? faSpinner : faCircleCheck}
        />
      </div>
    </Box>
  );
};

export default Stepper;
