import { FaCartShopping } from "react-icons/fa6";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaCartShopping className="cart-icon" />
      <div className="bubble">0</div>
    </div>
  );
};
