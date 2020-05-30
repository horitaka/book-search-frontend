import { connect } from 'react-redux'

import BookInfoList from './BookInfoList';
import { booksSelectors } from '../../state/modules/books'

const mapStateToProps = (state, ownProps) => {
  return {
    bookItemsAndStocks: booksSelectors.getBookItemsAndStocks(state),
    isSearching: state.books.isSearching,
    isBooksStocksSearching: state.books.isBooksStocksSearching,
    isSucceededSearch: state.books.isSucceededSearch,
    isInitialState: state.books.isInitialState,
  };
}

const BookInfoListContainer = connect(
  mapStateToProps
)(BookInfoList)

export default BookInfoListContainer;
