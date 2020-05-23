import { connect } from 'react-redux'

import Header from './Header'
import { booksOperations } from '../../state/modules/books'
import { userBookLibrariesSelectors } from '../../state/modules/user-book-libraries'

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

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Header)

export default HeaderContainer
