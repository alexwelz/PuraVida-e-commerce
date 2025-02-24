import { useContext, useState } from "react";
import "./checkout.css";
import { CartContext } from "../../../context/cart/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router";

export const Checkout = () => {
  const { cart, getTotalAmount, removeCart } = useContext(CartContext);
  const [orderTicket, setOrderTicket] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const buy = (event) => {
    event.preventDefault();

    //Orden de compra desde firestore
    let total = getTotalAmount();
    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };
    //Guardar orden en firestore
    let orderCollection = collection(db, "orders");
    const newOrder = addDoc(orderCollection, order);
    newOrder.then((res) => {
      setOrderTicket(res.id);
      removeCart();
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((element) => {
      let refDoc = doc(productsCollection, element.id);
      updateDoc(refDoc, { stock: element.stock - element.quantity });
    });
  };

  const caprutreData = (event) => {
    const { value, name } = event.target;

    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div>
      {orderTicket ? (
        <div id="modalOrder">
          <h1 id="titleOrder">Tu compra se ha realizado con éxito! 🙌 </h1>
          <h2>Tu comprobante de compra es: {orderTicket}</h2>
          <br />
          <Link to="/" id="backButton">
            Volver a inicio
          </Link>
        </div>
      ) : (
        <div>
          <h2 className="titleForm">Formulario de compra</h2>
          <div className="container">
            <form onSubmit={buy} className="formGroup">
              <input
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={caprutreData}
                className="formInput"
              />
              <input
                type="text"
                placeholder="Telefono"
                name="phone"
                onChange={caprutreData}
                className="formInput"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={caprutreData}
                className="formInput"
              />
              <button id="buyOrder">Comprar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
