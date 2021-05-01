
import React from 'react';
import '../App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import * as FaIcons from "react-icons/fa";



const UseStyles = makeStyles((theme) => ({
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 80,
    "color": "#ADD7AD"
  },
  activityMenu:{
    backgroundColor: "rgba(173, 215, 173,0.95)", 
    maxWidth: 100,
  }
 
}));

const ActivityMenu=()=> {
  const classes = UseStyles();
  return (
      <div className = {classes.activityMenu}>
        
      </div>
  );
}



export default ActivityMenu;