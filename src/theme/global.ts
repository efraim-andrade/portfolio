import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    color: ${({ theme }) => theme.colors.text};
    outline: 0
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;

    /* a cada 1rem será considera 10px */
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }

  body, input, button {
    font: 1.6rem 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
