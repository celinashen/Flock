import React from 'react';
import '../pages/App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase';

// const THEME = createMuiTheme({
//   typography: {
//     "fontFamily": "Poppins",
//     "fontSize": 10,
//   }
// });

const UseStyles = makeStyles((theme) => ({
  //Hi 'name'
  name: {
    fontFamily: "Poppins",
    fontSize: 60,
    color: "black",
    fontWeight: 700
  },
  //payables text
  payableTypography: {
    "fontFamily": "Poppins",
    "fontSize": 30,
    "color": "#309F5E"
  }, 
  //payable amount
  payableAmount: {
    fontSize: 60,
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "#309F5E"
  },
  //receivable text
  receivableTypography: {
    "fontFamily": "Poppins",
    "fontSize": 30,
    "color": "#000000"
  },
  //receivable amount
  receivableAmount:{
    fontSize: 60,
    fontFamily: "Poppins",
    fontWeight: 600,
    color: "black"
  }
}));

const Payable=(props)=> {
  const classes = UseStyles();
  return (
    <Typography className={classes.payableTypography} align = "center" variant="h1" color="inherit" style={{fontWeight: 700}}>
      <Typography className = {classes.payableAmount}>
        {props.amount}
      </Typography>
      payables
    </Typography>
  );
}

const Receivable=(props)=> {
  const classes = UseStyles();
  return (
    <Typography className={classes.receivableTypography} align = "center" variant="h1" color="inherit" style={{fontWeight: 700}}>
      <Typography className = {classes.receivableAmount}>
        {props.amount}
      </Typography>
      receivables
    </Typography>
  );
}

const titleBar=()=> {
  const classes = UseStyles();
  return (
    <div>
      <Grid container spacing={0} direction = "column" justify="flex">
        <Grid style = {{marginLeft: '300px', marginTop: '8vh'}}>
            <Typography className={classes.name} align = "left" color="inherit">
              Hi {firebase.auth().currentUser
              ? firebase.auth().currentUser.displayName.split(" ")[0] + ", ID is " + firebase.auth().currentUser.uid
              : null}, 
            </Typography>
        </Grid>
        <Grid container spacing={0} direction = "row" justify="flex" style = {{marginLeft: '300px', marginTop: '2vh'}}>
          <Grid>
            <Payable amount = "$200"/>
          </Grid>
          <Grid style = {{paddingLeft: '5vh'}}>
            <Receivable amount = "$200"/>
          </Grid>
        </Grid>
      </Grid>  
    </div>
  );
}


export default titleBar;