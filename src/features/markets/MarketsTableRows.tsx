import { useEffect, useRef, useState } from "react";
import CryptoRow from "./CryptoRow";
import { useQueryClient } from "@tanstack/react-query";
import { Pagination } from "@mui/material";
import useDarkMode from "../../hooks/useDarkMode";
import { useForceUpdate } from "../../hooks/useForceUpdate";
import { useGetFavoriteCrypto } from "./useGetFavoriteCrypto";
import { useNavigate } from "react-router";

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
  onFavorites: (value: boolean) => void;
  favorites: boolean;
}

export default function MarketsTableRows({
  label,
  filter,
  onFavorites,
  favorites,
}: MarketsTableRowsProps) {
  const { forceUpdate } = useForceUpdate();
  const { data: favoritesApi, isSuccess } = useGetFavoriteCrypto();
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const cryptoData: cryptoPrice = queryClient.getQueryData(["cryptoPrice"])!;
  const isAuth = queryClient.getQueryData(["user"]) !== null;
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
      let allCrypto = cryptoData.data;

      if (isSuccess) {
        if (favorites) {
          const favorites = allCrypto.filter((crypto) =>
            favoritesApi?.favorite_crypto_symbol.includes(crypto.symbol)
          );
          allCrypto = favorites;
        }
      }
      if (label) {
        allCrypto = allCrypto.filter((crypto) =>
          crypto.symbol.includes(label.toUpperCase())
        );
      }

      if (filter) {
        switch (filter) {
          case "priceDesc":
            allCrypto = allCrypto.sort((a, b) => {
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
            allCrypto = allCrypto.sort((a, b) => {
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
            allCrypto = allCrypto.sort((a, b) => {
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
            allCrypto = allCrypto.sort((a, b) => {
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
            allCrypto = allCrypto.sort((a, b) => {
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
            allCrypto = allCrypto.sort((a, b) => {
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
            allCrypto = allCrypto.sort((a, b) => {
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
            allCrypto = allCrypto.sort((a, b) => {
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
            allCrypto = allCrypto.sort((a, b) => {
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
      }

      data.current = allCrypto;
      setTotalPages(Math.ceil(data.current.length / ITEMS_ON_PAGE));
      forceUpdate();
    },
    [
      filter,
      cryptoData.data,
      forceUpdate,
      label,
      favorites,
      favoritesApi?.favorite_crypto_symbol,
      isSuccess,
    ]
  );

  useEffect(() => {
    setPage(1);
  }, [label]);

  const handleChangePage = (event, newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="min-h-[600px]">
      {data.current.length === 0
        ? favorites &&
          (isAuth ? (
            <div className="w-full h-[600px] flex flex-col justify-center items-center gap-8">
              <div className="flex flex-col justify-center items-center text-sm gap-4">
                <p className="text-gray">No data available</p>
                <p className="text-sm text-gray">
                  If you add any favorite cryptocurrency, you will see it here.{" "}
                </p>
              </div>
              <button
                onClick={() => onFavorites(false)}
                className="bg-main text-white rounded-lg hover:bg-mainHover p-3 text-sm transition-colors duration-300"
              >
                Add Favorites
              </button>
            </div>
          ) : (
            <div className="w-full h-[600px] flex flex-col justify-center items-center gap-8">
              <div className="flex flex-col justify-center items-center text-sm gap-4">
                <p className="text-gray">No data available</p>
                <p className="text-sm text-gray">
                  Please log in to your account to add your favorite
                  cryptocurrency.
                </p>
              </div>
              <button
                onClick={() => {
                  onFavorites(false);
                  navigate("/login");
                }}
                className="bg-main text-white rounded-lg hover:bg-mainHover p-3 text-sm transition-colors duration-300"
              >
                Log in
              </button>
            </div>
          ))
        : data.current
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
              "& .Mui-selected": {
                backgroundColor: "#ff5700 !important",
                color: "#ffffff !important",
                "&:hover": {
                  backgroundColor: "#e84a00",
                },
              },
              "& .MuiPaginationItem-root": {
                color: `${isDarkMode ? "#ffffff" : "#333333"}`,
                "&:hover": {
                  backgroundColor: `${isDarkMode ? "#2b2d35" : "#f1f5f9"}`,
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
