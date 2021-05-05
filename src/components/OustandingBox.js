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
  typographyCard: {
    "fontFamily": "Poppins",
    "fontSize": 20,
    "color": "#979B82"
  },
  outstandingBoxContainer:{
    backgroundColor: "#769E76",
    borderRadius: "20px",
    minWidth: 430,
    maxHeight: 320,
    marginLeft: 120,
    marginBottom: 200,
    overflowY: 'scroll',
    overflowX: 'hidden',
    height: "100%",
    '&::-webkit-scrollbar': {
      width: '0.45em',
      height: '0.1em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      height: '6px',
      backgroundColor: 'rgba(0,0,0,.3)',
      outline: '1px solid slategrey',
      borderRadius: '10px'
    }
  },
  card:{
    borderRadius: 10,
    maxWidth: "200%"
  },
  minListWidth:{
    maxWidth: 1500,
    maxHeight: 500
  },
  typographyOutstandingTitle:{
    "fontFamily": "Poppins",
    "fontSize": 25,
    "color": "#979B82"
  },
}));

const ListItem=()=> {
  const classes = useStyles();
  return (
    <Card className = {classes.card} style={{boxShadow: "none"}}>
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
      <Box pt = {6} ml = {20}>
        <Typography className = {classes.typographyOutstandingTitle} style={{fontWeight: 500}}>
          outstanding debits
        </Typography>
      </Box>
      <Grid>
        <Grid direction = "column" justify = "center" alignItems = "center" className = {classes.outstandingBoxContainer} >
          <Box pl = {2.5} pr = {2.5} pt = {2.5}>
            <ListItem/>
          </Box>
          <Box pl = {2.5} pr = {2.5} pt = {2}>
            <ListItem/>
          </Box>
          <Box pl = {2.5} pr = {2.5} pt = {2}>
            <ListItem/>
          </Box>
          <Box pl = {2.5} pr = {2.5} pt = {2}>
            <ListItem/>
          </Box>
          <Box pl = {2.5} pr = {2.5} pt = {2}>
            <ListItem/>
          </Box>
          <Box pl = {2.5} pr = {2.5} pt = {2}>
            <ListItem/>
          </Box>
          <Box pl = {2.5} pr = {2.5} pt = {2} pb = {2}>
            <ListItem/>
          </Box>
        </Grid>
      </Grid>
    </div>
 
  );
}

const OutstandingBoxList=()=>{
  const classes = useStyles();
  return(
      <Grid container spacing={0} direction  = "row" className = {classes.minListWidth}>
        <Grid item lg = {4} md = {6} sm = {12} xs = {12}>
          <OutstandingBox/>
        </Grid>
        <Grid item lg = {4} md = {6} sm = {12} xs = {12}>
          <OutstandingBox/>
        </Grid>
        <Grid item lg = {4} md = {6} sm = {12} xs = {12}>
          <OutstandingBox/>
        </Grid>
      </Grid>    
  );
}

//TODO:
// have props to change bgcolor of outstanding boxes 

export default OutstandingBoxList;