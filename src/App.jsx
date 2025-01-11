import { Navbar } from "./components/layouts/navbar/Navbar";
import { Footer } from "./components/layouts/footer/Footer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
