// React dependencies
import { useState, useRef, useEffect } from "react";

// 3rd party dependencies
import GroupsIcon from "@mui/icons-material/Groups";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

// Local Dependencies
import { useAppContext } from "../../../context/AppContext";
import styles from "./ReviewAndValidate.module.css";
import Note from "../../Note/Note";
import {
  Checkbox,
  Divider,
  ListItemText,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import IntentsAndOutcomeHeader from "../../IntentsAndOutcomeHeader/IntentsAndOutcomeHeader";
import IntentsAndOutcomeBody, {
  type IntentsAndOutcomeBodyProps,
} from "../../IntentsAndOutcomeBody/IntentsAndOutcomeBody";
import { DROP_DOWN_LIST, CUSTOMER_INTENT_DATA } from "../../../Contracts/ReviewAndValidate";

export interface ICustomerIntent {
  id: number;
  rank: number;
  title: string;
  description: string;
  priority: string;
  confidence: string;
  mappedClusterIntent: string;
}

export interface IBusinessOutcome {
  id: number;
  rank: number;
  title: string;
  description: string;
  priority: string;
  confidence: string;
  kpiDatas: string;
}

const ReviewAndValidate: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [selectedIntentId, setSelectedIntentId] = useState<number | null>(null);
  const [displayedBusinessOutcomes, setDisplayedBusinessOutcomes] = useState<any[]>([]);
  const businessOutcomeRef = useRef<HTMLElement>(null);

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

  function handleFormSubmit(data: IntentsAndOutcomeBodyProps) {
    // Update customer intents
    const updatedIntents = state.customerIntentList.map((intent) =>
      intent.id === data.id
        ? {
            ...intent,
            title: data.title,
            description: data.description,
            priority: data.priority,
            confidence: data.confidence,
            mappedClusterIntent:
              data.mappedClusterIntent || intent.mappedClusterIntent,
          }
        : intent
    );

    dispatch({
      type: "UPDATE_CUSTOMER_INTENTS",
      payload: updatedIntents,
    });

    console.log("Data updated successfully:", data);
  }



  const handleChange = (event: SelectChangeEvent<typeof selectedData>) => {
    const {
      target: { value },
    } = event;

    setSelectedData(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // Auto-select first intent on component mount
  useEffect(() => {
    if (CUSTOMER_INTENT_DATA.length > 0) {
      const firstIntent = CUSTOMER_INTENT_DATA[0];
      setSelectedIntentId(firstIntent.id);
      setDisplayedBusinessOutcomes(firstIntent.businessOutcomes);
    }
  }, []);

  const handleIntentClick = (intentId: number) => {
    setSelectedIntentId(intentId);
    const selectedIntent = CUSTOMER_INTENT_DATA.find(intent => intent.id === intentId);
    if (selectedIntent) {
      setDisplayedBusinessOutcomes(selectedIntent.businessOutcomes);
      // Auto-scroll to business outcomes section
      setTimeout(() => {
        businessOutcomeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };
  return (
    <>
      <h4 className={styles.heading}>Review & Validate Rankings</h4>
      <p>
        Review the AI-generated rankings for customer intents and business
        outcomes. Make adjustments before running simulation tests.
      </p>
      <Note
        text={`LLM Anallysis complete: Analysed ${state.totalConversations} historical
          conversations and ranked ${state.totalCustomerIntents} customer intents and ${state.totalBusinessOutcomes} business outcomes based on
          frequency, retention impact and revenue correlation. Reviw the rankings below and make the adjustments as needed.`}
        alignment="center"
        widthValue="85%"
      />

      <div className={styles.filter_block}>
        <h4 id="demo-multiple-name-label" style={{ margin: "10px 0" }}>
        Contact Center Goals
        </h4>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedData}
          onChange={(e) => handleChange(e)}
          MenuProps={MenuProps}
          displayEmpty
          renderValue={(selected) => {
            if (!selected.length) {
              return <em style={{fontSize: '12px'}}>Choose Contact Center Goals</em>;
            }
            return selected.join(", ");
          }}
          sx={{
            width: "49%",
            "& .MuiSelect-select": {
              padding: "7px 20px",
            },
          }}
        >
          {DROP_DOWN_LIST.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedData.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </div>

      <section className={styles.container}>
        <section className={styles.intents_and_outcomes}>
          <IntentsAndOutcomeHeader
            icon={GroupsIcon}
            heading="Customer Intent Priority Ranking"
          />
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
            Click on any intent to view its business outcomes →
          </div>
          <Divider variant="middle" component="div" sx={{ margin: "10px 0" }} />
          {CUSTOMER_INTENT_DATA.map((intents, index: number) => (
            <div 
              key={`intents_${index}`}
              onClick={() => handleIntentClick(intents.id)}
              style={{
                cursor: 'pointer',
                backgroundColor: selectedIntentId === intents.id ? '#e8f4fd' : 'transparent',
                border: selectedIntentId === intents.id ? '2px solid #2196f3' : '2px solid transparent',
                borderRadius: '12px',
                padding: '8px',
                margin: '8px 0',
                transition: 'all 0.2s ease-in-out',
                boxShadow: selectedIntentId === intents.id ? '0 4px 12px rgba(33, 150, 243, 0.15)' : 'none',
                transform: selectedIntentId === intents.id ? 'translateY(-1px)' : 'none',
                overflow: 'hidden',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (selectedIntentId !== intents.id) {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedIntentId !== intents.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'none';
                }
              }}
            >
              <IntentsAndOutcomeBody
                {...intents}
                index={index + 1}
                onSubmitChanges={handleFormSubmit}
              />
            </div>
          ))}
        </section>

        <section className={styles.intents_and_outcomes} ref={businessOutcomeRef}>
          <IntentsAndOutcomeHeader
            icon={AutoGraphIcon}
            heading={selectedIntentId ? `Business Outcome Priority Ranking for ${CUSTOMER_INTENT_DATA.find(intent => intent.id === selectedIntentId)?.title}` : "Business Outcome Priority Ranking"}
          />
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
            {selectedIntentId ? `Showing outcomes for: ${CUSTOMER_INTENT_DATA.find(intent => intent.id === selectedIntentId)?.title}` : 'Select an intent to view outcomes'}
          </div>
          <Divider variant="middle" component="div" sx={{ margin: "10px 0" }} />

          {displayedBusinessOutcomes.length > 0 ? (
            displayedBusinessOutcomes.map((outcome, index) => (
              <IntentsAndOutcomeBody
                {...outcome}
                key={`outcomes_${index}`}
                index={index + 1}
                onSubmitChanges={handleFormSubmit}
              />
            ))
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
              Click on a customer intent to see its business outcomes
            </div>
          )}
          
          {selectedIntentId && displayedBusinessOutcomes.length > 0 && (
            <div style={{ 
              marginTop: '20px', 
              padding: '15px', 
              backgroundColor: '#f5f5f5', 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '24px' }}>💡</span>
              <div>
                <strong>Reason:</strong> {CUSTOMER_INTENT_DATA.find(intent => intent.id === selectedIntentId)?.reason}
              </div>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default ReviewAndValidate;
