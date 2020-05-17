import { connect } from 'react-redux'

import UserLibraryList from './UserLibraryList';
import { deleteLibrary } from '../../../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    libraryList: state.userLibraryList,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteClicked: (library) => dispatch(deleteLibrary(library))
  }
}

const UserLibraryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLibraryList)

export default UserLibraryListContainer;
