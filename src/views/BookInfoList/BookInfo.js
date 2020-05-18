import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link'
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
  root: {
  },
  title: {
    fontWeight: 'bold',
  }

}));

function BookInfo({ bookInfo }) {
  const classes = useStyles();

  function generateStockStatus(isOwned, canBeRend) {
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
    <Grid container justify="flex-start" alignItems="flex-start">
      <Grid item xs={3}>
        <img src={bookInfo.imageUrl} alt={bookInfo.title} />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1" className={classes.title}>{bookInfo.title}</Typography> <br />
        <Typography variant="body2" >{Array.isArray(bookInfo.authors) && bookInfo.authors.join(', ')}</Typography>
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
