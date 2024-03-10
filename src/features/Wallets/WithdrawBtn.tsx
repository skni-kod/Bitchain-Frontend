import React from "react";
import Modal from "../../ui/Modal";

export default function WithdrawBtn() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="withdraw">
          <button className="flex w-[120px] h-[42px] justify-center items-center gap-2 border-2 border-solid border-main text-sm rounded-lg text-main hover:bg-main hover:text-white transition-colors duration-300">
            Withdraw
          </button>
        </Modal.Open>
        <Modal.Window name="withdraw">
          <div>Withdraw</div>
        </Modal.Window>
      </Modal>
    </div>
  );
}
