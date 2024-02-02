import React from "react";
import { useUserWidth } from "../../hooks/useUserWidth";

export default function MarketsTableHeader() {
  const width = useUserWidth();

  return (
    <div className="flex p-4 text-gray items-center justify-between text-xs xs:text-sm">
      <div className="w-[260px]">
        <p>Trading Pair</p>
      </div>
      {width > 1024 ? (
        <>
          <div className="w-[130px]">
            <p className="text-right">Price(USDT)</p>
          </div>
          <div className="w-[130px]">
            <p className="text-right">24h Change</p>
          </div>
          <div className="w-[130px]">
            <p className="text-right">24h Vol.</p>
          </div>
          <div className="w-[130px]">
            <p className="text-right">Market Cap</p>
          </div>
          <div className="w-[130px]">
            <p className="text-right">Action</p>
          </div>
        </>
      ) : (
        <div className="flex ">
          <div className="sm:w-[130px]">
            <p className="text-right">Price(USDT)</p>
          </div>
          <div className="hidden sm:block w-[130px]">
            <p className="text-right">Action</p>
          </div>
        </div>
      )}
    </div>
  );
}
