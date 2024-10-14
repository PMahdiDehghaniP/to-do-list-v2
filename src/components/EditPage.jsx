import { Edit } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editTask, getTaskId } from '../Api/ApiFunctions';
import { toDoContext } from '../Context/projectContext';
import Navbar from './NavBar';

const EditPage = () => {
  // States
  const { fetchTasks } = useContext(toDoContext);
  const navigate = useNavigate();
  const { taskId } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [selectedTask, setTask] = useState('');
  const [taskContent, setTaskContent] = useState('');

  //Functions
  const backToHome = () => {
    navigate('/');
  };
  const handleEdit = async () => {
    const EditedTask = { ...selectedTask, task: taskContent };
    await editTask(taskId, EditedTask);
    fetchTasks();
    backToHome();
  };
  //UseEffect
  useEffect(() => {
    const getTask = async () => {
      try {
        const taskData = await getTaskId(taskId);
        setTaskContent(taskData.task);
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    getTask();
  }, [taskId]);

  return (
    <>
      <Navbar />
      <Box
        mt={19}
        display='flex'
        alignItems='center'
        width='100%'
        flexDirection='column'
      >
        <Box display='flex' width='48%' justifyContent='center'>
          <TextField
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
            onChange={(e) => setTaskContent(e.target.value)}
            fullWidth
            variant='outlined'
            label='Edit Task'
            value={taskContent}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Edit />
                </InputAdornment>
              ),
              style: { color: '#ffffff' },
            }}
            InputLabelProps={{
              style: { color: '#ffffff' },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ffffff',
                },
                '&:hover fieldset': {
                  borderColor: '#ffffff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ffffff',
                },
              },
            }}
          />
          <Button
            onClick={handleEdit}
            sx={{ bgcolor: 'purple', color: 'black', borderRadius: 3, ml: 1 }}
          >
            Submit
          </Button>
        </Box>
        <Box display='flex' width='48%' justifyContent='center'>
          <Button
            onClick={backToHome}
            sx={{
              bgcolor: 'purple',
              color: 'black',
              borderRadius: 3,
              mt: 6,
              padding: 2,
              width: '56%',
            }}
          >
            Home
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditPage;
