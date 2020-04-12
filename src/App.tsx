import React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import GlobalStyles from '~/theme/global';
import { dark, light, ThemeContext } from '~/theme';
import usePersistedState from '~/functions/hooks/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

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
