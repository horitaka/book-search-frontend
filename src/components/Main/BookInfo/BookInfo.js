import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from '../../common/Link'
import Container from '../../common/Container';
import Box from '../../common/Box';
import Text from '../../common/Text';
import List from '../../common/List';
import ListItem from '../../common/ListItem';
import * as Colors from '../../../constants/Colors'
import * as Fonts from '../../../constants/Fonts'

function BookInfo({bookInfo}) {

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
      <Container direction={'row'} justifyContent={'flex-start'} alignItems={'flex-start'}>
        <Box flex={'1 1 150px'}>
          <img src={bookInfo.imageUrl} alt={bookInfo.title}/>
        </Box>
        <Box flex={'3 1 450px'}>
          <BookTitleText>{bookInfo.title}</BookTitleText> <br/>
          <BookAuthorsText>{Array.isArray(bookInfo.authors) && bookInfo.authors.join(', ')}</BookAuthorsText>
          <List>
            {
              bookInfo.stockByLibrary.map(stock => {
                const bookStockStatus = generateStockStatus(stock.isOwned, stock.canBeRend);
                return (
                  <ListItem key={stock.libraryID}>
                    <Container direction={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                      <LibraryNameText>{stock.libraryName}</LibraryNameText>
                      <Box flex={'1 1 0'}>
                        {stock.isOwned
                          ? <BookRentalLink href={stock.bookRentalUrl} target="_blank" rel="noreferrer noopener" >{bookStockStatus}</BookRentalLink>
                          : <Text>{bookStockStatus}</Text>}
                      </Box>
                    </Container>
                  </ListItem>
                )
              })
            }
          </List>
        </Box>
      </Container>
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

const LibraryNameText = styled(Text)`
  flex: 2 1 0;
  font-size: ${Fonts.fontMedium};
`

const BookTitleText = styled(Text)`
  font-weight: bold;
  font-size: ${Fonts.fontLarge + 'px'};
`

const BookAuthorsText = styled(Text)`
  margin: 0 0 20px 0;
  font-size: ${Fonts.fontMedium + 'px'};
`

const BookRentalLink = styled(Link)`
  color: ${Colors.accentColor};
  font-weight: bold;
`
BookRentalLink.displayName = 'BookRentalLink';


export default BookInfo;
