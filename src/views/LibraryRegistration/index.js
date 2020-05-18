import { connect } from 'react-redux'

import LibraryRegistration from './LibraryRegistration'
import { userBookLibrariesOperations } from '../../state/modules/user-book-libraries';
import { bookLibrariesOperations } from '../../state/modules/book-libraries';
import { bookLibrariesSelectors } from '../../state/modules/book-libraries'

const mapStateToProps = (state, ownProps) => {
  return {
    isInitialState: state.bookLibraries.isInitialState,
    isSucceededRegistration: state.bookLibraries.isSucceededRegistration,
    libraryList: bookLibrariesSelectors.getLibraryList(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLibraryAddClickd: (library) => dispatch(userBookLibrariesOperations.addLibrary(library)),
    onPrefSelected: (prefecture) => dispatch(bookLibrariesOperations.searchLibrary(prefecture)),
    onKeywordChanged: (keyword) => dispatch(bookLibrariesOperations.changeKeyword(keyword))
  }
}

const LibraryRegistrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryRegistration)

export default LibraryRegistrationContainer;
