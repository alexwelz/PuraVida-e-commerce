import { Navbar } from "./Navbar";

function App() {
  const sumar = () => {
    console.log("Estoy sumando");
  };

  return (
    <div>
      <Navbar />
      <main>
        <h2>Principal</h2>
      </main>

      <button onClick={sumar}>Sumar</button>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
