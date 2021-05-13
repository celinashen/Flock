import React from 'react';
import '../pages/App.css';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from 'react-bootstrap/Image';


const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  typography: {
    "fontFamily": "Poppins",
    "fontSize": 30,
    "color": "#979B82",
    marginTop: '15px'
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
    alignContent: 'flex-start',
  },
  flockIconWidth: {
    minWidth: '110px'
  },
  divStyle:{
    width: '770px',
    maxHeight: '200px',
    overflowX: "auto",
    overflowY: "hidden",
    marginLeft: '115px',
    marginTop: '15px',
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'row',
    height: "100%",
    '&::-webkit-scrollbar': {
      marginTop: '20px',
      height: '0.3em',
      
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(224,224,224)',
      outline: '1px solid slategrey',
      borderRadius: '10px'
    },
  },
  flockIconTitle:{
    position: 'absolute', 
    top: '50', 
    left: '50',
    "color": "white",
    fontFamily: 'Poppins',
    display: 'block',
  },
  flockIconDiv:{
    display: 'inline-block',
    position: 'relative'
    // textAlign: 'center',
    // verticalAlign: 'top',
    // alignItems: 'center',
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    position: 'relative',
    backgroundColor: 'rgba(255,0,0,0.3)'
  },
  
}));

{/* <div position = 'absolute'>
        <Typography className={classes.flockIconTitle} style = {{fontWeight: 500}}>Title</Typography>  
      </div>
      <Avatar className={classes.large} alt="flock" src={props.flockPhoto} variant="circle"></Avatar> */}

      // <Image 
      //     className = {classes.large}
      //     src={props.flockPhoto}
      //     roundedCircle = 'true'
      //     fluid = 'true'>
      // </Image>


{/* <div>
        <img src={props.flockPhoto} width='200px' height='200px'></img>
      </div> */}

const FlockIcon=(props)=> {
  const classes = useStyles();
  return (
    <div className = {classes.flockIconDiv}>
      <div position = 'absolute'>
      </div>
      <Avatar className={classes.large} alt="flock" variant="circle"
        style = {{
          background: `url(${props.flockPhoto})`,
          boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)',
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat'
        }}>
          <Typography className={classes.flockIconTitle} style = {{fontWeight: 500}}>{props.flockTitle}</Typography>  
        </Avatar>
    </div>
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
      <Typography className={classes.typography} align = "left" variant="h1" color="inherit" style={{fontWeight: 600}}>
          flock's you're a part of
      </Typography>
    </Box>
  );
}


// put in pexel (or unsplash) link for flockPhoto + flock title as props
// use pexel API to create a place where user can create flocks
//must copy image address not link address
const FlockList=()=>{
  const classes = useStyles();
  return(
    <div> 
      <div>
        <FlockListTitle/>
      </div>

      <div className={classes.divStyle}>
          <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Spotify" flockPhoto = "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Rent" flockPhoto = "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Japan" flockPhoto = "https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg?cs=srgb&dl=pexels-vitalna-3800117.jpg&fm=jpg"/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Travel" flockPhoto = "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Netflix" flockPhoto = "https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Trip" flockPhoto = "https://images.pexels.com/photos/1777921/pexels-photo-1777921.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Phone Bill" flockPhoto = "https://images.pexels.com/photos/4348791/pexels-photo-4348791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Utilities" flockPhoto = "https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Grid>
          <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Groceries" flockPhoto = "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Grid>
      </div>
    </div>
  )
}

export default FlockList;
