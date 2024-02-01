import React, { useEffect, useState } from "react";
import { useAllCryptoPrice } from "../features/markets/useAllCryptoPrice";
import TopCryptoCard from "../features/markets/TopHotCryptoCard";
import Spinner from "../ui/Spinner";
import SearchCrypto from "../features/markets/SearchCrypto";

export default function Markets() {
  const { data, isSuccess: isFetched, refetch } = useAllCryptoPrice(500);
  const [label, setLabel] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(refetch, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [refetch]);

  console.log(data);
  return (
    <div className="w-full pt-5">
      {isFetched ? (
        <>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-8 w-full ">
              <TopCryptoCard type="hot24" />
              <TopCryptoCard type="top24" />
              <TopCryptoCard type="big24" />
            </div>
          </div>
          <div className="flex justify-between items-center p-8 px-12">
            <p className="text-[36px] font-bold text-bgDark dark:text-bgWhite">
              Markets
            </p>
            <SearchCrypto />
          </div>
        </>
      ) : (
        <div>
          <Spinner type="full" />
        </div>
      )}
    </div>
  );
}
