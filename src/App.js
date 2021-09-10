import React, { useState, useContext } from 'react';
import './style.css';
import Modal from './Modal';
import Items from './Items';
import Navbar from './Navbar';
import ShoppingContextProvider, {
  ShoppingContext
} from './Context/ShoppingContext';

import ItemList from './ItemList';

export default function App() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([{}]);
  const cartItems = useContext(ShoppingContext);

  console.log('cart context:', cartItems);
  const reset = () => {
    setShow(false);
  };

  return (
    <ShoppingContextProvider>
      <Navbar handleShowCart={() => setShow(true)} />
      <Modal
        show={show}
        onClose={() => reset()}
        title="Cart"
        buttonLabel="Order now"
      >
        <ItemList />
      </Modal>
      <Items />
    </ShoppingContextProvider>
  );
}
