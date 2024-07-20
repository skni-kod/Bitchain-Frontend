import React from "react";
import Modal from "../../ui/Modal";

export default function ConvertBtn() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="convert">
          <button className="flex w-[120px] h-[42px] justify-center items-center gap-2 border-2 border-solid border-main text-sm rounded-lg text-main hover:bg-main hover:text-white transition-colors duration-300">
            Convert
          </button>
        </Modal.Open>
        <Modal.Window name="convert">
          <div>Convert</div>
        </Modal.Window>
      </Modal>
    </div>
  );
}
