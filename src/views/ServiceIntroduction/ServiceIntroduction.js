import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SalesPointItem from './SalesPointItem'
import imgSample from '../../images/service-image-01.png'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    height: '30%',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      height: '150px',
    }
  },
  content: {
    height: '70%',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    }
  },
  card: {
    height: '80%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      height: '300px',
    }
  }
}));

function ServiceIntroduction() {
  const classes = useStyles()

  const text1 = 'このサービスは、検索単語を入れると図書館に在庫があるかを検索できるサービスです'

  return (
    <Grid container justify="center" alignItems="stretch" alignContent="space-around" className={classes.root}>
      <Grid container justify="center" alignItems="center" item xs={12} className={classes.header}>
        <Typography variant="h5">{text1}</Typography>
      </Grid>
      <Grid container justify="space-around" alignItems="center" item xs={12} className={classes.content}>
        <Grid container alignItems="center" justify="center" item xs={11} md={5} className={classes.card}>
          <SalesPointItem text="1.aaa" img={imgSample} />
        </Grid>
        <Grid container alignItems="center" justify="center" item xs={11} md={5} className={classes.card}>
          <SalesPointItem text="2.aaa" img={imgSample} />
        </Grid>

      </Grid>
    </Grid>
  );
}

export default ServiceIntroduction;
