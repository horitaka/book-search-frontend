import React from 'react';
import styled from 'styled-components';

import SearchBarContainer from './SearchBarContainer'
import Container from '../common/Container';
import Box from '../common/Box'
import Text from '../common/Text';
import * as Colors from '../../constants/Colors'
import * as Fonts from '../../constants/Fonts';

function AppHeader() {
  return(
    <Box flex={'0 0 150px'} backgroundColor={Colors.primaryColor}>
      <Container direction={'row'} justifyContent={'center'} alignItems={'center'}>
        <TitleText>複数の図書館から本の検索</TitleText>
        <SearchBarContainer/>
      </Container>
    </Box>
  )
}

const TitleText = styled(Text)`
  flex: 0 0 auto;
  margin: 20px 20px;
  font-size: ${Fonts.fontXLarge + 'px'};
  color: white;
  font-weight: bold;
`

export default AppHeader
