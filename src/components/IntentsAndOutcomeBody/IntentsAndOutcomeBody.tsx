// React dependencies
import { useState } from "react";

// 3rd party dependencies
import {
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

//Local dependencies
import styles from "./IntentsAndOutcomeBody.module.css";
import Note from "../Note/Note";

interface CustomerIntentMetrics {
  interactions: string;
  retention: string;
  cost: string;
}

interface BusinessOutcomeImpact {
  amount: string;
  type: string;
  urgency: string;
}

export interface IntentsAndOutcomeBodyProps {
  index?: number;
  id: number;
  rank: number;
  title: string;
  description: string;
  priority: string;
  confidence: string;
  mappedClusterIntent?: string;
  metrics?: CustomerIntentMetrics;
  impact?: BusinessOutcomeImpact;
  kpiDatas?: string;
  onSubmitChanges?: (updatedData: IntentsAndOutcomeBodyProps) => void;
}

const IntentsAndOutcomeBody: React.FC<IntentsAndOutcomeBodyProps> = (
  props: IntentsAndOutcomeBodyProps
) => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<IntentsAndOutcomeBodyProps | null>(
    null
  );


  const handleClickOpen = () => {
    setOpen(true);
    setEditData(props);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Call parent callback if provided and editData exists
    if (props.onSubmitChanges && editData) {
      props.onSubmitChanges(editData);
    }

    handleClose();
  };

  const handleOnChangeFormData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ): void => {
    setEditData((prevVal) => {
      if (!prevVal) return null;

      return {
        ...prevVal,
        [field]: event.target.value,
      };
    });
  };



  return (
    <section className={styles.item_container}>
      <div className={styles.body_container}>
        <div className={styles.index_text}>{props.index}</div>
        <div className={styles.title_and_description}>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <div className={styles.chips_section}>
          {props.priority && (
            <Chip
              label={props.priority}
              variant="outlined"
              size="medium"
              sx={{
                backgroundColor: "#172950",
                borderColor: "#172950",
                color: "#fff",
                fontWeight: 500,
                fontSize: "14px",
                margin: "5px 0",
                width: "100%",
              }}
            />
          )}
          {props.confidence && (
            <Chip
              label={props.confidence}
              variant="outlined"
              size="medium"
              sx={{
                backgroundColor: "#172950",
                borderColor: "#172950",
                color: "#fff",
                fontWeight: 500,
                fontSize: "14px",
                width: "100%",
              }}
            />
          )}
        </div>
        <div className={styles.action_section}>
          <button onClick={handleClickOpen}>
            <EditOutlinedIcon />
          </button>
        </div>
      </div>
      {props.mappedClusterIntent && (
        <Note
          text={props.mappedClusterIntent}
          alignment="center"
          widthValue="100%"
        />
      )}
      {props.kpiDatas && (
        <Note text={props.kpiDatas} alignment="center" widthValue="100%" />
      )}
      <section className={styles.metrics}>
        {props.metrics && (
          <>
            <div>
              <AccessTimeIcon fontSize="small" className={styles.metric_icon} />
              {props.metrics.interactions} interactions
            </div>
            <div>
              <TrackChangesIcon
                fontSize="small"
                className={styles.metric_icon}
              />
              {props.metrics.retention} retentions
            </div>
            <div>
              <AttachMoneyIcon
                fontSize="small"
                className={styles.metric_icon}
              />
              {props.metrics.cost}
            </div>
          </>
        )}
        {props.impact && (
          <>
            <div>
              <AttachMoneyIcon
                fontSize="small"
                className={styles.metric_icon}
              />
              {props.impact.amount + " " + props.impact.type}
            </div>
            <div>
              <ReportProblemOutlinedIcon
                fontSize="small"
                className={styles.metric_icon}
              />
              {props.impact.urgency}
            </div>
          </>
        )}
      </section>
      <Divider variant="middle" component="div" sx={{ margin: "15px" }} />

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          "& .MuiPaper-elevation": {
            border: "2px solid #172950",
            backgroundColor: "#f6f8ff",
            padding: "20px",
            borderRadius: "20px",
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>
          Edit{" "}
          {editData?.impact
            ? "Business Outcome Priority Ranking"
            : "Customer Outcome Priority Ranking"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the details for this item. Make your changes and click Save to
            update.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="edit-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="title"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              autoComplete="off"
              defaultValue={editData?.title || ""}
              sx={{ margin: "10px 0" }}
              onChange={(e) => handleOnChangeFormData(e, "title")}
            />
            <TextField
              required
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              multiline
              rows={3}
              variant="standard"
              autoComplete="off"
              defaultValue={editData?.description || ""}
              sx={{ margin: "10px 0" }}
              onChange={(e) => handleOnChangeFormData(e, "description")}
            />
            <TextField
              required
              margin="dense"
              id="priority"
              name="priority"
              label="Priority"
              type="text"
              fullWidth
              variant="standard"
              autoComplete="off"
              defaultValue={editData?.priority || ""}
              sx={{ margin: "10px 0", fontWeight: "500" }}
              onChange={(e) => handleOnChangeFormData(e, "priority")}
            />
            <TextField
              required
              margin="dense"
              id="confidence"
              name="confidence"
              label="Confidence"
              type="text"
              fullWidth
              variant="standard"
              autoComplete="off"
              defaultValue={editData?.confidence || ""}
              sx={{ margin: "10px 0" }}
              onChange={(e) => handleOnChangeFormData(e, "confidence")}
            />
            {editData?.mappedClusterIntent && (
              <TextField
                margin="dense"
                required
                id="mappedClusterIntent"
                name="mappedClusterIntent"
                label="Mapped Cluster Intent"
                type="text"
                fullWidth
                multiline
                rows={2}
                variant="standard"
                autoComplete="off"
                defaultValue={editData.mappedClusterIntent}
                sx={{ margin: "10px 0" }}
                onChange={(e) =>
                  handleOnChangeFormData(e, "mappedClusterIntent")
                }
              />
            )}

            {editData?.kpiDatas && (
              <TextField
                margin="dense"
                required
                id="kpiDatas"
                name="kpiDatas"
                label="KPI(s)"
                type="text"
                fullWidth
                multiline
                rows={2}
                variant="standard"
                autoComplete="off"
                defaultValue={editData.kpiDatas}
                sx={{ margin: "10px 0" }}
                onChange={(e) => handleOnChangeFormData(e, "kpiDatas")}
              />
            )}
          </form>
        </DialogContent>
        <DialogActions>
          <button className={styles.button_field} onClick={handleClose}>
            Cancel
          </button>
          <button
            className={styles.button_field}
            type="submit"
            form="edit-form"
          >
            Save Changes
          </button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default IntentsAndOutcomeBody;
