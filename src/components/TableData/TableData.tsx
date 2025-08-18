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
  customerIntent: string;
  businessOutcome: string[];
  details: string;
  predictedAgentPersona: string;
  predictedAgent: string;
  reasonForPrediction?: string;
  actualAgentPersona?: string;
  actualAgent: string;
  actualAgentPersonaConfidence: string;
  predictedAgentName: string;
  actualAgentName: string;
  predictedAgentPersonaConfidence: string
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
      field: "customerIntent",
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
      field: "predictedAgentPersona",
      headerName: "Predicted Agent Persona",
      width: 300,
      sortable: false,
      renderCell: (params) => (
        // <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, py: 1 }}>
        //   {Array.isArray(params.value) ? (
        //     params.value.map((outcome, index) => (
        //       <Chip
        //         key={index}
        //         label={outcome}
        //         variant="filled"
        //         size="small"
        //         sx={{
        //           backgroundColor: "#172950",
        //           borderColor: "#172950",
        //           color: "#fff",
        //           fontWeight: 500,
        //           fontSize: "14px",
        //         }}
        //       />
        //     ))
        //   ) : (
        //     <Chip
        //       label={params.value}
        //       variant="filled"
        //       size="small"
        //       sx={{
        //         backgroundColor: "#172950",
        //         borderColor: "#172950",
        //         color: "#fff",
        //         fontWeight: 500,
        //         fontSize: "14px",
        //       }}
        //     />
        //   )}
        // </Box>
        params.value ?  <Chip
          label={params.value.split('-')[0]}
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
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <SectionContainer widthValue="33%" backgroundColor="#f6f8ff">
              <IntentsAndOutcomeHeader
                heading="Conversation Details"
                icon={QuestionAnswerOutlinedIcon}
              />
              <Divider sx={{ margin: "10px 0", opacity: "1" }} />
              <Box sx={{ mb: 2 }}>
                <h4>Conversation ID</h4>

                <p>{modalData?.conversationId}</p>
              </Box>

              <Box sx={{ mb: 2 }}>
                <h4>Customer Intent</h4>
                <Chip
                  label={modalData?.customerIntent}
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

              <Box sx={{mb: 3}}>
                <h4>Business Outcomes</h4>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {modalData?.businessOutcome?.map((outcome, index) => (
                    <Chip
                      key={index}
                      label={outcome}
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
                  ))}
                </Box>
              </Box>
            </SectionContainer>

            <SectionContainer widthValue="33%" backgroundColor="#f6f8ff">
              <IntentsAndOutcomeHeader
                heading="AI Prediction"
                icon={PersonSearchOutlinedIcon}
              />
              <Divider sx={{ margin: "10px 0", opacity: "1" }} />
              {/* <Box sx={{ mb: 2 }}>
                <h4>Predicted Agent's Id</h4>

                <p style={{wordWrap: 'break-word'}}>{modalData?.predictedAgent}</p>
              </Box> */}
              <Box sx={{ mb: 2 }}>
                <h4>Agent's Name</h4>

                <p>{modalData?.predictedAgentName}</p>
              </Box>
              <Box sx={{ mb: 2 }}>
                <h4>Agent's Persona</h4>

                <p>{modalData?.predictedAgentPersona}</p>
              </Box>
              <Box sx={{ mb: 2 }}>
                <h4>Reason for Prediction</h4>

                <p>{modalData?.reasonForPrediction}</p>
              </Box>

              <Box sx={{ mb: 2 }}>
                <h4>Agent's Persona Confidence</h4>

                <p>{modalData?.predictedAgentPersonaConfidence}</p>
              </Box>
            </SectionContainer>

            <SectionContainer widthValue="33%" backgroundColor="#f6f8ff">
              <IntentsAndOutcomeHeader
                heading="Actual Assignment"
                icon={SupportAgentOutlinedIcon}
              />
              <Divider sx={{ margin: "10px 0", opacity: "1" }} />
              {/* <Box sx={{ mb: 2 }}>
                <h4>Actual Agent's Id</h4>

                <p style={{wordWrap: 'break-word'}}>{modalData?.actualAgent}</p>
              </Box> */}
              <Box sx={{ mb: 2 }}>
                <h4>Agent's Name</h4>

                <p>{modalData?.actualAgentName}</p>
              </Box>
              <Box sx={{ mb: 2 }}>
                <h4>Agent's Persona</h4>

                <p>{modalData?.actualAgentPersona}</p>
              </Box>

              <Box sx={{ mb: 2 }}>
                <h4>Agent's Persona Confidence</h4>

                <p>{modalData?.actualAgentPersonaConfidence}</p>
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
