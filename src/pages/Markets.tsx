import React, { useEffect } from "react";
import { useAllCryptoPrice } from "../features/markets/useAllCryptoPrice";
import TopCryptoCard from "../features/markets/TopHotCryptoCard";
import Spinner from "../ui/Spinner";

export default function Markets() {
  const { data, isSuccess: isFetched, refetch } = useAllCryptoPrice(500);

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
          <div>
            <Spinner type="full" />
          </div>
        </>
      ) : (
        <Spinner type="full" />
      )}
    </div>
  );
}
