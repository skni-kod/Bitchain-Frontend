import React, { useEffect } from "react";
import DetailsHeader, { userCurrency } from "../ui/cryptoDetails/DetailsHeader";
import { SetURLSearchParams, useSearchParams } from "react-router-dom";
import { useCryptoAsset } from "../hooks/useCryptoAsset";
import CryptoDetailsChart from "../ui/cryptoDetails/CryptoDetailsChart";
import Spinner from "../ui/Spinner";
import { useQueryClient } from "@tanstack/react-query";
import CryptoDailyRating from "../ui/cryptoDetails/CryptoDailyRating";

type CryptoData = {
  changePercent24Hr: string;
  explorer: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
};

export type CryptoDataObject = {
  data: CryptoData;
  timestramp: number;
};

export default function Details() {
  const [searchParams]: [URLSearchParams, SetURLSearchParams] =
    useSearchParams();
  const cryptoName = searchParams.get("crypto");
  const { data: cryptoInfo, isSuccess } = useCryptoAsset(cryptoName);
  const queryClient = useQueryClient();
  const userCurrency = queryClient.getQueryData(["userCurrency"]);

  return (
    <div className="w-full pt-5 max-w-7xl mx-auto">
      {isSuccess ? (
        <div>
          <DetailsHeader
            crypto={cryptoInfo as CryptoDataObject}
            userCurrency={userCurrency as userCurrency}
          />
          <CryptoDetailsChart
            crypto={cryptoInfo as CryptoDataObject}
            userCurrency={userCurrency as userCurrency}
          />
          <CryptoDailyRating />
        </div>
      ) : (
        <Spinner type="full" />
      )}
    </div>
  );
}
