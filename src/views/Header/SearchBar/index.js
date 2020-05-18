import { connect } from 'react-redux'

import SearchBar from './SearchBar'
import { booksOperations } from '../../../state/modules/books'
import { userBookLibrariesSelectors } from '../../../state/modules/user-book-libraries'

const mapStateToProps = (state, ownProps) => {
  return {
    userLibraryIDList: userBookLibrariesSelectors.getLibraryIDList(state),
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: dispatch
  }
}

const mergeProps = (stateProps, dispatchProps) => {
  const dispatch = dispatchProps.dispatch
  return {
    searchBook: (keyword) => dispatch(booksOperations.searchBook(keyword, stateProps.userLibraryIDList))
  }
}

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SearchBar)

export default SearchBarContainer
