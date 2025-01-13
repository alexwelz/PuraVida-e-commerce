import "./counter.css";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(1);
  console.log(count, setCount);

  const Add = () => {
    setCount(count + 1);
  };
  const Subtract = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={Subtract}>Restar</button>
      <h2>Contador: {count}</h2>
      <button onClick={Add}>Sumar</button>
    </div>
  );
};
