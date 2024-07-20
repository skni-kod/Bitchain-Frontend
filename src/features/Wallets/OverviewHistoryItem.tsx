import React from "react";
import { FundHistoryItemInterface } from "../../interfaces/FundHistoryItemInterface";

interface OverviewHistoryItemProps {
  item: FundHistoryItemInterface;
}

export default function OverviewHistoryItem({
  item,
}: OverviewHistoryItemProps) {
  const date = new Date(item.transaction_date);

  return (
    <>
      <div className="flex justify-between items-center w-full h-[130px] text-bgDark dark:text-bgWhite">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <p className="font-medium">
              {item.transaction_type.charAt(0).toUpperCase() +
                item.transaction_type.slice(1)}
            </p>
            <p className="text-gray">
              {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </p>
          </div>
          <p className="text-xl font-medium">
            {item.transaction_amount} {item.transaction_currency}
          </p>
        </div>
      </div>
      <div className="w-full bg-slate-100 h-[1px]"></div>
    </>
  );
}
