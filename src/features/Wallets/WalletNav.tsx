import React, { useState } from "react";
import { SetURLSearchParams } from "react-router-dom";
import Modal from "../../ui/Modal";
import MobileWalletNav from "./MobileWalletNav";
import WalletNavItem from "./WalletNavItem";
import { useUserWidth } from "../../hooks/useUserWidth";

import { RiExchangeFundsLine } from "react-icons/ri";
import { FiPieChart } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa6";
import { RiStackLine } from "react-icons/ri";
import { RiFileHistoryLine } from "react-icons/ri";
import WalletMobileNavButton from "./WalletMobileNavButton";

interface WalletNavProps {
  setSearchParams: SetURLSearchParams;
  setTab: (s: string) => void;
}

export default function WalletNav({ setSearchParams, setTab }: WalletNavProps) {
  const [content, setContent] = useState<React.ReactNode>(
    <WalletMobileNavButton icon={<FiPieChart />} text="Overview" />
  );
  const width = useUserWidth();

  return (
    <div className="text-bgDark dark:text-bgWhite">
      {width < 750 ? (
        <Modal>
          <Modal.Open opens="nav">
            <button className="w-full p-4 flex justify-between items-center">
              {content}
            </button>
          </Modal.Open>
          <Modal.Window name="nav">
            <MobileWalletNav onCloseModal={undefined as never}>
              <WalletNavItem
                setSearchParams={setSearchParams}
                setTab={setTab}
                text="Overview"
                icon={<FiPieChart />}
                setContent={setContent}
                mobile={width < 750}
                tab={0}
                key={0}
                onCloseModal={undefined as never}
              />
              <WalletNavItem
                setSearchParams={setSearchParams}
                setTab={setTab}
                text="Fund Account"
                icon={<RiExchangeFundsLine />}
                setContent={setContent}
                mobile={width < 750}
                key={1}
                tab={1}
                onCloseModal={undefined as never}
              />
              <WalletNavItem
                setSearchParams={setSearchParams}
                setTab={setTab}
                text="Futures Account"
                icon={<FaChartLine />}
                setContent={setContent}
                mobile={width < 750}
                key={2}
                tab={2}
                onCloseModal={undefined as never}
              />
              <WalletNavItem
                setSearchParams={setSearchParams}
                setTab={setTab}
                text="Staking Account"
                icon={<RiStackLine />}
                setContent={setContent}
                mobile={width < 750}
                key={3}
                tab={3}
                onCloseModal={undefined as never}
              />
              <WalletNavItem
                setSearchParams={setSearchParams}
                setTab={setTab}
                text="Asset Records"
                icon={<RiFileHistoryLine />}
                setContent={setContent}
                mobile={width < 750}
                key={4}
                tab={4}
                onCloseModal={undefined as never}
              />
            </MobileWalletNav>
          </Modal.Window>
        </Modal>
      ) : (
        <div className="flex flex-col w-[250px] border-r border-r-solid border-r-slate-100 dark:border-stone-700 gap-3 mt-7">
          <WalletNavItem
            setSearchParams={setSearchParams}
            setTab={setTab}
            text="Overview"
            icon={<FiPieChart />}
            setContent={setContent}
            tab={0}
          />
          <WalletNavItem
            setSearchParams={setSearchParams}
            setTab={setTab}
            text="Fund Account"
            icon={<RiExchangeFundsLine />}
            setContent={setContent}
            tab={1}
          />
          <WalletNavItem
            setSearchParams={setSearchParams}
            setTab={setTab}
            text="Futures Account"
            icon={<FaChartLine />}
            setContent={setContent}
            tab={2}
          />
          <WalletNavItem
            setSearchParams={setSearchParams}
            setTab={setTab}
            text="Staking Account"
            icon={<RiStackLine />}
            setContent={setContent}
            tab={3}
          />
          <WalletNavItem
            setSearchParams={setSearchParams}
            setTab={setTab}
            text="Asset Records"
            icon={<RiFileHistoryLine />}
            setContent={setContent}
            tab={4}
          />
        </div>
      )}
    </div>
  );
}
