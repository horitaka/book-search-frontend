import { connect } from 'react-redux'

import BookInfoList from './BookInfoList';
import { booksSelectors } from '../../state/modules/books'

const mapStateToProps = (state, ownProps) => {
  return {
    bookInfoList: booksSelectors.getBookInfoList(state),
    isSearching: state.books.isSearching,
    isSucceededSearch: state.books.isSucceededSearch,
    isInitialState: state.books.isInitialState,
  };
}

const BookInfoListContainer = connect(
  mapStateToProps
)(BookInfoList)

export default BookInfoListContainer;
