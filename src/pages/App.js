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

import IssueDebit from './IssueDebit';
import PayCredit from './PayCredit';
import HomePage from './HomePage';
import SignIn from './SignIn';
import { GiDungeonGate } from 'react-icons/gi';
import UserFlocks from './UserFlocks';

import background from '../images/bgvectors.svg'
//everything that's constant across all pages put into here


// const options = [
//   'flock1', 'scottsaho', 'celinasthebest:)'
// ];
// const defaultOption = options[0];

// <Dropdown options={options} onChange={options._onSelect} 
//               value={defaultOption} placeholder="Select an option" />;


const styles = {
  container: {
    backgroundImage:`url(${ background })`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
  }
};

const App = () => {
  return (
    <ThemeProvider>
      <div 
        style = {{backgroundImage:`url(${ background })`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
      }}>

        <div className="App">
          <Router>
            <HeaderBar/>
            <Switch>
                <Route path = '/issue'><IssueDebit/></Route>
                <Route path = '/pay'><PayCredit/></Route>
                <Route path = '/yourflocks'><UserFlocks/></Route>
                <Route path = '/home'><HomePage/></Route>
                <Route path = '/'><SignIn/></Route>
            </Switch>
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}


export default App;
