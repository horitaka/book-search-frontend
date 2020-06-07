import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share'

import config from '../../../config'

const useStyles = makeStyles(theme => createStyles({
  root: {
    padding: theme.spacing(2, 0, 0, 2),
  },
  item: {
    marginRight: theme.spacing(2)
  }
}));

export default function SettingFooter(props) {
  const classes = useStyles();

  const appUrl = config.app.url;
  const appTitle = config.app.title;
  const iconSize = 40

  return (
    <Grid container justify="flex-start" className={classes.root}>
      <Grid item className={classes.item}>
        <FacebookShareButton url={appUrl}>
          <FacebookIcon size={iconSize} round />
        </FacebookShareButton>
      </Grid>
      <Grid item className={classes.item}>
        <TwitterShareButton url={appUrl} title={appTitle}>
          <TwitterIcon size={iconSize} round />
        </TwitterShareButton>
      </Grid>
    </Grid>
  );
}
