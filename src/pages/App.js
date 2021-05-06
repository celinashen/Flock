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


// const options = [
//   'flock1', 'scottsaho', 'celinasthebest:)'
// ];
// const defaultOption = options[0];

// <Dropdown options={options} onChange={options._onSelect} 
//               value={defaultOption} placeholder="Select an option" />;


var flockOptions = [];
var defaultOption = "Please select a flock.";
var profileMatch = false;

const App = ({ user, signOut, signInWithGoogle }) => {
  
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

  db.collection('flock-groups').get().then(querySnapshot => {//Translate from flock ID to flockName for dropdown
    for (var i=0; i < flockIDs.length; i++) {//To-do: add warning that you shouldn't have two flocks with the same name, otherwise code will die
      querySnapshot.forEach(doc => {
        if (doc.id == flockIDs[i] && loopCount == 0) {
          flockOptions.push(doc.data().flockName);
        }
      })
    }
    loopCount++
  })

  return (
    <ThemeProvider>
        <div className="App">
          <HeaderBar/>
          <TitleIntro/>
          <FlockList/>
          <OutstandingBoxList/>
          <Dropdown options={flockOptions} onChange={flockOptions._onSelect} 
          value={defaultOption} placeholder="Select an option" />
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
