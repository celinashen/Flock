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
var flockIDs = [];
var defaultOption = "Please select a flock.";
var profileMatch = false;
var loopCount = 0;

var memberOptions = [];



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

  function nextDropdown(id){
    //scan database and return list of flock members
    db.collection('flock-groups').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.id == id)
          Object.assign(memberOptions,doc.data().members);
      })
    })
  }




  return (
    <ThemeProvider>
        <div className="App">
          <HeaderBar/>
          <TitleIntro/>
          <FlockList/>
          <OutstandingBoxList/>
          <Dropdown options={flockOptions} onChange={flockOptions._onSelect} onClick={()=> console.log(flockOptions._onSelect)/*nextDropdown(flockOptions._onSelect)*/}
          value={defaultOption} placeholder="Select an option" />
          <ActivityMenu/>
          <Dropdown options={memberOptions} onChange={memberOptions._onSelect}
          value={defaultOption} placeholder="Select an option" />

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