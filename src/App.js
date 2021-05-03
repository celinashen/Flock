import React,{useState,useEffect} from 'react';
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
import IssueDebit from './IssueDebit';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase'
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
//import db from './firebaseConfig';




const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};



/*
async function getMarkers(user) {
  const events = await db.collection('user')
  var tempDoc = [];
  events.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (user!=null && doc.data()!=null)
          if (doc.data().id == user.uid) {
            tempDoc = doc.data().flocks;
            return tempDoc;
          }
      })
   })
 }
*/

var flockOptions = [];
var defaultOption = "Please select a flock.";
var match = false;

const App = ({ user, signOut, signInWithGoogle }) => {
  
  //Scan through database for user match, then load user-specific flocks.
  db.collection('user').get().then(querySnapshot =>{
    querySnapshot.forEach(doc => {
      if (doc.data()!=null && user!=null)
        if (doc.data().id == user.uid) {
          Object.assign(flockOptions, doc.data().flocks)
          match = true;
        }
    })
    if (match == false && user!=null) {
      const res = db.collection('user').add({
        name: user.displayName,
        flocks: [],
        id: user.uid,
      });
    }//end of if match
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
          <IssueDebit/>
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

- Add user
- display users in dropdown




==== ADD USER ====

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