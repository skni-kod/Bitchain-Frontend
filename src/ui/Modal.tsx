import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

type ModalContextType = {
  openName: string;
  open: (name: string) => void;
  close: () => void;
};

type ModalProps = {
  children: React.ReactNode;
};

type OpenProps = {
  children: React.ReactNode;
  opens: string;
};

type WindowProps = {
  children: React.ReactNode;
  name: string;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => {
    setOpenName("");
  };
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }: OpenProps) {
  const { open } = useContext(ModalContext)!;
  return cloneElement(children as React.ReactElement, {
    onClick: () => open(opens),
  });
}

function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext)!;

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed h-screen w-screen z-50">
      <div className="h-full w-full bg-bgDark opacity-20"></div>
      <div className="fixed top-1/2 left-1/2 bg-white dark:bg-bgDark -translate-y-1/2 -translate-x-1/2 z-[51] rounded-lg p-6  ">
        <div>
          {cloneElement(children as React.ReactElement, {
            onCloseModal: close,
          })}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
