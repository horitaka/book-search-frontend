import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from '../Input';


export default {
  component: Input,
  title: 'Parts|Input',
}

export const defaultComponent = () => (
  <Input type="text" placeholder="キーワードを入力" onChange={action('Text Change')}/>
)

// const styleDecorator = story => (<div style={{display: 'flex'}}>{story()}</div>)
// flexInput.story = {
//   decorators: [styleDecorator]
// }
