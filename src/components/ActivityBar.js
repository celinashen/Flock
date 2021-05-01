
import React, {useState} from 'react';

import '../App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import { ActivityBarData } from './ActivityBarData';

import { Link } from 'react-router-dom';
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";


const UseStyles = makeStyles((theme) => ({
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 80,
    "color": "#ADD7AD"
  },
  //activity bar before prompt
  activityBar:{
    backgroundColor: "rgba(173, 215, 173,0.95)", 
    //maxWidth: 100,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    //right: '-100%',
    transition: '850ms',
    
  },
  //activity bar styling after prompted
  activityBarActive:{
    right: 0,
    transition: '350ms'
  },

  //each card style
  activityCardStyle:{
    backgroundColor: "",
    marginBottom: 16,
    paddingLeft: 20,
    paddingRight: 20, 
    maxWidth: 275
  },
  //transaction in activity card
  cardTransaction:{
    "fontFamily": "Poppins",
    "fontSize": 20,
    "color": "#ADD7AD",
    display: "flex"
  },
  //Date + Flock name in activity card
  cardDetails:{
    "fontFamily": "Poppins",
    "fontSize": 15,
    "color": "#ADD7AD",
  },
  cardTextInfo:{
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  cardTestTransaction:{

  },
  activityIcon:{
    
  },
  
 
}));

const ActivityIcon=()=> {
  const classes = UseStyles();
  
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div>
        <Grid justify="flex-end" alignItems="flex-end">
          <Link to="#" className = {classes.activityIcon}>
            <GiIcons.GiGoose onClick={showSidebar} 
              style={{
                  position: 'absolute',
                  right: 40,
                  bottom: 40,
              }}
            />
          </Link>
        </Grid>
      </div>
      <nav className = {sidebar ? classes.activityBarActive : classes.activityBar}>
        <ul className = 'nav-menu-items'>
          <li className = "navbar-toggle">
            <Link to = "#" className = 'menu-bars'>
              <AiIcons.AiFillCloseCircle/>
            </Link>
          </li>
          {ActivityBarData.map((item, index) => {
            return (
              
                <li key={index}>
                  <Card className = {classes.activityCardStyle}>
                    <span className = {classes.cardDetails}>{item.date}</span>
                    <br/>
                    <span className = {classes.cardDetails}>{item.flock}</span>
                    <br/>
                    <span className = {classes.cardTransaction}>{item.transaction}</span>
                  </Card>
                </li>
              
            )
          })}
        </ul>
      </nav>
    </>
  );
}



export default ActivityIcon;