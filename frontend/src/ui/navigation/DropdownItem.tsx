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
      className={`bg-white hover:bg-slate-100 w-60 rounded-lg ${textColor && textColor}`}
      onClick={onCloseFunction}
    >
      <div className="w-full flex justify-start items-center">
        {icon && <div className="h-full p-5 text-lg">{icon}</div>}
        <div className="w-full flex flex-col items-start">
          <p className={icon ? "" : "w-full p-3 flex justify-between items-center"}>{title}{!icon && <IoIosArrowForward />}</p>
          {desc && <p className="text-slate-300 font-light text-xs text-left">{desc}</p>}
        </div>
      </div>
    </NavLink>
  );
};

export default DropdownItem;
