import { useEffect, useRef, useState } from "react";
import { useSpecificCryptoInfo } from "../../features/markets/useSpecificCryptoInfo";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { UserCurrencyType } from "../../features/markets/MarketsTableRows";
import { useQueryClient } from "@tanstack/react-query";
import { FaExternalLinkAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useInView } from "framer-motion";

interface Crypto {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  priceUsd: string;
  changePercent24Hr: string;
}

interface ChartProps {
  crypto: Crypto;
}

function Chart({ crypto }: ChartProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const { getSpecificCryptoInfo, data } = useSpecificCryptoInfo();
  const [choosenInterval, setChoosenInterval] = useState<"m5" | "h1" | "d1">(
    "m5"
  );
  const queryClient = useQueryClient();
  const userCurrency: UserCurrencyType | undefined = queryClient.getQueryData([
    "userCurrency",
  ]);
  const series = data?.data.map((item) => [item.time, +item.priceUsd]);
  let minValue;
  let maxValue;
  if (series && series.length > 0) {
    minValue = series.reduce(
      (min, current) => (current[1] < min ? current[1] : min),
      series[0][1]
    );
    maxValue = series.reduce(
      (max, current) => (current[1] > max ? current[1] : max),
      series[0][1]
    );
  }
  const cryptoValue = Number(crypto?.priceUsd).toFixed(2);
  const cryptoConverted = userCurrency?.rateUsd
    ? (Number(cryptoValue) / Number(userCurrency?.rateUsd)).toFixed(2)
    : cryptoValue;
  const cryptoChange: number = Number(
    Number(crypto?.changePercent24Hr).toFixed(2)
  );

  const options = {
    chart: {
      type: "area",
      backgroundColor: "rgba(0, 0, 0, 0)",
      height: `${Number(crypto?.rank) === 0 ? "250px" : "125px"}`,
    },
    series: [
      {
        data: series,
        spline: true,
        name: crypto?.name,
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0.9,
          },
          stops: [
            [0, "rgba(255, 87, 0, 0.3)"],
            [1, "rgba(10, 11, 13,0.5)"],
          ],
        },
        color: "#ff5700",
      },
    ],
    plotOptions: {
      series: {
        color: "#ff5700",

        marker: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
      },
    },

    tooltip: {
      backgroundColor: "#f0f0f0",
      borderColor: "black",
      borderRadius: 5,
      borderWidth: 1,
      formatter: function (
        this: Highcharts.TooltipFormatterContextObject
      ): string {
        const yValue = typeof this.y === "number" ? this.y : 0;
        const xValue = typeof this.x === "number" ? this.x : 0;
        return `
					<p style="display:block; margin-left: 15px; font-size: 1.2rem; font-weight: bold;">${Highcharts.numberFormat(
            userCurrency?.rateUsd
              ? Number(yValue) / Number(userCurrency?.rateUsd)
              : yValue,
            2
          )}</p></br>
				<p  ">${Highcharts.dateFormat(
          choosenInterval === "m5"
            ? "%H:%M"
            : choosenInterval === "h1"
            ? "%d.%m.%Y %H:%M"
            : "%d.%m.%Y",
          xValue || 0
        )}</p>
					`;
      },
    },
    credits: { enabled: false },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
      min: minValue,
      max: maxValue,
    },
    title: { text: null },
    legend: {
      enabled: false,
    },
  };

  useEffect(() => {
    const today = new Date().getTime();
    let startTime: number = today - 24 * 3600000;
    if (choosenInterval === "m5") {
      startTime = today - 24 * 3600000;
    }
    if (choosenInterval === "h1") {
      startTime = today - 24 * 3600000 * 30;
    }
    if (choosenInterval === "d1") {
      startTime = today - 24 * 3600000 * 90;
    }

    getSpecificCryptoInfo({
      id: crypto?.id,
      interval: choosenInterval || "m5",
      start: startTime,
      end: today,
    });
  }, [getSpecificCryptoInfo, crypto, choosenInterval]);


  return (
    <div
      ref={ref}
      style={{
        transform: inView ? "none" : "translateY(150px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
      className={`${
        crypto?.rank === "1" ? "w-full" : "md800:w-[49%] w-full"
      }  rounded-xl p-10 min-w-[220px] border-[1px] border-bgDark1Hover`}
    >
      <div className="flex gap-1 flex-row justify-between items-center">
        <NavLink
          to={`/spot?pair=${crypto?.symbol}USDT`}
          className="flex flex-wrap items-center gap-2 hover:text-mainHover"
        >
          <img
            className="rounded-full w-10"
            src={`https://assets.coincap.io/assets/icons/${crypto?.symbol?.toLocaleLowerCase()}@2x.png`}
          />
          <p className="flex items-center gap-1 text-lg">
            {`${crypto?.symbol}/${
              userCurrency?.symbol ? userCurrency?.symbol : "USD"
            }`}
            <span className="text-sm">
              <FaExternalLinkAlt />
            </span>
          </p>
        </NavLink>
        <div className="flex flex-wrap gap-1 justify-end">
          <button
            className={`${
              choosenInterval === "m5" && "bg-bgDark1Hover"
            } px-3 rounded-3xl text-bgWhite text-lg hover:bg-bgDark1Hover hover:cursor-pointer`}
            onClick={() => setChoosenInterval("m5")}
          >
            1D
          </button>
          <button
            className={`${
              choosenInterval === "h1" && "bg-bgDark1Hover"
            } px-3 rounded-3xl text-bgWhite text-lg hover:bg-bgDark1Hover hover:cursor-pointer`}
            onClick={() => setChoosenInterval("h1")}
          >
            1M
          </button>
          <button
            className={`${
              choosenInterval === "d1" && "bg-bgDark1Hover"
            } px-3 rounded-3xl text-bgWhite text-lg hover:bg-bgDark1Hover hover:cursor-pointer`}
            onClick={() => setChoosenInterval("d1")}
          >
            3M
          </button>
        </div>
      </div>
      <HighchartsReact options={options} highcharts={Highcharts} />
      <div>
        <p className="text-2xl">{cryptoConverted}</p>
        {cryptoChange > 0 && (
          <p className="flex text-lg items-center gap-2 text-green-500">
            +{cryptoChange}%
            <span>
              <FaArrowTrendUp />
            </span>
          </p>
        )}
        {cryptoChange < 0 && (
          <p className="flex text-lg items-center gap-2 text-red-500">
            {cryptoChange}%
            <span>
              <FaArrowTrendDown />
            </span>
          </p>
        )}
        {cryptoChange === 0 && (
          <p className="flex text-lg items-center gap-2">{cryptoChange}%</p>
        )}
      </div>
    </div>
  );

}

export default Chart;
