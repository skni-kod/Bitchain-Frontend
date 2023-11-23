import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

interface DropdownItemprops {
  icon?: ReactNode;
  title: string;
  desc?: string;
  to: string;
  textColor?: string
  onCloseFunction: () => void;
}

const DropdownItem: React.FC<DropdownItemprops> = ({
  icon,
  title,
  desc,
  to,
  onCloseFunction,
  textColor,
}: DropdownItemprops) => {
  return (
    <NavLink
      to={to}
      className={`bg-white hover:bg-slate-100 w-60 rounded-lg dark:bg-bgDark1 dark:hover:bg-bgDark1Hover transition-colors duration-500 ${textColor && textColor}`}
      onClick={onCloseFunction}
    >
      <div className="w-full flex justify-start items-center">
        {icon && <div className="h-full p-5 text-lg">{icon}</div>}
        <div className="w-full flex flex-col items-start">
          <p className={icon ? "" : "w-full p-3 flex justify-between items-center"}>{title}{!icon && <IoIosArrowForward />}</p>
          {desc && <p className="text-slate-300 dark:text-neutral-500 text-xs text-left font-normal">{desc}</p>}
        </div>
      </div>
    </NavLink>
  );
};

export default DropdownItem;
