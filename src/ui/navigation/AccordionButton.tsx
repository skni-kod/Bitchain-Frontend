import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionButtonProps {
  text: string;
  setOpen: (card: string) => void;
  openCard: string;
}

export default function AccordionButton({
  text,
  setOpen,
  openCard,
}: AccordionButtonProps) {
  const textFormatted = text.replace(/ /g, "").toLowerCase();
  const variants = {
    open: {
      rotate: "180deg",
    },
    hidden: {
      rotate: "0",
    },
  };

  return (
    <motion.button
      className="flex justify-between items-center p-1  w-4/5 py-4 bg-white dark:bg-bgDark1 hover:text-main dark:hover:text-main transition-colors duration-300 "
      onClick={() => setOpen(textFormatted)}
    >
      <p>{text}</p>
      <motion.span
        variants={variants}
        animate={(textFormatted === openCard ? "open" : "hidden")}
        transition={{ease: "easeInOut"}}
      >
        <IoIosArrowDown />
      </motion.span>
    </motion.button>
  );
}
