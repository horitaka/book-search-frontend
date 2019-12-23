import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as Fonts from '../../constants/Fonts'

const Text = styled.div`
  flex: ${props => props.flex || '1 0 auto'};

  margin: ${props => props.margin || 0};
  padding: ${props => props.padding || 0};

  font-weight: ${props => props.bold ? 'bold' : 'normal'}
  font-size: ${props => getFontSize(props.fontSize)};
  color: ${props => props.fontColor || 'black'};
`
Text.displayName = 'Text';

Text.propTypes = {
  flex: PropTypes.string,
  bold: PropTypes.bool,
  margin: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.oneOf(['xlarge', 'large', 'medium']),
  fontColor: PropTypes.string,
}

function getFontSize(fontSizeByCategory) {
  switch (fontSizeByCategory) {
    case 'xlarge':
      return Fonts.fontXLarge+'px';
    case 'large':
      return Fonts.fontLarge+'px';
    case 'medium':
    default:
      return Fonts.fontMedium+'px';
  }
}

export default Text;
