import Modal from "../Modal";
import IconButton from "../IconButton";
import { SlGlobe } from "react-icons/sl";
import SelectCurrenciesWindows from "./SelectCurrenciesWindows";
import { useRates } from "../../features/markets/useRates";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";

export default function SelectCurrency() {
  const { getRate, rate, isSuccess } = useRates();
  const queryClient = useQueryClient();

  const fetchData = useCallback(async () => {
    getRate("tether");
  }, [getRate]);

  useEffect(
    function () {
      fetchData();
    },
    [fetchData]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, [fetchData]);

  useEffect(() => {
    if (isSuccess && rate) {
      queryClient.setQueryData(["USDT"], rate.rateUsd);
    }
  }, [isSuccess, rate, queryClient]);

  return (
    <div>
      <Modal>
        <Modal.Open opens="currency">
          <IconButton>
            <SlGlobe />
          </IconButton>
        </Modal.Open>
        <Modal.Window name="currency">
          <SelectCurrenciesWindows onCloseModal={undefined as never} />
        </Modal.Window>
      </Modal>
    </div>
  );
}
