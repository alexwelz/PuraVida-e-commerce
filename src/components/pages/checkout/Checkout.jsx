import { useState } from "react";

export const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const buy = () => {
    console.log("compre");
  };
  return (
    <div>
      <h2>Formulario de compra</h2>
      <form onSubmit={buy}>
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="telefono" />
        <input type="text" placeholder="email" />
        <button>Comprar</button>
      </form>
    </div>
  );
};

export default Checkout;
