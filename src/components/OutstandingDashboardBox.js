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
import { useState } from 'react';

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

//this is testing data
const payableData = [
    {
      amount: '$450',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
    {
      amount: '$450',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
    {
      amount: '$450',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
    {
      amount: '$450',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
]

const Carousel = ({slideTime}) => {
  const [current, setCurrent] = useState(0);

  return payableData.map((data, index) => {
    return (
      <Grid>
        <Payable personPaying = 'you' amount = {data.amount} personOwed = {data.personOwed} date = {data.date} flock = {data.flock}/>
      </Grid>
    );
  })

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
                
                <Carousel/>
            </Grid>
        </Card>
    
  );
}

{/* <Grid 
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

            </Grid> */}

export default OutstandingDashboardBox;