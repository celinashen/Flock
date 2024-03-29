import React from 'react';
import '../pages/App.css';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from 'react-bootstrap/Image';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';


const useStyles = makeStyles((theme) => ({
    root: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    cardStyle:{
      maxWidth: '30vh', 
      position: 'relative',
    },
    media:{
      maxWidth: '30vh',
      maxHeight: '30vh',
      borderRadius: '17px',
    }, 
    textStyle:{
      position: 'relative',
      color: 'white',
      fontFamily: 'Poppins',
      fontWeight: '400px',
      fontSize: '30px',
      flex: '0 0 120px',
    },
    wrapper:{
      position: 'relative',
    },
    overlay:{
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '17px',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
      
    }
}));

const FlockCard=({flockImage, flockName})=> {
    const classes = useStyles();

    return (
      <div>
            <div className = {classes.wrapper}>
              <CardMedia 
                className = {classes.media}
                  component="img"
                  image={flockImage}
                  title="Flock"     
              />
              <div className={classes.overlay}>
                <Typography className = {classes.textStyle}>
                  {flockName}
                </Typography>
              </div>
            </div>
      </div>
    );
  }

export default FlockCard;