import React, { useState} from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Colors from '../../constants/Colors';
import * as Fonts from '../../constants/Fonts';

function Select(props) {
  const {options, onSelected, flex, margin} = props;

  const defaultOption = options.find(option => option.isDefault);
  const defaultValue = defaultOption ? defaultOption.value : '';
  const [selectedOption, setOption] = useState(defaultValue);

  function handleSelect(event) {
    const item = event.target.value;
    setOption(item)
    onSelected(event)
  }

  return(
    <StyledSelect value={selectedOption} onChange={handleSelect} flex={flex} margin={margin}>
      { options.map( option => <option  disabled={option.disabled} value={option.value} key={option.value}>{option.label}</option>)}
    </StyledSelect>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      disabled: PropTypes.bool,
      isDefault: PropTypes.bool,
    })).isRequired,
  onSelected: PropTypes.func.isRequired,
  flex: PropTypes.string,
}

const StyledSelect = styled.select`
  box-sizing: border-box;

  flex: ${props => props.flex || '1 0 auto'};
  width: auto;
  margin: ${props => props.margin || 0};
  padding: 5px;
  background-color: transparent;
  border-radius: 3px;
  outline: none;
  border: slod 1px ${Colors.primaryColor};

  :active {
    background: ${Colors.secondoryColor};
    outline: none;
  }

  font-size: ${Fonts.fontMedium}px;
  color: black;
`


export default Select;
