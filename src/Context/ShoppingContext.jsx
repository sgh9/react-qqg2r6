import React, { createContext, useReducer, useEffect } from 'react';
import shoppingReducer from './ShoppingReducer';

let initialItems = [];

export const ShoppingContext = createContext(initialItems);

const ShoppingContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(shoppingReducer, initialItems);

  const addItemToCart = item => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { item }
    });
  };

  const incrementCount = name => {
    dispatch({
      type: 'INCREMENT_COUNT',
      payload: name
    });
  };

  return (
    <ShoppingContext.Provider
      value={{ cartItems, addItemToCart, incrementCount }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
