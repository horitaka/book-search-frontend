import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { showToast } from '../../Toast';


const useStyles = makeStyles(theme => createStyles({
  root: {
    width: '100%',
  },
  nesstedItem: {
    left: theme.spacing(2),
  },
  noLibraryText: {
    paddingLeft: theme.spacing(2),
  }
}));

function UserLibraryList({ libraryList, onDeleteClicked }) {
  const classes = useStyles();
  const [isOpens, setOpens] = React.useState(new Array(libraryList.length).fill(false));

  if (libraryList.length === 0) {
    return (<Typography variant="body1" className={classes.noLibraryText}>図書館が登録されていません</Typography>)
  }

  const handleLibraryClick = (index) => {
    const newArray = [...isOpens]
    newArray[index] = !isOpens[index]
    setOpens(newArray)
  };

  const handleDeleteClick = (library) => {
    showToast('削除しました');
    setOpens(new Array(libraryList.length).fill(false))
    onDeleteClicked(library);
  }

  return (
    <List dense className={classes.root}>
      {libraryList.map((library, index) => (
        <Box key={library.libraryId} >

          <ListItem onClick={() => handleLibraryClick(index)}>
            <Grid container justify="space-between" alignItems="center" spacing={2}>
              <Grid item xs={8}>
                <Link href={library.librarySiteUrl} target="_blank" rel="noreferrer noopener">{library.libraryName}</Link>
              </Grid>
              <Grid item xs={1}>
                {isOpens[index] ? <ExpandLess /> : <ExpandMore />}
              </Grid>
            </Grid>
          </ListItem>

          <Collapse in={isOpens[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Button color="primary" onClick={() => handleDeleteClick(library)} className={classes.nesstedItem}>登録解除</Button>
              {library.branches.map(branch => (
                <ListItem dense key={branch} className={classes.nesstedItem}>
                  <Typography variant="body2">{branch}</Typography>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Box>
      ))}
    </List >
  );
}

UserLibraryList.propTypes = {
  libraryList: PropTypes.arrayOf(
    PropTypes.shape({
      libraryId: PropTypes.string.isRequired,
      libraryName: PropTypes.string.isRequired,
      prefecture: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      librarySiteUrl: PropTypes.string.isRequired,
      isRegistered: PropTypes.bool.isRequired,
    })
  ).isRequired,
}

// const NoLibraryText = styled(Text)`
//   flex: 0 0 auto;
//   margin: 10px 10px 10px 20px;
// `

// const LibraryList = styled(List)`
//   flex: 0 0 auto;
//   margin: 10px 10px 10px 20px;
// `
// LibraryList.displayName = 'LibraryList'

// const LibraryBranchText = styled(Text)`
//   font-size: ${Fonts.fontSmall + 'px'};
//   color: rgb(50, 50, 50);
// `
// LibraryBranchText.displayName = 'LibraryBranchText';

// const LibraryListItem = styled(ListItem)`
//   margin: 10px 0px;
// `
// LibraryListItem.displayName = 'LibraryListItem';

// const LibraryLink = styled(Link)`
//   flex: 1 0 auto;
// `
// LibraryLink.displayName = 'LibraryLink';

// const DeleteButton = styled(Button)`
//   flex: 0 0 4em;
//   padding: 5px 10px;
// `
// DeleteButton.displayName = 'DeleteButton';

export default UserLibraryList;
