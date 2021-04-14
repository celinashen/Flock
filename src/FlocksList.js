import React from 'react';
import './App.css';
import HeaderBar from './MenuBar';
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 20
  },
  flockBox: {
    //padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const FlockIcon=()=> {
  const classes = useStyles();
  return (
      <Box>
        <Avatar alt="hello" src="./testimage.jpg" variant="circle" className={classes.large}></Avatar>
      </Box>
  );
}

//put into grid container
//put each icon into grid item
//can specify size

//padding in css
//htlm doesn't have props
const FlockList=()=>{
  const classes = useStyles();
  return(
    <div className={classes.flockBox}> 
      <Grid container spacing={3} direction  = "row" alignItems="center" justify="flex-start">
        <Grid item xs = {1.3}>
          <FlockIcon/>
        </Grid>
        <Grid item xs = {1.3}>
          <FlockIcon/>
        </Grid>
        <Grid item xs = {1.3}>
          <FlockIcon/>
        </Grid>
      </Grid>
    </div>
  )
}

export default FlockList;