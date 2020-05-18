import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import SalesPointItem from './SalesPointItem'
import imgSample from '../../images/service-image-01.png'

const useStyles = makeStyles((theme) => ({
  root: {

  },
  header: {
    height: '30%',
  },
  content: {
    height: '70%',
  },
  card: {
    height: '80%'
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
        <Grid container alignItems="center" justify="center" item xs={5} className={classes.card}>
          <SalesPointItem text="1.aaa" img={imgSample} />
        </Grid>
        <Grid container alignItems="center" justify="center" item xs={5} className={classes.card}>
          <SalesPointItem text="2.aaa" img={imgSample} />
        </Grid>

      </Grid>
    </Grid>
  );
}

export default ServiceIntroduction;
