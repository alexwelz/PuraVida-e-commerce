import { useState } from "react";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { Footer } from "./components/layouts/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
//import { Counter } from "./components/common/counter/Counter";
import { Dark } from "./components/common/changeMode/ChangeMode";
import "./components/common/changeMode/changeMode.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <Navbar />
      {/* <Counter /> */}
      <Dark changeMode={changeMode} />
      <ItemListContainer />
      <Footer />
    </div>
  );
}
export default App;
