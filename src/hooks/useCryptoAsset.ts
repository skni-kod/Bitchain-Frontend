import { useQuery } from "@tanstack/react-query";
import { getCryptoAssets } from "../services/apiCoinCap";

export function useCryptoAsset(
  id: string | null,
  refetchInterval: boolean = true
) {
  const refetchInter = refetchInterval ? 2000 : false;
  const { data, isSuccess, refetch, isRefetching } = useQuery({
    queryFn: () => getCryptoAssets(id),
    queryKey: ["cryptoAsset"],
    refetchInterval: refetchInter,
  });
  return { data, isSuccess, refetch, isRefetching };
}
