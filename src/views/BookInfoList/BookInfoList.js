import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import BookInfo from './BookInfo';
import Loading from './Loading'

const useStyles = makeStyles(theme => createStyles({
  root: {
  },
  errorText: {
    margin: theme.spacing(3, 3, 3, 3)
  }
}));

function BookInfoList(props) {
  const { bookItemsAndStocks, isSearching, isSucceededSearch, isBooksStocksSearching } = props;
  const classes = useStyles();
  console.log(props)

  if (isSearching) {
    return <Loading />
  }

  if (!isSucceededSearch) {
    return <Typography className={classes.errorText}>検索に失敗しました</Typography>
  }

  if (bookItemsAndStocks.length === 0) {
    return <Typography className={classes.errorText}>検索結果が0件です</Typography>
  }

  return (
    <Grid container justify="center" alignItems="stretch" className={classes.root}>
      <Grid container direction="column" justify="flex-start" alignItems="stretch" item xs={8}>
        <List>
          {bookItemsAndStocks.map(bookInfo => (
            <Box key={bookInfo.title}>
              <ListItem>
                <BookInfo bookInfo={bookInfo} isBooksStocksSearching={isBooksStocksSearching} />
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </Grid>
    </Grid>
  );

}

// const StyledList = styled(List)`
//   margin: 10px;
// `

BookInfoList.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  isSucceededSearch: PropTypes.bool.isRequired,
  bookItemsAndStocks: PropTypes.arrayOf(BookInfo.propTypes.bookInfo).isRequired,
}

export default BookInfoList;
