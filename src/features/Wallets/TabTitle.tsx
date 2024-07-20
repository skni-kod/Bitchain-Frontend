import React from "react";
import Button from "../../ui/Button";
import { Link, useSearchParams } from "react-router-dom";
import { FiPieChart } from "react-icons/fi";

interface TabTitleProps {
  title: string;
  pnl: boolean;
}

export default function TabTitle({ title, pnl }: TabTitleProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  function onClick() {
    searchParams.set("analysis", "true");
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-4">
      <h2 className="text-[26px] md400:text-[32px] font-medium text-bgDark dark:text-bgWhite">
        {title}
      </h2>{" "}
      {pnl && (
        <button
          onClick={onClick}
          className="flex w-[130px] justify-center items-center gap-2 p-3 py-2 border-2 border-solid border-main text-xs rounded-lg text-main hover:bg-main hover:text-white transition-colors duration-300"
        >
          <FiPieChart /> PnL Analysis
        </button>
      )}
    </div>
  );
}
