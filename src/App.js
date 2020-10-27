import React from 'react';

import NavBar from './Components/NavBar';
import Menu from './Components/Menu';
import GlobalStyled from './Components/GlobalStyled';


function App() {
  return (
    <>
      <GlobalStyled/>
      <NavBar/>      
      <Menu/>
    </>
  );
}

export default App;
