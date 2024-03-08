import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 67.5%;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body { 
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
  }
`;