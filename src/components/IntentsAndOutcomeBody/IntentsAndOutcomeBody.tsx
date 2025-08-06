// 3rd party dependencies
import { Chip, Divider } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

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
  businessImpact?: string;
  metrics?: CustomerIntentMetrics;
  impact?: BusinessOutcomeImpact;
}

const IntentsAndOutcomeBody: React.FC<IntentsAndOutcomeBodyProps> = (
  props: IntentsAndOutcomeBodyProps
) => {
  return (
    <section>
      <div className={styles.body_container}>
        <div className={styles.index_text}>{props.index}</div>
        <div className={styles.title_and_description}>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <div className={styles.chips_section}>
          <Chip
            label={props.priority}
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "#172950",
              borderColor: "#172950",
              color: "#fff",
              fontWeight: 500,
              fontSize: "14px",
              margin: "5px 0",
            }}
          />
          <Chip
            label={props.confidence}
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
        </div>
        <div className={styles.action_section}>
            <button><KeyboardArrowDownOutlinedIcon /></button>
            <button><KeyboardArrowUpOutlinedIcon /></button>
            <button><EditOutlinedIcon /></button>
        </div>
      </div>
      {props.businessImpact && (
        <Note
          text={props.businessImpact}
          alignment="center"
          widthValue="100%"
        />
      )}
      <section className={styles.metrics}>
        {props.metrics && (
          <>
            <div>
              <AccessTimeIcon fontSize="small" className={styles.metric_icon}/>
              {props.metrics.interactions} interactions
            </div>
            <div>
              <TrackChangesIcon fontSize="small"  className={styles.metric_icon}/>
              {props.metrics.retention} retentions
            </div>
            <div>
              <AttachMoneyIcon fontSize="small"  className={styles.metric_icon}/>
              {props.metrics.cost}
            </div>
          </>
        )}
        {props.impact && (
            <>
            <div>
              <AttachMoneyIcon fontSize="small" className={styles.metric_icon}/>
              {props.impact.amount + ' ' + props.impact.type}
            </div>
            <div>
              <ReportProblemOutlinedIcon fontSize="small"  className={styles.metric_icon}/>
              {props.impact.urgency}
            </div>
           
            </>
        )}
      </section>
      <Divider variant="middle" component="div" sx={{ margin: "15px" }} />
    </section>
  );
};

export default IntentsAndOutcomeBody;
