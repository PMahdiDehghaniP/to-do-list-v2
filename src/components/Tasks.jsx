import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { toDoContext } from '../Context/projectContext';
import TaskCard from './TaskComponent';
// eslint-disable-next-line react/prop-types
const Tasks = ({ searchValue }) => {
  const { tasks } = useContext(toDoContext);
  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      width='100%'
      mt={2}
    >
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <Typography variant='h6' sx={{ color: '#ffffff', mt: 4 }}>
          هیچ تسکی یافت نشد
        </Typography>
      )}
    </Box>
  );
};

export default Tasks;
