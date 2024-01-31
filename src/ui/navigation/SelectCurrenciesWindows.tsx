import React from "react";
import { HiXMark } from "react-icons/hi2";
import { useRates } from "../../features/markets/useRates";
import Spinner from "../Spinner";

interface Props {
  onCloseModal: () => void;
}

export default function SelectCurrenciesWindows({ onCloseModal }: Props) {
  const { data, isLoading } = useRates();
  console.log(data?.data?.at(110));

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="mr-3">Select currency</p>
        <button
          onClick={onCloseModal}
          className="text-bgDark dark:text-bgWhite p-2 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover rounded-full transition-colors duration-300"
        >
          <HiXMark />
        </button>
      </div>
      <div className="">
        {isLoading ? <Spinner type="full" /> : <div>dupa</div>}
      </div>
    </div>
  );
}
