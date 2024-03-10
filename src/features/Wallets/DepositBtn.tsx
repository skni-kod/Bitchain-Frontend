import React from "react";
import Modal from "../../ui/Modal";

export default function DepositBtn() {
  function onClick() {}

  return (
    <div>
      <Modal>
        <Modal.Open opens="deposit">
          <button
            onClick={onClick}
            className="flex w-[120px] h-[42px] justify-center items-center gap-2 border-2 border-solid border-main text-sm rounded-lg hover:text-main bg-main hover:bg-transparent text-white transition-colors duration-300"
          >
            Deposit
          </button>
        </Modal.Open>
        <Modal.Window name="deposit">
          <div>deposit</div>
        </Modal.Window>
      </Modal>
    </div>
  );
}
