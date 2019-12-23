import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import UserLibraryListContainer from './UserLibraryListContainer';
import Container from '../common/Container';
import Text from '../common/Text';
import Box from '../common/Box';
import * as Colors from '../../constants/Colors'
import * as Fonts from '../../constants/Fonts'

function NavigationPanel() {
  return (
    <Box flex={'0 0 300px'}>
      <Container direction={'row'} justifyContent={'flex-start'} alignItems={'stretch'}>
        <Container direction={'column'} justifyContent={'flex-start'} alignItems={'stretch'}>
          <HeaderText>登録済みの図書館</HeaderText>
          <UserLibraryListContainer />
          <StyledLink to="library-registration">図書館を登録</StyledLink>
        </Container>
        <VerticalLine />
      </Container>
    </Box>
  );
}

const VerticalLine = styled.div`
  background-color: gray;
  width:2px;
  flex-grow: 1;
  margin: 10px 0;
`

const StyledLink = styled(Link)`
  flex: 0 0 auto;
  height: ;
  margin: 10px 10px 10px 20px;
  padding: 0;
  border-radius: 3px;
  outline: none;
  border: none;
  text-decoration: none;

  :active {
    background: ;
    color: ${Colors.primaryColor};
    outline: none;
  }

  font-size: ${Fonts.fontLarge}px;
  color: ${Colors.accentColor};
`

const HeaderText = styled(Text)`
  flex: 0 0 auto;
  margin: 10px;
  font-size: ${Fonts.fontLarge + 'px'};
  font-weight: bold;
`

export default NavigationPanel;
