import React from 'react';
import { action } from '@storybook/addon-actions';

import LibraryRegistrationPanelHeader from '../LibraryRegistrationPanelHeader';

export default {
  component: LibraryRegistrationPanelHeader,
  title: 'LibrarySearch|LibraryRegistrationPanelHeader',
};

export const defaultComponent = () => (
  <LibraryRegistrationPanelHeader
    onPrefSelected={action('Prefectural Select')}
    onCitySelected={action('City Select')}
    onKeywordChanged={action('Keyword Change')}
  />
)
