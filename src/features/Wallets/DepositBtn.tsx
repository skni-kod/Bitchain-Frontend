import React from "react";
import Modal from "../../ui/Modal";
import { useChangeFundBalance } from "../../hooks/useChangeFundBalance";

export default function DepositBtn() {
  const { changeFundBalance } = useChangeFundBalance();
  function onClick() {
    changeFundBalance({
      transaction_amount: 10,
      transaction_currency: "SOL",
      transaction_price_usd: "1232",
      transaction_type: "spot",
    });
  }

  return (
    <div>
      <Modal>
        <Modal.Open opens="deposit">
          <button className="flex w-[120px] h-[42px] justify-center items-center gap-2 border-2 border-solid border-main text-sm rounded-lg hover:text-main bg-main hover:bg-transparent text-white transition-colors duration-300">
            Deposit
          </button>
        </Modal.Open>
        <Modal.Window name="deposit">
          <div>
            <button onClick={onClick}>deposit</button>
          </div>
        </Modal.Window>
      </Modal>
    </div>
  );
}
