import { useQuery } from "@tanstack/react-query";
import { getFundBalance } from "../services/apiWalletOperations";

export function useGetFundBalance() {
  const { data, isLoading } = useQuery({
    queryFn: getFundBalance,
    queryKey: ["fundBalance"],
  });

  return {data, isLoading}
}
