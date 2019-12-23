import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Colors from '../../constants/Colors';
import * as Fonts from '../../constants/Fonts';

const Button = styled.button`
  box-sizing: border-box;

  width: 100%;
  height: ;
  flex: ${props => props.flex || '1 0 auto'};

  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  background-color: ${props => props.disabled ? 'gray' : Colors.primaryColor};
  border-radius: 3px;
  outline: none;
  border: none;

  :active {
    background: ${Colors.secondoryColor};
    outline: none;
  }

  font-family: ${Fonts.fontFamily};
  font-size: ${Fonts.fontMedium}px;
  color: ${Colors.primaryFontColor};
`

Button.propTypes = {
  flex: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
}

export default Button;
