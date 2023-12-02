import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  onClick: ()=>void
}

export default function IconButton({ children, onClick }: IconButtonProps) {
  return (
    <button id='iconBtn' className="flex justify-center items-center w-8 h-8 rounded-full text-xl text-bgDark hover:bg-bgWhite1 dark:text-bgWhite dark:hover:bg-bgDark1Hover transition-colors duration-500 m-1" onClick={onClick}>
      {children}
    </button>
  );
}
