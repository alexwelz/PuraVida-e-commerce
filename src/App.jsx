import { useState } from "react";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { Footer } from "./components/layouts/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
//import { Counter } from "./components/common/counter/Counter";
import "./components/common/changeMode/changeMode.css";
//import ArgentineComponent from "./components/ArgentineComponent";
import { ItemDetails } from "./components/pages/itemDetails/ItemDetails";
import { Cart } from "./components/pages/cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout } from "./components/pages/checkout/Checkout";

function App() {
  const [isDark, setIsDark] = useState(false);
  const changeMode = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark-mode", !isDark);
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <BrowserRouter>
        <Navbar changeMode={changeMode} isDark={isDark} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<ItemDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
