import "./productCard.css";
import { Link } from "react-router";

export const ProductCard = ({
  imgURL,
  title,
  price,
  stock,
  description,
  id,
}) => {
  return (
    <div className="product-card">
      <img src={imgURL} alt="" className="imageUrl" />
      <div className="detailCard">
        <h3>{title}</h3>
        {price && <p>Precio: ${price}</p>}
        <p>Stock: {stock < 0 ? 0 : stock}</p>
        <p>{description}</p>
        <Link to={`/detail/${id}`}>
          {<button className="btnDetail">Ver detalle</button>}
        </Link>
      </div>
    </div>
  );
};
