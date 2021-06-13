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


const useStyles = makeStyles({
    submit:{
        fontFamily: "Poppins",
        color: 'rgba(255, 255, 255, 1)',        
        height: '56px',
        borderRadius: '15px',
        backgroundColor: '#309F5E',
        border: 'rgba(118,158,118,1)',
        transition: '0.3s all',
        

        minWidth: (props)  => props.minWidth,
        maxWidth: (props)  => props.maxWidth,
        marginTop: (props) => props.marginTop,

        '&:hover':{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            color: '#309F5E',
            boxShadow: '0px 4px 20px 0px rgba(118,158,118,0.5)',
            cursor: 'pointer',
            borderColor: 'rgba(118,158,118,1)',
            outlineColor: 'rgba(118,158,118,1)',
        }
    },
});


const Submit=(props)=>{
  const classes = useStyles(props);
  return(
    
    <input type="submit" value={props.submitName} className = {classes.submit}/>
  );
}

export default Submit;