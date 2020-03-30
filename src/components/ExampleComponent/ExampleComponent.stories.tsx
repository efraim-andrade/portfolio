import React from 'react';
import { text } from '@storybook/addon-knobs';

import ExampleComponent from './index';

export default {
  title: 'ExampleComponent',
};

export const normal = () => {
  const title = text('Title', 'Titulo da página');

  return <ExampleComponent title={title} />;
};

export const anotherColor = () => {
  const title = text('Title', 'Titulo da página');

  return <ExampleComponent title={title} color="#f55" />;
};
