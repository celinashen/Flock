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
    "fontFamily": "Poppins",
    "fontSize": 20,
    "color": "#8D8D8D"
  },
  //big container containing all list items
  outstandingBoxContainer:{
    minWidth: 430,
    maxHeight: 320,
    marginLeft: '300px',
    marginBottom: 200,
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: "100%",
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
      outline: '1px solid slategrey',
      borderRadius: '10px',
      scrollMarginTop: '10px'
    },
  },
  //card with list item
  card:{
    borderRadius: 10,
    maxWidth: "20vh",
    boxShadow: "none", 
    border: '2px solid #8D8D8D',
    marginBottom: '2vh',
    minWidth: '25vw',
  },
  // minListWidth:{
  //   maxWidth: 1500,
  //   maxHeight: 500
  // },
  //transaction title
  transactionTitle:{
    "fontFamily": "Poppins",
    "fontSize": 25,
    "color": "#979B82", 
    marginLeft: '300px',
    marginTop: '5vh',
    marginBottom: '1vh',
    textAlign: 'left',
    fontWeight: 600, 
    colot: '#494949'
  },
  listItemContainer: {

  }
}));

const ListItem=(props)=> {
  const classes = useStyles();
  return (
    <Card className = {classes.card}>
      <Typography className = {classes.typographyCard} style={{fontWeight: 500}}>
        Flock: Japan
        <br />
        $20 from Jess
      </Typography>
    </Card>
  );
}

const OutstandingBox=()=>{
  const classes = useStyles();
  return(

    <div>
      <Typography className = {classes.transactionTitle}>
        past transactions
      </Typography>
      <Grid direction = "column" justify = "center" alignItems = "center" className = {classes.outstandingBoxContainer}>
        <Grid className = {classes.listItemContainer}>
            <ListItem/>
        </Grid>
        <Grid>
            <ListItem/>
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

export default OutstandingBox;