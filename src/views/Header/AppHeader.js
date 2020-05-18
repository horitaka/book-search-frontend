import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import SearchBar from './SearchBar'
// import Text from '../common/Text';
// import * as Colors from '../../constants/Colors'
// import * as Fonts from '../../constants/Fonts';

const useStyles = makeStyles(theme => createStyles({
  root: {
    background: theme.palette.primary.main,
  },
}));

function AppHeader() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" item xs={12} className={classes.root} >
      <Grid container justify="center" alignItems="center" item xs={8}>
        <Grid container justify="flex-end" alignItems="center" item xs={4}>
          <Typography>本の検索</Typography>
        </Grid>
        <Grid container justify="flex-start" alignItems="center" item xs={8}>
          <SearchBar />
        </Grid>
      </Grid>
    </Grid>
  )
}

// const TitleText = styled(Text)`
//   flex: 0 0 auto;
//   margin: 20px 20px;
//   font-size: ${Fonts.fontXLarge + 'px'};
//   color: white;
//   font-weight: bold;
// `

export default AppHeader
