import React from 'react';
import '../pages/App.css';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from 'react-bootstrap/Image';
import FlockCard from '../components/FlockCard'
import { db } from './firebaseConfig';
import firebase from 'firebase';
import CreateFlock from './CreateFlock';
import Dropdown from 'react-dropdown';
import { useState } from 'react';
import { useEffect } from 'react';



function getFlockListWithImages() {
    var user = firebase.auth().currentUser;
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
                                    console.log(tempObject.name);
                                    //console.log(tempObject);
                                }
                            })
                        })
                    });
        })
    })//end of firebase ref
    //console.log(flockIDs);
    console.log(flockIDs);
    return flockIDs;
}


function getFlockListDropdown() {
  var user = firebase.auth().currentUser;
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
                                  tempObject = {value: doc2, label: doc3.data().flockName};
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
}));

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
          your flocks
      </Typography>
    </Box>
  );
}


// put in pexel (or unsplash) link for flockPhoto + flock title as props
// use pexel API to create a place where user can create flocks
//must copy image address not link address
const UserFlocks=(props)=>{
  const classes = useStyles();

  //var objects = [{name: "Spotify", image: "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"},
  //{name: "Rent", image: "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"}, 
  //{name: "Road Trip", image: "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"}];

  //firebase format data 

  const [objects, setObjects] = useState(getFlockListWithImages());

  useEffect(() => {
    setTimeout(function(){ setObjects(getFlockListWithImages()) }, 1000);
  },[]);


  return(
    <div> 
      <div>

        <CreateFlock/>
        <Dropdown 
          options={getFlockListDropdown()} 
          onChange={getFlockListDropdown()._onSelect} 
          value={"Please select a flock."} 
          placeholder="Select an option" />




        <FlockListTitle/>

        <Grid direction = "row" container spacing={0} justify = "left" alignItems = "center" className = {classes.outstandingBoxContainer} >
          {objects.map(function(object){
                return (<Box pl = {13} pr = {2.5} pt = {5}>
                  <FlockCard flockName={object.name} flockImage={object.image} />
                  </Box>);
          })}
        </Grid>
      </div>
    </div>
  )
}

export default UserFlocks;
