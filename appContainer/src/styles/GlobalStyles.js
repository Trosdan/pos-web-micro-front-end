import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0 auto;
  max-width: 700px;
  padding: 0 8px;

    background-color: #262626;
  }
  
  * {
    font-family: 'Roboto', sans-serif;
    color: white;
  }
`;
