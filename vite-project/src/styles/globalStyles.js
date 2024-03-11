import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 70px; 
    background-color: ${({ theme }) => theme === 'dark' ? '#333' : '#FFF'};
    color: ${({ theme }) => theme === 'dark' ? '#FFF' : '#333'};
  }
`;
