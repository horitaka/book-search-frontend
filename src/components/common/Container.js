import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  flex-wrap: ;

  flex: ${props => props.flex || '1 1 auto'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};

  background-color: ${props => props.backgroundColor || ''};
`

Container.propTypes = {
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'colmn-reverse']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline']),
  flex: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
}

export default Container;
