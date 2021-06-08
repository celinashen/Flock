import React from 'react';
import '../pages/App.css';
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
  name: {
    "fontFamily": "Poppins",
    "fontSize": 60,
    "color": "black",
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
          <Typography className={classes.debitTypography} align = "left" variant="h1" color="inherit" style={{fontWeight: 700}}>
            $100
            <br />
            debit
          </Typography>
  );
}

const Credit=()=> {
  const classes = UseStyles();
  return (
          <Typography className={classes.creditTypography} align = "left" variant="h1" color="inherit" style={{fontWeight: 700}}>
            $100
            <br />
            credit
          </Typography>
  );
}

const titleBar=()=> {
  const classes = UseStyles();
  return (
    <div>
      <Grid container spacing={0} alignItems="center" justify="flex">
        <Grid style = {{marginLeft: '15vw', marginTop: '10vh'}}>
            <Typography className={classes.name} align = "left" variant="h1" color="inherit" style={{fontWeight: 700}}>
              Hi Celina, 
            </Typography>
        </Grid>
        <Grid>
          <Grid>
            <Debit/>
          </Grid>
          <Grid>
            <Credit/>
          </Grid>
        </Grid>
      </Grid>  
    </div>
  );
}


export default titleBar;