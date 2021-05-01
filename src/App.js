import React from 'react';
import './App.css';
import HeaderBar from './components/MenuBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import TitleIntro from './components/TitleIntro';
import FlockList from './components/FlocksList';
import OutstandingBoxList from './components/OustandingBox';
import ActivityMenu from './components/Activity';
import IssueDebit from './pages/IssueDebit';

const App=()=> {
  return (
    <ThemeProvider>
        <div className="App">
          <HeaderBar/>
          <TitleIntro/>
          <FlockList/>
          <OutstandingBoxList/>
          <ActivityMenu/>
          <IssueDebit/>
        </div>
    </ThemeProvider>
  );
}


export default App;