import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  queryClient.removeQueries();
  navigate("/homepage", { replace: true });
  toast.success("Log out successfully");

  return useLogout
}
