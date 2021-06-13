import React from 'react';
import '../pages/App.css';
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { palette } from '@material-ui/system';
import { CallMissedSharp, CheckBoxOutlineBlankSharp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  //typography for list item 
  typographyCard: {
    fontFamily: "Poppins",
    fontSize: 20,
    color: "#8D8D8D",
    fontWeight: 500,
    textAlign: 'left',
    paddingLeft: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //big container containing all list items
  outstandingBoxContainer:{
    minWidth:'430px',
    maxWidth: '25vw',
    maxHeight: '36vh',
    marginLeft: '300px',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '0.45em',
      height: '0.1em',
      scrollMarginTop: '10px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      scrollMarginTop: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
      height: '6px',
      backgroundColor: 'rgba(0,0,0,.3)',
      borderRadius: '10px',
      scrollMarginTop: '10px'
    },
  },
  //card with list item
  card:{
    borderRadius: 10,
    maxWidth: "23vw",
    minWidth: '400px',
    boxShadow: "none", 
    border: '2px solid #8D8D8D',
    marginBottom: '2vh',
    minHeight: '7vh',
    display: 'flex',
    aligntItems: 'center'
  },
  // minListWidth:{
  //   maxWidth: 1500,
  //   maxHeight: 500
  // },

  //transaction title
  transactionTitle:{
    "fontFamily": "Poppins",
    "fontSize": 25,
    "color": "#494949", 
    marginLeft: '300px',
    marginTop: '5vh',
    marginBottom: '1vh',
    textAlign: 'left',
    fontWeight: 600, 
    color: '#494949'
  },
  //typography for flock name and date of transaction
  transactionDetails:{
    fontFamily: 'Poppins',
    textAlign: 'right',
    fontSize: 15,
    color: '#8D8D8D'
  }
}));

const ListItem=(props)=> {
  const classes = useStyles();
  return (
    <Card className = {classes.card}>
      <Grid container spacing={0} display = "flex" direction = "row" justify="space-around" alignItems="center">
        <Grid>
          <Typography className = {classes.typographyCard}>
            {props.transaction}
          </Typography>
        </Grid>
        <Grid>
          <Typography className = {classes.transactionDetails}>
            {props.flock}
            <br></br>
            {props.date}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

const TransactionsBox=()=>{
  const classes = useStyles();
  return(

    <div>
      <Typography className = {classes.transactionTitle}>
        past transactions
      </Typography>
      <Grid className = {classes.outstandingBoxContainer}>
        <Grid className = {classes.listItemContainer}>
            <ListItem transaction = "You paid $230 to Angela" flock = "Rent" date = "05/03/2021"/>
        </Grid>
        <Grid className = {classes.listItemContainer}>
            <ListItem transaction = "You paid $230 to Angela" flock = "Rent" date = "05/03/2021"/>
        </Grid>
        <Grid className = {classes.listItemContainer}>
            <ListItem transaction = "You paid $230 to Angela" flock = "Rent" date = "05/03/2021"/>
        </Grid>
        <Grid className = {classes.listItemContainer}>
            <ListItem transaction = "You paid $230 to Angela" flock = "Rent" date = "05/03/2021"/>
        </Grid>
        <Grid className = {classes.listItemContainer}>
            <ListItem transaction = "You paid $230 to Angela" flock = "Rent" date = "05/03/2021"/>
        </Grid>
      </Grid>
    </div>
 
  );
}

// const OutstandingBoxList=()=>{
//   const classes = useStyles();
//   return(
//       <Grid container spacing={0} direction  = "row" className = {classes.minListWidth}>
//         <Grid item lg = {4} md = {6} sm = {12} xs = {12}>
//           <OutstandingBox title = "oustanding debits"/>
//         </Grid>
//         <Grid item lg = {4} md = {6} sm = {12} xs = {12}>
//           <OutstandingBox title = "oustanding credits"/>
//         </Grid>
//         <Grid item lg = {4} md = {6} sm = {12} xs = {12}>
//           <OutstandingBox title = "inbox"/>
//         </Grid>
//       </Grid>    
//   );
// }

//TODO:
// have props to change bgcolor of outstanding boxes 

export default TransactionsBox;