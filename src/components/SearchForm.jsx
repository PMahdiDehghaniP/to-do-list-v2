import { Search } from '@mui/icons-material';
import { Box, InputAdornment, TextField } from '@mui/material';
import { useState, useTransition } from 'react';
import Tasks from './Tasks';

const SearchForm = () => {
  //States
  const [searchValue, setSearchValue] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition();

  //function
  const handleSearchChange = (event) => {
    const value = event.target.value;

    startTransition(() => {
      setTimeout(() => {
        setSearchValue(value);
      }, 300); //
    });
  };

  return (
    <Box
      mt={19}
      display='flex'
      alignItems='center'
      width='100%'
      flexDirection='column'
    >
      <Box display='flex' width='48%' justifyContent='center'>
        <TextField
          onChange={handleSearchChange}
          fullWidth
          variant='outlined'
          id='outlined-select-currency'
          label='Search Task'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search />
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
      </Box>
      {<Tasks searchValue={searchValue} />}
    </Box>
  );
};

export default SearchForm;
