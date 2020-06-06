import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import AppThemeProvider from './AppThemeProvider'
import Header from './Header'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'
import { Toast } from './Toast';
import LibraryRegistration from './LibraryRegistration';
import BookInfoList from './BookInfoList';
import ServiceIntroduction from './ServiceIntroduction/ServiceIntroduction';


import './App.css'

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
    // overflowY: 'scroll',
  },
  navigation: {
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
    <AppThemeProvider>
      <Router>
        <Grid className={classes.root} alignItems="stretch" container>
          <Toast />
          <Grid className={classes.header} container item xs={12}>
            <Header />
          </Grid>
          <Grid className={classes.contents} container item xs={12}>
            <Grid container item xs={3} className={classes.navigation}>
              <Navigation />
            </Grid>
            <Grid container item xs={9} className={classes.main}>
              <Switch>
                <Route path="/books" component={BookInfoList} />
                <Route path="/libraries" component={LibraryRegistration} />
                <Route path="/" component={ServiceIntroduction} />
              </Switch>
            </Grid>
          </Grid>
          <Grid className={classes.footer} container item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </AppThemeProvider>
  );
}

export default App;
