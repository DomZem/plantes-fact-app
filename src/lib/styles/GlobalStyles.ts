import { createGlobalStyle } from 'styled-components';
import { themeType } from './../types/theme';

export const GlobalStyle = createGlobalStyle<{ theme: themeType }>`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.fonts.spartan};
     
    @media (min-width: 1024px) {
      font-size: 1.4rem;
    }
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.fonts.antonio};
  }

  h3, h4 {
    font-family: ${({ theme }) => theme.fonts.spartan};
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
