import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from '../common/Container'
import List from '../common/List'
import ListItem from '../common/ListItem'
import Link from '../common/Link'
import Text from '../common/Text'
import Button from '../common/Button'
import * as Fonts from '../../constants/Fonts';
import { showToast } from '../common/Toast';

function UserLibraryList({libraryList, onDeleteClicked}) {

  function handleDeleteClick (library) {
    showToast('削除しました');
    onDeleteClicked(library);
  }

  if (libraryList.length === 0) {
    return (<Text>図書館が登録されていません</Text>)
  }

  return (
    <LibraryList>
      {libraryList.map(library => (
        <LibraryListItem key={library.libraryID}>
          <Container direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <Container direction={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}>
              <LibraryLink href={library.librarySiteUrl} target="_blank" rel="noreferrer noopener">{library.libraryName}</LibraryLink>
              <LibraryBranchText>{library.branches.join(', ')}</LibraryBranchText>
            </Container>
            <DeleteButton onClick={() => handleDeleteClick(library)}>削除</DeleteButton>
          </Container>
        </LibraryListItem>
      ))}
    </LibraryList>
  );
}

UserLibraryList.propTypes = {
  libraryList: PropTypes.arrayOf(
    PropTypes.shape({
      libraryID: PropTypes.string.isRequired,
      libraryName: PropTypes.string.isRequired,
      prefecture: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      librarySiteUrl: PropTypes.string.isRequired,
      isRegistered: PropTypes.bool.isRequired,
    })
  ).isRequired,
}

const LibraryList = styled(List)`
  flex: 0 0 auto;
  margin: 10px 10px 10px 20px;
`
LibraryList.displayName = 'LibraryList'

const LibraryBranchText = styled(Text)`
  font-size: ${Fonts.fontSmall + 'px'};
  color: rgb(50, 50, 50);
`
LibraryBranchText.displayName = 'LibraryBranchText';

const LibraryListItem = styled(ListItem)`
  margin: 10px 0px;
`
LibraryListItem.displayName = 'LibraryListItem';

const LibraryLink = styled(Link)`
  flex: 1 0 auto;
`
LibraryLink.displayName = 'LibraryLink';

const DeleteButton = styled(Button)`
  flex: 0 0 4em;
  padding: 5px 10px;
`
DeleteButton.displayName = 'DeleteButton';

export default UserLibraryList;
