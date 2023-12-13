import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

interface ApiError {
  email?: string[];
  password?: string[];
}

export function useLogin() {
  let errors: ApiError = {};
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
      errors = JSON.parse(err.message) as ApiError;
      console.log(errors);
      toast.error(err.message);
    },
  });

  return { login, isPending, errors };
}
