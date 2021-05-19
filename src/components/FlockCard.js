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
      borderRadius: '10px'
    },
    media:{
      maxWidth: '30vh',
      maxHeight: '30vh',
      borderRadius: '10px'
    }
}));

const FlockCard=(props)=> {
    const classes = useStyles();
    return (
      <div>
          <Card className = {classes.cardStyle} variant = "outlined">
            <CardMedia className = {classes.media}
                component="img"
                className={classes.media}
                image={props.flockImage}
                title="Flock"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.flockName}
                </Typography>
            </CardContent>
          </Card>
        
      </div>
    );
  }

export default FlockCard;