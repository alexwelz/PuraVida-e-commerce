import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Dark } from "../../../components/common/changeMode/ChangeMode";

export const Navbar = ({ changeMode, isDark }) => {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul className="link">
        <li className="item">Inicio</li>
        <li className="item">Productos</li>
        <li className="item">Novedades</li>
        <li className="item">Contacto</li>
      </ul>
      <Dark changeMode={changeMode} isDark={isDark} />
      <CartWidget />
    </nav>
  );
};
