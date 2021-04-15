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
    // paddingLeft: '20',
    // paddingRight: '20',
    // paddingTop: '20',
    // paddingBottom: '20',
   // padding: theme.spacing(2),
    minWidth: 330,

    marginLeft: 120,
    marginTop: 50
  },
  card:{
    //minWidth: 275,
    padding: theme.spacing(1.5),
    borderRadius: 10
  },
  bigCardsList:{
    flexDirection: "row"
  }
}));

const ListItem=()=> {
  const classes = useStyles();
  return (
    <Card className = {classes.card} display = "flex">
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
    <Grid direction = "column" justify = "center" alignItems="center" container spacing = {4} className = {classes.outstandingBoxContainer} item xs={3} >
      <Grid item xs={5} className = {classes.cardGrid}>
        <ListItem />
      </Grid>
      <Grid item xs={5} className = {classes.cardGrid}>
        <ListItem />
      </Grid>
      <Grid item xs={5} className = {classes.cardGrid}>
        <ListItem />
      </Grid>
    </Grid>
  );
}

const OutstandingBoxList=()=>{
  const classes = useStyles();
  return(
    <Box>
      <Grid container spacing={1} direction  = "row" alignItems="center" justify="flex-start">
        <Grid item xs = {3}>
          <OutstandingBox/>
        </Grid>
        <Grid item xs = {3}>
          <OutstandingBox/>
        </Grid>
        <Grid item xs = {3}>
          <OutstandingBox/>
        </Grid>
      </Grid>
    </Box>
    
  );
}

//TODO:
// Fix card responsiveness
// have props to change bgcolor of outstanding boxes 
// align containers in a row

export default OutstandingBoxList;