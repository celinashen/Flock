import React from 'react';
import './App.css';
import HeaderBar from './MenuBar';
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TitleIntro from './TitleIntro';
import FlockList from './FlocksList';
import OutstandingBoxList from './OustandingBox';
import OutstandingBox from './OustandingBox';
import Grid from '@material-ui/core/Grid';
import ActivityMenu from './Activity';
import CreateFlock from './CreateFlock';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import {db, firebaseAppAuth, providers} from './firebaseConfig.js';
import withFirebaseAuth from 'react-with-firebase-auth'




var flockOptions = [];
var defaultOption = "Please select a flock.";
var profileMatch = false;

const App = ({ user, signOut, signInWithGoogle }) => {
  
  //Scan through database for user profileMatch, then load user-specific flocks.
  db.collection('user').get().then(querySnapshot =>{
    querySnapshot.forEach(doc => {
      if (doc.data()!=null && user!=null)
        if (doc.data().id == user.uid) {
          Object.assign(flockOptions, doc.data().flocks)
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
          <TitleIntro/>
          <FlockList/>
          <OutstandingBoxList/>
          <Dropdown options={flockOptions} onChange={flockOptions._onSelect} 
          value={defaultOption} placeholder="Select an option" />
          <ActivityMenu/>
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





/* 
=============================== TO-DO LIST ===============================
- display current UID
- add users to flocks
- display users in dropdown



==== ENTER PAYABLE ====
*Enter amount*
*Click Enter*

create new transaction
  From: add currentUserID
  LocalFlock: select Flock group (make dropdown)
  To: select name out of members (make dropdown), then take their ID by scanning through the user document and seeing which users are a part of this specific localFlock
  Amount: userInput
  //process to and from payments when loading everything on the page



==== ENTER RECEIVABLE ====
*Enter amount*
*Click Enter*

create new transaction
  To: add currentUserID
  LocalFlock: select Flock group (make dropdown)
  From: select name out of members (make dropdown), then take their ID by scanning through the user document and seeing which users are a part of this specific localFlock
  Amount: userInput
  //process to and from payments when loading everything on the page

*/