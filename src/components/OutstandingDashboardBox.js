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
import Submit from './Submit';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    //card
    card: {
        minWidth: '35vw',
        maxWidth: '35vw',
        marginLeft: '10vw',
        marginTop: '5vh',
        boxShadow: '0px 4px 20px 0px rgba(48,159,94,0.5)',
        borderRadius: '20px'
    },

    //card title
    favFlocksTitle: {
        marginLeft: '3vw',
        marginTop: '4vh',
        marginBottom: '1vh',
        textAlign: 'left',

        fontWeight: 550, 
        fontFamily: "Poppins",
        fontSize: 25,
        color: "#575757", 
    },

    //flock icon title
    flockIconTitle:{
        position: 'absolute', 
        top: '50', 
        left: '50',
        color: "white",
        fontFamily: 'Poppins',
        display: 'block',
    },

    //flock icon
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        position: 'relative',
        backgroundColor: 'rgba(255,0,0,0.3)',
        marginBottom: '6px'
    },

    //flock icon list container
    iconListContainer:{
        
        maxHeight: '200px',
        // marginLeft: '115px',
        marginTop: '15px',
        marginBottom: '15px',
        paddingLeft: '8%',
        paddingRight: '8%',

        height: "100%",
        '&::-webkit-scrollbar': {
          height: '0.4em',
        },
        '&::-webkit-scrollbar-track': {
          marginTop: '30px',
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(224,224,224)',
          borderRadius: '10px'
        },
    },
    
    //create flock button
    createFlockBtn: {
        minWidth: '10vw',
        marginBottom: '4vh',
        marginLeft: '3vw',
        display: 'flex',

        backgroundColor: '#309F5E',
        color: 'white',
        fontFamily: 'Poppins',
        textTransform: 'lowercase',
        borderRadius: '20px',
        boxShadow: 'none',

        '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: '#309F5E',
            boxShadow: '0px 4px 20px 0px rgba(118,158,118,0.5)',
            cursor: 'pointer',
            borderColor: 'rgba(118,158,118,1)',
            outlineColor: 'rgba(118,158,118,1)',
        }
    },

    payable: {
      borderRadius: 10,
      boxShadow: "none", 
      border: '2px solid #309F5E',
    },
    
    amount: {
      fontWeight: 550, 
      fontFamily: "Poppins",
      fontSize: 35,
      color: "#309F5E", 
    },
    subtext: {
      color: "#707070",
      fontFamily: "Poppins",
      fontSize: 16,
    }, 
    date: {
      color: "#707070",
      fontFamily: "Poppins",
      fontSize: 13,
    },
    cardContent: {
      marginTop: '13px',
      marginBottom: '13px',
      marginLeft: '13px',
      marginRight: '13px'
    },
    flock: {
      backgroundColor:"#309F5E",
      color: "white",
      fontFamily: "Poppins",
      fontSize: 15,
      boxShadow: 'none',
      border: '2px solid #309F5E',
    }
}));

const Payable=(props)=> {
    const classes = useStyles();
    return (
      <Card variant = "outlined" className = {classes.payable}>
        <Grid className = {classes.cardContent}>
          <Grid>
            <Typography className = {classes.subtext}>
              {props.personPaying} owe
            </Typography>
          </Grid>
          <Grid>
            <Typography className = {classes.amount}>
              {props.amount}
            </Typography>
          </Grid>
          <Grid>
            <Typography className = {classes.subtext}>
              to {props.personOwed}
            </Typography>
          </Grid>
          <Grid>
            <Typography className = {classes.date}>
              Due: {props.date}
            </Typography>
          </Grid>
        </Grid>
        <Card className = {classes.flock}>
          {props.flock}
        </Card>
      </Card>
    );
  }

const OutstandingDashboardBox=()=>{
  const classes = useStyles();
  return(
        
        <Card className = {classes.card}>
            <Typography className = {classes.favFlocksTitle}>outstanding payables</Typography>
            <Grid 
                container direction="row"
                justify="space-around"
                alignItems="center"
                className={classes.iconListContainer}>
                
                <Grid>
                  <Payable personPaying = 'you' amount = '$450' personOwed = 'Angela' date = "Mar 3, 2021" flock = "Rent"/>
                </Grid>
                <Grid>
                  <Payable personPaying = 'you' amount = '$450' personOwed = 'Angela' date = "Mar 3, 2021" flock = "Rent"/>
                </Grid>
                <Grid>
                  <Payable personPaying = 'you' amount = '$450' personOwed = 'Angela' date = "Mar 3, 2021" flock = "Rent"/>
                </Grid>

            </Grid>
        </Card>
    
  );
}

export default OutstandingDashboardBox;