import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
      marginBottom: theme.spacing(2),
      height: '150px',
    },
    backgroundImage: `url(${serviceTextBackground})`,
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255,255,255,0.8)',
    backgroundBlendMode: 'lighten',
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)',

  },
  content: {
    height: '60%',
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
  },
  link: {
    height: '10%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      height: 'auto',
    }
  }
}));

function ServiceIntroduction(props) {
  const { history } = props
  const classes = useStyles()

  const serviceIntroductionText = '図書館で本を借りることも、ECサイトで本を買うこともこのサイトで簡単に！'
  const salesPointText1 = '普段使う図書館の在庫をかんたんに検索'
  const salesPointText2 = '図書館にない本はAmazonや楽天で購入'

  const handleNewLibraryButtonClicked = (event) => {
    history.push('libraries')
  }

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
      <Grid container justify="center" alignItems="center" item xs={12} className={classes.link}>
        <Button color="secondary" onClick={handleNewLibraryButtonClicked} >
          <Typography variant="h6" className={classes.link}>さっそく使ってみる　まずは図書館を登録</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default ServiceIntroduction;
