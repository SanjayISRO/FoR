import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Chip } from '@mui/material';
import type { GridColDef } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddIcon from '@mui/icons-material/Add';
import styles from './GoalsAndKPIs.module.css';
import GoalEditDialog from './GoalEditDialog';

interface Goal {
  id: number;
  goal: string;
  leadingKPIs: string[];
  laggingKPIs: string[];
}

const GoalsAndKPIs = () => {
  const [data, setData] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [selectedGoalsCount, setSelectedGoalsCount] = useState<number>(0);
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Check if data exists in localStorage
        const storedData = localStorage.getItem('contactCenterGoals');
        
        if (storedData) {
          // Use stored data
          const parsedData = JSON.parse(storedData);
          const dataWithIds = parsedData.map((item: any, index: number) => ({
            ...item,
            id: index + 1
          }));
          setData(dataWithIds);
        } else {
          // Load initial data from JSON file and store in localStorage
          const response = await fetch('/ContactCenterGoals.json');
          const jsonData = await response.json();
          const dataWithIds = jsonData.ContactCenterGoals.map((item: any, index: number) => ({
            ...item,
            id: index + 1
          }));
          setData(dataWithIds);
          // Store in localStorage for future use
          localStorage.setItem('contactCenterGoals', JSON.stringify(jsonData.ContactCenterGoals));
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  const handleEdit = (goal: Goal, index: number) => {
    setEditingGoal(goal);
    setEditIndex(index);
  };

  const handleSave = (updatedGoal: Goal) => {
    const updatedData = [...data];
    updatedData[editIndex] = updatedGoal;
    setData(updatedData);
    
    // Save to localStorage
    localStorage.setItem('contactCenterGoals', JSON.stringify(updatedData.map(({ id, ...rest }) => rest)));
    
    setEditingGoal(null);
    setEditIndex(-1);
  };

  const handleClose = () => {
    setEditingGoal(null);
    setEditIndex(-1);
    setIsAddingNew(false);
  };

  const handleSelectionChange = (selectionModel: any) => {
    setSelectedGoalsCount(selectionModel.length);
  };

  const handleAddNew = () => {
    const newGoal: Goal = {
      id: data.length + 1,
      goal: '',
      leadingKPIs: [],
      laggingKPIs: []
    };
    setEditingGoal(newGoal);
    setEditIndex(data.length);
    setIsAddingNew(true);
  };

  const handleSaveNew = (newGoal: Goal) => {
    const updatedData = [...data, { ...newGoal, id: data.length + 1 }];
    setData(updatedData);
    
    // Save to localStorage
    localStorage.setItem('contactCenterGoals', JSON.stringify(updatedData.map(({ id, ...rest }) => rest)));
    
    setEditingGoal(null);
    setEditIndex(-1);
    setIsAddingNew(false);
  };

  const columns: GridColDef[] = [
    {
      field: 'goal',
      headerName: 'Goal',
      width: 350,
      sortable: false,
    },
    {
      field: 'leadingKPIs',
      headerName: 'Leading KPIs',
      width: 300,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
          <Chip
            label={params.value.map((kpi: string) => `• ${kpi}`).join('\n\n')}
            variant="outlined"
            size="medium"
            sx={{
              backgroundColor: '#172950',
              borderColor: '#172950',
              color: '#fff',
              fontWeight: 500,
              fontSize: '12px',
              height: 'auto',
              minHeight: '28px',
              maxWidth: '280px',
              '& .MuiChip-label': {
                whiteSpace: 'pre-line',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                padding: '10px',
                lineHeight: '1.3',
              },
            }}
          />
        </Box>
      ),
    },
    {
      field: 'laggingKPIs',
      headerName: 'Lagging KPIs',
      width: 300,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
          <Chip
            label={params.value.map((kpi: string) => `• ${kpi}`).join('\n\n')}
            variant="outlined"
            size="medium"
            sx={{
              backgroundColor: '#172950',
              borderColor: '#172950',
              color: '#fff',
              fontWeight: 500,
              fontSize: '12px',
              height: 'auto',
              minHeight: '28px',
              maxWidth: '280px',
              '& .MuiChip-label': {
                whiteSpace: 'pre-line',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                padding: '10px',
                lineHeight: '1.3',
              },
            }}
          />
        </Box>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 80,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
          <button
            className={styles.editButton}
            onClick={() => handleEdit(params.row, params.row.id - 1)}
          >
            <EditOutlinedIcon />
          </button>
        </Box>
      ),
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 className={styles.heading}>Goals & KPIs</h4>
        <button
          className={styles.addButton}
          onClick={handleAddNew}
          style={{
            backgroundColor: '#172950',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '20px',
            marginRight: '10px',
          }}
        >
          <AddIcon />
        </button>
      </div>
      <section className={styles.tableData}>
        <p>{data.length} goals found | {selectedGoalsCount} selected</p>
      </section>

      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={handleSelectionChange}
          pageSizeOptions={[10, 20, 30]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          rowHeight={180}
          sx={{
            '& .MuiSvgIcon-fontSizeInherit': {
              display: 'none',
            },
            '& .MuiDataGrid-row:nth-of-type(even)': {
              backgroundColor: '#e7f2f6',
            },
            '& .MuiDataGrid-row .Mui-selected': {
              backgroundColor: 'none !important',
            },
            '& .MuiDataGrid-selectedRowCount': {
              display: 'none',
            },
            '& .MuiToolbar-gutters': {
              alignItems: 'baseline',
              margin: '10px 50px',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 'bold',
              fontSize: '15px',
            },
            '& .MuiDataGrid-cell': {
              padding: '8px',
            },
          }}
        />
      </div>

      {editingGoal && (
        <GoalEditDialog
          goal={editingGoal}
          open={!!editingGoal}
          onSave={isAddingNew ? handleSaveNew : handleSave}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default GoalsAndKPIs;