import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SellForm from "../features/quickBuy/SellForm";
import BuyForm from "../features/quickBuy/BuyForm";
import BuySellButtons from "../features/quickBuy/BuySellButtons";

export default function QuickBuy() {
  const { state } = useLocation();
  const [sell, setSell] = useState<boolean>(false);

  const amount = state?.amount ?? 0; // z crypto details mozna dostac amount

  return (
    <div className="flex flex-col justify-center items-center ">
      <BuySellButtons sell={sell} setSell={setSell} />
      {sell ? <BuyForm amount={amount} /> : <SellForm />}
    </div>
  );
}
