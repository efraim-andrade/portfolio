import React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import light from '~/theme/light';
import GlobalStyles from '~/theme/global';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />

      <Routes />
    </ThemeProvider>
  );
}

export default hot(module)(App);
