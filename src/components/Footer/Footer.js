import React from 'react';
import { withRouter } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
  root: {
    // width: '100%',
    height: '100%',
    background: theme.palette.primary.main,
    color: 'white'
  },
  link: {
    margin: theme.spacing(0, 3, 0, 3)
  }

}));

const Footer = (props) => {
  const { history } = props
  const classes = useStyles();

  const aboutLinkClicked = (event) => {
    history.push('/about')
    console.log('clicked')
  }

  return (
    <Grid container direction="row" justify="center" className={classes.root}>
      <Link component="button" color="inherit" onClick={aboutLinkClicked} className={classes.link}>このサイトについて</Link>
      <Link component="button" color="inherit" onClick={aboutLinkClicked} className={classes.link}>利用規約</Link>
      <Link component="button" color="inherit" onClick={aboutLinkClicked} className={classes.link}>プライバシーポリシー</Link>
    </Grid>
  );
}

export default withRouter(Footer);
