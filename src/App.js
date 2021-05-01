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

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);



const App = ({ user, signOut, signInWithGoogle }) => {
  return (
    <ThemeProvider>
        <div className="App">
          <HeaderBar/>
          <TitleIntro/>
          <FlockList/>
          <OutstandingBoxList/>
          <ActivityMenu/>
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


const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
