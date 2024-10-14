import { Box, AppBar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Box
          display='flex'
          width='100%'
          alignItems='center'
          height='100px'
          justifyContent='center'
        >
          <Typography variant='h5' sx={{ ml: 4 }}>
            Welcome To My To-Do List
          </Typography>
        </Box>
      </AppBar>
    </>
  );
};
export default Navbar;
