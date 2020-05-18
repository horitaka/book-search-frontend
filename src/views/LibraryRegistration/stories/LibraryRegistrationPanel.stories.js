import React from 'react';
import { action } from '@storybook/addon-actions';

import LibraryRegistrationPanel from '../LibraryRegistrationPanel'
import { libraryList } from './LibraryList.stories'

export default {
  component: LibraryRegistrationPanel,
  title: 'LibrarySearch|LibraryRegistrationPanel'
}

export const defaultComponent = () => (
  <LibraryRegistrationPanel
    isInitialState={false}
    isSucceededRegistration={false}
    libraryList={libraryList}
    onLibraryAddClickd={action('Library Add')}
    onPrefSelected={action('Prefectural Select')}
    onCitySelected={action('City Select')}
    onKeywordChanged={action('Keyword Change')}
  />
)

export const initialState = () => (
  <LibraryRegistrationPanel
    isInitialState={true}
    isSucceededRegistration={false}
    libraryList={libraryList}
    onLibraryAddClickd={action('Library Add')}
    onPrefSelected={action('Prefectural Select')}
    onCitySelected={action('City Select')}
    onKeywordChanged={action('Keyword Change')}
  />
)

export const succeededRegistration = () => (
  <LibraryRegistrationPanel
    isInitialState={false}
    isSucceededRegistration={true}
    libraryList={libraryList}
    onLibraryAddClickd={action('Library Add')}
    onPrefSelected={action('Prefectural Select')}
    onCitySelected={action('City Select')}
    onKeywordChanged={action('Keyword Change')}
  />
)
