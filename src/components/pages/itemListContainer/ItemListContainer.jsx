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
      <ProductCard
        title={items[0]?.title}
        price={items[0]?.price}
        description={items[0]?.description}
      />
      <ProductCard
        title={items[1]?.title}
        price={items[1]?.price}
        description={items[1]?.description}
      />
      <ProductCard
        title={items[2]?.title}
        price={items[2]?.price}
        description={items[2]?.description}
      />
      <ProductCard
        title={items[3]?.title}
        price={items[3]?.price}
        description={items[3]?.description}
      />
    </div>
  );
};

export default ItemListContainer;
