import { useState } from "react";

export const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const buy = (event) => {
    event.preventDefualt();
    console.log(userInfo);
  };

  const caprutreData = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div>
      <h2>Formulario de compra</h2>
      <form onSubmit={buy}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={caprutreData}
        />
        <input
          type="text"
          placeholder="Telefono"
          name="phone"
          onChange={caprutreData}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={caprutreData}
        />
        <button>Comprar</button>
      </form>
    </div>
  );
};

export default Checkout;
