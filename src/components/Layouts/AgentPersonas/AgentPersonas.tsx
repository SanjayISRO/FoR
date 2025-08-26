// React dependencies
import { useEffect, useState } from "react";

// 3rd party dependencies
import { Chip } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import IntentsAndOutcomeHeader from "../../IntentsAndOutcomeHeader/IntentsAndOutcomeHeader";
import { AGENT_PERSONA_TABLE_DATA } from "../../../Contracts/AgentPersona";

const AgentPersonas: React.FC = () => {
  const [agentsCount, setAgentsCount] = useState<number>(0);
  const columns: GridColDef[] = [
    {
      field: "sno",
      headerName: "S.No",
      width: 80,
      sortable: false,
      renderCell: (params) => (
        <p>{params.api.getRowIndexRelativeToVisibleRows(params.id) + 1}</p>
      ),
    },
    {
      field: "personaTitle",
      headerName: "Persona Title",
      width: 250,
      sortable: false,
      renderCell: (params) => <p>{params.value}</p>,
    },
    {
      field: "categories",
      headerName: "Categories / Rule(s)",
      width: 500,
      sortable: false,
      renderCell: (params) => (
        <Chip
          label={params.value}
          variant="outlined"
          size="medium"
          sx={{
            backgroundColor: "#172950",
            borderColor: "#172950",
            color: "#fff",
            fontWeight: 500,
            fontSize: "11px",
            wordWrap: "break-word",
            whiteSpace: "normal",
            height: "auto",
            minHeight: "28px",
            "& .MuiChip-label": {
              whiteSpace: "pre-line",
              wordWrap: "break-word",
              wordBreak: "break-word",
              padding: "8px",
            },
          }}
        />
      ),
    },
    {
      field: "agentCount",
      headerName: "Agent(s) Count",
      width: 150,
      sortable: false,
      renderCell: (params) => <p>{params.value}</p>,
    },
  ];

  const agentPersonaData = AGENT_PERSONA_TABLE_DATA;

  useEffect(() => {
    let count = 0;

    agentPersonaData.forEach((data) => {
      count = count + data.agentCount;
    });

    setAgentsCount(count);
  });

  return (
    <>
      <h4 style={{ fontSize: "20px", marginBottom: "20px" }}>
        Agent Persona Details
      </h4>
      <div>
        <div style={{ display: "flex" }}>
          <IntentsAndOutcomeHeader
            icon={FolderCopyOutlinedIcon}
            heading={`Total Personas:- ${agentPersonaData.length}`}
            colorCode="#2143a3"
          />
          <div style={{ border: "1px solid #2143a3", margin: "0 10px" }}></div>
          <IntentsAndOutcomeHeader
            icon={Groups2OutlinedIcon}
            heading={`Total Agents:- ${agentsCount}`}
            colorCode="#2143a3"
          />
        </div>
        <div style={{ width: "100%", margin: "20px 0" }}>
          <DataGrid
            rows={agentPersonaData}
            columns={columns}
            checkboxSelection
            // onRowSelectionModelChange={(e) => handleSelectionChange(e)}
            pageSizeOptions={[10, 20, 30]}
            rowHeight={150}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            sx={{
              "& .MuiSvgIcon-fontSizeInherit": {
                display: "none",
              },
              "& .MuiDataGrid-row:nth-of-type(even)": {
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
              "& .MuiDataGrid-columnHeaderCheckbox, .MuiDataGrid-cellCheckbox":
                {
                  display: "none",
                },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",
                fontSize: "15px",
              },
              "& .MuiDataGrid-columnSeparator--sideRight": {
                display: "none",
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AgentPersonas;
