import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/index.css';
// import { libraryList } from '../src/components/Navigation/UserLibraryList.stories'

// const store = {
//   getState: () => {
//     return {
//       libraryRegistration: {
//         libraryList: libraryList,
//         isInitialState: false,
//         isSucceededRegistration: false
//       }
//     };
//   },
//   subscribe: () => 0,
//   dispatch: action('dispatch'),
// };
// addDecorator(story => <Provider store={store}>{story()}</Provider>);

const req = requireContext('../src', true, /\.stories\.js$/);
configure(req, module);
