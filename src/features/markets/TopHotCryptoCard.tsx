import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import { useAllCryptoPrice } from "./useAllCryptoPrice";
import { useSpecificCryptoInfo } from "./useSpecificCryptoInfo";
import { formatCurrency } from "../../utils/helpers";
import Spinner from "../../ui/Spinner";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
}

interface data {
  data: CryptoData[];
  timestramp: number;
}

// interface CryptoInfo {
//   circulatingSupply: string;
//   date: string;
//   priceUsd: string;
//   time: number;
// }

// interface CryptoInfoData {
//   data: CryptoInfo[];
//   timestamp: number;
// }

export default function TopHotCryptoCard() {
  const { getSpecificCryptoInfo, isPending } = useSpecificCryptoInfo();
  const queryClient = useQueryClient();
  const data: data = queryClient.getQueryData(["cryptoPrice"])!;

  const topCryptoPrices = useRef<unknown>();
  const topCrypto = useRef<CryptoData>();

  console.log(topCrypto);
  console.log(topCryptoPrices);

  useEffect(() => {
    if (data) {
      const today = new Date().getTime();
      const twentyFourHoursAgo = today - 24 * 3600000;
      const popular = data.data.slice(0, 15);
      topCrypto.current = popular.reduce((prevCrypto, currentCrypto) => {
        return prevCrypto?.changePercent24Hr > currentCrypto?.changePercent24Hr
          ? prevCrypto
          : currentCrypto;
      }, popular[0]);
      topCryptoPrices.current = getSpecificCryptoInfo({
        id: topCrypto.current.id,
        interval: "m15",
        start: twentyFourHoursAgo,
        end: today,
      });
    }
  }, [data, getSpecificCryptoInfo]);

  return (
    <div className="dark:bg-bgDark1Hover bg-bgWhite1Hover p-4 rounded-lg text-bgDark dark:text-bgWhite">
      <p>24h hot</p>
      {isPending ? (
        <>
          <div>
            <img src="" />
            {topCrypto.current?.symbol}/USDT
          </div>
          <p>{formatCurrency(+topCrypto.current!.priceUsd!)}</p>
          <p>zł</p>
          <p>{+topCrypto.current!.changePercent24Hr!}</p>
        </>
      ) : (
        <Spinner type="button" />
      )}
    </div>
  );
}
