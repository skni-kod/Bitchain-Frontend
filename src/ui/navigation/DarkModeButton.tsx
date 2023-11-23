import { MdOutlineWbSunny } from "react-icons/md";
import useDarkMode from "../../hooks/useDarkMode";
import { IoMoonOutline } from "react-icons/io5";
import IconButton from "../IconButton";

export default function DarkModeButton() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <IconButton onClick={toggleDarkMode}>
      {isDarkMode ? <MdOutlineWbSunny /> : <IoMoonOutline />}
    </IconButton>
  );
}
