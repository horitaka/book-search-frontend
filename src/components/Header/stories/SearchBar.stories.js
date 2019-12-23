import React from 'react';
import { MemoryRouter } from 'react-router'
import { action } from '@storybook/addon-actions';

import SearchBar from '../SearchBar';

export default {
  component: SearchBar,
  title: 'Header|SearchBar'
};

export const defaultComponent = () => (
  <SearchBar onSearchClicked={action('Search Button Clicked')}/>
)

const routerDecorator = story => (
  <MemoryRouter initialEntries={['/book-search']}>{story()}</MemoryRouter>
)

const styleDecorator = story => <div style={{ backgroundColor: 'gray', padding: '10px' }}>{story()}</div>

defaultComponent.story = {
  decorators: [routerDecorator, styleDecorator]
}
