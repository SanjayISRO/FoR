import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import styles from './GoalsAndKPIs.module.css';

interface Goal {
  goal: string;
  leadingKPIs: string[];
  laggingKPIs: string[];
}

interface GoalEditDialogProps {
  goal: Goal;
  open: boolean;
  onSave: (goal: Goal) => void;
  onClose: () => void;
}

const GoalEditDialog: React.FC<GoalEditDialogProps> = ({ goal, open, onSave, onClose }) => {
  const [editData, setEditData] = useState<Goal>(goal);
  const [leadingKPIsText, setLeadingKPIsText] = useState('');
  const [laggingKPIsText, setLaggingKPIsText] = useState('');

  useEffect(() => {
    setEditData(goal);
    setLeadingKPIsText(goal.leadingKPIs.join('\n'));
    setLaggingKPIsText(goal.laggingKPIs.join('\n'));
  }, [goal]);

  const handleSubmit = () => {
    const updatedGoal = {
      ...editData,
      leadingKPIs: leadingKPIsText.split('\n').filter(kpi => kpi.trim() !== ''),
      laggingKPIs: laggingKPIsText.split('\n').filter(kpi => kpi.trim() !== '')
    };
    onSave(updatedGoal);
  };

  const handleGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditData(prev => ({ ...prev, goal: event.target.value }));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        '& .MuiPaper-elevation': {
          border: '2px solid #172950',
          backgroundColor: '#f6f8ff',
          padding: '20px',
          borderRadius: '20px',
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 'bold' }}>
        Edit Goal & KPIs
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Edit the goal and its corresponding KPIs. Enter each KPI on a new line.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="goal"
          name="goal"
          label="Goal"
          type="text"
          fullWidth
          variant="standard"
          autoComplete="off"
          value={editData.goal}
          sx={{ margin: '10px 0' }}
          onChange={handleGoalChange}
        />
        <TextField
          required
          margin="dense"
          id="leadingKPIs"
          name="leadingKPIs"
          label="Leading KPIs (one per line)"
          fullWidth
          multiline
          minRows={4}
          maxRows={8}
          variant="outlined"
          autoComplete="off"
          value={leadingKPIsText}
          sx={{ margin: '10px 0' }}
          onChange={(e) => setLeadingKPIsText(e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="laggingKPIs"
          name="laggingKPIs"
          label="Lagging KPIs (one per line)"
          fullWidth
          multiline
          minRows={4}
          maxRows={8}
          variant="outlined"
          autoComplete="off"
          value={laggingKPIsText}
          sx={{ margin: '10px 0' }}
          onChange={(e) => setLaggingKPIsText(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <button className={styles.buttonField} onClick={onClose}>
          Cancel
        </button>
        <button
          className={styles.buttonField}
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default GoalEditDialog;