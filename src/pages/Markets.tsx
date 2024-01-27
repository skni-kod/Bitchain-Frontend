import React from "react";
import { useAllCryptoPrice } from "../features/markets/useAllCryptoPrice";
import TopCryptoCard from "../features/markets/TopHotCryptoCard";

export default function Markets() {
  const { data, isPending } = useAllCryptoPrice();
  // const data = getCryptoPrice("dogecoin");
  console.log(data);
  return (
    <div className="flex justify-center items-center">
      <TopCryptoCard />
    </div>
  );
}
