import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  :root {

    --font-type-rokkit: 'Rokkitt', serif;

    --font-size-xsmall: 12px;
    --font-size-small: 14px;
    --font-size-standart: 16px;
    --font-size-medium: 18px;
    --font-size-large: 22px;
    --font-size-xlarge: 26px;
      
    --font-w-thin: 100;
    --font-w-xlight: 200;
    --font-w-light: 300;
    --font-w-regular: 400;
    --font-w-medium: 500;
    --font-w-bold: 700;

    --alert-success: #61db61;
    --alert-error: #e9563c;

    //First Palette
    --palette-one-white: #f2f2f2;
    --palette-one-gray-l: #797979;
    --palette-one-gray-m: #505050;
    --pallete-one-black: #282828;
  }

  body {
    font-family: var(--font-type-rokkit);
    letter-spacing: 1px;
    background: var(--pallete-one-black);
    color: var(--palette-one-white);
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-weight: var(--font-w-medium);
  }

  input, button {
  /* font-size: 1rem; */
  }
  
  button {
    font-weight: var(--font-w-xlight);
    font-family: var(--font-type-rokkit);
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  img{
    pointer-events: none;
  }

  `;

export default GlobalStyles;
