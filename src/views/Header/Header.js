import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import serviceLogo from '../../images/service-logo.png'

const useStyles = makeStyles(theme => createStyles({
  root: {
    background: theme.palette.primary.main,
    padding: theme.spacing(2, 0, 2, 0)
  },
  img: {
    marginRight: theme.spacing(1),
    height: '50px',
    objectFit: 'contain'
  },
  textFieldContainer: {
    minWidth: '300px'
  },
  textField: {
    background: theme.palette.secondary.contrastText,
    borderRadius: theme.spacing(1),
  },
  button: {
    color: theme.palette.secondary.contrastText,
  }
}));

function AppHeader() {
  const classes = useStyles();

  const handleSearchClick = () => {

  }

  return (
    <Grid container justify="center" alignItems="stretch" item xs={12} className={classes.root} >

      <Grid container justify="flex-end" alignItems="center" item xs={2}>
        <img src={serviceLogo} alt="ロゴ" className={classes.img} />
      </Grid>

      <Grid container alignItems="stretch" item xs={4} className={classes.textFieldContainer}>
        <TextField variant="outlined" fullWidth color="secondary" placeholder="本を検索..." className={classes.textField} />
      </Grid>

      <Grid container alignItems="stretch" item xs={1}>
        <Button color='secondary' variant='contained' onClick={handleSearchClick} className={classes.button} >
          <SearchIcon />
        </Button>
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
