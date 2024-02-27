import { useQuery } from "@tanstack/react-query";
import { getDailyVotes } from "../../services/apiOperations";

export function useGetDailyVotes(symbol: string) {
  const { data, isSuccess, refetch } = useQuery({
    queryFn: () => getDailyVotes(symbol),
    queryKey: ["dailyVotes"],
  });

  return { data, isSuccess, refetch };
}
