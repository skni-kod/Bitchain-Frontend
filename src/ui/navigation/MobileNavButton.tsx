import React from "react";
import { NavLink } from "react-router-dom";

interface MobileNavButtonProps {
  text: string;
  to: string;
  onCloseFunction: () => void;
  textColor?: string;
}

export default function MobileNavButton({
  text,
  to,
  onCloseFunction,
  textColor,
}: MobileNavButtonProps) {
  return (
    <NavLink
      to={to}
      onClick={onCloseFunction}
      className={`flex justify-between items-center p-1  w-4/5 py-4 bg-white dark:bg-bgDark1 hover:text-main dark:hover:text-main transition-colors duration-300 ${
        textColor && textColor
      }`}
    >
      {text} 
    </NavLink>
  );
}
