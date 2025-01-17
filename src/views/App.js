import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import AppThemeProvider from './AppThemeProvider'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer/Footer'
import { Toast } from './Toast';
import ScrollToTop from './ScrollToTop';
import LibraryRegistration from './LibraryRegistration';
import BookInfoList from './BookInfoList';
import ServiceIntroduction from './ServiceIntroduction/ServiceIntroduction';

import './App.css';

const useStyles = makeStyles(theme => createStyles({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fdfdfd',
  },
  header: {
    height: '10%',
    [theme.breakpoints.down('sm')]: {
      height: '13%',
      minHeight: '80px',
      order: 1,
    }
  },
  contents: {
    height: '85%',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      order: 2,
    }
  },
  navigation: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      order: 3,
      height: 'auto',
    }
  },
  main: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      order: 1,
      height: 'auto',
    }
  },
  footer: {
    height: '5%',
    background: 'yellow',
    [theme.breakpoints.down('sm')]: {
      order: 4,
      height: 'auto',
    }
  }
}));


function App() {
  const classes = useStyles();

  return (
    <AppThemeProvider>
      <Router>
        <Grid className={classes.root} alignItems="stretch" alignContent="flex-start" container>
          <ScrollToTop />
          <Toast />
          <Grid className={classes.header} container item xs={12}>
            <Header />
          </Grid>
          <Grid className={classes.contents} container item xs={12}>
            <Grid container item xs={12} md={3} className={classes.navigation}>
              <Navigation />
            </Grid>
            <Grid container item xs={12} md={9} className={classes.main}>
              <Switch>
                <Route path="/books" component={BookInfoList} />
                <Route path="/libraries" component={LibraryRegistration} />
                <Route path="/" component={ServiceIntroduction} />
              </Switch>
            </Grid>
          </Grid>
          <Grid container item xs={12} className={classes.footer}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </AppThemeProvider>
  );
}

export default App;
