import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useSpecificCryptoInfo } from "./useSpecificCryptoInfo";
import { formatCurrency } from "../../utils/helpers";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { NavLink } from "react-router-dom";

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

interface CryptoInfo {
  circulatingSupply: string;
  date: string;
  priceUsd: string;
  time: number;
}

interface CryptoInfoData {
  data: CryptoInfo[];
  timestamp: number;
}

interface TopHotCryptoCardProps {
  type: "hot24" | "top24" | "big24";
}

export default function TopHotCryptoCard({ type }: TopHotCryptoCardProps) {
  const {
    getSpecificCryptoInfo,
    isSuccess,
    data: topCryptoPrices,
  } = useSpecificCryptoInfo();
  const queryClient = useQueryClient();
  const data: data = queryClient.getQueryData(["cryptoPrice"])!;
  let hot24Data: CryptoInfoData | undefined;
  if (type === "hot24") {
    hot24Data = queryClient.getQueryData(["hot24"]);
  } else if (type === "top24") {
    hot24Data = queryClient.getQueryData(["top24"]);
  } else if (type === "big24") {
    hot24Data = queryClient.getQueryData(["big24"]);
  }

  const topCrypto = useRef<CryptoData>();
  const options = useRef<unknown>();
  const firstFetch = useRef<CryptoData>();

  console.log(topCrypto);
  console.log(topCryptoPrices);

  useEffect(() => {
    if (data) {
      const today = new Date().getTime();
      let popular;
      const twentyFourHoursAgo = today - 24 * 3600000;
      if (type === "hot24") {
        popular = data.data.slice(0, 15);
      } else if (type === "top24") {
        popular = data.data.slice(0, 2000);
      } else if (type === "big24") {
        popular = data.data.slice(0, 3);
      }
      topCrypto.current = popular?.reduce((prevCrypto, currentCrypto) => {
        return prevCrypto?.changePercent24Hr > currentCrypto?.changePercent24Hr
          ? prevCrypto
          : currentCrypto;
      }, popular[0]);
      if (!firstFetch.current?.priceUsd) {
        getSpecificCryptoInfo({
          id: topCrypto.current!.id!,
          interval: "m15",
          start: twentyFourHoursAgo,
          end: today,
        });
        firstFetch.current = topCrypto.current;
      }
      if (type === "hot24") {
        queryClient.setQueryData(["hot24"], topCryptoPrices);
      } else if (type === "top24") {
        queryClient.setQueryData(["top24"], topCryptoPrices);
      } else if (type === "big24") {
        queryClient.setQueryData(["big24"], topCryptoPrices);
      }
    }
  }, [data, getSpecificCryptoInfo, topCryptoPrices, queryClient, type]);

  useEffect(() => {
    if (!hot24Data) {
      return;
    }
    const cryptoData = hot24Data;
    const series = cryptoData?.data.map((item) => [item.time, +item.priceUsd]);

    options.current = {
      chart: {
        type: "line",
        width: 120,
        height: 80,
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
      plotOptions: {
        series: {
          color: "#ff5700",
          enableMouseTracking: false,
          marker: {
            enabled: false, // wyłącz wyświetlanie markerów na liniach
          },
          dataLabels: {
            enabled: false, // wyłącz wyświetlanie etykiet danych
          },
          legend: {
            enabled: false, // wyłącz wyświetlanie legendy
          },
        },
      },
      credits: { enabled: false },
      tooltip: {
        enabled: false,
        track: null,
      },
      title: {
        text: null, // ukryj tytuł wykresu
      },
      legend: {
        enabled: false, // ukryj legendę
      },
      xAxis: {
        visible: false, // ukryj osie x
      },
      yAxis: {
        visible: false, // ukryj osie y
      },
      series: [
        {
          data: series,
          name: "Crypto Prices", // Dodaj nazwę serii danych
        },
      ],
    };
    console.log(options.current);
  }, [hot24Data]);

  return (
    <NavLink to={`/spot?${topCrypto.current?.symbol}USDT`} className="dark:bg-bgDark1 bg-bgWhite1Hover p-4 rounded-lg text-bgDark dark:text-bgWhite ">
      <p className="border-b-[1px] border-solid border-slate-200 dark:border-stone-700 text-xs px-2 pb-2">
        {type === "hot24"
          ? "Hot 24"
          : type === "top24"
          ? "Top gainer 24"
          : type === "big24" && "Top 5 Crypto"}
      </p>
      {/* {isSuccess ? ( */}
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
              {topCrypto.current?.priceUsd &&
                formatCurrency(+topCrypto.current!.priceUsd!)}
            </p>
            <p className=" text-[10px] text-gray px-2">
              {topCrypto.current?.priceUsd &&
                formatCurrency(+topCrypto.current!.priceUsd!)}
              USD
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
          <div>
            <HighchartsReact
              options={options.current}
              highcharts={Highcharts}
            ></HighchartsReact>
          </div>
        </div>
      </>
    </NavLink>
  );
}
