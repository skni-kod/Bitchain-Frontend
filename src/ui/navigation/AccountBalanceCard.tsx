import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useQueryClient } from "@tanstack/react-query";
import { userCurrency } from "../cryptoDetails/DetailsHeader";
import { formatCurrency } from "../../utils/helpers";
import { FundBalanceItemInterface } from "../../interfaces/FundBalanceInterface";

interface AccountBalanceCardProps {
  onCloseFunction?: () => void;
  assetsUsd: number;
  type: "nav" | "account";
  fundBalance: FundBalanceItemInterface[];
}

export default function AccountBalanceCard({
  onCloseFunction,
  assetsUsd,
  type,
  fundBalance,
}: AccountBalanceCardProps) {
  const queryClient = useQueryClient();
  const userCurrency: userCurrency | undefined = queryClient.getQueryData([
    "userCurrency",
  ]);
  const usdt: string | undefined = queryClient.getQueryData(["USDT"]);
  // const balance =

  return (
    <div
      className={`flex flex-col w-full  bg-bgWhite1Hover dark:bg-bgDark1Hover text-bgDark dark:text-bgWhite rounded-lg  cursor-default ${
        type === "nav" ? "p-3 mb-3 mt-2" : "p-7 my-8"
      }`}
    >
      {type === "nav" ? (
        <NavLink
          to="/overview?tab=1"
          className="flex justify-between items-center w-full"
          onClick={onCloseFunction}
        >
          <p>Total assets</p>
          <span>
            <IoIosArrowForward />
          </span>
        </NavLink>
      ) : (
        <div>
          <p className="text-slate-500 dark:text-slate-300">Total assets</p>
        </div>
      )}
      <span
        className={`font-medium text-left my-2 ${
          type === "nav" ? "text-2xl" : "text-[32px]"
        }`}
      >
        {usdt ? formatCurrency(assetsUsd * +usdt) : "--.--"} USDT
      </span>
      <span
        className={`text-left font-normal text-slate-300 ${
          type === "nav"
            ? "text-xs"
            : "text-base text-slate-500 dark:text-slate-300"
        }`}
      >
        ~ {userCurrency ? userCurrency.currencySymbol : "$"}
        {userCurrency
          ? formatCurrency(assetsUsd / userCurrency.rateUsd)
          : formatCurrency(assetsUsd)}
      </span>
    </div>
  );
}
