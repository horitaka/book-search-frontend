import React from 'react';
import { Route, Switch } from 'react-router-dom'

// import { makeStyles, createStyles } from '@material-ui/core/styles';

import LibraryRegistration from './LibraryRegistration';
import BookInfoList from './BookInfoList';
import ServiceIntroduction from './ServiceIntroduction/ServiceIntroduction';

// const useStyles = makeStyles(theme => createStyles({
//   root: {
//   },

// }));

function AppRouter() {
  // const classes = useStyles();

  return (
    <Switch>
      <Route path="/book-search">
        <BookInfoList />
      </Route>
      <Route path="/library-registration">
        <LibraryRegistration />
      </Route>
      <Route path="/">
        <ServiceIntroduction />
      </Route>
    </Switch>
  );
}

export default AppRouter;
