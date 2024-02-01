import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { SlMagnifier } from "react-icons/sl";

export default function SearchCrypto() {
  const [onFocus, setOnFocus] = useState(false);
  const motionBarVariants = {
    hidden: {
      x: "-100%",
    },
    open: {
      x: 0,
    },
  };

  return (
    <div>
      <div
        className={`relative flex justify-between items-start w-full flex-col dark:text-white gap-2 text-bgDark1 overflow-x-hidden`}
      >
        <div
          className={`relative flex justify-center items-center w-full  dark:text-white  text-bgDark1 overflow-x-hidden`}
        >
          <div
            className={`flex justify-center items-center p-2 h-full text-sm transition-colors duration-300  ${
              onFocus ? "text-main" : "text-black dark:text-white"
            }`}
          >
            <SlMagnifier />
          </div>
          <input
            className="w-full bg-transparent outline-none py-2  text-sm mt-[1px]"
            type="text"
            placeholder="Search Crypto"
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
          />
          <div className="absolute bottom-0 left-0 w-full h-[0.8px] bg-bgDark1 dark:bg-bgWhite1"></div>
          <motion.div
            variants={motionBarVariants}
            transition={{ ease: easeInOut }}
            animate={onFocus ? "open" : "hidden"}
            initial="hidden"
            className="absolute bottom-0 left-0 w-full h-[1px] bg-main"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
