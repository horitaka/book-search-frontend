import React, { useRef } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import BookInfo from './BookInfo';
import Loading from './Loading'
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
  root: {
    height: '100%',
    overflowY: 'scroll',
    [theme.breakpoints.down('sm')]: {
      overflowY: 'visible',
    }
  },
  errorText: {
    margin: theme.spacing(3, 3, 3, 3)
  },
  nextButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    }
  },
  libraryRecomendationLink: {
    paddingBottom: theme.spacing(2)
  }
}));

function BookInfoList(props) {
  const { bookItemsAndStocks, isBooksSearching, error, shouldShowNextButton, fetchBooks, userBookLibraries, history } = props;
  const classes = useStyles();
  const containerElement = useRef(null);

  if (Object.keys(error).length !== 0) {
    return <Typography className={classes.errorText}>検索に失敗しました</Typography>
  }

  if (!isBooksSearching && bookItemsAndStocks.length === 0) {
    return <Typography className={classes.errorText}>検索結果が0件です</Typography>
  }

  const handleNewLibraryButtonClicked = (event) => {
    history.push('libraries')
  }

  const libraryRecomendationLink = (
    <Box>
      <ListItem className={classes.libraryRecomendationLink}>
        <Grid container direction="column">
          <Typography variant="body1">お近くの図書館を登録すると図書館の在庫を一緒に検索できます。</Typography>
          <Button color="secondary" variant="contained" onClick={handleNewLibraryButtonClicked} ><Typography variant="body1" >登録はこちらから</Typography></Button>
        </Grid>
      </ListItem>
      <Divider />
    </Box>
  )

  const handleScroll = () => {
    const bottomPosition = containerElement.current.scrollTop + containerElement.current.clientHeight;
    const height = containerElement.current.scrollHeight;
    if (!isBooksSearching && bottomPosition >= height * 0.9) {
      fetchBooks();
    }
  }

  const handleNextClick = () => {
    fetchBooks();
  }

  return (
    <Grid container justify="center" alignItems="stretch" ref={containerElement} onScroll={handleScroll} className={classes.root} >
      <Grid container direction="column" justify="flex-start" alignItems="stretch" item xs={12} md={8}>
        <List>
          {userBookLibraries.length === 0 && !isBooksSearching && libraryRecomendationLink}
          {bookItemsAndStocks.map(bookInfo => (
            <Box key={bookInfo.title + bookInfo.isbn}>
              <ListItem>
                <BookInfo bookInfo={bookInfo} />
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
        {shouldShowNextButton && <Button variant="text" color="secondary" onClick={handleNextClick} className={classes.nextButton}>続きを読み込む</Button>}
        {isBooksSearching && <Loading />}
      </Grid>
    </Grid>
  );

}

// const StyledList = styled(List)`
//   margin: 10px;
// `

// BookInfoList.propTypes = {
//   isSearching: PropTypes.bool.isRequired,
//   isSucceededSearch: PropTypes.bool.isRequired,
//   bookItemsAndStocks: PropTypes.arrayOf(BookInfo.propTypes.bookInfo).isRequired,
// }

export default BookInfoList;
