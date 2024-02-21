import { createGlobalStyle } from 'styled-components';
import { colors } from '../Theme/colors';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    color: ${colors.defaultText};
    background-color: ${colors.primaryBg};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

 

  *, *::before, *::after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  #root{
    max-width: 1280px;
    width:100%;
  }
`;