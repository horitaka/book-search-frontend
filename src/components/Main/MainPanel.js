import React from 'react';
import { Route, Switch } from 'react-router-dom'

import LibraryRegistrationPanelContainer from './LibraryRegistration/LibraryRegistrationPanelContainer';
import BookInfoListContainer from './BookInfo/BookInfoListContainer';
import ServiceIntroduction from './ServiceIntroduction';
import Box from '../common/Box';

function MainPanel() {
  return (
    <Box flex={'1 0 600px'}>
      <Switch>
        <Route path="/book-search">
          <BookInfoListContainer />
        </Route>
        <Route path="/library-registration">
          <LibraryRegistrationPanelContainer />
        </Route>
        <Route path="/">
          <ServiceIntroduction />
        </Route>
      </Switch>
    </Box>
  );
}

export default MainPanel;
