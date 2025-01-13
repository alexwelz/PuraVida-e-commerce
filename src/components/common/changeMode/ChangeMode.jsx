// import { useState } from "react";
// import "./changeMode.css";

// export const Dark = () => {
//   const [isDark, setIsDark] = useState(false);
//   console.log(isDark);

//   const changeMode = () => {
//     setIsDark(!isDark);
//   };

//   return (
//     <div className={isDark ? "dark" : "light"}>
//       <button onClick={changeMode}>Cambiar</button>;
//     </div>
//   );
// };

export const Dark = ({ changeMode }) => {
  return (
    <div>
      <button onClick={changeMode}>Modo</button>
    </div>
  );
};
