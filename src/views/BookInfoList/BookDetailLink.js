import React from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => createStyles({
  root: {
  },
  link: {
  },
  linkDisabled: {
    color: theme.palette.text.disabled,
    cursor: 'auto',
  }
}));

const BookDetailLink = (props) => {
  const { linkText, linkUrl, hasLink } = props
  const classes = useStyles();

  return (
    <Grid container justify="flex-start" alignItems="center">
      <Link
        variant="body2" component="a" color="secondary"
        underline={hasLink ? 'hover' : 'none'}
        href={linkUrl} target="_blank" rel="noreferrer noopener"
        className={hasLink ? classes.link : classes.linkDisabled}>
        {linkText}
      </Link>
    </Grid>
  );
}

export default BookDetailLink;
