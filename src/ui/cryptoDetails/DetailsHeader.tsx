import React from "react";
import { CryptoDataObject } from "../../pages/Details";
import Modal from "../Modal";
import SelectCurrenciesWindows from "../navigation/SelectCurrenciesWindows";

export interface userCurrency {
  id: string;
  symbol: string;
  currencySymbol: string;
  rateUsd: number;
}

interface DetailsHeaderProps {
  crypto: CryptoDataObject;
  userCurrency: userCurrency;
}

export default function DetailsHeader({
  crypto,
  userCurrency,
}: DetailsHeaderProps) {
  return (
    <div className="p-4 flex flex-col md:flex-row justify-between">
      <div className="flex justify-start items-center gap-3 ">
        <div>
          <img
            className="rounded-full w-14"
            src={`https://assets.coincap.io/assets/icons/${crypto.data.symbol.toLocaleLowerCase()}@2x.png`}
            alt=""
          />
        </div>
        <div className="text-bgDark dark:text-white text-2xl font-bold">
          <p>
            {crypto.data.name} Price{" "}
            <span className="text-base text-slate-400 dark:text-stone-700">
              ({crypto.data.symbol})
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row items-start md:items-center gap-3 text-bgDark dark:text-white mt-10 md:mt-0">
        <p className="hidden md:block text-sm text-slate-400 dark:text-stone-700">
          Currency:
        </p>
        <Modal>
          <Modal.Open opens="currency">
            <button className="w-full md:w-48 border-solid border-[1px] border-slate-300 dark:border-stone-700 hover:border-main dark:hover:border-main transition-colors duration-200 rounded-lg px-3 py-2 font-medium text-left mx-auto">
              {userCurrency
                ? `${userCurrency.symbol} - ${userCurrency.currencySymbol}`
                : "USD - $"}
            </button>
          </Modal.Open>
          <Modal.Window name="currency">
            <SelectCurrenciesWindows onCloseModal={undefined as never} />
          </Modal.Window>
        </Modal>
        {/* <div className="hidden w-[300px] lg:block"></div> */}
      </div>
    </div>
  );
}
