import { FaCartShopping } from "react-icons/fa6";
import "./cartWidget.css";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <div className="cart-widget">
          <FaCartShopping className="cart-icon" />
          <div className="bubble">0</div>
        </div>
      </Link>
    </div>
  );
};
