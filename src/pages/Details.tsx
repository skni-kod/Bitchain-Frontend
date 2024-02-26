import DetailsHeader, { userCurrency } from "../ui/cryptoDetails/DetailsHeader";
import {
  SetURLSearchParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
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
import MarketInformation from "../ui/cryptoDetails/MarketInformation";
import TrendingCryptos from "../features/CryptoDetails/TrendingCryptos";
import { useForceUpdate } from "../hooks/useForceUpdate";
import { useEffect, useState } from "react";

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
  const location = useLocation();
  const { forceUpdate } = useForceUpdate();
  const width = useUserWidth();
  const cryptoName = searchParams.get("crypto");
  const { data: cryptoInfo, isSuccess } = useCryptoAsset(cryptoName);
  const queryClient = useQueryClient();
  const userCurrency = queryClient.getQueryData(["userCurrency"]);
  const [firstLoad, setFirstLoad] = useState<string>();
  const [loadingCrypto, setLoadingCrypto] = useState<boolean>(false);

  useEffect(
    function () {
      // forceUpdate();
      setLoadingCrypto(firstLoad !== cryptoInfo?.data?.name);
      console.log(firstLoad);
      console.log(cryptoInfo);
      console.log(loadingCrypto);
    },
    [forceUpdate, location, cryptoInfo, firstLoad]
  );

  useEffect(
    function () {
      setLoadingCrypto(false);
    },
    [firstLoad]
  );

  // useEffect(
  //   function () {
  //     // if (cryptoInfo?.data?.id) {
  //     //   setLoadingCrypto(false);
  //     // }
  //     setLoadingCrypto(true);
  //     if (cryptoInfo?.data?.id === firstLoad) {
  //       setLoadingCrypto(false);
  //     }
  //   },
  //   [firstLoad, cryptoInfo?.data?.id]
  // );

  // useEffect(
  //   function () {
  //   },
  //   [firstLoad, cryptoInfo]
  // );

  return (
    <div className="w-full pt-7 max-w-7xl mx-auto px-3">
      {isSuccess && loadingCrypto ? (
        <div className="w-full">
          {width > 1024 ? (
            <div className="grid grid-cols-[auto_350px] w-full">
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
                <MarketInformation
                  crypto={cryptoInfo as CryptoDataObject}
                  userCurrency={userCurrency as userCurrency}
                />
              </div>

              <div className="mt-16">
                <CryptoDetailsBuy
                  crypto={cryptoInfo as CryptoDataObject}
                  userCurrency={userCurrency as userCurrency}
                />
                <TrendingCryptos
                  userCurrency={userCurrency as userCurrency}
                  onFirstLoad={setFirstLoad}
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
              <MarketInformation
                crypto={cryptoInfo as CryptoDataObject}
                userCurrency={userCurrency as userCurrency}
              />
              <TrendingCryptos
                userCurrency={userCurrency as userCurrency}
                onFirstLoad={setFirstLoad}
              />
            </>
          )}
          <Footer />
        </div>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <Spinner type="full" />
        </div>
      )}
    </div>
  );
}
