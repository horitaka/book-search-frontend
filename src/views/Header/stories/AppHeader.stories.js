import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router'

import AppHeader from '../AppHeader';
import { libraryList } from '../../Navigation/stories/UserLibraryList.stories';


export default {
  component: AppHeader,
  title: 'Header|AppHeader'
};

export const defaultComponent = () => (
  <AppHeader />
)

const routerDecorator = story => (
  <MemoryRouter initialEntries={['/book-search']}>{story()}</MemoryRouter>
)

const store = {
  getState: () => {
    return {
      libraryRegistration: {
        libraryList: libraryList,
        isInitialState: false,
        isSucceededRegistration: false
      },
      userLibraryList: libraryList,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

const providerDecorator = story => (
  <Provider store={store}>{story()}</Provider>
)

defaultComponent.story = {
  decorators: [providerDecorator, routerDecorator]
}
