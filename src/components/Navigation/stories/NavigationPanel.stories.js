import React from 'react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router'
import { action } from '@storybook/addon-actions';

import NavigationPanel from '../NavigationPanel'
import { libraryList } from './UserLibraryList.stories';

export default {
  title: 'Navigation|NavigationPanel',
  component: NavigationPanel,
}

export const defaultComponent = () => (
  <NavigationPanel />
)

export const noLibrary = () => (
  <NavigationPanel />
)

const routerDecorator = story => (
  <MemoryRouter initialEntries={['library-registration']}>{story()}</MemoryRouter>
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

const storeNoLibrary = {
  getState: () => {
    return {
      libraryRegistration: {
        libraryList: [],
        isInitialState: false,
        isSucceededRegistration: false
      },
      userLibraryList: [],
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

const providerDecorator = story => (
  <Provider store={store}>{story()}</Provider>
)

const providerNoLibraryDecorator = story => (
  <Provider store={storeNoLibrary}>{story()}</Provider>
)

defaultComponent.story = {
  decorators: [providerDecorator, routerDecorator]
}

noLibrary.story = {
  decorators: [providerNoLibraryDecorator, routerDecorator]
}
