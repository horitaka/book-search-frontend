import React from 'react';

import {Toast, showToast} from '../Toast';

export default {
  component: Toast,
  title: 'Parts|Toast',
}

export const defaultComponent = () => (
  <div>
    <button onClick={() => showToast('Toast')}>Show Toast</button>
    <Toast />
  </div>
)
