import React from "react";
import { motion } from "framer-motion";

export interface DropdownProps {
  children: React.ReactNode;
  onCloseFunction: () => void;
  direction?: string
}

const dropdownVariants = {
  hidden: { opacity: 0, translateY: "-10%", scale: 0.8 },
  visible: { opacity: 1, translateY: "0%", scale: 1 },
};

const Dropdown: React.FC<DropdownProps> = ({
  children,
  onCloseFunction,
  direction ="left-0"
}: DropdownProps) => {

    return (
    <motion.div
      transition={{ duration: 0.1 }}
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      className={`absolute top-full pt-3 ${direction}`}
    >
      <div className="relative flex justify-center items-center flex-col pt-3 bg-white drop-shadow-md p-5 -z-10 rounded-lg">
        {React.Children.map(children, (child) =>
          React.cloneElement(child as React.ReactElement, {
            onCloseFunction: onCloseFunction,
          })
        )}
      </div>
    </motion.div>
  );
};

export default Dropdown;
