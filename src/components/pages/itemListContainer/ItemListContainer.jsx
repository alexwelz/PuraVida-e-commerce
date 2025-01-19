import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";
import { products } from "../../products";
import { useState } from "react";
import { useEffect } from "react";

const ItemListContainer = () => {
  //Simula una peticion que me devuelva los productos
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      const isLogged = true;

      if (isLogged) {
        resolve(products);
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
  }, []);

  return (
    <div>
      <h2>Bienvenido a Pura Vida</h2>
      {items.map((element) => {
        return (
          <ProductCard
            key={element.id}
            image={element.imgURL}
            title={element.title}
            price={element.price}
            description={element.description}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
