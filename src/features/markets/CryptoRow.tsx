import { useUserWidth } from "../../hooks/useUserWidth";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { CryptoData, UserCurrencyType } from "./MarketsTableRows";
import { formatBigNumbers, formatCurrency } from "../../utils/helpers";

interface CryptoRowProps {
  crypto: CryptoData;
  userCurrency: UserCurrencyType | undefined;
  usdtPrice: number | undefined;
}

export default function CryptoRow({
  crypto,
  userCurrency,
  usdtPrice,
}: CryptoRowProps) {
  const width = useUserWidth();

  //Pawel musi zrobic polubione crypto

  return (
    <Link
      to={`/spot?${crypto.symbol}USDT`}
      className="flex p-4 text-bgDark dark:text-white items-center justify-between text-xs xs:text-[16px] hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover rounded-lg transition-colors duration-300 h-[60px] text-right "
    >
      <div className="w-[260px]">
        <p className="flex gap-2 items-center ">
          <span className="text-slate-300">
            <FaRegStar />
          </span>
          <img
            className="rounded-full w-6 mx-3 hidden sm:block"
            src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLocaleLowerCase()}@2x.png`}
          />
          {`${crypto.symbol}/USDT`}
        </p>
      </div>
      {width > 1024 ? (
        <>
          <div className="w-[130px]">
            <p>
              {crypto.priceUsd && usdtPrice
                ? formatCurrency(+crypto.priceUsd * usdtPrice!)
                : "--"}
            </p>
            <p className=" text-[10px] text-gray">
              {crypto.priceUsd &&
                (userCurrency
                  ? formatCurrency(+crypto.priceUsd! / +userCurrency.rateUsd)
                  : formatCurrency(+crypto.priceUsd!))}{" "}
              {userCurrency ? userCurrency.symbol : "USD"}
            </p>
          </div>
          <div className="w-[130px]">
            <p
              className={` ${
                crypto.priceUsd && +crypto.changePercent24Hr! > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {crypto.priceUsd &&
                (+crypto.changePercent24Hr! > 0
                  ? `+${formatCurrency(+crypto.changePercent24Hr!)}`
                  : formatCurrency(+crypto.changePercent24Hr!))}
              %
            </p>
          </div>
          <div className="w-[130px]">
            <p>{formatBigNumbers(crypto.volumeUsd24Hr)}</p>
          </div>
          <div className="w-[130px]">
            <p>
              {+crypto.marketCapUsd === 0
                ? "--"
                : formatBigNumbers(crypto.marketCapUsd)}
            </p>
          </div>
          <div className="w-[130px]">
            <p>Action</p>
          </div>
        </>
      ) : (
        <div className="flex ">
          <div className="sm:w-[130px]">
            <p>{formatCurrency(+crypto.priceUsd * usdtPrice!)}</p>
            <p className=" text-[10px] text-gray">
              {crypto.priceUsd &&
                (userCurrency
                  ? formatCurrency(+crypto.priceUsd! / +userCurrency.rateUsd)
                  : formatCurrency(+crypto.priceUsd!))}{" "}
              {userCurrency ? userCurrency.symbol : "USD"}
            </p>
          </div>
          <div className="hidden sm:block w-[130px] ">
            <p>Action</p>
          </div>
        </div>
      )}
    </Link>
  );
}
