import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop:"35px",
      width: '100ch',
    },
  },
}));


const SearchBar = (props) => {
  const classes = useStyles();

  const handleKeyPress = (e) => {
    props.handleKeyPress(e.target.value)
  }
  const handleEnter = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      props.handleEnter()
    }
  }
  return (
    <div align="center">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label={props.ph} variant="outlined"  onKeyUp={handleKeyPress} onKeyPress={handleEnter} />
      </form>
    </div>
    );
  }

export default SearchBar