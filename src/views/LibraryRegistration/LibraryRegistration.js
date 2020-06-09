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
    [theme.breakpoints.down('sm')]: {
      overflowY: 'hidden',
    }
  },
  header: {
    margin: theme.spacing(2, 0, 0, 0)
  },

}));

function LibraryRegistration(props) {
  const { keyword, isInitialState, isSucceededRegistration, libraryList, error, addLibrary, searchLibrary, changeKeyword } = props
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="stretch" className={classes.root}>
      <Grid container direction="column" justify="flex-start" alignItems="stretch" item xs={12} md={8} className={classes.header}>
        <LibrarySearch
          keyword={keyword}
          searchLibrary={searchLibrary}
          changeKeyword={changeKeyword}
        />
        <LibraryList
          libraryList={libraryList}
          addLibrary={addLibrary}
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
  addLibrary: PropTypes.func.isRequired,
  searchLibrary: PropTypes.func.isRequired,
  changeKeyword: PropTypes.func.isRequired,
}

export default LibraryRegistration;
