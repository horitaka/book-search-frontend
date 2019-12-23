import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Fonts from '../../constants/Fonts';
import * as Colors from '../../constants/Colors';


const Link = styled.a`
  flex: ${props => props.flex || '1 0 auto'};

  margin: 0;
  padding: 0;
  line-height: 2em;

  fontFamily: ${Fonts.fontFamily};
  font-size: ${Fonts.fontMedium}px;
  font-weight: ${props => props.bold ? 'bold' : 'nomarl'}
  color: ${props => props.fontColor || 'black'};
  text-decoration: none;
  :hover {
    color: ${Colors.primaryColor};
  }
`
Link.propTypes = {
  href: PropTypes.string,
  fontColor: PropTypes.string,
  bold: PropTypes.bool,
}

export default Link;
