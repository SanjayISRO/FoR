// React dependencies
import { useNavigate } from "react-router-dom";

//3rd party dependencies
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneForwardedOutlinedIcon from "@mui/icons-material/PhoneForwardedOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import GraphCard from "../../components/GraphCard/GraphCard";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Chip } from "@mui/material";

// Local dependencies
import KpiCard from "../../components/KpiCard/KpiCard";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import styles from "./SimulationAnalytics.module.css";
import { CONVERSATION_DATA } from "../../Contracts/SimulationAnalytics";
import { useAppContext } from "../../context/AppContext";

const SimulationAnalytics: React.FC = () => {
  const navigate = useNavigate();
  const {dispatch} = useAppContext();
  
  const selectOptions = [
    {
      value: "All Intents",
      label: "All Intents",
    },
  ];
  const kpiDatas = [
    {
      icon: AccessTimeIcon,
      heading: "Avg Handle Time",
      averageValue: "27.1%",
      historicalData: "8.5 min",
      predictiveData: "6.2 min",
    },
    {
      icon: PhoneForwardedOutlinedIcon,
      heading: "Transfer Rate",
      averageValue: "42.8%",
      historicalData: "16.2%",
      predictiveData: "8.7%",
    },
    {
      icon: CheckCircleOutlinedIcon,
      heading: "First Call Resolution",
      averageValue: "16.3%",
      historicalData: "72.5%",
      predictiveData: "84.3%",
    },
    {
      icon: AccountCircleOutlinedIcon,
      heading: "Customer Satisfaction",
      averageValue: "15.8%",
      historicalData: "3.8",
      predictiveData: "4.4",
    },
    {
      icon: WarningAmberOutlinedIcon,
      heading: "Abandonment Rate",
      averageValue: "42.3%",
      historicalData: "12.3%",
      predictiveData: "7.1%",
    },
  ];

  const conversationData = CONVERSATION_DATA;

  const columns: GridColDef[] = [
    {
      field: "conversation",
      headerName: "Conversation",
      width: 200,
      sortable: false,
      renderCell: (params) => <p>{params.value}</p>,
    },
    {
      field: "intent",
      headerName: "Intent",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <Chip
          label={params.value}
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "#172950",
            borderColor: "#172950",
            color: "#fff",
            fontWeight: 500,
            fontSize: "12px",
          }}
        />
      ),
    },
    {
      field: "originalTarget",
      headerName: "Original Target",
      width: 200,
      sortable: false,
      renderCell: (params) => <p>{params.value}</p>,
    },
    {
      field: "llmTarget",
      headerName: "LLM Target",
      width: 200,
      sortable: false,
      renderCell: (params) => <p>{params.value}</p>,
    },
    {
      field: "match",
      headerName: "Match",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <>{params.value && <CheckCircleOutlinedIcon />}</>
      ),
    },
    {
      field: "confidence",
      headerName: "Confidence",
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <>
          <progress
            style={{ accentColor: "#192a51" }}
            value={params.value.split("%")[0]}
            max="100"
          >
            {" "}
          </progress>
          <span
            style={{
              fontSize: "12px",
              margin: "0 10px",
            }}
          >
            {params.value}
          </span>
        </>
      ),
    },
    {
      field: "impact",
      headerName: "Impact",
      width: 200,
      sortable: false,
      renderCell: (params) => <p>{params.value}</p>,
    },
    {
      field: "details",
      headerName: "Details",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <a
          href="#"
          style={{
            color: "#172950",
            textDecoration: "underline",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          {params.value}
        </a>
      ),
    },
  ];

  const handleSelectionChange = (selectionModel: any) => {
    // setSelectedConversationCount(selectionModel.length);
  };

  const handleClick = () => {
    dispatch({
      type: 'SET_INITIAL_STATE'
    });

    navigate('/');
  }
  return (
    <section className={styles.analytics_container}>
      <div style={{display:'flex', justifyContent: 'space-between'}}>
      <div>
      <h3>Target Selection Simulation Comparison</h3>
      <p>Compare LLM-selected targets with historical routing decisions</p>
      </div><div>
        <button className={styles.button_container} onClick={handleClick}>Back To Home</button>
      </div>
      </div>


      <div style={{ width: "25%" }}>
        <SelectComponent text="Show" name="analytics" entries={selectOptions} />
      </div>

      <div className={styles.kpicard}>
        {kpiDatas &&
          kpiDatas.length &&
          kpiDatas.map((data, index) => <KpiCard key={index} {...data} />)}
      </div>

      <div className={styles.kpicard}>
        <GraphCard title="" />
        <GraphCard title="Intent Match Accuracy by Category" />
        <GraphCard title="Intent to Outcome Success Rate" />
      </div>

      <div className={styles.tableSection}>
        <div style={{ width: "100%" }}>
          <DataGrid
            rows={conversationData}
            columns={columns}
            checkboxSelection
            // onRowSelectionModelChange={(e) => handleSelectionChange(e)}
            pageSizeOptions={[10, 20, 30]}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            sx={{
              "& .MuiSvgIcon-fontSizeInherit": {
                display: "none",
              },
              "& .MuiDataGrid-row:nth-child(even)": {
                backgroundColor: "#e7f2f6",
              },
              "& .MuiDataGrid-row .Mui-selected": {
                backgroundColor: "none !important",
              },
              "& .MuiDataGrid-selectedRowCount": {
                display: "none",
              },
              "& .MuiToolbar-gutters": {
                alignItems: "baseline",
                margin: "10px 50px",
              },
              "& .MuiDataGrid-cell[data-field='businessOutcome']": {
                overflowY: "auto",
                maxHeight: "100px", // Set a max height for the cell
                padding: "8px",
              },
              // Alternative: Target all cells in that column
              "& .MuiDataGrid-columnHeader[data-field='businessOutcome'] ~ .MuiDataGrid-cell":
                {
                  overflowY: "auto",
                },
              "& .MuiDataGrid-columnHeaderCheckbox, .MuiDataGrid-cellCheckbox":
                {
                  display: "none",
                },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",
                fontSize: "15px",
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SimulationAnalytics;
