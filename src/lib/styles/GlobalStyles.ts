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
	  background-image: url('assets/background-stars.svg');
    background-color: ${({ theme }) => theme.colors.federalBlue};
    
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.spartan};
    color: ${({ theme }) => theme.colors.slightGrey};

    @media (min-width: 1024px) {
      font-size: 1.7rem;
    }
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.fonts.antonio};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
	  letter-spacing: 2px;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.spartan};
    color: ${({ theme }) => theme.colors.slightGrey};
  }

  p {
    line-height: 1.6;
  }

  li {
    list-style-type: none;
  }

  a {
    color: ${({ theme }) => theme.colors.slightGrey};
    text-decoration: none;
  }
`;
