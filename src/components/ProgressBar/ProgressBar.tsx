import { useEffect, useState } from "react";

import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

import styles from "./ProgressBar.module.css";
import { useAppContext } from "../../context/AppContext";

const ProgressBar = () => {
  const {state} = useAppContext();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(state.currentProgress);
  }, [state])

  return (
    <>
        <Box className={styles.container}>
          <LinearProgress
            className={styles.progressbar_div}
            variant="determinate"
            value={progress}
            sx={{
              '& .MuiLinearProgress-barColorPrimary': {
                backgroundColor: '#2143a3', // Color of the filled portion
              },
              '&.MuiLinearProgress-colorPrimary': {
                backgroundColor: '#d1dbf6', // Color of the track/background
              },
            }}
          />
        </Box>
    </>
  );
};

export default ProgressBar;
