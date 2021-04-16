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

const App=()=> {
  return (
    <ThemeProvider>
        <div className="App">
          <HeaderBar/>
          <TitleIntro/>
          <FlockList/>
          <OutstandingBoxList/>
        </div>
    </ThemeProvider>
  );
}

export default App;