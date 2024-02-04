import { useQuery } from "@tanstack/react-query";
import { getFavoriteCrypto } from "../../services/apiAuth";

export function useGetFavoriteCrypto() {
  const { data, isSuccess } = useQuery({
    queryFn: getFavoriteCrypto,
    queryKey: ["favoriteCrypto"],
  });

  return { data, isSuccess };
}
