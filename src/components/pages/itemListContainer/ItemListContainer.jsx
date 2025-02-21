import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { products } from "../../../products";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  //Simula una peticion que me devuelva los productos
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productsFiltered;
    if (name) {
      productsFiltered = products.filter(
        (element) => element.category === name
      );
    }

    const getProducts = new Promise((resolve, reject) => {
      const isLogged = true;

      if (isLogged) {
        resolve(!name ? products : productsFiltered);
      } else {
        reject({ statusCode: 400, message: "Error, algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [name]);

  return (
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
  );
};

export default ItemListContainer;
