// React dependencies
import { useEffect, useState } from "react";

// 3rd party dependencies
import { Box, Slider } from "@mui/material";

// Local dependencies
import { useAppContext } from "../../context/AppContext";
import styles from './SliderComponent.module.css';

interface SliderComponentProps {
  title?: string;
  minValue: number;
  maxValue: number;
  page: string;
  stateValue: number;
  successorText: string;
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  title,
  minValue,
  maxValue,
  page,
  stateValue,
  successorText,
}) => {
  const { dispatch } = useAppContext();
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    setValue(stateValue);
  });

  const handleSliderChange = (event: Event, newValue: number): void => {
    setValue(newValue);
    // Update global state with slider value
        dispatch({
            type: page === 'dataInputSources' ? "SET_NO_OF_DAYS" : 'SET_THRESHOLD_VALUE',
            payload: newValue,
          });
  };

  return (
    <div className={styles.slider_container}>
      <Box sx={{ width: 300 }}>
        <Slider
          defaultValue={stateValue}
          max={maxValue}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
          sx={{
            color: "#1a327a", // custom green
            "& .MuiSlider-thumb": {
              backgroundColor: "#1a327a",
            },
            "& .MuiSlider-track": {
              backgroundColor: "#1a327a",
            },
            "& .MuiSlider-rail": {
              backgroundColor: "transparent",
              border: "1px solid #1a327a",
              height: "5px",
            },
          }}
        />
      </Box>
      <p>
        {stateValue} {successorText}
      </p>
    </div>
  );
};

export default SliderComponent;
