import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const { data, isPending } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
  });

  return {data, isPending}
}
