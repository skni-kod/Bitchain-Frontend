import React from "react";
import Modal from "../../ui/Modal";

export default function TransferBtn() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="transfer">
          <button className="flex w-[120px] h-[42px] justify-center items-center gap-2 border-2 border-solid border-main text-sm rounded-lg text-main hover:bg-main hover:text-white transition-colors duration-300">
            Transfer
          </button>
        </Modal.Open>
        <Modal.Window name="transfer">
          <div>Transfer</div>
        </Modal.Window>
      </Modal>
    </div>
  );
}
