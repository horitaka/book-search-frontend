import React from 'react';
import { withRouter } from 'react-router-dom'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import UserLibraryList from './UserLibraryList';
import ShareButtons from './ShareButtons';

const useStyles = makeStyles(theme => createStyles({
  root: {
    width: '100%',
    height: '100%',
    // overflowY: 'scroll'
  },
  header: {
    margin: theme.spacing(2, 0, 0, 1)
  },
  linkButton: {
    margin: theme.spacing(0, 0, 0, 1)
  }
}));

function Navigation(props) {
  const { history } = props
  const classes = useStyles();

  const handleNewLibraryButtonClicked = (event) => {
    history.push('library-registration')
  }

  return (
    <Box className={classes.root}>
      <Grid container direction="column" alignItems="flex-start" item xs={12} >
        <Typography variant="h6" className={classes.header}>登録済みの図書館</Typography>
        <UserLibraryList />
        <Button color="secondary" onClick={handleNewLibraryButtonClicked}>
          <Typography variant="h6" className={classes.linkButton}>図書館を登録</Typography>
        </Button>
        <ShareButtons />
      </Grid >
    </Box>
  );
}

// const VerticalLine = styled.div`
//   background-color: gray;
//   width:2px;
//   flex-grow: 1;
//   margin: 10px 0;
// `

// const StyledLink = styled(Link)`
//   flex: 0 0 auto;
//   height: ;
//   margin: 10px 10px 10px 20px;
//   padding: 0;
//   border-radius: 3px;
//   outline: none;
//   border: none;
//   text-decoration: none;

//   :active {
//     background: ;
//     color: ${Colors.primaryColor};
//     outline: none;
//   }

//   font-size: ${Fonts.fontLarge}px;
//   color: ${Colors.accentColor};
// `

// const HeaderText = styled(Text)`
//   flex: 0 0 auto;
//   margin: 10px;
//   font-size: ${Fonts.fontLarge + 'px'};
//   font-weight: bold;
// `

export default withRouter(Navigation);
