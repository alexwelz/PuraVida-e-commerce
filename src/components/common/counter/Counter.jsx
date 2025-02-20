import { CartContext } from "../../../context/cart/CartContext";
import "./counter.css";
import { useContext, useState } from "react";

export const Counter = ({ item }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);
  //console.log(count, setCount);

  const Add = () => {
    if (count < item.stock) {
      setCount(count + 1);
      //console.log(item);
    }
  };
  const Subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const AddToCart = () => {
    //Guardo todas las propiedades del objeto y la cantidad del producto
    let objectToCart = { ...item, quantity: count };
    console.log(objectToCart);

    addToCart(objectToCart);
  };

  return (
    <div>
      <button onClick={Subtract}>Restar</button>
      <h2>Contador: {count}</h2>
      <button onClick={Add}>Sumar</button>
      <button onClick={AddToCart}>Add to cart</button>
    </div>
  );
};
