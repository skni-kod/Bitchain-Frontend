import { useQuery } from "@tanstack/react-query";
import { getFundHistory } from "../services/apiWalletOperations";

export function useGetFundHistory() {
  const { data, isLoading } = useQuery({
    queryFn: getFundHistory,
    queryKey: ["fundHistory"],
  });

  return { data, isLoading };
}
