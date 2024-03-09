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
      const param = searchParams.get("tab");
      if (!param || +param > 4) {
        setTab("0");
        setSearchParams({ ["tab"]: "0" });
      } else {
        setTab(param);
      }
    },
    [searchParams, setSearchParams]
  );

  return (
    <div className="flex flex-col md750:flex-row h-fit">
      <WalletNav setTab={setTab} setSearchParams={setSearchParams} />
      <WalletContent tab={tab} />
    </div>
  );
}
