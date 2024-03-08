import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

interface AccountBalanceCardProps {
  onCloseFunction: () => void;
}

export default function AccountBalanceCard({
  onCloseFunction,
}: AccountBalanceCardProps) {
  const userData = { balance: 14232.312, km: 12321.212 }; //Pablo kiedy logowanie??????????????????????????????????????????????????///

  return (
    <div className="flex flex-col w-full p-3 bg-bgWhite1Hover dark:bg-bgDark1Hover rounded-lg mb-3 mt-2 cursor-default">
      <NavLink to="/overview?tab=1" className="flex justify-between items-center w-full" onClick={onCloseFunction}>
        <p>Total assets</p>
        <span>
          <IoIosArrowForward />
        </span>
      </NavLink>
      <span className="text-2xl text-left my-2">{userData.balance} USDT</span>
      <span className="text-xs text-left font-normal text-slate-300">
        ~ KM {userData.km}
      </span>
    </div>
  );
}
