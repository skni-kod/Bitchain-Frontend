import { useEffect, useRef, useState } from "react";
import { useSpecificCryptoInfo } from "../../features/markets/useSpecificCryptoInfo";
import { userCurrency } from "./DetailsHeader";
import { CryptoDataObject } from "../../pages/Details";
import { formatCurrency } from "../../utils/helpers";
import { useQueryClient } from "@tanstack/react-query";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import useDarkMode from "../../hooks/useDarkMode";
import { useForceUpdate } from "../../hooks/useForceUpdate";

interface CryptoDetailsChartProps {
  crypto: CryptoDataObject;
  userCurrency: userCurrency;
}

type HistoryItem = {
  priceUsd: string;
  time: number;
};

type HistoryData = {
  data: HistoryItem[];
};

type TimeFrameHistory = {
  ago7DaysHistory: HistoryData;
  ago30DaysHistory: HistoryData;
  ago90DaysHistory: HistoryData;
  ago365DaysHistory: HistoryData;
};

export default function CryptoDetailsChart({
  crypto,
  userCurrency,
}: CryptoDetailsChartProps) {
  const {
    data: cryptoTimePrice,
    getSpecificCryptoInfo,
    isSuccess,
  } = useSpecificCryptoInfo();
  const percentage = useRef<number>(0);
  const { forceUpdate } = useForceUpdate();
  const queryClient = useQueryClient();
  const { isDarkMode } = useDarkMode();
  const timeFramesData: TimeFrameHistory | undefined = queryClient.getQueryData(
    ["priceHistory"]
  );
  const usdtPrice: number | undefined = queryClient.getQueryData(["USDT"]);
  const [choosenInterval, setChoosenInterval] = useState<
    "m5" | "m30" | "h1" | "h6" | "h12"
  >("m5");
  const series = cryptoTimePrice?.data.map((item) => [
    item.time,
    +item.priceUsd,
  ]);

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
  const stops = isDarkMode
    ? [
        [0, "rgba(255, 87, 0, 0.3)"],
        [1, "rgba(10, 11, 13,0.5)"],
      ]
    : [
        [0, "rgba(255, 87, 0, 0.3)"],
        [1, "rgba(255, 255, 255,1 )"],
      ];

  useEffect(() => {
    const today = new Date().getTime();
    let startTime: number = today - 24 * 3600000;
    if (choosenInterval === "m5") {
      startTime = today - 24 * 3600000;
    }
    if (choosenInterval === "m30") {
      startTime = today - 24 * 3600000 * 7;
    }
    if (choosenInterval === "h1") {
      startTime = today - 24 * 3600000 * 30;
    }
    if (choosenInterval === "h6") {
      startTime = today - 24 * 3600000 * 90;
    }
    if (choosenInterval === "h12") {
      startTime = today - 24 * 3600000 * 365;
    }

    getSpecificCryptoInfo({
      id: crypto.data.id,
      interval: choosenInterval || "m5",
      start: startTime,
      end: today,
    });
  }, [getSpecificCryptoInfo, crypto.data.id, choosenInterval]);

  useEffect(
    function () {
      if (timeFramesData) {
        if (choosenInterval === "m5") {
          percentage.current = +formatCurrency(+crypto.data.changePercent24Hr);
        } else if (choosenInterval === "m30") {
          percentage.current = +formatCurrency(
            (+crypto.data.priceUsd /
              +timeFramesData?.ago7DaysHistory.data[0].priceUsd -
              1) *
              100
          );
        } else if (choosenInterval === "h1") {
          percentage.current = +formatCurrency(
            (+crypto.data.priceUsd /
              +timeFramesData?.ago30DaysHistory.data[0].priceUsd -
              1) *
              100
          );
        } else if (choosenInterval === "h6") {
          percentage.current = +formatCurrency(
            (+crypto.data.priceUsd /
              +timeFramesData?.ago90DaysHistory.data[0].priceUsd -
              1) *
              100
          );
        } else if (choosenInterval === "h12") {
          percentage.current = +formatCurrency(
            (+crypto.data.priceUsd /
              +timeFramesData?.ago365DaysHistory.data[0].priceUsd -
              1) *
              100
          );
        }

        forceUpdate();
      } else {
        percentage.current = 0;
      }
    },
    [isSuccess, choosenInterval, forceUpdate, timeFramesData, crypto.data]
  );

  const options = {
    chart: {
      type: "area",
      backgroundColor: "rgba(0, 0, 0, 0)",
      height: `400px`,
    },
    series: [
      {
        data: series,
        spline: true,
        name: "",
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0.9,
          },
          stops: stops,
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
      crosshairs: {
        width: 1,
        color: "red",
        dashStyle: "dash",
      },
      backgroundColor: "#ffffff",
      borderColor: "black",
      borderRadius: 5,
      borderWidth: 1,
      formatter: function (
        this: Highcharts.TooltipFormatterContextObject
      ): string {
        const yValue = typeof this.y === "number" ? this.y : 0;
        const xValue = typeof this.x === "number" ? this.x : 0;
        return `
                <p style="display:block; margin-left: 15px; font-size: 1.2rem; font-weight: bold;">${
                  userCurrency
                    ? formatCurrency(+yValue / userCurrency.rateUsd, 5)
                    : formatCurrency(+yValue, 5)
                }</p></br>
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
      type: "datetime",
      labels: {
        formatter: function (
          this: Highcharts.AxisLabelsFormatterContextObject
        ) {
          if (choosenInterval === "m5") {
            return Highcharts.dateFormat("%H:%M", this.value as number);
          } else {
            return Highcharts.dateFormat("%d.%m", this.value as number);
          }
        },
        style: {
          color: `${isDarkMode ? "#f0f0f0" : "#0a0b0d"}`,
        },
      },
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

  return (
    <div className="px-4">
      <div className="flex justify-start items-end gap-5">
        <p className="text-2xl sm:text-3xl font-medium text-bgDark dark:text-white">
          {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
          {userCurrency
            ? formatCurrency(+crypto.data.priceUsd / +userCurrency.rateUsd)
            : formatCurrency(+crypto.data.priceUsd)}
        </p>
        <p
          className={`text-xl ${
            +percentage.current < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {percentage.current &&
            (+percentage.current > 0
              ? `+${percentage.current}`
              : percentage.current)}
          %
        </p>
      </div>
      <p className="text-xs text-gray pl-4">
        {usdtPrice ? formatCurrency(+crypto.data.priceUsd * usdtPrice!) : "--"}{" "}
        USDT
      </p>
      <div>
        <div className="flex flex-wrap gap-1 justify-end ">
          <button
            className={`${
              choosenInterval === "m5" &&
              "dark:bg-bgDark1Hover bg-bgWhite1Hover "
            } px-4 rounded-3xl  text-base text-bgDark dark:text-bgWhite hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover hover:cursor-pointer transition-colors duration-300`}
            onClick={() => setChoosenInterval("m5")}
          >
            1D
          </button>
          <button
            className={`${
              choosenInterval === "m30" &&
              "dark:bg-bgDark1Hover bg-bgWhite1Hover "
            } px-4 rounded-3xl  text-base text-bgDark dark:text-bgWhite hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover hover:cursor-pointer transition-colors duration-300`}
            onClick={() => setChoosenInterval("m30")}
          >
            7D
          </button>
          <button
            className={`${
              choosenInterval === "h1" &&
              "dark:bg-bgDark1Hover bg-bgWhite1Hover "
            } px-4 rounded-3xl  text-base text-bgDark dark:text-bgWhite hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover hover:cursor-pointer transition-colors duration-300`}
            onClick={() => setChoosenInterval("h1")}
          >
            30D
          </button>
          <button
            className={`${
              choosenInterval === "h6" &&
              "dark:bg-bgDark1Hover bg-bgWhite1Hover "
            } px-4 rounded-3xl  text-base text-bgDark dark:text-bgWhite hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover hover:cursor-pointer transition-colors duration-300`}
            onClick={() => setChoosenInterval("h6")}
          >
            90D
          </button>
          <button
            className={`${
              choosenInterval === "h12" &&
              "dark:bg-bgDark1Hover bg-bgWhite1Hover "
            } px-4 rounded-3xl  text-base text-bgDark dark:text-bgWhite hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover hover:cursor-pointer transition-colors duration-300`}
            onClick={() => setChoosenInterval("h12")}
          >
            365D
          </button>
        </div>
        <HighchartsReact options={options} highcharts={Highcharts} />
      </div>
    </div>
  );
}
