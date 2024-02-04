import { useQuery } from "@tanstack/react-query";
import { getRates } from "../../services/apiCoinCap";

type dataType = {
  rateUsd: string;
};

type data = {
  data: dataType;
  timestramp: number;
};

export function useTether() {
  const { data } = useQuery({
    queryFn: async () => {
      try {
        const responseData: data = await getRates("tether");
        const modifiedData = responseData.data.rateUsd;
        return modifiedData;
      } catch (error) {
        console.error("Error fetching tether:", error);
        throw error; 
      }
    },
    queryKey: ["USDT"],
    refetchInterval: 20000,
  });
  return { data };
}
