import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : {};
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] = 0;
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    if (newAmount > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    } else {
      removeItemFromCart(itemId);
    }
  };

  const clearCart = () => {
    setCartItems({});
  };

  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateCartItemCount,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  );
};
