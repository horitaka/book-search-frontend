import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import Select from '../../common/Select';
import Input from '../../common/Input';
import Container from '../../common/Container';
import Box from '../../common/Box';
import { prefectureList } from './PrefectureList'

function LibraryRegistrationPanelHeader({onPrefSelected, onKeywordChanged}) {
  const defaultPrefecutre = '東京都'
  let prefectureOptions = prefectureList.map(prefecture => {
    const isDefault = prefecture === defaultPrefecutre;
    return ({
      value: prefecture,
      label: prefecture,
      isDefault: isDefault,
    })
  })

  const onKeywordChangedDebounced = debounce(onKeywordChanged, 500);

  useEffect(() => {
    onPrefSelected(defaultPrefecutre)
  }, [onPrefSelected]);

  function handlePrefSelected(event) {
    const prefecture = event.target.value;
    onPrefSelected(prefecture)
  }

  function handleKeywordChange(keyword) {
    onKeywordChangedDebounced(keyword);
  }

  return(
    <Box flex={'0 1 auto'}>
      <Container direction={'row'} justifyContent={'center'} alignItems={'center'}>
        <Select options={prefectureOptions} onSelected={handlePrefSelected} margin={'0 5px 0 0'}/>
        <Input type="text" placeholder="図書館を検索..." onChange={handleKeywordChange}/>
      </Container>
    </Box>
  )
}

LibraryRegistrationPanelHeader.propTypes = {
  onPrefSelected: PropTypes.func.isRequired,
  onKeywordChanged: PropTypes.func.isRequired,
}


export default LibraryRegistrationPanelHeader;
