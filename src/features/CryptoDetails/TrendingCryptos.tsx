import { useEffect, useRef } from "react";
import { useAllCryptoPrice } from "../markets/useAllCryptoPrice";
import { userCurrency } from "../../ui/cryptoDetails/DetailsHeader";
import Spinner from "../../ui/Spinner";
import { AllCryptoData, CryptoData } from "../markets/TopHotCryptoCard";
import TrendingCryptoItem from "./TrendingCryptoItem";
import { useForceUpdate } from "../../hooks/useForceUpdate";

interface TrendingCryptosProps {
  userCurrency: userCurrency;
  onFirstLoad: (s: string) => void;
}

export default function TrendingCryptos({
  userCurrency,
  onFirstLoad,
}: TrendingCryptosProps) {
  const { data, isSuccess } = useAllCryptoPrice(500, 0, false);
  const { forceUpdate } = useForceUpdate();

  const gainer = useRef<CryptoData[]>();
  const loser = useRef<CryptoData[]>();
  const trending = useRef<CryptoData[]>();

  useEffect(
    function () {
      const cryptoData = data;

      if (cryptoData) {
        trending.current = cryptoData.data.slice(0, 20);
        cryptoData as CryptoData[];

        trending.current = trending.current?.sort(
          (a: CryptoData, b: CryptoData) => {
            const priceA = parseFloat(a.changePercent24Hr);
            const priceB = parseFloat(b.changePercent24Hr);

            if (priceA > priceB) {
              return -1;
            } else if (priceA < priceB) {
              return 1;
            } else {
              return 0;
            }
          }
        );
        trending.current = trending.current?.slice(0, 8);
      }
    },
    [isSuccess, data]
  );

  useEffect(
    function () {
      const cryptoData = data as AllCryptoData;

      if (cryptoData) {
        gainer.current = cryptoData.data.concat().sort((a, b) => {
          const priceA = parseFloat(a.changePercent24Hr);
          const priceB = parseFloat(b.changePercent24Hr);

          if (priceA > priceB) {
            return -1;
          } else if (priceA < priceB) {
            return 1;
          } else {
            return 0;
          }
        });
        gainer.current = gainer.current.slice(0, 3);
      }
    },
    [isSuccess, data]
  );

  useEffect(
    function () {
      const cryptoData = data as AllCryptoData;

      if (cryptoData) {
        loser.current = cryptoData.data.concat().sort((a, b) => {
          const priceA = parseFloat(a.changePercent24Hr);
          const priceB = parseFloat(b.changePercent24Hr);

          if (priceA < priceB) {
            return -1;
          } else if (priceA > priceB) {
            return 1;
          } else {
            return 0;
          }
        });
        loser.current = loser.current.slice(0, 3);
      }
    },
    [isSuccess, data]
  );

  useEffect(
    function () {
      forceUpdate();
    },
    [forceUpdate, isSuccess]
  );

  return (
    <div className="p-4">
      <p className="text-3xl text-bgDark dark:text-bgWhite ">
        Trending Cryptos
      </p>
      {isSuccess ? (
        <>
          <div className="flex flex-col mt-6">
            {trending.current?.map((item) => (
              <TrendingCryptoItem
                item={item}
                userCurrency={userCurrency as userCurrency}
                key={item.id}
                onFirstLoad={onFirstLoad}
              />
            ))}
          </div>
          <p className="text-3xl text-bgDark dark:text-bgWhite mt-20">
            Top 3 Gainers
          </p>
          <div className="flex flex-col mt-6">
            {gainer.current?.map((item) => (
              <TrendingCryptoItem
                item={item}
                userCurrency={userCurrency as userCurrency}
                key={item.id}
                onFirstLoad={onFirstLoad}
              />
            ))}
          </div>
          <p className="text-3xl text-bgDark dark:text-bgWhite mt-20">
            Top 3 Losers
          </p>
          <div className="flex flex-col mt-6">
            {loser.current?.map((item) => (
              <TrendingCryptoItem
                item={item}
                userCurrency={userCurrency as userCurrency}
                key={item.id}
                onFirstLoad={onFirstLoad}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="h-[300px]">
          <Spinner type="full" />
        </div>
      )}
    </div>
  );
}
