// import "./productCard.css";

// export const ProductCard = (props) => {
//   console.log(props);
//   return (
//     <div className="product">
//       <h2>{props.title}</h2>
//       <h2>{props.price}</h2>
//       <h2>{props.description}</h2>
//     </div>
//   );
// };

import "./ProductCard.css";

export const ProductCard = (props) => {
  return (
    <div className="product-card">
      <h3>{props.title}</h3>
      {props.price && <p>Precio: {props.price}</p>}
      <p>{props.description}</p>
    </div>
  );
};
