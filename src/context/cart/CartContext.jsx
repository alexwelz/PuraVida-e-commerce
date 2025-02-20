import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log(product);
    //Mantengo todos los elementos del array y agrego el producto
    setCart([...cart, product]);
  };

  const removeCart = () => {
    setCart([]);
  };

  let data = { cart, addToCart, removeCart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
