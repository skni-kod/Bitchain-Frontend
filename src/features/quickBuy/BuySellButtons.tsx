import { motion } from "framer-motion";

interface BuySellButtonsProps {
  setSell: (s: boolean) => void;
  sell: boolean;
}

export default function BuySellButtons({ sell, setSell }: BuySellButtonsProps) {
  return (
    <div className="flex justify-start items-center gap-4 ">
      <button
        className="flex flex-col text-lg h-[56px]  text-bgDark dark:text-bgWhite hover:text-main dark:hover:text-main transition-colors duration-300 p-2 "
        onClick={() => setSell(false)}
      >
        <p className="self-start">Buy</p>
        {!sell && (
          <motion.div
            className="w-0 h-1 mt-2 bg-main"
            animate={{ width: "100%" }}
            transition={{ ease: "easeIn", duration: 0.2 }}
          ></motion.div>
        )}
      </button>
      <button
        className="flex flex-col text-lg h-[56px] text-bgDark dark:text-bgWhite hover:text-main dark:hover:text-main transition-colors duration-300 p-2 "
        onClick={() => setSell(true)}
      >
        <p className="self-start">Trade</p>
        {sell && (
          <motion.div
            className="w-0 h-1 mt-2 bg-main"
            animate={{ width: "100%" }}
            transition={{ ease: "easeIn", duration: 0.2 }}
          ></motion.div>
        )}
      </button>
    </div>
  );
}
