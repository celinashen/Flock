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



const HomePage = () => {
  
  return (
    <div> 
      <div className="App">
        <TitleIntro/>
        <FlockList/>
        <OutstandingBoxList/>
        
        <Router>
        <ActivityIcon/>
        <Switch>
            <Route path = '/' />
        </Switch>
        </Router>        
      </div>
    </div>
    

  );
}


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(HomePage);

