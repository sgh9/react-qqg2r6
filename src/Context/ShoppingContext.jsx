import React, { createContext, useReducer, useEffect } from 'react';
import shoppingReducer from './ShoppingReducer';

let initialItems = [{ name: 'Orange', price: 0.5, count: 1 }];

export const ShoppingContext = createContext(initialItems);

const ShoppingContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(shoppingReducer, initialItems);

  const addItemToCart = item => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    });
  };

  return (
    <ShoppingContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
