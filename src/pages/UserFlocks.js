import React from 'react';
import '../pages/App.css';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from 'react-bootstrap/Image';
import FlockCard from '../components/FlockCard'


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
const UserFlocks=()=>{
  const classes = useStyles();
  return(
    <div> 
      <div>
        <FlockListTitle/>

        <Grid direction = "row" container spacing={0} justify = "left" alignItems = "center" className = {classes.outstandingBoxContainer} >
          <Box pl = {13} pr = {2.5} pt = {5}>
            <FlockCard flockName = "Spotify" flockImage = "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"/>
          </Box>
          <Box pl = {13} pr = {2.5} pt = {5}>
            <FlockCard flockName = "Spotify" flockImage = "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"/>
          </Box>
          <Box pl = {13} pr = {2.5} pt = {5}>
            <FlockCard flockName = "Spotify" flockImage = "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"/>
          </Box>
          <Box pl = {13} pr = {2.5} pt = {5}>
            <FlockCard flockName = "Spotify" flockImage = "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"/>
          </Box>
        </Grid>
      </div>
    </div>
  )
}

export default UserFlocks;
