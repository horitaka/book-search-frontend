import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BookInfo from './BookInfo';
import List from '../../common/List';
import ListItem from '../../common/ListItem';
import Container from '../../common/Container';
import Box from '../../common/Box';
import Text from '../../common/Text';
import Loading from '../../common/Loading'

function BookInfoList(props) {
  const {bookInfoList, isSearching, isSucceededSearch} = props;
  if (isSearching) {
    return (<Loading />)
  }

  if (!isSucceededSearch) {
    return <Text margin={'20px'}>検索に失敗しました</Text>
  }

  if(bookInfoList.length === 0) {
    return <Text margin={'20px'}>検索結果が0件です</Text>
  }

  return (
    <Container direction={'row'} justifyContent={'center'} alignItems={'stretch'}>
      <Box flex={'1 0 auto'} maxWidth={'600px'}>
        <Container direction={'column'} justifyContent={'flex-start'} alignItems={'stretch'}>
          <Box flex={'0 0 auto'}>
            <StyledList>
              {bookInfoList.map(bookInfo => (
                <ListItem  key={bookInfo.isbn}>
                  <BookInfo bookInfo={bookInfo}/>
                  <hr/>
                </ListItem>
              ))}
            </StyledList>
          </Box>
        </Container>
      </Box>
    </Container>

  );

}

const StyledList = styled(List)`
  margin: 10px;
`

BookInfoList.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  isSucceededSearch: PropTypes.bool.isRequired,
  bookInfoList: PropTypes.arrayOf(BookInfo.propTypes.bookInfo).isRequired,
}

export default BookInfoList;
