import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ imgURL, title, price, description, id }) => {
  return (
    <div className="product-card">
      <img src={imgURL} alt="" className="imageUrl" />
      <h3>{title}</h3>
      {price && <p>Precio: ${price}</p>}
      <p>{description}</p>
      <Link to={`/detail/${id}`}>{<button>Ver detalle</button>}</Link>
    </div>
  );
};
