import { ThemeProvider } from '@material-ui/core/styles';
import { default as React } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import withFirebaseAuth from 'react-with-firebase-auth';
import FlockList from '../components/FlocksList';
import HeaderBar from '../components/MenuBar';
import TransactionsBox from '../components/TransactionsBox';
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
var flockIDs = [];
var loopCount;

const HomePage = () => {

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
    <div> 
      <div className="App">
        <TitleIntro/>
        <TransactionsBox/>

        {/* <FlockList/>
        <OutstandingBoxList/> */}
        
        {/* <Router>
          <ActivityIcon/>
          <Switch>
              <Route path = '/home' />
          </Switch>
        </Router> */}
        
        
        {/* <CreateFlock/> */}
      </div>

      {/* <Dropdown 
          options={flockOptions} 
          onChange={flockOptions._onSelect} 
          value={defaultOption} 
          placeholder="Select an option" /> */}

    </div>
    

  );
}


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(HomePage);

