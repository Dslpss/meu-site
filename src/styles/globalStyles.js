import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    color: #00FF00;
    font-family: 'Courier New', monospace;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  #root {
    min-height: 100vh;
  }

  ::selection {
    background: rgba(0, 255, 0, 0.3);
    color: #00ff00;
    text-shadow: 0 0 8px rgba(0, 255, 0, 0.8);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #000;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #00ff00, #004400);
    border-radius: 10px;
    border: 3px solid #000;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #00dd00;
  }

  body {
    background: radial-gradient(circle at center, #001200 0%, #000000 100%);
  }
`;

//Removido para evitar conflitos com o tema definido em theme.js
// export const theme = {
//   primary: "#00FF00",
// };
