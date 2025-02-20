import { FaCartShopping } from "react-icons/fa6";
import "./cartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/cart/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <div className="cart-widget">
          <FaCartShopping className="cart-icon" />
          <div className="bubble">{cart.length}</div>
        </div>
      </Link>
    </div>
  );
};
