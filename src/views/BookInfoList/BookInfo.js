import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link'
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
  root: {
    minWidth: '600px',
  },
  title: {
    fontWeight: 'bold',
  }

}));

const BookLibraryStocks = (props) => {
  const { bookInfo } = props

  const generateStockStatus = (isOwned, canBeRend) => {
    let bookStockStatus = '';
    if (isOwned) {
      if (canBeRend) {
        bookStockStatus = '貸出可'
      } else {
        bookStockStatus = '貸出中'
      }
    } else {
      bookStockStatus = '蔵書なし'
    }
    return bookStockStatus
  }

  return (
    <List>
      {
        bookInfo.stockByLibrary.map(stock => {
          const bookStockStatus = generateStockStatus(stock.isOwned, stock.canBeRend);
          return (
            <ListItem key={stock.libraryID}>
              <Grid container justify="flex-start" alignItems="center">
                <Grid item xs={9}>
                  <Typography variant="body2">{stock.libraryName}</Typography>
                </Grid>
                <Grid item xs={3}>
                  {stock.isOwned
                    ? <Link href={stock.bookRentalUrl} target="_blank" rel="noreferrer noopener" >{bookStockStatus}</Link>
                    : <Typography variant="body2">{bookStockStatus}</Typography>}
                </Grid>
              </Grid>
            </ListItem>
          )
        })
      }
    </List>
  )
}

function BookInfo({ bookInfo }) {
  const classes = useStyles();

  return (
    <Grid container justify="flex-start" alignItems="flex-start" className={classes.root}>
      <Grid item xs={3}>
        <img src={bookInfo.imageUrl} alt={bookInfo.title} />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1" className={classes.title}>{bookInfo.title}</Typography>
        <Typography variant="body2" >{Array.isArray(bookInfo.authors) && bookInfo.authors.join(', ')}</Typography>
        <BookLibraryStocks bookInfo={bookInfo} />
        <Grid container justify="flex-start" spacing={1}>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary" fullWidth>Amazon</Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary" fullWidth>楽天Books</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

BookInfo.propTypes = {
  bookInfo: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    isbn: PropTypes.number.isRequired,
    stockByLibrary: PropTypes.arrayOf(
      PropTypes.shape({
        libraryID: PropTypes.string.isRequired,
        libraryName: PropTypes.string.isRequired,
        bookRentalUrl: PropTypes.string.isRequired,
        isOwned: PropTypes.bool.isRequired,
        canBeRend: PropTypes.bool.isRequired,
      })
    ),
  }).isRequired
}

// const LibraryNameText = styled(Text)`
//   flex: 2 1 0;
//   font-size: ${Fonts.fontMedium};
// `

// const BookTitleText = styled(Text)`
//   font-weight: bold;
//   font-size: ${Fonts.fontLarge + 'px'};
// `

// const BookAuthorsText = styled(Text)`
//   margin: 0 0 20px 0;
//   font-size: ${Fonts.fontMedium + 'px'};
// `

// const BookRentalLink = styled(Link)`
//   color: ${Colors.accentColor};
//   font-weight: bold;
// `
// BookRentalLink.displayName = 'BookRentalLink';


export default BookInfo;
