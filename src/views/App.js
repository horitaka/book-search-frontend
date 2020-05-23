import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import AppRouter from './AppRouter';
import Footer from './Footer/Footer'
import { Toast } from './Toast';

import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#03A9F4',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#ffffff'
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#FF80AB',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffffff'
    },
  },
});

const useStyles = makeStyles(theme => createStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    height: '10%',
    // background: '#03A9F4',
  },
  contents: {
    height: '85%',
    // background: 'blue',
  },
  main: {
    height: '100%',
    overflowY: 'scroll',
  },
  navication: {
    height: '100%',
  },
  footer: {
    height: '5%',
    background: 'yellow',
  }
}));


function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Grid className={classes.root} alignItems="stretch" container>
          <Toast />
          <Grid className={classes.header} container item xs={12}>
            <Header />
          </Grid>
          <Grid className={classes.contents} container item xs={12}>
            <Grid container item xs={3} className={classes.navication}>
              <Navigation />
            </Grid>
            <Grid container item xs={9} className={classes.main}>
              <AppRouter />
            </Grid>
          </Grid>
          <Grid className={classes.footer} container item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
