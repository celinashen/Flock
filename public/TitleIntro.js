import React from 'react';
import './App.css';
import HeaderBar from './MenuBar';
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

// const THEME = createMuiTheme({
//   typography: {
//     "fontFamily": "Poppins",
//     "fontSize": 10,
//   }
// });

const useStyles = makeStyles((theme) => ({
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 80
  }
}));

const titleBar=()=> {
  const classes = useStyles();
  return (
      <Box pl={15} pt={10}>
          <Typography className={classes.typography} align = "left" variant="h1" color="inherit" style={{fontWeight: 600}}>
            Hi Celina, your bills are
          </Typography>
      </Box>
  );
}

export default titleBar;