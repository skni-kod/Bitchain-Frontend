import { useMutation } from "@tanstack/react-query";
import { getSpecificCryptoInfo as getSpecificCryptoInfoApi } from "../../services/apiCoinCap";
import { useState } from "react";
import { CryptoInfoData } from "./TopHotCryptoCard";

export interface mutateProps {
  id: string;
  interval: string;
  start: number;
  end: number;
}

export function useSpecificCryptoInfo() {
  const [data, setData] = useState<CryptoInfoData>();
  const { mutate: getSpecificCryptoInfo, isSuccess } = useMutation({
    mutationFn: getSpecificCryptoInfoApi,
    onSuccess: (data) => {
      setData(data);
    },
  });

  return { getSpecificCryptoInfo, isSuccess, data };
}
