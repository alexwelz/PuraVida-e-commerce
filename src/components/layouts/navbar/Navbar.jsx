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
        <Link to="/" className="item">
          Inicio
        </Link>
        <Link className="item" to="/category/tablas">
          Tablas
        </Link>
        <Link className="item" to="/category/trucks">
          Trucks
        </Link>
        <Link className="item" to="/category/ruedas">
          Ruedas
        </Link>
      </ul>
      <Dark changeMode={changeMode} isDark={isDark} />
      <CartWidget />
    </nav>
  );
};
