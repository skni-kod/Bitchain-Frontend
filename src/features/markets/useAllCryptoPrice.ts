import { useQuery } from "@tanstack/react-query";
import { getCryptoPrice } from "../../services/apiCoinCap";

export function useAllCryptoPrice(limit?: number, offset?: number) {
  const { data, isSuccess } = useQuery({
    queryFn: () => getCryptoPrice(limit, offset),
    queryKey: ["cryptoPrice"],
  });

  return { data, isSuccess };
}