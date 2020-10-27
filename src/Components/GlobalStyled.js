import React from 'react';
import {createGlobalStyle} from 'styled-components';

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

  h2{
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    line-height: 28px;
    margin: 10px 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  img{
    max-width: 100%;
    height: auto;
  }

  ul{
    list-style: none;
  }

  button{
    font-family: inherit;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyled;