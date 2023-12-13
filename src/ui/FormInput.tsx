import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";

interface FormInputProps {
  placeholder: string;
  icon: React.ReactNode;
  type?: "password" | "text" | "email";
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  error: string | undefined;
}

export default function FormInput({
  placeholder,
  icon,
  type = "text",
  input,
  setInput,
  error,
}: FormInputProps) {
  const [onFocus, setOnFocus] = useState(false);
  // console.log(error);
  const motionBarVariants = {
    hidden: {
      x: "-100%",
    },
    open: {
      x: 0,
    },
  };

  return (
    <div
      className={`relative flex justify-center items-center w-full  dark:text-white  text-bgDark1 overf low-x-hidden`}
    >
      <div
        className={`flex justify-center items-center p-2 h-full text-xl transition-colors duration-300  ${
          onFocus ? "text-main" : "text-black dark:text-white"
        }`}
      >
        {icon}
      </div>
      <input
        className="w-full bg-transparent outline-none py-2  text-md mt-[1px]"
        type={type}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        value={input}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
      {error && <p>error</p>}
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
