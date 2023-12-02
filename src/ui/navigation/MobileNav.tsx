import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import AccordionButton from "./AccordionButton";
import DropdownItem from "./DropdownItem";
import AccountDetails from "./AccountDetails";
import { useClickOutside } from "../../hooks/useClickOutside";

import { FaPlus } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { MdOutlineMultilineChart } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { RiStackLine } from "react-icons/ri";
import { RiFolderInfoLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiHotDog } from "react-icons/gi";
import MobileNavButton from "./MobileNavButton";

interface MobileNavProps {
  open: boolean;
  onCloseNav: () => void;
  OnClickOutside: (e: MouseEvent)=> void
}

export default function MobileNav({ open, onCloseNav, OnClickOutside }: MobileNavProps) {
  // const userAuthenticated = false; //Pablo kiedy logowanie?????????????????????????????????????????
  const userAuthenticated = true; //Pablo kiedy logowanie?????????????????????????????????????????
  const portalContainer = document.getElementById("root")!;
  const [openCard, setOpenCard] = useState("");
  const ref = useClickOutside({ OnClickOutside });

  const variants = {
    open: {
      x: 0,
    },
    hidden: {
      x: "100%",
    },
  };

  const variantsAccorion = {
    hidden: {
      height: 0,
    },
    open: {
      height: "fit-content",
    },
  };

  function setOpen(card: string) {
    if (card === openCard) {
      setOpenCard("");
    } else {
      setOpenCard(card);
    }
  }

  return (
    <div>
      {createPortal(
        <div className="absolute h-full w-full top-0 left-0 overflow-x-hidden ">
          <motion.div
            variants={variants}
            transition={{ ease: "easeInOut" }}
            ref={ref as React.RefObject<HTMLDivElement>}
            animate={open ? "open" : "hidden"}
            className="absolute flex justify-start items-center flex-col top-0 pt-16 right-0 z-40 h-full xs:w-72 w-full bg-white dark:bg-bgDark1 transition-colors duration-300 border-l-[1px] border-solid border-slate-100 dark:border-bgDark1Hover text-dark dark:text-white overflow-auto"
          >
            <AccountDetails onCloseNav={onCloseNav} />
            <AccordionButton
              text="Buy Crypto"
              setOpen={setOpen}
              openCard={openCard}
            />
            <motion.div
              className={`flex flex-col origin-top w-full px-6 `}
              variants={variantsAccorion}
              animate={openCard === "buycrypto" ? "open" : "hidden"}
              transition={{ ease: "easeInOut" }}
            >
              <div className="overflow-hidden">
                <DropdownItem
                  icon={<FaPlus />}
                  title="Quick buy"
                  desc="Buy or sell your crypto"
                  to="quickbuy"
                  onCloseFunction={onCloseNav}
                />
                <DropdownItem
                  icon={<FaPeopleArrows />}
                  title="P2P"
                  desc="Exchange with others"
                  to="p2p"
                  onCloseFunction={onCloseNav}
                />
              </div>
            </motion.div>
            <MobileNavButton
              text="Markets"
              to="markets"
              onCloseFunction={onCloseNav}
            />
            <AccordionButton
              text="Trade"
              setOpen={setOpen}
              openCard={openCard}
            />
            <motion.div
              className={`flex flex-col origin-top w-full px-6 `}
              variants={variantsAccorion}
              animate={openCard === "trade" ? "open" : "hidden"}
              transition={{ ease: "easeInOut" }}
            >
                <div className="overflow-hidden"> 
                  <DropdownItem
                    icon={<MdOutlineMultilineChart />}
                    title="Spot"
                    desc="Trade assets with tools"
                    to="spot"
                    onCloseFunction={onCloseNav}
                  />
                  <DropdownItem
                    icon={<FaChartLine />}
                    title="Futures"
                    desc="Invest with borrowed funds"
                    to="futures"
                    onCloseFunction={onCloseNav}
                  />
                  <DropdownItem
                    icon={<FaArrowsRotate />}
                    title="Convert"
                    desc="Convert between crypto"
                    to="convert"
                    onCloseFunction={onCloseNav}
                  />
                </div>
            </motion.div>

            <AccordionButton
              text="Tools"
              setOpen={setOpen}
              openCard={openCard}
            />
            <motion.div
              className={`flex flex-col origin-top w-full px-6`}
              variants={variantsAccorion}
              animate={openCard === "tools" ? "open" : "hidden"}
              transition={{ ease: "easeInOut" }}
            >
              <div className=" overflow-hidden">
                <DropdownItem
                  icon={<GiHotDog />}
                  title="Mati"
                  desc="Zrób"
                  to=""
                  onCloseFunction={onCloseNav}
                />
                <DropdownItem
                  icon={<GiHotDog />}
                  title="Tutaj"
                  desc="Coś"
                  to=""
                  onCloseFunction={onCloseNav}
                />
                <DropdownItem
                  icon={<GiHotDog />}
                  title="Fajnego"
                  desc="Co mówiłeś"
                  to=""
                  onCloseFunction={onCloseNav}
                />
              </div>
            </motion.div>

            <AccordionButton
              text="More"
              setOpen={setOpen}
              openCard={openCard}
            />
            <motion.div
              className={`flex flex-col origin-top w-full px-6 `}
              variants={variantsAccorion}
              animate={openCard === "more" ? "open" : "hidden"}
              transition={{ ease: "easeInOut" }}
            >
              <div className="overflow-hidden ">
                <DropdownItem
                  icon={<RiStackLine />}
                  title="Stacking"
                  desc="Earn daily"
                  to="stack"
                  onCloseFunction={onCloseNav}
                />
                <DropdownItem
                  icon={<HiOutlineClipboardDocumentList />}
                  title="Leaderboard"
                  desc="Let's see the best investors"
                  to="leaderboard"
                  onCloseFunction={onCloseNav}
                />
                <DropdownItem
                  icon={<RiFolderInfoLine />}
                  title="About Us"
                  desc="Something about the project"
                  to="about"
                  onCloseFunction={onCloseNav}
                />
              </div>
            </motion.div>

            <div className="bg-white dark:bg-bgDark1 h-full w-full"></div>
            {userAuthenticated && (
              <MobileNavButton
                text="Log out"
                to=""
                textColor="text-rose-600"
                onCloseFunction={onCloseNav}
              />
            )}
          </motion.div>
        </div>,
        portalContainer
      )}
    </div>
  );
}
