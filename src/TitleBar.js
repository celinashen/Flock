import React from 'react';
import './App.css';
import HeaderBar from './MenuBar';
import styled from 'styled-components';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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

/**
const mainPageBox = styled.div`
  height: 200px;
  border: 5px black;
`;

const Content = styled.p`
  font-size: 30px;
  text-align: center;
`;*/


const titleBar=()=> {
  return (
    <ThemeProvider theme={THEME}>
          <Typography variant="h1" color="inherit">
            Hi Celina, your bills are
          </Typography>
    </ThemeProvider>
  );
}

export default titleBar;