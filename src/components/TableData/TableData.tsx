// React dependencies
import { useEffect, useState } from "react";

// 3rd party dependencies
import { DataGrid } from "@mui/x-data-grid";
import { Chip, Box } from "@mui/material";
import type { GridColDef } from "@mui/x-data-grid";

// Local dependencies
import styles from "./TableData.module.css";
import { REVIEW_AND_FILTER_TABLE_DATA } from "../../Contracts/ReviewAndFilter";

const BACKGROUND_COLOR = "#172950";

const TableData: React.FC = () => {
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
      field: "businessOutcome",
      headerName: "Business Outcome",
      width: 300,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, py: 1 }}>
          {Array.isArray(params.value) ? (
            params.value.map((outcome, index) => (
              <Chip
                key={index}
                label={outcome}
                variant="filled"
                size="small"
                sx={{
                  backgroundColor: "#172950",
                  borderColor: "#172950",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              />
            ))
          ) : (
            <Chip
              label={params.value}
              variant="filled"
              size="small"
              sx={{
                backgroundColor: "#172950",
                borderColor: "#172950",
                color: "#fff",
                fontWeight: 500,
                fontSize: "14px",
              }}
            />
          )}
        </Box>
      ),
    },
    {
      field: "details",
      headerName: "Details",
      width: 300,
      sortable: false,
      renderCell: (params) => (
        <a
          href="#"
          style={{
            color: "#172950",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {params.value}
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
          }}
        />
      </div>
    </>
  );
};

export default TableData;
