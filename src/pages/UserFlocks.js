import React from 'react';
import '../pages/App.css';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from 'react-bootstrap/Image';
import FlockCard from '../components/FlockCard';
import Modal from '../components/Modal';
import { useState } from 'react';

import CreateFlock from '../components/CreateFlock.js';
import AddUser from '../components/AddUser.js';

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
  boxStyle:{
    cursor: 'pointer'
  }
}));

//put into grid container
//put each icon into grid item
//can specify size

//padding in css
//htlm doesn't have props

const FlockListTitle=()=> {
  const classes = useStyles();
  return (
    <Box pl={15} pt={5} pb = {6}>  
      <Typography className={classes.typography} align = "left" variant="h1" color="inherit" style={{fontWeight: 600}}>
          your flocks
      </Typography>
    </Box>
  );
}


// put in pexel (or unsplash) link for flockPhoto + flock title as props
// use pexel API to create a place where user can create flocks
//must copy image address not link address


const UserFlocks=()=>{

  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState("")

  const openModal = () => {
    setShowModal(prev => !prev);
    setModalTitle("Spotify");
  };

  //for the setModalTitle, replace "Netflix" with a variable
  //TODO: scott will create variable to store flock name from db (for flockName prop) --> i will take this variable to use in set modal title
  //TODO: will need to map flock title variables for each flock card

  

  const classes = useStyles();
  return(
    <div> 
      <div>
        <FlockListTitle/>

        <Grid direction = "row" container spacing={0} justify = "space-around" alignItems = "center" className = {classes.outstandingBoxContainer} >
          <Box onClick = {openModal} className = {classes.boxStyle}>
            <FlockCard flockName = "Spotify" flockImage = "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"/>
          </Box>
          <Box onClick = {openModal} className = {classes.boxStyle}>
            <FlockCard flockName = "Spotify" flockImage = "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"/>
          </Box>
          <Box onClick = {openModal} className = {classes.boxStyle}>
            <FlockCard flockName = "Spotify" flockImage = "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"/>
          </Box>
          <Box onClick = {openModal} className = {classes.boxStyle}>
            <FlockCard flockName = "Spotify" flockImage = "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"/>
          </Box>
        </Grid>
        <Modal showModal={showModal} setShowModal = {setShowModal} modalTitle = {modalTitle} />
      </div>
      <CreateFlock/>
      <AddUser/>
    </div>
  )
}

export default UserFlocks;
