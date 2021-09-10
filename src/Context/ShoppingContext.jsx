import React, { createContext, useReducer, useEffect } from 'react';
import shoppingReducer from './ShoppingReducer';

let initialItems = [{ name: 'Orange', price: 0.5, count: 1 }];

export const ShoppingContext = createContext(initialItems);

const ShoppingContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(shoppingReducer, initialItems);
  return (
    <ShoppingContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
