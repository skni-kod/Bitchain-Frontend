import { useQuery } from "@tanstack/react-query";
import { getPriceHistory } from "../../services/apiCoinCap";

export function usePriceHistory(id: string) {
  const { data, isSuccess } = useQuery({
    queryFn: () => getPriceHistory(id),
    queryKey: ["priceHistory"],
  });

  return { data, isSuccess };
}
