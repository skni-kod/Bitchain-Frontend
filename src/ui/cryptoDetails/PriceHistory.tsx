import { useEffect } from "react";
import { userCurrency } from "./DetailsHeader";
import { CryptoDataObject } from "../../pages/Details";
import { usePriceHistory } from "../../features/CryptoDetails/usePriceHistory";
import { formatCurrency } from "../../utils/helpers";
import { useForceUpdate } from "../../hooks/useForceUpdate";
import Spinner from "../Spinner";
import { useQueryClient } from "@tanstack/react-query";

interface PriceHistoryProps {
  crypto: CryptoDataObject;
  userCurrency: userCurrency;
}

export default function PriceHistory({
  crypto,
  userCurrency,
}: PriceHistoryProps) {
  const { data } = usePriceHistory(crypto.data.id);
  const { forceUpdate } = useForceUpdate();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["priceHistory"] });
    forceUpdate();
  }, [crypto.data.id, queryClient, forceUpdate]);

  return (
    <div className="text-bgDark dark:text-bgWhite p-4">
      <p className="text-xl">
        {crypto.data.symbol} Price History{" "}
        {userCurrency ? userCurrency.symbol : "USD"}
      </p>
      <div className="flex justify-between items-center bg-bgWhite1 dark:bg-bgDark1Hover p-4 rounded-lg mt-5">
        <p className="text-[10px] xs:text-[12px] sm:text-[14px]">
          Date Comparison
        </p>
        <div className="flex justify-center items-center gap-10 ml-2 ">
          <p className="text-[10px] xs:text-[12px] sm:text-[14px] sm:block sm:w-[120px]">
            Amount Change
          </p>
          <p className="text-[10px] xs:text-[12px] sm:text-[14px] sm:block sm:w-[80px]">
            % Change
          </p>
        </div>
      </div>
      {data ? (
        <>
          <div className="flex justify-between items-center p-4 rounded-lg mt-5">
            <p className="text-[14px] text-gray">Today</p>
            <div className="flex justify-center items-center gap-10 ml-2 ">
              <p
                className={`text-[14px] sm:block sm:w-[120px] text-center ${
                  +crypto.data.changePercent24Hr > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
                {userCurrency
                  ? formatCurrency(
                      (+crypto.data.priceUsd *
                        (+crypto.data.changePercent24Hr / 100)) /
                        userCurrency.rateUsd
                    )
                  : formatCurrency(
                      +crypto.data.priceUsd *
                        (+crypto.data.changePercent24Hr / 100)
                    )}
              </p>
              <p
                className={`text-[14px] sm:block sm:w-[80px] text-center ${
                  +crypto.data.changePercent24Hr > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {+crypto.data.changePercent24Hr > 0
                  ? `+${formatCurrency(+crypto.data.changePercent24Hr)}`
                  : formatCurrency(+crypto.data.changePercent24Hr)}
                %
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 rounded-lg mt-5">
            <p className="text-[14px] text-gray">7 Days</p>
            <div className="flex justify-center items-center gap-10 ml-2 ">
              <p
                className={`text-[14px] sm:block sm:w-[120px] text-center ${
                  +crypto.data.priceUsd -
                    +data?.ago7DaysHistory.data[0].priceUsd >
                  0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
                {userCurrency
                  ? formatCurrency(
                      (+crypto.data.priceUsd -
                        data?.ago7DaysHistory.data[0].priceUsd) /
                        userCurrency.rateUsd
                    )
                  : formatCurrency(
                      +crypto.data.priceUsd -
                        data?.ago7DaysHistory.data[0].priceUsd
                    )}
              </p>
              <p
                className={`text-[14px] sm:block sm:w-[80px] text-center ${
                  +crypto.data.priceUsd -
                    +data?.ago7DaysHistory.data[0].priceUsd >
                  0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {+crypto.data.priceUsd -
                  +data?.ago7DaysHistory.data[0].priceUsd >
                0
                  ? `+${formatCurrency(
                      (+crypto.data.priceUsd /
                        +data?.ago7DaysHistory.data[0].priceUsd -
                        1) *
                        100
                    )}`
                  : `${formatCurrency(
                      (+crypto.data.priceUsd /
                        +data?.ago7DaysHistory.data[0].priceUsd -
                        1) *
                        100
                    )}`}
                %
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 rounded-lg mt-5">
            <p className="text-[14px] text-gray">30 Days</p>
            <div className="flex justify-center items-center gap-10 ml-2 ">
              <p
                className={`text-[14px] sm:block sm:w-[120px] text-center ${
                  +crypto.data.priceUsd -
                    +data?.ago30DaysHistory.data[0].priceUsd >
                  0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
                {userCurrency
                  ? formatCurrency(
                      (+crypto.data.priceUsd -
                        data?.ago30DaysHistory.data[0].priceUsd) /
                        userCurrency.rateUsd
                    )
                  : formatCurrency(
                      +crypto.data.priceUsd -
                        data?.ago30DaysHistory.data[0].priceUsd
                    )}
              </p>
              <p
                className={`text-[14px] sm:block sm:w-[80px] text-center ${
                  +crypto.data.priceUsd -
                    +data?.ago30DaysHistory.data[0].priceUsd >
                  0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {+crypto.data.priceUsd -
                  +data?.ago30DaysHistory.data[0].priceUsd >
                0
                  ? `+${formatCurrency(
                      (+crypto.data.priceUsd /
                        +data?.ago30DaysHistory.data[0].priceUsd -
                        1) *
                        100
                    )}`
                  : `${formatCurrency(
                      (+crypto.data.priceUsd /
                        +data?.ago30DaysHistory.data[0].priceUsd -
                        1) *
                        100
                    )}`}
                %
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center  p-4 rounded-lg mt-5">
            <p className="text-[14px] text-gray">60 Days</p>
            <div className="flex justify-center items-center gap-10 ml-2 ">
              <p
                className={`text-[14px] sm:block sm:w-[120px] text-center ${
                  +crypto.data.priceUsd -
                    +data?.ago60DaysHistory.data[0].priceUsd >
                  0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
                {userCurrency
                  ? formatCurrency(
                      (+crypto.data.priceUsd -
                        data?.ago60DaysHistory.data[0].priceUsd) /
                        userCurrency.rateUsd
                    )
                  : formatCurrency(
                      +crypto.data.priceUsd -
                        data?.ago60DaysHistory.data[0].priceUsd
                    )}
              </p>
              <p
                className={`text-[14px] sm:block sm:w-[80px] text-center ${
                  +crypto.data.priceUsd -
                    +data?.ago60DaysHistory.data[0].priceUsd >
                  0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {+crypto.data.priceUsd -
                  +data?.ago60DaysHistory.data[0].priceUsd >
                0
                  ? `+${formatCurrency(
                      (+crypto.data.priceUsd /
                        +data?.ago60DaysHistory.data[0].priceUsd -
                        1) *
                        100
                    )}`
                  : `${formatCurrency(
                      (+crypto.data.priceUsd /
                        +data?.ago60DaysHistory.data[0].priceUsd -
                        1) *
                        100
                    )}`}
                %
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center  p-4 rounded-lg mt-5">
            <p className="text-[14px] text-gray">90 Days</p>
            <div className="flex justify-center items-center gap-10 ml-2 ">
              <p
                className={`text-[14px] sm:block sm:w-[120px] text-center ${
                  +crypto.data.priceUsd -
                    +data?.ago90DaysHistory.data[0].priceUsd >
                  0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
                {userCurrency
                  ? formatCurrency(
                      (+crypto.data.priceUsd -
                        data?.ago90DaysHistory.data[0].priceUsd) /
                        userCurrency.rateUsd
                    )
                  : formatCurrency(
                      +crypto.data.priceUsd -
                        data?.ago90DaysHistory.data[0].priceUsd
                    )}
              </p>
              <p
                className={`text-[14px] sm:block sm:w-[80px] text-center ${
                  +crypto.data.priceUsd -
                    +data?.ago90DaysHistory.data[0].priceUsd >
                  0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {+crypto.data.priceUsd -
                  +data?.ago90DaysHistory.data[0].priceUsd >
                0
                  ? `+${formatCurrency(
                      (+crypto.data.priceUsd /
                        +data?.ago90DaysHistory.data[0].priceUsd -
                        1) *
                        100
                    )}`
                  : `${formatCurrency(
                      (+crypto.data.priceUsd /
                        +data?.ago90DaysHistory.data[0].priceUsd -
                        1) *
                        100
                    )}`}
                %
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center  p-4 rounded-lg mt-5">
            <p className="text-[14px] text-gray">365 Days</p>
            <div className="flex justify-center items-center gap-10 ml-2 ">
              <p
                className={`text-[14px] sm:block sm:w-[120px] text-center ${
                  +crypto.data.priceUsd -
                    +data?.ago365DaysHistory.data[0].priceUsd >
                  0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
                {userCurrency
                  ? formatCurrency(
                      (+crypto.data.priceUsd -
                        data?.ago365DaysHistory.data[0].priceUsd) /
                        userCurrency.rateUsd
                    )
                  : formatCurrency(
                      +crypto.data.priceUsd -
                        data?.ago365DaysHistory.data[0].priceUsd
                    )}
              </p>
              <p
                className={`text-[14px] sm:block sm:w-[80px] text-center ${
                  +crypto.data.priceUsd -
                    +data?.ago365DaysHistory.data[0].priceUsd >
                  0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {+crypto.data.priceUsd -
                  +data?.ago365DaysHistory.data[0].priceUsd >
                0
                  ? `+${formatCurrency(
                      (+crypto.data.priceUsd /
                        +data?.ago365DaysHistory.data[0].priceUsd -
                        1) *
                        100
                    )}`
                  : `${formatCurrency(
                      (+crypto.data.priceUsd /
                        +data?.ago365DaysHistory.data[0].priceUsd -
                        1) *
                        100
                    )}`}
                %
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="h-[440px]">
          <Spinner type="full" />
        </div>
      )}
    </div>
  );
}
