import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface WalletMobileNavButtonProps {
  icon: React.ReactNode;
  text: string;
}

export default function WalletMobileNavButton({
  icon,
  text,
}: WalletMobileNavButtonProps) {
  return (
    <span className="flex justify-between items-center w-full bg-bgWhite1 dark:bg-bgDark1 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 p-5 rounded-lg">
      {icon}
      {text}
      <IoIosArrowDown />
    </span>
  );
}
