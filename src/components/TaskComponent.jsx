/* eslint-disable react/prop-types */
import { Check, Close, Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTask, editTask } from '../Api/ApiFunctions';
import { toDoContext } from '../Context/projectContext';
const TaskCard = ({ task }) => {
  //constants
  const navigate = useNavigate();
  const { fetchTasks } = useContext(toDoContext);
  //states
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  //functions
  const handleToggleStatus = async () => {
    setLoadingStatus(true);

    task.completed = !task.completed;
    await editTask(task.id, task);
    fetchTasks();
    setLoadingStatus(false);
  };
  const handleDelete = async () => {
    setLoadingDelete(true);

    await deleteTask(task.id);
    fetchTasks();
    setLoadingDelete(false);
  };
  const handleEdit = async () => {
    setLoadingEdit(true);

    navigate(`/edit/${task.id}`);
    setLoadingEdit(false);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '50%',

        bgcolor: task.completed ? '#16f525' : '#f75767',
        color: '#ffffff',
        mb: 2,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant='h5'>{task.task}</Typography>
      </CardContent>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          sx={{ bgcolor: task.completed ? '#f23d67' : '#16f525', mr: 1 }}
          onClick={handleToggleStatus}
          disabled={loadingStatus}
        >
          {loadingStatus ? (
            <CircularProgress size={24} color='#ffffff' />
          ) : task.completed ? (
            <Close sx={{ color: '#030203' }} />
          ) : (
            <Check sx={{ color: '#030203' }} />
          )}
        </Button>
        <Button
          sx={{ bgcolor: '#1475f5', color: '#030203', mr: 1 }}
          onClick={handleEdit}
          disabled={loadingEdit}
        >
          {loadingEdit ? (
            <CircularProgress size={24} color='#ffffff' />
          ) : (
            <Edit />
          )}
        </Button>
        <Button
          sx={{ bgcolor: '#ff0000', color: '#030203', mr: 1 }}
          onClick={handleDelete}
          disabled={loadingDelete}
        >
          {loadingDelete ? (
            <CircularProgress size={24} color='#ffffff' />
          ) : (
            <Delete />
          )}
        </Button>
      </Box>
    </Card>
  );
};

export default TaskCard;
