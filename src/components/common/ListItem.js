import PropTypes from 'prop-types'
import styled from 'styled-components';

import * as Fonts from '../../constants/Fonts';

const ListItem = styled.li`
  flex: ${props => props.flex || '1 1 auto'};

  margin: ${props => props.margin || 0};
  padding: 0;

  font: 'black';
  font-size: ${Fonts.fontMedium};
`

ListItem.propTypes = {
  flex: PropTypes.string,
  margin: PropTypes.string,
}

export default ListItem;
