import React, { useEffect } from "react";
import DetailsHeader, { userCurrency } from "../ui/cryptoDetails/DetailsHeader";
import { SetURLSearchParams, useSearchParams } from "react-router-dom";
import { useCryptoAsset } from "../hooks/useCryptoAsset";
import CryptoDetailsChart from "../ui/cryptoDetails/CryptoDetailsChart";
import Spinner from "../ui/Spinner";
import { useQueryClient } from "@tanstack/react-query";
import CryptoDailyRating from "../ui/cryptoDetails/CryptoDailyRating";
import CryptoDetailsBuy from "../ui/cryptoDetails/CryptoDetailsBuy";
import { useUserWidth } from "../hooks/useUserWidth";
import PriceOfTheDay from "../ui/cryptoDetails/PriceOfTheDay";
import Footer from "../ui/Footer";
import PriceHistory from "../ui/cryptoDetails/PriceHistory";

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
  const width = useUserWidth();
  const cryptoName = searchParams.get("crypto");
  const { data: cryptoInfo, isSuccess } = useCryptoAsset(cryptoName);
  const queryClient = useQueryClient();
  const userCurrency = queryClient.getQueryData(["userCurrency"]);

  return (
    <div className="w-full pt-7 max-w-7xl mx-auto px-3">
      {isSuccess ? (
        <div className="w-full">
          {width > 1024 ? (
            <div className="grid grid-cols-[auto_300px] w-full">
              <div className="pr-5">
                <DetailsHeader
                  crypto={cryptoInfo as CryptoDataObject}
                  userCurrency={userCurrency as userCurrency}
                />
                <CryptoDetailsChart
                  crypto={cryptoInfo as CryptoDataObject}
                  userCurrency={userCurrency as userCurrency}
                />
                <CryptoDailyRating crypto={cryptoInfo as CryptoDataObject} />
                <PriceOfTheDay
                  crypto={cryptoInfo as CryptoDataObject}
                  userCurrency={userCurrency as userCurrency}
                />
                <PriceHistory
                  crypto={cryptoInfo as CryptoDataObject}
                  userCurrency={userCurrency as userCurrency}
                />
              </div>

              <div className="mt-16">
                <CryptoDetailsBuy
                  crypto={cryptoInfo as CryptoDataObject}
                  userCurrency={userCurrency as userCurrency}
                />
              </div>
            </div>
          ) : (
            <>
              <DetailsHeader
                crypto={cryptoInfo as CryptoDataObject}
                userCurrency={userCurrency as userCurrency}
              />
              <CryptoDetailsBuy
                crypto={cryptoInfo as CryptoDataObject}
                userCurrency={userCurrency as userCurrency}
              />
              <CryptoDetailsChart
                crypto={cryptoInfo as CryptoDataObject}
                userCurrency={userCurrency as userCurrency}
              />
              <CryptoDailyRating crypto={cryptoInfo as CryptoDataObject} />
              <PriceOfTheDay
                crypto={cryptoInfo as CryptoDataObject}
                userCurrency={userCurrency as userCurrency}
              />
              <PriceHistory
                crypto={cryptoInfo as CryptoDataObject}
                userCurrency={userCurrency as userCurrency}
              />
            </>
          )}
          <Footer />
        </div>
      ) : (
        <Spinner type="full" />
      )}
    </div>
  );
}
