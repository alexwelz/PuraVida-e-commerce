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

  const removeById = (id) => {
    let newArray = cart.filter((element) => element.id !== id);
    setCart(newArray);
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < cart.length; i++) {
      totalAmount += cart[i].price * cart[i].quantity;
    }
    return totalAmount;
  };

  let data = { cart, addToCart, removeCart, removeById, getTotalAmount };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
