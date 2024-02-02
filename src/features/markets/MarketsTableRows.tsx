import React, { useState } from "react";
import CryptoRow from "./CryptoRow";
import { useQueryClient } from "@tanstack/react-query";
import { Pagination } from "@mui/material";

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
  marketCapUsd: string;
}

interface cryptoPrice {
  data: CryptoData[];
  timestramp: number;
}

export interface UserCurrencyType {
  id: string;
  symbol: string;
  currencySymbol: string;
  rateUsd: string;
}

export default function MarketsTableRows() {
  const queryClient = useQueryClient();
  const cryptoData: cryptoPrice = queryClient.getQueryData(["cryptoPrice"])!;
  const usdtPrice: number | undefined = queryClient.getQueryData(["USDT"]);
  const userCurrency: UserCurrencyType | undefined = queryClient.getQueryData([
    "userCurrency",
  ]);
  const [page, setPage] = useState(1);
  const ITEMS_ON_PAGE = 30;

  const handleChangePage = (event, newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      {cryptoData.data
        .slice(
          (page - 1) * ITEMS_ON_PAGE,
          (page - 1) * ITEMS_ON_PAGE + ITEMS_ON_PAGE
        )
        .map(
          (crypto) =>
            crypto.symbol !== "USDT" &&
            crypto.symbol !== "WBTC" &&
            crypto.symbol !== "BTCB" && (
              <CryptoRow
                crypto={crypto}
                key={crypto.id}
                usdtPrice={usdtPrice}
                userCurrency={userCurrency}
              />
            )
        )}
      <div className="flex justify-center items-center w-full my-8 text-main">
        <Pagination count={17}  onChange={handleChangePage}/>
      </div>
    </div>
  );
}
