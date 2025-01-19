import "./ProductCard.css";

export const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      {price && <p>Precio: ${price}</p>}
      <p>{description}</p>
    </div>
  );
};
