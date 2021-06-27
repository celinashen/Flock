import React from 'react';
import '../pages/App.css';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from 'react-bootstrap/Image';
import { db } from '../pages/firebaseConfig';
import firebase from 'firebase';
import { useState, useEffect } from 'react';


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
    backgroundColor: 'rgba(255,0,0,0.3)',
    marginBottom: '6px'
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



function getFlockListWithImages() {
  var user = firebase.auth().currentUser; //ISSUE IS THAT THIS DOES NOT LOAD IMMEDIATELY SO IT RENDERS NOTHING
  //console.log(user)
  var flockIDs = [];
  var tempObject = {};

  //Scan through database for user profileMatch, then load user-specific flocks.
  db.collection('user').get().then(querySnapshot =>{
      querySnapshot.forEach(doc => {
          if (doc.data()!=null && user!=null)
              if (doc.data().id == user.uid) 
                  doc.data().flocks.forEach(doc2 => {
                      db.collection('flock-groups').get().then(querySnapshot2 => {
                          querySnapshot2.forEach(doc3 => {
                              if (doc2 == doc3.id) {
                                  tempObject = {id: doc2, name: doc3.data().flockName, image: "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"};
                                  flockIDs.push(tempObject);
                                  //console.log(tempObject);
                              }
                          })
                      })
                  });
      })
  })//end of firebase ref
  //console.log(flockIDs);
  return flockIDs;
}




// put in pexel (or unsplash) link for flockPhoto + flock title as props
// use pexel API to create a place where user can create flocks
//must copy image address not link address
const FlockList=()=>{
  const classes = useStyles();
  const [FlockArray, setFlockArray] = useState(getFlockListWithImages());
  var temp = getFlockListWithImages();

  useEffect(() => {
    setTimeout(() => {
      setFlockArray(temp);
    }, 500)
  }, [temp]);

  
  return(
    <div> 
      <div>
        <FlockListTitle/>
      </div>

      <div className={classes.divStyle}>
        {
        FlockArray.map(function(item, i){
            return <Grid className = {classes.flockIconWidth} key={i}><FlockIcon key={i} flockTitle = {item.name} flockPhoto = {"https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"}/></Grid>
          })
        }
      </div>
    </div>
  )
}


export default FlockList;
