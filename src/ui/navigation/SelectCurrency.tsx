import { CiGlobe } from "react-icons/ci";
import Modal from "../Modal";
import IconButton from "../IconButton";
import { SlGlobe } from "react-icons/sl";
import SelectCurrenciesWindows from "./SelectCurrenciesWindows";

export default function SelectCurrency() {
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
