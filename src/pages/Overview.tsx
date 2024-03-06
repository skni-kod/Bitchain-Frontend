import React from "react";
import WalletContent from "../features/Wallets/WalletContent";
import WalletNav from "../features/Wallets/WalletNav";

export default function Overview() {
  return (
    <div>
      <WalletNav />
      <WalletContent />
    </div>
  );
}
