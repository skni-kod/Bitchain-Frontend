import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface AccordionItemProps {
  onCloseNav: () => void;
  delay: number
  title: string
  icon: React.ReactNode
  to: string
}

export default function AccordionItem({ onCloseNav, delay, title, icon, to }: AccordionItemProps) {
  return (
    <motion.div transition={{delay: 2}} className="w-full">
      <NavLink
        className="flex gap-2 justify-start items-center origin-top text-bgDark dark:text-bgWhite1 px-4 py-3 rounded-lg my-1 bg-white hover:bg-bgWhite1Hover dark:bg-bgDark1 dark:hover:bg-bgDark1Hover transition-colors duration-500"
        to={to}
        onClick={onCloseNav}
      >
        <span className="">{icon}</span> {title}
      </NavLink>
    </motion.div>
  );
}
