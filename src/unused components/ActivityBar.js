
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import { Link } from 'react-router-dom';
import '../pages/App.css';
import { ActivityBarData } from './ActivityBarData';





const UseStyles = makeStyles((theme) => ({
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 80,
    "color": "#ADD7AD"
  },
  //activity bar before prompt
  activityBar:{
    
    //maxWidth: 100,
    height: '100vh',
    display: 'inline',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: '-100%',
    transition: '850ms',
    transform: 'translateX(150%)',
    transition: 'transform 300ms linear',
    
  },
  //activity bar styling after prompted
  activityBarActive:{
    //right: '-100%',
    position: 'absolute',
    display: 'block',
    top: 0,
    right: 0,
    height: '100%',
    width: '20%',
    backgroundColor: "rgba(173, 215, 173,0.8)", 
    transition: '800ms',
    overflowX: 'hidden',
    maxHeight: '100vh',
    overFlowY: 'scroll',
    // transition: 'transform 350ms linear',
    // transform: 'translateX(0%)',
    // transition: 'transform 350ms linear'
  },

  //each card style
  activityCardStyle:{
    marginBottom: 16,
    marginRight: 30,
//    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20, 
    paddingTop: 5,
    paddingBottom: 5,
    maxWidth: 275,
    borderRadius: 15
  },

  //transaction in activity card
  cardTransaction:{
    "fontFamily": "Poppins",
    "fontSize": 20,
    "color": "#769E76",
    //display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
  },
  //Date + Flock name in activity card
  cardDetails:{
    "fontFamily": "Poppins",
    "fontSize": 15,
    "color": "#769E76",
    //display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  listStyle:{
    listStyle: 'none',
  },
  activityBarToggle:{
    width:'100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center'
  }, 
  activityBarOverflow:{

  }
  
 
}));

const ActivityIcon=()=> {
  const classes = UseStyles();
  
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div>
        <Grid justify="flex-end" alignItems="flex-end">
          <Link to="#">
            <GiIcons.GiGoose onClick={showSidebar} 
              color = {'#979B82'}
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
        <ul>
          <li className = {classes.activityBarToggle}>
            <Link to = "#" className = 'menu-bars'>
              <AiIcons.AiFillCloseCircle color = {'white'} onClick={showSidebar}/>
            </Link>
          </li>
          {ActivityBarData.map((item, index) => {
            return (
                <li key={index} className = {classes.listStyle}>
                  <Card className = {classes.activityCardStyle} style={{boxShadow: "none"}}>
                    <span className = {classes.cardDetails} style={{fontWeight: 500}}>{item.date}</span>
                    <br/>
                    <span className = {classes.cardDetails} style={{fontWeight: 500}}>{item.flock}</span>
                    <br/>
                    <span className = {classes.cardTransaction} style={{fontWeight: 600}}>{item.transaction}</span>
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