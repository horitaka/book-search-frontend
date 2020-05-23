import { connect } from 'react-redux'

import ShareButtons from './ShareButtons';

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const ShareButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareButtons)

export default ShareButtonsContainer;
