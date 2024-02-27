import { Link } from "react-router-dom";
import { CryptoData } from "../markets/TopHotCryptoCard";
import { formatCurrency } from "../../utils/helpers";
import { userCurrency } from "../../ui/cryptoDetails/DetailsHeader";

interface TrendingCryptoItemProps {
  item: CryptoData;
  userCurrency: userCurrency;
  onFirstLoad: (s: string) => void;
}

export default function TrendingCryptoItem({
  item,
  userCurrency,
  onFirstLoad,
}: TrendingCryptoItemProps) {
  return (
    <Link
      to={`/details?crypto=${item.id}`}
      onClick={() => onFirstLoad(item.id)}
      className="flex justify-between items-center p-2 my-1 text-bgDark dark:text-bgWhite bg-white dark:bg-bgDark hover:bg-bgWhite dark:hover:bg-bgDark1Hover rounded-lg transition-colors duration-300 "
    >
      <div className="flex justify-center items-center">
        <div>
          <img
            className="rounded-full w-9"
            src={`https://assets.coincap.io/assets/icons/${item.symbol.toLocaleLowerCase()}@2x.png`}
            alt=""
          />
        </div>
        <div className="ml-4">
          <p className="text-sm">{item.name}</p>
          <p className="text-xs text-gray">{item.symbol}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end">
        <p className=" text-sm text-bgDark dark:text-white px-2">
          {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
          {userCurrency
            ? formatCurrency(+item.priceUsd! / +userCurrency.rateUsd)
            : formatCurrency(+item.priceUsd!)}{" "}
        </p>
        <p
          className={`px-2 text-sm pt-1 ${
            +item.changePercent24Hr! > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {item.priceUsd &&
            (+item.changePercent24Hr! > 0
              ? `+${formatCurrency(+item.changePercent24Hr!)}`
              : formatCurrency(+item.changePercent24Hr!))}
          %
        </p>
      </div>
    </Link>
  );
}
