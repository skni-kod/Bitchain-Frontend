import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeFundBalance as changeFundBalanceApi } from "../services/apiWalletOperations";
import toast from "react-hot-toast";

export function useChangeFundBalance() {
  const queryClient = useQueryClient();
  const { mutate: changeFundBalance, isSuccess } = useMutation({
    mutationFn: changeFundBalanceApi,
    onSuccess: () => {
      toast.success("Balance changed");
      queryClient.invalidateQueries({ queryKey: ["fundBalance"] });
      queryClient.invalidateQueries({ queryKey: ["fundHistory"] });
    },
    onError: () => {
      toast.error("error");
    },
  });

  return { changeFundBalance, isSuccess };
}
