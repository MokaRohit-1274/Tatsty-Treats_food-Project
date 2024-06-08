import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1;
      } else {
        delete updatedItems[itemId];
      }
      return updatedItems;
    });
  };

  const getTotal=()=>
    {
      let amount=0;
      for(const item in cartItems)
        {
          if(cartItems[item]>0)
            {
          let ItemInfo=food_list.find((product)=>product._id===item)
          amount+=ItemInfo.price*cartItems[item];
            }
        }
        return amount;
    }
  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotal
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
