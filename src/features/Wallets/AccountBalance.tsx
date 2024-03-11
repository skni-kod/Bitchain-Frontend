import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

interface AccountBalanceProps {
  title: string;
  balance: number;
  balanceDefCur: number;
  to: string;
  defSymbol: string;
}

export default function AccountBalance({
  balance,
  balanceDefCur,
  title,
  to,
  defSymbol,
}: AccountBalanceProps) {
  const [searchParms, setSearchParams] = useSearchParams();

  function onClick() {
    searchParms.set("tab", to);
    setSearchParams(searchParms);
  }

  return (
    <button
      onClick={onClick}
      className="flex justify-between items-center py-10 w-full text-bgDark dark:text-bgWhite"
    >
      <div className="flex flex-col gap-3 text-left">
        <p className="text-sm">{title}</p>
        <p className="text-xs text-gray">
          <span className="text-[20px] font-semibold text-bgDark dark:text-bgWhite">
            {formatCurrency(balance)} USDT
          </span>{" "}
          ~ {defSymbol}
          {formatCurrency(balanceDefCur)}
        </p>
      </div>
      <span className="text-xl">
        <IoIosArrowForward />
      </span>
    </button>
  );
}
