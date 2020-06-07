import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SalesPointItem from './SalesPointItem'

import salesPointImg01 from '../../images/sales-point-01.png';
import salesPointImg02 from '../../images/sales-point-02.png';
import serviceTextBackground from '../../images/service-text-background.jpg';


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
    },
    backgroundImage: `url(${serviceTextBackground})`,
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255,255,255,0.8)',
    backgroundBlendMode: 'lighten',
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)',

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

  const serviceIntroductionText = '図書館で本を借りることも、ECサイトで本を買うこともこのサイトで簡単に！'
  const salesPointText1 = '1. 図書館の在庫をかんたんに検索'
  const salesPointText2 = '2. 図書館になければそのまま購入'

  return (
    <Grid container justify="center" alignItems="stretch" alignContent="space-around" className={classes.root}>
      <Grid container justify="center" alignItems="center" item xs={12} className={classes.header}>
        <Typography variant="h5">{serviceIntroductionText}</Typography>
      </Grid>
      <Grid container justify="space-around" alignItems="center" item xs={12} className={classes.content}>
        <Grid container alignItems="center" justify="center" item xs={11} md={5} className={classes.card}>
          <SalesPointItem text={salesPointText1} img={salesPointImg01} />
        </Grid>
        <Grid container alignItems="center" justify="center" item xs={11} md={5} className={classes.card}>
          <SalesPointItem text={salesPointText2} img={salesPointImg02} />
        </Grid>

      </Grid>
    </Grid>
  );
}

export default ServiceIntroduction;
