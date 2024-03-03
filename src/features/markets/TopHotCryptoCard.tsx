import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useSpecificCryptoInfo } from "./useSpecificCryptoInfo";
import { formatCurrency } from "../../utils/helpers";
import { NavLink } from "react-router-dom";
import TopCryptoChart from "./TopCryptoChart";

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  rank: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
}

export interface AllCryptoData {
  data: CryptoData[];
  timestramp: number;
}

interface CryptoInfo {
  circulatingSupply: string;
  date: string;
  priceUsd: string;
  time: number;
}

export interface CryptoInfoData {
  data: CryptoInfo[];
  timestamp: number;
}

interface TopHotCryptoCardProps {
  type: "hot24" | "top24" | "big24";
  data: AllCryptoData;
}

interface UserCurrencyType {
  id: string;
  symbol: string;
  currencySymbol: string;
  rateUsd: string;
}

export default function TopHotCryptoCard({
  data,
  type,
}: TopHotCryptoCardProps) {
  const {
    getSpecificCryptoInfo,
    data: topCryptoPrices,
    isSuccess,
  } = useSpecificCryptoInfo();
  const queryClient = useQueryClient();
  topCryptoPrices as CryptoInfoData | undefined;

  const topCrypto = useRef<CryptoData>();
  const firstFetch = useRef<CryptoData>();
  const usdtPrice: number | undefined = queryClient.getQueryData(["USDT"]);
  const userCurrency: UserCurrencyType | undefined = queryClient.getQueryData([
    "userCurrency",
  ]);

  useEffect(() => {
    if (data) {
      let popular;
      if (type === "hot24") {
        popular = data.data.slice(0, 15);
      } else if (type === "top24") {
        popular = data.data;
      } else if (type === "big24") {
        popular = data.data.slice(0, 3);
      }

      topCrypto.current = popular?.concat().sort((a, b) => {
        const priceA = parseFloat(a.changePercent24Hr);
        const priceB = parseFloat(b.changePercent24Hr);

        if (priceA > priceB) {
          return -1;
        } else if (priceA < priceB) {
          return 1;
        } else {
          return 0;
        }
      })[0];
      topCrypto.current = popular?.reduce((prevCrypto, currentCrypto) => {
        const prevChangePercent = parseFloat(prevCrypto.changePercent24Hr);
        const currentChangePercent = parseFloat(
          currentCrypto.changePercent24Hr
        );
        const pop =
          prevChangePercent > currentChangePercent ? prevCrypto : currentCrypto;
        if (pop.symbol === "USDT") {
          return data.data[0];
        }
        return pop;
      }, popular[0]);
      if (!firstFetch.current?.priceUsd) {
        firstFetch.current = topCrypto.current;
      }
    }
  }, [data, getSpecificCryptoInfo, topCryptoPrices, queryClient, type]);

  useEffect(
    function () {
      const today = new Date().getTime();
      const twentyFourHoursAgo = today - 24 * 3600000;

      getSpecificCryptoInfo({
        id: topCrypto.current!.id!,
        interval: "m15",
        start: twentyFourHoursAgo,
        end: today,
      });
    },
    [getSpecificCryptoInfo]
  );

  return (
    <NavLink
      to={`/spot?${topCrypto.current?.symbol}USDT`}
      className="dark:bg-bgDark1 bg-bgWhite1Hover p-4 rounded-lg text-bgDark dark:text-bgWhite "
    >
      <p className="border-b-[1px] border-solid border-slate-200 dark:border-stone-700 text-xs px-2 pb-2">
        {type === "hot24"
          ? "Hot 24"
          : type === "top24"
          ? "Top gainer 24"
          : type === "big24" && "Top 5 Crypto"}
      </p>
      <>
        <div className="flex p-2 gap-2">
          <img
            className="rounded-full w-6"
            src={`https://assets.coincap.io/assets/icons/${topCrypto.current?.symbol?.toLocaleLowerCase()}@2x.png`}
          />
          {topCrypto.current?.symbol}/USDT
        </div>
        <div className="flex gap-7 justify-between">
          <div>
            <p className="font-bold px-2 pt-1">
              {topCrypto.current?.priceUsd && usdtPrice
                ? formatCurrency(+topCrypto.current!.priceUsd! * usdtPrice!)
                : "--"}
            </p>
            <p className=" text-[10px] text-gray px-2">
              {topCrypto.current?.priceUsd &&
                (userCurrency
                  ? formatCurrency(
                      +topCrypto.current!.priceUsd! / +userCurrency.rateUsd
                    )
                  : formatCurrency(+topCrypto.current!.priceUsd!))}{" "}
              {userCurrency ? userCurrency.symbol : "USD"}
            </p>
            <p
              className={`px-2 text-xs pt-1 ${
                topCrypto.current?.priceUsd &&
                +topCrypto.current!.changePercent24Hr! > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {topCrypto.current?.priceUsd &&
                (+topCrypto.current!.changePercent24Hr! > 0
                  ? `+${formatCurrency(+topCrypto.current!.changePercent24Hr!)}`
                  : formatCurrency(+topCrypto.current!.changePercent24Hr!))}
              %
            </p>
          </div>
          {isSuccess && <TopCryptoChart hot24Data={topCryptoPrices} />}
        </div>
      </>
    </NavLink>
  );
}
