import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import BookInfoList from './BookInfoList';
import { booksOperations, booksSelectors } from '../../state/modules/books'

const mapStateToProps = (state, ownProps) => {
  return {
    bookItemsAndStocks: booksSelectors.getBookItemsAndStocks(state),
    isSearching: state.books.isSearching,
    isBooksSearching: state.books.isBooksSearching,
    // isSucceededSearch: state.books.isSucceededSearch,
    isInitialState: state.books.isInitialState,
    error: state.books.error,
    shouldShowNextButton: booksSelectors.getShouldShowNextButton(state),
    userBookLibraries: state.userBookLibraries,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(booksOperations.fetchBooks())
  }
}

const BookInfoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookInfoList)

export default withRouter(BookInfoListContainer);
