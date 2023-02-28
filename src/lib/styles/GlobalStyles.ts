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
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.fonts.spartan};
    
    background-color: ${({ theme }) => theme.colors.darkBlue};
	  background-image: url('assets/background-stars.svg');
    
    color: ${({ theme }) => theme.colors.white};
    
    @media (min-width: 768px) {
      font-size: 1.6rem;
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
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`;
