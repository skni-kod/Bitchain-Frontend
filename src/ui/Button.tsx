import React from "react";
import { NavLink } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  type: "link" | "button";
  bgType?: "transparent";
  to: string;
  onClick?: ()=>void
}

export default function Button({ children, bgType, type, to, onClick }: ButtonProps) {
  if (type === "button") {
    return (
      <button
        className={`px-4 py-2 rounded-3xl text-sm tracking-wider m-2 ${
          !bgType
            ? "bg-main hover:bg-mainHover"
            : "dark:hover:bg-bgDark1Hover hover:bg-bgWhite1"
        } transition-colors duration-300`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <NavLink
        to={to}
        className={`px-4 py-2 rounded-3xl text-sm tracking-wider m-2 ${
          !bgType
            ? "bg-main hover:bg-mainHover"
            : "dark:hover:bg-bgDark1Hover hover:bg-bgWhite1"
        } transition-colors duration-300`}
        onClick={onClick}
      >
        {children}
      </NavLink>
    );
  }
}
