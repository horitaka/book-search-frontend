import React from 'react';
import { withRouter } from 'react-router';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => createStyles({
  root: {
    background: theme.palette.primary.main,
    padding: theme.spacing(2, 0, 2, 0)
  },
  icon: {
    padding: theme.spacing(0, 2)
  },
  img: {
    marginRight: theme.spacing(1),
    height: '40px',
    objectFit: 'contain'
  },
  textFieldContainer: {
    minWidth: '300px',
  },
  form: {
    width: '100%',
  },
  textField: {
    background: theme.palette.secondary.contrastText,
    borderRadius: theme.spacing(1),
    height: '100%',
    '& .MuiOutlinedInput-root': {
      height: '100%',
    },
  },
  button: {
    color: theme.palette.secondary.contrastText,
  },
  buttonDisabled: {
    backgroundColor: theme.palette.secondary.dark,
  }
}));

function AppHeader(props) {
  const { isBooksSearching, history, runBookSearch } = props
  const textFieldElement = React.useRef(null);
  const classes = useStyles();


  const handleSearchClick = (event) => {
    event.preventDefault();
    const keyword = textFieldElement.current.value
    if (keyword !== '' && !isBooksSearching) {
      history.push('/books')
      runBookSearch(keyword)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const keyword = textFieldElement.current.value
    if (keyword !== '' && !isBooksSearching) {
      history.push('/books')
      runBookSearch(keyword)
    }
  }

  return (
    <Grid container justify="center" alignItems="stretch" item xs={12} className={classes.root} >

      <Grid container justify="flex-end" alignItems="center" item xs={2} className={classes.icon}>
        <Typography variant='h4'>
          <FontAwesomeIcon icon={faBookOpen} color='white' />
        </Typography>
      </Grid>

      <Grid container alignItems="stretch" item xs={4} className={classes.textFieldContainer}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField variant="outlined" fullWidth size="small" color="secondary" placeholder="本を検索..." inputRef={textFieldElement} className={classes.textField} />
        </form>
      </Grid>

      <Grid container alignItems="stretch" item xs={1}>
        <Button color='secondary' variant='contained' disabled={false} onClick={handleSearchClick} className={!isBooksSearching ? classes.button : classes.buttonDisabled} >
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

export default withRouter(AppHeader);
