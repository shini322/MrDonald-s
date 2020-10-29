import React, {useState} from 'react';

import NavBar from './Components/NavBar';
import Menu from './Components/Menu';
import GlobalStyled from './Components/GlobalStyled';
import ModalItem from './Components/ModalItem';
import Order from './Components/Order';
import OrderListItem from './Components/OrderListItem';


function App() {

  const [openItem, setOpenItem] = useState(null);

  return (
    <>
      <GlobalStyled/>
      <Order/>
      <NavBar/>      
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;
