import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavoriteCrypto as addFavoriteCryptoApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useAddFavoriteCrypto() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: addFavoriteCrypto, isSuccess } = useMutation({
    mutationFn: addFavoriteCryptoApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favoriteCrypto"] });
    },
    onError: () => {
      toast.error("Log in to your account to add favorite crypto");
      navigate("/login");
    },
  });

  return { addFavoriteCrypto, isSuccess };
}
