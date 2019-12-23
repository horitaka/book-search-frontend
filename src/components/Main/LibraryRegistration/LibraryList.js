import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

import Link from '../../common/Link'
import Container from '../../common/Container';
import Box from '../../common/Box';
import List from '../../common/List';
import ListItem from '../../common/ListItem';
import Button from '../../common/Button';
import Text from '../../common/Text'
import { showToast } from '../../common/Toast';
import * as Fonts from '../../../constants/Fonts';

function LibraryList(props) {
  const {libraryList, onLibraryAddClickd, isInitialState} = props;
  if (isInitialState) {
    return null;
  }

  const libraryListItem = libraryList.map(library => {
    return (
      <LibraryListItem key={library.libraryID}>
        <Container direction={'row'} justifyContent={'center'} alignItems={'center'}>
          <Container direction={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}>
            <LibraryLink href={library.librarySiteUrl}>{library.libraryName}</LibraryLink>
            <LibraryBranchText>{library.branches.join(', ')}</LibraryBranchText>
          </Container>
          { library.isRegistered
            ? <AddButton disabled>登録済み</AddButton>
            : <AddButton onClick={() => handleLibraryAddClick(library)}>登録</AddButton> }
        </Container>
      </LibraryListItem>
    )})


  function handleLibraryAddClick (library) {
    showToast('登録しました')
    onLibraryAddClickd(library);
  }


  return (
    <Box flex={'0 1 auto'}>
      {libraryList.length !== 0
        ? <List>{libraryListItem}</List>
        : <InstructionText>検索結果が0件です</InstructionText>}
    </Box>
    );
}

LibraryList.propTypes = {
  libraryList: PropTypes.arrayOf(
    PropTypes.shape({
      libraryID: PropTypes.string.isRequired,
      libraryName: PropTypes.string.isRequired,
      prefecture: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      librarySiteUrl: PropTypes.string.isRequired,
      branches: PropTypes.arrayOf(PropTypes.string).isRequired,
      isRegistered: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLibraryAddClickd: PropTypes.func.isRequired,
  isInitialState: PropTypes.bool.isRequired,
}

const InstructionText = styled(Text)`
  margin: 20px 10px;
`
InstructionText.displayName = 'InstructionText';

const LibraryListItem = styled(ListItem)`
  margin: 15px 0;
`

const LibraryLink = styled(Link)`
  flex: 1 0 auto;
`
LibraryLink.displayName = 'LibraryLink';

const LibraryBranchText = styled(Text)`
  font-size: ${Fonts.fontSmall + 'px'};
  color: rgb(50, 50, 50);
`
LibraryBranchText.displayName = 'LibraryBranchText';

const AddButton = styled(Button)`
  flex: 0 0 6em;
  margin-left: 10px;
  padding: 5px 10px;
`
AddButton.displayName = 'AddButton';

export default LibraryList;
