import React, { useState } from "react";
import {motion} from 'framer-motion'
import { GoPerson } from "react-icons/go";

export default function FormInput() {
  const [input, setInput] = useState("");
  const [onFocus, setOnFocus] = useState(false);

  return (
    <motion.div
      className={`relative flex justify-center items-center w-full  dark:text-white  text-bgDark1 border-b-[1px] border-b-solid dark:border-b-white border-b-bgDark1 `}
      animate={{ borderBottomColor: onFocus ? '#ff5700' : '' }}
    >
      <div
        className={` flex justify-center items-center p-2 h-full text-xl ${
          onfocus ? "text-main" : "text-black"
        }`}
      >
        <GoPerson />
      </div>
      <label
        htmlFor="input"
        className="absolute left-9 cursor-text tracking-wider text-neutral-600 z-0"
      >
        Email
      </label>
      <input
        id="input"
        className="w-full bg-transparent outline-none py-2  text-md mt-[1px]"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        value={input}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
    </motion.div>
  );
}
