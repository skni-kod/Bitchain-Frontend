import React from "react";
import {motion} from 'framer-motion'

interface AccordionButtonProps {
  children: React.ReactNode;
  text: string;
  setOpen: (card: string) => void;
  openCard: string;
}

export default function AccordionButton({
  children,
  text,
  setOpen,
  openCard,
}: AccordionButtonProps) {
  const isOpen = openCard === text.replace(/ /g, "").toLowerCase();

  return (
    <motion.button
      className="flex flex-col p-1 pl-4 w-4/5 mt-3 mb-3 text-dark dark:text-white bg-white dark:bg-bgDark1 hover:text-main dark:hover:text-main transition-colors duration-300 border-l-main border-l-[2px] border-solid"
      onClick={() => setOpen(text.replace(/ /g, "").toLowerCase())}
    >
      <p>{text}</p>
      {isOpen && children}
    </motion.button>
  );
}
