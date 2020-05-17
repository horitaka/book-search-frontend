import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
  root: {
    width: '100%',
    height: '100%',
    margin: theme.spacing(0, 0, 4, 0)
  },
  header: {
    height: '15%',
    // justifyContent: 'flex-end',
  },
  media: {
    height: '85%',
    backgroundSize: 'contain',
  },
}));

const SalesPointItem = (props) => {
  const { text, img } = props
  const classes = useStyles();

  const title = <Typography>{text}</Typography>
  return (
    <Card className={classes.root}>
      <CardHeader title={title} className={classes.header} />
      <CardMedia
        className={classes.media}
        image={img}
        title="Contemplative Reptile"
      />
    </Card>
  )

}

export default SalesPointItem;
