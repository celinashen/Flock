import { ThemeProvider } from '@material-ui/core/styles';
import { default as React } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import withFirebaseAuth from 'react-with-firebase-auth';
import FlockList from '../components/FlocksList';
import HeaderBar from '../components/MenuBar';
import OutstandingBoxList from '../components/OustandingBox';
import TitleIntro from '../components/TitleIntro';
import ActivityIcon from '../components/ActivityBar';
import './App.css';
import CreateFlock from './CreateFlock';
import { db, firebaseAppAuth, providers } from './firebaseConfig.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";

// const options = [
//   'flock1', 'scottsaho', 'celinasthebest:)'
// ];
// const defaultOption = options[0];

// <Dropdown options={options} onChange={options._onSelect} 
//               value={defaultOption} placeholder="Select an option" />;

const useStyles = makeStyles((theme) => ({
    titleTypography: {
        "fontFamily": "Poppins",
        "fontSize": 40,
        "color": "#769E76",
        alignItems: 'center',
        fontWeight: '300'
    },
    signIn:{
        backgroundColor: '#C9D4C4',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    },
    cardStyle:{
        backgroundColor: 'white',
        minHeight: '60px',
        minWidth: '100px',
        borderRadius: '20px'
    }
}));

var profileMatch = false;
var flockIDs = [];


const SignIn = ({ user, signOut, signInWithGoogle }) => {
  
  //Scan through database for user profileMatch, then load user-specific flocks.
  db.collection('user').get().then(querySnapshot =>{
    querySnapshot.forEach(doc => {
      if (doc.data()!=null && user!=null)
        if (doc.data().id == user.uid) {
          Object.assign(flockIDs, doc.data().flocks) //load flockIDs with the flock IDs
          profileMatch = true;
        }
    })
    if (profileMatch == false && user!=null) {
      const res = db.collection('user').add({
        name: user.displayName,
        flocks: [],
        id: user.uid,
      });
    }//end of if profileMatch
  })//end of firebase ref

  const classes = useStyles();
  return (
    <div>      
        
        <div className = {classes.signIn}>
            <Card className = {classes.cardStyle}>
                <header className = {classes.titleTypography}>
                {
                    user 
                    ? <p>Hello, {user.displayName}</p>
                    : <p>Please sign in.</p>
                }
                {
                    user
                    ? <button onClick={signOut}>Sign out</button>
                    : <button onClick={signInWithGoogle}>Sign in with Google</button>
                }
                </header>
            </Card>
        </div>
    </div>
    

  );
}


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(SignIn);

