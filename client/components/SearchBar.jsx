import React from 'react';
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
    margin: 'auto',
    '& label': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'mediumseagreen',
      },
      '&:hover fieldset': {
        borderColor: 'mediumseagreen',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'mediumseagreen',
      },
    },
  },
  margin: {
    margin: 'auto',
  },
  input: {
    color: 'white',
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function SearchBar(props) {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        props.searchCompany();
      }}
    >
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          autoComplete='off'
          fullWidth
          label='Search a Company...'
          placeholder='AMZN'
          variant='outlined'
          id='mui-theme-provider-outlined-input'
          InputProps={{ className: classes.input }}
          onChange={(e) => {
            props.handleSearchChange(e.target.value);
          }}
        />
      </ThemeProvider>
    </form>
  );
}
