import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cart/CartContext";
import "./cart.css";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1 id="title">Mi carrito</h1>

      <div className="cart-header">
        <span>Producto</span>
        <span>Precio</span>
        <span>Cantidad</span>
      </div>

      {cart.map((product) => {
        return (
          <div key={product.id} className="cart-item">
            <h2 className="cart-item-title">{product.title}</h2>
            <h2 className="cart-item-price">{"$ " + product.price}</h2>
            <h2>{product.quantity}</h2>
          </div>
        );
      })}

      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};
