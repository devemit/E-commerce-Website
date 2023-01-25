import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { ApiContext } from './ApiContext';
import CartReducer from './CartReducer';
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from './Types';

const Store = ({ children }) => {
  const [items, setItems] = useState([]);
  const [nav, setNav] = useState(false);
  const initialState = {
    showCart: false,
    cartItems: [],
  };

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //////////////////////////////////////////////////
  // reducers
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  //////////////////////////////////////////////////
  // Handle navigation
  const handleNav = () => {
    setNav(!nav);
  };
  const truncateStr = (str, length) => {
    if (length >= str.length) {
      return str;
    } else {
      return str.slice(0, length) + '...';
    }
  };


  return (
    <ApiContext.Provider
      value={{
        items,
        setItems,
        nav,
        setNav,
        handleNav,
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        truncateStr,
        
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default Store;
