import React from 'react';
import './App.css';
import HeaderBar from './components/MenuBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import TitleIntro from './components/TitleIntro';
import FlockList from './components/FlocksList';
import OutstandingBoxList from './components/OustandingBox';
import ActivityIcon from './components/ActivityBar';
import IssueDebit from './pages/IssueDebit';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

// const options = [
//   'flock1', 'scottsaho', 'celinasthebest:)'
// ];
// const defaultOption = options[0];

// <Dropdown options={options} onChange={options._onSelect} 
//               value={defaultOption} placeholder="Select an option" />;


const App=()=> {
  return (
    <ThemeProvider>
        <div className="App">
          <HeaderBar/>
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
    </ThemeProvider>
  );
}


export default App;