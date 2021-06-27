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
  
  //menu words
  typography: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontStyle: 'normal',
    fontSize: '15px',
    textAlign: 'center',
    letterSpacing: '0.09em',
    alignItems: "center",
    paddingTop: '8%',

    '&:hover': {
      color: 'black',

      "& $menuIcon": {
        backgroundColor: 'black',
        color: 'rgba(118,158,118,1)',
        boxShadow: '4px 4px 20px 4px rgba(118,158,118,1)',
        cursor: 'pointer',
        borderColor: 'rgba(118,158,118,1)',
        outlineColor: 'rgba(118,158,118,1)',
      }

    },
    '&:active':{
      textDecoration: 'none'
    }
  },
  homeButton:{
    fontFamily: "Poppins",
    color: 'white',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '30px',
    paddingTop: '15%',
    textAlign: 'center',
    paddingBottom: '10%'
  },
  navigation:{
    padding: '20px',
    display: 'flex',
  }, 
  //Styles the default link text of menu items
  linkStyle:{
    textDecoration: 'none',
    color: 'white'
  },
  verticalMenu: {
    minHeight: '100%',
    minWidth: '20vh',
    position: 'absolute',
    backgroundColor: '#309F5E',
    borderBottomRightRadius: '15px',
    borderTopRightRadius: '15px',
    boxShadow: '4px 4px 20px 4px rgba(118,158,118,0.5)'
  },
  menuIcon: {
    backgroundColor: 'white',
    minWidth: '5vh',
    maxWidth: '5vh',
    minHeight: '5vh',
    borderRadius: '10px',
    boxShadow: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    transition: '0.3s all',
    '&:hover':{
      backgroundColor: 'black',
      color: 'rgba(118,158,118,1)',
      boxShadow: '4px 4px 20px 4px rgba(118,158,118,1)',
      cursor: 'pointer',
      borderColor: 'rgba(118,158,118,1)',
      outlineColor: 'rgba(118,158,118,1)',

      "& $linkStyle": {
        color: "black",
        textDecoration: 'underline'
      },

      "& $typography": {
        color: 'black'
      }
    }
  },
  menuIconNav:{
    marginTop: '10%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5%'
  },
  menuStyle: {
    direction: "column",
    alignItems:"center",
  }
}));

//set state: https://stackoverflow.com/questions/59457439/how-to-change-a-css-property-based-on-a-state-of-another-component


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

          <Grid className = {classes.menuStyle} containerSpacing = {0}>

            <Grid className = {classes.menuIconNav}> 
              <Link to='/home'> 
                <Card className = {classes.menuIcon}>
                  <IconDashboard 
                    size={25} // set custom `width` and `height`
                    color="#309F5E" // set `stroke` color
                    stroke={1.5}  // set `stroke-width`
                    strokeLinejoin="miter" // override other SVG props
                  />
                </Card>
              </Link>
              <Link to='/home' className = {classes.linkStyle}>
                <Typography color="inherit" className={classes.typography}>
                    dashboard
                </Typography>
              </Link>
            </Grid>      

            <Grid className = {classes.menuIconNav} containerSpacing = {0}>
              <Link to = '/yourflocks'>
                <Card className = {classes.menuIcon}>
                  <IconFeather 
                    size={25} // set custom `width` and `height`
                    color="#309F5E" // set `stroke` color
                    stroke={1.5}  // set `stroke-width`
                    strokeLinejoin="miter" // override other SVG props
                  />
                </Card>
              </Link>
              <Link to = '/yourflocks' className = {classes.linkStyle}>
                <Typography color="inherit" className={classes.typography}>
                  your flocks
                </Typography>
              </Link>
            </Grid>  

            <Grid className = {classes.menuIconNav}>
              <Link to = "/issue">
                <Card className = {classes.menuIcon}>
                  <IconCash
                    size={25} // set custom `width` and `height`
                    color="#309F5E" // set `stroke` color
                    stroke={1.5}  // set `stroke-width`
                    strokeLinejoin="miter" // override other SVG props
                  />
                </Card>
              </Link>
              <Link to = "/issue" className = {classes.linkStyle}>
                <Typography color="inherit" className={classes.typography}>
                  receivables
                </Typography>
              </Link>
            </Grid>  

            <Grid className = {classes.menuIconNav}>
              <Link to ='/pay'>
                <Card className = {classes.menuIcon}>
                  <IconBrandTelegram
                    size={25} // set custom `width` and `height`
                    color="#309F5E" // set `stroke` color
                    stroke={1.5}  // set `stroke-width`
                    strokeLinejoin="miter" // override other SVG props
                  />
                </Card>
              </Link>
              <Link to ='/pay' className = {classes.linkStyle}>
                <Typography color="inherit" className={classes.typography}>
                  payables
                </Typography>
              </Link>
            </Grid>  

          </Grid>
      </div>
    </div>
  );
}

export default HeaderBar;