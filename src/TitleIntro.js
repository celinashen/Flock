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
  debitTypography: {
    "fontFamily": "Poppins",
    "fontSize": 40,
    "color": "#ADD7AD"
  }, 
  creditTypography: {
    "fontFamily": "Poppins",
    "fontSize": 40,
    "color": "#000000"
  }
}));

const Debit=()=> {
  const classes = UseStyles();
  return (
      <Box pl={9} pt={10}>
          <Typography className={classes.debitTypography} align = "left" variant="h1" color="inherit" style={{fontWeight: 700}}>
            $100
            <br />
            debit
          </Typography>
      </Box>
  );
}

const Credit=()=> {
  const classes = UseStyles();
  return (
      <Box pl={15} pt={10}>
          <Typography className={classes.creditTypography} align = "left" variant="h1" color="inherit" style={{fontWeight: 700}}>
            $100
            <br />
            credit
          </Typography>
      </Box>
  );
}

const titleBar=()=> {
  const Classes = UseStyles();
  return (
    <div>
      <Grid container spacing={1} direction  = "row" alignItems="center" justify="flex-start">
        <Grid>
            <Box pl={15} pt={10} pr={15}>
                <Typography className={Classes.typography} align = "left" variant="h1" color="inherit" style={{fontWeight: 600}}>
                  Hi Celina, your bills are
                </Typography>
            </Box>
        </Grid>
        <Grid>
          <Debit/>
        </Grid>
        <Grid>
          <Credit/>
        </Grid>
      </Grid>
        
    </div>
      
      
  );
}


export default titleBar;