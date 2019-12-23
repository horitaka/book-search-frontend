import React from 'react'
import PropTypes from 'prop-types';

import LibraryRegistrationPanelHeader from './LibraryRegistrationPanelHeader'
import LibraryList from './LibraryList';
import Container from '../../common/Container';
import Box from '../../common/Box';

function LibraryRegistrationPanel(props) {
  const {isInitialState, isSucceededRegistration, libraryList, onLibraryAddClickd, onPrefSelected, onKeywordChanged} = props

  return(
    <Container direction={'row'} justifyContent={'center'} alignItems={'stretch'}>
      <Box flex={'1 1 auto'} maxWidth={'400px'} margin={'10px 0'}>
        <Container direction={'column'} justifyContent={'flex-start'} alignItems={'stretch'}>
          <LibraryRegistrationPanelHeader
            onPrefSelected={onPrefSelected}
            onKeywordChanged={onKeywordChanged}
          />
          <LibraryList
            libraryList={libraryList}
            onLibraryAddClickd={onLibraryAddClickd}
            isInitialState={isInitialState}
            isSucceededRegistration={isSucceededRegistration}
        />
        </Container>
      </Box>
    </Container>
  )
}

LibraryRegistrationPanel.propTypes = {
  isInitialState: PropTypes.bool.isRequired,
  isSucceededRegistration: PropTypes.bool.isRequired,
  libraryList: LibraryList.propTypes.libraryList,
  onLibraryAddClickd: PropTypes.func.isRequired,
  onPrefSelected: PropTypes.func.isRequired,
  onKeywordChanged: PropTypes.func.isRequired,
}

export default LibraryRegistrationPanel;
