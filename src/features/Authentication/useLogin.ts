import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: (variables: { email: string; password: string }) => {
      return loginApi(variables);
    },
    onSuccess: (data) => {
      toast.success("Logged successfully");
      queryClient.setQueryData(["user"], data);
      navigate(-1)
    },
    onError: (err) => {
      const error = JSON.parse(err.message)
      toast.error(error?.non_field_errors?.at(0));
      console.log(err.message);
    },
  });

  return { login, isPending };
}
