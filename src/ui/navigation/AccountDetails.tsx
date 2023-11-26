import React from "react";
import { useUserWidth } from "../../hooks/useUserWidth";
import Button from "../Button";
import { NavLink } from "react-router-dom";

interface AccountDetails {
  onCloseNav: () => void;
}

export default function AccountDetails({ onCloseNav }: AccountDetails) {
  const width = useUserWidth();
  // const userAuthenticated = false; //Pablo kiedy logowanie?????????????????????????????????????????
  const userAuthenticated = true; //Pablo kiedy logowanie?????????????????????????????????????????

  if (width < 420) {
    if (userAuthenticated) {
      return (
        <NavLink
          to={"overview"}
          className="flex justify-between items-center px-6 py-3 rounded-lg w-60 my-3 hover:text-main dark:bg-bgDark1 transition-colors duration-300"
          onClick={onCloseNav}
        >
          <span>User Name</span>
          <img className="rounded-full w-12" src="default-user.jpg" />
        </NavLink>
      );
    } else {
      return (
        <div className="flex justify-evenly items-center rounded-lg w-60 py-3">
          <Button
            type="link"
            to="login"
            bgType="transparent"
            onClick={onCloseNav}
          >
            Log in
          </Button>
          <Button type="link" to="signup" onClick={onCloseNav}>
            Sign up
          </Button>
        </div>
      );
    }
  }
}
