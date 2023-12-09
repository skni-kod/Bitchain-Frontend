import React, { useEffect, useMemo, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import useDarkMode from "../hooks/useDarkMode";

interface FormInputProps {
  placeholder: string;
  icon: React.ReactNode;
}

export default function FormInput({ placeholder, icon }: FormInputProps) {
  const [input, setInput] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const { isDarkMode } = useDarkMode();

  const motionBarVariants = {
    hidden: {
      x: "-100%",
    },
    open: {
      x: 0,
    },
  };

  const IconVariants = useMemo(() => {
    return {
      hidden: { color: isDarkMode ? "white" : "black" },
      open: {
        color: "#ff5700",
      },
    };
  }, [isDarkMode]);

  // useEffect(
  //   function () {
  //     const IconVariants = {
  //       hidden: { color: "" },
  //       open: {
  //         color: "#ff5700",
  //       },
  //     };
  //     if (isDarkMode) {
  //       IconVariants.hidden = { color: "black" };
  //     } else {
  //       IconVariants.hidden = { color: "white" };
  //     }
  //   },
  //   [isDarkMode, IconVariants]
  // );

  return (
    <div
      className={`relative flex justify-center items-center w-full  dark:text-white  text-bgDark1 overflow-x-hidden`}
    >
      <motion.div
        variants={IconVariants}
        animate={onFocus ? "open" : "hidden"}
        className="flex justify-center items-center p-2 h-full text-xl"
      >
        {icon}
      </motion.div>
      <input
        id="input"
        className="w-full bg-transparent outline-none py-2  text-md mt-[1px]"
        type="text"
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        value={input}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-bgDark1 dark:bg-bgWhite1"></div>
      <motion.div
        variants={motionBarVariants}
        transition={{ ease: easeInOut }}
        animate={onFocus ? "open" : "hidden"}
        initial="hidden"
        className="absolute bottom-0 left-0 w-full h-[1px] bg-main"
      ></motion.div>
    </div>
  );
}
