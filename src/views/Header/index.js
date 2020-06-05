import { connect } from 'react-redux'

import Header from './Header'
import { booksOperations } from '../../state/modules/books'

const mapStateToProps = (state, ownProps) => {
  return {
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
