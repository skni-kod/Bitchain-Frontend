import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to={"homepage"} className="h-6 w-[130px] logo-light dark:logo-dark">
      {/* <img src="logo-white.png" className="h-full w-fit" /> */}
    </NavLink>
  );
}
