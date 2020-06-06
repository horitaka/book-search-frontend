import React from 'react'
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import LibrarySearch from './LibrarySearch'
import LibraryList from './LibraryList';

const useStyles = makeStyles(theme => createStyles({
  root: {
    height: '100%',
    overflowY: 'scroll',
  },
  header: {
    margin: theme.spacing(2, 0, 0, 0)
  },

}));

function LibraryRegistration(props) {
  const { isInitialState, isSucceededRegistration, libraryList, error, onLibraryAddClickd, searchLibrary, onKeywordChanged } = props
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="stretch" className={classes.root}>
      <Grid container direction="column" justify="flex-start" alignItems="stretch" item xs={8} className={classes.header}>
        <LibrarySearch
          searchLibrary={searchLibrary}
          onKeywordChanged={onKeywordChanged}
        />
        <LibraryList
          libraryList={libraryList}
          onLibraryAddClickd={onLibraryAddClickd}
          isInitialState={isInitialState}
          isSucceededRegistration={isSucceededRegistration}
          error={error}
        />
      </Grid>
    </Grid>
  )
}

LibraryRegistration.propTypes = {
  isInitialState: PropTypes.bool.isRequired,
  isSucceededRegistration: PropTypes.bool.isRequired,
  libraryList: LibraryList.propTypes.libraryList,
  onLibraryAddClickd: PropTypes.func.isRequired,
  searchLibrary: PropTypes.func.isRequired,
  onKeywordChanged: PropTypes.func.isRequired,
}

export default LibraryRegistration;
