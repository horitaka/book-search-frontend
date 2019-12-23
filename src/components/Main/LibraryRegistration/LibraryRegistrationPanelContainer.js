import { connect } from 'react-redux'

import LibraryRegistrationPanel from './LibraryRegistrationPanel'
import { addLibrary, searchLibrary, changeKeyword } from '../../../actions';
import { getLibraryList } from '../../../selectors'

const mapStateToProps = (state, ownProps) => {
  return {
    isInitialState: state.libraryRegistration.isInitialState,
    isSucceededRegistration: state.libraryRegistration.isSucceededRegistration,
    libraryList: getLibraryList(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLibraryAddClickd: (library) => dispatch(addLibrary(library)),
    onPrefSelected: (prefecture) => dispatch(searchLibrary(prefecture)),
    onKeywordChanged: (keyword) => dispatch(changeKeyword(keyword))
  }
}

const LibraryRegistrationPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LibraryRegistrationPanel)

export default LibraryRegistrationPanelContainer;
