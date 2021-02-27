import React from 'react';
import './App.css';
import HeaderBar from './MenuBar';
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TitleBar from './TitleBar';

const THEME = createMuiTheme({
  typography: {
    fontFamily: [
//      'GoogleSans',
      'Times New Roman',
//      '"Helvetica Neue"',
//      'Arial',
//      'sans-serif'
    ].join(','),
  }
});



const App=()=> {
  return (
    <ThemeProvider theme={THEME}>
        <div className="App">
          <HeaderBar/>
          <TitleBar/>
        </div>
    </ThemeProvider>
  );
}

export default App;