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

import Dropdowns from '../components/Dropdowns';
import { db, firebaseAppAuth, providers } from './firebaseConfig';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



var flockOptions = [];
var defaultOption = "Please select a flock.";
var profileMatch = false;
var flockIDs = [];
var loopCount;

const App = ({ user, signOut, signInWithGoogle }) => {
  
  //Scan through database for user profileMatch, then load user-specific flocks.
  db.collection('user').get().then(querySnapshot =>{
    querySnapshot.forEach(doc => {
      if (user!=null)
        if (doc.data().id == user.uid) {
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



  return (
    <ThemeProvider>
        <div className="App">
          <HeaderBar/>
          <Dropdowns/>

          <TitleIntro/>
          <FlockList/>
          <OutstandingBoxList/>
          <Router>
            <ActivityIcon/>
            <Switch>
              <Route path = '/' />
            </Switch>
          </Router>
          <CreateFlock/>
        </div>
        <div className="App">
          <header className="App-header">
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
        </div>

    </ThemeProvider>
  );
}


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
