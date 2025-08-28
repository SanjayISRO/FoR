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
      field: "Category",
      headerName: "Category",
      width: 160,
      sortable: false,
      renderCell: (params) => <p style={{ fontSize: "14px" }}>{params.value}</p>,
    },
    {
      field: "Name",
      headerName: "Name",
      width: 180,
      sortable: false,
      renderCell: (params) => <p style={{ fontSize: "14px" }}>{params.value}</p>,
    },
    {
      field: "Traits",
      headerName: "Traits",
      width: 220,
      sortable: false,
      renderCell: (params) => (
        <Chip
          label={params.value.map((trait: string) => `- ${trait}`).join('\n\n')}
          variant="outlined"
          size="medium"
          sx={{
            backgroundColor: "#172950",
            borderColor: "#172950",
            color: "#fff",
            fontWeight: 500,
            fontSize: "12px",
            height: "auto",
            minHeight: "28px",
            width: "100%",
            "& .MuiChip-label": {
              whiteSpace: "pre-line",
              wordWrap: "break-word",
              wordBreak: "break-word",
              padding: "10px",
              lineHeight: "1.3",
            },
          }}
        />
      ),
    },
    {
      field: "Type",
      headerName: "Type",
      width: 120,
      sortable: false,
      renderCell: (params) => <p style={{ fontSize: "14px" }}>{params.value}</p>,
    },
    {
      field: "Behaviour",
      headerName: "Behaviour",
      width: 325,
      sortable: false,
      renderCell: (params) => (
        <div style={{ padding: "8px 4px", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
          {Array.isArray(params.value) ? (
            <div style={{ width: "100%" }}>
              {params.value.map((item: string, index: number) => (
                <div key={index} style={{ marginBottom: "6px", fontSize: "14px", lineHeight: "1.3", wordWrap: "break-word", wordBreak: "break-word", whiteSpace: "normal" }}>
                  • {item}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ fontSize: "12px", lineHeight: "1.4", margin: 0, wordWrap: "break-word", wordBreak: "break-word", whiteSpace: "normal", textAlign: "left", width: "100%" }}>{params.value}</p>
          )}
        </div>
      ),
    },
    {
      field: "Count",
      headerName: "Count",
      headerAlign: "center",
      width: 130,
      sortable: false,
      renderCell: (params) => <p style={{ fontSize: "13px", textAlign: "center" }}>{Array.isArray(params.value) ? params.value.length : params.value}</p>,
    },
  ];

  const agentPersonaData = AGENT_PERSONA_TABLE_DATA;

  useEffect(() => {
    let count = 0;

    agentPersonaData.forEach((data) => {
      count = count + (Array.isArray(data.Count) ? data.Count.length : data.Count);
    });

    setAgentsCount(count);
  });

  return (
    <>
      <h4 style={{ fontSize: "20px", marginBottom: "20px" }}>
        Agent Personas
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
            rowHeight={220}
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
