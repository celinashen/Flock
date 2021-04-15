import React from 'react';
import './App.css';
import HeaderBar from './MenuBar';
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// const THEME = createMuiTheme({
//   typography: {
//     "fontFamily": "Poppins",
//     "fontSize": 10,
//   }
// });

const UseStyles = makeStyles((theme) => ({
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 80,
    "color": "#ADD7AD"
  },
  numberInfoTypography: {
    "fontFamily": "Poppins",
    "fontSize": 30,
    "color": "#ADD7AD"
  }
}));

const Debit=()=> {
  const classes = UseStyles();
  return (
      <Box pl={15} pt={10}>
          <Typography className={classes.numberInfoTypography} align = "left" variant="h1" color="inherit" style={{fontWeight: 600}}>
            $100
            <br />
            debit
          </Typography>
      </Box>
  );
}

const titleBar=()=> {
  const Classes = UseStyles();
  return (
    <div>
      <Grid direction = "row">
        <Grid>
            <Box pl={15} pt={10}>
                <Typography className={Classes.typography} align = "left" variant="h1" color="inherit" style={{fontWeight: 600}}>
                  Hi Celina, your bills are
                </Typography>
            </Box>
        </Grid>
        <Grid>
          <Debit/>
        </Grid>
      </Grid>
        
    </div>
      
      
  );
}


export default titleBar;