import { useEffect } from "react";
import { useState } from "react";

export default function ArgentineComponent() {
  const [argentine, setArgentine] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/argentina")
      .then((response) => response.json())
      .then((data) => setArgentine(data[0]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>{argentine?.name.common}</h1>
      <p>Bandera: {argentine?.flag}</p>
      <p>Capital: {argentine?.capital}</p>
    </>
  );
}
