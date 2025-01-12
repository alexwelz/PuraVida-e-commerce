import "./productCard.css";

export const ProductCard = (props) => {
  console.log(props);
  return (
    <div className="product">
      <h2>{props.title}</h2>
      <h2>{props.price}</h2>
      <h2>{props.description}</h2>
      <p>
        <strong>Precio $</strong>
      </p>
    </div>
  );
};
