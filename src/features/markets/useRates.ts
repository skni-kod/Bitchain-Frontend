import { useMutation } from "@tanstack/react-query";
import { getRates } from "../../services/apiCoinCap";
import { useState } from "react";

type rateType = {
  rateUsd: string;
};

export function useRates() {
  const [rate, setRate] = useState<rateType | null>(null);

  const { mutate: getRate, isSuccess } = useMutation({
    mutationFn: getRates,
    onSuccess: (data) => {
      setRate(data.data);
    },
  });
  return { getRate, isSuccess, rate };
}
