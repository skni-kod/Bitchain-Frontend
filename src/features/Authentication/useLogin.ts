import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast/headless";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: (variables: { email: string; password: string }) => {
      return loginApi(variables);
    },
    onSuccess: (data) => {
      toast.success("Logged successfully");
      console.log(data);
      queryClient.setQueryData(["user"], data);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isPending };
}
