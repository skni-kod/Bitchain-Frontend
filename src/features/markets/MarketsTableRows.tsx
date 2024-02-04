import { useEffect, useRef, useState } from "react";
import CryptoRow from "./CryptoRow";
import { useQueryClient } from "@tanstack/react-query";
import { Pagination } from "@mui/material";
import useDarkMode from "../../hooks/useDarkMode";
import { useForceUpdate } from "../../hooks/useForceUpdate";

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
  marketCapUsd: string;
  rank: string;
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
  filter: string;
  onFilter: (value: string) => void;
  favoriteCrypto: string[];
  favorites: boolean;
}

export default function MarketsTableRows({
  label,
  filter,
  onFilter,
  favorites,
  favoriteCrypto,
}: MarketsTableRowsProps) {
  const { forceUpdate } = useForceUpdate();
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
      if (label) {
        if (!filter) {
          data.current = cryptoData.data.filter((value) =>
            value.symbol.includes(label.toUpperCase())
          );
        }
      } else {
        data.current = cryptoData.data;
      }
      setTotalPages(Math.ceil(data.current.length / ITEMS_ON_PAGE));
    },
    [cryptoData, label, filter]
  );

  useEffect(
    function () {
      console.log(favoriteCrypto);
    },
    [favorites, favoriteCrypto]
  );

  useEffect(
    function () {
      onFilter("");
    },
    [label, onFilter]
  );

  useEffect(
    function () {
      if (!filter) {
        data.current = cryptoData.data;
      }
      if (label) {
        data.current = cryptoData.data.filter((value) =>
          value.symbol.includes(label.toUpperCase())
        );
      }
      switch (filter) {
        case "priceDesc":
          data.current = data.current?.sort((a, b) => {
            const priceA = parseFloat(a.priceUsd);
            const priceB = parseFloat(b.priceUsd);

            if (priceA > priceB) {
              return -1;
            } else if (priceA < priceB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        case "priceAsc":
          data.current = data.current?.sort((a, b) => {
            const priceA = parseFloat(a.priceUsd);
            const priceB = parseFloat(b.priceUsd);

            if (priceA < priceB) {
              return -1;
            } else if (priceA > priceB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        case "percentDesc":
          data.current = data.current?.sort((a, b) => {
            const priceA = parseFloat(a.changePercent24Hr);
            const priceB = parseFloat(b.changePercent24Hr);

            if (priceA > priceB) {
              return -1;
            } else if (priceA < priceB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        case "percentAsc":
          data.current = data.current?.sort((a, b) => {
            const priceA = parseFloat(a.changePercent24Hr);
            const priceB = parseFloat(b.changePercent24Hr);

            if (priceA < priceB) {
              return -1;
            } else if (priceA > priceB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        case "volDesc":
          data.current = data.current?.sort((a, b) => {
            const priceA = parseFloat(a.volumeUsd24Hr);
            const priceB = parseFloat(b.volumeUsd24Hr);

            if (priceA > priceB) {
              return -1;
            } else if (priceA < priceB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        case "volAsc":
          data.current = data.current?.sort((a, b) => {
            const priceA = parseFloat(a.volumeUsd24Hr);
            const priceB = parseFloat(b.volumeUsd24Hr);

            if (priceA < priceB) {
              return -1;
            } else if (priceA > priceB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        case "mCapDesc":
          data.current = data.current?.sort((a, b) => {
            const priceA = parseFloat(a.marketCapUsd);
            const priceB = parseFloat(b.marketCapUsd);

            if (priceA > priceB) {
              return -1;
            } else if (priceA < priceB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        case "mCapAsc":
          data.current = data.current?.sort((a, b) => {
            const priceA = parseFloat(a.marketCapUsd);
            const priceB = parseFloat(b.marketCapUsd);

            if (priceA < priceB) {
              return -1;
            } else if (priceA > priceB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        case "":
          data.current = data.current?.sort((a, b) => {
            const priceA = parseFloat(a.rank);
            const priceB = parseFloat(b.rank);

            if (priceA < priceB) {
              return -1;
            } else if (priceA > priceB) {
              return 1;
            } else {
              return 0;
            }
          });
          break;
      }
      forceUpdate();
    },
    [filter, cryptoData.data, forceUpdate, label]
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
                backgroundColor: "#ff5701",
                color: "common.white",
                "&:hover": {
                  backgroundColor: "#e84a00",
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
