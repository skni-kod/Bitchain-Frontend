import React from "react";
import { CryptoDataObject } from "../../pages/Details";
import { userCurrency } from "./DetailsHeader";
import { formatBigNumbers, formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

interface PriceOfTheDayProps {
  crypto: CryptoDataObject;
  userCurrency: userCurrency;
}

export default function PriceOfTheDay({
  crypto,
  userCurrency,
}: PriceOfTheDayProps) {
  return (
    <div className="p-4">
      <p className="text-3xl pb-7 text-bgDark dark:text-bgWhite">
        Price of {crypto.data.symbol} today
      </p>
      <p className="text-lg text-bgDark dark:text-bgWhite1Hover mb-6">
        The live price of {crypto.data.name} is{" "}
        {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
        {userCurrency
          ? formatCurrency(+crypto.data.priceUsd / userCurrency.rateUsd, 5)
          : formatCurrency(+crypto.data.priceUsd, 5)}{" "}
        per ({crypto.data.symbol} / {userCurrency ? userCurrency.symbol : "USD"}
        ) with a current market cap of{" "}
        {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
        {userCurrency
          ? formatBigNumbers(+crypto.data.marketCapUsd / userCurrency.rateUsd)
          : formatBigNumbers(+crypto.data.marketCapUsd)}
        . 24-hour trading volume is{" "}
        {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
        {userCurrency
          ? formatBigNumbers(+crypto.data.volumeUsd24Hr / userCurrency.rateUsd)
          : formatBigNumbers(+crypto.data.volumeUsd24Hr)}{" "}
        {crypto.data.name} is {formatCurrency(+crypto.data.changePercent24Hr)}%
        in the last 24 hours with a circulating supply of{" "}
        {formatBigNumbers(+crypto.data.supply)}
      </p>
      <p className="text-bgDark dark:text-bgWhite py-5">
        To see more about {crypto.data.name} visit{" "}
        <Link
          to={crypto.data.explorer}
          className="text-main hover:text-mainHover transition-colors duration-300"
        >
          this site
        </Link>
      </p>
    </div>
  );
}
