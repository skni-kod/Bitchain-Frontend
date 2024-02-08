import React, { useState } from "react";
import { CryptoDataObject } from "../../pages/Details";
import { userCurrency } from "./DetailsHeader";
import { easeIn, motion } from "framer-motion";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

interface CryptoDetailsChartProps {
  crypto: CryptoDataObject;
  userCurrency: userCurrency;
}

export default function CryptoDetailsBuy({
  crypto,
  userCurrency,
}: CryptoDetailsChartProps) {
  const [isTrade, setIsTrade] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(1);

  return (
    <div className="p-4 mb-14">
      <div className="flex justify-start items-center gap-4 ">
        <button
          className="flex flex-col text-lg h-[56px]  text-bgDark dark:text-bgWhite hover:text-main dark:hover:text-main transition-colors duration-300 p-2 "
          onClick={() => setIsTrade(false)}
        >
          <p className="self-start">Buy {crypto.data.symbol}</p>
          {!isTrade && (
            <motion.div
              className="w-0 h-1 mt-2 bg-main"
              animate={{ width: "100%" }}
              transition={{ ease: "easeIn", duration: 0.2 }}
            ></motion.div>
          )}
        </button>
        <button
          className="flex flex-col text-lg h-[56px] text-bgDark dark:text-bgWhite hover:text-main dark:hover:text-main transition-colors duration-300 p-2 "
          onClick={() => setIsTrade(true)}
        >
          <p className="self-start">Trade {crypto.data.symbol}</p>
          {isTrade && (
            <motion.div
              className="w-0 h-1 mt-2 bg-main"
              animate={{ width: "100%" }}
              transition={{ ease: "easeIn", duration: 0.2 }}
            ></motion.div>
          )}
        </button>
      </div>
      {!isTrade ? (
        <>
          <div className="p-4 pl-5 bg-bgWhite1Hover dark:bg-bgDark1Hover rounded-lg text-bgDark dark:text-bgWhite my-2">
            <label htmlFor="amount">Buy</label>
            <div className="flex justify-between mt-2">
              <input
                type="number"
                id="amount"
                className="border-none bg-transparent outline-none text-lg w-1/2"
                value={amount}
                onChange={(e) => setAmount(+e.target.value)}
              />
              <div className="flex gap-2 items-center bg-bgWhite1 dark:bg-bgDark1 rounded-full px-3 py-2">
                <img
                  className="rounded-full h-6"
                  src={`https://assets.coincap.io/assets/icons/${crypto.data.symbol.toLocaleLowerCase()}@2x.png`}
                  alt=""
                />
                <p className="text-base">{crypto.data.symbol}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col xs:flex-row justify-between items-center text-lg text-stone-700 dark:text-slate-300 py-5">
              <p>
                {amount} {crypto.data.symbol} ={" "}
              </p>
              <p>
                {userCurrency ? userCurrency.symbol : "USD"}{" "}
                {userCurrency
                  ? formatCurrency(
                      (amount * +crypto.data.priceUsd) / userCurrency.rateUsd
                    )
                  : formatCurrency(amount * +crypto.data.priceUsd)}
              </p>
            </div>
          </div>
          <Link
            to={`/quickbuy?type=buy&from=${
              userCurrency ? userCurrency.symbol : "USD"
            }&to=${crypto.data.symbol}`}
            state={{ amount: amount }}
            className="w-full bg-main hover:bg-mainHover text-white p-3 flex justify-center items-center rounded-lg transition-colors duration-300"
          >
            Buy {crypto.data.symbol}
          </Link>
        </>
      ) : (
        <div className="flex flex-col text-bgDark dark:text-bgWhite gap-3">
          <Link
            to={`/spot?pair=${crypto.data.symbol}USDT`}
            className="flex justify-start items-center py-6 px-4 bg-bgWhite1 dark:bg-bgDark1 rounded-lg hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300"
          >
            <p className="font-medium">
              {crypto.data.symbol}
              <span className="text-gray mr-2 font-normal">/USDT</span>
            </p>
            pair at Spot
          </Link>
          <Link
            to={`/spot?pair=${crypto.data.symbol}${
              userCurrency ? userCurrency.symbol : "USD"
            }`}
            className="flex justify-start items-center py-6 px-4 bg-bgWhite1 dark:bg-bgDark1 rounded-lg hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300"
          >
            <p className="font-medium">
              {crypto.data.symbol}
              <span className="text-gray mr-2 font-normal">
                /{userCurrency ? userCurrency.symbol : "USD"}
              </span>
            </p>
            pair at Spot
          </Link>
          <Link
            to={`/futures?pair=${crypto.data.symbol}USDT`}
            className="flex justify-start items-center py-6 px-4 bg-bgWhite1 dark:bg-bgDark1 rounded-lg hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300"
          >
            <p className="font-medium">
              {crypto.data.symbol}
              <span className="text-gray mr-2 font-normal">/USDT</span>
            </p>
            pair at Futures
          </Link>
        </div>
      )}
    </div>
  );
}
