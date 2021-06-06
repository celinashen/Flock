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
import { IconFeather } from '@tabler/icons';
import { IconCash } from '@tabler/icons';
import { IconBrandTelegram } from '@tabler/icons';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

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
    textAlign: 'center',
    letterSpacing: '0.07em',
    alignItems: "center"
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
    maxWidth: '5vh',
    minWidht: '5vh',
    minHeight: '5vh',
    borderRadius: '10px',
    boxShadow: 'none',
    alignContent: 'center',
    justifyContent: 'center',
    display:'flex', 
  },
  menuIconNav:{
    marginTop: '10%',
    textAlign: 'center'
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

          <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            style={{ minHeight: '100vh', marginTop: '20%' }}
          >

            <Grid item xs = {6} alignItems="center" className = {classes.menuIconNav}> 
              <Link to='/home' className = {classes.linkStyle}> 
                <Card className = {classes.menuIcon}>
                  <IconDashboard 
                    size={36} // set custom `width` and `height`
                    color="#309F5E" // set `stroke` color
                    stroke={1.5}  // set `stroke-width`
                    strokeLinejoin="miter" // override other SVG props
                  />
                </Card>
                <Typography color="inherit" className={classes.typography}>
                    your dashboard
                </Typography>
              </Link>
            </Grid>      

            <Grid className = {classes.menuIconNav}>
              <Link to = '/yourflocks' className = {classes.linkStyle}>
                <Card className = {classes.menuIcon}>
                  <IconFeather 
                    size={36} // set custom `width` and `height`
                    color="#309F5E" // set `stroke` color
                    stroke={1.5}  // set `stroke-width`
                    strokeLinejoin="miter" // override other SVG props
                  />
                </Card>
                <Typography color="inherit" className={classes.typography}>
                  your flocks
                </Typography>
              </Link>
            </Grid>  

            <Grid item xs={3} className = {classes.menuIconNav}>
              <Link to = "/issue" className = {classes.linkStyle}>
                <Card className = {classes.menuIcon}>
                  <IconCash
                    size={36} // set custom `width` and `height`
                    color="#309F5E" // set `stroke` color
                    stroke={1.5}  // set `stroke-width`
                    strokeLinejoin="miter" // override other SVG props
                  />
                </Card>
                <Typography color="inherit" className={classes.typography}>
                  Receivables
                </Typography>
              </Link>
            </Grid>  

            <Grid item xs={3} className = {classes.menuIconNav}>
              <Link to ='/pay' className = {classes.linkStyle}>
                <Card className = {classes.menuIcon}>
                  <IconBrandTelegram
                    size={36} // set custom `width` and `height`
                    color="#309F5E" // set `stroke` color
                    stroke={1.5}  // set `stroke-width`
                    strokeLinejoin="miter" // override other SVG props
                  />
                </Card>
                <Typography color="inherit" className={classes.typography}>
                  Payables
                </Typography>
              </Link>
            </Grid>  

          </Grid>
      </div>
    </div>
  );
}

export default HeaderBar;