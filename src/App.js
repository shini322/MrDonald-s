import React from 'react';
import {createGlobalStyle} from 'styled-components';

import NavBar from './Components/NavBar';

const GlobalStyled = createGlobalStyle`

  *, &::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #000;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
  img{
    max-width: 100%;
    height: auto;
  }

  button{
    font-family: inherit;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }
  

`;

function App() {
  return (
    <>
      <GlobalStyled/>
      <NavBar/>
    </>
  );
}

export default App;
