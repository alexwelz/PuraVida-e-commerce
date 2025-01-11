import "./navbar.css";
import { CartWidget } from "../../common/CartWidget";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <h2 className="logo">Logo</h2>
      <ul className="link">
        <li className="item">Inicio</li>
        <li className="item">Productos</li>
        <li className="item">Novedades</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
