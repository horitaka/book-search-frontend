import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import AppHeader from './components/Header/AppHeader'
import Navigation from './components/Navigation/Navigation'
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer'
import { Toast } from './components/common/Toast';

import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#03A9F4',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#fafafa'
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#FF80AB',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
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
            <AppHeader />
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

{/* <Container direction={'column'} justifyContent={'flex-start'} alignItems={'stretch'} height={'100vh'}>
<Router>
  <AppHeader/>
  <Box flex={'1 0 auto'}>
    <Container direction={'row'} justifyContent={'flex-start'} alignItems={'stretch'} flex={'1 0 auto'}>
      <NavigationPanel/>
      <MainPanel/>
    </Container>
  </Box>
</Router>
</Container> */}