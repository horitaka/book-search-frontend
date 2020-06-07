import React from 'react';
import { withRouter } from 'react-router-dom'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import UserLibraryList from './UserLibraryList';
import ShareButtons from './ShareButtons';

const useStyles = makeStyles(theme => createStyles({
  root: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      overflowY: 'hidden',
    }
  },
  header: {
    marginBottom: theme.spacing(2)
  },
  newButton: {
    marginTop: theme.spacing(1)
  },
  linkButton: {
    margin: theme.spacing(0, 0, 0, 1)
  }
}));

function Navigation(props) {
  const { history } = props
  const classes = useStyles();

  const handleNewLibraryButtonClicked = (event) => {
    history.push('libraries')
  }

  return (
    <Box className={classes.root}>
      <Grid container direction="column" alignItems="flex-start" item xs={12} >
        <Typography variant="h6" className={classes.header}>登録済みの図書館</Typography>
        <UserLibraryList />
        <Button color="secondary" onClick={handleNewLibraryButtonClicked} className={classes.newButton}>
          <Typography variant="h6" className={classes.linkButton}>図書館を追加</Typography>
        </Button>
        <ShareButtons />
      </Grid >
    </Box>
  );
}

export default withRouter(Navigation);
