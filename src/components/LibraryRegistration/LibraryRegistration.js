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
  const { isInitialState, isSucceededRegistration, libraryList, onLibraryAddClickd, onPrefSelected, onKeywordChanged } = props
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="stretch" className={classes.root}>
      <Grid container direction="column" justify="flex-start" alignItems="stretch" item xs={8} className={classes.header}>
        <LibrarySearch
          onPrefSelected={onPrefSelected}
          onKeywordChanged={onKeywordChanged}
        />
        <LibraryList
          libraryList={libraryList}
          onLibraryAddClickd={onLibraryAddClickd}
          isInitialState={isInitialState}
          isSucceededRegistration={isSucceededRegistration}
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
  onPrefSelected: PropTypes.func.isRequired,
  onKeywordChanged: PropTypes.func.isRequired,
}

export default LibraryRegistration;
