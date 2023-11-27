import { useState } from "react";
import IconButton from "../IconButton";
import { easeInOut, motion } from "framer-motion";
import MobileNav from "./MobileNav";

export default function ToggleMobileNavBurger() {
  const [open, setOpen] = useState(false);
  //let clickOutsideFlag = false

  function toggleOpenNav() {
    setOpen(true);
    console.log("object2");
  }

  function handleCloseNav() {
    setOpen(false);
    console.log("object");
  }

  const variantsBar1 = {
    closed: {
      rotate: "45deg",
      translateX: 3,
      translateY: -0.5,
    },
    open: {
      rotate: "0deg",
    },
  };

  const variantsBar2 = {
    closed: {
      rotate: "-45deg",
    },
    open: {
      rotate: "0deg",
    },
  };

  const variantsBar3 = {
    closed: {
      rotate: "45deg",
      translateX: 1,
      translateY: 0.5,
    },
    open: {
      rotate: "0deg",
    },
  };

  return (
    <>
      <IconButton onClick={toggleOpenNav}>
        <div className="flex flex-col h-full justify-evenly items-center py-1">
          <motion.div
            variants={variantsBar1}
            animate={open ? "closed" : "open"}
            transition={{ease: easeInOut}}
            className="bg-bgDark1 dark:bg-bgWhite1 w-3 h-[2px] rounded-2xl self-start origin-left"
          ></motion.div>

          <motion.div
            variants={variantsBar2}
            animate={open ? "closed" : "open"}
            transition={{ease: easeInOut}}
            className="bg-bgDark1 dark:bg-bgWhite1 w-5 h-[2px] rounded-2xl"
          ></motion.div>

          <motion.div
            variants={variantsBar3}
            animate={open ? "closed" : "open"}
            transition={{ease: easeInOut}}
            className="bg-bgDark1 dark:bg-bgWhite1 w-4 h-[2px] rounded-2xl self-start origin-right"
          ></motion.div>
        </div>
      </IconButton>

      <MobileNav open={open} onCloseNav={handleCloseNav} />
    </>
  );
}
