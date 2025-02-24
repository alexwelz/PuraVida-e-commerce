import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
// import { products } from "../../../products";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  //Simula una peticion que me devuelva los productos
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulation = productsCollection;
    if (name) {
      let partToCollection = query(
        productsCollection,
        where("category", "==", name)
      );
      consulation = partToCollection;
    }

    const getProducts = getDocs(consulation);
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
      {items.length === 0 ? (
        <div className="chargingInfo">
          <div className="chargingModal">
            <h1>Pura vida</h1>
            <h2>Cargando productos, por favor espere...</h2>
          </div>
        </div>
      ) : (
        <div className="cards">
          {items.map((element) => {
            return <ProductCard key={element.id} {...element} />;

            // return (
            //   <ProductCard
            //     key={element.id}
            //     image={element.imgURL}
            //     title={element.title}
            //     price={element.price}
            //     description={element.description}
            //     id={element.id}
            //   />
            // );
          })}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
