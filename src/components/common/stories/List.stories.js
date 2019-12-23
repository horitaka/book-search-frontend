import React from 'react';

import List from '../List';
import ListItem from '../ListItem';

export default {
  component: List,
  title: 'Parts|List',
}

export const defaultComponent = () => {
  const items = ['item1', 'item2', 'item3'];
  return (
    <List>
      {items.map(item => <ListItem key={item}>{item}</ListItem>)}
    </List>
  )
}
