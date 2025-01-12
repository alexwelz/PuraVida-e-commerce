import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import logo from "../../../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img className="logo" src={logo} alt="logo" />
      <ul className="link">
        <li className="item">Inicio</li>
        <li className="item">Productos</li>
        <li className="item">Novedades</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
