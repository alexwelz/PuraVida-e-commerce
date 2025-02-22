import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
// import { products } from "../../../products";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  //Simula una peticion que me devuelva los productos
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    const getProducts = getDocs(productsCollection);
    getProducts
      .then((response) => {
        const array = response.docs.map((element) => {
          return { id: element.id, ...element.data() };
        });
        setItems(array);
      })
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <>
      <div className="cards">
        {items.map((element) => {
          return <ProductCard key={element.id} {...element} />;
          // return <ProductCard
          //     key={element.id}
          //     image={element.imgURL}
          //     title={element.title}
          //     price={element.price}
          //     description={element.description}
          //     id={element.id}
          //   />
        })}
      </div>
    </>
  );
};

export default ItemListContainer;
