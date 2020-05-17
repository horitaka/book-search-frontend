import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { showToast } from '../../common/Toast';


const useStyles = makeStyles(theme => createStyles({
  root: {

  },

}));

function UserLibraryList({ libraryList, onDeleteClicked }) {
  const classes = useStyles();

  function handleDeleteClick(library) {
    showToast('削除しました');
    onDeleteClicked(library);
  }

  if (libraryList.length === 0) {
    return (<Typography variant="body1">図書館が登録されていません</Typography>)
  }

  return (
    <List>
      {libraryList.map(library => (
        <ListItem key={library.libraryID}>
          <Grid container justify="flex-start" alignItems="center" spacing={2}>
            <Grid container direction="column" justify="flex-start" alignItems="flex-start" item xs={9}>
              <Link href={library.librarySiteUrl} target="_blank" rel="noreferrer noopener">{library.libraryName}</Link>
              <Typography variant="body2">{library.branches.join(', ')}</Typography>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" color="primary" onClick={() => handleDeleteClick(library)}>削除</Button>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
}

UserLibraryList.propTypes = {
  libraryList: PropTypes.arrayOf(
    PropTypes.shape({
      libraryID: PropTypes.string.isRequired,
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
