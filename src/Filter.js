import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },}
}));

export default function Filter(props) {
    const {handleInput, handleSubmit, value} = props;
    console.log(props);
    

  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div className="containerFilter">
        <TextField
          id="standard-basic"s
          className={classes.textField}
          label="Find your spell"
          margin="normal"
          onChange={handleInput}
          value={value}
          
        />
        <div className={classes.root}>
    
    <Button variant="outlined" color="secondary" onClick={handleSubmit} value={value}>
      Search
    </Button>
  
  </div>
      </div>
    </form>
  );
}