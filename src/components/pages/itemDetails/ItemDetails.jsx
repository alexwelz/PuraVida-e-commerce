import { useEffect, useState } from "react";
// import { products } from "../../../products";
import { useParams } from "react-router-dom";
import { Counter } from "../../common/counter/Counter";
import "./itemDetails.css";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetails = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    const getProduct = getDoc(productRef);
    getProduct
      .then((res) => setItem({ ...res.data(), id: res.id }))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="product-container">
      <img className="product-image" src={item.imgURL} alt={item.title} />
      <div className="product-details">
        <h2 className="product-title">{item.title}</h2>
        <p className="product-description">{item.description}</p>
        <h3 className="product-price">${item.price}</h3>
        <Counter item={item} />
      </div>
    </div>
  );
};
