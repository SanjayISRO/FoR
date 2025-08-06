// React dependencies
import { useState } from "react";

// 3rd party dependencies
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Divider, FormControlLabel, FormGroup, Switch } from "@mui/material";
import { Dayjs } from "dayjs";

// Local dependencies
import SectionContainer from "../../SectionContainer/SectionContainer";
import styles from "./ConfigureSimulation.module.css";
import { useAppContext } from "../../../context/AppContext";
import ComuptedDatas from "../../ComuptedDatas/ComuptedDatas";
import IntentsAndOutcomeHeader from "../../IntentsAndOutcomeHeader/IntentsAndOutcomeHeader";
import SelectComponent from "../../SelectComponent/SelectComponent";
import CheckboxComponent from "../../CheckboxComponent/CheckboxComponent";
import SliderComponent from "../../SliderComponent/SliderComponent";

const ConfigureSimulation: React.FC = () => {
  const { state } = useAppContext();
  const [selectedStartDate, setSelectedStartDate] = useState<Dayjs | null>(
    null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Dayjs | null>(null);

  const countries = [
    { value: "1000", label: "10,000 conversations (Comprehensive)" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "germany", label: "Germany" },
    { value: "france", label: "France" },
  ];

  const countriesTwo = [
    { value: "1000", label: "Current Routing Rules" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "germany", label: "Germany" },
    { value: "france", label: "France" },
  ];

  const channelTypes = [
    { value: "voice", label: "Voice", checked: true },
    { value: "chat", label: "Chat", checked: false },
    { value: "email", label: "Email", checked: false },
    { value: "message", label: "Message", checked: false },
    { value: "social", label: "Social", checked: false },
  ];

  const primarySuccessMetrics = [
    { value: "intent_match_accuracy", label: "Intent Match Accuracy", checked: true },
    { value: "average_handle_time", label: "Average Handle Time (AHT)", checked: true },
    { value: "customer_satisfaction", label: "Customer Satisfaction (CSAT)", checked: false }
  ];

  const exportResults = [
    { value: "csv_report", label: "CSV Report", checked: true },
    { value: "json_raw_data", label: "JSON Raw Data", checked: false }
  ];

  return (
    <>
      <section className={styles.simulation_header}>
        <div>
          <h4>Configure Simulation Parameters</h4>
          <p>
            Set up testing conditions and comparison criteria before running the
            intent-based routing simulation against historical data.
          </p>
        </div>
        <div>
          <button>Save Conifuration</button>
          <button>Load Template</button>
        </div>
      </section>

      <section>
        <SectionContainer widthValue="85%" backgroundColor="#f6f8ff">
          <section>
            <h4 className={styles.simulation_overview_title}>
              <TrackChangesIcon
                fontSize="small"
                className={styles.metric_icon}
              />
              <span>Simulation Overview</span>
            </h4>
            <p>
              Ready to test intent-based routing against historical conversation
              data with your customized rankings
            </p>
            <section className={styles.computed_data}>
              <ComuptedDatas
                computedValue={state.totalConversations}
                text="Total Conversations"
              />
              <ComuptedDatas
                computedValue={state.totalCustomerIntents}
                text="Customer Intents"
              />
              <ComuptedDatas
                computedValue={state.totalBusinessOutcomes}
                text="Business Outcomes"
              />
              <ComuptedDatas
                computedValue={state.estimatedRunTime + " min"}
                text="Est. Runtime"
              />
            </section>
          </section>
        </SectionContainer>

        <section className={styles.simulation_containers}>
          <SectionContainer widthValue="49%" backgroundColor="#f4f6f9">
            <IntentsAndOutcomeHeader
              heading="Data Selection & Scope"
              icon={InsertChartOutlinedIcon}
            />
            <Divider
              variant="middle"
              component="div"
              sx={{ margin: "10px 0" }}
            />
            <h4>Date Range</h4>
            <div className={styles.date_range_container}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label=""
                  value={selectedStartDate}
                  onChange={(newValue) => setSelectedStartDate(newValue)}
                  sx={{
                    "& .MuiPickersInputBase-colorPrimary": {
                      border: "1px solid #1a327a",
                      outline: "none",
                      height: "30px",
                      backgroundColor: "#fff",
                      outlineColor: "none",
                    },
                    "& .MuiPickersTextField-root": {
                      border: "1px solid #1a327a",
                      borderRadius: "5px",
                      outline: "none",
                    },
                    "& .MuiSvgIcon-fontSizeMedium": {
                      color: "#1a327a",
                    },
                  }}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label=""
                  value={selectedEndDate}
                  onChange={(newValue) => setSelectedEndDate(newValue)}
                  sx={{
                    "& .MuiPickersInputBase-colorPrimary": {
                      border: "1px solid #1a327a",
                      outline: "none",
                      height: "30px",
                      backgroundColor: "#fff",
                    },
                    "& .MuiPickersTextField-root": {
                      border: "1px solid #1a327a",
                      borderRadius: "5px",
                      outline: "none",
                    },
                    "& .MuiSvgIcon-fontSizeMedium": {
                      color: "#1a327a",
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
            <p style={{ margin: "10px 0 0 0" }}>
              Select the time period for conversation data to analyse
            </p>

            <SelectComponent
              text="Sample Size"
              name="dataSelection"
              entries={countries}
            />
            <CheckboxComponent
              title="Channel Types"
              items={channelTypes}
              from="simulationOverview"
            />
          </SectionContainer>

          <SectionContainer widthValue="49%" backgroundColor="#f4f6f9">
            <IntentsAndOutcomeHeader
              heading="Simulation Settings"
              icon={InsertChartOutlinedIcon}
            />
            <Divider
              variant="middle"
              component="div"
              sx={{ margin: "10px 0" }}
            />

            <SelectComponent
              text="Comparison Baseline"
              name="simulationSettings"
              entries={countriesTwo}
            />
            <p>What to compare the new intent-based routing against</p>

            <h4>LLM Confidence Threshold</h4>
            <SliderComponent
              minValue={0}
              maxValue={100}
              page="configureSimulation"
              stateValue={state.thresholdValue}
              successorText="%"
            />
            <p>Minimum confidence required for LLM Selection</p>

            <h4>Target Availability Simulation</h4>
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Consider agent availability and status"
                sx={{
                    color: '#192a50',

                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#192a50',
                      '&:hover': {
                        backgroundColor: 'rgba(176, 225, 231, 0.08)',
                      },
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#c4d2de', // Light blue/teal color
                      border: '2px solid #192a50'
                    },
                    '&  .MuiFormControlLabel-label': {
                        fontSize: '12px'
                    }
                  }}
              />
            </FormGroup>
            <p>Include realistic agent capacity constraints in simulation</p>
          </SectionContainer>
          <SectionContainer widthValue="49%" backgroundColor="#f4f6f9">
            <IntentsAndOutcomeHeader
              heading="Success Metrics"
              icon={InsertChartOutlinedIcon}
            />
            <Divider
              variant="middle"
              component="div"
              sx={{ margin: "10px 0" }}
            />

            <CheckboxComponent title="Primary Success Metrics" items={primarySuccessMetrics} from="primarySuccessMetrics"/>
          </SectionContainer>
          <SectionContainer widthValue="49%" backgroundColor="#f4f6f9">
            <IntentsAndOutcomeHeader
              heading="Advanced Options"
              icon={InsertChartOutlinedIcon}
            />
            <Divider
              variant="middle"
              component="div"
              sx={{ margin: "10px 0" }}
            />

            <CheckboxComponent title="Export Results" items={exportResults} from="exportResults"/>
          </SectionContainer>
        </section>
      </section>
    </>
  );
};

export default ConfigureSimulation;
