import { useQuery } from "@tanstack/react-query";
import { getCryptoAssets } from "../services/apiCoinCap";


export function useCryptoAsset(id: string | null) {
  const { data, isSuccess } = useQuery({
    queryFn: () => getCryptoAssets(id),
    queryKey: ["cryptoAsset"],
    refetchInterval: 2000
  });
  return { data, isSuccess };
}
