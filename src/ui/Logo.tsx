import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

export default function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <NavLink to={"homepage"} className="h-full w-24 xs:w-[135px] py-4">
      {isDarkMode ? (
        <div className="logo-dark"></div>
      ) : (
        <div className="logo-light"></div>
      )}
    </NavLink>
  );
}
