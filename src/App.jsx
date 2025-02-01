import { useState } from "react";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { Footer } from "./components/layouts/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
//import { Counter } from "./components/common/counter/Counter";
import { Dark } from "./components/common/changeMode/ChangeMode";
import "./components/common/changeMode/changeMode.css";
//import ArgentineComponent from "./components/ArgentineComponent";
import { ItemDetails } from "./components/pages/itemDetails/ItemDetails";
import { Cart } from "./components/pages/cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(false);
  const changeMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <BrowserRouter>
        <Navbar />
        <Footer />
        <Dark changeMode={changeMode} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<ItemDetails />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
