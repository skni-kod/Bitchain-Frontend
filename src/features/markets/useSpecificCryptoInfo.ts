import { useMutation } from "@tanstack/react-query";
import { getSpecificCryptoInfo as getSpecificCryptoInfoApi } from "../../services/apiCoinCap";

interface mutateProps {
  id: string;
  interval: string;
  start: number;
  end: number;
}

export function useSpecificCryptoInfo() {
  const { mutate: getSpecificCryptoInfo, isPending } = useMutation({
    mutationFn: (data: mutateProps) => {
      const crypto = getSpecificCryptoInfoApi(
        data.id,
        data.interval,
        data.start,
        data.end
      );
      return crypto;
    },
  });

  return { getSpecificCryptoInfo, isPending };
}
