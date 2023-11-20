import { ReactNode, useState, cloneElement, ReactElement } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface DropDownButtonProps {
  children: ReactNode;
  type: string;
  text: string | ReactNode;
  to?: string;
}

export default function DropdownButton({
  children,
  text,
  type,
  to = "",
}: DropDownButtonProps) {
  const [isHover, setIsHover] = useState(false);

  const underlineVariants = {
    hidden: { scaleX: 0, translate: "-50%" },
    visible: { scaleX: "100%", translate: "-50%" },
  };

  function onCloseFunction() {
    setIsHover(false);
  }

  if (type === "dropdown") {
    return (
      <button
        className="relative h-full w-fit px-2 font-medium tracking-wide"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setIsHover(true)}
        onBlur={() => setIsHover(false)}
      >
        {text}
        {isHover && (
          <motion.div
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeIn", duration: 0.1 }}
            className="absolute w-5/6 left-2/4 -translate-x-1/2 bottom-0 h-1 origin-left bg-main"
          ></motion.div>
        )}
        {isHover &&
          cloneElement(children as ReactElement, {
            onCloseFunction: onCloseFunction,
          })}
      </button>
    );
  } else {
    return (
      <NavLink
        className="relative flex justify-center items-center h-full w-fit px-2 font-medium tracking-wide"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setIsHover(true)}
        onBlur={() => setIsHover(false)}
        to={to}
      >
        {text}
        {isHover && (
          <motion.div
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeIn", duration: 0.1 }}
            className="absolute w-5/6 left-2/4 -translate-x-1/2 bottom-0 h-1 origin-left bg-main"
          ></motion.div>
        )}
      </NavLink>
    );
  }
}
