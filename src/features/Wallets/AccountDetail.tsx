import React from "react";
import AccountBalance from "./AccountBalance";

export default function AccountDetail() {
  return (
    <div>
      <p className="text-[20px] font-semibold pt-16 pb-6 text-bgDark dark:text-bgWhite">
        Account Details
      </p>
      <div className="w-full bg-slate-100 h-[1px]"></div>
      <div>
        <AccountBalance
          title="Fund Account"
          balance={153}
          defSymbol="$"
          balanceDefCur={32132}
          to="1"
        />
        <div className="w-full bg-slate-100 h-[1px]"></div>
        <AccountBalance
          title="Futures Account"
          balance={153}
          defSymbol="$"
          balanceDefCur={32132}
          to="2"
        />
        <div className="w-full bg-slate-100 h-[1px]"></div>
        <AccountBalance
          title="Stacking Account"
          balance={153}
          defSymbol="$"
          balanceDefCur={32132}
          to="3"
        />
        <div className="w-full bg-slate-100 h-[1px]"></div>
      </div>
    </div>
  );
}
