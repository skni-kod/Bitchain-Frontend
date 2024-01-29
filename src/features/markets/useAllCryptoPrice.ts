import { useQuery } from "@tanstack/react-query";
import { getCryptoPrice } from "../../services/apiCoinCap";

export function useAllCryptoPrice(limit?: number, offset?: number) {
  const { data, isSuccess, refetch } = useQuery({
    queryFn: () => getCryptoPrice(limit, offset),
    queryKey: ["cryptoPrice"],
    // enabled: false,
  });

  return { data, isSuccess, refetch };
}
