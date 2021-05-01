import React from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 40,
    "color": "#979B82"
  },
  flockBox: {
    //padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },

  customWidth: {
    overflowX: "scroll",
    overFlowY: "hidden",
    width: '800px',
    maxHeight: '115px',
    alignContent: 'flex-start',
    marginLeft: '115px',
    marginTop: '30px'
  },
  gridWidth: {
  //  width: '700px',
 //   maxHeight: '115px',
    alignContent: 'flex-start',
    // marginLeft: '115px',
    // marginTop: '30px'
  },
  flockIconWidth: {
    minWidth: '110px'
  },
  divStyle:{
    width: '770px',
    maxHeight: '115px',
    overflowX: "auto",
    overflowY: "hidden",
    marginLeft: '115px',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'row'
  }
  
}));

const FlockIcon=()=> {
  const classes = useStyles();
  return (
    <Box>
      <Avatar alt="hello" src="./images/surprisepika.jpg" variant="circle" className={classes.large}>hello</Avatar>
    </Box>
  );
}

//put into grid container
//put each icon into grid item
//can specify size

//padding in css
//htlm doesn't have props

const FlockListTitle=()=> {
  const classes = useStyles();
  return (
    <Box pl={15} pt={5}>  
      <Typography className={classes.typography} align = "left" variant="h1" color="inherit" style={{fontWeight: 500}}>
          flock's you're a part of
      </Typography>
    </Box>
  );
}

const FlockList=()=>{
  const classes = useStyles();
  return(
    <div> 
      <div>
        <FlockListTitle/>
      </div>

      <div className={classes.divStyle}>
          <Grid className = {classes.flockIconWidth}><FlockIcon/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon/></Grid>
      </div>
    </div>
  )
}

export default FlockList;
