import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
//Components
import NavBar from './Components/NavBar/NavBar';
import Menu from './Components/Menu/Menu';
import GlobalStyled from './Components/Style/GlobalStyled';
import {ModalItem} from './Components/Modal/ModalItem';
import Order from './Components/Order/Order';
// Hooks
import useOpenItem from './Components/Hooks/useOpenItem';
import useOrders from './Components/Hooks/useOrders';
import useAuth from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyBRruT9BDX4GkSj4_85h9nNXF-Vnbr1fzA",
  authDomain: "mrdonald-3b7cf.firebaseapp.com",
  databaseURL: "https://mrdonald-3b7cf.firebaseio.com",
  projectId: "mrdonald-3b7cf",
  storageBucket: "mrdonald-3b7cf.appspot.com",
  messagingSenderId: "244421079929",
  appId: "1:244421079929:web:9950a961c74026ecc135a8",
  measurementId: "G-JB8F8G2WCB"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyled/>
      <NavBar {...auth}/>      
      <Order {...orders} {...openItem} {...auth}/>
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
