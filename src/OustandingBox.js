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
import { CallMissedSharp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 20,
    "color": "#979B82"
  },
  boxColor:{
    "background-color": "#769E76"
  },
  card:{
    minWidth: 275,
    padding: theme.spacing(2),
    borderRadius: 10
  }
}));

const ListItem=()=> {
  const classes = useStyles();
  return (

    <React.Fragment>
        <Grid item xs={4}>
          <Card className = {classes.card}>
            <Typography className = {classes.typography} style={{fontWeight: 500}}>
              Flock: Japan
            </Typography>
            <Typography className = {classes.typography} style={{fontWeight: 500}}>
              $20 from Jess
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className = {classes.card}>
            <Typography className = {classes.typography} style={{fontWeight: 500}}>
              Flock: Japan
            </Typography>
            <Typography className = {classes.typography} style={{fontWeight: 500}}>
              $20 from Jess
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className = {classes.card}>
            <Typography className = {classes.typography} style={{fontWeight: 500}}>
              Flock: Japan
            </Typography>
            <Typography className = {classes.typography} style={{fontWeight: 500}}>
              $20 from Jess
            </Typography>
          </Card>
        </Grid>
    </React.Fragment>

      
  );
}

const OutstandingBox=()=>{
  const classes = useStyles();
  return(
    <div> 
      <Box ml={14} mt={8}> 
        <Grid direction  = "row" alignItems="center" justify="flex-start">
          <Grid container item xs={3} spacing={3} className = {classes.boxColor} direction = "column">
            <ListItem />
          </Grid>
        </Grid>
      </Box>
      
    </div>
  )
}

export default OutstandingBox;