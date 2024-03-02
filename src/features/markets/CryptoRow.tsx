import { Link, useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { CryptoData, UserCurrencyType } from "./MarketsTableRows";
import { formatBigNumbers, formatCurrency } from "../../utils/helpers";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { FaStar } from "react-icons/fa";
import { useAddFavoriteCrypto } from "./useAddFavoriteCrypto";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface CryptoRowProps {
  crypto: CryptoData;
  userCurrency: UserCurrencyType | undefined;
  usdtPrice: number | undefined;
}

interface FavoriteCrypto {
  favorite_crypto_symbol: string[];
}

export default function CryptoRow({
  crypto,
  userCurrency,
  usdtPrice,
}: CryptoRowProps) {
  const navigate = useNavigate();
  const { addFavoriteCrypto } = useAddFavoriteCrypto();
  const queryClient = useQueryClient();
  const favoritesCrypto: FavoriteCrypto | undefined = queryClient.getQueryData([
    "favoriteCrypto",
  ]);
  const { isDarkMode } = useDarkMode();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleAddFavoriteCrypto(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (favoritesCrypto) {
      if (favoritesCrypto.favorite_crypto_symbol.includes(crypto.symbol)) {
        const filtered = favoritesCrypto.favorite_crypto_symbol.filter(
          (item) => item != crypto.symbol
        );
        addFavoriteCrypto(filtered);
      } else {
        addFavoriteCrypto([
          ...favoritesCrypto.favorite_crypto_symbol,
          crypto.symbol,
        ]);
      }
    } else {
      navigate("/login");
      toast.error("Log in to your accout to add favorite crypto");
    }
  }

  return (
    <Link
      to={`/details?crypto=${crypto.id}`}
      className="flex p-4 text-bgDark dark:text-white items-center justify-between text-xs xs:text-[16px] hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover rounded-lg transition-colors duration-300 h-[60px] text-right "
    >
      <div className="w-[260px] flex gap-2 items-center">
        <button
          className={`text-slate-300 hover:text-yellow-500 transition-colors duration-300 cursor-pointer ${
            favoritesCrypto?.favorite_crypto_symbol.includes(crypto.symbol) &&
            "text-yellow-500"
          }`}
          onClick={(e) => handleAddFavoriteCrypto(e)}
        >
          {favoritesCrypto?.favorite_crypto_symbol.includes(crypto.symbol) ? (
            <FaStar />
          ) : (
            <FaRegStar />
          )}
        </button>
        <img
          className="rounded-full w-6 mx-3 hidden sm:block"
          src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLocaleLowerCase()}@2x.png`}
          alt=""
        />
        {`${crypto.symbol}/USDT`}
      </div>
      <p className="w-full lg:hidden"></p>
      <div className="w-[130px] sm:mr-6 lg:mr-0 mr-0">
        <p>
          {crypto.priceUsd && usdtPrice
            ? formatCurrency(+crypto.priceUsd * usdtPrice!)
            : "--"}
        </p>
        <p className=" text-[10px] text-gray">
          {crypto.priceUsd &&
            (userCurrency
              ? formatCurrency(+crypto.priceUsd! / +userCurrency.rateUsd)
              : formatCurrency(+crypto.priceUsd!))}{" "}
          {userCurrency ? userCurrency.symbol : "USD"}
        </p>
      </div>
      <div className="w-[130px] hidden lg:block">
        <p
          className={` ${
            crypto.priceUsd && +crypto.changePercent24Hr! > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {crypto.priceUsd &&
            (+crypto.changePercent24Hr! > 0
              ? `+${formatCurrency(+crypto.changePercent24Hr!)}`
              : formatCurrency(+crypto.changePercent24Hr!))}
          %
        </p>
      </div>
      <div className="w-[130px] hidden lg:block">
        <p>{formatBigNumbers(+crypto.volumeUsd24Hr)}</p>
      </div>
      <div className="w-[130px] hidden lg:block">
        <p>
          {+crypto.marketCapUsd === 0
            ? "--"
            : formatBigNumbers(+crypto.marketCapUsd)}
        </p>
      </div>
      <div className="w-[130px] justify-center items-center gap-2 ml-3 hidden sm:flex">
        <Link
          to={`/details?crypto=${crypto.id.replace(".", "-").toLowerCase()}`}
          className="p-2 text-xs text-main hover:text-mainHover "
        >
          Details
        </Link>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              fontSize: "12px",
              textTransform: "none",
              backgroundColor: "#ff5700",
              color: "white",
              "&:hover": {
                backgroundColor: "#e84a00",
              },
            }}
          >
            Trade
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              sx: {
                backgroundColor: isDarkMode ? "#141519" : "#f1f5fc",
                color: "white",
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to={`/spot?pair=${crypto.symbol}USDT`}
                className="text-xs tracking-wider  transition-colors duration-300 text-bgDark dark:text-bgWhite hover:text-main dark:hover:text-main w-full h-full p-2"
              >
                {`${crypto.symbol}/USDT`} pair at{" "}
                <span className="font-bold">Spot</span>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ padding: "none" }}>
              <Link
                to={`/futures?${crypto.symbol}USDT`}
                className="text-xs tracking-wider transition-colors duration-300 text-bgDark dark:text-bgWhite hover:text-main dark:hover:text-main w-full h-full p-2"
              >
                {`${crypto.symbol}/USDT`} pair at{" "}
                <span className="font-bold">Futures</span>
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Link>
  );
}
