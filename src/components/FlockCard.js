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
      borderRadius: '10px', 
      position: 'relative',
    },
    media:{
      maxWidth: '30vh',
      maxHeight: '30vh',
      borderRadius: '10px',
    }, 
    textStyle:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      color: 'white',
      fontFamily: 'Poppins',
      fontWeight: '400px',
      fontSize: '30px',
      
    }
}));

const FlockCard=(props)=> {
    const classes = useStyles();
    return (
      <div>
          <Card className = {classes.cardStyle} variant = "outlined">
            <CardMedia className = {classes.media}
                component="img"
                image={props.flockImage}
                title="Flock"     
            />
            

            <Typography className = {classes.textStyle}>
              {props.flockName}
            </Typography>

          </Card>
        
      </div>
    );
  }

export default FlockCard;