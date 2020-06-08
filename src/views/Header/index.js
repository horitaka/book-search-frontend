import { connect } from 'react-redux'

import Header from './Header'
import { booksOperations, booksSelectors } from '../../state/modules/books'

const mapStateToProps = (state, ownProps) => {
  return {
    isBooksSearching: state.books.isBooksSearching,
    isBooksStocksSearching: booksSelectors.getIsBooksStocksSearching(state),
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    runBookSearch: (searchQuery) => dispatch(booksOperations.runBookSearch(searchQuery))
  }
}

// const mergeProps = (stateProps, dispatchProps) => {
//   const dispatch = dispatchProps.dispatch
//   return {
//     searchBook: (keyword) => dispatch(booksOperations.searchBook(keyword, stateProps.userLibraryIDList))
//   }
// }

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  // mergeProps
)(Header)

export default HeaderContainer
