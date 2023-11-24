import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useUserWidth } from "../../hooks/useUserWidth";
import AccordionButton from "./AccordionButton";
import { useClickOutside } from "../../hooks/useClickOutside";

interface MobileNavProps {
  open: boolean;
  onCloseNav: () => void;
}

export default function MobileNav({ open, onCloseNav }: MobileNavProps) {
  const userAuthenticated = false; //Pablo kiedy logowanie?????????????????????????????????????????
  // const userAuthenticated = true; //Pablo kiedy logowanie?????????????????????????????????????????
  const width = useUserWidth();
  const [openCard, setOpenCard] = useState("");
  //const ref = useClickOutside(onCloseNav) 

  const variants = {
    open: {
      translateX: 0,
    },
    hidden: {
      translateX: 320,
    },
  };

  function setOpen(card: string) {
    if (card === openCard) {
      setOpenCard("");
    } else {
      setOpenCard(card);
    }
  }

  return (
    <div>
      {createPortal(
        <motion.div
          variants={variants}
          transition={{ ease: "easeInOut" }}
          animate={open ? "open" : "hidden"}
          className="absolute flex justify-start items-center flex-col top-0 pt-16 right-0 z-40 h-full w-80 bg-white dark:bg-bgDark1 transition-colors duration-300 border-l-[1px] border-solid border-slate-100 dark:border-bgDark1Hover"
        >
          <AccordionButton
            text="Buy Crypto"
            setOpen={setOpen}
            openCard={openCard}
          >
            <p>dsa</p>
          </AccordionButton>
          <AccordionButton text="Trade" setOpen={setOpen} openCard={openCard}>
            <p>dsa</p>
          </AccordionButton>
          <AccordionButton text="Tools" setOpen={setOpen} openCard={openCard}>
            <p>dsa</p>
          </AccordionButton>
        </motion.div>,
        document.body
      )}
    </div>
  );
}
