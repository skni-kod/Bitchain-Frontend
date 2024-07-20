import { useQuery } from "@tanstack/react-query";
import { getFundHistory } from "../services/apiWalletOperations";
import { FundHistoryItemInterface } from "../interfaces/FundHistoryItemInterface";

export function useGetFundHistory(): {
  data: FundHistoryItemInterface[];
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery({
    queryFn: getFundHistory,
    queryKey: ["fundHistory"],
  });

  return { data, isLoading };
}
