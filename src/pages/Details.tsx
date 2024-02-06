import React, { useEffect } from "react";
import DetailsHeader from "../ui/cryptoDetails/DetailsHeader";
import { SetURLSearchParams, useSearchParams } from "react-router-dom";
import { useRates } from "../features/markets/useRates";
import { useCryptoAsset } from "../hooks/useCryptoAsset";
import { useSpecificCryptoInfo } from "../features/markets/useSpecificCryptoInfo";

export default function Details() {
  const [searchParams]: [URLSearchParams, SetURLSearchParams] =
    useSearchParams();
  const cryptoName = searchParams.get("crypto");
  const { data: cryptoInfo, isSuccess } = useCryptoAsset(cryptoName);
  const {
    data: cryptoTimePrice,
    getSpecificCryptoInfo,
    isSuccess,
  } = useSpecificCryptoInfo();

//   useEffect(function () {
//     getSpecificCryptoInfo({ id: cryptoName, interval: "15m",  });
//   }, []);

  console.log(data);

  return (
    <div>
      <DetailsHeader />
    </div>
  );
}
