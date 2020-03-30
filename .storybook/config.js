import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withPropsTable } from 'storybook-addon-react-docgen';

import GlobalStyle from '../src/theme/global';

configure(require.context('../src', true, /\.stories\.tsx$/), module);

addDecorator(withKnobs);
addDecorator(withPropsTable);
addDecorator(story => (
  <>
    <GlobalStyle />

    {story()}
  </>
));
