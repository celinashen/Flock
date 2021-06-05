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
import { IconDashboard } from '@tabler/icons';
import Card from '@material-ui/core/Card';

//import createMuiTheme from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
  typography: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontStyle: 'normal',
    
    fontSize: '15px',
    lineHeight: '45px',
    textAlign: 'center',
    letterSpacing: '0.07em'
  },
  homeButton:{
    fontFamily: "Poppins",
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '30px',
    paddingTop: '15%',
    textAlign: 'center'
  },
  navigation:{
    padding: '20px',
    display: 'flex',
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
  },
  verticalMenu: {
    minHeight: '100%',
    minWidth: '20vh',
    position: 'absolute',
    backgroundColor: '#309F5E',
    borderBottomRightRadius: '15px',
    borderTopRightRadius: '15px',
  },
  menuIcon: {
    backgroundColor: 'white',
    width: '5vh',
    minHeight: '5vh',
    borderRadius: '10px',
    boxShadow: 'none'
  }
}));


function HeaderBar() {
  const classes = useStyles();
  
  const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  )
  
  return (
    <div className={classes.root}>
      <div className = {classes.verticalMenu}>
          <Typography className={classes.homeButton}>
            Flock 
            <Emoji symbol="🦆" className = {classes.loonTheDuck}/>
          </Typography>

          <Link to='/home' className = {classes.linkStyle}> 

            <Card className = {classes.menuIcon}>
              <IconDashboard 
                size={36} // set custom `width` and `height`
                color="#309F5E" // set `stroke` color
                stroke={3}  // set `stroke-width`
                strokeLinejoin="miter" // override other SVG props
              />
            </Card>

            <Typography color="inherit" className={classes.typography}>
              your dashboard
            </Typography>
          </Link>

          <Link to = '/yourflocks' className = {classes.linkStyle}>
            <Typography color="inherit" className={classes.typography}>
              your flocks
            </Typography>
          </Link>

          <Link to = "/issue" className = {classes.linkStyle}>
            <Typography color="inherit" className={classes.typography}>
              issue debits
            </Typography>
          </Link>

          <Link to ='/pay' className = {classes.linkStyle}>
            <Typography color="inherit" className={classes.typography}>
              pay credits
            </Typography>
          </Link>
      </div>
    </div>
  );
}

export default HeaderBar;