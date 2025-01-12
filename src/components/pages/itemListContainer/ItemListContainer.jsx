import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";

const ItemListContainer = () => {
  return (
    <div>
      <h2>Productos</h2>
      <ProductCard
        title="Titulo 1"
        price="precio 1"
        description="descripcion 1"
      />
      <ProductCard
        price="precio 2"
        title="titulo 2"
        description="descripcion 2"
      />
      <ProductCard
        title="titulo 3"
        price="precio 3"
        description="descripcion 3"
      />
    </div>
  );
};

export default ItemListContainer;
