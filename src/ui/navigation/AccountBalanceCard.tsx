import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function AccountBalanceCard() {
  const userData = {balance: 14232.312, km: 12321.212}; //Pablo kiedy logowanie??????????????????????????????????????????????????///

  return (
    <div className="flex flex-col w-full p-3 bg-bgWhite1Hover dark:bg-bgDark1Hover rounded-lg mb-3 mt-2 cursor-default">
      <NavLink to="assets" className="flex justify-between items-center w-full">
        <p>Total assets</p>
        <span>
          <IoIosArrowForward />
        </span>
      </NavLink>
      <span className="text-2xl text-left my-2">{userData.balance} USDT</span>
      <span className="text-xs text-left font-normal text-slate-300">~ KM {userData.km}</span>
    </div>
  );
}
