import Modal from "../Modal";
import IconButton from "../IconButton";
import { SlGlobe } from "react-icons/sl";
import SelectCurrenciesWindows from "./SelectCurrenciesWindows";
import { useTether } from "../../features/markets/useTether";

export default function SelectCurrency() {
  const { data } = useTether();

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
