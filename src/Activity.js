
import React from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const UseStyles = makeStyles((theme) => ({
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 80,
    "color": "#ADD7AD"
  },
  activityMenu:{
    color: "#979B82", 
    maxWidth: 100
  }
 
}));

const ActivityMenu=()=> {
  const classes = UseStyles();
  return (
      <Box className = {classes.activityMenu}>
          <Typography>
              hello
          </Typography>
      </Box>
  );
}



export default ActivityMenu;