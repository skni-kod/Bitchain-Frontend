import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

export default function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <NavLink to={"homepage"} className="h-6 w-[130px]">
      {/* <img src="logo-white.png" className="h-full w-fit" /> */}
      {isDarkMode ? (
        <div className="logo-dark"></div>
      ) : (
        <div className="logo-light"></div>
      )}
    </NavLink>
  );
}
