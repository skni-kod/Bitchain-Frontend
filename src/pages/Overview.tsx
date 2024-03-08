import React, { useEffect, useState } from "react";
import {
  SetURLSearchParams,
  URLSearchParamsInit,
  useSearchParams,
} from "react-router-dom";
import WalletContent from "../features/Wallets/WalletContent";
import WalletNav from "../features/Wallets/WalletNav";

export default function Overview() {
  const [tab, setTab] = useState<string>("0");
  const [searchParams, setSearchParams]: [
    URLSearchParamsInit,
    SetURLSearchParams
  ] = useSearchParams();

  useEffect(
    function () {
      setTab(searchParams.get("tab") ?? "0");
    },
    [searchParams]
  );

  return (
    <div className="flex flex-col md750:flex-row">
      <WalletNav tab={tab} setTab={setTab} setSearchParams={setSearchParams} />
      <WalletContent tab={tab} />
    </div>
  );
}
