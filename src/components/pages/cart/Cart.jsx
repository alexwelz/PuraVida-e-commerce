import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/cart/CartContext";
import { MdDelete } from "react-icons/md";
import "./cart.css";

export const Cart = () => {
  const { cart, removeCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

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
            <img
              className="cart-item-image"
              src={product.imgURL}
              alt={product.title}
            />
            <h2 className="cart-item-title">{product.title}</h2>
            <h2 className="cart-item-price">{"$ " + product.price}</h2>
            <h2>{product.quantity}</h2>
            <button onClick={() => removeById(product.id)} id="removeItem">
              <MdDelete />
            </button>
          </div>
        );
      })}
      <h2 id="totalAmount">
        Total a pagar: <span>$ {total}</span>
      </h2>
      {cart.length > 0 && (
        <div className="cart-actions">
          <Link to="/checkout" id="buy">
            Comprar
          </Link>
          <button onClick={removeCart} id="removeCart">
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};
