import { useEffect, useRef } from "react";
import { CryptoInfoData } from "./TopHotCryptoCard";
import useDarkMode from "../../hooks/useDarkMode";
import { useForceUpdate } from "../../hooks/useForceUpdate";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

interface TopCryptoChartProps {
  hot24Data: CryptoInfoData | undefined;
}

export default function TopCryptoChart({ hot24Data }: TopCryptoChartProps) {
  const { isDarkMode } = useDarkMode();
  const { forceUpdate } = useForceUpdate();
  const series = hot24Data?.data.map((item) => [item.time, +item.priceUsd]);

  let minValue: number | undefined;
  let maxValue: number | undefined;
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
  const options = useRef<unknown>();
  const stops = useRef(
    isDarkMode
      ? [
          [0, "hsla(20.47058823529412, 100%, 50%, 0.3)"],
          [1, "rgba(20, 21, 25,0.5)"],
        ]
      : [
          [0, "rgba(255, 87, 0, 0.3)"],
          [1, "rgba(241,245,252,1 )"],
        ]
  );

  useEffect(
    function () {
      if (isDarkMode) {
        stops.current = [
          [0, "rgba(255, 87, 0, 0.3)"],
          [1, "rgba(20, 21, 25,0.5)"],
        ];
      } else {
        stops.current = [
          [0, "rgba(255, 87, 0, 0.3)"],
          [1, "rgba(241,245,252,1 )"],
        ];
      }
      forceUpdate();
    },
    [isDarkMode, forceUpdate]
  );

  useEffect(() => {
    if (!hot24Data) {
      return;
    }
    const cryptoData = hot24Data;
    const series = cryptoData?.data.map((item) => [item.time, +item.priceUsd]);

    options.current = {
      chart: {
        type: "area",
        width: 120,
        height: 80,
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
      plotOptions: {
        series: {
          color: "#ff5700",
          spline: true,
          name: "",
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 0.9,
            },
            stops: stops.current,
          },
          enableMouseTracking: false,
          marker: {
            enabled: false,
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            enabled: false,
          },
        },
      },
      credits: { enabled: false },
      tooltip: {
        enabled: false,
        track: null,
      },
      title: {
        text: null,
      },
      legend: {
        enabled: false,
      },
      xAxis: {
        visible: false,
      },
      yAxis: {
        visible: false,
        min: minValue,
        max: maxValue,
      },
      series: [
        {
          data: series,
          name: "Crypto Prices",
        },
      ],
    };
  }, [hot24Data, minValue, maxValue, isDarkMode]);

  return (
    <div className="hidden xs:block">
      <HighchartsReact
        options={options.current}
        highcharts={Highcharts}
      ></HighchartsReact>
    </div>
  );
}
