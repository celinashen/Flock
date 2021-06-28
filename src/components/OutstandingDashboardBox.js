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
import {transactionPayableData, transactionReceivableData} from './DummyData'

const useStyles = makeStyles((theme) => ({

    //card
    card: {
        minWidth: '35vw',
        maxWidth: '35vw',
        marginLeft: '10vw',
        marginTop: '5vh',
        marginBottom: '2vh',
        paddingTop: '4vh',
        boxShadow: '0px 4px 20px 0px rgba(48,159,94,0.5)',
        borderRadius: '20px',
    },

    //card title
    favFlocksTitle: {
        marginLeft: '3vw',
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
      minHeight: '100%',
      minWidth: '9vw',
      maxWidth: '9vw',

      border: (props) => props.border,
    },
    
    amount: {
      fontWeight: 550, 
      fontFamily: "Poppins",
      fontSize: 35,

      color: (props) => props.amountColor,
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
      color: "white",
      fontFamily: "Poppins",
      fontSize: 15,
      boxShadow: 'none',

      border: (props) => props.flockoBorder,
      backgroundColor: (props) => props.backgroundColor,
    },

    styledDiv: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardsList: {
      marginBottom: '3vh'
    },
    leftArrow :{
      marginLeft: '5%',
      marginBottom: '3vh',
      '&:hover':{
        cursor: 'pointer',
      },
      color: (props) => props.amountColor,
    },
    rightArrow :{
      marginRight: '5%',
      marginBottom: '3vh',
      '&:hover':{
        cursor: 'pointer',
      },
      color: (props) => props.amountColor,
    }
}));

const Payable=(props)=> {
    const classes = useStyles();
    const { payable, flock, amount } = useStyles(props);
    return (
      <Card variant = "outlined" className = {payable}>
        <Grid className = {classes.cardContent}>
          <Grid>
            <Typography className = {classes.subtext}>
              {props.personPaying} owe
            </Typography>
          </Grid>
          <Grid>
            <Typography className = {amount}>
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
        <Card className = {flock}>
          {props.flock}
        </Card>
    </Card>
  );
}


const chunk = (arr, size) =>
  //length: 3
  //arr.slice(0, 3), arr.slice(1,6)
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

//TODO: stop carousel from scrolling when on the last page

const Carousel = ({transactionData, borderColor, backgroundColor, flockBorder, amountColor, arrowColor}) => {

  const classes = useStyles();

  const [current, setCurrent] = useState(0);
  

  let arr=chunk(transactionData, 3);
  const length = arr.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  
  console.log(transactionData.length);
  console.log(Math.ceil(arr.length / 3));
  

  return (
    <div className = {classes.styledDiv}>

      <FaChevronLeft
        className = {classes.leftArrow}
        onClick={prevSlide}
        color = {arrowColor}
      />

      
      {arr.map((item,index) => 
      item.length === 3 && index === current ?
        //First conditional (3 items)

        <Grid
        container direction="row"
        justify="center"
        alignItems="center"
        className = {classes.cardsList}>
          <Grid item lg = {4} item md = {4} item sm = {4} item xs = {4} container direction="row" justify="center" alignItems="center">    
            <Payable border = {borderColor} backgroundColor = {backgroundColor} flockBorder = {flockBorder} amountColor = {amountColor} personPaying = {item[0].personPaying} amount = {item[0].amount} personOwed = {item[0].personOwed} date = {item[0].date} flock = {item[0].flock}/>
          </Grid>
          <Grid item lg = {4} item md = {4} item sm = {4} item xs = {4} container direction="row" justify="center" alignItems="center">    
            <Payable border = {borderColor} backgroundColor = {backgroundColor} flockBorder = {flockBorder} amountColor = {amountColor} personPaying = {item[1].personPaying} amount = {item[1].amount} personOwed = {item[1].personOwed} date = {item[1].date} flock = {item[1].flock}/>
          </Grid>
          <Grid item lg = {4} item md = {4} item sm = {4} item xs = {4} container direction="row" justify="center" alignItems="center">     
            <Payable border = {borderColor} backgroundColor = {backgroundColor} flockBorder = {flockBorder} amountColor = {amountColor} personPaying = {item[2].personPaying} amount = {item[2].amount} personOwed = {item[2].personOwed} date = {item[2].date} flock = {item[2].flock}/>
          </Grid>
        </Grid>
        : 

          item.length === 2 && index === current ?
            <Grid
            container direction="row"
            justify="center"
            alignItems="center"
            className = {classes.cardsList}>
              <Grid item lg = {4} item md = {4} item sm = {4} item xs = {4} container direction="row" justify="center" alignItems="center">    
                <Payable border = {borderColor} backgroundColor = {backgroundColor} flockBorder = {flockBorder} amountColor = {amountColor} personPaying = {item[0].personPaying} amount = {item[0].amount} personOwed = {item[0].personOwed} date = {item[0].date} flock = {item[0].flock}/>
              </Grid>
              <Grid item lg = {4} item md = {4} item sm = {4} item xs = {4} container direction="row" justify="center" alignItems="center">    
                <Payable border = {borderColor} backgroundColor = {backgroundColor} flockBorder = {flockBorder} amountColor = {amountColor} personPaying = {item[1].personPaying} amount = {item[1].amount} personOwed = {item[1].personOwed} date = {item[1].date} flock = {item[1].flock}/>
              </Grid>
              <Grid item lg = {4} item md = {4} item sm = {4} item xs = {4} container direction="row" justify="center" alignItems="center"> 
               {/* empty component to algn components left */}
              </Grid>
            </Grid>
          :
            item.length === 1 && index === current ?
              <Grid
                container direction="row"
                justify="center"
                alignItems="center"
                className = {classes.cardsList}>
                  <Grid item lg = {4} item md = {4} item sm = {4} item xs = {4} container direction="row" justify="center" alignItems="center">    
                    <Payable border = {borderColor} backgroundColor = {backgroundColor} flockBorder = {flockBorder} amountColor = {amountColor} personPaying = {item[0].personPaying} amount = {item[0].amount} personOwed = {item[0].personOwed} date = {item[0].date} flock = {item[0].flock}/>
                  </Grid>
                  <Grid item lg = {4} item md = {4} item sm = {4} item xs = {4} container direction="row" justify="center" alignItems="center"> 
               {/* empty component to algn components left */}
              </Grid>
              <Grid item lg = {4} item md = {4} item sm = {4} item xs = {4} container direction="row" justify="center" alignItems="center"> 
               {/* empty component to algn components left */}
              </Grid>
                </Grid>
               :
               //THIS IS BAD CODE --> typography always shows up TODO: FIX THIS LATER
                <Typography></Typography>
        )
      }
      <FaChevronRight
        className = {classes.rightArrow}
        onClick={nextSlide}
        color = {arrowColor}
      />
    </div>
  );
}

const OutstandingDashboardBox=()=>{
  
  const classes = useStyles();

  return(
        
        <Card className = {classes.card}>
            <Typography className = {classes.favFlocksTitle}>outstanding payables</Typography>
              <Carousel borderColor = '2px solid #309F5E' backgroundColor = '#309F5E' flockBorder = '2px solid #309F5E' amountColor = '#309F5E' arrowColor = '#309F5E' transactionData = {transactionPayableData}/>
            <Typography className = {classes.favFlocksTitle}>outstanding receivables</Typography>
              <Carousel borderColor = '2px solid #000000' backgroundColor = '#000000' flockBorder = '2px solid #000000' amountColor = '#000000' arrowColor = '#000000' transactionData = {transactionReceivableData}/>
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