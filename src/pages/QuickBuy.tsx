import React from "react";
import { useLocation } from "react-router-dom";

export default function QuickBuy() {
  const { state } = useLocation();
  const amount = state?.amount ?? 0; // z crypto details mozna dostac amount

  return <div>QuickBuy {amount}</div>;
}
