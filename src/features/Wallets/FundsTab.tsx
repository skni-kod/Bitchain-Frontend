import React from "react";
import TabTitle from "./TabTitle";
import AccountBalanceCard from "../../ui/navigation/AccountBalanceCard";

export default function FundsTab() {
  return (
    <div className="w-full p-6 md800:p-16 md800:py-10">
      <TabTitle title="Funds Account" pnl={true} />
      <AccountBalanceCard assetsUsd={68600} type="account" />
    </div>
  );
}
