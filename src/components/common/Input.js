import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as Colors from '../../constants/Colors';
import * as Fonts from '../../constants/Fonts';

function Input(props) {
  const {type, placeholder, onChange, flex} = props;
  const [value, setValue] = useState('')

  function handleKeywordChange(event) {
    const value = event.target.value;
    setValue(value);
    onChange(value)
  }

  return (
    <StyledInput
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      flex={flex}
      onChange={handleKeywordChange}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  flex: PropTypes.string,
}

const StyledInput = styled.input`

  flex: ${props => props.flex || '1 0 auto'};
  margin: 0;
  padding: 5px;
  border: 1px solid ${Colors.primaryColor};
  border-radius: ;
  :focus {
    border: 1px solid ${Colors.accentColor};
    outline: 0;
  }

  font: ${Fonts.fontFamily};
  font-size: ${Fonts.fontLarge};
`

export default Input;
