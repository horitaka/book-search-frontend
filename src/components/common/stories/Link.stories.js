import React from 'react';

import Link from '../Link';
import * as Colors from '../../../constants/Colors';

export default {
  component: Link,
  title: 'Parts|Link',
}

export const defaultComponent = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
  return (
    <div style={style}>
      <Link href={'http://yahoo.co.jp'} fontColor={Colors.primaryColor} bold={true}>Yahoo</Link>
      <Link href={'http://yahoo.co.jp'} fontColor={Colors.accentColor}>Yahoo</Link>
    </div>
  )
}
