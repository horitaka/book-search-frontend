import { connect } from 'react-redux'

import UserLibraryList from './UserLibraryList';
import { userBookLibrariesOperations } from '../../../state/modules/user-book-libraries'

const mapStateToProps = (state, ownProps) => {
  return {
    libraryList: state.userBookLibraries,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteClicked: (library) => dispatch(userBookLibrariesOperations.deleteLibrary(library))
  }
}

const UserLibraryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLibraryList)

export default UserLibraryListContainer;
