import React from "react";
import Logo from "../Logo";
import DropdownItem from "./DropdownItem";
import DropdownButton from "./DropdownButton";
import Dropdown from "./Dropdown";
import ToggleMobileNavBurger from "./ToggleMobileNavBurger";

import { FaPlus } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { MdOutlineMultilineChart } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { RiStackLine } from "react-icons/ri";
import { RiFolderInfoLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiHotDog } from "react-icons/gi";
import AccountBalanceCard from "./AccountBalanceCard";
import DarkModeButton from "./DarkModeButton";
import Button from "../Button";
import { useUserWidth } from "../../hooks/useUserWidth";

const Navigation: React.FC = () => {
  // const userAuthenticated = false; //Pablo kiedy logowanie?????????????????????????????????????????
  const userAuthenticated = true; //Pablo kiedy logowanie?????????????????????????????????????????
  const width = useUserWidth();

  //console.log(width);

  return (
    <div className="relative flex h-16 w-full justify-between items-center bg-white dark:bg-bgDark dark:text-white border-b-[1px] border-solid border-slate-100 dark:border-bgDark1Hover text-sm px-6 z-50 transition-colors duration-300 ">
      <Logo />
      {width > 820 && (
        <div className="flex justify-center items-center h-full">
          <DropdownButton text={"Buy Crypto"} type={"dropdown"}>
            <Dropdown onCloseFunction={undefined as never}>
              <DropdownItem
                icon={<FaPlus />}
                title="Quick buy"
                desc="Buy or sell your crypto"
                to="quickbuy"
                onCloseFunction={undefined as never}
              />
              <DropdownItem
                icon={<FaPeopleArrows />}
                title="P2P"
                desc="Exchange with others"
                to="p2p"
                onCloseFunction={undefined as never}
              />
            </Dropdown>
          </DropdownButton>
          <DropdownButton text={"Markets"} type={"link"} to="markets">
            <p></p>
          </DropdownButton>
          <DropdownButton text={"Trade"} type={"dropdown"}>
            <Dropdown onCloseFunction={undefined as never}>
              <DropdownItem
                icon={<MdOutlineMultilineChart />}
                title="Spot"
                desc="Trade assets with tools"
                to="spot"
                onCloseFunction={undefined as never}
              />
              <DropdownItem
                icon={<FaChartLine />}
                title="Futures"
                desc="Invest with borrowed funds"
                to="futures"
                onCloseFunction={undefined as never}
              />
              <DropdownItem
                icon={<FaArrowsRotate />}
                title="Convert"
                desc="Convert between crypto"
                to="convert"
                onCloseFunction={undefined as never}
              />
            </Dropdown>
          </DropdownButton>
          <DropdownButton text={"Tools"} type={"dropdown"}>
            <Dropdown onCloseFunction={undefined as never}>
              <DropdownItem
                icon={<GiHotDog />}
                title="Mati"
                desc="Zrób"
                to=""
                onCloseFunction={undefined as never}
              />
              <DropdownItem
                icon={<GiHotDog />}
                title="Tutaj"
                desc="Coś"
                to=""
                onCloseFunction={undefined as never}
              />
              <DropdownItem
                icon={<GiHotDog />}
                title="Fajnego"
                desc="Co mówiłeś"
                to=""
                onCloseFunction={undefined as never}
              />
            </Dropdown>
          </DropdownButton>
          <DropdownButton text={"More"} type={"dropdown"}>
            <Dropdown onCloseFunction={undefined as never}>
              <DropdownItem
                icon={<RiStackLine />}
                title="Stacking"
                desc="Earn daily"
                to="stack"
                onCloseFunction={undefined as never}
              />
              <DropdownItem
                icon={<HiOutlineClipboardDocumentList />}
                title="Leaderboard"
                desc="Let's see the best investors"
                to="leaderboard"
                onCloseFunction={undefined as never}
              />
              <DropdownItem
                icon={<RiFolderInfoLine />}
                title="About Us"
                desc="Something about the project"
                to="about"
                onCloseFunction={undefined as never}
              />
            </Dropdown>
          </DropdownButton>
        </div>
      )}
      <div className="flex justify-center items-center h-full">
        {width > 420 && (userAuthenticated ? (
          <DropdownButton
            text={
              <p className="flex justify-center items-center gap-2">
                User Name{" "}
                <img className="w-7 rounded-full" src="default-user.jpg" />
              </p>
            }
            type={"dropdown"}
          >
            <Dropdown onCloseFunction={undefined as never} direction="right-0">
              <AccountBalanceCard />
              <DropdownItem
                title="Assets & History"
                to="account"
                onCloseFunction={undefined as never}
              />
              <DropdownItem
                title="Account settings"
                to="settings"
                onCloseFunction={undefined as never}
              />
              <DropdownItem
                title="Logout"
                to=""
                onCloseFunction={undefined as never}
                textColor="text-rose-600"
              />
            </Dropdown>
          </DropdownButton>
        ) : (
          <>
            <Button type="link" to="login" bgType="transparent">
              Log in
            </Button>
            <Button type="link" to="signup">
              Sign up
            </Button>
          </>
        ))}
        <DarkModeButton />
        {width < 820 && <ToggleMobileNavBurger />}
      </div>
    </div>
  );
};

export default Navigation;
