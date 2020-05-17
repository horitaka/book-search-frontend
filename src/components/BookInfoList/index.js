import { connect } from 'react-redux'

import BookInfoList from './BookInfoList';
import { getBookInfoList } from '../../selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    bookInfoList: getBookInfoList(state),
    isSearching: state.bookSearch.isSearching,
    isSucceededSearch: state.bookSearch.isSucceededSearch,
    isInitialState: state.bookSearch.isInitialState,
  };
}

const BookInfoListContainer = connect(
  mapStateToProps
)(BookInfoList)

export default BookInfoListContainer;
