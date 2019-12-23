import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import AppHeader from './components/Header/AppHeader'
import NavigationPanel from './components/Navigation/NavigationPanel'
import MainPanel from './components/Main/MainPanel';
import Container from './components/common/Container';
import Box from './components/common/Box';
import {Toast} from './components/common/Toast';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Toast/>
        <Container direction={'column'} justifyContent={'flex-start'} alignItems={'stretch'} height={'100vh'}>
          <Router>
            <AppHeader/>
            <Box flex={'1 0 auto'}>
              <Container direction={'row'} justifyContent={'flex-start'} alignItems={'stretch'} flex={'1 0 auto'}>
                <NavigationPanel/>
                <MainPanel/>
              </Container>
            </Box>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
