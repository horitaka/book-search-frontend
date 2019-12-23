import React from 'react';
import { action } from '@storybook/addon-actions';

import Select from '../Select';

const options = [{
  value: 'value1',
  label: 'label1',

},{
  value: 'value2',
  label: 'label2'
},{
  value: 'value3',
  label: 'label3'
}]

export default {
  component: Select,
  title: 'Parts|Select',
};

export const defaultComponent = () => (
  <Select options={options} onSelected={action('Select')}/>
)
