import React from "react";
import { useSearchParams } from "react-router-dom";

export default function PnlAnalysis() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabName = searchParams.get("tab");
  return <div>PnlAnalysis {tabName}</div>;
}
