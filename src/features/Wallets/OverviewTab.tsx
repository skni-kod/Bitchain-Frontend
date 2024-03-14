import React from "react";
import TabTitle from "./TabTitle";
import AccountBalanceCard from "../../ui/navigation/AccountBalanceCard";
import DepositBtn from "./DepositBtn";
import WithdrawBtn from "./WithdrawBtn";
import TransferBtn from "./TransferBtn";
import ConvertBtn from "./ConvertBtn";
import AccountDetail from "./AccountDetail";
import OperationsHistory from "./OperationsHistory";
import { FundBalanceItemInterface } from "../../interfaces/FundBalanceInterface";

interface OverviewTabProps {
  fundBalance: FundBalanceItemInterface[];
}

export default function OverviewTab({ fundBalance }: OverviewTabProps) {
  return (
    <div className="w-full p-6 md800:p-16 md800:py-10">
      <TabTitle title="Overview" pnl={true} />
      <AccountBalanceCard assetsUsd={68600} type="account" fundBalance={fundBalance}/>
      <div className="flex sm:gap-4 xs:gap-3 flex-wrap gap-1 w">
        <DepositBtn />
        <WithdrawBtn />
        <TransferBtn />
        <ConvertBtn />
      </div>
      <div className="grid xl:grid-cols-[2fr_1fr] gap-20">
        <AccountDetail />
        <OperationsHistory />
      </div>
    </div>
  );
}
