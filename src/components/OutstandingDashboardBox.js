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
import {
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

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
    },

    styledDiv: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    arrow :{
      color: '#309F5E',
      '&:hover':{
        cursor: 'pointer',
      }
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
const transactionPayableData = [
    {
      amount: '1',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
    {
      amount: '2',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
    {
      amount: '3',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
    {
      amount: '4',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
    {
      amount: '5',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
    {
      amount: '6',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
    {
      amount: '7',
      personOwed: 'Angela',
      date: "Mar 3, 2021",
      flock: "Rent"
    },
]

const Carousel = ({transactionData}) => {

  const classes = useStyles();

  const [current, setCurrent] = useState(0);
  const length = transactionData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className = {classes.styledDiv}>

      <FaChevronLeft
        className = {classes.arrow}
        onClick={prevSlide}
      />
      <Grid
      container direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.iconListContainer}>

        {transactionData.map((data, index) => {
          return (

              <Grid key = {index} item lg = {4} item md = {4} item sm = {4} item xs = {4}>
                {index === current && (
                  <Payable personPaying = 'you' amount = {data.amount} personOwed = {data.personOwed} date = {data.date} flock = {data.flock}/>
                )}
              </Grid>


          );
        })}

      </Grid>
      <FaChevronRight
        className = {classes.arrow}
        onClick={nextSlide}
      />
    </div>
  );
}

const OutstandingDashboardBox=()=>{
  
  const classes = useStyles();

  return(
        
        <Card className = {classes.card}>
            <Typography className = {classes.favFlocksTitle}>outstanding payables</Typography>
            
                <Carousel transactionData = {transactionPayableData}/>

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