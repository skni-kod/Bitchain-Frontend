import { useQuery } from "@tanstack/react-query";
import { getRates } from "../../services/apiCoinCap";

export function useRates() {
  const { data, isLoading } = useQuery({
    queryFn: getRates,
    queryKey: ["rates"],
  });
  return {data, isLoading}
}
