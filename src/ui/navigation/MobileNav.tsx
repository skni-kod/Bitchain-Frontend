import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useUserWidth } from "../../hooks/useUserWidth";
import AccordionButton from "./AccordionButton";
import { useClickOutside } from "../../hooks/useClickOutside";
import AccordionItem from "./AccordionItem";

interface MobileNavProps {
  open: boolean;
  onCloseNav: () => void;
}

export default function MobileNav({ open, onCloseNav }: MobileNavProps) {
  const userAuthenticated = false; //Pablo kiedy logowanie?????????????????????????????????????????
  // const userAuthenticated = true; //Pablo kiedy logowanie?????????????????????????????????????????
  const width = useUserWidth();
  const [openCard, setOpenCard] = useState("");
  const ref = useClickOutside({ onCloseNav });

  console.log(openCard);

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
          ref={ref as React.RefObject<HTMLDivElement>}
          animate={open ? "open" : "hidden"}
          className="absolute flex justify-start items-center flex-col top-0 pt-16 right-0 z-40 h-full w-80 bg-white dark:bg-bgDark1 transition-colors duration-300 border-l-[1px] border-solid border-slate-100 dark:border-bgDark1Hover"
        >
          <AccordionButton
            text="Buy Crypto"
            setOpen={setOpen}
            openCard={openCard}
          />
            {openCard === "buycrypto" && <motion.div className='flex flex-col origin-top bg-red-500' initial={{scaleY: 0, opacity: 0}} animate={{scaleY: 1, opacity: 1}} transition={{ease: "easeInOut"}}>
              <AccordionItem onCloseNav={onCloseNav} delay='0'/>
              <AccordionItem onCloseNav={onCloseNav} delay='1'/>
              <AccordionItem onCloseNav={onCloseNav} delay='2'/>
              <AccordionItem onCloseNav={onCloseNav} delay='3'/>
              <AccordionItem onCloseNav={onCloseNav} delay='4'/>
            </motion.div>}
            <p>dsa</p>
          {/* <AccordionButton text="Trade" setOpen={setOpen} openCard={openCard}>
            <p>dsa</p>
          </AccordionButton>
          <AccordionButton
            text="Tools"
            setOpen={setOpen}
            openCard={openCard}
            onCloseNav={onCloseNav}
          >
            <p>dsa</p>
          </AccordionButton> */}
        </motion.div>,
        document.body
      )}
    </div>
  );
}
