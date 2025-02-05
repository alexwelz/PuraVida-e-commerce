import "./footer.css";
import { IoLogoGithub } from "react-icons/io5";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <h3>Contactos</h3>
      <div className="icons">
        <Link to={"https://www.linkedin.com/in/alex-gustavo-welz/"}>
          <TbBrandLinkedinFilled />
        </Link>
        <Link to={"https://github.com/alexwelz/PuraVida-e-commerce"}>
          <IoLogoGithub />
        </Link>
      </div>
    </div>
  );
};
