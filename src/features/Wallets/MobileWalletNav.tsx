import { ReactElement, cloneElement } from "react";
import { HiXMark } from "react-icons/hi2";

interface Props {
  onCloseModal: () => void;
  children: ReactElement[];
}

export default function MobileWalletNav({ onCloseModal, children }: Props) {
  return (
    <div className="flex justify-center items-end flex-col w-full max-w-[400px] gap-2">
      <button
        onClick={onCloseModal}
        className="text-bgDark dark:text-bgWhite p-2 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover rounded-full transition-colors duration-300 text-2xl"
      >
        <HiXMark />
      </button>
      {children.map((item) => cloneElement(item, { onCloseModal }))}
    </div>
  );
}
