// import "./itemListContainer.css";
// import { ProductCard } from "../../common/productCard/ProductCard";

// const ItemListContainer = () => {
//   return (
//     <div>
//       <h2>Productos</h2>
//       <ProductCard
//         title="Titulo 1"
//         price="precio 1"
//         description="descripcion 1"
//       />
//       <ProductCard
//         price="precio 2"
//         title="titulo 2"
//         description="descripcion 2"
//       />
//       <ProductCard
//         title="titulo 3"
//         price="precio 3"
//         description="descripcion 3"
//       />
//     </div>
//   );
// };

// export default ItemListContainer;

import "./itemListContainer.css";
import { ProductCard } from "../../common/productCard/ProductCard";

const ItemListContainer = () => {
  return (
    <div>
      <h2>Bienvenido a Pura Vida</h2>
      <ProductCard
        title="Bienvenido a mi tienda!"
        price=""
        description="Aquí encontrarás los mejores productos y precios del mercado de surf y surfskate. No te lo pierdas!"
      />
    </div>
  );
};

export default ItemListContainer;
