import React from 'react';
import './App.css';
import HeaderBar from './MenuBar';
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 20
  }
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
const FlockList=()=>{
  return(
    <Box pl={15} pt={10} display="inline">
        <FlockIcon/>
        <FlockIcon/>
        <FlockIcon/>
        <FlockIcon/>
    </Box>
  )
}

export default FlockList;