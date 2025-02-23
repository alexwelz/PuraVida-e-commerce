import { useContext, useState } from "react";
import { CartContext } from "../../../context/cart/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const Checkout = () => {
  const { cart, getTotalAmount } = useContext(CartContext);
  const [orderTicket, setOrderTicket] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const buy = (event) => {
    event.preventDefault();
    console.log(userInfo);

    //Orden de compra desde firestore
    let total = getTotalAmount();
    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };

    let orderCollection = collection(db, "orders");
    const newOrder = addDoc(orderCollection, order);
    newOrder.then((res) => setOrderTicket(res.id));
  };

  const caprutreData = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div>
      {orderTicket ? (
        <h1 id="modalOrder">Tu comprobante de comra es: {orderTicket}</h1>
      ) : (
        <div>
          <h2 className="titleForm">Formulario de compra</h2>
          <form onSubmit={buy} className="orderForm">
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
            <button id="buyOrder">Comprar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
