import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import { dark, light, ThemeContext } from '~/theme';
import GlobalStyles from '~/theme/global';

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Routes />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default hot(module)(App);
