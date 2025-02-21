import { CartContext } from "../../../context/cart/CartContext";
import "./counter.css";
import { useContext, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

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
    // <div className="actions">
    //   <button onClick={Subtract} id="subtractItem">
    //     <GrSubtractCircle />
    //   </button>
    //   <h2 className="count">{count}</h2>
    //   <button onClick={Add} id="addItem">
    //     <IoIosAddCircleOutline />
    //   </button>
    //   <button onClick={AddToCart} id="cart-button">
    //     <FaCartPlus />
    //   </button>
    // </div>
    <div className="counter-container">
      <div className="counter-buttons">
        <button onClick={Subtract} id="subtractItem">
          <GrSubtractCircle />
        </button>
        <span className="count">{count}</span>
        <button onClick={Add} id="addItem">
          <IoIosAddCircleOutline />
        </button>
      </div>
      <button onClick={AddToCart} id="addToCart" className="cart-button">
        Agregar al carrito
      </button>
    </div>
  );
};
