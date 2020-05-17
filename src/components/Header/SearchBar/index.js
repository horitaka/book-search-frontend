import { connect } from 'react-redux'

import SearchBar from './SearchBar'
import { searchBook } from '../../../actions'
import { getLibraryIDList } from '../../../selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    userLibraryIDList: getLibraryIDList(state),
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
    searchBook: (keyword) => dispatch(searchBook(keyword, stateProps.userLibraryIDList))
  }
}

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SearchBar)

export default SearchBarContainer
