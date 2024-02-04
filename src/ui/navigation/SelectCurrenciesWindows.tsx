import { useEffect } from "react";
import { HiXMark } from "react-icons/hi2";
import { useRates } from "../../features/markets/useRates";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  onCloseModal: () => void;
}

export default function SelectCurrenciesWindows({ onCloseModal }: Props) {
  const { getRate, rate, isSuccess } = useRates();
  const queryClient = useQueryClient();

  useEffect(
    function () {
      if (rate && isSuccess) {
        queryClient.setQueryData(["userCurrency"], rate);
        onCloseModal();
      }
    },
    [onCloseModal, rate, queryClient, isSuccess]
  );

  return (
    <div className="text-bgDark dark:text-white ">
      <div className="flex justify-between items-center">
        <p className="mr-3 pl-2 text-lg">Select currency</p>
        <button
          onClick={onCloseModal}
          className="text-bgDark dark:text-bgWhite p-2 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover rounded-full transition-colors duration-300 text-2xl"
        >
          <HiXMark />
        </button>
      </div>
      <div className="">
        <div className="mt-2  h-52 min-w-[200px] grid grid-cols-1 sm:grid-cols-2 overflow-y-scroll sm:w-80 lg:grid-cols-3 lg:w-[500px]">
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("united-states-dollar");
            }}
          >
            USD-$
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("euro");
            }}
          >
            EUR-€
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("japanese-yen");
            }}
          >
            JPY-¥
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("british-pound-sterling");
            }}
          >
            GBP-£
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("swiss-franc");
            }}
          >
            CHF-₣
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("canadian-dollar");
            }}
          >
            CAD-$
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("australian-dollar");
            }}
          >
            AUD-$
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("chinese-yuan-renminbi");
            }}
          >
            CNY-¥
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("swedish-krona");
            }}
          >
            SEK-kr
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("norwegian-krone");
            }}
          >
            NOK-kr
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("danish-krone");
            }}
          >
            DKK-kr
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("polish-zloty");
            }}
          >
            PLN-zł
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("russian-ruble");
            }}
          >
            RUB-₽
          </button>
          <button
            className="p-1 pl-4 h-12 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover transition-colors duration-300 rounded-lg  text-left"
            onClick={() => {
              getRate("indian-rupee");
            }}
          >
            INR-₹
          </button>
        </div>
      </div>
    </div>
  );
}
