import { useEffect, useState } from "react";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import "./itemDetails.css";

export const ItemDetails = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productSelected = products.find((product) => product.id === id);
    setItem(productSelected);
  }, [id]);

  return (
    <div className="product-container">
      <img className="product-image" src={item.imgURL} alt={item.title} />
      <div className="product-details">
        <h2 className="product-title">{item.title}</h2>
        <p className="product-description">{item.description}</p>
        <h3 className="product-price">${item.price}</h3>
      </div>
    </div>
  );
};
