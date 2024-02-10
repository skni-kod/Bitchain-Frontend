import { useQuery } from "@tanstack/react-query";
import { getCryptoPrice } from "../../services/apiCoinCap";

export function useAllCryptoPrice(
  limit?: number,
  offset?: number,
  refetchInterval: boolean = true
) {
  const refetch = refetchInterval ? 2000 : false;
  const { data, isSuccess } = useQuery({
    queryFn: () => getCryptoPrice(limit, offset),
    queryKey: ["cryptoPrice"],
    refetchInterval: refetch,
  });

  return { data, isSuccess };
}
