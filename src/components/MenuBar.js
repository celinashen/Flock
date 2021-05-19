import React from 'react';
import '../pages/App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

//import createMuiTheme from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  bar: {
    background: "#ADD7AD",
  },
  typography: {
    "fontFamily": "Poppins",
    "fontSize": 20,
    paddingRight: 35
  },
  homeButton:{
    "fontFamily": "Poppins",
    "fontSize": 20
  },
  navigation:{
    padding: '20px',
    display: 'flex',
   // flexDirection: 'row',
   // justifyContent: 'flex-end',
   // float: 'right'
  }, 
  linkStyle:{
    textDecoration: 'none', 
    color: 'white',
    '&:hover': {
      color: 'black',
    },
    '&:active':{
      textDecoration: 'underline'
    }
  }
}));


function HeaderBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar} style={{boxShadow: "none"}}>
        <Toolbar variant="dense">

          <Typography variant="h6" color="inherit" className={classes.homeButton}>
            F L O C K 
          </Typography>

          <div className = {classes.navigation}>

        <Link to='/' className = {classes.linkStyle}> 
          <Typography variant="h6" color="inherit" className={classes.typography}>
            your dashboard
          </Typography>
        </Link>

        <Link to = '/yourflocks' className = {classes.linkStyle}>
          <Typography variant="h6" color="inherit" className={classes.typography}>
            your flocks
          </Typography>
        </Link>

          <Link to = "/issue" className = {classes.linkStyle}>
            <Typography variant="h6" color="inherit" className={classes.typography}>
              issue debits
            </Typography>
          </Link>

          <Link to ='/pay' className = {classes.linkStyle}>
            <Typography variant="h6" color="inherit" className={classes.typography}>
              pay credits
            </Typography>
          </Link>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderBar;