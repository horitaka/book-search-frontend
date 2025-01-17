import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import BookDetailLink from './BookDetailLink'
import defaultBookImage from '../../images/no-book-image.jpg'

const useStyles = makeStyles(theme => createStyles({
  root: {
    // minWidth: '600px',
  },
  title: {
    fontWeight: 'bold',
  },
  img: {
    maxWidth: '90%',
    height: 'auto'
  },
  link: {

  },
  linkDisabled: {
    color: theme.palette.text.disabled,
    cursor: 'auto',
  }

}));

const generateStockStatus = (isBooksStocksFetched, isTimeout, isbn, isOwned, canBeRend) => {
  if (isbn === 0) {
    return '蔵書なし'
  }

  if (isTimeout) {
    return '検索エラー'
  }

  if (!isBooksStocksFetched) {
    return '検索中'
  }

  if (!isOwned) {
    return '蔵書なし'
  }

  if (canBeRend) {
    return '貸出可'
  } else {
    return '貸出中'
  }

}

const BookLibraryStocks = (props) => {
  const { bookInfo } = props

  const amazonLink = `https://www.amazon.co.jp/gp/search?ie=UTF8&tag=booksearch0e3-22&linkCode=ur2&linkId=065e3e9f2b175cb20eb82ded8942cae1&camp=247&creative=1211&index=books&keywords=${bookInfo.isbn || bookInfo.title}`
  const rakutenLink = bookInfo.rakutenAffiliateUrl

  return (
    <List dense>
      {
        bookInfo.stocksByLibrary.map(stock => {
          const bookStockStatus = generateStockStatus(bookInfo.isBooksStocksFetched, bookInfo.isTimeout, bookInfo.isbn, stock.isOwned, stock.canBeRend);

          return (
            <ListItem key={stock.libraryId}>
              <BookDetailLink
                linkText={stock.libraryName + '　' + bookStockStatus}
                linkUrl={stock.bookRentalUrl}
                hasLink={stock.isOwned}
              />
            </ListItem>
          )
        })
      }
      <ListItem >
        <BookDetailLink
          linkText={'Amazon'}
          linkUrl={amazonLink}
          hasLink={true}
        />
      </ListItem>
      <ListItem >
        <BookDetailLink
          linkText={'楽天Books'}
          linkUrl={rakutenLink}
          hasLink={rakutenLink ? true : false}
        />
      </ListItem>
    </List>
  )
}

function BookInfo(props) {
  const { bookInfo } = props
  const classes = useStyles();

  const bookImage = bookInfo.imageUrl ? bookInfo.imageUrl : defaultBookImage;
  return (
    <Grid container justify="flex-start" alignItems="flex-start" spacing={1} className={classes.root}>
      <Grid item xs={3}>
        <img src={bookImage} alt={bookInfo.title} className={classes.img} />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="body1" className={classes.title}>{bookInfo.title}</Typography>
        <Typography variant="body2" >{Array.isArray(bookInfo.authors) && bookInfo.authors.join(', ')}</Typography>
        <BookLibraryStocks bookInfo={bookInfo} classes={classes} />
      </Grid>
    </Grid>
  );
}

// BookInfo.propTypes = {
//   bookInfo: PropTypes.shape({
//     imageUrl: PropTypes.string,
//     title: PropTypes.string,
//     authors: PropTypes.arrayOf(PropTypes.string),
//     isbn: PropTypes.number.isRequired,
//     stocksByLibrary: PropTypes.arrayOf(
//       PropTypes.shape({
//         libraryId: PropTypes.string.isRequired,
//         libraryName: PropTypes.string.isRequired,
//         bookRentalUrl: PropTypes.string,
//         isOwned: PropTypes.bool,
//         canBeRend: PropTypes.bool,
//       })
//     ),
//   }).isRequired
// }

export default BookInfo;
