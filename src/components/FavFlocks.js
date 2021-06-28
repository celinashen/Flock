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

const useStyles = makeStyles((theme) => ({

    //Fav flocks card
    favFlocks: {
        minWidth: '35vw',
        maxWidth: '35vw',
        marginLeft: '10vw',
        marginTop: '5vh',
        boxShadow: '0px 4px 20px 0px rgba(48,159,94,0.5)',
        borderRadius: '20px'
    },

    //card title
    favFlocksTitle: {
        marginLeft: '3vw',
        marginTop: '4vh',
        marginBottom: '1vh',
        textAlign: 'left',

        fontWeight: 550, 
        fontFamily: "Poppins",
        fontSize: 25,
        color: "#575757", 
    },

    //flock icon title
    flockIconTitle:{
        position: 'absolute', 
        top: '50', 
        left: '50',
        color: "white",
        fontFamily: 'Poppins',
        display: 'block',
    },

    //flock icon
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        position: 'relative',
        backgroundColor: 'rgba(255,0,0,0.3)',
        marginBottom: '6px'
    },

    //flock icon list container
    iconListContainer:{
        
        maxHeight: '200px',
        // marginLeft: '115px',
        marginTop: '15px',
        marginBottom: '15px',
        paddingLeft: '8%',
        paddingRight: '8%',

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
    
    //create flock button
    createFlockBtn: {
        minWidth: '10vw',
        marginBottom: '4vh',
        marginLeft: '3vw',
        display: 'flex',

        backgroundColor: '#309F5E',
        color: 'white',
        fontFamily: 'Poppins',
        textTransform: 'lowercase',
        borderRadius: '20px',
        boxShadow: 'none',

        '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: '#309F5E',
            boxShadow: '0px 4px 20px 0px rgba(118,158,118,0.5)',
            cursor: 'pointer',
            borderColor: 'rgba(118,158,118,1)',
            outlineColor: 'rgba(118,158,118,1)',
        }
    }
    
    

}));

const FlockIcon=(props)=> {
    const classes = useStyles();
    return (
      <div>
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

const FavFlocks=()=>{
  const classes = useStyles();
  return(
        
        <Card className = {classes.favFlocks}>
            <Typography className = {classes.favFlocksTitle}>favorited flocks</Typography>
            <Grid 
                container direction="row"
                justify="space-around"
                alignItems="center"
                className={classes.iconListContainer}>
                    
                <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Spotify" flockPhoto = "https://images.pexels.com/photos/5077404/pexels-photo-5077404.jpeg?cs=srgb&dl=pexels-cottonbro-5077404.jpg&fm=jpg"/></Grid>
                <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Rent" flockPhoto = "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Grid>
                <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Japan" flockPhoto = "https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg?cs=srgb&dl=pexels-vitalna-3800117.jpg&fm=jpg"/></Grid>
                <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Travel" flockPhoto = "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Grid>
                <Grid className = {classes.flockIconWidth}><FlockIcon flockTitle = "Netflix" flockPhoto = "https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></Grid>
            </Grid>

            <Button variant="contained" className = {classes.createFlockBtn}>
                create flock
            </Button>
        </Card>
    
  );
}

export default FavFlocks;