import { MdOutlineWbSunny } from "react-icons/md";
import useDarkMode from "../../hooks/useDarkMode";
import { IoMoonOutline } from "react-icons/io5";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="text-xl text-bgDark dark:text-bgWhite"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <MdOutlineWbSunny /> : <IoMoonOutline />}
    </button>
  );
}
