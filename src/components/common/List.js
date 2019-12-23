import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  flex: ${props => props.flex || '1 1 auto'};

  margin: 0;
  padding: 0;

  list-style: none;
`

List.propTypes = {
  flex: PropTypes.string,
}

export default List;
