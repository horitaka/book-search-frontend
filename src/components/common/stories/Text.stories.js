import React from 'react';

import Text from '../Text';
import * as Colors from '../../../constants/Colors';

export default {
  component: Text,
  title: 'Parts|Text',
}

export const defaultComponent = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Text fontSize='xlarge' fontColor={Colors.primaryColor} flex={'0, 0, auto'}>XLARGE Text</Text>
      <Text fontSize='large' fontColor={Colors.primaryColor} flex={'0, 0, auto'}>LARGE Text</Text>
      <Text fontSize='medium' fontColor={Colors.primaryColor} flex={'0, 0, auto'}>MEDIUM Text</Text>
      <Text bold fontColor={Colors.primaryColor} flex={'0, 0, auto'}>BOLD Text</Text>
    </div>
  )
}
