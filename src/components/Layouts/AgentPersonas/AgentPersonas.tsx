// React dependencies
import { useEffect, useState } from "react";

// 3rd party dependencies
import { Chip } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import IntentsAndOutcomeHeader from "../../IntentsAndOutcomeHeader/IntentsAndOutcomeHeader";
import { AGENT_PERSONA_DATA } from "../../../Contracts/AgentPersona";

const AgentPersonas: React.FC = () => {
  const [agentsCount, setAgentsCount] = useState<number>(0);
  const columns: GridColDef[] = [
    {
      field: "personaName",
      headerName: "Name",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <div style={{ 
          padding: "8px 4px", 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "flex-start"
        }}>
          <p style={{ 
            fontSize: "14px", 
            lineHeight: "1.4", 
            margin: 0, 
            wordWrap: "break-word", 
            wordBreak: "break-word", 
            whiteSpace: "normal", 
            textAlign: "left", 
            width: "100%" 
          }}>
            {params.value}
          </p>
        </div>
      ),
    },
    {
      field: "roleSummary",
      headerName: "Role",
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <div style={{ 
          padding: "8px 4px", 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "flex-start"
        }}>
          <p style={{ 
            fontSize: "14px", 
            lineHeight: "1.4", 
            margin: 0, 
            wordWrap: "break-word", 
            wordBreak: "break-word", 
            whiteSpace: "normal", 
            textAlign: "left", 
            width: "100%" 
          }}>
            {params.value}
          </p>
        </div>
      ),
    },
    {
      field: "personaProfile",
      headerName: "Profile",
      width: 400,
      sortable: false,
      renderCell: (params) => (
        <div style={{ 
          padding: "8px 4px", 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center"
        }}>
          <Chip
            label={
              `- "intent_triggers": [${params.value.intent_triggers.map((trigger: string) => `"${trigger}"`).join(", ")}]\n\n` +
              `- "stage_triggers": [${params.value.stage_triggers.map((trigger: string) => `"${trigger}"`).join(", ")}]\n\n` +
              `- "segment_triggers": [${params.value.segment_triggers.map((trigger: string) => `"${trigger}"`).join(", ")}]\n\n` +
              `- "behavioural_traits_notes": "${params.value.behavioural_traits_notes}"\n\n` +
              `- "performance_traits_notes": "${params.value.performance_traits_notes}"`
            }
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
        </div>
      ),
    },
    {
      field: "leading_kpis",
      headerName: "Leading KPI's",
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <div style={{ 
          padding: "8px 4px", 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center"
        }}>
          <Chip
            label={params.value.map((kpi: any) => `• ${kpi.kpi_name}`).join('\n\n')}
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
        </div>
      ),
    },
    {
      field: "lagging_kpis",
      headerName: "Lagging KPI's",
      width: 250,
      sortable: false,
      renderCell: (params) => (
        <div style={{ 
          padding: "8px 4px", 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center"
        }}>
          <Chip
            label={params.value.map((kpi: any) => `• ${kpi.kpi_name}`).join('\n\n')}
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
        </div>
      ),
    },
    {
      field: "agentCount",
      headerName: "Count",
      headerAlign: "left",
      width: 100,
      sortable: false,
      renderCell: (params) => <p style={{ fontSize: "14px", textAlign: "left" }}>{params.value}</p>,
    },
  ];

  const agentPersonaData = AGENT_PERSONA_DATA.map((persona, index) => ({
    id: index,
    personaName: persona.personaName,
    roleSummary: persona.roleSummary,
    personaProfile: persona.personaProfile,
    leading_kpis: persona.kpi_alignment.leading_kpis,
    lagging_kpis: persona.kpi_alignment.lagging_kpis,
    agentCount: persona.agentCount
  }));

  useEffect(() => {
    let count = 0;

    AGENT_PERSONA_DATA.forEach((data) => {
      count = count + data.agentCount;
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
            pageSizeOptions={[10, 20, 30]}
            rowHeight={300}
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
