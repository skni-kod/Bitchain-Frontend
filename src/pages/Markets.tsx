import React, { useEffect } from "react";
import { useAllCryptoPrice } from "../features/markets/useAllCryptoPrice";
import TopCryptoCard from "../features/markets/TopHotCryptoCard";
import Spinner from "../ui/Spinner";

export default function Markets() {
  const { data, isSuccess: isFetched, refetch } = useAllCryptoPrice(2000);

  useEffect(
    function () {
      setInterval(refetch, 3000);
    },
    [refetch]
  );
  // const data = getCryptoPrice("dogecoin");
  console.log(data);
  return (
    <div className="flex justify-center items-start w-full ">
      {isFetched ? (
        <div className="flex gap-3 flex-wrap justify-center items-start">
          <TopCryptoCard type="hot24"/>
          <TopCryptoCard type="top24"/>
          <TopCryptoCard type="big24"/>
          {/* <TopCryptoCard /> */}
          {/* <TopCryptoCard /> */}
          {/* <TopCryptoCard /> */}
        </div>
      ) : (
        <Spinner type="full" />
      )}
    </div>
  );
}
