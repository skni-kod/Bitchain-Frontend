import React from "react";
import { getCryptoPrice } from "../services/apiCoinCap";

export default function Markets() {
  const data = getCryptoPrice();
  console.log(data);
  return <div>Markets</div>;
}
