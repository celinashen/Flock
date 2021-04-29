import React from 'react';
import './App.css';
import HeaderBar from './MenuBar';
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
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 20,
    "color": "#979B82"
  },
  cardGrid:{
    minWidth:300
  },
  outstandingBoxContainer:{
    backgroundColor: "#769E76",
    borderRadius: "10px",
    // paddingLeft: '20',
    // paddingRight: '20',
    // paddingTop: '20',
    // paddingBottom: '20',
   // padding: theme.spacing(2),
    minWidth: 400,

    marginLeft: 120,
    marginTop: 50,
    marginBottom: 50,
  },
  card:{
    //minWidth: 275,
    //padding: theme.spacing(1.5),
    borderRadius: 10,
    minWidth: "134%"
  },
  bigCardsList:{
    flexDirection: "row"
  }
}));

const ListItem=()=> {
  const classes = useStyles();
  return (
    <Card className = {classes.card}>
      <Typography className = {classes.typography} style={{fontWeight: 500}}>
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
    <Box>
      <Grid direction = "column" justify = "center" alignItems="left" container spacing = {2} className = {classes.outstandingBoxContainer} item xs={3} >
        <Grid item xs={6} className = {classes.cardGrid}>
          <ListItem />
        </Grid>
        <Grid item xs={6} className = {classes.cardGrid}>
          <ListItem />
        </Grid>
        <Grid item xs={6} className = {classes.cardGrid}>
          <ListItem />
        </Grid>
      </Grid>
    </Box> 
  );
}

const OutstandingBoxList=()=>{
  const classes = useStyles();
  return(
      <Grid container spacing={0} direction  = "row" alignItems="center" justify="flex-start">
        <Grid item lg = {4} sm = {12} md = {6} xs = {12}>
          <OutstandingBox/>
        </Grid>
        <Grid item lg = {4} sm = {12} md = {6} xs = {12}>
          <OutstandingBox/>
        </Grid>
        <Grid item lg = {4} sm = {12} md = {6} xs = {12}>
          <OutstandingBox/>
        </Grid>
      </Grid>    
  );
}

//TODO:
// have props to change bgcolor of outstanding boxes 

export default OutstandingBoxList;