import React from 'react';
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
  
}

export default App;