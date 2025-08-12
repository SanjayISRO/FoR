// React dependencies
import { useState } from "react";

// 3rd party dependencies
import {
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

// Local dependencies
import styles from "./FilterAndReview.module.css";
import TableData from "../../TableData/TableData";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const intentList: string[] = [
  "Payment Issue",
  "Tech Support",
  "Billing Query",
  "Account Help",
  "Cancel Subscription",
  "Feedback",
  "Login Issue",
  "Upgrade Plan",
];

const outcomesList: string[] = [
  "Reduce Friction",
  "Retention",
  "First Call Resolution",
  "Customer Retention",
  "Upsell",
  "Increase Revenue",
];

const FilterAndReview: React.FC = () => {
  const [intents, setintents] = useState<string[]>([]);
  const [outcomes, setOutcomes] = useState<string[]>([]);


  const handleChange = (event: SelectChangeEvent<typeof intents>, from: string) => {
    const {
      target: { value },
    } = event;

    if (from === 'intent') {
        setintents(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
          );
    } else {
        setOutcomes(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
          );
    }
    
  };

  return (
    <>
      <h4 className={styles.heading}>Analysed Conversations</h4>
      <section className={styles.tableFilter}>
        <div className={styles.filter_block}>
          <label>Search</label>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search coversations, intents, outco..."
          />
          <CloseIcon className={styles.closeIconx} />
        </div>

        <div className={styles.filter_block}>
          <label id="demo-multiple-name-label">Intent Filter</label>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={intents}
            onChange={(e) => handleChange(e, 'intent')}
            MenuProps={MenuProps}
            displayEmpty
            renderValue={(selected) => {
              if (!selected.length) {
                return <em style={{fontSize: '12px'}}>Choose Intents</em>;
              }
              return selected.join(", ");
            }}
            sx={{
              width: "100%",
              "& .MuiSelect-select": {
                padding: "7px 20px",
              },
            }}
          >
            {intentList.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={intents.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className={styles.filter_block}>
          <label id="demo-multiple-name-label">Outcomes Filter</label>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={outcomes}
            onChange={(e) => handleChange(e, 'outcome')}
            MenuProps={MenuProps}
            displayEmpty
            renderValue={(selected) => {
              if (!selected.length) {
                return <em style={{fontSize: '12px'}}>Choose Outcomes</em>;
              }
              return selected.join(", ");
            }}
            sx={{
              width: "100%",
              "& .MuiSelect-select": {
                padding: "7px 20px",
              },
            }}
          >
            {outcomesList.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={intents.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <button>Filter</button>
        </div>
      </section>

      <TableData />
    </>
  );
};

export default FilterAndReview;
