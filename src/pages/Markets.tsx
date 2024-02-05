import { useEffect, useState } from "react";
import { useAllCryptoPrice } from "../features/markets/useAllCryptoPrice";
import TopCryptoCard from "../features/markets/TopHotCryptoCard";
import Spinner from "../ui/Spinner";
import SearchCrypto from "../features/markets/SearchCrypto";
import MainMarketsTable from "../features/markets/MainMarketsTable";
import BottonAdMarkets from "../features/markets/BottonAdMarkets";

export default function Markets() {
  const { data, isSuccess: isFetched } = useAllCryptoPrice(500);
  const [label, setLabel] = useState<string>("");

  return (
    <div className="w-full pt-5 max-w-7xl mx-auto">
      {isFetched ? (
        <>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-8 w-full ">
              <TopCryptoCard type="hot24" />
              <TopCryptoCard type="top24" />
              <TopCryptoCard type="big24" />
            </div>
          </div>
          <div className="flex justify-between md:items-center p-8 px-12 flex-col items-start md:flex-row gap-3">
            <p className="text-[36px] font-bold text-bgDark dark:text-bgWhite">
              Markets
            </p>
            <SearchCrypto setLabel={setLabel} label={label} />
          </div>
          <MainMarketsTable label={label} />
          <BottonAdMarkets />
        </>
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <Spinner type="full" />
        </div>
      )}
    </div>
  );
}
