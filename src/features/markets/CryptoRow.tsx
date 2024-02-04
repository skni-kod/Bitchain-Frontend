import { useUserWidth } from "../../hooks/useUserWidth";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { CryptoData, UserCurrencyType } from "./MarketsTableRows";
import { formatBigNumbers, formatCurrency } from "../../utils/helpers";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { addFavoriteCrypto } from "../../services/apiAuth";

interface CryptoRowProps {
  crypto: CryptoData;
  userCurrency: UserCurrencyType | undefined;
  usdtPrice: number | undefined;
}

export default function CryptoRow({
  crypto,
  userCurrency,
  usdtPrice,
}: CryptoRowProps) {
  const width = useUserWidth();
  const { isDarkMode } = useDarkMode();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //Pawel musi zrobic polubione crypto

  return (
    <div className="flex p-4 text-bgDark dark:text-white items-center justify-between text-xs xs:text-[16px] hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover rounded-lg transition-colors duration-300 h-[60px] text-right ">
      <div className="w-[260px] flex gap-2 items-center">
        <button className="text-slate-300 hover:text-yellow-500 transition-colors duration-300 cursor-pointer" onClick={addFavoriteCrypto}>
          <FaRegStar />
        </button>
        <img
          className="rounded-full w-6 mx-3 hidden sm:block"
          src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLocaleLowerCase()}@2x.png`}
        />
        {`${crypto.symbol}/USDT`}
      </div>
      {width > 1024 ? (
        <>
          <div className="w-[130px]">
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
          <div className="w-[130px]">
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
          <div className="w-[130px]">
            <p>{formatBigNumbers(crypto.volumeUsd24Hr)}</p>
          </div>
          <div className="w-[130px]">
            <p>
              {+crypto.marketCapUsd === 0
                ? "--"
                : formatBigNumbers(crypto.marketCapUsd)}
            </p>
          </div>
          <div className="w-[130px] flex justify-center items-center gap-2 ml-3">
            <Link
              to={`/details/${crypto.name.replace(".", "-").toLowerCase()}/`}
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
                    to={`/spot?${crypto.symbol}USDT`}
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
        </>
      ) : (
        <div className="flex  ">
          <div className="sm:w-[130px]">
            <p>{formatCurrency(+crypto.priceUsd * usdtPrice!)}</p>
            <p className=" text-[10px] text-gray">
              {crypto.priceUsd &&
                (userCurrency
                  ? formatCurrency(+crypto.priceUsd! / +userCurrency.rateUsd)
                  : formatCurrency(+crypto.priceUsd!))}{" "}
              {userCurrency ? userCurrency.symbol : "USD"}
            </p>
          </div>
          <div className="hidden sm:flex w-[130px]  justify-center items-center gap-2 ml-8">
            <Link
              to={`/details/${crypto.name.replace(".", "-").toLowerCase()}/`}
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
                    to={`/spot?${crypto.symbol}USDT`}
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
        </div>
      )}
    </div>
  );
}
