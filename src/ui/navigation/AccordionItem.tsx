import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface AccordionItemProps {
  onCloseNav: () => void;
  delay: number
}

export default function AccordionItem({ onCloseNav, delay }: AccordionItemProps) {
  return (
    <motion.div transition={{delay: 2}}>
      <NavLink
        className="origin-top text-bgDark dark:text-bgWhite1"
        to=""
        onClick={onCloseNav}
      >
        AccordionItem
      </NavLink>
    </motion.div>
  );
}
