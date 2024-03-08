import React from "react";
import { SetURLSearchParams, useSearchParams } from "react-router-dom";
import WalletMobileNavButton from "./WalletMobileNavButton";

interface WalletNavItemProps {
  setSearchParams: SetURLSearchParams;
  setTab: (s: string) => void;
  text: string;
  icon: React.ReactNode;
  setContent: (s: React.ReactNode) => void;
  mobile?: boolean;
  onCloseModal?: () => void;
  tab: number;
}

export default function WalletNavItem({
  setSearchParams,
  setTab,
  icon,
  text,
  setContent,
  mobile,
  onCloseModal,
  tab,
}: WalletNavItemProps) {
  const [searchParams] = useSearchParams();

  function onClick() {
    if (onCloseModal) onCloseModal();
    setSearchParams({ tab: tab.toString() });
    setContent(<WalletMobileNavButton icon={icon} text={text} />);
    setTab(tab.toString());
  }

  return (
    <button
      className={`flex justify-between items-center min-w-[220px] w-full p-4 hover:bg-bgWhite1Hover dark:hover:bg-bgDark1Hover text-bgDark dark:text-bgWhite transition-colors duration-300 ${
        mobile && "rounded-lg"
      } ${
        tab.toString() === searchParams.get("tab") &&
        "bg-bgWhite1Hover dark:bg-bgDark1Hover "
      }`}
      onClick={onClick}
    >
      <p
        className={`flex items-center w-full ${
          !mobile ? "justify-start gap-4" : "justify-between"
        }`}
      >
        <span className="text-xl">{icon}</span> {text} {mobile && <span></span>}
      </p>
    </button>
  );
}
