// React dependencies
import { useEffect, useState } from "react";

// 3rd party dependencies
import { DataGrid } from "@mui/x-data-grid";
import {
  Chip,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

// Local dependencies
import styles from "./TableData.module.css";
import { REVIEW_AND_FILTER_TABLE_DATA } from "../../Contracts/ReviewAndFilter";
import SectionContainer from "../SectionContainer/SectionContainer";
import IntentsAndOutcomeHeader from "../IntentsAndOutcomeHeader/IntentsAndOutcomeHeader";

interface ConversationData {
  id: number;
  conversationId: string;
  primary_intent: string;
  sub_intents: string[];
  segment: string;
  revenue_potential: string;
  urgency: string;
  stage: string;
  complexity: string;
  risk_compliance: string;
  customer_effort: string;
  sentiment: string;
  emotion: string[];
  PredictedAgentId: string;
  PredictedAgentpersona: string;
  PredictedAgentpersona_rank: number | null;
  PredictedAgentoverall_rank: number | null;
  PredictedAgentpersona_score: number | null;
  reason: string;
  ActualAgentId: string;
  ActualAgentpersona: string;
  ActualAgentpersona_score: number;
  ActualAgentpersona_rank: number;
}
const TableData: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<ConversationData>();

  // Column definitions for DataGrid
  const columns: GridColDef[] = [
    {
      field: "conversationId",
      headerName: "Conversation ID",
      width: 300,
      sortable: false,
    },
    {
      field: "primary_intent",
      headerName: "Customer Intent",
      width: 300,
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
            fontSize: "14px",
          }}
        />
      ),
    },
    {
      field: "PredictedAgentpersona",
      headerName: "Predicted Agent Persona",
      width: 300,
      sortable: false,
      renderCell: (params) => (
        params.value ? <Chip
          label={params.value}
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "#172950",
            borderColor: "#172950",
            color: "#fff",
            fontWeight: 500,
            fontSize: "14px",
          }}
        /> :
          <Chip
            label="N/A"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "#172950",
              borderColor: "#172950",
              color: "#fff",
              fontWeight: 500,
              fontSize: "14px",
            }}
          />
      ),
    },
    {
      field: "details",
      headerName: "Details",
      width: 300,
      sortable: false,
      renderCell: (params) => (
        <a
          onClick={(e) => handleOnClickViewDetails(e, params.row)}
          style={{
            color: "#172950",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          View Details
        </a>
      ),
    },
  ];

  // Sample data rows
  const rows = REVIEW_AND_FILTER_TABLE_DATA;

  const [conversationCount, setConversationCount] = useState<number | string>(
    0
  );
  const [selectedConversationCount, setSelectedConversationCount] = useState<
    number | string
  >(0);

  const handleSelectionChange = (selectionModel: any) => {
    setSelectedConversationCount(selectionModel.length);
  };

  useEffect(() => {
    setConversationCount(rows.length);
  });

  const handleOnClickViewDetails = (
    e: React.MouseEvent<HTMLAnchorElement>,
    rowData: ConversationData
  ): void => {
    e.stopPropagation();
    setModalData(rowData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className={styles.tableData}>
        <p>
          {conversationCount} conversations found | {selectedConversationCount}{" "}
          selected
        </p>
      </section>

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={(e) => handleSelectionChange(e)}
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
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
              fontSize: "15px",
            },
            "& .MuiDataGrid-cell a": {
              cursor: "pointer",
            },
          }}
        />
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        sx={{
          "& .MuiPaper-elevation": {
            border: "2px solid #172950",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "20px",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>Detailed View</DialogTitle>
        <DialogContent>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <SectionContainer widthValue="33%" backgroundColor="#f6f8ff">
              <IntentsAndOutcomeHeader
                heading="Conversation Details"
                icon={QuestionAnswerOutlinedIcon}
              />
              <Divider sx={{ margin: "10px 0", opacity: "1" }} />
              <Box sx={{ mb: 2 }}>
                <h4>Conversation ID</h4>

                <p style={{fontSize: '16px'}}>{modalData?.conversationId}</p>
              </Box>

              <Box sx={{ mb: 2 }}>
                <h4>Customer Intent</h4>
                <Chip
                  label={modalData?.primary_intent}
                  size="small"
                  sx={{
                    backgroundColor: "#172950",
                    borderColor: "#172950",
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "14px",
                    mt: 0.5,
                    padding: "10px",
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <h4>Sub Intents</h4>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, alignItems: "flex-start" }}>
                  {modalData?.sub_intents?.map((intent, index) => (
                    <Chip
                      key={index}
                      label={intent}
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {modalData?.sentiment && (
                <Box sx={{ mb: 3 }}>
                  <h4>Customer Sentiment</h4>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    <Chip
                      label={modalData.sentiment}
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        mt: 0.5,
                        padding: "10px",
                        textTransform: "capitalize",
                      }}
                    />
                  </Box>
                </Box>
              )}

              <Box sx={{ mb: 3 }}>
                <h4>Attributes</h4>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, alignItems: "flex-start" }}>
                  {modalData?.risk_compliance === "High" && (
                    <Chip
                      label="Risk Compliance: High"
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {modalData?.customer_effort === "High" && (
                    <Chip
                      label="Customer Effort: High"
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {modalData?.urgency === "High" && (
                    <Chip
                      label="Urgency: High"
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {modalData?.complexity === "High" && (
                    <Chip
                      label="Complexity: High"
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {modalData?.revenue_potential === "High" && (
                    <Chip
                      label="Revenue Potential: High"
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {modalData?.risk_compliance === "Low" && (
                    <Chip
                      label="Risk Compliance: Low"
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {modalData?.customer_effort === "Low" && (
                    <Chip
                      label="Customer Effort: Low"
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {modalData?.urgency === "Low" && (
                    <Chip
                      label="Urgency: Low"
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {modalData?.complexity === "Low" && (
                    <Chip
                      label="Complexity: Low"
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  {modalData?.revenue_potential === "Low" && (
                    <Chip
                      label="Revenue Potential: Low"
                      size="small"
                      sx={{
                        backgroundColor: "#172950",
                        borderColor: "#172950",
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: "14px",
                        padding: "10px",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Box>
              </Box>


            </SectionContainer>

            <SectionContainer widthValue="33%" backgroundColor="#f6f8ff">
              <IntentsAndOutcomeHeader
                heading="AI Prediction"
                icon={PersonSearchOutlinedIcon}
              />
              <Divider sx={{ margin: "10px 0", opacity: "1" }} />
              {modalData?.PredictedAgentpersona_rank === null ? (
                <Box sx={{ mb: 2 }}>
                  <p style={{fontSize: '16px', fontStyle: 'italic'}}>Agents currently not available</p>
                </Box>
              ) : (
                <>
                  <Box sx={{ mb: 2 }}>
                    <h4>Agent ID</h4>
                    <p style={{wordWrap: 'break-word', fontSize: '16px'}}>{modalData?.PredictedAgentId}</p>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <h4>Agent Persona</h4>
                    <p style={{fontSize: '16px'}}>{modalData?.PredictedAgentpersona}</p>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <h4>Persona Rank</h4>
                    <p style={{fontSize: '16px'}}>{modalData?.PredictedAgentpersona_rank}</p>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <h4>Overall Rank</h4>
                    <p style={{fontSize: '16px'}}>{modalData?.PredictedAgentoverall_rank}</p>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <h4>Persona Score</h4>
                    <p style={{fontSize: '16px'}}>{modalData?.PredictedAgentpersona_score}</p>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <h4>Agent Role</h4>
                    <p style={{fontSize: '16px'}}>{modalData?.reason}</p>
                  </Box>
                </>
              )}
            </SectionContainer>

            <SectionContainer widthValue="33%" backgroundColor="#f6f8ff">
              <IntentsAndOutcomeHeader
                heading="Actual Assignment"
                icon={SupportAgentOutlinedIcon}
              />
              <Divider sx={{ margin: "10px 0", opacity: "1" }} />
              <Box sx={{ mb: 2 }}>
                <h4>Agent ID</h4>
                <p style={{wordWrap: 'break-word', fontSize: '16px'}}>{modalData?.ActualAgentId}</p>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <h4>Agent Persona</h4>
                <p style={{fontSize: '16px'}}>{modalData?.ActualAgentpersona}</p>
              </Box>

              <Box sx={{ mb: 2 }}>
                <h4>Persona Score</h4>
                <p style={{fontSize: '16px'}}>{modalData?.ActualAgentpersona_score}</p>
              </Box>

              <Box sx={{ mb: 2 }}>
                <h4>Persona Rank</h4>
                <p style={{fontSize: '16px'}}>{modalData?.ActualAgentpersona_rank}</p>
              </Box>
            </SectionContainer>
          </div>
        </DialogContent>
        <DialogActions>
          <button className={styles.button_field} onClick={handleClose}>
            Close
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TableData;
