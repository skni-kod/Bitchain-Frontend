import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CryptoDataObject } from "../../pages/Details";
import { userCurrency } from "./DetailsHeader";
import useDarkMode from "../../hooks/useDarkMode";
import { formatCurrency, formatBigNumbers } from "../../utils/helpers";

interface MarketInformationProps {
  crypto: CryptoDataObject;
  userCurrency: userCurrency;
}

export default function MarketInformation({
  crypto,
  userCurrency,
}: MarketInformationProps) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { isDarkMode } = useDarkMode();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="text-bgDark dark:text-bgWhite p-4">
      <p className="text-xl my-3">{crypto.data.symbol} Market Information</p>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            backgroundColor: `${!isDarkMode ? "#ffffff" : "#0a0b0d"}`,
            boxShadow: "none",
            border: "none",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              <span className="text-bgDark dark:text-white">
                <IoIosArrowDown />
              </span>
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{
              minHeight: "0px",
              height: "48px",
              "&.Mui-expanded": {
                minHeight: "0px",
              },
            }}
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                color: "#8f8a88",
                fontSize: "14px",
                marginRight: "auto",
              }}
            >
              Popularity
            </Typography>
            <Typography
              sx={{
                color: `${isDarkMode ? "#f0f0f0" : "#0a0b0d"}`,
                marginRight: "8px",
              }}
            >
              #{crypto.data.rank}
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ padding: "0px 16px" }}>
            <Typography
              sx={{
                color: "#8f8a88",
                fontSize: "12px",
              }}
            >
              Popularity is based on the relative market cap of assets.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            backgroundColor: `${!isDarkMode ? "#ffffff" : "#0a0b0d"}`,
            boxShadow: "none",
            border: "none",
          }}
        >
          <AccordionSummary
            expandIcon={
              <span className="text-bgDark dark:text-white">
                <IoIosArrowDown />
              </span>
            }
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={{
              minHeight: "0px",
              height: "48px",
              "&.Mui-expanded": {
                minHeight: "0px",
              },
            }}
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                color: "#8f8a88",
                fontSize: "14px",
                marginRight: "auto",
              }}
            >
              Market Cap
            </Typography>
            <Typography
              sx={{
                color: `${isDarkMode ? "#f0f0f0" : "#0a0b0d"}`,
                marginRight: "8px",
              }}
            >
              {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
              {userCurrency
                ? formatBigNumbers(
                    +crypto.data.marketCapUsd / userCurrency.rateUsd
                  )
                : formatBigNumbers(+crypto.data.marketCapUsd)}
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ padding: "0px 16px" }}>
            <Typography
              sx={{
                color: "#8f8a88",
                fontSize: "12px",
              }}
            >
              Market cap is calculated by multiplying the asset's circulating
              supply with its current price.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{
            backgroundColor: `${!isDarkMode ? "#ffffff" : "#0a0b0d"}`,
            boxShadow: "none",
            border: "none",
          }}
        >
          <AccordionSummary
            expandIcon={
              <span className="text-bgDark dark:text-white">
                <IoIosArrowDown />
              </span>
            }
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={{
              minHeight: "0px",
              height: "48px",
              "&.Mui-expanded": {
                minHeight: "0px",
              },
            }}
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                color: "#8f8a88",
                fontSize: "14px",
                marginRight: "auto",
              }}
            >
              Volume (24hours)
            </Typography>
            <Typography
              sx={{
                color: `${isDarkMode ? "#f0f0f0" : "#0a0b0d"}`,
                marginRight: "8px",
              }}
            >
              {userCurrency ? userCurrency.currencySymbol : "$"}{" "}
              {userCurrency
                ? formatBigNumbers(
                    +crypto.data.volumeUsd24Hr / userCurrency.rateUsd
                  )
                : formatBigNumbers(+crypto.data.volumeUsd24Hr)}
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ padding: "0px 16px" }}>
            <Typography
              sx={{
                color: "#8f8a88",
                fontSize: "12px",
              }}
            >
              The total dollar value of all transactions for this asset over the
              past 24 hours.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{
            backgroundColor: `${!isDarkMode ? "#ffffff" : "#0a0b0d"}`,
            boxShadow: "none",
            border: "none",
          }}
        >
          <AccordionSummary
            expandIcon={
              <span className="text-bgDark dark:text-white">
                <IoIosArrowDown />
              </span>
            }
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            sx={{
              minHeight: "0px",
              height: "48px",
              "&.Mui-expanded": {
                minHeight: "0px",
              },
            }}
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                color: "#8f8a88",
                fontSize: "14px",
                marginRight: "auto",
              }}
            >
              Circulation Supply
            </Typography>
            <Typography
              sx={{
                color: `${isDarkMode ? "#f0f0f0" : "#0a0b0d"}`,
                marginRight: "8px",
              }}
            >
              <span className="text-right">
                {formatBigNumbers(+crypto.data.supply)}{" "}
                {!crypto.data.maxSupply
                  ? ""
                  : `- ${formatCurrency(
                      (+crypto.data.supply / +crypto.data.maxSupply) * 100
                    )}%`}
              </span>
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ padding: "0px 16px" }}>
            <Typography
              sx={{
                color: "#8f8a88",
                fontSize: "12px",
              }}
            >
              The number of coins circulating in the market and available to the
              public for trading, similar to publicly traded shares on the stock
              market.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          sx={{
            backgroundColor: `${!isDarkMode ? "#ffffff" : "#0a0b0d"}`,
            boxShadow: "none",
            border: "none",
          }}
        >
          <AccordionSummary
            expandIcon={
              <span className="text-bgDark dark:text-white">
                <IoIosArrowDown />
              </span>
            }
            aria-controls="panel5bh-content"
            id="panel5bh-header"
            sx={{
              minHeight: "0px",
              height: "48px",
              "&.Mui-expanded": {
                minHeight: "0px",
              },
            }}
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
                color: "#8f8a88",
                fontSize: "14px",
                marginRight: "auto",
              }}
            >
              Maximum Supply
            </Typography>
            <Typography
              sx={{
                color: `${isDarkMode ? "#f0f0f0" : "#0a0b0d"}`,
                marginRight: "8px",
              }}
            >
              {crypto.data.maxSupply
                ? formatBigNumbers(+crypto.data.maxSupply)
                : "Infinity"}
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ padding: "0px 16px" }}>
            <Typography
              sx={{
                color: "#8f8a88",
                fontSize: "12px",
              }}
            >
              The number of coins circulating in the market and available to the
              public for trading, similar to publicly traded shares on the stock
              market.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
