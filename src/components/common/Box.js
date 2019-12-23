import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  box-sizing: border-box;

  flex: ${props => props.flex || '1 0 auto'};
  max-width: ${props => props.maxWidth || ''};

  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'});
  background-color: ${props => props.backgroundColor || ''};
`

Box.propTypes = {
  flex: PropTypes.string,
  maxWidth: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
}

export default Box;
