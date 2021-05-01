
import React, {useState} from 'react';

import '../App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";



const UseStyles = makeStyles((theme) => ({
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 80,
    "color": "#ADD7AD"
  },
  activityBar:{
    //backgroundColor: "rgba(173, 215, 173,0.95)", 
    //maxWidth: 100,
  }
 
}));

const ActivityIcon=()=> {
  const classes = UseStyles();
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className = {classes.activityBar}>
        <Grid justify="flex-end" alignItems="flex-end">
          <Link to="#" className = 'menu-bars'>
            <GiIcons.GiGoose onClick={showSidebar} 
              style={{
                  position: 'absolute',
                  right: 40,
                  bottom: 40
              }}
            />
          </Link>
        </Grid>
      </div>
      <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className = 'nav-menu-items'>
          <li className = "navbar-toggle">
            <Link to = "#" className = 'menu-bars'>
              <AiIcons.AiFillCloseCircle/>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}



export default ActivityIcon;