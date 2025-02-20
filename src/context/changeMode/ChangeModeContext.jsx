import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

export const Dark = ({ changeMode, isDark }) => {
  return (
    <div>
      <button id="btnDark" onClick={changeMode}>
        {isDark ? <IoSunny /> : <MdDarkMode />}
      </button>
    </div>
  );
};
