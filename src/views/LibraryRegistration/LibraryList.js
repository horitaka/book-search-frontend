import React from 'react'
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { showToast } from '../Toast';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(2, 0, 0, 0)
  },
  libraryItem: {
    margin: theme.spacing(0, 2, 0, 0),
  },
}));

function LibraryList(props) {
  const { libraryList, onLibraryAddClickd, isInitialState } = props;
  const classes = useStyles();

  if (isInitialState) {
    return null;
  }

  const LibraryList = () => {
    return (
      <List>
        {libraryList.map(library => {
          return (
            <ListItem key={library.libraryID}>
              <Grid container direction="row" justify="center" alignItems="center" >
                <Grid container direction="column" justify="flex-start" alignItems="flex-start" item xs={9} className={classes.libraryItem}>
                  <Link href={library.librarySiteUrl} target="_blank" rel="noopener noreferrer">{library.libraryName}</Link>
                  <Typography variant="body2">{library.branches.join(', ')}</Typography>
                </Grid>
                <Grid container direction="column" justify="flex-start" alignItems="center" item xs={2}>
                  {library.isRegistered
                    ? <Button color="primary" variant="contained" size="large" fullWidth disabled>登録済み</Button>
                    : <Button color="primary" variant="contained" size="large" fullWidth onClick={() => handleLibraryAddClick(library)}>登録</Button>}
                </Grid>
              </Grid>
            </ListItem>
          )
        })}
      </List>
    )
  }


  function handleLibraryAddClick(library) {
    showToast('登録しました')
    onLibraryAddClickd(library);
  }

  return (
    <Grid container direction="row" justify="space-between" alignItems="center" item className={classes.root}>
      {libraryList.length !== 0
        ? <LibraryList />
        : <Typography>検索結果が0件です</Typography>}
    </Grid>
  );
}

LibraryList.propTypes = {
  libraryList: PropTypes.arrayOf(
    PropTypes.shape({
      libraryID: PropTypes.string.isRequired,
      libraryName: PropTypes.string.isRequired,
      prefecture: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      librarySiteUrl: PropTypes.string.isRequired,
      branches: PropTypes.arrayOf(PropTypes.string).isRequired,
      isRegistered: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLibraryAddClickd: PropTypes.func.isRequired,
  isInitialState: PropTypes.bool.isRequired,
}

// const InstructionText = styled(Text)`
//   margin: 20px 10px;
// `
// InstructionText.displayName = 'InstructionText';

// const LibraryListItem = styled(ListItem)`
//   margin: 15px 0;
// `

// const LibraryLink = styled(Link)`
//   flex: 1 0 auto;
// `
// LibraryLink.displayName = 'LibraryLink';

// const LibraryBranchText = styled(Text)`
//   font-size: ${Fonts.fontSmall + 'px'};
//   color: rgb(50, 50, 50);
// `
// LibraryBranchText.displayName = 'LibraryBranchText';

// const AddButton = styled(Button)`
//   flex: 0 0 6em;
//   margin-left: 10px;
//   padding: 5px 10px;
// `
// AddButton.displayName = 'AddButton';

export default LibraryList;
