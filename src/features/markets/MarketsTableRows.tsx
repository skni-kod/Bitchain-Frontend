import React, { useEffect, useRef, useState } from "react";
import CryptoRow from "./CryptoRow";
import { useQueryClient } from "@tanstack/react-query";
import { Pagination, Theme, makeStyles } from "@mui/material";
import useDarkMode from "../../hooks/useDarkMode";

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

interface MarketsTableRowsProps {
  label: string;
}

export default function MarketsTableRows({ label }: MarketsTableRowsProps) {
  const { isDarkMode } = useDarkMode();
  const queryClient = useQueryClient();
  const cryptoData: cryptoPrice = queryClient.getQueryData(["cryptoPrice"])!;
  const usdtPrice: number | undefined = queryClient.getQueryData(["USDT"]);
  const userCurrency: UserCurrencyType | undefined = queryClient.getQueryData([
    "userCurrency",
  ]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const ITEMS_ON_PAGE = 30;
  const data = useRef<CryptoData[]>(cryptoData.data);

  useEffect(
    function () {
      if (label !== "") {
        data.current = cryptoData.data.filter((value) =>
          value.symbol.includes(label.toUpperCase())
        );
      } else {
        data.current = cryptoData.data;
      }

      setTotalPages(Math.ceil(data.current.length / ITEMS_ON_PAGE));
    },
    [cryptoData, label]
  );

  useEffect(() => {
    setPage(1);
  }, [label]);

  const handleChangePage = (event, newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      {data.current
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
        {totalPages !== 1 && (
          <Pagination
            sx={{
              "& .MuiPaginationItem-root": {
                color: `${isDarkMode ? "#ffffff" : "#333333"}`,
                "&:hover": {
                  backgroundColor: `${isDarkMode ? "#2b2d35" : "#f1f5f9"}`,
                },
              },
              "& .Mui-selected": {
                backgroundColor: "#ff5700",
                color: "common.white",
                "&:hover": {
                  backgroundColor: "#e84a00", // Dodaj odpowiedni kolor dla efektu hover
                },
              },
            }}
            count={totalPages}
            onChange={handleChangePage}
          />
        )}
      </div>
    </div>
  );
}
