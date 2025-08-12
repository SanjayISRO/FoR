import { Box } from "@mui/material";

import styles from "./StepperStage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface IStepperStage {
  title: string;
  optionalMessage: string;
  count: number;
  top: number;
  icon: any
}

const StepperStage: React.FC<IStepperStage> = ({
  title,
  optionalMessage,
  count,
  top,
  icon
}) => {
  return (
    <Box className={styles.stepper_container} sx={{ top: top }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={icon} className={styles.images} />
        <h6 className={styles.heading}>
          {count}. {title}
        </h6>
      </Box>
      <p className={styles.message}>{optionalMessage}</p>
    </Box>
  );
};

export default StepperStage;
