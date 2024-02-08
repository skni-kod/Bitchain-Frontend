import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDailyVote as addDailyVoteApi } from "../../services/apiOperations";
import toast from "react-hot-toast";

type useDailyVoteType = {
  action: string;
  symbol: string;
};

export function useDailyVote() {
  const queryClient = useQueryClient();

  const { mutate: addDailyVote } = useMutation({
    mutationFn: ({ action, symbol }: useDailyVoteType) =>
      addDailyVoteApi(action, symbol),
    onSuccess: () => {
      toast.success("You have successfuly voted");
        queryClient.invalidateQueries()
    },
  });

  return addDailyVote;
}
