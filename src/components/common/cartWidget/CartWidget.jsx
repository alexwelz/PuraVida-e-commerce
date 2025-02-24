import { FaCartShopping } from "react-icons/fa6";
import "./cartWidget.css";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../context/cart/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <div>
      <Link to="/cart">
        <div className="cart-widget">
          <FaCartShopping className="cart-icon" />
          <div className="bubble">{totalItems}</div>
        </div>
      </Link>
    </div>
  );
};
