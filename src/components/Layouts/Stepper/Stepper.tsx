
// React specific imports
import React from "react";

// 3rd party imports
import { Box } from "@mui/material";
import {
  faCircleHalfStroke,
  faSpinner,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
          title="Filter & Review"
          count={2}
          optionalMessage="Optional Message"
          top={175}
          icon={state.currentProgress < 50 ? faSpinner : state.currentProgress > 50 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Review & Validate"
          count={3}
          optionalMessage="Optional Message"
          top={295}
          icon={state.currentProgress < 75 ? faSpinner : state.currentProgress > 75 ? faCircleCheck : faCircleHalfStroke}
        />
        <StepperStage
          title="Configure Simulation"
          count={4}
          optionalMessage="Optional Message"
          top={415}
          icon={state.currentProgress < 100 ? faSpinner : state.currentProgress > 100 ? faCircleCheck : faCircleHalfStroke}
        />
      </div>
    </Box>
  );
};

export default Stepper;
