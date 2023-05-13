import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      font-size: 62.5%;
      overflow-x: hidden;
  }

  body {
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white}
  }

  a {
      text-decoration: none;
  }

  button {
  cursor: pointer;
  }

  ul,
  li {
      list-style: none;
  }`;
