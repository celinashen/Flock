import React from 'react';
<<<<<<< HEAD
import './App.css';
import HeaderBar from './MenuBar';
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TitleIntro from './TitleIntro';
import FlockList from './FlocksList';

// const THEME = createMuiTheme({
//   typography: {
//     fontFamily: [
//       'Poppins',
//     ].join(','),
//   }
// });



const App=()=> {
  return (
    <ThemeProvider>
        <div className="App">
          <HeaderBar/>
          <TitleIntro/>
          <FlockList/>
        </div>
    </ThemeProvider>
  );
=======
import logo from './logo.svg';
import './App.css';
import HeaderBar from './Header';

const Header = () => {

  return(
    
    <div>
       <HeaderBar/>
    </div>
  )
}

const App=()=> {
  return (
    <div className="App">
      <HeaderBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
  
>>>>>>> 74cffb4eeac54dffecda3fdd74999b5f688f505d
}

export default App;